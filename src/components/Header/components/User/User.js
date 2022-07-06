import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../../../../firebase/firebaseConfig';

function User({ className = '' }) {
  const [user] = useAuthState(auth);

  return (
    <div className={`${className} flex gap-2 justify-start items-center`}>
      <img
        src={user.photoURL}
        alt='avatar'
        className={`h-10 rounded-full w-auto border-[3px] 
        border-t-green border-r-yellow border-b-lightRed border-l-lightBlue`}
      />
    </div>
  );
}

export default User;
