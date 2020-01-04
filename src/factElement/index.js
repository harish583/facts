import React from 'react';
// import './index.scss';

class FactElement extends React.Component {
  constructor(props){
    super(props);
    this.state={
      content:this.props.children
    }
  }
  render(){
    var con = this.state.content;
    return (
      <li className="Fact-element-container">
        {con && con.fact}
      </li>
    );
  }
}

export default FactElement;
