import React from 'react';
import Fact from '../fact';
// import './index.scss';
import {
  Switch,
  Route
} from "react-router-dom";
//import Fact from '../fact';
class BodyContent extends React.Component {
  render(){
    return (
      <div className="BodyContent">
          <Switch>
            <Route path="/" exact><Fact factslist={this.props.factslist} >14</Fact></Route>
            {/* <Route path="/10"><Fact factslist={this.props.factslist}>10</Fact></Route>
            <Route path="/11"><Fact factslist={this.props.factslist}>11</Fact></Route>
            <Route path="/12"><Fact factslist={this.props.factslist} >12</Fact></Route>
            <Route path="/13"><Fact factslist={this.props.factslist}>13</Fact></Route> */}
          </Switch>
      </div>
    );
  }
}

export default BodyContent;
