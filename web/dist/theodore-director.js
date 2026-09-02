var Ne, V, St, ue, tt, $t, Ct, Oe, $e, we, Tt, Je, qe, We, Ae = {}, Me = [], nr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Re = Array.isArray;
function pe(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Ge(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function or(e, t, n) {
  var o, d, i, a = {};
  for (i in t) i == "key" ? o = t[i] : i == "ref" ? d = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ne.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return Ce(e, a, o, d, null);
}
function Ce(e, t, n, o, d) {
  var i = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: d ?? ++St, __i: -1, __u: 0 };
  return d == null && V.vnode != null && V.vnode(i), i;
}
function De(e) {
  return e.children;
}
function Te(e, t) {
  this.props = e, this.context = t;
}
function _e(e, t) {
  if (t == null) return e.__ ? _e(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? _e(e) : null;
}
function ir(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, o = [], d = [], i = pe({}, t);
    i.__v = t.__v + 1, V.vnode && V.vnode(i), Qe(e.__P, i, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, o, n ?? _e(t), !!(32 & t.__u), d), i.__v = t.__v, i.__.__k[i.__i] = i, Pt(o, i, d), t.__e = t.__ = null, i.__e != n && It(i);
  }
}
function It(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), It(e);
}
function rt(e) {
  (!e.__d && (e.__d = !0) && ue.push(e) && !Pe.__r++ || tt != V.debounceRendering) && ((tt = V.debounceRendering) || $t)(Pe);
}
function Pe() {
  try {
    for (var e, t = 1; ue.length; ) ue.length > t && ue.sort(Ct), e = ue.shift(), t = ue.length, ir(e);
  } finally {
    ue.length = Pe.__r = 0;
  }
}
function Et(e, t, n, o, d, i, a, h, f, p, x) {
  var c, l, v, T, w, S, $ = o && o.__k || Me, y = t.length;
  for (f = sr(n, t, $, f, y), c = 0; c < y; c++) (v = n.__k[c]) != null && (l = v.__i != -1 && $[v.__i] || Ae, v.__i = c, S = Qe(e, v, l, d, i, a, h, f, p, x), T = v.__e, v.ref && l.ref != v.ref && (l.ref && Ye(l.ref, null, v), x.push(v.ref, v.__c || T, v)), w == null && T != null && (w = T), 4 & v.__u ? (f = At(v, f, e), l.__e && (l.__e = null)) : typeof v.type == "function" && S !== void 0 ? f = S : T && (f = T.nextSibling), v.__u &= -7);
  return n.__e = w, f;
}
function sr(e, t, n, o, d) {
  var i, a, h, f, p, x = n.length, c = x, l = 0;
  for (e.__k = new Array(d), i = 0; i < d; i++) (a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = e.__k[i] = Ce(null, a, null, null, null) : Re(a) ? a = e.__k[i] = Ce(De, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? a = e.__k[i] = Ce(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : e.__k[i] = a, f = i + l, a.__ = e, a.__b = e.__b + 1, h = null, (p = a.__i = dr(a, n, f, c)) != -1 && (c--, (h = n[p]) && (h.__u |= 2)), h == null || h.__v == null ? (p == -1 && (d > x ? l-- : d < x && l++), typeof a.type != "function" && (a.__u |= 4)) : p != f && (p == f - 1 ? l-- : p == f + 1 ? l++ : (p > f ? l-- : l++, a.__u |= 4))) : e.__k[i] = null;
  if (c) for (i = 0; i < x; i++) (h = n[i]) != null && (2 & h.__u) == 0 && (h.__e == o && (o = _e(h)), Lt(h, h));
  return o;
}
function At(e, t, n) {
  var o, d;
  if (typeof e.type == "function") {
    for (o = e.__k, d = 0; o && d < o.length; d++) o[d] && (o[d].__ = e, t = At(o[d], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = _e(e)), t = n.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function dr(e, t, n, o) {
  var d, i, a, h = e.key, f = e.type, p = t[n], x = p != null && (2 & p.__u) == 0;
  if (p === null && h == null || x && h == p.key && f == p.type) return n;
  if (o > (x ? 1 : 0)) {
    for (d = n - 1, i = n + 1; d >= 0 || i < t.length; ) if ((p = t[a = d >= 0 ? d-- : i++]) != null && (2 & p.__u) == 0 && h == p.key && f == p.type) return a;
  }
  return -1;
}
function nt(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || nr.test(t) ? n : n + "px";
}
function ze(e, t, n, o, d) {
  var i, a;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof o == "string" && (e.style.cssText = o = ""), o) for (t in o) n && t in n || nt(e.style, t, "");
    if (n) for (t in n) o && n[t] == o[t] || nt(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(Tt, "$1")), a = t.toLowerCase(), t = a in e || t == "onFocusOut" || t == "onFocusIn" ? a.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? o ? n[we] = o[we] : (n[we] = Je, e.addEventListener(t, i ? We : qe, i)) : e.removeEventListener(t, i ? We : qe, i);
  else {
    if (d == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function ot(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t[$e] == null) t[$e] = Je++;
      else if (t[$e] < n[we]) return;
      return n(V.event ? V.event(t) : t);
    }
  };
}
function Qe(e, t, n, o, d, i, a, h, f, p) {
  var x, c, l, v, T, w, S, $, y, j, g, E, P, q, J, b, L = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (f = !!(32 & n.__u), i = [h = t.__e = n.__e]), (x = V.__b) && x(t);
  e: if (typeof L == "function") {
    c = a.length;
    try {
      if (y = t.props, j = L.prototype && L.prototype.render, g = (x = L.contextType) && o[x.__c], E = x ? g ? g.props.value : x.__ : o, n.__c ? $ = (l = t.__c = n.__c).__ = l.__E : (j ? t.__c = l = new L(y, E) : (t.__c = l = new Te(y, E), l.constructor = L, l.render = lr), g && g.sub(l), l.state || (l.state = {}), l.__n = o, v = l.__d = !0, l.__h = [], l._sb = []), j && l.__s == null && (l.__s = l.state), j && L.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = pe({}, l.__s)), pe(l.__s, L.getDerivedStateFromProps(y, l.__s))), T = l.props, w = l.state, l.__v = t, v) j && L.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), j && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (j && L.getDerivedStateFromProps == null && y !== T && l.componentWillReceiveProps != null && l.componentWillReceiveProps(y, E), t.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(y, l.__s, E) === !1) {
          t.__v != n.__v && (l.props = y, l.state = l.__s, l.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(U) {
            U && (U.__ = t);
          }), Me.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && a.push(l), h = _e(n);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(y, l.__s, E), j && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(T, w, S);
        });
      }
      if (l.context = E, l.props = y, l.__P = e, l.__e = !1, P = V.__r, q = 0, j) l.state = l.__s, l.__d = !1, P && P(t), x = l.render(l.props, l.state, l.context), Me.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, P && P(t), x = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++q < 25);
      l.state = l.__s, l.getChildContext != null && (o = pe(pe({}, o), l.getChildContext())), j && !v && l.getSnapshotBeforeUpdate != null && (S = l.getSnapshotBeforeUpdate(T, w)), J = x != null && x.type === De && x.key == null ? jt(x.props.children) : x, h = Et(e, Re(J) ? J : [J], t, n, o, d, i, a, h, f, p), l.base = t.__e, t.__u &= -161, l.__h.length && a.push(l), $ && (l.__E = l.__ = null);
    } catch (U) {
      if (a.length = c, t.__v = null, f || i != null) {
        if (U.then) {
          for (t.__u |= f ? 160 : 128; h && h.nodeType == 8 && h.nextSibling; ) h = h.nextSibling;
          i != null && (i[i.indexOf(h)] = null), t.__e = h;
        } else if (i != null) for (b = i.length; b--; ) Ge(i[b]);
      } else t.__e = n.__e;
      t.__k == null && (t.__k = n.__k || []), U.then || Mt(t), V.__e(U, t, n);
    }
  } else i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : h = t.__e = ar(n.__e, t, n, o, d, i, a, f, p);
  return (x = V.diffed) && x(t), 128 & t.__u ? void 0 : h;
}
function Mt(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Mt));
}
function Pt(e, t, n) {
  for (var o = 0; o < n.length; o++) Ye(n[o], n[++o], n[++o]);
  V.__c && V.__c(t, e), e.some(function(d) {
    try {
      e = d.__h, d.__h = [], e.some(function(i) {
        i.call(d);
      });
    } catch (i) {
      V.__e(i, d.__v);
    }
  });
}
function jt(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : Re(e) ? e.map(jt) : e.constructor !== void 0 ? null : pe({}, e);
}
function ar(e, t, n, o, d, i, a, h, f) {
  var p, x, c, l, v, T, w, S = n.props || Ae, $ = t.props, y = t.type;
  if (y == "svg" ? d = "http://www.w3.org/2000/svg" : y == "math" ? d = "http://www.w3.org/1998/Math/MathML" : d || (d = "http://www.w3.org/1999/xhtml"), i != null) {
    for (p = 0; p < i.length; p++) if ((v = i[p]) && "setAttribute" in v == !!y && (y ? v.localName == y : v.nodeType == 3)) {
      e = v, i[p] = null;
      break;
    }
  }
  if (e == null) {
    if (y == null) return document.createTextNode($);
    e = document.createElementNS(d, y, $.is && $), h && (V.__m && V.__m(t, i), h = !1), i = null;
  }
  if (y == null) S === $ || h && e.data == $ || (e.data = $);
  else {
    if (i = y == "textarea" && $.defaultValue != null ? null : i && Ne.call(e.childNodes), !h && i != null) for (S = {}, p = 0; p < e.attributes.length; p++) S[(v = e.attributes[p]).name] = v.value;
    for (p in S) v = S[p], p == "dangerouslySetInnerHTML" ? c = v : p == "children" || p in $ || p == "value" && "defaultValue" in $ || p == "checked" && "defaultChecked" in $ || ze(e, p, null, v, d);
    for (p in $) v = $[p], p == "children" ? l = v : p == "dangerouslySetInnerHTML" ? x = v : p == "value" ? T = v : p == "checked" ? w = v : h && typeof v != "function" || S[p] === v || ze(e, p, v, S[p], d);
    if (x) h || c && (x.__html == c.__html || x.__html == e.innerHTML) || (e.innerHTML = x.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), Et(t.type == "template" ? e.content : e, Re(l) ? l : [l], t, n, o, y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : d, i, a, i ? i[0] : n.__k && _e(n, 0), h, f), i != null) for (p = i.length; p--; ) Ge(i[p]);
    h && y != "textarea" || (p = "value", y == "progress" && T == null ? e.removeAttribute("value") : T != null && (T !== e[p] || y == "progress" && !T || y == "option" && T != S[p]) && ze(e, p, T, S[p], d), p = "checked", w != null && w != e[p] && ze(e, p, w, S[p], d));
  }
  return e;
}
function Ye(e, t, n) {
  try {
    if (typeof e == "function") {
      var o = typeof e.__u == "function";
      o && e.__u(), o && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (d) {
    V.__e(d, n);
  }
}
function Lt(e, t, n) {
  var o, d;
  if (V.unmount && V.unmount(e), (o = e.ref) && (o.current && o.current != e.__e || Ye(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (i) {
      V.__e(i, t);
    }
    o.base = o.__P = o.__n = null;
  }
  if (o = e.__k) for (d = 0; d < o.length; d++) o[d] && Lt(o[d], t, n || typeof e.type != "function");
  n || Ge(e.__e), e.__c = e.__ = e.__e = void 0;
}
function lr(e, t, n) {
  return this.constructor(e, n);
}
function it(e, t, n) {
  var o, d, i, a;
  t == document && (t = document.documentElement), V.__ && V.__(e, t), d = (o = !1) ? null : t.__k, i = [], a = [], Qe(t, e = t.__k = or(De, null, [e]), d || Ae, Ae, t.namespaceURI, d ? null : t.firstChild ? Ne.call(t.childNodes) : null, i, d ? d.__e : t.firstChild, o, a), Pt(i, e, a), e.props.children = null;
}
Ne = Me.slice, V = { __e: function(e, t, n, o) {
  for (var d, i, a; t = t.__; ) if ((d = t.__c) && !d.__) try {
    if ((i = d.constructor) && i.getDerivedStateFromError != null && (d.setState(i.getDerivedStateFromError(e)), a = d.__d), d.componentDidCatch != null && (d.componentDidCatch(e, o || {}), a = d.__d), a) return d.__E = d;
  } catch (h) {
    e = h;
  }
  throw e;
} }, St = 0, Te.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = pe({}, this.state), typeof e == "function" && (e = e(pe({}, n), this.props)), e && pe(n, e), e != null && this.__v && (t && this._sb.push(t), rt(this));
}, Te.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), rt(this));
}, Te.prototype.render = De, ue = [], $t = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ct = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Pe.__r = 0, Oe = Math.random().toString(8), $e = "__d" + Oe, we = "__a" + Oe, Tt = /(PointerCapture)$|Capture$/i, Je = 0, qe = ot(!1), We = ot(!0);
var cr = 0;
function r(e, t, n, o, d, i) {
  t || (t = {});
  var a, h, f = t;
  if ("ref" in f) for (h in f = {}, t) h == "ref" ? a = t[h] : f[h] = t[h];
  var p = { type: e, props: f, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --cr, __i: -1, __u: 0, __source: d, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (h in a) f[h] === void 0 && (f[h] = a[h]);
  return V.vnode && V.vnode(p), p;
}
var ve, K, He, st, je = 0, Nt = [], Q = V, dt = Q.__b, at = Q.__r, lt = Q.diffed, ct = Q.__c, pt = Q.unmount, ht = Q.__;
function Ue(e, t) {
  Q.__h && Q.__h(K, e, je || t), je = 0;
  var n = K.__H || (K.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function A(e) {
  return je = 1, pr(Rt, e);
}
function pr(e, t, n) {
  var o = Ue(ve++, 2);
  if (o.t = e, !o.__c && (o.__ = [Rt(void 0, t), function(h) {
    var f = o.__N ? o.__N[0] : o.__[0], p = o.t(f, h);
    f !== p && (o.__N = [p, o.__[1]], o.__c.setState({}));
  }], o.__c = K, !K.__f)) {
    var d = function(h, f, p) {
      if (!o.__c.__H) return !0;
      var x = !1, c = o.__c.props !== h;
      if (o.__c.__H.__.some(function(v) {
        if (v.__N) {
          x = !0;
          var T = v.__[0];
          v.__ = v.__N, v.__N = void 0, T !== v.__[0] && (c = !0);
        }
      }), i) {
        var l = i.call(this, h, f, p);
        return x ? l || c : l;
      }
      return !x || c;
    };
    K.__f = !0;
    var i = K.shouldComponentUpdate, a = K.componentWillUpdate;
    K.componentWillUpdate = function(h, f, p) {
      if (this.__e) {
        var x = i;
        i = void 0, d(h, f, p), i = x;
      }
      a && a.call(this, h, f, p);
    }, K.shouldComponentUpdate = d;
  }
  return o.__N || o.__;
}
function ce(e, t) {
  var n = Ue(ve++, 3);
  !Q.__s && Ze(n.__H, t) && (n.__ = e, n.u = t, K.__H.__h.push(n));
}
function hr(e, t) {
  var n = Ue(ve++, 4);
  !Q.__s && Ze(n.__H, t) && (n.__ = e, n.u = t, K.__h.push(n));
}
function ie(e) {
  return je = 5, me(function() {
    return { current: e };
  }, []);
}
function me(e, t) {
  var n = Ue(ve++, 7);
  return Ze(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ur() {
  for (var e; e = Nt.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(Ie), t.__h.some(Ke), t.__h = [];
    } catch (n) {
      t.__h = [], Q.__e(n, e.__v);
    }
  }
}
Q.__b = function(e) {
  K = null, dt && dt(e);
}, Q.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), ht && ht(e, t);
}, Q.__r = function(e) {
  at && at(e), ve = 0;
  var t = (K = e.__c).__H;
  t && (He === K ? (t.__h = [], K.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(Ie), t.__h.some(Ke), t.__h = [], ve = 0)), He = K;
}, Q.diffed = function(e) {
  lt && lt(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Nt.push(t) !== 1 && st === Q.requestAnimationFrame || ((st = Q.requestAnimationFrame) || mr)(ur)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), He = K = null;
}, Q.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(Ie), n.__h = n.__h.filter(function(o) {
        return !o.__ || Ke(o);
      });
    } catch (o) {
      t.some(function(d) {
        d.__h && (d.__h = []);
      }), t = [], Q.__e(o, n.__v);
    }
  }), ct && ct(e, t);
}, Q.unmount = function(e) {
  pt && pt(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(o) {
    try {
      Ie(o);
    } catch (d) {
      t = d;
    }
  }), n.__H = void 0, t && Q.__e(t, n.__v));
};
var ut = typeof requestAnimationFrame == "function";
function mr(e) {
  var t, n = function() {
    clearTimeout(o), ut && cancelAnimationFrame(t), setTimeout(e);
  }, o = setTimeout(n, 35);
  ut && (t = requestAnimationFrame(n));
}
function Ie(e) {
  var t = K, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), K = t;
}
function Ke(e) {
  var t = K;
  e.__c = e.__(), K = t;
}
function Ze(e, t) {
  return !e || e.length !== t.length || t.some(function(n, o) {
    return n !== e[o];
  });
}
function Rt(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const fr = {
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
function Dt(e) {
  var o;
  const t = ((o = e.name.split(".").pop()) == null ? void 0 : o.toLocaleLowerCase()) ?? "";
  if (e.name.includes(".")) return fr[t] ?? null;
  const n = e.type.split("/", 1)[0];
  return n === "image" || n === "video" || n === "audio" ? n : null;
}
function gr(e) {
  const d = e.replace(/\.[^.]+$/, "").replace(/^\s*\d+\s*[-_. ]+/, "").normalize("NFKC").replace(/[\s-]+/g, "_").replace(/[{}]/g, "").replace(/_+/g, "_").replace(/^[_\.]+|[_\.]+$/g, "").slice(0, 96) || "asset";
  return d.toLocaleLowerCase().endsWith(".audio") ? `${d}_asset` : d;
}
function br(e, t) {
  const n = new Set(Array.from(t, (d) => d.toLocaleLowerCase()));
  if (!n.has(e.toLocaleLowerCase())) return e;
  let o = 2;
  for (; n.has(`${e}_${o}`.toLocaleLowerCase()); ) o += 1;
  return `${e}_${o}`;
}
function _r(e, t, n) {
  const o = e.trim().toLocaleLowerCase();
  return !e.trim() || /[\s{}]/.test(e) || o.endsWith(".audio") ? "invalid" : Array.from(t, (i) => i.toLocaleLowerCase()).includes(o) || Array.from(n, (i) => i.trim().toLocaleLowerCase()).filter((i) => i === o).length > 1 ? "duplicate" : null;
}
function xr(e, t, n) {
  const o = new Set(Array.from(t)), d = [], i = [];
  for (const a of e) {
    const h = Dt(a);
    if (!h) {
      i.push(a.name);
      continue;
    }
    const f = br(gr(a.name), o);
    o.add(f), d.push({ id: n(), file: a, alias: f, kind: h, durationSeconds: h === "image" ? null : 2, includeVideoAudio: !1, status: "pending", error: "" });
  }
  return { drafts: d, rejected: i };
}
function vr(e, t, n) {
  return {
    id: e.id,
    alias: e.alias.trim(),
    kind: e.kind,
    path: t,
    enabled: !0,
    fixed: !1,
    fixedOrder: n,
    shotIds: [],
    includeVideoAudio: e.kind === "video" && e.includeVideoAudio,
    durationSeconds: e.kind === "image" ? null : e.durationSeconds,
    audioDurationSeconds: null,
    fingerprint: ""
  };
}
function yr(e, t) {
  return t === "image" ? Promise.resolve(null) : new Promise((n) => {
    const o = document.createElement(t === "video" ? "video" : "audio"), d = URL.createObjectURL(e);
    let i = !1;
    const a = (h) => {
      i || (i = !0, o.onloadedmetadata = null, o.onerror = null, o.removeAttribute("src"), o.load(), URL.revokeObjectURL(d), n(h));
    };
    o.preload = "metadata", o.onloadedmetadata = () => a(Number.isFinite(o.duration) && o.duration > 0 ? Math.round(o.duration * 10) / 10 : null), o.onerror = () => a(null), o.src = d;
  });
}
const wr = () => `asset_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`, Be = (e, t) => t === "zh" ? { image: "图片", video: "视频", audio: "音频" }[e] : e;
function kr({ language: e, assets: t, projectName: n, onClose: o, onImported: d, uploadFile: i }) {
  const [a, h] = A([]), [f, p] = A([]), [x, c] = A(!1), [l, v] = A(!1), T = ie([]);
  T.current = a;
  const w = t.map((b) => b.alias), S = (b, L) => h((U) => U.map((R) => R.id === b ? { ...R, ...L } : R)), $ = (b) => {
    if (!b.length || l) return;
    const L = [...w, ...T.current.map((R) => R.alias)], U = xr(b, L, wr);
    U.rejected.length && p((R) => [...R, ...U.rejected]), U.drafts.length && (h((R) => [...R, ...U.drafts]), U.drafts.forEach((R) => {
      yr(R.file, R.kind).then((Z) => {
        Z != null && h((ne) => ne.map((u) => u.id === R.id && u.kind === R.kind && u.durationSeconds === 2 ? { ...u, durationSeconds: Z } : u));
      });
    }));
  }, j = a.filter((b) => b.status !== "imported").map((b) => b.alias), g = (b) => {
    if (b.status === "imported") return null;
    const L = _r(b.alias, w, j);
    return L === "invalid" ? e === "zh" ? "别名为空、包含空白/花括号，或使用了保留后缀 .audio" : "Alias is empty, contains whitespace/braces, or uses reserved .audio" : L === "duplicate" ? e === "zh" ? "别名与素材库或本批次其他素材重复" : "Alias duplicates an existing or staged asset" : Dt(b.file) !== b.kind ? e === "zh" ? "文件扩展名与所选类型不匹配" : "The extension does not match the selected kind" : b.kind !== "image" && (b.durationSeconds == null || b.durationSeconds <= 0) ? e === "zh" ? "视频或音频时长必须大于 0" : "Video/audio duration must be greater than 0" : null;
  }, E = async () => {
    const L = T.current.filter((ne) => ne.status === "pending" || ne.status === "error");
    if (!L.length) return;
    if (L.some(g)) {
      window.alert(e === "zh" ? "请先修正列表中标红的项目。" : "Fix the highlighted rows before importing.");
      return;
    }
    v(!0);
    const U = Math.max(0, ...t.map((ne) => ne.fixedOrder)) + 1;
    let R = 0;
    const Z = async () => {
      for (; R < L.length; ) {
        const ne = R++, u = L[ne];
        S(u.id, { status: "uploading", error: "" });
        try {
          const C = await i(n, u.kind, u.file);
          d([vr(u, C, U + ne)]), S(u.id, { status: "imported", error: "" });
        } catch (C) {
          S(u.id, { status: "error", error: String(C) });
        }
      }
    };
    await Promise.all(Array.from({ length: Math.min(2, L.length) }, Z)), v(!1);
  }, P = a.filter((b) => b.status === "imported").length, q = a.filter((b) => b.status === "error").length, J = a.length - P;
  return /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-asset-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": e === "zh" ? "批量导入素材" : "Batch import assets", children: [
    /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: e === "zh" ? "批量导入素材" : "Batch import assets" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "可混合选择图片、视频和音频；确认列表后再写入素材库。" : "Select images, videos, and audio together; review before uploading." })
      ] }),
      /* @__PURE__ */ r("button", { disabled: l, "aria-label": e === "zh" ? "关闭" : "Close", onClick: o, children: "×" })
    ] }),
    /* @__PURE__ */ r("label", { class: `td-asset-dropzone ${x ? "dragging" : ""}`, onDragEnter: (b) => {
      b.preventDefault(), c(!0);
    }, onDragOver: (b) => b.preventDefault(), onDragLeave: (b) => {
      b.currentTarget === b.target && c(!1);
    }, onDrop: (b) => {
      var L;
      b.preventDefault(), c(!1), $(Array.from(((L = b.dataTransfer) == null ? void 0 : L.files) ?? []));
    }, children: [
      /* @__PURE__ */ r("strong", { children: e === "zh" ? "拖拽素材到这里，或点击选择多个文件" : "Drop media here, or click to select multiple files" }),
      /* @__PURE__ */ r("span", { children: e === "zh" ? "支持图片、视频、音频混合导入" : "Mixed image, video, and audio selection is supported" }),
      /* @__PURE__ */ r("input", { type: "file", multiple: !0, accept: "image/*,video/*,audio/*", disabled: l, onChange: (b) => {
        $(Array.from(b.currentTarget.files ?? [])), b.currentTarget.value = "";
      } })
    ] }),
    f.length > 0 && /* @__PURE__ */ r("div", { class: "td-asset-batch-warning", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `已跳过 ${f.length} 个不支持的文件：${f.join("、")}` : `Skipped ${f.length} unsupported files: ${f.join(", ")}` }),
      /* @__PURE__ */ r("button", { onClick: () => p([]), children: "×" })
    ] }),
    /* @__PURE__ */ r("div", { class: "td-asset-batch-summary", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `共 ${a.length} 项 · 已导入 ${P} · 待处理 ${J}${q ? ` · 失败 ${q}` : ""}` : `${a.length} items · ${P} imported · ${J} pending${q ? ` · ${q} failed` : ""}` }),
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
      a.map((b) => {
        const L = g(b), U = l || b.status === "imported" || b.status === "uploading";
        return /* @__PURE__ */ r("div", { class: `td-asset-batch-row ${L || b.status === "error" ? "invalid" : ""} ${b.status === "imported" ? "imported" : ""}`, children: [
          /* @__PURE__ */ r("div", { class: "td-asset-batch-file", children: [
            /* @__PURE__ */ r("strong", { title: b.file.name, children: b.file.name }),
            /* @__PURE__ */ r("small", { children: [
              (b.file.size / 1024 / 1024).toFixed(1),
              " MB · ",
              b.status === "pending" ? e === "zh" ? "待导入" : "Pending" : b.status === "uploading" ? e === "zh" ? "上传中" : "Uploading" : b.status === "imported" ? e === "zh" ? "已完成" : "Imported" : e === "zh" ? "失败" : "Failed"
            ] }),
            (L || b.error) && /* @__PURE__ */ r("em", { title: L || b.error, children: L || b.error })
          ] }),
          /* @__PURE__ */ r("input", { disabled: U, value: b.alias, onInput: (R) => S(b.id, { alias: R.currentTarget.value, status: "pending", error: "" }) }),
          /* @__PURE__ */ r("select", { disabled: U, value: b.kind, onChange: (R) => {
            const Z = R.currentTarget.value;
            S(b.id, { kind: Z, durationSeconds: Z === "image" ? null : b.durationSeconds ?? 2, includeVideoAudio: Z === "video" && b.includeVideoAudio, status: "pending", error: "" });
          }, children: [
            /* @__PURE__ */ r("option", { value: "image", children: Be("image", e) }),
            /* @__PURE__ */ r("option", { value: "video", children: Be("video", e) }),
            /* @__PURE__ */ r("option", { value: "audio", children: Be("audio", e) })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", disabled: U || b.kind === "image", value: b.durationSeconds ?? "", onInput: (R) => S(b.id, { durationSeconds: R.currentTarget.value ? Number(R.currentTarget.value) : null, status: "pending", error: "" }) }),
            /* @__PURE__ */ r("span", { children: b.kind === "image" ? "—" : e === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-audio", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", disabled: U || b.kind !== "video", checked: b.kind === "video" && b.includeVideoAudio, onChange: (R) => S(b.id, { includeVideoAudio: R.currentTarget.checked }) }),
            /* @__PURE__ */ r("span", { children: b.kind === "video" ? b.includeVideoAudio ? e === "zh" ? "开" : "ON" : e === "zh" ? "关" : "OFF" : "—" })
          ] }),
          /* @__PURE__ */ r("button", { class: "danger", disabled: U, onClick: () => h((R) => R.filter((Z) => Z.id !== b.id)), children: e === "zh" ? "移除" : "Remove" })
        ] }, b.id);
      })
    ] }),
    /* @__PURE__ */ r("footer", { children: [
      /* @__PURE__ */ r("button", { disabled: l, onClick: o, children: e === "zh" ? "关闭" : "Close" }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: l || !a.some((b) => b.status === "pending" || b.status === "error"), onClick: () => void E(), children: l ? e === "zh" ? "正在导入…" : "Importing…" : q ? e === "zh" ? "重试失败项" : "Retry failed" : e === "zh" ? "开始导入" : "Start import" })
    ] })
  ] }) });
}
function se(e, t) {
  const n = e.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!n || n.startsWith("/") || /^[A-Za-z]:\//.test(n)) return null;
  const o = n.split("/").filter(Boolean), d = o.pop();
  if (!d || o.some((a) => a === "..")) return null;
  const i = new URLSearchParams({ filename: d, type: t });
  return o.length && i.set("subfolder", o.join("/")), `/view?${i.toString()}`;
}
function Ut(e) {
  return se(e, "input");
}
function de(e) {
  return e.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function mt({ asset: e, compact: t = !1 }) {
  const n = Ut(e.path), o = `td-media-preview ${t ? "compact" : ""}`;
  return n ? e.kind === "image" ? /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("img", { src: n, alt: e.alias, loading: "lazy" }) }) : e.kind === "video" ? /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("video", { src: n, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("audio", { src: n, controls: !0, preload: "metadata" }) }) : e.path ? /* @__PURE__ */ r("div", { class: `${o} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ r("div", { class: `${o} empty`, children: "尚未选择素材 / No media selected" });
}
function zr(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > e.length) return null;
  const o = e.slice(0, t).lastIndexOf("@");
  if (o < 0) return null;
  const d = o > 0 ? e[o - 1] : "";
  if (d && /[A-Za-z0-9_.+-]/.test(d)) return null;
  const i = e.slice(o + 1, t);
  return /[\s{}@]/u.test(i) ? null : { start: o, end: t, query: i };
}
function Sr(e, t) {
  const n = t.trim().toLocaleLowerCase();
  if (!n) return e;
  const o = [], d = [];
  for (const i of e)
    i.alias.toLocaleLowerCase().includes(n) ? o.push(i) : de(i.path).toLocaleLowerCase().includes(n) && d.push(i);
  return [...o, ...d];
}
function $r(e, t, n) {
  const o = `{{ref:${n}}}`;
  return {
    value: `${e.slice(0, t.start)}${o}${e.slice(t.end)}`,
    caret: t.start + o.length
  };
}
const Ft = String.raw`\{\{ref:([^{}]+)}}`;
function ft() {
  return new RegExp(Ft, "g");
}
function Ot(e, t) {
  return e.assets.filter((n) => n.enabled && n.path.trim() && (!(n.shotIds ?? []).length || (n.shotIds ?? []).includes(t.id)) && !(t.disabledAssetIds ?? []).includes(n.id));
}
function Ht(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const o of Ot(e, t)) n.set(o.alias, o);
  return n;
}
function Bt(e, t, n) {
  const o = n.trim(), d = o.endsWith(".audio"), i = d ? o.slice(0, -6) : o, a = Ht(e, t).get(i);
  return a ? !d || a.kind === "video" && a.includeVideoAudio : !1;
}
function gt(e, t) {
  const n = e.shots.filter((o) => o.enabled);
  return n.length > 0 && n.every((o) => Bt(e, o, t));
}
function Vt(e, t) {
  const n = [], o = Ht(e, t), d = [e.promptPrefix, t.prompt, e.promptSuffix].filter(Boolean).join(`
`), i = [...d.matchAll(ft())].map((g) => g[1].trim()), a = [], h = /* @__PURE__ */ new Set(), f = (g) => {
    h.has(g.id) || (h.add(g.id), a.push(g));
  };
  [...o.values()].filter((g) => g.fixed).sort((g, E) => g.fixedOrder - E.fixedOrder || g.alias.localeCompare(E.alias)).forEach(f);
  for (const g of i) {
    const E = g.endsWith(".audio") ? g.slice(0, -6) : g, P = o.get(E);
    if (!P) {
      n.push(`未找到或已禁用素材：${g}`);
      continue;
    }
    g.endsWith(".audio") && (P.kind !== "video" || !P.includeVideoAudio) && n.push(`视频伴音未启用：${g}`), f(P);
  }
  const p = a.filter((g) => g.kind === "image"), x = a.filter((g) => g.kind === "video"), c = x.filter((g) => g.includeVideoAudio), l = a.filter((g) => g.kind === "audio"), v = c.length + l.length, T = p.length + x.length + l.length;
  p.length > 9 && n.push(`参考图 ${p.length}/9，超出 H3 上限`), x.length > 3 && n.push(`参考视频 ${x.length}/3，超出 H3 上限`), v > 3 && n.push(`有效音频 ${v}/3，超出 H3 总上限`), T > 12 && n.push(`混合文件 ${T}/12，超出 H3 上限`), v && !p.length && !x.length && n.push("音频参考不能单独使用");
  const w = x.filter((g) => typeof g.durationSeconds == "number");
  for (const g of x) (g.durationSeconds == null || g.durationSeconds < 2 || g.durationSeconds > 15) && n.push(`视频 ${g.alias} 的时长必须为 2–15 秒`);
  w.reduce((g, E) => g + (E.durationSeconds ?? 0), 0) > 15 && n.push("参考视频总时长超过 15 秒");
  const S = [...c.map((g) => g.audioDurationSeconds ?? g.durationSeconds), ...l.map((g) => g.durationSeconds)];
  S.some((g) => g == null || g < 2 || g > 15) && n.push("每路有效音频时长必须为 2–15 秒"), S.reduce((g, E) => g + (E ?? 0), 0) > 15 && n.push("有效音频总时长超过 15 秒");
  const $ = /* @__PURE__ */ new Map();
  p.forEach((g, E) => $.set(g.alias, `<Picture ${E + 1}>`)), x.forEach((g, E) => $.set(g.alias, `<Video ${E + 1}>`)), c.forEach((g, E) => $.set(`${g.alias}.audio`, `<Audio ${E + 1}>`)), l.forEach((g, E) => $.set(g.alias, `<Audio ${c.length + E + 1}>`));
  const y = d.replace(ft(), (g, E) => $.get(E.trim()) ?? g), j = [...$.entries()].map(([g, E]) => ({ label: E, alias: g, kind: E.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: y, errors: n, slots: j, mixedFiles: T, audioCount: v };
}
function Cr(e) {
  var i, a, h, f, p, x;
  const t = [], n = /* @__PURE__ */ new Set(["off", "super_resolution_second_pass", "latent_upscale_second_pass", "super_resolution_only"]);
  (a = (i = e.project) == null ? void 0 : i.name) != null && a.trim() || t.push("Project name 不能为空"), (f = (h = e.project) == null ? void 0 : h.runId) != null && f.trim() || t.push("Run ID 不能为空"), (!Array.isArray(e.shots) || !e.shots.some((c) => c.enabled)) && t.push("至少需要一个启用分镜");
  const o = /* @__PURE__ */ new Set();
  for (const c of e.shots ?? [])
    (!((p = c.id) != null && p.trim()) || o.has(c.id)) && t.push(`分镜 ID 为空或重复：${c.id || "(空)"}`), o.add(c.id), c.durationSeconds > 0 || t.push(`分镜 ${c.id} 的时长必须大于 0`), n.has(c.secondSamplingMode) || t.push(`分镜 ${c.id} 的高清处理模式无效`);
  const d = /* @__PURE__ */ new Set();
  for (const c of e.assets ?? []) {
    const l = (x = c.alias) == null ? void 0 : x.toLocaleLowerCase();
    (!c.alias || /[\s{}]/.test(c.alias) || c.alias.endsWith(".audio") || d.has(l)) && t.push(`素材别名无效或重复：${c.alias || "(空)"}`), d.add(l), c.enabled && !c.path && t.push(`素材 ${c.alias} 尚未选择文件`);
  }
  for (const c of e.shots.filter((l) => l.enabled)) t.push(...Vt(e, c).errors.map((l) => `${c.title}: ${l}`));
  return [...new Set(t)];
}
function Tr(e, t) {
  const n = [], o = new RegExp(Ft, "g");
  let d = 0;
  for (const i of e.matchAll(o)) {
    const a = i.index ?? 0;
    a > d && n.push({ text: e.slice(d, a), reference: !1 }), n.push({ text: i[0], reference: !0, valid: t(i[1]) }), d = a + i[0].length;
  }
  return d < e.length && n.push({ text: e.slice(d), reference: !1 }), n;
}
const Ir = [
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
function Er(e, t) {
  const n = window.getComputedStyle(e), o = e.getBoundingClientRect(), d = document.createElement("div");
  d.setAttribute("aria-hidden", "true"), d.style.position = "fixed", d.style.visibility = "hidden", d.style.pointerEvents = "none", d.style.left = `${o.left}px`, d.style.top = `${o.top}px`, d.style.width = `${e.offsetWidth}px`, d.style.height = `${e.offsetHeight}px`, d.style.overflow = "hidden", d.style.whiteSpace = "pre-wrap";
  for (const f of Ir) d.style[f] = n[f];
  d.append(document.createTextNode(e.value.slice(0, t)));
  const i = document.createElement("span");
  i.textContent = "​", d.append(i), document.body.append(d), d.scrollTop = e.scrollTop, d.scrollLeft = e.scrollLeft;
  const a = i.getBoundingClientRect(), h = Number.parseFloat(n.lineHeight) || Number.parseFloat(n.fontSize) * 1.45 || 20;
  return d.remove(), { left: a.left, top: a.top, bottom: a.top + h };
}
const Ar = {
  zh: { image: "图片", video: "视频", audio: "音频" },
  en: { image: "Image", video: "Video", audio: "Audio" }
};
function Ve({ value: e, rows: t, onInput: n, isReferenceValid: o, mentionAssets: d, mentionLanguage: i = "zh" }) {
  const a = ie(null), h = ie(null), f = ie(null), p = ie(null), x = ie(!1), c = ie(!1), l = ie([]), v = ie([]), T = ie(`td-reference-mention-${Math.random().toString(36).slice(2)}`).current, [w, S] = A(null), [$, y] = A(0), [j, g] = A(null), E = Tr(e, o), P = me(
    () => w && d ? Sr(d, w.query) : [],
    [w, d]
  ), q = () => {
    S(null), g(null), y(0);
  }, J = (u) => {
    if (!d || u.selectionStart !== u.selectionEnd) {
      q();
      return;
    }
    const C = zr(u.value, u.selectionStart);
    if (!C) {
      q();
      return;
    }
    S((M) => M && M.start === C.start && M.end === C.end && M.query === C.query ? M : C);
  }, b = () => {
    var fe;
    if (!w || !f.current) return;
    const u = Er(f.current, w.end), C = 8, M = Math.min(390, Math.max(240, window.innerWidth - C * 2)), G = Math.min(320, Math.max(150, window.innerHeight - C * 2)), H = Math.min(((fe = p.current) == null ? void 0 : fe.offsetHeight) || G, G), F = Math.min(Math.max(u.left, C), window.innerWidth - M - C), re = u.bottom + 6 + H > window.innerHeight - C && u.top - H - 6 >= C ? u.top - H - 6 : Math.min(u.bottom + 6, window.innerHeight - H - C);
    g((ae) => ae && ae.left === F && ae.top === re && ae.width === M && ae.maxHeight === G ? ae : { left: F, top: re, width: M, maxHeight: G });
  };
  hr(b, [w, P.length, !!j]), ce(() => {
    if (!w) return;
    const u = () => b(), C = (M) => {
      var G, H;
      M.target instanceof Node && ((G = a.current) != null && G.contains(M.target) || (H = p.current) != null && H.contains(M.target)) || q();
    };
    return window.addEventListener("resize", u), document.addEventListener("scroll", u, !0), document.addEventListener("mousedown", C), () => {
      window.removeEventListener("resize", u), document.removeEventListener("scroll", u, !0), document.removeEventListener("mousedown", C);
    };
  }, [w]), ce(() => y(0), [w == null ? void 0 : w.query]), ce(() => {
    $ >= P.length && y(Math.max(0, P.length - 1));
  }, [$, P.length]), ce(() => {
    var u, C;
    (C = (u = p.current) == null ? void 0 : u.querySelector('[aria-selected="true"]')) == null || C.scrollIntoView({ block: "nearest" });
  }, [$, P.length]);
  const L = (u) => {
    h.current && (h.current.scrollTop = u.currentTarget.scrollTop, h.current.scrollLeft = u.currentTarget.scrollLeft), w && b();
  }, U = (u, C) => {
    if (!f.current) return;
    const M = f.current;
    c.current = !0, M.value = u, M.dispatchEvent(new Event("input", { bubbles: !0 })), c.current = !1, q(), window.requestAnimationFrame(() => {
      M.focus({ preventScroll: !0 }), M.setSelectionRange(C, C);
    });
  }, R = (u) => {
    if (!(u.ctrlKey || u.metaKey) || u.altKey) return !1;
    const C = u.key.toLocaleLowerCase(), M = C === "y" || C === "z" && u.shiftKey;
    if (!(C === "z" && !u.shiftKey) && !M) return !1;
    const H = M ? v.current : l.current, F = H[H.length - 1], ee = M ? F == null ? void 0 : F.beforeValue : F == null ? void 0 : F.afterValue;
    return !F || u.currentTarget.value !== ee ? !1 : (u.preventDefault(), H.pop(), (M ? l.current : v.current).push(F), U(M ? F.afterValue : F.beforeValue, M ? F.afterCaret : F.beforeCaret), !0);
  }, Z = (u) => {
    if (!w || !f.current) return;
    const C = f.current, M = $r(C.value, w, u.alias), G = `{{ref:${u.alias}}}`, H = {
      beforeValue: C.value,
      afterValue: M.value,
      beforeCaret: w.end,
      afterCaret: M.caret
    };
    C.focus({ preventScroll: !0 }), C.setSelectionRange(w.start, w.end);
    let F = !1;
    try {
      document.execCommand("insertText", !1, G), F = C.value === M.value;
    } catch {
    }
    F || (C.value = M.value, C.dispatchEvent(new Event("input", { bubbles: !0 }))), l.current.push(H), l.current.length > 100 && l.current.shift(), v.current = [], q(), window.requestAnimationFrame(() => {
      var ee, re;
      (ee = f.current) == null || ee.focus({ preventScroll: !0 }), (re = f.current) == null || re.setSelectionRange(M.caret, M.caret);
    });
  }, ne = (u) => {
    if (!(u.isComposing || x.current) && !R(u) && w) {
      if (u.key === "Escape") {
        u.preventDefault(), q();
        return;
      }
      if (P.length) {
        if (u.key === "ArrowDown" || u.key === "ArrowUp") {
          u.preventDefault();
          const C = u.key === "ArrowDown" ? 1 : -1;
          y((M) => (M + C + P.length) % P.length);
          return;
        }
        (u.key === "Enter" || u.key === "Tab") && (u.preventDefault(), Z(P[$] ?? P[0]));
      }
    }
  };
  return /* @__PURE__ */ r("span", { ref: a, class: "td-highlight-textarea", children: [
    /* @__PURE__ */ r("pre", { ref: h, class: "td-highlight-backdrop", "aria-hidden": "true", children: [
      E.map((u, C) => u.reference ? /* @__PURE__ */ r("mark", { class: u.valid ? "valid" : "invalid", children: u.text }, C) : u.text),
      e.endsWith(`
`) && " "
    ] }),
    /* @__PURE__ */ r(
      "textarea",
      {
        ref: f,
        class: "td-highlight-input",
        rows: t,
        value: e,
        "aria-autocomplete": d ? "list" : void 0,
        "aria-controls": w ? T : void 0,
        "aria-expanded": d ? !!w : void 0,
        "aria-activedescendant": w && P[$] ? `${T}-${P[$].id}` : void 0,
        onInput: (u) => {
          n(u);
          const C = u instanceof InputEvent ? u.inputType : "";
          !c.current && C !== "historyUndo" && C !== "historyRedo" && (v.current = []), x.current || J(u.currentTarget);
        },
        onClick: (u) => J(u.currentTarget),
        onSelect: (u) => {
          x.current || J(u.currentTarget);
        },
        onKeyDown: ne,
        onKeyUp: (u) => {
          !x.current && !["ArrowDown", "ArrowUp", "Enter", "Tab", "Escape"].includes(u.key) && J(u.currentTarget);
        },
        onCompositionStart: () => {
          x.current = !0;
        },
        onCompositionEnd: (u) => {
          x.current = !1, J(u.currentTarget);
        },
        onBlur: () => window.setTimeout(() => {
          document.activeElement !== f.current && q();
        }, 0),
        onScroll: L
      }
    ),
    w && j && /* @__PURE__ */ r(
      "div",
      {
        ref: p,
        id: T,
        class: "td-reference-mention-menu",
        role: "listbox",
        "aria-label": i === "zh" ? "选择参考素材" : "Choose reference media",
        style: { left: j.left, top: j.top, width: j.width, maxHeight: j.maxHeight },
        onMouseDown: (u) => u.preventDefault(),
        children: [
          /* @__PURE__ */ r("header", { children: [
            /* @__PURE__ */ r("strong", { children: i === "zh" ? "@ 参考素材" : "@ Reference media" }),
            /* @__PURE__ */ r("span", { children: P.length })
          ] }),
          P.length ? /* @__PURE__ */ r("div", { class: "td-reference-mention-options", children: P.map((u, C) => {
            const M = u.kind === "image" ? Ut(u.path) : null, G = de(u.path);
            return /* @__PURE__ */ r(
              "button",
              {
                id: `${T}-${u.id}`,
                type: "button",
                role: "option",
                "aria-selected": C === $,
                class: C === $ ? "active" : "",
                onMouseEnter: () => y(C),
                onClick: () => Z(u),
                children: [
                  /* @__PURE__ */ r("span", { class: `td-reference-mention-thumb ${u.kind}`, children: M ? /* @__PURE__ */ r("img", { src: M, alt: "", loading: "lazy" }) : /* @__PURE__ */ r("span", { children: u.kind === "image" ? "▧" : u.kind === "video" ? "▶" : "♫" }) }),
                  /* @__PURE__ */ r("span", { class: "td-reference-mention-copy", children: [
                    /* @__PURE__ */ r("strong", { children: u.alias }),
                    /* @__PURE__ */ r("small", { children: G || u.path })
                  ] }),
                  /* @__PURE__ */ r("em", { children: Ar[i][u.kind] })
                ]
              },
              u.id
            );
          }) }) : /* @__PURE__ */ r("p", { class: "td-reference-mention-empty", children: i === "zh" ? "没有匹配的可用素材" : "No available media matches" })
        ]
      }
    )
  ] });
}
const Mr = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", postprocess: "后处理", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", postprocess: "Post-process", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function ge(e, t) {
  return Mr[e][t];
}
function be(e) {
  return (Array.isArray(e.results) && e.results.length ? e.results : e.path ? [{ path: e.path, bytes: e.bytes, modifiedAt: e.modifiedAt, stage: e.stage, processingMode: e.processingMode, sourcePath: e.sourcePath, completedAt: e.completedAt }] : []).filter((n) => typeof n.path == "string" && n.path.trim().length > 0).sort((n, o) => (o.modifiedAt ?? 0) - (n.modifiedAt ?? 0));
}
function qt(e, t) {
  const n = /_video_(\d+)/i.exec(e.replace(/\\/g, "/"));
  return n ? Number(n[1]) : t;
}
function Pr(e) {
  return e.stage !== "second_pass" && e.stage !== "upscaled";
}
function Le({ src: e, alt: t }) {
  const n = ie(null), [o, d] = A(!1);
  return ce(() => {
    const i = n.current;
    if (!i) return;
    if (!("IntersectionObserver" in window)) {
      d(!0);
      return;
    }
    const a = new IntersectionObserver((h) => {
      d(h.some((f) => f.isIntersecting));
    }, { rootMargin: "160px" });
    return a.observe(i), () => a.disconnect();
  }, []), /* @__PURE__ */ r("div", { class: "td-result-thumb", ref: n, children: o ? /* @__PURE__ */ r("video", { src: e, "aria-label": t, muted: !0, playsInline: !0, preload: "metadata", onLoadedMetadata: (i) => {
    const a = i.currentTarget;
    Number.isFinite(a.duration) && a.duration > 0.02 && (a.currentTime = Math.min(0.25, Math.max(0, a.duration - 0.05)));
  } }) : /* @__PURE__ */ r("span", { children: "…" }) });
}
function Wt(e) {
  let t = 0;
  return e.shots.map((n, o) => {
    const d = {
      key: `${o}:${n.id}`,
      shot: n,
      sourceIndex: o,
      activeIndex: n.enabled ? t : -1
    };
    return n.enabled && (t += 1), d;
  });
}
function jr(e, t, n) {
  return e.filter((o) => o.shot.enabled && t[o.key]).map((o) => ({
    shotId: o.shot.id,
    activeIndex: o.activeIndex,
    path: n[o.key] ?? ""
  }));
}
function Lr(e, t, n) {
  const o = {};
  return e.forEach((d) => {
    const i = d.sourceIndex + 1;
    o[d.key] = d.shot.enabled && i >= t && i <= n;
  }), o;
}
function Nr(e, t, n) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId, shotId: t, activeIndex: String(n) }).toString()}`;
}
function Rr(e, t, n) {
  return t === "latent_upscale_second_pass" ? n === "zh" ? "Latent 放大二采" : "Latent upscale 2nd pass" : t === "super_resolution_second_pass" || e === "second_pass" ? n === "zh" ? "超分二采" : "Super-res 2nd pass" : t === "super_resolution_only" || e === "upscaled" ? n === "zh" ? "只超分" : "Super-res only" : e === "first_pass" ? n === "zh" ? "一采" : "1st pass" : n === "zh" ? "旧结果" : "Legacy";
}
function Se(e, t) {
  return e === "latent_upscale_second_pass" ? t === "zh" ? "Latent 放大二采" : "Latent upscale 2nd pass" : e === "super_resolution_only" ? t === "zh" ? "只超分" : "Super-res only" : t === "zh" ? "超分二采" : "Super-res 2nd pass";
}
function Dr({ plan: e, language: t, queueSecondPass: n }) {
  const o = me(() => Wt(e), [e]), [d, i] = A({}), [a, h] = A({}), [f, p] = A(null), [x, c] = A(0), [l, v] = A("super_resolution_second_pass");
  ce(() => {
    let w = !1;
    const S = {};
    return o.forEach(($) => {
      S[$.key] = { loading: !0, response: { found: !1, results: [] } };
    }), i(S), o.forEach(($) => {
      fetch(Nr(e, $.shot.id, $.activeIndex)).then(async (y) => {
        const j = await y.json();
        if (!y.ok) throw new Error(j.error || `HTTP ${y.status}`);
        w || i((g) => ({ ...g, [$.key]: { loading: !1, response: j } }));
      }).catch((y) => {
        w || i((j) => ({ ...j, [$.key]: { loading: !1, response: { found: !1, results: [], error: String(y) } } }));
      });
    }), () => {
      w = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((w) => w.id).join("|"), x]);
  const T = async (w, S) => {
    if (!n) return;
    const $ = `${S}:${l}`;
    h((y) => ({ ...y, [$]: { state: "queued" } }));
    try {
      await n({
        plan: e,
        shotId: w,
        sourcePath: S,
        requestId: `td2_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`,
        processingMode: l
      }), h((y) => ({ ...y, [$]: { state: "done" } })), c((y) => y + 1);
    } catch (y) {
      h((j) => ({ ...j, [$]: { state: "error", message: String(y instanceof Error ? y.message : y) } }));
    }
  };
  return /* @__PURE__ */ r("section", { class: "td-postprocess td-second-pass-panel", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "单独二采" : "Standalone processing" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "从满意的一采抽卡执行所选高清处理，不重跑一采，也不启动 Impact 循环。" : "Apply the selected processing mode to a first-pass result without rerunning the first pass or the Impact loop." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions td-second-pass-mode", children: [
        /* @__PURE__ */ r("label", { children: [
          /* @__PURE__ */ r("span", { children: t === "zh" ? "处理方式" : "Processing mode" }),
          /* @__PURE__ */ r("select", { value: l, onChange: (w) => v(w.currentTarget.value), children: [
            /* @__PURE__ */ r("option", { value: "super_resolution_second_pass", children: Se("super_resolution_second_pass", t) }),
            /* @__PURE__ */ r("option", { value: "latent_upscale_second_pass", children: Se("latent_upscale_second_pass", t) }),
            /* @__PURE__ */ r("option", { value: "super_resolution_only", children: Se("super_resolution_only", t) })
          ] })
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => c((w) => w + 1), children: [
          "↻ ",
          t === "zh" ? "刷新结果" : "Refresh"
        ] })
      ] })
    ] }),
    !n && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "当前工作流缺少后处理二采支流，请重新载入仓库中的 V7 导播台示例工作流。" : "This workflow does not contain the standalone second-pass branch. Reload the V7 example workflow from the repository." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: o.map((w) => {
      const S = d[w.key], $ = be((S == null ? void 0 : S.response) ?? { results: [] });
      return /* @__PURE__ */ r("article", { class: "td-post-shot", children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("span", { children: [
            /* @__PURE__ */ r("strong", { children: w.shot.id }),
            /* @__PURE__ */ r("em", { children: w.shot.title })
          ] }),
          /* @__PURE__ */ r("span", { children: [
            w.shot.durationSeconds,
            "s"
          ] })
        ] }),
        !w.shot.enabled && /* @__PURE__ */ r("div", { class: "td-post-shot-disabled-note", children: t === "zh" ? "镜头已禁用，但仍可对历史一采结果进行后处理。" : "This shot is disabled, but its historical first-pass results remain available." }),
        S != null && S.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading results…" }) : S != null && S.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : $.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: $.map((y) => {
          const j = se(y.path, "output"), g = a[`${y.path}:${l}`], E = Pr(y);
          return /* @__PURE__ */ r("div", { class: "td-second-pass-result", children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", onClick: () => j && p({ path: y.path, title: `${w.shot.id} · ${w.shot.title}` }), children: [
              j ? /* @__PURE__ */ r(Le, { src: j, alt: de(y.path) }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  Rr(y.stage, y.processingMode, t),
                  (y.stage === "legacy_unknown" || !y.stage) && /* @__PURE__ */ r("em", { children: t === "zh" ? "兼容" : "Compatible" })
                ] }),
                /* @__PURE__ */ r("span", { title: y.path, children: de(y.path) }),
                /* @__PURE__ */ r("small", { children: y.bytes ? `${(y.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "primary td-second-pass-run", disabled: !n || !E || (g == null ? void 0 : g.state) === "queued", onClick: () => void T(w.shot.id, y.path), children: E ? (g == null ? void 0 : g.state) === "queued" ? t === "zh" ? "排队/执行中…" : "Queued/running…" : (g == null ? void 0 : g.state) === "done" ? t === "zh" ? "处理完成" : "Completed" : Se(l, t) : t === "zh" ? "已处理" : "Already processed" }),
            (g == null ? void 0 : g.state) === "error" && /* @__PURE__ */ r("div", { class: "td-second-pass-error", children: g.message })
          ] }, y.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "没有可用的一采结果" : "No first-pass result available" })
      ] }, w.key);
    }) }),
    f && se(f.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => p(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (w) => w.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: f.title }),
        /* @__PURE__ */ r("button", { onClick: () => p(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: se(f.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { children: de(f.path) })
    ] }) })
  ] });
}
async function bt(e) {
  const t = await fetch(e), n = await t.json();
  if (!t.ok) throw new Error(n.error || `HTTP ${t.status}`);
  return n;
}
function Ur(e, t, n) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t,
    activeIndex: String(n)
  }).toString()}`;
}
function Fr(e) {
  return `/theodore-director/v1/postprocess/merged-videos?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId }).toString()}`;
}
function Or({ plan: e, language: t, queueSecondPass: n }) {
  const [o, d] = A("merge");
  return /* @__PURE__ */ r("section", { class: "td-postprocess-shell", children: [
    /* @__PURE__ */ r("div", { class: "td-post-mode-tabs", role: "tablist", children: [
      /* @__PURE__ */ r("button", { class: o === "merge" ? "active" : "", role: "tab", "aria-selected": o === "merge", onClick: () => d("merge"), children: t === "zh" ? "合并视频" : "Merge videos" }),
      /* @__PURE__ */ r("button", { class: o === "second-pass" ? "active" : "", role: "tab", "aria-selected": o === "second-pass", onClick: () => d("second-pass"), children: t === "zh" ? "单独二采" : "Standalone second pass" })
    ] }),
    o === "merge" ? /* @__PURE__ */ r(Hr, { plan: e, language: t }) : /* @__PURE__ */ r(Dr, { plan: e, language: t, queueSecondPass: n })
  ] });
}
function Hr({ plan: e, language: t }) {
  const n = me(() => Wt(e), [e]), [o, d] = A({}), [i, a] = A({}), [h, f] = A({}), [p, x] = A(null), [c, l] = A(!1), [v, T] = A(""), [w, S] = A(""), [$, y] = A({ found: !1, results: [] }), [j, g] = A(!1), [E, P] = A(!1), [q, J] = A(""), [b, L] = A(0), [U, R] = A("1"), [Z, ne] = A(String(n.length || 1)), u = n.filter((_) => _.shot.enabled), C = u.length > 0 && u.every((_) => i[_.key]), M = jr(n, i, h), G = M.filter((_) => !_.path), H = n.some((_) => {
    var k;
    return i[_.key] && ((k = o[_.key]) == null ? void 0 : k.loading);
  }), F = n.reduce(
    (_, k) => _ + (k.shot.enabled && i[k.key] ? k.shot.durationSeconds : 0),
    0
  ), ee = me(() => be($), [$]), re = ee.find((_) => _.path === q) ?? ee[0];
  ce(() => {
    let _ = !1;
    const k = {}, N = {};
    return n.forEach((W) => {
      k[W.key] = W.shot.enabled, N[W.key] = { loading: !0, response: { found: !1, results: [] } };
    }), a((W) => {
      const B = {};
      return n.forEach((Y) => {
        B[Y.key] = Y.shot.enabled ? W[Y.key] ?? k[Y.key] : !1;
      }), B;
    }), d(N), T(""), n.forEach((W) => {
      bt(Ur(e, W.shot.id, W.activeIndex)).then((B) => {
        if (_) return;
        const Y = be(B);
        d((X) => ({ ...X, [W.key]: { loading: !1, response: B } })), f((X) => {
          var te;
          return {
            ...X,
            [W.key]: Y.some((he) => he.path === X[W.key]) ? X[W.key] : ((te = Y[0]) == null ? void 0 : te.path) ?? ""
          };
        });
      }).catch((B) => {
        _ || d((Y) => ({
          ...Y,
          [W.key]: { loading: !1, response: { found: !1, results: [], error: String(B) } }
        }));
      });
    }), () => {
      _ = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((_) => `${_.id}:${_.enabled}`).join("|"), b]), ce(() => {
    let _ = !1;
    return g(!0), bt(Fr(e)).then((k) => {
      if (_) return;
      const N = be(k);
      y(k), J((W) => {
        var B;
        return N.some((Y) => Y.path === W) ? W : ((B = N[0]) == null ? void 0 : B.path) ?? "";
      });
    }).catch((k) => {
      _ || y({ found: !1, results: [], error: String(k) });
    }).finally(() => {
      _ || g(!1);
    }), () => {
      _ = !0;
    };
  }, [e.project.name, e.project.runId, b]);
  const fe = () => {
    const _ = !C;
    a((k) => {
      const N = { ...k };
      return u.forEach((W) => {
        N[W.key] = _;
      }), N;
    });
  }, ae = () => {
    const _ = Number(U), k = Number(Z);
    if (!Number.isInteger(_) || !Number.isInteger(k) || _ < 1 || k < _ || k > n.length) {
      window.alert(t === "zh" ? `请输入有效范围：1 ≤ m ≤ n ≤ ${n.length}` : `Enter a valid range: 1 ≤ m ≤ n ≤ ${n.length}`);
      return;
    }
    a(Lr(n, _, k));
  }, ke = async () => {
    if (!M.length) {
      window.alert(t === "zh" ? "请至少选择一个镜头" : "Select at least one shot.");
      return;
    }
    if (G.length) {
      window.alert(t === "zh" ? `以下已选镜头没有可用结果：${G.map((_) => _.shotId).join("、")}` : `Selected shots without a result: ${G.map((_) => _.shotId).join(", ")}`);
      return;
    }
    l(!0), T("");
    try {
      const _ = await fetch("/theodore-director/v1/postprocess/merge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId, selections: M })
      }), k = await _.json();
      if (!_.ok) throw new Error(k.error || `HTTP ${_.status}`);
      L((N) => N + 1);
    } catch (_) {
      T(String(_ instanceof Error ? _.message : _));
    } finally {
      l(!1);
    }
  }, Fe = async () => {
    P(!0), S("");
    try {
      const _ = await fetch("/theodore-director/v1/postprocess/open-folder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId })
      }), k = await _.json();
      if (!_.ok) throw new Error(k.error || `HTTP ${_.status}`);
    } catch (_) {
      S(String(_ instanceof Error ? _.message : _));
    } finally {
      P(!1);
    }
  }, ye = re != null && re.path ? se(re.path, "output") : null;
  return /* @__PURE__ */ r("section", { class: "td-postprocess", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并视频" : "Merge videos" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "从每个镜头选择一个结果，按当前分镜顺序进行无损合并。" : "Choose one result per shot and merge them losslessly in storyboard order." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: [
        /* @__PURE__ */ r("button", { disabled: E, onClick: Fe, children: [
          "📁 ",
          E ? t === "zh" ? "正在打开…" : "Opening…" : t === "zh" ? "打开结果文件夹" : "Open results folder"
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => L((_) => _ + 1), children: [
          "↻ ",
          t === "zh" ? "刷新结果" : "Refresh"
        ] }),
        /* @__PURE__ */ r("button", { onClick: fe, children: C ? t === "zh" ? "全部取消" : "Clear all" : t === "zh" ? "一键全选" : "Select all" })
      ] })
    ] }),
    w && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "打开结果文件夹失败：" : "Unable to open results folder: ",
      w
    ] }),
    /* @__PURE__ */ r("div", { class: "td-post-summary", children: [
      /* @__PURE__ */ r("span", { children: t === "zh" ? `已选择 ${M.length}/${u.length} 个启用镜头` : `${M.length}/${u.length} enabled shots selected` }),
      /* @__PURE__ */ r("span", { children: t === "zh" ? `预计时长 ${F.toFixed(1)} 秒` : `Estimated duration ${F.toFixed(1)} sec` }),
      /* @__PURE__ */ r("div", { class: "td-post-range", role: "group", "aria-label": t === "zh" ? "合并视频范围" : "Merge video range", children: [
        /* @__PURE__ */ r("span", { children: t === "zh" ? "范围" : "Range" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: n.length, step: "1", value: U, "aria-label": t === "zh" ? "起始镜头 m" : "Start shot m", onInput: (_) => R(_.currentTarget.value) }),
        /* @__PURE__ */ r("span", { children: "—" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: n.length, step: "1", value: Z, "aria-label": t === "zh" ? "结束镜头 n" : "End shot n", onInput: (_) => ne(_.currentTarget.value) }),
        /* @__PURE__ */ r("button", { disabled: !n.length, onClick: ae, children: t === "zh" ? "确认范围" : "Apply range" })
      ] }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: c || H || !M.length || !!G.length, onClick: ke, children: c ? t === "zh" ? "正在合并…" : "Merging…" : t === "zh" ? "合并所选视频" : "Merge selected videos" })
    ] }),
    v && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "合并失败：" : "Merge failed: ",
      v
    ] }),
    G.length > 0 && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "已选镜头中存在尚未生成视频的镜头。" : "Some selected shots do not have generated videos yet." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: n.map((_) => {
      const k = o[_.key], N = be((k == null ? void 0 : k.response) ?? { results: [] }), W = !!i[_.key];
      return /* @__PURE__ */ r("article", { class: `td-post-shot ${W ? "selected" : ""} ${_.shot.enabled ? "" : "disabled"}`, children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: W, disabled: !_.shot.enabled, onChange: (B) => a((Y) => ({ ...Y, [_.key]: B.currentTarget.checked })) }),
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
        k != null && k.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading generated results…" }) : k != null && k.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : N.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: N.map((B, Y) => {
          const X = se(B.path, "output"), te = h[_.key] === B.path, he = qt(B.path, N.length - Y);
          return /* @__PURE__ */ r("div", { class: `td-post-result ${te ? "selected" : ""}`, children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", role: "radio", "aria-checked": te, onClick: () => f((D) => ({ ...D, [_.key]: B.path })), children: [
              X ? /* @__PURE__ */ r(Le, { src: X, alt: `${_.shot.title} ${t === "zh" ? "结果" : "result"} ${he}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  t === "zh" ? `结果 ${he}` : `Result ${he}`,
                  Y === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
                ] }),
                /* @__PURE__ */ r("span", { title: B.path, children: de(B.path) }),
                /* @__PURE__ */ r("small", { children: B.bytes ? `${(B.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "td-post-result-play", disabled: !X, title: t === "zh" ? "播放预览" : "Play preview", onClick: () => X && x({ path: B.path, title: `${_.shot.id} · ${_.shot.title}` }), children: "▶" })
          ] }, B.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "未找到这个镜头的生成结果" : "No generated result found for this shot" })
      ] }, _.key);
    }) }),
    /* @__PURE__ */ r("section", { class: "td-post-merged", children: [
      /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并结果" : "Merged results" }),
        /* @__PURE__ */ r("span", { class: `td-result-state ${ee.length ? "found" : ""}`, children: j ? t === "zh" ? "查询中" : "Checking" : t === "zh" ? `${ee.length} 个结果` : `${ee.length} results` })
      ] }) }),
      j ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "正在查询合并结果…" : "Loading merged results…" }) : $.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: t === "zh" ? "无法查询合并结果" : "Unable to query merged results" }) : re && ye ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
        /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
          /* @__PURE__ */ r("video", { src: ye, controls: !0, preload: "metadata", playsInline: !0 }, re.path),
          /* @__PURE__ */ r("div", { class: "td-generated-meta", title: re.path, children: re.path })
        ] }),
        /* @__PURE__ */ r("div", { class: "td-result-list", children: ee.map((_, k) => {
          const N = se(_.path, "output");
          return /* @__PURE__ */ r("button", { class: `td-result-item ${_.path === re.path ? "selected" : ""}`, onClick: () => J(_.path), children: [
            N ? /* @__PURE__ */ r(Le, { src: N, alt: `${t === "zh" ? "合并结果" : "Merged result"} ${ee.length - k}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
            /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
              /* @__PURE__ */ r("strong", { children: [
                t === "zh" ? `合并结果 ${ee.length - k}` : `Merged result ${ee.length - k}`,
                k === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
              ] }),
              /* @__PURE__ */ r("span", { children: de(_.path) }),
              /* @__PURE__ */ r("small", { children: _.bytes ? `${(_.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
            ] })
          ] }, _.path);
        }) })
      ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "还没有合并结果" : "No merged result yet" })
    ] }),
    p && se(p.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => x(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (_) => _.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: p.title }),
        /* @__PURE__ */ r("button", { "aria-label": t === "zh" ? "关闭预览" : "Close preview", onClick: () => x(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: se(p.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { title: p.path, children: de(p.path) })
    ] }) })
  ] });
}
function Br(e) {
  const t = e.reduce((n, o) => {
    const d = /^shot_(\d+)$/i.exec(o.id.trim());
    return d ? Math.max(n, Number(d[1])) : n;
  }, 0);
  return Math.max(t, e.length) + 1;
}
function Vr(e, t = 5) {
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
function _t(e, t, n) {
  const o = Br(e), d = Array.from({ length: t }, (i, a) => Vr(o + a, n));
  return [...e, ...d];
}
const Kt = (e) => `${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, Ee = (e) => JSON.parse(JSON.stringify(e)), qr = { image: "图片", video: "视频", audio: "音频" }, xt = ["off", "super_resolution_second_pass", "latent_upscale_second_pass", "super_resolution_only"];
function vt(e, t) {
  return {
    off: ["关闭二采", "Off"],
    super_resolution_second_pass: ["超分二采", "Super-res 2nd pass"],
    latent_upscale_second_pass: ["Latent 放大二采", "Latent upscale 2nd pass"],
    super_resolution_only: ["只超分", "Super-res only"]
  }[e][t === "zh" ? 0 : 1];
}
function yt(e, t) {
  return e.processingMode === "latent_upscale_second_pass" ? t === "zh" ? "Latent 二采" : "Latent 2nd" : e.processingMode === "super_resolution_second_pass" || e.stage === "second_pass" ? t === "zh" ? "超分二采" : "Super-res 2nd" : e.processingMode === "super_resolution_only" || e.stage === "upscaled" ? t === "zh" ? "只超分" : "Super-res only" : e.stage === "first_pass" ? t === "zh" ? "一采" : "1st pass" : t === "zh" ? "旧结果" : "Legacy";
}
function wt(e) {
  var n;
  const t = Ee(e);
  return t.schemaVersion = 5, (n = t.project.id) != null && n.trim() || (t.project.id = Kt("project")), t.shots = t.shots.map((o) => {
    const d = o;
    return {
      ...o,
      latentRelay: o.latentRelay ?? !0,
      // 旧 BOOL 开关无损迁移到 V7.2 原有的超分二采模式。
      secondSamplingMode: o.secondSamplingMode ?? (d.secondSampling === !1 ? "off" : "super_resolution_second_pass"),
      disabledAssetIds: o.disabledAssetIds ?? []
    };
  }), t.assets = t.assets.map((o) => ({ ...o, shotIds: o.shotIds ?? [] })), t;
}
function Wr(e) {
  return e.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function Kr(e) {
  const t = Kt(e);
  return { id: t, alias: t, kind: e, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: e === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function kt(e, t, n) {
  const o = new FormData();
  o.append("projectName", e), o.append("kind", t), o.append("file", n);
  const d = await fetch("/theodore-director/v1/assets", { method: "POST", body: o }), i = await d.json();
  if (!d.ok || !i.path) throw new Error(i.error || `HTTP ${d.status}`);
  return i.path;
}
async function Jr(e, t, n) {
  const o = new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t.id,
    activeIndex: String(n)
  }), d = await fetch(`/theodore-director/v1/generated-video?${o.toString()}`), i = await d.json();
  if (!d.ok) throw new Error(i.error || `HTTP ${d.status}`);
  return i;
}
async function Gr(e) {
  var i;
  if ((i = navigator.clipboard) != null && i.writeText)
    try {
      await navigator.clipboard.writeText(e);
      return;
    } catch {
    }
  const t = document.activeElement, n = t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement ? { start: t.selectionStart, end: t.selectionEnd, direction: t.selectionDirection } : null, o = document.createElement("textarea");
  o.value = e, o.style.position = "fixed", o.style.opacity = "0", document.body.append(o), o.select();
  const d = document.execCommand("copy");
  if (o.remove(), t instanceof HTMLElement && t.focus({ preventScroll: !0 }), n && (t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement) && t.setSelectionRange(n.start, n.end, n.direction ?? void 0), !d) throw new Error("浏览器拒绝写入剪贴板");
}
function Qr({ initial: e, onSave: t, onClose: n, supportsSecondSampling: o, queueSecondPass: d }) {
  const [i, a] = A(() => wt(e)), [h, f] = A("shots"), [p, x] = A(0), [c, l] = A(() => navigator.language.startsWith("zh") ? "zh" : "en"), [v, T] = A({}), [w, S] = A(!0), [$, y] = A(!1), [j, g] = A(0), [E, P] = A({ found: !1, results: [] }), [q, J] = A(""), [b, L] = A(!1), [U, R] = A(""), [Z, ne] = A(!0), [u, C] = A(!1), [M, G] = A(!1), [H, F] = A([]), [ee, re] = A("5"), [fe, ae] = A("1"), [ke, Fe] = A("5"), [ye, _] = A("super_resolution_second_pass");
  ce(() => {
    const s = (m) => {
      m.target instanceof Element && m.target.closest(".td-shot-media-name") && m.preventDefault();
    };
    return document.addEventListener("mousedown", s), () => document.removeEventListener("mousedown", s);
  }, []);
  const k = i.shots[Math.min(p, i.shots.length - 1)], N = me(() => k ? Vt(i, k) : null, [i, k]), W = me(() => k ? Ot(i, k) : [], [i, k]), B = k != null && k.enabled ? i.shots.slice(0, p).filter((s) => s.enabled).length : -1, Y = H.length > 0 && H.every((s) => s.enabled), X = me(() => be(E), [E]), te = X.find((s) => s.path === q) ?? X[0], he = te != null && te.path ? se(te.path, "output") : null, D = (s) => a((m) => {
    const z = Ee(m);
    return s(z), z;
  }), Xe = (s, m) => D((z) => {
    const I = s + m;
    I < 0 || I >= z.shots.length || ([z.shots[s], z.shots[I]] = [z.shots[I], z.shots[s]], x(I));
  }), Jt = (s) => D((m) => {
    m.shots.length <= 1 || (m.shots.splice(s, 1), x((z) => z > s ? z - 1 : z === s ? Math.min(s, m.shots.length - 1) : z));
  }), Gt = () => {
    F(Ee(i.shots)), C(!0);
  }, Qt = () => {
    const s = Number(ee);
    if (!Number.isFinite(s) || s <= 0) {
      window.alert(c === "zh" ? "统一时长必须大于 0 秒" : "The shared duration must be greater than 0 seconds.");
      return;
    }
    F((m) => m.map((z) => ({ ...z, durationSeconds: s })));
  }, Yt = () => {
    const s = Number(fe), m = Number(ke);
    if (!Number.isInteger(s) || s < 1 || s > 100) {
      window.alert(c === "zh" ? "新增镜头数量必须是 1–100 的整数" : "The shot count must be an integer from 1 to 100.");
      return;
    }
    if (!Number.isFinite(m) || m <= 0) {
      window.alert(c === "zh" ? "新增镜头时长必须大于 0 秒" : "The new-shot duration must be greater than 0 seconds.");
      return;
    }
    F((z) => _t(z, s, m));
  }, Zt = () => {
    const s = !Y;
    F((m) => m.map((z) => ({ ...z, enabled: s })));
  }, Xt = () => {
    if (H.some((s) => !Number.isFinite(s.durationSeconds) || s.durationSeconds <= 0)) {
      window.alert(c === "zh" ? "每个镜头的时长都必须大于 0 秒" : "Every shot duration must be greater than 0 seconds.");
      return;
    }
    D((s) => {
      s.shots = Ee(H);
    }), x((s) => Math.min(s, H.length - 1)), C(!1);
  }, er = () => {
    const s = URL.createObjectURL(new Blob([JSON.stringify(i, null, 2)], { type: "application/json" })), m = document.createElement("a");
    m.href = s, m.download = `${Wr(i.project.name)}.director.json`, m.click(), URL.revokeObjectURL(s);
  }, tr = () => {
    const s = Cr(i);
    if (s.length) {
      window.alert(`计划未通过校验：

${s.join(`
`)}`);
      return;
    }
    t(i);
  };
  return ce(() => {
    let s = !1;
    return k ? (L(!0), Jr(i, k, B).then((m) => {
      if (s) return;
      const z = be(m);
      P(m), J((I) => {
        var O;
        return z.some((oe) => oe.path === I) ? I : ((O = z[0]) == null ? void 0 : O.path) ?? "";
      });
    }).catch((m) => {
      s || (P({ found: !1, results: [], error: String(m) }), J(""));
    }).finally(() => {
      s || L(!1);
    }), () => {
      s = !0;
    }) : (P({ found: !1, results: [] }), J(""), L(!1), () => {
      s = !0;
    });
  }, [i.project.name, i.project.runId, k == null ? void 0 : k.id, k == null ? void 0 : k.enabled, B, j]), /* @__PURE__ */ r("div", { class: "td-shell", children: [
    /* @__PURE__ */ r("header", { children: [
      /* @__PURE__ */ r("h1", { children: ge(c, "title") }),
      /* @__PURE__ */ r("div", { class: "td-actions", children: [
        /* @__PURE__ */ r("button", { onClick: er, children: "导出 / Export" }),
        /* @__PURE__ */ r("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ r("input", { type: "file", accept: "application/json,.json", onChange: async (s) => {
            var z;
            const m = (z = s.currentTarget.files) == null ? void 0 : z[0];
            if (m)
              try {
                const I = JSON.parse(await m.text());
                if (!I.project || !Array.isArray(I.shots) || !Array.isArray(I.assets)) throw new Error("不是有效的 Theodore Director Plan");
                a(wt(I)), x(0);
              } catch (I) {
                window.alert(String(I));
              }
          } })
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => l(c === "zh" ? "en" : "zh"), children: c === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: tr, children: ge(c, "save") }),
        /* @__PURE__ */ r("button", { onClick: n, children: ge(c, "close") })
      ] })
    ] }),
    /* @__PURE__ */ r("nav", { children: ["shots", "assets", "settings", "postprocess"].map((s) => /* @__PURE__ */ r("button", { class: h === s ? "active" : "", onClick: () => f(s), children: ge(c, s) })) }),
    /* @__PURE__ */ r("main", { children: [
      h === "shots" && /* @__PURE__ */ r("div", { class: "td-shots", children: [
        /* @__PURE__ */ r("aside", { class: "td-shot-sidebar", children: [
          o && /* @__PURE__ */ r("div", { class: "td-bulk-processing", children: [
            /* @__PURE__ */ r("select", { "aria-label": c === "zh" ? "批量处理模式" : "Bulk processing mode", value: ye, onChange: (s) => _(s.currentTarget.value), children: xt.map((s) => /* @__PURE__ */ r("option", { value: s, children: vt(s, c) })) }),
            /* @__PURE__ */ r("button", { class: "wide td-bulk-toggle", onClick: () => D((s) => {
              s.shots.forEach((m) => {
                m.secondSamplingMode = ye;
              });
            }), children: c === "zh" ? "应用到全部镜头" : "Apply to all shots" })
          ] }),
          /* @__PURE__ */ r("div", { class: "td-shot-list", children: i.shots.map((s, m) => /* @__PURE__ */ r("div", { class: `td-shot-card ${m === p ? "selected" : ""}`, onClick: () => x(m), children: [
            /* @__PURE__ */ r("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ r("button", { class: "td-shot-delete", disabled: i.shots.length <= 1, title: c === "zh" ? i.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : i.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": c === "zh" ? "删除镜头" : "Delete shot", onClick: (z) => {
              z.stopPropagation(), Jt(m);
            }, children: "×" }) }),
            /* @__PURE__ */ r("strong", { children: [
              m + 1,
              ". ",
              s.title
            ] }),
            /* @__PURE__ */ r("span", { children: [
              s.durationSeconds,
              "s · ",
              s.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-move-actions", children: [
              /* @__PURE__ */ r("button", { title: c === "zh" ? "上移镜头" : "Move shot up", onClick: (z) => {
                z.stopPropagation(), Xe(m, -1);
              }, children: "↑" }),
              /* @__PURE__ */ r("button", { title: c === "zh" ? "下移镜头" : "Move shot down", onClick: (z) => {
                z.stopPropagation(), Xe(m, 1);
              }, children: "↓" })
            ] })
          ] }, s.id)) }),
          /* @__PURE__ */ r("button", { class: "wide", onClick: () => D((s) => {
            const m = s.shots.length;
            s.shots = _t(s.shots, 1, 5), x(m);
          }), children: [
            "＋ ",
            ge(c, "addShot")
          ] }),
          /* @__PURE__ */ r("div", { class: "td-shot-batch-entry", children: /* @__PURE__ */ r("button", { class: "wide", onClick: Gt, children: c === "zh" ? "批量处理镜头" : "Batch edit shots" }) })
        ] }),
        k && /* @__PURE__ */ r("section", { class: "td-form", children: [
          /* @__PURE__ */ r("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ r("label", { children: [
              "ID",
              /* @__PURE__ */ r("input", { value: k.id, onInput: (s) => D((m) => {
                m.shots[p].id = s.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ r("input", { value: k.title, onInput: (s) => D((m) => {
                m.shots[p].title = s.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: k.durationSeconds, onInput: (s) => D((m) => {
                m.shots[p].durationSeconds = Number(s.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: k.enabled, onChange: (s) => D((m) => {
                  m.shots[p].enabled = s.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: B === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: k.latentRelay, onChange: (s) => D((m) => {
                  m.shots[p].latentRelay = s.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: [
                  "latent接力 / Relay",
                  B === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              o && /* @__PURE__ */ r("label", { class: "td-processing-mode", children: [
                /* @__PURE__ */ r("span", { children: c === "zh" ? "高清处理" : "Processing" }),
                /* @__PURE__ */ r("select", { value: k.secondSamplingMode, onChange: (s) => D((m) => {
                  m.shots[p].secondSamplingMode = s.currentTarget.value;
                }), children: xt.map((s) => /* @__PURE__ */ r("option", { value: s, children: vt(s, c) })) })
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
            /* @__PURE__ */ r(Ve, { rows: 10, value: k.prompt, mentionAssets: W, mentionLanguage: c, isReferenceValid: (s) => Bt(i, k, s), onInput: (s) => D((m) => {
              m.shots[p].prompt = s.currentTarget.value;
            }) }, k.id)
          ] }),
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ r("textarea", { rows: 3, value: k.negativePrompt, onInput: (s) => D((m) => {
              m.shots[p].negativePrompt = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ r("legend", { children: "本镜头素材 / Shot media" }),
            /* @__PURE__ */ r("label", { class: "td-shot-media-display-toggle", children: [
              /* @__PURE__ */ r("input", { type: "checkbox", checked: Z, onChange: (s) => ne(s.currentTarget.checked) }),
              /* @__PURE__ */ r("span", { children: c === "zh" ? "显示别名" : "Show aliases" })
            ] }),
            i.assets.map((s) => {
              const m = !k.disabledAssetIds.includes(s.id), z = Z ? s.alias : de(s.path) || s.alias, I = `{{ref:${s.alias}}}`;
              return /* @__PURE__ */ r("div", { class: `td-shot-media-card ${m ? "" : "disabled"}`, children: [
                /* @__PURE__ */ r("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ r(mt, { asset: s, compact: !0 }),
                  /* @__PURE__ */ r("span", { class: "td-shot-media-kind", children: c === "zh" ? qr[s.kind] : s.kind }),
                  /* @__PURE__ */ r("label", { class: "td-shot-media-toggle", title: m ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ r("input", { type: "checkbox", checked: m, onChange: (O) => D((oe) => {
                    const le = oe.shots[p].disabledAssetIds;
                    oe.shots[p].disabledAssetIds = O.currentTarget.checked ? le.filter((xe) => xe !== s.id) : [.../* @__PURE__ */ new Set([...le, s.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ r("button", { class: `td-shot-media-name ${U === s.id ? "copied" : ""}`, title: `${z}
${c === "zh" ? "点击复制" : "Click to copy"} ${I}`, onClick: async () => {
                  try {
                    await Gr(I), R(s.id), window.setTimeout(() => R((O) => O === s.id ? "" : O), 1400);
                  } catch (O) {
                    window.alert(`${c === "zh" ? "复制失败" : "Copy failed"}: ${String(O)}`);
                  }
                }, children: [
                  /* @__PURE__ */ r("span", { children: z }),
                  U === s.id && /* @__PURE__ */ r("em", { children: c === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, s.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ r("aside", { class: "td-preview", children: [
          /* @__PURE__ */ r("details", { open: w, onToggle: (s) => S(s.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: ge(c, "preview") }),
              /* @__PURE__ */ r("span", { class: "td-summary-counts", children: [
                "Picture ",
                (N == null ? void 0 : N.slots.filter((s) => s.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (N == null ? void 0 : N.slots.filter((s) => s.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (N == null ? void 0 : N.audioCount) ?? 0,
                "/3 · Files ",
                (N == null ? void 0 : N.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body", children: [
              N != null && N.errors.length ? /* @__PURE__ */ r("ul", { class: "errors", children: N.errors.map((s) => /* @__PURE__ */ r("li", { children: s })) }) : /* @__PURE__ */ r("p", { class: "ok", children: ge(c, "noErrors") }),
              /* @__PURE__ */ r("ol", { children: N == null ? void 0 : N.slots.map((s) => /* @__PURE__ */ r("li", { children: [
                /* @__PURE__ */ r("code", { children: s.label }),
                " ← ",
                s.alias
              ] })) }),
              /* @__PURE__ */ r("pre", { children: N == null ? void 0 : N.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ r("details", { open: $, onToggle: (s) => y(s.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: c === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ r("span", { class: `td-result-state ${X.length ? "found" : ""}`, children: b ? c === "zh" ? "查询中" : "Checking" : X.length ? c === "zh" ? `${X.length} 个结果` : `${X.length} results` : c === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ r("div", { class: "td-result-actions", children: /* @__PURE__ */ r("button", { onClick: () => g((s) => s + 1), children: [
                "↻ ",
                c === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              b ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: c === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : E.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: c === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again." }) : te && he ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
                /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
                  /* @__PURE__ */ r("video", { src: he, controls: !0, preload: "metadata", playsInline: !0 }, te.path),
                  /* @__PURE__ */ r("div", { class: "td-generated-meta", title: te.path, children: [
                    yt(te, c),
                    " · ",
                    te.path,
                    te.bytes ? ` · ${(te.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                  ] })
                ] }),
                /* @__PURE__ */ r("div", { class: "td-result-list", "aria-label": c === "zh" ? "全部生成结果" : "All generated results", children: X.map((s, m) => {
                  const z = se(s.path, "output"), I = qt(s.path, X.length - m), O = s.modifiedAt ? new Date(s.modifiedAt * 1e3).toLocaleString(c === "zh" ? "zh-CN" : "en-US") : "";
                  return /* @__PURE__ */ r("button", { class: `td-result-item ${s.path === te.path ? "selected" : ""}`, onClick: () => J(s.path), children: [
                    z ? /* @__PURE__ */ r(Le, { src: z, alt: `${c === "zh" ? "结果" : "Result"} ${I}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: /* @__PURE__ */ r("span", { children: "×" }) }),
                    /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
                      /* @__PURE__ */ r("strong", { children: [
                        c === "zh" ? `结果 ${I}` : `Result ${I}`,
                        " · ",
                        yt(s, c),
                        m === 0 && /* @__PURE__ */ r("em", { children: c === "zh" ? "最新" : "Latest" })
                      ] }),
                      /* @__PURE__ */ r("span", { title: s.path, children: de(s.path) }),
                      /* @__PURE__ */ r("small", { children: [s.bytes ? `${(s.bytes / 1024 / 1024).toFixed(1)} MB` : "", O].filter(Boolean).join(" · ") })
                    ] })
                  ] }, s.path);
                }) })
              ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: c === "zh" ? "未在预期路径找到本段视频" : "No video found at the expected path" })
            ] })
          ] })
        ] })
      ] }),
      h === "assets" && /* @__PURE__ */ r("div", { class: "td-assets", children: [
        /* @__PURE__ */ r("div", { class: "td-toolbar", children: [
          ["image", "video", "audio"].map((s) => /* @__PURE__ */ r("button", { onClick: () => D((m) => m.assets.push(Kr(s))), children: [
            "＋ ",
            s
          ] })),
          /* @__PURE__ */ r("button", { class: "td-asset-batch-entry", onClick: () => G(!0), children: [
            "⇧ ",
            c === "zh" ? "批量导入素材" : "Batch import assets"
          ] })
        ] }),
        i.assets.map((s, m) => /* @__PURE__ */ r("article", { children: /* @__PURE__ */ r("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ r("div", { class: "td-grid", children: [
              /* @__PURE__ */ r("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ r("input", { value: s.alias, onInput: (z) => D((I) => {
                  I.assets[m].alias = z.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ r("select", { value: s.kind, onChange: (z) => D((I) => {
                  I.assets[m].kind = z.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ r("option", { children: "image" }),
                  /* @__PURE__ */ r("option", { children: "video" }),
                  /* @__PURE__ */ r("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ r("input", { value: s.path, onInput: (z) => D((I) => {
                  I.assets[m].path = z.currentTarget.value;
                }) }),
                /* @__PURE__ */ r("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ r("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ r("input", { type: "file", accept: s.kind === "image" ? "image/*" : s.kind === "video" ? "video/*" : "audio/*", onChange: async (z) => {
                      var oe;
                      const I = z.currentTarget, O = (oe = I.files) == null ? void 0 : oe[0];
                      if (O) {
                        T((le) => ({ ...le, [s.id]: O.name }));
                        try {
                          const le = await kt(i.project.name, s.kind, O);
                          D((xe) => {
                            const et = xe.assets.find((rr) => rr.id === s.id);
                            et && (et.path = le);
                          });
                        } catch (le) {
                          window.alert(String(le));
                        } finally {
                          T((le) => {
                            const xe = { ...le };
                            return delete xe[s.id], xe;
                          }), I.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ r("span", { class: "td-file-name", title: v[s.id] || s.path, children: v[s.id] ? `${c === "zh" ? "上传中" : "Uploading"}: ${v[s.id]}` : de(s.path) || (c === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ r("input", { type: "number", min: "0", step: "0.1", value: s.durationSeconds ?? "", onInput: (z) => D((I) => {
                  I.assets[m].durationSeconds = z.currentTarget.value ? Number(z.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ r("input", { type: "number", value: s.fixedOrder, onInput: (z) => D((I) => {
                  I.assets[m].fixedOrder = Number(z.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ r("input", { value: s.shotIds.join(", "), onInput: (z) => D((I) => {
                  I.assets[m].shotIds = z.currentTarget.value.split(",").map((O) => O.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-flags", children: [
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: s.enabled, onChange: (z) => D((I) => {
                  I.assets[m].enabled = z.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: s.fixed, onChange: (z) => D((I) => {
                  I.assets[m].fixed = z.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              s.kind === "video" && /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: s.includeVideoAudio, onChange: (z) => D((I) => {
                  I.assets[m].includeVideoAudio = z.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ r("button", { class: "danger", onClick: () => D((z) => {
                z.assets.splice(m, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ r(mt, { asset: s })
        ] }) }, s.id))
      ] }),
      h === "settings" && /* @__PURE__ */ r("section", { class: "td-form settings", children: [
        /* @__PURE__ */ r("label", { children: [
          "Project name",
          /* @__PURE__ */ r("input", { value: i.project.name, onInput: (s) => D((m) => {
            m.project.name = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Run ID",
          /* @__PURE__ */ r("input", { value: i.project.runId, onInput: (s) => D((m) => {
            m.project.runId = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "FPS",
          /* @__PURE__ */ r("input", { type: "number", value: i.defaults.fps, onInput: (s) => D((m) => {
            m.defaults.fps = Number(s.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Base seed",
          /* @__PURE__ */ r("input", { type: "number", value: i.defaults.baseSeed, onInput: (s) => D((m) => {
            m.defaults.baseSeed = Number(s.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ r(Ve, { value: i.promptPrefix, isReferenceValid: (s) => gt(i, s), onInput: (s) => D((m) => {
            m.promptPrefix = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ r(Ve, { value: i.promptSuffix, isReferenceValid: (s) => gt(i, s), onInput: (s) => D((m) => {
            m.promptSuffix = s.currentTarget.value;
          }) })
        ] })
      ] }),
      h === "postprocess" && /* @__PURE__ */ r(Or, { plan: i, language: c, queueSecondPass: d })
    ] }),
    u && /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": c === "zh" ? "批量处理镜头" : "Batch edit shots", children: [
      /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("h2", { children: c === "zh" ? "批量处理镜头" : "Batch edit shots" }),
          /* @__PURE__ */ r("p", { children: c === "zh" ? `当前共 ${H.length} 个镜头` : `${H.length} shots` })
        ] }),
        /* @__PURE__ */ r("button", { "aria-label": c === "zh" ? "关闭" : "Close", onClick: () => C(!1), children: "×" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-tools", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            c === "zh" ? "所有镜头时长" : "Duration for all shots",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: ee, onInput: (s) => re(s.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: c === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: Qt, children: c === "zh" ? "一键设置所有时长" : "Set all durations" })
        ] }),
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            c === "zh" ? "新增镜头数量" : "New shot count",
            /* @__PURE__ */ r("input", { type: "number", min: "1", max: "100", step: "1", value: fe, onInput: (s) => ae(s.currentTarget.value) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            c === "zh" ? "每个镜头时长" : "Duration per shot",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: ke, onInput: (s) => Fe(s.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: c === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: Yt, children: c === "zh" ? "批量新增镜头" : "Add shots" })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-global-actions", children: [
        /* @__PURE__ */ r("span", { children: c === "zh" ? `已启用 ${H.filter((s) => s.enabled).length}/${H.length} 个镜头` : `${H.filter((s) => s.enabled).length}/${H.length} shots enabled` }),
        /* @__PURE__ */ r("button", { class: Y ? "active" : "", onClick: Zt, children: Y ? c === "zh" ? "全部禁用" : "Disable all" : c === "zh" ? "全部启用" : "Enable all" })
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
        H.map((s, m) => /* @__PURE__ */ r("div", { class: "td-batch-row", children: [
          /* @__PURE__ */ r("span", { children: m + 1 }),
          /* @__PURE__ */ r("input", { value: s.title, "aria-label": `${c === "zh" ? "镜头名" : "Shot name"} ${m + 1}`, onInput: (z) => F((I) => I.map((O, oe) => oe === m ? { ...O, title: z.currentTarget.value } : O)) }),
          /* @__PURE__ */ r("label", { class: "td-batch-enabled", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: s.enabled, onChange: (z) => F((I) => I.map((O, oe) => oe === m ? { ...O, enabled: z.currentTarget.checked } : O)) }),
            /* @__PURE__ */ r("span", { children: s.enabled ? c === "zh" ? "开" : "ON" : c === "zh" ? "关" : "OFF" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: s.durationSeconds, onInput: (z) => F((I) => I.map((O, oe) => oe === m ? { ...O, durationSeconds: Number(z.currentTarget.value) } : O)) }),
            /* @__PURE__ */ r("span", { children: c === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-relay", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: s.latentRelay, onChange: (z) => F((I) => I.map((O, oe) => oe === m ? { ...O, latentRelay: z.currentTarget.checked } : O)) }),
            /* @__PURE__ */ r("span", { children: s.latentRelay ? c === "zh" ? "开" : "ON" : c === "zh" ? "关" : "OFF" })
          ] })
        ] }, s.id))
      ] }),
      /* @__PURE__ */ r("footer", { children: [
        /* @__PURE__ */ r("button", { onClick: () => C(!1), children: c === "zh" ? "取消" : "Cancel" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: Xt, children: c === "zh" ? "应用更改" : "Apply changes" })
      ] })
    ] }) }),
    M && /* @__PURE__ */ r(kr, { language: c, assets: i.assets, projectName: i.project.name, uploadFile: kt, onImported: (s) => D((m) => {
      m.assets.push(...s);
    }), onClose: () => G(!1) })
  ] });
}
function Yr(e, t, n = !1, o) {
  const d = document.getElementById("theodore-director-modal");
  if (d) {
    d.focus();
    return;
  }
  const i = document.createElement("div");
  i.id = "theodore-director-modal", i.className = "td-modal", i.tabIndex = -1, document.body.append(i);
  const a = (f) => {
    f.key === "Escape" && h();
  }, h = () => {
    document.removeEventListener("keydown", a), it(null, i), i.remove();
  };
  document.addEventListener("keydown", a), it(/* @__PURE__ */ r(Qr, { initial: e, onSave: (f) => {
    t(f), h();
  }, onClose: h, supportsSecondSampling: n, queueSecondPass: o }), i), i.focus();
}
const Zr = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-shot-media{position:relative}.td-form label.td-shot-media-display-toggle{position:absolute;top:-17px;right:10px;z-index:3;display:flex;flex-direction:row;align-items:center;gap:6px;padding:6px 9px;border:1px solid var(--td-line);border-radius:6px;background:var(--td-panel);color:var(--td-text);cursor:pointer;white-space:nowrap}.td-form label.td-shot-media-display-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-display-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-highlight-textarea{position:relative;display:block;width:100%;min-width:0}.td-highlight-backdrop,.td-form textarea.td-highlight-input{box-sizing:border-box;width:100%;margin:0;padding:7px 9px;font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,monospace;font-size:inherit;line-height:1.45;letter-spacing:normal;-moz-tab-size:8;tab-size:8;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.td-highlight-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border:1px solid transparent;border-radius:6px;background:#222a35;color:var(--td-text);pointer-events:none}.td-form textarea.td-highlight-input{position:relative;z-index:1;display:block;background:transparent;color:transparent;caret-color:var(--td-text);-webkit-text-fill-color:transparent}.td-highlight-input::selection{background:#5898d46b}.td-highlight-backdrop mark{padding:0;border-radius:3px;color:inherit}.td-highlight-backdrop mark.valid{background:#1d6b50;color:#bfffe6}.td-highlight-backdrop mark.invalid{background:#7a2931;color:#ffd1d5;text-decoration:underline;text-decoration-color:#ff9aa4;text-underline-offset:2px}.td-reference-mention-menu{position:fixed;z-index:80;display:flex;flex-direction:column;overflow:hidden;border:1px solid #526174;border-radius:9px;background:#161d26;color:var(--td-text);box-shadow:0 14px 42px #000b}.td-reference-mention-menu>header{display:flex;align-items:center;justify-content:space-between;flex:none;padding:8px 10px;border-bottom:1px solid var(--td-line);background:#202936}.td-reference-mention-menu>header strong{color:var(--td-text);font-size:13px}.td-reference-mention-menu>header span{padding:1px 7px;border-radius:999px;background:#2b3745;color:var(--td-muted);font-size:11px}.td-reference-mention-options{min-height:0;overflow:auto;padding:5px}.td-shell .td-reference-mention-options>button{display:grid;grid-template-columns:66px minmax(0,1fr) auto;gap:9px;align-items:center;width:100%;min-height:56px;padding:5px;border:1px solid transparent;background:transparent;text-align:left}.td-shell .td-reference-mention-options>button:hover,.td-shell .td-reference-mention-options>button.active{border-color:#527e6c;background:#1d302b}.td-reference-mention-thumb{display:flex;width:66px;height:46px;align-items:center;justify-content:center;overflow:hidden;border:1px solid var(--td-line);border-radius:5px;background:#0b0f14;color:var(--td-accent);font-size:20px}.td-reference-mention-thumb img{display:block;width:100%;height:100%;object-fit:cover}.td-reference-mention-copy{display:flex;min-width:0;flex-direction:column;gap:2px}.td-reference-mention-copy strong,.td-reference-mention-copy small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-reference-mention-copy strong{color:var(--td-text)}.td-reference-mention-copy small{color:var(--td-muted);font-size:11px}.td-reference-mention-options>button>em{padding:2px 7px;border-radius:999px;background:#293440;color:var(--td-muted);font-size:10px;font-style:normal;white-space:nowrap}.td-reference-mention-empty{margin:0;padding:22px 12px;color:var(--td-muted);text-align:center}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-generated-results{display:flex;flex-direction:column;gap:12px}.td-result-list{display:flex;flex-direction:column;gap:7px;max-height:280px;overflow:auto;padding-right:3px}.td-shell button.td-result-item{display:grid;grid-template-columns:112px minmax(0,1fr);gap:10px;align-items:center;width:100%;padding:6px;text-align:left;background:#151b23}.td-shell button.td-result-item.selected{border-color:var(--td-accent);background:#1c2a2a}.td-result-thumb{width:112px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:5px;background:#090c10;color:var(--td-muted)}.td-result-thumb img,.td-result-thumb video{display:block;width:100%;height:100%;object-fit:contain}.td-result-item-copy{display:flex;min-width:0;flex-direction:column;gap:3px}.td-result-item-copy>strong{display:flex;align-items:center;gap:7px;color:var(--td-text)}.td-result-item-copy>strong em{padding:1px 6px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-result-item-copy>span,.td-result-item-copy>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-result-item-copy>small{font-size:10px}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-asset-batch-entry{margin-left:auto;border-color:#527061!important;background:#1b2c28!important;color:var(--td-accent)!important}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}.td-bulk-processing{display:grid;gap:6px;margin-bottom:9px}.td-bulk-processing select{width:100%;min-width:0}.td-bulk-processing .td-bulk-toggle{margin:0}.td-processing-mode{display:flex;align-items:center;gap:8px;min-width:260px}.td-processing-mode>span{white-space:nowrap;color:var(--td-muted)}.td-processing-mode select{min-width:170px}.td-second-pass-mode{align-items:flex-end}.td-second-pass-mode label{display:grid;gap:4px;text-align:left}.td-second-pass-mode label span{font-size:12px;color:var(--td-muted)}.td-second-pass-mode select{min-width:210px}.td-shot-sidebar{display:flex;flex-direction:column}.td-shot-list{flex:none}.td-shot-batch-entry{display:flex;align-items:flex-end;flex:1;min-height:90px;padding-top:14px}.td-shot-batch-entry button{border-color:#527061;background:#1b2c28;color:var(--td-accent)}.td-batch-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:28px;background:#05080dbd;box-sizing:border-box}.td-batch-panel{display:flex;flex-direction:column;width:min(1040px,100%);max-height:min(820px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-batch-header h2{font-size:18px;margin:0}.td-batch-header p{margin:3px 0 0;color:var(--td-muted)}.td-batch-header>button{font-size:20px;line-height:1;padding:5px 9px}.td-batch-tools{display:grid;grid-template-columns:1fr 1.4fr;gap:12px;padding:14px 18px;border-bottom:1px solid var(--td-line);background:#151b23}.td-batch-tools>div{display:flex;align-items:end;gap:8px;padding:10px;border:1px solid var(--td-line);border-radius:7px}.td-batch-tools label{display:flex;flex:1;flex-direction:column;gap:4px;color:var(--td-muted);white-space:nowrap}.td-batch-tools label>span,.td-batch-duration{display:flex;align-items:center;gap:6px}.td-batch-tools input{width:100%}.td-batch-tools em{color:var(--td-muted);font-style:normal}.td-batch-tools button{white-space:nowrap}.td-batch-global-actions{display:flex;align-items:center;justify-content:flex-end;gap:12px;padding:9px 22px;border-bottom:1px solid var(--td-line);background:#171e27;color:var(--td-muted)}.td-batch-global-actions button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-batch-table{overflow:auto;padding:0 18px}.td-batch-row{display:grid;grid-template-columns:42px minmax(180px,1fr) 100px 150px 120px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-batch-table-head{position:sticky;top:0;z-index:1;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-batch-duration input{min-width:0;width:100%}.td-batch-duration>span{color:var(--td-muted)}.td-batch-enabled,.td-batch-relay{display:flex;align-items:center;gap:7px;justify-content:flex-start;color:var(--td-text)}.td-batch-enabled input,.td-batch-relay input{width:17px;height:17px;margin:0}.td-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-batch-panel{display:flex;flex-direction:column;width:min(1420px,100%);max-height:min(880px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-asset-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-asset-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-dropzone{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-height:92px;margin:14px 18px 10px;border:1px dashed #597084;border-radius:9px;background:#151b23;color:var(--td-text);cursor:pointer;transition:border-color .15s,background .15s}.td-asset-dropzone:hover,.td-asset-dropzone.dragging{border-color:var(--td-accent);background:#1b2c28}.td-asset-dropzone span{color:var(--td-muted);font-size:12px}.td-asset-dropzone input{display:none}.td-asset-batch-warning{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 18px 10px;padding:8px 10px;border:1px solid #836a32;border-radius:7px;background:#3a301c;color:#f4d991}.td-asset-batch-warning span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-warning button{padding:2px 7px}.td-asset-batch-summary{display:flex;align-items:center;justify-content:space-between;padding:8px 18px;border-top:1px solid var(--td-line);border-bottom:1px solid var(--td-line);background:#151b23;color:var(--td-muted)}.td-asset-batch-summary button{padding:5px 8px}.td-asset-batch-list{overflow:auto;padding:0 18px 10px}.td-asset-batch-row{display:grid;grid-template-columns:minmax(210px,1.4fr) minmax(150px,1fr) 115px 135px 105px 72px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-asset-batch-head{position:sticky;top:0;z-index:2;padding-top:10px;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-asset-batch-row.invalid{background:#3b202560}.td-asset-batch-row.imported{background:#17372d55}.td-asset-batch-file{display:flex;min-width:0;flex-direction:column;gap:2px}.td-asset-batch-file strong,.td-asset-batch-file small,.td-asset-batch-file em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-file small{color:var(--td-muted);font-weight:400}.td-asset-batch-file em{color:var(--td-danger);font-size:11px;font-style:normal}.td-asset-batch-duration,.td-asset-batch-audio{display:flex;align-items:center;gap:6px;color:var(--td-muted)}.td-asset-batch-duration input{min-width:0;width:100%}.td-asset-batch-audio input{width:17px;height:17px;margin:0}.td-asset-batch-empty{display:flex;min-height:130px;align-items:center;justify-content:center;color:var(--td-muted)}.td-asset-batch-panel button:disabled,.td-asset-batch-panel input:disabled,.td-asset-batch-panel select:disabled{opacity:.55;cursor:not-allowed}.td-postprocess{display:flex;flex-direction:column;gap:14px;max-width:1500px;margin:0 auto}.td-post-header,.td-post-summary,.td-post-merged{border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px}.td-post-header h2,.td-post-merged h2{margin:0;font-size:17px}.td-post-header p{margin:4px 0 0;color:var(--td-muted)}.td-post-actions{display:flex;gap:8px;flex:none}.td-post-summary{display:flex;align-items:center;gap:18px;padding:10px 14px;color:var(--td-muted)}.td-post-summary>button{margin-left:auto}.td-post-summary button:disabled{opacity:.5;cursor:not-allowed}.td-post-range{display:flex;align-items:center;gap:6px;margin-left:auto}.td-post-range input{width:64px;padding:6px 7px;text-align:center}.td-post-range button{white-space:nowrap}.td-post-summary>.td-post-range+button{margin-left:0}.td-post-error,.td-post-warning{padding:10px 13px;border-radius:7px}.td-post-error{border:1px solid #8b4149;background:#442228;color:#ffd1d5;white-space:pre-wrap}.td-post-warning{border:1px solid #836a32;background:#3a301c;color:#f4d991}.td-post-shot-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(390px,1fr));gap:12px;align-items:start}.td-post-shot{min-width:0;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel);overflow:hidden}.td-post-shot.selected{border-color:#527e6c}.td-post-shot.disabled{opacity:.72}.td-post-shot>header{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid var(--td-line);background:#1d2530}.td-post-shot>header>label{display:flex;align-items:center;gap:9px;min-width:0;cursor:pointer}.td-post-shot>header input{width:18px;height:18px;margin:0;flex:none}.td-post-shot>header label>span{display:flex;min-width:0;gap:8px;align-items:baseline}.td-post-shot>header strong{color:var(--td-text)}.td-post-shot>header em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted);font-style:normal}.td-post-shot>header>span{flex:none;padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted)}.td-post-shot-disabled-note{padding:7px 10px;border-bottom:1px solid var(--td-line);background:#332b1d;color:#e5c77d;font-size:11px}.td-post-shot-empty{min-height:96px;display:flex;align-items:center;justify-content:center;padding:12px;color:var(--td-muted);text-align:center}.td-post-result-list{display:flex;flex-direction:column;gap:7px;max-height:360px;overflow:auto;padding:9px}.td-post-result{display:grid;grid-template-columns:minmax(0,1fr) 35px;gap:6px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:5px}.td-post-result.selected{border-color:var(--td-accent);background:#1c2a2a}.td-shell button.td-post-result-choice{display:grid;grid-template-columns:112px minmax(0,1fr);gap:9px;align-items:center;min-width:0;padding:0;border:0;background:transparent;text-align:left}.td-post-result-choice>span{display:flex;min-width:0;flex-direction:column;gap:3px}.td-post-result-choice>span>strong{display:flex;align-items:center;gap:6px}.td-post-result-choice>span>strong em{padding:1px 5px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-post-result-choice>span>span,.td-post-result-choice>span>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-post-result-choice>span>small{font-size:10px}.td-post-result-play{width:35px;height:35px;padding:0!important}.td-post-result-play:disabled{opacity:.35;cursor:not-allowed}.td-post-merged{padding:12px}.td-post-merged>header>div{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px}.td-post-merged .td-generated-results{display:grid;grid-template-columns:minmax(360px,1.6fr) minmax(300px,1fr);align-items:start}.td-post-merged .td-result-list{max-height:420px}.td-post-preview-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:30;display:flex;align-items:center;justify-content:center;padding:26px;background:#030609d6}.td-post-preview-overlay>section{width:min(980px,100%);max-height:calc(100vh - 52px);overflow:auto;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 80px #000c}.td-post-preview-overlay header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--td-line)}.td-post-preview-overlay header button{font-size:20px;line-height:1;padding:5px 9px}.td-post-preview-overlay video{display:block;width:100%;max-height:calc(100vh - 170px);background:#070a0e}.td-post-preview-overlay p{margin:0;padding:9px 12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}.td-post-summary{flex-wrap:wrap}.td-post-range{margin-left:0}.td-post-summary>button{margin-left:auto}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:900px){.td-post-shot-list,.td-post-merged .td-generated-results{grid-template-columns:1fr}.td-post-header{align-items:flex-start;flex-direction:column}.td-post-actions{width:100%}.td-post-actions button{flex:1}.td-post-summary{align-items:stretch;flex-direction:column;gap:7px}.td-post-range{margin:3px 0;flex-wrap:wrap}.td-post-summary>button{margin:4px 0 0}.td-post-result-list{max-height:none}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}@media(max-width:1000px){.td-asset-batch-list{min-width:900px}.td-asset-batch-panel{overflow:auto}.td-asset-batch-panel>.td-batch-header,.td-asset-dropzone,.td-asset-batch-warning,.td-asset-batch-summary,.td-asset-batch-panel>footer{min-width:864px}}@media(max-width:720px){.td-asset-batch-entry{margin-left:0}}.td-postprocess-shell{display:flex;flex-direction:column;gap:12px;max-width:1500px;margin:0 auto}.td-postprocess-shell>.td-postprocess{max-width:none;width:100%;margin:0}.td-post-mode-tabs{display:flex;gap:7px;padding:5px;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-mode-tabs button{min-width:130px}.td-post-mode-tabs button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-second-pass-panel .td-post-shot>header>span:first-child{display:flex;min-width:0;gap:8px;align-items:baseline;padding:0;background:transparent}.td-second-pass-result{display:grid;grid-template-columns:minmax(0,1fr) 118px;gap:8px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:6px}.td-second-pass-result:has(.td-second-pass-run:disabled){border-color:#34404d}.td-second-pass-run{width:118px;min-height:38px;padding:6px!important}.td-second-pass-run:disabled{opacity:.62;cursor:not-allowed}.td-second-pass-error{grid-column:1/-1;padding:6px 8px;border-radius:5px;background:#442228;color:#ffd1d5;font-size:11px;white-space:pre-wrap}@media(max-width:620px){.td-post-mode-tabs{flex-direction:column}.td-post-mode-tabs button{width:100%}.td-second-pass-result{grid-template-columns:1fr}.td-second-pass-run{width:100%}}", zt = "theodore-director-styles";
function Xr() {
  if (document.getElementById(zt)) return;
  const e = document.createElement("style");
  e.id = zt, e.textContent = Zr, document.head.append(e);
}
Xr();
const en = "/scripts/app.js", tn = "/scripts/api.js";
Promise.all([
  import(
    /* @vite-ignore */
    en
  ),
  import(
    /* @vite-ignore */
    tn
  )
]).then(([{ app: e }, { api: t }]) => {
  const n = async (o) => {
    var T, w;
    const d = ((T = e.graph) == null ? void 0 : T._nodes) ?? [], i = d.find((S) => S.type === "TheodoreDirector_PostprocessSecondPassSource"), a = d.find((S) => S.type === "TheodoreDirector_SaveSecondPass"), h = (w = i == null ? void 0 : i.widgets) == null ? void 0 : w.find((S) => S.name === "request_json");
    if (!i || !a || !h || a.id === void 0)
      throw new Error("当前工作流缺少后处理单独二采支流，请重新载入仓库中的 V7 导播台示例工作流");
    const f = h.value, p = i.mode, x = a.mode;
    let c;
    try {
      h.value = JSON.stringify(o), i.mode = 0, a.mode = 0, c = await e.graphToPrompt(e.rootGraph);
    } finally {
      h.value = f, i.mode = p, a.mode = x;
    }
    const v = (await t.queuePrompt(0, c, { partialExecutionTargets: [String(a.id)] })).prompt_id;
    if (!v) throw new Error("ComfyUI 没有返回二采任务 ID");
    await new Promise((S, $) => {
      const y = () => {
        t.removeEventListener("execution_success", g), t.removeEventListener("execution_error", E), t.removeEventListener("execution_interrupted", E);
      }, j = (P) => {
        var q;
        return String(((q = P.detail) == null ? void 0 : q.prompt_id) ?? "");
      }, g = (P) => {
        j(P) === v && (y(), S());
      }, E = (P) => {
        if (j(P) !== v) return;
        const q = P.detail ?? {};
        y(), $(new Error(String(q.exception_message ?? q.error ?? "单独二采任务执行失败")));
      };
      t.addEventListener("execution_success", g), t.addEventListener("execution_error", E), t.addEventListener("execution_interrupted", E);
    });
  };
  e.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(o, d) {
      if (d.name === "TheodoreDirector_PostprocessSecondPassSource") {
        const a = o.prototype.onNodeCreated;
        o.prototype.onNodeCreated = function() {
          var f, p;
          a == null || a.apply(this);
          const h = (f = this.widgets) == null ? void 0 : f.find((x) => x.name === "request_json");
          h && (h.type = "hidden", h.computeSize = () => [0, -4]), this.size = [Math.max(((p = this.size) == null ? void 0 : p[0]) ?? 300, 380), 80];
        };
        return;
      }
      if (d.name !== "TheodoreDirector_Project") return;
      const i = o.prototype.onNodeCreated;
      o.prototype.onNodeCreated = function() {
        var h, f;
        i == null || i.apply(this);
        const a = (h = this.widgets) == null ? void 0 : h.find((p) => p.name === "plan_json");
        a && (a.type = "hidden", a.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          var p;
          try {
            const x = JSON.parse(String(a.value)), c = ((p = e.graph) == null ? void 0 : p._nodes) ?? [], l = c.some((v) => v.type === "TheodoreDirector_PostprocessSecondPassSource") && c.some((v) => v.type === "TheodoreDirector_SaveSecondPass");
            Yr(x, (v) => {
              var T, w;
              a.value = JSON.stringify(v, null, 2), this.setDirtyCanvas(!0, !0), (w = (T = e.graph) == null ? void 0 : T.setDirtyCanvas) == null || w.call(T, !0, !0);
            }, !0, l ? n : void 0);
          } catch (x) {
            window.alert(`Theodore Director: ${x instanceof Error ? x.message : String(x)}`);
          }
        }), this.size = [Math.max(((f = this.size) == null ? void 0 : f[0]) ?? 300, 360), 110]);
      };
    }
  });
});
