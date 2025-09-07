import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const AnimatedPage = (props: Props) => {
  const { children } = props;

  const location = useLocation();

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        if (window) {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedPage;
