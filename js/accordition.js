const faqList = document.querySelectorAll('.faq-item');
const faqWrapper = document.querySelector('.faq-wrapper');

// console.log(faqList);

faqWrapper.addEventListener('click', (e) => {
  const target = e.target;
  const parent = e.target.closest('.faq-item');

  if (target.classList.contains('faq-title')) {
      faqList.forEach((item) => {
        if (item === parent) {
      item.classList.toggle('active');
    } else {
      item.classList.remove('active');
    }
  }) 
  }
})