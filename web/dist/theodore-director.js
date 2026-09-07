var Re, W, Ct, fe, tt, Tt, It, Fe, $e, we, jt, Ke, Ve, qe, Ee = {}, Ae = [], sr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Le = Array.isArray;
function he(e, t) {
  for (var o in t) e[o] = t[o];
  return e;
}
function Je(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function ir(e, t, o) {
  var n, d, s, a = {};
  for (s in t) s == "key" ? n = t[s] : s == "ref" ? d = t[s] : a[s] = t[s];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Re.call(arguments, 2) : o), typeof e == "function" && e.defaultProps != null) for (s in e.defaultProps) a[s] === void 0 && (a[s] = e.defaultProps[s]);
  return Ce(e, a, n, d, null);
}
function Ce(e, t, o, n, d) {
  var s = { type: e, props: t, key: o, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: d ?? ++Ct, __i: -1, __u: 0 };
  return d == null && W.vnode != null && W.vnode(s), s;
}
function Ne(e) {
  return e.children;
}
function Te(e, t) {
  this.props = e, this.context = t;
}
function ve(e, t) {
  if (t == null) return e.__ ? ve(e.__, e.__i + 1) : null;
  for (var o; t < e.__k.length; t++) if ((o = e.__k[t]) != null && o.__e != null) return o.__e;
  return typeof e.type == "function" ? ve(e) : null;
}
function dr(e) {
  if (e.__P && e.__d) {
    var t = e.__v, o = t.__e, n = [], d = [], s = he({}, t);
    s.__v = t.__v + 1, W.vnode && W.vnode(s), Ge(e.__P, s, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [o] : null, n, o ?? ve(t), !!(32 & t.__u), d), s.__v = t.__v, s.__.__k[s.__i] = s, Rt(n, s, d), t.__e = t.__ = null, s.__e != o && Et(s);
  }
}
function Et(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), Et(e);
}
function rt(e) {
  (!e.__d && (e.__d = !0) && fe.push(e) && !Pe.__r++ || tt != W.debounceRendering) && ((tt = W.debounceRendering) || Tt)(Pe);
}
function Pe() {
  try {
    for (var e, t = 1; fe.length; ) fe.length > t && fe.sort(It), e = fe.shift(), t = fe.length, dr(e);
  } finally {
    fe.length = Pe.__r = 0;
  }
}
function At(e, t, o, n, d, s, a, h, g, p, x) {
  var c, l, y, j, k, I, T = n && n.__k || Ae, u = t.length;
  for (g = ar(o, t, T, g, u), c = 0; c < u; c++) (y = o.__k[c]) != null && (l = y.__i != -1 && T[y.__i] || Ee, y.__i = c, I = Ge(e, y, l, d, s, a, h, g, p, x), j = y.__e, y.ref && l.ref != y.ref && (l.ref && Qe(l.ref, null, y), x.push(y.ref, y.__c || j, y)), k == null && j != null && (k = j), 4 & y.__u ? (g = Pt(y, g, e), l.__e && (l.__e = null)) : typeof y.type == "function" && I !== void 0 ? g = I : j && (g = j.nextSibling), y.__u &= -7);
  return o.__e = k, g;
}
function ar(e, t, o, n, d) {
  var s, a, h, g, p, x = o.length, c = x, l = 0;
  for (e.__k = new Array(d), s = 0; s < d; s++) (a = t[s]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = e.__k[s] = Ce(null, a, null, null, null) : Le(a) ? a = e.__k[s] = Ce(Ne, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? a = e.__k[s] = Ce(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : e.__k[s] = a, g = s + l, a.__ = e, a.__b = e.__b + 1, h = null, (p = a.__i = lr(a, o, g, c)) != -1 && (c--, (h = o[p]) && (h.__u |= 2)), h == null || h.__v == null ? (p == -1 && (d > x ? l-- : d < x && l++), typeof a.type != "function" && (a.__u |= 4)) : p != g && (p == g - 1 ? l-- : p == g + 1 ? l++ : (p > g ? l-- : l++, a.__u |= 4))) : e.__k[s] = null;
  if (c) for (s = 0; s < x; s++) (h = o[s]) != null && (2 & h.__u) == 0 && (h.__e == n && (n = ve(h)), Nt(h, h));
  return n;
}
function Pt(e, t, o) {
  var n, d;
  if (typeof e.type == "function") {
    for (n = e.__k, d = 0; n && d < n.length; d++) n[d] && (n[d].__ = e, t = Pt(n[d], t, o));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = ve(e)), t = o.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function lr(e, t, o, n) {
  var d, s, a, h = e.key, g = e.type, p = t[o], x = p != null && (2 & p.__u) == 0;
  if (p === null && h == null || x && h == p.key && g == p.type) return o;
  if (n > (x ? 1 : 0)) {
    for (d = o - 1, s = o + 1; d >= 0 || s < t.length; ) if ((p = t[a = d >= 0 ? d-- : s++]) != null && (2 & p.__u) == 0 && h == p.key && g == p.type) return a;
  }
  return -1;
}
function ot(e, t, o) {
  t[0] == "-" ? e.setProperty(t, o ?? "") : e[t] = o == null ? "" : typeof o != "number" || sr.test(t) ? o : o + "px";
}
function Se(e, t, o, n, d) {
  var s, a;
  e: if (t == "style") if (typeof o == "string") e.style.cssText = o;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (t in n) o && t in o || ot(e.style, t, "");
    if (o) for (t in o) n && o[t] == n[t] || ot(e.style, t, o[t]);
  }
  else if (t[0] == "o" && t[1] == "n") s = t != (t = t.replace(jt, "$1")), a = t.toLowerCase(), t = a in e || t == "onFocusOut" || t == "onFocusIn" ? a.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = o, o ? n ? o[we] = n[we] : (o[we] = Ke, e.addEventListener(t, s ? qe : Ve, s)) : e.removeEventListener(t, s ? qe : Ve, s);
  else {
    if (d == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = o ?? "";
      break e;
    } catch {
    }
    typeof o == "function" || (o == null || o === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && o == 1 ? "" : o));
  }
}
function nt(e) {
  return function(t) {
    if (this.l) {
      var o = this.l[t.type + e];
      if (t[$e] == null) t[$e] = Ke++;
      else if (t[$e] < o[we]) return;
      return o(W.event ? W.event(t) : t);
    }
  };
}
function Ge(e, t, o, n, d, s, a, h, g, p) {
  var x, c, l, y, j, k, I, T, u, w, b, C, $, D, L, v, M = t.type;
  if (t.constructor !== void 0) return null;
  128 & o.__u && (g = !!(32 & o.__u), s = [h = t.__e = o.__e]), (x = W.__b) && x(t);
  e: if (typeof M == "function") {
    c = a.length;
    try {
      if (u = t.props, w = M.prototype && M.prototype.render, b = (x = M.contextType) && n[x.__c], C = x ? b ? b.props.value : x.__ : n, o.__c ? T = (l = t.__c = o.__c).__ = l.__E : (w ? t.__c = l = new M(u, C) : (t.__c = l = new Te(u, C), l.constructor = M, l.render = pr), b && b.sub(l), l.state || (l.state = {}), l.__n = n, y = l.__d = !0, l.__h = [], l._sb = []), w && l.__s == null && (l.__s = l.state), w && M.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = he({}, l.__s)), he(l.__s, M.getDerivedStateFromProps(u, l.__s))), j = l.props, k = l.state, l.__v = t, y) w && M.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), w && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (w && M.getDerivedStateFromProps == null && u !== j && l.componentWillReceiveProps != null && l.componentWillReceiveProps(u, C), t.__v == o.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(u, l.__s, C) === !1) {
          t.__v != o.__v && (l.props = u, l.state = l.__s, l.__d = !1), t.__e = o.__e, t.__k = o.__k, t.__k.some(function(O) {
            O && (O.__ = t);
          }), Ae.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && a.push(l), h = ve(o);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(u, l.__s, C), w && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(j, k, I);
        });
      }
      if (l.context = C, l.props = u, l.__P = e, l.__e = !1, $ = W.__r, D = 0, w) l.state = l.__s, l.__d = !1, $ && $(t), x = l.render(l.props, l.state, l.context), Ae.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, $ && $(t), x = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++D < 25);
      l.state = l.__s, l.getChildContext != null && (n = he(he({}, n), l.getChildContext())), w && !y && l.getSnapshotBeforeUpdate != null && (I = l.getSnapshotBeforeUpdate(j, k)), L = x != null && x.type === Ne && x.key == null ? Lt(x.props.children) : x, h = At(e, Le(L) ? L : [L], t, o, n, d, s, a, h, g, p), l.base = t.__e, t.__u &= -161, l.__h.length && a.push(l), T && (l.__E = l.__ = null);
    } catch (O) {
      if (a.length = c, t.__v = null, g || s != null) {
        if (O.then) {
          for (t.__u |= g ? 160 : 128; h && h.nodeType == 8 && h.nextSibling; ) h = h.nextSibling;
          s != null && (s[s.indexOf(h)] = null), t.__e = h;
        } else if (s != null) for (v = s.length; v--; ) Je(s[v]);
      } else t.__e = o.__e;
      t.__k == null && (t.__k = o.__k || []), O.then || Mt(t), W.__e(O, t, o);
    }
  } else s == null && t.__v == o.__v ? (t.__k = o.__k, t.__e = o.__e) : h = t.__e = cr(o.__e, t, o, n, d, s, a, g, p);
  return (x = W.diffed) && x(t), 128 & t.__u ? void 0 : h;
}
function Mt(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Mt));
}
function Rt(e, t, o) {
  for (var n = 0; n < o.length; n++) Qe(o[n], o[++n], o[++n]);
  W.__c && W.__c(t, e), e.some(function(d) {
    try {
      e = d.__h, d.__h = [], e.some(function(s) {
        s.call(d);
      });
    } catch (s) {
      W.__e(s, d.__v);
    }
  });
}
function Lt(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : Le(e) ? e.map(Lt) : e.constructor !== void 0 ? null : he({}, e);
}
function cr(e, t, o, n, d, s, a, h, g) {
  var p, x, c, l, y, j, k, I = o.props || Ee, T = t.props, u = t.type;
  if (u == "svg" ? d = "http://www.w3.org/2000/svg" : u == "math" ? d = "http://www.w3.org/1998/Math/MathML" : d || (d = "http://www.w3.org/1999/xhtml"), s != null) {
    for (p = 0; p < s.length; p++) if ((y = s[p]) && "setAttribute" in y == !!u && (u ? y.localName == u : y.nodeType == 3)) {
      e = y, s[p] = null;
      break;
    }
  }
  if (e == null) {
    if (u == null) return document.createTextNode(T);
    e = document.createElementNS(d, u, T.is && T), h && (W.__m && W.__m(t, s), h = !1), s = null;
  }
  if (u == null) I === T || h && e.data == T || (e.data = T);
  else {
    if (s = u == "textarea" && T.defaultValue != null ? null : s && Re.call(e.childNodes), !h && s != null) for (I = {}, p = 0; p < e.attributes.length; p++) I[(y = e.attributes[p]).name] = y.value;
    for (p in I) y = I[p], p == "dangerouslySetInnerHTML" ? c = y : p == "children" || p in T || p == "value" && "defaultValue" in T || p == "checked" && "defaultChecked" in T || Se(e, p, null, y, d);
    for (p in T) y = T[p], p == "children" ? l = y : p == "dangerouslySetInnerHTML" ? x = y : p == "value" ? j = y : p == "checked" ? k = y : h && typeof y != "function" || I[p] === y || Se(e, p, y, I[p], d);
    if (x) h || c && (x.__html == c.__html || x.__html == e.innerHTML) || (e.innerHTML = x.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), At(t.type == "template" ? e.content : e, Le(l) ? l : [l], t, o, n, u == "foreignObject" ? "http://www.w3.org/1999/xhtml" : d, s, a, s ? s[0] : o.__k && ve(o, 0), h, g), s != null) for (p = s.length; p--; ) Je(s[p]);
    h && u != "textarea" || (p = "value", u == "progress" && j == null ? e.removeAttribute("value") : j != null && (j !== e[p] || u == "progress" && !j || u == "option" && j != I[p]) && Se(e, p, j, I[p], d), p = "checked", k != null && k != e[p] && Se(e, p, k, I[p], d));
  }
  return e;
}
function Qe(e, t, o) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), n && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (d) {
    W.__e(d, o);
  }
}
function Nt(e, t, o) {
  var n, d;
  if (W.unmount && W.unmount(e), (n = e.ref) && (n.current && n.current != e.__e || Qe(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (s) {
      W.__e(s, t);
    }
    n.base = n.__P = n.__n = null;
  }
  if (n = e.__k) for (d = 0; d < n.length; d++) n[d] && Nt(n[d], t, o || typeof e.type != "function");
  o || Je(e.__e), e.__c = e.__ = e.__e = void 0;
}
function pr(e, t, o) {
  return this.constructor(e, o);
}
function st(e, t, o) {
  var n, d, s, a;
  t == document && (t = document.documentElement), W.__ && W.__(e, t), d = (n = !1) ? null : t.__k, s = [], a = [], Ge(t, e = t.__k = ir(Ne, null, [e]), d || Ee, Ee, t.namespaceURI, d ? null : t.firstChild ? Re.call(t.childNodes) : null, s, d ? d.__e : t.firstChild, n, a), Rt(s, e, a), e.props.children = null;
}
Re = Ae.slice, W = { __e: function(e, t, o, n) {
  for (var d, s, a; t = t.__; ) if ((d = t.__c) && !d.__) try {
    if ((s = d.constructor) && s.getDerivedStateFromError != null && (d.setState(s.getDerivedStateFromError(e)), a = d.__d), d.componentDidCatch != null && (d.componentDidCatch(e, n || {}), a = d.__d), a) return d.__E = d;
  } catch (h) {
    e = h;
  }
  throw e;
} }, Ct = 0, Te.prototype.setState = function(e, t) {
  var o;
  o = this.__s != null && this.__s != this.state ? this.__s : this.__s = he({}, this.state), typeof e == "function" && (e = e(he({}, o), this.props)), e && he(o, e), e != null && this.__v && (t && this._sb.push(t), rt(this));
}, Te.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), rt(this));
}, Te.prototype.render = Ne, fe = [], Tt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, It = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Pe.__r = 0, Fe = Math.random().toString(8), $e = "__d" + Fe, we = "__a" + Fe, jt = /(PointerCapture)$|Capture$/i, Ke = 0, Ve = nt(!1), qe = nt(!0);
var hr = 0;
function r(e, t, o, n, d, s) {
  t || (t = {});
  var a, h, g = t;
  if ("ref" in g) for (h in g = {}, t) h == "ref" ? a = t[h] : g[h] = t[h];
  var p = { type: e, props: g, key: o, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --hr, __i: -1, __u: 0, __source: d, __self: s };
  if (typeof e == "function" && (a = e.defaultProps)) for (h in a) g[h] === void 0 && (g[h] = a[h]);
  return W.vnode && W.vnode(p), p;
}
var _e, J, Oe, it, Me = 0, Dt = [], Q = W, dt = Q.__b, at = Q.__r, lt = Q.diffed, ct = Q.__c, pt = Q.unmount, ht = Q.__;
function De(e, t) {
  Q.__h && Q.__h(J, e, Me || t), Me = 0;
  var o = J.__H || (J.__H = { __: [], __h: [] });
  return e >= o.__.length && o.__.push({}), o.__[e];
}
function A(e) {
  return Me = 1, ur(Ut, e);
}
function ur(e, t, o) {
  var n = De(_e++, 2);
  if (n.t = e, !n.__c && (n.__ = [Ut(void 0, t), function(h) {
    var g = n.__N ? n.__N[0] : n.__[0], p = n.t(g, h);
    g !== p && (n.__N = [p, n.__[1]], n.__c.setState({}));
  }], n.__c = J, !J.__f)) {
    var d = function(h, g, p) {
      if (!n.__c.__H) return !0;
      var x = !1, c = n.__c.props !== h;
      if (n.__c.__H.__.some(function(y) {
        if (y.__N) {
          x = !0;
          var j = y.__[0];
          y.__ = y.__N, y.__N = void 0, j !== y.__[0] && (c = !0);
        }
      }), s) {
        var l = s.call(this, h, g, p);
        return x ? l || c : l;
      }
      return !x || c;
    };
    J.__f = !0;
    var s = J.shouldComponentUpdate, a = J.componentWillUpdate;
    J.componentWillUpdate = function(h, g, p) {
      if (this.__e) {
        var x = s;
        s = void 0, d(h, g, p), s = x;
      }
      a && a.call(this, h, g, p);
    }, J.shouldComponentUpdate = d;
  }
  return n.__N || n.__;
}
function de(e, t) {
  var o = De(_e++, 3);
  !Q.__s && Ye(o.__H, t) && (o.__ = e, o.u = t, J.__H.__h.push(o));
}
function mr(e, t) {
  var o = De(_e++, 4);
  !Q.__s && Ye(o.__H, t) && (o.__ = e, o.u = t, J.__h.push(o));
}
function ae(e) {
  return Me = 5, ue(function() {
    return { current: e };
  }, []);
}
function ue(e, t) {
  var o = De(_e++, 7);
  return Ye(o.__H, t) && (o.__ = e(), o.__H = t, o.__h = e), o.__;
}
function fr() {
  for (var e; e = Dt.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(Ie), t.__h.some(We), t.__h = [];
    } catch (o) {
      t.__h = [], Q.__e(o, e.__v);
    }
  }
}
Q.__b = function(e) {
  J = null, dt && dt(e);
}, Q.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), ht && ht(e, t);
}, Q.__r = function(e) {
  at && at(e), _e = 0;
  var t = (J = e.__c).__H;
  t && (Oe === J ? (t.__h = [], J.__h = [], t.__.some(function(o) {
    o.__N && (o.__ = o.__N), o.u = o.__N = void 0;
  })) : (t.__h.some(Ie), t.__h.some(We), t.__h = [], _e = 0)), Oe = J;
}, Q.diffed = function(e) {
  lt && lt(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Dt.push(t) !== 1 && it === Q.requestAnimationFrame || ((it = Q.requestAnimationFrame) || gr)(fr)), t.__H.__.some(function(o) {
    o.u && (o.__H = o.u, o.u = void 0);
  })), Oe = J = null;
}, Q.__c = function(e, t) {
  t.some(function(o) {
    try {
      o.__h.some(Ie), o.__h = o.__h.filter(function(n) {
        return !n.__ || We(n);
      });
    } catch (n) {
      t.some(function(d) {
        d.__h && (d.__h = []);
      }), t = [], Q.__e(n, o.__v);
    }
  }), ct && ct(e, t);
}, Q.unmount = function(e) {
  pt && pt(e);
  var t, o = e.__c;
  o && o.__H && (o.__H.__.some(function(n) {
    try {
      Ie(n);
    } catch (d) {
      t = d;
    }
  }), o.__H = void 0, t && Q.__e(t, o.__v));
};
var ut = typeof requestAnimationFrame == "function";
function gr(e) {
  var t, o = function() {
    clearTimeout(n), ut && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(o, 35);
  ut && (t = requestAnimationFrame(o));
}
function Ie(e) {
  var t = J, o = e.__c;
  typeof o == "function" && (e.__c = void 0, o()), J = t;
}
function We(e) {
  var t = J;
  e.__c = e.__(), J = t;
}
function Ye(e, t) {
  return !e || e.length !== t.length || t.some(function(o, n) {
    return o !== e[n];
  });
}
function Ut(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const br = {
  png: "image",
  jpg: "image",
  jpeg: "image",
  webp: "image",
  bmp: "image",
  mp4: "video",
  webm: "video",
  mov: "video",
  mkv: "video",
  wav: "audio",
  mp3: "audio",
  flac: "audio",
  ogg: "audio",
  m4a: "audio",
  aac: "audio"
};
function Ft(e) {
  var n;
  const t = ((n = e.name.split(".").pop()) == null ? void 0 : n.toLocaleLowerCase()) ?? "";
  if (e.name.includes(".")) return br[t] ?? null;
  const o = e.type.split("/", 1)[0];
  return o === "image" || o === "video" || o === "audio" ? o : null;
}
function vr(e) {
  const d = e.replace(/\.[^.]+$/, "").replace(/^\s*\d+\s*[-_. ]+/, "").normalize("NFKC").replace(/[\s-]+/g, "_").replace(/[{}]/g, "").replace(/_+/g, "_").replace(/^[_\.]+|[_\.]+$/g, "").slice(0, 96) || "asset";
  return d.toLocaleLowerCase().endsWith(".audio") ? `${d}_asset` : d;
}
function xr(e, t) {
  const o = new Set(Array.from(t, (d) => d.toLocaleLowerCase()));
  if (!o.has(e.toLocaleLowerCase())) return e;
  let n = 2;
  for (; o.has(`${e}_${n}`.toLocaleLowerCase()); ) n += 1;
  return `${e}_${n}`;
}
function _r(e, t, o) {
  const n = e.trim().toLocaleLowerCase();
  return !e.trim() || /[\s{}]/.test(e) || n.endsWith(".audio") ? "invalid" : Array.from(t, (s) => s.toLocaleLowerCase()).includes(n) || Array.from(o, (s) => s.trim().toLocaleLowerCase()).filter((s) => s === n).length > 1 ? "duplicate" : null;
}
function yr(e, t, o) {
  const n = new Set(Array.from(t)), d = [], s = [];
  for (const a of e) {
    const h = Ft(a);
    if (!h) {
      s.push(a.name);
      continue;
    }
    const g = xr(vr(a.name), n);
    n.add(g), d.push({ id: o(), file: a, alias: g, kind: h, durationSeconds: h === "image" ? null : 2, includeVideoAudio: !1, status: "pending", error: "" });
  }
  return { drafts: d, rejected: s };
}
function wr(e, t, o) {
  return {
    id: e.id,
    alias: e.alias.trim(),
    kind: e.kind,
    path: t,
    enabled: !0,
    fixed: !1,
    fixedOrder: o,
    shotIds: [],
    includeVideoAudio: e.kind === "video" && e.includeVideoAudio,
    durationSeconds: e.kind === "image" ? null : e.durationSeconds,
    audioDurationSeconds: null,
    fingerprint: ""
  };
}
function kr(e, t) {
  return t === "image" ? Promise.resolve(null) : new Promise((o) => {
    const n = document.createElement(t === "video" ? "video" : "audio"), d = URL.createObjectURL(e);
    let s = !1;
    const a = (h) => {
      s || (s = !0, n.onloadedmetadata = null, n.onerror = null, n.removeAttribute("src"), n.load(), URL.revokeObjectURL(d), o(h));
    };
    n.preload = "metadata", n.onloadedmetadata = () => a(Number.isFinite(n.duration) && n.duration > 0 ? Math.round(n.duration * 10) / 10 : null), n.onerror = () => a(null), n.src = d;
  });
}
const zr = () => `asset_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`, He = (e, t) => t === "zh" ? { image: "图片", video: "视频", audio: "音频" }[e] : e;
function Sr({ language: e, assets: t, projectName: o, onClose: n, onImported: d, uploadFile: s }) {
  const [a, h] = A([]), [g, p] = A([]), [x, c] = A(!1), [l, y] = A(!1), j = ae([]);
  j.current = a;
  const k = t.map((v) => v.alias), I = (v, M) => h((O) => O.map((F) => F.id === v ? { ...F, ...M } : F)), T = (v) => {
    if (!v.length || l) return;
    const M = [...k, ...j.current.map((F) => F.alias)], O = yr(v, M, zr);
    O.rejected.length && p((F) => [...F, ...O.rejected]), O.drafts.length && (h((F) => [...F, ...O.drafts]), O.drafts.forEach((F) => {
      kr(F.file, F.kind).then((Z) => {
        Z != null && h((oe) => oe.map((m) => m.id === F.id && m.kind === F.kind && m.durationSeconds === 2 ? { ...m, durationSeconds: Z } : m));
      });
    }));
  }, w = a.filter((v) => v.status !== "imported").map((v) => v.alias), b = (v) => {
    if (v.status === "imported") return null;
    const M = _r(v.alias, k, w);
    return M === "invalid" ? e === "zh" ? "别名为空、包含空白/花括号，或使用了保留后缀 .audio" : "Alias is empty, contains whitespace/braces, or uses reserved .audio" : M === "duplicate" ? e === "zh" ? "别名与素材库或本批次其他素材重复" : "Alias duplicates an existing or staged asset" : Ft(v.file) !== v.kind ? e === "zh" ? "文件扩展名与所选类型不匹配" : "The extension does not match the selected kind" : v.kind !== "image" && (v.durationSeconds == null || v.durationSeconds <= 0) ? e === "zh" ? "视频或音频时长必须大于 0" : "Video/audio duration must be greater than 0" : null;
  }, C = async () => {
    const M = j.current.filter((oe) => oe.status === "pending" || oe.status === "error");
    if (!M.length) return;
    if (M.some(b)) {
      window.alert(e === "zh" ? "请先修正列表中标红的项目。" : "Fix the highlighted rows before importing.");
      return;
    }
    y(!0);
    const O = Math.max(0, ...t.map((oe) => oe.fixedOrder)) + 1;
    let F = 0;
    const Z = async () => {
      for (; F < M.length; ) {
        const oe = F++, m = M[oe];
        I(m.id, { status: "uploading", error: "" });
        try {
          const E = await s(o, m.kind, m.file);
          d([wr(m, E, O + oe)]), I(m.id, { status: "imported", error: "" });
        } catch (E) {
          I(m.id, { status: "error", error: String(E) });
        }
      }
    };
    await Promise.all(Array.from({ length: Math.min(2, M.length) }, Z)), y(!1);
  }, $ = a.filter((v) => v.status === "imported").length, D = a.filter((v) => v.status === "error").length, L = a.length - $;
  return /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-asset-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": e === "zh" ? "批量导入素材" : "Batch import assets", children: [
    /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: e === "zh" ? "批量导入素材" : "Batch import assets" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "可混合选择图片、视频和音频；确认列表后再写入素材库。" : "Select images, videos, and audio together; review before uploading." })
      ] }),
      /* @__PURE__ */ r("button", { disabled: l, "aria-label": e === "zh" ? "关闭" : "Close", onClick: n, children: "×" })
    ] }),
    /* @__PURE__ */ r("label", { class: `td-asset-dropzone ${x ? "dragging" : ""}`, onDragEnter: (v) => {
      v.preventDefault(), c(!0);
    }, onDragOver: (v) => v.preventDefault(), onDragLeave: (v) => {
      v.currentTarget === v.target && c(!1);
    }, onDrop: (v) => {
      var M;
      v.preventDefault(), c(!1), T(Array.from(((M = v.dataTransfer) == null ? void 0 : M.files) ?? []));
    }, children: [
      /* @__PURE__ */ r("strong", { children: e === "zh" ? "拖拽素材到这里，或点击选择多个文件" : "Drop media here, or click to select multiple files" }),
      /* @__PURE__ */ r("span", { children: e === "zh" ? "支持图片、视频、音频混合导入" : "Mixed image, video, and audio selection is supported" }),
      /* @__PURE__ */ r("input", { type: "file", multiple: !0, accept: "image/*,video/*,audio/*", disabled: l, onChange: (v) => {
        T(Array.from(v.currentTarget.files ?? [])), v.currentTarget.value = "";
      } })
    ] }),
    g.length > 0 && /* @__PURE__ */ r("div", { class: "td-asset-batch-warning", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `已跳过 ${g.length} 个不支持的文件：${g.join("、")}` : `Skipped ${g.length} unsupported files: ${g.join(", ")}` }),
      /* @__PURE__ */ r("button", { onClick: () => p([]), children: "×" })
    ] }),
    /* @__PURE__ */ r("div", { class: "td-asset-batch-summary", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `共 ${a.length} 项 · 已导入 ${$} · 待处理 ${L}${D ? ` · 失败 ${D}` : ""}` : `${a.length} items · ${$} imported · ${L} pending${D ? ` · ${D} failed` : ""}` }),
      /* @__PURE__ */ r("button", { disabled: l || !a.length, onClick: () => h([]), children: e === "zh" ? "清空列表" : "Clear list" })
    ] }),
    /* @__PURE__ */ r("div", { class: "td-asset-batch-list", children: [
      /* @__PURE__ */ r("div", { class: "td-asset-batch-row td-asset-batch-head", children: [
        /* @__PURE__ */ r("span", { children: e === "zh" ? "状态 / 文件" : "Status / File" }),
        /* @__PURE__ */ r("span", { children: e === "zh" ? "别名" : "Alias" }),
        /* @__PURE__ */ r("span", { children: e === "zh" ? "类型" : "Kind" }),
        /* @__PURE__ */ r("span", { children: e === "zh" ? "时长" : "Duration" }),
        /* @__PURE__ */ r("span", { children: e === "zh" ? "视频伴音" : "Video audio" }),
        /* @__PURE__ */ r("span", { children: e === "zh" ? "操作" : "Action" })
      ] }),
      !a.length && /* @__PURE__ */ r("div", { class: "td-asset-batch-empty", children: e === "zh" ? "尚未选择素材" : "No media selected" }),
      a.map((v) => {
        const M = b(v), O = l || v.status === "imported" || v.status === "uploading";
        return /* @__PURE__ */ r("div", { class: `td-asset-batch-row ${M || v.status === "error" ? "invalid" : ""} ${v.status === "imported" ? "imported" : ""}`, children: [
          /* @__PURE__ */ r("div", { class: "td-asset-batch-file", children: [
            /* @__PURE__ */ r("strong", { title: v.file.name, children: v.file.name }),
            /* @__PURE__ */ r("small", { children: [
              (v.file.size / 1024 / 1024).toFixed(1),
              " MB · ",
              v.status === "pending" ? e === "zh" ? "待导入" : "Pending" : v.status === "uploading" ? e === "zh" ? "上传中" : "Uploading" : v.status === "imported" ? e === "zh" ? "已完成" : "Imported" : e === "zh" ? "失败" : "Failed"
            ] }),
            (M || v.error) && /* @__PURE__ */ r("em", { title: M || v.error, children: M || v.error })
          ] }),
          /* @__PURE__ */ r("input", { disabled: O, value: v.alias, onInput: (F) => I(v.id, { alias: F.currentTarget.value, status: "pending", error: "" }) }),
          /* @__PURE__ */ r("select", { disabled: O, value: v.kind, onChange: (F) => {
            const Z = F.currentTarget.value;
            I(v.id, { kind: Z, durationSeconds: Z === "image" ? null : v.durationSeconds ?? 2, includeVideoAudio: Z === "video" && v.includeVideoAudio, status: "pending", error: "" });
          }, children: [
            /* @__PURE__ */ r("option", { value: "image", children: He("image", e) }),
            /* @__PURE__ */ r("option", { value: "video", children: He("video", e) }),
            /* @__PURE__ */ r("option", { value: "audio", children: He("audio", e) })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", disabled: O || v.kind === "image", value: v.durationSeconds ?? "", onInput: (F) => I(v.id, { durationSeconds: F.currentTarget.value ? Number(F.currentTarget.value) : null, status: "pending", error: "" }) }),
            /* @__PURE__ */ r("span", { children: v.kind === "image" ? "—" : e === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-audio", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", disabled: O || v.kind !== "video", checked: v.kind === "video" && v.includeVideoAudio, onChange: (F) => I(v.id, { includeVideoAudio: F.currentTarget.checked }) }),
            /* @__PURE__ */ r("span", { children: v.kind === "video" ? v.includeVideoAudio ? e === "zh" ? "开" : "ON" : e === "zh" ? "关" : "OFF" : "—" })
          ] }),
          /* @__PURE__ */ r("button", { class: "danger", disabled: O, onClick: () => h((F) => F.filter((Z) => Z.id !== v.id)), children: e === "zh" ? "移除" : "Remove" })
        ] }, v.id);
      })
    ] }),
    /* @__PURE__ */ r("footer", { children: [
      /* @__PURE__ */ r("button", { disabled: l, onClick: n, children: e === "zh" ? "关闭" : "Close" }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: l || !a.some((v) => v.status === "pending" || v.status === "error"), onClick: () => void C(), children: l ? e === "zh" ? "正在导入…" : "Importing…" : D ? e === "zh" ? "重试失败项" : "Retry failed" : e === "zh" ? "开始导入" : "Start import" })
    ] })
  ] }) });
}
function $r(e, t) {
  return { projectName: e, runId: t };
}
async function Cr(e, t) {
  const o = await fetch("/theodore-director/v1/project/clear", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify($r(e, t))
  }), n = await o.json();
  if (!o.ok || !n.ok) throw new Error(n.error || `HTTP ${o.status}`);
  return n.path || "";
}
function ie(e, t) {
  const o = e.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!o || o.startsWith("/") || /^[A-Za-z]:\//.test(o)) return null;
  const n = o.split("/").filter(Boolean), d = n.pop();
  if (!d || n.some((a) => a === "..")) return null;
  const s = new URLSearchParams({ filename: d, type: t });
  return n.length && s.set("subfolder", n.join("/")), `/view?${s.toString()}`;
}
function Ot(e) {
  return ie(e, "input");
}
function se(e) {
  return e.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function mt({ asset: e, compact: t = !1 }) {
  const o = Ot(e.path), n = `td-media-preview ${t ? "compact" : ""}`;
  return o ? e.kind === "image" ? /* @__PURE__ */ r("div", { class: n, children: /* @__PURE__ */ r("img", { src: o, alt: e.alias, loading: "lazy" }) }) : e.kind === "video" ? /* @__PURE__ */ r("div", { class: n, children: /* @__PURE__ */ r("video", { src: o, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ r("div", { class: n, children: /* @__PURE__ */ r("audio", { src: o, controls: !0, preload: "metadata" }) }) : e.path ? /* @__PURE__ */ r("div", { class: `${n} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ r("div", { class: `${n} empty`, children: "尚未选择素材 / No media selected" });
}
function Tr(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > e.length) return null;
  const n = e.slice(0, t).lastIndexOf("@");
  if (n < 0) return null;
  const d = n > 0 ? e[n - 1] : "";
  if (d && /[A-Za-z0-9_.+-]/.test(d)) return null;
  const s = e.slice(n + 1, t);
  return /[\s{}@]/u.test(s) ? null : { start: n, end: t, query: s };
}
function Ir(e, t) {
  const o = t.trim().toLocaleLowerCase();
  if (!o) return e;
  const n = [], d = [];
  for (const s of e)
    s.alias.toLocaleLowerCase().includes(o) ? n.push(s) : se(s.path).toLocaleLowerCase().includes(o) && d.push(s);
  return [...n, ...d];
}
function jr(e, t, o) {
  const n = `{{ref:${o}}}`;
  return {
    value: `${e.slice(0, t.start)}${n}${e.slice(t.end)}`,
    caret: t.start + n.length
  };
}
const Ht = String.raw`\{\{ref:([^{}]+)}}`;
function ft() {
  return new RegExp(Ht, "g");
}
function Bt(e, t) {
  return e.assets.filter((o) => o.enabled && o.path.trim() && (!(o.shotIds ?? []).length || (o.shotIds ?? []).includes(t.id)) && !(t.disabledAssetIds ?? []).includes(o.id));
}
function Vt(e, t) {
  const o = /* @__PURE__ */ new Map();
  for (const n of Bt(e, t)) o.set(n.alias, n);
  return o;
}
function qt(e, t, o) {
  const n = o.trim(), d = n.endsWith(".audio"), s = d ? n.slice(0, -6) : n, a = Vt(e, t).get(s);
  return a ? !d || a.kind === "video" && a.includeVideoAudio : !1;
}
function gt(e, t) {
  const o = e.shots.filter((n) => n.enabled);
  return o.length > 0 && o.every((n) => qt(e, n, t));
}
function Er(e) {
  return {
    ...e,
    assets: [],
    shots: e.shots.map((t) => ({ ...t, disabledAssetIds: [] }))
  };
}
function Wt(e, t) {
  const o = [], n = Vt(e, t), d = [e.promptPrefix, t.prompt, e.promptSuffix].filter(Boolean).join(`
`), s = [...d.matchAll(ft())].map((b) => b[1].trim()), a = [], h = /* @__PURE__ */ new Set(), g = (b) => {
    h.has(b.id) || (h.add(b.id), a.push(b));
  };
  [...n.values()].filter((b) => b.fixed).sort((b, C) => b.fixedOrder - C.fixedOrder || b.alias.localeCompare(C.alias)).forEach(g);
  for (const b of s) {
    const C = b.endsWith(".audio") ? b.slice(0, -6) : b, $ = n.get(C);
    if (!$) {
      o.push(`未找到或已禁用素材：${b}`);
      continue;
    }
    b.endsWith(".audio") && ($.kind !== "video" || !$.includeVideoAudio) && o.push(`视频伴音未启用：${b}`), g($);
  }
  const p = a.filter((b) => b.kind === "image"), x = a.filter((b) => b.kind === "video"), c = x.filter((b) => b.includeVideoAudio), l = a.filter((b) => b.kind === "audio"), y = c.length + l.length, j = p.length + x.length + l.length;
  p.length > 9 && o.push(`参考图 ${p.length}/9，超出 H3 上限`), x.length > 3 && o.push(`参考视频 ${x.length}/3，超出 H3 上限`), y > 3 && o.push(`有效音频 ${y}/3，超出 H3 总上限`), j > 12 && o.push(`混合文件 ${j}/12，超出 H3 上限`), y && !p.length && !x.length && o.push("音频参考不能单独使用");
  const k = x.filter((b) => typeof b.durationSeconds == "number");
  for (const b of x) (b.durationSeconds == null || b.durationSeconds < 2 || b.durationSeconds > 15) && o.push(`视频 ${b.alias} 的时长必须为 2–15 秒`);
  k.reduce((b, C) => b + (C.durationSeconds ?? 0), 0) > 15 && o.push("参考视频总时长超过 15 秒");
  const I = [...c.map((b) => b.audioDurationSeconds ?? b.durationSeconds), ...l.map((b) => b.durationSeconds)];
  I.some((b) => b == null || b < 2 || b > 15) && o.push("每路有效音频时长必须为 2–15 秒"), I.reduce((b, C) => b + (C ?? 0), 0) > 15 && o.push("有效音频总时长超过 15 秒");
  const T = /* @__PURE__ */ new Map();
  p.forEach((b, C) => T.set(b.alias, `<Picture ${C + 1}>`)), x.forEach((b, C) => T.set(b.alias, `<Video ${C + 1}>`)), c.forEach((b, C) => T.set(`${b.alias}.audio`, `<Audio ${C + 1}>`)), l.forEach((b, C) => T.set(b.alias, `<Audio ${c.length + C + 1}>`));
  const u = d.replace(ft(), (b, C) => T.get(C.trim()) ?? b), w = [...T.entries()].map(([b, C]) => ({ label: C, alias: b, kind: C.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: u, errors: o, slots: w, mixedFiles: j, audioCount: y };
}
function Ar(e) {
  var s, a, h, g, p, x;
  const t = [], o = /* @__PURE__ */ new Set(["off", "super_resolution_second_pass", "latent_upscale_second_pass", "super_resolution_only"]);
  (a = (s = e.project) == null ? void 0 : s.name) != null && a.trim() || t.push("Project name 不能为空"), (g = (h = e.project) == null ? void 0 : h.runId) != null && g.trim() || t.push("Run ID 不能为空"), (!Array.isArray(e.shots) || !e.shots.some((c) => c.enabled)) && t.push("至少需要一个启用分镜");
  const n = /* @__PURE__ */ new Set();
  for (const c of e.shots ?? [])
    (!((p = c.id) != null && p.trim()) || n.has(c.id)) && t.push(`分镜 ID 为空或重复：${c.id || "(空)"}`), n.add(c.id), c.durationSeconds > 0 || t.push(`分镜 ${c.id} 的时长必须大于 0`), o.has(c.secondSamplingMode) || t.push(`分镜 ${c.id} 的高清处理模式无效`);
  const d = /* @__PURE__ */ new Set();
  for (const c of e.assets ?? []) {
    const l = (x = c.alias) == null ? void 0 : x.toLocaleLowerCase();
    (!c.alias || /[\s{}]/.test(c.alias) || c.alias.endsWith(".audio") || d.has(l)) && t.push(`素材别名无效或重复：${c.alias || "(空)"}`), d.add(l), c.enabled && !c.path && t.push(`素材 ${c.alias} 尚未选择文件`);
  }
  for (const c of e.shots.filter((l) => l.enabled)) t.push(...Wt(e, c).errors.map((l) => `${c.title}: ${l}`));
  return [...new Set(t)];
}
function Pr(e, t) {
  const o = [], n = new RegExp(Ht, "g");
  let d = 0;
  for (const s of e.matchAll(n)) {
    const a = s.index ?? 0;
    a > d && o.push({ text: e.slice(d, a), reference: !1 }), o.push({ text: s[0], reference: !0, valid: t(s[1]) }), d = a + s[0].length;
  }
  return d < e.length && o.push({ text: e.slice(d), reference: !1 }), o;
}
const Mr = [
  "boxSizing",
  "borderTopWidth",
  "borderRightWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "fontStretch",
  "lineHeight",
  "letterSpacing",
  "textAlign",
  "textIndent",
  "textTransform",
  "tabSize",
  "wordSpacing",
  "overflowWrap",
  "wordBreak"
];
function Rr(e, t) {
  const o = window.getComputedStyle(e), n = e.getBoundingClientRect(), d = document.createElement("div");
  d.setAttribute("aria-hidden", "true"), d.style.position = "fixed", d.style.visibility = "hidden", d.style.pointerEvents = "none", d.style.left = `${n.left}px`, d.style.top = `${n.top}px`, d.style.width = `${e.offsetWidth}px`, d.style.height = `${e.offsetHeight}px`, d.style.overflow = "hidden", d.style.whiteSpace = "pre-wrap";
  for (const g of Mr) d.style[g] = o[g];
  d.append(document.createTextNode(e.value.slice(0, t)));
  const s = document.createElement("span");
  s.textContent = "​", d.append(s), document.body.append(d), d.scrollTop = e.scrollTop, d.scrollLeft = e.scrollLeft;
  const a = s.getBoundingClientRect(), h = Number.parseFloat(o.lineHeight) || Number.parseFloat(o.fontSize) * 1.45 || 20;
  return d.remove(), { left: a.left, top: a.top, bottom: a.top + h };
}
const Lr = {
  zh: { image: "图片", video: "视频", audio: "音频" },
  en: { image: "Image", video: "Video", audio: "Audio" }
};
function Be({ value: e, rows: t, onInput: o, isReferenceValid: n, mentionAssets: d, mentionLanguage: s = "zh" }) {
  const a = ae(null), h = ae(null), g = ae(null), p = ae(null), x = ae(!1), c = ae(!1), l = ae([]), y = ae([]), j = ae(`td-reference-mention-${Math.random().toString(36).slice(2)}`).current, [k, I] = A(null), [T, u] = A(0), [w, b] = A(null), C = Pr(e, n), $ = ue(
    () => k && d ? Ir(d, k.query) : [],
    [k, d]
  ), D = () => {
    I(null), b(null), u(0);
  }, L = (m) => {
    if (!d || m.selectionStart !== m.selectionEnd) {
      D();
      return;
    }
    const E = Tr(m.value, m.selectionStart);
    if (!E) {
      D();
      return;
    }
    I((R) => R && R.start === E.start && R.end === E.end && R.query === E.query ? R : E);
  }, v = () => {
    var ge;
    if (!k || !g.current) return;
    const m = Rr(g.current, k.end), E = 8, R = Math.min(390, Math.max(240, window.innerWidth - E * 2)), G = Math.min(320, Math.max(150, window.innerHeight - E * 2)), V = Math.min(((ge = p.current) == null ? void 0 : ge.offsetHeight) || G, G), H = Math.min(Math.max(m.left, E), window.innerWidth - R - E), re = m.bottom + 6 + V > window.innerHeight - E && m.top - V - 6 >= E ? m.top - V - 6 : Math.min(m.bottom + 6, window.innerHeight - V - E);
    b((le) => le && le.left === H && le.top === re && le.width === R && le.maxHeight === G ? le : { left: H, top: re, width: R, maxHeight: G });
  };
  mr(v, [k, $.length, !!w]), de(() => {
    if (!k) return;
    const m = () => v(), E = (R) => {
      var G, V;
      R.target instanceof Node && ((G = a.current) != null && G.contains(R.target) || (V = p.current) != null && V.contains(R.target)) || D();
    };
    return window.addEventListener("resize", m), document.addEventListener("scroll", m, !0), document.addEventListener("mousedown", E), () => {
      window.removeEventListener("resize", m), document.removeEventListener("scroll", m, !0), document.removeEventListener("mousedown", E);
    };
  }, [k]), de(() => u(0), [k == null ? void 0 : k.query]), de(() => {
    T >= $.length && u(Math.max(0, $.length - 1));
  }, [T, $.length]), de(() => {
    var m, E;
    (E = (m = p.current) == null ? void 0 : m.querySelector('[aria-selected="true"]')) == null || E.scrollIntoView({ block: "nearest" });
  }, [T, $.length]);
  const M = (m) => {
    h.current && (h.current.scrollTop = m.currentTarget.scrollTop, h.current.scrollLeft = m.currentTarget.scrollLeft), k && v();
  }, O = (m, E) => {
    if (!g.current) return;
    const R = g.current;
    c.current = !0, R.value = m, R.dispatchEvent(new Event("input", { bubbles: !0 })), c.current = !1, D(), window.requestAnimationFrame(() => {
      R.focus({ preventScroll: !0 }), R.setSelectionRange(E, E);
    });
  }, F = (m) => {
    if (!(m.ctrlKey || m.metaKey) || m.altKey) return !1;
    const E = m.key.toLocaleLowerCase(), R = E === "y" || E === "z" && m.shiftKey;
    if (!(E === "z" && !m.shiftKey) && !R) return !1;
    const V = R ? y.current : l.current, H = V[V.length - 1], ee = R ? H == null ? void 0 : H.beforeValue : H == null ? void 0 : H.afterValue;
    return !H || m.currentTarget.value !== ee ? !1 : (m.preventDefault(), V.pop(), (R ? l.current : y.current).push(H), O(R ? H.afterValue : H.beforeValue, R ? H.afterCaret : H.beforeCaret), !0);
  }, Z = (m) => {
    if (!k || !g.current) return;
    const E = g.current, R = jr(E.value, k, m.alias), G = `{{ref:${m.alias}}}`, V = {
      beforeValue: E.value,
      afterValue: R.value,
      beforeCaret: k.end,
      afterCaret: R.caret
    };
    E.focus({ preventScroll: !0 }), E.setSelectionRange(k.start, k.end);
    let H = !1;
    try {
      document.execCommand("insertText", !1, G), H = E.value === R.value;
    } catch {
    }
    H || (E.value = R.value, E.dispatchEvent(new Event("input", { bubbles: !0 }))), l.current.push(V), l.current.length > 100 && l.current.shift(), y.current = [], D(), window.requestAnimationFrame(() => {
      var ee, re;
      (ee = g.current) == null || ee.focus({ preventScroll: !0 }), (re = g.current) == null || re.setSelectionRange(R.caret, R.caret);
    });
  }, oe = (m) => {
    if (!(m.isComposing || x.current) && !F(m) && k) {
      if (m.key === "Escape") {
        m.preventDefault(), D();
        return;
      }
      if ($.length) {
        if (m.key === "ArrowDown" || m.key === "ArrowUp") {
          m.preventDefault();
          const E = m.key === "ArrowDown" ? 1 : -1;
          u((R) => (R + E + $.length) % $.length);
          return;
        }
        (m.key === "Enter" || m.key === "Tab") && (m.preventDefault(), Z($[T] ?? $[0]));
      }
    }
  };
  return /* @__PURE__ */ r("span", { ref: a, class: "td-highlight-textarea", children: [
    /* @__PURE__ */ r("pre", { ref: h, class: "td-highlight-backdrop", "aria-hidden": "true", children: [
      C.map((m, E) => m.reference ? /* @__PURE__ */ r("mark", { class: m.valid ? "valid" : "invalid", children: m.text }, E) : m.text),
      e.endsWith(`
`) && " "
    ] }),
    /* @__PURE__ */ r(
      "textarea",
      {
        ref: g,
        class: "td-highlight-input",
        rows: t,
        value: e,
        "aria-autocomplete": d ? "list" : void 0,
        "aria-controls": k ? j : void 0,
        "aria-expanded": d ? !!k : void 0,
        "aria-activedescendant": k && $[T] ? `${j}-${$[T].id}` : void 0,
        onInput: (m) => {
          o(m);
          const E = m instanceof InputEvent ? m.inputType : "";
          !c.current && E !== "historyUndo" && E !== "historyRedo" && (y.current = []), x.current || L(m.currentTarget);
        },
        onClick: (m) => L(m.currentTarget),
        onSelect: (m) => {
          x.current || L(m.currentTarget);
        },
        onKeyDown: oe,
        onKeyUp: (m) => {
          !x.current && !["ArrowDown", "ArrowUp", "Enter", "Tab", "Escape"].includes(m.key) && L(m.currentTarget);
        },
        onCompositionStart: () => {
          x.current = !0;
        },
        onCompositionEnd: (m) => {
          x.current = !1, L(m.currentTarget);
        },
        onBlur: () => window.setTimeout(() => {
          document.activeElement !== g.current && D();
        }, 0),
        onScroll: M
      }
    ),
    k && w && /* @__PURE__ */ r(
      "div",
      {
        ref: p,
        id: j,
        class: "td-reference-mention-menu",
        role: "listbox",
        "aria-label": s === "zh" ? "选择参考素材" : "Choose reference media",
        style: { left: w.left, top: w.top, width: w.width, maxHeight: w.maxHeight },
        onMouseDown: (m) => m.preventDefault(),
        children: [
          /* @__PURE__ */ r("header", { children: [
            /* @__PURE__ */ r("strong", { children: s === "zh" ? "@ 参考素材" : "@ Reference media" }),
            /* @__PURE__ */ r("span", { children: $.length })
          ] }),
          $.length ? /* @__PURE__ */ r("div", { class: "td-reference-mention-options", children: $.map((m, E) => {
            const R = m.kind === "image" ? Ot(m.path) : null, G = se(m.path);
            return /* @__PURE__ */ r(
              "button",
              {
                id: `${j}-${m.id}`,
                type: "button",
                role: "option",
                "aria-selected": E === T,
                class: E === T ? "active" : "",
                onMouseEnter: () => u(E),
                onClick: () => Z(m),
                children: [
                  /* @__PURE__ */ r("span", { class: `td-reference-mention-thumb ${m.kind}`, children: R ? /* @__PURE__ */ r("img", { src: R, alt: "", loading: "lazy" }) : /* @__PURE__ */ r("span", { children: m.kind === "image" ? "▧" : m.kind === "video" ? "▶" : "♫" }) }),
                  /* @__PURE__ */ r("span", { class: "td-reference-mention-copy", children: [
                    /* @__PURE__ */ r("strong", { children: m.alias }),
                    /* @__PURE__ */ r("small", { children: G || m.path })
                  ] }),
                  /* @__PURE__ */ r("em", { children: Lr[s][m.kind] })
                ]
              },
              m.id
            );
          }) }) : /* @__PURE__ */ r("p", { class: "td-reference-mention-empty", children: s === "zh" ? "没有匹配的可用素材" : "No available media matches" })
        ]
      }
    )
  ] });
}
const Nr = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", postprocess: "后处理", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", postprocess: "Post-process", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function be(e, t) {
  return Nr[e][t];
}
function pe(e) {
  return (Array.isArray(e.results) && e.results.length ? e.results : e.path ? [{ path: e.path, bytes: e.bytes, modifiedAt: e.modifiedAt, stage: e.stage, processingMode: e.processingMode, sourcePath: e.sourcePath, completedAt: e.completedAt }] : []).filter((o) => typeof o.path == "string" && o.path.trim().length > 0).sort((o, n) => (n.modifiedAt ?? 0) - (o.modifiedAt ?? 0));
}
function Kt(e, t) {
  const o = /_video_(\d+)/i.exec(e.replace(/\\/g, "/"));
  return o ? Number(o[1]) : t;
}
function Dr(e, t) {
  return e.stage === "second_pass" && t !== "super_resolution_only" ? "second_pass_requires_upscale_only" : e.stage === "upscaled" ? "upscaled_is_terminal" : null;
}
function Ur(e, t) {
  return Dr(e, t) === null;
}
function Fr(e) {
  return ["super_resolution_second_pass", "latent_upscale_second_pass", "super_resolution_only"].filter((o) => Ur(e, o));
}
function ke({ src: e, alt: t }) {
  const o = ae(null), [n, d] = A(!1);
  return de(() => {
    const s = o.current;
    if (!s) return;
    if (!("IntersectionObserver" in window)) {
      d(!0);
      return;
    }
    const a = new IntersectionObserver((h) => {
      d(h.some((g) => g.isIntersecting));
    }, { rootMargin: "160px" });
    return a.observe(s), () => a.disconnect();
  }, []), /* @__PURE__ */ r("div", { class: "td-result-thumb", ref: o, children: n ? /* @__PURE__ */ r("video", { src: e, "aria-label": t, muted: !0, playsInline: !0, preload: "metadata", onLoadedMetadata: (s) => {
    const a = s.currentTarget;
    Number.isFinite(a.duration) && a.duration > 0.02 && (a.currentTime = Math.min(0.25, Math.max(0, a.duration - 0.05)));
  } }) : /* @__PURE__ */ r("span", { children: "…" }) });
}
function Ze(e) {
  let t = 0;
  return e.shots.map((o, n) => {
    const d = {
      key: `${n}:${o.id}`,
      shot: o,
      sourceIndex: n,
      activeIndex: o.enabled ? t : -1
    };
    return o.enabled && (t += 1), d;
  });
}
function Or(e, t, o) {
  return e.filter((n) => n.shot.enabled && t[n.key]).map((n) => ({
    shotId: n.shot.id,
    activeIndex: n.activeIndex,
    path: o[n.key] ?? ""
  }));
}
function Hr(e, t, o) {
  const n = {};
  return e.forEach((d) => {
    const s = d.sourceIndex + 1;
    n[d.key] = d.shot.enabled && s >= t && s <= o;
  }), n;
}
function Br(e, t, o) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId, shotId: t, activeIndex: String(o) }).toString()}`;
}
function Vr(e, t, o) {
  return t === "latent_upscale_second_pass" ? o === "zh" ? "Latent 放大二采" : "Latent upscale 2nd pass" : t === "super_resolution_second_pass" || e === "second_pass" ? o === "zh" ? "超分二采" : "Super-res 2nd pass" : t === "super_resolution_only" || e === "upscaled" ? o === "zh" ? "只超分" : "Super-res only" : e === "first_pass" ? o === "zh" ? "一采" : "1st pass" : o === "zh" ? "旧结果" : "Legacy";
}
function qr(e, t) {
  return e === "latent_upscale_second_pass" ? t === "zh" ? "Latent 放大二采" : "Latent upscale 2nd pass" : e === "super_resolution_only" ? t === "zh" ? "只超分" : "Super-res only" : t === "zh" ? "超分二采" : "Super-res 2nd pass";
}
function Wr({ plan: e, language: t, queueSecondPass: o }) {
  const n = ue(() => Ze(e), [e]), [d, s] = A({}), [a, h] = A({}), [g, p] = A(null), [x, c] = A(0), [l, y] = A({});
  de(() => {
    let k = !1;
    const I = {};
    return n.forEach((T) => {
      I[T.key] = { loading: !0, response: { found: !1, results: [] } };
    }), s(I), n.forEach((T) => {
      fetch(Br(e, T.shot.id, T.activeIndex)).then(async (u) => {
        const w = await u.json();
        if (!u.ok) throw new Error(w.error || `HTTP ${u.status}`);
        k || s((b) => ({ ...b, [T.key]: { loading: !1, response: w } }));
      }).catch((u) => {
        k || s((w) => ({ ...w, [T.key]: { loading: !1, response: { found: !1, results: [], error: String(u) } } }));
      });
    }), () => {
      k = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((k) => k.id).join("|"), x]);
  const j = async (k, I, T) => {
    if (!o) return;
    const u = `${I}:${T}`;
    h((w) => ({ ...w, [u]: { state: "queued" } }));
    try {
      await o({
        plan: e,
        shotId: k,
        sourcePath: I,
        requestId: `td2_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`,
        processingMode: T
      }), h((w) => ({ ...w, [u]: { state: "done" } })), c((w) => w + 1);
    } catch (w) {
      h((b) => ({ ...b, [u]: { state: "error", message: String(w instanceof Error ? w.message : w) } }));
    }
  };
  return /* @__PURE__ */ r("section", { class: "td-postprocess td-second-pass-panel", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "单独二采" : "Standalone processing" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "对满意结果执行所选高清处理；二采结果只能继续只超分，不重跑一采或启动 Impact 循环。" : "Process a selected result; second-pass outputs may only continue with Super-res only, without rerunning the first pass or Impact loop." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: /* @__PURE__ */ r("button", { onClick: () => c((k) => k + 1), children: [
        "↻ ",
        t === "zh" ? "刷新结果" : "Refresh"
      ] }) })
    ] }),
    !o && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "当前工作流缺少后处理二采支流，请重新载入仓库中的 V7 导播台示例工作流。" : "This workflow does not contain the standalone second-pass branch. Reload the V7 example workflow from the repository." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: n.map((k) => {
      const I = d[k.key], T = pe((I == null ? void 0 : I.response) ?? { results: [] });
      return /* @__PURE__ */ r("article", { class: "td-post-shot", children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("span", { children: [
            /* @__PURE__ */ r("strong", { children: k.shot.id }),
            /* @__PURE__ */ r("em", { children: k.shot.title })
          ] }),
          /* @__PURE__ */ r("span", { children: [
            k.shot.durationSeconds,
            "s"
          ] })
        ] }),
        !k.shot.enabled && /* @__PURE__ */ r("div", { class: "td-post-shot-disabled-note", children: t === "zh" ? "镜头已禁用，但仍可对历史一采结果进行后处理。" : "This shot is disabled, but its historical first-pass results remain available." }),
        I != null && I.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading results…" }) : I != null && I.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : T.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: T.map((u) => {
          const w = ie(u.path, "output"), b = Fr(u), C = b.includes(l[u.path]) ? l[u.path] : b[0], $ = C ? a[`${u.path}:${C}`] : void 0;
          return /* @__PURE__ */ r("div", { class: "td-second-pass-result", children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", onClick: () => w && p({ path: u.path, title: `${k.shot.id} · ${k.shot.title}` }), children: [
              w ? /* @__PURE__ */ r(ke, { src: w, alt: se(u.path) }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  Vr(u.stage, u.processingMode, t),
                  (u.stage === "legacy_unknown" || !u.stage) && /* @__PURE__ */ r("em", { children: t === "zh" ? "兼容" : "Compatible" })
                ] }),
                /* @__PURE__ */ r("span", { title: u.path, children: se(u.path) }),
                /* @__PURE__ */ r("small", { children: u.bytes ? `${(u.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-second-pass-actions", children: [
              C ? /* @__PURE__ */ r("select", { "aria-label": t === "zh" ? "该视频可用的处理方式" : "Available processing modes for this video", value: C, onChange: (D) => y((L) => ({ ...L, [u.path]: D.currentTarget.value })), children: b.map((D) => /* @__PURE__ */ r("option", { value: D, children: qr(D, t) })) }) : /* @__PURE__ */ r("span", { class: "td-second-pass-terminal", children: t === "zh" ? "只超分后不可再处理" : "Upscaled: no further processing" }),
              /* @__PURE__ */ r("button", { class: "primary td-second-pass-run", disabled: !o || !C || ($ == null ? void 0 : $.state) === "queued", onClick: () => C && void j(k.shot.id, u.path, C), children: ($ == null ? void 0 : $.state) === "queued" ? t === "zh" ? "排队/执行中…" : "Queued/running…" : ($ == null ? void 0 : $.state) === "done" ? t === "zh" ? "处理完成" : "Completed" : t === "zh" ? "开始处理" : "Process" })
            ] }),
            ($ == null ? void 0 : $.state) === "error" && /* @__PURE__ */ r("div", { class: "td-second-pass-error", children: $.message })
          ] }, u.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "没有可用的生成结果" : "No generated result available" })
      ] }, k.key);
    }) }),
    g && ie(g.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => p(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (k) => k.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: g.title }),
        /* @__PURE__ */ r("button", { onClick: () => p(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: ie(g.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { children: se(g.path) })
    ] }) })
  ] });
}
function Kr(e, t, o) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId, shotId: t, activeIndex: String(o) }).toString()}`;
}
function Jr(e) {
  return `/theodore-director/v1/postprocess/merged-videos?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId }).toString()}`;
}
async function bt(e) {
  const t = await fetch(e), o = await t.json();
  if (!t.ok) throw new Error(o.error || `HTTP ${t.status}`);
  return o;
}
function vt(e, t) {
  const o = pe(e).filter((n) => n.path !== t);
  return { found: !!o.length, count: o.length, results: o };
}
function Gr(e, t, o, n = "") {
  return { projectName: e.project.name, runId: e.project.runId, kind: t, shotId: n, path: o };
}
function Qr(e, t) {
  return e.processingMode === "latent_upscale_second_pass" ? t === "zh" ? "Latent 放大二采" : "Latent upscale 2nd pass" : e.processingMode === "super_resolution_second_pass" || e.stage === "second_pass" ? t === "zh" ? "超分二采" : "Super-res 2nd pass" : e.processingMode === "super_resolution_only" || e.stage === "upscaled" ? t === "zh" ? "只超分" : "Super-res only" : e.stage === "first_pass" ? t === "zh" ? "一采" : "1st pass" : t === "zh" ? "旧结果" : "Legacy";
}
function Yr({ plan: e, language: t }) {
  const o = ue(() => Ze(e), [e]), [n, d] = A({}), [s, a] = A({ loading: !0, response: { found: !1, results: [] } }), [h, g] = A({}), [p, x] = A(null), [c, l] = A(""), [y, j] = A(0);
  de(() => {
    let u = !1;
    const w = {};
    return o.forEach((b) => {
      w[b.key] = { loading: !0, response: { found: !1, results: [] } };
    }), d(w), l(""), o.forEach((b) => {
      bt(Kr(e, b.shot.id, b.activeIndex)).then((C) => {
        u || d(($) => ({ ...$, [b.key]: { loading: !1, response: C } }));
      }).catch((C) => {
        u || d(($) => ({ ...$, [b.key]: { loading: !1, response: { found: !1, results: [], error: String(C) } } }));
      });
    }), () => {
      u = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((u) => u.id).join("|"), y]), de(() => {
    let u = !1;
    return a({ loading: !0, response: { found: !1, results: [] } }), bt(Jr(e)).then((w) => {
      u || a({ loading: !1, response: w });
    }).catch((w) => {
      u || a({ loading: !1, response: { found: !1, results: [], error: String(w) } });
    }), () => {
      u = !0;
    };
  }, [e.project.name, e.project.runId, y]);
  const k = async (u, w, b = "", C = "") => {
    const $ = se(w.path);
    if (window.confirm(t === "zh" ? `确定将“${$}”移入系统回收站吗？
可从系统回收站恢复。` : `Move “${$}” to the system trash?
You can restore it from the trash.`)) {
      (p == null ? void 0 : p.path) === w.path && x(null), g((L) => ({ ...L, [w.path]: !0 })), l(""), await new Promise((L) => requestAnimationFrame(() => requestAnimationFrame(() => L())));
      try {
        const L = await fetch("/theodore-director/v1/postprocess/delete-video", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Gr(e, u, w.path, b))
        }), v = await L.json();
        if (!L.ok) throw new Error(v.error || `HTTP ${L.status}`);
        u === "merged" ? a((M) => ({ ...M, response: vt(M.response, w.path) })) : d((M) => {
          var O;
          return {
            ...M,
            [C]: { ...M[C], response: vt(((O = M[C]) == null ? void 0 : O.response) ?? { found: !1, results: [] }, w.path) }
          };
        });
      } catch (L) {
        l(String(L instanceof Error ? L.message : L));
      } finally {
        g((L) => {
          const v = { ...L };
          return delete v[w.path], v;
        });
      }
    }
  }, I = (u, w, b, C = "", $ = "") => {
    const D = ie(u.path, "output"), L = !!h[u.path];
    return /* @__PURE__ */ r("div", { class: `td-delete-result ${L ? "deleting" : ""}`, children: [
      /* @__PURE__ */ r("button", { class: "td-post-result-choice", disabled: L || !D, onClick: () => D && x({ path: u.path, title: b }), children: [
        L ? /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "…" }) : D ? /* @__PURE__ */ r(ke, { src: D, alt: Zr(u, t) }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
        /* @__PURE__ */ r("span", { children: [
          /* @__PURE__ */ r("strong", { children: w === "merged" ? t === "zh" ? "合并视频" : "Merged video" : Qr(u, t) }),
          /* @__PURE__ */ r("span", { title: u.path, children: se(u.path) }),
          /* @__PURE__ */ r("small", { children: u.bytes ? `${(u.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
        ] })
      ] }),
      /* @__PURE__ */ r("button", { class: "danger td-delete-video-button", disabled: L, onClick: () => void k(w, u, C, $), children: L ? t === "zh" ? "正在移动…" : "Moving…" : t === "zh" ? "移入回收站" : "Move to trash" })
    ] }, u.path);
  }, T = pe(s.response);
  return /* @__PURE__ */ r("section", { class: "td-postprocess td-delete-panel", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "删除视频" : "Delete videos" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "逐条预览并将当前项目的视频移入系统回收站；不会删除素材、latent 或尾帧。" : "Preview videos and move them to the system trash one at a time. Assets, latent files, and tail frames are preserved." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: /* @__PURE__ */ r("button", { onClick: () => j((u) => u + 1), children: [
        "↻ ",
        t === "zh" ? "刷新结果" : "Refresh"
      ] }) })
    ] }),
    c && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "删除失败：" : "Delete failed: ",
      c
    ] }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: o.map((u) => {
      const w = n[u.key], b = pe((w == null ? void 0 : w.response) ?? { results: [] });
      return /* @__PURE__ */ r("article", { class: "td-post-shot", children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("span", { children: [
            /* @__PURE__ */ r("strong", { children: u.shot.id }),
            /* @__PURE__ */ r("em", { children: u.shot.title })
          ] }),
          /* @__PURE__ */ r("span", { children: [
            u.shot.durationSeconds,
            "s"
          ] })
        ] }),
        !u.shot.enabled && /* @__PURE__ */ r("div", { class: "td-post-shot-disabled-note", children: t === "zh" ? "镜头已禁用，仍可管理其历史视频。" : "This shot is disabled; its historical videos can still be managed." }),
        w != null && w.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading results…" }) : w != null && w.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败" : "Unable to load results" }) : b.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: b.map((C) => I(C, "shot", `${u.shot.id} · ${u.shot.title}`, u.shot.id, u.key)) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "没有生成视频" : "No generated videos" })
      ] }, u.key);
    }) }),
    /* @__PURE__ */ r("section", { class: "td-post-merged td-delete-merged", children: [
      /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并视频" : "Merged videos" }),
        /* @__PURE__ */ r("span", { class: `td-result-state ${T.length ? "found" : ""}`, children: s.loading ? t === "zh" ? "查询中" : "Loading" : t === "zh" ? `${T.length} 个结果` : `${T.length} results` })
      ] }) }),
      s.loading ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "正在查询合并视频…" : "Loading merged videos…" }) : s.response.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: t === "zh" ? "无法查询合并视频" : "Unable to load merged videos" }) : T.length ? /* @__PURE__ */ r("div", { class: "td-delete-merged-list", children: T.map((u) => I(u, "merged", t === "zh" ? "合并视频" : "Merged video")) }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "没有合并视频" : "No merged videos" })
    ] }),
    p && ie(p.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => x(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (u) => u.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: p.title }),
        /* @__PURE__ */ r("button", { "aria-label": t === "zh" ? "关闭预览" : "Close preview", onClick: () => x(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: ie(p.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { title: p.path, children: se(p.path) })
    ] }) })
  ] });
}
function Zr(e, t) {
  return `${t === "zh" ? "视频" : "Video"} ${se(e.path)}`;
}
async function xt(e) {
  const t = await fetch(e), o = await t.json();
  if (!t.ok) throw new Error(o.error || `HTTP ${t.status}`);
  return o;
}
function Xr(e, t, o) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t,
    activeIndex: String(o)
  }).toString()}`;
}
function eo(e) {
  return `/theodore-director/v1/postprocess/merged-videos?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId }).toString()}`;
}
function to({ plan: e, language: t, queueSecondPass: o }) {
  const [n, d] = A("merge");
  return /* @__PURE__ */ r("section", { class: "td-postprocess-shell", children: [
    /* @__PURE__ */ r("div", { class: "td-post-mode-tabs", role: "tablist", children: [
      /* @__PURE__ */ r("button", { class: n === "merge" ? "active" : "", role: "tab", "aria-selected": n === "merge", onClick: () => d("merge"), children: t === "zh" ? "合并视频" : "Merge videos" }),
      /* @__PURE__ */ r("button", { class: n === "second-pass" ? "active" : "", role: "tab", "aria-selected": n === "second-pass", onClick: () => d("second-pass"), children: t === "zh" ? "单独二采" : "Standalone second pass" }),
      /* @__PURE__ */ r("button", { class: n === "delete" ? "active" : "", role: "tab", "aria-selected": n === "delete", onClick: () => d("delete"), children: t === "zh" ? "删除视频" : "Delete videos" })
    ] }),
    n === "merge" ? /* @__PURE__ */ r(ro, { plan: e, language: t }) : n === "second-pass" ? /* @__PURE__ */ r(Wr, { plan: e, language: t, queueSecondPass: o }) : /* @__PURE__ */ r(Yr, { plan: e, language: t })
  ] });
}
function ro({ plan: e, language: t }) {
  const o = ue(() => Ze(e), [e]), [n, d] = A({}), [s, a] = A({}), [h, g] = A({}), [p, x] = A(null), [c, l] = A(!1), [y, j] = A(""), [k, I] = A(""), [T, u] = A({ found: !1, results: [] }), [w, b] = A(!1), [C, $] = A(!1), [D, L] = A(""), [v, M] = A(0), [O, F] = A("1"), [Z, oe] = A(String(o.length || 1)), m = o.filter((_) => _.shot.enabled), E = m.length > 0 && m.every((_) => s[_.key]), R = Or(o, s, h), G = R.filter((_) => !_.path), V = o.some((_) => {
    var z;
    return s[_.key] && ((z = n[_.key]) == null ? void 0 : z.loading);
  }), H = o.reduce(
    (_, z) => _ + (z.shot.enabled && s[z.key] ? z.shot.durationSeconds : 0),
    0
  ), ee = ue(() => pe(T), [T]), re = ee.find((_) => _.path === D) ?? ee[0];
  de(() => {
    let _ = !1;
    const z = {}, N = {};
    return o.forEach((K) => {
      z[K.key] = K.shot.enabled, N[K.key] = { loading: !0, response: { found: !1, results: [] } };
    }), a((K) => {
      const q = {};
      return o.forEach((Y) => {
        q[Y.key] = Y.shot.enabled ? K[Y.key] ?? z[Y.key] : !1;
      }), q;
    }), d(N), j(""), o.forEach((K) => {
      xt(Xr(e, K.shot.id, K.activeIndex)).then((q) => {
        if (_) return;
        const Y = pe(q);
        d((X) => ({ ...X, [K.key]: { loading: !1, response: q } })), g((X) => {
          var te;
          return {
            ...X,
            [K.key]: Y.some((me) => me.path === X[K.key]) ? X[K.key] : ((te = Y[0]) == null ? void 0 : te.path) ?? ""
          };
        });
      }).catch((q) => {
        _ || d((Y) => ({
          ...Y,
          [K.key]: { loading: !1, response: { found: !1, results: [], error: String(q) } }
        }));
      });
    }), () => {
      _ = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((_) => `${_.id}:${_.enabled}`).join("|"), v]), de(() => {
    let _ = !1;
    return b(!0), xt(eo(e)).then((z) => {
      if (_) return;
      const N = pe(z);
      u(z), L((K) => {
        var q;
        return N.some((Y) => Y.path === K) ? K : ((q = N[0]) == null ? void 0 : q.path) ?? "";
      });
    }).catch((z) => {
      _ || u({ found: !1, results: [], error: String(z) });
    }).finally(() => {
      _ || b(!1);
    }), () => {
      _ = !0;
    };
  }, [e.project.name, e.project.runId, v]);
  const ge = () => {
    const _ = !E;
    a((z) => {
      const N = { ...z };
      return m.forEach((K) => {
        N[K.key] = _;
      }), N;
    });
  }, le = () => {
    const _ = Number(O), z = Number(Z);
    if (!Number.isInteger(_) || !Number.isInteger(z) || _ < 1 || z < _ || z > o.length) {
      window.alert(t === "zh" ? `请输入有效范围：1 ≤ m ≤ n ≤ ${o.length}` : `Enter a valid range: 1 ≤ m ≤ n ≤ ${o.length}`);
      return;
    }
    a(Hr(o, _, z));
  }, ze = async () => {
    if (!R.length) {
      window.alert(t === "zh" ? "请至少选择一个镜头" : "Select at least one shot.");
      return;
    }
    if (G.length) {
      window.alert(t === "zh" ? `以下已选镜头没有可用结果：${G.map((_) => _.shotId).join("、")}` : `Selected shots without a result: ${G.map((_) => _.shotId).join(", ")}`);
      return;
    }
    l(!0), j("");
    try {
      const _ = await fetch("/theodore-director/v1/postprocess/merge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId, selections: R })
      }), z = await _.json();
      if (!_.ok) throw new Error(z.error || `HTTP ${_.status}`);
      M((N) => N + 1);
    } catch (_) {
      j(String(_ instanceof Error ? _.message : _));
    } finally {
      l(!1);
    }
  }, Ue = async () => {
    $(!0), I("");
    try {
      const _ = await fetch("/theodore-director/v1/postprocess/open-folder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId })
      }), z = await _.json();
      if (!_.ok) throw new Error(z.error || `HTTP ${_.status}`);
    } catch (_) {
      I(String(_ instanceof Error ? _.message : _));
    } finally {
      $(!1);
    }
  }, ye = re != null && re.path ? ie(re.path, "output") : null;
  return /* @__PURE__ */ r("section", { class: "td-postprocess", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并视频" : "Merge videos" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "从每个镜头选择一个结果，按当前分镜顺序进行无损合并。" : "Choose one result per shot and merge them losslessly in storyboard order." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: [
        /* @__PURE__ */ r("button", { disabled: C, onClick: Ue, children: [
          "📁 ",
          C ? t === "zh" ? "正在打开…" : "Opening…" : t === "zh" ? "打开结果文件夹" : "Open results folder"
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => M((_) => _ + 1), children: [
          "↻ ",
          t === "zh" ? "刷新结果" : "Refresh"
        ] }),
        /* @__PURE__ */ r("button", { onClick: ge, children: E ? t === "zh" ? "全部取消" : "Clear all" : t === "zh" ? "一键全选" : "Select all" })
      ] })
    ] }),
    k && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "打开结果文件夹失败：" : "Unable to open results folder: ",
      k
    ] }),
    /* @__PURE__ */ r("div", { class: "td-post-summary", children: [
      /* @__PURE__ */ r("span", { children: t === "zh" ? `已选择 ${R.length}/${m.length} 个启用镜头` : `${R.length}/${m.length} enabled shots selected` }),
      /* @__PURE__ */ r("span", { children: t === "zh" ? `预计时长 ${H.toFixed(1)} 秒` : `Estimated duration ${H.toFixed(1)} sec` }),
      /* @__PURE__ */ r("div", { class: "td-post-range", role: "group", "aria-label": t === "zh" ? "合并视频范围" : "Merge video range", children: [
        /* @__PURE__ */ r("span", { children: t === "zh" ? "范围" : "Range" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: o.length, step: "1", value: O, "aria-label": t === "zh" ? "起始镜头 m" : "Start shot m", onInput: (_) => F(_.currentTarget.value) }),
        /* @__PURE__ */ r("span", { children: "—" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: o.length, step: "1", value: Z, "aria-label": t === "zh" ? "结束镜头 n" : "End shot n", onInput: (_) => oe(_.currentTarget.value) }),
        /* @__PURE__ */ r("button", { disabled: !o.length, onClick: le, children: t === "zh" ? "确认范围" : "Apply range" })
      ] }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: c || V || !R.length || !!G.length, onClick: ze, children: c ? t === "zh" ? "正在合并…" : "Merging…" : t === "zh" ? "合并所选视频" : "Merge selected videos" })
    ] }),
    y && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "合并失败：" : "Merge failed: ",
      y
    ] }),
    G.length > 0 && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "已选镜头中存在尚未生成视频的镜头。" : "Some selected shots do not have generated videos yet." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: o.map((_) => {
      const z = n[_.key], N = pe((z == null ? void 0 : z.response) ?? { results: [] }), K = !!s[_.key];
      return /* @__PURE__ */ r("article", { class: `td-post-shot ${K ? "selected" : ""} ${_.shot.enabled ? "" : "disabled"}`, children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: K, disabled: !_.shot.enabled, onChange: (q) => a((Y) => ({ ...Y, [_.key]: q.currentTarget.checked })) }),
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("strong", { children: _.shot.id }),
              /* @__PURE__ */ r("em", { children: _.shot.title })
            ] })
          ] }),
          /* @__PURE__ */ r("span", { children: [
            _.shot.durationSeconds,
            "s"
          ] })
        ] }),
        !_.shot.enabled && /* @__PURE__ */ r("div", { class: "td-post-shot-disabled-note", children: t === "zh" ? "该镜头当前已禁用：历史结果可以预览，但不能参加合并。" : "This shot is disabled: historical results can be previewed but cannot be merged." }),
        z != null && z.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading generated results…" }) : z != null && z.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : N.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: N.map((q, Y) => {
          const X = ie(q.path, "output"), te = h[_.key] === q.path, me = Kt(q.path, N.length - Y);
          return /* @__PURE__ */ r("div", { class: `td-post-result ${te ? "selected" : ""}`, children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", role: "radio", "aria-checked": te, onClick: () => g((U) => ({ ...U, [_.key]: q.path })), children: [
              X ? /* @__PURE__ */ r(ke, { src: X, alt: `${_.shot.title} ${t === "zh" ? "结果" : "result"} ${me}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  t === "zh" ? `结果 ${me}` : `Result ${me}`,
                  Y === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
                ] }),
                /* @__PURE__ */ r("span", { title: q.path, children: se(q.path) }),
                /* @__PURE__ */ r("small", { children: q.bytes ? `${(q.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "td-post-result-play", disabled: !X, title: t === "zh" ? "播放预览" : "Play preview", onClick: () => X && x({ path: q.path, title: `${_.shot.id} · ${_.shot.title}` }), children: "▶" })
          ] }, q.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "未找到这个镜头的生成结果" : "No generated result found for this shot" })
      ] }, _.key);
    }) }),
    /* @__PURE__ */ r("section", { class: "td-post-merged", children: [
      /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并结果" : "Merged results" }),
        /* @__PURE__ */ r("span", { class: `td-result-state ${ee.length ? "found" : ""}`, children: w ? t === "zh" ? "查询中" : "Checking" : t === "zh" ? `${ee.length} 个结果` : `${ee.length} results` })
      ] }) }),
      w ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "正在查询合并结果…" : "Loading merged results…" }) : T.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: t === "zh" ? "无法查询合并结果" : "Unable to query merged results" }) : re && ye ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
        /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
          /* @__PURE__ */ r("video", { src: ye, controls: !0, preload: "metadata", playsInline: !0 }, re.path),
          /* @__PURE__ */ r("div", { class: "td-generated-meta", title: re.path, children: re.path })
        ] }),
        /* @__PURE__ */ r("div", { class: "td-result-list", children: ee.map((_, z) => {
          const N = ie(_.path, "output");
          return /* @__PURE__ */ r("button", { class: `td-result-item ${_.path === re.path ? "selected" : ""}`, onClick: () => L(_.path), children: [
            N ? /* @__PURE__ */ r(ke, { src: N, alt: `${t === "zh" ? "合并结果" : "Merged result"} ${ee.length - z}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
            /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
              /* @__PURE__ */ r("strong", { children: [
                t === "zh" ? `合并结果 ${ee.length - z}` : `Merged result ${ee.length - z}`,
                z === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
              ] }),
              /* @__PURE__ */ r("span", { children: se(_.path) }),
              /* @__PURE__ */ r("small", { children: _.bytes ? `${(_.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
            ] })
          ] }, _.path);
        }) })
      ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "还没有合并结果" : "No merged result yet" })
    ] }),
    p && ie(p.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => x(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (_) => _.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: p.title }),
        /* @__PURE__ */ r("button", { "aria-label": t === "zh" ? "关闭预览" : "Close preview", onClick: () => x(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: ie(p.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { title: p.path, children: se(p.path) })
    ] }) })
  ] });
}
function oo(e) {
  const t = e.reduce((o, n) => {
    const d = /^shot_(\d+)$/i.exec(n.id.trim());
    return d ? Math.max(o, Number(d[1])) : o;
  }, 0);
  return Math.max(t, e.length) + 1;
}
function Jt(e, t = 5) {
  return {
    id: `shot_${String(e).padStart(3, "0")}`,
    title: `Shot ${e}`,
    prompt: "",
    negativePrompt: "",
    durationSeconds: t,
    enabled: !0,
    latentRelay: !0,
    secondSamplingMode: "super_resolution_second_pass",
    seed: null,
    disabledAssetIds: []
  };
}
function _t(e, t, o) {
  const n = oo(e), d = Array.from({ length: t }, (s, a) => Jt(n + a, o));
  return [...e, ...d];
}
function no(e = 5) {
  return [Jt(1, e)];
}
const Gt = (e) => `${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, je = (e) => JSON.parse(JSON.stringify(e)), so = { image: "图片", video: "视频", audio: "音频" }, yt = ["off", "super_resolution_second_pass", "latent_upscale_second_pass", "super_resolution_only"];
function wt(e, t) {
  return {
    off: ["关闭二采", "Off"],
    super_resolution_second_pass: ["超分二采", "Super-res 2nd pass"],
    latent_upscale_second_pass: ["Latent 放大二采", "Latent upscale 2nd pass"],
    super_resolution_only: ["只超分", "Super-res only"]
  }[e][t === "zh" ? 0 : 1];
}
function kt(e, t) {
  return e.processingMode === "latent_upscale_second_pass" ? t === "zh" ? "Latent 二采" : "Latent 2nd" : e.processingMode === "super_resolution_second_pass" || e.stage === "second_pass" ? t === "zh" ? "超分二采" : "Super-res 2nd" : e.processingMode === "super_resolution_only" || e.stage === "upscaled" ? t === "zh" ? "只超分" : "Super-res only" : e.stage === "first_pass" ? t === "zh" ? "一采" : "1st pass" : t === "zh" ? "旧结果" : "Legacy";
}
function zt(e) {
  var o;
  const t = je(e);
  return t.schemaVersion = 5, (o = t.project.id) != null && o.trim() || (t.project.id = Gt("project")), t.shots = t.shots.map((n) => {
    const d = n;
    return {
      ...n,
      latentRelay: n.latentRelay ?? !0,
      // 旧 BOOL 开关无损迁移到 V7.2 原有的超分二采模式。
      secondSamplingMode: n.secondSamplingMode ?? (d.secondSampling === !1 ? "off" : "super_resolution_second_pass"),
      disabledAssetIds: n.disabledAssetIds ?? []
    };
  }), t.assets = t.assets.map((n) => ({ ...n, shotIds: n.shotIds ?? [] })), t;
}
function io(e) {
  return e.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function ao(e) {
  const t = Gt(e);
  return { id: t, alias: t, kind: e, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: e === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function St(e, t, o) {
  const n = new FormData();
  n.append("projectName", e), n.append("kind", t), n.append("file", o);
  const d = await fetch("/theodore-director/v1/assets", { method: "POST", body: n }), s = await d.json();
  if (!d.ok || !s.path) throw new Error(s.error || `HTTP ${d.status}`);
  return s.path;
}
async function lo(e, t, o) {
  const n = new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t.id,
    activeIndex: String(o)
  }), d = await fetch(`/theodore-director/v1/generated-video?${n.toString()}`), s = await d.json();
  if (!d.ok) throw new Error(s.error || `HTTP ${d.status}`);
  return s;
}
async function co(e) {
  var s;
  if ((s = navigator.clipboard) != null && s.writeText)
    try {
      await navigator.clipboard.writeText(e);
      return;
    } catch {
    }
  const t = document.activeElement, o = t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement ? { start: t.selectionStart, end: t.selectionEnd, direction: t.selectionDirection } : null, n = document.createElement("textarea");
  n.value = e, n.style.position = "fixed", n.style.opacity = "0", document.body.append(n), n.select();
  const d = document.execCommand("copy");
  if (n.remove(), t instanceof HTMLElement && t.focus({ preventScroll: !0 }), o && (t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement) && t.setSelectionRange(o.start, o.end, o.direction ?? void 0), !d) throw new Error("浏览器拒绝写入剪贴板");
}
function po({ language: e, projectName: t, runId: o, onClearShots: n, onClearAssets: d, onProjectCleared: s }) {
  const [a, h] = A(!1), g = !!(t.trim() && o.trim()), p = async () => {
    const l = `${t.trim()} / Run ${o.trim()}`, y = e === "zh" ? `确认清空 ${l}？

