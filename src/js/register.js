const emailInput = document.querySelector('#email');
const repeatPasswordInput = document.querySelector('#repeat-password');
const passwordInput = document.querySelector('#password');
const eyeIcon = document.querySelectorAll('.eye-icon');
const eyeOffIcon = document.querySelectorAll('.eye-off-icon');
const showPasswordBtn = document.querySelectorAll('.show-password-btn');
const strengthBar = document.querySelector("#strength-bar");
let debounceTimer;

function checkEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const checkEmail = emailRegex.test(email);
	console.log(email);
	emailInput.classList.remove("border-neutral-200", "border-green-500", "border-red-500");
	if (email === "") {
		emailInput.classList.add("border-neutral-200");
	} else if (checkEmail) {
		emailInput.classList.add("border-green-600");
	} else {
		emailInput.classList.add("border-red-500");
	}
}

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

function showPassword(password, repeat) {
	const isPassword = passwordInput.type === 'password' && repeat.type === 'password';
	password.type = isPassword ? 'text' : 'password';
	repeat.type = isPassword ? 'text' : 'password';
	console.log(passwordInput);
	eyeIcon.forEach(icon => icon.classList.toggle('hidden', !isPassword));
	eyeOffIcon.forEach(icon => icon.classList.toggle('hidden', isPassword));
}

function checkPassword(password, repeated) {
	if (password === repeated) {
		passwordInput.className = "w-full border border-green-500 rounded-lg p-2.5 px-11 shadow-xs outline-none text-xs";
		repeatPasswordInput.className = "w-full border border-green-500 rounded-lg p-2.5 px-11 shadow-xs outline-none text-xs";
	} else {
		passwordInput.className = "w-full border border-red-500 rounded-lg p-2.5 px-11 shadow-xs outline-none text-xs";
		repeatPasswordInput.className = "w-full border border-red-500 rounded-lg p-2.5 px-11 shadow-xs outline-none text-xs";
	}
}

showPasswordBtn.forEach(btn => btn.addEventListener('click', () => showPassword(passwordInput, repeatPasswordInput)));
passwordInput.addEventListener("input", (e) => {
	updatePasswordUI(e.target.value);
});
emailInput.addEventListener("input", (e) => {
	checkEmail(e.target.value);
});

repeatPasswordInput.addEventListener('input', () => {
	clearTimeout(debounceTimer);
	debounceTimer = setTimeout(() => {
		checkPassword(passwordInput.value, repeatPasswordInput.value);
	}, 500);
});