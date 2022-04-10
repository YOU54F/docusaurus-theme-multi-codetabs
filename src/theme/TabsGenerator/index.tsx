import React, { useEffect, useState } from "react";
import merge from "deepmerge";
import { meta } from "../meta";
import type {
    TabDataItem,
    TabGeneratorProps,
    TabItemGeneratorOptions,
} from "../types";
import { generateTabIcon } from "../IconGenerator/iconGenerator";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import ReferenceCode from "../ReferenceCodeBlock/index.refactored";

function generateTabItem({
    data,
    key,
    content,
    withLabel = false,
    withLink = false,
    autoGenContent = false
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
    const [fetchedCodeContent, setFetchedCodeContent] = useState(<>123</>);
    // fallback to user generated content if
    const generatedTabItem = (
        <TabItem
            value={key}
            label={iconGenerator as unknown as string}
            key={key}
        >
            {autoGenContent ? content : fetchedCodeContent && fetchedCodeContent !== <></>
                ? fetchedCodeContent
                : content}
        </TabItem>
    );

    
    useEffect(() => {
        if (data[key].contentUrl) {
            setFetchedCodeContent(
                <ReferenceCode
                    language={
                        data[key].language
                            ? data[key].language
                            : Object.keys(data)[0]
                    }
                    title={data[key].contentTitle}
                    url={data[key].contentUrl || "no url"}
                    // reference={data[key].contentUrl || "no url"}
                >
                    {content
                        ? (content as unknown as string)
                        : ((<></>) as unknown as string)}
                </ReferenceCode>
            );
        }
    }, []);


    return generatedTabItem;
}

function TabsGenerator(props: TabGeneratorProps) {
    const { group, autoGenContent, withLabel, withLink } = props;
    console.log(autoGenContent)
    let { data, groupId } = props;
    if (group) {
        switch (group) {
            case "testing":
                data = data
                    ? merge(meta.testing_tools, data)
                    : meta.testing_tools;
                groupId = groupId ? groupId : "testing";
                break;
            case "languages":
                data = data ? merge(meta.languages, data) : meta.languages;
                groupId = groupId ? groupId : "languages";
                break;
            default:
                console.log(
                    "selected group not found, defaulting to languages"
                );
                data = data ? merge(meta.languages, data) : meta.languages;
                groupId = groupId ? groupId : "languages";
                break;
        }
    }

    if (!data) {
        console.log(
            "no data provided and group not provided, defaulting to languages collection"
        );
        data = meta.languages;
    }

    const generatedTab = (
        <Tabs groupId={groupId ? groupId : "code-tab"}>
            {Object.keys(data).map((key) => {
                if (data) {
                    const defaultTabContent = (
                        <a href={data[key].iconLink}>
                            {data[key].iconTitle} Documentation
                        </a>
                    );

                    return generateTabItem({
                        data,
                        key,
                        content: autoGenContent
                            ? defaultTabContent
                            : data[key].content,
                        withLabel,
                        withLink,
                        autoGenContent
                    });
                }
                return <></>;
            })}
        </Tabs>
    );
    return generatedTab;
}

export default TabsGenerator;
