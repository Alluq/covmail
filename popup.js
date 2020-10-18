// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let addLine = document.getElementById('addText');

const potential_fillins = [
  //Fill in 1
  [
    "staying safe",
    "sheltered in place",
    "6 feet from the nearest stranger",
    "stocked with toilet paper for the next 20 years",
    "eating your daily dose of vitamin gummies",
    "washing your hands for 20 seconds with warm water and lathered soap",
    "drinking litres of hand sanitizers with final concentration of 80% ethanol or 75% isopropyl alcohol",
    "making masks a true fashion statement",
    "staying positive and testing negative", 
    "spraying lysol on yourself like perfume",
    "wiping every countertop available with alcohol wipes",
    "making the switch from tissues to lysol wipes",
    "disinfecting your life on a bi-hourly basis",
    "doing Chloe Ting workouts every other month to convince yourself you are fit",
    "mindlessly scrolling through tiktok",
    "learning how to renegade",
    "baking loaves of banana bread that no one wants",
    "eating loaves of banana bread all of your friends sent you",
    "stealing all the flour and yeast from grocery store shelves",
    "enjoying pantless meetings",
    "jazzing up your zoom backgrounds",
    "drinking dalgona coffee every morning",
    "fermenting sourdough starters under your desk",
    "spending your life savings on delivery apps",
    "eating takeout every other day to \“support local\”",
    "getting scanned in medbay",
    "hiding in the vents of electrical",
    "planning extensive vacation plans for 2026",
    "starting a 12 step korean skincare routine",
    "not forgetting what it feels like to be loved",
    "not cutting your bangs on impulse"

  ],
  //Fill in 2
  [
    "unusual",
    "unprecedented",
    "extraordinary",
    "inconceivable",
    "unfamiliar",
    "unparalleled",
    "unmatched",
    "built different",
    "~novel~",
    "unmatched",
    "desolate",
    "uncertain",
    "chaotic",
    "terrifying",
    "baleful",
    "arcadian",
    "incendiary",
    "platitudinous",
    "trying",
    "challenging",
    "demanding",
    "exigent",
    "heavy",
    "laborious",
    "grueling",
    "grindy",
    "back-breaking"

  ],
  //Fill in 3
  [
    "nooooo don't kill yourself you're so sexy aha"
  ]
]

const messages = [];

addLine.onclick = function(element) {
  let fillin = [potential_fillins[0][Math.floor(Math.random() * potential_fillins[0].length)],
                potential_fillins[1][Math.floor(Math.random() * potential_fillins[1].length)],
                potential_fillins[1][Math.floor(Math.random() * potential_fillins[1].length)]];
  // for(let i = 0; i < potential_fillins.length; i++){
  //   fillin.push(potential_fillins[0][Math.floor(Math.random() * potential_fillins[i].length)]);
  // }
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
              {code: 'document.querySelectorAll(\'[aria-label="Message Body"]\')[1].innerHTML += "I hope you are ' 
              +  fillin[0]  + " in these " + fillin[1] + ' and ' + fillin[2] + ' times.";'});
        // {code: 'document.getElementsByClassName("Am Al editable LW-avf tS-tW")[0].innerHTML +=' + 
        // "I hope you are " + fillin[0] + " in these " + fillin[1] + " and " + fillin[2] + " times.\n"});
  });
};
