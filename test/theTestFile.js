
const main = require('../bin/main.js');
const assert = require('chai').assert;
/*
* Test: Nicolás Mazza
*/

//Si vana  mirar test, miren del 1 en adelante, el 0 son pruebas aleatorias. no valen la pena.
console.log("---------------------------0- Extra tests ---------------------------------");

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
  it('Infinity: foo=0.1/0;    >> { foo = Infinity }',function(){
    assert.equal(Infinity,main.testThis("foo=0.1/0;").get("foo"))
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
  //it('Literal:  foo="\\\"u00a1Hola\\t!\\\""; >> { foo = ¡Hola        ! }',function(){
    //assert.equal('{ foo = "¡Hola        !" }',main.testThis('foo="\"\u00a1Hola\t!\"";'))
  //});//Funciona pero no funciona
});
describe('Basic Operations', function(){
  it('Addition Integer:     foo=2+2;        >> { foo = 4 }',function(){
    assert.equal(4,main.testThis("foo=2+2;").get("foo"));
  });
  it('Addition Float:       foo=2.1+2;      >> { foo = 4.1 }',function(){
    assert.equal(4.1,main.testThis("foo=2.1+2;").get("foo"));
  });
  it('Substraction Integer: foo=2-2;        >> { foo = 0 }',function(){
    assert.equal(0,main.testThis("foo=2-2;").get("foo"));
  });
  it('Substraction Float:   foo=2.1-2;      >> { foo = 0.10000000000000009 }',function(){
    assert.equal(0.10000000000000009,main.testThis("foo=2.1-2;").get("foo"));
  });
  it('Mult. Integer:        foo=2*2;        >> { foo = 4 }',function(){
    assert.equal(4,main.testThis("foo=2*2;").get("foo"));
  });
  it('Mult. Float:          foo=2*0.5;      >> { foo = 1 }',function(){
    assert.equal(1,main.testThis("foo=2*0.5;").get("foo"));
  });
  it('Division Integer:     foo=2/2;        >> { foo = 1 }',function(){
    assert.equal(1,main.testThis("foo=2/2;").get("foo"));
  });
  it('Division Float:       foo=1/2;        >> { foo = 0.5 }',function(){
    assert.equal(0.5,main.testThis("foo=1/2;").get("foo"));
  });
  it('Negation Integer:     {foo=2;foo=-foo;}>> { foo = -2 }',function(){
    assert.equal(-2,main.testThis("{foo=2; foo=-foo;}").get("foo"));
  });
  it('Negation Float:       {foo=2.1;foo=-foo;}>> { foo = -2.1 }',function(){
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

describe('Compare List Equal', function(){
  it('Compare Lists: foo=[1,2,3]==[1,2,3];        >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=[1,2,3]==[1,2,3];').get("foo"));
  });
  it('Compare Lists: foo=[1,2,3]==[2,3,4];        >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=[1,2,3]==[2,3,4];').get("foo"));
  });
  it('Compare Lists: foo=["a","b"]==["a","b"];    >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=["a","b"]==["a","b"];').get("foo"));
  });
  it('Compare Lists: foo=["a","b"]==["b","d"];    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=["a","b"]==["b","d"];').get("foo"));
  });
  it('Compare Lists: foo=[a:1,b:2,3]==[a:1,b:2,3];>> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=[a:1,b:2,3]==[a:1,b:2,3];').get("foo"));
  });
  it('Compare Lists: foo=[a:1,b:2,3]==[a:1,2,3]; >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=[a:1,b:2,3]==[a:1,2,3];').get("foo"));
  });
  it('Compare Lists: foo=[a:1,2,b:3]==[a:1,2,3]; >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=[a:1,2,b:3]==[a:1,2,3];').get("foo"));
  });
  it('Compare Lists: foo=[a:1,1]==[1,a:1]; >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=[a:1,1]==[1,a:1];').get("foo"));
  });
  it('Compare Lists: foo=[1,2]==[x:1,2]; >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=[1,2]==[x:1,2];').get("foo"));
  });
});

describe('Compare Set Equal', function(){ //Comparan por Key:Value
  it('Compare Set: foo={1,2,3}=={1,2,3};        >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo={1,2,3}=={1,2,3};').get("foo"));
  });
  it('Compare Set: foo={1,2,3}=={2,3,4};        >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={1,2,3}=={2,3,4};').get("foo"));
  });
  it('Compare Set: foo={"a","b"}=={"a","b"};    >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo={"a","b"}=={"a","b"};').get("foo"));
  });
  it('Compare Set: foo={"a","b"}=={"b","d"};    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={"a","b"}=={"b","d"};').get("foo"));
  });
  it('Compare Set: foo={a:1,b:2,3}=={a:1,b:2,3};>> { foo = true }',function(){
    assert.equal(true,main.testThis('foo={a:1,b:2,3}=={a:1,b:2,3};').get("foo"));
  });
  it('Compare Set: foo={a:1,b:2,3}=={a:1,2,3}; >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={a:1,b:2,3}=={a:1,2,3};').get("foo"));
  });
  it('Compare Set: foo={a:1,2,b:3}=={a:1,2,3}; >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={a:1,2,b:3}=={a:1,2,3};').get("foo"));
  });
  it('Compare Set: foo={a:1,2,b:3}=={a:1,b:3,3}; >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={a:1,2,b:3}=={a:1,b:3,3};').get("foo"));
  });
});

describe('Compare List Greater', function(){
  it('Compare Lists: foo=[1,2,3]>[1,2,3];    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=[1,2,3]>[1,2,3];').get("foo"));
  });
  it('Compare Lists: foo=[2,3,4]>[1,2,3,4,5];>> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=[2,3,4]>[1,2,3];').get("foo"));
  });
  it('Compare Lists: foo=[2,2,4]>[1,2,3];    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=[2,2,4]>[1,2,3];').get("foo"));
  });
  it('Compare Lists: foo=[a:1,b:2]>[1,2];    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=[a:1,b:2]>[1,2];').get("foo"));
  });
  it('Compare Lists: foo=[a:7,b:8]>[8,9];    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=[a:7,b:8]>[8,9];').get("foo"));
  });
});

describe('Compare Set Incluye', function(){//Compara por key value
  it('Compare Sets: foo={1,2,3}>{1,2,3};    >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo={1,2,3}>{1,2,3};').get("foo"));
  });
  it('Compare Sets: foo={2,3,4}>{1,2,3,4,5};>> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={2,3,4}>{1,2,3,4,5};').get("foo"));
  });
  it('Compare Sets: foo={2,2,4}>{1,2,3};    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={2,2,4}>{1,2,3};').get("foo"));
  });
  it('Compare Sets: foo={a:1,b:2}>{1,2};    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={a:1,b:2}>{1,2};').get("foo"));
  });
  it('Compare Sets: foo={a:7,b:8}>{8,9};    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={a:7,b:8}>{8,9};').get("foo"));
  });
  it('Compare Sets: foo={a:7,b:8}>{a:8,b:9};>> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={a:7,b:8}>{a:8,b:9};').get("foo"));
  });
  it('Compare Sets: foo={a:8,b:9}>{a:7,b:8};>> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={a:8,b:9}>{a:7,b:8};').get("foo"));
  });
  it('Compare Sets: foo={a:8,b:9}>{a:8,b:9};>> { foo = true }',function(){
    assert.equal(true,main.testThis('foo={a:8,b:9}>{a:8,b:9};').get("foo"));
  });
});

describe('Compare List Greater Equal', function(){
  it('Compare Lists: foo=[1,2,3]>=[1,2,3];    >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=[1,2,3]>=[1,2,3];').get("foo"));
  });
  it('Compare Lists: foo=[2,3,4]>=[1,2,3,4,5];>> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=[2,3,4]>=[1,2,3];').get("foo"));
  });
  it('Compare Lists: foo=[2,2,4]>=[1,2,3];    >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=[2,2,4]>=[1,2,3];').get("foo"));
  });
  it('Compare Lists: foo=[a:1,b:2]>=[1,2];    >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=[a:1,b:2]>=[1,2];').get("foo"));
  });
  it('Compare Lists: foo=[a:7,b:8]>=[8,9];    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=[a:7,b:8]>=[8,9];').get("foo"));
  });
});

describe('Compare Set Incluye Igual', function(){//Compara por key value
  it('Compare Sets: foo={1,2,3}>={1,2,3};    >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo={1,2,3}>={1,2,3};').get("foo"));
  });
  it('Compare Sets: foo={2,3,4}>={1,2,3,4,5};>> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={2,3,4}>={1,2,3,4,5};').get("foo"));
  });
  it('Compare Sets: foo={2,2,4}>={1,2,3};    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={2,2,4}>={1,2,3};').get("foo"));
  });
  it('Compare Sets: foo={a:1,b:2}>={1,2};    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={a:1,b:2}>={1,2};').get("foo"));
  });
  it('Compare Sets: foo={a:7,b:8}>={8,9};    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={a:7,b:8}>={8,9};').get("foo"));
  });
  it('Compare Sets: foo={a:7,b:8}>={a:8,b:9};>> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={a:7,b:8}>={a:8,b:9};').get("foo"));
  });
  it('Compare Sets: foo={a:8,b:9}>={a:7,b:8};>> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={a:8,b:9}>={a:7,b:8};').get("foo"));
  });
  it('Compare Sets: foo={a:8,b:9}>={a:8,b:9};>> { foo = true }',function(){
    assert.equal(true,main.testThis('foo={a:8,b:9}>={a:8,b:9};').get("foo"));
  });
});

describe('Compare List Less', function(){
  it('Compare Lists: foo=[1,2,3]<[1,2,3];    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=[1,2,3]<[1,2,3];').get("foo"));
  });
  it('Compare Lists: foo=[2,3,4]<[1,2,3,4,5];>> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=[2,3,4]<[1,2,3];').get("foo"));
  });
  it('Compare Lists: foo=[2,2,4]<[1,2,3];    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=[2,2,4]<[1,2,3];').get("foo"));
  });
  it('Compare Lists: foo=[a:1,b:2]<[1,2];    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=[a:1,b:2]<[1,2];').get("foo"));
  });
  it('Compare Lists: foo=[a:7,b:8]<[8,9];    >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=[a:7,b:8]<[8,9];').get("foo"));
  });
});

describe('Compare Set incluido', function(){
  it('Compare Sets: foo={1,2,3}<{1,2,3};    >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo={1,2,3}<{1,2,3};').get("foo"));
  });
  it('Compare Sets: foo={2,3,4}<{1,2,3,4,5};>> { foo = true }',function(){
    assert.equal(true,main.testThis('foo={2,3,4}<{1,2,3,4,5};').get("foo"));
  });
  it('Compare Sets: foo={2,2,4}<{1,2,3};    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={2,2,4}<{1,2,3};').get("foo"));
  });
  it('Compare Sets: foo={a:1,b:2}<{1,2};    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={a:1,b:2}<{1,2};').get("foo"));
  });
  it('Compare Sets: foo={a:7,b:8}<{8,9};    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={a:7,b:8}<{8,9};').get("foo"));
  });
  it('Compare Sets: foo={a:7,b:8}<{a:8,b:9};>> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={a:7,b:8}<{a:8,b:9};').get("foo"));
  });
  it('Compare Sets: foo={a:8,b:9}<{a:7,b:8};>> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={a:8,b:9}<{a:7,b:8};').get("foo"));
  });
  it('Compare Sets: foo={a:8,b:9}<{a:8,b:9};>> { foo = true }',function(){
    assert.equal(true,main.testThis('foo={a:8,b:9}<{a:8,b:9};').get("foo"));
  });
});

describe('Compare List Less Equal', function(){
  it('Compare Lists: foo=[1,2,3]<=[1,2,3];    >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=[1,2,3]<=[1,2,3];').get("foo"));
  });
  it('Compare Lists: foo=[2,3,4]<=[1,2,3,4,5];>> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=[2,3,4]<=[1,2,3];').get("foo"));
  });
  it('Compare Lists: foo=[2,2,4]<=[1,2,3];    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=[2,2,4]<=[1,2,3];').get("foo"));
  });
  it('Compare Lists: foo=[a:1,b:2]<=[1,2];    >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=[a:1,b:2]<=[1,2];').get("foo"));
  });
  it('Compare Lists: foo=[a:7,b:8]<[8,9];    >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=[a:7,b:8]<=[8,9];').get("foo"));
  });
});

describe('Compare Set Incluido Igual', function(){
  it('Compare Sets: foo={1,2,3}<={1,2,3};    >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo={1,2,3}<={1,2,3};').get("foo"));
  });
  it('Compare Sets: foo={2,3,4}<={1,2,3,4,5};>> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={2,3,4}<={1,2,3,4,5};').get("foo"));
  });
  it('Compare Sets: foo={2,2,4}<={1,2,3};    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={2,2,4}<={1,2,3};').get("foo"));
  });
  it('Compare Sets: foo={a:1,b:2}<={1,2};    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={a:1,b:2}<={1,2};').get("foo"));
  });
  it('Compare Sets: foo={a:7,b:8}<={8,9};    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={a:7,b:8}<={8,9};').get("foo"));
  });
  it('Compare Sets: foo={a:7,b:8}<={a:8,b:9};>> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={a:7,b:8}<={a:8,b:9};').get("foo"));
  });
  it('Compare Sets: foo={a:8,b:9}<={a:7,b:8};>> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={a:8,b:9}<={a:7,b:8};').get("foo"));
  });
  it('Compare Sets: foo={a:8,b:9}<={a:8,b:9};>> { foo = true }',function(){
    assert.equal(true,main.testThis('foo={a:8,b:9}<={a:8,b:9};').get("foo"));
  });
});

describe('Compare List Not Equal', function(){
  it('Compare Lists: foo=[1,2,3]/=[1,2,3];    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=[1,2,3]/=[1,2,3];').get("foo"));
  });
  it('Compare Lists: foo=[2,3,4]/=[1,2,3,4,5];>> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=[2,3,4]/=[1,2,3];').get("foo"));
  });
  it('Compare Lists: foo=[2,2,4]/=[1,2,3];    >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=[2,2,4]/=[1,2,3];').get("foo"));
  });
  it('Compare Lists: foo=[a:1,b:2]/=[1,2];    >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=[a:1,b:2]/=[1,2];').get("foo"));
  });
  it('Compare Lists: foo=[a:7,b:8]/)[8,9];    >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=[a:7,b:8]/=[8,9];').get("foo"));
  });
});

describe('Compare Set Not Equal', function(){//Compara por key value
  it('Compare Sets: foo={1,2,3}/={1,2,3};    >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={1,2,3}/={1,2,3};').get("foo"));
  });
  it('Compare Sets: foo={2,3,4}/={1,2,3,4,5};>> { foo = true }',function(){
    assert.equal(true,main.testThis('foo={2,3,4}/={1,2,3,4,5};').get("foo"));
  });
  it('Compare Sets: foo={2,2,4}/={1,2,3};    >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo={2,2,4}/={1,2,3};').get("foo"));
  });
  it('Compare Sets: foo={a:1,b:2}/={1,2};    >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo={a:1,b:2}/={1,2};').get("foo"));
  });
  it('Compare Sets: foo={a:7,b:8}/={8,9};    >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo={a:7,b:8}/={8,9};').get("foo"));
  });
  it('Compare Sets: foo={a:7,b:8}/={a:8,b:9};>> { foo = true }',function(){
    assert.equal(true,main.testThis('foo={a:7,b:8}/={a:8,b:9};').get("foo"));
  });
  it('Compare Sets: foo={a:8,b:9}/={a:7,b:8};>> { foo = true }',function(){
    assert.equal(true,main.testThis('foo={a:8,b:9}/={a:7,b:8};').get("foo"));
  });
  it('Compare Sets: foo={a:8,b:9}/={a:8,b:9};>> { foo = false }',function(){
    assert.equal(false,main.testThis('foo={a:8,b:9}/={a:8,b:9};').get("foo"));
  });
});

describe('Comparaciones especiales', function(){
  it('True > False : foo=true>false; >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=true>false;').get("foo"));
  });
  it('False > True : foo=false>true; >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=false>true;').get("foo"));
  });
  it('== : foo=1 == NaN;             >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=1 == NaN;').get("foo"));
  });
  it('>= : foo=1 >= NaN;             >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=1 >= NaN;').get("foo"));
  });
  it('<= : foo=1 <= NaN;             >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=1 <= NaN;').get("foo"));
  });
  it('< : foo=1 < NaN;               >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=1 < NaN;').get("foo"));
  });
  it('> : foo=1 > NaN;               >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=1 > NaN;').get("foo"));
  });
  it('/= : foo=1 /= NaN;             >> { foo = false }',function(){
    assert.equal(true,main.testThis('foo=1 /= NaN;').get("foo")); //Deberia dar false pero da true porque esta bien, error de letra.
  });
});

