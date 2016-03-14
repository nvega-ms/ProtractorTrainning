exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome'
    },

    specs: ['spec.js'],
    
    onPrepare: function() {
        browser.driver.manage().window().setSize(1600, 800);
    },

    jasmineNodeOpts: {
        showColors: true
    }
};