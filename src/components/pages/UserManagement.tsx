import { Box, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const UserManagement: VFC = memo(() => {
  return (
    <>
      {/* chakra UI Wrapを利用すると画面の大きさに応じてコンポーネントサイズを変更してくれる箱を準備してくれる */}
      {/* これは相当便利やな */}
      {/* パディングの値を設定→ break point を設定してパディングの大きさを変化させる */}
      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          {/* 縦横の幅やバックグラウンド、角丸、影などを設定 */}
          <Box
            w="260px"
            h="260px"
            bg="white"
            borderRadius="10px"
            shadow="md"
            p={4}
            _hover={{ cursor: "pointer", opacity: 0.8 }}
          >
            <Stack textAlign="center">
              <Image
                borderRadius="full"
                boxSize="160px"
                src="https://source.unsplash.com/random"
                alt="プロフィール画像"
                m="auto"
              />
              <Text fontSize="lg" fontWeight="bold">
                くんたろー平原
              </Text>
              <Text fontSize="sm" color="gray">
                Kunio Hirata
              </Text>
            </Stack>
          </Box>
        </WrapItem>
      </Wrap>
    </>
  );
});
