import React from 'react';
import Fact from '../fact';
// import './index.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect,
  NavLink
} from "react-router-dom";
//import Fact from '../fact';
class BodyContent extends React.Component {
  render(){
    var list = this.props.factslist;
    return (
      <div className="BodyContent">
        <div className="fixed">
          <ul className="content-links">
            {list.length>0 && list.map((ele,i)=>{
              var url = ele.typeName;
              return <li key={i} className="jump-class">
                <NavLink to={url.replace(/ /g,'')} activeClassName="link-selected">{ele.typeName}</NavLink>
              </li>
            })}
          </ul>
        </div>
        
        <Redirect from="/" to="/UniqueFactsAboutAnimals" /> 
          <Switch>
            
            {list.length>0 && list.map((ele,i)=>{
              // if(i==0){
              //   // return <Route key={i} path='/' exact={true}>
              //   //   <Redirect
              //   //     to={{
              //   //       pathname: "/UniqueFactsAboutAnimals",
              //   //     }}
              //   //   ><Fact factslist={ele} ></Fact></Redirect>
              //   // </Route> 
              // }
              return <Route key={i} path={'/' + ele.typeName.replace(/ /g,'')}><div><Fact factslist={ele} ></Fact></div></Route>
            })}
          </Switch>
      </div>
    );
  }
}

export default BodyContent;
