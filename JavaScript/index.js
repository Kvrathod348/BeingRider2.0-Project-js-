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
  "spitiBike": [{
    "bikeImage": `./assets/home/2023-ktm-390-adventure-main-min.jpg`,
    "bikeDetail": `<h3>The Shimla to Spiti Valley highway is a challenging route with rough terrains, steep inclines, and high-altitude conditions. Here are some of the best bikes suited for this adventurous journey:</h3>
      <ul class ="text-start fs-5"><b>KTM 390 Adventure:</b>
      <li>This bike offers a good balance between power and agility, making it ideal for the varied terrains of Spiti Valley. Its lightweight frame, high ground clearance, and advanced features like switchable ABS are perfect for navigating the challenging conditions.</li>
      </ul>`
  }],
  "goaToGokarna": [{
    "bikeImage": `./assets/home/Honda-H-ness-CB350-Legacy-500x261.webp`,
    "bikeDetail": `<h3>The Goa to Gokarna road trip is a scenic coastal ride, perfect for a relaxed and enjoyable bike journey. Here are some of the best bikes for this route:</h3>
      <ul class ="text-start fs-5"><b>Honda CB350:</b>
      <li>This bike offers a comfortable ride with a retro style and smooth engine. Its upright seating position and refined performance make it perfect for enjoying the coastal roads between Goa and Gokarna.</li>
      </ul>`

  }],
  "bangaloreToCoorg": [{
    "bikeImage": `./assets/home/der-dominor.png`,
    "bikeDetail": `<h3>The Bangalore to Coorg road trip is a popular route for bikers, offering lush green landscapes and winding roads. Here are a few bikes that are well-suited for this journey:</h3>
      <ul class ="text-start fs-5"><b>Bajaj Dominar 400: </b>
      <li>With a powerful engine and good handling, the Dominar 400 is great for both highways and winding roads. Its comfortable seating and advanced features make it perfect for long rides like the Bangalore to Coorg route.</li>
      </ul>`

  }],
  "delhiToJaipurViaAgra": [{
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

// Product Design
const dataSpotsImage = {
"manali-leh": [
    {
    "img": './assets/home/m-t-l/m-t-l-1.webp',
    "head": 'Rohtang Pass',
    "descr": `View: As you ascend Rohtang Pass, you'll be greeted with stunning vistas of snow-covered peaks, deep valleys, and the lush green landscape below. The contrast between the snow and the greenery is a sight to behold, especially during early summer.`
  },
  {
    "img": './assets/home/m-t-l/Keylong-m-t-l-2.webp',
    "head": 'Keylong',
    "descr":`View: The lush Lahaul Valley, with its rolling green fields, quaint villages, and backdrop of towering mountains, offers a serene and picturesque stop. Keylong, the district headquarters, is surrounded by monasteries and provides a tranquil view of the valley.`
  },
  {
    "img":'./assets/home/m-t-l/lahaul-valley-3.jpg',
    "head":' Lahaul Valley',
    "descr":`View: The lush Lahaul Valley, with its rolling green fields, quaint villages, and backdrop of towering mountains, offers a serene and picturesque stop. Keylong, the district headquarters, is surrounded by monasteries and provides a tranquil view of the valley.`
  },
  {
    "img":'./assets/home/m-t-l/Baralacha La m-t-l-4.avif',
    "head":'Baralacha La (16,040 ft)',
    "descr":`View: One of the highest mountain passes on this route, Baralacha La offers a dramatic landscape with rugged terrain, snow-capped peaks, and shimmering blue lakes. The confluence of roads leading to Leh and Spiti adds to the beauty and excitement.
`
  },
  {
    "img":'./assets/home/m-t-l/Sarchu Plains-m-t-l-5.jpg',
    "head":'Sarchu Plain',
    "descr":`View: Sarchu, located on the border between Himachal Pradesh and Ladakh, presents an otherworldly view of vast plains surrounded by towering mountains. The barren landscape with its stark beauty under the blue sky is a favorite for photographers.`
  }
],
"shimla-spitivalley" :[
  {
    "img" : `./assets/home/s-t-s/narkanda-weekend-s-t-s-1.webp`,
    "head":`Narkanda`,
    "descr":`View: As you pass through Narkanda, you’ll be treated to sweeping views of dense pine forests and the majestic snow-capped peaks of the Himalayas. A detour to Hatu Peak offers a panoramic view of the surrounding mountains and valleys, with apple orchards dotting the landscape.`
  },
  {
    "img" : `./assets/home/s-t-s/Hatu Peak-s-t-s=2.jpeg`,
    "head":`Hatu Peak`,
    "descr":`View: As you pass through Narkanda, you’ll be treated to sweeping views of dense pine forests and the majestic snow-capped peaks of the Himalayas. A detour to Hatu Peak offers a panoramic view of the surrounding mountains and valleys, with apple orchards dotting the landscape.`
  },
  {
    "img" : `./assets/home/s-t-s/Sutlej-River-s-t-s=3.webp`,
    "head":`Sutlej River`,
    "descr":`View: Riding along the Sutlej River, you’ll experience dramatic views of deep gorges, rugged cliffs, and the river winding its way through the valley. The contrast of the river's blue waters against the barren, rocky landscape is mesmerizing.`
  },
  {
    "img" : `./assets/home/s-t-s/Kalpa-at-s-t-s=4.jpg`,
    "head":`Kinnaur Kailash Range`,
    "descr":`View: The road through Kinnaur offers awe-inspiring views of the Kinnaur Kailash Range, with its towering peaks and hanging glaciers. The sight of the sacred Kinnaur Kailash peak, often shrouded in clouds, is a highlight, along with the lush green valleys and terraced fields below`
  },
  {
    "img" : `./assets/home/s-t-s/Nako-scaled-s-t-s5.jpg`,
    "head":`Nako Lake`,
    "descr":`View: Nako Lake, located in the high-altitude village of Nako, is a serene and picturesque spot surrounded by mountains. The reflection of the snow-capped peaks in the still waters of the lake, with traditional Tibetan-style houses around, creates a tranquil and photogenic scene.`
  },
],
"Gao-garkanana":[
  {
    "img":`./assets/home/g-t-g/Palolem Beach-g-t-g1.jpeg`,
    "head":`Palolem Beach`,
    "descr":`View: Just south of Goa, Palolem Beach offers a tranquil setting with its crescent-shaped shoreline lined with palm trees and colorful beach huts. The view of the sun rising or setting over the Arabian Sea from here is simply mesmerizing.`
  },
  {
    "img":`./assets/home/g-t-g/Cabo de Rama Fort-g-t-g-2.jpg`,
    "head":` Cabo de Rama Fort`,
    "descr":`View: As you ride through the serene stretch of Agonda Beach, the unspoiled sandy shores and clear waters create a perfect tropical scene. A short detour to Cabo de Rama Fort offers panoramic views of the rugged coastline and the vast expanse of the Arabian Sea.`
  },
  {
    "img":`./assets/home/g-t-g/Sutlej-River-s-t-s-3.webp`,
    "head":`Karwar Beach`,
    "descr":`View: Crossing into Karnataka, the town of Karwar offers stunning views where the Kali River meets the Arabian Sea. The view of the river estuary, with its calm waters, fishing boats, and the surrounding greenery, is picturesque. The Karwar Beach itself is a peaceful spot with golden sands and gentle waves.`
  },
  {
    "img":`./assets/home/g-t-g/Kalpa-at-s-t-s4.jpg`,
    "head":`Kali River Estuary`,
    "descr":`View: Crossing into Karnataka, the town of Karwar offers stunning views where the Kali River meets the Arabian Sea. The view of the river estuary, with its calm waters, fishing boats, and the surrounding greenery, is picturesque. The Karwar Beach itself is a peaceful spot with golden sands and gentle waves.`
  },
  {
    "img":`./assets/home/g-t-g/`,
    "head":`Gokarna`,
    "descr":`View: As you approach Gokarna, the view from the cliffs overlooking Om Beach is iconic. The beach gets its name from its natural Om shape, and the sight of the gentle waves lapping against the unique coastline, surrounded by green hills, is a perfect end to the trip. The sunset view from here is particularly spectacular, casting a golden hue over the waters.`
  }
],
"Banglore-Coorg":[
  {
    "img":`./assets/home/b-t-o/ramanagaram-b-t-o=1.jpg`,
    "head":`Ramanagara Hills`,
    "descr":`View: Just after leaving Bangalore, you'll pass through the rugged terrain of Ramanagara, known as the "Silk City" and famous for its rocky hills. The view of these towering granite outcrops, surrounded by greenery, provides a dramatic backdrop for the start of your journey.`
  },
  {
    "img":`./assets/home/b-t-o/Channapatna-b-t-o=2.jpg`,
    "head":`Channapatna`,
    "descr":`View: As you ride through Channapatna, known for its traditional wooden toys, you'll see charming countryside views dotted with colorful toy shops. The vibrant atmosphere and rural landscapes offer a picturesque and culturally rich experience.`
  },
  {
    "img":`./assets/home/b-t-o/Mandya-b-t-o=3.jpg`,
    "head":`Mandya`,
    "descr":`View: The stretch through Mandya district is characterized by vast sugarcane fields, banana plantations, and coconut groves. The lush greenery and the sight of farmers working in the fields provide a refreshing and serene view.`
  },
  {
    "img":`./assets/home/b-t-o/Mysore Palace (Optional Detour)-b-t-o=4.jpg`,
    "head":`Mysore Palace (Optional Detour)`,
    "descr":`View: If you take a short detour through Mysore, you'll be treated to the grand sight of the Mysore Palace, one of India’s most iconic landmarks. The palace’s majestic architecture, set against the backdrop of well-manicured gardens, is a feast for the eyes.`
  },
  {
    "img":`./assets/home/b-t-o/Coffee Plantations in Coorg-b-t-0=5.jpg`,
    "head":`Coffee Plantations in Coorg`,
    "descr":`View: As you ascend into the Western Ghats and approach Coorg, the landscape transforms into rolling hills covered with dense forests and sprawling coffee plantations. The view of the mist-covered hills, interspersed with coffee bushes, pepper vines, and the occasional waterfall, is truly mesmerizing. The cool breeze and the aroma of coffee in the air add to the magic of the experience.`
  },
],
"Delhi-jaipur" :[
  {
    "img" :`./assets/home/d-t-a/`,
    "head":`Yamuna Expressway`,
    "descr":`View: Starting from Delhi, the Yamuna Expressway offers a smooth ride with expansive views of the countryside. The well-maintained road is lined with fields, and on a clear day, you can enjoy the vast, open skies. The straight, long stretches of the expressway provide a sense of freedom and anticipation for the journey ahead.`
  },
  {
    "img" :`./assets/home/d-t-a`,
    "head":`Taj Mahal, Agra`,
    "descr":`View: No trip through Agra is complete without stopping to admire the Taj Mahal. The view of this iconic marble mausoleum, with its gleaming white domes and intricate carvings, is a sight that never fails to impress. The Taj Mahal, set against the backdrop of the Yamuna River and lush gardens, is an unforgettable visual experience.`
  },
  {
    "img" :`./assets/home/d-t-a`,
    "head":`Agra Fort`,
    "descr":`View: As you continue your journey in Agra, a visit to the Agra Fort provides another historical perspective. The view from the fort offers a glimpse of the Taj Mahal in the distance, framed by the imposing red sandstone walls of the fort. The contrast between the fort’s architecture and the surrounding landscape is striking.`
  },
  {
    "img" :`./assets/home/d-t-a`,
    "head":`Fatehpur Sikri`,
    "descr":`View: On the way to Jaipur, a detour to Fatehpur Sikri offers views of this ancient city, which was once the capital of the Mughal Empire. The view of the Buland Darwaza, the massive gateway, and the other architectural marvels of this UNESCO World Heritage site, set against the backdrop of the arid landscape, is both majestic and haunting.`
  },
  {
    "img" :`./assets/home/d-t-a`,
    "head":`Aravalli Hills, Approaching Jaipur`,
    "descr":`View: As you near Jaipur, the road begins to wind through the Aravalli Hills. The view of these ancient, rugged hills is a welcome change from the plains, with the landscape turning more rocky and dramatic. The sight of Jaipur's forts and palaces appearing in the distance, especially the Amber Fort perched on the hill, signals the end of your journey and the beginning of exploring Rajasthan’s royal heritage.`
  }
]
}
let currentKey = "manali-leh";
let dataKeys = { 
    "manali-leh": 0, 
    "shimla-spitivalley": 0, 
    "Gao-garkanana": 0, 
    "Banglore-Coorg": 0, 
    "Delhi-jaipur": 0 
};

const spotsImage = document.getElementById('spot-view');
const spotHead = document.getElementById('spot-head');
const detailSpots = document.getElementById('detail-spots');

function updateView() {
    const currentIndex = dataKeys[currentKey];
    console.log("Currrent Index", currentIndex)
    const spotData = dataSpotsImage[currentKey][currentIndex];
    spotsImage.src = spotData.img;
    spotHead.innerText = spotData.head;
    detailSpots.innerText = spotData.descr;
}

function one() {
  currentKey = "manali-leh";
  updateView();
}

function two() {
  currentKey = "shimla-spitivalley";
  updateView();
}

function three() {
  currentKey = "Gao-garkanana";
  updateView();
}

function four() {
  currentKey = "Banglore-Coorg";
  updateView();
}

function five() {
  currentKey = "Delhi-jaipur";
  updateView();
}

function left() {
  dataKeys[currentKey] = (dataKeys[currentKey] - 1 + dataSpotsImage[currentKey].length) % dataSpotsImage[currentKey].length;
  updateView();
}

function right() {
  dataKeys[currentKey] = (dataKeys[currentKey] + 1) % dataSpotsImage[currentKey].length;
  updateView();
}

// Initialize the view with the first spot
