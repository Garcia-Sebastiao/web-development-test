const fadeAnimation = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: { duration: 0.5 },
};

const modalAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: { duration: 0.5 },
};

const bannerTextAnimation = {
  initial: {
    scale: 0.5,
  },
  animate: {
    scale: 1,
  },
  transition: {
    type: "spring",
    damping: 4,
    mass: 0.5,
    Infinity,
    stiffness: 30,
  },
};

const carAnimation = {
  initial: {
    x: 400,
    opacity: 0,
    scale: 0.2,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1.1,
  },
  transition: { type: "spring", damping: 10, mass: 1, stiffness: 30 },
  exit: { scale: 0.8 },
};

const slideLeft = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.5,
  },
};

const slideRight = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.5,
  },
};

const scaleAnimation = {
  initial: {
    scale: 0.5,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  transition: {
    duration: 0.5,
  },
  exit: {
    scale: 0.5,
    opacity: 0.5,
  },
};
export {
  fadeAnimation,
  carAnimation,
  slideRight,
  bannerTextAnimation,
  slideLeft,
  modalAnimation,
  scaleAnimation,
};
