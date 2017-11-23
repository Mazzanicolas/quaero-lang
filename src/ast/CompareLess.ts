import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { QList } from '../ast/QList';

/**
  Representación de las comparaciones por menor o igual.
*/
export class CompareLess implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `CompareLess(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} < ${this.rhs.unparse()})`;
  }

  //VER ESTO!

  evaluate(state: State): any {
    var aux = false;
    if (this.lhs.toString()=="QSet"){
      if (Array.isArray(this.lhs.evaluate(state)) && Array.isArray(this.rhs.evaluate(state)) ){
        for (var i = 0; i < this.lhs.evaluate(state).length; i ++){
          for (var j = 0; j < this.rhs.evaluate(state).length; j ++){
              if (this.lhs.evaluate(state)[i] == this.rhs.evaluate(state)[j]){
                aux = true;
              }
          }
          if (aux == false){
            return false;
          }
        }
        return true;
      }
      else{
        return JSON.stringify(this.lhs) < JSON.stringify(this.rhs);
        }
      }
      else {
        if (Array.isArray(this.lhs.evaluate(state)) && Array.isArray(this.rhs.evaluate(state)) ){
          for (var i = 0; i < this.lhs.evaluate(state).length; i ++){
            for (var j = 0; j < this.rhs.evaluate(state).length; j ++){
              if(i==j){
                if (this.lhs.evaluate(state)[i] == this.rhs.evaluate(state)[j]){
                  aux = true;
                }
              }
            }
            if (aux == false){
              return false;
            }
          }
          return true;
        }
        else{
          return JSON.stringify(this.lhs) < JSON.stringify(this.rhs);
          }
        }
    }
}
