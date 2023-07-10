const parallax_el = document.querySelectorAll(".parallax");

let xvalue = 0, yvalue = 0;

// let rotatedegree = 0;

function update(cursorposition){
    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx; 
        let speedy = el.dataset.speedy; 
    
        
        let isinleft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zvalue = (cursorposition - parseFloat(getComputedStyle(el).left)) * isinleft * 0.1;
    
        el.style.transform = `translateX(calc(-50% + ${-xvalue * speedx}px)) translateY(calc(-50% + ${yvalue * speedy}px)) perspective(2300px) translateZ(${zvalue}px)`;
       });

}

update(0);



window.addEventListener("mousemove", (e) => {
    xvalue = e.clientX - window.innerWidth / 2;
    yvalue = e.clientY - window.innerHeight / 2;

    update(e.clientX);

});

// GSAP ANIMATION

let timeline = gsap.timeline();

parallax_el.forEach(el =>{

   timeline.from(
    el,
    {
        top : `${el.offsetHight / 2 + el.dataset.distance}px`,
        duration : 1,
    },
    "1"
   );

})

