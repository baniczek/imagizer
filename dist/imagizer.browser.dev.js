var Imagizer =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 393);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(25);
var hide = __webpack_require__(14);
var redefine = __webpack_require__(15);
var ctx = __webpack_require__(21);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(67)('wks');
var uid = __webpack_require__(45);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base = __webpack_require__(71);

var _Base2 = _interopRequireDefault(_Base);

var _extend = __webpack_require__(98);

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasePointEffect = function (_BaseEffect) {
  _inherits(BasePointEffect, _BaseEffect);

  function BasePointEffect() {
    _classCallCheck(this, BasePointEffect);

    return _possibleConstructorReturn(this, (BasePointEffect.__proto__ || Object.getPrototypeOf(BasePointEffect)).apply(this, arguments));
  }

  _createClass(BasePointEffect, [{
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      throw "Extend it.";
    }
  }, {
    key: 'run',
    value: function run(imageData, parameters) {

      parameters = (0, _extend2.default)(true, {}, this.getDefaultParameters(), parameters);

      var x = void 0,
          y = void 0,
          firstPixelIndex = void 0,
          result = void 0,
          imageDataCopy = new Uint8ClampedArray(imageData.data),
          // copy image data
      /**
       * Get ImageData array index from x and y position
       * @param x
       * @param y
       * @returns {number}
       */
      getIndex = function getIndex(x, y) {
        return y * imageData.width * 4 + x * 4;
      },
          normalizePixelValue = function normalizePixelValue(value) {
        return Math.min(Math.max(value, 0), 255) | 0;
      },
          sandbox = { // object invoked as this in effect callback
        /**
         * Get changed pixel
         * @param {int} x
         * @param {int} y
         * @returns {{r: *, g: *, b: *, a: *}}
         */
        getPixel: function getPixel(x, y) {
          var index = getIndex(x, y);
          return {
            r: imageDataCopy[index + 0],
            g: imageDataCopy[index + 1],
            b: imageDataCopy[index + 2],
            a: imageDataCopy[index + 3]
          };
        },
        /**
         * Get original pixel.
         * @param {int} x
         * @param {int} y
         * @returns {{r: *, g: *, b: *, a: *}}
         */
        getOriginalPixel: function getOriginalPixel(x, y) {
          var index = getIndex(x, y);
          return {
            r: imageData.data[index + 0],
            g: imageData.data[index + 1],
            b: imageData.data[index + 2],
            a: imageData.data[index + 3]
          };
        },
        /**
         * Set new pixel
         * @param {int} x
         * @param {int} y
         * @param {object} rgba
         */
        setPixel: function setPixel(x, y, rgba) {
          var index = getIndex(x, y);
          imageDataCopy[index + 0] = normalizePixelValue(rgba.r);
          imageDataCopy[index + 1] = normalizePixelValue(rgba.g);
          imageDataCopy[index + 2] = normalizePixelValue(rgba.b);
          imageDataCopy[index + 3] = normalizePixelValue(rgba.a);
        },
        /**
         * Data created by effect init function
         */
        data: null,
        /**
         * ImageData width
         */
        width: imageData.width,
        /**
         * ImageData height
         */
        height: imageData.height
      };

      sandbox.data = this.before.call(sandbox, parameters, imageData.width, imageData.height, imageData);

      for (y = 0; y < imageData.height; y += 1) {
        for (x = 0; x < imageData.width; x += 1) {
          firstPixelIndex = getIndex(x, y);

          result = this.callback.call(sandbox, {
            r: imageDataCopy[firstPixelIndex + 0],
            g: imageDataCopy[firstPixelIndex + 1],
            b: imageDataCopy[firstPixelIndex + 2],
            a: imageDataCopy[firstPixelIndex + 3]
          }, x, y, parameters, imageData.width, imageData.height);

          if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === "object") {
            imageDataCopy[firstPixelIndex + 0] = normalizePixelValue(result.r);
            imageDataCopy[firstPixelIndex + 1] = normalizePixelValue(result.g);
            imageDataCopy[firstPixelIndex + 2] = normalizePixelValue(result.b);
            imageDataCopy[firstPixelIndex + 3] = normalizePixelValue(result.a);
          }
        }
      }

      imageData.data.set(imageDataCopy);
      return imageData;
    }
  }]);

  return BasePointEffect;
}(_Base2.default);

exports.default = BasePointEffect;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(3)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(1);
var IE8_DOM_DEFINE = __webpack_require__(109);
var toPrimitive = __webpack_require__(29);
var dP = Object.defineProperty;

exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(28);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(26);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base = __webpack_require__(71);

var _Base2 = _interopRequireDefault(_Base);

var _extend = __webpack_require__(98);

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseTransformEffect = function (_BaseEffect) {
  _inherits(BaseTransformEffect, _BaseEffect);

  function BaseTransformEffect() {
    _classCallCheck(this, BaseTransformEffect);

    return _possibleConstructorReturn(this, (BaseTransformEffect.__proto__ || Object.getPrototypeOf(BaseTransformEffect)).apply(this, arguments));
  }

  _createClass(BaseTransformEffect, [{
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      throw "Extend it.";
    }
  }, {
    key: 'run',
    value: function run(imageData, parameters) {

      parameters = (0, _extend2.default)(true, {}, this.getDefaultParameters(), parameters);

      var x = void 0,
          y = void 0,
          normalizePixelValue = function normalizePixelValue(value) {
        return Math.min(Math.max(value, 0), 255) | 0;
      },
          sandbox = {
        data: null
      },
          imageDataCopy = new Uint8ClampedArray(imageData.data);

      sandbox.data = this.before.call(sandbox, parameters, imageData.width, imageData.height, imageData);

      for (y = 0; y < imageData.height; y += 1) {
        for (x = 0; x < imageData.width; x += 1) {
          var newXY = this.callback.call(sandbox, x, y, parameters, imageData.width, imageData.height),
              newX = normalizePixelValue(newXY[0]),
              newY = normalizePixelValue(newXY[1]),
              oldPixelIndex = y * imageData.width * 4 + x * 4,
              newPixelIndex = newY * imageData.width * 4 + newX * 4;

          imageDataCopy[oldPixelIndex + 0] = imageData.data[newPixelIndex + 0];
          imageDataCopy[oldPixelIndex + 1] = imageData.data[newPixelIndex + 1];
          imageDataCopy[oldPixelIndex + 2] = imageData.data[newPixelIndex + 2];
          imageDataCopy[oldPixelIndex + 3] = imageData.data[newPixelIndex + 3];
        }
      }

      imageData.data.set(imageDataCopy);
      return imageData;
    }
  }]);

  return BaseTransformEffect;
}(_Base2.default);

exports.default = BaseTransformEffect;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var createDesc = __webpack_require__(41);
module.exports = __webpack_require__(7) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var hide = __webpack_require__(14);
var has = __webpack_require__(13);
var SRC = __webpack_require__(45)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(25).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var fails = __webpack_require__(3);
var defined = __webpack_require__(26);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(54);
var createDesc = __webpack_require__(41);
var toIObject = __webpack_require__(19);
var toPrimitive = __webpack_require__(29);
var has = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(109);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(13);
var toObject = __webpack_require__(10);
var IE_PROTO = __webpack_require__(88)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(53);
var defined = __webpack_require__(26);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(12);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(3);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeImageData = mergeImageData;
exports.mergePixelCallback = mergePixelCallback;
exports.cropImageData = cropImageData;
exports.mod = mod;
exports.triangle = triangle;
exports.smoothStep = smoothStep;
exports.brightness = brightness;
exports.isNode = isNode;
var blendingModes = {
  lighten: function lighten(bottomPixel, topPixel) {
    return topPixel > bottomPixel ? topPixel : bottomPixel;
  },
  darken: function darken(bottomPixel, topPixel) {
    return topPixel > bottomPixel ? bottomPixel : topPixel;
  },
  multiply: function multiply(bottomPixel, topPixel) {
    return bottomPixel * topPixel / 255;
  },
  average: function average(bottomPixel, topPixel) {
    return bottomPixel + topPixel / 2;
  },
  add: function add(bottomPixel, topPixel) {
    return Math.min(255, bottomPixel + topPixel);
  },
  subtract: function subtract(bottomPixel, topPixel) {
    return bottomPixel + topPixel < 255 ? 0 : bottomPixel + topPixel - 255;
  },
  difference: function difference(bottomPixel, topPixel) {
    return Math.abs(bottomPixel - topPixel);
  },
  negation: function negation(bottomPixel, topPixel) {
    return 255 - Math.abs(255 - bottomPixel - topPixel);
  },
  screen: function screen(bottomPixel, topPixel) {
    return 255 - ((255 - bottomPixel) * (255 - topPixel) >> 8);
  },
  exclusion: function exclusion(bottomPixel, topPixel) {
    return bottomPixel + topPixel - 2 * bottomPixel * topPixel / 255;
  },
  overlay: function overlay(bottomPixel, topPixel) {
    return topPixel < 128 ? 2 * bottomPixel * topPixel / 255 : 255 - 2 * (255 - bottomPixel) * (255 - topPixel) / 255;
  },
  softLight: function softLight(bottomPixel, topPixel) {
    return topPixel < 128 ? 2 * ((bottomPixel >> 1) + 64) * (topPixel / 255) : 255 - 2 * (255 - ((bottomPixel >> 1) + 64)) * (255 - topPixel) / 255;
  },
  hardLight: function hardLight(bottomPixel, topPixel) {
    return blendingModes.softLight(topPixel, bottomPixel);
  },
  colorDodge: function colorDodge(bottomPixel, topPixel) {
    return topPixel == 255 ? topPixel : Math.min(255, (bottomPixel << 8) / (255 - topPixel));
  },
  colorBurn: function colorBurn(bottomPixel, topPixel) {
    return topPixel == 0 ? topPixel : Math.max(0, 255 - (255 - bottomPixel << 8) / topPixel);
  },
  linearDodge: function linearDodge(bottomPixel, topPixel) {
    return blendingModes.add(bottomPixel, topPixel);
  },
  linearBurn: function linearBurn(bottomPixel, topPixel) {
    return blendingModes.subtract(bottomPixel, topPixel);
  },
  linearLight: function linearLight(bottomPixel, topPixel) {
    return topPixel < 128 ? blendingModes.linearBurn(bottomPixel, 2 * topPixel) : blendingModes.linearDodge(bottomPixel, 2 * (topPixel - 128));
  },
  vividLight: function vividLight(bottomPixel, topPixel) {
    return topPixel < 128 ? blendingModes.colorBurn(bottomPixel, 2 * topPixel) : blendingModes.colorDodge(bottomPixel, 2 * (topPixel - 128));
  },
  pinLight: function pinLight(bottomPixel, topPixel) {
    return topPixel < 128 ? blendingModes.darken(bottomPixel, 2 * topPixel) : blendingModes.lighten(bottomPixel, 2 * (topPixel - 128));
  },
  hardMix: function hardMix(bottomPixel, topPixel) {
    return blendingModes.vividLight(bottomPixel, topPixel) < 128 ? 0 : 255;
  },
  reflect: function reflect(bottomPixel, topPixel) {
    return topPixel == 255 ? topPixel : Math.min(255, bottomPixel * bottomPixel / (255 - topPixel));
  },
  glow: function glow(bottomPixel, topPixel) {
    return blendingModes.reflect(topPixel, bottomPixel);
  },
  phoenix: function phoenix(bottomPixel, topPixel) {
    return Math.min(bottomPixel, topPixel) - Math.max(bottomPixel, topPixel) + 255;
  }
};

function mergeImageData(bottom, top, pixelCallback) {
  var x = void 0,
      y = void 0,
      xx = void 0,
      yy = void 0,
      firstOldPixelIndex = void 0,
      firstNewPixelIndex = void 0,
      pixelResult = void 0;

  for (y = top.y, yy = 0; y < bottom.height && yy < top.height; y += 1, yy += 1) {
    for (x = top.x, xx = 0; x < bottom.width && xx < top.width; x += 1, xx += 1) {
      if (xx < top.width && yy < top.height) // overwrite only rect-size of current layer
        {
          firstOldPixelIndex = y * bottom.width * 4 + x * 4;
          firstNewPixelIndex = yy * top.width * 4 + xx * 4;

          pixelResult = pixelCallback({
            r: bottom.imageData.data[firstOldPixelIndex + 0],
            g: bottom.imageData.data[firstOldPixelIndex + 1],
            b: bottom.imageData.data[firstOldPixelIndex + 2],
            a: bottom.imageData.data[firstOldPixelIndex + 3]
          }, {
            r: top.imageData.data[firstNewPixelIndex + 0],
            g: top.imageData.data[firstNewPixelIndex + 1],
            b: top.imageData.data[firstNewPixelIndex + 2],
            a: top.imageData.data[firstNewPixelIndex + 3]
          }, x, y, {
            blendingMode: top.blendingMode
          });

          if (pixelResult !== false) // if skip change
            {
              bottom.imageData.data[firstOldPixelIndex + 0] = pixelResult.r;
              bottom.imageData.data[firstOldPixelIndex + 1] = pixelResult.g;
              bottom.imageData.data[firstOldPixelIndex + 2] = pixelResult.b;
              bottom.imageData.data[firstOldPixelIndex + 3] = pixelResult.a;
            }
        }
    }
  }
  return bottom.imageData;
}

function mergePixelCallback(bottomPixel, topPixel, x, y, parameters) {
  if (topPixel.a === 0) {
    return false; // skip change - opacity is full
  }

  // alpha compositing
  var mergedR = void 0,
      mergedG = void 0,
      mergedB = void 0,
      mergedA = topPixel.a / 255,
      rootA = bottomPixel.a / 255 * (1 - mergedA),
      outA = mergedA + bottomPixel.a * (1 - mergedA) / 255;

  switch (parameters.blendingMode) {
    case "lighten":
    case "darken":
    case "multiply":
    case "average":
    case "add":
    case "subtract":
    case "difference":
    case "negation":
    case "screen":
    case "exclusion":
    case "overlay":
    case "softLight":
    case "hardLight":
    case "colorDodge":
    case "colorBurn":
    case "linearDodge":
    case "linearBurn":
    case "linearLight":
    case "vividLight":
    case "pinLight":
    case "hardMix":
    case "reflect":
    case "glow":
    case "phoenix":
      topPixel.r = blendingModes[parameters.blendingMode](bottomPixel.r, topPixel.r);
      topPixel.g = blendingModes[parameters.blendingMode](bottomPixel.g, topPixel.g);
      topPixel.b = blendingModes[parameters.blendingMode](bottomPixel.b, topPixel.b);
      break;

    default:
      break;
  }

  var rootR = bottomPixel.r;
  var rootG = bottomPixel.g;
  var rootB = bottomPixel.b;

  mergedR = topPixel.r * mergedA + rootR * rootA;
  mergedG = topPixel.g * mergedA + rootG * rootA;
  mergedB = topPixel.b * mergedA + rootB * rootA;

  mergedR = outA == 0 ? 0 : mergedR / outA;
  mergedG = outA == 0 ? 0 : mergedG / outA;
  mergedB = outA == 0 ? 0 : mergedB / outA;

  return {
    r: Math.min(Math.max(0, mergedR), 255) | 0,
    g: Math.min(Math.max(0, mergedG), 255) | 0,
    b: Math.min(Math.max(0, mergedB), 255) | 0,
    a: 255 * outA | 0
  };
}

function cropImageData(oldImageData, newImageData, startX, startY, width, height) {
  var oldWidth = oldImageData.width,
      newWidth = newImageData.width,
      x = void 0,
      y = void 0,
      xx = void 0,
      yy = void 0,
      firstOldPixelIndex = void 0,
      firstNewPixelIndex = void 0;

  for (y = startY, yy = 0; y < startY + height && yy < height; y += 1, yy += 1) {
    for (x = startX, xx = 0; x < startX + width && xx < width; x += 1, xx += 1) {
      firstOldPixelIndex = y * oldWidth * 4 + x * 4;
      firstNewPixelIndex = yy * newWidth * 4 + xx * 4;

      newImageData.data[firstNewPixelIndex] = oldImageData.data[firstOldPixelIndex];
      newImageData.data[firstNewPixelIndex + 1] = oldImageData.data[firstOldPixelIndex + 1];
      newImageData.data[firstNewPixelIndex + 2] = oldImageData.data[firstOldPixelIndex + 2];
      newImageData.data[firstNewPixelIndex + 3] = oldImageData.data[firstOldPixelIndex + 3];
    }
  }

  return newImageData;
}

function mod(a, b) {
  var n = Math.floor(a / b);
  a -= n * b;
  if (a < 0) {
    return a + b;
  }
  return a;
}

function triangle(x) {
  var r = mod(x, 1);
  return 2 * (r < 0.5 ? r : 1 - r);
}

function smoothStep(a, b, x) {
  if (x < a) {
    return 0;
  }
  if (x >= b) {
    return 1;
  }
  x = (x - a) / (b - a);
  return x * x * (3 - 2 * x);
}

function brightness(pixel) {
  return (pixel.r + pixel.g + pixel.b) / 3;
}

