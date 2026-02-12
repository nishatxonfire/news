// ==============================================
// BD News - Bangladesh News Aggregator & Media App
// ==============================================
// A React application that aggregates news from various Bangladeshi news channels,
// provides live TV streaming, Islamic calendar (Bangla & Hijri), Ramadan schedule,
// and more.
// ==============================================

// ==============================================
// DEPENDENCIES & IMPORTS
// ==============================================

// IIFE: Modulepreload polyfill for older browsers
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  
  new MutationObserver(r => {
    for (const o of r) {
      if (o.type === "childList") {
        for (const u of o.addedNodes) {
          if (u.tagName === "LINK" && u.rel === "modulepreload") n(u);
        }
      }
    }
  }).observe(document, { childList: true, subtree: true });
  
  function s(r) {
    const o = {};
    if (r.integrity) o.integrity = r.integrity;
    if (r.referrerPolicy) o.referrerPolicy = r.referrerPolicy;
    if (r.crossOrigin === "use-credentials") o.credentials = "include";
    else if (r.crossOrigin === "anonymous") o.credentials = "omit";
    else o.credentials = "same-origin";
    return o;
  }
  
  function n(r) {
    if (r.ep) return;
    r.ep = true;
    const o = s(r);
    fetch(r.href, o);
  }
})();

// Utility: Handle ES module default imports
function up(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}


// ==============================================
// REACT CORE & JSX RUNTIME
// ==============================================

// React JSX Runtime (production)
var gu = { exports: {} };
var Ha = {};

// React JSX Runtime - Production Build
var Om;
function n1() {
  if (Om) return Ha;
  Om = 1;
  
  var l = Symbol.for("react.transitional.element");
  var e = Symbol.for("react.fragment");
  
  function s(n, r, o) {
    var u = null;
    if (o !== void 0 && (u = "" + o), r.key !== void 0 && (u = "" + r.key), "key" in r) {
      o = {};
      for (var d in r) if (d !== "key") o[d] = r[d];
    } else o = r;
    
    r = o.ref;
    
    return {
      $$typeof: l,
      type: n,
      key: u,
      ref: r !== void 0 ? r : null,
      props: o
    };
  }
  
  Ha.Fragment = e;
  Ha.jsx = s;
  Ha.jsxs = s;
  return Ha;
}

var Um;
function a1() {
  return Um || (Um = 1, gu.exports = n1()), gu.exports;
}

var y = a1();


// ==============================================
// REACT CORE LIBRARY
// ==============================================

// React Core (production)
var pu = { exports: {} };
var Le = {};

// React Core - Production Build
var Fm;
function r1() {
  if (Fm) return Le;
  Fm = 1;
  
  // React Symbols
  var l = Symbol.for("react.transitional.element");
  var e = Symbol.for("react.portal");
  var s = Symbol.for("react.fragment");
  var n = Symbol.for("react.strict_mode");
  var r = Symbol.for("react.profiler");
  var o = Symbol.for("react.consumer");
  var u = Symbol.for("react.context");
  var d = Symbol.for("react.forward_ref");
  var f = Symbol.for("react.suspense");
  var h = Symbol.for("react.memo");
  var p = Symbol.for("react.lazy");
  var x = Symbol.for("react.activity");
  var v = Symbol.iterator;
  
  // Helper functions
  function T(D) {
    return D === null || typeof D !== "object" ? null : 
           (D = v && D[v] || D["@@iterator"], typeof D === "function" ? D : null);
  }
  
  var S = {
    isMounted: function() { return false; },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
  };
  
  var E = Object.assign;
  var L = {};
  
  // Component base class
  function w(D, B, ne) {
    this.props = D;
    this.context = B;
    this.refs = L;
    this.updater = ne || S;
  }
  
  w.prototype.isReactComponent = {};
  w.prototype.setState = function(D, B) {
    if (typeof D !== "object" && typeof D !== "function" && D != null)
      throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, D, B, "setState");
  };
  w.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  
  function M() {}
  M.prototype = w.prototype;
  
  function N(D, B, ne) {
    this.props = D;
    this.context = B;
    this.refs = L;
    this.updater = ne || S;
  }
  
  var O = N.prototype = new M();
  O.constructor = N;
  E(O, w.prototype);
  O.isPureReactComponent = true;
  
  var I = Array.isArray;
  function Y() {}
  
  // Internals
  var _ = {
    H: null,
    A: null,
    T: null,
    S: null
  };
  
  var V = Object.prototype.hasOwnProperty;
  
  // React element factory
  function te(D, B, ne) {
    var ae = ne.ref;
    return {
      $$typeof: l,
      type: D,
      key: B,
      ref: ae !== void 0 ? ae : null,
      props: ne
    };
  }
  
  function K(D, B) {
    return te(D.type, B, D.props);
  }
  
  function Z(D) {
    return typeof D === "object" && D !== null && D.$$typeof === l;
  }
  
  // Children utilities
  var q = typeof reportError === "function" ? reportError : function(D) {
    if (typeof window === "object" && typeof window.ErrorEvent === "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: true,
        cancelable: true,
        message: typeof D === "object" && D !== null && typeof D.message === "string" ? String(D.message) : String(D),
        error: D
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof process === "object" && typeof process.emit === "function") {
      process.emit("uncaughtException", D);
      return;
    }
    console.error(D);
  };
  
  var W = {
    map: se,
    forEach: function(D, B, ne) {
      se(D, function() { B.apply(this, arguments); }, ne);
    },
    count: function(D) {
      var B = 0;
      se(D, function() { B++; });
      return B;
    },
    toArray: function(D) {
      return se(D, function(B) { return B; }) || [];
    },
    only: function(D) {
      if (!Z(D)) throw Error("React.Children.only expected to receive a single React element child.");
      return D;
    }
  };
  
  // ============= REACT PUBLIC API =============
  Le.Activity = x;
  Le.Children = W;
  Le.Component = w;
  Le.Fragment = s;
  Le.Profiler = r;
  Le.PureComponent = N;
  Le.StrictMode = n;
  Le.Suspense = f;
  Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _;
  Le.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(D) { return _.H.useMemoCache(D); }
  };
  Le.cache = function(D) { return function() { return D.apply(null, arguments); }; };
  Le.cacheSignal = function() { return null; };
  Le.cloneElement = function(D, B, ne) {
    if (D == null) throw Error("The argument must be a React element, but you passed " + D + ".");
    var ae = E({}, D.props);
    var de = D.key;
    
    if (B != null) {
      for (xe in B) {
        if (B.key !== void 0 && (de = "" + B.key), !V.call(B, xe) || xe === "key" || xe === "__self" || xe === "__source" || xe === "ref" && B.ref === void 0) continue;
        ae[xe] = B[xe];
      }
    }
    
    var xe = arguments.length - 2;
    if (xe === 1) ae.children = ne;
    else if (1 < xe) {
      var Ae = Array(xe);
      for (var qe = 0; qe < xe; qe++) Ae[qe] = arguments[qe + 2];
      ae.children = Ae;
    }
    
    return te(D.type, de, ae);
  };
  
  Le.createContext = function(D) {
    D = {
      $$typeof: u,
      _currentValue: D,
      _currentValue2: D,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    D.Provider = D;
    D.Consumer = { $$typeof: o, _context: D };
    return D;
  };
  
  Le.createElement = function(D, B, ne) {
    var ae, de = {}, xe = null;
    
    if (B != null) {
      for (ae in B) {
        if (B.key !== void 0 && (xe = "" + B.key), V.call(B, ae) && ae !== "key" && ae !== "__self" && ae !== "__source") {
          de[ae] = B[ae];
        }
      }
    }
    
    var Ae = arguments.length - 2;
    if (Ae === 1) de.children = ne;
    else if (1 < Ae) {
      var qe = Array(Ae);
      for (var Be = 0; Be < Ae; Be++) qe[Be] = arguments[Be + 2];
      de.children = qe;
    }
    
    if (D && D.defaultProps) {
      for (ae in Ae = D.defaultProps, Ae) {
        if (de[ae] === void 0) de[ae] = Ae[ae];
      }
    }
    
    return te(D, xe, de);
  };
  
  Le.createRef = function() { return { current: null }; };
  Le.forwardRef = function(D) { return { $$typeof: d, render: D }; };
  Le.isValidElement = Z;
  
  Le.lazy = function(D) {
    return {
      $$typeof: p,
      _payload: { _status: -1, _result: D },
      _init: H
    };
  };
  
  Le.memo = function(D, B) {
    return {
      $$typeof: h,
      type: D,
      compare: B === void 0 ? null : B
    };
  };
  
  Le.startTransition = function(D) {
    var B = _.T, ne = {};
    _.T = ne;
    try {
      var ae = D(), de = _.S;
      if (de !== null) de(ne, ae);
      if (typeof ae === "object" && ae !== null && typeof ae.then === "function") ae.then(Y, q);
    } catch (xe) { q(xe); }
    finally {
      if (B !== null && ne.types !== null) B.types = ne.types;
      _.T = B;
    }
  };
  
  // ============= REACT HOOKS =============
  Le.unstable_useCacheRefresh = function() { return _.H.useCacheRefresh(); };
  Le.use = function(D) { return _.H.use(D); };
  Le.useActionState = function(D, B, ne) { return _.H.useActionState(D, B, ne); };
  Le.useCallback = function(D, B) { return _.H.useCallback(D, B); };
  Le.useContext = function(D) { return _.H.useContext(D); };
  Le.useDebugValue = function() {};
  Le.useDeferredValue = function(D, B) { return _.H.useDeferredValue(D, B); };
  Le.useEffect = function(D, B) { return _.H.useEffect(D, B); };
  Le.useEffectEvent = function(D) { return _.H.useEffectEvent(D); };
  Le.useId = function() { return _.H.useId(); };
  Le.useImperativeHandle = function(D, B, ne) { return _.H.useImperativeHandle(D, B, ne); };
  Le.useInsertionEffect = function(D, B) { return _.H.useInsertionEffect(D, B); };
  Le.useLayoutEffect = function(D, B) { return _.H.useLayoutEffect(D, B); };
  Le.useMemo = function(D, B) { return _.H.useMemo(D, B); };
  Le.useOptimistic = function(D, B) { return _.H.useOptimistic(D, B); };
  Le.useReducer = function(D, B, ne) { return _.H.useReducer(D, B, ne); };
  Le.useRef = function(D) { return _.H.useRef(D); };
  Le.useState = function(D) { return _.H.useState(D); };
  Le.useSyncExternalStore = function(D, B, ne) { return _.H.useSyncExternalStore(D, B, ne); };
  Le.useTransition = function() { return _.H.useTransition(); };
  Le.version = "19.2.3";
  
  return Le;
}

var jm;
function hd() {
  return jm || (jm = 1, pu.exports = r1()), pu.exports;
}

var oe = hd();
const l1 = up(oe);


// ==============================================
// REACT-DOM
// ==============================================

var xu = { exports: {} };
var Va = {};

// React Scheduler
var yu = { exports: {} };
var vu = {};

// Scheduler - Production Build
var Bm;
function o1() {
  return Bm || (Bm = 1, (function(l) {
    // Scheduler implementation
    function e(U, se) {
      var H = U.length;
      U.push(se);
      e: for (; 0 < H;) {
        var q = H - 1 >>> 1, W = U[q];
        if (0 < r(W, se)) {
          U[q] = se;
          U[H] = W;
          H = q;
        } else break e;
      }
    }
    
    function s(U) {
      return U.length === 0 ? null : U[0];
    }
    
    function n(U) {
      if (U.length === 0) return null;
      var se = U[0], H = U.pop();
      if (H !== se) {
        U[0] = H;
        e: for (var q = 0, W = U.length, D = W >>> 1; q < D;) {
          var B = 2 * (q + 1) - 1, ne = U[B], ae = B + 1, de = U[ae];
          if (0 > r(ne, H)) {
            if (ae < W && 0 > r(de, ne)) {
              U[q] = de;
              U[ae] = H;
              q = ae;
            } else {
              U[q] = ne;
              U[B] = H;
              q = B;
            }
          } else if (ae < W && 0 > r(de, H)) {
            U[q] = de;
            U[ae] = H;
            q = ae;
          } else break e;
        }
      }
      return se;
    }
    
    function r(U, se) {
      var H = U.sortIndex - se.sortIndex;
      return H !== 0 ? H : U.id - se.id;
    }
    
    if (l.unstable_now = void 0, typeof performance === "object" && typeof performance.now === "function") {
      var o = performance;
      l.unstable_now = function() { return o.now(); };
    } else {
      var u = Date, d = u.now();
      l.unstable_now = function() { return u.now() - d; };
    }
    
    var f = [], h = [], p = 1, x = null, v = 3, T = false, S = false, E = false, L = false;
    var w = typeof setTimeout === "function" ? setTimeout : null;
    var M = typeof clearTimeout === "function" ? clearTimeout : null;
    var N = typeof setImmediate < "u" ? setImmediate : null;
    
    // ... scheduler implementation continues ...
    
    l.unstable_IdlePriority = 5;
    l.unstable_ImmediatePriority = 1;
    l.unstable_LowPriority = 4;
    l.unstable_NormalPriority = 3;
    l.unstable_Profiling = null;
    l.unstable_UserBlockingPriority = 2;
    l.unstable_cancelCallback = function(U) { U.callback = null; };
    l.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? 
        console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : 
        (V = 0 < U ? Math.floor(1000 / U) : 5);
    };
    l.unstable_getCurrentPriorityLevel = function() { return v; };
    l.unstable_next = function(U) {
      switch (v) {
        case 1: case 2: case 3: var se = 3; break;
        default: se = v;
      }
      var H = v;
      v = se;
      try { return U(); } finally { v = H; }
    };
    l.unstable_requestPaint = function() { L = true; };
    l.unstable_runWithPriority = function(U, se) {
      switch (U) {
        case 1: case 2: case 3: case 4: case 5: break;
        default: U = 3;
      }
      var H = v;
      v = U;
      try { return se(); } finally { v = H; }
    };
    l.unstable_scheduleCallback = function(U, se, H) { /* ... */ };
    l.unstable_shouldYield = K;
    l.unstable_wrapCallback = function(U) {
      var se = v;
      return function() {
        var H = v;
        v = se;
        try { return U.apply(this, arguments); } finally { v = H; }
      };
    };
  })(vu)), vu;
}

var Pm;
function c1() {
  return Pm || (Pm = 1, yu.exports = o1()), yu.exports;
}

var bu = { exports: {} };
var Rt = {};

// React DOM - Production Build
var Gm;
function u1() {
  if (Gm) return Rt;
  Gm = 1;
  
  var l = hd();
  var se = bu.exports = function() { /* ... */ };
  
  // React DOM Public API
  Rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n;
  Rt.createPortal = function(f, h) {
    var p = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11) throw Error(e(299));
    return o(f, h, null, p);
  };
  Rt.flushSync = function(f) { /* ... */ };
  Rt.preconnect = function(f, h) { /* ... */ };
  Rt.prefetchDNS = function(f) { /* ... */ };
  Rt.preinit = function(f, h) { /* ... */ };
  Rt.preinitModule = function(f, h) { /* ... */ };
  Rt.preload = function(f, h) { /* ... */ };
  Rt.preloadModule = function(f, h) { /* ... */ };
  Rt.requestFormReset = function(f) { n.d.r(f); };
  Rt.unstable_batchedUpdates = function(f, h) { return f(h); };
  Rt.useFormState = function(f, h, p) { return u.H.useFormState(f, h, p); };
  Rt.useFormStatus = function() { return u.H.useHostTransitionStatus(); };
  Rt.version = "19.2.3";
  
  return Rt;
}

var zm;
function d1() { return zm || (zm = 1, bu.exports = u1()), bu.exports; }

// React DOM Client - Production Build
var $m;
function f1() {
  if ($m) return Va;
  $m = 1;
  
  var l = c1();
  var e = hd();
  var s = d1();
  
  // ============= REACT DOM CLIENT =============
  Va.createRoot = function(t, i) {
    if (!r(t)) throw Error(n(299));
    var a = false, c = "", m = Gh, g = zh, b = $h;
    
    if (i != null) {
      if (i.unstable_strictMode === true) a = true;
      if (i.identifierPrefix !== void 0) c = i.identifierPrefix;
      if (i.onUncaughtError !== void 0) m = i.onUncaughtError;
      if (i.onCaughtError !== void 0) g = i.onCaughtError;
      if (i.onRecoverableError !== void 0) b = i.onRecoverableError;
    }
    
    i = Tm(t, 1, false, null, null, a, c, null, m, g, b, km());
    t[Zi] = i.current;
    Xc(t);
    
    return new mu(i);
  };
  
  Va.hydrateRoot = function(t, i, a) {
    if (!r(t)) throw Error(n(299));
    var c = false, m = "", g = Gh, b = zh, R = $h, C = null;
    
    if (a != null) {
      if (a.unstable_strictMode === true) c = true;
      if (a.identifierPrefix !== void 0) m = a.identifierPrefix;
      if (a.onUncaughtError !== void 0) g = a.onUncaughtError;
      if (a.onCaughtError !== void 0) b = a.onCaughtError;
      if (a.onRecoverableError !== void 0) R = a.onRecoverableError;
      if (a.formState !== void 0) C = a.formState;
    }
    
    i = Tm(t, 1, true, i, a ?? null, c, m, C, g, b, R, km());
    i.context = Em(null);
    a = i.current;
    c = Yt();
    c = io(c);
    m = oi(c);
    m.callback = null;
    ci(a, m, c);
    a = c;
    i.current.lanes = a;
    ea(i, a);
    vs(i);
    t[Zi] = i.current;
    Xc(t);
    
    return new gl(i);
  };
  
  Va.version = "19.2.3";
  
  return Va;
}

var Hm;
function h1() {
  if (Hm) return xu.exports;
  Hm = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l); } catch (e) { console.error(e); }
  }
  l();
  return xu.exports = f1(), xu.exports;
}

var m1 = h1();
const g1 = up(m1); // ReactDOM client


// ==============================================
// APPLICATION CONFIGURATION
// ==============================================

// News sources configuration
const NEWS_SOURCES = {
  jamuna: {
    name: "Jamuna TV",
    color: "bg-red-600",
    url: "https://jamuna.nurayistiqbalofficial.workers.dev/"
  },
  somoy: {
    name: "Somoy TV",
    color: "bg-teal-600",
    url: "https://somoy.shortcutbd.workers.dev/"
  },
  c24: {
    name: "Channel 24",
    color: "bg-green-600",
    url: "https://api.codetabs.com/v1/proxy?quest=https://news-api-kohl-delta.vercel.app/channel24bd.tv"
  },
  itv: {
    name: "Independent",
    color: "bg-orange-600",
    url: "https://api.codetabs.com/v1/proxy?quest=https://news-api-kohl-delta.vercel.app/itvbd.com"
  },
  atn: {
    name: "ATN News",
    color: "bg-blue-600",
    url: "https://api.codetabs.com/v1/proxy?quest=https://news-api-kohl-delta.vercel.app/atnnewstv.com"
  }
};


// ==============================================
// LUCIDE REACT ICONS
// ==============================================

// Icon utility functions
const p1 = l => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const x1 = l => l.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, s, n) => n ? n.toUpperCase() : s.toLowerCase());
const Vm = l => { const e = x1(l); return e.charAt(0).toUpperCase() + e.slice(1); };
const dp = (...l) => l.filter((e, s, n) => !!e && e.trim() !== "" && n.indexOf(e) === s).join(" ").trim();

const y1 = l => {
  for (const e in l)
    if (e.startsWith("aria-") || e === "role" || e === "title") return true;
  return false;
};

// Base SVG icon component
var v1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

const b1 = oe.forwardRef(({
  color: l = "currentColor",
  size: e = 24,
  strokeWidth: s = 2,
  absoluteStrokeWidth: n,
  className: r = "",
  children: o,
  iconNode: u,
  ...d
}, f) => {
  return oe.createElement("svg", {
    ref: f,
    ...v1,
    width: e,
    height: e,
    stroke: l,
    strokeWidth: n ? Number(s) * 24 / Number(e) : s,
    className: dp("lucide", r),
    ...(!o && !y1(d) && { "aria-hidden": "true" }),
    ...d
  }, [
    ...u.map(([h, p]) => oe.createElement(h, p)),
    ...(Array.isArray(o) ? o : [o])
  ]);
});

// Icon factory function
const ye = (l, e) => {
  const s = oe.forwardRef(({ className: n, ...r }, o) => {
    return oe.createElement(b1, {
      ref: o,
      iconNode: e,
      className: dp(`lucide-${p1(Vm(l))}`, `lucide-${l}`, n),
      ...r
    });
  });
  s.displayName = Vm(l);
  return s;
};

// ============= ICON DEFINITIONS =============

// Arrow Left
const S1 = [["path", { d: "m12 19-7-7 7-7", key: "1l729n" }], ["path", { d: "M19 12H5", key: "x3x0zl" }]];
const Km = ye("arrow-left", S1);

