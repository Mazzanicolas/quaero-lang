import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { QList } from './QList';
import { Assignment } from './Assignment';
import { Numeral } from './Numeral';
import { QEnumeration } from './QEnumeration';

/**
  Representación de sumas.
*/
export class QFor implements Exp {

  lident:string;
  lvalue:any;
  rident:string;
  rvalue:any;
  forCond:Exp;
  forStmt:Stmt;
  forType:number;
  temporalState:State;

  constructor(lident,lvalue,rident,rvalue,forcond,stmt,type) {
    this.lident = lident;
    this.lvalue = lvalue;
    this.rident = rident;
    this.rvalue = rvalue;
    this.forCond = forcond;
    this.forStmt = stmt;
    this.forType = type;
  }

  toString(): string {
    return `QFor(${this.lident},(${this.lvalue}),${this.forStmt.toString()})`;
  }

  unparse(): string {
    return `QFor`;
  }

  evaluate(state: State) {

    console.log(`qfor type: ${this.forType}`);


    var that = this;
    that.temporalState  = new State();
    state.clone(that.temporalState);

    switch(that.forType) {
      case 1: {
        if (typeof that.lvalue == 'string') {
          var forList:any[] = state.get(that.lvalue);
          forList.forEach(function(value:Numeral){
              that.temporalState.set(that.lident, value);
              that.temporalState = that.forStmt.evaluate(that.temporalState);
          });
        }
        that.temporalState.vars.forEach((value, key:string) => {
          if (key != that.lident) {
            state.set(key, value);
          }
        });
        break;
      }
      case 2: {
        that.lvalue = <QEnumeration> that.lvalue;
        var llist = that.lvalue.evaluate(state);
        for (let lvalue of llist) {
          that.temporalState.set(that.lident, lvalue);
          that.temporalState = that.forStmt.evaluate(that.temporalState);
        }
        break;
      }
      case 3: {
        that.lvalue = <QEnumeration> that.lvalue;
        var llist = that.lvalue.evaluate(state);
        that.rvalue = <QEnumeration> that.rvalue;
        var rlist = that.rvalue.evaluate(state);
        for (let lvalue of llist) {
          for (let rvalue of rlist) {
            that.temporalState.set(that.lident, lvalue);
            that.temporalState.set(that.rident, rvalue);
            if (that.forCond.evaluate(that.temporalState)) {
              that.temporalState = that.forStmt.evaluate(that.temporalState);
            }
          }
        }
        break;
      }
    }

    that.temporalState.vars.forEach((value, key:string) => {
      if (key != that.lident && key != that.rident) {
        state.set(key, value);
      }
    });
    return state;
  }
}
