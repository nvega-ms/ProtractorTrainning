// conf.js
exports.config = {
    framework: 'jasmine2',

    seleniumServerJar: '../selenium-server-standalone-2.47.1.jar',

    /**
     * Additional command line options to pass to selenium.
     * Ignored if seleniumServerJar is null.
     */
    seleniumArgs: [
        '-Dwebdriver.ie.driver=IEDriverServer.exe',
        'firefox_binary=C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe'
    ],

    // SI no definis -suite en lines de comando se corre esta
    specs: ['spec.js'],

    multiCapabilities: [
        {
            'browserName': 'chrome'
        },
        {
            'browserName' : 'firefox'
        },
        {
            'browserName': 'internet explorer'
        }
    ],

    // si se invoca a --suite, spec no es llamado
    suites: {
        operations: 'operations_spec.js',
        history: 'history_spec.js',
        all: '*spec.js'
    }
}