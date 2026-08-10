import './style.css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const navLinks = document.querySelectorAll(".nav-link");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector(".menu");
const mailInput = document.querySelector("#mail-input");
const popMessage = document.querySelector(".pop-message");
const mailBtnMobile = document.querySelectorAll(".mail-btn-data");
const footerItem = document.querySelectorAll(".footer-item");
const categoryListBtn = document.querySelectorAll(".category-list-btn");
const panelContainers = document.querySelectorAll(".panel");
let toastTimer;
let dataCategory;

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
