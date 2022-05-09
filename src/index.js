import { createRoot } from 'react-dom/client';

import './js/reviews'

import Faq from "./js/faq";



if (module.hot) {
    module.hot.accept();
}

document.addEventListener("DOMContentLoaded", () => {

    //Initiate React APP for FAQs
    const root = createRoot(document.getElementById("faq-container"));
    root.render(<Faq />);

    document.getElementById("date").innerText = new Date().getFullYear();
});