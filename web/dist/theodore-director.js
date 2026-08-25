var $e, N, pt, te, We, ht, ut, Pe, ge, ce, mt, Le, Ee, De, ye = {}, we = [], Ut = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ce = Array.isArray;
function X(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function Fe(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Lt(t, e, n) {
  var o, i, a, c = {};
  for (a in e) a == "key" ? o = e[a] : a == "ref" ? i = e[a] : c[a] = e[a];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? $e.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (a in t.defaultProps) c[a] === void 0 && (c[a] = t.defaultProps[a]);
  return _e(t, c, o, i, null);
}
function _e(t, e, n, o, i) {
  var a = { type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++pt, __i: -1, __u: 0 };
  return i == null && N.vnode != null && N.vnode(a), a;
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
function Ft(t) {
  if (t.__P && t.__d) {
    var e = t.__v, n = e.__e, o = [], i = [], a = X({}, e);
    a.__v = e.__v + 1, N.vnode && N.vnode(a), Oe(t.__P, a, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, o, n ?? ie(e), !!(32 & e.__u), i), a.__v = e.__v, a.__.__k[a.__i] = a, xt(o, a, i), e.__e = e.__ = null, a.__e != n && ft(a);
  }
}
function ft(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), ft(t);
}
function qe(t) {
  (!t.__d && (t.__d = !0) && te.push(t) && !ke.__r++ || We != N.debounceRendering) && ((We = N.debounceRendering) || ht)(ke);
}
function ke() {
  try {
    for (var t, e = 1; te.length; ) te.length > e && te.sort(ut), t = te.shift(), e = te.length, Ft(t);
  } finally {
    te.length = ke.__r = 0;
  }
}
function gt(t, e, n, o, i, a, c, u, f, p, s) {
  var w, l, b, C, D, A, T = o && o.__k || we, S = e.length;
  for (f = Ot(n, e, T, f, S), w = 0; w < S; w++) (b = n.__k[w]) != null && (l = b.__i != -1 && T[b.__i] || ye, b.__i = w, A = Oe(t, b, l, i, a, c, u, f, p, s), C = b.__e, b.ref && l.ref != b.ref && (l.ref && He(l.ref, null, b), s.push(b.ref, b.__c || C, b)), D == null && C != null && (D = C), 4 & b.__u ? (f = _t(b, f, t), l.__e && (l.__e = null)) : typeof b.type == "function" && A !== void 0 ? f = A : C && (f = C.nextSibling), b.__u &= -7);
  return n.__e = D, f;
}
function Ot(t, e, n, o, i) {
  var a, c, u, f, p, s = n.length, w = s, l = 0;
  for (t.__k = new Array(i), a = 0; a < i; a++) (c = e[a]) != null && typeof c != "boolean" && typeof c != "function" ? (typeof c == "string" || typeof c == "number" || typeof c == "bigint" || c.constructor == String ? c = t.__k[a] = _e(null, c, null, null, null) : Ce(c) ? c = t.__k[a] = _e(Te, { children: c }, null, null, null) : c.constructor === void 0 && c.__b > 0 ? c = t.__k[a] = _e(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : t.__k[a] = c, f = a + l, c.__ = t, c.__b = t.__b + 1, u = null, (p = c.__i = Ht(c, n, f, w)) != -1 && (w--, (u = n[p]) && (u.__u |= 2)), u == null || u.__v == null ? (p == -1 && (i > s ? l-- : i < s && l++), typeof c.type != "function" && (c.__u |= 4)) : p != f && (p == f - 1 ? l-- : p == f + 1 ? l++ : (p > f ? l-- : l++, c.__u |= 4))) : t.__k[a] = null;
  if (w) for (a = 0; a < s; a++) (u = n[a]) != null && (2 & u.__u) == 0 && (u.__e == o && (o = ie(u)), yt(u, u));
  return o;
}
function _t(t, e, n) {
  var o, i;
  if (typeof t.type == "function") {
    for (o = t.__k, i = 0; o && i < o.length; i++) o[i] && (o[i].__ = t, e = _t(o[i], e, n));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = ie(t)), e = n.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Ht(t, e, n, o) {
  var i, a, c, u = t.key, f = t.type, p = e[n], s = p != null && (2 & p.__u) == 0;
  if (p === null && u == null || s && u == p.key && f == p.type) return n;
  if (o > (s ? 1 : 0)) {
    for (i = n - 1, a = n + 1; i >= 0 || a < e.length; ) if ((p = e[c = i >= 0 ? i-- : a++]) != null && (2 & p.__u) == 0 && u == p.key && f == p.type) return c;
  }
  return -1;
}
function Ge(t, e, n) {
  e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || Ut.test(e) ? n : n + "px";
}
function fe(t, e, n, o, i) {
  var a, c;
  e: if (e == "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof o == "string" && (t.style.cssText = o = ""), o) for (e in o) n && e in n || Ge(t.style, e, "");
    if (n) for (e in n) o && n[e] == o[e] || Ge(t.style, e, n[e]);
  }
  else if (e[0] == "o" && e[1] == "n") a = e != (e = e.replace(mt, "$1")), c = e.toLowerCase(), e = c in t || e == "onFocusOut" || e == "onFocusIn" ? c.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + a] = n, n ? o ? n[ce] = o[ce] : (n[ce] = Le, t.addEventListener(e, a ? De : Ee, a)) : t.removeEventListener(e, a ? De : Ee, a);
  else {
    if (i == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
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
      return n(N.event ? N.event(e) : e);
    }
  };
}
function Oe(t, e, n, o, i, a, c, u, f, p) {
  var s, w, l, b, C, D, A, T, S, L, g, k, F, J, Y, K, O = e.type;
  if (e.constructor !== void 0) return null;
  128 & n.__u && (f = !!(32 & n.__u), a = [u = e.__e = n.__e]), (s = N.__b) && s(e);
  e: if (typeof O == "function") {
    w = c.length;
    try {
      if (S = e.props, L = O.prototype && O.prototype.render, g = (s = O.contextType) && o[s.__c], k = s ? g ? g.props.value : s.__ : o, n.__c ? T = (l = e.__c = n.__c).__ = l.__E : (L ? e.__c = l = new O(S, k) : (e.__c = l = new be(S, k), l.constructor = O, l.render = Vt), g && g.sub(l), l.state || (l.state = {}), l.__n = o, b = l.__d = !0, l.__h = [], l._sb = []), L && l.__s == null && (l.__s = l.state), L && O.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = X({}, l.__s)), X(l.__s, O.getDerivedStateFromProps(S, l.__s))), C = l.props, D = l.state, l.__v = e, b) L && O.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), L && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (L && O.getDerivedStateFromProps == null && S !== C && l.componentWillReceiveProps != null && l.componentWillReceiveProps(S, k), e.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(S, l.__s, k) === !1) {
          e.__v != n.__v && (l.props = S, l.state = l.__s, l.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(H) {
            H && (H.__ = e);
          }), we.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && c.push(l), u = ie(n);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(S, l.__s, k), L && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(C, D, A);
        });
      }
      if (l.context = k, l.props = S, l.__P = t, l.__e = !1, F = N.__r, J = 0, L) l.state = l.__s, l.__d = !1, F && F(e), s = l.render(l.props, l.state, l.context), we.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, F && F(e), s = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++J < 25);
      l.state = l.__s, l.getChildContext != null && (o = X(X({}, o), l.getChildContext())), L && !b && l.getSnapshotBeforeUpdate != null && (A = l.getSnapshotBeforeUpdate(C, D)), Y = s != null && s.type === Te && s.key == null ? vt(s.props.children) : s, u = gt(t, Ce(Y) ? Y : [Y], e, n, o, i, a, c, u, f, p), l.base = e.__e, e.__u &= -161, l.__h.length && c.push(l), T && (l.__E = l.__ = null);
    } catch (H) {
      if (c.length = w, e.__v = null, f || a != null) {
        if (H.then) {
          for (e.__u |= f ? 160 : 128; u && u.nodeType == 8 && u.nextSibling; ) u = u.nextSibling;
          a != null && (a[a.indexOf(u)] = null), e.__e = u;
        } else if (a != null) for (K = a.length; K--; ) Fe(a[K]);
      } else e.__e = n.__e;
      e.__k == null && (e.__k = n.__k || []), H.then || bt(e), N.__e(H, e, n);
    }
  } else a == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : u = e.__e = Bt(n.__e, e, n, o, i, a, c, f, p);
  return (s = N.diffed) && s(e), 128 & e.__u ? void 0 : u;
}
function bt(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(bt));
}
function xt(t, e, n) {
  for (var o = 0; o < n.length; o++) He(n[o], n[++o], n[++o]);
  N.__c && N.__c(e, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(a) {
        a.call(i);
      });
    } catch (a) {
      N.__e(a, i.__v);
    }
  });
}
function vt(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : Ce(t) ? t.map(vt) : t.constructor !== void 0 ? null : X({}, t);
}
function Bt(t, e, n, o, i, a, c, u, f) {
  var p, s, w, l, b, C, D, A = n.props || ye, T = e.props, S = e.type;
  if (S == "svg" ? i = "http://www.w3.org/2000/svg" : S == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), a != null) {
    for (p = 0; p < a.length; p++) if ((b = a[p]) && "setAttribute" in b == !!S && (S ? b.localName == S : b.nodeType == 3)) {
      t = b, a[p] = null;
      break;
    }
  }
  if (t == null) {
    if (S == null) return document.createTextNode(T);
    t = document.createElementNS(i, S, T.is && T), u && (N.__m && N.__m(e, a), u = !1), a = null;
  }
  if (S == null) A === T || u && t.data == T || (t.data = T);
  else {
    if (a = S == "textarea" && T.defaultValue != null ? null : a && $e.call(t.childNodes), !u && a != null) for (A = {}, p = 0; p < t.attributes.length; p++) A[(b = t.attributes[p]).name] = b.value;
    for (p in A) b = A[p], p == "dangerouslySetInnerHTML" ? w = b : p == "children" || p in T || p == "value" && "defaultValue" in T || p == "checked" && "defaultChecked" in T || fe(t, p, null, b, i);
    for (p in T) b = T[p], p == "children" ? l = b : p == "dangerouslySetInnerHTML" ? s = b : p == "value" ? C = b : p == "checked" ? D = b : u && typeof b != "function" || A[p] === b || fe(t, p, b, A[p], i);
    if (s) u || w && (s.__html == w.__html || s.__html == t.innerHTML) || (t.innerHTML = s.__html), e.__k = [];
    else if (w && (t.innerHTML = ""), gt(e.type == "template" ? t.content : t, Ce(l) ? l : [l], e, n, o, S == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, a, c, a ? a[0] : n.__k && ie(n, 0), u, f), a != null) for (p = a.length; p--; ) Fe(a[p]);
    u && S != "textarea" || (p = "value", S == "progress" && C == null ? t.removeAttribute("value") : C != null && (C !== t[p] || S == "progress" && !C || S == "option" && C != A[p]) && fe(t, p, C, A[p], i), p = "checked", D != null && D != t[p] && fe(t, p, D, A[p], i));
  }
  return t;
}
function He(t, e, n) {
  try {
    if (typeof t == "function") {
      var o = typeof t.__u == "function";
      o && t.__u(), o && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (i) {
    N.__e(i, n);
  }
}
function yt(t, e, n) {
  var o, i;
  if (N.unmount && N.unmount(t), (o = t.ref) && (o.current && o.current != t.__e || He(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (a) {
      N.__e(a, e);
    }
    o.base = o.__P = o.__n = null;
  }
  if (o = t.__k) for (i = 0; i < o.length; i++) o[i] && yt(o[i], e, n || typeof t.type != "function");
  n || Fe(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Vt(t, e, n) {
  return this.constructor(t, n);
}
function Ke(t, e, n) {
  var o, i, a, c;
  e == document && (e = document.documentElement), N.__ && N.__(t, e), i = (o = !1) ? null : e.__k, a = [], c = [], Oe(e, t = e.__k = Lt(Te, null, [t]), i || ye, ye, e.namespaceURI, i ? null : e.firstChild ? $e.call(e.childNodes) : null, a, i ? i.__e : e.firstChild, o, c), xt(a, t, c), t.props.children = null;
}
$e = we.slice, N = { __e: function(t, e, n, o) {
  for (var i, a, c; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(t)), c = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), c = i.__d), c) return i.__E = i;
  } catch (u) {
    t = u;
  }
  throw t;
} }, pt = 0, be.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = X({}, this.state), typeof t == "function" && (t = t(X({}, n), this.props)), t && X(n, t), t != null && this.__v && (e && this._sb.push(e), qe(this));
}, be.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), qe(this));
}, be.prototype.render = Te, te = [], ht = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ut = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, ke.__r = 0, Pe = Math.random().toString(8), ge = "__d" + Pe, ce = "__a" + Pe, mt = /(PointerCapture)$|Capture$/i, Le = 0, Ee = Je(!1), De = Je(!0);
var Wt = 0;
function r(t, e, n, o, i, a) {
  e || (e = {});
  var c, u, f = e;
  if ("ref" in f) for (u in f = {}, e) u == "ref" ? c = e[u] : f[u] = e[u];
  var p = { type: t, props: f, key: n, ref: c, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Wt, __i: -1, __u: 0, __source: i, __self: a };
  if (typeof t == "function" && (c = t.defaultProps)) for (u in c) f[u] === void 0 && (f[u] = c[u]);
  return N.vnode && N.vnode(p), p;
}
var pe, E, Ae, Qe, Se = 0, wt = [], M = N, Ye = M.__b, Xe = M.__r, Ze = M.diffed, et = M.__c, tt = M.unmount, rt = M.__;
function Be(t, e) {
  M.__h && M.__h(E, t, Se || e), Se = 0;
  var n = E.__H || (E.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function j(t) {
  return Se = 1, qt(zt, t);
}
function qt(t, e, n) {
  var o = Be(pe++, 2);
  if (o.t = t, !o.__c && (o.__ = [zt(void 0, e), function(u) {
    var f = o.__N ? o.__N[0] : o.__[0], p = o.t(f, u);
    f !== p && (o.__N = [p, o.__[1]], o.__c.setState({}));
  }], o.__c = E, !E.__f)) {
    var i = function(u, f, p) {
      if (!o.__c.__H) return !0;
      var s = !1, w = o.__c.props !== u;
      if (o.__c.__H.__.some(function(b) {
        if (b.__N) {
          s = !0;
          var C = b.__[0];
          b.__ = b.__N, b.__N = void 0, C !== b.__[0] && (w = !0);
        }
      }), a) {
        var l = a.call(this, u, f, p);
        return s ? l || w : l;
      }
      return !s || w;
    };
    E.__f = !0;
    var a = E.shouldComponentUpdate, c = E.componentWillUpdate;
    E.componentWillUpdate = function(u, f, p) {
      if (this.__e) {
        var s = a;
        a = void 0, i(u, f, p), a = s;
      }
      c && c.call(this, u, f, p);
    }, E.shouldComponentUpdate = i;
  }
  return o.__N || o.__;
}
function ze(t, e) {
  var n = Be(pe++, 3);
  !M.__s && St(n.__H, e) && (n.__ = t, n.u = e, E.__H.__h.push(n));
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
function Gt() {
  for (var t; t = wt.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(xe), e.__h.some(Me), e.__h = [];
    } catch (n) {
      e.__h = [], M.__e(n, t.__v);
    }
  }
}
M.__b = function(t) {
  E = null, Ye && Ye(t);
}, M.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), rt && rt(t, e);
}, M.__r = function(t) {
  Xe && Xe(t), pe = 0;
  var e = (E = t.__c).__H;
  e && (Ae === E ? (e.__h = [], E.__h = [], e.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (e.__h.some(xe), e.__h.some(Me), e.__h = [], pe = 0)), Ae = E;
}, M.diffed = function(t) {
  Ze && Ze(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (wt.push(e) !== 1 && Qe === M.requestAnimationFrame || ((Qe = M.requestAnimationFrame) || Jt)(Gt)), e.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), Ae = E = null;
}, M.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.some(xe), n.__h = n.__h.filter(function(o) {
        return !o.__ || Me(o);
      });
    } catch (o) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], M.__e(o, n.__v);
    }
  }), et && et(t, e);
}, M.unmount = function(t) {
  tt && tt(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.some(function(o) {
    try {
      xe(o);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && M.__e(e, n.__v));
};
var nt = typeof requestAnimationFrame == "function";
function Jt(t) {
  var e, n = function() {
    clearTimeout(o), nt && cancelAnimationFrame(e), setTimeout(t);
  }, o = setTimeout(n, 35);
  nt && (e = requestAnimationFrame(n));
}
function xe(t) {
  var e = E, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), E = e;
}
function Me(t) {
  var e = E;
  t.__c = t.__(), E = e;
}
function St(t, e) {
  return !t || t.length !== e.length || e.some(function(n, o) {
    return n !== t[o];
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
  for (const o of t.assets)
    o.enabled && o.path.trim() && (!o.shotIds.length || o.shotIds.includes(e.id)) && !e.disabledAssetIds.includes(o.id) && n.set(o.alias, o);
  return n;
}
function Tt(t, e, n) {
  const o = n.trim(), i = o.endsWith(".audio"), a = i ? o.slice(0, -6) : o, c = Ct(t, e).get(a);
  return c ? !i || c.kind === "video" && c.includeVideoAudio : !1;
}
function it(t, e) {
  const n = t.shots.filter((o) => o.enabled);
  return n.length > 0 && n.every((o) => Tt(t, o, e));
}
function It(t, e) {
  const n = [], o = Ct(t, e), i = [t.promptPrefix, e.prompt, t.promptSuffix].filter(Boolean).join(`
`), a = [...i.matchAll(ot())].map((g) => g[1].trim()), c = [], u = /* @__PURE__ */ new Set(), f = (g) => {
    u.has(g.id) || (u.add(g.id), c.push(g));
  };
  [...o.values()].filter((g) => g.fixed).sort((g, k) => g.fixedOrder - k.fixedOrder || g.alias.localeCompare(k.alias)).forEach(f);
  for (const g of a) {
    const k = g.endsWith(".audio") ? g.slice(0, -6) : g, F = o.get(k);
    if (!F) {
      n.push(`未找到或已禁用素材：${g}`);
      continue;
    }
    g.endsWith(".audio") && (F.kind !== "video" || !F.includeVideoAudio) && n.push(`视频伴音未启用：${g}`), f(F);
  }
  const p = c.filter((g) => g.kind === "image"), s = c.filter((g) => g.kind === "video"), w = s.filter((g) => g.includeVideoAudio), l = c.filter((g) => g.kind === "audio"), b = w.length + l.length, C = p.length + s.length + l.length;
  p.length > 9 && n.push(`参考图 ${p.length}/9，超出 H3 上限`), s.length > 3 && n.push(`参考视频 ${s.length}/3，超出 H3 上限`), b > 3 && n.push(`有效音频 ${b}/3，超出 H3 总上限`), C > 12 && n.push(`混合文件 ${C}/12，超出 H3 上限`), b && !p.length && !s.length && n.push("音频参考不能单独使用");
  const D = s.filter((g) => typeof g.durationSeconds == "number");
  for (const g of s) (g.durationSeconds == null || g.durationSeconds < 2 || g.durationSeconds > 15) && n.push(`视频 ${g.alias} 的时长必须为 2–15 秒`);
  D.reduce((g, k) => g + (k.durationSeconds ?? 0), 0) > 15 && n.push("参考视频总时长超过 15 秒");
  const A = [...w.map((g) => g.audioDurationSeconds ?? g.durationSeconds), ...l.map((g) => g.durationSeconds)];
  A.some((g) => g == null || g < 2 || g > 15) && n.push("每路有效音频时长必须为 2–15 秒"), A.reduce((g, k) => g + (k ?? 0), 0) > 15 && n.push("有效音频总时长超过 15 秒");
  const T = /* @__PURE__ */ new Map();
  p.forEach((g, k) => T.set(g.alias, `<Picture ${k + 1}>`)), s.forEach((g, k) => T.set(g.alias, `<Video ${k + 1}>`)), w.forEach((g, k) => T.set(`${g.alias}.audio`, `<Audio ${k + 1}>`)), l.forEach((g, k) => T.set(g.alias, `<Audio ${w.length + k + 1}>`));
  const S = i.replace(ot(), (g, k) => T.get(k.trim()) ?? g), L = [...T.entries()].map(([g, k]) => ({ label: k, alias: g, kind: k.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: S, errors: n, slots: L, mixedFiles: C, audioCount: b };
}
function Kt(t) {
  var i, a, c, u, f, p;
  const e = [];
  (a = (i = t.project) == null ? void 0 : i.name) != null && a.trim() || e.push("Project name 不能为空"), (u = (c = t.project) == null ? void 0 : c.runId) != null && u.trim() || e.push("Run ID 不能为空"), (!Array.isArray(t.shots) || !t.shots.some((s) => s.enabled)) && e.push("至少需要一个启用分镜");
  const n = /* @__PURE__ */ new Set();
  for (const s of t.shots ?? [])
    (!((f = s.id) != null && f.trim()) || n.has(s.id)) && e.push(`分镜 ID 为空或重复：${s.id || "(空)"}`), n.add(s.id), s.durationSeconds > 0 || e.push(`分镜 ${s.id} 的时长必须大于 0`);
  const o = /* @__PURE__ */ new Set();
  for (const s of t.assets ?? []) {
    const w = (p = s.alias) == null ? void 0 : p.toLocaleLowerCase();
    (!s.alias || /[\s{}]/.test(s.alias) || s.alias.endsWith(".audio") || o.has(w)) && e.push(`素材别名无效或重复：${s.alias || "(空)"}`), o.add(w), s.enabled && !s.path && e.push(`素材 ${s.alias} 尚未选择文件`);
  }
  for (const s of t.shots.filter((w) => w.enabled)) e.push(...It(t, s).errors.map((w) => `${s.title}: ${w}`));
  return [...new Set(e)];
}
function Qt(t, e) {
  const n = [], o = new RegExp($t, "g");
  let i = 0;
  for (const a of t.matchAll(o)) {
    const c = a.index ?? 0;
    c > i && n.push({ text: t.slice(i, c), reference: !1 }), n.push({ text: a[0], reference: !0, valid: e(a[1]) }), i = c + a[0].length;
  }
  return i < t.length && n.push({ text: t.slice(i), reference: !1 }), n;
}
function Re({ value: t, rows: e, onInput: n, isReferenceValid: o }) {
  const i = kt(null), a = Qt(t, o), c = (u) => {
    i.current && (i.current.scrollTop = u.currentTarget.scrollTop, i.current.scrollLeft = u.currentTarget.scrollLeft);
  };
  return /* @__PURE__ */ r("span", { class: "td-highlight-textarea", children: [
    /* @__PURE__ */ r("pre", { ref: i, class: "td-highlight-backdrop", "aria-hidden": "true", children: [
      a.map((u, f) => u.reference ? /* @__PURE__ */ r("mark", { class: u.valid ? "valid" : "invalid", children: u.text }, f) : u.text),
      t.endsWith(`
`) && " "
    ] }),
    /* @__PURE__ */ r("textarea", { class: "td-highlight-input", rows: e, value: t, onInput: n, onScroll: c })
  ] });
}
const Yt = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", postprocess: "后处理", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", postprocess: "Post-process", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function oe(t, e) {
  return Yt[t][e];
}
function ae(t) {
  return (Array.isArray(t.results) && t.results.length ? t.results : t.path ? [{ path: t.path, bytes: t.bytes, modifiedAt: t.modifiedAt }] : []).filter((n) => typeof n.path == "string" && n.path.trim().length > 0).sort((n, o) => (o.modifiedAt ?? 0) - (n.modifiedAt ?? 0));
}
function jt(t, e) {
  const n = /_video_(\d+)/i.exec(t.replace(/\\/g, "/"));
  return n ? Number(n[1]) : e;
}
function Ue({ src: t, alt: e }) {
  const n = kt(null), [o, i] = j(!1);
  return ze(() => {
    const a = n.current;
    if (!a) return;
    if (!("IntersectionObserver" in window)) {
      i(!0);
      return;
    }
    const c = new IntersectionObserver((u) => {
      i(u.some((f) => f.isIntersecting));
    }, { rootMargin: "160px" });
    return c.observe(a), () => c.disconnect();
  }, []), /* @__PURE__ */ r("div", { class: "td-result-thumb", ref: n, children: o ? /* @__PURE__ */ r("video", { src: t, "aria-label": e, muted: !0, playsInline: !0, preload: "metadata", onLoadedMetadata: (a) => {
    const c = a.currentTarget;
    Number.isFinite(c.duration) && c.duration > 0.02 && (c.currentTime = Math.min(0.25, Math.max(0, c.duration - 0.05)));
  } }) : /* @__PURE__ */ r("span", { children: "…" }) });
}
function re(t, e) {
  const n = t.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!n || n.startsWith("/") || /^[A-Za-z]:\//.test(n)) return null;
  const o = n.split("/").filter(Boolean), i = o.pop();
  if (!i || o.some((c) => c === "..")) return null;
  const a = new URLSearchParams({ filename: i, type: e });
  return o.length && a.set("subfolder", o.join("/")), `/view?${a.toString()}`;
}
function Xt(t) {
  return re(t, "input");
}
function se(t) {
  return t.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function dt({ asset: t, compact: e = !1 }) {
  const n = Xt(t.path), o = `td-media-preview ${e ? "compact" : ""}`;
  return n ? t.kind === "image" ? /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("img", { src: n, alt: t.alias, loading: "lazy" }) }) : t.kind === "video" ? /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("video", { src: n, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("audio", { src: n, controls: !0, preload: "metadata" }) }) : t.path ? /* @__PURE__ */ r("div", { class: `${o} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ r("div", { class: `${o} empty`, children: "尚未选择素材 / No media selected" });
}
function Zt(t) {
  let e = 0;
  return t.shots.map((n, o) => {
    const i = {
      key: `${o}:${n.id}`,
      shot: n,
      sourceIndex: o,
      activeIndex: n.enabled ? e : -1
    };
    return n.enabled && (e += 1), i;
  });
}
function er(t, e, n) {
  return t.filter((o) => o.shot.enabled && e[o.key]).map((o) => ({
    shotId: o.shot.id,
    activeIndex: o.activeIndex,
    path: n[o.key] ?? ""
  }));
}
function tr(t, e, n) {
  const o = {};
  return t.forEach((i) => {
    const a = i.sourceIndex + 1;
    o[i.key] = i.shot.enabled && a >= e && a <= n;
  }), o;
}
async function at(t) {
  const e = await fetch(t), n = await e.json();
  if (!e.ok) throw new Error(n.error || `HTTP ${e.status}`);
  return n;
}
function rr(t, e, n) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({
    projectName: t.project.name,
    runId: t.project.runId,
    shotId: e,
    activeIndex: String(n)
  }).toString()}`;
}
function nr(t) {
  return `/theodore-director/v1/postprocess/merged-videos?${new URLSearchParams({ projectName: t.project.name, runId: t.project.runId }).toString()}`;
}
function or({ plan: t, language: e }) {
  const n = he(() => Zt(t), [t]), [o, i] = j({}), [a, c] = j({}), [u, f] = j({}), [p, s] = j(null), [w, l] = j(!1), [b, C] = j(""), [D, A] = j({ found: !1, results: [] }), [T, S] = j(!1), [L, g] = j(""), [k, F] = j(0), [J, Y] = j("1"), [K, O] = j(String(n.length || 1)), H = n.filter((h) => h.shot.enabled), ue = H.length > 0 && H.every((h) => a[h.key]), q = er(n, a, u), V = q.filter((h) => !h.path), Z = n.some((h) => {
    var v;
    return a[h.key] && ((v = o[h.key]) == null ? void 0 : v.loading);
  }), le = n.reduce(
    (h, v) => h + (v.shot.enabled && a[v.key] ? v.shot.durationSeconds : 0),
    0
  ), G = he(() => ae(D), [D]), W = G.find((h) => h.path === L) ?? G[0];
  ze(() => {
    let h = !1;
    const v = {}, R = {};
    return n.forEach(($) => {
      v[$.key] = $.shot.enabled, R[$.key] = { loading: $.shot.enabled, response: { found: !1, results: [] } };
    }), c(($) => {
      const z = {};
      return n.forEach((U) => {
        z[U.key] = U.shot.enabled ? $[U.key] ?? v[U.key] : !1;
      }), z;
    }), i(R), C(""), n.filter(($) => $.shot.enabled).forEach(($) => {
      at(rr(t, $.shot.id, $.activeIndex)).then((z) => {
        if (h) return;
        const U = ae(z);
        i((y) => ({ ...y, [$.key]: { loading: !1, response: z } })), f((y) => {
          var ee;
          return {
            ...y,
            [$.key]: U.some((ne) => ne.path === y[$.key]) ? y[$.key] : ((ee = U[0]) == null ? void 0 : ee.path) ?? ""
          };
        });
      }).catch((z) => {
        h || i((U) => ({
          ...U,
          [$.key]: { loading: !1, response: { found: !1, results: [], error: String(z) } }
        }));
      });
    }), () => {
      h = !0;
    };
  }, [t.project.name, t.project.runId, t.shots.map((h) => `${h.id}:${h.enabled}`).join("|"), k]), ze(() => {
    let h = !1;
    return S(!0), at(nr(t)).then((v) => {
      if (h) return;
      const R = ae(v);
      A(v), g(($) => {
        var z;
        return R.some((U) => U.path === $) ? $ : ((z = R[0]) == null ? void 0 : z.path) ?? "";
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
      return H.forEach(($) => {
        R[$.key] = h;
      }), R;
    });
  }, me = () => {
    const h = Number(J), v = Number(K);
    if (!Number.isInteger(h) || !Number.isInteger(v) || h < 1 || v < h || v > n.length) {
      window.alert(e === "zh" ? `请输入有效范围：1 ≤ m ≤ n ≤ ${n.length}` : `Enter a valid range: 1 ≤ m ≤ n ≤ ${n.length}`);
      return;
    }
    c(tr(n, h, v));
  }, je = async () => {
    if (!q.length) {
      window.alert(e === "zh" ? "请至少选择一个镜头" : "Select at least one shot.");
      return;
    }
    if (V.length) {
      window.alert(e === "zh" ? `以下已选镜头没有可用结果：${V.map((h) => h.shotId).join("、")}` : `Selected shots without a result: ${V.map((h) => h.shotId).join(", ")}`);
      return;
    }
    l(!0), C("");
    try {
      const h = await fetch("/theodore-director/v1/postprocess/merge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: t.project.name, runId: t.project.runId, selections: q })
      }), v = await h.json();
      if (!h.ok) throw new Error(v.error || `HTTP ${h.status}`);
      F((R) => R + 1);
    } catch (h) {
      C(String(h instanceof Error ? h.message : h));
    } finally {
      l(!1);
    }
  }, I = W != null && W.path ? re(W.path, "output") : null;
  return /* @__PURE__ */ r("section", { class: "td-postprocess", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: e === "zh" ? "合并视频" : "Merge videos" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "从每个镜头选择一个结果，按当前分镜顺序进行无损合并。" : "Choose one result per shot and merge them losslessly in storyboard order." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: [
        /* @__PURE__ */ r("button", { onClick: () => F((h) => h + 1), children: [
          "↻ ",
          e === "zh" ? "刷新结果" : "Refresh"
        ] }),
        /* @__PURE__ */ r("button", { onClick: Ie, children: ue ? e === "zh" ? "全部取消" : "Clear all" : e === "zh" ? "一键全选" : "Select all" })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { class: "td-post-summary", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `已选择 ${q.length}/${H.length} 个启用镜头` : `${q.length}/${H.length} enabled shots selected` }),
      /* @__PURE__ */ r("span", { children: e === "zh" ? `预计时长 ${le.toFixed(1)} 秒` : `Estimated duration ${le.toFixed(1)} sec` }),
      /* @__PURE__ */ r("div", { class: "td-post-range", role: "group", "aria-label": e === "zh" ? "合并视频范围" : "Merge video range", children: [
        /* @__PURE__ */ r("span", { children: e === "zh" ? "范围" : "Range" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: n.length, step: "1", value: J, "aria-label": e === "zh" ? "起始镜头 m" : "Start shot m", onInput: (h) => Y(h.currentTarget.value) }),
        /* @__PURE__ */ r("span", { children: "—" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: n.length, step: "1", value: K, "aria-label": e === "zh" ? "结束镜头 n" : "End shot n", onInput: (h) => O(h.currentTarget.value) }),
        /* @__PURE__ */ r("button", { disabled: !n.length, onClick: me, children: e === "zh" ? "确认范围" : "Apply range" })
      ] }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: w || Z || !q.length || !!V.length, onClick: je, children: w ? e === "zh" ? "正在合并…" : "Merging…" : e === "zh" ? "合并所选视频" : "Merge selected videos" })
    ] }),
    b && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      e === "zh" ? "合并失败：" : "Merge failed: ",
      b
    ] }),
    V.length > 0 && /* @__PURE__ */ r("div", { class: "td-post-warning", children: e === "zh" ? "已选镜头中存在尚未生成视频的镜头。" : "Some selected shots do not have generated videos yet." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: n.map((h) => {
      const v = o[h.key], R = ae((v == null ? void 0 : v.response) ?? { results: [] }), $ = !!a[h.key];
      return /* @__PURE__ */ r("article", { class: `td-post-shot ${$ ? "selected" : ""} ${h.shot.enabled ? "" : "disabled"}`, children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: $, disabled: !h.shot.enabled, onChange: (z) => c((U) => ({ ...U, [h.key]: z.currentTarget.checked })) }),
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
        h.shot.enabled ? v != null && v.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: e === "zh" ? "正在查询生成结果…" : "Loading generated results…" }) : v != null && v.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: e === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : R.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: R.map((z, U) => {
          const y = re(z.path, "output"), ee = u[h.key] === z.path, ne = jt(z.path, R.length - U);
          return /* @__PURE__ */ r("div", { class: `td-post-result ${ee ? "selected" : ""}`, children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", role: "radio", "aria-checked": ee, onClick: () => f((Ne) => ({ ...Ne, [h.key]: z.path })), children: [
              y ? /* @__PURE__ */ r(Ue, { src: y, alt: `${h.shot.title} ${e === "zh" ? "结果" : "result"} ${ne}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  e === "zh" ? `结果 ${ne}` : `Result ${ne}`,
                  U === 0 && /* @__PURE__ */ r("em", { children: e === "zh" ? "最新" : "Latest" })
                ] }),
                /* @__PURE__ */ r("span", { title: z.path, children: se(z.path) }),
                /* @__PURE__ */ r("small", { children: z.bytes ? `${(z.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "td-post-result-play", disabled: !y, title: e === "zh" ? "播放预览" : "Play preview", onClick: () => y && s({ path: z.path, title: `${h.shot.id} · ${h.shot.title}` }), children: "▶" })
          ] }, z.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: e === "zh" ? "未找到这个镜头的生成结果" : "No generated result found for this shot" }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: e === "zh" ? "该镜头当前已禁用，不参加合并。" : "This shot is disabled and will not be merged." })
      ] }, h.key);
    }) }),
    /* @__PURE__ */ r("section", { class: "td-post-merged", children: [
      /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: e === "zh" ? "合并结果" : "Merged results" }),
        /* @__PURE__ */ r("span", { class: `td-result-state ${G.length ? "found" : ""}`, children: T ? e === "zh" ? "查询中" : "Checking" : e === "zh" ? `${G.length} 个结果` : `${G.length} results` })
      ] }) }),
      T ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: e === "zh" ? "正在查询合并结果…" : "Loading merged results…" }) : D.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: e === "zh" ? "无法查询合并结果" : "Unable to query merged results" }) : W && I ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
        /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
          /* @__PURE__ */ r("video", { src: I, controls: !0, preload: "metadata", playsInline: !0 }, W.path),
          /* @__PURE__ */ r("div", { class: "td-generated-meta", title: W.path, children: W.path })
        ] }),
        /* @__PURE__ */ r("div", { class: "td-result-list", children: G.map((h, v) => {
          const R = re(h.path, "output");
          return /* @__PURE__ */ r("button", { class: `td-result-item ${h.path === W.path ? "selected" : ""}`, onClick: () => g(h.path), children: [
            R ? /* @__PURE__ */ r(Ue, { src: R, alt: `${e === "zh" ? "合并结果" : "Merged result"} ${G.length - v}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
            /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
              /* @__PURE__ */ r("strong", { children: [
                e === "zh" ? `合并结果 ${G.length - v}` : `Merged result ${G.length - v}`,
                v === 0 && /* @__PURE__ */ r("em", { children: e === "zh" ? "最新" : "Latest" })
              ] }),
              /* @__PURE__ */ r("span", { children: se(h.path) }),
              /* @__PURE__ */ r("small", { children: h.bytes ? `${(h.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
            ] })
          ] }, h.path);
        }) })
      ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: e === "zh" ? "还没有合并结果" : "No merged result yet" })
    ] }),
    p && re(p.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => s(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (h) => h.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: p.title }),
        /* @__PURE__ */ r("button", { "aria-label": e === "zh" ? "关闭预览" : "Close preview", onClick: () => s(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: re(p.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { title: p.path, children: se(p.path) })
    ] }) })
  ] });
}
function ir(t) {
  const e = t.reduce((n, o) => {
    const i = /^shot_(\d+)$/i.exec(o.id.trim());
    return i ? Math.max(n, Number(i[1])) : n;
  }, 0);
  return Math.max(e, t.length) + 1;
}
function dr(t, e = 5) {
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
  const o = ir(t), i = Array.from({ length: e }, (a, c) => dr(o + c, n));
  return [...t, ...i];
}
const Nt = (t) => `${t}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, ve = (t) => JSON.parse(JSON.stringify(t)), ar = { image: "图片", video: "视频", audio: "音频" };
function lt(t) {
  var n;
  const e = ve(t);
  return e.schemaVersion = 4, (n = e.project.id) != null && n.trim() || (e.project.id = Nt("project")), e.shots = e.shots.map((o) => ({
    ...o,
    latentRelay: o.latentRelay ?? !0,
    secondSampling: o.secondSampling ?? !0
  })), e;
}
function sr(t) {
  return t.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function lr(t) {
  const e = Nt(t);
  return { id: e, alias: e, kind: t, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: t === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function cr(t, e, n) {
  const o = new FormData();
  o.append("projectName", t), o.append("kind", e), o.append("file", n);
  const i = await fetch("/theodore-director/v1/assets", { method: "POST", body: o }), a = await i.json();
  if (!i.ok || !a.path) throw new Error(a.error || `HTTP ${i.status}`);
  return a.path;
}
async function pr(t, e, n) {
  const o = new URLSearchParams({
    projectName: t.project.name,
    runId: t.project.runId,
    shotId: e.id,
    activeIndex: String(n)
  }), i = await fetch(`/theodore-director/v1/generated-video?${o.toString()}`), a = await i.json();
  if (!i.ok) throw new Error(a.error || `HTTP ${i.status}`);
  return a;
}
async function hr(t) {
  var o;
  if ((o = navigator.clipboard) != null && o.writeText)
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
function ur({ initial: t, onSave: e, onClose: n, supportsSecondSampling: o }) {
  const [i, a] = j(() => lt(t)), [c, u] = j("shots"), [f, p] = j(0), [s, w] = j(() => navigator.language.startsWith("zh") ? "zh" : "en"), [l, b] = j({}), [C, D] = j(!1), [A, T] = j(!0), [S, L] = j(0), [g, k] = j({ found: !1, results: [] }), [F, J] = j(""), [Y, K] = j(!1), [O, H] = j(""), [ue, q] = j(!1), [V, Z] = j([]), [le, G] = j("5"), [W, Ie] = j("1"), [me, je] = j("5"), I = i.shots[Math.min(f, i.shots.length - 1)], h = he(() => I ? It(i, I) : null, [i, I]), v = I != null && I.enabled ? i.shots.slice(0, f).filter((d) => d.enabled).length : -1, R = i.shots.length > 0 && i.shots.every((d) => d.secondSampling), $ = he(() => ae(g), [g]), z = $.find((d) => d.path === F) ?? $[0], U = z != null && z.path ? re(z.path, "output") : null, y = (d) => a((m) => {
    const _ = ve(m);
    return d(_), _;
  }), ee = (d, m) => y((_) => {
    const x = d + m;
    x < 0 || x >= _.shots.length || ([_.shots[d], _.shots[x]] = [_.shots[x], _.shots[d]], p(x));
  }), ne = (d) => y((m) => {
    m.shots.length <= 1 || (m.shots.splice(d, 1), p((_) => _ > d ? _ - 1 : _ === d ? Math.min(d, m.shots.length - 1) : _));
  }), Ne = () => {
    Z(ve(i.shots)), q(!0);
  }, Pt = () => {
    const d = Number(le);
    if (!Number.isFinite(d) || d <= 0) {
      window.alert(s === "zh" ? "统一时长必须大于 0 秒" : "The shared duration must be greater than 0 seconds.");
      return;
    }
    Z((m) => m.map((_) => ({ ..._, durationSeconds: d })));
  }, At = () => {
    const d = Number(W), m = Number(me);
    if (!Number.isInteger(d) || d < 1 || d > 100) {
      window.alert(s === "zh" ? "新增镜头数量必须是 1–100 的整数" : "The shot count must be an integer from 1 to 100.");
      return;
    }
    if (!Number.isFinite(m) || m <= 0) {
      window.alert(s === "zh" ? "新增镜头时长必须大于 0 秒" : "The new-shot duration must be greater than 0 seconds.");
      return;
    }
    Z((_) => st(_, d, m));
  }, Rt = () => {
    if (V.some((d) => !Number.isFinite(d.durationSeconds) || d.durationSeconds <= 0)) {
      window.alert(s === "zh" ? "每个镜头的时长都必须大于 0 秒" : "Every shot duration must be greater than 0 seconds.");
      return;
    }
    y((d) => {
      d.shots = ve(V);
    }), p((d) => Math.min(d, V.length - 1)), q(!1);
  }, Et = () => {
    const d = URL.createObjectURL(new Blob([JSON.stringify(i, null, 2)], { type: "application/json" })), m = document.createElement("a");
    m.href = d, m.download = `${sr(i.project.name)}.director.json`, m.click(), URL.revokeObjectURL(d);
  }, Dt = () => {
    const d = Kt(i);
    if (d.length) {
      window.alert(`计划未通过校验：

