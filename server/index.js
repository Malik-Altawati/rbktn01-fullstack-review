const express = require('express');
let app = express();
const axios = require('axios');
const db = require("../database/index.js")

bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

//
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
//


app.post('/repos', function (req, res) {

  var user = req.body.user
var arr = []
axios.post(`http://api.github.com/users/${user}/repos`, { user })
      .then(res => {
        db.save(res.data)
      })
});


app.get('/repos', function (req, res) {

  // TODO - your code here!
  // This route should send back the top 25 repos
  db.Repo.find({owner:{login:"Malik-Altawati"}},(err,data)=>{
    console.log(data)
     res.send(data)
  })

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