function isNode() {
  return typeof window == 'undefined';
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(21);
var IObject = __webpack_require__(53);
var toObject = __webpack_require__(10);
var toLength = __webpack_require__(9);
var asc = __webpack_require__(73);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(0);
var core = __webpack_require__(25);
var fails = __webpack_require__(3);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(130);
var $export = __webpack_require__(0);
var shared = __webpack_require__(67)('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(133))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(7)) {
  var LIBRARY = __webpack_require__(37);
  var global = __webpack_require__(2);
  var fails = __webpack_require__(3);
  var $export = __webpack_require__(0);
  var $typed = __webpack_require__(69);
  var $buffer = __webpack_require__(94);
  var ctx = __webpack_require__(21);
  var anInstance = __webpack_require__(35);
  var propertyDesc = __webpack_require__(41);
  var hide = __webpack_require__(14);
  var redefineAll = __webpack_require__(42);
  var toInteger = __webpack_require__(28);
  var toLength = __webpack_require__(9);
  var toIndex = __webpack_require__(128);
  var toAbsoluteIndex = __webpack_require__(44);
  var toPrimitive = __webpack_require__(29);
  var has = __webpack_require__(13);
  var classof = __webpack_require__(52);
  var isObject = __webpack_require__(4);
  var toObject = __webpack_require__(10);
  var isArrayIter = __webpack_require__(80);
  var create = __webpack_require__(38);
  var getPrototypeOf = __webpack_require__(18);
  var gOPN = __webpack_require__(39).f;
  var getIterFn = __webpack_require__(96);
  var uid = __webpack_require__(45);
  var wks = __webpack_require__(5);
  var createArrayMethod = __webpack_require__(24);
  var createArrayIncludes = __webpack_require__(56);
  var speciesConstructor = __webpack_require__(68);
  var ArrayIterators = __webpack_require__(97);
  var Iterators = __webpack_require__(47);
  var $iterDetect = __webpack_require__(62);
  var setSpecies = __webpack_require__(43);
  var arrayFill = __webpack_require__(72);
  var arrayCopyWithin = __webpack_require__(101);
  var $DP = __webpack_require__(8);
  var $GOPD = __webpack_require__(17);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(5)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(14)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(45)('meta');
var isObject = __webpack_require__(4);
var has = __webpack_require__(13);
var setDesc = __webpack_require__(8).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(3)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base = __webpack_require__(71);

var _Base2 = _interopRequireDefault(_Base);

var _extend = __webpack_require__(98);

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseCustomEffect = function (_BaseEffect) {
  _inherits(BaseCustomEffect, _BaseEffect);

  function BaseCustomEffect() {
    _classCallCheck(this, BaseCustomEffect);

    return _possibleConstructorReturn(this, (BaseCustomEffect.__proto__ || Object.getPrototypeOf(BaseCustomEffect)).apply(this, arguments));
  }

  _createClass(BaseCustomEffect, [{
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      throw "Extend it.";
    }
  }, {
    key: 'run',
    value: function run(imageData, parameters) {

      parameters = (0, _extend2.default)(true, {}, this.getDefaultParameters(), parameters);

      var imageDataCopy = new Uint8ClampedArray(imageData.data),
          // copy image data
      /**
       * Get ImageData array index from x and y position
       * @param x
       * @param y
       * @returns {number}
       */
      getIndex = function getIndex(x, y) {
        return y * imageData.width * 4 + x * 4;
      },
          normalizePixelValue = function normalizePixelValue(value) {
        return Math.min(Math.max(value, 0), 255) | 0;
      },
          sandbox = { // object invoked as this in effect callback
        /**
         * Get changed pixel
         * @param {int} x
         * @param {int} y
         * @returns {{r: *, g: *, b: *, a: *}}
         */
        getPixel: function getPixel(x, y) {
          var index = getIndex(x, y);
          return {
            r: imageDataCopy[index + 0],
            g: imageDataCopy[index + 1],
            b: imageDataCopy[index + 2],
            a: imageDataCopy[index + 3]
          };
        },
        /**
         * Get pixel by its index
         * @param index
         */
        getOriginalPixelByIndex: function getOriginalPixelByIndex(index) {
          index *= 4;
          return {
            r: imageData.data[index],
            g: imageData.data[index + 1],
            b: imageData.data[index + 2],
            a: imageData.data[index + 3]
          };
        },
        /**
         * Get original pixel.
         * @param {int} x
         * @param {int} y
         * @returns {{r: *, g: *, b: *, a: *}}
         */
        getOriginalPixel: function getOriginalPixel(x, y) {
          var index = getIndex(x, y);
          return {
            r: imageData.data[index + 0],
            g: imageData.data[index + 1],
            b: imageData.data[index + 2],
            a: imageData.data[index + 3]
          };
        },
        /**
         * Set new pixel
         * @param {int} x
         * @param {int} y
         * @param {object} rgba
         */
        setPixel: function setPixel(x, y, rgba) {
          var index = getIndex(x, y);
          imageDataCopy[index + 0] = normalizePixelValue(rgba.r);
          imageDataCopy[index + 1] = normalizePixelValue(rgba.g);
          imageDataCopy[index + 2] = normalizePixelValue(rgba.b);
          imageDataCopy[index + 3] = normalizePixelValue(rgba.a);
        },
        /**
         * Set pixel by index.
         * @param index
         * @param rgba
         */
        setPixelByIndex: function setPixelByIndex(index, rgba) {
          index *= 4;
          imageDataCopy[index + 0] = normalizePixelValue(rgba.r);
          imageDataCopy[index + 1] = normalizePixelValue(rgba.g);
          imageDataCopy[index + 2] = normalizePixelValue(rgba.b);
          imageDataCopy[index + 3] = normalizePixelValue(rgba.a);
        },
        /**
         * Data created by effect init function
         */
        data: null,
        /**
         * ImageData width
         */
        width: imageData.width,
        /**
         * ImageData height
         */
        height: imageData.height
      };

      sandbox.data = this.before.call(sandbox, parameters, imageData.width, imageData.height, imageData);

      this.callback.call(sandbox, imageData.width, imageData.height, parameters);

      imageData.data.set(imageDataCopy);

      return imageData;
    }
  }]);

  return BaseCustomEffect;
}(_Base2.default);

exports.default = BaseCustomEffect;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var call = __webpack_require__(112);
var isArrayIter = __webpack_require__(80);
var anObject = __webpack_require__(1);
var toLength = __webpack_require__(9);
var getIterFn = __webpack_require__(96);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(1);
var dPs = __webpack_require__(118);
var enumBugKeys = __webpack_require__(76);
var IE_PROTO = __webpack_require__(88)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(75)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(78).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(120);
var hiddenKeys = __webpack_require__(76).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(120);
var enumBugKeys = __webpack_require__(76);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(15);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var dP = __webpack_require__(8);
var DESCRIPTORS = __webpack_require__(7);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var parameters = {},
    isInit = false;

var noise = {
  init: function init() {
    if (isInit) {
      return false;
    }
    isInit = true;

    parameters.B = 0x100;
    parameters.BM = 0xff;
    parameters.N = 0x1000;

    parameters.P = new Array(parameters.B + parameters.B + 2);
    parameters.G1 = new Array(parameters.B + parameters.B + 2);
    parameters.G2 = new Array(parameters.B + parameters.B + 2);
    for (i = 0; i < parameters.G2.length; i += 1) {
      parameters.G2[i] = new Array(2);
    }
    parameters.G3 = new Array(parameters.B + parameters.B + 2);
    for (i = 0; i < parameters.G3.length; i += 1) {
      parameters.G3[i] = new Array(3);
    }
    var i, j, k;

    for (i = 0; i < parameters.B; i += 1) {
      parameters.P[i] = i;
      parameters.G1[i] = (this.random() % (parameters.B + parameters.B) - parameters.B) / parameters.B;
      parameters.G2[i] = [];
      for (j = 0; j < 2; j += 1) {
        parameters.G2[i][j] = (this.random() % (parameters.B + parameters.B) - parameters.B) / parameters.B;
      }
      parameters.G2[i] = this.normalize2(parameters.G2[i]);

      parameters.G3[i] = [];
      for (j = 0; j < 3; j += 1) {
        parameters.G3[i][j] = (this.random() % (parameters.B + parameters.B) - parameters.B) / parameters.B;
      }
      parameters.G3[i] = this.normalize3(parameters.G3[i]);
    }

    for (i = parameters.B - 1; i >= 0; i -= 1) {
      k = parameters.P[i];
      parameters.P[i] = parameters.P[j = this.random() % parameters.B];
      parameters.P[j] = k;
    }

    for (i = 0; i < parameters.B + 2; i += 1) {
      parameters.P[parameters.B + i] = parameters.P[i];
      parameters.G1[parameters.B + i] = parameters.G1[i];
      for (j = 0; j < 2; j += 1) {
        parameters.G2[parameters.B + i][j] = parameters.G2[i][j];
      }
      for (j = 0; j < 3; j++) {
        parameters.G3[parameters.B + i][j] = parameters.G3[i][j];
      }
    }
  },
  random: function random() {
    return parseInt(Math.random() * 256 * 256) & 0x7fffffff;
  },
  normalize2: function normalize2(arr) {
    var s = Math.sqrt(arr[0] * arr[0] + arr[1] * arr[1] + arr[2] * arr[2]);
    arr[0] = arr[0] / s;
    arr[1] = arr[1] / s;
    arr[2] = arr[2] / s;
    return arr;
  },
  normalize3: function normalize3(arr) {
    var s = Math.sqrt(arr[0] * arr[0] + arr[1] * arr[1]);
    arr[0] = arr[0] / s;
    arr[1] = arr[1] / s;
    return arr;
  },
  sCurve: function sCurve(t) {
    return t * t * (3.0 - 2.0 * t);
  },
  lerp: function lerp(t, a, b) {
    return a + t * (b - a);
  },
  /**
   * Compute 1-dimensional Perlin noise.
   * @param x
   */
  noise1: function noise1(x) {
    var bx0, bx1, rx0, rx1, sx, t, u, v;

    this.init();

    t = x + parameters.N;
    bx0 = parseInt(t) & parameters.BM;
    bx1 = bx0 + 1 & parameters.BM;
    rx0 = t - parseInt(t);
    rx1 = rx0 - 1;

    sx = this.sCurve(rx0);

    u = rx0 * parameters.G1[parameters.P[bx0]];
    v = rx1 * parameters.G1[parameters.P[bx1]];

    return 2.3 * this.lerp(sx, u, v);
  },
  /**
   * Compute 2-dimensional Perlin noise
   * @param x
   * @param y
   * @returns {number}
   */
  noise2: function noise2(x, y) {
    var bx0,
        bx1,
        by0,
        by1,
        b00,
        b10,
        b01,
        b11,
        rx0,
        rx1,
        ry0,
        ry1,
        q = [],
        sx,
        sy,
        a,
        b,
        t,
        u,
        v,
        i,
        j;

    this.init();

    t = x + parameters.N;
    bx0 = parseInt(t) & parameters.BM;
    bx1 = bx0 + 1 & parameters.BM;
    rx0 = t - parseInt(t);
    rx1 = rx0 - 1;

    t = y + parameters.N;
    by0 = parseInt(t) & parameters.BM;
    by1 = by0 + 1 & parameters.BM;
    ry0 = t - parseInt(t);
    ry1 = ry0 - 1;

    i = parameters.P[bx0];
    j = parameters.P[bx1];

    b00 = parameters.P[i + by0];
    b10 = parameters.P[j + by0];
    b01 = parameters.P[i + by1];
    b11 = parameters.P[j + by1];

    sx = this.sCurve(rx0);
    sy = this.sCurve(ry0);

    q = parameters.G2[b00];
    u = rx0 * q[0] + ry0 * q[1];
    q = parameters.G2[b10];
    v = rx1 * q[0] + ry0 * q[1];
    a = this.lerp(sx, u, v);

    q = parameters.G2[b01];
    u = rx0 * q[0] + ry1 * q[1];
    q = parameters.G2[b11];
    v = rx1 * q[0] + ry1 * q[1];
    b = this.lerp(sx, u, v);

    return 1.5 * this.lerp(sy, a, b);
  },
  /**
   * Compute 3-dimensional Perlin noise.
   * @param x
   * @param y
   * @param z
   */
  noise3: function noise3(x, y, z) {
    var bx0, bx1, by0, by1, bz0, bz1, b00, b10, b01, b11, rx0, rx1, ry0, ry1, rz0, rz1, q, sy, sz, a, b, c, d, t, u, v, i, j;

    this.init();

    t = x + parameters.N;
    bx0 = parseInt(t) & parameters.BM;
    bx1 = bx0 + 1 & parameters.BM;
    rx0 = t - parseInt(t);
    rx1 = rx0 - 1;

    t = y + parameters.N;
    by0 = parseInt(t) & parameters.BM;
    by1 = by0 + 1 & parameters.BM;
    ry0 = t - parseInt(t);
    ry1 = ry0 - 1;

    t = z + parameters.N;
    bz0 = parseInt(t) & parameters.BM;
    bz1 = bz0 + 1 & parameters.BM;
    rz0 = t - parseInt(t);
    rz1 = rz0 - 1;

    i = parameters.P[bx0];
    j = parameters.P[bx1];

    b00 = parameters.P[i + by0];
    b10 = parameters.P[j + by0];
    b01 = parameters.P[i + by1];
    b11 = parameters.P[j + by1];

    t = this.sCurve(rx0);
    sy = this.sCurve(ry0);
    sz = this.sCurve(rz0);

    q = parameters.G3[b00 + bz0];
    u = rx0 * q[0] + ry0 * q[1] + rz0 * q[2];
    q = parameters.G3[b10 + bz0];
    v = rx1 * q[0] + ry0 * q[1] + rz0 * q[2];
    a = this.lerp(t, u, v);

    q = parameters.G3[b01 + bz0];
    u = rx0 * q[0] + ry1 * q[1] + rz0 * q[2];
    q = parameters.G3[b11 + bz0];
    v = rx1 * q[0] + ry1 * q[1] + rz0 * q[2];
    b = this.lerp(t, u, v);

    c = this.lerp(sy, a, b);

    q = parameters.G3[b00 + bz1];
    u = rx0 * q[0] + ry0 * q[1] + rz1 * q[2];
    q = parameters.G3[b10 + bz1];
    v = rx1 * q[0] + ry0 * q[1] + rz1 * q[2];
    a = this.lerp(t, u, v);

    q = parameters.G3[b01 + bz1];
    u = rx0 * q[0] + ry1 * q[1] + rz1 * q[2];
    q = parameters.G3[b11 + bz1];
    v = rx1 * q[0] + ry1 * q[1] + rz1 * q[2];
    b = this.lerp(t, u, v);

    d = this.lerp(sy, a, b);

    return 1.5 * this.lerp(sz, c, d);
  },
  /**
   * Compute turbulence using Perlin noise.
   * @param x
   * @param y
   * @param z
   * @param octaves
   * @returns {*}
   */
  turbulence3: function turbulence3(x, y, z, octaves) {
    var t = 0,
        i;
    for (i = 1; i <= octaves; i *= 2) {
      t += Math.abs(this.noise3(i * x, i * y, i * z)) / i;
    }
    return t;
  }
};

exports.default = noise;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(8).f;
var has = __webpack_require__(13);
var TAG = __webpack_require__(5)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var defined = __webpack_require__(26);
var fails = __webpack_require__(3);
var spaces = __webpack_require__(92);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = __webpack_require__(23);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasWrapper = function () {
  function CanvasWrapper(width, height) {
    _classCallCheck(this, CanvasWrapper);

    this.canvas = null;
    this.context = null;
    this.width = 0;
    this.height = 0;
    this.initialize(width, height);
  }

  _createClass(CanvasWrapper, [{
    key: 'initialize',
    value: function initialize() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if ((0, _common.isNode)()) {
        var Canvas = __webpack_require__(134);
        this.canvas = new Canvas(width, height);
      } else {
        this.canvas = document.createElement("canvas");

        // hide from viewport
        this.canvas.style.position = "absolute";
        this.canvas.style.left = "-99999px";
        this.canvas.style.top = "-99999px";

        this.setWidth(width);
        this.setHeight(height);

        document.body.appendChild(this.canvas);
      }
    }
  }, {
    key: 'setWidth',
    value: function setWidth(value) {
      this.canvas.setAttribute("width", "" + value);
      this.width = value;
      return this;
    }
  }, {
    key: 'setHeight',
    value: function setHeight(value) {
      this.canvas.setAttribute("height", "" + value);
      this.height = value;
      return this;
    }
  }, {
    key: 'getContext',
    value: function getContext() {
      if (!this.context) {
        this.context = this.canvas.getContext("2d");
      }
      return this.context;
    }
  }, {
    key: 'getCanvas',
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: 'toDataURL',
    value: function toDataURL(type) {
      return this.canvas.toDataURL(type);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (!(0, _common.isNode)()) {
        document.body.removeChild(this.canvas);
      }
      this.canvas = null;
      this.context = null;
    }
  }]);

  return CanvasWrapper;
}();

exports.default = CanvasWrapper;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(20);
var TAG = __webpack_require__(5)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(20);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RGBtoHSB = RGBtoHSB;
exports.HSBtoRGB = HSBtoRGB;
exports.mixColors = mixColors;
exports.hexToRGB = hexToRGB;
exports.RGBtoHex = RGBtoHex;
exports.RGBtoXYZ = RGBtoXYZ;
exports.RGBtoCIELab = RGBtoCIELab;
exports.CIELabToXYZ = CIELabToXYZ;
exports.CIELabToRGB = CIELabToRGB;
/**
 * RGB to HSB color convert.
 * @param r
 * @param g
 * @param b
 * @returns {{h: number, s: number, b: number}}
 */
function RGBtoHSB(r, g, b) {
  var hue,
      saturation,
      brightness,
      cmax = Math.max(r, g, b),
      cmin = Math.min(r, g, b);

  brightness = cmax / 255;
  if (cmax !== 0) {
    saturation = (cmax - cmin) / cmax;
  } else {
    saturation = 0;
  }

  if (saturation === 0) {
    hue = 0;
  } else {
    var redc = (cmax - r) / (cmax - cmin),
        greenc = (cmax - g) / (cmax - cmin),
        bluec = (cmax - b) / (cmax - cmin);

    if (r === cmax) {
      hue = bluec - greenc;
    } else {
      if (g === cmax) {
        hue = 2 + redc - bluec;
      } else {
        hue = 4 + greenc - redc;
      }
    }

    hue /= 6;
    if (hue < 0) {
      hue += 1;
    }
  }

  return {
    h: hue,
    s: saturation,
    b: brightness
  };
}
/**
 * HSB to RGB color convert.
 * @param hue
 * @param saturation
 * @param brightness
 * @returns {{r: Number, g: Number, b: Number}}
 */
function HSBtoRGB(hue, saturation, brightness) {
  var red, green, blue;
  if (saturation === 0) {
    red = brightness * 255 + 0.5;
    green = brightness * 255 + 0.5;
    blue = brightness * 255 + 0.5;
  } else {
    var h = (hue - Math.floor(hue)) * 6,
        f = h - Math.floor(h),
        p = brightness * (1 - saturation),
        q = brightness * (1 - saturation * f),
        t = brightness * (1 - saturation * (1 - f));

    switch (parseInt(h)) {
      case 0:
        red = brightness * 255 + 0.5;
        green = t * 255 + 0.5;
        blue = p * 255 + 0.5;
        break;

      case 1:
        red = q * 255 + 0.5;
        green = brightness * 255 + 0.5;
        blue = p * 255 + 0.5;
        break;

      case 2:
        red = p * 255 + 0.5;
        green = brightness * 255 + 0.5;
        blue = t * 255 + 0.5;
        break;

      case 3:
        red = p * 255 + 0.5;
        green = q * 255 + 0.5;
        blue = brightness * 255 + 0.5;
        break;

      case 4:
        red = t * 255 + 0.5;
        green = p * 255 + 0.5;
        blue = brightness * 255 + 0.5;
        break;

      case 5:
        red = brightness * 255 + 0.5;
        green = p * 255 + 0.5;
        blue = q * 255 + 0.5;
        break;

      default:
        red = 0;
        green = 0;
        blue = 0;
        break;
    }
  }
  return {
    r: parseInt(red),
    g: parseInt(green),
    b: parseInt(blue)
  };
}

function mixColors(t, rgb1, rgb2) {
  return {
    r: rgb1.r + t * (rgb2.r - rgb1.r),
    g: rgb1.g + t * (rgb2.g - rgb1.g),
    b: rgb1.b + t * (rgb2.b - rgb1.b),
    a: rgb1.a + t * (rgb2.a - rgb1.a)
  };
}

function hexToRGB(hex) {
  hex = parseInt(hex.replace("#", ""), 16);
  var r = hex >> 16;
  var g = hex >> 8 & 0xFF;
  var b = hex & 0xFF;
  return {
    r: r,
    g: g,
    b: b
  };
}

function RGBtoHex(pixel) {
  var bin = pixel.r << 16 | pixel.g << 8 | pixel.b;
  return function (h) {
    return new Array(7 - h.length).join("0") + h;
  }(bin.toString(16).toUpperCase());
}

function RGBtoXYZ(r, g, b) {
  var var_R = r / 255;
  var var_G = g / 255;
  var var_B = b / 255;

  if (var_R > 0.04045) {
    var_R = Math.pow((var_R + 0.055) / 1.055, 2.4);
  } else {
    var_R = var_R / 12.92;
  }

  if (var_G > 0.04045) {
    var_G = Math.pow((var_G + 0.055) / 1.055, 2.4);
  } else {
    var_G = var_G / 12.92;
  }

  if (var_B > 0.04045) {
    var_B = Math.pow((var_B + 0.055) / 1.055, 2.4);
  } else {
    var_B = var_B / 12.92;
  }

  var_R = var_R * 100;
  var_G = var_G * 100;
  var_B = var_B * 100;

  return {
    x: var_R * 0.4124 + var_G * 0.3576 + var_B * 0.1805,
    y: var_R * 0.2126 + var_G * 0.7152 + var_B * 0.0722,
    z: var_R * 0.0193 + var_G * 0.1192 + var_B * 0.9505
  };
}

function RGBtoCIELab(r, g, b) {
  var xyz = RGBtoXYZ(r, g, b);

  var var_X = xyz.x / 95.047; // ref
  var var_Y = xyz.y / 100; // ref
  var var_Z = xyz.z / 108.883; // ref

  if (var_X > 0.008856) {
    var_X = Math.pow(var_X, 1 / 3);
  } else {
    var_X = 7.787 * var_X + 16 / 116;
  }

  if (var_Y > 0.008856) {
    var_Y = Math.pow(var_Y, 1 / 3);
  } else {
    var_Y = 7.787 * var_Y + 16 / 116;
  }

  if (var_Z > 0.008856) {
    var_Z = Math.pow(var_Z, 1 / 3);
  } else {
    var_Z = 7.787 * var_Z + 16 / 116;
  }

  return {
    l: 116 * var_Y - 16,
    a: 500 * (var_X - var_Y),
    b: 200 * (var_Y - var_Z)
  };
}

function CIELabToXYZ(l, a, b) {
  var var_Y = (l + 16) / 116;
  var var_X = a / 500 + var_Y;
  var var_Z = var_Y - b / 200;

  if (Math.pow(var_Y, 3) > 0.008856) {
    var_Y = Math.pow(var_Y, 3);
  } else {
    var_Y = (var_Y - 16 / 116) / 7.787;
  }

  if (Math.pow(var_X, 3) > 0.008856) {
    var_X = Math.pow(var_X, 3);
  } else {
    var_X = (var_X - 16 / 116) / 7.787;
  }

  if (Math.pow(var_Z, 3) > 0.008856) {
    var_Z = Math.pow(var_Z, 3);
  } else {
    var_Z = (var_Z - 16 / 116) / 7.787;
  }

  return {
    x: 95.047 * var_X, // ref
    y: 100 * var_Y, // ref
    z: 108.883 * var_Z // ref
  };
}

function CIELabToRGB(l, a, b) {
  var xyz = CIELabToXYZ(l, a, b);

  var var_X = xyz.x / 100;
  var var_Y = xyz.y / 100;
  var var_Z = xyz.z / 100;

  var var_R = var_X * 3.2406 + var_Y * -1.5372 + var_Z * -0.4986;
  var var_G = var_X * -0.9689 + var_Y * 1.8758 + var_Z * 0.0415;
  var var_B = var_X * 0.0557 + var_Y * -0.2040 + var_Z * 1.0570;

  if (var_R > 0.0031308) {
    var_R = 1.055 * Math.pow(var_R, 1 / 2.4) - 0.055;
  } else {
    var_R = 12.92 * var_R;
  }

  if (var_G > 0.0031308) {
    var_G = 1.055 * Math.pow(var_G, 1 / 2.4) - 0.055;
  } else {
    var_G = 12.92 * var_G;
  }

  if (var_B > 0.0031308) {
    var_B = 1.055 * Math.pow(var_B, 1 / 2.4) - 0.055;
  } else {
    var_B = 12.92 * var_B;
  }

  return {
    r: var_R * 255,
    g: var_G * 255,
    b: var_B * 255
  };
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(19);
var toLength = __webpack_require__(9);
var toAbsoluteIndex = __webpack_require__(44);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(15);
var redefineAll = __webpack_require__(42);
var meta = __webpack_require__(33);
var forOf = __webpack_require__(36);
var anInstance = __webpack_require__(35);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(3);
var $iterDetect = __webpack_require__(62);
var setToStringTag = __webpack_require__(48);
var inheritIfRequired = __webpack_require__(79);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(14);
var redefine = __webpack_require__(15);
var fails = __webpack_require__(3);
var defined = __webpack_require__(26);
var wks = __webpack_require__(5);

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(1);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(20);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(4);
var cof = __webpack_require__(20);
var MATCH = __webpack_require__(5)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(5)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Forced replacement prototype accessors methods
module.exports = __webpack_require__(37) || !__webpack_require__(3)(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete __webpack_require__(2)[K];
});


