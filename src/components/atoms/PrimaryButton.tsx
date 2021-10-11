import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

// ボタンの名称を受け取れれば良いので children を受け取るようにする
type Props = {
  children: ReactNode;
  // オンクリックのイベント設定→ここでは受け取ってそのまま chakraUI のコンポーネントを渡している
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
