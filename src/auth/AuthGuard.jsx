import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// components
import Loader from '../components/Loader';
import { useAuthContext } from './useAuthContext';
import { ROOTS_STORE, PATH_LOGIN } from "@/src/routes/paths";

// ----------------------------------------------------------------------

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default function AuthGuard({ children }) {
  const { user, actionType, isAuthenticated, isInitialized } = useAuthContext();
  const { pathname, push } = useRouter();
  const [requestedLocation, setRequestedLocation] = useState(null); // 현재 경로
  const [ isNoti, setIsNoti ] = useState(false); // alert 중복 방지

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
  }

  if(actionType=="LOGIN") {
    if (!isNoti && !isAuthenticated) {
      alert("로그인이 필요합니다");
      setIsNoti(true);
      push(PATH_LOGIN);
    }    
  }

  if(isAuthenticated && user) {
    if(!isNoti &&user.member_type=="L") {
      alert("기공소는 사용하실 수 없습니다");
      setIsNoti(true);
      // push(ROOTS_STORE);
    }
  }
 
  return <> {children} </>;
}
