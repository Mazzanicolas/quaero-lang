import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
/**
  Representación de sumas.
*/
export class QFor implements Exp {

  constructor(id,val,stmt) {
  }

  toString(): string {
    return `QFunction()`;
  }

  unparse(): string {
    return `QFunction`;
  }

  evaluate(state: State) {
    return undefined;
  }
}
