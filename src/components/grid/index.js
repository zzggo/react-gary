import React, { Component } from 'react';
// import gary from '../../assets/svg/gary.svg';
import './style.css';

class Grid extends Component {
  componentDidMount(){
    // console.log(Web3);
    console.log(this.props.format);
  }
  render(){
    const Grid = this.props.format.map((project, index) => {
      return (
        <div className="line" key={index}>
          { 
            project.map((i, index) => 
              <div key={index} className="column">
                {i.gary &&
                  <div className="gary">
                    <img className="svgImage" src={require('../../assets/svg/gary.svg')} />
                  </div>
                }
                <div style={{ backgroundColor: i.bgColor }} className="background"></div>
              </div>
            ) 
          }
        </div>
      ) 
    });
    return (
      <div className="grid">
        {Grid}
      </div>
    );
  }
}

export default Grid;
