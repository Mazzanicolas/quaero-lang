import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
var _ = require("underscore");
/**
  Representación de las comparaciones por igual.
*/
export class CompareNotEqual implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `CompareNotEqual(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} != ${this.rhs.unparse()})`;
  }

  evaluate(state: State): any {//Compara toda la lista a diferencia de las otras operaciones
    if (this.lhs.evaluate(state) instanceof Array && this.rhs.evaluate(state) instanceof Array || this.lhs.evaluate(state) instanceof Set && this.rhs.evaluate(state) instanceof Set){
      var listL   = this.lhs.evaluate(state); var listR   = this.rhs.evaluate(state);
      var valuesL = listL['$reserved$'];      var valuesR = listR['$reserved$'];
      if (this.lhs.evaluate(state) instanceof Set && this.rhs.evaluate(state) instanceof Set){
        if(listL.size!=listR.size){return true;}
        var flag =-1;
        var minLoop = Math.min(valuesL.length,valuesR.length); var maxLoop = Math.max(valuesL.length,valuesR.length);//Buscar mejor forma, esto es porque no tienen porque ser iguales
        for(var i=0; i<maxLoop;i++){ //Separar en un metodo
          for(var j=0; j<minLoop;j++){
            if(valuesL[i]==valuesR[j]){ flag=j;}
          } if(flag<0){ return true; } else {if(listL[valuesL[i]]!=listR[valuesR[flag]]){ return true; } else { flag=-1; } }
        }if(_.isEqual([...listL].sort(), [...listR].sort())){ return false; }
        return true;
      }
      if(listR.length != listL.length){return true;}
      if(valuesL.length != valuesR.length){return true;}
      var flag =-1;
      for(var i=0; i<valuesL.length;i++){ //Separar en un metodo
        for(var j=0; j<valuesL.length;j++){
          if(valuesL[i]==valuesR[j]){
            flag=j;
          }
        } if(flag<0){ return true; } else { if(listL[valuesL[i]]!=listR[valuesR[flag]]){ return true; } else { flag=-1; } }
      }
      if(_.isEqual(listL, listR)){ return false; }
      //var until = Math.min(listL.length,listR.length);//Deprecated ahora existe Underscore
      //for(var i=0;i<until;i++){if(listL[i]!=listR[i]){ return true; } }//Deprecated ahora existe Underscore
      return true;
    }
    return this.lhs.evaluate(state)!=this.rhs.evaluate(state);
  }
}
