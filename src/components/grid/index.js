import React, { Component } from 'react';
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
                {i.gary}
                <div style={{ opacity: i.opacity }} className="background"></div>
                {i.gary &&
                  <div className="gary">Gary</div>
                }
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
