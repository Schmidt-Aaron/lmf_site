import React from "react";
import Layout from "../components/layouts/layout";
import ContactForm from "../components/ContactForm";
// import ContactForm from "../components/ContactForm";

export default () => (
  <Layout>
    <h1>Contact LMF</h1>
    <p>
      Have a question? Want to help? All you have to do is fill out the contact
      form below to send us a message. We will get back to you as soon as
      possible! Make sure that you leave valid contact details with your message
      if you would like for us to e-mail you back or call you.
    </p>
    <p>
      For more information or to contact us, you can also visit our Facebook
      page. While you are there, be sure to like it as well!
    </p>
    {/* <ContactForm /> */}
    <ContactForm />
    <p>
      You can also email us at lightmyfireofps@gmail.com if you have any
      questions or concerns.
    </p>
  </Layout>
);
