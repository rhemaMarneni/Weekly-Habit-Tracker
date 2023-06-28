const circles = document.querySelectorAll(".circle")

circles.forEach((element) => {
	element.addEventListener("click", () => {
		element.classList.toggle("active")
	})
})
