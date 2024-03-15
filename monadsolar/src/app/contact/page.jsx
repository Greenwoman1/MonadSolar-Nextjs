import React from "react";
import styles from "./contact.module.css"
import Header from "@/components/header/page";
import ContactForm from "@/components/contactForm/page";


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
          <Header src={"./kontakt.jpg"} title={"Contact Us"} />
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
