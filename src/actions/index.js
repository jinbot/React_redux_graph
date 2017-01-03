import * as type from './Actiontypes';

export function change(input){
  return{
    type: type.CHANGE,
    input: input
  }

}
