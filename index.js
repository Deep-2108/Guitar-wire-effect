let path=`M 20 100 Q 600 100 1400 100`;
let finalpath=`M 20 100 Q 600 100 1400 100`;
let guitar=document.querySelector(".guitar");
guitar.addEventListener("mousemove",function(dets){
  path=`M 20 100 Q ${dets.x} ${dets.y} 1400 100`;

  gsap.to("svg path",{
    attr:{d:path},
    duration:0.3,
    ease:"power3.out",
  })
})
guitar.addEventListener("mouseleave",function(){
  gsap.to("svg path",{
    attr:{d:finalpath},
    duration:1.5,
    ease:"elastic.out(1,0.2)",
  })
})
