---
sidebar_position: 1
---

## Install

First, add the theme plugin to your dependencies:

```sh
npm install theme-multi-codetabs
```

or yarn

```sh
yarn add theme-multi-codetabs
```

## Usage

Add the theme plugin to your list of themes in the `docusaurus.config.js`:

```js
    // ...
    themes: [
        'theme-multi-codetabs'
    ],
    // ...
```


## Display multiple code in tabs, in Markdown via a React Component

### code

  ```jsx
  import TabsGenerator from "theme-multi-codetabs/build/theme/TabsGenerator"

  <TabsGenerator autoGenContent={false} group='languages'>{}</TabsGenerator>
  ```   

### demo

import TabsGenerator from "theme-multi-codetabs/build/theme/TabsGenerator"

<TabsGenerator autoGenContent={false} group='languages'>{}</TabsGenerator>

___

  ```jsx
  import TabsGenerator from "theme-multi-codetabs/build/theme/TabsGenerator"

  <TabsGenerator autoGenContent={false} group='languages'>{}</TabsGenerator>
  ```   


<TabsGenerator autoGenContent={false} group='languages'>{}</TabsGenerator>
