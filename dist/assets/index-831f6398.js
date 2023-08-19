(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();function o(t){return`
      <div class="column-4 mt-2">
        <div class="img-container">
            <img src="${t.image}" class="poster-img">
            <div class="bottom-left promo-offer">${t.discount}%</div>
        </div>
        <div class="group-container card-details">
            <span>${t.title}</span>
            <span>${t.price}$</span>
        </div>
      </div>`}const c={image:"./poster_1.png",discount:26,title:"Call of Duty",price:99.98},l=o(c),d={image:"./poster_2.png",discount:50,title:"Dishonerd",price:20},p=o(d),u={image:"./poster_3.png",discount:16,title:"Manastorm",price:129.99},m=o(u);document.querySelector("#app").innerHTML=`
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
    <div class="container justify-content-center mt-7">
      <div class="card-column">
        <div class="group-container">
          <span class="trendy">Trending</span>
          <button class="btn-primary">View all</button>
        </div>
        <div class="container p-0">
        ${l}
        ${p}
        ${m}
        </div>
      </div>
    </div>
`;
