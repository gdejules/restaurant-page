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
aboutDesc.appendChild(paraOne);
aboutDesc.appendChild(aboutImage);
aboutDesc.appendChild(paraTwo);

about.appendChild(aboutTitle);
about.appendChild(aboutDesc);
