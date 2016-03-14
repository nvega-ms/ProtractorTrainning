// conf.js
exports.config = {

    framework: 'jasmine2',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: { browserName: 'chrome' },

    specs : ['history_spec.js'],

    suites: {
        operations: 'operations_spec.js',
        history: 'history_spec.js',
        all: '*_spec.js'
    }

}