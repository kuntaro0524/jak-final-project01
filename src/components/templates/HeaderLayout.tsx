import { memo, ReactNode, VFC } from "react";
import { Header } from "../organisms/layout/Header";

// ヘッダレイアウトを作成して初期表示ページのフォーマットをしていく
type Props = {
  // ＜＞で囲まれたChildrenを渡すというときの型指定はこれ（初見なのでよくわからない）s
  children: ReactNode;
};

// propsの変数を受け取るさいの型を指定できるようにしておく
export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
