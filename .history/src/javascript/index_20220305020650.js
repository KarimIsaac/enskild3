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

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');