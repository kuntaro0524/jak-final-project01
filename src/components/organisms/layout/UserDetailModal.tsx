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
import { ChangeEvent, memo, useEffect, useState, VFC } from "react";

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

  // Modalで表示されている情報を編集して更新できるような感じにするために編集に関する情報を state で保持する
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // 表示するときに最初のModalに表示する値を入れとく
  useEffect(() => {
    // undefinedの可能性があるので ?? で設定されていなかったら空文字列を設定する
    setUserName(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
    // userが更新されるたびに実行されたいので依存配列にuserを渡しておいてあげる
  }, [user]);

  const onClickUpdate = () => alert("unko shita.");
  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);

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
              {/* 値が変化したらどうするかということも定義しておく */}
              <Input
                value={username}
                isReadOnly={!isAdmin}
                onChange={onChangeUserName}
              />
              <FormLabel> フルネーム </FormLabel>
              <Input
                value={name}
                isReadOnly={!isAdmin}
                onChange={onChangeName}
              />
              <FormLabel> EMAIL </FormLabel>
              <Input
                value={email}
                isReadOnly={!isAdmin}
                onChange={onChangeEmail}
              />
              <FormLabel> TEL </FormLabel>
              <Input
                value={phone}
                isReadOnly={!isAdmin}
                onChange={onChangePhone}
              />
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
