import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { QFunction } from './QFunction';
import { Assignment } from './Assignment';
import { Sequence } from './Sequence';

/**
  Representación de sumas.
*/
export class QFCall implements Exp {
  id:string;
  val:any[];
  stmt: [Stmt];
  temporalState: State;

  constructor(id,val) {
    this.id = id;
    this.val = val.reverse();
  }

  toString(): string {
    return `QFunction()`;
  }

  unparse(): string {
    return `QFunction`;
  }

  //evaluate(state: State) {
  evaluate(state: State) :any {
    let funct:any[] = state.get(this.id);
    var toReturn:any;
    //check parms qty & function call parms qty.
    if (this.val.length == funct[0].length) {
      this.temporalState  = new State();
      for (var j=0;j<funct[0].length;j++) {
        this.temporalState = new Assignment(funct[0][j], this.val[j]).evaluate(this.temporalState);
      }
      this.temporalState = new Sequence(funct[1]).evaluate(this.temporalState);
      toReturn = this.temporalState.get("return");
    }
    return toReturn;
  }
}
