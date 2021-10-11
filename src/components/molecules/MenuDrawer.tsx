import { Button, Drawer, DrawerBody, DrawerOverlay } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  // 引数がない関数としての型定義
  onClose: () => void;
  isOpen: boolean;
};

/* 左から出す→ "left" */
/* Drawer用のhooksも提供してくれている→ useDisclosure */
/* https://chakra-ui.com/docs/hooks/use-disclosure */
/* 講義のまま書いているつもりだが、closeがされない現時点 */

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerBody p={0} bg="gray.100">
          <Button w="100%"> top </Button>
          <Button w="100%"> ユーザ一覧 </Button>
          <Button w="100%"> 設定 </Button>
        </DrawerBody>
      </DrawerOverlay>
    </Drawer>
  );
});
