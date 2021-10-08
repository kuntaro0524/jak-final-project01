import { memo, VFC } from "react";
import { Route, Switch } from "react-router";
import { Login } from "../components/pages/Login";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
    </Switch>
  );
});
