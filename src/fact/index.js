import React from 'react';
// import './index.scss';
import FactElement from '../factElement';

class Fact extends React.Component {
  render(){
    var list = this.props.factslist;
    return (
      <div className="Fact-container">
        {list.length>0 && this.props.factslist.map((ele,i)=>{
          var url = "#"+ele.typeName;
          return <div key={i} className="jump-class">
            <a href={url}>{ele.typeName}</a>
          </div>
        })}
        {list.length>0 && this.props.factslist.map((ele,i)=>{
          // var url = i;
          return <>
        <h2 id={ele.typeName}>{ele.typeName}</h2>
          {ele.facts.map((el,i)=>{
            
          return <FactElement key={i}>{el}</FactElement>
          })
          }
          </>
        })}
        {list.length>0 && this.props.factslist.map((ele,i)=>{
          var url = "#"+ele.typeName;
          return <div key={i} className="jump-class">
            <a href={url}>{ele.typeName}</a>
          </div>
        })}
      </div>
    );
  }
}

export default Fact;
