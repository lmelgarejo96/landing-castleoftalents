/* JQUERY */
const wrapper = document.getElementById('wrapper');
$(wrapper).scroll(function(e) {
    let desplazamiento = $(this).scrollTop();
    if (desplazamiento > 400) {
        $('#menu').addClass('dark-navbar');
        $('#contacto').addClass('dark-navbar');
        $('#fondo-blanco').addClass('dark-navbar');
    } else {
        $('#menu').removeClass('dark-navbar');
        $('#contacto').removeClass('dark-navbar');
        $('#fondo-blanco').removeClass('dark-navbar');
    }
});