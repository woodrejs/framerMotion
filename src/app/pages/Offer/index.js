import React from "react";
import Cart from "../../components/Cart";
import "../../scss/Pages/offer.scss";
import { motion } from "framer-motion";

const Offer = () => {
  const mainNeonVariants = {
    initial: {
      left: "50%",
      x: "-50%",
      top: "60%",
      y: "-60%",
      transition: { duration: 1 },
    },
    animate: {
      top: "155%",
      y: "-155%",
      transition: { duration: 1 },
    },
  };
  const imgVariants = {
    initial: {
      scale: 1,
      height: "20vh",
      width: "unset",
      transition: { duration: 1 },
    },
    animate: { scale: 8, transition: { duration: 1 } },
  };
  const txtVariants = {
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
    initial: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.4,
        delay: 0.7,
      },
    },
  };

  return (
    <motion.section className="offer">
      <motion.div
        className="offer__imgBox"
        variants={mainNeonVariants}
        initial="initial"
        animate="animate"
        exit="initial"
      >
        <motion.img
          className="offer__img"
          src={require("../../../assets/images/neon.jpg")}
          alt="about_img"
          variants={imgVariants}
        />
      </motion.div>

      <div className="offer__cartsBox">
        <Cart
          className="offer__cartsBox__cart"
          title="nowoczesnie"
          txt="recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.recently"
          path={require("../../../assets/icons/share.svg")}
        />
        <Cart
          className="offer__cartsBox__cart"
          title="nowoczesnie"
          txt="recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.recently"
          path={require("../../../assets/icons/share.svg")}
        />
        <Cart
          className="offer__cartsBox__cart"
          title="nowoczesnie"
          txt="recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.recently"
          path={require("../../../assets/icons/share.svg")}
        />
      </div>

      <motion.article
        className="offer__txtBox"
        variants={txtVariants}
        initial="initial"
        animate="animate"
        exit="initial"
      >
        <h2 className="offer__txtBox__title">Oferta</h2>
        <p className="offer__txtBox__txt">
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem
          Ipsum.recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </motion.article>
    </motion.section>
  );
};

export default Offer;
