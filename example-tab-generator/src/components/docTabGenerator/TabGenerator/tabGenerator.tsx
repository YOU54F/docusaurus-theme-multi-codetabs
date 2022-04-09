import React, { useEffect, useState } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { TabData, TabDataItem } from "../types";
import { generateTabIcon } from "../IconGenerator/iconGenerator";
import ReferenceCode from "../ReferenceCodeBlock";
import merge from "deepmerge";
import { meta } from "../meta";
export interface TabItemGeneratorOptions {
  data: TabData;
  key: string;
  content?: string | JSX.Element;
  withLabel?: boolean;
  withLink?: boolean;
}

export interface TabGeneratorOptions {
  data?: TabData;
  withLabel?: boolean;
  withLink?: boolean;
  groupId?: string;
  group?: "languages" | "testing";
  autoGenContent?: boolean;
}

function generateTabItem({
  data,
  key,
  content,
  withLabel = false,
  withLink = false,
}: TabItemGeneratorOptions) {
  const retrievedData: TabDataItem = withLink
    ? data[key]
    : { ...data[key], iconLink: undefined };

  // generate an icon, with out without a label
  // the user may have set the data or it exists
  // in the default dataset, so explictly set to
  // undefined
  const iconGenerator = withLabel
    ? generateTabIcon({
        ...retrievedData,
        iconTitle: data[key].iconTitle
          ? data[key].iconTitle
          : (data[key].iconTitle = Object.keys(data)[0]),
      })
    : generateTabIcon({
        ...retrievedData,
        iconTitle: undefined,
      });

  // If there is a contentUrl set, lets go and fetch it
  const [fetchedCodeContent, setFetchedCodeContent] = useState(null);

  useEffect(() => {
    if (data[key].contentUrl) {
      setFetchedCodeContent(
        <ReferenceCode
          language={data[key].language ? data[key].language :Object.keys(data)[0]}
          title={data[key].contentTitle}
          url={data[key].contentUrl}
        >
          {content}
        </ReferenceCode>
      );
    }
  }, []);

  // fallback to user generated content if 
  const generatedTabItem = (
    <TabItem value={key} label={iconGenerator as unknown as string} key={key}>
      {fetchedCodeContent ? fetchedCodeContent : 
      content}
    </TabItem>
  );
  return generatedTabItem;
}

function generateCodeTabs({
  groupId,
  data,
  withLabel = false,
  withLink = false,
  autoGenContent = false,
  group,
}: TabGeneratorOptions) {
  if (group) {
    switch (group) {
      case "testing":
        data = data ? merge(meta.testing_tools, data) : meta.testing_tools;
        groupId = groupId ? groupId : "testing";
        break;
      case "languages":
        data = data ? merge(meta.languages, data) : meta.languages;
        groupId = groupId ? groupId : "languages";
        break;
      default:
        console.log("selected group not found, defaulting to languages");
        data = data ? merge(meta.languages, data) : meta.languages;
        groupId = groupId ? groupId : "languages";
        break;
    }
  }

  if (!data) {
    console.log("no data provided and group not provided, defaulting to languages collection");
    data = meta.languages;
  }

  const generatedTab = (
    <Tabs groupId={groupId ? groupId : "code-tab"}>
      {Object.keys(data).map((key) => {
        const defaultTabContent = (
          <a href={data[key].iconLink}>{data[key].iconTitle} Documentation</a>
        );

        return generateTabItem({
          data,
          key,
          content: autoGenContent ? defaultTabContent : data[key].content,
          withLabel,
          withLink,
        });
      })}
    </Tabs>
  );
  return generatedTab;
}

export { generateTabItem, generateCodeTabs };
