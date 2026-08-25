var $e, P, pt, re, We, ht, ut, Pe, ge, ce, mt, Le, Re, De, ye = {}, we = [], Ft = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ce = Array.isArray;
function ee(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function Fe(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Ot(t, e, n) {
  var i, d, a, c = {};
  for (a in e) a == "key" ? i = e[a] : a == "ref" ? d = e[a] : c[a] = e[a];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? $e.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (a in t.defaultProps) c[a] === void 0 && (c[a] = t.defaultProps[a]);
  return _e(t, c, i, d, null);
}
function _e(t, e, n, i, d) {
  var a = { type: t, props: e, key: n, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: d ?? ++pt, __i: -1, __u: 0 };
  return d == null && P.vnode != null && P.vnode(a), a;
}
function Te(t) {
  return t.children;
}
function be(t, e) {
  this.props = t, this.context = e;
}
function ie(t, e) {
  if (e == null) return t.__ ? ie(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? ie(t) : null;
}
function Ht(t) {
  if (t.__P && t.__d) {
    var e = t.__v, n = e.__e, i = [], d = [], a = ee({}, e);
    a.__v = e.__v + 1, P.vnode && P.vnode(a), Oe(t.__P, a, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, i, n ?? ie(e), !!(32 & e.__u), d), a.__v = e.__v, a.__.__k[a.__i] = a, xt(i, a, d), e.__e = e.__ = null, a.__e != n && ft(a);
  }
}
function ft(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), ft(t);
}
function qe(t) {
  (!t.__d && (t.__d = !0) && re.push(t) && !ke.__r++ || We != P.debounceRendering) && ((We = P.debounceRendering) || ht)(ke);
}
function ke() {
  try {
    for (var t, e = 1; re.length; ) re.length > e && re.sort(ut), t = re.shift(), e = re.length, Ht(t);
  } finally {
    re.length = ke.__r = 0;
  }
}
function gt(t, e, n, i, d, a, c, u, g, p, s) {
  var y, l, b, $, M, A, C = i && i.__k || we, S = e.length;
  for (g = Bt(n, e, C, g, S), y = 0; y < S; y++) (b = n.__k[y]) != null && (l = b.__i != -1 && C[b.__i] || ye, b.__i = y, A = Oe(t, b, l, d, a, c, u, g, p, s), $ = b.__e, b.ref && l.ref != b.ref && (l.ref && He(l.ref, null, b), s.push(b.ref, b.__c || $, b)), M == null && $ != null && (M = $), 4 & b.__u ? (g = _t(b, g, t), l.__e && (l.__e = null)) : typeof b.type == "function" && A !== void 0 ? g = A : $ && (g = $.nextSibling), b.__u &= -7);
  return n.__e = M, g;
}
function Bt(t, e, n, i, d) {
  var a, c, u, g, p, s = n.length, y = s, l = 0;
  for (t.__k = new Array(d), a = 0; a < d; a++) (c = e[a]) != null && typeof c != "boolean" && typeof c != "function" ? (typeof c == "string" || typeof c == "number" || typeof c == "bigint" || c.constructor == String ? c = t.__k[a] = _e(null, c, null, null, null) : Ce(c) ? c = t.__k[a] = _e(Te, { children: c }, null, null, null) : c.constructor === void 0 && c.__b > 0 ? c = t.__k[a] = _e(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : t.__k[a] = c, g = a + l, c.__ = t, c.__b = t.__b + 1, u = null, (p = c.__i = Vt(c, n, g, y)) != -1 && (y--, (u = n[p]) && (u.__u |= 2)), u == null || u.__v == null ? (p == -1 && (d > s ? l-- : d < s && l++), typeof c.type != "function" && (c.__u |= 4)) : p != g && (p == g - 1 ? l-- : p == g + 1 ? l++ : (p > g ? l-- : l++, c.__u |= 4))) : t.__k[a] = null;
  if (y) for (a = 0; a < s; a++) (u = n[a]) != null && (2 & u.__u) == 0 && (u.__e == i && (i = ie(u)), yt(u, u));
  return i;
}
function _t(t, e, n) {
  var i, d;
  if (typeof t.type == "function") {
    for (i = t.__k, d = 0; i && d < i.length; d++) i[d] && (i[d].__ = t, e = _t(i[d], e, n));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = ie(t)), e = n.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Vt(t, e, n, i) {
  var d, a, c, u = t.key, g = t.type, p = e[n], s = p != null && (2 & p.__u) == 0;
  if (p === null && u == null || s && u == p.key && g == p.type) return n;
  if (i > (s ? 1 : 0)) {
    for (d = n - 1, a = n + 1; d >= 0 || a < e.length; ) if ((p = e[c = d >= 0 ? d-- : a++]) != null && (2 & p.__u) == 0 && u == p.key && g == p.type) return c;
  }
  return -1;
}
function Ge(t, e, n) {
  e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || Ft.test(e) ? n : n + "px";
}
function fe(t, e, n, i, d) {
  var a, c;
  e: if (e == "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof i == "string" && (t.style.cssText = i = ""), i) for (e in i) n && e in n || Ge(t.style, e, "");
    if (n) for (e in n) i && n[e] == i[e] || Ge(t.style, e, n[e]);
  }
  else if (e[0] == "o" && e[1] == "n") a = e != (e = e.replace(mt, "$1")), c = e.toLowerCase(), e = c in t || e == "onFocusOut" || e == "onFocusIn" ? c.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + a] = n, n ? i ? n[ce] = i[ce] : (n[ce] = Le, t.addEventListener(e, a ? De : Re, a)) : t.removeEventListener(e, a ? De : Re, a);
  else {
    if (d == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && n == 1 ? "" : n));
  }
}
function Je(t) {
  return function(e) {
    if (this.l) {
      var n = this.l[e.type + t];
      if (e[ge] == null) e[ge] = Le++;
      else if (e[ge] < n[ce]) return;
      return n(P.event ? P.event(e) : e);
    }
  };
}
function Oe(t, e, n, i, d, a, c, u, g, p) {
  var s, y, l, b, $, M, A, C, S, F, _, k, O, K, Z, Q, H = e.type;
  if (e.constructor !== void 0) return null;
  128 & n.__u && (g = !!(32 & n.__u), a = [u = e.__e = n.__e]), (s = P.__b) && s(e);
  e: if (typeof H == "function") {
    y = c.length;
    try {
      if (S = e.props, F = H.prototype && H.prototype.render, _ = (s = H.contextType) && i[s.__c], k = s ? _ ? _.props.value : s.__ : i, n.__c ? C = (l = e.__c = n.__c).__ = l.__E : (F ? e.__c = l = new H(S, k) : (e.__c = l = new be(S, k), l.constructor = H, l.render = qt), _ && _.sub(l), l.state || (l.state = {}), l.__n = i, b = l.__d = !0, l.__h = [], l._sb = []), F && l.__s == null && (l.__s = l.state), F && H.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = ee({}, l.__s)), ee(l.__s, H.getDerivedStateFromProps(S, l.__s))), $ = l.props, M = l.state, l.__v = e, b) F && H.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), F && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (F && H.getDerivedStateFromProps == null && S !== $ && l.componentWillReceiveProps != null && l.componentWillReceiveProps(S, k), e.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(S, l.__s, k) === !1) {
          e.__v != n.__v && (l.props = S, l.state = l.__s, l.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(B) {
            B && (B.__ = e);
          }), we.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && c.push(l), u = ie(n);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(S, l.__s, k), F && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate($, M, A);
        });
      }
      if (l.context = k, l.props = S, l.__P = t, l.__e = !1, O = P.__r, K = 0, F) l.state = l.__s, l.__d = !1, O && O(e), s = l.render(l.props, l.state, l.context), we.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, O && O(e), s = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++K < 25);
      l.state = l.__s, l.getChildContext != null && (i = ee(ee({}, i), l.getChildContext())), F && !b && l.getSnapshotBeforeUpdate != null && (A = l.getSnapshotBeforeUpdate($, M)), Z = s != null && s.type === Te && s.key == null ? vt(s.props.children) : s, u = gt(t, Ce(Z) ? Z : [Z], e, n, i, d, a, c, u, g, p), l.base = e.__e, e.__u &= -161, l.__h.length && c.push(l), C && (l.__E = l.__ = null);
    } catch (B) {
      if (c.length = y, e.__v = null, g || a != null) {
        if (B.then) {
          for (e.__u |= g ? 160 : 128; u && u.nodeType == 8 && u.nextSibling; ) u = u.nextSibling;
          a != null && (a[a.indexOf(u)] = null), e.__e = u;
        } else if (a != null) for (Q = a.length; Q--; ) Fe(a[Q]);
      } else e.__e = n.__e;
      e.__k == null && (e.__k = n.__k || []), B.then || bt(e), P.__e(B, e, n);
    }
  } else a == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : u = e.__e = Wt(n.__e, e, n, i, d, a, c, g, p);
  return (s = P.diffed) && s(e), 128 & e.__u ? void 0 : u;
}
function bt(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(bt));
}
function xt(t, e, n) {
  for (var i = 0; i < n.length; i++) He(n[i], n[++i], n[++i]);
  P.__c && P.__c(e, t), t.some(function(d) {
    try {
      t = d.__h, d.__h = [], t.some(function(a) {
        a.call(d);
      });
    } catch (a) {
      P.__e(a, d.__v);
    }
  });
}
function vt(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : Ce(t) ? t.map(vt) : t.constructor !== void 0 ? null : ee({}, t);
}
function Wt(t, e, n, i, d, a, c, u, g) {
  var p, s, y, l, b, $, M, A = n.props || ye, C = e.props, S = e.type;
  if (S == "svg" ? d = "http://www.w3.org/2000/svg" : S == "math" ? d = "http://www.w3.org/1998/Math/MathML" : d || (d = "http://www.w3.org/1999/xhtml"), a != null) {
    for (p = 0; p < a.length; p++) if ((b = a[p]) && "setAttribute" in b == !!S && (S ? b.localName == S : b.nodeType == 3)) {
      t = b, a[p] = null;
      break;
    }
  }
  if (t == null) {
    if (S == null) return document.createTextNode(C);
    t = document.createElementNS(d, S, C.is && C), u && (P.__m && P.__m(e, a), u = !1), a = null;
  }
  if (S == null) A === C || u && t.data == C || (t.data = C);
  else {
    if (a = S == "textarea" && C.defaultValue != null ? null : a && $e.call(t.childNodes), !u && a != null) for (A = {}, p = 0; p < t.attributes.length; p++) A[(b = t.attributes[p]).name] = b.value;
    for (p in A) b = A[p], p == "dangerouslySetInnerHTML" ? y = b : p == "children" || p in C || p == "value" && "defaultValue" in C || p == "checked" && "defaultChecked" in C || fe(t, p, null, b, d);
    for (p in C) b = C[p], p == "children" ? l = b : p == "dangerouslySetInnerHTML" ? s = b : p == "value" ? $ = b : p == "checked" ? M = b : u && typeof b != "function" || A[p] === b || fe(t, p, b, A[p], d);
    if (s) u || y && (s.__html == y.__html || s.__html == t.innerHTML) || (t.innerHTML = s.__html), e.__k = [];
    else if (y && (t.innerHTML = ""), gt(e.type == "template" ? t.content : t, Ce(l) ? l : [l], e, n, i, S == "foreignObject" ? "http://www.w3.org/1999/xhtml" : d, a, c, a ? a[0] : n.__k && ie(n, 0), u, g), a != null) for (p = a.length; p--; ) Fe(a[p]);
    u && S != "textarea" || (p = "value", S == "progress" && $ == null ? t.removeAttribute("value") : $ != null && ($ !== t[p] || S == "progress" && !$ || S == "option" && $ != A[p]) && fe(t, p, $, A[p], d), p = "checked", M != null && M != t[p] && fe(t, p, M, A[p], d));
  }
  return t;
}
function He(t, e, n) {
  try {
    if (typeof t == "function") {
      var i = typeof t.__u == "function";
      i && t.__u(), i && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (d) {
    P.__e(d, n);
  }
}
function yt(t, e, n) {
  var i, d;
  if (P.unmount && P.unmount(t), (i = t.ref) && (i.current && i.current != t.__e || He(i, null, e)), (i = t.__c) != null) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (a) {
      P.__e(a, e);
    }
    i.base = i.__P = i.__n = null;
  }
  if (i = t.__k) for (d = 0; d < i.length; d++) i[d] && yt(i[d], e, n || typeof t.type != "function");
  n || Fe(t.__e), t.__c = t.__ = t.__e = void 0;
}
function qt(t, e, n) {
  return this.constructor(t, n);
}
function Ke(t, e, n) {
  var i, d, a, c;
  e == document && (e = document.documentElement), P.__ && P.__(t, e), d = (i = !1) ? null : e.__k, a = [], c = [], Oe(e, t = e.__k = Ot(Te, null, [t]), d || ye, ye, e.namespaceURI, d ? null : e.firstChild ? $e.call(e.childNodes) : null, a, d ? d.__e : e.firstChild, i, c), xt(a, t, c), t.props.children = null;
}
$e = we.slice, P = { __e: function(t, e, n, i) {
  for (var d, a, c; e = e.__; ) if ((d = e.__c) && !d.__) try {
    if ((a = d.constructor) && a.getDerivedStateFromError != null && (d.setState(a.getDerivedStateFromError(t)), c = d.__d), d.componentDidCatch != null && (d.componentDidCatch(t, i || {}), c = d.__d), c) return d.__E = d;
  } catch (u) {
    t = u;
  }
  throw t;
} }, pt = 0, be.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = ee({}, this.state), typeof t == "function" && (t = t(ee({}, n), this.props)), t && ee(n, t), t != null && this.__v && (e && this._sb.push(e), qe(this));
}, be.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), qe(this));
}, be.prototype.render = Te, re = [], ht = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ut = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, ke.__r = 0, Pe = Math.random().toString(8), ge = "__d" + Pe, ce = "__a" + Pe, mt = /(PointerCapture)$|Capture$/i, Le = 0, Re = Je(!1), De = Je(!0);
var Gt = 0;
function r(t, e, n, i, d, a) {
  e || (e = {});
  var c, u, g = e;
  if ("ref" in g) for (u in g = {}, e) u == "ref" ? c = e[u] : g[u] = e[u];
  var p = { type: t, props: g, key: n, ref: c, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Gt, __i: -1, __u: 0, __source: d, __self: a };
  if (typeof t == "function" && (c = t.defaultProps)) for (u in c) g[u] === void 0 && (g[u] = c[u]);
  return P.vnode && P.vnode(p), p;
}
var pe, D, Ae, Qe, Se = 0, wt = [], U = P, Ye = U.__b, Xe = U.__r, Ze = U.diffed, et = U.__c, tt = U.unmount, rt = U.__;
function Be(t, e) {
  U.__h && U.__h(D, t, Se || e), Se = 0;
  var n = D.__H || (D.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function T(t) {
  return Se = 1, Jt(zt, t);
}
function Jt(t, e, n) {
  var i = Be(pe++, 2);
  if (i.t = t, !i.__c && (i.__ = [zt(void 0, e), function(u) {
    var g = i.__N ? i.__N[0] : i.__[0], p = i.t(g, u);
    g !== p && (i.__N = [p, i.__[1]], i.__c.setState({}));
  }], i.__c = D, !D.__f)) {
    var d = function(u, g, p) {
      if (!i.__c.__H) return !0;
      var s = !1, y = i.__c.props !== u;
      if (i.__c.__H.__.some(function(b) {
        if (b.__N) {
          s = !0;
          var $ = b.__[0];
          b.__ = b.__N, b.__N = void 0, $ !== b.__[0] && (y = !0);
        }
      }), a) {
        var l = a.call(this, u, g, p);
        return s ? l || y : l;
      }
      return !s || y;
    };
    D.__f = !0;
    var a = D.shouldComponentUpdate, c = D.componentWillUpdate;
    D.componentWillUpdate = function(u, g, p) {
      if (this.__e) {
        var s = a;
        a = void 0, d(u, g, p), a = s;
      }
      c && c.call(this, u, g, p);
    }, D.shouldComponentUpdate = d;
  }
  return i.__N || i.__;
}
function ze(t, e) {
  var n = Be(pe++, 3);
  !U.__s && St(n.__H, e) && (n.__ = t, n.u = e, D.__H.__h.push(n));
}
function kt(t) {
  return Se = 5, he(function() {
    return { current: t };
  }, []);
}
function he(t, e) {
  var n = Be(pe++, 7);
  return St(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__;
}
function Kt() {
  for (var t; t = wt.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(xe), e.__h.some(Me), e.__h = [];
    } catch (n) {
      e.__h = [], U.__e(n, t.__v);
    }
  }
}
U.__b = function(t) {
  D = null, Ye && Ye(t);
}, U.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), rt && rt(t, e);
}, U.__r = function(t) {
  Xe && Xe(t), pe = 0;
  var e = (D = t.__c).__H;
  e && (Ae === D ? (e.__h = [], D.__h = [], e.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (e.__h.some(xe), e.__h.some(Me), e.__h = [], pe = 0)), Ae = D;
}, U.diffed = function(t) {
  Ze && Ze(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (wt.push(e) !== 1 && Qe === U.requestAnimationFrame || ((Qe = U.requestAnimationFrame) || Qt)(Kt)), e.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), Ae = D = null;
}, U.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.some(xe), n.__h = n.__h.filter(function(i) {
        return !i.__ || Me(i);
      });
    } catch (i) {
      e.some(function(d) {
        d.__h && (d.__h = []);
      }), e = [], U.__e(i, n.__v);
    }
  }), et && et(t, e);
}, U.unmount = function(t) {
  tt && tt(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.some(function(i) {
    try {
      xe(i);
    } catch (d) {
      e = d;
    }
  }), n.__H = void 0, e && U.__e(e, n.__v));
};
var nt = typeof requestAnimationFrame == "function";
function Qt(t) {
  var e, n = function() {
    clearTimeout(i), nt && cancelAnimationFrame(e), setTimeout(t);
  }, i = setTimeout(n, 35);
  nt && (e = requestAnimationFrame(n));
}
function xe(t) {
  var e = D, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), D = e;
}
function Me(t) {
  var e = D;
  t.__c = t.__(), D = e;
}
function St(t, e) {
  return !t || t.length !== e.length || e.some(function(n, i) {
    return n !== t[i];
  });
}
function zt(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const $t = String.raw`\{\{ref:([^{}]+)}}`;
function ot() {
  return new RegExp($t, "g");
}
function Ct(t, e) {
  const n = /* @__PURE__ */ new Map();
  for (const i of t.assets)
    i.enabled && i.path.trim() && (!i.shotIds.length || i.shotIds.includes(e.id)) && !e.disabledAssetIds.includes(i.id) && n.set(i.alias, i);
  return n;
}
function Tt(t, e, n) {
  const i = n.trim(), d = i.endsWith(".audio"), a = d ? i.slice(0, -6) : i, c = Ct(t, e).get(a);
  return c ? !d || c.kind === "video" && c.includeVideoAudio : !1;
}
function it(t, e) {
  const n = t.shots.filter((i) => i.enabled);
  return n.length > 0 && n.every((i) => Tt(t, i, e));
}
function It(t, e) {
  const n = [], i = Ct(t, e), d = [t.promptPrefix, e.prompt, t.promptSuffix].filter(Boolean).join(`
`), a = [...d.matchAll(ot())].map((_) => _[1].trim()), c = [], u = /* @__PURE__ */ new Set(), g = (_) => {
    u.has(_.id) || (u.add(_.id), c.push(_));
  };
  [...i.values()].filter((_) => _.fixed).sort((_, k) => _.fixedOrder - k.fixedOrder || _.alias.localeCompare(k.alias)).forEach(g);
  for (const _ of a) {
    const k = _.endsWith(".audio") ? _.slice(0, -6) : _, O = i.get(k);
    if (!O) {
      n.push(`未找到或已禁用素材：${_}`);
      continue;
    }
    _.endsWith(".audio") && (O.kind !== "video" || !O.includeVideoAudio) && n.push(`视频伴音未启用：${_}`), g(O);
  }
  const p = c.filter((_) => _.kind === "image"), s = c.filter((_) => _.kind === "video"), y = s.filter((_) => _.includeVideoAudio), l = c.filter((_) => _.kind === "audio"), b = y.length + l.length, $ = p.length + s.length + l.length;
  p.length > 9 && n.push(`参考图 ${p.length}/9，超出 H3 上限`), s.length > 3 && n.push(`参考视频 ${s.length}/3，超出 H3 上限`), b > 3 && n.push(`有效音频 ${b}/3，超出 H3 总上限`), $ > 12 && n.push(`混合文件 ${$}/12，超出 H3 上限`), b && !p.length && !s.length && n.push("音频参考不能单独使用");
  const M = s.filter((_) => typeof _.durationSeconds == "number");
  for (const _ of s) (_.durationSeconds == null || _.durationSeconds < 2 || _.durationSeconds > 15) && n.push(`视频 ${_.alias} 的时长必须为 2–15 秒`);
  M.reduce((_, k) => _ + (k.durationSeconds ?? 0), 0) > 15 && n.push("参考视频总时长超过 15 秒");
  const A = [...y.map((_) => _.audioDurationSeconds ?? _.durationSeconds), ...l.map((_) => _.durationSeconds)];
  A.some((_) => _ == null || _ < 2 || _ > 15) && n.push("每路有效音频时长必须为 2–15 秒"), A.reduce((_, k) => _ + (k ?? 0), 0) > 15 && n.push("有效音频总时长超过 15 秒");
  const C = /* @__PURE__ */ new Map();
  p.forEach((_, k) => C.set(_.alias, `<Picture ${k + 1}>`)), s.forEach((_, k) => C.set(_.alias, `<Video ${k + 1}>`)), y.forEach((_, k) => C.set(`${_.alias}.audio`, `<Audio ${k + 1}>`)), l.forEach((_, k) => C.set(_.alias, `<Audio ${y.length + k + 1}>`));
  const S = d.replace(ot(), (_, k) => C.get(k.trim()) ?? _), F = [...C.entries()].map(([_, k]) => ({ label: k, alias: _, kind: k.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: S, errors: n, slots: F, mixedFiles: $, audioCount: b };
}
function Yt(t) {
  var d, a, c, u, g, p;
  const e = [];
  (a = (d = t.project) == null ? void 0 : d.name) != null && a.trim() || e.push("Project name 不能为空"), (u = (c = t.project) == null ? void 0 : c.runId) != null && u.trim() || e.push("Run ID 不能为空"), (!Array.isArray(t.shots) || !t.shots.some((s) => s.enabled)) && e.push("至少需要一个启用分镜");
  const n = /* @__PURE__ */ new Set();
  for (const s of t.shots ?? [])
    (!((g = s.id) != null && g.trim()) || n.has(s.id)) && e.push(`分镜 ID 为空或重复：${s.id || "(空)"}`), n.add(s.id), s.durationSeconds > 0 || e.push(`分镜 ${s.id} 的时长必须大于 0`);
  const i = /* @__PURE__ */ new Set();
  for (const s of t.assets ?? []) {
    const y = (p = s.alias) == null ? void 0 : p.toLocaleLowerCase();
    (!s.alias || /[\s{}]/.test(s.alias) || s.alias.endsWith(".audio") || i.has(y)) && e.push(`素材别名无效或重复：${s.alias || "(空)"}`), i.add(y), s.enabled && !s.path && e.push(`素材 ${s.alias} 尚未选择文件`);
  }
  for (const s of t.shots.filter((y) => y.enabled)) e.push(...It(t, s).errors.map((y) => `${s.title}: ${y}`));
  return [...new Set(e)];
}
function Xt(t, e) {
  const n = [], i = new RegExp($t, "g");
  let d = 0;
  for (const a of t.matchAll(i)) {
    const c = a.index ?? 0;
    c > d && n.push({ text: t.slice(d, c), reference: !1 }), n.push({ text: a[0], reference: !0, valid: e(a[1]) }), d = c + a[0].length;
  }
  return d < t.length && n.push({ text: t.slice(d), reference: !1 }), n;
}
function Ee({ value: t, rows: e, onInput: n, isReferenceValid: i }) {
  const d = kt(null), a = Xt(t, i), c = (u) => {
    d.current && (d.current.scrollTop = u.currentTarget.scrollTop, d.current.scrollLeft = u.currentTarget.scrollLeft);
  };
  return /* @__PURE__ */ r("span", { class: "td-highlight-textarea", children: [
    /* @__PURE__ */ r("pre", { ref: d, class: "td-highlight-backdrop", "aria-hidden": "true", children: [
      a.map((u, g) => u.reference ? /* @__PURE__ */ r("mark", { class: u.valid ? "valid" : "invalid", children: u.text }, g) : u.text),
      t.endsWith(`
`) && " "
    ] }),
    /* @__PURE__ */ r("textarea", { class: "td-highlight-input", rows: e, value: t, onInput: n, onScroll: c })
  ] });
}
const Zt = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", postprocess: "后处理", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", postprocess: "Post-process", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function oe(t, e) {
  return Zt[t][e];
}
function ae(t) {
  return (Array.isArray(t.results) && t.results.length ? t.results : t.path ? [{ path: t.path, bytes: t.bytes, modifiedAt: t.modifiedAt }] : []).filter((n) => typeof n.path == "string" && n.path.trim().length > 0).sort((n, i) => (i.modifiedAt ?? 0) - (n.modifiedAt ?? 0));
}
function jt(t, e) {
  const n = /_video_(\d+)/i.exec(t.replace(/\\/g, "/"));
  return n ? Number(n[1]) : e;
}
function Ue({ src: t, alt: e }) {
  const n = kt(null), [i, d] = T(!1);
  return ze(() => {
    const a = n.current;
    if (!a) return;
    if (!("IntersectionObserver" in window)) {
      d(!0);
      return;
    }
    const c = new IntersectionObserver((u) => {
      d(u.some((g) => g.isIntersecting));
    }, { rootMargin: "160px" });
    return c.observe(a), () => c.disconnect();
  }, []), /* @__PURE__ */ r("div", { class: "td-result-thumb", ref: n, children: i ? /* @__PURE__ */ r("video", { src: t, "aria-label": e, muted: !0, playsInline: !0, preload: "metadata", onLoadedMetadata: (a) => {
    const c = a.currentTarget;
    Number.isFinite(c.duration) && c.duration > 0.02 && (c.currentTime = Math.min(0.25, Math.max(0, c.duration - 0.05)));
  } }) : /* @__PURE__ */ r("span", { children: "…" }) });
}
function ne(t, e) {
  const n = t.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!n || n.startsWith("/") || /^[A-Za-z]:\//.test(n)) return null;
  const i = n.split("/").filter(Boolean), d = i.pop();
  if (!d || i.some((c) => c === "..")) return null;
  const a = new URLSearchParams({ filename: d, type: e });
  return i.length && a.set("subfolder", i.join("/")), `/view?${a.toString()}`;
}
function er(t) {
  return ne(t, "input");
}
function se(t) {
  return t.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function dt({ asset: t, compact: e = !1 }) {
  const n = er(t.path), i = `td-media-preview ${e ? "compact" : ""}`;
  return n ? t.kind === "image" ? /* @__PURE__ */ r("div", { class: i, children: /* @__PURE__ */ r("img", { src: n, alt: t.alias, loading: "lazy" }) }) : t.kind === "video" ? /* @__PURE__ */ r("div", { class: i, children: /* @__PURE__ */ r("video", { src: n, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ r("div", { class: i, children: /* @__PURE__ */ r("audio", { src: n, controls: !0, preload: "metadata" }) }) : t.path ? /* @__PURE__ */ r("div", { class: `${i} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ r("div", { class: `${i} empty`, children: "尚未选择素材 / No media selected" });
}
function tr(t) {
  let e = 0;
  return t.shots.map((n, i) => {
    const d = {
      key: `${i}:${n.id}`,
      shot: n,
      sourceIndex: i,
      activeIndex: n.enabled ? e : -1
    };
    return n.enabled && (e += 1), d;
  });
}
function rr(t, e, n) {
  return t.filter((i) => i.shot.enabled && e[i.key]).map((i) => ({
    shotId: i.shot.id,
    activeIndex: i.activeIndex,
    path: n[i.key] ?? ""
  }));
}
function nr(t, e, n) {
  const i = {};
  return t.forEach((d) => {
    const a = d.sourceIndex + 1;
    i[d.key] = d.shot.enabled && a >= e && a <= n;
  }), i;
}
async function at(t) {
  const e = await fetch(t), n = await e.json();
  if (!e.ok) throw new Error(n.error || `HTTP ${e.status}`);
  return n;
}
function or(t, e, n) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({
    projectName: t.project.name,
    runId: t.project.runId,
    shotId: e,
    activeIndex: String(n)
  }).toString()}`;
}
function ir(t) {
  return `/theodore-director/v1/postprocess/merged-videos?${new URLSearchParams({ projectName: t.project.name, runId: t.project.runId }).toString()}`;
}
function dr({ plan: t, language: e }) {
  const n = he(() => tr(t), [t]), [i, d] = T({}), [a, c] = T({}), [u, g] = T({}), [p, s] = T(null), [y, l] = T(!1), [b, $] = T(""), [M, A] = T({ found: !1, results: [] }), [C, S] = T(!1), [F, _] = T(""), [k, O] = T(0), [K, Z] = T("1"), [Q, H] = T(String(n.length || 1)), B = n.filter((h) => h.shot.enabled), ue = B.length > 0 && B.every((h) => a[h.key]), G = rr(n, a, u), L = G.filter((h) => !h.path), Y = n.some((h) => {
    var v;
    return a[h.key] && ((v = i[h.key]) == null ? void 0 : v.loading);
  }), le = n.reduce(
    (h, v) => h + (v.shot.enabled && a[v.key] ? v.shot.durationSeconds : 0),
    0
  ), J = he(() => ae(M), [M]), q = J.find((h) => h.path === F) ?? J[0];
  ze(() => {
    let h = !1;
    const v = {}, R = {};
    return n.forEach((E) => {
      v[E.key] = E.shot.enabled, R[E.key] = { loading: !0, response: { found: !1, results: [] } };
    }), c((E) => {
      const z = {};
      return n.forEach((N) => {
        z[N.key] = N.shot.enabled ? E[N.key] ?? v[N.key] : !1;
      }), z;
    }), d(R), $(""), n.forEach((E) => {
      at(or(t, E.shot.id, E.activeIndex)).then((z) => {
        if (h) return;
        const N = ae(z);
        d((W) => ({ ...W, [E.key]: { loading: !1, response: z } })), g((W) => {
          var w;
          return {
            ...W,
            [E.key]: N.some((te) => te.path === W[E.key]) ? W[E.key] : ((w = N[0]) == null ? void 0 : w.path) ?? ""
          };
        });
      }).catch((z) => {
        h || d((N) => ({
          ...N,
          [E.key]: { loading: !1, response: { found: !1, results: [], error: String(z) } }
        }));
      });
    }), () => {
      h = !0;
    };
  }, [t.project.name, t.project.runId, t.shots.map((h) => `${h.id}:${h.enabled}`).join("|"), k]), ze(() => {
    let h = !1;
    return S(!0), at(ir(t)).then((v) => {
      if (h) return;
      const R = ae(v);
      A(v), _((E) => {
        var z;
        return R.some((N) => N.path === E) ? E : ((z = R[0]) == null ? void 0 : z.path) ?? "";
      });
    }).catch((v) => {
      h || A({ found: !1, results: [], error: String(v) });
    }).finally(() => {
      h || S(!1);
    }), () => {
      h = !0;
    };
  }, [t.project.name, t.project.runId, k]);
  const Ie = () => {
    const h = !ue;
    c((v) => {
      const R = { ...v };
      return B.forEach((E) => {
        R[E.key] = h;
      }), R;
    });
  }, me = () => {
    const h = Number(K), v = Number(Q);
    if (!Number.isInteger(h) || !Number.isInteger(v) || h < 1 || v < h || v > n.length) {
      window.alert(e === "zh" ? `请输入有效范围：1 ≤ m ≤ n ≤ ${n.length}` : `Enter a valid range: 1 ≤ m ≤ n ≤ ${n.length}`);
      return;
    }
    c(nr(n, h, v));
  }, je = async () => {
    if (!G.length) {
      window.alert(e === "zh" ? "请至少选择一个镜头" : "Select at least one shot.");
      return;
    }
    if (L.length) {
      window.alert(e === "zh" ? `以下已选镜头没有可用结果：${L.map((h) => h.shotId).join("、")}` : `Selected shots without a result: ${L.map((h) => h.shotId).join(", ")}`);
      return;
    }
    l(!0), $("");
    try {
      const h = await fetch("/theodore-director/v1/postprocess/merge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: t.project.name, runId: t.project.runId, selections: G })
      }), v = await h.json();
      if (!h.ok) throw new Error(v.error || `HTTP ${h.status}`);
      O((R) => R + 1);
    } catch (h) {
      $(String(h instanceof Error ? h.message : h));
    } finally {
      l(!1);
    }
  }, j = q != null && q.path ? ne(q.path, "output") : null;
  return /* @__PURE__ */ r("section", { class: "td-postprocess", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: e === "zh" ? "合并视频" : "Merge videos" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "从每个镜头选择一个结果，按当前分镜顺序进行无损合并。" : "Choose one result per shot and merge them losslessly in storyboard order." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: [
        /* @__PURE__ */ r("button", { onClick: () => O((h) => h + 1), children: [
          "↻ ",
          e === "zh" ? "刷新结果" : "Refresh"
        ] }),
        /* @__PURE__ */ r("button", { onClick: Ie, children: ue ? e === "zh" ? "全部取消" : "Clear all" : e === "zh" ? "一键全选" : "Select all" })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { class: "td-post-summary", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `已选择 ${G.length}/${B.length} 个启用镜头` : `${G.length}/${B.length} enabled shots selected` }),
      /* @__PURE__ */ r("span", { children: e === "zh" ? `预计时长 ${le.toFixed(1)} 秒` : `Estimated duration ${le.toFixed(1)} sec` }),
      /* @__PURE__ */ r("div", { class: "td-post-range", role: "group", "aria-label": e === "zh" ? "合并视频范围" : "Merge video range", children: [
        /* @__PURE__ */ r("span", { children: e === "zh" ? "范围" : "Range" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: n.length, step: "1", value: K, "aria-label": e === "zh" ? "起始镜头 m" : "Start shot m", onInput: (h) => Z(h.currentTarget.value) }),
        /* @__PURE__ */ r("span", { children: "—" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: n.length, step: "1", value: Q, "aria-label": e === "zh" ? "结束镜头 n" : "End shot n", onInput: (h) => H(h.currentTarget.value) }),
        /* @__PURE__ */ r("button", { disabled: !n.length, onClick: me, children: e === "zh" ? "确认范围" : "Apply range" })
      ] }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: y || Y || !G.length || !!L.length, onClick: je, children: y ? e === "zh" ? "正在合并…" : "Merging…" : e === "zh" ? "合并所选视频" : "Merge selected videos" })
    ] }),
    b && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      e === "zh" ? "合并失败：" : "Merge failed: ",
      b
    ] }),
    L.length > 0 && /* @__PURE__ */ r("div", { class: "td-post-warning", children: e === "zh" ? "已选镜头中存在尚未生成视频的镜头。" : "Some selected shots do not have generated videos yet." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: n.map((h) => {
      const v = i[h.key], R = ae((v == null ? void 0 : v.response) ?? { results: [] }), E = !!a[h.key];
      return /* @__PURE__ */ r("article", { class: `td-post-shot ${E ? "selected" : ""} ${h.shot.enabled ? "" : "disabled"}`, children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: E, disabled: !h.shot.enabled, onChange: (z) => c((N) => ({ ...N, [h.key]: z.currentTarget.checked })) }),
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("strong", { children: h.shot.id }),
              /* @__PURE__ */ r("em", { children: h.shot.title })
            ] })
          ] }),
          /* @__PURE__ */ r("span", { children: [
            h.shot.durationSeconds,
            "s"
          ] })
        ] }),
        !h.shot.enabled && /* @__PURE__ */ r("div", { class: "td-post-shot-disabled-note", children: e === "zh" ? "该镜头当前已禁用：历史结果可以预览，但不能参加合并。" : "This shot is disabled: historical results can be previewed but cannot be merged." }),
        v != null && v.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: e === "zh" ? "正在查询生成结果…" : "Loading generated results…" }) : v != null && v.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: e === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : R.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: R.map((z, N) => {
          const W = ne(z.path, "output"), w = u[h.key] === z.path, te = jt(z.path, R.length - N);
          return /* @__PURE__ */ r("div", { class: `td-post-result ${w ? "selected" : ""}`, children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", role: "radio", "aria-checked": w, onClick: () => g((Ne) => ({ ...Ne, [h.key]: z.path })), children: [
              W ? /* @__PURE__ */ r(Ue, { src: W, alt: `${h.shot.title} ${e === "zh" ? "结果" : "result"} ${te}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  e === "zh" ? `结果 ${te}` : `Result ${te}`,
                  N === 0 && /* @__PURE__ */ r("em", { children: e === "zh" ? "最新" : "Latest" })
                ] }),
                /* @__PURE__ */ r("span", { title: z.path, children: se(z.path) }),
                /* @__PURE__ */ r("small", { children: z.bytes ? `${(z.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "td-post-result-play", disabled: !W, title: e === "zh" ? "播放预览" : "Play preview", onClick: () => W && s({ path: z.path, title: `${h.shot.id} · ${h.shot.title}` }), children: "▶" })
          ] }, z.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: e === "zh" ? "未找到这个镜头的生成结果" : "No generated result found for this shot" })
      ] }, h.key);
    }) }),
    /* @__PURE__ */ r("section", { class: "td-post-merged", children: [
      /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: e === "zh" ? "合并结果" : "Merged results" }),
        /* @__PURE__ */ r("span", { class: `td-result-state ${J.length ? "found" : ""}`, children: C ? e === "zh" ? "查询中" : "Checking" : e === "zh" ? `${J.length} 个结果` : `${J.length} results` })
      ] }) }),
      C ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: e === "zh" ? "正在查询合并结果…" : "Loading merged results…" }) : M.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: e === "zh" ? "无法查询合并结果" : "Unable to query merged results" }) : q && j ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
        /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
          /* @__PURE__ */ r("video", { src: j, controls: !0, preload: "metadata", playsInline: !0 }, q.path),
          /* @__PURE__ */ r("div", { class: "td-generated-meta", title: q.path, children: q.path })
        ] }),
        /* @__PURE__ */ r("div", { class: "td-result-list", children: J.map((h, v) => {
          const R = ne(h.path, "output");
          return /* @__PURE__ */ r("button", { class: `td-result-item ${h.path === q.path ? "selected" : ""}`, onClick: () => _(h.path), children: [
            R ? /* @__PURE__ */ r(Ue, { src: R, alt: `${e === "zh" ? "合并结果" : "Merged result"} ${J.length - v}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
            /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
              /* @__PURE__ */ r("strong", { children: [
                e === "zh" ? `合并结果 ${J.length - v}` : `Merged result ${J.length - v}`,
                v === 0 && /* @__PURE__ */ r("em", { children: e === "zh" ? "最新" : "Latest" })
              ] }),
              /* @__PURE__ */ r("span", { children: se(h.path) }),
              /* @__PURE__ */ r("small", { children: h.bytes ? `${(h.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
            ] })
          ] }, h.path);
        }) })
      ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: e === "zh" ? "还没有合并结果" : "No merged result yet" })
    ] }),
    p && ne(p.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => s(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (h) => h.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: p.title }),
        /* @__PURE__ */ r("button", { "aria-label": e === "zh" ? "关闭预览" : "Close preview", onClick: () => s(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: ne(p.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { title: p.path, children: se(p.path) })
    ] }) })
  ] });
}
function ar(t) {
  const e = t.reduce((n, i) => {
    const d = /^shot_(\d+)$/i.exec(i.id.trim());
    return d ? Math.max(n, Number(d[1])) : n;
  }, 0);
  return Math.max(e, t.length) + 1;
}
function sr(t, e = 5) {
  return {
    id: `shot_${String(t).padStart(3, "0")}`,
    title: `Shot ${t}`,
    prompt: "",
    negativePrompt: "",
    durationSeconds: e,
    enabled: !0,
    latentRelay: !0,
    secondSampling: !0,
    seed: null,
    disabledAssetIds: []
  };
}
function st(t, e, n) {
  const i = ar(t), d = Array.from({ length: e }, (a, c) => sr(i + c, n));
  return [...t, ...d];
}
const Nt = (t) => `${t}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, ve = (t) => JSON.parse(JSON.stringify(t)), lr = { image: "图片", video: "视频", audio: "音频" };
function lt(t) {
  var n;
  const e = ve(t);
  return e.schemaVersion = 4, (n = e.project.id) != null && n.trim() || (e.project.id = Nt("project")), e.shots = e.shots.map((i) => ({
    ...i,
    latentRelay: i.latentRelay ?? !0,
    secondSampling: i.secondSampling ?? !0
  })), e;
}
function cr(t) {
  return t.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function pr(t) {
  const e = Nt(t);
  return { id: e, alias: e, kind: t, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: t === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function hr(t, e, n) {
  const i = new FormData();
  i.append("projectName", t), i.append("kind", e), i.append("file", n);
  const d = await fetch("/theodore-director/v1/assets", { method: "POST", body: i }), a = await d.json();
  if (!d.ok || !a.path) throw new Error(a.error || `HTTP ${d.status}`);
  return a.path;
}
async function ur(t, e, n) {
  const i = new URLSearchParams({
    projectName: t.project.name,
    runId: t.project.runId,
    shotId: e.id,
    activeIndex: String(n)
  }), d = await fetch(`/theodore-director/v1/generated-video?${i.toString()}`), a = await d.json();
  if (!d.ok) throw new Error(a.error || `HTTP ${d.status}`);
  return a;
}
async function mr(t) {
  var i;
  if ((i = navigator.clipboard) != null && i.writeText)
    try {
      await navigator.clipboard.writeText(t);
      return;
    } catch {
    }
  const e = document.createElement("textarea");
  e.value = t, e.style.position = "fixed", e.style.opacity = "0", document.body.append(e), e.select();
  const n = document.execCommand("copy");
  if (e.remove(), !n) throw new Error("浏览器拒绝写入剪贴板");
}
function fr({ initial: t, onSave: e, onClose: n, supportsSecondSampling: i }) {
  const [d, a] = T(() => lt(t)), [c, u] = T("shots"), [g, p] = T(0), [s, y] = T(() => navigator.language.startsWith("zh") ? "zh" : "en"), [l, b] = T({}), [$, M] = T(!1), [A, C] = T(!0), [S, F] = T(0), [_, k] = T({ found: !1, results: [] }), [O, K] = T(""), [Z, Q] = T(!1), [H, B] = T(""), [ue, G] = T(!1), [L, Y] = T([]), [le, J] = T("5"), [q, Ie] = T("1"), [me, je] = T("5"), j = d.shots[Math.min(g, d.shots.length - 1)], h = he(() => j ? It(d, j) : null, [d, j]), v = j != null && j.enabled ? d.shots.slice(0, g).filter((o) => o.enabled).length : -1, R = d.shots.length > 0 && d.shots.every((o) => o.secondSampling), E = L.length > 0 && L.every((o) => o.enabled), z = he(() => ae(_), [_]), N = z.find((o) => o.path === O) ?? z[0], W = N != null && N.path ? ne(N.path, "output") : null, w = (o) => a((m) => {
    const f = ve(m);
    return o(f), f;
  }), te = (o, m) => w((f) => {
    const x = o + m;
    x < 0 || x >= f.shots.length || ([f.shots[o], f.shots[x]] = [f.shots[x], f.shots[o]], p(x));
  }), Ne = (o) => w((m) => {
    m.shots.length <= 1 || (m.shots.splice(o, 1), p((f) => f > o ? f - 1 : f === o ? Math.min(o, m.shots.length - 1) : f));
  }), Pt = () => {
    Y(ve(d.shots)), G(!0);
  }, At = () => {
    const o = Number(le);
    if (!Number.isFinite(o) || o <= 0) {
      window.alert(s === "zh" ? "统一时长必须大于 0 秒" : "The shared duration must be greater than 0 seconds.");
      return;
    }
    Y((m) => m.map((f) => ({ ...f, durationSeconds: o })));
  }, Et = () => {
    const o = Number(q), m = Number(me);
    if (!Number.isInteger(o) || o < 1 || o > 100) {
      window.alert(s === "zh" ? "新增镜头数量必须是 1–100 的整数" : "The shot count must be an integer from 1 to 100.");
      return;
    }
    if (!Number.isFinite(m) || m <= 0) {
      window.alert(s === "zh" ? "新增镜头时长必须大于 0 秒" : "The new-shot duration must be greater than 0 seconds.");
      return;
    }
    Y((f) => st(f, o, m));
  }, Rt = () => {
    const o = !E;
    Y((m) => m.map((f) => ({ ...f, enabled: o })));
  }, Dt = () => {
    if (L.some((o) => !Number.isFinite(o.durationSeconds) || o.durationSeconds <= 0)) {
      window.alert(s === "zh" ? "每个镜头的时长都必须大于 0 秒" : "Every shot duration must be greater than 0 seconds.");
      return;
    }
    w((o) => {
      o.shots = ve(L);
    }), p((o) => Math.min(o, L.length - 1)), G(!1);
  }, Mt = () => {
    const o = URL.createObjectURL(new Blob([JSON.stringify(d, null, 2)], { type: "application/json" })), m = document.createElement("a");
    m.href = o, m.download = `${cr(d.project.name)}.director.json`, m.click(), URL.revokeObjectURL(o);
  }, Ut = () => {
    const o = Yt(d);
    if (o.length) {
      window.alert(`计划未通过校验：

