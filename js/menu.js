let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.mobile-menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  
    if (!menu.classList.contains('active')) {
    contactTitle.classList.remove('active');
  }
  // menu.classList.contains('active') ? menu.style.display = 'block' : menu.style.display ='none';
})

const contactTitle = document.querySelector('.contact-title');

contactTitle.addEventListener('click', () => {
  contactTitle.classList.toggle('active');
})