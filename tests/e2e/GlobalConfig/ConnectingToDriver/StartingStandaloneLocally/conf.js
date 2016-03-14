// conf.js
exports.config = {
    framework: 'jasmine2',

    // Starting the standalone Selenium Server locally

    seleniumServerJar: 'selenium-server-standalone-2.46.0.jar',

  //  seleniumPort:8080,

    //Optional

    seleniumArgs: ['-ensureCleanSession = true'],

    specs: ['spec.js'],

    capabilities: { browserName: 'chrome' }
}