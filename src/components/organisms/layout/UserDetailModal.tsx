/* eslint-disable react-hooks/exhaustive-deps */
import {
  Center,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  Spinner,
  Stack,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, VFC } from "react";

// ボタンの名称を受け取れれば良いので children を受け取るようにする
type Props = {
  // 受け取るべきprops
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  // Propsの定義だけではなくてpropsからちゃんと受け取るように
  const { isOpen, onClose } = props;
  return (
    // 前回UserManagement.tsxで試験した部分をまるっともってきてコンポーネント化している
    // Modalコンポーネントを実装する
    // 自動フォーカスを外してあげる autoFocus = {false}
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      // 下からModalが出てくるような感じ
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        {/* Modalのヘッダを作成 */}
        <ModalHeader> ユーザー詳細 </ModalHeader>
        <ModalBody mx={4}>
          <Stack spaceing={4}>
            <FormControl>
              <FormLabel> 名前 </FormLabel>
              <Input value="じゃけー" isReadOnly />
              <FormLabel> フルネーム </FormLabel>
              <Input value="ふる　ねむお" isReadOnly />
              <FormLabel> EMAIL </FormLabel>
              <Input value="address@gmail" isReadOnly />
              <FormLabel> TEL </FormLabel>
              <Input value="090-1111-1111" isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
        {/* 閉じるボタンは以下ので勝手に入ってくれる！ */}
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );
});
