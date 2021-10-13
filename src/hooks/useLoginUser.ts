// グローバルな状態管理として LoginUserProvider というものを準備した。
// その provider で全体の制御を囲う（子コンポーネントにした）とそのコンテキストが利用できる
// のだが、ここではそれを操作するためのHooksを作成するらしい。
// それぞれの関係性がよくわからない・・・。
// イメージとしてはグローバルな状態管理もカスタムフックスでいけそうな気がするが、contextに定義するのもよくわからない。
// 2021/10/13

import { useContext } from "react";

import {
  LoginUserContext,
  LoginUserContextType
} from "../providers/LoginUserProvider";

// この関数を利用すれば component からこのフックスを呼び出すことでLoginUserContextを参照することができる
// 大元は LoginUserProvider に定義があるけど見ても何のことかわからない
// 2021/10/13　9時13分　K.Hirata
export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
