import { motion } from 'framer-motion';

import NavLink from '@/components/Header/NavLink';
import { navWrapperMobile, navItem } from '@/utils/animations';
import nav from '@/data/static';

const MobileNav = ({ className }) => (
  <motion.nav
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={navWrapperMobile}
    className={`absolute top-[10vh] left-0 z-30 flex h-[90vh] w-screen flex-col items-center justify-around bg-gradient-to-br from-gray-100 to-black-200 py-20 transition-colors duration-500 dark:from-black-700 dark:to-black-500 md:justify-center md:gap-24 lg:hidden lg:h-full lg:w-full lg:flex-col lg:justify-evenly ${className}`}
  >
    {nav.map((item) => (
      <motion.div variants={navItem} key={item.id}>
        <NavLink
          className="link flex items-center justify-center text-black-300 transition-colors duration-250 ease-in text-2xl dark:text-secondary"
          href={item.path}
          title={item.name}
        >
          <div className="group-active-link:text-red-600 dark:group-active-link:text-red-500">
            {item.icon}
          </div>
          <span className="ml-2 group-active-link:text-black-900 dark:group-active-link:text-white">
            {item.name}
          </span>
        </NavLink>
      </motion.div>
    ))}
  </motion.nav>
);

export default MobileNav;
