TweenMax.to(".loading-screen", 4, {
    delay: 6.6,
    top: "-500vh",
    ease: Expo.easeInOut
});

/* TweenMax.to(".init", 1, {
    delay: 7.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
}); */

TweenMax.to(".init", 4, {
    delay: 6.6,
    top: "-500vh",
    ease: Expo.easeInOut
});

TweenMax.to(".ring", 4, {
    delay: 7,
    top: "-500%",
    ease: Expo.easeInOut
});

TweenMax.from(".logo", 3, {
    delay: 7.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".nav-link", 3, {
    delay: 7.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".title", 3, {
    delay: 7.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(".description-title", 2, {
    delay: 7.7,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
}, 0.1);

TweenMax.staggerFrom(".btn-modal-video ", 2, {
    delay: 7.7,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
}, 0.1);

TweenMax.staggerFrom(".img-slide", 2, {
    delay: 7.7,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
}, 0.1);

setTimeout(() => {
    const ring = document.getElementById('ring');
    ring.style.display = 'flex'
}, 1500)

setTimeout(() => {
    const welcome = document.getElementById('welcome');
    welcome.style.display = 'flex';
    const circleType = new CircleType(document.getElementById('welcome-title'));
    circleType.radius(384);
    TweenMax.staggerFrom(".welcome", 3, {
        delay: 8.7,
        opacity: 0,
        y: 20,
        ease: Power3.easeInOut
    }, 0.1);
}, 3000);



var t1 = new TimelineMax();

t1.from(".ringOne", 4, {
    delay: 0.4,
    opacity: 0,
    y: 150,
    ease: Expo.easeInOut
}).from(".ringTwo", 4, {
    delay: 0.9,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, "-=5");


var textWrapper = document.querySelector('.title .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.title .letter',
        translateY: ["1.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 450,
        easing: "easeOutExpo",
        delay: function(el, i) {
            return 9000 + 50 * i;
        }
    });