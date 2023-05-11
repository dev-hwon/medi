import jwtDecode from "jwt-decode";
import { verify, sign } from "jsonwebtoken";
import axios from "../util/axios";

const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    // This function below will handle when token is expired
    // const { exp } = jwtDecode(accessToken);
    // handleTokenExpired(exp);
  } else {
    localStorage.removeItem("accessToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

const JWT_SECRET = "mediclinicjwtsecret"; // jwt 인증 secret

// Eg: 60, "2 days", "10h", "7d"
const JWT_EXPIRES_IN = "8h";

export { verify, sign, isValidToken, setSession, JWT_SECRET, JWT_EXPIRES_IN };
