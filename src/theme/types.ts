import type { Props as CodeBlockProps } from "@theme-init/CodeBlock";
import type { Props as TabProps } from "@theme/Tabs";
import type { Props as TabItemProps } from "@theme/TabItem";

export interface GitHubReference {
    url: string
    fromLine: number
    toLine: number
    title: string
}

// export interface ReferenceCodeBlockProps extends CodeBlockProps {
//   reference: string
// }
export interface ReferenceCodeBlockProps extends CodeBlockProps {
  reference?: string;
  url: string;
  language: string | undefined
  title: string | undefined
}

export type DispatchTypes = 'reset' | 'loading' | 'loaded' | 'error'

export interface DispatchMessage {
    type: DispatchTypes
    value: string | Error
}

export interface TabItemGeneratorOptions {
    data: TabData;
    key: string;
    content?: string | JSX.Element;
    withLabel?: boolean;
    withLink?: boolean;
    autoGenContent?: boolean;

  }
  
  export interface TabGeneratorProps extends TabProps {
    data?: TabData;
    withLabel?: boolean;
    withLink?: boolean;
    groupId?: string;
    group?: "languages" | "testing";
    autoGenContent?: boolean;
  }
  export interface TabItemGeneratorProps extends TabItemProps {
    reference?: string;
  }

export interface TabGeneratorOptions {
    data?: TabData;
    withLabel?: boolean;
    withLink?: boolean;
    groupId?: string;
    group?: "languages" | "testing";
    autoGenContent?: boolean;
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
  