import React from 'react';
// import './index.scss';
 //import HeaderLink from '../HeaderLink';
import {
  NavLink
} from "react-router-dom";

class HeaderLinks extends React.Component {
  render(){
    return (
      <div className="Header-links-holder">
        {/* <Router> */}
          <NavLink to="/10" activeStyle={{ color: 'red' }}>link1</NavLink>
          <NavLink to="/11" activeStyle={{ color: 'red' }}>link2</NavLink>
          <NavLink to="/12" activeStyle={{ color: 'red' }}>link3</NavLink>
          <NavLink to="/13" activeStyle={{ color: 'red' }}>link4</NavLink>
          
        {/* </Router> */}
      </div>
    );
  }
}
// class HeaderLink extends React.Component{
//   render(){
//     var { children } = this.props;
//   return <h2>Home {children}</h2>;
//   }
// }
export default HeaderLinks;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ;
