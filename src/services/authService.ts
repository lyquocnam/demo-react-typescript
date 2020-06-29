import fetcher from "../libs/fetcher";
import { User } from "../models/user";

export default class AuthService {
  endPoint?: string = "";
  constructor() {
    this.endPoint = process.env.REACT_APP_ENDPOINT;
  }

  login(): Promise<User> {
    return fetcher("/auth/login", {
      method: "POST",
      body: JSON.stringify({}),
    });
  }
}
