var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    //res.send("This is the server API page, you may access its services via the client app.");
    res.sendFile('dist/index.html');
});

// POST Route
async function  processURL( url ){

  const formData = new FormData();
  formData.append("key", process.env.API_KEY);
  formData.append("url", url);

  const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", {
    method: "POST",
    body: formData,
  });

  result = await response.json();
  console.log(result);
  return result;
}


// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});

console.log(`Your API key is ${process.env.API_KEY}`);


// GET quiery
app.get('/api/submit-url', (req, res) => {
    const url = req.query.url;
    console.log('Received URL:', url);
    
    // processing URL
    processURL(url).then(x => res.json(x));   
});

