import '../../style/Main.scoped.scss'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import barba from '@barba/core';
import React from 'react';
import contentAnimation from '../../js/contentAnimation';
import PageTransition from '../../js/pageTransition';
import delay from '../../js/delay';
import emailjs from '@emailjs/browser';
import { useEffect } from "react";

function Contact() {
  const ref = React.useRef(null);
  const svg = React.useRef(null);
  const form = React.useRef(null);
  const input1 = React.useRef(null);
  const input2 = React.useRef(null);
  const input3 = React.useRef(null);

  useEffect(()=>{
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
  },[])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_strkf42', 'template_ka44otn', form.current, 'LAg0wiCOFY0B9vnzr')
      .then((result) => {
        console.log(result, "Successfully sent !");
        form.current.style = 'display: flex; justify-content: center; align-items: center; background-color: #76C776; color: #fff; font-size: 20px;'
        form.current.innerHTML = ' <p>😊</p><h3 style="margin-top: 2%">Mail Sent Successfully!</h3><p style="font-size: 14px; font-style: italic; margin-top: 2%">Thank you</p>'
      }, (error) => {
        console.log(error.text);
        form.current.style = 'display: flex; justify-content: center; align-items: center; background-color: #C93A3B; color: #fff; font-size: 20px;'
        form.current.innerHTML = ' <p>😕</p><h3 style="margin-top: 2%">Uh oh... Something went wrong.</h3><p style="font-size: 14px; font-style: italic; margin-top: 2%">Try again later !</p>'
      });

  };
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
          <input ref={input1} type="text" name="user_name" placeholder='Frédéric Mousseau'/>
          <label>Email</label>
          <input ref={input2} type="email" name="user_email" placeholder='frederic.mousseau@gmail.com'/>
          <label>Message</label>
          <textarea ref={input3} name="user_message" placeholder='Your message here...'/>
          <input type="hidden" name="from_name" value='Florian'/>
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
