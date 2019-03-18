(function () {
function $parcel$interopDefault(a) {
  return a && a.__esModule ? {
    d: a.default
  } : {
    d: a
  };
}

var $parcel$global = this;
// ASSET: CurveComposer.js
var $qLB$exports = {};

/*!
 * Vue.js v2.6.9
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */

/*  */
var $QPfz$var$emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.

function $QPfz$var$isUndef(v) {
  return v === undefined || v === null;
}

function $QPfz$var$isDef(v) {
  return v !== undefined && v !== null;
}

function $QPfz$var$isTrue(v) {
  return v === true;
}

function $QPfz$var$isFalse(v) {
  return v === false;
}
/**
 * Check if value is primitive.
 */


function $QPfz$var$isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
  typeof value === 'symbol' || typeof value === 'boolean';
}
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */


function $QPfz$var$isObject(obj) {
  return obj !== null && typeof obj === 'object';
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */


var $QPfz$var$_toString = Object.prototype.toString;

function $QPfz$var$toRawType(value) {
  return $QPfz$var$_toString.call(value).slice(8, -1);
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */


function $QPfz$var$isPlainObject(obj) {
  return $QPfz$var$_toString.call(obj) === '[object Object]';
}

function $QPfz$var$isRegExp(v) {
  return $QPfz$var$_toString.call(v) === '[object RegExp]';
}
/**
 * Check if val is a valid array index.
 */


function $QPfz$var$isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

function $QPfz$var$isPromise(val) {
  return $QPfz$var$isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function';
}
/**
 * Convert a value to a string that is actually rendered.
 */


function $QPfz$var$toString(val) {
  return val == null ? '' : Array.isArray(val) || $QPfz$var$isPlainObject(val) && val.toString === $QPfz$var$_toString ? JSON.stringify(val, null, 2) : String(val);
}
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */


function $QPfz$var$toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */


function $QPfz$var$makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}
/**
 * Check if a tag is a built-in tag.
 */


var $QPfz$var$isBuiltInTag = $QPfz$var$makeMap('slot,component', true);
/**
 * Check if an attribute is a reserved attribute.
 */

var $QPfz$var$isReservedAttribute = $QPfz$var$makeMap('key,ref,slot,slot-scope,is');
/**
 * Remove an item from an array.
 */

function $QPfz$var$remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
/**
 * Check whether an object has the property.
 */


var $QPfz$var$hasOwnProperty = Object.prototype.hasOwnProperty;

function $QPfz$var$hasOwn(obj, key) {
  return $QPfz$var$hasOwnProperty.call(obj, key);
}
/**
 * Create a cached version of a pure function.
 */


function $QPfz$var$cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
/**
 * Camelize a hyphen-delimited string.
 */


var $QPfz$var$camelizeRE = /-(\w)/g;
var $QPfz$var$camelize = $QPfz$var$cached(function (str) {
  return str.replace($QPfz$var$camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
/**
 * Capitalize a string.
 */

var $QPfz$var$capitalize = $QPfz$var$cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Hyphenate a camelCase string.
 */

var $QPfz$var$hyphenateRE = /\B([A-Z])/g;
var $QPfz$var$hyphenate = $QPfz$var$cached(function (str) {
  return str.replace($QPfz$var$hyphenateRE, '-$1').toLowerCase();
});
/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */

function $QPfz$var$polyfillBind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }

  boundFn._length = fn.length;
  return boundFn;
}

function $QPfz$var$nativeBind(fn, ctx) {
  return fn.bind(ctx);
}

var $QPfz$var$bind = Function.prototype.bind ? $QPfz$var$nativeBind : $QPfz$var$polyfillBind;
/**
 * Convert an Array-like object to a real Array.
 */

function $QPfz$var$toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);

  while (i--) {
    ret[i] = list[i + start];
  }

  return ret;
}
/**
 * Mix properties into target object.
 */


function $QPfz$var$extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }

  return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */


function $QPfz$var$toObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      $QPfz$var$extend(res, arr[i]);
    }
  }

  return res;
}
/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */


function $QPfz$var$noop(a, b, c) {}
/**
 * Always return false.
 */


var $QPfz$var$no = function (a, b, c) {
  return false;
};
/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */


var $QPfz$var$identity = function (_) {
  return _;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */


function $QPfz$var$looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var isObjectA = $QPfz$var$isObject(a);
  var isObjectB = $QPfz$var$isObject(b);

  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);

      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return $QPfz$var$looseEqual(e, b[i]);
        });
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return $QPfz$var$looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */


function $QPfz$var$looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if ($QPfz$var$looseEqual(arr[i], val)) {
      return i;
    }
  }

  return -1;
}
/**
 * Ensure a function is called only once.
 */


function $QPfz$var$once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

var $QPfz$var$SSR_ATTR = 'data-server-rendered';
var $QPfz$var$ASSET_TYPES = ['component', 'directive', 'filter'];
var $QPfz$var$LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];
/*  */

var $QPfz$var$config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: $QPfz$var$no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: $QPfz$var$no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: $QPfz$var$no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: $QPfz$var$noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: $QPfz$var$identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: $QPfz$var$no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: $QPfz$var$LIFECYCLE_HOOKS
};
/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */

var $QPfz$var$unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
/**
 * Check if a string starts with $ or _
 */

function $QPfz$var$isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}
/**
 * Define a property.
 */


function $QPfz$var$def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
/**
 * Parse simple path.
 */


var $QPfz$var$bailRE = new RegExp("[^" + $QPfz$var$unicodeRegExp.source + ".$_\\d]");

function $QPfz$var$parsePath(path) {
  if ($QPfz$var$bailRE.test(path)) {
    return;
  }

  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }

      obj = obj[segments[i]];
    }

    return obj;
  };
}
/*  */
// can we use __proto__?


var $QPfz$var$hasProto = '__proto__' in {}; // Browser environment sniffing

var $QPfz$var$inBrowser = typeof window !== 'undefined';
var $QPfz$var$inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var $QPfz$var$weexPlatform = $QPfz$var$inWeex && WXEnvironment.platform.toLowerCase();
var $QPfz$var$UA = $QPfz$var$inBrowser && window.navigator.userAgent.toLowerCase();
var $QPfz$var$isIE = $QPfz$var$UA && /msie|trident/.test($QPfz$var$UA);
var $QPfz$var$isIE9 = $QPfz$var$UA && $QPfz$var$UA.indexOf('msie 9.0') > 0;
var $QPfz$var$isEdge = $QPfz$var$UA && $QPfz$var$UA.indexOf('edge/') > 0;
var $QPfz$var$isAndroid = $QPfz$var$UA && $QPfz$var$UA.indexOf('android') > 0 || $QPfz$var$weexPlatform === 'android';
var $QPfz$var$isIOS = $QPfz$var$UA && /iphone|ipad|ipod|ios/.test($QPfz$var$UA) || $QPfz$var$weexPlatform === 'ios';
var $QPfz$var$isChrome = $QPfz$var$UA && /chrome\/\d+/.test($QPfz$var$UA) && !$QPfz$var$isEdge;
var $QPfz$var$isPhantomJS = $QPfz$var$UA && /phantomjs/.test($QPfz$var$UA);
var $QPfz$var$isFF = $QPfz$var$UA && $QPfz$var$UA.match(/firefox\/(\d+)/); // Firefox has a "watch" function on Object.prototype...

var $QPfz$var$nativeWatch = {}.watch;
var $QPfz$var$supportsPassive = false;

if ($QPfz$var$inBrowser) {
  try {
    var $QPfz$var$opts = {};
    Object.defineProperty($QPfz$var$opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        $QPfz$var$supportsPassive = true;
      }
    }); // https://github.com/facebook/flow/issues/285

    window.addEventListener('test-passive', null, $QPfz$var$opts);
  } catch (e) {}
} // this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV


var $QPfz$var$_isServer;

var $QPfz$var$isServerRendering = function () {
  if ($QPfz$var$_isServer === undefined) {
    /* istanbul ignore if */
    if (!$QPfz$var$inBrowser && !$QPfz$var$inWeex && typeof $parcel$global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      $QPfz$var$_isServer = $parcel$global['process'] && $parcel$global['process'].env.VUE_ENV === 'server';
    } else {
      $QPfz$var$_isServer = false;
    }
  }

  return $QPfz$var$_isServer;
}; // detect devtools


var $QPfz$var$devtools = $QPfz$var$inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/* istanbul ignore next */

function $QPfz$var$isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

var $QPfz$var$hasSymbol = typeof Symbol !== 'undefined' && $QPfz$var$isNative(Symbol) && typeof Reflect !== 'undefined' && $QPfz$var$isNative(Reflect.ownKeys);
var $QPfz$var$_Set;
/* istanbul ignore if */
// $flow-disable-line

if (typeof Set !== 'undefined' && $QPfz$var$isNative(Set)) {
  // use native Set when available.
  $QPfz$var$_Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  $QPfz$var$_Set =
  /*@__PURE__*/
  function () {
    function Set() {
      this.set = Object.create(null);
    }

    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };

    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };

    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}
/*  */


var $QPfz$var$warn = $QPfz$var$noop;
var $QPfz$var$tip = $QPfz$var$noop;
var $QPfz$var$generateComponentTrace = $QPfz$var$noop; // work around flow check

var $QPfz$var$formatComponentName = $QPfz$var$noop;

if (process.env.NODE_ENV !== 'production') {
  var $QPfz$var$hasConsole = typeof console !== 'undefined';
  var $QPfz$var$classifyRE = /(?:^|[-_])(\w)/g;

  var $QPfz$var$classify = function (str) {
    return str.replace($QPfz$var$classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  $QPfz$var$warn = function (msg, vm) {
    var trace = vm ? $QPfz$var$generateComponentTrace(vm) : '';

    if ($QPfz$var$config.warnHandler) {
      $QPfz$var$config.warnHandler.call(null, msg, vm, trace);
    } else if ($QPfz$var$hasConsole && !$QPfz$var$config.silent) {
      console.error("[Vue warn]: " + msg + trace);
    }
  };

  $QPfz$var$tip = function (msg, vm) {
    if ($QPfz$var$hasConsole && !$QPfz$var$config.silent) {
      console.warn("[Vue tip]: " + msg + (vm ? $QPfz$var$generateComponentTrace(vm) : ''));
    }
  };

  $QPfz$var$formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }

    var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;

    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<" + $QPfz$var$classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
  };

  var $QPfz$var$repeat = function (str, n) {
    var res = '';

    while (n) {
      if (n % 2 === 1) {
        res += str;
      }

      if (n > 1) {
        str += str;
      }

      n >>= 1;
    }

    return res;
  };

  $QPfz$var$generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;

      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];

          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }

        tree.push(vm);
        vm = vm.$parent;
      }

      return '\n\nfound in\n\n' + tree.map(function (vm, i) {
        return "" + (i === 0 ? '---> ' : $QPfz$var$repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? $QPfz$var$formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : $QPfz$var$formatComponentName(vm));
      }).join('\n');
    } else {
      return "\n\n(found in " + $QPfz$var$formatComponentName(vm) + ")";
    }
  };
}
/*  */


var $QPfz$var$uid = 0;
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */

var $QPfz$var$Dep = function Dep() {
  this.id = $QPfz$var$uid++;
  this.subs = [];
};

$QPfz$var$Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

$QPfz$var$Dep.prototype.removeSub = function removeSub(sub) {
  $QPfz$var$remove(this.subs, sub);
};

$QPfz$var$Dep.prototype.depend = function depend() {
  if ($QPfz$var$Dep.target) {
    $QPfz$var$Dep.target.addDep(this);
  }
};

$QPfz$var$Dep.prototype.notify = function notify() {
  // stabilize the subscriber list first
  var subs = this.subs.slice();

  if (process.env.NODE_ENV !== 'production' && !$QPfz$var$config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
}; // The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.


$QPfz$var$Dep.target = null;
var $QPfz$var$targetStack = [];

function $QPfz$var$pushTarget(target) {
  $QPfz$var$targetStack.push(target);
  $QPfz$var$Dep.target = target;
}

function $QPfz$var$popTarget() {
  $QPfz$var$targetStack.pop();
  $QPfz$var$Dep.target = $QPfz$var$targetStack[$QPfz$var$targetStack.length - 1];
}
/*  */


var $QPfz$var$VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var $QPfz$var$prototypeAccessors = {
  child: {
    configurable: true
  }
}; // DEPRECATED: alias for componentInstance for backwards compat.

/* istanbul ignore next */

$QPfz$var$prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties($QPfz$var$VNode.prototype, $QPfz$var$prototypeAccessors);

var $QPfz$var$createEmptyVNode = function (text) {
  if (text === void 0) text = '';
  var node = new $QPfz$var$VNode();
  node.text = text;
  node.isComment = true;
  return node;
};

function $QPfz$var$createTextVNode(val) {
  return new $QPfz$var$VNode(undefined, undefined, undefined, String(val));
} // optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.


function $QPfz$var$cloneVNode(vnode) {
  var cloned = new $QPfz$var$VNode(vnode.tag, vnode.data, // #7975
  // clone children array to avoid mutating original in case of cloning
  // a child.
  vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned;
}
/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */


var $QPfz$var$arrayProto = Array.prototype;
var $QPfz$var$arrayMethods = Object.create($QPfz$var$arrayProto);
var $QPfz$var$methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
/**
 * Intercept mutating methods and emit events
 */

$QPfz$var$methodsToPatch.forEach(function (method) {
  // cache original method
  var original = $QPfz$var$arrayProto[method];
  $QPfz$var$def($QPfz$var$arrayMethods, method, function mutator() {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;

    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;

      case 'splice':
        inserted = args.slice(2);
        break;
    }

    if (inserted) {
      ob.observeArray(inserted);
    } // notify change


    ob.dep.notify();
    return result;
  });
});
/*  */

var $QPfz$var$arrayKeys = Object.getOwnPropertyNames($QPfz$var$arrayMethods);
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */

var $QPfz$var$shouldObserve = true;

function $QPfz$var$toggleObserving(value) {
  $QPfz$var$shouldObserve = value;
}
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */


var $QPfz$var$Observer = function Observer(value) {
  this.value = value;
  this.dep = new $QPfz$var$Dep();
  this.vmCount = 0;
  $QPfz$var$def(value, '__ob__', this);

  if (Array.isArray(value)) {
    if ($QPfz$var$hasProto) {
      $QPfz$var$protoAugment(value, $QPfz$var$arrayMethods);
    } else {
      $QPfz$var$copyAugment(value, $QPfz$var$arrayMethods, $QPfz$var$arrayKeys);
    }

    this.observeArray(value);
  } else {
    this.walk(value);
  }
};
/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */


$QPfz$var$Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    $QPfz$var$defineReactive$$1(obj, keys[i]);
  }
};
/**
 * Observe a list of Array items.
 */


$QPfz$var$Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    $QPfz$var$observe(items[i]);
  }
}; // helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */


function $QPfz$var$protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}
/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */

/* istanbul ignore next */


function $QPfz$var$copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    $QPfz$var$def(target, key, src[key]);
  }
}
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */


function $QPfz$var$observe(value, asRootData) {
  if (!$QPfz$var$isObject(value) || value instanceof $QPfz$var$VNode) {
    return;
  }

  var ob;

  if ($QPfz$var$hasOwn(value, '__ob__') && value.__ob__ instanceof $QPfz$var$Observer) {
    ob = value.__ob__;
  } else if ($QPfz$var$shouldObserve && !$QPfz$var$isServerRendering() && (Array.isArray(value) || $QPfz$var$isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new $QPfz$var$Observer(value);
  }

  if (asRootData && ob) {
    ob.vmCount++;
  }

  return ob;
}
/**
 * Define a reactive property on an Object.
 */


function $QPfz$var$defineReactive$$1(obj, key, val, customSetter, shallow) {
  var dep = new $QPfz$var$Dep();
  var property = Object.getOwnPropertyDescriptor(obj, key);

  if (property && property.configurable === false) {
    return;
  } // cater for pre-defined getter/setters


  var getter = property && property.get;
  var setter = property && property.set;

  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && $QPfz$var$observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;

      if ($QPfz$var$Dep.target) {
        dep.depend();

        if (childOb) {
          childOb.dep.depend();

          if (Array.isArray(value)) {
            $QPfz$var$dependArray(value);
          }
        }
      }

      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */


      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      } // #7981: for accessor properties without setter


      if (getter && !setter) {
        return;
      }

      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }

      childOb = !shallow && $QPfz$var$observe(newVal);
      dep.notify();
    }
  });
}
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */


function $QPfz$var$set(target, key, val) {
  if (process.env.NODE_ENV !== 'production' && ($QPfz$var$isUndef(target) || $QPfz$var$isPrimitive(target))) {
    $QPfz$var$warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && $QPfz$var$isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }

  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
    process.env.NODE_ENV !== 'production' && $QPfz$var$warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }

  if (!ob) {
    target[key] = val;
    return val;
  }

  $QPfz$var$defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val;
}
/**
 * Delete a property and trigger change if necessary.
 */


function $QPfz$var$del(target, key) {
  if (process.env.NODE_ENV !== 'production' && ($QPfz$var$isUndef(target) || $QPfz$var$isPrimitive(target))) {
    $QPfz$var$warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && $QPfz$var$isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
    process.env.NODE_ENV !== 'production' && $QPfz$var$warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }

  if (!$QPfz$var$hasOwn(target, key)) {
    return;
  }

  delete target[key];

  if (!ob) {
    return;
  }

  ob.dep.notify();
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */


function $QPfz$var$dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();

    if (Array.isArray(e)) {
      $QPfz$var$dependArray(e);
    }
  }
}
/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */


var $QPfz$var$strats = $QPfz$var$config.optionMergeStrategies;
/**
 * Options with restrictions
 */

if (process.env.NODE_ENV !== 'production') {
  $QPfz$var$strats.el = $QPfz$var$strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      $QPfz$var$warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
    }

    return $QPfz$var$defaultStrat(parent, child);
  };
}
/**
 * Helper that recursively merges two data objects together.
 */


function $QPfz$var$mergeData(to, from) {
  if (!from) {
    return to;
  }

  var key, toVal, fromVal;
  var keys = $QPfz$var$hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i]; // in case the object is already observed...

    if (key === '__ob__') {
      continue;
    }

    toVal = to[key];
    fromVal = from[key];

    if (!$QPfz$var$hasOwn(to, key)) {
      $QPfz$var$set(to, key, fromVal);
    } else if (toVal !== fromVal && $QPfz$var$isPlainObject(toVal) && $QPfz$var$isPlainObject(fromVal)) {
      $QPfz$var$mergeData(toVal, fromVal);
    }
  }

  return to;
}
/**
 * Data
 */


function $QPfz$var$mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }

    if (!parentVal) {
      return childVal;
    } // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.


    return function mergedDataFn() {
      return $QPfz$var$mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

      if (instanceData) {
        return $QPfz$var$mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

$QPfz$var$strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && $QPfz$var$warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }

    return $QPfz$var$mergeDataOrFn(parentVal, childVal);
  }

  return $QPfz$var$mergeDataOrFn(parentVal, childVal, vm);
};
/**
 * Hooks and props are merged as arrays.
 */


function $QPfz$var$mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? $QPfz$var$dedupeHooks(res) : res;
}

function $QPfz$var$dedupeHooks(hooks) {
  var res = [];

  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }

  return res;
}

$QPfz$var$LIFECYCLE_HOOKS.forEach(function (hook) {
  $QPfz$var$strats[hook] = $QPfz$var$mergeHook;
});
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function $QPfz$var$mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);

  if (childVal) {
    process.env.NODE_ENV !== 'production' && $QPfz$var$assertObjectType(key, childVal, vm);
    return $QPfz$var$extend(res, childVal);
  } else {
    return res;
  }
}

$QPfz$var$ASSET_TYPES.forEach(function (type) {
  $QPfz$var$strats[type + 's'] = $QPfz$var$mergeAssets;
});
/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

$QPfz$var$strats.watch = function (parentVal, childVal, vm, key) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === $QPfz$var$nativeWatch) {
    parentVal = undefined;
  }

  if (childVal === $QPfz$var$nativeWatch) {
    childVal = undefined;
  }
  /* istanbul ignore if */


  if (!childVal) {
    return Object.create(parentVal || null);
  }

  if (process.env.NODE_ENV !== 'production') {
    $QPfz$var$assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = {};
  $QPfz$var$extend(ret, parentVal);

  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];

    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }

    ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }

  return ret;
};
/**
 * Other object hashes.
 */


$QPfz$var$strats.props = $QPfz$var$strats.methods = $QPfz$var$strats.inject = $QPfz$var$strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && process.env.NODE_ENV !== 'production') {
    $QPfz$var$assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = Object.create(null);
  $QPfz$var$extend(ret, parentVal);

  if (childVal) {
    $QPfz$var$extend(ret, childVal);
  }

  return ret;
};

$QPfz$var$strats.provide = $QPfz$var$mergeDataOrFn;
/**
 * Default strategy.
 */

var $QPfz$var$defaultStrat = function (parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};
/**
 * Validate component names
 */


function $QPfz$var$checkComponents(options) {
  for (var key in options.components) {
    $QPfz$var$validateComponentName(key);
  }
}

function $QPfz$var$validateComponentName(name) {
  if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + $QPfz$var$unicodeRegExp.source + "]*$").test(name)) {
    $QPfz$var$warn('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
  }

  if ($QPfz$var$isBuiltInTag(name) || $QPfz$var$config.isReservedTag(name)) {
    $QPfz$var$warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
  }
}
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */


function $QPfz$var$normalizeProps(options, vm) {
  var props = options.props;

  if (!props) {
    return;
  }

  var res = {};
  var i, val, name;

  if (Array.isArray(props)) {
    i = props.length;

    while (i--) {
      val = props[i];

      if (typeof val === 'string') {
        name = $QPfz$var$camelize(val);
        res[name] = {
          type: null
        };
      } else if (process.env.NODE_ENV !== 'production') {
        $QPfz$var$warn('props must be strings when using array syntax.');
      }
    }
  } else if ($QPfz$var$isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = $QPfz$var$camelize(key);
      res[name] = $QPfz$var$isPlainObject(val) ? val : {
        type: val
      };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    $QPfz$var$warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + $QPfz$var$toRawType(props) + ".", vm);
  }

  options.props = res;
}
/**
 * Normalize all injections into Object-based format
 */


function $QPfz$var$normalizeInject(options, vm) {
  var inject = options.inject;

  if (!inject) {
    return;
  }

  var normalized = options.inject = {};

  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = {
        from: inject[i]
      };
    }
  } else if ($QPfz$var$isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = $QPfz$var$isPlainObject(val) ? $QPfz$var$extend({
        from: key
      }, val) : {
        from: val
      };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    $QPfz$var$warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + $QPfz$var$toRawType(inject) + ".", vm);
  }
}
/**
 * Normalize raw function directives into object format.
 */


function $QPfz$var$normalizeDirectives(options) {
  var dirs = options.directives;

  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];

      if (typeof def$$1 === 'function') {
        dirs[key] = {
          bind: def$$1,
          update: def$$1
        };
      }
    }
  }
}

function $QPfz$var$assertObjectType(name, value, vm) {
  if (!$QPfz$var$isPlainObject(value)) {
    $QPfz$var$warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + $QPfz$var$toRawType(value) + ".", vm);
  }
}
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */


function $QPfz$var$mergeOptions(parent, child, vm) {
  if (process.env.NODE_ENV !== 'production') {
    $QPfz$var$checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  $QPfz$var$normalizeProps(child, vm);
  $QPfz$var$normalizeInject(child, vm);
  $QPfz$var$normalizeDirectives(child); // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.

  if (!child._base) {
    if (child.extends) {
      parent = $QPfz$var$mergeOptions(parent, child.extends, vm);
    }

    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = $QPfz$var$mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;

  for (key in parent) {
    mergeField(key);
  }

  for (key in child) {
    if (!$QPfz$var$hasOwn(parent, key)) {
      mergeField(key);
    }
  }

  function mergeField(key) {
    var strat = $QPfz$var$strats[key] || $QPfz$var$defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }

  return options;
}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */


function $QPfz$var$resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }

  var assets = options[type]; // check local registration variations first

  if ($QPfz$var$hasOwn(assets, id)) {
    return assets[id];
  }

  var camelizedId = $QPfz$var$camelize(id);

  if ($QPfz$var$hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }

  var PascalCaseId = $QPfz$var$capitalize(camelizedId);

  if ($QPfz$var$hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  } // fallback to prototype chain


  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    $QPfz$var$warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }

  return res;
}
/*  */


function $QPfz$var$validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !$QPfz$var$hasOwn(propsData, key);
  var value = propsData[key]; // boolean casting

  var booleanIndex = $QPfz$var$getTypeIndex(Boolean, prop.type);

  if (booleanIndex > -1) {
    if (absent && !$QPfz$var$hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === $QPfz$var$hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = $QPfz$var$getTypeIndex(String, prop.type);

      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  } // check default value


  if (value === undefined) {
    value = $QPfz$var$getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
    // make sure to observe it.

    var prevShouldObserve = $QPfz$var$shouldObserve;
    $QPfz$var$toggleObserving(true);
    $QPfz$var$observe(value);
    $QPfz$var$toggleObserving(prevShouldObserve);
  }

  if (process.env.NODE_ENV !== 'production' && // skip validation for weex recycle-list child component props
  !false) {
    $QPfz$var$assertProp(prop, key, value, vm, absent);
  }

  return value;
}
/**
 * Get the default value of a prop.
 */


function $QPfz$var$getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!$QPfz$var$hasOwn(prop, 'default')) {
    return undefined;
  }

  var def = prop.default; // warn against non-factory defaults for Object & Array

  if (process.env.NODE_ENV !== 'production' && $QPfz$var$isObject(def)) {
    $QPfz$var$warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  } // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger


  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  } // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context


  return typeof def === 'function' && $QPfz$var$getType(prop.type) !== 'Function' ? def.call(vm) : def;
}
/**
 * Assert whether a prop is valid.
 */


function $QPfz$var$assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    $QPfz$var$warn('Missing required prop: "' + name + '"', vm);
    return;
  }

  if (value == null && !prop.required) {
    return;
  }

  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];

  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }

    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = $QPfz$var$assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    $QPfz$var$warn($QPfz$var$getInvalidTypeMessage(name, value, expectedTypes), vm);
    return;
  }

  var validator = prop.validator;

  if (validator) {
    if (!validator(value)) {
      $QPfz$var$warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

var $QPfz$var$simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function $QPfz$var$assertType(value, type) {
  var valid;
  var expectedType = $QPfz$var$getType(type);

  if ($QPfz$var$simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = $QPfz$var$isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */


function $QPfz$var$getType(fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function $QPfz$var$isSameType(a, b) {
  return $QPfz$var$getType(a) === $QPfz$var$getType(b);
}

function $QPfz$var$getTypeIndex(type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return $QPfz$var$isSameType(expectedTypes, type) ? 0 : -1;
  }

  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if ($QPfz$var$isSameType(expectedTypes[i], type)) {
      return i;
    }
  }

  return -1;
}

function $QPfz$var$getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map($QPfz$var$capitalize).join(', ');
  var expectedType = expectedTypes[0];
  var receivedType = $QPfz$var$toRawType(value);
  var expectedValue = $QPfz$var$styleValue(value, expectedType);
  var receivedValue = $QPfz$var$styleValue(value, receivedType); // check if we need to specify expected value

  if (expectedTypes.length === 1 && $QPfz$var$isExplicable(expectedType) && !$QPfz$var$isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }

  message += ", got " + receivedType + " "; // check if we need to specify received value

  if ($QPfz$var$isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }

  return message;
}

function $QPfz$var$styleValue(value, type) {
  if (type === 'String') {
    return "\"" + value + "\"";
  } else if (type === 'Number') {
    return "" + Number(value);
  } else {
    return "" + value;
  }
}

function $QPfz$var$isExplicable(value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) {
    return value.toLowerCase() === elem;
  });
}

function $QPfz$var$isBoolean() {
  var args = [],
      len = arguments.length;

  while (len--) args[len] = arguments[len];

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}
/*  */


function $QPfz$var$handleError(err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  $QPfz$var$pushTarget();

  try {
    if (vm) {
      var cur = vm;

      while (cur = cur.$parent) {
        var hooks = cur.$options.errorCaptured;

        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;

              if (capture) {
                return;
              }
            } catch (e) {
              $QPfz$var$globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }

    $QPfz$var$globalHandleError(err, vm, info);
  } finally {
    $QPfz$var$popTarget();
  }
}

function $QPfz$var$invokeWithErrorHandling(handler, context, args, vm, info) {
  var res;

  try {
    res = args ? handler.apply(context, args) : handler.call(context);

    if (res && !res._isVue && $QPfz$var$isPromise(res) && !res._handled) {
      res.catch(function (e) {
        return $QPfz$var$handleError(e, vm, info + " (Promise/async)");
      }); // issue #9511
      // avoid catch triggering multiple times when nested calls

      res._handled = true;
    }
  } catch (e) {
    $QPfz$var$handleError(e, vm, info);
  }

  return res;
}

function $QPfz$var$globalHandleError(err, vm, info) {
  if ($QPfz$var$config.errorHandler) {
    try {
      return $QPfz$var$config.errorHandler.call(null, err, vm, info);
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        $QPfz$var$logError(e, null, 'config.errorHandler');
      }
    }
  }

  $QPfz$var$logError(err, vm, info);
}

function $QPfz$var$logError(err, vm, info) {
  if (process.env.NODE_ENV !== 'production') {
    $QPfz$var$warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
  }
  /* istanbul ignore else */


  if (($QPfz$var$inBrowser || $QPfz$var$inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}
/*  */


var $QPfz$var$isUsingMicroTask = false;
var $QPfz$var$callbacks = [];
var $QPfz$var$pending = false;

function $QPfz$var$flushCallbacks() {
  $QPfz$var$pending = false;
  var copies = $QPfz$var$callbacks.slice(0);
  $QPfz$var$callbacks.length = 0;

  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
} // Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).


var $QPfz$var$timerFunc; // The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:

/* istanbul ignore next, $flow-disable-line */

if (typeof Promise !== 'undefined' && $QPfz$var$isNative(Promise)) {
  var $QPfz$var$p = Promise.resolve();

  $QPfz$var$timerFunc = function () {
    $QPfz$var$p.then($QPfz$var$flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.

    if ($QPfz$var$isIOS) {
      setTimeout($QPfz$var$noop);
    }
  };

  $QPfz$var$isUsingMicroTask = true;
} else if (!$QPfz$var$isIE && typeof MutationObserver !== 'undefined' && ($QPfz$var$isNative(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === '[object MutationObserverConstructor]')) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var $QPfz$var$counter = 1;
  var $QPfz$var$observer = new MutationObserver($QPfz$var$flushCallbacks);
  var $QPfz$var$textNode = document.createTextNode(String($QPfz$var$counter));
  $QPfz$var$observer.observe($QPfz$var$textNode, {
    characterData: true
  });

  $QPfz$var$timerFunc = function () {
    $QPfz$var$counter = ($QPfz$var$counter + 1) % 2;
    $QPfz$var$textNode.data = String($QPfz$var$counter);
  };

  $QPfz$var$isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && $QPfz$var$isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  $QPfz$var$timerFunc = function () {
    setImmediate($QPfz$var$flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  $QPfz$var$timerFunc = function () {
    setTimeout($QPfz$var$flushCallbacks, 0);
  };
}

function $QPfz$var$nextTick(cb, ctx) {
  var _resolve;

  $QPfz$var$callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        $QPfz$var$handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });

  if (!$QPfz$var$pending) {
    $QPfz$var$pending = true;
    $QPfz$var$timerFunc();
  } // $flow-disable-line


  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    });
  }
}
/*  */

/* not type checking this file because flow doesn't play well with Proxy */


var $QPfz$var$initProxy;

if (process.env.NODE_ENV !== 'production') {
  var $QPfz$var$allowedGlobals = $QPfz$var$makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
  );

  var $QPfz$var$warnNonPresent = function (target, key) {
    $QPfz$var$warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
  };

  var $QPfz$var$warnReservedPrefix = function (target, key) {
    $QPfz$var$warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + 'prevent conflicts with Vue internals' + 'See: https://vuejs.org/v2/api/#data', target);
  };

  var $QPfz$var$hasProxy = typeof Proxy !== 'undefined' && $QPfz$var$isNative(Proxy);

  if ($QPfz$var$hasProxy) {
    var $QPfz$var$isBuiltInModifier = $QPfz$var$makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    $QPfz$var$config.keyCodes = new Proxy($QPfz$var$config.keyCodes, {
      set: function set(target, key, value) {
        if ($QPfz$var$isBuiltInModifier(key)) {
          $QPfz$var$warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  var $QPfz$var$hasHandler = {
    has: function has(target, key) {
      var has = key in target;
      var isAllowed = $QPfz$var$allowedGlobals(key) || typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data);

      if (!has && !isAllowed) {
        if (key in target.$data) {
          $QPfz$var$warnReservedPrefix(target, key);
        } else {
          $QPfz$var$warnNonPresent(target, key);
        }
      }

      return has || !isAllowed;
    }
  };
  var $QPfz$var$getHandler = {
    get: function get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) {
          $QPfz$var$warnReservedPrefix(target, key);
        } else {
          $QPfz$var$warnNonPresent(target, key);
        }
      }

      return target[key];
    }
  };

  $QPfz$var$initProxy = function initProxy(vm) {
    if ($QPfz$var$hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? $QPfz$var$getHandler : $QPfz$var$hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}
/*  */


var $QPfz$var$seenObjects = new $QPfz$var$_Set();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */

function $QPfz$var$traverse(val) {
  $QPfz$var$_traverse(val, $QPfz$var$seenObjects);
  $QPfz$var$seenObjects.clear();
}

function $QPfz$var$_traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);

  if (!isA && !$QPfz$var$isObject(val) || Object.isFrozen(val) || val instanceof $QPfz$var$VNode) {
    return;
  }

  if (val.__ob__) {
    var depId = val.__ob__.dep.id;

    if (seen.has(depId)) {
      return;
    }

    seen.add(depId);
  }

  if (isA) {
    i = val.length;

    while (i--) {
      $QPfz$var$_traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;

    while (i--) {
      $QPfz$var$_traverse(val[keys[i]], seen);
    }
  }
}

var $QPfz$var$mark;
var $QPfz$var$measure;

if (process.env.NODE_ENV !== 'production') {
  var $QPfz$var$perf = $QPfz$var$inBrowser && window.performance;
  /* istanbul ignore if */

  if ($QPfz$var$perf && $QPfz$var$perf.mark && $QPfz$var$perf.measure && $QPfz$var$perf.clearMarks && $QPfz$var$perf.clearMeasures) {
    $QPfz$var$mark = function (tag) {
      return $QPfz$var$perf.mark(tag);
    };

    $QPfz$var$measure = function (name, startTag, endTag) {
      $QPfz$var$perf.measure(name, startTag, endTag);
      $QPfz$var$perf.clearMarks(startTag);
      $QPfz$var$perf.clearMarks(endTag); // perf.clearMeasures(name)
    };
  }
}
/*  */


var $QPfz$var$normalizeEvent = $QPfz$var$cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first

  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  };
});

function $QPfz$var$createFnInvoker(fns, vm) {
  function invoker() {
    var arguments$1 = arguments;
    var fns = invoker.fns;

    if (Array.isArray(fns)) {
      var cloned = fns.slice();

      for (var i = 0; i < cloned.length; i++) {
        $QPfz$var$invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return $QPfz$var$invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
    }
  }

  invoker.fns = fns;
  return invoker;
}

function $QPfz$var$updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
  var name, def$$1, cur, old, event;

  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = $QPfz$var$normalizeEvent(name);

    if ($QPfz$var$isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && $QPfz$var$warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
    } else if ($QPfz$var$isUndef(old)) {
      if ($QPfz$var$isUndef(cur.fns)) {
        cur = on[name] = $QPfz$var$createFnInvoker(cur, vm);
      }

      if ($QPfz$var$isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }

      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }

  for (name in oldOn) {
    if ($QPfz$var$isUndef(on[name])) {
      event = $QPfz$var$normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}
/*  */


function $QPfz$var$mergeVNodeHook(def, hookKey, hook) {
  if (def instanceof $QPfz$var$VNode) {
    def = def.data.hook || (def.data.hook = {});
  }

  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments); // important: remove merged hook to ensure it's called only once
    // and prevent memory leak

    $QPfz$var$remove(invoker.fns, wrappedHook);
  }

  if ($QPfz$var$isUndef(oldHook)) {
    // no existing hook
    invoker = $QPfz$var$createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if ($QPfz$var$isDef(oldHook.fns) && $QPfz$var$isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = $QPfz$var$createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}
/*  */


function $QPfz$var$extractPropsFromVNodeData(data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;

  if ($QPfz$var$isUndef(propOptions)) {
    return;
  }

  var res = {};
  var attrs = data.attrs;
  var props = data.props;

  if ($QPfz$var$isDef(attrs) || $QPfz$var$isDef(props)) {
    for (var key in propOptions) {
      var altKey = $QPfz$var$hyphenate(key);

      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();

        if (key !== keyInLowerCase && attrs && $QPfz$var$hasOwn(attrs, keyInLowerCase)) {
          $QPfz$var$tip("Prop \"" + keyInLowerCase + "\" is passed to component " + $QPfz$var$formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
        }
      }

      $QPfz$var$checkProp(res, props, key, altKey, true) || $QPfz$var$checkProp(res, attrs, key, altKey, false);
    }
  }

  return res;
}

function $QPfz$var$checkProp(res, hash, key, altKey, preserve) {
  if ($QPfz$var$isDef(hash)) {
    if ($QPfz$var$hasOwn(hash, key)) {
      res[key] = hash[key];

      if (!preserve) {
        delete hash[key];
      }

      return true;
    } else if ($QPfz$var$hasOwn(hash, altKey)) {
      res[key] = hash[altKey];

      if (!preserve) {
        delete hash[altKey];
      }

      return true;
    }
  }

  return false;
}
/*  */
// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.


function $QPfz$var$simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }

  return children;
} // 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.


function $QPfz$var$normalizeChildren(children) {
  return $QPfz$var$isPrimitive(children) ? [$QPfz$var$createTextVNode(children)] : Array.isArray(children) ? $QPfz$var$normalizeArrayChildren(children) : undefined;
}

function $QPfz$var$isTextNode(node) {
  return $QPfz$var$isDef(node) && $QPfz$var$isDef(node.text) && $QPfz$var$isFalse(node.isComment);
}

function $QPfz$var$normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;

  for (i = 0; i < children.length; i++) {
    c = children[i];

    if ($QPfz$var$isUndef(c) || typeof c === 'boolean') {
      continue;
    }

    lastIndex = res.length - 1;
    last = res[lastIndex]; //  nested

    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = $QPfz$var$normalizeArrayChildren(c, (nestedIndex || '') + "_" + i); // merge adjacent text nodes

        if ($QPfz$var$isTextNode(c[0]) && $QPfz$var$isTextNode(last)) {
          res[lastIndex] = $QPfz$var$createTextVNode(last.text + c[0].text);
          c.shift();
        }

        res.push.apply(res, c);
      }
    } else if ($QPfz$var$isPrimitive(c)) {
      if ($QPfz$var$isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = $QPfz$var$createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push($QPfz$var$createTextVNode(c));
      }
    } else {
      if ($QPfz$var$isTextNode(c) && $QPfz$var$isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = $QPfz$var$createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if ($QPfz$var$isTrue(children._isVList) && $QPfz$var$isDef(c.tag) && $QPfz$var$isUndef(c.key) && $QPfz$var$isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }

        res.push(c);
      }
    }
  }

  return res;
}
/*  */


function $QPfz$var$initProvide(vm) {
  var provide = vm.$options.provide;

  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function $QPfz$var$initInjections(vm) {
  var result = $QPfz$var$resolveInject(vm.$options.inject, vm);

  if (result) {
    $QPfz$var$toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        $QPfz$var$defineReactive$$1(vm, key, result[key], function () {
          $QPfz$var$warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
        });
      } else {
        $QPfz$var$defineReactive$$1(vm, key, result[key]);
      }
    });
    $QPfz$var$toggleObserving(true);
  }
}

function $QPfz$var$resolveInject(inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = $QPfz$var$hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]; // #6574 in case the inject object is observed...

      if (key === '__ob__') {
        continue;
      }

      var provideKey = inject[key].from;
      var source = vm;

      while (source) {
        if (source._provided && $QPfz$var$hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break;
        }

        source = source.$parent;
      }

      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        } else if (process.env.NODE_ENV !== 'production') {
          $QPfz$var$warn("Injection \"" + key + "\" not found", vm);
        }
      }
    }

    return result;
  }
}
/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */


function $QPfz$var$resolveSlots(children, context) {
  if (!children || !children.length) {
    return {};
  }

  var slots = {};

  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    } // named slots should only be respected if the vnode was rendered in the
    // same context.


    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      var name = data.slot;
      var slot = slots[name] || (slots[name] = []);

      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  } // ignore slots that contains only whitespace


  for (var name$1 in slots) {
    if (slots[name$1].every($QPfz$var$isWhitespace)) {
      delete slots[name$1];
    }
  }

  return slots;
}

function $QPfz$var$isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === ' ';
}
/*  */


function $QPfz$var$normalizeScopedSlots(slots, normalSlots, prevSlots) {
  var res;
  var isStable = slots ? !!slots.$stable : true;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var key = slots && slots.$key;

  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized;
  } else if (isStable && prevSlots && prevSlots !== $QPfz$var$emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots;
  } else {
    res = {};

    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = $QPfz$var$normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  } // expose normal slots on scopedSlots


  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = $QPfz$var$proxyNormalSlot(normalSlots, key$2);
    }
  } // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error


  if (slots && Object.isExtensible(slots)) {
    slots._normalized = res;
  }

  $QPfz$var$def(res, '$stable', isStable);
  $QPfz$var$def(res, '$key', key);
  $QPfz$var$def(res, '$hasNormal', hasNormalSlots);
  return res;
}

function $QPfz$var$normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res) ? [res] // single vnode
    : $QPfz$var$normalizeChildren(res);
    return res && (res.length === 0 || res.length === 1 && res[0].isComment // #9658
    ) ? undefined : res;
  }; // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.


  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }

  return normalized;
}

function $QPfz$var$proxyNormalSlot(slots, key) {
  return function () {
    return slots[key];
  };
}
/*  */

/**
 * Runtime helper for rendering v-for lists.
 */


function $QPfz$var$renderList(val, render) {
  var ret, i, l, keys, key;

  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);

    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);

    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if ($QPfz$var$isObject(val)) {
    if ($QPfz$var$hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();

      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);

      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }

  if (!$QPfz$var$isDef(ret)) {
    ret = [];
  }

  ret._isVList = true;
  return ret;
}
/*  */

/**
 * Runtime helper for rendering <slot>
 */