该运行目录内的全部视频、latent、尾帧、结果文件和元数据都会移入系统回收站。输入素材及其他 Run 不会被删除。` : `Clear ${l}?

All videos, latent files, tail frames, result files, and metadata in this run will be moved to the system trash. Input assets and other runs will not be deleted.`;
    if (window.confirm(y)) {
      h(!0);
      try {
        const j = await Cr(t, o);
        s(), window.alert(e === "zh" ? `已移入系统回收站：${j}` : `Moved to system trash: ${j}`);
      } catch (j) {
        window.alert(`${e === "zh" ? "清空项目失败" : "Failed to clear project"}: ${j instanceof Error ? j.message : String(j)}`);
      } finally {
        h(!1);
      }
    }
  };
  return /* @__PURE__ */ r("section", { class: "td-project-cleanup", children: [
    /* @__PURE__ */ r("article", { children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("strong", { children: e === "zh" ? "清空分镜" : "Clear shots" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "删除全部分镜及其提示词，并保留一个空白镜头。不会删除磁盘生成文件。" : "Remove all shots and their prompts, leaving one blank shot. Generated files remain on disk." })
      ] }),
      /* @__PURE__ */ r("button", { class: "danger", onClick: () => {
        const l = e === "zh" ? `确认清空全部分镜及其正向、负向提示词？

