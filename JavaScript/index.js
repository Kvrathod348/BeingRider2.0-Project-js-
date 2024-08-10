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
  ],
  adventureDesc: [
    `<b>Highlights</b>: Breathtaking mountain views, high-altitude passes like Rohtang La and Khardung La, remote villages.<br />
      Best Time to Visit: June to September, Distance: Approximately 474 km 🗺️. <br />
     <ul>
      <li><b>High-Altitude Passes</b>: The highway passes through some of the highest motorable passes in the world, like Rohtang La (13,050 ft) and Khardung La (18,380 ft). These passes offer breathtaking views of snow-capped peaks and rugged landscapes. </li>

      <li><b>Stunning Landscapes:</b> The journey takes you through a variety of terrains, from lush green valleys near Manali to the stark, barren beauty of the Ladakh region. The contrasting landscapes make the trip visually stunning and unique. </li>

      <li><b>Remote Villages and Monasteries:</b> Along the way, you'll pass through remote villages like Keylong and Sarchu, and visit ancient monasteries like Hemis and Thiksey near Leh. These places offer a glimpse into the unique culture and traditions of the region. </li>
     </ul>`,

    `<b>Highlights:</b> Rugged landscapes, ancient monasteries, Spiti River, and a sense of solitude. <br/>
      Best Time to Visit: May to October, Distance: Approximately 200 km from Manali to Kaza.
      <ul>
      <li><b>Spectacular Mountain Views:</b> The route offers breathtaking views of the snow-capped Himalayan peaks, rugged cliffs, and deep valleys. The dramatic change in scenery as you ascend into Spiti Valley is truly mesmerizing.</li>
      <li><b>Pristine Monasteries:</b> The trip is dotted with ancient monasteries like Key Monastery and Dhankar Monastery. These spiritual sites not only provide insight into Tibetan Buddhism but also offer stunning panoramic views of the surrounding landscapes.</li>
      <li><b>High-Altitude Desert Terrain:</b> Spiti Valley is known for its unique, high-altitude desert terrain. The barren, moon-like landscapes, dotted with small villages and surrounded by towering peaks, create a surreal and otherworldly atmosphere that is distinct from other parts of the Himalayas.</li>
      </ul>`,

    `<b>Highlights:</b> Scenic coastal views, serene beaches, and a laid-back atmosphere.<br />
      Best Time to Visit: October to March, Distance: Approximately 150 km.
      <ul>
      <li>Stunning Coastal Views: The drive from Goa to Gokarna takes you along the picturesque Konkan coast, offering stunning views of the Arabian Sea, palm-fringed beaches, and coastal cliffs. The journey itself is a visual treat with plenty of opportunities to stop and enjoy the scenery.</li>
      <li>Pristine Beaches: Both Goa and Gokarna are famous for their beautiful beaches, but Gokarna offers a more serene and less commercialized experience. Beaches like Om Beach, Kudle Beach, and Half Moon Beach in Gokarna are perfect for a peaceful retreat.</li>
      <li>Cultural Exploration: The road trip allows you to explore the unique blend of Goan and Karnataka cultures. In Gokarna, you can visit the famous Mahabaleshwar Temple, an ancient pilgrimage site, and enjoy the slower, more spiritual vibe that contrasts with Goa's vibrant nightlife.</li>
      </ul>`,

    `<b>Highlights:</b> Lush green landscapes, coffee plantations, and waterfalls.<br />
      Best Time to Visit: October to April, Distance: Approximately 250 km.
      <ul>
      <li>Lush Greenery and Scenic Landscapes: The drive to Coorg, often referred to as the "Scotland of India," is filled with picturesque views of rolling hills, dense forests, and vast coffee plantations. The verdant scenery and mist-covered mountains make the journey soothing and visually captivating.</li>
      <li>Coffee Plantations: Coorg is famous for its coffee, and along the route, you’ll pass through numerous coffee estates. Many plantations offer tours where you can learn about the coffee-making process, from bean to brew, and enjoy the aroma of fresh coffee.</li>
      <li>Waterfalls and Wildlife: The road trip also offers opportunities to explore natural attractions like Abbey Falls and Iruppu Falls. Additionally, the route passes near wildlife sanctuaries like Nagarhole National Park, where you might spot elephants, deer, and various bird species in their natural habitat.</li>
      </ul>`,

    `<b>Highlights:</b> Historic landmarks like the Taj Mahal, Amber Fort, and vibrant Rajasthani culture.<br />
      Best Time to Visit: October to March, Distance: Approximately 430 km.
      <ul>
      <li>Taj Mahal in Agra: A major highlight of this road trip is the visit to the Taj Mahal, one of the Seven Wonders of the World. This magnificent white marble mausoleum is a symbol of love and an architectural masterpiece that draws visitors from all over the globe.</li>
      <li>Historic Forts and Palaces: The route takes you through historic cities rich in Mughal and Rajput heritage. In Agra, you can explore the Agra Fort, while Jaipur offers the stunning Amber Fort and the royal City Palace, showcasing the grandeur of India's past.</li>
      <li>Vibrant Rajasthani Culture: As you approach Jaipur, known as the Pink City, you’ll experience the vibrant culture of Rajasthan. The city's bustling markets, traditional Rajasthani cuisine, and colorful festivals provide an immersive cultural experience, making this road trip a journey through time and tradition.</li>
      </ul>`

  ],
};

