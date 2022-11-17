function anim(event) {
    this.querySelectorAll('.layer').forEach(layer => {
        let speed = layer.getAttribute('datd-speed');

        layer.style.transform = `translateX(${event.clientX*speed/1000}px) translateY(${event.clientY*speed/1000}px)`
    });


}
document.addEventListener('mousemove', anim);