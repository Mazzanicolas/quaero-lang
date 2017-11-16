import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { QList } from './QList';
import { Assignment } from './Assignment';
import { Numeral } from './Numeral';

/**
  Representación de sumas.
*/
export class QFor implements Exp {

  lcond:string;
  rcond:any;
  forStmt:Stmt;
  temporalState:State;

  constructor(lcond,rcond,stmt) {
    this.lcond = lcond;
    this.rcond = rcond;
    this.forStmt = stmt;
  }

  toString(): string {
    return `QFor(${this.lcond},(${this.rcond}),${this.forStmt.toString()})`;
  }

  unparse(): string {
    return `QFor`;
  }

  evaluate(state: State) {
    var that = this;
    if (typeof that.rcond == 'string') {
      var forList:any[] = state.get(that.rcond);
      that.temporalState  = new State();
      state.clone(that.temporalState);
      forList.forEach(function(value:Numeral){
          that.temporalState.set(that.lcond, value);
          that.temporalState = that.forStmt.evaluate(that.temporalState);
      });
    }

    that.temporalState.vars.forEach((value, key:string) => {
      if (key != that.lcond) {
        state.set(key, value);
      }
    });

    return state;
  }
}
