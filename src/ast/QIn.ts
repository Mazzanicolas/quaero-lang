import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { QList, QSet } from './AST';
/**
  Representación de constantes numéricas o numerales.
*/
export class QIn implements Exp {

  value: any;
  collection: QList|QSet;

  constructor(value: any,collection: QList|QSet) {
    this.value = value;
    this.collection = collection;
  }

  toString(): string {
    return `QIn(${this.value})`;
  }

  unparse(): string {
    return `${this.value}`;
  }

  evaluate(state: State): any {
    var coll = this.collection.evaluate(state); //ver includes
    var val = this.value.evaluate(state);
    for(var i=0;i<coll.length;i++){
      if(coll[i]==val){
        return true;
      }
    }
    return false;
  }
}
