
var AngularHomepage = require('./AngularHomepage.js');


describe('Page object example', function() {

    it('should use the page object defined', function() {

        var angularHomepage = new AngularHomepage();

        angularHomepage.get();

        angularHomepage.setName('Julie');

        expect(angularHomepage.getGreeting()).toEqual('Hello Julie!');
    });
});
