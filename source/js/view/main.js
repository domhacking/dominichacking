var Ractive = require('../module');

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
    },

    onrender: function() {
    },

    changeClass: function(){
        console.log('clicked');
        this.toggle('flip');
    },
  });
};