function $QPfz$var$renderSlot(name, fallback, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;

  if (scopedSlotFn) {
    // scoped slot
    props = props || {};

    if (bindObject) {
      if (process.env.NODE_ENV !== 'production' && !$QPfz$var$isObject(bindObject)) {
        $QPfz$var$warn('slot v-bind without argument expects an Object', this);
      }

      props = $QPfz$var$extend($QPfz$var$extend({}, bindObject), props);
    }

    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;

  if (target) {
    return this.$createElement('template', {
      slot: target
    }, nodes);
  } else {
    return nodes;
  }
}
/*  */

/**
 * Runtime helper for resolving filters
 */


function $QPfz$var$resolveFilter(id) {
  return $QPfz$var$resolveAsset(this.$options, 'filters', id, true) || $QPfz$var$identity;
}
/*  */


function $QPfz$var$isKeyNotMatch(expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */


function $QPfz$var$checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  var mappedKeyCode = $QPfz$var$config.keyCodes[key] || builtInKeyCode;

  if (builtInKeyName && eventKeyName && !$QPfz$var$config.keyCodes[key]) {
    return $QPfz$var$isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return $QPfz$var$isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return $QPfz$var$hyphenate(eventKeyName) !== key;
  }
}
/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */


function $QPfz$var$bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!$QPfz$var$isObject(value)) {
      process.env.NODE_ENV !== 'production' && $QPfz$var$warn('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = $QPfz$var$toObject(value);
      }

      var hash;

      var loop = function (key) {
        if (key === 'class' || key === 'style' || $QPfz$var$isReservedAttribute(key)) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || $QPfz$var$config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }

        var camelizedKey = $QPfz$var$camelize(key);
        var hyphenatedKey = $QPfz$var$hyphenate(key);

        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});

            on["update:" + key] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop(key);
    }
  }

  return data;
}
/*  */

/**
 * Runtime helper for rendering static trees.
 */


function $QPfz$var$renderStatic(index, isInFor) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.

  if (tree && !isInFor) {
    return tree;
  } // otherwise, render a fresh tree.


  tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
  );
  $QPfz$var$markStatic(tree, "__static__" + index, false);
  return tree;
}
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */


function $QPfz$var$markOnce(tree, index, key) {
  $QPfz$var$markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function $QPfz$var$markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        $QPfz$var$markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    $QPfz$var$markStaticNode(tree, key, isOnce);
  }
}

function $QPfz$var$markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}
/*  */


function $QPfz$var$bindObjectListeners(data, value) {
  if (value) {
    if (!$QPfz$var$isPlainObject(value)) {
      process.env.NODE_ENV !== 'production' && $QPfz$var$warn('v-on without argument expects an Object value', this);
    } else {
      var on = data.on = data.on ? $QPfz$var$extend({}, data.on) : {};

      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }

  return data;
}
/*  */


function $QPfz$var$resolveScopedSlots(fns, // see flow/vnode
res, // the following are added in 2.6
hasDynamicKeys, contentHashKey) {
  res = res || {
    $stable: !hasDynamicKeys
  };

  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];

    if (Array.isArray(slot)) {
      $QPfz$var$resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }

      res[slot.key] = slot.fn;
    }
  }

  if (contentHashKey) {
    res.$key = contentHashKey;
  }

  return res;
}
/*  */


function $QPfz$var$bindDynamicKeys(baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];

    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (process.env.NODE_ENV !== 'production' && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      $QPfz$var$warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
    }
  }

  return baseObj;
} // helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.


function $QPfz$var$prependModifier(value, symbol) {
  return typeof value === 'string' ? symbol + value : value;
}
/*  */


function $QPfz$var$installRenderHelpers(target) {
  target._o = $QPfz$var$markOnce;
  target._n = $QPfz$var$toNumber;
  target._s = $QPfz$var$toString;
  target._l = $QPfz$var$renderList;
  target._t = $QPfz$var$renderSlot;
  target._q = $QPfz$var$looseEqual;
  target._i = $QPfz$var$looseIndexOf;
  target._m = $QPfz$var$renderStatic;
  target._f = $QPfz$var$resolveFilter;
  target._k = $QPfz$var$checkKeyCodes;
  target._b = $QPfz$var$bindObjectProps;
  target._v = $QPfz$var$createTextVNode;
  target._e = $QPfz$var$createEmptyVNode;
  target._u = $QPfz$var$resolveScopedSlots;
  target._g = $QPfz$var$bindObjectListeners;
  target._d = $QPfz$var$bindDynamicKeys;
  target._p = $QPfz$var$prependModifier;
}
/*  */


function $QPfz$var$FunctionalRenderContext(data, props, children, parent, Ctor) {
  var this$1 = this;
  var options = Ctor.options; // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check

  var contextVm;

  if ($QPfz$var$hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent); // $flow-disable-line

    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent; // $flow-disable-line

    parent = parent._original;
  }

  var isCompiled = $QPfz$var$isTrue(options._compiled);
  var needNormalization = !isCompiled;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || $QPfz$var$emptyObject;
  this.injections = $QPfz$var$resolveInject(options.inject, parent);

  this.slots = function () {
    if (!this$1.$slots) {
      $QPfz$var$normalizeScopedSlots(data.scopedSlots, this$1.$slots = $QPfz$var$resolveSlots(children, parent));
    }

    return this$1.$slots;
  };

  Object.defineProperty(this, 'scopedSlots', {
    enumerable: true,
    get: function get() {
      return $QPfz$var$normalizeScopedSlots(data.scopedSlots, this.slots());
    }
  }); // support for compiled functional template

  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options; // pre-resolve slots for renderSlot()

    this.$slots = this.slots();
    this.$scopedSlots = $QPfz$var$normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = $QPfz$var$createElement(contextVm, a, b, c, d, needNormalization);

      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }

      return vnode;
    };
  } else {
    this._c = function (a, b, c, d) {
      return $QPfz$var$createElement(contextVm, a, b, c, d, needNormalization);
    };
  }
}

$QPfz$var$installRenderHelpers($QPfz$var$FunctionalRenderContext.prototype);

function $QPfz$var$createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;

  if ($QPfz$var$isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = $QPfz$var$validateProp(key, propOptions, propsData || $QPfz$var$emptyObject);
    }
  } else {
    if ($QPfz$var$isDef(data.attrs)) {
      $QPfz$var$mergeProps(props, data.attrs);
    }

    if ($QPfz$var$isDef(data.props)) {
      $QPfz$var$mergeProps(props, data.props);
    }
  }

  var renderContext = new $QPfz$var$FunctionalRenderContext(data, props, children, contextVm, Ctor);
  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof $QPfz$var$VNode) {
    return $QPfz$var$cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
  } else if (Array.isArray(vnode)) {
    var vnodes = $QPfz$var$normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);

    for (var i = 0; i < vnodes.length; i++) {
      res[i] = $QPfz$var$cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }

    return res;
  }
}

function $QPfz$var$cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = $QPfz$var$cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;

  if (process.env.NODE_ENV !== 'production') {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }

  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }

  return clone;
}

function $QPfz$var$mergeProps(to, from) {
  for (var key in from) {
    to[$QPfz$var$camelize(key)] = from[key];
  }
}
/*  */

/*  */

/*  */

/*  */
// inline hooks to be invoked on component VNodes during patch


var $QPfz$var$componentVNodeHooks = {
  init: function init(vnode, hydrating) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow

      $QPfz$var$componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = $QPfz$var$createComponentInstanceForVnode(vnode, $QPfz$var$activeInstance);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },
  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    $QPfz$var$updateChildComponent(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  },
  insert: function insert(vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      $QPfz$var$callHook(componentInstance, 'mounted');
    }

    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        $QPfz$var$queueActivatedComponent(componentInstance);
      } else {
        $QPfz$var$activateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  },
  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        $QPfz$var$deactivateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  }
};
var $QPfz$var$hooksToMerge = Object.keys($QPfz$var$componentVNodeHooks);

function $QPfz$var$createComponent(Ctor, data, context, children, tag) {
  if ($QPfz$var$isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base; // plain options object: turn it into a constructor

  if ($QPfz$var$isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  } // if at this stage it's not a constructor or an async component factory,
  // reject.


  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      $QPfz$var$warn("Invalid Component definition: " + String(Ctor), context);
    }

    return;
  } // async component


  var asyncFactory;

  if ($QPfz$var$isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = $QPfz$var$resolveAsyncComponent(asyncFactory, baseCtor);

    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return $QPfz$var$createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {}; // resolve constructor options in case global mixins are applied after
  // component constructor creation

  $QPfz$var$resolveConstructorOptions(Ctor); // transform component v-model data into props & events

  if ($QPfz$var$isDef(data.model)) {
    $QPfz$var$transformModel(Ctor.options, data);
  } // extract props


  var propsData = $QPfz$var$extractPropsFromVNodeData(data, Ctor, tag); // functional component

  if ($QPfz$var$isTrue(Ctor.options.functional)) {
    return $QPfz$var$createFunctionalComponent(Ctor, propsData, data, context, children);
  } // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners


  var listeners = data.on; // replace with listeners with .native modifier
  // so it gets processed during parent component patch.

  data.on = data.nativeOn;

  if ($QPfz$var$isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot
    // work around flow
    var slot = data.slot;
    data = {};

    if (slot) {
      data.slot = slot;
    }
  } // install component management hooks onto the placeholder node


  $QPfz$var$installComponentHooks(data); // return a placeholder vnode

  var name = Ctor.options.name || tag;
  var vnode = new $QPfz$var$VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
    Ctor: Ctor,
    propsData: propsData,
    listeners: listeners,
    tag: tag,
    children: children
  }, asyncFactory);
  return vnode;
}

function $QPfz$var$createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  }; // check inline-template render functions

  var inlineTemplate = vnode.data.inlineTemplate;

  if ($QPfz$var$isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }

  return new vnode.componentOptions.Ctor(options);
}

function $QPfz$var$installComponentHooks(data) {
  var hooks = data.hook || (data.hook = {});

  for (var i = 0; i < $QPfz$var$hooksToMerge.length; i++) {
    var key = $QPfz$var$hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = $QPfz$var$componentVNodeHooks[key];

    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? $QPfz$var$mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function $QPfz$var$mergeHook$1(f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };

  merged._merged = true;
  return merged;
} // transform component v-model info (value and callback) into
// prop and event handler respectively.


function $QPfz$var$transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';
  (data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;

  if ($QPfz$var$isDef(existing)) {
    if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}
/*  */


var $QPfz$var$SIMPLE_NORMALIZE = 1;
var $QPfz$var$ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
// without getting yelled at by flow

function $QPfz$var$createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || $QPfz$var$isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }

  if ($QPfz$var$isTrue(alwaysNormalize)) {
    normalizationType = $QPfz$var$ALWAYS_NORMALIZE;
  }

  return $QPfz$var$_createElement(context, tag, data, children, normalizationType);
}

function $QPfz$var$_createElement(context, tag, data, children, normalizationType) {
  if ($QPfz$var$isDef(data) && $QPfz$var$isDef(data.__ob__)) {
    process.env.NODE_ENV !== 'production' && $QPfz$var$warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
    return $QPfz$var$createEmptyVNode();
  } // object syntax in v-bind


  if ($QPfz$var$isDef(data) && $QPfz$var$isDef(data.is)) {
    tag = data.is;
  }

  if (!tag) {
    // in case of component :is set to falsy value
    return $QPfz$var$createEmptyVNode();
  } // warn against non-primitive key


  if (process.env.NODE_ENV !== 'production' && $QPfz$var$isDef(data) && $QPfz$var$isDef(data.key) && !$QPfz$var$isPrimitive(data.key)) {
    {
      $QPfz$var$warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
  } // support single function children as default scoped slot


  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = {
      default: children[0]
    };
    children.length = 0;
  }

  if (normalizationType === $QPfz$var$ALWAYS_NORMALIZE) {
    children = $QPfz$var$normalizeChildren(children);
  } else if (normalizationType === $QPfz$var$SIMPLE_NORMALIZE) {
    children = $QPfz$var$simpleNormalizeChildren(children);
  }

  var vnode, ns;

  if (typeof tag === 'string') {
    var Ctor;
    ns = context.$vnode && context.$vnode.ns || $QPfz$var$config.getTagNamespace(tag);

    if ($QPfz$var$config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new $QPfz$var$VNode($QPfz$var$config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if ((!data || !data.pre) && $QPfz$var$isDef(Ctor = $QPfz$var$resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = $QPfz$var$createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new $QPfz$var$VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = $QPfz$var$createComponent(tag, data, context, children);
  }

  if (Array.isArray(vnode)) {
    return vnode;
  } else if ($QPfz$var$isDef(vnode)) {
    if ($QPfz$var$isDef(ns)) {
      $QPfz$var$applyNS(vnode, ns);
    }

    if ($QPfz$var$isDef(data)) {
      $QPfz$var$registerDeepBindings(data);
    }

    return vnode;
  } else {
    return $QPfz$var$createEmptyVNode();
  }
}

function $QPfz$var$applyNS(vnode, ns, force) {
  vnode.ns = ns;

  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }

  if ($QPfz$var$isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];

      if ($QPfz$var$isDef(child.tag) && ($QPfz$var$isUndef(child.ns) || $QPfz$var$isTrue(force) && child.tag !== 'svg')) {
        $QPfz$var$applyNS(child, ns, force);
      }
    }
  }
} // ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes


function $QPfz$var$registerDeepBindings(data) {
  if ($QPfz$var$isObject(data.style)) {
    $QPfz$var$traverse(data.style);
  }

  if ($QPfz$var$isObject(data.class)) {
    $QPfz$var$traverse(data.class);
  }
}
/*  */


function $QPfz$var$initRender(vm) {
  vm._vnode = null; // the root of the child tree

  vm._staticTrees = null; // v-once cached trees

  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = $QPfz$var$resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = $QPfz$var$emptyObject; // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates

  vm._c = function (a, b, c, d) {
    return $QPfz$var$createElement(vm, a, b, c, d, false);
  }; // normalization is always applied for the public version, used in
  // user-written render functions.


  vm.$createElement = function (a, b, c, d) {
    return $QPfz$var$createElement(vm, a, b, c, d, true);
  }; // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated


  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */

  if (process.env.NODE_ENV !== 'production') {
    $QPfz$var$defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || $QPfz$var$emptyObject, function () {
      !$QPfz$var$isUpdatingChildComponent && $QPfz$var$warn("$attrs is readonly.", vm);
    }, true);
    $QPfz$var$defineReactive$$1(vm, '$listeners', options._parentListeners || $QPfz$var$emptyObject, function () {
      !$QPfz$var$isUpdatingChildComponent && $QPfz$var$warn("$listeners is readonly.", vm);
    }, true);
  } else {
    $QPfz$var$defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || $QPfz$var$emptyObject, null, true);
    $QPfz$var$defineReactive$$1(vm, '$listeners', options._parentListeners || $QPfz$var$emptyObject, null, true);
  }
}

var $QPfz$var$currentRenderingInstance = null;

function $QPfz$var$renderMixin(Vue) {
  // install runtime convenience helpers
  $QPfz$var$installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return $QPfz$var$nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = $QPfz$var$normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
    } // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.


    vm.$vnode = _parentVnode; // render self

    var vnode;

    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      $QPfz$var$currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      $QPfz$var$handleError(e, vm, "render"); // return error render result,
      // or previous vnode to prevent render error causing blank component

      /* istanbul ignore else */

      if (process.env.NODE_ENV !== 'production' && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          $QPfz$var$handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      $QPfz$var$currentRenderingInstance = null;
    } // if the returned array contains only a single node, allow it


    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    } // return empty vnode in case the render function errored out


    if (!(vnode instanceof $QPfz$var$VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        $QPfz$var$warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }

      vnode = $QPfz$var$createEmptyVNode();
    } // set parent


    vnode.parent = _parentVnode;
    return vnode;
  };
}
/*  */


function $QPfz$var$ensureCtor(comp, base) {
  if (comp.__esModule || $QPfz$var$hasSymbol && comp[Symbol.toStringTag] === 'Module') {
    comp = comp.default;
  }

  return $QPfz$var$isObject(comp) ? base.extend(comp) : comp;
}

function $QPfz$var$createAsyncPlaceholder(factory, data, context, children, tag) {
  var node = $QPfz$var$createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = {
    data: data,
    context: context,
    children: children,
    tag: tag
  };
  return node;
}

function $QPfz$var$resolveAsyncComponent(factory, baseCtor) {
  if ($QPfz$var$isTrue(factory.error) && $QPfz$var$isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if ($QPfz$var$isDef(factory.resolved)) {
    return factory.resolved;
  }

  var owner = $QPfz$var$currentRenderingInstance;

  if (owner && $QPfz$var$isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if ($QPfz$var$isTrue(factory.loading) && $QPfz$var$isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (owner && !$QPfz$var$isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    owner.$on('hook:destroyed', function () {
      return $QPfz$var$remove(owners, owner);
    });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        owners[i].$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
      }
    };

    var resolve = $QPfz$var$once(function (res) {
      // cache resolved
      factory.resolved = $QPfz$var$ensureCtor(res, baseCtor); // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)

      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });
    var reject = $QPfz$var$once(function (reason) {
      process.env.NODE_ENV !== 'production' && $QPfz$var$warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));

      if ($QPfz$var$isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });
    var res = factory(resolve, reject);

    if ($QPfz$var$isObject(res)) {
      if ($QPfz$var$isPromise(res)) {
        // () => Promise
        if ($QPfz$var$isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if ($QPfz$var$isPromise(res.component)) {
        res.component.then(resolve, reject);

        if ($QPfz$var$isDef(res.error)) {
          factory.errorComp = $QPfz$var$ensureCtor(res.error, baseCtor);
        }

        if ($QPfz$var$isDef(res.loading)) {
          factory.loadingComp = $QPfz$var$ensureCtor(res.loading, baseCtor);

          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if ($QPfz$var$isUndef(factory.resolved) && $QPfz$var$isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if ($QPfz$var$isDef(res.timeout)) {
          setTimeout(function () {
            if ($QPfz$var$isUndef(factory.resolved)) {
              reject(process.env.NODE_ENV !== 'production' ? "timeout (" + res.timeout + "ms)" : null);
            }
          }, res.timeout);
        }
      }
    }

    sync = false; // return in case resolved synchronously

    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}
/*  */


function $QPfz$var$isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}
/*  */


function $QPfz$var$getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];

      if ($QPfz$var$isDef(c) && ($QPfz$var$isDef(c.componentOptions) || $QPfz$var$isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}
/*  */

/*  */


function $QPfz$var$initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false; // init parent attached events

  var listeners = vm.$options._parentListeners;

  if (listeners) {
    $QPfz$var$updateComponentListeners(vm, listeners);
  }
}

var $QPfz$var$target;

function $QPfz$var$add(event, fn) {
  $QPfz$var$target.$on(event, fn);
}

function $QPfz$var$remove$1(event, fn) {
  $QPfz$var$target.$off(event, fn);
}

function $QPfz$var$createOnceHandler(event, fn) {
  var _target = $QPfz$var$target;
  return function onceHandler() {
    var res = fn.apply(null, arguments);

    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  };
}

function $QPfz$var$updateComponentListeners(vm, listeners, oldListeners) {
  $QPfz$var$target = vm;
  $QPfz$var$updateListeners(listeners, oldListeners || {}, $QPfz$var$add, $QPfz$var$remove$1, $QPfz$var$createOnceHandler, vm);
  $QPfz$var$target = undefined;
}

function $QPfz$var$eventsMixin(Vue) {
  var hookRE = /^hook:/;

  Vue.prototype.$on = function (event, fn) {
    var vm = this;

    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup

      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }

    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;

    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }

    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this; // all

    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    } // array of events


    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }

      return vm;
    } // specific event


    var cbs = vm._events[event];

    if (!cbs) {
      return vm;
    }

    if (!fn) {
      vm._events[event] = null;
      return vm;
    } // specific handler


    var cb;
    var i = cbs.length;

    while (i--) {
      cb = cbs[i];

      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }

    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;

    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();

      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        $QPfz$var$tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + $QPfz$var$formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + $QPfz$var$hyphenate(event) + "\" instead of \"" + event + "\".");
      }
    }

    var cbs = vm._events[event];

    if (cbs) {
      cbs = cbs.length > 1 ? $QPfz$var$toArray(cbs) : cbs;
      var args = $QPfz$var$toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";

      for (var i = 0, l = cbs.length; i < l; i++) {
        $QPfz$var$invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }

    return vm;
  };
}
/*  */


var $QPfz$var$activeInstance = null;
var $QPfz$var$isUpdatingChildComponent = false;

function $QPfz$var$setActiveInstance(vm) {
  var prevActiveInstance = $QPfz$var$activeInstance;
  $QPfz$var$activeInstance = vm;
  return function () {
    $QPfz$var$activeInstance = prevActiveInstance;
  };
}

function $QPfz$var$initLifecycle(vm) {
  var options = vm.$options; // locate first non-abstract parent

  var parent = options.parent;

  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }

    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;
  vm.$children = [];
  vm.$refs = {};
  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function $QPfz$var$lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = $QPfz$var$setActiveInstance(vm);
    vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.

    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false
      /* removeOnly */
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }

    restoreActiveInstance(); // update __vue__ reference

    if (prevEl) {
      prevEl.__vue__ = null;
    }

    if (vm.$el) {
      vm.$el.__vue__ = vm;
    } // if parent is an HOC, update its $el as well


    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    } // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.

  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;

    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;

    if (vm._isBeingDestroyed) {
      return;
    }

    $QPfz$var$callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true; // remove self from parent

    var parent = vm.$parent;

    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      $QPfz$var$remove(parent.$children, vm);
    } // teardown watchers


    if (vm._watcher) {
      vm._watcher.teardown();
    }

    var i = vm._watchers.length;

    while (i--) {
      vm._watchers[i].teardown();
    } // remove reference from data ob
    // frozen object may not have observer.


    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    } // call the last hook...


    vm._isDestroyed = true; // invoke destroy hooks on current rendered tree

    vm.__patch__(vm._vnode, null); // fire destroyed hook


    $QPfz$var$callHook(vm, 'destroyed'); // turn off all instance listeners.

    vm.$off(); // remove __vue__ reference

    if (vm.$el) {
      vm.$el.__vue__ = null;
    } // release circular reference (#6759)


    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function $QPfz$var$mountComponent(vm, el, hydrating) {
  vm.$el = el;

  if (!vm.$options.render) {
    vm.$options.render = $QPfz$var$createEmptyVNode;

    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        $QPfz$var$warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        $QPfz$var$warn('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }

  $QPfz$var$callHook(vm, 'beforeMount');
  var updateComponent;
  /* istanbul ignore if */

  if (process.env.NODE_ENV !== 'production' && $QPfz$var$config.performance && $QPfz$var$mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;
      $QPfz$var$mark(startTag);

      var vnode = vm._render();

      $QPfz$var$mark(endTag);
      $QPfz$var$measure("vue " + name + " render", startTag, endTag);
      $QPfz$var$mark(startTag);

      vm._update(vnode, hydrating);

      $QPfz$var$mark(endTag);
      $QPfz$var$measure("vue " + name + " patch", startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  } // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined


  new $QPfz$var$Watcher(vm, updateComponent, $QPfz$var$noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        $QPfz$var$callHook(vm, 'beforeUpdate');
      }
    }
  }, true
  /* isRenderWatcher */
  );
  hydrating = false; // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook

  if (vm.$vnode == null) {
    vm._isMounted = true;
    $QPfz$var$callHook(vm, 'mounted');
  }

  return vm;
}

