import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const UserManagement: VFC = memo(() => {
  return (
    <>
      <Wrap>
        {/* 仮の配列を作ってレンダリングを進めてみる */}
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
