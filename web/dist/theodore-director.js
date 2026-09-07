var Re, W, Tt, be, rt, It, Pt, Ue, $e, ke, jt, Ge, Ve, qe, je = {}, Ee = [], ar = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Le = Array.isArray;
function me(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Je(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function lr(e, t, n) {
  var o, i, s, a = {};
  for (s in t) s == "key" ? o = t[s] : s == "ref" ? i = t[s] : a[s] = t[s];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Re.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (s in e.defaultProps) a[s] === void 0 && (a[s] = e.defaultProps[s]);
  return Ce(e, a, o, i, null);
}
function Ce(e, t, n, o, i) {
  var s = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++Tt, __i: -1, __u: 0 };
  return i == null && W.vnode != null && W.vnode(s), s;
}
function Ne(e) {
  return e.children;
}
function Te(e, t) {
  this.props = e, this.context = t;
}
function xe(e, t) {
  if (t == null) return e.__ ? xe(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? xe(e) : null;
}
function cr(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, o = [], i = [], s = me({}, t);
    s.__v = t.__v + 1, W.vnode && W.vnode(s), Qe(e.__P, s, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, o, n ?? xe(t), !!(32 & t.__u), i), s.__v = t.__v, s.__.__k[s.__i] = s, Lt(o, s, i), t.__e = t.__ = null, s.__e != n && Et(s);
  }
}
function Et(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), Et(e);
}
function nt(e) {
  (!e.__d && (e.__d = !0) && be.push(e) && !Ae.__r++ || rt != W.debounceRendering) && ((rt = W.debounceRendering) || It)(Ae);
}
function Ae() {
  try {
    for (var e, t = 1; be.length; ) be.length > t && be.sort(Pt), e = be.shift(), t = be.length, cr(e);
  } finally {
    be.length = Ae.__r = 0;
  }
}
function At(e, t, n, o, i, s, a, p, f, h, x) {
  var c, l, y, j, k, C, I = o && o.__k || Ee, u = t.length;
  for (f = pr(n, t, I, f, u), c = 0; c < u; c++) (y = n.__k[c]) != null && (l = y.__i != -1 && I[y.__i] || je, y.__i = c, C = Qe(e, y, l, i, s, a, p, f, h, x), j = y.__e, y.ref && l.ref != y.ref && (l.ref && Ye(l.ref, null, y), x.push(y.ref, y.__c || j, y)), k == null && j != null && (k = j), 4 & y.__u ? (f = Mt(y, f, e), l.__e && (l.__e = null)) : typeof y.type == "function" && C !== void 0 ? f = C : j && (f = j.nextSibling), y.__u &= -7);
  return n.__e = k, f;
}
function pr(e, t, n, o, i) {
  var s, a, p, f, h, x = n.length, c = x, l = 0;
  for (e.__k = new Array(i), s = 0; s < i; s++) (a = t[s]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = e.__k[s] = Ce(null, a, null, null, null) : Le(a) ? a = e.__k[s] = Ce(Ne, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? a = e.__k[s] = Ce(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : e.__k[s] = a, f = s + l, a.__ = e, a.__b = e.__b + 1, p = null, (h = a.__i = hr(a, n, f, c)) != -1 && (c--, (p = n[h]) && (p.__u |= 2)), p == null || p.__v == null ? (h == -1 && (i > x ? l-- : i < x && l++), typeof a.type != "function" && (a.__u |= 4)) : h != f && (h == f - 1 ? l-- : h == f + 1 ? l++ : (h > f ? l-- : l++, a.__u |= 4))) : e.__k[s] = null;
  if (c) for (s = 0; s < x; s++) (p = n[s]) != null && (2 & p.__u) == 0 && (p.__e == o && (o = xe(p)), Dt(p, p));
  return o;
}
function Mt(e, t, n) {
  var o, i;
  if (typeof e.type == "function") {
    for (o = e.__k, i = 0; o && i < o.length; i++) o[i] && (o[i].__ = e, t = Mt(o[i], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = xe(e)), t = n.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function hr(e, t, n, o) {
  var i, s, a, p = e.key, f = e.type, h = t[n], x = h != null && (2 & h.__u) == 0;
  if (h === null && p == null || x && p == h.key && f == h.type) return n;
  if (o > (x ? 1 : 0)) {
    for (i = n - 1, s = n + 1; i >= 0 || s < t.length; ) if ((h = t[a = i >= 0 ? i-- : s++]) != null && (2 & h.__u) == 0 && p == h.key && f == h.type) return a;
  }
  return -1;
}
function ot(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || ar.test(t) ? n : n + "px";
}
function Se(e, t, n, o, i) {
  var s, a;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof o == "string" && (e.style.cssText = o = ""), o) for (t in o) n && t in n || ot(e.style, t, "");
    if (n) for (t in n) o && n[t] == o[t] || ot(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") s = t != (t = t.replace(jt, "$1")), a = t.toLowerCase(), t = a in e || t == "onFocusOut" || t == "onFocusIn" ? a.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = n, n ? o ? n[ke] = o[ke] : (n[ke] = Ge, e.addEventListener(t, s ? qe : Ve, s)) : e.removeEventListener(t, s ? qe : Ve, s);
  else {
    if (i == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function st(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t[$e] == null) t[$e] = Ge++;
      else if (t[$e] < n[ke]) return;
      return n(W.event ? W.event(t) : t);
    }
  };
}
function Qe(e, t, n, o, i, s, a, p, f, h) {
  var x, c, l, y, j, k, C, I, u, w, m, T, z, O, D, J, q = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (f = !!(32 & n.__u), s = [p = t.__e = n.__e]), (x = W.__b) && x(t);
  e: if (typeof q == "function") {
    c = a.length;
    try {
      if (u = t.props, w = q.prototype && q.prototype.render, m = (x = q.contextType) && o[x.__c], T = x ? m ? m.props.value : x.__ : o, n.__c ? I = (l = t.__c = n.__c).__ = l.__E : (w ? t.__c = l = new q(u, T) : (t.__c = l = new Te(u, T), l.constructor = q, l.render = mr), m && m.sub(l), l.state || (l.state = {}), l.__n = o, y = l.__d = !0, l.__h = [], l._sb = []), w && l.__s == null && (l.__s = l.state), w && q.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = me({}, l.__s)), me(l.__s, q.getDerivedStateFromProps(u, l.__s))), j = l.props, k = l.state, l.__v = t, y) w && q.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), w && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (w && q.getDerivedStateFromProps == null && u !== j && l.componentWillReceiveProps != null && l.componentWillReceiveProps(u, T), t.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(u, l.__s, T) === !1) {
          t.__v != n.__v && (l.props = u, l.state = l.__s, l.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(Z) {
            Z && (Z.__ = t);
          }), Ee.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && a.push(l), p = xe(n);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(u, l.__s, T), w && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(j, k, C);
        });
      }
      if (l.context = T, l.props = u, l.__P = e, l.__e = !1, z = W.__r, O = 0, w) l.state = l.__s, l.__d = !1, z && z(t), x = l.render(l.props, l.state, l.context), Ee.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, z && z(t), x = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++O < 25);
      l.state = l.__s, l.getChildContext != null && (o = me(me({}, o), l.getChildContext())), w && !y && l.getSnapshotBeforeUpdate != null && (C = l.getSnapshotBeforeUpdate(j, k)), D = x != null && x.type === Ne && x.key == null ? Nt(x.props.children) : x, p = At(e, Le(D) ? D : [D], t, n, o, i, s, a, p, f, h), l.base = t.__e, t.__u &= -161, l.__h.length && a.push(l), I && (l.__E = l.__ = null);
    } catch (Z) {
      if (a.length = c, t.__v = null, f || s != null) {
        if (Z.then) {
          for (t.__u |= f ? 160 : 128; p && p.nodeType == 8 && p.nextSibling; ) p = p.nextSibling;
          s != null && (s[s.indexOf(p)] = null), t.__e = p;
        } else if (s != null) for (J = s.length; J--; ) Je(s[J]);
      } else t.__e = n.__e;
      t.__k == null && (t.__k = n.__k || []), Z.then || Rt(t), W.__e(Z, t, n);
    }
  } else s == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : p = t.__e = ur(n.__e, t, n, o, i, s, a, f, h);
  return (x = W.diffed) && x(t), 128 & t.__u ? void 0 : p;
}
function Rt(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Rt));
}
function Lt(e, t, n) {
  for (var o = 0; o < n.length; o++) Ye(n[o], n[++o], n[++o]);
  W.__c && W.__c(t, e), e.some(function(i) {
    try {
      e = i.__h, i.__h = [], e.some(function(s) {
        s.call(i);
      });
    } catch (s) {
      W.__e(s, i.__v);
    }
  });
}
function Nt(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : Le(e) ? e.map(Nt) : e.constructor !== void 0 ? null : me({}, e);
}
function ur(e, t, n, o, i, s, a, p, f) {
  var h, x, c, l, y, j, k, C = n.props || je, I = t.props, u = t.type;
  if (u == "svg" ? i = "http://www.w3.org/2000/svg" : u == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), s != null) {
    for (h = 0; h < s.length; h++) if ((y = s[h]) && "setAttribute" in y == !!u && (u ? y.localName == u : y.nodeType == 3)) {
      e = y, s[h] = null;
      break;
    }
  }
  if (e == null) {
    if (u == null) return document.createTextNode(I);
    e = document.createElementNS(i, u, I.is && I), p && (W.__m && W.__m(t, s), p = !1), s = null;
  }
  if (u == null) C === I || p && e.data == I || (e.data = I);
  else {
    if (s = u == "textarea" && I.defaultValue != null ? null : s && Re.call(e.childNodes), !p && s != null) for (C = {}, h = 0; h < e.attributes.length; h++) C[(y = e.attributes[h]).name] = y.value;
    for (h in C) y = C[h], h == "dangerouslySetInnerHTML" ? c = y : h == "children" || h in I || h == "value" && "defaultValue" in I || h == "checked" && "defaultChecked" in I || Se(e, h, null, y, i);
    for (h in I) y = I[h], h == "children" ? l = y : h == "dangerouslySetInnerHTML" ? x = y : h == "value" ? j = y : h == "checked" ? k = y : p && typeof y != "function" || C[h] === y || Se(e, h, y, C[h], i);
    if (x) p || c && (x.__html == c.__html || x.__html == e.innerHTML) || (e.innerHTML = x.__html), t.__k = [];
    else if (c && (e.innerHTML = ""), At(t.type == "template" ? e.content : e, Le(l) ? l : [l], t, n, o, u == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, s, a, s ? s[0] : n.__k && xe(n, 0), p, f), s != null) for (h = s.length; h--; ) Je(s[h]);
    p && u != "textarea" || (h = "value", u == "progress" && j == null ? e.removeAttribute("value") : j != null && (j !== e[h] || u == "progress" && !j || u == "option" && j != C[h]) && Se(e, h, j, C[h], i), h = "checked", k != null && k != e[h] && Se(e, h, k, C[h], i));
  }
  return e;
}
function Ye(e, t, n) {
  try {
    if (typeof e == "function") {
      var o = typeof e.__u == "function";
      o && e.__u(), o && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (i) {
    W.__e(i, n);
  }
}
function Dt(e, t, n) {
  var o, i;
  if (W.unmount && W.unmount(e), (o = e.ref) && (o.current && o.current != e.__e || Ye(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (s) {
      W.__e(s, t);
    }
    o.base = o.__P = o.__n = null;
  }
  if (o = e.__k) for (i = 0; i < o.length; i++) o[i] && Dt(o[i], t, n || typeof e.type != "function");
  n || Je(e.__e), e.__c = e.__ = e.__e = void 0;
}
function mr(e, t, n) {
  return this.constructor(e, n);
}
function it(e, t, n) {
  var o, i, s, a;
  t == document && (t = document.documentElement), W.__ && W.__(e, t), i = (o = !1) ? null : t.__k, s = [], a = [], Qe(t, e = t.__k = lr(Ne, null, [e]), i || je, je, t.namespaceURI, i ? null : t.firstChild ? Re.call(t.childNodes) : null, s, i ? i.__e : t.firstChild, o, a), Lt(s, e, a), e.props.children = null;
}
Re = Ee.slice, W = { __e: function(e, t, n, o) {
  for (var i, s, a; t = t.__; ) if ((i = t.__c) && !i.__) try {
    if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), a = i.__d), a) return i.__E = i;
  } catch (p) {
    e = p;
  }
  throw e;
} }, Tt = 0, Te.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = me({}, this.state), typeof e == "function" && (e = e(me({}, n), this.props)), e && me(n, e), e != null && this.__v && (t && this._sb.push(t), nt(this));
}, Te.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), nt(this));
}, Te.prototype.render = Ne, be = [], It = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Pt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Ae.__r = 0, Ue = Math.random().toString(8), $e = "__d" + Ue, ke = "__a" + Ue, jt = /(PointerCapture)$|Capture$/i, Ge = 0, Ve = st(!1), qe = st(!0);
var fr = 0;
function r(e, t, n, o, i, s) {
  t || (t = {});
  var a, p, f = t;
  if ("ref" in f) for (p in f = {}, t) p == "ref" ? a = t[p] : f[p] = t[p];
  var h = { type: e, props: f, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --fr, __i: -1, __u: 0, __source: i, __self: s };
  if (typeof e == "function" && (a = e.defaultProps)) for (p in a) f[p] === void 0 && (f[p] = a[p]);
  return W.vnode && W.vnode(h), h;
}
var ye, G, Oe, dt, Me = 0, Ft = [], Q = W, at = Q.__b, lt = Q.__r, ct = Q.diffed, pt = Q.__c, ht = Q.unmount, ut = Q.__;
function De(e, t) {
  Q.__h && Q.__h(G, e, Me || t), Me = 0;
  var n = G.__H || (G.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function A(e) {
  return Me = 1, gr(Ut, e);
}
function gr(e, t, n) {
  var o = De(ye++, 2);
  if (o.t = e, !o.__c && (o.__ = [Ut(void 0, t), function(p) {
    var f = o.__N ? o.__N[0] : o.__[0], h = o.t(f, p);
    f !== h && (o.__N = [h, o.__[1]], o.__c.setState({}));
  }], o.__c = G, !G.__f)) {
    var i = function(p, f, h) {
      if (!o.__c.__H) return !0;
      var x = !1, c = o.__c.props !== p;
      if (o.__c.__H.__.some(function(y) {
        if (y.__N) {
          x = !0;
          var j = y.__[0];
          y.__ = y.__N, y.__N = void 0, j !== y.__[0] && (c = !0);
        }
      }), s) {
        var l = s.call(this, p, f, h);
        return x ? l || c : l;
      }
      return !x || c;
    };
    G.__f = !0;
    var s = G.shouldComponentUpdate, a = G.componentWillUpdate;
    G.componentWillUpdate = function(p, f, h) {
      if (this.__e) {
        var x = s;
        s = void 0, i(p, f, h), s = x;
      }
      a && a.call(this, p, f, h);
    }, G.shouldComponentUpdate = i;
  }
  return o.__N || o.__;
}
function ae(e, t) {
  var n = De(ye++, 3);
  !Q.__s && Ze(n.__H, t) && (n.__ = e, n.u = t, G.__H.__h.push(n));
}
function br(e, t) {
  var n = De(ye++, 4);
  !Q.__s && Ze(n.__H, t) && (n.__ = e, n.u = t, G.__h.push(n));
}
function de(e) {
  return Me = 5, fe(function() {
    return { current: e };
  }, []);
}
function fe(e, t) {
  var n = De(ye++, 7);
  return Ze(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function vr() {
  for (var e; e = Ft.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(Ie), t.__h.some(We), t.__h = [];
    } catch (n) {
      t.__h = [], Q.__e(n, e.__v);
    }
  }
}
Q.__b = function(e) {
  G = null, at && at(e);
}, Q.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), ut && ut(e, t);
}, Q.__r = function(e) {
  lt && lt(e), ye = 0;
  var t = (G = e.__c).__H;
  t && (Oe === G ? (t.__h = [], G.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(Ie), t.__h.some(We), t.__h = [], ye = 0)), Oe = G;
}, Q.diffed = function(e) {
  ct && ct(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Ft.push(t) !== 1 && dt === Q.requestAnimationFrame || ((dt = Q.requestAnimationFrame) || xr)(vr)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), Oe = G = null;
}, Q.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(Ie), n.__h = n.__h.filter(function(o) {
        return !o.__ || We(o);
      });
    } catch (o) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], Q.__e(o, n.__v);
    }
  }), pt && pt(e, t);
}, Q.unmount = function(e) {
  ht && ht(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(o) {
    try {
      Ie(o);
    } catch (i) {
      t = i;
    }
  }), n.__H = void 0, t && Q.__e(t, n.__v));
};
var mt = typeof requestAnimationFrame == "function";
function xr(e) {
  var t, n = function() {
    clearTimeout(o), mt && cancelAnimationFrame(t), setTimeout(e);
  }, o = setTimeout(n, 35);
  mt && (t = requestAnimationFrame(n));
}
function Ie(e) {
  var t = G, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), G = t;
}
function We(e) {
  var t = G;
  e.__c = e.__(), G = t;
}
function Ze(e, t) {
  return !e || e.length !== t.length || t.some(function(n, o) {
    return n !== e[o];
  });
}
function Ut(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const _r = {
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
function Ot(e) {
  var o;
  const t = ((o = e.name.split(".").pop()) == null ? void 0 : o.toLocaleLowerCase()) ?? "";
  if (e.name.includes(".")) return _r[t] ?? null;
  const n = e.type.split("/", 1)[0];
  return n === "image" || n === "video" || n === "audio" ? n : null;
}
function yr(e) {
  const i = e.replace(/\.[^.]+$/, "").replace(/^\s*\d+\s*[-_. ]+/, "").normalize("NFKC").replace(/[\s-]+/g, "_").replace(/[{}]/g, "").replace(/_+/g, "_").replace(/^[_\.]+|[_\.]+$/g, "").slice(0, 96) || "asset";
  return i.toLocaleLowerCase().endsWith(".audio") ? `${i}_asset` : i;
}
function wr(e, t) {
  const n = new Set(Array.from(t, (i) => i.toLocaleLowerCase()));
  if (!n.has(e.toLocaleLowerCase())) return e;
  let o = 2;
  for (; n.has(`${e}_${o}`.toLocaleLowerCase()); ) o += 1;
  return `${e}_${o}`;
}
function kr(e, t, n) {
  const o = e.trim().toLocaleLowerCase();
  return !e.trim() || /[\s{}]/.test(e) || o.endsWith(".audio") ? "invalid" : Array.from(t, (s) => s.toLocaleLowerCase()).includes(o) || Array.from(n, (s) => s.trim().toLocaleLowerCase()).filter((s) => s === o).length > 1 ? "duplicate" : null;
}
function zr(e, t, n) {
  const o = new Set(Array.from(t)), i = [], s = [], a = e.map((p) => "file" in p ? p : { file: p, relativePath: p.webkitRelativePath || p.name });
  a.sort((p, f) => p.relativePath.localeCompare(f.relativePath, "en", { numeric: !0, sensitivity: "base" }));
  for (const p of a) {
    const { file: f } = p, h = Ot(f);
    if (!h) {
      s.push(p.relativePath);
      continue;
    }
    const x = wr(yr(f.name), o);
    o.add(x), i.push({ id: n(), file: f, sourcePath: p.relativePath, alias: x, kind: h, durationSeconds: h === "image" ? null : 2, includeVideoAudio: !1, status: "pending", error: "" });
  }
  return { drafts: i, rejected: s };
}
function Sr(e, t, n) {
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
const Ht = (e, t) => e.relativePath.localeCompare(t.relativePath, "en", { numeric: !0, sensitivity: "base" });
function Bt(e, t) {
  return e.replace(/\\/g, "/").replace(/^\/+/, "").replace(/\/{2,}/g, "/") || t;
}
function Ke(e) {
  return Array.from(e, (t) => ({
    file: t,
    // webkitRelativePath 由目录选择器提供；普通多文件选择回退到文件名。
    relativePath: Bt(t.webkitRelativePath, t.name)
  })).sort(Ht);
}
function $r(e) {
  return new Promise((t, n) => e.file(t, n));
}
function Cr(e) {
  return new Promise((t, n) => e.readEntries(t, n));
}
async function Tr(e, t) {
  const n = e.createReader(), o = [];
  for (; t(); ) {
    const i = await Cr(n);
    if (!i.length) return o;
    o.push(...i);
  }
  return o;
}
async function Ir(e, t, n = () => !0) {
  const o = [], i = async (s) => {
    if (!n()) return;
    if (s.isFile) {
      const p = await $r(s);
      if (!n()) return;
      o.push({ file: p, relativePath: Bt(s.fullPath, p.name) }), t == null || t(o.length);
      return;
    }
    if (!s.isDirectory) return;
    const a = await Tr(s, n);
    for (const p of a) await i(p);
  };
  for (const s of e) {
    if (!n()) break;
    await i(s);
  }
  return o.sort(Ht);
}
async function Pr(e, t, n = () => !0) {
  const i = Array.from(e.items ?? []).filter((a) => a.kind === "file" && typeof a.webkitGetAsEntry == "function");
  if (i.length) {
    const a = i.map((p) => {
      var f;
      return (f = p.webkitGetAsEntry) == null ? void 0 : f.call(p);
    }).filter((p) => !!p);
    if (a.length) return Ir(a, t, n);
  }
  const s = Ke(e.files ?? []);
  return n() && (t == null || t(s.length)), s;
}
function jr(e, t) {
  return t === "image" ? Promise.resolve(null) : new Promise((n) => {
    const o = document.createElement(t === "video" ? "video" : "audio"), i = URL.createObjectURL(e);
    let s = !1;
    const a = (p) => {
      s || (s = !0, o.onloadedmetadata = null, o.onerror = null, o.removeAttribute("src"), o.load(), URL.revokeObjectURL(i), n(p));
    };
    o.preload = "metadata", o.onloadedmetadata = () => a(Number.isFinite(o.duration) && o.duration > 0 ? Math.round(o.duration * 10) / 10 : null), o.onerror = () => a(null), o.src = i;
  });
}
const Er = () => `asset_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`, He = (e, t) => t === "zh" ? { image: "图片", video: "视频", audio: "音频" }[e] : e;
function Ar({ language: e, assets: t, projectName: n, onClose: o, onImported: i, uploadFile: s }) {
  const [a, p] = A([]), [f, h] = A([]), [x, c] = A(!1), [l, y] = A(!1), [j, k] = A(0), [C, I] = A(!1), u = de([]), w = de(null), m = de(0);
  u.current = a;
  const T = t.map((g) => g.alias);
  ae(() => {
    var g, P;
    return (g = w.current) == null || g.setAttribute("webkitdirectory", ""), (P = w.current) == null || P.setAttribute("directory", ""), () => {
      m.current += 1;
    };
  }, []);
  const z = (g, P) => p((E) => E.map((R) => R.id === g ? { ...R, ...P } : R)), O = (g, P) => {
    let E = 0;
    const R = async () => {
      for (; E < g.length && m.current === P; ) {
        const H = g[E++];
        if (H.kind === "image") continue;
        const te = await jr(H.file, H.kind);
        te == null || m.current !== P || p((X) => X.map((se) => se.id === H.id && se.kind === H.kind && se.durationSeconds === 2 ? { ...se, durationSeconds: te } : se));
      }
    };
    Promise.all(Array.from({ length: Math.min(4, g.length) }, R));
  }, D = (g) => {
    if (!g.length || C) return;
    const P = [...T, ...u.current.map((R) => R.alias)], E = zr(g, P, Er);
    E.rejected.length && h((R) => [...R, ...E.rejected]), E.drafts.length && (p((R) => [...R, ...E.drafts]), O(E.drafts, m.current));
  }, J = async (g) => {
    if (l || C) return;
    const P = m.current;
    y(!0), k(0);
    try {
      const E = () => m.current === P, R = await g((H) => {
        E() && k(H);
      }, E);
      if (m.current !== P) return;
      k(R.length), D(R);
    } catch (E) {
      m.current === P && h((R) => [...R, String(E)]);
    } finally {
      m.current === P && y(!1);
    }
  }, Z = a.filter((g) => g.status !== "imported").map((g) => g.alias), le = (g) => {
    if (g.status === "imported") return null;
    const P = kr(g.alias, T, Z);
    return P === "invalid" ? e === "zh" ? "别名为空、包含空白/花括号，或使用了保留后缀 .audio" : "Alias is empty, contains whitespace/braces, or uses reserved .audio" : P === "duplicate" ? e === "zh" ? "别名与素材库或本批次其他素材重复" : "Alias duplicates an existing or staged asset" : Ot(g.file) !== g.kind ? e === "zh" ? "文件扩展名与所选类型不匹配" : "The extension does not match the selected kind" : g.kind !== "image" && (g.durationSeconds == null || g.durationSeconds <= 0) ? e === "zh" ? "视频或音频时长必须大于 0" : "Video/audio duration must be greater than 0" : null;
  }, ce = async () => {
    const P = u.current.filter((te) => te.status === "pending" || te.status === "error");
    if (!P.length || l) return;
    if (P.some(le)) {
      window.alert(e === "zh" ? "请先修正列表中标红的项目。" : "Fix the highlighted rows before importing.");
      return;
    }
    I(!0);
    const E = Math.max(0, ...t.map((te) => te.fixedOrder)) + 1;
    let R = 0;
    const H = async () => {
      for (; R < P.length; ) {
        const te = R++, X = P[te];
        z(X.id, { status: "uploading", error: "" });
        try {
          const se = await s(n, X.kind, X.file);
          i([Sr(X, se, E + te)]), z(X.id, { status: "imported", error: "" });
        } catch (se) {
          z(X.id, { status: "error", error: String(se) });
        }
      }
    };
    await Promise.all(Array.from({ length: Math.min(2, P.length) }, H)), I(!1);
  }, ue = a.filter((g) => g.status === "imported").length, v = a.filter((g) => g.status === "error").length, M = a.length - ue, N = () => {
    m.current += 1, o();
  };
  return /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-asset-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": e === "zh" ? "批量导入素材" : "Batch import assets", children: [
    /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: e === "zh" ? "批量导入素材" : "Batch import assets" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "可混合选择文件或递归导入文件夹；确认列表后再写入素材库。" : "Select files or recursively import folders; review before uploading." })
      ] }),
      /* @__PURE__ */ r("button", { disabled: C, "aria-label": e === "zh" ? "关闭" : "Close", onClick: N, children: "×" })
    ] }),
    /* @__PURE__ */ r("div", { class: `td-asset-dropzone ${x ? "dragging" : ""}`, onDragEnter: (g) => {
      g.preventDefault(), c(!0);
    }, onDragOver: (g) => g.preventDefault(), onDragLeave: (g) => {
      g.currentTarget === g.target && c(!1);
    }, onDrop: (g) => {
      g.preventDefault(), c(!1);
      const P = g.dataTransfer;
      P && J((E, R) => Pr(P, E, R));
    }, children: [
      /* @__PURE__ */ r("strong", { children: l ? e === "zh" ? `正在扫描文件夹…已发现 ${j} 个文件` : `Scanning folders… ${j} files found` : e === "zh" ? "拖拽文件或文件夹到这里" : "Drop files or folders here" }),
      /* @__PURE__ */ r("span", { children: e === "zh" ? "递归识别子文件夹中的图片、视频和音频" : "Images, videos, and audio are detected recursively" }),
      /* @__PURE__ */ r("div", { class: "td-asset-picker-actions", children: [
        /* @__PURE__ */ r("label", { class: "td-asset-picker-button", children: [
          e === "zh" ? "选择多个文件" : "Choose files",
          /* @__PURE__ */ r("input", { type: "file", multiple: !0, accept: "image/*,video/*,audio/*", disabled: C || l, onChange: (g) => {
            D(Ke(g.currentTarget.files ?? [])), g.currentTarget.value = "";
          } })
        ] }),
        /* @__PURE__ */ r("label", { class: "td-asset-picker-button", children: [
          e === "zh" ? "选择文件夹" : "Choose folder",
          /* @__PURE__ */ r("input", { ref: w, type: "file", multiple: !0, disabled: C || l, onChange: (g) => {
            const P = Ke(g.currentTarget.files ?? []);
            g.currentTarget.value = "", J(async (E) => (E(P.length), P));
          } })
        ] })
      ] })
    ] }),
    f.length > 0 && /* @__PURE__ */ r("div", { class: "td-asset-batch-warning", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `已跳过 ${f.length} 个不支持的文件：${f.join("、")}` : `Skipped ${f.length} unsupported files: ${f.join(", ")}` }),
      /* @__PURE__ */ r("button", { onClick: () => h([]), children: "×" })
    ] }),
    /* @__PURE__ */ r("div", { class: "td-asset-batch-summary", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `共 ${a.length} 项 · 已导入 ${ue} · 待处理 ${M}${v ? ` · 失败 ${v}` : ""}` : `${a.length} items · ${ue} imported · ${M} pending${v ? ` · ${v} failed` : ""}` }),
      /* @__PURE__ */ r("button", { disabled: C || !a.length, onClick: () => p([]), children: e === "zh" ? "清空列表" : "Clear list" })
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
        const P = le(g), E = C || g.status === "imported" || g.status === "uploading";
        return /* @__PURE__ */ r("div", { class: `td-asset-batch-row ${P || g.status === "error" ? "invalid" : ""} ${g.status === "imported" ? "imported" : ""}`, children: [
          /* @__PURE__ */ r("div", { class: "td-asset-batch-file", children: [
            /* @__PURE__ */ r("strong", { title: g.sourcePath, children: g.sourcePath }),
            /* @__PURE__ */ r("small", { children: [
              (g.file.size / 1024 / 1024).toFixed(1),
              " MB · ",
              g.status === "pending" ? e === "zh" ? "待导入" : "Pending" : g.status === "uploading" ? e === "zh" ? "上传中" : "Uploading" : g.status === "imported" ? e === "zh" ? "已完成" : "Imported" : e === "zh" ? "失败" : "Failed"
            ] }),
            (P || g.error) && /* @__PURE__ */ r("em", { title: P || g.error, children: P || g.error })
          ] }),
          /* @__PURE__ */ r("input", { disabled: E, value: g.alias, onInput: (R) => z(g.id, { alias: R.currentTarget.value, status: "pending", error: "" }) }),
          /* @__PURE__ */ r("select", { disabled: E, value: g.kind, onChange: (R) => {
            const H = R.currentTarget.value;
            z(g.id, { kind: H, durationSeconds: H === "image" ? null : g.durationSeconds ?? 2, includeVideoAudio: H === "video" && g.includeVideoAudio, status: "pending", error: "" });
          }, children: [
            /* @__PURE__ */ r("option", { value: "image", children: He("image", e) }),
            /* @__PURE__ */ r("option", { value: "video", children: He("video", e) }),
            /* @__PURE__ */ r("option", { value: "audio", children: He("audio", e) })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", disabled: E || g.kind === "image", value: g.durationSeconds ?? "", onInput: (R) => z(g.id, { durationSeconds: R.currentTarget.value ? Number(R.currentTarget.value) : null, status: "pending", error: "" }) }),
            /* @__PURE__ */ r("span", { children: g.kind === "image" ? "—" : e === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-audio", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", disabled: E || g.kind !== "video", checked: g.kind === "video" && g.includeVideoAudio, onChange: (R) => z(g.id, { includeVideoAudio: R.currentTarget.checked }) }),
            /* @__PURE__ */ r("span", { children: g.kind === "video" ? g.includeVideoAudio ? e === "zh" ? "开" : "ON" : e === "zh" ? "关" : "OFF" : "—" })
          ] }),
          /* @__PURE__ */ r("button", { class: "danger", disabled: E, onClick: () => p((R) => R.filter((H) => H.id !== g.id)), children: e === "zh" ? "移除" : "Remove" })
        ] }, g.id);
      })
    ] }),
    /* @__PURE__ */ r("footer", { children: [
      /* @__PURE__ */ r("button", { disabled: C, onClick: N, children: e === "zh" ? "关闭" : "Close" }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: C || l || !a.some((g) => g.status === "pending" || g.status === "error"), onClick: () => void ce(), children: l ? e === "zh" ? "正在扫描…" : "Scanning…" : C ? e === "zh" ? "正在导入…" : "Importing…" : v ? e === "zh" ? "重试失败项" : "Retry failed" : e === "zh" ? "开始导入" : "Start import" })
    ] })
  ] }) });
}
function Mr(e, t) {
  return { projectName: e, runId: t };
}
async function Rr(e, t) {
  const n = await fetch("/theodore-director/v1/project/clear", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Mr(e, t))
  }), o = await n.json();
  if (!n.ok || !o.ok) throw new Error(o.error || `HTTP ${n.status}`);
  return o.path || "";
}
function ie(e, t) {
  const n = e.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!n || n.startsWith("/") || /^[A-Za-z]:\//.test(n)) return null;
  const o = n.split("/").filter(Boolean), i = o.pop();
  if (!i || o.some((a) => a === "..")) return null;
  const s = new URLSearchParams({ filename: i, type: t });
  return o.length && s.set("subfolder", o.join("/")), `/view?${s.toString()}`;
}
function Vt(e) {
  return ie(e, "input");
}
function oe(e) {
  return e.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function ft({ asset: e, compact: t = !1 }) {
  const n = Vt(e.path), o = `td-media-preview ${t ? "compact" : ""}`;
  return n ? e.kind === "image" ? /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("img", { src: n, alt: e.alias, loading: "lazy" }) }) : e.kind === "video" ? /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("video", { src: n, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("audio", { src: n, controls: !0, preload: "metadata" }) }) : e.path ? /* @__PURE__ */ r("div", { class: `${o} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ r("div", { class: `${o} empty`, children: "尚未选择素材 / No media selected" });
}
function Lr(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > e.length) return null;
  const o = e.slice(0, t).lastIndexOf("@");
  if (o < 0) return null;
  const i = o > 0 ? e[o - 1] : "";
  if (i && /[A-Za-z0-9_.+-]/.test(i)) return null;
  const s = e.slice(o + 1, t);
  return /[\s{}@]/u.test(s) ? null : { start: o, end: t, query: s };
}
function Nr(e, t) {
  const n = t.trim().toLocaleLowerCase();
  if (!n) return e;
  const o = [], i = [];
  for (const s of e)
    s.alias.toLocaleLowerCase().includes(n) ? o.push(s) : oe(s.path).toLocaleLowerCase().includes(n) && i.push(s);
  return [...o, ...i];
}
function Dr(e, t, n) {
  const o = `{{ref:${n}}}`;
  return {
    value: `${e.slice(0, t.start)}${o}${e.slice(t.end)}`,
    caret: t.start + o.length
  };
}
const qt = String.raw`\{\{ref:([^{}]+)}}`;
function gt() {
  return new RegExp(qt, "g");
}
function Wt(e, t) {
  return e.assets.filter((n) => n.enabled && n.path.trim() && (!(n.shotIds ?? []).length || (n.shotIds ?? []).includes(t.id)) && !(t.disabledAssetIds ?? []).includes(n.id));
}
function Kt(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const o of Wt(e, t)) n.set(o.alias, o);
  return n;
}
function Gt(e, t, n) {
  const o = n.trim(), i = o.endsWith(".audio"), s = i ? o.slice(0, -6) : o, a = Kt(e, t).get(s);
  return a ? !i || a.kind === "video" && a.includeVideoAudio : !1;
}
function bt(e, t) {
  const n = e.shots.filter((o) => o.enabled);
  return n.length > 0 && n.every((o) => Gt(e, o, t));
}
function Fr(e) {
  return {
    ...e,
    assets: [],
    shots: e.shots.map((t) => ({ ...t, disabledAssetIds: [] }))
  };
}
function Jt(e, t) {
  const n = [], o = Kt(e, t), i = [e.promptPrefix, t.prompt, e.promptSuffix].filter(Boolean).join(`
`), s = [...i.matchAll(gt())].map((m) => m[1].trim()), a = [], p = /* @__PURE__ */ new Set(), f = (m) => {
    p.has(m.id) || (p.add(m.id), a.push(m));
  };
  [...o.values()].filter((m) => m.fixed).sort((m, T) => m.fixedOrder - T.fixedOrder || m.alias.localeCompare(T.alias)).forEach(f);
  for (const m of s) {
    const T = m.endsWith(".audio") ? m.slice(0, -6) : m, z = o.get(T);
    if (!z) {
      n.push(`未找到或已禁用素材：${m}`);
      continue;
    }
    m.endsWith(".audio") && (z.kind !== "video" || !z.includeVideoAudio) && n.push(`视频伴音未启用：${m}`), f(z);
  }
  const h = a.filter((m) => m.kind === "image"), x = a.filter((m) => m.kind === "video"), c = x.filter((m) => m.includeVideoAudio), l = a.filter((m) => m.kind === "audio"), y = c.length + l.length, j = h.length + x.length + l.length;
  h.length > 9 && n.push(`参考图 ${h.length}/9，超出 H3 上限`), x.length > 3 && n.push(`参考视频 ${x.length}/3，超出 H3 上限`), y > 3 && n.push(`有效音频 ${y}/3，超出 H3 总上限`), j > 12 && n.push(`混合文件 ${j}/12，超出 H3 上限`), y && !h.length && !x.length && n.push("音频参考不能单独使用");
  const k = x.filter((m) => typeof m.durationSeconds == "number");
  for (const m of x) (m.durationSeconds == null || m.durationSeconds < 2 || m.durationSeconds > 15) && n.push(`视频 ${m.alias} 的时长必须为 2–15 秒`);
  k.reduce((m, T) => m + (T.durationSeconds ?? 0), 0) > 15 && n.push("参考视频总时长超过 15 秒");
  const C = [...c.map((m) => m.audioDurationSeconds ?? m.durationSeconds), ...l.map((m) => m.durationSeconds)];
  C.some((m) => m == null || m < 2 || m > 15) && n.push("每路有效音频时长必须为 2–15 秒"), C.reduce((m, T) => m + (T ?? 0), 0) > 15 && n.push("有效音频总时长超过 15 秒");
  const I = /* @__PURE__ */ new Map();
  h.forEach((m, T) => I.set(m.alias, `<Picture ${T + 1}>`)), x.forEach((m, T) => I.set(m.alias, `<Video ${T + 1}>`)), c.forEach((m, T) => I.set(`${m.alias}.audio`, `<Audio ${T + 1}>`)), l.forEach((m, T) => I.set(m.alias, `<Audio ${c.length + T + 1}>`));
  const u = i.replace(gt(), (m, T) => I.get(T.trim()) ?? m), w = [...I.entries()].map(([m, T]) => ({ label: T, alias: m, kind: T.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: u, errors: n, slots: w, mixedFiles: j, audioCount: y };
}
function Ur(e) {
  var s, a, p, f, h, x;
  const t = [], n = /* @__PURE__ */ new Set(["off", "super_resolution_second_pass", "latent_upscale_second_pass", "super_resolution_only"]);
  (a = (s = e.project) == null ? void 0 : s.name) != null && a.trim() || t.push("Project name 不能为空"), (f = (p = e.project) == null ? void 0 : p.runId) != null && f.trim() || t.push("Run ID 不能为空"), (!Array.isArray(e.shots) || !e.shots.some((c) => c.enabled)) && t.push("至少需要一个启用分镜");
  const o = /* @__PURE__ */ new Set();
  for (const c of e.shots ?? [])
    (!((h = c.id) != null && h.trim()) || o.has(c.id)) && t.push(`分镜 ID 为空或重复：${c.id || "(空)"}`), o.add(c.id), c.durationSeconds > 0 || t.push(`分镜 ${c.id} 的时长必须大于 0`), n.has(c.secondSamplingMode) || t.push(`分镜 ${c.id} 的高清处理模式无效`);
  const i = /* @__PURE__ */ new Set();
  for (const c of e.assets ?? []) {
    const l = (x = c.alias) == null ? void 0 : x.toLocaleLowerCase();
    (!c.alias || /[\s{}]/.test(c.alias) || c.alias.endsWith(".audio") || i.has(l)) && t.push(`素材别名无效或重复：${c.alias || "(空)"}`), i.add(l), c.enabled && !c.path && t.push(`素材 ${c.alias} 尚未选择文件`);
  }
  for (const c of e.shots.filter((l) => l.enabled)) t.push(...Jt(e, c).errors.map((l) => `${c.title}: ${l}`));
  return [...new Set(t)];
}
function Or(e, t) {
  const n = [], o = new RegExp(qt, "g");
  let i = 0;
  for (const s of e.matchAll(o)) {
    const a = s.index ?? 0;
    a > i && n.push({ text: e.slice(i, a), reference: !1 }), n.push({ text: s[0], reference: !0, valid: t(s[1]) }), i = a + s[0].length;
  }
  return i < e.length && n.push({ text: e.slice(i), reference: !1 }), n;
}
const Hr = [
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
function Br(e, t) {
  const n = window.getComputedStyle(e), o = e.getBoundingClientRect(), i = document.createElement("div");
  i.setAttribute("aria-hidden", "true"), i.style.position = "fixed", i.style.visibility = "hidden", i.style.pointerEvents = "none", i.style.left = `${o.left}px`, i.style.top = `${o.top}px`, i.style.width = `${e.offsetWidth}px`, i.style.height = `${e.offsetHeight}px`, i.style.overflow = "hidden", i.style.whiteSpace = "pre-wrap";
  for (const f of Hr) i.style[f] = n[f];
  i.append(document.createTextNode(e.value.slice(0, t)));
  const s = document.createElement("span");
  s.textContent = "​", i.append(s), document.body.append(i), i.scrollTop = e.scrollTop, i.scrollLeft = e.scrollLeft;
  const a = s.getBoundingClientRect(), p = Number.parseFloat(n.lineHeight) || Number.parseFloat(n.fontSize) * 1.45 || 20;
  return i.remove(), { left: a.left, top: a.top, bottom: a.top + p };
}
const Vr = {
  zh: { image: "图片", video: "视频", audio: "音频" },
  en: { image: "Image", video: "Video", audio: "Audio" }
};
function Be({ value: e, rows: t, onInput: n, isReferenceValid: o, mentionAssets: i, mentionLanguage: s = "zh" }) {
  const a = de(null), p = de(null), f = de(null), h = de(null), x = de(!1), c = de(!1), l = de([]), y = de([]), j = de(`td-reference-mention-${Math.random().toString(36).slice(2)}`).current, [k, C] = A(null), [I, u] = A(0), [w, m] = A(null), T = Or(e, o), z = fe(
    () => k && i ? Nr(i, k.query) : [],
    [k, i]
  ), O = () => {
    C(null), m(null), u(0);
  }, D = (v) => {
    if (!i || v.selectionStart !== v.selectionEnd) {
      O();
      return;
    }
    const M = Lr(v.value, v.selectionStart);
    if (!M) {
      O();
      return;
    }
    C((N) => N && N.start === M.start && N.end === M.end && N.query === M.query ? N : M);
  }, J = () => {
    var te;
    if (!k || !f.current) return;
    const v = Br(f.current, k.end), M = 8, N = Math.min(390, Math.max(240, window.innerWidth - M * 2)), g = Math.min(320, Math.max(150, window.innerHeight - M * 2)), P = Math.min(((te = h.current) == null ? void 0 : te.offsetHeight) || g, g), E = Math.min(Math.max(v.left, M), window.innerWidth - N - M), H = v.bottom + 6 + P > window.innerHeight - M && v.top - P - 6 >= M ? v.top - P - 6 : Math.min(v.bottom + 6, window.innerHeight - P - M);
    m((X) => X && X.left === E && X.top === H && X.width === N && X.maxHeight === g ? X : { left: E, top: H, width: N, maxHeight: g });
  };
  br(J, [k, z.length, !!w]), ae(() => {
    if (!k) return;
    const v = () => J(), M = (N) => {
      var g, P;
      N.target instanceof Node && ((g = a.current) != null && g.contains(N.target) || (P = h.current) != null && P.contains(N.target)) || O();
    };
    return window.addEventListener("resize", v), document.addEventListener("scroll", v, !0), document.addEventListener("mousedown", M), () => {
      window.removeEventListener("resize", v), document.removeEventListener("scroll", v, !0), document.removeEventListener("mousedown", M);
    };
  }, [k]), ae(() => u(0), [k == null ? void 0 : k.query]), ae(() => {
    I >= z.length && u(Math.max(0, z.length - 1));
  }, [I, z.length]), ae(() => {
    var v, M;
    (M = (v = h.current) == null ? void 0 : v.querySelector('[aria-selected="true"]')) == null || M.scrollIntoView({ block: "nearest" });
  }, [I, z.length]);
  const q = (v) => {
    p.current && (p.current.scrollTop = v.currentTarget.scrollTop, p.current.scrollLeft = v.currentTarget.scrollLeft), k && J();
  }, Z = (v, M) => {
    if (!f.current) return;
    const N = f.current;
    c.current = !0, N.value = v, N.dispatchEvent(new Event("input", { bubbles: !0 })), c.current = !1, O(), window.requestAnimationFrame(() => {
      N.focus({ preventScroll: !0 }), N.setSelectionRange(M, M);
    });
  }, le = (v) => {
    if (!(v.ctrlKey || v.metaKey) || v.altKey) return !1;
    const M = v.key.toLocaleLowerCase(), N = M === "y" || M === "z" && v.shiftKey;
    if (!(M === "z" && !v.shiftKey) && !N) return !1;
    const P = N ? y.current : l.current, E = P[P.length - 1], R = N ? E == null ? void 0 : E.beforeValue : E == null ? void 0 : E.afterValue;
    return !E || v.currentTarget.value !== R ? !1 : (v.preventDefault(), P.pop(), (N ? l.current : y.current).push(E), Z(N ? E.afterValue : E.beforeValue, N ? E.afterCaret : E.beforeCaret), !0);
  }, ce = (v) => {
    if (!k || !f.current) return;
    const M = f.current, N = Dr(M.value, k, v.alias), g = `{{ref:${v.alias}}}`, P = {
      beforeValue: M.value,
      afterValue: N.value,
      beforeCaret: k.end,
      afterCaret: N.caret
    };
    M.focus({ preventScroll: !0 }), M.setSelectionRange(k.start, k.end);
    let E = !1;
    try {
      document.execCommand("insertText", !1, g), E = M.value === N.value;
    } catch {
    }
    E || (M.value = N.value, M.dispatchEvent(new Event("input", { bubbles: !0 }))), l.current.push(P), l.current.length > 100 && l.current.shift(), y.current = [], O(), window.requestAnimationFrame(() => {
      var R, H;
      (R = f.current) == null || R.focus({ preventScroll: !0 }), (H = f.current) == null || H.setSelectionRange(N.caret, N.caret);
    });
  }, ue = (v) => {
    if (!(v.isComposing || x.current) && !le(v) && k) {
      if (v.key === "Escape") {
        v.preventDefault(), O();
        return;
      }
      if (z.length) {
        if (v.key === "ArrowDown" || v.key === "ArrowUp") {
          v.preventDefault();
          const M = v.key === "ArrowDown" ? 1 : -1;
          u((N) => (N + M + z.length) % z.length);
          return;
        }
        (v.key === "Enter" || v.key === "Tab") && (v.preventDefault(), ce(z[I] ?? z[0]));
      }
    }
  };
  return /* @__PURE__ */ r("span", { ref: a, class: "td-highlight-textarea", children: [
    /* @__PURE__ */ r("pre", { ref: p, class: "td-highlight-backdrop", "aria-hidden": "true", children: [
      T.map((v, M) => v.reference ? /* @__PURE__ */ r("mark", { class: v.valid ? "valid" : "invalid", children: v.text }, M) : v.text),
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
        "aria-autocomplete": i ? "list" : void 0,
        "aria-controls": k ? j : void 0,
        "aria-expanded": i ? !!k : void 0,
        "aria-activedescendant": k && z[I] ? `${j}-${z[I].id}` : void 0,
        onInput: (v) => {
          n(v);
          const M = v instanceof InputEvent ? v.inputType : "";
          !c.current && M !== "historyUndo" && M !== "historyRedo" && (y.current = []), x.current || D(v.currentTarget);
        },
        onClick: (v) => D(v.currentTarget),
        onSelect: (v) => {
          x.current || D(v.currentTarget);
        },
        onKeyDown: ue,
        onKeyUp: (v) => {
          !x.current && !["ArrowDown", "ArrowUp", "Enter", "Tab", "Escape"].includes(v.key) && D(v.currentTarget);
        },
        onCompositionStart: () => {
          x.current = !0;
        },
        onCompositionEnd: (v) => {
          x.current = !1, D(v.currentTarget);
        },
        onBlur: () => window.setTimeout(() => {
          document.activeElement !== f.current && O();
        }, 0),
        onScroll: q
      }
    ),
    k && w && /* @__PURE__ */ r(
      "div",
      {
        ref: h,
        id: j,
        class: "td-reference-mention-menu",
        role: "listbox",
        "aria-label": s === "zh" ? "选择参考素材" : "Choose reference media",
        style: { left: w.left, top: w.top, width: w.width, maxHeight: w.maxHeight },
        onMouseDown: (v) => v.preventDefault(),
        children: [
          /* @__PURE__ */ r("header", { children: [
            /* @__PURE__ */ r("strong", { children: s === "zh" ? "@ 参考素材" : "@ Reference media" }),
            /* @__PURE__ */ r("span", { children: z.length })
          ] }),
          z.length ? /* @__PURE__ */ r("div", { class: "td-reference-mention-options", children: z.map((v, M) => {
            const N = v.kind === "image" ? Vt(v.path) : null, g = oe(v.path);
            return /* @__PURE__ */ r(
              "button",
              {
                id: `${j}-${v.id}`,
                type: "button",
                role: "option",
                "aria-selected": M === I,
                class: M === I ? "active" : "",
                onMouseEnter: () => u(M),
                onClick: () => ce(v),
                children: [
                  /* @__PURE__ */ r("span", { class: `td-reference-mention-thumb ${v.kind}`, children: N ? /* @__PURE__ */ r("img", { src: N, alt: "", loading: "lazy" }) : /* @__PURE__ */ r("span", { children: v.kind === "image" ? "▧" : v.kind === "video" ? "▶" : "♫" }) }),
                  /* @__PURE__ */ r("span", { class: "td-reference-mention-copy", children: [
                    /* @__PURE__ */ r("strong", { children: v.alias }),
                    /* @__PURE__ */ r("small", { children: g || v.path })
                  ] }),
                  /* @__PURE__ */ r("em", { children: Vr[s][v.kind] })
                ]
              },
              v.id
            );
          }) }) : /* @__PURE__ */ r("p", { class: "td-reference-mention-empty", children: s === "zh" ? "没有匹配的可用素材" : "No available media matches" })
        ]
      }
    )
  ] });
}
const qr = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", postprocess: "后处理", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", postprocess: "Post-process", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function ve(e, t) {
  return qr[e][t];
}
function he(e) {
  return (Array.isArray(e.results) && e.results.length ? e.results : e.path ? [{ path: e.path, bytes: e.bytes, modifiedAt: e.modifiedAt, stage: e.stage, processingMode: e.processingMode, sourcePath: e.sourcePath, completedAt: e.completedAt }] : []).filter((n) => typeof n.path == "string" && n.path.trim().length > 0).sort((n, o) => (o.modifiedAt ?? 0) - (n.modifiedAt ?? 0));
}
function Qt(e, t) {
  const n = /_video_(\d+)/i.exec(e.replace(/\\/g, "/"));
  return n ? Number(n[1]) : t;
}
function Wr(e, t) {
  return e.stage === "second_pass" && t !== "super_resolution_only" ? "second_pass_requires_upscale_only" : e.stage === "upscaled" ? "upscaled_is_terminal" : null;
}
function Kr(e, t) {
  return Wr(e, t) === null;
}
function Gr(e) {
  return ["super_resolution_second_pass", "latent_upscale_second_pass", "super_resolution_only"].filter((n) => Kr(e, n));
}
function ze({ src: e, alt: t }) {
  const n = de(null), [o, i] = A(!1);
  return ae(() => {
    const s = n.current;
    if (!s) return;
    if (!("IntersectionObserver" in window)) {
      i(!0);
      return;
    }
    const a = new IntersectionObserver((p) => {
      i(p.some((f) => f.isIntersecting));
    }, { rootMargin: "160px" });
    return a.observe(s), () => a.disconnect();
  }, []), /* @__PURE__ */ r("div", { class: "td-result-thumb", ref: n, children: o ? /* @__PURE__ */ r("video", { src: e, "aria-label": t, muted: !0, playsInline: !0, preload: "metadata", onLoadedMetadata: (s) => {
    const a = s.currentTarget;
    Number.isFinite(a.duration) && a.duration > 0.02 && (a.currentTime = Math.min(0.25, Math.max(0, a.duration - 0.05)));
  } }) : /* @__PURE__ */ r("span", { children: "…" }) });
}
function Xe(e) {
  let t = 0;
  return e.shots.map((n, o) => {
    const i = {
      key: `${o}:${n.id}`,
      shot: n,
      sourceIndex: o,
      activeIndex: n.enabled ? t : -1
    };
    return n.enabled && (t += 1), i;
  });
}
function Jr(e, t, n) {
  return e.filter((o) => o.shot.enabled && t[o.key]).map((o) => ({
    shotId: o.shot.id,
    activeIndex: o.activeIndex,
    path: n[o.key] ?? ""
  }));
}
function Qr(e, t, n) {
  const o = {};
  return e.forEach((i) => {
    const s = i.sourceIndex + 1;
    o[i.key] = i.shot.enabled && s >= t && s <= n;
  }), o;
}
function Yr(e, t, n) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId, shotId: t, activeIndex: String(n) }).toString()}`;
}
function Zr(e, t, n) {
  return t === "latent_upscale_second_pass" ? n === "zh" ? "Latent 放大二采" : "Latent upscale 2nd pass" : t === "super_resolution_second_pass" || e === "second_pass" ? n === "zh" ? "超分二采" : "Super-res 2nd pass" : t === "super_resolution_only" || e === "upscaled" ? n === "zh" ? "只超分" : "Super-res only" : e === "first_pass" ? n === "zh" ? "一采" : "1st pass" : n === "zh" ? "旧结果" : "Legacy";
}
function Xr(e, t) {
  return e === "latent_upscale_second_pass" ? t === "zh" ? "Latent 放大二采" : "Latent upscale 2nd pass" : e === "super_resolution_only" ? t === "zh" ? "只超分" : "Super-res only" : t === "zh" ? "超分二采" : "Super-res 2nd pass";
}
function en({ plan: e, language: t, queueSecondPass: n }) {
  const o = fe(() => Xe(e), [e]), [i, s] = A({}), [a, p] = A({}), [f, h] = A(null), [x, c] = A(0), [l, y] = A({});
  ae(() => {
    let k = !1;
    const C = {};
    return o.forEach((I) => {
      C[I.key] = { loading: !0, response: { found: !1, results: [] } };
    }), s(C), o.forEach((I) => {
      fetch(Yr(e, I.shot.id, I.activeIndex)).then(async (u) => {
        const w = await u.json();
        if (!u.ok) throw new Error(w.error || `HTTP ${u.status}`);
        k || s((m) => ({ ...m, [I.key]: { loading: !1, response: w } }));
      }).catch((u) => {
        k || s((w) => ({ ...w, [I.key]: { loading: !1, response: { found: !1, results: [], error: String(u) } } }));
      });
    }), () => {
      k = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((k) => k.id).join("|"), x]);
  const j = async (k, C, I) => {
    if (!n) return;
    const u = `${C}:${I}`;
    p((w) => ({ ...w, [u]: { state: "queued" } }));
    try {
      await n({
        plan: e,
        shotId: k,
        sourcePath: C,
        requestId: `td2_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`,
        processingMode: I
      }), p((w) => ({ ...w, [u]: { state: "done" } })), c((w) => w + 1);
    } catch (w) {
      p((m) => ({ ...m, [u]: { state: "error", message: String(w instanceof Error ? w.message : w) } }));
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
    !n && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "当前工作流缺少后处理二采支流，请重新载入仓库中的 V7 导播台示例工作流。" : "This workflow does not contain the standalone second-pass branch. Reload the V7 example workflow from the repository." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: o.map((k) => {
      const C = i[k.key], I = he((C == null ? void 0 : C.response) ?? { results: [] });
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
        C != null && C.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading results…" }) : C != null && C.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : I.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: I.map((u) => {
          const w = ie(u.path, "output"), m = Gr(u), T = m.includes(l[u.path]) ? l[u.path] : m[0], z = T ? a[`${u.path}:${T}`] : void 0;
          return /* @__PURE__ */ r("div", { class: "td-second-pass-result", children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", onClick: () => w && h({ path: u.path, title: `${k.shot.id} · ${k.shot.title}` }), children: [
              w ? /* @__PURE__ */ r(ze, { src: w, alt: oe(u.path) }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  Zr(u.stage, u.processingMode, t),
                  (u.stage === "legacy_unknown" || !u.stage) && /* @__PURE__ */ r("em", { children: t === "zh" ? "兼容" : "Compatible" })
                ] }),
                /* @__PURE__ */ r("span", { title: u.path, children: oe(u.path) }),
                /* @__PURE__ */ r("small", { children: u.bytes ? `${(u.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-second-pass-actions", children: [
              T ? /* @__PURE__ */ r("select", { "aria-label": t === "zh" ? "该视频可用的处理方式" : "Available processing modes for this video", value: T, onChange: (O) => y((D) => ({ ...D, [u.path]: O.currentTarget.value })), children: m.map((O) => /* @__PURE__ */ r("option", { value: O, children: Xr(O, t) })) }) : /* @__PURE__ */ r("span", { class: "td-second-pass-terminal", children: t === "zh" ? "只超分后不可再处理" : "Upscaled: no further processing" }),
              /* @__PURE__ */ r("button", { class: "primary td-second-pass-run", disabled: !n || !T || (z == null ? void 0 : z.state) === "queued", onClick: () => T && void j(k.shot.id, u.path, T), children: (z == null ? void 0 : z.state) === "queued" ? t === "zh" ? "排队/执行中…" : "Queued/running…" : (z == null ? void 0 : z.state) === "done" ? t === "zh" ? "处理完成" : "Completed" : t === "zh" ? "开始处理" : "Process" })
            ] }),
            (z == null ? void 0 : z.state) === "error" && /* @__PURE__ */ r("div", { class: "td-second-pass-error", children: z.message })
          ] }, u.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "没有可用的生成结果" : "No generated result available" })
      ] }, k.key);
    }) }),
    f && ie(f.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => h(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (k) => k.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: f.title }),
        /* @__PURE__ */ r("button", { onClick: () => h(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: ie(f.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { children: oe(f.path) })
    ] }) })
  ] });
}
function tn(e, t, n) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId, shotId: t, activeIndex: String(n) }).toString()}`;
}
function rn(e) {
  return `/theodore-director/v1/postprocess/merged-videos?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId }).toString()}`;
}
async function vt(e) {
  const t = await fetch(e), n = await t.json();
  if (!t.ok) throw new Error(n.error || `HTTP ${t.status}`);
  return n;
}
function xt(e, t) {
  const n = he(e).filter((o) => o.path !== t);
  return { found: !!n.length, count: n.length, results: n };
}
function nn(e, t, n, o = "") {
  return { projectName: e.project.name, runId: e.project.runId, kind: t, shotId: o, path: n };
}
function on(e, t) {
  return e.processingMode === "latent_upscale_second_pass" ? t === "zh" ? "Latent 放大二采" : "Latent upscale 2nd pass" : e.processingMode === "super_resolution_second_pass" || e.stage === "second_pass" ? t === "zh" ? "超分二采" : "Super-res 2nd pass" : e.processingMode === "super_resolution_only" || e.stage === "upscaled" ? t === "zh" ? "只超分" : "Super-res only" : e.stage === "first_pass" ? t === "zh" ? "一采" : "1st pass" : t === "zh" ? "旧结果" : "Legacy";
}
function sn({ plan: e, language: t }) {
  const n = fe(() => Xe(e), [e]), [o, i] = A({}), [s, a] = A({ loading: !0, response: { found: !1, results: [] } }), [p, f] = A({}), [h, x] = A(null), [c, l] = A(""), [y, j] = A(0);
  ae(() => {
    let u = !1;
    const w = {};
    return n.forEach((m) => {
      w[m.key] = { loading: !0, response: { found: !1, results: [] } };
    }), i(w), l(""), n.forEach((m) => {
      vt(tn(e, m.shot.id, m.activeIndex)).then((T) => {
        u || i((z) => ({ ...z, [m.key]: { loading: !1, response: T } }));
      }).catch((T) => {
        u || i((z) => ({ ...z, [m.key]: { loading: !1, response: { found: !1, results: [], error: String(T) } } }));
      });
    }), () => {
      u = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((u) => u.id).join("|"), y]), ae(() => {
    let u = !1;
    return a({ loading: !0, response: { found: !1, results: [] } }), vt(rn(e)).then((w) => {
      u || a({ loading: !1, response: w });
    }).catch((w) => {
      u || a({ loading: !1, response: { found: !1, results: [], error: String(w) } });
    }), () => {
      u = !0;
    };
  }, [e.project.name, e.project.runId, y]);
  const k = async (u, w, m = "", T = "") => {
    const z = oe(w.path);
    if (window.confirm(t === "zh" ? `确定将“${z}”移入系统回收站吗？
可从系统回收站恢复。` : `Move “${z}” to the system trash?
You can restore it from the trash.`)) {
      (h == null ? void 0 : h.path) === w.path && x(null), f((D) => ({ ...D, [w.path]: !0 })), l(""), await new Promise((D) => requestAnimationFrame(() => requestAnimationFrame(() => D())));
      try {
        const D = await fetch("/theodore-director/v1/postprocess/delete-video", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(nn(e, u, w.path, m))
        }), J = await D.json();
        if (!D.ok) throw new Error(J.error || `HTTP ${D.status}`);
        u === "merged" ? a((q) => ({ ...q, response: xt(q.response, w.path) })) : i((q) => {
          var Z;
          return {
            ...q,
            [T]: { ...q[T], response: xt(((Z = q[T]) == null ? void 0 : Z.response) ?? { found: !1, results: [] }, w.path) }
          };
        });
      } catch (D) {
        l(String(D instanceof Error ? D.message : D));
      } finally {
        f((D) => {
          const J = { ...D };
          return delete J[w.path], J;
        });
      }
    }
  }, C = (u, w, m, T = "", z = "") => {
    const O = ie(u.path, "output"), D = !!p[u.path];
    return /* @__PURE__ */ r("div", { class: `td-delete-result ${D ? "deleting" : ""}`, children: [
      /* @__PURE__ */ r("button", { class: "td-post-result-choice", disabled: D || !O, onClick: () => O && x({ path: u.path, title: m }), children: [
        D ? /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "…" }) : O ? /* @__PURE__ */ r(ze, { src: O, alt: dn(u, t) }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
        /* @__PURE__ */ r("span", { children: [
          /* @__PURE__ */ r("strong", { children: w === "merged" ? t === "zh" ? "合并视频" : "Merged video" : on(u, t) }),
          /* @__PURE__ */ r("span", { title: u.path, children: oe(u.path) }),
          /* @__PURE__ */ r("small", { children: u.bytes ? `${(u.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
        ] })
      ] }),
      /* @__PURE__ */ r("button", { class: "danger td-delete-video-button", disabled: D, onClick: () => void k(w, u, T, z), children: D ? t === "zh" ? "正在移动…" : "Moving…" : t === "zh" ? "移入回收站" : "Move to trash" })
    ] }, u.path);
  }, I = he(s.response);
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
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: n.map((u) => {
      const w = o[u.key], m = he((w == null ? void 0 : w.response) ?? { results: [] });
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
        w != null && w.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading results…" }) : w != null && w.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败" : "Unable to load results" }) : m.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: m.map((T) => C(T, "shot", `${u.shot.id} · ${u.shot.title}`, u.shot.id, u.key)) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "没有生成视频" : "No generated videos" })
      ] }, u.key);
    }) }),
    /* @__PURE__ */ r("section", { class: "td-post-merged td-delete-merged", children: [
      /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并视频" : "Merged videos" }),
        /* @__PURE__ */ r("span", { class: `td-result-state ${I.length ? "found" : ""}`, children: s.loading ? t === "zh" ? "查询中" : "Loading" : t === "zh" ? `${I.length} 个结果` : `${I.length} results` })
      ] }) }),
      s.loading ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "正在查询合并视频…" : "Loading merged videos…" }) : s.response.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: t === "zh" ? "无法查询合并视频" : "Unable to load merged videos" }) : I.length ? /* @__PURE__ */ r("div", { class: "td-delete-merged-list", children: I.map((u) => C(u, "merged", t === "zh" ? "合并视频" : "Merged video")) }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "没有合并视频" : "No merged videos" })
    ] }),
    h && ie(h.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => x(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (u) => u.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: h.title }),
        /* @__PURE__ */ r("button", { "aria-label": t === "zh" ? "关闭预览" : "Close preview", onClick: () => x(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: ie(h.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { title: h.path, children: oe(h.path) })
    ] }) })
  ] });
}
function dn(e, t) {
  return `${t === "zh" ? "视频" : "Video"} ${oe(e.path)}`;
}
async function _t(e) {
  const t = await fetch(e), n = await t.json();
  if (!t.ok) throw new Error(n.error || `HTTP ${t.status}`);
  return n;
}
function an(e, t, n) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t,
    activeIndex: String(n)
  }).toString()}`;
}
function ln(e) {
  return `/theodore-director/v1/postprocess/merged-videos?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId }).toString()}`;
}
function cn({ plan: e, language: t, queueSecondPass: n }) {
  const [o, i] = A("merge");
  return /* @__PURE__ */ r("section", { class: "td-postprocess-shell", children: [
    /* @__PURE__ */ r("div", { class: "td-post-mode-tabs", role: "tablist", children: [
      /* @__PURE__ */ r("button", { class: o === "merge" ? "active" : "", role: "tab", "aria-selected": o === "merge", onClick: () => i("merge"), children: t === "zh" ? "合并视频" : "Merge videos" }),
      /* @__PURE__ */ r("button", { class: o === "second-pass" ? "active" : "", role: "tab", "aria-selected": o === "second-pass", onClick: () => i("second-pass"), children: t === "zh" ? "单独二采" : "Standalone second pass" }),
      /* @__PURE__ */ r("button", { class: o === "delete" ? "active" : "", role: "tab", "aria-selected": o === "delete", onClick: () => i("delete"), children: t === "zh" ? "删除视频" : "Delete videos" })
    ] }),
    o === "merge" ? /* @__PURE__ */ r(pn, { plan: e, language: t }) : o === "second-pass" ? /* @__PURE__ */ r(en, { plan: e, language: t, queueSecondPass: n }) : /* @__PURE__ */ r(sn, { plan: e, language: t })
  ] });
}
function pn({ plan: e, language: t }) {
  const n = fe(() => Xe(e), [e]), [o, i] = A({}), [s, a] = A({}), [p, f] = A({}), [h, x] = A(null), [c, l] = A(!1), [y, j] = A(""), [k, C] = A(""), [I, u] = A({ found: !1, results: [] }), [w, m] = A(!1), [T, z] = A(!1), [O, D] = A(""), [J, q] = A(0), [Z, le] = A("1"), [ce, ue] = A(String(n.length || 1)), v = n.filter((_) => _.shot.enabled), M = v.length > 0 && v.every((_) => s[_.key]), N = Jr(n, s, p), g = N.filter((_) => !_.path), P = n.some((_) => {
    var S;
    return s[_.key] && ((S = o[_.key]) == null ? void 0 : S.loading);
  }), E = n.reduce(
    (_, S) => _ + (S.shot.enabled && s[S.key] ? S.shot.durationSeconds : 0),
    0
  ), R = fe(() => he(I), [I]), H = R.find((_) => _.path === O) ?? R[0];
  ae(() => {
    let _ = !1;
    const S = {}, F = {};
    return n.forEach((K) => {
      S[K.key] = K.shot.enabled, F[K.key] = { loading: !0, response: { found: !1, results: [] } };
    }), a((K) => {
      const V = {};
      return n.forEach((Y) => {
        V[Y.key] = Y.shot.enabled ? K[Y.key] ?? S[Y.key] : !1;
      }), V;
    }), i(F), j(""), n.forEach((K) => {
      _t(an(e, K.shot.id, K.activeIndex)).then((V) => {
        if (_) return;
        const Y = he(V);
        i((ee) => ({ ...ee, [K.key]: { loading: !1, response: V } })), f((ee) => {
          var re;
          return {
            ...ee,
            [K.key]: Y.some((ge) => ge.path === ee[K.key]) ? ee[K.key] : ((re = Y[0]) == null ? void 0 : re.path) ?? ""
          };
        });
      }).catch((V) => {
        _ || i((Y) => ({
          ...Y,
          [K.key]: { loading: !1, response: { found: !1, results: [], error: String(V) } }
        }));
      });
    }), () => {
      _ = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((_) => `${_.id}:${_.enabled}`).join("|"), J]), ae(() => {
    let _ = !1;
    return m(!0), _t(ln(e)).then((S) => {
      if (_) return;
      const F = he(S);
      u(S), D((K) => {
        var V;
        return F.some((Y) => Y.path === K) ? K : ((V = F[0]) == null ? void 0 : V.path) ?? "";
      });
    }).catch((S) => {
      _ || u({ found: !1, results: [], error: String(S) });
    }).finally(() => {
      _ || m(!1);
    }), () => {
      _ = !0;
    };
  }, [e.project.name, e.project.runId, J]);
  const te = () => {
    const _ = !M;
    a((S) => {
      const F = { ...S };
      return v.forEach((K) => {
        F[K.key] = _;
      }), F;
    });
  }, X = () => {
    const _ = Number(Z), S = Number(ce);
    if (!Number.isInteger(_) || !Number.isInteger(S) || _ < 1 || S < _ || S > n.length) {
      window.alert(t === "zh" ? `请输入有效范围：1 ≤ m ≤ n ≤ ${n.length}` : `Enter a valid range: 1 ≤ m ≤ n ≤ ${n.length}`);
      return;
    }
    a(Qr(n, _, S));
  }, se = async () => {
    if (!N.length) {
      window.alert(t === "zh" ? "请至少选择一个镜头" : "Select at least one shot.");
      return;
    }
    if (g.length) {
      window.alert(t === "zh" ? `以下已选镜头没有可用结果：${g.map((_) => _.shotId).join("、")}` : `Selected shots without a result: ${g.map((_) => _.shotId).join(", ")}`);
      return;
    }
    l(!0), j("");
    try {
      const _ = await fetch("/theodore-director/v1/postprocess/merge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId, selections: N })
      }), S = await _.json();
      if (!_.ok) throw new Error(S.error || `HTTP ${_.status}`);
      q((F) => F + 1);
    } catch (_) {
      j(String(_ instanceof Error ? _.message : _));
    } finally {
      l(!1);
    }
  }, Fe = async () => {
    z(!0), C("");
    try {
      const _ = await fetch("/theodore-director/v1/postprocess/open-folder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId })
      }), S = await _.json();
      if (!_.ok) throw new Error(S.error || `HTTP ${_.status}`);
    } catch (_) {
      C(String(_ instanceof Error ? _.message : _));
    } finally {
      z(!1);
    }
  }, we = H != null && H.path ? ie(H.path, "output") : null;
  return /* @__PURE__ */ r("section", { class: "td-postprocess", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并视频" : "Merge videos" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "从每个镜头选择一个结果，按当前分镜顺序进行无损合并。" : "Choose one result per shot and merge them losslessly in storyboard order." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: [
        /* @__PURE__ */ r("button", { disabled: T, onClick: Fe, children: [
          "📁 ",
          T ? t === "zh" ? "正在打开…" : "Opening…" : t === "zh" ? "打开结果文件夹" : "Open results folder"
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => q((_) => _ + 1), children: [
          "↻ ",
          t === "zh" ? "刷新结果" : "Refresh"
        ] }),
        /* @__PURE__ */ r("button", { onClick: te, children: M ? t === "zh" ? "全部取消" : "Clear all" : t === "zh" ? "一键全选" : "Select all" })
      ] })
    ] }),
    k && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "打开结果文件夹失败：" : "Unable to open results folder: ",
      k
    ] }),
    /* @__PURE__ */ r("div", { class: "td-post-summary", children: [
      /* @__PURE__ */ r("span", { children: t === "zh" ? `已选择 ${N.length}/${v.length} 个启用镜头` : `${N.length}/${v.length} enabled shots selected` }),
      /* @__PURE__ */ r("span", { children: t === "zh" ? `预计时长 ${E.toFixed(1)} 秒` : `Estimated duration ${E.toFixed(1)} sec` }),
      /* @__PURE__ */ r("div", { class: "td-post-range", role: "group", "aria-label": t === "zh" ? "合并视频范围" : "Merge video range", children: [
        /* @__PURE__ */ r("span", { children: t === "zh" ? "范围" : "Range" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: n.length, step: "1", value: Z, "aria-label": t === "zh" ? "起始镜头 m" : "Start shot m", onInput: (_) => le(_.currentTarget.value) }),
        /* @__PURE__ */ r("span", { children: "—" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: n.length, step: "1", value: ce, "aria-label": t === "zh" ? "结束镜头 n" : "End shot n", onInput: (_) => ue(_.currentTarget.value) }),
        /* @__PURE__ */ r("button", { disabled: !n.length, onClick: X, children: t === "zh" ? "确认范围" : "Apply range" })
      ] }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: c || P || !N.length || !!g.length, onClick: se, children: c ? t === "zh" ? "正在合并…" : "Merging…" : t === "zh" ? "合并所选视频" : "Merge selected videos" })
    ] }),
    y && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "合并失败：" : "Merge failed: ",
      y
    ] }),
    g.length > 0 && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "已选镜头中存在尚未生成视频的镜头。" : "Some selected shots do not have generated videos yet." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: n.map((_) => {
      const S = o[_.key], F = he((S == null ? void 0 : S.response) ?? { results: [] }), K = !!s[_.key];
      return /* @__PURE__ */ r("article", { class: `td-post-shot ${K ? "selected" : ""} ${_.shot.enabled ? "" : "disabled"}`, children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: K, disabled: !_.shot.enabled, onChange: (V) => a((Y) => ({ ...Y, [_.key]: V.currentTarget.checked })) }),
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
        S != null && S.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading generated results…" }) : S != null && S.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : F.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: F.map((V, Y) => {
          const ee = ie(V.path, "output"), re = p[_.key] === V.path, ge = Qt(V.path, F.length - Y);
          return /* @__PURE__ */ r("div", { class: `td-post-result ${re ? "selected" : ""}`, children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", role: "radio", "aria-checked": re, onClick: () => f((U) => ({ ...U, [_.key]: V.path })), children: [
              ee ? /* @__PURE__ */ r(ze, { src: ee, alt: `${_.shot.title} ${t === "zh" ? "结果" : "result"} ${ge}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  t === "zh" ? `结果 ${ge}` : `Result ${ge}`,
                  Y === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
                ] }),
                /* @__PURE__ */ r("span", { title: V.path, children: oe(V.path) }),
                /* @__PURE__ */ r("small", { children: V.bytes ? `${(V.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "td-post-result-play", disabled: !ee, title: t === "zh" ? "播放预览" : "Play preview", onClick: () => ee && x({ path: V.path, title: `${_.shot.id} · ${_.shot.title}` }), children: "▶" })
          ] }, V.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "未找到这个镜头的生成结果" : "No generated result found for this shot" })
      ] }, _.key);
    }) }),
    /* @__PURE__ */ r("section", { class: "td-post-merged", children: [
      /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并结果" : "Merged results" }),
        /* @__PURE__ */ r("span", { class: `td-result-state ${R.length ? "found" : ""}`, children: w ? t === "zh" ? "查询中" : "Checking" : t === "zh" ? `${R.length} 个结果` : `${R.length} results` })
      ] }) }),
      w ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "正在查询合并结果…" : "Loading merged results…" }) : I.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: t === "zh" ? "无法查询合并结果" : "Unable to query merged results" }) : H && we ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
        /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
          /* @__PURE__ */ r("video", { src: we, controls: !0, preload: "metadata", playsInline: !0 }, H.path),
          /* @__PURE__ */ r("div", { class: "td-generated-meta", title: H.path, children: H.path })
        ] }),
        /* @__PURE__ */ r("div", { class: "td-result-list", children: R.map((_, S) => {
          const F = ie(_.path, "output");
          return /* @__PURE__ */ r("button", { class: `td-result-item ${_.path === H.path ? "selected" : ""}`, onClick: () => D(_.path), children: [
            F ? /* @__PURE__ */ r(ze, { src: F, alt: `${t === "zh" ? "合并结果" : "Merged result"} ${R.length - S}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
            /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
              /* @__PURE__ */ r("strong", { children: [
                t === "zh" ? `合并结果 ${R.length - S}` : `Merged result ${R.length - S}`,
                S === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
              ] }),
              /* @__PURE__ */ r("span", { children: oe(_.path) }),
              /* @__PURE__ */ r("small", { children: _.bytes ? `${(_.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
            ] })
          ] }, _.path);
        }) })
      ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "还没有合并结果" : "No merged result yet" })
    ] }),
    h && ie(h.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => x(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (_) => _.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: h.title }),
        /* @__PURE__ */ r("button", { "aria-label": t === "zh" ? "关闭预览" : "Close preview", onClick: () => x(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: ie(h.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { title: h.path, children: oe(h.path) })
    ] }) })
  ] });
}
function hn(e) {
  const t = e.reduce((n, o) => {
    const i = /^shot_(\d+)$/i.exec(o.id.trim());
    return i ? Math.max(n, Number(i[1])) : n;
  }, 0);
  return Math.max(t, e.length) + 1;
}
function Yt(e, t = 5) {
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
function yt(e, t, n) {
  const o = hn(e), i = Array.from({ length: t }, (s, a) => Yt(o + a, n));
  return [...e, ...i];
}
function un(e = 5) {
  return [Yt(1, e)];
}
const Zt = (e) => `${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, Pe = (e) => JSON.parse(JSON.stringify(e)), mn = { image: "图片", video: "视频", audio: "音频" }, wt = ["off", "super_resolution_second_pass", "latent_upscale_second_pass", "super_resolution_only"];
function kt(e, t) {
  return {
    off: ["关闭二采", "Off"],
    super_resolution_second_pass: ["超分二采", "Super-res 2nd pass"],
    latent_upscale_second_pass: ["Latent 放大二采", "Latent upscale 2nd pass"],
    super_resolution_only: ["只超分", "Super-res only"]
  }[e][t === "zh" ? 0 : 1];
}
function zt(e, t) {
  return e.processingMode === "latent_upscale_second_pass" ? t === "zh" ? "Latent 二采" : "Latent 2nd" : e.processingMode === "super_resolution_second_pass" || e.stage === "second_pass" ? t === "zh" ? "超分二采" : "Super-res 2nd" : e.processingMode === "super_resolution_only" || e.stage === "upscaled" ? t === "zh" ? "只超分" : "Super-res only" : e.stage === "first_pass" ? t === "zh" ? "一采" : "1st pass" : t === "zh" ? "旧结果" : "Legacy";
}
function St(e) {
  var n;
  const t = Pe(e);
  return t.schemaVersion = 5, (n = t.project.id) != null && n.trim() || (t.project.id = Zt("project")), t.shots = t.shots.map((o) => {
    const i = o;
    return {
      ...o,
      latentRelay: o.latentRelay ?? !0,
      // 旧 BOOL 开关无损迁移到 V7.2 原有的超分二采模式。
      secondSamplingMode: o.secondSamplingMode ?? (i.secondSampling === !1 ? "off" : "super_resolution_second_pass"),
      disabledAssetIds: o.disabledAssetIds ?? []
    };
  }), t.assets = t.assets.map((o) => ({ ...o, shotIds: o.shotIds ?? [] })), t;
}
function fn(e) {
  return e.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function gn(e) {
  const t = Zt(e);
  return { id: t, alias: t, kind: e, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: e === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function $t(e, t, n) {
  const o = new FormData();
  o.append("projectName", e), o.append("kind", t), o.append("file", n);
  const i = await fetch("/theodore-director/v1/assets", { method: "POST", body: o }), s = await i.json();
  if (!i.ok || !s.path) throw new Error(s.error || `HTTP ${i.status}`);
  return s.path;
}
async function bn(e, t, n) {
  const o = new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t.id,
    activeIndex: String(n)
  }), i = await fetch(`/theodore-director/v1/generated-video?${o.toString()}`), s = await i.json();
  if (!i.ok) throw new Error(s.error || `HTTP ${i.status}`);
  return s;
}
async function vn(e) {
  var s;
  if ((s = navigator.clipboard) != null && s.writeText)
    try {
      await navigator.clipboard.writeText(e);
      return;
    } catch {
    }
  const t = document.activeElement, n = t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement ? { start: t.selectionStart, end: t.selectionEnd, direction: t.selectionDirection } : null, o = document.createElement("textarea");
  o.value = e, o.style.position = "fixed", o.style.opacity = "0", document.body.append(o), o.select();
  const i = document.execCommand("copy");
  if (o.remove(), t instanceof HTMLElement && t.focus({ preventScroll: !0 }), n && (t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement) && t.setSelectionRange(n.start, n.end, n.direction ?? void 0), !i) throw new Error("浏览器拒绝写入剪贴板");
}
function xn({ language: e, projectName: t, runId: n, onClearShots: o, onClearAssets: i, onProjectCleared: s }) {
  const [a, p] = A(!1), f = !!(t.trim() && n.trim()), h = async () => {
    const l = `${t.trim()} / Run ${n.trim()}`, y = e === "zh" ? `确认清空 ${l}？

该运行目录内的全部视频、latent、尾帧、结果文件和元数据都会移入系统回收站。输入素材及其他 Run 不会被删除。` : `Clear ${l}?

All videos, latent files, tail frames, result files, and metadata in this run will be moved to the system trash. Input assets and other runs will not be deleted.`;
    if (window.confirm(y)) {
      p(!0);
      try {
        const j = await Rr(t, n);
        s(), window.alert(e === "zh" ? `已移入系统回收站：${j}` : `Moved to system trash: ${j}`);
      } catch (j) {
        window.alert(`${e === "zh" ? "清空项目失败" : "Failed to clear project"}: ${j instanceof Error ? j.message : String(j)}`);
      } finally {
        p(!1);
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
        window.confirm(l) && o();
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
        window.confirm(l) && i();
      }, children: e === "zh" ? "清空素材库" : "Clear media" })
    ] }),
    /* @__PURE__ */ r("article", { children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("strong", { children: e === "zh" ? "清空当前项目" : "Clear current project" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "清除当前 Project name + Run ID 的全部生成文件，并移入系统回收站。输入素材和其他 Run 不受影响。" : "Move every generated file for the current Project name + Run ID to the system trash. Input assets and other runs are unaffected." })
      ] }),
      /* @__PURE__ */ r("button", { class: "danger", disabled: !f || a, onClick: () => void h(), children: a ? e === "zh" ? "正在移入回收站…" : "Moving to trash…" : e === "zh" ? "清空项目" : "Clear project" })
    ] })
  ] });
}
function _n({ initial: e, onSave: t, onClose: n, supportsSecondSampling: o, queueSecondPass: i }) {
  const [s, a] = A(() => St(e)), [p, f] = A("shots"), [h, x] = A(0), [c, l] = A(() => navigator.language.startsWith("zh") ? "zh" : "en"), [y, j] = A({}), [k, C] = A(!0), [I, u] = A(!1), [w, m] = A(0), [T, z] = A({ found: !1, results: [] }), [O, D] = A(""), [J, q] = A(!1), [Z, le] = A(""), [ce, ue] = A(!0), [v, M] = A(!1), [N, g] = A(!1), [P, E] = A([]), [R, H] = A("5"), [te, X] = A("1"), [se, Fe] = A("5"), [we, _] = A("super_resolution_second_pass");
  ae(() => {
    const d = (b) => {
      b.target instanceof Element && b.target.closest(".td-shot-media-name") && b.preventDefault();
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, []);
  const S = s.shots[Math.min(h, s.shots.length - 1)], F = fe(() => S ? Jt(s, S) : null, [s, S]), K = fe(() => S ? Wt(s, S) : [], [s, S]), V = S != null && S.enabled ? s.shots.slice(0, h).filter((d) => d.enabled).length : -1, Y = P.length > 0 && P.every((d) => d.enabled), ee = fe(() => he(T), [T]), re = ee.find((d) => d.path === O) ?? ee[0], ge = re != null && re.path ? ie(re.path, "output") : null, U = (d) => a((b) => {
    const $ = Pe(b);
    return d($), $;
  }), et = (d, b) => U(($) => {
    const L = d + b;
    L < 0 || L >= $.shots.length || ([$.shots[d], $.shots[L]] = [$.shots[L], $.shots[d]], x(L));
  }), Xt = (d) => U((b) => {
    b.shots.length <= 1 || (b.shots.splice(d, 1), x(($) => $ > d ? $ - 1 : $ === d ? Math.min(d, b.shots.length - 1) : $));
  }), er = () => {
    E(Pe(s.shots)), M(!0);
  }, tr = () => {
    const d = Number(R);
    if (!Number.isFinite(d) || d <= 0) {
      window.alert(c === "zh" ? "统一时长必须大于 0 秒" : "The shared duration must be greater than 0 seconds.");
      return;
    }
    E((b) => b.map(($) => ({ ...$, durationSeconds: d })));
  }, rr = () => {
    const d = Number(te), b = Number(se);
    if (!Number.isInteger(d) || d < 1 || d > 100) {
      window.alert(c === "zh" ? "新增镜头数量必须是 1–100 的整数" : "The shot count must be an integer from 1 to 100.");
      return;
    }
    if (!Number.isFinite(b) || b <= 0) {
      window.alert(c === "zh" ? "新增镜头时长必须大于 0 秒" : "The new-shot duration must be greater than 0 seconds.");
      return;
    }
    E(($) => yt($, d, b));
  }, nr = () => {
    const d = !Y;
    E((b) => b.map(($) => ({ ...$, enabled: d })));
  }, or = () => {
    if (P.some((d) => !Number.isFinite(d.durationSeconds) || d.durationSeconds <= 0)) {
      window.alert(c === "zh" ? "每个镜头的时长都必须大于 0 秒" : "Every shot duration must be greater than 0 seconds.");
      return;
    }
    U((d) => {
      d.shots = Pe(P);
    }), x((d) => Math.min(d, P.length - 1)), M(!1);
  }, sr = () => {
    const d = URL.createObjectURL(new Blob([JSON.stringify(s, null, 2)], { type: "application/json" })), b = document.createElement("a");
    b.href = d, b.download = `${fn(s.project.name)}.director.json`, b.click(), URL.revokeObjectURL(d);
  }, ir = () => {
    const d = Ur(s);
    if (d.length) {
      window.alert(`计划未通过校验：

${d.join(`
`)}`);
      return;
    }
    t(s);
  };
  return ae(() => {
    let d = !1;
    return S ? (q(!0), bn(s, S, V).then((b) => {
      if (d) return;
      const $ = he(b);
      z(b), D((L) => {
        var B;
        return $.some((ne) => ne.path === L) ? L : ((B = $[0]) == null ? void 0 : B.path) ?? "";
      });
    }).catch((b) => {
      d || (z({ found: !1, results: [], error: String(b) }), D(""));
    }).finally(() => {
      d || q(!1);
    }), () => {
      d = !0;
    }) : (z({ found: !1, results: [] }), D(""), q(!1), () => {
      d = !0;
    });
  }, [s.project.name, s.project.runId, S == null ? void 0 : S.id, S == null ? void 0 : S.enabled, V, w]), /* @__PURE__ */ r("div", { class: "td-shell", children: [
    /* @__PURE__ */ r("header", { children: [
      /* @__PURE__ */ r("h1", { children: ve(c, "title") }),
      /* @__PURE__ */ r("div", { class: "td-actions", children: [
        /* @__PURE__ */ r("button", { onClick: sr, children: "导出 / Export" }),
        /* @__PURE__ */ r("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ r("input", { type: "file", accept: "application/json,.json", onChange: async (d) => {
            var $;
            const b = ($ = d.currentTarget.files) == null ? void 0 : $[0];
            if (b)
              try {
                const L = JSON.parse(await b.text());
                if (!L.project || !Array.isArray(L.shots) || !Array.isArray(L.assets)) throw new Error("不是有效的 Theodore Director Plan");
                a(St(L)), x(0);
              } catch (L) {
                window.alert(String(L));
              }
          } })
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => l(c === "zh" ? "en" : "zh"), children: c === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: ir, children: ve(c, "save") }),
        /* @__PURE__ */ r("button", { onClick: n, children: ve(c, "close") })
      ] })
    ] }),
    /* @__PURE__ */ r("nav", { children: ["shots", "assets", "settings", "postprocess"].map((d) => /* @__PURE__ */ r("button", { class: p === d ? "active" : "", onClick: () => f(d), children: ve(c, d) })) }),
    /* @__PURE__ */ r("main", { children: [
      p === "shots" && /* @__PURE__ */ r("div", { class: "td-shots", children: [
        /* @__PURE__ */ r("aside", { class: "td-shot-sidebar", children: [
          o && /* @__PURE__ */ r("div", { class: "td-bulk-processing", children: [
            /* @__PURE__ */ r("select", { "aria-label": c === "zh" ? "批量处理模式" : "Bulk processing mode", value: we, onChange: (d) => _(d.currentTarget.value), children: wt.map((d) => /* @__PURE__ */ r("option", { value: d, children: kt(d, c) })) }),
            /* @__PURE__ */ r("button", { class: "wide td-bulk-toggle", onClick: () => U((d) => {
              d.shots.forEach((b) => {
                b.secondSamplingMode = we;
              });
            }), children: c === "zh" ? "应用到全部镜头" : "Apply to all shots" })
          ] }),
          /* @__PURE__ */ r("div", { class: "td-shot-list", children: s.shots.map((d, b) => /* @__PURE__ */ r("div", { class: `td-shot-card ${b === h ? "selected" : ""}`, onClick: () => x(b), children: [
            /* @__PURE__ */ r("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ r("button", { class: "td-shot-delete", disabled: s.shots.length <= 1, title: c === "zh" ? s.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : s.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": c === "zh" ? "删除镜头" : "Delete shot", onClick: ($) => {
              $.stopPropagation(), Xt(b);
            }, children: "×" }) }),
            /* @__PURE__ */ r("strong", { children: [
              b + 1,
              ". ",
              d.title
            ] }),
            /* @__PURE__ */ r("span", { children: [
              d.durationSeconds,
              "s · ",
              d.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-move-actions", children: [
              /* @__PURE__ */ r("button", { title: c === "zh" ? "上移镜头" : "Move shot up", onClick: ($) => {
                $.stopPropagation(), et(b, -1);
              }, children: "↑" }),
              /* @__PURE__ */ r("button", { title: c === "zh" ? "下移镜头" : "Move shot down", onClick: ($) => {
                $.stopPropagation(), et(b, 1);
              }, children: "↓" })
            ] })
          ] }, d.id)) }),
          /* @__PURE__ */ r("div", { class: "td-shot-sidebar-footer", children: [
            /* @__PURE__ */ r("button", { class: "wide", onClick: () => U((d) => {
              const b = d.shots.length;
              d.shots = yt(d.shots, 1, 5), x(b);
            }), children: [
              "＋ ",
              ve(c, "addShot")
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-batch-entry", children: /* @__PURE__ */ r("button", { class: "wide", onClick: er, children: c === "zh" ? "批量处理镜头" : "Batch edit shots" }) })
          ] })
        ] }),
        S && /* @__PURE__ */ r("section", { class: "td-form", children: [
          /* @__PURE__ */ r("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ r("label", { children: [
              "ID",
              /* @__PURE__ */ r("input", { value: S.id, onInput: (d) => U((b) => {
                b.shots[h].id = d.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ r("input", { value: S.title, onInput: (d) => U((b) => {
                b.shots[h].title = d.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: S.durationSeconds, onInput: (d) => U((b) => {
                b.shots[h].durationSeconds = Number(d.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: S.enabled, onChange: (d) => U((b) => {
                  b.shots[h].enabled = d.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: V === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: S.latentRelay, onChange: (d) => U((b) => {
                  b.shots[h].latentRelay = d.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: [
                  "latent接力 / Relay",
                  V === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              o && /* @__PURE__ */ r("label", { class: "td-processing-mode", children: [
                /* @__PURE__ */ r("span", { children: c === "zh" ? "高清处理" : "Processing" }),
                /* @__PURE__ */ r("select", { value: S.secondSamplingMode, onChange: (d) => U((b) => {
                  b.shots[h].secondSamplingMode = d.currentTarget.value;
                }), children: wt.map((d) => /* @__PURE__ */ r("option", { value: d, children: kt(d, c) })) })
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
            /* @__PURE__ */ r(Be, { rows: 10, value: S.prompt, mentionAssets: K, mentionLanguage: c, isReferenceValid: (d) => Gt(s, S, d), onInput: (d) => U((b) => {
              b.shots[h].prompt = d.currentTarget.value;
            }) }, S.id)
          ] }),
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ r("textarea", { rows: 3, value: S.negativePrompt, onInput: (d) => U((b) => {
              b.shots[h].negativePrompt = d.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ r("legend", { children: "本镜头素材 / Shot media" }),
            /* @__PURE__ */ r("label", { class: "td-shot-media-display-toggle", children: [
              /* @__PURE__ */ r("input", { type: "checkbox", checked: ce, onChange: (d) => ue(d.currentTarget.checked) }),
              /* @__PURE__ */ r("span", { children: c === "zh" ? "显示别名" : "Show aliases" })
            ] }),
            s.assets.map((d) => {
              const b = !S.disabledAssetIds.includes(d.id), $ = ce ? d.alias : oe(d.path) || d.alias, L = `{{ref:${d.alias}}}`;
              return /* @__PURE__ */ r("div", { class: `td-shot-media-card ${b ? "" : "disabled"}`, children: [
                /* @__PURE__ */ r("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ r(ft, { asset: d, compact: !0 }),
                  /* @__PURE__ */ r("span", { class: "td-shot-media-kind", children: c === "zh" ? mn[d.kind] : d.kind }),
                  /* @__PURE__ */ r("label", { class: "td-shot-media-toggle", title: b ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ r("input", { type: "checkbox", checked: b, onChange: (B) => U((ne) => {
                    const pe = ne.shots[h].disabledAssetIds;
                    ne.shots[h].disabledAssetIds = B.currentTarget.checked ? pe.filter((_e) => _e !== d.id) : [.../* @__PURE__ */ new Set([...pe, d.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ r("button", { class: `td-shot-media-name ${Z === d.id ? "copied" : ""}`, title: `${$}
${c === "zh" ? "点击复制" : "Click to copy"} ${L}`, onClick: async () => {
                  try {
                    await vn(L), le(d.id), window.setTimeout(() => le((B) => B === d.id ? "" : B), 1400);
                  } catch (B) {
                    window.alert(`${c === "zh" ? "复制失败" : "Copy failed"}: ${String(B)}`);
                  }
                }, children: [
                  /* @__PURE__ */ r("span", { children: $ }),
                  Z === d.id && /* @__PURE__ */ r("em", { children: c === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, d.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ r("aside", { class: "td-preview", children: [
          /* @__PURE__ */ r("details", { open: k, onToggle: (d) => C(d.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: ve(c, "preview") }),
              /* @__PURE__ */ r("span", { class: "td-summary-counts", children: [
                "Picture ",
                (F == null ? void 0 : F.slots.filter((d) => d.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (F == null ? void 0 : F.slots.filter((d) => d.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (F == null ? void 0 : F.audioCount) ?? 0,
                "/3 · Files ",
                (F == null ? void 0 : F.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body", children: [
              F != null && F.errors.length ? /* @__PURE__ */ r("ul", { class: "errors", children: F.errors.map((d) => /* @__PURE__ */ r("li", { children: d })) }) : /* @__PURE__ */ r("p", { class: "ok", children: ve(c, "noErrors") }),
              /* @__PURE__ */ r("ol", { children: F == null ? void 0 : F.slots.map((d) => /* @__PURE__ */ r("li", { children: [
                /* @__PURE__ */ r("code", { children: d.label }),
                " ← ",
                d.alias
              ] })) }),
              /* @__PURE__ */ r("pre", { children: F == null ? void 0 : F.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ r("details", { open: I, onToggle: (d) => u(d.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: c === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ r("span", { class: `td-result-state ${ee.length ? "found" : ""}`, children: J ? c === "zh" ? "查询中" : "Checking" : ee.length ? c === "zh" ? `${ee.length} 个结果` : `${ee.length} results` : c === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ r("div", { class: "td-result-actions", children: /* @__PURE__ */ r("button", { onClick: () => m((d) => d + 1), children: [
                "↻ ",
                c === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              J ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: c === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : T.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: c === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again." }) : re && ge ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
                /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
                  /* @__PURE__ */ r("video", { src: ge, controls: !0, preload: "metadata", playsInline: !0 }, re.path),
                  /* @__PURE__ */ r("div", { class: "td-generated-meta", title: re.path, children: [
                    zt(re, c),
                    " · ",
                    re.path,
                    re.bytes ? ` · ${(re.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                  ] })
                ] }),
                /* @__PURE__ */ r("div", { class: "td-result-list", "aria-label": c === "zh" ? "全部生成结果" : "All generated results", children: ee.map((d, b) => {
                  const $ = ie(d.path, "output"), L = Qt(d.path, ee.length - b), B = d.modifiedAt ? new Date(d.modifiedAt * 1e3).toLocaleString(c === "zh" ? "zh-CN" : "en-US") : "";
                  return /* @__PURE__ */ r("button", { class: `td-result-item ${d.path === re.path ? "selected" : ""}`, onClick: () => D(d.path), children: [
                    $ ? /* @__PURE__ */ r(ze, { src: $, alt: `${c === "zh" ? "结果" : "Result"} ${L}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: /* @__PURE__ */ r("span", { children: "×" }) }),
                    /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
                      /* @__PURE__ */ r("strong", { children: [
                        c === "zh" ? `结果 ${L}` : `Result ${L}`,
                        " · ",
                        zt(d, c),
                        b === 0 && /* @__PURE__ */ r("em", { children: c === "zh" ? "最新" : "Latest" })
                      ] }),
                      /* @__PURE__ */ r("span", { title: d.path, children: oe(d.path) }),
                      /* @__PURE__ */ r("small", { children: [d.bytes ? `${(d.bytes / 1024 / 1024).toFixed(1)} MB` : "", B].filter(Boolean).join(" · ") })
                    ] })
                  ] }, d.path);
                }) })
              ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: c === "zh" ? "未在预期路径找到本段视频" : "No video found at the expected path" })
            ] })
          ] })
        ] })
      ] }),
      p === "assets" && /* @__PURE__ */ r("div", { class: "td-assets", children: [
        /* @__PURE__ */ r("div", { class: "td-toolbar", children: [
          ["image", "video", "audio"].map((d) => /* @__PURE__ */ r("button", { onClick: () => U((b) => b.assets.push(gn(d))), children: [
            "＋ ",
            d
          ] })),
          /* @__PURE__ */ r("button", { class: "td-asset-batch-entry", onClick: () => g(!0), children: [
            "⇧ ",
            c === "zh" ? "批量导入素材" : "Batch import assets"
          ] })
        ] }),
        s.assets.map((d, b) => /* @__PURE__ */ r("article", { children: /* @__PURE__ */ r("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ r("div", { class: "td-grid", children: [
              /* @__PURE__ */ r("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ r("input", { value: d.alias, onInput: ($) => U((L) => {
                  L.assets[b].alias = $.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ r("select", { value: d.kind, onChange: ($) => U((L) => {
                  L.assets[b].kind = $.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ r("option", { children: "image" }),
                  /* @__PURE__ */ r("option", { children: "video" }),
                  /* @__PURE__ */ r("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ r("input", { value: d.path, onInput: ($) => U((L) => {
                  L.assets[b].path = $.currentTarget.value;
                }) }),
                /* @__PURE__ */ r("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ r("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ r("input", { type: "file", accept: d.kind === "image" ? "image/*" : d.kind === "video" ? "video/*" : "audio/*", onChange: async ($) => {
                      var ne;
                      const L = $.currentTarget, B = (ne = L.files) == null ? void 0 : ne[0];
                      if (B) {
                        j((pe) => ({ ...pe, [d.id]: B.name }));
                        try {
                          const pe = await $t(s.project.name, d.kind, B);
                          U((_e) => {
                            const tt = _e.assets.find((dr) => dr.id === d.id);
                            tt && (tt.path = pe);
                          });
                        } catch (pe) {
                          window.alert(String(pe));
                        } finally {
                          j((pe) => {
                            const _e = { ...pe };
                            return delete _e[d.id], _e;
                          }), L.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ r("span", { class: "td-file-name", title: y[d.id] || d.path, children: y[d.id] ? `${c === "zh" ? "上传中" : "Uploading"}: ${y[d.id]}` : oe(d.path) || (c === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ r("input", { type: "number", min: "0", step: "0.1", value: d.durationSeconds ?? "", onInput: ($) => U((L) => {
                  L.assets[b].durationSeconds = $.currentTarget.value ? Number($.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ r("input", { type: "number", value: d.fixedOrder, onInput: ($) => U((L) => {
                  L.assets[b].fixedOrder = Number($.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ r("input", { value: d.shotIds.join(", "), onInput: ($) => U((L) => {
                  L.assets[b].shotIds = $.currentTarget.value.split(",").map((B) => B.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-flags", children: [
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: d.enabled, onChange: ($) => U((L) => {
                  L.assets[b].enabled = $.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: d.fixed, onChange: ($) => U((L) => {
                  L.assets[b].fixed = $.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              d.kind === "video" && /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: d.includeVideoAudio, onChange: ($) => U((L) => {
                  L.assets[b].includeVideoAudio = $.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ r("button", { class: "danger", onClick: () => U(($) => {
                $.assets.splice(b, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ r(ft, { asset: d })
        ] }) }, d.id))
      ] }),
      p === "settings" && /* @__PURE__ */ r("section", { class: "td-form settings", children: [
        /* @__PURE__ */ r("label", { children: [
          "Project name",
          /* @__PURE__ */ r("input", { value: s.project.name, onInput: (d) => U((b) => {
            b.project.name = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Run ID",
          /* @__PURE__ */ r("input", { value: s.project.runId, onInput: (d) => U((b) => {
            b.project.runId = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "FPS",
          /* @__PURE__ */ r("input", { type: "number", value: s.defaults.fps, onInput: (d) => U((b) => {
            b.defaults.fps = Number(d.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Base seed",
          /* @__PURE__ */ r("input", { type: "number", value: s.defaults.baseSeed, onInput: (d) => U((b) => {
            b.defaults.baseSeed = Number(d.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ r(Be, { value: s.promptPrefix, isReferenceValid: (d) => bt(s, d), onInput: (d) => U((b) => {
            b.promptPrefix = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ r(Be, { value: s.promptSuffix, isReferenceValid: (d) => bt(s, d), onInput: (d) => U((b) => {
            b.promptSuffix = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r(xn, { language: c, projectName: s.project.name, runId: s.project.runId, onClearShots: () => {
          U((d) => {
            d.shots = un();
          }), x(0), E([]);
        }, onClearAssets: () => {
          U((d) => {
            const b = Fr(d);
            d.assets = b.assets, d.shots = b.shots;
          }), le(""), j({});
        }, onProjectCleared: () => m((d) => d + 1) })
      ] }),
      p === "postprocess" && /* @__PURE__ */ r(cn, { plan: s, language: c, queueSecondPass: i })
    ] }),
    v && /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": c === "zh" ? "批量处理镜头" : "Batch edit shots", children: [
      /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("h2", { children: c === "zh" ? "批量处理镜头" : "Batch edit shots" }),
          /* @__PURE__ */ r("p", { children: c === "zh" ? `当前共 ${P.length} 个镜头` : `${P.length} shots` })
        ] }),
        /* @__PURE__ */ r("button", { "aria-label": c === "zh" ? "关闭" : "Close", onClick: () => M(!1), children: "×" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-tools", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            c === "zh" ? "所有镜头时长" : "Duration for all shots",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: R, onInput: (d) => H(d.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: c === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: tr, children: c === "zh" ? "一键设置所有时长" : "Set all durations" })
        ] }),
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            c === "zh" ? "新增镜头数量" : "New shot count",
            /* @__PURE__ */ r("input", { type: "number", min: "1", max: "100", step: "1", value: te, onInput: (d) => X(d.currentTarget.value) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            c === "zh" ? "每个镜头时长" : "Duration per shot",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: se, onInput: (d) => Fe(d.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: c === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: rr, children: c === "zh" ? "批量新增镜头" : "Add shots" })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-global-actions", children: [
        /* @__PURE__ */ r("span", { children: c === "zh" ? `已启用 ${P.filter((d) => d.enabled).length}/${P.length} 个镜头` : `${P.filter((d) => d.enabled).length}/${P.length} shots enabled` }),
        /* @__PURE__ */ r("button", { class: Y ? "active" : "", onClick: nr, children: Y ? c === "zh" ? "全部禁用" : "Disable all" : c === "zh" ? "全部启用" : "Enable all" })
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
        P.map((d, b) => /* @__PURE__ */ r("div", { class: "td-batch-row", children: [
          /* @__PURE__ */ r("span", { children: b + 1 }),
          /* @__PURE__ */ r("input", { value: d.title, "aria-label": `${c === "zh" ? "镜头名" : "Shot name"} ${b + 1}`, onInput: ($) => E((L) => L.map((B, ne) => ne === b ? { ...B, title: $.currentTarget.value } : B)) }),
          /* @__PURE__ */ r("label", { class: "td-batch-enabled", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: d.enabled, onChange: ($) => E((L) => L.map((B, ne) => ne === b ? { ...B, enabled: $.currentTarget.checked } : B)) }),
            /* @__PURE__ */ r("span", { children: d.enabled ? c === "zh" ? "开" : "ON" : c === "zh" ? "关" : "OFF" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: d.durationSeconds, onInput: ($) => E((L) => L.map((B, ne) => ne === b ? { ...B, durationSeconds: Number($.currentTarget.value) } : B)) }),
            /* @__PURE__ */ r("span", { children: c === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-relay", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: d.latentRelay, onChange: ($) => E((L) => L.map((B, ne) => ne === b ? { ...B, latentRelay: $.currentTarget.checked } : B)) }),
            /* @__PURE__ */ r("span", { children: d.latentRelay ? c === "zh" ? "开" : "ON" : c === "zh" ? "关" : "OFF" })
          ] })
        ] }, d.id))
      ] }),
      /* @__PURE__ */ r("footer", { children: [
        /* @__PURE__ */ r("button", { onClick: () => M(!1), children: c === "zh" ? "取消" : "Cancel" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: or, children: c === "zh" ? "应用更改" : "Apply changes" })
      ] })
    ] }) }),
    N && /* @__PURE__ */ r(Ar, { language: c, assets: s.assets, projectName: s.project.name, uploadFile: $t, onImported: (d) => U((b) => {
      b.assets.push(...d);
    }), onClose: () => g(!1) })
  ] });
}
function yn(e, t, n = !1, o) {
  const i = document.getElementById("theodore-director-modal");
  if (i) {
    i.focus();
    return;
  }
  const s = document.createElement("div");
  s.id = "theodore-director-modal", s.className = "td-modal", s.tabIndex = -1, document.body.append(s);
  const a = (f) => {
    f.key === "Escape" && p();
  }, p = () => {
    document.removeEventListener("keydown", a), it(null, s), s.remove();
  };
  document.addEventListener("keydown", a), it(/* @__PURE__ */ r(_n, { initial: e, onSave: (f) => {
    t(f), p();
  }, onClose: p, supportsSecondSampling: n, queueSecondPass: o }), s), s.focus();
}
const wn = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-shot-media{position:relative}.td-form label.td-shot-media-display-toggle{position:absolute;top:-17px;right:10px;z-index:3;display:flex;flex-direction:row;align-items:center;gap:6px;padding:6px 9px;border:1px solid var(--td-line);border-radius:6px;background:var(--td-panel);color:var(--td-text);cursor:pointer;white-space:nowrap}.td-form label.td-shot-media-display-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-display-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-highlight-textarea{position:relative;display:block;width:100%;min-width:0}.td-highlight-backdrop,.td-form textarea.td-highlight-input{box-sizing:border-box;width:100%;margin:0;padding:7px 9px;font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,monospace;font-size:inherit;line-height:1.45;letter-spacing:normal;-moz-tab-size:8;tab-size:8;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.td-highlight-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border:1px solid transparent;border-radius:6px;background:#222a35;color:var(--td-text);pointer-events:none}.td-form textarea.td-highlight-input{position:relative;z-index:1;display:block;background:transparent;color:transparent;caret-color:var(--td-text);-webkit-text-fill-color:transparent}.td-highlight-input::selection{background:#5898d46b}.td-highlight-backdrop mark{padding:0;border-radius:3px;color:inherit}.td-highlight-backdrop mark.valid{background:#1d6b50;color:#bfffe6}.td-highlight-backdrop mark.invalid{background:#7a2931;color:#ffd1d5;text-decoration:underline;text-decoration-color:#ff9aa4;text-underline-offset:2px}.td-reference-mention-menu{position:fixed;z-index:80;display:flex;flex-direction:column;overflow:hidden;border:1px solid #526174;border-radius:9px;background:#161d26;color:var(--td-text);box-shadow:0 14px 42px #000b}.td-reference-mention-menu>header{display:flex;align-items:center;justify-content:space-between;flex:none;padding:8px 10px;border-bottom:1px solid var(--td-line);background:#202936}.td-reference-mention-menu>header strong{color:var(--td-text);font-size:13px}.td-reference-mention-menu>header span{padding:1px 7px;border-radius:999px;background:#2b3745;color:var(--td-muted);font-size:11px}.td-reference-mention-options{min-height:0;overflow:auto;padding:5px}.td-shell .td-reference-mention-options>button{display:grid;grid-template-columns:66px minmax(0,1fr) auto;gap:9px;align-items:center;width:100%;min-height:56px;padding:5px;border:1px solid transparent;background:transparent;text-align:left}.td-shell .td-reference-mention-options>button:hover,.td-shell .td-reference-mention-options>button.active{border-color:#527e6c;background:#1d302b}.td-reference-mention-thumb{display:flex;width:66px;height:46px;align-items:center;justify-content:center;overflow:hidden;border:1px solid var(--td-line);border-radius:5px;background:#0b0f14;color:var(--td-accent);font-size:20px}.td-reference-mention-thumb img{display:block;width:100%;height:100%;object-fit:cover}.td-reference-mention-copy{display:flex;min-width:0;flex-direction:column;gap:2px}.td-reference-mention-copy strong,.td-reference-mention-copy small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-reference-mention-copy strong{color:var(--td-text)}.td-reference-mention-copy small{color:var(--td-muted);font-size:11px}.td-reference-mention-options>button>em{padding:2px 7px;border-radius:999px;background:#293440;color:var(--td-muted);font-size:10px;font-style:normal;white-space:nowrap}.td-reference-mention-empty{margin:0;padding:22px 12px;color:var(--td-muted);text-align:center}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-generated-results{display:flex;flex-direction:column;gap:12px}.td-result-list{display:flex;flex-direction:column;gap:7px;max-height:280px;overflow:auto;padding-right:3px}.td-shell button.td-result-item{display:grid;grid-template-columns:112px minmax(0,1fr);gap:10px;align-items:center;width:100%;padding:6px;text-align:left;background:#151b23}.td-shell button.td-result-item.selected{border-color:var(--td-accent);background:#1c2a2a}.td-result-thumb{width:112px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:5px;background:#090c10;color:var(--td-muted)}.td-result-thumb img,.td-result-thumb video{display:block;width:100%;height:100%;object-fit:contain}.td-result-item-copy{display:flex;min-width:0;flex-direction:column;gap:3px}.td-result-item-copy>strong{display:flex;align-items:center;gap:7px;color:var(--td-text)}.td-result-item-copy>strong em{padding:1px 6px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-result-item-copy>span,.td-result-item-copy>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-result-item-copy>small{font-size:10px}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-project-cleanup{display:grid;gap:9px;margin-top:22px}.td-project-cleanup article{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:15px 16px;border:1px solid #713b42;border-radius:8px;background:#321d22}.td-project-cleanup strong{color:#ffd1d5}.td-project-cleanup p{margin:5px 0 0;color:#d7aeb2;line-height:1.5}.td-project-cleanup button{min-width:130px;flex:none}.td-project-cleanup button:disabled{opacity:.5;cursor:not-allowed}.td-asset-batch-entry{margin-left:auto;border-color:#527061!important;background:#1b2c28!important;color:var(--td-accent)!important}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}.td-bulk-processing{display:grid;gap:6px;margin-bottom:9px}.td-bulk-processing select{width:100%;min-width:0}.td-bulk-processing .td-bulk-toggle{margin:0}.td-processing-mode{display:flex;align-items:center;gap:8px;min-width:260px}.td-processing-mode>span{white-space:nowrap;color:var(--td-muted)}.td-processing-mode select{min-width:170px}.td-second-pass-mode{align-items:flex-end}.td-second-pass-mode label{display:grid;gap:4px;text-align:left}.td-second-pass-mode label span{font-size:12px;color:var(--td-muted)}.td-second-pass-mode select{min-width:210px}.td-shots>.td-shot-sidebar{display:flex;min-height:0;overflow:hidden;flex-direction:column}.td-bulk-processing{flex:none}.td-shot-list{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding-right:4px}.td-shot-sidebar-footer{flex:none;display:grid;gap:8px;padding-top:9px;border-top:1px solid var(--td-line);background:var(--td-panel)}.td-shot-batch-entry{display:flex;min-height:0;padding:0}.td-shot-batch-entry button{border-color:#527061;background:#1b2c28;color:var(--td-accent)}.td-batch-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:28px;background:#05080dbd;box-sizing:border-box}.td-batch-panel{display:flex;flex-direction:column;width:min(1040px,100%);max-height:min(820px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-batch-header h2{font-size:18px;margin:0}.td-batch-header p{margin:3px 0 0;color:var(--td-muted)}.td-batch-header>button{font-size:20px;line-height:1;padding:5px 9px}.td-batch-tools{display:grid;grid-template-columns:1fr 1.4fr;gap:12px;padding:14px 18px;border-bottom:1px solid var(--td-line);background:#151b23}.td-batch-tools>div{display:flex;align-items:end;gap:8px;padding:10px;border:1px solid var(--td-line);border-radius:7px}.td-batch-tools label{display:flex;flex:1;flex-direction:column;gap:4px;color:var(--td-muted);white-space:nowrap}.td-batch-tools label>span,.td-batch-duration{display:flex;align-items:center;gap:6px}.td-batch-tools input{width:100%}.td-batch-tools em{color:var(--td-muted);font-style:normal}.td-batch-tools button{white-space:nowrap}.td-batch-global-actions{display:flex;align-items:center;justify-content:flex-end;gap:12px;padding:9px 22px;border-bottom:1px solid var(--td-line);background:#171e27;color:var(--td-muted)}.td-batch-global-actions button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-batch-table{overflow:auto;padding:0 18px}.td-batch-row{display:grid;grid-template-columns:42px minmax(180px,1fr) 100px 150px 120px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-batch-table-head{position:sticky;top:0;z-index:1;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-batch-duration input{min-width:0;width:100%}.td-batch-duration>span{color:var(--td-muted)}.td-batch-enabled,.td-batch-relay{display:flex;align-items:center;gap:7px;justify-content:flex-start;color:var(--td-text)}.td-batch-enabled input,.td-batch-relay input{width:17px;height:17px;margin:0}.td-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-batch-panel{display:flex;flex-direction:column;width:min(1420px,100%);max-height:min(880px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-asset-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-asset-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-dropzone{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-height:92px;margin:14px 18px 10px;border:1px dashed #597084;border-radius:9px;background:#151b23;color:var(--td-text);cursor:pointer;transition:border-color .15s,background .15s}.td-asset-dropzone:hover,.td-asset-dropzone.dragging{border-color:var(--td-accent);background:#1b2c28}.td-asset-dropzone span{color:var(--td-muted);font-size:12px}.td-asset-dropzone input{display:none}.td-asset-batch-warning{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 18px 10px;padding:8px 10px;border:1px solid #836a32;border-radius:7px;background:#3a301c;color:#f4d991}.td-asset-batch-warning span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-warning button{padding:2px 7px}.td-asset-batch-summary{display:flex;align-items:center;justify-content:space-between;padding:8px 18px;border-top:1px solid var(--td-line);border-bottom:1px solid var(--td-line);background:#151b23;color:var(--td-muted)}.td-asset-batch-summary button{padding:5px 8px}.td-asset-batch-list{overflow:auto;padding:0 18px 10px}.td-asset-batch-row{display:grid;grid-template-columns:minmax(210px,1.4fr) minmax(150px,1fr) 115px 135px 105px 72px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-asset-batch-head{position:sticky;top:0;z-index:2;padding-top:10px;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-asset-batch-row.invalid{background:#3b202560}.td-asset-batch-row.imported{background:#17372d55}.td-asset-batch-file{display:flex;min-width:0;flex-direction:column;gap:2px}.td-asset-batch-file strong,.td-asset-batch-file small,.td-asset-batch-file em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-file small{color:var(--td-muted);font-weight:400}.td-asset-batch-file em{color:var(--td-danger);font-size:11px;font-style:normal}.td-asset-batch-duration,.td-asset-batch-audio{display:flex;align-items:center;gap:6px;color:var(--td-muted)}.td-asset-batch-duration input{min-width:0;width:100%}.td-asset-batch-audio input{width:17px;height:17px;margin:0}.td-asset-batch-empty{display:flex;min-height:130px;align-items:center;justify-content:center;color:var(--td-muted)}.td-asset-batch-panel button:disabled,.td-asset-batch-panel input:disabled,.td-asset-batch-panel select:disabled{opacity:.55;cursor:not-allowed}.td-postprocess{display:flex;flex-direction:column;gap:14px;max-width:1500px;margin:0 auto}.td-post-header,.td-post-summary,.td-post-merged{border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px}.td-post-header h2,.td-post-merged h2{margin:0;font-size:17px}.td-post-header p{margin:4px 0 0;color:var(--td-muted)}.td-post-actions{display:flex;gap:8px;flex:none}.td-post-summary{display:flex;align-items:center;gap:18px;padding:10px 14px;color:var(--td-muted)}.td-post-summary>button{margin-left:auto}.td-post-summary button:disabled{opacity:.5;cursor:not-allowed}.td-post-range{display:flex;align-items:center;gap:6px;margin-left:auto}.td-post-range input{width:64px;padding:6px 7px;text-align:center}.td-post-range button{white-space:nowrap}.td-post-summary>.td-post-range+button{margin-left:0}.td-post-error,.td-post-warning{padding:10px 13px;border-radius:7px}.td-post-error{border:1px solid #8b4149;background:#442228;color:#ffd1d5;white-space:pre-wrap}.td-post-warning{border:1px solid #836a32;background:#3a301c;color:#f4d991}.td-post-shot-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(390px,1fr));gap:12px;align-items:start}.td-post-shot{min-width:0;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel);overflow:hidden}.td-post-shot.selected{border-color:#527e6c}.td-post-shot.disabled{opacity:.72}.td-post-shot>header{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid var(--td-line);background:#1d2530}.td-post-shot>header>label{display:flex;align-items:center;gap:9px;min-width:0;cursor:pointer}.td-post-shot>header input{width:18px;height:18px;margin:0;flex:none}.td-post-shot>header label>span{display:flex;min-width:0;gap:8px;align-items:baseline}.td-post-shot>header strong{color:var(--td-text)}.td-post-shot>header em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted);font-style:normal}.td-post-shot>header>span{flex:none;padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted)}.td-post-shot-disabled-note{padding:7px 10px;border-bottom:1px solid var(--td-line);background:#332b1d;color:#e5c77d;font-size:11px}.td-post-shot-empty{min-height:96px;display:flex;align-items:center;justify-content:center;padding:12px;color:var(--td-muted);text-align:center}.td-post-result-list{display:flex;flex-direction:column;gap:7px;max-height:360px;overflow:auto;padding:9px}.td-post-result{display:grid;grid-template-columns:minmax(0,1fr) 35px;gap:6px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:5px}.td-post-result.selected{border-color:var(--td-accent);background:#1c2a2a}.td-shell button.td-post-result-choice{display:grid;grid-template-columns:112px minmax(0,1fr);gap:9px;align-items:center;min-width:0;padding:0;border:0;background:transparent;text-align:left}.td-post-result-choice>span{display:flex;min-width:0;flex-direction:column;gap:3px}.td-post-result-choice>span>strong{display:flex;align-items:center;gap:6px}.td-post-result-choice>span>strong em{padding:1px 5px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-post-result-choice>span>span,.td-post-result-choice>span>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-post-result-choice>span>small{font-size:10px}.td-post-result-play{width:35px;height:35px;padding:0!important}.td-post-result-play:disabled{opacity:.35;cursor:not-allowed}.td-post-merged{padding:12px}.td-post-merged>header>div{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px}.td-post-merged .td-generated-results{display:grid;grid-template-columns:minmax(360px,1.6fr) minmax(300px,1fr);align-items:start}.td-post-merged .td-result-list{max-height:420px}.td-post-preview-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:30;display:flex;align-items:center;justify-content:center;padding:26px;background:#030609d6}.td-post-preview-overlay>section{width:min(980px,100%);max-height:calc(100vh - 52px);overflow:auto;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 80px #000c}.td-post-preview-overlay header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--td-line)}.td-post-preview-overlay header button{font-size:20px;line-height:1;padding:5px 9px}.td-post-preview-overlay video{display:block;width:100%;max-height:calc(100vh - 170px);background:#070a0e}.td-post-preview-overlay p{margin:0;padding:9px 12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}.td-post-summary{flex-wrap:wrap}.td-post-range{margin-left:0}.td-post-summary>button{margin-left:auto}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:900px){.td-post-shot-list,.td-post-merged .td-generated-results{grid-template-columns:1fr}.td-post-header{align-items:flex-start;flex-direction:column}.td-post-actions{width:100%}.td-post-actions button{flex:1}.td-post-summary{align-items:stretch;flex-direction:column;gap:7px}.td-post-range{margin:3px 0;flex-wrap:wrap}.td-post-summary>button{margin:4px 0 0}.td-post-result-list{max-height:none}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}@media(max-width:1000px){.td-asset-batch-list{min-width:900px}.td-asset-batch-panel{overflow:auto}.td-asset-batch-panel>.td-batch-header,.td-asset-dropzone,.td-asset-batch-warning,.td-asset-batch-summary,.td-asset-batch-panel>footer{min-width:864px}}@media(max-width:720px){.td-asset-batch-entry{margin-left:0}}.td-asset-dropzone{min-height:112px;cursor:default}.td-asset-picker-actions{display:flex;gap:8px;margin-top:8px}.td-asset-picker-button{padding:7px 12px;border:1px solid var(--td-line);border-radius:6px;background:#222c39;color:var(--td-text);cursor:pointer}.td-asset-picker-button:hover{border-color:var(--td-accent);background:#263b38}.td-asset-picker-button:has(input:disabled){opacity:.55;cursor:not-allowed}.td-postprocess-shell{display:flex;flex-direction:column;gap:12px;max-width:1500px;margin:0 auto}.td-postprocess-shell>.td-postprocess{max-width:none;width:100%;margin:0}.td-post-mode-tabs{display:flex;gap:7px;padding:5px;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-mode-tabs button{min-width:130px}.td-post-mode-tabs button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-second-pass-panel .td-post-shot>header>span:first-child{display:flex;min-width:0;gap:8px;align-items:baseline;padding:0;background:transparent}.td-second-pass-result{display:grid;grid-template-columns:minmax(0,1fr) 154px;gap:8px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:6px}.td-second-pass-result:has(.td-second-pass-run:disabled){border-color:#34404d}.td-second-pass-actions{display:flex;min-width:0;flex-direction:column;gap:6px}.td-second-pass-actions select{width:100%;min-width:0;padding:6px}.td-second-pass-terminal{display:flex;min-height:32px;align-items:center;justify-content:center;border:1px solid var(--td-line);border-radius:6px;color:var(--td-muted);font-size:11px;text-align:center}.td-second-pass-run{width:100%;min-height:34px;padding:6px!important}.td-second-pass-run:disabled{opacity:.62;cursor:not-allowed}.td-second-pass-error{grid-column:1/-1;padding:6px 8px;border-radius:5px;background:#442228;color:#ffd1d5;font-size:11px;white-space:pre-wrap}@media(max-width:620px){.td-post-mode-tabs{flex-direction:column}.td-post-mode-tabs button{width:100%}.td-second-pass-result{grid-template-columns:1fr}.td-second-pass-run{width:100%}}.td-delete-panel .td-post-shot>header>span:first-child{display:flex;min-width:0;gap:8px;align-items:baseline;padding:0;background:transparent}.td-delete-result{display:grid;grid-template-columns:minmax(0,1fr) 118px;gap:8px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:6px}.td-delete-result.deleting{opacity:.58}.td-delete-video-button{min-height:40px;padding:6px!important}.td-delete-video-button:disabled{cursor:not-allowed}.td-delete-merged{padding:12px}.td-delete-merged-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(390px,1fr));gap:8px}.td-delete-merged .td-post-result-choice>span>strong{color:var(--td-text)}@media(max-width:620px){.td-delete-result{grid-template-columns:1fr}.td-delete-video-button{width:100%}.td-delete-merged-list{grid-template-columns:1fr}}", Ct = "theodore-director-styles";
function kn() {
  if (document.getElementById(Ct)) return;
  const e = document.createElement("style");
  e.id = Ct, e.textContent = wn, document.head.append(e);
}
kn();
const zn = "/scripts/app.js", Sn = "/scripts/api.js";
Promise.all([
  import(
    /* @vite-ignore */
    zn
  ),
  import(
    /* @vite-ignore */
    Sn
  )
]).then(([{ app: e }, { api: t }]) => {
  const n = async (o) => {
    var j, k;
    const i = ((j = e.graph) == null ? void 0 : j._nodes) ?? [], s = i.find((C) => C.type === "TheodoreDirector_PostprocessSecondPassSource"), a = i.find((C) => C.type === "TheodoreDirector_SaveSecondPass"), p = (k = s == null ? void 0 : s.widgets) == null ? void 0 : k.find((C) => C.name === "request_json");
    if (!s || !a || !p || a.id === void 0)
      throw new Error("当前工作流缺少后处理单独二采支流，请重新载入仓库中的 V7 导播台示例工作流");
    const f = p.value, h = s.mode, x = a.mode;
    let c;
    try {
      p.value = JSON.stringify(o), s.mode = 0, a.mode = 0, c = await e.graphToPrompt(e.rootGraph);
    } finally {
      p.value = f, s.mode = h, a.mode = x;
    }
    const y = (await t.queuePrompt(0, c, { partialExecutionTargets: [String(a.id)] })).prompt_id;
    if (!y) throw new Error("ComfyUI 没有返回二采任务 ID");
    await new Promise((C, I) => {
      const u = () => {
        t.removeEventListener("execution_success", m), t.removeEventListener("execution_error", T), t.removeEventListener("execution_interrupted", T);
      }, w = (z) => {
        var O;
        return String(((O = z.detail) == null ? void 0 : O.prompt_id) ?? "");
      }, m = (z) => {
        w(z) === y && (u(), C());
      }, T = (z) => {
        if (w(z) !== y) return;
        const O = z.detail ?? {};
        u(), I(new Error(String(O.exception_message ?? O.error ?? "单独二采任务执行失败")));
      };
      t.addEventListener("execution_success", m), t.addEventListener("execution_error", T), t.addEventListener("execution_interrupted", T);
    });
  };
  e.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(o, i) {
      if (i.name === "TheodoreDirector_PostprocessSecondPassSource") {
        const a = o.prototype.onNodeCreated;
        o.prototype.onNodeCreated = function() {
          var f, h;
          a == null || a.apply(this);
          const p = (f = this.widgets) == null ? void 0 : f.find((x) => x.name === "request_json");
          p && (p.type = "hidden", p.computeSize = () => [0, -4]), this.size = [Math.max(((h = this.size) == null ? void 0 : h[0]) ?? 300, 380), 80];
        };
        return;
      }
      if (i.name !== "TheodoreDirector_Project") return;
      const s = o.prototype.onNodeCreated;
      o.prototype.onNodeCreated = function() {
        var p, f;
        s == null || s.apply(this);
        const a = (p = this.widgets) == null ? void 0 : p.find((h) => h.name === "plan_json");
        a && (a.type = "hidden", a.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          var h;
          try {
            const x = JSON.parse(String(a.value)), c = ((h = e.graph) == null ? void 0 : h._nodes) ?? [], l = c.some((y) => y.type === "TheodoreDirector_PostprocessSecondPassSource") && c.some((y) => y.type === "TheodoreDirector_SaveSecondPass");
            yn(x, (y) => {
              var j, k;
              a.value = JSON.stringify(y, null, 2), this.setDirtyCanvas(!0, !0), (k = (j = e.graph) == null ? void 0 : j.setDirtyCanvas) == null || k.call(j, !0, !0);
            }, !0, l ? n : void 0);
          } catch (x) {
            window.alert(`Theodore Director: ${x instanceof Error ? x.message : String(x)}`);
          }
        }), this.size = [Math.max(((f = this.size) == null ? void 0 : f[0]) ?? 300, 360), 110]);
      };
    }
  });
});
