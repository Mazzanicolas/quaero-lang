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
  '/=':         '/=',
  '/':          /\/(?!\*)/,
  '+':          '+',
  '-':          '-',
  ';':          ';',
  '<=':         '<=',
  '>=':         '>=',
  '<':          '<',
  '>':          '>',
  '==':         '==',
  '=':          '=',
  '!':          '!',

  // Keywords
  'do':         'do',
  'if':         'if',
  'then':       'then',
  'else':       'else',
  'true':       'true',
  'false':      'false',
  'null':       'null',
  // Atoms
  infinity:     { match:/Infinity/,value: (x: string) => (Infinity) },
  nan:          { match:/NaN/,value: (x: string) => (NaN) },
  literal:      { match:/\"[^"]*\"/,value: (x: string) => (JSON.parse(x)) },
  float:        { match: /(?:[0-9]+\.)?[0-9]+(?:[eE][-+]?[0-9]+)?/, value: (x: string) => (parseFloat(x)) },
  hex:          { match: /0[xX][0-9a-f-A-F]+/, value: (x: string) => (parseInt(x,16)) },
  integer:      { match: /[0-9]+/, value: (x: string) => (parseFloat(x)) },

  // Identifiers
  identifier:   /[a-zA-Z_][a-zA-Z0-9_]*/,

  // Ignored tokens
  _comment:     { match: /\/\*.*?\*\//, lineBreaks: true },
  _ws:          { match: /[ \t\r\n\f\v]+/, lineBreaks: true },
};
