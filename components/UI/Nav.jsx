import { motion } from 'framer-motion';
import NavLink from '@/components/UI/NavLink';

import { RiLayoutGridFill, RiFilmFill, RiTvFill, RiBookmarkFill } from 'react-icons/ri';
import { navWrapper, navItem } from '@/utils/animations';

// TODO map over a nav array instead of hardcoding the links

const Nav = () => (
  <motion.nav
    initial="hidden"
    animate="visible"
    variants={navWrapper}
    className="flex justify-around items-center lg:flex-col lg:h-full lg:w-full"
  >
    <motion.div variants={navItem}>
      <NavLink className="link" href="/">
        <RiLayoutGridFill className="text-3xl" title="Home" />
      </NavLink>
    </motion.div>

    <motion.div variants={navItem}>
      <NavLink className="link" href="/movies">
        <RiFilmFill className="text-3xl" title="Movies" />
      </NavLink>
    </motion.div>

    <motion.div variants={navItem}>
      <NavLink className="link" href="/tv-shows">
        <RiTvFill className="text-3xl" title="TV Shows" />
      </NavLink>
    </motion.div>

    <motion.div variants={navItem}>
      <NavLink className="link" href="/bookmarks">
        <RiBookmarkFill className="text-3xl" title="Bookmarks" />
      </NavLink>
    </motion.div>
  </motion.nav>
);

export default Nav;
