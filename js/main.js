/* setTimeout(() => {
    const body = document.body;
    console.log(body);
    body.style.overflow = 'visible';
    body.style.overflowX = 'hidden';
    body.style.scrollBehavior = 'smooth';
    console.log(body.style);
    AOS.init();
}, 8000); */

/* var myPlayer = videojs('my-video', {
    controls: true,
    autoplay: false,
}); */
$('#videoModal').on('show.bs.modal', function(e) {
    /* myPlayer.play(); */
    console.log('open');
});

$('#videoModal').on('hidden.bs.modal', function(e) {
    /* $('#videoModal').modal('dispose'); */
    $('.video').each(function() {
        $(this)[0].hidden = true
            /* console.log($(this)[0].hidden); */
            /* $(this)[0].stopVideo(); */
    });
    console.log('pause');
});

/* function closeModal() {
    console.log('click');
    $('#videoModal').modal('dispose');
} */
/* CircleType */

/* const circleType = new CircleType(document.getElementById('welcome-title'));
circleType.radius(200); */


var enlacesHeader = document.querySelectorAll(".navbar-collapse")[0];
var semaforo = false;

document.querySelectorAll(".navbar-toggler")[0].addEventListener("click", function() {
    let nav_btn = document.getElementById("icon-navbar");
    const classesnav = document.getElementById('menu').classList;
    if (!semaforo) {
        nav_btn.style.color = "rgb(255, 255, 255)";
        nav_btn.classList.remove('fa-bars');
        nav_btn.classList.add('fa-close')
        semaforo = true;
    } else {
        color = "rgb(0, 0, 0)";
        classesnav.forEach((item) => {
            if (item === 'dark-navbar') {
                color = "rgb(255, 255, 255)";
            }
        })
        nav_btn.classList.remove('fa-close')
        nav_btn.classList.add('fa-bars');
        nav_btn.style.color = color;
        semaforo = false;
    }
    enlacesHeader.classList.toggle("menudos");
});

/* function opcloseMenu() {
    let nav_btn = document.getElementById("icon-navbar");
    const classesnav = document.getElementById('menu').classList;
    if (!semaforo) {
        nav_btn.style.color = "rgb(255, 255, 255)";
        nav_btn.classList.remove('fa-bars');
        nav_btn.classList.add('fa-close')
        semaforo = true;
    } else {
        color = "rgb(0, 0, 0)";
        classesnav.forEach((item) => {
            if (item === 'dark-navbar') {
                color = "rgb(255, 255, 255)";
            }
        })
        nav_btn.classList.remove('fa-close')
        nav_btn.classList.add('fa-bars');
        nav_btn.style.color = color;
        semaforo = false;
    }
    enlacesHeader.classList.toggle("menudos");
} */

function prepareLinks() {
    const links = document.querySelectorAll(".nav-link")
    for (i = 4; i < links.length; i++) {
        links[i].addEventListener("click", function() {
            const navBtn = document.querySelectorAll(".navbar-toggler")[0];
            navBtn.click();
        });
    }
}
prepareLinks();