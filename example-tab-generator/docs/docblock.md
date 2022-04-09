---
sidebar_position: 1
title: Dynamic Code Blocks
---

import {
generateCodeTabs,
} from "../src/components/docTabGenerator/TabGenerator/tabGenerator";

## Overview

Generate tabs rendering code retrieved from a public GitHub URL.

:::info
They will be grouped by the `groupId` so all tabs, with the same name will change.
:::

Import it in your readme file

```typescript
import { generateCodeTabs } from "../src/components/docTabGenerator/TabGenerator/tabGenerator";
```

Add it into your markdown or mdx file.

The options are the same as the [tabs](/docs/tabs)

However two are important.

```typescript
export type GitHubCodeGeneratorBlockOpts = Pick<
  TabDataItem,
  "contentUrl" | "contentTitle"
>;
```

- `contentUrl` (required)
  - Either a full GitHub URL `https://github.com/leachim6/hello-world/blob/main/r/Ruby.rb`
  - Or with line markers `#L1-L2` at the end of the url - `https://github.com/leachim6/hello-world/blob/main/r/Ruby.rb#L1-L2`
- `contentTitle` (optional)
  - A title for your displayed code, defaults to file name otherwise

#### Code tabs from URL

##### code

```jsx
<div>
  {generateCodeTabs({
    group: "languages",
  })}
</div>
```

##### demo

<div>
  {generateCodeTabs({
    group: "languages"
  })}
</div>

#### Code tabs from URL with user provided data

##### code

```jsx
<div>
  {generateCodeTabs({
    data: {
      ruby: {
        iconTitle: "Ruby",
        iconLocation:
          "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/ruby-original.svg",
        iconLink: "https://www.ruby-lang.org/en/documentation/",
        contentUrl:
          "https://github.com/leachim6/hello-world/blob/main/r/Ruby.rb#L1-L2",
        content: "",
      },
    },
    withLabel: true,
    withLink: false,
  })}
</div>
```

##### demo

<div>
  {generateCodeTabs({
    data: {
    ruby: {
      iconTitle: "Ruby",
      iconLocation:
        "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/ruby-original.svg",
      iconLink: "https://www.ruby-lang.org/en/documentation/",
      contentUrl: "https://github.com/leachim6/hello-world/blob/main/r/Ruby.rb#L1-L2",
      content: "",
    },
    },
    withLabel: true,
    withLink: false,
})}
</div>

#### Code tabs from URL with user provided data and custom title

##### code

```jsx
<div>
  {generateCodeTabs({
    data: {
      ruby: {
        iconTitle: "Ruby",
        iconLocation:
          "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/ruby-original.svg",
        iconLink: "https://www.ruby-lang.org/en/documentation/",
        contentUrl:
          "https://github.com/leachim6/hello-world/blob/main/r/Ruby.rb#L1-L2",
        contentTitle: "My own title",
      },
    },
    withLabel: true,
    withLink: false,
  })}
</div>
```

##### demo

<div>
  {generateCodeTabs({
    data: {
    ruby: {
      iconTitle: "Ruby",
      iconLocation:
        "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/ruby-original.svg",
      iconLink: "https://www.ruby-lang.org/en/documentation/",
      contentUrl: "https://github.com/leachim6/hello-world/blob/main/r/Ruby.rb#L1-L2",
      contentTitle: "My own title",
    },
    },
    withLabel: true,
    withLink: false,
})}
</div>

#### Multiple Code Tab Blocks with different code

##### code

```jsx
<div>
  {generateCodeTabs({
    groupId: "change_me_only",
    withLabel: true,
    data:{
    ruby: {
      contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/JSX%28Facebook%29.js",
      contentTitle: "This isn't ruby",
      iconTitle: 'ruby'
    },
    }
  })}
</div>
<div>
  {generateCodeTabs({
    groupId: "change_me_only",
    withLabel: true,
    data:{
    ruby: {
      contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/JavaScript.js#L1-L2",
      contentTitle: "Neither is this",
    }
    }
  })}
</div>
```

##### demo

Select the ruby tab

<div>
  {generateCodeTabs({
    groupId: "change_me_only",
    withLabel: true,
    data:{
    ruby: {
      contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/JSX%28Facebook%29.js",
      contentTitle: "This isn't ruby",
      iconTitle: 'ruby'
    },
    }
  })}
</div>

If you dont provide an `iconTitle` in your `data` object but you set `withLabel: true` , the `key` will be used as the tab name.

See it is set to ruby here

<div>
  {generateCodeTabs({
    groupId: "change_me_only",
    withLabel: true,
    data:{
    ruby: {
      contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/JavaScript.js#L1-L2",
      contentTitle: "Neither is this",
    }
    }
  })}
</div>

#### Using the default data-set but providing optional overrides

Set the `group` to `"languages"` or `"testing"` to get the default dataset, when overriding `data`

If you set `group`, the `groupId` will be set to `"languages"` or `"testing"` unless otherwise set.

If you set `group`, to a value that is not present, it will fall back to `"languages"`

##### code

```jsx
<div>
  {generateCodeTabs({
    groupId: "change_me_only",
    withLabel: true,
    group: "languages",
    data:{
    ruby: {
      contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/JSX%28Facebook%29.js",
      contentTitle: "This isn't ruby",
      iconTitle: 'ruby'
    },
    }
  })}
</div>
<div>
  {generateCodeTabs({
    groupId: "change_me_only",
    withLabel: true,
    group: "languages",
    data:{
    ruby: {
      contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/JavaScript.js#L1-L2",
      contentTitle: "Neither is this",
    }
    }
  })}
</div>

```

##### demo

Select the ruby tab

<div>
  {generateCodeTabs({
    groupId: "change_me_only",
    withLabel: true,
    group: "languages",
    data:{
    ruby: {
      contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/JSX%28Facebook%29.js",
      contentTitle: "This isn't ruby",
      iconTitle: 'ruby'
    },
    }
  })}
</div>

If you dont provide an `iconTitle` in your `data` object but you set `withLabel: true` , the `key` will be used as the tab name.

See it is set to ruby here

<div>
  {generateCodeTabs({
    groupId: "change_me_only",
    withLabel: true,
    group: "languages",
    data:{
    ruby: {
      contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/JavaScript.js#L1-L2",
      contentTitle: "Neither is this",
    }
    }
  })}
</div>
