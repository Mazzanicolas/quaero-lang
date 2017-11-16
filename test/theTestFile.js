const main = require('../bin/main.js');
const assert = require('chai').assert;
//const addition = require('../mainTest.js').addition;

describe('Basic Declarations', function(){
  it('Integer:  foo=1;        >> { foo = 1 }',function(){
    assert.equal("{ foo = 1 }",main.testThis("foo=1;"));
  });
  it('Float:    foo=1.234;    >> { foo = 1.234 }',function(){
    assert.equal("{ foo = 1.234 }",main.testThis("foo=1.234;"));
  });
  it('Boolean:  foo=true;     >> { foo = true }',function(){
    assert.equal("{ foo = true }",main.testThis("foo=true;"))
  });
  it('Hex:      foo=0xC4f3;   >> { foo = 50419 }',function(){
    assert.equal("{ foo = 50419 }",main.testThis("foo=0xC4f3;"))
  });
  it('Sctfc.Nt: foo=1e-4;     >> { foo = 0.0001 }',function(){
    assert.equal("{ foo = 0.0001 }",main.testThis("foo=1e-4;"))
  });
  it('Sctfc.Nt: foo=0.5E-11;  >> { foo = 5e-12 }',function(){
    assert.equal("{ foo = 5e-12 }",main.testThis("foo=0.5E-11;"))
  });
  it('Infinity: foo=Infinity; >> { foo = Infinity }',function(){
    assert.equal("{ foo = Infinity }",main.testThis("foo=Infinity;"))
  });
  it('NaN:      foo=NaN;      >> { foo = NaN }',function(){
    assert.equal("{ foo = NaN }",main.testThis("foo=NaN;"))
  });
  it('Null:     foo=null;     >> { foo = null }',function(){
    assert.equal('{ foo = null }',main.testThis('foo=null;'))
  });
  it('Variable: _f_o=null;    >> { _f_o = null }',function(){
    assert.equal('{ _f_o = null }',main.testThis('_f_o=null;'))
  });
  it('¬Octal:   foo=010;      >> { foo = 10 }',function(){
    assert.equal("{ foo = 10 }",main.testThis("foo=010;"))
  });
  it('Literal:  foo="Hello";  >> { foo = Hello }',function(){
    assert.equal('{ foo = Hello }',main.testThis('foo="Hello";'))
  });
  /*it('Literal:  foo="\\\"u00a1Hola\\t!\\\""; >> { foo = ¡Hola        ! }',function(){
    assert.equal('{ foo = "¡Hola        !" }',main.testThis('foo="\"\u00a1Hola\t!\"";'))
  });*///Funciona pero no funciona
});
describe('Basic Operations', function(){
  it('Addition Integer:     foo=2+2;   >> { foo = 4 }',function(){
    assert.equal("{ foo = 4 }",main.testThis("foo=2+2;"));
  });
  it('Addition Float:       foo=2.1+2; >> { foo = 4.1 }',function(){
    assert.equal("{ foo = 4.1 }",main.testThis("foo=2.1+2;"));
  });
  it('Substraction Integer: foo=2-2;   >> { foo = 0 }',function(){
    assert.equal("{ foo = 0 }",main.testThis("foo=2-2;"));
  });
  it('Substraction Float:   foo=2.1-2; >> { foo = 0.10000000000000009 }',function(){
    assert.equal("{ foo = 0.10000000000000009 }",main.testThis("foo=2.1-2;"));
  });
  it('Mult. Integer:        foo=2*2;   >> { foo = 4 }',function(){
    assert.equal("{ foo = 4 }",main.testThis("foo=2*2;"));
  });
  it('Mult. Float:          foo=2*0.5; >> { foo = 1 }',function(){
    assert.equal("{ foo = 1 }",main.testThis("foo=2*0.5;"));
  });
  it('Division Integer:     foo=2/2;   >> { foo = 1 }',function(){
    assert.equal("{ foo = 1 }",main.testThis("foo=2/2;"));
  });
  it('Division Float:       foo=1/2;   >> { foo = 0.5 }',function(){
    assert.equal("{ foo = 0.5 }",main.testThis("foo=1/2;"));
  });
  it('Opposite Integer:     {foo=2;foo=-foo;}   >> { foo = -2 }',function(){
    assert.equal("{ foo = -2 }",main.testThis("{foo=2; foo=-foo;}"));
  });
  it('Opposite Float:       {foo=2.1;foo=-foo;} >> { foo = -2.1 }',function(){
    assert.equal("{ foo = -2.1 }",main.testThis("{foo=2.1; foo=-foo;}"));
  });
});
