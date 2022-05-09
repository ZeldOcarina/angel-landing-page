import { createRoot } from 'react-dom/client';

import './js/reviews'

import Faq from "./js/faq.jsx";



if (module.hot) {
    module.hot.accept();
}

document.addEventListener("DOMContentLoaded", () => {
    //Initiate React APP for FAQs
    const root = createRoot(document.getElementById("faq-container"));
    root.render(<Faq />);

    document.getElementById("date").innerText = new Date().getFullYear();
    document.getElementById("google-maps-script").setAttribute("src", `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&callback=initMap`);
});