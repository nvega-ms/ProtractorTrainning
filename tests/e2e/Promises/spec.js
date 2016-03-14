
describe('Protractor trainning app', function() {

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    xit('should log the title ONLY when you use promises', function() {

        element(by.tagName('h4')).getText().then(function(title){

            console.log("Table name (Using then): ", title);
        })

        expect(true).toBe(true);

    });

    xit('should not log the title if you do not use promises', function() {
        var tableName =  element(by.tagName('h4')).getText();

        console.log("Table name (Using getText() directly): ", tableName);

        expect(true).toBe(true);

    });

    xit('should not allow element() as promise', function() {

        expect(element(by.tagName('h4'))).not.toBe(null)

    });

    xit("should displays the name of the table", function() {

        var tableNameElement = element(by.tagName('h4'));

        expect(tableNameElement.getText()).toContain("History");

    });

    xit('should not allow element() as promise', function() {

        if(element(by.tagName('h4')).isDisplayed()) {
            console.log("Element is displayed");
        } else {
            console.log("Element is not displayed");
        }
    });

    it("for new editor", function() {
        browser.get('http://localhost:3000/?IdCampaign=1');

         element.all(by.repeater('component in rootComponent.children track by component.uid')).count().then(function(num){
            console.log('Count 1: ', num);
        });

        browser.actions().dragAndDrop(element(by.id('draggable-component-title')), element(by.tagName('canvas-background'))).perform();
        console.log('dRAGEE');
        browser.actions().dragAndDrop(element(by.id('draggable-component-title')), element(by.tagName('canvas-background'))).perform();browser.actions().dragAndDrop(element(by.id('draggable-component-title')), element(by.tagName('canvas-background'))).perform();
        console.log('dRAGEE');
        browser.actions().dragAndDrop(element(by.id('draggable-component-title')), element(by.tagName('canvas-background'))).perform();
        console.log('dRAGEE');
        browser.actions().dragAndDrop(element(by.id('draggable-component-title')), element(by.tagName('canvas-background'))).perform();
        console.log('dRAGEE');
        browser.actions().dragAndDrop(element(by.id('draggable-component-title')), element(by.tagName('canvas-background'))).perform();
        console.log('dRAGEE');
        browser.actions().dragAndDrop(element(by.id('draggable-component-title')), element(by.tagName('canvas-background'))).perform();

        element.all(by.repeater('component in rootComponent.children track by component.uid')).count().then(function(num){
            console.log('Count 1: ', num);
        });


    });



});