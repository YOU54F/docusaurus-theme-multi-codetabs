import type { Props as CodeBlockProps } from "@theme/CodeBlock";
import type { Props as TabProps } from "@theme/Tabs";
import type { Props as TabItemProps } from "@theme/TabItem";

export interface GitHubReference {
  url: string;
  fromLine: number;
  toLine: number;
  title: string;
}

export interface ReferenceCodeBlockProps extends CodeBlockProps {
  url: string;
}
export interface TabGeneratorProps extends TabProps {
  reference: string;
}
export interface TabItemGeneratorProps extends TabItemProps {
  reference: string;
}

export type DispatchTypes = "reset" | "loading" | "loaded" | "error";

export interface DispatchMessage {
  type: DispatchTypes;
  value: string | Error;
}

export interface TabData {
  [key: string]: TabDataItem;
}
export interface TabDataItem {
  iconTitle?: string | undefined;
  iconLocation?: string;
  iconLink?: string | undefined;
  contentUrl?: string;
  content?: string;
  contentTitle?: string;
  language?: string
}

export type IconGeneratorOpts = Pick<
  TabDataItem,
  "iconLocation" | "iconLink" | "iconTitle"
>;

export type GitHubCodeGeneratorBlockOpts = Pick<
  TabDataItem,
  "contentUrl" | "contentTitle"
>;
