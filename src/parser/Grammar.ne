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
  Multiplication,
  Division,
  Negation,
  NegationNumber,
  Numeral,
  QString,
  Sequence,
  Substraction,
  TruthValue,
  Null,
  Variable,
  Element,
  QList,
  QSet,
  QCardinal,
  QIn,
  QIndex,
  QConcatenation
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

#Collections
set ->
   "{" elements "}"        {% ([,elem,]) => (elem) %}
  | "{" "}"                {% ([,]) => (new QSet([])) %}#null es epsilon. Esta bien? si uso element -> null estaria permitiendo [,] deberia?


list ->
   "[" elements "]"        {% ([ ,elem, ]) => (elem) %}
  | "[" "]"                {% ([ , ]) => (new QList([])) %}#null es epsilon. Esta bien? si uso element -> null estaria permitiendo [,] deberia?

elements ->
   element "," elements    {% ([element, ,elements]) => (elements.push(element)) %}#por derecha para que no se nos chanflee la cosa (el orden)
  | element                {% ([element]) => (new QList([element])) %}

element ->
   elemValue ":" exp        {% ([key, , exp]) => (new Element(key, exp)) %} #Que es mejor? a) crear dos producciones una para literales y otra para indentificadores b) hacer un subgrupo en values c) que sea value : value
  | exp                    {% id %}

# Expressions

exp ->
    exp "&&" comp           {% ([lhs, , rhs]) => (new Conjunction(lhs, rhs)) %}
  | exp "||" comp           {% ([lhs, , rhs]) => (new Disjunction(lhs, rhs)) %}
  | collection "[" value "]"{% ([coll, ,val, ]) => (new QIndex(coll,val)) %} #Ordenar
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
  | addsub "++" muldiv     {% ([lhs, , rhs]) => (new QConcatenation(lhs,rhs)) %}
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
  | collection              {% id %}#¿Vale la pena que exista?
  | literals                {% ([literal]) => (new QString(literal))%}
  | "#" value               {% ([, coll]) => (new QCardinal(coll)) %} #Si no hace falta que este en el AST se puede crear un metodo en QList o un Collections inclusive
  | value "<-" collection   {% ([val, , coll]) => (new QIn(val,coll)) %} #Cambiar de lugar

collection ->
   list                     {% id %}
  | set                     {% id %}
  | identifier              {% ([id]) => (new Variable(id)) %}#Definitivamente no va aca

elemValue -> #Esto tiene sentido siempre cuando no exista una subdivision con parte de esto y algo de value
   literals                 {% ([literal]) => (new QString(literal))%}
  | identifier              {% ([id]) => (new QString(id)) %}

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
