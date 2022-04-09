---
sidebar_position: 1
title: Tables
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {
  languageIconsWithLabels,
  languageIcons,
} from "../src/components/docTabGenerator/IconGenerator/icons";
import {
  generateGettingStartedTab,
  generateCodeTabs,
} from "../src/components/docTabGenerator/TabGenerator/tabGenerator";
import { meta } from "../src/data/meta";

import { DataTable } from "../src/components/docTabGenerator/TableGenerator/index";
import { columns, tableData } from "../src/data/examples.table";


## Examples

### code

```jsx
<DataTable columns={columns} data={tableData} />
```

### demo

<DataTable columns={columns} data={tableData} />
