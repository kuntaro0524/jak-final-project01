import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router";
import { User } from "../types/api/user";

// ユーザ認証に関連しているカスタムフックの実装

export const useAuth = () => {
  // IDが存在しているときに/homeへ遷移するので history を定義しておく
  const history = useHistory();
  // ローディングに関連したuseStateについても定義する
  // カスタムフックにするとこういうのが一元管理できるので便利というお話
  const [loading, setLoading] = useState(false);

  // 変にレンダリングされないように useCallBack を設定
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      // JSON placeholderからデータを取得する。
      // 取得するときにもう入力された id をパラメータとして渡してデータを取得する
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          // IDまで指定してデータを取得したときに結果があれば
          if (res.data) {
            history.push("/home");
            // 結果がなければユーザが登録されていない
          } else {
            alert("User not found.");
          }
        })
        .catch(() => alert("cannot be loggedin"))
        // どっちの結果にしてもloadingフラグを false にしておく
        .finally(() => setLoading(false));
    },
    [history]
  );
  return { login, loading };
};
