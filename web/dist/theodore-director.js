var Le, q, St, ue, et, zt, $t, Fe, ze, we, Ct, Ke, Ve, qe, Ee = {}, Ae = [], rr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ne = Array.isArray;
function pe(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Je(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function nr(e, t, n) {
  var o, d, i, a = {};
  for (i in t) i == "key" ? o = t[i] : i == "ref" ? d = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Le.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return $e(e, a, o, d, null);
}
function $e(e, t, n, o, d) {
  var i = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: d ?? ++St, __i: -1, __u: 0 };
  return d == null && q.vnode != null && q.vnode(i), i;
}
function Re(e) {
  return e.children;
}
function Ce(e, t) {
  this.props = e, this.context = t;
}
function xe(e, t) {
  if (t == null) return e.__ ? xe(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? xe(e) : null;
}
function or(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, o = [], d = [], i = pe({}, t);
    i.__v = t.__v + 1, q.vnode && q.vnode(i), Ge(e.__P, i, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, o, n ?? xe(t), !!(32 & t.__u), d), i.__v = t.__v, i.__.__k[i.__i] = i, Mt(o, i, d), t.__e = t.__ = null, i.__e != n && Tt(i);
  }
}
function Tt(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), Tt(e);
}
function tt(e) {
  (!e.__d && (e.__d = !0) && ue.push(e) && !Me.__r++ || et != q.debounceRendering) && ((et = q.debounceRendering) || zt)(Me);
}
function Me() {
  try {
    for (var e, t = 1; ue.length; ) ue.length > t && ue.sort($t), e = ue.shift(), t = ue.length, or(e);
  } finally {
    ue.length = Me.__r = 0;
  }
}
function It(e, t, n, o, d, i, a, h, f, p, _) {
  var c, l, v, E, w, z, $ = o && o.__k || Ae, y = t.length;
  for (f = ir(n, t, $, f, y), c = 0; c < y; c++) (v = n.__k[c]) != null && (l = v.__i != -1 && $[v.__i] || Ee, v.__i = c, z = Ge(e, v, l, d, i, a, h, f, p, _), E = v.__e, v.ref && l.ref != v.ref && (l.ref && Qe(l.ref, null, v), _.push(v.ref, v.__c || E, v)), w == null && E != null && (w = E), 4 & v.__u ? (f = Et(v, f, e), l.__e && (l.__e = null)) : typeof v.type == "function" && z !== void 0 ? f = z : E && (f = E.nextSibling), v.__u &= -7);
  return n.__e = w, f;
}
function ir(e, t, n, o, d) {
  var i, a, h, f, p, _ = n.length, c = _, l = 0;
  for (e.__k = new Array(d), i = 0; i < d; i++) (a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = e.__k[i] = $e(null, a, null, null, null) : Ne(a) ? a = e.__k[i] = $e(Re, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? a = e.__k[i] = $e(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : e.__k[i] = a, f = i + l, a.__ = e, a.__b = e.__b + 1, h = null, (p = a.__i = sr(a, n, f, c)) != -1 && (c--, (h = n[p]) && (h.__u |= 2)), h == null || h.__v == null ? (p == -1 && (d > _ ? l-- : d < _ && l++), typeof a.type != "function" && (a.__u |= 4)) : p != f && (p == f - 1 ? l-- : p == f + 1 ? l++ : (p > f ? l-- : l++, a.__u |= 4))) : e.__k[i] = null;
  if (c) for (i = 0; i < _; i++) (h = n[i]) != null && (2 & h.__u) == 0 && (h.__e == o && (o = xe(h)), jt(h, h));
  return o;
}
function Et(e, t, n) {
  var o, d;
  if (typeof e.type == "function") {
    for (o = e.__k, d = 0; o && d < o.length; d++) o[d] && (o[d].__ = e, t = Et(o[d], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = xe(e)), t = n.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function sr(e, t, n, o) {
  var d, i, a, h = e.key, f = e.type, p = t[n], _ = p != null && (2 & p.__u) == 0;
  if (p === null && h == null || _ && h == p.key && f == p.type) return n;
  if (o > (_ ? 1 : 0)) {
    for (d = n - 1, i = n + 1; d >= 0 || i < t.length; ) if ((p = t[a = d >= 0 ? d-- : i++]) != null && (2 & p.__u) == 0 && h == p.key && f == p.type) return a;
  }
  return -1;
}
function rt(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || rr.test(t) ? n : n + "px";
}
function Se(e, t, n, o, d) {
  var i, a;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof o == "string" && (e.style.cssText = o = ""), o) for (t in o) n && t in n || rt(e.style, t, "");
    if (n) for (t in n) o && n[t] == o[t] || rt(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(Ct, "$1")), a = t.toLowerCase(), t = a in e || t == "onFocusOut" || t == "onFocusIn" ? a.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? o ? n[we] = o[we] : (n[we] = Ke, e.addEventListener(t, i ? qe : Ve, i)) : e.removeEventListener(t, i ? qe : Ve, i);
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
function nt(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t[ze] == null) t[ze] = Ke++;
      else if (t[ze] < n[we]) return;
      return n(q.event ? q.event(t) : t);
    }
  };
}
function Ge(e, t, n, o, d, i, a, h, f, p) {
  var _, c, l, v, E, w, z, $, y, M, b, I, C, U, W, g, L = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (f = !!(32 & n.__u), i = [h = t.__e = n.__e]), (_ = q.__b) && _(t);
  e: if (typeof L == "function") {
    c = a.length;
    try {
      if (y = t.props, M = L.prototype && L.prototype.render, b = (_ = L.contextType) && o[_.__c], I = _ ? b ? b.props.value : _.__ : o, n.__c ? $ = (l = t.__c = n.__c).__ = l.__E : (M ? t.__c = l = new L(y, I) : (t.__c = l = new Ce(y, I), l.constructor = L, l.render = ar), b && b.sub(l), l.state || (l.state = {}), l.__n = o, v = l.__d = !0, l.__h = [], l._sb = []), M && l.__s == null && (l.__s = l.state), M && L.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = pe({}, l.__s)), pe(l.__s, L.getDerivedStateFromProps(y, l.__s))), E = l.props, w = l.state, l.__v = t, v) M && L.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), M && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (M && L.getDerivedStateFromProps == null && y !== E && l.componentWillReceiveProps != null && l.componentWillReceiveProps(y, I), t.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(y, l.__s, I) === !1) {
          t.__v != n.__v && (l.props = y, l.state = l.__s, l.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(F) {
            F && (F.__ = t);
          }), Ae.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && a.push(l), h = xe(n);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(y, l.__s, I), M && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(E, w, z);
        });
      }
      if (l.context = I, l.props = y, l.__P = e, l.__e = !1, C = q.__r, U = 0, M) l.state = l.__s, l.__d = !1, C && C(t), _ = l.render(l.props, l.state, l.context), Ae.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, C && C(t), _ = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++U < 25);
      l.state = l.__s, l.getChildContext != null && (o = pe(pe({}, o), l.getChildContext())), M && !v && l.getSnapshotBeforeUpdate != null && (z = l.getSnapshotBeforeUpdate(E, w)), W = _ != null && _.type === Re && _.key == null ? Pt(_.props.children) : _, h = It(e, Ne(W) ? W : [W], t, n, o, d, i, a, h, f, p), l.base = t.__e, t.__u &= -161, l.__h.length && a.push(l), $ && (l.__E = l.__ = null);
    } catch (F) {
      if (a.length = c, t.__v = null, f || i != null) {
        if (F.then) {
          for (t.__u |= f ? 160 : 128; h && h.nodeType == 8 && h.nextSibling; ) h = h.nextSibling;
          i != null && (i[i.indexOf(h)] = null), t.__e = h;
        } else if (i != null) for (g = i.length; g--; ) Je(i[g]);
      } else t.__e = n.__e;
      t.__k == null && (t.__k = n.__k || []), F.then || At(t), q.__e(F, t, n);
    }
  } else i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : h = t.__e = dr(n.__e, t, n, o, d, i, a, f, p);
  return (_ = q.diffed) && _(t), 128 & t.__u ? void 0 : h;
}
function At(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(At));
}
function Mt(e, t, n) {
  for (var o = 0; o < n.length; o++) Qe(n[o], n[++o], n[++o]);
  q.__c && q.__c(t, e), e.some(function(d) {
    try {
      e = d.__h, d.__h = [], e.some(function(i) {
        i.call(d);
      });
    } catch (i) {
      q.__e(i, d.__v);
    }
  });
}
function Pt(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : Ne(e) ? e.map(Pt) : e.constructor !== void 0 ? null : pe({}, e);
}
function dr(e, t, n, o, d, i, a, h, f) {
  var p, _, c, l, v, E, w, z = n.props || Ee, $ = t.props, y = t.type;
  if (y == "svg" ? d = "http://www.w3.org/2000/svg" : y == "math" ? d = "http://www.w3.org/1998/Math/MathML" : d || (d = "http://www.w3.org/1999/xhtml"), i != null) {
    for (p = 0; p < i.length; p++) if ((v = i[p]) && "setAttribute" in v == !!y && (y ? v.localName == y : v.nodeType == 3)) {
      e = v, i[p] = null;
      break;
    }
  }
  if (e == null) {
    if (y == null) return document.createTextNode($);
    e = document.createElementNS(d, y, $.is && $), h && (q.__m && q.__m(t, i), h = !1), i = null;
  }
  if (y == null) z === $ || h && e.data == $ || (e.data = $);
  else {
    if (i = y == "textarea" && $.defaultValue != null ? null : i && Le.call(e.childNodes), !h && i != null) for (z = {}, p = 0; p < e.attributes.length; p++) z[(v = e.attributes[p]).name] = v.value;
    for (p in z) v = z[p], p == "dangerouslySetInnerHTML" ? c = v : p == "children" || p in $ || p == "value" && "defaultValue" in $ || p == "checked" && "defaultChecked" in $ || Se(e, p, null, v, d);
    for (p in $) v = $[p], p == "children" ? l = v : p == "dangerouslySetInnerHTML" ? _ = v : p == "value" ? E = v : p == "checked" ? w = v : h && typeof v != "function" || z[p] === v || Se(e, p, v, z[p], d);
    if (_) h || c && (_.__html == c.__html || _.__html == e.innerHTML) || (e.innerHTML = _.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), It(t.type == "template" ? e.content : e, Ne(l) ? l : [l], t, n, o, y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : d, i, a, i ? i[0] : n.__k && xe(n, 0), h, f), i != null) for (p = i.length; p--; ) Je(i[p]);
    h && y != "textarea" || (p = "value", y == "progress" && E == null ? e.removeAttribute("value") : E != null && (E !== e[p] || y == "progress" && !E || y == "option" && E != z[p]) && Se(e, p, E, z[p], d), p = "checked", w != null && w != e[p] && Se(e, p, w, z[p], d));
  }
  return e;
}
function Qe(e, t, n) {
  try {
    if (typeof e == "function") {
      var o = typeof e.__u == "function";
      o && e.__u(), o && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (d) {
    q.__e(d, n);
  }
}
function jt(e, t, n) {
  var o, d;
  if (q.unmount && q.unmount(e), (o = e.ref) && (o.current && o.current != e.__e || Qe(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (i) {
      q.__e(i, t);
    }
    o.base = o.__P = o.__n = null;
  }
  if (o = e.__k) for (d = 0; d < o.length; d++) o[d] && jt(o[d], t, n || typeof e.type != "function");
  n || Je(e.__e), e.__c = e.__ = e.__e = void 0;
}
function ar(e, t, n) {
  return this.constructor(e, n);
}
function ot(e, t, n) {
  var o, d, i, a;
  t == document && (t = document.documentElement), q.__ && q.__(e, t), d = (o = !1) ? null : t.__k, i = [], a = [], Ge(t, e = t.__k = nr(Re, null, [e]), d || Ee, Ee, t.namespaceURI, d ? null : t.firstChild ? Le.call(t.childNodes) : null, i, d ? d.__e : t.firstChild, o, a), Mt(i, e, a), e.props.children = null;
}
Le = Ae.slice, q = { __e: function(e, t, n, o) {
  for (var d, i, a; t = t.__; ) if ((d = t.__c) && !d.__) try {
    if ((i = d.constructor) && i.getDerivedStateFromError != null && (d.setState(i.getDerivedStateFromError(e)), a = d.__d), d.componentDidCatch != null && (d.componentDidCatch(e, o || {}), a = d.__d), a) return d.__E = d;
  } catch (h) {
    e = h;
  }
  throw e;
} }, St = 0, Ce.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = pe({}, this.state), typeof e == "function" && (e = e(pe({}, n), this.props)), e && pe(n, e), e != null && this.__v && (t && this._sb.push(t), tt(this));
}, Ce.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), tt(this));
}, Ce.prototype.render = Re, ue = [], zt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $t = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Me.__r = 0, Fe = Math.random().toString(8), ze = "__d" + Fe, we = "__a" + Fe, Ct = /(PointerCapture)$|Capture$/i, Ke = 0, Ve = nt(!1), qe = nt(!0);
var lr = 0;
function r(e, t, n, o, d, i) {
  t || (t = {});
  var a, h, f = t;
  if ("ref" in f) for (h in f = {}, t) h == "ref" ? a = t[h] : f[h] = t[h];
  var p = { type: e, props: f, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --lr, __i: -1, __u: 0, __source: d, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (h in a) f[h] === void 0 && (f[h] = a[h]);
  return q.vnode && q.vnode(p), p;
}
var ve, J, Oe, it, Pe = 0, Lt = [], Q = q, st = Q.__b, dt = Q.__r, at = Q.diffed, lt = Q.__c, ct = Q.unmount, pt = Q.__;
function De(e, t) {
  Q.__h && Q.__h(J, e, Pe || t), Pe = 0;
  var n = J.__H || (J.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function P(e) {
  return Pe = 1, cr(Nt, e);
}
function cr(e, t, n) {
  var o = De(ve++, 2);
  if (o.t = e, !o.__c && (o.__ = [Nt(void 0, t), function(h) {
    var f = o.__N ? o.__N[0] : o.__[0], p = o.t(f, h);
    f !== p && (o.__N = [p, o.__[1]], o.__c.setState({}));
  }], o.__c = J, !J.__f)) {
    var d = function(h, f, p) {
      if (!o.__c.__H) return !0;
      var _ = !1, c = o.__c.props !== h;
      if (o.__c.__H.__.some(function(v) {
        if (v.__N) {
          _ = !0;
          var E = v.__[0];
          v.__ = v.__N, v.__N = void 0, E !== v.__[0] && (c = !0);
        }
      }), i) {
        var l = i.call(this, h, f, p);
        return _ ? l || c : l;
      }
      return !_ || c;
    };
    J.__f = !0;
    var i = J.shouldComponentUpdate, a = J.componentWillUpdate;
    J.componentWillUpdate = function(h, f, p) {
      if (this.__e) {
        var _ = i;
        i = void 0, d(h, f, p), i = _;
      }
      a && a.call(this, h, f, p);
    }, J.shouldComponentUpdate = d;
  }
  return o.__N || o.__;
}
function ce(e, t) {
  var n = De(ve++, 3);
  !Q.__s && Ye(n.__H, t) && (n.__ = e, n.u = t, J.__H.__h.push(n));
}
function pr(e, t) {
  var n = De(ve++, 4);
  !Q.__s && Ye(n.__H, t) && (n.__ = e, n.u = t, J.__h.push(n));
}
function ie(e) {
  return Pe = 5, me(function() {
    return { current: e };
  }, []);
}
function me(e, t) {
  var n = De(ve++, 7);
  return Ye(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function hr() {
  for (var e; e = Lt.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(Te), t.__h.some(We), t.__h = [];
    } catch (n) {
      t.__h = [], Q.__e(n, e.__v);
    }
  }
}
Q.__b = function(e) {
  J = null, st && st(e);
}, Q.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), pt && pt(e, t);
}, Q.__r = function(e) {
  dt && dt(e), ve = 0;
  var t = (J = e.__c).__H;
  t && (Oe === J ? (t.__h = [], J.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(Te), t.__h.some(We), t.__h = [], ve = 0)), Oe = J;
}, Q.diffed = function(e) {
  at && at(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Lt.push(t) !== 1 && it === Q.requestAnimationFrame || ((it = Q.requestAnimationFrame) || ur)(hr)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), Oe = J = null;
}, Q.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(Te), n.__h = n.__h.filter(function(o) {
        return !o.__ || We(o);
      });
    } catch (o) {
      t.some(function(d) {
        d.__h && (d.__h = []);
      }), t = [], Q.__e(o, n.__v);
    }
  }), lt && lt(e, t);
}, Q.unmount = function(e) {
  ct && ct(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(o) {
    try {
      Te(o);
    } catch (d) {
      t = d;
    }
  }), n.__H = void 0, t && Q.__e(t, n.__v));
};
var ht = typeof requestAnimationFrame == "function";
function ur(e) {
  var t, n = function() {
    clearTimeout(o), ht && cancelAnimationFrame(t), setTimeout(e);
  }, o = setTimeout(n, 35);
  ht && (t = requestAnimationFrame(n));
}
function Te(e) {
  var t = J, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), J = t;
}
function We(e) {
  var t = J;
  e.__c = e.__(), J = t;
}
function Ye(e, t) {
  return !e || e.length !== t.length || t.some(function(n, o) {
    return n !== e[o];
  });
}
function Nt(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const mr = {
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
function Rt(e) {
  var o;
  const t = ((o = e.name.split(".").pop()) == null ? void 0 : o.toLocaleLowerCase()) ?? "";
  if (e.name.includes(".")) return mr[t] ?? null;
  const n = e.type.split("/", 1)[0];
  return n === "image" || n === "video" || n === "audio" ? n : null;
}
function fr(e) {
  const d = e.replace(/\.[^.]+$/, "").replace(/^\s*\d+\s*[-_. ]+/, "").normalize("NFKC").replace(/[\s-]+/g, "_").replace(/[{}]/g, "").replace(/_+/g, "_").replace(/^[_\.]+|[_\.]+$/g, "").slice(0, 96) || "asset";
  return d.toLocaleLowerCase().endsWith(".audio") ? `${d}_asset` : d;
}
function gr(e, t) {
  const n = new Set(Array.from(t, (d) => d.toLocaleLowerCase()));
  if (!n.has(e.toLocaleLowerCase())) return e;
  let o = 2;
  for (; n.has(`${e}_${o}`.toLocaleLowerCase()); ) o += 1;
  return `${e}_${o}`;
}
function br(e, t, n) {
  const o = e.trim().toLocaleLowerCase();
  return !e.trim() || /[\s{}]/.test(e) || o.endsWith(".audio") ? "invalid" : Array.from(t, (i) => i.toLocaleLowerCase()).includes(o) || Array.from(n, (i) => i.trim().toLocaleLowerCase()).filter((i) => i === o).length > 1 ? "duplicate" : null;
}
function xr(e, t, n) {
  const o = new Set(Array.from(t)), d = [], i = [];
  for (const a of e) {
    const h = Rt(a);
    if (!h) {
      i.push(a.name);
      continue;
    }
    const f = gr(fr(a.name), o);
    o.add(f), d.push({ id: n(), file: a, alias: f, kind: h, durationSeconds: h === "image" ? null : 2, includeVideoAudio: !1, status: "pending", error: "" });
  }
  return { drafts: d, rejected: i };
}
function _r(e, t, n) {
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
function vr(e, t) {
  return t === "image" ? Promise.resolve(null) : new Promise((n) => {
    const o = document.createElement(t === "video" ? "video" : "audio"), d = URL.createObjectURL(e);
    let i = !1;
    const a = (h) => {
      i || (i = !0, o.onloadedmetadata = null, o.onerror = null, o.removeAttribute("src"), o.load(), URL.revokeObjectURL(d), n(h));
    };
    o.preload = "metadata", o.onloadedmetadata = () => a(Number.isFinite(o.duration) && o.duration > 0 ? Math.round(o.duration * 10) / 10 : null), o.onerror = () => a(null), o.src = d;
  });
}
const yr = () => `asset_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`, He = (e, t) => t === "zh" ? { image: "图片", video: "视频", audio: "音频" }[e] : e;
function wr({ language: e, assets: t, projectName: n, onClose: o, onImported: d, uploadFile: i }) {
  const [a, h] = P([]), [f, p] = P([]), [_, c] = P(!1), [l, v] = P(!1), E = ie([]);
  E.current = a;
  const w = t.map((g) => g.alias), z = (g, L) => h((F) => F.map((R) => R.id === g ? { ...R, ...L } : R)), $ = (g) => {
    if (!g.length || l) return;
    const L = [...w, ...E.current.map((R) => R.alias)], F = xr(g, L, yr);
    F.rejected.length && p((R) => [...R, ...F.rejected]), F.drafts.length && (h((R) => [...R, ...F.drafts]), F.drafts.forEach((R) => {
      vr(R.file, R.kind).then((Z) => {
        Z != null && h((ne) => ne.map((u) => u.id === R.id && u.kind === R.kind && u.durationSeconds === 2 ? { ...u, durationSeconds: Z } : u));
      });
    }));
  }, M = a.filter((g) => g.status !== "imported").map((g) => g.alias), b = (g) => {
    if (g.status === "imported") return null;
    const L = br(g.alias, w, M);
    return L === "invalid" ? e === "zh" ? "别名为空、包含空白/花括号，或使用了保留后缀 .audio" : "Alias is empty, contains whitespace/braces, or uses reserved .audio" : L === "duplicate" ? e === "zh" ? "别名与素材库或本批次其他素材重复" : "Alias duplicates an existing or staged asset" : Rt(g.file) !== g.kind ? e === "zh" ? "文件扩展名与所选类型不匹配" : "The extension does not match the selected kind" : g.kind !== "image" && (g.durationSeconds == null || g.durationSeconds <= 0) ? e === "zh" ? "视频或音频时长必须大于 0" : "Video/audio duration must be greater than 0" : null;
  }, I = async () => {
    const L = E.current.filter((ne) => ne.status === "pending" || ne.status === "error");
    if (!L.length) return;
    if (L.some(b)) {
      window.alert(e === "zh" ? "请先修正列表中标红的项目。" : "Fix the highlighted rows before importing.");
      return;
    }
    v(!0);
    const F = Math.max(0, ...t.map((ne) => ne.fixedOrder)) + 1;
    let R = 0;
    const Z = async () => {
      for (; R < L.length; ) {
        const ne = R++, u = L[ne];
        z(u.id, { status: "uploading", error: "" });
        try {
          const T = await i(n, u.kind, u.file);
          d([_r(u, T, F + ne)]), z(u.id, { status: "imported", error: "" });
        } catch (T) {
          z(u.id, { status: "error", error: String(T) });
        }
      }
    };
    await Promise.all(Array.from({ length: Math.min(2, L.length) }, Z)), v(!1);
  }, C = a.filter((g) => g.status === "imported").length, U = a.filter((g) => g.status === "error").length, W = a.length - C;
  return /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-asset-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": e === "zh" ? "批量导入素材" : "Batch import assets", children: [
    /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: e === "zh" ? "批量导入素材" : "Batch import assets" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "可混合选择图片、视频和音频；确认列表后再写入素材库。" : "Select images, videos, and audio together; review before uploading." })
      ] }),
      /* @__PURE__ */ r("button", { disabled: l, "aria-label": e === "zh" ? "关闭" : "Close", onClick: o, children: "×" })
    ] }),
    /* @__PURE__ */ r("label", { class: `td-asset-dropzone ${_ ? "dragging" : ""}`, onDragEnter: (g) => {
      g.preventDefault(), c(!0);
    }, onDragOver: (g) => g.preventDefault(), onDragLeave: (g) => {
      g.currentTarget === g.target && c(!1);
    }, onDrop: (g) => {
      var L;
      g.preventDefault(), c(!1), $(Array.from(((L = g.dataTransfer) == null ? void 0 : L.files) ?? []));
    }, children: [
      /* @__PURE__ */ r("strong", { children: e === "zh" ? "拖拽素材到这里，或点击选择多个文件" : "Drop media here, or click to select multiple files" }),
      /* @__PURE__ */ r("span", { children: e === "zh" ? "支持图片、视频、音频混合导入" : "Mixed image, video, and audio selection is supported" }),
      /* @__PURE__ */ r("input", { type: "file", multiple: !0, accept: "image/*,video/*,audio/*", disabled: l, onChange: (g) => {
        $(Array.from(g.currentTarget.files ?? [])), g.currentTarget.value = "";
      } })
    ] }),
    f.length > 0 && /* @__PURE__ */ r("div", { class: "td-asset-batch-warning", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `已跳过 ${f.length} 个不支持的文件：${f.join("、")}` : `Skipped ${f.length} unsupported files: ${f.join(", ")}` }),
      /* @__PURE__ */ r("button", { onClick: () => p([]), children: "×" })
    ] }),
    /* @__PURE__ */ r("div", { class: "td-asset-batch-summary", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `共 ${a.length} 项 · 已导入 ${C} · 待处理 ${W}${U ? ` · 失败 ${U}` : ""}` : `${a.length} items · ${C} imported · ${W} pending${U ? ` · ${U} failed` : ""}` }),
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
      a.map((g) => {
        const L = b(g), F = l || g.status === "imported" || g.status === "uploading";
        return /* @__PURE__ */ r("div", { class: `td-asset-batch-row ${L || g.status === "error" ? "invalid" : ""} ${g.status === "imported" ? "imported" : ""}`, children: [
          /* @__PURE__ */ r("div", { class: "td-asset-batch-file", children: [
            /* @__PURE__ */ r("strong", { title: g.file.name, children: g.file.name }),
            /* @__PURE__ */ r("small", { children: [
              (g.file.size / 1024 / 1024).toFixed(1),
              " MB · ",
              g.status === "pending" ? e === "zh" ? "待导入" : "Pending" : g.status === "uploading" ? e === "zh" ? "上传中" : "Uploading" : g.status === "imported" ? e === "zh" ? "已完成" : "Imported" : e === "zh" ? "失败" : "Failed"
            ] }),
            (L || g.error) && /* @__PURE__ */ r("em", { title: L || g.error, children: L || g.error })
          ] }),
          /* @__PURE__ */ r("input", { disabled: F, value: g.alias, onInput: (R) => z(g.id, { alias: R.currentTarget.value, status: "pending", error: "" }) }),
          /* @__PURE__ */ r("select", { disabled: F, value: g.kind, onChange: (R) => {
            const Z = R.currentTarget.value;
            z(g.id, { kind: Z, durationSeconds: Z === "image" ? null : g.durationSeconds ?? 2, includeVideoAudio: Z === "video" && g.includeVideoAudio, status: "pending", error: "" });
          }, children: [
            /* @__PURE__ */ r("option", { value: "image", children: He("image", e) }),
            /* @__PURE__ */ r("option", { value: "video", children: He("video", e) }),
            /* @__PURE__ */ r("option", { value: "audio", children: He("audio", e) })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", disabled: F || g.kind === "image", value: g.durationSeconds ?? "", onInput: (R) => z(g.id, { durationSeconds: R.currentTarget.value ? Number(R.currentTarget.value) : null, status: "pending", error: "" }) }),
            /* @__PURE__ */ r("span", { children: g.kind === "image" ? "—" : e === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-audio", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", disabled: F || g.kind !== "video", checked: g.kind === "video" && g.includeVideoAudio, onChange: (R) => z(g.id, { includeVideoAudio: R.currentTarget.checked }) }),
            /* @__PURE__ */ r("span", { children: g.kind === "video" ? g.includeVideoAudio ? e === "zh" ? "开" : "ON" : e === "zh" ? "关" : "OFF" : "—" })
          ] }),
          /* @__PURE__ */ r("button", { class: "danger", disabled: F, onClick: () => h((R) => R.filter((Z) => Z.id !== g.id)), children: e === "zh" ? "移除" : "Remove" })
        ] }, g.id);
      })
    ] }),
    /* @__PURE__ */ r("footer", { children: [
      /* @__PURE__ */ r("button", { disabled: l, onClick: o, children: e === "zh" ? "关闭" : "Close" }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: l || !a.some((g) => g.status === "pending" || g.status === "error"), onClick: () => void I(), children: l ? e === "zh" ? "正在导入…" : "Importing…" : U ? e === "zh" ? "重试失败项" : "Retry failed" : e === "zh" ? "开始导入" : "Start import" })
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
function Dt(e) {
  return se(e, "input");
}
function de(e) {
  return e.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function ut({ asset: e, compact: t = !1 }) {
  const n = Dt(e.path), o = `td-media-preview ${t ? "compact" : ""}`;
  return n ? e.kind === "image" ? /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("img", { src: n, alt: e.alias, loading: "lazy" }) }) : e.kind === "video" ? /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("video", { src: n, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("audio", { src: n, controls: !0, preload: "metadata" }) }) : e.path ? /* @__PURE__ */ r("div", { class: `${o} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ r("div", { class: `${o} empty`, children: "尚未选择素材 / No media selected" });
}
function kr(e, t) {
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
function zr(e, t, n) {
  const o = `{{ref:${n}}}`;
  return {
    value: `${e.slice(0, t.start)}${o}${e.slice(t.end)}`,
    caret: t.start + o.length
  };
}
const Ut = String.raw`\{\{ref:([^{}]+)}}`;
function mt() {
  return new RegExp(Ut, "g");
}
function Ft(e, t) {
  return e.assets.filter((n) => n.enabled && n.path.trim() && (!(n.shotIds ?? []).length || (n.shotIds ?? []).includes(t.id)) && !(t.disabledAssetIds ?? []).includes(n.id));
}
function Ot(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const o of Ft(e, t)) n.set(o.alias, o);
  return n;
}
function Ht(e, t, n) {
  const o = n.trim(), d = o.endsWith(".audio"), i = d ? o.slice(0, -6) : o, a = Ot(e, t).get(i);
  return a ? !d || a.kind === "video" && a.includeVideoAudio : !1;
}
function ft(e, t) {
  const n = e.shots.filter((o) => o.enabled);
  return n.length > 0 && n.every((o) => Ht(e, o, t));
}
function Bt(e, t) {
  const n = [], o = Ot(e, t), d = [e.promptPrefix, t.prompt, e.promptSuffix].filter(Boolean).join(`
`), i = [...d.matchAll(mt())].map((b) => b[1].trim()), a = [], h = /* @__PURE__ */ new Set(), f = (b) => {
    h.has(b.id) || (h.add(b.id), a.push(b));
  };
  [...o.values()].filter((b) => b.fixed).sort((b, I) => b.fixedOrder - I.fixedOrder || b.alias.localeCompare(I.alias)).forEach(f);
  for (const b of i) {
    const I = b.endsWith(".audio") ? b.slice(0, -6) : b, C = o.get(I);
    if (!C) {
      n.push(`未找到或已禁用素材：${b}`);
      continue;
    }
    b.endsWith(".audio") && (C.kind !== "video" || !C.includeVideoAudio) && n.push(`视频伴音未启用：${b}`), f(C);
  }
  const p = a.filter((b) => b.kind === "image"), _ = a.filter((b) => b.kind === "video"), c = _.filter((b) => b.includeVideoAudio), l = a.filter((b) => b.kind === "audio"), v = c.length + l.length, E = p.length + _.length + l.length;
  p.length > 9 && n.push(`参考图 ${p.length}/9，超出 H3 上限`), _.length > 3 && n.push(`参考视频 ${_.length}/3，超出 H3 上限`), v > 3 && n.push(`有效音频 ${v}/3，超出 H3 总上限`), E > 12 && n.push(`混合文件 ${E}/12，超出 H3 上限`), v && !p.length && !_.length && n.push("音频参考不能单独使用");
  const w = _.filter((b) => typeof b.durationSeconds == "number");
  for (const b of _) (b.durationSeconds == null || b.durationSeconds < 2 || b.durationSeconds > 15) && n.push(`视频 ${b.alias} 的时长必须为 2–15 秒`);
  w.reduce((b, I) => b + (I.durationSeconds ?? 0), 0) > 15 && n.push("参考视频总时长超过 15 秒");
  const z = [...c.map((b) => b.audioDurationSeconds ?? b.durationSeconds), ...l.map((b) => b.durationSeconds)];
  z.some((b) => b == null || b < 2 || b > 15) && n.push("每路有效音频时长必须为 2–15 秒"), z.reduce((b, I) => b + (I ?? 0), 0) > 15 && n.push("有效音频总时长超过 15 秒");
  const $ = /* @__PURE__ */ new Map();
  p.forEach((b, I) => $.set(b.alias, `<Picture ${I + 1}>`)), _.forEach((b, I) => $.set(b.alias, `<Video ${I + 1}>`)), c.forEach((b, I) => $.set(`${b.alias}.audio`, `<Audio ${I + 1}>`)), l.forEach((b, I) => $.set(b.alias, `<Audio ${c.length + I + 1}>`));
  const y = d.replace(mt(), (b, I) => $.get(I.trim()) ?? b), M = [...$.entries()].map(([b, I]) => ({ label: I, alias: b, kind: I.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: y, errors: n, slots: M, mixedFiles: E, audioCount: v };
}
function $r(e) {
  var i, a, h, f, p, _;
  const t = [], n = /* @__PURE__ */ new Set(["off", "super_resolution_second_pass", "latent_upscale_second_pass", "super_resolution_only"]);
  (a = (i = e.project) == null ? void 0 : i.name) != null && a.trim() || t.push("Project name 不能为空"), (f = (h = e.project) == null ? void 0 : h.runId) != null && f.trim() || t.push("Run ID 不能为空"), (!Array.isArray(e.shots) || !e.shots.some((c) => c.enabled)) && t.push("至少需要一个启用分镜");
  const o = /* @__PURE__ */ new Set();
  for (const c of e.shots ?? [])
    (!((p = c.id) != null && p.trim()) || o.has(c.id)) && t.push(`分镜 ID 为空或重复：${c.id || "(空)"}`), o.add(c.id), c.durationSeconds > 0 || t.push(`分镜 ${c.id} 的时长必须大于 0`), n.has(c.secondSamplingMode) || t.push(`分镜 ${c.id} 的高清处理模式无效`);
  const d = /* @__PURE__ */ new Set();
  for (const c of e.assets ?? []) {
    const l = (_ = c.alias) == null ? void 0 : _.toLocaleLowerCase();
    (!c.alias || /[\s{}]/.test(c.alias) || c.alias.endsWith(".audio") || d.has(l)) && t.push(`素材别名无效或重复：${c.alias || "(空)"}`), d.add(l), c.enabled && !c.path && t.push(`素材 ${c.alias} 尚未选择文件`);
  }
  for (const c of e.shots.filter((l) => l.enabled)) t.push(...Bt(e, c).errors.map((l) => `${c.title}: ${l}`));
  return [...new Set(t)];
}
function Cr(e, t) {
  const n = [], o = new RegExp(Ut, "g");
  let d = 0;
  for (const i of e.matchAll(o)) {
    const a = i.index ?? 0;
    a > d && n.push({ text: e.slice(d, a), reference: !1 }), n.push({ text: i[0], reference: !0, valid: t(i[1]) }), d = a + i[0].length;
  }
  return d < e.length && n.push({ text: e.slice(d), reference: !1 }), n;
}
const Tr = [
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
function Ir(e, t) {
  const n = window.getComputedStyle(e), o = e.getBoundingClientRect(), d = document.createElement("div");
  d.setAttribute("aria-hidden", "true"), d.style.position = "fixed", d.style.visibility = "hidden", d.style.pointerEvents = "none", d.style.left = `${o.left}px`, d.style.top = `${o.top}px`, d.style.width = `${e.offsetWidth}px`, d.style.height = `${e.offsetHeight}px`, d.style.overflow = "hidden", d.style.whiteSpace = "pre-wrap";
  for (const f of Tr) d.style[f] = n[f];
  d.append(document.createTextNode(e.value.slice(0, t)));
  const i = document.createElement("span");
  i.textContent = "​", d.append(i), document.body.append(d), d.scrollTop = e.scrollTop, d.scrollLeft = e.scrollLeft;
  const a = i.getBoundingClientRect(), h = Number.parseFloat(n.lineHeight) || Number.parseFloat(n.fontSize) * 1.45 || 20;
  return d.remove(), { left: a.left, top: a.top, bottom: a.top + h };
}
const Er = {
  zh: { image: "图片", video: "视频", audio: "音频" },
  en: { image: "Image", video: "Video", audio: "Audio" }
};
function Be({ value: e, rows: t, onInput: n, isReferenceValid: o, mentionAssets: d, mentionLanguage: i = "zh" }) {
  const a = ie(null), h = ie(null), f = ie(null), p = ie(null), _ = ie(!1), c = ie(!1), l = ie([]), v = ie([]), E = ie(`td-reference-mention-${Math.random().toString(36).slice(2)}`).current, [w, z] = P(null), [$, y] = P(0), [M, b] = P(null), I = Cr(e, o), C = me(
    () => w && d ? Sr(d, w.query) : [],
    [w, d]
  ), U = () => {
    z(null), b(null), y(0);
  }, W = (u) => {
    if (!d || u.selectionStart !== u.selectionEnd) {
      U();
      return;
    }
    const T = kr(u.value, u.selectionStart);
    if (!T) {
      U();
      return;
    }
    z((j) => j && j.start === T.start && j.end === T.end && j.query === T.query ? j : T);
  }, g = () => {
    var fe;
    if (!w || !f.current) return;
    const u = Ir(f.current, w.end), T = 8, j = Math.min(390, Math.max(240, window.innerWidth - T * 2)), G = Math.min(320, Math.max(150, window.innerHeight - T * 2)), B = Math.min(((fe = p.current) == null ? void 0 : fe.offsetHeight) || G, G), O = Math.min(Math.max(u.left, T), window.innerWidth - j - T), re = u.bottom + 6 + B > window.innerHeight - T && u.top - B - 6 >= T ? u.top - B - 6 : Math.min(u.bottom + 6, window.innerHeight - B - T);
    b((ae) => ae && ae.left === O && ae.top === re && ae.width === j && ae.maxHeight === G ? ae : { left: O, top: re, width: j, maxHeight: G });
  };
  pr(g, [w, C.length, !!M]), ce(() => {
    if (!w) return;
    const u = () => g(), T = (j) => {
      var G, B;
      j.target instanceof Node && ((G = a.current) != null && G.contains(j.target) || (B = p.current) != null && B.contains(j.target)) || U();
    };
    return window.addEventListener("resize", u), document.addEventListener("scroll", u, !0), document.addEventListener("mousedown", T), () => {
      window.removeEventListener("resize", u), document.removeEventListener("scroll", u, !0), document.removeEventListener("mousedown", T);
    };
  }, [w]), ce(() => y(0), [w == null ? void 0 : w.query]), ce(() => {
    $ >= C.length && y(Math.max(0, C.length - 1));
  }, [$, C.length]), ce(() => {
    var u, T;
    (T = (u = p.current) == null ? void 0 : u.querySelector('[aria-selected="true"]')) == null || T.scrollIntoView({ block: "nearest" });
  }, [$, C.length]);
  const L = (u) => {
    h.current && (h.current.scrollTop = u.currentTarget.scrollTop, h.current.scrollLeft = u.currentTarget.scrollLeft), w && g();
  }, F = (u, T) => {
    if (!f.current) return;
    const j = f.current;
    c.current = !0, j.value = u, j.dispatchEvent(new Event("input", { bubbles: !0 })), c.current = !1, U(), window.requestAnimationFrame(() => {
      j.focus({ preventScroll: !0 }), j.setSelectionRange(T, T);
    });
  }, R = (u) => {
    if (!(u.ctrlKey || u.metaKey) || u.altKey) return !1;
    const T = u.key.toLocaleLowerCase(), j = T === "y" || T === "z" && u.shiftKey;
    if (!(T === "z" && !u.shiftKey) && !j) return !1;
    const B = j ? v.current : l.current, O = B[B.length - 1], ee = j ? O == null ? void 0 : O.beforeValue : O == null ? void 0 : O.afterValue;
    return !O || u.currentTarget.value !== ee ? !1 : (u.preventDefault(), B.pop(), (j ? l.current : v.current).push(O), F(j ? O.afterValue : O.beforeValue, j ? O.afterCaret : O.beforeCaret), !0);
  }, Z = (u) => {
    if (!w || !f.current) return;
    const T = f.current, j = zr(T.value, w, u.alias), G = `{{ref:${u.alias}}}`, B = {
      beforeValue: T.value,
      afterValue: j.value,
      beforeCaret: w.end,
      afterCaret: j.caret
    };
    T.focus({ preventScroll: !0 }), T.setSelectionRange(w.start, w.end);
    let O = !1;
    try {
      document.execCommand("insertText", !1, G), O = T.value === j.value;
    } catch {
    }
    O || (T.value = j.value, T.dispatchEvent(new Event("input", { bubbles: !0 }))), l.current.push(B), l.current.length > 100 && l.current.shift(), v.current = [], U(), window.requestAnimationFrame(() => {
      var ee, re;
      (ee = f.current) == null || ee.focus({ preventScroll: !0 }), (re = f.current) == null || re.setSelectionRange(j.caret, j.caret);
    });
  }, ne = (u) => {
    if (!(u.isComposing || _.current) && !R(u) && w) {
      if (u.key === "Escape") {
        u.preventDefault(), U();
        return;
      }
      if (C.length) {
        if (u.key === "ArrowDown" || u.key === "ArrowUp") {
          u.preventDefault();
          const T = u.key === "ArrowDown" ? 1 : -1;
          y((j) => (j + T + C.length) % C.length);
          return;
        }
        (u.key === "Enter" || u.key === "Tab") && (u.preventDefault(), Z(C[$] ?? C[0]));
      }
    }
  };
  return /* @__PURE__ */ r("span", { ref: a, class: "td-highlight-textarea", children: [
    /* @__PURE__ */ r("pre", { ref: h, class: "td-highlight-backdrop", "aria-hidden": "true", children: [
      I.map((u, T) => u.reference ? /* @__PURE__ */ r("mark", { class: u.valid ? "valid" : "invalid", children: u.text }, T) : u.text),
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
        "aria-controls": w ? E : void 0,
        "aria-expanded": d ? !!w : void 0,
        "aria-activedescendant": w && C[$] ? `${E}-${C[$].id}` : void 0,
        onInput: (u) => {
          n(u);
          const T = u instanceof InputEvent ? u.inputType : "";
          !c.current && T !== "historyUndo" && T !== "historyRedo" && (v.current = []), _.current || W(u.currentTarget);
        },
        onClick: (u) => W(u.currentTarget),
        onSelect: (u) => {
          _.current || W(u.currentTarget);
        },
        onKeyDown: ne,
        onKeyUp: (u) => {
          !_.current && !["ArrowDown", "ArrowUp", "Enter", "Tab", "Escape"].includes(u.key) && W(u.currentTarget);
        },
        onCompositionStart: () => {
          _.current = !0;
        },
        onCompositionEnd: (u) => {
          _.current = !1, W(u.currentTarget);
        },
        onBlur: () => window.setTimeout(() => {
          document.activeElement !== f.current && U();
        }, 0),
        onScroll: L
      }
    ),
    w && M && /* @__PURE__ */ r(
      "div",
      {
        ref: p,
        id: E,
        class: "td-reference-mention-menu",
        role: "listbox",
        "aria-label": i === "zh" ? "选择参考素材" : "Choose reference media",
        style: { left: M.left, top: M.top, width: M.width, maxHeight: M.maxHeight },
        onMouseDown: (u) => u.preventDefault(),
        children: [
          /* @__PURE__ */ r("header", { children: [
            /* @__PURE__ */ r("strong", { children: i === "zh" ? "@ 参考素材" : "@ Reference media" }),
            /* @__PURE__ */ r("span", { children: C.length })
          ] }),
          C.length ? /* @__PURE__ */ r("div", { class: "td-reference-mention-options", children: C.map((u, T) => {
            const j = u.kind === "image" ? Dt(u.path) : null, G = de(u.path);
            return /* @__PURE__ */ r(
              "button",
              {
                id: `${E}-${u.id}`,
                type: "button",
                role: "option",
                "aria-selected": T === $,
                class: T === $ ? "active" : "",
                onMouseEnter: () => y(T),
                onClick: () => Z(u),
                children: [
                  /* @__PURE__ */ r("span", { class: `td-reference-mention-thumb ${u.kind}`, children: j ? /* @__PURE__ */ r("img", { src: j, alt: "", loading: "lazy" }) : /* @__PURE__ */ r("span", { children: u.kind === "image" ? "▧" : u.kind === "video" ? "▶" : "♫" }) }),
                  /* @__PURE__ */ r("span", { class: "td-reference-mention-copy", children: [
                    /* @__PURE__ */ r("strong", { children: u.alias }),
                    /* @__PURE__ */ r("small", { children: G || u.path })
                  ] }),
                  /* @__PURE__ */ r("em", { children: Er[i][u.kind] })
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
const Ar = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", postprocess: "后处理", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", postprocess: "Post-process", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function ge(e, t) {
  return Ar[e][t];
}
function be(e) {
  return (Array.isArray(e.results) && e.results.length ? e.results : e.path ? [{ path: e.path, bytes: e.bytes, modifiedAt: e.modifiedAt, stage: e.stage, processingMode: e.processingMode, sourcePath: e.sourcePath, completedAt: e.completedAt }] : []).filter((n) => typeof n.path == "string" && n.path.trim().length > 0).sort((n, o) => (o.modifiedAt ?? 0) - (n.modifiedAt ?? 0));
}
function Vt(e, t) {
  const n = /_video_(\d+)/i.exec(e.replace(/\\/g, "/"));
  return n ? Number(n[1]) : t;
}
function Mr(e, t) {
  return e.stage === "second_pass" && t !== "super_resolution_only" ? "second_pass_requires_upscale_only" : e.stage === "upscaled" ? "upscaled_is_terminal" : null;
}
function Pr(e, t) {
  return Mr(e, t) === null;
}
function jr(e) {
  return ["super_resolution_second_pass", "latent_upscale_second_pass", "super_resolution_only"].filter((n) => Pr(e, n));
}
function je({ src: e, alt: t }) {
  const n = ie(null), [o, d] = P(!1);
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
function qt(e) {
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
function Lr(e, t, n) {
  return e.filter((o) => o.shot.enabled && t[o.key]).map((o) => ({
    shotId: o.shot.id,
    activeIndex: o.activeIndex,
    path: n[o.key] ?? ""
  }));
}
function Nr(e, t, n) {
  const o = {};
  return e.forEach((d) => {
    const i = d.sourceIndex + 1;
    o[d.key] = d.shot.enabled && i >= t && i <= n;
  }), o;
}
function Rr(e, t, n) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId, shotId: t, activeIndex: String(n) }).toString()}`;
}
function Dr(e, t, n) {
  return t === "latent_upscale_second_pass" ? n === "zh" ? "Latent 放大二采" : "Latent upscale 2nd pass" : t === "super_resolution_second_pass" || e === "second_pass" ? n === "zh" ? "超分二采" : "Super-res 2nd pass" : t === "super_resolution_only" || e === "upscaled" ? n === "zh" ? "只超分" : "Super-res only" : e === "first_pass" ? n === "zh" ? "一采" : "1st pass" : n === "zh" ? "旧结果" : "Legacy";
}
function Ur(e, t) {
  return e === "latent_upscale_second_pass" ? t === "zh" ? "Latent 放大二采" : "Latent upscale 2nd pass" : e === "super_resolution_only" ? t === "zh" ? "只超分" : "Super-res only" : t === "zh" ? "超分二采" : "Super-res 2nd pass";
}
function Fr({ plan: e, language: t, queueSecondPass: n }) {
  const o = me(() => qt(e), [e]), [d, i] = P({}), [a, h] = P({}), [f, p] = P(null), [_, c] = P(0), [l, v] = P({});
  ce(() => {
    let w = !1;
    const z = {};
    return o.forEach(($) => {
      z[$.key] = { loading: !0, response: { found: !1, results: [] } };
    }), i(z), o.forEach(($) => {
      fetch(Rr(e, $.shot.id, $.activeIndex)).then(async (y) => {
        const M = await y.json();
        if (!y.ok) throw new Error(M.error || `HTTP ${y.status}`);
        w || i((b) => ({ ...b, [$.key]: { loading: !1, response: M } }));
      }).catch((y) => {
        w || i((M) => ({ ...M, [$.key]: { loading: !1, response: { found: !1, results: [], error: String(y) } } }));
      });
    }), () => {
      w = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((w) => w.id).join("|"), _]);
  const E = async (w, z, $) => {
    if (!n) return;
    const y = `${z}:${$}`;
    h((M) => ({ ...M, [y]: { state: "queued" } }));
    try {
      await n({
        plan: e,
        shotId: w,
        sourcePath: z,
        requestId: `td2_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`,
        processingMode: $
      }), h((M) => ({ ...M, [y]: { state: "done" } })), c((M) => M + 1);
    } catch (M) {
      h((b) => ({ ...b, [y]: { state: "error", message: String(M instanceof Error ? M.message : M) } }));
    }
  };
  return /* @__PURE__ */ r("section", { class: "td-postprocess td-second-pass-panel", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "单独二采" : "Standalone processing" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "对满意结果执行所选高清处理；二采结果只能继续只超分，不重跑一采或启动 Impact 循环。" : "Process a selected result; second-pass outputs may only continue with Super-res only, without rerunning the first pass or Impact loop." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: /* @__PURE__ */ r("button", { onClick: () => c((w) => w + 1), children: [
        "↻ ",
        t === "zh" ? "刷新结果" : "Refresh"
      ] }) })
    ] }),
    !n && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "当前工作流缺少后处理二采支流，请重新载入仓库中的 V7 导播台示例工作流。" : "This workflow does not contain the standalone second-pass branch. Reload the V7 example workflow from the repository." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: o.map((w) => {
      const z = d[w.key], $ = be((z == null ? void 0 : z.response) ?? { results: [] });
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
        z != null && z.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading results…" }) : z != null && z.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : $.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: $.map((y) => {
          const M = se(y.path, "output"), b = jr(y), I = b.includes(l[y.path]) ? l[y.path] : b[0], C = I ? a[`${y.path}:${I}`] : void 0;
          return /* @__PURE__ */ r("div", { class: "td-second-pass-result", children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", onClick: () => M && p({ path: y.path, title: `${w.shot.id} · ${w.shot.title}` }), children: [
              M ? /* @__PURE__ */ r(je, { src: M, alt: de(y.path) }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  Dr(y.stage, y.processingMode, t),
                  (y.stage === "legacy_unknown" || !y.stage) && /* @__PURE__ */ r("em", { children: t === "zh" ? "兼容" : "Compatible" })
                ] }),
                /* @__PURE__ */ r("span", { title: y.path, children: de(y.path) }),
                /* @__PURE__ */ r("small", { children: y.bytes ? `${(y.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-second-pass-actions", children: [
              I ? /* @__PURE__ */ r("select", { "aria-label": t === "zh" ? "该视频可用的处理方式" : "Available processing modes for this video", value: I, onChange: (U) => v((W) => ({ ...W, [y.path]: U.currentTarget.value })), children: b.map((U) => /* @__PURE__ */ r("option", { value: U, children: Ur(U, t) })) }) : /* @__PURE__ */ r("span", { class: "td-second-pass-terminal", children: t === "zh" ? "只超分后不可再处理" : "Upscaled: no further processing" }),
              /* @__PURE__ */ r("button", { class: "primary td-second-pass-run", disabled: !n || !I || (C == null ? void 0 : C.state) === "queued", onClick: () => I && void E(w.shot.id, y.path, I), children: (C == null ? void 0 : C.state) === "queued" ? t === "zh" ? "排队/执行中…" : "Queued/running…" : (C == null ? void 0 : C.state) === "done" ? t === "zh" ? "处理完成" : "Completed" : t === "zh" ? "开始处理" : "Process" })
            ] }),
            (C == null ? void 0 : C.state) === "error" && /* @__PURE__ */ r("div", { class: "td-second-pass-error", children: C.message })
          ] }, y.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "没有可用的生成结果" : "No generated result available" })
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
async function gt(e) {
  const t = await fetch(e), n = await t.json();
  if (!t.ok) throw new Error(n.error || `HTTP ${t.status}`);
  return n;
}
function Or(e, t, n) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t,
    activeIndex: String(n)
  }).toString()}`;
}
function Hr(e) {
  return `/theodore-director/v1/postprocess/merged-videos?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId }).toString()}`;
}
function Br({ plan: e, language: t, queueSecondPass: n }) {
  const [o, d] = P("merge");
  return /* @__PURE__ */ r("section", { class: "td-postprocess-shell", children: [
    /* @__PURE__ */ r("div", { class: "td-post-mode-tabs", role: "tablist", children: [
      /* @__PURE__ */ r("button", { class: o === "merge" ? "active" : "", role: "tab", "aria-selected": o === "merge", onClick: () => d("merge"), children: t === "zh" ? "合并视频" : "Merge videos" }),
      /* @__PURE__ */ r("button", { class: o === "second-pass" ? "active" : "", role: "tab", "aria-selected": o === "second-pass", onClick: () => d("second-pass"), children: t === "zh" ? "单独二采" : "Standalone second pass" })
    ] }),
    o === "merge" ? /* @__PURE__ */ r(Vr, { plan: e, language: t }) : /* @__PURE__ */ r(Fr, { plan: e, language: t, queueSecondPass: n })
  ] });
}
function Vr({ plan: e, language: t }) {
  const n = me(() => qt(e), [e]), [o, d] = P({}), [i, a] = P({}), [h, f] = P({}), [p, _] = P(null), [c, l] = P(!1), [v, E] = P(""), [w, z] = P(""), [$, y] = P({ found: !1, results: [] }), [M, b] = P(!1), [I, C] = P(!1), [U, W] = P(""), [g, L] = P(0), [F, R] = P("1"), [Z, ne] = P(String(n.length || 1)), u = n.filter((x) => x.shot.enabled), T = u.length > 0 && u.every((x) => i[x.key]), j = Lr(n, i, h), G = j.filter((x) => !x.path), B = n.some((x) => {
    var k;
    return i[x.key] && ((k = o[x.key]) == null ? void 0 : k.loading);
  }), O = n.reduce(
    (x, k) => x + (k.shot.enabled && i[k.key] ? k.shot.durationSeconds : 0),
    0
  ), ee = me(() => be($), [$]), re = ee.find((x) => x.path === U) ?? ee[0];
  ce(() => {
    let x = !1;
    const k = {}, N = {};
    return n.forEach((K) => {
      k[K.key] = K.shot.enabled, N[K.key] = { loading: !0, response: { found: !1, results: [] } };
    }), a((K) => {
      const V = {};
      return n.forEach((Y) => {
        V[Y.key] = Y.shot.enabled ? K[Y.key] ?? k[Y.key] : !1;
      }), V;
    }), d(N), E(""), n.forEach((K) => {
      gt(Or(e, K.shot.id, K.activeIndex)).then((V) => {
        if (x) return;
        const Y = be(V);
        d((X) => ({ ...X, [K.key]: { loading: !1, response: V } })), f((X) => {
          var te;
          return {
            ...X,
            [K.key]: Y.some((he) => he.path === X[K.key]) ? X[K.key] : ((te = Y[0]) == null ? void 0 : te.path) ?? ""
          };
        });
      }).catch((V) => {
        x || d((Y) => ({
          ...Y,
          [K.key]: { loading: !1, response: { found: !1, results: [], error: String(V) } }
        }));
      });
    }), () => {
      x = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((x) => `${x.id}:${x.enabled}`).join("|"), g]), ce(() => {
    let x = !1;
    return b(!0), gt(Hr(e)).then((k) => {
      if (x) return;
      const N = be(k);
      y(k), W((K) => {
        var V;
        return N.some((Y) => Y.path === K) ? K : ((V = N[0]) == null ? void 0 : V.path) ?? "";
      });
    }).catch((k) => {
      x || y({ found: !1, results: [], error: String(k) });
    }).finally(() => {
      x || b(!1);
    }), () => {
      x = !0;
    };
  }, [e.project.name, e.project.runId, g]);
  const fe = () => {
    const x = !T;
    a((k) => {
      const N = { ...k };
      return u.forEach((K) => {
        N[K.key] = x;
      }), N;
    });
  }, ae = () => {
    const x = Number(F), k = Number(Z);
    if (!Number.isInteger(x) || !Number.isInteger(k) || x < 1 || k < x || k > n.length) {
      window.alert(t === "zh" ? `请输入有效范围：1 ≤ m ≤ n ≤ ${n.length}` : `Enter a valid range: 1 ≤ m ≤ n ≤ ${n.length}`);
      return;
    }
    a(Nr(n, x, k));
  }, ke = async () => {
    if (!j.length) {
      window.alert(t === "zh" ? "请至少选择一个镜头" : "Select at least one shot.");
      return;
    }
    if (G.length) {
      window.alert(t === "zh" ? `以下已选镜头没有可用结果：${G.map((x) => x.shotId).join("、")}` : `Selected shots without a result: ${G.map((x) => x.shotId).join(", ")}`);
      return;
    }
    l(!0), E("");
    try {
      const x = await fetch("/theodore-director/v1/postprocess/merge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId, selections: j })
      }), k = await x.json();
      if (!x.ok) throw new Error(k.error || `HTTP ${x.status}`);
      L((N) => N + 1);
    } catch (x) {
      E(String(x instanceof Error ? x.message : x));
    } finally {
      l(!1);
    }
  }, Ue = async () => {
    C(!0), z("");
    try {
      const x = await fetch("/theodore-director/v1/postprocess/open-folder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId })
      }), k = await x.json();
      if (!x.ok) throw new Error(k.error || `HTTP ${x.status}`);
    } catch (x) {
      z(String(x instanceof Error ? x.message : x));
    } finally {
      C(!1);
    }
  }, ye = re != null && re.path ? se(re.path, "output") : null;
  return /* @__PURE__ */ r("section", { class: "td-postprocess", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并视频" : "Merge videos" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "从每个镜头选择一个结果，按当前分镜顺序进行无损合并。" : "Choose one result per shot and merge them losslessly in storyboard order." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: [
        /* @__PURE__ */ r("button", { disabled: I, onClick: Ue, children: [
          "📁 ",
          I ? t === "zh" ? "正在打开…" : "Opening…" : t === "zh" ? "打开结果文件夹" : "Open results folder"
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => L((x) => x + 1), children: [
          "↻ ",
          t === "zh" ? "刷新结果" : "Refresh"
        ] }),
        /* @__PURE__ */ r("button", { onClick: fe, children: T ? t === "zh" ? "全部取消" : "Clear all" : t === "zh" ? "一键全选" : "Select all" })
      ] })
    ] }),
    w && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "打开结果文件夹失败：" : "Unable to open results folder: ",
      w
    ] }),
    /* @__PURE__ */ r("div", { class: "td-post-summary", children: [
      /* @__PURE__ */ r("span", { children: t === "zh" ? `已选择 ${j.length}/${u.length} 个启用镜头` : `${j.length}/${u.length} enabled shots selected` }),
      /* @__PURE__ */ r("span", { children: t === "zh" ? `预计时长 ${O.toFixed(1)} 秒` : `Estimated duration ${O.toFixed(1)} sec` }),
      /* @__PURE__ */ r("div", { class: "td-post-range", role: "group", "aria-label": t === "zh" ? "合并视频范围" : "Merge video range", children: [
        /* @__PURE__ */ r("span", { children: t === "zh" ? "范围" : "Range" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: n.length, step: "1", value: F, "aria-label": t === "zh" ? "起始镜头 m" : "Start shot m", onInput: (x) => R(x.currentTarget.value) }),
        /* @__PURE__ */ r("span", { children: "—" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: n.length, step: "1", value: Z, "aria-label": t === "zh" ? "结束镜头 n" : "End shot n", onInput: (x) => ne(x.currentTarget.value) }),
        /* @__PURE__ */ r("button", { disabled: !n.length, onClick: ae, children: t === "zh" ? "确认范围" : "Apply range" })
      ] }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: c || B || !j.length || !!G.length, onClick: ke, children: c ? t === "zh" ? "正在合并…" : "Merging…" : t === "zh" ? "合并所选视频" : "Merge selected videos" })
    ] }),
    v && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "合并失败：" : "Merge failed: ",
      v
    ] }),
    G.length > 0 && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "已选镜头中存在尚未生成视频的镜头。" : "Some selected shots do not have generated videos yet." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: n.map((x) => {
      const k = o[x.key], N = be((k == null ? void 0 : k.response) ?? { results: [] }), K = !!i[x.key];
      return /* @__PURE__ */ r("article", { class: `td-post-shot ${K ? "selected" : ""} ${x.shot.enabled ? "" : "disabled"}`, children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: K, disabled: !x.shot.enabled, onChange: (V) => a((Y) => ({ ...Y, [x.key]: V.currentTarget.checked })) }),
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("strong", { children: x.shot.id }),
              /* @__PURE__ */ r("em", { children: x.shot.title })
            ] })
          ] }),
          /* @__PURE__ */ r("span", { children: [
            x.shot.durationSeconds,
            "s"
          ] })
        ] }),
        !x.shot.enabled && /* @__PURE__ */ r("div", { class: "td-post-shot-disabled-note", children: t === "zh" ? "该镜头当前已禁用：历史结果可以预览，但不能参加合并。" : "This shot is disabled: historical results can be previewed but cannot be merged." }),
        k != null && k.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading generated results…" }) : k != null && k.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : N.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: N.map((V, Y) => {
          const X = se(V.path, "output"), te = h[x.key] === V.path, he = Vt(V.path, N.length - Y);
          return /* @__PURE__ */ r("div", { class: `td-post-result ${te ? "selected" : ""}`, children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", role: "radio", "aria-checked": te, onClick: () => f((D) => ({ ...D, [x.key]: V.path })), children: [
              X ? /* @__PURE__ */ r(je, { src: X, alt: `${x.shot.title} ${t === "zh" ? "结果" : "result"} ${he}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  t === "zh" ? `结果 ${he}` : `Result ${he}`,
                  Y === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
                ] }),
                /* @__PURE__ */ r("span", { title: V.path, children: de(V.path) }),
                /* @__PURE__ */ r("small", { children: V.bytes ? `${(V.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "td-post-result-play", disabled: !X, title: t === "zh" ? "播放预览" : "Play preview", onClick: () => X && _({ path: V.path, title: `${x.shot.id} · ${x.shot.title}` }), children: "▶" })
          ] }, V.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "未找到这个镜头的生成结果" : "No generated result found for this shot" })
      ] }, x.key);
    }) }),
    /* @__PURE__ */ r("section", { class: "td-post-merged", children: [
      /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并结果" : "Merged results" }),
        /* @__PURE__ */ r("span", { class: `td-result-state ${ee.length ? "found" : ""}`, children: M ? t === "zh" ? "查询中" : "Checking" : t === "zh" ? `${ee.length} 个结果` : `${ee.length} results` })
      ] }) }),
      M ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "正在查询合并结果…" : "Loading merged results…" }) : $.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: t === "zh" ? "无法查询合并结果" : "Unable to query merged results" }) : re && ye ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
        /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
          /* @__PURE__ */ r("video", { src: ye, controls: !0, preload: "metadata", playsInline: !0 }, re.path),
          /* @__PURE__ */ r("div", { class: "td-generated-meta", title: re.path, children: re.path })
        ] }),
        /* @__PURE__ */ r("div", { class: "td-result-list", children: ee.map((x, k) => {
          const N = se(x.path, "output");
          return /* @__PURE__ */ r("button", { class: `td-result-item ${x.path === re.path ? "selected" : ""}`, onClick: () => W(x.path), children: [
            N ? /* @__PURE__ */ r(je, { src: N, alt: `${t === "zh" ? "合并结果" : "Merged result"} ${ee.length - k}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
            /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
              /* @__PURE__ */ r("strong", { children: [
                t === "zh" ? `合并结果 ${ee.length - k}` : `Merged result ${ee.length - k}`,
                k === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
              ] }),
              /* @__PURE__ */ r("span", { children: de(x.path) }),
              /* @__PURE__ */ r("small", { children: x.bytes ? `${(x.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
            ] })
          ] }, x.path);
        }) })
      ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "还没有合并结果" : "No merged result yet" })
    ] }),
    p && se(p.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => _(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (x) => x.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: p.title }),
        /* @__PURE__ */ r("button", { "aria-label": t === "zh" ? "关闭预览" : "Close preview", onClick: () => _(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: se(p.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { title: p.path, children: de(p.path) })
    ] }) })
  ] });
}
function qr(e) {
  const t = e.reduce((n, o) => {
    const d = /^shot_(\d+)$/i.exec(o.id.trim());
    return d ? Math.max(n, Number(d[1])) : n;
  }, 0);
  return Math.max(t, e.length) + 1;
}
function Wr(e, t = 5) {
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
function bt(e, t, n) {
  const o = qr(e), d = Array.from({ length: t }, (i, a) => Wr(o + a, n));
  return [...e, ...d];
}
const Wt = (e) => `${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, Ie = (e) => JSON.parse(JSON.stringify(e)), Kr = { image: "图片", video: "视频", audio: "音频" }, xt = ["off", "super_resolution_second_pass", "latent_upscale_second_pass", "super_resolution_only"];
function _t(e, t) {
  return {
    off: ["关闭二采", "Off"],
    super_resolution_second_pass: ["超分二采", "Super-res 2nd pass"],
    latent_upscale_second_pass: ["Latent 放大二采", "Latent upscale 2nd pass"],
    super_resolution_only: ["只超分", "Super-res only"]
  }[e][t === "zh" ? 0 : 1];
}
function vt(e, t) {
  return e.processingMode === "latent_upscale_second_pass" ? t === "zh" ? "Latent 二采" : "Latent 2nd" : e.processingMode === "super_resolution_second_pass" || e.stage === "second_pass" ? t === "zh" ? "超分二采" : "Super-res 2nd" : e.processingMode === "super_resolution_only" || e.stage === "upscaled" ? t === "zh" ? "只超分" : "Super-res only" : e.stage === "first_pass" ? t === "zh" ? "一采" : "1st pass" : t === "zh" ? "旧结果" : "Legacy";
}
function yt(e) {
  var n;
  const t = Ie(e);
  return t.schemaVersion = 5, (n = t.project.id) != null && n.trim() || (t.project.id = Wt("project")), t.shots = t.shots.map((o) => {
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
function Jr(e) {
  return e.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function Gr(e) {
  const t = Wt(e);
  return { id: t, alias: t, kind: e, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: e === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function wt(e, t, n) {
  const o = new FormData();
  o.append("projectName", e), o.append("kind", t), o.append("file", n);
  const d = await fetch("/theodore-director/v1/assets", { method: "POST", body: o }), i = await d.json();
  if (!d.ok || !i.path) throw new Error(i.error || `HTTP ${d.status}`);
  return i.path;
}
async function Qr(e, t, n) {
  const o = new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t.id,
    activeIndex: String(n)
  }), d = await fetch(`/theodore-director/v1/generated-video?${o.toString()}`), i = await d.json();
  if (!d.ok) throw new Error(i.error || `HTTP ${d.status}`);
  return i;
}
async function Yr(e) {
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
function Zr({ initial: e, onSave: t, onClose: n, supportsSecondSampling: o, queueSecondPass: d }) {
  const [i, a] = P(() => yt(e)), [h, f] = P("shots"), [p, _] = P(0), [c, l] = P(() => navigator.language.startsWith("zh") ? "zh" : "en"), [v, E] = P({}), [w, z] = P(!0), [$, y] = P(!1), [M, b] = P(0), [I, C] = P({ found: !1, results: [] }), [U, W] = P(""), [g, L] = P(!1), [F, R] = P(""), [Z, ne] = P(!0), [u, T] = P(!1), [j, G] = P(!1), [B, O] = P([]), [ee, re] = P("5"), [fe, ae] = P("1"), [ke, Ue] = P("5"), [ye, x] = P("super_resolution_second_pass");
  ce(() => {
    const s = (m) => {
      m.target instanceof Element && m.target.closest(".td-shot-media-name") && m.preventDefault();
    };
    return document.addEventListener("mousedown", s), () => document.removeEventListener("mousedown", s);
  }, []);
  const k = i.shots[Math.min(p, i.shots.length - 1)], N = me(() => k ? Bt(i, k) : null, [i, k]), K = me(() => k ? Ft(i, k) : [], [i, k]), V = k != null && k.enabled ? i.shots.slice(0, p).filter((s) => s.enabled).length : -1, Y = B.length > 0 && B.every((s) => s.enabled), X = me(() => be(I), [I]), te = X.find((s) => s.path === U) ?? X[0], he = te != null && te.path ? se(te.path, "output") : null, D = (s) => a((m) => {
    const S = Ie(m);
    return s(S), S;
  }), Ze = (s, m) => D((S) => {
    const A = s + m;
    A < 0 || A >= S.shots.length || ([S.shots[s], S.shots[A]] = [S.shots[A], S.shots[s]], _(A));
  }), Kt = (s) => D((m) => {
    m.shots.length <= 1 || (m.shots.splice(s, 1), _((S) => S > s ? S - 1 : S === s ? Math.min(s, m.shots.length - 1) : S));
  }), Jt = () => {
    O(Ie(i.shots)), T(!0);
  }, Gt = () => {
    const s = Number(ee);
    if (!Number.isFinite(s) || s <= 0) {
      window.alert(c === "zh" ? "统一时长必须大于 0 秒" : "The shared duration must be greater than 0 seconds.");
      return;
    }
    O((m) => m.map((S) => ({ ...S, durationSeconds: s })));
  }, Qt = () => {
    const s = Number(fe), m = Number(ke);
    if (!Number.isInteger(s) || s < 1 || s > 100) {
      window.alert(c === "zh" ? "新增镜头数量必须是 1–100 的整数" : "The shot count must be an integer from 1 to 100.");
      return;
    }
    if (!Number.isFinite(m) || m <= 0) {
      window.alert(c === "zh" ? "新增镜头时长必须大于 0 秒" : "The new-shot duration must be greater than 0 seconds.");
      return;
    }
    O((S) => bt(S, s, m));
  }, Yt = () => {
    const s = !Y;
    O((m) => m.map((S) => ({ ...S, enabled: s })));
  }, Zt = () => {
    if (B.some((s) => !Number.isFinite(s.durationSeconds) || s.durationSeconds <= 0)) {
      window.alert(c === "zh" ? "每个镜头的时长都必须大于 0 秒" : "Every shot duration must be greater than 0 seconds.");
      return;
    }
    D((s) => {
      s.shots = Ie(B);
    }), _((s) => Math.min(s, B.length - 1)), T(!1);
  }, Xt = () => {
    const s = URL.createObjectURL(new Blob([JSON.stringify(i, null, 2)], { type: "application/json" })), m = document.createElement("a");
    m.href = s, m.download = `${Jr(i.project.name)}.director.json`, m.click(), URL.revokeObjectURL(s);
  }, er = () => {
    const s = $r(i);
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
    return k ? (L(!0), Qr(i, k, V).then((m) => {
      if (s) return;
      const S = be(m);
      C(m), W((A) => {
        var H;
        return S.some((oe) => oe.path === A) ? A : ((H = S[0]) == null ? void 0 : H.path) ?? "";
      });
    }).catch((m) => {
      s || (C({ found: !1, results: [], error: String(m) }), W(""));
    }).finally(() => {
      s || L(!1);
    }), () => {
      s = !0;
    }) : (C({ found: !1, results: [] }), W(""), L(!1), () => {
      s = !0;
    });
  }, [i.project.name, i.project.runId, k == null ? void 0 : k.id, k == null ? void 0 : k.enabled, V, M]), /* @__PURE__ */ r("div", { class: "td-shell", children: [
    /* @__PURE__ */ r("header", { children: [
      /* @__PURE__ */ r("h1", { children: ge(c, "title") }),
      /* @__PURE__ */ r("div", { class: "td-actions", children: [
        /* @__PURE__ */ r("button", { onClick: Xt, children: "导出 / Export" }),
        /* @__PURE__ */ r("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ r("input", { type: "file", accept: "application/json,.json", onChange: async (s) => {
            var S;
            const m = (S = s.currentTarget.files) == null ? void 0 : S[0];
            if (m)
              try {
                const A = JSON.parse(await m.text());
                if (!A.project || !Array.isArray(A.shots) || !Array.isArray(A.assets)) throw new Error("不是有效的 Theodore Director Plan");
                a(yt(A)), _(0);
              } catch (A) {
                window.alert(String(A));
              }
          } })
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => l(c === "zh" ? "en" : "zh"), children: c === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: er, children: ge(c, "save") }),
        /* @__PURE__ */ r("button", { onClick: n, children: ge(c, "close") })
      ] })
    ] }),
    /* @__PURE__ */ r("nav", { children: ["shots", "assets", "settings", "postprocess"].map((s) => /* @__PURE__ */ r("button", { class: h === s ? "active" : "", onClick: () => f(s), children: ge(c, s) })) }),
    /* @__PURE__ */ r("main", { children: [
      h === "shots" && /* @__PURE__ */ r("div", { class: "td-shots", children: [
        /* @__PURE__ */ r("aside", { class: "td-shot-sidebar", children: [
          o && /* @__PURE__ */ r("div", { class: "td-bulk-processing", children: [
            /* @__PURE__ */ r("select", { "aria-label": c === "zh" ? "批量处理模式" : "Bulk processing mode", value: ye, onChange: (s) => x(s.currentTarget.value), children: xt.map((s) => /* @__PURE__ */ r("option", { value: s, children: _t(s, c) })) }),
            /* @__PURE__ */ r("button", { class: "wide td-bulk-toggle", onClick: () => D((s) => {
              s.shots.forEach((m) => {
                m.secondSamplingMode = ye;
              });
            }), children: c === "zh" ? "应用到全部镜头" : "Apply to all shots" })
          ] }),
          /* @__PURE__ */ r("div", { class: "td-shot-list", children: i.shots.map((s, m) => /* @__PURE__ */ r("div", { class: `td-shot-card ${m === p ? "selected" : ""}`, onClick: () => _(m), children: [
            /* @__PURE__ */ r("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ r("button", { class: "td-shot-delete", disabled: i.shots.length <= 1, title: c === "zh" ? i.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : i.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": c === "zh" ? "删除镜头" : "Delete shot", onClick: (S) => {
              S.stopPropagation(), Kt(m);
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
              /* @__PURE__ */ r("button", { title: c === "zh" ? "上移镜头" : "Move shot up", onClick: (S) => {
                S.stopPropagation(), Ze(m, -1);
              }, children: "↑" }),
              /* @__PURE__ */ r("button", { title: c === "zh" ? "下移镜头" : "Move shot down", onClick: (S) => {
                S.stopPropagation(), Ze(m, 1);
              }, children: "↓" })
            ] })
          ] }, s.id)) }),
          /* @__PURE__ */ r("div", { class: "td-shot-sidebar-footer", children: [
            /* @__PURE__ */ r("button", { class: "wide", onClick: () => D((s) => {
              const m = s.shots.length;
              s.shots = bt(s.shots, 1, 5), _(m);
            }), children: [
              "＋ ",
              ge(c, "addShot")
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-batch-entry", children: /* @__PURE__ */ r("button", { class: "wide", onClick: Jt, children: c === "zh" ? "批量处理镜头" : "Batch edit shots" }) })
          ] })
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
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: V === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: k.latentRelay, onChange: (s) => D((m) => {
                  m.shots[p].latentRelay = s.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: [
                  "latent接力 / Relay",
                  V === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              o && /* @__PURE__ */ r("label", { class: "td-processing-mode", children: [
                /* @__PURE__ */ r("span", { children: c === "zh" ? "高清处理" : "Processing" }),
                /* @__PURE__ */ r("select", { value: k.secondSamplingMode, onChange: (s) => D((m) => {
                  m.shots[p].secondSamplingMode = s.currentTarget.value;
                }), children: xt.map((s) => /* @__PURE__ */ r("option", { value: s, children: _t(s, c) })) })
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
            /* @__PURE__ */ r(Be, { rows: 10, value: k.prompt, mentionAssets: K, mentionLanguage: c, isReferenceValid: (s) => Ht(i, k, s), onInput: (s) => D((m) => {
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
              const m = !k.disabledAssetIds.includes(s.id), S = Z ? s.alias : de(s.path) || s.alias, A = `{{ref:${s.alias}}}`;
              return /* @__PURE__ */ r("div", { class: `td-shot-media-card ${m ? "" : "disabled"}`, children: [
                /* @__PURE__ */ r("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ r(ut, { asset: s, compact: !0 }),
                  /* @__PURE__ */ r("span", { class: "td-shot-media-kind", children: c === "zh" ? Kr[s.kind] : s.kind }),
                  /* @__PURE__ */ r("label", { class: "td-shot-media-toggle", title: m ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ r("input", { type: "checkbox", checked: m, onChange: (H) => D((oe) => {
                    const le = oe.shots[p].disabledAssetIds;
                    oe.shots[p].disabledAssetIds = H.currentTarget.checked ? le.filter((_e) => _e !== s.id) : [.../* @__PURE__ */ new Set([...le, s.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ r("button", { class: `td-shot-media-name ${F === s.id ? "copied" : ""}`, title: `${S}
${c === "zh" ? "点击复制" : "Click to copy"} ${A}`, onClick: async () => {
                  try {
                    await Yr(A), R(s.id), window.setTimeout(() => R((H) => H === s.id ? "" : H), 1400);
                  } catch (H) {
                    window.alert(`${c === "zh" ? "复制失败" : "Copy failed"}: ${String(H)}`);
                  }
                }, children: [
                  /* @__PURE__ */ r("span", { children: S }),
                  F === s.id && /* @__PURE__ */ r("em", { children: c === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, s.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ r("aside", { class: "td-preview", children: [
          /* @__PURE__ */ r("details", { open: w, onToggle: (s) => z(s.currentTarget.open), children: [
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
              /* @__PURE__ */ r("span", { class: `td-result-state ${X.length ? "found" : ""}`, children: g ? c === "zh" ? "查询中" : "Checking" : X.length ? c === "zh" ? `${X.length} 个结果` : `${X.length} results` : c === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ r("div", { class: "td-result-actions", children: /* @__PURE__ */ r("button", { onClick: () => b((s) => s + 1), children: [
                "↻ ",
                c === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              g ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: c === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : I.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: c === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again." }) : te && he ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
                /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
                  /* @__PURE__ */ r("video", { src: he, controls: !0, preload: "metadata", playsInline: !0 }, te.path),
                  /* @__PURE__ */ r("div", { class: "td-generated-meta", title: te.path, children: [
                    vt(te, c),
                    " · ",
                    te.path,
                    te.bytes ? ` · ${(te.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                  ] })
                ] }),
                /* @__PURE__ */ r("div", { class: "td-result-list", "aria-label": c === "zh" ? "全部生成结果" : "All generated results", children: X.map((s, m) => {
                  const S = se(s.path, "output"), A = Vt(s.path, X.length - m), H = s.modifiedAt ? new Date(s.modifiedAt * 1e3).toLocaleString(c === "zh" ? "zh-CN" : "en-US") : "";
                  return /* @__PURE__ */ r("button", { class: `td-result-item ${s.path === te.path ? "selected" : ""}`, onClick: () => W(s.path), children: [
                    S ? /* @__PURE__ */ r(je, { src: S, alt: `${c === "zh" ? "结果" : "Result"} ${A}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: /* @__PURE__ */ r("span", { children: "×" }) }),
                    /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
                      /* @__PURE__ */ r("strong", { children: [
                        c === "zh" ? `结果 ${A}` : `Result ${A}`,
                        " · ",
                        vt(s, c),
                        m === 0 && /* @__PURE__ */ r("em", { children: c === "zh" ? "最新" : "Latest" })
                      ] }),
                      /* @__PURE__ */ r("span", { title: s.path, children: de(s.path) }),
                      /* @__PURE__ */ r("small", { children: [s.bytes ? `${(s.bytes / 1024 / 1024).toFixed(1)} MB` : "", H].filter(Boolean).join(" · ") })
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
          ["image", "video", "audio"].map((s) => /* @__PURE__ */ r("button", { onClick: () => D((m) => m.assets.push(Gr(s))), children: [
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
                /* @__PURE__ */ r("input", { value: s.alias, onInput: (S) => D((A) => {
                  A.assets[m].alias = S.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ r("select", { value: s.kind, onChange: (S) => D((A) => {
                  A.assets[m].kind = S.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ r("option", { children: "image" }),
                  /* @__PURE__ */ r("option", { children: "video" }),
                  /* @__PURE__ */ r("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ r("input", { value: s.path, onInput: (S) => D((A) => {
                  A.assets[m].path = S.currentTarget.value;
                }) }),
                /* @__PURE__ */ r("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ r("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ r("input", { type: "file", accept: s.kind === "image" ? "image/*" : s.kind === "video" ? "video/*" : "audio/*", onChange: async (S) => {
                      var oe;
                      const A = S.currentTarget, H = (oe = A.files) == null ? void 0 : oe[0];
                      if (H) {
                        E((le) => ({ ...le, [s.id]: H.name }));
                        try {
                          const le = await wt(i.project.name, s.kind, H);
                          D((_e) => {
                            const Xe = _e.assets.find((tr) => tr.id === s.id);
                            Xe && (Xe.path = le);
                          });
                        } catch (le) {
                          window.alert(String(le));
                        } finally {
                          E((le) => {
                            const _e = { ...le };
                            return delete _e[s.id], _e;
                          }), A.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ r("span", { class: "td-file-name", title: v[s.id] || s.path, children: v[s.id] ? `${c === "zh" ? "上传中" : "Uploading"}: ${v[s.id]}` : de(s.path) || (c === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ r("input", { type: "number", min: "0", step: "0.1", value: s.durationSeconds ?? "", onInput: (S) => D((A) => {
                  A.assets[m].durationSeconds = S.currentTarget.value ? Number(S.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ r("input", { type: "number", value: s.fixedOrder, onInput: (S) => D((A) => {
                  A.assets[m].fixedOrder = Number(S.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ r("input", { value: s.shotIds.join(", "), onInput: (S) => D((A) => {
                  A.assets[m].shotIds = S.currentTarget.value.split(",").map((H) => H.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-flags", children: [
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: s.enabled, onChange: (S) => D((A) => {
                  A.assets[m].enabled = S.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: s.fixed, onChange: (S) => D((A) => {
                  A.assets[m].fixed = S.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              s.kind === "video" && /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: s.includeVideoAudio, onChange: (S) => D((A) => {
                  A.assets[m].includeVideoAudio = S.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ r("button", { class: "danger", onClick: () => D((S) => {
                S.assets.splice(m, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ r(ut, { asset: s })
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
          /* @__PURE__ */ r(Be, { value: i.promptPrefix, isReferenceValid: (s) => ft(i, s), onInput: (s) => D((m) => {
            m.promptPrefix = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ r(Be, { value: i.promptSuffix, isReferenceValid: (s) => ft(i, s), onInput: (s) => D((m) => {
            m.promptSuffix = s.currentTarget.value;
          }) })
        ] })
      ] }),
      h === "postprocess" && /* @__PURE__ */ r(Br, { plan: i, language: c, queueSecondPass: d })
    ] }),
    u && /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": c === "zh" ? "批量处理镜头" : "Batch edit shots", children: [
      /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("h2", { children: c === "zh" ? "批量处理镜头" : "Batch edit shots" }),
          /* @__PURE__ */ r("p", { children: c === "zh" ? `当前共 ${B.length} 个镜头` : `${B.length} shots` })
        ] }),
        /* @__PURE__ */ r("button", { "aria-label": c === "zh" ? "关闭" : "Close", onClick: () => T(!1), children: "×" })
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
          /* @__PURE__ */ r("button", { onClick: Gt, children: c === "zh" ? "一键设置所有时长" : "Set all durations" })
        ] }),
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            c === "zh" ? "新增镜头数量" : "New shot count",
            /* @__PURE__ */ r("input", { type: "number", min: "1", max: "100", step: "1", value: fe, onInput: (s) => ae(s.currentTarget.value) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            c === "zh" ? "每个镜头时长" : "Duration per shot",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: ke, onInput: (s) => Ue(s.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: c === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: Qt, children: c === "zh" ? "批量新增镜头" : "Add shots" })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-global-actions", children: [
        /* @__PURE__ */ r("span", { children: c === "zh" ? `已启用 ${B.filter((s) => s.enabled).length}/${B.length} 个镜头` : `${B.filter((s) => s.enabled).length}/${B.length} shots enabled` }),
        /* @__PURE__ */ r("button", { class: Y ? "active" : "", onClick: Yt, children: Y ? c === "zh" ? "全部禁用" : "Disable all" : c === "zh" ? "全部启用" : "Enable all" })
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
        B.map((s, m) => /* @__PURE__ */ r("div", { class: "td-batch-row", children: [
          /* @__PURE__ */ r("span", { children: m + 1 }),
          /* @__PURE__ */ r("input", { value: s.title, "aria-label": `${c === "zh" ? "镜头名" : "Shot name"} ${m + 1}`, onInput: (S) => O((A) => A.map((H, oe) => oe === m ? { ...H, title: S.currentTarget.value } : H)) }),
          /* @__PURE__ */ r("label", { class: "td-batch-enabled", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: s.enabled, onChange: (S) => O((A) => A.map((H, oe) => oe === m ? { ...H, enabled: S.currentTarget.checked } : H)) }),
            /* @__PURE__ */ r("span", { children: s.enabled ? c === "zh" ? "开" : "ON" : c === "zh" ? "关" : "OFF" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: s.durationSeconds, onInput: (S) => O((A) => A.map((H, oe) => oe === m ? { ...H, durationSeconds: Number(S.currentTarget.value) } : H)) }),
            /* @__PURE__ */ r("span", { children: c === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-relay", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: s.latentRelay, onChange: (S) => O((A) => A.map((H, oe) => oe === m ? { ...H, latentRelay: S.currentTarget.checked } : H)) }),
            /* @__PURE__ */ r("span", { children: s.latentRelay ? c === "zh" ? "开" : "ON" : c === "zh" ? "关" : "OFF" })
          ] })
        ] }, s.id))
      ] }),
      /* @__PURE__ */ r("footer", { children: [
        /* @__PURE__ */ r("button", { onClick: () => T(!1), children: c === "zh" ? "取消" : "Cancel" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: Zt, children: c === "zh" ? "应用更改" : "Apply changes" })
      ] })
    ] }) }),
    j && /* @__PURE__ */ r(wr, { language: c, assets: i.assets, projectName: i.project.name, uploadFile: wt, onImported: (s) => D((m) => {
      m.assets.push(...s);
    }), onClose: () => G(!1) })
  ] });
}
function Xr(e, t, n = !1, o) {
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
    document.removeEventListener("keydown", a), ot(null, i), i.remove();
  };
  document.addEventListener("keydown", a), ot(/* @__PURE__ */ r(Zr, { initial: e, onSave: (f) => {
    t(f), h();
  }, onClose: h, supportsSecondSampling: n, queueSecondPass: o }), i), i.focus();
}
const en = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-shot-media{position:relative}.td-form label.td-shot-media-display-toggle{position:absolute;top:-17px;right:10px;z-index:3;display:flex;flex-direction:row;align-items:center;gap:6px;padding:6px 9px;border:1px solid var(--td-line);border-radius:6px;background:var(--td-panel);color:var(--td-text);cursor:pointer;white-space:nowrap}.td-form label.td-shot-media-display-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-display-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-highlight-textarea{position:relative;display:block;width:100%;min-width:0}.td-highlight-backdrop,.td-form textarea.td-highlight-input{box-sizing:border-box;width:100%;margin:0;padding:7px 9px;font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,monospace;font-size:inherit;line-height:1.45;letter-spacing:normal;-moz-tab-size:8;tab-size:8;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.td-highlight-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border:1px solid transparent;border-radius:6px;background:#222a35;color:var(--td-text);pointer-events:none}.td-form textarea.td-highlight-input{position:relative;z-index:1;display:block;background:transparent;color:transparent;caret-color:var(--td-text);-webkit-text-fill-color:transparent}.td-highlight-input::selection{background:#5898d46b}.td-highlight-backdrop mark{padding:0;border-radius:3px;color:inherit}.td-highlight-backdrop mark.valid{background:#1d6b50;color:#bfffe6}.td-highlight-backdrop mark.invalid{background:#7a2931;color:#ffd1d5;text-decoration:underline;text-decoration-color:#ff9aa4;text-underline-offset:2px}.td-reference-mention-menu{position:fixed;z-index:80;display:flex;flex-direction:column;overflow:hidden;border:1px solid #526174;border-radius:9px;background:#161d26;color:var(--td-text);box-shadow:0 14px 42px #000b}.td-reference-mention-menu>header{display:flex;align-items:center;justify-content:space-between;flex:none;padding:8px 10px;border-bottom:1px solid var(--td-line);background:#202936}.td-reference-mention-menu>header strong{color:var(--td-text);font-size:13px}.td-reference-mention-menu>header span{padding:1px 7px;border-radius:999px;background:#2b3745;color:var(--td-muted);font-size:11px}.td-reference-mention-options{min-height:0;overflow:auto;padding:5px}.td-shell .td-reference-mention-options>button{display:grid;grid-template-columns:66px minmax(0,1fr) auto;gap:9px;align-items:center;width:100%;min-height:56px;padding:5px;border:1px solid transparent;background:transparent;text-align:left}.td-shell .td-reference-mention-options>button:hover,.td-shell .td-reference-mention-options>button.active{border-color:#527e6c;background:#1d302b}.td-reference-mention-thumb{display:flex;width:66px;height:46px;align-items:center;justify-content:center;overflow:hidden;border:1px solid var(--td-line);border-radius:5px;background:#0b0f14;color:var(--td-accent);font-size:20px}.td-reference-mention-thumb img{display:block;width:100%;height:100%;object-fit:cover}.td-reference-mention-copy{display:flex;min-width:0;flex-direction:column;gap:2px}.td-reference-mention-copy strong,.td-reference-mention-copy small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-reference-mention-copy strong{color:var(--td-text)}.td-reference-mention-copy small{color:var(--td-muted);font-size:11px}.td-reference-mention-options>button>em{padding:2px 7px;border-radius:999px;background:#293440;color:var(--td-muted);font-size:10px;font-style:normal;white-space:nowrap}.td-reference-mention-empty{margin:0;padding:22px 12px;color:var(--td-muted);text-align:center}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-generated-results{display:flex;flex-direction:column;gap:12px}.td-result-list{display:flex;flex-direction:column;gap:7px;max-height:280px;overflow:auto;padding-right:3px}.td-shell button.td-result-item{display:grid;grid-template-columns:112px minmax(0,1fr);gap:10px;align-items:center;width:100%;padding:6px;text-align:left;background:#151b23}.td-shell button.td-result-item.selected{border-color:var(--td-accent);background:#1c2a2a}.td-result-thumb{width:112px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:5px;background:#090c10;color:var(--td-muted)}.td-result-thumb img,.td-result-thumb video{display:block;width:100%;height:100%;object-fit:contain}.td-result-item-copy{display:flex;min-width:0;flex-direction:column;gap:3px}.td-result-item-copy>strong{display:flex;align-items:center;gap:7px;color:var(--td-text)}.td-result-item-copy>strong em{padding:1px 6px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-result-item-copy>span,.td-result-item-copy>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-result-item-copy>small{font-size:10px}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-asset-batch-entry{margin-left:auto;border-color:#527061!important;background:#1b2c28!important;color:var(--td-accent)!important}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}.td-bulk-processing{display:grid;gap:6px;margin-bottom:9px}.td-bulk-processing select{width:100%;min-width:0}.td-bulk-processing .td-bulk-toggle{margin:0}.td-processing-mode{display:flex;align-items:center;gap:8px;min-width:260px}.td-processing-mode>span{white-space:nowrap;color:var(--td-muted)}.td-processing-mode select{min-width:170px}.td-second-pass-mode{align-items:flex-end}.td-second-pass-mode label{display:grid;gap:4px;text-align:left}.td-second-pass-mode label span{font-size:12px;color:var(--td-muted)}.td-second-pass-mode select{min-width:210px}.td-shots>.td-shot-sidebar{display:flex;min-height:0;overflow:hidden;flex-direction:column}.td-bulk-processing{flex:none}.td-shot-list{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding-right:4px}.td-shot-sidebar-footer{flex:none;display:grid;gap:8px;padding-top:9px;border-top:1px solid var(--td-line);background:var(--td-panel)}.td-shot-batch-entry{display:flex;min-height:0;padding:0}.td-shot-batch-entry button{border-color:#527061;background:#1b2c28;color:var(--td-accent)}.td-batch-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:28px;background:#05080dbd;box-sizing:border-box}.td-batch-panel{display:flex;flex-direction:column;width:min(1040px,100%);max-height:min(820px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-batch-header h2{font-size:18px;margin:0}.td-batch-header p{margin:3px 0 0;color:var(--td-muted)}.td-batch-header>button{font-size:20px;line-height:1;padding:5px 9px}.td-batch-tools{display:grid;grid-template-columns:1fr 1.4fr;gap:12px;padding:14px 18px;border-bottom:1px solid var(--td-line);background:#151b23}.td-batch-tools>div{display:flex;align-items:end;gap:8px;padding:10px;border:1px solid var(--td-line);border-radius:7px}.td-batch-tools label{display:flex;flex:1;flex-direction:column;gap:4px;color:var(--td-muted);white-space:nowrap}.td-batch-tools label>span,.td-batch-duration{display:flex;align-items:center;gap:6px}.td-batch-tools input{width:100%}.td-batch-tools em{color:var(--td-muted);font-style:normal}.td-batch-tools button{white-space:nowrap}.td-batch-global-actions{display:flex;align-items:center;justify-content:flex-end;gap:12px;padding:9px 22px;border-bottom:1px solid var(--td-line);background:#171e27;color:var(--td-muted)}.td-batch-global-actions button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-batch-table{overflow:auto;padding:0 18px}.td-batch-row{display:grid;grid-template-columns:42px minmax(180px,1fr) 100px 150px 120px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-batch-table-head{position:sticky;top:0;z-index:1;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-batch-duration input{min-width:0;width:100%}.td-batch-duration>span{color:var(--td-muted)}.td-batch-enabled,.td-batch-relay{display:flex;align-items:center;gap:7px;justify-content:flex-start;color:var(--td-text)}.td-batch-enabled input,.td-batch-relay input{width:17px;height:17px;margin:0}.td-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-batch-panel{display:flex;flex-direction:column;width:min(1420px,100%);max-height:min(880px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-asset-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-asset-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-dropzone{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-height:92px;margin:14px 18px 10px;border:1px dashed #597084;border-radius:9px;background:#151b23;color:var(--td-text);cursor:pointer;transition:border-color .15s,background .15s}.td-asset-dropzone:hover,.td-asset-dropzone.dragging{border-color:var(--td-accent);background:#1b2c28}.td-asset-dropzone span{color:var(--td-muted);font-size:12px}.td-asset-dropzone input{display:none}.td-asset-batch-warning{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 18px 10px;padding:8px 10px;border:1px solid #836a32;border-radius:7px;background:#3a301c;color:#f4d991}.td-asset-batch-warning span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-warning button{padding:2px 7px}.td-asset-batch-summary{display:flex;align-items:center;justify-content:space-between;padding:8px 18px;border-top:1px solid var(--td-line);border-bottom:1px solid var(--td-line);background:#151b23;color:var(--td-muted)}.td-asset-batch-summary button{padding:5px 8px}.td-asset-batch-list{overflow:auto;padding:0 18px 10px}.td-asset-batch-row{display:grid;grid-template-columns:minmax(210px,1.4fr) minmax(150px,1fr) 115px 135px 105px 72px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-asset-batch-head{position:sticky;top:0;z-index:2;padding-top:10px;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-asset-batch-row.invalid{background:#3b202560}.td-asset-batch-row.imported{background:#17372d55}.td-asset-batch-file{display:flex;min-width:0;flex-direction:column;gap:2px}.td-asset-batch-file strong,.td-asset-batch-file small,.td-asset-batch-file em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-file small{color:var(--td-muted);font-weight:400}.td-asset-batch-file em{color:var(--td-danger);font-size:11px;font-style:normal}.td-asset-batch-duration,.td-asset-batch-audio{display:flex;align-items:center;gap:6px;color:var(--td-muted)}.td-asset-batch-duration input{min-width:0;width:100%}.td-asset-batch-audio input{width:17px;height:17px;margin:0}.td-asset-batch-empty{display:flex;min-height:130px;align-items:center;justify-content:center;color:var(--td-muted)}.td-asset-batch-panel button:disabled,.td-asset-batch-panel input:disabled,.td-asset-batch-panel select:disabled{opacity:.55;cursor:not-allowed}.td-postprocess{display:flex;flex-direction:column;gap:14px;max-width:1500px;margin:0 auto}.td-post-header,.td-post-summary,.td-post-merged{border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px}.td-post-header h2,.td-post-merged h2{margin:0;font-size:17px}.td-post-header p{margin:4px 0 0;color:var(--td-muted)}.td-post-actions{display:flex;gap:8px;flex:none}.td-post-summary{display:flex;align-items:center;gap:18px;padding:10px 14px;color:var(--td-muted)}.td-post-summary>button{margin-left:auto}.td-post-summary button:disabled{opacity:.5;cursor:not-allowed}.td-post-range{display:flex;align-items:center;gap:6px;margin-left:auto}.td-post-range input{width:64px;padding:6px 7px;text-align:center}.td-post-range button{white-space:nowrap}.td-post-summary>.td-post-range+button{margin-left:0}.td-post-error,.td-post-warning{padding:10px 13px;border-radius:7px}.td-post-error{border:1px solid #8b4149;background:#442228;color:#ffd1d5;white-space:pre-wrap}.td-post-warning{border:1px solid #836a32;background:#3a301c;color:#f4d991}.td-post-shot-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(390px,1fr));gap:12px;align-items:start}.td-post-shot{min-width:0;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel);overflow:hidden}.td-post-shot.selected{border-color:#527e6c}.td-post-shot.disabled{opacity:.72}.td-post-shot>header{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid var(--td-line);background:#1d2530}.td-post-shot>header>label{display:flex;align-items:center;gap:9px;min-width:0;cursor:pointer}.td-post-shot>header input{width:18px;height:18px;margin:0;flex:none}.td-post-shot>header label>span{display:flex;min-width:0;gap:8px;align-items:baseline}.td-post-shot>header strong{color:var(--td-text)}.td-post-shot>header em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted);font-style:normal}.td-post-shot>header>span{flex:none;padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted)}.td-post-shot-disabled-note{padding:7px 10px;border-bottom:1px solid var(--td-line);background:#332b1d;color:#e5c77d;font-size:11px}.td-post-shot-empty{min-height:96px;display:flex;align-items:center;justify-content:center;padding:12px;color:var(--td-muted);text-align:center}.td-post-result-list{display:flex;flex-direction:column;gap:7px;max-height:360px;overflow:auto;padding:9px}.td-post-result{display:grid;grid-template-columns:minmax(0,1fr) 35px;gap:6px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:5px}.td-post-result.selected{border-color:var(--td-accent);background:#1c2a2a}.td-shell button.td-post-result-choice{display:grid;grid-template-columns:112px minmax(0,1fr);gap:9px;align-items:center;min-width:0;padding:0;border:0;background:transparent;text-align:left}.td-post-result-choice>span{display:flex;min-width:0;flex-direction:column;gap:3px}.td-post-result-choice>span>strong{display:flex;align-items:center;gap:6px}.td-post-result-choice>span>strong em{padding:1px 5px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-post-result-choice>span>span,.td-post-result-choice>span>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-post-result-choice>span>small{font-size:10px}.td-post-result-play{width:35px;height:35px;padding:0!important}.td-post-result-play:disabled{opacity:.35;cursor:not-allowed}.td-post-merged{padding:12px}.td-post-merged>header>div{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px}.td-post-merged .td-generated-results{display:grid;grid-template-columns:minmax(360px,1.6fr) minmax(300px,1fr);align-items:start}.td-post-merged .td-result-list{max-height:420px}.td-post-preview-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:30;display:flex;align-items:center;justify-content:center;padding:26px;background:#030609d6}.td-post-preview-overlay>section{width:min(980px,100%);max-height:calc(100vh - 52px);overflow:auto;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 80px #000c}.td-post-preview-overlay header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--td-line)}.td-post-preview-overlay header button{font-size:20px;line-height:1;padding:5px 9px}.td-post-preview-overlay video{display:block;width:100%;max-height:calc(100vh - 170px);background:#070a0e}.td-post-preview-overlay p{margin:0;padding:9px 12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}.td-post-summary{flex-wrap:wrap}.td-post-range{margin-left:0}.td-post-summary>button{margin-left:auto}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:900px){.td-post-shot-list,.td-post-merged .td-generated-results{grid-template-columns:1fr}.td-post-header{align-items:flex-start;flex-direction:column}.td-post-actions{width:100%}.td-post-actions button{flex:1}.td-post-summary{align-items:stretch;flex-direction:column;gap:7px}.td-post-range{margin:3px 0;flex-wrap:wrap}.td-post-summary>button{margin:4px 0 0}.td-post-result-list{max-height:none}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}@media(max-width:1000px){.td-asset-batch-list{min-width:900px}.td-asset-batch-panel{overflow:auto}.td-asset-batch-panel>.td-batch-header,.td-asset-dropzone,.td-asset-batch-warning,.td-asset-batch-summary,.td-asset-batch-panel>footer{min-width:864px}}@media(max-width:720px){.td-asset-batch-entry{margin-left:0}}.td-postprocess-shell{display:flex;flex-direction:column;gap:12px;max-width:1500px;margin:0 auto}.td-postprocess-shell>.td-postprocess{max-width:none;width:100%;margin:0}.td-post-mode-tabs{display:flex;gap:7px;padding:5px;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-mode-tabs button{min-width:130px}.td-post-mode-tabs button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-second-pass-panel .td-post-shot>header>span:first-child{display:flex;min-width:0;gap:8px;align-items:baseline;padding:0;background:transparent}.td-second-pass-result{display:grid;grid-template-columns:minmax(0,1fr) 154px;gap:8px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:6px}.td-second-pass-result:has(.td-second-pass-run:disabled){border-color:#34404d}.td-second-pass-actions{display:flex;min-width:0;flex-direction:column;gap:6px}.td-second-pass-actions select{width:100%;min-width:0;padding:6px}.td-second-pass-terminal{display:flex;min-height:32px;align-items:center;justify-content:center;border:1px solid var(--td-line);border-radius:6px;color:var(--td-muted);font-size:11px;text-align:center}.td-second-pass-run{width:100%;min-height:34px;padding:6px!important}.td-second-pass-run:disabled{opacity:.62;cursor:not-allowed}.td-second-pass-error{grid-column:1/-1;padding:6px 8px;border-radius:5px;background:#442228;color:#ffd1d5;font-size:11px;white-space:pre-wrap}@media(max-width:620px){.td-post-mode-tabs{flex-direction:column}.td-post-mode-tabs button{width:100%}.td-second-pass-result{grid-template-columns:1fr}.td-second-pass-run{width:100%}}", kt = "theodore-director-styles";
function tn() {
  if (document.getElementById(kt)) return;
  const e = document.createElement("style");
  e.id = kt, e.textContent = en, document.head.append(e);
}
tn();
const rn = "/scripts/app.js", nn = "/scripts/api.js";
Promise.all([
  import(
    /* @vite-ignore */
    rn
  ),
  import(
    /* @vite-ignore */
    nn
  )
]).then(([{ app: e }, { api: t }]) => {
  const n = async (o) => {
    var E, w;
    const d = ((E = e.graph) == null ? void 0 : E._nodes) ?? [], i = d.find((z) => z.type === "TheodoreDirector_PostprocessSecondPassSource"), a = d.find((z) => z.type === "TheodoreDirector_SaveSecondPass"), h = (w = i == null ? void 0 : i.widgets) == null ? void 0 : w.find((z) => z.name === "request_json");
    if (!i || !a || !h || a.id === void 0)
      throw new Error("当前工作流缺少后处理单独二采支流，请重新载入仓库中的 V7 导播台示例工作流");
    const f = h.value, p = i.mode, _ = a.mode;
    let c;
    try {
      h.value = JSON.stringify(o), i.mode = 0, a.mode = 0, c = await e.graphToPrompt(e.rootGraph);
    } finally {
      h.value = f, i.mode = p, a.mode = _;
    }
    const v = (await t.queuePrompt(0, c, { partialExecutionTargets: [String(a.id)] })).prompt_id;
    if (!v) throw new Error("ComfyUI 没有返回二采任务 ID");
    await new Promise((z, $) => {
      const y = () => {
        t.removeEventListener("execution_success", b), t.removeEventListener("execution_error", I), t.removeEventListener("execution_interrupted", I);
      }, M = (C) => {
        var U;
        return String(((U = C.detail) == null ? void 0 : U.prompt_id) ?? "");
      }, b = (C) => {
        M(C) === v && (y(), z());
      }, I = (C) => {
        if (M(C) !== v) return;
        const U = C.detail ?? {};
        y(), $(new Error(String(U.exception_message ?? U.error ?? "单独二采任务执行失败")));
      };
      t.addEventListener("execution_success", b), t.addEventListener("execution_error", I), t.addEventListener("execution_interrupted", I);
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
          const h = (f = this.widgets) == null ? void 0 : f.find((_) => _.name === "request_json");
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
            const _ = JSON.parse(String(a.value)), c = ((p = e.graph) == null ? void 0 : p._nodes) ?? [], l = c.some((v) => v.type === "TheodoreDirector_PostprocessSecondPassSource") && c.some((v) => v.type === "TheodoreDirector_SaveSecondPass");
            Xr(_, (v) => {
              var E, w;
              a.value = JSON.stringify(v, null, 2), this.setDirtyCanvas(!0, !0), (w = (E = e.graph) == null ? void 0 : E.setDirtyCanvas) == null || w.call(E, !0, !0);
            }, !0, l ? n : void 0);
          } catch (_) {
            window.alert(`Theodore Director: ${_ instanceof Error ? _.message : String(_)}`);
          }
        }), this.size = [Math.max(((f = this.size) == null ? void 0 : f[0]) ?? 300, 360), 110]);
      };
    }
  });
});
