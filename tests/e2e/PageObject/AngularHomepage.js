var AngularHomepage = function() {
    var self = this;
    var nameInput = element(by.model('yourName'));
    var greeting = element(by.binding('yourName'));

    self.get = function() {
        browser.get('http://www.angularjs.org');
    };

    self.setName = function(name) {
        nameInput.sendKeys(name);
    };

    self.getGreeting = function() {
        return greeting.getText();
    };
};
module.exports = AngularHomepage;