import React from 'react';
// import './index.scss';

import FactElement from '../factElement';

class Fact extends React.Component {
  render(){
    var list = this.props.factslist;
    debugger;
    return (
      <div className="Fact-container">
        <h2 id={list.typeName}>{list.typeName}</h2>
          {list.facts.map((el,i)=>{
            
          return <FactElement key={i}>{el}</FactElement>
          })
          }
          {list.facts.length==0 && <div>Empty</div>}
      </div>
    );
  }
}

export default Fact;
