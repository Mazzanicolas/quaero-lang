import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de sumas.
*/
export class List implements Exp {

  elementList:[any]|undefined[];

  constructor(elementList:[any]|undefined[]) {
    this.elementList = elementList;
    console.log(typeof elementList);
  }

  toString(): string {
    return `List()`;
  }

  unparse(): string {
    return `List()`;
  }

  pushList(element:any):any{
    this.elementList.push(element);
    return this;
  }

  evaluate(state: State):[any]|undefined[] {// [a:2,"r":true]
      return this.elementList;
  }
}
