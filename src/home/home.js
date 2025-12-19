import "./home.css";
import pizzaBanner from "../assets/images/pizza-banner.png";

export default function loadHomePage() {
	//DOM Cache
	const content = document.querySelector(".content");

	const homeContent = document.createElement("div");
	homeContent.classList.add("home-container");

	const title = document.createElement("h2");

	title.textContent = "Pizza worthy of the gods";

	const banner = document.createElement("img");
	banner.setAttribute("src", pizzaBanner);

	const hero = document.createElement("p");
	hero.textContent =
		"Forged in fire and patience, each pizza is crafted with slow-fermented dough, bold ingredients, and fearless flavor. This is not a meal. It’s a feast.";

	const orderNowButton = document.createElement("button");
	orderNowButton.classList.add("button");
	orderNowButton.textContent = "Order Now!";

	homeContent.appendChild(title);
	homeContent.appendChild(banner);
	homeContent.appendChild(hero);
	homeContent.appendChild(orderNowButton);

	content.appendChild(homeContent);
}
