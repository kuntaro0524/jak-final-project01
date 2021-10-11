import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { PrimaryButton } from "../../components/atoms/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

// axiosでユーザデータを取得→ID番号でログインができるという簡単な機能を実装していくことに
export const Login: VFC = memo(() => {
  // userIDとセット関数を定義
  const [userID, setUserID] = useState("");
  // カスタムフックを利用して認証機能を付与していく
  const { login, loading } = useAuth();

  // イベントに相当する引数は暗記しろって！
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserID(e.target.value);

  const onClickLogin = () => login(userID);

  return (
    <Flex align="center" justify="center" height="100vh">
      {/* 角を丸くしたり、影をつけたりする */}
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザ管理
        </Heading>
        {/* Y軸のマージンを4pxにする */}
        <Divider my={4} />
        {/* コンポーネントを等間隔で並べていくのに非常に便利 */}
        {/* y軸やX軸のマージンも設定している */}
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="UserID"
            value={userID}
            onChange={onChangeUserId}
          />
          <PrimaryButton onClick={onClickLogin}> PUSH </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
