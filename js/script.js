console.log("ok");

const burger = document.getElementById("burger");
const large = document.querySelector(".large");
const overlay = document.querySelector(".overlay");



// click on burger
burger.addEventListener("click", ()=>{
    if(large.classList.contains("nav_active")){
        large.classList.remove("nav_active");
        large.classList.add("hide");
        overlay.classList.add("hide");
    }else{
        large.classList.add("nav_active");
        overlay.classList.remove("hide");
        large.classList.remove("hide");
    }
    
    console.log("clicked");
});

overlay.addEventListener("click", ()=>{
    large.classList.remove("nav_active");
    overlay.classList.add("hide");
    console.log("clicked");
});


// intersection observer


const callback_fun = (entry, observer) =>{
    entry.forEach( (entry) => {
        if(entry.isIntersecting){
            
            gsap.from(".testimonial_container > *", {
                y:50,
                stagger:0.2,
                opacity:1
            })
            gsap.from(".simplicity_animation > *", {
                y:50,
                stagger:0.2,
                opacity:1
            })
            // gsap.from(".simplicity_img ", {
            //     y:50,
                
            //     opacity:1
            // })
        }
        
    });
}
const options = {
    root:null,
    rootMargin: "50px",
    threshold: 0.4
}


const callback_fun2 = (entry, observer) =>{
    entry.forEach( (entry) => {
        if(entry.isIntersecting){
            
            gsap.from(".left_img",{
                x:-50,
                
            })
            gsap.to(".left_img",{
                x: 0,
                duration:1,
                opacity:1
            })
           
        }
        
    });
}
const callback_fun3 = (entry, observer) =>{
    entry.forEach( (entry) => {
        if(entry.isIntersecting){
            
            gsap.from(".right_content",{
                x:50,
               
            })
            gsap.to(".right_content",{
                x:0,
                duration:1,
                opacity:1
            })
        }
        
    });
}



const myObserver = new IntersectionObserver(callback_fun, options)


// Simplicity meets innovation design
const simplicity_animation = document.querySelectorAll(".simplicity_animation");
simplicity_animation.forEach( element =>{
    myObserver.observe(element)
});
// const simplicity_img = document.querySelectorAll(".simplicity_img");
// simplicity_img.forEach( element =>{
//     myObserver.observe(element)
// });

const testimonial_container = document.querySelectorAll(".testimonial_container");
testimonial_container.forEach( element =>{
    myObserver.observe(element)
});

const myObserver2 = new IntersectionObserver(callback_fun2, options)
const left_img = document.querySelectorAll(".left_img");
left_img.forEach( element =>{
    myObserver2.observe(element)
});

const myObserver3 = new IntersectionObserver(callback_fun3, options)
const right_content = document.querySelectorAll(".right_content");
right_content.forEach( element =>{
    myObserver3.observe(element)
});

const nav = document.querySelector(".nav")
const height = () =>{
    console.log( document.documentElement.scrollTop);
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        nav.classList.add("add_nav");
        nav.classList.remove("add_pad")
        
    }else{
        nav.classList.remove("add_nav");
        nav.classList.add("add_pad")
    }
}
window.onscroll = function(){
    height()
}

