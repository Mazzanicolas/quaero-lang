export const tokens = {

  // Punctuation
  '&&':         '&&',
  '||':         '||',
  '(':          '(',
  ')':          ')',
  '{':          '{',
  '}':          '}',
  '[':          '[',
  ']':          ']',
  '*':          '*',
  '\\/':        '\\/',
  '/\\':        '/\\',
  '/=':         '/=',
  '/':          /\/(?!\*)/,
  '++':         '++',
  '--':         '--',
  '+':          '+',
  '-':          '-',
  ';':          ';',
  ',':          ',',
  '<=':         '<=',
  '>=':         '>=',
  '<-':         '<-',
  '<':          '<',
  '>':          '>',
  '==':         '==',
  '=':          '=',
  '!':          '!',
  ':':          ':',
  '#':          '#',
  '.':          '.',

  // Keywords
  'do':         'do',
  'while':      'while',
  'if':         'if',
  'then':       'then',
  'else':       'else',
  'true':       'true',
  'false':      'false',
  'length':     'length',
  'Infinity':   'Infinity',
  'NaN':        'NaN',
  'null':       'null',
  'function':   'function',
  'for':        'for',

  // Atoms
  literal:      { match:/"(?:\\["bfnrt\/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*"/,value: (x: string) => (JSON.parse(x)) },
  float:        { match: /[0-9]+\.[0-9]+(?:[eE][-+]?[0-9]+)?/, value: (x: string) => (parseFloat(x)) },
  hex:          { match: /0[xX][0-9a-f-A-F]+/, value: (x: string) => (parseInt(x,16)) },
  integer:      { match: /[0-9]+/, value: (x: string) => (parseFloat(x)) },

  // Identifiers
  identifier:   /[a-zA-Z_][a-zA-Z0-9_]*/,

  // Ignored tokens
  _comment:     { match: /\/\*.*?\*\//, lineBreaks: true },
  _ws:          { match: /[ \t\r\n\f\v]+/, lineBreaks: true },
};
