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
menuBtn.addEventListener("click", showMenu);
closeBtn.addEventListener("click", hideMenu);