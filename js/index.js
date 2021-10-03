let url_api = "https://api.wheretheiss.at/v1/satellites/25544";
let mymap = L.map("issMap").setView([0, 0], 2);

let issIcon = L.icon({
  iconUrl: './js/iss200.png',
  iconSize: [60, 40],
  iconAnchor: [25, 16],
});
let marker = L.marker([0, 0], {icon: issIcon}).addTo(mymap);

CreateISSMap();

setInterval(async function GetISS() {
  
  const response = await fetch(url_api);
  const data = await response.json();
  const { latitude, longitude } = data;

  marker.setLatLng([latitude, longitude]);
}, 1000);
