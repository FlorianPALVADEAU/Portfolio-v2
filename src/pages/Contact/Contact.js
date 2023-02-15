import '../../style/Main.scoped.scss'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import barba from '@barba/core';
import React from 'react';
import contentAnimation from '../../js/contentAnimation';
import PageTransition from '../../js/pageTransition';
import delay from '../../js/delay';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


function Contact() {
  const ref = React.useRef(null);
  const svg = React.useRef(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_strkf42', 'template_ka44otn', form.current, 'LAg0wiCOFY0B9vnzr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  barba.init({
    sync: true,
    transitions: [
      {
        async leave() {
          const done = this.async();
          PageTransition()
          await delay(1000);
          done();
        },
        async enter() {
          contentAnimation(ref.current, svg.current)
        },
        async once() {
          contentAnimation(ref.current, svg.current)
        }
      }
    ]
  })
  return (
    <>
    <div className="wipe-transition" ref={ref}>
      <p ref={svg}>Contact.</p>
    </div>
    <div className="Contact" data-barba="container" data-barba-namespace="wipe">
      <Header />
      <div className="contact_content">
      <h2 className='h2Contact'>Contact Me.</h2>
        <form id="formContact" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" placeholder='Frédéric Mousseau'/>
          <label>Email</label>
          <input type="email" name="user_email" placeholder='frederic.mousseau@gmail.com'/>
          <label>Message</label>
          <textarea name="user_message" placeholder='Your message here...'/>
          <input type="submit" value="Send" />
        </form>
        <div id="moreInfoContact" className="adress">
            <h2>GET IN TOUCH.</h2>
            <p>ADDRESS</p>
            <p>Florian Palvadeau</p>
            <p>105 rue de la brèche-du-houx - 78760</p>
            <p>France, EU</p>
            <p>06-52-26-60-54</p>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default Contact;
