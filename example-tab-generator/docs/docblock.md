---
sidebar_position: 1
title: Examples
---

import {
  generateCodeTabs,
} from "../src/components/docTabGenerator/TabGenerator/tabGenerator";
import { meta } from "../src/data/meta";

## Code tabs from URL

### code

```jsx
<div>
  {generateCodeTabs({
    data: {
      ruby: {
      iconTitle: "Ruby",
      iconLocation:
        "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/ruby-original.svg",
      iconLink: "https://www.ruby-lang.org/en/documentation/",
      contentUrl: "",
      content: "",
    },
    },
    withLabel: true,
    withLink: true,
})}
</div>
```

### demo

<div>
  {generateCodeTabs({
    data: {
      ruby: {
      iconTitle: "Ruby",
      iconLocation:
        "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/ruby-original.svg",
      iconLink: "https://www.ruby-lang.org/en/documentation/",
        contentUrl:
          "https://github.com/pactflow/example-bi-directional-provider-dredd/blob/master/src/product/product.js#L6-L7",
        contentTitle: "Just lines 6-7",
    },
    },
    withLabel: true,
    withLink: false,
})}
</div>
