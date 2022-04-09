import React, { useEffect, useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import type { ReferenceCodeBlockProps, GitHubReference } from "../types";

const noteStyle: React.CSSProperties = {
  fontSize: ".9em",
  fontWeight: 600,
  color: "#0E75DD",
  textAlign: "center",
  paddingBottom: "13px",
  textDecoration: "underline",
};

/**
 * parses GitHub reference
 * @param {string} ref url to github file
 */
export function parseReference(ref: string): GitHubReference {
  // only required if we get markdown
  // const fullUrl = ref.slice(ref.indexOf("https"), -1).trim().split('\n')[0]

  const [url, loc] = ref.split("#");
  const [org, repo, blob, branch, ...pathSeg] = new global.URL(url).pathname
    .split("/")
    .slice(1);

  const [fromLine, toLine] = loc
    ? loc.split("-").map((lineNr) => parseInt(lineNr.slice(1), 10) - 1)
    : [0, Infinity];
  return {
    url: `https://raw.githubusercontent.com/${org}/${repo}/${branch}/${pathSeg.join(
      "/"
    )}`,
    fromLine,
    toLine,
    title: pathSeg.join("/"),
  };
}

function ReferenceCode(props: ReferenceCodeBlockProps) {
  const [data, setData] = useState<string>("...loading");

  const codeSnippetDetails = parseReference(props.url);

  useEffect(() => {
    const { url, fromLine, toLine } = codeSnippetDetails;

    try {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            setData("failed");
            throw new Error("failed");
          }
          return response.text();
        })
        .then((responseText) =>
          responseText.split("\n").slice(fromLine, (toLine || fromLine) + 1)
        )
        .then((body) =>
          body
            .map((line) =>
              line.slice(
                body.reduce((prev: number, line: string) => {
                  if (line.length === 0) {
                    return prev;
                  }

                  const spaces = line.match(/^\s+/);
                  if (spaces) {
                    return Math.min(prev, spaces[0].length);
                  }

                  return 0;
                }, Infinity)
              )
            )
            .join("\n")
        )
        .then((data) => setData(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const customProps = {
    ...props,
    title: props.title ? props.title : codeSnippetDetails.title,
    children:
      data && data !== "failed"
        ? data
        : props.children
        ? props.children
        : "Failed to fetch content, and no fallback content found",
  };

  return (
    <div>
      <CodeBlock {...customProps}>{customProps.children}</CodeBlock>
      <div style={noteStyle}>
        <a href={props.url} target="_blank">
          See full example on GitHub
        </a>
      </div>
    </div>
  );
}

export default ReferenceCode;
