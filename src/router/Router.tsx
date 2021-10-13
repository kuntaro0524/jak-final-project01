import { memo, VFC } from "react";
import { Route, Switch } from "react-router";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      {/* 設定したLoginUserProviderのContext（グローバル状態管理）を利用する */}
      <LoginUserProvider>
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
                  <HeaderLayout>{route.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
      </LoginUserProvider>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
