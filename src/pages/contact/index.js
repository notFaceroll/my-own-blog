import React, { Fragment } from 'react';
import ContactForm from '../../components/contact/contact-form';
import Head from 'next/head';

export default function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="send me your messages!" />
      </Head>
      <ContactForm />;
    </Fragment>
  );
}
