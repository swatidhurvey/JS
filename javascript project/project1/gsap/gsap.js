gsap.to("img",{
    duration:50,
    delay:1,
    x:1200,
    scale:1.3
})
gsap.to("h1",{
  duration:6,
  scale:1.4
})
// gsap.to("h1",{
//   opacity:1,
//   y:0,
//   duration:0.6,
//   ease:"back.out(1.7)",
//   stagger:0.5
// })
gsap.from("h1",{
    opacity:10,
    duration:30,
    ease:"power2.out",
    stagger:{
        each:0.05,
    from:"start"
    }
})