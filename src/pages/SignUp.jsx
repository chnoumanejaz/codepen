import { useState } from 'react';
import AuthInput from '../components/AuthInput';
import { FaEnvelope, FaGithub } from 'react-icons/fa6';
import { MdPassword } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';
import SigninButton from '../components/SigninButton';

function SignUp() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailValidationStatus, setEmailValidationStatus] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
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
        {/* login btn */}
        <motion.div
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
        <SigninButton Icon={FcGoogle} label={'Continue with Google'} />
        <SigninButton Icon={FaGithub} label={'Continue with Github'} />
      </div>
    </div>
  );
}

export default SignUp;
