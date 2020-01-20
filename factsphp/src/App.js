import React from 'react';
import BodyContent from './BodyContent';
import Header from './Header';
import './App.scss';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      factslist:[],
      searchkey:new Date().getTime()
    }
  }
  componentDidMount(){
    fetch(
      "http://thefactsite.000webhostapp.com/factsphp/get_facts.php",
      {
        body:JSON.stringify({
          old_count:0,
          lng:"En"
        }),
        method: 'POST',
      }
    )
    .then(response => response.json())
    .then(json => {
      this.setState({
        factslist:json,
        searchkey:new Date().getTime()
      })
    })
  }
  settingState=(val)=>{
    alert(val);
  }
  searchkeywordsearch=(keyword)=>{
    fetch(
      "http://thefactsite.000webhostapp.com/factsphp/search_get_facts.php",
      {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        body:JSON.stringify({
          keyword:keyword
        })
      }
    )
    .then(response => response.json())
    .then(json => {
      this.setState({
        factslist:json,
        searchkey:new Date().getTime()
      })
    })
  }
  changetheame =(val)=>{
    var rootid = document.getElementById("root");
    rootid.removeAttribute("class")
    if(val){
    rootid.classList.add("black-back-white-text");
    }else{
      rootid.classList.add("white-back-black-text");
    }
  }
  render(){
    return (
      <div className="App full_app white-back-black-text">
        <Router>
          <Header keywordsearch={(keyword)=>this.searchkeywordsearch(keyword)} theamechange={(val)=>this.changetheame(val)}/>
          <div className="app-content">
            <BodyContent key={this.state.searchkey} factslist={this.state.factslist}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
