import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

// ボタンの名称を受け取れれば良いので children を受け取るようにする
type Props = {
  children: ReactNode;
  // ロード中にアクティブにしたりしなかったりするための仕掛け
  // どちらも必須ではないパラメータとして型指定する
  disabled?: boolean;
  loading?: boolean;
  // オンクリックのイベント設定→ここでは受け取ってそのまま chakraUI のコンポーネントを渡している
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  // 必須でないパラメータについてはここでデフォルト値を設定しながら受け取る
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      // Loadingの間だけボタンが非活性になる
      isLoading={loading}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
