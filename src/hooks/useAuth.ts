import axios from "axios";
import { useCallback } from "react";
import { useHistory } from "react-router";
import { User } from "../types/api/user";

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  // 変にレンダリングされないように useCallBack を設定
  const login = useCallback(
    (id: string) => {
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            history.push("/home");
          } else {
            alert("User not found.");
          }
        })
        .catch(() => alert("cannot be loggedin"));
    },
    [history]
  );
  return { login };
};
