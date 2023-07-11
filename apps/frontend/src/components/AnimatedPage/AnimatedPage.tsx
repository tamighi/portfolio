import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import "./AnimatedPage.css";

type Props = {
  children: React.ReactNode;
};

const AnimatedPage = (props: Props) => {
  const { children } = props;

  const location = useLocation();

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedPage;
