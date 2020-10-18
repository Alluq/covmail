// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let addLine = document.getElementById('addText');

chrome.storage.sync.get('color', function(data) {
  addLine.style.backgroundColor = data.color;
  addLine.setAttribute('value', data.color);
});

addLine.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.getElementById(":tc") = "Ripperoni"'});
  });
};
