// Create a map instance
var map = L.map('map').setView([0.0236, 37.9062], 7);

// Create a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

// Create an array of tourism site locations and information
var tourismSites = [
 
  {
    name: "Mount Kenya",
    latlng: [-0.1521, 37.3084],
    description: "The highest mountain in Kenya, climbing to 5,199 meters. It is the second tallest mountain in Africa. The scenery surrounding this designated World Heritage Site is breath-taking scenary and has adventurous trekking routes."
  },
   {
    name: "Maasai Mara National Reserve",
    latlng: [ -1.4134, 35.1119 ],
    description: "The home to the lions of 'big cat diaries', temporary residence of the wilderbeasts and home to the great Masaai warriors." 
  },
  {
    name: "Lake Nakuru National Park",
    latlng: [ -0.3031, 36.0800 ],
    description: "A beautiful national park renowned for its rhinos and diverse bird species.Found on the floor of the Great Rift Valley, surrounded by wooded and bushy grassland"
  },
    {
    name: "Amboseli national Park",
    latlng: [-2.6527, 37.2606],
    description: "Home of the African Elephant and it is crowned by Mount Kilimanjaro, Africa's highest peak."
  },
  {
    name: "Watamu Marine Park",
    latlng: [-3.3425, 40.0274],
    description: "Filled with pristine white sand beaches, rich and diverse birdlife, fish, turtles and dugongs"
  },
    {
    name: "Nairobi National Park",
    latlng: [-1.2921, 36.8219],
    description: "Park within Nairobi city. Home to a variety of wildlife and tree species"
  }
];

// Loop through the tourism sites and add markers with customized popups
for (var i = 0; i < tourismSites.length; i++) {
  var site = tourismSites[i];

  var marker = L.marker(site.latlng).addTo(map);

  marker.bindPopup('<b>' + site.name + '</b><br>' + site.description);
}
