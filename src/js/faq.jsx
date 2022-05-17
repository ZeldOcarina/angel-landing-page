import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

import FaqItem from "./components/faq-item";

function Faq({ collection }) {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    async function fetchFaqs() {
      const response = await axios.get(
        "https://monarchy-crm.monarchy.io/api/" + collection,
        {
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
          },
        }
      );
      setFaqs(response.data);
    }
    fetchFaqs();
  }, []);

  useEffect(() => {
    console.log(faqs.data);
  }, [faqs]);

  if (!faqs || !faqs.data) return "Loading ...";

  return (
    <div className="questions__container">
      <section className="questions">
        {faqs.data.map((faq, i) => {
          console.log(faq.attributes);
          return (
            <FaqItem
              {...{
                question: faq.attributes.Question,
                answer: faq.attributes.Answer,
              }}
              key={i}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Faq;
