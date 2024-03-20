import React from "react";
import styles from "./contact.module.css"

import ContactForm from "@/components/contactForm/page";
import HeroSegment from "@/components/HeroSegment/page";


export const metadata = {
  title: {
    absolute: "",
    default: "Contact us",
    template: "",
  },
  description: "(555) 555-5555",
};



const Contact = () => {


  
  return (
    <div className="layout">
      <div className="firstRow-all-columns">
        <div className={styles.container}>
          <div className="banner_image">
          <HeroSegment src={"./kontakt.jpg"} >
            <div className="banner_text">
             <h1>Contact</h1>
            </div>
            </HeroSegment>
          </div>
         
        </div>
      </div>
      <div className="middle">
        <div className={styles.container_form}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
