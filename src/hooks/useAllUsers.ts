// APIからユーザをすべて取得するというカスタムフック
// カスタムフック＝関数
// 返却するのは関数と変数

export const useAllUsers = () => {
  const [loading, setLoading] = useState();
  const [users, setUsers] = useState();

  const getUsers = () => {};
  return { getUsers, loading, users };
};
