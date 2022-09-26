# QA
> 提供本项目搭建运行时遇到的一些问题！

## 资源目录public层级？
```
Project
    │
    ├─── docs
    │     ...
    │     ├── .vuepress
    │     │     └── config.js
    │     ├── public  // 资源目录的位置
    │     └── index.md
    └── package.json

```

## 文档 doc 上线预览！

采用vitepress + github.io实现！

**查看参考以下链接**

[gitHub Pages Set](https://docs.github.com/cn/pages/quickstart)

[gitHub Pages Config Publish Source](https://docs.github.com/cn/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)


## 更改Homepage的主题色
在homepage页面中，我们打开调试可以看到影响 `hero.name` 属性的css 为
```css
:root{
    --vp-home-hero-name-color: var(--vp-c-brand);
}
```
那么，我们通过修改此属性，即可修改`hero.name`的颜色！

```
<!-- 新增 theme/index.js、theme/style/var.css -->
Project
    │
    ├─── docs
    │     ...
    │     ├── .vuepress
    │     │     └── config.js
+   │     │     └── theme
+   │     │     │   ├── index.js
+   │     │     │   ├── style
+   │     │     │   │   ├── var.css
    │     ├── public  // 资源目录的位置
    │     └── index.md
    └── package.json
```

theme/style/var.css 内容
```css
/* 示例颜色 */
:root {
    /* 标题 */
    --vp-home-hero-name-color: transparent;
    --vp-home-hero-name-background: linear-gradient( 135deg, #F05F57 10%, #360940 100%);
}
```

theme/index.js 内容
```js
import Theme from 'vitepress/theme';
import './style/var.css';

export default {
  ...Theme
}
```



