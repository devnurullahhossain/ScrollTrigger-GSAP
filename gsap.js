gsap.to("#thirdSection h1", {
  transform: "translate(-150%)",
  scrollTrigger: {
    trigger: "#thirdSection",
    scroller: "body",
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
