// conf.js
// If no other method of starting Selenium Server is found,
// this will default to node_modules/protractor/selenium/selenium-server...

exports.config = {
    framework: 'jasmine2',

    specs: ['spec.js'],

    capabilities: { browserName: 'chrome' }
}