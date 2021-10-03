function CreateISSMap() {
  
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2FwYW5vaWMiLCJhIjoiY2t1YjNmcXFhMG1xNTJ3bG1ibDYyYmh1aCJ9.CYnAvPOFGmGyKFxmvRrOpw",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1Ijoia2FwYW5vaWMiLCJhIjoiY2t1YjNmcXFhMG1xNTJ3bG1ibDYyYmh1aCJ9.CYnAvPOFGmGyKFxmvRrOpw",
    }
  ).addTo(mymap);
  
}
