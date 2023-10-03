const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		body.style.background = "#121212";
		body.style.color = "#FFFFFF";
		modeButton.textContent = "❎";
        
	} else {
		body.style.background = "#FFFFFF";
		body.style.color = "#121212";
		modeButton.textContent = "☑️";
	}
});