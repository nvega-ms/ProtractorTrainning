var LoginPage;
LoginPage = function () {

    this.get = function () {
        browser.driver.get('http://appint.fromdoppler.net/');
    };

    this.setUsername = function (username) {
            browser.driver.wait(function () {
                return browser.driver.findElement(by.id('UserName')).then(function(userNameInput){
                    userNameInput.sendKeys(username);
                    return true;
                })
            }
            , 10000);

    };

    this.setPassword = function (password) {
        browser.driver.wait(function(){
            return browser.driver.findElement(by.id('UserPass')).then(function(passwordInput){
                passwordInput.sendKeys(password);
                return true;
            })
        },10000);
    };

    this.clickLoginButton = function () {
        browser.driver.wait(function(){
            return browser.driver.findElement(by.id('login-btn')).then(function(loginButton){
                loginButton.click();
            });
        },10000);
    }
};
module.exports = LoginPage;

