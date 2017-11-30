import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { QList, QSet } from './AST';
import { Variable } from '../ast/Variable';
import { Numeral } from '../ast/Numeral';
/**
  Representación de constantes numéricas o numerales.
*/
export class QGetKey implements Exp {

  value: any;
  collection: Exp;

  constructor(collection: Exp,value: any) {
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
    var aValue = this.value.evaluate(state);
    var aCollection = this.collection.evaluate(state)
    if(this.value instanceof Numeral){ return undefined; }//Si [0,1,2,3].2 tiene que ser = 2 Sacar este if
    if(this.value instanceof Variable){ aValue = this.value.id; }
    return aCollection[aValue];
  }
}
