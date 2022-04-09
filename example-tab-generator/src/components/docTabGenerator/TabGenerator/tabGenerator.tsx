import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { TabData, TabDataItem } from "../types";
import { generateTabIcon } from "../IconGenerator/iconGenerator";
import ReferenceCode from "@you54f/theme-github-codeblock/build/theme/ReferenceCodeBlock";

function generateTabItem({
  data,
  key,
  content,
  withLabel = false,
  withLink = false,
}: {
  data: TabData;
  key: string;
  content?: string | JSX.Element;
  withLabel?: boolean;
  withLink?: boolean;
}) {
  const retrievedData: TabDataItem = withLink
    ? data[key]
    : { ...data[key], iconLink: undefined };

  const iconGenerator = withLabel
    ? generateTabIcon(retrievedData)
    : generateTabIcon({
        ...retrievedData,
        iconTitle: undefined,
      });

  if (data[key].contentUrl) {
    const markdown = `
      \`\`\`js 
    ${data[key].contentUrl}
      \`\`\`
      `;
    content = <ReferenceCode language="js" metastring={data[key].contentTitle ? `title="${data[key].contentTitle}"` :" "}>{markdown}</ReferenceCode>;
  }

  const markdown2 = `
  if (contentUrl) {
    content = (
      <>
        {" "}
      </>
    );
  }
  `;

  const generatedTab = (
    <TabItem value={key} label={iconGenerator} key={key}>
      {content}

      {/* <ReferenceCode language="js">{markdown}</ReferenceCode>


      <CodeBlock language="js">{markdown2}</CodeBlock> */}
    </TabItem>
  );
  return generatedTab;
}

export interface TabGeneratorOptions {
  data: TabData;
  withLabel: boolean;
  withLink: boolean;
  groupId?: string;
  autoGenContent?: boolean;
}

function generateGettingStartedTab({
  data,
  withLabel,
  withLink,
}: TabGeneratorOptions) {
  const generatedTab = (
    <Tabs groupId="languages">
      {generateTabItem({
        data,
        key: "js",
        content: `### js`,
        withLabel,
        withLink,
      })}
      {generateTabItem({
        data,
        key: "java",
        content: `### js`,
        withLabel,
        withLink,
      })}
      {generateTabItem({
        data,
        key: "golang",
        content: `### golang`,
        withLabel,
        withLink,
      })}
      {generateTabItem({
        data,
        key: "ruby",
        content: `### ruby`,
        withLabel,
        withLink,
      })}
      {generateTabItem({
        data,
        key: "cplusplus",
        content: `### C++`,
        withLabel,
        withLink,
      })}
      {generateTabItem({
        data,
        key: "docker",
        content: `### Docker`,
        withLabel,
        withLink,
      })}
    </Tabs>
  );
  return generatedTab;
}

function generateCodeTabs({
  groupId,
  data,
  withLabel,
  withLink,
  autoGenContent,
}: TabGeneratorOptions) {
  const generatedTab = (
    <Tabs groupId={groupId ? groupId : "code-tab"}>
      {Object.keys(data).map((key) => {
        return generateTabItem({
          data,
          key,
          content: autoGenContent ? (
            <a href={data[key].iconLink}>
              {data[key].iconTitle} Implemenation Guide
            </a>
          ) : (
            data[key].content
          ),
          contentUrl: data[key].contentUrl,
          withLabel,
          withLink,
        });
      })}
    </Tabs>
  );
  return generatedTab;
}

export { generateTabItem, generateGettingStartedTab, generateCodeTabs };
