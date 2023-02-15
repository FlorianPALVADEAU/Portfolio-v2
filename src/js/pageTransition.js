import gsap from 'gsap';

function PageTransition(ref) {
    const TLAnim =  gsap.timeline();
    TLAnim.to(ref, {left: '-0vw', ease: 'power2.out', duration: 0.5});
    TLAnim.to(ref, {left: '-100vw', ease: 'power2.out', duration: 0.5, delay: 0.6});
}

export default PageTransition;