function $QPfz$var$updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  if (process.env.NODE_ENV !== 'production') {
    $QPfz$var$isUpdatingChildComponent = true;
  } // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.
  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.


  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== $QPfz$var$emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key); // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.

  var needsForceUpdate = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  hasDynamicScopedSlot);
  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }

  vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render

  vm.$attrs = parentVnode.data.attrs || $QPfz$var$emptyObject;
  vm.$listeners = listeners || $QPfz$var$emptyObject; // update props

  if (propsData && vm.$options.props) {
    $QPfz$var$toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];

    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?

      props[key] = $QPfz$var$validateProp(key, propOptions, propsData, vm);
    }

    $QPfz$var$toggleObserving(true); // keep a copy of raw propsData

    vm.$options.propsData = propsData;
  } // update listeners


  listeners = listeners || $QPfz$var$emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  $QPfz$var$updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

  if (needsForceUpdate) {
    vm.$slots = $QPfz$var$resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== 'production') {
    $QPfz$var$isUpdatingChildComponent = false;
  }
}

function $QPfz$var$isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }

  return false;
}

function $QPfz$var$activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;

    if ($QPfz$var$isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }

  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;

    for (var i = 0; i < vm.$children.length; i++) {
      $QPfz$var$activateChildComponent(vm.$children[i]);
    }

    $QPfz$var$callHook(vm, 'activated');
  }
}

function $QPfz$var$deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;

    if ($QPfz$var$isInInactiveTree(vm)) {
      return;
    }
  }

  if (!vm._inactive) {
    vm._inactive = true;

    for (var i = 0; i < vm.$children.length; i++) {
      $QPfz$var$deactivateChildComponent(vm.$children[i]);
    }

    $QPfz$var$callHook(vm, 'deactivated');
  }
}

function $QPfz$var$callHook(vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  $QPfz$var$pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";

  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      $QPfz$var$invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }

  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }

  $QPfz$var$popTarget();
}
/*  */


var $QPfz$var$MAX_UPDATE_COUNT = 100;
var $QPfz$var$queue = [];
var $QPfz$var$activatedChildren = [];
var $QPfz$var$has = {};
var $QPfz$var$circular = {};
var $QPfz$var$waiting = false;
var $QPfz$var$flushing = false;
var $QPfz$var$index = 0;
/**
 * Reset the scheduler's state.
 */

function $QPfz$var$resetSchedulerState() {
  $QPfz$var$index = $QPfz$var$queue.length = $QPfz$var$activatedChildren.length = 0;
  $QPfz$var$has = {};

  if (process.env.NODE_ENV !== 'production') {
    $QPfz$var$circular = {};
  }

  $QPfz$var$waiting = $QPfz$var$flushing = false;
} // Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.


var $QPfz$var$currentFlushTimestamp = 0; // Async edge case fix requires storing an event listener's attach timestamp.

var $QPfz$var$getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.

if ($QPfz$var$inBrowser && window.performance && typeof performance.now === 'function' && document.createEvent('Event').timeStamp <= performance.now()) {
  // if the event timestamp is bigger than the hi-res timestamp
  // (which is evaluated AFTER) it means the event is using a lo-res timestamp,
  // and we need to use the lo-res version for event listeners as well.
  $QPfz$var$getNow = function () {
    return performance.now();
  };
}
/**
 * Flush both queues and run the watchers.
 */


function $QPfz$var$flushSchedulerQueue() {
  $QPfz$var$currentFlushTimestamp = $QPfz$var$getNow();
  $QPfz$var$flushing = true;
  var watcher, id; // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.

  $QPfz$var$queue.sort(function (a, b) {
    return a.id - b.id;
  }); // do not cache length because more watchers might be pushed
  // as we run existing watchers

  for ($QPfz$var$index = 0; $QPfz$var$index < $QPfz$var$queue.length; $QPfz$var$index++) {
    watcher = $QPfz$var$queue[$QPfz$var$index];

    if (watcher.before) {
      watcher.before();
    }

    id = watcher.id;
    $QPfz$var$has[id] = null;
    watcher.run(); // in dev build, check and stop circular updates.

    if (process.env.NODE_ENV !== 'production' && $QPfz$var$has[id] != null) {
      $QPfz$var$circular[id] = ($QPfz$var$circular[id] || 0) + 1;

      if ($QPfz$var$circular[id] > $QPfz$var$MAX_UPDATE_COUNT) {
        $QPfz$var$warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
        break;
      }
    }
  } // keep copies of post queues before resetting state


  var activatedQueue = $QPfz$var$activatedChildren.slice();
  var updatedQueue = $QPfz$var$queue.slice();
  $QPfz$var$resetSchedulerState(); // call component updated and activated hooks

  $QPfz$var$callActivatedHooks(activatedQueue);
  $QPfz$var$callUpdatedHooks(updatedQueue); // devtool hook

  /* istanbul ignore if */

  if ($QPfz$var$devtools && $QPfz$var$config.devtools) {
    $QPfz$var$devtools.emit('flush');
  }
}

function $QPfz$var$callUpdatedHooks(queue) {
  var i = queue.length;

  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;

    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      $QPfz$var$callHook(vm, 'updated');
    }
  }
}
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */


function $QPfz$var$queueActivatedComponent(vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  $QPfz$var$activatedChildren.push(vm);
}

function $QPfz$var$callActivatedHooks(queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    $QPfz$var$activateChildComponent(queue[i], true
    /* true */
    );
  }
}
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */


function $QPfz$var$queueWatcher(watcher) {
  var id = watcher.id;

  if ($QPfz$var$has[id] == null) {
    $QPfz$var$has[id] = true;

    if (!$QPfz$var$flushing) {
      $QPfz$var$queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = $QPfz$var$queue.length - 1;

      while (i > $QPfz$var$index && $QPfz$var$queue[i].id > watcher.id) {
        i--;
      }

      $QPfz$var$queue.splice(i + 1, 0, watcher);
    } // queue the flush


    if (!$QPfz$var$waiting) {
      $QPfz$var$waiting = true;

      if (process.env.NODE_ENV !== 'production' && !$QPfz$var$config.async) {
        $QPfz$var$flushSchedulerQueue();
        return;
      }

      $QPfz$var$nextTick($QPfz$var$flushSchedulerQueue);
    }
  }
}
/*  */


var $QPfz$var$uid$2 = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */

var $QPfz$var$Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
  this.vm = vm;

  if (isRenderWatcher) {
    vm._watcher = this;
  }

  vm._watchers.push(this); // options


  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }

  this.cb = cb;
  this.id = ++$QPfz$var$uid$2; // uid for batching

  this.active = true;
  this.dirty = this.lazy; // for lazy watchers

  this.deps = [];
  this.newDeps = [];
  this.depIds = new $QPfz$var$_Set();
  this.newDepIds = new $QPfz$var$_Set();
  this.expression = process.env.NODE_ENV !== 'production' ? expOrFn.toString() : ''; // parse expression for getter

  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = $QPfz$var$parsePath(expOrFn);

    if (!this.getter) {
      this.getter = $QPfz$var$noop;
      process.env.NODE_ENV !== 'production' && $QPfz$var$warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
    }
  }

  this.value = this.lazy ? undefined : this.get();
};
/**
 * Evaluate the getter, and re-collect dependencies.
 */


$QPfz$var$Watcher.prototype.get = function get() {
  $QPfz$var$pushTarget(this);
  var value;
  var vm = this.vm;

  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      $QPfz$var$handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    } else {
      throw e;
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      $QPfz$var$traverse(value);
    }

    $QPfz$var$popTarget();
    this.cleanupDeps();
  }

  return value;
};
/**
 * Add a dependency to this directive.
 */


$QPfz$var$Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;

  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);

    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};
/**
 * Clean up for dependency collection.
 */


$QPfz$var$Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var i = this.deps.length;

  while (i--) {
    var dep = this.deps[i];

    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }

  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};
/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */


$QPfz$var$Watcher.prototype.update = function update() {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    $QPfz$var$queueWatcher(this);
  }
};
/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */


$QPfz$var$Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();

    if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    $QPfz$var$isObject(value) || this.deep) {
      // set new value
      var oldValue = this.value;
      this.value = value;

      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          $QPfz$var$handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};
/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */


$QPfz$var$Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};
/**
 * Depend on all deps collected by this watcher.
 */


$QPfz$var$Watcher.prototype.depend = function depend() {
  var i = this.deps.length;

  while (i--) {
    this.deps[i].depend();
  }
};
/**
 * Remove self from all dependencies' subscriber list.
 */


$QPfz$var$Watcher.prototype.teardown = function teardown() {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      $QPfz$var$remove(this.vm._watchers, this);
    }

    var i = this.deps.length;

    while (i--) {
      this.deps[i].removeSub(this);
    }

    this.active = false;
  }
};
/*  */


var $QPfz$var$sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: $QPfz$var$noop,
  set: $QPfz$var$noop
};

function $QPfz$var$proxy(target, sourceKey, key) {
  $QPfz$var$sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };

  $QPfz$var$sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };

  Object.defineProperty(target, key, $QPfz$var$sharedPropertyDefinition);
}

function $QPfz$var$initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;

  if (opts.props) {
    $QPfz$var$initProps(vm, opts.props);
  }

  if (opts.methods) {
    $QPfz$var$initMethods(vm, opts.methods);
  }

  if (opts.data) {
    $QPfz$var$initData(vm);
  } else {
    $QPfz$var$observe(vm._data = {}, true
    /* asRootData */
    );
  }

  if (opts.computed) {
    $QPfz$var$initComputed(vm, opts.computed);
  }

  if (opts.watch && opts.watch !== $QPfz$var$nativeWatch) {
    $QPfz$var$initWatch(vm, opts.watch);
  }
}

function $QPfz$var$initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.

  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent; // root instance props should be converted

  if (!isRoot) {
    $QPfz$var$toggleObserving(false);
  }

  var loop = function (key) {
    keys.push(key);
    var value = $QPfz$var$validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */

    if (process.env.NODE_ENV !== 'production') {
      var hyphenatedKey = $QPfz$var$hyphenate(key);

      if ($QPfz$var$isReservedAttribute(hyphenatedKey) || $QPfz$var$config.isReservedAttr(hyphenatedKey)) {
        $QPfz$var$warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
      }

      $QPfz$var$defineReactive$$1(props, key, value, function () {
        if (!isRoot && !$QPfz$var$isUpdatingChildComponent) {
          $QPfz$var$warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
        }
      });
    } else {
      $QPfz$var$defineReactive$$1(props, key, value);
    } // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.


    if (!(key in vm)) {
      $QPfz$var$proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop(key);

  $QPfz$var$toggleObserving(true);
}

function $QPfz$var$initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? $QPfz$var$getData(data, vm) : data || {};

  if (!$QPfz$var$isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && $QPfz$var$warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  } // proxy data on instance


  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;

  while (i--) {
    var key = keys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (methods && $QPfz$var$hasOwn(methods, key)) {
        $QPfz$var$warn("Method \"" + key + "\" has already been defined as a data property.", vm);
      }
    }

    if (props && $QPfz$var$hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && $QPfz$var$warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
    } else if (!$QPfz$var$isReserved(key)) {
      $QPfz$var$proxy(vm, "_data", key);
    }
  } // observe data


  $QPfz$var$observe(data, true
  /* asRootData */
  );
}

function $QPfz$var$getData(data, vm) {
  // #7573 disable dep collection when invoking data getters
  $QPfz$var$pushTarget();

  try {
    return data.call(vm, vm);
  } catch (e) {
    $QPfz$var$handleError(e, vm, "data()");
    return {};
  } finally {
    $QPfz$var$popTarget();
  }
}

var $QPfz$var$computedWatcherOptions = {
  lazy: true
};

function $QPfz$var$initComputed(vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR

  var isSSR = $QPfz$var$isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;

    if (process.env.NODE_ENV !== 'production' && getter == null) {
      $QPfz$var$warn("Getter is missing for computed property \"" + key + "\".", vm);
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new $QPfz$var$Watcher(vm, getter || $QPfz$var$noop, $QPfz$var$noop, $QPfz$var$computedWatcherOptions);
    } // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.


    if (!(key in vm)) {
      $QPfz$var$defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        $QPfz$var$warn("The computed property \"" + key + "\" is already defined in data.", vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        $QPfz$var$warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
      }
    }
  }
}

function $QPfz$var$defineComputed(target, key, userDef) {
  var shouldCache = !$QPfz$var$isServerRendering();

  if (typeof userDef === 'function') {
    $QPfz$var$sharedPropertyDefinition.get = shouldCache ? $QPfz$var$createComputedGetter(key) : $QPfz$var$createGetterInvoker(userDef);
    $QPfz$var$sharedPropertyDefinition.set = $QPfz$var$noop;
  } else {
    $QPfz$var$sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? $QPfz$var$createComputedGetter(key) : $QPfz$var$createGetterInvoker(userDef.get) : $QPfz$var$noop;
    $QPfz$var$sharedPropertyDefinition.set = userDef.set || $QPfz$var$noop;
  }

  if (process.env.NODE_ENV !== 'production' && $QPfz$var$sharedPropertyDefinition.set === $QPfz$var$noop) {
    $QPfz$var$sharedPropertyDefinition.set = function () {
      $QPfz$var$warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
    };
  }

  Object.defineProperty(target, key, $QPfz$var$sharedPropertyDefinition);
}

function $QPfz$var$createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];

    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }

      if ($QPfz$var$Dep.target) {
        watcher.depend();
      }

      return watcher.value;
    }
  };
}

function $QPfz$var$createGetterInvoker(fn) {
  return function computedGetter() {
    return fn.call(this, this);
  };
}

function $QPfz$var$initMethods(vm, methods) {
  var props = vm.$options.props;

  for (var key in methods) {
    if (process.env.NODE_ENV !== 'production') {
      if (typeof methods[key] !== 'function') {
        $QPfz$var$warn("Method \"" + key + "\" has type \"" + typeof methods[key] + "\" in the component definition. " + "Did you reference the function correctly?", vm);
      }

      if (props && $QPfz$var$hasOwn(props, key)) {
        $QPfz$var$warn("Method \"" + key + "\" has already been defined as a prop.", vm);
      }

      if (key in vm && $QPfz$var$isReserved(key)) {
        $QPfz$var$warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
      }
    }

    vm[key] = typeof methods[key] !== 'function' ? $QPfz$var$noop : $QPfz$var$bind(methods[key], vm);
  }
}

function $QPfz$var$initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];

    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        $QPfz$var$createWatcher(vm, key, handler[i]);
      }
    } else {
      $QPfz$var$createWatcher(vm, key, handler);
    }
  }
}

function $QPfz$var$createWatcher(vm, expOrFn, handler, options) {
  if ($QPfz$var$isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }

  if (typeof handler === 'string') {
    handler = vm[handler];
  }

  return vm.$watch(expOrFn, handler, options);
}

function $QPfz$var$stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};

  dataDef.get = function () {
    return this._data;
  };

  var propsDef = {};

  propsDef.get = function () {
    return this._props;
  };

  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function () {
      $QPfz$var$warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };

    propsDef.set = function () {
      $QPfz$var$warn("$props is readonly.", this);
    };
  }

  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);
  Vue.prototype.$set = $QPfz$var$set;
  Vue.prototype.$delete = $QPfz$var$del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;

    if ($QPfz$var$isPlainObject(cb)) {
      return $QPfz$var$createWatcher(vm, expOrFn, cb, options);
    }

    options = options || {};
    options.user = true;
    var watcher = new $QPfz$var$Watcher(vm, expOrFn, cb, options);

    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        $QPfz$var$handleError(error, vm, "callback for immediate watcher \"" + watcher.expression + "\"");
      }
    }

    return function unwatchFn() {
      watcher.teardown();
    };
  };
}
/*  */


var $QPfz$var$uid$3 = 0;

function $QPfz$var$initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this; // a uid

    vm._uid = $QPfz$var$uid$3++;
    var startTag, endTag;
    /* istanbul ignore if */

    if (process.env.NODE_ENV !== 'production' && $QPfz$var$config.performance && $QPfz$var$mark) {
      startTag = "vue-perf-start:" + vm._uid;
      endTag = "vue-perf-end:" + vm._uid;
      $QPfz$var$mark(startTag);
    } // a flag to avoid this being observed


    vm._isVue = true; // merge options

    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      $QPfz$var$initInternalComponent(vm, options);
    } else {
      vm.$options = $QPfz$var$mergeOptions($QPfz$var$resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    /* istanbul ignore else */


    if (process.env.NODE_ENV !== 'production') {
      $QPfz$var$initProxy(vm);
    } else {
      vm._renderProxy = vm;
    } // expose real self


    vm._self = vm;
    $QPfz$var$initLifecycle(vm);
    $QPfz$var$initEvents(vm);
    $QPfz$var$initRender(vm);
    $QPfz$var$callHook(vm, 'beforeCreate');
    $QPfz$var$initInjections(vm); // resolve injections before data/props

    $QPfz$var$initState(vm);
    $QPfz$var$initProvide(vm); // resolve provide after data/props

    $QPfz$var$callHook(vm, 'created');
    /* istanbul ignore if */

    if (process.env.NODE_ENV !== 'production' && $QPfz$var$config.performance && $QPfz$var$mark) {
      vm._name = $QPfz$var$formatComponentName(vm, false);
      $QPfz$var$mark(endTag);
      $QPfz$var$measure("vue " + vm._name + " init", startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function $QPfz$var$initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function $QPfz$var$resolveConstructorOptions(Ctor) {
  var options = Ctor.options;

  if (Ctor.super) {
    var superOptions = $QPfz$var$resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;

    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

      var modifiedOptions = $QPfz$var$resolveModifiedOptions(Ctor); // update base extend options

      if (modifiedOptions) {
        $QPfz$var$extend(Ctor.extendOptions, modifiedOptions);
      }

      options = Ctor.options = $QPfz$var$mergeOptions(superOptions, Ctor.extendOptions);

      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }

  return options;
}

function $QPfz$var$resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;

  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }

      modified[key] = latest[key];
    }
  }

  return modified;
}

function $QPfz$export$default(options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof $QPfz$export$default)) {
    $QPfz$var$warn('Vue is a constructor and should be called with the `new` keyword');
  }

  this._init(options);
}

$QPfz$var$initMixin($QPfz$export$default);
$QPfz$var$stateMixin($QPfz$export$default);
$QPfz$var$eventsMixin($QPfz$export$default);
$QPfz$var$lifecycleMixin($QPfz$export$default);
$QPfz$var$renderMixin($QPfz$export$default);
/*  */

function $QPfz$var$initUse(Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);

    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    } // additional parameters


    var args = $QPfz$var$toArray(arguments, 1);
    args.unshift(this);

    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }

    installedPlugins.push(plugin);
    return this;
  };
}
/*  */


function $QPfz$var$initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = $QPfz$var$mergeOptions(this.options, mixin);
    return this;
  };
}
/*  */


function $QPfz$var$initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;
  /**
   * Class inheritance
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;

    if (process.env.NODE_ENV !== 'production' && name) {
      $QPfz$var$validateComponentName(name);
    }

    var Sub = function VueComponent(options) {
      this._init(options);
    };

    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = $QPfz$var$mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.

    if (Sub.options.props) {
      $QPfz$var$initProps$1(Sub);
    }

    if (Sub.options.computed) {
      $QPfz$var$initComputed$1(Sub);
    } // allow further extension/mixin/plugin usage


    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use; // create asset registers, so extended classes
    // can have their private assets too.

    $QPfz$var$ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    }); // enable recursive self-lookup

    if (name) {
      Sub.options.components[name] = Sub;
    } // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.


    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = $QPfz$var$extend({}, Sub.options); // cache constructor

    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function $QPfz$var$initProps$1(Comp) {
  var props = Comp.options.props;

  for (var key in props) {
    $QPfz$var$proxy(Comp.prototype, "_props", key);
  }
}

function $QPfz$var$initComputed$1(Comp) {
  var computed = Comp.options.computed;

  for (var key in computed) {
    $QPfz$var$defineComputed(Comp.prototype, key, computed[key]);
  }
}
/*  */


function $QPfz$var$initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  $QPfz$var$ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          $QPfz$var$validateComponentName(id);
        }

        if (type === 'component' && $QPfz$var$isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }

        if (type === 'directive' && typeof definition === 'function') {
          definition = {
            bind: definition,
            update: definition
          };
        }

        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}
/*  */


