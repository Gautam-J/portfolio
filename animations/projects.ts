let isMobile = true;
if (typeof window !== "undefined") {
  isMobile = window.innerWidth < 768;
}

isMobile = false;
export const bottomToTop = {
  initial: {
    y: isMobile ? 0 : 150,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: isMobile ? 0 : 1,
      delay: isMobile ? 0 : 0.3,
    },
  },
};
