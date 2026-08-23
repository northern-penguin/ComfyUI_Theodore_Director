var se, $, Ye, M, Ne, Qe, Xe, he, ee, Q, Ze, ve, me, ge, ie = {}, ae = [], Ct = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ce = Array.isArray;
function F(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function xe(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function It(e, t, n) {
  var i, o, d, c = {};
  for (d in t) d == "key" ? i = t[d] : d == "ref" ? o = t[d] : c[d] = t[d];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? se.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (d in e.defaultProps) c[d] === void 0 && (c[d] = e.defaultProps[d]);
  return te(e, c, i, o, null);
}
function te(e, t, n, i, o) {
  var d = { type: e, props: t, key: n, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Ye, __i: -1, __u: 0 };
  return o == null && $.vnode != null && $.vnode(d), d;
}
function pe(e) {
  return e.children;
}
function ne(e, t) {
  this.props = e, this.context = t;
}
function V(e, t) {
  if (t == null) return e.__ ? V(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? V(e) : null;
}
function Nt(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, i = [], o = [], d = F({}, t);
    d.__v = t.__v + 1, $.vnode && $.vnode(d), ye(e.__P, d, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, i, n ?? V(t), !!(32 & t.__u), o), d.__v = t.__v, d.__.__k[d.__i] = d, ot(i, d, o), t.__e = t.__ = null, d.__e != n && et(d);
  }
}
function et(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), et(e);
}
function Ae(e) {
  (!e.__d && (e.__d = !0) && M.push(e) && !de.__r++ || Ne != $.debounceRendering) && ((Ne = $.debounceRendering) || Qe)(de);
}
function de() {
  try {
    for (var e, t = 1; M.length; ) M.length > t && M.sort(Xe), e = M.shift(), t = M.length, Nt(e);
  } finally {
    M.length = de.__r = 0;
  }
}
function tt(e, t, n, i, o, d, c, u, f, p, l) {
  var v, s, g, k, P, T, S = i && i.__k || ae, y = t.length;
  for (f = At(n, t, S, f, y), v = 0; v < y; v++) (g = n.__k[v]) != null && (s = g.__i != -1 && S[g.__i] || ie, g.__i = v, T = ye(e, g, s, o, d, c, u, f, p, l), k = g.__e, g.ref && s.ref != g.ref && (s.ref && we(s.ref, null, g), l.push(g.ref, g.__c || k, g)), P == null && k != null && (P = k), 4 & g.__u ? (f = nt(g, f, e), s.__e && (s.__e = null)) : typeof g.type == "function" && T !== void 0 ? f = T : k && (f = k.nextSibling), g.__u &= -7);
  return n.__e = P, f;
}
function At(e, t, n, i, o) {
  var d, c, u, f, p, l = n.length, v = l, s = 0;
  for (e.__k = new Array(o), d = 0; d < o; d++) (c = t[d]) != null && typeof c != "boolean" && typeof c != "function" ? (typeof c == "string" || typeof c == "number" || typeof c == "bigint" || c.constructor == String ? c = e.__k[d] = te(null, c, null, null, null) : ce(c) ? c = e.__k[d] = te(pe, { children: c }, null, null, null) : c.constructor === void 0 && c.__b > 0 ? c = e.__k[d] = te(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : e.__k[d] = c, f = d + s, c.__ = e, c.__b = e.__b + 1, u = null, (p = c.__i = Pt(c, n, f, v)) != -1 && (v--, (u = n[p]) && (u.__u |= 2)), u == null || u.__v == null ? (p == -1 && (o > l ? s-- : o < l && s++), typeof c.type != "function" && (c.__u |= 4)) : p != f && (p == f - 1 ? s-- : p == f + 1 ? s++ : (p > f ? s-- : s++, c.__u |= 4))) : e.__k[d] = null;
  if (v) for (d = 0; d < l; d++) (u = n[d]) != null && (2 & u.__u) == 0 && (u.__e == i && (i = V(u)), at(u, u));
  return i;
}
function nt(e, t, n) {
  var i, o;
  if (typeof e.type == "function") {
    for (i = e.__k, o = 0; i && o < i.length; o++) i[o] && (i[o].__ = e, t = nt(i[o], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = V(e)), t = n.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Pt(e, t, n, i) {
  var o, d, c, u = e.key, f = e.type, p = t[n], l = p != null && (2 & p.__u) == 0;
  if (p === null && u == null || l && u == p.key && f == p.type) return n;
  if (i > (l ? 1 : 0)) {
    for (o = n - 1, d = n + 1; o >= 0 || d < t.length; ) if ((p = t[c = o >= 0 ? o-- : d++]) != null && (2 & p.__u) == 0 && u == p.key && f == p.type) return c;
  }
  return -1;
}
function Pe(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Ct.test(t) ? n : n + "px";
}
function Z(e, t, n, i, o) {
  var d, c;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof i == "string" && (e.style.cssText = i = ""), i) for (t in i) n && t in n || Pe(e.style, t, "");
    if (n) for (t in n) i && n[t] == i[t] || Pe(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") d = t != (t = t.replace(Ze, "$1")), c = t.toLowerCase(), t = c in e || t == "onFocusOut" || t == "onFocusIn" ? c.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + d] = n, n ? i ? n[Q] = i[Q] : (n[Q] = ve, e.addEventListener(t, d ? ge : me, d)) : e.removeEventListener(t, d ? ge : me, d);
  else {
    if (o == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function je(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t[ee] == null) t[ee] = ve++;
      else if (t[ee] < n[Q]) return;
      return n($.event ? $.event(t) : t);
    }
  };
}
function ye(e, t, n, i, o, d, c, u, f, p) {
  var l, v, s, g, k, P, T, S, y, E, _, x, D, W, L, q, R = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (f = !!(32 & n.__u), d = [u = t.__e = n.__e]), (l = $.__b) && l(t);
  e: if (typeof R == "function") {
    v = c.length;
    try {
      if (y = t.props, E = R.prototype && R.prototype.render, _ = (l = R.contextType) && i[l.__c], x = l ? _ ? _.props.value : l.__ : i, n.__c ? S = (s = t.__c = n.__c).__ = s.__E : (E ? t.__c = s = new R(y, x) : (t.__c = s = new ne(y, x), s.constructor = R, s.render = Et), _ && _.sub(s), s.state || (s.state = {}), s.__n = i, g = s.__d = !0, s.__h = [], s._sb = []), E && s.__s == null && (s.__s = s.state), E && R.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = F({}, s.__s)), F(s.__s, R.getDerivedStateFromProps(y, s.__s))), k = s.props, P = s.state, s.__v = t, g) E && R.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), E && s.componentDidMount != null && s.__h.push(s.componentDidMount);
      else {
        if (E && R.getDerivedStateFromProps == null && y !== k && s.componentWillReceiveProps != null && s.componentWillReceiveProps(y, x), t.__v == n.__v || !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(y, s.__s, x) === !1) {
          t.__v != n.__v && (s.props = y, s.state = s.__s, s.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(U) {
            U && (U.__ = t);
          }), ae.push.apply(s.__h, s._sb), s._sb = [], s.__h.length && c.push(s), u = V(n);
          break e;
        }
        s.componentWillUpdate != null && s.componentWillUpdate(y, s.__s, x), E && s.componentDidUpdate != null && s.__h.push(function() {
          s.componentDidUpdate(k, P, T);
        });
      }
      if (s.context = x, s.props = y, s.__P = e, s.__e = !1, D = $.__r, W = 0, E) s.state = s.__s, s.__d = !1, D && D(t), l = s.render(s.props, s.state, s.context), ae.push.apply(s.__h, s._sb), s._sb = [];
      else do
        s.__d = !1, D && D(t), l = s.render(s.props, s.state, s.context), s.state = s.__s;
      while (s.__d && ++W < 25);
      s.state = s.__s, s.getChildContext != null && (i = F(F({}, i), s.getChildContext())), E && !g && s.getSnapshotBeforeUpdate != null && (T = s.getSnapshotBeforeUpdate(k, P)), L = l != null && l.type === pe && l.key == null ? it(l.props.children) : l, u = tt(e, ce(L) ? L : [L], t, n, i, o, d, c, u, f, p), s.base = t.__e, t.__u &= -161, s.__h.length && c.push(s), S && (s.__E = s.__ = null);
    } catch (U) {
      if (c.length = v, t.__v = null, f || d != null) {
        if (U.then) {
          for (t.__u |= f ? 160 : 128; u && u.nodeType == 8 && u.nextSibling; ) u = u.nextSibling;
          d != null && (d[d.indexOf(u)] = null), t.__e = u;
        } else if (d != null) for (q = d.length; q--; ) xe(d[q]);
      } else t.__e = n.__e;
      t.__k == null && (t.__k = n.__k || []), U.then || rt(t), $.__e(U, t, n);
    }
  } else d == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : u = t.__e = jt(n.__e, t, n, i, o, d, c, f, p);
  return (l = $.diffed) && l(t), 128 & t.__u ? void 0 : u;
}
function rt(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(rt));
}
function ot(e, t, n) {
  for (var i = 0; i < n.length; i++) we(n[i], n[++i], n[++i]);
  $.__c && $.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(d) {
        d.call(o);
      });
    } catch (d) {
      $.__e(d, o.__v);
    }
  });
}
function it(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : ce(e) ? e.map(it) : e.constructor !== void 0 ? null : F({}, e);
}
function jt(e, t, n, i, o, d, c, u, f) {
  var p, l, v, s, g, k, P, T = n.props || ie, S = t.props, y = t.type;
  if (y == "svg" ? o = "http://www.w3.org/2000/svg" : y == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), d != null) {
    for (p = 0; p < d.length; p++) if ((g = d[p]) && "setAttribute" in g == !!y && (y ? g.localName == y : g.nodeType == 3)) {
      e = g, d[p] = null;
      break;
    }
  }
  if (e == null) {
    if (y == null) return document.createTextNode(S);
    e = document.createElementNS(o, y, S.is && S), u && ($.__m && $.__m(t, d), u = !1), d = null;
  }
  if (y == null) T === S || u && e.data == S || (e.data = S);
  else {
    if (d = y == "textarea" && S.defaultValue != null ? null : d && se.call(e.childNodes), !u && d != null) for (T = {}, p = 0; p < e.attributes.length; p++) T[(g = e.attributes[p]).name] = g.value;
    for (p in T) g = T[p], p == "dangerouslySetInnerHTML" ? v = g : p == "children" || p in S || p == "value" && "defaultValue" in S || p == "checked" && "defaultChecked" in S || Z(e, p, null, g, o);
    for (p in S) g = S[p], p == "children" ? s = g : p == "dangerouslySetInnerHTML" ? l = g : p == "value" ? k = g : p == "checked" ? P = g : u && typeof g != "function" || T[p] === g || Z(e, p, g, T[p], o);
    if (l) u || v && (l.__html == v.__html || l.__html == e.innerHTML) || (e.innerHTML = l.__html), t.__k = [];
    else if (v && (e.innerHTML = ""), tt(t.type == "template" ? e.content : e, ce(s) ? s : [s], t, n, i, y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, d, c, d ? d[0] : n.__k && V(n, 0), u, f), d != null) for (p = d.length; p--; ) xe(d[p]);
    u && y != "textarea" || (p = "value", y == "progress" && k == null ? e.removeAttribute("value") : k != null && (k !== e[p] || y == "progress" && !k || y == "option" && k != T[p]) && Z(e, p, k, T[p], o), p = "checked", P != null && P != e[p] && Z(e, p, P, T[p], o));
  }
  return e;
}
function we(e, t, n) {
  try {
    if (typeof e == "function") {
      var i = typeof e.__u == "function";
      i && e.__u(), i && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    $.__e(o, n);
  }
}
function at(e, t, n) {
  var i, o;
  if ($.unmount && $.unmount(e), (i = e.ref) && (i.current && i.current != e.__e || we(i, null, t)), (i = e.__c) != null) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (d) {
      $.__e(d, t);
    }
    i.base = i.__P = i.__n = null;
  }
  if (i = e.__k) for (o = 0; o < i.length; o++) i[o] && at(i[o], t, n || typeof e.type != "function");
  n || xe(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Et(e, t, n) {
  return this.constructor(e, n);
}
function Ee(e, t, n) {
  var i, o, d, c;
  t == document && (t = document.documentElement), $.__ && $.__(e, t), o = (i = !1) ? null : t.__k, d = [], c = [], ye(t, e = t.__k = It(pe, null, [e]), o || ie, ie, t.namespaceURI, o ? null : t.firstChild ? se.call(t.childNodes) : null, d, o ? o.__e : t.firstChild, i, c), ot(d, e, c), e.props.children = null;
}
se = ae.slice, $ = { __e: function(e, t, n, i) {
  for (var o, d, c; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((d = o.constructor) && d.getDerivedStateFromError != null && (o.setState(d.getDerivedStateFromError(e)), c = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, i || {}), c = o.__d), c) return o.__E = o;
  } catch (u) {
    e = u;
  }
  throw e;
} }, Ye = 0, ne.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = F({}, this.state), typeof e == "function" && (e = e(F({}, n), this.props)), e && F(n, e), e != null && this.__v && (t && this._sb.push(t), Ae(this));
}, ne.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ae(this));
}, ne.prototype.render = pe, M = [], Qe = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Xe = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, de.__r = 0, he = Math.random().toString(8), ee = "__d" + he, Q = "__a" + he, Ze = /(PointerCapture)$|Capture$/i, ve = 0, me = je(!1), ge = je(!0);
var Dt = 0;
function r(e, t, n, i, o, d) {
  t || (t = {});
  var c, u, f = t;
  if ("ref" in f) for (u in f = {}, t) u == "ref" ? c = t[u] : f[u] = t[u];
  var p = { type: e, props: f, key: n, ref: c, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Dt, __i: -1, __u: 0, __source: o, __self: d };
  if (typeof e == "function" && (c = e.defaultProps)) for (u in c) f[u] === void 0 && (f[u] = c[u]);
  return $.vnode && $.vnode(p), p;
}
var X, N, _e, De, le = 0, dt = [], A = $, Re = A.__b, Ue = A.__r, He = A.diffed, Oe = A.__c, Fe = A.unmount, Me = A.__;
function ke(e, t) {
  A.__h && A.__h(N, e, le || t), le = 0;
  var n = N.__H || (N.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function j(e) {
  return le = 1, Rt(ct, e);
}
function Rt(e, t, n) {
  var i = ke(X++, 2);
  if (i.t = e, !i.__c && (i.__ = [ct(void 0, t), function(u) {
    var f = i.__N ? i.__N[0] : i.__[0], p = i.t(f, u);
    f !== p && (i.__N = [p, i.__[1]], i.__c.setState({}));
  }], i.__c = N, !N.__f)) {
    var o = function(u, f, p) {
      if (!i.__c.__H) return !0;
      var l = !1, v = i.__c.props !== u;
      if (i.__c.__H.__.some(function(g) {
        if (g.__N) {
          l = !0;
          var k = g.__[0];
          g.__ = g.__N, g.__N = void 0, k !== g.__[0] && (v = !0);
        }
      }), d) {
        var s = d.call(this, u, f, p);
        return l ? s || v : s;
      }
      return !l || v;
    };
    N.__f = !0;
    var d = N.shouldComponentUpdate, c = N.componentWillUpdate;
    N.componentWillUpdate = function(u, f, p) {
      if (this.__e) {
        var l = d;
        d = void 0, o(u, f, p), d = l;
      }
      c && c.call(this, u, f, p);
    }, N.shouldComponentUpdate = o;
  }
  return i.__N || i.__;
}
function Ut(e, t) {
  var n = ke(X++, 3);
  !A.__s && st(n.__H, t) && (n.__ = e, n.u = t, N.__H.__h.push(n));
}
function Ht(e) {
  return le = 5, lt(function() {
    return { current: e };
  }, []);
}
function lt(e, t) {
  var n = ke(X++, 7);
  return st(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function Ot() {
  for (var e; e = dt.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(re), t.__h.some(be), t.__h = [];
    } catch (n) {
      t.__h = [], A.__e(n, e.__v);
    }
  }
}
A.__b = function(e) {
  N = null, Re && Re(e);
}, A.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Me && Me(e, t);
}, A.__r = function(e) {
  Ue && Ue(e), X = 0;
  var t = (N = e.__c).__H;
  t && (_e === N ? (t.__h = [], N.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(re), t.__h.some(be), t.__h = [], X = 0)), _e = N;
}, A.diffed = function(e) {
  He && He(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (dt.push(t) !== 1 && De === A.requestAnimationFrame || ((De = A.requestAnimationFrame) || Ft)(Ot)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), _e = N = null;
}, A.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(re), n.__h = n.__h.filter(function(i) {
        return !i.__ || be(i);
      });
    } catch (i) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], A.__e(i, n.__v);
    }
  }), Oe && Oe(e, t);
}, A.unmount = function(e) {
  Fe && Fe(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(i) {
    try {
      re(i);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && A.__e(t, n.__v));
};
var Le = typeof requestAnimationFrame == "function";
function Ft(e) {
  var t, n = function() {
    clearTimeout(i), Le && cancelAnimationFrame(t), setTimeout(e);
  }, i = setTimeout(n, 35);
  Le && (t = requestAnimationFrame(n));
}
function re(e) {
  var t = N, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), N = t;
}
function be(e) {
  var t = N;
  e.__c = e.__(), N = t;
}
function st(e, t) {
  return !e || e.length !== t.length || t.some(function(n, i) {
    return n !== e[i];
  });
}
function ct(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const pt = String.raw`\{\{ref:([^{}]+)}}`;
function Be() {
  return new RegExp(pt, "g");
}
function ut(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const i of e.assets)
    i.enabled && i.path.trim() && (!i.shotIds.length || i.shotIds.includes(t.id)) && !t.disabledAssetIds.includes(i.id) && n.set(i.alias, i);
  return n;
}
function ht(e, t, n) {
  const i = n.trim(), o = i.endsWith(".audio"), d = o ? i.slice(0, -6) : i, c = ut(e, t).get(d);
  return c ? !o || c.kind === "video" && c.includeVideoAudio : !1;
}
function Ve(e, t) {
  const n = e.shots.filter((i) => i.enabled);
  return n.length > 0 && n.every((i) => ht(e, i, t));
}
function _t(e, t) {
  const n = [], i = ut(e, t), o = [e.promptPrefix, t.prompt, e.promptSuffix].filter(Boolean).join(`
`), d = [...o.matchAll(Be())].map((_) => _[1].trim()), c = [], u = /* @__PURE__ */ new Set(), f = (_) => {
    u.has(_.id) || (u.add(_.id), c.push(_));
  };
  [...i.values()].filter((_) => _.fixed).sort((_, x) => _.fixedOrder - x.fixedOrder || _.alias.localeCompare(x.alias)).forEach(f);
  for (const _ of d) {
    const x = _.endsWith(".audio") ? _.slice(0, -6) : _, D = i.get(x);
    if (!D) {
      n.push(`未找到或已禁用素材：${_}`);
      continue;
    }
    _.endsWith(".audio") && (D.kind !== "video" || !D.includeVideoAudio) && n.push(`视频伴音未启用：${_}`), f(D);
  }
  const p = c.filter((_) => _.kind === "image"), l = c.filter((_) => _.kind === "video"), v = l.filter((_) => _.includeVideoAudio), s = c.filter((_) => _.kind === "audio"), g = v.length + s.length, k = p.length + l.length + s.length;
  p.length > 9 && n.push(`参考图 ${p.length}/9，超出 H3 上限`), l.length > 3 && n.push(`参考视频 ${l.length}/3，超出 H3 上限`), g > 3 && n.push(`有效音频 ${g}/3，超出 H3 总上限`), k > 12 && n.push(`混合文件 ${k}/12，超出 H3 上限`), g && !p.length && !l.length && n.push("音频参考不能单独使用");
  const P = l.filter((_) => typeof _.durationSeconds == "number");
  for (const _ of l) (_.durationSeconds == null || _.durationSeconds < 2 || _.durationSeconds > 15) && n.push(`视频 ${_.alias} 的时长必须为 2–15 秒`);
  P.reduce((_, x) => _ + (x.durationSeconds ?? 0), 0) > 15 && n.push("参考视频总时长超过 15 秒");
  const T = [...v.map((_) => _.audioDurationSeconds ?? _.durationSeconds), ...s.map((_) => _.durationSeconds)];
  T.some((_) => _ == null || _ < 2 || _ > 15) && n.push("每路有效音频时长必须为 2–15 秒"), T.reduce((_, x) => _ + (x ?? 0), 0) > 15 && n.push("有效音频总时长超过 15 秒");
  const S = /* @__PURE__ */ new Map();
  p.forEach((_, x) => S.set(_.alias, `<Picture ${x + 1}>`)), l.forEach((_, x) => S.set(_.alias, `<Video ${x + 1}>`)), v.forEach((_, x) => S.set(`${_.alias}.audio`, `<Audio ${x + 1}>`)), s.forEach((_, x) => S.set(_.alias, `<Audio ${v.length + x + 1}>`));
  const y = o.replace(Be(), (_, x) => S.get(x.trim()) ?? _), E = [...S.entries()].map(([_, x]) => ({ label: x, alias: _, kind: x.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: y, errors: n, slots: E, mixedFiles: k, audioCount: g };
}
function Mt(e) {
  var o, d, c, u, f, p;
  const t = [];
  (d = (o = e.project) == null ? void 0 : o.name) != null && d.trim() || t.push("Project name 不能为空"), (u = (c = e.project) == null ? void 0 : c.runId) != null && u.trim() || t.push("Run ID 不能为空"), (!Array.isArray(e.shots) || !e.shots.some((l) => l.enabled)) && t.push("至少需要一个启用分镜");
  const n = /* @__PURE__ */ new Set();
  for (const l of e.shots ?? [])
    (!((f = l.id) != null && f.trim()) || n.has(l.id)) && t.push(`分镜 ID 为空或重复：${l.id || "(空)"}`), n.add(l.id), l.durationSeconds > 0 || t.push(`分镜 ${l.id} 的时长必须大于 0`);
  const i = /* @__PURE__ */ new Set();
  for (const l of e.assets ?? []) {
    const v = (p = l.alias) == null ? void 0 : p.toLocaleLowerCase();
    (!l.alias || /[\s{}]/.test(l.alias) || l.alias.endsWith(".audio") || i.has(v)) && t.push(`素材别名无效或重复：${l.alias || "(空)"}`), i.add(v), l.enabled && !l.path && t.push(`素材 ${l.alias} 尚未选择文件`);
  }
  for (const l of e.shots.filter((v) => v.enabled)) t.push(..._t(e, l).errors.map((v) => `${l.title}: ${v}`));
  return [...new Set(t)];
}
function Lt(e, t) {
  const n = [], i = new RegExp(pt, "g");
  let o = 0;
  for (const d of e.matchAll(i)) {
    const c = d.index ?? 0;
    c > o && n.push({ text: e.slice(o, c), reference: !1 }), n.push({ text: d[0], reference: !0, valid: t(d[1]) }), o = c + d[0].length;
  }
  return o < e.length && n.push({ text: e.slice(o), reference: !1 }), n;
}
function fe({ value: e, rows: t, onInput: n, isReferenceValid: i }) {
  const o = Ht(null), d = Lt(e, i), c = (u) => {
    o.current && (o.current.scrollTop = u.currentTarget.scrollTop, o.current.scrollLeft = u.currentTarget.scrollLeft);
  };
  return /* @__PURE__ */ r("span", { class: "td-highlight-textarea", children: [
    /* @__PURE__ */ r("pre", { ref: o, class: "td-highlight-backdrop", "aria-hidden": "true", children: [
      d.map((u, f) => u.reference ? /* @__PURE__ */ r("mark", { class: u.valid ? "valid" : "invalid", children: u.text }, f) : u.text),
      e.endsWith(`
`) && " "
    ] }),
    /* @__PURE__ */ r("textarea", { class: "td-highlight-input", rows: t, value: e, onInput: n, onScroll: c })
  ] });
}
const Bt = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function B(e, t) {
  return Bt[e][t];
}
function ft(e, t) {
  const n = e.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!n || n.startsWith("/") || /^[A-Za-z]:\//.test(n)) return null;
  const i = n.split("/").filter(Boolean), o = i.pop();
  if (!o || i.some((c) => c === "..")) return null;
  const d = new URLSearchParams({ filename: o, type: t });
  return i.length && d.set("subfolder", i.join("/")), `/view?${d.toString()}`;
}
function Vt(e) {
  return ft(e, "input");
}
function We(e) {
  return e.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function qe({ asset: e, compact: t = !1 }) {
  const n = Vt(e.path), i = `td-media-preview ${t ? "compact" : ""}`;
  return n ? e.kind === "image" ? /* @__PURE__ */ r("div", { class: i, children: /* @__PURE__ */ r("img", { src: n, alt: e.alias, loading: "lazy" }) }) : e.kind === "video" ? /* @__PURE__ */ r("div", { class: i, children: /* @__PURE__ */ r("video", { src: n, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ r("div", { class: i, children: /* @__PURE__ */ r("audio", { src: n, controls: !0, preload: "metadata" }) }) : e.path ? /* @__PURE__ */ r("div", { class: `${i} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ r("div", { class: `${i} empty`, children: "尚未选择素材 / No media selected" });
}
function Wt(e) {
  const t = e.reduce((n, i) => {
    const o = /^shot_(\d+)$/i.exec(i.id.trim());
    return o ? Math.max(n, Number(o[1])) : n;
  }, 0);
  return Math.max(t, e.length) + 1;
}
function qt(e, t = 5) {
  return {
    id: `shot_${String(e).padStart(3, "0")}`,
    title: `Shot ${e}`,
    prompt: "",
    negativePrompt: "",
    durationSeconds: t,
    enabled: !0,
    latentRelay: !0,
    secondSampling: !0,
    seed: null,
    disabledAssetIds: []
  };
}
function Je(e, t, n) {
  const i = Wt(e), o = Array.from({ length: t }, (d, c) => qt(i + c, n));
  return [...e, ...o];
}
const mt = (e) => `${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, oe = (e) => JSON.parse(JSON.stringify(e)), Jt = { image: "图片", video: "视频", audio: "音频" };
function Ge(e) {
  var n;
  const t = oe(e);
  return t.schemaVersion = 4, (n = t.project.id) != null && n.trim() || (t.project.id = mt("project")), t.shots = t.shots.map((i) => ({
    ...i,
    latentRelay: i.latentRelay ?? !0,
    secondSampling: i.secondSampling ?? !0
  })), t;
}
function Gt(e) {
  return e.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function Kt(e) {
  const t = mt(e);
  return { id: t, alias: t, kind: e, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: e === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function Yt(e, t, n) {
  const i = new FormData();
  i.append("projectName", e), i.append("kind", t), i.append("file", n);
  const o = await fetch("/theodore-director/v1/assets", { method: "POST", body: i }), d = await o.json();
  if (!o.ok || !d.path) throw new Error(d.error || `HTTP ${o.status}`);
  return d.path;
}
async function Qt(e, t, n) {
  const i = new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t.id,
    activeIndex: String(n)
  }), o = await fetch(`/theodore-director/v1/generated-video?${i.toString()}`), d = await o.json();
  if (!o.ok) throw new Error(d.error || `HTTP ${o.status}`);
  return d;
}
async function Xt(e) {
  var i;
  if ((i = navigator.clipboard) != null && i.writeText)
    try {
      await navigator.clipboard.writeText(e);
      return;
    } catch {
    }
  const t = document.createElement("textarea");
  t.value = e, t.style.position = "fixed", t.style.opacity = "0", document.body.append(t), t.select();
  const n = document.execCommand("copy");
  if (t.remove(), !n) throw new Error("浏览器拒绝写入剪贴板");
}
function Zt({ initial: e, onSave: t, onClose: n, supportsSecondSampling: i }) {
  const [o, d] = j(() => Ge(e)), [c, u] = j("shots"), [f, p] = j(0), [l, v] = j(() => navigator.language.startsWith("zh") ? "zh" : "en"), [s, g] = j({}), [k, P] = j(!1), [T, S] = j(!0), [y, E] = j(0), [_, x] = j({ found: !1 }), [D, W] = j(!1), [L, q] = j(""), [R, U] = j(!1), [J, G] = j([]), [Se, gt] = j("5"), [ze, bt] = j("1"), [$e, vt] = j("5"), z = o.shots[Math.min(f, o.shots.length - 1)], C = lt(() => z ? _t(o, z) : null, [o, z]), Y = z != null && z.enabled ? o.shots.slice(0, f).filter((a) => a.enabled).length : -1, ue = o.shots.length > 0 && o.shots.every((a) => a.secondSampling), Te = _.path ? ft(_.path, "output") : null, w = (a) => d((h) => {
    const m = oe(h);
    return a(m), m;
  }), Ce = (a, h) => w((m) => {
    const b = a + h;
    b < 0 || b >= m.shots.length || ([m.shots[a], m.shots[b]] = [m.shots[b], m.shots[a]], p(b));
  }), xt = (a) => w((h) => {
    h.shots.length <= 1 || (h.shots.splice(a, 1), p((m) => m > a ? m - 1 : m === a ? Math.min(a, h.shots.length - 1) : m));
  }), yt = () => {
    G(oe(o.shots)), U(!0);
  }, wt = () => {
    const a = Number(Se);
    if (!Number.isFinite(a) || a <= 0) {
      window.alert(l === "zh" ? "统一时长必须大于 0 秒" : "The shared duration must be greater than 0 seconds.");
      return;
    }
    G((h) => h.map((m) => ({ ...m, durationSeconds: a })));
  }, kt = () => {
    const a = Number(ze), h = Number($e);
    if (!Number.isInteger(a) || a < 1 || a > 100) {
      window.alert(l === "zh" ? "新增镜头数量必须是 1–100 的整数" : "The shot count must be an integer from 1 to 100.");
      return;
    }
    if (!Number.isFinite(h) || h <= 0) {
      window.alert(l === "zh" ? "新增镜头时长必须大于 0 秒" : "The new-shot duration must be greater than 0 seconds.");
      return;
    }
    G((m) => Je(m, a, h));
  }, St = () => {
    if (J.some((a) => !Number.isFinite(a.durationSeconds) || a.durationSeconds <= 0)) {
      window.alert(l === "zh" ? "每个镜头的时长都必须大于 0 秒" : "Every shot duration must be greater than 0 seconds.");
      return;
    }
    w((a) => {
      a.shots = oe(J);
    }), p((a) => Math.min(a, J.length - 1)), U(!1);
  }, zt = () => {
    const a = URL.createObjectURL(new Blob([JSON.stringify(o, null, 2)], { type: "application/json" })), h = document.createElement("a");
    h.href = a, h.download = `${Gt(o.project.name)}.director.json`, h.click(), URL.revokeObjectURL(a);
  }, $t = () => {
    const a = Mt(o);
    if (a.length) {
      window.alert(`计划未通过校验：

${a.join(`
`)}`);
      return;
    }
    t(o);
  };
  return Ut(() => {
    let a = !1;
    return !(z != null && z.enabled) || Y < 0 ? (x({ found: !1 }), W(!1), () => {
      a = !0;
    }) : (W(!0), Qt(o, z, Y).then((h) => {
      a || x(h);
    }).catch((h) => {
      a || x({ found: !1, error: String(h) });
    }).finally(() => {
      a || W(!1);
    }), () => {
      a = !0;
    });
  }, [o.project.name, o.project.runId, z == null ? void 0 : z.id, z == null ? void 0 : z.enabled, Y, y]), /* @__PURE__ */ r("div", { class: "td-shell", children: [
    /* @__PURE__ */ r("header", { children: [
      /* @__PURE__ */ r("h1", { children: B(l, "title") }),
      /* @__PURE__ */ r("div", { class: "td-actions", children: [
        /* @__PURE__ */ r("button", { onClick: zt, children: "导出 / Export" }),
        /* @__PURE__ */ r("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ r("input", { type: "file", accept: "application/json,.json", onChange: async (a) => {
            var m;
            const h = (m = a.currentTarget.files) == null ? void 0 : m[0];
            if (h)
              try {
                const b = JSON.parse(await h.text());
                if (!b.project || !Array.isArray(b.shots) || !Array.isArray(b.assets)) throw new Error("不是有效的 Theodore Director Plan");
                d(Ge(b)), p(0);
              } catch (b) {
                window.alert(String(b));
              }
          } })
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => v(l === "zh" ? "en" : "zh"), children: l === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: $t, children: B(l, "save") }),
        /* @__PURE__ */ r("button", { onClick: n, children: B(l, "close") })
      ] })
    ] }),
    /* @__PURE__ */ r("nav", { children: ["shots", "assets", "settings"].map((a) => /* @__PURE__ */ r("button", { class: c === a ? "active" : "", onClick: () => u(a), children: B(l, a) })) }),
    /* @__PURE__ */ r("main", { children: [
      c === "shots" && /* @__PURE__ */ r("div", { class: "td-shots", children: [
        /* @__PURE__ */ r("aside", { class: "td-shot-sidebar", children: [
          i && /* @__PURE__ */ r("button", { class: `wide td-bulk-toggle ${ue ? "active" : ""}`, onClick: () => w((a) => {
            const h = !a.shots.every((m) => m.secondSampling);
            a.shots.forEach((m) => {
              m.secondSampling = h;
            });
          }), children: l === "zh" ? `全部二次采样：${ue ? "开" : "关"}` : `Second sampling for all: ${ue ? "ON" : "OFF"}` }),
          /* @__PURE__ */ r("div", { class: "td-shot-list", children: o.shots.map((a, h) => /* @__PURE__ */ r("div", { class: `td-shot-card ${h === f ? "selected" : ""}`, onClick: () => p(h), children: [
            /* @__PURE__ */ r("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ r("button", { class: "td-shot-delete", disabled: o.shots.length <= 1, title: l === "zh" ? o.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : o.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": l === "zh" ? "删除镜头" : "Delete shot", onClick: (m) => {
              m.stopPropagation(), xt(h);
            }, children: "×" }) }),
            /* @__PURE__ */ r("strong", { children: [
              h + 1,
              ". ",
              a.title
            ] }),
            /* @__PURE__ */ r("span", { children: [
              a.durationSeconds,
              "s · ",
              a.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-move-actions", children: [
              /* @__PURE__ */ r("button", { title: l === "zh" ? "上移镜头" : "Move shot up", onClick: (m) => {
                m.stopPropagation(), Ce(h, -1);
              }, children: "↑" }),
              /* @__PURE__ */ r("button", { title: l === "zh" ? "下移镜头" : "Move shot down", onClick: (m) => {
                m.stopPropagation(), Ce(h, 1);
              }, children: "↓" })
            ] })
          ] }, a.id)) }),
          /* @__PURE__ */ r("button", { class: "wide", onClick: () => w((a) => {
            const h = a.shots.length;
            a.shots = Je(a.shots, 1, 5), p(h);
          }), children: [
            "＋ ",
            B(l, "addShot")
          ] }),
          /* @__PURE__ */ r("div", { class: "td-shot-batch-entry", children: /* @__PURE__ */ r("button", { class: "wide", onClick: yt, children: l === "zh" ? "批量处理镜头" : "Batch edit shots" }) })
        ] }),
        z && /* @__PURE__ */ r("section", { class: "td-form", children: [
          /* @__PURE__ */ r("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ r("label", { children: [
              "ID",
              /* @__PURE__ */ r("input", { value: z.id, onInput: (a) => w((h) => {
                h.shots[f].id = a.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ r("input", { value: z.title, onInput: (a) => w((h) => {
                h.shots[f].title = a.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: z.durationSeconds, onInput: (a) => w((h) => {
                h.shots[f].durationSeconds = Number(a.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: z.enabled, onChange: (a) => w((h) => {
                  h.shots[f].enabled = a.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: Y === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: z.latentRelay, onChange: (a) => w((h) => {
                  h.shots[f].latentRelay = a.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: [
                  "latent接力 / Relay",
                  Y === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              i && /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: "开启时执行 RTX 超分和第二次 H3 采样，关闭时直接使用第一采画面", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: z.secondSampling, onChange: (a) => w((h) => {
                  h.shots[f].secondSampling = a.currentTarget.checked;
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
            /* @__PURE__ */ r(fe, { rows: 10, value: z.prompt, isReferenceValid: (a) => ht(o, z, a), onInput: (a) => w((h) => {
              h.shots[f].prompt = a.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ r("textarea", { rows: 3, value: z.negativePrompt, onInput: (a) => w((h) => {
              h.shots[f].negativePrompt = a.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ r("legend", { children: "本镜头素材 / Shot media" }),
            o.assets.map((a) => {
              const h = !z.disabledAssetIds.includes(a.id), m = We(a.path) || a.alias, b = `{{ref:${a.alias}}}`;
              return /* @__PURE__ */ r("div", { class: `td-shot-media-card ${h ? "" : "disabled"}`, children: [
                /* @__PURE__ */ r("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ r(qe, { asset: a, compact: !0 }),
                  /* @__PURE__ */ r("span", { class: "td-shot-media-kind", children: l === "zh" ? Jt[a.kind] : a.kind }),
                  /* @__PURE__ */ r("label", { class: "td-shot-media-toggle", title: h ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ r("input", { type: "checkbox", checked: h, onChange: (I) => w((H) => {
                    const O = H.shots[f].disabledAssetIds;
                    H.shots[f].disabledAssetIds = I.currentTarget.checked ? O.filter((K) => K !== a.id) : [.../* @__PURE__ */ new Set([...O, a.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ r("button", { class: `td-shot-media-name ${L === a.id ? "copied" : ""}`, title: `${m}
${l === "zh" ? "点击复制" : "Click to copy"} ${b}`, onClick: async () => {
                  try {
                    await Xt(b), q(a.id), window.setTimeout(() => q((I) => I === a.id ? "" : I), 1400);
                  } catch (I) {
                    window.alert(`${l === "zh" ? "复制失败" : "Copy failed"}: ${String(I)}`);
                  }
                }, children: [
                  /* @__PURE__ */ r("span", { children: m }),
                  L === a.id && /* @__PURE__ */ r("em", { children: l === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, a.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ r("aside", { class: "td-preview", children: [
          /* @__PURE__ */ r("details", { open: k, onToggle: (a) => P(a.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: B(l, "preview") }),
              /* @__PURE__ */ r("span", { class: "td-summary-counts", children: [
                "Picture ",
                (C == null ? void 0 : C.slots.filter((a) => a.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (C == null ? void 0 : C.slots.filter((a) => a.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (C == null ? void 0 : C.audioCount) ?? 0,
                "/3 · Files ",
                (C == null ? void 0 : C.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body", children: [
              C != null && C.errors.length ? /* @__PURE__ */ r("ul", { class: "errors", children: C.errors.map((a) => /* @__PURE__ */ r("li", { children: a })) }) : /* @__PURE__ */ r("p", { class: "ok", children: B(l, "noErrors") }),
              /* @__PURE__ */ r("ol", { children: C == null ? void 0 : C.slots.map((a) => /* @__PURE__ */ r("li", { children: [
                /* @__PURE__ */ r("code", { children: a.label }),
                " ← ",
                a.alias
              ] })) }),
              /* @__PURE__ */ r("pre", { children: C == null ? void 0 : C.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ r("details", { open: T, onToggle: (a) => S(a.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: l === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ r("span", { class: `td-result-state ${_.found ? "found" : ""}`, children: D ? l === "zh" ? "查询中" : "Checking" : _.found ? l === "zh" ? "已生成" : "Found" : l === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ r("div", { class: "td-result-actions", children: /* @__PURE__ */ r("button", { onClick: () => E((a) => a + 1), children: [
                "↻ ",
                l === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              D ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: l === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : _.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: l === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again." }) : _.found && Te ? /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
                /* @__PURE__ */ r("video", { src: Te, controls: !0, preload: "metadata", playsInline: !0 }, _.path),
                /* @__PURE__ */ r("div", { class: "td-generated-meta", title: _.path, children: [
                  _.path,
                  _.bytes ? ` · ${(_.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                ] })
              ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: l === "zh" ? "未在预期路径找到本段视频" : "No video found at the expected path" })
            ] })
          ] })
        ] })
      ] }),
      c === "assets" && /* @__PURE__ */ r("div", { class: "td-assets", children: [
        /* @__PURE__ */ r("div", { class: "td-toolbar", children: ["image", "video", "audio"].map((a) => /* @__PURE__ */ r("button", { onClick: () => w((h) => h.assets.push(Kt(a))), children: [
          "＋ ",
          a
        ] })) }),
        o.assets.map((a, h) => /* @__PURE__ */ r("article", { children: /* @__PURE__ */ r("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ r("div", { class: "td-grid", children: [
              /* @__PURE__ */ r("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ r("input", { value: a.alias, onInput: (m) => w((b) => {
                  b.assets[h].alias = m.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ r("select", { value: a.kind, onChange: (m) => w((b) => {
                  b.assets[h].kind = m.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ r("option", { children: "image" }),
                  /* @__PURE__ */ r("option", { children: "video" }),
                  /* @__PURE__ */ r("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ r("input", { value: a.path, onInput: (m) => w((b) => {
                  b.assets[h].path = m.currentTarget.value;
                }) }),
                /* @__PURE__ */ r("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ r("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ r("input", { type: "file", accept: a.kind === "image" ? "image/*" : a.kind === "video" ? "video/*" : "audio/*", onChange: async (m) => {
                      var H;
                      const b = m.currentTarget, I = (H = b.files) == null ? void 0 : H[0];
                      if (I) {
                        g((O) => ({ ...O, [a.id]: I.name }));
                        try {
                          const O = await Yt(o.project.name, a.kind, I);
                          w((K) => {
                            const Ie = K.assets.find((Tt) => Tt.id === a.id);
                            Ie && (Ie.path = O);
                          });
                        } catch (O) {
                          window.alert(String(O));
                        } finally {
                          g((O) => {
                            const K = { ...O };
                            return delete K[a.id], K;
                          }), b.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ r("span", { class: "td-file-name", title: s[a.id] || a.path, children: s[a.id] ? `${l === "zh" ? "上传中" : "Uploading"}: ${s[a.id]}` : We(a.path) || (l === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ r("input", { type: "number", min: "0", step: "0.1", value: a.durationSeconds ?? "", onInput: (m) => w((b) => {
                  b.assets[h].durationSeconds = m.currentTarget.value ? Number(m.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ r("input", { type: "number", value: a.fixedOrder, onInput: (m) => w((b) => {
                  b.assets[h].fixedOrder = Number(m.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ r("input", { value: a.shotIds.join(", "), onInput: (m) => w((b) => {
                  b.assets[h].shotIds = m.currentTarget.value.split(",").map((I) => I.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-flags", children: [
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: a.enabled, onChange: (m) => w((b) => {
                  b.assets[h].enabled = m.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: a.fixed, onChange: (m) => w((b) => {
                  b.assets[h].fixed = m.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              a.kind === "video" && /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: a.includeVideoAudio, onChange: (m) => w((b) => {
                  b.assets[h].includeVideoAudio = m.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ r("button", { class: "danger", onClick: () => w((m) => {
                m.assets.splice(h, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ r(qe, { asset: a })
        ] }) }, a.id))
      ] }),
      c === "settings" && /* @__PURE__ */ r("section", { class: "td-form settings", children: [
        /* @__PURE__ */ r("label", { children: [
          "Project name",
          /* @__PURE__ */ r("input", { value: o.project.name, onInput: (a) => w((h) => {
            h.project.name = a.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Run ID",
          /* @__PURE__ */ r("input", { value: o.project.runId, onInput: (a) => w((h) => {
            h.project.runId = a.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "FPS",
          /* @__PURE__ */ r("input", { type: "number", value: o.defaults.fps, onInput: (a) => w((h) => {
            h.defaults.fps = Number(a.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Base seed",
          /* @__PURE__ */ r("input", { type: "number", value: o.defaults.baseSeed, onInput: (a) => w((h) => {
            h.defaults.baseSeed = Number(a.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ r(fe, { value: o.promptPrefix, isReferenceValid: (a) => Ve(o, a), onInput: (a) => w((h) => {
            h.promptPrefix = a.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ r(fe, { value: o.promptSuffix, isReferenceValid: (a) => Ve(o, a), onInput: (a) => w((h) => {
            h.promptSuffix = a.currentTarget.value;
          }) })
        ] })
      ] })
    ] }),
    R && /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": l === "zh" ? "批量处理镜头" : "Batch edit shots", children: [
      /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("h2", { children: l === "zh" ? "批量处理镜头" : "Batch edit shots" }),
          /* @__PURE__ */ r("p", { children: l === "zh" ? `当前共 ${J.length} 个镜头` : `${J.length} shots` })
        ] }),
        /* @__PURE__ */ r("button", { "aria-label": l === "zh" ? "关闭" : "Close", onClick: () => U(!1), children: "×" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-tools", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            l === "zh" ? "所有镜头时长" : "Duration for all shots",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: Se, onInput: (a) => gt(a.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: l === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: wt, children: l === "zh" ? "一键设置所有时长" : "Set all durations" })
        ] }),
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            l === "zh" ? "新增镜头数量" : "New shot count",
            /* @__PURE__ */ r("input", { type: "number", min: "1", max: "100", step: "1", value: ze, onInput: (a) => bt(a.currentTarget.value) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            l === "zh" ? "每个镜头时长" : "Duration per shot",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: $e, onInput: (a) => vt(a.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: l === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: kt, children: l === "zh" ? "批量新增镜头" : "Add shots" })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-table", children: [
        /* @__PURE__ */ r("div", { class: "td-batch-row td-batch-table-head", children: [
          /* @__PURE__ */ r("span", { children: "#" }),
          /* @__PURE__ */ r("span", { children: l === "zh" ? "镜头名" : "Shot name" }),
          /* @__PURE__ */ r("span", { children: l === "zh" ? "具体时长" : "Duration" }),
          /* @__PURE__ */ r("span", { children: [
            "latent ",
            l === "zh" ? "接力" : "relay"
          ] })
        ] }),
        J.map((a, h) => /* @__PURE__ */ r("div", { class: "td-batch-row", children: [
          /* @__PURE__ */ r("span", { children: h + 1 }),
          /* @__PURE__ */ r("input", { value: a.title, "aria-label": `${l === "zh" ? "镜头名" : "Shot name"} ${h + 1}`, onInput: (m) => G((b) => b.map((I, H) => H === h ? { ...I, title: m.currentTarget.value } : I)) }),
          /* @__PURE__ */ r("label", { class: "td-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: a.durationSeconds, onInput: (m) => G((b) => b.map((I, H) => H === h ? { ...I, durationSeconds: Number(m.currentTarget.value) } : I)) }),
            /* @__PURE__ */ r("span", { children: l === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-relay", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: a.latentRelay, onChange: (m) => G((b) => b.map((I, H) => H === h ? { ...I, latentRelay: m.currentTarget.checked } : I)) }),
            /* @__PURE__ */ r("span", { children: a.latentRelay ? l === "zh" ? "开" : "ON" : l === "zh" ? "关" : "OFF" })
          ] })
        ] }, a.id))
      ] }),
      /* @__PURE__ */ r("footer", { children: [
        /* @__PURE__ */ r("button", { onClick: () => U(!1), children: l === "zh" ? "取消" : "Cancel" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: St, children: l === "zh" ? "应用更改" : "Apply changes" })
      ] })
    ] }) })
  ] });
}
function en(e, t, n = !1) {
  const i = document.getElementById("theodore-director-modal");
  if (i) {
    i.focus();
    return;
  }
  const o = document.createElement("div");
  o.id = "theodore-director-modal", o.className = "td-modal", o.tabIndex = -1, document.body.append(o);
  const d = (u) => {
    u.key === "Escape" && c();
  }, c = () => {
    document.removeEventListener("keydown", d), Ee(null, o), o.remove();
  };
  document.addEventListener("keydown", d), Ee(/* @__PURE__ */ r(Zt, { initial: e, onSave: (u) => {
    t(u), c();
  }, onClose: c, supportsSecondSampling: n }), o), o.focus();
}
const tn = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-highlight-textarea{position:relative;display:block;width:100%;min-width:0}.td-highlight-backdrop,.td-form textarea.td-highlight-input{box-sizing:border-box;width:100%;margin:0;padding:7px 9px;font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,monospace;font-size:inherit;line-height:1.45;letter-spacing:normal;-moz-tab-size:8;tab-size:8;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.td-highlight-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border:1px solid transparent;border-radius:6px;background:#222a35;color:var(--td-text);pointer-events:none}.td-form textarea.td-highlight-input{position:relative;z-index:1;display:block;background:transparent;color:transparent;caret-color:var(--td-text);-webkit-text-fill-color:transparent}.td-highlight-input::selection{background:#5898d46b}.td-highlight-backdrop mark{padding:1px 2px;border-radius:3px;color:inherit}.td-highlight-backdrop mark.valid{background:#1d6b50;color:#bfffe6}.td-highlight-backdrop mark.invalid{background:#7a2931;color:#ffd1d5;text-decoration:underline;text-decoration-color:#ff9aa4;text-underline-offset:2px}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}.td-shot-sidebar{display:flex;flex-direction:column}.td-shot-list{flex:none}.td-shot-batch-entry{display:flex;align-items:flex-end;flex:1;min-height:90px;padding-top:14px}.td-shot-batch-entry button{border-color:#527061;background:#1b2c28;color:var(--td-accent)}.td-batch-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:28px;background:#05080dbd;box-sizing:border-box}.td-batch-panel{display:flex;flex-direction:column;width:min(920px,100%);max-height:min(820px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-batch-header h2{font-size:18px;margin:0}.td-batch-header p{margin:3px 0 0;color:var(--td-muted)}.td-batch-header>button{font-size:20px;line-height:1;padding:5px 9px}.td-batch-tools{display:grid;grid-template-columns:1fr 1.4fr;gap:12px;padding:14px 18px;border-bottom:1px solid var(--td-line);background:#151b23}.td-batch-tools>div{display:flex;align-items:end;gap:8px;padding:10px;border:1px solid var(--td-line);border-radius:7px}.td-batch-tools label{display:flex;flex:1;flex-direction:column;gap:4px;color:var(--td-muted);white-space:nowrap}.td-batch-tools label>span,.td-batch-duration{display:flex;align-items:center;gap:6px}.td-batch-tools input{width:100%}.td-batch-tools em{color:var(--td-muted);font-style:normal}.td-batch-tools button{white-space:nowrap}.td-batch-table{overflow:auto;padding:0 18px}.td-batch-row{display:grid;grid-template-columns:42px minmax(180px,1fr) 150px 120px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-batch-table-head{position:sticky;top:0;z-index:1;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-batch-duration input{min-width:0;width:100%}.td-batch-duration>span{color:var(--td-muted)}.td-batch-relay{display:flex;align-items:center;gap:7px;justify-content:flex-start;color:var(--td-text)}.td-batch-relay input{width:17px;height:17px;margin:0}.td-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}", Ke = "theodore-director-styles";
function nn() {
  if (document.getElementById(Ke)) return;
  const e = document.createElement("style");
  e.id = Ke, e.textContent = tn, document.head.append(e);
}
nn();
const rn = "/scripts/app.js";
import(
  /* @vite-ignore */
  rn
).then(({ app: e }) => {
  e.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(t, n) {
      if (n.name !== "TheodoreDirector_Project") return;
      const i = t.prototype.onNodeCreated;
      t.prototype.onNodeCreated = function() {
        var d, c;
        i == null || i.apply(this);
        const o = (d = this.widgets) == null ? void 0 : d.find((u) => u.name === "plan_json");
        o && (o.type = "hidden", o.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          try {
            const u = JSON.parse(String(o.value));
            en(u, (f) => {
              var p, l;
              o.value = JSON.stringify(f, null, 2), this.setDirtyCanvas(!0, !0), (l = (p = e.graph) == null ? void 0 : p.setDirtyCanvas) == null || l.call(p, !0, !0);
            }, !0);
          } catch (u) {
            window.alert(`Theodore Director: ${u instanceof Error ? u.message : String(u)}`);
          }
        }), this.size = [Math.max(((c = this.size) == null ? void 0 : c[0]) ?? 300, 360), 110]);
      };
    }
  });
});
