---
title: Blog開設しました。
thumb: vue
tags: ['blog', 'vuepress']
series: ブログ
---



## ブログ始めました。

最近、勉強した内容を記録する必要性を感じたので勉強した内容を記録するブログを作りました。

使ったツール・framework

- Vuepress
- tailwindcss
- github action
- vs code material icons



## 工夫した点

### ==作成日自動化==

まず、一般的な静的サイトの場合Markdownのfrontmatterでdateを書くかファイル名に日にちを書いて作成日を表示することが多い。

でもこの方式だと毎回ファイル名をformatに合わせて書かないといけなくなってめんどくさいと思ったので自動に日付を生成する機能を入れた。

データベースを使わず`git log`を使って最初の作成日がわかることを[@vuepress/plugin-last-updated](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/plugin-last-updated/index.js)のコードを見て気づいて`getGitCreatedTimeStamp`を作った。

```javascript
function getGitCreatedTimeStamp(filePath) {
  let lastUpdated
  try {
    let gitLog = spawn
      .sync(
        'git',
        [
          'log',
          '--reverse',
          '--oneline',
          '--no-merges',
          '--format=%at',
          path.basename(filePath),
        ],
        {
          cwd: path.dirname(filePath),
        }
      )
      .stdout.toString('utf-8')

    lastUpdated = parseInt(gitLog.split('\n')[0]) * 1000
  } catch (e) {
    /* do not handle for now */
  }
  return lastUpdated
}
```

実は`git log -1`みたいに-1をparamに追加すると一行でsplitをする必要はなくなるけどなぜか求めた結果と違う結果が出て今回はsplitで一番最初にcommitしたtimestampを持ってくるようにしてみた。



### ==テーマ==

vuepressもcommunityで開発したthemeは多いけどカスタムが難しいとかこのテーマを使う人が多すぎるとかの理由で自分のテーマを作りたいと思って`tailwindcss`を用いてデザインしてみた。あまりデザインに自信はないけど頑張りました。それとthumbnailに使うアイコンなどはvs-codeのmaterialテーマで使っているファイルアイコンを使うようにしてみた。

**Directory Structure**

```bash
theme
├── assets
│   └── data
│       ├── devicon.json
│       ├── gitmojis.json
│       └── icons.js
├── enhanceApp.js
├── global-components
│   ├── authorCard.vue
│   ├── foot.vue
│   ├── hometab.vue
│   ├── infocard.vue
│   ├── navbar.vue
│   ├── postCard.vue
│   ├── postInfo.vue
│   ├── postList.vue
│   ├── seriesCard.vue
│   ├── seriesInfo.vue
│   ├── seriesList.vue
│   ├── tagCard.vue
│   ├── tagInfo.vue
│   ├── tagsList.vue
│   ├── tilList.vue
│   ├── toc.vue
│   └── utterances.vue
├── index.js
├── layouts
│   ├── 404.vue
│   ├── IndexPost.vue
│   ├── Layout.vue
│   ├── Post.vue
│   ├── Series.vue
│   └── Tags.vue
├── plugins
│   └── page.js
└── styles
    ├── palette.styl
    └── vscode.css
```



### ==デプロイ==

今回初めてgithubのactions機能を使ってみた。blogをgithub pagesで運用するつもりだったけどgithub pagesは静的なファイルしか使えないからvuepressをbuildしてbuildされたファイルを他のbranchにpushする必要性を感じて記事を書くたびにこのprocessを繰り返すことは無理だと思ったのでactionsを通じてファイルをpushするだけで自動にbuildしてpushしてくれるようにしてみた。

ここで、actionsのcheckoutのoptionを何もセットしてなかったからgit logを使ってもdeployした時間しか出てこない問題が発生して`fetch-depth:0`optionを追加してgitのhistoryまで持ってくるようにして==作成日==自動化の問題を解決した。

```yaml
name: build & deploy

on:
  push:
    branches: [master]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v2
        with:
          fetch-depth: 0

      - name: Install and Build
        run: |
          yarn && yarn docs:build

      - name: Deploy Build Files
        env:
          # You should enroll ACEESS_TOKEN to repository's secret
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        run: |
          cd .vuepress/dist
          git config --global user.email "notedev.jp@gmail.com"
          git config --global user.name "suumokr"
          git init
          git add -A
          git commit -m 'deploy with vuepress'
          git push -f https://${ACCESS_TOKEN}@github.com/${GITHUB_REPOSITORY}.git master:gh-pages

```









## Repo

https://github.com/suumokr/suumokr.github.io





