import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de constantes numéricas o numerales.
*/
export class QNull implements Exp {

  constructor() {
  }

  toString(): string {
    return `QNull(${null})`;
  }

  unparse(): string {
    return `${null}`;
  }

  evaluate(state: State): any {
    return null;
  }
}
