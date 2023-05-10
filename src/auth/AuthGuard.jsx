import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// components
import Loader from '../components/Loader';
import { useAuthContext } from './useAuthContext';
import { PATH_LOGIN } from "@/src/routes/paths";

// ----------------------------------------------------------------------

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default function AuthGuard({ children }) {
  const { isAuthenticated, isInitialized } = useAuthContext();
  const { pathname, push } = useRouter();
  const [requestedLocation, setRequestedLocation] = useState(null); // 현재 경로

  useEffect(() => {
    if (requestedLocation && pathname !== requestedLocation) {
      push(requestedLocation);
    }
    if (isAuthenticated) {
      setRequestedLocation(null);
    }
  }, [isAuthenticated, pathname, push, requestedLocation]);

  if (!isInitialized) {
    return <Loader size={{ width: "200px", height: "200px" }} />;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    // 인증 실패
    // pre-render에서는 메세지를 노출시키지 않는다.
    // pathname 와 requestedLocation 이 같을 때
    if(pathname === requestedLocation) {
      alert("로그인이 필요합니다");
    }
    push(PATH_LOGIN);
  }

  return <> {children} </>;
}