/***/ }),
/* 64 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(0);
var aFunction = __webpack_require__(12);
var ctx = __webpack_require__(21);
var forOf = __webpack_require__(36);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(0);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(1);
var aFunction = __webpack_require__(12);
var SPECIES = __webpack_require__(5)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var hide = __webpack_require__(14);
var uid = __webpack_require__(45);
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GrayScale = __webpack_require__(162);

var _GrayScale2 = _interopRequireDefault(_GrayScale);

var _Sepia = __webpack_require__(168);

var _Sepia2 = _interopRequireDefault(_Sepia);

var _Contrast = __webpack_require__(154);

var _Contrast2 = _interopRequireDefault(_Contrast);

var _Brightness = __webpack_require__(152);

var _Brightness2 = _interopRequireDefault(_Brightness);

var _Diffusion = __webpack_require__(155);

var _Diffusion2 = _interopRequireDefault(_Diffusion);

var _Dither = __webpack_require__(157);

var _Dither2 = _interopRequireDefault(_Dither);

var _Exposure = __webpack_require__(159);

var _Exposure2 = _interopRequireDefault(_Exposure);

var _Gain = __webpack_require__(160);

var _Gain2 = _interopRequireDefault(_Gain);

var _Gamma = __webpack_require__(161);

var _Gamma2 = _interopRequireDefault(_Gamma);

var _HSBAdjust = __webpack_require__(163);

var _HSBAdjust2 = _interopRequireDefault(_HSBAdjust);

var _InvertAlpha = __webpack_require__(165);

var _InvertAlpha2 = _interopRequireDefault(_InvertAlpha);

var _Invert = __webpack_require__(164);

var _Invert2 = _interopRequireDefault(_Invert);

var _Levels = __webpack_require__(166);

var _Levels2 = _interopRequireDefault(_Levels);

var _Rescale = __webpack_require__(167);

var _Rescale2 = _interopRequireDefault(_Rescale);

var _Solarize = __webpack_require__(169);

var _Solarize2 = _interopRequireDefault(_Solarize);

var _Threshold = __webpack_require__(170);

var _Threshold2 = _interopRequireDefault(_Threshold);

var _Tritone = __webpack_require__(171);

var _Tritone2 = _interopRequireDefault(_Tritone);

var _Dissolve = __webpack_require__(156);

var _Dissolve2 = _interopRequireDefault(_Dissolve);

var _Edge = __webpack_require__(158);

var _Edge2 = _interopRequireDefault(_Edge);

var _ChannelMix = __webpack_require__(153);

var _ChannelMix2 = _interopRequireDefault(_ChannelMix);

var _AutoContrast = __webpack_require__(151);

var _AutoContrast2 = _interopRequireDefault(_AutoContrast);

var _Diffuse = __webpack_require__(173);

var _Diffuse2 = _interopRequireDefault(_Diffuse);

var _Kaleidoscope = __webpack_require__(174);

var _Kaleidoscope2 = _interopRequireDefault(_Kaleidoscope);

var _Marble = __webpack_require__(175);

var _Marble2 = _interopRequireDefault(_Marble);

var _Pinch = __webpack_require__(178);

var _Pinch2 = _interopRequireDefault(_Pinch);

var _Ripple = __webpack_require__(180);

var _Ripple2 = _interopRequireDefault(_Ripple);

var _Shear = __webpack_require__(182);

var _Shear2 = _interopRequireDefault(_Shear);

var _Sphere = __webpack_require__(183);

var _Sphere2 = _interopRequireDefault(_Sphere);

var _Swim = __webpack_require__(184);

var _Swim2 = _interopRequireDefault(_Swim);

var _Twirl = __webpack_require__(185);

var _Twirl2 = _interopRequireDefault(_Twirl);

var _Water = __webpack_require__(186);

var _Water2 = _interopRequireDefault(_Water);

var _Circle = __webpack_require__(172);

var _Circle2 = _interopRequireDefault(_Circle);

var _Rotate = __webpack_require__(181);

var _Rotate2 = _interopRequireDefault(_Rotate);

var _Offset = __webpack_require__(176);

var _Offset2 = _interopRequireDefault(_Offset);

var _Polar = __webpack_require__(179);

var _Polar2 = _interopRequireDefault(_Polar);

var _Perspective = __webpack_require__(177);

var _Perspective2 = _interopRequireDefault(_Perspective);

var _AutoWhiteBalance = __webpack_require__(144);

var _AutoWhiteBalance2 = _interopRequireDefault(_AutoWhiteBalance);

var _FillColor = __webpack_require__(149);

var _FillColor2 = _interopRequireDefault(_FillColor);

var _Flip = __webpack_require__(150);

var _Flip2 = _interopRequireDefault(_Flip);

var _Block = __webpack_require__(145);

var _Block2 = _interopRequireDefault(_Block);

var _Border = __webpack_require__(146);

var _Border2 = _interopRequireDefault(_Border);

var _Emboss = __webpack_require__(148);

var _Emboss2 = _interopRequireDefault(_Emboss);

var _ComponentStretching = __webpack_require__(147);

var _ComponentStretching2 = _interopRequireDefault(_ComponentStretching);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var availableEffects = {};

function add(_class) {
  if (availableEffects[_class.getName()]) {
    throw 'Effect: ' + _class.getName() + ' exists already!';
  }
  availableEffects[_class.getName()] = _class;
}

add(_GrayScale2.default);
add(_Sepia2.default);
add(_Contrast2.default);
add(_Brightness2.default);
add(_Diffusion2.default);
add(_Dither2.default);
add(_Exposure2.default);
add(_Gain2.default);
add(_Gamma2.default);
add(_HSBAdjust2.default);
add(_InvertAlpha2.default);
add(_Invert2.default);
add(_Levels2.default);
add(_Rescale2.default);
add(_Solarize2.default);
add(_Threshold2.default);
add(_Tritone2.default);
add(_Diffuse2.default);
add(_Dissolve2.default);
add(_Kaleidoscope2.default);
add(_Marble2.default);
add(_Pinch2.default);
add(_Ripple2.default);
add(_Shear2.default);
add(_Sphere2.default);
add(_Swim2.default);
add(_Twirl2.default);
add(_Water2.default);
add(_Edge2.default);
add(_ChannelMix2.default);
add(_Circle2.default);
add(_Rotate2.default);
add(_Offset2.default);
add(_Polar2.default);
add(_Perspective2.default);
add(_AutoContrast2.default);
add(_AutoWhiteBalance2.default);
add(_FillColor2.default);
add(_Flip2.default);
add(_Block2.default);
add(_Border2.default);
add(_Emboss2.default);
add(_ComponentStretching2.default);

var EffectsRepository = function () {
  function EffectsRepository() {
    _classCallCheck(this, EffectsRepository);
  }

  _createClass(EffectsRepository, null, [{
    key: 'get',
    value: function get(name) {
      return availableEffects[name];
    }
  }]);

  return EffectsRepository;
}();

exports.default = EffectsRepository;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseEffect = function () {
  function BaseEffect() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, BaseEffect);

    this.opts = opts;
  }

  _createClass(BaseEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {};
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height, imageData) {
      return {};
    }
  }], [{
    key: 'getName',
    value: function getName() {
      throw 'Extend it.';
    }
  }]);

  return BaseEffect;
}();

exports.default = BaseEffect;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(10);
var toAbsoluteIndex = __webpack_require__(44);
var toLength = __webpack_require__(9);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(192);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(8);
var createDesc = __webpack_require__(41);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 76 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(5)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var setPrototypeOf = __webpack_require__(87).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(47);
var ITERATOR = __webpack_require__(5)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(38);
var descriptor = __webpack_require__(41);
var setToStringTag = __webpack_require__(48);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(14)(IteratorPrototype, __webpack_require__(5)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(37);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(15);
var hide = __webpack_require__(14);
var has = __webpack_require__(13);
var Iterators = __webpack_require__(47);
var $iterCreate = __webpack_require__(81);
var setToStringTag = __webpack_require__(48);
var getPrototypeOf = __webpack_require__(18);
var ITERATOR = __webpack_require__(5)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 83 */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var macrotask = __webpack_require__(93).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(20)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(12);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(4);
var anObject = __webpack_require__(1);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(21)(Function.call, __webpack_require__(17).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(67)('keys');
var uid = __webpack_require__(45);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28);
var defined = __webpack_require__(26);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(61);
var defined = __webpack_require__(26);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(28);
var defined = __webpack_require__(26);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var invoke = __webpack_require__(110);
var html = __webpack_require__(78);
var cel = __webpack_require__(75);
var global = __webpack_require__(2);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(20)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var DESCRIPTORS = __webpack_require__(7);
var LIBRARY = __webpack_require__(37);
var $typed = __webpack_require__(69);
var hide = __webpack_require__(14);
var redefineAll = __webpack_require__(42);
var fails = __webpack_require__(3);
var anInstance = __webpack_require__(35);
var toInteger = __webpack_require__(28);
var toLength = __webpack_require__(9);
var toIndex = __webpack_require__(128);
var gOPN = __webpack_require__(39).f;
var dP = __webpack_require__(8).f;
var arrayFill = __webpack_require__(72);
var setToStringTag = __webpack_require__(48);
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(25);
var LIBRARY = __webpack_require__(37);
var wksExt = __webpack_require__(129);
var defineProperty = __webpack_require__(8).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(52);
var ITERATOR = __webpack_require__(5)('iterator');
var Iterators = __webpack_require__(47);
module.exports = __webpack_require__(25).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(32);
var step = __webpack_require__(113);
var Iterators = __webpack_require__(47);
var toIObject = __webpack_require__(19);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(82)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = extend(deep, clone, copy);

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						target[name] = copy;
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),
/* 99 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(20);
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(10);
var toAbsoluteIndex = __webpack_require__(44);
var toLength = __webpack_require__(9);

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(36);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(12);
var toObject = __webpack_require__(10);
var IObject = __webpack_require__(53);
var toLength = __webpack_require__(9);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(12);
var isObject = __webpack_require__(4);
var invoke = __webpack_require__(110);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(8).f;
var create = __webpack_require__(38);
var redefineAll = __webpack_require__(42);
var ctx = __webpack_require__(21);
var anInstance = __webpack_require__(35);
var forOf = __webpack_require__(36);
var $iterDefine = __webpack_require__(82);
var step = __webpack_require__(113);
var setSpecies = __webpack_require__(43);
var DESCRIPTORS = __webpack_require__(7);
var fastKey = __webpack_require__(33).fastKey;
var validate = __webpack_require__(50);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(52);
var from = __webpack_require__(102);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(42);
var getWeak = __webpack_require__(33).getWeak;
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var anInstance = __webpack_require__(35);
var forOf = __webpack_require__(36);
var createArrayMethod = __webpack_require__(24);
var $has = __webpack_require__(13);
var validate = __webpack_require__(50);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(60);
var isObject = __webpack_require__(4);
var toLength = __webpack_require__(9);
var ctx = __webpack_require__(21);
var IS_CONCAT_SPREADABLE = __webpack_require__(5)('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(7) && !__webpack_require__(3)(function () {
  return Object.defineProperty(__webpack_require__(75)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 110 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(4);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(1);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(84);
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),
/* 115 */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),
/* 116 */
/***/ (function(module, exports) {

// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(40);
var gOPS = __webpack_require__(64);
var pIE = __webpack_require__(54);
var toObject = __webpack_require__(10);
var IObject = __webpack_require__(53);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(3)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var anObject = __webpack_require__(1);
var getKeys = __webpack_require__(40);

module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(19);
var gOPN = __webpack_require__(39).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(13);
var toIObject = __webpack_require__(19);
var arrayIndexOf = __webpack_require__(56)(false);
var IE_PROTO = __webpack_require__(88)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(40);
var toIObject = __webpack_require__(19);
var isEnum = __webpack_require__(54).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(39);
var gOPS = __webpack_require__(64);
var anObject = __webpack_require__(1);
var Reflect = __webpack_require__(2).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(2).parseFloat;
var $trim = __webpack_require__(49).trim;

module.exports = 1 / $parseFloat(__webpack_require__(92) + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(2).parseInt;
var $trim = __webpack_require__(49).trim;
var ws = __webpack_require__(92);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var newPromiseCapability = __webpack_require__(86);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(9);
var repeat = __webpack_require__(91);
var defined = __webpack_require__(26);

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(28);
var toLength = __webpack_require__(9);
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(5);


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(105);
var validate = __webpack_require__(50);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(57)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(7) && /./g.flags != 'g') __webpack_require__(8).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(59)
});


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(105);
var validate = __webpack_require__(50);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(57)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(24)(0);
var redefine = __webpack_require__(15);
var meta = __webpack_require__(33);
var assign = __webpack_require__(117);
var weak = __webpack_require__(107);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(3);
var validate = __webpack_require__(50);
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(57)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = canvas;

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = fs;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = exports.Project = undefined;

var _Project = __webpack_require__(143);

var _Project2 = _interopRequireDefault(_Project);

var _Image = __webpack_require__(140);

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Project = _Project2.default;
exports.Image = _Image2.default;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(390);

__webpack_require__(188);

__webpack_require__(191);

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(99)))

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals window __webpack_hash__ */
if(false) {
	var lastHash;
	var upToDate = function upToDate() {
		return lastHash.indexOf(__webpack_hash__) >= 0;
	};
	var check = function check() {
		module.hot.check(true).then(function(updatedModules) {
			if(!updatedModules) {
				console.warn("[HMR] Cannot find update. Need to do a full reload!");
				console.warn("[HMR] (Probably because of restarting the webpack-dev-server)");
				window.location.reload();
				return;
			}

			if(!upToDate()) {
				check();
			}

			require("./log-apply-result")(updatedModules, updatedModules);

			if(upToDate()) {
				console.log("[HMR] App is up to date.");
			}

		}).catch(function(err) {
			var status = module.hot.status();
			if(["abort", "fail"].indexOf(status) >= 0) {
				console.warn("[HMR] Cannot apply update. Need to do a full reload!");
				console.warn("[HMR] " + err.stack || err.message);
				window.location.reload();
			} else {
				console.warn("[HMR] Update failed: " + err.stack || err.message);
			}
		});
	};
	var hotEmitter = require("./emitter");
	hotEmitter.on("webpackHotUpdate", function(currentHash) {
		lastHash = currentHash;
		if(!upToDate() && module.hot.status() === "idle") {
			console.log("[HMR] Checking for updates on the server...");
			check();
		}
	});
	console.log("[HMR] Waiting for update signal from WDS...");
} else {
	throw new Error("[HMR] Hot Module Replacement is disabled.");
}


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CanvasWrapper = __webpack_require__(51);

var _CanvasWrapper2 = _interopRequireDefault(_CanvasWrapper);

var _resize = __webpack_require__(187);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseOnLayerObject = function () {
  function BaseOnLayerObject() {
    _classCallCheck(this, BaseOnLayerObject);

    this.imageData = null;
    this.canvas = null;
    this.width = 0;
    this.height = 0;
  }

  _createClass(BaseOnLayerObject, [{
    key: 'getWidth',
    value: function getWidth() {
      return this.width;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.height;
    }
  }, {
    key: 'setWidth',
    value: function setWidth(value) {
      this.width = value;
      return this;
    }
  }, {
    key: 'setHeight',
    value: function setHeight(value) {
      this.height = value;
      return this;
    }
  }, {
    key: 'getImageData',
    value: function getImageData() {
      if (!this.imageData) {
        this.imageData = this.canvas.getContext().getImageData(0, 0, this.getWidth(), this.getHeight());
      }
      return this.imageData;
    }
  }, {
    key: 'setImageData',
    value: function setImageData(value) {
      this.imageData = value;
      return this;
    }
  }, {
    key: 'resize',
    value: function resize(newWidth, newHeight) {
      var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'nearest-neighbour';

      var oldImageData = this.getImageData(),
          canvas = new _CanvasWrapper2.default(newWidth, newHeight),
          newImageData = canvas.getContext().createImageData(newWidth, newHeight);

      switch (mode) {
        case "nearest-neighbour":
          newImageData = (0, _resize.resizeNearestNeighbour)(oldImageData, newImageData, newWidth, newHeight);
          break;

        case "bilinear-interpolation":
          newImageData = (0, _resize.resizeBilinearInterpolation)(oldImageData, newImageData, newWidth, newHeight);
          break;

        case "biquadratic-interpolation":
          newImageData = (0, _resize.resizeBiquadraticInterpolation)(oldImageData, newImageData, newWidth, newHeight);
          break;

        default:
          canvas.destroy();
          return this;
      }

      canvas.destroy();

      return this.setWidth(newWidth).setHeight(newHeight).setImageData(newImageData);
    }
  }]);

  return BaseOnLayerObject;
}();

exports.default = BaseOnLayerObject;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseOnLayer = __webpack_require__(139);

var _BaseOnLayer2 = _interopRequireDefault(_BaseOnLayer);

var _CanvasWrapper = __webpack_require__(51);

var _CanvasWrapper2 = _interopRequireDefault(_CanvasWrapper);

var _common = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_BaseOnLayerObject) {
  _inherits(Image, _BaseOnLayerObject);

  function Image() {
    _classCallCheck(this, Image);

    var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this));

    _this.url = null;

    if ((0, _common.isNode)()) {
      var canvas = __webpack_require__(134);
      _this.image = new canvas.Image();
    } else {
      _this.image = new window.Image();

      // hide from viewport
      _this.image.style.position = "absolute";
      _this.image.style.left = "-99999px";
      _this.image.style.top = "-99999px";
    }
    return _this;
  }

  _createClass(Image, [{
    key: 'load',
    value: function load(url, callback) {
      var _this2 = this;

      var load = function load() {
        _this2.setWidth((0, _common.isNode)() ? _this2.image.width : _this2.image.clientWidth);
        _this2.setHeight((0, _common.isNode)() ? _this2.image.height : _this2.image.clientHeight);

        // get image data
        _this2.canvas = new _CanvasWrapper2.default(_this2.getWidth(), _this2.getHeight());
        _this2.canvas.getContext().drawImage(_this2.image, 0, 0, _this2.getWidth(), _this2.getHeight());

        if (!(0, _common.isNode)()) {
          document.body.removeChild(_this2.image);
        }

        if (typeof callback === "function") {
          callback.call(_this2);
        }
      };

      this.url = url;

      if (!(0, _common.isNode)()) {
        document.body.appendChild(this.image);
        this.image.onload = function () {
          load();
        };
        this.image.src = url;
      } else {
        var fs = __webpack_require__(135);
        this.image.src = fs.readFileSync(url);
        load();
      }
    }
  }]);

  return Image;
}(_BaseOnLayer2.default);

exports.default = Image;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CanvasWrapper = __webpack_require__(51);

var _CanvasWrapper2 = _interopRequireDefault(_CanvasWrapper);

var _LayerObject = __webpack_require__(142);

var _LayerObject2 = _interopRequireDefault(_LayerObject);

var _common = __webpack_require__(23);

var _EffectsRepository = __webpack_require__(70);

var _EffectsRepository2 = _interopRequireDefault(_EffectsRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layer = function () {
  function Layer(width, height) {
    var parameters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Layer);

    this.objects = [];
    this.effects = [];
    this.x = 0;
    this.y = 0;
    this.initialize(width, height, parameters);

    if (parameters.background_color && parameters.background_color !== "transparent") {
      this.applyEffect("fill-color", {
        color: parameters.background_color
      });
    }
  }

  _createClass(Layer, [{
    key: 'initialize',
    value: function initialize(width, height, parameters) {
      this.canvas = new _CanvasWrapper2.default(width, height);
      this.imageData = this.canvas.getContext().createImageData(width, height);
      this.width = width;
      this.height = height;
      this.parameters = parameters;
    }
  }, {
    key: 'put',
    value: function put(obj, x, y) {
      var put = new _LayerObject2.default(obj, this, x, y, {});
      this.objects.push(put);
      return put;
    }
  }, {
    key: 'exportTo',
    value: function exportTo(selector) {
      var imageType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'image/png';

      this.exportLayer();

      var container = document.querySelector(selector),
          exportedImage = new Image();

      exportedImage.src = canvas.toDataURL(imageType);
      container.appendChild(exportedImage);
    }
  }, {
    key: 'exportLayer',
    value: function exportLayer() {
      var i = void 0,
          layerObject = void 0;

      for (i = 0; i < this.objects.length; i += 1) {
        layerObject = this.objects[i];
        this.imageData = (0, _common.mergeImageData)({
          width: this.width,
          height: this.height,
          imageData: this.imageData
        }, {
          x: layerObject.getX(),
          y: layerObject.getY(),
          width: layerObject.getWidth(),
          height: layerObject.getHeight(),
          imageData: layerObject.exportObject()
        }, _common.mergePixelCallback);
      }

      for (i = 0; i < this.effects.length; i++) {
        this.imageData = this.effects[i].effect.run(this.imageData, this.effects[i].params);
      }

      return this.imageData;
    }
  }, {
    key: 'applyEffect',
    value: function applyEffect(name, parameters) {
      this.effects.push({
        name: name,
        effect: new (_EffectsRepository2.default.get(name))(),
        parameters: parameters
      });
    }
  }, {
    key: 'resize',
    value: function resize(newWidth, newHeight, mode) {
      var i = void 0;

      this.canvas.destroy();
      this.canvas = null;
      this.imageData = null;

      this.initialize(newWidth, newHeight, this.parameters);

      for (i = 0; i < this.objects.length; i += 1) {
        this.objects[i].resize(newWidth, newHeight, mode, true);
      }

      return this;
    }
  }, {
    key: 'crop',
    value: function crop(startX, startY, width, height) {
      var i = void 0;

      for (i = 0; i < this.objects.length; i += 1) {
        this.objects[i].crop(startX, startY, width, height);
      }

      return this;
    }
  }, {
    key: 'moveXY',
    value: function moveXY(x, y) {
      this.moveX(x);
      this.moveY(y);
      return this;
    }
  }, {
    key: 'moveX',
    value: function moveX(x) {
      this.x += x | 0;
      return this;
    }
  }, {
    key: 'moveY',
    value: function moveY(y) {
      this.y += y | 0;
      return this;
    }
  }, {
    key: 'setX',
    value: function setX(x) {
      this.x = x;
      return this;
    }
  }, {
    key: 'setY',
    value: function setY(y) {
      this.y = y;
      return this;
    }
  }, {
    key: 'setBlendingMode',
    value: function setBlendingMode(blendingMode) {
      this.parameters.blendingMode = blendingMode;
    }
  }, {
    key: 'getX',
    value: function getX() {
      return this.x;
    }
  }, {
    key: 'getY',
    value: function getY() {
      return this.y;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.width;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.height;
    }
  }, {
    key: 'getParameter',
    value: function getParameter(name) {
      return this.parameters[name];
    }
  }]);

  return Layer;
}();

exports.default = Layer;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CanvasWrapper = __webpack_require__(51);

var _CanvasWrapper2 = _interopRequireDefault(_CanvasWrapper);

var _common = __webpack_require__(23);

var _EffectsRepository = __webpack_require__(70);

