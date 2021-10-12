import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

// ボタンの名称を受け取れれば良いので children を受け取るようにする
type Props = {
  // イメージデータのURL
  imageUrl: string;
  userName: string;
  fullName: string;
  // propsで渡される関数に関する記述
  onClick: () => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  // Propsの定義だけではなくてpropsからちゃんと受け取るように
  const { imageUrl, userName, fullName, onClick } = props;
  console.log(imageUrl);
  return (
    <>
      {/* 縦横の幅やバックグラウンド、角丸、影などを設定 */}
      {/* ボックスのどっかをクリックしたときに onClick を呼ぶようにする */}
      <Box
        w="260px"
        h="260px"
        bg="white"
        borderRadius="10px"
        shadow="md"
        p={4}
        _hover={{ cursor: "pointer", opacity: 0.8 }}
        // ここでpropsでもらった関数を定義する
        onClick={onClick}
      >
        <Stack textAlign="center">
          <Image
            borderRadius="full"
            boxSize="160px"
            src={imageUrl}
            alt="プロフィール画像"
            m="auto"
          />
          <Text fontSize="lg" fontWeight="bold">
            {userName}
          </Text>
          <Text fontSize="sm" color="gray">
            {fullName}
          </Text>
        </Stack>
      </Box>
    </>
  );
});
