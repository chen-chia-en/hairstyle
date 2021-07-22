var myAnimation = new hoverEffect({
    parent: document.querySelector('.distoration'),
    intensity: 0.3,
    image1: 'images/01-removebg-preview.png',
    image2: 'images/02-removebg-preview.png',
    displacementImage: 'images/diss.png'
});

TweenMax.from(".title h1 .hidetext", 1.5, {
    delay: 1,
    y: "100%",
    ease: Expo.easeInOut
  });
TweenMax.from('.title h2', 1.5, {
    delay: 1.5,
    x: "-115%",
    ease: Expo.easeInOut
});
TweenMax.from('.title h3 .hidetext', 1.5, {
    delay: 1.2,
    y: "100%",
    ease: Expo.easeInOut
});
/**/ 
TweenMax.from('.title p .hidetext', 1.5, {
    delay: 1.2,
    y: "100%",
    ease: Expo.easeInOut
});
TweenMax.from('.sponsorlogo img', 1.5, {
    delay:1.5,
    y: "180%",
    ease: Expo.easeInOut
});
//y: "100%",是什麼意思

TweenMax.from('.distoration', 1.5, {
    delay: 2,
    opacity: 0,
    y: "20",
    ease: Expo.easeInOut
});
TweenMax.from('nav', 1.5, {
    delay: 1.3,
    y: "-100%",
    ease: Expo.easeInOut
});

TweenMax.from('.social', 1.5, {
    delay: 1.3,
    opacity: 0,
    x:"-100%",
    ease: Expo.easeInOut
});
/*scene*/

TweenMax.to('#first', 1.5, {
    y:"-100%",
    delay:0.5,
    ease: Expo.easeInOut
}); 
TweenMax.to(' #second', 1.5, {
    y:"-100%",
    delay:0.7,
    ease: Expo.easeInOut
}); 
TweenMax.to('#third', 1.5, {
    y:"-100%", /*y 也可以改成top*/
    delay:0.9,
    ease: Expo.easeInOut
}); 

const swapper = document.querySelector(".fa-adjust");
swapper.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
})
//要寫document.body,不能只寫body 