function $QPfz$var$getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function $QPfz$var$matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if ($QPfz$var$isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function $QPfz$var$pruneCache(keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;

  for (var key in cache) {
    var cachedNode = cache[key];

    if (cachedNode) {
      var name = $QPfz$var$getComponentName(cachedNode.componentOptions);

      if (name && !filter(name)) {
        $QPfz$var$pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function $QPfz$var$pruneCacheEntry(cache, key, keys, current) {
  var cached$$1 = cache[key];

  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }

  cache[key] = null;
  $QPfz$var$remove(keys, key);
}

var $QPfz$var$patternTypes = [String, RegExp, Array];
var $QPfz$var$KeepAlive = {
  name: 'keep-alive',
  abstract: true,
  props: {
    include: $QPfz$var$patternTypes,
    exclude: $QPfz$var$patternTypes,
    max: [String, Number]
  },
  created: function created() {
    this.cache = Object.create(null);
    this.keys = [];
  },
  destroyed: function destroyed() {
    for (var key in this.cache) {
      $QPfz$var$pruneCacheEntry(this.cache, key, this.keys);
    }
  },
  mounted: function mounted() {
    var this$1 = this;
    this.$watch('include', function (val) {
      $QPfz$var$pruneCache(this$1, function (name) {
        return $QPfz$var$matches(val, name);
      });
    });
    this.$watch('exclude', function (val) {
      $QPfz$var$pruneCache(this$1, function (name) {
        return !$QPfz$var$matches(val, name);
      });
    });
  },
  render: function render() {
    var slot = this.$slots.default;
    var vnode = $QPfz$var$getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;

    if (componentOptions) {
      // check pattern
      var name = $QPfz$var$getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;

      if ( // not included
      include && (!name || !$QPfz$var$matches(include, name)) || // excluded
      exclude && name && $QPfz$var$matches(exclude, name)) {
        return vnode;
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null // same constructor may get registered as different local components
      // so cid alone is not enough (#3269)
      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;

      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance; // make current key freshest

        $QPfz$var$remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key); // prune oldest entry

        if (this.max && keys.length > parseInt(this.max)) {
          $QPfz$var$pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }

    return vnode || slot && slot[0];
  }
};
var $QPfz$var$builtInComponents = {
  KeepAlive: $QPfz$var$KeepAlive
};
/*  */

function $QPfz$var$initGlobalAPI(Vue) {
  // config
  var configDef = {};

  configDef.get = function () {
    return $QPfz$var$config;
  };

  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      $QPfz$var$warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }

  Object.defineProperty(Vue, 'config', configDef); // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.

  Vue.util = {
    warn: $QPfz$var$warn,
    extend: $QPfz$var$extend,
    mergeOptions: $QPfz$var$mergeOptions,
    defineReactive: $QPfz$var$defineReactive$$1
  };
  Vue.set = $QPfz$var$set;
  Vue.delete = $QPfz$var$del;
  Vue.nextTick = $QPfz$var$nextTick; // 2.6 explicit observable API

  Vue.observable = function (obj) {
    $QPfz$var$observe(obj);
    return obj;
  };

  Vue.options = Object.create(null);
  $QPfz$var$ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  }); // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.

  Vue.options._base = Vue;
  $QPfz$var$extend(Vue.options.components, $QPfz$var$builtInComponents);
  $QPfz$var$initUse(Vue);
  $QPfz$var$initMixin$1(Vue);
  $QPfz$var$initExtend(Vue);
  $QPfz$var$initAssetRegisters(Vue);
}

$QPfz$var$initGlobalAPI($QPfz$export$default);
Object.defineProperty($QPfz$export$default.prototype, '$isServer', {
  get: $QPfz$var$isServerRendering
});
Object.defineProperty($QPfz$export$default.prototype, '$ssrContext', {
  get: function get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext;
  }
}); // expose FunctionalRenderContext for ssr runtime helper installation

Object.defineProperty($QPfz$export$default, 'FunctionalRenderContext', {
  value: $QPfz$var$FunctionalRenderContext
});
$QPfz$export$default.version = '2.6.9';
/*  */
// these are reserved for web because they are directly compiled away
// during template compilation

var $QPfz$var$isReservedAttr = $QPfz$var$makeMap('style,class'); // attributes that should be using props for binding

var $QPfz$var$acceptValue = $QPfz$var$makeMap('input,textarea,option,select,progress');

var $QPfz$var$mustUseProp = function (tag, type, attr) {
  return attr === 'value' && $QPfz$var$acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var $QPfz$var$isEnumeratedAttr = $QPfz$var$makeMap('contenteditable,draggable,spellcheck');
var $QPfz$var$isValidContentEditableValue = $QPfz$var$makeMap('events,caret,typing,plaintext-only');

var $QPfz$var$convertEnumeratedValue = function (key, value) {
  return $QPfz$var$isFalsyAttrValue(value) || value === 'false' ? 'false' // allow arbitrary string value for contenteditable
  : key === 'contenteditable' && $QPfz$var$isValidContentEditableValue(value) ? value : 'true';
};

var $QPfz$var$isBooleanAttr = $QPfz$var$makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');
var $QPfz$var$xlinkNS = 'http://www.w3.org/1999/xlink';

var $QPfz$var$isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var $QPfz$var$getXlinkProp = function (name) {
  return $QPfz$var$isXlink(name) ? name.slice(6, name.length) : '';
};

var $QPfz$var$isFalsyAttrValue = function (val) {
  return val == null || val === false;
};
/*  */


function $QPfz$var$genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;

  while ($QPfz$var$isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;

    if (childNode && childNode.data) {
      data = $QPfz$var$mergeClassData(childNode.data, data);
    }
  }

  while ($QPfz$var$isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = $QPfz$var$mergeClassData(data, parentNode.data);
    }
  }

  return $QPfz$var$renderClass(data.staticClass, data.class);
}

function $QPfz$var$mergeClassData(child, parent) {
  return {
    staticClass: $QPfz$var$concat(child.staticClass, parent.staticClass),
    class: $QPfz$var$isDef(child.class) ? [child.class, parent.class] : parent.class
  };
}

function $QPfz$var$renderClass(staticClass, dynamicClass) {
  if ($QPfz$var$isDef(staticClass) || $QPfz$var$isDef(dynamicClass)) {
    return $QPfz$var$concat(staticClass, $QPfz$var$stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */


  return '';
}

function $QPfz$var$concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function $QPfz$var$stringifyClass(value) {
  if (Array.isArray(value)) {
    return $QPfz$var$stringifyArray(value);
  }

  if ($QPfz$var$isObject(value)) {
    return $QPfz$var$stringifyObject(value);
  }

  if (typeof value === 'string') {
    return value;
  }
  /* istanbul ignore next */


  return '';
}

function $QPfz$var$stringifyArray(value) {
  var res = '';
  var stringified;

  for (var i = 0, l = value.length; i < l; i++) {
    if ($QPfz$var$isDef(stringified = $QPfz$var$stringifyClass(value[i])) && stringified !== '') {
      if (res) {
        res += ' ';
      }

      res += stringified;
    }
  }

  return res;
}

function $QPfz$var$stringifyObject(value) {
  var res = '';

  for (var key in value) {
    if (value[key]) {
      if (res) {
        res += ' ';
      }

      res += key;
    }
  }

  return res;
}
/*  */


var $QPfz$var$namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};
var $QPfz$var$isHTMLTag = $QPfz$var$makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
// contain child elements.

var $QPfz$var$isSVG = $QPfz$var$makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var $QPfz$var$isReservedTag = function (tag) {
  return $QPfz$var$isHTMLTag(tag) || $QPfz$var$isSVG(tag);
};

function $QPfz$var$getTagNamespace(tag) {
  if ($QPfz$var$isSVG(tag)) {
    return 'svg';
  } // basic support for MathML
  // note it doesn't support other MathML elements being component roots


  if (tag === 'math') {
    return 'math';
  }
}

var $QPfz$var$unknownElementCache = Object.create(null);

function $QPfz$var$isUnknownElement(tag) {
  /* istanbul ignore if */
  if (!$QPfz$var$inBrowser) {
    return true;
  }

  if ($QPfz$var$isReservedTag(tag)) {
    return false;
  }

  tag = tag.toLowerCase();
  /* istanbul ignore if */

  if ($QPfz$var$unknownElementCache[tag] != null) {
    return $QPfz$var$unknownElementCache[tag];
  }

  var el = document.createElement(tag);

  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return $QPfz$var$unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return $QPfz$var$unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

var $QPfz$var$isTextInputType = $QPfz$var$makeMap('text,number,password,search,email,tel,url');
/*  */

/**
 * Query an element selector if it's not an element already.
 */

function $QPfz$var$query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);

    if (!selected) {
      process.env.NODE_ENV !== 'production' && $QPfz$var$warn('Cannot find element: ' + el);
      return document.createElement('div');
    }

    return selected;
  } else {
    return el;
  }
}
/*  */


function $QPfz$var$createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);

  if (tagName !== 'select') {
    return elm;
  } // false or null will remove the attribute but undefined will not


  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }

  return elm;
}

function $QPfz$var$createElementNS(namespace, tagName) {
  return document.createElementNS($QPfz$var$namespaceMap[namespace], tagName);
}

function $QPfz$var$createTextNode(text) {
  return document.createTextNode(text);
}

function $QPfz$var$createComment(text) {
  return document.createComment(text);
}

function $QPfz$var$insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function $QPfz$var$removeChild(node, child) {
  node.removeChild(child);
}

function $QPfz$var$appendChild(node, child) {
  node.appendChild(child);
}

function $QPfz$var$parentNode(node) {
  return node.parentNode;
}

function $QPfz$var$nextSibling(node) {
  return node.nextSibling;
}

function $QPfz$var$tagName(node) {
  return node.tagName;
}

function $QPfz$var$setTextContent(node, text) {
  node.textContent = text;
}

function $QPfz$var$setStyleScope(node, scopeId) {
  node.setAttribute(scopeId, '');
}

var $QPfz$var$nodeOps =
/*#__PURE__*/
Object.freeze({
  createElement: $QPfz$var$createElement$1,
  createElementNS: $QPfz$var$createElementNS,
  createTextNode: $QPfz$var$createTextNode,
  createComment: $QPfz$var$createComment,
  insertBefore: $QPfz$var$insertBefore,
  removeChild: $QPfz$var$removeChild,
  appendChild: $QPfz$var$appendChild,
  parentNode: $QPfz$var$parentNode,
  nextSibling: $QPfz$var$nextSibling,
  tagName: $QPfz$var$tagName,
  setTextContent: $QPfz$var$setTextContent,
  setStyleScope: $QPfz$var$setStyleScope
});
/*  */

var $QPfz$var$ref = {
  create: function create(_, vnode) {
    $QPfz$var$registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      $QPfz$var$registerRef(oldVnode, true);
      $QPfz$var$registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    $QPfz$var$registerRef(vnode, true);
  }
};

function $QPfz$var$registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;

  if (!$QPfz$var$isDef(key)) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;

  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      $QPfz$var$remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}
/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */


var $QPfz$var$emptyNode = new $QPfz$var$VNode('', {}, []);
var $QPfz$var$hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function $QPfz$var$sameVnode(a, b) {
  return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && $QPfz$var$isDef(a.data) === $QPfz$var$isDef(b.data) && $QPfz$var$sameInputType(a, b) || $QPfz$var$isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && $QPfz$var$isUndef(b.asyncFactory.error));
}

function $QPfz$var$sameInputType(a, b) {
  if (a.tag !== 'input') {
    return true;
  }

  var i;
  var typeA = $QPfz$var$isDef(i = a.data) && $QPfz$var$isDef(i = i.attrs) && i.type;
  var typeB = $QPfz$var$isDef(i = b.data) && $QPfz$var$isDef(i = i.attrs) && i.type;
  return typeA === typeB || $QPfz$var$isTextInputType(typeA) && $QPfz$var$isTextInputType(typeB);
}

function $QPfz$var$createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};

  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;

    if ($QPfz$var$isDef(key)) {
      map[key] = i;
    }
  }

  return map;
}

