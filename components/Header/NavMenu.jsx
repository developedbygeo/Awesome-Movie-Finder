import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import useWindow from '@/hooks/useWindow';
import MobileNav from '@/components/Header/MobileNav';

const NavMenu = ({ isOpen, className, children }) => {
  const [width] = useWindow();

  useEffect(() => {
    if (isOpen && width < 1024) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, width]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <MobileNav
            className={className}
            key="mobileNav"
            exit={{ opacity: 0 }}
          />
          {children}
        </>
      )}
    </AnimatePresence>
  );
};

export default NavMenu;
