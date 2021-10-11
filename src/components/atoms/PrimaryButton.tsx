import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

// ボタンの名称を受け取れれば良いので children を受け取るようにする
type Props = {
  children: ReactNode;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
      {children}
    </Button>
  );
});
