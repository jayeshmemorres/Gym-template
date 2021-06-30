var i = 0;
var images = [];
var slideTime = 3000; // 3 seconds
images[0] = "banner2.jpg";
images[1] = 'banner.jpg';
images[2] = 'banner3.Jpg';

function changePicture() {
    document.getElementById("background").style.backgroundImage = "url(" + images[i] + ")";
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}
window.onload = changePicture

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu-list');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
})