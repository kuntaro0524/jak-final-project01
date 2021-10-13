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
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: VFC = memo(() => {
  // カスタムフックの関数から以下の関数やbooleanを取得する
  const { getUsers, users, loading } = useAllUsers();

  // 画面表示初期に一回だけ実行したいとき
  // useEffectを利用して「カラ配列」を渡してあげると一回だけ実行される
  useEffect(() => getUsers(), []);

  // Modalの表示に必要な３つのパラメタをModal用のカスタムフックから取得
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Modalのページをユーザごとに表示するための仕掛け
  const { onSelectUser, selectedUser } = useSelectUser();

  // ログイン情報を保持している context がきちんと参照できているかどうかを確認
  const { loginUser } = useLoginUser();
  console.log(loginUser);

  // いつModal用のカスタムフックのonOpenを呼ぶか？
  // Userをクリックしたときに onOpen (これはModalで用意されているカスタムフックから受け取る関数)
  // 再レンダリング防止のために useCallBack　で囲んであげる
  // さらにidを引数として渡すようにしたので引数の型指定もしっかりとしておく
  const onClickUser = useCallback(
    (id: number) => {
      // Modal用のカスタムフック useSelectUser の中で定義してある関数
      // 今保持しているusersという配列を渡して id に一致するユーザをゲットする
      // →　selectedUser　が更新される
      // さらにonOpenを useSelectUser に渡してあげてあちらで表示までやってもらう
      onSelectUser({ id, users, onOpen });
      // onOpen();
    },
    // これまでは鬱陶しいってことで空の配列を入れて頭の行でlintを騙してきた。
    // 情報が更新されないと困るよというものはカッコに入れて情報を管理する（更新されたら更新するように）必要がある。
    [users, onSelectUser, onOpen]
  );

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
                // onClickのときにカードを特定する情報を渡す必要がある→idにしたs
                // Modalで利用できるようにするため
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  );
});
