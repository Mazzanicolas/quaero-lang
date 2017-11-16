
const main = require('../bin/main.js');
const assert = require('chai').assert;
//const addition = require('../mainTest.js').addition;

describe('Basic Declarations', function(){
  it('Integer:  foo=1;        >> { foo = 1 }',function(){
    assert.equal(1,main.testThis("foo=1;").get("foo"));
  });
  it('Float:    foo=1.234;    >> { foo = 1.234 }',function(){
    assert.equal(1.234,main.testThis("foo=1.234;").get("foo"));
  });
  it('Boolean:  foo=true;     >> { foo = true }',function(){
    assert.equal(true,main.testThis("foo=true;").get("foo"))
  });
  it('Hex:      foo=0xC4f3;   >> { foo = 50419 }',function(){
    assert.equal(50419,main.testThis("foo=0xC4f3;").get("foo"))
  });
  it('Sctfc.Nt: foo=1e-4;     >> { foo = 0.0001 }',function(){
    assert.equal(0.0001,main.testThis("foo=1e-4;").get("foo"))
  });
  it('Sctfc.Nt: foo=0.5E-11;  >> { foo = 5e-12 }',function(){
    assert.equal(5e-12,main.testThis("foo=0.5E-11;").get("foo"))
  });
  it('Infinity: foo=Infinity; >> { foo = Infinity }',function(){
    assert.equal(Infinity,main.testThis("foo=Infinity;").get("foo"))
  });
  it('NaN:      foo=NaN;      >> { foo = NaN }',function(){
    assert.equal("NaN",main.testThis("foo=NaN;").get("foo")+"")
  });
  it('Null:     foo=null;     >> { foo = null }',function(){
    assert.equal(null,main.testThis('foo=null;').get("foo"))
  });
  it('Variable: _f_o=null;    >> { _f_o = null }',function(){
    assert.equal(null,main.testThis('_f_o=null;').get("foo"))
  });
  it('¬Octal:   foo=010;      >> { foo = 10 }',function(){
    assert.equal(10,main.testThis("foo=010;").get("foo"))
  });
  it('Literal:  foo="Hello";  >> { foo = Hello }',function(){
    assert.equal("Hello",main.testThis('foo="Hello";').get("foo"))
  });
  /*it('Literal:  foo="\\\"u00a1Hola\\t!\\\""; >> { foo = ¡Hola        ! }',function(){
    assert.equal('{ foo = "¡Hola        !" }',main.testThis('foo="\"\u00a1Hola\t!\"";'))
  });*///Funciona pero no funciona
});
describe('Basic Operations', function(){
  it('Addition Integer:     foo=2+2;   >> { foo = 4 }',function(){
    assert.equal(4,main.testThis("foo=2+2;").get("foo"));
  });
  it('Addition Float:       foo=2.1+2; >> { foo = 4.1 }',function(){
    assert.equal(4.1,main.testThis("foo=2.1+2;").get("foo"));
  });
  it('Substraction Integer: foo=2-2;   >> { foo = 0 }',function(){
    assert.equal(0,main.testThis("foo=2-2;").get("foo"));
  });
  it('Substraction Float:   foo=2.1-2; >> { foo = 0.10000000000000009 }',function(){
    assert.equal(0.10000000000000009,main.testThis("foo=2.1-2;").get("foo"));
  });
  it('Mult. Integer:        foo=2*2;   >> { foo = 4 }',function(){
    assert.equal(4,main.testThis("foo=2*2;").get("foo"));
  });
  it('Mult. Float:          foo=2*0.5; >> { foo = 1 }',function(){
    assert.equal(1,main.testThis("foo=2*0.5;").get("foo"));
  });
  it('Division Integer:     foo=2/2;   >> { foo = 1 }',function(){
    assert.equal(1,main.testThis("foo=2/2;").get("foo"));
  });
  it('Division Float:       foo=1/2;   >> { foo = 0.5 }',function(){
    assert.equal(0.5,main.testThis("foo=1/2;").get("foo"));
  });
  it('Opposite Integer:     {foo=2;foo=-foo;}   >> { foo = -2 }',function(){
    assert.equal(-2,main.testThis("{foo=2; foo=-foo;}").get("foo"));
  });
  it('Opposite Float:       {foo=2.1;foo=-foo;} >> { foo = -2.1 }',function(){
    assert.equal(-2.1,main.testThis("{foo=2.1; foo=-foo;}").get("foo"));
  });
});

describe('Basic Comparations', function(){
  it('Equals Boolean:  foo=true==true; >> { foo = true }',function(){
    assert.equal(true,main.testThis("foo=true==true;").get("foo"));
  });
  it('Equals Integer:  foo=1==1;       >> { foo = true }',function(){
    assert.equal(true,main.testThis("foo=1==1;").get("foo"));
  });
  it('Equals String:   foo="a"=="a";   >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo="a"=="a";').get("foo"));
  });
  it('Different T:     foo=2/=1;       >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=2/=1;').get("foo"));
  });
  it('Different F:     foo=2/=2;       >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=2/=2;').get("foo"));
  });
  it('Greater True:    foo=2>1;        >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=2>1;').get("foo"));
  });
  it('Greater False:   foo=1>2;        >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=1>2;').get("foo"));
  });
  it('Greater Equal T: foo=2>=2;       >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=2>=2;').get("foo"));
  });
  it('Greater Equal F: foo=1>=2;       >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=1>=2;').get("foo"));
  });
  it('Less True:       foo=1<2;        >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=1<2;').get("foo"));
  });
  it('Less False:      foo=2<1;        >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=2<1;').get("foo"));
  });
  it('Less Equal T:    foo=2<=2;       >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=2<=2;').get("foo"));
  });
  it('Less Equal F:    foo=2<=1;       >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=2<=1;').get("foo"));
  });
});

describe('Boolean Operations', function(){
  it('Negation:  foo=!true;        >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=!true;').get("foo"));
  });
  it('And True:  foo=true&&true;   >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=true&&true;').get("foo"));
  });
  it('And false: foo=true&&false;  >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=false&&true;').get("foo"));
  });
  it('Or True:   foo=true||false;  >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=true||false;').get("foo"));
  });
  it('Or False:  foo=false||false; >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=false||false;').get("foo"));
  });
});

describe('For Loop', function(){
  it('1st Type: {x=1;foo=1;xs=[1,2,3,4,5]} - for (x <- xs) y=y*x;  >> { foo = 120 }',function(){
    assert.equal(120,main.testThis('{x=1;foo=1;xs=[1,2,3,4,5];for (x <- xs) foo=foo*x;}').get("foo"));
  });
});
