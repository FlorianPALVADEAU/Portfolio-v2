import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

var skewSetter = gsap.quickSetter('.skew', 'skewY', 'deg');
var proxy = {skew:0}

ScrollTrigger.create({
    onUpdate: self => {
        var skew = self.getVelocity() / 300
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
            console.log(proxy);
            proxy.skew = skew
            gsap.to(proxy, {skew: 0, duration: 1, ease: 'power3', overwrite: true, onUpdate: ()=>skewSetter(proxy.skew)})
        }
    }
})
gsap.set('.skew', {transformOrigin: 'center center', force3D: true})