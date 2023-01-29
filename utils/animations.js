export const fadeInWithChildren = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
};

export const pageFadeIn = {
  ...fadeInWithChildren,
  visible: {
    ...fadeInWithChildren.visible,
    transition: {
      ...fadeInWithChildren.visible.transition,
      staggerChildren: 0.45,
    },
  },
};

export const navWrapperMobile = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      when: 'afterChildren',
      staggerChildren: 0.15,
    },
  },
};

export const navItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.25,
    },
  },
};

export const itemFadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
};

export const simpleFadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
      delay: 2.25,
    },
  },
};

export const scaleVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: 'linear',
      duration: 0.5,
    },
  },
};

export const burgerVariants = {
  container: {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 2,
    },
  },
  top: {
    closed: {
      rotate: 0,
      y: 0,
    },
    open: {
      rotate: 45,
      x: '0.25rem',
      y: 10,
    },
  },
  middle: {
    closed: {
      opacity: 1,
    },
    open: {
      opacity: 0,
    },
  },
  bottom: {
    mobile: {
      closed: {
        rotate: 0,
        y: 0,
      },
      open: {
        rotate: -45,
        y: '-0.4rem',
        x: '0.25rem',
      },
    },
    tablet: {
      closed: {
        rotate: 0,
        y: 0,
      },
      open: {
        rotate: -45,
        y: '-0.8rem',
        x: '0.25rem',
      },
    },
  },
};
