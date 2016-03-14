// conf.js
exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: { browserName: 'chrome' },

    beforeLaunch : function()
    {
        console.log('Running beforeLunch function')
    },

    onPrepare : function()
    {
        console.log('Running OnPrepare function')
    },

    onComplete : function()
    {
        console.log('Running OnComplete function')
    },

    onCleanUp : function()
    {
        console.log('Running OnCleanUp function')
    },
}