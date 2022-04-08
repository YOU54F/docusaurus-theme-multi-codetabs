import type { Props } from '@theme-init/CodeBlock'
// import type {Props as TabProp} from '@theme/Tabs';
// import type {Props as TabItemProps} from '@theme/TabItem';

export interface GitHubReference {
    url: string
    fromLine: number
    toLine: number
    title: string
}

export interface ReferenceCodeBlockProps extends Props {
    reference: string
}

export type DispatchTypes = 'reset' | 'loading' | 'loaded' | 'error'

export interface DispatchMessage {
    type: DispatchTypes
    value: string | Error
}


export interface TabData {
    [key: string]: TabDataItem;
  }
  export interface TabDataItem {
    iconTitle: string;
    iconLocation: string;
    iconLink?: string;
    contentUrl?: string;
    content?: string;
  }
  
  export type TabDataItemLabel = Pick<
    TabDataItem,
    "iconLocation" | "iconLink" | "iconTitle"
  >;