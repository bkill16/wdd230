const pswd1 = document.querySelector("#pswd");
const pswd2 = document.querySelector("#pass-check");
const message = document.querySelector(".pswd-msg");

pswd2.addEventListener("focusout", checkSame);

function checkSame() {
	if (pswd1.value !== pswd2.value) {
		message.textContent = "Passwords do not match";
		message.style.visibility = "show";
        pswd1.value= "";
		pswd2.value = "";
		pswd1.focus();
	} else {
		message.style.display = "none";
	}
}