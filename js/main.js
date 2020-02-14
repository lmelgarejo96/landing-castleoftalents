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