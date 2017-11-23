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
<<<<<<< HEAD
      if (Array.isArray(this.lhs.evaluate(state)) && Array.isArray(this.rhs.evaluate(state))){
        return JSON.stringify(this.lhs.evaluate(state)) == JSON.stringify(this.rhs.evaluate(state));
        }
        return this.lhs.evaluate(state) == this.rhs.evaluate(state);
      }
=======
    if (Array.isArray(this.lhs.evaluate(state)) && Array.isArray(this.rhs.evaluate(state)) ){
      return JSON.stringify(this.lhs.evaluate(state)) == JSON.stringify(this.rhs.evaluate(state));
    }
    return this.lhs.evaluate(state) == this.rhs.evaluate(state);
  }
>>>>>>> 7d794bc2e3cdfac99a41ab03dcd4f636961ed024
}