const allBikeDetails = {
  "manaliBike": [{
    "bikeImage": `./assets/home/RoyalEnfiled-Engine-411cc.jpg`,
    "bikeDetail": `<h3>For the Manali to Leh Highway road trip, a challenging and high-altitude journey, the best bikes are those that can handle rugged terrain, steep inclines, and varying weather conditions. Here are some top choices:</h3>
              <ul class ="text-start fs-5"><b>Royal Enfield Himalayan:</b>
              <li>Engine: 411cc</li>
              <li>Features: Designed specifically for adventure touring, the Himalayan is built to handle rough terrain and high altitudes. Its long-travel suspension, high ground clearance, and comfortable riding position make it ideal for the Manali to Leh trip.</li>
              </ul>`
  }],
  "spitiBike" :[ {
    "bikeImage": `./assets/home/2023-ktm-390-adventure-main-min.jpg`,
    "bikeDetail": `<h3>The Shimla to Spiti Valley highway is a challenging route with rough terrains, steep inclines, and high-altitude conditions. Here are some of the best bikes suited for this adventurous journey:</h3>
      <ul class ="text-start fs-5"><b>KTM 390 Adventure:</b>
      <li>This bike offers a good balance between power and agility, making it ideal for the varied terrains of Spiti Valley. Its lightweight frame, high ground clearance, and advanced features like switchable ABS are perfect for navigating the challenging conditions.</li>
      </ul>`
  }],
  "goaToGokarna" : [{
    "bikeImage": `./assets/home/Honda-H-ness-CB350-Legacy-500x261.webp`,
    "bikeDetail": `<h3>The Goa to Gokarna road trip is a scenic coastal ride, perfect for a relaxed and enjoyable bike journey. Here are some of the best bikes for this route:</h3>
      <ul class ="text-start fs-5"><b>Honda CB350:</b>
      <li>This bike offers a comfortable ride with a retro style and smooth engine. Its upright seating position and refined performance make it perfect for enjoying the coastal roads between Goa and Gokarna.</li>
      </ul>`

  }],
  "bangaloreToCoorg" :[{
    "bikeImage": `./assets/home/der-dominor.png`,
    "bikeDetail": `<h3>The Bangalore to Coorg road trip is a popular route for bikers, offering lush green landscapes and winding roads. Here are a few bikes that are well-suited for this journey:</h3>
      <ul class ="text-start fs-5"><b>Bajaj Dominar 400: </b>
      <li>With a powerful engine and good handling, the Dominar 400 is great for both highways and winding roads. Its comfortable seating and advanced features make it perfect for long rides like the Bangalore to Coorg route.</li>
      </ul>`

  }],
  "delhiToJaipurViaAgra":[{
    "bikeImage": `./assets/home/Royal-Enfield-Classic-350-.webp`,
    "bikeDetail": `<h3>For the Delhi to Jaipur via Agra highway road trip, choosing the right bike can significantly enhance your experience, especially considering the mixed road conditions, distance, and the need for comfort on long rides. Here are some of the best bikes for this road trip:</h3>
      <ul class ="text-start fs-5"><b>Royal Enfield Classic 350:</b>
      <li>Why It's Great: The Royal Enfield Classic 350 is perfect for long highway rides, offering a comfortable seating position and a powerful engine that handles both city traffic and highway cruising with ease. Its retro styling adds to the charm of a heritage-rich trip like this.</li>
      </ul>`
  }]
};

