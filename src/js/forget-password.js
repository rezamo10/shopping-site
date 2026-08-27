const emailInput = document.querySelector("#email");
const confirmBtn = document.querySelector("#confirmBtn");
const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.fg-password');
const timer = document.getElementById("timer");
const resendBtn = document.getElementById("resendBtn");

function checkUserEmail(input) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const checkEmail = emailRegex.test(input);
	if (checkEmail) {
		confirmBtn.disabled = false;
		confirmBtn.classList.remove('cursor-not-allowed', 'opacity-50');
		confirmBtn.classList.add('cursor-pointer');
	} else {
		confirmBtn.disabled = true;
		confirmBtn.classList.add('cursor-not-allowed', 'opacity-50');
		confirmBtn.classList.remove('cursor-pointer');
	}
}

confirmBtn.addEventListener('click', () => {
	slider.style.transform = 'translateX(-50%)';

	dots[0].classList.remove('active');
	dots[1].classList.add('active');
	startTimer();
});

emailInput.addEventListener("input", (e) => {
	checkUserEmail(e.target.value);
});
function startTimer() {
	let timeLeft = 120;

	const countdown = setInterval(() => {
		const minutes = Math.floor(timeLeft / 60);
		const seconds = timeLeft % 60;

		timer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

		timeLeft--;

		if (timeLeft < 0) {
			clearInterval(countdown);

			timer.classList.add("hidden");
			resendBtn.classList.remove("hidden");
		}
	}, 1000);
}
confirmBtn.addEventListener("click", () => {
	console.log(1);
});