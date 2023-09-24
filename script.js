let currentColorIndex = 1+1;
const colors = ['color1', 'color2', 'color3', 'color4', 'color5','color6','color7', 'color8', 'color9', 'colora', 'colorb','colorc'];

function changeBackgroundColor() {
    document.body.classList.remove(colors[currentColorIndex]);
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.body.classList.add(colors[currentColorIndex]);
}
window.addEventListener('scroll', () => {
    const title = document.getElementById('animated-title');
    const scrollY = window.scrollY;

    if (scrollY > 100) { 
        title.classList.add('scroll-animation');
    } else {
        title.classList.remove('scroll-animation');
    }
});