${d.join(`
`)}`);
      return;
    }
    e(i);
  };
  return ze(() => {
    let d = !1;
    return !(I != null && I.enabled) || v < 0 ? (k({ found: !1, results: [] }), J(""), K(!1), () => {
      d = !0;
    }) : (K(!0), pr(i, I, v).then((m) => {
      if (d) return;
      const _ = ae(m);
      k(m), J((x) => {
        var P;
        return _.some((B) => B.path === x) ? x : ((P = _[0]) == null ? void 0 : P.path) ?? "";
      });
    }).catch((m) => {
      d || (k({ found: !1, results: [], error: String(m) }), J(""));
    }).finally(() => {
      d || K(!1);
    }), () => {
      d = !0;
    });
  }, [i.project.name, i.project.runId, I == null ? void 0 : I.id, I == null ? void 0 : I.enabled, v, S]), /* @__PURE__ */ r("div", { class: "td-shell", children: [
    /* @__PURE__ */ r("header", { children: [
      /* @__PURE__ */ r("h1", { children: oe(s, "title") }),
      /* @__PURE__ */ r("div", { class: "td-actions", children: [
        /* @__PURE__ */ r("button", { onClick: Et, children: "导出 / Export" }),
        /* @__PURE__ */ r("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ r("input", { type: "file", accept: "application/json,.json", onChange: async (d) => {
            var _;
            const m = (_ = d.currentTarget.files) == null ? void 0 : _[0];
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
        /* @__PURE__ */ r("button", { onClick: () => w(s === "zh" ? "en" : "zh"), children: s === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: Dt, children: oe(s, "save") }),
        /* @__PURE__ */ r("button", { onClick: n, children: oe(s, "close") })
      ] })
    ] }),
    /* @__PURE__ */ r("nav", { children: ["shots", "assets", "settings", "postprocess"].map((d) => /* @__PURE__ */ r("button", { class: c === d ? "active" : "", onClick: () => u(d), children: oe(s, d) })) }),
    /* @__PURE__ */ r("main", { children: [
      c === "shots" && /* @__PURE__ */ r("div", { class: "td-shots", children: [
        /* @__PURE__ */ r("aside", { class: "td-shot-sidebar", children: [
          o && /* @__PURE__ */ r("button", { class: `wide td-bulk-toggle ${R ? "active" : ""}`, onClick: () => y((d) => {
            const m = !d.shots.every((_) => _.secondSampling);
            d.shots.forEach((_) => {
              _.secondSampling = m;
            });
          }), children: s === "zh" ? `全部二次采样：${R ? "开" : "关"}` : `Second sampling for all: ${R ? "ON" : "OFF"}` }),
          /* @__PURE__ */ r("div", { class: "td-shot-list", children: i.shots.map((d, m) => /* @__PURE__ */ r("div", { class: `td-shot-card ${m === f ? "selected" : ""}`, onClick: () => p(m), children: [
            /* @__PURE__ */ r("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ r("button", { class: "td-shot-delete", disabled: i.shots.length <= 1, title: s === "zh" ? i.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : i.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": s === "zh" ? "删除镜头" : "Delete shot", onClick: (_) => {
              _.stopPropagation(), ne(m);
            }, children: "×" }) }),
            /* @__PURE__ */ r("strong", { children: [
              m + 1,
              ". ",
              d.title
            ] }),
            /* @__PURE__ */ r("span", { children: [
              d.durationSeconds,
              "s · ",
              d.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-move-actions", children: [
              /* @__PURE__ */ r("button", { title: s === "zh" ? "上移镜头" : "Move shot up", onClick: (_) => {
                _.stopPropagation(), ee(m, -1);
              }, children: "↑" }),
              /* @__PURE__ */ r("button", { title: s === "zh" ? "下移镜头" : "Move shot down", onClick: (_) => {
                _.stopPropagation(), ee(m, 1);
              }, children: "↓" })
            ] })
          ] }, d.id)) }),
          /* @__PURE__ */ r("button", { class: "wide", onClick: () => y((d) => {
            const m = d.shots.length;
            d.shots = st(d.shots, 1, 5), p(m);
          }), children: [
            "＋ ",
            oe(s, "addShot")
          ] }),
          /* @__PURE__ */ r("div", { class: "td-shot-batch-entry", children: /* @__PURE__ */ r("button", { class: "wide", onClick: Ne, children: s === "zh" ? "批量处理镜头" : "Batch edit shots" }) })
        ] }),
        I && /* @__PURE__ */ r("section", { class: "td-form", children: [
          /* @__PURE__ */ r("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ r("label", { children: [
              "ID",
              /* @__PURE__ */ r("input", { value: I.id, onInput: (d) => y((m) => {
                m.shots[f].id = d.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ r("input", { value: I.title, onInput: (d) => y((m) => {
                m.shots[f].title = d.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: I.durationSeconds, onInput: (d) => y((m) => {
                m.shots[f].durationSeconds = Number(d.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: I.enabled, onChange: (d) => y((m) => {
                  m.shots[f].enabled = d.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: v === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: I.latentRelay, onChange: (d) => y((m) => {
                  m.shots[f].latentRelay = d.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: [
                  "latent接力 / Relay",
                  v === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              o && /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: "开启时执行 RTX 超分和第二次 H3 采样，关闭时直接使用第一采画面", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: I.secondSampling, onChange: (d) => y((m) => {
                  m.shots[f].secondSampling = d.currentTarget.checked;
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
            /* @__PURE__ */ r(Re, { rows: 10, value: I.prompt, isReferenceValid: (d) => Tt(i, I, d), onInput: (d) => y((m) => {
              m.shots[f].prompt = d.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ r("textarea", { rows: 3, value: I.negativePrompt, onInput: (d) => y((m) => {
              m.shots[f].negativePrompt = d.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ r("legend", { children: "本镜头素材 / Shot media" }),
            i.assets.map((d) => {
              const m = !I.disabledAssetIds.includes(d.id), _ = se(d.path) || d.alias, x = `{{ref:${d.alias}}}`;
              return /* @__PURE__ */ r("div", { class: `td-shot-media-card ${m ? "" : "disabled"}`, children: [
                /* @__PURE__ */ r("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ r(dt, { asset: d, compact: !0 }),
                  /* @__PURE__ */ r("span", { class: "td-shot-media-kind", children: s === "zh" ? ar[d.kind] : d.kind }),
                  /* @__PURE__ */ r("label", { class: "td-shot-media-toggle", title: m ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ r("input", { type: "checkbox", checked: m, onChange: (P) => y((B) => {
                    const Q = B.shots[f].disabledAssetIds;
                    B.shots[f].disabledAssetIds = P.currentTarget.checked ? Q.filter((de) => de !== d.id) : [.../* @__PURE__ */ new Set([...Q, d.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ r("button", { class: `td-shot-media-name ${O === d.id ? "copied" : ""}`, title: `${_}
