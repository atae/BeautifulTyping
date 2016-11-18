/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _animejs = __webpack_require__(1);
	
	var _animejs2 = _interopRequireDefault(_animejs);
	
	var _game = __webpack_require__(2);
	
	var _animation = __webpack_require__(3);
	
	var _animation2 = _interopRequireDefault(_animation);
	
	var _levelRequire = __webpack_require__(4);
	
	var _titleScreen = __webpack_require__(13);
	
	var _titleScreen2 = _interopRequireDefault(_titleScreen);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import {getLevel}from './javascript/level_handler';
	
	document.addEventListener("DOMContentLoaded", function () {
	  (0, _titleScreen2.default)();
	  //ToggleSound
	  // debugger
	  var options = {
	    muteSoundOption: false,
	    muteMusicOption: false
	  };
	  //get level Name
	
	
	  var Start = function Start(e) {}
	  // debugger
	  // if (e.key == "1" && gameStarted === false) {
	  //   document.removeEventListener('keydown', Start)
	  //   gameStarted = true;
	  // // nextLevel = getLevel('longTestLvl');
	  // startLevel(currentLevel);
	  // }
	
	
	  // $('.soundOption').on('click', () => {
	  //   if ($('.soundOption').text() === " Sound: Off ") {
	  //   $('.soundOption').replaceWith('<li class="soundOption"> Sound: On </li>')
	  // }
	  // })
	
	
	  ;document.addEventListener("keydown", Start);
	
	  (0, _animation2.default)();
	});
	
	//Soundtrack
	// Results Page: Shogun Beatz

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Anime v1.1.1
	 * http://anime-js.com
	 * JavaScript animation engine
	 * Copyright (c) 2016 Julian Garnier
	 * http://juliangarnier.com
	 * Released under the MIT license
	 */
	
	(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === 'object' && module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.anime = factory();
	  }
	}(this, function () {
	
	  var version = '1.1.1';
	
	  // Defaults
	
	  var defaultSettings = {
	    duration: 1000,
	    delay: 0,
	    loop: false,
	    autoplay: true,
	    direction: 'normal',
	    easing: 'easeOutElastic',
	    elasticity: 400,
	    round: false,
	    begin: undefined,
	    update: undefined,
	    complete: undefined
	  }
	
	  // Transforms
	
	  var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skewX', 'skewY'];
	  var transform, transformStr = 'transform';
	
	  // Utils
	
	  var is = {
	    arr: function(a) { return Array.isArray(a) },
	    obj: function(a) { return Object.prototype.toString.call(a).indexOf('Object') > -1 },
	    svg: function(a) { return a instanceof SVGElement },
	    dom: function(a) { return a.nodeType || is.svg(a) },
	    num: function(a) { return !isNaN(parseInt(a)) },
	    str: function(a) { return typeof a === 'string' },
	    fnc: function(a) { return typeof a === 'function' },
	    und: function(a) { return typeof a === 'undefined' },
	    nul: function(a) { return typeof a === 'null' },
	    hex: function(a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a) },
	    rgb: function(a) { return /^rgb/.test(a) },
	    hsl: function(a) { return /^hsl/.test(a) },
	    col: function(a) { return (is.hex(a) || is.rgb(a) || is.hsl(a)) }
	  }
	
	  // Easings functions adapted from http://jqueryui.com/
	
	  var easings = (function() {
	    var eases = {};
	    var names = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];
	    var functions = {
	      Sine: function(t) { return 1 - Math.cos( t * Math.PI / 2 ); },
	      Circ: function(t) { return 1 - Math.sqrt( 1 - t * t ); },
	      Elastic: function(t, m) {
	        if( t === 0 || t === 1 ) return t;
	        var p = (1 - Math.min(m, 998) / 1000), st = t / 1, st1 = st - 1, s = p / ( 2 * Math.PI ) * Math.asin( 1 );
	        return -( Math.pow( 2, 10 * st1 ) * Math.sin( ( st1 - s ) * ( 2 * Math.PI ) / p ) );
	      },
	      Back: function(t) { return t * t * ( 3 * t - 2 ); },
	      Bounce: function(t) {
	        var pow2, bounce = 4;
	        while ( t < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
	        return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - t, 2 );
	      }
	    }
	    names.forEach(function(name, i) {
	      functions[name] = function(t) {
	        return Math.pow( t, i + 2 );
	      }
	    });
	    Object.keys(functions).forEach(function(name) {
	      var easeIn = functions[name];
	      eases['easeIn' + name] = easeIn;
	      eases['easeOut' + name] = function(t, m) { return 1 - easeIn(1 - t, m); };
	      eases['easeInOut' + name] = function(t, m) { return t < 0.5 ? easeIn(t * 2, m) / 2 : 1 - easeIn(t * -2 + 2, m) / 2; };
	      eases['easeOutIn' + name] = function(t, m) { return t < 0.5 ? (1 - easeIn(1 - 2 * t, m)) / 2 : (easeIn(t * 2 - 1, m) + 1) / 2; };
	    });
	    eases.linear = function(t) { return t; };
	    return eases;
	  })();
	
	  // Strings
	
	  var numberToString = function(val) {
	    return (is.str(val)) ? val : val + '';
	  }
	
	  var stringToHyphens = function(str) {
	    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	  }
	
	  var selectString = function(str) {
	    if (is.col(str)) return false;
	    try {
	      var nodes = document.querySelectorAll(str);
	      return nodes;
	    } catch(e) {
	      return false;
	    }
	  }
	
	  // Numbers
	
	  var random = function(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	  }
	
	  // Arrays
	
	  var flattenArray = function(arr) {
	    return arr.reduce(function(a, b) {
	      return a.concat(is.arr(b) ? flattenArray(b) : b);
	    }, []);
	  }
	
	  var toArray = function(o) {
	    if (is.arr(o)) return o;
	    if (is.str(o)) o = selectString(o) || o;
	    if (o instanceof NodeList || o instanceof HTMLCollection) return [].slice.call(o);
	    return [o];
	  }
	
	  var arrayContains = function(arr, val) {
	    return arr.some(function(a) { return a === val; });
	  }
	
	  var groupArrayByProps = function(arr, propsArr) {
	    var groups = {};
	    arr.forEach(function(o) {
	      var group = JSON.stringify(propsArr.map(function(p) { return o[p]; }));
	      groups[group] = groups[group] || [];
	      groups[group].push(o);
	    });
	    return Object.keys(groups).map(function(group) {
	      return groups[group];
	    });
	  }
	
	  var removeArrayDuplicates = function(arr) {
	    return arr.filter(function(item, pos, self) {
	      return self.indexOf(item) === pos;
	    });
	  }
	
	  // Objects
	
	  var cloneObject = function(o) {
	    var newObject = {};
	    for (var p in o) newObject[p] = o[p];
	    return newObject;
	  }
	
	  var mergeObjects = function(o1, o2) {
	    for (var p in o2) o1[p] = !is.und(o1[p]) ? o1[p] : o2[p];
	    return o1;
	  }
	
	  // Colors
	
	  var hexToRgb = function(hex) {
	    var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	    var hex = hex.replace(rgx, function(m, r, g, b) { return r + r + g + g + b + b; });
	    var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	    var r = parseInt(rgb[1], 16);
	    var g = parseInt(rgb[2], 16);
	    var b = parseInt(rgb[3], 16);
	    return 'rgb(' + r + ',' + g + ',' + b + ')';
	  }
	
	  var hslToRgb = function(hsl) {
	    var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hsl);
	    var h = parseInt(hsl[1]) / 360;
	    var s = parseInt(hsl[2]) / 100;
	    var l = parseInt(hsl[3]) / 100;
	    var hue2rgb = function(p, q, t) {
	      if (t < 0) t += 1;
	      if (t > 1) t -= 1;
	      if (t < 1/6) return p + (q - p) * 6 * t;
	      if (t < 1/2) return q;
	      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
	      return p;
	    }
	    var r, g, b;
	    if (s == 0) {
	      r = g = b = l;
	    } else {
	      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	      var p = 2 * l - q;
	      r = hue2rgb(p, q, h + 1/3);
	      g = hue2rgb(p, q, h);
	      b = hue2rgb(p, q, h - 1/3);
	    }
	    return 'rgb(' + r * 255 + ',' + g * 255 + ',' + b * 255 + ')';
	  }
	
	  var colorToRgb = function(val) {
	    if (is.rgb(val)) return val;
	    if (is.hex(val)) return hexToRgb(val);
	    if (is.hsl(val)) return hslToRgb(val);
	  }
	
	  // Units
	
	  var getUnit = function(val) {
	    return /([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(val)[2];
	  }
	
	  var addDefaultTransformUnit = function(prop, val, intialVal) {
	    if (getUnit(val)) return val;
	    if (prop.indexOf('translate') > -1) return getUnit(intialVal) ? val + getUnit(intialVal) : val + 'px';
	    if (prop.indexOf('rotate') > -1 || prop.indexOf('skew') > -1) return val + 'deg';
	    return val;
	  }
	
	  // Values
	
	  var getCSSValue = function(el, prop) {
	    // First check if prop is a valid CSS property
	    if (prop in el.style) {
	      // Then return the property value or fallback to '0' when getPropertyValue fails
	      return getComputedStyle(el).getPropertyValue(stringToHyphens(prop)) || '0';
	    }
	  }
	
	  var getTransformValue = function(el, prop) {
	    var defaultVal = prop.indexOf('scale') > -1 ? 1 : 0;
	    var str = el.style.transform;
	    if (!str) return defaultVal;
	    var rgx = /(\w+)\((.+?)\)/g;
	    var match = [];
	    var props = [];
	    var values = [];
	    while (match = rgx.exec(str)) {
	      props.push(match[1]);
	      values.push(match[2]);
	    }
	    var val = values.filter(function(f, i) { return props[i] === prop; });
	    return val.length ? val[0] : defaultVal;
	  }
	
	  var getAnimationType = function(el, prop) {
	    if ( is.dom(el) && arrayContains(validTransforms, prop)) return 'transform';
	    if ( is.dom(el) && (el.getAttribute(prop) || (is.svg(el) && el[prop]))) return 'attribute';
	    if ( is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) return 'css';
	    if (!is.nul(el[prop]) && !is.und(el[prop])) return 'object';
	  }
	
	  var getInitialTargetValue = function(target, prop) {
	    switch (getAnimationType(target, prop)) {
	      case 'transform': return getTransformValue(target, prop);
	      case 'css': return getCSSValue(target, prop);
	      case 'attribute': return target.getAttribute(prop);
	    }
	    return target[prop] || 0;
	  }
	
	  var getValidValue = function(values, val, originalCSS) {
	    if (is.col(val)) return colorToRgb(val);
	    if (getUnit(val)) return val;
	    var unit = getUnit(values.to) ? getUnit(values.to) : getUnit(values.from);
	    if (!unit && originalCSS) unit = getUnit(originalCSS);
	    return unit ? val + unit : val;
	  }
	
	  var decomposeValue = function(val) {
	    var rgx = /-?\d*\.?\d+/g;
	    return {
	      original: val,
	      numbers: numberToString(val).match(rgx) ? numberToString(val).match(rgx).map(Number) : [0],
	      strings: numberToString(val).split(rgx)
	    }
	  }
	
	  var recomposeValue = function(numbers, strings, initialStrings) {
	    return strings.reduce(function(a, b, i) {
	      var b = (b ? b : initialStrings[i - 1]);
	      return a + numbers[i - 1] + b;
	    });
	  }
	
	  // Animatables
	
	  var getAnimatables = function(targets) {
	    var targets = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
	    return targets.map(function(t, i) {
	      return { target: t, id: i };
	    });
	  }
	
	  // Properties
	
	  var getProperties = function(params, settings) {
	    var props = [];
	    for (var p in params) {
	      if (!defaultSettings.hasOwnProperty(p) && p !== 'targets') {
	        var prop = is.obj(params[p]) ? cloneObject(params[p]) : {value: params[p]};
	        prop.name = p;
	        props.push(mergeObjects(prop, settings));
	      }
	    }
	    return props;
	  }
	
	  var getPropertiesValues = function(target, prop, value, i) {
	    var values = toArray( is.fnc(value) ? value(target, i) : value);
	    return {
	      from: (values.length > 1) ? values[0] : getInitialTargetValue(target, prop),
	      to: (values.length > 1) ? values[1] : values[0]
	    }
	  }
	
	  // Tweens
	
	  var getTweenValues = function(prop, values, type, target) {
	    var valid = {};
	    if (type === 'transform') {
	      valid.from = prop + '(' + addDefaultTransformUnit(prop, values.from, values.to) + ')';
	      valid.to = prop + '(' + addDefaultTransformUnit(prop, values.to) + ')';
	    } else {
	      var originalCSS = (type === 'css') ? getCSSValue(target, prop) : undefined;
	      valid.from = getValidValue(values, values.from, originalCSS);
	      valid.to = getValidValue(values, values.to, originalCSS);
	    }
	    return { from: decomposeValue(valid.from), to: decomposeValue(valid.to) };
	  }
	
	  var getTweensProps = function(animatables, props) {
	    var tweensProps = [];
	    animatables.forEach(function(animatable, i) {
	      var target = animatable.target;
	      return props.forEach(function(prop) {
	        var animType = getAnimationType(target, prop.name);
	        if (animType) {
	          var values = getPropertiesValues(target, prop.name, prop.value, i);
	          var tween = cloneObject(prop);
	          tween.animatables = animatable;
	          tween.type = animType;
	          tween.from = getTweenValues(prop.name, values, tween.type, target).from;
	          tween.to = getTweenValues(prop.name, values, tween.type, target).to;
	          tween.round = (is.col(values.from) || tween.round) ? 1 : 0;
	          tween.delay = (is.fnc(tween.delay) ? tween.delay(target, i, animatables.length) : tween.delay) / animation.speed;
	          tween.duration = (is.fnc(tween.duration) ? tween.duration(target, i, animatables.length) : tween.duration) / animation.speed;
	          tweensProps.push(tween);
	        }
	      });
	    });
	    return tweensProps;
	  }
	
	  var getTweens = function(animatables, props) {
	    var tweensProps = getTweensProps(animatables, props);
	    var splittedProps = groupArrayByProps(tweensProps, ['name', 'from', 'to', 'delay', 'duration']);
	    return splittedProps.map(function(tweenProps) {
	      var tween = cloneObject(tweenProps[0]);
	      tween.animatables = tweenProps.map(function(p) { return p.animatables });
	      tween.totalDuration = tween.delay + tween.duration;
	      return tween;
	    });
	  }
	
	  var reverseTweens = function(anim, delays) {
	    anim.tweens.forEach(function(tween) {
	      var toVal = tween.to;
	      var fromVal = tween.from;
	      var delayVal = anim.duration - (tween.delay + tween.duration);
	      tween.from = toVal;
	      tween.to = fromVal;
	      if (delays) tween.delay = delayVal;
	    });
	    anim.reversed = anim.reversed ? false : true;
	  }
	
	  var getTweensDuration = function(tweens) {
	    if (tweens.length) return Math.max.apply(Math, tweens.map(function(tween){ return tween.totalDuration; }));
	  }
	
	  // will-change
	
	  var getWillChange = function(anim) {
	    var props = [];
	    var els = [];
	    anim.tweens.forEach(function(tween) {
	      if (tween.type === 'css' || tween.type === 'transform' ) {
	        props.push(tween.type === 'css' ? stringToHyphens(tween.name) : 'transform');
	        tween.animatables.forEach(function(animatable) { els.push(animatable.target); });
	      }
	    });
	    return {
	      properties: removeArrayDuplicates(props).join(', '),
	      elements: removeArrayDuplicates(els)
	    }
	  }
	
	  var setWillChange = function(anim) {
	    var willChange = getWillChange(anim);
	    willChange.elements.forEach(function(element) {
	      element.style.willChange = willChange.properties;
	    });
	  }
	
	  var removeWillChange = function(anim) {
	    var willChange = getWillChange(anim);
	    willChange.elements.forEach(function(element) {
	      element.style.removeProperty('will-change');
	    });
	  }
	
	  /* Svg path */
	
	  var getPathProps = function(path) {
	    var el = is.str(path) ? selectString(path)[0] : path;
	    return {
	      path: el,
	      value: el.getTotalLength()
	    }
	  }
	
	  var snapProgressToPath = function(tween, progress) {
	    var pathEl = tween.path;
	    var pathProgress = tween.value * progress;
	    var point = function(offset) {
	      var o = offset || 0;
	      var p = progress > 1 ? tween.value + o : pathProgress + o;
	      return pathEl.getPointAtLength(p);
	    }
	    var p = point();
	    var p0 = point(-1);
	    var p1 = point(+1);
	    switch (tween.name) {
	      case 'translateX': return p.x;
	      case 'translateY': return p.y;
	      case 'rotate': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
	    }
	  }
	
	  // Progress
	
	  var getTweenProgress = function(tween, time) {
	    var elapsed = Math.min(Math.max(time - tween.delay, 0), tween.duration);
	    var percent = elapsed / tween.duration;
	    var progress = tween.to.numbers.map(function(number, p) {
	      var start = tween.from.numbers[p];
	      var eased = easings[tween.easing](percent, tween.elasticity);
	      var val = tween.path ? snapProgressToPath(tween, eased) : start + eased * (number - start);
	      val = tween.round ? Math.round(val * tween.round) / tween.round : val;
	      return val;
	    });
	    return recomposeValue(progress, tween.to.strings, tween.from.strings);
	  }
	
	  var setAnimationProgress = function(anim, time) {
	    var transforms;
	    anim.currentTime = time;
	    anim.progress = (time / anim.duration) * 100;
	    for (var t = 0; t < anim.tweens.length; t++) {
	      var tween = anim.tweens[t];
	      tween.currentValue = getTweenProgress(tween, time);
	      var progress = tween.currentValue;
	      for (var a = 0; a < tween.animatables.length; a++) {
	        var animatable = tween.animatables[a];
	        var id = animatable.id;
	        var target = animatable.target;
	        var name = tween.name;
	        switch (tween.type) {
	          case 'css': target.style[name] = progress; break;
	          case 'attribute': target.setAttribute(name, progress); break;
	          case 'object': target[name] = progress; break;
	          case 'transform':
	          if (!transforms) transforms = {};
	          if (!transforms[id]) transforms[id] = [];
	          transforms[id].push(progress);
	          break;
	        }
	      }
	    }
	    if (transforms) {
	      if (!transform) transform = (getCSSValue(document.body, transformStr) ? '' : '-webkit-') + transformStr;
	      for (var t in transforms) {
	        anim.animatables[t].target.style[transform] = transforms[t].join(' ');
	      }
	    }
	    if (anim.settings.update) anim.settings.update(anim);
	  }
	
	  // Animation
	
	  var createAnimation = function(params) {
	    var anim = {};
	    anim.animatables = getAnimatables(params.targets);
	    anim.settings = mergeObjects(params, defaultSettings);
	    anim.properties = getProperties(params, anim.settings);
	    anim.tweens = getTweens(anim.animatables, anim.properties);
	    anim.duration = getTweensDuration(anim.tweens) || params.duration;
	    anim.currentTime = 0;
	    anim.progress = 0;
	    anim.ended = false;
	    return anim;
	  }
	
	  // Public
	
	  var animations = [];
	  var raf = 0;
	
	  var engine = (function() {
	    var play = function() { raf = requestAnimationFrame(step); };
	    var step = function(t) {
	      if (animations.length) {
	        for (var i = 0; i < animations.length; i++) animations[i].tick(t);
	        play();
	      } else {
	        cancelAnimationFrame(raf);
	        raf = 0;
	      }
	    }
	    return play;
	  })();
	
	  var animation = function(params) {
	
	    var anim = createAnimation(params);
	    var time = {};
	
	    anim.tick = function(now) {
	      anim.ended = false;
	      if (!time.start) time.start = now;
	      time.current = Math.min(Math.max(time.last + now - time.start, 0), anim.duration);
	      setAnimationProgress(anim, time.current);
	      var s = anim.settings;
	      if (s.begin && time.current >= s.delay) { s.begin(anim); s.begin = undefined; };
	      if (time.current >= anim.duration) {
	        if (s.loop) {
	          time.start = now;
	          if (s.direction === 'alternate') reverseTweens(anim, true);
	          if (is.num(s.loop)) s.loop--;
	        } else {
	          anim.ended = true;
	          anim.pause();
	          if (s.complete) s.complete(anim);
	        }
	        time.last = 0;
	      }
	    }
	
	    anim.seek = function(progress) {
	      setAnimationProgress(anim, (progress / 100) * anim.duration);
	    }
	
	    anim.pause = function() {
	      removeWillChange(anim);
	      var i = animations.indexOf(anim);
	      if (i > -1) animations.splice(i, 1);
	    }
	
	    anim.play = function(params) {
	      anim.pause();
	      if (params) anim = mergeObjects(createAnimation(mergeObjects(params, anim.settings)), anim);
	      time.start = 0;
	      time.last = anim.ended ? 0 : anim.currentTime;
	      var s = anim.settings;
	      if (s.direction === 'reverse') reverseTweens(anim);
	      if (s.direction === 'alternate' && !s.loop) s.loop = 1;
	      setWillChange(anim);
	      animations.push(anim);
	      if (!raf) engine();
	    }
	
	    anim.restart = function() {
	      if (anim.reversed) reverseTweens(anim);
	      anim.pause();
	      anim.seek(0);
	      anim.play();
	    }
	
	    if (anim.settings.autoplay) anim.play();
	
	    return anim;
	
	  }
	
	  // Remove one or multiple targets from all active animations.
	
	  var remove = function(elements) {
	    var targets = flattenArray(is.arr(elements) ? elements.map(toArray) : toArray(elements));
	    for (var i = animations.length-1; i >= 0; i--) {
	      var animation = animations[i];
	      var tweens = animation.tweens;
	      for (var t = tweens.length-1; t >= 0; t--) {
	        var animatables = tweens[t].animatables;
	        for (var a = animatables.length-1; a >= 0; a--) {
	          if (arrayContains(targets, animatables[a].target)) {
	            animatables.splice(a, 1);
	            if (!animatables.length) tweens.splice(t, 1);
	            if (!tweens.length) animation.pause();
	          }
	        }
	      }
	    }
	  }
	
	  animation.version = version;
	  animation.speed = 1;
	  animation.list = animations;
	  animation.remove = remove;
	  animation.easings = easings;
	  animation.getValue = getInitialTargetValue;
	  animation.path = getPathProps;
	  animation.random = random;
	
	  return animation;
	
	}));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.startLevel = undefined;
	
	var _howler = __webpack_require__(14);
	
	var _howler2 = _interopRequireDefault(_howler);
	
	var _animation = __webpack_require__(3);
	
	var _animation2 = _interopRequireDefault(_animation);
	
	var _levelRequire = __webpack_require__(4);
	
	var _titleScreen = __webpack_require__(13);
	
	var _titleScreen2 = _interopRequireDefault(_titleScreen);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// implement new Date once I figure it out
	
	//Implement current score to pass amongst levels
	// export const startLevel = (currentLvl) => {
	//
	// }
	var startLevel = exports.startLevel = function startLevel(currentLvl) {
	
	  var startGame = function startGame(currentLvl) {
	    var options = {
	      muteSoundOption: $('.soundOption').text() == " Sound: Off ",
	      muteMusicOption: $('.soundOption').text() == " Sound: Off "
	    };
	    $('.soundOption').removeClass('removed');
	    $('.toTitle').removeClass('hidden');
	    $('.text').append('<h2><span class="done"></span><span class="currentText"></span>');
	    var currentLevel = JSON.parse(JSON.stringify(currentLvl));
	    var currentText = currentLevel['currentText'];
	    document.removeEventListener('keydown', function (e) {
	      handleKeyboard(e);
	    });
	    clearInterval(gameWatcher);
	    var score = 0;
	    var keys_entered = 0;
	    var wpm = 0;
	    var averageWpm = 0;
	    var averageWpmCounter = 0;
	    var time = 0;
	    var maxWpm = 0;
	    var errors = 0;
	    var done = "";
	    var combo = 0;
	    var maxCombo = 0;
	    $('.results').addClass("removed");
	    // $(`.stageNavigation`).addClass('removed')
	    $('.currentText').replaceWith('<span class="currentText" ><u>' + currentText[0][0] + '</u>' + currentText[0].slice(1) + '</span>');
	    $('.done').replaceWith('<span class="done">' + done + '</span>');
	    $('.combo').replaceWith('<li class="combo">Combo: ' + combo + '</li>');
	    $('.Level').replaceWith('<li class="Level"> Level: ' + currentLevel['level'] + ' </li>');
	    $('.Timer').replaceWith('<li class="Timer">Time: ' + time + ' seconds');
	    $('.wpm').replaceWith('<li class="wpm">WPM: ' + wpm + ' wpm </li>');
	    $('.maxWpm').replaceWith('<li class="maxWpm">Max WPM: ' + maxWpm + ' wpm</li>');
	    $('.combo').replaceWith('<li class="combo">Combo: ' + combo + '</li>');
	    $('.score').replaceWith('<li class="score">Score: ' + score + '</li>');
	    $('.errors').replaceWith('<li class="errors"> Errors: ' + errors + '</li>');
	
	    //Setup sounds
	
	    var soundFiles = currentLevel['soundFiles'];
	    var playMusic = new _howler2.default.Howl({
	      src: soundFiles[0],
	      loop: true,
	      html5: true,
	      mute: options['muteMusicOption']
	    });
	    var playResult = new _howler2.default.Howl({
	      src: soundFiles[1],
	      loop: true,
	      html5: true,
	      mute: options['muteMusicOption']
	    });
	
	    var sfx = currentLevel['sfx'];
	    var errorSound = new _howler2.default.Howl({
	      src: [sfx[0]],
	      volume: 0.4,
	      mute: options['muteSoundOption']
	
	    });
	
	    var typeSound = new _howler2.default.Howl({
	      src: [sfx[1]],
	      volume: 1,
	      mute: options['muteSoundOption']
	    });
	
	    var dingSound = new _howler2.default.Howl({
	      src: [sfx[2]],
	      volume: 1,
	      mute: options['muteSoundOption']
	    });
	
	    $('.soundOption').on('click', function (e) {
	      // debugger
	      // e.stopPropagation();
	      var currentText = $('.soundOption').text();
	      var newText = currentText === " Sound: Off " ? " Sound: On " : " Sound: Off ";
	      if (newText === " Sound: Off ") {
	        playMusic.mute(true);
	        playResult.mute(true);
	        playMusic.pause();
	        playResult.pause();
	        errorSound = new _howler2.default.Howl({
	          src: [sfx[0]],
	          volume: 0.4,
	          mute: true
	
	        });
	
	        typeSound = new _howler2.default.Howl({
	          src: [sfx[1]],
	          volume: 1,
	          mute: true
	        });
	
	        dingSound = new _howler2.default.Howl({
	          src: [sfx[2]],
	          volume: 1,
	          mute: true
	        });
	      } else {
	        playMusic.mute(false);
	        playResult.mute(false);
	        playMusic.stop();
	        playResult.stop();
	        if ($('.results').attr('class') == "results removed") {
	          playMusic.play();
	        } else {
	          playResult.play();
	        }
	        errorSound = new _howler2.default.Howl({
	          src: [sfx[0]],
	          volume: 0.4,
	          mute: false
	
	        });
	
	        typeSound = new _howler2.default.Howl({
	          src: [sfx[1]],
	          volume: 1,
	          mute: false
	        });
	
	        dingSound = new _howler2.default.Howl({
	          src: [sfx[2]],
	          volume: 1,
	          mute: false
	        });
	      }
	      // }
	
	
	      $('.soundOption').text(newText);
	      //
	      //   if ($('.soundOption').text() === " Sound: On ") {
	      //   $('.soundOption').replaceWith('<li class="soundOption"> Sound: Off </li>')
	      // } else if ($('.soundOption').text() === " Sound: Off ") {
	      //   $('.soundOption').replaceWith('<li class="soundOption"> Sound: On </li>')
	      // }
	    });
	    //Setup Level Gimmicks here
	    var className = "currentText";
	    var toggleAnimation = function toggleAnimation(element) {
	      if (currentLevel["animations"]["shake"] === true) {
	        element.toggleClass("shake");
	        $('.done').toggleClass('shake');
	      }
	
	      if (currentLevel["animations"]["spotlight"]) {
	        var ctx = $('#c')[0].getContext("2d");
	        ctx.beginPath();
	        ctx.arc(75, 75, 10, 0, Math.PI * 2, true);
	        ctx.closePath();
	        ctx.fill();
	      }
	    };
	
	    var retryStage = function retryStage(currentLevel) {
	      startLevel(currentLevel);
	    };
	    //setup Stats Bar
	    var gameWatcher = setInterval(function () {
	      time++;
	      wpm = parseInt(keys_entered / 5 / (time / 60));
	      averageWpm = parseInt((averageWpm + wpm) / 2);
	      if (wpm > maxWpm) {
	        maxWpm = wpm;
	      }
	      $('.Level').replaceWith('<li class="Level"> Level: ' + currentLevel['level'] + ' </li>');
	      $('.Timer').replaceWith('<li class="Timer">Time: ' + time + ' seconds');
	      $('.wpm').replaceWith('<li class="wpm">WPM: ' + wpm + ' wpm </li>');
	      $('.maxWpm').replaceWith('<li class="maxWpm">Max WPM: ' + maxWpm + ' wpm</li>');
	      $('.averageWpm').replaceWith('<li class="averageWpm"> Average WPM: ' + averageWpm + ' wpm</li');
	      $('.combo').replaceWith('<li class="combo">Combo: ' + combo + '</li>');
	      $('.score').replaceWith('<li class="score">Score: ' + score + '</li>');
	      $('.errors').replaceWith('<li class="errors"> Errors: ' + errors + '</li>');
	    }, 1000);
	
	    playMusic.play();
	
	    toggleAnimation($('.currentText'));
	
	    document.addEventListener('keydown', function (e) {
	      var previousSpace = false;
	      if (currentText.length > 1) {
	        if (e.key === currentText[0][0]) {
	          // debugger
	          typeSound.play();
	          if (currentText[0][0] == " ") {
	            done += '\xA0';
	          } else {
	            done += currentText[0][0];
	          }
	          currentText[0] = currentText[0].slice(1);
	          keys_entered++;
	          if (previousSpace === true) {
	            $('.done').replaceWith('<span class="done" >' + done + ' </span>');
	            previousSpace = false;
	          } else {
	            $('.done').replaceWith('<span class="done">' + done + '</span>');
	          }
	          combo++;
	          score += 100 * (parseInt(combo / 10) + 1) + parseInt(wpm * 0.5);
	          $('.combo').replaceWith('<li class="combo">Combo: ' + combo + '</li>');
	          $('.score').replaceWith('<li class="score">Score: ' + score + '</li>');
	          if (currentText[0][0] == " ") {
	            $('.currentText').replaceWith('<span class="currentText" ><u>\xA0</u>' + currentText[0].slice(1) + '</span>');
	            toggleAnimation($('.currentText'));
	            previousSpace = true;
	            //Come back to this space glitch later
	          } else {
	            $('.currentText').replaceWith('<span class="currentText" ><u>' + currentText[0][0] + '</u>' + currentText[0].slice(1) + '</span>');
	            toggleAnimation($('.currentText'));
	          }
	        } else if (e.key !== "Shift" && e.key !== "Enter") {
	          errors++;
	          errorSound.play();
	          combo = 0;
	          $('.combo').replaceWith('<li class="combo">Combo: ' + combo + '</li>');
	          $('.errors').replaceWith('<li class="errors"> Errors: ' + errors + '</li>');
	        }
	        if (currentText[0] == "" && currentText[1] == "end") {
	          dingSound.play();
	          playMusic.stop();
	          currentText = currentText.slice(1);
	          clearInterval(gameWatcher);
	          done = "";
	          $('.done').replaceWith('<span class="done">' + done + '</span>');
	          $('.currentText').replaceWith('<span class="done"></span>');
	          if ($('.soundOption').text() == " Sound: On ") {
	            playResult.play();
	          }
	          //replace this line with results screen in the future
	          document.removeEventListener('keydown', function (e) {
	            handleKeyboard(e);
	          });
	          $('.results').removeClass("removed");
	          $('.retryStage').one('click', function () {
	            playResult.stop();
	            $('.soundOption').off('click');
	            $('.nextStage').off('click');
	            $('.returnToTitle').off('click');
	            startLevel(currentLvl);
	          });
	
	          $('.nextStage').one('click', function () {
	            playResult.stop();
	            $('.results').addClass("removed");
	            $('.soundOption').off('click');
	            $('.retryStage').off('click');
	            $('.returnToTitle').off('click');
	            startLevel((0, _levelRequire.getLevel)(currentLevel['nextLevel'], currentLevel['options']));
	          });
	
	          $().on('keydown', function (e) {
	            debugger;
	            if (e.key == "Enter") {
	              playResult.stop();
	              $('.soundOption').off('click');
	              $('.retryStage').off('click');
	              $('.returnToTitle').off('click');
	              startLevel((0, _levelRequire.getLevel)(currentLevel['nextLevel'], currentLevel['options']));
	            }
	          });
	
	          $('.returnToTitle').one('click', function () {
	            // document.reload();
	            playResult.stop();
	            $('.soundOption').off('click');
	            $('.results').addClass("removed");
	            $('.retryStage').off('click');
	            $('.nextStage').off('click');
	            (0, _titleScreen2.default)();
	          });
	          // $(`.stageNavigation`).toggleClass('removed')
	        } else if (currentText[0].length === 0) {
	          currentText = currentText.slice(1);
	          done = "";
	          dingSound.play();
	          // changeBackground();
	          score += 250 * (parseInt(combo / 10) + 1) + parseInt(wpm + 1);
	          $('.done').replaceWith('<span class="done">' + done + '</span>');
	          $('.currentText').replaceWith('<span class="currentText" ><u>' + currentText[0][0] + '</u>' + currentText[0].slice(1) + '</span>');
	          toggleAnimation($('.currentText'));
	        }
	      } else if (currentText[0] == "end") {}
	    });
	    $('.toTitle').on('click', function (e) {
	      $('#levels').off('click');
	      $('.soundOption').off('click');
	      playResult.stop();
	      $('.soundOption').off('click');
	      $('.results').addClass("removed");
	      $('.retryStage').off('click');
	      $('.nextStage').off('click');
	      playMusic.stop();
	      currentText = "";
	      clearInterval(gameWatcher);
	      done = "";
	      document.removeEventListener('keydown', function (e) {
	        handleKeyboard(e);
	      });
	
	      $('.done').replaceWith('<span class="done">' + done + '</span>');
	      $('.currentText').replaceWith('<span class="done"></span>');
	      (0, _titleScreen2.default)();
	      // $('.keys-entered').replaceWith(`<li class="keys-entered">Correct Keys Entered: ${keys_entered} </li>`)
	    });
	  };
	
	  $('.title').addClass("removed");
	  $('.done').remove();
	  $('.currentText').remove();
	  $('.soundOption').addClass('removed');
	  $('.combo').addClass('removed');
	  if (currentLvl['preLevelText']) {
	    $('.preLevelText').removeClass('removed');
	    $('.preLevelText').replaceWith('<div class = "preLevelText">\n      <h2 class="preLevelTextText"></h2>\n      <br/>\n      <br/>\n      <h2 class="preLevelTextButton"> Click Here To Begin </h2>\n     </div>');
	    $('.preLevelTextText').replaceWith('<h3 class="preLevelTextText">' + currentLvl['preLevelText'] + '</h3>');
	  } else {
	    $('.preLevelTextText').replaceWith('<h2 class="preLevelTextText">No Text Yet.</h2>');
	  }
	  $('.preLevelTextButton').one('click', function (e) {
	    //3
	    $('.preLevelText').replaceWith('<div class="preLevelText"><h3>3</h3></div>');
	    //2
	    setTimeout(function () {
	      $('.preLevelText').replaceWith('<div class="preLevelText"><h3>2</h3></div>');
	    }, 1000);
	    //1
	    setTimeout(function () {
	      $('.preLevelText').replaceWith('<div class="preLevelText"><h3>1</h3></div>');
	    }, 2000);
	    // GO
	    setTimeout(function () {
	      $('.preLevelText').replaceWith('<div class="preLevelText"><h3>Go!</h3></div>');
	    }, 3000);
	    // actual Go
	    setTimeout(function () {
	      $('.preLevelText').addClass('removed');
	      startGame(currentLvl);
	    }, 4000);
	  });
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.changeBackground = undefined;
	
	var _animejs = __webpack_require__(1);
	
	var _animejs2 = _interopRequireDefault(_animejs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var animation = function animation() {
	  var c = document.getElementById("c");
	  //Sets canvase and canvase size
	  var ctx = c.getContext("2d");
	  var cH;
	  var cW;
	  //Canvas Background
	  var bgColor = "#FFBE53";
	
	  //When do these get used?
	  var animations = [];
	  var circles = [];
	
	  // Chooses color randomly based on preset array
	  var colorPicker = function () {
	    var colors = ["#2980B9", "#FFBE53", "#16a085"];
	    var textColors = colors.slice(1).push(colors[0]);
	    var index = 0;
	    function next() {
	      index = index++ < colors.length - 1 ? index : 0;
	      return colors[index];
	    }
	    function current() {
	      return colors[index];
	    }
	    function text() {
	      return textColors[index];
	    }
	    return {
	      next: next,
	      current: current
	    };
	  }();
	
	  function removeAnimation(animation) {
	    var index = animations.indexOf(animation);
	    if (index > -1) animations.splice(index, 1);
	  }
	
	  // fills the page depending on the size of the page, goes out in a circle
	  function calcPageFillRadius(x, y) {
	    var l = Math.max(x - 0, cW - x);
	    var h = Math.max(y - 0, cH - y);
	    return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
	  }
	
	  //Looks at clicks to start the event hopefully
	  function addClickListeners() {
	    // touch start starts when touch surface is touched?
	    document.addEventListener("touchstart", handleEvent);
	    var counter = 0;
	    var color = "#2ecc71";
	    document.addEventListener("keydown", function (e) {
	      // debugger
	      // if ($('.currentText').text().length <= 2){
	      counter++;
	      $('.currentText').css("color", color);
	      if (counter % 30 === 0 || e.key == "1") {
	        handleEvent(e); // handleEvent;
	      }
	      // } else {
	      // $('.currentText').off('change',handleEvent);
	    });
	    document.addEventListener("mousedown", handleEvent);
	    var a = setInterval(function () {
	      handleEvent({ touches: null });
	    }, Math.random() * 100 + 140);
	    window.setTimeout(function () {
	      clearInterval(a);
	    }, 2000);
	  };
	
	  var handleEvent = function handleEvent(e) {
	
	    if (e.touches) {
	      e.preventDefault();
	      e = e.touches[0];
	    }
	    // goes through color
	    var pageX = Math.random() * cW;
	    var pageY = Math.random() * cH;
	    var currentColor = colorPicker.current();
	    var nextColor = colorPicker.next();
	    // expands the color depending on the position of e
	    var targetR = calcPageFillRadius(pageX, pageY);
	    var rippleSize = Math.min(200, cW * .4);
	    var minCoverDuration = 750;
	
	    var pageFill = new Circle({
	      x: pageX,
	      y: pageY,
	      r: 0,
	      fill: nextColor
	    });
	    var fillAnimation = (0, _animejs2.default)({
	      targets: pageFill,
	      r: targetR,
	      duration: Math.max(targetR / 2, minCoverDuration),
	      easing: "easeOutQuart",
	      complete: function complete() {
	        bgColor = pageFill.fill;
	        removeAnimation(fillAnimation);
	      }
	    });
	
	    var ripple = new Circle({
	      x: pageX,
	      y: pageY,
	      r: 0,
	      fill: currentColor,
	      stroke: {
	        width: 3,
	        color: currentColor
	      },
	      opacity: 1
	    });
	    var rippleAnimation = (0, _animejs2.default)({
	      targets: ripple,
	      r: rippleSize,
	      opacity: 0,
	      easing: "easeOutExpo",
	      duration: 900,
	      complete: removeAnimation
	    });
	
	    var particles = [];
	    for (var i = 0; i < 32; i++) {
	      var particle = new Circle({
	        x: pageX,
	        y: pageY,
	        fill: currentColor,
	        r: _animejs2.default.random(24, 48)
	      });
	      particles.push(particle);
	    }
	    var particlesAnimation = (0, _animejs2.default)({
	      targets: particles,
	      x: function x(particle) {
	        return particle.x + _animejs2.default.random(rippleSize, -rippleSize);
	      },
	      y: function y(particle) {
	        return particle.y + _animejs2.default.random(rippleSize * 1.15, -rippleSize * 1.15);
	      },
	      r: 0,
	      easing: "easeOutExpo",
	      duration: _animejs2.default.random(1000, 1300),
	      complete: removeAnimation
	    });
	    animations.push(fillAnimation, rippleAnimation, particlesAnimation);
	  };
	
	  function extend(a, b) {
	    for (var key in b) {
	      if (b.hasOwnProperty(key)) {
	        a[key] = b[key];
	      }
	    }
	    return a;
	  }
	
	  var Circle = function Circle(opts) {
	    extend(this, opts);
	  };
	
	  Circle.prototype.draw = function () {
	    ctx.globalAlpha = this.opacity || 1;
	    ctx.beginPath();
	    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
	    if (this.stroke) {
	      ctx.strokeStyle = this.stroke.color;
	      ctx.lineWidth = this.stroke.width;
	      ctx.stroke();
	    }
	    if (this.fill) {
	      ctx.fillStyle = this.fill;
	      ctx.fill();
	    }
	    ctx.closePath();
	    ctx.globalAlpha = 1;
	  };
	
	  var animate = (0, _animejs2.default)({
	    duration: Infinity,
	    update: function update() {
	      ctx.fillStyle = bgColor;
	      ctx.fillRect(0, 0, cW, cH);
	      animations.forEach(function (anim) {
	        anim.animatables.forEach(function (animatable) {
	          animatable.target.draw();
	        });
	      });
	    }
	  });
	
	  var resizeCanvas = function resizeCanvas() {
	    cW = window.innerWidth;
	    cH = window.innerHeight;
	    c.width = cW * devicePixelRatio;
	    c.height = cH * devicePixelRatio;
	    ctx.scale(devicePixelRatio, devicePixelRatio);
	  };
	
	  (function init() {
	    resizeCanvas();
	    if (window.CP) {
	      // CodePen's loop detection was causin' problems
	      // and I have no idea why, so...
	      window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;
	    }
	    window.addEventListener("resize", resizeCanvas);
	    addClickListeners();
	    if (!!window.location.pathname.match(/fullcpgrid/)) {
	      // startFauxClicking();
	    }
	    handleInactiveUser();
	  })();
	
	  function handleInactiveUser() {
	    var inactive = setTimeout(function () {
	      // fauxClick(cW/2, cH/2);
	    }, 2000);
	
	    function clearInactiveTimeout() {
	      clearTimeout(inactive);
	      document.removeEventListener("mousedown", clearInactiveTimeout);
	      document.removeEventListener("touchstart", clearInactiveTimeout);
	    }
	
	    document.addEventListener("mousedown", clearInactiveTimeout);
	    document.addEventListener("touchstart", clearInactiveTimeout);
	  }
	
	  // function startFauxClicking() {
	  // setTimeout(function(){
	  //   fauxClick(anime.random( cW * .2, cW * .8), anime.random(cH * .2, cH * .8));
	  //   startFauxClicking();
	  // }, anime.random(200, 900));
	  // }
	  //
	  // function fauxClick(x, y) {
	  // var fauxClick = new Event("mousedown");
	  // fauxClick.pageX = x;
	  // fauxClick.pageY = y;
	  // document.dispatchEvent(fauxClick);
	  //
	  // }
	};
	
	exports.default = animation;
	var changeBackground = exports.changeBackground = function changeBackground() {
	  handleEvent();
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getNextLevel = exports.getLevel = undefined;
	
	var _level = __webpack_require__(5);
	
	var _level2 = __webpack_require__(6);
	
	var _level3 = __webpack_require__(7);
	
	var _level4 = __webpack_require__(8);
	
	var _level5 = __webpack_require__(9);
	
	var _level6 = __webpack_require__(10);
	
	var _testLvl = __webpack_require__(11);
	
	var _longTestLvl = __webpack_require__(12);
	
	var getLevel = exports.getLevel = function getLevel(levelName, soundOption) {
	  var levels = {
	    level1: _level.level1,
	    level2: _level2.level2,
	    level3: _level3.level3,
	    level4: _level4.level4,
	    level5: _level5.level5,
	    level6: _level6.level6,
	    testLevel: _testLvl.testLevel,
	    longTestLvl: _longTestLvl.longTestLvl
	  };
	  var songfiles = {
	    result: 'assets/music/Shogun_Beatz.mp3',
	    gameNormal: 'assets/music/Beautiful_Typing.mp3'
	    // title: `assets/music/Vatic_Sketch_1.mp3`
	  };
	
	  var soundEffects = ['assets/sounds/Blip_Select.wav', 'assets/sounds/typewriter.wav', 'assets/sounds/Pickup_Coin10.wav'];
	  //order is Error, Type, Complete
	
	  // debugger
	  return {
	    // soundFiles: songfiles['gameNormal'],
	    level: levels[levelName]['level'],
	    currentText: levels[levelName]['currentText'],
	    preLevelText: levels[levelName]['prelevelText'],
	    nextLevel: levels[levelName]['nextLevel'],
	    animations: levels[levelName]['animations'],
	    soundFiles: [songfiles['gameNormal'], songfiles['result']],
	    sfx: soundEffects,
	    options: {
	      muteSoundOption: soundOption['muteSoundOption'],
	      muteMusicOption: soundOption['muteMusicOption']
	    }
	  };
	  console.log(levels[levelName]);
	};
	
	var getNextLevel = exports.getNextLevel = function getNextLevel(levelName, soundOption) {
	  if (typeof levels[levelName] == 'undefined') {
	    return { level: "End of the Game" };
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var songfiles = {
	  result: 'assets/music/Shogun_Beatz.mp3',
	  gameNormal: 'assets/music/Beautiful_Typing.mp3'
	  // title: `assets/music/Vatic_Sketch_1.mp3`
	};
	
	var soundEffects = ['assets/sounds/Blip_Select.wav', 'assets/sounds/typewriter.wav', 'assets/sounds/Pickup_Coin10.wav'];
	//order is Error, Type, Complete
	
	var level1 = exports.level1 = {
	  level: '1 - The Intro',
	  currentText: ["Welcome!", "If you're looking for someone", "with a charming smile,", "and mad coding chops", "you should give Andrew Tae", "a chance to interview!", "Either way,", "please sit back and enjoy", "the hardest typing test you have ever seen.", "Have fun and good luck!", "end"],
	  prelevelText: ["Welcome to Beautiful Typing! Let's get you warmed up for the tasks ahead."],
	  currentLevel: 'level1',
	  nextLevel: 'level2',
	  animations: {
	    shake: false,
	    spotlight: false,
	    flags: false,
	    cats: false,
	    random: false
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var songfiles = {
	  result: 'assets/music/Shogun_Beatz.mp3',
	  gameNormal: 'assets/music/Beautiful_Typing.mp3'
	  // title: `assets/music/Vatic_Sketch_1.mp3`
	};
	
	var soundEffects = ['assets/sounds/Blip_Select.wav', 'assets/sounds/typewriter.wav', 'assets/sounds/Pickup_Coin10.wav'];
	//order is Error, Type, Complete
	
	var level2 = exports.level2 = {
	  level: '2 - The Coffee',
	  currentText: ["Scrum meeting at 7PM. Don't be late!", "The security guards called again. You can't keep parking in the spaces reserved for the charity winners. Please move your car now.", "Coffee machine is down again. Looks like we'll have to go get some coffee from across the- Oh, I see you've already got your own cup. Carry on.", "Where is my stapler? Where IS my stapler? WHERE is my stapler? Where is my STAPLER?", "SYNERGY!!!", "!!11!1i!iil!1l1l1l1", "end"],
	  prelevelText: ["This level will simulate an environment wherein you have consumed 5 more cups of coffee than usual. This will test perseverance."],
	  nextLevel: 'level3',
	  animations: {
	    shake: true,
	    spotlight: false,
	    flags: false,
	    cats: false,
	    random: false
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var songfiles = {
	  result: 'assets/music/Shogun_Beatz.mp3',
	  gameNormal: 'assets/music/Beautiful_Typing.mp3'
	  // title: `assets/music/Vatic_Sketch_1.mp3`
	};
	
	var soundEffects = ['assets/sounds/Blip_Select.wav', 'assets/sounds/typewriter.wav', 'assets/sounds/Pickup_Coin10.wav'];
	//order is Error, Type, Complete
	
	var level3 = exports.level3 = {
	  level: '3 - The Scientist',
	  currentText: ["In this study, I visualized connexin36-immunoreactive gap junctions and examined the structural features of the interconnected dendrites arising from parvalbumin (PV)-positive interneurons in layer 4 of the feline visual cortex.", "These viruses make sfRNAs by co-opting a cellular exoribonuclease using structured RNAs called xrRNAs.", "end"],
	  prelevelText: ["This will test your ability to type scientific words that you have likely seen for the first time. "],
	  currentLevel: 'level3',
	  nextLevel: 'level4',
	  animations: {
	    shake: false,
	    spotlight: false,
	    flags: false,
	    cats: false,
	    random: false
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var songfiles = {
	  result: 'assets/music/Shogun_Beatz.mp3',
	  gameNormal: 'assets/music/Beautiful_Typing.mp3'
	  // title: `assets/music/Vatic_Sketch_1.mp3`
	};
	
	var soundEffects = ['assets/sounds/Blip_Select.wav', 'assets/sounds/typewriter.wav', 'assets/sounds/Pickup_Coin10.wav'];
	//order is Error, Type, Complete
	//Have a bouncing cat phrase going around the screen. (i.e. Feed me. Meow.)
	var level4 = exports.level4 = {
	  level: '4 - The Cat',
	  currentText: ["shytnhi.;o8ng d", "gh6op;;;lvfvfggfbv", "brhnykm8lrmjsfr3tr4hhy5ju6i8jn5s", "w aqxdcwrhngvynj6kmu7,il;o[pmk;", ".luy[]hy6nfr cd bl,///////////;'''''''54265y4trdjfghc9 lkjbtdhs113544444444444444444444439wa]", "end"],
	  prelevelText: ["My cat decided to take a turn on the keyboard. This is her contribution."],
	  nextLevel: 'level5',
	  animations: {
	    shake: false,
	    spotlight: false,
	    flags: false,
	    cats: false,
	    random: false
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var songfiles = {
	  result: 'assets/music/Shogun_Beatz.mp3',
	  gameNormal: 'assets/music/Beautiful_Typing.mp3'
	  // title: `assets/music/Vatic_Sketch_1.mp3`
	};
	
	var soundEffects = ['assets/sounds/Blip_Select.wav', 'assets/sounds/typewriter.wav', 'assets/sounds/Pickup_Coin10.wav'];
	//order is Error, Type, Complete
	
	var level5 = exports.level5 = {
	  level: '5 - ',
	  currentText: ["", "end"],
	  prelevelText: [""],
	  nextLevel: 'level6',
	  animations: {
	    shake: true,
	    spotlight: false,
	    flags: false,
	    cats: false,
	    random: false
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var songfiles = {
	  result: 'assets/music/Shogun_Beatz.mp3',
	  gameNormal: 'assets/music/Beautiful_Typing.mp3'
	  // title: `assets/music/Vatic_Sketch_1.mp3`
	};
	
	var soundEffects = ['assets/sounds/Blip_Select.wav', 'assets/sounds/typewriter.wav', 'assets/sounds/Pickup_Coin10.wav'];
	//order is Error, Type, Complete
	
	var level6 = exports.level6 = {
	  level: 'Level 6 - The End',
	  currentText: ["", "end"],
	  prelevelText: ["Welcome to Beautiful Typing! Let's get you warmed up for the tasks ahead."],
	  nextLevel: 'end',
	  animations: {
	    shake: true,
	    spotlight: true,
	    flags: false,
	    cats: false,
	    random: false
	  }
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	
	var songfiles = {
	  result: "assets/music/Shogun_Beatz.mp3",
	  gameNormal: 'assets/music/Beautiful_Typing.mp3'
	  // title: `assets/music/Vatic_Sketch_1.mp3`
	};
	
	var soundEffects = ["assets/sounds/Blip_Select.wav", "assets/sounds/typewriter.wav", "assets/sounds/Pickup_Coin10.wav"];
	//order is Error, Type, Complete
	
	var testLevel = exports.testLevel = {
	  level: "Tutorial",
	  currentText: ["Let's get this party started!", "Whoa, two sentences!", "THREEEEEE;;;;;", "end"],
	  prelevelText: ["testing testing 1 2 3"],
	  currentLevel: 'testLevel',
	  nextLevel: "longTestLvl",
	  animations: {
	    shake: false,
	    spotlight: true,
	    flags: false,
	    cats: false,
	    random: false
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var songfiles = {
	  result: "assets/music/Shogun_Beatz.mp3",
	  gameNormal: 'assets/music/Beautiful_Typing.mp3'
	  // title: `assets/music/Vatic_Sketch_1.mp3`
	};
	
	var soundEffects = ["assets/sounds/Blip_Select.wav", "assets/sounds/typewriter.wav", "assets/sounds/Pickup_Coin10.wav"];
	//order is Error, Type, Complete
	
	var longTestLvl = exports.longTestLvl = {
	  level: "Long Test Level",
	  currentText: ["Alright, let's get some super long words into this application. What other words can we use I wonder?", "Time to paste a whoooole paragraph in here. I don't know how to type the Lorem thing but it's fine, there are plenty of other words in the actual english language that I can use instead. So take THAT international policy!", "THREEEEEEEEEEEKJSKJHASNKJASJHGDASLCNLIHWQIUDGQWLENQWKLGKDYJASHV>GSLFDH>Z<", "end"],
	  prelevelText: ["Suuuuuuuper long testing What's up every body it's time for some loooooooong typing I hope everyone was able to make it here okay. Press 1 now to being the game!"],
	  currentLevel: 'longTestLvl',
	  nextLevel: 'level1',
	  animations: {
	    shake: false,
	    spotlight: false,
	    flags: false,
	    cats: false,
	    random: false
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _levelRequire = __webpack_require__(4);
	
	var _game = __webpack_require__(2);
	
	var _howler = __webpack_require__(14);
	
	var _howler2 = _interopRequireDefault(_howler);
	
	var _animation = __webpack_require__(3);
	
	var _animation2 = _interopRequireDefault(_animation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var resetPage = function resetPage() {
	  $('.Level').replaceWith('<li class = "Level"> Beautiful Typing </li>');
	  $('.score').replaceWith('<li class = "score hidden"> Score: 0</li>');
	  $('.Timer').replaceWith('<li class = "Timer hidden"> Time: 0 sec</li>');
	  $('.wpm').replaceWith('<li class = "wpm hidden"> WPM: 0 wpm</li>');
	  $('.maxWpm').replaceWith('<li class = "maxWpm hidden"> Max WPM: 0 wpm</li>');
	  $('.errors').replaceWith('<li class ="errors hidden"> Errors: 0 </li>');
	  $('.titleName').replaceWith('<h2 class="titleName animated bounceInDown"> Beautiful Typing </h2>');
	  $('.combo').replaceWith('<li class = "combo hidden"> Combo: 0 </li>');
	
	  // $(`.LevelSelect`).replaceWith(`<ul class="LevelSelect animated bounceInLeft">
	  //     </ul>
	  //
	  //     <div id="myModal" class="modal">
	  //
	  //         </div>
	  //
	  //   </div>
	  //     <br/>`)
	};
	
	var titleScreen = function titleScreen() {
	  resetPage();
	  $('.text').remove('.title');
	  $('.title').removeClass('removed');
	
	  $('.levelList').addClass("removed");
	
	  var titleMusic = new _howler2.default.Howl({
	    src: ['./assets/music/Vatic_Sketch_1.mp3'],
	    loop: true
	  });
	  // if ($('.soundOption')===" Sound: Off "){
	
	
	  // titleMusic.play();
	  // debugger
	
	  if ($('.musicOption').text() === " Music: Off ") {
	    // debugger
	    // titleMusic.stop();
	  } else {}
	    // titleMusic.play();
	    // debugger
	
	
	    // // $('.dreamloLBTable').addClass('removed');
	    //
	  $('.toTitle').addClass("hidden");
	  (0, _animation2.default)();
	
	  $('.soundOption').on('click', function (e) {
	    // debugger
	    // e.stopPropagation();
	    var currentText = $('.soundOption').text();
	    var newText = currentText === " Sound: Off " ? " Sound: On " : " Sound: Off ";
	    if (newText === " Sound: Off ") {
	      // debugger
	      options['muteSoundOption'] = true;
	      options['muteMusicOption'] = true;
	      // titleMusic.mute(true)
	    } else {
	      // debugger
	      options['muteSoundOption'] = false;
	      options['muteMusicOption'] = false;
	      // titleMusic.mute(false)
	
	      // Howler.unmute();
	    }
	    // }
	
	
	    $('.soundOption').text(newText);
	    //
	    //   if ($('.soundOption').text() === " Sound: On ") {
	    //   $('.soundOption').replaceWith('<li class="soundOption"> Sound: Off </li>')
	    // } else if ($('.soundOption').text() === " Sound: Off ") {
	    //   $('.soundOption').replaceWith('<li class="soundOption"> Sound: On </li>')
	    // }
	  });
	  var options = {
	    muteSoundOption: false,
	    muteMusicOption: false
	  };
	
	  if ($('.LevelSelectList').length === 0) {
	    $('.LevelSelect').prepend('<ul class="LevelSelectList"><li id="start"> Start Game </li><li id="levels">Level Select</li><li id="leaderboards">Leaderboards</li></ul>');
	  }
	  $('#start').on('click', function () {
	    // titleMusic.stop()
	    $('#levels').off('click');
	    $('.soundOption').off('click');
	
	    (0, _game.startLevel)((0, _levelRequire.getLevel)('level1', options));
	  });
	  // if (!$('#levels').onClick){
	  //   $('#levels').on('click', ()=>{
	  //     $('.levelList').toggleClass("removed")
	  //   })
	  // }
	  $('#levels').on('click', function () {
	    $('.levelList').toggleClass("removed");
	  });
	
	  $('.test').on('click', function (e) {
	    // titleMusic.stop()
	    $('#levels').off('click');
	    $('.soundOption').off('click');
	    (0, _game.startLevel)((0, _levelRequire.getLevel)('testLevel', options));
	  });
	  $('.longTest').on('click', function (e) {
	    // titleMusic.stop()
	    $('#levels').off('click');
	    $('.soundOption').off('click');
	    (0, _game.startLevel)((0, _levelRequire.getLevel)('longTestLvl', options));
	  });
	  $('.level1').on('click', function (e) {
	    // titleMusic.stop()
	    $('#levels').off('click');
	    $('.soundOption').off('click');
	    (0, _game.startLevel)((0, _levelRequire.getLevel)('level1', options));
	  });
	  $('.level2').on('click', function (e) {
	    // titleMusic.stop()
	    $('#levels').off('click');
	    $('.soundOption').off('click');
	    (0, _game.startLevel)((0, _levelRequire.getLevel)('level2', options));
	  });
	  $('.level3').on('click', function (e) {
	    // titleMusic.stop()
	    $('#levels').off('click');
	    $('.soundOption').off('click');
	    (0, _game.startLevel)((0, _levelRequire.getLevel)('level3', options));
	  });
	  $('.level4').on('click', function (e) {
	    // titleMusic.stop()
	    $('#levels').off('click');
	    $('.soundOption').off('click');
	    (0, _game.startLevel)((0, _levelRequire.getLevel)('level4', options));
	  });
	  $('.level5').on('click', function (e) {
	    // titleMusic.stop()
	    $('#levels').off('click');
	    $('.soundOption').off('click');
	    (0, _game.startLevel)((0, _levelRequire.getLevel)('level5', options));
	  });
	  $('.level6').on('click', function (e) {
	    // titleMusic.stop()
	    $('#levels').off('click');
	    $('.soundOption').off('click');
	    (0, _game.startLevel)((0, _levelRequire.getLevel)('level6', options));
	  });
	
	  // $('.leaderboards').on('click', e=> {
	  //   $('.dreamloLBTable').toggleClass('removed');
	  //
	  // })
	
	  // Get the modal
	  var modal = document.getElementById('myModal');
	
	  // Get the button that opens the modal
	  var btn = document.getElementById("leaderboards");
	
	  // Get the <span> element that closes the modal
	  var span = document.getElementsByClassName("close")[0];
	
	  // When the user clicks on the button, open the modal
	  btn.onclick = function () {
	    modal.style.display = "block";
	  };
	
	  // When the user clicks on <span> (x), close the modal
	  span.onclick = function () {
	    modal.style.display = "none";
	  };
	
	  // When the user clicks anywhere outside of the modal, close it
	  window.onclick = function (event) {
	    if (event.target == modal) {
	      modal.style.display = "none";
	    }
	  };
	
	  // $('.musicOption').on('click', (e) => {
	  //   // e.stopPropagation();
	  //
	  //   let currentMusicText = $('.musicOption').text()
	  //   let newMusicText = (currentMusicText === " Music: Off ")? " Music: On " : " Music: Off "
	  //   if (newMusicText === " Music: Off ") {
	  //
	  titleMusic.mute(true);
	  //     options['muteMusicOption'] = true
	  //   } else {
	  titleMusic.mute(false);
	  //
	  //     options['muteMusicOption'] = false
	  //   }
	  //   $('.musicOption').text(newMusicText);
	  // })
	
	};
	
	// $('#start').on('click', startGame())
	
	
	//insert handlers for levelList
	
	exports.default = titleScreen;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 *  howler.js v2.0.1
	 *  howlerjs.com
	 *
	 *  (c) 2013-2016, James Simpson of GoldFire Studios
	 *  goldfirestudios.com
	 *
	 *  MIT License
	 */
	
	(function() {
	
	  'use strict';
	
	  /** Global Methods **/
	  /***************************************************************************/
	
	  /**
	   * Create the global controller. All contained methods and properties apply
	   * to all sounds that are currently playing or will be in the future.
	   */
	  var HowlerGlobal = function() {
	    this.init();
	  };
	  HowlerGlobal.prototype = {
	    /**
	     * Initialize the global Howler object.
	     * @return {Howler}
	     */
	    init: function() {
	      var self = this || Howler;
	
	      // Internal properties.
	      self._codecs = {};
	      self._howls = [];
	      self._muted = false;
	      self._volume = 1;
	      self._canPlayEvent = 'canplaythrough';
	      self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;
	
	      // Public properties.
	      self.masterGain = null;
	      self.noAudio = false;
	      self.usingWebAudio = true;
	      self.autoSuspend = true;
	      self.ctx = null;
	
	      // Set to false to disable the auto iOS enabler.
	      self.mobileAutoEnable = true;
	
	      // Setup the various state values for global tracking.
	      self._setup();
	
	      return self;
	    },
	
	    /**
	     * Get/set the global volume for all sounds.
	     * @param  {Float} vol Volume from 0.0 to 1.0.
	     * @return {Howler/Float}     Returns self or current volume.
	     */
	    volume: function(vol) {
	      var self = this || Howler;
	      vol = parseFloat(vol);
	
	      // If we don't have an AudioContext created yet, run the setup.
	      if (!self.ctx) {
	        setupAudioContext();
	      }
	
	      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
	        self._volume = vol;
	
	        // Don't update any of the nodes if we are muted.
	        if (self._muted) {
	          return self;
	        }
	
	        // When using Web Audio, we just need to adjust the master gain.
	        if (self.usingWebAudio) {
	          self.masterGain.gain.value = vol;
	        }
	
	        // Loop through and change volume for all HTML5 audio nodes.
	        for (var i=0; i<self._howls.length; i++) {
	          if (!self._howls[i]._webAudio) {
	            // Get all of the sounds in this Howl group.
	            var ids = self._howls[i]._getSoundIds();
	
	            // Loop through all sounds and change the volumes.
	            for (var j=0; j<ids.length; j++) {
	              var sound = self._howls[i]._soundById(ids[j]);
	
	              if (sound && sound._node) {
	                sound._node.volume = sound._volume * vol;
	              }
	            }
	          }
	        }
	
	        return self;
	      }
	
	      return self._volume;
	    },
	
	    /**
	     * Handle muting and unmuting globally.
	     * @param  {Boolean} muted Is muted or not.
	     */
	    mute: function(muted) {
	      var self = this || Howler;
	
	      // If we don't have an AudioContext created yet, run the setup.
	      if (!self.ctx) {
	        setupAudioContext();
	      }
	
	      self._muted = muted;
	
	      // With Web Audio, we just need to mute the master gain.
	      if (self.usingWebAudio) {
	        self.masterGain.gain.value = muted ? 0 : self._volume;
	      }
	
	      // Loop through and mute all HTML5 Audio nodes.
	      for (var i=0; i<self._howls.length; i++) {
	        if (!self._howls[i]._webAudio) {
	          // Get all of the sounds in this Howl group.
	          var ids = self._howls[i]._getSoundIds();
	
	          // Loop through all sounds and mark the audio node as muted.
	          for (var j=0; j<ids.length; j++) {
	            var sound = self._howls[i]._soundById(ids[j]);
	
	            if (sound && sound._node) {
	              sound._node.muted = (muted) ? true : sound._muted;
	            }
	          }
	        }
	      }
	
	      return self;
	    },
	
	    /**
	     * Unload and destroy all currently loaded Howl objects.
	     * @return {Howler}
	     */
	    unload: function() {
	      var self = this || Howler;
	
	      for (var i=self._howls.length-1; i>=0; i--) {
	        self._howls[i].unload();
	      }
	
	      // Create a new AudioContext to make sure it is fully reset.
	      if (self.usingWebAudio && typeof self.ctx.close !== 'undefined') {
	        self.ctx.close();
	        self.ctx = null;
	        setupAudioContext();
	      }
	
	      return self;
	    },
	
	    /**
	     * Check for codec support of specific extension.
	     * @param  {String} ext Audio file extention.
	     * @return {Boolean}
	     */
	    codecs: function(ext) {
	      return (this || Howler)._codecs[ext.replace(/^x-/, '')];
	    },
	
	    /**
	     * Setup various state values for global tracking.
	     * @return {Howler}
	     */
	    _setup: function() {
	      var self = this || Howler;
	
	      // Keeps track of the suspend/resume state of the AudioContext.
	      self.state = self.ctx ? self.ctx.state || 'running' : 'running';
	
	      // Automatically begin the 30-second suspend process
	      self._autoSuspend();
	
	      // Check for supported codecs.
	      if (!self.noAudio) {
	        self._setupCodecs();
	      }
	
	      return self;
	    },
	
	    /**
	     * Check for browser support for various codecs and cache the results.
	     * @return {Howler}
	     */
	    _setupCodecs: function() {
	      var self = this || Howler;
	      var audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
	
	      if (!audioTest || typeof audioTest.canPlayType !== 'function') {
	        return self;
	      }
	
	      var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');
	
	      // Opera version <33 has mixed MP3 support, so we need to check for and block it.
	      var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
	      var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);
	
	      self._codecs = {
	        mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
	        mpeg: !!mpegTest,
	        opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
	        ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
	        oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
	        wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
	        aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
	        caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
	        m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
	        mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
	        weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
	        webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
	        dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
	        flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
	      };
	
	      return self;
	    },
	
	    /**
	     * Mobile browsers will only allow audio to be played after a user interaction.
	     * Attempt to automatically unlock audio on the first user interaction.
	     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
	     * @return {Howler}
	     */
	    _enableMobileAudio: function() {
	      var self = this || Howler;
	
	      // Only run this on mobile devices if audio isn't already eanbled.
	      var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(self._navigator && self._navigator.userAgent);
	      var isTouch = !!(('ontouchend' in window) || (self._navigator && self._navigator.maxTouchPoints > 0) || (self._navigator && self._navigator.msMaxTouchPoints > 0));
	      if (self._mobileEnabled || !self.ctx || (!isMobile && !isTouch)) {
	        return;
	      }
	
	      self._mobileEnabled = false;
	
	      // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
	      // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
	      // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
	      if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
	        self._mobileUnloaded = true;
	        self.unload();
	      }
	
	      // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
	      // http://stackoverflow.com/questions/24119684
	      self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);
	
	      // Call this method on touch start to create and play a buffer,
	      // then check if the audio actually played to determine if
	      // audio has now been unlocked on iOS, Android, etc.
	      var unlock = function() {
	        // Create an empty buffer.
	        var source = self.ctx.createBufferSource();
	        source.buffer = self._scratchBuffer;
	        source.connect(self.ctx.destination);
	
	        // Play the empty buffer.
	        if (typeof source.start === 'undefined') {
	          source.noteOn(0);
	        } else {
	          source.start(0);
	        }
	
	        // Setup a timeout to check that we are unlocked on the next event loop.
	        source.onended = function() {
	          source.disconnect(0);
	
	          // Update the unlocked state and prevent this check from happening again.
	          self._mobileEnabled = true;
	          self.mobileAutoEnable = false;
	
	          // Remove the touch start listener.
	          document.removeEventListener('touchend', unlock, true);
	        };
	      };
	
	      // Setup a touch start listener to attempt an unlock in.
	      document.addEventListener('touchend', unlock, true);
	
	      return self;
	    },
	
	    /**
	     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
	     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
	     * @return {Howler}
	     */
	    _autoSuspend: function() {
	      var self = this;
	
	      if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
	        return;
	      }
	
	      // Check if any sounds are playing.
	      for (var i=0; i<self._howls.length; i++) {
	        if (self._howls[i]._webAudio) {
	          for (var j=0; j<self._howls[i]._sounds.length; j++) {
	            if (!self._howls[i]._sounds[j]._paused) {
	              return self;
	            }
	          }
	        }
	      }
	
	      if (self._suspendTimer) {
	        clearTimeout(self._suspendTimer);
	      }
	
	      // If no sound has played after 30 seconds, suspend the context.
	      self._suspendTimer = setTimeout(function() {
	        if (!self.autoSuspend) {
	          return;
	        }
	
	        self._suspendTimer = null;
	        self.state = 'suspending';
	        self.ctx.suspend().then(function() {
	          self.state = 'suspended';
	
	          if (self._resumeAfterSuspend) {
	            delete self._resumeAfterSuspend;
	            self._autoResume();
	          }
	        });
	      }, 30000);
	
	      return self;
	    },
	
	    /**
	     * Automatically resume the Web Audio AudioContext when a new sound is played.
	     * @return {Howler}
	     */
	    _autoResume: function() {
	      var self = this;
	
	      if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
	        return;
	      }
	
	      if (self.state === 'running' && self._suspendTimer) {
	        clearTimeout(self._suspendTimer);
	        self._suspendTimer = null;
	      } else if (self.state === 'suspended') {
	        self.state = 'resuming';
	        self.ctx.resume().then(function() {
	          self.state = 'running';
	        });
	
	        if (self._suspendTimer) {
	          clearTimeout(self._suspendTimer);
	          self._suspendTimer = null;
	        }
	      } else if (self.state === 'suspending') {
	        self._resumeAfterSuspend = true;
	      }
	
	      return self;
	    }
	  };
	
	  // Setup the global audio controller.
	  var Howler = new HowlerGlobal();
	
	  /** Group Methods **/
	  /***************************************************************************/
	
	  /**
	   * Create an audio group controller.
	   * @param {Object} o Passed in properties for this group.
	   */
	  var Howl = function(o) {
	    var self = this;
	
	    // Throw an error if no source is provided.
	    if (!o.src || o.src.length === 0) {
	      console.error('An array of source files must be passed with any new Howl.');
	      return;
	    }
	
	    self.init(o);
	  };
	  Howl.prototype = {
	    /**
	     * Initialize a new Howl group object.
	     * @param  {Object} o Passed in properties for this group.
	     * @return {Howl}
	     */
	    init: function(o) {
	      var self = this;
	
	      // If we don't have an AudioContext created yet, run the setup.
	      if (!Howler.ctx) {
	        setupAudioContext();
	      }
	
	      // Setup user-defined default properties.
	      self._autoplay = o.autoplay || false;
	      self._format = (typeof o.format !== 'string') ? o.format : [o.format];
	      self._html5 = o.html5 || false;
	      self._muted = o.mute || false;
	      self._loop = o.loop || false;
	      self._pool = o.pool || 5;
	      self._preload = (typeof o.preload === 'boolean') ? o.preload : true;
	      self._rate = o.rate || 1;
	      self._sprite = o.sprite || {};
	      self._src = (typeof o.src !== 'string') ? o.src : [o.src];
	      self._volume = o.volume !== undefined ? o.volume : 1;
	
	      // Setup all other default properties.
	      self._duration = 0;
	      self._state = 'unloaded';
	      self._sounds = [];
	      self._endTimers = {};
	      self._queue = [];
	
	      // Setup event listeners.
	      self._onend = o.onend ? [{fn: o.onend}] : [];
	      self._onfade = o.onfade ? [{fn: o.onfade}] : [];
	      self._onload = o.onload ? [{fn: o.onload}] : [];
	      self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
	      self._onpause = o.onpause ? [{fn: o.onpause}] : [];
	      self._onplay = o.onplay ? [{fn: o.onplay}] : [];
	      self._onstop = o.onstop ? [{fn: o.onstop}] : [];
	      self._onmute = o.onmute ? [{fn: o.onmute}] : [];
	      self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
	      self._onrate = o.onrate ? [{fn: o.onrate}] : [];
	      self._onseek = o.onseek ? [{fn: o.onseek}] : [];
	
	      // Web Audio or HTML5 Audio?
	      self._webAudio = Howler.usingWebAudio && !self._html5;
	
	      // Automatically try to enable audio on iOS.
	      if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.mobileAutoEnable) {
	        Howler._enableMobileAudio();
	      }
	
	      // Keep track of this Howl group in the global controller.
	      Howler._howls.push(self);
	
	      // Load the source file unless otherwise specified.
	      if (self._preload) {
	        self.load();
	      }
	
	      return self;
	    },
	
	    /**
	     * Load the audio file.
	     * @return {Howler}
	     */
	    load: function() {
	      var self = this;
	      var url = null;
	
	      // If no audio is available, quit immediately.
	      if (Howler.noAudio) {
	        self._emit('loaderror', null, 'No audio support.');
	        return;
	      }
	
	      // Make sure our source is in an array.
	      if (typeof self._src === 'string') {
	        self._src = [self._src];
	      }
	
	      // Loop through the sources and pick the first one that is compatible.
	      for (var i=0; i<self._src.length; i++) {
	        var ext, str;
	
	        if (self._format && self._format[i]) {
	          // If an extension was specified, use that instead.
	          ext = self._format[i];
	        } else {
	          // Make sure the source is a string.
	          str = self._src[i];
	          if (typeof str !== 'string') {
	            self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
	            continue;
	          }
	
	          // Extract the file extension from the URL or base64 data URI.
	          ext = /^data:audio\/([^;,]+);/i.exec(str);
	          if (!ext) {
	            ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
	          }
	
	          if (ext) {
	            ext = ext[1].toLowerCase();
	          }
	        }
	
	        // Check if this extension is available.
	        if (Howler.codecs(ext)) {
	          url = self._src[i];
	          break;
	        }
	      }
	
	      if (!url) {
	        self._emit('loaderror', null, 'No codec support for selected audio sources.');
	        return;
	      }
	
	      self._src = url;
	      self._state = 'loading';
	
	      // If the hosting page is HTTPS and the source isn't,
	      // drop down to HTML5 Audio to avoid Mixed Content errors.
	      if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
	        self._html5 = true;
	        self._webAudio = false;
	      }
	
	      // Create a new sound object and add it to the pool.
	      new Sound(self);
	
	      // Load and decode the audio data for playback.
	      if (self._webAudio) {
	        loadBuffer(self);
	      }
	
	      return self;
	    },
	
	    /**
	     * Play a sound or resume previous playback.
	     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
	     * @param  {Boolean} internal Internal Use: true prevents event firing.
	     * @return {Number}          Sound ID.
	     */
	    play: function(sprite, internal) {
	      var self = this;
	      var id = null;
	
	      // Determine if a sprite, sound id or nothing was passed
	      if (typeof sprite === 'number') {
	        id = sprite;
	        sprite = null;
	      } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
	        // If the passed sprite doesn't exist, do nothing.
	        return null;
	      } else if (typeof sprite === 'undefined') {
	        // Use the default sound sprite (plays the full audio length).
	        sprite = '__default';
	
	        // Check if there is a single paused sound that isn't ended.
	        // If there is, play that sound. If not, continue as usual.
	        var num = 0;
	        for (var i=0; i<self._sounds.length; i++) {
	          if (self._sounds[i]._paused && !self._sounds[i]._ended) {
	            num++;
	            id = self._sounds[i]._id;
	          }
	        }
	
	        if (num === 1) {
	          sprite = null;
	        } else {
	          id = null;
	        }
	      }
	
	      // Get the selected node, or get one from the pool.
	      var sound = id ? self._soundById(id) : self._inactiveSound();
	
	      // If the sound doesn't exist, do nothing.
	      if (!sound) {
	        return null;
	      }
	
	      // Select the sprite definition.
	      if (id && !sprite) {
	        sprite = sound._sprite || '__default';
	      }
	
	      // If we have no sprite and the sound hasn't loaded, we must wait
	      // for the sound to load to get our audio's duration.
	      if (self._state !== 'loaded' && !self._sprite[sprite]) {
	        self._queue.push({
	          event: 'play',
	          action: function() {
	            self.play(self._soundById(sound._id) ? sound._id : undefined);
	          }
	        });
	
	        return sound._id;
	      }
	
	      // Don't play the sound if an id was passed and it is already playing.
	      if (id && !sound._paused) {
	        // Trigger the play event, in order to keep iterating through queue.
	        if (!internal) {
	          setTimeout(function() {
	            self._emit('play', sound._id);
	          }, 0);
	        }
	
	        return sound._id;
	      }
	
	      // Make sure the AudioContext isn't suspended, and resume it if it is.
	      if (self._webAudio) {
	        Howler._autoResume();
	      }
	
	      // Determine how long to play for and where to start playing.
	      var seek = sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000;
	      var duration = ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek;
	      var timeout = (duration * 1000) / Math.abs(sound._rate);
	
	      // Update the parameters of the sound
	      sound._paused = false;
	      sound._ended = false;
	      sound._sprite = sprite;
	      sound._seek = seek;
	      sound._start = self._sprite[sprite][0] / 1000;
	      sound._stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
	      sound._loop = !!(sound._loop || self._sprite[sprite][2]);
	
	      // Begin the actual playback.
	      var node = sound._node;
	      if (self._webAudio) {
	        // Fire this when the sound is ready to play to begin Web Audio playback.
	        var playWebAudio = function() {
	          self._refreshBuffer(sound);
	
	          // Setup the playback params.
	          var vol = (sound._muted || self._muted) ? 0 : sound._volume;
	          node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
	          sound._playStart = Howler.ctx.currentTime;
	
	          // Play the sound using the supported method.
	          if (typeof node.bufferSource.start === 'undefined') {
	            sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
	          } else {
	            sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
	          }
	
	          // Start a new timer if none is present.
	          if (timeout !== Infinity) {
	            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
	          }
	
	          if (!internal) {
	            setTimeout(function() {
	              self._emit('play', sound._id);
	            }, 0);
	          }
	        };
	
	        if (self._state === 'loaded') {
	          playWebAudio();
	        } else {
	          // Wait for the audio to load and then begin playback.
	          self.once('load', playWebAudio, sound._id);
	
	          // Cancel the end timer.
	          self._clearTimer(sound._id);
	        }
	      } else {
	        // Fire this when the sound is ready to play to begin HTML5 Audio playback.
	        var playHtml5 = function() {
	          node.currentTime = seek;
	          node.muted = sound._muted || self._muted || Howler._muted || node.muted;
	          node.volume = sound._volume * Howler.volume();
	          node.playbackRate = sound._rate;
	
	          setTimeout(function() {
	            node.play();
	
	            // Setup the new end timer.
	            if (timeout !== Infinity) {
	              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
	            }
	
	            if (!internal) {
	              self._emit('play', sound._id);
	            }
	          }, 0);
	        };
	
	        // Play immediately if ready, or wait for the 'canplaythrough'e vent.
	        var loadedNoReadyState = (self._state === 'loaded' && (window && window.ejecta || !node.readyState && Howler._navigator.isCocoonJS));
	        if (node.readyState === 4 || loadedNoReadyState) {
	          playHtml5();
	        } else {
	          var listener = function() {
	            // Begin playback.
	            playHtml5();
	
	            // Clear this listener.
	            node.removeEventListener(Howler._canPlayEvent, listener, false);
	          };
	          node.addEventListener(Howler._canPlayEvent, listener, false);
	
	          // Cancel the end timer.
	          self._clearTimer(sound._id);
	        }
	      }
	
	      return sound._id;
	    },
	
	    /**
	     * Pause playback and save current position.
	     * @param  {Number} id The sound ID (empty to pause all in group).
	     * @return {Howl}
	     */
	    pause: function(id) {
	      var self = this;
	
	      // If the sound hasn't loaded, add it to the load queue to pause when capable.
	      if (self._state !== 'loaded') {
	        self._queue.push({
	          event: 'pause',
	          action: function() {
	            self.pause(id);
	          }
	        });
	
	        return self;
	      }
	
	      // If no id is passed, get all ID's to be paused.
	      var ids = self._getSoundIds(id);
	
	      for (var i=0; i<ids.length; i++) {
	        // Clear the end timer.
	        self._clearTimer(ids[i]);
	
	        // Get the sound.
	        var sound = self._soundById(ids[i]);
	
	        if (sound && !sound._paused) {
	          // Reset the seek position.
	          sound._seek = self.seek(ids[i]);
	          sound._rateSeek = 0;
	          sound._paused = true;
	
	          // Stop currently running fades.
	          self._stopFade(ids[i]);
	
	          if (sound._node) {
	            if (self._webAudio) {
	              // make sure the sound has been created
	              if (!sound._node.bufferSource) {
	                return self;
	              }
	
	              if (typeof sound._node.bufferSource.stop === 'undefined') {
	                sound._node.bufferSource.noteOff(0);
	              } else {
	                sound._node.bufferSource.stop(0);
	              }
	
	              // Clean up the buffer source.
	              self._cleanBuffer(sound._node);
	            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
	              sound._node.pause();
	            }
	          }
	
	          // Fire the pause event, unless `true` is passed as the 2nd argument.
	          if (!arguments[1]) {
	            self._emit('pause', sound._id);
	          }
	        }
	      }
	
	      return self;
	    },
	
	    /**
	     * Stop playback and reset to start.
	     * @param  {Number} id The sound ID (empty to stop all in group).
	     * @param  {Boolean} internal Internal Use: true prevents event firing.
	     * @return {Howl}
	     */
	    stop: function(id, internal) {
	      var self = this;
	
	      // If the sound hasn't loaded, add it to the load queue to stop when capable.
	      if (self._state !== 'loaded') {
	        self._queue.push({
	          event: 'stop',
	          action: function() {
	            self.stop(id);
	          }
	        });
	
	        return self;
	      }
	
	      // If no id is passed, get all ID's to be stopped.
	      var ids = self._getSoundIds(id);
	
	      for (var i=0; i<ids.length; i++) {
	        // Clear the end timer.
	        self._clearTimer(ids[i]);
	
	        // Get the sound.
	        var sound = self._soundById(ids[i]);
	
	        if (sound) {
	          // Reset the seek position.
	          sound._seek = sound._start || 0;
	          sound._rateSeek = 0;
	          sound._paused = true;
	          sound._ended = true;
	
	          // Stop currently running fades.
	          self._stopFade(ids[i]);
	
	          if (sound._node) {
	            if (self._webAudio) {
	              // make sure the sound has been created
	              if (!sound._node.bufferSource) {
	                if (!internal) {
	                  self._emit('stop', sound._id);
	                }
	
	                return self;
	              }
	
	              if (typeof sound._node.bufferSource.stop === 'undefined') {
	                sound._node.bufferSource.noteOff(0);
	              } else {
	                sound._node.bufferSource.stop(0);
	              }
	
	              // Clean up the buffer source.
	              self._cleanBuffer(sound._node);
	            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
	              sound._node.currentTime = sound._start || 0;
	              sound._node.pause();
	            }
	          }
	        }
	
	        if (sound && !internal) {
	          self._emit('stop', sound._id);
	        }
	      }
	
	      return self;
	    },
	
	    /**
	     * Mute/unmute a single sound or all sounds in this Howl group.
	     * @param  {Boolean} muted Set to true to mute and false to unmute.
	     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
	     * @return {Howl}
	     */
	    mute: function(muted, id) {
	      var self = this;
	
	      // If the sound hasn't loaded, add it to the load queue to mute when capable.
	      if (self._state !== 'loaded') {
	        self._queue.push({
	          event: 'mute',
	          action: function() {
	            self.mute(muted, id);
	          }
	        });
	
	        return self;
	      }
	
	      // If applying mute/unmute to all sounds, update the group's value.
	      if (typeof id === 'undefined') {
	        if (typeof muted === 'boolean') {
	          self._muted = muted;
	        } else {
	          return self._muted;
	        }
	      }
	
	      // If no id is passed, get all ID's to be muted.
	      var ids = self._getSoundIds(id);
	
	      for (var i=0; i<ids.length; i++) {
	        // Get the sound.
	        var sound = self._soundById(ids[i]);
	
	        if (sound) {
	          sound._muted = muted;
	
	          if (self._webAudio && sound._node) {
	            sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
	          } else if (sound._node) {
	            sound._node.muted = Howler._muted ? true : muted;
	          }
	
	          self._emit('mute', sound._id);
	        }
	      }
	
	      return self;
	    },
	
	    /**
	     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
	     *   volume() -> Returns the group's volume value.
	     *   volume(id) -> Returns the sound id's current volume.
	     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
	     *   volume(vol, id) -> Sets the volume of passed sound id.
	     * @return {Howl/Number} Returns self or current volume.
	     */
	    volume: function() {
	      var self = this;
	      var args = arguments;
	      var vol, id;
	
	      // Determine the values based on arguments.
	      if (args.length === 0) {
	        // Return the value of the groups' volume.
	        return self._volume;
	      } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
	        // First check if this is an ID, and if not, assume it is a new volume.
	        var ids = self._getSoundIds();
	        var index = ids.indexOf(args[0]);
	        if (index >= 0) {
	          id = parseInt(args[0], 10);
	        } else {
	          vol = parseFloat(args[0]);
	        }
	      } else if (args.length >= 2) {
	        vol = parseFloat(args[0]);
	        id = parseInt(args[1], 10);
	      }
	
	      // Update the volume or return the current volume.
	      var sound;
	      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
	        // If the sound hasn't loaded, add it to the load queue to change volume when capable.
	        if (self._state !== 'loaded') {
	          self._queue.push({
	            event: 'volume',
	            action: function() {
	              self.volume.apply(self, args);
	            }
	          });
	
	          return self;
	        }
	
	        // Set the group volume.
	        if (typeof id === 'undefined') {
	          self._volume = vol;
	        }
	
	        // Update one or all volumes.
	        id = self._getSoundIds(id);
	        for (var i=0; i<id.length; i++) {
	          // Get the sound.
	          sound = self._soundById(id[i]);
	
	          if (sound) {
	            sound._volume = vol;
	
	            // Stop currently running fades.
	            if (!args[2]) {
	              self._stopFade(id[i]);
	            }
	
	            if (self._webAudio && sound._node && !sound._muted) {
	              sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
	            } else if (sound._node && !sound._muted) {
	              sound._node.volume = vol * Howler.volume();
	            }
	
	            self._emit('volume', sound._id);
	          }
	        }
	      } else {
	        sound = id ? self._soundById(id) : self._sounds[0];
	        return sound ? sound._volume : 0;
	      }
	
	      return self;
	    },
	
	    /**
	     * Fade a currently playing sound between two volumes (if no id is passsed, all sounds will fade).
	     * @param  {Number} from The value to fade from (0.0 to 1.0).
	     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
	     * @param  {Number} len  Time in milliseconds to fade.
	     * @param  {Number} id   The sound id (omit to fade all sounds).
	     * @return {Howl}
	     */
	    fade: function(from, to, len, id) {
	      var self = this;
	      var diff = Math.abs(from - to);
	      var dir = from > to ? 'out' : 'in';
	      var steps = diff / 0.01;
	      var stepLen = (steps > 0) ? len / steps : len;
	
	      // Since browsers clamp timeouts to 4ms, we need to clamp our steps to that too.
	      if (stepLen < 4) {
	        steps = Math.ceil(steps / (4 / stepLen));
	        stepLen = 4;
	      }
	
	      // If the sound hasn't loaded, add it to the load queue to fade when capable.
	      if (self._state !== 'loaded') {
	        self._queue.push({
	          event: 'fade',
	          action: function() {
	            self.fade(from, to, len, id);
	          }
	        });
	
	        return self;
	      }
	
	      // Set the volume to the start position.
	      self.volume(from, id);
	
	      // Fade the volume of one or all sounds.
	      var ids = self._getSoundIds(id);
	      for (var i=0; i<ids.length; i++) {
	        // Get the sound.
	        var sound = self._soundById(ids[i]);
	
	        // Create a linear fade or fall back to timeouts with HTML5 Audio.
	        if (sound) {
	          // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
	          if (!id) {
	            self._stopFade(ids[i]);
	          }
	
	          // If we are using Web Audio, let the native methods do the actual fade.
	          if (self._webAudio && !sound._muted) {
	            var currentTime = Howler.ctx.currentTime;
	            var end = currentTime + (len / 1000);
	            sound._volume = from;
	            sound._node.gain.setValueAtTime(from, currentTime);
	            sound._node.gain.linearRampToValueAtTime(to, end);
	          }
	
	          var vol = from;
	          sound._interval = setInterval(function(soundId, sound) {
	            // Update the volume amount, but only if the volume should change.
	            if (steps > 0) {
	              vol += (dir === 'in' ? 0.01 : -0.01);
	            }
	
	            // Make sure the volume is in the right bounds.
	            vol = Math.max(0, vol);
	            vol = Math.min(1, vol);
	
	            // Round to within 2 decimal points.
	            vol = Math.round(vol * 100) / 100;
	
	            // Change the volume.
	            if (self._webAudio) {
	              if (typeof id === 'undefined') {
	                self._volume = vol;
	              }
	
	              sound._volume = vol;
	            } else {
	              self.volume(vol, soundId, true);
	            }
	
	            // When the fade is complete, stop it and fire event.
	            if (vol === to) {
	              clearInterval(sound._interval);
	              sound._interval = null;
	              self.volume(vol, soundId);
	              self._emit('fade', soundId);
	            }
	          }.bind(self, ids[i], sound), stepLen);
	        }
	      }
	
	      return self;
	    },
	
	    /**
	     * Internal method that stops the currently playing fade when
	     * a new fade starts, volume is changed or the sound is stopped.
	     * @param  {Number} id The sound id.
	     * @return {Howl}
	     */
	    _stopFade: function(id) {
	      var self = this;
	      var sound = self._soundById(id);
	
	      if (sound && sound._interval) {
	        if (self._webAudio) {
	          sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
	        }
	
	        clearInterval(sound._interval);
	        sound._interval = null;
	        self._emit('fade', id);
	      }
	
	      return self;
	    },
	
	    /**
	     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
	     *   loop() -> Returns the group's loop value.
	     *   loop(id) -> Returns the sound id's loop value.
	     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
	     *   loop(loop, id) -> Sets the loop value of passed sound id.
	     * @return {Howl/Boolean} Returns self or current loop value.
	     */
	    loop: function() {
	      var self = this;
	      var args = arguments;
	      var loop, id, sound;
	
	      // Determine the values for loop and id.
	      if (args.length === 0) {
	        // Return the grou's loop value.
	        return self._loop;
	      } else if (args.length === 1) {
	        if (typeof args[0] === 'boolean') {
	          loop = args[0];
	          self._loop = loop;
	        } else {
	          // Return this sound's loop value.
	          sound = self._soundById(parseInt(args[0], 10));
	          return sound ? sound._loop : false;
	        }
	      } else if (args.length === 2) {
	        loop = args[0];
	        id = parseInt(args[1], 10);
	      }
	
	      // If no id is passed, get all ID's to be looped.
	      var ids = self._getSoundIds(id);
	      for (var i=0; i<ids.length; i++) {
	        sound = self._soundById(ids[i]);
	
	        if (sound) {
	          sound._loop = loop;
	          if (self._webAudio && sound._node && sound._node.bufferSource) {
	            sound._node.bufferSource.loop = loop;
	            if (loop) {
	              sound._node.bufferSource.loopStart = sound._start || 0;
	              sound._node.bufferSource.loopEnd = sound._stop;
	            }
	          }
	        }
	      }
	
	      return self;
	    },
	
	    /**
	     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
	     *   rate() -> Returns the first sound node's current playback rate.
	     *   rate(id) -> Returns the sound id's current playback rate.
	     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
	     *   rate(rate, id) -> Sets the playback rate of passed sound id.
	     * @return {Howl/Number} Returns self or the current playback rate.
	     */
	    rate: function() {
	      var self = this;
	      var args = arguments;
	      var rate, id;
	
	      // Determine the values based on arguments.
	      if (args.length === 0) {
	        // We will simply return the current rate of the first node.
	        id = self._sounds[0]._id;
	      } else if (args.length === 1) {
	        // First check if this is an ID, and if not, assume it is a new rate value.
	        var ids = self._getSoundIds();
	        var index = ids.indexOf(args[0]);
	        if (index >= 0) {
	          id = parseInt(args[0], 10);
	        } else {
	          rate = parseFloat(args[0]);
	        }
	      } else if (args.length === 2) {
	        rate = parseFloat(args[0]);
	        id = parseInt(args[1], 10);
	      }
	
	      // Update the playback rate or return the current value.
	      var sound;
	      if (typeof rate === 'number') {
	        // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
	        if (self._state !== 'loaded') {
	          self._queue.push({
	            event: 'rate',
	            action: function() {
	              self.rate.apply(self, args);
	            }
	          });
	
	          return self;
	        }
	
	        // Set the group rate.
	        if (typeof id === 'undefined') {
	          self._rate = rate;
	        }
	
	        // Update one or all volumes.
	        id = self._getSoundIds(id);
	        for (var i=0; i<id.length; i++) {
	          // Get the sound.
	          sound = self._soundById(id[i]);
	
	          if (sound) {
	            // Keep track of our position when the rate changed and update the playback
	            // start position so we can properly adjust the seek position for time elapsed.
	            sound._rateSeek = self.seek(id[i]);
	            sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
	            sound._rate = rate;
	
	            // Change the playback rate.
	            if (self._webAudio && sound._node && sound._node.bufferSource) {
	              sound._node.bufferSource.playbackRate.value = rate;
	            } else if (sound._node) {
	              sound._node.playbackRate = rate;
	            }
	
	            // Reset the timers.
	            var seek = self.seek(id[i]);
	            var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
	            var timeout = (duration * 1000) / Math.abs(sound._rate);
	
	            // Start a new end timer if sound is already playing.
	            if (self._endTimers[id[i]] || !sound._paused) {
	              self._clearTimer(id[i]);
	              self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
	            }
	
	            self._emit('rate', sound._id);
	          }
	        }
	      } else {
	        sound = self._soundById(id);
	        return sound ? sound._rate : self._rate;
	      }
	
	      return self;
	    },
	
	    /**
	     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
	     *   seek() -> Returns the first sound node's current seek position.
	     *   seek(id) -> Returns the sound id's current seek position.
	     *   seek(seek) -> Sets the seek position of the first sound node.
	     *   seek(seek, id) -> Sets the seek position of passed sound id.
	     * @return {Howl/Number} Returns self or the current seek position.
	     */
	    seek: function() {
	      var self = this;
	      var args = arguments;
	      var seek, id;
	
	      // Determine the values based on arguments.
	      if (args.length === 0) {
	        // We will simply return the current position of the first node.
	        id = self._sounds[0]._id;
	      } else if (args.length === 1) {
	        // First check if this is an ID, and if not, assume it is a new seek position.
	        var ids = self._getSoundIds();
	        var index = ids.indexOf(args[0]);
	        if (index >= 0) {
	          id = parseInt(args[0], 10);
	        } else {
	          id = self._sounds[0]._id;
	          seek = parseFloat(args[0]);
	        }
	      } else if (args.length === 2) {
	        seek = parseFloat(args[0]);
	        id = parseInt(args[1], 10);
	      }
	
	      // If there is no ID, bail out.
	      if (typeof id === 'undefined') {
	        return self;
	      }
	
	      // If the sound hasn't loaded, add it to the load queue to seek when capable.
	      if (self._state !== 'loaded') {
	        self._queue.push({
	          event: 'seek',
	          action: function() {
	            self.seek.apply(self, args);
	          }
	        });
	
	        return self;
	      }
	
	      // Get the sound.
	      var sound = self._soundById(id);
	
	      if (sound) {
	        if (typeof seek === 'number' && seek >= 0) {
	          // Pause the sound and update position for restarting playback.
	          var playing = self.playing(id);
	          if (playing) {
	            self.pause(id, true);
	          }
	
	          // Move the position of the track and cancel timer.
	          sound._seek = seek;
	          sound._ended = false;
	          self._clearTimer(id);
	
	          // Restart the playback if the sound was playing.
	          if (playing) {
	            self.play(id, true);
	          }
	
	          // Update the seek position for HTML5 Audio.
	          if (!self._webAudio && sound._node) {
	            sound._node.currentTime = seek;
	          }
	
	          self._emit('seek', id);
	        } else {
	          if (self._webAudio) {
	            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
	            var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
	            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
	          } else {
	            return sound._node.currentTime;
	          }
	        }
	      }
	
	      return self;
	    },
	
	    /**
	     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
	     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
	     * @return {Boolean} True if playing and false if not.
	     */
	    playing: function(id) {
	      var self = this;
	
	      // Check the passed sound ID (if any).
	      if (typeof id === 'number') {
	        var sound = self._soundById(id);
	        return sound ? !sound._paused : false;
	      }
	
	      // Otherwise, loop through all sounds and check if any are playing.
	      for (var i=0; i<self._sounds.length; i++) {
	        if (!self._sounds[i]._paused) {
	          return true;
	        }
	      }
	
	      return false;
	    },
	
	    /**
	     * Get the duration of this sound. Passing a sound id will return the sprite duration.
	     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
	     * @return {Number} Audio duration in seconds.
	     */
	    duration: function(id) {
	      var self = this;
	      var duration = self._duration;
	
	      // If we pass an ID, get the sound and return the sprite length.
	      var sound = self._soundById(id);
	      if (sound) {
	        duration = self._sprite[sound._sprite][1] / 1000;
	      }
	
	      return duration;
	    },
	
	    /**
	     * Returns the current loaded state of this Howl.
	     * @return {String} 'unloaded', 'loading', 'loaded'
	     */
	    state: function() {
	      return this._state;
	    },
	
	    /**
	     * Unload and destroy the current Howl object.
	     * This will immediately stop all sound instances attached to this group.
	     */
	    unload: function() {
	      var self = this;
	
	      // Stop playing any active sounds.
	      var sounds = self._sounds;
	      for (var i=0; i<sounds.length; i++) {
	        // Stop the sound if it is currently playing.
	        if (!sounds[i]._paused) {
	          self.stop(sounds[i]._id);
	          self._emit('end', sounds[i]._id);
	        }
	
	        // Remove the source or disconnect.
	        if (!self._webAudio) {
	          // Set the source to 0-second silence to stop any downloading.
	          sounds[i]._node.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';
	
	          // Remove any event listeners.
	          sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
	          sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
	        }
	
	        // Empty out all of the nodes.
	        delete sounds[i]._node;
	
	        // Make sure all timers are cleared out.
	        self._clearTimer(sounds[i]._id);
	
	        // Remove the references in the global Howler object.
	        var index = Howler._howls.indexOf(self);
	        if (index >= 0) {
	          Howler._howls.splice(index, 1);
	        }
	      }
	
	      // Delete this sound from the cache (if no other Howl is using it).
	      var remCache = true;
	      for (i=0; i<Howler._howls.length; i++) {
	        if (Howler._howls[i]._src === self._src) {
	          remCache = false;
	          break;
	        }
	      }
	
	      if (cache && remCache) {
	        delete cache[self._src];
	      }
	
	      // Clear global errors.
	      Howler.noAudio = false;
	
	      // Clear out `self`.
	      self._state = 'unloaded';
	      self._sounds = [];
	      self = null;
	
	      return null;
	    },
	
	    /**
	     * Listen to a custom event.
	     * @param  {String}   event Event name.
	     * @param  {Function} fn    Listener to call.
	     * @param  {Number}   id    (optional) Only listen to events for this sound.
	     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
	     * @return {Howl}
	     */
	    on: function(event, fn, id, once) {
	      var self = this;
	      var events = self['_on' + event];
	
	      if (typeof fn === 'function') {
	        events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
	      }
	
	      return self;
	    },
	
	    /**
	     * Remove a custom event. Call without parameters to remove all events.
	     * @param  {String}   event Event name.
	     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
	     * @param  {Number}   id    (optional) Only remove events for this sound.
	     * @return {Howl}
	     */
	    off: function(event, fn, id) {
	      var self = this;
	      var events = self['_on' + event];
	      var i = 0;
	
	      if (fn) {
	        // Loop through event store and remove the passed function.
	        for (i=0; i<events.length; i++) {
	          if (fn === events[i].fn && id === events[i].id) {
	            events.splice(i, 1);
	            break;
	          }
	        }
	      } else if (event) {
	        // Clear out all events of this type.
	        self['_on' + event] = [];
	      } else {
	        // Clear out all events of every type.
	        var keys = Object.keys(self);
	        for (i=0; i<keys.length; i++) {
	          if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
	            self[keys[i]] = [];
	          }
	        }
	      }
	
	      return self;
	    },
	
	    /**
	     * Listen to a custom event and remove it once fired.
	     * @param  {String}   event Event name.
	     * @param  {Function} fn    Listener to call.
	     * @param  {Number}   id    (optional) Only listen to events for this sound.
	     * @return {Howl}
	     */
	    once: function(event, fn, id) {
	      var self = this;
	
	      // Setup the event listener.
	      self.on(event, fn, id, 1);
	
	      return self;
	    },
	
	    /**
	     * Emit all events of a specific type and pass the sound id.
	     * @param  {String} event Event name.
	     * @param  {Number} id    Sound ID.
	     * @param  {Number} msg   Message to go with event.
	     * @return {Howl}
	     */
	    _emit: function(event, id, msg) {
	      var self = this;
	      var events = self['_on' + event];
	
	      // Loop through event store and fire all functions.
	      for (var i=events.length-1; i>=0; i--) {
	        if (!events[i].id || events[i].id === id || event === 'load') {
	          setTimeout(function(fn) {
	            fn.call(this, id, msg);
	          }.bind(self, events[i].fn), 0);
	
	          // If this event was setup with `once`, remove it.
	          if (events[i].once) {
	            self.off(event, events[i].fn, events[i].id);
	          }
	        }
	      }
	
	      return self;
	    },
	
	    /**
	     * Queue of actions initiated before the sound has loaded.
	     * These will be called in sequence, with the next only firing
	     * after the previous has finished executing (even if async like play).
	     * @return {Howl}
	     */
	    _loadQueue: function() {
	      var self = this;
	
	      if (self._queue.length > 0) {
	        var task = self._queue[0];
	
	        // don't move onto the next task until this one is done
	        self.once(task.event, function() {
	          self._queue.shift();
	          self._loadQueue();
	        });
	
	        task.action();
	      }
	
	      return self;
	    },
	
	    /**
	     * Fired when playback ends at the end of the duration.
	     * @param  {Sound} sound The sound object to work with.
	     * @return {Howl}
	     */
	    _ended: function(sound) {
	      var self = this;
	      var sprite = sound._sprite;
	
	      // Should this sound loop?
	      var loop = !!(sound._loop || self._sprite[sprite][2]);
	
	      // Fire the ended event.
	      self._emit('end', sound._id);
	
	      // Restart the playback for HTML5 Audio loop.
	      if (!self._webAudio && loop) {
	        self.stop(sound._id, true).play(sound._id);
	      }
	
	      // Restart this timer if on a Web Audio loop.
	      if (self._webAudio && loop) {
	        self._emit('play', sound._id);
	        sound._seek = sound._start || 0;
	        sound._rateSeek = 0;
	        sound._playStart = Howler.ctx.currentTime;
	
	        var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
	        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
	      }
	
	      // Mark the node as paused.
	      if (self._webAudio && !loop) {
	        sound._paused = true;
	        sound._ended = true;
	        sound._seek = sound._start || 0;
	        sound._rateSeek = 0;
	        self._clearTimer(sound._id);
	
	        // Clean up the buffer source.
	        self._cleanBuffer(sound._node);
	
	        // Attempt to auto-suspend AudioContext if no sounds are still playing.
	        Howler._autoSuspend();
	      }
	
	      // When using a sprite, end the track.
	      if (!self._webAudio && !loop) {
	        self.stop(sound._id);
	      }
	
	      return self;
	    },
	
	    /**
	     * Clear the end timer for a sound playback.
	     * @param  {Number} id The sound ID.
	     * @return {Howl}
	     */
	    _clearTimer: function(id) {
	      var self = this;
	
	      if (self._endTimers[id]) {
	        clearTimeout(self._endTimers[id]);
	        delete self._endTimers[id];
	      }
	
	      return self;
	    },
	
	    /**
	     * Return the sound identified by this ID, or return null.
	     * @param  {Number} id Sound ID
	     * @return {Object}    Sound object or null.
	     */
	    _soundById: function(id) {
	      var self = this;
	
	      // Loop through all sounds and find the one with this ID.
	      for (var i=0; i<self._sounds.length; i++) {
	        if (id === self._sounds[i]._id) {
	          return self._sounds[i];
	        }
	      }
	
	      return null;
	    },
	
	    /**
	     * Return an inactive sound from the pool or create a new one.
	     * @return {Sound} Sound playback object.
	     */
	    _inactiveSound: function() {
	      var self = this;
	
	      self._drain();
	
	      // Find the first inactive node to recycle.
	      for (var i=0; i<self._sounds.length; i++) {
	        if (self._sounds[i]._ended) {
	          return self._sounds[i].reset();
	        }
	      }
	
	      // If no inactive node was found, create a new one.
	      return new Sound(self);
	    },
	
	    /**
	     * Drain excess inactive sounds from the pool.
	     */
	    _drain: function() {
	      var self = this;
	      var limit = self._pool;
	      var cnt = 0;
	      var i = 0;
	
	      // If there are less sounds than the max pool size, we are done.
	      if (self._sounds.length < limit) {
	        return;
	      }
	
	      // Count the number of inactive sounds.
	      for (i=0; i<self._sounds.length; i++) {
	        if (self._sounds[i]._ended) {
	          cnt++;
	        }
	      }
	
	      // Remove excess inactive sounds, going in reverse order.
	      for (i=self._sounds.length - 1; i>=0; i--) {
	        if (cnt <= limit) {
	          return;
	        }
	
	        if (self._sounds[i]._ended) {
	          // Disconnect the audio source when using Web Audio.
	          if (self._webAudio && self._sounds[i]._node) {
	            self._sounds[i]._node.disconnect(0);
	          }
	
	          // Remove sounds until we have the pool size.
	          self._sounds.splice(i, 1);
	          cnt--;
	        }
	      }
	    },
	
	    /**
	     * Get all ID's from the sounds pool.
	     * @param  {Number} id Only return one ID if one is passed.
	     * @return {Array}    Array of IDs.
	     */
	    _getSoundIds: function(id) {
	      var self = this;
	
	      if (typeof id === 'undefined') {
	        var ids = [];
	        for (var i=0; i<self._sounds.length; i++) {
	          ids.push(self._sounds[i]._id);
	        }
	
	        return ids;
	      } else {
	        return [id];
	      }
	    },
	
	    /**
	     * Load the sound back into the buffer source.
	     * @param  {Sound} sound The sound object to work with.
	     * @return {Howl}
	     */
	    _refreshBuffer: function(sound) {
	      var self = this;
	
	      // Setup the buffer source for playback.
	      sound._node.bufferSource = Howler.ctx.createBufferSource();
	      sound._node.bufferSource.buffer = cache[self._src];
	
	      // Connect to the correct node.
	      if (sound._panner) {
	        sound._node.bufferSource.connect(sound._panner);
	      } else {
	        sound._node.bufferSource.connect(sound._node);
	      }
	
	      // Setup looping and playback rate.
	      sound._node.bufferSource.loop = sound._loop;
	      if (sound._loop) {
	        sound._node.bufferSource.loopStart = sound._start || 0;
	        sound._node.bufferSource.loopEnd = sound._stop;
	      }
	      sound._node.bufferSource.playbackRate.value = sound._rate;
	
	      return self;
	    },
	
	    /**
	     * Prevent memory leaks by cleaning up the buffer source after playback.
	     * @param  {Object} node Sound's audio node containing the buffer source.
	     * @return {Howl}
	     */
	    _cleanBuffer: function(node) {
	      var self = this;
	
	      if (self._scratchBuffer) {
	        node.bufferSource.onended = null;
	        node.bufferSource.disconnect(0);
	        try { node.bufferSource.buffer = self._scratchBuffer; } catch(e) {}
	      }
	      node.bufferSource = null;
	
	      return self;
	    }
	  };
	
	  /** Single Sound Methods **/
	  /***************************************************************************/
	
	  /**
	   * Setup the sound object, which each node attached to a Howl group is contained in.
	   * @param {Object} howl The Howl parent group.
	   */
	  var Sound = function(howl) {
	    this._parent = howl;
	    this.init();
	  };
	  Sound.prototype = {
	    /**
	     * Initialize a new Sound object.
	     * @return {Sound}
	     */
	    init: function() {
	      var self = this;
	      var parent = self._parent;
	
	      // Setup the default parameters.
	      self._muted = parent._muted;
	      self._loop = parent._loop;
	      self._volume = parent._volume;
	      self._muted = parent._muted;
	      self._rate = parent._rate;
	      self._seek = 0;
	      self._paused = true;
	      self._ended = true;
	      self._sprite = '__default';
	
	      // Generate a unique ID for this sound.
	      self._id = Math.round(Date.now() * Math.random());
	
	      // Add itself to the parent's pool.
	      parent._sounds.push(self);
	
	      // Create the new node.
	      self.create();
	
	      return self;
	    },
	
	    /**
	     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
	     * @return {Sound}
	     */
	    create: function() {
	      var self = this;
	      var parent = self._parent;
	      var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;
	
	      if (parent._webAudio) {
	        // Create the gain node for controlling volume (the source will connect to this).
	        self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
	        self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
	        self._node.paused = true;
	        self._node.connect(Howler.masterGain);
	      } else {
	        self._node = new Audio();
	
	        // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
	        self._errorFn = self._errorListener.bind(self);
	        self._node.addEventListener('error', self._errorFn, false);
	
	        // Listen for 'canplaythrough' event to let us know the sound is ready.
	        self._loadFn = self._loadListener.bind(self);
	        self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);
	
	        // Setup the new audio node.
	        self._node.src = parent._src;
	        self._node.preload = 'auto';
	        self._node.volume = volume * Howler.volume();
	
	        // Begin loading the source.
	        self._node.load();
	      }
	
	      return self;
	    },
	
	    /**
	     * Reset the parameters of this sound to the original state (for recycle).
	     * @return {Sound}
	     */
	    reset: function() {
	      var self = this;
	      var parent = self._parent;
	
	      // Reset all of the parameters of this sound.
	      self._muted = parent._muted;
	      self._loop = parent._loop;
	      self._volume = parent._volume;
	      self._muted = parent._muted;
	      self._rate = parent._rate;
	      self._seek = 0;
	      self._rateSeek = 0;
	      self._paused = true;
	      self._ended = true;
	      self._sprite = '__default';
	
	      // Generate a new ID so that it isn't confused with the previous sound.
	      self._id = Math.round(Date.now() * Math.random());
	
	      return self;
	    },
	
	    /**
	     * HTML5 Audio error listener callback.
	     */
	    _errorListener: function() {
	      var self = this;
	
	      // Fire an error event and pass back the code.
	      self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);
	
	      // Clear the event listener.
	      self._node.removeEventListener('error', self._errorListener, false);
	    },
	
	    /**
	     * HTML5 Audio canplaythrough listener callback.
	     */
	    _loadListener: function() {
	      var self = this;
	      var parent = self._parent;
	
	      // Round up the duration to account for the lower precision in HTML5 Audio.
	      parent._duration = Math.ceil(self._node.duration * 10) / 10;
	
	      // Setup a sprite if none is defined.
	      if (Object.keys(parent._sprite).length === 0) {
	        parent._sprite = {__default: [0, parent._duration * 1000]};
	      }
	
	      if (parent._state !== 'loaded') {
	        parent._state = 'loaded';
	        parent._emit('load');
	        parent._loadQueue();
	      }
	
	      if (parent._autoplay) {
	        parent.play();
	      }
	
	      // Clear the event listener.
	      self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
	    }
	  };
	
	  /** Helper Methods **/
	  /***************************************************************************/
	
	  var cache = {};
	
	  /**
	   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
	   * @param  {Howl} self
	   */
	  var loadBuffer = function(self) {
	    var url = self._src;
	
	    // Check if the buffer has already been cached and use it instead.
	    if (cache[url]) {
	      // Set the duration from the cache.
	      self._duration = cache[url].duration;
	
	      // Load the sound into this Howl.
	      loadSound(self);
	
	      return;
	    }
	
	    if (/^data:[^;]+;base64,/.test(url)) {
	      // Decode the base64 data URI without XHR, since some browsers don't support it.
	      var data = atob(url.split(',')[1]);
	      var dataView = new Uint8Array(data.length);
	      for (var i=0; i<data.length; ++i) {
	        dataView[i] = data.charCodeAt(i);
	      }
	
	      decodeAudioData(dataView.buffer, self);
	    } else {
	      // Load the buffer from the URL.
	      var xhr = new XMLHttpRequest();
	      xhr.open('GET', url, true);
	      xhr.responseType = 'arraybuffer';
	      xhr.onload = function() {
	        // Make sure we get a successful response back.
	        var code = (xhr.status + '')[0];
	        if (code !== '0' && code !== '2' && code !== '3') {
	          self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
	          return;
	        }
	
	        decodeAudioData(xhr.response, self);
	      };
	      xhr.onerror = function() {
	        // If there is an error, switch to HTML5 Audio.
	        if (self._webAudio) {
	          self._html5 = true;
	          self._webAudio = false;
	          self._sounds = [];
	          delete cache[url];
	          self.load();
	        }
	      };
	      safeXhrSend(xhr);
	    }
	  };
	
	  /**
	   * Send the XHR request wrapped in a try/catch.
	   * @param  {Object} xhr XHR to send.
	   */
	  var safeXhrSend = function(xhr) {
	    try {
	      xhr.send();
	    } catch (e) {
	      xhr.onerror();
	    }
	  };
	
	  /**
	   * Decode audio data from an array buffer.
	   * @param  {ArrayBuffer} arraybuffer The audio data.
	   * @param  {Howl}        self
	   */
	  var decodeAudioData = function(arraybuffer, self) {
	    // Decode the buffer into an audio source.
	    Howler.ctx.decodeAudioData(arraybuffer, function(buffer) {
	      if (buffer && self._sounds.length > 0) {
	        cache[self._src] = buffer;
	        loadSound(self, buffer);
	      }
	    }, function() {
	      self._emit('loaderror', null, 'Decoding audio data failed.');
	    });
	  };
	
	  /**
	   * Sound is now loaded, so finish setting everything up and fire the loaded event.
	   * @param  {Howl} self
	   * @param  {Object} buffer The decoded buffer sound source.
	   */
	  var loadSound = function(self, buffer) {
	    // Set the duration.
	    if (buffer && !self._duration) {
	      self._duration = buffer.duration;
	    }
	
	    // Setup a sprite if none is defined.
	    if (Object.keys(self._sprite).length === 0) {
	      self._sprite = {__default: [0, self._duration * 1000]};
	    }
	
	    // Fire the loaded event.
	    if (self._state !== 'loaded') {
	      self._state = 'loaded';
	      self._emit('load');
	      self._loadQueue();
	    }
	
	    // Begin playback if specified.
	    if (self._autoplay) {
	      self.play();
	    }
	  };
	
	  /**
	   * Setup the audio context when available, or switch to HTML5 Audio mode.
	   */
	  var setupAudioContext = function() {
	    Howler.noAudio = false;
	
	    // Check if we are using Web Audio and setup the AudioContext if we are.
	    try {
	      if (typeof AudioContext !== 'undefined') {
	        Howler.ctx = new AudioContext();
	      } else if (typeof webkitAudioContext !== 'undefined') {
	        Howler.ctx = new webkitAudioContext();
	      } else {
	        Howler.usingWebAudio = false;
	      }
	    } catch(e) {
	      Howler.usingWebAudio = false;
	    }
	
	    if (!Howler.usingWebAudio) {
	      // No audio is available on this system if noAudio is set to true.
	      if (typeof Audio !== 'undefined') {
	        try {
	          var test = new Audio();
	
	          // Check if the canplaythrough event is available.
	          if (typeof test.oncanplaythrough === 'undefined') {
	            Howler._canPlayEvent = 'canplay';
	          }
	        } catch(e) {
	          Howler.noAudio = true;
	        }
	      } else {
	        Howler.noAudio = true;
	      }
	    }
	
	    // Test to make sure audio isn't disabled in Internet Explorer
	    try {
	      var test = new Audio();
	      if (test.muted) {
	        Howler.noAudio = true;
	      }
	    } catch (e) {}
	
	    // Check if a webview is being used on iOS8 or earlier (rather than the browser).
	    // If it is, disable Web Audio as it causes crashing.
	    var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
	    var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
	    var version = appVersion ? parseInt(appVersion[1], 10) : null;
	    if (iOS && version && version < 9) {
	      var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
	      if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) {
	        Howler.usingWebAudio = false;
	      }
	    }
	
	    // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
	    if (Howler.usingWebAudio) {
	      Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
	      Howler.masterGain.gain.value = 1;
	      Howler.masterGain.connect(Howler.ctx.destination);
	    }
	
	    // Re-run the setup on Howler.
	    Howler._setup();
	  };
	
	  // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return {
	        Howler: Howler,
	        Howl: Howl
	      };
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	
	  // Add support for CommonJS libraries such as browserify.
	  if (true) {
	    exports.Howler = Howler;
	    exports.Howl = Howl;
	  }
	
	  // Define globally in case AMD is not available or unused.
	  if (typeof window !== 'undefined') {
	    window.HowlerGlobal = HowlerGlobal;
	    window.Howler = Howler;
	    window.Howl = Howl;
	    window.Sound = Sound;
	  } else if (typeof global !== 'undefined') { // Add to global in Node.js (for testing, etc).
	    global.HowlerGlobal = HowlerGlobal;
	    global.Howler = Howler;
	    global.Howl = Howl;
	    global.Sound = Sound;
	  }
	})();
	
	
	/*!
	 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
	 *  
	 *  howler.js v2.0.1
	 *  howlerjs.com
	 *
	 *  (c) 2013-2016, James Simpson of GoldFire Studios
	 *  goldfirestudios.com
	 *
	 *  MIT License
	 */
	
	(function() {
	
	  'use strict';
	
	  // Setup default properties.
	  HowlerGlobal.prototype._pos = [0, 0, 0];
	  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
	  
	  /** Global Methods **/
	  /***************************************************************************/
	
	  /**
	   * Helper method to update the stereo panning position of all current Howls.
	   * Future Howls will not use this value unless explicitly set.
	   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
	   * @return {Howler/Number}     Self or current stereo panning value.
	   */
	  HowlerGlobal.prototype.stereo = function(pan) {
	    var self = this;
	
	    // Stop right here if not using Web Audio.
	    if (!self.ctx || !self.ctx.listener) {
	      return self;
	    }
	
	    // Loop through all Howls and update their stereo panning.
	    for (var i=self._howls.length-1; i>=0; i--) {
	      self._howls[i].stereo(pan);
	    }
	
	    return self;
	  };
	
	  /**
	   * Get/set the position of the listener in 3D cartesian space. Sounds using
	   * 3D position will be relative to the listener's position.
	   * @param  {Number} x The x-position of the listener.
	   * @param  {Number} y The y-position of the listener.
	   * @param  {Number} z The z-position of the listener.
	   * @return {Howler/Array}   Self or current listener position.
	   */
	  HowlerGlobal.prototype.pos = function(x, y, z) {
	    var self = this;
	
	    // Stop right here if not using Web Audio.
	    if (!self.ctx || !self.ctx.listener) {
	      return self;
	    }
	
	    // Set the defaults for optional 'y' & 'z'.
	    y = (typeof y !== 'number') ? self._pos[1] : y;
	    z = (typeof z !== 'number') ? self._pos[2] : z;
	
	    if (typeof x === 'number') {
	      self._pos = [x, y, z];
	      self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
	    } else {
	      return self._pos;
	    }
	
	    return self;
	  };
	
	  /**
	   * Get/set the direction the listener is pointing in the 3D cartesian space.
	   * A front and up vector must be provided. The front is the direction the
	   * face of the listener is pointing, and up is the direction the top of the
	   * listener is pointing. Thus, these values are expected to be at right angles
	   * from each other.
	   * @param  {Number} x   The x-orientation of the listener.
	   * @param  {Number} y   The y-orientation of the listener.
	   * @param  {Number} z   The z-orientation of the listener.
	   * @param  {Number} xUp The x-orientation of the top of the listener.
	   * @param  {Number} yUp The y-orientation of the top of the listener.
	   * @param  {Number} zUp The z-orientation of the top of the listener.
	   * @return {Howler/Array}     Returns self or the current orientation vectors.
	   */
	  HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
	    var self = this;
	
	    // Stop right here if not using Web Audio.
	    if (!self.ctx || !self.ctx.listener) {
	      return self;
	    }
	
	    // Set the defaults for optional 'y' & 'z'.
	    var or = self._orientation;
	    y = (typeof y !== 'number') ? or[1] : y;
	    z = (typeof z !== 'number') ? or[2] : z;
	    xUp = (typeof xUp !== 'number') ? or[3] : xUp;
	    yUp = (typeof yUp !== 'number') ? or[4] : yUp;
	    zUp = (typeof zUp !== 'number') ? or[5] : zUp;
	
	    if (typeof x === 'number') {
	      self._orientation = [x, y, z, xUp, yUp, zUp];
	      self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
	    } else {
	      return or;
	    }
	
	    return self;
	  };
	
	  /** Group Methods **/
	  /***************************************************************************/
	
	  /**
	   * Add new properties to the core init.
	   * @param  {Function} _super Core init method.
	   * @return {Howl}
	   */
	  Howl.prototype.init = (function(_super) {
	    return function(o) {
	      var self = this;
	
	      // Setup user-defined default properties.
	      self._orientation = o.orientation || [1, 0, 0];
	      self._stereo = o.stereo || null;
	      self._pos = o.pos || null;
	      self._pannerAttr = {
	        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
	        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
	        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
	        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
	        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
	        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
	        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
	        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
	      };
	
	      // Setup event listeners.
	      self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
	      self._onpos = o.onpos ? [{fn: o.onpos}] : [];
	      self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];
	
	      // Complete initilization with howler.js core's init function.
	      return _super.call(this, o);
	    };
	  })(Howl.prototype.init);
	
	  /**
	   * Get/set the stereo panning of the audio source for this sound or all in the group.
	   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
	   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
	   * @return {Howl/Number}    Returns self or the current stereo panning value.
	   */
	  Howl.prototype.stereo = function(pan, id) {
	    var self = this;
	
	    // Stop right here if not using Web Audio.
	    if (!self._webAudio) {
	      return self;
	    }
	
	    // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
	    if (self._state !== 'loaded') {
	      self._queue.push({
	        event: 'stereo',
	        action: function() {
	          self.stereo(pan, id);
	        }
	      });
	
	      return self;
	    }
	
	    // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
	    var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';
	
	    // Setup the group's stereo panning if no ID is passed.
	    if (typeof id === 'undefined') {
	      // Return the group's stereo panning if no parameters are passed.
	      if (typeof pan === 'number') {
	        self._stereo = pan;
	        self._pos = [pan, 0, 0];
	      } else {
	        return self._stereo;
	      }
	    }
	
	    // Change the streo panning of one or all sounds in group.
	    var ids = self._getSoundIds(id);
	    for (var i=0; i<ids.length; i++) {
	      // Get the sound.
	      var sound = self._soundById(ids[i]);
	
	      if (sound) {
	        if (typeof pan === 'number') {
	          sound._stereo = pan;
	          sound._pos = [pan, 0, 0];
	
	          if (sound._node) {
	            // If we are falling back, make sure the panningModel is equalpower.
	            sound._pannerAttr.panningModel = 'equalpower';
	
	            // Check if there is a panner setup and create a new one if not.
	            if (!sound._panner || !sound._panner.pan) {
	              setupPanner(sound, pannerType);
	            }
	
	            if (pannerType === 'spatial') {
	              sound._panner.setPosition(pan, 0, 0);
	            } else {
	              sound._panner.pan.value = pan;
	            }
	          }
	
	          self._emit('stereo', sound._id);
	        } else {
	          return sound._stereo;
	        }
	      }
	    }
	
	    return self;
	  };
	
	  /**
	   * Get/set the 3D spatial position of the audio source for this sound or
	   * all in the group. The most common usage is to set the 'x' position for
	   * left/right panning. Setting any value higher than 1.0 will begin to
	   * decrease the volume of the sound as it moves further away.
	   * @param  {Number} x  The x-position of the audio from -1000.0 to 1000.0.
	   * @param  {Number} y  The y-position of the audio from -1000.0 to 1000.0.
	   * @param  {Number} z  The z-position of the audio from -1000.0 to 1000.0.
	   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
	   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
	   */
	  Howl.prototype.pos = function(x, y, z, id) {
	    var self = this;
	
	    // Stop right here if not using Web Audio.
	    if (!self._webAudio) {
	      return self;
	    }
	
	    // If the sound hasn't loaded, add it to the load queue to change position when capable.
	    if (self._state !== 'loaded') {
	      self._queue.push({
	        event: 'pos',
	        action: function() {
	          self.pos(x, y, z, id);
	        }
	      });
	
	      return self;
	    }
	
	    // Set the defaults for optional 'y' & 'z'.
	    y = (typeof y !== 'number') ? 0 : y;
	    z = (typeof z !== 'number') ? -0.5 : z;
	
	    // Setup the group's spatial position if no ID is passed.
	    if (typeof id === 'undefined') {
	      // Return the group's spatial position if no parameters are passed.
	      if (typeof x === 'number') {
	        self._pos = [x, y, z];
	      } else {
	        return self._pos;
	      }
	    }
	
	    // Change the spatial position of one or all sounds in group.
	    var ids = self._getSoundIds(id);
	    for (var i=0; i<ids.length; i++) {
	      // Get the sound.
	      var sound = self._soundById(ids[i]);
	
	      if (sound) {
	        if (typeof x === 'number') {
	          sound._pos = [x, y, z];
	
	          if (sound._node) {
	            // Check if there is a panner setup and create a new one if not.
	            if (!sound._panner || sound._panner.pan) {
	              setupPanner(sound, 'spatial');
	            }
	
	            sound._panner.setPosition(x, y, z);
	          }
	
	          self._emit('pos', sound._id);
	        } else {
	          return sound._pos;
	        }
	      }
	    }
	
	    return self;
	  };
	
	  /**
	   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
	   * space. Depending on how direction the sound is, based on the `cone` attributes,
	   * a sound pointing away from the listener can be quiet or silent.
	   * @param  {Number} x  The x-orientation of the source.
	   * @param  {Number} y  The y-orientation of the source.
	   * @param  {Number} z  The z-orientation of the source.
	   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
	   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
	   */
	  Howl.prototype.orientation = function(x, y, z, id) {
	    var self = this;
	
	    // Stop right here if not using Web Audio.
	    if (!self._webAudio) {
	      return self;
	    }
	
	    // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
	    if (self._state !== 'loaded') {
	      self._queue.push({
	        event: 'orientation',
	        action: function() {
	          self.orientation(x, y, z, id);
	        }
	      });
	
	      return self;
	    }
	
	    // Set the defaults for optional 'y' & 'z'.
	    y = (typeof y !== 'number') ? self._orientation[1] : y;
	    z = (typeof z !== 'number') ? self._orientation[2] : z;
	
	    // Setup the group's spatial orientation if no ID is passed.
	    if (typeof id === 'undefined') {
	      // Return the group's spatial orientation if no parameters are passed.
	      if (typeof x === 'number') {
	        self._orientation = [x, y, z];
	      } else {
	        return self._orientation;
	      }
	    }
	
	    // Change the spatial orientation of one or all sounds in group.
	    var ids = self._getSoundIds(id);
	    for (var i=0; i<ids.length; i++) {
	      // Get the sound.
	      var sound = self._soundById(ids[i]);
	
	      if (sound) {
	        if (typeof x === 'number') {
	          sound._orientation = [x, y, z];
	
	          if (sound._node) {
	            // Check if there is a panner setup and create a new one if not.
	            if (!sound._panner) {
	              // Make sure we have a position to setup the node with.
	              if (!sound._pos) {
	                sound._pos = self._pos || [0, 0, -0.5];
	              }
	
	              setupPanner(sound, 'spatial');
	            }
	
	            sound._panner.setOrientation(x, y, z);
	          }
	
	          self._emit('orientation', sound._id);
	        } else {
	          return sound._orientation;
	        }
	      }
	    }
	
	    return self;
	  };
	
	  /**
	   * Get/set the panner node's attributes for a sound or group of sounds.
	   * This method can optionall take 0, 1 or 2 arguments.
	   *   pannerAttr() -> Returns the group's values.
	   *   pannerAttr(id) -> Returns the sound id's values.
	   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
	   *   pannerAttr(o, id) -> Set's the values of passed sound id.
	   *
	   *   Attributes:
	   *     coneInnerAngle - (360 by default) There will be no volume reduction inside this angle.
	   *     coneOuterAngle - (360 by default) The volume will be reduced to a constant value of
	   *                      `coneOuterGain` outside this angle.
	   *     coneOuterGain - (0 by default) The amount of volume reduction outside of `coneOuterAngle`.
	   *     distanceModel - ('inverse' by default) Determines algorithm to use to reduce volume as audio moves
	   *                      away from listener. Can be `linear`, `inverse` or `exponential`.
	   *     maxDistance - (10000 by default) Volume won't reduce between source/listener beyond this distance.
	   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
	   *                     Can be `HRTF` or `equalpower`.
	   *     refDistance - (1 by default) A reference distance for reducing volume as the source
	   *                    moves away from the listener.
	   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener.
	   * 
	   * @return {Howl/Object} Returns self or current panner attributes.
	   */
	  Howl.prototype.pannerAttr = function() {
	    var self = this;
	    var args = arguments;
	    var o, id, sound;
	
	    // Stop right here if not using Web Audio.
	    if (!self._webAudio) {
	      return self;
	    }
	
	    // Determine the values based on arguments.
	    if (args.length === 0) {
	      // Return the group's panner attribute values.
	      return self._pannerAttr;
	    } else if (args.length === 1) {
	      if (typeof args[0] === 'object') {
	        o = args[0];
	
	        // Set the grou's panner attribute values.
	        if (typeof id === 'undefined') {
	          self._pannerAttr = {
	            coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : self._coneInnerAngle,
	            coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : self._coneOuterAngle,
	            coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : self._coneOuterGain,
	            distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : self._distanceModel,
	            maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : self._maxDistance,
	            panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : self._panningModel,
	            refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : self._refDistance,
	            rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : self._rolloffFactor
	          };
	        }
	      } else {
	        // Return this sound's panner attribute values.
	        sound = self._soundById(parseInt(args[0], 10));
	        return sound ? sound._pannerAttr : self._pannerAttr;
	      }
	    } else if (args.length === 2) {
	      o = args[0];
	      id = parseInt(args[1], 10);
	    }
	
	    // Update the values of the specified sounds.
	    var ids = self._getSoundIds(id);
	    for (var i=0; i<ids.length; i++) {
	      sound = self._soundById(ids[i]);
	
	      if (sound) {
	        // Merge the new values into the sound.
	        var pa = sound._pannerAttr;
	        pa = {
	          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
	          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
	          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
	          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
	          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
	          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel,
	          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
	          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor
	        };
	
	        // Update the panner values or create a new panner if none exists.
	        var panner = sound._panner;
	        if (panner) {
	          panner.coneInnerAngle = pa.coneInnerAngle;
	          panner.coneOuterAngle = pa.coneOuterAngle;
	          panner.coneOuterGain = pa.coneOuterGain;
	          panner.distanceModel = pa.distanceModel;
	          panner.maxDistance = pa.maxDistance;
	          panner.panningModel = pa.panningModel;
	          panner.refDistance = pa.refDistance;
	          panner.rolloffFactor = pa.rolloffFactor;
	        } else {
	          // Make sure we have a position to setup the node with.
	          if (!sound._pos) {
	            sound._pos = self._pos || [0, 0, -0.5];
	          }
	
	          // Create a new panner node.
	          setupPanner(sound, 'spatial');
	        }
	      }
	    }
	
	    return self;
	  };
	
	  /** Single Sound Methods **/
	  /***************************************************************************/
	
	  /**
	   * Add new properties to the core Sound init.
	   * @param  {Function} _super Core Sound init method.
	   * @return {Sound}
	   */
	  Sound.prototype.init = (function(_super) {
	    return function() {
	      var self = this;
	      var parent = self._parent;
	
	      // Setup user-defined default properties.
	      self._orientation = parent._orientation;
	      self._stereo = parent._stereo;
	      self._pos = parent._pos;
	      self._pannerAttr = parent._pannerAttr;
	
	      // Complete initilization with howler.js core Sound's init function.
	      _super.call(this);
	
	      // If a stereo or position was specified, set it up.
	      if (self._stereo) {
	        parent.stereo(self._stereo);
	      } else if (self._pos) {
	        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
	      }
	    };
	  })(Sound.prototype.init);
	
	  /**
	   * Override the Sound.reset method to clean up properties from the spatial plugin.
	   * @param  {Function} _super Sound reset method.
	   * @return {Sound}
	   */
	  Sound.prototype.reset = (function(_super) {
	    return function() {
	      var self = this;
	      var parent = self._parent;
	
	      // Reset all spatial plugin properties on this sound.
	      self._orientation = parent._orientation;
	      self._pos = parent._pos;
	      self._pannerAttr = parent._pannerAttr;
	
	      // Complete resetting of the sound.
	      return _super.call(this);
	    };
	  })(Sound.prototype.reset);
	
	  /** Helper Methods **/
	  /***************************************************************************/
	
	  /**
	   * Create a new panner node and save it on the sound.
	   * @param  {Sound} sound Specific sound to setup panning on.
	   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
	   */
	  var setupPanner = function(sound, type) {
	    type = type || 'spatial';
	
	    // Create the new panner node.
	    if (type === 'spatial') {
	      sound._panner = Howler.ctx.createPanner();
	      sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
	      sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
	      sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
	      sound._panner.distanceModel = sound._pannerAttr.distanceModel;
	      sound._panner.maxDistance = sound._pannerAttr.maxDistance;
	      sound._panner.panningModel = sound._pannerAttr.panningModel;
	      sound._panner.refDistance = sound._pannerAttr.refDistance;
	      sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
	      sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
	      sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
	    } else {
	      sound._panner = Howler.ctx.createStereoPanner();
	      sound._panner.pan.value = sound._stereo;
	    }
	
	    sound._panner.connect(sound._node);
	
	    // Update the connections.
	    if (!sound._paused) {
	      sound._parent.pause(sound._id, true).play(sound._id);
	    }
	  };
	})();
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map