
// Завдання 1
/*
describe("describe", function() {
    it('test', function() {
  
    });
  })
 */
let assert = chai.assert;
let expect = chai.expect
  describe("validateEmail", function(){
    describe('valid string', function(){
        it ('not an empty string', function(){
            assert.equal(validateEmail(222),false, 'number error')
            assert.equal(validateEmail(true),false, 'boolean error')
            assert.equal(validateEmail({}),false, 'object error')
        });
        it ('not an empty string', function(){
            assert.equal(validateEmail('    '),false);
        });
        it ('length < 5', function(){
            assert.equal(validateEmail('e@g.'), false);
            assert.equal(validateEmail('e@g.c'), true);
        });
        it('@ single character', function(){
            assert.equal(validateEmail('@'), false);
            
        })
    })
    describe('valid data', function(){
        it('Dont\'t have the @ or @ the first character', function(){
            assert.isFalse(validateEmail('emailgmail.com'), 'don\'t have the @');
            assert.isFalse(validateEmail('@emailgmail.com'), '@ the first character');
        })
    })
  })