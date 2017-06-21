function wbh_mobilebtn(){
	let menu = document.getElementById('headermenu');

	if (menu.classList.contains('mobilemenushow')){
		menu.classList.remove('mobilemenushow');
	}else{
		menu.classList.add('mobilemenushow');
	}
}

let btn = document.getElementById('mobilemenu');
btn.onclick = wbh_mobilebtn;