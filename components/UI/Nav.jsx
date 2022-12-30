import { motion } from 'framer-motion';
import NavLink from '@/components/UI/NavLink';

import { navWrapper, navItem } from '@/utils/animations';
import nav from '@/data/nav';

const Nav = ({ className, isMobile = false }) => (
  <motion.nav
    initial="hidden"
    animate="visible"
    variants={navWrapper}
    className={`flex justify-around items-center lg:flex-col lg:justify-evenly lg:h-full lg:w-full ${className}`}
  >
    {nav.map((item) => (
      <motion.div variants={navItem} key={item.id}>
        <NavLink
          className="link text-4xl flex justify-center text-secondary hover:text-black-200 transition-colors duration-250 ease-in"
          href={item.path}
          title={item.name}
        >
          {item.icon}
          {isMobile && <span className="ml-2">{item.name}</span>}
        </NavLink>
      </motion.div>
    ))}
  </motion.nav>
);

export default Nav;
