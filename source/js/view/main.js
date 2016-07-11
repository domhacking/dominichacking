var Ractive = require('../module');
var page        = require('page');

module.exports = function() {

  return new Ractive({

    el: document.querySelector('.main'),

    template: require('./main.html'),

    data: function(){
        return {flip: true}
    },

    computed: {
    },

    oninit: function() {
        this.on('enter', this.changeClass)
        this.setRouter();
    },
    
    onrender: function() {
    },

    changeClass: function(){
        console.log('clicked');
        this.toggle('flip');
    },

    setRouter: function(){
        var self = this;

        page('/', function () {
            self.set('view', 'home');
        });

        page('/projects', function () {
            self.set('view', 'projects');
        });

        page('/info', function () {
            self.set('view', 'info');
        });

        page({
            click: false,
            dispatch: true,
            hashbang: false,
        });
    }
  });
};
