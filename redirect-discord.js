// ==UserScript==
// @name        discord.com redirect to main app
// @description my dumb brain keeps visiting the company landing page link instead of the main app so i made this to redirect discord.com straight to the webapp
// @namespace   Violentmonkey Scripts
// @match       https://discord.com/
// @exclude     https://discord.com/*/*
// @grant       none
// @version     1.0
// @author      FenyMufyd
// ==/UserScript==

location.href = 'https://discord.com/app';