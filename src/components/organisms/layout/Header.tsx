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
import { MenuIconButton } from "../../atoms/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

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
          flexglow={2}
          // ブレイクポイント以上の画面サイズでなければ表示されない
          // ブレイクポイントの画面サイズなんかはちゃんと公式で調べておくように
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link>ユーザ一覧</Link>
          </Box>
          <Link> 設定 </Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
});
