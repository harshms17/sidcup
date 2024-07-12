var crsr=document.querySelector("#cursor")
var crsr2=document.querySelector("#cursor2")
document.addEventListener("mousemove",function(cdts){
    crsr.style.left=cdts.x-10+"px"
    crsr.style.top=cdts.y-10+"px"
    crsr2.style.left=cdts.x-200+"px"
    crsr2.style.top=cdts.y-200+"px"
})
var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3;
        crsr.style.border="1px solid #fff";
        crsr.style.backgroundColor="transparent";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border="1px solid #95C11E";
        crsr.style.backgroundColor="#95C11E";
    })
})
var drdw=document.querySelector("#drr")
drdw.addEventListener("mouseenter",function(zzzzzzzzzzz){
    drdw.style.backgroundColor="#95C11E";
    drdw.style.scale=0.5;
})
drdw.addEventListener("mouseleave",function(){
    drdw.style.backgroundColor="transparent";
    drdw.style.scale=1;
})
gsap.to("#nav",{
    height:110,
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        start:"bottom 90%",
        end:"bottom 89%",
        // start:"top -10%",
        // end:"top -11%",
        // markers:true,
        scrub:1,
    }
})
gsap.to("#page1,#page2",{
    backgroundColor:"black",
    opacity:100,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 64%",
        end:"top 38%",
        // markers:true,
        scrub:2
    }
})
gsap.from("#par2",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#par2",
        scroll:"body",
        start:"top 83%",
        end:"top 77%",
        // markers:true,
        scrub:1
    }
})
gsap.from(".cards",{
    scale:0.8,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        start:"bottom 110%",
        end:"bottom 100%",
        // markers:true,
        scrub:true
    }
})
gsap.to("#btxt",{
    top:"-100px",
    scrollTrigger:{
        trigger:"#btxt",
        scroller:"body",
        end:"top 70%",
        // markers:true,
        scrub:3
    }
})
gsap.to("#qote1",{
    x:"80px",
    y:"80px",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page3",
        scrub:3
    }
})
gsap.to("#qote2",{
    x:"-90px",
    y:"-90px",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page3",
        scrub:3
    }
})