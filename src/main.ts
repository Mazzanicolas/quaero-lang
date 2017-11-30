import * as readlineSync from "readline-sync";
import { Parser } from "nearley";
import { tokens } from "./parser/Tokens";
import { MyLexer } from "./parser/Lexer"
import { ParserRules, ParserStart } from "./parser/Grammar";
import { ASTNode, Stmt } from './ast/AST';
import { State } from './interpreter/State';
import { Loader } from './ast/Loader';

var state = new State();
var load = new Loader();
load.loadPreFunctions(state);

export function testThis(input){
  state = new State();
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
