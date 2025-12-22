import "./about.css";
import banner from "../assets/images/about-image.jpg";

export default function loadAboutPage() {
	const content = document.querySelector(".content");
	const aboutContainer = document.createElement("div");
	aboutContainer.classList.add("about-container");

	const aboutImage = document.createElement("img");
	aboutImage.setAttribute("src", banner);

	const aboutTitle = document.createElement("h2");
	aboutTitle.textContent = "About Us";

	const aboutBody = document.createElement("div");
	aboutBody.classList.add("about-body");

	const paragraph1 = document.createElement("p");
	paragraph1.textContent =
		"At Odin’s Pizza, we believe a great pizza should tell a legendary story. Inspired by Norse mythology and the fearless spirit of Viking warriors, we craft every pizza with honest ingredients, bold flavors, and deep respect for the fire that turns something simple into something unforgettable.";

	const paragraph2 = document.createElement("p");
	paragraph2.textContent =
		"Our oven is our Yggdrasil — the meeting point between tradition and creativity. We take our time with long-fermented dough, house-made sauces, and daring combinations that honor both the gods and those who gather around the table after a long day’s battle.";

	const paragraph3 = document.createElement("p");
	paragraph3.textContent =
		"We don’t serve fast food. We serve feasts. Every pizza is made to be shared, celebrated, and enjoyed without haste. Whether you’re a curious traveler or a hungry warrior, there’s always a seat for you at Odin’s hall.";

	const paragraph4 = document.createElement("p");
	paragraph4.classList.add("about-cta");
	paragraph4.textContent = " Raise your slice. The feast has begun.";

	aboutBody.appendChild(aboutTitle);
	aboutBody.appendChild(paragraph1);
	aboutBody.appendChild(paragraph2);
	aboutBody.appendChild(paragraph3);
	aboutBody.appendChild(paragraph4);

	aboutContainer.appendChild(aboutImage);
	aboutContainer.appendChild(aboutBody);

	content.appendChild(aboutContainer);
}
