// APIからユーザをすべて取得するというカスタムフック
// カスタムフック＝関数
// 返却するのは関数と変数

import axios from "axios";
import { useCallback, useState } from "react";

import { User } from "../types/api/user.ts";
// メッセージを見せるときにおしゃれに表示するコンポーネントを実装したのでそれを使っていくスタイル
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>();
  // 手の混んだメッセージ表示のコンポーネント
  const { showMessage } = userMessage();

  // 他のコンポーネントで　使うときに「再生成されないように」する
  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => {
        showMessage({ title: "駄目だよこれは", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { getUsers, loading, users };
};
