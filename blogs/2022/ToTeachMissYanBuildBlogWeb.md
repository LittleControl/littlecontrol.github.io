# 此片文章旨在指导闫小姐搭建一个自己的静态博客

## 效果预览

具体可参考[我的博客](<https://blog.littlecontrol.me/>)(<https://blog.littlecontrol.me/>)

## 工具简述

- [GitHub Pages](https://pages.github.com/), github的静态页面托管服务
- [Github Action](https://github.com/features/actions), github自动构建流程
- [Hugo](https://gohugo.io/), go编写的静态网页生成器
- [V2rayN](https://github.com/2dust/v2rayN), c#编写的windows网络代理工具
- [PaperMod](https://github.com/adityatelange/hugo-PaperMod/), 简洁大方如闫小姐一般的hugo主题
- [Git](https://git-scm.com/), 版本管理工具

## 搭建流程

### 注册GitHub账号

考虑这个应该在闫小姐智商范围内, 请这一步由闫小姐自己摸索

### 新建GitHub仓库

建立一个以自己的`[username].github.io`作为仓库名就可以
比如我的gihub用户名是`littlecontrol`, 那么我就建立一个仓库名为`littlecontrol.github.io`

### 新建内容

常用hugo目录(以我的为例)

- archetypes(目录)
  - default.md

  ```markdown
  ---
  title: "{{ replace .Name "-" " " | title }}"
  date: {{ .Date }}
  draft: true
  ---
  ```

- content(目录)
  - posts
    - first.md

    ```markdown
    ---
    title: "Miss Yan's First Blob"
    date: 2022-07-05T06:38:36+08:00
    draft: false
    ---
    Hello, It's my first blog that builded by myself.
    Thanking for your watching!

    ```

- static(目录)
  - favicon.ico(网站图标)
- config.yaml(文件)

```yaml
baseURL: "/"
languageCode: "en-us"
title: "Miss Yan's Blog"
theme: "PaperMod"
```

- .gitmodules(文件)

```gitmodules
[submodule "themes/PaperMod"]
    path = themes/PaperMod
    url = https://github.com/adityatelange/hugo-PaperMod.git
```

- .github(目录)
  - .workflows(目录)
    - github-actions-hugo.yml

    ```yml
    name: GitHub Pages

    on:
      push:
        branches:
          - main # Set a branch to deploy
      pull_request:

    jobs:
      deploy:
        runs-on: ubuntu-20.04
        concurrency:
          group: ${{ github.workflow }}-${{ github.ref }}
        steps:
          - uses: actions/checkout@v3
            with:
              submodules: true # Fetch Hugo themes (true OR recursive)
              fetch-depth: 0 # Fetch all history for .GitInfo and .Lastmod
          - name: Setup theme
            run: git submodule add https://github.com/adityatelange/hugo-PaperMod.git  themes/PaperMod

          - name: Setup Hugo
            uses: peaceiris/actions-hugo@v2
            with:
              hugo-version: "latest"
              # extended: true

          - name: Build
            run: hugo --minify

          - name: Deploy
            uses: peaceiris/actions-gh-pages@v3
            if: ${{ github.ref == 'refs/heads/main' }}
            with:
              github_token: ${{ secrets.GITHUB_TOKEN }}
              publish_dir: ./public

    ```

### 修改默认github pages 分支

![修改默认pages发布分支](/public/images/00.png)

## 访问网页
