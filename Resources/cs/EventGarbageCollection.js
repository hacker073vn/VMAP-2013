var globals = {};

var EventGarbageCollection = function ( context ) {
    var instance = this;
    this.collection = [];
    this.context = context;
    this.context.addEventListener('close', function ( ) {
        instance.empty();
    });
};
EventGarbageCollection.prototype = {
    collect : function ( evt, method ) {
        this.collection.push([evt, method]);
    },
    addEventListener : function ( evt, method ) {
        Ti.App.addEventListener(evt, method);
        this.collect(evt, method);
    },
    empty : function ( ) {
        for ( var i = 0, len = this.collection.length; i < len; i++ ) {
            Ti.App.removeEventListener(
                this.collection[i][0], 
                this.collection[i][1]
            );
        }
        this.collection = [];
    }
};



globals.EventGarbageCollection = EventGarbageCollection;