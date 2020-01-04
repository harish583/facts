import React from 'react';
// import './index.scss';
import icon from '../images/facts-icon.jpg';
import menuicon from '../images/menu-icon.png';
// import HeaderLinks from '../HeaderLinks';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open:false,
      openstatus:false
    };
    // if(window.innerWidth<700){
    //   this.setState({
    //     openstatus:true
    //   })
    // }else{
    //   this.setState({
    //     openstatus:false
    //   })
    // }
  }
  componentDidMount=()=>{
    if(window.innerWidth<700){
      this.setState({
        openstatus:true
      })
    }else{
      this.setState({
        openstatus:false
      })
    }
  }
  theamechange=(e)=>{
      this.props.theamechange(e.target.checked);
  }
  searchkeyword =(e)=>{
    var keyword = e.target.value;
    var { keywordsearch } = this.props;
    keywordsearch(keyword);
  }
  changeHeader =()=>{
    this.setState({
      openstatus:!this.state.openstatus
    })
  }
  render(){
    var openstatus = this.state.openstatus;
    return (
      <div className="Header-holder">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <Link to="/" className="ico-holder inline-block">
            <img src={icon} alt="logo"/>
          </Link>
          {openstatus && <button className="navbar-toggler" type="button" onClick={this.changeHeader}>
            <img  className="navbar-toggler-icon" src={menuicon} alt="menu" onClick={this.changeHeader}/>
          </button>}
          {!openstatus && <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <div className="">
              <div id="google_translate_element"></div>
              <div id="app-cover">
                <div className="row">
                  <div className="toggle-button-cover">
                    <div className="button-cover">
                      <div className="button r" id="button-3">
                        <input type="checkbox" className="checkbox" id="theame" onChange={this.theamechange}/>
                        <div className="knobs"></div>
                        <div className="layer"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-search"><input type="text" placeholder="Search here ..." onChange={(e)=>this.searchkeyword(e)} />
              </div>
              {/* {/* <HeaderLinks />  */}
            </div>
        </div> } 
      </nav>
      </div>
    );
  }
}

export default Header;
