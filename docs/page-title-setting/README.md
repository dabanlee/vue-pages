# Page Title Setting

可以在 `src/pages/some-page/index.vue` 文件中的 `template` 标签内通过下面这种方式定义每个页面的标题：

!> **注意：** `title` 属性中不支持直接使用 `Vue` 的插值语法，比如 `title="{{ title }}"`，只支持 **直接填写实际页面标题名称**。

```html
<!-- src/pages/some-page/index.vue -->
<template>
    <div title="页面标题">
        <SomeComponent></SomeComponent>
    </div>
</template>
```

生成如下页面：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- matas here... -->
    <title>页面标题</title>
    <!-- links here... -->
</head>
<body data-page="some-page">
    <div id="app">
        <div title="页面标题" data-server-rendered="true"></div>
    </div>
    <!-- scripts here... -->
</body>
</html>
```
