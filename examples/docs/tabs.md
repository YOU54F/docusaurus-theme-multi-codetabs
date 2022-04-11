---
sidebar_position: 1
title: Tabs
---

import TabsGenerator from "@you54f/theme-github-codeblock/build/theme/TabsGenerator"
import { meta } from "@you54f/theme-github-codeblock/build/theme/meta";


## Overview

A set of pre included tabs are available to you.


:::info
They will be grouped by the `groupId` so all tabs, with the same name will change.
:::


Import it in your readme file

```typescript
import TabsGenerator from "@you54f/theme-github-codeblock/build/theme/TabsGenerator"
```

Add it into your markdown or mdx file.


```jsx
<TabsGenerator group='languages'>{}</TabsGenerator>
```

:::info
Setting group will default the groupId to the name of the group and provide default data
:::

Generate your code tab with the following options

```typescript
export interface TabGeneratorOptions {
  data?: TabData;
  withLabel: boolean;
  withLink: boolean;
  groupId?: string;
  group?: "languages" | "testing"; 
  autoGenContent?: boolean;
}
```

You can provide your own data, or override the stored data

```typescript
const yourTabData: TabData = {
  js: {
    iconTitle: "JavaScript",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/javascript-original.svg",
    iconLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/JavaScript.js#L1",
    content: "",
  },
  java: {
    iconTitle: "Java",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/java-original.svg",
    iconLink: "https://docs.oracle.com/en/java/",
    contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/Java.java#L1-L5",
    content: "",
  },
}
```

It uses the following types

```typescript
export interface TabData {
    [key: string]: TabDataItem;
  }
  export interface TabDataItem  {
    iconTitle?: string| undefined;
    iconLocation?: string;
    iconLink?: string | undefined;
    contentUrl?: string;
    content?: string;
    contentTitle?: string
  }
```


###  Examples

___ 


#### Tabs (Programming Languages)

#####  code

```jsx
<TabsGenerator group='languages'>{}</TabsGenerator>
```

#####  demo

<TabsGenerator group='languages'>{}</TabsGenerator>

___ 


#### Tabs (Testing Tools) 

#####  code

```jsx
<TabsGenerator group='testing' withLabel={true} withLink={true}>{}</TabsGenerator>
```

#####  demo

<TabsGenerator group='testing' withLabel={true} withLink={true}>{}</TabsGenerator>


___ 


#### Tabs with Labels & Links

#####  code

```jsx
<TabsGenerator group='languages' withLabel={true} withLink={true}>{}</TabsGenerator>
```

#####  demo

<TabsGenerator group='languages' withLabel={true} withLink={true}>{}</TabsGenerator>

___ 


#### Tabs with Labels only

#####  code

```jsx
<TabsGenerator group='languages' withLabel={true} withLink={false}>{}</TabsGenerator>

```

#####  demo

<TabsGenerator group='languages' withLabel={true} withLink={false}>{}</TabsGenerator>


___ 


#### Tabs with Links only

#####  code

```jsx
<TabsGenerator group='languages' withLabel={false} withLink={true}>{}</TabsGenerator>

```

#####  demo

<TabsGenerator group='languages' withLabel={false} withLink={true}>{}</TabsGenerator>


___ 


## Tabs (Filtered List)

To do. Filter the default list, by user providing certain keys



