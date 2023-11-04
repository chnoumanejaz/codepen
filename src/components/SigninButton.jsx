import { motion } from 'framer-motion';
function SigninButton({ Icon, label }) {
  return (
    <motion.div
      whileTap={{ scale: 0.99 }}
      className="flex items-center justify-center gap-3 bg-emerald-100 backdrop-blur-md w-full py-3 rounded-md hover:bg-emerald-50 cursor-pointer text-emerald-800 transition">
      <Icon className="text-2xl" />
      <p>{label}</p>
    </motion.div>
  );
}

export default SigninButton;
