/**
* @module:   openingPage
* @scss:     ./source/css/module/openingPage.scss
* @html:     ./source/js/module/openingPage/openingPage.html
*/
var malarkey = require('malarkey');

var Module = require('../abstract-module');

module.exports = Module.extend({

    template: require('./openingPage.html'),

    onrender: function(){
        var elem = document.querySelectorAll('.content__text--name')[0];
        var opts = {
            loop: false,
            typeSpeed: 100
        };

        var m = malarkey(elem, opts).type("DOMINIC HACKING").pause(500);

        var elem = document.querySelectorAll('.content__text--coder')[0];
        var opts = {
            loop: false,
            typeSpeed: 100,
            pauseDelay: 2800,
        };
        var m = malarkey(elem, opts).pause().type("coder");
    }
});
