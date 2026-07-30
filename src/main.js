const navLinks = document.querySelectorAll(".nav-link");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector(".menu");
console.log(menuBtn)
navLinks.forEach(link => {
	link.addEventListener("click" , (e)=>{
		navLinks.forEach(l => l.classList.remove("active"));
		e.target.classList.add("active");
	})
})
function hideMenu() {
	menu.classList.remove("active");
}
function showMenu() {
	menu.classList.add("active");
}
menuBtn.addEventListener("click", showMenu);
closeBtn.addEventListener("click", hideMenu);