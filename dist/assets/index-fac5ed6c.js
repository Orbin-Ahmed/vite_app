(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();document.querySelector("#app").innerHTML=`
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
`;