${o.join(`
`)}`);
      return;
    }
    e(d);
  };
  return ze(() => {
    let o = !1;
    return j ? (Q(!0), ur(d, j, v).then((m) => {
      if (o) return;
      const f = ae(m);
      k(m), K((x) => {
        var I;
        return f.some((V) => V.path === x) ? x : ((I = f[0]) == null ? void 0 : I.path) ?? "";
      });
    }).catch((m) => {
      o || (k({ found: !1, results: [], error: String(m) }), K(""));
    }).finally(() => {
      o || Q(!1);
    }), () => {
      o = !0;
    }) : (k({ found: !1, results: [] }), K(""), Q(!1), () => {
      o = !0;
    });
  }, [d.project.name, d.project.runId, j == null ? void 0 : j.id, j == null ? void 0 : j.enabled, v, S]), /* @__PURE__ */ r("div", { class: "td-shell", children: [
    /* @__PURE__ */ r("header", { children: [
      /* @__PURE__ */ r("h1", { children: oe(s, "title") }),
      /* @__PURE__ */ r("div", { class: "td-actions", children: [
        /* @__PURE__ */ r("button", { onClick: Mt, children: "导出 / Export" }),
        /* @__PURE__ */ r("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ r("input", { type: "file", accept: "application/json,.json", onChange: async (o) => {
            var f;
            const m = (f = o.currentTarget.files) == null ? void 0 : f[0];
            if (m)
              try {
                const x = JSON.parse(await m.text());
                if (!x.project || !Array.isArray(x.shots) || !Array.isArray(x.assets)) throw new Error("不是有效的 Theodore Director Plan");
                a(lt(x)), p(0);
              } catch (x) {
                window.alert(String(x));
              }
          } })
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => y(s === "zh" ? "en" : "zh"), children: s === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: Ut, children: oe(s, "save") }),
        /* @__PURE__ */ r("button", { onClick: n, children: oe(s, "close") })
      ] })
    ] }),
    /* @__PURE__ */ r("nav", { children: ["shots", "assets", "settings", "postprocess"].map((o) => /* @__PURE__ */ r("button", { class: c === o ? "active" : "", onClick: () => u(o), children: oe(s, o) })) }),
    /* @__PURE__ */ r("main", { children: [
      c === "shots" && /* @__PURE__ */ r("div", { class: "td-shots", children: [
        /* @__PURE__ */ r("aside", { class: "td-shot-sidebar", children: [
          i && /* @__PURE__ */ r("button", { class: `wide td-bulk-toggle ${R ? "active" : ""}`, onClick: () => w((o) => {
            const m = !o.shots.every((f) => f.secondSampling);
            o.shots.forEach((f) => {
              f.secondSampling = m;
            });
          }), children: s === "zh" ? `全部二次采样：${R ? "开" : "关"}` : `Second sampling for all: ${R ? "ON" : "OFF"}` }),
          /* @__PURE__ */ r("div", { class: "td-shot-list", children: d.shots.map((o, m) => /* @__PURE__ */ r("div", { class: `td-shot-card ${m === g ? "selected" : ""}`, onClick: () => p(m), children: [
            /* @__PURE__ */ r("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ r("button", { class: "td-shot-delete", disabled: d.shots.length <= 1, title: s === "zh" ? d.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : d.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": s === "zh" ? "删除镜头" : "Delete shot", onClick: (f) => {
              f.stopPropagation(), Ne(m);
            }, children: "×" }) }),
            /* @__PURE__ */ r("strong", { children: [
              m + 1,
              ". ",
              o.title
            ] }),
            /* @__PURE__ */ r("span", { children: [
              o.durationSeconds,
              "s · ",
              o.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-move-actions", children: [
              /* @__PURE__ */ r("button", { title: s === "zh" ? "上移镜头" : "Move shot up", onClick: (f) => {
                f.stopPropagation(), te(m, -1);
              }, children: "↑" }),
              /* @__PURE__ */ r("button", { title: s === "zh" ? "下移镜头" : "Move shot down", onClick: (f) => {
                f.stopPropagation(), te(m, 1);
              }, children: "↓" })
            ] })
          ] }, o.id)) }),
          /* @__PURE__ */ r("button", { class: "wide", onClick: () => w((o) => {
            const m = o.shots.length;
            o.shots = st(o.shots, 1, 5), p(m);
          }), children: [
            "＋ ",
            oe(s, "addShot")
          ] }),
          /* @__PURE__ */ r("div", { class: "td-shot-batch-entry", children: /* @__PURE__ */ r("button", { class: "wide", onClick: Pt, children: s === "zh" ? "批量处理镜头" : "Batch edit shots" }) })
        ] }),
        j && /* @__PURE__ */ r("section", { class: "td-form", children: [
          /* @__PURE__ */ r("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ r("label", { children: [
              "ID",
              /* @__PURE__ */ r("input", { value: j.id, onInput: (o) => w((m) => {
                m.shots[g].id = o.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ r("input", { value: j.title, onInput: (o) => w((m) => {
                m.shots[g].title = o.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: j.durationSeconds, onInput: (o) => w((m) => {
                m.shots[g].durationSeconds = Number(o.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: j.enabled, onChange: (o) => w((m) => {
                  m.shots[g].enabled = o.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: v === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: j.latentRelay, onChange: (o) => w((m) => {
                  m.shots[g].latentRelay = o.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: [
                  "latent接力 / Relay",
                  v === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              i && /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: "开启时执行 RTX 超分和第二次 H3 采样，关闭时直接使用第一采画面", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: j.secondSampling, onChange: (o) => w((m) => {
                  m.shots[g].secondSampling = o.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: "二次采样 / 2nd pass" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { class: "td-field-label", children: [
              "提示词（使用 ",
              /* @__PURE__ */ r("code", { children: "{{ref:别名}}" }),
              "）"
            ] }),
            /* @__PURE__ */ r(Ee, { rows: 10, value: j.prompt, isReferenceValid: (o) => Tt(d, j, o), onInput: (o) => w((m) => {
              m.shots[g].prompt = o.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ r("textarea", { rows: 3, value: j.negativePrompt, onInput: (o) => w((m) => {
              m.shots[g].negativePrompt = o.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ r("legend", { children: "本镜头素材 / Shot media" }),
            d.assets.map((o) => {
              const m = !j.disabledAssetIds.includes(o.id), f = se(o.path) || o.alias, x = `{{ref:${o.alias}}}`;
              return /* @__PURE__ */ r("div", { class: `td-shot-media-card ${m ? "" : "disabled"}`, children: [
                /* @__PURE__ */ r("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ r(dt, { asset: o, compact: !0 }),
                  /* @__PURE__ */ r("span", { class: "td-shot-media-kind", children: s === "zh" ? lr[o.kind] : o.kind }),
                  /* @__PURE__ */ r("label", { class: "td-shot-media-toggle", title: m ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ r("input", { type: "checkbox", checked: m, onChange: (I) => w((V) => {
                    const X = V.shots[g].disabledAssetIds;
                    V.shots[g].disabledAssetIds = I.currentTarget.checked ? X.filter((de) => de !== o.id) : [.../* @__PURE__ */ new Set([...X, o.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ r("button", { class: `td-shot-media-name ${H === o.id ? "copied" : ""}`, title: `${f}
