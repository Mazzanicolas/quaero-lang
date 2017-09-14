import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
/**
  Representación de sumas.
*/
export class QFCall implements Exp {
  id:string;
  val:any[];
  stmt: [Stmt];
  temporalState: Map<string, any>;

  constructor(id,val) {
    this.id = id;
    this.val = val.reverse();
    console.log(id,"---",val);
  }

  toString(): string {
    return `QFunction()`;
  }

  unparse(): string {
    return `QFunction`;
  }

  evaluate(state: State) {
    //for (var i in state){this.temporalState[i] = state[i];}

    //let funct = state.get(this.id);
    //let values = funct[0], statements = funct[1];
    //console.log(funct,values);
    //for(let j=0;j<this.val.length;j++){
    //  this.fnctVars.set(values[j].getid(),this.val[j].evaluate(state));
    //  console.log(`{ ${Array.from(this.fnctVars.entries()).map(([key, value]) => (`${key} = ${value}`)).join("; ")} }`);
     /*for(let i=0; i<this.stmt.length;i++){
      state=this.stmt[i].evaluate(this.fnctVars);
    }*/
    return state;
  }
}
