document.addEventListener('DOMContentLoaded', function () {
    let arrVideo = document.querySelectorAll('.video_svg');

    for(let i=0; i<arrVideo.length; i++) {
        arrVideo[i].addEventListener('mouseenter', function() {
            this.play()
        })
    }
})