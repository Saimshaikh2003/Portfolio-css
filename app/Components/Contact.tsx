import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "../styles/contact.css"

const Contact = () => {
  return (
    <div id="contact" className="contact-container ">
        <div className="contact-grid md:grid-cols-2 ">
            <div className="contact-space">
                <h2 className="contact-heading" data-aos="fade-down">
                  Get in touch
                  </h2>
                <p className="contact-text">
                    Drop me a line, give me a call , or send me a message by a submitting the form.
                </p>
                <div className="contact-flex" data-aos="fade-down">
                <HiOutlineMail size={30}/> saimshaikh0003@gmail.com
                </div>
                <div className="contact-flex" data-aos="fade-down">
                <BsTelephoneOutboundFill  size={30}/> <a href="https://wa.me/+923173894947/">(+92-3173894947)</a>
                </div>
                <div className="contact-flex" data-aos="fade-down">
                <FaLinkedin size={30}/> <a href="https://www.linkedin.com/in/saim-shaikh-a7459a290/">Linkedin.com/in/saim-shaikh</a>
                </div>

                <div className="contact-flex" data-aos="fade-down">
                <FaSquareXTwitter  size={30}/> <a href="https://x.com/Saimshaikh111">X.com/Saim-shaikh111</a>
                </div>

               </div>
               <div className="contact-space">
                <div className="form" data-aos="fade-down">
                  <label htmlFor="name">Name</label>
                  <input type="text"
                  className="input-field" id='name' />
                </div>
                <div className="form" data-aos="fade-down">
                  <label htmlFor="email">Email</label>
                  <input type="text"
                  className="input-field" id="email" />
                </div>

                <div className="form" data-aos="fade-down">
                  <label htmlFor="msg">Message</label>
                  <textarea
                  className="textarea-field" id="msg" rows={8}> </textarea>
                </div>
                <button className="button">
                  Send

                </button>

               </div>
        </div>
      
    </div>
  )
};

export default Contact;
