// Theme changing part
const themeIcon = document.getElementById('theme-icon');
const bodyElement = document.body;

themeIcon.addEventListener('click', () => {
  if (bodyElement.classList.contains('bg-black')) {
    bodyElement.classList.remove('bg-black');
    bodyElement.classList.add('bg-light');
    themeIcon.classList.add('active-theme');
    themeIcon.src = './assets/icons/moon.png';
    themeIcon.style.transition = '2s'
    bodyElement.style.transition = '2s';
  } else {
    bodyElement.classList.remove('bg-light');
    bodyElement.classList.add('bg-black');
    themeIcon.classList.add('active-theme');
    themeIcon.src = './assets/icons/sun.png';
    themeIcon.style.transition = '2s'
    bodyElement.style.transition = '2s';
    headingExpo.style.color = 'black'
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
  "./assets/home/home-poster-1.jpg",
  "./assets/home/home-poster-2.jpg",
  "./assets/home/home-poster-3.jpg",
  "./assets/home/home-poster-4.jpg",
  "./assets/home/home-poster-5.jpeg"
];

let headImageIndex = 0;

const headImageElement = document.getElementById('headposters');

function prev() {

  headImageIndex == 0 ? headImageIndex = headImage.length - 1 : headImageIndex--;

  headImageElement.src = headImage[headImageIndex];
}

function next() {

  headImageIndex == headImage.length - 1 ? headImageIndex = 0 : headImageIndex++

  headImageElement.src = headImage[headImageIndex];

}
setInterval(next, 3000);


// Using Array And Object

const expoAdventureImg = {
  image: [
    "./assets/home/manali-to-ledakh.jpg",
    "./assets/home/shimla-to-spitivalley.jpg",
    "./assets/home/goa-vs-gokarna.jpg",
    "./assets/home/Bangalore to Coorg.jpeg",
    "./assets/home/Delhi to Jaipur via Agra.jpg"
  ],
  adventureName: [
    "Manali to Leh Highway",
    "Shimla to Spitivalley",
    "Goa to Gokarna",
    "Bangalore to Co-org",
    "Delhi to Jaipur Via Agra"
  ]
};

const searchInputBox = document.getElementById('searchBox')
const searchInputBoxValue = searchInputBox.value;

const placeImage = document.getElementById('placeimage')
const placeName = document.getElementById('placename')

function search() {

  switch (searchInputBoxValue) {
    case "Manali to Leh Highway":

    placeImage.src = expoAdventureImg.image[0];
    placeName.src = `Best Choice ${expoAdventureImg.adventureName[0]}`
  }
  console.log(`Best Choice ${expoAdventureImg.adventureName[0]}`)

}