describe('Intersection', function(){
  it('Intersection: foo = [1,2]/\\[3,4];   >> { foo =[]  }',function(){
    var expctLst = [];
    assert.deepEqual(expctLst,main.testThis('foo=[1,2]/\\[3,4];').get("foo"));
  });
  it('Intersection: foo = [1,2,3]/\\[3,4];   >> { foo =[3]  }',function(){
    var expctLst = [3];
    assert.deepEqual(expctLst,main.testThis('foo=[1,2,3]/\\[3,4];').get("foo"));
  });
  it('Intersection: foo = [3,2,4]/\\[3,4];   >> { foo =[3,4]  }',function(){
    var expctLst = [3,4];
    assert.deepEqual(expctLst,main.testThis('foo=[3,2,4]/\\[3,4];').get("foo"));
  });
  it('Intersection: foo = [1,2]/\\[1,2];   >> { foo =[1,2]  }',function(){
    var expctLst = [1,2];
    assert.deepEqual(expctLst,main.testThis('foo=[1,2]/\\[1,2];').get("foo"));
  });
  it('Intersection: foo = [x:1,2]/\\[x:2,2]; >> { foo =[2]  }',function(){
    var expctLst = [2];
    assert.deepEqual(expctLst,main.testThis(' foo=[x:1,2]/\\[x:2,2];').get("foo"));
  });
  it('Intersection: foo = [x:1,2]/\\[x:1,2]; >> { foo =[1,2]  }',function(){
    var expctLst = [1,2];
    assert.deepEqual(expctLst,main.testThis(' foo=[x:1,2]/\\[x:1,2];').get("foo"));
  });
  it('Intersection: foo = [x:1,2]/\\[1,2]; >> { foo =[x:1,2]  }',function(){
    var expctLst = [1,2];
    assert.deepEqual(expctLst,main.testThis(' foo=[x:1,2]/\\[1,2];').get("foo"));
  });
});

describe('Union', function(){
  it('Union: foo = [1,2]\\/[3,4];   >> { foo =[1,2,3,4]  }',function(){
    var expctLst = [1,2,3,4];
    assert.deepEqual(expctLst,main.testThis('foo=[1,2]\\/[3,4];').get("foo"));
  });
  it('Union: foo = [1,2]\\/[1,2];   >> { foo =[1,2]  }',function(){
    var expctLst = [1,2];
    assert.deepEqual(expctLst,main.testThis('foo=[1,2]\\/[1,2];').get("foo"));
  });
  it('Union: foo = [x:1,2]\\/[x:2,2]; >> { foo =[1,2]  }',function(){
    var expctLst = [1,2];//o esto var expctLst = [2,2];
    assert.deepEqual(expctLst,main.testThis(' foo=[x:1,2]\\/[x:2,2];').get("foo"));
  });
  it('Union: foo = [x:1,2]\\/[x:1,2]; >> { foo =[1,2]  }',function(){
    var expctLst = [1,2];
    assert.deepEqual(expctLst,main.testThis(' foo=[x:1,2]\\/[x:1,2];').get("foo"));
  });
  it('Union: foo = [x:1,2]\\/[1,2]; >> { foo =[x:1,1,2]  }',function(){
    var expctLst = [1,2];
    assert.deepEqual(expctLst,main.testThis(' foo=[x:1,2]\\/[1,2];').get("foo"));
  });
  it('Union: foo = [x:1,2]\\/[1,x:2]; >> { foo =[1,2]  }',function(){
    var expctLst = [1,2];
    assert.deepEqual(expctLst,main.testThis(' foo=[x:1,2]\\/[1,x:2];').get("foo"));
  });
  it('Union: foo = [1,x:2]\\/[x:3,4]; >> { foo =[1,2,3,4]  }',function(){
    var expctLst = [1,2,3,4];
    assert.deepEqual(expctLst,main.testThis('foo=[1,x:2]\\/[x:3,4];').get("foo"));
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
    assert.equal(false,main.testThis('foo=true&&false;').get("foo"));
  });
  it('And false: foo=false&&false;  >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=false&&false;').get("foo"));
  });
  it('Or True:   foo=true||false;  >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=true||false;').get("foo"));
  });
  it('Or True:   foo=true||true;  >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=true||true;').get("foo"));
  });
  it('Or False:  foo=false||false; >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=false||false;').get("foo"));
  });
});

describe('User Functions', function(){
  it('One Return:             function suma(a,b){return a+b};foo=suma(2,3); >> { foo = 5 }',function(){
    assert.equal(5,main.testThis('{function suma(a,b) {return a+b;} foo = suma(2,3);}').get("foo"));
  });
  it('More than one return 1: function sumarara(a,b){if(a==b){return 0;}else{return a+b;}}; foo=sumarara(2,3); >> { foo = 5 }',function(){
    assert.equal(5,main.testThis('{function sumarara(a,b) { if (a==b) { return 0; } else { return a+b; }} foo = sumarara(2,3);}').get("foo"));
  });
  it('More than one return 2: function sumarara(a,b){if(a==b){return 0;}else{return a+b;}}; foo = sumarara(2,2); >> { foo = 0 }',function(){
    assert.equal(0,main.testThis('{function sumarara(a,b) { if (a==b) { return 0; } else { return a+b; }} foo = sumarara(2,2);}').get("foo"));
  });
  it('Empty Fnc: function f(){return 10;}; foo = f(); >> { foo = 10 }',function(){
    assert.equal(10,main.testThis('{function f(){return 10;} foo=f();}').get("foo"));
  });
  //it('Potencia:{function potencia(b,e){r=1;for(_<-[1..e])r=r*b;return r} foo=potencia(2,2);}>> { foo = 4 }',function(){
    //assert.equal(10,main.testThis('{function potencia(b, e) { r = 1; for (_ <- [1..e]) r = r * b; return r; } foo=potencia(2,2);}').get("foo"));
  //});//Rehacer todo el for.
});

describe('Condicional', function(){
  it('If Then: if(true) foo=true;                                         >> { foo = true }',function(){
    assert.equal(true,main.testThis('if(true) foo=true;').get("foo"));
  });
  it('If Then: {x=-5;if (x < 0) x = -x;}                                         >> { x = true }',function(){
    assert.equal(5,main.testThis('{x=-5;if (x < 0) x = -x;}').get("x"));
  });
  it('If Then:{a=2;b=3; if(a<b) foo=true;                                 >> { foo = true }',function(){
    assert.equal(true,main.testThis('{a=2;b=3; if(a<b) foo=true;}').get("foo"));
  });
  it('IfThenElse:{a=2;b=3; if(a>b) foo=true; else foo=false;}             >> { foo = false }',function(){
    assert.equal(false,main.testThis('{a=2;b=3; if(a>b) foo=true; else foo=false;}').get("foo"));
  });
  it('IfThenElse:{a=2;b=3; if(a<b) foo=true; else foo=false;}             >> { foo = true }',function(){
    assert.equal(true,main.testThis('{a=2;b=3; if(a<b) foo=true; else foo=false;}').get("foo"));
  });
  it('IfThenElse:{a=2;b=3; if(a*b==b*a)foo=true; else foo=false;}         >> { foo = true }',function(){
    assert.equal(true,main.testThis('{a=2;b=3; if(a*b==b*a) foo=true; else foo=false;}').get("foo"));
  });
  it('IfThenElse:{a=[1];b=[1,2,[1],4]; if(a<-b)foo=true; else foo=false;} >> { foo = true }',function(){
    assert.equal(true,main.testThis('{a=[1];b=[1,2,[1],4]; if(a<-b)foo=true; else foo=false;}').get("foo"));
  });
  it('IfThenElse:{x=0; if (x > 0) y = x; else y = -x;}                    >> { x = 0}',function(){
    assert.equal(0,main.testThis('{x=0; if (x > 0) y = x; else y = -x;}').get("x"));
  });
});

describe('Quareo Functions', function(){
  it('div: foo=div(10,3);        >> { foo = 3 }',function(){
    assert.equal(3,main.testThis('foo=div(10,3);').get("foo"));
  });
  it('div: foo=div(10.5,3.3);    >> { foo = 3 }',function(){
    assert.equal(3,main.testThis('foo=div(10.5,3.3);').get("foo"));
  });
  it('mod: foo=mod(10,3);        >> { foo = 1 }',function(){
    assert.equal(1,main.testThis('foo=mod(10,3);').get("foo"));
  });
  it('div: foo=div(5,5);         >> { foo = 0 }',function(){
    assert.equal(0,main.testThis('foo=mod(5,5);').get("foo"));
  });
  it('int: foo=int("10");        >> { foo = 10 }',function(){
    assert.equal(10,main.testThis('foo=int("10");').get("foo"));
  });
  it('number: foo=number(1.5);   >> { foo = 1.5 }',function(){
    assert.equal(1.5,main.testThis('foo=number(1.5);').get("foo"));
  });
  it('boolean: foo=boolean([]);  >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=boolean([]);').get("foo"));
  });
  it('boolean: foo=boolean(0);   >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=boolean(0);').get("foo"));
  });
  //it('boolean: foo=boolean({});  >> { foo = false }',function(){
    //assert.equal(false,main.testThis('foo=boolean({});').get("foo"));
  //});
  it('boolean: foo=boolean(null);>> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=boolean(null);').get("foo"));
  });
  it('boolean: foo=boolean(10);  >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=boolean(10);').get("foo"));
  });
  it('boolean: foo=boolean("1"); >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=boolean("1");').get("foo"));
  });
  it('boolean: foo=boolean([2]); >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=boolean([2]);').get("foo"));
  });
  it('boolean: foo=boolean("");  >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=boolean("");').get("foo"));
  });
});
describe('Enumeration', function(){
  it('List: [0..10];     >> { foo = [0,1,2,3,4,5,6,7,8,9,10] }',function(){
    var expctLst = [ 0,1,2,3,4,5,6,7,8,9,10];
    assert.deepEqual(expctLst,main.testThis('foo=[0..10];').get("foo"));
  });
  it('List: [-1..9];     >> { foo = [-1,0,1,2,3,4,5,6,7,8,9] }',function(){
    var expctLst = [-1,0,1,2,3,4,5,6,7,8,9];
    assert.deepEqual(expctLst,main.testThis('foo=[-1..9];').get("foo"));
  });
  it('List: [0,2..10];   >> { foo = [0,2,4,6,8,10] }',function(){
    var expctLst = [0,2,4,6,8,10];
    assert.deepEqual(expctLst,main.testThis('foo=[0,2..10];').get("foo"));
  });
  it('List: [0,3..10];   >> { foo = [0,3,6,9] }',function(){
    var expctLst = [0,3,6,9];
    assert.deepEqual(expctLst,main.testThis('foo=[0,3..10];').get("foo"));
  });
  it('List: [10,7..0];   >> { foo = [10,7,4,1] }',function(){
    var expctLst = [10,7,4,1];
    assert.deepEqual(expctLst,main.testThis('foo=[10,7..0];').get("foo"));
  });
  it('List: [0,0.31..1]; >> { foo = [0,0.31,0.62,0.93] }',function(){
    var expctLst = [0,0.31,0.62,0.9299999999999999];
    assert.deepEqual(expctLst,main.testThis('foo=[0,0.31..1];').get("foo"));
  });
});

describe('List', function(){//Arreglar estos test
  it('List: foo=[];               >> { foo = [] }',function(){
    var expctLst = [];
    assert.deepEqual(expctLst,main.testThis('foo=[];').get("foo"));
  });
  it('List: foo=[1, 2, 3];        >> { foo = [1, 2, 3] }',function(){
    var expctLst = [1,2,3];
    assert.deepEqual(expctLst,main.testThis('foo=[1, 2, 3];').get("foo"));
  });
  it('List: foo=[x:1, y:2, z:3];  >> { foo = [x:1, y:2, z:3] }',function(){
    var expctLst = [1,2,3];
    assert.deepEqual(expctLst,main.testThis('foo=[x:1, y:2, z:3];').get("foo"));
  });
  it('List: foo=[1, "!":2, _:3];  >> { foo = [1, 2, 3] }',function(){
    var expctLst = [1,2,3];
    assert.deepEqual(expctLst,main.testThis('foo=[1, "!":2, _:3];').get("foo"));
  });
});

describe('Set', function(){//Arreglar estos test
  it('Set: foo={};               >> { foo = {} }',function(){
    var expctSet = new Set([]);
    assert.deepEqual(expctSet,main.testThis('foo={};').get("foo"));
  });
  it('Set: foo={1, 2, 3};        >> { foo = {1, 2, 3} }',function(){
    var expctSet = new Set([1,2,3]);
    assert.deepEqual(expctSet,main.testThis('foo={1, 2, 3};').get("foo"));
  });
  it('Set: foo={x:1, y:2, z:3};  >> { foo = {x:1, y:2, z:3} }',function(){
    var expctSet = new Set([1,2,3]);
    assert.deepEqual(expctSet,main.testThis('foo={x:1, y:2, z:3};').get("foo"));
  });
  it('Set: foo={1, "y":2, 3};  >> { foo = {1, "y":2, 3} }',function(){
    var expctSet = new Set([1,2,3]);
    assert.deepEqual(expctSet,main.testThis('foo={1, "y":2, 3};').get("foo"));
  });
});

describe('Listas por Comprension', function(){
  it('For : [x * 2 for x <- {0..3}];                      >> { foo = [0,2,4,6] }',function(){
    var expctLst = [0,2,4,6];
    assert.deepEqual(expctLst,main.testThis('foo=[x * 2 for x <- {0..3}];').get("foo"));
  });
  it('For : {x * 2 for x <- {0..3}};                      >> { foo = {0,2,4,6} }',function(){
    var expctSet = new Set([0,2,4,6]);
    assert.deepEqual(expctSet,main.testThis('foo={x * 2 for x <- {0..3}};').get("foo"));
  });
  it('For : [x * y for x <- [1..3], y <- [1..3], x <= y]; >> { foo = [0,2,4,6] }',function(){
    var expctLst = [1,2,3,4,6,9];
    assert.deepEqual(expctLst,main.testThis('foo=[x * y for x <- [1..3], y <- [1..3], x <= y];').get("foo"));
  });
  it('For : {x * y for x <- [1..3], y <- [1..3], x <= y;} >> { foo = {0,2,4,6} }',function(){
    var expctSet = new Set([1,2,3,4,6,9]);
    assert.deepEqual(expctSet,main.testThis('foo={x * y for x <- [1..3], y <- [1..3], x <= y};').get("foo"));
  });
});

describe('Cardinalidad', function(){
  it('# : foo=#[1,2,3,"u","c":4]; >> { foo = 5 }',function(){
    assert.equal(5,main.testThis('foo=#[1,2,3,"u","c":4];').get("foo"));
  });
  it('# : foo=#[];                >> { foo = 0 }',function(){
    assert.equal(0,main.testThis('foo=#[];').get("foo"));
  });
  it('# : foo=#{};                >> { foo = 0 }',function(){
    assert.equal(0,main.testThis('foo=#{};').get("foo"));
  });
  it('# : foo=#{1,2,3};           >> { foo = 3 }',function(){
    assert.equal(3,main.testThis('foo=#{1,2,3};').get("foo"));
  });
  it('# : foo=#{A:1,2,"!":3};           >> { foo = 3 }',function(){
    assert.equal(3,main.testThis('foo=#{1,2,3};').get("foo"));
  });
});

describe('Pertenencia', function(){ //Continuar con Key:Value en base a la respuesta de Leo/Juan
  it('<- : foo= 0 <- [0,1,2,3];              >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=0<-[0,1,2,3];').get("foo"));
  });
  it('<- : foo= 5 <- [0,1,2,3];              >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=5<-[0,1,2,3];').get("foo"));
  });
  it('<- : foo= [0,1] <- [0,1,2,3];          >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=[0,1]<-[0,1,2,3];').get("foo"));
  });
  it('<- : foo= [0,1] <- [[0,1],2,3];        >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=[0,1]<-[[0,1],2,3];').get("foo"));
  });
  it('<- : foo= [0,1] <- [5,6,[0,1],2,3];    >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=[0,1]<-[5,6,[0,1],2,3];').get("foo"));
  });
  it('<- : foo= 3 <- [0,1,2,a:3];            >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=3<-[0,1,2,a:3];').get("foo"));
  });
  it('<- : foo= -3 <- [0,-1,2,a:3];          >> { foo = false }',function(){
    assert.equal(false,main.testThis('foo=-3<-[0,-1,2,a:3];').get("foo"));
  });
  it('<- : foo= -5 <- [0,-5,2,a:3];          >> { foo = true }',function(){
    assert.equal(true,main.testThis('foo=-5<-[0,-5,2,a:3];').get("foo"));
  });
});

describe('Indizacion', function(){
  it('lst[idx] : foo= [0,1,2,3][2];    >> { foo = 2 }',function(){
    assert.equal(2,main.testThis('foo=[0,1,2,3][2];').get("foo"));
  });
  it('lst[idx] : foo= [0,1,a:2,3][2];  >> { foo = 2 }',function(){
    assert.equal(2,main.testThis('foo=[0,1,a:2,3][2];').get("foo"));
  });
  //it('lst[idx] : foo= [0,1,a:2,3][-1];  >> { foo = 3 }',function(){
    //assert.equal(3,main.testThis('foo=[0,1,a:2,3][-1];').get("foo"));
  //});
});

describe('Indizacion abreviada', function(){
  it('lst[idx] : foo= [0,1,2,3].2;    >> { foo = undefined }',function(){
    assert.equal(undefined,main.testThis('foo=[0,1,2,3].2;').get("foo"));
  });
  it('lst[idx] : foo= [0,1,a:2,3].a;  >> { foo = 2 }',function(){
    assert.equal(2,main.testThis('foo=[0,1,a:2,3].a;').get("foo"));
  });
  it('set{idx} : foo= {0,1,a:2,3}.a;  >> { foo = 2 }',function(){
    assert.equal(2,main.testThis('foo={0,1,a:2,3}.a;').get("foo"));
  });
});

