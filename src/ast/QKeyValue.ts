import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { QString } from  './AST';
import { Variable } from '../ast/Variable';
/**
  Representación de las sentencias condicionales.
*/
export class QKeyValue implements Stmt  {
  key:   QString;
  value: Exp;

  constructor(key: QString, value: Stmt) {
    this.key   = key;
    this.value = value;
  }

  toString(): string {
    return `${this.key.toString()}:${this.value.toString()}`;
  }

  unparse(): string {
    return `${this.key.toString()} : { ${this.value.unparse()} }`;
  }

  evaluate(state: State): any {
    var kvmap  = new Map<string, any>();
    let aKey   = this.key.evaluate(state);
    let aValue = this.value.evaluate(state);
    if(aKey instanceof Variable){
      aKey = this.key.evaluate(state).id;
    }
    kvmap.set('k',aKey);
    kvmap.set('v',aValue);
    return kvmap;
  }
}
