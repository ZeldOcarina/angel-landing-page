const script = document.createElement("script");
script.setAttribute("async", "");
script.setAttribute("src", `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&callback=initMap`);
document.body.appendChild(script);
