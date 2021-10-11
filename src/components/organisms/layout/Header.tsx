import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
  useDisclosure
} from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Header: VFC = memo(() => {
  // chakra-uiが準備してくれている drawer用のHooks
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* // chakra UIのコンポーネントを使って簡単にきれいに見た目を実装 */}
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        // ブレイクポイント（画面の大きさのしきい値）ごとに表示の方法を選択する
        padding={{ base: 3, md: 5 }}
      >
        {/* クリックできるようにする: as="a"
      パディングを右側の8px: mr={8}
      ホバーしたときの設定： _hover
      フォントサイズもブレイクポイントごとに切り替えが可能→fontSizeの設定  */}
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザ管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGlow={2}
          // ブレイクポイント以上の画面サイズでなければ表示されない
          // ブレイクポイントの画面サイズなんかはちゃんと公式で調べておくように
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link>ユーザ一覧</Link>
          </Box>
          <Link> 設定 </Link>
        </Flex>
        {/* ハンバーガーメニューをchakra-UIから引っ張ってくる
      ブレイクポイントごとに表示と非表示の切り替えが可能に */}
        <IconButton
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size="sm"
          variant="unstlyed"
          // スマホのときは 表示、それ以上のときは非表示
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
      </Flex>
      {/* 左から出す→ "left" */}
      {/* Drawer用のhooksも提供してくれている→ useDisclosure */}
      {/* https://chakra-ui.com/docs/hooks/use-disclosure */}
      {/* 講義のまま書いているつもりだが、closeがされない現時点 */}
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%"> top </Button>
            <Button w="100%"> ユーザ一覧 </Button>
            <Button w="100%"> 設定 </Button>
          </DrawerBody>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});
