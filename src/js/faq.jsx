import React, { useEffect, useState } from "react";
import Airtable from "airtable";

import FaqItem from "./components/faq-item";

function Faq({ collection }) {
  const [faqs, setFaqs] = useState([]);
  const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);


useEffect(() => {
   async function fetchFaqs() {
      base(collection).select({
         maxRecords: 100,
         view: "Grid view",
         filterByFormula: "NOT({itemId} = '')"
      }).firstPage((err, records) => {
         try {
            const data = [];
            records.forEach((record) => {
               data.push(record.fields);
               // console.log(data);
            })
         setFaqs(data)

         } catch { 
            if (err) { console.error(err); return; }
         }
         
      })
   }
   fetchFaqs();
}, [])
console.log(faqs);


//   useEffect(() => {
//     async function fetchFaqs() {
//       const response = await axios.get(
//         "https://monarchy-crm.monarchy.io/api/" + collection,
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
//           },
//         }
//       );
//       setFaqs(response.data);
//     }
//     fetchFaqs();
//   }, []);

  useEffect(() => {
    console.log(faqs[0]);
  }, [faqs]);

  if (!faqs) return "Loading ...";

  return (
    <div className="questions__container">
      <section className="questions">
        {faqs.map((faq, i) => {
          console.log(faq.question);
          return (
            <FaqItem
              question={faq.question}
              answer={faq.answer}
              key={i}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Faq;
