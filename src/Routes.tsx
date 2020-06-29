import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/auth/login";
import NotFound from "./components/NotFound";
import AuthLayout from "components/AuthLayout";
import Layout from "components/Layout";

export default function () {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path="/auth">
          <AuthLayout>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/register" component={Login} />
          </AuthLayout>
        </Route>
        {/*<Route path="/">*/}
        {/*    <Route exact path="/" component={Home} />*/}
        {/*    <Route path="/about" component={About} />*/}
        {/*</Route>*/}

        <Route path="*">
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="*" component={NotFound} />
          </Layout>
        </Route>
      </Switch>
    </Suspense>
  );
}
