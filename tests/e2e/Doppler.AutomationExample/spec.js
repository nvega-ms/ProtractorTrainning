'use-strict';
var loginPage, draftPage,automationPage;

describe('From the Dopples homepage', function(){

    var params = browser.params;

    beforeEach(function() {
        loginPage = require('./nonangular_pageobjects/loginPage.po.js');
        draftPage = require('./nonangular_pageobjects/draftPage.po.js');
        automationPage = require('./angular_pageobjects/automationPage.po.js');

        //Saying that we are in a non-angular site
        isAngularSite(false);

        //Logging in
        loginPage.get();
        loginPage.loggingInUser(params.login.userName,params.login.password );

        //Going to Automation section
        draftPage.goToAutomation();

    });

    xit('go to Automation section', function(){

       isAngularSite(true);
       var url = params.automation.base + params.automation.initPage;
       expect(browser.getCurrentUrl()).toEqual(url);


    });

    xit('go to Create campaign section', function(){

        isAngularSite(true);
        automationPage.goToCreateCampaign();
        var url = params.automation.base + params.automation.taskPage;
        expect(browser.getCurrentUrl()).toEqual(url);

    });

    xit('create a automation task by day of the week', function(){
        //Saying that we are in a Angular page
        isAngularSite(true);

        //Going to Create Campaign windows
        automationPage.goToCreateCampaign();

         //Creating a scheduled task
        var taskPage = require('./angular_pageobjects/taskPage.po.js');
        taskPage.createScheduleDateTask();
        var scheduledTaskPage = require('./angular_pageobjects/scheduledTaskPage.po.js');

        //Choosing day of the week
        scheduledTaskPage.chooseDayOfWeekOption();
        scheduledTaskPage.chooseSpecificDayOfWeek(5);

    });

    it('create a automation task by day of the month', function(){
        //Saying that we are in a Angular page
        isAngularSite(true);

        //Going to Create Campaign windows
        automationPage.goToCreateCampaign();

        //Creating a scheduled task
        var taskPage = require('./angular_pageobjects/taskPage.po.js');
        taskPage.createScheduleDateTask();
        var scheduledTaskPage = require('./angular_pageobjects/scheduledTaskPage.po.js');

        //Choosing day of the month
        scheduledTaskPage.chooseDayOfMonthOption();
      //  scheduledTaskPage.chooseSpecificDayOfMonth(5);
        scheduledTaskPage.chooseDayOfTheMonthByText('7');



    });

    xit('create a automation task by day of the Year', function(){
        //Saying that we are in a Angular page
        isAngularSite(true);

        //Going to Create Campaign windows
        automationPage.goToCreateCampaign();

        //Creating a scheduled task
        var taskPage = require('./angular_pageobjects/taskPage.po.js');
        taskPage.createScheduleDateTask();
        var scheduledTaskPage = require('./angular_pageobjects/scheduledTaskPage.po.js');

        //Choosing day of the month
        scheduledTaskPage.chooseDayOfYearOption();
        scheduledTaskPage.chooseDayOfTheYearByText('Birthday');
        browser.sleep(10000);

    });



});
