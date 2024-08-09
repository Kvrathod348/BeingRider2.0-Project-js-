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
    "./assets/home/goa-vs-gokarna.png",
    "./assets/home/bangalore-to-coorg.jpeg",
    "./assets/home/delhi-to-jaipur-via-agra.jpg"
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

const placeImage = document.getElementById('placeimage')
const placeName = document.getElementById('placename')
const placeInform = document.getElementById('place-information')

function change() {
  const searchInputValue = searchInputBox.value.trim();

  switch (searchInputValue) {
    case "Manali to Leh Highway":

      placeImage.src = expoAdventureImg.image[0];
      placeName.innerText = `Best Choice ${expoAdventureImg.adventureName[0]} 🤩`;
      placeInform.innerHTML = `Highlights: Breathtaking mountain views, high-altitude passes like Rohtang La and Khardung La, remote villages.<br />
      Best Time to Visit: June to September, Distance: Approximately 474 km 🗺️.`

      break;

    case "Shimla to Spitivalley":
      placeImage.src = expoAdventureImg.image[1];
      placeName.innerText = `Close to see Nature ${expoAdventureImg.adventureName[1]} 💖`;
      placeInform.innerHTML = `Highlights: Rugged landscapes, ancient monasteries, Spiti River, and a sense of solitude. <br/>
      Best Time to Visit: May to October,Distance: Approximately 200 km from Manali to Kaza.`
      break;

      ak;

    case "Goa to Gokarna":
      placeImage.src = expoAdventureImg.image[2];
      placeName.innerText = `Beach Getaway: ${expoAdventureImg.adventureName[2]} 🏖️`;
      placeInform.innerHTML = `Highlights: Scenic coastal views, serene beaches, and a laid-back atmosphere.<br />
      Best Time to Visit: October to March, Distance: Approximately 150 km.`;
      break;

    case "Bangalore to Coorg":
      placeImage.src = expoAdventureImg.image[3];
      placeName.innerText = `Nature Escape: ${expoAdventureImg.adventureName[3]} 🌲`;
      placeInform.innerHTML = `Highlights: Lush green landscapes, coffee plantations, and waterfalls.<br />
      Best Time to Visit: October to April, Distance: Approximately 250 km.`;
      break;

    case "Delhi to Jaipur Via Agra":
      placeImage.src = expoAdventureImg.image[4];
      placeName.innerText = `Cultural Journey: ${expoAdventureImg.adventureName[4]} 🕌`;
      placeInform.innerHTML = `Highlights: Historic landmarks like the Taj Mahal, Amber Fort, and vibrant Rajasthani culture.<br />
      Best Time to Visit: October to March, Distance: Approximately 430 km.`;
      break;

    default:
      placeName.innerText = "Destination not found 😔";
      placeInform.innerText = "Please enter a valid destination.";
      placeImage.src = "./assets/home/search-default.png"; 
      break;
  }


}