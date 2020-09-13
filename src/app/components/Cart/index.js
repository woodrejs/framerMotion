import React from "react";
import "../../scss/Components/cart.scss";
import { motion } from "framer-motion";

const Cart = ({ path, txt, title }) => {
  const articleVariants = {
    animate: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    initial: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const cartVariants = {
    animate: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 10 },
  };

  return (
    <motion.article
      className="cart"
      variants={articleVariants}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <motion.img
        className="cart__img"
        src={path}
        alt="cart_icon"
        variants={cartVariants}
      />
      <motion.h4 className="cart__title" variants={cartVariants}>
        {title}
      </motion.h4>
      <motion.p className="cart__txt" variants={cartVariants}>
        {txt}
      </motion.p>
    </motion.article>
  );
};
export default Cart;
