/**
 * @module:   projects
 * @scss:     ./source/css/module/projects.scss
 * @html:     ./source/js/module/projects/projects.html
 */

var Module = require('../abstract-module');
var $ = require("jquery");
var ScrollMagic = require("scrollmagic");
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
var gsap = require("gsap");


module.exports = Module.extend({

  template: require('./projects.html'),

  data: require('../../../data/content.json'),

  onrender: function(){
		// init
		var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			// animate to second panel
			.to("#slideContainer", 1,   {x: "-33.3%"})	// move in to first panel
			.to("#slideContainer", 1,   {x: "-66.6%"})
            .to("#slideContainer", 1,   {y: "-100%"})
            .to("#slideContainer", 1,   {y: "-100%", x: "-33.3%"})
            .to("#slideContainer", 1,   {y: "-100%", x: "-66.3%"})


		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "500%"
			})
			.setPin("#pinContainer")
			.setTween(wipeAnimation)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
        }
  // var pinani = new TimelineMax()
  //   .add(TweenMax.to("#wipe", 1, {transform: "translateY(0)"}))
  //   .add(TweenMax.to("#second-wipe", 1, {transform: "translateY(0)"}))
  //   .add(TweenMax.to("#slide", 1, {top: "0%", ease: Bounce.easeOut, delay: 0.2}))
  //   .add([
  //       TweenMax.to("#slide h3:first-child", 0.2, {autoAlpha: 0}),
  //       TweenMax.from("#slide h3:last-child", 0.2, {autoAlpha: 0})
  //   ])
  //   .add([
  //       TweenMax.to("#slide", 0.3, {backgroundColor: "yellow"}),
  //       TweenMax.to("#slide h3:last-child", 0.3, {color: "blue"})
  //   ])
  //   .add([
  //       TweenMax.to("#slide", 0.3, {backgroundColor: "green"}),
  //       TweenMax.to("#slide h3:last-child", 0.3, {color: "red"})
  //   ])
  //   .add([
  //       TweenMax.to("#slide", 0.3, {backgroundColor: "red"}),
  //       TweenMax.to("#slide h3:last-child", 0.3, {color: "white"})
  //   ])
  //   .add([
  //       TweenMax.to("#slide", 0.3, {backgroundColor: "#c7e1ff"}),
  //       TweenMax.to("#slide h3:last-child", 0.3, {color: "black"})
  //   ])
  //   .add(TweenMax.to("#slide-dos", 1, {transform: "translateX(0)"}))
  //   .add(TweenMax.from("#unpin", .5, {top: "100%"}));




});
