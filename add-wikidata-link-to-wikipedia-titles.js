// ==UserScript==
// @name        add wikidata link to wikipedia titles
// @namespace   Violentmonkey Scripts
// @match       https://*.wikipedia.org/wiki/*
// @grant       none
// @version     1.0 11/25/2023, 11:44:32 PM
// @author      fenymufyd
// @copyright   2023, fenymufyd
// @license     MIT
// ==/UserScript==
let wd = document
  .querySelector("#t-wikibase>a")
  .getAttribute("href")
  .split("/")
  .pop();
let title = document.querySelector("#firstHeading>span");
title.innerHTML +=
  " " +
  wd +
  ' <a href="https://www.wikidata.org/wiki/Special:EntityPage/' +
  wd +
  '">wdlink</a>';
