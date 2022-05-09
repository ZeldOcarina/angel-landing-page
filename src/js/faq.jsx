import React, { useEffect, useState } from "react";
import axios from "axios";
import FaqItem from "./components/faq-item";
import faqs from "./faq.js";

function Faq() {
  console.log(faqs);
  return (
    <div className="questions__container">
      <section className="questions">
        {faqs.map(({ question, answer }, i) => (
          <FaqItem {...{ question, answer }} key={i} />
        ))}
      </section>
    </div>
  );
}

export default Faq;
