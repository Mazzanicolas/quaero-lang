import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { QList, QSet } from './AST';
/**
  Representación de constantes numéricas o numerales.
*/
export class QGetKey implements Exp {

  value: any;
  collection: QList|QSet;

  constructor(collection: QList|QSet,value: any) {
    this.value = value;
    this.collection = collection;
  }

  toString(): string {
    return `QIndex(${this.value})`;
  }

  unparse(): string {
    return `${this.value}`;
  }

  evaluate(state: State): any {
    return undefined;
  }
}
