import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { QList, QSet } from './AST';
/**
  Representación de constantes numéricas o numerales.
*/
export class QCardinal implements Exp {

  value: any;

  constructor(value: any) {
    this.value = value;
  }

  toString(): string {
    return `QCardinal(${this.value})`;
  }

  unparse(): string {
    return `${this.value}`;
  }

  evaluate(state: State): any {
    console.log(this.value.evaluate(state)+" : "+this.value.evaluate(state).length);
    return this.value.evaluate(state).length;
  }
}
