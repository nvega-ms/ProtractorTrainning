// conf.js
exports.config = {
    framework: 'jasmine2',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['spec.js'],

    capabilities: { browserName: 'chrome' },

    params:
    {
        sum : {
            first: 1,
            second: 2,
            result: 3
        }
    }
}