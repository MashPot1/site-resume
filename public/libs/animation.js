gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// if (ScrollTrigger.isTouch !== 1) {
let smoother = ScrollSmoother.create({
  wrapper: ".App",
  content: ".content",
  smooth: 2,
  effects: true,
});

let containers = gsap.utils.toArray(".content .container");

containers.forEach((item, index) => {
  if (index % 2) {
    gsap.fromTo(
      item,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-800",
          end: "-300",
          scrub: true,
        },
      }
    );
  } else
    gsap.fromTo(
      item,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-800",
          end: "-300",
          scrub: true,
        },
      }
    );
});

document.getElementById("aboutNavId").addEventListener("click", (e) => {
  smoother.scrollTo(".aboutme", true);
});

document.getElementById("projectsNavId").addEventListener("click", (e) => {
  smoother.scrollTo(".projects", true);
});

document.getElementById("contactsNavId").addEventListener("click", (e) => {
  smoother.scrollTo(".contacts", true);
});
