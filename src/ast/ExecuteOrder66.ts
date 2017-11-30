import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { QFunction} from '../ast/QFunction';
/**
  Representación de sumas.
*/
export class ExecuteOrder66 implements Stmt {

  functions:QFunction[];
  code: Stmt;

  constructor(functions: any[], code: Stmt) {
    this.functions = functions;
    this.code = code;
  }

  toString(): string {
    return ``;
  }

  unparse(): string {
    return ``;
  }

  evaluate(state: State): any {
    state = new State();
    for(var i=0;i<this.functions.length;i++){  if(this.functions!=undefined){this.functions[i].evaluate(state);}}
    if(this.code!=undefined){this.code.evaluate(state);}
    return state;
  }
}
