import React$1__default, { useEffect as useEffect$1, useRef as useRef$1, createElement, useState } from 'react';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var reactIs_production_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case t:case r:case d:return u}}}function z(a){return y(a)===m}
exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};
});

unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}
});

unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function bisector(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
}

function ascendingComparator(f) {
  return function(d, x) {
    return ascending(f(d), x);
  };
}

var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;

function extent(values, valueof) {
  let min;
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  }
  return [min, max];
}

function identity(x) {
  return x;
}

function group(values, ...keys) {
  return nest(values, identity, identity, keys);
}

function nest(values, map, reduce, keys) {
  return (function regroup(values, i) {
    if (i >= keys.length) return reduce(values);
    const groups = new Map();
    const keyof = keys[i++];
    let index = -1;
    for (const value of values) {
      const key = keyof(value, ++index, values);
      const group = groups.get(key);
      if (group) group.push(value);
      else groups.set(key, [value]);
    }
    for (const [key, values] of groups) {
      groups.set(key, regroup(values, i));
    }
    return map(groups);
  })(values, 0);
}

var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

function ticks(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
}

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}

function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? new Rgb(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? new Rgb((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, rgb, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(")
      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.b) || 0))
      + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(")
        + (this.h || 0) + ", "
        + (this.s || 0) * 100 + "%, "
        + (this.l || 0) * 100 + "%"
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

function constant(x) {
  return function() {
    return x;
  };
}

function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant(isNaN(a) ? b : a);
}

var interpolateRgb = (function rgbGamma(y) {
  var color = gamma(y);

  function rgb$1(start, end) {
    var r = color((start = rgb(start)).r, (end = rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb$1.gamma = rgbGamma;

  return rgb$1;
})(1);

function numberArray(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = interpolate(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

function date(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

function interpolateNumber(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

function object(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = interpolate(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

function interpolateString(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: interpolateNumber(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}

function interpolate(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant(b)
      : (t === "number" ? interpolateNumber
      : t === "string" ? ((c = color(b)) ? (b = c, interpolateRgb) : interpolateString)
      : b instanceof color ? interpolateRgb
      : b instanceof Date ? date
      : isNumberArray(b) ? numberArray
      : Array.isArray(b) ? genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : interpolateNumber)(a, b);
}

function interpolateRound(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

var degrees = 180 / Math.PI;

var identity$1 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

function decompose(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return identity$1;
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return decompose(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return identity$1;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity$1;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}

function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

function constant$1(x) {
  return function() {
    return x;
  };
}

function number(x) {
  return +x;
}

var unit = [0, 1];

function identity$2(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : constant$1(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = bisectRight(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate$1 = interpolate,
      transform,
      untransform,
      unknown,
      clamp = identity$2,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity$2) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate$1)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate$1 = interpolateRound, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity$2, rescale()) : clamp !== identity$2;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate$1 = _, rescale()) : interpolate$1;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous() {
  return transformer()(identity$2, identity$2);
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
function formatDecimal(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}

function exponent(x) {
  return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
}

function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
}

function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width === undefined ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};

// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function formatTrim(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (i0 > 0) { if (!+s[i]) break out; i0 = 0; } break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

var prefixExponent;

function formatPrefixAuto(x, p) {
  var d = formatDecimal(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}

function formatRounded(x, p) {
  var d = formatDecimal(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

var formatTypes = {
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return formatRounded(x * 100, p); },
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
};

function identity$3(x) {
  return x;
}

var map = Array.prototype.map,
    prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

function formatLocale(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? identity$3 : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? identity$3 : formatNumerals(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "-" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes[type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = formatTrim(value);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;

        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}

var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});

function defaultLocale(definition) {
  locale = formatLocale(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}

function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}

function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}

function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count),
      precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = tickIncrement(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = tickIncrement(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = tickIncrement(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear$1() {
  var scale = continuous();

  scale.copy = function() {
    return copy(scale, linear$1());
  };

  initRange.apply(scale, arguments);

  return linearish(scale);
}

const FilterDefs = ({
  matte,
  key,
  additionalDefs
}) => React$1__default.createElement("defs", null, React$1__default.createElement("filter", {
  id: "paintyFilterHeavy"
}, React$1__default.createElement("feGaussianBlur", {
  id: "gaussblurrer",
  in: "SourceGraphic",
  stdDeviation: 4,
  colorInterpolationFilters: "sRGB",
  result: "blur"
}), React$1__default.createElement("feColorMatrix", {
  in: "blur",
  mode: "matrix",
  values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 34 -7",
  result: "gooey"
})), React$1__default.createElement("filter", {
  id: "paintyFilterLight"
}, React$1__default.createElement("feGaussianBlur", {
  id: "gaussblurrer",
  in: "SourceGraphic",
  stdDeviation: 2,
  colorInterpolationFilters: "sRGB",
  result: "blur"
}), React$1__default.createElement("feColorMatrix", {
  in: "blur",
  mode: "matrix",
  values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 34 -7",
  result: "gooey"
})), React$1__default.createElement("clipPath", {
  id: `matte-clip-${key}`
}, matte), additionalDefs);

const SpanOrDiv = props => {
  const {
    style,
    className,
    children,
    span
  } = props;
  return span === true ? React$1__default.createElement("span", {
    className: className,
    style: {
      display: 'block',
      ...style
    }
  }, children) : React$1__default.createElement("div", {
    className: className,
    style: style
  }, children);
};

SpanOrDiv.propTypes = {
  style: propTypes.object,
  className: propTypes.string,
  span: propTypes.bool
};

var runtime = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    {
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
  runtime = global.regeneratorRuntime =  module.exports ;

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
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
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
        context.arg = undefined$1;
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

          next.value = undefined$1;
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
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
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
          context.arg = undefined$1;
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
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);
});

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

var runtimeModule = runtime;

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

var regenerator = runtimeModule;

var segment = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.RoughSegmentRelation = RoughSegmentRelation;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RoughSegmentRelation() {
  return {
    LEFT: 0,
    RIGHT: 1,
    INTERSECTS: 2,
    AHEAD: 3,
    BEHIND: 4,
    SEPARATE: 5,
    UNDEFINED: 6
  };
}

var RoughSegment = exports.RoughSegment = function () {
  function RoughSegment(px1, py1, px2, py2) {
    _classCallCheck(this, RoughSegment);

    this.RoughSegmentRelationConst = RoughSegmentRelation();
    this.px1 = px1;
    this.py1 = py1;
    this.px2 = px2;
    this.py2 = py2;
    this.xi = Number.MAX_VALUE;
    this.yi = Number.MAX_VALUE;
    this.a = py2 - py1;
    this.b = px1 - px2;
    this.c = px2 * py1 - px1 * py2;
    this._undefined = this.a == 0 && this.b == 0 && this.c == 0;
  }

  _createClass(RoughSegment, [{
    key: "isUndefined",
    value: function isUndefined() {
      return this._undefined;
    }
  }, {
    key: "compare",
    value: function compare(otherSegment) {
      if (this.isUndefined() || otherSegment.isUndefined()) {
        return this.RoughSegmentRelationConst.UNDEFINED;
      }
      var grad1 = Number.MAX_VALUE;
      var grad2 = Number.MAX_VALUE;
      var int1 = 0,
          int2 = 0;
      var a = this.a,
          b = this.b,
          c = this.c;

      if (Math.abs(b) > 0.00001) {
        grad1 = -a / b;
        int1 = -c / b;
      }
      if (Math.abs(otherSegment.b) > 0.00001) {
        grad2 = -otherSegment.a / otherSegment.b;
        int2 = -otherSegment.c / otherSegment.b;
      }

      if (grad1 == Number.MAX_VALUE) {
        if (grad2 == Number.MAX_VALUE) {
          if (-c / a != -otherSegment.c / otherSegment.a) {
            return this.RoughSegmentRelationConst.SEPARATE;
          }
          if (this.py1 >= Math.min(otherSegment.py1, otherSegment.py2) && this.py1 <= Math.max(otherSegment.py1, otherSegment.py2)) {
            this.xi = this.px1;
            this.yi = this.py1;
            return this.RoughSegmentRelationConst.INTERSECTS;
          }
          if (this.py2 >= Math.min(otherSegment.py1, otherSegment.py2) && this.py2 <= Math.max(otherSegment.py1, otherSegment.py2)) {
            this.xi = this.px2;
            this.yi = this.py2;
            return this.RoughSegmentRelationConst.INTERSECTS;
          }
          return this.RoughSegmentRelationConst.SEPARATE;
        }
        this.xi = this.px1;
        this.yi = grad2 * this.xi + int2;
        if ((this.py1 - this.yi) * (this.yi - this.py2) < -0.00001 || (otherSegment.py1 - this.yi) * (this.yi - otherSegment.py2) < -0.00001) {
          return this.RoughSegmentRelationConst.SEPARATE;
        }
        if (Math.abs(otherSegment.a) < 0.00001) {
          if ((otherSegment.px1 - this.xi) * (this.xi - otherSegment.px2) < -0.00001) {
            return this.RoughSegmentRelationConst.SEPARATE;
          }
          return this.RoughSegmentRelationConst.INTERSECTS;
        }
        return this.RoughSegmentRelationConst.INTERSECTS;
      }

      if (grad2 == Number.MAX_VALUE) {
        this.xi = otherSegment.px1;
        this.yi = grad1 * this.xi + int1;
        if ((otherSegment.py1 - this.yi) * (this.yi - otherSegment.py2) < -0.00001 || (this.py1 - this.yi) * (this.yi - this.py2) < -0.00001) {
          return this.RoughSegmentRelationConst.SEPARATE;
        }
        if (Math.abs(a) < 0.00001) {
          if ((this.px1 - this.xi) * (this.xi - this.px2) < -0.00001) {
            return this.RoughSegmentRelationConst.SEPARATE;
          }
          return this.RoughSegmentRelationConst.INTERSECTS;
        }
        return this.RoughSegmentRelationConst.INTERSECTS;
      }

      if (grad1 == grad2) {
        if (int1 != int2) {
          return this.RoughSegmentRelationConst.SEPARATE;
        }
        if (this.px1 >= Math.min(otherSegment.px1, otherSegment.px2) && this.px1 <= Math.max(otherSegment.py1, otherSegment.py2)) {
          this.xi = this.px1;
          this.yi = this.py1;
          return this.RoughSegmentRelationConst.INTERSECTS;
        }
        if (this.px2 >= Math.min(otherSegment.px1, otherSegment.px2) && this.px2 <= Math.max(otherSegment.px1, otherSegment.px2)) {
          this.xi = this.px2;
          this.yi = this.py2;
          return this.RoughSegmentRelationConst.INTERSECTS;
        }
        return this.RoughSegmentRelationConst.SEPARATE;
      }

      this.xi = (int2 - int1) / (grad1 - grad2);
      this.yi = grad1 * this.xi + int1;

      if ((this.px1 - this.xi) * (this.xi - this.px2) < -0.00001 || (otherSegment.px1 - this.xi) * (this.xi - otherSegment.px2) < -0.00001) {
        return this.RoughSegmentRelationConst.SEPARATE;
      }
      return this.RoughSegmentRelationConst.INTERSECTS;
    }
  }, {
    key: "getLength",
    value: function getLength() {
      return this._getLength(this.px1, this.py1, this.px2, this.py2);
    }
  }, {
    key: "_getLength",
    value: function _getLength(x1, y1, x2, y2) {
      var dx = x2 - x1;
      var dy = y2 - y1;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }]);

  return RoughSegment;
}();
});

unwrapExports(segment);
var segment_1 = segment.RoughSegmentRelation;
var segment_2 = segment.RoughSegment;

var hachure = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoughHachureIterator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RoughHachureIterator = exports.RoughHachureIterator = function () {
  function RoughHachureIterator(top, bottom, left, right, gap, sinAngle, cosAngle, tanAngle) {
    _classCallCheck(this, RoughHachureIterator);

    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
    this.gap = gap;
    this.sinAngle = sinAngle;
    this.tanAngle = tanAngle;

    if (Math.abs(sinAngle) < 0.0001) {
      this.pos = left + gap;
    } else if (Math.abs(sinAngle) > 0.9999) {
      this.pos = top + gap;
    } else {
      this.deltaX = (bottom - top) * Math.abs(tanAngle);
      this.pos = left - Math.abs(this.deltaX);
      this.hGap = Math.abs(gap / cosAngle);
      this.sLeft = new segment.RoughSegment(left, bottom, left, top);
      this.sRight = new segment.RoughSegment(right, bottom, right, top);
    }
  }

  _createClass(RoughHachureIterator, [{
    key: "getNextLine",
    value: function getNextLine() {
      if (Math.abs(this.sinAngle) < 0.0001) {
        if (this.pos < this.right) {
          var line = [this.pos, this.top, this.pos, this.bottom];
          this.pos += this.gap;
          return line;
        }
      } else if (Math.abs(this.sinAngle) > 0.9999) {
        if (this.pos < this.bottom) {
          var _line = [this.left, this.pos, this.right, this.pos];
          this.pos += this.gap;
          return _line;
        }
      } else {
        var xLower = this.pos - this.deltaX / 2;
        var xUpper = this.pos + this.deltaX / 2;
        var yLower = this.bottom;
        var yUpper = this.top;
        if (this.pos < this.right + this.deltaX) {
          while (xLower < this.left && xUpper < this.left || xLower > this.right && xUpper > this.right) {
            this.pos += this.hGap;
            xLower = this.pos - this.deltaX / 2;
            xUpper = this.pos + this.deltaX / 2;
            if (this.pos > this.right + this.deltaX) {
              return null;
            }
          }
          var s = new segment.RoughSegment(xLower, yLower, xUpper, yUpper);
          if (s.compare(this.sLeft) == (0, segment.RoughSegmentRelation)().INTERSECTS) {
            xLower = s.xi;
            yLower = s.yi;
          }
          if (s.compare(this.sRight) == (0, segment.RoughSegmentRelation)().INTERSECTS) {
            xUpper = s.xi;
            yUpper = s.yi;
          }
          if (this.tanAngle > 0) {
            xLower = this.right - (xLower - this.left);
            xUpper = this.right - (xUpper - this.left);
          }
          var _line2 = [xLower, yLower, xUpper, yUpper];
          this.pos += this.hGap;
          return _line2;
        }
      }
      return null;
    }
  }]);

  return RoughHachureIterator;
}();
});

unwrapExports(hachure);
var hachure_1 = hachure.RoughHachureIterator;

var path = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PathToken = function () {
  function PathToken(type, text) {
    _classCallCheck(this, PathToken);

    this.type = type;
    this.text = text;
  }

  _createClass(PathToken, [{
    key: "isType",
    value: function isType(type) {
      return this.type === type;
    }
  }]);

  return PathToken;
}();

var ParsedPath = function () {
  function ParsedPath(d) {
    _classCallCheck(this, ParsedPath);

    this.PARAMS = {
      A: ["rx", "ry", "x-axis-rotation", "large-arc-flag", "sweep-flag", "x", "y"],
      a: ["rx", "ry", "x-axis-rotation", "large-arc-flag", "sweep-flag", "x", "y"],
      C: ["x1", "y1", "x2", "y2", "x", "y"],
      c: ["x1", "y1", "x2", "y2", "x", "y"],
      H: ["x"],
      h: ["x"],
      L: ["x", "y"],
      l: ["x", "y"],
      M: ["x", "y"],
      m: ["x", "y"],
      Q: ["x1", "y1", "x", "y"],
      q: ["x1", "y1", "x", "y"],
      S: ["x2", "y2", "x", "y"],
      s: ["x2", "y2", "x", "y"],
      T: ["x", "y"],
      t: ["x", "y"],
      V: ["y"],
      v: ["y"],
      Z: [],
      z: []
    };
    this.COMMAND = 0;
    this.NUMBER = 1;
    this.EOD = 2;
    this.segments = [];
    this.d = d || "";
    this.parseData(d);
    this.processPoints();
  }

  _createClass(ParsedPath, [{
    key: "loadFromSegments",
    value: function loadFromSegments(segments) {
      this.segments = segments;
      this.processPoints();
    }
  }, {
    key: "processPoints",
    value: function processPoints() {
      var first = null,
          currentPoint = [0, 0];
      for (var i = 0; i < this.segments.length; i++) {
        var s = this.segments[i];
        switch (s.key) {
          case 'M':
          case 'L':
          case 'T':
            s.point = [s.data[0], s.data[1]];
            break;
          case 'm':
          case 'l':
          case 't':
            s.point = [s.data[0] + currentPoint[0], s.data[1] + currentPoint[1]];
            break;
          case 'H':
            s.point = [s.data[0], currentPoint[1]];
            break;
          case 'h':
            s.point = [s.data[0] + currentPoint[0], currentPoint[1]];
            break;
          case 'V':
            s.point = [currentPoint[0], s.data[0]];
            break;
          case 'v':
            s.point = [currentPoint[0], s.data[0] + currentPoint[1]];
            break;
          case 'z':
          case 'Z':
            if (first) {
              s.point = [first[0], first[1]];
            }
            break;
          case 'C':
            s.point = [s.data[4], s.data[5]];
            break;
          case 'c':
            s.point = [s.data[4] + currentPoint[0], s.data[5] + currentPoint[1]];
            break;
          case 'S':
            s.point = [s.data[2], s.data[3]];
            break;
          case 's':
            s.point = [s.data[2] + currentPoint[0], s.data[3] + currentPoint[1]];
            break;
          case 'Q':
            s.point = [s.data[2], s.data[3]];
            break;
          case 'q':
            s.point = [s.data[2] + currentPoint[0], s.data[3] + currentPoint[1]];
            break;
          case 'A':
            s.point = [s.data[5], s.data[6]];
            break;
          case 'a':
            s.point = [s.data[5] + currentPoint[0], s.data[6] + currentPoint[1]];
            break;
        }
        if (s.key === 'm' || s.key === 'M') {
          first = null;
        }
        if (s.point) {
          currentPoint = s.point;
          if (!first) {
            first = s.point;
          }
        }
        if (s.key === 'z' || s.key === 'Z') {
          first = null;
        }
      }
    }
  }, {
    key: "parseData",
    value: function parseData(d) {
      var tokens = this.tokenize(d);
      var index = 0;
      var token = tokens[index];
      var mode = "BOD";
      this.segments = new Array();
      while (!token.isType(this.EOD)) {
        var param_length;
        var params = new Array();
        if (mode == "BOD") {
          if (token.text == "M" || token.text == "m") {
            index++;
            param_length = this.PARAMS[token.text].length;
            mode = token.text;
          } else {
            return this.parseData('M0,0' + d);
          }
        } else {
          if (token.isType(this.NUMBER)) {
            param_length = this.PARAMS[mode].length;
          } else {
            index++;
            param_length = this.PARAMS[token.text].length;
            mode = token.text;
          }
        }

        if (index + param_length < tokens.length) {
          for (var i = index; i < index + param_length; i++) {
            var number = tokens[i];
            if (number.isType(this.NUMBER)) {
              params[params.length] = number.text;
            } else {
              console.error("Parameter type is not a number: " + mode + "," + number.text);
              return;
            }
          }
          var segment;
          if (this.PARAMS[mode]) {
            segment = { key: mode, data: params };
          } else {
            console.error("Unsupported segment type: " + mode);
            return;
          }
          this.segments.push(segment);
          index += param_length;
          token = tokens[index];
          if (mode == "M") mode = "L";
          if (mode == "m") mode = "l";
        } else {
          console.error("Path data ended before all parameters were found");
        }
      }
    }
  }, {
    key: "tokenize",
    value: function tokenize(d) {
      var tokens = new Array();
      while (d != "") {
        if (d.match(/^([ \t\r\n,]+)/)) {
          d = d.substr(RegExp.$1.length);
        } else if (d.match(/^([aAcChHlLmMqQsStTvVzZ])/)) {
          tokens[tokens.length] = new PathToken(this.COMMAND, RegExp.$1);
          d = d.substr(RegExp.$1.length);
        } else if (d.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) {
          tokens[tokens.length] = new PathToken(this.NUMBER, parseFloat(RegExp.$1));
          d = d.substr(RegExp.$1.length);
        } else {
          console.error("Unrecognized segment command: " + d);
          return null;
        }
      }
      tokens[tokens.length] = new PathToken(this.EOD, null);
      return tokens;
    }
  }, {
    key: "closed",
    get: function get() {
      if (typeof this._closed === 'undefined') {
        this._closed = false;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.segments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var s = _step.value;

            if (s.key.toLowerCase() === 'z') {
              this._closed = true;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      return this._closed;
    }
  }]);

  return ParsedPath;
}();

var RoughPath = exports.RoughPath = function () {
  function RoughPath(d) {
    _classCallCheck(this, RoughPath);

    this.d = d;
    this.parsed = new ParsedPath(d);
    this._position = [0, 0];
    this.bezierReflectionPoint = null;
    this.quadReflectionPoint = null;
    this._first = null;
  }

  _createClass(RoughPath, [{
    key: "setPosition",
    value: function setPosition(x, y) {
      this._position = [x, y];
      if (!this._first) {
        this._first = [x, y];
      }
    }
  }, {
    key: "segments",
    get: function get() {
      return this.parsed.segments;
    }
  }, {
    key: "closed",
    get: function get() {
      return this.parsed.closed;
    }
  }, {
    key: "linearPoints",
    get: function get() {
      if (!this._linearPoints) {
        var lp = [];
        var points = [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.parsed.segments[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var s = _step2.value;

            var key = s.key.toLowerCase();
            if (key === 'm' || key === 'z') {
              if (points.length) {
                lp.push(points);
                points = [];
              }
              if (key === 'z') {
                continue;
              }
            }
            if (s.point) {
              points.push(s.point);
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        if (points.length) {
          lp.push(points);
          points = [];
        }
        this._linearPoints = lp;
      }
      return this._linearPoints;
    }
  }, {
    key: "first",
    get: function get() {
      return this._first;
    },
    set: function set(v) {
      this._first = v;
    }
  }, {
    key: "position",
    get: function get() {
      return this._position;
    }
  }, {
    key: "x",
    get: function get() {
      return this._position[0];
    }
  }, {
    key: "y",
    get: function get() {
      return this._position[1];
    }
  }]);

  return RoughPath;
}();

var RoughArcConverter = exports.RoughArcConverter = function () {
  // Algorithm as described in https://www.w3.org/TR/SVG/implnote.html
  // Code adapted from nsSVGPathDataParser.cpp in Mozilla 
  // https://hg.mozilla.org/mozilla-central/file/17156fbebbc8/content/svg/content/src/nsSVGPathDataParser.cpp#l887
  function RoughArcConverter(from, to, radii, angle, largeArcFlag, sweepFlag) {
    _classCallCheck(this, RoughArcConverter);

    var radPerDeg = Math.PI / 180;
    this._segIndex = 0;
    this._numSegs = 0;
    if (from[0] == to[0] && from[1] == to[1]) {
      return;
    }
    this._rx = Math.abs(radii[0]);
    this._ry = Math.abs(radii[1]);
    this._sinPhi = Math.sin(angle * radPerDeg);
    this._cosPhi = Math.cos(angle * radPerDeg);
    var x1dash = this._cosPhi * (from[0] - to[0]) / 2.0 + this._sinPhi * (from[1] - to[1]) / 2.0;
    var y1dash = -this._sinPhi * (from[0] - to[0]) / 2.0 + this._cosPhi * (from[1] - to[1]) / 2.0;
    var root;
    var numerator = this._rx * this._rx * this._ry * this._ry - this._rx * this._rx * y1dash * y1dash - this._ry * this._ry * x1dash * x1dash;
    if (numerator < 0) {
      var s = Math.sqrt(1 - numerator / (this._rx * this._rx * this._ry * this._ry));
      this._rx = s;
      this._ry = s;
      root = 0;
    } else {
      root = (largeArcFlag == sweepFlag ? -1.0 : 1.0) * Math.sqrt(numerator / (this._rx * this._rx * y1dash * y1dash + this._ry * this._ry * x1dash * x1dash));
    }
    var cxdash = root * this._rx * y1dash / this._ry;
    var cydash = -root * this._ry * x1dash / this._rx;
    this._C = [0, 0];
    this._C[0] = this._cosPhi * cxdash - this._sinPhi * cydash + (from[0] + to[0]) / 2.0;
    this._C[1] = this._sinPhi * cxdash + this._cosPhi * cydash + (from[1] + to[1]) / 2.0;
    this._theta = this.calculateVectorAngle(1.0, 0.0, (x1dash - cxdash) / this._rx, (y1dash - cydash) / this._ry);
    var dtheta = this.calculateVectorAngle((x1dash - cxdash) / this._rx, (y1dash - cydash) / this._ry, (-x1dash - cxdash) / this._rx, (-y1dash - cydash) / this._ry);
    if (!sweepFlag && dtheta > 0) {
      dtheta -= 2 * Math.PI;
    } else if (sweepFlag && dtheta < 0) {
      dtheta += 2 * Math.PI;
    }
    this._numSegs = Math.ceil(Math.abs(dtheta / (Math.PI / 2)));
    this._delta = dtheta / this._numSegs;
    this._T = 8 / 3 * Math.sin(this._delta / 4) * Math.sin(this._delta / 4) / Math.sin(this._delta / 2);
    this._from = from;
  }

  _createClass(RoughArcConverter, [{
    key: "getNextSegment",
    value: function getNextSegment() {
      var cp1, cp2, to;
      if (this._segIndex == this._numSegs) {
        return null;
      }
      var cosTheta1 = Math.cos(this._theta);
      var sinTheta1 = Math.sin(this._theta);
      var theta2 = this._theta + this._delta;
      var cosTheta2 = Math.cos(theta2);
      var sinTheta2 = Math.sin(theta2);

      to = [this._cosPhi * this._rx * cosTheta2 - this._sinPhi * this._ry * sinTheta2 + this._C[0], this._sinPhi * this._rx * cosTheta2 + this._cosPhi * this._ry * sinTheta2 + this._C[1]];
      cp1 = [this._from[0] + this._T * (-this._cosPhi * this._rx * sinTheta1 - this._sinPhi * this._ry * cosTheta1), this._from[1] + this._T * (-this._sinPhi * this._rx * sinTheta1 + this._cosPhi * this._ry * cosTheta1)];
      cp2 = [to[0] + this._T * (this._cosPhi * this._rx * sinTheta2 + this._sinPhi * this._ry * cosTheta2), to[1] + this._T * (this._sinPhi * this._rx * sinTheta2 - this._cosPhi * this._ry * cosTheta2)];

      this._theta = theta2;
      this._from = [to[0], to[1]];
      this._segIndex++;

      return {
        cp1: cp1,
        cp2: cp2,
        to: to
      };
    }
  }, {
    key: "calculateVectorAngle",
    value: function calculateVectorAngle(ux, uy, vx, vy) {
      var ta = Math.atan2(uy, ux);
      var tb = Math.atan2(vy, vx);
      if (tb >= ta) return tb - ta;
      return 2 * Math.PI - (ta - tb);
    }
  }]);

  return RoughArcConverter;
}();

var PathFitter = exports.PathFitter = function () {
  function PathFitter(sets, closed) {
    _classCallCheck(this, PathFitter);

    this.sets = sets;
    this.closed = closed;
  }

  _createClass(PathFitter, [{
    key: "fit",
    value: function fit(simplification) {
      var outSets = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.sets[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var set = _step3.value;

          var length = set.length;
          var estLength = Math.floor(simplification * length);
          if (estLength < 5) {
            if (length <= 5) {
              continue;
            }
            estLength = 5;
          }
          outSets.push(this.reduce(set, estLength));
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      var d = '';
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = outSets[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _set = _step4.value;

          for (var i = 0; i < _set.length; i++) {
            var point = _set[i];
            if (i === 0) {
              d += 'M' + point[0] + "," + point[1];
            } else {
              d += 'L' + point[0] + "," + point[1];
            }
          }
          if (this.closed) {
            d += 'z ';
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return d;
    }
  }, {
    key: "distance",
    value: function distance(p1, p2) {
      return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
    }
  }, {
    key: "reduce",
    value: function reduce(set, count) {
      if (set.length <= count) {
        return set;
      }
      var points = set.slice(0);
      while (points.length > count) {
        var areas = [];
        var minArea = -1;
        var minIndex = -1;
        for (var i = 1; i < points.length - 1; i++) {
          var a = this.distance(points[i - 1], points[i]);
          var b = this.distance(points[i], points[i + 1]);
          var c = this.distance(points[i - 1], points[i + 1]);
          var s = (a + b + c) / 2.0;
          var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
          areas.push(area);
          if (minArea < 0 || area < minArea) {
            minArea = area;
            minIndex = i;
          }
        }
        if (minIndex > 0) {
          points.splice(minIndex, 1);
        } else {
          break;
        }
      }
      return points;
    }
  }]);

  return PathFitter;
}();
});

unwrapExports(path);
var path_1 = path.RoughPath;
var path_2 = path.RoughArcConverter;
var path_3 = path.PathFitter;

var renderer = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoughRenderer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RoughRenderer = exports.RoughRenderer = function () {
  function RoughRenderer() {
    _classCallCheck(this, RoughRenderer);
  }

  _createClass(RoughRenderer, [{
    key: "line",
    value: function line(x1, y1, x2, y2, o) {
      var ops = this._doubleLine(x1, y1, x2, y2, o);
      return { type: "path", ops: ops };
    }
  }, {
    key: "linearPath",
    value: function linearPath(points, close, o) {
      var len = (points || []).length;
      if (len > 2) {
        var ops = [];
        for (var i = 0; i < len - 1; i++) {
          ops = ops.concat(this._doubleLine(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1], o));
        }
        if (close) {
          ops = ops.concat(this._doubleLine(points[len - 1][0], points[len - 1][1], points[0][0], points[0][1], o));
        }
        return { type: "path", ops: ops };
      } else if (len === 2) {
        return this.line(points[0][0], points[0][1], points[1][0], points[1][1], o);
      }
    }
  }, {
    key: "polygon",
    value: function polygon(points, o) {
      return this.linearPath(points, true, o);
    }
  }, {
    key: "rectangle",
    value: function rectangle(x, y, width, height, o) {
      var points = [[x, y], [x + width, y], [x + width, y + height], [x, y + height]];
      return this.polygon(points, o);
    }
  }, {
    key: "curve",
    value: function curve(points, o) {
      var o1 = this._curveWithOffset(points, 1 * (1 + o.roughness * 0.2), o);
      var o2 = this._curveWithOffset(points, 1.5 * (1 + o.roughness * 0.22), o);
      return { type: "path", ops: o1.concat(o2) };
    }
  }, {
    key: "ellipse",
    value: function ellipse(x, y, width, height, o) {
      var increment = Math.PI * 2 / o.curveStepCount;
      var rx = Math.abs(width / 2);
      var ry = Math.abs(height / 2);
      rx += this._getOffset(-rx * 0.05, rx * 0.05, o);
      ry += this._getOffset(-ry * 0.05, ry * 0.05, o);
      var o1 = this._ellipse(increment, x, y, rx, ry, 1, increment * this._getOffset(0.1, this._getOffset(0.4, 1, o), o), o);
      var o2 = this._ellipse(increment, x, y, rx, ry, 1.5, 0, o);
      return { type: "path", ops: o1.concat(o2) };
    }
  }, {
    key: "arc",
    value: function arc(x, y, width, height, start, stop, closed, roughClosure, o) {
      var cx = x;
      var cy = y;
      var rx = Math.abs(width / 2);
      var ry = Math.abs(height / 2);
      rx += this._getOffset(-rx * 0.01, rx * 0.01, o);
      ry += this._getOffset(-ry * 0.01, ry * 0.01, o);
      var strt = start;
      var stp = stop;
      while (strt < 0) {
        strt += Math.PI * 2;
        stp += Math.PI * 2;
      }
      if (stp - strt > Math.PI * 2) {
        strt = 0;
        stp = Math.PI * 2;
      }
      var ellipseInc = Math.PI * 2 / o.curveStepCount;
      var arcInc = Math.min(ellipseInc / 2, (stp - strt) / 2);
      var o1 = this._arc(arcInc, cx, cy, rx, ry, strt, stp, 1, o);
      var o2 = this._arc(arcInc, cx, cy, rx, ry, strt, stp, 1.5, o);
      var ops = o1.concat(o2);
      if (closed) {
        if (roughClosure) {
          ops = ops.concat(this._doubleLine(cx, cy, cx + rx * Math.cos(strt), cy + ry * Math.sin(strt), o));
          ops = ops.concat(this._doubleLine(cx, cy, cx + rx * Math.cos(stp), cy + ry * Math.sin(stp), o));
        } else {
          ops.push({ op: "lineTo", data: [cx, cy] });
          ops.push({
            op: "lineTo",
            data: [cx + rx * Math.cos(strt), cy + ry * Math.sin(strt)]
          });
        }
      }
      return { type: "path", ops: ops };
    }
  }, {
    key: "hachureFillArc",
    value: function hachureFillArc(x, y, width, height, start, stop, o) {
      var cx = x;
      var cy = y;
      var rx = Math.abs(width / 2);
      var ry = Math.abs(height / 2);
      rx += this._getOffset(-rx * 0.01, rx * 0.01, o);
      ry += this._getOffset(-ry * 0.01, ry * 0.01, o);
      var strt = start;
      var stp = stop;
      while (strt < 0) {
        strt += Math.PI * 2;
        stp += Math.PI * 2;
      }
      if (stp - strt > Math.PI * 2) {
        strt = 0;
        stp = Math.PI * 2;
      }
      var increment = (stp - strt) / o.curveStepCount;
      var xc = [],
          yc = [];
      for (var angle = strt; angle <= stp; angle = angle + increment) {
        xc.push(cx + rx * Math.cos(angle));
        yc.push(cy + ry * Math.sin(angle));
      }
      xc.push(cx + rx * Math.cos(stp));
      yc.push(cy + ry * Math.sin(stp));
      xc.push(cx);
      yc.push(cy);
      return this.hachureFillShape(xc, yc, o);
    }
  }, {
    key: "solidFillShape",
    value: function solidFillShape(xCoords, yCoords, o) {
      var ops = [];
      if (xCoords && yCoords && xCoords.length && yCoords.length && xCoords.length === yCoords.length) {
        var offset = o.maxRandomnessOffset || 0;
        var len = xCoords.length;
        if (len > 2) {
          ops.push({
            op: "move",
            data: [xCoords[0] + this._getOffset(-offset, offset, o), yCoords[0] + this._getOffset(-offset, offset, o)]
          });
          for (var i = 1; i < len; i++) {
            ops.push({
              op: "lineTo",
              data: [xCoords[i] + this._getOffset(-offset, offset, o), yCoords[i] + this._getOffset(-offset, offset, o)]
            });
          }
        }
      }
      return { type: "fillPath", ops: ops };
    }
  }, {
    key: "hachureFillShape",
    value: function hachureFillShape(xCoords, yCoords, o) {
      var ops = [];
      if (xCoords && yCoords && xCoords.length && yCoords.length) {
        var left = xCoords[0];
        var right = xCoords[0];
        var top = yCoords[0];
        var bottom = yCoords[0];
        for (var i = 1; i < xCoords.length; i++) {
          left = Math.min(left, xCoords[i]);
          right = Math.max(right, xCoords[i]);
          top = Math.min(top, yCoords[i]);
          bottom = Math.max(bottom, yCoords[i]);
        }
        var angle = o.hachureAngle;
        var gap = o.hachureGap;
        if (gap < 0) {
          gap = o.strokeWidth * 4;
        }
        gap = Math.max(gap, 0.1);

        var radPerDeg = Math.PI / 180;
        var hachureAngle = angle % 180 * radPerDeg;
        var cosAngle = Math.cos(hachureAngle);
        var sinAngle = Math.sin(hachureAngle);
        var tanAngle = Math.tan(hachureAngle);

        var it = new hachure.RoughHachureIterator(top - 1, bottom + 1, left - 1, right + 1, gap, sinAngle, cosAngle, tanAngle);
        var rectCoords = void 0;
        while ((rectCoords = it.getNextLine()) != null) {
          var lines = this._getIntersectingLines(rectCoords, xCoords, yCoords);
          for (var _i = 0; _i < lines.length; _i++) {
            if (_i < lines.length - 1) {
              var p1 = lines[_i];
              var p2 = lines[_i + 1];
              ops = ops.concat(this._doubleLine(p1[0], p1[1], p2[0], p2[1], o));
            }
          }
        }
      }
      return { type: "fillSketch", ops: ops };
    }
  }, {
    key: "hachureFillEllipse",
    value: function hachureFillEllipse(cx, cy, width, height, o) {
      var ops = [];
      var rx = Math.abs(width / 2);
      var ry = Math.abs(height / 2);
      rx += this._getOffset(-rx * 0.05, rx * 0.05, o);
      ry += this._getOffset(-ry * 0.05, ry * 0.05, o);
      var angle = o.hachureAngle;
      var gap = o.hachureGap;
      if (gap <= 0) {
        gap = o.strokeWidth * 4;
      }
      var fweight = o.fillWeight;
      if (fweight < 0) {
        fweight = o.strokeWidth / 2;
      }
      var radPerDeg = Math.PI / 180;
      var hachureAngle = angle % 180 * radPerDeg;
      var tanAngle = Math.tan(hachureAngle);
      var aspectRatio = ry / rx;
      var hyp = Math.sqrt(aspectRatio * tanAngle * aspectRatio * tanAngle + 1);
      var sinAnglePrime = aspectRatio * tanAngle / hyp;
      var cosAnglePrime = 1 / hyp;
      var gapPrime = gap / (rx * ry / Math.sqrt(ry * cosAnglePrime * (ry * cosAnglePrime) + rx * sinAnglePrime * (rx * sinAnglePrime)) / rx);
      var halfLen = Math.sqrt(rx * rx - (cx - rx + gapPrime) * (cx - rx + gapPrime));
      for (var xPos = cx - rx + gapPrime; xPos < cx + rx; xPos += gapPrime) {
        halfLen = Math.sqrt(rx * rx - (cx - xPos) * (cx - xPos));
        var p1 = this._affine(xPos, cy - halfLen, cx, cy, sinAnglePrime, cosAnglePrime, aspectRatio);
        var p2 = this._affine(xPos, cy + halfLen, cx, cy, sinAnglePrime, cosAnglePrime, aspectRatio);
        ops = ops.concat(this._doubleLine(p1[0], p1[1], p2[0], p2[1], o));
      }
      return { type: "fillSketch", ops: ops };
    }
  }, {
    key: "svgPath",
    value: function svgPath(path$1, o) {
      path$1 = (path$1 || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
      var p = new path.RoughPath(path$1);
      if (o.simplification) {
        var fitter = new path.PathFitter(p.linearPoints, p.closed);
        var d = fitter.fit(o.simplification);
        p = new path.RoughPath(d);
      }
      var ops = [];
      var segments = p.segments || [];
      for (var i = 0; i < segments.length; i++) {
        var s = segments[i];
        var prev = i > 0 ? segments[i - 1] : null;
        var opList = this._processSegment(p, s, prev, o);
        if (opList && opList.length) {
          ops = ops.concat(opList);
        }
      }
      return { type: "path", ops: ops };
    }

    // privates

  }, {
    key: "_bezierTo",
    value: function _bezierTo(x1, y1, x2, y2, x, y, path, o) {
      var ops = [];
      var ros = [o.maxRandomnessOffset || 1, (o.maxRandomnessOffset || 1) + 0.5];
      var f = null;
      for (var i = 0; i < 2; i++) {
        if (i === 0) {
          ops.push({ op: "move", data: [path.x, path.y] });
        } else {
          ops.push({
            op: "move",
            data: [path.x + this._getOffset(-ros[0], ros[0], o), path.y + this._getOffset(-ros[0], ros[0], o)]
          });
        }
        f = [x + this._getOffset(-ros[i], ros[i], o), y + this._getOffset(-ros[i], ros[i], o)];
        ops.push({
          op: "bcurveTo",
          data: [x1 + this._getOffset(-ros[i], ros[i], o), y1 + this._getOffset(-ros[i], ros[i], o), x2 + this._getOffset(-ros[i], ros[i], o), y2 + this._getOffset(-ros[i], ros[i], o), f[0], f[1]]
        });
      }
      path.setPosition(f[0], f[1]);
      return ops;
    }
  }, {
    key: "_processSegment",
    value: function _processSegment(path$1, seg, prevSeg, o) {
      var ops = [];
      switch (seg.key) {
        case "M":
        case "m":
          {
            var delta = seg.key === "m";
            if (seg.data.length >= 2) {
              var x = +seg.data[0];
              var y = +seg.data[1];
              if (delta) {
                x += path$1.x;
                y += path$1.y;
              }
              var ro = 1 * (o.maxRandomnessOffset || 0);
              x = x + this._getOffset(-ro, ro, o);
              y = y + this._getOffset(-ro, ro, o);
              path$1.setPosition(x, y);
              ops.push({ op: "move", data: [x, y] });
            }
            break;
          }
        case "L":
        case "l":
          {
            var _delta = seg.key === "l";
            if (seg.data.length >= 2) {
              var _x = +seg.data[0];
              var _y = +seg.data[1];
              if (_delta) {
                _x += path$1.x;
                _y += path$1.y;
              }
              ops = ops.concat(this._doubleLine(path$1.x, path$1.y, _x, _y, o));
              path$1.setPosition(_x, _y);
            }
            break;
          }
        case "H":
        case "h":
          {
            var _delta2 = seg.key === "h";
            if (seg.data.length) {
              var _x2 = +seg.data[0];
              if (_delta2) {
                _x2 += path$1.x;
              }
              ops = ops.concat(this._doubleLine(path$1.x, path$1.y, _x2, path$1.y, o));
              path$1.setPosition(_x2, path$1.y);
            }
            break;
          }
        case "V":
        case "v":
          {
            var _delta3 = seg.key === "v";
            if (seg.data.length) {
              var _y2 = +seg.data[0];
              if (_delta3) {
                _y2 += path$1.y;
              }
              ops = ops.concat(this._doubleLine(path$1.x, path$1.y, path$1.x, _y2, o));
              path$1.setPosition(path$1.x, _y2);
            }
            break;
          }
        case "Z":
        case "z":
          {
            if (path$1.first) {
              ops = ops.concat(this._doubleLine(path$1.x, path$1.y, path$1.first[0], path$1.first[1], o));
              path$1.setPosition(path$1.first[0], path$1.first[1]);
              path$1.first = null;
            }
            break;
          }
        case "C":
        case "c":
          {
            var _delta4 = seg.key === "c";
            if (seg.data.length >= 6) {
              var x1 = +seg.data[0];
              var y1 = +seg.data[1];
              var x2 = +seg.data[2];
              var y2 = +seg.data[3];
              var _x3 = +seg.data[4];
              var _y3 = +seg.data[5];
              if (_delta4) {
                x1 += path$1.x;
                x2 += path$1.x;
                _x3 += path$1.x;
                y1 += path$1.y;
                y2 += path$1.y;
                _y3 += path$1.y;
              }
              var ob = this._bezierTo(x1, y1, x2, y2, _x3, _y3, path$1, o);
              ops = ops.concat(ob);
              path$1.bezierReflectionPoint = [_x3 + (_x3 - x2), _y3 + (_y3 - y2)];
            }
            break;
          }
        case "S":
        case "s":
          {
            var _delta5 = seg.key === "s";
            if (seg.data.length >= 4) {
              var _x4 = +seg.data[0];
              var _y4 = +seg.data[1];
              var _x5 = +seg.data[2];
              var _y5 = +seg.data[3];
              if (_delta5) {
                _x4 += path$1.x;
                _x5 += path$1.x;
                _y4 += path$1.y;
                _y5 += path$1.y;
              }
              var _x6 = _x4;
              var _y6 = _y4;
              var prevKey = prevSeg ? prevSeg.key : "";
              var ref = null;
              if (prevKey == "c" || prevKey == "C" || prevKey == "s" || prevKey == "S") {
                ref = path$1.bezierReflectionPoint;
              }
              if (ref) {
                _x6 = ref[0];
                _y6 = ref[1];
              }
              var _ob = this._bezierTo(_x6, _y6, _x4, _y4, _x5, _y5, path$1, o);
              ops = ops.concat(_ob);
              path$1.bezierReflectionPoint = [_x5 + (_x5 - _x4), _y5 + (_y5 - _y4)];
            }
            break;
          }
        case "Q":
        case "q":
          {
            var _delta6 = seg.key === "q";
            if (seg.data.length >= 4) {
              var _x7 = +seg.data[0];
              var _y7 = +seg.data[1];
              var _x8 = +seg.data[2];
              var _y8 = +seg.data[3];
              if (_delta6) {
                _x7 += path$1.x;
                _x8 += path$1.x;
                _y7 += path$1.y;
                _y8 += path$1.y;
              }
              var offset1 = 1 * (1 + o.roughness * 0.2);
              var offset2 = 1.5 * (1 + o.roughness * 0.22);
              ops.push({
                op: "move",
                data: [path$1.x + this._getOffset(-offset1, offset1, o), path$1.y + this._getOffset(-offset1, offset1, o)]
              });
              var f = [_x8 + this._getOffset(-offset1, offset1, o), _y8 + this._getOffset(-offset1, offset1, o)];
              ops.push({
                op: "qcurveTo",
                data: [_x7 + this._getOffset(-offset1, offset1, o), _y7 + this._getOffset(-offset1, offset1, o), f[0], f[1]]
              });
              ops.push({
                op: "move",
                data: [path$1.x + this._getOffset(-offset2, offset2, o), path$1.y + this._getOffset(-offset2, offset2, o)]
              });
              f = [_x8 + this._getOffset(-offset2, offset2, o), _y8 + this._getOffset(-offset2, offset2, o)];
              ops.push({
                op: "qcurveTo",
                data: [_x7 + this._getOffset(-offset2, offset2, o), _y7 + this._getOffset(-offset2, offset2, o), f[0], f[1]]
              });
              path$1.setPosition(f[0], f[1]);
              path$1.quadReflectionPoint = [_x8 + (_x8 - _x7), _y8 + (_y8 - _y7)];
            }
            break;
          }
        case "T":
        case "t":
          {
            var _delta7 = seg.key === "t";
            if (seg.data.length >= 2) {
              var _x9 = +seg.data[0];
              var _y9 = +seg.data[1];
              if (_delta7) {
                _x9 += path$1.x;
                _y9 += path$1.y;
              }
              var _x10 = _x9;
              var _y10 = _y9;
              var _prevKey = prevSeg ? prevSeg.key : "";
              var ref = null;
              if (_prevKey == "q" || _prevKey == "Q" || _prevKey == "t" || _prevKey == "T") {
                ref = path$1.quadReflectionPoint;
              }
              if (ref) {
                _x10 = ref[0];
                _y10 = ref[1];
              }
              var _offset = 1 * (1 + o.roughness * 0.2);
              var _offset2 = 1.5 * (1 + o.roughness * 0.22);
              ops.push({
                op: "move",
                data: [path$1.x + this._getOffset(-_offset, _offset, o), path$1.y + this._getOffset(-_offset, _offset, o)]
              });
              var _f = [_x9 + this._getOffset(-_offset, _offset, o), _y9 + this._getOffset(-_offset, _offset, o)];
              ops.push({
                op: "qcurveTo",
                data: [_x10 + this._getOffset(-_offset, _offset, o), _y10 + this._getOffset(-_offset, _offset, o), _f[0], _f[1]]
              });
              ops.push({
                op: "move",
                data: [path$1.x + this._getOffset(-_offset2, _offset2, o), path$1.y + this._getOffset(-_offset2, _offset2, o)]
              });
              _f = [_x9 + this._getOffset(-_offset2, _offset2, o), _y9 + this._getOffset(-_offset2, _offset2, o)];
              ops.push({
                op: "qcurveTo",
                data: [_x10 + this._getOffset(-_offset2, _offset2, o), _y10 + this._getOffset(-_offset2, _offset2, o), _f[0], _f[1]]
              });
              path$1.setPosition(_f[0], _f[1]);
              path$1.quadReflectionPoint = [_x9 + (_x9 - _x10), _y9 + (_y9 - _y10)];
            }
            break;
          }
        case "A":
        case "a":
          {
            var _delta8 = seg.key === "a";
            if (seg.data.length >= 7) {
              var rx = +seg.data[0];
              var ry = +seg.data[1];
              var angle = +seg.data[2];
              var largeArcFlag = +seg.data[3];
              var sweepFlag = +seg.data[4];
              var _x11 = +seg.data[5];
              var _y11 = +seg.data[6];
              if (_delta8) {
                _x11 += path$1.x;
                _y11 += path$1.y;
              }
              if (_x11 == path$1.x && _y11 == path$1.y) {
                break;
              }
              if (rx == 0 || ry == 0) {
                ops = ops.concat(this._doubleLine(path$1.x, path$1.y, _x11, _y11, o));
                path$1.setPosition(_x11, _y11);
              } else {
                var _ro = o.maxRandomnessOffset || 0;
                for (var i = 0; i < 1; i++) {
                  var arcConverter = new path.RoughArcConverter([path$1.x, path$1.y], [_x11, _y11], [rx, ry], angle, largeArcFlag ? true : false, sweepFlag ? true : false);
                  var segment = arcConverter.getNextSegment();
                  while (segment) {
                    var _ob2 = this._bezierTo(segment.cp1[0], segment.cp1[1], segment.cp2[0], segment.cp2[1], segment.to[0], segment.to[1], path$1, o);
                    ops = ops.concat(_ob2);
                    segment = arcConverter.getNextSegment();
                  }
                }
              }
            }
            break;
          }
      }
      return ops;
    }
  }, {
    key: "_getOffset",
    value: function _getOffset(min, max, ops) {
      return ops.roughness * (Math.random() * (max - min) + min);
    }
  }, {
    key: "_affine",
    value: function _affine(x, y, cx, cy, sinAnglePrime, cosAnglePrime, R) {
      var A = -cx * cosAnglePrime - cy * sinAnglePrime + cx;
      var B = R * (cx * sinAnglePrime - cy * cosAnglePrime) + cy;
      var C = cosAnglePrime;
      var D = sinAnglePrime;
      var E = -R * sinAnglePrime;
      var F = R * cosAnglePrime;
      return [A + C * x + D * y, B + E * x + F * y];
    }
  }, {
    key: "_doubleLine",
    value: function _doubleLine(x1, y1, x2, y2, o) {
      var o1 = this._line(x1, y1, x2, y2, o, true, false);
      var o2 = this._line(x1, y1, x2, y2, o, true, true);
      return o1.concat(o2);
    }
  }, {
    key: "_line",
    value: function _line(x1, y1, x2, y2, o, move, overlay) {
      var lengthSq = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
      var offset = o.maxRandomnessOffset || 0;
      if (offset * offset * 100 > lengthSq) {
        offset = Math.sqrt(lengthSq) / 10;
      }
      var halfOffset = offset / 2;
      var divergePoint = 0.2 + Math.random() * 0.2;
      var midDispX = o.bowing * o.maxRandomnessOffset * (y2 - y1) / 200;
      var midDispY = o.bowing * o.maxRandomnessOffset * (x1 - x2) / 200;
      midDispX = this._getOffset(-midDispX, midDispX, o);
      midDispY = this._getOffset(-midDispY, midDispY, o);
      var ops = [];
      if (move) {
        if (overlay) {
          ops.push({
            op: "move",
            data: [x1 + this._getOffset(-halfOffset, halfOffset, o), y1 + this._getOffset(-halfOffset, halfOffset, o)]
          });
        } else {
          ops.push({
            op: "move",
            data: [x1 + this._getOffset(-offset, offset, o), y1 + this._getOffset(-offset, offset, o)]
          });
        }
      }
      if (overlay) {
        ops.push({
          op: "bcurveTo",
          data: [midDispX + x1 + (x2 - x1) * divergePoint + this._getOffset(-halfOffset, halfOffset, o), midDispY + y1 + (y2 - y1) * divergePoint + this._getOffset(-halfOffset, halfOffset, o), midDispX + x1 + 2 * (x2 - x1) * divergePoint + this._getOffset(-halfOffset, halfOffset, o), midDispY + y1 + 2 * (y2 - y1) * divergePoint + this._getOffset(-halfOffset, halfOffset, o), x2 + this._getOffset(-halfOffset, halfOffset, o), y2 + this._getOffset(-halfOffset, halfOffset, o)]
        });
      } else {
        ops.push({
          op: "bcurveTo",
          data: [midDispX + x1 + (x2 - x1) * divergePoint + this._getOffset(-offset, offset, o), midDispY + y1 + (y2 - y1) * divergePoint + this._getOffset(-offset, offset, o), midDispX + x1 + 2 * (x2 - x1) * divergePoint + this._getOffset(-offset, offset, o), midDispY + y1 + 2 * (y2 - y1) * divergePoint + this._getOffset(-offset, offset, o), x2 + this._getOffset(-offset, offset, o), y2 + this._getOffset(-offset, offset, o)]
        });
      }
      return ops;
    }
  }, {
    key: "_curve",
    value: function _curve(points, closePoint, o) {
      var len = points.length;
      var ops = [];
      if (len > 3) {
        var b = [];
        var s = 1 - o.curveTightness;
        ops.push({ op: "move", data: [points[1][0], points[1][1]] });
        for (var i = 1; i + 2 < len; i++) {
          var cachedVertArray = points[i];
          b[0] = [cachedVertArray[0], cachedVertArray[1]];
          b[1] = [cachedVertArray[0] + (s * points[i + 1][0] - s * points[i - 1][0]) / 6, cachedVertArray[1] + (s * points[i + 1][1] - s * points[i - 1][1]) / 6];
          b[2] = [points[i + 1][0] + (s * points[i][0] - s * points[i + 2][0]) / 6, points[i + 1][1] + (s * points[i][1] - s * points[i + 2][1]) / 6];
          b[3] = [points[i + 1][0], points[i + 1][1]];
          ops.push({
            op: "bcurveTo",
            data: [b[1][0], b[1][1], b[2][0], b[2][1], b[3][0], b[3][1]]
          });
        }
        if (closePoint && closePoint.length === 2) {
          var ro = o.maxRandomnessOffset;
          // TODO: more roughness here?
          ops.push({
            ops: "lineTo",
            data: [closePoint[0] + this._getOffset(-ro, ro, o), closePoint[1] + +this._getOffset(-ro, ro, o)]
          });
        }
      } else if (len === 3) {
        ops.push({ op: "move", data: [points[1][0], points[1][1]] });
        ops.push({
          op: "bcurveTo",
          data: [points[1][0], points[1][1], points[2][0], points[2][1], points[2][0], points[2][1]]
        });
      } else if (len === 2) {
        ops = ops.concat(this._doubleLine(points[0][0], points[0][1], points[1][0], points[1][1], o));
      }
      return ops;
    }
  }, {
    key: "_ellipse",
    value: function _ellipse(increment, cx, cy, rx, ry, offset, overlap, o) {
      var radOffset = this._getOffset(-0.5, 0.5, o) - Math.PI / 2;
      var points = [];
      points.push([this._getOffset(-offset, offset, o) + cx + 0.9 * rx * Math.cos(radOffset - increment), this._getOffset(-offset, offset, o) + cy + 0.9 * ry * Math.sin(radOffset - increment)]);
      for (var angle = radOffset; angle < Math.PI * 2 + radOffset - 0.01; angle = angle + increment) {
        points.push([this._getOffset(-offset, offset, o) + cx + rx * Math.cos(angle), this._getOffset(-offset, offset, o) + cy + ry * Math.sin(angle)]);
      }
      points.push([this._getOffset(-offset, offset, o) + cx + rx * Math.cos(radOffset + Math.PI * 2 + overlap * 0.5), this._getOffset(-offset, offset, o) + cy + ry * Math.sin(radOffset + Math.PI * 2 + overlap * 0.5)]);
      points.push([this._getOffset(-offset, offset, o) + cx + 0.98 * rx * Math.cos(radOffset + overlap), this._getOffset(-offset, offset, o) + cy + 0.98 * ry * Math.sin(radOffset + overlap)]);
      points.push([this._getOffset(-offset, offset, o) + cx + 0.9 * rx * Math.cos(radOffset + overlap * 0.5), this._getOffset(-offset, offset, o) + cy + 0.9 * ry * Math.sin(radOffset + overlap * 0.5)]);
      return this._curve(points, null, o);
    }
  }, {
    key: "_curveWithOffset",
    value: function _curveWithOffset(points, offset, o) {
      var ps = [];
      ps.push([points[0][0] + this._getOffset(-offset, offset, o), points[0][1] + this._getOffset(-offset, offset, o)]);
      ps.push([points[0][0] + this._getOffset(-offset, offset, o), points[0][1] + this._getOffset(-offset, offset, o)]);
      for (var i = 1; i < points.length; i++) {
        ps.push([points[i][0] + this._getOffset(-offset, offset, o), points[i][1] + this._getOffset(-offset, offset, o)]);
        if (i === points.length - 1) {
          ps.push([points[i][0] + this._getOffset(-offset, offset, o), points[i][1] + this._getOffset(-offset, offset, o)]);
        }
      }
      return this._curve(ps, null, o);
    }
  }, {
    key: "_arc",
    value: function _arc(increment, cx, cy, rx, ry, strt, stp, offset, o) {
      var radOffset = strt + this._getOffset(-0.1, 0.1, o);
      var points = [];
      points.push([this._getOffset(-offset, offset, o) + cx + 0.9 * rx * Math.cos(radOffset - increment), this._getOffset(-offset, offset, o) + cy + 0.9 * ry * Math.sin(radOffset - increment)]);
      for (var angle = radOffset; angle <= stp; angle = angle + increment) {
        points.push([this._getOffset(-offset, offset, o) + cx + rx * Math.cos(angle), this._getOffset(-offset, offset, o) + cy + ry * Math.sin(angle)]);
      }
      points.push([cx + rx * Math.cos(stp), cy + ry * Math.sin(stp)]);
      points.push([cx + rx * Math.cos(stp), cy + ry * Math.sin(stp)]);
      return this._curve(points, null, o);
    }
  }, {
    key: "_getIntersectingLines",
    value: function _getIntersectingLines(lineCoords, xCoords, yCoords) {
      var intersections = [];
      var s1 = new segment.RoughSegment(lineCoords[0], lineCoords[1], lineCoords[2], lineCoords[3]);
      for (var i = 0; i < xCoords.length; i++) {
        var s2 = new segment.RoughSegment(xCoords[i], yCoords[i], xCoords[(i + 1) % xCoords.length], yCoords[(i + 1) % xCoords.length]);
        if (s1.compare(s2) == (0, segment.RoughSegmentRelation)().INTERSECTS) {
          intersections.push([s1.xi, s1.yi]);
        }
      }
      return intersections;
    }
  }]);

  return RoughRenderer;
}();
});

unwrapExports(renderer);
var renderer_1 = renderer.RoughRenderer;

var generator = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoughGeneratorAsync = exports.RoughGenerator = undefined;



var _regenerator2 = _interopRequireDefault(regenerator);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

self._roughScript = self.document && self.document.currentScript && self.document.currentScript.src;

var RoughGenerator = exports.RoughGenerator = function () {
  function RoughGenerator(config, canvas) {
    _classCallCheck(this, RoughGenerator);

    this.config = config || {};
    this.canvas = canvas;
    this.defaultOptions = {
      maxRandomnessOffset: 2,
      roughness: 1,
      bowing: 1,
      stroke: '#000',
      strokeWidth: 1,
      curveTightness: 0,
      curveStepCount: 9,
      fill: null,
      fillStyle: 'hachure',
      fillWeight: -1,
      hachureAngle: -41,
      hachureGap: -1
    };
    if (this.config.options) {
      this.defaultOptions = this._options(this.config.options);
    }
  }

  _createClass(RoughGenerator, [{
    key: '_options',
    value: function _options(options) {
      return options ? Object.assign({}, this.defaultOptions, options) : this.defaultOptions;
    }
  }, {
    key: '_drawable',
    value: function _drawable(shape, sets, options) {
      return { shape: shape, sets: sets || [], options: options || this.defaultOptions };
    }
  }, {
    key: 'line',
    value: function line(x1, y1, x2, y2, options) {
      var o = this._options(options);
      return this._drawable('line', [this.lib.line(x1, y1, x2, y2, o)], o);
    }
  }, {
    key: 'rectangle',
    value: function rectangle(x, y, width, height, options) {
      var o = this._options(options);
      var paths = [];
      if (o.fill) {
        var xc = [x, x + width, x + width, x];
        var yc = [y, y, y + height, y + height];
        if (o.fillStyle === 'solid') {
          paths.push(this.lib.solidFillShape(xc, yc, o));
        } else {
          paths.push(this.lib.hachureFillShape(xc, yc, o));
        }
      }
      paths.push(this.lib.rectangle(x, y, width, height, o));
      return this._drawable('rectangle', paths, o);
    }
  }, {
    key: 'ellipse',
    value: function ellipse(x, y, width, height, options) {
      var o = this._options(options);
      var paths = [];
      if (o.fill) {
        if (o.fillStyle === 'solid') {
          var shape = this.lib.ellipse(x, y, width, height, o);
          shape.type = 'fillPath';
          paths.push(shape);
        } else {
          paths.push(this.lib.hachureFillEllipse(x, y, width, height, o));
        }
      }
      paths.push(this.lib.ellipse(x, y, width, height, o));
      return this._drawable('ellipse', paths, o);
    }
  }, {
    key: 'circle',
    value: function circle(x, y, diameter, options) {
      var ret = this.ellipse(x, y, diameter, diameter, options);
      ret.shape = 'circle';
      return ret;
    }
  }, {
    key: 'linearPath',
    value: function linearPath(points, options) {
      var o = this._options(options);
      return this._drawable('linearPath', [this.lib.linearPath(points, false, o)], o);
    }
  }, {
    key: 'polygon',
    value: function polygon(points, options) {
      var o = this._options(options);
      var paths = [];
      if (o.fill) {
        var xc = [],
            yc = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = points[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var p = _step.value;

            xc.push(p[0]);
            yc.push(p[1]);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (o.fillStyle === 'solid') {
          paths.push(this.lib.solidFillShape(xc, yc, o));
        } else {
          paths.push(this.lib.hachureFillShape(xc, yc, o));
        }
      }
      paths.push(this.lib.linearPath(points, true, o));
      return this._drawable('polygon', paths, o);
    }
  }, {
    key: 'arc',
    value: function arc(x, y, width, height, start, stop, closed, options) {
      var o = this._options(options);
      var paths = [];
      if (closed && o.fill) {
        if (o.fillStyle === 'solid') {
          var shape = this.lib.arc(x, y, width, height, start, stop, true, false, o);
          shape.type = 'fillPath';
          paths.push(shape);
        } else {
          paths.push(this.lib.hachureFillArc(x, y, width, height, start, stop, o));
        }
      }
      paths.push(this.lib.arc(x, y, width, height, start, stop, closed, true, o));
      return this._drawable('arc', paths, o);
    }
  }, {
    key: 'curve',
    value: function curve(points, options) {
      var o = this._options(options);
      return this._drawable('curve', [this.lib.curve(points, o)], o);
    }
  }, {
    key: 'path',
    value: function path(d, options) {
      var o = this._options(options);
      var paths = [];
      if (!d) {
        return this._drawable('path', paths, o);
      }
      if (o.fill) {
        if (o.fillStyle === 'solid') {
          var shape = { type: 'path2Dfill', path: d };
          paths.push(shape);
        } else {
          var size = this._computePathSize(d);
          var xc = [0, size[0], size[0], 0];
          var yc = [0, 0, size[1], size[1]];
          var _shape = this.lib.hachureFillShape(xc, yc, o);
          _shape.type = 'path2Dpattern';
          _shape.size = size;
          _shape.path = d;
          paths.push(_shape);
        }
      }
      paths.push(this.lib.svgPath(d, o));
      return this._drawable('path', paths, o);
    }
  }, {
    key: 'toPaths',
    value: function toPaths(drawable) {
      var sets = drawable.sets || [];
      var o = drawable.options || this.defaultOptions;
      var paths = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = sets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var drawing = _step2.value;

          var path = null;
          switch (drawing.type) {
            case 'path':
              path = {
                d: this.opsToPath(drawing),
                stroke: o.stroke,
                strokeWidth: o.strokeWidth,
                fill: 'none'
              };
              break;
            case 'fillPath':
              path = {
                d: this.opsToPath(drawing),
                stroke: 'none',
                strokeWidth: 0,
                fill: o.fill
              };
              break;
            case 'fillSketch':
              path = this._fillSketch(drawing, o);
              break;
            case 'path2Dfill':
              path = {
                d: drawing.path,
                stroke: 'none',
                strokeWidth: 0,
                fill: o.fill
              };
              break;
            case 'path2Dpattern':
              {
                var size = drawing.size;
                var pattern = {
                  x: 0, y: 0, width: 1, height: 1,
                  viewBox: '0 0 ' + Math.round(size[0]) + ' ' + Math.round(size[1]),
                  patternUnits: 'objectBoundingBox',
                  path: this._fillSketch(drawing, o)
                };
                path = {
                  d: drawing.path,
                  stroke: 'none',
                  strokeWidth: 0,
                  pattern: pattern
                };
                break;
              }
          }
          if (path) {
            paths.push(path);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return paths;
    }
  }, {
    key: '_fillSketch',
    value: function _fillSketch(drawing, o) {
      var fweight = o.fillWeight;
      if (fweight < 0) {
        fweight = o.strokeWidth / 2;
      }
      return {
        d: this.opsToPath(drawing),
        stroke: o.fill,
        strokeWidth: fweight,
        fill: 'none'
      };
    }
  }, {
    key: 'opsToPath',
    value: function opsToPath(drawing) {
      var path = '';
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = drawing.ops[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var item = _step3.value;

          var data = item.data;
          switch (item.op) {
            case 'move':
              path += 'M' + data[0] + ' ' + data[1] + ' ';
              break;
            case 'bcurveTo':
              path += 'C' + data[0] + ' ' + data[1] + ', ' + data[2] + ' ' + data[3] + ', ' + data[4] + ' ' + data[5] + ' ';
              break;
            case 'qcurveTo':
              path += 'Q' + data[0] + ' ' + data[1] + ', ' + data[2] + ' ' + data[3] + ' ';
              break;
            case 'lineTo':
              path += 'L' + data[0] + ' ' + data[1] + ' ';
              break;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return path.trim();
    }
  }, {
    key: '_computePathSize',
    value: function _computePathSize(d) {
      var size = [0, 0];
      if (self.document) {
        try {
          var ns = "http://www.w3.org/2000/svg";
          var svg = self.document.createElementNS(ns, "svg");
          svg.setAttribute("width", "0");
          svg.setAttribute("height", "0");
          var pathNode = self.document.createElementNS(ns, "path");
          pathNode.setAttribute('d', d);
          svg.appendChild(pathNode);
          self.document.body.appendChild(svg);
          var bb = pathNode.getBBox();
          if (bb) {
            size[0] = bb.width || 0;
            size[1] = bb.height || 0;
          }
          self.document.body.removeChild(svg);
        } catch (err) {}
      }
      var canvasSize = this._canvasSize();
      if (!(size[0] * size[1])) {
        size = canvasSize;
      }
      size[0] = Math.min(size[0], canvasSize[0]);
      size[1] = Math.min(size[1], canvasSize[1]);
      return size;
    }
  }, {
    key: '_canvasSize',
    value: function _canvasSize() {
      var val = function val(w) {
        if (w) {
          if ((typeof w === 'undefined' ? 'undefined' : _typeof(w)) === 'object') {
            if (w.baseVal && w.baseVal.value) {
              return w.baseVal.value;
            }
          }
        }
        return w || 100;
      };
      return this.canvas ? [val(this.canvas.width), val(this.canvas.height)] : [100, 100];
    }
  }, {
    key: 'lib',
    get: function get() {
      if (!this._renderer) {
        if (self && self.workly && this.config.async && !this.config.noWorker) {
          var worklySource = this.config.worklyURL || 'https://cdn.jsdelivr.net/gh/pshihn/workly/dist/workly.min.js';
          var rendererSource = this.config.roughURL || self._roughScript;
          if (rendererSource && worklySource) {
            var code = 'importScripts(\'' + worklySource + '\', \'' + rendererSource + '\');\nworkly.expose(self.rough.createRenderer());';
            var ourl = URL.createObjectURL(new Blob([code]));
            this._renderer = workly.proxy(ourl);
          } else {
            this._renderer = new renderer.RoughRenderer();
          }
        } else {
          this._renderer = new renderer.RoughRenderer();
        }
      }
      return this._renderer;
    }
  }]);

  return RoughGenerator;
}();

var RoughGeneratorAsync = exports.RoughGeneratorAsync = function (_RoughGenerator) {
  _inherits(RoughGeneratorAsync, _RoughGenerator);

  function RoughGeneratorAsync() {
    _classCallCheck(this, RoughGeneratorAsync);

    return _possibleConstructorReturn(this, (RoughGeneratorAsync.__proto__ || Object.getPrototypeOf(RoughGeneratorAsync)).apply(this, arguments));
  }

  _createClass(RoughGeneratorAsync, [{
    key: 'line',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(x1, y1, x2, y2, options) {
        var o;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                o = this._options(options);
                _context.t0 = this;
                _context.next = 4;
                return this.lib.line(x1, y1, x2, y2, o);

              case 4:
                _context.t1 = _context.sent;
                _context.t2 = [_context.t1];
                _context.t3 = o;
                return _context.abrupt('return', _context.t0._drawable.call(_context.t0, 'line', _context.t2, _context.t3));

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function line(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      }

      return line;
    }()
  }, {
    key: 'rectangle',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(x, y, width, height, options) {
        var o, paths, xc, yc;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                o = this._options(options);
                paths = [];

                if (!o.fill) {
                  _context2.next = 18;
                  break;
                }

                xc = [x, x + width, x + width, x];
                yc = [y, y, y + height, y + height];

                if (!(o.fillStyle === 'solid')) {
                  _context2.next = 13;
                  break;
                }

                _context2.t0 = paths;
                _context2.next = 9;
                return this.lib.solidFillShape(xc, yc, o);

              case 9:
                _context2.t1 = _context2.sent;

                _context2.t0.push.call(_context2.t0, _context2.t1);

                _context2.next = 18;
                break;

              case 13:
                _context2.t2 = paths;
                _context2.next = 16;
                return this.lib.hachureFillShape(xc, yc, o);

              case 16:
                _context2.t3 = _context2.sent;

                _context2.t2.push.call(_context2.t2, _context2.t3);

              case 18:
                _context2.t4 = paths;
                _context2.next = 21;
                return this.lib.rectangle(x, y, width, height, o);

              case 21:
                _context2.t5 = _context2.sent;

                _context2.t4.push.call(_context2.t4, _context2.t5);

                return _context2.abrupt('return', this._drawable('rectangle', paths, o));

              case 24:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function rectangle(_x6, _x7, _x8, _x9, _x10) {
        return _ref2.apply(this, arguments);
      }

      return rectangle;
    }()
  }, {
    key: 'ellipse',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(x, y, width, height, options) {
        var o, paths, shape;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                o = this._options(options);
                paths = [];

                if (!o.fill) {
                  _context3.next = 16;
                  break;
                }

                if (!(o.fillStyle === 'solid')) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 6;
                return this.lib.ellipse(x, y, width, height, o);

              case 6:
                shape = _context3.sent;

                shape.type = 'fillPath';
                paths.push(shape);
                _context3.next = 16;
                break;

              case 11:
                _context3.t0 = paths;
                _context3.next = 14;
                return this.lib.hachureFillEllipse(x, y, width, height, o);

              case 14:
                _context3.t1 = _context3.sent;

                _context3.t0.push.call(_context3.t0, _context3.t1);

              case 16:
                _context3.t2 = paths;
                _context3.next = 19;
                return this.lib.ellipse(x, y, width, height, o);

              case 19:
                _context3.t3 = _context3.sent;

                _context3.t2.push.call(_context3.t2, _context3.t3);

                return _context3.abrupt('return', this._drawable('ellipse', paths, o));

              case 22:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function ellipse(_x11, _x12, _x13, _x14, _x15) {
        return _ref3.apply(this, arguments);
      }

      return ellipse;
    }()
  }, {
    key: 'circle',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(x, y, diameter, options) {
        var ret;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.ellipse(x, y, diameter, diameter, options);

              case 2:
                ret = _context4.sent;

                ret.shape = 'circle';
                return _context4.abrupt('return', ret);

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function circle(_x16, _x17, _x18, _x19) {
        return _ref4.apply(this, arguments);
      }

      return circle;
    }()
  }, {
    key: 'linearPath',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5(points, options) {
        var o;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                o = this._options(options);
                _context5.t0 = this;
                _context5.next = 4;
                return this.lib.linearPath(points, false, o);

              case 4:
                _context5.t1 = _context5.sent;
                _context5.t2 = [_context5.t1];
                _context5.t3 = o;
                return _context5.abrupt('return', _context5.t0._drawable.call(_context5.t0, 'linearPath', _context5.t2, _context5.t3));

              case 8:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function linearPath(_x20, _x21) {
        return _ref5.apply(this, arguments);
      }

      return linearPath;
    }()
  }, {
    key: 'polygon',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee6(points, options) {
        var o, paths, xc, yc, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, p;

        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                o = this._options(options);
                paths = [];

                if (!o.fill) {
                  _context6.next = 36;
                  break;
                }

                xc = [], yc = [];
                _iteratorNormalCompletion4 = true;
                _didIteratorError4 = false;
                _iteratorError4 = undefined;
                _context6.prev = 7;

                for (_iterator4 = points[Symbol.iterator](); !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  p = _step4.value;

                  xc.push(p[0]);
                  yc.push(p[1]);
                }
                _context6.next = 15;
                break;

              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6['catch'](7);
                _didIteratorError4 = true;
                _iteratorError4 = _context6.t0;

              case 15:
                _context6.prev = 15;
                _context6.prev = 16;

                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                  _iterator4.return();
                }

              case 18:
                _context6.prev = 18;

                if (!_didIteratorError4) {
                  _context6.next = 21;
                  break;
                }

                throw _iteratorError4;

              case 21:
                return _context6.finish(18);

              case 22:
                return _context6.finish(15);

              case 23:
                if (!(o.fillStyle === 'solid')) {
                  _context6.next = 31;
                  break;
                }

                _context6.t1 = paths;
                _context6.next = 27;
                return this.lib.solidFillShape(xc, yc, o);

              case 27:
                _context6.t2 = _context6.sent;

                _context6.t1.push.call(_context6.t1, _context6.t2);

                _context6.next = 36;
                break;

              case 31:
                _context6.t3 = paths;
                _context6.next = 34;
                return this.lib.hachureFillShape(xc, yc, o);

              case 34:
                _context6.t4 = _context6.sent;

                _context6.t3.push.call(_context6.t3, _context6.t4);

              case 36:
                _context6.t5 = paths;
                _context6.next = 39;
                return this.lib.linearPath(points, true, o);

              case 39:
                _context6.t6 = _context6.sent;

                _context6.t5.push.call(_context6.t5, _context6.t6);

                return _context6.abrupt('return', this._drawable('polygon', paths, o));

              case 42:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[7, 11, 15, 23], [16,, 18, 22]]);
      }));

      function polygon(_x22, _x23) {
        return _ref6.apply(this, arguments);
      }

      return polygon;
    }()
  }, {
    key: 'arc',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee7(x, y, width, height, start, stop, closed, options) {
        var o, paths, shape;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                o = this._options(options);
                paths = [];

                if (!(closed && o.fill)) {
                  _context7.next = 16;
                  break;
                }

                if (!(o.fillStyle === 'solid')) {
                  _context7.next = 11;
                  break;
                }

                _context7.next = 6;
                return this.lib.arc(x, y, width, height, start, stop, true, false, o);

              case 6:
                shape = _context7.sent;

                shape.type = 'fillPath';
                paths.push(shape);
                _context7.next = 16;
                break;

              case 11:
                _context7.t0 = paths;
                _context7.next = 14;
                return this.lib.hachureFillArc(x, y, width, height, start, stop, o);

              case 14:
                _context7.t1 = _context7.sent;

                _context7.t0.push.call(_context7.t0, _context7.t1);

              case 16:
                _context7.t2 = paths;
                _context7.next = 19;
                return this.lib.arc(x, y, width, height, start, stop, closed, true, o);

              case 19:
                _context7.t3 = _context7.sent;

                _context7.t2.push.call(_context7.t2, _context7.t3);

                return _context7.abrupt('return', this._drawable('arc', paths, o));

              case 22:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function arc(_x24, _x25, _x26, _x27, _x28, _x29, _x30, _x31) {
        return _ref7.apply(this, arguments);
      }

      return arc;
    }()
  }, {
    key: 'curve',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee8(points, options) {
        var o;
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                o = this._options(options);
                _context8.t0 = this;
                _context8.next = 4;
                return this.lib.curve(points, o);

              case 4:
                _context8.t1 = _context8.sent;
                _context8.t2 = [_context8.t1];
                _context8.t3 = o;
                return _context8.abrupt('return', _context8.t0._drawable.call(_context8.t0, 'curve', _context8.t2, _context8.t3));

              case 8:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function curve(_x32, _x33) {
        return _ref8.apply(this, arguments);
      }

      return curve;
    }()
  }, {
    key: 'path',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee9(d, options) {
        var o, paths, shape, size, xc, yc, _shape2;

        return _regenerator2.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                o = this._options(options);
                paths = [];

                if (d) {
                  _context9.next = 4;
                  break;
                }

                return _context9.abrupt('return', this._drawable('path', paths, o));

              case 4:
                if (!o.fill) {
                  _context9.next = 20;
                  break;
                }

                if (!(o.fillStyle === 'solid')) {
                  _context9.next = 10;
                  break;
                }

                shape = { type: 'path2Dfill', path: d };

                paths.push(shape);
                _context9.next = 20;
                break;

              case 10:
                size = this._computePathSize(d);
                xc = [0, size[0], size[0], 0];
                yc = [0, 0, size[1], size[1]];
                _context9.next = 15;
                return this.lib.hachureFillShape(xc, yc, o);

              case 15:
                _shape2 = _context9.sent;

                _shape2.type = 'path2Dpattern';
                _shape2.size = size;
                _shape2.path = d;
                paths.push(_shape2);

              case 20:
                _context9.t0 = paths;
                _context9.next = 23;
                return this.lib.svgPath(d, o);

              case 23:
                _context9.t1 = _context9.sent;

                _context9.t0.push.call(_context9.t0, _context9.t1);

                return _context9.abrupt('return', this._drawable('path', paths, o));

              case 26:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function path(_x34, _x35) {
        return _ref9.apply(this, arguments);
      }

      return path;
    }()
  }]);

  return RoughGeneratorAsync;
}(RoughGenerator);
});

unwrapExports(generator);
var generator_1 = generator.RoughGeneratorAsync;
var generator_2 = generator.RoughGenerator;

var canvas = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoughCanvasAsync = exports.RoughCanvas = undefined;



var _regenerator2 = _interopRequireDefault(regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RoughCanvas = exports.RoughCanvas = function () {
  function RoughCanvas(canvas, config) {
    _classCallCheck(this, RoughCanvas);

    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this._init(config);
  }

  _createClass(RoughCanvas, [{
    key: '_init',
    value: function _init(config) {
      this.gen = new generator.RoughGenerator(config, this.canvas);
    }
  }, {
    key: 'line',
    value: function line(x1, y1, x2, y2, options) {
      var d = this.gen.line(x1, y1, x2, y2, options);
      this.draw(d);
      return d;
    }
  }, {
    key: 'rectangle',
    value: function rectangle(x, y, width, height, options) {
      var d = this.gen.rectangle(x, y, width, height, options);
      this.draw(d);
      return d;
    }
  }, {
    key: 'ellipse',
    value: function ellipse(x, y, width, height, options) {
      var d = this.gen.ellipse(x, y, width, height, options);
      this.draw(d);
      return d;
    }
  }, {
    key: 'circle',
    value: function circle(x, y, diameter, options) {
      var d = this.gen.circle(x, y, diameter, options);
      this.draw(d);
      return d;
    }
  }, {
    key: 'linearPath',
    value: function linearPath(points, options) {
      var d = this.gen.linearPath(points, options);
      this.draw(d);
      return d;
    }
  }, {
    key: 'polygon',
    value: function polygon(points, options) {
      var d = this.gen.polygon(points, options);
      this.draw(d);
      return d;
    }
  }, {
    key: 'arc',
    value: function arc(x, y, width, height, start, stop, closed, options) {
      var d = this.gen.arc(x, y, width, height, start, stop, closed, options);
      this.draw(d);
      return d;
    }
  }, {
    key: 'curve',
    value: function curve(points, options) {
      var d = this.gen.curve(points, options);
      this.draw(d);
      return d;
    }
  }, {
    key: 'path',
    value: function path(d, options) {
      var drawing = this.gen.path(d, options);
      this.draw(drawing);
      return drawing;
    }
  }, {
    key: 'draw',
    value: function draw(drawable) {
      var sets = drawable.sets || [];
      var o = drawable.options || this.gen.defaultOptions;
      var ctx = this.ctx;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = sets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var drawing = _step.value;

          switch (drawing.type) {
            case 'path':
              ctx.save();
              ctx.strokeStyle = o.stroke;
              ctx.lineWidth = o.strokeWidth;
              this._drawToContext(ctx, drawing);
              ctx.restore();
              break;
            case 'fillPath':
              ctx.save();
              ctx.fillStyle = o.fill;
              this._drawToContext(ctx, drawing, o);
              ctx.restore();
              break;
            case 'fillSketch':
              this._fillSketch(ctx, drawing, o);
              break;
            case 'path2Dfill':
              {
                this.ctx.save();
                this.ctx.fillStyle = o.fill;
                var p2d = new Path2D(drawing.path);
                this.ctx.fill(p2d);
                this.ctx.restore();
                break;
              }
            case 'path2Dpattern':
              {
                var size = drawing.size;
                var hcanvas = document.createElement('canvas');
                var hcontext = hcanvas.getContext("2d");
                var bbox = this._computeBBox(drawing.path);
                if (bbox && (bbox.width || bbox.height)) {
                  hcanvas.width = this.canvas.width;
                  hcanvas.height = this.canvas.height;
                  hcontext.translate(bbox.x || 0, bbox.y || 0);
                } else {
                  hcanvas.width = size[0];
                  hcanvas.height = size[1];
                }
                this._fillSketch(hcontext, drawing, o);
                this.ctx.save();
                this.ctx.fillStyle = this.ctx.createPattern(hcanvas, 'repeat');
                var _p2d = new Path2D(drawing.path);
                this.ctx.fill(_p2d);
                this.ctx.restore();
                break;
              }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: '_computeBBox',
    value: function _computeBBox(d) {
      if (self.document) {
        try {
          var ns = "http://www.w3.org/2000/svg";
          var svg = self.document.createElementNS(ns, "svg");
          svg.setAttribute("width", "0");
          svg.setAttribute("height", "0");
          var pathNode = self.document.createElementNS(ns, "path");
          pathNode.setAttribute('d', d);
          svg.appendChild(pathNode);
          self.document.body.appendChild(svg);
          var bbox = pathNode.getBBox();
          self.document.body.removeChild(svg);
          return bbox;
        } catch (err) {}
      }
      return null;
    }
  }, {
    key: '_fillSketch',
    value: function _fillSketch(ctx, drawing, o) {
      var fweight = o.fillWeight;
      if (fweight < 0) {
        fweight = o.strokeWidth / 2;
      }
      ctx.save();
      ctx.strokeStyle = o.fill;
      ctx.lineWidth = fweight;
      this._drawToContext(ctx, drawing);
      ctx.restore();
    }
  }, {
    key: '_drawToContext',
    value: function _drawToContext(ctx, drawing) {
      ctx.beginPath();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = drawing.ops[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          var data = item.data;
          switch (item.op) {
            case 'move':
              ctx.moveTo(data[0], data[1]);
              break;
            case 'bcurveTo':
              ctx.bezierCurveTo(data[0], data[1], data[2], data[3], data[4], data[5]);
              break;
            case 'qcurveTo':
              ctx.quadraticCurveTo(data[0], data[1], data[2], data[3]);
              break;
            case 'lineTo':
              ctx.lineTo(data[0], data[1]);
              break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (drawing.type === 'fillPath') {
        ctx.fill();
      } else {
        ctx.stroke();
      }
    }
  }, {
    key: 'generator',
    get: function get() {
      return this.gen;
    }
  }], [{
    key: 'createRenderer',
    value: function createRenderer() {
      return new renderer.RoughRenderer();
    }
  }]);

  return RoughCanvas;
}();

var RoughCanvasAsync = exports.RoughCanvasAsync = function (_RoughCanvas) {
  _inherits(RoughCanvasAsync, _RoughCanvas);

  function RoughCanvasAsync() {
    _classCallCheck(this, RoughCanvasAsync);

    return _possibleConstructorReturn(this, (RoughCanvasAsync.__proto__ || Object.getPrototypeOf(RoughCanvasAsync)).apply(this, arguments));
  }

  _createClass(RoughCanvasAsync, [{
    key: '_init',
    value: function _init(config) {
      this.gen = new generator.RoughGeneratorAsync(config, this.canvas);
    }
  }, {
    key: 'line',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(x1, y1, x2, y2, options) {
        var d;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.gen.line(x1, y1, x2, y2, options);

              case 2:
                d = _context.sent;

                this.draw(d);
                return _context.abrupt('return', d);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function line(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      }

      return line;
    }()
  }, {
    key: 'rectangle',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(x, y, width, height, options) {
        var d;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.gen.rectangle(x, y, width, height, options);

              case 2:
                d = _context2.sent;

                this.draw(d);
                return _context2.abrupt('return', d);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function rectangle(_x6, _x7, _x8, _x9, _x10) {
        return _ref2.apply(this, arguments);
      }

      return rectangle;
    }()
  }, {
    key: 'ellipse',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(x, y, width, height, options) {
        var d;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.gen.ellipse(x, y, width, height, options);

              case 2:
                d = _context3.sent;

                this.draw(d);
                return _context3.abrupt('return', d);

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function ellipse(_x11, _x12, _x13, _x14, _x15) {
        return _ref3.apply(this, arguments);
      }

      return ellipse;
    }()
  }, {
    key: 'circle',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(x, y, diameter, options) {
        var d;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.gen.circle(x, y, diameter, options);

              case 2:
                d = _context4.sent;

                this.draw(d);
                return _context4.abrupt('return', d);

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function circle(_x16, _x17, _x18, _x19) {
        return _ref4.apply(this, arguments);
      }

      return circle;
    }()
  }, {
    key: 'linearPath',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5(points, options) {
        var d;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.gen.linearPath(points, options);

              case 2:
                d = _context5.sent;

                this.draw(d);
                return _context5.abrupt('return', d);

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function linearPath(_x20, _x21) {
        return _ref5.apply(this, arguments);
      }

      return linearPath;
    }()
  }, {
    key: 'polygon',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee6(points, options) {
        var d;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.gen.polygon(points, options);

              case 2:
                d = _context6.sent;

                this.draw(d);
                return _context6.abrupt('return', d);

              case 5:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function polygon(_x22, _x23) {
        return _ref6.apply(this, arguments);
      }

      return polygon;
    }()
  }, {
    key: 'arc',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee7(x, y, width, height, start, stop, closed, options) {
        var d;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.gen.arc(x, y, width, height, start, stop, closed, options);

              case 2:
                d = _context7.sent;

                this.draw(d);
                return _context7.abrupt('return', d);

              case 5:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function arc(_x24, _x25, _x26, _x27, _x28, _x29, _x30, _x31) {
        return _ref7.apply(this, arguments);
      }

      return arc;
    }()
  }, {
    key: 'curve',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee8(points, options) {
        var d;
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.gen.curve(points, options);

              case 2:
                d = _context8.sent;

                this.draw(d);
                return _context8.abrupt('return', d);

              case 5:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function curve(_x32, _x33) {
        return _ref8.apply(this, arguments);
      }

      return curve;
    }()
  }, {
    key: 'path',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee9(d, options) {
        var drawing;
        return _regenerator2.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.gen.path(d, options);

              case 2:
                drawing = _context9.sent;

                this.draw(drawing);
                return _context9.abrupt('return', drawing);

              case 5:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function path(_x34, _x35) {
        return _ref9.apply(this, arguments);
      }

      return path;
    }()
  }]);

  return RoughCanvasAsync;
}(RoughCanvas);
});

unwrapExports(canvas);
var canvas_1 = canvas.RoughCanvasAsync;
var canvas_2 = canvas.RoughCanvas;

const chuckCloseCanvasTransform = (canvas, context, size, pixelSize = 10) => {
  const [baseWidth, baseHeight] = size;
  const height = baseHeight + (baseHeight % pixelSize === 0 ? 0 : pixelSize - baseHeight % pixelSize);
  const width = baseWidth + (baseWidth % pixelSize === 0 ? 0 : pixelSize - baseWidth % pixelSize);
  const rgbStep = 4 * pixelSize;
  const imageData = context.getImageData(0, 0, width, height);
  const rgbaArray = [];
  const imageArray = imageData.data;
  const rgbWidth = width * 4;
  const halfPixelSize = pixelSize / 2;

  for (let i = 0; i < imageArray.length; i += rgbStep) {
    let pixelPoint = {};

    if (pixelSize === 1) {
      pixelPoint = {
        r: imageArray[i],
        g: imageArray[i + 1],
        b: imageArray[i + 2],
        a: imageArray[i + 3],
        x: i / 4 % width,
        y: Math.floor(i / 4 / width)
      };
    } else {
      const rgbHash = {};
      let totalHash = 0;

      for (let p = 0; p < pixelSize * 4; p += pixelSize * 4) {
        for (let q = 0; q < pixelSize * rgbWidth; q += rgbWidth) {
          if (imageArray[p + i + q + 3] !== -1) {
            const hashVal = `rgba(${imageArray[p + i + q]},${imageArray[p + i + q + 1]},${imageArray[p + i + q + 2]},${imageArray[p + i + q + 3]})`;
            rgbHash[hashVal] = rgbHash[hashVal] ? rgbHash[hashVal] + 1 : 1;
            totalHash += 1;
          }
        }
      }

      pixelPoint = {
        rgbEntries: Object.entries(rgbHash).sort((a, b) => b[1] - a[1]),
        totalEntries: totalHash,
        x: i / 4 % width,
        y: Math.floor(i / 4 / width),
        rmod: pixelSize
      };
    }

    rgbaArray.push(pixelPoint);

    if (pixelSize !== 1 && (i + rgbStep) % rgbWidth === 0) {
      i += rgbWidth * (pixelSize - 1);
    }
  }

  const scale = 1;
  const r = scale / 2;
  context.clearRect(0, 0, width, height);
  const circleArc = 2 * Math.PI;
  rgbaArray.forEach(point => {
    let currentR = r * pixelSize;
    const rStep = currentR / point.totalEntries;
    const baseX = point.x * scale + halfPixelSize;
    const baseY = point.y * scale + halfPixelSize;
    point.rgbEntries.forEach(e => {
      context.fillStyle = e[0];
      context.beginPath();
      context.arc(baseX, baseY, currentR, 0, circleArc);
      context.fill();
      currentR -= e[1] * rStep;
    });
  });
};

const RoughCanvas = canvas_2;

const drawCanvas = ({
  props,
  canvasDrawing
}) => {
  if (props.frontCanvas && props.backCanvas) {
    const {
      frontCanvas,
      margin,
      width,
      height,
      position,
      canvasPostProcess
    } = props;
    const devicePixelRatio = window.devicePixelRatio || 1;
    const size = [width + margin.left + margin.right, height + margin.top + margin.bottom];
    const context = frontCanvas.getContext('2d');
    context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, margin.left, margin.top);
    context.clearRect(-margin.left, -margin.top, size[0], size[1]);
    let rc;
    canvasDrawing.forEach(piece => {
      const style = piece.styleFn ? piece.styleFn({ ...piece.d,
        ...piece.d.data
      }, piece.i) || {} : {
        fill: 'black',
        stroke: 'black',
        opacity: 1,
        fillOpacity: 1,
        strokeOpacity: 1,
        strokeWidth: 1
      };
      const fill = style.fill ? style.fill : 'black';
      const stroke = style.stroke ? style.stroke : 'black';
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, margin.left * devicePixelRatio, margin.top * devicePixelRatio);
      context.translate(...position);
      context.translate(piece.tx, piece.ty);
      context.fillStyle = fill;
      context.strokeStyle = stroke;
      context.lineWidth = style.strokeWidth ? style.strokeWidth : 0;
      let rcSettings = {};
      const renderObject = piece.markProps.renderMode || piece.renderFn && piece.renderFn({ ...piece.d,
        ...piece.d.data
      }, piece.i);
      const actualRenderMode = renderObject && renderObject.renderMode || renderObject;

      if (actualRenderMode) {
        rc = rc || new RoughCanvas(frontCanvas);
        const rcExtension = typeof renderObject === 'object' && renderObject || {};
        rcSettings = {
          fill,
          stroke,
          strokeWidth: context.lineWidth,
          ...rcExtension
        };
      }

      if (piece.markProps.markType === 'circle' || piece.markProps.markType === 'rect' && piece.markProps.rx > 0) {
        let vizX = 0,
            vizY = 0,
            r = piece.markProps.r;

        if (piece.markProps.width) {
          const halfWidth = piece.markProps.width / 2;
          vizX = piece.markProps.x + halfWidth;
          vizY = piece.markProps.y + halfWidth;
          r = halfWidth;
        }

        if (actualRenderMode === 'sketchy') {
          if (context.globalAlpha !== 0) rc.circle(vizX, vizY, r, rcSettings);
        } else {
          context.beginPath();
          context.arc(vizX, vizY, r, 0, 2 * Math.PI);
          context.globalAlpha = style.fillOpacity || style.opacity || 1;
          if (style.fill && style.fill !== 'none' && context.globalAlpha !== 0) context.fill();
          context.globalAlpha = style.strokeOpacity || style.opacity || 1;
          if (style.stroke && style.stroke !== 'none' && context.globalAlpha !== 0) context.stroke();
        }
      } else if (piece.markProps.markType === 'rect') {
        if (actualRenderMode === 'sketchy') {
          context.globalAlpha = style.opacity || 1;
          if (context.globalAlpha !== 0) rc.rectangle(piece.markProps.x, piece.markProps.y, piece.markProps.width, piece.markProps.height, rcSettings);
        } else {
          context.globalAlpha = style.fillOpacity || style.opacity || 1;
          if (style.fill && style.fill !== 'none' && context.globalAlpha !== 0) context.fillRect(piece.markProps.x, piece.markProps.y, piece.markProps.width, piece.markProps.height);
          context.globalAlpha = style.strokeOpacity || style.opacity || 1;
          if (style.stroke && style.stroke !== 'none' && context.globalAlpha !== 0) context.strokeRect(piece.markProps.x, piece.markProps.y, piece.markProps.width, piece.markProps.height);
        }
      } else if (piece.markProps.markType === 'path') {
        if (actualRenderMode === 'sketchy') {
          context.globalAlpha = style.opacity || 1;
          rc.path(piece.markProps.d, rcSettings);
        } else {
          const p = new Path2D(piece.markProps.d);
          context.globalAlpha = style.strokeOpacity || style.opacity || 1;
          if (style.stroke && style.stroke !== 'none' && context.globalAlpha !== 0) context.stroke(p);
          context.globalAlpha = style.fillOpacity || style.opacity || 1;
          if (style.fill && style.fill !== 'none' && context.globalAlpha !== 0) context.fill(p);
        }
      } else {
        console.error('CURRENTLY UNSUPPORTED MARKTYPE FOR CANVAS RENDERING');
      }
    });
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.globalAlpha = 1;

    if (canvasPostProcess === 'chuckClose') {
      chuckCloseCanvasTransform(canvasContext, context, size);
    } else if (typeof canvasPostProcess === 'function') {
      canvasPostProcess(canvasContext, context, size);
    }
  }
};

const VisualizationLayer = props => {
  const {
    matte,
    matteClip,
    frameKey,
    margin,
    title,
    ariaTitle,
    children,
    voronoiHover,
    canvasPipeline
  } = props;
  useEffect$1(() => {
    drawCanvas({
      props,
      canvasDrawing: canvasPipeline
    });
  });

  const _title = title && ariaTitle || props.title ? title.props && typeof title.props.children === 'string' ? `titled ${title.props.children}` : 'with a complex title' : 'with no title';

  const ariaLabel = `Visualization ${_title}. Use arrow keys to navigate elements.`;
  return children && children.length > 0 && React$1__default.createElement("g", {
    className: "data-visualization",
    key: "visualization-clip-path",
    "aria-label": ariaLabel,
    role: "group",
    clipPath: matteClip && matte ? `url(#matte-clip${frameKey})` : undefined,
    transform: `translate(${margin.left},${margin.top})`
  }, children, matte);
};

VisualizationLayer.defaultProps = {
  position: [0, 0],
  margin: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }
};
VisualizationLayer.propTypes = {
  frameKey: propTypes.string,
  xScale: propTypes.func,
  yScale: propTypes.func,
  margin: propTypes.object,
  size: propTypes.array,
  position: propTypes.array,
  canvasPostProcess: propTypes.oneOfType([propTypes.string, propTypes.func]),
  title: propTypes.oneOfType([propTypes.object, propTypes.string]),
  ariaTitle: propTypes.string,
  matte: propTypes.node,
  matteClip: propTypes.bool,
  frontCanvas: propTypes.object,
  backCanvas: propTypes.object,
  renderOrder: propTypes.array,
  voronoiHover: propTypes.func,
  canvasPipeline: propTypes.array
};

const AnnotationLayer = props => {
  const {
    size: [width, height],
    useSpans,
    margin: userMargin,
    htmlAnnotations,
    svgAnnotations
  } = props;
  const margin = typeof userMargin === 'number' ? {
    top: userMargin,
    left: margin,
    right: userMargin,
    bottom: userMargin
  } : userMargin;
  return React$1__default.createElement(SpanOrDiv, {
    span: useSpans,
    className: "annotation-layer",
    style: {
      position: 'absolute',
      pointerEvents: 'none',
      background: 'none'
    }
  }, React$1__default.createElement("svg", {
    className: "annotation-layer-svg",
    height: height,
    width: width,
    style: {
      background: 'none',
      pointerEvents: 'none',
      position: 'absolute',
      left: `${margin.left}px`,
      top: `${margin.top}px`,
      overflow: 'visible'
    }
  }, React$1__default.createElement("g", null, svgAnnotations)), React$1__default.createElement(SpanOrDiv, {
    span: useSpans,
    className: "annotation-layer-html",
    style: {
      background: 'none',
      pointerEvents: 'none',
      position: 'absolute',
      height: `${height}px`,
      width: `${width}px`,
      left: `${margin.left}px`,
      top: `${margin.top}px`
    }
  }, htmlAnnotations));
};

AnnotationLayer.propTypes = {
  margin: propTypes.object,
  voronoiHover: propTypes.func,
  htmlAnnotations: propTypes.array,
  svgAnnotations: propTypes.array
};
AnnotationLayer.defaultProps = {
  margin: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function constant$2(x) {
  return function() {
    return x;
  };
}

function x(d) {
  return d[0];
}

function y(d) {
  return d[1];
}

function RedBlackTree() {
  this._ = null; // root node
}

function RedBlackNode(node) {
  node.U = // parent node
  node.C = // color - true for red, false for black
  node.L = // left node
  node.R = // right node
  node.P = // previous node
  node.N = null; // next node
}

RedBlackTree.prototype = {
  constructor: RedBlackTree,

  insert: function(after, node) {
    var parent, grandpa, uncle;

    if (after) {
      node.P = after;
      node.N = after.N;
      if (after.N) after.N.P = node;
      after.N = node;
      if (after.R) {
        after = after.R;
        while (after.L) after = after.L;
        after.L = node;
      } else {
        after.R = node;
      }
      parent = after;
    } else if (this._) {
      after = RedBlackFirst(this._);
      node.P = null;
      node.N = after;
      after.P = after.L = node;
      parent = after;
    } else {
      node.P = node.N = null;
      this._ = node;
      parent = null;
    }
    node.L = node.R = null;
    node.U = parent;
    node.C = true;

    after = node;
    while (parent && parent.C) {
      grandpa = parent.U;
      if (parent === grandpa.L) {
        uncle = grandpa.R;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.R) {
            RedBlackRotateLeft(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateRight(this, grandpa);
        }
      } else {
        uncle = grandpa.L;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.L) {
            RedBlackRotateRight(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateLeft(this, grandpa);
        }
      }
      parent = after.U;
    }
    this._.C = false;
  },

  remove: function(node) {
    if (node.N) node.N.P = node.P;
    if (node.P) node.P.N = node.N;
    node.N = node.P = null;

    var parent = node.U,
        sibling,
        left = node.L,
        right = node.R,
        next,
        red;

    if (!left) next = right;
    else if (!right) next = left;
    else next = RedBlackFirst(right);

    if (parent) {
      if (parent.L === node) parent.L = next;
      else parent.R = next;
    } else {
      this._ = next;
    }

    if (left && right) {
      red = next.C;
      next.C = node.C;
      next.L = left;
      left.U = next;
      if (next !== right) {
        parent = next.U;
        next.U = node.U;
        node = next.R;
        parent.L = node;
        next.R = right;
        right.U = next;
      } else {
        next.U = parent;
        parent = next;
        node = next.R;
      }
    } else {
      red = node.C;
      node = next;
    }

    if (node) node.U = parent;
    if (red) return;
    if (node && node.C) { node.C = false; return; }

    do {
      if (node === this._) break;
      if (node === parent.L) {
        sibling = parent.R;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateLeft(this, parent);
          sibling = parent.R;
        }
        if ((sibling.L && sibling.L.C)
            || (sibling.R && sibling.R.C)) {
          if (!sibling.R || !sibling.R.C) {
            sibling.L.C = false;
            sibling.C = true;
            RedBlackRotateRight(this, sibling);
            sibling = parent.R;
          }
          sibling.C = parent.C;
          parent.C = sibling.R.C = false;
          RedBlackRotateLeft(this, parent);
          node = this._;
          break;
        }
      } else {
        sibling = parent.L;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateRight(this, parent);
          sibling = parent.L;
        }
        if ((sibling.L && sibling.L.C)
          || (sibling.R && sibling.R.C)) {
          if (!sibling.L || !sibling.L.C) {
            sibling.R.C = false;
            sibling.C = true;
            RedBlackRotateLeft(this, sibling);
            sibling = parent.L;
          }
          sibling.C = parent.C;
          parent.C = sibling.L.C = false;
          RedBlackRotateRight(this, parent);
          node = this._;
          break;
        }
      }
      sibling.C = true;
      node = parent;
      parent = parent.U;
    } while (!node.C);

    if (node) node.C = false;
  }
};

function RedBlackRotateLeft(tree, node) {
  var p = node,
      q = node.R,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.R = q.L;
  if (p.R) p.R.U = p;
  q.L = p;
}

function RedBlackRotateRight(tree, node) {
  var p = node,
      q = node.L,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.L = q.R;
  if (p.L) p.L.U = p;
  q.R = p;
}

function RedBlackFirst(node) {
  while (node.L) node = node.L;
  return node;
}

function createEdge(left, right, v0, v1) {
  var edge = [null, null],
      index = edges.push(edge) - 1;
  edge.left = left;
  edge.right = right;
  if (v0) setEdgeEnd(edge, left, right, v0);
  if (v1) setEdgeEnd(edge, right, left, v1);
  cells[left.index].halfedges.push(index);
  cells[right.index].halfedges.push(index);
  return edge;
}

function createBorderEdge(left, v0, v1) {
  var edge = [v0, v1];
  edge.left = left;
  return edge;
}

function setEdgeEnd(edge, left, right, vertex) {
  if (!edge[0] && !edge[1]) {
    edge[0] = vertex;
    edge.left = left;
    edge.right = right;
  } else if (edge.left === right) {
    edge[1] = vertex;
  } else {
    edge[0] = vertex;
  }
}

// Liang–Barsky line clipping.
function clipEdge(edge, x0, y0, x1, y1) {
  var a = edge[0],
      b = edge[1],
      ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (!(t0 > 0) && !(t1 < 1)) return true; // TODO Better check?

  if (t0 > 0) edge[0] = [ax + t0 * dx, ay + t0 * dy];
  if (t1 < 1) edge[1] = [ax + t1 * dx, ay + t1 * dy];
  return true;
}

function connectEdge(edge, x0, y0, x1, y1) {
  var v1 = edge[1];
  if (v1) return true;

  var v0 = edge[0],
      left = edge.left,
      right = edge.right,
      lx = left[0],
      ly = left[1],
      rx = right[0],
      ry = right[1],
      fx = (lx + rx) / 2,
      fy = (ly + ry) / 2,
      fm,
      fb;

  if (ry === ly) {
    if (fx < x0 || fx >= x1) return;
    if (lx > rx) {
      if (!v0) v0 = [fx, y0];
      else if (v0[1] >= y1) return;
      v1 = [fx, y1];
    } else {
      if (!v0) v0 = [fx, y1];
      else if (v0[1] < y0) return;
      v1 = [fx, y0];
    }
  } else {
    fm = (lx - rx) / (ry - ly);
    fb = fy - fm * fx;
    if (fm < -1 || fm > 1) {
      if (lx > rx) {
        if (!v0) v0 = [(y0 - fb) / fm, y0];
        else if (v0[1] >= y1) return;
        v1 = [(y1 - fb) / fm, y1];
      } else {
        if (!v0) v0 = [(y1 - fb) / fm, y1];
        else if (v0[1] < y0) return;
        v1 = [(y0 - fb) / fm, y0];
      }
    } else {
      if (ly < ry) {
        if (!v0) v0 = [x0, fm * x0 + fb];
        else if (v0[0] >= x1) return;
        v1 = [x1, fm * x1 + fb];
      } else {
        if (!v0) v0 = [x1, fm * x1 + fb];
        else if (v0[0] < x0) return;
        v1 = [x0, fm * x0 + fb];
      }
    }
  }

  edge[0] = v0;
  edge[1] = v1;
  return true;
}

function clipEdges(x0, y0, x1, y1) {
  var i = edges.length,
      edge;

  while (i--) {
    if (!connectEdge(edge = edges[i], x0, y0, x1, y1)
        || !clipEdge(edge, x0, y0, x1, y1)
        || !(Math.abs(edge[0][0] - edge[1][0]) > epsilon
            || Math.abs(edge[0][1] - edge[1][1]) > epsilon)) {
      delete edges[i];
    }
  }
}

function createCell(site) {
  return cells[site.index] = {
    site: site,
    halfedges: []
  };
}

function cellHalfedgeAngle(cell, edge) {
  var site = cell.site,
      va = edge.left,
      vb = edge.right;
  if (site === vb) vb = va, va = site;
  if (vb) return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
  if (site === va) va = edge[1], vb = edge[0];
  else va = edge[0], vb = edge[1];
  return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
}

function cellHalfedgeStart(cell, edge) {
  return edge[+(edge.left !== cell.site)];
}

function cellHalfedgeEnd(cell, edge) {
  return edge[+(edge.left === cell.site)];
}

function sortCellHalfedges() {
  for (var i = 0, n = cells.length, cell, halfedges, j, m; i < n; ++i) {
    if ((cell = cells[i]) && (m = (halfedges = cell.halfedges).length)) {
      var index = new Array(m),
          array = new Array(m);
      for (j = 0; j < m; ++j) index[j] = j, array[j] = cellHalfedgeAngle(cell, edges[halfedges[j]]);
      index.sort(function(i, j) { return array[j] - array[i]; });
      for (j = 0; j < m; ++j) array[j] = halfedges[index[j]];
      for (j = 0; j < m; ++j) halfedges[j] = array[j];
    }
  }
}

function clipCells(x0, y0, x1, y1) {
  var nCells = cells.length,
      iCell,
      cell,
      site,
      iHalfedge,
      halfedges,
      nHalfedges,
      start,
      startX,
      startY,
      end,
      endX,
      endY,
      cover = true;

  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = cells[iCell]) {
      site = cell.site;
      halfedges = cell.halfedges;
      iHalfedge = halfedges.length;

      // Remove any dangling clipped edges.
      while (iHalfedge--) {
        if (!edges[halfedges[iHalfedge]]) {
          halfedges.splice(iHalfedge, 1);
        }
      }

      // Insert any border edges as necessary.
      iHalfedge = 0, nHalfedges = halfedges.length;
      while (iHalfedge < nHalfedges) {
        end = cellHalfedgeEnd(cell, edges[halfedges[iHalfedge]]), endX = end[0], endY = end[1];
        start = cellHalfedgeStart(cell, edges[halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
        if (Math.abs(endX - startX) > epsilon || Math.abs(endY - startY) > epsilon) {
          halfedges.splice(iHalfedge, 0, edges.push(createBorderEdge(site, end,
              Math.abs(endX - x0) < epsilon && y1 - endY > epsilon ? [x0, Math.abs(startX - x0) < epsilon ? startY : y1]
              : Math.abs(endY - y1) < epsilon && x1 - endX > epsilon ? [Math.abs(startY - y1) < epsilon ? startX : x1, y1]
              : Math.abs(endX - x1) < epsilon && endY - y0 > epsilon ? [x1, Math.abs(startX - x1) < epsilon ? startY : y0]
              : Math.abs(endY - y0) < epsilon && endX - x0 > epsilon ? [Math.abs(startY - y0) < epsilon ? startX : x0, y0]
              : null)) - 1);
          ++nHalfedges;
        }
      }

      if (nHalfedges) cover = false;
    }
  }

  // If there weren’t any edges, have the closest site cover the extent.
  // It doesn’t matter which corner of the extent we measure!
  if (cover) {
    var dx, dy, d2, dc = Infinity;

    for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
      if (cell = cells[iCell]) {
        site = cell.site;
        dx = site[0] - x0;
        dy = site[1] - y0;
        d2 = dx * dx + dy * dy;
        if (d2 < dc) dc = d2, cover = cell;
      }
    }

    if (cover) {
      var v00 = [x0, y0], v01 = [x0, y1], v11 = [x1, y1], v10 = [x1, y0];
      cover.halfedges.push(
        edges.push(createBorderEdge(site = cover.site, v00, v01)) - 1,
        edges.push(createBorderEdge(site, v01, v11)) - 1,
        edges.push(createBorderEdge(site, v11, v10)) - 1,
        edges.push(createBorderEdge(site, v10, v00)) - 1
      );
    }
  }

  // Lastly delete any cells with no edges; these were entirely clipped.
  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = cells[iCell]) {
      if (!cell.halfedges.length) {
        delete cells[iCell];
      }
    }
  }
}

var circlePool = [];

var firstCircle;

function Circle() {
  RedBlackNode(this);
  this.x =
  this.y =
  this.arc =
  this.site =
  this.cy = null;
}

function attachCircle(arc) {
  var lArc = arc.P,
      rArc = arc.N;

  if (!lArc || !rArc) return;

  var lSite = lArc.site,
      cSite = arc.site,
      rSite = rArc.site;

  if (lSite === rSite) return;

  var bx = cSite[0],
      by = cSite[1],
      ax = lSite[0] - bx,
      ay = lSite[1] - by,
      cx = rSite[0] - bx,
      cy = rSite[1] - by;

  var d = 2 * (ax * cy - ay * cx);
  if (d >= -epsilon2) return;

  var ha = ax * ax + ay * ay,
      hc = cx * cx + cy * cy,
      x = (cy * ha - ay * hc) / d,
      y = (ax * hc - cx * ha) / d;

  var circle = circlePool.pop() || new Circle;
  circle.arc = arc;
  circle.site = cSite;
  circle.x = x + bx;
  circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y); // y bottom

  arc.circle = circle;

  var before = null,
      node = circles._;

  while (node) {
    if (circle.y < node.y || (circle.y === node.y && circle.x <= node.x)) {
      if (node.L) node = node.L;
      else { before = node.P; break; }
    } else {
      if (node.R) node = node.R;
      else { before = node; break; }
    }
  }

  circles.insert(before, circle);
  if (!before) firstCircle = circle;
}

function detachCircle(arc) {
  var circle = arc.circle;
  if (circle) {
    if (!circle.P) firstCircle = circle.N;
    circles.remove(circle);
    circlePool.push(circle);
    RedBlackNode(circle);
    arc.circle = null;
  }
}

var beachPool = [];

function Beach() {
  RedBlackNode(this);
  this.edge =
  this.site =
  this.circle = null;
}

function createBeach(site) {
  var beach = beachPool.pop() || new Beach;
  beach.site = site;
  return beach;
}

function detachBeach(beach) {
  detachCircle(beach);
  beaches.remove(beach);
  beachPool.push(beach);
  RedBlackNode(beach);
}

function removeBeach(beach) {
  var circle = beach.circle,
      x = circle.x,
      y = circle.cy,
      vertex = [x, y],
      previous = beach.P,
      next = beach.N,
      disappearing = [beach];

  detachBeach(beach);

  var lArc = previous;
  while (lArc.circle
      && Math.abs(x - lArc.circle.x) < epsilon
      && Math.abs(y - lArc.circle.cy) < epsilon) {
    previous = lArc.P;
    disappearing.unshift(lArc);
    detachBeach(lArc);
    lArc = previous;
  }

  disappearing.unshift(lArc);
  detachCircle(lArc);

  var rArc = next;
  while (rArc.circle
      && Math.abs(x - rArc.circle.x) < epsilon
      && Math.abs(y - rArc.circle.cy) < epsilon) {
    next = rArc.N;
    disappearing.push(rArc);
    detachBeach(rArc);
    rArc = next;
  }

  disappearing.push(rArc);
  detachCircle(rArc);

  var nArcs = disappearing.length,
      iArc;
  for (iArc = 1; iArc < nArcs; ++iArc) {
    rArc = disappearing[iArc];
    lArc = disappearing[iArc - 1];
    setEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
  }

  lArc = disappearing[0];
  rArc = disappearing[nArcs - 1];
  rArc.edge = createEdge(lArc.site, rArc.site, null, vertex);

  attachCircle(lArc);
  attachCircle(rArc);
}

function addBeach(site) {
  var x = site[0],
      directrix = site[1],
      lArc,
      rArc,
      dxl,
      dxr,
      node = beaches._;

  while (node) {
    dxl = leftBreakPoint(node, directrix) - x;
    if (dxl > epsilon) node = node.L; else {
      dxr = x - rightBreakPoint(node, directrix);
      if (dxr > epsilon) {
        if (!node.R) {
          lArc = node;
          break;
        }
        node = node.R;
      } else {
        if (dxl > -epsilon) {
          lArc = node.P;
          rArc = node;
        } else if (dxr > -epsilon) {
          lArc = node;
          rArc = node.N;
        } else {
          lArc = rArc = node;
        }
        break;
      }
    }
  }

  createCell(site);
  var newArc = createBeach(site);
  beaches.insert(lArc, newArc);

  if (!lArc && !rArc) return;

  if (lArc === rArc) {
    detachCircle(lArc);
    rArc = createBeach(lArc.site);
    beaches.insert(newArc, rArc);
    newArc.edge = rArc.edge = createEdge(lArc.site, newArc.site);
    attachCircle(lArc);
    attachCircle(rArc);
    return;
  }

  if (!rArc) { // && lArc
    newArc.edge = createEdge(lArc.site, newArc.site);
    return;
  }

  // else lArc !== rArc
  detachCircle(lArc);
  detachCircle(rArc);

  var lSite = lArc.site,
      ax = lSite[0],
      ay = lSite[1],
      bx = site[0] - ax,
      by = site[1] - ay,
      rSite = rArc.site,
      cx = rSite[0] - ax,
      cy = rSite[1] - ay,
      d = 2 * (bx * cy - by * cx),
      hb = bx * bx + by * by,
      hc = cx * cx + cy * cy,
      vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];

  setEdgeEnd(rArc.edge, lSite, rSite, vertex);
  newArc.edge = createEdge(lSite, site, null, vertex);
  rArc.edge = createEdge(site, rSite, null, vertex);
  attachCircle(lArc);
  attachCircle(rArc);
}

function leftBreakPoint(arc, directrix) {
  var site = arc.site,
      rfocx = site[0],
      rfocy = site[1],
      pby2 = rfocy - directrix;

  if (!pby2) return rfocx;

  var lArc = arc.P;
  if (!lArc) return -Infinity;

  site = lArc.site;
  var lfocx = site[0],
      lfocy = site[1],
      plby2 = lfocy - directrix;

  if (!plby2) return lfocx;

  var hl = lfocx - rfocx,
      aby2 = 1 / pby2 - 1 / plby2,
      b = hl / plby2;

  if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;

  return (rfocx + lfocx) / 2;
}

function rightBreakPoint(arc, directrix) {
  var rArc = arc.N;
  if (rArc) return leftBreakPoint(rArc, directrix);
  var site = arc.site;
  return site[1] === directrix ? site[0] : Infinity;
}

var epsilon = 1e-6;
var epsilon2 = 1e-12;
var beaches;
var cells;
var circles;
var edges;

function triangleArea(a, b, c) {
  return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
}

function lexicographic(a, b) {
  return b[1] - a[1]
      || b[0] - a[0];
}

function Diagram(sites, extent) {
  var site = sites.sort(lexicographic).pop(),
      x,
      y,
      circle;

  edges = [];
  cells = new Array(sites.length);
  beaches = new RedBlackTree;
  circles = new RedBlackTree;

  while (true) {
    circle = firstCircle;
    if (site && (!circle || site[1] < circle.y || (site[1] === circle.y && site[0] < circle.x))) {
      if (site[0] !== x || site[1] !== y) {
        addBeach(site);
        x = site[0], y = site[1];
      }
      site = sites.pop();
    } else if (circle) {
      removeBeach(circle.arc);
    } else {
      break;
    }
  }

  sortCellHalfedges();

  if (extent) {
    var x0 = +extent[0][0],
        y0 = +extent[0][1],
        x1 = +extent[1][0],
        y1 = +extent[1][1];
    clipEdges(x0, y0, x1, y1);
    clipCells(x0, y0, x1, y1);
  }

  this.edges = edges;
  this.cells = cells;

  beaches =
  circles =
  edges =
  cells = null;
}

Diagram.prototype = {
  constructor: Diagram,

  polygons: function() {
    var edges = this.edges;

    return this.cells.map(function(cell) {
      var polygon = cell.halfedges.map(function(i) { return cellHalfedgeStart(cell, edges[i]); });
      polygon.data = cell.site.data;
      return polygon;
    });
  },

  triangles: function() {
    var triangles = [],
        edges = this.edges;

    this.cells.forEach(function(cell, i) {
      if (!(m = (halfedges = cell.halfedges).length)) return;
      var site = cell.site,
          halfedges,
          j = -1,
          m,
          s0,
          e1 = edges[halfedges[m - 1]],
          s1 = e1.left === site ? e1.right : e1.left;

      while (++j < m) {
        s0 = s1;
        e1 = edges[halfedges[j]];
        s1 = e1.left === site ? e1.right : e1.left;
        if (s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
          triangles.push([site.data, s0.data, s1.data]);
        }
      }
    });

    return triangles;
  },

  links: function() {
    return this.edges.filter(function(edge) {
      return edge.right;
    }).map(function(edge) {
      return {
        source: edge.left.data,
        target: edge.right.data
      };
    });
  },

  find: function(x, y, radius) {
    var that = this, i0, i1 = that._found || 0, n = that.cells.length, cell;

    // Use the previously-found cell, or start with an arbitrary one.
    while (!(cell = that.cells[i1])) if (++i1 >= n) return null;
    var dx = x - cell.site[0], dy = y - cell.site[1], d2 = dx * dx + dy * dy;

    // Traverse the half-edges to find a closer cell, if any.
    do {
      cell = that.cells[i0 = i1], i1 = null;
      cell.halfedges.forEach(function(e) {
        var edge = that.edges[e], v = edge.left;
        if ((v === cell.site || !v) && !(v = edge.right)) return;
        var vx = x - v[0], vy = y - v[1], v2 = vx * vx + vy * vy;
        if (v2 < d2) d2 = v2, i1 = v.index;
      });
    } while (i1 !== null);

    that._found = i0;

    return radius == null || d2 <= radius * radius ? cell.site : null;
  }
};

function voronoi() {
  var x$1 = x,
      y$1 = y,
      extent = null;

  function voronoi(data) {
    return new Diagram(data.map(function(d, i) {
      var s = [Math.round(x$1(d, i, data) / epsilon) * epsilon, Math.round(y$1(d, i, data) / epsilon) * epsilon];
      s.index = i;
      s.data = d;
      return s;
    }), extent);
  }

  voronoi.polygons = function(data) {
    return voronoi(data).polygons();
  };

  voronoi.links = function(data) {
    return voronoi(data).links();
  };

  voronoi.triangles = function(data) {
    return voronoi(data).triangles();
  };

  voronoi.x = function(_) {
    return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant$2(+_), voronoi) : x$1;
  };

  voronoi.y = function(_) {
    return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant$2(+_), voronoi) : y$1;
  };

  voronoi.extent = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]], voronoi) : extent && [[extent[0][0], extent[0][1]], [extent[1][0], extent[1][1]]];
  };

  voronoi.size = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[0, 0], [+_[0], +_[1]]], voronoi) : extent && [extent[1][0] - extent[0][0], extent[1][1] - extent[0][1]];
  };

  return voronoi;
}

var xhtml = "http://www.w3.org/1999/xhtml";

var namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

function namespace(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
}

function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === xhtml && document.documentElement.namespaceURI === xhtml
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

function creator(name) {
  var fullname = namespace(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}

function none() {}

function selector(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

function selection_select(select) {
  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection(subgroups, this._parents);
}

function empty() {
  return [];
}

function selectorAll(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

function selection_selectAll(select) {
  if (typeof select !== "function") select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection(subgroups, parents);
}

function matcher(selector) {
  return function() {
    return this.matches(selector);
  };
}

function selection_filter(match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection(subgroups, this._parents);
}

function sparse(update) {
  return new Array(update.length);
}

function selection_enter() {
  return new Selection(this._enter || this._groups.map(sparse), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};

function constant$3(x) {
  return function() {
    return x;
  };
}

var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

function selection_data(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = constant$3(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

function selection_exit() {
  return new Selection(this._exit || this._groups.map(sparse), this._parents);
}

function selection_join(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

function selection_merge(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection(merges, this._parents);
}

function selection_order() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}

function selection_sort(compare) {
  if (!compare) compare = ascending$1;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new Selection(sortgroups, this._parents).order();
}

function ascending$1(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function selection_call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

function selection_nodes() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
}

function selection_node() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}

function selection_size() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
}

function selection_empty() {
  return !this.node();
}

function selection_each(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}

function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

function selection_attr(name, value) {
  var fullname = namespace(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}

function defaultView(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

function selection_style(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}

function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

function selection_property(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}

function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

function selection_classed(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}

function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

function selection_text(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
}

function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

function selection_html(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}

function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

function selection_raise() {
  return this.each(raise);
}

function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

function selection_lower() {
  return this.each(lower);
}

function selection_append(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}

function constantNull() {
  return null;
}

function selection_insert(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

function selection_remove() {
  return this.each(remove);
}

function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

function selection_datum(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}

var filterEvents = {};

var event$1 = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event$1; // Events can be reentrant (e.g., focus).
    event$1 = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event$1 = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

function selection_on(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
}

function customEvent(event1, listener, that, args) {
  var event0 = event$1;
  event1.sourceEvent = event$1;
  event$1 = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event$1 = event0;
  }
}

function dispatchEvent(node, type, params) {
  var window = defaultView(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

function selection_dispatch(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}

var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: selection_select,
  selectAll: selection_selectAll,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: selection_join,
  merge: selection_merge,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  clone: selection_clone,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch
};

function select(selector) {
  return typeof selector === "string"
      ? new Selection([[document.querySelector(selector)]], [document.documentElement])
      : new Selection([[selector]], root);
}

function create(name) {
  return select(creator(name).call(document.documentElement));
}

var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};

function sourceEvent() {
  var current = event$1, source;
  while (source = current.sourceEvent) current = source;
  return current;
}

function point(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
}

function mouse(node) {
  var event = sourceEvent();
  if (event.changedTouches) event = event.changedTouches[0];
  return point(node, event);
}

function selectAll(selector) {
  return typeof selector === "string"
      ? new Selection([document.querySelectorAll(selector)], [document.documentElement])
      : new Selection([selector == null ? [] : selector], root);
}

function touch(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = sourceEvent().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return point(node, touch);
    }
  }

  return null;
}

function touches(node, touches) {
  if (touches == null) touches = sourceEvent().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = point(node, touches[i]);
  }

  return points;
}



var src = /*#__PURE__*/Object.freeze({
	__proto__: null,
	create: create,
	creator: creator,
	local: local,
	matcher: matcher,
	mouse: mouse,
	namespace: namespace,
	namespaces: namespaces,
	clientPoint: point,
	select: select,
	selectAll: selectAll,
	selection: selection,
	selector: selector,
	selectorAll: selectorAll,
	style: styleValue,
	touch: touch,
	touches: touches,
	window: defaultView,
	get event () { return event$1; },
	customEvent: customEvent
});

var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames$1(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames$1(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

function timeout$1(callback, delay, time) {
  var t = new Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

var emptyOn = dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

function schedule(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create$1(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = get$1(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set$1(node, id) {
  var schedule = get$1(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get$1(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create$1(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = timer(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return timeout$1(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    timeout$1(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

function interrupt(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}

function selection_interrupt(name) {
  return this.each(function() {
    interrupt(this, name);
  });
}

function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = set$1(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = set$1(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

function transition_tween(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = get$1(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = set$1(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return get$1(node, id).value[name];
  };
}

function interpolate$1(a, b) {
  var c;
  return (typeof b === "number" ? interpolateNumber
      : b instanceof color ? interpolateRgb
      : (c = color(b)) ? (b = c, interpolateRgb)
      : interpolateString)(a, b);
}

function attrRemove$1(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS$1(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant$1(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS$1(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction$1(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS$1(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function transition_attr(name, value) {
  var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate$1;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)(fullname, i, tweenValue(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS$1 : attrRemove$1)(fullname)
      : (fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, i, value));
}

function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i(t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i(t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function transition_attrTween(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

function delayFunction(id, value) {
  return function() {
    init(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    init(this, id).delay = value;
  };
}

function transition_delay(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : get$1(this.node(), id).delay;
}

function durationFunction(id, value) {
  return function() {
    set$1(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    set$1(this, id).duration = value;
  };
}

function transition_duration(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : get$1(this.node(), id).duration;
}

function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    set$1(this, id).ease = value;
  };
}

function transition_ease(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : get$1(this.node(), id).ease;
}

function transition_filter(match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Transition(subgroups, this._parents, this._name, this._id);
}

function transition_merge(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Transition(merges, this._parents, this._name, this._id);
}

function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? init : set$1;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

function transition_on(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? get$1(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}

function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

function transition_remove() {
  return this.on("end.remove", removeFunction(this._id));
}

function transition_select(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id, i, subgroup, get$1(node, id));
      }
    }
  }

  return new Transition(subgroups, this._parents, name, id);
}

function transition_selectAll(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = get$1(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            schedule(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new Transition(subgroups, parents, name, id);
}

var Selection$1 = selection.prototype.constructor;

function transition_selection() {
  return new Selection$1(this._groups, this._parents);
}

function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = styleValue(this, name),
        string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove$1(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant$1(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction$1(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = styleValue(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = set$1(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove$1(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

function transition_style(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate$1;
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove$1(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction$1(name, i, tweenValue(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant$1(name, i, value), priority)
      .on("end.style." + name, null);
}

function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i(t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

function transition_styleTween(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

function textConstant$1(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction$1(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

function transition_text(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction$1(tweenValue(this, "text", value))
      : textConstant$1(value == null ? "" : value + ""));
}

function transition_transition() {
  var name = this._name,
      id0 = this._id,
      id1 = newId();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = get$1(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new Transition(groups, this._parents, name, id1);
}

function transition_end() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = set$1(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });
  });
}

var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return selection().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = selection.prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease,
  end: transition_end
};

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = now(), defaultTiming;
    }
  }
  return timing;
}

function selection_transition(name) {
  var id,
      timing;

  if (name instanceof Transition) {
    id = name._id, name = name._name;
  } else {
    id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new Transition(groups, this._parents, name, id);
}

selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;

var drawing = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.pathStr = pathStr;
exports.circlePath = circlePath;
exports.rectPath = rectPath;
exports.linePath = linePath;
exports.generateSVG = generateSVG;



var _react2 = _interopRequireDefault(React$1__default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//All generic line constructors expect a projected coordinates array with x & y coordinates, if there are no y1 & x1 coordinates then it defaults to 0-width
function roundToTenth(number) {
  return Math.round(number * 10) / 10;
}

function pathStr(_ref) {
  var x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height,
      cx = _ref.cx,
      cy = _ref.cy,
      r = _ref.r;

  if (cx !== undefined) {
    return ["M", roundToTenth(cx - r), roundToTenth(cy), "a", r, r, 0, 1, 0, r * 2, 0, "a", r, r, 0, 1, 0, -(r * 2), 0].join(" ") + "Z";
  }
  return ["M", roundToTenth(x), roundToTenth(y), "h", width, "v", height, "h", -width, "v", -height].join(" ") + "Z";
}

function circlePath(cx, cy, r) {
  return pathStr({ cx: cx, cy: cy, r: r });
}

function rectPath(x, y, width, height) {
  return pathStr({ x: x, y: y, width: width, height: height });
}

function linePath(x1, x2, y1, y2) {
  return "M" + x1 + "," + y1 + "L" + x2 + "," + y2 + "L";
}

function generateSVG(props, className) {
  var markType = props.markType;
  var renderMode = props.renderMode;

  var cloneProps = _extends({}, props);
  delete cloneProps.markType;
  delete cloneProps.renderMode;
  delete cloneProps.resetAfter;
  delete cloneProps.droppable;
  delete cloneProps.nid;
  delete cloneProps.dropFunction;
  delete cloneProps.context;
  delete cloneProps.updateContext;
  delete cloneProps.parameters;
  delete cloneProps.lineDataAccessor;
  delete cloneProps.customAccessors;
  delete cloneProps.interpolate;
  delete cloneProps.forceUpdate;
  delete cloneProps.searchIterations;
  delete cloneProps.simpleInterpolate;
  delete cloneProps.transitionDuration;
  delete cloneProps.tx;
  delete cloneProps.ty;
  delete cloneProps.customTween;
  delete cloneProps.sketchyGenerator;

  //        let transform = cloneProps['transform'];
  if (props.draggable) {
    delete cloneProps.transform;
  }

  cloneProps.className = className;

  var actualSVG = null;

  if (renderMode === "forcePath" && markType === "circle") {
    cloneProps.d = circlePath(cloneProps.cx || 0, cloneProps.cy || 0, cloneProps.r);
    markType = "path";
    actualSVG = _react2.default.createElement(markType, cloneProps);
  } else if (renderMode === "forcePath" && markType === "rect") {
    cloneProps.d = rectPath(cloneProps.x || 0, cloneProps.y || 0, cloneProps.width, cloneProps.height);
    markType = "path";
    actualSVG = _react2.default.createElement(markType, cloneProps);
  } else {
    if (props.markType === "text" && _typeof(cloneProps.children) !== "object") {
      cloneProps.children = _react2.default.createElement(
        "tspan",
        null,
        cloneProps.children
      );
    }
    actualSVG = _react2.default.createElement(markType, cloneProps);
  }
  return actualSVG;
}
});

unwrapExports(drawing);
var drawing_1 = drawing.pathStr;
var drawing_2 = drawing.circlePath;
var drawing_3 = drawing.rectPath;
var drawing_4 = drawing.linePath;
var drawing_5 = drawing.generateSVG;

var markTransition = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var styleTransitionWhitelist = exports.styleTransitionWhitelist = ["strokeOpacity", "fillOpacity", "strokeWidth", "fill", "stroke", "opacity", "strokeDasharray"];

var redrawSketchyList = exports.redrawSketchyList = ["fill", "stroke", "cx", "cy", "x", "y", "d", "height", "width", "x1", "x2", "y1", "y2", "rx", "ry", "r"];

var attributeTransitionWhitelist = exports.attributeTransitionWhitelist = ["transform"].concat(redrawSketchyList, styleTransitionWhitelist);

//TODO find React Everything to everything translater
var reactCSSNameStyleHash = exports.reactCSSNameStyleHash = {
  strokeWidth: "stroke-width",
  fillOpacity: "fill-opacity",
  strokeOpacity: "stroke-opacity",
  strokeDasharray: "stroke-dasharray"
};

var differentD = exports.differentD = function differentD(d, newD) {
  if (!d || !newD) {
    return true;
  }
  var lowerD = d.toLowerCase();
  var lowerNewD = newD.toLowerCase();

  if ((lowerD.match(/m/g) || []).length !== (lowerNewD.match(/m/g) || []).length) {
    return true;
  }

  if ((lowerD.match(/l/g) || []).length !== (lowerNewD.match(/l/g) || []).length) {
    return true;
  }

  if ((lowerD.match(/c/g) || []).length !== (lowerNewD.match(/c/g) || []).length) {
    return true;
  }

  if ((lowerD.match(/a/g) || []).length !== (lowerNewD.match(/a/g) || []).length) {
    return true;
  }

  return false;
};
});

unwrapExports(markTransition);
var markTransition_1 = markTransition.styleTransitionWhitelist;
var markTransition_2 = markTransition.redrawSketchyList;
var markTransition_3 = markTransition.attributeTransitionWhitelist;
var markTransition_4 = markTransition.reactCSSNameStyleHash;
var markTransition_5 = markTransition.differentD;

var Mark_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var _react2 = _interopRequireDefault(React$1__default);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function generateSketchyHash(props) {
  var _props$style = props.style,
      style = _props$style === undefined ? {} : _props$style;

  var sketchyHash = "";
  markTransition.redrawSketchyList.forEach(function (d) {
    sketchyHash += "-" + (style[d] || props[d]);
  });
  return sketchyHash;
}

var updateSketchy = function updateSketchy(nextProps, oldSketchyHash) {

  var RoughGenerator = nextProps.sketchyGenerator;

  var renderOptions = nextProps.renderMode !== null && _typeof(nextProps.renderMode) === "object" ? nextProps.renderMode : { renderMode: nextProps.renderMode };

  var sketchyHash = renderOptions.renderMode === "sketchy" && generateSketchyHash(nextProps);
  if (RoughGenerator && sketchyHash && sketchyHash !== oldSketchyHash) {
    var _nextProps$style = nextProps.style,
        style = _nextProps$style === undefined ? {} : _nextProps$style;
    var _renderOptions$simpli = renderOptions.simplification,
        simplification = _renderOptions$simpli === undefined ? 0 : _renderOptions$simpli,
        _renderOptions$curveS = renderOptions.curveStepCount,
        curveStepCount = _renderOptions$curveS === undefined ? 9 : _renderOptions$curveS,
        _renderOptions$fillSt = renderOptions.fillStyle,
        fillStyle = _renderOptions$fillSt === undefined ? "hachure" : _renderOptions$fillSt,
        _renderOptions$roughn = renderOptions.roughness,
        roughness = _renderOptions$roughn === undefined ? 1 : _renderOptions$roughn,
        _renderOptions$bowing = renderOptions.bowing,
        bowing = _renderOptions$bowing === undefined ? 1 : _renderOptions$bowing,
        _renderOptions$fillWe = renderOptions.fillWeight,
        fillWeight = _renderOptions$fillWe === undefined ? 1 : _renderOptions$fillWe,
        _renderOptions$hachur = renderOptions.hachureAngle,
        hachureAngle = _renderOptions$hachur === undefined ? -41 : _renderOptions$hachur;


    var roughGenerator = RoughGenerator({}, { width: 1000, height: 1000 });
    var drawingInstructions = void 0;
    var roughOptions = {
      fill: style.fill || nextProps.fill,
      stroke: style.stroke || nextProps.stroke,
      strokeWidth: style.strokeWidth || nextProps.strokeWidth,
      fillStyle: fillStyle,
      roughness: roughness,
      bowing: bowing,
      fillWeight: fillWeight,
      hachureAngle: hachureAngle,
      hachureGap: renderOptions.hachureGap || style.fillOpacity && (5 - style.fillOpacity * 5) * fillWeight || fillWeight * 2,
      curveStepCount: curveStepCount,
      simplification: simplification
    };

    switch (nextProps.markType) {
      case "line":
        drawingInstructions = roughGenerator.line(nextProps.x1 || 0, nextProps.y1 || 0, nextProps.x2 || 0, nextProps.y2 || 0, roughOptions);
        break;
      case "rect":
        if (nextProps.rx || nextProps.ry) {
          drawingInstructions = roughGenerator.circle((nextProps.x || 0) + nextProps.width / 2, (nextProps.y || 0) + nextProps.width / 2, nextProps.width, roughOptions);
        } else {
          drawingInstructions = roughGenerator.rectangle(nextProps.x || 0, nextProps.y || 0, nextProps.width, nextProps.height, roughOptions);
        }
        break;
      case "circle":
        drawingInstructions = roughGenerator.circle(nextProps.cx || 0, nextProps.cy || 0, nextProps.r * 2, roughOptions);
        break;
      case "ellipse":
        drawingInstructions = roughGenerator.ellipse(nextProps.x || 0, nextProps.y || 0, nextProps.width, nextProps.height, roughOptions);
        break;
      case "polygon":
        drawingInstructions = roughGenerator.polygon(nextProps.points, roughOptions);
        break;
      case "path":
        drawingInstructions = roughGenerator.path(nextProps.d, roughOptions);
        break;
    }

    var roughPieces = [];
    roughGenerator.toPaths(drawingInstructions).forEach(function (_ref, i) {
      var d = _ref.d,
          fill = _ref.fill,
          stroke = _ref.stroke,
          strokeWidth = _ref.strokeWidth,
          pattern = _ref.pattern;

      if (pattern) {
        var roughRandomID = "rough-" + Math.random();
        roughPieces.push(_react2.default.createElement(
          "pattern",
          {
            key: "pattern-" + i,
            id: roughRandomID,
            x: pattern.x,
            y: pattern.y,
            height: pattern.height,
            width: pattern.width,
            viewBox: pattern.viewBox
          },
          _react2.default.createElement("path", {
            key: "pattern-path-" + i,
            d: pattern.path.d,
            style: {
              fill: pattern.path.fill,
              stroke: pattern.path.stroke,
              strokeWidth: pattern.path.strokeWidth
            }
          })
        ));
        fill = "url(#" + roughRandomID + ")";
      }
      roughPieces.push(_react2.default.createElement("path", {
        key: "path-" + i,
        d: d,
        style: {
          fill: fill,
          stroke: stroke,
          strokeWidth: strokeWidth
        },
        transform: nextProps.transform
      }));
    });

    return {
      sketchyHash: sketchyHash,
      sketchyFill: roughPieces
    };
  }
  return null;
};

var Mark = function (_React$Component) {
  _inherits(Mark, _React$Component);

  function Mark(props) {
    _classCallCheck(this, Mark);

    var _this = _possibleConstructorReturn(this, (Mark.__proto__ || Object.getPrototypeOf(Mark)).call(this, props));

    _this.state = _extends({
      sketchyFill: undefined,
      sketchyHash: ""
    }, updateSketchy(props, ""));

    return _this;
  }

  _createClass(Mark, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      if (nextProps.renderMode || this.props.renderMode || this.props.markType !== nextProps.markType || this.state.dragging || this.props.forceUpdate || nextProps.forceUpdate || this.props.className !== nextProps.className || this.props.children !== nextProps.children || this.props.customTween && !nextProps.customTween || !this.props.customTween && nextProps.customTween) {
        return true;
      }

      var node = this.node;

      var actualSVG = (0, drawing.generateSVG)(nextProps, nextProps.className);
      var cloneProps = actualSVG.props;

      if (!cloneProps) {
        return true;
      }

      var _nextProps$transition = nextProps.transitionDuration,
          transitionDuration = _nextProps$transition === undefined ? {} : _nextProps$transition;

      var isDefault = typeof transitionDuration === "number";
      var defaultDuration = isDefault ? transitionDuration : 1000;
      transitionDuration = isDefault ? { default: defaultDuration } : _extends({ default: defaultDuration }, transitionDuration);

      var newProps = Object.keys(cloneProps).filter(function (d) {
        return d !== "style";
      });
      var oldProps = Object.keys(this.props).filter(function (d) {
        return d !== "style" && !newProps.find(function (p) {
          return p === d;
        });
      });

      var hasTransition = (0, src.select)(node).select("*").transition;

      function adjustedPropName(propname) {
        return markTransition.reactCSSNameStyleHash[propname] || propname;
      }

      oldProps.forEach(function (oldProp) {
        if (oldProp !== "style") {
          (0, src.select)(node).select("*").attr(adjustedPropName(oldProp), undefined);
        }
      });

      newProps.forEach(function (newProp) {
        if (!hasTransition || !markTransition.attributeTransitionWhitelist.find(function (d) {
          return d === newProp;
        }) || newProp === "d" && (0, markTransition.differentD)(cloneProps.d, _this2.props.d)) {
          if (newProp === "d" && nextProps.customTween) {
            (0, src.select)(node).select("*").attr("d", nextProps.customTween.fn(nextProps.customTween.props, nextProps.customTween.props)(1));
          } else {
            (0, src.select)(node).select("*").attr(adjustedPropName(newProp), cloneProps[newProp]);
          }
        } else {
          var _transitionDuration = transitionDuration,
              defaultDur = _transitionDuration.default,
              _transitionDuration$n = _transitionDuration[newProp],
              appliedDuration = _transitionDuration$n === undefined ? defaultDur : _transitionDuration$n;


          if (newProp === "d" && nextProps.customTween) {
            var initialTweenProps = _extends({}, _this2.props.customTween.props);
            var nextTweenProps = _extends({}, nextProps.customTween.props);
            (0, src.select)(node).select("*").transition(adjustedPropName("d")).duration(appliedDuration).attrTween("d", function () {
              return nextProps.customTween.fn(initialTweenProps, nextTweenProps);
            });
          } else {
            (0, src.select)(node).select("*").transition(adjustedPropName(newProp)).duration(appliedDuration).attr(adjustedPropName(newProp), cloneProps[newProp]);
          }
        }
      });

      var newStyleProps = Object.keys(cloneProps.style || {});
      var oldStyleProps = Object.keys(this.props.style || {}).filter(function (d) {
        return !newStyleProps.find(function (p) {
          return p === d;
        });
      });

      oldStyleProps.forEach(function (oldProp) {
        (0, src.select)(node).select("*").style(adjustedPropName(oldProp), undefined);
      });

      newStyleProps.forEach(function (newProp) {
        if (!hasTransition) {
          (0, src.select)(node).select("*").style(adjustedPropName(newProp), cloneProps.style[newProp]);
        } else {
          var _transitionDuration2 = transitionDuration,
              defaultDur = _transitionDuration2.default,
              _transitionDuration2$ = _transitionDuration2[newProp],
              appliedDuration = _transitionDuration2$ === undefined ? defaultDur : _transitionDuration2$;


          (0, src.select)(node).select("*").transition(adjustedPropName(newProp)).duration(appliedDuration).style(adjustedPropName(newProp), cloneProps.style[newProp]);
        }
      });

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var className = this.props.className || "";

      var actualSVG = (this.props.renderMode === "sketchy" || this.props.renderMode && this.props.renderMode.renderMode === "sketchy") && this.state.sketchyFill || (0, drawing.generateSVG)(this.props, className);

      return _react2.default.createElement(
        "g",
        {
          ref: function ref(node) {
            return _this3.node = node;
          },
          className: className,
          "aria-label": this.props["aria-label"]
        },
        actualSVG
      );
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return updateSketchy(nextProps, prevState.sketchyHash);
    }
  }]);

  return Mark;
}(_react2.default.Component);

exports.default = Mark;
module.exports = exports['default'];
});

unwrapExports(Mark_1);

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mark = undefined;



var _Mark2 = _interopRequireDefault(Mark_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Mark: _Mark2.default
};
exports.Mark = _Mark2.default;
});

unwrapExports(lib);
var lib_1 = lib.Mark;

const constructDataObject = (d, props) => {
  if (d === undefined) return d;
  const {
    points
  } = props;
  return d && d.data ? {
    points,
    ...d.data,
    ...d
  } : {
    points,
    ...d
  };
};

const changeVoronoi = ({
  d,
  customHoverTypes,
  props
}) => {
  const {
    customHoverBehavior,
    voronoiHover
  } = props;
  const dataObject = constructDataObject(d, props);
  if (customHoverBehavior) customHoverBehavior(dataObject);
  if (!d) voronoiHover(null);else if (customHoverTypes === true) {
    const vorD = Object.assign({}, dataObject);
    vorD.type = vorD.type === 'column-hover' ? 'column-hover' : 'frame-hover';
    voronoiHover(vorD);
  } else if (customHoverTypes) {
    const arrayWrappedHoverTypes = Array.isArray(customHoverTypes) ? customHoverTypes : [customHoverTypes];
    const mappedHoverTypes = arrayWrappedHoverTypes.map(c => {
      const finalC = typeof c === 'function' ? c(dataObject) : c;
      if (!finalC) return undefined;
      return Object.assign({}, dataObject, finalC);
    }).filter(d => d);
    voronoiHover(mappedHoverTypes);
  }
};

const clickVoronoi = (d, props) => {
  const dataObject = constructDataObject(d, props);
  if (props.customClickBehavior) props.customClickBehavior(dataObject);
};

const doubleclickVoronoi = (d, props) => {
  const dataObject = constructDataObject(d, props);
  if (props.customDoubleClickBehavior) props.customDoubleClickBehavior(dataObject);
};

const calculateOverlay = props => {
  let voronoiPaths = [];
  const {
    xScale,
    yScale,
    data,
    size,
    overlay,
    interactionOverflow = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    customClickBehavior,
    customDoubleClickBehavior,
    hoverAnnotation,
    voronoiHover
  } = props;
  console.log(data);
  const pointerStyle = customClickBehavior || customDoubleClickBehavior ? {
    cursor: 'pointer'
  } : {};

  if (data && hoverAnnotation && !overlay) {
    const voronoiDataset = [];
    const voronoiUniqueHash = {};
    data.forEach(d => {
      const xValue = Math.floor(xScale(d.x));
      const yValue = Math.floor(yScale(d.y));

      if (xValue >= 0 && xValue <= size[0] && yValue >= 0 && yValue <= size[1] && xValue !== undefined && yValue !== undefined && isNaN(xValue) === false && isNaN(yValue) === false) {
        const pointKey = `${xValue},${yValue}`;

        if (!voronoiUniqueHash[pointKey]) {
          const voronoiPoint = { ...d,
            points: data,
            coincidentPoints: [d],
            voronoiX: xValue,
            voronoiY: yValue
          };
          voronoiDataset.push(voronoiPoint);
          voronoiUniqueHash[pointKey] = voronoiPoint;
        } else voronoiUniqueHash[pointKey].coincidentPoints.push(d);
      }
    });
    console.log('--------------');
    const voronoiXExtent = extent(voronoiDataset.map(d => d.voronoiX));
    const voronoiYExtent = extent(voronoiDataset.map(d => d.voronoiY));
    const voronoiExtent = [[Math.min(voronoiXExtent[0], -interactionOverflow.left), Math.min(voronoiYExtent[0], -interactionOverflow.top)], [Math.max(voronoiXExtent[1], size[0] + interactionOverflow.right), Math.max(voronoiYExtent[1], size[1] + interactionOverflow.bottom)]];
    const voronoiDiagram = voronoi().extent(voronoiExtent).x(d => d.voronoiX).y(d => d.voronoiY);
    const voronoiData = voronoiDiagram.polygons(voronoiDataset);
    voronoiPaths = voronoiData.map((d, i) => {
      return React$1__default.createElement("path", {
        onClick: () => clickVoronoi(voronoiDataset[i], props),
        onDoubleClick: () => doubleclickVoronoi(voronoiDataset[i], props),
        onMouseEnter: () => changeVoronoi({
          d: voronoiDataset[i],
          customHoverTypes: props.hoverAnnotation,
          props
        }),
        onMouseLeave: () => voronoiHover([]),
        key: `interactionVoronoi${i}`,
        d: `M${d.join('L')}Z`,
        style: {
          fillOpacity: 0,
          strokeOpacity: 0.5,
          stroke: 'blue',
          ...pointerStyle
        }
      });
    }, undefined);
    return voronoiPaths;
  } else if (overlay) {
    const renderedOverlay = overlay.map((overlayRegion, i) => {
      const {
        overlayData,
        ...rest
      } = overlayRegion;

      if (React$1__default.isValidElement(overlayRegion.renderElement)) {
        const overlayProps = {
          key: `overlay-${i}`,
          onMouseEnter: () => changeVoronoi({
            d: overlayData,
            customHoverTypes: props.hoverAnnotation,
            props
          }),
          onMouseLeave: () => voronoiHover([]),
          onClick: () => clickVoronoi(overlayData, props),
          onDoubleClick: () => doubleclickVoronoi(overlayData, props),
          style: {
            opacity: 0,
            ...pointerStyle
          }
        };
        return React$1__default.cloneElement(overlayRegion.renderElement, overlayProps);
      } else {
        return React$1__default.createElement(lib_1, _extends({
          forceUpdate: true
        }, rest, {
          key: `overlay-${i}`,
          onMouseEnter: () => changeVoronoi({
            d: overlayData,
            customHoverTypes: props.hoverAnnotation,
            props
          }),
          onMouseLeave: () => voronoiHover([]),
          onClick: () => clickVoronoi(overlayData, props),
          onDoubleClick: () => doubleclickVoronoi(overlayData, props),
          style: {
            opacity: 0,
            ...pointerStyle
          }
        }));
      }
    });
    return renderedOverlay;
  }
};

function noevent() {
  event$1.preventDefault();
  event$1.stopImmediatePropagation();
}

function dragDisable(view) {
  var root = view.document.documentElement,
      selection = select(view).on("dragstart.drag", noevent, true);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", noevent, true);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
}

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = select(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", noevent, true);
    setTimeout(function() { selection.on("click.drag", null); }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}

function constant$4(x) {
  return function() {
    return x;
  };
}

function BrushEvent(target, type, selection) {
  this.target = target;
  this.type = type;
  this.selection = selection;
}

function nopropagation() {
  event$1.stopImmediatePropagation();
}

function noevent$1() {
  event$1.preventDefault();
  event$1.stopImmediatePropagation();
}

var MODE_DRAG = {name: "drag"},
    MODE_SPACE = {name: "space"},
    MODE_HANDLE = {name: "handle"},
    MODE_CENTER = {name: "center"};

function number1(e) {
  return [+e[0], +e[1]];
}

function number2(e) {
  return [number1(e[0]), number1(e[1])];
}

function toucher(identifier) {
  return function(target) {
    return touch(target, event$1.touches, identifier);
  };
}

var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function(x, e) { return x == null ? null : [[+x[0], e[0][1]], [+x[1], e[1][1]]]; },
  output: function(xy) { return xy && [xy[0][0], xy[1][0]]; }
};

var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y, e) { return y == null ? null : [[e[0][0], +y[0]], [e[1][0], +y[1]]]; },
  output: function(xy) { return xy && [xy[0][1], xy[1][1]]; }
};

var cursors = {
  overlay: "crosshair",
  selection: "move",
  n: "ns-resize",
  e: "ew-resize",
  s: "ns-resize",
  w: "ew-resize",
  nw: "nwse-resize",
  ne: "nesw-resize",
  se: "nwse-resize",
  sw: "nesw-resize"
};

var flipX = {
  e: "w",
  w: "e",
  nw: "ne",
  ne: "nw",
  se: "sw",
  sw: "se"
};

var flipY = {
  n: "s",
  s: "n",
  nw: "sw",
  ne: "se",
  se: "ne",
  sw: "nw"
};

var signsX = {
  overlay: +1,
  selection: +1,
  n: null,
  e: +1,
  s: null,
  w: -1,
  nw: -1,
  ne: +1,
  se: +1,
  sw: -1
};

var signsY = {
  overlay: +1,
  selection: +1,
  n: -1,
  e: null,
  s: +1,
  w: null,
  nw: -1,
  ne: -1,
  se: +1,
  sw: +1
};

function type(t) {
  return {type: t};
}

// Ignore right-click, since that should open the context menu.
function defaultFilter() {
  return !event$1.ctrlKey && !event$1.button;
}

function defaultExtent() {
  var svg = this.ownerSVGElement || this;
  if (svg.hasAttribute("viewBox")) {
    svg = svg.viewBox.baseVal;
    return [[svg.x, svg.y], [svg.x + svg.width, svg.y + svg.height]];
  }
  return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

// Like d3.local, but with the name “__brush” rather than auto-generated.
function local$1(node) {
  while (!node.__brush) if (!(node = node.parentNode)) return;
  return node.__brush;
}

function empty$1(extent) {
  return extent[0][0] === extent[1][0]
      || extent[0][1] === extent[1][1];
}

function brushX() {
  return brush(X);
}

function brushY() {
  return brush(Y);
}

function brush(dim) {
  var extent = defaultExtent,
      filter = defaultFilter,
      touchable = defaultTouchable,
      keys = true,
      listeners = dispatch("start", "brush", "end"),
      handleSize = 6,
      touchending;

  function brush(group) {
    var overlay = group
        .property("__brush", initialize)
      .selectAll(".overlay")
      .data([type("overlay")]);

    overlay.enter().append("rect")
        .attr("class", "overlay")
        .attr("pointer-events", "all")
        .attr("cursor", cursors.overlay)
      .merge(overlay)
        .each(function() {
          var extent = local$1(this).extent;
          select(this)
              .attr("x", extent[0][0])
              .attr("y", extent[0][1])
              .attr("width", extent[1][0] - extent[0][0])
              .attr("height", extent[1][1] - extent[0][1]);
        });

    group.selectAll(".selection")
      .data([type("selection")])
      .enter().append("rect")
        .attr("class", "selection")
        .attr("cursor", cursors.selection)
        .attr("fill", "#777")
        .attr("fill-opacity", 0.3)
        .attr("stroke", "#fff")
        .attr("shape-rendering", "crispEdges");

    var handle = group.selectAll(".handle")
      .data(dim.handles, function(d) { return d.type; });

    handle.exit().remove();

    handle.enter().append("rect")
        .attr("class", function(d) { return "handle handle--" + d.type; })
        .attr("cursor", function(d) { return cursors[d.type]; });

    group
        .each(redraw)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("mousedown.brush", started)
      .filter(touchable)
        .on("touchstart.brush", started)
        .on("touchmove.brush", touchmoved)
        .on("touchend.brush touchcancel.brush", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  brush.move = function(group, selection) {
    if (group.selection) {
      group
          .on("start.brush", function() { emitter(this, arguments).beforestart().start(); })
          .on("interrupt.brush end.brush", function() { emitter(this, arguments).end(); })
          .tween("brush", function() {
            var that = this,
                state = that.__brush,
                emit = emitter(that, arguments),
                selection0 = state.selection,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent),
                i = interpolate(selection0, selection1);

            function tween(t) {
              state.selection = t === 1 && selection1 === null ? null : i(t);
              redraw.call(that);
              emit.brush();
            }

            return selection0 !== null && selection1 !== null ? tween : tween(1);
          });
    } else {
      group
          .each(function() {
            var that = this,
                args = arguments,
                state = that.__brush,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent),
                emit = emitter(that, args).beforestart();

            interrupt(that);
            state.selection = selection1 === null ? null : selection1;
            redraw.call(that);
            emit.start().brush().end();
          });
    }
  };

  brush.clear = function(group) {
    brush.move(group, null);
  };

  function redraw() {
    var group = select(this),
        selection = local$1(this).selection;

    if (selection) {
      group.selectAll(".selection")
          .style("display", null)
          .attr("x", selection[0][0])
          .attr("y", selection[0][1])
          .attr("width", selection[1][0] - selection[0][0])
          .attr("height", selection[1][1] - selection[0][1]);

      group.selectAll(".handle")
          .style("display", null)
          .attr("x", function(d) { return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2; })
          .attr("y", function(d) { return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2; })
          .attr("width", function(d) { return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize; })
          .attr("height", function(d) { return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize; });
    }

    else {
      group.selectAll(".selection,.handle")
          .style("display", "none")
          .attr("x", null)
          .attr("y", null)
          .attr("width", null)
          .attr("height", null);
    }
  }

  function emitter(that, args, clean) {
    return (!clean && that.__brush.emitter) || new Emitter(that, args);
  }

  function Emitter(that, args) {
    this.that = that;
    this.args = args;
    this.state = that.__brush;
    this.active = 0;
  }

  Emitter.prototype = {
    beforestart: function() {
      if (++this.active === 1) this.state.emitter = this, this.starting = true;
      return this;
    },
    start: function() {
      if (this.starting) this.starting = false, this.emit("start");
      else this.emit("brush");
      return this;
    },
    brush: function() {
      this.emit("brush");
      return this;
    },
    end: function() {
      if (--this.active === 0) delete this.state.emitter, this.emit("end");
      return this;
    },
    emit: function(type) {
      customEvent(new BrushEvent(brush, type, dim.output(this.state.selection)), listeners.apply, listeners, [type, this.that, this.args]);
    }
  };

  function started() {
    if (touchending && !event$1.touches) return;
    if (!filter.apply(this, arguments)) return;

    var that = this,
        type = event$1.target.__data__.type,
        mode = (keys && event$1.metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : (keys && event$1.altKey ? MODE_CENTER : MODE_HANDLE),
        signX = dim === Y ? null : signsX[type],
        signY = dim === X ? null : signsY[type],
        state = local$1(that),
        extent = state.extent,
        selection = state.selection,
        W = extent[0][0], w0, w1,
        N = extent[0][1], n0, n1,
        E = extent[1][0], e0, e1,
        S = extent[1][1], s0, s1,
        dx = 0,
        dy = 0,
        moving,
        shifting = signX && signY && keys && event$1.shiftKey,
        lockX,
        lockY,
        pointer = event$1.touches ? toucher(event$1.changedTouches[0].identifier) : mouse,
        point0 = pointer(that),
        point = point0,
        emit = emitter(that, arguments, true).beforestart();

    if (type === "overlay") {
      if (selection) moving = true;
      state.selection = selection = [
        [w0 = dim === Y ? W : point0[0], n0 = dim === X ? N : point0[1]],
        [e0 = dim === Y ? E : w0, s0 = dim === X ? S : n0]
      ];
    } else {
      w0 = selection[0][0];
      n0 = selection[0][1];
      e0 = selection[1][0];
      s0 = selection[1][1];
    }

    w1 = w0;
    n1 = n0;
    e1 = e0;
    s1 = s0;

    var group = select(that)
        .attr("pointer-events", "none");

    var overlay = group.selectAll(".overlay")
        .attr("cursor", cursors[type]);

    if (event$1.touches) {
      emit.moved = moved;
      emit.ended = ended;
    } else {
      var view = select(event$1.view)
          .on("mousemove.brush", moved, true)
          .on("mouseup.brush", ended, true);
      if (keys) view
          .on("keydown.brush", keydowned, true)
          .on("keyup.brush", keyupped, true);

      dragDisable(event$1.view);
    }

    nopropagation();
    interrupt(that);
    redraw.call(that);
    emit.start();

    function moved() {
      var point1 = pointer(that);
      if (shifting && !lockX && !lockY) {
        if (Math.abs(point1[0] - point[0]) > Math.abs(point1[1] - point[1])) lockY = true;
        else lockX = true;
      }
      point = point1;
      moving = true;
      noevent$1();
      move();
    }

    function move() {
      var t;

      dx = point[0] - point0[0];
      dy = point[1] - point0[1];

      switch (mode) {
        case MODE_SPACE:
        case MODE_DRAG: {
          if (signX) dx = Math.max(W - w0, Math.min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
          if (signY) dy = Math.max(N - n0, Math.min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
          break;
        }
        case MODE_HANDLE: {
          if (signX < 0) dx = Math.max(W - w0, Math.min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
          else if (signX > 0) dx = Math.max(W - e0, Math.min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
          if (signY < 0) dy = Math.max(N - n0, Math.min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
          else if (signY > 0) dy = Math.max(N - s0, Math.min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
          break;
        }
        case MODE_CENTER: {
          if (signX) w1 = Math.max(W, Math.min(E, w0 - dx * signX)), e1 = Math.max(W, Math.min(E, e0 + dx * signX));
          if (signY) n1 = Math.max(N, Math.min(S, n0 - dy * signY)), s1 = Math.max(N, Math.min(S, s0 + dy * signY));
          break;
        }
      }

      if (e1 < w1) {
        signX *= -1;
        t = w0, w0 = e0, e0 = t;
        t = w1, w1 = e1, e1 = t;
        if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
      }

      if (s1 < n1) {
        signY *= -1;
        t = n0, n0 = s0, s0 = t;
        t = n1, n1 = s1, s1 = t;
        if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
      }

      if (state.selection) selection = state.selection; // May be set by brush.move!
      if (lockX) w1 = selection[0][0], e1 = selection[1][0];
      if (lockY) n1 = selection[0][1], s1 = selection[1][1];

      if (selection[0][0] !== w1
          || selection[0][1] !== n1
          || selection[1][0] !== e1
          || selection[1][1] !== s1) {
        state.selection = [[w1, n1], [e1, s1]];
        redraw.call(that);
        emit.brush();
      }
    }

    function ended() {
      nopropagation();
      if (event$1.touches) {
        if (event$1.touches.length) return;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
      } else {
        yesdrag(event$1.view, moving);
        view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      }
      group.attr("pointer-events", "all");
      overlay.attr("cursor", cursors.overlay);
      if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
      if (empty$1(selection)) state.selection = null, redraw.call(that);
      emit.end();
    }

    function keydowned() {
      switch (event$1.keyCode) {
        case 16: { // SHIFT
          shifting = signX && signY;
          break;
        }
        case 18: { // ALT
          if (mode === MODE_HANDLE) {
            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
            mode = MODE_CENTER;
            move();
          }
          break;
        }
        case 32: { // SPACE; takes priority over ALT
          if (mode === MODE_HANDLE || mode === MODE_CENTER) {
            if (signX < 0) e0 = e1 - dx; else if (signX > 0) w0 = w1 - dx;
            if (signY < 0) s0 = s1 - dy; else if (signY > 0) n0 = n1 - dy;
            mode = MODE_SPACE;
            overlay.attr("cursor", cursors.selection);
            move();
          }
          break;
        }
        default: return;
      }
      noevent$1();
    }

    function keyupped() {
      switch (event$1.keyCode) {
        case 16: { // SHIFT
          if (shifting) {
            lockX = lockY = shifting = false;
            move();
          }
          break;
        }
        case 18: { // ALT
          if (mode === MODE_CENTER) {
            if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
            if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
            mode = MODE_HANDLE;
            move();
          }
          break;
        }
        case 32: { // SPACE
          if (mode === MODE_SPACE) {
            if (event$1.altKey) {
              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode = MODE_CENTER;
            } else {
              if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
              if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
              mode = MODE_HANDLE;
            }
            overlay.attr("cursor", cursors[type]);
            move();
          }
          break;
        }
        default: return;
      }
      noevent$1();
    }
  }

  function touchmoved() {
    emitter(this, arguments).moved();
  }

  function touchended() {
    emitter(this, arguments).ended();
  }

  function initialize() {
    var state = this.__brush || {selection: null};
    state.extent = number2(extent.apply(this, arguments));
    state.dim = dim;
    return state;
  }

  brush.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant$4(number2(_)), brush) : extent;
  };

  brush.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant$4(!!_), brush) : filter;
  };

  brush.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$4(!!_), brush) : touchable;
  };

  brush.handleSize = function(_) {
    return arguments.length ? (handleSize = +_, brush) : handleSize;
  };

  brush.keyModifiers = function(_) {
    return arguments.length ? (keys = !!_, brush) : keys;
  };

  brush.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? brush : value;
  };

  return brush;
}

const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const flatten = list => list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b.sort((a, b) => a - b)) : b), []);

const flatShortArray = array => {
  if (!Array.isArray(array)) return 'not-array';

  if (!Array.isArray(array[0])) {
    array = array.sort((a, b) => a - b);
  }

  const flat = flatten(array);
  return flat.map(d => d instanceof Date && d.toString() || d && d.toFixed && d.toFixed(2) || 'empty').toString();
};

const createBrush = (svgBrush, node, selectedExtent) => {
  const brush = svgBrush;
  select(node).call(brush);
  let _selectedExtent = selectedExtent;

  if (_selectedExtent) {
    if (Array.isArray(_selectedExtent[0])) {
      const sortedY = [_selectedExtent[0][1], _selectedExtent[1][1]].sort((a, b) => a - b);
      _selectedExtent = [[_selectedExtent[0][0], sortedY[0]], [_selectedExtent[1][0], sortedY[1]]];
    }

    select(node).call(brush.move, _selectedExtent);
  }
};

const Brush = props => {
  const {
    position = [0, 0],
    svgBrush,
    selectedExtent,
    extent
  } = props;
  const node = useRef$1(null);
  const {
    extent: prevExtent,
    selectedExtent: prevSelectedExtent
  } = usePrevious({
    extent,
    selectedExtent
  });
  useEffect$1(() => {
    if (prevExtent && extent && flatShortArray(prevExtent) !== flatShortArray(extent) || prevSelectedExtent && electedExtent && flatShortArray(prevSelectedExtent) !== flatShortArray(selectedExtent) || !prevSelectedExtent && selectedExtent || prevSelectedExtent && !selectedExtent) {
      createBrush(svgBrush, node, selectedExtent);
    }
  });
  return React$1__default.createElement("g", {
    transform: `translate(${position})`,
    ref: node,
    className: "xybrush"
  });
};

const generateOMappingFn = projectedColumns => d => d ? Object.values(projectedColumns).filter(c => d[1] >= c.x && d[0] <= c.x + c.width) : null;

const generateOEndMappingFn = projectedColumns => d => {
  if (d && event$1.sourceEvent && event$1.sourceEvent.path && event$1.sourceEvent.path[1] && event$1.sourceEvent.path[1].classList.contains('xybrush') && event$1.target.move) {
    const columnValues = Object.values(projectedColumns);
    const foundColumns = columnValues.filter(c => d[1] >= c.x && d[0] <= c.x + c.width);
    const firstColumn = foundColumns[0] || {
      x: 0,
      width: 0
    };
    const lastColumn = foundColumns[foundColumns.length - 1] || {
      x: 0,
      width: 0
    };
    const columnPosition = [firstColumn.x + Math.min(5, firstColumn.width / 10), lastColumn.x + lastColumn.width - Math.min(5, lastColumn.width / 10)];
    select(event$1.sourceEvent.path[1]).transition(750).call(event$1.target.move, columnPosition);
    return foundColumns;
  }

  return null;
};

const brushStart = (e, column, data, props) => {
  if (props.interaction && props.interaction.start) props.interaction.start(e, column, data);
};

const brush$1 = (e, column, data, props) => {
  if (props.interaction && props.interaction.during) props.interaction.during(e, column, data);
};

const brushEnd = (e, column, data, props) => {
  if (props.interaction && props.interaction.end) props.interaction.end(e, column, data);
};

const createBrush$1 = (interaction, props) => {
  let semioticBrush, mappingFn, selectedExtent, endMappingFn;
  const {
    xScale,
    yScale,
    size,
    renderPipeline
  } = props;
  const brushData = {};
  Object.entries(renderPipeline).forEach(([key, value]) => {
    if (value.data && value.data.length > 0) {
      brushData[key] = value.data;
    }
  });
  const {
    projection,
    projectedColumns
  } = interaction;
  const actualBrush = interaction.brush === 'oBrush' ? projection === 'horizontal' ? 'yBrush' : 'xBrush' : interaction.brush;
  const {
    extent = actualBrush === 'xyBrush' ? [[xScale.invert(0), yScale.invert(0)], [xScale.invert(size[0]), yScale.invert(size[1])]] : actualBrush === 'xBrush' ? [xScale.invert(0), xScale.invert(size[0])] : [yScale.invert(0), yScale.invert(size[1])]
  } = interaction;

  if (extent.indexOf && extent.indexOf(undefined) !== -1) {
    return React$1__default.createElement("g", null);
  }

  if (actualBrush === 'xBrush') {
    const castExtent = extent;

    mappingFn = d => !d ? null : [xScale.invert(d[0]), xScale.invert(d[1])];

    semioticBrush = brushX();
    selectedExtent = castExtent.map(d => xScale(d));
    endMappingFn = mappingFn;
  } else if (actualBrush === 'yBrush') {
    const castExtent = extent;

    mappingFn = d => !d ? null : [yScale.invert(d[0]), yScale.invert(d[1])].sort((a, b) => a - b);

    semioticBrush = brushY();
    selectedExtent = castExtent.map(d => yScale(d)).sort((a, b) => a - b);
    endMappingFn = mappingFn;
  } else {
    const castExtent = extent;

    if (castExtent.indexOf(undefined) !== -1 || castExtent[0].indexOf(undefined) !== -1 || castExtent[1].indexOf(undefined) !== -1) {
      return React$1__default.createElement("g", null);
    }

    semioticBrush = brush$1();

    mappingFn = d => {
      if (!d) return null;
      const yValues = [yScale.invert(d[0][1]), yScale.invert(d[1][1])].sort((a, b) => a - b);
      return [[xScale.invert(d[0][0]), yValues[0]], [xScale.invert(d[1][0]), yValues[1]]];
    };

    const yValues = [yScale(extent[0][1]), yScale(extent[1][1])].sort((a, b) => a - b);
    selectedExtent = castExtent.map((d, i) => [xScale(d[0]), yValues[i]]);
    endMappingFn = mappingFn;
  }

  if (interaction.brush === 'oBrush') {
    selectedExtent = null;

    if (interaction.extent) {
      const [leftExtent, rightExtent] = interaction.extent;

      if ((typeof leftExtent === 'string' || typeof leftExtent === 'number') && (typeof rightExtent === 'string' || typeof rightExtent === 'number')) {
        selectedExtent = [projectedColumns[leftExtent].x, projectedColumns[rightExtent].x + projectedColumns[rightExtent].width];
      }
    }

    mappingFn = generateOMappingFn(projectedColumns);
    endMappingFn = generateOEndMappingFn(projectedColumns);
  }

  semioticBrush.extent([[0, 0], [props.size[0], props.size[1]]]).on('start', () => brushStart(mappingFn(event$1.selection), undefined, brushData, props)).on('brush', () => brush$1(mappingFn(event$1.selection), undefined, brushData, props)).on('end', () => brushEnd(endMappingFn(event$1.selection), undefined, brushData, props));
  return React$1__default.createElement("g", {
    className: "brush"
  }, React$1__default.createElement(Brush, {
    selectedExtent: selectedExtent,
    extent: extent,
    svgBrush: semioticBrush
  }));
};

const InteractionLayer = props => {
  let interactionCanvas = null; // let interactionContext = null;
  // let canvasMap = new Map();

  const overlayRegions = calculateOverlay(props); // const generateInteractionCanvas = props => {
  //   return (
  //     <canvas
  //       className="frame-canvas-interaction"
  //       ref={canvasContext => {
  //         const newMap = {};
  //         for (const i in canvasMap) {
  //           newMap[i] = myMap[i];
  //         }
  //
  //         const boundCanvasEvent = canvasEvent.bind(
  //           null,
  //           canvasContext,
  //           overlayRegions,
  //           newMap
  //         );
  //         if (canvasContext) {
  //           canvasContext.onmousemove = e => {
  //             const overlay = boundCanvasEvent(e);
  //             if (overlay && overlay.props) {
  //               overlay.props.onMouseEnter();
  //             } else {
  //               changeVoronoi({});
  //             }
  //           };
  //           canvasContext.onclick = e => {
  //             const overlay = boundCanvasEvent(e);
  //             if (overlay && overlay.props) {
  //               overlay.props.onClick();
  //             }
  //           };
  //           canvasContext.ondblclick = e => {
  //             const overlay = boundCanvasEvent(e);
  //             if (overlay && overlay.props) {
  //               overlay.props.onDoubleClick();
  //             }
  //           };
  //         }
  //         interactionContext = canvasContext;
  //       }}
  //       style={{
  //         position: 'absolute',
  //         left: `0px`,
  //         top: `0px`,
  //         imageRendering: 'pixelated',
  //         pointerEvents: 'all',
  //         opacity: 0
  //       }}
  //       width={props.svgSize[0]}
  //       height={props.svgSize[1]}
  //     />
  //   );
  // };
  // useEffect(() => {
  //   renderCanvas({
  //     props,
  //     canvasMap,
  //     interactionCanvas,
  //     overlayRegions,
  //     interactionContext
  //   });
  // });

  let semioticBrush = null;
  const {
    interaction,
    svgSize,
    margin,
    useSpans,
    disableCanvasInteraction,
    enabled: userEnabled
  } = props;
  let enabled = userEnabled;

  if (interaction && interaction.brush) {
    enabled = true;
    semioticBrush = createBrush$1(interaction, props);
  }

  if (interaction && interaction.columnsBrush) {
    enabled = true;
    semioticBrush = createColumnsBrush(interaction, props);
  }

  if (!overlayRegions && !semioticBrush) {
    return null;
  }

  const _interactionCanvas = !disableCanvasInteraction && overlayRegions && interactionCanvas;

  return React$1__default.createElement(SpanOrDiv, {
    span: useSpans,
    className: "interaction-layer",
    style: {
      position: 'absolute',
      background: 'none',
      pointerEvents: 'none'
    }
  }, _interactionCanvas || React$1__default.createElement("svg", {
    height: svgSize[1],
    width: svgSize[0],
    style: {
      background: 'none',
      pointerEvents: 'none'
    }
  }, React$1__default.createElement("g", {
    className: "interaction-overlay",
    transform: `translate(${margin.left},${margin.top})`,
    style: {
      pointerEvents: enabled ? 'all' : 'none'
    }
  }, React$1__default.createElement("g", {
    className: "interaction-regions"
  }, overlayRegions), semioticBrush)));
};

InteractionLayer.propTypes = {
  name: propTypes.string,
  interaction: propTypes.object,
  overlay: propTypes.array,
  oColumns: propTypes.object,
  xScale: propTypes.func,
  yScale: propTypes.func,
  rScale: propTypes.func,
  svgSize: propTypes.array,
  hoverAnnotation: propTypes.oneOfType([propTypes.bool, propTypes.object, propTypes.array, propTypes.func]),
  interactionOverflow: propTypes.object,
  size: propTypes.arrayOf(propTypes.number),
  position: propTypes.arrayOf(propTypes.number),
  enabled: propTypes.bool,
  useSpans: propTypes.bool,
  margin: propTypes.object,
  customDoubleClickBehavior: propTypes.func,
  customClickBehavior: propTypes.func,
  customHoverBehavior: propTypes.func,
  voronoiHover: propTypes.func,
  disableCanvasInteraction: propTypes.bool
};
InteractionLayer.defaultProps = {
  svgSize: [500, 500],
  useSpans: false
};

const getAdjustedPositionSize = ({
  size = [500, 500],
  position = [0, 0],
  margin,
  projection
}) => {
  const heightAdjust = margin.top + margin.bottom;
  const widthAdjust = margin.left + margin.right;
  const adjustedPosition = [position[0], position[1]];
  let adjustedSize = [size[0] - widthAdjust, size[1] - heightAdjust];

  if (projection === 'radial') {
    const minSize = Math.min(adjustedSize[0], adjustedSize[1]);
    adjustedSize = [minSize, minSize];
  }

  return {
    adjustedPosition,
    adjustedSize
  };
};

const drawMarginPath = ({
  margin,
  size,
  inset = 0
}) => {
  const iSize = [size[0] - inset, size[1] - inset];
  return `M0,0 h${size[0]} v${size[1]} h-${size[0]}Z M${margin.left - inset},${margin.top - inset} v${size[1] + inset * 2 - margin.top - margin.bottom} h${iSize[0] + inset * 3 - margin.left - margin.right} v-${iSize[1] + inset * 3 - margin.top - margin.bottom}Z`;
};

const toMarginGraphic = ({
  matte,
  size,
  margin,
  name
}) => {
  let marginGraphic = null;

  if (typeof matte === 'function') {
    marginGraphic = matte({
      size,
      margin
    });
  } else if (React$1__default.isValidElement(matte)) {
    marginGraphic = matte;
  } else if (matte === true) {
    marginGraphic = React$1__default.createElement("path", {
      fill: "white",
      transform: `translate(${-margin.left},${-margin.top})`,
      d: drawMarginPath({
        margin,
        size,
        inset: 0
      }),
      className: `${name}-matte`
    });
  }

  return marginGraphic;
};

const generateFrameTitle = ({
  title: rawTitle = {
    title: '',
    orient: 'top'
  },
  size
}) => {
  let finalTitle = null;
  const {
    title,
    orient = 'top'
  } = rawTitle;
  let x = 0,
      y = 0,
      transform;

  switch (orient) {
    case 'top':
      x = size[0] / 2;
      y = 25;
      break;

    case 'bottom':
      x = size[0] / 2;
      y = size[1] - 25;
      break;

    case 'left':
      x = 25;
      y = size[1] / 2;
      transform = 'rotate(-90)';
      break;

    case 'right':
      x = size[0] - 25;
      y = size[1] / 2;
      transform = 'rotate(90)';
      break;
  }

  const gTransform = `translate(${x},${y})`;

  if (typeof title === 'string' && title.length > 0) {
    finalTitle = React$1__default.createElement("g", {
      transform: gTransform
    }, React$1__default.createElement("text", {
      className: 'frame-title',
      transform: transform,
      style: {
        textAnchor: 'middle',
        pointerEvents: 'none'
      }
    }, title));
  } else if (title) {
    //assume if defined then its an svg mark of some sort
    finalTitle = React$1__default.createElement("g", {
      transform: gTransform
    }, title);
  }

  return finalTitle;
};

const extentValue = extent => extent && extent.extent || Array.isArray(extent) && extent || [];

const getExtent = ({
  data,
  xExtent,
  yExtent,
  xAccessor,
  yAccessor
}) => {
  const calculatedXExtent = extent(data, xAccessor);
  const calculatedYExtent = extent(data, yAccessor);
  const userDefinedXExtent = extentValue(xExtent);
  const userDefinedYExtent = extentValue(yExtent);
  const xMin = userDefinedXExtent && userDefinedXExtent[0] !== undefined ? userDefinedXExtent[0] : calculatedXExtent[0];
  const xMax = userDefinedXExtent && userDefinedXExtent[1] !== undefined ? userDefinedXExtent[1] : calculatedXExtent[1];
  const yMin = userDefinedYExtent && userDefinedYExtent[0] !== undefined ? userDefinedYExtent[0] : calculatedYExtent[0];
  const yMax = userDefinedYExtent && userDefinedYExtent[1] !== undefined ? userDefinedYExtent[1] : calculatedYExtent[1];
  const finalYExtent = [yMin, yMax];
  const finalXExtent = [xMin, xMax];
  return {
    finalYExtent,
    finalXExtent
  };
};

const toRenderedAreas = ({
  data,
  xScale,
  yScale,
  useCanvas,
  styleFn = () => ({}),
  classFn = () => '',
  renderKeyFn,
  renderFn,
  customMark
}) => {
  const canvasPipeline = [];
  const svgPipeline = [];
  const svgPipe = [];
  data.forEach((d, i) => {
    let drawD = '';
    let shouldBeValid = false;

    if (d.customMark) {
      drawD = d.customMark;
      shouldBeValid = true;
    } else if (d.type === 'MultiPolygon') {
      d.coordinates.forEach(coord => {
        coord.forEach(c => {
          drawD += `M${c.map(p => `${xScale(p[0])},${yScale(p[1])}`).join('L')}Z `;
        });
      });
    } else if (customMark) {
      const projectedCoordinates = d._xyCoordinates.map(p => [xScale(p[0]), yScale(p[1])]);

      drawD = customMark({
        d,
        projectedCoordinates,
        xScale,
        yScale,
        bounds: shapeBounds(projectedCoordinates)
      });
      shouldBeValid = true;
    } else {
      drawD = `M${d._xyCoordinates.map(p => `${xScale(p[0])},${yScale(p[1])}`).join('L')}Z`;
    }

    const renderKey = renderKeyFn ? renderKeyFn(d, i) : `area-${i}`;
    const className = classFn ? `xyframe-area ${classFn(d)}` : 'xyframe-area';

    if (shouldBeValid && React$1__default.isValidElement(drawD)) {
      renderedAreas.push(drawD);
    } else if (useCanvas === true) {
      const canvasPipe = {
        type: 'area',
        baseClass: 'xyframe-area',
        tx: 0,
        ty: 0,
        d,
        i,
        markProps: {
          markType: 'path',
          d: drawD
        },
        styleFn,
        renderFn,
        classFn: () => className
      };
      canvasPipeline.push(canvasPipe);
    } else {
      svgPipe.push(React$1__default.createElement(lib_1, {
        key: renderKey,
        forceUpdate: true,
        renderMode: renderFn ? renderFn(d, i) : undefined,
        className: className,
        markType: "path",
        d: drawD,
        style: styleFn(d, i)
      }));
    }
  });

  if (useCanvas === false) {
    svgPipeline.push(React$1__default.createElement("g", {
      key: 'area',
      className: 'area',
      role: 'group',
      tabIndex: 0
    }, svgPipe));
  }

  return {
    svgPipeline,
    canvasPipeline
  };
};

const clonedAppliedElement = ({
  tx,
  ty,
  d,
  i,
  markProps,
  styleFn,
  renderFn,
  classFn,
  renderKeyFn,
  baseClass,
  yi
}) => {
  markProps.style = styleFn ? styleFn(d, i, yi) : {};
  markProps.className = baseClass;
  markProps.key = renderKeyFn ? renderKeyFn(d, i, yi) : `${baseClass}-${d.key === undefined ? i : d.key}`;

  if (tx || ty) {
    markProps.transform = `translate(${tx || 0},${ty || 0})`;
  }

  if (classFn) {
    markProps.className = `${baseClass} ${classFn(d, i, yi)}`;
  }

  if (!markProps.markType) {
    const RenderableMark = markProps;
    return React$1__default.createElement(RenderableMark);
  }

  markProps.renderMode = renderFn ? renderFn(d, i, yi) : undefined;
  return React$1__default.createElement(lib_1, markProps);
};

const projectedX = 'x';
const projectedY = 'y';
const projectedYMiddle = 'yMiddle';
const projectedYTop = 'yTop';
const projectedYBottom = 'yBottom';
const projectedXMiddle = 'xMiddle';

const toRenderedPoints = ({
  xScale,
  yScale,
  data,
  customMark,
  useCanvas,
  styleFn,
  classFn,
  renderKeyFn,
  renderMode,
  baseMarkProps
}) => {
  const x = projectedX;
  const y = projectedY;
  const xMiddle = projectedXMiddle;
  const yMiddle = projectedYMiddle;
  const canvasPipeline = [];
  const svgPipeline = [];
  data.forEach((d, i) => {
    const dX = xScale(d[xMiddle] || d[x]);
    const dY = yScale(d[yMiddle] || d[y]);
    const pointAriaLabel = `Point at x ${d.x} and y ${d.y}`;
    const renderedCustomMark = !customMark ? undefined : React.isValidElement(customMark) ? customMark : customMark({
      d: d.data,
      xy: d,
      i,
      xScale,
      yScale
    });
    const markProps = customMark ? Object.assign(baseMarkProps, renderedCustomMark.props, {
      'aria-label': pointAriaLabel
    }) : { ...baseMarkProps,
      key: `piece-${i}`,
      markType: 'circle',
      r: 2,
      'aria-label': pointAriaLabel
    };

    if (renderedCustomMark && renderedCustomMark.props && !renderedCustomMark.props.markType && useCanvas !== true) {
      svgPipeline.push(React.createElement("g", {
        transform: `translate(${dX},${dY})`,
        key: renderKeyFn ? renderKeyFn(d.data, i) : `custom-point-mark-${i}`,
        style: styleFn ? styleFn(d.data, i) : {},
        className: classFn ? classFn(d.data, i) : ''
      }, renderedCustomMark));
    } else {
      if (useCanvas === true) {
        const canvasPoint = {
          type: 'point',
          baseClass: 'frame-piece',
          tx: dX,
          ty: dY,
          d,
          i,
          markProps,
          styleFn,
          renderFn: renderMode,
          classFn
        };
        canvasPipeline.push(canvasPoint);
      } else {
        const yCoordinates = Array.isArray(d[y]) ? d[y].map(p => yScale(p)) : [dY];
        yCoordinates.forEach((yc, yi) => {
          const xCoordinates = Array.isArray(d[x]) ? d[x].map(p => xScale(p)) : [dX];
          xCoordinates.forEach((xc, xi) => {
            svgPipeline.push(clonedAppliedElement({
              baseClass: 'frame-piece',
              tx: xc,
              ty: yc,
              d: d.data && { ...d,
                ...d.data
              } || d,
              i: yi === 0 && xi === 0 ? i : `${i}-${yi}-${xi}`,
              markProps,
              styleFn,
              renderFn: renderMode,
              renderKeyFn,
              classFn,
              yi
            }));
          });
        });
      }
    }
  });
  return {
    svgPipeline,
    canvasPipeline
  };
};

var pi = Math.PI,
    tau = 2 * pi,
    epsilon$1 = 1e-6,
    tauEpsilon = tau - epsilon$1;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path$1() {
  return new Path;
}

Path.prototype = path$1.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon$1));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$1) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon$1) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon$1 || Math.abs(this._y1 - y0) > epsilon$1) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon$1) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

function constant$5(x) {
  return function constant() {
    return x;
  };
}

var epsilon$2 = 1e-12;

function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

function curveLinear(context) {
  return new Linear(context);
}

function x$1(p) {
  return p[0];
}

function y$1(p) {
  return p[1];
}

function line() {
  var x = x$1,
      y = y$1,
      defined = constant$5(true),
      context = null,
      curve = curveLinear,
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = path$1());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : constant$5(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : constant$5(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$5(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
}

function area() {
  var x0 = x$1,
      x1 = null,
      y0 = constant$5(0),
      y1 = y$1,
      defined = constant$5(true),
      context = null,
      curve = curveLinear,
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = path$1());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return line().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$5(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$5(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant$5(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$5(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$5(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant$5(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$5(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
}

function point$1(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point$1(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point$1(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function curveBasis(context) {
  return new Basis(context);
}

function point$2(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point$2(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point$2(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var curveCardinal = (function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0);

function point$3(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > epsilon$2) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > epsilon$2) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point$3(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var curveCatmullRom = (function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5);

function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point$4(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point$4(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point$4(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point$4(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
};

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}

function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

function curveNatural(context) {
  return new Natural(context);
}

function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

function curveStep(context) {
  return new Step(context, 0.5);
}

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}

const curveHash = {
  step: curveStep,
  stepbefore: stepBefore,
  stepafter: stepAfter,
  cardinal: curveCardinal,
  basis: curveBasis,
  linear: curveLinear,
  catmullrom: curveCatmullRom,
  monotone: monotoneY,
  monotonex: monotoneX,
  monotoney: monotoneY,
  natural: curveNatural
};
function lineGeneratorDecorator({
  generator,
  defined,
  xScale,
  yScale,
  interpolator,
  simpleLine
}) {
  const x = projectedX;
  const y = projectedY;
  const yTop = projectedYTop;
  const yBottom = projectedYBottom;
  generator.x(d => xScale(d[x])).curve(interpolator);

  if (simpleLine) {
    generator.y(d => yScale(d[y]));
  } else {
    generator.y0(d => yScale(d[yBottom])).y1(d => yScale(d[yTop]));
  }

  if (defined) {
    generator.defined((p, q) => defined(p, q));
  } else {
    generator.defined(p => !p._xyFrameUndefined);
  }
}

const toRenderedLines = ({
  xScale,
  yScale,
  data,
  customMark,
  useCanvas,
  styleFn,
  classFn,
  renderMode,
  renderKeyFn,
  type,
  defined,
  baseMarkProps,
  ariaLabel,
  axesData = []
}) => {
  const canvasPipeline = [];
  const svgPipeline = [];
  const xAxis = axesData.find(d => d.orient === 'bottom' || d.orient === 'top');
  const yAxis = axesData.find(d => d.orient === 'left' || d.orient === 'right');

  const xAxisFormatter = xAxis && xAxis.tickFormat || (d => d);

  const yAxisFormatter = yAxis && yAxis.tickFormat || (d => d);

  const customLine = typeof type === 'object' ? type : {
    type
  };
  const interpolator = typeof customLine.interpolator === 'string' ? curveHash[customLine.interpolator] : customLine.interpolator || curveLinear;
  const lineGenerator = customLine.simpleLine ? line() : area();
  lineGeneratorDecorator({
    defined,
    interpolator,
    generator: lineGenerator,
    xScale,
    yScale,
    simpleLine: customLine.simpleLine
  });

  const dynamicLineGenerator = interpolator.dynamicInterpolator && ((d, i) => {
    const dynLineGenerator = area();
    lineGeneratorDecorator({
      defined,
      interpolator: interpolator.dynamicInterpolator(d, i),
      generator: dynLineGenerator,
      xScale,
      yScale,
      simpleLine: customLine.simpleLine
    });
    return dynLineGenerator;
  }) || (() => lineGenerator);

  data.forEach((d, i) => {
    if (customMark && typeof customMark === 'function') {
      //shim to make customLineMark work until Semiotic 2
      const compatibleData = { ...d,
        data: d.data.map(p => ({ ...p.data,
          ...p
        }))
      };
      svgPipeline.push(customMark({
        d: compatibleData,
        i,
        xScale,
        yScale,
        canvasPipeline
      }));
    } else {
      const builtInDisplayProps = {};

      if (customLine.simpleLine) {
        builtInDisplayProps.fill = 'none';
        builtInDisplayProps.stroke = 'black';
      }

      let pathString = dynamicLineGenerator(d, i)(d._xyCoordinates.map(p => Object.assign({}, p._data, p)));

      if (pathString && (!customLine.interpolator || interpolator === curveLinear)) {
        //FIX FOR CHROME STRAIGHT LINE BUG
        const splitPath = pathString.split('L').map(d => d.split(','));

        if (splitPath.length > 1) {
          splitPath[0][1] = parseFloat(splitPath[0][1]).toFixed(2);
        }

        pathString = splitPath.map(d => d.join(',')).join('L');
      }

      const markProps = { ...builtInDisplayProps,
        ...baseMarkProps,
        markType: 'path',
        d: pathString,
        'aria-label': d.data && d.data.length > 0 && `${d.data.length} point ${ariaLabel.items} starting value ${yAxisFormatter(d.data[0].y)} at ${xAxisFormatter(d.data[0].x)} ending value ${yAxisFormatter(d.data[d.data.length - 1].y)} at ${xAxisFormatter(d.data[d.data.length - 1].x)}`
      };

      if (useCanvas === true) {
        const canvasLine = {
          type: 'line',
          baseClass: 'xyframe-line',
          tx: 0,
          ty: 0,
          d,
          i,
          markProps,
          styleFn,
          renderFn: renderMode,
          classFn
        };
        canvasPipeline.push(canvasLine);
      } else {
        svgPipeline.push(clonedAppliedElement({
          baseClass: 'xyframe-line',
          d,
          i,
          markProps,
          styleFn,
          renderFn: renderMode,
          renderKeyFn,
          classFn
        }));
      }
    }
  });

  if (customLine.type === 'difference' && data.length === 2) {
    //Create the overlay line for the difference chart
    const diffdataA = data[0].data.map((basedata, baseI) => {
      const linePoint = basedata.yTop > data[1].data[baseI].yTop ? basedata.yTop : basedata.yBottom;
      return {
        x: basedata.x,
        y: linePoint,
        yBottom: linePoint,
        yTop: linePoint
      };
    });
    const diffdataB = data[0].data.map((basedata, baseI) => {
      const linePoint = data[1].data[baseI].yTop > basedata.yTop ? data[1].data[baseI].yTop : data[1].data[baseI].yBottom;
      return {
        x: basedata.x,
        y: linePoint,
        yBottom: linePoint,
        yTop: linePoint
      };
    });
    const doClassname = classFn ? `xyframe-line ${classFn(diffdataA)}` : 'xyframe-line';
    const overLine = line();
    lineGeneratorDecorator({
      defined,
      interpolator,
      generator: overLine,
      xScale,
      yScale,
      simpleLine: true
    }); //      let baseStyle = props.lineStyle ? props.lineStyle(diffdata, 0) : {}

    const diffOverlayA = React.createElement(Mark, {
      key: 'xyline-diff-a',
      className: `${doClassname} difference-overlay-a`,
      markType: "path",
      d: overLine(diffdataA),
      style: {
        fill: 'none',
        pointerEvents: 'none'
      }
    });
    svgPipeline.push(diffOverlayA);
    const diffOverlayB = React.createElement(Mark, {
      key: 'xyline-diff-b',
      className: `${doClassname} difference-overlay-b`,
      markType: "path",
      d: overLine(diffdataB),
      style: {
        fill: 'none',
        pointerEvents: 'none'
      }
    });
    svgPipeline.push(diffOverlayB);
  }

  return {
    svgPipeline,
    canvasPipeline
  };
};

const stringToFn = (accessor, defaultAccessor, raw) => {
  if (!accessor && defaultAccessor) {
    return defaultAccessor;
  } else if (typeof accessor !== 'function' && raw !== undefined) {
    return () => accessor;
  }

  return typeof accessor === 'function' ? accessor : d => d[accessor];
};

const emptyObjectReturnFunction = () => ({});

const emptyStringReturnFunction = () => '';

const toPipeline = props => {
  const {
    projection,
    ...rest
  } = props;
  const {
    data,
    lineStyle,
    lineClass,
    lineCustomMarks,
    lineRenderMode,
    areaStyle,
    areaClass,
    areaRenderMode,
    areaCustomMarks,
    pointStyle,
    pointClass,
    pointCustomMarks,
    pointRenderMode,
    areaUseCanvas,
    lineUseCanvas,
    pointUseCanvas,
    xAccessor,
    yAccessor,
    xExtent,
    yExtent,
    frameXScale: xScale,
    frameYScale: yScale
  } = props; // extents

  const {
    finalXExtent,
    finalYExtent
  } = getExtent({
    data,
    xAccessor,
    yAccessor,
    xExtent,
    yExtent
  });
  const {
    projectedLines,
    projectedAreas,
    projectedPoints
  } = projection({
    finalXExtent,
    finalYExtent,
    ...rest
  });
  console.log(projectedPoints);
  const {
    svgPipeline: lineSvg,
    canvasPipeline: lineCanvas
  } = toRenderedLines({
    useCanvas: lineUseCanvas,
    xScale,
    yScale,
    styleFn: stringToFn(lineStyle, emptyObjectReturnFunction, true),
    classFn: stringToFn(lineClass, emptyStringReturnFunction, true),
    renderFn: stringToFn(lineRenderMode, undefined, true),
    customMarks: lineCustomMarks,
    data: projectedLines
  });
  const {
    svgPipeline: areaSvg,
    canvasPipeline: areaCanvas
  } = toRenderedAreas({
    useCanvas: areaUseCanvas,
    xScale,
    yScale,
    styleFn: stringToFn(areaStyle, emptyObjectReturnFunction, true),
    classFn: stringToFn(areaClass, emptyStringReturnFunction, true),
    renderFn: stringToFn(areaRenderMode, undefined, true),
    customMarks: areaCustomMarks,
    data: projectedAreas
  });
  const {
    svgPipeline: pointsSvg,
    canvasPipeline: pointsCanvas
  } = toRenderedPoints({
    useCanvas: pointUseCanvas,
    xScale,
    yScale,
    styleFn: stringToFn(pointStyle, emptyObjectReturnFunction, true),
    classFn: stringToFn(pointClass, emptyStringReturnFunction, true),
    renderFn: stringToFn(pointRenderMode, undefined, true),
    customMarks: pointCustomMarks,
    data: projectedPoints
  });
  console.log(pointsSvg);
  const svgPipe = [...areaSvg, ...lineSvg, ...pointsSvg];
  const canvasPipe = [...areaCanvas, ...lineCanvas, ...pointsCanvas];
  return {
    svgPipe,
    canvasPipe
  };
};

const defaultTickLineGenerator = ({
  xy,
  orient,
  i,
  baseMarkProps,
  className = ''
}) => createElement(lib_1, _extends({
  key: i,
  markType: "path",
  renderMode: xy.renderMode,
  stroke: "black",
  strokeWidth: "1px",
  simpleInterpolate: true,
  d: `M${xy.x1},${xy.y1}L${xy.x2},${xy.y2}`,
  className: `tick-line tick ${orient} ${className}`
}, baseMarkProps));

function generateTickValues(tickValues, ticks, scale) {
  const axisSize = Math.abs(scale.range()[1] - scale.range()[0]);

  if (!tickValues) {
    if (!ticks) {
      ticks = Math.max(1, Math.floor(axisSize / 40));
    }

    tickValues = scale.ticks(ticks);
  }

  return tickValues;
}
function axisPieces({
  renderMode = () => undefined,
  padding = 5,
  scale,
  ticks,
  tickValues = generateTickValues(undefined, ticks, scale),
  orient = 'left',
  size,
  footer = false,
  tickSize = footer ? -10 : ['top', 'bottom'].find(d => d === orient) ? size[1] : size[0]
}) {
  //returns x1 (start of line), x2 (end of line) associated with the value of the tick
  let axisDomain = [],
      position1,
      position2,
      domain1,
      domain2,
      tposition1,
      tposition2,
      textPositionMod = 0,
      textPositionMod2 = 0,
      defaultAnchor = 'middle';

  switch (orient) {
    case 'top':
      position1 = 'x1';
      position2 = 'x2';
      domain1 = 'y1';
      domain2 = 'y2';
      axisDomain = [0, tickSize];
      tposition1 = 'tx';
      tposition2 = 'ty';
      textPositionMod -= 20 - padding;
      break;

    case 'bottom':
      position1 = 'x1';
      position2 = 'x2';
      domain1 = 'y2';
      domain2 = 'y1';
      axisDomain = [size[1], size[1] - tickSize];
      tposition1 = 'tx';
      tposition2 = 'ty';
      textPositionMod += 20 + padding;
      break;

    case 'right':
      position1 = 'y2';
      position2 = 'y1';
      domain1 = 'x2';
      domain2 = 'x1';
      axisDomain = [size[0], size[0] - tickSize];
      tposition1 = 'ty';
      tposition2 = 'tx';
      textPositionMod += 5 + padding;
      textPositionMod2 += 5;
      defaultAnchor = 'start';
      break;
    //left

    default:
      position1 = 'y1';
      position2 = 'y2';
      domain1 = 'x1';
      domain2 = 'x2';
      axisDomain = [0, tickSize];
      tposition1 = 'ty';
      tposition2 = 'tx';
      textPositionMod -= 5 + padding;
      textPositionMod2 += 5;
      defaultAnchor = 'end';
      break;
  }

  const generatedTicks = tickValues instanceof Function ? tickValues({
    orient
  }) : tickValues;
  return generatedTicks.map((tick, i) => {
    const tickPosition = scale(tick);
    return {
      [position1]: tickPosition,
      [position2]: tickPosition,
      [domain1]: axisDomain[0],
      [domain2]: axisDomain[1],
      [tposition1]: tickPosition + textPositionMod2,
      [tposition2]: axisDomain[0] + textPositionMod,
      defaultAnchor,
      renderMode: renderMode(tick, i),
      value: tick
    };
  });
}
const axisLabels = ({
  axisParts,
  tickFormat,
  rotate = 0,
  center = false,
  orient
}) => {
  return axisParts.map((axisPart, i) => {
    let renderedValue = tickFormat(axisPart.value, i);

    if (typeof renderedValue !== 'object' || renderedValue instanceof Date) {
      renderedValue = createElement("text", {
        textAnchor: axisPart.defaultAnchor,
        className: "axis-label"
      }, renderedValue.toString ? renderedValue.toString() : renderedValue);
    }

    let textX = axisPart.tx;
    let textY = axisPart.ty;

    if (center) {
      switch (orient) {
        case 'right':
          textX -= (axisPart.x2 - axisPart.x1) / 2;
          break;

        case 'left':
          textX += (axisPart.x2 - axisPart.x1) / 2;
          break;

        case 'top':
          textY += (axisPart.y2 - axisPart.y1) / 2;
          break;

        case 'bottom':
          textY -= (axisPart.y2 - axisPart.y1) / 2;
          break;
      }
    }

    return createElement("g", {
      key: i,
      pointerEvents: "none",
      transform: `translate(${textX},${textY}) rotate(${rotate})`,
      className: "axis-label"
    }, renderedValue);
  });
};
const axisLines = ({
  axisParts,
  orient,
  tickLineGenerator = defaultTickLineGenerator,
  baseMarkProps,
  className
}) => {
  return axisParts.map((axisPart, i) => tickLineGenerator({
    xy: axisPart,
    orient,
    i,
    baseMarkProps,
    className
  }));
};

const ORIENTATIONS = ['top', 'bottom', 'left', 'right'];

const formatValue = (value, props) => {
  if (props.tickFormat) {
    return props.tickFormat(value);
  }

  if (value.toString) {
    return value.toString();
  }

  return value;
};

const Axis = props => {
  const [hoverAnnotation, setHoverAnnotation] = useState(0);
  const [calculatedLabelPosition, setCalculatedLabelPosition] = useState(null);
  let axisRef = null;

  const boundingBoxMax = () => {
    // && this.props.dynamicLabel ???
    if (!axisRef) return 30;
    const {
      orient = 'left'
    } = props;
    const positionType = orient === 'left' || orient === 'right' ? 'width' : 'height';
    return Math.max(...[...axisRef.querySelectorAll('.axis-label')].map(l => l.getBBox && l.getBBox() || {
      height: 30,
      width: 30
    }).map(d => d[positionType])) + 25;
  };

  useEffect$1(() => {
    const {
      label,
      dynamicLabelPosition
    } = props;

    if (!label.position && dynamicLabelPosition) {
      const newBBMax = boundingBoxMax();

      if (newBBMax !== calculatedLabelPosition) {
        setCalculatedLabelPosition(newBBMax);
      }
    }
  });
  const {
    rotate,
    label,
    orient,
    tickFormat,
    size,
    width,
    height,
    className,
    padding,
    tickValues,
    scale,
    ticks,
    footer,
    tickSize,
    tickLineGenerator,
    baseline,
    margin,
    center,
    annotationFunction,
    glyphFunction
  } = props;
  let {
    axisParts,
    position = [0, 0]
  } = props;
  let axisTickLines;

  if (!axisParts) {
    axisParts = axisPieces({
      padding: padding,
      tickValues,
      scale,
      ticks,
      orient,
      size: [width, height],
      footer,
      tickSize
    });
    axisTickLines = React$1__default.createElement("g", {
      className: `axis ${className}`
    }, axisLines({
      axisParts,
      orient,
      tickLineGenerator,
      className
    }));
  }

  if (axisParts.length === 0) {
    return null;
  }

  let hoverWidth = 50;
  let hoverHeight = height;
  let hoverX = -50;
  let hoverY = 0;
  let baselineX = 0;
  let baselineY = 0;
  let baselineX2 = 0;
  let baselineY2 = height;

  let hoverFunction = e => setHoverAnnotation(e.nativeEvent.offsetY);

  let circleX = 25;
  let textX = -25;
  let textY = 18;
  let lineWidth = width + 25;
  let lineHeight = 0;
  let circleY = hoverAnnotation;
  let annotationOffset = 0;
  let annotationType = 'y';

  switch (orient) {
    case 'right':
      position = [position[0], position[1]];
      hoverX = width;
      baselineX2 = baselineX = width;
      annotationOffset = margin.top;
      lineWidth = -width - 25;
      textX = 5;

      hoverFunction = e => setHoverAnnotation(e.nativeEvent.offsetY - annotationOffset);

      if (center === true) {
        baselineX2 = baselineX = width / 2;
      }

      break;

    case 'top':
      position = [position[0], 0];
      hoverWidth = width;
      hoverHeight = 50;
      hoverY = -50;
      hoverX = 0;
      annotationOffset = margin.left;
      annotationType = 'x';
      baselineX2 = width;
      baselineY2 = 0;

      if (center === true) {
        baselineY2 = baselineY = height / 2;
      }

      hoverFunction = e => setHoverAnnotation(e.nativeEvent.offsetX - annotationOffset);

      circleX = hoverAnnotation;
      circleY = 25;
      textX = 0;
      textY = -10;
      lineWidth = 0;
      lineHeight = height + 25;
      break;

    case 'bottom':
      position = [position[0], 0];
      hoverWidth = width;
      hoverHeight = 50;
      baselineY = baselineY2 = hoverY = height;
      baselineX = hoverX = 0;
      baselineX2 = width;
      annotationOffset = margin.left;

      hoverFunction = e => setHoverAnnotation(e.nativeEvent.offsetX - annotationOffset);

      circleX = hoverAnnotation;
      circleY = 25;
      textX = 0;
      textY = 15;
      lineWidth = 0;
      lineHeight = -height - 25;
      annotationType = 'x';

      if (center === true) {
        baselineY2 = baselineY = height / 2;
      }

      break;

    default:
      position = [position[0], position[1]];
      annotationOffset = margin.top;

      if (center === true) {
        baselineX2 = baselineX = width / 2;
      }

      hoverFunction = e => setHoverAnnotation(e.nativeEvent.offsetY - annotationOffset);

  }

  let annotationBrush;

  if (annotationFunction) {
    const formattedValue = formatValue(scale.invert(hoverAnnotation), props);
    const hoverGlyph = glyphFunction ? glyphFunction({
      lineHeight,
      lineWidth,
      value: scale.invert(hoverAnnotation)
    }) : React$1__default.createElement("g", null, React$1__default.isValidElement(formattedValue) ? React$1__default.createElement("g", {
      transform: `translate(${textX},${textY})`
    }, formattedValue) : React$1__default.createElement("text", {
      x: textX,
      y: textY
    }, formattedValue), React$1__default.createElement("circle", {
      r: 5
    }), React$1__default.createElement("line", {
      x1: lineWidth,
      y1: lineHeight,
      style: {
        stroke: 'black'
      }
    }));
    const annotationSymbol = hoverAnnotation ? React$1__default.createElement("g", {
      style: {
        pointerEvents: 'none'
      },
      transform: `translate(${circleX},${circleY})`
    }, hoverGlyph) : null;
    annotationBrush = React$1__default.createElement("g", {
      className: "annotation-brush",
      transform: `translate(${hoverX},${hoverY})`
    }, React$1__default.createElement("rect", {
      style: {
        fillOpacity: 0
      },
      height: hoverHeight,
      width: hoverWidth,
      onMouseMove: hoverFunction,
      onClick: () => annotationFunction({
        className: 'dynamic-axis-annotation',
        type: annotationType,
        value: scale.invert(hoverAnnotation)
      }),
      onMouseOut: () => setHoverAnnotation(undefined)
    }), annotationSymbol);
  }

  let axisTitle;
  const axisTickLabels = axisLabels({
    tickFormat,
    axisParts,
    orient,
    rotate,
    center
  });

  if (label) {
    const labelName = label.name || label;
    const labelPosition = label.position || {};
    const locationMod = labelPosition.location || 'outside';
    let anchorMod = labelPosition.anchor || 'middle';
    const distance = label.locationDistance || calculatedLabelPosition;
    const rotateHash = {
      left: -90,
      right: 90,
      top: 0,
      bottom: 0
    };
    const rotation = labelPosition.rotation || rotateHash[orient];
    const positionHash = {
      left: {
        start: [0, size[1]],
        middle: [0, size[1] / 2],
        end: [0, 0],
        inside: [distance || 15, 0],
        outside: [-(distance || 45), 0]
      },
      right: {
        start: [size[0] + 0, size[1]],
        middle: [size[0] + 0, size[1] / 2],
        end: [size[0] + 0, 0],
        inside: [-(distance || 15), 0],
        outside: [distance || 45, 0]
      },
      top: {
        start: [0, 0],
        middle: [0 + size[0] / 2, 0],
        end: [0 + size[0], 0],
        inside: [0, distance || 15],
        outside: [0, -(distance || 40)]
      },
      bottom: {
        start: [0, size[1]],
        middle: [0 + size[0] / 2, size[1]],
        end: [0 + size[0], size[1]],
        inside: [0, -(distance || 5)],
        outside: [0, distance || 50]
      }
    };
    const translation = positionHash[orient][anchorMod];
    const location = positionHash[orient][locationMod];
    translation[0] = translation[0] + location[0];
    translation[1] = translation[1] + location[1];

    if (anchorMod === 'start' && orient === 'right') {
      anchorMod = 'end';
    } else if (anchorMod === 'end' && orient === 'right') {
      anchorMod = 'start';
    }

    axisTitle = React$1__default.createElement("g", {
      className: `axis-title ${className}`,
      transform: `translate(${[translation[0] + position[0], translation[1] + position[1]]}) rotate(${rotation})`
    }, React$1__default.isValidElement(labelName) ? labelName : React$1__default.createElement("text", {
      textAnchor: anchorMod
    }, labelName));
  }

  const axisAriaLabel = `${orient} axis ${axisParts && axisParts.length > 0 && `from ${tickFormat(axisParts[0].value, 0)} to ${tickFormat(axisParts[axisParts.length - 1].value, axisParts.length - 1)}` || 'without ticks'}`;
  return React$1__default.createElement("g", {
    className: className,
    "aria-label": axisAriaLabel,
    ref: node => axisRef = node
  }, annotationBrush, axisTickLabels, axisTickLines, baseline ? React$1__default.createElement("line", {
    key: "baseline",
    className: `axis-baseline ${className}`,
    stroke: "black",
    strokeLinecap: "square",
    x1: baselineX,
    x2: baselineX2,
    y1: baselineY,
    y2: baselineY2
  }) : null, axisTitle);
};

Axis.propTypes = {
  orient: propTypes.oneOf(ORIENTATIONS),
  size: propTypes.array,
  footer: propTypes.bool,
  tickSize: propTypes.number,
  baseline: propTypes.bool,
  center: propTypes.bool,
  glyphFunction: propTypes.func,
  label: propTypes.oneOfType([propTypes.string, propTypes.object]),
  tickValues: propTypes.array,
  ticks: propTypes.number,
  tickFormat: propTypes.func,
  tickLineGenerator: propTypes.func,
  rotate: propTypes.number,
  padding: propTypes.number,
  scale: propTypes.func,
  annotationFunction: propTypes.func,
  className: propTypes.string,
  margin: propTypes.object,
  name: propTypes.string
};
Axis.defaultProps = {
  rotate: 0,
  label: {
    position: false
  },
  tickFormat: d => d,
  size: null,
  className: '',
  padding: 0,
  tickValues: null,
  scale: null,
  ticks: null,
  footer: false,
  tickSize: -10,
  tickLineGenerator: null,
  baseline: true,
  margin: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  center: false
};

const toAxes = ({
  margin,
  axesDefs,
  adjustedSize,
  yScale,
  xScale
}) => {
  let axes = [];
  const axesTickLines = [];
  const existingBaselines = {};

  if (axesDefs) {
    axes = axesDefs.map((d, i) => {
      let axisClassname = d.className || '';
      axisClassname += ' axis';
      let axisScale = yScale;

      if (existingBaselines[d.orient]) {
        d.baseline = d.baseline || false;
      }

      existingBaselines[d.orient] = true;

      if (d.orient === 'top' || d.orient === 'bottom') {
        axisClassname += ' x';
        axisScale = xScale;
      } else {
        axisClassname += ' y';
      }

      axisClassname += ` ${d.orient}`;
      let tickValues;

      if (d.tickValues && Array.isArray(d.tickValues)) {
        tickValues = d.tickValues;
      }

      const axisSize = [adjustedSize[0], adjustedSize[1]];
      const axisParts = axisPieces({
        padding: d.padding,
        tickValues,
        scale: axisScale,
        ticks: d.ticks,
        orient: d.orient,
        size: axisSize,
        footer: d.footer,
        tickSize: d.tickSize
      });
      const tickLineGroup = React$1__default.createElement("g", {
        key: `axes-tick-lines-${i}`,
        className: `axis ${axisClassname}`
      }, axisLines({
        axisParts,
        orient: d.orient,
        tickLineGenerator: d.tickLineGenerator,
        baseMarkProps: d.baseMarkProps,
        className: axisClassname
      }));
      axesTickLines.push(tickLineGroup);
      return React$1__default.createElement(Axis, {
        label: d.label,
        axisParts: axisParts,
        key: d.key || `axis-${i}`,
        orient: d.orient,
        size: axisSize,
        margin: margin,
        ticks: d.ticks,
        tickSize: d.tickSize,
        tickFormat: d.tickFormat,
        tickValues: tickValues,
        scale: axisScale,
        className: axisClassname,
        padding: d.padding,
        rotate: d.rotate,
        annotationFunction: d.axisAnnotationFunction,
        glyphFunction: d.glyphFunction,
        baseline: d.baseline,
        dynamicLabelPosition: d.dynamicLabelPosition,
        center: d.center,
        marginalSummaryType: d.marginalSummaryType
      });
    });
  }

  return {
    axes,
    axesTickLines
  };
};

var labella_min = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports={Node:r(1),Force:r(2),Distributor:r(3),Renderer:r(10)};},function(t,e){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=function(){function t(e,n,i){r(this,t),this.idealPos=e,this.currentPos=e,this.width=n,this.data=i,this.layerIndex=0;}return n(t,[{key:"distanceFrom",value:function(t){var e=this.width/2,r=t.width/2;return Math.max(this.currentPos-e,t.currentPos-r)-Math.min(this.currentPos+e,t.currentPos+r)}},{key:"moveToIdealPosition",value:function(){return this.currentPos=this.idealPos,this}},{key:"displacement",value:function(){return this.idealPos-this.currentPos}},{key:"overlapWithNode",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this.distanceFrom(t)-e<0}},{key:"overlapWithPoint",value:function(t){var e=this.width/2;return t>=this.currentPos-e&&t<=this.currentPos+e}},{key:"positionBefore",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.currentLeft()-this.width/2-e}},{key:"positionAfter",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.currentRight()+this.width/2+e}},{key:"currentRight",value:function(){return this.currentPos+this.width/2}},{key:"currentLeft",value:function(){return this.currentPos-this.width/2}},{key:"idealRight",value:function(){return this.idealPos+this.width/2}},{key:"idealLeft",value:function(){return this.idealPos-this.width/2}},{key:"createStub",value:function(e){var r=new t(this.idealPos,e,this.data);return r.currentPos=this.currentPos,r.child=this,this.parent=r,r}},{key:"removeStub",value:function(){return this.parent&&(this.parent.child=null,this.parent=null),this}},{key:"isStub",value:function(){return !!this.child}},{key:"getPathToRoot",value:function(){for(var t=[],e=this;e;)t.push(e),e=e.parent;return t}},{key:"getPathFromRoot",value:function(){return this.getPathToRoot().reverse()}},{key:"getPathToRootLength",value:function(){for(var t=0,e=this;e;){var r=e.parent?e.parent.currentPos:e.idealPos;t+=Math.abs(e.currentPos-r),e=e.parent;}return t}},{key:"getRoot",value:function(){for(var t=this,e=this;e;)t=e,e=e.parent;return t}},{key:"getLayerIndex",value:function(){return this.layerIndex}},{key:"clone",value:function(){var e=new t(this.idealPos,this.width,this.data);return e.currentPos=this.currentPos,e.layerIndex=this.layerIndex,e}}]),t}();t.exports=i;},function(t,e,r){var n=r(3),i=r(4),o=r(8),s={nodeSpacing:3,minPos:0,maxPos:null,algorithm:"overlap",removeOverlap:!0,density:.85,stubWidth:1},u=function(t){var e={},r=i.extend({},s),u=new n,a=[],c=null;return e.nodes=function(t){return arguments.length?(a=t,c=[t.concat()],e):a},e.getLayers=function(){return c},e.options=function(t){if(!arguments.length)return r;r=i.extend(r,t);var o=i.pick(r,Object.keys(n.DEFAULT_OPTIONS));return i.isDefined(r.minPos)&&i.isDefined(r.maxPos)?o.layerWidth=r.maxPos-r.minPos:o.layerWidth=null,u.options(o),e},e.options(t),e.compute=function(){var t=i.pick(r,Object.keys(o.DEFAULT_OPTIONS));return a.forEach(function(t){t.removeStub();}),c=u.distribute(a),c.map(function(e,n){e.forEach(function(t){t.layerIndex=n;}),r.removeOverlap&&o(e,t);}),e},e.start=function(){console.log("[warning] force.start() is deprecated. Please use force.compute() instead.");},e};u.DEFAULT_OPTIONS=s,t.exports=u;},function(t,e,r){var n=r(4),i=r(6),o={algorithm:"overlap",layerWidth:1e3,density:.75,nodeSpacing:3,stubWidth:1},s=function(t){var e={};t=n.extend({},o,t),e.options=function(r){return arguments.length?(t=n.extend(t,r),e):t},e.computeRequiredWidth=function(e){return n.sum(e,function(e){return e.width+t.nodeSpacing})-t.nodeSpacing},e.maxWidthPerLayer=function(){return t.density*t.layerWidth},e.needToSplit=function(t){return e.estimateRequiredLayers(t)>1},e.estimateRequiredLayers=function(r){return t.layerWidth?Math.ceil(e.computeRequiredWidth(r)/e.maxWidthPerLayer()):1};var r={simple:function(r){for(var n=e.estimateRequiredLayers(r),i=[],o=0;o<n;o++)i.push([]);return r.forEach(function(e,r){var o=r%n;i[o].push(e);for(var s=e,u=o-1;u>=0;u--)s=s.createStub(t.stubWidth),i[u].push(s);}),i},roundRobin:function(t){var e=[];return e},overlap:function(r){for(var n=[],i=e.maxWidthPerLayer(),o=r.concat(),s=e.computeRequiredWidth(o);s>i;){e.countIdealOverlaps(o);var u=o.concat(),a=s;for(o=[];u.length>2&&a>i;){u.sort(function(t,e){return e.overlapCount-t.overlapCount});var c=u.shift();a-=c.width,a+=t.stubWidth,c.overlaps.forEach(function(t){t.overlapCount--;}),o.push(c);}n.push(u),s=e.computeRequiredWidth(o);}o.length>0&&n.push(o);for(var h=n.length-1;h>=1;h--)for(var l=n[h],f=0;f<l.length;f++){var p=l[f];if(!p.isStub())for(var d=p,v=h-1;v>=0;v--)d=d.createStub(t.stubWidth),n[v].push(d);}return n}};return e.countIdealOverlaps=function(e){var r=new i(t.layerWidth/2);return e.forEach(function(t){r.add([t.idealLeft(),t.idealRight(),t]);}),e.forEach(function(t){var e=r.search(t.idealLeft(),t.idealRight());t.overlaps=e.map(function(t){return t.data[2]}),t.overlapCount=e.length;}),e},e.distribute=function(i){if(!i||0===i.length)return [];if("none"==t.algorithm||!n.isDefined(t.algorithm))return [i];if(!e.needToSplit(i))return [i];var o=i.concat().sort(function(t,e){return t.idealPos-e.idealPos});if("function"==typeof t.algorithm)return t.algorithm(o,t);if(r.hasOwnProperty(t.algorithm))return r[t.algorithm](o);throw "Unknown algorithm: "+t.algorithm},e};s.DEFAULT_OPTIONS=o,t.exports=s;},function(t,e,r){var n={isDefined:function(t){return null!==t&&void 0!==t},last:function(t){return t.length>0?t[t.length-1]:null},pick:function(t,e){return e.reduce(function(e,r){return e[r]=t[r],e},{})},sum:function(t,e){return t.map(e).reduce(function(t,e){return t+e},0)}};n.extend=r(5),t.exports=n;},function(t,e){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=Object.prototype.hasOwnProperty,i=Object.prototype.toString,o=function(t){return "function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===i.call(t)},s=function(t){if(!t||"[object Object]"!==i.call(t))return !1;var e=n.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&n.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!e&&!r)return !1;var o;for(o in t);return void 0===o||n.call(t,o)};t.exports=function u(){var t,e,n,i,a,c,h=arguments[0],l=1,f=arguments.length,p=!1;for("boolean"==typeof h?(p=h,h=arguments[1]||{},l=2):("object"!==("undefined"==typeof h?"undefined":r(h))&&"function"!=typeof h||null==h)&&(h={});l<f;++l)if(t=arguments[l],null!=t)for(e in t)n=h[e],i=t[e],h!==i&&(p&&i&&(s(i)||(a=o(i)))?(a?(a=!1,c=n&&o(n)?n:[]):c=n&&s(n)?n:{},h[e]=u(p,c,i)):void 0!==i&&(h[e]=i));return h};},function(t,e,r){function n(t,e){if(e||(e={}),this.startKey=e.startKey||0,this.endKey=e.endKey||1,this.intervalHash={},this.pointTree=new c({compare:function(t,e){if(null==t)return -1;if(null==e)return 1;var r=t[0]-e[0];return r>0?1:0==r?0:-1}}),this._autoIncrement=0,!t||"number"!=typeof t)throw new Error("you must specify center index as the 2nd argument.");this.root=new u(t,this);}function i(t,e){return e.end<t.idx?(t.left||(t.left=new u(e.start+e.end>>1,this)),i.call(this,t.left,e)):t.idx<e.start?(t.right||(t.right=new u(e.start+e.end>>1,this)),i.call(this,t.right,e)):t.insert(e)}function o(t,e,r){if(t)return e<t.idx?(t.starts.every(function(t){var n=t.start<=e;return n&&r.push(t.result()),n}),o.call(this,t.left,e,r)):e>t.idx?(t.ends.every(function(t){var n=t.end>=e;return n&&r.push(t.result()),n}),o.call(this,t.right,e,r)):void t.starts.map(function(t){r.push(t.result());})}function s(t,e,r){if(e-t<=0)throw new Error("end must be greater than start. start: "+t+", end: "+e);var n={},i=[];o.call(this,this.root,t+e>>1,i,!0),i.forEach(function(t){n[t.id]=!0;});for(var s=this.pointTree.bsearch([t,null]),u=this.pointTree;s>=0&&u[s][0]==t;)s--;var a=this.pointTree.bsearch([e,null]);if(a>=0){for(var c=u.length-1;a<=c&&u[a][0]<=e;)a++;u.slice(s+1,a).forEach(function(t){var e=t[1];n[e]=!0;},this),Object.keys(n).forEach(function(n){var i=this.intervalHash[n];r.push(i.result(t,e));},this);}}function u(t){this.idx=t,this.starts=new c({compare:function(t,e){if(null==t)return -1;if(null==e)return 1;var r=t.start-e.start;return r>0?1:0==r?0:-1}}),this.ends=new c({compare:function(t,e){if(null==t)return -1;if(null==e)return 1;var r=t.end-e.end;return r<0?1:0==r?0:-1}});}function a(t,e,r,n){if(this.id=e,this.start=t[r],this.end=t[n],this.data=t,"number"!=typeof this.start||"number"!=typeof this.end)throw new Error("start, end must be number. start: "+this.start+", end: "+this.end);if(this.start>=this.end)throw new Error("start must be smaller than end. start: "+this.start+", end: "+this.end)}var c=r(7);n.prototype.add=function(t,e){if(this.intervalHash[e])throw new Error("id "+e+" is already registered.");if(void 0==e){for(;this.intervalHash[this._autoIncrement];)this._autoIncrement++;e=this._autoIncrement;}var r=new a(t,e,this.startKey,this.endKey);this.pointTree.insert([r.start,e]),this.pointTree.insert([r.end,e]),this.intervalHash[e]=r,this._autoIncrement++,i.call(this,this.root,r);},n.prototype.search=function(t,e){var r=[];if("number"!=typeof t)throw new Error(t+": invalid input");if(void 0==e)o.call(this,this.root,t,r);else{if("number"!=typeof e)throw new Error(t+","+e+": invalid input");s.call(this,t,e,r);}return r},n.prototype.remove=function(t){},u.prototype.insert=function(t){this.starts.insert(t),this.ends.insert(t);},a.prototype.result=function(t,e){var r={id:this.id,data:this.data};if("number"==typeof t&&"number"==typeof e){var n=Math.max(this.start,t),i=Math.min(this.end,e),o=i-n;r.rate1=o/(e-t),r.rate2=o/(this.end-this.start);}return r},t.exports=n;},function(t,e){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function i(){var t=null,e={},n=arguments;["0","1"].forEach(function(i){var o=n[i];Array.isArray(o)?t=o:o&&"object"==("undefined"==typeof o?"undefined":r(o))&&(e=o);}),"function"==typeof e.filter&&(this._filter=e.filter),"function"==typeof e.compare?this._compare=e.compare:"string"==typeof e.compare&&i.compares[e.compare]&&(this._compare=i.compares[e.compare]),this._unique=!!e.unique,e.resume&&t?t.forEach(function(t,e){this.push(t);},this):t&&this.insert.apply(this,t);};n.create=function(t,e){return new n(t,e)},n.prototype=new Array,n.prototype.constructor=Array.prototype.constructor,n.prototype.insertOne=function(t){var e=this.bsearch(t);return (!this._unique||null==this.key(t,e))&&(!!this._filter(t,e)&&(this.splice(e+1,0,t),e+1))},n.prototype.insert=function(){return Array.prototype.map.call(arguments,function(t){return this.insertOne(t)},this)},n.prototype.remove=function(t){return this.splice(t,1),this},n.prototype.bsearch=function(t){if(!this.length)return -1;for(var e,r=0,n=this.length;n-r>1;){e=Math.floor((r+n)/2);var i=this[e],o=this._compare(t,i);if(0==o)return e;o>0?r=e:n=e;}return 0==r&&this._compare(this[0],t)>0?-1:r},n.prototype.key=function(t,e){null==e&&(e=this.bsearch(t));var r=e;if(r==-1||this._compare(this[r],t)<0)return r+1<this.length&&0==this._compare(this[r+1],t)?r+1:null;for(;r>=1&&0==this._compare(this[r-1],t);)r--;return r},n.prototype.keys=function(t,e){var r=[];null==e&&(e=this.bsearch(t));for(var n=e;n>=0&&0==this._compare(this[n],t);)r.push(n),n--;var i=this.length;for(n=e+1;n<i&&0==this._compare(this[n],t);)r.push(n),n++;return r.length?r:null},n.prototype.unique=function(t){if(t)return this.filter(function(t,e){return 0==e||0!=this._compare(this[e-1],t)},this);var e=0;return this.map(function(t,r){return 0==r||0!=this._compare(this[r-1],t)?null:r-e++},this).forEach(function(t){null!=t&&this.remove(t);},this),this},n.prototype.toArray=function(){return this.slice()},n.prototype._filter=function(t,e){return !0},n.compares={number:function(t,e){var r=t-e;return r>0?1:0==r?0:-1},string:function(t,e){return t>e?1:t==e?0:-1}},n.prototype._compare=n.compares.string,t.exports=n;},function(t,e,r){function n(t){var e=new s.Variable(t.targetPos);return e.node=t,e}function i(t,e){if(t.length>0){e=o.extend(u,e),t.forEach(function(t,e){t.targetPos=t.parent?t.parent.currentPos:t.idealPos,t.index=e;});for(var r=t.concat().sort(function(t,e){var r=t.targetPos-e.targetPos;if(0!==r)return r;var n=t.isStub()-e.isStub();return 0!==n?n:t.index-e.index}).map(n),i=[],a=1;a<r.length;a++){var c=r[a-1],h=r[a],l=void 0;l=c.node.isStub()&&h.node.isStub()?(c.node.width+h.node.width)/2+e.lineSpacing:(c.node.width+h.node.width)/2+e.nodeSpacing,i.push(new s.Constraint(c,h,l));}if(o.isDefined(e.minPos)){var f=new s.Variable(e.minPos,1e10),p=r[0];i.push(new s.Constraint(f,p,p.node.width/2)),r.unshift(f);}if(o.isDefined(e.maxPos)){var d=new s.Variable(e.maxPos,1e10),v=o.last(r);i.push(new s.Constraint(v,d,v.node.width/2)),r.push(d);}new s.Solver(r,i).solve(),r.filter(function(t){return t.node}).map(function(t){return t.node.currentPos=Math.round(t.position()),t});}return t}var o=r(4),s=r(9),u={lineSpacing:2,nodeSpacing:3,minPos:0,maxPos:null};i.DEFAULT_OPTIONS=u,t.exports=i;},function(t,e){var r={},n=function(){function t(t){this.scale=t,this.AB=0,this.AD=0,this.A2=0;}return t.prototype.addVariable=function(t){var e=this.scale/t.scale,r=t.offset/t.scale,n=t.weight;this.AB+=n*e*r,this.AD+=n*e*t.desiredPosition,this.A2+=n*e*e;},t.prototype.getPosn=function(){return (this.AD-this.AB)/this.A2},t}();r.PositionStats=n;var i=function(){function t(t,e,r,n){void 0===n&&(n=!1),this.left=t,this.right=e,this.gap=r,this.equality=n,this.active=!1,this.unsatisfiable=!1,this.left=t,this.right=e,this.gap=r,this.equality=n;}return t.prototype.slack=function(){return this.unsatisfiable?Number.MAX_VALUE:this.right.scale*this.right.position()-this.gap-this.left.scale*this.left.position()},t}();r.Constraint=i;var o=function(){function t(t,e,r){void 0===e&&(e=1),void 0===r&&(r=1),this.desiredPosition=t,this.weight=e,this.scale=r,this.offset=0;}return t.prototype.dfdv=function(){return 2*this.weight*(this.position()-this.desiredPosition)},t.prototype.position=function(){return (this.block.ps.scale*this.block.posn+this.offset)/this.scale},t.prototype.visitNeighbours=function(t,e){var r=function(r,n){return r.active&&t!==n&&e(r,n)};this.cOut.forEach(function(t){return r(t,t.right)}),this.cIn.forEach(function(t){return r(t,t.left)});},t}();r.Variable=o;var s=function(){function t(t){this.vars=[],t.offset=0,this.ps=new n(t.scale),this.addVariable(t);}return t.prototype.addVariable=function(t){t.block=this,this.vars.push(t),this.ps.addVariable(t),this.posn=this.ps.getPosn();},t.prototype.updateWeightedPosition=function(){this.ps.AB=this.ps.AD=this.ps.A2=0;for(var t=0,e=this.vars.length;t<e;++t)this.ps.addVariable(this.vars[t]);this.posn=this.ps.getPosn();},t.prototype.compute_lm=function(t,e,r){var n=this,i=t.dfdv();return t.visitNeighbours(e,function(e,o){var s=n.compute_lm(o,t,r);o===e.right?(i+=s*e.left.scale,e.lm=s):(i+=s*e.right.scale,e.lm=-s),r(e);}),i/t.scale},t.prototype.populateSplitBlock=function(t,e){var r=this;t.visitNeighbours(e,function(e,n){n.offset=t.offset+(n===e.right?e.gap:-e.gap),r.addVariable(n),r.populateSplitBlock(n,t);});},t.prototype.traverse=function(t,e,r,n){var i=this;void 0===r&&(r=this.vars[0]),void 0===n&&(n=null),r.visitNeighbours(n,function(n,o){e.push(t(n)),i.traverse(t,e,o,r);});},t.prototype.findMinLM=function(){var t=null;return this.compute_lm(this.vars[0],null,function(e){!e.equality&&(null===t||e.lm<t.lm)&&(t=e);}),t},t.prototype.findMinLMBetween=function(t,e){this.compute_lm(t,null,function(){});var r=null;return this.findPath(t,null,e,function(t,e){!t.equality&&t.right===e&&(null===r||t.lm<r.lm)&&(r=t);}),r},t.prototype.findPath=function(t,e,r,n){var i=this,o=!1;return t.visitNeighbours(e,function(e,s){o||s!==r&&!i.findPath(s,t,r,n)||(o=!0,n(e,s));}),o},t.prototype.isActiveDirectedPathBetween=function(t,e){if(t===e)return !0;for(var r=t.cOut.length;r--;){var n=t.cOut[r];if(n.active&&this.isActiveDirectedPathBetween(n.right,e))return !0}return !1},t.split=function(e){return e.active=!1,[t.createSplitBlock(e.left),t.createSplitBlock(e.right)]},t.createSplitBlock=function(e){var r=new t(e);return r.populateSplitBlock(e,null),r},t.prototype.splitBetween=function(e,r){var n=this.findMinLMBetween(e,r);if(null!==n){var i=t.split(n);return {constraint:n,lb:i[0],rb:i[1]}}return null},t.prototype.mergeAcross=function(t,e,r){e.active=!0;for(var n=0,i=t.vars.length;n<i;++n){var o=t.vars[n];o.offset+=r,this.addVariable(o);}this.posn=this.ps.getPosn();},t.prototype.cost=function(){for(var t=0,e=this.vars.length;e--;){var r=this.vars[e],n=r.position()-r.desiredPosition;t+=n*n*r.weight;}return t},t}();r.Block=s;var u=function(){function t(t){this.vs=t;var e=t.length;for(this.list=new Array(e);e--;){var r=new s(t[e]);this.list[e]=r,r.blockInd=e;}}return t.prototype.cost=function(){for(var t=0,e=this.list.length;e--;)t+=this.list[e].cost();return t},t.prototype.insert=function(t){t.blockInd=this.list.length,this.list.push(t);},t.prototype.remove=function(t){var e=this.list.length-1,r=this.list[e];this.list.length=e,t!==r&&(this.list[t.blockInd]=r,r.blockInd=t.blockInd);},t.prototype.merge=function(t){var e=t.left.block,r=t.right.block,n=t.right.offset-t.left.offset-t.gap;e.vars.length<r.vars.length?(r.mergeAcross(e,t,n),this.remove(e)):(e.mergeAcross(r,t,-n),this.remove(r));},t.prototype.forEach=function(t){this.list.forEach(t);},t.prototype.updateBlockPositions=function(){this.list.forEach(function(t){return t.updateWeightedPosition()});},t.prototype.split=function(t){var e=this;this.updateBlockPositions(),this.list.forEach(function(r){var n=r.findMinLM();null!==n&&n.lm<a.LAGRANGIAN_TOLERANCE&&(r=n.left.block,s.split(n).forEach(function(t){return e.insert(t)}),e.remove(r),t.push(n));});},t}();r.Blocks=u;var a=function(){function t(t,e){this.vs=t,this.cs=e,this.vs=t,t.forEach(function(t){t.cIn=[],t.cOut=[];}),this.cs=e,e.forEach(function(t){t.left.cOut.push(t),t.right.cIn.push(t);}),this.inactive=e.map(function(t){return t.active=!1,t}),this.bs=null;}return t.prototype.cost=function(){return this.bs.cost()},t.prototype.setStartingPositions=function(t){this.inactive=this.cs.map(function(t){return t.active=!1,t}),this.bs=new u(this.vs),this.bs.forEach(function(e,r){return e.posn=t[r]});},t.prototype.setDesiredPositions=function(t){this.vs.forEach(function(e,r){return e.desiredPosition=t[r]});},t.prototype.mostViolated=function(){for(var e=Number.MAX_VALUE,r=null,n=this.inactive,i=n.length,o=i,s=0;s<i;++s){var u=n[s];if(!u.unsatisfiable){var a=u.slack();if((u.equality||a<e)&&(e=a,r=u,o=s,u.equality))break}}return o!==i&&(e<t.ZERO_UPPERBOUND&&!r.active||r.equality)&&(n[o]=n[i-1],n.length=i-1),r},t.prototype.satisfy=function(){null==this.bs&&(this.bs=new u(this.vs)),this.bs.split(this.inactive);for(var e=null;(e=this.mostViolated())&&(e.equality||e.slack()<t.ZERO_UPPERBOUND&&!e.active);){var r=e.left.block,n=e.right.block;if(r!==n)this.bs.merge(e);else{if(r.isActiveDirectedPathBetween(e.right,e.left)){e.unsatisfiable=!0;continue}var i=r.splitBetween(e.left,e.right);if(null===i){e.unsatisfiable=!0;continue}this.bs.insert(i.lb),this.bs.insert(i.rb),this.bs.remove(r),this.inactive.push(i.constraint),e.slack()>=0?this.inactive.push(e):this.bs.merge(e);}}},t.prototype.solve=function(){this.satisfy();for(var t=Number.MAX_VALUE,e=this.bs.cost();Math.abs(t-e)>1e-4;)this.satisfy(),t=e,e=this.bs.cost();return e},t.LAGRANGIAN_TOLERANCE=-1e-4,t.ZERO_UPPERBOUND=-1e-10,t}();r.Solver=a,t.exports=r;},function(t,e,r){function n(t){this.options=c.extend({layerGap:60,nodeHeight:10,direction:"down"},t);}function i(t){return "L "+t.join(" ")}function o(t){return "M "+t.join(" ")}function s(t,e,r){return "C "+t.join(" ")+" "+e.join(" ")+" "+r.join(" ")}function u(t,e){var r=(t[1]+e[1])/2;return s([t[0],r],[e[0],r],e)}function a(t,e){var r=(t[0]+e[0])/2;return s([r,t[1]],[r,e[1]],e)}var c=r(4);n.lineTo=i,n.moveTo=o,n.curveTo=s,n.vCurveBetween=u,n.hCurveBetween=a,n.prototype.getWaypoints=function(t){var e=this.options,r=e.direction,n=t.getPathFromRoot(),i=e.nodeHeight+e.layerGap;return "left"===r?[[[0,n[0].idealPos]]].concat(n.map(function(t,r){var n=i*(r+1)*-1;return [[n+e.nodeHeight,t.currentPos],[n,t.currentPos]]})):"right"===r?[[[0,n[0].idealPos]]].concat(n.map(function(t,r){var n=i*(r+1);return [[n-e.nodeHeight,t.currentPos],[n,t.currentPos]]})):"up"===r?[[[n[0].idealPos,0]]].concat(n.map(function(t,r){var n=i*(r+1)*-1;return [[t.currentPos,n+e.nodeHeight],[t.currentPos,n]]})):[[[n[0].idealPos,0]]].concat(n.map(function(t,r){var n=i*(r+1);return [[t.currentPos,n-e.nodeHeight],[t.currentPos,n]]}))},n.prototype.layout=function(t){var e=this.options,r=e.layerGap+e.nodeHeight;switch(e.direction){case"left":t.forEach(function(t){var n=t.getLayerIndex()*r+e.layerGap;t.x=-n-e.nodeHeight,t.y=t.currentPos,t.dx=e.nodeHeight,t.dy=t.width;});break;case"right":t.forEach(function(t){var n=t.getLayerIndex()*r+e.layerGap;t.x=n,t.y=t.currentPos,t.dx=e.nodeHeight,t.dy=t.width;});break;case"up":t.forEach(function(t){var n=t.getLayerIndex()*r+e.layerGap;t.x=t.currentPos,t.y=-n-e.nodeHeight,t.dx=t.width,t.dy=e.nodeHeight;});break;default:case"down":t.forEach(function(t){var n=t.getLayerIndex()*r+e.layerGap;t.x=t.currentPos,t.y=n,t.dx=t.width,t.dy=e.nodeHeight;});}return t},n.prototype.generatePath=function(t){var e=this.options,r=e.direction,n=this.getWaypoints(t,r),s=[o(n[0][0])];return "left"===r||"right"===r?n.reduce(function(t,e,r){return s.push(a(t[t.length-1],e[0])),r<n.length-1&&s.push(i(e[1])),e}):n.reduce(function(t,e,r){return s.push(u(t[t.length-1],e[0])),r<n.length-1&&s.push(i(e[1])),e}),s.join(" ")},t.exports=n;}])});
});
var labella_min_1 = labella_min.labella;

// from Evan Wang's https://github.com/tinker10/D3-Labeler
function labeler () {
  let lab = [],
      anc = [],
      w = 1,
      // box width
  h = 1,
      // box width
  labeler = {
    start: x => {},
    width: x => {},
    height: x => {},
    label: x => {},
    anchor: x => {},
    alt_energy: x => {},
    alt_schedule: x => {}
  };
  let max_move = 5.0,
      max_angle = 0.5; // weights

  let w_len = 0.2,
      // leader line length
  w_inter = 1.0,
      // leader line intersection
  w_lab2 = 30.0,
      // label-label overlap
  w_lab_anc = 30.0,
      // label-anchor overlap
  w_orient = 3.0; // orientation bias
  // booleans for user defined functions

  let user_energy = false;
  let user_defined_energy;

  const energy = function (index) {
    // energy function, tailored for label placement
    let m = lab.length,
        ener = 0,
        dx = lab[index].x - anc[index].x,
        dy = anc[index].y - lab[index].y,
        dist = Math.sqrt(dx * dx + dy * dy);
 // penalty for length of leader line

    if (dist > 0) ener += dist * w_len; // label orientation bias

    dx /= dist;
    dy /= dist;

    if (dx > 0 && dy > 0) {
      ener += 0 * w_orient;
    } else if (dx < 0 && dy > 0) {
      ener += 1 * w_orient;
    } else if (dx < 0 && dy < 0) {
      ener += 2 * w_orient;
    } else {
      ener += 3 * w_orient;
    }

    let x21 = lab[index].x,
        y21 = lab[index].y - lab[index].height + 2.0,
        x22 = lab[index].x + lab[index].width,
        y22 = lab[index].y + 2.0;
    let x11, x12, y11, y12, x_overlap, y_overlap, overlap_area;

    for (let i = 0; i < m; i++) {
      if (i !== index) {
        // penalty for intersection of leader lines
        const overlap = intersect(anc[index].x, lab[index].x, anc[i].x, lab[i].x, anc[index].y, lab[index].y, anc[i].y, lab[i].y);
        if (overlap) ener += w_inter; // penalty for label-label overlap

        x11 = lab[i].x;
        y11 = lab[i].y - lab[i].height + 2.0;
        x12 = lab[i].x + lab[i].width;
        y12 = lab[i].y + 2.0;
        x_overlap = Math.max(0, Math.min(x12, x22) - Math.max(x11, x21));
        y_overlap = Math.max(0, Math.min(y12, y22) - Math.max(y11, y21));
        overlap_area = x_overlap * y_overlap;
        ener += overlap_area * w_lab2;
      } // penalty for label-anchor overlap


      x11 = anc[i].x - anc[i].r;
      y11 = anc[i].y - anc[i].r;
      x12 = anc[i].x + anc[i].r;
      y12 = anc[i].y + anc[i].r;
      x_overlap = Math.max(0, Math.min(x12, x22) - Math.max(x11, x21));
      y_overlap = Math.max(0, Math.min(y12, y22) - Math.max(y11, y21));
      overlap_area = x_overlap * y_overlap;
      ener += overlap_area * w_lab_anc;
    }

    return ener;
  };

  const mcmove = function (currT) {
    // Monte Carlo translation move
    // select a random label
    let i = Math.floor(Math.random() * lab.length); // save old coordinates

    let x_old = lab[i].x;
    let y_old = lab[i].y; // old energy

    let old_energy;

    if (user_energy) {
      old_energy = user_defined_energy(i, lab, anc);
    } else {
      old_energy = energy(i);
    } // random translation


    lab[i].x += (Math.random() - 0.5) * max_move;
    lab[i].y += (Math.random() - 0.5) * max_move; // hard wall boundaries

    if (lab[i].x > w) lab[i].x = x_old;
    if (lab[i].x < 0) lab[i].x = x_old;
    if (lab[i].y > h) lab[i].y = y_old;
    if (lab[i].y < 0) lab[i].y = y_old; // new energy

    let new_energy;

    if (user_energy) {
      new_energy = user_defined_energy(i, lab, anc);
    } else {
      new_energy = energy(i);
    } // delta E


    let delta_energy = new_energy - old_energy;

    if (!(Math.random() < Math.exp(-delta_energy / currT))) {
      // move back to old coordinates
      lab[i].x = x_old;
      lab[i].y = y_old;
    }
  };

  const mcrotate = function (currT) {
    // Monte Carlo rotation move
    // select a random label
    let i = Math.floor(Math.random() * lab.length); // save old coordinates

    let x_old = lab[i].x;
    let y_old = lab[i].y; // old energy

    let old_energy;

    if (user_energy) {
      old_energy = user_defined_energy(i, lab, anc);
    } else {
      old_energy = energy(i);
    } // random angle


    let angle = (Math.random() - 0.5) * max_angle;
    let s = Math.sin(angle);
    let c = Math.cos(angle); // translate label (relative to anchor at origin):

    lab[i].x -= anc[i].x;
    lab[i].y -= anc[i].y; // rotate label

    let x_new = lab[i].x * c - lab[i].y * s,
        y_new = lab[i].x * s + lab[i].y * c; // translate label back

    lab[i].x = x_new + anc[i].x;
    lab[i].y = y_new + anc[i].y; // hard wall boundaries

    if (lab[i].x > w) lab[i].x = x_old;
    if (lab[i].x < 0) lab[i].x = x_old;
    if (lab[i].y > h) lab[i].y = y_old;
    if (lab[i].y < 0) lab[i].y = y_old; // new energy

    let new_energy;

    if (user_energy) {
      new_energy = user_defined_energy(i, lab, anc);
    } else {
      new_energy = energy(i);
    } // delta E


    let delta_energy = new_energy - old_energy;

    if (!(Math.random() < Math.exp(-delta_energy / currT))) {
      // move back to old coordinates
      lab[i].x = x_old;
      lab[i].y = y_old;
    }
  };

  const intersect = function (x1, x2, x3, x4, y1, y2, y3, y4) {
    // returns true if two lines intersect, else false
    // from http://paulbourke.net/geometry/lineline2d/
    let mua, mub;
    let denom, numera, numerb;
    denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    numera = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
    numerb = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);
    /* Is the intersection along the the segments */

    mua = numera / denom;
    mub = numerb / denom;

    if (!(mua < 0 || mua > 1 || mub < 0 || mub > 1)) {
      return true;
    }

    return false;
  };

  const cooling_schedule = function (currT, initialT, nsweeps) {
    // linear cooling
    return currT - initialT / nsweeps;
  };

  labeler.start = function (nsweeps) {
    // main simulated annealing function
    let m = lab.length,
        currT = 1.0,
        initialT = 1.0;

    for (let i = 0; i < nsweeps; i++) {
      for (let j = 0; j < m; j++) {
        if (Math.random() < 0.5) {
          mcmove(currT);
        } else {
          mcrotate(currT);
        }
      }

      currT = cooling_schedule(currT, initialT, nsweeps);
    }
  };

  labeler.width = function (x) {
    // users insert graph width
    if (!arguments.length) return w;
    w = x;
    return labeler;
  };

  labeler.height = function (x) {
    // users insert graph height
    if (!arguments.length) return h;
    h = x;
    return labeler;
  };

  labeler.label = function (x) {
    // users insert label positions
    if (!arguments.length) return lab;
    lab = x;
    return labeler;
  };

  labeler.anchor = function (x) {
    // users insert anchor positions
    if (!arguments.length) return anc;
    anc = x;
    return labeler;
  };

  labeler.alt_energy = function (x) {
    // user defined energy
    if (!arguments.length) return energy;
    user_defined_energy = x;
    user_energy = true;
    return labeler;
  };

  labeler.alt_schedule = function (x) {
    // user defined cooling_schedule
    if (!arguments.length) return cooling_schedule;
    return labeler;
  };

  return labeler;
}
/*eslint-enable */

const basicLabelSizeFunction = (noteData, characterWidth, lineHeight, padding) => {
  const text = noteData.note.label || noteData.note.title;
  const textLength = text.length;
  const wrap = noteData.note.wrap || 120;
  const width = Math.min(wrap, textLength * characterWidth) + padding * 2;
  const height = Math.ceil(textLength * characterWidth / 120) * lineHeight + padding * 2;
  return [width, height];
};

function bumpAnnotations(adjustableNotes, processor, size, propsPointSizeFunction, propsLabelSizeFunction) {
  const {
    padding = 1,
    characterWidth = 8,
    lineHeight = 20,
    iterations = 500,
    pointSizeFunction = propsPointSizeFunction,
    labelSizeFunction = propsLabelSizeFunction || basicLabelSizeFunction
  } = processor;
  const labels = adjustableNotes.map((d, i) => {
    const anchorX = (d.props.noteData.x[0] || d.props.noteData.x) + (d.props.noteData.dx !== undefined ? d.props.noteData.dx : (i % 3 - 1) * -10);
    const anchorY = (d.props.noteData.y[0] || d.props.noteData.y) + (d.props.noteData.dy !== undefined ? d.props.noteData.dy : (i % 3 - 1) * 10);
    const [labelWidth, labelHeight] = labelSizeFunction(d.props.noteData, characterWidth, lineHeight, padding);
    return {
      x: anchorX,
      y: anchorY,
      above: anchorY < d.props.noteData.y,
      left: anchorX < d.props.noteData.x,
      width: labelWidth,
      height: labelHeight,
      type: 'label',
      name: '',
      originalNote: d
    };
  });
  const points = adjustableNotes.map(d => ({
    x: d.props.noteData.x,
    y: d.props.noteData.y,
    fx: d.props.noteData.x,
    fy: d.props.noteData.y,
    r: pointSizeFunction && pointSizeFunction(d.props.noteData) || 5,
    type: 'point',
    originalNote: d
  }));
  const instantiatedLabeler = labeler();
  instantiatedLabeler.label(labels);
  instantiatedLabeler.anchor(points);
  instantiatedLabeler.width(size[0]);
  instantiatedLabeler.height(size[1]);
  instantiatedLabeler.start(iterations);
  labels.forEach(d => {
    if (d.type === 'label') {
      const adjusted = adjustedXY(d.originalNote.props.noteData, d, padding);
      d.originalNote.props.noteData.nx = adjusted[0];
      d.originalNote.props.noteData.ny = adjusted[1];
    }
  });
  return adjustableNotes;
}

function adjustedXY(note, calculated, padding) {
  if (note.y > calculated.y) {
    //below
    return [calculated.x + calculated.width / 2 + padding / 2, calculated.y - calculated.height + padding / 2];
  }

  return [calculated.x + calculated.width / 2, calculated.y];
}

const noteDataWidth = (noteData, charWidth = 8) => {
  const wrap = noteData.note && noteData.note.wrap || 120;
  const noteText = noteData.note.label || noteData.note.label || '';
  return Math.min(wrap, noteText.length * charWidth);
};

const noteDataHeight = (noteData, charWidth = 8, lineHeight = 20) => {
  const wrap = noteData.note && noteData.note.wrap || 120;
  const text = noteData.note.label || noteData.note.title || '';
  return Math.ceil(text.length * charWidth / wrap) * lineHeight + (noteData.note.label && noteData.note.title ? lineHeight : 0);
};

function marginOffsetFn(orient, axisSettings, marginOffset) {
  if (typeof marginOffset === 'number') {
    return marginOffset;
  }

  if (axisSettings && axisSettings.find(d => d.props.orient === orient)) {
    return 50;
  }

  return 10;
}

const index = (adjustableAnnotations, annotationProcessor, props) => {
  const {
    layout = {
      type: false
    }
  } = annotationProcessor;
  const {
    axes = [],
    margin
  } = props;

  if (layout.type === false) {
    return adjustableAnnotations;
  }

  if (layout.type === 'bump') {
    return bumpAnnotations(adjustableAnnotations, layout, size, props.pointSizeFunction, props.labelSizeFunction);
  } else if (layout.type === 'marginalia') {
    const {
      marginOffset,
      orient = 'nearest',
      characterWidth = 8,
      lineHeight = 20,
      padding = 2,
      axisMarginOverride = null
    } = layout;
    const finalOrientation = orient === 'nearest' ? ['left', 'right', 'top', 'bottom'] : Array.isArray(orient) ? orient : [orient];
    const finalAxisMarginOverride = {
      top: null,
      right: null,
      bottom: null,
      left: null,
      ...axisMarginOverride
    };
    const leftOn = finalOrientation.find(d => d === 'left');
    const rightOn = finalOrientation.find(d => d === 'right');
    const topOn = finalOrientation.find(d => d === 'top');
    const bottomOn = finalOrientation.find(d => d === 'bottom');
    const leftNodes = [];
    const rightNodes = [];
    const topNodes = [];
    const bottomNodes = [];
    adjustableAnnotations.forEach(aNote => {
      const noteData = aNote.props.noteData;
      const noteX = noteData.x[0] || noteData.x;
      const noteY = noteData.y[0] || noteData.y;
      const leftDist = leftOn ? noteX : Infinity;
      const rightDist = rightOn ? size[0] - noteX : Infinity;
      const topDist = topOn ? noteY : Infinity;
      const bottomDist = bottomOn ? size[1] - noteY : Infinity;
      const minDist = Math.min(leftDist, rightDist, topDist, bottomDist);

      if (leftDist === minDist) {
        leftNodes.push(aNote);
      } else if (rightDist === minDist) {
        rightNodes.push(aNote);
      } else if (topDist === minDist) {
        topNodes.push(aNote);
      } else {
        bottomNodes.push(aNote);
      }
    }); //Adjust the margins based on which regions are active

    const leftForce = new undefined({
      minPos: finalAxisMarginOverride.top ? 0 + finalAxisMarginOverride.top : 0 - margin.top,
      maxPos: finalAxisMarginOverride.bottom ? size[1] - finalAxisMarginOverride.bottom : bottomOn ? size[1] : size[1] + margin.bottom
    }).nodes(leftNodes.map(d => {
      const noteY = d.props.noteData.y[0] || d.props.noteData.y;
      return new undefined(noteY, noteDataHeight(d.props.noteData, characterWidth, lineHeight) + padding);
    })).compute();
    const rightForce = new undefined({
      minPos: finalAxisMarginOverride.top ? 0 + finalAxisMarginOverride.top : topOn ? 0 : 0 - margin.top,
      maxPos: finalAxisMarginOverride.bottom ? size[1] - finalAxisMarginOverride.bottom : size[1] + margin.bottom
    }).nodes(rightNodes.map(d => {
      const noteY = d.props.noteData.y[0] || d.props.noteData.y;
      return new undefined(noteY, noteDataHeight(d.props.noteData, characterWidth, lineHeight) + padding);
    })).compute();
    const topForce = new undefined({
      minPos: finalAxisMarginOverride.left ? 0 + finalAxisMarginOverride.left : leftOn ? 0 : 0 - margin.left,
      maxPos: finalAxisMarginOverride.right ? size[0] - finalAxisMarginOverride.right : size[0] + margin.right
    }).nodes(topNodes.map(d => {
      const noteX = d.props.noteData.x[0] || d.props.noteData.x;
      return new undefined(noteX, noteDataWidth(d.props.noteData, characterWidth) + padding);
    })).compute();
    const bottomForce = new undefined({
      minPos: finalAxisMarginOverride.left ? 0 + finalAxisMarginOverride.left : 0 - margin.left,
      maxPos: finalAxisMarginOverride.right ? size[0] - finalAxisMarginOverride.right : rightOn ? size[0] : size[0] + margin.right
    }).nodes(bottomNodes.map(d => {
      const noteX = d.props.noteData.x[0] || d.props.noteData.x;
      return new undefined(noteX, noteDataWidth(d.props.noteData, characterWidth) + padding);
    })).compute();
    const bottomOffset = Math.max(...bottomNodes.map(d => noteDataHeight(d.props.noteData, characterWidth, lineHeight) + padding));
    const topOffset = Math.max(...topNodes.map(d => noteDataHeight(d.props.noteData, characterWidth, lineHeight) + padding));
    const leftOffset = Math.max(...leftNodes.map(d => noteDataWidth(d.props.noteData, characterWidth) + padding));
    const rightOffset = Math.max(...rightNodes.map(d => noteDataWidth(d.props.noteData, characterWidth) + padding)); //      const nodeOffsetHeight = Math.max()

    const leftSortedNodes = leftForce.nodes();
    const rightSortedNodes = rightForce.nodes();
    const topSortedNodes = topForce.nodes();
    const bottomSortedNodes = bottomForce.nodes();
    leftNodes.forEach((note, i) => {
      note.props.noteData.ny = leftSortedNodes[i].currentPos;
      note.props.noteData.nx = 0 - leftSortedNodes[i].layerIndex * leftOffset - marginOffsetFn('left', axes, marginOffset);

      if (note.props.noteData.note) {
        note.props.noteData.note.orientation = note.props.noteData.note.orientation || 'leftRight';
        note.props.noteData.note.align = note.props.noteData.note.align || 'right';
      }
    });
    rightNodes.forEach((note, i) => {
      note.props.noteData.ny = rightSortedNodes[i].currentPos;
      note.props.noteData.nx = size[0] + rightSortedNodes[i].layerIndex * rightOffset + marginOffsetFn('right', axes, marginOffset);

      if (note.props.noteData.note) {
        note.props.noteData.note.orientation = note.props.noteData.note.orientation || 'leftRight';
        note.props.noteData.note.align = note.props.noteData.note.align || 'left';
      }
    });
    topNodes.forEach((note, i) => {
      note.props.noteData.nx = topSortedNodes[i].currentPos;
      note.props.noteData.ny = 0 - topSortedNodes[i].layerIndex * topOffset - marginOffsetFn('top', axes, marginOffset);
    });
    bottomNodes.forEach((note, i) => {
      note.props.noteData.nx = bottomSortedNodes[i].currentPos;
      note.props.noteData.ny = size[1] + bottomSortedNodes[i].layerIndex * bottomOffset + marginOffsetFn('bottom', axes, marginOffset);
    });
    return adjustableAnnotations;
  }

  return adjustableAnnotations;
};

var classnames = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.filter(function (d) {
    return d;
  }).join(" ").trim();
};

exports.default = _default;
});

unwrapExports(classnames);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1$1 = ReactPropTypesSecret$2;

var printWarning$2 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$3 = ReactPropTypesSecret_1$1;
  var loggedTypeFailures$1 = {};

  printWarning$2 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$3);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$2(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures$1)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures$1[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$2(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

var checkPropTypes_1$1 = checkPropTypes$1;

var printWarning$3 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$3 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull$1() {
  return null;
}

var factoryWithTypeCheckers$1 = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$3(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull$1);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? printWarning$3('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull$1;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$3('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull$1;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$3(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull$1;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1$1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1$1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction$1() {}

var factoryWithThrowingShims$1 = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1$1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction$1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes$1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers$1(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims$1();
}
});

var Annotation_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(React$1__default);

var _classnames = _interopRequireDefault(classnames);

var _propTypes = _interopRequireDefault(propTypes$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Annotation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Annotation, _React$Component);

  function Annotation() {
    _classCallCheck(this, Annotation);

    return _possibleConstructorReturn(this, _getPrototypeOf(Annotation).apply(this, arguments));
  }

  _createClass(Annotation, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y,
          nx = _this$props.nx,
          ny = _this$props.ny,
          events = _this$props.events;
      var cleanedProps = Object.assign({}, this.props);
      delete cleanedProps.children;
      var cleanedWithoutEvents = Object.assign({}, cleanedProps);
      delete cleanedWithoutEvents.events;
      if (nx !== undefined) cleanedProps.dx = nx - x;
      if (ny !== undefined) cleanedProps.dy = ny - y;

      var childrenWithProps = _react.default.Children.toArray(this.props.children).map(function (child) {
        return _react.default.cloneElement(child, _objectSpread({}, typeof child.type === "string" ? cleanedWithoutEvents : cleanedProps, child.props));
      });

      var wrappedEvents = {};
      Object.keys(events).forEach(function (k) {
        wrappedEvents[k] = function (e) {
          events[k](_this.props, _this.state, e);
        };
      });
      return _react.default.createElement("g", _extends({
        className: (0, _classnames.default)("annotation", this.props.className),
        transform: "translate(".concat(x, ", ").concat(y, ")")
      }, wrappedEvents), childrenWithProps);
    }
  }]);

  return Annotation;
}(_react.default.Component);

exports.default = Annotation;
Annotation.defaultProps = {
  x: 0,
  y: 0,
  dx: 0,
  dy: 0,
  color: "grey",
  events: {}
};
Annotation.propTypes = {
  x: _propTypes.default.number,
  y: _propTypes.default.number,
  dx: _propTypes.default.number,
  dy: _propTypes.default.number,
  color: _propTypes.default.string,
  editMode: _propTypes.default.bool,
  events: _propTypes.default.object
};
});

unwrapExports(Annotation_1);

var EditableAnnotation_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(React$1__default);

var _Annotation = _interopRequireDefault(Annotation_1);

var _classnames = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EditableAnnotation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EditableAnnotation, _React$Component);

  function EditableAnnotation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EditableAnnotation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EditableAnnotation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      x: 0,
      y: 0,
      dx: 0,
      dy: 0
    });

    return _this;
  }

  _createClass(EditableAnnotation, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        x: this.props.x,
        y: this.props.y,
        dx: this.props.dx,
        dy: this.props.dy
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        x: nextProps.x,
        y: nextProps.y,
        dx: nextProps.dx,
        dy: nextProps.dy
      });
    }
  }, {
    key: "getData",
    value: function getData() {
      return Object.assign({}, this.props, this.state);
    }
  }, {
    key: "dragEnd",
    value: function dragEnd() {
      if (this.props.onDragEnd) {
        this.props.onDragEnd(this.getData());
      }
    }
  }, {
    key: "dragStart",
    value: function dragStart() {
      if (this.props.onDragStart) {
        this.props.onDragStart(this.getData());
      }
    }
  }, {
    key: "dragSubject",
    value: function dragSubject(event, data) {
      var _this2 = this;

      this.setState({
        x: this.state.x + data.deltaX,
        y: this.state.y + data.deltaY
      }, function () {
        if (_this2.props.onDrag) _this2.props.onDrag(_this2.getData());
      });
    }
  }, {
    key: "dragConnectorSettings",
    value: function dragConnectorSettings(event, data) {
      var _this3 = this;

      this.setState(data, function () {
        if (_this3.props.onDrag) _this3.props.onDrag(_this3.getData());
      });
    }
  }, {
    key: "dragSubjectSettings",
    value: function dragSubjectSettings(event, data) {
      var _this4 = this;

      this.setState(data, function () {
        if (_this4.props.onDrag) _this4.props.onDrag(_this4.getData());
      });
    }
  }, {
    key: "dragNote",
    value: function dragNote(event, data) {
      var _this5 = this;

      this.setState({
        dx: this.state.dx + data.deltaX,
        dy: this.state.dy + data.deltaY
      }, function () {
        if (_this5.props.onDrag) _this5.props.onDrag(_this5.getData());
      });
    }
  }, {
    key: "render",
    value: function render() {
      var cleanedProps = Object.assign({}, this.props, _objectSpread({}, this.state, {
        dragSubject: this.dragSubject.bind(this),
        dragNote: this.dragNote.bind(this),
        dragSubjectSettings: this.dragSubjectSettings.bind(this),
        dragConnectorSettings: this.dragConnectorSettings.bind(this),
        dragEnd: this.dragEnd.bind(this),
        dragStart: this.dragStart.bind(this),
        editMode: true,
        className: (0, _classnames.default)(this.props.className, "editable")
      }));
      return _react.default.createElement(_Annotation.default, cleanedProps);
    }
  }]);

  return EditableAnnotation;
}(_react.default.Component);

exports.default = EditableAnnotation;
});

unwrapExports(EditableAnnotation_1);

function constant$6(x) {
  return function constant() {
    return x;
  };
}

var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon$3 = 1e-12;
var pi$1 = Math.PI;
var halfPi = pi$1 / 2;
var tau$1 = 2 * pi$1;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi$1 : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}

function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / sqrt(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * sqrt(max(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

function arc() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = constant$6(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - halfPi,
        a1 = endAngle.apply(this, arguments) - halfPi,
        da = abs(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = path$1();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > epsilon$3)) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > tau$1 - epsilon$3) {
      context.moveTo(r1 * cos(a0), r1 * sin(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > epsilon$3) {
        context.moveTo(r0 * cos(a1), r0 * sin(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > epsilon$3) && (padRadius ? +padRadius.apply(this, arguments) : sqrt(r0 * r0 + r1 * r1)),
          rc = min(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > epsilon$3) {
        var p0 = asin(rp / r0 * sin(ap)),
            p1 = asin(rp / r1 * sin(ap));
        if ((da0 -= p0 * 2) > epsilon$3) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > epsilon$3) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * cos(a01),
          y01 = r1 * sin(a01),
          x10 = r0 * cos(a10),
          y10 = r0 * sin(a10);

      // Apply rounded corners?
      if (rc > epsilon$3) {
        var x11 = r1 * cos(a11),
            y11 = r1 * sin(a11),
            x00 = r0 * cos(a00),
            y00 = r0 * sin(a00);

        // Restrict the corner radius according to the sector angle.
        if (da < pi$1) {
          var oc = da0 > epsilon$3 ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
              ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt(ax * ax + ay * ay) * sqrt(bx * bx + by * by))) / 2),
              lc = sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = min(rc, (r0 - lc) / (kc - 1));
          rc1 = min(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > epsilon$3)) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > epsilon$3) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > epsilon$3) || !(da0 > epsilon$3)) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > epsilon$3) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi$1 / 2;
    return [cos(a) * r, sin(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant$6(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant$6(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant$6(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant$6(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$6(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$6(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$6(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
}

function Linear$1(context) {
  this._context = context;
}

Linear$1.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

function curveLinear$1(context) {
  return new Linear$1(context);
}

function x$2(p) {
  return p[0];
}

function y$2(p) {
  return p[1];
}

function line$1() {
  var x = x$2,
      y = y$2,
      defined = constant$6(true),
      context = null,
      curve = curveLinear$1,
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = path$1());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : constant$6(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : constant$6(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$6(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
}

function area$1() {
  var x0 = x$2,
      x1 = null,
      y0 = constant$6(0),
      y1 = y$2,
      defined = constant$6(true),
      context = null,
      curve = curveLinear$1,
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = path$1());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return line$1().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$6(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$6(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant$6(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$6(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$6(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant$6(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$6(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
}

function descending(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

function identity$4(d) {
  return d;
}

function pie() {
  var value = identity$4,
      sortValues = descending,
      sort = null,
      startAngle = constant$6(0),
      endAngle = constant$6(tau$1),
      padAngle = constant$6(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(tau$1, Math.max(-tau$1, endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant$6(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$6(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$6(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$6(+_), pie) : padAngle;
  };

  return pie;
}

var curveRadialLinear = curveRadial(curveLinear$1);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}

function radialLine(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(curveRadial(_)) : c()._curve;
  };

  return l;
}

function radialLine$1() {
  return radialLine(line$1().curve(curveRadialLinear));
}

function radialArea() {
  var a = area$1().curve(curveRadialLinear),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() { return radialLine(x0()); }, delete a.lineX0;
  a.lineEndAngle = function() { return radialLine(x1()); }, delete a.lineX1;
  a.lineInnerRadius = function() { return radialLine(y0()); }, delete a.lineY0;
  a.lineOuterRadius = function() { return radialLine(y1()); }, delete a.lineY1;

  a.curve = function(_) {
    return arguments.length ? c(curveRadial(_)) : c()._curve;
  };

  return a;
}

var circle = {
  draw: function(context, size) {
    var r = Math.sqrt(size / pi$1);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, tau$1);
  }
};

var cross = {
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
};

var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

var diamond = {
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
};

var ka = 0.89081309152928522810,
    kr = Math.sin(pi$1 / 10) / Math.sin(7 * pi$1 / 10),
    kx = Math.sin(tau$1 / 10) * kr,
    ky = -Math.cos(tau$1 / 10) * kr;

var star = {
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = tau$1 * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
};

var square = {
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
};

var sqrt3 = Math.sqrt(3);

var triangle = {
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
};

var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

var wye = {
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
};

var symbols = [
  circle,
  cross,
  diamond,
  square,
  star,
  triangle,
  wye
];

function symbol() {
  var type = constant$6(circle),
      size = constant$6(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = path$1();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : constant$6(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : constant$6(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
}

function noop$1() {}

function point$5(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis$1(context) {
  this._context = context;
}

Basis$1.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point$5(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point$5(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function basis(context) {
  return new Basis$1(context);
}

function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: noop$1,
  areaEnd: noop$1,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: point$5(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function basisClosed(context) {
  return new BasisClosed(context);
}

function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: point$5(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function basisOpen(context) {
  return new BasisOpen(context);
}

function Bundle(context, beta) {
  this._basis = new Basis$1(context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

var bundle = (function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new Basis$1(context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85);

function point$6(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal$1(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal$1.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point$6(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point$6(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var cardinal = (function custom(tension) {

  function cardinal(context) {
    return new Cardinal$1(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0);

function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: noop$1,
  areaEnd: noop$1,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: point$6(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var cardinalClosed = (function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0);

function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: point$6(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var cardinalOpen = (function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0);

function point$7(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > epsilon$3) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > epsilon$3) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom$1(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom$1.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point$7(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var catmullRom = (function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom$1(context, alpha) : new Cardinal$1(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5);

function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: noop$1,
  areaEnd: noop$1,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: point$7(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var catmullRomClosed = (function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5);

function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: point$7(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var catmullRomOpen = (function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5);

function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: noop$1,
  areaEnd: noop$1,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

function linearClosed(context) {
  return new LinearClosed(context);
}

function sign$1(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3$1(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign$1(s0) + sign$1(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2$1(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point$8(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX$1(context) {
  this._context = context;
}

MonotoneX$1.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point$8(this, this._t0, slope2$1(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point$8(this, slope2$1(this, t1 = slope3$1(this, x, y)), t1); break;
      default: point$8(this, this._t0, t1 = slope3$1(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
};

function MonotoneY$1(context) {
  this._context = new ReflectContext$1(context);
}

(MonotoneY$1.prototype = Object.create(MonotoneX$1.prototype)).point = function(x, y) {
  MonotoneX$1.prototype.point.call(this, y, x);
};

function ReflectContext$1(context) {
  this._context = context;
}

ReflectContext$1.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX$1(context) {
  return new MonotoneX$1(context);
}

function monotoneY$1(context) {
  return new MonotoneY$1(context);
}

function Natural$1(context) {
  this._context = context;
}

Natural$1.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints$1(x),
            py = controlPoints$1(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints$1(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

function natural(context) {
  return new Natural$1(context);
}

function Step$1(context, t) {
  this._context = context;
  this._t = t;
}

Step$1.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

function step(context) {
  return new Step$1(context, 0.5);
}

function stepBefore$1(context) {
  return new Step$1(context, 0);
}

function stepAfter$1(context) {
  return new Step$1(context, 1);
}

var slice = Array.prototype.slice;

function none$1(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (var j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
}

function none$2(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
}

function stackValue(d, key) {
  return d[key];
}

function stack() {
  var keys = constant$6([]),
      order = none$2,
      offset = none$1,
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : constant$6(slice.call(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant$6(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? none$2 : typeof _ === "function" ? _ : constant$6(slice.call(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? none$1 : _, stack) : offset;
  };

  return stack;
}

function expand(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  none$1(series, order);
}

function silhouette(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  none$1(series, order);
}

function wiggle(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  none$1(series, order);
}

function ascending$2(series) {
  var sums = series.map(sum);
  return none$2(series).sort(function(a, b) { return sums[a] - sums[b]; });
}

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}

function descending$1(series) {
  return ascending$2(series).reverse();
}

function insideOut(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(sum),
      order = none$2(series).sort(function(a, b) { return sums[b] - sums[a]; }),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
}

function reverse(series) {
  return none$2(series).reverse();
}



var d3Shape = /*#__PURE__*/Object.freeze({
	__proto__: null,
	arc: arc,
	area: area$1,
	line: line$1,
	pie: pie,
	radialArea: radialArea,
	radialLine: radialLine$1,
	symbol: symbol,
	symbols: symbols,
	symbolCircle: circle,
	symbolCross: cross,
	symbolDiamond: diamond,
	symbolSquare: square,
	symbolStar: star,
	symbolTriangle: triangle,
	symbolWye: wye,
	curveBasisClosed: basisClosed,
	curveBasisOpen: basisOpen,
	curveBasis: basis,
	curveBundle: bundle,
	curveCardinalClosed: cardinalClosed,
	curveCardinalOpen: cardinalOpen,
	curveCardinal: cardinal,
	curveCatmullRomClosed: catmullRomClosed,
	curveCatmullRomOpen: catmullRomOpen,
	curveCatmullRom: catmullRom,
	curveLinearClosed: linearClosed,
	curveLinear: curveLinear$1,
	curveMonotoneX: monotoneX$1,
	curveMonotoneY: monotoneY$1,
	curveNatural: natural,
	curveStep: step,
	curveStepAfter: stepAfter$1,
	curveStepBefore: stepBefore$1,
	stack: stack,
	stackOffsetExpand: expand,
	stackOffsetNone: none$1,
	stackOffsetSilhouette: silhouette,
	stackOffsetWiggle: wiggle,
	stackOrderAscending: ascending$2,
	stackOrderDescending: descending$1,
	stackOrderInsideOut: insideOut,
	stackOrderNone: none$2,
	stackOrderReverse: reverse
});

var Builder = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arcBuilder = exports.pathBuilder = exports.lineBuilder = undefined;



var lineBuilder = exports.lineBuilder = function lineBuilder(_ref) {
  var data = _ref.data,
      _ref$curve = _ref.curve,
      curve = _ref$curve === undefined ? d3Shape.curveLinear : _ref$curve,
      canvasContext = _ref.canvasContext,
      className = _ref.className,
      classID = _ref.classID;

  var lineGen = (0, d3Shape.line)().curve(curve);

  var builder = {
    type: "path",
    className: className,
    classID: classID,
    data: data
  };

  if (canvasContext) {
    lineGen.context(canvasContext);
    builder.pathMethods = lineGen;
  } else {
    builder.attrs = {
      d: lineGen(data)
    };
  }

  return builder;
};

var pathBuilder = exports.pathBuilder = function pathBuilder(_ref2) {
  var d = _ref2.d,
      _ref2$curve = _ref2.curve,
      curve = _ref2$curve === undefined ? d3Shape.curveLinear : _ref2$curve,
      canvasContext = _ref2.canvasContext,
      className = _ref2.className,
      classID = _ref2.classID;

  var lineGen = (0, d3Shape.line)().curve(curve);

  var builder = {
    type: "path",
    className: className,
    classID: classID
  };

  if (canvasContext) {
    lineGen.context(canvasContext);
  } else {
    builder.attrs = {
      d: d
    };
  }

  return builder;
};

var arcBuilder = exports.arcBuilder = function arcBuilder(_ref3) {
  var data = _ref3.data,
      canvasContext = _ref3.canvasContext,
      className = _ref3.className,
      classID = _ref3.classID;

  var builder = {
    type: "path",
    className: className,
    classID: classID,
    data: data
  };

  var arcShape = (0, d3Shape.arc)().innerRadius(data.innerRadius || 0).outerRadius(data.outerRadius || data.radius || 2).startAngle(data.startAngle || 0).endAngle(data.endAngle || 2 * Math.PI);

  if (canvasContext) {
    arcShape.context(canvasContext);
  } else {
    builder.attrs = {
      d: arcShape()
    };
  }

  return builder;
};
});

unwrapExports(Builder);
var Builder_1 = Builder.arcBuilder;
var Builder_2 = Builder.pathBuilder;
var Builder_3 = Builder.lineBuilder;

var typeLine = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lineSetup = undefined;



var lineSetup = exports.lineSetup = function lineSetup(_ref) {
  var dx = _ref.dx,
      dy = _ref.dy,
      radius = _ref.radius,
      outerRadius = _ref.outerRadius,
      radiusPadding = _ref.radiusPadding,
      width = _ref.width,
      height = _ref.height;

  var x1 = 0,
      x2 = dx,
      y1 = 0,
      y2 = dy;

  if (outerRadius || radius) {
    var h = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    var angle = Math.asin(-y2 / h);
    var r = (outerRadius || radius) + (radiusPadding || 0);

    x1 = Math.abs(Math.cos(angle) * r) * (x2 < 0 ? -1 : 1);
    y1 = Math.abs(Math.sin(angle) * r) * (y2 < 0 ? -1 : 1);
  }

  if (width && height) {
    if (width > 0 && dx > 0 || width < 0 && dx < 0) {
      if (Math.abs(width) > Math.abs(dx)) x1 = width / 2;else x1 = width;
    }
    if (height > 0 && dy > 0 || height < 0 && dy < 0) {
      if (Math.abs(height) > Math.abs(dy)) y1 = height / 2;else y1 = height;
    }
    if (x1 === width / 2 && y1 === height / 2) {
      x1 = x2;
      y1 = y2;
    }
  }

  return [[x1, y1], [x2, y2]];
};

exports.default = function (connectorData) {
  var data = lineSetup(connectorData);
  return { components: [(0, Builder.lineBuilder)({ data: data, className: "connector" })] };
};
});

unwrapExports(typeLine);
var typeLine_1 = typeLine.lineSetup;

var Handle_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Handle;

var _react = _interopRequireDefault(React$1__default);

var _propTypes = _interopRequireDefault(propTypes$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var events = {
  mouse: {
    start: "mousedown",
    move: "mousemove",
    stop: "mouseup"
  },
  touch: {
    start: "touchstart",
    move: "touchemove",
    stop: "touchend"
  }
};
var listenerOptions = {
  passive: false
};

var makeHandler = function makeHandler(type, handleStart, handleStop, handleDrag) {
  return function (e) {
    e.preventDefault();
    var xDim = "clientX";
    var yDim = "clientY";
    var oX = e.nativeEvent[xDim];
    var oY = e.nativeEvent[yDim];
    var x = oX;
    var y = oY;
    handleStart && handleStart();

    var move = function move(d) {
      d.preventDefault();
      handleDrag && handleDrag(d, {
        deltaX: d[xDim] - x,
        deltaY: d[yDim] - y,
        oDeltaX: d[xDim] - oX,
        oDeltaY: d[yDim] - oY
      });
      x = d[xDim];
      y = d[yDim];
    };

    var stop = function stop(e) {
      e.preventDefault();
      document.removeEventListener(events[type].move, move, listenerOptions);
      document.removeEventListener(events[type].stop, stop, listenerOptions);
      handleStop && handleStop();
    };

    document.addEventListener(events[type].move, move, listenerOptions);
    document.addEventListener(events[type].stop, stop, listenerOptions);
  };
};

function Handle(_ref) {
  var _ref$x = _ref.x,
      x = _ref$x === void 0 ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === void 0 ? 0 : _ref$y,
      _ref$r = _ref.r,
      r = _ref$r === void 0 ? 10 : _ref$r,
      handleStart = _ref.handleStart,
      handleStop = _ref.handleStop,
      handleDrag = _ref.handleDrag;
  return _react.default.createElement("circle", {
    className: "handle",
    cx: x,
    cy: y,
    r: r,
    onMouseDown: makeHandler("mouse", handleStart, handleStop, handleDrag),
    onTouchStart: makeHandler("touch", handleStart, handleStop, handleDrag),
    strokeDasharray: "5",
    stroke: "grey",
    fill: "white",
    fillOpacity: 0
  });
}

Handle.propTypes = {
  x: _propTypes.default.number,
  y: _propTypes.default.number,
  r: _propTypes.default.number,
  handleStart: _propTypes.default.func,
  handleStop: _propTypes.default.func,
  handleDrag: _propTypes.default.func
};
});

unwrapExports(Handle_1);

var Connector_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(React$1__default);

var _Handle = _interopRequireDefault(Handle_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Connector =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Connector, _React$Component);

  function Connector() {
    _classCallCheck(this, Connector);

    return _possibleConstructorReturn(this, _getPrototypeOf(Connector).apply(this, arguments));
  }

  _createClass(Connector, [{
    key: "getComponents",
    value: function getComponents() {}
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          color = _this$props.color,
          dx = _this$props.dx,
          dy = _this$props.dy,
          customID = _this$props.customID,
          editMode = _this$props.editMode;

      if (dx === 0 && dy === 0) {
        return _react.default.createElement("g", {
          className: "annotation-connector"
        });
      }

      var d = this.getComponents(this.props) || [];
      var cleanedProps = Object.assign({}, this.props);
      delete cleanedProps.children;

      var childrenWithProps = _react.default.Children.map(this.props.children, function (child) {
        return _react.default.cloneElement(child, _objectSpread({}, cleanedProps, child.props, {
          scale: cleanedProps.endScale || child.props.endScale,
          lineData: d.components[0].data
        }));
      });

      var handles;

      if (editMode && d.handles && d.handles.length > 0) {
        handles = d.handles.map(function (h, i) {
          return _react.default.createElement(_Handle.default, {
            key: "connectorhandle-".concat(i),
            handleStart: _this.props.dragStart,
            handleStop: _this.props.dragEnd,
            x: h.x,
            y: h.y,
            offsetParent: h.offsetParent && _this.connector,
            handleDrag: function handleDrag(e, data) {
              _this.props.dragConnectorSettings(e, d.handleFunction(h, data));
            }
          });
        });
      }

      return _react.default.createElement("g", _extends({
        className: "annotation-connector"
      }, this.props.gAttrs), d.components && d.components.map(function (c, i) {
        var attrs = {};
        if (!c) return null;
        Object.keys(c.attrs).forEach(function (k) {
          if (c.attrs[k] && k !== "text") {
            attrs[k.replace(/-([a-z])/g, function (g) {
              return g[1].toUpperCase();
            })] = c.attrs[k];
          }
        });
        return _react.default.createElement(c.type, _extends({
          mask: customID ? "url(#".concat(customID, ")") : undefined,
          key: i,
          className: c.className,
          fill: "none",
          stroke: color
        }, attrs), c.attrs.text);
      }), childrenWithProps, handles);
    }
  }]);

  return Connector;
}(_react.default.Component);

exports.default = Connector;
});

unwrapExports(Connector_1);

var ConnectorLine_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(React$1__default);

var _typeLine = _interopRequireDefault(typeLine);

var _Connector2 = _interopRequireDefault(Connector_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ConnectorLine =
/*#__PURE__*/
function (_Connector) {
  _inherits(ConnectorLine, _Connector);

  function ConnectorLine() {
    _classCallCheck(this, ConnectorLine);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConnectorLine).apply(this, arguments));
  }

  _createClass(ConnectorLine, [{
    key: "getComponents",
    value: function getComponents(_ref) {
      var x = _ref.x,
          y = _ref.y,
          dy = _ref.dy,
          dx = _ref.dx,
          radius = _ref.radius,
          outerRadius = _ref.outerRadius,
          width = _ref.width,
          height = _ref.height;
      return (0, _typeLine.default)({
        x: x,
        y: y,
        dx: dx,
        dy: dy,
        radius: radius,
        outerRadius: outerRadius,
        width: width,
        height: height
      });
    }
  }]);

  return ConnectorLine;
}(_Connector2.default);

exports.default = ConnectorLine;
});

unwrapExports(ConnectorLine_1);

var typeElbow = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



exports.default = function (_ref) {
  var dx = _ref.dx,
      dy = _ref.dy,
      radius = _ref.radius,
      outerRadius = _ref.outerRadius,
      radiusPadding = _ref.radiusPadding,
      width = _ref.width,
      height = _ref.height;

  var x1 = 0,
      x2 = dx,
      y1 = 0,
      y2 = dy;

  if (width && height) {
    if (width > 0 && dx > 0 || width < 0 && dx < 0) {
      if (Math.abs(width) > Math.abs(dx)) x1 = width / 2;else x1 = width;
    }
    if (height > 0 && dy > 0 || height < 0 && dy < 0) {
      if (Math.abs(height) > Math.abs(dy)) y1 = height / 2;else y1 = height;
    }
    if (x1 === width / 2 && y1 === height / 2) {
      x1 = x2;
      y1 = y2;
    }
  }

  var data = [[x1, y1], [x2, y2]];

  var diffY = y2 - y1;
  var diffX = x2 - x1;
  var xe = x2;
  var ye = y2;
  var opposite = y2 < y1 && x2 > x1 || x2 < x1 && y2 > y1 ? -1 : 1;

  if (Math.abs(diffX) < Math.abs(diffY)) {
    xe = x2;
    ye = y1 + diffX * opposite;
  } else {
    ye = y2;
    xe = x1 + diffY * opposite;
  }

  if (outerRadius || radius) {
    var r = (outerRadius || radius) + (radiusPadding || 0);
    var length = r / Math.sqrt(2);

    if (Math.abs(diffX) > length && Math.abs(diffY) > length) {
      x1 = length * (x2 < 0 ? -1 : 1);
      y1 = length * (y2 < 0 ? -1 : 1);
      data = [[x1, y1], [xe, ye], [x2, y2]];
    } else if (Math.abs(diffX) > Math.abs(diffY)) {
      var angle = Math.asin(-y2 / r);
      x1 = Math.abs(Math.cos(angle) * r) * (x2 < 0 ? -1 : 1);
      data = [[x1, y2], [x2, y2]];
    } else {
      var _angle = Math.acos(x2 / r);
      y1 = Math.abs(Math.sin(_angle) * r) * (y2 < 0 ? -1 : 1);
      data = [[x2, y1], [x2, y2]];
    }
  } else {
    data = [[x1, y1], [xe, ye], [x2, y2]];
  }

  return { components: [(0, Builder.lineBuilder)({ data: data, className: "connector" })] };
};
});

unwrapExports(typeElbow);

var ConnectorElbow_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(React$1__default);

var _typeElbow = _interopRequireDefault(typeElbow);

var _Connector2 = _interopRequireDefault(Connector_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ConnectorElbow =
/*#__PURE__*/
function (_Connector) {
  _inherits(ConnectorElbow, _Connector);

  function ConnectorElbow() {
    _classCallCheck(this, ConnectorElbow);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConnectorElbow).apply(this, arguments));
  }

  _createClass(ConnectorElbow, [{
    key: "getComponents",
    value: function getComponents(_ref) {
      var x = _ref.x,
          y = _ref.y,
          dy = _ref.dy,
          dx = _ref.dx,
          radius = _ref.radius,
          radiusPadding = _ref.radiusPadding,
          outerRadius = _ref.outerRadius,
          width = _ref.width,
          height = _ref.height;
      return (0, _typeElbow.default)({
        x: x,
        y: y,
        dx: dx,
        dy: dy,
        radius: radius,
        radiusPadding: radiusPadding,
        outerRadius: outerRadius,
        width: width,
        height: height
      });
    }
  }]);

  return ConnectorElbow;
}(_Connector2.default);

exports.default = ConnectorElbow;
});

unwrapExports(ConnectorElbow_1);

var typeCurve = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});







function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var createPoints = function createPoints(offset) {
  var anchors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  var diff = { x: offset.x / (anchors + 1), y: offset.y / (anchors + 1) };
  var p = [];

  var i = 1;
  for (; i <= anchors; i++) {
    p.push([diff.x * i + i % 2 * 20, diff.y * i - i % 2 * 20]);
  }
  return p;
};

exports.default = function (_ref) {
  var curve = _ref.curve,
      points = _ref.points,
      x = _ref.x,
      y = _ref.y,
      dx = _ref.dx,
      dy = _ref.dy,
      radius = _ref.radius,
      outerRadius = _ref.outerRadius,
      width = _ref.width,
      height = _ref.height,
      editMode = _ref.editMode;

  if (!points || typeof points === "number") {
    points = createPoints({ x: dx, y: dy }, points);
  }
  if (!curve) {
    curve = d3Shape.curveCatmullRom;
  }

  var handles = [];

  if (editMode) {
    handles = points.map(function (c, i) {
      return { index: i, x: c[0], y: c[1] };
    });
  }

  var data = (0, typeLine.lineSetup)({ x: x, y: y, dx: dx, dy: dy, radius: radius, outerRadius: outerRadius, width: width, height: height });
  data = [data[0]].concat(_toConsumableArray(points), [data[1]]);
  var components = [(0, Builder.lineBuilder)({ data: data, curve: curve, className: "connector" })];

  return { components: components, handles: handles, points: points };
};
});

unwrapExports(typeCurve);

var ConnectorCurve_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeCurve = _interopRequireDefault(typeCurve);

var _Connector2 = _interopRequireDefault(Connector_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ConnectorCurve =
/*#__PURE__*/
function (_Connector) {
  _inherits(ConnectorCurve, _Connector);

  function ConnectorCurve() {
    _classCallCheck(this, ConnectorCurve);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConnectorCurve).apply(this, arguments));
  }

  _createClass(ConnectorCurve, [{
    key: "getComponents",
    value: function getComponents(_ref) {
      var curve = _ref.curve,
          points = _ref.points,
          x = _ref.x,
          y = _ref.y,
          dx = _ref.dx,
          dy = _ref.dy,
          radius = _ref.radius,
          outerRadius = _ref.outerRadius,
          width = _ref.width,
          height = _ref.height,
          editMode = _ref.editMode;
      var components = (0, _typeCurve.default)({
        curve: curve,
        points: points,
        x: x,
        y: y,
        dx: dx,
        dy: dy,
        radius: radius,
        outerRadius: outerRadius,
        width: width,
        height: height,
        editMode: editMode
      });
      components.handleKeys = {
        points: components.handles
      };

      components.handleFunction = function (h, data) {
        var p = components.points.slice(0);
        p[h.index] = [h.x + data.oDeltaX, h.y + data.oDeltaY];
        return {
          points: p
        };
      };

      return components;
    }
  }]);

  return ConnectorCurve;
}(_Connector2.default);

exports.default = ConnectorCurve;
});

unwrapExports(ConnectorCurve_1);

var endDot = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



exports.default = function (_ref) {
  var lineData = _ref.lineData,
      _ref$scale = _ref.scale,
      scale = _ref$scale === undefined ? 1 : _ref$scale;

  var dot = (0, Builder.arcBuilder)({
    className: "connector-end connector-dot",
    classID: "connector-end",
    data: { radius: 3 * Math.sqrt(scale) }
  });
  dot.attrs.transform = "translate(" + lineData[0][0] + ", " + lineData[0][1] + ")";

  return { components: [dot] };
};
});

unwrapExports(endDot);

var ConnectorEnd_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(React$1__default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ConnectorEnd =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConnectorEnd, _React$Component);

  function ConnectorEnd() {
    _classCallCheck(this, ConnectorEnd);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConnectorEnd).apply(this, arguments));
  }

  _createClass(ConnectorEnd, [{
    key: "getComponents",
    value: function getComponents() {}
  }, {
    key: "render",
    value: function render() {
      var color = this.props.color;
      var d = this.getComponents(this.props) || [];
      var c = d.components[0];
      return _react.default.createElement(c.type, _extends({
        className: c.className
      }, c.attrs, {
        fill: color
      }));
    }
  }]);

  return ConnectorEnd;
}(_react.default.Component);

exports.default = ConnectorEnd;
});

unwrapExports(ConnectorEnd_1);

var ConnectorEndDot_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(React$1__default);

var _endDot = _interopRequireDefault(endDot);

var _ConnectorEnd2 = _interopRequireDefault(ConnectorEnd_1);

var _propTypes = _interopRequireDefault(propTypes$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ConnectorEndDot =
/*#__PURE__*/
function (_ConnectorEnd) {
  _inherits(ConnectorEndDot, _ConnectorEnd);

  function ConnectorEndDot() {
    _classCallCheck(this, ConnectorEndDot);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConnectorEndDot).apply(this, arguments));
  }

  _createClass(ConnectorEndDot, [{
    key: "getComponents",
    value: function getComponents(_ref) {
      var x = _ref.x,
          y = _ref.y,
          dy = _ref.dy,
          dx = _ref.dx,
          lineData = _ref.lineData,
          scale = _ref.scale;
      return (0, _endDot.default)({
        x: x,
        y: y,
        dx: dx,
        dy: dy,
        lineData: lineData,
        scale: scale
      });
    }
  }]);

  return ConnectorEndDot;
}(_ConnectorEnd2.default);

exports.default = ConnectorEndDot;
ConnectorEndDot.propTypes = {
  x: _propTypes.default.number,
  y: _propTypes.default.number,
  dx: _propTypes.default.number,
  dy: _propTypes.default.number,
  scale: _propTypes.default.number,
  lineData: _propTypes.default.array //array of arrays of x,y coordinates for the connector line

};
});

unwrapExports(ConnectorEndDot_1);

var endArrow = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



exports.default = function (_ref) {
  var dx = _ref.dx,
      dy = _ref.dy,
      start = _ref.start,
      end = _ref.end,
      _ref$scale = _ref.scale,
      scale = _ref$scale === undefined ? 1 : _ref$scale;

  if (!start) {
    start = [dx, dy];
  } else {
    start = [-end[0] + start[0], -end[1] + start[1]];
  }
  if (!end) {
    end = [0, 0];
  }

  var x1 = end[0],
      y1 = end[1];

  var size = 10 * scale;
  var angleOffset = 16 / 180 * Math.PI;
  var angle = Math.atan(start[1] / start[0]);

  if (start[0] < 0) {
    angle += Math.PI;
  }

  var data = [[x1, y1], [Math.cos(angle + angleOffset) * size + x1, Math.sin(angle + angleOffset) * size + y1], [Math.cos(angle - angleOffset) * size + x1, Math.sin(angle - angleOffset) * size + y1], [x1, y1]];

  //TODO add in reverse
  // if (canvasContext.arrowReverse){
  //   data = [[x1, y1],
  //   [Math.cos(angle + angleOffset)*size, Math.sin(angle + angleOffset)*size],
  //   [Math.cos(angle - angleOffset)*size, Math.sin(angle - angleOffset)*size],
  //   [x1, y1]
  //   ]
  // } else {
  //   data = [[x1, y1],
  //   [Math.cos(angle + angleOffset)*size, Math.sin(angle + angleOffset)*size],
  //   [Math.cos(angle - angleOffset)*size, Math.sin(angle - angleOffset)*size],
  //   [x1, y1]
  //   ]
  // }

  return {
    components: [(0, Builder.lineBuilder)({
      data: data,
      className: "connector-end connector-arrow",
      classID: "connector-end"
    })]
  };
};
});

unwrapExports(endArrow);

var ConnectorEndArrow_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(React$1__default);

var _endArrow = _interopRequireDefault(endArrow);

var _ConnectorEnd2 = _interopRequireDefault(ConnectorEnd_1);

var _propTypes = _interopRequireDefault(propTypes$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ConnectorEndArrow =
/*#__PURE__*/
function (_ConnectorEnd) {
  _inherits(ConnectorEndArrow, _ConnectorEnd);

  function ConnectorEndArrow() {
    _classCallCheck(this, ConnectorEndArrow);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConnectorEndArrow).apply(this, arguments));
  }

  _createClass(ConnectorEndArrow, [{
    key: "getComponents",
    value: function getComponents(_ref) {
      var x = _ref.x,
          y = _ref.y,
          dy = _ref.dy,
          dx = _ref.dx,
          lineData = _ref.lineData,
          scale = _ref.scale;
      var start = lineData[1];
      var end = lineData[0];
      var distance = Math.sqrt(Math.pow(start[0] - end[0], 2) + Math.pow(start[1] - end[1], 2));

      if (distance < 5 && lineData[2]) {
        start = lineData[2];
      }

      return (0, _endArrow.default)({
        x: x,
        y: y,
        dx: dx,
        dy: dy,
        start: start,
        end: end,
        scale: scale
      });
    }
  }]);

  return ConnectorEndArrow;
}(_ConnectorEnd2.default);

exports.default = ConnectorEndArrow;
ConnectorEndArrow.propTypes = {
  x: _propTypes.default.number,
  y: _propTypes.default.number,
  dx: _propTypes.default.number,
  dy: _propTypes.default.number,
  scale: _propTypes.default.number,
  lineData: _propTypes.default.array
};
});

unwrapExports(ConnectorEndArrow_1);

var Subject_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(React$1__default);

var _Handle = _interopRequireDefault(Handle_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FILLABLE = ["SubjectCircle", "SubjectRect"];

var Subject =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Subject, _React$Component);

  function Subject() {
    _classCallCheck(this, Subject);

    return _possibleConstructorReturn(this, _getPrototypeOf(Subject).apply(this, arguments));
  }

  _createClass(Subject, [{
    key: "getComponents",
    value: function getComponents() {}
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          editMode = _this$props.editMode,
          color = _this$props.color,
          _this$props$fill = _this$props.fill,
          fill = _this$props$fill === void 0 ? "none" : _this$props$fill,
          _this$props$fillOpaci = _this$props.fillOpacity,
          fillOpacity = _this$props$fillOpaci === void 0 ? 1 : _this$props$fillOpaci;
      var d = this.getComponents(this.props) || {};
      var handles;

      if (editMode) {
        handles = [_react.default.createElement(_Handle.default, {
          key: "subject-handle",
          handleStart: this.props.dragStart,
          handleStop: this.props.dragEnd,
          handleDrag: this.props.dragSubject
        })];

        if (d.handles) {
          handles = handles.concat(d.handles.map(function (h, i) {
            return _react.default.createElement(_Handle.default, {
              key: "subjecthandle-".concat(i),
              handleStart: _this.props.dragStart,
              handleStop: _this.props.dragEnd,
              x: h.x,
              y: h.y,
              offsetParent: h.offsetParent && _this.subject,
              handleDrag: function handleDrag(e, data) {
                _this.props.dragSubjectSettings(e, d.handleFunction(h, data));
              }
            });
          }));
        }
      }

      var honorFill = FILLABLE.indexOf(this.name) !== -1;
      return _react.default.createElement("g", _extends({
        className: "annotation-subject"
      }, this.props.gAttrs, {
        ref: function ref(subject) {
          _this.subject = subject;
        }
      }), d.components && d.components.map(function (c, i) {
        var attrs = {};
        if (!c) return null;
        Object.keys(c.attrs).forEach(function (k) {
          if (c.attrs[k] && k !== "text") {
            attrs[k.replace(/-([a-z])/g, function (g) {
              return g[1].toUpperCase();
            })] = c.attrs[k];
          }
        });
        return _react.default.createElement(c.type, _extends({
          key: i,
          className: c.className,
          fill: honorFill && fill || "none",
          fillOpacity: honorFill && fillOpacity,
          stroke: color
        }, attrs), c.attrs.text);
      }), handles);
    }
  }]);

  return Subject;
}(_react.default.Component);

exports.default = Subject;
});

unwrapExports(Subject_1);

var alignment = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var leftRightDynamic = exports.leftRightDynamic = function leftRightDynamic(align, y) {
  if (!align || align === "dynamic" || align === "left" || align === "right") {
    if (y < 0) {
      align = "top";
    } else {
      align = "bottom";
    }
  }
  return align;
};

var topBottomDynamic = exports.topBottomDynamic = function topBottomDynamic(align, x) {
  if (!align || align === "dynamic" || align === "top" || align === "bottom") {
    if (x < 0) {
      align = "right";
    } else {
      align = "left";
    }
  }
  return align;
};

var orientationTopBottom = ["topBottom", "top", "bottom"];
var orientationLeftRight = ["leftRight", "left", "right"];

exports.default = function (_ref) {
  var _ref$padding = _ref.padding,
      padding = _ref$padding === undefined ? 0 : _ref$padding,
      _ref$bbox = _ref.bbox,
      bbox = _ref$bbox === undefined ? { x: 0, y: 0, width: 0, height: 0 } : _ref$bbox,
      align = _ref.align,
      orientation = _ref.orientation,
      _ref$offset = _ref.offset,
      offset = _ref$offset === undefined ? { x: 0, y: 0 } : _ref$offset;

  var x = -bbox.x;
  var y = -bbox.y;
  if (orientationTopBottom.indexOf(orientation) !== -1) {
    align = topBottomDynamic(align, offset.x);
    if (offset.y < 0 && orientation === "topBottom" || orientation === "top") {
      y -= bbox.height + padding;
    } else {
      y += padding;
    }

    if (align === "middle") {
      x -= bbox.width / 2;
    } else if (align === "right") {
      x -= bbox.width;
    }
  } else if (orientationLeftRight.indexOf(orientation) !== -1) {
    align = leftRightDynamic(align, offset.y);
    if (offset.x < 0 && orientation === "leftRight" || orientation === "left") {
      x -= bbox.width + padding;
    } else {
      x += padding;
    }

    if (align === "middle") {
      y -= bbox.height / 2;
    } else if (align === "top") {
      y -= bbox.height;
    }
  }

  return { x: x, y: y };
};
});

unwrapExports(alignment);
var alignment_1 = alignment.leftRightDynamic;
var alignment_2 = alignment.topBottomDynamic;

var lineTypeVertical = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});





exports.default = function (_ref) {
  var align = _ref.align,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      bbox = _ref.bbox,
      offset = _ref.offset;

  align = (0, alignment.leftRightDynamic)(align, offset.y);

  if (align === "top") {
    y -= bbox.height;
  } else if (align === "middle") {
    y -= bbox.height / 2;
  }

  var data = [[x, y], [x, y + bbox.height]];
  return { components: [(0, Builder.lineBuilder)({ data: data, className: "note-line" })] };
};
});

unwrapExports(lineTypeVertical);

var lineTypeHorizontal = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});





exports.default = function (_ref) {
  var align = _ref.align,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      offset = _ref.offset,
      bbox = _ref.bbox;

  align = (0, alignment.topBottomDynamic)(align, offset.x);

  if (align === "right") {
    x -= bbox.width;
  } else if (align === "middle") {
    x -= bbox.width / 2;
  }

  var data = [[x, y], [x + bbox.width, y]];
  return { components: [(0, Builder.lineBuilder)({ data: data, className: "note-line" })] };
};
});

unwrapExports(lineTypeHorizontal);

var Note_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(React$1__default);

var _alignment4 = _interopRequireDefault(alignment);

var _Handle = _interopRequireDefault(Handle_1);

var _lineTypeVertical = _interopRequireDefault(lineTypeVertical);

var _lineTypeHorizontal = _interopRequireDefault(lineTypeHorizontal);

var _propTypes = _interopRequireDefault(propTypes$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getOuterBBox = function getOuterBBox() {
  for (var _len = arguments.length, domNodes = new Array(_len), _key = 0; _key < _len; _key++) {
    domNodes[_key] = arguments[_key];
  }

  return domNodes.concat().reduce(function (p, c) {
    if (c) {
      var bbox = c.getBBox();
      p.x = Math.min(p.x, bbox.x);
      p.y = Math.min(p.y, bbox.y);
      p.width = Math.max(p.width, bbox.width);
      var yOffset = c && c.attributes && c.attributes.y;
      p.height = Math.max(p.height, (yOffset && parseFloat(yOffset.value) || 0) + bbox.height);
    }

    return p;
  }, {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
};

var Note =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Note, _React$Component);

  function Note(props) {
    var _this;

    _classCallCheck(this, Note);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Note).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      translateX: 0,
      translateY: 0,
      labelOffset: 0,
      changed: 0,
      bbox: {
        width: 0,
        height: 0,
        x: 0,
        y: 0
      }
    });

    _this.updateText = _this.updateText.bind(_assertThisInitialized(_assertThisInitialized(_this))); // this.note = React.createRef()
    // this.title = React.createRef()
    // this.label = React.createRef()

    return _this;
  }

  _createClass(Note, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateText(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.title !== this.props.title || nextProps.label !== this.props.label || nextProps.wrap !== this.props.wrap) {
        this.updateText(nextProps);
      }

      if (nextProps.editMode && (nextProps.align === "dynamic" || !nextProps.align)) {
        this.updateText(nextProps);
      }
    }
  }, {
    key: "updateText",
    value: function updateText(_ref) {
      var _this2 = this;

      var orientation = _ref.orientation,
          padding = _ref.padding,
          align = _ref.align,
          lineType = _ref.lineType,
          label = _ref.label,
          title = _ref.title,
          wrap = _ref.wrap,
          wrapSplitter = _ref.wrapSplitter,
          dx = _ref.dx,
          dy = _ref.dy;
      var newState = {
        titleWrapped: null,
        labelWrapped: null
      };
      newState.changed = this.state.changed + 1;

      if (title) {
        newState.titleWrapped = this.title && this.wrapText(this.title, newState.changed, title, wrap, wrapSplitter);
      }

      if (label) newState.labelWrapped = this.label && this.wrapText(this.label, newState.changed, label, wrap, wrapSplitter);
      this.setState(newState, function () {
        var setLabel = function setLabel() {
          var bbox = getOuterBBox(_this2.title, _this2.label);
          var noteParams = {
            padding: padding,
            bbox: bbox,
            offset: {
              x: dx,
              y: dy
            },
            orientation: orientation,
            align: align
          };
          if (lineType === "vertical") noteParams.orientation = "leftRight";else if (lineType === "horizontal") noteParams.orientation = "topBottom";

          var _alignment = (0, _alignment4.default)(noteParams),
              x = _alignment.x,
              y = _alignment.y;

          _this2.setState({
            translateX: x,
            translateY: y,
            bbox: bbox
          });
        };

        _this2.setState({
          labelOffset: title && _this2.title.getBBox().height || 0
        }, setLabel);
      });
    }
  }, {
    key: "wrapText",
    value: function wrapText(textRef, key, text, width, wrapSplitter) {
      var initialAttrs = {
        x: 0,
        dy: "1.2em"
      };
      var words = text.split(wrapSplitter || /[ \t\r\n]+/).reverse().filter(function (w) {
        return w !== "";
      });
      var word,
          line = [];
      var tspans = [];

      while (word = words.pop()) {
        line.push(word);
        textRef.lastChild.textContent = line.join(" ");
        var length = textRef.lastChild.getComputedTextLength();
        textRef.lastChild.textContent = "";

        if (length > width && line.length > 1) {
          line.pop();
          tspans.push(_react.default.createElement("tspan", _extends({
            key: tspans.length + text
          }, initialAttrs), line.join(" ")));
          line = [word];
        }
      }

      if (line.length !== 0) {
        tspans.push(_react.default.createElement("tspan", _extends({
          key: tspans.length + text
        }, initialAttrs), line.join(" ")));
      }

      return _react.default.createElement("tspan", _extends({}, initialAttrs, {
        key: key + text
      }), tspans);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          orientation = _this$props.orientation,
          padding = _this$props.padding,
          align = _this$props.align,
          dx = _this$props.dx,
          dy = _this$props.dy,
          lineType = _this$props.lineType;

      if (this.state.bbox.width && (prevProps.dx !== this.props.dx || prevProps.dy !== this.props.dy) && (this.title || this.label)) {
        var bbox = getOuterBBox(this.title, this.label);
        var noteParams = {
          padding: padding,
          bbox: bbox,
          offset: {
            x: dx,
            y: dy
          },
          orientation: orientation,
          align: align
        };
        if (lineType === "vertical") noteParams.orientation = "leftRight";else if (lineType === "horizontal") noteParams.orientation = "topBottom";

        var _alignment2 = (0, _alignment4.default)(noteParams),
            x = _alignment2.x,
            y = _alignment2.y;

        var updates = {
          bbox: bbox
        };
        if (this.state.translateX !== x) updates.translateX = x;
        if (this.state.translateY !== y) updates.translateY = y;

        if (updates.translateX !== undefined || updates.translateY !== undefined) {
          this.setState(updates);
        }
      } else if (this.state.align !== prevProps.align || this.props.orientation !== prevProps.orientation || this.props.padding !== prevProps.padding) {
        var _noteParams = {
          padding: padding,
          bbox: this.state.bbox,
          offset: {
            x: dx,
            y: dy
          },
          orientation: orientation,
          align: align
        };
        if (lineType === "vertical") _noteParams.orientation = "leftRight";else if (lineType === "horizontal") _noteParams.orientation = "topBottom";

        var _alignment3 = (0, _alignment4.default)(_noteParams),
            _x = _alignment3.x,
            _y = _alignment3.y;

        var _updates = {};
        if (this.state.translateX !== _x) _updates.translateX = _x;
        if (this.state.translateY !== _y) _updates.translateY = _y;

        if (_updates.translateX !== undefined || _updates.translateY !== undefined) {
          this.setState(_updates);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          dx = _this$props2.dx,
          dy = _this$props2.dy,
          title = _this$props2.title,
          label = _this$props2.label,
          align = _this$props2.align,
          editMode = _this$props2.editMode,
          lineType = _this$props2.lineType,
          color = _this$props2.color,
          titleColor = _this$props2.titleColor,
          labelColor = _this$props2.labelColor,
          bgPadding = _this$props2.bgPadding;
      var bgPaddingFinal = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      };

      if (typeof bgPadding === "number") {
        bgPaddingFinal = {
          top: bgPadding,
          bottom: bgPadding,
          left: bgPadding,
          right: bgPadding
        };
      } else if (bgPadding && _typeof(bgPadding) === "object") {
        bgPaddingFinal = Object.assign(bgPaddingFinal, bgPadding);
      }

      var noteTitle, noteText, noteLineType;

      if (title) {
        noteTitle = _react.default.createElement("text", {
          ref: function ref(el) {
            return _this3.title = el;
          },
          className: "annotation-note-title",
          fontWeight: "bold",
          key: "title",
          fill: titleColor || color
        }, this.state.titleWrapped || _react.default.createElement("tspan", {
          x: 0,
          dy: ".8em"
        }, title));
      }

      if (label) {
        noteText = _react.default.createElement("text", {
          ref: function ref(el) {
            return _this3.label = el;
          },
          className: "annotation-note-label",
          y: this.state.labelOffset * 1.1,
          key: "label",
          fill: labelColor || color
        }, this.state.labelWrapped || _react.default.createElement("tspan", {
          x: 0,
          dy: ".8em"
        }, label));
      }

      if (lineType && this.state.bbox.width) {
        var noteParams = {
          bbox: this.state.bbox,
          align: align,
          offset: {
            x: dx,
            y: dy
          }
        };
        var noteComponent = (lineType === "vertical" && (0, _lineTypeVertical.default)(noteParams) || lineType === "horizontal" && (0, _lineTypeHorizontal.default)(noteParams)).components[0];
        noteLineType = _react.default.createElement(noteComponent.type, _extends({
          className: noteComponent.className
        }, noteComponent.attrs, {
          stroke: color
        }));
      }

      var handle;

      if (editMode) {
        handle = _react.default.createElement(_Handle.default, {
          handleStart: this.props.dragStart,
          handleStop: this.props.dragEnd,
          handleDrag: this.props.dragNote
        });
      }

      return _react.default.createElement("g", _extends({
        transform: "translate(".concat(dx, ", ").concat(dy, ")"),
        className: "annotation-note"
      }, this.props.gProps), _react.default.createElement("g", {
        className: "annotation-note-content",
        transform: "translate(".concat(this.state.translateX, ",\n          ").concat(this.state.translateY, ")"),
        ref: function ref(el) {
          return _this3.note = el;
        }
      }, _react.default.createElement("rect", {
        className: "annotation-note-bg",
        width: this.state.bbox.width + bgPaddingFinal.left + bgPaddingFinal.right,
        x: -bgPaddingFinal.left,
        y: -bgPaddingFinal.top,
        height: this.state.bbox.height + bgPaddingFinal.top + bgPaddingFinal.bottom,
        stroke: "none",
        fill: "white",
        fillOpacity: "0"
      }), noteTitle, noteText), noteLineType, handle);
    }
  }]);

  return Note;
}(_react.default.Component);

exports.default = Note;
Note.defaultProps = {
  wrap: 120,
  align: "dynamic",
  orientation: "topBottom",
  padding: 3
};
Note.propTypes = {
  dx: _propTypes.default.number,
  dy: _propTypes.default.number,
  title: _propTypes.default.string,
  label: _propTypes.default.string,
  orientation: _propTypes.default.oneOf(["leftRight", "topBottom"]),
  padding: _propTypes.default.number,
  bgPadding: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.object]),
  align: _propTypes.default.oneOf(["left", "right", "middle", "top", "bottom", "dynamic"]),
  editMode: _propTypes.default.bool,
  lineType: _propTypes.default.oneOf(["vertical", "horizontal"]),
  color: _propTypes.default.string,
  titleColor: _propTypes.default.string,
  labelColor: _propTypes.default.string
};
});

unwrapExports(Note_1);

var JSXNote_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = JSXNote;

var _react = _interopRequireDefault(React$1__default);

var _Handle = _interopRequireDefault(Handle_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */
function JSXNote(props) {
  var note = props.note,
      dx = props.dx,
      dy = props.dy,
      editMode = props.editMode,
      dragStart = props.dragStart,
      dragEnd = props.dragEnd,
      dragNote = props.dragNote;
  var handle;

  if (editMode) {
    handle = _react.default.createElement(_Handle.default, {
      handleStart: dragStart,
      handleStop: dragEnd,
      handleDrag: dragNote
    });
  }

  return _react.default.createElement("g", {
    className: "annotation-note",
    transform: "translate(".concat(dx, ", ").concat(dy, ")")
  }, typeof note === "function" ? note(props) : note, handle);
}
});

unwrapExports(JSXNote_1);

var Type = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _react = _interopRequireDefault(React$1__default);

var _Annotation = _interopRequireDefault(Annotation_1);

var _EditableAnnotation = _interopRequireDefault(EditableAnnotation_1);

var _ConnectorLine = _interopRequireDefault(ConnectorLine_1);

var _ConnectorElbow = _interopRequireDefault(ConnectorElbow_1);

var _ConnectorCurve = _interopRequireDefault(ConnectorCurve_1);

var _ConnectorEndDot = _interopRequireDefault(ConnectorEndDot_1);

var _ConnectorEndArrow = _interopRequireDefault(ConnectorEndArrow_1);

var _Subject = _interopRequireDefault(Subject_1);

var _Note = _interopRequireDefault(Note_1);

var _JSXNote = _interopRequireDefault(JSXNote_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var getAnnotationType = function getAnnotationType(editMode) {
  return editMode ? _EditableAnnotation.default : _Annotation.default;
};

function _default(props, Connector) {
  var NoteDefaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var Subject = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _Subject.default;
  var SubjectDefaultProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var NoteType = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _Note.default;
  var _props$disable = props.disable,
      disable = _props$disable === void 0 ? [] : _props$disable,
      connector = props.connector,
      note = props.note,
      subject = props.subject,
      x = props.x,
      y = props.y,
      dx = props.dx,
      dy = props.dy,
      nx = props.nx,
      ny = props.ny,
      color = props.color,
      className = props.className,
      onDrag = props.onDrag,
      onDragStart = props.onDragStart,
      onDragEnd = props.onDragEnd,
      editMode = props.editMode,
      events = props.events;
  var CONNECTORS = {
    type: {
      curve: _ConnectorCurve.default,
      line: _ConnectorLine.default,
      elbow: _ConnectorElbow.default
    },
    end: {
      dot: _ConnectorEndDot.default,
      arrow: _ConnectorEndArrow.default
    }
  };
  var ConnectorType, ConnectorEndType;

  if (disable.indexOf("connector") === -1) {
    ConnectorType = connector && CONNECTORS.type[connector.type] || Connector;
    ConnectorEndType = connector && CONNECTORS.end[connector.end];
  }

  var AnnotationType = getAnnotationType(props.editMode);
  return _react.default.createElement(AnnotationType, _extends({
    x: x,
    y: y,
    dx: dx,
    dy: dy,
    nx: nx,
    ny: ny,
    color: color,
    className: className,
    onDrag: onDrag,
    onDragStart: onDragStart,
    onDragEnd: onDragEnd,
    editMode: editMode
  }, SubjectDefaultProps, subject, {
    events: events
  }), ConnectorType && _react.default.createElement(ConnectorType, connector, ConnectorEndType && _react.default.createElement(ConnectorEndType, null)), Subject && disable.indexOf("subject") === -1 && _react.default.createElement(Subject, null), note && disable.indexOf("note") === -1 && (_react.default.isValidElement(note) || typeof note === "function" ? _react.default.createElement(_JSXNote.default, {
    noteDefaultProps: NoteDefaultProps,
    note: note
  }) : _react.default.createElement(NoteType, _extends({}, NoteDefaultProps, note))));
}
});

unwrapExports(Type);

var AnnotationLabel_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AnnotationLabel;

var _classnames = _interopRequireDefault(classnames);

var _Type = _interopRequireDefault(Type);

var _ConnectorLine = _interopRequireDefault(ConnectorLine_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AnnotationLabel(props) {
  var className = (0, _classnames.default)("label", props.className);
  return (0, _Type.default)(_objectSpread({}, props, {
    className: className
  }), _ConnectorLine.default, {
    align: "middle"
  });
}
});

var AnnotationLabel = unwrapExports(AnnotationLabel_1);

const interactivityFns = ['onDragEnd', 'onDragStart', 'onDrag'];

const InternalAnnotation = props => {
  const {
    noteData: baseNoteData
  } = props;
  const {
    screenCoordinates
  } = baseNoteData;
  const noteData = { ...baseNoteData
  };
  interactivityFns.forEach(d => {
    if (baseNoteData[d]) {
      delete noteData[d];
      const originalFn = baseNoteData[d];

      noteData[d] = updatedSettingsFromRA => {
        originalFn({
          originalSettings: baseNoteData,
          updatedSettings: updatedSettingsFromRA,
          noteIndex: baseNoteData.i
        });
      };
    }
  });
  const AnnotationType = typeof noteData.type === 'function' ? noteData.type : AnnotationLabel;
  const eventListeners = noteData.eventListeners || noteData.events || {};
  const finalStyle = {};

  if (noteData.events || noteData.eventListeners || noteData.editMode) {
    finalStyle.pointerEvents = 'all';
  }

  if (noteData.coordinates && screenCoordinates) {
    //Multisubject annotation
    const setNX = noteData.nx || screenCoordinates[0][0] + noteData.dx;
    const setNY = noteData.ny || screenCoordinates[0][1] + noteData.dy;
    const notes = screenCoordinates.map((d, i) => {
      const subjectNote = Object.assign({}, noteData, {
        note: i === 0 ? noteData.note : {
          label: ''
        },
        x: d[0],
        y: d[1],
        nx: setNX,
        ny: setNY
      });
      return createElement(AnnotationType, _extends({
        key: `multi-annotation-${i}`
      }, subjectNote));
    });
    return createElement("g", _extends({}, eventListeners, {
      style: finalStyle
    }), notes);
  }

  const finalAnnotation = createElement(AnnotationType, _extends({
    events: eventListeners
  }, noteData));

  if (finalStyle.pointerEvents) {
    return createElement("g", {
      style: finalStyle
    }, finalAnnotation);
  }

  return finalAnnotation;
};

const DesaturationLayer = ({
  style = {
    fill: 'white',
    fillOpacity: 0.5
  },
  size,
  i,
  key
}) => createElement("rect", {
  key: key || `desaturation-${i}`,
  x: -5,
  y: -5,
  width: size[0] + 10,
  height: size[1] + 10,
  style: style
});

const SvgXYAnnotation = ({
  screenCoordinates,
  i,
  d
}) => {
  let inlineStyle;
  if (d.color) inlineStyle = {
    fill: d.color
  };
  const laLine = createElement(lib_1, {
    className: `annotation ${d.type} ${d.className || ''} `,
    key: `annotationpoint${i}`,
    markType: "circle",
    cx: screenCoordinates[0],
    cy: screenCoordinates[1],
    forceUpdate: true,
    style: inlineStyle,
    fill: "none",
    stroke: "black",
    r: 5
  });
  let laLabel;

  if (d.type === 'xy') {
    laLabel = createElement(lib_1, {
      markType: "text",
      key: `${d.label}annotationtext${i}`,
      forceUpdate: true,
      x: screenCoordinates[0],
      y: 10 + screenCoordinates[1],
      className: `annotation annotation-xy-label ${d.className || ''} `
    }, d.label);
  }

  return [laLine, laLabel];
};

const BasicReactAnnotation = ({
  screenCoordinates,
  d,
  i
}) => {
  const noteData = Object.assign({
    dx: 0,
    dy: 0,
    note: {
      label: d.label,
      orientation: d.orientation,
      align: d.align
    },
    connector: {
      end: 'arrow'
    }
  }, d, {
    type: d.type,
    screenCoordinates,
    i
  });
  noteData.x = noteData.fixedX ? noteData.fixedX : screenCoordinates[0];
  noteData.y = noteData.fixedY ? noteData.fixedY : screenCoordinates[1];
  return createElement(InternalAnnotation, {
    key: d.key || `annotation-${i}`,
    noteData: noteData
  });
};

var slice$1 = Array.prototype.slice;

function shuffle(array) {
  var m = array.length,
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function packEnclose(circles) {
  var i = 0, n = (circles = shuffle(slice$1.call(circles))).length, B = [], p, e;

  while (i < n) {
    p = circles[i];
    if (e && enclosesWeak(e, p)) ++i;
    else e = encloseBasis(B = extendBasis(B, p)), i = 0;
  }

  return e;
}

function extendBasis(B, p) {
  var i, j;

  if (enclosesWeakAll(p, B)) return [p];

  // If we get here then B must have at least one element.
  for (i = 0; i < B.length; ++i) {
    if (enclosesNot(p, B[i])
        && enclosesWeakAll(encloseBasis2(B[i], p), B)) {
      return [B[i], p];
    }
  }

  // If we get here then B must have at least two elements.
  for (i = 0; i < B.length - 1; ++i) {
    for (j = i + 1; j < B.length; ++j) {
      if (enclosesNot(encloseBasis2(B[i], B[j]), p)
          && enclosesNot(encloseBasis2(B[i], p), B[j])
          && enclosesNot(encloseBasis2(B[j], p), B[i])
          && enclosesWeakAll(encloseBasis3(B[i], B[j], p), B)) {
        return [B[i], B[j], p];
      }
    }
  }

  // If we get here then something is very wrong.
  throw new Error;
}

function enclosesNot(a, b) {
  var dr = a.r - b.r, dx = b.x - a.x, dy = b.y - a.y;
  return dr < 0 || dr * dr < dx * dx + dy * dy;
}

function enclosesWeak(a, b) {
  var dr = a.r - b.r + 1e-6, dx = b.x - a.x, dy = b.y - a.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}

function enclosesWeakAll(a, B) {
  for (var i = 0; i < B.length; ++i) {
    if (!enclosesWeak(a, B[i])) {
      return false;
    }
  }
  return true;
}

function encloseBasis(B) {
  switch (B.length) {
    case 1: return encloseBasis1(B[0]);
    case 2: return encloseBasis2(B[0], B[1]);
    case 3: return encloseBasis3(B[0], B[1], B[2]);
  }
}

function encloseBasis1(a) {
  return {
    x: a.x,
    y: a.y,
    r: a.r
  };
}

function encloseBasis2(a, b) {
  var x1 = a.x, y1 = a.y, r1 = a.r,
      x2 = b.x, y2 = b.y, r2 = b.r,
      x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1,
      l = Math.sqrt(x21 * x21 + y21 * y21);
  return {
    x: (x1 + x2 + x21 / l * r21) / 2,
    y: (y1 + y2 + y21 / l * r21) / 2,
    r: (l + r1 + r2) / 2
  };
}

function encloseBasis3(a, b, c) {
  var x1 = a.x, y1 = a.y, r1 = a.r,
      x2 = b.x, y2 = b.y, r2 = b.r,
      x3 = c.x, y3 = c.y, r3 = c.r,
      a2 = x1 - x2,
      a3 = x1 - x3,
      b2 = y1 - y2,
      b3 = y1 - y3,
      c2 = r2 - r1,
      c3 = r3 - r1,
      d1 = x1 * x1 + y1 * y1 - r1 * r1,
      d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2,
      d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3,
      ab = a3 * b2 - a2 * b3,
      xa = (b2 * d3 - b3 * d2) / (ab * 2) - x1,
      xb = (b3 * c2 - b2 * c3) / ab,
      ya = (a3 * d2 - a2 * d3) / (ab * 2) - y1,
      yb = (a2 * c3 - a3 * c2) / ab,
      A = xb * xb + yb * yb - 1,
      B = 2 * (r1 + xa * xb + ya * yb),
      C = xa * xa + ya * ya - r1 * r1,
      r = -(A ? (B + Math.sqrt(B * B - 4 * A * C)) / (2 * A) : C / B);
  return {
    x: x1 + xa + xb * r,
    y: y1 + ya + yb * r,
    r: r
  };
}

var circle$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.circleHandles = undefined;



var circleHandles = exports.circleHandles = function circleHandles(_ref) {
  var _ref$cx = _ref.cx,
      cx = _ref$cx === undefined ? 0 : _ref$cx,
      _ref$cy = _ref.cy,
      cy = _ref$cy === undefined ? 0 : _ref$cy,
      r1 = _ref.r1,
      r2 = _ref.r2,
      padding = _ref.padding;

  var h = { move: { x: cx, y: cy } };

  if (r1 !== undefined) {
    h.r1 = { x: cx + r1 / Math.sqrt(2), y: cy + r1 / Math.sqrt(2) };
  }

  if (r2 !== undefined) {
    h.r2 = { x: cx + r2 / Math.sqrt(2), y: cy + r2 / Math.sqrt(2) };
  }

  if (padding !== undefined) {
    h.padding = { x: cx + r1 + padding, y: cy };
  }

  return h;
};

exports.default = function (_ref2) {
  var radius = _ref2.radius,
      radiusPadding = _ref2.radiusPadding,
      outerRadius = _ref2.outerRadius,
      innerRadius = _ref2.innerRadius,
      editMode = _ref2.editMode;

  var handles = [];
  var c = (0, Builder.arcBuilder)({
    data: { radius: radius, outerRadius: outerRadius, innerRadius: innerRadius },
    className: "subject"
  });

  if (editMode) {
    var h = circleHandles({
      r1: c.data.outerRadius || c.data.radius,
      r2: c.data.innerRadius,
      padding: radiusPadding
    });

    var cHandles = [{
      x: h.r1.x,
      y: h.r1.y,
      key: c.data.outerRadius ? "outerRadius" : "radius"
    }];

    if (innerRadius) {
      cHandles.push({ x: h.r2.x, y: h.r2.y, key: "innerRadius" });
    }
    handles = cHandles;
  }

  c.attrs["fill-opacity"] = 0;

  return { components: [c], handles: handles };
};
});

unwrapExports(circle$1);
var circle_1 = circle$1.circleHandles;

var SubjectCircle_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(React$1__default);

var _circle = _interopRequireDefault(circle$1);

var _Subject2 = _interopRequireDefault(Subject_1);

var _propTypes = _interopRequireDefault(propTypes$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SubjectCircle =
/*#__PURE__*/
function (_Subject) {
  _inherits(SubjectCircle, _Subject);

  function SubjectCircle() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SubjectCircle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SubjectCircle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "name", "SubjectCircle");

    return _this;
  }

  _createClass(SubjectCircle, [{
    key: "getComponents",
    value: function getComponents(_ref) {
      var _ref$radius = _ref.radius,
          radius = _ref$radius === void 0 ? 20 : _ref$radius,
          innerRadius = _ref.innerRadius,
          outerRadius = _ref.outerRadius,
          radiusPadding = _ref.radiusPadding,
          editMode = _ref.editMode;
      var components = (0, _circle.default)({
        radius: radius,
        radiusPadding: radiusPadding,
        innerRadius: innerRadius,
        outerRadius: outerRadius,
        editMode: editMode
      });
      components.handleKeys = {
        radius: radius,
        innerRadius: innerRadius,
        outerRadius: outerRadius
      };

      components.handleFunction = function (h, data) {
        return _defineProperty({}, h.key, components.handleKeys[h.key] + data.oDeltaX * Math.sqrt(2));
      };

      return components;
    }
  }]);

  return SubjectCircle;
}(_Subject2.default);

exports.default = SubjectCircle;
SubjectCircle.propTypes = {
  radius: _propTypes.default.number,
  innerRadius: _propTypes.default.number,
  outerRadius: _propTypes.default.number,
  radiusPadding: _propTypes.default.number,
  editMode: _propTypes.default.bool
};
});

unwrapExports(SubjectCircle_1);

var AnnotationCalloutCircle_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AnnotationCalloutCircle;

var _SubjectCircle = _interopRequireDefault(SubjectCircle_1);

var _ConnectorElbow = _interopRequireDefault(ConnectorElbow_1);

var _classnames = _interopRequireDefault(classnames);

var _Type = _interopRequireDefault(Type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AnnotationCalloutCircle(props) {
  var className = (0, _classnames.default)("callout circle", props.className);
  return (0, _Type.default)(_objectSpread({}, props, {
    className: className
  }), _ConnectorElbow.default, {
    lineType: "horizontal"
  }, _SubjectCircle.default, {
    radius: 20
  });
}
});

var AnnotationCalloutCircle = unwrapExports(AnnotationCalloutCircle_1);

const CircleEnclosure = ({
  d,
  i,
  circle
}) => {
  const {
    padding = 2,
    radiusPadding = padding,
    label
  } = d;
  const noteData = Object.assign({
    dx: 0,
    dy: 0,
    note: {
      label
    },
    connector: {
      end: 'arrow'
    }
  }, d, {
    coordinates: undefined,
    x: circle.x,
    y: circle.y,
    type: AnnotationCalloutCircle,
    subject: {
      radius: circle.r,
      radiusPadding
    },
    i
  });

  if (noteData.rp) {
    switch (noteData.rp) {
      case 'top':
        noteData.dx = 0;
        noteData.dy = -circle.r - noteData.rd;
        break;

      case 'bottom':
        noteData.dx = 0;
        noteData.dy = circle.r + noteData.rd;
        break;

      case 'left':
        noteData.dx = -circle.r - noteData.rd;
        noteData.dy = 0;
        break;

      default:
        noteData.dx = circle.r + noteData.rd;
        noteData.dy = 0;
    }
  } //TODO: Support .ra (setting angle)


  return createElement(InternalAnnotation, {
    key: d.key || `annotation-${i}`,
    noteData: noteData
  });
};

const SvgEncloseAnnotation = ({
  screenCoordinates,
  d,
  i
}) => {
  const circle = packEnclose(screenCoordinates.map(p => ({
    x: p[0],
    y: p[1],
    r: 2
  })));
  const baseProps = {
    d,
    circle,
    i
  };
  return React.createElement(CircleEnclosure, baseProps);
};

var rect = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



exports.default = function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 100 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 100 : _ref$height,
      editMode = _ref.editMode;

  var handles = [];

  var data = [[0, 0], [width, 0], [width, height], [0, height], [0, 0]];
  var rect = (0, Builder.lineBuilder)({ data: data, className: "subject" });

  if (editMode) {
    handles = [{ x: width, y: height / 2, key: "width" }, { x: width / 2, y: height, key: "height" }];
  }
  rect.attrs["fill-opacity"] = 0.1;
  return { components: [rect], handles: handles };
};
});

unwrapExports(rect);

var SubjectRect_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(React$1__default);

var _rect = _interopRequireDefault(rect);

var _Subject2 = _interopRequireDefault(Subject_1);

var _propTypes = _interopRequireDefault(propTypes$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SubjectRect =
/*#__PURE__*/
function (_Subject) {
  _inherits(SubjectRect, _Subject);

  function SubjectRect() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SubjectRect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SubjectRect)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "name", "SubjectRect");

    return _this;
  }

  _createClass(SubjectRect, [{
    key: "getComponents",
    value: function getComponents(_ref) {
      var _ref$width = _ref.width,
          width = _ref$width === void 0 ? 100 : _ref$width,
          _ref$height = _ref.height,
          height = _ref$height === void 0 ? 100 : _ref$height,
          editMode = _ref.editMode;
      var components = (0, _rect.default)({
        width: width,
        height: height,
        editMode: editMode
      });
      components.handleKeys = {
        width: width,
        height: height
      };

      components.handleFunction = function (h, data) {
        return _defineProperty({}, h.key, h.key === "width" ? width + data.oDeltaX : height + data.oDeltaY);
      };

      return components;
    }
  }]);

  return SubjectRect;
}(_Subject2.default);

exports.default = SubjectRect;
SubjectRect.propTypes = {
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  editMode: _propTypes.default.bool
};
});

unwrapExports(SubjectRect_1);

var AnnotationCalloutRect_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AnnotationCalloutRect;

var _SubjectRect = _interopRequireDefault(SubjectRect_1);

var _ConnectorElbow = _interopRequireDefault(ConnectorElbow_1);

var _classnames = _interopRequireDefault(classnames);

var _Type = _interopRequireDefault(Type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AnnotationCalloutRect(props) {
  var className = (0, _classnames.default)("callout rect", props.className);
  return (0, _Type.default)(_objectSpread({}, props, {
    className: className
  }), _ConnectorElbow.default, {
    lineType: "horizontal"
  }, _SubjectRect.default, {
    width: 100,
    height: 100
  });
}
});

var AnnotationCalloutRect = unwrapExports(AnnotationCalloutRect_1);

const RectangleEnclosure = ({
  bboxNodes,
  d,
  i
}) => {
  const {
    padding = 0,
    dx = -25,
    dy = -25,
    label
  } = d;
  const bbox = [[Math.min(...bboxNodes.map(p => p.x0)) - padding, Math.min(...bboxNodes.map(p => p.y0)) - padding], [Math.max(...bboxNodes.map(p => p.x1)) + padding, Math.max(...bboxNodes.map(p => p.y1)) + padding]];
  const noteData = Object.assign({
    dx: dx,
    dy: dy,
    note: {
      label
    },
    connector: {
      end: 'arrow'
    }
  }, d, {
    type: AnnotationCalloutRect,
    x: bbox[0][0],
    y: bbox[0][1],
    subject: {
      width: bbox[1][0] - bbox[0][0],
      height: bbox[1][1] - bbox[0][1]
    }
  });
  return createElement(InternalAnnotation, {
    key: d.key || `annotation-${i}`,
    noteData: noteData
  });
};

const SvgRectEncloseAnnotation = ({
  d,
  i,
  screenCoordinates
}) => {
  const bboxNodes = screenCoordinates.map(p => {
    return {
      x0: p.x0 = p[0],
      x1: p.x1 = p[0],
      y0: p.y0 = p[1],
      y1: p.y1 = p[1]
    };
  });
  const baseProps = {
    bboxNodes,
    d,
    i
  };
  return React.createElement(RectangleEnclosure, baseProps);
};

// Returns the 2D cross product of AB and AC vectors, i.e., the z-component of
// the 3D cross product in a quadrant I Cartesian coordinate system (+x is
// right, +y is up). Returns a positive value if ABC is counter-clockwise,
// negative if clockwise, and zero if the points are collinear.
function cross$1(a, b, c) {
  return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
}

function lexicographicOrder(a, b) {
  return a[0] - b[0] || a[1] - b[1];
}

// Computes the upper convex hull per the monotone chain algorithm.
// Assumes points.length >= 3, is sorted by x, unique in y.
// Returns an array of indices into points in left-to-right order.
function computeUpperHullIndexes(points) {
  var n = points.length,
      indexes = [0, 1],
      size = 2;

  for (var i = 2; i < n; ++i) {
    while (size > 1 && cross$1(points[indexes[size - 2]], points[indexes[size - 1]], points[i]) <= 0) --size;
    indexes[size++] = i;
  }

  return indexes.slice(0, size); // remove popped points
}

function polygonHull(points) {
  if ((n = points.length) < 3) return null;

  var i,
      n,
      sortedPoints = new Array(n),
      flippedPoints = new Array(n);

  for (i = 0; i < n; ++i) sortedPoints[i] = [+points[i][0], +points[i][1], i];
  sortedPoints.sort(lexicographicOrder);
  for (i = 0; i < n; ++i) flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];

  var upperIndexes = computeUpperHullIndexes(sortedPoints),
      lowerIndexes = computeUpperHullIndexes(flippedPoints);

  // Construct the hull polygon, removing possible duplicate endpoints.
  var skipLeft = lowerIndexes[0] === upperIndexes[0],
      skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1],
      hull = [];

  // Add upper hull in right-to-l order.
  // Then add lower hull in left-to-right order.
  for (i = upperIndexes.length - 1; i >= 0; --i) hull.push(points[sortedPoints[upperIndexes[i]][2]]);
  for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i) hull.push(points[sortedPoints[lowerIndexes[i]][2]]);

  return hull;
}

/**
 * Offset edge of the polygon
 *
 * @param  {Object} current
 * @param  {Object} next
 * @constructor
 */
function Edge(current, next) {

  /**
   * @type {Object}
   */
  this.current = current;

  /**
   * @type {Object}
   */
  this.next = next;

  /**
   * @type {Object}
   */
  this._inNormal  = this.inwardsNormal();

  /**
   * @type {Object}
   */
  this._outNormal = this.outwardsNormal();
}

/**
 * Creates outwards normal
 * @return {Object}
 */
Edge.prototype.outwardsNormal = function() {
  var inwards = this.inwardsNormal();
  return [
    -inwards[0],
    -inwards[1]
  ];
};

/**
 * Creates inwards normal
 * @return {Object}
 */
Edge.prototype.inwardsNormal = function() {
  var dx = this.next[0] - this.current[0],
      dy = this.next[1] - this.current[1],
      edgeLength = Math.sqrt(dx * dx + dy * dy);

  if (edgeLength === 0) throw new Error('Vertices overlap');

  return [
    -dy / edgeLength,
     dx / edgeLength
  ];
};

/**
 * Offsets the edge by dx, dy
 * @param  {Number} dx
 * @param  {Number} dy
 * @return {Edge}
 */
Edge.prototype.offset = function(dx, dy) {
  return Edge.offsetEdge(this.current, this.next, dx, dy);
};


/**
 * @param  {Number} dx
 * @param  {Number} dy
 * @return {Edge}
 */
Edge.prototype.inverseOffset = function(dx, dy) {
  return Edge.offsetEdge(this.next, this.current, dx, dy);
};


/**
 * @static
 * @param  {Array.<Number>} current
 * @param  {Array.<Number>} next
 * @param  {Number}         dx
 * @param  {Number}         dy
 * @return {Edge}
 */
Edge.offsetEdge = function(current, next, dx, dy) {
  return new Edge([
    current[0] + dx,
    current[1] + dy
  ], [
    next[0] + dx,
    next[1] + dy
  ]);
};


/**
 *
 * @return {Edge}
 */
Edge.prototype.inverse = function () {
  return new Edge(this.next, this.current);
};


var edge = Edge;

var edge_type = { 
  NORMAL:               0, 
  NON_CONTRIBUTING:     1, 
  SAME_TRANSITION:      2, 
  DIFFERENT_TRANSITION: 3
};

var tinyqueue = TinyQueue;
var default_1 = TinyQueue;

function TinyQueue(data, compare) {
    if (!(this instanceof TinyQueue)) return new TinyQueue(data, compare);

    this.data = data || [];
    this.length = this.data.length;
    this.compare = compare || defaultCompare;

    if (this.length > 0) {
        for (var i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
    }
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

TinyQueue.prototype = {

    push: function (item) {
        this.data.push(item);
        this.length++;
        this._up(this.length - 1);
    },

    pop: function () {
        if (this.length === 0) return undefined;

        var top = this.data[0];
        this.length--;

        if (this.length > 0) {
            this.data[0] = this.data[this.length];
            this._down(0);
        }
        this.data.pop();

        return top;
    },

    peek: function () {
        return this.data[0];
    },

    _up: function (pos) {
        var data = this.data;
        var compare = this.compare;
        var item = data[pos];

        while (pos > 0) {
            var parent = (pos - 1) >> 1;
            var current = data[parent];
            if (compare(item, current) >= 0) break;
            data[pos] = current;
            pos = parent;
        }

        data[pos] = item;
    },

    _down: function (pos) {
        var data = this.data;
        var compare = this.compare;
        var halfLength = this.length >> 1;
        var item = data[pos];

        while (pos < halfLength) {
            var left = (pos << 1) + 1;
            var right = left + 1;
            var best = data[left];

            if (right < this.length && compare(data[right], best) < 0) {
                left = right;
                best = data[right];
            }
            if (compare(best, item) >= 0) break;

            data[pos] = best;
            pos = left;
        }

        data[pos] = item;
    }
};
tinyqueue.default = default_1;

function TreeBase() {}

// removes all nodes from the tree
TreeBase.prototype.clear = function() {
    this._root = null;
    this.size = 0;
};

// returns node data if found, null otherwise
TreeBase.prototype.find = function(data) {
    var res = this._root;

    while(res !== null) {
        var c = this._comparator(data, res.data);
        if(c === 0) {
            return res.data;
        }
        else {
            res = res.get_child(c > 0);
        }
    }

    return null;
};

// returns iterator to node if found, null otherwise
TreeBase.prototype.findIter = function(data) {
    var res = this._root;
    var iter = this.iterator();

    while(res !== null) {
        var c = this._comparator(data, res.data);
        if(c === 0) {
            iter._cursor = res;
            return iter;
        }
        else {
            iter._ancestors.push(res);
            res = res.get_child(c > 0);
        }
    }

    return null;
};

// Returns an iterator to the tree node at or immediately after the item
TreeBase.prototype.lowerBound = function(item) {
    var cur = this._root;
    var iter = this.iterator();
    var cmp = this._comparator;

    while(cur !== null) {
        var c = cmp(item, cur.data);
        if(c === 0) {
            iter._cursor = cur;
            return iter;
        }
        iter._ancestors.push(cur);
        cur = cur.get_child(c > 0);
    }

    for(var i=iter._ancestors.length - 1; i >= 0; --i) {
        cur = iter._ancestors[i];
        if(cmp(item, cur.data) < 0) {
            iter._cursor = cur;
            iter._ancestors.length = i;
            return iter;
        }
    }

    iter._ancestors.length = 0;
    return iter;
};

// Returns an iterator to the tree node immediately after the item
TreeBase.prototype.upperBound = function(item) {
    var iter = this.lowerBound(item);
    var cmp = this._comparator;

    while(iter.data() !== null && cmp(iter.data(), item) === 0) {
        iter.next();
    }

    return iter;
};

// returns null if tree is empty
TreeBase.prototype.min = function() {
    var res = this._root;
    if(res === null) {
        return null;
    }

    while(res.left !== null) {
        res = res.left;
    }

    return res.data;
};

// returns null if tree is empty
TreeBase.prototype.max = function() {
    var res = this._root;
    if(res === null) {
        return null;
    }

    while(res.right !== null) {
        res = res.right;
    }

    return res.data;
};

// returns a null iterator
// call next() or prev() to point to an element
TreeBase.prototype.iterator = function() {
    return new Iterator(this);
};

// calls cb on each node's data, in order
TreeBase.prototype.each = function(cb) {
    var it=this.iterator(), data;
    while((data = it.next()) !== null) {
        if(cb(data) === false) {
            return;
        }
    }
};

// calls cb on each node's data, in reverse order
TreeBase.prototype.reach = function(cb) {
    var it=this.iterator(), data;
    while((data = it.prev()) !== null) {
        if(cb(data) === false) {
            return;
        }
    }
};


function Iterator(tree) {
    this._tree = tree;
    this._ancestors = [];
    this._cursor = null;
}

Iterator.prototype.data = function() {
    return this._cursor !== null ? this._cursor.data : null;
};

// if null-iterator, returns first node
// otherwise, returns next node
Iterator.prototype.next = function() {
    if(this._cursor === null) {
        var root = this._tree._root;
        if(root !== null) {
            this._minNode(root);
        }
    }
    else {
        if(this._cursor.right === null) {
            // no greater node in subtree, go up to parent
            // if coming from a right child, continue up the stack
            var save;
            do {
                save = this._cursor;
                if(this._ancestors.length) {
                    this._cursor = this._ancestors.pop();
                }
                else {
                    this._cursor = null;
                    break;
                }
            } while(this._cursor.right === save);
        }
        else {
            // get the next node from the subtree
            this._ancestors.push(this._cursor);
            this._minNode(this._cursor.right);
        }
    }
    return this._cursor !== null ? this._cursor.data : null;
};

// if null-iterator, returns last node
// otherwise, returns previous node
Iterator.prototype.prev = function() {
    if(this._cursor === null) {
        var root = this._tree._root;
        if(root !== null) {
            this._maxNode(root);
        }
    }
    else {
        if(this._cursor.left === null) {
            var save;
            do {
                save = this._cursor;
                if(this._ancestors.length) {
                    this._cursor = this._ancestors.pop();
                }
                else {
                    this._cursor = null;
                    break;
                }
            } while(this._cursor.left === save);
        }
        else {
            this._ancestors.push(this._cursor);
            this._maxNode(this._cursor.left);
        }
    }
    return this._cursor !== null ? this._cursor.data : null;
};

Iterator.prototype._minNode = function(start) {
    while(start.left !== null) {
        this._ancestors.push(start);
        start = start.left;
    }
    this._cursor = start;
};

Iterator.prototype._maxNode = function(start) {
    while(start.right !== null) {
        this._ancestors.push(start);
        start = start.right;
    }
    this._cursor = start;
};

var treebase = TreeBase;

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.red = true;
}

Node.prototype.get_child = function(dir) {
    return dir ? this.right : this.left;
};

Node.prototype.set_child = function(dir, val) {
    if(dir) {
        this.right = val;
    }
    else {
        this.left = val;
    }
};

function RBTree(comparator) {
    this._root = null;
    this._comparator = comparator;
    this.size = 0;
}

RBTree.prototype = new treebase();

// returns true if inserted, false if duplicate
RBTree.prototype.insert = function(data) {
    var ret = false;

    if(this._root === null) {
        // empty tree
        this._root = new Node(data);
        ret = true;
        this.size++;
    }
    else {
        var head = new Node(undefined); // fake tree root

        var dir = 0;
        var last = 0;

        // setup
        var gp = null; // grandparent
        var ggp = head; // grand-grand-parent
        var p = null; // parent
        var node = this._root;
        ggp.right = this._root;

        // search down
        while(true) {
            if(node === null) {
                // insert new node at the bottom
                node = new Node(data);
                p.set_child(dir, node);
                ret = true;
                this.size++;
            }
            else if(is_red(node.left) && is_red(node.right)) {
                // color flip
                node.red = true;
                node.left.red = false;
                node.right.red = false;
            }

            // fix red violation
            if(is_red(node) && is_red(p)) {
                var dir2 = ggp.right === gp;

                if(node === p.get_child(last)) {
                    ggp.set_child(dir2, single_rotate(gp, !last));
                }
                else {
                    ggp.set_child(dir2, double_rotate(gp, !last));
                }
            }

            var cmp = this._comparator(node.data, data);

            // stop if found
            if(cmp === 0) {
                break;
            }

            last = dir;
            dir = cmp < 0;

            // update helpers
            if(gp !== null) {
                ggp = gp;
            }
            gp = p;
            p = node;
            node = node.get_child(dir);
        }

        // update root
        this._root = head.right;
    }

    // make root black
    this._root.red = false;

    return ret;
};

// returns true if removed, false if not found
RBTree.prototype.remove = function(data) {
    if(this._root === null) {
        return false;
    }

    var head = new Node(undefined); // fake tree root
    var node = head;
    node.right = this._root;
    var p = null; // parent
    var gp = null; // grand parent
    var found = null; // found item
    var dir = 1;

    while(node.get_child(dir) !== null) {
        var last = dir;

        // update helpers
        gp = p;
        p = node;
        node = node.get_child(dir);

        var cmp = this._comparator(data, node.data);

        dir = cmp > 0;

        // save found node
        if(cmp === 0) {
            found = node;
        }

        // push the red node down
        if(!is_red(node) && !is_red(node.get_child(dir))) {
            if(is_red(node.get_child(!dir))) {
                var sr = single_rotate(node, dir);
                p.set_child(last, sr);
                p = sr;
            }
            else if(!is_red(node.get_child(!dir))) {
                var sibling = p.get_child(!last);
                if(sibling !== null) {
                    if(!is_red(sibling.get_child(!last)) && !is_red(sibling.get_child(last))) {
                        // color flip
                        p.red = false;
                        sibling.red = true;
                        node.red = true;
                    }
                    else {
                        var dir2 = gp.right === p;

                        if(is_red(sibling.get_child(last))) {
                            gp.set_child(dir2, double_rotate(p, last));
                        }
                        else if(is_red(sibling.get_child(!last))) {
                            gp.set_child(dir2, single_rotate(p, last));
                        }

                        // ensure correct coloring
                        var gpc = gp.get_child(dir2);
                        gpc.red = true;
                        node.red = true;
                        gpc.left.red = false;
                        gpc.right.red = false;
                    }
                }
            }
        }
    }

    // replace and remove if found
    if(found !== null) {
        found.data = node.data;
        p.set_child(p.right === node, node.get_child(node.left === null));
        this.size--;
    }

    // update root and make it black
    this._root = head.right;
    if(this._root !== null) {
        this._root.red = false;
    }

    return found !== null;
};

function is_red(node) {
    return node !== null && node.red;
}

function single_rotate(root, dir) {
    var save = root.get_child(!dir);

    root.set_child(!dir, save.get_child(dir));
    save.set_child(dir, root);

    root.red = true;
    save.red = false;

    return save;
}

function double_rotate(root, dir) {
    root.set_child(!dir, single_rotate(root.get_child(!dir), !dir));
    return single_rotate(root, dir);
}

var rbtree = RBTree;

function Node$1(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

Node$1.prototype.get_child = function(dir) {
    return dir ? this.right : this.left;
};

Node$1.prototype.set_child = function(dir, val) {
    if(dir) {
        this.right = val;
    }
    else {
        this.left = val;
    }
};

function BinTree(comparator) {
    this._root = null;
    this._comparator = comparator;
    this.size = 0;
}

BinTree.prototype = new treebase();

// returns true if inserted, false if duplicate
BinTree.prototype.insert = function(data) {
    if(this._root === null) {
        // empty tree
        this._root = new Node$1(data);
        this.size++;
        return true;
    }

    var dir = 0;

    // setup
    var p = null; // parent
    var node = this._root;

    // search down
    while(true) {
        if(node === null) {
            // insert new node at the bottom
            node = new Node$1(data);
            p.set_child(dir, node);
            ret = true;
            this.size++;
            return true;
        }

        // stop if found
        if(this._comparator(node.data, data) === 0) {
            return false;
        }

        dir = this._comparator(node.data, data) < 0;

        // update helpers
        p = node;
        node = node.get_child(dir);
    }
};

// returns true if removed, false if not found
BinTree.prototype.remove = function(data) {
    if(this._root === null) {
        return false;
    }

    var head = new Node$1(undefined); // fake tree root
    var node = head;
    node.right = this._root;
    var p = null; // parent
    var found = null; // found item
    var dir = 1;

    while(node.get_child(dir) !== null) {
        p = node;
        node = node.get_child(dir);
        var cmp = this._comparator(data, node.data);
        dir = cmp > 0;

        if(cmp === 0) {
            found = node;
        }
    }

    if(found !== null) {
        found.data = node.data;
        p.set_child(p.right === node, node.get_child(node.left === null));

        this._root = head.right;
        this.size--;
        return true;
    }
    else {
        return false;
    }
};

var bintree = BinTree;

var bintrees = {
    RBTree: rbtree,
    BinTree: bintree
};

/**
 * Signed area of the triangle (p0, p1, p2)
 * @param  {Array.<Number>} p0
 * @param  {Array.<Number>} p1
 * @param  {Array.<Number>} p2
 * @return {Number}
 */
var signed_area = function signedArea(p0, p1, p2) {
  return (p0[0] - p2[0]) * (p1[1] - p2[1]) - (p1[0] - p2[0]) * (p0[1] - p2[1]);
};

/**
 * Sweepline event
 *
 * @param {Array.<Number>}  point
 * @param {Boolean}         left
 * @param {SweepEvent=}     otherEvent
 * @param {Boolean}         isSubject
 * @param {Number}          edgeType
 */
function SweepEvent(point, left, otherEvent, isSubject, edgeType) {

  /**
   * Is left endpoint?
   * @type {Boolean}
   */
  this.left = left;

  /**
   * @type {Array.<Number>}
   */
  this.point = point;

  /**
   * Other edge reference
   * @type {SweepEvent}
   */
  this.otherEvent = otherEvent;

  /**
   * Belongs to source or clipping polygon
   * @type {Boolean}
   */
  this.isSubject = isSubject;

  /**
   * Edge contribution type
   * @type {Number}
   */
  this.type = edgeType || edge_type.NORMAL;


  /**
   * In-out transition for the sweepline crossing polygon
   * @type {Boolean}
   */
  this.inOut = false;


  /**
   * @type {Boolean}
   */
  this.otherInOut = false;

  /**
   * Previous event in result?
   * @type {SweepEvent}
   */
  this.prevInResult = null;

  /**
   * Does event belong to result?
   * @type {Boolean}
   */
  this.inResult = false;


  // connection step

  /**
   * @type {Boolean}
   */
  this.resultInOut = false;
}


SweepEvent.prototype = {

  /**
   * @param  {Array.<Number>}  p
   * @return {Boolean}
   */
  isBelow: function(p) {
    return this.left ?
      signed_area (this.point, this.otherEvent.point, p) > 0 :
      signed_area (this.otherEvent.point, this.point, p) > 0;
  },


  /**
   * @param  {Array.<Number>}  p
   * @return {Boolean}
   */
  isAbove: function(p) {
    return !this.isBelow(p);
  },


  /**
   * @return {Boolean}
   */
  isVertical: function() {
    return this.point[0] === this.otherEvent.point[0];
  }
};

var sweep_event = SweepEvent;

// var equals = require('./equals');

/**
 * @param  {SweepEvent} e1
 * @param  {SweepEvent} e2
 * @return {Number}
 */
var compare_events = function sweepEventsComp(e1, e2) {
  var p1 = e1.point;
  var p2 = e2.point;

  // Different x-coordinate
  if (p1[0] > p2[0]) return 1;
  if (p1[0] < p2[0]) return -1;

  // Different points, but same x-coordinate
  // Event with lower y-coordinate is processed first
  if (p1[1] !== p2[1]) return p1[1] > p2[1] ? 1 : -1;

  return specialCases(e1, e2, p1);
};


function specialCases(e1, e2, p1, p2) {
  // Same coordinates, but one is a left endpoint and the other is
  // a right endpoint. The right endpoint is processed first
  if (e1.left !== e2.left)
    return e1.left ? 1 : -1;

  // Same coordinates, both events
  // are left endpoints or right endpoints.
  // not collinear
  if (signed_area (p1, e1.otherEvent.point, e2.otherEvent.point) !== 0) {
    // the event associate to the bottom segment is processed first
    return (!e1.isBelow(e2.otherEvent.point)) ? 1 : -1;
  }

  // uncomment this if you want to play with multipolygons
  // if (e1.isSubject === e2.isSubject) {
  //   if(equals(e1.point, e2.point) && e1.contourId === e2.contourId) {
  //     return 0;
  //   } else {
  //     return e1.contourId > e2.contourId ? 1 : -1;
  //   }
  // }

  return (!e1.isSubject && e2.isSubject) ? 1 : -1;
}

var equals = function equals(p1, p2) {
  return p1[0] === p2[0] && p1[1] === p2[1];
};

/**
 * @param  {SweepEvent} le1
 * @param  {SweepEvent} le2
 * @return {Number}
 */
var compare_segments = function compareSegments(le1, le2) {
  if (le1 === le2) return 0;

  // Segments are not collinear
  if (signed_area(le1.point, le1.otherEvent.point, le2.point) !== 0 ||
    signed_area(le1.point, le1.otherEvent.point, le2.otherEvent.point) !== 0) {

    // If they share their left endpoint use the right endpoint to sort
    if (equals(le1.point, le2.point)) return le1.isBelow(le2.otherEvent.point) ? -1 : 1;

    // Different left endpoint: use the left endpoint to sort
    if (le1.point[0] === le2.point[0]) return le1.point[1] < le2.point[1] ? -1 : 1;

    // has the line segment associated to e1 been inserted
    // into S after the line segment associated to e2 ?
    if (compare_events(le1, le2) === 1) return le2.isAbove(le1.point) ? -1 : 1;

    // The line segment associated to e2 has been inserted
    // into S after the line segment associated to e1
    return le1.isBelow(le2.point) ? -1 : 1;
  }

  if (le1.isSubject === le2.isSubject) { // same polygon
    if (equals(le1.point, le2.point)) {
      if (equals(le1.otherEvent.point, le2.otherEvent.point)) {
        return 0;
      } else {
        return le1.contourId > le2.contourId ? 1 : -1;
      }
    }
  } else { // Segments are collinear, but belong to separate polygons
    return le1.isSubject ? -1 : 1;
  }

  return compare_events(le1, le2) === 1 ? 1 : -1;
};

var EPSILON = 1e-9;

/**
 * Finds the magnitude of the cross product of two vectors (if we pretend
 * they're in three dimensions)
 *
 * @param {Object} a First vector
 * @param {Object} b Second vector
 * @private
 * @returns {Number} The magnitude of the cross product
 */
function krossProduct(a, b) {
  return a[0] * b[1] - a[1] * b[0];
}

/**
 * Finds the dot product of two vectors.
 *
 * @param {Object} a First vector
 * @param {Object} b Second vector
 * @private
 * @returns {Number} The dot product
 */
function dotProduct(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}

/**
 * Finds the intersection (if any) between two line segments a and b, given the
 * line segments' end points a1, a2 and b1, b2.
 *
 * This algorithm is based on Schneider and Eberly.
 * http://www.cimec.org.ar/~ncalvo/Schneider_Eberly.pdf
 * Page 244.
 *
 * @param {Array.<Number>} a1 point of first line
 * @param {Array.<Number>} a2 point of first line
 * @param {Array.<Number>} b1 point of second line
 * @param {Array.<Number>} b2 point of second line
 * @param {Boolean=}       noEndpointTouch whether to skip single touchpoints
 *                                         (meaning connected segments) as
 *                                         intersections
 * @returns {Array.<Array.<Number>>|Null} If the lines intersect, the point of
 * intersection. If they overlap, the two end points of the overlapping segment.
 * Otherwise, null.
 */
var segment_intersection = function(a1, a2, b1, b2, noEndpointTouch) {
  // The algorithm expects our lines in the form P + sd, where P is a point,
  // s is on the interval [0, 1], and d is a vector.
  // We are passed two points. P can be the first point of each pair. The
  // vector, then, could be thought of as the distance (in x and y components)
  // from the first point to the second point.
  // So first, let's make our vectors:
  var va = [a2[0] - a1[0], a2[1] - a1[1]];
  var vb = [b2[0] - b1[0], b2[1] - b1[1]];
  // We also define a function to convert back to regular point form:

  /* eslint-disable arrow-body-style */

  function toPoint(p, s, d) {
    return [
      p[0] + s * d[0],
      p[1] + s * d[1]
    ];
  }

  /* eslint-enable arrow-body-style */

  // The rest is pretty much a straight port of the algorithm.
  var e = [b1[0] - a1[0], b1[1] - a1[1]];
  var kross = krossProduct(va, vb);
  var sqrKross = kross * kross;
  var sqrLenA = dotProduct(va, va);
  var sqrLenB = dotProduct(vb, vb);

  // Check for line intersection. This works because of the properties of the
  // cross product -- specifically, two vectors are parallel if and only if the
  // cross product is the 0 vector. The full calculation involves relative error
  // to account for possible very small line segments. See Schneider & Eberly
  // for details.
  if (sqrKross > EPSILON * sqrLenA * sqrLenB) {
    // If they're not parallel, then (because these are line segments) they
    // still might not actually intersect. This code checks that the
    // intersection point of the lines is actually on both line segments.
    var s = krossProduct(e, vb) / kross;
    if (s < 0 || s > 1) {
      // not on line segment a
      return null;
    }
    var t = krossProduct(e, va) / kross;
    if (t < 0 || t > 1) {
      // not on line segment b
      return null;
    }
    return noEndpointTouch ? null : [toPoint(a1, s, va)];
  }

  // If we've reached this point, then the lines are either parallel or the
  // same, but the segments could overlap partially or fully, or not at all.
  // So we need to find the overlap, if any. To do that, we can use e, which is
  // the (vector) difference between the two initial points. If this is parallel
  // with the line itself, then the two lines are the same line, and there will
  // be overlap.
  var sqrLenE = dotProduct(e, e);
  kross = krossProduct(e, va);
  sqrKross = kross * kross;

  if (sqrKross > EPSILON * sqrLenA * sqrLenE) {
    // Lines are just parallel, not the same. No overlap.
    return null;
  }

  var sa = dotProduct(va, e) / sqrLenA;
  var sb = sa + dotProduct(va, vb) / sqrLenA;
  var smin = Math.min(sa, sb);
  var smax = Math.max(sa, sb);

  // this is, essentially, the FindIntersection acting on floats from
  // Schneider & Eberly, just inlined into this function.
  if (smin <= 1 && smax >= 0) {

    // overlap on an end point
    if (smin === 1) {
      return noEndpointTouch ? null : [toPoint(a1, smin > 0 ? smin : 0, va)];
    }

    if (smax === 0) {
      return noEndpointTouch ? null : [toPoint(a1, smax < 1 ? smax : 1, va)];
    }

    if (noEndpointTouch && smin === 0 && smax === 1) return null;

    // There's overlap on a segment -- two points of intersection. Return both.
    return [
      toPoint(a1, smin > 0 ? smin : 0, va),
      toPoint(a1, smax < 1 ? smax : 1, va),
    ];
  }

  return null;
};

var INTERSECTION    = 0;
var UNION           = 1;
var DIFFERENCE      = 2;
var XOR             = 3;

var EMPTY           = [];




var Tree            = bintrees.RBTree;







var max$1 = Math.max;
var min$1 = Math.min;

// global.Tree = Tree;
// global.compareSegments = compareSegments;
// global.SweepEvent = SweepEvent;
// global.signedArea = require('./signed_area');

/**
 * @param  {<Array.<Number>} s1
 * @param  {<Array.<Number>} s2
 * @param  {Boolean}         isSubject
 * @param  {Queue}           eventQueue
 * @param  {Array.<Number>}  bbox
 */
function processSegment(s1, s2, isSubject, depth, eventQueue, bbox) {
  // Possible degenerate condition.
  // if (equals(s1, s2)) return;

  var e1 = new sweep_event(s1, false, undefined, isSubject);
  var e2 = new sweep_event(s2, false, e1,        isSubject);
  e1.otherEvent = e2;

  e1.contourId = e2.contourId = depth;

  if (compare_events(e1, e2) > 0) {
    e2.left = true;
  } else {
    e1.left = true;
  }

  bbox[0] = min$1(bbox[0], s1[0]);
  bbox[1] = min$1(bbox[1], s1[1]);
  bbox[2] = max$1(bbox[2], s1[0]);
  bbox[3] = max$1(bbox[3], s1[1]);

  // Pushing it so the queue is sorted from left to right,
  // with object on the left having the highest priority.
  eventQueue.push(e1);
  eventQueue.push(e2);
}

var contourId = 0;

function processPolygon(polygon, isSubject, depth, queue, bbox) {
  var i, len;
  if (typeof polygon[0][0] === 'number') {
    for (i = 0, len = polygon.length - 1; i < len; i++) {
      processSegment(polygon[i], polygon[i + 1], isSubject, depth + 1, queue, bbox);
    }
  } else {
    for (i = 0, len = polygon.length; i < len; i++) {
      contourId++;
      processPolygon(polygon[i], isSubject, contourId, queue, bbox);
    }
  }
}


function fillQueue(subject, clipping, sbbox, cbbox) {
  var eventQueue = new tinyqueue(null, compare_events);
  contourId = 0;

  processPolygon(subject,  true,  0, eventQueue, sbbox);
  processPolygon(clipping, false, 0, eventQueue, cbbox);

  return eventQueue;
}


function computeFields(event, prev, sweepLine, operation) {
  // compute inOut and otherInOut fields
  if (prev === null) {
    event.inOut      = false;
    event.otherInOut = true;

  // previous line segment in sweepline belongs to the same polygon
  } else if (event.isSubject === prev.isSubject) {
    event.inOut      = !prev.inOut;
    event.otherInOut = prev.otherInOut;

  // previous line segment in sweepline belongs to the clipping polygon
  } else {
    event.inOut      = !prev.otherInOut;
    event.otherInOut = prev.isVertical() ? !prev.inOut : prev.inOut;
  }

  // compute prevInResult field
  if (prev) {
    event.prevInResult = (!inResult(prev, operation) || prev.isVertical()) ?
       prev.prevInResult : prev;
  }
  // check if the line segment belongs to the Boolean operation
  event.inResult = inResult(event, operation);
}


function inResult(event, operation) {
  switch (event.type) {
    case edge_type.NORMAL:
      switch (operation) {
        case INTERSECTION:
          return !event.otherInOut;
        case UNION:
          return event.otherInOut;
        case DIFFERENCE:
          return (event.isSubject && event.otherInOut) ||
                 (!event.isSubject && !event.otherInOut);
        case XOR:
          return true;
      }
    case edge_type.SAME_TRANSITION:
      return operation === INTERSECTION || operation === UNION;
    case edge_type.DIFFERENT_TRANSITION:
      return operation === DIFFERENCE;
    case edge_type.NON_CONTRIBUTING:
      return false;
  }
  return false;
}


/**
 * @param  {SweepEvent} se1
 * @param  {SweepEvent} se2
 * @param  {Queue}      queue
 * @return {Number}
 */
function possibleIntersection(se1, se2, queue) {
  // that disallows self-intersecting polygons,
  // did cost us half a day, so I'll leave it
  // out of respect
  // if (se1.isSubject === se2.isSubject) return;

  var inter = segment_intersection(
    se1.point, se1.otherEvent.point,
    se2.point, se2.otherEvent.point
  );

  var nintersections = inter ? inter.length : 0;
  if (nintersections === 0) return 0; // no intersection

  // the line segments intersect at an endpoint of both line segments
  if ((nintersections === 1) &&
      (equals(se1.point, se2.point) ||
       equals(se1.otherEvent.point, se2.otherEvent.point))) {
    return 0;
  }

  if (nintersections === 2 && se1.isSubject === se2.isSubject){
    if(se1.contourId === se2.contourId){
    console.warn('Edges of the same polygon overlap',
      se1.point, se1.otherEvent.point, se2.point, se2.otherEvent.point);
    }
    //throw new Error('Edges of the same polygon overlap');
    return 0;
  }

  // The line segments associated to se1 and se2 intersect
  if (nintersections === 1) {

    // if the intersection point is not an endpoint of se1
    if (!equals(se1.point, inter[0]) && !equals(se1.otherEvent.point, inter[0])) {
      divideSegment(se1, inter[0], queue);
    }

    // if the intersection point is not an endpoint of se2
    if (!equals(se2.point, inter[0]) && !equals(se2.otherEvent.point, inter[0])) {
      divideSegment(se2, inter[0], queue);
    }
    return 1;
  }

  // The line segments associated to se1 and se2 overlap
  var events        = [];
  var leftCoincide  = false;
  var rightCoincide = false;

  if (equals(se1.point, se2.point)) {
    leftCoincide = true; // linked
  } else if (compare_events(se1, se2) === 1) {
    events.push(se2, se1);
  } else {
    events.push(se1, se2);
  }

  if (equals(se1.otherEvent.point, se2.otherEvent.point)) {
    rightCoincide = true;
  } else if (compare_events(se1.otherEvent, se2.otherEvent) === 1) {
    events.push(se2.otherEvent, se1.otherEvent);
  } else {
    events.push(se1.otherEvent, se2.otherEvent);
  }

  if ((leftCoincide && rightCoincide) || leftCoincide) {
    // both line segments are equal or share the left endpoint
    se1.type = edge_type.NON_CONTRIBUTING;
    se2.type = (se1.inOut === se2.inOut) ?
      edge_type.SAME_TRANSITION :
      edge_type.DIFFERENT_TRANSITION;

    if (leftCoincide && !rightCoincide) {
      // honestly no idea, but changing events selection from [2, 1]
      // to [0, 1] fixes the overlapping self-intersecting polygons issue
      divideSegment(events[0].otherEvent, events[1].point, queue);
    }
    return 2;
  }

  // the line segments share the right endpoint
  if (rightCoincide) {
    divideSegment(events[0], events[1].point, queue);
    return 3;
  }

  // no line segment includes totally the other one
  if (events[0] !== events[3].otherEvent) {
    divideSegment(events[0], events[1].point, queue);
    divideSegment(events[1], events[2].point, queue);
    return 3;
  }

  // one line segment includes the other one
  divideSegment(events[0], events[1].point, queue);
  divideSegment(events[3].otherEvent, events[2].point, queue);

  return 3;
}


/**
 * @param  {SweepEvent} se
 * @param  {Array.<Number>} p
 * @param  {Queue} queue
 * @return {Queue}
 */
function divideSegment(se, p, queue)  {
  var r = new sweep_event(p, false, se,            se.isSubject);
  var l = new sweep_event(p, true,  se.otherEvent, se.isSubject);

  if (equals(se.point, se.otherEvent.point)) {
    console.warn('what is that?', se);
  }

  r.contourId = l.contourId = se.contourId;

  // avoid a rounding error. The left event would be processed after the right event
  if (compare_events(l, se.otherEvent) > 0) {
    se.otherEvent.left = true;
    l.left = false;
  }

  // avoid a rounding error. The left event would be processed after the right event
  // if (compareEvents(se, r) > 0) {}

  se.otherEvent.otherEvent = l;
  se.otherEvent = r;

  queue.push(l);
  queue.push(r);

  return queue;
}
/* eslint-enable no-unused-vars, no-debugger */


function subdivideSegments(eventQueue, subject, clipping, sbbox, cbbox, operation) {
  var sortedEvents = [];
  var prev, next;

  var sweepLine = new Tree(compare_segments);
  var sortedEvents = [];

  var rightbound = min$1(sbbox[2], cbbox[2]);

  var prev, next;

  while (eventQueue.length) {
    var event = eventQueue.pop();
    sortedEvents.push(event);

    // optimization by bboxes for intersection and difference goes here
    if ((operation === INTERSECTION && event.point[0] > rightbound) ||
        (operation === DIFFERENCE   && event.point[0] > sbbox[2])) {
      break;
    }

    if (event.left) {
      sweepLine.insert(event);
      // _renderSweepLine(sweepLine, event.point, event);

      next = sweepLine.findIter(event);
      prev = sweepLine.findIter(event);
      event.iterator = sweepLine.findIter(event);

      // Cannot get out of the tree what we just put there
      if (!prev || !next) {
        console.log('brute');
        var iterators = findIterBrute(sweepLine);
        prev = iterators[0];
        next = iterators[1];
      }

      if (prev.data() !== sweepLine.min()) {
        prev.prev();
      } else {
        prev = sweepLine.iterator(); //findIter(sweepLine.max());
        prev.prev();
        prev.next();
      }
      next.next();

      computeFields(event, prev.data(), sweepLine, operation);

      if (next.data()) {
        if (possibleIntersection(event, next.data(), eventQueue) === 2) {
          computeFields(event, prev.data(), sweepLine, operation);
          computeFields(event, next.data(), sweepLine, operation);
        }
      }

      if (prev.data()) {
        if (possibleIntersection(prev.data(), event, eventQueue) === 2) {
          var prevprev = sweepLine.findIter(prev.data());
          if (prevprev.data() !== sweepLine.min()) {
            prevprev.prev();
          } else {
            prevprev = sweepLine.findIter(sweepLine.max());
            prevprev.next();
          }
          computeFields(prev.data(), prevprev.data(), sweepLine, operation);
          computeFields(event, prev.data(), sweepLine, operation);
        }
      }
    } else {
      event = event.otherEvent;
      next = sweepLine.findIter(event);
      prev = sweepLine.findIter(event);

      // _renderSweepLine(sweepLine, event.otherEvent.point, event);

      if (!(prev && next)) continue;

      if (prev.data() !== sweepLine.min()) {
        prev.prev();
      } else {
        prev = sweepLine.iterator();
        prev.prev(); // sweepLine.findIter(sweepLine.max());
        prev.next();
      }
      next.next();
      sweepLine.remove(event);

      //_renderSweepLine(sweepLine, event.otherEvent.point, event);

      if (next.data() && prev.data()) {
        possibleIntersection(prev.data(), next.data(), eventQueue);
      }
    }
  }
  return sortedEvents;
}

function findIterBrute(sweepLine, q) {
  var prev = sweepLine.iterator();
  var next = sweepLine.iterator();
  var it   = sweepLine.iterator(), data;
  while((data = it.next()) !== null) {
    prev.next();
    next.next();
    if (data === event) {
      break;
    }
  }
  return [prev, next];
}


function swap (arr, i, n) {
  var temp = arr[i];
  arr[i] = arr[n];
  arr[n] = temp;
}


function changeOrientation(contour) {
  return contour.reverse();
}


function isArray (arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}


function addHole(contour, idx) {
  if (isArray(contour[0]) && !isArray(contour[0][0])) {
    contour = [contour];
  }
  contour[idx] = [];
  return contour;
}


/**
 * @param  {Array.<SweepEvent>} sortedEvents
 * @return {Array.<SweepEvent>}
 */
function orderEvents(sortedEvents) {
  var event, i, len;
  var resultEvents = [];
  for (i = 0, len = sortedEvents.length; i < len; i++) {
    event = sortedEvents[i];
    if ((event.left && event.inResult) ||
      (!event.left && event.otherEvent.inResult)) {
      resultEvents.push(event);
    }
  }

  // Due to overlapping edges the resultEvents array can be not wholly sorted
  var sorted = false;
  while (!sorted) {
    sorted = true;
    for (i = 0, len = resultEvents.length; i < len; i++) {
      if ((i + 1) < len &&
        compare_events(resultEvents[i], resultEvents[i + 1]) === 1) {
        swap(resultEvents, i, i + 1);
        sorted = false;
      }
    }
  }

  for (i = 0, len = resultEvents.length; i < len; i++) {
    resultEvents[i].pos = i;
  }

  for (i = 0, len = resultEvents.length; i < len; i++) {
    if (!resultEvents[i].left) {
      var temp = resultEvents[i].pos;
      resultEvents[i].pos = resultEvents[i].otherEvent.pos;
      resultEvents[i].otherEvent.pos = temp;
    }
  }

  return resultEvents;
}


/**
 * @param  {Array.<SweepEvent>} sortedEvents
 * @return {Array.<*>} polygons
 */
function connectEdges(sortedEvents) {
  var i, len;
  var resultEvents = orderEvents(sortedEvents);


  // "false"-filled array
  var processed = Array(resultEvents.length);
  var result = [];

  var depth  = [];
  var holeOf = [];
  var isHole = {};

  for (i = 0, len = resultEvents.length; i < len; i++) {
    if (processed[i]) continue;

    var contour = [];
    result.push(contour);

    var ringId = result.length - 1;
    depth.push(0);
    holeOf.push(-1);


    if (resultEvents[i].prevInResult) {
      var lowerContourId = resultEvents[i].prevInResult.contourId;
      if (!resultEvents[i].prevInResult.resultInOut) {
        addHole(result[lowerContourId], ringId);
        holeOf[ringId] = lowerContourId;
        depth[ringId]  = depth[lowerContourId] + 1;
        isHole[ringId] = true;
      } else if (isHole[lowerContourId]) {
        addHole(result[holeOf[lowerContourId]], ringId);
        holeOf[ringId] = holeOf[lowerContourId];
        depth[ringId]  = depth[lowerContourId];
        isHole[ringId] = true;
      }
    }

    var pos = i;
    var initial = resultEvents[i].point;
    contour.push(initial);

    while (pos >= i) {
      processed[pos] = true;

      if (resultEvents[pos].left) {
        resultEvents[pos].resultInOut = false;
        resultEvents[pos].contourId   = ringId;
      } else {
        resultEvents[pos].otherEvent.resultInOut = true;
        resultEvents[pos].otherEvent.contourId   = ringId;
      }

      pos = resultEvents[pos].pos;
      processed[pos] = true;

      contour.push(resultEvents[pos].point);
      pos = nextPos(pos, resultEvents, processed);
    }

    pos = pos === -1 ? i : pos;

    processed[pos] = processed[resultEvents[pos].pos] = true;
    resultEvents[pos].otherEvent.resultInOut = true;
    resultEvents[pos].otherEvent.contourId   = ringId;


    // depth is even
    /* eslint-disable no-bitwise */
    if (depth[ringId] & 1) {
      changeOrientation(contour);
    }
    /* eslint-enable no-bitwise */
  }

  return result;
}


/**
 * @param  {Number} pos
 * @param  {Array.<SweepEvent>} resultEvents
 * @param  {Array.<Boolean>}    processed
 * @return {Number}
 */
function nextPos(pos, resultEvents, processed) {
  var newPos = pos + 1;
  var length = resultEvents.length;
  while (newPos < length &&
         equals(resultEvents[newPos].point, resultEvents[pos].point)) {
    if (!processed[newPos]) {
      return newPos;
    } else {
      newPos = newPos + 1;
    }
  }

  newPos = pos - 1;

  while (processed[newPos]) {
    newPos = newPos - 1;
  }
  return newPos;
}


function trivialOperation(subject, clipping, operation) {
  var result = null;
  if (subject.length * clipping.length === 0) {
    if (operation === INTERSECTION) {
      result = EMPTY;
    } else if (operation === DIFFERENCE) {
      result = subject;
    } else if (operation === UNION || operation === XOR) {
      result = (subject.length === 0) ? clipping : subject;
    }
  }
  return result;
}


function compareBBoxes(subject, clipping, sbbox, cbbox, operation) {
  var result = null;
  if (sbbox[0] > cbbox[2] ||
      cbbox[0] > sbbox[2] ||
      sbbox[1] > cbbox[3] ||
      cbbox[1] > sbbox[3]) {
    if (operation === INTERSECTION) {
      result = EMPTY;
    } else if (operation === DIFFERENCE) {
      result = subject;
    } else if (operation === UNION || operation === XOR) {
      result = subject.concat(clipping);
    }
  }
  return result;
}


function boolean(subject, clipping, operation) {
  var trivial = trivialOperation(subject, clipping, operation);
  if (trivial) {
    return trivial === EMPTY ? null : trivial;
  }
  var sbbox = [Infinity, Infinity, -Infinity, -Infinity];
  var cbbox = [Infinity, Infinity, -Infinity, -Infinity];

  var eventQueue = fillQueue(subject, clipping, sbbox, cbbox);

  trivial = compareBBoxes(subject, clipping, sbbox, cbbox, operation);
  if (trivial) {
    return trivial === EMPTY ? null : trivial;
  }
  var sortedEvents = subdivideSegments(eventQueue, subject, clipping, sbbox, cbbox, operation);
  return connectEdges(sortedEvents);
}


var src$1 = boolean;


var union = function(subject, clipping) {
  return boolean(subject, clipping, UNION);
};


var diff = function(subject, clipping) {
  return boolean(subject, clipping, DIFFERENCE);
};


var xor = function(subject, clipping) {
  return boolean(subject, clipping, XOR);
};


var intersection_1 = function(subject, clipping) {
  return boolean(subject, clipping, INTERSECTION);
};


/**
 * @enum {Number}
 */
var operations = {
  INTERSECTION: INTERSECTION,
  DIFFERENCE:   DIFFERENCE,
  UNION:        UNION,
  XOR:          XOR
};


// for testing
var fillQueue_1            = fillQueue;
var computeFields_1        = computeFields;
var subdivideSegments_1    = subdivideSegments;
var divideSegment_1        = divideSegment;
var possibleIntersection_1 = possibleIntersection;
src$1.union = union;
src$1.diff = diff;
src$1.xor = xor;
src$1.intersection = intersection_1;
src$1.operations = operations;
src$1.fillQueue = fillQueue_1;
src$1.computeFields = computeFields_1;
src$1.subdivideSegments = subdivideSegments_1;
src$1.divideSegment = divideSegment_1;
src$1.possibleIntersection = possibleIntersection_1;

var martinezPolygonClipping = src$1;

var utils = createCommonjsModule(function (module) {
/**
 * @param  {*} arr
 * @return {Boolean}
 */
var isArray = module.exports.isArray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
};


/**
 * @param  {Array.<Number>} p1
 * @param  {Array.<Number>} p2
 * @return {Boolean}
 */
module.exports.equals = function equals(p1, p2) {
  return p1[0] === p2[0] && p1[1] === p2[1];
};


/**
 * @param  {*}       coordinates
 * @param  {Number=} depth
 * @return {*}
 */
module.exports.orientRings = function orientRings(coordinates, depth, isHole) {
  depth = depth || 0;
  var i, len;
  if (isArray(coordinates) && typeof coordinates[0][0] === 'number') {
    var area = 0;
    var ring = coordinates;

    for (i = 0, len = ring.length; i < len; i++) {
      var pt1 = ring[i];
      var pt2 = ring[(i + 1) % len];
      area += pt1[0] * pt2[1];
      area -= pt2[0] * pt1[1];
    }
    if ((!isHole && area > 0) || (isHole && area < 0)) {
      ring.reverse();
    }
  } else {
    for (i = 0, len = coordinates.length; i < len; i++) {
      orientRings(coordinates[i], depth + 1, i > 0);
    }
  }

  return coordinates;
};
});
var utils_1 = utils.isArray;
var utils_2 = utils.equals;
var utils_3 = utils.orientRings;

var isArray$1     = utils.isArray;
var equals$1      = utils.equals;
var orientRings = utils.orientRings;


/**
 * Offset builder
 *
 * @param {Array.<Object>=} vertices
 * @param {Number=}        arcSegments
 * @constructor
 */
function Offset(vertices, arcSegments) {

  /**
   * @type {Array.<Object>}
   */
  this.vertices = null;

  /**
   * @type {Array.<Edge>}
   */
  this.edges = null;

  /**
   * @type {Boolean}
   */
  this._closed = false;


  /**
   * @type {Number}
   */
  this._distance = 0;

  if (vertices) {
    this.data(vertices);
  }

  /**
   * Segments in edge bounding arches
   * @type {Number}
   */
  this._arcSegments = arcSegments !== undefined ? arcSegments : 5;
}

/**
 * Change data set
 * @param  {Array.<Array>} vertices
 * @return {Offset}
 */
Offset.prototype.data = function(vertices) {
  this._edges = [];
  if (!isArray$1 (vertices)) {
    throw new Error('Offset requires at least one coodinate to work with');
  }

  if (isArray$1(vertices) && typeof vertices[0] === 'number') {
    this.vertices = vertices;
  } else {
    this.vertices = orientRings(vertices);
    this._processContour(this.vertices, this._edges);
  }

  return this;
};


/**
 * Recursively process contour to create normals
 * @param  {*} contour
 * @param  {Array} edges
 */
Offset.prototype._processContour = function(contour, edges) {
  var i, len;
  if (isArray$1(contour[0]) && typeof contour[0][0] === 'number') {
    len = contour.length;
    if (equals$1(contour[0], contour[len - 1])) {
      len -= 1; // otherwise we get division by zero in normals
    }
    for (i = 0; i < len; i++) {
      edges.push(new edge(contour[i], contour[(i + 1) % len]));
    }
  } else {
    for (i = 0, len = contour.length; i < len; i++) {
      edges.push([]);
      this._processContour(contour[i], edges[edges.length - 1]);
    }
  }
};


/**
 * @param  {Number} arcSegments
 * @return {Offset}
 */
Offset.prototype.arcSegments = function(arcSegments) {
  this._arcSegments = arcSegments;
  return this;
};


/**
 * Validates if the first and last points repeat
 * TODO: check CCW
 *
 * @param  {Array.<Object>} vertices
 */
Offset.prototype.validate = function(vertices) {
  var len = vertices.length;
  if (typeof vertices[0] === 'number') return [vertices];
  if (vertices[0][0] === vertices[len - 1][0] &&
    vertices[0][1] === vertices[len - 1][1]) {
    if (len > 1) {
      vertices = vertices.slice(0, len - 1);
      this._closed = true;
    }
  }
  return vertices;
};


/**
 * Creates arch between two edges
 *
 * @param  {Array.<Object>} vertices
 * @param  {Object}         center
 * @param  {Number}         radius
 * @param  {Object}         startVertex
 * @param  {Object}         endVertex
 * @param  {Number}         segments
 * @param  {Boolean}        outwards
 */
Offset.prototype.createArc = function(vertices, center, radius, startVertex,
    endVertex, segments, outwards) {

  var PI2 = Math.PI * 2,
      startAngle = Math.atan2(startVertex[1] - center[1], startVertex[0] - center[0]),
      endAngle   = Math.atan2(endVertex[1] - center[1], endVertex[0] - center[0]);

  // odd number please
  if (segments % 2 === 0) {
    segments -= 1;
  }

  if (startAngle < 0) {
    startAngle += PI2;
  }

  if (endAngle < 0) {
    endAngle += PI2;
  }

  var angle = ((startAngle > endAngle) ?
               (startAngle - endAngle) :
               (startAngle + PI2 - endAngle)),
      segmentAngle = ((outwards) ? -angle : PI2 - angle) / segments;

  vertices.push(startVertex);
  for (var i = 1; i < segments; ++i) {
    angle = startAngle + segmentAngle * i;
    vertices.push([
      center[0] + Math.cos(angle) * radius,
      center[1] + Math.sin(angle) * radius
    ]);
  }
  vertices.push(endVertex);
  return vertices;
};


/**
 * @param  {Number}  dist
 * @param  {String=} units
 * @return {Offset}
 */
Offset.prototype.distance = function(dist, units) {
  this._distance = dist || 0;
  return this;
};


/**
 * @static
 * @param  {Number}  degrees
 * @param  {String=} units
 * @return {Number}
 */
Offset.degreesToUnits = function(degrees, units) {
  switch (units) {
    case 'miles':
      degrees = degrees / 69.047;
    break;
    case 'feet':
      degrees = degrees / 364568.0;
      break;
    case 'kilometers':
      degrees = degrees / 111.12;
      break;
    case 'meters':
    case 'metres':
      degrees = degrees / 111120.0;
      break;
  }
  return degrees;
};


/**
 * @param  {Array.<Object>} vertices
 * @return {Array.<Object>}
 */
Offset.prototype.ensureLastPoint = function(vertices) {
  if (!equals$1(vertices[0], vertices[vertices.length - 1])) {
    vertices.push([
      vertices[0][0],
      vertices[0][1]
    ]);
  }
  return vertices;
};


/**
 * Decides by the sign if it's a padding or a margin
 *
 * @param  {Number} dist
 * @return {Array.<Object>}
 */
Offset.prototype.offset = function(dist) {
  this.distance(dist);
  return this._distance === 0 ? this.vertices :
      (this._distance > 0 ? this.margin(this._distance) :
        this.padding(-this._distance));
};


/**
 * @param  {Array.<Array.<Number>>} vertices
 * @param  {Array.<Number>}         pt1
 * @param  {Array.<Number>}         pt2
 * @param  {Number}                 dist
 * @return {Array.<Array.<Number>>}
 */
Offset.prototype._offsetSegment = function(v1, v2, e1, dist) {
  var vertices = [];
  var offsets = [
    e1.offset(e1._inNormal[0] * dist, e1._inNormal[1] * dist),
    e1.inverseOffset(e1._outNormal[0] * dist, e1._outNormal[1] * dist)
  ];

  for (var i = 0, len = 2; i < len; i++) {
    var thisEdge = offsets[i],
        prevEdge = offsets[(i + len - 1) % len];
    this.createArc(
              vertices,
              i === 0 ? v1 : v2, // edges[i].current, // p1 or p2
              dist,
              prevEdge.next,
              thisEdge.current,
              this._arcSegments,
              true
            );
  }

  return vertices;
};


/**
 * @param  {Number} dist
 * @return {Array.<Number>}
 */
Offset.prototype.margin = function(dist) {
  this.distance(dist);

  if (typeof this.vertices[0] === 'number') { // point
    return this.offsetPoint(this._distance);
  }

  if (dist === 0) return this.vertices;

  var union = this.offsetLines(this._distance);
  //return union;
  union = martinezPolygonClipping.union(this.vertices, union);
  return orientRings(union);
};


/**
 * @param  {Number} dist
 * @return {Array.<Number>}
 */
Offset.prototype.padding = function(dist) {
  this.distance(dist);

  if (this._distance === 0) return this.ensureLastPoint(this.vertices);
  if (this.vertices.length === 2 && typeof this.vertices[0] === 'number') {
    return this.vertices;
  }

  var union = this.offsetLines(this._distance);
  var diff = martinezPolygonClipping.diff(this.vertices, union);
  return orientRings(diff);
};


/**
 * Creates margin polygon
 * @param  {Number} dist
 * @return {Array.<Object>}
 */
Offset.prototype.offsetLine = function(dist) {
  if (dist === 0) return this.vertices;
  return orientRings(this.offsetLines(dist));
};


/**
 * Just offsets lines, no fill
 * @param  {Number} dist
 * @return {Array.<Array.<Array.<Number>>>}
 */
Offset.prototype.offsetLines = function(dist) {
  if (dist < 0) throw new Error('Cannot apply negative margin to the line');
  var union;
  this.distance(dist);
  if (isArray$1(this.vertices[0]) && typeof this.vertices[0][0] !== 'number') {
    for (var i = 0, len = this._edges.length; i < len; i++) {
      union = (i === 0) ?
        this.offsetContour(this.vertices[i], this._edges[i]):
        martinezPolygonClipping.union(union, this.offsetContour(this.vertices[i], this._edges[i]));
    }
  } else {
    union = (this.vertices.length === 1) ?
      this.offsetPoint() :
      this.offsetContour(this.vertices, this._edges);
  }

  return union;
};


/**
 * @param  {Array.<Array.<Number>>|Array.<Array.<...>>} curve
 * @param  {Array.<Edge>|Array.<Array.<...>>} edges
 * @return {Polygon}
 */
Offset.prototype.offsetContour = function(curve, edges) {
  var union, i, len;
  if (isArray$1(curve[0]) && typeof curve[0][0] === 'number') {
    // we have 1 less edge than vertices
    for (i = 0, len = curve.length - 1; i < len; i++) {
      var segment = this.ensureLastPoint(
        this._offsetSegment(curve[i], curve[i + 1], edges[i], this._distance)
      );
      union = (i === 0) ?
                [this.ensureLastPoint(segment)] :
                martinezPolygonClipping.union(union, this.ensureLastPoint(segment));
    }
  } else {
    for (i = 0, len = edges.length; i < len; i++) {
      union = (i === 0) ?
        this.offsetContour(curve[i], edges[i]) :
        martinezPolygonClipping.union(union, this.offsetContour(curve[i], edges[i]));
    }
  }
  return union;
};


/**
 * @param  {Number} distance
 * @return {Array.<Array.<Number>}
 */
Offset.prototype.offsetPoint = function(distance) {
  this.distance(distance);
  var vertices = this._arcSegments * 2;
  var points   = [];
  var center   = this.vertices;
  var radius   = this._distance;
  var angle    = 0;

  if (vertices % 2 === 0) vertices++;

  for (var i = 0; i < vertices; i++) {
    angle += (2 * Math.PI / vertices); // counter-clockwise
    points.push([
      center[0] + (radius * Math.cos(angle)),
      center[1] + (radius * Math.sin(angle))
    ]);
  }

  return orientRings([this.ensureLastPoint(points)]);
};


Offset.orientRings = orientRings;

var offset = Offset;

var SubjectCustom_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(React$1__default);

var _Subject2 = _interopRequireDefault(Subject_1);

var _propTypes = _interopRequireDefault(propTypes$1);

var _Handle = _interopRequireDefault(Handle_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SubjectCustom =
/*#__PURE__*/
function (_Subject) {
  _inherits(SubjectCustom, _Subject);

  function SubjectCustom() {
    _classCallCheck(this, SubjectCustom);

    return _possibleConstructorReturn(this, _getPrototypeOf(SubjectCustom).apply(this, arguments));
  }

  _createClass(SubjectCustom, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$custom = _this$props.custom,
          custom = _this$props$custom === void 0 ? "M0,0" : _this$props$custom,
          editMode = _this$props.editMode,
          transform = _this$props.transform;
      var handles;

      if (editMode) {
        handles = _react.default.createElement(_Handle.default, {
          handleStart: this.props.dragStart,
          handleStop: this.props.dragEnd,
          handleDrag: this.props.dragSubject
        });
      }

      return _react.default.createElement("g", {
        className: "annotation-subject"
      }, _react.default.createElement("g", {
        transform: transform
      }, typeof custom === "string" ? _react.default.createElement("path", {
        d: custom,
        pointerEvents: "none"
      }) : _react.default.createElement("g", {
        pointerEvents: "none"
      }, custom)), handles);
    }
  }]);

  return SubjectCustom;
}(_Subject2.default);

exports.default = SubjectCustom;
SubjectCustom.propTypes = {
  editMode: _propTypes.default.bool
};
});

unwrapExports(SubjectCustom_1);

var AnnotationCalloutCustom_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AnnotationCalloutCustom;

var _SubjectCustom = _interopRequireDefault(SubjectCustom_1);

var _ConnectorElbow = _interopRequireDefault(ConnectorElbow_1);

var _classnames = _interopRequireDefault(classnames);

var _Type = _interopRequireDefault(Type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AnnotationCalloutCustom(props) {
  var className = (0, _classnames.default)("callout custom", props.className);
  return (0, _Type.default)(_objectSpread({}, props, {
    className: className
  }), _ConnectorElbow.default, {
    lineType: "horizontal"
  }, _SubjectCustom.default);
}
});

var AnnotationCalloutCustom = unwrapExports(AnnotationCalloutCustom_1);

const HullEnclosure = ({
  points,
  d,
  i
}) => {
  const {
    color = 'black',
    dx = -25,
    dy = -25,
    label,
    padding = 10,
    buffer = padding,
    strokeWidth = 10
  } = d;
  const hullPoints = polygonHull(points);
  const offset$1 = new offset();
  const bufferedHull = offset$1.data([...hullPoints, hullPoints[0]]).margin(buffer)[0];
  const hullD = `M${bufferedHull.map(d => d.join(',')).join('L')}Z`;
  const firstCoord = bufferedHull[0];
  const {
    nx = firstCoord[0] + dx,
    ny = firstCoord[1] + dy
  } = d;
  const closestCoordinates = bufferedHull.reduce((p, c) => {
    if (Math.hypot(nx - p[0], ny - p[1]) > Math.hypot(nx - c[0], ny - c[1])) {
      p = c;
    }

    return p;
  }, firstCoord);
  const noteData = Object.assign({
    dx: dx,
    dy: dy,
    note: {
      label
    },
    connector: {
      end: 'arrow'
    }
  }, d, {
    type: AnnotationCalloutCustom,
    x: closestCoordinates[0],
    y: closestCoordinates[1],
    subject: {
      custom: [createElement("path", {
        key: "hull-drawing",
        d: hullD,
        strokeWidth: strokeWidth,
        strokeMiterlimit: "10",
        strokeLinejoin: "miter",
        strokeLinecap: "butt",
        fill: "none",
        stroke: color,
        transform: `translate(${-closestCoordinates[0]},${-closestCoordinates[1]})`
      })],
      customID: 'hull-annotation'
    }
  });
  return createElement(InternalAnnotation, {
    key: d.key || `annotation-${i}`,
    noteData: noteData
  });
};

const SvgHullEnclosure = ({
  screenCoordinates,
  d,
  i
}) => {
  return HullEnclosure({
    points: screenCoordinates,
    d,
    i
  });
};

var threshold = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



exports.default = function (_ref) {
  var x1 = _ref.x1,
      x2 = _ref.x2,
      y1 = _ref.y1,
      y2 = _ref.y2,
      x = _ref.x,
      y = _ref.y;

  x1 = (x1 !== undefined ? x1 : x) - x;
  x2 = (x2 !== undefined ? x2 : x) - x;
  y1 = (y1 !== undefined ? y1 : y) - y;
  y2 = (y2 !== undefined ? y2 : y) - y;

  var data = [[x1, y1], [x2, y2]];
  return { components: [(0, Builder.lineBuilder)({ data: data, className: "subject" })] };
};
});

unwrapExports(threshold);

var SubjectThreshold_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(React$1__default);

var _threshold = _interopRequireDefault(threshold);

var _Subject2 = _interopRequireDefault(Subject_1);

var _propTypes = _interopRequireDefault(propTypes$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SubjectThreshold =
/*#__PURE__*/
function (_Subject) {
  _inherits(SubjectThreshold, _Subject);

  function SubjectThreshold() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SubjectThreshold);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SubjectThreshold)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "name", "SubjectThreshold");

    return _this;
  }

  _createClass(SubjectThreshold, [{
    key: "getComponents",
    value: function getComponents(_ref) {
      var x1 = _ref.x1,
          x2 = _ref.x2,
          y1 = _ref.y1,
          y2 = _ref.y2,
          x = _ref.x,
          y = _ref.y,
          editMode = _ref.editMode;
      return (0, _threshold.default)({
        x1: x1,
        x2: x2,
        y1: y1,
        y2: y2,
        x: x,
        y: y,
        editMode: editMode
      });
    }
  }]);

  return SubjectThreshold;
}(_Subject2.default);

exports.default = SubjectThreshold;
SubjectThreshold.propTypes = {
  x: _propTypes.default.number,
  x1: _propTypes.default.number,
  x2: _propTypes.default.number,
  y: _propTypes.default.number,
  y1: _propTypes.default.number,
  y2: _propTypes.default.number,
  editMode: _propTypes.default.bool
};
});

unwrapExports(SubjectThreshold_1);

var AnnotationXYThreshold_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AnnotationXYThreshold;

var _SubjectThreshold = _interopRequireDefault(SubjectThreshold_1);

var _ConnectorElbow = _interopRequireDefault(ConnectorElbow_1);

var _classnames = _interopRequireDefault(classnames);

var _Type = _interopRequireDefault(Type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AnnotationXYThreshold(props) {
  var className = (0, _classnames.default)("callout xythreshold", props.className);
  return (0, _Type.default)(_objectSpread({}, props, {
    className: className
  }), _ConnectorElbow.default, {
    lineType: "horizontal"
  }, _SubjectThreshold.default);
}
});

var AnnotationXYThreshold = unwrapExports(AnnotationXYThreshold_1);

const SvgXAnnotation = ({
  screenCoordinates,
  d,
  i,
  adjustedSize
}) => {
  const noteData = Object.assign({
    dx: 50,
    dy: 20,
    y: 0,
    note: {
      label: d.label
    },
    connector: {
      end: 'arrow'
    }
  }, d, {
    type: AnnotationXYThreshold,
    x: screenCoordinates[0],
    subject: {
      x: screenCoordinates[0],
      y1: 0,
      y2: adjustedSize[1]
    },
    i
  });
  return createElement(InternalAnnotation, {
    key: d.key || `annotation-${i}`,
    noteData: noteData
  });
};

const SvgYAnnotation = ({
  screenCoordinates,
  d,
  i,
  adjustedSize,
  adjustedPosition
}) => {
  const xPosition = i * 25;
  const noteData = Object.assign({
    dx: 50,
    dy: -20,
    x: xPosition,
    note: {
      label: d.label
    },
    connector: {
      end: 'arrow'
    }
  }, d, {
    type: AnnotationXYThreshold,
    y: screenCoordinates[1],
    subject: {
      y: screenCoordinates[1],
      x1: 0,
      x2: adjustedSize[0] + adjustedPosition[0]
    },
    i
  });
  return createElement(InternalAnnotation, {
    key: d.key || `annotation-${i}`,
    noteData: noteData
  });
};

const SvgLineAnnotation = ({
  d,
  i,
  screenCoordinates
}) => {
  const lineGenerator = line().x(p => p[0]).y(p => p[1]);
  const lineD = lineGenerator(screenCoordinates);
  const laLine = createElement(lib_1, {
    key: `${d.label}annotationline${i}`,
    markType: "path",
    d: lineD,
    className: `annotation annotation-line ${d.className || ''} `
  });
  const laLabel = createElement(lib_1, {
    markType: "text",
    key: `${d.label}annotationlinetext${i}`,
    x: (screenCoordinates[0][0] + screenCoordinates[1][0]) / 2,
    y: (screenCoordinates[0][1] + screenCoordinates[1][1]) / 2,
    className: `annotation annotation-line-label ${d.className || ''} `
  }, d.label);
  return [laLine, laLabel];
};

const SvgBoundsAnnotation = ({
  d,
  i,
  adjustedSize,
  xAccessor,
  yAccessor,
  xScale,
  yScale
}) => {
  const startXValue = findFirstAccessorValue(xAccessor, d.bounds[0]);
  const startYValue = findFirstAccessorValue(yAccessor, d.bounds[0]);
  const endXValue = findFirstAccessorValue(xAccessor, d.bounds[1]);
  const endYValue = findFirstAccessorValue(yAccessor, d.bounds[1]);
  const x0Position = startXValue ? xScale(startXValue) : 0;
  const y0Position = startYValue ? yScale(startYValue) : adjustedSize[1];
  const x1Position = endXValue ? xScale(endXValue) : adjustedSize[0];
  const y1Position = endYValue ? yScale(endYValue) : 0;
  const noteData = Object.assign({
    dx: 250,
    dy: -20,
    note: {
      label: d.label
    },
    connector: {
      end: 'arrow'
    }
  }, d, {
    type: AnnotationCalloutRect,
    x: Math.min(x0Position, x1Position),
    y: Math.min(y0Position, y1Position),
    subject: {
      width: Math.abs(x1Position - x0Position),
      height: Math.abs(y0Position - y1Position)
    },
    i
  });
  return createElement(InternalAnnotation, {
    key: d.key || `annotation-${i}`,
    noteData: noteData
  });
};

const SvgAreaAnnotation = ({
  d,
  i,
  xScale,
  xAccessor,
  yScale,
  yAccessor,
  annotationLayer
}) => {
  const mappedCoordinates = `M${d.coordinates.map(p => [xScale(findFirstAccessorValue(xAccessor, p)), yScale(findFirstAccessorValue(yAccessor, p))]).join('L')}Z`;
  const xBounds = extent(d.coordinates.map(p => xScale(findFirstAccessorValue(xAccessor, p))));
  const yBounds = extent(d.coordinates.map(p => yScale(findFirstAccessorValue(yAccessor, p))));
  const xCenter = (xBounds[0] + xBounds[1]) / 2;
  const yCenter = (yBounds[0] + yBounds[1]) / 2;
  const laLine = createElement(lib_1, {
    key: `${d.label}-annotation-area-${i}`,
    markType: "path",
    d: mappedCoordinates,
    className: `annotation annotation-area ${d.className || ''} `
  });
  const laLabel = createElement(lib_1, {
    markType: "text",
    key: `${d.label}-annotationtext-${i}`,
    forceUpdate: true,
    x: xCenter,
    y: yCenter,
    transform: `translate(${annotationLayer.position})`,
    className: `annotation annotation-area-label ${d.className || ''} `,
    style: {
      textAnchor: 'middle'
    }
  }, d.label);
  return [laLine, laLabel];
};

const findPoints = (d, xScale, yScale) => {
  const {
    points,
    style
  } = d;
  return points.filter(e => e.x === d.x && e.y === d.y).map((p, q) => {
    const baseStyle = style({ ...p
    });
    const highlightStyle = typeof style === 'function' ? style({ ...p,
      ...p.data
    }, q) : style || {};
    return React$1__default.createElement("circle", {
      key: `highlight-point-${q}`,
      cx: xScale(p.x),
      cy: yScale(p.y),
      r: 5,
      fill: "none",
      stroke: "black",
      strokeWidth: 2,
      style: { ...baseStyle,
        ...highlightStyle
      },
      className: `highlight-annotation ${d.class && typeof d.class === 'function' && d.class({ ...p,
        ...p.data
      }, q) || d.class && d.class || ''}`
    });
  });
};

const SvgHighlight = ({
  d,
  i,
  xScale,
  yScale,
  xyFrameRender,
  defined
}) => {
  const foundPoints = findPoints(d, xScale, yScale);
  const foundAreas = [];
  const foundLines = []; // const foundLines = lines.data
  //   .filter((p, q) => idAccessor(p, q) === dID)
  //   .map((p, q) => {
  //     const baseStyle = xyFrameRender.lines.styleFn(p, q);
  //
  //     const highlightStyle =
  //       typeof d.style === 'function' ? d.style(p, q) : d.style || {};
  //
  //     return (
  //       <path
  //         className={`highlight-annotation ${(d.class &&
  //           typeof d.class === 'function' &&
  //           d.class(p, q)) ||
  //           (d.class && d.class) ||
  //           ''}`}
  //         key={`highlight-summary-${q}`}
  //         d={lineGenerator(p.data)}
  //         fill="none"
  //         stroke="black"
  //         strokeWidth={1}
  //         style={{ ...baseStyle, ...highlightStyle }}
  //       />
  //     );
  //   });
  //
  // const foundSummaries = summaries.data
  //   .filter((p, q) => idAccessor(p, q) === dID)
  //   .map((p, q) => {
  //     const baseStyle = xyFrameRender.summaries.styleFn(p, q);
  //
  //     const highlightStyle =
  //       typeof d.style === 'function' ? d.style(p, q) : d.style || {};
  //
  //     return (
  //       <path
  //         className={`highlight-annotation ${(d.class &&
  //           typeof d.class === 'function' &&
  //           d.class(p, q)) ||
  //           (d.class && d.class) ||
  //           ''}`}
  //         key={`highlight-summary-${q}`}
  //         d={`M${p.coordinates.join('L')}`}
  //         fill="none"
  //         stroke="black"
  //         strokeWidth={1}
  //         style={{ ...baseStyle, ...highlightStyle }}
  //       />
  //     );
  //   });

  return [...foundAreas, ...foundLines, ...foundPoints];
};

const PointsAlong = along => ({
  d,
  lines,
  points,
  xScale,
  yScale,
  pointStyle
}) => {
  const alongScale = along === 'x' ? xScale : yScale;
  along = along === 'yTop' && d.yMiddle ? 'yMiddle' : along;

  if (d && d[along]) {
    const {
      threshold = 1,
      r = () => 4,
      styleFn = pointStyle
    } = d;
    const foundPoints = [];
    const halfThreshold = threshold / 2;

    if (lines && lines.length > 0) {
      lines.forEach(linedata => {
        const linePoints = linedata.data.filter(p => {
          const pAlong = alongScale(p[along]);
          const dAlong = alongScale(d[along]);
          return pAlong <= dAlong + halfThreshold && pAlong >= dAlong - halfThreshold;
        });
        foundPoints.push(...linePoints);
      });
    }

    if (points && points.length > 0) {
      const pointPoints = points.filter(p => {
        const pAlong = alongScale(p[along]);
        const dAlong = alongScale(d[along]);
        return pAlong <= dAlong + halfThreshold && pAlong >= dAlong - halfThreshold;
      });
      foundPoints.push(...pointPoints);
    }

    return foundPoints.map((p, i) => createElement("circle", {
      key: `found-circle-${i}`,
      r: r(p, i),
      style: styleFn(p, i),
      cx: xScale(p.xMiddle || p.x),
      cy: yScale(p.yMiddle || p.yTop)
    }));
  }

  return null;
};

const SvgHorizontalPointsAnnotation = PointsAlong('yTop');
const SvgVerticalPointsAnnotation = PointsAlong('x');

const TypeHash = {
  'desaturation-layer': DesaturationLayer,
  xy: SvgXYAnnotation,
  'frame-hover': SvgXYAnnotation,
  'react-annotation': BasicReactAnnotation,
  function: BasicReactAnnotation,
  enclose: SvgEncloseAnnotation,
  'enclose-rect': SvgRectEncloseAnnotation,
  'enclose-hull': SvgHullEnclosure,
  x: SvgXAnnotation,
  y: SvgYAnnotation,
  bounds: SvgBoundsAnnotation,
  line: SvgLineAnnotation,
  area: SvgAreaAnnotation,
  'horizontal-points': SvgHorizontalPointsAnnotation,
  'vertical-points': SvgVerticalPointsAnnotation,
  highlight: SvgHighlight
};

const toAnnotations = (d, i, props) => {
  const {
    adjustedSize
  } = props;
  const screenCoordinates = [d.x ? d.x : 0, d.y ? adjustedSize[1] - d.y : adjustedSize[1]];
  const widgetProps = { ...props,
    ...d,
    d,
    i,
    screenCoordinates
  };
  const AnnotationType = TypeHash[d.type] || d.type;
  return AnnotationType ? React$1__default.createElement(AnnotationType, widgetProps) : null;
};

const renderAnnotations = (annotations, props) => {
  const {
    annotationHandling = false
  } = props;
  let adjustedAnnotations = [];
  const annotationProcessor = typeof annotationHandling === 'object' ? annotationHandling : {
    layout: {
      type: annotationHandling
    }
  };
  const initialSVGAnnotations = annotations.map((d, i) => toAnnotations(d, i, props)).filter(d => d !== null && d !== undefined);
  const adjustableAnnotations = initialSVGAnnotations.filter(d => d.props && d.props.noteData && !d.props.noteData.fixedPosition);
  const fixedAnnotations = initialSVGAnnotations.filter(d => !d.props || !d.props.noteData || d.props.noteData.fixedPosition);

  if (annotationHandling === false) {
    adjustedAnnotations = adjustableAnnotations;
  }

  if (adjustedAnnotations.length !== adjustableAnnotations.length) {
    adjustedAnnotations = index(adjustableAnnotations, annotationProcessor, props);
  } else {
    //Handle when style or other attributes change
    adjustedAnnotations = adjustedAnnotations.map((d, i) => {
      const newNoteData = Object.assign(adjustableAnnotations[i].props.noteData, {
        nx: d.props.noteData.nx,
        ny: d.props.noteData.ny,
        note: d.props.noteData.note
      });
      return React$1__default.createElement(InternalAnnotation, {
        key: d.key,
        noteData: newNoteData
      });
    });
  }

  return [...adjustedAnnotations, ...fixedAnnotations];
};

const TooltipPositioner = props => {
  const containerRef = useRef$1();
  const {
    tooltipContent,
    tooltipContentArgs
  } = props;
  let offset = null;
  let tooltipContainerInitialDimensions = {}; // simple heuristics to check if the tooltip container exceeds the viewport
  // if so, capture the suggested offset

  if (containerRef && containerRef.current) {
    offset = {
      x: 0,
      y: 0
    };
    tooltipContainerInitialDimensions = containerRef.current.getBoundingClientRect();
    const {
      right,
      left,
      top,
      bottom
    } = tooltipContainerInitialDimensions;
    const containerWidth = right - left;
    const containerHeight = bottom - top;

    if (right > window.innerWidth) {
      offset.x = -containerWidth;
    } else if (left < 0) {
      offset.x = containerWidth;
    }

    if (bottom > window.innerHeight) {
      offset.y = -containerHeight;
    } else if (top < 0) {
      offset.y = containerHeight;
    }
  }

  const containerStyle = offset ? {
    transform: `translate(${offset.x}px,${offset.y}px)`
  } : {
    opacity: 0
  };
  const tooltipContainerAttributes = {
    offset: offset || {
      x: 0,
      y: 0
    },
    tooltipContainerInitialDimensions
  };
  return React$1__default.createElement("div", {
    ref: containerRef,
    style: containerStyle
  }, tooltipContent({ ...tooltipContentArgs,
    tooltipContainerAttributes
  }));
};

TooltipPositioner.propTypes = {
  tooltipContent: propTypes.func,
  tooltipContentArgs: propTypes.object
};

const HTMLTooltipAnnotation = ({
  tooltipContent,
  i,
  d,
  useSpans
}) => {
  //To string because React gives a DOM error if it gets a date
  return React$1__default.createElement(SpanOrDiv, {
    span: useSpans,
    key: `xylabel-${i}`,
    className: `annotation annotation-xy-label ${d.className || ''} `,
    style: {
      position: 'absolute',
      top: `${d.y}px`,
      left: `${d.x}px`
    }
  }, React$1__default.createElement(TooltipPositioner, {
    tooltipContent: tooltipContent,
    tooltipContentArgs: d
  }));
};

HTMLTooltipAnnotation.propTypes = {
  tooltipContent: propTypes.func,
  i: propTypes.number,
  d: propTypes.object,
  useSpans: propTypes.bool
};

const isPlot = type => ['Hexbin', 'Contour', 'Heatmap', 'Line'].includes(type);

const getCanvasScale = context => {
  const devicePixelRatio = window.devicePixelRatio || 1;
  const backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
  return devicePixelRatio / backingStoreRatio;
};

const XYFrame = props => {
  const frontCanvasRef = useRef$1(null);
  const backCanvasRef = useRef$1(null);
  const [frontCanvas, setFrontCanvas] = useState(null);
  const [backCanvas, setBackCanvas] = useState(null);
  const [voronoiHover, setVoronoiHover] = useState(null);

  const updateCanvas = () => {
    if (frontCanvasRef && frontCanvasRef.current) {
      const _frontContext = frontCanvasRef.current.getContext('2d');

      const canvasScale = getCanvasScale(_frontContext);

      _frontContext.scale(canvasScale, canvasScale);

      setFrontCanvas(frontCanvasRef.current);
    }

    if (backCanvasRef && backCanvasRef.current) {
      const _backContext = backCanvasRef.current.getContext('2d');

      _backContext.mozImageSmoothingEnabled = false;
      _backContext.webkitImageSmoothingEnabled = false;
      _backContext.msImageSmoothingEnabled = false;
      _backContext.imageSmoothingEnabled = false;
      const canvasScale = getCanvasScale(_backContext);

      _backContext.scale(canvasScale, canvasScale);

      setBackCanvas(backCanvasRef.current);
    }
  };

  useEffect$1(() => {
    updateCanvas();
  }, []);
  const {
    width,
    height,
    name,
    className,
    frameKey,
    title,
    useSpans,
    additionalDefs,
    margin: baseMargin,
    matte,
    beforeElements,
    afterElements,
    backgroundGraphics,
    foregroundGraphics,
    canvasPostProcess,
    renderOrder,
    children,
    hoverAnnotation,
    interaction,
    customClickBehavior,
    customHoverBehavior,
    customDoubleClickBehavior,
    overlay,
    columns,
    interactionOverflow,
    disableCanvasInteraction,
    tooltipContent
  } = props;
  const size = [width, height];
  const devicePixelRatio = window.devicePixelRatio || 1;
  const finalBackgroundGraphics = typeof backgroundGraphics === 'function' ? backgroundGraphics({
    size,
    margin
  }) : backgroundGraphics;
  const finalForegroundGraphics = typeof foregroundGraphics === 'function' ? foregroundGraphics({
    size,
    margin
  }) : foregroundGraphics;
  const userTitle = typeof title === 'object' && !React$1__default.isValidElement(title) && title !== null ? title : {
    title,
    orient: 'top'
  };
  const generatedTitle = generateFrameTitle({
    title: userTitle,
    size
  });
  const margin = typeof baseMargin !== 'object' ? {
    top: baseMargin,
    bottom: baseMargin,
    left: baseMargin,
    right: baseMargin
  } : Object.assign({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }, baseMargin); //todo: remove

  const marginGraphic = toMarginGraphic({
    matte,
    size,
    margin,
    name
  });
  const {
    adjustedPosition,
    adjustedSize
  } = getAdjustedPositionSize({
    size: [width, height],
    margin
  });
  const allData = React$1__default.Children.toArray(children).filter(d => isPlot(d.type.name)).map(d => d.props.data.map(e => ({ ...e,
    x: d.props.xAccessor(e),
    y: d.props.yAccessor(e)
  }))).reduce((acc, cur) => {
    acc = [...acc, ...cur];
    return acc;
  }, []); // frame scope scales

  const frameScopeExtent = React$1__default.Children.toArray(children).filter(d => isPlot(d.type.name)).map(d => {
    return getExtent({
      data: d.props.data,
      xAccessor: d.props.xAccessor,
      yAccessor: d.props.yAccessor,
      xExtent: d.props.xExtent,
      yExtent: d.props.yExtent
    });
  }).reduce((acc, cur) => {
    if (!acc.xExtent || !acc.yExtent) {
      acc.xExtent = cur.finalXExtent.slice();
      acc.yExtent = cur.finalYExtent.slice();
      return acc;
    } else {
      acc.xExtent[0] = Math.min(acc.xExtent[0], cur.finalXExtent[0]);
      acc.xExtent[1] = Math.max(acc.xExtent[1], cur.finalXExtent[1]);
      acc.yExtent[0] = Math.min(acc.yExtent[0], cur.finalYExtent[0]);
      acc.yExtent[1] = Math.max(acc.yExtent[1], cur.finalYExtent[1]);
      return acc;
    }
  }, {
    xExtent: null,
    yExtent: null
  });
  const xDomain = [0, adjustedSize[0]];
  const yDomain = [adjustedSize[1], 0];
  const frameXScale = linear$1().domain(frameScopeExtent.xExtent).range(xDomain);
  const frameYScale = linear$1().domain(frameScopeExtent.yExtent).range(yDomain); // axisPipeline

  const axesDefs = React$1__default.Children.toArray(children).filter(d => d.type.name === 'XAxis' || d.type.name === 'YAxis').map(d => d.props);
  const {
    axes,
    axesTickLines
  } = toAxes({
    axesDefs,
    margin,
    adjustedSize,
    xScale: frameXScale,
    yScale: frameYScale
  }); // canvasPipeline

  const {
    canvasPipeline,
    svgPipeline
  } = React$1__default.Children.toArray(children).filter(d => isPlot(d.type.name)).map(d => {
    return toPipeline({ ...d.props,
      frameXScale,
      frameYScale,
      frontCanvas,
      margin,
      adjustedSize,
      size
    });
  }).reduce((acc, cur) => {
    acc.canvasPipeline = acc.canvasPipeline.concat(cur.canvasPipe);
    acc.svgPipeline = acc.svgPipeline.concat(cur.svgPipe);
    return acc;
  }, {
    canvasPipeline: [],
    svgPipeline: []
  });
  const annotations = React$1__default.Children.toArray(children).filter(d => d.type.name === 'Annotation').map(d => d.props);

  if (voronoiHover) {
    if (Array.isArray(voronoiHover)) {
      annotations.push(...voronoiHover);
    } else {
      annotations.push(voronoiHover);
    }
  }

  const htmlAnnotations = tooltipContent ? allData.filter(e => {
    if (voronoiHover && voronoiHover.length === 1) {
      return voronoiHover[0].x === e.x && voronoiHover[0].y === e.y;
    }

    return false;
  }).map((d, i) => {
    const _data = { ...d,
      x: frameXScale(d.x),
      y: frameYScale(d.y)
    };
    return React$1__default.createElement(HTMLTooltipAnnotation, {
      tooltipContent: tooltipContent,
      tooltipContentArgs: _data,
      i: i,
      d: _data,
      useSpans: useSpans
    });
  }) : [];
  const svgAnnotations = renderAnnotations(annotations, {
    xScale: frameXScale,
    yScale: frameYScale,
    frontCanvas,
    adjustedSize,
    adjustedPosition,
    size,
    margin
  });
  const annotationLayer = annotations && annotations.length > 0 && React$1__default.createElement(AnnotationLayer, {
    voronoiHover: setVoronoiHover,
    htmlAnnotations: htmlAnnotations,
    svgAnnotations: svgAnnotations,
    margin: margin,
    useSpans: useSpans,
    size: adjustedSize,
    position: [adjustedPosition[0] + margin.left, adjustedPosition[1] + margin.top]
  });
  return React$1__default.createElement(SpanOrDiv, {
    span: useSpans,
    className: `${className} frame ${name}`,
    style: {
      background: 'none'
    }
  }, beforeElements && React$1__default.createElement(SpanOrDiv, {
    span: useSpans,
    className: `${name} frame-before-elements`
  }, beforeElements), React$1__default.createElement(SpanOrDiv, {
    span: useSpans,
    className: "frame-elements",
    style: {
      height: `${height}px`,
      width: `${width}px`
    }
  }, React$1__default.createElement(SpanOrDiv, {
    span: useSpans,
    className: "visualization-layer",
    style: {
      position: 'absolute'
    }
  }, (axesTickLines || backgroundGraphics) && React$1__default.createElement("svg", {
    className: "background-graphics",
    style: {
      position: 'absolute'
    },
    width: width,
    height: height
  }, backgroundGraphics && React$1__default.createElement("g", {
    "aria-hidden": true,
    className: "background-graphics"
  }, finalBackgroundGraphics), axesTickLines && React$1__default.createElement("g", {
    transform: `translate(${margin.left},${margin.top})`,
    key: "visualization-tick-lines",
    className: 'axis axis-tick-lines',
    "aria-hidden": true
  }, axesTickLines)), React$1__default.createElement("canvas", {
    className: "frame-canvas frame-canvas-front",
    ref: frontCanvasRef,
    style: {
      position: 'absolute',
      left: `0px`,
      top: `0px`,
      width: `${width}px`,
      height: `${height}px`
    },
    width: width * devicePixelRatio,
    height: height * devicePixelRatio
  }), React$1__default.createElement("canvas", {
    className: "frame-canvas frame-canvas-hidden",
    ref: backCanvasRef,
    style: {
      position: 'absolute',
      left: `0px`,
      top: `0px`,
      width: `${width}px`,
      height: `${height}px`
    },
    width: width * devicePixelRatio,
    height: height * devicePixelRatio
  }), React$1__default.createElement("svg", {
    className: "visualization-layer",
    style: {
      position: 'absolute'
    },
    width: width,
    height: height
  }, React$1__default.createElement(FilterDefs, {
    matte: marginGraphic,
    key: frameKey || name,
    additionalDefs: additionalDefs
  }), React$1__default.createElement(VisualizationLayer, {
    title: generatedTitle,
    frameKey: frameKey,
    width: width,
    height: height,
    size: adjustedSize,
    position: adjustedPosition,
    frontCanvas: frontCanvas,
    backCanvas: backCanvas,
    matte: marginGraphic,
    margin: margin,
    canvasPostProcess: canvasPostProcess,
    canvasPipeline: canvasPipeline,
    renderOrder: renderOrder,
    voronoiHover: setVoronoiHover
  }, React$1__default.Children.toArray(children).filter(d => isPlot(d.type.name)).map(d => React$1__default.cloneElement(d, {
    frameXScale,
    frameYScale,
    frontCanvas,
    adjustedSize,
    size,
    margin
  })), axes && React$1__default.createElement("g", {
    key: "visualization-axis-labels",
    className: "axis axis-labels"
  }, axes)), generatedTitle && React$1__default.createElement("g", {
    className: "frame-title"
  }, generatedTitle), foregroundGraphics && React$1__default.createElement("g", {
    "aria-hidden": true,
    className: "foreground-graphics"
  }, finalForegroundGraphics))), React$1__default.createElement(InteractionLayer, {
    useSpans: useSpans,
    hoverAnnotation: hoverAnnotation,
    interaction: interaction,
    voronoiHover: setVoronoiHover,
    customClickBehavior: customClickBehavior,
    customHoverBehavior: customHoverBehavior,
    customDoubleClickBehavior: customDoubleClickBehavior,
    position: adjustedPosition,
    margin: margin,
    size: adjustedSize,
    svgSize: size,
    xScale: frameXScale,
    yScale: frameYScale,
    data: allData,
    enabled: true,
    overlay: overlay,
    oColumns: columns,
    interactionOverflow: interactionOverflow,
    disableCanvasInteraction: disableCanvasInteraction
  }), annotationLayer, afterElements && React$1__default.createElement(SpanOrDiv, {
    span: useSpans,
    className: `${name} frame-after-elements`
  }, afterElements)));
};

XYFrame.propTypes = {
  width: propTypes.number,
  height: propTypes.number,
  name: propTypes.string,
  className: propTypes.string,
  frameKey: propTypes.string,
  renderKey: propTypes.string,
  title: propTypes.oneOfType([propTypes.string, propTypes.object]),
  useSpans: propTypes.bool,
  additionalDefs: propTypes.array,
  margin: propTypes.oneOfType([propTypes.number, propTypes.object]),
  matte: propTypes.oneOfType([propTypes.bool, propTypes.node]),
  beforeElements: propTypes.object,
  afterElements: propTypes.object,
  backgroundGraphics: propTypes.oneOfType([propTypes.node, propTypes.object]),
  foregroundGraphics: propTypes.oneOfType([propTypes.node, propTypes.object]),
  canvasPostProcess: propTypes.string,
  renderOrder: propTypes.array,
  hoverAnnotation: propTypes.oneOfType([propTypes.func, propTypes.array]),
  interaction: propTypes.func,
  customClickBehavior: propTypes.func,
  customHoverBehavior: propTypes.func,
  customDoubleClickBehavior: propTypes.func,
  overlay: propTypes.object,
  columns: propTypes.object,
  interactionOverflow: propTypes.func,
  disableCanvasInteraction: propTypes.func,
  tooltipContent: propTypes.func
};
XYFrame.defaultProps = {
  width: 800,
  height: 600,
  name: '',
  className: '',
  frameKey: '',
  margin: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  title: {
    title: '',
    orient: 'top'
  },
  useSpans: false,
  beforeElements: null,
  afterElements: null,
  backgroundGraphics: null,
  foregroundGraphics: null,
  additionalDefs: null,
  canvasPostProcess: 'chunkClose',
  renderOrder: ['areas', 'lines', 'points']
};

const DEFAULT_SERIES = 'default';

const groupData = ({
  data,
  xAccessor,
  yAccessor,
  sAccessor,
  showPoints
}) => {
  let projectedPoints = [];
  let groupedMap = new Map();

  if (sAccessor) {
    groupedMap = group(data, sAccessor);
  } else {
    groupedMap.set(DEFAULT_SERIES, data);
  }

  const groupedData = Array.from(groupedMap.keys()).map(d => ({
    s: d,
    _xyCoordinates: groupedMap.get(d).map(e => ({
      x: xAccessor(e),
      y: yAccessor(e),
      yTop: yAccessor(e),
      yBottom: yAccessor(e)
    })),
    _baseData: groupedMap.get(d)
  }));

  if (showPoints === true) {
    projectedPoints = data.map(d => ({
      parentSummary: groupedData.find(e => sAccessor ? e.s === sAccessor(d) : e.s === DEFAULT_SERIES),
      _data: d,
      x: xAccessor(d),
      y: yAccessor(d),
      yTop: yAccessor(d),
      yBottom: yAccessor(d)
    }));
  }

  return {
    groupedData,
    projectedPoints
  };
};

const lineProjection = ({
  data,
  xAccessor,
  yAccessor,
  sAccessor,
  showPoints
}) => {
  const {
    groupedData,
    projectedPoints
  } = groupData({
    data,
    xAccessor,
    yAccessor,
    sAccessor,
    showPoints
  });
  return {
    projectedLines: groupedData.slice(),
    projectedAreas: [],
    projectedPoints
  };
};

const emptyObjectReturnFunction$1 = () => ({});

const emptyStringReturnFunction$1 = () => '';

const Plot = props => {
  const {
    xAccessor,
    yAccessor,
    sAccessor,
    xExtent,
    yExtent,
    showPoints,
    size,
    data,
    projection
  } = props; // extents

  const {
    finalXExtent,
    finalYExtent
  } = getExtent({
    data,
    xAccessor,
    yAccessor,
    xExtent,
    yExtent
  }); // data projection

  const {
    projectedAreas,
    projectedPoints,
    projectedLines
  } = projection({
    finalXExtent,
    finalYExtent,
    xAccessor,
    yAccessor,
    sAccessor,
    showPoints,
    size,
    data,
    ...props
  });
  const {
    frameXScale: xScale,
    frameYScale: yScale,
    // line
    lineStyle,
    lineClass,
    lineRenderMode,
    lineCustomMarks,
    lineUseCanvas,
    //area
    areaStyle,
    areaClass,
    areaRenderMode,
    areaCustomMarks,
    areaUseCanvas,
    // points
    pointStyle,
    pointClass,
    pointRenderMode,
    pointCustomMarks,
    pointUseCanvas
  } = props;
  const {
    svgPipeline: lineSvg,
    canvasPipeline: lineCanvas
  } = toRenderedLines({
    useCanvas: lineUseCanvas,
    xScale,
    yScale,
    styleFn: stringToFn(lineStyle, emptyObjectReturnFunction$1, true),
    classFn: stringToFn(lineClass, emptyStringReturnFunction$1, true),
    renderFn: stringToFn(lineRenderMode, undefined, true),
    customMarks: lineCustomMarks,
    data: projectedLines
  });
  const {
    svgPipeline: areaSvg,
    canvasPipeline: areaCanvas
  } = toRenderedAreas({
    useCanvas: areaUseCanvas,
    xScale,
    yScale,
    styleFn: stringToFn(areaStyle, emptyObjectReturnFunction$1, true),
    classFn: stringToFn(areaClass, emptyStringReturnFunction$1, true),
    renderFn: stringToFn(areaRenderMode, undefined, true),
    customMarks: areaCustomMarks,
    data: projectedAreas
  });
  const {
    svgPipeline: pointsSvg,
    canvasPipeline: pointsCanvas
  } = toRenderedPoints({
    useCanvas: pointUseCanvas,
    xScale,
    yScale,
    styleFn: stringToFn(pointStyle, emptyObjectReturnFunction$1, true),
    classFn: stringToFn(pointClass, emptyStringReturnFunction$1, true),
    renderFn: stringToFn(pointRenderMode, undefined, true),
    customMarks: pointCustomMarks,
    data: projectedPoints
  });
  const svgPipeline = [...lineSvg, ...areaSvg, ...pointsSvg];
  return svgPipeline;
};

Plot.propTypes = {
  projection: propTypes.func,
  data: propTypes.array,
  lineStyle: propTypes.oneOfType([propTypes.object, propTypes.func]),
  lineClass: propTypes.oneOfType([propTypes.object, propTypes.func]),
  lineRenderMode: propTypes.oneOfType([propTypes.object, propTypes.func]),
  lineCustomMarks: propTypes.oneOfType([propTypes.node, propTypes.func]),
  lineUseCanvas: propTypes.bool,
  areaStyle: propTypes.oneOfType([propTypes.object, propTypes.func]),
  areaClass: propTypes.oneOfType([propTypes.object, propTypes.func]),
  areaRenderMode: propTypes.oneOfType([propTypes.object, propTypes.func]),
  areaCustomMarks: propTypes.oneOfType([propTypes.node, propTypes.func]),
  areaUseCanvas: propTypes.bool,
  pointStyle: propTypes.oneOfType([propTypes.object, propTypes.func]),
  pointClass: propTypes.oneOfType([propTypes.object, propTypes.func]),
  pointRenderMode: propTypes.oneOfType([propTypes.object, propTypes.func]),
  pointCustomMarks: propTypes.oneOfType([propTypes.node, propTypes.func]),
  pointUseCanvas: propTypes.bool,
  showPoints: propTypes.bool,
  xExtent: propTypes.array,
  yExtent: propTypes.array,
  xAccessor: propTypes.oneOfType([propTypes.string, propTypes.func]),
  yAccessor: propTypes.oneOfType([propTypes.string, propTypes.func]),
  sAccessor: propTypes.oneOfType([propTypes.string, propTypes.func])
};
Plot.defaultProps = {
  showPoints: true,
  pointUseCanvas: true,
  lineUseCanvas: true,
  areaUseCanvas: true
};

const Line = props => {
  return React$1__default.createElement(Plot, props);
};

Line.propTypes = { ...Plot.propTypes,
  simpleLine: propTypes.bool
};
Line.defaultProps = { ...Plot.defaultProps,
  simpleLine: false,
  projection: lineProjection
};

function ascending$3(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function bisector$1(compare) {
  if (compare.length === 1) compare = ascendingComparator$1(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
}

function ascendingComparator$1(f) {
  return function(d, x) {
    return ascending$3(f(d), x);
  };
}

var ascendingBisect$1 = bisector$1(ascending$3);

function extent$1(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
}

function range(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
}

var e10$1 = Math.sqrt(50),
    e5$1 = Math.sqrt(10),
    e2$1 = Math.sqrt(2);

function tickStep$1(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10$1) step1 *= 10;
  else if (error >= e5$1) step1 *= 5;
  else if (error >= e2$1) step1 *= 2;
  return stop < start ? -step1 : step1;
}

function thresholdSturges(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
}

function max$2(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
}

var array = Array.prototype;

var slice$2 = array.slice;

function ascending$4(a, b) {
  return a - b;
}

function area$2(ring) {
  var i = 0, n = ring.length, area = ring[n - 1][1] * ring[0][0] - ring[n - 1][0] * ring[0][1];
  while (++i < n) area += ring[i - 1][1] * ring[i][0] - ring[i - 1][0] * ring[i][1];
  return area;
}

function constant$7(x) {
  return function() {
    return x;
  };
}

function contains(ring, hole) {
  var i = -1, n = hole.length, c;
  while (++i < n) if (c = ringContains(ring, hole[i])) return c;
  return 0;
}

function ringContains(ring, point) {
  var x = point[0], y = point[1], contains = -1;
  for (var i = 0, n = ring.length, j = n - 1; i < n; j = i++) {
    var pi = ring[i], xi = pi[0], yi = pi[1], pj = ring[j], xj = pj[0], yj = pj[1];
    if (segmentContains(pi, pj, point)) return 0;
    if (((yi > y) !== (yj > y)) && ((x < (xj - xi) * (y - yi) / (yj - yi) + xi))) contains = -contains;
  }
  return contains;
}

function segmentContains(a, b, c) {
  var i; return collinear(a, b, c) && within(a[i = +(a[0] === b[0])], c[i], b[i]);
}

function collinear(a, b, c) {
  return (b[0] - a[0]) * (c[1] - a[1]) === (c[0] - a[0]) * (b[1] - a[1]);
}

function within(p, q, r) {
  return p <= q && q <= r || r <= q && q <= p;
}

function noop$2() {}

var cases = [
  [],
  [[[1.0, 1.5], [0.5, 1.0]]],
  [[[1.5, 1.0], [1.0, 1.5]]],
  [[[1.5, 1.0], [0.5, 1.0]]],
  [[[1.0, 0.5], [1.5, 1.0]]],
  [[[1.0, 1.5], [0.5, 1.0]], [[1.0, 0.5], [1.5, 1.0]]],
  [[[1.0, 0.5], [1.0, 1.5]]],
  [[[1.0, 0.5], [0.5, 1.0]]],
  [[[0.5, 1.0], [1.0, 0.5]]],
  [[[1.0, 1.5], [1.0, 0.5]]],
  [[[0.5, 1.0], [1.0, 0.5]], [[1.5, 1.0], [1.0, 1.5]]],
  [[[1.5, 1.0], [1.0, 0.5]]],
  [[[0.5, 1.0], [1.5, 1.0]]],
  [[[1.0, 1.5], [1.5, 1.0]]],
  [[[0.5, 1.0], [1.0, 1.5]]],
  []
];

function contours() {
  var dx = 1,
      dy = 1,
      threshold = thresholdSturges,
      smooth = smoothLinear;

  function contours(values) {
    var tz = threshold(values);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      var domain = extent$1(values), start = domain[0], stop = domain[1];
      tz = tickStep$1(start, stop, tz);
      tz = range(Math.floor(start / tz) * tz, Math.floor(stop / tz) * tz, tz);
    } else {
      tz = tz.slice().sort(ascending$4);
    }

    return tz.map(function(value) {
      return contour(values, value);
    });
  }

  // Accumulate, smooth contour rings, assign holes to exterior rings.
  // Based on https://github.com/mbostock/shapefile/blob/v0.6.2/shp/polygon.js
  function contour(values, value) {
    var polygons = [],
        holes = [];

    isorings(values, value, function(ring) {
      smooth(ring, values, value);
      if (area$2(ring) > 0) polygons.push([ring]);
      else holes.push(ring);
    });

    holes.forEach(function(hole) {
      for (var i = 0, n = polygons.length, polygon; i < n; ++i) {
        if (contains((polygon = polygons[i])[0], hole) !== -1) {
          polygon.push(hole);
          return;
        }
      }
    });

    return {
      type: "MultiPolygon",
      value: value,
      coordinates: polygons
    };
  }

  // Marching squares with isolines stitched into rings.
  // Based on https://github.com/topojson/topojson-client/blob/v3.0.0/src/stitch.js
  function isorings(values, value, callback) {
    var fragmentByStart = new Array,
        fragmentByEnd = new Array,
        x, y, t0, t1, t2, t3;

    // Special case for the first row (y = -1, t2 = t3 = 0).
    x = y = -1;
    t1 = values[0] >= value;
    cases[t1 << 1].forEach(stitch);
    while (++x < dx - 1) {
      t0 = t1, t1 = values[x + 1] >= value;
      cases[t0 | t1 << 1].forEach(stitch);
    }
    cases[t1 << 0].forEach(stitch);

    // General case for the intermediate rows.
    while (++y < dy - 1) {
      x = -1;
      t1 = values[y * dx + dx] >= value;
      t2 = values[y * dx] >= value;
      cases[t1 << 1 | t2 << 2].forEach(stitch);
      while (++x < dx - 1) {
        t0 = t1, t1 = values[y * dx + dx + x + 1] >= value;
        t3 = t2, t2 = values[y * dx + x + 1] >= value;
        cases[t0 | t1 << 1 | t2 << 2 | t3 << 3].forEach(stitch);
      }
      cases[t1 | t2 << 3].forEach(stitch);
    }

    // Special case for the last row (y = dy - 1, t0 = t1 = 0).
    x = -1;
    t2 = values[y * dx] >= value;
    cases[t2 << 2].forEach(stitch);
    while (++x < dx - 1) {
      t3 = t2, t2 = values[y * dx + x + 1] >= value;
      cases[t2 << 2 | t3 << 3].forEach(stitch);
    }
    cases[t2 << 3].forEach(stitch);

    function stitch(line) {
      var start = [line[0][0] + x, line[0][1] + y],
          end = [line[1][0] + x, line[1][1] + y],
          startIndex = index(start),
          endIndex = index(end),
          f, g;
      if (f = fragmentByEnd[startIndex]) {
        if (g = fragmentByStart[endIndex]) {
          delete fragmentByEnd[f.end];
          delete fragmentByStart[g.start];
          if (f === g) {
            f.ring.push(end);
            callback(f.ring);
          } else {
            fragmentByStart[f.start] = fragmentByEnd[g.end] = {start: f.start, end: g.end, ring: f.ring.concat(g.ring)};
          }
        } else {
          delete fragmentByEnd[f.end];
          f.ring.push(end);
          fragmentByEnd[f.end = endIndex] = f;
        }
      } else if (f = fragmentByStart[endIndex]) {
        if (g = fragmentByEnd[startIndex]) {
          delete fragmentByStart[f.start];
          delete fragmentByEnd[g.end];
          if (f === g) {
            f.ring.push(end);
            callback(f.ring);
          } else {
            fragmentByStart[g.start] = fragmentByEnd[f.end] = {start: g.start, end: f.end, ring: g.ring.concat(f.ring)};
          }
        } else {
          delete fragmentByStart[f.start];
          f.ring.unshift(start);
          fragmentByStart[f.start = startIndex] = f;
        }
      } else {
        fragmentByStart[startIndex] = fragmentByEnd[endIndex] = {start: startIndex, end: endIndex, ring: [start, end]};
      }
    }
  }

  function index(point) {
    return point[0] * 2 + point[1] * (dx + 1) * 4;
  }

  function smoothLinear(ring, values, value) {
    ring.forEach(function(point) {
      var x = point[0],
          y = point[1],
          xt = x | 0,
          yt = y | 0,
          v0,
          v1 = values[yt * dx + xt];
      if (x > 0 && x < dx && xt === x) {
        v0 = values[yt * dx + xt - 1];
        point[0] = x + (value - v0) / (v1 - v0) - 0.5;
      }
      if (y > 0 && y < dy && yt === y) {
        v0 = values[(yt - 1) * dx + xt];
        point[1] = y + (value - v0) / (v1 - v0) - 0.5;
      }
    });
  }

  contours.contour = contour;

  contours.size = function(_) {
    if (!arguments.length) return [dx, dy];
    var _0 = Math.ceil(_[0]), _1 = Math.ceil(_[1]);
    if (!(_0 > 0) || !(_1 > 0)) throw new Error("invalid size");
    return dx = _0, dy = _1, contours;
  };

  contours.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant$7(slice$2.call(_)) : constant$7(_), contours) : threshold;
  };

  contours.smooth = function(_) {
    return arguments.length ? (smooth = _ ? smoothLinear : noop$2, contours) : smooth === smoothLinear;
  };

  return contours;
}

// TODO Optimize edge cases.
// TODO Optimize index calculation.
// TODO Optimize arguments.
function blurX(source, target, r) {
  var n = source.width,
      m = source.height,
      w = (r << 1) + 1;
  for (var j = 0; j < m; ++j) {
    for (var i = 0, sr = 0; i < n + r; ++i) {
      if (i < n) {
        sr += source.data[i + j * n];
      }
      if (i >= r) {
        if (i >= w) {
          sr -= source.data[i - w + j * n];
        }
        target.data[i - r + j * n] = sr / Math.min(i + 1, n - 1 + w - i, w);
      }
    }
  }
}

// TODO Optimize edge cases.
// TODO Optimize index calculation.
// TODO Optimize arguments.
function blurY(source, target, r) {
  var n = source.width,
      m = source.height,
      w = (r << 1) + 1;
  for (var i = 0; i < n; ++i) {
    for (var j = 0, sr = 0; j < m + r; ++j) {
      if (j < m) {
        sr += source.data[i + j * n];
      }
      if (j >= r) {
        if (j >= w) {
          sr -= source.data[i + (j - w) * n];
        }
        target.data[i + (j - r) * n] = sr / Math.min(j + 1, m - 1 + w - j, w);
      }
    }
  }
}

function defaultX(d) {
  return d[0];
}

function defaultY(d) {
  return d[1];
}

function defaultWeight() {
  return 1;
}

function contourDensity() {
  var x = defaultX,
      y = defaultY,
      weight = defaultWeight,
      dx = 960,
      dy = 500,
      r = 20, // blur radius
      k = 2, // log2(grid cell size)
      o = r * 3, // grid offset, to pad for blur
      n = (dx + o * 2) >> k, // grid width
      m = (dy + o * 2) >> k, // grid height
      threshold = constant$7(20);

  function density(data) {
    var values0 = new Float32Array(n * m),
        values1 = new Float32Array(n * m);

    data.forEach(function(d, i, data) {
      var xi = (+x(d, i, data) + o) >> k,
          yi = (+y(d, i, data) + o) >> k,
          wi = +weight(d, i, data);
      if (xi >= 0 && xi < n && yi >= 0 && yi < m) {
        values0[xi + yi * n] += wi;
      }
    });

    // TODO Optimize.
    blurX({width: n, height: m, data: values0}, {width: n, height: m, data: values1}, r >> k);
    blurY({width: n, height: m, data: values1}, {width: n, height: m, data: values0}, r >> k);
    blurX({width: n, height: m, data: values0}, {width: n, height: m, data: values1}, r >> k);
    blurY({width: n, height: m, data: values1}, {width: n, height: m, data: values0}, r >> k);
    blurX({width: n, height: m, data: values0}, {width: n, height: m, data: values1}, r >> k);
    blurY({width: n, height: m, data: values1}, {width: n, height: m, data: values0}, r >> k);

    var tz = threshold(values0);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      var stop = max$2(values0);
      tz = tickStep$1(0, stop, tz);
      tz = range(0, Math.floor(stop / tz) * tz, tz);
      tz.shift();
    }

    return contours()
        .thresholds(tz)
        .size([n, m])
      (values0)
        .map(transform);
  }

  function transform(geometry) {
    geometry.value *= Math.pow(2, -2 * k); // Density in points per square pixel.
    geometry.coordinates.forEach(transformPolygon);
    return geometry;
  }

  function transformPolygon(coordinates) {
    coordinates.forEach(transformRing);
  }

  function transformRing(coordinates) {
    coordinates.forEach(transformPoint);
  }

  // TODO Optimize.
  function transformPoint(coordinates) {
    coordinates[0] = coordinates[0] * Math.pow(2, k) - o;
    coordinates[1] = coordinates[1] * Math.pow(2, k) - o;
  }

  function resize() {
    o = r * 3;
    n = (dx + o * 2) >> k;
    m = (dy + o * 2) >> k;
    return density;
  }

  density.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : constant$7(+_), density) : x;
  };

  density.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : constant$7(+_), density) : y;
  };

  density.weight = function(_) {
    return arguments.length ? (weight = typeof _ === "function" ? _ : constant$7(+_), density) : weight;
  };

  density.size = function(_) {
    if (!arguments.length) return [dx, dy];
    var _0 = Math.ceil(_[0]), _1 = Math.ceil(_[1]);
    if (!(_0 >= 0) && !(_0 >= 0)) throw new Error("invalid size");
    return dx = _0, dy = _1, resize();
  };

  density.cellSize = function(_) {
    if (!arguments.length) return 1 << k;
    if (!((_ = +_) >= 1)) throw new Error("invalid cell size");
    return k = Math.floor(Math.log(_) / Math.LN2), resize();
  };

  density.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant$7(slice$2.call(_)) : constant$7(_), density) : threshold;
  };

  density.bandwidth = function(_) {
    if (!arguments.length) return Math.sqrt(r * (r + 1));
    if (!((_ = +_) >= 0)) throw new Error("invalid bandwidth");
    return r = Math.round((Math.sqrt(4 * _ * _ + 1) - 1) / 2), resize();
  };

  return density;
}

var polylabel_1 = polylabel;
var default_1$1 = polylabel;

function polylabel(polygon, precision, debug) {
    precision = precision || 1.0;

    // find the bounding box of the outer ring
    var minX, minY, maxX, maxY;
    for (var i = 0; i < polygon[0].length; i++) {
        var p = polygon[0][i];
        if (!i || p[0] < minX) minX = p[0];
        if (!i || p[1] < minY) minY = p[1];
        if (!i || p[0] > maxX) maxX = p[0];
        if (!i || p[1] > maxY) maxY = p[1];
    }

    var width = maxX - minX;
    var height = maxY - minY;
    var cellSize = Math.min(width, height);
    var h = cellSize / 2;

    // a priority queue of cells in order of their "potential" (max distance to polygon)
    var cellQueue = new tinyqueue(null, compareMax);

    if (cellSize === 0) return [minX, minY];

    // cover polygon with initial cells
    for (var x = minX; x < maxX; x += cellSize) {
        for (var y = minY; y < maxY; y += cellSize) {
            cellQueue.push(new Cell(x + h, y + h, h, polygon));
        }
    }

    // take centroid as the first best guess
    var bestCell = getCentroidCell(polygon);

    // special case for rectangular polygons
    var bboxCell = new Cell(minX + width / 2, minY + height / 2, 0, polygon);
    if (bboxCell.d > bestCell.d) bestCell = bboxCell;

    var numProbes = cellQueue.length;

    while (cellQueue.length) {
        // pick the most promising cell from the queue
        var cell = cellQueue.pop();

        // update the best cell if we found a better one
        if (cell.d > bestCell.d) {
            bestCell = cell;
            if (debug) console.log('found best %d after %d probes', Math.round(1e4 * cell.d) / 1e4, numProbes);
        }

        // do not drill down further if there's no chance of a better solution
        if (cell.max - bestCell.d <= precision) continue;

        // split the cell into four cells
        h = cell.h / 2;
        cellQueue.push(new Cell(cell.x - h, cell.y - h, h, polygon));
        cellQueue.push(new Cell(cell.x + h, cell.y - h, h, polygon));
        cellQueue.push(new Cell(cell.x - h, cell.y + h, h, polygon));
        cellQueue.push(new Cell(cell.x + h, cell.y + h, h, polygon));
        numProbes += 4;
    }

    if (debug) {
        console.log('num probes: ' + numProbes);
        console.log('best distance: ' + bestCell.d);
    }

    return [bestCell.x, bestCell.y];
}

function compareMax(a, b) {
    return b.max - a.max;
}

function Cell(x, y, h, polygon) {
    this.x = x; // cell center x
    this.y = y; // cell center y
    this.h = h; // half the cell size
    this.d = pointToPolygonDist(x, y, polygon); // distance from cell center to polygon
    this.max = this.d + this.h * Math.SQRT2; // max distance to polygon within a cell
}

// signed distance from point to polygon outline (negative if point is outside)
function pointToPolygonDist(x, y, polygon) {
    var inside = false;
    var minDistSq = Infinity;

    for (var k = 0; k < polygon.length; k++) {
        var ring = polygon[k];

        for (var i = 0, len = ring.length, j = len - 1; i < len; j = i++) {
            var a = ring[i];
            var b = ring[j];

            if ((a[1] > y !== b[1] > y) &&
                (x < (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]) + a[0])) inside = !inside;

            minDistSq = Math.min(minDistSq, getSegDistSq(x, y, a, b));
        }
    }

    return (inside ? 1 : -1) * Math.sqrt(minDistSq);
}

// get polygon centroid
function getCentroidCell(polygon) {
    var area = 0;
    var x = 0;
    var y = 0;
    var points = polygon[0];

    for (var i = 0, len = points.length, j = len - 1; i < len; j = i++) {
        var a = points[i];
        var b = points[j];
        var f = a[0] * b[1] - b[0] * a[1];
        x += (a[0] + b[0]) * f;
        y += (a[1] + b[1]) * f;
        area += f * 3;
    }
    if (area === 0) return new Cell(points[0][0], points[0][1], 0, polygon);
    return new Cell(x / area, y / area, 0, polygon);
}

// get squared distance from a point to a segment
function getSegDistSq(px, py, a, b) {

    var x = a[0];
    var y = a[1];
    var dx = b[0] - x;
    var dy = b[1] - y;

    if (dx !== 0 || dy !== 0) {

        var t = ((px - x) * dx + (py - y) * dy) / (dx * dx + dy * dy);

        if (t > 1) {
            x = b[0];
            y = b[1];

        } else if (t > 0) {
            x += dx * t;
            y += dy * t;
        }
    }

    dx = px - x;
    dy = py - y;

    return dx * dx + dy * dy;
}
polylabel_1.default = default_1$1;

const shapeBounds$1 = coordinates => {
  let left = [Infinity, 0];
  let right = [-Infinity, 0];
  let top = [0, Infinity];
  let bottom = [0, -Infinity];
  coordinates.forEach(d => {
    left = d[0] < left[0] ? d : left;
    right = d[0] > right[0] ? d : right;
    bottom = d[1] > bottom[1] ? d : bottom;
    top = d[1] < top[1] ? d : top;
  });
  return {
    center: polylabel_1([coordinates]),
    top,
    left,
    right,
    bottom
  };
};

const contouringProjection = ({
  threshold,
  resolution,
  bandWidth,
  neighborhood,
  finalXExtent,
  finalYExtent,
  data,
  xAccessor,
  yAccessor,
  sAccessor,
  showPoints
}) => {
  let projectedAreas = [];
  const {
    groupedData,
    projectedPoints
  } = groupData({
    data,
    xAccessor,
    yAccessor,
    sAccessor,
    showPoints
  });
  const xScale = linear$1().domain(finalXExtent).rangeRound([0, resolution]).nice();
  const yScale = linear$1().domain(finalYExtent).rangeRound([resolution, 0]).nice();
  groupedData.forEach(contourData => {
    let contourProjectedAreas = contourDensity().size([resolution, resolution]).x(d => xScale(d.x)).y(d => yScale(d.y)).thresholds(threshold).bandwidth(bandWidth)(contourData._xyCoordinates);

    if (neighborhood) {
      contourProjectedAreas = [contourProjectedAreas[0]];
    }

    const max = Math.max(...contourProjectedAreas.map(d => d.value));
    contourProjectedAreas.forEach((area, i) => {
      area._data = contourData._baseData[i];
      area.parentSummary = contourData;
      area.bounds = [];
      area.percent = area.value / max;
      area.coordinates.forEach(poly => {
        poly.forEach((subpoly, i) => {
          poly[i] = subpoly.map(coordpair => {
            coordpair = [xScale.invert(coordpair[0]), yScale.invert(coordpair[1])];
            return coordpair;
          }); //Only push bounds for the main poly, not its interior rings, otherwise you end up labeling interior cutouts

          if (i === 0) {
            area.bounds.push(shapeBounds$1(poly[i]));
          }
        });
      });
    });
    projectedAreas = [...projectedAreas, ...contourProjectedAreas];
  });
  return {
    projectedAreas,
    projectedPoints,
    projectedLines: []
  };
};

const Contour = props => {
  return React$1__default.createElement(Plot, props);
};

Contour.propTypes = { ...Plot.propTypes,
  resolution: propTypes.number,
  threshold: propTypes.number,
  bandWidth: propTypes.number,
  neighborhood: propTypes.bool
};
Contour.defaultProps = { ...Plot.defaultProps,
  resolution: 500,
  threshold: 10,
  bandWidth: 20,
  projection: contouringProjection
};

var thirdPi = Math.PI / 3,
    angles = [0, thirdPi, 2 * thirdPi, 3 * thirdPi, 4 * thirdPi, 5 * thirdPi];

function pointX(d) {
  return d[0];
}

function pointY(d) {
  return d[1];
}

function hexbin() {
  var x0 = 0,
      y0 = 0,
      x1 = 1,
      y1 = 1,
      x = pointX,
      y = pointY,
      r,
      dx,
      dy;

  function hexbin(points) {
    var binsById = {}, bins = [], i, n = points.length;

    for (i = 0; i < n; ++i) {
      if (isNaN(px = +x.call(null, point = points[i], i, points))
          || isNaN(py = +y.call(null, point, i, points))) continue;

      var point,
          px,
          py,
          pj = Math.round(py = py / dy),
          pi = Math.round(px = px / dx - (pj & 1) / 2),
          py1 = py - pj;

      if (Math.abs(py1) * 3 > 1) {
        var px1 = px - pi,
            pi2 = pi + (px < pi ? -1 : 1) / 2,
            pj2 = pj + (py < pj ? -1 : 1),
            px2 = px - pi2,
            py2 = py - pj2;
        if (px1 * px1 + py1 * py1 > px2 * px2 + py2 * py2) pi = pi2 + (pj & 1 ? 1 : -1) / 2, pj = pj2;
      }

      var id = pi + "-" + pj, bin = binsById[id];
      if (bin) bin.push(point);
      else {
        bins.push(bin = binsById[id] = [point]);
        bin.x = (pi + (pj & 1) / 2) * dx;
        bin.y = pj * dy;
      }
    }

    return bins;
  }

  function hexagon(radius) {
    var x0 = 0, y0 = 0;
    return angles.map(function(angle) {
      var x1 = Math.sin(angle) * radius,
          y1 = -Math.cos(angle) * radius,
          dx = x1 - x0,
          dy = y1 - y0;
      x0 = x1, y0 = y1;
      return [dx, dy];
    });
  }

  hexbin.hexagon = function(radius) {
    return "m" + hexagon(radius == null ? r : +radius).join("l") + "z";
  };

  hexbin.centers = function() {
    var centers = [],
        j = Math.round(y0 / dy),
        i = Math.round(x0 / dx);
    for (var y = j * dy; y < y1 + r; y += dy, ++j) {
      for (var x = i * dx + (j & 1) * dx / 2; x < x1 + dx / 2; x += dx) {
        centers.push([x, y]);
      }
    }
    return centers;
  };

  hexbin.mesh = function() {
    var fragment = hexagon(r).slice(0, 4).join("l");
    return hexbin.centers().map(function(p) { return "M" + p + "m" + fragment; }).join("");
  };

  hexbin.x = function(_) {
    return arguments.length ? (x = _, hexbin) : x;
  };

  hexbin.y = function(_) {
    return arguments.length ? (y = _, hexbin) : y;
  };

  hexbin.radius = function(_) {
    return arguments.length ? (r = +_, dx = r * 2 * Math.sin(thirdPi), dy = r * 1.5, hexbin) : r;
  };

  hexbin.size = function(_) {
    return arguments.length ? (x0 = y0 = 0, x1 = +_[0], y1 = +_[1], hexbin) : [x1 - x0, y1 - y0];
  };

  hexbin.extent = function(_) {
    return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], hexbin) : [[x0, y0], [x1, y1]];
  };

  return hexbin.radius(1);
}

const hexbinProjection = ({
  bins,
  cellPx,
  binValue,
  binMax,
  customMark,
  finalXExtent,
  finalYExtent,
  size,
  data,
  xAccessor,
  yAccessor,
  sAccessor,
  showPoints
}) => {
  let projectedAreas = [];
  const {
    groupedData,
    projectedPoints
  } = groupData({
    data,
    xAccessor,
    yAccessor,
    sAccessor,
    showPoints
  });
  const hexBinXScale = linear$1().domain(finalXExtent).range([0, size[0]]);
  const hexBinYScale = linear$1().domain(finalYExtent).range([0, size[1]]);
  const actualResolution = cellPx && cellPx / 2 || (bins > 1 ? 1 / bins : bins) * size[0] / 2;
  const hexbinner = hexbin().x(d => hexBinXScale(d._xyPoint.x)).y(d => hexBinYScale(d._xyPoint.y)).radius(actualResolution).size(size);
  let hexMax;
  const allHexes = hexbinner.centers();
  groupedData.forEach(hexbinData => {
    hexMax = 0;
    const hexes = hexbinner(hexbinData._xyCoordinates.map((d, i) => ({
      _xyPoint: d,
      ...hexbinData._baseData[i]
    })));
    const centerHash = {};
    hexes.forEach(d => {
      centerHash[`${parseInt(d.x)}-${parseInt(d.y)}`] = true;
    });
    allHexes.forEach(hexCenter => {
      if (!centerHash[`${parseInt(hexCenter[0])}-${parseInt(hexCenter[1])}`]) {
        const newHex = [];
        newHex.x = hexCenter[0];
        newHex.y = hexCenter[1];
        hexes.push(newHex);
      }
    });
    hexMax = Math.max(...hexes.map(d => binValue(d)));

    if (binMax) {
      binMax(hexMax);
    } //Option for blank hexe


    const hexBase = [[0, -1], [0.866, -0.5], [0.866, 0.5], [0, 1], [-0.866, 0.5], [-0.866, -0.5]];
    const hexWidth = hexBinXScale.invert(actualResolution) - finalXExtent[0];
    const hexHeight = hexBinYScale.invert(actualResolution) - finalYExtent[0];
    const hexacoordinates = hexBase.map(d => [d[0] * hexWidth, d[1] * hexHeight]);
    const hexbinProjectedAreas = hexes.map(d => {
      const hexValue = binValue(d);
      const gx = d.x;
      const gy = d.y;
      d.x = hexBinXScale.invert(d.x);
      d.y = hexBinYScale.invert(d.y);
      const percent = hexValue / hexMax;
      return {
        customMark: customMark && React.createElement("g", {
          transform: `translate(${gx},${size[1] - gy})`
        }, customMark({
          d: { ...d,
            binItems: d,
            percent,
            value: hexValue,
            radius: actualResolution,
            hexCoordinates: hexBase.map(d => [d[0] * actualResolution, d[1] * actualResolution])
          },
          baseMarkProps,
          margin,
          styleFn,
          classFn,
          renderFn,
          chartSize,
          adjustedSize: size
        })),
        _xyCoordinates: hexacoordinates.map(p => [p[0] + d.x, p[1] + d.y]),
        value: hexValue,
        percent,
        data: d,
        parentSummary: hexbinData,
        centroid: true
      };
    });
    projectedAreas = [...projectedAreas, ...hexbinProjectedAreas];
  });
  return {
    projectedAreas,
    projectedPoints,
    projectedLines: []
  };
};

const Hexbin = props => {
  return React$1__default.createElement(Plot, props);
};

Hexbin.propTypes = { ...Plot.propTypes,
  bins: propTypes.number,
  cellPx: propTypes.number,
  binValue: propTypes.func,
  binMax: propTypes.number
};
Hexbin.defaultProps = { ...Plot.defaultProps,
  bins: 0.05,
  binValue: d => d.length,
  projection: hexbinProjection
};

const heatmapProjection = ({
  xBins,
  yBins,
  xCellPx,
  yCellPx,
  binMax,
  binValue,
  customMark,
  finalXExtent,
  finalYExtent,
  adjustedSize,
  data,
  xAccessor,
  yAccessor,
  sAccessor,
  showPoints
}) => {
  let projectedAreas = [];
  const {
    groupedData,
    projectedPoints
  } = groupData({
    data,
    xAccessor,
    yAccessor,
    sAccessor,
    showPoints
  });
  const size = adjustedSize;
  const xBinPercent = xBins < 1 ? xBins : 1 / xBins;
  const yBinPercent = yBins < 1 ? yBins : 1 / yBins;
  const heatmapBinXScale = linear$1().domain(finalXExtent).range([0, size[0]]);
  const heatmapBinYScale = linear$1().domain(finalYExtent).range([size[1], 0]);
  const actualResolution = [Math.ceil((xCellPx && xCellPx / size[0] || xBinPercent) * size[0] * 10) / 10, Math.ceil((yCellPx && yCellPx / size[1] || yBinPercent) * size[1] * 10) / 10];
  let maxValue = -Infinity;
  groupedData.forEach(heatmapData => {
    const grid = [];
    const flatGrid = [];
    let cell;
    let gridColumn;

    for (let i = 0; i < size[0]; i += actualResolution[0]) {
      const x = heatmapBinXScale.invert(i);
      const x1 = heatmapBinXScale.invert(i + actualResolution[0]);
      gridColumn = [];
      grid.push(gridColumn);

      for (let j = 0; j < size[1]; j += actualResolution[1]) {
        const y = heatmapBinYScale.invert(j);
        const y1 = heatmapBinYScale.invert(j + actualResolution[1]);
        cell = {
          gx: i,
          gy: j,
          gw: actualResolution[0],
          gh: actualResolution[1],
          x: (x + x1) / 2,
          y: (y + y1) / 2,
          binItems: [],
          value: 0,
          _xyCoordinates: [[x, y], [x1, y], [x1, y1], [x, y1]],
          parentSummary: heatmapData
        };
        gridColumn.push(cell);
        flatGrid.push(cell);
      }

      gridColumn.push(cell);
    }

    grid.push(gridColumn);

    heatmapData._xyCoordinates.forEach((d, di) => {
      const xCoordinate = Math.floor(heatmapBinXScale(d.x) / actualResolution[0]);
      const yCoordinate = Math.floor(heatmapBinYScale(d.y) / actualResolution[1]);
      grid[xCoordinate][yCoordinate].binItems.push(heatmapData._baseData[di]);
    });

    flatGrid.forEach(d => {
      d.value = binValue(d.binItems);
      maxValue = Math.max(maxValue, d.value);
    });
    flatGrid.forEach(d => {
      d.percent = d.value / maxValue;
      d.customMark = customMark && React.createElement("g", {
        transform: `translate(${d.gx},${d.gy})`
      }, customMark({
        d,
        baseMarkProps,
        margin,
        styleFn,
        classFn,
        renderFn,
        chartSize,
        adjustedSize: size
      }));
    });
    projectedAreas = [...projectedAreas, ...flatGrid];
  });

  if (binMax) {
    binMax(maxValue);
  }

  return {
    projectedAreas,
    projectedPoints,
    projectedLines: []
  };
};

const Heatmap = props => {
  return React$1__default.createElement(Plot, props);
};

Heatmap.propTypes = { ...Plot.propTypes,
  cellPx: propTypes.number,
  xBins: propTypes.number,
  yBins: propTypes.number,
  xCellPx: propTypes.number,
  yCellPx: propTypes.number,
  binMax: propTypes.number,
  binValue: propTypes.func
};
Heatmap.defaultProps = { ...Plot.defaultProps,
  binValue: d => d.length,
  xBins: 0.05,
  yBins: 0.05,
  projection: heatmapProjection
};

const XAxis = props => {
  return React$1__default.createElement(Axis, props);
};

XAxis.propTypes = { ...Axis.propTypes,
  orient: propTypes.oneOf(['top', 'bottom'])
};
XAxis.defaultProps = {
  orient: 'bottom'
};

const YAxis = props => {
  return React$1__default.createElement(Axis, props);
};

YAxis.propTypes = { ...Axis.propTypes,
  orient: propTypes.oneOf(['left', 'right'])
};
YAxis.defaultProps = {
  orient: 'left'
};

const Annotation = props => {
  return null;
};

Annotation.propTypes = {
  x: propTypes.number,
  y: propTypes.number,
  note: propTypes.oneOfType([propTypes.object, propTypes.string]),
  subject: propTypes.object
};

export { Annotation, Contour, Heatmap, Hexbin, Line, XAxis, XYFrame, YAxis };
