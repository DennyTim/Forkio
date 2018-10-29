function slider (slides) {
	let count = 0;
	let arr = [...slides];
	let clear = function() {
		arr.map(function(element) {element.classList.remove("carousel__item_active")})
	}
	this.next = function () {
		++count;
		if (count >= arr.length) count = 0;
		clear();
		arr[count].classList.add("carousel__item_active");
	}
	this.prev = function () {
		--count;
		if (count < 0) count = arr.length-1;
		clear();
		arr[count].classList.add("carousel__item_active");
	}
}

function burger(btn, menu, burgerList, menuList, activeLine) {
	btn.onclick = function() {
		btn.classList.toggle(burgerList);
		btn.children[0].classList.toggle(activeLine);
		if(btn.classList.contains(burgerList)) {
			menu.classList.add(menuList);
		} else {
			menu.classList.remove(menuList);
		}
	}
}


let obj = new slider(document.getElementById("slider").children);
document.getElementById("nextBtn").addEventListener("click", obj.next);
document.getElementById("prevBtn").addEventListener("click", obj.prev);

let burgerMenu = new burger(document.getElementById("navBtn"), document.getElementById("navMenu"), "nav-burger--active", "nav-list--active", "nav-burger__line_short");
