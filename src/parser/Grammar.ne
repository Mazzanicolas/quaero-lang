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
  Numeral,
  QString,
  Sequence,
  Substraction,
  TruthValue,
  Variable,
  QNull,
  QKeyValue,
  QList,
  QSet,
  QNNegation,
  QCardinal,
  QIn,
  QIndex,
  QIntersection,
  QConcatenation,
  QUnion,
  QDifference,
  QGetKey,
  QFunction,
  QFReturn,
  QFCall,
  QConditionalExp,
  QFor,
  ExpAsStmt,
  QEnumeration
} from '../ast/AST';

import { tokens } from './Tokens';
import { MyLexer } from './Lexer';

const lexer = new MyLexer(tokens);

%}

@lexer lexer

# Statements

stmt ->
    stmtelse                              {% id %}
  | "if" "(" exp ")" stmt                 {% ([, , cond, , thenBody]) => (new IfThen(cond, thenBody)) %}
  | "return" exp ";"                      {% ([, exp]) => (new QFReturn(exp)) %}

stmtelse ->
    identifier "=" exp ";"                {% ([id, , exp, ]) => (new Assignment(id, exp)) %}
  | exp ";"                               {% ([exp, ]) => (new ExpAsStmt(exp)) %}
  | "{" stmt:* "}"                        {% ([, statements, ]) => (new Sequence(statements)) %}
  | "if" "(" exp ")" stmtelse "else" stmt {% ([, ,cond, , thenBody, , elseBody]) => (new IfThenElse(cond, thenBody, elseBody)) %}
  | "function" identifier "(" functionValue ")" "{" stmt:* "}" {% ([,id, , val , , ,stmt, ]) => (new QFunction(id,val,stmt)) %}
  | "for" "(" identifier "<-" identifier ")" stmt {% ([, ,lcond, , rcond, , stmt]) => (new QFor(lcond, rcond,null,null,null,stmt, 1)) %}
  | "for" "(" identifier "<-" range "," identifier "<-" range "," exp ")" stmt {% ([, ,lident, ,lrange, ,riden, ,rrange, , cond, ,stmt]) => (new QFor(lident, lrange, riden, rrange, cond, stmt, 2)) %}


functionValue->
  identifier                              {% ([id]) => ([id]) %}
  | identifier "," functionValue          {% ([id, , fValue]) => {fValue.push(id);return fValue}%}

functionCallValue->
    exp                                  {% ([ex]) => ([ex]) %}
    | exp "," functionCallValue          {% ([ex, , fCValue]) => {fCValue.push(ex);return fCValue}%}
    | identifier "<-" identifier         {% ([ex, , fCValue]) => {fCValue.push(ex);return fCValue}%}


# Expressions

exp ->
    exp "&&" comp           {% ([lhs, , rhs]) => (new Conjunction(lhs, rhs)) %}
  | exp "||" comp           {% ([lhs, , rhs]) => (new Disjunction(lhs, rhs)) %}
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
  | addsub "++" muldiv      {% ([lhs, , rhs]) => (new QConcatenation(lhs,rhs)) %}
  | addsub "--" muldiv      {% ([lhs, , rhs]) => (new QDifference(lhs,rhs)) %}
  | muldiv                  {% id %}

muldiv ->
    muldiv "*" neg          {% ([lhs, , rhs]) => (new Multiplication(lhs, rhs)) %}
  | muldiv "/" neg          {% ([lhs, , rhs]) => (new Division(lhs, rhs)) %}
  | muldiv "/\\" neg        {% ([lhs, ,rhs]) => (new QIntersection(lhs,rhs)) %}
  | muldiv "\\/" neg        {% ([lhs, ,rhs]) => (new QUnion(lhs,rhs)) %}
  | neg                     {% id %}

neg ->
    "!" value               {% ([, exp]) => (new Negation(exp)) %}
  | "-" value               {% ([, val]) => (new QNNegation(val)) %}
  | value                   {% id %}

value ->
    "(" exp ")"             {% ([, exp, ]) => (exp) %}
  | number                  {% ([num]) => (new Numeral(num)) %}
  | "true"                  {% () => (new TruthValue(true)) %}
  | "false"                 {% () => (new TruthValue(false)) %}
  | literals                {% ([literal]) => (new QString(literal))%}
  | identifier "(" functionCallValue ")" {%([id, , fcv, ]) => (new QFCall(id,fcv))%}#No implementado
  | identifier              {% ([id]) => (new Variable(id)) %}
  | nullvalue               {% ([id]) => (new QNull())%}
  | "#" value               {% ([, val]) => (new QCardinal(val)) %}
  #Eliminar ambiguedad v v v si es que tiene
  | collection "." value    {% ([list, , key]) => (new QGetKey(list,key)) %}#No Implementado
  | value "[" value "]"     {% ([value, ,index, ]) => (new QIndex(value,index)) %}
  | value "<-" value        {% ([val, , list]) => (new QIn(val,list))%}#Eliminar ambiguedad v v v
  | "(" exp "if" exp "else" exp ")" {% ([, iftrue, , cond , , iffalse, ]) => (new QConditionalExp(cond, iftrue, iffalse)) %}
  #Eliminar ambiguedad ^ ^ ^ si es que tiene
  | collection              {% id %}
  | range                   {% id %}

# Collections

key ->
  literals                {% ([literal]) => (new QString(literal))%}
| identifier              {% ([id]) => (new QString(id)) %}

list->
   "[" "]"                  {% ([id]) => (new QList([])) %}
  | "[" elements "]"        {% ([,elem, ]) => (elem) %}

set ->
   "{" "}"                   {% ([, values, ]) => (new QSet(values)) %}
  | "{" elements "}"         {% ([,elem, ]) => (elem) %}

elements ->
      collectionValue "," elements {% ([element, ,elements]) => (elements.push(element)) %}
    | collectionValue       {% ([element]) => (new QList([element])) %}

range ->
      "[" value ".." value "]"   {% ([, elemA, , elemC, ]) => (new QEnumeration(elemA, null, elemC)) %}
    | "[" value "," value ".." value "]"   {% ([, elemA, , elemB, , elemC, ]) => (new QEnumeration(elemA, elemB, elemC)) %}

collection ->
   list                     {% id %}
  | set                     {% id %}

collectionValue->
   value                   {% id %}
  | key ":" exp            {% ([key, ,value]) => (new QKeyValue(key,value))%}

# Atoms

identifier ->
    %identifier             {% ([id]) => (id.value) %}

number ->
    %integer                {% ([id]) => (id.value) %}
  | %hex                    {% ([id]) => (id.value) %}
  | %float                  {% ([id]) => (id.value) %}
  | "Infinity"              {% ([id]) => (Number.POSITIVE_INFINITY) %}
  | "NaN"                   {% ([id]) => (NaN) %}

literals ->
  %literal                  {% ([id]) => (id.value) %}

nullvalue ->
  "null"                    {% id %}