var _EffectsRepository2 = _interopRequireDefault(_EffectsRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LayerObject = function () {
  function LayerObject(obj, layer, x, y, opts) {
    _classCallCheck(this, LayerObject);

    this.obj = obj;
    this.layer = this;
    this.x = x;
    this.y = y;
    this.opts = opts;
    this.effects = [];
  }

  _createClass(LayerObject, [{
    key: 'getObject',
    value: function getObject() {
      return this.obj;
    }
  }, {
    key: 'getX',
    value: function getX() {
      return this.x;
    }
  }, {
    key: 'getY',
    value: function getY() {
      return this.y;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.obj.getWidth();
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.obj.getHeight();
    }
  }, {
    key: 'exportObject',
    value: function exportObject() {
      var imageData = this.obj.getImageData();
      for (var i = 0; i < this.effects.length; i += 1) {
        imageData = this.effects[i].effect.run(imageData, this.effects[i].params);
      }
      return imageData;
    }
  }, {
    key: 'applyEffect',
    value: function applyEffect(name, parameters) {
      this.effects.push({
        name: name,
        effect: new (_EffectsRepository2.default.get(name))(),
        parameters: parameters
      });
    }
  }, {
    key: 'moveXY',
    value: function moveXY(x, y) {
      this.moveX(x);
      this.moveY(y);
      return this;
    }
  }, {
    key: 'moveX',
    value: function moveX(x) {
      this.x += x | 0;
      return this;
    }
  }, {
    key: 'moveY',
    value: function moveY(y) {
      this.y += y | 0;
      return this;
    }
  }, {
    key: 'setXY',
    value: function setXY(x, y) {
      this.setX(x);
      this.setY(y);
      return this;
    }
  }, {
    key: 'setX',
    value: function setX(x) {
      this.x = x;
      return this;
    }
  }, {
    key: 'setY',
    value: function setY(y) {
      this.y = y;
      return this;
    }
  }, {
    key: 'resize',
    value: function resize(newWidth, newHeight, mode, isLayerResize) {
      var oldWidth = this.getWidth(),
          oldHeight = this.getHeight(),
          ratioX = newWidth / oldWidth,
          ratioY = newHeight / oldHeight;

      if (isLayerResize) {
        this.moveXY(-this.getX() * ratioX, -this.getY() * ratioY);
      }

      this.getObject().resize(newWidth, newHeight, mode);

      return this;
    }
  }, {
    key: 'crop',
    value: function crop(startX, startY, width, height) {
      var object = this.getObject(),
          oldImageData = object.getImageData(),
          canvas = new _CanvasWrapper2.default(width, height),
          newImageData = canvas.getContext().createImageData(width, height);

      newImageData = (0, _common.cropImageData)(oldImageData, newImageData, startX, startY, width, height);

      object.setImageData(newImageData).setWidth(width).setHeight(height);

      this.setXY(startX, startY);

      return this;
    }
  }]);

  return LayerObject;
}();

exports.default = LayerObject;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CanvasWrapper = __webpack_require__(51);

var _CanvasWrapper2 = _interopRequireDefault(_CanvasWrapper);

var _Layer = __webpack_require__(141);

var _Layer2 = _interopRequireDefault(_Layer);

var _common = __webpack_require__(23);

var _EffectsRepository = __webpack_require__(70);

var _EffectsRepository2 = _interopRequireDefault(_EffectsRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Project = function () {
  function Project(width, height) {
    var parameters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Project);

    this.imageData = null;
    this.effects = [];
    this.layers = [];
    this.startTime = new Date();
    this.initialize(width, height, parameters);
  }

  _createClass(Project, [{
    key: 'initialize',
    value: function initialize(width, height, parameters) {
      this.parameters = parameters;
      this.width = width;
      this.height = height;
      this.canvas = new _CanvasWrapper2.default(width, height);
      this.imageData = this.canvas.getContext().getImageData(0, 0, width, height);
    }
  }, {
    key: 'createLayer',
    value: function createLayer(parameters) {
      var layer = new _Layer2.default(this.width, this.height, parameters);
      this.layers.push(layer);
      return layer;
    }
  }, {
    key: 'getTime',
    value: function getTime() {
      var end = new Date();
      return end.getTime() - this.startTime.getTime();
    }
  }, {
    key: 'exportTo',
    value: function exportTo(selector) {
      var imageType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'image/png';

      var i,
          container,
          exportedImage = (0, _common.isNode)() ? null : new window.Image();

      for (i = 0; i < this.layers.length; i++) {
        this.imageData = (0, _common.mergeImageData)({
          width: this.width,
          height: this.height,
          imageData: this.imageData
        }, {
          x: this.layers[i].getX(),
          y: this.layers[i].getY(),
          width: this.layers[i].getWidth(),
          height: this.layers[i].getHeight(),
          imageData: this.layers[i].exportLayer(),
          blendingMode: this.layers[i].getParameter("blendingMode")
        }, _common.mergePixelCallback);
      }

      for (i = 0; i < this.effects.length; i++) {
        this.imageData = this.effects[i].effect.run(this.imageData, this.effects[i].parameters);
      }

      this.canvas.getContext().putImageData(this.imageData, 0, 0);

      if ((0, _common.isNode)()) {
        var fs = __webpack_require__(135),
            img = this.canvas.toDataURL(),
            data = img.replace(/^data:image\/\w+;base64,/, ""),
            buff = new Buffer(data, 'base64');

        fs.writeFile(selector, buff);
      } else {
        container = document.querySelector(selector);
        exportedImage.src = this.canvas.toDataURL(imageType);
        container.appendChild(exportedImage);
      }
    }
  }, {
    key: 'applyEffect',
    value: function applyEffect(name) {
      var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this.effects.push({
        name: name,
        effect: new (_EffectsRepository2.default.get(name))(),
        parameters: parameters
      });
    }
  }, {
    key: 'resize',
    value: function resize(newWidth, newHeight, mode) {
      this.canvas.destroy();
      this.canvas = null;
      this.imageData = null;
      this.initialize(newWidth, newHeight, mode);

      for (var i = 0; i < this.layers.length; i += 1) {
        this.layers[i].resize(newWidth, newHeight, mode);
      }

      return this;
    }
  }]);

  return Project;
}();

exports.default = Project;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(190).Buffer))

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseCustom = __webpack_require__(34);

var _BaseCustom2 = _interopRequireDefault(_BaseCustom);

var _color = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoWhiteBalanceEffect = function (_BaseCustomEffect) {
  _inherits(AutoWhiteBalanceEffect, _BaseCustomEffect);

  function AutoWhiteBalanceEffect() {
    _classCallCheck(this, AutoWhiteBalanceEffect);

    return _possibleConstructorReturn(this, (AutoWhiteBalanceEffect.__proto__ || Object.getPrototypeOf(AutoWhiteBalanceEffect)).apply(this, arguments));
  }

  _createClass(AutoWhiteBalanceEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        intensity: 50
      };
    }
  }, {
    key: 'callback',
    value: function callback(width, height, parameters) {
      var x,
          y,
          sumA = 0,
          sumB = 0,
          pixel,
          lab,
          avgSumA,
          avgSumB,
          aDelta,
          bDelta;

      for (y = 0; y < height; y += 1) {
        for (x = 0; x < width; x += 1) {
          pixel = this.getPixel(x, y);
          lab = (0, _color.RGBtoCIELab)(pixel.r, pixel.g, pixel.b);
          sumA += lab.a;
          sumB += lab.b;
        }
      }

      avgSumA = 0 - sumA / (width * height);
      avgSumB = 0 - sumB / (width * height);

      aDelta = avgSumA * (parameters.intensity / 100) * 1.1;
      bDelta = avgSumB * (parameters.intensity / 100) * 1.1;

      for (y = 0; y < height; y += 1) {
        for (x = 0; x < width; x += 1) {
          pixel = this.getPixel(x, y);

          lab = (0, _color.RGBtoCIELab)(pixel.r, pixel.g, pixel.b);

          lab.a += aDelta;
          lab.b += bDelta;

          pixel = (0, _color.CIELabToRGB)(lab.l, lab.a, lab.b);
          pixel.a = this.getPixel(x, y).a;

          this.setPixel(x, y, pixel);
        }
      }
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'auto-white-balance';
    }
  }]);

  return AutoWhiteBalanceEffect;
}(_BaseCustom2.default);

exports.default = AutoWhiteBalanceEffect;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseCustom = __webpack_require__(34);

var _BaseCustom2 = _interopRequireDefault(_BaseCustom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlockEffect = function (_BaseCustomEffect) {
  _inherits(BlockEffect, _BaseCustomEffect);

  function BlockEffect() {
    _classCallCheck(this, BlockEffect);

    return _possibleConstructorReturn(this, (BlockEffect.__proto__ || Object.getPrototypeOf(BlockEffect)).apply(this, arguments));
  }

  _createClass(BlockEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        blockSize: 5
      };
    }
  }, {
    key: 'callback',
    value: function callback(width, height, parameters) {
      var x, y, w, h, t, r, g, b, pixel, by, bx;

      for (y = 0; y < height; y += parameters.blockSize) {
        for (x = 0; x < width; x += parameters.blockSize) {
          w = Math.min(parameters.blockSize, width - x);
          h = Math.min(parameters.blockSize, height - y);
          t = w * h;

          r = 0;
          g = 0;
          b = 0;

          for (by = 0; by < h; by += 1) {
            for (bx = 0; bx < w; bx += 1) {
              pixel = this.getOriginalPixel(x + bx, y + by);

              r += pixel.r & 0xFF;
              g += pixel.g & 0XFF;
              b += pixel.b & 0xFF;
            }
          }

          r = r / t;
          g = g / t;
          b = b / t;

          for (by = 0; by < h; by += 1) {
            for (bx = 0; bx < w; bx += 1) {
              this.setPixel(x + bx, y + by, {
                r: r,
                g: g,
                b: b,
                a: 255
              });
            }
          }
        }
      }
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'block';
    }
  }]);

  return BlockEffect;
}(_BaseCustom2.default);

exports.default = BlockEffect;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseCustom = __webpack_require__(34);

var _BaseCustom2 = _interopRequireDefault(_BaseCustom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BorderEffect = function (_BaseCustomEffect) {
  _inherits(BorderEffect, _BaseCustomEffect);

  function BorderEffect() {
    _classCallCheck(this, BorderEffect);

    return _possibleConstructorReturn(this, (BorderEffect.__proto__ || Object.getPrototypeOf(BorderEffect)).apply(this, arguments));
  }

  _createClass(BorderEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        leftBorder: 10,
        rightBorder: 10,
        topBorder: 10,
        bottomBorder: 10,
        borderColor: {
          r: 0,
          b: 0,
          g: 0,
          a: 255
        }
      };
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height, imageData) {
      return {
        leftBorder: parameters.leftBorder | 0,
        rightBorder: parameters.rightBorder | 0,
        topBorder: parameters.rightBorder | 0,
        bottomBorder: parameters.bottomBorder | 0
      };
    }
  }, {
    key: 'callback',
    value: function callback(width, height, parameters) {
      var x, y;

      for (y = 0; y < height; y += 1) {
        for (x = 0; x < width; x += 1) {
          if (this.data.leftBorder > 0 && x < this.data.leftBorder) {
            this.setPixel(x, y, parameters.borderColor);
          }
          if (this.data.rightBorder > 0 && width - this.data.rightBorder < x) {
            this.setPixel(x, y, parameters.borderColor);
          }
          if (this.data.topBorder > 0 && y < this.data.topBorder) {
            this.setPixel(x, y, parameters.borderColor);
          }
          if (this.data.bottomBorder > 0 && height - this.data.bottomBorder < y) {
            this.setPixel(x, y, parameters.borderColor);
          }
        }
      }
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'border';
    }
  }]);

  return BorderEffect;
}(_BaseCustom2.default);

exports.default = BorderEffect;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseCustom = __webpack_require__(34);

var _BaseCustom2 = _interopRequireDefault(_BaseCustom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentStretchingEffect = function (_BaseCustomEffect) {
  _inherits(ComponentStretchingEffect, _BaseCustomEffect);

  function ComponentStretchingEffect() {
    _classCallCheck(this, ComponentStretchingEffect);

    return _possibleConstructorReturn(this, (ComponentStretchingEffect.__proto__ || Object.getPrototypeOf(ComponentStretchingEffect)).apply(this, arguments));
  }

  _createClass(ComponentStretchingEffect, [{
    key: 'callback',
    value: function callback(width, height, parameters) {
      var x,
          y,
          minR = Infinity,
          minG = Infinity,
          minB = Infinity,
          maxR = -1,
          maxG = -1,
          maxB = -1,
          pixel,
          remap = function remap(value, min, max) {
        return (value - min) * 255 / (max - min);
      };

      for (y = 0; y < height; y += 1) {
        for (x = 0; x < width; x += 1) {
          pixel = this.getPixel(x, y);

          minR = Math.min(pixel.r, minR);
          minG = Math.min(pixel.g, minG);
          minB = Math.min(pixel.b, minB);

          maxR = Math.max(pixel.r, maxR);
          maxG = Math.max(pixel.g, maxG);
          maxB = Math.max(pixel.b, maxB);
        }
      }

      for (y = 0; y < height; y += 1) {
        for (x = 0; x < width; x += 1) {
          pixel = this.getPixel(x, y);

          pixel.r = remap(pixel.r, minR, maxR);
          pixel.g = remap(pixel.g, minG, maxG);
          pixel.b = remap(pixel.b, minB, maxB);

          this.setPixel(x, y, pixel);
        }
      }
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'component-stretching';
    }
  }]);

  return ComponentStretchingEffect;
}(_BaseCustom2.default);

exports.default = ComponentStretchingEffect;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseCustom = __webpack_require__(34);

var _BaseCustom2 = _interopRequireDefault(_BaseCustom);

var _common = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmbossEffect = function (_BaseCustomEffect) {
  _inherits(EmbossEffect, _BaseCustomEffect);

  function EmbossEffect() {
    _classCallCheck(this, EmbossEffect);

    return _possibleConstructorReturn(this, (EmbossEffect.__proto__ || Object.getPrototypeOf(EmbossEffect)).apply(this, arguments));
  }

  _createClass(EmbossEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        azimuth: 135 * Math.PI / 180,
        elevation: 30 * Math.PI / 180,
        width45: 3,
        emboss: true
      };
    }
  }, {
    key: 'callback',
    value: function callback(width, height, parameters) {
      var x,
          y,
          bumpMapWidth = width,
          bumpPixels = [],
          Nx,
          Ny,
          Nz,
          Lx,
          Ly,
          Lz,
          Nz2,
          NzLz,
          NdotL,
          s1,
          s2,
          s3,
          shade,
          background,
          pixelScale = 255.9,
          bumpIndex = 0,
          index = 0,
          pixel,
          r,
          g,
          b;

      Lx = Math.cos(parameters.azimuth) * Math.cos(parameters.elevation) * pixelScale | 0;
      Ly = Math.sin(parameters.azimuth) * Math.cos(parameters.elevation) * pixelScale | 0;
      Lz = Math.sin(parameters.elevation) * pixelScale | 0;

      Nz = 6 * 255 / parameters.width45 | 0;
      Nz2 = Nz * Nz;
      NzLz = Nz * Lz;

      background = Lz;

      for (y = 0; y < height; y += 1) {
        for (x = 0; x < width; x += 1) {
          bumpPixels.push((0, _common.brightness)(this.getOriginalPixel(x, y)) | 0);
        }
      }

      for (y = 0; y < height; y += 1, bumpIndex += bumpMapWidth) {
        s1 = bumpIndex;
        s2 = s1 + bumpMapWidth;
        s3 = s2 + bumpMapWidth;

        for (x = 0; x < width; x += 1, s1 += 1, s2 += 1, s3 += 1) {
          if (y != 0 && y < height - 2 && x != 0 && x < width - 2) {
            Nx = bumpPixels[s1 - 1] + bumpPixels[s2 - 1] + bumpPixels[s3 - 1] - bumpPixels[s1 + 1] - bumpPixels[s2 + 1] - bumpPixels[s3 + 1];
            Ny = bumpPixels[s3 - 1] + bumpPixels[s3] + bumpPixels[s3 + 1] - bumpPixels[s1 - 1] - bumpPixels[s1] - bumpPixels[s1 + 1];

            if (Nx == 0 && Ny == 0) {
              shade = background;
            } else {
              if ((NdotL = Nx * Lx + Ny * Ly + NzLz) < 0) {
                shade = 0;
              } else {
                shade = NdotL / Math.sqrt(Nx * Nx + Ny * Ny + Nz2);
              }
            }
          } else {
            shade = background;
          }

          if (parameters.emboss) {
            pixel = this.getOriginalPixelByIndex(index);
            r = pixel.r * shade >> 8;
            g = pixel.g * shade >> 8;
            b = pixel.b * shade >> 8;
            this.setPixelByIndex(index++, {
              r: r,
              g: g,
              b: b,
              a: pixel.a
            });
          } else {
            this.setPixelByIndex(index++, {
              r: shade,
              g: shade << 8,
              b: shade << 16,
              a: 255
            });
          }
        }
      }
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'emboss';
    }
  }]);

  return EmbossEffect;
}(_BaseCustom2.default);

exports.default = EmbossEffect;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseCustom = __webpack_require__(34);

var _BaseCustom2 = _interopRequireDefault(_BaseCustom);

var _color = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FillColorEffect = function (_BaseCustomEffect) {
  _inherits(FillColorEffect, _BaseCustomEffect);

  function FillColorEffect() {
    _classCallCheck(this, FillColorEffect);

    return _possibleConstructorReturn(this, (FillColorEffect.__proto__ || Object.getPrototypeOf(FillColorEffect)).apply(this, arguments));
  }

  _createClass(FillColorEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        color: "transparent"
      };
    }
  }, {
    key: 'callback',
    value: function callback(width, height, parameters) {
      var x, y, color;

      if (parameters.color === "transparent") {
        color = {
          r: 0,
          g: 0,
          b: 0,
          a: 0
        };
      } else {
        color = (0, _color.hexToRGB)(parameters.color);
        color.a = 255;
      }

      for (y = 0; y < height; y += 1) {
        for (x = 0; x < width; x += 1) {
          this.setPixel(x, y, color);
        }
      }
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'fill-color';
    }
  }]);

  return FillColorEffect;
}(_BaseCustom2.default);

exports.default = FillColorEffect;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseCustom = __webpack_require__(34);

var _BaseCustom2 = _interopRequireDefault(_BaseCustom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlipEffect = function (_BaseCustomEffect) {
  _inherits(FlipEffect, _BaseCustomEffect);

  function FlipEffect() {
    _classCallCheck(this, FlipEffect);

    return _possibleConstructorReturn(this, (FlipEffect.__proto__ || Object.getPrototypeOf(FlipEffect)).apply(this, arguments));
  }

  _createClass(FlipEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        operation: "FLIP_H" // FLIP_H, FLIP_V, FLIP_HV, FLIP_90CW, FLIP_90CCW, FLIP_180
      };
    }
  }, {
    key: 'callback',
    value: function callback(width, height, parameters) {
      var x = 0,
          y = 0,
          w = width,
          h = height,
          newX = 0,
          newY = 0,
          newW = w,
          newH = h,
          newRow,
          newCol;

      switch (parameters.operation) {
        case "FLIP_H":
          newX = width - (x + w);
          break;
        case "FLIP_V":
          newY = height - (y + h);
          break;
        case "FLIP_HV":
          newW = h;
          newH = w;
          newX = y;
          newY = x;
          break;
        case "FLIP_90CW":
          newW = h;
          newH = w;
          newX = height - (y + h);
          newY = x;
          break;
        case "FLIP_90CCW":
          newW = h;
          newH = w;
          newX = y;
          newY = width - (x + w);
          break;
        case "FLIP_180":
          newX = width - (x + w);
          newY = height - (y + h);
          break;
      }

      for (y = 0; y < height; y += 1) {
        for (x = 0; x < width; x += 1) {
          newRow = y;
          newCol = x;

          switch (parameters.operation) {
            case "FLIP_H":
              newCol = w - x - 1;
              break;
            case "FLIP_V":
              newRow = h - y - 1;
              break;
            case "FLIP_HV":
              newRow = x;
              newCol = y;
              break;
            case "FLIP_90CW":
              newRow = x;
              newCol = h - y - 1;
              break;
            case "FLIP_90CCW":
              newRow = w - x - 1;
              newCol = y;
              break;
            case "FLIP_180":
              newRow = h - y - 1;
              newCol = w - x - 1;
              break;
          }

          this.setPixel(newCol, newRow, this.getOriginalPixel(x, y));
        }
      }
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'flip';
    }
  }]);

  return FlipEffect;
}(_BaseCustom2.default);

exports.default = FlipEffect;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoContrastEffect = function (_BasePointEffect) {
  _inherits(AutoContrastEffect, _BasePointEffect);

  function AutoContrastEffect() {
    _classCallCheck(this, AutoContrastEffect);

    return _possibleConstructorReturn(this, (AutoContrastEffect.__proto__ || Object.getPrototypeOf(AutoContrastEffect)).apply(this, arguments));
  }

  _createClass(AutoContrastEffect, [{
    key: 'before',
    value: function before(parameters, width, height) {
      var x,
          y,
          pixel,
          min = Infinity,
          max = -1;

      for (y = 0; y < height; y += 1) {
        for (x = 0; x < width; x += 1) {
          pixel = this.getPixel(x, y);

          min = Math.min((pixel.r + pixel.g + pixel.b) / 3, min);
          max = Math.max((pixel.r + pixel.g + pixel.b) / 3, max);
        }
      }

      return {
        min: min,
        max: max,
        remap: function remap(value) {
          return (value - min) * 255 / (max - min);
        }
      };
    }
  }, {
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      pixel.r = this.data.remap(pixel.r, this.data.min, this.data.max);
      pixel.g = this.data.remap(pixel.g, this.data.min, this.data.max);
      pixel.b = this.data.remap(pixel.b, this.data.min, this.data.max);

      return pixel;
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'auto-contrast';
    }
  }]);

  return AutoContrastEffect;
}(_BasePoint2.default);

exports.default = AutoContrastEffect;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrightnessEffect = function (_BasePointEffect) {
  _inherits(BrightnessEffect, _BasePointEffect);

  function BrightnessEffect() {
    _classCallCheck(this, BrightnessEffect);

    return _possibleConstructorReturn(this, (BrightnessEffect.__proto__ || Object.getPrototypeOf(BrightnessEffect)).apply(this, arguments));
  }

  _createClass(BrightnessEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        brightness: 0.5
      };
    }
  }, {
    key: 'before',
    value: function before(parameters) {
      return {
        brightness: 255 * parameters.brightness
      };
    }
  }, {
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      pixel.r = pixel.r + this.data.brightness;
      pixel.g = pixel.g + this.data.brightness;
      pixel.b = pixel.b + this.data.brightness;

      return pixel;
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'brightness';
    }
  }]);

  return BrightnessEffect;
}(_BasePoint2.default);

exports.default = BrightnessEffect;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChannelMixEffect = function (_BasePointEffect) {
  _inherits(ChannelMixEffect, _BasePointEffect);

  function ChannelMixEffect() {
    _classCallCheck(this, ChannelMixEffect);

    return _possibleConstructorReturn(this, (ChannelMixEffect.__proto__ || Object.getPrototypeOf(ChannelMixEffect)).apply(this, arguments));
  }

  _createClass(ChannelMixEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        blueGreen: 1,
        redBlue: 1,
        greenRed: 1,
        intoR: 1,
        intoG: 1,
        intoB: 1
      };
    }
  }, {
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      var r = pixel.r,
          g = pixel.g,
          b = pixel.b;

      return {
        r: (parameters.intoR * (parameters.blueGreen * g + (255 - parameters.blueGreen) * b) / 255 + (255 - parameters.intoR) * r) / 255,
        g: (parameters.intoG * (parameters.redBlue * g + (255 - parameters.redBlue) * r) / 255 + (255 - parameters.intoG) * g) / 255,
        b: (parameters.intoB * (parameters.greenRed * g + (255 - parameters.greenRed) * g) / 255 + (255 - parameters.intoB) * b) / 255,
        a: pixel.a
      };
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'channel-mix';
    }
  }]);

  return ChannelMixEffect;
}(_BasePoint2.default);

exports.default = ChannelMixEffect;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContrastEffect = function (_BasePointEffect) {
  _inherits(ContrastEffect, _BasePointEffect);

  function ContrastEffect() {
    _classCallCheck(this, ContrastEffect);

    return _possibleConstructorReturn(this, (ContrastEffect.__proto__ || Object.getPrototypeOf(ContrastEffect)).apply(this, arguments));
  }

  _createClass(ContrastEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        contrast: 0.5
      };
    }
  }, {
    key: 'before',
    value: function before(parameters) {
      return {
        factor: 259 * (parameters.contrast * 255 + 255) / (255 * (259 - parameters.contrast * 255))
      };
    }
  }, {
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      pixel.r = this.data.factor * (pixel.r - 128) + 128;
      pixel.g = this.data.factor * (pixel.g - 128) + 128;
      pixel.b = this.data.factor * (pixel.b - 128) + 128;

      return pixel;
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'contrast';
    }
  }]);

  return ContrastEffect;
}(_BasePoint2.default);

