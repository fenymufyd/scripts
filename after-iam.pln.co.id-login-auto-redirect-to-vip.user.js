// ==UserScript==
// @name            auto redirect iam.pln after login to vendor invoice portal VIP
// @namespace       Violentmonkey Scripts
// @description     Always redirects to VIP after iam.pln login
// @include         *://iam.pln.co.id/*
// @run-at          document-start
// @grant           window.onurlchange
// @grant           GM_addStyle
// @require         http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @version         1.0
// @author          fenymufyd
// @copyright       2021, fenymufyd
// @license         MIT
// ==/UserScript==

// window.location.replace("https://vendorinvoice.pln.co.id/");
// // GM_xpath("//*['Vendor Invoici']*//ancestor::a").click();

(function () {
  "use strict";

  // Define the query selector pattern based on the HTML line

  function clickPopup() {
    // const popupz = document.querySelector("a[href='https://vendorinvoice.pln.co.id']")
    if (document.querySelector("a[href='https://vendorinvoice.pln.co.id']")) {
      // popupz.click();
      window.location.replace("https://vendorinvoice.pln.co.id/");
    }
  }

  // Check for the popup every 5 minutes (300,000 milliseconds)...
  const intervalId = setInterval(clickPopup, 100);

  // Stop checking when the popup is clicked or when you navigate away
  window.addEventListener("beforeunload", () => {
    clearInterval(intervalId);
  });
})();
