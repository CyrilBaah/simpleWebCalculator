const sinon = require("sinon");
const sinonTest = require("sinon-test");
const test = sinonTest(sinon);
 assert = require("assert");

 const Calculator = require('../controller/calculator')

 describe('Calculator', ()=> {
    let calculator, callbackSpy, clock;

    before(function () {
        calculator = new Calculator(4, 5);
        clock = sinon.useFakeTimers();
        callbackSpy = sinon.spy();
      });    

      it("should emit the event before the callback", function (done) {
        calculator.product(callbackSpy);
        clock.tick(100);
        assert.equal(callbackSpy.called, true);
        done();
      });
    
      after(function () {
        clock.restore();
      });
})