---
sidebar_position: 1
title: Code Tabs - Configuring
---

import TabsGenerator from "theme-github-codetabs/build/theme/TabsGenerator"

## Overview

Generate tabs rendering code retrieved from a public GitHub URL.

A set of pre included tabs are available to you.

:::info
They will be grouped by the `groupId` so all tabs, with the same name will change.
:::

Import it in your readme file

```typescript
import TabsGenerator from "theme-github-codetabs/build/theme/TabsGenerator";
```

Add it into your markdown or mdx file.

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

However two are important.

```typescript
export type GitHubCodeGeneratorBlockOpts = Pick<
    TabDataItem,
    "contentUrl" | "contentTitle"
>;
```

-   `contentUrl` (required)
    -   Either a full GitHub URL `https://github.com/leachim6/hello-world/blob/main/r/Ruby.rb`
    -   Or with line markers `#L1-L2` at the end of the url - `https://github.com/leachim6/hello-world/blob/main/r/Ruby.rb#L1-L2`
-   `contentTitle` (optional)
    -   A title for your displayed code, defaults to file name otherwise

#### Code tabs from URL

##### code

```jsx
<TabsGenerator group="languages">{}</TabsGenerator>
```

##### demo

<TabsGenerator group='languages'>{}</TabsGenerator>

#### Code tabs from URL with user provided data

##### code

```jsx
<TabsGenerator
    data={{
        ruby: {
            iconTitle: "Ruby",
            iconLocation:
                "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/ruby-original.svg",
            iconLink: "https://www.ruby-lang.org/en/documentation/",
            contentUrl:
                "https://github.com/leachim6/hello-world/blob/main/r/Ruby.rb#L1-L2",
            content: "",
        },
    }}
    withLabel={true}
    withLink={false}
>
    {}
</TabsGenerator>
```

##### demo

<TabsGenerator data={{
    ruby: {
      iconTitle: "Ruby",
      iconLocation:
        "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/ruby-original.svg",
      iconLink: "https://www.ruby-lang.org/en/documentation/",
      contentUrl: "https://github.com/leachim6/hello-world/blob/main/r/Ruby.rb#L1-L2",
      content: "",
    },
    }} withLabel={true} withLink={false}>{}</TabsGenerator>

#### Code tabs from URL with user provided data and custom title

##### code

```jsx
<TabsGenerator
    data={{
        ruby: {
            iconTitle: "Ruby",
            iconLocation:
                "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/ruby-original.svg",
            iconLink: "https://www.ruby-lang.org/en/documentation/",
            contentUrl:
                "https://github.com/leachim6/hello-world/blob/main/r/Ruby.rb#L1-L2",
            contentTitle: "My own title",
        },
    }}
    withLabel={true}
    withLink={false}
>
    {}
</TabsGenerator>
```

##### demo

<TabsGenerator data={{
    ruby: {
      iconTitle: "Ruby",
      iconLocation:
        "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/ruby-original.svg",
      iconLink: "https://www.ruby-lang.org/en/documentation/",
      contentUrl: "https://github.com/leachim6/hello-world/blob/main/r/Ruby.rb#L1-L2",
      contentTitle: "My own title",
    },
    }} withLabel={true} withLink={false}>{}</TabsGenerator>

#### Multiple Code Tab Blocks with different code

##### code

```jsx
<TabsGenerator group="languages" groupId="change_me_only" withLabel="true" data={{
    ruby: {
      iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/ruby-original.svg",
      contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/JavaScript.js#L1-L2",
      contentTitle: "This isn't ruby",
      iconTitle: 'ruby'
    }
    }}>{}</TabsGenerator>
</div>
<TabsGenerator groupId="change_me_only" withLabel="true" data={{
    ruby: {
      iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/ruby-original.svg",
      contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/JavaScript.js#L1-L2",
      contentTitle: "Neither is this",
    }
    }}>{}</TabsGenerator>
```

##### demo

Select the ruby tab

<TabsGenerator groupId="change_me_only" withLabel="true" data={{
    ruby: {
      iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/ruby-original.svg",
      contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/JavaScript.js#L1-L2",
      contentTitle: "This isn't ruby",
      iconTitle: 'ruby'
    }
    }}>{}</TabsGenerator>

If you dont provide an `iconTitle` in your `data` object but you set `withLabel: true` , the `key` will be used as the tab name.

See it is set to ruby here

<TabsGenerator groupId="change_me_only" withLabel="true" data={{
    ruby: {
      iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/ruby-original.svg",
      contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/JavaScript.js#L1-L2",
      contentTitle: "Neither is this",
    }
    }}>{}</TabsGenerator>

#### Using the default data-set but providing optional overrides

Set the `group` to `"languages"` or `"testing"` to get the default dataset, when overriding `data`

If you set `group`, the `groupId` will be set to `"languages"` or `"testing"` unless otherwise set.

If you set `group`, to a value that is not present, it will fall back to `"languages"`

##### code

```jsx
<TabsGenerator group="languages" groupId="change_me_only" withLabel="true" data={{
    ruby: {
      iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/ruby-original.svg",
      contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/JavaScript.js#L1-L2",
      contentTitle: "This isn't ruby",
      iconTitle: 'ruby'
    }
    }}>{}</TabsGenerator>
<TabsGenerator group="languages" groupId="change_me_only" withLabel="true" data={{
    ruby: {
      iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/ruby-original.svg",
      contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/JavaScript.js#L1-L2",
      contentTitle: "Neither is this",
    }
    }}>{}</TabsGenerator>
```

##### demo

Select the ruby tab

<TabsGenerator group="languages" groupId="change_me_only" withLabel="true" data={{
    ruby: {
      iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/ruby-original.svg",
      contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/JavaScript.js#L1-L2",
      contentTitle: "This isn't ruby",
      iconTitle: 'ruby'
    }
    }}>{}</TabsGenerator>

If you dont provide an `iconTitle` in your `data` object but you set `withLabel: true` , the `key` will be used as the tab name.

See it is set to ruby here

<TabsGenerator group="languages" groupId="change_me_only" withLabel="true" data={{
    ruby: {
      iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/ruby-original.svg",
      contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/JavaScript.js#L1-L2",
      contentTitle: "Neither is this",
    }
    }}>{}</TabsGenerator>


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



