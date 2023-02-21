import gsap from 'gsap';
// enter
function contentAnimation(ref, refSVG) {
    animeText(refSVG)
    const TLAnim =  gsap.timeline();
    TLAnim.to(ref, {top: '0vh', ease: 'power2.out', duration: 0.5});
    TLAnim.to(ref, {top: '100vh', ease: 'power2.out', duration: 0.5, delay: 0.6});
}

function animeText(ref){
  const TLAnim =  gsap.timeline();
  TLAnim.set(ref, {display: 'none', bottom: '-20%'});
  TLAnim.to(ref, {display: 'block', bottom: '0%', ease: 'power2.out', duration: 0.5, delay: 0.3});
}
export default contentAnimation;