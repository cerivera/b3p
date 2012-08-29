/**
 * Handles the load ordering of JS files.
 */

define([
    'order!libs/jquery/jquery.min',
    'order!libs/underscore/underscore-dev',
    'order!libs/backbone/backbone-dev',
    'order!libs/backbone/backbone-ext',
    'order!libs/bootstrap/bootstrap-dev',
    'order!libs/bootstrap/bootstrap-dropdown',
    'order!libs/bootstrap/bootstrap-button',
    'order!libs/bootstrap/bootstrap-modal'
    ],
    function(){
        return {
            Backbone: Backbone.noConflict(),
            _: _.noConflict()
        };
});