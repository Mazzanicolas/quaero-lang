import { Exp, Collection } from './ASTNode';
import { State } from '../interpreter/State';
/**
  Representación de constantes numéricas o numerales.
*/
export class QCardinal implements Exp {

  value: Collection;

  constructor(value: Collection) {
    this.value = value;
  }

  toString(): string {
    return `QCardinal(${this.value})`;
  }

  unparse(): string {
    return `${this.value}`;
  }

  evaluate(state: State): any {
    return this.value//.length();//implementar
  }
}
