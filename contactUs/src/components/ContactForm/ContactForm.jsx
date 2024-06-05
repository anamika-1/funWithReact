import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './ContactForm.module.css'
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";


const ContactForm = () => {
  //const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsSubmitted(true);
  // };
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleButtonClick = () => {
    setIsSubmitted(true);
  };
  
  return (
    <section className={styles.container}
    >
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>} />
          <Button text="VIA Call" icon={<MdCall fontSize="24px"/>} />
        </div>
        <Button isOutline = {true} 
        text="VIA EMAIL FORM" icon={< IoMailSharp fontSize="24px"/>} />

      <form>
        <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' />
        </div>

        <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="text" name='email' />
        </div>
        
        <div className={styles.form_control}>
          <label htmlFor="text">Text</label>
          <textarea name="text" rows="6"></textarea>
        </div>
        
        <Button text="SUBMIT" />

      </form>

      </div>
      <div className={styles.contact_image}>
        <img src="/public/images/contact.svg" alt="contact image" />
      </div>
    </section>
  )
}

export default ContactForm;