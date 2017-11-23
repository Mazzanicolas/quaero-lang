  export class State {

  vars: Map<string, any>;
  customFunction: Map<string, any>;

  constructor() {
    this.vars = new Map<string, any>();
    this.customFunction = new Map<string, any>();
  }

  toString(): string {
    return `{ ${Array.from(this.vars.entries()).map(([key, value]) => (`${key} = ${value}`)).join("; ")} }`;
  }

  get(id: string): any {
    return this.vars.get(id);
  }

  set(id: string, value: any) {
    this.vars.set(id, value);
  }

  getFunction(id){
    return this.customFunction.get(id);
  }

  setFunction(id,value){
    this.customFunction.set(id,value);
  }
  
  remove(id: string) {
    this.vars.delete(id);
  }

  clone(newState:State): any {
    this.vars.forEach((value: string, key: string) => {
      newState.set(key, value);
    });
    return newState;
  }
}
