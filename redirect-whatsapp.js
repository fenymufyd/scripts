// ==UserScript==
// @name        redirect whatsapp.com to web.whatsapp.com
// @description my dumb brain keeps visiting the company landing page link instead of the main app so i made this to redirect whatsapp.com to the web.whatsapp.com
// @namespace   Violentmonkey Scripts
// @match       https://*.whatsapp.net/*
// @match       https://*.whatsapp.com/*
// @exclude     https://web.whatsapp.com/*
// @grant       none
// @version     1.0
// @author      fenymufyd
// @copyright   2021, fenymufyd
// @license     MIT
// ==/UserScript==

location.href = "https://web.whatsapp.com";
