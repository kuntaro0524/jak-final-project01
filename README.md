# jak-final-project01

Created with CodeSandbox
---
# Routing 設定の極意　（をこんなとこに書いても後で見ない気もするが）

- router ディレクトリを作成
- その中に、HomeRoutes.tsx を作成

/home/path みたいな感じで設定する path の部分をオブジェクトで一つずつ設定する。
ここで設定するのはパスとして /home 　をルート（？）にもつパスのことで具体的には

- /home/
- /home/user_management
- /home/setting

のページのこと。全体のページとしては２枚ある。

- Home 　と Login
- そのうち Home に上記の３つの内容を遷移できるようにする（SPA）

* Router.tsx の中で内容を展開していく
  具体的な内容は Router.tsx を確認するのが一番
---
