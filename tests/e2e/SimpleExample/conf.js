// conf.js
exports.config = {

    framework: 'jasmine2',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['spec.js'],

    capabilities: { browserName: 'chrome' },

    onPrepare: function() {
        browser.get('http://www.istockphoto.com/');
    }
}