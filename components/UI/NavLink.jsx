import Link from 'next/link';
import React, { Children, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const NavLink = ({ children, className, activeClassName, ...props }) => {
  const { asPath, isReady } = useRouter();
  const [computedClassName, setComputedClassName] = useState(className);

  useEffect(() => {
    if (isReady) {
      const linkPath = new URL(props.as || props.href, location.href).pathname;

      const activePathName = new URL(asPath, location.href).pathname;

      const newClass = linkPath === activePathName ? `${className} ${activeClassName || 'active'}`.trim() : className;

      if (newClass !== computedClassName) {
        setComputedClassName(newClass);
      }
    }
  }, [asPath, isReady, props.as, props.href, activeClassName, className, computedClassName]);

  return (
    <Link className={computedClassName} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
