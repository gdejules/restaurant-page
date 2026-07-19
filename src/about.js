export const about = document.createElement("div");
about.id = "about";

const aboutTitle = document.createElement("h1");
aboutTitle.textContent = "About Loka Restaurant";
const aboutDesc = document.createElement("div");
const paraOne = document.createElement("p");
paraOne.textContent =
  "Loka Restaurant was established in 2019 with a passion for authentic and also experimental asian cuisines. The spirit is to preserve asian cuisine and culture through foods. We also create experimental menu to provide meaningful experiences to our patrons.";
const aboutImage = document.createElement("img");
aboutImage.src =
  "https://upload.wikimedia.org/wikipedia/commons/e/e1/Ginger_Moon_Seminyak.jpg";
const paraTwo = document.createElement("p");
paraTwo.textContent =
  "We are located in the heart of Seminyak, Bali. Bali is one of the most popular island in Indonesia with a rich culture and cuisine. Our menu also inspired with the Bali local taste with a touch of other asian foods.";
const paraThree = document.createElement("span");
paraThree.textContent =
  "Come reserve your seat to experience our hospitality and exquisite cuisine.";
const contacts = document.createElement("div");
const phone = document.createElement("span");
phone.textContent = "Phone: +6281234567890";
const insta = document.createElement("span");
insta.textContent = "Instagram: @asianrestaurant_bali";
contacts.appendChild(paraThree);
contacts.appendChild(phone);
contacts.appendChild(insta);
// contacts.style("display: flex, flex-direction: column, gap: 0.5rem");
contacts.style.display = "flex";
contacts.style.flexDirection = "column";
contacts.style.gap = "0.5rem";
aboutDesc.appendChild(paraOne);
aboutDesc.appendChild(aboutImage);
aboutDesc.appendChild(paraTwo);
aboutDesc.appendChild(contacts);

about.appendChild(aboutTitle);
about.appendChild(aboutDesc);
