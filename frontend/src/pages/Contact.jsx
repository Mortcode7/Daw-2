import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import waveBackground from "../assets/images/background-blue-c.jpg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_41snsm9",
        "template_cok43ms",
        form.current,
        "JB0TXgBUzBLaUxoWy"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContact>
      <h1>Contact Us</h1>
      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Your Name" />
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Your Email" />
          <label>Message</label>
          <textarea name="message" placeholder="Your Message" />
          <input type="submit" value="Send" />
        </form>
      </StyledContactForm>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: rgb(0, 140, 240);
  }

  background: url(${waveBackground}) no-repeat center top fixed;
  background-size: cover;
  height: 90vh; /* Adjust the height as needed */
`;

const StyledContactForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;

  form {
    width: 600px;
    display: flex;
    flex-direction: column;
    font-size: 20px;

    input,
    textarea {
      width: 100%;
      padding: 7px;
      outline: none;
      border-radius: 10px;
      border: 3px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
      
    textarea {
      max-height: 100px;
      min-height: 100px;
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(0, 140, 240);
      color: white;
      border: none;
    }
  }
`;

export default Contact;
