var LoginPage = require('./loginpage.po.js');

describe('From the Dopples homepage', function(){
    var params = browser.params;

    it('the user should be able to loging in', function() {

        var loginPage = new LoginPage();
        loginPage.get();
        loginPage.setUsername(params.login.userName);
        loginPage.setPassword(params.login.password);
        loginPage.clickLoginButton();

    })

});