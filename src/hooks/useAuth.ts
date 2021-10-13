import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router";
import { User } from "../types/api/user";

import { useMessage } from "../hooks/useMessage";
// コンテキストの設定をしたファイル
import { useLoginUser } from "../hooks/useLoginUser";

// ユーザ認証に関連しているカスタムフックの実装

export const useAuth = () => {
  // IDが存在しているときに/homeへ遷移するので history を定義しておく
  const history = useHistory();
  // useMessageの中のshowMessageを使う→この定義の仕方ってちゃんとわかっていないかも
  // useMessage.ts　の中で useMessage　を exportしていて、その内部に showMessageという関数が定義されている。
  // ここでは useMessage をインポートして、その関数である showMessage　を使っている
  const { showMessage } = useMessage();

  // ローディングに関連したuseStateについても定義する
  // カスタムフックにするとこういうのが一元管理できるので便利というお話
  const [loading, setLoading] = useState(false);

  // ログインユーザの情報を管理するためのコンテキストを利用するところ
  const { setLoginUser } = useLoginUser();

  // 変にレンダリングされないように useCallBack を設定
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      // JSON placeholderからデータを取得する。
      // 取得するときにもう入力された id をパラメータとして渡してデータを取得する
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          // 10のユーザだけアドミンとして設定する記述
          const isAdmin = res.data.id === 10 ? true : false;
          // IDまで指定してデータを取得したときに結果があれば
          if (res.data) {
            // ここでコンテキストにログイン成功したユーザ情報を保持する
            // 新しくオブジェクトを追加する場合に User 情報 + boolean
            setLoginUser({ ...res.data, isAdmin });
            // chakra UI の toast という機能を用いてタイトルを表示
            showMessage({ title: "ログインしました！", status: "success" });
            history.push("/home");

            // 結果がなければユーザが登録されていない
          } else {
            showMessage({
              title: "そんなユーザが居ないです",
              status: "error"
            });
          }
        })
        // なぜか中括弧を利用したものでないと書式でエラーが出た
        .catch(() => {
          showMessage({
            title: "認証しっぱいでごんす",
            status: "warning"
          });
        })
        // どっちの結果にしてもloadingフラグを false にしておく
        .finally(() => setLoading(false));
    },
    [history, showMessage]
  );
  return { login, loading };
};
