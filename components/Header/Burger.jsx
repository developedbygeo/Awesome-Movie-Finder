import { motion } from 'framer-motion';

import useMedia from '@/hooks/useMedia';
import { burgerVariants } from '@/utils/animations';

const Burger = ({ className, isOpen, onToggle }) => {
  const isTablet = useMedia('(min-width: 768px)');
  const variant = isOpen ? 'open' : 'closed';

  return (
    <motion.label
      htmlFor="toggle"
      className={`flex w-8 cursor-pointer flex-col space-y-1 md:space-y-2 ${className}`}
      transition={{ ease: 'easeInOut', duration: 0.35 }}
      variants={burgerVariants.container}
    >
      <input
        onClick={onToggle}
        type="checkbox"
        id="toggle"
        className="group hidden"
      />
      <motion.span
        className={`pointer-events-none block h-1 w-8 rounded-lg bg-black-200 md:w-12 ${
          isOpen ? '!md:w-12 !w-8' : ''
        }`}
        initial="closed"
        animate={burgerVariants.top[variant]}
        transition={{ ease: 'easeInOut', duration: 0.35 }}
        variants={burgerVariants.top}
      />
      <motion.span
        className="pointer-events-none block h-1 w-6 rounded-lg bg-black-200 md:w-8"
        initial="closed"
        animate={burgerVariants.middle[variant]}
        transition={{ ease: 'easeInOut', duration: 0.35 }}
        variants={burgerVariants.middle}
      />
      <motion.span
        className={`pointer-events-none block h-1 w-4 rounded-lg bg-black-200 md:w-6 ${
          isOpen ? '!md:w-12 !w-8' : ''
        }`}
        initial="closed"
        animate={
          isTablet
            ? burgerVariants.bottom.tablet[variant]
            : burgerVariants.bottom.mobile[variant]
        }
        transition={{ ease: 'easeInOut', duration: 0.35 }}
        variants={burgerVariants.bottom}
      />
    </motion.label>
  );
};

export default Burger;
