const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const db = mongoose.connection;

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
    name: String,
    html_url: String,
    owner:{login: String}
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (array) => {
Repo.create(array,(err,data)=>{

})
}

module.exports = {save,Repo}