/* setTimeout(() => {
    const body = document.body;
    console.log(body);
    body.style.overflow = 'visible';
    body.style.overflowX = 'hidden';
    body.style.scrollBehavior = 'smooth';
    console.log(body.style);
    AOS.init();
}, 8000); */

var myPlayer = videojs('my-video', {
    controls: true,
    autoplay: false,
});
$('#videoModal').on('show.bs.modal', function(e) {
    myPlayer.play();
});

$('#videoModal').on('hidden.bs.modal', function(e) {
    myPlayer.pause();
});

/* CircleType */

/* const circleType = new CircleType(document.getElementById('welcome-title'));
circleType.radius(200); */