操作后会保留一个空白镜头以便继续编辑。素材库、全局提示词前后缀和磁盘生成文件不会被删除。` : `Clear every shot and its positive and negative prompts?

One blank shot will remain for editing. Media, global prompt prefix/suffix, and generated files on disk will not be deleted.`;
        window.confirm(l) && n();
      }, children: e === "zh" ? "清空分镜" : "Clear shots" })
    ] }),
    /* @__PURE__ */ r("article", { children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("strong", { children: e === "zh" ? "清空素材库" : "Clear media library" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "只移除当前工作流中的素材引用；本地图片、视频和音频文件保持不变。" : "Remove media references from this workflow only; local image, video, and audio files remain untouched." })
      ] }),
      /* @__PURE__ */ r("button", { class: "danger", onClick: () => {
        const l = e === "zh" ? `确认清空素材库中的全部引用？

素材条目会从当前工作流中移除，但本地图片、视频和音频文件不会被删除。提示词中的引用文本会保留并显示为不可用。` : `Clear every media reference from this workflow?

Media entries will be removed, but local image, video, and audio files will not be deleted. Reference text in prompts will remain and be shown as unavailable.`;
        window.confirm(l) && d();
      }, children: e === "zh" ? "清空素材库" : "Clear media" })
    ] }),
    /* @__PURE__ */ r("article", { children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("strong", { children: e === "zh" ? "清空当前项目" : "Clear current project" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "清除当前 Project name + Run ID 的全部生成文件，并移入系统回收站。输入素材和其他 Run 不受影响。" : "Move every generated file for the current Project name + Run ID to the system trash. Input assets and other runs are unaffected." })
      ] }),
      /* @__PURE__ */ r("button", { class: "danger", disabled: !g || a, onClick: () => void p(), children: a ? e === "zh" ? "正在移入回收站…" : "Moving to trash…" : e === "zh" ? "清空项目" : "Clear project" })
    ] })
  ] });
}
function ho({ initial: e, onSave: t, onClose: o, supportsSecondSampling: n, queueSecondPass: d }) {
  const [s, a] = A(() => zt(e)), [h, g] = A("shots"), [p, x] = A(0), [c, l] = A(() => navigator.language.startsWith("zh") ? "zh" : "en"), [y, j] = A({}), [k, I] = A(!0), [T, u] = A(!1), [w, b] = A(0), [C, $] = A({ found: !1, results: [] }), [D, L] = A(""), [v, M] = A(!1), [O, F] = A(""), [Z, oe] = A(!0), [m, E] = A(!1), [R, G] = A(!1), [V, H] = A([]), [ee, re] = A("5"), [ge, le] = A("1"), [ze, Ue] = A("5"), [ye, _] = A("super_resolution_second_pass");
  de(() => {
    const i = (f) => {
      f.target instanceof Element && f.target.closest(".td-shot-media-name") && f.preventDefault();
    };
    return document.addEventListener("mousedown", i), () => document.removeEventListener("mousedown", i);
  }, []);
  const z = s.shots[Math.min(p, s.shots.length - 1)], N = ue(() => z ? Wt(s, z) : null, [s, z]), K = ue(() => z ? Bt(s, z) : [], [s, z]), q = z != null && z.enabled ? s.shots.slice(0, p).filter((i) => i.enabled).length : -1, Y = V.length > 0 && V.every((i) => i.enabled), X = ue(() => pe(C), [C]), te = X.find((i) => i.path === D) ?? X[0], me = te != null && te.path ? ie(te.path, "output") : null, U = (i) => a((f) => {
    const S = je(f);
    return i(S), S;
  }), Xe = (i, f) => U((S) => {
    const P = i + f;
    P < 0 || P >= S.shots.length || ([S.shots[i], S.shots[P]] = [S.shots[P], S.shots[i]], x(P));
  }), Qt = (i) => U((f) => {
    f.shots.length <= 1 || (f.shots.splice(i, 1), x((S) => S > i ? S - 1 : S === i ? Math.min(i, f.shots.length - 1) : S));
  }), Yt = () => {
    H(je(s.shots)), E(!0);
  }, Zt = () => {
    const i = Number(ee);
    if (!Number.isFinite(i) || i <= 0) {
      window.alert(c === "zh" ? "统一时长必须大于 0 秒" : "The shared duration must be greater than 0 seconds.");
      return;
    }
    H((f) => f.map((S) => ({ ...S, durationSeconds: i })));
  }, Xt = () => {
    const i = Number(ge), f = Number(ze);
    if (!Number.isInteger(i) || i < 1 || i > 100) {
      window.alert(c === "zh" ? "新增镜头数量必须是 1–100 的整数" : "The shot count must be an integer from 1 to 100.");
      return;
    }
    if (!Number.isFinite(f) || f <= 0) {
      window.alert(c === "zh" ? "新增镜头时长必须大于 0 秒" : "The new-shot duration must be greater than 0 seconds.");
      return;
    }
    H((S) => _t(S, i, f));
  }, er = () => {
    const i = !Y;
    H((f) => f.map((S) => ({ ...S, enabled: i })));
  }, tr = () => {
    if (V.some((i) => !Number.isFinite(i.durationSeconds) || i.durationSeconds <= 0)) {
      window.alert(c === "zh" ? "每个镜头的时长都必须大于 0 秒" : "Every shot duration must be greater than 0 seconds.");
      return;
    }
    U((i) => {
      i.shots = je(V);
    }), x((i) => Math.min(i, V.length - 1)), E(!1);
  }, rr = () => {
    const i = URL.createObjectURL(new Blob([JSON.stringify(s, null, 2)], { type: "application/json" })), f = document.createElement("a");
    f.href = i, f.download = `${io(s.project.name)}.director.json`, f.click(), URL.revokeObjectURL(i);
  }, or = () => {
    const i = Ar(s);
    if (i.length) {
      window.alert(`计划未通过校验：

