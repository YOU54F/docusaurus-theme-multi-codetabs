---
sidebar_position: 1
title: Icons
---

import {
  languageIconsWithLabels,
  languageIcons,
} from "theme-multi-codetabs/build/theme/IconGenerator/icons";

## Overview

A set of pre included icons are available to you.

You can get the follow icon types

- Programming Language icons
  - Contains links to documentation by default
- Testing tool icons
  - Contains links to testing tool by defeault

You can get them in various pre-packaged forms

- Icon only
- Icon with label
- Icon with link
- Icon with label & link
- Overide the options completely 


Import them in your readme file

```typescript
import {
  languageIconsWithLabels,
  languageIcons,
} from "../src/components/docTabGenerator/theme/IconGenerator/icons";
```

They accept optional overrides

```typescript
type IconGeneratorOpts = {
    iconLocation?: string;
    iconLink?: string;
    iconTitle?: string;
}
```


### Examples

___ 


#### Language Icon with Label

###### code

```jsx
<div>{languageIconsWithLabels.label_javascript()}</div>
```

###### demo

<div>{languageIconsWithLabels.label_javascript()}</div>

___ 

#### Language Icon with Label & Link

###### code

```jsx
<div>{languageIconsWithLabels.label_with_link_javascript()}</div>
```

###### demo

<div>{languageIconsWithLabels.label_with_link_javascript()}</div>

___ 

#### Language Icon

###### code

```jsx
<div>{languageIcons.icon_javascript()}</div>
```

###### demo

<div>{languageIcons.icon_javascript()}</div>

___ 

#### Language Icon with Link

###### code

```jsx
<div>{languageIcons.icon_with_link_javascript()}</div>
```

###### demo

<div>{languageIcons.icon_with_link_javascript()}</div>

___ 

#### Language Icon with overrides

###### code

```jsx
<div>
{languageIcons.icon_with_link_javascript(
  { iconTitle: "Ruby",
    iconLocation:"",
    iconLink: "/docs/icons"
  })}
</div>
```

###### demo

<div>
{languageIcons.icon_with_link_javascript(
  { iconTitle: "Ruby",
    iconLocation:"",
    iconLink: "/docs/icons"
  })}
</div>

___ 
