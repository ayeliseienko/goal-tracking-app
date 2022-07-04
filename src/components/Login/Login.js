import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import firebase from 'firebase/compat/app';

import { auth } from '../../firebaseConfig';

import { logInUser } from '../../store/user/userSlice';

import Button from '../../common/Button/Button';

import { GOALS } from '../../pages/routes';

export default function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    await auth.signInWithPopup(provider);

    dispatch(
      logInUser({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
        profilePic: auth.currentUser.photoURL,
      })
    );

    navigate(GOALS);
  }

  return (
    <div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-4/5 p-5 rounded-md drop-shadow-lg text-center flex flex-col justify-center 
      items-center gap-5 bg-white border-t-8 border-t-blue md:w-auto dark:bg-darkModeLightBlack`}
    >
      <h1 className='text-2xl font-semibold mb-8 dark:text-white'>
        YOUR PERSONAL GOAL TRACKER
      </h1>
      <Button
        className={`flex justify-center items-center gap-3 bg-blue text-white 
        hover:bg-darkBlue focus:ring-4 focus:ring-lightBlue active:text-white`}
        onClick={signInWithGoogle}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          viewBox='0 0 16 16'
        >
          <path d='M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z' />
        </svg>
        Sign in with Google
      </Button>
    </div>
  );
}
