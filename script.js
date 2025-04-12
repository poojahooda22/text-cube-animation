const animation = gsap.fromTo(".textCube h1", 
    {x: 400, xPercent: 0},
    {x: 0, xPercent: -100, duration: 4, ease: 'none', stagger: 0.75, repeat: -1}
)