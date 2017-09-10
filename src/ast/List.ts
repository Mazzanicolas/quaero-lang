import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de sumas.
*/
export class List implements Exp {

  elementList;

  constructor(elementList) {
    this.elementList = elementList;
    console.log('Type of: '+ typeof elementList);
    console.log('Element: '+ elementList);
  }

  toString(): string {
    return `List()`;
  }

  unparse(): string {
    return `List()`;
  }

  push(element:any):any{
    this.elementList.push(element);
    return this;
  }

  evaluate(state: State) {// [a:2,"r":true]
      return this.elementList;
  }
}
