import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { MdPassword } from 'react-icons/md';
import { fadeInOut } from '../animations';
import AuthInput from '../components/AuthInput';
import SigninButton from '../components/SigninButton';
import { auth } from '../config/firebase.config';
import { signInWithGitHub, signInWithGoogle } from '../utils/helpers';

function SignUp() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailValidationStatus, setEmailValidationStatus] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');

  const createNewUser = async () => {
    if (emailValidationStatus) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(userCred => {
          if (userCred) {
            console.log(userCred);
          }
        })
        .catch(err => {
          console.log(err.message);
          if (err.message.includes('auth/weak-password')) {
            setAlert(true);
            setAlertMsg('Password should be atleast 6 characters');
          } else {
            setAlert(true);
            setAlertMsg('Sorry we are facing some issues');
          }
          setTimeout(() => {
            setAlert(false);
            setAlertMsg('');
          }, 4000);
        });
    }
  };

  const loginWithEmailPassword = async () => {
    if (emailValidationStatus) {
      await signInWithEmailAndPassword(auth, email, password)
        .then(userCred => {
          if (userCred) {
            console.log(userCred);
          }
        })
        .catch(err => {
          if (err.message.includes('invalid-login')) {
            setAlert(true);
            setAlertMsg('Invalid Credentials: User Not Found');
          } else {
            setAlert(true);
            setAlertMsg('Temporarily disabled due to many failed logins');
          }
          setTimeout(() => {
            setAlert(false);
            setAlertMsg('');
          }, 4000);
        });
    }
  };

  return (
    <div className=" w-full flex flex-col items-center justify-center py-8">
      <p className="my-4">
        {!isLogin ? 'Join our platform!' : 'Login to your Account'}
      </p>
      <div className="px-8 w-full md:w-auto py-4 rounded-md bg-secondary shadow-md flex flex-col items-center justify-center gap-4">
        {/* email */}
        <AuthInput
          label="Email:"
          placeHolder="Enter the email"
          isPass={false}
          key="email"
          setStateFunc={setEmail}
          Icon={FaEnvelope}
          setEmailValidationStatus={setEmailValidationStatus}
        />
        <AuthInput
          label="Password:"
          placeHolder="Enter the password"
          isPass={true}
          key="password"
          setStateFunc={setPassword}
          Icon={MdPassword}
        />
        {/* error section */}
        <AnimatePresence>
          {alert && (
            <motion.p
              className="text-red-500"
              key={'AlertMessage'}
              {...fadeInOut}>
              {alertMsg}
            </motion.p>
          )}
        </AnimatePresence>

        {/* login btn */}
        <motion.div
          onClick={!isLogin ? createNewUser : loginWithEmailPassword}
          whileTap={{ scale: 0.99, translateY: 2 }}
          className="hover:bg-emerald-600 text-emerald-50 px-4 py-3 rounded-md bg-emerald-500 transition cursor-pointer w-full text-center">
          {!isLogin ? 'Create an Account' : 'Login'}
        </motion.div>
        {/* text section */}
        {!isLogin ? (
          <p className="text-sm flex items-center justify-center gap-2">
            Already have an account ?
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-emerald-500 cursor-pointer">
              Login Here
            </span>
          </p>
        ) : (
          <p className="text-sm flex items-center justify-center gap-2">
            Dont have an account ?
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-emerald-500 cursor-pointer">
              Create Here
            </span>
          </p>
        )}
        {/* or section */}
        <div className="flex items-center justify-center gap-12">
          <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
          <p className="text-sm text-[rgba(256,256,256,0.2)]">OR</p>
          <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
        </div>
        {/* google btn */}
        <SigninButton
          Icon={FcGoogle}
          label={'Continue with Google'}
          onClick={signInWithGoogle}
        />
        <SigninButton
          Icon={FaGithub}
          label={'Continue with Github'}
          onClick={signInWithGitHub}
        />
      </div>
    </div>
  );
}

export default SignUp;
