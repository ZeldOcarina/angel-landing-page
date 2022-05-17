import { createRoot } from 'react-dom/client';
// import './js/gallery'

import './js/header-mob'
import './js/reviews'
import './js/google-maps'
//import './js/form-submit'


import Faq from "./js/faq.jsx";

if (module.hot) {
    module.hot.accept();
}

document.addEventListener("DOMContentLoaded", () => {
    //Initiate React APP for FAQs
    const faqContainer = document.getElementById("faq-container");
    const collection = faqContainer.dataset.collection;
    const root = createRoot(faqContainer);
    root.render(<Faq collection={collection} />);
    document.getElementById("date").innerText = new Date().getFullYear();
    document.getElementById("date-2").innerText = new Date().getFullYear();
});