
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
    var listL = this.collectionA.evaluate(state); var listR = this.collectionB.evaluate(state);
    if(listL instanceof Set && listR instanceof Set){
      var valuesL = listL['$reserved$'];      var valuesR = listR['$reserved$'];
      let qresult = new Set([...listL].filter(x => !listR.has(x)));
      var data:any[]=[];
      for(var i=0;i<valuesR.length;i++){
        var elemR = valuesR[i];
        var vr = listR[elemR];
        qresult[elemR] = vr;
        data.unshift(elemR);
      }
      for(var i=0;i<valuesL.length;i++){
        var elemL = valuesL[i];
        var vl = listL[elemL];
        qresult[elemL] = vl;
        data.unshift(elemL);
      }
      qresult['$reserved$'] = data;
      return qresult;
    }
    if(listL instanceof Array && listR instanceof Array){
      for(var i=0;i<listR.length;i++){
        for(var j=0;j<listL.length;j++){
          if(listR[i] instanceof Array && listL[j] instanceof Array){
            if(listR[i].toString() == listL[j].toString()){ listL.splice(j, 1); }
          }
          if(listR[i]==listL[j]){
            listL.splice(j, 1);
            break;
          }
        }
      } return listL;
    }
    console.log("Esta operacion solo es valiada para Sets o Listas");
    return undefined;
  }
}
