// ==UserScript==
// @name            Link OpenStreetMap username to HDYC
// @description     Add a direct Neis HDYC link to user profile page, to lookup their contribution statistics
// @match           https://www.openstreetmap.org/user/*
// @exclude-match   https://www.openstreetmap.org/user/*/*
// @grant           none
// @author          FenyMufyd
// @run-at          document-start
// @icon            https://upload.wikimedia.org/wikipedia/commons/b/b0/Openstreetmap_logo.svg
// @version         1.0
// @author          fenymufyd
// @copyright       2022, fenymufyd
// @license         MIT
// ==/UserScript==
function addHDYClink() {
  let select = document.querySelector(".clearfix.secondary-actions");

  if (select) {
    let username = window.location.pathname.split("/");
    let link =
      '<div style="color="><li><a href = "https://hdyc.neis-one.org/?' +
      username[2] +
      '">neis-one.org : HowDidYouContribute</a></li>' +
      '<li><a href = "https://yosmhm.neis-one.org/?' +
      username[2] +
      '">neis-one.org : Where Did You Contribute (OSM Heatmap)</a></li></div>';
    select.innerHTML += link;
  }
}

window.addEventListener("DOMContentLoaded", function () {
  addHDYClink(); /* this runs once, when the page is ready */
});
