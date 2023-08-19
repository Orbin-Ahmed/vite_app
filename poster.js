
export default function generatePoster(data) {
    const poster = `
      <div class="column-4 mt-2">
        <div class="img-container">
            <img src="${data.image}" class="poster-img">
            <div class="bottom-left promo-offer">${data.discount}%</div>
        </div>
        <div class="group-container card-details">
            <span>${data.title}</span>
            <span>${data.price}$</span>
        </div>
      </div>`;
    
    return poster;
}