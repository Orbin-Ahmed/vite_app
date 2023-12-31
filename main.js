import './style.scss'
import generatePoster from './poster.js';


const data_1 = {
  image: './poster_1.png',
  discount: 26,
  title: 'Call of Duty',
  price: 99.98
};
const posterContent_1 = generatePoster(data_1);

const data_2 = {
  image: './poster_2.png',
  discount: 50,
  title: 'Dishonerd',
  price: 20
};
const posterContent_2 = generatePoster(data_2);

const data_3 = {
  image: './poster_3.png',
  discount: 16,
  title: 'Manastorm',
  price: 129.99
};
const posterContent_3 = generatePoster(data_3);

document.querySelector('#app').innerHTML = `
    <div class="background">
      <div class="container justify-content-between">
        <div class="column-2 logo"><img src="https://static.electronicfirst.com/website/uploads/2023/04/18/header_logo_glow_1681808133_643e5b05bcb0e.webp"></div>
        <div class="column-7 navbar align-baseline">
          <ul class="nav-list">
              <li><a href="#">Trending</a></li>
              <li><a href="#">Pre-orders</a></li>
              <li><a href="#">Upcoming</a></li>
              <li><a href="#">Support 24/7</a></li>
          </ul>
        </div>
        <div class="column-2 justify-content-end">
          <span class="material-symbols-outlined icon">shopping_cart</span>
          <span class="material-symbols-outlined icon border">person</span>
        </div>
      </div>
      <div class="container justify-content-center pt-0 pb-0 responsive">
        <div class="card-text-column">
          <ul class="card-text">
            <li onclick="toggle_card();">PC</li>
            <li>Playstation</li>
            <li>Xbox</li>
            <li>Nintendo</li>
            <li>
              <span class="material-symbols-outlined">
                search
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="container justify-content-evenly aling-items-end">
        <div class="column-3 promotional-banner">
          <p><span class="date-remaining">In 15 days</span></p>
          <p class="promo-msg">Starfield Digital Premium<br>Edition + Early Access</p>
          <p class="d-flex align-items-center">
            <span class="promo-offer">-25%</span>
            <span class="price">74.89$</span>
          </p>
        </div>
        <div class="early-access-column early-access-outer-border">
          <p class="early-access">+EARLY ACCESS</p>
        </div>
      </div>
    </div>
    <div class="container justify-content-center mt-7">
      <div class="card-column">
        <div class="group-container">
          <span class="trendy">Trending</span>
          <button class="btn-primary">View all</button>
        </div>
        <div class="container p-0 responsive-container">
        ${posterContent_1}
        ${posterContent_2}
        ${posterContent_3}
        </div>
      </div>
    </div>
    <div class="card-details-child">
      <p class="column-6" style="border-top-left-radius: 5px;border-bottom-left-radius: 5px;">Platform</p>
      <p class="column-6" style="border-top-right-radius: 5px;border-bottom-right-radius: 5px;">View all</p>
      <div class="column-4" style="margin-top: 1rem;">
        <div class="platform-logo"><img src="./steam.png">Steam</div>
        <div class="platform-logo"><img src="./battle_net.png">Battle.net</div>
        <div class="platform-logo"><img src="./micro_logo.png">Microsoft Store</div>
      </div>

      <div class="column-4" style="margin-top: 1rem;">
        <div class="platform-logo"><img src="./steam.png">Steam</div>
        <div class="platform-logo"><img src="./battle_net.png">Battle.net</div>
        <div class="platform-logo"><img src="./micro_logo.png">Microsoft Store</div>
      </div>

      <div class="column-4" style="margin-top: 1rem;">
        <div class="platform-logo"><img src="./steam.png">Steam</div>
        <div class="platform-logo"><img src="./battle_net.png">Battle.net</div>
        <div class="platform-logo"><img src="./micro_logo.png">Microsoft Store</div>
      </div>

      <p class="column-6" style="border-top-left-radius: 5px;border-bottom-left-radius: 5px;">Prepaid cards</p>
      <p class="column-6" style="border-top-right-radius: 5px;border-bottom-right-radius: 5px;display: flex;justify-content: end;">View all</p>
      <div class="column-4" style="margin-top: 1rem;">
        <div class="platform-logo"><img src="./steam.png">Steam</div>
      </div>

      <div class="column-4" style="margin-top: 1rem;">
        <div class="platform-logo"><img src="./battle_net.png">Steam</div>
      </div>

      <div class="column-4" style="margin-top: 1rem;">
        <div class="platform-logo"><img src="./micro_logo.png">Steam</div>
      </div>
    </div>
`