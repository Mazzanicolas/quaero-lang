import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de las comparaciones por igual.
*/
export class CompareEqual implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `CompareEqual(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} == ${this.rhs.unparse()})`;
  }

  evaluate(state: State): any {
    if (Array.isArray(this.lhs.evaluate(state)) && Array.isArray(this.rhs.evaluate(state)) ){
      if(this.lhs.evaluate(state).length !== this.rhs.evaluate(state).length){return false;}
      for(var i = this.lhs.evaluate(state).length.length; i--;) {
          if(this.lhs.evaluate(state)[i] !== this.rhs.evaluate(state)[i])
              return false;
      }
      return true;
    }
    return this.lhs.evaluate(state) == this.rhs.evaluate(state);
  }
}
