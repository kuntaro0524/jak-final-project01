import { useCallback, useState } from "react";
import { User } from "../types/api/user";

// propsの型定義をしっかりとしておくこと
type Props = {
  id: number;
  users: Array<User>;
};

export const useSelectUser = () => {
  // selectedUserは型としてUserを持っている
  // useStateの引数の方としてはUserまたはnull ということらしい→よくわからないが
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    // propsで親コンポーネントから受け取った値を格納
    const { id, users } = props;
    // その情報から一致するユーザを見つける
    const targetUser = users.find((user) => user.id === id);
    // 検索で一致したユーザ情報をselected userにセットする
    // targetUserが未定義のときには null を設定すると（？？演算子）
    setSelectedUser(targetUser ?? null);
  }, []);
  return { onSelectUser, selectedUser };
};
