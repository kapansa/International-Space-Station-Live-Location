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
  const { latitude, longitude, altitude, velocity } = data;

  document.getElementById("latitude").innerHTML = Number(latitude).toFixed(2);
  document.getElementById("longitude").innerHTML = Number(longitude).toFixed(2);
  document.getElementById("altitude").innerHTML = Number(altitude).toFixed(2) + " Km";
  document.getElementById("velocity").innerHTML = Number(velocity).toFixed(2) + " Km/hr";

  marker.setLatLng([latitude, longitude]);
}, 1000);
