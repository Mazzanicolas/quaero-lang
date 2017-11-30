import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de las comparaciones por menor o igual.
*/
export class CompareGreat implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `CompareGreat(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} > ${this.rhs.unparse()})`;
  }

  evaluate(state: State): any {// una lista vacia no es mayor a nada
    var listL   = this.lhs.evaluate(state); var listR   = this.rhs.evaluate(state);
    if (listL instanceof Array && listR instanceof Array){
      if(listL.length==0){return false;}
      var valuesL = listL['$reserved$'];      var valuesR = listR['$reserved$'];
      var until = Math.min(listL.length,listR.length);
      for(var i=0;i<until;i++){if(!(listL[i]>listR[i])){ return false; } }
      return true;
    }
    if (listL instanceof Set && listR instanceof Set){
      var valuesL = listL['$reserved$'];      var valuesR = listR['$reserved$'];
      if(valuesL.length < valuesR.length || listL.size < listR.size ||listL.size-valuesL.length < listR.size-valuesR.length){ return false; }
      var flag =-1;
      for(var i=0; i<valuesR.length;i++){ //Separar en un metodo
        for(var j=0; j<valuesL.length;j++){
          if(valuesL[i]==valuesR[j]){ flag=j; }
        } if(flag<0){ return false; } else { if(listL[valuesL[i]]!=listR[valuesR[flag]]){ return false; } else { flag=-1; } }
      } var result = true;
      listR.forEach(function(rhsE){if(!listL.has(rhsE)){result = false;}});
      return result;
    }
    return listL>listR;
  }
}
