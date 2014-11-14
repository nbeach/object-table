function SettingService() {

    this.getIfDefined = function(valueFunction, defaultValue)
    {
        var setting = null;

        //Catch the exception if the setting isn't defined
        try {
            setting = valueFunction();
        } catch(e) {
            //Do nothing
        }

        if(typeof setting !== 'undefined' && setting !== null) return setting;
        else return defaultValue;
    };

}

angular
    .module('objectTable')
    .factory("SettingService", function() {
        return new SettingService();
    });