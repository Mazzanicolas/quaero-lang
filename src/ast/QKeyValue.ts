import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { QString } from  './AST';
/**
  Representación de las sentencias condicionales.
*/
export class QKeyValue implements Stmt  {
  key: QString;
  value: Exp;

  constructor(key: QString, value: Stmt) {
    this.key = key;
    this.value = value;
  }

  toString(): string {
    return `Element(${this.key.toString()}, ${this.value.toString()})`;
  }

  unparse(): string {
    return `${this.key} : { ${this.value.unparse()} }`;
  }

  evaluate(state: State): any {
    var key = this.key.evaluate(state);
    var obj = {};
    obj[key] = this.value.evaluate(state);
    return  obj;
  }
}
