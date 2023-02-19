import '../../style/Main.scoped.scss'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import barba from '@barba/core';
import React from 'react';
import contentAnimation from '../../js/contentAnimation';
import PageTransition from '../../js/pageTransition';
import delay from '../../js/delay';
import Projects from '../../components/Projects';


function Project_page() {
  const ref = React.useRef(null);
  const svg = React.useRef(null);

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
      <p ref={svg}>Projects.</p>
    </div>
    <div className="Projects" data-barba="container" data-barba-namespace="wipe">
      <Header />
      <Projects />
      <Footer />
    </div>
    </>
  );
}

export default Project_page;
