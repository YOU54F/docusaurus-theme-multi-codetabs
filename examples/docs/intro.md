---
sidebar_position: 1
---

## Display a single code block a url

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
    https://github.com/saucelabs/docusaurus-theme-github-codeblock/blob/main/src/theme/ReferenceCodeBlock/index.tsx#L105-L108
    ```

### demo

```js reference title="example"
https://github.com/saucelabs/docusaurus-theme-github-codeblock/blob/main/src/theme/ReferenceCodeBlock/index.tsx#L105-L108
```

## Display a single code block, with fallback text, if the GitHub url doesn't resolve

### code

    ```js reference title="example"
    https://github.com/saucelabs/docusaurus-theme-github-codeblock/blob/main/
    This is some fallback code
    ```

### demo

```js reference title="example"
https://github.com/saucelabs/docusaurus-theme-github-codeblock/blob/main
This is some fallback code
```


## Display multiple code in tabs, from Markdown

- `codeLocation="https://foo.com"` - renders a `See full example on GitHub link`
- `title="example"` - renders a custom title
- Add a GitHub `URL` on the 1st line, to render a code block from GitHub

### code

    ```md codetabs

    ```js title="index.js" codeLocation="https://foo.com"
    const main = () => {
      console.log("Hello, world");
    }

    ```rust title='main.rs'
    let assignTitle: &str = r#"title="main.rs""#;

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
https://github.com/saucelabs/docusaurus-theme-github-codeblock/blob/main/src/theme/ReferenceCodeBlock/index.tsx#L105-L108
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

## Display multiple code in tabs, from Markdown

### code

  ```jsx
  import TabsGenerator from "@you54f/theme-github-codeblock/build/theme/TabsGenerator"

  <TabsGenerator autoGenContent={false} group='languages'>{}</TabsGenerator>
  ```   

### demo

import TabsGenerator from "@you54f/theme-github-codeblock/build/theme/TabsGenerator"

<TabsGenerator autoGenContent={false} group='languages'>{}</TabsGenerator>

___

<TabsGenerator autoGenContent={true} group='languages'>{}</TabsGenerator>
