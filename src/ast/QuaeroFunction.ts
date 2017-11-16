import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
/**
  Representación de sumas.
*/
export class QuaeroFunction implements Exp {
  id:string;
  val:any[];
  ret:any;

  constructor(id,val,ret) {
    this.id = id;
    this.val = val;
    this.ret = ret;
  }

  toString(): string {
    return "";
  }

  unparse(): string {
    return "";
  }

  evaluate(state: State) {
    return state;
  }
}
