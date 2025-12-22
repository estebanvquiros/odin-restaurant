import "./styles/reset.css";
import "./styles/global.css";
import loadHomePage from "./home/home";
import loadMenu from "./menu/menu";
import loadAboutPage from "./about/about";

const content = document.querySelector(".content");
const homeButton = document.querySelector("#homeButton");
const menuButton = document.querySelector("#menuButton");
const aboutButton = document.querySelector("#aboutButton");

loadHomePage();

homeButton.addEventListener("click", renderHomePage);
menuButton.addEventListener("click", renderMenu);
aboutButton.addEventListener("click", renderAboutPage);

function renderHomePage() {
	clearContent();
	loadHomePage();
}

function renderMenu() {
	clearContent();
	loadMenu();
}

function renderAboutPage() {
	clearContent();
	loadAboutPage();
}

function clearContent() {
	content.replaceChildren();
}