exports.default = ContrastEffect;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DiffusionEffect = function (_BasePointEffect) {
  _inherits(DiffusionEffect, _BasePointEffect);

  function DiffusionEffect() {
    _classCallCheck(this, DiffusionEffect);

    return _possibleConstructorReturn(this, (DiffusionEffect.__proto__ || Object.getPrototypeOf(DiffusionEffect)).apply(this, arguments));
  }

  _createClass(DiffusionEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        matrix: [0, 0, 0, 0, 0, 7, 3, 5, 1],
        levels: 6,
        colorDither: true,
        granulate: true
      };
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height, imageData) {
      var i = void 0,
          sum = 0,
          map = [],
          div = [];

      for (i = 0; i < parameters.matrix.length; i += 1) {
        sum += parameters.matrix[i];
      }

      for (i = 0; i < parameters.levels; i += 1) {
        map[i] = parseInt(255 * i / (parameters.levels - 1));
      }

      for (i = 0; i < 256; i += 1) {
        div[i] = parseInt(parameters.levels * i / 256);
      }

      return {
        sum: sum,
        map: map,
        div: div
      };
    }
  }, {
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      var red1 = pixel.r,
          green1 = pixel.g,
          blue1 = pixel.b,
          red2 = void 0,
          green2 = void 0,
          blue2 = void 0,
          data = this.data,
          tmpPixel = void 0,
          tmpRed = void 0,
          tmpGreen = void 0,
          tmpBlue = void 0,
          i = void 0,
          j = void 0,
          iy = void 0,
          jx = void 0,
          w = void 0,
          grayScale = void 0;

      if (!parameters.colorDither) {
        grayScale = (red1 + green1 + blue1) / 3;
        red1 = grayScale;
        green1 = grayScale;
        blue1 = grayScale;
      }

      red2 = data.map[data.div[red1]];
      green2 = data.map[data.div[green1]];
      blue2 = data.map[data.div[blue1]];

      tmpRed = red1 - red2;
      tmpGreen = green1 - green2;
      tmpBlue = blue1 - blue2;

      if (parameters.granulate) {
        for (i = -1; i <= 1; i += 1) {
          iy = i + y;
          if (iy < 0 || iy >= height) {
            continue;
          }
          for (j = -1; j <= 1; j += 1) {
            jx = j + x;
            if (jx < 0 || jx >= width) {
              continue;
            }
            w = parameters.matrix[(i + 1) * 3 + j + 1];
            if (w !== 0) {
              tmpPixel = this.getPixel(jx, iy);
              tmpPixel.r += tmpRed * w / data.sum;
              tmpPixel.g += tmpGreen * w / data.sum;
              tmpPixel.b += tmpBlue * w / data.sum;
              this.setPixel(jx, iy, tmpPixel);
            }
          }
        }
      }

      return {
        r: red2,
        g: green2,
        b: blue2,
        a: pixel.a
      };
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'diffusion';
    }
  }]);

  return DiffusionEffect;
}(_BasePoint2.default);

exports.default = DiffusionEffect;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

var _common = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DissolveEffect = function (_BasePointEffect) {
  _inherits(DissolveEffect, _BasePointEffect);

  function DissolveEffect() {
    _classCallCheck(this, DissolveEffect);

    return _possibleConstructorReturn(this, (DissolveEffect.__proto__ || Object.getPrototypeOf(DissolveEffect)).apply(this, arguments));
  }

  _createClass(DissolveEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        density: 1,
        softness: 0
      };
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height, imageData) {
      var d = (1 - parameters.density) * (1 + parameters.softness);
      return {
        minDensity: d - parameters.softness,
        maxDensity: d
      };
    }
  }, {
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      var v = Math.random(),
          f = (0, _common.smoothStep)(this.data.minDensity, this.data.maxDensity, v);
      pixel.a = pixel.a * f;
      return pixel;
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'dissolve';
    }
  }]);

  return DissolveEffect;
}(_BasePoint2.default);

exports.default = DissolveEffect;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DitherEffect = function (_BasePointEffect) {
  _inherits(DitherEffect, _BasePointEffect);

  function DitherEffect() {
    _classCallCheck(this, DitherEffect);

    return _possibleConstructorReturn(this, (DitherEffect.__proto__ || Object.getPrototypeOf(DitherEffect)).apply(this, arguments));
  }

  _createClass(DitherEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        matrices: {
          ditherMagic4x4Matrix: [0, 14, 3, 13, 11, 5, 8, 6, 12, 2, 15, 1, 7, 9, 4, 10],
          ditherOrdered4x4Matrix: [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5],
          ditherLines4x4Matrix: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          dither90Halftone6x6Matrix: [29, 18, 12, 19, 30, 34, 17, 7, 4, 8, 20, 28, 11, 3, 0, 1, 9, 27, 16, 6, 2, 5, 13, 26, 25, 15, 10, 14, 21, 31, 33, 25, 24, 23, 33, 36],
          ditherOrdered6x6Matrix: [1, 59, 15, 55, 2, 56, 12, 52, 33, 17, 47, 31, 34, 18, 44, 28, 9, 49, 5, 63, 10, 50, 6, 60, 41, 25, 37, 21, 42, 26, 38, 22, 3, 57, 13, 53, 0, 58, 14, 54, 35, 19, 45, 29, 32, 16, 46, 30, 11, 51, 7, 61, 8, 48, 4, 62, 43, 27, 39, 23, 40, 24, 36, 20],
          ditherOrdered8x8Matrix: [1, 235, 59, 219, 15, 231, 55, 215, 2, 232, 56, 216, 12, 228, 52, 212, 129, 65, 187, 123, 143, 79, 183, 119, 130, 66, 184, 120, 140, 76, 180, 116, 33, 193, 17, 251, 47, 207, 31, 247, 34, 194, 18, 248, 44, 204, 28, 244, 161, 97, 145, 81, 175, 111, 159, 95, 162, 98, 146, 82, 172, 108, 156, 92, 9, 225, 49, 209, 5, 239, 63, 223, 10, 226, 50, 210, 6, 236, 60, 220, 137, 73, 177, 113, 133, 69, 191, 127, 138, 74, 178, 114, 134, 70, 188, 124, 41, 201, 25, 241, 37, 197, 21, 255, 42, 202, 26, 242, 38, 198, 22, 252, 169, 105, 153, 89, 165, 101, 149, 85, 170, 106, 154, 90, 166, 102, 150, 86, 3, 233, 57, 217, 13, 229, 53, 213, 0, 234, 58, 218, 14, 230, 54, 214, 131, 67, 185, 121, 141, 77, 181, 117, 128, 64, 186, 122, 142, 78, 182, 118, 35, 195, 19, 249, 45, 205, 29, 245, 32, 192, 16, 250, 46, 206, 30, 246, 163, 99, 147, 83, 173, 109, 157, 93, 160, 96, 144, 80, 174, 110, 158, 94, 11, 227, 51, 211, 7, 237, 61, 221, 8, 224, 48, 208, 4, 238, 62, 222, 139, 75, 179, 115, 135, 71, 189, 125, 136, 72, 176, 112, 132, 68, 190, 126, 43, 203, 27, 243, 39, 199, 23, 253, 40, 200, 24, 240, 36, 196, 20, 254, 171, 107, 155, 91, 167, 103, 151, 87, 168, 104, 152, 88, 164, 100, 148, 84],
          ditherCluster3Matrix: [9, 11, 10, 8, 6, 7, 12, 17, 16, 5, 0, 1, 13, 14, 15, 4, 3, 2, 8, 6, 7, 9, 11, 10, 5, 0, 1, 12, 17, 16, 4, 3, 2, 13, 14, 15],
          ditherCluster4Matrix: [18, 20, 19, 16, 13, 11, 12, 15, 27, 28, 29, 22, 4, 3, 2, 9, 26, 31, 30, 21, 5, 0, 1, 10, 23, 25, 24, 17, 8, 6, 7, 14, 13, 11, 12, 15, 18, 20, 19, 16, 4, 3, 2, 9, 27, 28, 29, 22, 5, 0, 1, 10, 26, 31, 30, 21, 8, 6, 7, 14, 23, 25, 24, 17],
          ditherCluster8Matrix: [64, 69, 77, 87, 86, 76, 68, 67, 63, 58, 50, 40, 41, 51, 59, 60, 70, 94, 100, 109, 108, 99, 93, 75, 57, 33, 27, 18, 19, 28, 34, 52, 78, 101, 114, 116, 115, 112, 98, 83, 49, 26, 13, 11, 12, 15, 29, 44, 88, 110, 123, 124, 125, 118, 107, 85, 39, 17, 4, 3, 2, 9, 20, 42, 89, 111, 122, 127, 126, 117, 106, 84, 38, 16, 5, 0, 1, 10, 21, 43, 79, 102, 119, 121, 120, 113, 97, 82, 48, 25, 8, 6, 7, 14, 30, 45, 71, 95, 103, 104, 105, 96, 92, 74, 56, 32, 24, 23, 22, 31, 35, 53, 65, 72, 80, 90, 91, 81, 73, 66, 62, 55, 47, 37, 36, 46, 54, 61, 63, 58, 50, 40, 41, 51, 59, 60, 64, 69, 77, 87, 86, 76, 68, 67, 57, 33, 27, 18, 19, 28, 34, 52, 70, 94, 100, 109, 108, 99, 93, 75, 49, 26, 13, 11, 12, 15, 29, 44, 78, 101, 114, 116, 115, 112, 98, 83, 39, 17, 4, 3, 2, 9, 20, 42, 88, 110, 123, 124, 125, 118, 107, 85, 38, 16, 5, 0, 1, 10, 21, 43, 89, 111, 122, 127, 126, 117, 106, 84, 48, 25, 8, 6, 7, 14, 30, 45, 79, 102, 119, 121, 120, 113, 97, 82, 56, 32, 24, 23, 22, 31, 35, 53, 71, 95, 103, 104, 105, 96, 92, 74, 62, 55, 47, 37, 36, 46, 54, 61, 65, 72, 80, 90, 91, 81, 73, 66]
        },
        levels: 6,
        matrix: "ditherMagic4x4Matrix",
        colorDither: true
      };
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height, imageData) {
      var matrix = parameters.matrix,
          rows = void 0,
          cols = void 0,
          map = [],
          div = [],
          mod = [],
          i = void 0;

      if (typeof matrix === "string") {
        matrix = parameters.matrices[matrix];
      }

      rows = Math.sqrt(matrix.length);
      cols = Math.sqrt(matrix.length);

      for (i = 0; i < parameters.levels; i += 1) {
        map[i] = 255 * i / (parameters.levels - 1);
      }

      for (i = 0; i < 256; i += 1) {
        div[i] = parseInt((parameters.levels - 1) * i / 256);
        mod[i] = parseInt(i * (rows * cols + 1) / 256);
      }

      return {
        matrix: matrix,
        map: map,
        div: div,
        mod: mod,
        cols: cols,
        rows: rows
      };
    }
  }, {
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      var col = x % this.data.cols,
          row = y % this.data.rows,
          v = parameters.matrix[row * this.data.cols + col],
          red = pixel.r,
          green = pixel.g,
          blue = pixel.b,
          result = { a: pixel.a },
          value = void 0;

      if (parameters.colorDither) {
        result.r = this.data.map[this.data.mod[red] > v ? this.data.div[red] + 1 : this.data.div[red]];
        result.g = this.data.map[this.data.mod[green] > v ? this.data.div[green] + 1 : this.data.div[green]];
        result.b = this.data.map[this.data.mod[blue] > v ? this.data.div[blue] + 1 : this.data.div[blue]];
      } else {
        value = (red + green + blue) / 3;
        result.r = result.g = result.b = this.data.map[this.data.mod[value] > v ? this.data.div[value] + 1 : this.data.div[value]];
      }

      return result;
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'dither';
    }
  }]);

  return DitherEffect;
}(_BasePoint2.default);

exports.default = DitherEffect;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EdgeEffect = function (_BasePointEffect) {
  _inherits(EdgeEffect, _BasePointEffect);

  function EdgeEffect() {
    _classCallCheck(this, EdgeEffect);

    return _possibleConstructorReturn(this, (EdgeEffect.__proto__ || Object.getPrototypeOf(EdgeEffect)).apply(this, arguments));
  }

  _createClass(EdgeEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        matrixes: {
          robertsV: [0, 0, -1, 0, 1, 0, 0, 0, 0],
          robertsH: [-1, 0, 0, 0, 1, 0, 0, 0, 0],
          prewittV: [-1, 0, 1, -1, 0, 1, -1, 0, 1],
          prewittH: [-1, -1, -1, 0, 0, 0, 1, 1, 1],
          sobelV: [-1, 0, 1, -2, 0, 2, -1, 0, 1],
          sobelH: [-1, -2, -1, 0, 0, 0, 1, 2, 1],
          freiChenV: [-1, 0, 1, -Math.sqrt(2), 0, Math.sqrt(2), -1, 0, 1],
          freiChenH: [-1, -Math.sqrt(2), -1, 0, 0, 0, 1, Math.sqrt(2), 1]
        },
        hEdgeMatrix: "sobelV",
        vEdgeMatrix: "sobelH"
      };
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height, imageData) {
      var hEdgeMatrix = parameters.hEdgeMatrix,
          vEdgeMatrix = parameters.vEdgeMatrix;

      if (typeof hEdgeMatrix === "string") {
        hEdgeMatrix = parameters.matrixes[parameters.hEdgeMatrix];
      }
      if (typeof vEdgeMatrix === "string") {
        vEdgeMatrix = parameters.matrixes[parameters.vEdgeMatrix];
      }
      return {
        hEdgeMatrix: hEdgeMatrix,
        vEdgeMatrix: vEdgeMatrix
      };
    }
  }, {
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      var r = 0,
          g = 0,
          b = 0,
          rh = 0,
          gh = 0,
          bh = 0,
          rv = 0,
          gv = 0,
          bv = 0,
          row,
          iy,
          col,
          ix,
          mOffset,
          pixel2,
          h,
          v;

      for (row = -1; row <= 1; row += 1) {
        iy = y + row;
        if (!(0 <= iy && iy < height)) {
          iy = y;
        }
        mOffset = 3 * (row + 1) + 1;
        for (col = -1; col <= 1; col += 1) {
          ix = x + col;
          if (!(0 <= ix && ix < width)) {
            ix = x;
          }
          pixel2 = this.getOriginalPixel(ix, iy);
          h = this.data.hEdgeMatrix[mOffset + col];
          v = this.data.vEdgeMatrix[mOffset + col];

          r = pixel2.r;
          g = pixel2.g;
          b = pixel2.b;

          rh += Math.floor(h * r);
          gh += Math.floor(h * g);
          bh += Math.floor(h * b);

          rv += Math.floor(v * r);
          gv += Math.floor(v * g);
          bv += Math.floor(v + b);
        }
      }
      r = Math.floor(Math.sqrt(rh * rh + rv * rv) / 1.8);
      g = Math.floor(Math.sqrt(gh * gh + gv * gv) / 1.8);
      b = Math.floor(Math.sqrt(bh * bh + bv * bv) / 1.8);
      return {
        r: r,
        g: g,
        b: b,
        a: pixel.a
      };
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'edge';
    }
  }]);

  return EdgeEffect;
}(_BasePoint2.default);

exports.default = EdgeEffect;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExposureEffect = function (_BasePointEffect) {
  _inherits(ExposureEffect, _BasePointEffect);

  function ExposureEffect() {
    _classCallCheck(this, ExposureEffect);

    return _possibleConstructorReturn(this, (ExposureEffect.__proto__ || Object.getPrototypeOf(ExposureEffect)).apply(this, arguments));
  }

  _createClass(ExposureEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        exposure: 1
      };
    }
  }, {
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      pixel.r = (1 - Math.exp(-pixel.r / 255 * parameters.exposure)) * 255;
      pixel.g = (1 - Math.exp(-pixel.g / 255 * parameters.exposure)) * 255;
      pixel.b = (1 - Math.exp(-pixel.b / 255 * parameters.exposure)) * 255;

      return pixel;
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'exposure';
    }
  }]);

  return ExposureEffect;
}(_BasePoint2.default);

exports.default = ExposureEffect;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GainEffect = function (_BasePointEffect) {
  _inherits(GainEffect, _BasePointEffect);

  function GainEffect() {
    _classCallCheck(this, GainEffect);

    return _possibleConstructorReturn(this, (GainEffect.__proto__ || Object.getPrototypeOf(GainEffect)).apply(this, arguments));
  }

  _createClass(GainEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        gain: 1,
        bias: 1
      };
    }
  }, {
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      var red = (1 / parameters.gain - 2) * (1 - 2 * pixel.r / 255),
          green = (1 / parameters.gain - 2) * (1 - 2 * pixel.g / 255),
          blue = (1 / parameters.gain - 2) * (1 - 2 * pixel.b / 255);

      if (pixel.r / 255 < 0.5) {
        red = pixel.r / 255 / red + 1;
      } else {
        red = (red - pixel.r / 255) / (red - 1);
      }

      if (pixel.g / 255 < 0.5) {
        green = pixel.g / 255 / green + 1;
      } else {
        green = (green - pixel.g / 255) / (green - 1);
      }

      if (pixel.b / 255 < 0.5) {
        blue = pixel.b / 255 / blue + 1;
      } else {
        blue = (blue - pixel.b / 255) / (blue - 1);
      }

      red = red / ((1 / parameters.bias - 2) * (1 - red) + 1);
      green = green / ((1 / parameters.bias - 2) * (1 - green) + 1);
      blue = blue / ((1 / parameters.bias - 2) * (1 - blue) + 1);

      pixel.r = red * 255;
      pixel.g = green * 255;
      pixel.b = blue * 255;

      return pixel;
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'gain';
    }
  }]);

  return GainEffect;
}(_BasePoint2.default);

exports.default = GainEffect;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GammaEffect = function (_BasePointEffect) {
  _inherits(GammaEffect, _BasePointEffect);

  function GammaEffect() {
    _classCallCheck(this, GammaEffect);

    return _possibleConstructorReturn(this, (GammaEffect.__proto__ || Object.getPrototypeOf(GammaEffect)).apply(this, arguments));
  }

  _createClass(GammaEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        gammaRed: 1,
        gammaGreen: 1,
        gammaBlue: 1
      };
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height, imageData) {
      var table = {
        r: [],
        g: [],
        b: []
      },
          i = void 0;

      for (i = 0; i < 256; i += 1) {
        table.r[i] = parseInt(255 * Math.pow(i / 255, 1 / parameters.gammaRed) + 0.5);
        table.g[i] = parseInt(255 * Math.pow(i / 255, 1 / parameters.gammaGreen) + 0.5);
        table.b[i] = parseInt(255 * Math.pow(i / 255, 1 / parameters.gammaBlue) + 0.5);
      }

      return {
        table: table
      };
    }
  }, {
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      return {
        r: this.data.table.r[pixel.r],
        g: this.data.table.g[pixel.g],
        b: this.data.table.b[pixel.b],
        a: pixel.a
      };
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'gamma';
    }
  }]);

  return GammaEffect;
}(_BasePoint2.default);

exports.default = GammaEffect;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GrayScaleEffect = function (_BasePointEffect) {
  _inherits(GrayScaleEffect, _BasePointEffect);

  function GrayScaleEffect() {
    _classCallCheck(this, GrayScaleEffect);

    return _possibleConstructorReturn(this, (GrayScaleEffect.__proto__ || Object.getPrototypeOf(GrayScaleEffect)).apply(this, arguments));
  }

  _createClass(GrayScaleEffect, [{
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      var newRGB = 0.299 * pixel.r + 0.587 * pixel.g + 0.114 * pixel.b;
      return {
        r: newRGB,
        g: newRGB,
        b: newRGB,
        a: pixel.a
      };
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'gray-scale';
    }
  }]);

  return GrayScaleEffect;
}(_BasePoint2.default);

exports.default = GrayScaleEffect;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

var _color = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HSBAdjustEffect = function (_BasePointEffect) {
  _inherits(HSBAdjustEffect, _BasePointEffect);

  function HSBAdjustEffect() {
    _classCallCheck(this, HSBAdjustEffect);

    return _possibleConstructorReturn(this, (HSBAdjustEffect.__proto__ || Object.getPrototypeOf(HSBAdjustEffect)).apply(this, arguments));
  }

  _createClass(HSBAdjustEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        h: 1,
        s: 1,
        b: 1
      };
    }
  }, {
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      var hsb = (0, _color.RGBtoHSB)(pixel.r, pixel.g, pixel.b);

      hsb.h += parameters.h;
      while (hsb.h < 0) {
        hsb.h += Math.PI * 2;
      }

      hsb.s += parameters.s;
      hsb.s = Math.max(Math.min(hsb.s, 1), 0);

      hsb.b += parameters.b;
      hsb.b = Math.max(Math.min(hsb.b, 1), 0);

      var result = (0, _color.HSBtoRGB)(hsb.h, hsb.s, hsb.b);
      pixel.r = result.r;
      pixel.g = result.g;
      pixel.b = result.b;

      return pixel;
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'hsb-adjust';
    }
  }]);

  return HSBAdjustEffect;
}(_BasePoint2.default);

exports.default = HSBAdjustEffect;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvertEffect = function (_BasePointEffect) {
  _inherits(InvertEffect, _BasePointEffect);

  function InvertEffect() {
    _classCallCheck(this, InvertEffect);

    return _possibleConstructorReturn(this, (InvertEffect.__proto__ || Object.getPrototypeOf(InvertEffect)).apply(this, arguments));
  }

  _createClass(InvertEffect, [{
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      pixel.r = 255 - pixel.r;
      pixel.g = 255 - pixel.g;
      pixel.b = 255 - pixel.b;
      return pixel;
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'invert';
    }
  }]);

  return InvertEffect;
}(_BasePoint2.default);

exports.default = InvertEffect;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvertAlphaEffect = function (_BasePointEffect) {
  _inherits(InvertAlphaEffect, _BasePointEffect);

  function InvertAlphaEffect() {
    _classCallCheck(this, InvertAlphaEffect);

    return _possibleConstructorReturn(this, (InvertAlphaEffect.__proto__ || Object.getPrototypeOf(InvertAlphaEffect)).apply(this, arguments));
  }

  _createClass(InvertAlphaEffect, [{
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      pixel.a = 255 - pixel.a;
      return pixel;
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'invert-alpha';
    }
  }]);

  return InvertAlphaEffect;
}(_BasePoint2.default);

