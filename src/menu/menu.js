import "./menu.css";

import valhallaPepperoni from "../assets/images/valhalla-pepperoni.webp";
import thorsHammer from "../assets/images/thors-hammer.webp";
import freyjasGarden from "../assets/images/pizza-banner.webp";
import odinsEye from "../assets/images/odins-eye.webp";
import midgardClassig from "../assets/images/midgard-classic.webp";
import lokisTrick from "../assets/images/lokis-trick.webp";
import fenrirFeast from "../assets/images/fenrir-feast.webp";
import asgartSupreme from "../assets/images/asgard-supreme.webp";
import bifrostBianca from "../assets/images/bifrost-bianca.webp";
import njordsBounty from "../assets/images/njords-bounty.webp";
import athenasGrove from "../assets/images/athenas-grove.webp";

import ragnarok from "../assets/images/ragnarok.webp";

const menuItems = [
	{
		photo: valhallaPepperoni,
		name: "Valhalla Pepperoni",
		description: "Classic pepperoni, fire-baked, unapologetic.",
		price: 15,
	},
	{
		photo: thorsHammer,
		name: "Thor’s Hammer",
		description: "Smoked meats, roasted garlic, and thunder.",
		price: 35,
	},
	{
		photo: freyjasGarden,
		name: "Freyja’s Garden",
		description: "Seasonal vegetables, herbs, and olive oil.",
		price: 15,
	},
	{
		photo: odinsEye,
		name: "Odin’s Eye",
		description:
			"San Marzano tomatoes, fresh mozzarella, basil, and olive oil.",
		price: 25,
	},
	{
		photo: lokisTrick,
		name: "Loki’s Trick",
		description: "Sweet heat with chili honey, pepperoni, and ricotta.",
		price: 15,
	},
	{
		photo: midgardClassig,
		name: "Midgard Classic",
		description: "Mozzarella, tomato sauce, and a perfectly crisp crust.",
		price: 25,
	},
	{
		photo: ragnarok,
		name: "Ragnarök",
		description: "Spicy sausage, fire-roasted peppers, and molten cheese.",
		price: 35,
	},
	{
		photo: fenrirFeast,
		name: "Fenrir Feast",
		description: "Pulled pork, smoked bacon, and caramelized onions.",
		price: 25,
	},
	{
		photo: bifrostBianca,
		name: "Bifrost Bianca",
		description: "White sauce, mozzarella, garlic, and herbs.",
		price: 15,
	},
	{
		photo: asgartSupreme,
		name: "Asgard Supreme",
		description: "Pepperoni, sausage, mushrooms, onions, and olives.",
		price: 15,
	},
	{
		photo: njordsBounty,
		name: "Njord’s Bounty",
		description:
			"Fire-roasted shrimp, garlic butter, fresh herbs, and lemon.",
		price: 35,
	},
	{
		photo: athenasGrove,
		name: "Athena’s Grove",
		description: "Fresh spinach, black olives, mozzarella, and olive oil.",
		price: 15,
	},
];

export default function loadMenu() {
	const content = document.querySelector(".content");

	const menuContainer = document.createElement("div");
	menuContainer.classList.add("menu-container");

	const title = document.createElement("h2");
	title.textContent = "Eat Like a God";

	const menuDescription = document.createElement("p");
	menuDescription.textContent =
		'"The ovens burn, the feast stands ready, and only the bold will claim a slice worthy of legend."';

	const menu = document.createElement("div");
	menu.classList.add("menu");

	menuItems.forEach((pizza) => {
		const pizzaContainer = document.createElement("div");
		pizzaContainer.classList.add("pizza-container");

		const pizzaPhoto = document.createElement("img");
		pizzaPhoto.setAttribute("src", pizza.photo);
		pizzaPhoto.classList.add("pizza-photo");

		const pizzaName = document.createElement("h3");
		pizzaName.textContent = pizza.name;
		pizzaName.classList.add("pizza-name");

		const pizzaPrice = document.createElement("p");
		pizzaPrice.textContent = `$${pizza.price}`;
		pizzaPrice.classList.add("pizza-price");

		const pizzaDescription = document.createElement("p");
		pizzaDescription.textContent = pizza.description;
		pizzaDescription.classList.add("pizza-description");

		const orderNowButton = document.createElement("button");
		orderNowButton.textContent = "Order Now!";
		orderNowButton.classList.add("button");

		pizzaContainer.appendChild(pizzaPhoto);
		pizzaContainer.appendChild(pizzaName);
		pizzaContainer.appendChild(pizzaPrice);
		pizzaContainer.appendChild(pizzaDescription);
		pizzaContainer.appendChild(orderNowButton);

		menu.appendChild(pizzaContainer);
	});

	menuContainer.appendChild(title);
	menuContainer.appendChild(menuDescription);
	menuContainer.appendChild(menu);

	content.appendChild(menuContainer);
}
