
//Animations for the fade ins 
const tl = gsap.timeline({ defaults: { ease: "power1.out"} });

tl.fromTo('.grid-wrapper', {opacity: 0}, {opacity: 1, duration: 1.5});
tl.fromTo('.about-grid-wrapper', {opacity: 0}, {opacity: 1, duration: 1.5});
/*tl.fromTo('.right-side', {opacity: 0}, {opacity: 2, duration: 1.5}, "-=1.5");
tl.fromTo('#projects-main', {opacity: 0}, {opacity: 1, duration: 1.5}, "-=1.5");*/