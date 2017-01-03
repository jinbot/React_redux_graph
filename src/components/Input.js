import React,{ Component, PropTypes } from 'react';



class Input extends Component{
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);


  }
  handleChange(){
    let input=[this.txt1.value,this.txt2.value,this.txt3.value];
    this.props.stateValue(input);
  }

  render(){
    return(
      <div>
        <span>red: </span><input type="text" ref={ref=> this.txt1 = ref} /><br/>
        <span>green: </span><input type="text" ref={ref=> this.txt2 = ref} /><br/>
        <span>blue: </span><input type="text" ref={ref=> this.txt3 = ref} /><br/>
        <button onClick={this.handleChange}>change</button>
      </div>
    );
  }
}

export default Input;
