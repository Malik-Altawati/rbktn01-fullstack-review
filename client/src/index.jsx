import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';


const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    //
    //
    axios.post('/repos', {
      user: term
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


// const client_id = "Iv1.d4fe6fc638adc90e";
// const client_secret = "8d7bbc7e49efcc3cf48afdc3d9600672c18fcef7";
// var user = term
// const fetchUsers = async (user) => {
//   const api_call = await fetch(`http://api.github.com/users/${user}/repos?client_id=${client_id}&client_secret=${client_secret}`);

//   const data = await api_call.json();
//   return {
//     data
//   }
// };

//   const showData = () => {
//     fetchUsers(user).then((Dayta) => {
//        for(var i = 0 ; i < Dayta.data.length; i++){
//          this.setState({repos:[...this.state.repos,Dayta.data[i].name]})
//       }
//      console.log(this.state.repos)
//     });
// }

// showData();
    console.log(`${term} was searched`);
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
    <h2></h2>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));