import "./styles/reset.css";
import "./styles/global.css";
import loadHomePage from "./home/home";
import loadMenu from "./menu/menu";
import loadAboutPage from "./about/about";

const content = document.querySelector(".content");
const homeButton = document.querySelector("#homeButton");
const menuButton = document.querySelector("#menuButton");
const aboutButton = document.querySelector("#aboutButton");
const navButtons = document.querySelectorAll(".nav-button");

loadHomePage();

homeButton.addEventListener("click", renderHomePage);
menuButton.addEventListener("click", renderMenu);
aboutButton.addEventListener("click", renderAboutPage);

function renderHomePage() {
	clearContent();
	updateActiveButton(homeButton);
	loadHomePage();
}

function renderMenu() {
	clearContent();
	updateActiveButton(menuButton);
	loadMenu();
}

function renderAboutPage() {
	clearContent();
	updateActiveButton(aboutButton);
	loadAboutPage();
}

function clearContent() {
	content.replaceChildren();
}

function updateActiveButton(button) {
	console.log(navButtons);
	navButtons.forEach((btn) => {
		btn.classList.remove("active");
	});
	button.classList.add("active");
}
