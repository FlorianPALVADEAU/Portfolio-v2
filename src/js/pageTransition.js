import gsap from 'gsap';
// leave
function PageTransition(ref) {
    const TLAnim =  gsap.timeline();
    TLAnim.to(ref, {top: '-100vh', ease: 'power2.out', duration: 0.5});
    TLAnim.to(ref, {top: '0vh', ease: 'power2.out', duration: 0.5, delay: 0.6});
}

export default PageTransition;