function $QPfz$var$createPatchFunction(backend) {
  var i, j;
  var cbs = {};
  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < $QPfz$var$hooks.length; ++i) {
    cbs[$QPfz$var$hooks[i]] = [];

    for (j = 0; j < modules.length; ++j) {
      if ($QPfz$var$isDef(modules[j][$QPfz$var$hooks[i]])) {
        cbs[$QPfz$var$hooks[i]].push(modules[j][$QPfz$var$hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new $QPfz$var$VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove$$1() {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }

    remove$$1.listeners = listeners;
    return remove$$1;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el); // element may have already been removed due to v-html / v-text

    if ($QPfz$var$isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1(vnode, inVPre) {
    return !inVPre && !vnode.ns && !($QPfz$var$config.ignoredElements.length && $QPfz$var$config.ignoredElements.some(function (ignore) {
      return $QPfz$var$isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
    })) && $QPfz$var$config.isUnknownElement(vnode.tag);
  }

  var creatingElmInVPre = 0;

  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
    if ($QPfz$var$isDef(vnode.elm) && $QPfz$var$isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = $QPfz$var$cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check

    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;

    if ($QPfz$var$isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          creatingElmInVPre++;
        }

        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          $QPfz$var$warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }

      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);
      /* istanbul ignore if */

      {
        createChildren(vnode, children, insertedVnodeQueue);

        if ($QPfz$var$isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }

        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if ($QPfz$var$isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;

    if ($QPfz$var$isDef(i)) {
      var isReactivated = $QPfz$var$isDef(vnode.componentInstance) && i.keepAlive;

      if ($QPfz$var$isDef(i = i.hook) && $QPfz$var$isDef(i = i.init)) {
        i(vnode, false
        /* hydrating */
        );
      } // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.


      if ($QPfz$var$isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);

        if ($QPfz$var$isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }

        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if ($QPfz$var$isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }

    vnode.elm = vnode.componentInstance.$el;

    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      $QPfz$var$registerRef(vnode); // make sure to invoke the insert hook

      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i; // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.

    var innerNode = vnode;

    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;

      if ($QPfz$var$isDef(i = innerNode.data) && $QPfz$var$isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i]($QPfz$var$emptyNode, innerNode);
        }

        insertedVnodeQueue.push(innerNode);
        break;
      }
    } // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself


    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref$$1) {
    if ($QPfz$var$isDef(parent)) {
      if ($QPfz$var$isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (process.env.NODE_ENV !== 'production') {
        checkDuplicateKeys(children);
      }

      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if ($QPfz$var$isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }

    return $QPfz$var$isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1]($QPfz$var$emptyNode, vnode);
    }

    i = vnode.data.hook; // Reuse variable

    if ($QPfz$var$isDef(i)) {
      if ($QPfz$var$isDef(i.create)) {
        i.create($QPfz$var$emptyNode, vnode);
      }

      if ($QPfz$var$isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  } // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.


  function setScope(vnode) {
    var i;

    if ($QPfz$var$isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;

      while (ancestor) {
        if ($QPfz$var$isDef(i = ancestor.context) && $QPfz$var$isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }

        ancestor = ancestor.parent;
      }
    } // for slot content they should also get the scopeId from the host instance.


    if ($QPfz$var$isDef(i = $QPfz$var$activeInstance) && i !== vnode.context && i !== vnode.fnContext && $QPfz$var$isDef(i = i.$options._scopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;

    if ($QPfz$var$isDef(data)) {
      if ($QPfz$var$isDef(i = data.hook) && $QPfz$var$isDef(i = i.destroy)) {
        i(vnode);
      }

      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }

    if ($QPfz$var$isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];

      if ($QPfz$var$isDef(ch)) {
        if ($QPfz$var$isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if ($QPfz$var$isDef(rm) || $QPfz$var$isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;

      if ($QPfz$var$isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } // recursively invoke hooks on child component root node


      if ($QPfz$var$isDef(i = vnode.componentInstance) && $QPfz$var$isDef(i = i._vnode) && $QPfz$var$isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }

      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }

      if ($QPfz$var$isDef(i = vnode.data.hook) && $QPfz$var$isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm; // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions

    var canMove = !removeOnly;

    if (process.env.NODE_ENV !== 'production') {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if ($QPfz$var$isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if ($QPfz$var$isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if ($QPfz$var$sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if ($QPfz$var$sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if ($QPfz$var$sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if ($QPfz$var$sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if ($QPfz$var$isUndef(oldKeyToIdx)) {
          oldKeyToIdx = $QPfz$var$createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }

        idxInOld = $QPfz$var$isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);

        if ($QPfz$var$isUndef(idxInOld)) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];

          if ($QPfz$var$sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }

        newStartVnode = newCh[++newStartIdx];
      }
    }

    if (oldStartIdx > oldEndIdx) {
      refElm = $QPfz$var$isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys(children) {
    var seenKeys = {};

    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;

      if ($QPfz$var$isDef(key)) {
        if (seenKeys[key]) {
          $QPfz$var$warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld(node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];

      if ($QPfz$var$isDef(c) && $QPfz$var$sameVnode(node, c)) {
        return i;
      }
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    if ($QPfz$var$isDef(vnode.elm) && $QPfz$var$isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = $QPfz$var$cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if ($QPfz$var$isTrue(oldVnode.isAsyncPlaceholder)) {
      if ($QPfz$var$isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }

      return;
    } // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.


    if ($QPfz$var$isTrue(vnode.isStatic) && $QPfz$var$isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && ($QPfz$var$isTrue(vnode.isCloned) || $QPfz$var$isTrue(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    var i;
    var data = vnode.data;

    if ($QPfz$var$isDef(data) && $QPfz$var$isDef(i = data.hook) && $QPfz$var$isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;

    if ($QPfz$var$isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }

      if ($QPfz$var$isDef(i = data.hook) && $QPfz$var$isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }

    if ($QPfz$var$isUndef(vnode.text)) {
      if ($QPfz$var$isDef(oldCh) && $QPfz$var$isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if ($QPfz$var$isDef(ch)) {
        if (process.env.NODE_ENV !== 'production') {
          checkDuplicateKeys(ch);
        }

        if ($QPfz$var$isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }

        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if ($QPfz$var$isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if ($QPfz$var$isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }

    if ($QPfz$var$isDef(data)) {
      if ($QPfz$var$isDef(i = data.hook) && $QPfz$var$isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if ($QPfz$var$isTrue(initial) && $QPfz$var$isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false; // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).

  var isRenderedModule = $QPfz$var$makeMap('attrs,class,staticClass,staticStyle,key'); // Note: this is a browser-only function so we can assume elms are DOM nodes.

  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || data && data.pre;
    vnode.elm = elm;

    if ($QPfz$var$isTrue(vnode.isComment) && $QPfz$var$isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    } // assert node match


    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false;
      }
    }

    if ($QPfz$var$isDef(data)) {
      if ($QPfz$var$isDef(i = data.hook) && $QPfz$var$isDef(i = i.init)) {
        i(vnode, true
        /* hydrating */
        );
      }

      if ($QPfz$var$isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }

    if ($QPfz$var$isDef(tag)) {
      if ($QPfz$var$isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if ($QPfz$var$isDef(i = data) && $QPfz$var$isDef(i = i.domProps) && $QPfz$var$isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }

              return false;
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;

            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }

              childNode = childNode.nextSibling;
            } // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.


            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }

              return false;
            }
          }
        }
      }

      if ($QPfz$var$isDef(data)) {
        var fullInvoke = false;

        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }

        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          $QPfz$var$traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }

    return true;
  }

  function assertNodeMatch(node, vnode, inVPre) {
    if ($QPfz$var$isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly) {
    if ($QPfz$var$isUndef(vnode)) {
      if ($QPfz$var$isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }

      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if ($QPfz$var$isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = $QPfz$var$isDef(oldVnode.nodeType);

      if (!isRealElement && $QPfz$var$sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute($QPfz$var$SSR_ATTR)) {
            oldVnode.removeAttribute($QPfz$var$SSR_ATTR);
            hydrating = true;
          }

          if ($QPfz$var$isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (process.env.NODE_ENV !== 'production') {
              $QPfz$var$warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          } // either not server-rendered, or hydration failed.
          // create an empty node and replace it


          oldVnode = emptyNodeAt(oldVnode);
        } // replacing existing element


        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm); // create new node

        createElm(vnode, insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)); // update parent placeholder node element, recursively

        if ($QPfz$var$isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);

          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }

            ancestor.elm = vnode.elm;

            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1]($QPfz$var$emptyNode, ancestor);
              } // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.


              var insert = ancestor.data.hook.insert;

              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              $QPfz$var$registerRef(ancestor);
            }

            ancestor = ancestor.parent;
          }
        } // destroy old node


        if ($QPfz$var$isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if ($QPfz$var$isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}
/*  */


var $QPfz$var$directives = {
  create: $QPfz$var$updateDirectives,
  update: $QPfz$var$updateDirectives,
  destroy: function unbindDirectives(vnode) {
    $QPfz$var$updateDirectives(vnode, $QPfz$var$emptyNode);
  }
};

function $QPfz$var$updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    $QPfz$var$_update(oldVnode, vnode);
  }
}

function $QPfz$var$_update(oldVnode, vnode) {
  var isCreate = oldVnode === $QPfz$var$emptyNode;
  var isDestroy = vnode === $QPfz$var$emptyNode;
  var oldDirs = $QPfz$var$normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = $QPfz$var$normalizeDirectives$1(vnode.data.directives, vnode.context);
  var dirsWithInsert = [];
  var dirsWithPostpatch = [];
  var key, oldDir, dir;

  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];

    if (!oldDir) {
      // new directive, bind
      $QPfz$var$callHook$1(dir, 'bind', vnode, oldVnode);

      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      $QPfz$var$callHook$1(dir, 'update', vnode, oldVnode);

      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        $QPfz$var$callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };

    if (isCreate) {
      $QPfz$var$mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    $QPfz$var$mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        $QPfz$var$callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        $QPfz$var$callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var $QPfz$var$emptyModifiers = Object.create(null);

function $QPfz$var$normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);

  if (!dirs) {
    // $flow-disable-line
    return res;
  }

  var i, dir;

  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];

    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = $QPfz$var$emptyModifiers;
    }

    res[$QPfz$var$getRawDirName(dir)] = dir;
    dir.def = $QPfz$var$resolveAsset(vm.$options, 'directives', dir.name, true);
  } // $flow-disable-line


  return res;
}

function $QPfz$var$getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function $QPfz$var$callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];

  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      $QPfz$var$handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
    }
  }
}

var $QPfz$var$baseModules = [$QPfz$var$ref, $QPfz$var$directives];
/*  */

function $QPfz$var$updateAttrs(oldVnode, vnode) {
  var opts = vnode.componentOptions;

  if ($QPfz$var$isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return;
  }

  if ($QPfz$var$isUndef(oldVnode.data.attrs) && $QPfz$var$isUndef(vnode.data.attrs)) {
    return;
  }

  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {}; // clone observed objects, as the user probably wants to mutate it

  if ($QPfz$var$isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = $QPfz$var$extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];

    if (old !== cur) {
      $QPfz$var$setAttr(elm, key, cur);
    }
  } // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max

  /* istanbul ignore if */


  if (($QPfz$var$isIE || $QPfz$var$isEdge) && attrs.value !== oldAttrs.value) {
    $QPfz$var$setAttr(elm, 'value', attrs.value);
  }

  for (key in oldAttrs) {
    if ($QPfz$var$isUndef(attrs[key])) {
      if ($QPfz$var$isXlink(key)) {
        elm.removeAttributeNS($QPfz$var$xlinkNS, $QPfz$var$getXlinkProp(key));
      } else if (!$QPfz$var$isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function $QPfz$var$setAttr(el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    $QPfz$var$baseSetAttr(el, key, value);
  } else if ($QPfz$var$isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if ($QPfz$var$isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
      el.setAttribute(key, value);
    }
  } else if ($QPfz$var$isEnumeratedAttr(key)) {
    el.setAttribute(key, $QPfz$var$convertEnumeratedValue(key, value));
  } else if ($QPfz$var$isXlink(key)) {
    if ($QPfz$var$isFalsyAttrValue(value)) {
      el.removeAttributeNS($QPfz$var$xlinkNS, $QPfz$var$getXlinkProp(key));
    } else {
      el.setAttributeNS($QPfz$var$xlinkNS, key, value);
    }
  } else {
    $QPfz$var$baseSetAttr(el, key, value);
  }
}

function $QPfz$var$baseSetAttr(el, key, value) {
  if ($QPfz$var$isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.

    /* istanbul ignore if */
    if ($QPfz$var$isIE && !$QPfz$var$isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && value !== '' && !el.__ieph) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };

      el.addEventListener('input', blocker); // $flow-disable-line

      el.__ieph = true;
      /* IE placeholder patched */
    }

    el.setAttribute(key, value);
  }
}

var $QPfz$var$attrs = {
  create: $QPfz$var$updateAttrs,
  update: $QPfz$var$updateAttrs
};
/*  */

function $QPfz$var$updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;

  if ($QPfz$var$isUndef(data.staticClass) && $QPfz$var$isUndef(data.class) && ($QPfz$var$isUndef(oldData) || $QPfz$var$isUndef(oldData.staticClass) && $QPfz$var$isUndef(oldData.class))) {
    return;
  }

  var cls = $QPfz$var$genClassForVnode(vnode); // handle transition classes

  var transitionClass = el._transitionClasses;

  if ($QPfz$var$isDef(transitionClass)) {
    cls = $QPfz$var$concat(cls, $QPfz$var$stringifyClass(transitionClass));
  } // set the class


  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var $QPfz$var$klass = {
  create: $QPfz$var$updateClass,
  update: $QPfz$var$updateClass
};
/*  */

/*  */

/*  */

/*  */
// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.

var $QPfz$var$RANGE_TOKEN = '__r';
var $QPfz$var$CHECKBOX_RADIO_TOKEN = '__c';
/*  */
// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.

function $QPfz$var$normalizeEvents(on) {
  /* istanbul ignore if */
  if ($QPfz$var$isDef(on[$QPfz$var$RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = $QPfz$var$isIE ? 'change' : 'input';
    on[event] = [].concat(on[$QPfz$var$RANGE_TOKEN], on[event] || []);
    delete on[$QPfz$var$RANGE_TOKEN];
  } // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4

  /* istanbul ignore if */


  if ($QPfz$var$isDef(on[$QPfz$var$CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[$QPfz$var$CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[$QPfz$var$CHECKBOX_RADIO_TOKEN];
  }
}

var $QPfz$var$target$1;

function $QPfz$var$createOnceHandler$1(event, handler, capture) {
  var _target = $QPfz$var$target$1; // save current target element in closure

  return function onceHandler() {
    var res = handler.apply(null, arguments);

    if (res !== null) {
      $QPfz$var$remove$2(event, onceHandler, capture, _target);
    }
  };
} // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.


var $QPfz$var$useMicrotaskFix = $QPfz$var$isUsingMicroTask && !($QPfz$var$isFF && Number($QPfz$var$isFF[1]) <= 53);

function $QPfz$var$add$1(name, handler, capture, passive) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if ($QPfz$var$useMicrotaskFix) {
    var attachedTimestamp = $QPfz$var$currentFlushTimestamp;
    var original = handler;

    handler = original._wrapper = function (e) {
      if ( // no bubbling, should always fire.
      // this is just a safety net in case event.timeStamp is unreliable in
      // certain weird environments...
      e.target === e.currentTarget || // event is fired after handler attachment
      e.timeStamp >= attachedTimestamp || // bail for environments that have buggy event.timeStamp implementations
      // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
      // #9681 QtWebEngine event.timeStamp is negative value
      e.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
      // electron/nw.js app, since event.timeStamp will be using a different
      // starting reference
      e.target.ownerDocument !== document) {
        return original.apply(this, arguments);
      }
    };
  }

  $QPfz$var$target$1.addEventListener(name, handler, $QPfz$var$supportsPassive ? {
    capture: capture,
    passive: passive
  } : capture);
}

function $QPfz$var$remove$2(name, handler, capture, _target) {
  (_target || $QPfz$var$target$1).removeEventListener(name, handler._wrapper || handler, capture);
}

function $QPfz$var$updateDOMListeners(oldVnode, vnode) {
  if ($QPfz$var$isUndef(oldVnode.data.on) && $QPfz$var$isUndef(vnode.data.on)) {
    return;
  }

  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  $QPfz$var$target$1 = vnode.elm;
  $QPfz$var$normalizeEvents(on);
  $QPfz$var$updateListeners(on, oldOn, $QPfz$var$add$1, $QPfz$var$remove$2, $QPfz$var$createOnceHandler$1, vnode.context);
  $QPfz$var$target$1 = undefined;
}

var $QPfz$var$events = {
  create: $QPfz$var$updateDOMListeners,
  update: $QPfz$var$updateDOMListeners
};
/*  */

var $QPfz$var$svgContainer;

function $QPfz$var$updateDOMProps(oldVnode, vnode) {
  if ($QPfz$var$isUndef(oldVnode.data.domProps) && $QPfz$var$isUndef(vnode.data.domProps)) {
    return;
  }

  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {}; // clone observed objects, as the user probably wants to mutate it

  if ($QPfz$var$isDef(props.__ob__)) {
    props = vnode.data.domProps = $QPfz$var$extend({}, props);
  }

  for (key in oldProps) {
    if ($QPfz$var$isUndef(props[key])) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key]; // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)

    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }

      if (cur === oldProps[key]) {
        continue;
      } // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property


      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur; // avoid resetting cursor position when value is the same

      var strCur = $QPfz$var$isUndef(cur) ? '' : String(cur);

      if ($QPfz$var$shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && $QPfz$var$isSVG(elm.tagName) && $QPfz$var$isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      $QPfz$var$svgContainer = $QPfz$var$svgContainer || document.createElement('div');
      $QPfz$var$svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = $QPfz$var$svgContainer.firstChild;

      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }

      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if ( // skip the update if old and new VDOM state is the same.
    // `value` is handled separately because the DOM value may be temporarily
    // out of sync with VDOM state due to focus, composition and modifiers.
    // This  #4521 by skipping the unnecesarry `checked` update.
    cur !== oldProps[key]) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
} // check platforms/web/util/attrs.js acceptValue


function $QPfz$var$shouldUpdateValue(elm, checkVal) {
  return !elm.composing && (elm.tagName === 'OPTION' || $QPfz$var$isNotInFocusAndDirty(elm, checkVal) || $QPfz$var$isDirtyWithModifiers(elm, checkVal));
}

function $QPfz$var$isNotInFocusAndDirty(elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true; // #6157
  // work around IE bug when accessing document.activeElement in an iframe

  try {
    notInFocus = document.activeElement !== elm;
  } catch (e) {}

  return notInFocus && elm.value !== checkVal;
}

function $QPfz$var$isDirtyWithModifiers(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime

  if ($QPfz$var$isDef(modifiers)) {
    if (modifiers.number) {
      return $QPfz$var$toNumber(value) !== $QPfz$var$toNumber(newVal);
    }

    if (modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
  }

  return value !== newVal;
}

var $QPfz$var$domProps = {
  create: $QPfz$var$updateDOMProps,
  update: $QPfz$var$updateDOMProps
};
/*  */

var $QPfz$var$parseStyleText = $QPfz$var$cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
}); // merge static and dynamic style data on the same vnode

function $QPfz$var$normalizeStyleData(data) {
  var style = $QPfz$var$normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it

  return data.staticStyle ? $QPfz$var$extend(data.staticStyle, style) : style;
} // normalize possible array / string values into Object


function $QPfz$var$normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return $QPfz$var$toObject(bindingStyle);
  }

  if (typeof bindingStyle === 'string') {
    return $QPfz$var$parseStyleText(bindingStyle);
  }

  return bindingStyle;
}
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */


function $QPfz$var$getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;

    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;

      if (childNode && childNode.data && (styleData = $QPfz$var$normalizeStyleData(childNode.data))) {
        $QPfz$var$extend(res, styleData);
      }
    }
  }

  if (styleData = $QPfz$var$normalizeStyleData(vnode.data)) {
    $QPfz$var$extend(res, styleData);
  }

  var parentNode = vnode;

  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = $QPfz$var$normalizeStyleData(parentNode.data))) {
      $QPfz$var$extend(res, styleData);
    }
  }

  return res;
}
/*  */


var $QPfz$var$cssVarRE = /^--/;
var $QPfz$var$importantRE = /\s*!important$/;

var $QPfz$var$setProp = function (el, name, val) {
  /* istanbul ignore if */
  if ($QPfz$var$cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if ($QPfz$var$importantRE.test(val)) {
    el.style.setProperty($QPfz$var$hyphenate(name), val.replace($QPfz$var$importantRE, ''), 'important');
  } else {
    var normalizedName = $QPfz$var$normalize(name);

    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var $QPfz$var$vendorNames = ['Webkit', 'Moz', 'ms'];
var $QPfz$var$emptyStyle;
var $QPfz$var$normalize = $QPfz$var$cached(function (prop) {
  $QPfz$var$emptyStyle = $QPfz$var$emptyStyle || document.createElement('div').style;
  prop = $QPfz$var$camelize(prop);

  if (prop !== 'filter' && prop in $QPfz$var$emptyStyle) {
    return prop;
  }

  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);

  for (var i = 0; i < $QPfz$var$vendorNames.length; i++) {
    var name = $QPfz$var$vendorNames[i] + capName;

    if (name in $QPfz$var$emptyStyle) {
      return name;
    }
  }
});

function $QPfz$var$updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if ($QPfz$var$isUndef(data.staticStyle) && $QPfz$var$isUndef(data.style) && $QPfz$var$isUndef(oldData.staticStyle) && $QPfz$var$isUndef(oldData.style)) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {}; // if static style exists, stylebinding already merged into it when doing normalizeStyleData

  var oldStyle = oldStaticStyle || oldStyleBinding;
  var style = $QPfz$var$normalizeStyleBinding(vnode.data.style) || {}; // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.

  vnode.data.normalizedStyle = $QPfz$var$isDef(style.__ob__) ? $QPfz$var$extend({}, style) : style;
  var newStyle = $QPfz$var$getStyle(vnode, true);

  for (name in oldStyle) {
    if ($QPfz$var$isUndef(newStyle[name])) {
      $QPfz$var$setProp(el, name, '');
    }
  }

  for (name in newStyle) {
    cur = newStyle[name];

    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      $QPfz$var$setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var $QPfz$var$style = {
  create: $QPfz$var$updateStyle,
  update: $QPfz$var$updateStyle
};
/*  */

var $QPfz$var$whitespaceRE = /\s+/;
/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */

function $QPfz$var$addClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split($QPfz$var$whitespaceRE).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";

    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}
/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */


function $QPfz$var$removeClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split($QPfz$var$whitespaceRE).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }

    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';

    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }

    cur = cur.trim();

    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}
/*  */


function $QPfz$var$resolveTransition(def$$1) {
  if (!def$$1) {
    return;
  }
  /* istanbul ignore else */


  if (typeof def$$1 === 'object') {
    var res = {};

    if (def$$1.css !== false) {
      $QPfz$var$extend(res, $QPfz$var$autoCssTransition(def$$1.name || 'v'));
    }

    $QPfz$var$extend(res, def$$1);
    return res;
  } else if (typeof def$$1 === 'string') {
    return $QPfz$var$autoCssTransition(def$$1);
  }
}

var $QPfz$var$autoCssTransition = $QPfz$var$cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});
var $QPfz$var$hasTransition = $QPfz$var$inBrowser && !$QPfz$var$isIE9;
var $QPfz$var$TRANSITION = 'transition';
var $QPfz$var$ANIMATION = 'animation'; // Transition property/event sniffing

var $QPfz$var$transitionProp = 'transition';
var $QPfz$var$transitionEndEvent = 'transitionend';
var $QPfz$var$animationProp = 'animation';
var $QPfz$var$animationEndEvent = 'animationend';

if ($QPfz$var$hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    $QPfz$var$transitionProp = 'WebkitTransition';
    $QPfz$var$transitionEndEvent = 'webkitTransitionEnd';
  }

  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    $QPfz$var$animationProp = 'WebkitAnimation';
    $QPfz$var$animationEndEvent = 'webkitAnimationEnd';
  }
} // binding to window is necessary to make hot reload work in IE in strict mode


var $QPfz$var$raf = $QPfz$var$inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout :
/* istanbul ignore next */
function (fn) {
  return fn();
};

function $QPfz$var$nextFrame(fn) {
  $QPfz$var$raf(function () {
    $QPfz$var$raf(fn);
  });
}

function $QPfz$var$addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);

  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    $QPfz$var$addClass(el, cls);
  }
}

function $QPfz$var$removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    $QPfz$var$remove(el._transitionClasses, cls);
  }

  $QPfz$var$removeClass(el, cls);
}

function $QPfz$var$whenTransitionEnds(el, expectedType, cb) {
  var ref = $QPfz$var$getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;

  if (!type) {
    return cb();
  }

  var event = type === $QPfz$var$TRANSITION ? $QPfz$var$transitionEndEvent : $QPfz$var$animationEndEvent;
  var ended = 0;

  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };

  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var $QPfz$var$transformRE = /\b(transform|all)(,|$)/;