${s === "zh" ? "点击复制" : "Click to copy"} ${x}`, onClick: async () => {
                  try {
                    await mr(x), B(o.id), window.setTimeout(() => B((I) => I === o.id ? "" : I), 1400);
                  } catch (I) {
                    window.alert(`${s === "zh" ? "复制失败" : "Copy failed"}: ${String(I)}`);
                  }
                }, children: [
                  /* @__PURE__ */ r("span", { children: f }),
                  H === o.id && /* @__PURE__ */ r("em", { children: s === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, o.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ r("aside", { class: "td-preview", children: [
          /* @__PURE__ */ r("details", { open: $, onToggle: (o) => M(o.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: oe(s, "preview") }),
              /* @__PURE__ */ r("span", { class: "td-summary-counts", children: [
                "Picture ",
                (h == null ? void 0 : h.slots.filter((o) => o.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (h == null ? void 0 : h.slots.filter((o) => o.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (h == null ? void 0 : h.audioCount) ?? 0,
                "/3 · Files ",
                (h == null ? void 0 : h.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body", children: [
              h != null && h.errors.length ? /* @__PURE__ */ r("ul", { class: "errors", children: h.errors.map((o) => /* @__PURE__ */ r("li", { children: o })) }) : /* @__PURE__ */ r("p", { class: "ok", children: oe(s, "noErrors") }),
              /* @__PURE__ */ r("ol", { children: h == null ? void 0 : h.slots.map((o) => /* @__PURE__ */ r("li", { children: [
                /* @__PURE__ */ r("code", { children: o.label }),
                " ← ",
                o.alias
              ] })) }),
              /* @__PURE__ */ r("pre", { children: h == null ? void 0 : h.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ r("details", { open: A, onToggle: (o) => C(o.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: s === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ r("span", { class: `td-result-state ${z.length ? "found" : ""}`, children: Z ? s === "zh" ? "查询中" : "Checking" : z.length ? s === "zh" ? `${z.length} 个结果` : `${z.length} results` : s === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ r("div", { class: "td-result-actions", children: /* @__PURE__ */ r("button", { onClick: () => F((o) => o + 1), children: [
                "↻ ",
                s === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              Z ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: s === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : _.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: s === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again." }) : N && W ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
                /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
                  /* @__PURE__ */ r("video", { src: W, controls: !0, preload: "metadata", playsInline: !0 }, N.path),
                  /* @__PURE__ */ r("div", { class: "td-generated-meta", title: N.path, children: [
                    N.path,
                    N.bytes ? ` · ${(N.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                  ] })
                ] }),
                /* @__PURE__ */ r("div", { class: "td-result-list", "aria-label": s === "zh" ? "全部生成结果" : "All generated results", children: z.map((o, m) => {
                  const f = ne(o.path, "output"), x = jt(o.path, z.length - m), I = o.modifiedAt ? new Date(o.modifiedAt * 1e3).toLocaleString(s === "zh" ? "zh-CN" : "en-US") : "";
                  return /* @__PURE__ */ r("button", { class: `td-result-item ${o.path === N.path ? "selected" : ""}`, onClick: () => K(o.path), children: [
                    f ? /* @__PURE__ */ r(Ue, { src: f, alt: `${s === "zh" ? "结果" : "Result"} ${x}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: /* @__PURE__ */ r("span", { children: "×" }) }),
                    /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
                      /* @__PURE__ */ r("strong", { children: [
                        s === "zh" ? `结果 ${x}` : `Result ${x}`,
                        m === 0 && /* @__PURE__ */ r("em", { children: s === "zh" ? "最新" : "Latest" })
                      ] }),
                      /* @__PURE__ */ r("span", { title: o.path, children: se(o.path) }),
                      /* @__PURE__ */ r("small", { children: [o.bytes ? `${(o.bytes / 1024 / 1024).toFixed(1)} MB` : "", I].filter(Boolean).join(" · ") })
                    ] })
                  ] }, o.path);
                }) })
              ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: s === "zh" ? "未在预期路径找到本段视频" : "No video found at the expected path" })
            ] })
          ] })
        ] })
      ] }),
      c === "assets" && /* @__PURE__ */ r("div", { class: "td-assets", children: [
        /* @__PURE__ */ r("div", { class: "td-toolbar", children: ["image", "video", "audio"].map((o) => /* @__PURE__ */ r("button", { onClick: () => w((m) => m.assets.push(pr(o))), children: [
          "＋ ",
          o
        ] })) }),
        d.assets.map((o, m) => /* @__PURE__ */ r("article", { children: /* @__PURE__ */ r("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ r("div", { class: "td-grid", children: [
              /* @__PURE__ */ r("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ r("input", { value: o.alias, onInput: (f) => w((x) => {
                  x.assets[m].alias = f.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ r("select", { value: o.kind, onChange: (f) => w((x) => {
                  x.assets[m].kind = f.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ r("option", { children: "image" }),
                  /* @__PURE__ */ r("option", { children: "video" }),
                  /* @__PURE__ */ r("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ r("input", { value: o.path, onInput: (f) => w((x) => {
                  x.assets[m].path = f.currentTarget.value;
                }) }),
                /* @__PURE__ */ r("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ r("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ r("input", { type: "file", accept: o.kind === "image" ? "image/*" : o.kind === "video" ? "video/*" : "audio/*", onChange: async (f) => {
                      var V;
                      const x = f.currentTarget, I = (V = x.files) == null ? void 0 : V[0];
                      if (I) {
                        b((X) => ({ ...X, [o.id]: I.name }));
                        try {
                          const X = await hr(d.project.name, o.kind, I);
                          w((de) => {
                            const Ve = de.assets.find((Lt) => Lt.id === o.id);
                            Ve && (Ve.path = X);
                          });
                        } catch (X) {
                          window.alert(String(X));
                        } finally {
                          b((X) => {
                            const de = { ...X };
                            return delete de[o.id], de;
                          }), x.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ r("span", { class: "td-file-name", title: l[o.id] || o.path, children: l[o.id] ? `${s === "zh" ? "上传中" : "Uploading"}: ${l[o.id]}` : se(o.path) || (s === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ r("input", { type: "number", min: "0", step: "0.1", value: o.durationSeconds ?? "", onInput: (f) => w((x) => {
                  x.assets[m].durationSeconds = f.currentTarget.value ? Number(f.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ r("input", { type: "number", value: o.fixedOrder, onInput: (f) => w((x) => {
                  x.assets[m].fixedOrder = Number(f.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ r("input", { value: o.shotIds.join(", "), onInput: (f) => w((x) => {
                  x.assets[m].shotIds = f.currentTarget.value.split(",").map((I) => I.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-flags", children: [
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: o.enabled, onChange: (f) => w((x) => {
                  x.assets[m].enabled = f.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: o.fixed, onChange: (f) => w((x) => {
                  x.assets[m].fixed = f.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              o.kind === "video" && /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: o.includeVideoAudio, onChange: (f) => w((x) => {
                  x.assets[m].includeVideoAudio = f.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ r("button", { class: "danger", onClick: () => w((f) => {
                f.assets.splice(m, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ r(dt, { asset: o })
        ] }) }, o.id))
      ] }),
      c === "settings" && /* @__PURE__ */ r("section", { class: "td-form settings", children: [
        /* @__PURE__ */ r("label", { children: [
          "Project name",
          /* @__PURE__ */ r("input", { value: d.project.name, onInput: (o) => w((m) => {
            m.project.name = o.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Run ID",
          /* @__PURE__ */ r("input", { value: d.project.runId, onInput: (o) => w((m) => {
            m.project.runId = o.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "FPS",
          /* @__PURE__ */ r("input", { type: "number", value: d.defaults.fps, onInput: (o) => w((m) => {
            m.defaults.fps = Number(o.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Base seed",
          /* @__PURE__ */ r("input", { type: "number", value: d.defaults.baseSeed, onInput: (o) => w((m) => {
            m.defaults.baseSeed = Number(o.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ r(Ee, { value: d.promptPrefix, isReferenceValid: (o) => it(d, o), onInput: (o) => w((m) => {
            m.promptPrefix = o.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ r(Ee, { value: d.promptSuffix, isReferenceValid: (o) => it(d, o), onInput: (o) => w((m) => {
            m.promptSuffix = o.currentTarget.value;
          }) })
        ] })
      ] }),
      c === "postprocess" && /* @__PURE__ */ r(dr, { plan: d, language: s })
    ] }),
    ue && /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": s === "zh" ? "批量处理镜头" : "Batch edit shots", children: [
      /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("h2", { children: s === "zh" ? "批量处理镜头" : "Batch edit shots" }),
          /* @__PURE__ */ r("p", { children: s === "zh" ? `当前共 ${L.length} 个镜头` : `${L.length} shots` })
        ] }),
        /* @__PURE__ */ r("button", { "aria-label": s === "zh" ? "关闭" : "Close", onClick: () => G(!1), children: "×" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-tools", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            s === "zh" ? "所有镜头时长" : "Duration for all shots",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: le, onInput: (o) => J(o.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: s === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: At, children: s === "zh" ? "一键设置所有时长" : "Set all durations" })
        ] }),
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            s === "zh" ? "新增镜头数量" : "New shot count",
            /* @__PURE__ */ r("input", { type: "number", min: "1", max: "100", step: "1", value: q, onInput: (o) => Ie(o.currentTarget.value) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            s === "zh" ? "每个镜头时长" : "Duration per shot",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: me, onInput: (o) => je(o.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: s === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: Et, children: s === "zh" ? "批量新增镜头" : "Add shots" })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-global-actions", children: [
        /* @__PURE__ */ r("span", { children: s === "zh" ? `已启用 ${L.filter((o) => o.enabled).length}/${L.length} 个镜头` : `${L.filter((o) => o.enabled).length}/${L.length} shots enabled` }),
        /* @__PURE__ */ r("button", { class: E ? "active" : "", onClick: Rt, children: E ? s === "zh" ? "全部禁用" : "Disable all" : s === "zh" ? "全部启用" : "Enable all" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-table", children: [
        /* @__PURE__ */ r("div", { class: "td-batch-row td-batch-table-head", children: [
          /* @__PURE__ */ r("span", { children: "#" }),
          /* @__PURE__ */ r("span", { children: s === "zh" ? "镜头名" : "Shot name" }),
          /* @__PURE__ */ r("span", { children: s === "zh" ? "启用" : "Enabled" }),
          /* @__PURE__ */ r("span", { children: s === "zh" ? "具体时长" : "Duration" }),
          /* @__PURE__ */ r("span", { children: [
            "latent ",
            s === "zh" ? "接力" : "relay"
          ] })
        ] }),
        L.map((o, m) => /* @__PURE__ */ r("div", { class: "td-batch-row", children: [
          /* @__PURE__ */ r("span", { children: m + 1 }),
          /* @__PURE__ */ r("input", { value: o.title, "aria-label": `${s === "zh" ? "镜头名" : "Shot name"} ${m + 1}`, onInput: (f) => Y((x) => x.map((I, V) => V === m ? { ...I, title: f.currentTarget.value } : I)) }),
          /* @__PURE__ */ r("label", { class: "td-batch-enabled", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: o.enabled, onChange: (f) => Y((x) => x.map((I, V) => V === m ? { ...I, enabled: f.currentTarget.checked } : I)) }),
            /* @__PURE__ */ r("span", { children: o.enabled ? s === "zh" ? "开" : "ON" : s === "zh" ? "关" : "OFF" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: o.durationSeconds, onInput: (f) => Y((x) => x.map((I, V) => V === m ? { ...I, durationSeconds: Number(f.currentTarget.value) } : I)) }),
            /* @__PURE__ */ r("span", { children: s === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-relay", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: o.latentRelay, onChange: (f) => Y((x) => x.map((I, V) => V === m ? { ...I, latentRelay: f.currentTarget.checked } : I)) }),
            /* @__PURE__ */ r("span", { children: o.latentRelay ? s === "zh" ? "开" : "ON" : s === "zh" ? "关" : "OFF" })
          ] })
        ] }, o.id))
      ] }),
      /* @__PURE__ */ r("footer", { children: [
        /* @__PURE__ */ r("button", { onClick: () => G(!1), children: s === "zh" ? "取消" : "Cancel" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: Dt, children: s === "zh" ? "应用更改" : "Apply changes" })
      ] })
    ] }) })
  ] });
}
function gr(t, e, n = !1) {
  const i = document.getElementById("theodore-director-modal");
  if (i) {
    i.focus();
    return;
  }
  const d = document.createElement("div");
  d.id = "theodore-director-modal", d.className = "td-modal", d.tabIndex = -1, document.body.append(d);
  const a = (u) => {
    u.key === "Escape" && c();
  }, c = () => {
    document.removeEventListener("keydown", a), Ke(null, d), d.remove();
  };
  document.addEventListener("keydown", a), Ke(/* @__PURE__ */ r(fr, { initial: t, onSave: (u) => {
    e(u), c();
  }, onClose: c, supportsSecondSampling: n }), d), d.focus();
}
const _r = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-highlight-textarea{position:relative;display:block;width:100%;min-width:0}.td-highlight-backdrop,.td-form textarea.td-highlight-input{box-sizing:border-box;width:100%;margin:0;padding:7px 9px;font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,monospace;font-size:inherit;line-height:1.45;letter-spacing:normal;-moz-tab-size:8;tab-size:8;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.td-highlight-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border:1px solid transparent;border-radius:6px;background:#222a35;color:var(--td-text);pointer-events:none}.td-form textarea.td-highlight-input{position:relative;z-index:1;display:block;background:transparent;color:transparent;caret-color:var(--td-text);-webkit-text-fill-color:transparent}.td-highlight-input::selection{background:#5898d46b}.td-highlight-backdrop mark{padding:1px 2px;border-radius:3px;color:inherit}.td-highlight-backdrop mark.valid{background:#1d6b50;color:#bfffe6}.td-highlight-backdrop mark.invalid{background:#7a2931;color:#ffd1d5;text-decoration:underline;text-decoration-color:#ff9aa4;text-underline-offset:2px}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-generated-results{display:flex;flex-direction:column;gap:12px}.td-result-list{display:flex;flex-direction:column;gap:7px;max-height:280px;overflow:auto;padding-right:3px}.td-shell button.td-result-item{display:grid;grid-template-columns:112px minmax(0,1fr);gap:10px;align-items:center;width:100%;padding:6px;text-align:left;background:#151b23}.td-shell button.td-result-item.selected{border-color:var(--td-accent);background:#1c2a2a}.td-result-thumb{width:112px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:5px;background:#090c10;color:var(--td-muted)}.td-result-thumb img,.td-result-thumb video{display:block;width:100%;height:100%;object-fit:contain}.td-result-item-copy{display:flex;min-width:0;flex-direction:column;gap:3px}.td-result-item-copy>strong{display:flex;align-items:center;gap:7px;color:var(--td-text)}.td-result-item-copy>strong em{padding:1px 6px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-result-item-copy>span,.td-result-item-copy>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-result-item-copy>small{font-size:10px}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}.td-shot-sidebar{display:flex;flex-direction:column}.td-shot-list{flex:none}.td-shot-batch-entry{display:flex;align-items:flex-end;flex:1;min-height:90px;padding-top:14px}.td-shot-batch-entry button{border-color:#527061;background:#1b2c28;color:var(--td-accent)}.td-batch-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:28px;background:#05080dbd;box-sizing:border-box}.td-batch-panel{display:flex;flex-direction:column;width:min(1040px,100%);max-height:min(820px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-batch-header h2{font-size:18px;margin:0}.td-batch-header p{margin:3px 0 0;color:var(--td-muted)}.td-batch-header>button{font-size:20px;line-height:1;padding:5px 9px}.td-batch-tools{display:grid;grid-template-columns:1fr 1.4fr;gap:12px;padding:14px 18px;border-bottom:1px solid var(--td-line);background:#151b23}.td-batch-tools>div{display:flex;align-items:end;gap:8px;padding:10px;border:1px solid var(--td-line);border-radius:7px}.td-batch-tools label{display:flex;flex:1;flex-direction:column;gap:4px;color:var(--td-muted);white-space:nowrap}.td-batch-tools label>span,.td-batch-duration{display:flex;align-items:center;gap:6px}.td-batch-tools input{width:100%}.td-batch-tools em{color:var(--td-muted);font-style:normal}.td-batch-tools button{white-space:nowrap}.td-batch-global-actions{display:flex;align-items:center;justify-content:flex-end;gap:12px;padding:9px 22px;border-bottom:1px solid var(--td-line);background:#171e27;color:var(--td-muted)}.td-batch-global-actions button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-batch-table{overflow:auto;padding:0 18px}.td-batch-row{display:grid;grid-template-columns:42px minmax(180px,1fr) 100px 150px 120px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-batch-table-head{position:sticky;top:0;z-index:1;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-batch-duration input{min-width:0;width:100%}.td-batch-duration>span{color:var(--td-muted)}.td-batch-enabled,.td-batch-relay{display:flex;align-items:center;gap:7px;justify-content:flex-start;color:var(--td-text)}.td-batch-enabled input,.td-batch-relay input{width:17px;height:17px;margin:0}.td-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-postprocess{display:flex;flex-direction:column;gap:14px;max-width:1500px;margin:0 auto}.td-post-header,.td-post-summary,.td-post-merged{border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px}.td-post-header h2,.td-post-merged h2{margin:0;font-size:17px}.td-post-header p{margin:4px 0 0;color:var(--td-muted)}.td-post-actions{display:flex;gap:8px;flex:none}.td-post-summary{display:flex;align-items:center;gap:18px;padding:10px 14px;color:var(--td-muted)}.td-post-summary>button{margin-left:auto}.td-post-summary button:disabled{opacity:.5;cursor:not-allowed}.td-post-range{display:flex;align-items:center;gap:6px;margin-left:auto}.td-post-range input{width:64px;padding:6px 7px;text-align:center}.td-post-range button{white-space:nowrap}.td-post-summary>.td-post-range+button{margin-left:0}.td-post-error,.td-post-warning{padding:10px 13px;border-radius:7px}.td-post-error{border:1px solid #8b4149;background:#442228;color:#ffd1d5;white-space:pre-wrap}.td-post-warning{border:1px solid #836a32;background:#3a301c;color:#f4d991}.td-post-shot-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(390px,1fr));gap:12px;align-items:start}.td-post-shot{min-width:0;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel);overflow:hidden}.td-post-shot.selected{border-color:#527e6c}.td-post-shot.disabled{opacity:.72}.td-post-shot>header{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid var(--td-line);background:#1d2530}.td-post-shot>header>label{display:flex;align-items:center;gap:9px;min-width:0;cursor:pointer}.td-post-shot>header input{width:18px;height:18px;margin:0;flex:none}.td-post-shot>header label>span{display:flex;min-width:0;gap:8px;align-items:baseline}.td-post-shot>header strong{color:var(--td-text)}.td-post-shot>header em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted);font-style:normal}.td-post-shot>header>span{flex:none;padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted)}.td-post-shot-disabled-note{padding:7px 10px;border-bottom:1px solid var(--td-line);background:#332b1d;color:#e5c77d;font-size:11px}.td-post-shot-empty{min-height:96px;display:flex;align-items:center;justify-content:center;padding:12px;color:var(--td-muted);text-align:center}.td-post-result-list{display:flex;flex-direction:column;gap:7px;max-height:360px;overflow:auto;padding:9px}.td-post-result{display:grid;grid-template-columns:minmax(0,1fr) 35px;gap:6px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:5px}.td-post-result.selected{border-color:var(--td-accent);background:#1c2a2a}.td-shell button.td-post-result-choice{display:grid;grid-template-columns:112px minmax(0,1fr);gap:9px;align-items:center;min-width:0;padding:0;border:0;background:transparent;text-align:left}.td-post-result-choice>span{display:flex;min-width:0;flex-direction:column;gap:3px}.td-post-result-choice>span>strong{display:flex;align-items:center;gap:6px}.td-post-result-choice>span>strong em{padding:1px 5px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-post-result-choice>span>span,.td-post-result-choice>span>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-post-result-choice>span>small{font-size:10px}.td-post-result-play{width:35px;height:35px;padding:0!important}.td-post-result-play:disabled{opacity:.35;cursor:not-allowed}.td-post-merged{padding:12px}.td-post-merged>header>div{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px}.td-post-merged .td-generated-results{display:grid;grid-template-columns:minmax(360px,1.6fr) minmax(300px,1fr);align-items:start}.td-post-merged .td-result-list{max-height:420px}.td-post-preview-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:30;display:flex;align-items:center;justify-content:center;padding:26px;background:#030609d6}.td-post-preview-overlay>section{width:min(980px,100%);max-height:calc(100vh - 52px);overflow:auto;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 80px #000c}.td-post-preview-overlay header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--td-line)}.td-post-preview-overlay header button{font-size:20px;line-height:1;padding:5px 9px}.td-post-preview-overlay video{display:block;width:100%;max-height:calc(100vh - 170px);background:#070a0e}.td-post-preview-overlay p{margin:0;padding:9px 12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}.td-post-summary{flex-wrap:wrap}.td-post-range{margin-left:0}.td-post-summary>button{margin-left:auto}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:900px){.td-post-shot-list,.td-post-merged .td-generated-results{grid-template-columns:1fr}.td-post-header{align-items:flex-start;flex-direction:column}.td-post-actions{width:100%}.td-post-actions button{flex:1}.td-post-summary{align-items:stretch;flex-direction:column;gap:7px}.td-post-range{margin:3px 0;flex-wrap:wrap}.td-post-summary>button{margin:4px 0 0}.td-post-result-list{max-height:none}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}", ct = "theodore-director-styles";
function br() {
  if (document.getElementById(ct)) return;
  const t = document.createElement("style");
  t.id = ct, t.textContent = _r, document.head.append(t);
}
br();
const xr = "/scripts/app.js";
import(
  /* @vite-ignore */
  xr
).then(({ app: t }) => {
  t.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(e, n) {
      if (n.name !== "TheodoreDirector_Project") return;
      const i = e.prototype.onNodeCreated;
      e.prototype.onNodeCreated = function() {
        var a, c;
        i == null || i.apply(this);
        const d = (a = this.widgets) == null ? void 0 : a.find((u) => u.name === "plan_json");
        d && (d.type = "hidden", d.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          try {
            const u = JSON.parse(String(d.value));
            gr(u, (g) => {
              var p, s;
              d.value = JSON.stringify(g, null, 2), this.setDirtyCanvas(!0, !0), (s = (p = t.graph) == null ? void 0 : p.setDirtyCanvas) == null || s.call(p, !0, !0);
            }, !0);
          } catch (u) {
            window.alert(`Theodore Director: ${u instanceof Error ? u.message : String(u)}`);
          }
        }), this.size = [Math.max(((c = this.size) == null ? void 0 : c[0]) ?? 300, 360), 110]);
      };
    }
  });
});