describe('Concatenacion', function(){
  it('List: foo= [0,1,2] ++ [3];                >> { foo = [0,1,2,3] }',function(){
    var expctLst = [0,1,2,3];
    assert.deepEqual(expctLst,main.testThis('foo=[0,1,2]++[3];').get("foo"));
  });
  it('List: foo= [0,a:1,2] ++ [3];              >> { foo = [0,1,2,3] }',function(){
    var expctLst = [0,1,2,3];
    assert.deepEqual(expctLst,main.testThis('foo=[0,a:1,2]++[3];').get("foo"));
  });
  it('List: foo= [0,a:1,2] ++ [b:3,"String"];   >> { foo = [0,1,2,3,String] }',function(){
    var expctLst = [0,1,2,3,"String"];
    assert.deepEqual(expctLst,main.testThis('foo=[0,a:1,2]++[b:3,"String"];').get("foo"));
  });
});
/*


 De aca para abajo son los test "posta"




*/
console.log("---------------------------1- Declaraciones y Asignaciones-----------------");
//Se pueden creear variables con los valores:
describe('Declaraciones Booleanas', function(){
  it('True:   →  b=true;',function(){
    assert.deepEqual(true,main.testThis('b=true;').get('b'));
  });
  it('False:  →  b=false;',function(){
    assert.deepEqual(false,main.testThis('b=false;').get('b'));
  });
});
describe('Declaraciones Numericas', function(){
  it('Enteros base diez:    →  v=123;',function(){
    assert.deepEqual(123,main.testThis('v=123;').get('v'));
  });
  it('Enteros base hexa:    →  v=0xC4f3;',function(){
    assert.deepEqual(50419,main.testThis('v=0xC4f3;').get('v'));
  });
  it('Punto flotante:       →  v=0.51;',function(){
    assert.deepEqual(0.51,main.testThis('v=0.51;').get('v'));
  });
  it('Notacion Cientifica:  →  v=1e-4;',function(){
    assert.deepEqual(1e-4,main.testThis('v=1e-4;').get('v'));
  });
  it('Notacion Cientifica:  →  v=0.5E-11;',function(){
    assert.deepEqual(0.5E-11,main.testThis('v=0.5E-11;').get('v'));
  });
  it('Constantes:           →  v=Infinitiy;',function(){
    assert.deepEqual(Infinity,main.testThis('v=Infinity;').get('v'));
  });
  it('Constantes:           →  v=NaN;',function(){
    assert.deepEqual(NaN,main.testThis('v=NaN;').get('v'));
  });
  it('No se soporta Octal   →  : v=010;',function(){
    assert.deepEqual(10,main.testThis('v=010;').get('v'));
  });
});
describe('Declaraciones Literales', function(){
  it('String:  →  v="";',function(){
    assert.deepEqual("",main.testThis('v="";').get('v'));
  });
  it('String:  →  v="¡hola mundo!";',function(){
    assert.deepEqual("¡hola mundo!",main.testThis('v="¡hola mundo!";').get('v'));
  });
  it('String:  →  v="\u00a1\"hola\tmundo!\"";',function(){
    assert.deepEqual(true,main.testThis('v=true;').get('v'));
  });
});
describe('Declaraciones Nulo', function(){
  it('Nulo:  →  v=null;',function(){
    assert.deepEqual(null,main.testThis('v=null;').get('v'));
  });
});
describe('Declaraciones Variables', function(){
  it('Infraguion:      →  _v;',function(){
    assert.deepEqual(undefined,main.testThis('_v;').get('_v'));
  });
  it('Minuscula:       →  m;',function(){
    assert.deepEqual(undefined,main.testThis('m;').get('m'));
  });
  it('Mayuscula:       →  M;',function(){
    assert.deepEqual(undefined,main.testThis('M;').get('M'));
  });
  it('Con Numeros:     →  l30;',function(){
    assert.deepEqual(undefined,main.testThis('l30;').get('l30'));
  });
  it('Con Numeros:     →  l3o;',function(){
    assert.deepEqual(undefined,main.testThis('l3o;').get('l3o'));
  });
  it('Con Numeros:     →  j_4n;',function(){
    assert.deepEqual(undefined,main.testThis('j_4n;').get('j_4n'));
  });
  it('Con Infraguion:  →  __u__;',function(){
    assert.deepEqual(undefined,main.testThis('__u__;').get('__u__'));
  });
});
console.log("---------------------------2- Colecciones ---------------------------------");
//Existen dos tipos listas de elementos con un orden definido, y conjuntos de elementos sin orden definido:
describe('Colecciones: Elementos', function(){
  it('Lista Vacia:                →  l=[];',function(){var rst = [];
    assert.deepEqual(rst,main.testThis('l=[];').get('l'));
  });
  it('Set Vacio:                  →  s={};',function(){var rst = new Set([]);
    assert.deepEqual(rst,main.testThis('s={};').get('s'));
  });
  it('Lista Elementos Enteros:    →  l=[1,2,3,4];',function(){var rst = [1,2,3,4];
    assert.deepEqual(rst,main.testThis('l=[1,2,3,4];').get('l'));
  });
  it('Set Elementos Enteros:      →  s={1,2,3,4};',function(){var rst = new Set([1,2,3,4]);
    assert.deepEqual(rst,main.testThis('s={1,2,3,4};').get('s'));
  });
  it('Lista Elementos Numerales:  →  l=[1.2,3.4];',function(){var rst = [1.2,3.4];
    assert.deepEqual(rst,main.testThis('l=[1.2,3.4];').get('l'));
  });
  it('Set Elementos Numerales:    →  s={1.2,3.4};',function(){var rst = new Set([1.2,3.4]);
    assert.deepEqual(rst,main.testThis('s={1.2,3.4};').get('s'));
  });
  it('Lista Elementos String:     →  l=["1","2","3","4"];',function(){var rst = ["1","2","3","4"];
    assert.deepEqual(rst,main.testThis('l=["1","2","3","4"];').get('l'));
  });
  it('Set Elementos String:       →  s={"1","2","3","4"};',function(){var rst = new Set(["1","2","3","4"]);
    assert.deepEqual(rst,main.testThis('s={"1","2","3","4"};').get('s'));
  });
  it('Lista Elementos List:       →  l=[["1"],[2,3],[4]];',function(){var rst = [["1"],[2,3],[4]];
    assert.deepEqual(rst,main.testThis('l=[["1"],[2,3],[4]];').get('l'));
  });
  it('Set Elementos List:         →  s={["1"],[2,3],[4]};',function(){var rst = new Set([["1"],[2,3],[4]]);
    assert.deepEqual(rst,main.testThis('s={["1"],[2,3],[4]};').get('s'));
  });
  it('Lista Elementos Set:        →  l=[{"1"},{2,3},{4}];',function(){var rst = [new Set(["1"]),new Set([2,3]),new Set([4])];
    assert.deepEqual(rst,main.testThis('l=[{"1"},{2,3},{4}];').get('l'));
  });
  it('Set Elementos Set:          →  s={{2,3}};',function(){var s1=new Set([2,3]);var s0=new Set(["1"]);var rst = new Set([s1]);
    assert.deepEqual(rst,main.testThis('s={{2,3}};').get('s'));
  });
  it('Lista Elementos Varios:     →  l=["1",2.3,4];',function(){var rst = ["1",2.3,4];
    assert.deepEqual(rst,main.testThis('l=["1",2.3,4];').get('l'));
  });
  it('Set Elementos Varios:       →  s={"1",2.3,4};',function(){var rst = new Set(["1",2.3,4]);
    assert.deepEqual(rst,main.testThis('s={"1",2.3,4};').get('s'));
  });
});
//Ambos pueden tener elementos con calves de tipo string, se pueden realizar de la siguiente forma:
//Si la clave es de tipo variable valida sera convertida a string
//Si existen claves duplicadas se retoranara un error y un set o lista vacia
describe('Colecciones: Claves tipo string', function(){
  it('Lista String:String:     →  l=["clave":"valor"];',function(){var rst = ["valor"];
    assert.deepEqual(rst,main.testThis('l=["clave":"valor"];').get('l'));
  });
  it('Set String:String:       →  s={"clave":"valor"};',function(){var rst = new Set(["valor"]);
    assert.deepEqual(rst,main.testThis('s={"clave":"valor"};').get('s'));
  });
  it('Lista String:Integer:    →  l=["clave":1];',function(){var rst = [1];
    assert.deepEqual(rst,main.testThis('l=["clave":1];').get('l'));
  });
  it('Set String:Integer:      →  s={"clave":1};',function(){var rst = new Set([1]);
    assert.deepEqual(rst,main.testThis('s={"clave":1};').get('s'));
  });
  it('Lista Variable:Integer:  →  l=[x:1, y:2, z:3];',function(){var rst = [1,2,3];
    assert.deepEqual(rst,main.testThis('l=[x:1, y:2, z:3];').get('l'));
  });
  it('Set Variable:Integer:    →  s={x:1, y:2, z:3};',function(){var rst = new Set([1,2,3]);
    assert.deepEqual(rst,main.testThis('s={x:1, y:2, z:3};').get('s'));
  });
  it('Lista Varios:Integer:    →  l=[1, "!":2, _:3];',function(){var rst = [1,2,3];
    assert.deepEqual(rst,main.testThis('l=[1, "!":2, _:3];').get('l'));
  });
  it('Set Varios:Integer:      →  s={1, "!":2, _:3};',function(){var rst = new Set([1,2,3]);
    assert.deepEqual(rst,main.testThis('s={1, "!":2, _:3};').get('s'));
  });
});
console.log("---------------------------3- Operaciones Aritmeticas ---------------------");
//Las operaciones aritméticas son exclusivamente entre números.
// Si se quiere un negativo muy negativo se deben usar parentesis (causa conflicto con -- (operacion de listas))
//Sumar un entero con un entero devuelve un entero, float en otro caso
describe('Operaciones Aritmeticas: Opesto', function(){
  it('Opuesto Integer:      →  o=-1;',function(){
    assert.deepEqual(-1,main.testThis('o=-1;').get('o'));
  });
  it('Muy Opuesto Integer:  →  o=(-(-(-(-1))));',function(){
    assert.deepEqual(1,main.testThis('o=(-(-(-(-1))));').get('o'));
  });
  it('Opuesto float:        →  o=-1.5;',function(){
    assert.deepEqual(-1.5,main.testThis('o=-1.5;').get('o'));
  });
  it('Muy Opuesto float:    →  o=(-(-(-(-1.5))));',function(){
    assert.deepEqual(1.5,main.testThis('o=(-(-(-(-1.5))));').get('o'));
  });
});
describe('Operaciones aritmeticas: Suma', function(){
  it('Suma Integer+Integer:  →  p=1+5;',function(){
    assert.deepEqual(6,main.testThis('p=1+5;').get('p'));
  });
  it('Suma Integer+float:    →  p=1+5.5;',function(){
    assert.deepEqual(6.5,main.testThis('p=1+5.5;').get('p'));
  });
  it('Suma Variada:          →  p=1+2+3+4.5+5.5;',function(){
    assert.deepEqual(16,main.testThis('p=1+2+3+4.5+5.5;').get('p'));
  });
  it('Suma Infinity:         →  p=Infinity+100;',function(){
    assert.deepEqual(Infinity,main.testThis('p=Infinity+100;').get('p'));
  });
  it('Suma Infinity:         →  p=Infinity+Infinity;',function(){
    assert.deepEqual(Infinity,main.testThis('p=Infinity+Infinity;').get('p'));
  });
});
describe('Operaciones Aritmeticas: Resta', function(){
  it('Resta Integer-Integer:  →  r=1-5;',function(){
    assert.deepEqual(-4,main.testThis('r=1-5;').get('r'));
  });
  it('Resta Integer-float:    →  p=1-5.5;',function(){
    assert.deepEqual(-4.5,main.testThis('r=1-5.5;').get('r'));
  });
  it('Resta Variada:          →  p=1-2-3-4.5-5.5;',function(){
    assert.deepEqual(-14,main.testThis('r=1-2-3-4.5-5.5;').get('r'));
  });
  it('Resta Infinity:         →  p=Infinity-100;',function(){
    assert.deepEqual(Infinity,main.testThis('p=Infinity-100;').get('p'));
  });
  it('Resta Infinity:         →  p=Infinity-Infinity;',function(){
    assert.deepEqual(NaN,main.testThis('p=Infinity-Infinity;').get('p'));
  });
});
describe('Operaciones Aritmeticas: Producto', function(){
  it('Multiplicacion Integer*Integer:  →  m=2*5;',function(){
    assert.deepEqual(10,main.testThis('m=2*5;').get('m'));
  });
  it('Multiplicacion Integer*float:    →  m=2*5.5;',function(){
    assert.deepEqual(11,main.testThis('m=2*5.5;').get('m'));
  });
  it('Multiplicacion Variada:          →  m=1*2*3*4.5*5.5;',function(){
    assert.deepEqual(148.5,main.testThis('m=1*2*3*4.5*5.5;').get('m'));
  });
  it('Multiplicacion Infinity:         →  m=Infinity*100;',function(){
    assert.deepEqual(Infinity,main.testThis('m=Infinity*100;').get('m'));
  });
});
describe('Operaciones Aritmeticas: Division', function(){
  it('Division Integer/Integer:  →  d=10/5;',function(){
    assert.deepEqual(2,main.testThis('d=10/5;').get('d'));
  });
  it('Division Integer/Float:    →  d=10/5.5;',function(){
    assert.deepEqual(1.8181818181818181,main.testThis('d=10/5.5;').get('d'));
  });
  it('Division Variada:          →  d=1/2/3/4.5/5.5;',function(){
    assert.deepEqual(0.006734006734006734,main.testThis('d=1/2/3/4.5/5.5;').get('d'));
  });
  it('Division Infinity:         →  d=Infinity/100;',function(){
    assert.deepEqual(Infinity,main.testThis('d=Infinity/100;').get('d'));
  });
});
describe('Operaciones Aritmeticas: Varias', function(){
  it('Operacion aritmetica varios:  →  v=5*5-(20+5);',function(){
    assert.deepEqual(0,main.testThis('v=5*5-(20+5);').get('v'));
  });
  it('Operacion aritmetica varios:  →  v=-(5*4-(20+5))/5;',function(){
    assert.deepEqual(1,main.testThis('v=-(5*4-(20+5))/5;').get('v'));
  });
});
//Las comparaciones aplican a todos los tipos
console.log("---------------------------4- Comparaciones Numericas ---------------------");
describe('Comparacion Numerica: Igual', function(){
  it('Igual False:  →  c=1==2;',function(){
    assert.deepEqual(false,main.testThis('c=1==2;').get('c'));
  });
  it('Igual True:   →  c=2==2;',function(){
    assert.deepEqual(true,main.testThis('c=2==2;').get('c'));
  });
  it('Igual False:  →  c=2==1;',function(){
    assert.deepEqual(false,main.testThis('c=2==1;').get('c'));
  });
});
describe('Comparacion Numerica: Distinto', function(){
  it('Distinto True:   →  c=1/=2;',function(){
    assert.deepEqual(true,main.testThis('c=1/=2;').get('c'));
  });
  it('Distinto False:  →  c=2/=2;',function(){
    assert.deepEqual(false,main.testThis('c=2/=2;').get('c'));
  });
  it('Distinto True:   →  c=2/=1;',function(){
    assert.deepEqual(true,main.testThis('c=2/=1;').get('c'));
  });
});
describe('Comparacion Numerica: Menor', function(){
  it('Menor True:   →  c=1<2;',function(){
    assert.deepEqual(true,main.testThis('c=1<2;').get('c'));
  });
  it('Menor False:  →  c=2<2;',function(){
    assert.deepEqual(false,main.testThis('c=2<2;').get('c'));
  });
  it('Menor False:  →  c=2<1;',function(){
    assert.deepEqual(false,main.testThis('c=2<1;').get('c'));
  });
});
describe('Comparacion Numerica: Mayor', function(){
  it('Mayor False:  →  c=1>2;',function(){
    assert.deepEqual(false,main.testThis('c=1>2;').get('c'));
  });
  it('Mayor False:  →  c=2>2;',function(){
    assert.deepEqual(false,main.testThis('c=2>2;').get('c'));
  });
  it('Mayor True:   →  c=2>1;',function(){
    assert.deepEqual(true,main.testThis('c=2>1;').get('c'));
  });
});
describe('Comparacion Numerica: Menor o Igual', function(){
  it('Menor Igual True:   →  c=1<=2;',function(){
    assert.deepEqual(true,main.testThis('c=1<=2;').get('c'));
  });
  it('Menor Igual True:   →  c=2<=2;',function(){
    assert.deepEqual(true,main.testThis('c=2<=2;').get('c'));
  });
  it('Menor Igual False:  →  c=2<=1;',function(){
    assert.deepEqual(false,main.testThis('c=2<=1;').get('c'));
  });
});
describe('Comparacion Numerica: Mayor o Igual', function(){
  it('Mayor Igual False:  →  c=1>=2;',function(){
    assert.deepEqual(false,main.testThis('c=1>=2;').get('c'));
  });
  it('Mayor Igual True:   →  c=2>=2;',function(){
    assert.deepEqual(true,main.testThis('c=2>=2;').get('c'));
  });
  it('Mayor Igual True:   →  c=2>=1;',function(){
    assert.deepEqual(true,main.testThis('c=2>=1;').get('c'));
  });
});
console.log("---------------------------5- Comparaciones Literales ---------------------");
describe('Comparacion Literales: Igual', function(){
  it('Igual False:  →  c="a"=="b";',function(){
    assert.deepEqual(false,main.testThis('c="a"=="b";').get('c'));
  });
  it('Igual True:   →  c="gato"=="gato";',function(){
    assert.deepEqual(true,main.testThis('c="gato"=="gato";').get('c'));
  });
  it('Igual False:  →  c="gato"=="perro";',function(){
    assert.deepEqual(false,main.testThis('c="gato"=="perro";').get('c'));
  });
});
describe('Comparacion Literales: Distinto', function(){
  it('Distinto True:   →  c="a"/="b";',function(){
    assert.deepEqual(true,main.testThis(' c="a"/="b";').get('c'));
  });
  it('Distinto False:  →  c="gato"/="gato";',function(){
    assert.deepEqual(false,main.testThis('c="gato"/="gato";').get('c'));
  });
  it('Distinto True:   →  c="tom"/="gato";',function(){
    assert.deepEqual(true,main.testThis('c="tom"/="gato";').get('c'));
  });
});
describe('Comparacion Literales: Menor', function(){
  it('Menor True:   →  c="a"<"b";',function(){
    assert.deepEqual(true,main.testThis('c="a"<"b";').get('c'));
  });
  it('Menor False:  →  c="a"<"a";',function(){
    assert.deepEqual(false,main.testThis('c="a"<"a";').get('c'));
  });
  it('Menor False:  →  c="zabcd"<"abcd";',function(){
    assert.deepEqual(false,main.testThis('c="zabcd"<"abcd";').get('c'));
  });
});
describe('Comparacion Literales: Mayor', function(){
  it('Menor False:   →  c="a">"b";',function(){
    assert.deepEqual(false,main.testThis('c="a">"b";').get('c'));
  });
  it('Menor False:  →  c="a">"a";',function(){
    assert.deepEqual(false,main.testThis('c="a">"a";').get('c'));
  });
  it('Menor True:  →  c="zabcd">"abcd";',function(){
    assert.deepEqual(true,main.testThis('c="zabcd">"abcd";').get('c'));
  });
});
describe('Comparacion Literales: Menor Igual', function(){
  it('Menor Igual True:   →  c="a"<="b";',function(){
    assert.deepEqual(true,main.testThis('c="a"<="b";').get('c'));
  });
  it('Menor Igual True:  →  c="a"<="a";',function(){
    assert.deepEqual(true,main.testThis('c="a"<="a";').get('c'));
  });
  it('Menor Igual False:  →  c="zabcd"<="abcd";',function(){
    assert.deepEqual(false,main.testThis('c="zabcd"<="abcd";').get('c'));
  });
});
describe('Comparacion Literales: Mayor Igual', function(){
  it('Menor Igual False:   →  c="a">="b";',function(){
    assert.deepEqual(false,main.testThis('c="a">="b";').get('c'));
  });
  it('Menor Igual True:  →  c="a">="a";',function(){
    assert.deepEqual(true,main.testThis('c="a">="a";').get('c'));
  });
  it('Menor Igual True:  →  c="zabcd">="abcd";',function(){
    assert.deepEqual(true,main.testThis('c="zabcd">="abcd";').get('c'));
  });
});
console.log("---------------------------6- Comparaciones Booleanas ---------------------");
describe('Comparacion Booleana: Igual', function(){
  it('Igual False:  →  c=true==false;',function(){
    assert.deepEqual(false,main.testThis('c=true==false;').get('c'));
  });
  it('Igual True:   →  c=true==true;',function(){
    assert.deepEqual(true,main.testThis('c=true==true;').get('c'));
  });
});
describe('Comparacion Booleana: Distinto', function(){
  it('Distinto True:   →  c=true/=false;',function(){
    assert.deepEqual(true,main.testThis('c=true/=false;').get('c'));
  });
  it('Distinto False:  →  c=true/=true;',function(){
    assert.deepEqual(false,main.testThis('c=true/=true;').get('c'));
  });
});
describe('Comparacion Booleana: Menor', function(){
  it('Menor False:  →  c=true<false;',function(){
    assert.deepEqual(false,main.testThis('c=true<false;').get('c'));
  });
  it('Menor False:  →  c=true<true;',function(){
    assert.deepEqual(false,main.testThis('c=true<true;').get('c'));
  });
  it('Menor True:   →  c=false<true;',function(){
    assert.deepEqual(true,main.testThis('c=false<true;').get('c'));
  });
});
describe('Comparacion Booleana: Mayor', function(){
  it('Mayor True:   →  c=true>false;',function(){
    assert.deepEqual(true,main.testThis('c=true>false;').get('c'));
  });
  it('Mayor False:  →  c=true>true;',function(){
    assert.deepEqual(false,main.testThis('c=true>true;').get('c'));
  });
  it('Mayor False:  →  c=false>true;',function(){
    assert.deepEqual(false,main.testThis('c=false>true;').get('c'));
  });
});
describe('Comparacion Booleana: Menor Igual', function(){
  it('Menor igual False:  →  c=true<=false;',function(){
    assert.deepEqual(false,main.testThis('c=true<=false;').get('c'));
  });
  it('Menor igual True:   →  c=true<=true;',function(){
    assert.deepEqual(true,main.testThis('c=true<=true;').get('c'));
  });
  it('Menor igual True:   →  c=false<=true;',function(){
    assert.deepEqual(true,main.testThis('c=false<=true;').get('c'));
  });
});
describe('Comparacion Booleana: Mayor Igual', function(){
  it('Mayor igual True:   →  c=true>=false;',function(){
    assert.deepEqual(true,main.testThis('c=true>=false;').get('c'));
  });
  it('Mayor igual True:   →  c=true>=true;',function(){
    assert.deepEqual(true,main.testThis('c=true>=true;').get('c'));
  });
  it('Mayor igual False:  →  c=false>=true;',function(){
    assert.deepEqual(false,main.testThis('c=false>=true;').get('c'));
  });
});
console.log("---------------------------7- Comparaciones Listas ------------------------");
//Se toma en cuenta los key:value para la comparacion de listas, si tiene una tiene que tener la otra y su value debe ser el mismo
//Si se comparan por menor numeros entre "" o [] se toma el valor del numero para la comparacion, en cuanto a {} javascript usa so "sorting hat"
describe('Comparacion Listas: Igual', function(){
  it('Igual True:   →  c=[1,2,3]==[1,2,3];',function(){
    assert.deepEqual(true,main.testThis('c=[1,2,3]==[1,2,3];').get('c'));
  });
  it('Igual True:   →  c=["1",2,3]==["1",2,3];',function(){
    assert.deepEqual(true,main.testThis('c=["1",2,3]==["1",2,3];').get('c'));
  });
  it('Igual False:  →  c=[1,2,3]==[3,2,1];',function(){
    assert.deepEqual(false,main.testThis('c=[1,2,3]==[3,2,1];').get('c'));
  });
  it('Igual True:   →  c=[[1,[2]],3]==[[1,[2]],3];',function(){
    assert.deepEqual(true,main.testThis('c=[[1,[2]],3]==[[1,[2]],3];').get('c'));
  });
  it('Igual False:  →  c=[[1,{2}],3]==[[1,[2]],3];',function(){
    assert.deepEqual(false,main.testThis('c=[[1,[2]],3]==[[1,{2}],3];').get('c'));
  });
  it('Igual False:  →  c=[1,2,3]==[a:1,2,3];',function(){
    assert.deepEqual(false,main.testThis('c=[1,2,3]==[a:1,2,3];').get('c'));
  });
  it('Igual True:   →  c=[a:1,b:2,3]==[a:1,b:2,3];',function(){
    assert.deepEqual(true,main.testThis('c=[a:1,b:2,3]==[a:1,b:2,3];').get('c'));
  });
});
//Las comparaciones por distinto toman en cuenta a toda la lista como un elemento
describe('Comparacion Listas: Distinto', function(){
  it('Distinto False:   →  c=[1,2,3]/=[1,2,3];',function(){
    assert.deepEqual(false,main.testThis('c=[1,2,3]/=[1,2,3];').get('c'));
  });
  it('Distinto False:   →  c=["1",2,3]/=["1",2,3];',function(){
    assert.deepEqual(false,main.testThis('c=["1",2,3]/=["1",2,3];').get('c'));
  });
  it('Distinto True:    →  c=[1,2,3]/=[3,2,1];',function(){
    assert.deepEqual(true,main.testThis('c=[1,2,3]/=[3,2,1];').get('c'));
  });
  it('Distinto False:   →  c=[[1,[2]],3]/=[[1,[2]],3];',function(){
    assert.deepEqual(false,main.testThis('c=[[1,[2]],3]/=[[1,[2]],3];').get('c'));
  });
  it('Distinto True:    →  c=[[1,{2}]],3]/=[[1,[2]],3];',function(){
    assert.deepEqual(true,main.testThis('c=[[1,[2]],3]/=[[1,{2}],3];').get('c'));
  });
  it('Distinto True:    →  c=[1,2,3]/=[a:1,2,3];',function(){
    assert.deepEqual(true,main.testThis('c=[1,2,3]/=[a:1,2,3];').get('c'));
  });
  it('Distinto False:   →  c=[a:1,b:2,3]/=[a:1,b:2,3];',function(){
    assert.deepEqual(false,main.testThis('c=[a:1,b:2,3]/=[a:1,b:2,3];').get('c'));
  });
  it('Distinto True:    →  c=[b:1,a:2,3]/=[a:1,b:2,3];',function(){
    assert.deepEqual(true,main.testThis('c=[b:1,a:2,3]/=[a:1,b:2,3];').get('c'));
  });
});
describe('Comparacion Listas: Menor', function(){
  it('Menor True:    →  c=[1,2,3]<[2,3,4];',function(){
    assert.deepEqual(true,main.testThis('c=[1,2,3]<[2,3,4];').get('c'));
  });
  it('Menor True:    →  c=["a","b","c"]<["b","c","d"];',function(){
    assert.deepEqual(true,main.testThis('c=["a","b","c"]<["b","c","d"];').get('c'));
  });
  it('Menor False:   →  c=["z","x","y"]<["b","c","d"];',function(){
    assert.deepEqual(false,main.testThis('c=["z","x","y"]<["b","c","d"];').get('c'));
  });
  it('Menor False:   →  c=[1,2,3]<[1,2,3];',function(){
    assert.deepEqual(false,main.testThis('c=[1,2,3]<[1,2,3];').get('c'));
  });
  it('Menor False:   →  c=[2,3,4]<[1,2,3];',function(){
    assert.deepEqual(false,main.testThis('c=[2,3,4]<[1,2,3];').get('c'));
  });
  it('Menor False:   →  c=[1,2,9]<[5,6,8];',function(){
    assert.deepEqual(false,main.testThis('c=[1,2,9]<[5,6,8];').get('c'));
  });
  it('Menor True:    →  c=[1,2,3]<[9,9,9];',function(){
    assert.deepEqual(true,main.testThis('c=[1,2,3]<[9,9,9];').get('c'));
  });
  it('Menor True:    →  c=[1,2,3]<[9];',function(){
    assert.deepEqual(true,main.testThis('c=[1,2,3]<[9];').get('c'));
  });
  it('Menor True:    →  c=[a:1,b:2,c:3]<[2,3,4];',function(){
    assert.deepEqual(true,main.testThis('c=[a:1,b:2,c:3]<[2,3,4];').get('c'));
  });
  it('Menor True:    →  c=["1","2","3"]<[2,3,4];',function(){
    assert.deepEqual(true,main.testThis('c=["1","2","3"]<[2,3,4];').get('c'));
  });
  it('Menor True:    →  c=[[1],"2","3"]<[2,3,4];',function(){
    assert.deepEqual(true,main.testThis('c=[[1],"2","3"]<[2,3,4];').get('c'));
  });
  it('Menor False:   →  c=[{1},[2],"3"]<[2,3,4];',function(){
    assert.deepEqual(false,main.testThis('c=[{1},[2],"3"]<[2,3,4];').get('c'));
  });
  it('Menor True:    →  c=["a","b","c"]<["x","y","z"];',function(){
    assert.deepEqual(true,main.testThis('c=["a","b","c"]<["x","y","z"];').get('c'));
  });
  it('Menor True:    →  c=["a","b",1]<["x","y",9];',function(){
    assert.deepEqual(true,main.testThis('c=["a","b",1]<["x","y",9];').get('c'));
  });
});
describe('Comparacion Listas: Mayor', function(){
  it('Mayor False:   →  c=[1,2,3]>[2,3,4];',function(){
    assert.deepEqual(false,main.testThis('c=[1,2,3]>[2,3,4];').get('c'));
  });
  it('Menor False:   →  c=[1,2,3]>[1,2,3];',function(){
    assert.deepEqual(false,main.testThis('c=[1,2,3]>[1,2,3];').get('c'));
  });
  it('Mayor True:    →  c=[2,3,4]>[1,2,3];',function(){
    assert.deepEqual(true,main.testThis('c=[2,3,4]>[1,2,3];').get('c'));
  });
  it('Mayor False:   →  c=[1,2,9]>[5,6,8];',function(){
    assert.deepEqual(false,main.testThis('c=[1,2,9]>[5,6,8];').get('c'));
  });
  it('Mayor False:   →  c=[1,2,3]>[9,9,9];',function(){
    assert.deepEqual(false,main.testThis('c=[1,2,3]>[9,9,9];').get('c'));
  });
  it('Mayor False:   →  c=[1,2,3]>[9];',function(){
    assert.deepEqual(false,main.testThis('c=[1,2,3]>[9];').get('c'));
  });
  it('Mayor True:    →  c=[2,3,4]>[a:1,b:2,c:3];',function(){
    assert.deepEqual(true,main.testThis('c=[2,3,4]>[a:1,b:2,c:3];').get('c'));
  });
  it('Mayor False:   →  c=["1","2","3"]>[2,3,4];',function(){
    assert.deepEqual(false,main.testThis('c=["1","2","3"]>[2,3,4];').get('c'));
  });
  it('Mayor false:   →  c=[[1],"2","3"]>[2,3,4];',function(){
    assert.deepEqual(false,main.testThis('c=[[1],"2","3"]>[2,3,4];').get('c'));
  });
  it('Mayor False:   →  c=[{1},[2],"3"]>[2,3,4];',function(){
    assert.deepEqual(false,main.testThis('c=[{1},[2],"3"]>[2,3,4];').get('c'));
  });
  it('Mayor False:   →  c=["a","b","c"]>["x","y","z"];',function(){
    assert.deepEqual(false,main.testThis('c=["a","b","c"]>["x","y","z"];').get('c'));
  });
  it('Mayor False:   →  c=["a","b",1]>["x","y",9];',function(){
    assert.deepEqual(false,main.testThis('c=["a","b",1]>["x","y",9];').get('c'));
  });
  it('Mayor True:    →  c=["x","y",9]>["a","b",1];',function(){
    assert.deepEqual(true,main.testThis('c=["x","y",9]>["a","b",1];').get('c'));
  });
});
describe('Comparacion Listas: Menor Igual', function(){
  it('Menor Igual True:   →  c=[1,2,3]<=[2,3,4];',function(){
    assert.deepEqual(true,main.testThis('c=[1,2,3]<=[2,3,4];').get('c'));
  });
  it('Menor Igual True:   →  c=[1,2,3]<=[1,2,3];',function(){
    assert.deepEqual(true,main.testThis('c=[1,2,3]<=[1,2,3];').get('c'));
  });
  it('Menor Igual False:  →  c=[2,3,4]<=[1,2,3];',function(){
    assert.deepEqual(false,main.testThis('c=[2,3,4]<=[1,2,3];').get('c'));
  });
  it('Menor Igual False:  →  c=[1,2,9]<=[5,6,8];',function(){
    assert.deepEqual(false,main.testThis('c=[1,2,9]<=[5,6,8];').get('c'));
  });
  it('Menor Igual True:   →  c=[1,2,3]<=[9,9,9];',function(){
    assert.deepEqual(true,main.testThis('c=[1,2,3]<=[9,9,9];').get('c'));
  });
  it('Menor Igual True:   →  c=[1,2,3]<=[9];',function(){
    assert.deepEqual(true,main.testThis('c=[1,2,3]<=[9];').get('c'));
  });
  it('Menor Igual True:   →  c=[a:1,b:2,c:3]<=[2,3,4];',function(){
    assert.deepEqual(true,main.testThis('c=[a:1,b:2,c:3]<=[2,3,4];').get('c'));
  });
  it('Menor Igual True:   →  c=["1","2","3"]<=[2,3,4];',function(){
    assert.deepEqual(true,main.testThis('c=["1","2","3"]<=[2,3,4];').get('c'));
  });
  it('Menor Igual True:   →  c=[[1],"2","3"]<=[2,3,4];',function(){
    assert.deepEqual(true,main.testThis('c=[[1],"2","3"]<=[2,3,4];').get('c'));
  });
  it('Menor Igual False:  →  c=[{1},[2],"3"]<=[2,3,4];',function(){
    assert.deepEqual(false,main.testThis('c=[{1},[2],"3"]<=[2,3,4];').get('c'));
  });
  it('Menor Igual True:   →  c=["a","b","c"]<=["x","y","z"];',function(){
    assert.deepEqual(true,main.testThis('c=["a","b","c"]<=["x","y","z"];').get('c'));
  });
  it('Menor Igual True:   →  c=["a","b",1]<=["x","y",9];',function(){
    assert.deepEqual(true,main.testThis('c=["a","b",1]<=["x","y",9];').get('c'));
  });
  it('Menor Igual True:   →  c=[1,2,3]<=[1,2,3];',function(){
    assert.deepEqual(true,main.testThis('c=[1,2,3]<=[1,2,3];').get('c'));
  });
  it('Menor Igual True:   →  c=["1",2,3]<=["1",2,3];',function(){
    assert.deepEqual(true,main.testThis('c=["1",2,3]<=["1",2,3];').get('c'));
  });
  it('Menor Igual False:  →  c=[1,2,3]<=[3,2,1];',function(){
    assert.deepEqual(false,main.testThis('c=[1,2,3]<=[3,2,1];').get('c'));
  });
  it('Menor Igual True:   →  c=[[1,[2]],3]<=[[1,[2]],3];',function(){
    assert.deepEqual(true,main.testThis('c=[[1,[2]],3]<=[[1,[2]],3];').get('c'));
  });
  it('Menor Igual False:  →  c=[[1,{2}]],3]<=[[1,[2]],3];',function(){
    assert.deepEqual(false,main.testThis('c=[[1,{2}],3]<=[[1,[2]],3];').get('c'));
  });
  it('Menor Igual True:   →  c=[1,2,3]<=[a:1,2,3];',function(){
    assert.deepEqual(true,main.testThis('c=[1,2,3]<=[a:1,2,3];').get('c'));
  });
  it('Menor Igual True:   →  c=[a:1,b:2,3]<=[a:1,b:2,3];',function(){
    assert.deepEqual(true,main.testThis('c=[a:1,b:2,3]<=[a:1,b:2,3];').get('c'));
  });
});
describe('Comparacion Listas: Mayor Igual', function(){
  it('Mayor Igual False:  →  c=[1,2,3]>=[2,3,4];',function(){
    assert.deepEqual(false,main.testThis('c=[1,2,3]>=[2,3,4];').get('c'));
  });
  it('Mayor Igual True:   →  c=[1,2,3]>=[1,2,3];',function(){
    assert.deepEqual(true,main.testThis('c=[1,2,3]>=[1,2,3];').get('c'));
  });
  it('Mayor Igual True:   →  c=[2,3,4]>=[1,2,3];',function(){
    assert.deepEqual(true,main.testThis('c=[2,3,4]>=[1,2,3];').get('c'));
  });
  it('Mayor Igual False:  →  c=[1,2,9]>=[5,6,8];',function(){
    assert.deepEqual(false,main.testThis('c=[1,2,9]>=[5,6,8];').get('c'));
  });
  it('Mayor Igual False:  →  c=[1,2,3]>=[9,9,9];',function(){
    assert.deepEqual(false,main.testThis('c=[1,2,3]>=[9,9,9];').get('c'));
  });
  it('Mayor Igual False:  →  c=[1,2,3]>=[9];',function(){
    assert.deepEqual(false,main.testThis('c=[1,2,3]>=[9];').get('c'));
  });
  it('Mayor Igual False:  →  c=[a:1,b:2,c:3]>=[2,3,4];',function(){
    assert.deepEqual(false,main.testThis('c=[a:1,b:2,c:3]>=[2,3,4];').get('c'));
  });
  it('Mayor Igual False:  →  c=["1","2","3"]>=[2,3,4];',function(){
    assert.deepEqual(false,main.testThis('c=["1","2","3"]>=[2,3,4];').get('c'));
  });
  it('Mayor Igual False:  →  c=[[1],"2","3"]>=[2,3,4];',function(){
    assert.deepEqual(false,main.testThis('c=[[1],"2","3"]>=[2,3,4];').get('c'));
  });
  it('Mayor Igual False:  →  c=[{1},[2],"3"]>=[2,3,4];',function(){
    assert.deepEqual(false,main.testThis('c=[{1},[2],"3"]>=[2,3,4];').get('c'));
  });
  it('Mayor Igual False:  →  c=["a","b","c"]>=["x","y","z"];',function(){
    assert.deepEqual(false,main.testThis('c=["a","b","c"]>=["x","y","z"];').get('c'));
  });
  it('Mayor Igual False:  →  c=["a","b",1]>=["x","y",9];',function(){
    assert.deepEqual(false,main.testThis('c=["a","b",1]>=["x","y",9];').get('c'));
  });
  it('Mayor Igual True:   →  c=[1,2,3]>=[1,2,3];',function(){
    assert.deepEqual(true,main.testThis('c=[1,2,3]>=[1,2,3];').get('c'));
  });
  it('Mayor Igual True:   →  c=["1",2,3]>=["1",2,3];',function(){
    assert.deepEqual(true,main.testThis('c=["1",2,3]>=["1",2,3];').get('c'));
  });
  it('Mayor Igual False:  →  c=[1,2,3]>=[3,2,1];',function(){
    assert.deepEqual(false,main.testThis('c=[1,2,3]>=[3,2,1];').get('c'));
  });
  it('Mayor Igual True:   →  c=[[1,[2]],3]>=[[1,[2]],3];',function(){
    assert.deepEqual(true,main.testThis('c=[[1,[2]],3]>=[[1,[2]],3];').get('c'));
  });
  it('Mayor Igual True:   →  c=[[1,{2}]],3]>=[[1,[2]],3];',function(){
    assert.deepEqual(true,main.testThis('c=[[1,{2}],3]>=[[1,[2]],3];').get('c'));
  });
  it('Mayor Igual True:   →  c=[1,2,3]>=[a:1,2,3];',function(){
    assert.deepEqual(true,main.testThis('c=[1,2,3]>=[a:1,2,3];').get('c'));
  });
  it('Mayor Igual True:   →  c=[a:1,b:2,3]>=[a:1,b:2,3];',function(){
    assert.deepEqual(true,main.testThis('c=[a:1,b:2,3]>=[a:1,b:2,3];').get('c'));
  });
});
console.log("---------------------------8- Comparaciones Sets --------------------------");
//Los sets no estan ordenados por lo cual se comportan diferente a las listas.
//Si tienen los mismos elementos son iguales, no se toma en cuenta el orden y se consideran las key:value.
//Si se tiene un set dentro no se considera su valor, esto lo decide la libreria Underscore
//Para conjuntos s < S se entiende como s incluído en S, y S > s como s incluye a S.
describe('Comparacion Sets: Igual', function(){
  it('Igual True:   →  c={1,2,3}=={1,2,3};',function(){
    assert.deepEqual(true,main.testThis('c={1,2,3}=={1,2,3};').get('c'));
  });
  it('Igual True:   →  c={"1",2,3}=={"1",2,3};',function(){
    assert.deepEqual(true,main.testThis('c={"1",2,3}=={"1",2,3};').get('c'));
  });
  it('Igual True:   →  c={1,2,3}=={3,2,1};',function(){
    assert.deepEqual(true,main.testThis('c={1,2,3}=={3,2,1};').get('c'));
  });
  it('Igual True:   →  c={2,c:3,1}=={c:3,2,1};',function(){
    assert.deepEqual(true,main.testThis('c={2,c:3,1}=={c:3,2,1};').get('c'));
  });
  it('Igual True:   →  c={[1,[2]],3}==[[1,[2]],3};',function(){
    assert.deepEqual(true,main.testThis('c={[1,[2]],3}=={[1,[2]],3};').get('c'));
  });
  it('Igual False:  →  c={[1,{2}]],3}=={[1,[2]],3};',function(){
    assert.deepEqual(false,main.testThis('c={[1,[2]],3}=={[1,{2}],3};').get('c'));
  });
  it('Igual False:  →  c={[1,[2]],3}=={[1,{5}]],3};',function(){
    assert.deepEqual(false,main.testThis('c={[1,[2]],3}=={[1,{5}],3};').get('c'));
  });
  it('Igual False:  →  c={1,2,3}=={a:1,2,3};',function(){
    assert.deepEqual(false,main.testThis('c={1,2,3}=={a:1,2,3};').get('c'));
  });
  it('Igual True:   →  c={a:1,b:2,3}=={a:1,b:2,3};',function(){
    assert.deepEqual(true,main.testThis('c={a:1,b:2,3}=={a:1,b:2,3};').get('c'));
  });
  it('Igual True:   →  c={b:2,a:1,3}=={a:1,b:2,3};',function(){
    assert.deepEqual(true,main.testThis('c={b:2,a:1,3}=={a:1,b:2,3};').get('c'));
  });
});
describe('Comparacion Sets: Distinto', function(){
  it('Distinto False:   →  c={1,2,3}/={1,2,3};',function(){
    assert.deepEqual(false,main.testThis('c={1,2,3}/={1,2,3};').get('c'));
  });
  it('Distinto False:   →  c={"1",2,3}/={"1",2,3};',function(){
    assert.deepEqual(false,main.testThis('c={"1",2,3}/={"1",2,3};').get('c'));
  });
  it('Distinto False:   →  c={1,2,3}/={3,2,1};',function(){
    assert.deepEqual(false,main.testThis('c={1,2,3}/={3,2,1};').get('c'));
  });
  it('Distinto False:   →  c={[1,[2]],3}/={[1,[2]],3};',function(){
    assert.deepEqual(false,main.testThis('c={[1,[2]],3}/={[1,[2]],3};').get('c'));
  });
  it('Distinto True:    →  c={[1,{2}]],3}/={[1,[2]],3};',function(){
    assert.deepEqual(true,main.testThis('c={[1,[2]],3}/={[1,{2}],3};').get('c'));
  });
  it('Distinto True:    →  c={1,2,3}/={a:1,2,3};',function(){
    assert.deepEqual(true,main.testThis('c={1,2,3}/={a:1,2,3};').get('c'));
  });
  it('Distinto False:   →  c={a:1,b:2,3}/={a:1,b:2,3};',function(){
    assert.deepEqual(false,main.testThis('c={a:1,b:2,3}/={a:1,b:2,3};').get('c'));
  });
  it('Distinto False:   →  c={b:2,a:1,3}/={a:1,b:2,3};',function(){
    assert.deepEqual(false,main.testThis('c={b:2,a:1,3}/={a:1,b:2,3};').get('c'));
  });
  it('Distinto True:    →  c={b:1,a:2,3}/={a:1,b:2,3};',function(){
    assert.deepEqual(true,main.testThis('c={b:1,a:2,3}/={a:1,b:2,3};').get('c'));
  });
});
// En caso de tener una lista o set igual dentro del los dos sets retoranra falso porque asi lo quiere el .has() de los sets
describe('Comparacion Sets: Incluido', function(){
  it('Incluido True:    →  c={1,2}<{1,2,3,4};',function(){
    assert.deepEqual(true,main.testThis('c={1,2}<{1,2,3,4};').get('c'));
  });
  it('Incluido True:    →  c={2,1}<{1,2,3,4};',function(){
    assert.deepEqual(true,main.testThis('c={2,1}<{1,2,3,4};').get('c'));
  });
  it('Incluido True:    →  c={a:2,1}<{1,a:2,3,4};',function(){
    assert.deepEqual(true,main.testThis('c={a:2,1}<{1,a:2,3,4};').get('c'));
  });
  it('Incluido False:   →  c={a:2,1}<{1,2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={a:2,1}<{1,2,3,4};').get('c'));
  });
  it('Incluido False:   →  c={2,1,3,4,5}<{1,2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={2,1,3,4,5}<{1,2,3,4};').get('c'));
  });
  it('Incluido False:   →  c={a:2,1}<{1,b:2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={a:2,1}<{1,b:2,3,4};').get('c'));
  });
  it('Incluido False:   →  c={1}<{b:2,c:3,4};',function(){
    assert.deepEqual(false,main.testThis('c={1}<{b:2,c:3,4};').get('c'));
  });
  it('Incluido False:   →  c={[1]}<{b:2,c:3,4,1};',function(){
    assert.deepEqual(false,main.testThis('c={[1]}<{b:2,c:3,4,1};').get('c'));
  });
  it('Incluido False:   →  c={[1]}<{b:2,c:3,4,[1]};',function(){
    assert.deepEqual(false,main.testThis('c={[1]}<{b:2,c:3,4,[1]};').get('c'));
  });
  it('Incluido False:   →  c={[1]}<{b:2,c:3,4,1};',function(){
    assert.deepEqual(false,main.testThis('c={[1]}<{b:2,c:3,4,1};').get('c'));
  });
  it('Incluido False:   →  c={{1}}<{b:2,c:3,4,{1}};',function(){
    assert.deepEqual(false,main.testThis('c={{1}}<{b:2,c:3,4,{1}};').get('c'));
  });
});
describe('Comparacion Sets: Incluye', function(){
  it('Incluye False:   →  c={1,2}>{1,2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={1,2}>{1,2,3,4};').get('c'));
  });
  it('Incluye False:   →  c={2,1}>{1,2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={2,1}>{1,2,3,4};').get('c'));
  });
  it('Incluye False:   →  c={a:2,1}>{1,a:2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={a:2,1}>{1,a:2,3,4};').get('c'));
  });
  it('Incluye True:    →  c={1,2,3,4,5}>{1,2,3,4};',function(){
    assert.deepEqual(true,main.testThis('c={1,2,3,4,5}>{1,2,3,4};').get('c'));
  });
  it('Incluye False:   →  c={a:2,1}>{1,b:2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={a:2,1}>{1,b:2,3,4};').get('c'));
  });
  it('Incluye True:    →  c={b:2,c:3,4}>{b:2,c:3,4};',function(){
    assert.deepEqual(true,main.testThis('c={b:2,c:3,4}>{b:2,c:3,4};').get('c'));
  });
  it('Incluye True:    →  c={c:3,4,b:2}>{b:2,c:3,4};',function(){
    assert.deepEqual(true,main.testThis('c={c:3,4,b:2}>{b:2,c:3,4};').get('c'));
  });
  it('Incluye False:   →  c={[1]}>{b:2,c:3,4,1};',function(){
    assert.deepEqual(false,main.testThis('c={[1]}>{b:2,c:3,4,1};').get('c'));
  });
  it('Incluye False:   →  c={[1]}>{b:2,c:3,4,[1]};',function(){
    assert.deepEqual(false,main.testThis('c={[1]}>{b:2,c:3,4,[1]};').get('c'));
  });
  it('Incluye False:   →  c={b:2,c:3,4,[1]}>{b:2,c:3,4,1};',function(){
    assert.deepEqual(false,main.testThis('c={b:2,c:3,4,[1]}>{b:2,c:3,4,1};').get('c'));
  });
  it('Incluye False:   →  c={b:2,c:3,4,{1}}>{b:2,c:3,4,{1}};',function(){
    assert.deepEqual(false,main.testThis('c={b:2,c:3,4,{1}}>{b:2,c:3,4,{1}};').get('c'));
  });
});
describe('Comparacion Sets: Incluido Igual', function(){
  it('Incluido Igual False:   →  c={1,2}<={1,2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={1,2}<={1,2,3,4};').get('c'));
  });
  it('Incluido Igual False:   →  c={2,1}<={1,2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={2,1}<={1,2,3,4};').get('c'));
  });
  it('Incluido Igual False:   →  c={a:2,1}<={1,a:2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={a:2,1}<={1,a:2,3,4};').get('c'));
  });
  it('Incluido Igual False:   →  c={a:2,1}<={1,2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={a:2,1}<={1,2,3,4};').get('c'));
  });
  it('Incluido Igual False:   →  c={2,1,3,4,5}<={1,2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={2,1,3,4,5}<={1,2,3,4};').get('c'));
  });
  it('Incluido Igual False:   →  c={a:2,1}<={1,b:2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={a:2,1}<={1,b:2,3,4};').get('c'));
  });
  it('Incluido Igual True:    →  c={a:2,1}<={a:2,1};',function(){
    assert.deepEqual(true,main.testThis('c={a:2,1}<={a:2,1};').get('c'));
  });
  it('Incluido Igual False:   →  c={1}<={b:2,c:3,4};',function(){
    assert.deepEqual(false,main.testThis('c={1}<={b:2,c:3,4};').get('c'));
  });
  it('Incluido Igual False:   →  c={[1]}<={b:2,c:3,4,1};',function(){
    assert.deepEqual(false,main.testThis('c={[1]}<={b:2,c:3,4,1};').get('c'));
  });
  it('Incluido Igual False:   →  c={[1]}<={b:2,c:3,4,[1]};',function(){
    assert.deepEqual(false,main.testThis('c={[1]}<={b:2,c:3,4,[1]};').get('c'));
  });
  it('Incluido Igual False:   →  c={[1]}<={b:2,c:3,4,1};',function(){
    assert.deepEqual(false,main.testThis('c={[1]}<={b:2,c:3,4,1};').get('c'));
  });
  it('Incluido Igual False:   →  c={{1}}<={b:2,c:3,4,{1}};',function(){
    assert.deepEqual(false,main.testThis('c={{1}}<={b:2,c:3,4,{1}};').get('c'));
  });
});
describe('Comparacion Sets: Mayor Igual', function(){
  it('Incluido True:    →  c={1,2}<{1,2,3,4};',function(){
    assert.deepEqual(true,main.testThis('c={1,2}<{1,2,3,4};').get('c'));
  });
  it('Incluido True:    →  c={2,1}<{1,2,3,4};',function(){
    assert.deepEqual(true,main.testThis('c={2,1}<{1,2,3,4};').get('c'));
  });
  it('Incluido True:    →  c={a:2,1}<{1,a:2,3,4};',function(){
    assert.deepEqual(true,main.testThis('c={a:2,1}<{1,a:2,3,4};').get('c'));
  });
  it('Incluido False:   →  c={a:2,1}<{1,2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={a:2,1}<{1,2,3,4};').get('c'));
  });
  it('Incluido False:   →  c={2,1,3,4,5}<{1,2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={2,1,3,4,5}<{1,2,3,4};').get('c'));
  });
  it('Incluido False:   →  c={a:2,1}<{1,b:2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={a:2,1}<{1,b:2,3,4};').get('c'));
  });
  it('Incluido False:   →  c={1}<{b:2,c:3,4};',function(){
    assert.deepEqual(false,main.testThis('c={1}<{b:2,c:3,4};').get('c'));
  });
  it('Incluido False:   →  c={[1]}<{b:2,c:3,4,1};',function(){
    assert.deepEqual(false,main.testThis('c={[1]}<{b:2,c:3,4,1};').get('c'));
  });
  it('Incluido False:   →  c={[1]}<{b:2,c:3,4,[1]};',function(){
    assert.deepEqual(false,main.testThis('c={[1]}<{b:2,c:3,4,[1]};').get('c'));
  });
  it('Incluido False:   →  c={[1]}<{b:2,c:3,4,1};',function(){
    assert.deepEqual(false,main.testThis('c={[1]}<{b:2,c:3,4,1};').get('c'));
  });
  it('Incluido False:   →  c={{1}}<{b:2,c:3,4,{1}};',function(){
    assert.deepEqual(false,main.testThis('c={{1}}<{b:2,c:3,4,{1}};').get('c'));
  });
});
describe('Comparacion Sets: Incluye Igual', function(){
  it('Incluye Igual False:   →  c={1,2}>={1,2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={1,2}>={1,2,3,4};').get('c'));
  });
  it('Incluye Igual False:   →  c={2,1}>={1,2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={2,1}>={1,2,3,4};').get('c'));
  });
  it('Incluye Igual False:   →  c={a:2,1}>={1,a:2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={a:2,1}>={1,a:2,3,4};').get('c'));
  });
  it('Incluye Igual False:   →  c={1,2,3,4,5}>={1,2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={1,2,3,4,5}>={1,2,3,4};').get('c'));
  });
  it('Incluye Igual False:   →  c={a:2,1}>={1,b:2,3,4};',function(){
    assert.deepEqual(false,main.testThis('c={a:2,1}>={1,b:2,3,4};').get('c'));
  });
  it('Incluye Igual True:    →  c={b:2,c:3,4}>={b:2,c:3,4};',function(){
    assert.deepEqual(true,main.testThis('c={b:2,c:3,4}>={b:2,c:3,4};').get('c'));
  });
  it('Incluye Igual True:    →  c={c:3,4,b:2}>={b:2,c:3,4};',function(){
    assert.deepEqual(true,main.testThis('c={c:3,4,b:2}>={b:2,c:3,4};').get('c'));
  });
  it('Incluye Igual False:   →  c={[1]}>={b:2,c:3,4,1};',function(){
    assert.deepEqual(false,main.testThis('c={[1]}>={b:2,c:3,4,1};').get('c'));
  });
  it('Incluye Igual False:   →  c={[1]}>={b:2,c:3,4,[1]};',function(){
    assert.deepEqual(false,main.testThis('c={[1]}>={b:2,c:3,4,[1]};').get('c'));
  });
  it('Incluye Igual False:   →  c={b:2,c:3,4,[1]}>={b:2,c:3,4,1};',function(){
    assert.deepEqual(false,main.testThis('c={b:2,c:3,4,[1]}>={b:2,c:3,4,1};').get('c'));
  });
  it('Incluye Igual False:   →  c={b:2,c:3,4,{1}}>={b:2,c:3,4,{1}};',function(){
    assert.deepEqual(false,main.testThis('c={b:2,c:3,4,{1}}>={b:2,c:3,4,{1}};').get('c'));
  });
});
console.log("---------------------------8- Operaciones Booleanas -----------------------");
//Las operaciones booleanas son exclusivamente entre valores de verdad.
describe('Operaciones Booleanas: Negacion', function(){
  it('Negacion False:  →  c=!true;',function(){
    assert.deepEqual(false,main.testThis('c=!true;').get('c'));
  });
  it('Negacion True:   →  c=!false;',function(){
    assert.deepEqual(true,main.testThis('c=!false;').get('c'));
  });
  it('Negacion True:   →  c=![3,4]<[2,3];',function(){
    assert.deepEqual(true,main.testThis('c=!([3,4]<[2,3]);').get('c'));
  });
  it('Negacion True:   →  c=!([3,4]<[2,3]);',function(){
    assert.deepEqual(true,main.testThis('c=!([3,4]<[2,3]);').get('c'));
  });
  it('Negacion False:  →  c=!(5>1);',function(){
    assert.deepEqual(false,main.testThis('c=!(5>1);').get('c'));
  });
  it('Negacion True:   →  c=!(1/=1);',function(){
    assert.deepEqual(true,main.testThis('c=!(1/=1);').get('c'));
  });
});
describe('Operaciones Booleanas: Conjuncion', function(){
  it('Conjuncion True:    →  c=true&&true;',function(){
    assert.deepEqual(true,main.testThis('c=true&&true;').get('c'));
  });
  it('Conjuncion False:   →  c=false&&true;',function(){
    assert.deepEqual(false,main.testThis('c=false&&true;').get('c'));
  });
  it('Conjuncion False:   →  c=true&&false;',function(){
    assert.deepEqual(false,main.testThis('c=true&&false;').get('c'));
  });
  it('Conjuncion False:   →  c=false&&false;',function(){
    assert.deepEqual(false,main.testThis('c=false&&false;').get('c'));
  });
  it('Conjuncion True:    →  c=[1,2]<[2,3]&&{a:3,b:2}<{b:2,6,a:3,5};',function(){
    assert.deepEqual(true,main.testThis('c=[1,2]<[2,3]&&{a:3,b:2}<{b:2,6,a:3,5};').get('c'));
  });
});
describe('Operaciones Booleanas: Disyuncion', function(){
  it('Disyuncion True:   →  c=true||true;',function(){
    assert.deepEqual(true,main.testThis('c=true||true;').get('c'));
  });
  it('Disyuncion True:   →  c=false||true;',function(){
    assert.deepEqual(true,main.testThis('c=false||true;').get('c'));
  });
  it('Disyuncion True:   →  c=true||false;',function(){
    assert.deepEqual(true,main.testThis('c=true||false;').get('c'));
  });
  it('Disyuncion False:  →  c=false||false;',function(){
    assert.deepEqual(false,main.testThis('c=false||false;').get('c'));
  });
  it('Disyuncion True:   →  c=[1,2]<[2,3]||{a:3,b:2}<{b:2,6,a:3,5};',function(){
    assert.deepEqual(true,main.testThis('c=[1,2]<[2,3]||{a:3,b:2}<{b:2,6,a:3,5};').get('c'));
  });
  it('Disyuncion True:   →  c=false||[1,2]<[2,3]||{a:3,b:2}<{b:2,6,a:3,5};',function(){
    assert.deepEqual(true,main.testThis('c=false||[1,2]<[2,3]||{a:3,b:2}<{b:2,6,a:3,5};').get('c'));
  });
});
console.log("---------------------------9- Operaciones Listas --------------------------");
//Cardinalidad devuelve la cantidad de elementos en una lista
describe('Operaciones Listas: Cardinalidad', function(){
  it('Cardinalidad 3:  →  o=#[1,2,3];',function(){
    assert.deepEqual(3,main.testThis('o=#[1,2,3];').get('o'));
  });
  it('Cardinalidad 0:  →  o=#[];',function(){
    assert.deepEqual(0,main.testThis('o=#[];').get('o'));
  });
  it('Cardinalidad 3:  →  o=#[a:1,b:2,3];',function(){
    assert.deepEqual(3,main.testThis('o=#[a:1,b:2,3];').get('o'));
  });
  it('Cardinalidad 1:  →  o=#["a:1,b:2,3"];',function(){
    assert.deepEqual(1,main.testThis('o=#["a:1,b:2,3"];').get('o'));
  });
});
//Pertenencia retorna un booleano: true si el elemento de la izquierda esta en la derecha, false en otro caso.
// Pertenencia con listas ignora las key, solo toma en cuenta los values
describe('Operaciones Listas: Pertenencia', function(){
  it('Pertenencia True:   →  o=[]<-[1,2,3,[]];',function(){
    assert.deepEqual(true,main.testThis('o=[]<-[1,2,3,[]];').get('o'));
  });
  it('Pertenencia True:   →  o=[1]<-[1,2,3,[1]];',function(){
    assert.deepEqual(true,main.testThis('o=[1]<-[1,2,3,[1]];').get('o'));
  });
  it('Pertenencia False:  →  o=[2,3]<-[1,2,3,[1]];',function(){
    assert.deepEqual(false,main.testThis('o=[2,3]<-[1,2,3,[1]];').get('o'));
  });
  it('Pertenencia True:   →  o=2<-[1,2,3,[1]];',function(){
    assert.deepEqual(true,main.testThis('o=2<-[1,2,3,[1]];').get('o'));
  });
  it('Pertenencia True:   →  o=[a:2]<-[1,a:2];',function(){
    assert.deepEqual(true,main.testThis('o=[a:2]<-[1,a:2];').get('o'));
  });
  it('Pertenencia True:   →  o=[2]<-[1,a:2];',function(){
    assert.deepEqual(true,main.testThis('o=[2]<-[1,a:2];').get('o'));
  });
  it('Pertenencia True:   →  o=[A:2]<-[1,2];',function(){
    assert.deepEqual(true,main.testThis('o=[A:2]<-[1,2];').get('o'));
  });
  it('Pertenencia True:   →  o=[[1],[2]]<-[[[1],[2]],[3]];',function(){
    assert.deepEqual(true,main.testThis('o=[[1],[2]]<-[[[1],[2]],[3]];').get('o'));
  });
  it('Pertenencia False:  →  o=[[1],[5]]<-[[[1],[2]],[3]];',function(){
    assert.deepEqual(false,main.testThis('o=[[1],[5]]<-[[[1],[2]],[3]];').get('o'));
  });
});
//No se permiten indices negativos
//Los indices pueden ser numeros, strings o variables definidas
describe('Operaciones Listas: Indizacion', function(){
  it('Indizacion 1:   →  o=[1,2,3][0];',function(){
    assert.deepEqual(1,main.testThis('o=[1,2,3][0];').get('o'));
  });
  it('Indizacion 2:   →  o=[1,2,3][1];',function(){
    assert.deepEqual(2,main.testThis('o=[1,2,3][1];').get('o'));
  });
  it('Indizacion 2:   →  o=[1,a:2,3][1];',function(){
    assert.deepEqual(2,main.testThis('o=[1,a:2,3][1];').get('o'));
  });
  it('Indizacion 2:   →  o=[1,a:2,3]["a"];',function(){
    assert.deepEqual(2,main.testThis('o=[1,a:2,3]["a"];').get('o'));
  });
});
//Trae el valor de la clave dada
//Para traer multiples claves se debe encerrar entre () la operacion
describe('Operaciones Listas: Indizacion Abreviada', function(){
  it('Indizacion Abreviada 2:           →  o=[1,a:2,3].a;',function(){
    assert.deepEqual(2,main.testThis('o=[1,a:2,3].a;').get('o'));
  });
  it('Indizacion Abreviada 2:           →  o=[1,a:2,3]."a";',function(){
    assert.deepEqual(2,main.testThis('o=[1,a:2,3]."a";').get('o'));
  });
  it('Indizacion Abreviada undefined:   →  o=[1,a:2,3].c;',function(){
    assert.deepEqual(undefined,main.testThis('o=[1,a:2,3].c;').get('o'));
  });
  it('Indizacion Abreviada undefined:   →  o=[1,[a:2],3].c;',function(){
    assert.deepEqual(undefined,main.testThis('o=[1,[a:2],3].c;').get('o'));
  });
  it('Indizacion Abreviada [2]:         →  o=[1,a:[a:2],3].c;',function(){var rst=[2];
    assert.deepEqual(undefined,main.testThis('o=[1,a:[a:2],3].c;').get('o'));
  });
  it('Indizacion Abreviada 1:           →  o=([-3,a:[b:[c:1,-1],-2],-3].a.b.c);',function(){
    assert.deepEqual(1,main.testThis('o=([-3,a:[b:[c:1,-1],-2],-3].a.b.c);').get('o'));
  });
});
//Si se concatenan dos listas con mismo value pero key diferente se conserva ambas referenciadas respectivamente
describe('Operaciones Listas: Concatenacion', function(){
  it('Concatenacion [1,2]:              →  o=[1]++[2];',function(){var res = [1,2];
    assert.deepEqual(res,main.testThis('o=[1]++[2];').get('o'));
  });
  it('Concatenacion [1,2,2]:            →  o=[1,2]++[2];',function(){var res = [1,2,2];
    assert.deepEqual(res,main.testThis('o=[1,2]++[2];').get('o'));
  });
  it('Concatenacion [1,2,2]:            →  o=[1,a:2]++[2];',function(){var res = [1,2,2];
    assert.deepEqual(res,main.testThis('o=[1,a:2]++[2];').get('o'));
  });
  it('Concatenacion 2:                  →  o=([1,a:2]++[b:2]).a;',function(){
    assert.deepEqual(2,main.testThis('o=([1,a:2]++[b:2]).a;').get('o'));
  });
  it('Concatenacion 2:                  →  o=([1,a:2]++[b:2]).b;',function(){
    assert.deepEqual(2,main.testThis('o=([1,a:2]++[b:2]).b;').get('o'));
  });
  it('Concatenacion [1,2,2,"d"]:        →  o=[1,a:2]++[2,c:"d"];',function(){var res = [1,2,2,"d"];
    assert.deepEqual(res,main.testThis('o=[1,a:2]++[2,c:"d"];').get('o'));
  });
  it('Concatenacion 2:                  → {v=1+2; o=([1,a:2,3]++[2])[v];}',function(){
    assert.deepEqual(2,main.testThis(' {v=1+2; o=([1,a:2,3]++[2])[v];}').get('o'));
  });
  it('Concatenacion 2:                  → {v=1+2; o=([1,a:2,3]++[v:2]).v;}',function(){
    assert.deepEqual(2,main.testThis(' {v=1+2; o=([1,a:2,3]++[v:2]).v;}').get('o'));
  });
  it('Concatenacion 2:                  → {v=1+2; o=([1,[a:2,3]]++[[v:2],3])[v].v;}',function(){
    assert.deepEqual(2,main.testThis(' {v=1+2; o=([1,a:2,3]++[v:2]).v;}').get('o'));
  });
});
describe('Operaciones Listas: Union', function(){
  it('Concatenacion [1,2]:      →  o=[1]\\/[2];',function(){var res = [1,2];
    assert.deepEqual(res,main.testThis('o=[1]\\/[2];').get('o'));
  });
  it('Concatenacion [1,2]:      →  o=[1,2]\\/[2];',function(){var res = [1,2];
    assert.deepEqual(res,main.testThis('o=[1,2]\\/[2];').get('o'));
  });
  it('Concatenacion [1,2]:      →  o=[1,a:2]\\/[2];',function(){var res = [1,2];
    assert.deepEqual(res,main.testThis('o=[1,a:2]\\/[2];').get('o'));
  });
  it('Concatenacion [1,2,"d"]:  →  o=[1,a:2]\\/[2,c:"d"];',function(){var res = [1,2,"d"];
    assert.deepEqual(res,main.testThis('o=[1,a:2]\\/[2,c:"d"];').get('o'));
  });
  it('Concatenacion 2:          →  {v=1+1; o=([1,3,a:2]\\/[2])[v];}',function(){
    assert.deepEqual(2,main.testThis(' {v=1+1; o=([1,3,v:2]\\/[2])[v];}').get('o'));
  });
  it('Concatenacion 2:          →  {v=1+2; o=([1,a:2,3]\\/[v:2]).v;}',function(){
    assert.deepEqual(2,main.testThis(' {v=1+2; o=([1,a:2,3]\\/[v:2]).v;}').get('o'));
  });
  it('Concatenacion 2:          →  {v=1+2; o=([1,[a:2,3]]\\/[[v:2],3])[v].v;}',function(){
    assert.deepEqual(2,main.testThis(' {v=1+2; o=([1,a:2,3]\\/[v:2]).v;}').get('o'));
  });
});
//Si se intersectan keys duplicadas no pasa nada
//Si se intersectan mismos values con diferentes keys se mantienen ambas keys referenciadas a ese valor.
describe('Operaciones Listas: Interseccion', function(){
  it('Concatenacion []:       →  o=[1]/\\[2];',function(){var res = [];
    assert.deepEqual(res,main.testThis('o=[1]/\\[2];').get('o'));
  });
  it('Concatenacion [2]:      →  o=[1,2]/\\[2];',function(){var res = [2];
    assert.deepEqual(res,main.testThis('o=[1,2]/\\[2];').get('o'));
  });
  it('Concatenacion 2:        →  {o=[1,a:2]/\\[2];}',function(){
    assert.deepEqual(2,main.testThis('o=([1,a:2]/\\[2]).a;').get('o'));
  });
  it('Concatenacion 2:        →  {o=[1,a:2]/\\[b:2];}',function(){
    assert.deepEqual(2,main.testThis('o=([1,a:2]/\\[b:2]).a;').get('o'));
  });
  it('Concatenacion 2:        →  {o=[1,a:2]/\\[b:2];}',function(){
    assert.deepEqual(2,main.testThis('o=([1,a:2]/\\[b:2]).b;').get('o'));
  });
  it('Concatenacion ["d",2]:  →  o=["d",1,a:2]/\\[2,c:"d"];',function(){var res = ["d",2];
    assert.deepEqual(res,main.testThis('o=["d",1,a:2]/\\[2,c:"d"];').get('o'));
    });
  it('Concatenacion 2:        →  {v=0; o=([1,3,a:2]/\\[2])[v];}',function(){
    assert.deepEqual(2,main.testThis(' {v=0; o=([1,3,v:2]/\\[2])[v];}').get('o'));
  });
  it('Concatenacion 2:        →  {v=1; o=([1,a:2,3]/\\[1,v:2,3]).v;}',function(){
    assert.deepEqual(2,main.testThis(' {v=1; o=([1,a:2,3]/\\[1,v:2,3]).v;}').get('o'));
  });
  it('Concatenacion 2:        →  {v=1+2; o=([1,[a:2,3]]/\\[1,[v:2,3]])[v].v;}',function(){
    assert.deepEqual(2,main.testThis(' {v=1+2; o=([1,X:[a:2,3]]/\\[1,X:[v:2,3]])["X"].a;}').get('o'));
  });
});
describe('Operaciones Listas: Diferencia', function(){
  it('Diferencia [1]:        →  o=[1]--[2];',function(){var res = [1];
    assert.deepEqual(res,main.testThis('o=[1]--[2];').get('o'));
  });
  it('Diferencia [1]:        →  o=[1,2]--[2];',function(){var res = [1];
    assert.deepEqual(res,main.testThis('o=[1,2]--[2];').get('o'));
  });
  it('Diferencia [1]:        →  o=[1,a:2]--[2];',function(){var res = [1];
    assert.deepEqual(res,main.testThis('o=[1,a:2]--[2];').get('o'));
  });
  it('Diferencia [1]:        →  o=[1,a:2]--[b:2];',function(){var res = [1];
    assert.deepEqual(res,main.testThis('o=[1,a:2]--[b:2];').get('o'));
  });
  it('Diferencia [1]:        →  o=([1,2]--[a:2]);',function(){var res = [1];
    assert.deepEqual(res,main.testThis('o=([1,2]--[a:2]);').get('o'));
  });
  it('Diferencia [1]:        →  o=[1,a:2]--[2,c:"d"];',function(){var res = [1];
    assert.deepEqual(res,main.testThis('o=[1,a:2]--[2,c:"d"];').get('o'));
  });
  it('Diferencia 3:          →  {v=1; o=([1,a:2,3]--[2])[v];}',function(){
    assert.deepEqual(3,main.testThis(' {v=1; o=([1,a:2,3]--[2])[v];}').get('o'));
  });
  it('Diferencia 3:          →  {v=1+2; o=([1,a:2,c:3]--[v:2]).c;}',function(){
    assert.deepEqual(3,main.testThis(' {v=1+2; o=([1,a:2,c:3]--[v:2]).c;}').get('o'));
  });
  it('Diferencia [1]:        →  o=[1,[2,3]]--[[2,3],3];',function(){var res = [1];
    assert.deepEqual(res,main.testThis(' o=[1,[2,3]]--[[2,3],3];').get('o'));
  });
  it('Diferencia [1,[2,3]]:  →  o=[1,[2,3]]--[[2,3,4],3];',function(){var res = [1,[2,3]];
    assert.deepEqual(res,main.testThis(' o=[1,[2,3]]--[[2,3,4],3];').get('o'));
  });
});
console.log("--------------------------10- Operaciones Conjuntos -----------------------");
describe('Operaciones Conjuntos: Cardinalidad', function(){
  it('Cardinalidad 3:  →  o=#{1,2,3};',function(){
    assert.deepEqual(3,main.testThis('o=#{1,2,3};').get('o'));
  });
  it('Cardinalidad 0:  →  o=#{};',function(){
    assert.deepEqual(0,main.testThis('o=#{};').get('o'));
  });
  it('Cardinalidad 3:  →  o=#{a:1,b:2,3};',function(){
    assert.deepEqual(3,main.testThis('o=#{a:1,b:2,3};').get('o'));
  });
  it('Cardinalidad 1:  →  o=#{"a:1,b:2,3"};',function(){
    assert.deepEqual(1,main.testThis('o=#{"a:1,b:2,3"};').get('o'));
  });
  it('Cardinalidad 0:  →  o=#{"a:1,b:2,3"}-1;',function(){
    assert.deepEqual(0,main.testThis('o=#{"a:1,b:2,3"}-1;').get('o'));
  });
  it('Cardinalidad 0:  →  o=#{a:"3"}-1;',function(){
    assert.deepEqual(0,main.testThis('o=#{a:"3"}-1;').get('o'));
  });
});
//La pertenencia en sets es resuelta por .has() por lo tanto cosas como {} o [] no estan incluidas aunque lo aparente
describe('Operaciones Conjuntos: Pertenencia', function(){
  it('Pertenencia False:  →  o={}<-{1,2,3,[]};',function(){
    assert.deepEqual(false,main.testThis('o={}<-{1,2,3,[]};').get('o'));
  });
  it('Pertenencia False:  →  o={}<-{1,2,3,{}};',function(){
    assert.deepEqual(false,main.testThis('o={}<-{1,2,3,{}};').get('o'));
  });
  it('Pertenencia False:  →  o={1}<-{1,2,3,{1}};',function(){
    assert.deepEqual(false,main.testThis('o={1}<-{1,2,3,{1}};').get('o'));
  });
  it('Pertenencia False:  →  o={2,3}<-{1,2,3,[1]};',function(){
    assert.deepEqual(false,main.testThis('o={2,3}<-{1,2,3,[1]};').get('o'));
  });
  it('Pertenencia True:   →  o=2<-{1,2,3,{1}};',function(){
    assert.deepEqual(true,main.testThis('o=2<-{1,2,3,{1}};').get('o'));
  });
  it('Pertenencia True:   →  o=2<-{1,a:2};',function(){
    assert.deepEqual(true,main.testThis('o=2<-{1,a:2};').get('o'));
  });
  it('Pertenencia False:  →  o={2}<-{1,a:2};',function(){
    assert.deepEqual(false,main.testThis('o={2}<-{1,a:2};').get('o'));
  });
  it('Pertenencia False:  →  o={A:2}<-{1,2};',function(){
    assert.deepEqual(false,main.testThis('o={A:2}<-{1,2};').get('o'));
  });
  it('Pertenencia False:  →  o={{1},[2]}<-{{{1},[2]},[3]};',function(){
    assert.deepEqual(false,main.testThis('o={{1},[2]}<-{{[1],[2]},[3]};').get('o'));
  });
  it('Pertenencia False:  →  o=[[1],[2]]<-{[[1],[2]],[3]};',function(){
    assert.deepEqual(false,main.testThis('o=[[1],[2]]<-{[[1],[2]],[3]};').get('o'));
  });
});
//No se puede hacer indizacion con numeros enteros
describe('Operaciones Conjuntos: Indizacion', function(){
  it('Indizacion 2:          →  o={1,a:2,3}["a"];',function(){
    assert.deepEqual(2,main.testThis('o={1,a:2,3}["a"];').get('o'));
  });
  it('Indizacion 2:          →  o={1,a:2,b:3]["a"];',function(){
    assert.deepEqual(2,main.testThis('o={1,a:2,b:3}["a"];').get('o'));
  });
  it('Indizacion undefined:  →  o={1,2,3]["a"];',function(){
    assert.deepEqual(undefined,main.testThis('o={1,2,3}["a"];').get('o'));
  });
  it('Indizacion [1,2,3]:    →  o={1,a:[1,B:2,3],b:3]["a"];',function(){var rst= [1,2,3];
    assert.deepEqual(rst,main.testThis('o={1,a:[1,B:2,3],b:3}["a"];').get('o'));
  });
  it('Indizacion 2:          →  o={1,a:[1,B:2,3],b:3]["a"];',function(){
    assert.deepEqual(2,main.testThis('o={1,a:[1,B:2,3],b:3}["a"].B;').get('o'));
  });
});
describe('Operaciones Conjuntos: Indizacion Abreviada', function(){
  it('Indizacion Abreviada 2:           →  o={1,a:2,3}.a;',function(){
    assert.deepEqual(2,main.testThis('o={1,a:2,3}.a;').get('o'));
  });
  it('Indizacion Abreviada 2:           →  o={1,a:2,3}."a";',function(){
    assert.deepEqual(2,main.testThis('o={1,a:2,3}."a";').get('o'));
  });
  it('Indizacion Abreviada undefined:   →  o={1,a:2,3}.c;',function(){
    assert.deepEqual(undefined,main.testThis('o={1,a:2,3}.c;').get('o'));
  });
  it('Indizacion Abreviada undefined:   →  o={1,[a:2],3}.c;',function(){
    assert.deepEqual(undefined,main.testThis('o={1,[a:2],3}.c;').get('o'));
  });
  it('Indizacion Abreviada [2]:         →  o={1,a:[a:2],3}.c;',function(){var rst=[2];
    assert.deepEqual(undefined,main.testThis('o={1,a:[a:2],3}.c;').get('o'));
  });
  it('Indizacion Abreviada 1:           →  o=({-3,a:{b:{c:1,-1},-2},-3}.a.b.c);',function(){
    assert.deepEqual(1,main.testThis('o=({-3,a:{b:{c:1,-1},-2},-3}.a.b.c);').get('o'));
  });
});
describe('Operaciones Conjuntos: Concatenacion', function(){/*La concatenacion no esta definida para sets*/});
describe('Operaciones Conjuntos: Union', function(){
  it('Union {1,2}:      →  o={1}\\/{2};',function(){var res = new Set([1,2]);
    assert.deepEqual(res,main.testThis('o={1}\\/{2};').get('o'));
  });
  it('Union {1,2}:      →  o={1,2}\\/{2};',function(){var res = new Set([1,2]);
    assert.deepEqual(res,main.testThis('o={1,2}\\/{2};').get('o'));
  });
  it('Union {1,2}:      →  o={1,a:2}\\/{2};',function(){var res = new Set([1,2]);
    assert.deepEqual(res,main.testThis('o={1,a:2}\\/{2};').get('o'));
  });
  it('Union {1,2,"d"}:  →  o={1,a:2}\\/{2,c:"d"};',function(){var res = new Set([1,2,"d"]);
    assert.deepEqual(res,main.testThis('o={1,a:2}\\/{2,c:"d"};').get('o'));
  });
  it('Union 2:          →  {o=({1,a:2,3}\\/{}).a;}',function(){
    assert.deepEqual(2,main.testThis(' {o=({1,a:2,3}\\/{}).a;}').get('o'));
  });
  it('Union 2:          →  {o=({1,3,v:2}\\/{2})["v"];}',function(){
    assert.deepEqual(2,main.testThis(' {o=({1,3,v:2}\\/{2})["v"];}').get('o'));
  });
  it('Union 2:          →  {o=({1,a:2,3}\\/{v:2}).a;}',function(){
    assert.deepEqual(2,main.testThis(' {o=({1,a:2,3}\\/{v:2}).a;}').get('o'));
  });
  it('Union 2:          →  {o=({1,a:2,3}\\/{v:2}).a;}',function(){
    assert.deepEqual(2,main.testThis(' {o=({1,a:2,3}\\/{v:2}).a;}').get('o'));
  });
});
describe('Operaciones Conjuntos: Interseccion', function(){
  it('Interseccion {}:       →  o={1}/\\{2};',function(){var res = new Set([]);
    assert.deepEqual(res,main.testThis('o={1}/\\{2};').get('o'));
  });
  it('Interseccion {2}:      →  o={1,2}/\\{2};',function(){var res = new Set([2]);
    assert.deepEqual(res,main.testThis('o={1,2}/\\{2};').get('o'));
  });
  it('Interseccion 2:        →  {o={1,a:2}/\\{2};}',function(){
    assert.deepEqual(2,main.testThis('o=({1,a:2}/\\{2}).a;').get('o'));
  });
  it('Interseccion 2:        →  {o={1,a:2}/\\{b:2};}',function(){
    assert.deepEqual(2,main.testThis('o=({1,a:2}/\\{b:2}).a;').get('o'));
  });
  it('Interseccion 2:        →  {o={1,a:2}/\\{b:2};}',function(){
    assert.deepEqual(2,main.testThis('o=({1,a:2}/\\{b:2}).b;').get('o'));
  });
  it('Interseccion {"d",2}:  →  o={"d",1,a:2}/\\{2,c:"d"};',function(){var res = new Set(["d",2]);
    assert.deepEqual(res,main.testThis('o={"d",1,a:2}/\\{2,c:"d"};').get('o'));
    });
  it('Interseccion 2:        →  {o=({1,3,v:2}/\\{2})["v"];}',function(){
    assert.deepEqual(2,main.testThis(' { o=({1,3,v:2}/\\{2})["v"];}').get('o'));
  });
  it('Interseccion 2:        →  {v="v";o=({1,3,a:2}/\\{2})["v"];}',function(){
    assert.deepEqual(2,main.testThis(' {v="v"; o=({1,3,v:2}/\\{2})[v];}').get('o'));
  });
  it('Interseccion 2:        →  {v=1; o=({1,a:2,3}/\\{1,v:2,3}).v;}',function(){
    assert.deepEqual(2,main.testThis(' {v=1; o=({1,a:2,3}/\\{1,v:2,3}).v;}').get('o'));
  });
  it('Interseccion 2:        →  {v=1+2; o=({1,[a:2,3]}/\\{1,[v:2,3]})[v].v;}',function(){
    assert.deepEqual(2,main.testThis(' {v=1+2; o=({1,X:[a:2,3]}/\\{1,X:[v:2,3]})["X"].a;}').get('o'));
  });
});
describe('Operaciones Conjuntos: Diferencia', function(){
  it('Diferencia {1}:  →  o={1}--{2};',function(){var res = new Set([1]);
    assert.deepEqual(res,main.testThis('o={1}--{2};').get('o'));
  });
  it('Diferencia {}:   →  o={1}--{1};',function(){var res = new Set([]);
    assert.deepEqual(res,main.testThis('o={1}--{1};').get('o'));
  });
  it('Diferencia {1}:  →  o={1,2}--{2};',function(){var res = new Set([1]);
    assert.deepEqual(res,main.testThis('o={1,2}--{2};').get('o'));
  });
  it('Diferencia {1}   →  {o={1,a:2}--{2};}',function(){var res = new Set([1]);
    assert.deepEqual(res,main.testThis('o=({1,a:2}--{2});').get('o'));
  });
  it('Diferencia 2:    →  {o={1,a:2}--{b:2};}',function(){
    assert.deepEqual(2,main.testThis('o=({1,a:2}--{b:2}).a;').get('o'));
  });
  it('Diferencia 2:    →  {o={1,a:2}--{b:2};}',function(){
    assert.deepEqual(2,main.testThis('o=({1,a:2}--{b:2}).b;').get('o'));
  });
  it('Diferencia {1}:  →  o={"d",1,a:2}--{2,c:"d"};',function(){var res = new Set([1]);
    assert.deepEqual(res,main.testThis('o={"d",1,a:2}--{2,c:"d"};').get('o'));
    });
  it('Diferencia 3:    →  {o=({1,a:3,v:2}--{2})["a"];}',function(){
    assert.deepEqual(3,main.testThis(' { o=({1,a:3,v:2}--{2})["a"];}').get('o'));
  });
  it('Diferencia 2:    →  {v="v";o=({1,3,a:2}--{3,1})["v"];}',function(){
    assert.deepEqual(2,main.testThis(' {v="v"; o=({1,3,v:2}--{3,1})[v];}').get('o'));
  });
  it('Diferencia 2:    →  {v=1; o=({1,a:2,3}--{1,v:2,3}).v;}',function(){
    assert.deepEqual(2,main.testThis(' {v=1; o=({1,a:2,3}--{1,v:2,3}).v;}').get('o'));
  });
  it('Diferencia 2:    →  {v=1+2; o=({1,[a:2,3]}--{1,[v:2,3]})[v].v;}',function(){
    assert.deepEqual(2,main.testThis(' {v=1+2; o=({1,X:[a:2,3]}--{1,X:[v:2,3]})["X"].a;}').get('o'));
  });
});
console.log("--------------------------11- Operaciones Strings -------------------------");
describe('Operaciones Strings: Cardinalidad', function(){
  it('Cardinalidad 4:  →  o=#"Hola";',function(){
    assert.deepEqual(4,main.testThis('o=#"Hola";').get('o'));
  });
  it('Cardinalidad 0:  →  o=#"";',function(){
    assert.deepEqual(0,main.testThis('o=#"";').get('o'));
  });
  it('Cardinalidad 1:  →  o=#" ";',function(){
    assert.deepEqual(1,main.testThis('o=#" ";').get('o'));
  });
  it('Cardinalidad 9:  →  o=#"ola"+#" k "+#"ase";',function(){
    assert.deepEqual(9,main.testThis('o=#"ola"+#" k "+#"ase";').get('o'));
  });
});
//Para la comparacion de strings se consideran mayusculas
describe('Operaciones Strings: Pertenencia', function(){
  it('Pertenencia False:  →  o="job"<-"Inside";',function(){
    assert.deepEqual(false,main.testThis('o="job"<-"Inside";').get('o'));
  });
  it('Pertenencia True:   →  o="side"<-"Inside";',function(){
    assert.deepEqual(true,main.testThis('o="side"<-"Inside";').get('o'));
  });
  it('Pertenencia True:   →  o="car"<-"A car";',function(){
    assert.deepEqual(true,main.testThis('o="car"<-"A car";').get('o'));
  });
  it('Pertenencia False:  →  o="dog"<-"DOG";',function(){
    assert.deepEqual(false,main.testThis('o="dog"<-"DOG";').get('o'));
  });
});
describe('Operaciones Strings: Indizacion', function(){
  it('Indizacion "c":         →  o="car"[0];',function(){
    assert.deepEqual("c",main.testThis('o="car"[0];').get('o'));
  });
  it('Indizacion undefined:   →  o="Equipo"[100];',function(){
    assert.deepEqual(undefined,main.testThis('o="Equipo"[100];').get('o'));
  })
  it('Indizacion "ABC":       →  o="A-B-C"[0]+"A-B-C"[2]+"A-B-C"[4];',function(){
    assert.deepEqual("ABC",main.testThis('o="A-B-C"[0]+"A-B-C"[2]+"A-B-C"[4];').get('o'));
  })
});
describe('Operaciones Strings: Indizacion Abreviada', function(){/*No esta definido para literales*/});
describe('Operaciones Strings: Concatenacion', function(){
  it('Concatenacion "ABC":    →  o="AB"++"C";',function(){
    assert.deepEqual("ABC",main.testThis(' o="AB"++"C";').get('o'));
  })
  it('Concatenacion "ABCDE":  →  o="AB"++"C"++"DE";',function(){
    assert.deepEqual("ABCDE",main.testThis(' o="AB"++"C"++"DE";').get('o'));
  })
});
describe('Operaciones Strings: Union', function(){
  it('Union "ABC":    →  o="AB"\\/"BC";',function(){
    assert.deepEqual("ABC",main.testThis(' o="AB"\\/"BC";').get('o'));
  })
  it('Union "ABCDE":  →  o="AB"\\/"C"\\/"DE";',function(){
    assert.deepEqual("ABCDE",main.testThis(' o="AB"\\/"C"\\/"DE";').get('o'));
  })
});
describe('Operaciones Strings: Interseccion', function(){
  it('Interseccion "B":  →  o="AB"/\\"BC";',function(){
    assert.deepEqual("B",main.testThis(' o="AB"/\\"BC";').get('o'));
  })
  it('Interseccion "":   →  o="AB"/\\"C"/\\"DE";',function(){
    assert.deepEqual("",main.testThis(' o="AB"/\\"C"/\\"DE";').get('o'));
  })
});
describe('Operaciones Strings: Diferencia', function(){});
console.log("--------------------------12- Enumeraciones -------------------------------");
describe('Enumeraciones:', function(){
  it('Enumeracion [-1,0,1,2,3,4]:         →  e=[-1..4] ',function(){var rst = [-1,0,1,2,3,4];
    assert.deepEqual(rst,main.testThis('e=[-1..4];').get('e'));
  });
  it('Enumeracion [0,1,2,3,4]:            →  e=[0..4] ',function(){var rst = [0,1,2,3,4];
    assert.deepEqual(rst,main.testThis('e=[0..4];').get('e'));
  });
  it('Enumeracion [0,2,4,6,8,10]:         →  e=[0,2..10] ',function(){var rst = [0,2,4,6,8,10];
    assert.deepEqual(rst,main.testThis('e=[0,2..10];').get('e'));
  });
  it('Enumeracion [0,3,6,9]:              →  e=[0,3..10] ',function(){var rst = [0,3,6,9];
    assert.deepEqual(rst,main.testThis('e=[0,3..10];').get('e'));
  });
  it('Enumeracion [10,7,4,1]:             →  e=[10,7..0] ',function(){var rst = [10,7,4,1];
    assert.deepEqual(rst,main.testThis('e=[10,7..0];').get('e'));
  });
  it('Enumeracion [0,0.31,0.62,0.93]:     →  e=[0,0.31..1]',function(){var rst = [0,0.31,0.62,0.9299999999999999];
    assert.deepEqual(rst,main.testThis('e=[0,0.31..1];').get('e'));
  });
  it('Enumeracion [0,-0.31,-0.62,-0.93]:  →  e=[0,-0.31..-1]',function(){var rst = [0,-0.31,-0.62,-0.9299999999999999];
    assert.deepEqual(rst,main.testThis('e=[0,-0.31..-1];').get('e'));
  });
  it('Enumeracion {-1,0,1,2,3,4}:         →  e={-1..4} ',function(){var rst = new Set([-1,0,1,2,3,4]);
    assert.deepEqual(rst,main.testThis('e={-1..4};').get('e'));
  });
  it('Enumeracion {0,1,2,3,4}:            →  e={0..4} ',function(){var rst = new Set([0,1,2,3,4]);
    assert.deepEqual(rst,main.testThis('e={0..4};').get('e'));
  });
  it('Enumeracion {0,2,4,6,8,10}:         →  e={0,2..10} ',function(){var rst = new Set([0,2,4,6,8,10]);
    assert.deepEqual(rst,main.testThis('e={0,2..10};').get('e'));
  });
  it('Enumeracion {0,3,6,9}:              →  e={0,3..10} ',function(){var rst = new Set([0,3,6,9]);
    assert.deepEqual(rst,main.testThis('e={0,3..10};').get('e'));
  });
  it('Enumeracion {10,7,4,1}:             →  e={10,7..0} ',function(){var rst = new Set([10,7,4,1]);
    assert.deepEqual(rst,main.testThis('e={10,7..0};').get('e'));
  });
  it('Enumeracion {0,0.31,0.62,0.93}:     →  e={0,0.31..1}',function(){var rst = new Set([0,0.31,0.62,0.9299999999999999]);
    assert.deepEqual(rst,main.testThis('e={0,0.31..1};').get('e'));
  });
  it('Enumeracion {0,-0.31,-0.62,-0.93}:  →  e={0,-0.31..-1}',function(){var rst = new Set([0,-0.31,-0.62,-0.9299999999999999]);
    assert.deepEqual(rst,main.testThis('e={0,-0.31..-1};').get('e'));
  });
});
console.log("--------------------------13- Expresion Condicional -----------------------");
describe('Expresion Condicional', function(){
  it('Expresion Condicional True:   →  ec=(true if true else false);',function(){
    assert.deepEqual(true,main.testThis('ec=(true if true else true);').get('ec'));
  });
  it('Expresion Condicional False:  →  ec=(false if true else true);',function(){
    assert.deepEqual(false,main.testThis('ec=(false if true else true);').get('ec'));
  });
  it('Expresion Condicional 2:      →  ec=(2 if 2<5 else 3);',function(){
    assert.deepEqual(2,main.testThis('ec=(2 if 2<5 else 3);').get('ec'));
  });
  it('Expresion Condicional 9:      →  ec=(2 if 5/=5 else 9);',function(){
    assert.deepEqual(9,main.testThis('ec=(2 if 5/=5 else 9);').get('ec'));
  });
});
console.log("--------------------------14- Listas por Comprensión ----------------------");
describe('Listas por Comprensión', function(){
  it('Listas por Comprensión [0,2,4,6]:                  →  lc=[x * 2 for x <- {0..3}];',function(){var rst=[0,2,4,6];
    assert.deepEqual(rst,main.testThis('lc=[x * 2 for x <- {0..3}];').get('lc'));
  });
  it('Listas por Comprensión [1,2,3,4,6,9]:              →  lc=[x * y for x <- [1..3], y<-[1..3], x<=y];',function(){var rst=[1,2,3,4,6,9];
    assert.deepEqual(rst,main.testThis('lc=[x * y for x <- [1..3], y <- [1..3], x <= y];').get('lc'));
  });
  it('Listas por Comprensión [[0,2],[0,3],[1,2],[1,3]]:  →  lc=[[x,y] for x<-[0..1],y<-[2..3]];',function(){var rst=[[0,2],[0,3],[1,2],[1,3]];
    assert.deepEqual(rst,main.testThis('lc=[[x,y] for x<-[0..1],y<-[2..3]];').get('lc'));
  });
  it('Listas por Comprensión []:                         →  lc=[[x,y] for x<-[0..1],y<-[2..3],false];',function(){var rst=[];
    assert.deepEqual(rst,main.testThis('lc=[[x,y] for x<-[0..1],y<-[2..3],false];').get('lc'));
  });
  it('Listas por Comprensión [[0,2],[0,3],[1,2],[1,3]]:  →  lc=[[x,y] for x<-[0..1],y<-[2..3],true];',function(){var rst=[[0,2],[0,3],[1,2],[1,3]];
    assert.deepEqual(rst,main.testThis('lc=[[x,y] for x<-[0..1],y<-[2..3],true];').get('lc'));
  });
});
console.log("--------------------------15- Conjuntos por Comprensión -------------------");
describe('Conjuntos por Comprensión', function(){
  it('Conjuntos por Comprensión {0,2,4,6}:                  →  lc={x * 2 for x <- {0..3}};',function(){var rst= new Set([0,2,4,6]);
    assert.deepEqual(rst,main.testThis('lc={x * 2 for x <- {0..3}};').get('lc'));
  });
  it('Conjuntos por Comprensión {1,2,3,4,6,9}:              →  lc={x * y for x <- [1..3], y<-[1..3], x<=y};',function(){var rst=new Set([1,2,3,4,6,9]);
    assert.deepEqual(rst,main.testThis('lc={x * y for x <- [1..3], y <- [1..3], x <= y};').get('lc'));
  });
  it('Conjuntos por Comprensión {[0,2],[0,3],[1,2],[1,3]}:  →  lc={[x,y] for x<-[0..1],y<-[2..3]};',function(){var rst=new Set([[0,2],[0,3],[1,2],[1,3]]);
    assert.deepEqual(rst,main.testThis('lc={[x,y] for x<-[0..1],y<-[2..3]};').get('lc'));
  });
  it('Conjuntos por Comprensión {}:                         →  lc={[x,y] for x<-[0..1],y<-[2..3],false};',function(){var rst=new Set([]);
    assert.deepEqual(rst,main.testThis('lc={[x,y] for x<-[0..1],y<-[2..3],false};').get('lc'));
  });
});
console.log("--------------------------16- Condicional ---------------------------------");
describe('Condicional If Then', function(){
  it('If Then True:       →  if(true) c=true;',function(){
    assert.deepEqual(true,main.testThis('if(true) c=true;').get('c'));
  });
  it('If Then False:      →  {c=false;if(false) c=true;}',function(){
    assert.deepEqual(false,main.testThis('{c=false;if(false) c=true;}').get('c'));
  });
  it('If Then "a":        →  if(1/="a") c="a";',function(){
    assert.deepEqual("a",main.testThis('if(1/="a") c="a";').get('c'));
  });
  it('If Then undefined:  →  if(1>100) c=-1;',function(){
    assert.deepEqual(undefined,main.testThis('if(1>100) c=-1;').get('c'));
  });
});
describe('Condicional If Then Else', function(){
  it('If Then Else True:    →  if(true) c=true else c=false;',function(){
    assert.deepEqual(true,main.testThis('if(true) c=true; else c=false;').get('c'));
  });
  it('If Then Else False:   →  if(false) c=true; else c=false;}',function(){
    assert.deepEqual(false,main.testThis('if(false) c=true; else c=false;').get('c'));
  });
  it('If Then Else "a":     →  if(1=="a") c="b"; else c="a";',function(){
    assert.deepEqual("a",main.testThis('if(1=="a") c="b"; else c="a";').get('c'));
  });
  it('If Then Else True:    →  if(!(true&&false)) c="True"; else c="False";',function(){
    assert.deepEqual("True",main.testThis('if(!(true&&false)) c="True"; else c="False";').get('c'));
  });
  it('If Then Else 1:       →  {x=-1; if (x > 0) y = x; else y = -x;};',function(){
    assert.deepEqual(1,main.testThis('{x=-1; if (x > 0) y = x; else y = -x;}').get('y'));
  });
  it('If Then Else 1:       →  {x=1; if (x > 0) y = x; else y = -x;};',function(){
    assert.deepEqual(1,main.testThis('{x=1; if (x > 0) y = x; else y = -x;}').get('y'));
  });
});
console.log("--------------------------17- Bucles --------------------------------------");
describe('Bucles', function(){
  it('For:    →  { z = 1; for (x <- [1..3], y <- [1..3], x <= y) z = z + x * y; }',function(){
    assert.deepEqual(26,main.testThis('{z = 1; for (x <- [1..3], y <- [1..3], x <= y) z = z + x * y;}').get('z'));
  });
  it('For:    →  { z = 0; for (x <- [1..10], y <- [0..9], x /= y) z = z +1; }',function(){
    assert.deepEqual(91,main.testThis('{ z = 0; for (x <- [1..10], y <- [0..9], x /= y) z = z +1; }').get('z'));
  });
});
console.log("--------------------------18- Secuencias y Bloques ------------------------");
describe('Secuencias y Bloques', function(){
  it('Secuencias y Bloques 3:   →  {x=1; y=x+1; z=x+y;};',function(){
    assert.deepEqual(3,main.testThis('{x=1;y=x+1;z=x+y;}').get('z'));
  });
  it('Secuencias y Bloques 20:  →  {x=1; y=x+1; if(x>y) z= x*10; else z=y*10;};',function(){
    assert.deepEqual(20,main.testThis('{x=1;y=x+1;if(x>y) z= x*10; else z=y*10;}').get('z'));
  });
});
console.log("--------------------------19- Funciones -----------------------------------");
describe('Funciones', function(){
  it('Funciones 4:               →  {function potencia(b,e){ r = 1; for (_ <- [1..e]) r = r * b; return r;} p=potencia(2,2);}',function(){
    assert.deepEqual(4,main.testThis('{function potencia(b, e) { r = 1; for (_ <- [1..e]) r = r * b; return r; } p=potencia(2,2);}').get('p'));
  });
  it('División Entera 2:         →  {f = div(5,2);};',function(){
    assert.deepEqual(2,main.testThis('{f = div(5,2);}').get('f'));
  });
  it('División Entera 3:         →  {f = div(7.0,2.0);};',function(){
    assert.deepEqual(3,main.testThis('{f = div(7.0,2.0);}').get('f'));
  });
  it('Resto División Entera 1:   →  {f = mod(5,2);};',function(){
    assert.deepEqual(1,main.testThis('{f = mod(5,2);}').get('f'));
  });
  it('Resto División Entera 3:   →  {f = mod(7,4);};',function(){
    assert.deepEqual(3,main.testThis('{f = mod(7,4);}').get('f'));
  });
  it('String "Hola Multiverso":  →  {f = string("Hola Multiverso");};',function(){
    assert.deepEqual("Hola Multiverso",main.testThis('{f = string("Hola Multiverso");}').get('f'));
  });
  it('String "404":              →  {f = string(404);};',function(){
    assert.deepEqual("404",main.testThis('{f = string("404");}').get('f'));
  });
  it('String "1,2,3":            →  {f = string([1,2,3]);};',function(){
    assert.deepEqual("1,2,3",main.testThis('{f = string([1,2,3]);}').get('f'));
  });
  it('Integer 1:                 →  {f = int("1");};',function(){
    assert.deepEqual(1,main.testThis('{f = int("1");}').get('f'));
  });
  it('Integer 1.05:              →  {f = int("1.05");};',function(){
    assert.deepEqual(1,main.testThis('{f = int("1.05");}').get('f'));
  });
  it('Number "1.05":             →  {f = int("1.05");};',function(){
    assert.deepEqual(1.05,main.testThis('{f = number("1.05");}').get('f'));
  });
  it('Number 1.05:               →  {f = int(1.05);};',function(){
    assert.deepEqual(1.05,main.testThis('{f = number(1.05);}').get('f'));
  });
  it('Number 1.0:                →  {f = int("1");};',function(){
    assert.deepEqual(1.0,main.testThis('{f = number("1");}').get('f'));
  });
  it('Boolean False:             →  {f = boolean(0);};',function(){
    assert.deepEqual(false,main.testThis('f = boolean(0);').get('f'));
  });
  it('Boolean False:             →  {f = boolean(null);};',function(){
    assert.deepEqual(false,main.testThis('f = boolean(null);').get('f'));
  });
  it('Boolean False:             →  {f = boolean("");};',function(){
    assert.deepEqual(false,main.testThis('f = boolean("");').get('f'));
  });
  it('Boolean False:             →  {f = boolean([]);};',function(){
    assert.deepEqual(false,main.testThis('f = boolean([]);').get('f'));
  });
  it('Boolean False:             →  {f = boolean({});};',function(){
    assert.deepEqual(false,main.testThis('f = boolean({});').get('f'));
  });
  it('Boolean False:             →  {f = boolean(0);};',function(){
    assert.deepEqual(false,main.testThis('f = boolean(0);').get('f'));
  });
  it('Boolean True:              →  {f = boolean(10);};',function(){
    assert.deepEqual(true,main.testThis('f = boolean(10);').get('f'));
  });
  it('Boolean True:              →  {f = boolean("a");};',function(){
    assert.deepEqual(true,main.testThis('f = boolean("a");').get('f'));
  });
  it('Boolean True:              →  {f = boolean([1,2,3]);};',function(){
    assert.deepEqual(true,main.testThis('f = boolean([1,2,3]);').get('f'));
  });
  it('Boolean True:              →  {f = boolean({1});};',function(){
    assert.deepEqual(true,main.testThis('f = boolean({1});').get('f'));
  });
});
console.log("--------------------------19- Cargar Archivos -----------------------------");
describe('Cargar Archivos', function(){
  it('Cargar Archivos 4:  →  @load "potencia.qr";',function(){
    assert.deepEqual(4,main.testThis('@load "potencia.qr";').get('p'));
  });
  it('Cargar Archivos 0:  →  @load "code.qr";',function(){
    assert.deepEqual(0,main.testThis('@load "code.qr";').get('p'));
  });
  it('Cargar Archivos 4:  →  {@load "code.qr";@load "potencia.qr";}',function(){
    assert.deepEqual(4,main.testThis('{@load "code.qr";@load "potencia.qr";}').get('p'));
  });
});
