import { motion } from 'framer-motion';

import { burgerVariants } from '@/utils/animations';

const Burger = ({ className, isOpen, onToggle }) => {
  const variant = isOpen ? 'open' : 'closed';

  return (
    <motion.label
      htmlFor="toggle"
      className={`flex flex-col gap-2 justify-center h-5/6 w-12 cursor-pointer ${className}`}
      transition={{ ease: 'easeInOut', duration: 0.35 }}
      variants={burgerVariants.container}
    >
      <input onClick={onToggle} type="checkbox" id="toggle" className="hidden group" />
      <motion.span
        className={`bg-black-200 rounded-lg pointer-events-none h-1 ${isOpen ? 'w-3/4' : 'w-full'}`}
        initial="closed"
        animate={burgerVariants.top[variant]}
        transition={{ ease: 'easeInOut', duration: 0.35 }}
        variants={burgerVariants.top}
      />
      <motion.span
        className="bg-black-200 pointer-events-none transition-all rounded-lg h-1 w-full"
        initial="closed"
        animate={burgerVariants.middle[variant]}
        transition={{ ease: 'easeInOut', duration: 0.35 }}
        variants={burgerVariants.middle}
      />
      <motion.span
        className="bg-black-200 pointer-events-none rounded-lg h-1 duration-200 w-3/4"
        initial="closed"
        animate={burgerVariants.bottom[variant]}
        transition={{ ease: 'easeInOut', duration: 0.35 }}
        variants={burgerVariants.bottom}
      />
    </motion.label>
  );
};

export default Burger;
