import React,{ Component, PropTypes } from 'react';

const defaultProps = {
  input: [0,0,0]
}

class GraphArea extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const box = {
      'width':'210px',
      'border':'2px solid black'
    }

    const style= {
      'width':'50px',
      'backgroundColor':'red',
      'height': `${this.props.input[0]}px`,
      'display':'inline-block',
      'margin-right':'10px',
      'margin-left':'10px',
      'margin-top' : '10px'
    }
    const style2= {
      'width':'50px',
      'backgroundColor':'green',
      'height': `${this.props.input[1]}px`,
      'display':'inline-block',
      'margin-right':'10px',
      'margin-left':'10px',
      'margin-top' : '10px'
    }
    const style3= {
      'width':'50px',
      'backgroundColor':'blue',
      'height': `${this.props.input[2]}px`,
      'display':'inline-block',
      'margin-right':'10px',
      'margin-left':'10px',
      'margin-top' : '10px'
    }
    return(
      <div style={box}>
        <div style={style}>

        </div>
        <div style={style2}>

        </div>
        <div style={style3}>

        </div>
      </div>
    );
  }


}
GraphArea.defaultProps=defaultProps;
export default GraphArea;
