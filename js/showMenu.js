var menuObj = document.getElementById('navigationMenu');
var isMenuOpen = false;

function showMenu() {
	isMenuOpen = !isMenuOpen;

	if (isMenuOpen) {
		menuObj.style.display = "flex";
		// menuObj.classList.toggle("open");
	} else {
		menuObj.style.display = "none";
		// menuObj.classList.toggle("close");
	}
}