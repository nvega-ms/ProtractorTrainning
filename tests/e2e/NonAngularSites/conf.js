exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome'
    },

    specs: ['spec.js'],

    params:
    {
        login : {
            userName:'csampedro+668@getcs.com',
            password:'1qaz2wsx'
        }
    },
    onPrepare: function() {
        browser.driver.ignoreSynchronization = true;
    },

    jasmineNodeOpts: {
        showColors: true
    }
};