import React,{ Component, PropTypes } from 'react';
import GraphArea from './GraphArea';
import Input from './Input';
import { connect } from 'react-redux';
import * as actions from '../actions';



class Main extends Component{
  constructor(props){
    super(props);
    this.stateChange=this.stateChange.bind(this);

  }
  stateChange(input){
    this.props.handleSetGraph(input);
  }
  render(){

    return(
      <div>
          <GraphArea input={this.props.input}/>
          <Input stateValue={this.stateChange} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    input: state.input

  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    handleSetGraph: (input) => { dispatch(actions.change(input))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
