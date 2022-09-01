// ==UserScript==
// @name        Daily Comic Read
// @namespace   Violentmonkey Scripts
// @match       https://www.lootboy.de/comics/*
// @icon        https://i.imgur.com/UZC3xX0.png
// @grant       none
// @version     1.5
// @author      Hatakasy
// @description 9/1/2022, 10:55:47 AM
// ==/UserScript==

let = 0;

var dailyRead = setInterval(function () {
  if (
    !document.getElementsByClassName("LootBoyButton_lootBoyButton__3OylE")[1]
  ) {
    document.getElementsByClassName("image-gallery-right-nav")[0].click();
  } else {
    document
      .getElementsByClassName("LootBoyButton_lootBoyButton__3OylE")[1]
      .click();
    let++;
    if (let == 4) {
      clearInterval(dailyRead);
      alert("Daily Comics Done!");
    }
  }
}, 2000);
