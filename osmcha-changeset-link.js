// ==UserScript==
// @name        Link OpenStreetMap changesets to OSMCha / Open in OSMCha
// @description Add an OSMCha link to changeset descriptions (on the very bottom)
// @match       https://www.openstreetmap.org/changeset/*
// @grant       none
// @author      FenyMufyd
// @run-at      document-start
// @icon        https://upload.wikimedia.org/wikipedia/commons/b/b0/Openstreetmap_logo.svg
// ==/UserScript==
function addOsmChalink()
{
  let select = document.querySelector(".secondary-actions:last-child")

  if(select)
  {
    let changeset = window.location.pathname.split('/');
    let link = '\n  ·\n  <a href = "https://osmcha.org/changesets/' + changeset[2] + '">osmcha</a>';
    select.innerHTML += link;
  }
}

window.addEventListener('DOMContentLoaded', function()
{
  addOsmChalink(); /* this runs once, when the page is ready */
});
