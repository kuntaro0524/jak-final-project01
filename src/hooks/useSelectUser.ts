import { useCallback, useState } from "react";
import { User } from "../types/api/user";

// propsの型定義をしっかりとしておくこと
type Props = {
  id: number;
  users: Array<User>;
  // propsでModalを開く関数を受け取っておいてここで実行してしまおうという作戦
  onOpen: () => void;
};

// これまでは共通情報をもたせるためのカスタムフックと思っていたけど・・・
// 選択したユーザ情報を特定し、モーダルを表示するカスタムフックに格上げすることに
export const useSelectUser = () => {
  // selectedUserは型としてUserを持っている
  // useStateの引数の方としてはUserまたはnull ということらしい→よくわからないが
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // この関数の役割;
  // propsからユーザのIDと情報を受け取って一人のターゲットユーザを見つけて selectedUserとしてセットする
  const onSelectUser = useCallback((props: Props) => {
    // propsで親コンポーネントから受け取った値を格納
    // 最終的にModalをオープンする関数も受け取った onOpen
    const { id, users, onOpen } = props;
    // その情報から一致するユーザを見つける
    const targetUser = users.find((user) => user.id === id);
    // 検索で一致したユーザ情報をselected userにセットする
    // targetUserが未定義のときには null を設定すると（？？演算子）
    setSelectedUser(targetUser ?? null);
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};
