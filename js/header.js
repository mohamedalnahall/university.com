// header.js
let themeChagner = document.getElementById("theme_changer");
let logo = document.getElementById("logo");

themeChagner.onclick = function () {
	if (document.body.getAttribute("data-theme") === "light") {
		document.body.setAttribute("data-theme", "dark");
	} else {
		document.body.setAttribute("data-theme", "light");
	}

	if (logo.getAttribute("src") === "imgs/logo.png")
		logo.setAttribute("src", "imgs/logo-dark.png");
	else if (logo.getAttribute("src") === "imgs/logo-dark.png")
		logo.setAttribute("src", "imgs/logo.png");
};

let menu_bar = document.getElementById("menu_bar");
let menu = document.getElementById("menu");
let out_menu = document.getElementById("out_menu");
let exit_menu = document.getElementById("exit_menu");

menu_bar.onclick = function () {
	menu.style.left = "0";
	menu_bar.style.visibility = "hidden";
	out_menu.style.display = "block";
};

out_menu.onclick = function () {
	menu.style.left = "-20rem";
	menu_bar.removeAttribute("style");
	out_menu.style.display = "none";
};

exit_menu.onclick = function () {
	menu.style.left = "-20rem";
	menu_bar.removeAttribute("style");
	out_menu.style.display = "none";
};
