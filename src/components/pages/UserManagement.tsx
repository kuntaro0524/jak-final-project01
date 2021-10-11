import { Box, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { UserCard } from "../organisms/layout/user/UserCard";

export const UserManagement: VFC = memo(() => {
  return (
    <>
      {/* chakra UI Wrapを利用すると画面の大きさに応じてコンポーネントサイズを変更してくれる箱を準備してくれる */}
      {/* これは相当便利やな */}
      {/* パディングの値を設定→ break point を設定してパディングの大きさを変化させる */}
      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <UserCard
            imageUrl="https://source.unsplash.com/random"
            userName="kuntaro"
            fullName="Kunio Hirata"
          />
        </WrapItem>
      </Wrap>
    </>
  );
});
