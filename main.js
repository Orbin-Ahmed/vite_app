import './style.scss'

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
      <div class="container justify-content-center pt-0 pb-0">
        <div class="card-text-column">
          <ul class="card-text">
            <li>PC</li>
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
`
