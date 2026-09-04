import {supabase} from './supabaseClient.js';
import {showAlert} from './utils/sweetalert.js';

const passwordInput = document.querySelector("#password");
const eyeIcon = document.querySelector("#eye-icon");
const eyeOffIcon = document.querySelector("#eye-off-icon");
const showPasswordBtn = document.querySelector("#show-password-btn");
const emailInput = document.querySelector("#email");
const loginBtn = document.querySelector("#login-btn");

function togglePasswordVisibility(e) {
	e.preventDefault();
	const isPassword = passwordInput.type === "password";
	passwordInput.type = isPassword ? "text" : "password";
	eyeOffIcon.classList.toggle("hidden", isPassword);
	eyeIcon.classList.toggle("hidden", !isPassword);
}

async function loginData() {
	const email = emailInput.value.trim();
	const password = passwordInput.value.trim();
	if (!email || !password) {
		showAlert(
			"Invalid email or password",
			"error",
			"Ok"
		);
		return;
	}
	const {data, error} = await supabase.auth.signInWithPassword({email, password});
	if(error){
		showAlert(
			"Invalid email or password",
			"error",
			"Ok"
		)
		return
	}
	window.location.href = 'index.html'
}

showPasswordBtn.addEventListener("click", togglePasswordVisibility);
loginBtn.addEventListener("click" , loginData)