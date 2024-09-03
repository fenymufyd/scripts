// ==UserScript==
// @name            Vendor Invoice Portal VIP PLN Anti AFK
// @namespace       Violentmonkey Scripts
// @version         1.0
// @description     Automatically clicks on a afk popup with a specific CSS class.
// @include         https://vendorinvoice.pln.co.id/*
// @grant           none
// @run-at          document-start
// @require         https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js
// @version         1.0
// @author          fenymufyd
// @copyright       2024, fenymufyd
// @license         MIT
// ==/UserScript==

(function () {
  "use strict";

  // Define the query selector pattern based on the HTML line

  function clickPopup() {
    const popupz = document.querySelector("button#loginbtn");
    if (popupz) {
      popupz.click();
    }

    let dest = Array.from(
      document.querySelectorAll("span.MuiButton-label")
    ).find((el) => el.textContent === "Lanjutkan");
    if (dest) {
      dest.click();
    }
  }

  // Check for the popup every 5 minutes (300,000 milliseconds)
  const intervalId = setInterval(clickPopup, 500);

  // Stop checking when the popup is clicked or when you navigate away
  window.addEventListener("beforeunload", () => {
    clearInterval(intervalId);
  });
})();
