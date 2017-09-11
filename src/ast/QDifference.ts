
import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { QList, QSet } from './AST';
/**
  Representación de constantes numéricas o numerales.
*/
export class QDifference implements Exp {

  collectionA: QList|QSet;
  collectionB: QList|QSet;

  constructor(collectionA: QList|QSet,collectionB: QList|QSet) {
    this.collectionA = collectionA;
    this.collectionB = collectionB;
  }

  toString(): string {
    return `QIndex()`;
  }

  unparse(): string {
    return ``;
  }
// [1,2,3]--[1,2,5]=[3]
  evaluate(state: State): any {
    var a = this.collectionA.evaluate(state);
    var b = this.collectionB.evaluate(state);
    var resultado =[];
    for (var i =0; i < a.length; i++){
      if(b.indexOf(a[i]) === -1){
        resultado.push (a[i]);
      }
    }
    return resultado;
  }
}
