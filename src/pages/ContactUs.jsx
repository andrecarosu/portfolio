import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import style from "./contactUs.module.css";

const ContactUs = () => {
  const form = useRef();
  const SERVICE_ID = process.env.REACT_APP_DEPLOYPORTFOLIO_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_DEPLOYPORTFOLIO_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_DEPLOYPORTFOLIO_PUBLIC_KEY;
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.current.user_name.value) {
      newErrors.name = 'Please enter your name';
    }

    if (!form.current.user_email.value) {
      newErrors.email = 'Please enter your email';
    }

    if (!form.current.message.value) {
      newErrors.message = 'Please enter a message';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validate()) {
      emailjs.sendForm(
        `${SERVICE_ID}`,
        `${TEMPLATE_ID}`,
        form.current,
        `${PUBLIC_KEY}`
      )
        .then((result) => {
          console.log(result.text);
          alert('Correo enviado satisfactoriamente');
          setIsSent(true);
          resetForm();
        })
        .catch((error) => {
          console.log(error.text);
          alert(error.text);
        });
    }
  };

  const resetForm = () => {
    form.current.reset();
    setErrors({});
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={style.containerForm}>
      <div className={style.divForm}>
        <label className={style.labelForm}>Nombre</label> <br></br> 
        <input type="text" name="user_name" required className={style.inputForm} />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div className={style.divForm}>
        <label className={style.labelForm}>Correo Electrónico</label> <br></br> 
        <input type="email" name="user_email" required className={style.inputForm} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div className={style.divForm}>
        <label className={style.labelForm}>Mensaje</label> <br></br> 
        <textarea className={style.textareaForm} name="message" required />
        {errors.message && <span>{errors.message}</span>}
      </div>
      <button type="submit">Enviar</button>
      {isSent}
    </form>
  );
};

export default ContactUs;


