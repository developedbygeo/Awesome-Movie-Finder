import { motion } from 'framer-motion';
import NavLink from '@/components/Header/NavLink';

import { fadeInWithChildren, navItem } from '@/utils/animations';
import { navList } from '@/data/static';

const Nav = ({ className, isMobile = false }) => (
  <motion.nav
    initial="hidden"
    animate="visible"
    variants={fadeInWithChildren}
    className={`flex items-center justify-around lg:mb-auto lg:h-4/5 lg:w-full lg:flex-col lg:justify-evenly ${className}`}
  >
    {navList.map((item) => (
      <motion.div variants={navItem} key={item.id}>
        <NavLink
          className="link flex justify-center text-secondary transition-colors duration-250 ease-in text-3xl hover:text-white"
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
