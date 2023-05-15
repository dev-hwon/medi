import PropTypes from "prop-types";
import {
  createContext,
  useEffect,
  useReducer,
  useCallback,
  useMemo,
} from "react";
// utils
import axios from "../util/axios";
import localStorageAvailable from "./localStorageAvailable";
//
import { isValidToken, setSession } from "./jwt";

// ----------------------------------------------------------------------

// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...

// ----------------------------------------------------------------------

const initialState = {
  actionType: null,
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

const reducer = (state, action) => {
  if (action.type === "INITIAL") {
    return {
      actionType: action.type,
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      user: action.payload.user,
    };
  }
  if (action.type === "LOGIN") {
    return {
      ...state,
      actionType: action.type,
      isAuthenticated: true,
      user: action.payload.user,
    };
  }
  /*

  if (action.type === 'LOGOUT') {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };
  }
  if (action.type === 'REGISTER') {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
    };
  }  
  */
  return state;
};

// ----------------------------------------------------------------------

export const AuthContext = createContext(null);

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const storageAvailable = localStorageAvailable();

  // LOGIN
  const login = useCallback(async (mediCookie) => {
    try {
      const response = await axios.get("/api/account/login");
      const { accessToken, user } = response.data;

      setSession(accessToken);

      dispatch({
        type: "LOGIN",
        payload: {
          user,
        },
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: "LOGIN",
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  }, []);

  const initialize = useCallback(async () => {
    try {
      const accessToken = storageAvailable
        ? localStorage.getItem("accessToken")
        : "";
      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);

        const response = await axios.get(
          "/api/account/my-account?token=" + accessToken
        );
        const { user } = response.data;

        dispatch({
          type: "INITIAL",
          payload: {
            isAuthenticated: true,
            user,
          },
        });
      } else {
        dispatch({
          type: "INITIAL",
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });

        // 로그인 시도 ( 자동 로그인 )
        // 로그인 별도 처리 시 해당 구문 제거
        login();
      }
    } catch (error) {
      console.log("check");
      console.error(error);
      dispatch({
        type: "INITIAL",
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  }, [login, storageAvailable]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  /*
  // REGISTER
  const register = useCallback(async (email, password, firstName, lastName) => {
    const response = await axios.post('/api/account/register', {
      email,
      password,
      firstName,
      lastName,
    });
    const { accessToken, user } = response.data;

    localStorage.setItem('accessToken', accessToken);

    dispatch({
      type: 'REGISTER',
      payload: {
        user,
      },
    });
  }, []);

  // LOGOUT
  const logout = useCallback(() => {
    setSession(null);
    dispatch({
      type: 'LOGOUT',
    });
    alert('로그아웃');
  }, []);
  */

  const memoizedValue = useMemo(
    () => ({
      actionType: state.actionType,
      isInitialized: state.isInitialized,
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      method: "jwt",
      login,
    }),
    [
      state.actionType,
      state.isAuthenticated,
      state.isInitialized,
      state.user,
      login,
    ]
  );

  return (
    <>
      {state.isInitialized ? (
        <AuthContext.Provider value={memoizedValue}>
          {children}
        </AuthContext.Provider>
      ) : (
        "loading..."
      )}
    </>
  );
}
