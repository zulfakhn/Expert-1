const cardComponent = (cardItem) => `
    <div class="card" tabindex="0">
    <div class="card-image">
    <img src=${cardItem.pictureId} alt="restaurant food" />
    </div>
    <div class="card-content">
    <h3>${cardItem.name}</h3>
    <p class="card-description">
        ${cardItem.description.substring(0, 100)}...
    </p>
    <div class="card-footer">
    <p class="card-rating"><ion-icon name="star"></ion-icon>${
      cardItem.rating
    }</p>
    </div>
    </div>
    </div>
`;

export default cardComponent;
