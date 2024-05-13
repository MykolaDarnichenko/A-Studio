// let menuBtn = document.querySelector('.menu-btn');
// let menu = document.querySelector('.mobile-menu');
// menuBtn.addEventListener('click', function(){
// 	menu.classList.toggle('active');
// })


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.mobile-menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  menu.classList.contains('active') ? menu.style.display = 'block' : menu.style.display ='none';
})