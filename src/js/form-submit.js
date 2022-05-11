import formurlencoded from "form-urlencoded";

const form = document.querySelector("form");
const action = form.getAttribute("action");
const loader = document.querySelector(".loader");


if (form) {
   form.addEventListener("submit", async function (e) {
     e.preventDefault();
     loader.classList.remove("d-none");
     const formData = new FormData(form);

     const requestBody = {};
     for (const [name, value] of formData.entries()) {
      requestBody[name] = value;
     }

     try {
       const response = await fetch(action, {
         method: "POST",
         headers: {
           "Content-Type": "application/x-www-form-urlencoded",
         },
         body: formurlencoded(requestBody),
       });
       console.dir(response);
       if (response.status === 200) {
         loader.classList.add("d-none");
       } else throw new Error("Error");
     } catch (err) {
       console.dir(err);
       loader.classList.add("d-none");
     }
   });
 }