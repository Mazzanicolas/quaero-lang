@preprocessor typescript

@{%

import {
  Addition,Assignment,CompareEqual,CompareNotEqual,CompareLessOrEqual,CompareLess,CompareGreatOrEqual,CompareGreat,
  Conjunction,Disjunction,IfThenElse,IfThen,Multiplication,Division,Negation,Numeral,QString,Sequence,Substraction,
  TruthValue,Variable,QNull,QKeyValue,QList,QSet,QNNegation,QCardinal,QIn,QIndex,QIntersection,QConcatenation,
  QUnion,QDifference,QGetKey,QFunction,QFReturn,QFCall,QFor,ExpAsStmt,WhileDo,QCompLst,QCompSet,QEnumeration,
  QEnumerationSet,ExecuteOrder66,QConditional,LoadFile
} from '../ast/AST';

import { tokens } from './Tokens';
import { MyLexer } from './Lexer';

const lexer = new MyLexer(tokens);

%}

@lexer lexer

# Statements

stmt ->
    stmtelse                              {% id %} #Si se baja y agrega | esto se activa el modo "Funciones al principio" 1/3
  | ">>>" function:* ">>>" stmt "<<<"     {% ([,fun,,code,]) => (new ExecuteOrder66(fun,code)) %} #Si sube esto y saca el | se activa el modo "Funciones al principio" 2/3
  | "if" "(" exp ")" stmt                 {% ([, , cond, , thenBody]) => (new IfThen(cond, thenBody)) %}#Usar llaves para los bloques
  | "return" exp ";"                      {% ([, exp]) => (new QFReturn(exp)) %}
  | "@load" literals  ";"                 {% ([,file,]) => (new LoadFile(file)) %}

stmtelse ->
    identifier "=" exp ";"                {% ([id, , exp, ]) => (new Assignment(id, exp)) %}
  | exp ";"                               {% ([exp, ]) => (new ExpAsStmt(exp)) %}
  | "{" stmt:* "}"                        {% ([, statements, ]) => (new Sequence(statements)) %}
  | "while" exp "do" stmt                 {% ([, cond, , body]) => (new WhileDo(cond, body)) %}
  | "if" "(" exp ")" stmtelse "else" stmt {% ([, ,cond, , thenBody, , elseBody]) => (new IfThenElse(cond, thenBody, elseBody)) %}
  | "for" "(" lstExp ")" stmt            {% ([,,lstExp,,stmt]) => (new QFor(lstExp,stmt)) %}
  | function                              {% id %} #Si se comenta esto se activa el modo "Funciones al principio" 3/3

function ->
   "function" identifier "(" ")" "{" stmt:* "}" {% ([,id, , , ,stmt, ]) => (new QFunction(id,[],stmt)) %}
  | "function" identifier "(" functionValue ")" "{" stmt:* "}" {% ([,id, , val , , ,stmt, ]) => (new QFunction(id,val,stmt)) %}

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
  | quinn                   {% id %}

quinn ->
   exp "<-" value          {% ([val, , list]) => (new QIn(val,list))%}
   | neg                   {% id %}

neg ->
    "!" value               {% ([, exp]) => (new Negation(exp)) %}
  | "-" value               {% ([, val]) => (new QNNegation(val)) %}
  | value                   {% id %}

value ->
    "(" exp ")"             {% ([, exp, ]) => (exp) %}
  | number                  {% ([num]) => (new Numeral(num)) %}
  | "true"                  {% () => (new TruthValue(true)) %}
  | "false"                 {% () => (new TruthValue(false)) %}
  | "(" value "if" exp "else" value ")" {% ([,vt,,b,,vf,]) => (new QConditional(vt,b,vf))%}
  | literals                {% ([literal]) => (new QString(literal))%}
  | value "[" neg "]"     {% ([value, ,index, ]) => (new QIndex(value,index)) %}
  | identifier "(" ")"      {%([id, , ]) => (new QFCall(id,[]))%}
  | identifier "(" functionCallValue ")" {%([id, , fcv, ]) => (new QFCall(id,fcv))%}
  | identifier              {% ([id]) => (new Variable(id)) %}
  | nullvalue               {% ([id]) => (new QNull())%}
  | "#" value               {% ([, val]) => (new QCardinal(val)) %}
  | exp "." value           {% ([exp, , value]) => (new QGetKey(exp,value)) %}
  | collection              {% id %}
  | range                   {% id %}
  |"{" exp "for" lstExp "}" {% ([,exp,,lstExp,]) => (new QCompSet(exp,lstExp)) %}
  |"[" exp "for" lstExp "]" {% ([,exp,,lstExp,]) => (new QCompLst(exp,lstExp)) %}

lstExp ->
   exp                     {% ([exprs]) => ([exprs]) %}
  | exp "," lstExp         {% ([exprs,,lstExp]) => {lstExp.push(exprs);return lstExp;}%}
# Collections
key ->
  literals                {% ([literal]) => (new QString(literal))%}
| identifier              {% ([id]) => (new QString(id)) %}

list->
   "[" "]"                {% ([id]) => (new QList([])) %}
  | "[" elements "]"      {% ([,elem, ]) => (elem) %}

elements ->
        collectionValue "," elements {% ([element, ,elements]) => (elements.push(element)) %}
      | collectionValue              {% ([element]) => (new QList([element])) %}

set ->
   "{" "}"                {% ([, ]) => (new QSet([])) %}
  | "{" elementSet "}"    {% ([,elem, ]) => (elem) %}

elementSet ->
      collectionValue "," elementSet {% ([elem, ,elementSet]) => (elementSet.push(elem)) %}
    | collectionValue                {% ([elem]) => (new QSet([elem])) %}

range ->
      "[" exp ".." exp "]"           {% ([, elemA, , elemC, ]) => (new QEnumeration(elemA, null, elemC)) %}
    | "[" exp "," exp ".." exp "]"   {% ([, elemA, , elemB, , elemC, ]) => (new QEnumeration(elemA, elemB, elemC)) %}
    | "{" exp ".." exp "}"           {% ([, elemA, , elemC, ]) => (new QEnumerationSet(elemA, null, elemC)) %}
    | "{" exp "," exp ".." exp "}"   {% ([, elemA, , elemB, , elemC, ]) => (new QEnumerationSet(elemA, elemB, elemC)) %}
collection ->
   list                   {% id %}
  | set                   {% id %}

collectionValue->
   exp                    {% id %}
  | key ":" exp           {% ([key, ,value]) => (new QKeyValue(key,value))%}

# Atoms

identifier ->
    %identifier           {% ([id]) => (id.value) %}

number ->
    %integer              {% ([id]) => (id.value) %}
  | %hex                  {% ([id]) => (id.value) %}
  | %float                {% ([id]) => (id.value) %}
  | "Infinity"            {% ([id]) => (Number.POSITIVE_INFINITY) %}
  | "NaN"                 {% ([id]) => (NaN) %}

literals ->
  %literal                {% ([id]) => (JSON.parse(id.value)) %}

nullvalue ->
  "null"                  {% id %}
