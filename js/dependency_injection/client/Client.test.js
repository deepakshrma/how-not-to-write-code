const {ClientWithInjection, ClientWithoutInjection} = require('./Client')
const Service = require('./Service')

describe('DI', function() {
  describe('Client', function() {
    it('check it', function() {
        const cw = new ClientWithInjection(new Service())
        const co = new ClientWithoutInjection()
        expect(cw.greet()).toBe(co.greet())
    });
  });
});
