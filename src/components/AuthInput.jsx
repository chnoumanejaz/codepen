import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { motion } from 'framer-motion';

function AuthInput({
  label,
  placeHolder,
  isPass,
  setStateFunc,
  Icon,
  setEmailValidationStatus,
}) {
  const [showPass, setShowPass] = useState(false);
  const [value, setValue] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  function handelOnChange(e) {
    setValue(e.target.value);
    setStateFunc(e.target.value);

    if (label.toLowerCase().includes('email')) {
      const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const status = emailFormat.test(value);
      setIsValidEmail(status);
      setEmailValidationStatus(status);
    }
  }

  return (
    <div className="flex flex-col items-start justify-start gap-1">
      <label htmlFor={label} className="text-base text-gray-300">
        {label}
      </label>
      <div
        className={`flex items-center justify-center border-2 gap-3 w-full md:w-96 rounded-md px-4 py-1 bg-gray-100 ${
          !isValidEmail &&
          label.toLowerCase().includes('email') &&
          value.length > 0
            ? 'border-red-700'
            : ''
        }`}>
        <Icon className="text-2xl text-text555" />
        <input
          type={isPass && !showPass ? 'password' : 'text'}
          id={label}
          placeholder={placeHolder}
          className="flex-1 w-full h-full py-1 border-none outline-none bg-transparent text-text555"
          value={value}
          onChange={handelOnChange}
        />

        {isPass && (
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
            onClick={() => setShowPass(!showPass)}>
            {showPass ? (
              <FaEyeSlash className="text-text555 text-2xl" />
            ) : (
              <FaEye className="text-text555 text-2xl" />
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default AuthInput;
