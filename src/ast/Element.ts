import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de las sentencias condicionales.
*/
export class Element implements Stmt  {
  key: string;
  value: Exp;

  constructor(key: string, value: Stmt) {
    this.key = key;
    this.value = value;
  }

  toString(): string {
    return `Element(${this.key.toString()}, ${this.value.toString()})`;
  }

  unparse(): string {
    return `${this.key} : { ${this.value.unparse()} }`;
  }

  evaluate(state: State): State {
    state.set(this.key,this.value.evaluate(state));
    return state;
  }
}
