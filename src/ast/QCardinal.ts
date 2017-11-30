import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
/**
  Representación de constantes numéricas o numerales.
*/
export class QCardinal implements Exp {

  value: any;

  constructor(value: any) {
    this.value = value;
  }

  toString(): string {
    return `QCardinal(${this.value})`;
  }

  unparse(): string {
    return `${this.value}`;
  }

  evaluate(state: State): any {
    var item = this.value.evaluate(state);
    if(item instanceof Array){ return item.length; }
    else if(item instanceof Set)  { return item.size;  }
    else if(typeof item === 'string')  { return item.length; }
    else { console.log("Lista o Set no valido retornando undefined"); return undefined;}
  }
}
