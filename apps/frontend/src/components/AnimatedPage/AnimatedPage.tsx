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
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="AnimatedPage"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedPage;