exports.default = InvertAlphaEffect;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LevelsEffect = function (_BasePointEffect) {
  _inherits(LevelsEffect, _BasePointEffect);

  function LevelsEffect() {
    _classCallCheck(this, LevelsEffect);

    return _possibleConstructorReturn(this, (LevelsEffect.__proto__ || Object.getPrototypeOf(LevelsEffect)).apply(this, arguments));
  }

  _createClass(LevelsEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        low: 0,
        high: 1,
        lowOutput: 0,
        highOutput: 1
      };
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height, imageData) {
      var Histogram = function Histogram(imageData, width, height, offset, stride) {
        var i = void 0,
            j = void 0,
            index = void 0,
            x = void 0,
            y = void 0,
            histogram = new Array(3),
            minValue = new Array(4),
            maxValue = new Array(4),
            minFrequency = new Array(3),
            maxFrequency = new Array(3),
            mean = new Array(3),
            numSamples = width * height,
            isGray = true,
            RED = 0,
            GREEN = 1,
            BLUE = 2,
            GRAY = 3;

        for (i = 0; i < histogram.length; i += 1) {
          histogram[i] = new Array(256);
          for (j = 0; j < 256; j += 1) {
            histogram[i][j] = 0;
          }
        }

        for (y = 0; y < height; y += 1) {
          for (x = 0; x < width; x += 1) {
            index = y * width * 4 + x * 4;
            histogram[RED][imageData.data[index]]++;
            histogram[GREEN][imageData.data[index + 1]]++;
            histogram[BLUE][imageData.data[index + 2]]++;
          }
        }

        for (i = 0; i < 256; i += 1) {
          if (histogram[RED][i] !== histogram[GREEN][i] || histogram[GREEN][i] !== histogram[BLUE][i]) {
            isGray = false;
            break;
          }
        }

        for (i = 0; i < 3; i += 1) {
          for (j = 0; j < 256; j += 1) {
            if (histogram[i][j] > 0) {
              minValue[i] = j;
              break;
            }
          }
          for (j = 255; j >= 0; j -= 1) {
            if (histogram[i][j] > 0) {
              maxValue[i] = j;
              break;
            }
          }
          minFrequency[i] = Infinity;
          maxFrequency[i] = 0;
          for (j = 0; j < 256; j += 1) {
            minFrequency[i] = Math.min(minFrequency[i], histogram[i][j]);
            maxFrequency[i] = Math.max(maxFrequency[i], histogram[i][j]);
            mean[i] += j * histogram[i][j];
          }
          mean[i] /= numSamples;
          minValue[GRAY] = Math.min(minValue[RED], minValue[GREEN], minValue[BLUE]);
          maxValue[GRAY] = Math.max(maxValue[RED], maxValue[GREEN], maxValue[BLUE]);
        }

        this.getNumSamples = function () {
          return numSamples;
        };

        this.isGray = function () {
          return isGray;
        };

        this.getFrequency = function (channel, value) {
          if (!value) {
            if (numSamples > 0 && isGray && value >= 0 && value <= 255) {
              return histogram[0][value];
            }
            return -1;
          }
          if (numSamples < 1 || channel < 0 || channel > 2 || value < 0 || value > 255) {
            return -1;
          }
          return histogram[channel][value];
        };

        this.getMinFrequency = function (channel) {
          if (!channel) {
            if (numSamples > 0 && isGray) {
              return minFrequency[0];
            }
            return -1;
          }
          if (numSamples < 1 || channel < 0 || channel > 2) {
            return -1;
          }
          return minFrequency[channel];
        };

        this.getMaxFrequency = function (channel) {
          if (!channel) {
            if (numSamples > 0 && isGray) {
              return maxFrequency[0];
            }
            return -1;
          }
          if (numSamples < 1 || channel < 0 || channel > 2) {
            return -1;
          }
          return maxFrequency[channel];
        };

        this.getMinValue = function (channel) {
          if (!channel) {
            if (numSamples > 0 && isGray) {
              return minValue[0];
            }
            return -1;
          }
          return minValue[channel];
        };

        this.getMaxValue = function (channel) {
          if (!channel) {
            if (numSamples > 0 && isGray) {
              return maxValue[0];
            }
            return -1;
          }
          return maxValue[channel];
        };

        this.getMeanValue = function (channel) {
          if (!channel) {
            if (numSamples > 0 && isGray) {
              return mean[0];
            }
            return -1;
          }
          return mean[channel];
        };
      };

      var histogram = new Histogram(imageData, width, height, 0, width),
          lut = new Array(3),
          low = parameters.low * 255,
          high = parameters.high * 255,
          i = void 0,
          j = void 0;

      for (i = 0; i < lut.length; i += 1) {
        lut[i] = new Array(256);
      }
      if (low === high) {
        high++;
      }

      for (i = 0; i < 3; i += 1) {
        for (j = 0; j < 256; j += 1) {
          lut[i][j] = 255 * (parameters.lowOutput + (parameters.highOutput - parameters.lowOutput) * (j - low) / (high - low));
        }
      }

      histogram.isGray(); // uglify fix - "Side effects in initialization of unused variable histogram" warning

      return {
        lut: lut
      };
    }
  }, {
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      return {
        r: this.data.lut[0][pixel.r],
        g: this.data.lut[1][pixel.g],
        b: this.data.lut[2][pixel.b],
        a: pixel.a
      };
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'levels';
    }
  }]);

  return LevelsEffect;
}(_BasePoint2.default);

exports.default = LevelsEffect;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RescaleEffect = function (_BasePointEffect) {
  _inherits(RescaleEffect, _BasePointEffect);

  function RescaleEffect() {
    _classCallCheck(this, RescaleEffect);

    return _possibleConstructorReturn(this, (RescaleEffect.__proto__ || Object.getPrototypeOf(RescaleEffect)).apply(this, arguments));
  }

  _createClass(RescaleEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        scale: 1
      };
    }
  }, {
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      pixel.r = parameters.scale * pixel.r;
      pixel.g = parameters.scale * pixel.g;
      pixel.b = parameters.scale * pixel.b;

      return pixel;
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'rescale';
    }
  }]);

  return RescaleEffect;
}(_BasePoint2.default);

exports.default = RescaleEffect;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GrayScaleEffect = function (_BasePointEffect) {
  _inherits(GrayScaleEffect, _BasePointEffect);

  function GrayScaleEffect() {
    _classCallCheck(this, GrayScaleEffect);

    return _possibleConstructorReturn(this, (GrayScaleEffect.__proto__ || Object.getPrototypeOf(GrayScaleEffect)).apply(this, arguments));
  }

  _createClass(GrayScaleEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        sepiaValue: 1
      };
    }
  }, {
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      var tmp = 0.299 * pixel.r + 0.587 * pixel.g + 0.114 * pixel.b;

      pixel.r = tmp + 2 * parameters.sepiaValue;
      pixel.g = tmp + parameters.sepiaValue;
      pixel.b = tmp;

      return pixel;
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'sepia';
    }
  }]);

  return GrayScaleEffect;
}(_BasePoint2.default);

exports.default = GrayScaleEffect;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SolarizeEffect = function (_BasePointEffect) {
  _inherits(SolarizeEffect, _BasePointEffect);

  function SolarizeEffect() {
    _classCallCheck(this, SolarizeEffect);

    return _possibleConstructorReturn(this, (SolarizeEffect.__proto__ || Object.getPrototypeOf(SolarizeEffect)).apply(this, arguments));
  }

  _createClass(SolarizeEffect, [{
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      var red = pixel.r / 255 > 0.5 ? 2 * (pixel.r / 255 - 0.5) : 2 * (0.5 - pixel.r / 255),
          green = pixel.g / 255 > 0.5 ? 2 * (pixel.g / 255 - 0.5) : 2 * (0.5 - pixel.g / 255),
          blue = pixel.b / 255 > 0.5 ? 2 * (pixel.b / 255 - 0.5) : 2 * (0.5 - pixel.b / 255);

      return {
        r: red * 255,
        g: green * 255,
        b: blue * 255,
        a: pixel.a
      };
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'solarize';
    }
  }]);

  return SolarizeEffect;
}(_BasePoint2.default);

exports.default = SolarizeEffect;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThresholdEffect = function (_BasePointEffect) {
  _inherits(ThresholdEffect, _BasePointEffect);

  function ThresholdEffect() {
    _classCallCheck(this, ThresholdEffect);

    return _possibleConstructorReturn(this, (ThresholdEffect.__proto__ || Object.getPrototypeOf(ThresholdEffect)).apply(this, arguments));
  }

  _createClass(ThresholdEffect, [{
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      var grayscale = (pixel.r + pixel.g + pixel.b) / 3;

      if (grayscale >= 127) {
        return {
          r: 255,
          g: 255,
          b: 255,
          a: pixel.a
        };
      }

      return {
        r: 0,
        g: 0,
        b: 0,
        a: pixel.a
      };
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'threshold';
    }
  }]);

  return ThresholdEffect;
}(_BasePoint2.default);

exports.default = ThresholdEffect;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasePoint = __webpack_require__(6);

var _BasePoint2 = _interopRequireDefault(_BasePoint);

var _color = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TritoneEffect = function (_BasePointEffect) {
  _inherits(TritoneEffect, _BasePointEffect);

  function TritoneEffect() {
    _classCallCheck(this, TritoneEffect);

    return _possibleConstructorReturn(this, (TritoneEffect.__proto__ || Object.getPrototypeOf(TritoneEffect)).apply(this, arguments));
  }

  _createClass(TritoneEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        shadowColor: {
          r: 0,
          g: 0,
          b: 0,
          a: 255
        },
        midColor: {
          r: 136,
          g: 136,
          b: 136,
          a: 255
        },
        highColor: {
          r: 255,
          g: 255,
          b: 255,
          a: 255
        }
      };
    }
  }, {
    key: 'before',
    value: function before(parameters) {
      var lut = [],
          i = void 0,
          t = void 0;

      for (i = 0; i < 128; i += 1) {
        t = i / 127;
        lut[i] = (0, _color.mixColors)(t, parameters.shadowColor, parameters.midColor);
      }
      for (i = 128; i < 256; i += 1) {
        t = (i - 127) / 128;
        lut[i] = (0, _color.mixColors)(t, parameters.midColor, parameters.highColor);
      }
      return {
        lut: lut
      };
    }
  }, {
    key: 'callback',
    value: function callback(pixel, x, y, parameters, width, height) {
      var brightness = Math.floor((pixel.r + pixel.g + pixel.b) / 3);
      return this.data.lut[brightness];
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'tritone';
    }
  }]);

  return TritoneEffect;
}(_BasePoint2.default);

exports.default = TritoneEffect;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTransform = __webpack_require__(11);

var _BaseTransform2 = _interopRequireDefault(_BaseTransform);

var _common = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CircleEffect = function (_BaseTransformEffect) {
  _inherits(CircleEffect, _BaseTransformEffect);

  function CircleEffect() {
    _classCallCheck(this, CircleEffect);

    return _possibleConstructorReturn(this, (CircleEffect.__proto__ || Object.getPrototypeOf(CircleEffect)).apply(this, arguments));
  }

  _createClass(CircleEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        radius: 10,
        height: 20,
        angle: 0,
        spreadAngle: Math.PI,
        centreX: 0.5,
        centreY: 0.5
      };
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height, imageData) {
      return {
        icentreX: width * parameters.centreX,
        icentreY: height * parameters.centreY,
        width: --width
      };
    }
  }, {
    key: 'callback',
    value: function callback(x, y, parameters, width, height) {
      var dx = x - this.data.icentreX,
          dy = y - this.data.icentreX,
          theta = Math.atan2(-dy, -dx) + parameters.angle,
          r = Math.sqrt(dx * dx + dy * dy);

      theta = (0, _common.mod)(theta, 2 * Math.PI);

      return [this.data.width * theta / parameters.spreadAngle + 0.00001, height * (1 - (r - parameters.radius) / (height + 0.00001))];
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'circle';
    }
  }]);

  return CircleEffect;
}(_BaseTransform2.default);

exports.default = CircleEffect;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTransform = __webpack_require__(11);

var _BaseTransform2 = _interopRequireDefault(_BaseTransform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DiffuseEffect = function (_BaseTransformEffect) {
  _inherits(DiffuseEffect, _BaseTransformEffect);

  function DiffuseEffect() {
    _classCallCheck(this, DiffuseEffect);

    return _possibleConstructorReturn(this, (DiffuseEffect.__proto__ || Object.getPrototypeOf(DiffuseEffect)).apply(this, arguments));
  }

  _createClass(DiffuseEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        scale: 4
      };
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height, imageData) {
      var sinTable = new Array(256),
          cosTable = new Array(256),
          i = void 0,
          angle = void 0;
      for (i = 0; i < 256; i += 1) {
        angle = Math.PI * 2 * i / 256;
        sinTable[i] = parameters.scale * Math.sin(angle);
        cosTable[i] = parameters.scale * Math.cos(angle);
      }
      return {
        sinTable: sinTable,
        cosTable: cosTable
      };
    }
  }, {
    key: 'callback',
    value: function callback(x, y, parameters) {
      var angle = parseInt(Math.random() * 255),
          distance = Math.random();

      return [x + distance * this.data.sinTable[angle], y + distance * this.data.cosTable[angle]];
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'diffuse';
    }
  }]);

  return DiffuseEffect;
}(_BaseTransform2.default);

exports.default = DiffuseEffect;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTransform = __webpack_require__(11);

var _BaseTransform2 = _interopRequireDefault(_BaseTransform);

var _common = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KaleidoscopeEffect = function (_BaseTransformEffect) {
  _inherits(KaleidoscopeEffect, _BaseTransformEffect);

  function KaleidoscopeEffect() {
    _classCallCheck(this, KaleidoscopeEffect);

    return _possibleConstructorReturn(this, (KaleidoscopeEffect.__proto__ || Object.getPrototypeOf(KaleidoscopeEffect)).apply(this, arguments));
  }

  _createClass(KaleidoscopeEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        centreX: 0.5,
        centreY: 0.5,
        angle: 0,
        angle2: 0,
        sides: 3,
        radius: 0
      };
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height, imageData) {
      return {
        icentreX: width * parameters.centreX,
        icentreY: height * parameters.centreY
      };
    }
  }, {
    key: 'callback',
    value: function callback(x, y, parameters) {
      var dx = x - this.data.icentreX,
          dy = y - this.data.icentreY,
          r = Math.sqrt(dx * dx + dy * dy),
          theta = Math.atan2(dy, dx) - parameters.angle - parameters.angle2;

      theta = (0, _common.triangle)(theta / Math.PI * parameters.sides * 0.5);

      if (parameters.radius !== 0) {
        var c = Math.cos(theta),
            radiusC = parameters.radius / c;
        r = radiusC * (0, _common.triangle)(r / radiusC);
      }

      theta += parameters.angle;

      return [this.data.icentreX + r * Math.cos(theta), this.data.icentreY + r * Math.sin(theta)];
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'kaleidoscope';
    }
  }]);

  return KaleidoscopeEffect;
}(_BaseTransform2.default);

exports.default = KaleidoscopeEffect;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTransform = __webpack_require__(11);

var _BaseTransform2 = _interopRequireDefault(_BaseTransform);

var _noise = __webpack_require__(46);

var _noise2 = _interopRequireDefault(_noise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarbleEffect = function (_BaseTransformEffect) {
  _inherits(MarbleEffect, _BaseTransformEffect);

  function MarbleEffect() {
    _classCallCheck(this, MarbleEffect);

    return _possibleConstructorReturn(this, (MarbleEffect.__proto__ || Object.getPrototypeOf(MarbleEffect)).apply(this, arguments));
  }

  _createClass(MarbleEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        xScale: 4,
        yScale: 4,
        amount: 1,
        turbulence: 1
      };
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height, imageData) {
      var sinTable = new Array(256),
          cosTable = new Array(256),
          i = 0,
          angle = void 0;

      for (i = 0; i < 256; i += 1) {
        angle = Math.PI * 2 * i / 256 * parameters.turbulence;
        sinTable[i] = -parameters.yScale * Math.sin(angle);
        cosTable[i] = parameters.yScale * Math.cos(angle);
      }
      return {
        sinTable: sinTable,
        cosTable: cosTable,
        displacementMap: function displacementMap(x, y) {
          var result = 127 * (1 + _noise2.default.noise2(x / parameters.xScale, y / parameters.yScale));
          return Math.min(255, Math.max(0, result));
        }
      };
    }
  }, {
    key: 'callback',
    value: function callback(x, y, parameters) {
      var displacement = Math.floor(this.data.displacementMap(x, y));
      return [x + this.data.sinTable[displacement], y + this.data.cosTable[displacement]];
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'marble';
    }
  }]);

  return MarbleEffect;
}(_BaseTransform2.default);

exports.default = MarbleEffect;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTransform = __webpack_require__(11);

var _BaseTransform2 = _interopRequireDefault(_BaseTransform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RotateEffect = function (_BaseTransformEffect) {
  _inherits(RotateEffect, _BaseTransformEffect);

  function RotateEffect() {
    _classCallCheck(this, RotateEffect);

    return _possibleConstructorReturn(this, (RotateEffect.__proto__ || Object.getPrototypeOf(RotateEffect)).apply(this, arguments));
  }

  _createClass(RotateEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        xOffset: 100,
        yOffset: 100,
        wrap: true
      };
    }
  }, {
    key: 'callback',
    value: function callback(x, y, parameters, width, height) {
      if (parameters.wrap) {
        return [(x + width - parameters.xOffset) % width, (y + height - parameters.yOffset) % height];
      } else {
        return [x - parameters.xOffset, y - parameters.yOffset];
      }
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'offset';
    }
  }]);

  return RotateEffect;
}(_BaseTransform2.default);

exports.default = RotateEffect;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTransform = __webpack_require__(11);

var _BaseTransform2 = _interopRequireDefault(_BaseTransform);

var _noise = __webpack_require__(46);

var _noise2 = _interopRequireDefault(_noise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PerspectiveEffect = function (_BaseTransformEffect) {
  _inherits(PerspectiveEffect, _BaseTransformEffect);

  function PerspectiveEffect() {
    _classCallCheck(this, PerspectiveEffect);

    return _possibleConstructorReturn(this, (PerspectiveEffect.__proto__ || Object.getPrototypeOf(PerspectiveEffect)).apply(this, arguments));
  }

  _createClass(PerspectiveEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 0,
        x2: 1,
        y2: 1,
        x3: 0,
        y3: 1
      };
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height, imageData) {
      function unitSquareToQuad() {
        var result = {},
            x0 = Math.floor(width * parameters.x0),
            y0 = Math.floor(height * parameters.y0),
            x1 = Math.floor(width * parameters.x1),
            y1 = Math.floor(height * parameters.y1),
            x2 = Math.floor(width * parameters.x2),
            y2 = Math.floor(height * parameters.y2),
            x3 = Math.floor(width * parameters.x3),
            y3 = Math.floor(height * parameters.y3),
            dx1 = x1 - x2,
            dy1 = y1 - y2,
            dx2 = x3 - x2,
            dy2 = y3 - y2,
            dx3 = x0 - x1 + x2 - x3,
            dy3 = y0 - y1 + y2 - y3;

        if (dx3 == 0 && dy3 == 0) {
          result.a11 = x1 - x0;
          result.a21 = x2 - x1;
          result.a31 = x0;
          result.a12 = y1 - y0;
          result.a22 = y2 - y1;
          result.a32 = y0;
          result.a13 = result.a23 = 0;
        } else {
          result.a13 = (dx3 * dy2 - dx2 * dy3) / (dx1 * dy2 - dy1 * dx2);
          result.a23 = (dx1 * dy3 - dy1 * dx3) / (dx1 * dy2 - dy1 * dx2);
          result.a11 = x1 - x0 + result.a13 * x1;
          result.a21 = x3 - x0 + result.a23 * x3;
          result.a31 = x0;
          result.a12 = y1 - y0 + result.a13 * y1;
          result.a22 = y3 - y0 + result.a23 * y3;
          result.a32 = y0;
        }

        result.a33 = 1;

        return result;
      }

      var result = unitSquareToQuad();

      result.A = result.a22 * result.a33 - result.a32 * result.a23;
      result.B = result.a31 * result.a23 - result.a21 * result.a33;
      result.C = result.a21 * result.a32 - result.a31 * result.a22;
      result.D = result.a32 * result.a13 - result.a12 * result.a33;
      result.E = result.a11 * result.a33 - result.a31 * result.a13;
      result.F = result.a31 * result.a12 - result.a11 * result.a32;
      result.G = result.a12 * result.a23 - result.a22 * result.a13;
      result.H = result.a21 * result.a13 - result.a11 * result.a23;
      result.I = result.a11 * result.a22 - result.a21 * result.a12;

      return result;
    }
  }, {
    key: 'callback',
    value: function callback(x, y, parameters, width, height) {
      return [width * (this.data.A * x + this.data.B * y + this.data.C) / (this.data.G * x + this.data.H * y + this.data.I), height * (this.data.D * x + this.data.E * y + this.data.F) / (this.data.G * x + this.data.H * y + this.data.I)];
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'perspective';
    }
  }]);

  return PerspectiveEffect;
}(_BaseTransform2.default);

exports.default = PerspectiveEffect;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTransform = __webpack_require__(11);

var _BaseTransform2 = _interopRequireDefault(_BaseTransform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PinchEffect = function (_BaseTransformEffect) {
  _inherits(PinchEffect, _BaseTransformEffect);

  function PinchEffect() {
    _classCallCheck(this, PinchEffect);

    return _possibleConstructorReturn(this, (PinchEffect.__proto__ || Object.getPrototypeOf(PinchEffect)).apply(this, arguments));
  }

  _createClass(PinchEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        angle: 0,
        centreX: 0.5,
        centreY: 0.5,
        radius: 100,
        amount: 0.5
      };
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height, imageData) {
      var icentreX = width * parameters.centreX,
          icentreY = height * parameters.centreY,
          radius = parameters.radius,
          radius2;
      if (radius === 0) {
        radius = Math.min(icentreX, icentreY);
      }
      radius2 = radius * radius;
      return {
        icentreX: icentreX,
        icentreY: icentreY,
        radius: radius,
        radius2: radius2
      };
    }
  }, {
    key: 'callback',
    value: function callback(x, y, parameters) {
      var dx = x - this.data.icentreX,
          dy = y - this.data.icentreY,
          distance = dx * dx + dy * dy,
          d,
          t,
          e,
          a,
          s,
          c;

      if (distance > this.data.radius2 || distance === 0) {
        return [x, y];
      }
      d = Math.sqrt(distance / this.data.radius2);
      t = Math.pow(Math.sin(Math.PI * 0.5 * d), -parameters.amount);

      dx *= t;
      dy *= t;

      e = 1 - d;
      a = parameters.angle * e * e;

      s = Math.sin(a);
      c = Math.cos(a);

      return [this.data.icentreX + c * dx - s * dy, this.data.icentreY + s * dx + c * dy];
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'pinch';
    }
  }]);

  return PinchEffect;
}(_BaseTransform2.default);

exports.default = PinchEffect;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTransform = __webpack_require__(11);

