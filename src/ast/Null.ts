import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de constantes numéricas o numerales.
*/
export class Null implements Exp {

  constructor(value: null) {
  }

  toString(): string {
    return `Null(${null})`;
  }

  unparse(): string {
    return `${null}`;
  }

  evaluate(state: State): any {
    return null;
  }
}
