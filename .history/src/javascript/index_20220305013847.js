const body = document.querySelector('body');

import fetchData from "./functions/fetchData.js";
const data = await fetchData();

// For all
import MobileMeny from './functions/mobileMeny.js';
import bookChallenge from './functions/bookChallenge.js';
MobileMeny();
bookChallenge(data);

// For index
import { renderIndex } from './functions/renderChallenges.js';
import links from "./functions/links.js";
if (body.className == "index") {
  renderIndex(data);
  links();
}

// For challenge
import { renderChallenges } from './functions/renderChallenges.js';
import enableFilters from './functions/Filter/enableFilters.js';
if (body.className == "challengesPage") {
  enableFilters(data);
  renderChallenges(data);
};

var express = require('express');
var app = express();

app.listen(3000, function() {
    console.log('Listening on port 3000');
});

//Change the './' to point to the root of your angular app
app.use(express.static(path.resolve('./')));

//Send everything to your index.html page
app.get('/*', function(req, res) {
  res.sendFile(path.resolve('./index.html'));
 });