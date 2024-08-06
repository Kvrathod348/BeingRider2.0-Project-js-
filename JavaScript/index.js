// Theme changing part
const themeIcon = document.getElementById('theme-icon');
const bodyElement = document.body;

themeIcon.addEventListener('click', () => {
  if (bodyElement.classList.contains('bg-black')) {
    bodyElement.classList.remove('bg-black');
    bodyElement.classList.add('bg-light');
    themeIcon.classList.add('active-theme');
    themeIcon.src = './Assets/icons/moon.png';
    themeIcon.style.transition = '2s'
    bodyElement.style.transition = '2s';
  } else {
    bodyElement.classList.remove('bg-light');
    bodyElement.classList.add('bg-black');
    themeIcon.classList.add('active-theme');
    themeIcon.src = './Assets/icons/sun.png';
    themeIcon.style.transition = '2s'
    bodyElement.style.transition = '2s';
  }
});


// hamburger menu

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// image slider

const headImage = [
  "./Assets/home/home-poster-1.jpg",
  "./Assets/home/home-poster-2.jpg",
  "./Assets/home/home-poster-3.jpg",
  "./Assets/home/home-poster-4.jpg",
  "./Assets/home/home-poster-5.jpeg"
];

let headImageIndex = 0;
 const headImageElement = document.getElementById('head-poster');

 function prev(){

  headImageIndex==0 ? headImageIndex = headImage.lenght - 1 : headImageIndex--

  headImageElement.src=headImage[headImageIndex];
 }