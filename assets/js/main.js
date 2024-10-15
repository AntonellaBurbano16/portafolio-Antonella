// Navigation Bar Function
function myMenuFunction() {
	var menuBtn = document.getElementById("myNavMenu");
	var navListBtn = document.getElementsByClassName("nav-link");
	if (menuBtn.className === "nav-menu") {
		menuBtn.className += " responsive";
	} else {
		menuBtn.className = "nav-menu";
	}
	if (navListBtn.className === "nav-link") {
		navListBtn.className += " responsive";
	} else {
		navListBtn.className = "nav-link";
	}
}

// Add shadow on navigation bar while scrolling
window.onscroll = function () {
	HeaderShadow();
};

function headerShadow() {
	const navHeader = document.getElementById("header");

	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
		navHeader.style.height = "70px";
		navHeader.style.lineHeight = "70px";
	} else {
		navHeader.style.boxShadow = "none";
		navHeader.style.height = "90px";
		navHeader.style.lineHeight = "90px";
	}
}

//  Skills
const skillsContent = document.getElementsByClassName("skills__content"),
	skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
	let itemClass = this.parentNode.className;

	for (i = 0; i < skillsContent.length; i++) {
		skillsContent[i].className = "skills__content skills__close";
	}
	if (itemClass === "skills__content skills__close") {
		this.parentNode.className = "skills__content skills__open";
	}
}

skillsHeader.forEach((el) => {
	el.addEventListener("click", toggleSkills);
});
