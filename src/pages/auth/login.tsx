import React from "react";
import AuthService from "../../services/authService";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";

function Home() {
  const auth = new AuthService();
  const dispatch = useDispatch();

  async function handleLogin() {
    const user = await auth.login();
    dispatch({ type: "SET_USER", payload: user });
  }

  const user = useSelector((state: RootState) => state.system.user?.date);

  return <h1>Login</h1>;
}

export default Home;
