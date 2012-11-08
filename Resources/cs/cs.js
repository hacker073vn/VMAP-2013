var Lhs = {
	android: {
		menu: {}	
	},
	datetime: {},
    ui: {},
    __isLargeScreen: undefined,
    __isAndroid: undefined,
    navGroup: undefined
};

(function() {
	Lhs.extend = function(obj) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    for (var i = 0; i < args.length; i++) {
	    	var source = args[i];
	      	for (var prop in source) {
	        	if (source[prop] !== void 0) obj[prop] = source[prop];
	      	}
	    }
	    return obj;
	};
	
	Lhs.isLargeScreen = function() {
		if (Lhs.__isLargeScreen === undefined) {
			Lhs.__isLargeScreen = (Ti.Platform.displayCaps.platformWidth >= 600);
		}
		return Lhs.__isLargeScreen;
	};
	
	Lhs.isAndroid = function() {
		if (Lhs.__isAndroid === undefined) {
			Lhs.__isAndroid = (Ti.Platform.osname == 'android');
		}
		return Lhs.__isAndroid;
	}
	
	Lhs.cleanSpecialChars = function(str) {
  		if (str == null) {
    		return '';
  		}
  		if (typeof str === 'string') {
    		return  str
      			.replace(/&quot;/g,'"')
      			.replace(/\&amp\;/g,"&")
      			.replace(/&lt;/g,"<")
      			.replace(/&gt;/g,">")
      			.replace(/&#039;/g, "'");
  		}
  		return '';
	};
	
	Lhs.android.menu = {
		data: [],
		init: function(params) {
			var activity = params.win.activity; 
	        activity.onCreateOptionsMenu = function (e) {
	          	var optionsmenu = e.menu;
	          	for (k = 0; k < params.buttons.length; k++) {
	            	Lhs.android.menu.data[k] = optionsmenu.add({
	              		title: params.buttons[k].title
	            	});
	            	Lhs.android.menu.data[k].addEventListener("click", params.buttons[k].clickevent);
	          	}
	        };
		}
	};
})();