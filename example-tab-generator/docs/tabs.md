---
sidebar_position: 1
title: Tabs
---

import { generateCodeTabs } from "../src/components/docTabGenerator/theme/TabGenerator/tabGenerator";
import { meta } from "../src/components/docTabGenerator/theme/meta";


## Overview

A set of pre included tabs are available to you.


:::info
They will be grouped by the `groupId` so all tabs, with the same name will change.
:::


Import it in your readme file

```typescript
import { generateCodeTabs } from "../src/components/docTabGenerator/theme/TabGenerator/tabGenerator";
```

Add it into your markdown or mdx file.


```jsx
<div>
  {generateCodeTabs({
    group: "languages"
  })}
</div>
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
<div>
  {generateCodeTabs({
    group: "languages"
  })}
</div>
```

#####  demo

<div>
  {generateCodeTabs({
    group: "languages"
  })}
</div>

___ 


#### Tabs (Testing Tools) 

#####  code

```jsx
<div>
  {generateCodeTabs({
    group: "testing",
    withLabel: true,
    withLink: true,
  })}
</div>
```

#####  demo

<div>
  {generateCodeTabs({
    group: "testing",
    withLabel: true,
    withLink: true,
  })}
</div>

___ 



___ 


#### Tabs with Labels & Links

#####  code

```jsx
<div>
  {generateCodeTabs({
    data: meta.languages,
    withLabel: true,
    withLink: true,
  })}
</div>
```

#####  demo

<div>
  {generateCodeTabs({
    data: meta.languages,
    withLabel: true,
    withLink: true,
  })}
</div>

___ 


#### Tabs with Labels only

#####  code

```jsx
<div>
  {generateCodeTabs({
    data: meta.languages,
    withLabel: true,
    withLink: false,
  })}
</div>
```

#####  demo

<div>
  {generateCodeTabs({
    data: meta.languages,
    withLabel: true,
    withLink: false,
  })}
</div>

___ 


#### Tabs with Links only

#####  code

```jsx
<div>
  {generateCodeTabs({
    data: meta.languages,
    withLabel: false,
    withLink: true,
  })}
</div>
```

#####  demo

<div>
  {generateCodeTabs({
    data: meta.languages,
    withLabel: false,
    withLink: true,
  })}
</div>

___ 


## Tabs (Filtered List)

To do. Filter the default list, by user providing certain keys



