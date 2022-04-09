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
  const [newContent, setNewContent] = useState(null);

  useEffect(() => {
    if (data[key].contentUrl) {
      setNewContent(
        <ReferenceCode
          reference="foo"
          language={Object.keys(data)[0]}
          title={data[key].contentTitle}
          url={data[key].contentUrl}
        >
          {content}
        </ReferenceCode>
      );
    }
  }, []);

  const generatedTabItem = (
    <TabItem value={key} label={iconGenerator} key={key}>
      {newContent ? newContent : 
      content}
    </TabItem>
  );
  return generatedTabItem;
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

export { generateTabItem, generateGettingStartedTab, generateCodeTabs };
