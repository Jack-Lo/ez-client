var expect = chai.expect

describe('Index', function() {
  let name = 'Jack'
  let index = new Index(name)

  describe('#实例化', function() {
    it(`实例构造器指向Index类`, function() {
      expect(index.constructor === Index).to.be.equal(true)
    })

    it(`实例的公共属性name等于${name}`, function() {
      expect(index.name === name).to.be.equal(true);
    })

    it(`实例的公共属性greeting等于${'Hello, ' + name + '!'}`, function() {
      expect(index.greeting === 'Hello, ' + name + '!').to.be.equal(true);
    })

    it(`实例的公共方法greet调用正常`, function(done) {
      try {
        index.greet()
        done()
      } catch (err) {
        done(err)
      }
    })
  })
})