function $QPfz$var$getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var transitionDelays = (styles[$QPfz$var$transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[$QPfz$var$transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = $QPfz$var$getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[$QPfz$var$animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[$QPfz$var$animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = $QPfz$var$getTimeout(animationDelays, animationDurations);
  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === $QPfz$var$TRANSITION) {
    if (transitionTimeout > 0) {
      type = $QPfz$var$TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === $QPfz$var$ANIMATION) {
    if (animationTimeout > 0) {
      type = $QPfz$var$ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? $QPfz$var$TRANSITION : $QPfz$var$ANIMATION : null;
    propCount = type ? type === $QPfz$var$TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === $QPfz$var$TRANSITION && $QPfz$var$transformRE.test(styles[$QPfz$var$transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function $QPfz$var$getTimeout(delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return $QPfz$var$toMs(d) + $QPfz$var$toMs(delays[i]);
  }));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors


function $QPfz$var$toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
/*  */


function $QPfz$var$enter(vnode, toggleDisplay) {
  var el = vnode.elm; // call leave callback now

  if ($QPfz$var$isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;

    el._leaveCb();
  }

  var data = $QPfz$var$resolveTransition(vnode.data.transition);

  if ($QPfz$var$isUndef(data)) {
    return;
  }
  /* istanbul ignore if */


  if ($QPfz$var$isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration; // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.

  var context = $QPfz$var$activeInstance;
  var transitionNode = $QPfz$var$activeInstance.$vnode;

  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
  var explicitEnterDuration = $QPfz$var$toNumber($QPfz$var$isObject(duration) ? duration.enter : duration);

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    $QPfz$var$checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !$QPfz$var$isIE9;
  var userWantsControl = $QPfz$var$getHookArgumentsLength(enterHook);
  var cb = el._enterCb = $QPfz$var$once(function () {
    if (expectsCSS) {
      $QPfz$var$removeTransitionClass(el, toClass);
      $QPfz$var$removeTransitionClass(el, activeClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        $QPfz$var$removeTransitionClass(el, startClass);
      }

      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }

    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    $QPfz$var$mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];

      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }

      enterHook && enterHook(el, cb);
    });
  } // start enter transition


  beforeEnterHook && beforeEnterHook(el);

  if (expectsCSS) {
    $QPfz$var$addTransitionClass(el, startClass);
    $QPfz$var$addTransitionClass(el, activeClass);
    $QPfz$var$nextFrame(function () {
      $QPfz$var$removeTransitionClass(el, startClass);

      if (!cb.cancelled) {
        $QPfz$var$addTransitionClass(el, toClass);

        if (!userWantsControl) {
          if ($QPfz$var$isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            $QPfz$var$whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function $QPfz$var$leave(vnode, rm) {
  var el = vnode.elm; // call enter callback now

  if ($QPfz$var$isDef(el._enterCb)) {
    el._enterCb.cancelled = true;

    el._enterCb();
  }

  var data = $QPfz$var$resolveTransition(vnode.data.transition);

  if ($QPfz$var$isUndef(data) || el.nodeType !== 1) {
    return rm();
  }
  /* istanbul ignore if */


  if ($QPfz$var$isDef(el._leaveCb)) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;
  var expectsCSS = css !== false && !$QPfz$var$isIE9;
  var userWantsControl = $QPfz$var$getHookArgumentsLength(leave);
  var explicitLeaveDuration = $QPfz$var$toNumber($QPfz$var$isObject(duration) ? duration.leave : duration);

  if (process.env.NODE_ENV !== 'production' && $QPfz$var$isDef(explicitLeaveDuration)) {
    $QPfz$var$checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = $QPfz$var$once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }

    if (expectsCSS) {
      $QPfz$var$removeTransitionClass(el, leaveToClass);
      $QPfz$var$removeTransitionClass(el, leaveActiveClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        $QPfz$var$removeTransitionClass(el, leaveClass);
      }

      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }

    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return;
    } // record leaving element


    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }

    beforeLeave && beforeLeave(el);

    if (expectsCSS) {
      $QPfz$var$addTransitionClass(el, leaveClass);
      $QPfz$var$addTransitionClass(el, leaveActiveClass);
      $QPfz$var$nextFrame(function () {
        $QPfz$var$removeTransitionClass(el, leaveClass);

        if (!cb.cancelled) {
          $QPfz$var$addTransitionClass(el, leaveToClass);

          if (!userWantsControl) {
            if ($QPfz$var$isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              $QPfz$var$whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    leave && leave(el, cb);

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
} // only used in dev mode


function $QPfz$var$checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    $QPfz$var$warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
  } else if (isNaN(val)) {
    $QPfz$var$warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
  }
}

function $QPfz$var$isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}
/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */


function $QPfz$var$getHookArgumentsLength(fn) {
  if ($QPfz$var$isUndef(fn)) {
    return false;
  }

  var invokerFns = fn.fns;

  if ($QPfz$var$isDef(invokerFns)) {
    // invoker
    return $QPfz$var$getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

function $QPfz$var$_enter(_, vnode) {
  if (vnode.data.show !== true) {
    $QPfz$var$enter(vnode);
  }
}

var $QPfz$var$transition = $QPfz$var$inBrowser ? {
  create: $QPfz$var$_enter,
  activate: $QPfz$var$_enter,
  remove: function remove$$1(vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      $QPfz$var$leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};
var $QPfz$var$platformModules = [$QPfz$var$attrs, $QPfz$var$klass, $QPfz$var$events, $QPfz$var$domProps, $QPfz$var$style, $QPfz$var$transition];
/*  */
// the directive module should be applied last, after all
// built-in modules have been applied.

var $QPfz$var$modules = $QPfz$var$platformModules.concat($QPfz$var$baseModules);
var $QPfz$var$patch = $QPfz$var$createPatchFunction({
  nodeOps: $QPfz$var$nodeOps,
  modules: $QPfz$var$modules
});
/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */

if ($QPfz$var$isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;

    if (el && el.vmodel) {
      $QPfz$var$trigger(el, 'input');
    }
  });
}

var $QPfz$var$directive = {
  inserted: function inserted(el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        $QPfz$var$mergeVNodeHook(vnode, 'postpatch', function () {
          $QPfz$var$directive.componentUpdated(el, binding, vnode);
        });
      } else {
        $QPfz$var$setSelected(el, binding, vnode.context);
      }

      el._vOptions = [].map.call(el.options, $QPfz$var$getValue);
    } else if (vnode.tag === 'textarea' || $QPfz$var$isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;

      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', $QPfz$var$onCompositionStart);
        el.addEventListener('compositionend', $QPfz$var$onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.

        el.addEventListener('change', $QPfz$var$onCompositionEnd);
        /* istanbul ignore if */

        if ($QPfz$var$isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      $QPfz$var$setSelected(el, binding, vnode.context); // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.

      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, $QPfz$var$getValue);

      if (curOptions.some(function (o, i) {
        return !$QPfz$var$looseEqual(o, prevOptions[i]);
      })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple ? binding.value.some(function (v) {
          return $QPfz$var$hasNoMatchingOption(v, curOptions);
        }) : binding.value !== binding.oldValue && $QPfz$var$hasNoMatchingOption(binding.value, curOptions);

        if (needReset) {
          $QPfz$var$trigger(el, 'change');
        }
      }
    }
  }
};

function $QPfz$var$setSelected(el, binding, vm) {
  $QPfz$var$actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */

  if ($QPfz$var$isIE || $QPfz$var$isEdge) {
    setTimeout(function () {
      $QPfz$var$actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function $QPfz$var$actuallySetSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;

  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && $QPfz$var$warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
    return;
  }

  var selected, option;

  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];

    if (isMultiple) {
      selected = $QPfz$var$looseIndexOf(value, $QPfz$var$getValue(option)) > -1;

      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if ($QPfz$var$looseEqual($QPfz$var$getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }

        return;
      }
    }
  }

  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function $QPfz$var$hasNoMatchingOption(value, options) {
  return options.every(function (o) {
    return !$QPfz$var$looseEqual(o, value);
  });
}

function $QPfz$var$getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function $QPfz$var$onCompositionStart(e) {
  e.target.composing = true;
}

function $QPfz$var$onCompositionEnd(e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) {
    return;
  }

  e.target.composing = false;
  $QPfz$var$trigger(e.target, 'input');
}

function $QPfz$var$trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}
/*  */
// recursively search for possible transition defined inside the component root


function $QPfz$var$locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? $QPfz$var$locateNode(vnode.componentInstance._vnode) : vnode;
}

var $QPfz$var$show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;
    vnode = $QPfz$var$locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;

    if (value && transition$$1) {
      vnode.data.show = true;
      $QPfz$var$enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },
  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;
    /* istanbul ignore if */

    if (!value === !oldValue) {
      return;
    }

    vnode = $QPfz$var$locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;

    if (transition$$1) {
      vnode.data.show = true;

      if (value) {
        $QPfz$var$enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        $QPfz$var$leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },
  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};
var $QPfz$var$platformDirectives = {
  model: $QPfz$var$directive,
  show: $QPfz$var$show
};
/*  */

var $QPfz$var$transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
}; // in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered

function $QPfz$var$getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;

  if (compOptions && compOptions.Ctor.options.abstract) {
    return $QPfz$var$getRealChild($QPfz$var$getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function $QPfz$var$extractTransitionData(comp) {
  var data = {};
  var options = comp.$options; // props

  for (var key in options.propsData) {
    data[key] = comp[key];
  } // events.
  // extract listeners and pass them directly to the transition methods


  var listeners = options._parentListeners;

  for (var key$1 in listeners) {
    data[$QPfz$var$camelize(key$1)] = listeners[key$1];
  }

  return data;
}

function $QPfz$var$placeholder(h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    });
  }
}

function $QPfz$var$hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function $QPfz$var$isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

var $QPfz$var$isNotTextNode = function (c) {
  return c.tag || $QPfz$var$isAsyncPlaceholder(c);
};

var $QPfz$var$isVShowDirective = function (d) {
  return d.name === 'show';
};

var $QPfz$var$Transition = {
  name: 'transition',
  props: $QPfz$var$transitionProps,
  abstract: true,
  render: function render(h) {
    var this$1 = this;
    var children = this.$slots.default;

    if (!children) {
      return;
    } // filter out text nodes (possible whitespaces)


    children = children.filter($QPfz$var$isNotTextNode);
    /* istanbul ignore if */

    if (!children.length) {
      return;
    } // warn multiple elements


    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      $QPfz$var$warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
    }

    var mode = this.mode; // warn invalid mode

    if (process.env.NODE_ENV !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
      $QPfz$var$warn('invalid <transition> mode: ' + mode, this.$parent);
    }

    var rawChild = children[0]; // if this is a component root node and the component's
    // parent container node also has transition, skip.

    if ($QPfz$var$hasParentTransition(this.$vnode)) {
      return rawChild;
    } // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive


    var child = $QPfz$var$getRealChild(rawChild);
    /* istanbul ignore if */

    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return $QPfz$var$placeholder(h, rawChild);
    } // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.


    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : $QPfz$var$isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
    var data = (child.data || (child.data = {})).transition = $QPfz$var$extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = $QPfz$var$getRealChild(oldRawChild); // mark v-show
    // so that the transition module can hand over the control to the directive

    if (child.data.directives && child.data.directives.some($QPfz$var$isVShowDirective)) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !$QPfz$var$isSameChild(child, oldChild) && !$QPfz$var$isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
    !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = $QPfz$var$extend({}, data); // handle transition mode

      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        $QPfz$var$mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return $QPfz$var$placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        if ($QPfz$var$isAsyncPlaceholder(child)) {
          return oldRawChild;
        }

        var delayedLeave;

        var performLeave = function () {
          delayedLeave();
        };

        $QPfz$var$mergeVNodeHook(data, 'afterEnter', performLeave);
        $QPfz$var$mergeVNodeHook(data, 'enterCancelled', performLeave);
        $QPfz$var$mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }
};
/*  */

var $QPfz$var$props = $QPfz$var$extend({
  tag: String,
  moveClass: String
}, $QPfz$var$transitionProps);
delete $QPfz$var$props.mode;
var $QPfz$var$TransitionGroup = {
  props: $QPfz$var$props,
  beforeMount: function beforeMount() {
    var this$1 = this;
    var update = this._update;

    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = $QPfz$var$setActiveInstance(this$1); // force removing pass

      this$1.__patch__(this$1._vnode, this$1.kept, false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
      );

      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },
  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = $QPfz$var$extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];

      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;
          (c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
          $QPfz$var$warn("<transition-group> children must be keyed: <" + name + ">");
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];

      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();

        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }

      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },
  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';

    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    } // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.


    children.forEach($QPfz$var$callPendingCbs);
    children.forEach($QPfz$var$recordPosition);
    children.forEach($QPfz$var$applyTranslation); // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line

    this._reflow = document.body.offsetHeight;
    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        $QPfz$var$addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener($QPfz$var$transitionEndEvent, el._moveCb = function cb(e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener($QPfz$var$transitionEndEvent, cb);
            el._moveCb = null;
            $QPfz$var$removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },
  methods: {
    hasMove: function hasMove(el, moveClass) {
      /* istanbul ignore if */
      if (!$QPfz$var$hasTransition) {
        return false;
      }
      /* istanbul ignore if */


      if (this._hasMove) {
        return this._hasMove;
      } // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.


      var clone = el.cloneNode();

      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) {
          $QPfz$var$removeClass(clone, cls);
        });
      }

      $QPfz$var$addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = $QPfz$var$getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return this._hasMove = info.hasTransform;
    }
  }
};

function $QPfz$var$callPendingCbs(c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */


  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function $QPfz$var$recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function $QPfz$var$applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var $QPfz$var$platformComponents = {
  Transition: $QPfz$var$Transition,
  TransitionGroup: $QPfz$var$TransitionGroup
};
/*  */
// install platform specific utils

$QPfz$export$default.config.mustUseProp = $QPfz$var$mustUseProp;
$QPfz$export$default.config.isReservedTag = $QPfz$var$isReservedTag;
$QPfz$export$default.config.isReservedAttr = $QPfz$var$isReservedAttr;
$QPfz$export$default.config.getTagNamespace = $QPfz$var$getTagNamespace;
$QPfz$export$default.config.isUnknownElement = $QPfz$var$isUnknownElement; // install platform runtime directives & components

$QPfz$var$extend($QPfz$export$default.options.directives, $QPfz$var$platformDirectives);
$QPfz$var$extend($QPfz$export$default.options.components, $QPfz$var$platformComponents); // install platform patch function

$QPfz$export$default.prototype.__patch__ = $QPfz$var$inBrowser ? $QPfz$var$patch : $QPfz$var$noop; // public mount method

$QPfz$export$default.prototype.$mount = function (el, hydrating) {
  el = el && $QPfz$var$inBrowser ? $QPfz$var$query(el) : undefined;
  return $QPfz$var$mountComponent(this, el, hydrating);
}; // devtools global hook

/* istanbul ignore next */


if ($QPfz$var$inBrowser) {
  setTimeout(function () {
    if ($QPfz$var$config.devtools) {
      if ($QPfz$var$devtools) {
        $QPfz$var$devtools.emit('init', $QPfz$export$default);
      } else if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
        console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
      }
    }

    if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' && $QPfz$var$config.productionTip !== false && typeof console !== 'undefined') {
      console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
    }
  }, 0);
}
/*  */


// ASSET: Composer/Utils.js
var $Ah8Q$exports = {}; // Linear mapping from range <a1, a2> to range <b1, b2>

const $Ah8Q$var$mapLinear = function (x, a1, a2, b1, b2) {
  return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
}; // https://en.wikipedia.org/wiki/Linear_interpolation


const $Ah8Q$var$lerp = function (x, y, t) {
  return (1 - t) * x + t * y;
};

const $Ah8Q$var$clamp = function (value, min, max) {
  return Math.max(min, Math.min(max, value));
};

$Ah8Q$exports = {
  mapLinear: $Ah8Q$var$mapLinear,
  lerp: $Ah8Q$var$lerp,
  clamp: $Ah8Q$var$clamp
};
// ASSET: Composer/Curve.js
var $z1Ec$exports = {};
// ASSET: Composer/eases.js
var $kKuJ$exports = {};
$kKuJ$exports = {
  zero: () => {
    return 0;
  },
  one: () => {
    return 1;
  },
  linear: k => {
    return k;
  },
  smooth: x => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    return x * x * (3 - 2 * x);
  },
  smoother: x => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    return x * x * x * (x * (x * 6 - 15) + 10);
  },
  QuadraticIn: function (k) {
    return k * k;
  },
  QuadraticOut: function (k) {
    return k * (2 - k);
  },
  QuadraticInOut: function (k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k;
    }

    return -0.5 * (--k * (k - 2) - 1);
  },
  CubicIn: function (k) {
    return k * k * k;
  },
  CubicOut: function (k) {
    return --k * k * k + 1;
  },
  CubicInOut: function (k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k;
    }

    return 0.5 * ((k -= 2) * k * k + 2);
  },
  QuarticIn: function (k) {
    return k * k * k * k;
  },
  QuarticOut: function (k) {
    return 1 - --k * k * k * k;
  },
  QuarticInOut: function (k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k * k;
    }

    return -0.5 * ((k -= 2) * k * k * k - 2);
  },
  QuinticIn: function (k) {
    return k * k * k * k * k;
  },
  QuinticOut: function (k) {
    return --k * k * k * k * k + 1;
  },
  QuinticInOut: function (k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k * k * k;
    }

    return 0.5 * ((k -= 2) * k * k * k * k + 2);
  },
  SinusoidalIn: function (k) {
    return 1 - Math.cos(k * Math.PI / 2);
  },
  SinusoidalOut: function (k) {
    return Math.sin(k * Math.PI / 2);
  },
  SinusoidalInOut: function (k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
  },
  ExponentialIn: function (k) {
    return k === 0 ? 0 : Math.pow(1024, k - 1);
  },
  ExponentialOut: function (k) {
    return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
  },
  ExponentialInOut: function (k) {
    if (k === 0) {
      return 0;
    }

    if (k === 1) {
      return 1;
    }

    if ((k *= 2) < 1) {
      return 0.5 * Math.pow(1024, k - 1);
    }

    return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
  },
  CircularIn: function (k) {
    return 1 - Math.sqrt(1 - k * k);
  },
  CircularOut: function (k) {
    return Math.sqrt(1 - --k * k);
  },
  CircularInOut: function (k) {
    if ((k *= 2) < 1) {
      return -0.5 * (Math.sqrt(1 - k * k) - 1);
    }

    return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
  },
  ElasticIn: function (k) {
    if (k === 0) {
      return 0;
    }

    if (k === 1) {
      return 1;
    }

    return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
  },
  ElasticOut: function (k) {
    if (k === 0) {
      return 0;
    }

    if (k === 1) {
      return 1;
    }

    return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
  },
  ElasticInOut: function (k) {
    if (k === 0) {
      return 0;
    }

    if (k === 1) {
      return 1;
    }

    k *= 2;

    if (k < 1) {
      return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
    }

    return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
  },
  BackIn: function (k) {
    var s = 1.70158;
    return k * k * ((s + 1) * k - s);
  },
  BackOut: function (k) {
    var s = 1.70158;
    return --k * k * ((s + 1) * k + s) + 1;
  },
  BackInOut: function (k) {
    var s = 1.70158 * 1.525;

    if ((k *= 2) < 1) {
      return 0.5 * (k * k * ((s + 1) * k - s));
    }

    return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
  },
  BounceIn: function (k) {
    return 1 - this.BounceOut(1 - k);
  },
  BounceOut: function (k) {
    if (k < 1 / 2.75) {
      return 7.5625 * k * k;
    } else if (k < 2 / 2.75) {
      return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
    } else if (k < 2.5 / 2.75) {
      return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
    } else {
      return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
    }
  },
  BounceInOut: function (k) {
    if (k < 0.5) {
      return this.BounceIn(k * 2) * 0.5;
    }

    return this.BounceOut(k * 2 - 1) * 0.5 + 0.5;
  }
};

class $z1Ec$var$Curve {
  constructor(options) {
    Object.assign(this, {
      name: "curve_name",
      points: [],
      currentPosition: 0,
      currentSample: 0
    }, options || {});
  }

  sortPoints() {
    this.points.sort((a, b) => {
      if (a[1] < b[1]) {
        return -1;
      } else if (a[1] > b[1]) {
        return 1;
      }

      return 0;
    });
  }

  addPoint(value, u, ease) {
    var cp = [value, u, ease || 'smooth'];
    this.points.push(cp);
    this.sortPoints();
    return cp;
  }

  removePoint(index) {
    this.points.splice(index, 1);
  }

  findAndRemove(p) {
    var index = this.points.indexOf(p);

    if (index !== -1) {
      this.removePoint(index);
    }
  }

  getPointIndex(pt) {
    return this.points.findIndex(p => pt === p);
  }

  sample(u, bSetCurrentPosition = true) {
    // curvePoint = [value, u, ease]
    if (!this.points.length) return 0;
    var cp = this.points;
    var sample = 0;

    if (cp[cp.length - 1][1] <= u) {
      // return first or last values when on the edges.
      // I think this makes things faster but never tested it...
      sample = cp[cp.length - 1][0];
    } else if (cp[0][1] > u) {
      sample = cp[0][0];
    } else {
      // find high and low indices
      var hiIndex = cp.findIndex(p => p[1] > u);
      var loIndex = cp[hiIndex][1] > u ? Math.max(0, hiIndex - 1) : hiIndex; // return interpolation between hi and lo using the lower ease

      var a = cp[loIndex];
      var b = cp[hiIndex];
      var t = $Ah8Q$exports.mapLinear(u, a[1], b[1], 0, 1);
      var $kKuJ$$interop$default = $parcel$interopDefault($kKuJ$exports);
      sample = $Ah8Q$exports.lerp(a[0], b[0], $kKuJ$$interop$default.d[a[2]](t));
    } // this is used to set the current position


    if (bSetCurrentPosition) {
      this.currentPosition = u;
      this.currentSample = sample;
    }

    return sample;
  }

  getMinValue() {
    if (!this.points.length) return 0;
    var lo = Infinity;
    this.points.forEach(p => {
      lo = Math.min(p[0], lo);
    });
    return lo;
  }

  getMaxValue() {
    if (!this.points.length) return 1;
    var hi = -Infinity;
    this.points.forEach(p => {
      hi = Math.max(p[0], hi);
    });
    return hi;
  }

}

$z1Ec$exports = $z1Ec$var$Curve;
var $kKuJ$$interop$default = $parcel$interopDefault($kKuJ$exports);
const $SXj0$var$easeTypes = Object.keys($kKuJ$$interop$default.d);
var $z1Ec$$interop$default = $parcel$interopDefault($z1Ec$exports);

const $SXj0$var$defaultCurve = () => new $z1Ec$$interop$default.d();

var $SXj0$export$default = {
  name: 'curve',
  props: {
    w: {
      type: Number,
      default: window.innerWidth
    },
    h: {
      type: Number,
      default: 100
    },
    curve: {
      type: Object,
      default: $SXj0$var$defaultCurve
    }
  },

  data() {
    return {
      isShown: true,
      activePoint: null,
      mouseDown: false,
      dragged: false,
      easeTypes: $SXj0$var$easeTypes,
      min: -1,
      max: 1,
      isMouseOver: false,
      mouse: {
        x: 0,
        y: 0
      },
      path: this.getPath(),
      bUpdateCrosshairs: true
    };
  },

  mounted() {
    this.min = this.curve.getMinValue();
    this.max = this.curve.getMaxValue();
  },

  methods: {
    mapLinear: $Ah8Q$exports.mapLinear,
    getPath: function () {
      var w = this.w;
      var p = 'M';

      for (var i = 0; i <= w; i += 1) {
        p += `${i / w} ${this.curve.sample(i / w, false)} `;
      }

      return p;
    },

    updatePath() {
      this.path = this.getPath();
    },

    getViewBox() {
      return `0 ${this.min} 1 ${Math.abs(this.max - this.min)}`;
    },

    getTransform() {
      // scale (we're flipping it vertically)
      var sx = 1;
      var sy = -1; //center

      var cx = 0.5;
      var cy = (this.max + this.min) * 0.5;
      return `matrix(${sx}, 0, 0, ${sy}, ${cx - sx * cx}, ${cy - sy * cy})`;
    },

    onDelete(e) {
      if (this.activePoint) {
        this.curve.findAndRemove(this.activePoint);
        this.activePoint = null;
        this.updatePath();
      }
    },

    onToggle(e) {
      this.isShown = !this.isShown;
    },

    onPointChange(e) {
      if (this.activePoint) {
        switch (e.target.name) {
          case 'value':
            var val = Number(e.target.value);
            this.activePoint[0] = val;
            this.min = Math.min(val, this.min);
            this.max = Math.max(val, this.max);
            break;

          case 'position':
            this.activePoint[1] = Number(e.target.value);
            break;

          case 'eases':
            this.activePoint[2] = e.target.value;
            break;
        }

        this.curve.sortPoints();
        this.updatePath(); // this.$forceUpdate()
      }
    },

    onRangeChange(e) {
      if (e.target.name === 'low') {
        this.min = Number(e.target.value);
      } else {
        this.max = Number(e.target.value);
      }

      this.$forceUpdate();
    },

    onInputFocus(e) {
      this.bUpdateCrosshairs = false;
    },

    onInputBlur(e) {
      this.bUpdateCrosshairs = true;
    },

    onMouseUp(e) {
      this.mouseDown = false;
      this.dragged = false;
    },

    getEventPosition(e) {
      var el = this.$el.querySelector('[name=workspace]');
      var bb = el.getBoundingClientRect();
      var x = e.offsetX; // e.clientX - bb.x //

      var y = e.offsetY; // e.clientY - bb.y //

      var u = $Ah8Q$exports.mapLinear(x, 0, bb.width, 0, 1);
      var v = $Ah8Q$exports.mapLinear(y, 0, bb.height, this.max, this.min);
      return {
        x: Number(u.toFixed(4)),
        y: Number(v.toFixed(4))
      };
    },

    onMouseDown(e) {
      this.mouseDown = true;

      if (e.target.tagName === "line") {
        e.stopPropagation();
        var index = Number(e.target.dataset.index);
        this.activePoint = this.curve.points[index];
        this.$forceUpdate();
      } else {
        this.activePoint = null;
      }
    },

    onMouseLeave(e) {
      this.isMouseOver = false;
    },

    onMouseMove(e) {
      this.isMouseOver = true;
      var pos = this.getEventPosition(e);
      this.mouse.x = pos.x;
      this.mouse.y = pos.y;

      if (this.mouseDown && !e.metaKey) {
        this.dragged = true;
        this.onDrag(e);
      }
    },

    onDrag(e) {
      if (this.activePoint) {
        var pos = this.getEventPosition(e);
        this.activePoint[1] = pos.x;
        this.activePoint[0] = pos.y;
        this.curve.sortPoints();
        this.updatePath();
      }
    },

    handleClick(e) {
      var el = e.target;

      if (el.tagName === 'svg') {
        if (!this.dragged && e.metaKey) {
          var pos = this.getEventPosition(e);
          var p = this.curve.addPoint(pos.y, pos.x);
          this.activePoint = p;
          this.updatePath();
        }
      }
    }

  }
};

if (typeof $SXj0$export$default === 'function') {
  $SXj0$export$default = $SXj0$export$default.options;
}
/* template */


