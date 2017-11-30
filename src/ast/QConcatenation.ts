import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { QList, QSet } from './AST';
/**
  Representación de constantes numéricas o numerales.
*/
export class QConcatenation implements Exp {

  lhs: QList|QSet;
  rhs: QList|QSet;

  constructor(lhs: QList|QSet,rhs: QList|QSet) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `QIndex()`;
  }

  unparse(): string {
    return ``;
  }

  evaluate(state: State): any {
    var listL   = this.lhs.evaluate(state);  var listR   = this.rhs.evaluate(state);
    if(listL instanceof Set && listR instanceof Set){
      console.log("La operacion ++ no esta definida para sets. Retornado {}")
      return new Set([]);
    }
    if(listL instanceof Array && listR instanceof Array){
      var valuesL = listL['$reserved$']; var valuesR = listR['$reserved$'];
      let found = valuesL.some(element=> valuesR.includes(element));
      if(found){
        console.log("Keys duplicadas. Retornando []");
        return [];
      } else {
        var qresult = listL.concat(listR);
        var data:any[]=[];
        for(var i=0;i<valuesR.length;i++){
          var elemR = valuesR[i];
          var vr = listR[elemR];
          qresult[elemR] = vr;
          data.unshift(elemR);
        }
        for(var i=0;i<listL.length;i++){
          var elemL = valuesL[i];
          var vl = listL[elemL];
          qresult[elemL] = vl;
          data.unshift(elemL);
        }
        qresult['$reserved$'] = data;
        return qresult;
      }
    }
    return listL.concat(listR);
  }

  static aNewArray(lhs,rhs,state){//elminar
    var listL   = lhs.evaluate(state);  var listR   = rhs.evaluate(state);
    var valuesL = listL['$reserved$'];  var valuesR = listR['$reserved$'];
    var qresult = listL.concat(listR);
    var data:any[]=[];
    for(var i=0;i<valuesR.length;i++){
      var elemR = valuesR[i];
      var vr = listR[elemR];
      qresult[elemR] = vr;
      data.unshift(elemR);
    }
    for(var i=0;i<listL.length;i++){
      var elemL = valuesL[i];
      var vl = listL[elemL];
      qresult[elemL] = vl;
      data.unshift(elemL);
    }
    qresult['$reserved$'] = data;
    return qresult;
  }
}
