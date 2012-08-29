/**
 * Define aliases for common modules so that
 * we don't have to type the entire path in every file.
 */
require.config({
    baseUrl:'js/',
    paths: {
        loader: 'libs/backbone/loader',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        text: 'libs/require/text',
        order: 'libs/require/order'
    }
});

/**
 * Kick off the application by rendering our base panel view, and
 * initializing and starting the Router (aka dispatcher).
 */
require(['backbone', 'router', 'views/panel'], function(Backbone, Router, PanelView){
    new PanelView();
    new Router;

    // This is the engine to using the 'back' button throughout the app.
    Backbone.history.start();
});