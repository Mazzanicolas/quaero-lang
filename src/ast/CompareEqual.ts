import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
var _ = require("underscore");
/**
  Representación de las comparaciones por igual.
*/
export class CompareEqual implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `CompareEqual(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} == ${this.rhs.unparse()})`;
  }

  evaluate(state: State): any { //Considera las Key value
    var listL   = this.lhs.evaluate(state); var listR   = this.rhs.evaluate(state);
    if (listL instanceof Set && listR instanceof Set){
      var valuesL = listL['$reserved$'];      var valuesR = listR['$reserved$'];
      if(valuesL.length != valuesR.length || listL.size != listR.size){ return false; }
      var flag =-1;
      var minLoop = Math.min(valuesL.length,valuesR.length); var maxLoop = Math.max(valuesL.length,valuesR.length);//Buscar mejor forma, esto es porque no tienen porque ser iguales
      for(var i=0; i<maxLoop;i++){ //Separar en un metodo
        for(var j=0; j<minLoop;j++){
          if(valuesL[i]==valuesR[j]){ flag=j; }
        } if(flag<0){ return false; } else { if(listL[valuesL[i]]!=listR[valuesR[flag]]){ return false; } else { flag=-1; } } //Poner esto en el for, si tengo tiempo
      } if(_.isEqual([...listL].sort(), [...listR].sort())){ return true; }
      return false;
    }
    if (listL instanceof Array && listR instanceof Array){
      var valuesL = listL['$reserved$'];      var valuesR = listR['$reserved$'];
      if(valuesL.length != valuesR.length || listL.length != listR.length){ return false; }
      var flag =-1;
      for(var i=0; i<valuesL.length;i++){ //Separar en un metodo
        for(var j=0; j<valuesL.length;j++){
          if(valuesL[i]==valuesR[j]){
            flag=j;
          }
        } if(flag<0){ return false; } else { if(listL[valuesL[i]]!=listR[valuesR[flag]]){ return false; } else { flag=-1; } }
      } if(_.isEqual(listL, listR)){ return true; }
      //for(var i=0;i<listL.length;i++){ if(listL[i]!=listR[i]){return false;} }//Deprecated ahora existe Underscore
      return false;
    }
    return listL == listR;
  }
}
