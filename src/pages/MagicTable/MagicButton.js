import React, { Component } from 'react';

class MagicButton extends React.Component {
    constructor(props){
      super(props);
      this.state = {render: true};
    }
    
    deleteMe(){
      this.setState({
        render: false
      });
    }
  
    render() {
      if(this.state.render){
      return (
        <tr><td><button onClick={(e) => this.deleteMe()}>
          Delete Me
        </button></td></tr>
      );
      }
      else{
        return null;
      }
    }
  }

  export default MagicButton;