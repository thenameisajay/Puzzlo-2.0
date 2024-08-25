import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface ErrorAnimationProps {
  message?: string;
}

export default function ErrorComponent({
  message = 'An error occurred. Please try again.',
}: ErrorAnimationProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-sky-500">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
        >
          <AlertCircle
            className="mx-auto mb-4 h-16 w-16 text-white"
            aria-hidden="true"
          />
        </motion.div>
        <motion.p
          className="text-xl font-semibold text-white"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {message}
        </motion.p>
      </div>
    </div>
  );
}