// Book Open
const T1 = [["path", { d: "M12 7v14", key: "1akyts" }], ["path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z", key: "ruj8y" }]];
const Su = ye("book-open", T1);

// Calendar Days
const E1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const Ki = ye("calendar-days", E1);

// Calendar (simple)
const A1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Kn = ye("calendar", A1);

// Cast
const L1 = [
  ["path", { d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6", key: "3zrzxg" }],
  ["path", { d: "M2 12a9 9 0 0 1 8 8", key: "g6cvee" }],
  ["path", { d: "M2 16a5 5 0 0 1 4 4", key: "1y1dii" }],
  ["line", { x1: "2", x2: "2.01", y1: "20", y2: "20", key: "xu2jvo" }]
];
const R1 = ye("cast", L1);

// Check
const w1 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const D1 = ye("check", w1);

// Chevron Down
const _1 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const fp = ye("chevron-down", _1);

// Chevron Left
const C1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const N1 = ye("chevron-left", C1);

// Chevron Right
const I1 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const k1 = ye("chevron-right", I1);

// Chevron Up
const M1 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const O1 = ye("chevron-up", M1);

// Circle Check Big
const U1 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const Xu = ye("circle-check-big", U1);

// Circle Question Mark
const F1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const j1 = ye("circle-question-mark", F1);

// Cloud Rain
const B1 = [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M16 14v6", key: "1j4efv" }],
  ["path", { d: "M8 14v6", key: "17c4r9" }],
  ["path", { d: "M12 16v6", key: "c8a4gj" }]
];
const Qu = ye("cloud-rain", B1);

// Code
const P1 = [
  ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
  ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }]
];
const G1 = ye("code", P1);

// Copy
const z1 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const $1 = ye("copy", z1);

// Download
const H1 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const V1 = ye("download", H1);

// Ellipsis Vertical
const K1 = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
];
const q1 = ye("ellipsis-vertical", K1);

// External Link
const Y1 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const hp = ye("external-link", Y1);

