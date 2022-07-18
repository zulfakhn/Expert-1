import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './components/card/index-card';

const skipToContent = document.querySelector('.skip-to-content');
skipToContent.addEventListener('click', () => {
  document.querySelector('#content').scrollIntoView({ behavior: 'smooth' });
  skipToContent.blur();
});

const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu');
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