Object.assign($SXj0$export$default, function () {
  var render = function () {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticStyle: {
        "position": "relative",
        "width": "calc(100%-4)",
        "border-bottom": "#ffffffaa solid 0.5px"
      }
    }, [_c('div', {
      staticStyle: {
        "position": "relative",
        "min-height": "20px",
        "width": "100%",
        "background": "#00000044"
      }
    }, [_c('svg', {
      staticStyle: {
        "position": "absolute",
        "right": "3",
        "top": "3",
        "width": "14px",
        "height": "14px",
        "stroke": "white",
        "stroke-width": "1",
        "fill": "#00000055"
      },
      on: {
        "click": _vm.onToggle
      }
    }, [_c('circle', {
      attrs: {
        "r": "6",
        "cx": "7",
        "cy": "7",
        "stroke": "white",
        "fill": "inherit"
      }
    }), _vm._v(" "), _c('line', {
      staticStyle: {
        "fill": "none",
        "stroke": "#ffffff99",
        "stroke-width": "1",
        "vector-effect": "non-scaling-stroke"
      },
      attrs: {
        "x1": "3",
        "y1": "7",
        "x2": "11",
        "y2": "7"
      }
    }), _vm._v(" "), !_vm.isShown ? _c('line', {
      staticStyle: {
        "fill": "none",
        "stroke": "#ffffff99",
        "stroke-width": "1",
        "vector-effect": "non-scaling-stroke"
      },
      attrs: {
        "y1": "3",
        "x1": "7",
        "y2": "11",
        "x2": "7"
      }
    }) : _vm._e()]), _vm._v(" "), _vm.isShown ? _c('div', {
      staticStyle: {
        "padding-top": "6px",
        "min-height": "22px",
        "border": "solid 1px #ffffff44"
      }
    }, [_c('div', {
      staticStyle: {
        "width": "100%",
        "font-size": "0.75em"
      }
    }, [_vm._v("\n        " + _vm._s(_vm.curve.name) + " " + _vm._s(_vm.bUpdateCrosshairs ? Number(_vm.curve.currentSample.toFixed(3)) : '') + "\n      ")]), _vm._v(" "), _c('label', {
      staticStyle: {
        "color": "darkgrey"
      }
    }, [_vm._v("hi:")]), _vm._v(" "), _c('input', {
      staticStyle: {
        "color": "cyan",
        "width": "5em",
        "margin-right": "10px",
        "background": "#00000099",
        "border": "none"
      },
      attrs: {
        "type": "number",
        "name": "hi",
        "step": "0.001"
      },
      domProps: {
        "value": _vm.max
      },
      on: {
        "change": _vm.onRangeChange,
        "focus": _vm.onInputFocus,
        "blur": _vm.onInputBlur
      }
    }), _vm._v(" "), _c('label', {
      staticStyle: {
        "color": "darkgrey"
      }
    }, [_vm._v("low:")]), _vm._v(" "), _c('input', {
      staticStyle: {
        "color": "cyan",
        "width": "5em",
        "margin-right": "10px",
        "background": "#00000099",
        "border": "none"
      },
      attrs: {
        "type": "number",
        "name": "low",
        "step": "0.001"
      },
      domProps: {
        "value": _vm.min
      },
      on: {
        "change": _vm.onRangeChange,
        "focus": _vm.onInputFocus,
        "blur": _vm.onInputBlur
      }
    }), _vm._v(" "), _vm.activePoint ? _c('label', [_vm._v("pt:")]) : _vm._e(), _vm._v(" "), _vm.activePoint ? _c('select', {
      staticStyle: {
        "color": "magenta",
        "width": "5em",
        "margin-right": "10px",
        "background": "#00000099",
        "border": "none"
      },
      attrs: {
        "name": "eases",
        "value": "smooth"
      },
      on: {
        "change": _vm.onPointChange
      }
    }, _vm._l(_vm.easeTypes, function (e) {
      return _c('option', {
        domProps: {
          "value": e,
          "selected": _vm.activePoint && _vm.activePoint[2] === e
        }
      }, [_vm._v(_vm._s(e))]);
    }), 0) : _vm._e(), _vm._v(" "), _vm.activePoint ? _c('label', [_vm._v("u:")]) : _vm._e(), _vm._v(" "), _vm.activePoint ? _c('input', {
      staticStyle: {
        "color": "magenta",
        "width": "5em",
        "margin-right": "10px",
        "background": "#00000099",
        "border": "none"
      },
      attrs: {
        "type": "number",
        "name": "position",
        "step": "0.001"
      },
      domProps: {
        "value": Number(_vm.activePoint[1])
      },
      on: {
        "change": _vm.onPointChange,
        "focus": _vm.onInputFocus,
        "blur": _vm.onInputBlur
      }
    }) : _vm._e(), _vm._v(" "), _vm.activePoint ? _c('label', [_vm._v("v:")]) : _vm._e(), _vm._v(" "), _vm.activePoint ? _c('input', {
      staticStyle: {
        "color": "magenta",
        "width": "5em",
        "margin-right": "10px",
        "background": "#00000099",
        "border": "none"
      },
      attrs: {
        "type": "number",
        "name": "value",
        "step": "0.001"
      },
      domProps: {
        "value": Number(_vm.activePoint[0])
      },
      on: {
        "change": _vm.onPointChange,
        "focus": _vm.onInputFocus,
        "blur": _vm.onInputBlur
      }
    }) : _vm._e()]) : _c('label', {
      staticStyle: {
        "padding-top": "6px",
        "min-height": "22px",
        "border": "solid 1px #ffffff44"
      }
    }, [_vm._v(" " + _vm._s(_vm.curve.name) + " ")])]), _vm._v(" "), _vm.isShown ? _c('div', {
      staticStyle: {
        "position": "relative",
        "height": "100px",
        "width": "100%",
        "background": "#00000055"
      },
      attrs: {
        "tabIndex": "1",
        "name": "workspace"
      },
      on: {
        "keyup": function ($event) {
          if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "delete", [8, 46], $event.key, ["Backspace", "Delete", "Del"])) {
            return null;
          }

          return _vm.onDelete($event);
        },
        "mouseleave": _vm.onMouseLeave
      }
    }, [_c('svg', {
      staticStyle: {
        "position": "absolute",
        "left": "0",
        "top": "0",
        "width": "100%",
        "height": "100%",
        "background": "#00000044",
        "fill": "none",
        "stroke": "white",
        "stroke-width": "1"
      },
      attrs: {
        "viewBox": _vm.getViewBox(),
        "preserveAspectRatio": 'none',
        "xmlns": "http://www.w3.org/2000/svg"
      },
      on: {
        "mouseup": _vm.onMouseUp,
        "mousedown": _vm.onMouseDown,
        "mousemove": _vm.onMouseMove,
        "click": _vm.handleClick
      }
    }, [_c('g', {
      attrs: {
        "transform": _vm.getTransform()
      }
    }, [_vm.isMouseOver ? _c('line', {
      staticStyle: {
        "stroke": "#ffffff66",
        "fill": "none",
        "stroke-width": "1",
        "vector-effect": "non-scaling-stroke",
        "pointer-events": "none"
      },
      attrs: {
        "x1": _vm.mouse.x,
        "y1": _vm.min,
        "x2": _vm.mouse.x,
        "y2": _vm.max
      }
    }) : _vm._e(), _vm._v(" "), _vm.isMouseOver ? _c('line', {
      staticStyle: {
        "stroke": "#ffffff66",
        "fill": "none",
        "stroke-width": "1",
        "vector-effect": "non-scaling-stroke",
        "pointer-events": "none"
      },
      attrs: {
        "x1": 0,
        "y1": _vm.mouse.y,
        "x2": 1,
        "y2": _vm.mouse.y
      }
    }) : _vm._e(), _vm._v(" "), _vm.bUpdateCrosshairs ? _c('line', {
      staticStyle: {
        "stroke": "#99999933",
        "fill": "none",
        "stroke-width": "1",
        "vector-effect": "non-scaling-stroke",
        "pointer-events": "none"
      },
      attrs: {
        "x1": _vm.curve.currentPosition,
        "y1": _vm.min,
        "x2": _vm.curve.currentPosition,
        "y2": _vm.max
      }
    }) : _vm._e(), _vm._v(" "), _vm.bUpdateCrosshairs ? _c('line', {
      staticStyle: {
        "stroke": "#ffffff33",
        "fill": "none",
        "stroke-width": "1",
        "vector-effect": "non-scaling-stroke",
        "pointer-events": "none"
      },
      attrs: {
        "x1": 0,
        "y1": _vm.curve.currentSample,
        "x2": 1,
        "y2": _vm.curve.currentSample
      }
    }) : _vm._e(), _vm._v(" "), _vm._l(_vm.curve.points, function (p, index) {
      return _c('line', {
        style: {
          'vector-effect': 'non-scaling-stroke',
          'stroke-width': '5',
          'stroke-linecap': 'round',
          'vector-effect': 'non-scaling-stroke',
          'stroke': p === _vm.activePoint ? 'magenta' : '#ffffffaa'
        },
        attrs: {
          "onMouseOver": "this.style.strokeWidth=7;",
          "onMouseOut": "this.style.strokeWidth=5;",
          "data-index": index,
          "x1": p[1],
          "y1": p[0],
          "x2": p[1],
          "y2": p[0],
          "fill": "red"
        }
      });
    }), _vm._v(" "), _c('path', {
      staticStyle: {
        "fill": "none",
        "stroke": "#ffffff99",
        "stroke-width": "1",
        "vector-effect": "non-scaling-stroke",
        "pointer-events": "none"
      },
      attrs: {
        "d": _vm.path
      }
    })], 2)]), _vm._v(" "), _c('div', {
      staticStyle: {
        "color": "cyan",
        "position": "absolute",
        "top": "1",
        "right": "0",
        "font-size": "0.75em",
        "user-select": "none"
      }
    }, [_vm._v("\n      " + _vm._s(_vm.max) + "\n    ")]), _vm._v(" "), _c('div', {
      staticStyle: {
        "color": "cyan",
        "position": "absolute",
        "bottom": "0",
        "right": "0",
        "font-size": "0.75em",
        "user-select": "none"
      }
    }, [_vm._v("\n      " + _vm._s(_vm.min) + "\n    ")])]) : _vm._e()]);
  };

  var staticRenderFns = [];
  return {
    render: render,
    staticRenderFns: staticRenderFns,
    _compiled: true,
    _scopeId: null,
    functional: undefined
  };
}());
// ASSET: ../node_modules/save-as/lib/index.js
var $xYi$export$saveAs,
    $xYi$exports = {};
Object.defineProperty($xYi$exports, "__esModule", {
  value: true
});

function $xYi$var$_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/* FileSaver.js
 * A saveAs() FileSaver implementation.
 *
 * By Eli Grey, http://eligrey.com
 * ES6ified by Cole Chamberlain, https://github.com/cchamberlain
 *
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */

/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */


var $xYi$var$saveAs = ($xYi$export$saveAs = window.saveAs || function (view) {
  // IE <10 is explicitly unsupported
  if (typeof navigator !== 'undefined' && /MSIE [1-9]\./.test(navigator.userAgent)) return;
  var doc = view.document; // only get URL when necessary in case Blob.js hasn't overridden it yet

  var get_URL = function get_URL() {
    return view.URL || view.webkitURL || view;
  };

  var save_link = doc.createElementNS('http://www.w3.org/1999/xhtml', 'a');
  var can_use_save_link = 'download' in save_link;

  var click = function click(node) {
    var event = new MouseEvent('click');
    node.dispatchEvent(event);
  };

  var is_safari = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent);
  var webkit_req_fs = view.webkitRequestFileSystem;
  var req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem;

  var throw_outside = function throw_outside(ex) {
    (view.setImmediate || view.setTimeout)(function () {
      throw ex;
    }, 0);
  };

  var force_saveable_type = 'application/octet-stream';
  var fs_min_size = 0; // the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to

  var arbitrary_revoke_timeout = 1000 * 40; // in ms

  var revoke = function revoke(file) {
    var revoker = function revoker() {
      if (typeof file === 'string') // file is an object URL
        get_URL().revokeObjectURL(file);else // file is a File
        file.remove();
    };
    /* // Take note W3C:
    var
      uri = typeof file === "string" ? file : file.toURL()
    , revoker = function(evt) {
      // idealy DownloadFinishedEvent.data would be the URL requested
      if (evt.data === uri) {
        if (typeof file === "string") { // file is an object URL
          get_URL().revokeObjectURL(file);
        } else { // file is a File
          file.remove();
        }
      }
    }
    ;
    view.addEventListener("downloadfinished", revoker);
    */


    setTimeout(revoker, arbitrary_revoke_timeout);
  };

  var dispatch = function dispatch(filesaver, event_types, event) {
    event_types = [].concat(event_types);
    var i = event_types.length;

    while (i--) {
      var listener = filesaver['on' + event_types[i]];

      if (typeof listener === 'function') {
        try {
          listener.call(filesaver, event || filesaver);
        } catch (ex) {
          throw_outside(ex);
        }
      }
    }
  };

  var auto_bom = function auto_bom(blob) {
    // prepend BOM for UTF-8 XML and text/* types (including HTML)
    if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) return new Blob(['﻿', blob], {
      type: blob.type
    });
    return blob;
  };

  var FileSaver = function FileSaver(blob, name, no_auto_bom) {
    $xYi$var$_classCallCheck(this, FileSaver);
    if (!no_auto_bom) blob = auto_bom(blob); // First try a.download, then web filesystem, then object URLs

    var filesaver = this,
        type = blob.type,
        blob_changed = false,
        object_url,
        target_view,
        dispatch_all = function dispatch_all() {
      dispatch(filesaver, 'writestart progress write writeend'.split(' '));
    } // on any filesys errors revert to saving with object URLs
    ,
        fs_error = function fs_error() {
      if (target_view && is_safari && typeof FileReader !== 'undefined') {
        // Safari doesn't allow downloading of blob urls
        var reader = new FileReader();

        reader.onloadend = function () {
          var base64Data = reader.result;
          target_view.location.href = 'data:attachment/file' + base64Data.slice(base64Data.search(/[,;]/));
          filesaver.readyState = filesaver.DONE;
          dispatch_all();
        };

        reader.readAsDataURL(blob);
        filesaver.readyState = filesaver.INIT;
        return;
      } // don't create more object URLs than needed


      if (blob_changed || !object_url) {
        object_url = get_URL().createObjectURL(blob);
      }

      if (target_view) {
        target_view.location.href = object_url;
      } else {
        var new_tab = view.open(object_url, '_blank');

        if (new_tab === undefined && is_safari) {
          //Apple do not allow window.open, see http://bit.ly/1kZffRI
          view.location.href = object_url;
        }
      }

      filesaver.readyState = filesaver.DONE;
      dispatch_all();
      revoke(object_url);
    },
        abortable = function abortable(func) {
      return function () {
        if (filesaver.readyState !== filesaver.DONE) {
          return func.apply(this, arguments);
        }
      };
    },
        create_if_not_found = {
      create: true,
      exclusive: false
    },
        slice;

    filesaver.readyState = filesaver.INIT;

    if (!name) {
      name = 'download';
    }

    if (can_use_save_link) {
      object_url = get_URL().createObjectURL(blob);
      setTimeout(function () {
        save_link.href = object_url;
        save_link.download = name;
        click(save_link);
        dispatch_all();
        revoke(object_url);
        filesaver.readyState = filesaver.DONE;
      });
      return;
    } // Object and web filesystem URLs have a problem saving in Google Chrome when
    // viewed in a tab, so I force save with application/octet-stream
    // http://code.google.com/p/chromium/issues/detail?id=91158
    // https://code.google.com/p/chromium/issues/detail?id=389642


    if (view.chrome && type && type !== force_saveable_type) {
      slice = blob.slice || blob.webkitSlice;
      blob = slice.call(blob, 0, blob.size, force_saveable_type);
      blob_changed = true;
    } // Since I can't be sure that the guessed media type will trigger a download
    // in WebKit, I append .download to the filename.
    // https://bugs.webkit.org/show_bug.cgi?id=65440


    if (webkit_req_fs && name !== 'download') {
      name += '.download';
    }

    if (type === force_saveable_type || webkit_req_fs) {
      target_view = view;
    }

    if (!req_fs) {
      fs_error();
      return;
    }

    fs_min_size += blob.size;
    req_fs(view.TEMPORARY, fs_min_size, abortable(function (fs) {
      fs.root.getDirectory('saved', create_if_not_found, abortable(function (dir) {
        var save = function save() {
          dir.getFile(name, create_if_not_found, abortable(function (file) {
            file.createWriter(abortable(function (writer) {
              writer.onwriteend = function (event) {
                target_view.location.href = file.toURL();
                filesaver.readyState = filesaver.DONE;
                dispatch(filesaver, 'writeend', event);
                revoke(file);
              };

              writer.onerror = function () {
                var error = writer.error;

                if (error.code !== error.ABORT_ERR) {
                  fs_error();
                }
              };

              'writestart progress write abort'.split(' ').forEach(function (event) {
                writer['on' + event] = filesaver['on' + event];
              });
              writer.write(blob);

              filesaver.abort = function () {
                writer.abort();
                filesaver.readyState = filesaver.DONE;
              };

              filesaver.readyState = filesaver.WRITING;
            }), fs_error);
          }), fs_error);
        };

        dir.getFile(name, {
          create: false
        }, abortable(function (file) {
          // delete file if it already exists
          file.remove();
          save();
        }), abortable(function (ex) {
          if (ex.code === ex.NOT_FOUND_ERR) {
            save();
          } else {
            fs_error();
          }
        }));
      }), fs_error);
    }), fs_error);
  };

  var FS_proto = FileSaver.prototype;

  var saveAs = function saveAs(blob, name, no_auto_bom) {
    return new FileSaver(blob, name, no_auto_bom);
  }; // IE 10+ (native saveAs)


  if (typeof navigator !== 'undefined' && navigator.msSaveOrOpenBlob) {
    return function (blob, name, no_auto_bom) {
      if (!no_auto_bom) blob = auto_bom(blob);
      return navigator.msSaveOrOpenBlob(blob, name || 'download');
    };
  }

  FS_proto.abort = function () {
    var filesaver = this;
    filesaver.readyState = filesaver.DONE;
    dispatch(filesaver, 'abort');
  };

  FS_proto.readyState = FS_proto.INIT = 0;
  FS_proto.WRITING = 1;
  FS_proto.DONE = 2;
  FS_proto.error = FS_proto.onwritestart = FS_proto.onprogress = FS_proto.onwrite = FS_proto.onabort = FS_proto.onerror = FS_proto.onwriteend = null;
  return saveAs;
}(typeof self !== 'undefined' && self || typeof window !== 'undefined' && window || undefined.content), $xYi$exports.saveAs = $xYi$export$saveAs); // while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

var $xYi$export$default = $xYi$var$saveAs;
$xYi$exports.default = $xYi$export$default;

function $Js2s$var$loadFile(file, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function (event) {
    var contents = event.target.result;
    callback(JSON.parse(contents));
  }, false);
  reader.readAsText(file);
}

;
var $Js2s$export$default = {
  props: {
    curves: {
      default: () => []
    },
    title: {
      default: 'curve composer'
    }
  },
  components: {
    CurveEditor: $SXj0$export$default
  },
  methods: {
    createCurve(options) {
      var $z1Ec$$interop$default = $parcel$interopDefault($z1Ec$exports);
      this.addCurve(new $z1Ec$$interop$default.d(options));
    },

    addCurve(curve) {
      this.curves.push(curve);
    },

    loadCurves(json) {
      // remove the current curves
      this.curves.length = 0; // add the json curves

      for (var i in json) {
        var $z1Ec$$interop$default = $parcel$interopDefault($z1Ec$exports);
        this.addCurve(new $z1Ec$$interop$default.d(json[i]));
      } // update the paths for each curve


      this.$nextTick(function () {
        if (this.$refs.curves) {
          if (Array.isArray(this.$refs.curves)) {
            this.$refs.curves.forEach(crv => {
              crv.updatePath();
            });
          } else {
            this.$refs.updatePath();
          }
        }
      });
    },

    onLoad(e) {
      let file = e.target.files[0];
      $Js2s$var$loadFile(file, this.loadCurves);
    },

    save() {
      var data = this.curves.map(c => {
        return {
          name: c.name,
          points: c.points
        };
      });
      let blob = new Blob([JSON.stringify(data, null, 2)], {
        type: 'application/json'
      });
      $xYi$export$default(blob, 'curves.json');
    }

  }
};

if (typeof $Js2s$export$default === 'function') {
  $Js2s$export$default = $Js2s$export$default.options;
}
/* template */


Object.assign($Js2s$export$default, function () {
  var render = function () {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticStyle: {
        "font-family": "\"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace",
        "background": "#00000099",
        "width": "100%",
        "height": "100%",
        "overflow": "scroll",
        "color": "white"
      }
    }, [_c('div', {
      staticStyle: {
        "height": "24px"
      }
    }, [_vm._v("\n\n    " + _vm._s(_vm.title) + "\n\n    "), _c('label', {
      staticStyle: {
        "margin-right": "10px",
        "background": "#00000099",
        "color": "white",
        "border": "white solid 1px",
        "border-radius": "5px",
        "font-size": "0.75em",
        "padding": "0 4px"
      },
      attrs: {
        "for": "saveInput"
      }
    }, [_vm._v("save")]), _vm._v(" "), _c('button', {
      attrs: {
        "id": "saveInput",
        "hidden": "",
        "type": "file"
      },
      on: {
        "click": _vm.save
      }
    }, [_vm._v("save")]), _vm._v(" "), _c('label', {
      staticStyle: {
        "margin-right": "10px",
        "background": "#00000099",
        "color": "white",
        "border": "white solid 1px",
        "border-radius": "5px",
        "font-size": "0.75em",
        "padding": "0 4px"
      },
      attrs: {
        "for": "loadInput"
      }
    }, [_vm._v("load")]), _vm._v(" "), _c('input', {
      attrs: {
        "id": "loadInput",
        "hidden": "",
        "type": "file"
      },
      on: {
        "change": _vm.onLoad
      }
    })]), _vm._v(" "), _vm._l(_vm.curves, function (c) {
      return _c('CurveEditor', {
        ref: "curves",
        refInFor: true,
        attrs: {
          "curve": c
        }
      });
    })], 2);
  };

  var staticRenderFns = [];
  return {
    render: render,
    staticRenderFns: staticRenderFns,
    _compiled: true,
    _scopeId: null,
    functional: undefined
  };
}());
// import { readFileSync } from 'fs';
// const rawStylz = readFileSync(__dirname + '/CurveComposer.css', 'utf-8');
// var style = document.createElement('style')
// style.type = 'text/css'
// style.appendChild(document.createTextNode(rawStylz))
// document.head.appendChild(style)
const $qLB$var$CurveEditor = $QPfz$export$default.extend($Js2s$export$default);

function $qLB$var$CurveComposer(elementId = "#CurveComposer") {
  var instance = new $qLB$var$CurveEditor({
    el: elementId
  });
  return instance;
}

$QPfz$export$default.config.productionTip = false;
$qLB$exports = $qLB$var$CurveComposer;

if (typeof exports === "object" && typeof module !== "undefined") {
  // CommonJS
  module.exports = $qLB$exports;
} else if (typeof define === "function" && define.amd) {
  // RequireJS
  define(function () {
    return $qLB$exports;
  });
}
})();