import { Parser } from "nearley";
import { tokens } from "../parser/Tokens";
import { MyLexer } from "../parser/Lexer"
import { ParserRules, ParserStart } from "../parser/Grammar";
import { Stmt } from './ASTNode';
import { Loader } from '../ast/Loader';
import { State } from '../interpreter/State';
import * as FileSystem from 'fs';
/**
  Representación de las asignaciones de valores a variables.
*/
export class LoadFile implements Stmt {
  readFile = (fileName, type) => FileSystem.readFileSync(fileName, type);

  fileName:string;

  constructor(fileName:string) {
    this.fileName=fileName;
  }

  toString(): string {
    return ``;
  }

  unparse(): string {
    return ``;
  }

  evaluate(state: State): State {
    let input;
    input = this.readFile("../quaero-lang/src/Files/" + this.fileName, 'utf8');
    input = "{" + String(input) + "}";
    var state = new State();
    var load = new Loader();
    load.loadPreFunctions(state);
    const lexer = new MyLexer(tokens);
    const parser = new Parser(ParserRules, ParserStart, { lexer });
    parser.feed(input);
    const nodes: Stmt[] = parser.results;
    const node = nodes[0];
    state = node.evaluate(state);
    return state;
  }
}
