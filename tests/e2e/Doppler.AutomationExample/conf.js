exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome'
    },

    specs: ['spec.js'],

   onPrepare: function() {
       global.isAngularSite = function(flag){
           browser.ignoreSynchronization = !flag;
       };
    },

    rootElement: 'div.ng-scope',

    params:
    {
        login :
        {
            userName:'csampedro+668@getcs.com',
            password:'1qaz2wsx'
        },
        draft:
        {
            base : 'http://appint.fromdoppler.net',
            url : '/Campaigns/Draft',
        },
        automation :
        {
            base : 'http://appint.fromdoppler.net',
            initPage : '/Automation/Automation/AutomationApp',
            taskPage : '/Automation/Task/',
        }
    },



    jasmineNodeOpts: {
        showColors: true
    }
};