var _BaseTransform2 = _interopRequireDefault(_BaseTransform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PolarEffect = function (_BaseTransformEffect) {
  _inherits(PolarEffect, _BaseTransformEffect);

  function PolarEffect() {
    _classCallCheck(this, PolarEffect);

    return _possibleConstructorReturn(this, (PolarEffect.__proto__ || Object.getPrototypeOf(PolarEffect)).apply(this, arguments));
  }

  _createClass(PolarEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        type: "RECT_TO_POLAR" // RECT_TO_POLAR, POLAR_TO_RECT, INVERT_IN_CIRCLE
      };
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height, imageData) {
      return {
        centreX: width / 2,
        centreY: height / 2,
        radius: Math.max(width / 2, height / 2),
        sqr: function sqr(x) {
          return x * x;
        }
      };
    }
  }, {
    key: 'callback',
    value: function callback(x, y, parameters, width, height) {
      var theta,
          theta2,
          t,
          m,
          xMax,
          yMax,
          nx,
          ny,
          xmax,
          ymax,
          dx,
          dy,
          distance,
          r = 0;

      switch (parameters.type) {
        case "RECT_TO_POLAR":
          if (x >= this.data.centreX) {
            if (y > this.data.centreY) {
              theta = Math.PI - Math.atan((x - this.data.centreX) / (y - this.data.centreY));
              r = Math.sqrt(this.data.sqr(x - this.data.centreX) + this.data.sqr(y - this.data.centreY));
            } else {
              if (y < this.data.centreY) {
                theta = Math.atan((x - this.data.centreX) / (this.data.centreY - y));
                r = Math.sqrt(this.data.sqr(x - this.data.centreX) + this.data.sqr(this.data.centreY - y));
              } else {
                theta = Math.PI / 2;
                r = x - this.data.centreX;
              }
            }
          } else {
            if (x < this.data.centreX) {
              if (y < this.data.centreY) {
                theta = Math.PI * 2 - Math.atan((this.data.centreX - x) / (this.data.centreY - y));
                r = Math.sqrt(this.data.sqr(this.data.centreX - x) + this.data.sqr(this.data.centreY - y));
              } else {
                if (y > this.data.centreY) {
                  theta = Math.PI + Math.atan((this.data.centreX - x) / (y - this.data.centreY));
                  r = Math.sqrt(this.data.sqr(this.data.centreX - x) + this.data.sqr(y - this.data.centreY));
                } else {
                  theta = 1.5 * Math.PI;
                  r = this.data.centreX - x;
                }
              }
            }
          }
          if (x != this.data.centreX) {
            m = Math.abs((y - this.data.centreY) / (x - this.data.centreX));
          } else {
            m = 0;
          }

          if (m <= height / width) {
            if (x == this.data.centreX) {
              xMax = 0;
              yMax = this.data.centreY;
            } else {
              xMax = this.data.centreX;
              yMax = m * xMax;
            }
          } else {
            yMax = this.data.centreY;
            xMax = yMax / m;
          }

          return [width - 1 - (width - 1) / (Math.PI * 2 * theta), height * r / this.data.radius];

        case "POLAR_TO_RECT":

          theta = x / width * Math.PI * 2;

          if (theta >= 1.5 * Math.PI) {
            theta2 = Math.PI * 2 - theta;
          } else {
            if (theta >= Math.PI) {
              theta2 = theta - Math.PI;
            } else {
              if (theta >= 0.5 * Math.PI) {
                theta2 = Math.PI - theta;
              } else {
                theta2 = theta;
              }
            }
          }

          t = Math.tan(theta2);
          if (t != 0) {
            m = 1.0 / t;
          } else {
            m = 0;
          }

          if (m <= height / width) {
            if (theta2 == 0) {
              xmax = 0;
              ymax = this.data.centreY;
            } else {
              xmax = this.data.centreX;
              ymax = m * xmax;
            }
          } else {
            ymax = this.data.centreY;
            xmax = ymax / m;
          }

          r = this.data.radius * (y / height);

          nx = -r * Math.sin(theta2);
          ny = r * Math.cos(theta2);

          if (theta >= 1.5 * Math.PI) {
            return [this.data.centreX - nx, this.data.centreY - ny];
          } else {
            if (theta >= Math.PI) {
              return [this.data.centreX - nx, this.data.centreY + ny];
            } else {
              if (theta >= 0.5 * Math.PI) {
                return [this.data.centreX + nx, this.data.centreY + ny];
              } else {
                return [this.data.centreX + nx, this.data.centreY - ny];
              }
            }
          }
          break; // TODO: ???

        case "INVERT_IN_CIRCLE":
          dx = x - this.data.centreX;
          dy = y - this.data.centreY;
          distance = dx * dx + dy * dy;

          return [this.data.centreX + this.data.centreX * this.data.centreX * dx / distance, this.data.centreY + this.data.centreY * this.data.centreY * dy / distance];
      }
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'polar';
    }
  }]);

  return PolarEffect;
}(_BaseTransform2.default);

exports.default = PolarEffect;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTransform = __webpack_require__(11);

var _BaseTransform2 = _interopRequireDefault(_BaseTransform);

var _common = __webpack_require__(23);

var _noise = __webpack_require__(46);

var _noise2 = _interopRequireDefault(_noise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RippleEffect = function (_BaseTransformEffect) {
  _inherits(RippleEffect, _BaseTransformEffect);

  function RippleEffect() {
    _classCallCheck(this, RippleEffect);

    return _possibleConstructorReturn(this, (RippleEffect.__proto__ || Object.getPrototypeOf(RippleEffect)).apply(this, arguments));
  }

  _createClass(RippleEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        xAmplitude: 5,
        yAmplitute: 0,
        xWaveLength: 16,
        yWaveLength: 16,
        waveType: "SINE" // SAWTOOTH TRIANGLE NOISE
      };
    }
  }, {
    key: 'callback',
    value: function callback(x, y, parameters) {
      var nx = y / parameters.xWaveLength,
          ny = x / parameters.yWaveLength,
          fx,
          fy;

      switch (parameters.waveType) {
        case "SINE":
        default:
          fx = Math.sin(nx);
          fy = Math.sin(ny);
          break;

        case "SAWTOOTH":
          fx = (0, _common.mod)(nx, 1);
          fy = (0, _common.mod)(ny, 1);
          break;

        case "TRIANGLE":
          fx = (0, _common.triangle)(nx);
          fy = (0, _common.triangle)(ny);
          break;

        case "NOISE":
          fx = _noise2.default.noise1(nx);
          fy = _noise2.default.noise1(ny);
          break;
      }

      return [x + parameters.xAmplitude * fx, y + parameters.yAmplitute * fy];
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'ripple';
    }
  }]);

  return RippleEffect;
}(_BaseTransform2.default);

exports.default = RippleEffect;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTransform = __webpack_require__(11);

var _BaseTransform2 = _interopRequireDefault(_BaseTransform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RotateEffect = function (_BaseTransformEffect) {
  _inherits(RotateEffect, _BaseTransformEffect);

  function RotateEffect() {
    _classCallCheck(this, RotateEffect);

    return _possibleConstructorReturn(this, (RotateEffect.__proto__ || Object.getPrototypeOf(RotateEffect)).apply(this, arguments));
  }

  _createClass(RotateEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        angle: Math.PI
      };
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height, imageData) {
      return {
        cos: Math.cos(parameters.angle),
        sin: Math.sin(parameters.angle),
        icentreX: width / 2,
        icentreY: height / 2
      };
    }
  }, {
    key: 'callback',
    value: function callback(x, y, parameters, width, height) {
      return [this.data.cos * (x - this.data.icentreX) - this.data.sin * (y - this.data.icentreY) + this.data.icentreY, this.data.sin * (x - this.data.icentreX) - this.data.cos * (y - this.data.icentreY) + this.data.icentreY];
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'rotate';
    }
  }]);

  return RotateEffect;
}(_BaseTransform2.default);

exports.default = RotateEffect;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTransform = __webpack_require__(11);

var _BaseTransform2 = _interopRequireDefault(_BaseTransform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShearEffect = function (_BaseTransformEffect) {
  _inherits(ShearEffect, _BaseTransformEffect);

  function ShearEffect() {
    _classCallCheck(this, ShearEffect);

    return _possibleConstructorReturn(this, (ShearEffect.__proto__ || Object.getPrototypeOf(ShearEffect)).apply(this, arguments));
  }

  _createClass(ShearEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        xAngle: 0,
        yAngle: 0,
        xOffset: 0,
        yOffset: 0
      };
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height) {
      return {
        shx: Math.sin(parameters.xAngle),
        shy: Math.sin(parameters.yAngle)
      };
    }
  }, {
    key: 'callback',
    value: function callback(x, y, parameters) {
      return [x + parameters.xOffset + y * this.data.shx, y + parameters.yOffset + x * this.data.shy];
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'shear';
    }
  }]);

  return ShearEffect;
}(_BaseTransform2.default);

exports.default = ShearEffect;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTransform = __webpack_require__(11);

var _BaseTransform2 = _interopRequireDefault(_BaseTransform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SphereEffect = function (_BaseTransformEffect) {
  _inherits(SphereEffect, _BaseTransformEffect);

  function SphereEffect() {
    _classCallCheck(this, SphereEffect);

    return _possibleConstructorReturn(this, (SphereEffect.__proto__ || Object.getPrototypeOf(SphereEffect)).apply(this, arguments));
  }

  _createClass(SphereEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        a: 0,
        b: 0,
        centreX: 0.5,
        centreY: 0.5,
        refractionIndex: 1.5
      };
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height) {
      var icentreX = width * parameters.centreX,
          icentreY = height * parameters.centreY,
          a = parameters.a,
          b = parameters.b,
          a2,
          b2;
      if (a === 0) {
        a = width / 2;
      }
      if (b === 0) {
        b = height / 2;
      }
      a2 = a * a;
      b2 = b * b;

      return {
        icentreX: icentreX,
        icentreY: icentreY,
        a: a,
        b: b,
        a2: a2,
        b2: b2
      };
    }
  }, {
    key: 'callback',
    value: function callback(x, y, parameters) {
      var dx = x - this.data.icentreX,
          dy = y - this.data.icentreY,
          x2 = dx * dx,
          y2 = dy * dy,
          rRefraction = 1 / parameters.refractionIndex,
          z = Math.sqrt((1 - x2 / this.data.a2 - y2 / this.data.b2) * (this.data.a * this.data.b)),
          z2 = z * z,
          xAngle = Math.acos(dx / Math.sqrt(x2 + z2)),
          angle1 = Math.PI / 2 - xAngle,
          angle2 = Math.asin(Math.sin(angle1) * rRefraction),
          yAngle = Math.acos(dy / Math.sqrt(y2 + z2)),
          ret = new Array(2);

      if (y2 >= this.data.b2 - this.data.b2 / x2 / this.data.a2) {
        return [x, y];
      }

      angle2 = Math.PI / 2 - xAngle - angle2;
      ret[0] = x - Math.tan(angle2) * z;

      angle1 = Math.PI / 2 - yAngle;
      angle2 = Math.asin(Math.sin(angle1) * rRefraction);
      angle2 = Math.PI / 2 - yAngle - angle2;
      ret[1] = y - Math.tan(angle2) * z;
      return ret;
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'sphere';
    }
  }]);

  return SphereEffect;
}(_BaseTransform2.default);

exports.default = SphereEffect;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTransform = __webpack_require__(11);

var _BaseTransform2 = _interopRequireDefault(_BaseTransform);

var _noise = __webpack_require__(46);

var _noise2 = _interopRequireDefault(_noise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwimEffect = function (_BaseTransformEffect) {
  _inherits(SwimEffect, _BaseTransformEffect);

  function SwimEffect() {
    _classCallCheck(this, SwimEffect);

    return _possibleConstructorReturn(this, (SwimEffect.__proto__ || Object.getPrototypeOf(SwimEffect)).apply(this, arguments));
  }

  _createClass(SwimEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        scale: 32,
        turbulence: 0,
        amount: 1,
        time: 0,
        angle: 0,
        stretch: 1
      };
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height) {
      var cos = Math.cos(parameters.angle),
          sin = Math.sin(parameters.angle);

      return {
        m00: cos,
        m01: sin,
        m10: -sin,
        m11: cos
      };
    }
  }, {
    key: 'callback',
    value: function callback(x, y, parameters) {
      var nx = this.data.m00 * x + this.data.m01 * y,
          ny = this.data.m10 * x + this.data.m11 * y;

      nx /= parameters.scale;
      ny /= parameters.scale * parameters.stretch;

      if (parameters.turbulence === 1) {
        return [x + parameters.amount * _noise2.default.noise3(nx + 0.5, ny, parameters.time), y + parameters.amount * _noise2.default.noise3(nx, ny + 0.5, parameters.time)];
      }
      return [x + parameters.amount * _noise2.default.turbulence3(nx + 0.5, ny, parameters.turbulence, parameters.time), y + parameters.amount * _noise2.default.turbulence3(nx, ny + 0.5, parameters.turbulence, parameters.time)];
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'swim';
    }
  }]);

  return SwimEffect;
}(_BaseTransform2.default);

exports.default = SwimEffect;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTransform = __webpack_require__(11);

var _BaseTransform2 = _interopRequireDefault(_BaseTransform);

var _noise = __webpack_require__(46);

var _noise2 = _interopRequireDefault(_noise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TwirlEffect = function (_BaseTransformEffect) {
  _inherits(TwirlEffect, _BaseTransformEffect);

  function TwirlEffect() {
    _classCallCheck(this, TwirlEffect);

    return _possibleConstructorReturn(this, (TwirlEffect.__proto__ || Object.getPrototypeOf(TwirlEffect)).apply(this, arguments));
  }

  _createClass(TwirlEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        angle: 0,
        centreX: 0.5,
        centreY: 0.5,
        radius: 100
      };
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height) {
      var iCentreX = width * parameters.centreX,
          iCentreY = height * parameters.centreY,
          radius = parameters.radius,
          radius2;

      if (radius === 0) {
        radius = Math.min(iCentreX, iCentreY);
      }
      radius2 = radius * radius;

      return {
        iCentreX: iCentreX,
        iCentreY: iCentreY,
        radius: radius,
        radius2: radius2
      };
    }
  }, {
    key: 'callback',
    value: function callback(x, y, parameters) {
      var dx = x - this.data.iCentreX,
          dy = y - this.data.iCentreY,
          distance = dx * dx + dy * dy,
          a;

      if (distance > parameters.radius2) {
        return [x, y];
      }

      distance = Math.sqrt(distance);
      a = Math.atan2(dy, dx) + parameters.angle * (parameters.radius - distance) / parameters.radius;

      return [this.data.iCentreX + distance * Math.cos(a), this.data.iCentreY + distance * Math.sin(a)];
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'twirl';
    }
  }]);

  return TwirlEffect;
}(_BaseTransform2.default);

exports.default = TwirlEffect;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTransform = __webpack_require__(11);

var _BaseTransform2 = _interopRequireDefault(_BaseTransform);

var _noise = __webpack_require__(46);

var _noise2 = _interopRequireDefault(_noise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WaterEffect = function (_BaseTransformEffect) {
  _inherits(WaterEffect, _BaseTransformEffect);

  function WaterEffect() {
    _classCallCheck(this, WaterEffect);

    return _possibleConstructorReturn(this, (WaterEffect.__proto__ || Object.getPrototypeOf(WaterEffect)).apply(this, arguments));
  }

  _createClass(WaterEffect, [{
    key: 'getDefaultParameters',
    value: function getDefaultParameters() {
      return {
        waveLength: 16,
        amplitude: 10,
        phase: 0,
        centreX: 0.5,
        centreY: 0.5,
        radius: 50
      };
    }
  }, {
    key: 'before',
    value: function before(parameters, width, height) {
      var iCentreX = width * parameters.centreX,
          iCentreY = height * parameters.centreY,
          radius = parameters.radius,
          radius2;

      if (radius === 0) {
        radius = Math.min(iCentreX, iCentreY);
      }
      radius2 = radius * radius;

      return {
        iCentreX: iCentreX,
        iCentreY: iCentreY,
        radius: radius,
        radius2: radius2
      };
    }
  }, {
    key: 'callback',
    value: function callback(x, y, parameters) {
      var dx = x - this.data.iCentreX,
          dy = y - this.data.iCentreY,
          distance2 = dx * dx + dy * dy,
          distance,
          amount;

      if (distance2 > this.data.radius2) {
        return [x, y];
      }
      distance = Math.sqrt(distance2);
      amount = parameters.amplitude * Math.sin(distance / parameters.waveLength * Math.PI * 2 - parameters.phase);
      amount *= (parameters.radius - distance) / parameters.radius;
      if (distance !== 0) {
        amount *= parameters.waveLength / distance;
      }
      return [x + dx * amount, y + dy * amount];
    }
  }], [{
    key: 'getName',
    value: function getName() {
      return 'water';
    }
  }]);

  return WaterEffect;
}(_BaseTransform2.default);

exports.default = WaterEffect;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeNearestNeighbour = resizeNearestNeighbour;
exports.resizeBilinearInterpolation = resizeBilinearInterpolation;
exports.resizeBiquadraticInterpolation = resizeBiquadraticInterpolation;
function resizeNearestNeighbour(oldImageData, newImageData, newWidth, newHeight) {
  var oldWidth = oldImageData.width,
      oldHeight = oldImageData.height,
      ratioX = oldWidth / newWidth,
      ratioY = oldHeight / newHeight,
      oldPixelIndex = void 0,
      newPixelIndex = void 0,
      x = void 0,
      y = void 0;

  for (y = 0; y < newHeight; y += 1) {
    for (x = 0; x < newWidth; x += 1) {
      oldPixelIndex = Math.floor(y * ratioY) * oldWidth * 4 + Math.floor(x * ratioX) * 4;
      newPixelIndex = y * newWidth * 4 + x * 4;

      newImageData.data[newPixelIndex + 0] = oldImageData.data[oldPixelIndex + 0];
      newImageData.data[newPixelIndex + 1] = oldImageData.data[oldPixelIndex + 1];
      newImageData.data[newPixelIndex + 2] = oldImageData.data[oldPixelIndex + 2];
      newImageData.data[newPixelIndex + 3] = oldImageData.data[oldPixelIndex + 3];
    }
  }

  return newImageData;
}

function resizeBilinearInterpolation(oldImageData, newImageData, newWidth, newHeight) {
  var oldWidth = oldImageData.width,
      oldHeight = oldImageData.height,
      ratioX = oldWidth / newWidth,
      ratioY = oldHeight / newHeight,
      newPixelIndex = void 0,
      x = void 0,
      y = void 0,
      x0 = void 0,
      y0 = void 0,
      dx = void 0,
      dy = void 0,
      x1 = void 0,
      y1 = void 0,
      oldPixelIndex00 = void 0,
      oldPixelIndex01 = void 0,
      oldPixelIndex10 = void 0,
      oldPixelIndex11 = void 0,
      i = void 0,
      j = void 0;

  for (i = 0; i < newHeight; i += 1) {
    for (j = 0; j < newWidth; j += 1) {
      x = j * ratioX;
      y = i * ratioY;
      x0 = Math.floor(x);
      y0 = Math.floor(y);
      dx = x - x0;
      dy = y - y0;
      x1 = x0 + 1;
      y1 = y0 + 1;

      if (x1 >= oldWidth) {
        x1 = x0;
      }
      if (y1 >= oldHeight) {
        y1 = y0;
      }

      oldPixelIndex00 = (y0 * oldWidth + x0) * 4;
      oldPixelIndex01 = (y0 * oldWidth + x1) * 4;
      oldPixelIndex10 = (y1 * oldWidth + x0) * 4;
      oldPixelIndex11 = (y1 * oldWidth + x1) * 4;
      newPixelIndex = (i * newWidth + j) * 4;

      newImageData.data[newPixelIndex] = (1.0 - dy) * ((1.0 - dx) * oldImageData.data[oldPixelIndex00] + dx * oldImageData.data[oldPixelIndex01]) + dy * ((1.0 - dx) * oldImageData.data[oldPixelIndex10] + dx * oldImageData.data[oldPixelIndex11]);
      newImageData.data[newPixelIndex + 1] = (1.0 - dy) * ((1.0 - dx) * oldImageData.data[oldPixelIndex00 + 1] + dx * oldImageData.data[oldPixelIndex01 + 1]) + dy * ((1.0 - dx) * oldImageData.data[oldPixelIndex10 + 1] + dx * oldImageData.data[oldPixelIndex11 + 1]);
      newImageData.data[newPixelIndex + 2] = (1.0 - dy) * ((1.0 - dx) * oldImageData.data[oldPixelIndex00 + 2] + dx * oldImageData.data[oldPixelIndex01 + 2]) + dy * ((1.0 - dx) * oldImageData.data[oldPixelIndex10 + 2] + dx * oldImageData.data[oldPixelIndex11 + 2]);
      newImageData.data[newPixelIndex + 3] = (1.0 - dy) * ((1.0 - dx) * oldImageData.data[oldPixelIndex00 + 3] + dx * oldImageData.data[oldPixelIndex01 + 3]) + dy * ((1.0 - dx) * oldImageData.data[oldPixelIndex10 + 3] + dx * oldImageData.data[oldPixelIndex11 + 3]);
    }
  }

  return newImageData;
}

function resizeBiquadraticInterpolation(oldImageData, newImageData, newWidth, newHeight) {
  var interpolate = function interpolate(f1, f2, f3, d) {
    return f2 + (f3 - f1) * d + (f1 - 2 * f2 + f3) * d * d;
  },
      interpolateNormalize = function interpolateNormalize(f1, f2, f3, d) {
    var result = interpolate(f1, f2, f3, d);
    if (result > 255) {
      return 255;
    }
    if (result < 0) {
      return 0;
    }
    return Math.floor(result);
  },
      oldWidth = oldImageData.width,
      oldHeight = oldImageData.height,
      ratioX = oldWidth / newWidth,
      ratioY = oldHeight / newHeight,
      x = void 0,
      y = void 0,
      x0 = void 0,
      y0 = void 0,
      x1 = void 0,
      y1 = void 0,
      x2 = void 0,
      y2 = void 0,
      dx = void 0,
      dy = void 0,
      oldPixelIndex00 = void 0,
      oldPixelIndex01 = void 0,
      oldPixelIndex02 = void 0,
      oldPixelIndex10 = void 0,
      oldPixelIndex11 = void 0,
      oldPixelIndex12 = void 0,
      oldPixelIndex20 = void 0,
      oldPixelIndex21 = void 0,
      oldPixelIndex22 = void 0,
      newPixelIndex = void 0,
      i = void 0,
      j = void 0;

  for (i = 0; i < newHeight; i += 1) {
    for (j = 0; j < newWidth; j += 1) {
      x = j * ratioX;
      y = i * ratioY;

      x1 = Math.floor(x);
      y1 = Math.floor(y);
      dx = (x - x1) * 0.5;
      dy = (y - y1) * 0.5;

      if (x1 - 1 >= 0) {
        x0 = x1 - 1;
      } else {
        x0 = x1;
      }

      if (y1 - 1 >= 0) {
        y0 = y1 - 1;
      } else {
        y0 = y1;
      }

      if (x1 + 1 >= oldWidth) {
        x2 = x1;
      } else {
        x2 = x1 + 1;
      }

      if (y1 + 1 >= oldWidth) {
        y2 = y1;
      } else {
        y2 = y1 + 1;
      }

      oldPixelIndex00 = (y0 * oldWidth + x0) * 4;
      oldPixelIndex01 = (y0 * oldWidth + x1) * 4;
      oldPixelIndex02 = (y0 * oldWidth + x2) * 4;
      oldPixelIndex10 = (y1 * oldWidth + x0) * 4;
      oldPixelIndex11 = (y1 * oldWidth + x1) * 4;
      oldPixelIndex12 = (y1 * oldWidth + x2) * 4;
      oldPixelIndex20 = (y2 * oldWidth + x0) * 4;
      oldPixelIndex21 = (y2 * oldWidth + x1) * 4;
      oldPixelIndex22 = (y2 * oldWidth + x2) * 4;

      newPixelIndex = (i * newWidth + j) * 4;

      newImageData.data[newPixelIndex] = interpolateNormalize(interpolate(oldImageData.data[oldPixelIndex00], oldImageData.data[oldPixelIndex01], oldImageData.data[oldPixelIndex02], dx), interpolate(oldImageData.data[oldPixelIndex10], oldImageData.data[oldPixelIndex11], oldImageData.data[oldPixelIndex12], dx), interpolate(oldImageData.data[oldPixelIndex20], oldImageData.data[oldPixelIndex21], oldImageData.data[oldPixelIndex22], dx), dy);

      newImageData.data[newPixelIndex + 1] = interpolateNormalize(interpolate(oldImageData.data[oldPixelIndex00 + 1], oldImageData.data[oldPixelIndex01 + 1], oldImageData.data[oldPixelIndex02 + 1], dx), interpolate(oldImageData.data[oldPixelIndex10 + 1], oldImageData.data[oldPixelIndex11 + 1], oldImageData.data[oldPixelIndex12 + 1], dx), interpolate(oldImageData.data[oldPixelIndex20 + 1], oldImageData.data[oldPixelIndex21 + 1], oldImageData.data[oldPixelIndex22 + 1], dx), dy);

      newImageData.data[newPixelIndex + 2] = interpolateNormalize(interpolate(oldImageData.data[oldPixelIndex00 + 2], oldImageData.data[oldPixelIndex01 + 2], oldImageData.data[oldPixelIndex02 + 2], dx), interpolate(oldImageData.data[oldPixelIndex10 + 2], oldImageData.data[oldPixelIndex11 + 2], oldImageData.data[oldPixelIndex12 + 2], dx), interpolate(oldImageData.data[oldPixelIndex20 + 2], oldImageData.data[oldPixelIndex21 + 2], oldImageData.data[oldPixelIndex22 + 2], dx), dy);

      newImageData.data[newPixelIndex + 3] = interpolateNormalize(interpolate(oldImageData.data[oldPixelIndex00 + 3], oldImageData.data[oldPixelIndex01 + 3], oldImageData.data[oldPixelIndex02 + 3], dx), interpolate(oldImageData.data[oldPixelIndex10 + 3], oldImageData.data[oldPixelIndex11 + 3], oldImageData.data[oldPixelIndex12 + 3], dx), interpolate(oldImageData.data[oldPixelIndex20 + 3], oldImageData.data[oldPixelIndex21 + 3], oldImageData.data[oldPixelIndex22 + 3], dx), dy);
    }
  }

  return newImageData;
}

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(99)))

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(189)
var ieee754 = __webpack_require__(391)
var isArray = __webpack_require__(392)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(99)))

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(198);
module.exports = __webpack_require__(25).RegExp.escape;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var isArray = __webpack_require__(60);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(3);
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(1);
var toPrimitive = __webpack_require__(29);
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(40);
var gOPS = __webpack_require__(64);
var pIE = __webpack_require__(54);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};


