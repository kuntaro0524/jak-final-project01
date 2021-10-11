import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    // ハンバーガーメニューをchakra-UIから引っ張ってくる
    // ブレイクポイントごとに表示と非表示の切り替えが可能に
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstlyed"
      // スマホのときは 表示、それ以上のときは非表示
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
});
