/**
 * @module:   nav
 * @scss:     ./source/css/module/nav.scss
 * @html:     ./source/js/module/nav/nav.html
 */


var Module = require('../abstract-module');
var page 	= require('page');

module.exports = Module.extend({

  template: require('./nav.html'),

  data: require('../../../data/content.json'),


  oninit: function(){
      this.on('goToHome', this.goHome);
      this.on('goToProjects', this.goProjects);
      this.on('goToInfo', this.goInfo);
      this.on('goToAbout', this.goAbout);
    //   this.on('goToInfo', this.goInfo);
  },

  goHome: function(){
      page('/');
  },

  goProjects: function(){
      page('/projects');
      console.log('proj');
  },

  goInfo: function(){
      page('/info');
      console.log('info');
  },

  goAbout: function(){
      page('/about');
      console.log('info');
  },

});
