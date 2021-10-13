// useStateの更新関数の定義にはDispatch, SetStateActionが必要
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";

import { User } from "../types/api/user";

// コンテキストで保持する値とセット関数を定義
export type LoginUserContextType = {
  // ユーザがアドミンかどうかということを保持する boolean もグローバル情報として保持
  // User　という型に boolean を追加するというのが下のような定義のしかたもできる
  loginUser: User & { isAdmin: boolean };
  setLoginUser: Dispatch<SetStateAction<User | null>>;
};

// まずはコンテキストを作成していく
// Contextはグローバルに状態を管理していくもの。
// 今はログインユーザを全体の実行で保持しておいて変化があればそれぞれの機能を有効にしたり無効にしたりする
// Router の中でProviderを設定してあげる
export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

//  Providerも書いていく
export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  // 管理したい情報について定義を useState で行っていく
  const [loginUser, setLoginUser] = useState<User | null>(null);
  return (
    // コンテキストとして扱えるように useState で管理している情報を provider に渡してあげる
    // コンテキストに設定した数値は変更あるたびに関連するコンポーネントが再レンダリングされるのが要注意
    // 実際にレンダリングの頻度を考えて設計を行って複雑化したときにはコンテキストを分けて設定するというのもテクニックとしては存在する
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
