# Initialization

直接使用 `just` 命令行工具初始化项目

```sh
$ # 安装 just-cli 忽略此步骤
$ sudo yarn global add just-cli

$ # 添加 VuePages 为模板
$ just add
$ template name: vue-pages
$ branch(master): master
$ git: https://github.com/JustClear/vue-pages.git

$ # 初始化名称为 `project-name` 的项目
$ just init vue-pages <project-name>
$ cd <project-name>
$ yarn
$ yarn start
```
