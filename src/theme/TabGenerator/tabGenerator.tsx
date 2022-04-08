import React from "react";
import Tabs from "@docusaurus/theme-classic/src/theme/Tabs";
import TabItem from "@docusaurus/theme-classic/src/theme/TabItem";
import { TabData, TabDataItem } from "../types";
import { generateTabIcon } from "../IconGenerator/iconGenerator";

function generateTabItem({
  data,
  key,
  content = undefined,
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

  const generatedTab = (
    <TabItem value={key} label={iconGenerator} key={key}>
      {content}
    </TabItem>
  );
  return generatedTab;
}

export interface TabGeneratorOptions {
  data: TabData, 
  withLabel:boolean, 
  withLink:boolean,
}

function generateGettingStartedTab({ data, withLabel, withLink }:TabGeneratorOptions) {
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

function generateLanguageTab({ data, withLabel, withLink }:TabGeneratorOptions) {
  const generatedTab = (
    <Tabs groupId="languages">
      {Object.keys(data).map((key) => {
        return generateTabItem({
          data,
          key,
          content: (
            <a href={data[key].iconLink}>
              {data[key].iconTitle} Implemenation Guide
            </a>
          ),
          withLabel,
          withLink,
        });
      })}
    </Tabs>
  );
  return generatedTab;
}

function generateTestingToolsTab({ data, withLabel, withLink }:TabGeneratorOptions) {
  const generatedTestingTab = (
    <Tabs groupId="testing_tools">
      {Object.keys(data).map((key) => {
        return generateTabItem({
          data,
          key,
          content: (
            <a href={data[key].iconLink}>
              {data[key].iconTitle} Integration Guide
            </a>
          ),
          withLabel,
          withLink,
        });
      })}
    </Tabs>
  );
  return generatedTestingTab;
}

export {
  generateTabItem,
  generateGettingStartedTab,
  generateLanguageTab,
  generateTestingToolsTab,
};
