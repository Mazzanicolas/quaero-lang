import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de sumas.
*/
export class List implements Exp {

  elementList:[any]|undefined[];

  constructor(elementList:[any]|undefined[]) {
    this.elementList = elementList;
  }

  toString(): string {
    return ``;
  }

  unparse(): string {
    return ``;
  }

  evaluate(state: State):[any]|undefined[] {// [a:2,"r":true]
      console.log(this.elementList);
      return this.elementList;
  }
}
