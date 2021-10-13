/* eslint-disable react-hooks/exhaustive-deps */
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  Stack,
  ModalFooter
} from "@chakra-ui/react";
import { memo, VFC } from "react";

// ユーザの情報をインポートしておく
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/PrimaryButton";

// ボタンの名称を受け取れれば良いので children を受け取るようにする
type Props = {
  // 受け取るべきprops
  // ユーザ情報を受け取ってModalに書いてあげるための定義
  user: User | null /* これは　 useSelectUsers */;
  isOpen: boolean;
  // アドミンかどうかというのをここで受け取るようにする　必須でない
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  // Propsの定義だけではなくてpropsからちゃんと受け取るように
  // 親コンポーネントからしっかりuser情報ももらっていく
  const { isOpen, onClose, user, isAdmin } = props;

  const onClickUpdate = () => alert("unko shita.");
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
      <ModalContent pb={2}>
        {/* Modalのヘッダを作成 */}
        <ModalHeader> ユーザー詳細 </ModalHeader>
        <ModalBody mx={4}>
          <Stack spaceing={4}>
            <FormControl>
              {/* userの情報をちゃんと渡して Modal を表示するようにする */}
              <FormLabel> 名前 </FormLabel>
              {/* isAdminに応じて編集が可能かどうかを変えていく */}
              <Input value={user?.username} isReadOnly={!isAdmin} />
              <FormLabel> フルネーム </FormLabel>
              <Input value={user?.name} isReadOnly={!isAdmin} />
              <FormLabel> EMAIL </FormLabel>
              <Input value={user?.email} isReadOnly={!isAdmin} />
              <FormLabel> TEL </FormLabel>
              <Input value={user?.phone} isReadOnly={!isAdmin} />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}> 更新する </PrimaryButton>
          </ModalFooter>
        )}
        {/* 閉じるボタンは以下ので勝手に入ってくれる！ */}
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );
});
