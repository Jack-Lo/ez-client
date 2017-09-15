var assert = require('assert');

describe('Test', function() {
  let name = 'Jack'

  describe('#greeting', function() {
    it(`passed`, function() {
      assert.equal(true, name === 'Jack')
    })
  })
})