/***/ }),
/* 197 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/benjamingr/RexExp.escape
var $export = __webpack_require__(0);
var $re = __webpack_require__(196)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', { copyWithin: __webpack_require__(101) });

__webpack_require__(32)('copyWithin');


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $every = __webpack_require__(24)(4);

$export($export.P + $export.F * !__webpack_require__(22)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', { fill: __webpack_require__(72) });

__webpack_require__(32)('fill');


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $filter = __webpack_require__(24)(2);

$export($export.P + $export.F * !__webpack_require__(22)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(0);
var $find = __webpack_require__(24)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(32)(KEY);


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(0);
var $find = __webpack_require__(24)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(32)(KEY);


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $forEach = __webpack_require__(24)(0);
var STRICT = __webpack_require__(22)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(21);
var $export = __webpack_require__(0);
var toObject = __webpack_require__(10);
var call = __webpack_require__(112);
var isArrayIter = __webpack_require__(80);
var toLength = __webpack_require__(9);
var createProperty = __webpack_require__(74);
var getIterFn = __webpack_require__(96);

$export($export.S + $export.F * !__webpack_require__(62)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $indexOf = __webpack_require__(56)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(22)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(0);

$export($export.S, 'Array', { isArray: __webpack_require__(60) });


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(0);
var toIObject = __webpack_require__(19);
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(53) != Object || !__webpack_require__(22)(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toIObject = __webpack_require__(19);
var toInteger = __webpack_require__(28);
var toLength = __webpack_require__(9);
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(22)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $map = __webpack_require__(24)(1);

$export($export.P + $export.F * !__webpack_require__(22)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var createProperty = __webpack_require__(74);

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(3)(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $reduce = __webpack_require__(103);

$export($export.P + $export.F * !__webpack_require__(22)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $reduce = __webpack_require__(103);

$export($export.P + $export.F * !__webpack_require__(22)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var html = __webpack_require__(78);
var cof = __webpack_require__(20);
var toAbsoluteIndex = __webpack_require__(44);
var toLength = __webpack_require__(9);
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(3)(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $some = __webpack_require__(24)(3);

$export($export.P + $export.F * !__webpack_require__(22)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var aFunction = __webpack_require__(12);
var toObject = __webpack_require__(10);
var fails = __webpack_require__(3);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(22)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('Array');


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(0);

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(0);
var toISOString = __webpack_require__(193);

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(29);

$export($export.P + $export.F * __webpack_require__(3)(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(5)('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(14)(proto, TO_PRIMITIVE, __webpack_require__(194));


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(15)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(0);

$export($export.P, 'Function', { bind: __webpack_require__(104) });


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(4);
var getPrototypeOf = __webpack_require__(18);
var HAS_INSTANCE = __webpack_require__(5)('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(8).f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(7) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(0);
var log1p = __webpack_require__(115);
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(0);
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(0);
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(0);
var sign = __webpack_require__(84);

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(0);
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(0);
var $expm1 = __webpack_require__(83);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { fround: __webpack_require__(114) });


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(0);
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(0);
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(3)(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { log1p: __webpack_require__(115) });


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { sign: __webpack_require__(84) });


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(0);
var expm1 = __webpack_require__(83);
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(3)(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(0);
var expm1 = __webpack_require__(83);
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var has = __webpack_require__(13);
var cof = __webpack_require__(20);
var inheritIfRequired = __webpack_require__(79);
var toPrimitive = __webpack_require__(29);
var fails = __webpack_require__(3);
var gOPN = __webpack_require__(39).f;
var gOPD = __webpack_require__(17).f;
var dP = __webpack_require__(8).f;
var $trim = __webpack_require__(49).trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(38)(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(7) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(15)(global, NUMBER, $Number);
}


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(0);

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(0);
var _isFinite = __webpack_require__(2).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', { isInteger: __webpack_require__(111) });


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(0);
var isInteger = __webpack_require__(111);
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseFloat = __webpack_require__(123);
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseInt = __webpack_require__(124);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toInteger = __webpack_require__(28);
var aNumberValue = __webpack_require__(100);
var repeat = __webpack_require__(91);
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(3)(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $fails = __webpack_require__(3);
var aNumberValue = __webpack_require__(100);
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(0);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(117) });


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(38) });


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperties: __webpack_require__(118) });


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperty: __webpack_require__(8).f });


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(33).onFreeze;

__webpack_require__(27)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(19);
var $getOwnPropertyDescriptor = __webpack_require__(17).f;

__webpack_require__(27)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(27)('getOwnPropertyNames', function () {
  return __webpack_require__(119).f;
});


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(10);
var $getPrototypeOf = __webpack_require__(18);

__webpack_require__(27)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(4);

__webpack_require__(27)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(4);

__webpack_require__(27)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(4);

__webpack_require__(27)('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(0);
$export($export.S, 'Object', { is: __webpack_require__(197) });


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(10);
var $keys = __webpack_require__(40);

__webpack_require__(27)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(33).onFreeze;

__webpack_require__(27)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(33).onFreeze;

__webpack_require__(27)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(0);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(87).set });


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(52);
var test = {};
test[__webpack_require__(5)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(15)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseFloat = __webpack_require__(123);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseInt = __webpack_require__(124);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(37);
var global = __webpack_require__(2);
var ctx = __webpack_require__(21);
var classof = __webpack_require__(52);
var $export = __webpack_require__(0);
var isObject = __webpack_require__(4);
var aFunction = __webpack_require__(12);
var anInstance = __webpack_require__(35);
var forOf = __webpack_require__(36);
var speciesConstructor = __webpack_require__(68);
var task = __webpack_require__(93).set;
var microtask = __webpack_require__(85)();
var newPromiseCapabilityModule = __webpack_require__(86);
var perform = __webpack_require__(125);
var promiseResolve = __webpack_require__(126);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(5)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(42)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(48)($Promise, PROMISE);
__webpack_require__(43)(PROMISE);
Wrapper = __webpack_require__(25)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(62)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(0);
var aFunction = __webpack_require__(12);
var anObject = __webpack_require__(1);
var rApply = (__webpack_require__(2).Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(3)(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(0);
var create = __webpack_require__(38);
var aFunction = __webpack_require__(12);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(3);
var bind = __webpack_require__(104);
var rConstruct = (__webpack_require__(2).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(8);
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var toPrimitive = __webpack_require__(29);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(3)(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(0);
var gOPD = __webpack_require__(17).f;
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(81)(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(17);
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(0);
var getProto = __webpack_require__(18);
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(17);
var getPrototypeOf = __webpack_require__(18);
var has = __webpack_require__(13);
var $export = __webpack_require__(0);
var isObject = __webpack_require__(4);
var anObject = __webpack_require__(1);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(122) });


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(0);
var setProto = __webpack_require__(87);

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(8);
var gOPD = __webpack_require__(17);
var getPrototypeOf = __webpack_require__(18);
var has = __webpack_require__(13);
var $export = __webpack_require__(0);
var createDesc = __webpack_require__(41);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
    existingDescriptor.value = V;
    dP.f(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var inheritIfRequired = __webpack_require__(79);
var dP = __webpack_require__(8).f;
var gOPN = __webpack_require__(39).f;
var isRegExp = __webpack_require__(61);
var $flags = __webpack_require__(59);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(7) && (!CORRECT_NEW || __webpack_require__(3)(function () {
  re2[__webpack_require__(5)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(15)(global, 'RegExp', $RegExp);
}

__webpack_require__(43)('RegExp');


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(58)('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(58)('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__(58)('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__(58)('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__(61);
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(131);
var anObject = __webpack_require__(1);
var $flags = __webpack_require__(59);
var DESCRIPTORS = __webpack_require__(7);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(15)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(3)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(16)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(16)('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(16)('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(16)('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $at = __webpack_require__(89)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(0);
var toLength = __webpack_require__(9);
var context = __webpack_require__(90);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(77)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(16)('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(16)('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(16)('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var toAbsoluteIndex = __webpack_require__(44);
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(0);
var context = __webpack_require__(90);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(77)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(16)('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(89)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(82)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(16)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var toIObject = __webpack_require__(19);
var toLength = __webpack_require__(9);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(91)
});


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(16)('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(0);
var toLength = __webpack_require__(9);
var context = __webpack_require__(90);
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(77)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(16)('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(16)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(16)('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(49)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(13);
var DESCRIPTORS = __webpack_require__(7);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(15);
var META = __webpack_require__(33).KEY;
var $fails = __webpack_require__(3);
var shared = __webpack_require__(67);
var setToStringTag = __webpack_require__(48);
var uid = __webpack_require__(45);
var wks = __webpack_require__(5);
var wksExt = __webpack_require__(129);
var wksDefine = __webpack_require__(95);
var enumKeys = __webpack_require__(195);
var isArray = __webpack_require__(60);
var anObject = __webpack_require__(1);
var toIObject = __webpack_require__(19);
var toPrimitive = __webpack_require__(29);
var createDesc = __webpack_require__(41);
var _create = __webpack_require__(38);
var gOPNExt = __webpack_require__(119);
var $GOPD = __webpack_require__(17);
var $DP = __webpack_require__(8);
var $keys = __webpack_require__(40);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(39).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(54).f = $propertyIsEnumerable;
  __webpack_require__(64).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(37)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(14)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $typed = __webpack_require__(69);
var buffer = __webpack_require__(94);
var anObject = __webpack_require__(1);
var toAbsoluteIndex = __webpack_require__(44);
var toLength = __webpack_require__(9);
var isObject = __webpack_require__(4);
var ArrayBuffer = __webpack_require__(2).ArrayBuffer;
var speciesConstructor = __webpack_require__(68);
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(3)(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var final = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < final) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(43)(ARRAY_BUFFER);


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
$export($export.G + $export.W + $export.F * !__webpack_require__(69).ABV, {
  DataView: __webpack_require__(94).DataView
});


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(107);
var validate = __webpack_require__(50);
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(57)(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(0);
var flattenIntoArray = __webpack_require__(108);
var toObject = __webpack_require__(10);
var toLength = __webpack_require__(9);
var aFunction = __webpack_require__(12);
var arraySpeciesCreate = __webpack_require__(73);

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(32)('flatMap');


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = __webpack_require__(0);
var flattenIntoArray = __webpack_require__(108);
var toObject = __webpack_require__(10);
var toLength = __webpack_require__(9);
var toInteger = __webpack_require__(28);
var arraySpeciesCreate = __webpack_require__(73);

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

__webpack_require__(32)('flatten');


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(0);
var $includes = __webpack_require__(56)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(32)('includes');


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = __webpack_require__(0);
var microtask = __webpack_require__(85)();
var process = __webpack_require__(2).process;
var isNode = __webpack_require__(20)(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-is-error
var $export = __webpack_require__(0);
var cof = __webpack_require__(20);

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(0);

$export($export.G, { global: __webpack_require__(2) });


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(65)('Map');


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(66)('Map');


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(0);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(106)('Map') });


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var scale = __webpack_require__(116);
var fround = __webpack_require__(114);

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { scale: __webpack_require__(116) });


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

// http://jfbastien.github.io/papers/Math.signbit.html
var $export = __webpack_require__(0);

$export($export.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(10);
var aFunction = __webpack_require__(12);
var $defineProperty = __webpack_require__(8);

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(7) && $export($export.P + __webpack_require__(63), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(10);
var aFunction = __webpack_require__(12);
var $defineProperty = __webpack_require__(8);

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(7) && $export($export.P + __webpack_require__(63), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0);
var $entries = __webpack_require__(121)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(0);
var ownKeys = __webpack_require__(122);
var toIObject = __webpack_require__(19);
var gOPD = __webpack_require__(17);
var createProperty = __webpack_require__(74);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(29);
var getPrototypeOf = __webpack_require__(18);
var getOwnPropertyDescriptor = __webpack_require__(17).f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(7) && $export($export.P + __webpack_require__(63), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(29);
var getPrototypeOf = __webpack_require__(18);
var getOwnPropertyDescriptor = __webpack_require__(17).f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(7) && $export($export.P + __webpack_require__(63), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0);
var $values = __webpack_require__(121)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/zenparsing/es-observable
var $export = __webpack_require__(0);
var global = __webpack_require__(2);
var core = __webpack_require__(25);
var microtask = __webpack_require__(85)();
var OBSERVABLE = __webpack_require__(5)('observable');
var aFunction = __webpack_require__(12);
var anObject = __webpack_require__(1);
var anInstance = __webpack_require__(35);
var redefineAll = __webpack_require__(42);
var hide = __webpack_require__(14);
var forOf = __webpack_require__(36);
var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () { return this; });

$export($export.G, { Observable: $Observable });

__webpack_require__(43)('Observable');


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(0);
var core = __webpack_require__(25);
var global = __webpack_require__(2);
var speciesConstructor = __webpack_require__(68);
var promiseResolve = __webpack_require__(126);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(0);
var newPromiseCapability = __webpack_require__(86);
var perform = __webpack_require__(125);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(132);
var from = __webpack_require__(102);
var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(18);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(18);
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(18);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var aFunction = __webpack_require__(12);
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(65)('Set');


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(66)('Set');


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(0);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(106)('Set') });


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__(0);
var $at = __webpack_require__(89)(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/
var $export = __webpack_require__(0);
var defined = __webpack_require__(26);
var toLength = __webpack_require__(9);
var isRegExp = __webpack_require__(61);
var getFlags = __webpack_require__(59);
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

__webpack_require__(81)($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0);
var $pad = __webpack_require__(127);

$export($export.P, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0);
var $pad = __webpack_require__(127);

$export($export.P, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(49)('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(49)('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(95)('asyncIterator');


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(95)('observable');


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(0);

$export($export.S, 'System', { global: __webpack_require__(2) });


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(65)('WeakMap');


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(66)('WeakMap');


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
__webpack_require__(65)('WeakSet');


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
__webpack_require__(66)('WeakSet');


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(97);
var getKeys = __webpack_require__(40);
var redefine = __webpack_require__(15);
var global = __webpack_require__(2);
var hide = __webpack_require__(14);
var Iterators = __webpack_require__(47);
var wks = __webpack_require__(5);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $task = __webpack_require__(93);
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(2);
var $export = __webpack_require__(0);
var navigator = global.navigator;
var slice = [].slice;
var MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(318);
__webpack_require__(257);
__webpack_require__(259);
__webpack_require__(258);
__webpack_require__(261);
__webpack_require__(263);
__webpack_require__(268);
__webpack_require__(262);
__webpack_require__(260);
__webpack_require__(270);
__webpack_require__(269);
__webpack_require__(265);
__webpack_require__(266);
__webpack_require__(264);
__webpack_require__(256);
__webpack_require__(267);
__webpack_require__(271);
__webpack_require__(272);
__webpack_require__(224);
__webpack_require__(226);
__webpack_require__(225);
__webpack_require__(274);
__webpack_require__(273);
__webpack_require__(244);
__webpack_require__(254);
__webpack_require__(255);
__webpack_require__(245);
__webpack_require__(246);
__webpack_require__(247);
__webpack_require__(248);
__webpack_require__(249);
__webpack_require__(250);
__webpack_require__(251);
__webpack_require__(252);
__webpack_require__(253);
__webpack_require__(227);
__webpack_require__(228);
__webpack_require__(229);
__webpack_require__(230);
__webpack_require__(231);
__webpack_require__(232);
__webpack_require__(233);
__webpack_require__(234);
__webpack_require__(235);
__webpack_require__(236);
__webpack_require__(237);
__webpack_require__(238);
__webpack_require__(239);
__webpack_require__(240);
__webpack_require__(241);
__webpack_require__(242);
__webpack_require__(243);
__webpack_require__(305);
__webpack_require__(310);
__webpack_require__(317);
__webpack_require__(308);
__webpack_require__(300);
__webpack_require__(301);
__webpack_require__(306);
__webpack_require__(311);
__webpack_require__(313);
__webpack_require__(296);
__webpack_require__(297);
__webpack_require__(298);
__webpack_require__(299);
__webpack_require__(302);
__webpack_require__(303);
__webpack_require__(304);
__webpack_require__(307);
__webpack_require__(309);
__webpack_require__(312);
__webpack_require__(314);
__webpack_require__(315);
__webpack_require__(316);
__webpack_require__(219);
__webpack_require__(221);
__webpack_require__(220);
__webpack_require__(223);
__webpack_require__(222);
__webpack_require__(208);
__webpack_require__(206);
__webpack_require__(212);
__webpack_require__(209);
__webpack_require__(215);
__webpack_require__(217);
__webpack_require__(205);
__webpack_require__(211);
__webpack_require__(202);
__webpack_require__(216);
__webpack_require__(200);
__webpack_require__(214);
__webpack_require__(213);
__webpack_require__(207);
__webpack_require__(210);
__webpack_require__(199);
__webpack_require__(201);
__webpack_require__(204);
__webpack_require__(203);
__webpack_require__(218);
__webpack_require__(97);
__webpack_require__(290);
__webpack_require__(295);
__webpack_require__(131);
__webpack_require__(291);
__webpack_require__(292);
__webpack_require__(293);
__webpack_require__(294);
__webpack_require__(275);
__webpack_require__(130);
__webpack_require__(132);
__webpack_require__(133);
__webpack_require__(330);
__webpack_require__(319);
__webpack_require__(320);
__webpack_require__(325);
__webpack_require__(328);
__webpack_require__(329);
__webpack_require__(323);
__webpack_require__(326);
__webpack_require__(324);
__webpack_require__(327);
__webpack_require__(321);
__webpack_require__(322);
__webpack_require__(276);
__webpack_require__(277);
__webpack_require__(278);
__webpack_require__(279);
__webpack_require__(280);
__webpack_require__(283);
__webpack_require__(281);
__webpack_require__(282);
__webpack_require__(284);
__webpack_require__(285);
__webpack_require__(286);
__webpack_require__(287);
__webpack_require__(289);
__webpack_require__(288);
__webpack_require__(333);
__webpack_require__(331);
__webpack_require__(332);
__webpack_require__(374);
__webpack_require__(377);
__webpack_require__(376);
__webpack_require__(378);
__webpack_require__(379);
__webpack_require__(375);
__webpack_require__(380);
__webpack_require__(381);
__webpack_require__(355);
__webpack_require__(358);
__webpack_require__(354);
__webpack_require__(352);
__webpack_require__(353);
__webpack_require__(356);
__webpack_require__(357);
__webpack_require__(339);
__webpack_require__(373);
__webpack_require__(338);
__webpack_require__(372);
__webpack_require__(384);
__webpack_require__(386);
__webpack_require__(337);
__webpack_require__(371);
__webpack_require__(383);
__webpack_require__(385);
__webpack_require__(336);
__webpack_require__(382);
__webpack_require__(335);
__webpack_require__(340);
__webpack_require__(341);
__webpack_require__(342);
__webpack_require__(343);
__webpack_require__(344);
__webpack_require__(346);
__webpack_require__(345);
__webpack_require__(347);
__webpack_require__(348);
__webpack_require__(349);
__webpack_require__(351);
__webpack_require__(350);
__webpack_require__(360);
__webpack_require__(361);
__webpack_require__(362);
__webpack_require__(363);
__webpack_require__(365);
__webpack_require__(364);
__webpack_require__(367);
__webpack_require__(366);
__webpack_require__(368);
__webpack_require__(369);
__webpack_require__(370);
__webpack_require__(334);
__webpack_require__(359);
__webpack_require__(389);
__webpack_require__(388);
__webpack_require__(387);
module.exports = __webpack_require__(25);


/***/ }),
/* 391 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 392 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(137);
__webpack_require__(138);
module.exports = __webpack_require__(136);


/***/ })
/******/ ]);
//# sourceMappingURL=imagizer.browser.dev.js.map