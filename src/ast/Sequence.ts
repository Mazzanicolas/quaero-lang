import { Stmt } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de las secuencias de sentencias.
*/
export class Sequence implements Stmt {

  statements: [Stmt];

  constructor(statements: [Stmt]) {
    this.statements = statements;
  }

  toString(): string {
    const statements = this.statements
      .filter((stmt) => (stmt !== undefined))
      .map((stmt) => (stmt.toString()))
      .join(", ");
    return `Sequence(${statements})`
  }

  unparse(): string {
    const statements = this.statements
      .filter((stmt) => (stmt !== undefined))
      .map((stmt) => (stmt.toString()))
      .join(" ");
    return `{ ${statements} }`
  }

  evaluate(state: State): State {
    //no return variable defined.
    //state.remove("return");
    for(var i=0;i<this.statements.length;i++){
        state= this.statements[i].evaluate(state);
        if (state.get("return") != null) {
          return state;
        }
    }
    return state;
  }
}