${s === "zh" ? "点击复制" : "Click to copy"} ${x}`, onClick: async () => {
                  try {
                    await hr(x), H(d.id), window.setTimeout(() => H((P) => P === d.id ? "" : P), 1400);
                  } catch (P) {
                    window.alert(`${s === "zh" ? "复制失败" : "Copy failed"}: ${String(P)}`);
                  }
                }, children: [
                  /* @__PURE__ */ r("span", { children: _ }),
                  O === d.id && /* @__PURE__ */ r("em", { children: s === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, d.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ r("aside", { class: "td-preview", children: [
          /* @__PURE__ */ r("details", { open: C, onToggle: (d) => D(d.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: oe(s, "preview") }),
              /* @__PURE__ */ r("span", { class: "td-summary-counts", children: [
                "Picture ",
                (h == null ? void 0 : h.slots.filter((d) => d.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (h == null ? void 0 : h.slots.filter((d) => d.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (h == null ? void 0 : h.audioCount) ?? 0,
                "/3 · Files ",
                (h == null ? void 0 : h.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body", children: [
              h != null && h.errors.length ? /* @__PURE__ */ r("ul", { class: "errors", children: h.errors.map((d) => /* @__PURE__ */ r("li", { children: d })) }) : /* @__PURE__ */ r("p", { class: "ok", children: oe(s, "noErrors") }),
              /* @__PURE__ */ r("ol", { children: h == null ? void 0 : h.slots.map((d) => /* @__PURE__ */ r("li", { children: [
                /* @__PURE__ */ r("code", { children: d.label }),
                " ← ",
                d.alias
              ] })) }),
              /* @__PURE__ */ r("pre", { children: h == null ? void 0 : h.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ r("details", { open: A, onToggle: (d) => T(d.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: s === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ r("span", { class: `td-result-state ${$.length ? "found" : ""}`, children: Y ? s === "zh" ? "查询中" : "Checking" : $.length ? s === "zh" ? `${$.length} 个结果` : `${$.length} results` : s === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ r("div", { class: "td-result-actions", children: /* @__PURE__ */ r("button", { onClick: () => L((d) => d + 1), children: [
                "↻ ",
                s === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              Y ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: s === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : g.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: s === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again." }) : z && U ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
                /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
                  /* @__PURE__ */ r("video", { src: U, controls: !0, preload: "metadata", playsInline: !0 }, z.path),
                  /* @__PURE__ */ r("div", { class: "td-generated-meta", title: z.path, children: [
                    z.path,
                    z.bytes ? ` · ${(z.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                  ] })
                ] }),
                /* @__PURE__ */ r("div", { class: "td-result-list", "aria-label": s === "zh" ? "全部生成结果" : "All generated results", children: $.map((d, m) => {
                  const _ = re(d.path, "output"), x = jt(d.path, $.length - m), P = d.modifiedAt ? new Date(d.modifiedAt * 1e3).toLocaleString(s === "zh" ? "zh-CN" : "en-US") : "";
                  return /* @__PURE__ */ r("button", { class: `td-result-item ${d.path === z.path ? "selected" : ""}`, onClick: () => J(d.path), children: [
                    _ ? /* @__PURE__ */ r(Ue, { src: _, alt: `${s === "zh" ? "结果" : "Result"} ${x}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: /* @__PURE__ */ r("span", { children: "×" }) }),
                    /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
                      /* @__PURE__ */ r("strong", { children: [
                        s === "zh" ? `结果 ${x}` : `Result ${x}`,
                        m === 0 && /* @__PURE__ */ r("em", { children: s === "zh" ? "最新" : "Latest" })
                      ] }),
                      /* @__PURE__ */ r("span", { title: d.path, children: se(d.path) }),
                      /* @__PURE__ */ r("small", { children: [d.bytes ? `${(d.bytes / 1024 / 1024).toFixed(1)} MB` : "", P].filter(Boolean).join(" · ") })
                    ] })
                  ] }, d.path);
                }) })
              ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: s === "zh" ? "未在预期路径找到本段视频" : "No video found at the expected path" })
            ] })
          ] })
        ] })
      ] }),
      c === "assets" && /* @__PURE__ */ r("div", { class: "td-assets", children: [
        /* @__PURE__ */ r("div", { class: "td-toolbar", children: ["image", "video", "audio"].map((d) => /* @__PURE__ */ r("button", { onClick: () => y((m) => m.assets.push(lr(d))), children: [
          "＋ ",
          d
        ] })) }),
        i.assets.map((d, m) => /* @__PURE__ */ r("article", { children: /* @__PURE__ */ r("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ r("div", { class: "td-grid", children: [
              /* @__PURE__ */ r("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ r("input", { value: d.alias, onInput: (_) => y((x) => {
                  x.assets[m].alias = _.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ r("select", { value: d.kind, onChange: (_) => y((x) => {
                  x.assets[m].kind = _.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ r("option", { children: "image" }),
                  /* @__PURE__ */ r("option", { children: "video" }),
                  /* @__PURE__ */ r("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ r("input", { value: d.path, onInput: (_) => y((x) => {
                  x.assets[m].path = _.currentTarget.value;
                }) }),
                /* @__PURE__ */ r("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ r("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ r("input", { type: "file", accept: d.kind === "image" ? "image/*" : d.kind === "video" ? "video/*" : "audio/*", onChange: async (_) => {
                      var B;
                      const x = _.currentTarget, P = (B = x.files) == null ? void 0 : B[0];
                      if (P) {
                        b((Q) => ({ ...Q, [d.id]: P.name }));
                        try {
                          const Q = await cr(i.project.name, d.kind, P);
                          y((de) => {
                            const Ve = de.assets.find((Mt) => Mt.id === d.id);
                            Ve && (Ve.path = Q);
                          });
                        } catch (Q) {
                          window.alert(String(Q));
                        } finally {
                          b((Q) => {
                            const de = { ...Q };
                            return delete de[d.id], de;
                          }), x.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ r("span", { class: "td-file-name", title: l[d.id] || d.path, children: l[d.id] ? `${s === "zh" ? "上传中" : "Uploading"}: ${l[d.id]}` : se(d.path) || (s === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ r("input", { type: "number", min: "0", step: "0.1", value: d.durationSeconds ?? "", onInput: (_) => y((x) => {
                  x.assets[m].durationSeconds = _.currentTarget.value ? Number(_.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ r("input", { type: "number", value: d.fixedOrder, onInput: (_) => y((x) => {
                  x.assets[m].fixedOrder = Number(_.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ r("input", { value: d.shotIds.join(", "), onInput: (_) => y((x) => {
                  x.assets[m].shotIds = _.currentTarget.value.split(",").map((P) => P.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-flags", children: [
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: d.enabled, onChange: (_) => y((x) => {
                  x.assets[m].enabled = _.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: d.fixed, onChange: (_) => y((x) => {
                  x.assets[m].fixed = _.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              d.kind === "video" && /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: d.includeVideoAudio, onChange: (_) => y((x) => {
                  x.assets[m].includeVideoAudio = _.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ r("button", { class: "danger", onClick: () => y((_) => {
                _.assets.splice(m, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ r(dt, { asset: d })
        ] }) }, d.id))
      ] }),
      c === "settings" && /* @__PURE__ */ r("section", { class: "td-form settings", children: [
        /* @__PURE__ */ r("label", { children: [
          "Project name",
          /* @__PURE__ */ r("input", { value: i.project.name, onInput: (d) => y((m) => {
            m.project.name = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Run ID",
          /* @__PURE__ */ r("input", { value: i.project.runId, onInput: (d) => y((m) => {
            m.project.runId = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "FPS",
          /* @__PURE__ */ r("input", { type: "number", value: i.defaults.fps, onInput: (d) => y((m) => {
            m.defaults.fps = Number(d.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Base seed",
          /* @__PURE__ */ r("input", { type: "number", value: i.defaults.baseSeed, onInput: (d) => y((m) => {
            m.defaults.baseSeed = Number(d.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ r(Re, { value: i.promptPrefix, isReferenceValid: (d) => it(i, d), onInput: (d) => y((m) => {
            m.promptPrefix = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ r(Re, { value: i.promptSuffix, isReferenceValid: (d) => it(i, d), onInput: (d) => y((m) => {
            m.promptSuffix = d.currentTarget.value;
          }) })
        ] })
      ] }),
      c === "postprocess" && /* @__PURE__ */ r(or, { plan: i, language: s })
    ] }),
    ue && /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": s === "zh" ? "批量处理镜头" : "Batch edit shots", children: [
      /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("h2", { children: s === "zh" ? "批量处理镜头" : "Batch edit shots" }),
          /* @__PURE__ */ r("p", { children: s === "zh" ? `当前共 ${V.length} 个镜头` : `${V.length} shots` })
        ] }),
        /* @__PURE__ */ r("button", { "aria-label": s === "zh" ? "关闭" : "Close", onClick: () => q(!1), children: "×" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-tools", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            s === "zh" ? "所有镜头时长" : "Duration for all shots",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: le, onInput: (d) => G(d.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: s === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: Pt, children: s === "zh" ? "一键设置所有时长" : "Set all durations" })
        ] }),
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            s === "zh" ? "新增镜头数量" : "New shot count",
            /* @__PURE__ */ r("input", { type: "number", min: "1", max: "100", step: "1", value: W, onInput: (d) => Ie(d.currentTarget.value) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            s === "zh" ? "每个镜头时长" : "Duration per shot",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: me, onInput: (d) => je(d.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: s === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: At, children: s === "zh" ? "批量新增镜头" : "Add shots" })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-table", children: [
        /* @__PURE__ */ r("div", { class: "td-batch-row td-batch-table-head", children: [
          /* @__PURE__ */ r("span", { children: "#" }),
          /* @__PURE__ */ r("span", { children: s === "zh" ? "镜头名" : "Shot name" }),
          /* @__PURE__ */ r("span", { children: s === "zh" ? "具体时长" : "Duration" }),
          /* @__PURE__ */ r("span", { children: [
            "latent ",
            s === "zh" ? "接力" : "relay"
          ] })
        ] }),
        V.map((d, m) => /* @__PURE__ */ r("div", { class: "td-batch-row", children: [
          /* @__PURE__ */ r("span", { children: m + 1 }),
          /* @__PURE__ */ r("input", { value: d.title, "aria-label": `${s === "zh" ? "镜头名" : "Shot name"} ${m + 1}`, onInput: (_) => Z((x) => x.map((P, B) => B === m ? { ...P, title: _.currentTarget.value } : P)) }),
          /* @__PURE__ */ r("label", { class: "td-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: d.durationSeconds, onInput: (_) => Z((x) => x.map((P, B) => B === m ? { ...P, durationSeconds: Number(_.currentTarget.value) } : P)) }),
            /* @__PURE__ */ r("span", { children: s === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-relay", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: d.latentRelay, onChange: (_) => Z((x) => x.map((P, B) => B === m ? { ...P, latentRelay: _.currentTarget.checked } : P)) }),
            /* @__PURE__ */ r("span", { children: d.latentRelay ? s === "zh" ? "开" : "ON" : s === "zh" ? "关" : "OFF" })
          ] })
        ] }, d.id))
      ] }),
      /* @__PURE__ */ r("footer", { children: [
        /* @__PURE__ */ r("button", { onClick: () => q(!1), children: s === "zh" ? "取消" : "Cancel" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: Rt, children: s === "zh" ? "应用更改" : "Apply changes" })
      ] })
    ] }) })
  ] });
}
function mr(t, e, n = !1) {
  const o = document.getElementById("theodore-director-modal");
  if (o) {
    o.focus();
    return;
  }
  const i = document.createElement("div");
  i.id = "theodore-director-modal", i.className = "td-modal", i.tabIndex = -1, document.body.append(i);
  const a = (u) => {
    u.key === "Escape" && c();
  }, c = () => {
    document.removeEventListener("keydown", a), Ke(null, i), i.remove();
  };
  document.addEventListener("keydown", a), Ke(/* @__PURE__ */ r(ur, { initial: t, onSave: (u) => {
    e(u), c();
  }, onClose: c, supportsSecondSampling: n }), i), i.focus();
}
const fr = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-highlight-textarea{position:relative;display:block;width:100%;min-width:0}.td-highlight-backdrop,.td-form textarea.td-highlight-input{box-sizing:border-box;width:100%;margin:0;padding:7px 9px;font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,monospace;font-size:inherit;line-height:1.45;letter-spacing:normal;-moz-tab-size:8;tab-size:8;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.td-highlight-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border:1px solid transparent;border-radius:6px;background:#222a35;color:var(--td-text);pointer-events:none}.td-form textarea.td-highlight-input{position:relative;z-index:1;display:block;background:transparent;color:transparent;caret-color:var(--td-text);-webkit-text-fill-color:transparent}.td-highlight-input::selection{background:#5898d46b}.td-highlight-backdrop mark{padding:1px 2px;border-radius:3px;color:inherit}.td-highlight-backdrop mark.valid{background:#1d6b50;color:#bfffe6}.td-highlight-backdrop mark.invalid{background:#7a2931;color:#ffd1d5;text-decoration:underline;text-decoration-color:#ff9aa4;text-underline-offset:2px}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-generated-results{display:flex;flex-direction:column;gap:12px}.td-result-list{display:flex;flex-direction:column;gap:7px;max-height:280px;overflow:auto;padding-right:3px}.td-shell button.td-result-item{display:grid;grid-template-columns:112px minmax(0,1fr);gap:10px;align-items:center;width:100%;padding:6px;text-align:left;background:#151b23}.td-shell button.td-result-item.selected{border-color:var(--td-accent);background:#1c2a2a}.td-result-thumb{width:112px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:5px;background:#090c10;color:var(--td-muted)}.td-result-thumb img,.td-result-thumb video{display:block;width:100%;height:100%;object-fit:contain}.td-result-item-copy{display:flex;min-width:0;flex-direction:column;gap:3px}.td-result-item-copy>strong{display:flex;align-items:center;gap:7px;color:var(--td-text)}.td-result-item-copy>strong em{padding:1px 6px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-result-item-copy>span,.td-result-item-copy>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-result-item-copy>small{font-size:10px}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}.td-shot-sidebar{display:flex;flex-direction:column}.td-shot-list{flex:none}.td-shot-batch-entry{display:flex;align-items:flex-end;flex:1;min-height:90px;padding-top:14px}.td-shot-batch-entry button{border-color:#527061;background:#1b2c28;color:var(--td-accent)}.td-batch-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:28px;background:#05080dbd;box-sizing:border-box}.td-batch-panel{display:flex;flex-direction:column;width:min(920px,100%);max-height:min(820px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-batch-header h2{font-size:18px;margin:0}.td-batch-header p{margin:3px 0 0;color:var(--td-muted)}.td-batch-header>button{font-size:20px;line-height:1;padding:5px 9px}.td-batch-tools{display:grid;grid-template-columns:1fr 1.4fr;gap:12px;padding:14px 18px;border-bottom:1px solid var(--td-line);background:#151b23}.td-batch-tools>div{display:flex;align-items:end;gap:8px;padding:10px;border:1px solid var(--td-line);border-radius:7px}.td-batch-tools label{display:flex;flex:1;flex-direction:column;gap:4px;color:var(--td-muted);white-space:nowrap}.td-batch-tools label>span,.td-batch-duration{display:flex;align-items:center;gap:6px}.td-batch-tools input{width:100%}.td-batch-tools em{color:var(--td-muted);font-style:normal}.td-batch-tools button{white-space:nowrap}.td-batch-table{overflow:auto;padding:0 18px}.td-batch-row{display:grid;grid-template-columns:42px minmax(180px,1fr) 150px 120px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-batch-table-head{position:sticky;top:0;z-index:1;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-batch-duration input{min-width:0;width:100%}.td-batch-duration>span{color:var(--td-muted)}.td-batch-relay{display:flex;align-items:center;gap:7px;justify-content:flex-start;color:var(--td-text)}.td-batch-relay input{width:17px;height:17px;margin:0}.td-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-postprocess{display:flex;flex-direction:column;gap:14px;max-width:1500px;margin:0 auto}.td-post-header,.td-post-summary,.td-post-merged{border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px}.td-post-header h2,.td-post-merged h2{margin:0;font-size:17px}.td-post-header p{margin:4px 0 0;color:var(--td-muted)}.td-post-actions{display:flex;gap:8px;flex:none}.td-post-summary{display:flex;align-items:center;gap:18px;padding:10px 14px;color:var(--td-muted)}.td-post-summary>button{margin-left:auto}.td-post-summary button:disabled{opacity:.5;cursor:not-allowed}.td-post-range{display:flex;align-items:center;gap:6px;margin-left:auto}.td-post-range input{width:64px;padding:6px 7px;text-align:center}.td-post-range button{white-space:nowrap}.td-post-summary>.td-post-range+button{margin-left:0}.td-post-error,.td-post-warning{padding:10px 13px;border-radius:7px}.td-post-error{border:1px solid #8b4149;background:#442228;color:#ffd1d5;white-space:pre-wrap}.td-post-warning{border:1px solid #836a32;background:#3a301c;color:#f4d991}.td-post-shot-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(390px,1fr));gap:12px;align-items:start}.td-post-shot{min-width:0;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel);overflow:hidden}.td-post-shot.selected{border-color:#527e6c}.td-post-shot.disabled{opacity:.62}.td-post-shot>header{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid var(--td-line);background:#1d2530}.td-post-shot>header>label{display:flex;align-items:center;gap:9px;min-width:0;cursor:pointer}.td-post-shot>header input{width:18px;height:18px;margin:0;flex:none}.td-post-shot>header label>span{display:flex;min-width:0;gap:8px;align-items:baseline}.td-post-shot>header strong{color:var(--td-text)}.td-post-shot>header em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted);font-style:normal}.td-post-shot>header>span{flex:none;padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted)}.td-post-shot-empty{min-height:96px;display:flex;align-items:center;justify-content:center;padding:12px;color:var(--td-muted);text-align:center}.td-post-result-list{display:flex;flex-direction:column;gap:7px;max-height:360px;overflow:auto;padding:9px}.td-post-result{display:grid;grid-template-columns:minmax(0,1fr) 35px;gap:6px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:5px}.td-post-result.selected{border-color:var(--td-accent);background:#1c2a2a}.td-shell button.td-post-result-choice{display:grid;grid-template-columns:112px minmax(0,1fr);gap:9px;align-items:center;min-width:0;padding:0;border:0;background:transparent;text-align:left}.td-post-result-choice>span{display:flex;min-width:0;flex-direction:column;gap:3px}.td-post-result-choice>span>strong{display:flex;align-items:center;gap:6px}.td-post-result-choice>span>strong em{padding:1px 5px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-post-result-choice>span>span,.td-post-result-choice>span>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-post-result-choice>span>small{font-size:10px}.td-post-result-play{width:35px;height:35px;padding:0!important}.td-post-result-play:disabled{opacity:.35;cursor:not-allowed}.td-post-merged{padding:12px}.td-post-merged>header>div{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px}.td-post-merged .td-generated-results{display:grid;grid-template-columns:minmax(360px,1.6fr) minmax(300px,1fr);align-items:start}.td-post-merged .td-result-list{max-height:420px}.td-post-preview-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:30;display:flex;align-items:center;justify-content:center;padding:26px;background:#030609d6}.td-post-preview-overlay>section{width:min(980px,100%);max-height:calc(100vh - 52px);overflow:auto;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 80px #000c}.td-post-preview-overlay header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--td-line)}.td-post-preview-overlay header button{font-size:20px;line-height:1;padding:5px 9px}.td-post-preview-overlay video{display:block;width:100%;max-height:calc(100vh - 170px);background:#070a0e}.td-post-preview-overlay p{margin:0;padding:9px 12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}.td-post-summary{flex-wrap:wrap}.td-post-range{margin-left:0}.td-post-summary>button{margin-left:auto}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:900px){.td-post-shot-list,.td-post-merged .td-generated-results{grid-template-columns:1fr}.td-post-header{align-items:flex-start;flex-direction:column}.td-post-actions{width:100%}.td-post-actions button{flex:1}.td-post-summary{align-items:stretch;flex-direction:column;gap:7px}.td-post-range{margin:3px 0;flex-wrap:wrap}.td-post-summary>button{margin:4px 0 0}.td-post-result-list{max-height:none}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}", ct = "theodore-director-styles";
function gr() {
  if (document.getElementById(ct)) return;
  const t = document.createElement("style");
  t.id = ct, t.textContent = fr, document.head.append(t);
}
gr();
const _r = "/scripts/app.js";
import(
  /* @vite-ignore */
  _r
).then(({ app: t }) => {
  t.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(e, n) {
      if (n.name !== "TheodoreDirector_Project") return;
      const o = e.prototype.onNodeCreated;
      e.prototype.onNodeCreated = function() {
        var a, c;
        o == null || o.apply(this);
        const i = (a = this.widgets) == null ? void 0 : a.find((u) => u.name === "plan_json");
        i && (i.type = "hidden", i.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          try {
            const u = JSON.parse(String(i.value));
            mr(u, (f) => {
              var p, s;
              i.value = JSON.stringify(f, null, 2), this.setDirtyCanvas(!0, !0), (s = (p = t.graph) == null ? void 0 : p.setDirtyCanvas) == null || s.call(p, !0, !0);
            }, !0);
          } catch (u) {
            window.alert(`Theodore Director: ${u instanceof Error ? u.message : String(u)}`);
          }
        }), this.size = [Math.max(((c = this.size) == null ? void 0 : c[0]) ?? 300, 360), 110]);
      };
    }
  });
});
