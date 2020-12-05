const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('go to http://localhost:3000/ to view it life' + port);
});