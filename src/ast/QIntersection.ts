import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { QList, QSet } from './AST';
/**
  Representación de constantes numéricas o numerales.
*/
export class QIntersection implements Exp {

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

  evaluate(state: State): any {
    var listL   = this.collectionA.evaluate(state);  var listR   = this.collectionB.evaluate(state);
    var valuesL = listL['$reserved$'];  var valuesR = listR['$reserved$'];
    if(listL instanceof Array && listR instanceof Array){
      var qresult = listL.filter((n) => listR.includes(n));
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
    if(listL instanceof Set && listR instanceof Set){
      if(listL.size==0 || listR.size==0 ){return new Set([]);}
      let qresult = new Set([...listL].filter(x => listR.has(x)));
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
    if(typeof listL === 'string' && typeof listR === 'string'){
      var letter;
      var result="";
      for (letter of listR) { if((listL.indexOf(letter) >= 0)){result+=letter;} }
      return result;
    }
  }
}