${i.join(`
`)}`);
      return;
    }
    t(s);
  };
  return de(() => {
    let i = !1;
    return z ? (M(!0), lo(s, z, q).then((f) => {
      if (i) return;
      const S = pe(f);
      $(f), L((P) => {
        var B;
        return S.some((ne) => ne.path === P) ? P : ((B = S[0]) == null ? void 0 : B.path) ?? "";
      });
    }).catch((f) => {
      i || ($({ found: !1, results: [], error: String(f) }), L(""));
    }).finally(() => {
      i || M(!1);
    }), () => {
      i = !0;
    }) : ($({ found: !1, results: [] }), L(""), M(!1), () => {
      i = !0;
    });
  }, [s.project.name, s.project.runId, z == null ? void 0 : z.id, z == null ? void 0 : z.enabled, q, w]), /* @__PURE__ */ r("div", { class: "td-shell", children: [
    /* @__PURE__ */ r("header", { children: [
      /* @__PURE__ */ r("h1", { children: be(c, "title") }),
      /* @__PURE__ */ r("div", { class: "td-actions", children: [
        /* @__PURE__ */ r("button", { onClick: rr, children: "导出 / Export" }),
        /* @__PURE__ */ r("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ r("input", { type: "file", accept: "application/json,.json", onChange: async (i) => {
            var S;
            const f = (S = i.currentTarget.files) == null ? void 0 : S[0];
            if (f)
              try {
                const P = JSON.parse(await f.text());
                if (!P.project || !Array.isArray(P.shots) || !Array.isArray(P.assets)) throw new Error("不是有效的 Theodore Director Plan");
                a(zt(P)), x(0);
              } catch (P) {
                window.alert(String(P));
              }
          } })
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => l(c === "zh" ? "en" : "zh"), children: c === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: or, children: be(c, "save") }),
        /* @__PURE__ */ r("button", { onClick: o, children: be(c, "close") })
      ] })
    ] }),
    /* @__PURE__ */ r("nav", { children: ["shots", "assets", "settings", "postprocess"].map((i) => /* @__PURE__ */ r("button", { class: h === i ? "active" : "", onClick: () => g(i), children: be(c, i) })) }),
    /* @__PURE__ */ r("main", { children: [
      h === "shots" && /* @__PURE__ */ r("div", { class: "td-shots", children: [
        /* @__PURE__ */ r("aside", { class: "td-shot-sidebar", children: [
          n && /* @__PURE__ */ r("div", { class: "td-bulk-processing", children: [
            /* @__PURE__ */ r("select", { "aria-label": c === "zh" ? "批量处理模式" : "Bulk processing mode", value: ye, onChange: (i) => _(i.currentTarget.value), children: yt.map((i) => /* @__PURE__ */ r("option", { value: i, children: wt(i, c) })) }),
            /* @__PURE__ */ r("button", { class: "wide td-bulk-toggle", onClick: () => U((i) => {
              i.shots.forEach((f) => {
                f.secondSamplingMode = ye;
              });
            }), children: c === "zh" ? "应用到全部镜头" : "Apply to all shots" })
          ] }),
          /* @__PURE__ */ r("div", { class: "td-shot-list", children: s.shots.map((i, f) => /* @__PURE__ */ r("div", { class: `td-shot-card ${f === p ? "selected" : ""}`, onClick: () => x(f), children: [
            /* @__PURE__ */ r("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ r("button", { class: "td-shot-delete", disabled: s.shots.length <= 1, title: c === "zh" ? s.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : s.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": c === "zh" ? "删除镜头" : "Delete shot", onClick: (S) => {
              S.stopPropagation(), Qt(f);
            }, children: "×" }) }),
            /* @__PURE__ */ r("strong", { children: [
              f + 1,
              ". ",
              i.title
            ] }),
            /* @__PURE__ */ r("span", { children: [
              i.durationSeconds,
              "s · ",
              i.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-move-actions", children: [
              /* @__PURE__ */ r("button", { title: c === "zh" ? "上移镜头" : "Move shot up", onClick: (S) => {
                S.stopPropagation(), Xe(f, -1);
              }, children: "↑" }),
              /* @__PURE__ */ r("button", { title: c === "zh" ? "下移镜头" : "Move shot down", onClick: (S) => {
                S.stopPropagation(), Xe(f, 1);
              }, children: "↓" })
            ] })
          ] }, i.id)) }),
          /* @__PURE__ */ r("div", { class: "td-shot-sidebar-footer", children: [
            /* @__PURE__ */ r("button", { class: "wide", onClick: () => U((i) => {
              const f = i.shots.length;
              i.shots = _t(i.shots, 1, 5), x(f);
            }), children: [
              "＋ ",
              be(c, "addShot")
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-batch-entry", children: /* @__PURE__ */ r("button", { class: "wide", onClick: Yt, children: c === "zh" ? "批量处理镜头" : "Batch edit shots" }) })
          ] })
        ] }),
        z && /* @__PURE__ */ r("section", { class: "td-form", children: [
          /* @__PURE__ */ r("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ r("label", { children: [
              "ID",
              /* @__PURE__ */ r("input", { value: z.id, onInput: (i) => U((f) => {
                f.shots[p].id = i.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ r("input", { value: z.title, onInput: (i) => U((f) => {
                f.shots[p].title = i.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: z.durationSeconds, onInput: (i) => U((f) => {
                f.shots[p].durationSeconds = Number(i.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: z.enabled, onChange: (i) => U((f) => {
                  f.shots[p].enabled = i.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: q === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: z.latentRelay, onChange: (i) => U((f) => {
                  f.shots[p].latentRelay = i.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: [
                  "latent接力 / Relay",
                  q === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              n && /* @__PURE__ */ r("label", { class: "td-processing-mode", children: [
                /* @__PURE__ */ r("span", { children: c === "zh" ? "高清处理" : "Processing" }),
                /* @__PURE__ */ r("select", { value: z.secondSamplingMode, onChange: (i) => U((f) => {
                  f.shots[p].secondSamplingMode = i.currentTarget.value;
                }), children: yt.map((i) => /* @__PURE__ */ r("option", { value: i, children: wt(i, c) })) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { class: "td-field-label", children: [
              "提示词（使用 ",
              /* @__PURE__ */ r("code", { children: "{{ref:别名}}" }),
              "，输入 ",
              /* @__PURE__ */ r("code", { children: "@" }),
              " 快速选择）"
            ] }),
            /* @__PURE__ */ r(Be, { rows: 10, value: z.prompt, mentionAssets: K, mentionLanguage: c, isReferenceValid: (i) => qt(s, z, i), onInput: (i) => U((f) => {
              f.shots[p].prompt = i.currentTarget.value;
            }) }, z.id)
          ] }),
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ r("textarea", { rows: 3, value: z.negativePrompt, onInput: (i) => U((f) => {
              f.shots[p].negativePrompt = i.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ r("legend", { children: "本镜头素材 / Shot media" }),
            /* @__PURE__ */ r("label", { class: "td-shot-media-display-toggle", children: [
              /* @__PURE__ */ r("input", { type: "checkbox", checked: Z, onChange: (i) => oe(i.currentTarget.checked) }),
              /* @__PURE__ */ r("span", { children: c === "zh" ? "显示别名" : "Show aliases" })
            ] }),
            s.assets.map((i) => {
              const f = !z.disabledAssetIds.includes(i.id), S = Z ? i.alias : se(i.path) || i.alias, P = `{{ref:${i.alias}}}`;
              return /* @__PURE__ */ r("div", { class: `td-shot-media-card ${f ? "" : "disabled"}`, children: [
                /* @__PURE__ */ r("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ r(mt, { asset: i, compact: !0 }),
                  /* @__PURE__ */ r("span", { class: "td-shot-media-kind", children: c === "zh" ? so[i.kind] : i.kind }),
                  /* @__PURE__ */ r("label", { class: "td-shot-media-toggle", title: f ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ r("input", { type: "checkbox", checked: f, onChange: (B) => U((ne) => {
                    const ce = ne.shots[p].disabledAssetIds;
                    ne.shots[p].disabledAssetIds = B.currentTarget.checked ? ce.filter((xe) => xe !== i.id) : [.../* @__PURE__ */ new Set([...ce, i.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ r("button", { class: `td-shot-media-name ${O === i.id ? "copied" : ""}`, title: `${S}
