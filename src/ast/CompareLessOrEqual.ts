import { Exp } from './ASTNode';
import { State } from '../interpreter/State';

/**
  Representación de las comparaciones por menor o igual.
*/
export class CompareLessOrEqual implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `CompareLessOrEqual(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} <= ${this.rhs.unparse()})`;
  }

  evaluate(state: State): any {
    var listL   = this.lhs.evaluate(state); var listR   = this.rhs.evaluate(state);
    if (listL instanceof Array && listR instanceof Array){
      var valuesL = listL['$reserved$'];      var valuesR = listR['$reserved$'];
      if (this.lhs.evaluate(state) instanceof Set && this.rhs.evaluate(state) instanceof Set){listL=[...listL].reverse();listR=[...listR].reverse();}
      var until = Math.min(listL.length,listR.length);
      for(var i=0;i<until;i++){if(!(listL[i]<=listR[i])){ return false; } }
      return true;
    }
    if (listL instanceof Set && listR instanceof Set){
      var valuesL = listL['$reserved$'];      var valuesR = listR['$reserved$'];
      if(valuesL.length != valuesR.length || listL.size != listR.size){ return false; }
      var flag =-1;
      for(var i=0; i<valuesL.length;i++){ //Separar en un metodo
        for(var j=0; j<valuesR.length;j++){
          if(valuesL[i]==valuesR[j]){ flag=j; }
        } if(flag<0){ return false; } else { if(listL[valuesL[i]]!=listR[valuesR[flag]]){ return false; } else { flag=-1; } }
      } var result = true;
      listL.forEach(function(lhsE){if(!listR.has(lhsE)){result = false;}});
      return result;
    }
    return listL<=listR;
  }
}
