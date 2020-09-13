import React from "react";
import Form from "../../components/Form";
import "../../scss/Pages/contact.scss";
import GlitchClip from "react-glitch-effect/core/Clip";
import { motion } from "framer-motion";

const Contact = () => {
  const mainNeonVariants = {
    initial: {
      left: "50%",
      x: "-50%",
      top: "60%",
      y: "-60%",

      transition: { duration: 1.5 },
    },
    animate: {
      top: "50%",
      y: "-50%",

      transition: { duration: 1.5 },
    },
  };
  const imgVariants = {
    initial: {
      opacity: 1,
      scale: 1,
      height: "20vh",

      transition: { duration: 1 },
    },
    animate: { opacity: 0.3, scale: 5, transition: { duration: 1 } },
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
      },
    },
  };

  return (
    <motion.section className="contact">
      <motion.div
        className="contact__imgBox"
        variants={mainNeonVariants}
        initial="initial"
        animate="animate"
        exit="initial"
      >
        <motion.img
          className="contact__img"
          src={require("../../../assets/images/neon.jpg")}
          alt="contact_img"
          variants={imgVariants}
        />
      </motion.div>

      <div className="contact__contentBox">
        <motion.article
          className="contact__txtBox"
          variants={txtVariants}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <h2 className="contact__txtBox__title">Kontakt</h2>
          <p className="contact__txtBox__txt">
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem .
          </p>
        </motion.article>
        <Form />
      </div>

      <motion.footer
        className="contact__footerBox"
        variants={txtVariants}
        initial="initial"
        animate="animate"
        exit="initial"
      >
        <span className="contact__footerBox__item">Maciej Szczepański</span>
        <span className="contact__footerBox__item">Tel: +48 531 892 218</span>
        <span className="contact__footerBox__item">
          Mail: woodrejs@gmail.com
        </span>
      </motion.footer>
    </motion.section>
  );
};

export default Contact;
