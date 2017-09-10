@preprocessor typescript

@{%

import {
  Addition,
  Assignment,
  CompareEqual,
  CompareNotEqual,
  CompareLessOrEqual,
  CompareLess,
  CompareGreatOrEqual,
  CompareGreat,
  Conjunction,
  Disjunction,
  IfThenElse,
  IfThen,
  Index,
  Multiplication,
  Division,
  Negation,
  NegationNumber,
  Numeral,
  String,
  Sequence,
  Substraction,
  TruthValue,
  Null,
  Variable,
  Element,
  List
} from '../ast/AST';

import { tokens } from './Tokens';
import { MyLexer } from './Lexer';

const lexer = new MyLexer(tokens);

%}

@lexer lexer

# Statements

stmt ->
    stmtelse                              {% id %}
  | "if" exp "then" stmt                  {% ([, cond, , thenBody]) => (new IfThen(cond, thenBody)) %}

stmtelse ->
    identifier "=" exp ";"                {% ([id, , exp, ]) => (new Assignment(id, exp)) %}
  | "{" stmt:* "}"                        {% ([, statements, ]) => (new Sequence(statements)) %}
  | "if" exp "then" stmtelse "else" stmt  {% ([, cond, , thenBody, , elseBody]) => (new IfThenElse(cond, thenBody, elseBody)) %}

#Lists
list ->
   "[" elements "]"        {% ([,elem,]) => (elem) %}
  | "[" "]"                {% ([,]) => (new List([])) %}#null es epsilon. Esta bien? si uso element -> null estaria permitiendo [,] deberia?

elements ->
   element "," elements    {% ([element, ,elements]) => (elements.push(element)) %}#por derecha para que no se nos chanflee la cosa (el orden)
  | element                {% ([element]) => (new List([element])) %}

element ->
   subValue ":" exp        {% ([key, , exp]) => (new Element(key, exp)) %} #Que es mejor? a) crear dos producciones una para literales y otra para indentificadores b) hacer un subgrupo en values c) que sea value : value
  | exp                    {% id %}

# Expressions

exp ->
    exp "&&" comp           {% ([lhs, , rhs]) => (new Conjunction(lhs, rhs)) %}
  | exp "||" comp           {% ([lhs, , rhs]) => (new Disjunction(lhs, rhs)) %}
  | exp "[" exp "]"         {% ([ex, ,index,]) => (new Index(ex,index)) %}
  | comp                    {% id %}

comp ->
    comp "==" addsub        {% ([lhs, , rhs]) => (new CompareEqual(lhs, rhs)) %}
  | comp "/=" addsub        {% ([lhs, , rhs]) => (new CompareNotEqual(lhs, rhs)) %}
  | comp "<=" addsub        {% ([lhs, , rhs]) => (new CompareLessOrEqual(lhs, rhs)) %}
  | comp "<" addsub         {% ([lhs, , rhs]) => (new CompareLess(lhs, rhs)) %}
  | comp ">=" addsub        {% ([lhs, , rhs]) => (new CompareGreatOrEqual(lhs, rhs)) %}
  | comp ">" addsub         {% ([lhs, , rhs]) => (new CompareGreat(lhs, rhs)) %}
  | addsub                  {% id %}

addsub ->
    addsub "+" muldiv       {% ([lhs, , rhs]) => (new Addition(lhs, rhs)) %}
  | addsub "-" muldiv       {% ([lhs, , rhs]) => (new Substraction(lhs, rhs)) %}
  | muldiv                  {% id %}

muldiv ->
    muldiv "*" neg          {% ([lhs, , rhs]) => (new Multiplication(lhs, rhs)) %}
  | muldiv "/" neg          {% ([lhs, , rhs]) => (new Division(lhs, rhs)) %}
  | "-" muldiv              {% ([, rhs]) => (new NegationNumber(rhs)) %}
  | neg                     {% id %}

neg ->
    "!" value               {% ([, exp]) => (new Negation(exp)) %}
  | value                   {% id %}

value ->
    "(" exp ")"             {% ([, exp, ]) => (exp) %}
  | number                  {% ([num]) => (new Numeral(num)) %}
  | "true"                  {% () => (new TruthValue(true)) %}
  | "false"                 {% () => (new TruthValue(false)) %}
  | "null"                  {% () => (new Null())%}
  | list                    {% id %}
  | subValue                {% id %}

subValue -> #Esto tiene sentido siempre cuando no exista una subdivision con parte de esto y algo de value
   literals                 {% ([literal]) => (new String(literal))%}
  | identifier              {% ([id]) => (new Variable(id)) %}
# Atoms
identifier ->
    %identifier             {% ([id]) => (id.value) %}

number ->
    %integer                {% ([id]) => (id.value) %}
  | %hex                    {% ([id]) => (id.value) %}
  | %float                  {% ([id]) => (id.value) %}
  | %infinity               {% ([id]) => (id.value) %}
  | %nan                    {% ([id]) => (id.value) %}

literals ->
  %literal                  {% ([id]) => (id.value) %}
