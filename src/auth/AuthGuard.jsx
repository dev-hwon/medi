import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// components
import Loader from '../components/Loader';
import { useAuthContext } from './useAuthContext';

// ----------------------------------------------------------------------

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default function AuthGuard({ children }) {
  const { isAuthenticated, isInitialized } = useAuthContext();
  const { pathname, push, router } = useRouter();
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
    router.push(process.env.NEXT_PUBLIC_MEDI_HOME);
  }

  return <> {children} </>;
}