${c === "zh" ? "点击复制" : "Click to copy"} ${P}`, onClick: async () => {
                  try {
                    await co(P), F(i.id), window.setTimeout(() => F((B) => B === i.id ? "" : B), 1400);
                  } catch (B) {
                    window.alert(`${c === "zh" ? "复制失败" : "Copy failed"}: ${String(B)}`);
                  }
                }, children: [
                  /* @__PURE__ */ r("span", { children: S }),
                  O === i.id && /* @__PURE__ */ r("em", { children: c === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, i.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ r("aside", { class: "td-preview", children: [
          /* @__PURE__ */ r("details", { open: k, onToggle: (i) => I(i.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: be(c, "preview") }),
              /* @__PURE__ */ r("span", { class: "td-summary-counts", children: [
                "Picture ",
                (N == null ? void 0 : N.slots.filter((i) => i.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (N == null ? void 0 : N.slots.filter((i) => i.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (N == null ? void 0 : N.audioCount) ?? 0,
                "/3 · Files ",
                (N == null ? void 0 : N.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body", children: [
              N != null && N.errors.length ? /* @__PURE__ */ r("ul", { class: "errors", children: N.errors.map((i) => /* @__PURE__ */ r("li", { children: i })) }) : /* @__PURE__ */ r("p", { class: "ok", children: be(c, "noErrors") }),
              /* @__PURE__ */ r("ol", { children: N == null ? void 0 : N.slots.map((i) => /* @__PURE__ */ r("li", { children: [
                /* @__PURE__ */ r("code", { children: i.label }),
                " ← ",
                i.alias
              ] })) }),
              /* @__PURE__ */ r("pre", { children: N == null ? void 0 : N.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ r("details", { open: T, onToggle: (i) => u(i.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: c === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ r("span", { class: `td-result-state ${X.length ? "found" : ""}`, children: v ? c === "zh" ? "查询中" : "Checking" : X.length ? c === "zh" ? `${X.length} 个结果` : `${X.length} results` : c === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ r("div", { class: "td-result-actions", children: /* @__PURE__ */ r("button", { onClick: () => b((i) => i + 1), children: [
                "↻ ",
                c === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              v ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: c === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : C.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: c === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again." }) : te && me ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
                /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
                  /* @__PURE__ */ r("video", { src: me, controls: !0, preload: "metadata", playsInline: !0 }, te.path),
                  /* @__PURE__ */ r("div", { class: "td-generated-meta", title: te.path, children: [
                    kt(te, c),
                    " · ",
                    te.path,
                    te.bytes ? ` · ${(te.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                  ] })
                ] }),
                /* @__PURE__ */ r("div", { class: "td-result-list", "aria-label": c === "zh" ? "全部生成结果" : "All generated results", children: X.map((i, f) => {
                  const S = ie(i.path, "output"), P = Kt(i.path, X.length - f), B = i.modifiedAt ? new Date(i.modifiedAt * 1e3).toLocaleString(c === "zh" ? "zh-CN" : "en-US") : "";
                  return /* @__PURE__ */ r("button", { class: `td-result-item ${i.path === te.path ? "selected" : ""}`, onClick: () => L(i.path), children: [
                    S ? /* @__PURE__ */ r(ke, { src: S, alt: `${c === "zh" ? "结果" : "Result"} ${P}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: /* @__PURE__ */ r("span", { children: "×" }) }),
                    /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
                      /* @__PURE__ */ r("strong", { children: [
                        c === "zh" ? `结果 ${P}` : `Result ${P}`,
                        " · ",
                        kt(i, c),
                        f === 0 && /* @__PURE__ */ r("em", { children: c === "zh" ? "最新" : "Latest" })
                      ] }),
                      /* @__PURE__ */ r("span", { title: i.path, children: se(i.path) }),
                      /* @__PURE__ */ r("small", { children: [i.bytes ? `${(i.bytes / 1024 / 1024).toFixed(1)} MB` : "", B].filter(Boolean).join(" · ") })
                    ] })
                  ] }, i.path);
                }) })
              ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: c === "zh" ? "未在预期路径找到本段视频" : "No video found at the expected path" })
            ] })
          ] })
        ] })
      ] }),
      h === "assets" && /* @__PURE__ */ r("div", { class: "td-assets", children: [
        /* @__PURE__ */ r("div", { class: "td-toolbar", children: [
          ["image", "video", "audio"].map((i) => /* @__PURE__ */ r("button", { onClick: () => U((f) => f.assets.push(ao(i))), children: [
            "＋ ",
            i
          ] })),
          /* @__PURE__ */ r("button", { class: "td-asset-batch-entry", onClick: () => G(!0), children: [
            "⇧ ",
            c === "zh" ? "批量导入素材" : "Batch import assets"
          ] })
        ] }),
        s.assets.map((i, f) => /* @__PURE__ */ r("article", { children: /* @__PURE__ */ r("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ r("div", { class: "td-grid", children: [
              /* @__PURE__ */ r("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ r("input", { value: i.alias, onInput: (S) => U((P) => {
                  P.assets[f].alias = S.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ r("select", { value: i.kind, onChange: (S) => U((P) => {
                  P.assets[f].kind = S.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ r("option", { children: "image" }),
                  /* @__PURE__ */ r("option", { children: "video" }),
                  /* @__PURE__ */ r("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ r("input", { value: i.path, onInput: (S) => U((P) => {
                  P.assets[f].path = S.currentTarget.value;
                }) }),
                /* @__PURE__ */ r("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ r("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ r("input", { type: "file", accept: i.kind === "image" ? "image/*" : i.kind === "video" ? "video/*" : "audio/*", onChange: async (S) => {
                      var ne;
                      const P = S.currentTarget, B = (ne = P.files) == null ? void 0 : ne[0];
                      if (B) {
                        j((ce) => ({ ...ce, [i.id]: B.name }));
                        try {
                          const ce = await St(s.project.name, i.kind, B);
                          U((xe) => {
                            const et = xe.assets.find((nr) => nr.id === i.id);
                            et && (et.path = ce);
                          });
                        } catch (ce) {
                          window.alert(String(ce));
                        } finally {
                          j((ce) => {
                            const xe = { ...ce };
                            return delete xe[i.id], xe;
                          }), P.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ r("span", { class: "td-file-name", title: y[i.id] || i.path, children: y[i.id] ? `${c === "zh" ? "上传中" : "Uploading"}: ${y[i.id]}` : se(i.path) || (c === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ r("input", { type: "number", min: "0", step: "0.1", value: i.durationSeconds ?? "", onInput: (S) => U((P) => {
                  P.assets[f].durationSeconds = S.currentTarget.value ? Number(S.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ r("input", { type: "number", value: i.fixedOrder, onInput: (S) => U((P) => {
                  P.assets[f].fixedOrder = Number(S.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ r("input", { value: i.shotIds.join(", "), onInput: (S) => U((P) => {
                  P.assets[f].shotIds = S.currentTarget.value.split(",").map((B) => B.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-flags", children: [
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: i.enabled, onChange: (S) => U((P) => {
                  P.assets[f].enabled = S.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: i.fixed, onChange: (S) => U((P) => {
                  P.assets[f].fixed = S.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              i.kind === "video" && /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: i.includeVideoAudio, onChange: (S) => U((P) => {
                  P.assets[f].includeVideoAudio = S.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ r("button", { class: "danger", onClick: () => U((S) => {
                S.assets.splice(f, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ r(mt, { asset: i })
        ] }) }, i.id))
      ] }),
      h === "settings" && /* @__PURE__ */ r("section", { class: "td-form settings", children: [
        /* @__PURE__ */ r("label", { children: [
          "Project name",
          /* @__PURE__ */ r("input", { value: s.project.name, onInput: (i) => U((f) => {
            f.project.name = i.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Run ID",
          /* @__PURE__ */ r("input", { value: s.project.runId, onInput: (i) => U((f) => {
            f.project.runId = i.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "FPS",
          /* @__PURE__ */ r("input", { type: "number", value: s.defaults.fps, onInput: (i) => U((f) => {
            f.defaults.fps = Number(i.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Base seed",
          /* @__PURE__ */ r("input", { type: "number", value: s.defaults.baseSeed, onInput: (i) => U((f) => {
            f.defaults.baseSeed = Number(i.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ r(Be, { value: s.promptPrefix, isReferenceValid: (i) => gt(s, i), onInput: (i) => U((f) => {
            f.promptPrefix = i.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ r(Be, { value: s.promptSuffix, isReferenceValid: (i) => gt(s, i), onInput: (i) => U((f) => {
            f.promptSuffix = i.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r(po, { language: c, projectName: s.project.name, runId: s.project.runId, onClearShots: () => {
          U((i) => {
            i.shots = no();
          }), x(0), H([]);
        }, onClearAssets: () => {
          U((i) => {
            const f = Er(i);
            i.assets = f.assets, i.shots = f.shots;
          }), F(""), j({});
        }, onProjectCleared: () => b((i) => i + 1) })
      ] }),
      h === "postprocess" && /* @__PURE__ */ r(to, { plan: s, language: c, queueSecondPass: d })
    ] }),
    m && /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": c === "zh" ? "批量处理镜头" : "Batch edit shots", children: [
      /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("h2", { children: c === "zh" ? "批量处理镜头" : "Batch edit shots" }),
          /* @__PURE__ */ r("p", { children: c === "zh" ? `当前共 ${V.length} 个镜头` : `${V.length} shots` })
        ] }),
        /* @__PURE__ */ r("button", { "aria-label": c === "zh" ? "关闭" : "Close", onClick: () => E(!1), children: "×" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-tools", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            c === "zh" ? "所有镜头时长" : "Duration for all shots",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: ee, onInput: (i) => re(i.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: c === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: Zt, children: c === "zh" ? "一键设置所有时长" : "Set all durations" })
        ] }),
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            c === "zh" ? "新增镜头数量" : "New shot count",
            /* @__PURE__ */ r("input", { type: "number", min: "1", max: "100", step: "1", value: ge, onInput: (i) => le(i.currentTarget.value) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            c === "zh" ? "每个镜头时长" : "Duration per shot",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: ze, onInput: (i) => Ue(i.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: c === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: Xt, children: c === "zh" ? "批量新增镜头" : "Add shots" })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-global-actions", children: [
        /* @__PURE__ */ r("span", { children: c === "zh" ? `已启用 ${V.filter((i) => i.enabled).length}/${V.length} 个镜头` : `${V.filter((i) => i.enabled).length}/${V.length} shots enabled` }),
        /* @__PURE__ */ r("button", { class: Y ? "active" : "", onClick: er, children: Y ? c === "zh" ? "全部禁用" : "Disable all" : c === "zh" ? "全部启用" : "Enable all" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-table", children: [
        /* @__PURE__ */ r("div", { class: "td-batch-row td-batch-table-head", children: [
          /* @__PURE__ */ r("span", { children: "#" }),
          /* @__PURE__ */ r("span", { children: c === "zh" ? "镜头名" : "Shot name" }),
          /* @__PURE__ */ r("span", { children: c === "zh" ? "启用" : "Enabled" }),
          /* @__PURE__ */ r("span", { children: c === "zh" ? "具体时长" : "Duration" }),
          /* @__PURE__ */ r("span", { children: [
            "latent ",
            c === "zh" ? "接力" : "relay"
          ] })
        ] }),
        V.map((i, f) => /* @__PURE__ */ r("div", { class: "td-batch-row", children: [
          /* @__PURE__ */ r("span", { children: f + 1 }),
          /* @__PURE__ */ r("input", { value: i.title, "aria-label": `${c === "zh" ? "镜头名" : "Shot name"} ${f + 1}`, onInput: (S) => H((P) => P.map((B, ne) => ne === f ? { ...B, title: S.currentTarget.value } : B)) }),
          /* @__PURE__ */ r("label", { class: "td-batch-enabled", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: i.enabled, onChange: (S) => H((P) => P.map((B, ne) => ne === f ? { ...B, enabled: S.currentTarget.checked } : B)) }),
            /* @__PURE__ */ r("span", { children: i.enabled ? c === "zh" ? "开" : "ON" : c === "zh" ? "关" : "OFF" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: i.durationSeconds, onInput: (S) => H((P) => P.map((B, ne) => ne === f ? { ...B, durationSeconds: Number(S.currentTarget.value) } : B)) }),
            /* @__PURE__ */ r("span", { children: c === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-relay", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: i.latentRelay, onChange: (S) => H((P) => P.map((B, ne) => ne === f ? { ...B, latentRelay: S.currentTarget.checked } : B)) }),
            /* @__PURE__ */ r("span", { children: i.latentRelay ? c === "zh" ? "开" : "ON" : c === "zh" ? "关" : "OFF" })
          ] })
        ] }, i.id))
      ] }),
      /* @__PURE__ */ r("footer", { children: [
        /* @__PURE__ */ r("button", { onClick: () => E(!1), children: c === "zh" ? "取消" : "Cancel" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: tr, children: c === "zh" ? "应用更改" : "Apply changes" })
      ] })
    ] }) }),
    R && /* @__PURE__ */ r(Sr, { language: c, assets: s.assets, projectName: s.project.name, uploadFile: St, onImported: (i) => U((f) => {
      f.assets.push(...i);
    }), onClose: () => G(!1) })
  ] });
}
function uo(e, t, o = !1, n) {
  const d = document.getElementById("theodore-director-modal");
  if (d) {
    d.focus();
    return;
  }
  const s = document.createElement("div");
  s.id = "theodore-director-modal", s.className = "td-modal", s.tabIndex = -1, document.body.append(s);
  const a = (g) => {
    g.key === "Escape" && h();
  }, h = () => {
    document.removeEventListener("keydown", a), st(null, s), s.remove();
  };
  document.addEventListener("keydown", a), st(/* @__PURE__ */ r(ho, { initial: e, onSave: (g) => {
    t(g), h();
  }, onClose: h, supportsSecondSampling: o, queueSecondPass: n }), s), s.focus();
}
const mo = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-shot-media{position:relative}.td-form label.td-shot-media-display-toggle{position:absolute;top:-17px;right:10px;z-index:3;display:flex;flex-direction:row;align-items:center;gap:6px;padding:6px 9px;border:1px solid var(--td-line);border-radius:6px;background:var(--td-panel);color:var(--td-text);cursor:pointer;white-space:nowrap}.td-form label.td-shot-media-display-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-display-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-highlight-textarea{position:relative;display:block;width:100%;min-width:0}.td-highlight-backdrop,.td-form textarea.td-highlight-input{box-sizing:border-box;width:100%;margin:0;padding:7px 9px;font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,monospace;font-size:inherit;line-height:1.45;letter-spacing:normal;-moz-tab-size:8;tab-size:8;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.td-highlight-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border:1px solid transparent;border-radius:6px;background:#222a35;color:var(--td-text);pointer-events:none}.td-form textarea.td-highlight-input{position:relative;z-index:1;display:block;background:transparent;color:transparent;caret-color:var(--td-text);-webkit-text-fill-color:transparent}.td-highlight-input::selection{background:#5898d46b}.td-highlight-backdrop mark{padding:0;border-radius:3px;color:inherit}.td-highlight-backdrop mark.valid{background:#1d6b50;color:#bfffe6}.td-highlight-backdrop mark.invalid{background:#7a2931;color:#ffd1d5;text-decoration:underline;text-decoration-color:#ff9aa4;text-underline-offset:2px}.td-reference-mention-menu{position:fixed;z-index:80;display:flex;flex-direction:column;overflow:hidden;border:1px solid #526174;border-radius:9px;background:#161d26;color:var(--td-text);box-shadow:0 14px 42px #000b}.td-reference-mention-menu>header{display:flex;align-items:center;justify-content:space-between;flex:none;padding:8px 10px;border-bottom:1px solid var(--td-line);background:#202936}.td-reference-mention-menu>header strong{color:var(--td-text);font-size:13px}.td-reference-mention-menu>header span{padding:1px 7px;border-radius:999px;background:#2b3745;color:var(--td-muted);font-size:11px}.td-reference-mention-options{min-height:0;overflow:auto;padding:5px}.td-shell .td-reference-mention-options>button{display:grid;grid-template-columns:66px minmax(0,1fr) auto;gap:9px;align-items:center;width:100%;min-height:56px;padding:5px;border:1px solid transparent;background:transparent;text-align:left}.td-shell .td-reference-mention-options>button:hover,.td-shell .td-reference-mention-options>button.active{border-color:#527e6c;background:#1d302b}.td-reference-mention-thumb{display:flex;width:66px;height:46px;align-items:center;justify-content:center;overflow:hidden;border:1px solid var(--td-line);border-radius:5px;background:#0b0f14;color:var(--td-accent);font-size:20px}.td-reference-mention-thumb img{display:block;width:100%;height:100%;object-fit:cover}.td-reference-mention-copy{display:flex;min-width:0;flex-direction:column;gap:2px}.td-reference-mention-copy strong,.td-reference-mention-copy small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-reference-mention-copy strong{color:var(--td-text)}.td-reference-mention-copy small{color:var(--td-muted);font-size:11px}.td-reference-mention-options>button>em{padding:2px 7px;border-radius:999px;background:#293440;color:var(--td-muted);font-size:10px;font-style:normal;white-space:nowrap}.td-reference-mention-empty{margin:0;padding:22px 12px;color:var(--td-muted);text-align:center}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-generated-results{display:flex;flex-direction:column;gap:12px}.td-result-list{display:flex;flex-direction:column;gap:7px;max-height:280px;overflow:auto;padding-right:3px}.td-shell button.td-result-item{display:grid;grid-template-columns:112px minmax(0,1fr);gap:10px;align-items:center;width:100%;padding:6px;text-align:left;background:#151b23}.td-shell button.td-result-item.selected{border-color:var(--td-accent);background:#1c2a2a}.td-result-thumb{width:112px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:5px;background:#090c10;color:var(--td-muted)}.td-result-thumb img,.td-result-thumb video{display:block;width:100%;height:100%;object-fit:contain}.td-result-item-copy{display:flex;min-width:0;flex-direction:column;gap:3px}.td-result-item-copy>strong{display:flex;align-items:center;gap:7px;color:var(--td-text)}.td-result-item-copy>strong em{padding:1px 6px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-result-item-copy>span,.td-result-item-copy>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-result-item-copy>small{font-size:10px}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-project-cleanup{display:grid;gap:9px;margin-top:22px}.td-project-cleanup article{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:15px 16px;border:1px solid #713b42;border-radius:8px;background:#321d22}.td-project-cleanup strong{color:#ffd1d5}.td-project-cleanup p{margin:5px 0 0;color:#d7aeb2;line-height:1.5}.td-project-cleanup button{min-width:130px;flex:none}.td-project-cleanup button:disabled{opacity:.5;cursor:not-allowed}.td-asset-batch-entry{margin-left:auto;border-color:#527061!important;background:#1b2c28!important;color:var(--td-accent)!important}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}.td-bulk-processing{display:grid;gap:6px;margin-bottom:9px}.td-bulk-processing select{width:100%;min-width:0}.td-bulk-processing .td-bulk-toggle{margin:0}.td-processing-mode{display:flex;align-items:center;gap:8px;min-width:260px}.td-processing-mode>span{white-space:nowrap;color:var(--td-muted)}.td-processing-mode select{min-width:170px}.td-second-pass-mode{align-items:flex-end}.td-second-pass-mode label{display:grid;gap:4px;text-align:left}.td-second-pass-mode label span{font-size:12px;color:var(--td-muted)}.td-second-pass-mode select{min-width:210px}.td-shots>.td-shot-sidebar{display:flex;min-height:0;overflow:hidden;flex-direction:column}.td-bulk-processing{flex:none}.td-shot-list{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding-right:4px}.td-shot-sidebar-footer{flex:none;display:grid;gap:8px;padding-top:9px;border-top:1px solid var(--td-line);background:var(--td-panel)}.td-shot-batch-entry{display:flex;min-height:0;padding:0}.td-shot-batch-entry button{border-color:#527061;background:#1b2c28;color:var(--td-accent)}.td-batch-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:28px;background:#05080dbd;box-sizing:border-box}.td-batch-panel{display:flex;flex-direction:column;width:min(1040px,100%);max-height:min(820px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-batch-header h2{font-size:18px;margin:0}.td-batch-header p{margin:3px 0 0;color:var(--td-muted)}.td-batch-header>button{font-size:20px;line-height:1;padding:5px 9px}.td-batch-tools{display:grid;grid-template-columns:1fr 1.4fr;gap:12px;padding:14px 18px;border-bottom:1px solid var(--td-line);background:#151b23}.td-batch-tools>div{display:flex;align-items:end;gap:8px;padding:10px;border:1px solid var(--td-line);border-radius:7px}.td-batch-tools label{display:flex;flex:1;flex-direction:column;gap:4px;color:var(--td-muted);white-space:nowrap}.td-batch-tools label>span,.td-batch-duration{display:flex;align-items:center;gap:6px}.td-batch-tools input{width:100%}.td-batch-tools em{color:var(--td-muted);font-style:normal}.td-batch-tools button{white-space:nowrap}.td-batch-global-actions{display:flex;align-items:center;justify-content:flex-end;gap:12px;padding:9px 22px;border-bottom:1px solid var(--td-line);background:#171e27;color:var(--td-muted)}.td-batch-global-actions button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-batch-table{overflow:auto;padding:0 18px}.td-batch-row{display:grid;grid-template-columns:42px minmax(180px,1fr) 100px 150px 120px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-batch-table-head{position:sticky;top:0;z-index:1;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-batch-duration input{min-width:0;width:100%}.td-batch-duration>span{color:var(--td-muted)}.td-batch-enabled,.td-batch-relay{display:flex;align-items:center;gap:7px;justify-content:flex-start;color:var(--td-text)}.td-batch-enabled input,.td-batch-relay input{width:17px;height:17px;margin:0}.td-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-batch-panel{display:flex;flex-direction:column;width:min(1420px,100%);max-height:min(880px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-asset-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-asset-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-dropzone{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-height:92px;margin:14px 18px 10px;border:1px dashed #597084;border-radius:9px;background:#151b23;color:var(--td-text);cursor:pointer;transition:border-color .15s,background .15s}.td-asset-dropzone:hover,.td-asset-dropzone.dragging{border-color:var(--td-accent);background:#1b2c28}.td-asset-dropzone span{color:var(--td-muted);font-size:12px}.td-asset-dropzone input{display:none}.td-asset-batch-warning{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 18px 10px;padding:8px 10px;border:1px solid #836a32;border-radius:7px;background:#3a301c;color:#f4d991}.td-asset-batch-warning span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-warning button{padding:2px 7px}.td-asset-batch-summary{display:flex;align-items:center;justify-content:space-between;padding:8px 18px;border-top:1px solid var(--td-line);border-bottom:1px solid var(--td-line);background:#151b23;color:var(--td-muted)}.td-asset-batch-summary button{padding:5px 8px}.td-asset-batch-list{overflow:auto;padding:0 18px 10px}.td-asset-batch-row{display:grid;grid-template-columns:minmax(210px,1.4fr) minmax(150px,1fr) 115px 135px 105px 72px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-asset-batch-head{position:sticky;top:0;z-index:2;padding-top:10px;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-asset-batch-row.invalid{background:#3b202560}.td-asset-batch-row.imported{background:#17372d55}.td-asset-batch-file{display:flex;min-width:0;flex-direction:column;gap:2px}.td-asset-batch-file strong,.td-asset-batch-file small,.td-asset-batch-file em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-file small{color:var(--td-muted);font-weight:400}.td-asset-batch-file em{color:var(--td-danger);font-size:11px;font-style:normal}.td-asset-batch-duration,.td-asset-batch-audio{display:flex;align-items:center;gap:6px;color:var(--td-muted)}.td-asset-batch-duration input{min-width:0;width:100%}.td-asset-batch-audio input{width:17px;height:17px;margin:0}.td-asset-batch-empty{display:flex;min-height:130px;align-items:center;justify-content:center;color:var(--td-muted)}.td-asset-batch-panel button:disabled,.td-asset-batch-panel input:disabled,.td-asset-batch-panel select:disabled{opacity:.55;cursor:not-allowed}.td-postprocess{display:flex;flex-direction:column;gap:14px;max-width:1500px;margin:0 auto}.td-post-header,.td-post-summary,.td-post-merged{border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px}.td-post-header h2,.td-post-merged h2{margin:0;font-size:17px}.td-post-header p{margin:4px 0 0;color:var(--td-muted)}.td-post-actions{display:flex;gap:8px;flex:none}.td-post-summary{display:flex;align-items:center;gap:18px;padding:10px 14px;color:var(--td-muted)}.td-post-summary>button{margin-left:auto}.td-post-summary button:disabled{opacity:.5;cursor:not-allowed}.td-post-range{display:flex;align-items:center;gap:6px;margin-left:auto}.td-post-range input{width:64px;padding:6px 7px;text-align:center}.td-post-range button{white-space:nowrap}.td-post-summary>.td-post-range+button{margin-left:0}.td-post-error,.td-post-warning{padding:10px 13px;border-radius:7px}.td-post-error{border:1px solid #8b4149;background:#442228;color:#ffd1d5;white-space:pre-wrap}.td-post-warning{border:1px solid #836a32;background:#3a301c;color:#f4d991}.td-post-shot-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(390px,1fr));gap:12px;align-items:start}.td-post-shot{min-width:0;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel);overflow:hidden}.td-post-shot.selected{border-color:#527e6c}.td-post-shot.disabled{opacity:.72}.td-post-shot>header{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid var(--td-line);background:#1d2530}.td-post-shot>header>label{display:flex;align-items:center;gap:9px;min-width:0;cursor:pointer}.td-post-shot>header input{width:18px;height:18px;margin:0;flex:none}.td-post-shot>header label>span{display:flex;min-width:0;gap:8px;align-items:baseline}.td-post-shot>header strong{color:var(--td-text)}.td-post-shot>header em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted);font-style:normal}.td-post-shot>header>span{flex:none;padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted)}.td-post-shot-disabled-note{padding:7px 10px;border-bottom:1px solid var(--td-line);background:#332b1d;color:#e5c77d;font-size:11px}.td-post-shot-empty{min-height:96px;display:flex;align-items:center;justify-content:center;padding:12px;color:var(--td-muted);text-align:center}.td-post-result-list{display:flex;flex-direction:column;gap:7px;max-height:360px;overflow:auto;padding:9px}.td-post-result{display:grid;grid-template-columns:minmax(0,1fr) 35px;gap:6px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:5px}.td-post-result.selected{border-color:var(--td-accent);background:#1c2a2a}.td-shell button.td-post-result-choice{display:grid;grid-template-columns:112px minmax(0,1fr);gap:9px;align-items:center;min-width:0;padding:0;border:0;background:transparent;text-align:left}.td-post-result-choice>span{display:flex;min-width:0;flex-direction:column;gap:3px}.td-post-result-choice>span>strong{display:flex;align-items:center;gap:6px}.td-post-result-choice>span>strong em{padding:1px 5px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-post-result-choice>span>span,.td-post-result-choice>span>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-post-result-choice>span>small{font-size:10px}.td-post-result-play{width:35px;height:35px;padding:0!important}.td-post-result-play:disabled{opacity:.35;cursor:not-allowed}.td-post-merged{padding:12px}.td-post-merged>header>div{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px}.td-post-merged .td-generated-results{display:grid;grid-template-columns:minmax(360px,1.6fr) minmax(300px,1fr);align-items:start}.td-post-merged .td-result-list{max-height:420px}.td-post-preview-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:30;display:flex;align-items:center;justify-content:center;padding:26px;background:#030609d6}.td-post-preview-overlay>section{width:min(980px,100%);max-height:calc(100vh - 52px);overflow:auto;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 80px #000c}.td-post-preview-overlay header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--td-line)}.td-post-preview-overlay header button{font-size:20px;line-height:1;padding:5px 9px}.td-post-preview-overlay video{display:block;width:100%;max-height:calc(100vh - 170px);background:#070a0e}.td-post-preview-overlay p{margin:0;padding:9px 12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}.td-post-summary{flex-wrap:wrap}.td-post-range{margin-left:0}.td-post-summary>button{margin-left:auto}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:900px){.td-post-shot-list,.td-post-merged .td-generated-results{grid-template-columns:1fr}.td-post-header{align-items:flex-start;flex-direction:column}.td-post-actions{width:100%}.td-post-actions button{flex:1}.td-post-summary{align-items:stretch;flex-direction:column;gap:7px}.td-post-range{margin:3px 0;flex-wrap:wrap}.td-post-summary>button{margin:4px 0 0}.td-post-result-list{max-height:none}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}@media(max-width:1000px){.td-asset-batch-list{min-width:900px}.td-asset-batch-panel{overflow:auto}.td-asset-batch-panel>.td-batch-header,.td-asset-dropzone,.td-asset-batch-warning,.td-asset-batch-summary,.td-asset-batch-panel>footer{min-width:864px}}@media(max-width:720px){.td-asset-batch-entry{margin-left:0}}.td-postprocess-shell{display:flex;flex-direction:column;gap:12px;max-width:1500px;margin:0 auto}.td-postprocess-shell>.td-postprocess{max-width:none;width:100%;margin:0}.td-post-mode-tabs{display:flex;gap:7px;padding:5px;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-mode-tabs button{min-width:130px}.td-post-mode-tabs button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-second-pass-panel .td-post-shot>header>span:first-child{display:flex;min-width:0;gap:8px;align-items:baseline;padding:0;background:transparent}.td-second-pass-result{display:grid;grid-template-columns:minmax(0,1fr) 154px;gap:8px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:6px}.td-second-pass-result:has(.td-second-pass-run:disabled){border-color:#34404d}.td-second-pass-actions{display:flex;min-width:0;flex-direction:column;gap:6px}.td-second-pass-actions select{width:100%;min-width:0;padding:6px}.td-second-pass-terminal{display:flex;min-height:32px;align-items:center;justify-content:center;border:1px solid var(--td-line);border-radius:6px;color:var(--td-muted);font-size:11px;text-align:center}.td-second-pass-run{width:100%;min-height:34px;padding:6px!important}.td-second-pass-run:disabled{opacity:.62;cursor:not-allowed}.td-second-pass-error{grid-column:1/-1;padding:6px 8px;border-radius:5px;background:#442228;color:#ffd1d5;font-size:11px;white-space:pre-wrap}@media(max-width:620px){.td-post-mode-tabs{flex-direction:column}.td-post-mode-tabs button{width:100%}.td-second-pass-result{grid-template-columns:1fr}.td-second-pass-run{width:100%}}.td-delete-panel .td-post-shot>header>span:first-child{display:flex;min-width:0;gap:8px;align-items:baseline;padding:0;background:transparent}.td-delete-result{display:grid;grid-template-columns:minmax(0,1fr) 118px;gap:8px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:6px}.td-delete-result.deleting{opacity:.58}.td-delete-video-button{min-height:40px;padding:6px!important}.td-delete-video-button:disabled{cursor:not-allowed}.td-delete-merged{padding:12px}.td-delete-merged-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(390px,1fr));gap:8px}.td-delete-merged .td-post-result-choice>span>strong{color:var(--td-text)}@media(max-width:620px){.td-delete-result{grid-template-columns:1fr}.td-delete-video-button{width:100%}.td-delete-merged-list{grid-template-columns:1fr}}", $t = "theodore-director-styles";
function fo() {
  if (document.getElementById($t)) return;
  const e = document.createElement("style");
  e.id = $t, e.textContent = mo, document.head.append(e);
}
fo();
const go = "/scripts/app.js", bo = "/scripts/api.js";
Promise.all([
  import(
    /* @vite-ignore */
    go
  ),
  import(
    /* @vite-ignore */
    bo
  )
]).then(([{ app: e }, { api: t }]) => {
  const o = async (n) => {
    var j, k;
    const d = ((j = e.graph) == null ? void 0 : j._nodes) ?? [], s = d.find((I) => I.type === "TheodoreDirector_PostprocessSecondPassSource"), a = d.find((I) => I.type === "TheodoreDirector_SaveSecondPass"), h = (k = s == null ? void 0 : s.widgets) == null ? void 0 : k.find((I) => I.name === "request_json");
    if (!s || !a || !h || a.id === void 0)
      throw new Error("当前工作流缺少后处理单独二采支流，请重新载入仓库中的 V7 导播台示例工作流");
    const g = h.value, p = s.mode, x = a.mode;
    let c;
    try {
      h.value = JSON.stringify(n), s.mode = 0, a.mode = 0, c = await e.graphToPrompt(e.rootGraph);
    } finally {
      h.value = g, s.mode = p, a.mode = x;
    }
    const y = (await t.queuePrompt(0, c, { partialExecutionTargets: [String(a.id)] })).prompt_id;
    if (!y) throw new Error("ComfyUI 没有返回二采任务 ID");
    await new Promise((I, T) => {
      const u = () => {
        t.removeEventListener("execution_success", b), t.removeEventListener("execution_error", C), t.removeEventListener("execution_interrupted", C);
      }, w = ($) => {
        var D;
        return String(((D = $.detail) == null ? void 0 : D.prompt_id) ?? "");
      }, b = ($) => {
        w($) === y && (u(), I());
      }, C = ($) => {
        if (w($) !== y) return;
        const D = $.detail ?? {};
        u(), T(new Error(String(D.exception_message ?? D.error ?? "单独二采任务执行失败")));
      };
      t.addEventListener("execution_success", b), t.addEventListener("execution_error", C), t.addEventListener("execution_interrupted", C);
    });
  };
  e.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(n, d) {
      if (d.name === "TheodoreDirector_PostprocessSecondPassSource") {
        const a = n.prototype.onNodeCreated;
        n.prototype.onNodeCreated = function() {
          var g, p;
          a == null || a.apply(this);
          const h = (g = this.widgets) == null ? void 0 : g.find((x) => x.name === "request_json");
          h && (h.type = "hidden", h.computeSize = () => [0, -4]), this.size = [Math.max(((p = this.size) == null ? void 0 : p[0]) ?? 300, 380), 80];
        };
        return;
      }
      if (d.name !== "TheodoreDirector_Project") return;
      const s = n.prototype.onNodeCreated;
      n.prototype.onNodeCreated = function() {
        var h, g;
        s == null || s.apply(this);
        const a = (h = this.widgets) == null ? void 0 : h.find((p) => p.name === "plan_json");
        a && (a.type = "hidden", a.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          var p;
          try {
            const x = JSON.parse(String(a.value)), c = ((p = e.graph) == null ? void 0 : p._nodes) ?? [], l = c.some((y) => y.type === "TheodoreDirector_PostprocessSecondPassSource") && c.some((y) => y.type === "TheodoreDirector_SaveSecondPass");
            uo(x, (y) => {
              var j, k;
              a.value = JSON.stringify(y, null, 2), this.setDirtyCanvas(!0, !0), (k = (j = e.graph) == null ? void 0 : j.setDirtyCanvas) == null || k.call(j, !0, !0);
            }, !0, l ? o : void 0);
          } catch (x) {
            window.alert(`Theodore Director: ${x instanceof Error ? x.message : String(x)}`);
          }
        }), this.size = [Math.max(((g = this.size) == null ? void 0 : g[0]) ?? 300, 360), 110]);
      };
    }
  });
});
