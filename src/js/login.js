const passwordInput = document.querySelector("#password");
const eyeIcon = document.querySelector("#eye-icon");
const eyeOffIcon = document.querySelector("#eye-off-icon");
const showPasswordBtn = document.querySelector("#show-password-btn");

function togglePasswordVisibility() {
	const isPassword = passwordInput.type === "password";
	passwordInput.type = isPassword ? "text" : "password";
	eyeOffIcon.classList.toggle("hidden", isPassword);
	eyeIcon.classList.toggle("hidden", !isPassword);
}

showPasswordBtn.addEventListener("click", togglePasswordVisibility);
