function slider (slides) {
	let count = 0;
	let arr = [...slides];
	let clear = function() {
		arr.map(function(element) {element.classList.remove("active")})
	}
	this.next = function () {
		++count;
		if (count >= arr.length) count = 0;
		clear();
		arr[count].classList.add("active");
	}
	this.prev = function () {
		--count;
		if (count < 0) count = arr.length-1;
		clear();
		arr[count].classList.add("active");
	}
}
let obj = new slider(document.getElementById("slider").children);
document.getElementById("nextBtn").addEventListener("click", obj.next);
document.getElementById("prevBtn").addEventListener("click", obj.prev);
