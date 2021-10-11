import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type Props = {
  title: string;
  // 状態については以下の４つしか値を持つことができないという定義の方法
  status: "info" | "warning" | "success" | "error";
};

export const useMessage = () => {
  const toast = useToast();
  // ちょっとやそっとでは再生成されないようにuseCallbackを指定しておく
  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props;
      toast({
        // 同じ名称のときはコロンを省略して設定することができる
        // status変数の値によってメッセージの色が変化する！s
        title,
        status,
        position: "top",
        duration: 2000,
        isClosable: true
      });
    },
    [toast]
  );

  return { showMessage };
};
