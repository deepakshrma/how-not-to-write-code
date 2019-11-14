/* jest.mock('./Service', () => ({
  __esModule: true, // this property makes it work
  // ...jest.requireActual('./Client'),
  default: function () {
    this.getName = () => "This is service"
  }
  // Service: function () {
  //   this.getName = () => "This is service"
  // },
})); */

jest.mock('./Service', () => (function () {
  this.getName = () => "something else"
}));
const {ClientWithoutInjection} = require('./Client')
describe('DI', function() {
  describe('Client', function() {
    it('check it', function() {
        const co = new ClientWithoutInjection()
        expect(co.greet()).toBe("Hello something else")
    });
  });
});