// Eye
const X1 = [
  ["path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0", key: "1nclc0" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const qm = ye("eye", X1);

// Flag
const Q1 = [
  ["path", { d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528", key: "1jaruq" }]
];
const Z1 = ye("flag", Q1);

// Flower 2
const W1 = [
  ["path", { d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1", key: "3pnvol" }],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  ["path", { d: "M12 10v12", key: "6ubwww" }],
  ["path", { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z", key: "9hd38g" }],
  ["path", { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z", key: "ufn41s" }]
];
const J1 = ye("flower-2", W1);

// Globe
const eb = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const tb = ye("globe", eb);

// Heart Handshake
const sb = [
  ["path", { d: "M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762", key: "17lmqv" }]
];
const ib = ye("heart-handshake", sb);

// Heart
const nb = [
  ["path", { d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5", key: "mvr1a0" }]
];
const Ul = ye("heart", nb);

// Hourglass
const ab = [
  ["path", { d: "M5 22h14", key: "ehvnwv" }],
  ["path", { d: "M5 2h14", key: "pdyrp9" }],
  ["path", { d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22", key: "1d314k" }],
  ["path", { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2", key: "1vvvr6" }]
];
const rb = ye("hourglass", ab);

// Info
const lb = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const mp = ye("info", lb);

// Layout Grid
const ob = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
];
const cb = ye("layout-grid", ob);

// Leaf
const ub = [
  ["path", { d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z", key: "nnexq3" }],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
];
const db = ye("leaf", ub);

// Link
const fb = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
const hb = ye("link", fb);

// Loader Circle
const mb = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const gp = ye("loader-circle", mb);

// Map Pin
const gb = [
  ["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0", key: "1r0f0z" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const pb = ye("map-pin", gb);

// Maximize
const xb = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
];
const yb = ye("maximize", xb);

// Moon
const vb = [["path", { d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401", key: "kfwtm" }]];
const Xa = ye("moon", vb);

// Pause
const bb = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
];
const Sb = ye("pause", bb);

// Play
const Tb = [["path", { d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z", key: "10ikf1" }]];
const Eb = ye("play", Tb);

// Plus
const Ab = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Lb = ye("plus", Ab);

// Radio
const Rb = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const pp = ye("radio", Rb);

// Refresh Cw
const wb = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const Fl = ye("refresh-cw", wb);

// Search
const Db = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const xp = ye("search", Db);

// Send
const _b = [
  ["path", { d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z", key: "1ffxy3" }],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Tu = ye("send", _b);

// Share 2
const Cb = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
const Nb = ye("share-2", Cb);

// Shield Check
const Ib = [
  ["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const Ym = ye("shield-check", Ib);

// Signal
const kb = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }],
  ["path", { d: "M22 4v16", key: "sih9yq" }]
];
const Xm = ye("signal", kb);

// Snowflake
const Mb = [
  ["path", { d: "m10 20-1.25-2.5L6 18", key: "18frcb" }],
  ["path", { d: "M10 4 8.75 6.5 6 6", key: "7mghy3" }],
  ["path", { d: "m14 20 1.25-2.5L18 18", key: "1chtki" }],
  ["path", { d: "m14 4 1.25 2.5L18 6", key: "1b4wsy" }],
  ["path", { d: "m17 21-3-6h-4", key: "15hhxa" }],
  ["path", { d: "m17 3-3 6 1.5 3", key: "11697g" }],
  ["path", { d: "M2 12h6.5L10 9", key: "kv9z4n" }],
  ["path", { d: "m20 10-1.5 2 1.5 2", key: "1swlpi" }],
  ["path", { d: "M22 12h-6.5L14 15", key: "1mxi28" }],
  ["path", { d: "m4 10 1.5 2L4 14", key: "k9enpj" }],
  ["path", { d: "m7 21 3-6-1.5-3", key: "j8hb9u" }],
  ["path", { d: "m7 3 3 6h4", key: "1otusx" }]
];
const Ob = ye("snowflake", Mb);

// Sparkles
const Ub = [
  ["path", { d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z", key: "1s2grr" }],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Fb = ye("sparkles", Ub);

// Sun
const jb = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const qa = ye("sun", jb);

// Tag
const Bb = [
  ["path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z", key: "vktsd0" }],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Pb = ye("tag", Bb);

// Thumbs Up
const Gb = [
  ["path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z", key: "emmmcr" }],
  ["path", { d: "M7 10v12", key: "1qc93n" }]
];
const zb = ye("thumbs-up", Gb);

// Timer
const $b = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
];
const Hb = ye("timer", $b);

// Trash 2
const Vb = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Kb = ye("trash-2", Vb);

// TV
const qb = [
  ["path", { d: "m17 2-5 5-5-5", key: "16satq" }],
  ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", key: "1e6viu" }]
];
const yp = ye("tv", qb);

// User
const Yb = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const Xb = ye("user", Yb);

// Volume 2
const Qb = [
  ["path", { d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z", key: "uqj9uw" }],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
];
const Zb = ye("volume-2", Qb);

// Volume X
const Wb = [
  ["path", { d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z", key: "uqj9uw" }],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
];
const Jb = ye("volume-x", Wb);

// Wifi Off
const eS = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
  ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
  ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const md = ye("wifi-off", eS);

// X (Close)
const tS = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const Ja = ye("x", tS);

// Zap
const sS = [["path", { d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z", key: "1xq2db" }]];
const iS = ye("zap", sS);


// ==============================================
// UI COMPONENTS
// ==============================================

// ------------------------------
// News Card Component
// ------------------------------
const nS = ({ item: l, onClick: e }) => {
  return y.jsxs("div", {
    onClick: () => e(l),
    className: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden active:scale-[0.99] transition-all duration-300 cursor-pointer flex flex-col h-full hover:shadow-xl hover:border-gray-300 hover:-translate-y-1 group",
    children: [
      // Image section
      y.jsxs("div", {
        className: "relative aspect-video w-full bg-slate-100 overflow-hidden",
        children: [
          y.jsx("img", {
            src: l.image,
            alt: l.title,
            loading: "lazy",
            className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
            onError: s => { s.target.src = "https://placehold.co/600x400/png?text=News"; }
          }),
          y.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          }),
          y.jsx("div", {
            className: `absolute top-3 left-3 px-2.5 py-1 rounded text-[10px] font-bold text-white shadow-sm tracking-wide uppercase ${l.sourceColor}`,
            children: l.sourceName
          })
        ]
      }),
      // Content section
      y.jsxs("div", {
        className: "p-5 flex flex-col gap-3 flex-grow",
        children: [
          y.jsx("h3", {
            className: "text-[17px] font-bold text-slate-800 leading-[1.4] line-clamp-2 group-hover:text-red-700 transition-colors",
            children: l.title
          }),
          l.subtitle && y.jsx("p", {
            className: "text-sm text-slate-500 line-clamp-2 leading-relaxed mb-auto font-medium",
            children: l.subtitle
          }),
          y.jsx("div", {
            className: "flex items-center justify-between mt-auto pt-4 border-t border-dashed border-gray-100",
            children: y.jsxs("div", {
              className: "flex items-center gap-1.5 text-xs text-slate-400 font-semibold bg-slate-50 px-2 py-1 rounded-md",
              children: [
                y.jsx(Kn, { className: "w-3 h-3" }),
                y.jsx("span", { children: l.timeStr })
              ]
            })
          })
        ]
      })
    ]
  });
};

// ------------------------------
// Loader Component
// ------------------------------
const Qm = () => {
  return y.jsx("div", {
    className: "scale-75 md:scale-100",
    children: y.jsx("div", { className: "loader" })
  });
};

// ------------------------------
// Date & Time Formatter Utilities
// ------------------------------
const vp = ["", "", "", "", "", "", "", "", "", ""];
const os = l => l.toString().replace(/\d/g, e => vp[parseInt(e)]);

const aS = l => l.replace(/[-]/g, e => vp.indexOf(e).toString());

const rS = l => {
  if (!l) return Date.now();
  if (/^\d+$/.test(l)) {
    const o = parseInt(l, 10);
    if (!isNaN(o)) return o;
  }
  
  const e = aS(l);
  let s = Date.parse(e);
  if (!isNaN(s)) return s;
  
  const n = {
    : "January",
    : "February",
    : "March",
    : "April",
    : "May",
    : "June",
    : "July",
    : "August",
    : "September",
    : "October",
    : "November",
    : "December"
  };
  
  let r = e;
  Object.keys(n).forEach(o => { r = r.replace(o, n[o]); });
  r = r.replace(" :", "").replace(" :", "").replace(":", "").trim();
  s = Date.parse(r);
  
  return isNaN(s) ? Date.now() : s;
};

// ------------------------------
// Article Detail Component
// ------------------------------
const lS = ({ 
  item: l, 
  onBack: e, 
  onNext: s, 
  onPrev: n, 
  hasNext: r, 
  hasPrev: o, 
  isFavorite: u, 
  onToggleFavorite: d 
}) => {
  const [f, h] = oe.useState(l);
  const [p, x] = oe.useState(false);
  const [v, T] = oe.useState(false);
  const S = oe.useRef(null);
  const E = u(f.uniqueId);
  
  useEffect(() => {
    T(false);
    h(l);
    window.scrollTo(0, 0);
    if (l.sourceId === "somoy" && l.slug) {
      L(l.slug, false);
    } else {
      x(false);
    }
  }, [l]);
  
  // Fetch Somoy news details
  const L = async (O, I) => {
    var Y, _, V;
    x(true);
    if (I) T(true);
    try {
      const K = await (await fetch(`https://somoy.shortcutbd.workers.dev/?slug=${O}`)).json();
      const Z = (V = (_ = (Y = K == null ? void 0 : K.data) == null ? void 0 : Y.news) == null ? void 0 : _.news) == null ? void 0 : V[0];
      
      if (Z) {
        h(ce => {
          const le = I ? {} : ce;
          const me = Z.published_at || Z.publishedAt || Z.created_at;
          let fe = le.timestamp || Date.now();
          if (me) fe = rS(me.toString());
          
          let U = `https://www.somoynews.tv/news/${O}`;
          if (me) {
            try {
              let q;
              if (/^\d+$/.test(me.toString())) {
                q = new Date(parseInt(me.toString()));
              } else {
                q = new Date(me);
              }
              if (!isNaN(q.getTime())) {
                U = `https://www.somoynews.tv/news/${q.toISOString().split("T")[0]}/${O}`;
              }
            } catch {}
          }
          
          const se = Z.news_view !== void 0 ? Z.news_view : Z.totalReads;
          const H = Z.news_like !== void 0 ? Z.news_like : Z.likes;
          
          return {
            ...ce,
            title: Z.title || le.title || "",
            subtitle: Z.subtitle || le.subtitle || "",
            image: Z.coverImage || le.image || "",
            body: Z.content_details || Z.description || le.body || "",
            reporter: Z.authorName || le.reporter || "Somoy Desk",
            category: Z.category_name || le.category,
            views: se !== void 0 ? parseInt(se) : le.views,
            likes: H !== void 0 ? parseInt(H) : le.likes,
            timeStr: w(fe),
            timestamp: fe,
            url: U,
            slug: O
          };
        });
      }
    } catch (te) {
      console.error("Failed to fetch detail", te);
    } finally {
      x(false);
      T(false);
    }
  };
  
  // Format timestamp to Bengali datetime string
  const w = O => {
    const I = new Date(O);
    if (isNaN(I.getTime())) return "";
    return new Intl.DateTimeFormat("bn-BD", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    }).format(I);
  };
  
  // Check if content contains HTML
  const M = O => /<[a-z][\s\S]*>/i.test(O);
  
  // Handle internal link clicks
  const N = O => {
    const Y = O.target.closest("a");
    if (Y && Y.href) {
      const _ = Y.href.match(/somoynews\.tv\/news\/.*\/([a-zA-Z0-9]+)$/);
      const V = Y.href.match(/somoynews\.tv\/news\/([a-zA-Z0-9]+)$/);
      const te = _ ? _[1] : V ? V[1] : null;
      
      if (te) {
        O.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        L(te, true);
      }
    }
  };
  
  // Loading state
  if (v && p) {
    return y.jsxs("div", {
      className: "min-h-screen bg-white flex flex-col animate-in fade-in duration-200",
      children: [
        y.jsx("div", {
          className: "h-14 border-b border-gray-100 flex items-center px-4",
          children: y.jsx("button", {
            onClick: e,
            className: "p-2 -ml-2 text-slate-400",
            children: y.jsx(Km, { className: "w-6 h-6" })
          })
        }),
        y.jsxs("div", {
          className: "flex-grow flex flex-col items-center justify-center gap-3",
          children: [
            y.jsx(Qm, {}),
            y.jsx("span", {
              className: "text-slate-400 text-sm animate-pulse",
              children: "   ..."
            })
          ]
        })
      ]
    });
  }
  
  // Main content
  return y.jsxs("div", {
    className: "min-h-screen bg-white pb-0 flex flex-col animate-in slide-in-from-bottom-5 duration-300",
    children: [
      // Sticky header
      y.jsxs("div", {
        className: "sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 h-14 flex items-center justify-between shadow-sm",
        children: [
          y.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              y.jsx("button", {
                onClick: e,
                className: "p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors text-slate-700",
                children: y.jsx(Km, { className: "w-6 h-6" })
              }),
              y.jsx("span", {
                className: `text-[10px] font-bold px-3 py-0.5 rounded-full text-white shadow-sm ${l.sourceColor}`,
                children: l.sourceName
              })
            ]
          }),
          y.jsxs("div", {
            className: "flex items-center gap-1",
            children: [
              (f.likes !== void 0 || f.views !== void 0) && l.sourceId === "somoy" && 
              y.jsx("div", {
                className: "hidden sm:flex items-center gap-2 text-[10px] text-slate-500 font-medium mr-2",
                children: f.views !== void 0 && y.jsxs("div", {
                  className: "flex items-center gap-0.5",
                  children: [
                    y.jsx(qm, { className: "w-3 h-3" }),
                    os(f.views)
                  ]
                })
              }),
              y.jsx("button", {
                className: `p-2 rounded-full transition-all active:scale-90 ${E ? "bg-red-50 text-red-600" : "hover:bg-slate-100 text-slate-700"}`,
                onClick: () => d(f),
                title: E ? "  " : " ",
                children: y.jsx(Ul, { className: `w-5 h-5 ${E ? "fill-red-600" : ""}` })
              }),
              y.jsx("button", {
                className: "p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-700",
                onClick: () => {
                  navigator.share && navigator.share({
                    title: f.title,
                    text: f.subtitle,
                    url: f.url
                  }).catch(console.error);
                },
                children: y.jsx(Nb, { className: "w-5 h-5" })
              })
            ]
          })
        ]
      }),
      
      y.jsxs("div", {
        className: "flex-grow",
        children: [
          // Image with navigation
          y.jsxs("div", {
            className: "w-full aspect-video bg-slate-100 relative group overflow-hidden",
            children: [
              y.jsx("img", {
                src: f.image,
                alt: f.title,
                className: "w-full h-full object-cover",
                onError: O => { O.target.src = "https://placehold.co/600x400/png?text=No+Image"; }
              }),
              y.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"
              }),
              y.jsxs("div", {
                className: "absolute inset-0 flex items-center justify-between px-2 pointer-events-none",
                children: [
                  o && y.jsx("button", {
                    onClick: O => { O.stopPropagation(); n(); },
                    className: "w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-all pointer-events-auto active:scale-90",
                    children: y.jsx(N1, { className: "w-6 h-6" })
                  }),
                  r && y.jsx("button", {
                    onClick: O => { O.stopPropagation(); s(); },
                    className: "w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-all pointer-events-auto active:scale-90",
                    children: y.jsx(k1, { className: "w-6 h-6" })
                  })
                ]
              })
            ]
          }),
          
          // Content
          y.jsxs("div", {
            className: "px-5 py-6 space-y-6 max-w-2xl mx-auto",
            children: [
              // Title & metadata
              y.jsxs("div", {
                className: "space-y-4",
                children: [
                  y.jsx("h1", {
                    className: "text-2xl md:text-3xl font-bold text-slate-900 leading-[1.3] text-justify",
                    children: f.title
                  }),
                  y.jsxs("div", {
                    className: "flex flex-col gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100",
                    children: [
                      y.jsxs("div", {
                        className: "flex items-center justify-between border-b border-slate-200 pb-3",
                        children: [
                          y.jsxs("div", {
                            className: "flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-wider",
                            children: [
                              y.jsx(Pb, { className: "w-4 h-4" }),
                              f.category || f.sourceName
                            ]
                          }),
                          y.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              f.views !== void 0 && y.jsxs("div", {
                                className: "flex items-center gap-1.5 text-slate-500 text-xs font-semibold",
                                title: " ",
                                children: [
                                  y.jsx(qm, { className: "w-3.5 h-3.5" }),
                                  os(f.views)
                                ]
                              }),
                              f.likes !== void 0 && f.likes > 0 && y.jsxs("div", {
                                className: "flex items-center gap-1.5 text-blue-600 text-xs font-bold",
                                title: "",
                                children: [
                                  y.jsx(zb, { className: "w-3.5 h-3.5" }),
                                  os(f.likes)
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      y.jsxs("div", {
                        className: "flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600",
                        children: [
                          y.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              y.jsx(Kn, { className: "w-4 h-4 text-slate-400" }),
                              y.jsx("span", { className: "font-medium", children: f.timeStr })
                            ]
                          }),
                          f.reporter && y.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              y.jsx("div", { className: "w-1 h-1 rounded-full bg-slate-400" }),
                              y.jsx(Xb, { className: "w-4 h-4 text-slate-400" }),
                              y.jsx("span", { className: "font-semibold text-slate-800", children: f.reporter })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              
              y.jsx("hr", { className: "border-gray-100" }),
              
              // Body content
              p ? 
                y.jsxs("div", {
                  className: "flex flex-col items-center justify-center py-12 text-slate-400 gap-2",
                  children: [
                    y.jsx(Qm, {}),
                    y.jsx("span", {
                      className: "text-xs font-medium animate-pulse",
                      children: "  ..."
                    })
                  ]
                }) : 
                y.jsxs("article", {
                  ref: S,
                  onClick: N,
                  className: "prose prose-slate prose-lg max-w-none font-sans text-slate-800 leading-8",
                  children: [
                    f.subtitle && !f.body.includes(f.subtitle) && 
                    y.jsx("p", {
                      className: "font-semibold text-lg text-slate-700 mb-6 leading-relaxed border-l-4 border-red-500 pl-4 bg-red-50 py-2 rounded-r-lg",
                      children: f.subtitle
                    }),
                    
                    M(f.body) ? 
                      y.jsx("div", {
                        dangerouslySetInnerHTML: { __html: f.body },
                        className: `
                          [&>p]:mb-4 [&>p]:text-[18px] [&>p]:text-justify [&>p]:leading-8 
                          [&_a]:text-blue-600 [&_a]:underline [&_a]:font-semibold 
                          [&_strong]:text-slate-900 
                          [&_img]:rounded-xl [&_img]:shadow-md [&_img]:my-6
                          [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-2
                        `
                      }) : 
                      f.body.split("\n").map((O, I) => O.trim() && y.jsx("p", {
                        className: "mb-4 text-[18px] text-justify",
                        children: O.trim()
                      }, I))
                  ]
                }),
              
              // Attribution
              y.jsx("div", {
                className: "pt-8 pb-4",
                children: y.jsxs("div", {
                  className: "bg-slate-50 border border-slate-200 rounded-xl p-5 relative overflow-hidden group hover:border-blue-200 transition-colors",
                  children: [
                    y.jsx("div", {
                      className: "absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity",
                      children: y.jsx(tb, { className: "w-24 h-24 text-blue-900" })
                    }),
                    y.jsxs("h3", {
                      className: "text-base font-bold text-slate-800 mb-2 relative z-10 flex items-center gap-2",
                      children: [
                        y.jsx("span", { className: `w-2 h-2 rounded-full ${l.sourceColor}` }),
                        ": ",
                        l.sourceName
                      ]
                    }),
                    y.jsxs("p", {
                      className: "text-slate-600 text-sm mb-5 relative z-10 leading-relaxed",
                      children: [
                        "   ",
                        y.jsx("strong", { children: l.sourceName }),
                        "-                   "
                      ]
                    }),
                    y.jsxs("a", {
                      href: f.url,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "inline-flex items-center justify-center gap-2 w-full bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-lg font-bold hover:bg-slate-100 hover:border-slate-300 transition-all text-sm shadow-sm relative z-10 active:scale-95 hover:text-blue-600",
                      children: [
                        "   ",
                        y.jsx(hp, { className: "w-4 h-4" })
                      ]
                    })
                  ]
                })
              })
            ]
          })
        ]
      }),
      
      // Footer
      y.jsx("footer", {
        className: "bg-slate-50 border-t border-slate-200 py-6 mt-4",
        children: y.jsx("div", {
          className: "container mx-auto px-4 text-center space-y-2",
          children: y.jsxs("p", {
            className: "text-xs text-slate-500 max-w-xs mx-auto leading-relaxed",
            children: [
              "Content Copyright  ",
              new Date().getFullYear(),
              " ",
              y.jsx("span", { className: "font-bold text-slate-700", children: l.sourceName }),
              ". All rights reserved to the respective news channel."
            ]
          })
        })
      })
    ]
  });
};

// ------------------------------
// Loading Skeleton for News Grid
// ------------------------------
const oS = () => {
  return y.jsx("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-pulse",
    children: [1, 2, 3, 4, 5, 6, 7, 8].map(l => 
      y.jsxs("div", {
        className: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full flex flex-col",
        children: [
          y.jsx("div", {
            className: "aspect-video w-full bg-slate-200 relative",
            children: y.jsx("div", { className: "absolute top-3 left-3 w-16 h-6 bg-slate-300 rounded shadow-sm" })
          }),
          y.jsxs("div", {
            className: "p-5 flex flex-col gap-4 flex-grow",
            children: [
              y.jsxs("div", {
                className: "space-y-2",
                children: [
                  y.jsx("div", { className: "h-5 bg-slate-200 rounded w-full" }),
                  y.jsx("div", { className: "h-5 bg-slate-200 rounded w-3/4" })
                ]
              }),
              y.jsxs("div", {
                className: "space-y-2 mt-2",
                children: [
                  y.jsx("div", { className: "h-3 bg-slate-100 rounded w-full" }),
                  y.jsx("div", { className: "h-3 bg-slate-100 rounded w-5/6" })
                ]
              }),
              y.jsx("div", {
                className: "flex items-center justify-between mt-auto pt-4 border-t border-dashed border-gray-100",
                children: y.jsx("div", { className: "h-6 w-24 bg-slate-100 rounded-md" })
              })
            ]
          })
        ]
      }, l)
    )
  });
};

// ------------------------------
// Bottom Tab Navigation Component
// ------------------------------
const cS = ({ activeTab: l, onTabChange: e }) => {
  const s = [
    { id: "all", label: " ", icon: y.jsx(cb, { className: "w-5 h-5" }) },
    { id: "somoy", label: "", icon: y.jsx(pp, { className: "w-5 h-5" }) },
    { id: "live", label: "", icon: y.jsx(yp, { className: "w-5 h-5" }) },
    { id: "ramadan", label: "", icon: y.jsx(Xa, { className: "w-5 h-5" }) },
    { id: "calendar", label: "", icon: y.jsx(Ki, { className: "w-5 h-5" }) }
  ];
  
  return y.jsx("div", {
    className: "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe z-50 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]",
    children: y.jsx("div", {
      className: "flex justify-around items-center h-16 max-w-lg mx-auto",
      children: s.map(n => {
        let r = l === n.id;
        if (n.id === "all" && ["jamuna", "c24", "itv", "atn"].includes(l)) r = true;
        
        return y.jsxs("button", {
          onClick: () => e(n.id),
          className: `flex flex-col items-center justify-center w-full h-full gap-1 transition-all duration-200 relative ${r ? "text-red-600" : "text-slate-400 hover:text-slate-600"}`,
          children: [
            r && y.jsx("div", { className: "absolute top-0 w-8 h-0.5 bg-red-600 rounded-b-full" }),
            y.jsx("div", {
              className: `p-1 rounded-full ${r ? "bg-red-50 scale-110" : ""} transition-all duration-300`,
              children: n.icon
            }),
            y.jsx("span", {
              className: `text-[10px] font-medium tracking-wide ${r ? "font-bold" : ""}`,
              children: n.label
            })
          ]
        }, n.id);
      })
    })
  });
};

// ------------------------------
// Live Digital Clock Component
// ------------------------------
const uS = () => {
  const [l, e] = oe.useState(new Date());
  
  useEffect(() => {
    const u = setInterval(() => e(new Date()), 1000);
    return () => clearInterval(u);
  }, []);
  
  const s = u => {
    let d = u.getHours();
    const f = u.getMinutes();
    const h = u.getSeconds();
    const p = d >= 12 ? "PM" : "AM";
    d = d % 12 || 12;
    
    const x = `${os(d)}:${os(f.toString().padStart(2, "0"))}`;
    const v = `${os(h.toString().padStart(2, "0"))}`;
    
    return { strTime: x, strSeconds: v, ampm: p };
  };
  
  const { strTime: n, strSeconds: r, ampm: o } = s(l);
  
  return y.jsxs("div", {
    className: "flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-white/50 hover:bg-white hover:shadow-md hover:border-red-100 transition-all cursor-default group backdrop-blur-sm",
    children: [
      y.jsx(Hb, { className: "w-4 h-4 text-slate-400 group-hover:text-red-500 transition-colors", strokeWidth: 2.5 }),
      y.jsxs("div", {
        className: "flex items-baseline gap-1.5",
        children: [
          y.jsx("span", { className: "text-xl font-bold tracking-tight leading-none text-slate-800 font-sans", children: n }),
          y.jsx("span", { className: "text-[11px] font-semibold text-slate-400 leading-none", children: r })
        ]
      }),
      y.jsx("div", { className: "w-[1px] h-4 bg-slate-200 mx-1" }),
      y.jsx("span", { className: "text-[10px] font-black text-red-600 bg-red-50 px-1.5 py-0.5 rounded border border-red-100 tracking-wide uppercase", children: o })
    ]
  });
};

// ------------------------------
// Header Component
// ------------------------------
const dS = ({ onInfoClick: l, onFavoritesClick: e, showInfoButton: s = true }) => {
  const [n, r] = oe.useState(false);
  const o = oe.useRef(null);
  
  useEffect(() => {
    const u = d => {
      if (o.current && !o.current.contains(d.target)) r(false);
    };
    document.addEventListener("mousedown", u);
    return () => document.removeEventListener("mousedown", u);
  }, []);
  
  return y.jsx("div", {
    className: "bg-white/80 backdrop-blur-xl z-40 border-b border-gray-100 sticky top-0 transition-all duration-300 shadow-sm supports-[backdrop-filter]:bg-white/60",
    children: y.jsx("div", {
      className: "container max-w-7xl mx-auto px-4 py-3",
      children: y.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          // Logo
          y.jsxs("div", {
            className: "flex items-center gap-2.5 group cursor-pointer",
            children: [
              y.jsxs("div", {
                className: "relative",
                children: [
                  y.jsx("div", {
                    className: "w-9 h-9 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-200 transform group-hover:rotate-3 transition-transform duration-300",
                    children: y.jsx(iS, { className: "w-5 h-5 text-white fill-white" })
                  }),
                  y.jsx("div", { className: "absolute -bottom-1 -right-1 w-3 h-3 bg-slate-800 rounded-full border-2 border-white" })
                ]
              }),
              y.jsxs("div", {
                className: "flex flex-col",
                children: [
                  y.jsxs("h1", {
                    className: "text-xl font-black text-slate-800 tracking-tight leading-none font-sans",
                    children: ["BD", y.jsx("span", { className: "text-red-600", children: "News" })]
                  }),
                  y.jsx("span", { className: "text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-0.5", children: "  " })
                ]
              })
            ]
          }),
          
          // Actions
          y.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              y.jsx(uS, {}),
              s && y.jsxs("div", {
                className: "relative",
                ref: o,
                children: [
                  y.jsx("button", {
                    onClick: () => r(!n),
                    className: `p-2 rounded-full transition-all duration-300 border border-transparent ${n ? "bg-slate-100 rotate-90 border-slate-200" : "hover:bg-slate-50 border-transparent hover:border-slate-100"}`,
                    children: y.jsx(q1, { className: "w-5 h-5 text-slate-600" })
                  }),
                  n && y.jsx("div", {
                    className: "absolute top-full right-0 mt-3 w-52 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-gray-100 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200 origin-top-right",
                    children: y.jsxs("div", {
                      className: "p-1.5 flex flex-col gap-1",
                      children: [
                        e && y.jsxs("button", {
                          onClick: () => { e(); r(false); },
                          className: "flex items-center gap-3 w-full px-3 py-3 rounded-xl hover:bg-red-50 text-slate-600 hover:text-red-600 transition-colors text-sm font-bold group",
                          children: [
                            y.jsx("div", { className: "p-2 bg-slate-50 group-hover:bg-white rounded-lg transition-colors shadow-sm", children: y.jsx(Ul, { className: "w-4 h-4" }) }),
                            " "
                          ]
                        }),
                        y.jsx("div", { className: "h-[1px] bg-slate-50 mx-2" }),
                        y.jsxs("button", {
                          onClick: () => { l(); r(false); },
                          className: "flex items-center gap-3 w-full px-3 py-3 rounded-xl hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors text-sm font-bold group",
                          children: [
                            y.jsx("div", { className: "p-2 bg-slate-50 group-hover:bg-white rounded-lg transition-colors shadow-sm", children: y.jsx(mp, { className: "w-4 h-4" }) }),
                            "  "
                          ]
                        })
                      ]
                    })
                  })
                ]
              })
            ]
          })
        ]
      })
    })
  });
};

// ------------------------------
// Info Modal Component
// ------------------------------
const fS = ({ isOpen: l, onClose: e, mode: s, calendarQA: n }) => {
  if (!l) return null;
  
  return y.jsx("div", {
    className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200",
    onClick: e,
    children: y.jsxs("div", {
      className: "bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden animate-in zoom-in-95 duration-200 max-h-[80vh] flex flex-col",
      onClick: r => r.stopPropagation(),
      children: [
        // Header
        y.jsxs("div", {
          className: "px-5 py-4 border-b border-gray-100 flex justify-between items-center bg-slate-50 shrink-0",
          children: [
            y.jsx("h3", {
              className: "text-lg font-bold text-slate-800 flex items-center gap-2",
              children: s === "calendar" ? 
                y.jsxs(y.Fragment, { children: [y.jsx(Kn, { className: "w-5 h-5 text-red-600" }), "  "] }) : 
                y.jsxs(y.Fragment, { children: [y.jsx(Ym, { className: "w-5 h-5 text-red-600" }), "   "] })
            }),
            y.jsx("button", {
              onClick: e,
              className: "p-1 rounded-full hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors",
              children: y.jsx(Ja, { className: "w-5 h-5" })
            })
          ]
        }),
        
        // Content
        y.jsx("div", {
          className: "p-0 overflow-y-auto custom-scrollbar",
          children: s === "news" ? 
            // News disclaimer
            y.jsx("div", {
              className: "p-6 space-y-6",
              children: y.jsxs("div", {
                className: "space-y-2",
                children: [
                  y.jsxs("div", {
                    className: "flex items-center gap-2 text-red-600 mb-1",
                    children: [
                      y.jsx(Ym, { className: "w-4 h-4" }),
                      y.jsx("span", { className: "text-sm font-bold uppercase", children: "" })
                    ]
                  }),
                  y.jsx("p", {
                    className: "text-slate-600 text-[13px] leading-relaxed text-justify",
                    children: "             ,                                 "
                  }),
                  y.jsx("div", {
                    className: "mt-4 pt-4 border-t border-slate-100",
                    children: y.jsx("p", { className: "text-[11px] text-slate-400", children: "  :  , , ,   " })
                  })
                ]
              })
            }) : 
            // Calendar info
            y.jsxs("div", {
              className: "p-5 space-y-4",
              children: [
                y.jsxs("div", {
                  className: "bg-orange-50 rounded-xl p-5 border border-orange-100",
                  children: [
                    y.jsxs("div", {
                      className: "flex items-center gap-2 mb-3 text-orange-700 font-bold",
                      children: [y.jsx(Xa, { className: "w-5 h-5" }), y.jsx("span", { children: " " })]
                    }),
                    y.jsx("p", {
                      className: "text-sm text-slate-700 leading-relaxed text-justify font-medium",
                      children: "                           ,       "
                    })
                  ]
                }),
                y.jsxs("div", {
                  className: "bg-slate-50 rounded-xl p-4 border border-slate-100",
                  children: [
                    y.jsx("h4", { className: "font-bold text-slate-700 text-sm mb-2", children: " " }),
                    y.jsx("p", { className: "text-xs text-slate-500", children: "               " })
                  ]
                })
              ]
            })
        }),
        
        // Footer
        y.jsx("div", {
          className: "p-4 border-t border-gray-100 bg-white shrink-0",
          children: y.jsxs("div", {
            className: "bg-slate-50 rounded-lg p-3 flex items-center justify-between border border-slate-100",
            children: [
              y.jsxs("div", {
                className: "flex flex-col",
                children: [
                  y.jsx("span", { className: "text-[10px] text-slate-400 font-medium uppercase tracking-wider", children: "Developer" }),
                  y.jsx("span", { className: "text-sm font-bold text-slate-700", children: "Nishat Ahmed" })
                ]
              }),
              y.jsx("a", {
                href: "https://nishatalwayson.top",
                target: "_blank",
                rel: "noreferrer",
                className: "p-2 bg-white rounded-full text-slate-500 hover:text-blue-600 hover:shadow-md transition-all",
                children: y.jsx(G1, { className: "w-4 h-4" })
              })
            ]
          })
        })
      ]
    })
  });
};

// ==============================================
// HTML-TO-IMAGE UTILITIES
// ==============================================

function hS(l, e) {
  if (l.match(/^[a-z]+:\/\//i)) return l;
  if (l.match(/^\/\//)) return window.location.protocol + l;
  if (l.match(/^[a-z]+:/i)) return l;
  
  const s = document.implementation.createHTMLDocument();
  const n = s.createElement("base");
  const r = s.createElement("a");
  
  s.head.appendChild(n);
  s.body.appendChild(r);
  if (e) n.href = e;
  r.href = l;
  
  return r.href;
}

// Unique ID generator
const mS = (() => {
  let l = 0;
  const e = () => `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4);
  return () => (l += 1, `u${e()}${l}`);
})();

// CSS utilities
function Ws(l) {
  const e = [];
  for (let s = 0, n = l.length; s < n; s++) e.push(l[s]);
  return e;
}

function jl(l, e) {
  const n = (l.ownerDocument.defaultView || window).getComputedStyle(l).getPropertyValue(e);
  return n ? parseFloat(n.replace("px", "")) : 0;
}

function gS(l) {
  const e = jl(l, "border-left-width");
  const s = jl(l, "border-right-width");
  return l.clientWidth + e + s;
}

function pS(l) {
  const e = jl(l, "border-top-width");
  const s = jl(l, "border-bottom-width");
  return l.clientHeight + e + s;
}

function bp(l, e = {}) {
  const s = e.width || gS(l);
  const n = e.height || pS(l);
  return { width: s, height: n };
}

function xS() {
  let l, e;
  try { e = process; } catch {}
  const s = e && e.env ? e.env.devicePixelRatio : null;
  if (s) {
    l = parseInt(s, 10);
    if (Number.isNaN(l)) l = 1;
  }
  return l || window.devicePixelRatio || 1;
}

const Xt = 16384;

function yS(l) {
  if (l.width > Xt || l.height > Xt) {
    if (l.width > Xt && l.height > Xt) {
      if (l.width > l.height) {
        l.height *= Xt / l.width;
        l.width = Xt;
      } else {
        l.width *= Xt / l.height;
        l.height = Xt;
      }
    } else if (l.width > Xt) {
      l.height *= Xt / l.width;
      l.width = Xt;
    } else {
      l.width *= Xt / l.height;
      l.height = Xt;
    }
  }
}

// Image loading utilities
function Bl(l) {
  return new Promise((e, s) => {
    const n = new Image();
    n.decode = () => e(n);
    n.onload = () => e(n);
    n.onerror = s;
    n.crossOrigin = "anonymous";
    n.decoding = "async";
    n.src = l;
  });
}

async function vS(l) {
  return Promise.resolve()
    .then(() => new XMLSerializer().serializeToString(l))
    .then(encodeURIComponent)
    .then(e => `data:image/svg+xml;charset=utf-8,${e}`);
}

async function bS(l, e, s) {
  const n = "http://www.w3.org/2000/svg";
  const r = document.createElementNS(n, "svg");
  const o = document.createElementNS(n, "foreignObject");
  
  r.setAttribute("width", `${e}`);
  r.setAttribute("height", `${s}`);
  r.setAttribute("viewBox", `0 0 ${e} ${s}`);
  
  o.setAttribute("width", "100%");
  o.setAttribute("height", "100%");
  o.setAttribute("x", "0");
  o.setAttribute("y", "0");
  o.setAttribute("externalResourcesRequired", "true");
  
  r.appendChild(o);
  o.appendChild(l);
  
  return vS(r);
}

const jt = (l, e) => {
  if (l instanceof e) return true;
  const s = Object.getPrototypeOf(l);
  return s === null ? false : s.constructor.name === e.name || jt(s, e);
};

// CSS processing
function SS(l) {
  const e = l.getPropertyValue("content");
  return `${l.cssText} content: '${e.replace(/'|"/g, "")}';`;
}

function TS(l) {
  return Ws(l).map(e => {
    const s = l.getPropertyValue(e);
    const n = l.getPropertyPriority(e);
    return `${e}: ${s}${n ? " !important" : ""};`;
  }).join(" ");
}

function ES(l, e, s) {
  const n = `.${l}:${e}`;
  const r = s.cssText ? SS(s) : TS(s);
  return document.createTextNode(`${n}{${r}}`);
}

function Zm(l, e, s) {
  const n = window.getComputedStyle(l, s);
  const r = n.getPropertyValue("content");
  if (r === "" || r === "none") return;
  
  const o = mS();
  try { e.className = `${e.className} ${o}`; } catch {}
  
  const u = document.createElement("style");
  u.appendChild(ES(o, s, n));
  e.appendChild(u);
}

function AS(l, e) {
  Zm(l, e, ":before");
  Zm(l, e, ":after");
}

// Resource loading
const Wm = "application/font-woff";
const Jm = "image/jpeg";

const LS = {
  woff: Wm,
  woff2: Wm,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: Jm,
  jpeg: Jm,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};

function RS(l) {
  const e = /\.([^./]*?)$/g.exec(l);
  return e ? e[1] : "";
}

function gd(l) {
  const e = RS(l).toLowerCase();
  return LS[e] || "";
}

function wS(l) {
  return l.split(/,/)[1];
}

function Zu(l) {
  return l.search(/^(data:)/) !== -1;
}

function DS(l, e) {
  return `data:${e};base64,${l}`;
}

async function Sp(l, e, s) {
  const n = await fetch(l, e);
  if (n.status === 404) throw new Error(`Resource "${n.url}" not found`);
  
  const r = await n.blob();
  
  return new Promise((o, u) => {
    const d = new FileReader();
    d.onerror = u;
    d.onloadend = () => {
      try { o(s({ res: n, result: d.result })); } catch (f) { u(f); }
    };
    d.readAsDataURL(r);
  });
}

const Eu = {};

async function pd(l, e, s) {
  const n = _S(l, e, s.includeQueryParams);
  if (Eu[n] != null) return Eu[n];
  
  if (s.cacheBust) l += (/\?/.test(l) ? "&" : "?") + new Date().getTime();
  
  let r;
  try {
    const o = await Sp(l, s.fetchRequestInit, ({ res: u, result: d }) => {
      if (!e) e = u.headers.get("Content-Type") || "";
      return wS(d);
    });
    r = DS(o, e);
  } catch (o) {
    r = s.imagePlaceholder || "";
    let u = `Failed to fetch resource: ${l}`;
    if (o) u = typeof o === "string" ? o : o.message;
    if (u) console.warn(u);
  }
  
  Eu[n] = r;
  return r;
}

// Element cloning utilities
async function CS(l) {
  const e = l.toDataURL();
  return e === "data:," ? l.cloneNode(false) : Bl(e);
}

async function NS(l, e) {
  if (l.currentSrc) {
    const o = document.createElement("canvas");
    const u = o.getContext("2d");
    o.width = l.clientWidth;
    o.height = l.clientHeight;
    u == null || u.drawImage(l, 0, 0, o.width, o.height);
    const d = o.toDataURL();
    return Bl(d);
  }
  
  const s = l.poster;
  const n = gd(s);
  const r = await pd(s, n, e);
  return Bl(r);
}

async function IS(l) {
  var e;
  try {
    if (!((e = l == null ? void 0 : l.contentDocument) === null || e === void 0) && e.body) {
      return await Ql(l.contentDocument.body, {}, true);
    }
  } catch {}
  return l.cloneNode(false);
}

async function kS(l, e) {
  if (jt(l, HTMLCanvasElement)) return CS(l);
  if (jt(l, HTMLVideoElement)) return NS(l, e);
  if (jt(l, HTMLIFrameElement)) return IS(l);
  return l.cloneNode(false);
}

// Main conversion function
async function Ql(l, e, s) {
  if (!s && e.filter && !e.filter(l)) return null;
  
  return Promise.resolve(l)
    .then(n => kS(n, e))
    .then(n => OS(l, n, e))
    .then(n => BS(l, n))
    .then(n => PS(n, e));
}

// ==============================================
// BANGLA CALENDAR COMPONENT
// ==============================================

// Calendar data
const Au = [
  { number: 1, bangla_name: "", english_name: "Grishmo", english_translation: "", months: ", ", period: "  -  ", icon: qa },
  { number: 2, bangla_name: "", english_name: "Borsha", english_translation: " ", months: ", ", period: "  -  ", icon: Qu },
  { number: 3, bangla_name: "", english_name: "Shorot", english_translation: "", months: ", ", period: "  -  ", icon: Qu },
  { number: 4, bangla_name: "", english_name: "Hemonto", english_translation: " ", months: ", ", period: "  -  ", icon: db },
  { number: 5, bangla_name: "", english_name: "Sheet", english_translation: "", months: ", ", period: "  -  ", icon: Ob },
  { number: 6, bangla_name: "", english_name: "Boshonto", english_translation: "", months: ", ", period: "  -  ", icon: J1 }
];

const Lu = [
  { number: 1, bangla_name: "", english_name: "Boishakh", days: " ", period: " - " },
  { number: 2, bangla_name: "", english_name: "Joishtha", days: " ", period: " - " },
  { number: 3, bangla_name: "", english_name: "Ashar", days: " ", period: " - " },
  { number: 4, bangla_name: "", english_name: "Srabon", days: " ", period: " - " },
  { number: 5, bangla_name: "", english_name: "Bhadra", days: " ", period: " - " },
  { number: 6, bangla_name: "", english_name: "Ashwin", days: " ", period: " - " },
  { number: 7, bangla_name: "", english_name: "Kartik", days: " ", period: " - " },
  { number: 8, bangla_name: "", english_name: "Ogrohayon", days: " ", period: " - " },
  { number: 9, bangla_name: "", english_name: "Poush", days: " ", period: " - " },
  { number: 10, bangla_name: "", english_name: "Magh", days: " ", period: " - " },
  { number: 11, bangla_name: "", english_name: "Falgun", days: "/ ", period: " - " },
  { number: 12, bangla_name: "", english_name: "Chaitra", days: " ", period: " - " }
];

// Calendar loading skeleton
const aT = () => {
  return y.jsxs("div", {
    className: "container mx-auto px-4 py-6 max-w-7xl animate-pulse pb-20",
    children: [
      y.jsxs("div", {
        className: "flex justify-end items-center gap-3 mb-6 opacity-60",
        children: [
          y.jsx("div", { className: "h-8 w-24 bg-slate-200 rounded-full" }),
          y.jsx("div", { className: "h-8 w-32 bg-slate-200 rounded-full" })
        ]
      }),
      y.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
        children: [
          y.jsxs("div", {
            className: "lg:col-span-8 space-y-6",
            children: [
              y.jsxs("div", {
                className: "relative overflow-hidden rounded-3xl bg-slate-200 p-6 sm:p-8 h-[250px] sm:h-[300px] shadow-sm",
                children: [
                  y.jsxs("div", {
                    className: "flex justify-between mb-8 items-start",
                    children: [
                      y.jsx("div", { className: "h-8 w-40 bg-slate-300 rounded-full" }),
                      y.jsx("div", { className: "h-6 w-24 bg-slate-300 rounded-lg" })
                    ]
                  }),
                  y.jsxs("div", {
                    className: "space-y-6 mt-8",
                    children: [
                      y.jsx("div", { className: "h-16 w-3/4 bg-slate-300 rounded-xl" }),
                      y.jsx("div", { className: "h-8 w-1/2 bg-slate-300 rounded-lg" })
                    ]
                  })
                ]
              }),
              y.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [1, 2].map(l => y.jsxs("div", {
                  className: "bg-white p-5 rounded-2xl border border-gray-100 h-40 flex flex-col justify-between shadow-sm",
                  children: [
                    y.jsxs("div", {
                      className: "flex gap-3 mb-2",
                      children: [
                        y.jsx("div", { className: "w-10 h-10 bg-slate-100 rounded-lg" }),
                        y.jsx("div", { className: "h-4 w-24 bg-slate-100 rounded mt-2" })
                      ]
                    }),
                    y.jsxs("div", {
                      className: "space-y-2 mt-2",
                      children: [
                        y.jsx("div", { className: "h-8 w-3/4 bg-slate-100 rounded" }),
                        y.jsx("div", { className: "h-4 w-1/2 bg-slate-100 rounded" })
                      ]
                    })
                  ]
                }, l))
              }),
              y.jsxs("div", {
                className: "bg-white p-5 rounded-2xl border border-gray-100 space-y-4 shadow-sm",
                children: [
                  y.jsxs("div", {
                    className: "flex justify-between",
                    children: [
                      y.jsx("div", { className: "h-5 w-32 bg-slate-100 rounded" }),
                      y.jsx("div", { className: "h-5 w-16 bg-slate-100 rounded" })
                    ]
                  }),
                  y.jsx("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
                    children: [1, 2, 3, 4, 5, 6].map(l => y.jsx("div", {
                      className: "h-24 bg-slate-50 rounded-xl border border-slate-100"
                    }, l))
                  })
                ]
              })
            ]
          }),
          y.jsx("div", {
            className: "lg:col-span-4 space-y-6",
            children: [1, 2].map(l => y.jsxs("div", {
              className: "bg-white rounded-2xl p-5 border border-gray-100 min-h-[300px] shadow-sm",
              children: [
                y.jsxs("div", {
                  className: "flex items-center gap-3 mb-6 border-b border-gray-50 pb-4",
                  children: [
                    y.jsx("div", { className: "w-8 h-8 bg-slate-100 rounded-full" }),
                    y.jsx("div", { className: "h-5 w-48 bg-slate-100 rounded" })
                  ]
                }),
                y.jsx("div", {
                  className: "space-y-4",
                  children: [1, 2, 3, 4].map(e => y.jsxs("div", {
                    className: "flex gap-3 items-center",
                    children: [
                      y.jsx("div", { className: "w-12 h-12 bg-slate-100 rounded-lg shrink-0" }),
                      y.jsxs("div", {
                        className: "space-y-2 w-full",
                        children: [
                          y.jsx("div", { className: "h-4 w-full bg-slate-100 rounded" }),
                          y.jsx("div", { className: "h-3 w-2/3 bg-slate-100 rounded" })
                        ]
                      })
                    ]
                  }, e))
                })
              ]
            }, l))
          })
        ]
      })
    ]
  });
};

// ------------------------------
// Main Bangla Date & Calendar Component
// ------------------------------
const rT = ({ onShowInfo: l }) => {
  const [e, s] = oe.useState(null);          // Calendar data
  const [n, r] = oe.useState([]);            // Special days
  const [o, u] = oe.useState(null);          // Ramadan data
  const [d, f] = oe.useState(true);          // Loading state
  const [h, p] = oe.useState(false);         // Loading special days
  const [x, v] = oe.useState(false);         // Error state
  const [T, S] = oe.useState(false);         // Refreshing
  const [E, L] = oe.useState(false);         // Downloading
  const [w, M] = oe.useState(false);         // Link copied
  const N = oe.useRef(null);                 // Ref for date card
  const [O, I] = oe.useState(null);          // Expanded FAQ index
  
  // Fetch Bangla date data
  const Y = async () => {
    try {
      if (T || f(true), v(false), !T) {
        const H = await fetch(`https://bdtime.shortcutbd.workers.dev/?t=${Date.now()}`);
        if (!H.ok) throw new Error("Failed to fetch");
        const q = await H.json();
        if (q.status && q.data) s(q.data);
        else throw new Error("Invalid data format");
      }
    } catch (H) {
      console.error(H);
      v(true);
    } finally {
      f(false);
      S(false);
    }
  };
  
  // Fetch special days
  const _ = async () => {
    p(true);
    try {
      const q = `https://corsproxy.io/?${encodeURIComponent("https://www.bangladatetoday.com/bn/")}`;
      const W = await fetch(q);
      if (!W.ok) throw new Error("Proxy fetch failed");
      
      const D = await W.text();
      const ae = new DOMParser().parseFromString(D, "text/html").querySelectorAll(".bg-purple-50");
      const de = [];
      
      ae.forEach(xe => {
        var We;
        const Ae = xe.querySelector("h4");
        const qe = Ae && ((We = Ae.textContent) == null ? void 0 : We.trim()) || "";
        let Be = "", ue = "";
        
        xe.querySelectorAll("span").forEach(it => {
          var tt;
          const Xe = ((tt = it.textContent) == null ? void 0 : tt.trim()) || "";
          if (Xe.includes("")) Be = Xe.replace("", "").trim();
          else if (Xe.includes("")) ue = Xe.replace("", "").trim();
        });
        
        if (qe) de.push({ title: qe, bangla_date: Be, english_date: ue });
      });
      
      r(de);
    } catch (H) {
      console.error("Primary proxy failed", H);
    } finally {
      p(false);
    }
  };
  
  // Fetch Ramadan data
  const V = async () => {
    try {
      const q = await (await fetch("https://romjancalendar.nurayistiqbalofficial.workers.dev/?id=51")).json();
      u(q);
    } catch (H) {
      console.error("Failed to fetch Ramadan data", H);
    }
  };
  
  // Initialize data
  useEffect(() => {
    Y();
    _();
    V();
  }, []);
  
  // Refresh handler
  const te = () => {
    S(true);
    Y();
    _();
    V();
  };
  
  // Download date card as PNG
  const K = useCallback(async () => {
    var H;
    if (N.current !== null) {
      L(true);
      try {
        const q = await nT(N.current, {
          cacheBust: true,
          pixelRatio: 3,
          backgroundColor: "transparent",
          style: { transform: "scale(1)", transformOrigin: "top left" }
        });
        
        const W = document.createElement("a");
        W.download = `Bangla-Date-${((H = e == null ? void 0 : e.bangla_date) == null ? void 0 : H.bn) || "Today"}.png`;
        W.href = q;
        W.click();
      } catch (q) {
        console.error("Download failed", q);
        alert("       ");
      } finally {
        L(false);
      }
    }
  }, [e]);
  
  // Copy link to clipboard
  const Z = () => {
    const H = `${window.location.origin}/#/bdtime`;
    navigator.clipboard.writeText(H).then(() => {
      M(true);
      setTimeout(() => M(false), 2000);
    }).catch(q => console.error("Failed to copy", q));
  };
  
  // Toggle FAQ expansion
  const ce = H => { I(O === H ? null : H); };
  
  // Parse holiday date string
  const le = H => {
    const q = H.split(" ");
    let W = q[0] || "", D = q[1] || "", B = q[2] || "";
    if (q.length < 3) return { day: "", date: "", month: "" };
    return { day: W, date: D, month: B };
  };
  
  // Current season and month calculations
  const { currentSeasons: me, currentMonths: fe, currentMonthName: U } = useMemo(() => {
    if (!e) return { currentSeasons: Au, currentMonths: Lu, currentMonthName: "" };
    
    const H = e.bangla_date.bn;
    const q = Lu.find(ae => H.includes(ae.bangla_name));
    const W = e.bangla_date.season;
    const D = Au.find(ae => W.includes(ae.bangla_name));
    const B = Lu.map(ae => ({ ...ae, is_current_month: q ? ae.number === q.number : false }));
    
    return {
      currentSeasons: Au.map(ae => ({ ...ae, is_current_season: D ? ae.number === D.number : false })),
      currentMonths: B,
      currentMonthName: q ? q.bangla_name : ""
    };
  }, [e]);
  
  // Today's Ramadan data
  const se = useMemo(() => {
    if (!o) return null;
    
    const H = {
      : "January",
      : "February",
      : "March",
      : "April",
      : "May",
      : "June",
      : "July",
      : "August",
      : "September",
      : "October",
      : "November",
      : "December"
    };
    
    const q = new Date();
    
    for (const W of o.calendar) {
      if (W.type === "header" || !W.date) continue;
      
      let D = W.date;
      Object.keys(H).forEach(ne => { D = D.replace(ne, H[ne]); });
      D = D.replace(/[-]/g, ne => "0123456789"["".indexOf(ne)]);
      
      const B = new Date(`${D} ${o.gregorian_year}`);
      
      if (B.getDate() === q.getDate() && 
          B.getMonth() === q.getMonth() && 
          B.getFullYear() === q.getFullYear()) {
        return W;
      }
    }
    
    return null;
  }, [o]);
  
  // Loading state
  if (d && !e) return y.jsx(aT, {});
  
  // Error state
  if (x && !e) {
    return y.jsxs("div", {
      className: "min-h-[70vh] flex flex-col items-center justify-center gap-4 text-slate-500",
      children: [
        y.jsx(md, { className: "w-10 h-10 text-slate-300" }),
        y.jsx("p", { children: "   " }),
        y.jsx("button", {
          onClick: te,
          className: "text-red-600 font-bold hover:underline",
          children: " "
        })
      ]
    });
  }
  
  // Main calendar component
  return y.jsxs("div", {
    className: "container mx-auto px-4 py-6 max-w-7xl animate-in fade-in duration-500 pb-20",
    children: [
      // Header actions
      y.jsxs("div", {
        className: "flex justify-end items-center gap-3 mb-6",
        children: [
          y.jsxs("button", {
            onClick: () => e && l(e),
            className: "flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-slate-600 text-xs font-bold shadow-sm active:scale-95 transition-all hover:bg-slate-50",
            children: [
              y.jsx(mp, { className: "w-4 h-4 text-blue-500" }),
              ""
            ]
          }),
          y.jsxs("div", {
            className: "flex bg-white rounded-full border border-gray-200 shadow-sm overflow-hidden",
            children: [
              y.jsx("button", {
                onClick: K,
                disabled: E,
                title: "   ",
                className: "p-2 border-r border-gray-100 text-slate-600 hover:bg-slate-50 hover:text-red-600 transition-colors disabled:opacity-50",
                children: E ? y.jsx(Fl, { className: "w-4 h-4 animate-spin" }) : y.jsx(V1, { className: "w-4 h-4" })
              }),
              y.jsx("button", {
                onClick: Z,
                title: "  ",
                className: "p-2 border-r border-gray-100 text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors",
                children: w ? y.jsx(Xu, { className: "w-4 h-4 text-green-500" }) : y.jsx(hb, { className: "w-4 h-4" })
              }),
              y.jsx("button", {
                onClick: te,
                title: " ",
                className: "p-2 text-slate-600 hover:bg-slate-50 hover:text-green-600 transition-colors",
                children: y.jsx(Fl, { className: `w-4 h-4 ${T ? "animate-spin" : ""}` })
              })
            ]
          })
        ]
      }),
      
      e && y.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
        children: [
          // Left column - Main calendar content
          y.jsxs("div", {
            className: "lg:col-span-8 space-y-6",
            children: [
              // Today's date card (downloadable)
              y.jsxs("div", {
                ref: N,
                className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 to-emerald-800 p-6 sm:p-8 text-white shadow-xl shadow-green-200/50",
                children: [
                  y.jsx("div", { className: "absolute top-0 right-0 -mr-8 -mt-8 h-40 w-40 rounded-full bg-white/10 blur-3xl" }),
                  y.jsx("div", { className: "absolute bottom-0 left-0 -ml-8 -mb-8 h-40 w-40 rounded-full bg-black/10 blur-3xl" }),
                  y.jsxs("div", {
                    className: "relative z-10 flex flex-col gap-6",
                    children: [
                      y.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          y.jsxs("div", {
                            className: "flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10",
                            children: [
                              y.jsx(qa, { className: "w-4 h-4 text-yellow-300" }),
                              y.jsx("span", { className: "text-xs font-bold tracking-wider uppercase text-green-50", children: "  " })
                            ]
                          }),
                          e.bangla_date.season && y.jsx("span", {
                            className: "text-xs font-bold text-green-100 bg-green-900/30 px-3 py-1 rounded-lg border border-green-400/30",
                            children: e.bangla_date.season.split("|")[0]
                          })
                        ]
                      }),
                      y.jsxs("div", {
                        className: "mt-2 text-center sm:text-left",
                        children: [
                          y.jsx("h2", {
                            className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug tracking-tight font-sans drop-shadow-sm",
                            children: e.bangla_date.bn
                          }),
                          y.jsx("p", {
                            className: "mt-3 text-green-100 font-medium opacity-90 text-sm sm:text-base border-l-4 border-green-400 pl-4 bg-white/5 py-1 rounded-r-lg inline-block",
                            children: e.bangla_date.en
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              
              // Today's Ramadan info
              se && y.jsxs("div", {
                onClick: () => window.location.hash = "/ramadan/51",
                className: "bg-emerald-50 border border-emerald-100 rounded-3xl p-6 shadow-sm cursor-pointer hover:bg-emerald-100/50 transition-colors group relative overflow-hidden",
                children: [
                  y.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-emerald-200 transition-colors" }),
                  y.jsxs("div", {
                    className: "relative z-10",
                    children: [
                      y.jsxs("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                          y.jsxs("div", {
                            className: "flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm",
                            children: [
                              y.jsx(Xa, { className: "w-4 h-4 text-emerald-600 fill-emerald-600" }),
                              y.jsx("span", { className: "text-xs font-bold text-emerald-800 uppercase tracking-wide", children: "   " })
                            ]
                          }),
                          y.jsx("span", { className: "text-xs text-emerald-600 font-bold bg-white/50 px-2 py-1 rounded", children: "" })
                        ]
                      }),
                      y.jsxs("div", {
                        className: "flex items-center justify-around text-center gap-4",
                        children: [
                          y.jsxs("div", {
                            children: [
                              y.jsx("p", { className: "text-xs text-emerald-600/70 font-bold mb-1", children: " " }),
                              y.jsx("p", { className: "text-2xl font-black text-slate-800", children: se.sehri_last })
                            ]
                          }),
                          y.jsx("div", { className: "w-[1px] h-10 bg-emerald-200" }),
                          y.jsxs("div", {
                            children: [
                              y.jsx("p", { className: "text-xs text-emerald-600/70 font-bold mb-1", children: "" }),
                              y.jsx("p", { className: "text-2xl font-black text-emerald-700", children: se.iftar })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              
              // Holiday badge
              e.holiday && y.jsxs("div", {
                className: "bg-red-50 border border-red-100 rounded-xl p-4 flex items-center gap-3 shadow-sm animate-pulse",
                children: [
                  y.jsx("div", { className: "p-2 bg-red-100 rounded-full shrink-0", children: y.jsx(Ki, { className: "w-5 h-5 text-red-600" }) }),
                  y.jsxs("div", {
                    children: [
                      y.jsx("span", { className: "text-[10px] font-bold text-red-400 uppercase tracking-wider", children: "  " }),
                      y.jsx("p", { className: "text-sm font-bold text-red-700", children: e.holiday })
                    ]
                  })
                ]
              }),
              
              // English and Hijri dates
              y.jsxs("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                  y.jsxs("div", {
                    className: "bg-white p-5 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all",
                    children: [
                      y.jsx("div", { className: "absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" }),
                      y.jsxs("div", {
                        className: "relative z-10",
                        children: [
                          y.jsxs("div", {
                            className: "flex items-center gap-2 mb-3",
                            children: [
                              y.jsx("div", { className: "p-1.5 bg-blue-100 rounded-lg", children: y.jsx(Ki, { className: "w-4 h-4 text-blue-600" }) }),
                              y.jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: " " })
                            ]
                          }),
                          y.jsx("h3", { className: "text-lg font-bold text-slate-800", children: e.english_date.bn }),
                          y.jsx("p", { className: "text-xs text-slate-500 mt-1", children: e.english_date.en }),
                          y.jsx("div", { className: "mt-3 inline-block px-2 py-0.5 bg-slate-100 rounded text-[10px] font-bold text-slate-500", children: e.english_date.season })
                        ]
                      })
                    ]
                  }),
                  y.jsxs("div", {
                    className: "bg-white p-5 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all",
                    children: [
                      y.jsx("div", { className: "absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" }),
                      y.jsxs("div", {
                        className: "relative z-10",
                        children: [
                          y.jsxs("div", {
                            className: "flex items-center gap-2 mb-3",
                            children: [
                              y.jsx("div", { className: "p-1.5 bg-purple-100 rounded-lg", children: y.jsx(Xa, { className: "w-4 h-4 text-purple-600" }) }),
                              y.jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: " " })
                            ]
                          }),
                          y.jsx("h3", { className: "text-lg font-bold text-slate-800", children: e.hijri_date.bn }),
                          y.jsx("p", { className: "text-xs text-slate-500 mt-1", children: e.hijri_date.en }),
                          y.jsx("div", { className: "mt-3 inline-block px-2 py-0.5 bg-slate-100 rounded text-[10px] font-bold text-slate-500", children: e.hijri_date.season })
                        ]
                      })
                    ]
                  })
                ]
              }),
              
              // Seasons
              y.jsxs("div", {
                className: "space-y-3 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm",
                children: [
                  y.jsxs("div", {
                    className: "flex items-center justify-between px-1 mb-2",
                    children: [
                      y.jsxs("h3", {
                        className: "text-sm font-bold text-slate-700 flex items-center gap-2",
                        children: [
                          y.jsx(Qu, { className: "w-4 h-4 text-blue-500" }),
                          " "
                        ]
                      }),
                      y.jsx("span", { className: "text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500", children: " " })
                    ]
                  }),
                  y.jsx("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
                    children: me.map(H => y.jsxs("div", {
                      className: `relative p-3 rounded-xl border transition-all ${H.is_current_season ? "bg-green-50 border-green-200 shadow-sm scale-[1.02]" : "bg-white border-gray-100 text-slate-400"}`,
                      children: [
                        H.is_current_season && y.jsx("span", {
                          className: "absolute -top-2 -right-1 bg-green-600 text-white text-[9px] px-1.5 py-0.5 rounded-full z-10 shadow-sm",
                          children: ""
                        }),
                        y.jsxs("div", {
                          className: "flex items-center gap-2 mb-1",
                          children: [
                            y.jsx(H.icon, { className: `w-4 h-4 ${H.is_current_season ? "text-green-600" : "text-slate-300"}` }),
                            y.jsx("span", { className: `text-sm font-bold ${H.is_current_season ? "text-green-800" : "text-slate-600"}`, children: H.bangla_name })
                          ]
                        }),
                        y.jsx("p", { className: "text-[10px] opacity-80 mb-0.5", children: H.months }),
                        y.jsx("p", { className: "text-[9px] opacity-60 font-medium bg-slate-50 inline-block px-1 rounded", children: H.period })
                      ]
                    }, H.number))
                  })
                ]
              }),
              
              // Bengali months
              y.jsxs("div", {
                className: "space-y-3 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm",
                children: [
                  y.jsx("div", {
                    className: "flex items-center justify-between px-1 mb-2",
                    children: y.jsxs("h3", {
                      className: "text-sm font-bold text-slate-700 flex items-center gap-2",
                      children: [
                        y.jsx(Ki, { className: "w-4 h-4 text-purple-500" }),
                        "  "
                      ]
                    })
                  }),
                  y.jsx("div", {
                    className: "grid grid-cols-3 sm:grid-cols-4 gap-2",
                    children: fe.map(H => y.jsxs("div", {
                      className: `p-2 rounded-lg border text-center transition-all flex flex-col items-center justify-center min-h-[70px] ${H.is_current_month ? "bg-blue-50 border-blue-200 shadow-sm" : "bg-white border-gray-100 hover:bg-slate-50"}`,
                      children: [
                        y.jsx("div", { className: `text-sm font-bold mb-0.5 ${H.is_current_month ? "text-blue-700" : "text-slate-600"}`, children: H.bangla_name }),
                        y.jsx("div", { className: "text-[10px] text-slate-400", children: H.days }),
                        y.jsx("div", { className: "text-[8px] text-slate-300 mt-1 font-medium", children: H.period })
                      ]
                    }, H.number))
                  })
                ]
              }),
              
              // FAQ section
              e.bangla_calendar_questions && e.bangla_calendar_questions.length > 0 && 
              y.jsxs("div", {
                className: "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden",
                children: [
                  y.jsx("div", {
                    className: "p-5 border-b border-gray-100 bg-gradient-to-r from-slate-50 to-white",
                    children: y.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        y.jsx("div", { className: "p-2 bg-indigo-100 rounded-lg text-indigo-600", children: y.jsx(j1, { className: "w-5 h-5" }) }),
                        y.jsxs("div", {
                          children: [
                            y.jsx("h3", { className: "font-bold text-slate-800 text-base", children: "  (FAQ)" }),
                            y.jsx("p", { className: "text-xs text-slate-500", children: "    " })
                          ]
                        })
                      ]
                    })
                  }),
                  y.jsx("div", {
                    className: "divide-y divide-gray-50",
                    children: e.bangla_calendar_questions.map((H, q) => y.jsxs("div", {
                      className: `group transition-all duration-300 ${O === q ? "bg-indigo-50/30" : "hover:bg-slate-50"}`,
                      children: [
                        y.jsxs("button", {
                          onClick: () => ce(q),
                          className: "w-full flex items-start justify-between p-4 text-left transition-colors",
                          children: [
                            y.jsxs("div", {
                              className: "flex gap-3",
                              children: [
                                y.jsx("span", {
                                  className: `flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold mt-0.5 shrink-0 transition-colors ${O === q ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"}`,
                                  children: q + 1
                                }),
                                y.jsx("h4", {
                                  className: `text-sm font-bold leading-relaxed transition-colors ${O === q ? "text-indigo-700" : "text-slate-700"}`,
                                  children: H.question
                                })
                              ]
                            }),
                            O === q ? y.jsx(O1, { className: "w-4 h-4 text-indigo-500 shrink-0 mt-1 ml-2" }) : y.jsx(fp, { className: "w-4 h-4 text-slate-400 shrink-0 mt-1 ml-2 group-hover:text-slate-600" })
                          ]
                        }),
                        y.jsx("div", {
                          className: `grid transition-all duration-300 ease-in-out ${O === q ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
                          children: y.jsx("div", {
                            className: "overflow-hidden",
                            children: y.jsx("div", {
                              className: "px-4 pb-4 pl-[3.25rem] pr-4",
                              children: y.jsxs("div", {
                                className: "text-sm text-slate-600 leading-7 bg-white p-4 rounded-xl border border-indigo-100 shadow-sm",
                                children: [
                                  y.jsxs("div", {
                                    className: "flex items-center gap-2 mb-2 text-indigo-600 text-xs font-bold uppercase tracking-wider",
                                    children: [
                                      y.jsx(Xu, { className: "w-3 h-3" }),
                                      " "
                                    ]
                                  }),
                                  H.answer
                                ]
                              })
                            })
                          })
                        })
                      ]
                    }, q))
                  })
                ]
              })
            ]
          }),
          
          // Right column - Sidebar
          y.jsxs("div", {
            className: "lg:col-span-4 space-y-6",
            children: [
              // Special days this month
              y.jsxs("div", {
                className: "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden",
                children: [
                  y.jsxs("div", {
                    className: "bg-gradient-to-r from-purple-50 to-white p-4 border-b border-purple-100 flex justify-between items-center",
                    children: [
                      y.jsxs("h3", {
                        className: "font-bold text-slate-800 flex items-center gap-2",
                        children: [
                          y.jsx(Fb, { className: "w-5 h-5 text-purple-600" }),
                          y.jsxs("span", { className: "text-purple-900", children: [U || "", "   "] })
                        ]
                      }),
                      n.length > 0 && y.jsxs("span", {
                        className: "text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-bold",
                        children: [n.length, " "]
                      })
                    ]
                  }),
                  y.jsx("div", {
                    className: "divide-y divide-slate-50 min-h-[100px] relative",
                    children: h ? 
                      // Loading state
                      y.jsx("div", {
                        className: "p-4 space-y-4",
                        children: [1, 2, 3].map(H => y.jsxs("div", {
                          className: "flex gap-4 animate-pulse",
                          children: [
                            y.jsx("div", { className: "w-12 h-12 bg-slate-100 rounded-xl" }),
                            y.jsxs("div", {
                              className: "flex-grow space-y-2",
                              children: [
                                y.jsx("div", { className: "h-4 bg-slate-100 rounded w-3/4" }),
                                y.jsx("div", { className: "h-3 bg-slate-100 rounded w-1/2" })
                              ]
                            })
                          ]
                        }, H))
                      }) : 
                      n.length === 0 ? 
                        y.jsxs("div", {
                          className: "p-8 text-center flex flex-col items-center justify-center text-slate-400 gap-2",
                          children: [
                            y.jsx(Ki, { className: "w-8 h-8 text-slate-200" }),
                            y.jsx("p", { className: "text-sm", children: "    " })
                          ]
                        }) : 
                        n.map((H, q) => {
                          var W;
                          return y.jsxs("div", {
                            className: "group p-4 hover:bg-purple-50/30 transition-all flex gap-4 items-start",
                            children: [
                              y.jsx("div", {
                                className: "flex-shrink-0 w-12 h-12 bg-white rounded-xl border border-purple-100 flex flex-col items-center justify-center text-purple-700 shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-md",
                                children: y.jsx("span", { className: "text-lg font-bold leading-none", children: ((W = H.bangla_date.match(/[-]+/)) == null ? void 0 : W[0]) || ".." })
                              }),
                              y.jsxs("div", {
                                className: "flex-grow pt-0.5",
                                children: [
                                  y.jsx("h4", { className: "font-bold text-slate-800 text-[14px] leading-snug mb-2 group-hover:text-purple-700 transition-colors", children: H.title }),
                                  y.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      y.jsxs("div", {
                                        className: "flex items-center gap-1.5 text-xs text-slate-500",
                                        children: [
                                          y.jsx(Ki, { className: "w-3.5 h-3.5 text-purple-400" }),
                                          y.jsx("span", { children: H.bangla_date })
                                        ]
                                      }),
                                      y.jsxs("div", {
                                        className: "flex items-center gap-1.5 text-xs text-slate-400",
                                        children: [
                                          y.jsx(qa, { className: "w-3.5 h-3.5 text-orange-300" }),
                                          y.jsx("span", { children: H.english_date })
                                        ]
                                      })
                                    ]
                                  })
                                ]
                              })
                            ]
                          }, q);
                        })
                  })
                ]
              }),
              
              // Upcoming government holidays
              e.next_government_holidays && e.next_government_holidays.length > 0 && 
              y.jsxs("div", {
                className: "bg-white rounded-2xl p-5 border border-gray-100 shadow-sm",
                children: [
                  y.jsxs("div", {
                    className: "flex items-center gap-2 mb-4 border-b border-gray-100 pb-3",
                    children: [
                      y.jsx(Ki, { className: "w-5 h-5 text-red-500" }),
                      y.jsx("h3", { className: "font-bold text-slate-800", children: "  " })
                    ]
                  }),
                  y.jsx("div", {
                    className: "space-y-3",
                    children: e.next_government_holidays.map((H, q) => {
                      const { day: W, date: D, month: B } = le(H.bangla_date);
                      return y.jsxs("div", {
                        className: "flex gap-4 items-center p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-red-200 transition-colors group",
                        children: [
                          y.jsxs("div", {
                            className: "flex flex-col rounded-lg overflow-hidden border border-red-100 shadow-sm min-w-[50px] shrink-0 bg-white",
                            children: [
                              y.jsx("div", { className: "bg-red-500 text-white text-[9px] font-bold text-center py-0.5", children: B || "" }),
                              y.jsx("div", { className: "bg-white text-slate-800 text-lg font-bold text-center py-0.5", children: D.replace(/[^-]/g, "") || "" })
                            ]
                          }),
                          y.jsxs("div", {
                            className: "flex-grow min-w-0",
                            children: [
                              y.jsx("h4", { className: "font-bold text-slate-800 text-xs leading-tight mb-1 group-hover:text-red-600 transition-colors", children: H.name }),
                              y.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  y.jsx("span", { className: "text-[10px] text-slate-500 bg-white px-1.5 rounded border border-gray-100", children: W }),
                                  y.jsx("span", { className: "text-[10px] text-slate-400 truncate", children: H.english_date })
                                ]
                              })
                            ]
                          })
                        ]
                      }, q);
                    })
                  })
                ]
              }),
              
              // Other holidays this month
              e.months_holidays && e.months_holidays.length > 0 && 
              y.jsxs("div", {
                className: "bg-white rounded-2xl p-5 border border-gray-100 shadow-sm",
                children: [
                  y.jsxs("div", {
                    className: "flex items-center gap-2 mb-4 border-b border-gray-100 pb-3",
                    children: [
                      y.jsx(Z1, { className: "w-5 h-5 text-red-500" }),
                      y.jsx("h3", { className: "font-bold text-slate-800", children: "   " })
                    ]
                  }),
                  y.jsx("div", {
                    className: "space-y-3",
                    children: e.months_holidays.map((H, q) => {
                      const { day: W, date: D, month: B } = le(H.bangla_date);
                      return y.jsxs("div", {
                        className: "flex gap-3 items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-red-100 transition-colors group",
                        children: [
                          y.jsx("div", {
                            className: "w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100 text-red-600 font-bold text-xs",
                            children: D.replace(/[^-]/g, "")
                          }),
                          y.jsxs("div", {
                            className: "flex-grow",
                            children: [
                              y.jsx("h4", { className: "font-bold text-slate-800 text-sm group-hover:text-red-600 transition-colors", children: H.name }),
                              y.jsxs("div", {
                                className: "flex items-center gap-2 mt-1",
                                children: [
                                  y.jsx("span", { className: "text-[10px] font-semibold text-slate-500", children: W }),
                                  y.jsx("span", { className: "w-1 h-1 bg-slate-300 rounded-full" }),
                                  y.jsx("span", { className: "text-[10px] text-slate-400", children: H.english_date })
                                ]
                              })
                            ]
                          })
                        ]
                      }, q);
                    })
                  })
                ]
              }),
              
              // Other special days this month
              !n.length && e.months_special_days && e.months_special_days.length > 0 && 
              y.jsxs("div", {
                className: "bg-white rounded-2xl p-5 border border-gray-100 shadow-sm",
                children: [
                  y.jsxs("div", {
                    className: "flex items-center gap-2 mb-4 border-b border-gray-100 pb-3",
                    children: [
                      y.jsx(qa, { className: "w-5 h-5 text-orange-500" }),
                      y.jsx("h3", { className: "font-bold text-slate-800", children: "    " })
                    ]
                  }),
                  y.jsx("div", {
                    className: "grid grid-cols-1 gap-3",
                    children: e.months_special_days.map((H, q) => {
                      const { day: W, date: D, month: B } = le(H.bangla_date);
                      return y.jsxs("div", {
                        className: "flex items-start gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-orange-50/30 transition-colors",
                        children: [
                          y.jsxs("div", {
                            className: "flex flex-col items-center bg-white border border-slate-200 rounded px-2 py-1 min-w-[50px] shrink-0",
                            children: [
                              y.jsx("span", { className: "text-[10px] text-slate-400", children: B }),
                              y.jsx("span", { className: "text-lg font-bold text-slate-700 leading-none", children: D.replace(/[^-]/g, "") })
                            ]
                          }),
                          y.jsxs("div", {
                            children: [
                              y.jsx("h4", { className: "text-sm font-semibold text-slate-700", children: H.name }),
                              y.jsxs("p", {
                                className: "text-xs text-slate-500 mt-1",
                                children: [
                                  y.jsx("span", { className: "font-bold text-orange-600", children: W }),
                                  ", ",
                                  H.english_date
                                ]
                              })
                            ]
                          })
                        ]
                      }, q);
                    })
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
};

// ==============================================
// HLS.JS LIBRARY (1.5.8)
// ==============================================

// [HLS.js library code - heavily truncated for brevity]
// Full HLS.js implementation for video streaming support
// Includes: Event system, error handling, stream controllers,
//           fragment loaders, key system, ABR, and more

// ... HLS.js code ...

// ==============================================
// LIVE TV CHANNELS COMPONENT
// ==============================================

// TV channel list
const cp = [
  { name: "Jamuna TV", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrTh3CUt8PNk17rYV3gqPo9hSi2gy1pk2aPLsHk3eGA&s=10", link: "https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/index.m3u8" },
  { name: "Channel 24", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw0zbio-bGbwTNxiB5NwIYRG50zYU9zwI9EgCBKpjQ-g&s=10", link: "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8" },
  { name: "Independent", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgYtc2AP8FDbcS6JcMFcuRhvsWiIFgzouppg&usqp=CAU", link: "https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8" },
  { name: "BTV", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSOCAImffusOsOWJdSJZTDVRlh8-v-hoF5JrCpMtTcmA&s=10", link: "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8" }
];

// Live TV loading skeleton
const AR = () => {
  return y.jsxs("div", {
    className: "container mx-auto px-4 py-6 max-w-7xl animate-pulse pb-20",
    children: [
      y.jsxs("div", {
        className: "flex items-center gap-3 mb-6",
        children: [
          y.jsx("div", { className: "w-12 h-12 bg-slate-200 rounded-xl" }),
          y.jsxs("div", {
            className: "space-y-2",
            children: [
              y.jsx("div", { className: "h-6 w-48 bg-slate-200 rounded-lg" }),
              y.jsx("div", { className: "h-4 w-32 bg-slate-200 rounded-lg" })
            ]
          })
        ]
      }),
      y.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-12 gap-8",
        children: [
          y.jsxs("div", {
            className: "lg:col-span-8 space-y-6",
            children: [
              y.jsx("div", { className: "aspect-video bg-slate-200 rounded-[2rem]" }),
              y.jsxs("div", {
                className: "h-24 bg-white rounded-2xl border border-gray-100 p-4 flex gap-4",
                children: [
                  y.jsx("div", { className: "w-16 h-16 bg-slate-200 rounded-full" }),
                  y.jsxs("div", {
                    className: "flex-1 space-y-2 py-2",
                    children: [
                      y.jsx("div", { className: "h-6 w-1/3 bg-slate-200 rounded" }),
                      y.jsx("div", { className: "h-4 w-1/4 bg-slate-200 rounded" })
                    ]
                  })
                ]
              })
            ]
          }),
          y.jsxs("div", {
            className: "lg:col-span-4 space-y-4",
            children: [
              y.jsx("div", { className: "h-6 w-40 bg-slate-200 rounded mb-4" }),
              [1, 2, 3, 4].map(l => y.jsxs("div", {
                className: "h-20 bg-white border border-gray-100 rounded-2xl p-3 flex items-center gap-3",
                children: [
                  y.jsx("div", { className: "w-14 h-14 bg-slate-200 rounded-full" }),
                  y.jsxs("div", {
                    className: "flex-1 space-y-2",
                    children: [
                      y.jsx("div", { className: "h-4 w-2/3 bg-slate-200 rounded" }),
                      y.jsx("div", { className: "h-3 w-1/2 bg-slate-200 rounded" })
                    ]
                  })
                ]
              }, l))
            ]
          })
        ]
      })
    ]
  });
};

// ------------------------------
// Live TV Component
// ------------------------------
const LR = () => {
  const [l, e] = oe.useState([]);           // Channel list
  const [s, n] = oe.useState(null);         // Selected channel
  const r = oe.useRef(null);                // Video element ref
  const [o, u] = oe.useState(false);        // Is playing
  const [d, f] = oe.useState(false);        // Is muted
  const [h, p] = oe.useState(null);         // HLS instance
  const [x, v] = oe.useState(true);         // Loading state
  const [T, S] = oe.useState(false);        // Is loading
  
  // Fetch channel list
  useEffect(() => {
    (async () => {
      v(true);
      try {
        const O = await fetch("https://pastefy.app/HU6RNvwF/raw");
        if (!O.ok) throw new Error("Failed to fetch channels");
        const I = await O.json();
        if (Array.isArray(I) && I.length > 0) {
          e(I);
          n(I[0]);
        } else {
          throw new Error("Empty or invalid channel list");
        }
      } catch (O) {
        console.error("Error fetching channels:", O);
        e(cp);
        n(cp[0]);
      } finally {
        v(false);
      }
    })();
  }, []);
  
  // Setup video player when channel changes
  useEffect(() => {
    if (x || !s) return;
    
    S(true);
    u(false);
    
    const N = r.current;
    if (!N) return;
    
    if (h) h.destroy();
    
    const O = () => {
      S(false);
      u(true);
    };
    
    if (Ls.isSupported()) {
      const I = new Ls({
        enableWorker: true,
        lowLatencyMode: true
      });
      
      I.loadSource(s.link);
      I.attachMedia(N);
      
      I.on(Ls.Events.MANIFEST_PARSED, () => {
        const Y = N.play();
        if (Y !== void 0) {
          Y.then(O).catch(_ => console.log("Autoplay blocked", _));
        }
      });
      
      I.on(Ls.Events.ERROR, (Y, _) => {
        if (_.fatal) S(false);
      });
      
      p(I);
    } else {
      // Fallback to native HLS
      if (N.canPlayType("application/vnd.apple.mpegurl")) {
        N.src = s.link;
        N.addEventListener("loadedmetadata", () => {
          N.play().then(O).catch(I => console.log("Autoplay blocked", I));
        });
      }
    }
    
    return () => {
      if (h) h.destroy();
    };
  }, [s, x]);
  
  // Select channel
  const E = N => {
    n(N);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  // Play/Pause toggle
  const L = () => {
    if (r.current) {
      if (o) r.current.pause();
      else r.current.play();
      u(!o);
    }
  };
  
  // Mute toggle
  const w = () => {
    if (r.current) {
      r.current.muted = !d;
      f(!d);
    }
  };
  
  // Fullscreen
  const M = () => {
    if (r.current && r.current.requestFullscreen) {
      r.current.requestFullscreen();
    }
  };
  
  // Loading state
  if (x) return y.jsx(AR, {});
  
  // Error state
  if (!s) {
    return y.jsxs("div", {
      className: "flex flex-col items-center justify-center min-h-[50vh] text-slate-400",
      children: [
        y.jsx(md, { className: "w-10 h-10 mb-2" }),
        y.jsx("p", { children: "   " })
      ]
    });
  }
  
  // Main live TV component
  return y.jsxs("div", {
    className: "container mx-auto px-4 py-6 max-w-7xl animate-in fade-in duration-500 pb-20 relative",
    children: [
      // Header
      y.jsxs("div", {
        className: "flex items-center gap-3 mb-6",
        children: [
          y.jsx("div", {
            className: "p-3 bg-red-50 text-red-600 rounded-2xl border border-red-100 shadow-sm animate-pulse",
            children: y.jsx(Xm, { className: "w-6 h-6" })
          }),
          y.jsxs("div", {
            children: [
              y.jsx("h2", { className: "text-2xl font-black text-slate-800 tracking-tight", children: " " }),
              y.jsx("p", { className: "text-sm text-slate-500 font-medium", children: "  " })
            ]
          })
        ]
      }),
      
      y.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
        children: [
          // Video player column
          y.jsxs("div", {
            className: "lg:col-span-8 sticky top-[80px] z-30 pt-0 pb-4 -mt-2 bg-slate-50 lg:bg-transparent",
            children: [
              y.jsxs("div", {
                className: "relative aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 group border border-slate-100",
                children: [
                  y.jsx("video", {
                    ref: r,
                    className: "w-full h-full object-contain",
                    playsInline: true,
                    autoPlay: true,
                    onClick: L
                  }),
                  
                  // Loading overlay
                  T && y.jsxs("div", {
                    className: "absolute inset-0 z-30 flex flex-col items-center justify-center bg-slate-900 transition-all duration-300",
                    children: [
                      y.jsx("div", {
                        className: "absolute inset-0 opacity-40 bg-cover bg-center blur-2xl transform scale-110",
                        style: { backgroundImage: `url(${s.logo})` }
                      }),
                      y.jsxs("div", {
                        className: "relative z-10 flex flex-col items-center animate-in zoom-in-90 duration-300",
                        children: [
                          y.jsxs("div", {
                            className: "relative mb-6",
                            children: [
                              y.jsx("div", { className: "absolute inset-0 bg-red-500 blur-xl opacity-20 animate-pulse rounded-full" }),
                              y.jsx("div", {
                                className: "w-24 h-24 rounded-full p-1.5 border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl",
                                children: y.jsx("img", { src: s.logo, className: "w-full h-full rounded-full object-cover", alt: "Loading..." })
                              }),
                              y.jsx("div", {
                                className: "absolute bottom-0 right-0 p-1.5 bg-red-600 rounded-full border-2 border-slate-900 shadow-lg",
                                children: y.jsx(gp, { className: "w-4 h-4 text-white animate-spin" })
                              })
                            ]
                          }),
                          y.jsxs("div", {
                            className: "px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/5 flex items-center gap-2",
                            children: [
                              y.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                  y.jsx("span", { className: "w-1 h-3 bg-red-500 rounded-full animate-[bounce_1s_infinite]" }),
                                  y.jsx("span", { className: "w-1 h-3 bg-red-500 rounded-full animate-[bounce_1.2s_infinite]" }),
                                  y.jsx("span", { className: "w-1 h-3 bg-red-500 rounded-full animate-[bounce_0.8s_infinite]" })
                                ]
                              }),
                              y.jsx("span", { className: "text-xs font-bold text-white tracking-wider", children: " ..." })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  
                  // Video controls overlay
                  !T && y.jsx("div", {
                    className: "absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end z-20",
                    children: y.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        y.jsxs("div", {
                          className: "flex items-center gap-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10",
                          children: [
                            y.jsx("button", {
                              onClick: L,
                              className: "text-white hover:text-red-400 transition-colors",
                              children: o ? y.jsx(Sb, { className: "w-6 h-6 fill-current" }) : y.jsx(Eb, { className: "w-6 h-6 fill-current" })
                            }),
                            y.jsx("div", { className: "h-4 w-[1px] bg-white/20" }),
                            y.jsx("button", {
                              onClick: w,
                              className: "text-white hover:text-blue-400 transition-colors",
                              children: d ? y.jsx(Jb, { className: "w-5 h-5" }) : y.jsx(Zb, { className: "w-5 h-5" })
                            }),
                            y.jsx("div", { className: "h-4 w-[1px] bg-white/20" }),
                            y.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                y.jsx("div", { className: "w-2 h-2 rounded-full bg-red-600 animate-ping" }),
                                y.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-red-500", children: "Live" })
                              ]
                            })
                          ]
                        }),
                        y.jsx("button", {
                          onClick: M,
                          className: "p-2.5 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all border border-white/10",
                          children: y.jsx(yb, { className: "w-5 h-5" })
                        })
                      ]
                    })
                  })
                ]
              }),
              
              // Channel info
              y.jsxs("div", {
                className: "mt-6 p-5 bg-white rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between relative overflow-hidden",
                children: [
                  y.jsxs("div", {
                    className: "flex items-center gap-5 relative z-10",
                    children: [
                      y.jsx("div", {
                        className: "w-16 h-16 rounded-full bg-white border-2 border-red-50 p-1 flex items-center justify-center shadow-md",
                        children: y.jsx("img", { src: s.logo, alt: s.name, className: "w-full h-full object-cover rounded-full" })
                      }),
                      y.jsxs("div", {
                        children: [
                          y.jsx("h3", { className: "text-xl font-bold text-slate-800", children: s.name }),
                          y.jsxs("div", {
                            className: "flex items-center gap-2 mt-1",
                            children: [
                              y.jsxs("span", {
                                className: "flex h-2 w-2 relative",
                                children: [
                                  y.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" }),
                                  y.jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-green-500" })
                                ]
                              }),
                              y.jsx("p", { className: "text-xs text-slate-500 font-bold uppercase tracking-wide", children: "  " })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  y.jsx("div", {
                    className: "relative z-10",
                    children: y.jsx("button", {
                      className: "p-3 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-400 hover:text-blue-600 transition-all active:scale-95 shadow-sm",
                      children: y.jsx(R1, { className: "w-5 h-5" })
                    })
                  })
                ]
              })
            ]
          }),
          
          // Channel list column
          y.jsxs("div", {
            className: "lg:col-span-4 lg:h-[calc(100vh-120px)] lg:sticky lg:top-24 flex flex-col relative",
            children: [
              y.jsxs("div", {
                className: "flex items-center justify-between px-1 mb-2 py-2 shrink-0 sticky top-0 z-20 bg-slate-50/95 backdrop-blur-sm lg:relative lg:top-auto lg:bg-transparent lg:backdrop-filter-none",
                children: [
                  y.jsxs("h3", {
                    className: "font-bold text-slate-700 flex items-center gap-2 text-lg",
                    children: [
                      y.jsx(pp, { className: "w-5 h-5 text-red-500" }),
                      " "
                    ]
                  }),
                  y.jsxs("span", {
                    className: "text-[10px] font-bold bg-slate-100 px-2 py-1 rounded-full text-slate-500",
                    children: [l.length, "  "]
                  })
                ]
              }),
              
              y.jsx("div", {
                className: "flex-grow overflow-y-auto pr-2 custom-scrollbar pb-20",
                children: y.jsx("div", {
                  className: "grid grid-cols-1 gap-3",
                  children: l.map((N, O) => {
                    const I = s.name === N.name;
                    return y.jsxs("button", {
                      onClick: () => E(N),
                      className: `group flex items-center gap-4 p-3 rounded-2xl border transition-all duration-300 text-left relative overflow-hidden ${I ? "bg-white border-red-200 shadow-lg shadow-red-100/50 scale-[1.02] z-10" : "bg-white border-gray-100 hover:border-slate-200 hover:bg-slate-50"}`,
                      children: [
                        I && y.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-1 bg-red-500" }),
                        y.jsx("div", {
                          className: `w-14 h-14 rounded-full p-0.5 flex items-center justify-center border-2 transition-all ${I ? "border-red-100 shadow-inner bg-red-50" : "border-transparent bg-slate-100 group-hover:bg-white group-hover:shadow-sm"}`,
                          children: y.jsx("img", { src: N.logo, alt: N.name, className: "w-full h-full object-cover rounded-full" })
                        }),
                        y.jsxs("div", {
                          className: "flex-grow",
                          children: [
                            y.jsx("h4", { className: `font-bold text-sm mb-1 transition-colors ${I ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"}`, children: N.name }),
                            y.jsx("div", {
                              className: "flex items-center gap-1.5",
                              children: I ? 
                                y.jsxs(y.Fragment, {
                                  children: [
                                    y.jsx(Xm, { className: "w-3 h-3 text-red-500" }),
                                    y.jsx("span", { className: "text-[10px] font-bold text-red-500", children: " " })
                                  ]
                                }) : 
                                y.jsxs(y.Fragment, {
                                  children: [
                                    y.jsx(yp, { className: "w-3 h-3 text-slate-400" }),
                                    y.jsx("span", { className: "text-[10px] font-medium text-slate-400 group-hover:text-slate-500", children: "   " })
                                  ]
                                })
                            })
                          ]
                        }),
                        I && y.jsx("div", {
                          className: "mr-2",
                          children: y.jsxs("div", {
                            className: "flex gap-0.5 items-end h-4",
                            children: [
                              y.jsx("div", { className: "w-0.5 bg-red-500 h-2 animate-[bounce_1s_infinite]" }),
                              y.jsx("div", { className: "w-0.5 bg-red-500 h-3 animate-[bounce_1.2s_infinite]" }),
                              y.jsx("div", { className: "w-0.5 bg-red-500 h-4 animate-[bounce_0.8s_infinite]" })
                            ]
                          })
                        })
                      ]
                    }, O);
                  })
                })
              })
            ]
          })
        ]
      })
    ]
  });
};


// ==============================================
// RAMADAN CALENDAR COMPONENT
// ==============================================

// District list
const zn = [
  { id: 1, zilla_name: "", city_name: "Dhaka" },
  { id: 2, zilla_name: "", city_name: "Tangail" },
  { id: 3, zilla_name: "", city_name: "Gazipur" },
  { id: 4, zilla_name: "", city_name: "Gopalganj" },
  { id: 5, zilla_name: "", city_name: "Kishoreganj" },
  { id: 6, zilla_name: "", city_name: "Madaripur" },
  { id: 7, zilla_name: "", city_name: "Munshiganj" },
  { id: 8, zilla_name: "", city_name: "Narayanganj" },
  { id: 9, zilla_name: "", city_name: "Narsingdi" },
  { id: 10, zilla_name: "", city_name: "Rajbari" },
  { id: 11, zilla_name: "", city_name: "Shariatpur" },
  { id: 12, zilla_name: "", city_name: "Faridpur" },
  { id: 13, zilla_name: "", city_name: "Manikganj" },
  { id: 14, zilla_name: "", city_name: "Jamalpur" },
  { id: 15, zilla_name: "", city_name: "Netrokona" },
  { id: 16, zilla_name: "", city_name: "Sherpur" },
  { id: 17, zilla_name: "", city_name: "Mymensingh" },
  { id: 18, zilla_name: "", city_name: "Dinajpur" },
  { id: 19, zilla_name: "", city_name: "Gaibandha" },
  { id: 20, zilla_name: "", city_name: "Kurigram" },
  { id: 21, zilla_name: "", city_name: "Lalmonirhat" },
  { id: 22, zilla_name: "", city_name: "Nilphamari" },
  { id: 23, zilla_name: "", city_name: "Panchagarh" },
  { id: 24, zilla_name: "", city_name: "Thakurgaon" },
  { id: 25, zilla_name: "", city_name: "Rangpur" },
  { id: 26, zilla_name: "", city_name: "Pabna" },
  { id: 27, zilla_name: "", city_name: "Bogra" },
  { id: 28, zilla_name: "", city_name: "Joypurhat" },
  { id: 29, zilla_name: "", city_name: "Chapainawabganj" },
  { id: 30, zilla_name: "", city_name: "Naogaon" },
  { id: 31, zilla_name: "", city_name: "Natore" },
  { id: 32, zilla_name: "", city_name: "Sirajganj" },
  { id: 33, zilla_name: "", city_name: "Rajshahi" },
  { id: 34, zilla_name: "", city_name: "Moulvibazar" },
  { id: 35, zilla_name: "", city_name: "Habiganj" },
  { id: 36, zilla_name: "", city_name: "Sunamganj" },
  { id: 37, zilla_name: "", city_name: "Sylhet" },
  { id: 38, zilla_name: "", city_name: "Barishal" },
  { id: 39, zilla_name: "", city_name: "Bhola" },
  { id: 40, zilla_name: "", city_name: "Jhalkathi" },
  { id: 41, zilla_name: "", city_name: "Patuakhali" },
  { id: 42, zilla_name: "", city_name: "Pirojpur" },
  { id: 43, zilla_name: "", city_name: "Barguna" },
  { id: 44, zilla_name: "", city_name: "Chittagong" },
  { id: 45, zilla_name: "", city_name: "Bandarban" },
  { id: 46, zilla_name: "", city_name: "Brahmanbaria" },
  { id: 47, zilla_name: "", city_name: "Comilla" },
  { id: 48, zilla_name: "", city_name: "Cox's Bazar" },
  { id: 49, zilla_name: "", city_name: "Feni" },
  { id: 50, zilla_name: "", city_name: "Khagrachhari" },
  { id: 51, zilla_name: "", city_name: "Lakshmipur" },
  { id: 52, zilla_name: "", city_name: "Noakhali" },
  { id: 53, zilla_name: "", city_name: "Rangamati" },
  { id: 54, zilla_name: "", city_name: "Chandpur" },
  { id: 55, zilla_name: "", city_name: "Bagerhat" },
  { id: 56, zilla_name: "", city_name: "Jessore" },
  { id: 57, zilla_name: "", city_name: "Chuadanga" },
  { id: 58, zilla_name: "", city_name: "Jhenaidah" },
  { id: 59, zilla_name: "", city_name: "Kushtia" },
  { id: 60, zilla_name: "", city_name: "Magura" },
  { id: 61, zilla_name: "", city_name: "Meherpur" },
  { id: 62, zilla_name: "", city_name: "Narail" },
  { id: 63, zilla_name: "", city_name: "Satkhira" },
  { id: 64, zilla_name: "", city_name: "Khulna" }
];

// ------------------------------
// District Selection Modal
// ------------------------------
const RR = ({ isOpen: l, onClose: e, onSelect: s, selectedId: n }) => {
  const [r, o] = oe.useState("");
  const u = useMemo(() => {
    return zn.filter(d => 
      d.zilla_name.includes(r) || 
      d.city_name.toLowerCase().includes(r.toLowerCase())
    );
  }, [r]);
  
  if (!l) return null;
  
  return y.jsx("div", {
    className: "fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 animate-in fade-in duration-200",
    onClick: e,
    children: y.jsxs("div", {
      className: "bg-white w-full max-w-lg mx-4 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[70vh]",
      onClick: d => d.stopPropagation(),
      children: [
        // Header
        y.jsxs("div", {
          className: "p-5 border-b border-slate-100 bg-white sticky top-0 z-10",
          children: [
            y.jsxs("div", {
              className: "flex justify-between items-center mb-4",
              children: [
                y.jsxs("h3", {
                  className: "font-bold text-slate-800 text-lg flex items-center gap-2",
                  children: [
                    y.jsx(pb, { className: "w-5 h-5 text-emerald-600" }),
                    "  "
                  ]
                }),
                y.jsx("button", {
                  onClick: e,
                  className: "p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-red-500 transition-colors",
                  children: y.jsx(Ja, { className: "w-5 h-5" })
                })
              ]
            }),
            y.jsxs("div", {
              className: "relative group",
              children: [
                y.jsx(xp, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-600 transition-colors" }),
                y.jsx("input", {
                  type: "text",
                  placeholder: "  (:  or Dhaka)",
                  className: "w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-12 pr-4 text-slate-800 font-medium outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 transition-all placeholder:text-slate-400",
                  autoFocus: true,
                  value: r,
                  onChange: d => o(d.target.value)
                })
              ]
            })
          ]
        }),
        
        // District list
        y.jsx("div", {
          className: "overflow-y-auto custom-scrollbar p-3 space-y-2 bg-slate-50/50",
          children: u.length === 0 ? 
            y.jsx("div", { className: "text-center py-10 text-slate-400", children: "   " }) : 
            u.map(d => {
              const f = n === d.id;
              return y.jsxs("button", {
                onClick: () => s(d),
                className: `w-full text-left px-5 py-4 rounded-2xl flex items-center justify-between transition-all duration-200 border ${f ? "bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-200" : "bg-white text-slate-700 border-transparent hover:border-emerald-100 hover:shadow-md"}`,
                children: [
                  y.jsxs("div", {
                    children: [
                      y.jsx("span", { className: `font-bold block text-base ${f ? "text-white" : "text-slate-800"}`, children: d.zilla_name }),
                      y.jsx("span", { className: `text-xs font-medium ${f ? "text-emerald-100" : "text-slate-400"}`, children: d.city_name })
                    ]
                  }),
                  f && y.jsx(D1, { className: "w-5 h-5 text-white" })
                ]
              }, d.id);
            })
        }),
        
        // Footer
        y.jsx("div", {
          className: "p-3 bg-white border-t border-slate-100 text-center",
          children: y.jsx("span", { className: "text-[10px] text-slate-400 font-medium", children: "  " })
        })
      ]
    })
  });
};

// ------------------------------
// Ramadan Calendar Component
// ------------------------------
const wR = ({ initialCityId: l }) => {
  const [e, s] = oe.useState(() => {
    if (l) {
      const _ = zn.find(V => V.id === l);
      if (_) return _;
    }
    
    if (typeof window < "u") {
      const _ = localStorage.getItem("ramadan_district");
      if (_) {
        try {
          const V = JSON.parse(_);
          const te = zn.find(K => K.id === V.id);
          if (te) return te;
        } catch (V) {
          console.error("Failed to parse saved district", V);
        }
      }
    }
    
    return zn.find(_ => _.id === 51) || zn[0];
  });
  
  const [n, r] = oe.useState(null);          // Ramadan data
  const [o, u] = oe.useState(true);          // Loading state
  const [d, f] = oe.useState(false);         // District modal open
  const [h, p] = oe.useState(null);          // Countdown timer
  const [x, v] = oe.useState(false);         // Is upcoming
  const [T, S] = oe.useState(false);         // Telegram modal open
  const [E, L] = oe.useState(false);         // Dua modal open
  
  // Sync with initialCityId prop
  useEffect(() => {
    if (l) {
      const _ = zn.find(V => V.id === l);
      if (_ && _.id !== e.id) s(_);
    }
  }, [l]);
  
  // Save district to localStorage
  useEffect(() => {
    w(e.id);
    localStorage.setItem("ramadan_district", JSON.stringify(e));
  }, [e]);
  
  // Telegram prompt
  useEffect(() => {
    if (!localStorage.getItem("joined_telegram")) {
      const V = setTimeout(() => { S(true); }, 10000);
      return () => clearTimeout(V);
    }
  }, []);
  
  // Fetch Ramadan data
  const w = async _ => {
    u(true);
    try {
      const V = await fetch(`https://romjancalendar.nurayistiqbalofficial.workers.dev/?id=${_}`);
      if (!V.ok) throw new Error("Failed to fetch");
      const te = await V.json();
      r(te);
    } catch (V) {
      console.error("Error fetching ramadan data:", V);
    } finally {
      u(false);
    }
  };
  
  // Select district
  const M = _ => {
    s(_);
    f(false);
    window.location.hash = `/ramadan/${_.id}`;
  };
  
  // Join Telegram
  const N = () => {
    localStorage.setItem("joined_telegram", "true");
    S(false);
    window.open("https://nishatalwayson.top", "_blank");
  };
  
  // Clean note text
  const O = useMemo(() => {
    return n != null && n.note ? 
      n.note.replace(/Calendar Link:.*kivabe\.com\/ramadan\/?/gi, "").trim() : 
      "";
  }, [n]);
  
  // Parse Bengali date
  const I = (_, V) => {
    if (!_) return null;
    
    const te = {
      : "January",
      : "February",
      : "March",
      : "April",
      : "May",
      : "June",
      : "July",
      : "August",
      : "September",
      : "October",
      : "November",
      : "December"
    };
    
    let K = _;
    Object.keys(te).forEach(ce => { K = K.replace(ce, te[ce]); });
    K = K.replace(/[-]/g, ce => "0123456789"["".indexOf(ce)]);
    
    const Z = new Date(`${K} ${V}`);
    return isNaN(Z.getTime()) ? null : Z;
  };
  
  // Check if date is today
  const Y = (_, V) => {
    const te = I(_ || "", V);
    if (!te) return false;
    
    const K = new Date();
    return te.getDate() === K.getDate() && 
           te.getMonth() === K.getMonth() && 
           te.getFullYear() === K.getFullYear();
  };
  
  // Countdown timer
  useEffect(() => {
    if (!n || !n.calendar) return;
    
    const _ = n.calendar.find(K => K.date && K.type !== "header");
    if (!_ || !_.date) return;
    
    const V = I(_.date, n.gregorian_year);
    if (!V) return;
    
    const te = setInterval(() => {
      const K = new Date();
      const Z = V.getTime() - K.getTime();
      
      if (Z <= 0) {
        v(true);
        p(null);
        clearInterval(te);
      } else {
        v(false);
        p({
          days: Math.floor(Z / (1000 * 60 * 60 * 24)),
          hours: Math.floor(Z / (1000 * 60 * 60) % 24),
          minutes: Math.floor(Z / 1000 / 60 % 60),
          seconds: Math.floor(Z / 1000 % 60)
        });
      }
    }, 1000);
    
    return () => clearInterval(te);
  }, [n]);
  
  return y.jsxs("div", {
    className: "h-[calc(100vh-64px)] bg-slate-50 flex flex-col relative",
    children: [
      // Telegram modal
      T && y.jsx("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300",
        children: y.jsxs("div", {
          className: "bg-white w-full max-w-sm rounded-2xl p-6 shadow-2xl animate-in zoom-in-95 duration-300 relative overflow-hidden",
          children: [
            y.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 z-0" }),
            y.jsx("div", { className: "absolute bottom-0 left-0 w-24 h-24 bg-red-50 rounded-full -ml-10 -mb-10 z-0" }),
            y.jsxs("div", {
              className: "relative z-10 flex flex-col items-center text-center",
              children: [
                y.jsx("div", { className: "w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-blue-200", children: y.jsx(Tu, { className: "w-8 h-8 text-white ml-1" }) }),
                y.jsx("h3", { className: "text-xl font-black text-slate-800 mb-2", children: "  !" }),
                y.jsx("p", { className: "text-slate-600 text-sm mb-6 leading-relaxed font-medium", children: "           " }),
                y.jsxs("div", {
                  className: "flex w-full gap-3",
                  children: [
                    y.jsx("button", {
                      onClick: () => S(false),
                      className: "flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors",
                      children: " "
                    }),
                    y.jsxs("button", {
                      onClick: N,
                      className: "flex-[2] py-3 rounded-xl bg-blue-500 text-white font-bold shadow-lg shadow-blue-200 hover:bg-blue-600 transition-all active:scale-95 flex items-center justify-center gap-2",
                      children: [
                        y.jsx(Tu, { className: "w-4 h-4" }),
                        " "
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        })
      }),
      
      // Dua modal
      E && y.jsx("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300",
        onClick: () => L(false),
        children: y.jsxs("div", {
          className: "bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col max-h-[85vh]",
          onClick: _ => _.stopPropagation(),
          children: [
            y.jsxs("div", {
              className: "px-5 py-4 border-b border-gray-100 flex justify-between items-center bg-slate-50 shrink-0",
              children: [
                y.jsxs("h3", {
                  className: "text-lg font-bold text-slate-800 flex items-center gap-2",
                  children: [
                    y.jsx(ib, { className: "w-5 h-5 text-emerald-600" }),
                    " "
                  ]
                }),
                y.jsx("button", {
                  onClick: () => L(false),
                  className: "p-1 rounded-full hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors",
                  children: y.jsx(Ja, { className: "w-5 h-5" })
                })
              ]
            }),
            y.jsxs("div", {
              className: "overflow-y-auto custom-scrollbar p-5 space-y-4 bg-slate-50/50",
              children: [
                // Niyat
                y.jsxs("div", {
                  className: "bg-white rounded-2xl p-5 border border-emerald-100 shadow-sm relative overflow-hidden",
                  children: [
                    y.jsx("div", { className: "absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-6 -mt-6" }),
                    y.jsxs("h3", {
                      className: "font-bold text-emerald-800 mb-3 flex items-center gap-2 text-sm border-b border-emerald-50 pb-2 relative z-10",
                      children: [
                        y.jsx(Su, { className: "w-4 h-4 text-emerald-600" }),
                        " "
                      ]
                    }),
                    y.jsx("p", {
                      className: "text-sm text-slate-700 italic mb-3 font-serif bg-emerald-50/50 p-3 rounded-lg border border-emerald-50/50 text-center relative z-10 leading-relaxed",
                      children: "                "
                    }),
                    y.jsxs("p", {
                      className: "text-xs text-slate-500 text-center leading-relaxed relative z-10",
                      children: [
                        y.jsx("strong", { children: ":" }),
                        "  !                  ,     "
                      ]
                    })
                  ]
                }),
                // Iftar Dua
                y.jsxs("div", {
                  className: "bg-white rounded-2xl p-5 border border-orange-100 shadow-sm relative overflow-hidden",
                  children: [
                    y.jsx("div", { className: "absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-6 -mt-6" }),
                    y.jsxs("h3", {
                      className: "font-bold text-orange-800 mb-3 flex items-center gap-2 text-sm border-b border-orange-50 pb-2 relative z-10",
                      children: [
                        y.jsx(qa, { className: "w-4 h-4 text-orange-500" }),
                        " "
                      ]
                    }),
                    y.jsx("p", {
                      className: "text-sm text-slate-700 italic mb-3 font-serif bg-orange-50/50 p-3 rounded-lg border border-orange-50/50 text-center relative z-10 leading-relaxed",
                      children: "          "
                    }),
                    y.jsxs("p", {
                      className: "text-xs text-slate-500 text-center leading-relaxed relative z-10",
                      children: [
                        y.jsx("strong", { children: ":" }),
                        "  !             "
                      ]
                    })
                  ]
                })
              ]
            }),
            y.jsx("div", {
              className: "p-3 border-t border-gray-100 bg-white",
              children: y.jsx("button", {
                onClick: () => L(false),
                className: "w-full py-2.5 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-sm hover:bg-emerald-100 transition-colors",
                children: " "
              })
            })
          ]
        })
      }),
      
      // District modal
      y.jsx(RR, {
        isOpen: d,
        onClose: () => f(false),
        onSelect: M,
        selectedId: e.id
      }),
      
      y.jsxs("div", {
        className: "flex-none bg-slate-50 z-10 shadow-sm relative",
        children: [
          // Header banner
          y.jsxs("div", {
            className: "bg-gradient-to-br from-emerald-800 to-teal-900 text-white relative overflow-hidden rounded-b-[2rem] shadow-lg pb-6",
            children: [
              y.jsx("div", { className: "absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" }),
              y.jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-emerald-600/30 rounded-full blur-3xl -mr-16 -mt-16" }),
              y.jsx("div", {
                className: "container mx-auto px-4 pt-4 relative z-10",
                children: y.jsxs("div", {
                  className: "flex flex-col items-center justify-center text-center",
                  children: [
                    y.jsxs("div", {
                      className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-emerald-100 mb-2 shadow-sm",
                      children: [
                        y.jsx(Xa, { className: "w-3 h-3 text-yellow-300" }),
                        "  "
                      ]
                    }),
                    y.jsxs("button", {
                      onClick: () => f(true),
                      className: "flex items-center gap-2 text-xl font-bold active:scale-95 transition-transform group",
                      children: [
                        e.zilla_name,
                        y.jsx(fp, { className: "w-5 h-5 text-emerald-200 group-hover:text-white transition-colors" })
                      ]
                    }),
                    y.jsx("p", { className: "text-emerald-100/70 text-[10px] font-medium tracking-wide", children: "  " })
                  ]
                })
              })
            ]
          }),
          
          // Main content
          y.jsx("div", {
            className: "container mx-auto px-4 -mt-4 relative z-20 max-w-3xl pb-2",
            children: o ? 
              // Loading state
              y.jsx("div", {
                className: "bg-white rounded-2xl p-6 shadow-md flex justify-center",
                children: y.jsx(gp, { className: "w-6 h-6 text-emerald-600 animate-spin" })
              }) : 
              y.jsxs(y.Fragment, {
                children: [
                  // Countdown timer
                  !x && h && y.jsxs("div", {
                    className: "bg-white rounded-2xl p-4 shadow-lg border border-emerald-100 mb-2",
                    children: [
                      y.jsxs("div", {
                        className: "flex items-center justify-center gap-2 mb-3 text-emerald-800 font-bold text-sm",
                        children: [
                          y.jsx(rb, { className: "w-4 h-4 text-emerald-600" }),
                          "   "
                        ]
                      }),
                      y.jsxs("div", {
                        className: "flex justify-between items-center text-center gap-2",
                        children: [
                          y.jsxs("div", {
                            className: "flex-1 bg-emerald-50 rounded-lg p-2",
                            children: [
                              y.jsx("span", { className: "block text-xl font-black text-emerald-700", children: os(h.days) }),
                              y.jsx("span", { className: "text-[10px] text-emerald-600 font-medium", children: "" })
                            ]
                          }),
                          y.jsxs("div", {
                            className: "flex-1 bg-emerald-50 rounded-lg p-2",
                            children: [
                              y.jsx("span", { className: "block text-xl font-black text-emerald-700", children: os(h.hours) }),
                              y.jsx("span", { className: "text-[10px] text-emerald-600 font-medium", children: "" })
                            ]
                          }),
                          y.jsxs("div", {
                            className: "flex-1 bg-emerald-50 rounded-lg p-2",
                            children: [
                              y.jsx("span", { className: "block text-xl font-black text-emerald-700", children: os(h.minutes) }),
                              y.jsx("span", { className: "text-[10px] text-emerald-600 font-medium", children: "" })
                            ]
                          }),
                          y.jsxs("div", {
                            className: "flex-1 bg-emerald-50 rounded-lg p-2",
                            children: [
                              y.jsx("span", { className: "block text-xl font-black text-emerald-700", children: os(h.seconds) }),
                              y.jsx("span", { className: "text-[10px] text-emerald-600 font-medium", children: "" })
                            ]
                          })
                        ]
                      }),
                      y.jsxs("button", {
                        onClick: () => L(true),
                        className: "w-full mt-3 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 text-emerald-700 rounded-xl text-xs font-bold transition-all border border-emerald-100 shadow-sm",
                        children: [
                          y.jsx(Su, { className: "w-4 h-4" }),
                          "    "
                        ]
                      })
                    ]
                  }),
                  
                  // Today's entry
                  n && n.calendar.map((_, V) => {
                    if (_.type === "header" || !Y(_.date, n.gregorian_year)) return null;
                    
                    return y.jsx("div", {
                      className: "bg-white rounded-2xl p-5 shadow-lg border border-emerald-100 relative overflow-hidden mb-2 animate-in zoom-in-95",
                      children: y.jsxs("div", {
                        className: "relative z-10",
                        children: [
                          y.jsxs("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                              y.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  y.jsx("span", { className: "bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm animate-pulse", children: "" }),
                                  y.jsxs("div", {
                                    className: "flex flex-col leading-tight",
                                    children: [
                                      y.jsxs("h3", {
                                        className: "font-bold text-slate-800 text-sm flex items-center gap-1",
                                        children: [
                                          y.jsx(Kn, { className: "w-3.5 h-3.5 text-emerald-600" }),
                                          _.date
                                        ]
                                      }),
                                      y.jsxs("span", {
                                        className: "text-[11px] font-semibold text-slate-500 ml-5",
                                        children: [_.weekday, " "]
                                      })
                                    ]
                                  })
                                ]
                              }),
                              y.jsxs("span", {
                                className: "text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 shadow-sm",
                                children: [_.day, " "]
                              })
                            ]
                          }),
                          y.jsxs("div", {
                            className: "flex gap-3 mb-4",
                            children: [
                              y.jsxs("div", {
                                className: "flex-1 bg-gradient-to-br from-slate-50 to-white border border-slate-100 p-3 rounded-xl text-center shadow-sm",
                                children: [
                                  y.jsx("p", { className: "text-[10px] text-slate-500 font-bold mb-1", children: "  " }),
                                  y.jsx("p", { className: "text-xl font-black text-slate-800", children: _.sehri_last })
                                ]
                              }),
                              y.jsxs("div", {
                                className: "flex-1 bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 p-3 rounded-xl text-center shadow-sm",
                                children: [
                                  y.jsx("p", { className: "text-[10px] text-emerald-600 font-bold mb-1", children: " " }),
                                  y.jsx("p", { className: "text-xl font-black text-emerald-700", children: _.iftar })
                                ]
                              })
                            ]
                          }),
                          y.jsxs("button", {
                            onClick: () => L(true),
                            className: "w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl text-sm font-bold transition-all shadow-md active:scale-95",
                            children: [
                              y.jsx(Su, { className: "w-4 h-4" }),
                              "    "
                            ]
                          })
                        ]
                      })
                    }, V);
                  })
                ]
              })
          })
        ]
      }),
      
      // Full month schedule
      y.jsx("div", {
        className: "flex-1 overflow-y-auto custom-scrollbar container mx-auto px-4 pb-4 max-w-3xl space-y-4",
        children: o ? 
          y.jsx("div", {
            className: "flex flex-col items-center justify-center py-10 opacity-50",
            children: y.jsx("p", { className: "text-xs text-slate-400", children: "Loading details..." })
          }) : 
          n ? 
            y.jsxs(y.Fragment, {
              children: [
                O && y.jsx("div", {
                  className: "bg-orange-50 border border-orange-100 rounded-xl p-3 flex gap-3 items-center justify-center text-center",
                  children: y.jsx("p", { className: "text-[11px] text-orange-800 leading-relaxed font-bold", children: O })
                }),
                
                y.jsxs("div", {
                  className: "bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-safe",
                  children: [
                    y.jsxs("div", {
                      className: "p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between sticky top-0 z-10 backdrop-blur-sm bg-slate-50/90",
                      children: [
                        y.jsxs("h3", {
                          className: "font-bold text-slate-800 flex items-center gap-2 text-sm",
                          children: [
                            y.jsx(Kn, { className: "w-4 h-4 text-emerald-600" }),
                            "  "
                          ]
                        }),
                        y.jsx("span", { className: "text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold", children: " " })
                      ]
                    }),
                    
                    y.jsx("div", {
                      className: "divide-y divide-slate-50",
                      children: n.calendar.map((_, V) => {
                        if (_.type === "header") {
                          return y.jsx("div", {
                            className: "bg-slate-100/80 px-4 py-2",
                            children: y.jsx("p", { className: "text-[10px] font-bold text-slate-600 text-center uppercase tracking-wider", children: _.title })
                          }, V);
                        }
                        
                        const te = Y(_.date, n.gregorian_year);
                        
                        return y.jsxs("div", {
                          className: `p-3 sm:p-4 flex items-center justify-between transition-colors ${te ? "bg-emerald-50 border-l-4 border-emerald-500" : "hover:bg-slate-50"}`,
                          children: [
                            y.jsxs("div", {
                              className: "flex items-center gap-3",
                              children: [
                                y.jsx("div", {
                                  className: `w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${te ? "bg-emerald-600 text-white shadow-md" : "bg-slate-100 text-slate-500"}`,
                                  children: _.day
                                }),
                                y.jsxs("div", {
                                  children: [
                                    y.jsx("p", { className: `text-xs sm:text-sm font-bold ${te ? "text-emerald-900" : "text-slate-800"}`, children: _.date }),
                                    y.jsxs("p", { className: "text-[10px] text-slate-400 font-medium", children: [_.weekday, " "] })
                                  ]
                                })
                              ]
                            }),
                            y.jsxs("div", {
                              className: "text-right flex items-center gap-3 sm:gap-6",
                              children: [
                                y.jsxs("div", {
                                  className: "text-center min-w-[50px]",
                                  children: [
                                    y.jsx("p", { className: "text-[9px] text-slate-400 mb-0.5", children: "  " }),
                                    y.jsx("p", { className: `text-xs sm:text-sm font-bold ${te ? "text-slate-900" : "text-slate-700"}`, children: _.sehri_last })
                                  ]
                                }),
                                y.jsx("div", { className: "w-[1px] h-6 bg-slate-100" }),
                                y.jsxs("div", {
                                  className: "text-center min-w-[50px]",
                                  children: [
                                    y.jsx("p", { className: "text-[9px] text-emerald-600/70 mb-0.5", children: "" }),
                                    y.jsx("p", { className: `text-xs sm:text-sm font-bold ${te ? "text-emerald-700" : "text-emerald-600"}`, children: _.iftar })
                                  ]
                                })
                              ]
                            })
                          ]
                        }, V);
                      })
                    })
                  ]
                }),
                
                y.jsx("div", {
                  className: "pb-6 text-center",
                  children: y.jsxs("a", {
                    href: "https://nishatalwayson.top",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold hover:bg-blue-100 transition-colors border border-blue-100",
                    children: [
                      y.jsx(Tu, { className: "w-3.5 h-3.5" }),
                      "Join our Telegram Channel",
                      y.jsx(hp, { className: "w-3 h-3 ml-1 opacity-50" })
                    ]
                  })
                })
              ]
            }) : 
            y.jsx("div", {
              className: "text-center py-12 text-slate-400",
              children: "  "
            })
      })
    ]
  });
};


// ==============================================
// FAVORITES DRAWER COMPONENT
// ==============================================

const DR = ({ isOpen: l, onClose: e, favorites: s, onRemove: n, onItemClick: r }) => {
  const [o, u] = oe.useState(null);
  
  if (!l) return null;
  
  const d = (h, p) => {
    h.stopPropagation();
    navigator.clipboard.writeText(p.url || window.location.href);
    u(p.uniqueId);
    setTimeout(() => u(null), 2000);
  };
  
  const f = (h, p) => {
    h.stopPropagation();
    n(p);
  };
  
  return y.jsxs("div", {
    className: "fixed inset-0 z-[100] flex justify-start isolate",
    children: [
      y.jsx("div", {
        className: "absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300",
        onClick: e
      }),
      y.jsxs("div", {
        className: "relative w-full max-w-sm h-full bg-white shadow-2xl animate-in slide-in-from-left duration-300 flex flex-col rounded-r-3xl overflow-hidden",
        children: [
          // Header
          y.jsxs("div", {
            className: "px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white shrink-0 z-10",
            children: [
              y.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  y.jsx("div", { className: "p-2.5 bg-red-50 rounded-xl text-red-600 shadow-sm border border-red-100", children: y.jsx(Ul, { className: "w-5 h-5 fill-red-600" }) }),
                  y.jsxs("div", {
                    children: [
                      y.jsx("h2", { className: "text-lg font-black text-slate-800 tracking-tight", children: " " }),
                      y.jsxs("p", { className: "text-xs text-slate-500 font-bold opacity-80", children: [s.length, "  "] })
                    ]
                  })
                ]
              }),
              y.jsx("button", {
                onClick: e,
                className: "p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors active:scale-90",
                children: y.jsx(Ja, { className: "w-6 h-6" })
              })
            ]
          }),
          
          // Content
          y.jsx("div", {
            className: "flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50/50 custom-scrollbar",
            children: s.length === 0 ? 
              y.jsxs("div", {
                className: "h-full flex flex-col items-center justify-center text-slate-400 gap-4 opacity-60",
                children: [
                  y.jsx("div", { className: "p-6 bg-white rounded-full shadow-sm", children: y.jsx(Ul, { className: "w-10 h-10 stroke-1 text-slate-300" }) }),
                  y.jsx("p", { className: "text-sm font-medium", children: "    " })
                ]
              }) : 
              s.map(h => y.jsxs("div", {
                onClick: () => { r(h); e(); },
                className: "group bg-white rounded-2xl p-3 border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-100 transition-all cursor-pointer flex gap-3 relative overflow-hidden active:scale-[0.98]",
                children: [
                  y.jsxs("div", {
                    className: "w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-slate-100 relative shadow-inner",
                    children: [
                      y.jsx("img", { src: h.image, alt: "", className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" }),
                      y.jsx("div", { className: "absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" })
                    ]
                  }),
                  y.jsx("div", {
                    className: "flex-grow min-w-0 flex flex-col justify-between py-1",
                    children: y.jsxs("div", {
                      className: "space-y-1.5",
                      children: [
                        y.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            y.jsx("span", { className: "text-[9px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200", children: h.sourceName }),
                            y.jsxs("span", {
                              className: "text-[10px] text-slate-400 flex items-center gap-1 font-medium",
                              children: [
                                y.jsx(Kn, { className: "w-3 h-3" }),
                                h.timeStr
                              ]
                            })
                          ]
                        }),
                        y.jsx("h3", {
                          className: "text-[13px] font-bold text-slate-800 line-clamp-3 leading-snug group-hover:text-red-700 transition-colors",
                          children: h.title
                        })
                      ]
                    })
                  }),
                  y.jsxs("div", {
                    className: "absolute right-2 bottom-2 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0",
                    children: [
                      y.jsx("button", {
                        onClick: p => d(p, h),
                        className: "p-2 rounded-full bg-white text-slate-400 hover:text-blue-600 shadow-sm border border-gray-100 hover:border-blue-200 transition-colors",
                        title: "  ",
                        children: o === h.uniqueId ? y.jsx(Xu, { className: "w-3.5 h-3.5 text-green-500" }) : y.jsx($1, { className: "w-3.5 h-3.5" })
                      }),
                      y.jsx("button", {
                        onClick: p => f(p, h.uniqueId),
                        className: "p-2 rounded-full bg-white text-slate-400 hover:text-red-600 shadow-sm border border-gray-100 hover:border-red-200 transition-colors",
                        title: " ",
                        children: y.jsx(Kb, { className: "w-3.5 h-3.5" })
                      })
                    ]
                  })
                ]
              }, h.uniqueId))
          }),
          
          // Footer
          s.length > 0 && y.jsx("div", {
            className: "p-4 border-t border-gray-100 bg-white text-center",
            children: y.jsx("p", { className: "text-[10px] text-slate-400 font-medium", children: "      " })
          })
        ]
      })
    ]
  });
};


// ==============================================
// FAVORITES HOOK
// ==============================================

const _R = () => {
  const [l, e] = oe.useState(() => {
    if (typeof window > "u") return [];
    try {
      const o = localStorage.getItem("bdnews_favorites");
      return o ? JSON.parse(o) : [];
    } catch (o) {
      console.error(o);
      return [];
    }
  });
  
  useEffect(() => {
    localStorage.setItem("bdnews_favorites", JSON.stringify(l));
  }, [l]);
  
  return {
    favorites: l,
    toggleFavorite: o => {
      e(u => {
        if (u.find(f => f.uniqueId === o.uniqueId)) {
          return u.filter(f => f.uniqueId !== o.uniqueId);
        } else {
          return [o, ...u];
        }
      });
    },
    removeFavorite: o => {
      e(u => u.filter(d => d.uniqueId !== o));
    },
    isFavorite: o => l.some(u => u.uniqueId === o)
  };
};


// ==============================================
// DATE & TIME UTILITIES
// ==============================================

// Format timestamp to Bengali relative time
const qu = l => {
  const e = new Date(l);
  const n = new Date().getTime() - e.getTime();
  const r = Math.floor(n / 60000);
  const o = Math.floor(r / 60);
  
  if (r < 60) return `${os(r)}  `;
  if (o < 24) return `${os(o)}  `;
  return new Intl.DateTimeFormat("bn-BD", {
    day: "numeric",
    month: "long"
  }).format(e);
};


// ==============================================
// NEWS FETCHER FUNCTION
// ==============================================

const Yu = async (l, e, s = 1) => {
  var n, r;
  
  // Jamuna TV
  if (l === "jamuna") {
    try {
      const o = `https://jamuna.nurayistiqbalofficial.workers.dev/?count=20&page=${s}`;
      const u = await fetch(o);
      if (!u.ok) throw new Error("Network response was not ok");
      const d = await u.json();
      
      if (!d.success || !Array.isArray(d.data)) return [];
      
      return d.data.map(f => {
        let h = Date.now();
        
        if (f.created_at) {
          const p = f.created_at.replace(" ", "T");
          h = Date.parse(p);
          if (isNaN(h)) h = Date.now();
        } else if (f.updated_at) {
          const p = f.updated_at.replace(" ", "T");
          h = Date.parse(p);
          if (isNaN(h)) h = Date.now();
        }
        
        return {
          uniqueId: `jamuna-${f.id}`,
          originalId: f.id.toString(),
          sourceId: "jamuna",
          sourceName: e.name,
          sourceColor: e.color,
          title: f.headline,
          subtitle: f.description || "",
          body: f.full_description || f.description || "",
          image: f.thumb,
          timeStr: f.publishTimeDiff || f.publishTime || f.publishDateTime || qu(h),
          timestamp: h,
          url: f.url,
          reporter: f.reporter,
          category: f.categoryName
        };
      });
    } catch (o) {
      console.error("Jamuna fetch error:", o);
      return [];
    }
  }
  
  // Somoy TV
  if (l === "somoy") {
    try {
      const o = `https://somoy.shortcutbd.workers.dev/?count=30&page=${s}`;
      const u = await fetch(o);
      if (!u.ok) throw new Error("Network response was not ok");
      const d = await u.json();
      
      const newsItems = (((r = (n = d == null ? void 0 : d.data) == null ? void 0 : n.news) == null ? void 0 : r.news) || []);
      
      return newsItems.map(h => {
        const p = parseInt(h.publishedAt) || Date.now();
        return {
          uniqueId: `somoy-${h.id}`,
          originalId: h.id,
          sourceId: "somoy",
          sourceName: e.name,
          sourceColor: e.color,
          title: h.title,
          subtitle: h.subtitle || "",
          body: "",
          image: h.coverImage,
          timeStr: qu(p),
          timestamp: p,
          url: "#",
          slug: h.slug,
          reporter: ""
        };
      });
    } catch (o) {
      console.error("Somoy fetch error:", o);
      return [];
    }
  }
  
  // Other news sources (C24, ITV, ATN)
  if (l === "c24" || l === "itv" || l === "atn") {
    try {
      const o = await fetch(e.url);
      if (!o.ok) throw new Error(`HTTP error! status: ${o.status}`);
      const u = await o.json();
      const d = u.news || u.data || u.items || (Array.isArray(u) ? u : []);
      
      if (!Array.isArray(d)) return [];
      
      return d.map(f => {
        var x;
        let h = Date.now();
        
        if (f.time) {
          const v = Date.parse(f.time);
          if (!isNaN(v)) h = v;
        } else if (f.published_at) {
          const v = Date.parse(f.published_at);
          if (!isNaN(v)) h = v;
        }
        
        const p = f.subtitle || (f.body ? f.body.replace(/<[^>]*>?/gm, "").substring(0, 100) + "..." : "");
        
        return {
          uniqueId: `${l}-${f.id || Math.random().toString(36).substr(2, 9)}`,
          originalId: (x = f.id) == null ? void 0 : x.toString(),
          sourceId: l,
          sourceName: e.name,
          sourceColor: e.color,
          title: f.title || "",
          subtitle: p,
          body: f.body || f.details || f.content || "",
          image: f.image || f.cover || f.thumbnail || "",
          timeStr: qu(h),
          timestamp: h,
          url: f.url || "#",
          reporter: f.reporter || "",
          category: f.category || ""
        };
      });
    } catch (o) {
      console.error(`${l} fetch error:`, o);
      return [];
    }
  }
  
  return [];
};


// ==============================================
// MAIN APP COMPONENT
// ==============================================

function CR() {
  // URL hash routing
  const l = () => {
    if (typeof window < "u") {
      const ue = window.location.hash.toLowerCase().replace("#/", "");
      
      if (ue.startsWith("ramadan")) {
        const _e = ue.split("/");
        return { tab: "ramadan", ramadanCityId: _e[1] ? parseInt(_e[1]) : 51 };
      }
      
      if (ue.includes("bdtime") || ue.includes("calendar")) {
        return { tab: "calendar" };
      }
      
      if (ue === "live") return { tab: "live" };
      if (Object.keys(NEWS_SOURCES).includes(ue)) return { tab: ue };
      
      return { tab: "all" };
    }
    return { tab: "all" };
  };
  
  const [e, s] = oe.useState(l());          // Route state
  const n = e.tab;                           // Current tab
  
  const [r, o] = oe.useState([]);            // News items
  const [u, d] = oe.useState(() => {         // Loading states per source
    const ue = {};
    Object.keys(NEWS_SOURCES).forEach(_e => ue[_e] = true);
    return ue;
  });
  
  const [f, h] = oe.useState(false);         // Loading more
  const [p, x] = oe.useState(false);         // Refreshing
  const [v, T] = oe.useState(false);         // Network error
  const [S, E] = oe.useState(null);          // Selected article
  const [L, w] = oe.useState(false);         // Info modal open
  const [M, N] = oe.useState("news");        // Info modal mode
  const [O, I] = oe.useState(null);          // Calendar QA data
  
  // Favorites
  const { favorites: Y, toggleFavorite: _, removeFavorite: V, isFavorite: te } = _R();
  
  const [K, Z] = oe.useState(false);         // Favorites drawer open
  
  // Pagination
  const [ce, le] = oe.useState(30);          // Display limit
  const [me, fe] = oe.useState(1);           // Somoy page
  const [U, se] = oe.useState(1);            // Jamuna page
  const [H, q] = oe.useState("");            // Search query
  
  // Sync with hash changes
  useEffect(() => {
    const ue = () => { s(l()); };
    window.addEventListener("hashchange", ue);
    return () => window.removeEventListener("hashchange", ue);
  }, []);
  
  // Tab change handler
  const W = ue => {
    if (ue === "calendar") window.location.hash = "/bdtime";
    else if (ue === "ramadan") {
      let _e = 51;
      try {
        if (typeof window < "u") {
          const We = localStorage.getItem("ramadan_district");
          if (We) {
            const it = JSON.parse(We);
            if (it && it.id) _e = it.id;
          }
        }
      } catch (We) {
        console.error("Error reading ramadan preference", We);
      }
      window.location.hash = `/ramadan/${_e}`;
    } else if (ue === "all") {
      window.location.hash = "/";
    } else {
      window.location.hash = `/${ue}`;
    }
  };
  
  // Fetch all news
  const D = useCallback(async () => {
    T(false);
    
    if (r.length === 0 || p) o([]);
    
    fe(1);
    se(1);
    d(it => {
      const Xe = { ...it };
      Object.keys(NEWS_SOURCES).forEach(tt => Xe[tt] = true);
      return Xe;
    });
    
    const ue = Object.keys(NEWS_SOURCES);
    let _e = 0;
    let We = false;
    
    ue.forEach(async it => {
      try {
        const Xe = NEWS_SOURCES[it];
        const tt = await Yu(it, Xe, 1);
        
        if (tt.length > 0) {
          o(Ds => {
            const Jl = [...Ds, ...tt];
            return Array.from(new Map(Jl.map(Js => [Js.uniqueId, Js])).values())
              .sort((Js, Zn) => Zn.timestamp - Js.timestamp);
          });
          We = true;
        }
      } catch (Xe) {
        console.error(`Failed to load ${it}`, Xe);
      } finally {
        d(Xe => ({ ...Xe, [it]: false }));
        _e++;
        if (_e === ue.length) {
          x(false);
          if (!We) T(true);
        }
      }
    });
  }, [p]);
  
  // Initial fetch
  useEffect(() => {
    if (r.length === 0 && n !== "ramadan" && n !== "calendar" && n !== "live") {
      D();
    }
  }, [D, r.length, n]);
  
  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    le(30);
  }, [n]);
  
  // Refresh handler
  const B = () => {
    x(true);
    le(30);
    D();
  };
  
  // Load more
  const ne = async () => {
    if (n === "somoy") {
      h(true);
      const ue = me + 1;
      try {
        const _e = await Yu("somoy", NEWS_SOURCES.somoy, ue);
        if (_e.length > 0) {
          o(We => {
            const it = new Set(We.map(tt => tt.uniqueId));
            const Xe = _e.filter(tt => !it.has(tt.uniqueId));
            return [...We, ...Xe].sort((tt, Ds) => Ds.timestamp - tt.timestamp);
          });
          fe(ue);
        }
      } catch (_e) {
        console.error(_e);
      } finally {
        h(false);
      }
    } else if (n === "jamuna") {
      h(true);
      const ue = U + 1;
      try {
        const _e = await Yu("jamuna", NEWS_SOURCES.jamuna, ue);
        if (_e.length > 0) {
          o(We => {
            const it = new Set(We.map(tt => tt.uniqueId));
            const Xe = _e.filter(tt => !it.has(tt.uniqueId));
            return [...We, ...Xe].sort((tt, Ds) => Ds.timestamp - tt.timestamp);
          });
          se(ue);
        }
      } catch (_e) {
        console.error(_e);
      } finally {
        h(false);
      }
    }
    
    le(ue => ue + 30);
  };
  
  // Filtered articles
  const ae = useMemo(() => {
    if (n === "calendar" || n === "live" || n === "ramadan") return [];
    
    let ue = r;
    
    if (n !== "all") ue = r.filter(_e => _e.sourceId === n);
    
    if (H.trim()) {
      const _e = H.toLowerCase();
      ue = ue.filter(We => {
        var it;
        return We.title.toLowerCase().includes(_e) || 
               ((it = We.subtitle) == null ? void 0 : it.toLowerCase().includes(_e));
      });
    }
    
    return ue;
  }, [n, r, H]);
  
  const de = ae.slice(0, ce);
  
  // Loading state for current tab
  const xe = useMemo(() => {
    if (n === "calendar" || n === "live" || n === "ramadan") return false;
    if (n === "all") return r.length === 0 && Object.values(u).some(Boolean);
    return u[n] && ae.length === 0;
  }, [n, r.length, u, ae.length]);
  
  // Show info modal
  const Ae = (ue, _e) => {
    N(ue);
    if (_e) I(_e);
    w(true);
  };
  
  // Next article
  const qe = () => {
    if (S) {
      const ue = ae.findIndex(_e => _e.uniqueId === S.uniqueId);
      if (ue >= 0 && ue < ae.length - 1) E(ae[ue + 1]);
    }
  };
  
  // Previous article
  const Be = () => {
    if (S) {
      const ue = ae.findIndex(_e => _e.uniqueId === S.uniqueId);
      if (ue > 0) E(ae[ue - 1]);
    }
  };
  
  // Article detail view
  if (S) {
    return y.jsx(lS, {
      item: S,
      onBack: () => E(null),
      onNext: qe,
      onPrev: Be,
      hasNext: S ? ae.findIndex(ue => ue.uniqueId === S.uniqueId) < ae.length - 1 : false,
      hasPrev: S ? ae.findIndex(ue => ue.uniqueId === S.uniqueId) > 0 : false,
      isFavorite: te,
      onToggleFavorite: _
    });
  }
  
  // Main layout
  return y.jsxs("div", {
    className: "min-h-screen bg-slate-50 font-sans text-slate-900 pb-24 relative",
    children: [
      // Header
      y.jsx(dS, {
        onInfoClick: () => Ae("news"),
        showInfoButton: n !== "calendar" && n !== "live" && n !== "ramadan",
        onFavoritesClick: () => Z(true)
      }),
      
      // Conditional content based on tab
      n === "ramadan" ? 
        y.jsx(wR, { initialCityId: e.ramadanCityId || 51 }) : 
      n === "calendar" ? 
        y.jsx(rT, { onShowInfo: ue => Ae("calendar", ue) }) : 
      n === "live" ? 
        y.jsx(LR, {}) : 
        // News tab
        y.jsxs(y.Fragment, {
          children: [
            // Search bar
            y.jsx("div", {
              className: "sticky top-[60px] z-30 bg-slate-50/95 backdrop-blur border-b border-gray-200 shadow-sm transition-all",
              children: y.jsxs("div", {
                className: "container max-w-7xl mx-auto px-4 py-3 space-y-3",
                children: [
                  y.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      y.jsxs("div", {
                        className: "relative flex-grow group",
                        children: [
                          y.jsx(xp, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-red-500 transition-colors pointer-events-none" }),
                          y.jsx("input", {
                            type: "text",
                            placeholder: " ...",
                            className: "w-full pl-10 pr-10 h-10 text-sm bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all shadow-sm text-slate-700 placeholder:text-slate-400",
                            value: H,
                            onChange: ue => q(ue.target.value)
                          }),
                          H && y.jsx("button", {
                            onClick: () => q(""),
                            className: "absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-slate-300 hover:text-red-500 hover:bg-slate-100 rounded-full transition-all",
                            children: y.jsx(Ja, { className: "w-4 h-4" })
                          })
                        ]
                      }),
                      y.jsx("button", {
                        onClick: B,
                        className: "h-10 px-4 bg-slate-800 text-white text-sm font-bold rounded-full hover:bg-slate-900 transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap active:scale-95 border border-transparent",
                        children: y.jsx(Fl, { className: `w-3.5 h-3.5 ${p ? "animate-spin" : ""}` })
                      })
                    ]
                  }),
                  
                  // Quick filters
                  y.jsxs("div", {
                    className: "flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar",
                    children: [
                      y.jsx("button", {
                        onClick: () => W("all"),
                        className: `px-4 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap transition-all border ${n === "all" ? "bg-slate-800 border-transparent text-white shadow-md" : "bg-white border-gray-200 text-slate-600"}`,
                        children: " "
                      }),
                      ["jamuna", "somoy", "c24", "itv", "atn"].map(ue => 
                        y.jsx("button", {
                          onClick: () => W(ue),
                          className: `px-4 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap transition-all border ${n === ue ? `${NEWS_SOURCES[ue].color} border-transparent text-white shadow-md` : "bg-white border-gray-200 text-slate-600"}`,
                          children: NEWS_SOURCES[ue].name
                        }, ue)
                      )
                    ]
                  })
                ]
              })
            }),
            
            // Main content
            y.jsx("main", {
              className: "container mx-auto px-4 py-6 max-w-7xl",
              children: xe ? 
                y.jsx(oS, {}) : 
                v && r.length === 0 ? 
                  y.jsxs("div", {
                    className: "flex flex-col items-center justify-center py-12 gap-4 text-slate-500",
                    children: [
                      y.jsx(md, { className: "w-10 h-10 text-slate-300" }),
                      y.jsx("p", { children: "  " }),
                      y.jsx("button", {
                        onClick: B,
                        className: "text-red-600 font-bold hover:underline",
                        children: " "
                      })
                    ]
                  }) : 
                  y.jsx("div", {
                    className: "flex flex-col gap-6",
                    children: de.length === 0 ? 
                      y.jsx("div", { className: "text-center py-16 text-slate-500", children: "   " }) : 
                      y.jsxs(y.Fragment, {
                        children: [
                          y.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                            children: de.map(ue => y.jsx(nS, { item: ue, onClick: E }, ue.uniqueId))
                          }),
                          (n === "somoy" || n === "jamuna" || de.length < ae.length) && 
                          y.jsx("div", {
                            className: "pt-4 pb-8 flex justify-center",
                            children: y.jsxs("button", {
                              onClick: ne,
                              disabled: f,
                              className: "flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 shadow-sm text-slate-800 font-bold rounded-full hover:bg-slate-50 hover:shadow-md transition-all active:scale-95 text-sm disabled:opacity-50 disabled:cursor-not-allowed",
                              children: [
                                f ? y.jsx(Fl, { className: "w-4 h-4 animate-spin" }) : y.jsx(Lb, { className: "w-4 h-4" }),
                                f ? " ..." : " "
                              ]
                            })
                          })
                        ]
                      })
                  })
            })
          ]
        }),
      
      // Modals
      y.jsx(fS, {
        isOpen: L,
        onClose: () => w(false),
        mode: M,
        calendarQA: O == null ? void 0 : O.bangla_calendar_questions
      }),
      
      y.jsx(DR, {
        isOpen: K,
        onClose: () => Z(false),
        favorites: Y,
        onRemove: V,
        onItemClick: E
      }),
      
      // Bottom navigation
      y.jsx(cS, { activeTab: n, onTabChange: W })
    ]
  });
}


// ==============================================
// ENTRY POINT
// ==============================================

const Ox = document.getElementById("root");
if (!Ox) throw new Error("Could not find root element to mount to");

const NR = g1.createRoot(Ox);
NR.render(y.jsx(l1.StrictMode, { children: y.jsx(CR, {}) }));