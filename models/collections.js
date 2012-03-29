var Collections = {};
if (typeof exports !== 'undefined') {
    Collections = exports;

    _ = require('underscore')._;
    jQuery = require('jquery');
    XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    jQuery.support.cors = true;
    jQuery.ajaxSettings.xhr = function () {
        return new XMLHttpRequest;
    };
    Backbone = require('backbone');
    Backbone.setDomLibrary(jQuery);
//    Backbone.sync = function(method, model) {
//        console.log(method + ": " + model.url);
//    };
}

Collections.DelayedCollection = Backbone.Collection.extend({
    // realistically, this fetch call would go out to some external endpoint (database, cache, service, etc)
    // for this demo, it just uses setTimeout to simulate an asynchronous request that takes some amount of time
    fetch: function() {
        var self = this;
        this.each(function(model) {
            if (model.get('delay')) {
                setTimeout(function() { self.updateModel(model); }, model.get('delay'));
            } else {
                self.updateModel(model);
            }
        });
    },

    updateModel: function(model) {
        model.set({message: 'fetched after ' + this.get('delay') + ' ms', isFetched: true});
    }
});

Collections.Headlines = Backbone.Collection.extend({
    parse: function (response) {
        console.log("Parsing headlines response.");
        response.headlines[0].active = true;
        return response.headlines;
    },

    // realistically, this fetch call would go out to some external endpoint (database, cache, service, etc)
    // for this demo, it just uses setTimeout to simulate an asynchronous request that takes some amount of time
//    fetch: function() {
//        console.log("Fetching headlines:" + this.url);
//        var self = this;
//        this.each(function(model) {
//            console.log("Fetching headline:" + headline);
//            self.updateModel(model);
//        });
//    },

    updateModel: function(model) {
        // TODO: call API here
        model.set({headline: 'Example fetched headline', web_url: 'http://games.espn.go.com'});
    }
});