import React from "react";
import "assets/css/index.scss";
import { User } from "./models/user";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "pages/home";
import About from "pages/about";
import NotFound from "./components/NotFound";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { store } from "store";
// /
// /auth
// /auth/login
// /dashboard
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
