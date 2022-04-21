Docusaurus Theme GitHub Codeblock ![Test Changes](https://github.com/you54f/docusaurus-theme-multi-codetabs/workflows/Test%20Changes/badge.svg?branch=main)
=================================


A Docusaurus v2 plugin that allows you to easily create multiple code language tabs on your website, its supports text can be sourced directly from Markdown or referencing code examples from public GitHub repositories.

> Note: this theme plugin requires [Docusaurus v2](https://v2.docusaurus.io/)


---


## Install

First, add the theme plugin to your dependencies:

```sh
npm install docusaurus-theme-multi-codetabs
```

or yarn

```sh
yarn add docusaurus-theme-multi-codetabs
```

## Usage

Add the theme plugin to your list of themes in the `docusaurus.config.js`:

```js
    // ...
    themes: [
        'docusaurus-theme-multi-codetabs'
    ],
    // ...
```


## Display multiple code in tabs, in Markdown via a React Component

### code

  ```jsx
  import TabsGenerator from "docusaurus-theme-multi-codetabs/build/theme/TabsGenerator"

  <TabsGenerator autoGenContent={false} group='languages'>{}</TabsGenerator>
  ```   

We also support writing directly in Markdown, thanks to @saucelabs, which inspired this plugin.


You can also set some fallback text if the plugin fails to find your codeblock:

    ```js reference title="Code with fallback"
    https://github.com/saucelabs/docusaurus-theme-github-codeblock
    This is some fallback text that will be displayed
    It can be multiline
    ```

    ```js reference title="If you dont have a fallback and the URL fails to load, it will show a message in your code block"
    https://github.com/saucelabs/docusaurus-theme-github-codeblock
    ```

---

If you are interested contributing to this project, see [CONTRIBUTING.md](CONTRIBUTING.md).
