// Import our custom CSS
import '../scss/index.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

const disposables = document.querySelectorAll('.disposable');
const chevron = document.querySelector('.bi-chevron-down');
const tes1 = document.querySelectorAll('.tes1');
const tes2 = document.querySelectorAll('.tes2');
chevron.addEventListener('click', () => {
  disposables.forEach((disposable) => {
    disposable.classList.toggle('active');
  });
});
