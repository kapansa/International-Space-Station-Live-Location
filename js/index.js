let url_api = "https://api.wheretheiss.at/v1/satellites/25544";
let mymap = L.map("issMap").setView([0, 0], 3);

let issIcon = L.icon({
  iconUrl: "./images/iss200.png",
  iconSize: [60, 40],
  iconAnchor: [25, 16],
});
let marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

CreateISSMap();

SetInitialLocation();

setInterval(GetISS, 1000);
