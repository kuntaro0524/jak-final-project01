/* eslint-disable react-hooks/exhaustive-deps */
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";

import { UserCard } from "../organisms/layout/user/UserCard";
import { UserDetailModal } from "../organisms/layout/UserDetailModal";

export const UserManagement: VFC = memo(() => {
  // カスタムフックの関数から以下の関数やbooleanを取得する
  const { getUsers, users, loading } = useAllUsers();

  // 画面表示初期に一回だけ実行したいとき
  // useEffectを利用して「カラ配列」を渡してあげると一回だけ実行される
  useEffect(() => getUsers(), []);

  // Modalの表示に必要な３つのパラメタをModal用のカスタムフックから取得
  const { isOpen, onOpen, onClose } = useDisclosure();

  // いつModal用のカスタムフックのonOpenを呼ぶか？
  // Userをクリックしたときに onOpen (これはModalで用意されているカスタムフックから受け取る関数)
  // 再レンダリング防止のために useCallBack　で囲んであげる
  const onClickUser = useCallback(() => onOpen(), []);

  return (
    <>
      {/* ローディング中はスピナーが回っているということにしたい */}
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        // chakra UI Wrapを利用すると画面の大きさに応じてコンポーネントサイズを変更してくれる箱を準備してくれる
        // これは相当便利やな
        // パディングの値を設定→ break point を設定してパディングの大きさを変化させる
        <Wrap p={{ base: 4, md: 10 }}>
          {/* ユーザごとにマップを回してレンダリングを行う */}
          {users.map((user) => (
            // マージンを自動にすることで中心寄せが可能に
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
