---
sidebar_position: 1
title: Quick start
---

import {
  generateCodeTabs,
} from "../src/components/docTabGenerator/theme/TabGenerator/tabGenerator";


## Let there be docs

### Add this in your markdown

```jsx
import { generateCodeTabs } from "../src/components/docTabGenerator/theme/TabGenerator/tabGenerator";

<div>
  {generateCodeTabs({
    group: "languages"
  })}
</div>
```

### Click on a tab

<div>
  {generateCodeTabs({
    group: "languages"
  })}
</div>