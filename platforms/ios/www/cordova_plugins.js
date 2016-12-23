cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "phonegap-plugin-push.PushNotification",
        "file": "plugins/phonegap-plugin-push/www/push.js",
        "pluginId": "phonegap-plugin-push",
        "clobbers": [
            "PushNotification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-custom-config": "3.1.2",
    "cordova-plugin-dialogs": "1.3.1",
    "cordova-plugin-inappbrowser": "1.5.0",
<<<<<<< HEAD
    "cordova-plugin-whitelist": "1.3.0",
=======
    "cordova-custom-config": "3.1.2",
>>>>>>> 00f2a7a3d122c25ca504e267eb809d2c7731ebec
    "phonegap-plugin-push": "1.9.2"
};
// BOTTOM OF METADATA
});