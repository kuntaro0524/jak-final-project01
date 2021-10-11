import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const UserManagement: VFC = memo(() => {
  return (
    <>
      {/* chakra UI Wrapを利用すると画面の大きさに応じてコンポーネントサイズを変更してくれる箱を準備してくれる */}
      {/* これは相当便利やな */}
      <Wrap spacing="30px">
        {/* 仮の配列を作ってレンダリングを進めてみる */}
        {/* jak氏がよく使う方法→１０この配列を作成して表示する */}
        {[...Array(10)].map(() => (
          <WrapItem>
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "green"
              }}
            ></div>
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
});
