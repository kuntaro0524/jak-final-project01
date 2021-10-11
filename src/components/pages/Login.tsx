import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack
} from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Login: VFC = memo(() => {
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
          <Input placeholder="UserID" />
          <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
            ログイン　
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
});
