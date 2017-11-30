import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { QSet } from '../ast/QSet';
/**
  Representación de constantes numéricas o numerales.
*/
export class QIn implements Exp {

  value: any;
  collection:any;

  constructor(value: any,collection:any) {
    this.value = value;
    this.collection = collection;
  }

  toString(): string {
    return `QIn(${this.value})`;
  }

  unparse(): string {
    return `${this.value}`;
  }

  evaluate(state: State): any {
    var coll = this.collection.evaluate(state); //ver includes
    var val = this.value.evaluate(state);
    if(coll instanceof Set){
      return coll.has(val);
    }
    if(typeof coll === 'string')  { return (coll.indexOf(val) >= 0);}
    for(var i=0;i<coll.length;i++){
      if(coll[i] instanceof Array){//Eliminar if si pertenencia de arrays da falso
        if(val.toString() == coll[i].toString()){ return true; }
      }
      if(coll[i]==val){ return true; }
    }
    return false;
  }
}
