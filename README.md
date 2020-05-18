# starter-kit

> Nuxt × Typescript(Vue.Extends) × Sass、 Google Analyticsセッティング済み。

## Build Setup

``` bash
$ yarn install

# 環境変数設定
$ touch config/.env.local

# git設定(starter-kitのログ削除)
$ git checkout --orphan init
$ git add .
$ git commit -m first_commit
$ git push -f . init:master
$ git gc --aggressive
$ git log

$ git remote set-url origin <some_url>
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
