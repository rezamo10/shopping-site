const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const strengthBar = document.querySelector("#strength-bar");
const eyeIcon = document.querySelector("#eye-icon");
const eyeOffIcon = document.querySelector("#eye-off-icon");
const showPasswordBtn = document.querySelector("#show-password-btn");
const levels = [
	{width: "0%", color: ""},
	{width: "25%", color: "bg-red-500"},
	{width: "50%", color: "bg-orange-500"},
	{width: "75%", color: "bg-yellow-500"},
	{width: "100%", color: "bg-green-600"},
];

function getPasswordStrength(password) {
	if (!password) return 0;
	const checks = [
		password.length >= 8,
		/[a-z]/.test(password),
		/[A-Z]/.test(password),
		/[0-9]/.test(password),
		/[^a-zA-Z0-9]/.test(password),
	];
	const score = checks.filter(Boolean).length;
	if (score <= 1) return 1;
	if (score === 2) return 2;
	if (score <= 4) return 3;
	return 4;

}

function updatePasswordUI(password) {
	const score = getPasswordStrength(password);
	const level = levels[score];

	strengthBar.className = 'absolute h-1 bottom-0 transition-all duration-300 ease-out';
	if (level.color) strengthBar.classList.add(level.color);

	strengthBar.style.width = level.width;
}

function togglePasswordVisibility() {
	const isPassword = passwordInput.type === "password";
	passwordInput.type = isPassword ? "text" : "password";
	eyeOffIcon.classList.toggle("hidden", isPassword);
	eyeIcon.classList.toggle("hidden", !isPassword);
}
function checkEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const checkEmail = emailRegex.test(email);
	console.log(email);
	emailInput.classList.remove("border-neutral-200","border-green-500", "border-red-500");
	if(email === ""){
		emailInput.classList.add("border-neutral-200");
	}else if(checkEmail){
		emailInput.classList.add("border-green-600");
	}else {
		emailInput.classList.add("border-red-500");
	}
}
emailInput.addEventListener("input", (e) => {
	checkEmail(e.target.value);
})
passwordInput.addEventListener("input", (e) => {
	updatePasswordUI(e.target.value);
});
showPasswordBtn.addEventListener("click", togglePasswordVisibility);
