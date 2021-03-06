const script = document.createElement("script");
script.setAttribute("async", "");
script.setAttribute("src", `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&callback=initMap`);
document.body.appendChild(script);


function initMap() {
  // The location of officeLocation
  const officeLocation = { lat: 34.157310, lng: -118.412920 };
  // The map, centered at officeLocation
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: officeLocation,
  });
  // The marker, positioned at officeLocation
  const marker = new google.maps.Marker({
    position: officeLocation,
    map: map,
  });
}

window.initMap = initMap;