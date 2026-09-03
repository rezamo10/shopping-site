import './style.css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menuWrapper = document.querySelector(".menu-wrapper");
const overlay = document.querySelector(".overlay");
const mailInput = document.querySelector("#mail-input");
const popMessage = document.querySelector(".pop-message");
const mailBtnMobile = document.querySelectorAll(".mail-btn-data");
const footerItem = document.querySelectorAll(".footer-item");
const categoryListBtn = document.querySelectorAll(".category-list-btn");
const panelContainers = document.querySelectorAll(".panel");
const menuItem = document.querySelectorAll(".menu-item");
const menu = document.querySelectorAll(".menu");
const menuBackButton = document.querySelectorAll(".menu-back-button");
let toastTimer;
let dataCategory;

menuItem.forEach((item) => {
	item.addEventListener("click", (e) => {
		// console.log(e.target.dataset.menuId)
		menu.forEach((menu) => {
			if (menu.dataset.menuId === "1") {
				menu.classList.remove("menu-translateX-left");
				menu.classList.add("menu-translateX");
			}
			if (e.target.dataset.menuId === menu.dataset.menuId) {
				menu.classList.remove("menu-translateX-right");
				menu.classList.add("menu-translateX-left");
			}
		});
	});
});
menuBackButton.forEach((item) => {
	item.addEventListener("click", () => {
		// item.preventDefault();
		menu.forEach((menu) => {
			menu.classList.remove("menu-translateX-left","menu-translateX");
			menu.classList.add("menu-translateX-right");
			if (menu.dataset.menuId === "1") {
				menu.classList.remove("menu-translateX");
				menu.classList.add("menu-translateX-left");
			}
		});
	});
});
function hideMenu() {
	menuWrapper.classList.remove("active");
	overlay.classList.remove("active");
}
function showMenu() {
	menuWrapper.classList.add("active");
	overlay.classList.add("active");
}
function checkEmail() {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let userMail = mailInput.value.trim();
	const isValid = emailRegex.test(userMail);
	popMessage.classList.toggle("success", isValid);
	popMessage.classList.toggle("fail", !isValid);
	popMessage.classList.add("show");
	mailInput.value = "";
	toggleBtn();
	clearTimeout(toastTimer);
	toastTimer = setTimeout(()=>{
		popMessage.classList.remove("show");
	},3000)
}
function toggleBtn(){
	mailBtnMobile.forEach(btn =>{
		btn.disabled = mailInput.value.trim() === "";
	})
}
toggleBtn();
function focusActiveTab(btn, behavior = "smooth") {
	const container = btn.closest("nav");
	const containerRect = container.getBoundingClientRect();
	const btnRect = btn.getBoundingClientRect();

	const scrollLeft =
		container.scrollLeft +
		(btnRect.left - containerRect.left) -
		(containerRect.width / 2) +
		(btnRect.width / 2);

	container.scrollTo({ left: scrollLeft, behavior });
}
footerItem.forEach(item =>{
	item.addEventListener("click", ()=>{
		const isAlreadyActive = item.classList.contains("is-active");
		footerItem.forEach(i => i.classList.remove("is-active"));
		if(!isAlreadyActive){
			item.classList.add("is-active");
		}
	})
})
categoryListBtn.forEach(btn =>{
	btn.addEventListener("click" , ()=>{
		categoryListBtn.forEach(b => b.classList.remove("active"));
		dataCategory = btn.dataset.category;
		btn.classList.add("active");

		panelContainers.forEach(panel =>{
			const isActive = dataCategory === panel.dataset.category;
			console.log(isActive);
			panel.classList.toggle("active", isActive);
		})
	})
})
const defaultActiveBtn = document.querySelector(".category-list-btn.active");
if (defaultActiveBtn) {
	dataCategory = defaultActiveBtn.dataset.category;
	focusActiveTab(defaultActiveBtn, "auto");
}
const swiper = new Swiper('.productsSwiper', {
	modules: [Navigation, Pagination],
	slidesPerView: 4,
	spaceBetween: 24,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		0: { slidesPerView: 1, spaceBetween: 16 },
		640: { slidesPerView: 2, spaceBetween: 16 },
		900: { slidesPerView: 3, spaceBetween: 24 },
		1024: { slidesPerView: 4, spaceBetween: 24 },
	},
});
const swiper2 = new Swiper('.benefits-swiper', {
	modules: [Navigation, Pagination],
	slidesPerView: 4,
	spaceBetween: 24,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		0: { slidesPerView: 1, spaceBetween: 16 },
		640: { slidesPerView: 2, spaceBetween: 16 },
		900: { slidesPerView: 3, spaceBetween: 24 },
	},
});
const swiper3 = new Swiper('.swiper-category-slide', {
	modules: [Navigation, Pagination],
	slidesPerView: 4,
	spaceBetween: 24,
	navigation: {
		nextEl: '.next-slide-btn',
		prevEl: '.prev-slide-btn',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		0: { slidesPerView: 2, spaceBetween: 16 },
		640: { slidesPerView: 3, spaceBetween: 16 },
		900: { slidesPerView: 5, spaceBetween: 24 },
		1024: { slidesPerView: 7.5, spaceBetween: 24},
	},
});
const swiper4 = new Swiper('.swiper-product-slide', {
	modules: [Navigation, Pagination],
	slidesPerView: 4,
	spaceBetween: 24,
	navigation: {
		nextEl: '.next-pro-btn',
		prevEl: '.prev-pro-btn',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		0: { slidesPerView: 1.5, spaceBetween: 16 },
		640: { slidesPerView: 3, spaceBetween: 16 },
		900: { slidesPerView: 4, spaceBetween: 24 },
		1024: { slidesPerView: 4, spaceBetween: 24},
		1280: { slidesPerView: 5.5, spaceBetween: 24},
	},
});
const swiper5 = new Swiper('.category-tabs', {
	modules: [Navigation, Pagination],
	slidesPerView: 4,
	spaceBetween: 24,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		0: { slidesPerView: 1.50, spaceBetween: 16 },
		640: { slidesPerView: 2, spaceBetween: 16 },
		900: { slidesPerView: 3, spaceBetween: 24 },
		1024: { slidesPerView: 4, spaceBetween: 24 },
	},
});
menuBtn.addEventListener("click", showMenu);
closeBtn.addEventListener("click", hideMenu);
mailInput.addEventListener("input", toggleBtn);
mailBtnMobile.forEach(btn => btn.addEventListener("click", checkEmail));
overlay.addEventListener("click", hideMenu);
