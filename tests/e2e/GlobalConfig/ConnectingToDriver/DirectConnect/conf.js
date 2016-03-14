// conf.js
//ChromeDriver location is used to help find the chromedriver binary.
//This will be passed to the Selenium jar as the system property webdriver.chrome.driver.
// If null, Selenium will attempt to find ChromeDriver using PATH.

exports.config = {
    framework: 'jasmine2',

    seleniumServerJar: 'C:\\Users\\nvega\\Documents\\Selenium server standalone\\selenium-server-standalone-2.46.0.jar',

    specs: ['spec.js'],

    capabilities: {
        browserName : 'firefox',
    }
}