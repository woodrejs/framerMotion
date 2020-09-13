import React from "react";
import "../../scss/Components/form.scss";
import { motion } from "framer-motion";

const Form = () => {
  const transition = {
    duration: 1,
    staggerChildren: 0.2,
    delayChildren: 0.3,
  };
  const formVariant = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  };
  const itemVariant = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.form
      className="form"
      variants={formVariant}
      initial="initial"
      animate="animate"
      exit="initial"
      transition={transition}
    >
      <motion.div className="form__box form__box--name" variants={itemVariant}>
        <label htmlFor="name" className="form__label">
          Imię i nazwisko
        </label>
        <input className="form__input" id="name" name="name" type="text" />
      </motion.div>

      <motion.div className="form__box form__box--mail" variants={itemVariant}>
        <label htmlFor="mail" className="form__label">
          Email
        </label>
        <input className="form__input" id="mail" name="mail" type="text" />
      </motion.div>

      <motion.div
        className="form__box form__box--message"
        variants={itemVariant}
      >
        <label htmlFor="message" className="form__label">
          Wiadomość
        </label>
        <textarea
          className="form__input form__input--area"
          name="message"
          id="message"
          rows="10"
          cols="10"
        />
      </motion.div>

      <motion.button className="form__btn" variants={itemVariant}>
        Wyślij
      </motion.button>
    </motion.form>
  );
};
export default Form;
