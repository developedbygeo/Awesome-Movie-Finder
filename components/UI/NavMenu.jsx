import { AnimatePresence } from 'framer-motion';

import MobileNav from '@/components/UI/MobileNav';

const NavMenu = ({ isOpen }) => (
  <AnimatePresence>{isOpen && <MobileNav key="mobileNav" exit={{ opacity: 0 }} />};</AnimatePresence>
);

export default NavMenu;
