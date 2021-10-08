import { memo, VFC } from "react";
import { Route, Switch } from "react-router";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      {/* 基本の書き方はこれ */}
      {/* つまり pathが / ならば <Login>をレンダリングするということ */}
      <Route exact path="/">
        <Login />
      </Route>
      {/* Home配下に３つのリンクをつけていくmapの設定 */}
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
