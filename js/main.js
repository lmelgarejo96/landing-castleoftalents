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
    $('.video').each(function() {
        $(this)[0].src = "https://www.youtube-nocookie.com/embed/pxEKoZKpCew";
    });
    console.log('open');
});

$('#videoModal').on('hidden.bs.modal', function(e) {
    /* $('#videoModal').modal('dispose'); */
    $('.video').each(function() {
        $(this)[0].src = "";
        console.log($(this));
    });
    console.log('pause');
});



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
        color = "rgb(255, 255, 255)";
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


/* testimonios */
let owl = $('.testmonial_active');
owl.owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    autoplay: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplaySpeed: 800,
    responsive: {
        0: {
            items: 1,
            dots: false,
            nav: false,
        },
        767: {
            items: 1,
            dots: false,
            nav: false,
        },
        992: {
            items: 1,
            nav: false
        },
        1200: {
            items: 1,
            nav: false
        },
        1500: {
            items: 1
        }
    }
});

/* owl.on('mousewheel', '.owl-stage', function(e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
}); */