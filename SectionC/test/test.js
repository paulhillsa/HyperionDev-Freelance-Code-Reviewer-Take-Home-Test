const isbn13 = require('../sectionC.js')
const assert = require('assert')

//test to see if function is working
describe('isbn13', function() {
  // test say 'Valid' if it is a valid ISBN-13
  it('should return Valid if it is a valid ISBN-13', function() {
    assert.equal('Valid', isbn13('9780131495050'));
  });
  // test say 'Invalid' if it is not a valid ISBN-13
  it('should return Invalid if it is not a valid ISBN-13', function() {
    assert.equal('Invalid', isbn13('9780131495051'));
  });
  // test say 'Invalid' if it is not a valid ISBN-10
  it('should return Invalid if it is not a valid ISBN-10', function() {
    assert.equal('Invalid', isbn13('9780131498'));
  });
  // test should return ISBN-13 if it is a valid ISBN-10
  it('should return ISBN-13 if it is a valid ISBN-10', function() {
    assert.equal('9780205080052', isbn13('0205080057'));
  });
  // test should return ISBN-13 if it is a valid ISBN-10 with 'X' as last digit
  it('should return ISBN-13 if it is a valid ISBN-10', function() {
    assert.equal('9780074625422', isbn13('007462542X'));
  });
});
    
