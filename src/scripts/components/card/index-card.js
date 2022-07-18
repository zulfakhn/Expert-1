import data from '../../../DATA.json';
import cardComponent from './card-template';
const cardContainer = document.querySelector('.card-container');

const createCard = (data) => {
  data.forEach((item) => {
    const card = cardComponent(item);
    cardContainer.insertAdjacentHTML('beforeend', card);
  });
};

createCard(data.restaurants);
