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
    var listL   = this.collectionA.evaluate(state);  var listR   = this.collectionB.evaluate(state);
    var valuesL = listL['$reserved$'];  var valuesR = listR['$reserved$'];
    //var flagSet = false;
    if(listL instanceof Set && listR instanceof Set){
      //flagSet = true;listL=[...listL].reverse();listR=[...listR].reverse();
      let qresult = new Set([...listL, ...listR]);
      var data:any[]=[];
      for(var i=0;i<valuesR.length;i++){
        var keyR = valuesR[i];
        var vr = listR[keyR];
        qresult[keyR] = vr;
        data.unshift(keyR);
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
      var qresult = QUnion.removeDuplicates(listL.concat(listR));
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
        if(data.indexOf(elemL) > -1){ continue; }
        qresult[elemL] = vl;
        data.unshift(elemL);
      }
      qresult['$reserved$'] = data;
      //if(flagSet){return new Set(qresult);}
      return qresult;
    }
    if(typeof listL === 'string' && typeof listR === 'string'){
      var letter;
      for (letter of listR) { if(!(listL.indexOf(letter) >= 0)){listL=listL+letter;} }
      return listL;
    }
  }


  static removeDuplicates(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
  }
}
