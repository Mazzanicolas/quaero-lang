import * as readlineSync from "readline-sync";

import { Parser } from "nearley";

import { tokens } from "./parser/Tokens";
import { MyLexer } from "./parser/Lexer"
import { ParserRules, ParserStart } from "./parser/Grammar";

import { ASTNode, Stmt } from './ast/AST';

import { State } from './interpreter/State';


console.log("While :: REPL");

var state = new State();
var TESTING = false; // < Cambiar al estado de testing

export function testThis(input){
  state = new State();
  const lexer = new MyLexer(tokens);
  const parser = new Parser(ParserRules, ParserStart, { lexer });
  parser.feed(input);
  const nodes: Stmt[] = parser.results;
  const node = nodes[0];
  state = node.evaluate(state);
  return state.toString();
}
//console.log(testThis('foo="\"\u00a1Hola\t!\"";'));
while (!TESTING) {
  const lexer = new MyLexer(tokens);
  const parser = new Parser(ParserRules, ParserStart, { lexer });
  const input = readlineSync.question('>>> ');

  try {
    // Parse user input
    parser.feed(input);
    // Print result
    const nodes: Stmt[] = parser.results;

    switch (nodes.length) {
      case 0: {
        console.log("Parse failed!!");
        break;
      }
      case 1: {
        const node = nodes[0];
        state = node.evaluate(state);
        console.log(`\n${state.toString()}`);
        break;
      }
      default: {
        console.log("Warning!! Grammar is ambiguous, multiple parse results.\n");
        nodes.map((node) => console.log(node.toString()));
        break;
      }
    }

  } catch(parseError) {
    console.log(parseError);
  }
}
