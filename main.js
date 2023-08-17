import './style.scss'

document.querySelector('#app').innerHTML = `
<div class="row">
      <div class="col-3 logo"><img src="https://static.electronicfirst.com/website/uploads/2023/04/18/header_logo_glow_1681808133_643e5b05bcb0e.webp"></div>
      <div class="col-3 navbar">
        <ul class="nav-list">
            <li><a href="#">Trending</a></li>
            <li><a href="#">Pre-orders</a></li>
            <li><a href="#">Upcoming</a></li>
            <li><a href="#">Support 24/7</a></li>
        </ul>
      </div>
      <div class="col-3 justify-content-end">
        <span class="material-symbols-outlined icon">shopping_cart</span>
        <span class="material-symbols-outlined icon border">person</span>
      </div>
    </div>
`
