const main = require('../bin/main.js');
const assert = require('chai').assert;
//const addition = require('../mainTest.js').addition;

describe('main', function(){
  it('Suma:a=2+2 >> a = 4',function(){
    assert.equal("{ a = 4 }",main.testThis("a = 2+2;"));
  });
});
