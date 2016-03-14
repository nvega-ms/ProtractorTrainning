// conf.js
exports.config = {

    framework: 'jasmine2',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: { browserName: 'chrome' },

    specs : [ '*_spec.js' ],

    exclude : ['history_spec.js']


}