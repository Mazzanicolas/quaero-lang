import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
/**
  Representación de sumas.
*/
export class QFCall implements Exp {
  id:string;
  leo:any[]; //Esteregg
  stmt: [Stmt];
  fnctVars: Map<string, any>;

  constructor(id,val) {
    this.id = id;
    this.leo = val;
    this.fnctVars = new Map<string, any>();
  }

  toString(): string {
    return `QFunction()`;
  }

  unparse(): string {
    return `QFunction`;
  }

  evaluate(state: State) {
    let funct = state.get(this.id);
    let values = funct[0], statements = funct[1];
    for(let j=0;j<this.leo.length;j++){
      this.fnctVars.set(values[j].getid(),this.leo[j].evaluate(state));
      console.log(`{ ${Array.from(this.fnctVars.entries()).map(([key, value]) => (`${key} = ${value}`)).join("; ")} }`);
    } /*for(let i=0; i<this.stmt.length;i++){
      state=this.stmt[i].evaluate(this.fnctVars);
    }*/
    return state;
  }
}
