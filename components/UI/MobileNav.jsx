import { motion } from 'framer-motion';
import NavLink from '@/components/UI/NavLink';

import { navWrapperMobile, navItem } from '@/utils/animations';
import nav from '@/data/nav';

const MobileNav = () => (
  <motion.nav
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={navWrapperMobile}
    className="flex py-20 justify-around items-center lg:flex-col lg:justify-evenly lg:h-full lg:w-full absolute top-[10vh] w-screen h-[90vh] left-0 flex-col from-black-700 to-black-500 bg-gradient-to-br lg:hidden"
  >
    {nav.map((item) => (
      <motion.div variants={navItem} key={item.id}>
        <NavLink
          className="link text-2xl flex justify-center items-center text-secondary hover:text-black-200 transition-colors duration-250 ease-in"
          href={item.path}
          title={item.name}
        >
          <div className="group-active-link:text-white">{item.icon}</div>
          <span className="group-active-link:text-white ml-2">{item.name}</span>
        </NavLink>
      </motion.div>
    ))}
  </motion.nav>
);

export default MobileNav;
