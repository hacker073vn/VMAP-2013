//app.js

var Ti;
// All libraries
Ti.include(
	'cs/cs.js',
	'cs/ui.js',
	'cs/datetime.js',
    'cs/EventGarbageCollection.js'
);




var win = Ti.UI.createWindow({
        backgroundColor:'white',
        navBarHidden:false,
        url:'dashboard.js',
        title:'Màn hình chính'
    });
win.open();