const searchInputBox = document.getElementById('searchBox')

const placeImage = document.getElementById('placeimage')
const placeName = document.getElementById('placename')
const placeInform = document.getElementById('place-information')
const bikeInformation = document.getElementById('bike-information')
const bikeImage = document.getElementById('bike-img')

function change() {
  const searchInputValue = searchInputBox.value.trim();
  placeInform.style.textAlign = 'left'

  switch (searchInputValue) {
    case "Manali to Leh Highway":

      placeImage.src = expoAdventureImg.image[0];
      placeName.innerText = `Best Choice ${expoAdventureImg.adventureName[0]}🤩`;
      placeInform.innerHTML = expoAdventureImg.adventureDesc[0];
      bikeInformation.innerHTML = allBikeDetails.manaliBike[0].bikeDetail;
      bikeImage.src = allBikeDetails.manaliBike[0].bikeImage;
      break;

    case "Shimla to Spitivalley":
      placeImage.src = expoAdventureImg.image[1];
      placeName.innerText = `Feel Nature on ${expoAdventureImg.adventureName[1]}💖`;
      placeInform.innerHTML = expoAdventureImg.adventureDesc[1];
      bikeInformation.innerHTML = allBikeDetails.spitiBike[0].bikeDetail;
      bikeImage.src = allBikeDetails.spitiBike[0].bikeImage;
      break;

    case "Goa to Gokarna":
      placeImage.src = expoAdventureImg.image[2];
      placeName.innerText = `Beach Getaway: ${expoAdventureImg.adventureName[2]} 🏖️`;
      placeInform.innerHTML = expoAdventureImg.adventureDesc[2];
      bikeInformation.innerHTML = allBikeDetails.goaToGokarna[0].bikeDetail;
      bikeImage.src = allBikeDetails.goaToGokarna[0].bikeImage;
      break;

    case "Bangalore to Coorg":
      placeImage.src = expoAdventureImg.image[3];
      placeName.innerText = `Nature Escape: ${expoAdventureImg.adventureName[3]}🌲🌲`;
      placeInform.innerHTML = expoAdventureImg.adventureDesc[3];
      bikeInformation.innerHTML = allBikeDetails.bangaloreToCoorg[0].bikeDetail;
      bikeImage.src = allBikeDetails.bangaloreToCoorg[0].bikeImage;
      break;

    case "Delhi to Jaipur Via Agra":
      placeImage.src = expoAdventureImg.image[4];
      placeName.innerText = `Cultural Journey: ${expoAdventureImg.adventureName[4]} 🕌`;
      placeInform.innerHTML = expoAdventureImg.adventureDesc[4];
      bikeInformation.innerHTML = allBikeDetails.delhiToJaipurViaAgra[0].bikeDetail;
      bikeImage.src = allBikeDetails.delhiToJaipurViaAgra[0].bikeImage;
      break;

    default:
      placeName.innerText = "Destination not found 😔";
      placeInform.innerText = "Please enter a valid destination.";
      placeImage.src = "./assets/home/search-default.png";
      break;
  }


}