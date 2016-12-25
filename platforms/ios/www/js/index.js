var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('resume', this.onResume, false);
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //app.receivedEvent('deviceready');
        RunApplication();
        window.open = cordova.InAppBrowser.open;
        app.setupPush();
    },
    onResume: function() {
        //app.receivedEvent('resume');
        RunApplication();
        //window.open = cordova.InAppBrowser.open;
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');
        //
        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');
        //
        // console.log('Received Event: ' + id);
    },
    setupPush: function() {
        console.log('calling push init');
        var push = PushNotification.init({
            "android": {
                "senderID": "﻿80173982660"
            },
            "browser": {},
            "ios": {
                "sound": true,
                "vibration": true,
                "badge": true
            },
            "windows": {}
        });
        console.log('after init');

        push.on('registration', function(data) {
            console.log('registration event: ' + data.registrationId);

            //var oldRegId = localStorage.getItem('registrationId');
            //if (oldRegId !== data.registrationId) {
            // Save new registration ID
            //localStorage.setItem('registrationId', data.registrationId);
            // Post registrationId to your app server as the value has changed

            var u = "https://www.rating-system.com/webservice/RatingService.svc/SubscribeToNotification";
            $$.ajax({
                type: "POST", url: u, data: "{\"Company\":\"1\",\"Type\":\"APNS\",\"Endpoint\":\"" + data.registrationId + "\"}", contentType: "application/json; charset=utf-8", dataType: "json",
                success: function (data) {
                    console.log(data.MessageText);
                },
                error: function (error) {
                    console.log('Error:'+JSON.stringify(error));
                }
            });
            //}

            // var parentElement = document.getElementById('registration');
            // var listeningElement = parentElement.querySelector('.waiting');
            // var receivedElement = parentElement.querySelector('.received');
            //
            // listeningElement.setAttribute('style', 'display:none;');
            // receivedElement.setAttribute('style', 'display:block;');
        });

        push.on('error', function(e) {
            console.log("push error = " + e.message);
        });

        push.on('notification', function(data) {
            navigator.notification.alert(
                data.message,         // message
                null,                 // callback
                data.title,           // title
                'Ok'                  // buttonName
            );
        });
    }
};
