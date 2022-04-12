# Other features

## Display a single code block a url

In order to reference GitHub snippets in your markdown, create code blocks with a `reference` attached to the language meta string and put the link to your GitHub reference in the code block, e.g.:


### code

    ```js reference
    https://github.com/saucelabs/docusaurus-theme-github-codeblock/blob/main/src/theme/ReferenceCodeBlock/index.tsx#L105-L108
    ```

### demo

```js reference
https://github.com/saucelabs/docusaurus-theme-github-codeblock/blob/main/src/theme/ReferenceCodeBlock/index.tsx#L105-L108
```

## Display a single code block a url with custom title

### code

    ```js reference title="example"
    https://github.com/you54f/docusaurus-theme-github-codetabs/blob/main/src/theme/ReferenceCodeBlock/index.tsx#L105-L108
    ```

### demo

```js reference title="example"
https://github.com/you54f/docusaurus-theme-github-codetabs/blob/main/src/theme/ReferenceCodeBlock/index.tsx#L105-L108
```

## Display a single code block, with fallback text, if the GitHub url doesn't resolve

### code

    ```js reference title="example"
    https://github.com/you54f/docusaurus-theme-github-codetabs/blob/main/
    This is some fallback code
    ```

### demo

```js reference title="example"
https://github.com/you54f/docusaurus-theme-github-codetabs/blob/main
This is some fallback code
```


## Display multiple code in tabs, from Markdown

- `codeLocation="https://foo.com"` - renders a `See full example on GitHub link`
- `title="example"` - renders a custom title
- Add a GitHub `URL` on the 1st line, to render a code block from GitHub

:::info
This particular feature relies on [docusaurus-remark-plugin-codetabs](https://github.com/duanwilliam/docusaurus-remark-plugin-codetabs)
:::

Add the plugin to the Remark plugins array for each instance using it in docusaurus.config.js

```sh
yarn add docusaurus-remark-plugin-codetabs
```

```
module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          remarkPlugins: [
+           [require('docusaurus-remark-plugin-codetabs'), {
+             // options             
+           }],
          ],
        },
        blog: {
          remarkPlugins: [
+           [require('docusaurus-remark-plugin-codetabs'), {
+             // options             
+           }],
          ],
        },
      },
    ],
  ],
};
```

### code

    ```md codetabs

    ```js title="index.js" codeLocation="https://foo.com"
    const main = () => {
      console.log("Hello, world");
    }

    ```rust title='main.rs'
    let assignTitle: &str = r#"title="main.rs""#;

    ```cpp reference title="main.cpp"
    https://github.com/you54f/docusaurus-theme-github-codetabs/blob/main/src/theme/ReferenceCodeBlock/index.tsx#L105-L108
    #include <iostream>
    using namespace std;
    int main() {
      cout << "Hello, world" << endl;
    }

    ```cpp label="C++11" title="main.cpp"
    string label="C++11";

        ```
    this is an important comment.

    ```jsx title="Component.jsx"
    <Tabs>
      <TabItem />
      <TabItem />
    </Tabs>
        ```
    ```

### demo

```md codetabs

```js title="index.js" codeLocation="https://foo.com"
const main = () => {
  console.log("Hello, world");
}

```rust title='main.rs'
let assignTitle: &str = r#"title="main.rs""#;

```cpp reference title="main.cpp"
https://github.com/you54f/docusaurus-theme-github-codetabs/blob/main/src/theme/ReferenceCodeBlock/index.tsx#L105-L108
#include <iostream>
using namespace std;
int main() {
  cout << "Hello, world" << endl;
}

```cpp label="C++11" title="main.cpp"
string label="C++11";

    ```
this is an important comment.

```jsx title="Component.jsx"
<Tabs>
  <TabItem />
  <TabItem />
</Tabs>
    ```
```

## Display multiple code in tabs, Raw-loaded


```md codetabs
```rawloader file='tables.md'
```fromline file='tables.md':12
```toline file='tables.md':2-3
```itsabitsa1 file='tables.md'
FILE:2
{{ FILE:4 }}
bottom content
```itsabitsa2 file='tables.md'
top content
{{ FILE:7-7 }}
bottom content
```itsabitsa3 file='tables.md'
{{ FILE }}
{{ FILE:1-1 }}
```cpp reference title="main.cpp"
https://github.com/saucelabs/docusaurus-theme-github-codeblock/blob/main/src/theme/ReferenceCodeBlock/index.tsx#L105-L108
#include <iostream>
using namespace std;
int main() {
    cout << "Hello, world" << endl;
}

```cpp label="C++11" title="main.cpp"
string label="C++11";
```