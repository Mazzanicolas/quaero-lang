import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { QList, QSet } from './AST';
/**
  Representación de constantes numéricas o numerales.
*/
export class QUnion implements Exp {

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
//[1,2] u [3,2] = [1,2,3]
  evaluate(state: State): any {
    var a = this.collectionA.evaluate(state);
    var b = this.collectionB.evaluate(state);
    var t = {};
    for (var i = a.length-1; i>=0; --i){
        t[a[i]]= a[i];}
    for (var j = b.length -1; j>=0; --j){
        t[b[j]]= b[j];}
    var resultado =[];
    for (var k in t){
      resultado.push(t[k]);}
    return resultado;
  }
}
