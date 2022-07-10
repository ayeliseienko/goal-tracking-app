import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import PropTypes from 'prop-types';

import { auth } from '../../firebase/firebaseConfig';

import { HOME } from '../../pages/routes';

export default function AuthorizedRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  return (
    <Fragment>
      {!user && !loading && <Navigate to={HOME} replace={true} />}
      {user && !loading && children}
    </Fragment>
  );
}

AuthorizedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
