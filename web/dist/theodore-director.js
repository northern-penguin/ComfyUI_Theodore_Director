var Ue, Y, Ot, xe, lt, Ut, Ft, qe, je, $e, Ht, tt, Qe, Ye, Le = {}, Ne = [], gr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Fe = Array.isArray;
function ve(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function rt(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function br(e, t, n) {
  var o, i, s, a = {};
  for (s in t) s == "key" ? o = t[s] : s == "ref" ? i = t[s] : a[s] = t[s];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ue.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (s in e.defaultProps) a[s] === void 0 && (a[s] = e.defaultProps[s]);
  return Ee(e, a, o, i, null);
}
function Ee(e, t, n, o, i) {
  var s = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++Ot, __i: -1, __u: 0 };
  return i == null && Y.vnode != null && Y.vnode(s), s;
}
function He(e) {
  return e.children;
}
function Ae(e, t) {
  this.props = e, this.context = t;
}
function ke(e, t) {
  if (t == null) return e.__ ? ke(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? ke(e) : null;
}
function vr(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, o = [], i = [], s = ve({}, t);
    s.__v = t.__v + 1, Y.vnode && Y.vnode(s), nt(e.__P, s, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, o, n ?? ke(t), !!(32 & t.__u), i), s.__v = t.__v, s.__.__k[s.__i] = s, Kt(o, s, i), t.__e = t.__ = null, s.__e != n && Bt(s);
  }
}
function Bt(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), Bt(e);
}
function ct(e) {
  (!e.__d && (e.__d = !0) && xe.push(e) && !De.__r++ || lt != Y.debounceRendering) && ((lt = Y.debounceRendering) || Ut)(De);
}
function De() {
  try {
    for (var e, t = 1; xe.length; ) xe.length > t && xe.sort(Ft), e = xe.shift(), t = xe.length, vr(e);
  } finally {
    xe.length = De.__r = 0;
  }
}
function Vt(e, t, n, o, i, s, a, p, g, h, _) {
  var l, c, w, R, S, j, M = o && o.__k || Ne, u = t.length;
  for (g = xr(n, t, M, g, u), l = 0; l < u; l++) (w = n.__k[l]) != null && (c = w.__i != -1 && M[w.__i] || Le, w.__i = l, j = nt(e, w, c, i, s, a, p, g, h, _), R = w.__e, w.ref && c.ref != w.ref && (c.ref && ot(c.ref, null, w), _.push(w.ref, w.__c || R, w)), S == null && R != null && (S = R), 4 & w.__u ? (g = qt(w, g, e), c.__e && (c.__e = null)) : typeof w.type == "function" && j !== void 0 ? g = j : R && (g = R.nextSibling), w.__u &= -7);
  return n.__e = S, g;
}
function xr(e, t, n, o, i) {
  var s, a, p, g, h, _ = n.length, l = _, c = 0;
  for (e.__k = new Array(i), s = 0; s < i; s++) (a = t[s]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = e.__k[s] = Ee(null, a, null, null, null) : Fe(a) ? a = e.__k[s] = Ee(He, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? a = e.__k[s] = Ee(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : e.__k[s] = a, g = s + c, a.__ = e, a.__b = e.__b + 1, p = null, (h = a.__i = _r(a, n, g, l)) != -1 && (l--, (p = n[h]) && (p.__u |= 2)), p == null || p.__v == null ? (h == -1 && (i > _ ? c-- : i < _ && c++), typeof a.type != "function" && (a.__u |= 4)) : h != g && (h == g - 1 ? c-- : h == g + 1 ? c++ : (h > g ? c-- : c++, a.__u |= 4))) : e.__k[s] = null;
  if (l) for (s = 0; s < _; s++) (p = n[s]) != null && (2 & p.__u) == 0 && (p.__e == o && (o = ke(p)), Jt(p, p));
  return o;
}
function qt(e, t, n) {
  var o, i;
  if (typeof e.type == "function") {
    for (o = e.__k, i = 0; o && i < o.length; i++) o[i] && (o[i].__ = e, t = qt(o[i], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = ke(e)), t = n.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function _r(e, t, n, o) {
  var i, s, a, p = e.key, g = e.type, h = t[n], _ = h != null && (2 & h.__u) == 0;
  if (h === null && p == null || _ && p == h.key && g == h.type) return n;
  if (o > (_ ? 1 : 0)) {
    for (i = n - 1, s = n + 1; i >= 0 || s < t.length; ) if ((h = t[a = i >= 0 ? i-- : s++]) != null && (2 & h.__u) == 0 && p == h.key && g == h.type) return a;
  }
  return -1;
}
function pt(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || gr.test(t) ? n : n + "px";
}
function Pe(e, t, n, o, i) {
  var s, a;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof o == "string" && (e.style.cssText = o = ""), o) for (t in o) n && t in n || pt(e.style, t, "");
    if (n) for (t in n) o && n[t] == o[t] || pt(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") s = t != (t = t.replace(Ht, "$1")), a = t.toLowerCase(), t = a in e || t == "onFocusOut" || t == "onFocusIn" ? a.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = n, n ? o ? n[$e] = o[$e] : (n[$e] = tt, e.addEventListener(t, s ? Ye : Qe, s)) : e.removeEventListener(t, s ? Ye : Qe, s);
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
function ht(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t[je] == null) t[je] = tt++;
      else if (t[je] < n[$e]) return;
      return n(Y.event ? Y.event(t) : t);
    }
  };
}
function nt(e, t, n, o, i, s, a, p, g, h) {
  var _, l, c, w, R, S, j, M, u, k, f, $, z, V, F, K, q = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (g = !!(32 & n.__u), s = [p = t.__e = n.__e]), (_ = Y.__b) && _(t);
  e: if (typeof q == "function") {
    l = a.length;
    try {
      if (u = t.props, k = q.prototype && q.prototype.render, f = (_ = q.contextType) && o[_.__c], $ = _ ? f ? f.props.value : _.__ : o, n.__c ? M = (c = t.__c = n.__c).__ = c.__E : (k ? t.__c = c = new q(u, $) : (t.__c = c = new Ae(u, $), c.constructor = q, c.render = wr), f && f.sub(c), c.state || (c.state = {}), c.__n = o, w = c.__d = !0, c.__h = [], c._sb = []), k && c.__s == null && (c.__s = c.state), k && q.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ve({}, c.__s)), ve(c.__s, q.getDerivedStateFromProps(u, c.__s))), R = c.props, S = c.state, c.__v = t, w) k && q.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), k && c.componentDidMount != null && c.__h.push(c.componentDidMount);
      else {
        if (k && q.getDerivedStateFromProps == null && u !== R && c.componentWillReceiveProps != null && c.componentWillReceiveProps(u, $), t.__v == n.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(u, c.__s, $) === !1) {
          t.__v != n.__v && (c.props = u, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(te) {
            te && (te.__ = t);
          }), Ne.push.apply(c.__h, c._sb), c._sb = [], c.__h.length && a.push(c), p = ke(n);
          break e;
        }
        c.componentWillUpdate != null && c.componentWillUpdate(u, c.__s, $), k && c.componentDidUpdate != null && c.__h.push(function() {
          c.componentDidUpdate(R, S, j);
        });
      }
      if (c.context = $, c.props = u, c.__P = e, c.__e = !1, z = Y.__r, V = 0, k) c.state = c.__s, c.__d = !1, z && z(t), _ = c.render(c.props, c.state, c.context), Ne.push.apply(c.__h, c._sb), c._sb = [];
      else do
        c.__d = !1, z && z(t), _ = c.render(c.props, c.state, c.context), c.state = c.__s;
      while (c.__d && ++V < 25);
      c.state = c.__s, c.getChildContext != null && (o = ve(ve({}, o), c.getChildContext())), k && !w && c.getSnapshotBeforeUpdate != null && (j = c.getSnapshotBeforeUpdate(R, S)), F = _ != null && _.type === He && _.key == null ? Gt(_.props.children) : _, p = Vt(e, Fe(F) ? F : [F], t, n, o, i, s, a, p, g, h), c.base = t.__e, t.__u &= -161, c.__h.length && a.push(c), M && (c.__E = c.__ = null);
    } catch (te) {
      if (a.length = l, t.__v = null, g || s != null) {
        if (te.then) {
          for (t.__u |= g ? 160 : 128; p && p.nodeType == 8 && p.nextSibling; ) p = p.nextSibling;
          s != null && (s[s.indexOf(p)] = null), t.__e = p;
        } else if (s != null) for (K = s.length; K--; ) rt(s[K]);
      } else t.__e = n.__e;
      t.__k == null && (t.__k = n.__k || []), te.then || Wt(t), Y.__e(te, t, n);
    }
  } else s == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : p = t.__e = yr(n.__e, t, n, o, i, s, a, g, h);
  return (_ = Y.diffed) && _(t), 128 & t.__u ? void 0 : p;
}
function Wt(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Wt));
}
function Kt(e, t, n) {
  for (var o = 0; o < n.length; o++) ot(n[o], n[++o], n[++o]);
  Y.__c && Y.__c(t, e), e.some(function(i) {
    try {
      e = i.__h, i.__h = [], e.some(function(s) {
        s.call(i);
      });
    } catch (s) {
      Y.__e(s, i.__v);
    }
  });
}
function Gt(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : Fe(e) ? e.map(Gt) : e.constructor !== void 0 ? null : ve({}, e);
}
function yr(e, t, n, o, i, s, a, p, g) {
  var h, _, l, c, w, R, S, j = n.props || Le, M = t.props, u = t.type;
  if (u == "svg" ? i = "http://www.w3.org/2000/svg" : u == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), s != null) {
    for (h = 0; h < s.length; h++) if ((w = s[h]) && "setAttribute" in w == !!u && (u ? w.localName == u : w.nodeType == 3)) {
      e = w, s[h] = null;
      break;
    }
  }
  if (e == null) {
    if (u == null) return document.createTextNode(M);
    e = document.createElementNS(i, u, M.is && M), p && (Y.__m && Y.__m(t, s), p = !1), s = null;
  }
  if (u == null) j === M || p && e.data == M || (e.data = M);
  else {
    if (s = u == "textarea" && M.defaultValue != null ? null : s && Ue.call(e.childNodes), !p && s != null) for (j = {}, h = 0; h < e.attributes.length; h++) j[(w = e.attributes[h]).name] = w.value;
    for (h in j) w = j[h], h == "dangerouslySetInnerHTML" ? l = w : h == "children" || h in M || h == "value" && "defaultValue" in M || h == "checked" && "defaultChecked" in M || Pe(e, h, null, w, i);
    for (h in M) w = M[h], h == "children" ? c = w : h == "dangerouslySetInnerHTML" ? _ = w : h == "value" ? R = w : h == "checked" ? S = w : p && typeof w != "function" || j[h] === w || Pe(e, h, w, j[h], i);
    if (_) p || l && (_.__html == l.__html || _.__html == e.innerHTML) || (e.innerHTML = _.__html), t.__k = [];
    else if (l && (e.innerHTML = ""), Vt(t.type == "template" ? e.content : e, Fe(c) ? c : [c], t, n, o, u == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, s, a, s ? s[0] : n.__k && ke(n, 0), p, g), s != null) for (h = s.length; h--; ) rt(s[h]);
    p && u != "textarea" || (h = "value", u == "progress" && R == null ? e.removeAttribute("value") : R != null && (R !== e[h] || u == "progress" && !R || u == "option" && R != j[h]) && Pe(e, h, R, j[h], i), h = "checked", S != null && S != e[h] && Pe(e, h, S, j[h], i));
  }
  return e;
}
function ot(e, t, n) {
  try {
    if (typeof e == "function") {
      var o = typeof e.__u == "function";
      o && e.__u(), o && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (i) {
    Y.__e(i, n);
  }
}
function Jt(e, t, n) {
  var o, i;
  if (Y.unmount && Y.unmount(e), (o = e.ref) && (o.current && o.current != e.__e || ot(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (s) {
      Y.__e(s, t);
    }
    o.base = o.__P = o.__n = null;
  }
  if (o = e.__k) for (i = 0; i < o.length; i++) o[i] && Jt(o[i], t, n || typeof e.type != "function");
  n || rt(e.__e), e.__c = e.__ = e.__e = void 0;
}
function wr(e, t, n) {
  return this.constructor(e, n);
}
function ut(e, t, n) {
  var o, i, s, a;
  t == document && (t = document.documentElement), Y.__ && Y.__(e, t), i = (o = !1) ? null : t.__k, s = [], a = [], nt(t, e = t.__k = br(He, null, [e]), i || Le, Le, t.namespaceURI, i ? null : t.firstChild ? Ue.call(t.childNodes) : null, s, i ? i.__e : t.firstChild, o, a), Kt(s, e, a), e.props.children = null;
}
Ue = Ne.slice, Y = { __e: function(e, t, n, o) {
  for (var i, s, a; t = t.__; ) if ((i = t.__c) && !i.__) try {
    if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), a = i.__d), a) return i.__E = i;
  } catch (p) {
    e = p;
  }
  throw e;
} }, Ot = 0, Ae.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = ve({}, this.state), typeof e == "function" && (e = e(ve({}, n), this.props)), e && ve(n, e), e != null && this.__v && (t && this._sb.push(t), ct(this));
}, Ae.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ct(this));
}, Ae.prototype.render = He, xe = [], Ut = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ft = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, De.__r = 0, qe = Math.random().toString(8), je = "__d" + qe, $e = "__a" + qe, Ht = /(PointerCapture)$|Capture$/i, tt = 0, Qe = ht(!1), Ye = ht(!0);
var kr = 0;
function r(e, t, n, o, i, s) {
  t || (t = {});
  var a, p, g = t;
  if ("ref" in g) for (p in g = {}, t) p == "ref" ? a = t[p] : g[p] = t[p];
  var h = { type: e, props: g, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --kr, __i: -1, __u: 0, __source: i, __self: s };
  if (typeof e == "function" && (a = e.defaultProps)) for (p in a) g[p] === void 0 && (g[p] = a[p]);
  return Y.vnode && Y.vnode(h), h;
}
var Se, ee, We, mt, Oe = 0, Qt = [], ne = Y, ft = ne.__b, gt = ne.__r, bt = ne.diffed, vt = ne.__c, xt = ne.unmount, _t = ne.__;
function Be(e, t) {
  ne.__h && ne.__h(ee, e, Oe || t), Oe = 0;
  var n = ee.__H || (ee.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function E(e) {
  return Oe = 1, zr(Yt, e);
}
function zr(e, t, n) {
  var o = Be(Se++, 2);
  if (o.t = e, !o.__c && (o.__ = [Yt(void 0, t), function(p) {
    var g = o.__N ? o.__N[0] : o.__[0], h = o.t(g, p);
    g !== h && (o.__N = [h, o.__[1]], o.__c.setState({}));
  }], o.__c = ee, !ee.__f)) {
    var i = function(p, g, h) {
      if (!o.__c.__H) return !0;
      var _ = !1, l = o.__c.props !== p;
      if (o.__c.__H.__.some(function(w) {
        if (w.__N) {
          _ = !0;
          var R = w.__[0];
          w.__ = w.__N, w.__N = void 0, R !== w.__[0] && (l = !0);
        }
      }), s) {
        var c = s.call(this, p, g, h);
        return _ ? c || l : c;
      }
      return !_ || l;
    };
    ee.__f = !0;
    var s = ee.shouldComponentUpdate, a = ee.componentWillUpdate;
    ee.componentWillUpdate = function(p, g, h) {
      if (this.__e) {
        var _ = s;
        s = void 0, i(p, g, h), s = _;
      }
      a && a.call(this, p, g, h);
    }, ee.shouldComponentUpdate = i;
  }
  return o.__N || o.__;
}
function oe(e, t) {
  var n = Be(Se++, 3);
  !ne.__s && st(n.__H, t) && (n.__ = e, n.u = t, ee.__H.__h.push(n));
}
function Sr(e, t) {
  var n = Be(Se++, 4);
  !ne.__s && st(n.__H, t) && (n.__ = e, n.u = t, ee.__h.push(n));
}
function de(e) {
  return Oe = 5, ge(function() {
    return { current: e };
  }, []);
}
function ge(e, t) {
  var n = Be(Se++, 7);
  return st(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function Cr() {
  for (var e; e = Qt.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(Me), t.__h.some(Ze), t.__h = [];
    } catch (n) {
      t.__h = [], ne.__e(n, e.__v);
    }
  }
}
ne.__b = function(e) {
  ee = null, ft && ft(e);
}, ne.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), _t && _t(e, t);
}, ne.__r = function(e) {
  gt && gt(e), Se = 0;
  var t = (ee = e.__c).__H;
  t && (We === ee ? (t.__h = [], ee.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(Me), t.__h.some(Ze), t.__h = [], Se = 0)), We = ee;
}, ne.diffed = function(e) {
  bt && bt(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Qt.push(t) !== 1 && mt === ne.requestAnimationFrame || ((mt = ne.requestAnimationFrame) || $r)(Cr)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), We = ee = null;
}, ne.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(Me), n.__h = n.__h.filter(function(o) {
        return !o.__ || Ze(o);
      });
    } catch (o) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], ne.__e(o, n.__v);
    }
  }), vt && vt(e, t);
}, ne.unmount = function(e) {
  xt && xt(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(o) {
    try {
      Me(o);
    } catch (i) {
      t = i;
    }
  }), n.__H = void 0, t && ne.__e(t, n.__v));
};
var yt = typeof requestAnimationFrame == "function";
function $r(e) {
  var t, n = function() {
    clearTimeout(o), yt && cancelAnimationFrame(t), setTimeout(e);
  }, o = setTimeout(n, 35);
  yt && (t = requestAnimationFrame(n));
}
function Me(e) {
  var t = ee, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), ee = t;
}
function Ze(e) {
  var t = ee;
  e.__c = e.__(), ee = t;
}
function st(e, t) {
  return !e || e.length !== t.length || t.some(function(n, o) {
    return n !== e[o];
  });
}
function Yt(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const Tr = {
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
function Zt(e) {
  var o;
  const t = ((o = e.name.split(".").pop()) == null ? void 0 : o.toLocaleLowerCase()) ?? "";
  if (e.name.includes(".")) return Tr[t] ?? null;
  const n = e.type.split("/", 1)[0];
  return n === "image" || n === "video" || n === "audio" ? n : null;
}
function Pr(e) {
  const i = e.replace(/\.[^.]+$/, "").replace(/^\s*\d+\s*[-_. ]+/, "").normalize("NFKC").replace(/[\s-]+/g, "_").replace(/[{}]/g, "").replace(/_+/g, "_").replace(/^[_\.]+|[_\.]+$/g, "").slice(0, 96) || "asset";
  return i.toLocaleLowerCase().endsWith(".audio") ? `${i}_asset` : i;
}
function Ir(e, t) {
  const n = new Set(Array.from(t, (i) => i.toLocaleLowerCase()));
  if (!n.has(e.toLocaleLowerCase())) return e;
  let o = 2;
  for (; n.has(`${e}_${o}`.toLocaleLowerCase()); ) o += 1;
  return `${e}_${o}`;
}
function jr(e, t, n) {
  const o = e.trim().toLocaleLowerCase();
  return !e.trim() || /[\s{}]/.test(e) || o.endsWith(".audio") ? "invalid" : Array.from(t, (s) => s.toLocaleLowerCase()).includes(o) || Array.from(n, (s) => s.trim().toLocaleLowerCase()).filter((s) => s === o).length > 1 ? "duplicate" : null;
}
function Er(e, t, n) {
  const o = new Set(Array.from(t)), i = [], s = [], a = e.map((p) => "file" in p ? p : { file: p, relativePath: p.webkitRelativePath || p.name });
  a.sort((p, g) => p.relativePath.localeCompare(g.relativePath, "en", { numeric: !0, sensitivity: "base" }));
  for (const p of a) {
    const { file: g } = p, h = Zt(g);
    if (!h) {
      s.push(p.relativePath);
      continue;
    }
    const _ = Ir(Pr(g.name), o);
    o.add(_), i.push({ id: n(), file: g, sourcePath: p.relativePath, alias: _, kind: h, durationSeconds: h === "image" ? null : 2, includeVideoAudio: !1, status: "pending", error: "" });
  }
  return { drafts: i, rejected: s };
}
function Ar(e, t, n) {
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
const Xt = (e, t) => e.relativePath.localeCompare(t.relativePath, "en", { numeric: !0, sensitivity: "base" });
function er(e, t) {
  return e.replace(/\\/g, "/").replace(/^\/+/, "").replace(/\/{2,}/g, "/") || t;
}
function Xe(e) {
  return Array.from(e, (t) => ({
    file: t,
    // webkitRelativePath 由目录选择器提供；普通多文件选择回退到文件名。
    relativePath: er(t.webkitRelativePath, t.name)
  })).sort(Xt);
}
function Mr(e) {
  return new Promise((t, n) => e.file(t, n));
}
function Rr(e) {
  return new Promise((t, n) => e.readEntries(t, n));
}
async function Lr(e, t) {
  const n = e.createReader(), o = [];
  for (; t(); ) {
    const i = await Rr(n);
    if (!i.length) return o;
    o.push(...i);
  }
  return o;
}
async function Nr(e, t, n = () => !0) {
  const o = [], i = async (s) => {
    if (!n()) return;
    if (s.isFile) {
      const p = await Mr(s);
      if (!n()) return;
      o.push({ file: p, relativePath: er(s.fullPath, p.name) }), t == null || t(o.length);
      return;
    }
    if (!s.isDirectory) return;
    const a = await Lr(s, n);
    for (const p of a) await i(p);
  };
  for (const s of e) {
    if (!n()) break;
    await i(s);
  }
  return o.sort(Xt);
}
async function Dr(e, t, n = () => !0) {
  const i = Array.from(e.items ?? []).filter((a) => a.kind === "file" && typeof a.webkitGetAsEntry == "function");
  if (i.length) {
    const a = i.map((p) => {
      var g;
      return (g = p.webkitGetAsEntry) == null ? void 0 : g.call(p);
    }).filter((p) => !!p);
    if (a.length) return Nr(a, t, n);
  }
  const s = Xe(e.files ?? []);
  return n() && (t == null || t(s.length)), s;
}
function Or(e, t) {
  return t === "image" ? Promise.resolve(null) : new Promise((n) => {
    const o = document.createElement(t === "video" ? "video" : "audio"), i = URL.createObjectURL(e);
    let s = !1;
    const a = (p) => {
      s || (s = !0, o.onloadedmetadata = null, o.onerror = null, o.removeAttribute("src"), o.load(), URL.revokeObjectURL(i), n(p));
    };
    o.preload = "metadata", o.onloadedmetadata = () => a(Number.isFinite(o.duration) && o.duration > 0 ? Math.round(o.duration * 10) / 10 : null), o.onerror = () => a(null), o.src = i;
  });
}
const Ur = () => `asset_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`, Ke = (e, t) => t === "zh" ? { image: "图片", video: "视频", audio: "音频" }[e] : e;
function Fr({ language: e, assets: t, projectName: n, onClose: o, onImported: i, uploadFile: s }) {
  const [a, p] = E([]), [g, h] = E([]), [_, l] = E(!1), [c, w] = E(!1), [R, S] = E(0), [j, M] = E(!1), u = de([]), k = de(null), f = de(0);
  u.current = a;
  const $ = t.map((m) => m.alias);
  oe(() => {
    var m, A;
    return (m = k.current) == null || m.setAttribute("webkitdirectory", ""), (A = k.current) == null || A.setAttribute("directory", ""), () => {
      f.current += 1;
    };
  }, []);
  const z = (m, A) => p((T) => T.map((C) => C.id === m ? { ...C, ...A } : C)), V = (m, A) => {
    let T = 0;
    const C = async () => {
      for (; T < m.length && f.current === A; ) {
        const B = m[T++];
        if (B.kind === "image") continue;
        const re = await Or(B.file, B.kind);
        re == null || f.current !== A || p((Q) => Q.map((se) => se.id === B.id && se.kind === B.kind && se.durationSeconds === 2 ? { ...se, durationSeconds: re } : se));
      }
    };
    Promise.all(Array.from({ length: Math.min(4, m.length) }, C));
  }, F = (m) => {
    if (!m.length || j) return;
    const A = [...$, ...u.current.map((C) => C.alias)], T = Er(m, A, Ur);
    T.rejected.length && h((C) => [...C, ...T.rejected]), T.drafts.length && (p((C) => [...C, ...T.drafts]), V(T.drafts, f.current));
  }, K = async (m) => {
    if (c || j) return;
    const A = f.current;
    w(!0), S(0);
    try {
      const T = () => f.current === A, C = await m((B) => {
        T() && S(B);
      }, T);
      if (f.current !== A) return;
      S(C.length), F(C);
    } catch (T) {
      f.current === A && h((C) => [...C, String(T)]);
    } finally {
      f.current === A && w(!1);
    }
  }, te = a.filter((m) => m.status !== "imported").map((m) => m.alias), pe = (m) => {
    if (m.status === "imported") return null;
    const A = jr(m.alias, $, te);
    return A === "invalid" ? e === "zh" ? "别名为空、包含空白/花括号，或使用了保留后缀 .audio" : "Alias is empty, contains whitespace/braces, or uses reserved .audio" : A === "duplicate" ? e === "zh" ? "别名与素材库或本批次其他素材重复" : "Alias duplicates an existing or staged asset" : Zt(m.file) !== m.kind ? e === "zh" ? "文件扩展名与所选类型不匹配" : "The extension does not match the selected kind" : m.kind !== "image" && (m.durationSeconds == null || m.durationSeconds <= 0) ? e === "zh" ? "视频或音频时长必须大于 0" : "Video/audio duration must be greater than 0" : null;
  }, le = async () => {
    const A = u.current.filter((re) => re.status === "pending" || re.status === "error");
    if (!A.length || c) return;
    if (A.some(pe)) {
      window.alert(e === "zh" ? "请先修正列表中标红的项目。" : "Fix the highlighted rows before importing.");
      return;
    }
    M(!0);
    const T = Math.max(0, ...t.map((re) => re.fixedOrder)) + 1;
    let C = 0;
    const B = async () => {
      for (; C < A.length; ) {
        const re = C++, Q = A[re];
        z(Q.id, { status: "uploading", error: "" });
        try {
          const se = await s(n, Q.kind, Q.file);
          i([Ar(Q, se, T + re)]), z(Q.id, { status: "imported", error: "" });
        } catch (se) {
          z(Q.id, { status: "error", error: String(se) });
        }
      }
    };
    await Promise.all(Array.from({ length: Math.min(2, A.length) }, B)), M(!1);
  }, ue = a.filter((m) => m.status === "imported").length, v = a.filter((m) => m.status === "error").length, L = a.length - ue, D = () => {
    f.current += 1, o();
  };
  return /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-asset-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": e === "zh" ? "批量导入素材" : "Batch import assets", children: [
    /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: e === "zh" ? "批量导入素材" : "Batch import assets" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "可混合选择文件或递归导入文件夹；确认列表后再写入素材库。" : "Select files or recursively import folders; review before uploading." })
      ] }),
      /* @__PURE__ */ r("button", { disabled: j, "aria-label": e === "zh" ? "关闭" : "Close", onClick: D, children: "×" })
    ] }),
    /* @__PURE__ */ r("div", { class: `td-asset-dropzone ${_ ? "dragging" : ""}`, onDragEnter: (m) => {
      m.preventDefault(), l(!0);
    }, onDragOver: (m) => m.preventDefault(), onDragLeave: (m) => {
      m.currentTarget === m.target && l(!1);
    }, onDrop: (m) => {
      m.preventDefault(), l(!1);
      const A = m.dataTransfer;
      A && K((T, C) => Dr(A, T, C));
    }, children: [
      /* @__PURE__ */ r("strong", { children: c ? e === "zh" ? `正在扫描文件夹…已发现 ${R} 个文件` : `Scanning folders… ${R} files found` : e === "zh" ? "拖拽文件或文件夹到这里" : "Drop files or folders here" }),
      /* @__PURE__ */ r("span", { children: e === "zh" ? "递归识别子文件夹中的图片、视频和音频" : "Images, videos, and audio are detected recursively" }),
      /* @__PURE__ */ r("div", { class: "td-asset-picker-actions", children: [
        /* @__PURE__ */ r("label", { class: "td-asset-picker-button", children: [
          e === "zh" ? "选择多个文件" : "Choose files",
          /* @__PURE__ */ r("input", { type: "file", multiple: !0, accept: "image/*,video/*,audio/*", disabled: j || c, onChange: (m) => {
            F(Xe(m.currentTarget.files ?? [])), m.currentTarget.value = "";
          } })
        ] }),
        /* @__PURE__ */ r("label", { class: "td-asset-picker-button", children: [
          e === "zh" ? "选择文件夹" : "Choose folder",
          /* @__PURE__ */ r("input", { ref: k, type: "file", multiple: !0, disabled: j || c, onChange: (m) => {
            const A = Xe(m.currentTarget.files ?? []);
            m.currentTarget.value = "", K(async (T) => (T(A.length), A));
          } })
        ] })
      ] })
    ] }),
    g.length > 0 && /* @__PURE__ */ r("div", { class: "td-asset-batch-warning", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `已跳过 ${g.length} 个不支持的文件：${g.join("、")}` : `Skipped ${g.length} unsupported files: ${g.join(", ")}` }),
      /* @__PURE__ */ r("button", { onClick: () => h([]), children: "×" })
    ] }),
    /* @__PURE__ */ r("div", { class: "td-asset-batch-summary", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `共 ${a.length} 项 · 已导入 ${ue} · 待处理 ${L}${v ? ` · 失败 ${v}` : ""}` : `${a.length} items · ${ue} imported · ${L} pending${v ? ` · ${v} failed` : ""}` }),
      /* @__PURE__ */ r("button", { disabled: j || !a.length, onClick: () => p([]), children: e === "zh" ? "清空列表" : "Clear list" })
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
      a.map((m) => {
        const A = pe(m), T = j || m.status === "imported" || m.status === "uploading";
        return /* @__PURE__ */ r("div", { class: `td-asset-batch-row ${A || m.status === "error" ? "invalid" : ""} ${m.status === "imported" ? "imported" : ""}`, children: [
          /* @__PURE__ */ r("div", { class: "td-asset-batch-file", children: [
            /* @__PURE__ */ r("strong", { title: m.sourcePath, children: m.sourcePath }),
            /* @__PURE__ */ r("small", { children: [
              (m.file.size / 1024 / 1024).toFixed(1),
              " MB · ",
              m.status === "pending" ? e === "zh" ? "待导入" : "Pending" : m.status === "uploading" ? e === "zh" ? "上传中" : "Uploading" : m.status === "imported" ? e === "zh" ? "已完成" : "Imported" : e === "zh" ? "失败" : "Failed"
            ] }),
            (A || m.error) && /* @__PURE__ */ r("em", { title: A || m.error, children: A || m.error })
          ] }),
          /* @__PURE__ */ r("input", { disabled: T, value: m.alias, onInput: (C) => z(m.id, { alias: C.currentTarget.value, status: "pending", error: "" }) }),
          /* @__PURE__ */ r("select", { disabled: T, value: m.kind, onChange: (C) => {
            const B = C.currentTarget.value;
            z(m.id, { kind: B, durationSeconds: B === "image" ? null : m.durationSeconds ?? 2, includeVideoAudio: B === "video" && m.includeVideoAudio, status: "pending", error: "" });
          }, children: [
            /* @__PURE__ */ r("option", { value: "image", children: Ke("image", e) }),
            /* @__PURE__ */ r("option", { value: "video", children: Ke("video", e) }),
            /* @__PURE__ */ r("option", { value: "audio", children: Ke("audio", e) })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", disabled: T || m.kind === "image", value: m.durationSeconds ?? "", onInput: (C) => z(m.id, { durationSeconds: C.currentTarget.value ? Number(C.currentTarget.value) : null, status: "pending", error: "" }) }),
            /* @__PURE__ */ r("span", { children: m.kind === "image" ? "—" : e === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-audio", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", disabled: T || m.kind !== "video", checked: m.kind === "video" && m.includeVideoAudio, onChange: (C) => z(m.id, { includeVideoAudio: C.currentTarget.checked }) }),
            /* @__PURE__ */ r("span", { children: m.kind === "video" ? m.includeVideoAudio ? e === "zh" ? "开" : "ON" : e === "zh" ? "关" : "OFF" : "—" })
          ] }),
          /* @__PURE__ */ r("button", { class: "danger", disabled: T, onClick: () => p((C) => C.filter((B) => B.id !== m.id)), children: e === "zh" ? "移除" : "Remove" })
        ] }, m.id);
      })
    ] }),
    /* @__PURE__ */ r("footer", { children: [
      /* @__PURE__ */ r("button", { disabled: j, onClick: D, children: e === "zh" ? "关闭" : "Close" }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: j || c || !a.some((m) => m.status === "pending" || m.status === "error"), onClick: () => void le(), children: c ? e === "zh" ? "正在扫描…" : "Scanning…" : j ? e === "zh" ? "正在导入…" : "Importing…" : v ? e === "zh" ? "重试失败项" : "Retry failed" : e === "zh" ? "开始导入" : "Start import" })
    ] })
  ] }) });
}
function Hr(e, t) {
  return { projectName: e, runId: t };
}
async function Br(e, t) {
  const n = await fetch("/theodore-director/v1/project/clear", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Hr(e, t))
  }), o = await n.json();
  if (!n.ok || !o.ok) throw new Error(o.error || `HTTP ${n.status}`);
  return o.path || "";
}
function ce(e, t) {
  const n = e.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!n || n.startsWith("/") || /^[A-Za-z]:\//.test(n)) return null;
  const o = n.split("/").filter(Boolean), i = o.pop();
  if (!i || o.some((a) => a === "..")) return null;
  const s = new URLSearchParams({ filename: i, type: t });
  return o.length && s.set("subfolder", o.join("/")), `/view?${s.toString()}`;
}
function tr(e) {
  return ce(e, "input");
}
function ae(e) {
  return e.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function wt({ asset: e, compact: t = !1 }) {
  const n = tr(e.path), o = `td-media-preview ${t ? "compact" : ""}`;
  return n ? e.kind === "image" ? /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("img", { src: n, alt: e.alias, loading: "lazy" }) }) : e.kind === "video" ? /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("video", { src: n, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("audio", { src: n, controls: !0, preload: "metadata" }) }) : e.path ? /* @__PURE__ */ r("div", { class: `${o} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ r("div", { class: `${o} empty`, children: "尚未选择素材 / No media selected" });
}
function Vr(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > e.length) return null;
  const o = e.slice(0, t).lastIndexOf("@");
  if (o < 0) return null;
  const i = o > 0 ? e[o - 1] : "";
  if (i && /[A-Za-z0-9_.+-]/.test(i)) return null;
  const s = e.slice(o + 1, t);
  return /[\s{}@]/u.test(s) ? null : { start: o, end: t, query: s };
}
function qr(e, t) {
  const n = t.trim().toLocaleLowerCase();
  if (!n) return e;
  const o = [], i = [];
  for (const s of e)
    s.alias.toLocaleLowerCase().includes(n) ? o.push(s) : ae(s.path).toLocaleLowerCase().includes(n) && i.push(s);
  return [...o, ...i];
}
function Wr(e, t, n) {
  const o = `{{ref:${n}}}`;
  return {
    value: `${e.slice(0, t.start)}${o}${e.slice(t.end)}`,
    caret: t.start + o.length
  };
}
const rr = String.raw`\{\{ref:([^{}]+)}}`;
function kt() {
  return new RegExp(rr, "g");
}
function nr(e, t) {
  return e.assets.filter((n) => n.enabled && n.path.trim() && (!(n.shotIds ?? []).length || (n.shotIds ?? []).includes(t.id)) && !(t.disabledAssetIds ?? []).includes(n.id));
}
function or(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const o of nr(e, t)) n.set(o.alias, o);
  return n;
}
function sr(e, t, n) {
  const o = n.trim(), i = o.endsWith(".audio"), s = i ? o.slice(0, -6) : o, a = or(e, t).get(s);
  return a ? !i || a.kind === "video" && a.includeVideoAudio : !1;
}
function zt(e, t) {
  const n = e.shots.filter((o) => o.enabled);
  return n.length > 0 && n.every((o) => sr(e, o, t));
}
function Kr(e) {
  return {
    ...e,
    assets: [],
    shots: e.shots.map((t) => ({ ...t, disabledAssetIds: [] }))
  };
}
function ir(e, t) {
  const n = [], o = or(e, t), i = [e.promptPrefix, t.prompt, e.promptSuffix].filter(Boolean).join(`
`), s = [...i.matchAll(kt())].map((f) => f[1].trim()), a = [], p = /* @__PURE__ */ new Set(), g = (f) => {
    p.has(f.id) || (p.add(f.id), a.push(f));
  };
  [...o.values()].filter((f) => f.fixed).sort((f, $) => f.fixedOrder - $.fixedOrder || f.alias.localeCompare($.alias)).forEach(g);
  for (const f of s) {
    const $ = f.endsWith(".audio") ? f.slice(0, -6) : f, z = o.get($);
    if (!z) {
      n.push(`未找到或已禁用素材：${f}`);
      continue;
    }
    f.endsWith(".audio") && (z.kind !== "video" || !z.includeVideoAudio) && n.push(`视频伴音未启用：${f}`), g(z);
  }
  const h = a.filter((f) => f.kind === "image"), _ = a.filter((f) => f.kind === "video"), l = _.filter((f) => f.includeVideoAudio), c = a.filter((f) => f.kind === "audio"), w = l.length + c.length, R = h.length + _.length + c.length;
  h.length > 9 && n.push(`参考图 ${h.length}/9，超出 H3 上限`), _.length > 3 && n.push(`参考视频 ${_.length}/3，超出 H3 上限`), w > 3 && n.push(`有效音频 ${w}/3，超出 H3 总上限`), R > 12 && n.push(`混合文件 ${R}/12，超出 H3 上限`), w && !h.length && !_.length && n.push("音频参考不能单独使用");
  const S = _.filter((f) => typeof f.durationSeconds == "number");
  for (const f of _) (f.durationSeconds == null || f.durationSeconds < 2 || f.durationSeconds > 15) && n.push(`视频 ${f.alias} 的时长必须为 2–15 秒`);
  S.reduce((f, $) => f + ($.durationSeconds ?? 0), 0) > 15 && n.push("参考视频总时长超过 15 秒");
  const j = [...l.map((f) => f.audioDurationSeconds ?? f.durationSeconds), ...c.map((f) => f.durationSeconds)];
  j.some((f) => f == null || f < 2 || f > 15) && n.push("每路有效音频时长必须为 2–15 秒"), j.reduce((f, $) => f + ($ ?? 0), 0) > 15 && n.push("有效音频总时长超过 15 秒");
  const M = /* @__PURE__ */ new Map();
  h.forEach((f, $) => M.set(f.alias, `<Picture ${$ + 1}>`)), _.forEach((f, $) => M.set(f.alias, `<Video ${$ + 1}>`)), l.forEach((f, $) => M.set(`${f.alias}.audio`, `<Audio ${$ + 1}>`)), c.forEach((f, $) => M.set(f.alias, `<Audio ${l.length + $ + 1}>`));
  const u = i.replace(kt(), (f, $) => M.get($.trim()) ?? f), k = [...M.entries()].map(([f, $]) => ({ label: $, alias: f, kind: $.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: u, errors: n, slots: k, mixedFiles: R, audioCount: w };
}
function Gr(e) {
  var s, a, p, g, h, _;
  const t = [], n = /* @__PURE__ */ new Set(["off", "super_resolution_second_pass", "latent_upscale_second_pass", "super_resolution_only"]);
  (a = (s = e.project) == null ? void 0 : s.name) != null && a.trim() || t.push("Project name 不能为空"), (g = (p = e.project) == null ? void 0 : p.runId) != null && g.trim() || t.push("Run ID 不能为空"), (!Array.isArray(e.shots) || !e.shots.some((l) => l.enabled)) && t.push("至少需要一个启用分镜");
  const o = /* @__PURE__ */ new Set();
  for (const l of e.shots ?? [])
    (!((h = l.id) != null && h.trim()) || o.has(l.id)) && t.push(`分镜 ID 为空或重复：${l.id || "(空)"}`), o.add(l.id), l.durationSeconds > 0 || t.push(`分镜 ${l.id} 的时长必须大于 0`), n.has(l.secondSamplingMode) || t.push(`分镜 ${l.id} 的高清处理模式无效`);
  const i = /* @__PURE__ */ new Set();
  for (const l of e.assets ?? []) {
    const c = (_ = l.alias) == null ? void 0 : _.toLocaleLowerCase();
    (!l.alias || /[\s{}]/.test(l.alias) || l.alias.endsWith(".audio") || i.has(c)) && t.push(`素材别名无效或重复：${l.alias || "(空)"}`), i.add(c), l.enabled && !l.path && t.push(`素材 ${l.alias} 尚未选择文件`);
  }
  for (const l of e.shots.filter((c) => c.enabled)) t.push(...ir(e, l).errors.map((c) => `${l.title}: ${c}`));
  return [...new Set(t)];
}
function Jr(e, t) {
  const n = [], o = new RegExp(rr, "g");
  let i = 0;
  for (const s of e.matchAll(o)) {
    const a = s.index ?? 0;
    a > i && n.push({ text: e.slice(i, a), reference: !1 }), n.push({ text: s[0], reference: !0, valid: t(s[1]) }), i = a + s[0].length;
  }
  return i < e.length && n.push({ text: e.slice(i), reference: !1 }), n;
}
const Qr = [
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
function Yr(e, t) {
  const n = window.getComputedStyle(e), o = e.getBoundingClientRect(), i = document.createElement("div");
  i.setAttribute("aria-hidden", "true"), i.style.position = "fixed", i.style.visibility = "hidden", i.style.pointerEvents = "none", i.style.left = `${o.left}px`, i.style.top = `${o.top}px`, i.style.width = `${e.offsetWidth}px`, i.style.height = `${e.offsetHeight}px`, i.style.overflow = "hidden", i.style.whiteSpace = "pre-wrap";
  for (const g of Qr) i.style[g] = n[g];
  i.append(document.createTextNode(e.value.slice(0, t)));
  const s = document.createElement("span");
  s.textContent = "​", i.append(s), document.body.append(i), i.scrollTop = e.scrollTop, i.scrollLeft = e.scrollLeft;
  const a = s.getBoundingClientRect(), p = Number.parseFloat(n.lineHeight) || Number.parseFloat(n.fontSize) * 1.45 || 20;
  return i.remove(), { left: a.left, top: a.top, bottom: a.top + p };
}
const Zr = {
  zh: { image: "图片", video: "视频", audio: "音频" },
  en: { image: "Image", video: "Video", audio: "Audio" }
};
function Ge({ value: e, rows: t, onInput: n, isReferenceValid: o, mentionAssets: i, mentionLanguage: s = "zh" }) {
  const a = de(null), p = de(null), g = de(null), h = de(null), _ = de(!1), l = de(!1), c = de([]), w = de([]), R = de(`td-reference-mention-${Math.random().toString(36).slice(2)}`).current, [S, j] = E(null), [M, u] = E(0), [k, f] = E(null), $ = Jr(e, o), z = ge(
    () => S && i ? qr(i, S.query) : [],
    [S, i]
  ), V = () => {
    j(null), f(null), u(0);
  }, F = (v) => {
    if (!i || v.selectionStart !== v.selectionEnd) {
      V();
      return;
    }
    const L = Vr(v.value, v.selectionStart);
    if (!L) {
      V();
      return;
    }
    j((D) => D && D.start === L.start && D.end === L.end && D.query === L.query ? D : L);
  }, K = () => {
    var re;
    if (!S || !g.current) return;
    const v = Yr(g.current, S.end), L = 8, D = Math.min(390, Math.max(240, window.innerWidth - L * 2)), m = Math.min(320, Math.max(150, window.innerHeight - L * 2)), A = Math.min(((re = h.current) == null ? void 0 : re.offsetHeight) || m, m), T = Math.min(Math.max(v.left, L), window.innerWidth - D - L), B = v.bottom + 6 + A > window.innerHeight - L && v.top - A - 6 >= L ? v.top - A - 6 : Math.min(v.bottom + 6, window.innerHeight - A - L);
    f((Q) => Q && Q.left === T && Q.top === B && Q.width === D && Q.maxHeight === m ? Q : { left: T, top: B, width: D, maxHeight: m });
  };
  Sr(K, [S, z.length, !!k]), oe(() => {
    if (!S) return;
    const v = () => K(), L = (D) => {
      var m, A;
      D.target instanceof Node && ((m = a.current) != null && m.contains(D.target) || (A = h.current) != null && A.contains(D.target)) || V();
    };
    return window.addEventListener("resize", v), document.addEventListener("scroll", v, !0), document.addEventListener("mousedown", L), () => {
      window.removeEventListener("resize", v), document.removeEventListener("scroll", v, !0), document.removeEventListener("mousedown", L);
    };
  }, [S]), oe(() => u(0), [S == null ? void 0 : S.query]), oe(() => {
    M >= z.length && u(Math.max(0, z.length - 1));
  }, [M, z.length]), oe(() => {
    var v, L;
    (L = (v = h.current) == null ? void 0 : v.querySelector('[aria-selected="true"]')) == null || L.scrollIntoView({ block: "nearest" });
  }, [M, z.length]);
  const q = (v) => {
    p.current && (p.current.scrollTop = v.currentTarget.scrollTop, p.current.scrollLeft = v.currentTarget.scrollLeft), S && K();
  }, te = (v, L) => {
    if (!g.current) return;
    const D = g.current;
    l.current = !0, D.value = v, D.dispatchEvent(new Event("input", { bubbles: !0 })), l.current = !1, V(), window.requestAnimationFrame(() => {
      D.focus({ preventScroll: !0 }), D.setSelectionRange(L, L);
    });
  }, pe = (v) => {
    if (!(v.ctrlKey || v.metaKey) || v.altKey) return !1;
    const L = v.key.toLocaleLowerCase(), D = L === "y" || L === "z" && v.shiftKey;
    if (!(L === "z" && !v.shiftKey) && !D) return !1;
    const A = D ? w.current : c.current, T = A[A.length - 1], C = D ? T == null ? void 0 : T.beforeValue : T == null ? void 0 : T.afterValue;
    return !T || v.currentTarget.value !== C ? !1 : (v.preventDefault(), A.pop(), (D ? c.current : w.current).push(T), te(D ? T.afterValue : T.beforeValue, D ? T.afterCaret : T.beforeCaret), !0);
  }, le = (v) => {
    if (!S || !g.current) return;
    const L = g.current, D = Wr(L.value, S, v.alias), m = `{{ref:${v.alias}}}`, A = {
      beforeValue: L.value,
      afterValue: D.value,
      beforeCaret: S.end,
      afterCaret: D.caret
    };
    L.focus({ preventScroll: !0 }), L.setSelectionRange(S.start, S.end);
    let T = !1;
    try {
      document.execCommand("insertText", !1, m), T = L.value === D.value;
    } catch {
    }
    T || (L.value = D.value, L.dispatchEvent(new Event("input", { bubbles: !0 }))), c.current.push(A), c.current.length > 100 && c.current.shift(), w.current = [], V(), window.requestAnimationFrame(() => {
      var C, B;
      (C = g.current) == null || C.focus({ preventScroll: !0 }), (B = g.current) == null || B.setSelectionRange(D.caret, D.caret);
    });
  }, ue = (v) => {
    if (!(v.isComposing || _.current) && !pe(v) && S) {
      if (v.key === "Escape") {
        v.preventDefault(), V();
        return;
      }
      if (z.length) {
        if (v.key === "ArrowDown" || v.key === "ArrowUp") {
          v.preventDefault();
          const L = v.key === "ArrowDown" ? 1 : -1;
          u((D) => (D + L + z.length) % z.length);
          return;
        }
        (v.key === "Enter" || v.key === "Tab") && (v.preventDefault(), le(z[M] ?? z[0]));
      }
    }
  };
  return /* @__PURE__ */ r("span", { ref: a, class: "td-highlight-textarea", children: [
    /* @__PURE__ */ r("pre", { ref: p, class: "td-highlight-backdrop", "aria-hidden": "true", children: [
      $.map((v, L) => v.reference ? /* @__PURE__ */ r("mark", { class: v.valid ? "valid" : "invalid", children: v.text }, L) : v.text),
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
        "aria-autocomplete": i ? "list" : void 0,
        "aria-controls": S ? R : void 0,
        "aria-expanded": i ? !!S : void 0,
        "aria-activedescendant": S && z[M] ? `${R}-${z[M].id}` : void 0,
        onInput: (v) => {
          n(v);
          const L = v instanceof InputEvent ? v.inputType : "";
          !l.current && L !== "historyUndo" && L !== "historyRedo" && (w.current = []), _.current || F(v.currentTarget);
        },
        onClick: (v) => F(v.currentTarget),
        onSelect: (v) => {
          _.current || F(v.currentTarget);
        },
        onKeyDown: ue,
        onKeyUp: (v) => {
          !_.current && !["ArrowDown", "ArrowUp", "Enter", "Tab", "Escape"].includes(v.key) && F(v.currentTarget);
        },
        onCompositionStart: () => {
          _.current = !0;
        },
        onCompositionEnd: (v) => {
          _.current = !1, F(v.currentTarget);
        },
        onBlur: () => window.setTimeout(() => {
          document.activeElement !== g.current && V();
        }, 0),
        onScroll: q
      }
    ),
    S && k && /* @__PURE__ */ r(
      "div",
      {
        ref: h,
        id: R,
        class: "td-reference-mention-menu",
        role: "listbox",
        "aria-label": s === "zh" ? "选择参考素材" : "Choose reference media",
        style: { left: k.left, top: k.top, width: k.width, maxHeight: k.maxHeight },
        onMouseDown: (v) => v.preventDefault(),
        children: [
          /* @__PURE__ */ r("header", { children: [
            /* @__PURE__ */ r("strong", { children: s === "zh" ? "@ 参考素材" : "@ Reference media" }),
            /* @__PURE__ */ r("span", { children: z.length })
          ] }),
          z.length ? /* @__PURE__ */ r("div", { class: "td-reference-mention-options", children: z.map((v, L) => {
            const D = v.kind === "image" ? tr(v.path) : null, m = ae(v.path);
            return /* @__PURE__ */ r(
              "button",
              {
                id: `${R}-${v.id}`,
                type: "button",
                role: "option",
                "aria-selected": L === M,
                class: L === M ? "active" : "",
                onMouseEnter: () => u(L),
                onClick: () => le(v),
                children: [
                  /* @__PURE__ */ r("span", { class: `td-reference-mention-thumb ${v.kind}`, children: D ? /* @__PURE__ */ r("img", { src: D, alt: "", loading: "lazy" }) : /* @__PURE__ */ r("span", { children: v.kind === "image" ? "▧" : v.kind === "video" ? "▶" : "♫" }) }),
                  /* @__PURE__ */ r("span", { class: "td-reference-mention-copy", children: [
                    /* @__PURE__ */ r("strong", { children: v.alias }),
                    /* @__PURE__ */ r("small", { children: m || v.path })
                  ] }),
                  /* @__PURE__ */ r("em", { children: Zr[s][v.kind] })
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
const Xr = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", postprocess: "后处理", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", postprocess: "Post-process", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function we(e, t) {
  return Xr[e][t];
}
function fe(e) {
  return (Array.isArray(e.results) && e.results.length ? e.results : e.path ? [{ path: e.path, bytes: e.bytes, modifiedAt: e.modifiedAt, stage: e.stage, processingMode: e.processingMode, sourcePath: e.sourcePath, completedAt: e.completedAt }] : []).filter((n) => typeof n.path == "string" && n.path.trim().length > 0).sort((n, o) => (o.modifiedAt ?? 0) - (n.modifiedAt ?? 0));
}
function dr(e, t) {
  const n = /_video_(\d+)/i.exec(e.replace(/\\/g, "/"));
  return n ? Number(n[1]) : t;
}
function en(e, t) {
  return e.stage === "second_pass" && t !== "super_resolution_only" ? "second_pass_requires_upscale_only" : e.stage === "upscaled" ? "upscaled_is_terminal" : null;
}
function tn(e, t) {
  return en(e, t) === null;
}
function rn(e) {
  return ["super_resolution_second_pass", "latent_upscale_second_pass", "super_resolution_only"].filter((n) => tn(e, n));
}
function Te({ src: e, alt: t }) {
  const n = de(null), [o, i] = E(!1);
  return oe(() => {
    const s = n.current;
    if (!s) return;
    if (!("IntersectionObserver" in window)) {
      i(!0);
      return;
    }
    const a = new IntersectionObserver((p) => {
      i(p.some((g) => g.isIntersecting));
    }, { rootMargin: "160px" });
    return a.observe(s), () => a.disconnect();
  }, []), /* @__PURE__ */ r("div", { class: "td-result-thumb", ref: n, children: o ? /* @__PURE__ */ r("video", { src: e, "aria-label": t, muted: !0, playsInline: !0, preload: "metadata", onLoadedMetadata: (s) => {
    const a = s.currentTarget;
    Number.isFinite(a.duration) && a.duration > 0.02 && (a.currentTime = Math.min(0.25, Math.max(0, a.duration - 0.05)));
  } }) : /* @__PURE__ */ r("span", { children: "…" }) });
}
function it(e) {
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
function nn(e, t, n) {
  return e.filter((o) => o.shot.enabled && t[o.key]).map((o) => ({
    shotId: o.shot.id,
    activeIndex: o.activeIndex,
    path: n[o.key] ?? ""
  }));
}
function on(e, t, n) {
  const o = {};
  return e.forEach((i) => {
    const s = i.sourceIndex + 1;
    o[i.key] = i.shot.enabled && s >= t && s <= n;
  }), o;
}
function sn(e, t, n) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId, shotId: t, activeIndex: String(n) }).toString()}`;
}
function dn(e, t, n) {
  return t === "latent_upscale_second_pass" ? n === "zh" ? "Latent 放大二采" : "Latent upscale 2nd pass" : t === "super_resolution_second_pass" || e === "second_pass" ? n === "zh" ? "超分二采" : "Super-res 2nd pass" : t === "super_resolution_only" || e === "upscaled" ? n === "zh" ? "只超分" : "Super-res only" : e === "first_pass" ? n === "zh" ? "一采" : "1st pass" : n === "zh" ? "旧结果" : "Legacy";
}
function an(e, t) {
  return e === "latent_upscale_second_pass" ? t === "zh" ? "Latent 放大二采" : "Latent upscale 2nd pass" : e === "super_resolution_only" ? t === "zh" ? "只超分" : "Super-res only" : t === "zh" ? "超分二采" : "Super-res 2nd pass";
}
function ln({ plan: e, language: t, queueSecondPass: n }) {
  const o = ge(() => it(e), [e]), [i, s] = E({}), [a, p] = E({}), [g, h] = E(null), [_, l] = E(0), [c, w] = E({});
  oe(() => {
    let S = !1;
    const j = {};
    return o.forEach((M) => {
      j[M.key] = { loading: !0, response: { found: !1, results: [] } };
    }), s(j), o.forEach((M) => {
      fetch(sn(e, M.shot.id, M.activeIndex)).then(async (u) => {
        const k = await u.json();
        if (!u.ok) throw new Error(k.error || `HTTP ${u.status}`);
        S || s((f) => ({ ...f, [M.key]: { loading: !1, response: k } }));
      }).catch((u) => {
        S || s((k) => ({ ...k, [M.key]: { loading: !1, response: { found: !1, results: [], error: String(u) } } }));
      });
    }), () => {
      S = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((S) => S.id).join("|"), _]);
  const R = async (S, j, M) => {
    if (!n) return;
    const u = `${j}:${M}`;
    p((k) => ({ ...k, [u]: { state: "queued" } }));
    try {
      await n({
        plan: e,
        shotId: S,
        sourcePath: j,
        requestId: `td2_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`,
        processingMode: M
      }), p((k) => ({ ...k, [u]: { state: "done" } })), l((k) => k + 1);
    } catch (k) {
      p((f) => ({ ...f, [u]: { state: "error", message: String(k instanceof Error ? k.message : k) } }));
    }
  };
  return /* @__PURE__ */ r("section", { class: "td-postprocess td-second-pass-panel", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "单独二采" : "Standalone processing" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "对满意结果执行所选高清处理；二采结果只能继续只超分，不重跑一采或启动 Impact 循环。" : "Process a selected result; second-pass outputs may only continue with Super-res only, without rerunning the first pass or Impact loop." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: /* @__PURE__ */ r("button", { onClick: () => l((S) => S + 1), children: [
        "↻ ",
        t === "zh" ? "刷新结果" : "Refresh"
      ] }) })
    ] }),
    !n && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "当前工作流缺少后处理二采支流，请重新载入仓库中的 V7 导播台示例工作流。" : "This workflow does not contain the standalone second-pass branch. Reload the V7 example workflow from the repository." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: o.map((S) => {
      const j = i[S.key], M = fe((j == null ? void 0 : j.response) ?? { results: [] });
      return /* @__PURE__ */ r("article", { class: "td-post-shot", children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("span", { children: [
            /* @__PURE__ */ r("strong", { children: S.shot.id }),
            /* @__PURE__ */ r("em", { children: S.shot.title })
          ] }),
          /* @__PURE__ */ r("span", { children: [
            S.shot.durationSeconds,
            "s"
          ] })
        ] }),
        !S.shot.enabled && /* @__PURE__ */ r("div", { class: "td-post-shot-disabled-note", children: t === "zh" ? "镜头已禁用，但仍可对历史一采结果进行后处理。" : "This shot is disabled, but its historical first-pass results remain available." }),
        j != null && j.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading results…" }) : j != null && j.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : M.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: M.map((u) => {
          const k = ce(u.path, "output"), f = rn(u), $ = f.includes(c[u.path]) ? c[u.path] : f[0], z = $ ? a[`${u.path}:${$}`] : void 0;
          return /* @__PURE__ */ r("div", { class: "td-second-pass-result", children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", onClick: () => k && h({ path: u.path, title: `${S.shot.id} · ${S.shot.title}` }), children: [
              k ? /* @__PURE__ */ r(Te, { src: k, alt: ae(u.path) }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  dn(u.stage, u.processingMode, t),
                  (u.stage === "legacy_unknown" || !u.stage) && /* @__PURE__ */ r("em", { children: t === "zh" ? "兼容" : "Compatible" })
                ] }),
                /* @__PURE__ */ r("span", { title: u.path, children: ae(u.path) }),
                /* @__PURE__ */ r("small", { children: u.bytes ? `${(u.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-second-pass-actions", children: [
              $ ? /* @__PURE__ */ r("select", { "aria-label": t === "zh" ? "该视频可用的处理方式" : "Available processing modes for this video", value: $, onChange: (V) => w((F) => ({ ...F, [u.path]: V.currentTarget.value })), children: f.map((V) => /* @__PURE__ */ r("option", { value: V, children: an(V, t) })) }) : /* @__PURE__ */ r("span", { class: "td-second-pass-terminal", children: t === "zh" ? "只超分后不可再处理" : "Upscaled: no further processing" }),
              /* @__PURE__ */ r("button", { class: "primary td-second-pass-run", disabled: !n || !$ || (z == null ? void 0 : z.state) === "queued", onClick: () => $ && void R(S.shot.id, u.path, $), children: (z == null ? void 0 : z.state) === "queued" ? t === "zh" ? "排队/执行中…" : "Queued/running…" : (z == null ? void 0 : z.state) === "done" ? t === "zh" ? "处理完成" : "Completed" : t === "zh" ? "开始处理" : "Process" })
            ] }),
            (z == null ? void 0 : z.state) === "error" && /* @__PURE__ */ r("div", { class: "td-second-pass-error", children: z.message })
          ] }, u.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "没有可用的生成结果" : "No generated result available" })
      ] }, S.key);
    }) }),
    g && ce(g.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => h(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (S) => S.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: g.title }),
        /* @__PURE__ */ r("button", { onClick: () => h(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: ce(g.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { children: ae(g.path) })
    ] }) })
  ] });
}
function cn(e, t, n) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId, shotId: t, activeIndex: String(n) }).toString()}`;
}
function pn(e) {
  return `/theodore-director/v1/postprocess/merged-videos?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId }).toString()}`;
}
async function St(e) {
  const t = await fetch(e), n = await t.json();
  if (!t.ok) throw new Error(n.error || `HTTP ${t.status}`);
  return n;
}
function Ct(e, t) {
  const n = fe(e).filter((o) => o.path !== t);
  return { found: !!n.length, count: n.length, results: n };
}
function hn(e, t, n, o = "") {
  return { projectName: e.project.name, runId: e.project.runId, kind: t, shotId: o, path: n };
}
function un(e, t) {
  return e.processingMode === "latent_upscale_second_pass" ? t === "zh" ? "Latent 放大二采" : "Latent upscale 2nd pass" : e.processingMode === "super_resolution_second_pass" || e.stage === "second_pass" ? t === "zh" ? "超分二采" : "Super-res 2nd pass" : e.processingMode === "super_resolution_only" || e.stage === "upscaled" ? t === "zh" ? "只超分" : "Super-res only" : e.stage === "first_pass" ? t === "zh" ? "一采" : "1st pass" : t === "zh" ? "旧结果" : "Legacy";
}
function mn({ plan: e, language: t }) {
  const n = ge(() => it(e), [e]), [o, i] = E({}), [s, a] = E({ loading: !0, response: { found: !1, results: [] } }), [p, g] = E({}), [h, _] = E(null), [l, c] = E(""), [w, R] = E(0);
  oe(() => {
    let u = !1;
    const k = {};
    return n.forEach((f) => {
      k[f.key] = { loading: !0, response: { found: !1, results: [] } };
    }), i(k), c(""), n.forEach((f) => {
      St(cn(e, f.shot.id, f.activeIndex)).then(($) => {
        u || i((z) => ({ ...z, [f.key]: { loading: !1, response: $ } }));
      }).catch(($) => {
        u || i((z) => ({ ...z, [f.key]: { loading: !1, response: { found: !1, results: [], error: String($) } } }));
      });
    }), () => {
      u = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((u) => u.id).join("|"), w]), oe(() => {
    let u = !1;
    return a({ loading: !0, response: { found: !1, results: [] } }), St(pn(e)).then((k) => {
      u || a({ loading: !1, response: k });
    }).catch((k) => {
      u || a({ loading: !1, response: { found: !1, results: [], error: String(k) } });
    }), () => {
      u = !0;
    };
  }, [e.project.name, e.project.runId, w]);
  const S = async (u, k, f = "", $ = "") => {
    const z = ae(k.path);
    if (window.confirm(t === "zh" ? `确定将“${z}”移入系统回收站吗？
可从系统回收站恢复。` : `Move “${z}” to the system trash?
You can restore it from the trash.`)) {
      (h == null ? void 0 : h.path) === k.path && _(null), g((F) => ({ ...F, [k.path]: !0 })), c(""), await new Promise((F) => requestAnimationFrame(() => requestAnimationFrame(() => F())));
      try {
        const F = await fetch("/theodore-director/v1/postprocess/delete-video", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(hn(e, u, k.path, f))
        }), K = await F.json();
        if (!F.ok) throw new Error(K.error || `HTTP ${F.status}`);
        u === "merged" ? a((q) => ({ ...q, response: Ct(q.response, k.path) })) : i((q) => {
          var te;
          return {
            ...q,
            [$]: { ...q[$], response: Ct(((te = q[$]) == null ? void 0 : te.response) ?? { found: !1, results: [] }, k.path) }
          };
        });
      } catch (F) {
        c(String(F instanceof Error ? F.message : F));
      } finally {
        g((F) => {
          const K = { ...F };
          return delete K[k.path], K;
        });
      }
    }
  }, j = (u, k, f, $ = "", z = "") => {
    const V = ce(u.path, "output"), F = !!p[u.path];
    return /* @__PURE__ */ r("div", { class: `td-delete-result ${F ? "deleting" : ""}`, children: [
      /* @__PURE__ */ r("button", { class: "td-post-result-choice", disabled: F || !V, onClick: () => V && _({ path: u.path, title: f }), children: [
        F ? /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "…" }) : V ? /* @__PURE__ */ r(Te, { src: V, alt: fn(u, t) }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
        /* @__PURE__ */ r("span", { children: [
          /* @__PURE__ */ r("strong", { children: k === "merged" ? t === "zh" ? "合并视频" : "Merged video" : un(u, t) }),
          /* @__PURE__ */ r("span", { title: u.path, children: ae(u.path) }),
          /* @__PURE__ */ r("small", { children: u.bytes ? `${(u.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
        ] })
      ] }),
      /* @__PURE__ */ r("button", { class: "danger td-delete-video-button", disabled: F, onClick: () => void S(k, u, $, z), children: F ? t === "zh" ? "正在移动…" : "Moving…" : t === "zh" ? "移入回收站" : "Move to trash" })
    ] }, u.path);
  }, M = fe(s.response);
  return /* @__PURE__ */ r("section", { class: "td-postprocess td-delete-panel", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "删除视频" : "Delete videos" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "逐条预览并将当前项目的视频移入系统回收站；不会删除素材、latent 或尾帧。" : "Preview videos and move them to the system trash one at a time. Assets, latent files, and tail frames are preserved." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: /* @__PURE__ */ r("button", { onClick: () => R((u) => u + 1), children: [
        "↻ ",
        t === "zh" ? "刷新结果" : "Refresh"
      ] }) })
    ] }),
    l && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "删除失败：" : "Delete failed: ",
      l
    ] }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: n.map((u) => {
      const k = o[u.key], f = fe((k == null ? void 0 : k.response) ?? { results: [] });
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
        k != null && k.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading results…" }) : k != null && k.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败" : "Unable to load results" }) : f.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: f.map(($) => j($, "shot", `${u.shot.id} · ${u.shot.title}`, u.shot.id, u.key)) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "没有生成视频" : "No generated videos" })
      ] }, u.key);
    }) }),
    /* @__PURE__ */ r("section", { class: "td-post-merged td-delete-merged", children: [
      /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并视频" : "Merged videos" }),
        /* @__PURE__ */ r("span", { class: `td-result-state ${M.length ? "found" : ""}`, children: s.loading ? t === "zh" ? "查询中" : "Loading" : t === "zh" ? `${M.length} 个结果` : `${M.length} results` })
      ] }) }),
      s.loading ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "正在查询合并视频…" : "Loading merged videos…" }) : s.response.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: t === "zh" ? "无法查询合并视频" : "Unable to load merged videos" }) : M.length ? /* @__PURE__ */ r("div", { class: "td-delete-merged-list", children: M.map((u) => j(u, "merged", t === "zh" ? "合并视频" : "Merged video")) }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "没有合并视频" : "No merged videos" })
    ] }),
    h && ce(h.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => _(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (u) => u.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: h.title }),
        /* @__PURE__ */ r("button", { "aria-label": t === "zh" ? "关闭预览" : "Close preview", onClick: () => _(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: ce(h.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { title: h.path, children: ae(h.path) })
    ] }) })
  ] });
}
function fn(e, t) {
  return `${t === "zh" ? "视频" : "Video"} ${ae(e.path)}`;
}
async function $t(e) {
  const t = await fetch(e), n = await t.json();
  if (!t.ok) throw new Error(n.error || `HTTP ${t.status}`);
  return n;
}
function gn(e, t, n) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t,
    activeIndex: String(n)
  }).toString()}`;
}
function bn(e) {
  return `/theodore-director/v1/postprocess/merged-videos?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId }).toString()}`;
}
function vn({ plan: e, language: t, queueSecondPass: n }) {
  const [o, i] = E("merge");
  return /* @__PURE__ */ r("section", { class: "td-postprocess-shell", children: [
    /* @__PURE__ */ r("div", { class: "td-post-mode-tabs", role: "tablist", children: [
      /* @__PURE__ */ r("button", { class: o === "merge" ? "active" : "", role: "tab", "aria-selected": o === "merge", onClick: () => i("merge"), children: t === "zh" ? "合并视频" : "Merge videos" }),
      /* @__PURE__ */ r("button", { class: o === "second-pass" ? "active" : "", role: "tab", "aria-selected": o === "second-pass", onClick: () => i("second-pass"), children: t === "zh" ? "单独二采" : "Standalone second pass" }),
      /* @__PURE__ */ r("button", { class: o === "delete" ? "active" : "", role: "tab", "aria-selected": o === "delete", onClick: () => i("delete"), children: t === "zh" ? "删除视频" : "Delete videos" })
    ] }),
    o === "merge" ? /* @__PURE__ */ r(xn, { plan: e, language: t }) : o === "second-pass" ? /* @__PURE__ */ r(ln, { plan: e, language: t, queueSecondPass: n }) : /* @__PURE__ */ r(mn, { plan: e, language: t })
  ] });
}
function xn({ plan: e, language: t }) {
  const n = ge(() => it(e), [e]), [o, i] = E({}), [s, a] = E({}), [p, g] = E({}), [h, _] = E(null), [l, c] = E(!1), [w, R] = E(""), [S, j] = E(""), [M, u] = E({ found: !1, results: [] }), [k, f] = E(!1), [$, z] = E(!1), [V, F] = E(""), [K, q] = E(0), [te, pe] = E("1"), [le, ue] = E(String(n.length || 1)), v = n.filter((y) => y.shot.enabled), L = v.length > 0 && v.every((y) => s[y.key]), D = nn(n, s, p), m = D.filter((y) => !y.path), A = n.some((y) => {
    var I;
    return s[y.key] && ((I = o[y.key]) == null ? void 0 : I.loading);
  }), T = n.reduce(
    (y, I) => y + (I.shot.enabled && s[I.key] ? I.shot.durationSeconds : 0),
    0
  ), C = ge(() => fe(M), [M]), B = C.find((y) => y.path === V) ?? C[0];
  oe(() => {
    let y = !1;
    const I = {}, H = {};
    return n.forEach((Z) => {
      I[Z.key] = Z.shot.enabled, H[Z.key] = { loading: !0, response: { found: !1, results: [] } };
    }), a((Z) => {
      const G = {};
      return n.forEach((X) => {
        G[X.key] = X.shot.enabled ? Z[X.key] ?? I[X.key] : !1;
      }), G;
    }), i(H), R(""), n.forEach((Z) => {
      $t(gn(e, Z.shot.id, Z.activeIndex)).then((G) => {
        if (y) return;
        const X = fe(G);
        i((x) => ({ ...x, [Z.key]: { loading: !1, response: G } })), g((x) => {
          var N;
          return {
            ...x,
            [Z.key]: X.some((W) => W.path === x[Z.key]) ? x[Z.key] : ((N = X[0]) == null ? void 0 : N.path) ?? ""
          };
        });
      }).catch((G) => {
        y || i((X) => ({
          ...X,
          [Z.key]: { loading: !1, response: { found: !1, results: [], error: String(G) } }
        }));
      });
    }), () => {
      y = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((y) => `${y.id}:${y.enabled}`).join("|"), K]), oe(() => {
    let y = !1;
    return f(!0), $t(bn(e)).then((I) => {
      if (y) return;
      const H = fe(I);
      u(I), F((Z) => {
        var G;
        return H.some((X) => X.path === Z) ? Z : ((G = H[0]) == null ? void 0 : G.path) ?? "";
      });
    }).catch((I) => {
      y || u({ found: !1, results: [], error: String(I) });
    }).finally(() => {
      y || f(!1);
    }), () => {
      y = !0;
    };
  }, [e.project.name, e.project.runId, K]);
  const re = () => {
    const y = !L;
    a((I) => {
      const H = { ...I };
      return v.forEach((Z) => {
        H[Z.key] = y;
      }), H;
    });
  }, Q = () => {
    const y = Number(te), I = Number(le);
    if (!Number.isInteger(y) || !Number.isInteger(I) || y < 1 || I < y || I > n.length) {
      window.alert(t === "zh" ? `请输入有效范围：1 ≤ m ≤ n ≤ ${n.length}` : `Enter a valid range: 1 ≤ m ≤ n ≤ ${n.length}`);
      return;
    }
    a(on(n, y, I));
  }, se = async () => {
    if (!D.length) {
      window.alert(t === "zh" ? "请至少选择一个镜头" : "Select at least one shot.");
      return;
    }
    if (m.length) {
      window.alert(t === "zh" ? `以下已选镜头没有可用结果：${m.map((y) => y.shotId).join("、")}` : `Selected shots without a result: ${m.map((y) => y.shotId).join(", ")}`);
      return;
    }
    c(!0), R("");
    try {
      const y = await fetch("/theodore-director/v1/postprocess/merge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId, selections: D })
      }), I = await y.json();
      if (!y.ok) throw new Error(I.error || `HTTP ${y.status}`);
      q((H) => H + 1);
    } catch (y) {
      R(String(y instanceof Error ? y.message : y));
    } finally {
      c(!1);
    }
  }, _e = async () => {
    z(!0), j("");
    try {
      const y = await fetch("/theodore-director/v1/postprocess/open-folder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId })
      }), I = await y.json();
      if (!y.ok) throw new Error(I.error || `HTTP ${y.status}`);
    } catch (y) {
      j(String(y instanceof Error ? y.message : y));
    } finally {
      z(!1);
    }
  }, ye = B != null && B.path ? ce(B.path, "output") : null;
  return /* @__PURE__ */ r("section", { class: "td-postprocess", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并视频" : "Merge videos" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "从每个镜头选择一个结果，按当前分镜顺序进行无损合并。" : "Choose one result per shot and merge them losslessly in storyboard order." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: [
        /* @__PURE__ */ r("button", { disabled: $, onClick: _e, children: [
          "📁 ",
          $ ? t === "zh" ? "正在打开…" : "Opening…" : t === "zh" ? "打开结果文件夹" : "Open results folder"
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => q((y) => y + 1), children: [
          "↻ ",
          t === "zh" ? "刷新结果" : "Refresh"
        ] }),
        /* @__PURE__ */ r("button", { onClick: re, children: L ? t === "zh" ? "全部取消" : "Clear all" : t === "zh" ? "一键全选" : "Select all" })
      ] })
    ] }),
    S && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "打开结果文件夹失败：" : "Unable to open results folder: ",
      S
    ] }),
    /* @__PURE__ */ r("div", { class: "td-post-summary", children: [
      /* @__PURE__ */ r("span", { children: t === "zh" ? `已选择 ${D.length}/${v.length} 个启用镜头` : `${D.length}/${v.length} enabled shots selected` }),
      /* @__PURE__ */ r("span", { children: t === "zh" ? `预计时长 ${T.toFixed(1)} 秒` : `Estimated duration ${T.toFixed(1)} sec` }),
      /* @__PURE__ */ r("div", { class: "td-post-range", role: "group", "aria-label": t === "zh" ? "合并视频范围" : "Merge video range", children: [
        /* @__PURE__ */ r("span", { children: t === "zh" ? "范围" : "Range" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: n.length, step: "1", value: te, "aria-label": t === "zh" ? "起始镜头 m" : "Start shot m", onInput: (y) => pe(y.currentTarget.value) }),
        /* @__PURE__ */ r("span", { children: "—" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: n.length, step: "1", value: le, "aria-label": t === "zh" ? "结束镜头 n" : "End shot n", onInput: (y) => ue(y.currentTarget.value) }),
        /* @__PURE__ */ r("button", { disabled: !n.length, onClick: Q, children: t === "zh" ? "确认范围" : "Apply range" })
      ] }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: l || A || !D.length || !!m.length, onClick: se, children: l ? t === "zh" ? "正在合并…" : "Merging…" : t === "zh" ? "合并所选视频" : "Merge selected videos" })
    ] }),
    w && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "合并失败：" : "Merge failed: ",
      w
    ] }),
    m.length > 0 && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "已选镜头中存在尚未生成视频的镜头。" : "Some selected shots do not have generated videos yet." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: n.map((y) => {
      const I = o[y.key], H = fe((I == null ? void 0 : I.response) ?? { results: [] }), Z = !!s[y.key];
      return /* @__PURE__ */ r("article", { class: `td-post-shot ${Z ? "selected" : ""} ${y.shot.enabled ? "" : "disabled"}`, children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: Z, disabled: !y.shot.enabled, onChange: (G) => a((X) => ({ ...X, [y.key]: G.currentTarget.checked })) }),
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("strong", { children: y.shot.id }),
              /* @__PURE__ */ r("em", { children: y.shot.title })
            ] })
          ] }),
          /* @__PURE__ */ r("span", { children: [
            y.shot.durationSeconds,
            "s"
          ] })
        ] }),
        !y.shot.enabled && /* @__PURE__ */ r("div", { class: "td-post-shot-disabled-note", children: t === "zh" ? "该镜头当前已禁用：历史结果可以预览，但不能参加合并。" : "This shot is disabled: historical results can be previewed but cannot be merged." }),
        I != null && I.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading generated results…" }) : I != null && I.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : H.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: H.map((G, X) => {
          const x = ce(G.path, "output"), N = p[y.key] === G.path, W = dr(G.path, H.length - X);
          return /* @__PURE__ */ r("div", { class: `td-post-result ${N ? "selected" : ""}`, children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", role: "radio", "aria-checked": N, onClick: () => g((O) => ({ ...O, [y.key]: G.path })), children: [
              x ? /* @__PURE__ */ r(Te, { src: x, alt: `${y.shot.title} ${t === "zh" ? "结果" : "result"} ${W}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  t === "zh" ? `结果 ${W}` : `Result ${W}`,
                  X === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
                ] }),
                /* @__PURE__ */ r("span", { title: G.path, children: ae(G.path) }),
                /* @__PURE__ */ r("small", { children: G.bytes ? `${(G.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "td-post-result-play", disabled: !x, title: t === "zh" ? "播放预览" : "Play preview", onClick: () => x && _({ path: G.path, title: `${y.shot.id} · ${y.shot.title}` }), children: "▶" })
          ] }, G.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "未找到这个镜头的生成结果" : "No generated result found for this shot" })
      ] }, y.key);
    }) }),
    /* @__PURE__ */ r("section", { class: "td-post-merged", children: [
      /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并结果" : "Merged results" }),
        /* @__PURE__ */ r("span", { class: `td-result-state ${C.length ? "found" : ""}`, children: k ? t === "zh" ? "查询中" : "Checking" : t === "zh" ? `${C.length} 个结果` : `${C.length} results` })
      ] }) }),
      k ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "正在查询合并结果…" : "Loading merged results…" }) : M.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: t === "zh" ? "无法查询合并结果" : "Unable to query merged results" }) : B && ye ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
        /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
          /* @__PURE__ */ r("video", { src: ye, controls: !0, preload: "metadata", playsInline: !0 }, B.path),
          /* @__PURE__ */ r("div", { class: "td-generated-meta", title: B.path, children: B.path })
        ] }),
        /* @__PURE__ */ r("div", { class: "td-result-list", children: C.map((y, I) => {
          const H = ce(y.path, "output");
          return /* @__PURE__ */ r("button", { class: `td-result-item ${y.path === B.path ? "selected" : ""}`, onClick: () => F(y.path), children: [
            H ? /* @__PURE__ */ r(Te, { src: H, alt: `${t === "zh" ? "合并结果" : "Merged result"} ${C.length - I}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
            /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
              /* @__PURE__ */ r("strong", { children: [
                t === "zh" ? `合并结果 ${C.length - I}` : `Merged result ${C.length - I}`,
                I === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
              ] }),
              /* @__PURE__ */ r("span", { children: ae(y.path) }),
              /* @__PURE__ */ r("small", { children: y.bytes ? `${(y.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
            ] })
          ] }, y.path);
        }) })
      ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "还没有合并结果" : "No merged result yet" })
    ] }),
    h && ce(h.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => _(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (y) => y.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: h.title }),
        /* @__PURE__ */ r("button", { "aria-label": t === "zh" ? "关闭预览" : "Close preview", onClick: () => _(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: ce(h.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { title: h.path, children: ae(h.path) })
    ] }) })
  ] });
}
function et(e, t) {
  const n = e.assets.map((o) => ({
    id: o.id,
    alias: o.alias,
    kind: o.kind,
    path: o.path,
    enabled: o.enabled,
    fixed: o.fixed,
    fixedOrder: o.fixedOrder,
    shotIds: o.shotIds,
    includeVideoAudio: o.includeVideoAudio,
    durationSeconds: o.durationSeconds
  }));
  return JSON.stringify({
    id: t.id,
    prompt: t.prompt,
    durationSeconds: t.durationSeconds,
    disabledAssetIds: t.disabledAssetIds,
    promptPrefix: e.promptPrefix,
    promptSuffix: e.promptSuffix,
    assets: n
  });
}
function Ie(e, t, n) {
  return e.status !== "applied" && e.sourceKey !== et(t, n);
}
async function dt(e) {
  const t = await e.json();
  if (!e.ok) throw new Error(t.error || `HTTP ${e.status}`);
  return t;
}
async function Tt(e, t, n = !1) {
  const o = new URLSearchParams({ host: e, port: String(t) }), i = await fetch(`/theodore-director/v1/ollama/${n ? "running" : "models"}?${o}`);
  return (await dt(i)).models;
}
async function _n(e, t, n, o, i, s) {
  const a = await fetch("/theodore-director/v1/prompt/optimize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ plan: e, shotId: t, host: n, port: o, model: i }),
    signal: s
  });
  return dt(a);
}
async function yn(e, t, n) {
  const o = await fetch("/theodore-director/v1/ollama/unload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ host: e, port: t, model: n })
  });
  await dt(o);
}
const Pt = "theodore-director.ollama-port", It = "theodore-director.ollama-host", jt = "theodore-director.ollama-model";
function Je(e, t) {
  try {
    return window.localStorage.getItem(e) || t;
  } catch {
    return t;
  }
}
function wn(e, t, n) {
  return t ? n === "zh" ? "已过期" : "Stale" : (n === "zh" ? { pending: "等待中", running: "优化中", ready: "可应用", failed: "失败", applied: "已写回" } : { pending: "Pending", running: "Running", ready: "Ready", failed: "Failed", applied: "Applied" })[e.status];
}
function kn({ plan: e, currentShotId: t, language: n, onSelectShot: o, onApplyPrompts: i }) {
  const [s, a] = E(!1), [p, g] = E(() => Je(It, "127.0.0.1") === "localhost" ? "localhost" : "127.0.0.1"), [h, _] = E(() => Je(Pt, "11434")), [l, c] = E(() => Je(jt, "")), [w, R] = E([]), [S, j] = E([]), [M, u] = E(""), [k, f] = E(!1), [$, z] = E({}), [V, F] = E(t), [K, q] = E(!1), [te, pe] = E(!1), [le, ue] = E(!1), v = de(null), L = de(!1), D = Number(h), m = Number.isInteger(D) && D >= 1 && D <= 65535, A = e.shots.find((x) => x.id === t), T = e.shots.find((x) => x.id === V) ?? A, C = T ? $[T.id] : void 0, B = !!(C && T && Ie(C, e, T)), re = S.some((x) => x.name === l || x.model === l), Q = ge(() => e.shots.filter((x) => {
    const N = $[x.id];
    return (N == null ? void 0 : N.status) === "ready" && N.validation.valid && !Ie(N, e, x);
  }), [$, e]), se = async () => {
    if (!m) {
      u(n === "zh" ? "端口必须在 1–65535 之间" : "Port must be between 1 and 65535");
      return;
    }
    f(!0), u("");
    try {
      const [x, N] = await Promise.all([Tt(p, D), Tt(p, D, !0)]);
      R(x), j(N), c((W) => {
        var O;
        return x.some((he) => he.name === W) ? W : ((O = x[0]) == null ? void 0 : O.name) ?? "";
      });
    } catch (x) {
      R([]), j([]), u(String(x));
    } finally {
      f(!1);
    }
  };
  oe(() => (se(), () => {
    var x;
    return (x = v.current) == null ? void 0 : x.abort();
  }), []), oe(() => {
    F(t);
  }, [t]), oe(() => {
    try {
      window.localStorage.setItem(It, p);
    } catch {
    }
  }, [p]), oe(() => {
    try {
      window.localStorage.setItem(Pt, h);
    } catch {
    }
  }, [h]), oe(() => {
    try {
      l && window.localStorage.setItem(jt, l);
    } catch {
    }
  }, [l]);
  const _e = async (x, N = e) => {
    const W = et(N, x), O = x.prompt;
    z((be) => ({ ...be, [x.id]: {
      shotId: x.id,
      sourcePrompt: O,
      sourceKey: W,
      status: "running",
      optimizedPrompt: "",
      notes: [],
      validation: { mode: "base", valid: !1, errors: [], warnings: [] },
      repaired: !1,
      attempts: 0
    } })), F(x.id);
    const he = new AbortController();
    v.current = he;
    try {
      const be = await _n(N, x.id, p, D, l, he.signal);
      z((Ce) => ({ ...Ce, [x.id]: { ...be, shotId: x.id, sourcePrompt: O, sourceKey: W, status: "ready" } }));
    } catch (be) {
      const Ce = be instanceof DOMException && be.name === "AbortError" ? n === "zh" ? "用户已取消" : "Cancelled by user" : String(be);
      z((Ve) => ({ ...Ve, [x.id]: {
        shotId: x.id,
        sourcePrompt: O,
        sourceKey: W,
        status: "failed",
        optimizedPrompt: "",
        notes: [],
        error: Ce,
        validation: { mode: "base", valid: !1, errors: [], warnings: [] },
        repaired: !1,
        attempts: 0
      } }));
    } finally {
      v.current === he && (v.current = null);
    }
  }, ye = async () => {
    if (!(!A || !m || !l || K)) {
      q(!0);
      try {
        await _e(A);
      } finally {
        q(!1);
      }
    }
  }, y = async () => {
    if (!m || !l || K) return;
    const x = structuredClone(e), N = x.shots.filter((W) => W.enabled);
    L.current = !1, q(!0), pe(!0), z((W) => {
      const O = { ...W };
      for (const he of N) O[he.id] = {
        shotId: he.id,
        sourcePrompt: he.prompt,
        sourceKey: et(x, he),
        status: "pending",
        optimizedPrompt: "",
        notes: [],
        validation: { mode: "base", valid: !1, errors: [], warnings: [] },
        repaired: !1,
        attempts: 0
      };
      return O;
    });
    try {
      for (const W of N) {
        if (L.current) break;
        await _e(W, x);
      }
    } finally {
      pe(!1), q(!1);
    }
  }, I = () => {
    var x;
    L.current = !0, (x = v.current) == null || x.abort();
  }, H = (x, N) => {
    N.status !== "ready" || !N.validation.valid || Ie(N, e, x) || (i({ [x.id]: N.optimizedPrompt }), z((W) => ({ ...W, [x.id]: { ...N, status: "applied" } })));
  }, Z = () => {
    const x = {};
    for (const N of Q) x[N.id] = $[N.id].optimizedPrompt;
    Object.keys(x).length && (i(x), z((N) => {
      const W = { ...N };
      for (const O of Object.keys(x)) W[O] = { ...W[O], status: "applied" };
      return W;
    }));
  }, G = (x, N) => {
    N.status !== "applied" || x.prompt !== N.optimizedPrompt || (i({ [x.id]: N.sourcePrompt }), z((W) => ({ ...W, [x.id]: { ...N, status: "ready" } })));
  }, X = async () => {
    if (!(!m || !l || le)) {
      ue(!0), u("");
      try {
        await yn(p, D, l), j((x) => x.filter((N) => N.name !== l && N.model !== l));
      } catch (x) {
        u(String(x));
      } finally {
        ue(!1);
      }
    }
  };
  return /* @__PURE__ */ r("details", { open: s, onToggle: (x) => a(x.currentTarget.open), class: "td-ai-panel", children: [
    /* @__PURE__ */ r("summary", { children: [
      /* @__PURE__ */ r("strong", { children: n === "zh" ? "AI 提示词优化" : "AI prompt optimizer" }),
      /* @__PURE__ */ r("span", { class: `td-result-state ${Q.length ? "found" : ""}`, children: K ? n === "zh" ? "处理中" : "Running" : Q.length ? `${Q.length} ${n === "zh" ? "项可应用" : "ready"}` : "Ollama" })
    ] }),
    /* @__PURE__ */ r("div", { class: "td-preview-body td-ai-body", children: [
      /* @__PURE__ */ r("div", { class: "td-ai-settings", children: [
        /* @__PURE__ */ r("label", { children: [
          /* @__PURE__ */ r("span", { children: n === "zh" ? "本机地址" : "Local host" }),
          /* @__PURE__ */ r("select", { value: p, onChange: (x) => g(x.currentTarget.value === "localhost" ? "localhost" : "127.0.0.1"), children: [
            /* @__PURE__ */ r("option", { value: "127.0.0.1", children: "127.0.0.1" }),
            /* @__PURE__ */ r("option", { value: "localhost", children: "localhost" })
          ] })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          /* @__PURE__ */ r("span", { children: n === "zh" ? "本机端口" : "Local port" }),
          /* @__PURE__ */ r("input", { type: "number", min: "1", max: "65535", value: h, onInput: (x) => _(x.currentTarget.value) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          /* @__PURE__ */ r("span", { children: n === "zh" ? "模型" : "Model" }),
          /* @__PURE__ */ r("select", { value: l, onChange: (x) => c(x.currentTarget.value), children: [
            /* @__PURE__ */ r("option", { value: "", children: n === "zh" ? "请选择模型" : "Select a model" }),
            w.map((x) => /* @__PURE__ */ r("option", { value: x.name, children: x.name }))
          ] })
        ] }),
        /* @__PURE__ */ r("button", { disabled: k || K, onClick: () => void se(), children: [
          k ? "…" : "↻",
          " ",
          n === "zh" ? "刷新模型" : "Refresh"
        ] }),
        /* @__PURE__ */ r("button", { disabled: !l || le || K, onClick: () => void X(), children: [
          le ? "…" : "◌",
          " ",
          n === "zh" ? "释放当前模型" : "Unload model"
        ] })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-ai-model-state", children: [
        l ? /* @__PURE__ */ r("span", { class: re ? "running" : "", children: re ? n === "zh" ? "模型正在驻留" : "Model is loaded" : n === "zh" ? "模型未驻留；首次优化时加载" : "Not loaded; loads on first run" }) : null,
        M && /* @__PURE__ */ r("span", { class: "errors", children: M })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-ai-actions", children: [
        /* @__PURE__ */ r("button", { class: "primary", disabled: !A || !l || !m || K, onClick: () => void ye(), children: n === "zh" ? "优化当前镜头" : "Optimize current shot" }),
        /* @__PURE__ */ r("button", { disabled: !l || !m || K, onClick: () => void y(), children: n === "zh" ? "批量优化全部启用镜头" : "Optimize all enabled shots" }),
        te && /* @__PURE__ */ r("button", { class: "danger", onClick: I, children: n === "zh" ? "停止批量任务" : "Stop batch" }),
        /* @__PURE__ */ r("button", { disabled: !Q.length || K, onClick: Z, children: n === "zh" ? `应用全部通过项（${Q.length}）` : `Apply all valid (${Q.length})` })
      ] }),
      Object.keys($).length > 0 && /* @__PURE__ */ r("div", { class: "td-ai-candidate-list", children: e.shots.filter((x) => $[x.id]).map((x) => {
        const N = $[x.id], W = Ie(N, e, x);
        return /* @__PURE__ */ r("button", { class: x.id === (T == null ? void 0 : T.id) ? "selected" : "", onClick: () => {
          F(x.id), o(x.id);
        }, children: [
          /* @__PURE__ */ r("span", { children: x.title }),
          /* @__PURE__ */ r("em", { class: `${N.status} ${W ? "stale" : ""}`, children: wn(N, W, n) })
        ] });
      }) }),
      C && T && /* @__PURE__ */ r("div", { class: "td-ai-result", children: [
        /* @__PURE__ */ r("div", { class: "td-ai-result-head", children: [
          /* @__PURE__ */ r("strong", { children: T.title }),
          /* @__PURE__ */ r("span", { children: C.repaired ? n === "zh" ? "已自动修复一次" : "Auto-repaired once" : C.attempts ? n === "zh" ? "初次结果" : "First result" : "" })
        ] }),
        C.error && /* @__PURE__ */ r("div", { class: "errors", children: C.error }),
        B && /* @__PURE__ */ r("div", { class: "td-post-warning", children: n === "zh" ? "提示词或相关上下文已变化，此候选已过期，请重新优化。" : "The prompt context changed. Re-run optimization before applying." }),
        C.validation.errors.length > 0 && /* @__PURE__ */ r("ul", { class: "errors", children: C.validation.errors.map((x) => /* @__PURE__ */ r("li", { children: x })) }),
        C.validation.warnings.length > 0 && /* @__PURE__ */ r("ul", { class: "td-ai-warnings", children: C.validation.warnings.map((x) => /* @__PURE__ */ r("li", { children: x })) }),
        C.notes.length > 0 && /* @__PURE__ */ r("ul", { class: "td-ai-notes", children: C.notes.map((x) => /* @__PURE__ */ r("li", { children: x })) }),
        (C.sourcePrompt || C.optimizedPrompt) && /* @__PURE__ */ r("div", { class: "td-ai-compare", children: [
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { children: n === "zh" ? "原提示词" : "Original" }),
            /* @__PURE__ */ r("textarea", { readOnly: !0, rows: 12, value: C.sourcePrompt })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { children: n === "zh" ? "优化结果" : "Optimized" }),
            /* @__PURE__ */ r("textarea", { readOnly: !0, rows: 12, value: C.optimizedPrompt })
          ] })
        ] }),
        /* @__PURE__ */ r("div", { class: "td-ai-result-actions", children: [
          C.status === "failed" && /* @__PURE__ */ r("button", { disabled: K || !l, onClick: async () => {
            q(!0);
            try {
              await _e(T);
            } finally {
              q(!1);
            }
          }, children: n === "zh" ? "重试" : "Retry" }),
          /* @__PURE__ */ r("button", { class: "primary", disabled: C.status !== "ready" || !C.validation.valid || B, onClick: () => H(T, C), children: n === "zh" ? "确认写回当前分镜" : "Apply to shot" }),
          /* @__PURE__ */ r("button", { disabled: C.status !== "applied" || T.prompt !== C.optimizedPrompt, onClick: () => G(T, C), children: n === "zh" ? "撤销本次写回" : "Undo apply" }),
          /* @__PURE__ */ r("button", { onClick: () => z((x) => {
            const N = { ...x };
            return delete N[T.id], N;
          }), children: n === "zh" ? "放弃结果" : "Discard" })
        ] })
      ] }),
      !C && /* @__PURE__ */ r("div", { class: "td-result-empty", children: n === "zh" ? "选择模型后，可优化当前镜头或批量处理全部启用镜头。" : "Select a model, then optimize the current shot or all enabled shots." })
    ] })
  ] });
}
function zn(e) {
  const t = e.reduce((n, o) => {
    const i = /^shot_(\d+)$/i.exec(o.id.trim());
    return i ? Math.max(n, Number(i[1])) : n;
  }, 0);
  return Math.max(t, e.length) + 1;
}
function ar(e, t = 5) {
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
function Et(e, t, n) {
  const o = zn(e), i = Array.from({ length: t }, (s, a) => ar(o + a, n));
  return [...e, ...i];
}
function Sn(e = 5) {
  return [ar(1, e)];
}
const lr = (e) => `${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, Re = (e) => JSON.parse(JSON.stringify(e)), Cn = { image: "图片", video: "视频", audio: "音频" }, At = ["off", "super_resolution_second_pass", "latent_upscale_second_pass", "super_resolution_only"];
function Mt(e, t) {
  return {
    off: ["关闭二采", "Off"],
    super_resolution_second_pass: ["超分二采", "Super-res 2nd pass"],
    latent_upscale_second_pass: ["Latent 放大二采", "Latent upscale 2nd pass"],
    super_resolution_only: ["只超分", "Super-res only"]
  }[e][t === "zh" ? 0 : 1];
}
function Rt(e, t) {
  return e.processingMode === "latent_upscale_second_pass" ? t === "zh" ? "Latent 二采" : "Latent 2nd" : e.processingMode === "super_resolution_second_pass" || e.stage === "second_pass" ? t === "zh" ? "超分二采" : "Super-res 2nd" : e.processingMode === "super_resolution_only" || e.stage === "upscaled" ? t === "zh" ? "只超分" : "Super-res only" : e.stage === "first_pass" ? t === "zh" ? "一采" : "1st pass" : t === "zh" ? "旧结果" : "Legacy";
}
function Lt(e) {
  var n;
  const t = Re(e);
  return t.schemaVersion = 5, (n = t.project.id) != null && n.trim() || (t.project.id = lr("project")), t.shots = t.shots.map((o) => {
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
function $n(e) {
  return e.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function Tn(e) {
  const t = lr(e);
  return { id: t, alias: t, kind: e, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: e === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function Nt(e, t, n) {
  const o = new FormData();
  o.append("projectName", e), o.append("kind", t), o.append("file", n);
  const i = await fetch("/theodore-director/v1/assets", { method: "POST", body: o }), s = await i.json();
  if (!i.ok || !s.path) throw new Error(s.error || `HTTP ${i.status}`);
  return s.path;
}
async function Pn(e, t, n) {
  const o = new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t.id,
    activeIndex: String(n)
  }), i = await fetch(`/theodore-director/v1/generated-video?${o.toString()}`), s = await i.json();
  if (!i.ok) throw new Error(s.error || `HTTP ${i.status}`);
  return s;
}
async function In(e) {
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
function jn({ language: e, projectName: t, runId: n, onClearShots: o, onClearAssets: i, onProjectCleared: s }) {
  const [a, p] = E(!1), g = !!(t.trim() && n.trim()), h = async () => {
    const c = `${t.trim()} / Run ${n.trim()}`, w = e === "zh" ? `确认清空 ${c}？

该运行目录内的全部视频、latent、尾帧、结果文件和元数据都会移入系统回收站。输入素材及其他 Run 不会被删除。` : `Clear ${c}?

All videos, latent files, tail frames, result files, and metadata in this run will be moved to the system trash. Input assets and other runs will not be deleted.`;
    if (window.confirm(w)) {
      p(!0);
      try {
        const R = await Br(t, n);
        s(), window.alert(e === "zh" ? `已移入系统回收站：${R}` : `Moved to system trash: ${R}`);
      } catch (R) {
        window.alert(`${e === "zh" ? "清空项目失败" : "Failed to clear project"}: ${R instanceof Error ? R.message : String(R)}`);
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
        const c = e === "zh" ? `确认清空全部分镜及其正向、负向提示词？

操作后会保留一个空白镜头以便继续编辑。素材库、全局提示词前后缀和磁盘生成文件不会被删除。` : `Clear every shot and its positive and negative prompts?

One blank shot will remain for editing. Media, global prompt prefix/suffix, and generated files on disk will not be deleted.`;
        window.confirm(c) && o();
      }, children: e === "zh" ? "清空分镜" : "Clear shots" })
    ] }),
    /* @__PURE__ */ r("article", { children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("strong", { children: e === "zh" ? "清空素材库" : "Clear media library" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "只移除当前工作流中的素材引用；本地图片、视频和音频文件保持不变。" : "Remove media references from this workflow only; local image, video, and audio files remain untouched." })
      ] }),
      /* @__PURE__ */ r("button", { class: "danger", onClick: () => {
        const c = e === "zh" ? `确认清空素材库中的全部引用？

素材条目会从当前工作流中移除，但本地图片、视频和音频文件不会被删除。提示词中的引用文本会保留并显示为不可用。` : `Clear every media reference from this workflow?

Media entries will be removed, but local image, video, and audio files will not be deleted. Reference text in prompts will remain and be shown as unavailable.`;
        window.confirm(c) && i();
      }, children: e === "zh" ? "清空素材库" : "Clear media" })
    ] }),
    /* @__PURE__ */ r("article", { children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("strong", { children: e === "zh" ? "清空当前项目" : "Clear current project" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "清除当前 Project name + Run ID 的全部生成文件，并移入系统回收站。输入素材和其他 Run 不受影响。" : "Move every generated file for the current Project name + Run ID to the system trash. Input assets and other runs are unaffected." })
      ] }),
      /* @__PURE__ */ r("button", { class: "danger", disabled: !g || a, onClick: () => void h(), children: a ? e === "zh" ? "正在移入回收站…" : "Moving to trash…" : e === "zh" ? "清空项目" : "Clear project" })
    ] })
  ] });
}
function En({ initial: e, onSave: t, onClose: n, supportsSecondSampling: o, queueSecondPass: i }) {
  const [s, a] = E(() => Lt(e)), [p, g] = E("shots"), [h, _] = E(0), [l, c] = E(() => navigator.language.startsWith("zh") ? "zh" : "en"), [w, R] = E({}), [S, j] = E(!0), [M, u] = E(!1), [k, f] = E(0), [$, z] = E({ found: !1, results: [] }), [V, F] = E(""), [K, q] = E(!1), [te, pe] = E(""), [le, ue] = E(!0), [v, L] = E(!1), [D, m] = E(!1), [A, T] = E([]), [C, B] = E("5"), [re, Q] = E("1"), [se, _e] = E("5"), [ye, y] = E("super_resolution_second_pass");
  oe(() => {
    const d = (b) => {
      b.target instanceof Element && b.target.closest(".td-shot-media-name") && b.preventDefault();
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, []);
  const I = s.shots[Math.min(h, s.shots.length - 1)], H = ge(() => I ? ir(s, I) : null, [s, I]), Z = ge(() => I ? nr(s, I) : [], [s, I]), G = I != null && I.enabled ? s.shots.slice(0, h).filter((d) => d.enabled).length : -1, X = A.length > 0 && A.every((d) => d.enabled), x = ge(() => fe($), [$]), N = x.find((d) => d.path === V) ?? x[0], W = N != null && N.path ? ce(N.path, "output") : null, O = (d) => a((b) => {
    const P = Re(b);
    return d(P), P;
  }), he = (d, b) => O((P) => {
    const U = d + b;
    U < 0 || U >= P.shots.length || ([P.shots[d], P.shots[U]] = [P.shots[U], P.shots[d]], _(U));
  }), be = (d) => O((b) => {
    b.shots.length <= 1 || (b.shots.splice(d, 1), _((P) => P > d ? P - 1 : P === d ? Math.min(d, b.shots.length - 1) : P));
  }), Ce = () => {
    T(Re(s.shots)), L(!0);
  }, Ve = () => {
    const d = Number(C);
    if (!Number.isFinite(d) || d <= 0) {
      window.alert(l === "zh" ? "统一时长必须大于 0 秒" : "The shared duration must be greater than 0 seconds.");
      return;
    }
    T((b) => b.map((P) => ({ ...P, durationSeconds: d })));
  }, cr = () => {
    const d = Number(re), b = Number(se);
    if (!Number.isInteger(d) || d < 1 || d > 100) {
      window.alert(l === "zh" ? "新增镜头数量必须是 1–100 的整数" : "The shot count must be an integer from 1 to 100.");
      return;
    }
    if (!Number.isFinite(b) || b <= 0) {
      window.alert(l === "zh" ? "新增镜头时长必须大于 0 秒" : "The new-shot duration must be greater than 0 seconds.");
      return;
    }
    T((P) => Et(P, d, b));
  }, pr = () => {
    const d = !X;
    T((b) => b.map((P) => ({ ...P, enabled: d })));
  }, hr = () => {
    if (A.some((d) => !Number.isFinite(d.durationSeconds) || d.durationSeconds <= 0)) {
      window.alert(l === "zh" ? "每个镜头的时长都必须大于 0 秒" : "Every shot duration must be greater than 0 seconds.");
      return;
    }
    O((d) => {
      d.shots = Re(A);
    }), _((d) => Math.min(d, A.length - 1)), L(!1);
  }, ur = () => {
    const d = URL.createObjectURL(new Blob([JSON.stringify(s, null, 2)], { type: "application/json" })), b = document.createElement("a");
    b.href = d, b.download = `${$n(s.project.name)}.director.json`, b.click(), URL.revokeObjectURL(d);
  }, mr = () => {
    const d = Gr(s);
    if (d.length) {
      window.alert(`计划未通过校验：

${d.join(`
`)}`);
      return;
    }
    t(s);
  };
  return oe(() => {
    let d = !1;
    return I ? (q(!0), Pn(s, I, G).then((b) => {
      if (d) return;
      const P = fe(b);
      z(b), F((U) => {
        var J;
        return P.some((ie) => ie.path === U) ? U : ((J = P[0]) == null ? void 0 : J.path) ?? "";
      });
    }).catch((b) => {
      d || (z({ found: !1, results: [], error: String(b) }), F(""));
    }).finally(() => {
      d || q(!1);
    }), () => {
      d = !0;
    }) : (z({ found: !1, results: [] }), F(""), q(!1), () => {
      d = !0;
    });
  }, [s.project.name, s.project.runId, I == null ? void 0 : I.id, I == null ? void 0 : I.enabled, G, k]), /* @__PURE__ */ r("div", { class: "td-shell", children: [
    /* @__PURE__ */ r("header", { children: [
      /* @__PURE__ */ r("h1", { children: we(l, "title") }),
      /* @__PURE__ */ r("div", { class: "td-actions", children: [
        /* @__PURE__ */ r("button", { onClick: ur, children: "导出 / Export" }),
        /* @__PURE__ */ r("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ r("input", { type: "file", accept: "application/json,.json", onChange: async (d) => {
            var P;
            const b = (P = d.currentTarget.files) == null ? void 0 : P[0];
            if (b)
              try {
                const U = JSON.parse(await b.text());
                if (!U.project || !Array.isArray(U.shots) || !Array.isArray(U.assets)) throw new Error("不是有效的 Theodore Director Plan");
                a(Lt(U)), _(0);
              } catch (U) {
                window.alert(String(U));
              }
          } })
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => c(l === "zh" ? "en" : "zh"), children: l === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: mr, children: we(l, "save") }),
        /* @__PURE__ */ r("button", { onClick: n, children: we(l, "close") })
      ] })
    ] }),
    /* @__PURE__ */ r("nav", { children: ["shots", "assets", "settings", "postprocess"].map((d) => /* @__PURE__ */ r("button", { class: p === d ? "active" : "", onClick: () => g(d), children: we(l, d) })) }),
    /* @__PURE__ */ r("main", { children: [
      p === "shots" && /* @__PURE__ */ r("div", { class: "td-shots", children: [
        /* @__PURE__ */ r("aside", { class: "td-shot-sidebar", children: [
          o && /* @__PURE__ */ r("div", { class: "td-bulk-processing", children: [
            /* @__PURE__ */ r("select", { "aria-label": l === "zh" ? "批量处理模式" : "Bulk processing mode", value: ye, onChange: (d) => y(d.currentTarget.value), children: At.map((d) => /* @__PURE__ */ r("option", { value: d, children: Mt(d, l) })) }),
            /* @__PURE__ */ r("button", { class: "wide td-bulk-toggle", onClick: () => O((d) => {
              d.shots.forEach((b) => {
                b.secondSamplingMode = ye;
              });
            }), children: l === "zh" ? "应用到全部镜头" : "Apply to all shots" })
          ] }),
          /* @__PURE__ */ r("div", { class: "td-shot-list", children: s.shots.map((d, b) => /* @__PURE__ */ r("div", { class: `td-shot-card ${b === h ? "selected" : ""}`, onClick: () => _(b), children: [
            /* @__PURE__ */ r("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ r("button", { class: "td-shot-delete", disabled: s.shots.length <= 1, title: l === "zh" ? s.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : s.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": l === "zh" ? "删除镜头" : "Delete shot", onClick: (P) => {
              P.stopPropagation(), be(b);
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
              /* @__PURE__ */ r("button", { title: l === "zh" ? "上移镜头" : "Move shot up", onClick: (P) => {
                P.stopPropagation(), he(b, -1);
              }, children: "↑" }),
              /* @__PURE__ */ r("button", { title: l === "zh" ? "下移镜头" : "Move shot down", onClick: (P) => {
                P.stopPropagation(), he(b, 1);
              }, children: "↓" })
            ] })
          ] }, d.id)) }),
          /* @__PURE__ */ r("div", { class: "td-shot-sidebar-footer", children: [
            /* @__PURE__ */ r("button", { class: "wide", onClick: () => O((d) => {
              const b = d.shots.length;
              d.shots = Et(d.shots, 1, 5), _(b);
            }), children: [
              "＋ ",
              we(l, "addShot")
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-batch-entry", children: /* @__PURE__ */ r("button", { class: "wide", onClick: Ce, children: l === "zh" ? "批量处理镜头" : "Batch edit shots" }) })
          ] })
        ] }),
        I && /* @__PURE__ */ r("section", { class: "td-form", children: [
          /* @__PURE__ */ r("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ r("label", { children: [
              "ID",
              /* @__PURE__ */ r("input", { value: I.id, onInput: (d) => O((b) => {
                b.shots[h].id = d.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ r("input", { value: I.title, onInput: (d) => O((b) => {
                b.shots[h].title = d.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: I.durationSeconds, onInput: (d) => O((b) => {
                b.shots[h].durationSeconds = Number(d.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: I.enabled, onChange: (d) => O((b) => {
                  b.shots[h].enabled = d.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: G === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: I.latentRelay, onChange: (d) => O((b) => {
                  b.shots[h].latentRelay = d.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: [
                  "latent接力 / Relay",
                  G === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              o && /* @__PURE__ */ r("label", { class: "td-processing-mode", children: [
                /* @__PURE__ */ r("span", { children: l === "zh" ? "高清处理" : "Processing" }),
                /* @__PURE__ */ r("select", { value: I.secondSamplingMode, onChange: (d) => O((b) => {
                  b.shots[h].secondSamplingMode = d.currentTarget.value;
                }), children: At.map((d) => /* @__PURE__ */ r("option", { value: d, children: Mt(d, l) })) })
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
            /* @__PURE__ */ r(Ge, { rows: 10, value: I.prompt, mentionAssets: Z, mentionLanguage: l, isReferenceValid: (d) => sr(s, I, d), onInput: (d) => O((b) => {
              b.shots[h].prompt = d.currentTarget.value;
            }) }, I.id)
          ] }),
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ r("textarea", { rows: 3, value: I.negativePrompt, onInput: (d) => O((b) => {
              b.shots[h].negativePrompt = d.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ r("legend", { children: "本镜头素材 / Shot media" }),
            /* @__PURE__ */ r("label", { class: "td-shot-media-display-toggle", children: [
              /* @__PURE__ */ r("input", { type: "checkbox", checked: le, onChange: (d) => ue(d.currentTarget.checked) }),
              /* @__PURE__ */ r("span", { children: l === "zh" ? "显示别名" : "Show aliases" })
            ] }),
            s.assets.map((d) => {
              const b = !I.disabledAssetIds.includes(d.id), P = le ? d.alias : ae(d.path) || d.alias, U = `{{ref:${d.alias}}}`;
              return /* @__PURE__ */ r("div", { class: `td-shot-media-card ${b ? "" : "disabled"}`, children: [
                /* @__PURE__ */ r("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ r(wt, { asset: d, compact: !0 }),
                  /* @__PURE__ */ r("span", { class: "td-shot-media-kind", children: l === "zh" ? Cn[d.kind] : d.kind }),
                  /* @__PURE__ */ r("label", { class: "td-shot-media-toggle", title: b ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ r("input", { type: "checkbox", checked: b, onChange: (J) => O((ie) => {
                    const me = ie.shots[h].disabledAssetIds;
                    ie.shots[h].disabledAssetIds = J.currentTarget.checked ? me.filter((ze) => ze !== d.id) : [.../* @__PURE__ */ new Set([...me, d.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ r("button", { class: `td-shot-media-name ${te === d.id ? "copied" : ""}`, title: `${P}
${l === "zh" ? "点击复制" : "Click to copy"} ${U}`, onClick: async () => {
                  try {
                    await In(U), pe(d.id), window.setTimeout(() => pe((J) => J === d.id ? "" : J), 1400);
                  } catch (J) {
                    window.alert(`${l === "zh" ? "复制失败" : "Copy failed"}: ${String(J)}`);
                  }
                }, children: [
                  /* @__PURE__ */ r("span", { children: P }),
                  te === d.id && /* @__PURE__ */ r("em", { children: l === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, d.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ r("aside", { class: "td-preview", children: [
          /* @__PURE__ */ r("details", { open: S, onToggle: (d) => j(d.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: we(l, "preview") }),
              /* @__PURE__ */ r("span", { class: "td-summary-counts", children: [
                "Picture ",
                (H == null ? void 0 : H.slots.filter((d) => d.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (H == null ? void 0 : H.slots.filter((d) => d.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (H == null ? void 0 : H.audioCount) ?? 0,
                "/3 · Files ",
                (H == null ? void 0 : H.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body", children: [
              H != null && H.errors.length ? /* @__PURE__ */ r("ul", { class: "errors", children: H.errors.map((d) => /* @__PURE__ */ r("li", { children: d })) }) : /* @__PURE__ */ r("p", { class: "ok", children: we(l, "noErrors") }),
              /* @__PURE__ */ r("ol", { children: H == null ? void 0 : H.slots.map((d) => /* @__PURE__ */ r("li", { children: [
                /* @__PURE__ */ r("code", { children: d.label }),
                " ← ",
                d.alias
              ] })) }),
              /* @__PURE__ */ r("pre", { children: H == null ? void 0 : H.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ r(
            kn,
            {
              plan: s,
              currentShotId: I.id,
              language: l,
              onSelectShot: (d) => {
                const b = s.shots.findIndex((P) => P.id === d);
                b >= 0 && _(b);
              },
              onApplyPrompts: (d) => O((b) => {
                for (const P of b.shots) d[P.id] !== void 0 && (P.prompt = d[P.id]);
              })
            }
          ),
          /* @__PURE__ */ r("details", { open: M, onToggle: (d) => u(d.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: l === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ r("span", { class: `td-result-state ${x.length ? "found" : ""}`, children: K ? l === "zh" ? "查询中" : "Checking" : x.length ? l === "zh" ? `${x.length} 个结果` : `${x.length} results` : l === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ r("div", { class: "td-result-actions", children: /* @__PURE__ */ r("button", { onClick: () => f((d) => d + 1), children: [
                "↻ ",
                l === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              K ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: l === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : $.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: l === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again." }) : N && W ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
                /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
                  /* @__PURE__ */ r("video", { src: W, controls: !0, preload: "metadata", playsInline: !0 }, N.path),
                  /* @__PURE__ */ r("div", { class: "td-generated-meta", title: N.path, children: [
                    Rt(N, l),
                    " · ",
                    N.path,
                    N.bytes ? ` · ${(N.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                  ] })
                ] }),
                /* @__PURE__ */ r("div", { class: "td-result-list", "aria-label": l === "zh" ? "全部生成结果" : "All generated results", children: x.map((d, b) => {
                  const P = ce(d.path, "output"), U = dr(d.path, x.length - b), J = d.modifiedAt ? new Date(d.modifiedAt * 1e3).toLocaleString(l === "zh" ? "zh-CN" : "en-US") : "";
                  return /* @__PURE__ */ r("button", { class: `td-result-item ${d.path === N.path ? "selected" : ""}`, onClick: () => F(d.path), children: [
                    P ? /* @__PURE__ */ r(Te, { src: P, alt: `${l === "zh" ? "结果" : "Result"} ${U}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: /* @__PURE__ */ r("span", { children: "×" }) }),
                    /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
                      /* @__PURE__ */ r("strong", { children: [
                        l === "zh" ? `结果 ${U}` : `Result ${U}`,
                        " · ",
                        Rt(d, l),
                        b === 0 && /* @__PURE__ */ r("em", { children: l === "zh" ? "最新" : "Latest" })
                      ] }),
                      /* @__PURE__ */ r("span", { title: d.path, children: ae(d.path) }),
                      /* @__PURE__ */ r("small", { children: [d.bytes ? `${(d.bytes / 1024 / 1024).toFixed(1)} MB` : "", J].filter(Boolean).join(" · ") })
                    ] })
                  ] }, d.path);
                }) })
              ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: l === "zh" ? "未在预期路径找到本段视频" : "No video found at the expected path" })
            ] })
          ] })
        ] })
      ] }),
      p === "assets" && /* @__PURE__ */ r("div", { class: "td-assets", children: [
        /* @__PURE__ */ r("div", { class: "td-toolbar", children: [
          ["image", "video", "audio"].map((d) => /* @__PURE__ */ r("button", { onClick: () => O((b) => b.assets.push(Tn(d))), children: [
            "＋ ",
            d
          ] })),
          /* @__PURE__ */ r("button", { class: "td-asset-batch-entry", onClick: () => m(!0), children: [
            "⇧ ",
            l === "zh" ? "批量导入素材" : "Batch import assets"
          ] })
        ] }),
        s.assets.map((d, b) => /* @__PURE__ */ r("article", { children: /* @__PURE__ */ r("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ r("div", { class: "td-grid", children: [
              /* @__PURE__ */ r("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ r("input", { value: d.alias, onInput: (P) => O((U) => {
                  U.assets[b].alias = P.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ r("select", { value: d.kind, onChange: (P) => O((U) => {
                  U.assets[b].kind = P.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ r("option", { children: "image" }),
                  /* @__PURE__ */ r("option", { children: "video" }),
                  /* @__PURE__ */ r("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ r("input", { value: d.path, onInput: (P) => O((U) => {
                  U.assets[b].path = P.currentTarget.value;
                }) }),
                /* @__PURE__ */ r("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ r("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ r("input", { type: "file", accept: d.kind === "image" ? "image/*" : d.kind === "video" ? "video/*" : "audio/*", onChange: async (P) => {
                      var ie;
                      const U = P.currentTarget, J = (ie = U.files) == null ? void 0 : ie[0];
                      if (J) {
                        R((me) => ({ ...me, [d.id]: J.name }));
                        try {
                          const me = await Nt(s.project.name, d.kind, J);
                          O((ze) => {
                            const at = ze.assets.find((fr) => fr.id === d.id);
                            at && (at.path = me);
                          });
                        } catch (me) {
                          window.alert(String(me));
                        } finally {
                          R((me) => {
                            const ze = { ...me };
                            return delete ze[d.id], ze;
                          }), U.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ r("span", { class: "td-file-name", title: w[d.id] || d.path, children: w[d.id] ? `${l === "zh" ? "上传中" : "Uploading"}: ${w[d.id]}` : ae(d.path) || (l === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ r("input", { type: "number", min: "0", step: "0.1", value: d.durationSeconds ?? "", onInput: (P) => O((U) => {
                  U.assets[b].durationSeconds = P.currentTarget.value ? Number(P.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ r("input", { type: "number", value: d.fixedOrder, onInput: (P) => O((U) => {
                  U.assets[b].fixedOrder = Number(P.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ r("input", { value: d.shotIds.join(", "), onInput: (P) => O((U) => {
                  U.assets[b].shotIds = P.currentTarget.value.split(",").map((J) => J.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-flags", children: [
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: d.enabled, onChange: (P) => O((U) => {
                  U.assets[b].enabled = P.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: d.fixed, onChange: (P) => O((U) => {
                  U.assets[b].fixed = P.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              d.kind === "video" && /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: d.includeVideoAudio, onChange: (P) => O((U) => {
                  U.assets[b].includeVideoAudio = P.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ r("button", { class: "danger", onClick: () => O((P) => {
                P.assets.splice(b, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ r(wt, { asset: d })
        ] }) }, d.id))
      ] }),
      p === "settings" && /* @__PURE__ */ r("section", { class: "td-form settings", children: [
        /* @__PURE__ */ r("label", { children: [
          "Project name",
          /* @__PURE__ */ r("input", { value: s.project.name, onInput: (d) => O((b) => {
            b.project.name = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Run ID",
          /* @__PURE__ */ r("input", { value: s.project.runId, onInput: (d) => O((b) => {
            b.project.runId = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "FPS",
          /* @__PURE__ */ r("input", { type: "number", value: s.defaults.fps, onInput: (d) => O((b) => {
            b.defaults.fps = Number(d.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Base seed",
          /* @__PURE__ */ r("input", { type: "number", value: s.defaults.baseSeed, onInput: (d) => O((b) => {
            b.defaults.baseSeed = Number(d.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ r(Ge, { value: s.promptPrefix, isReferenceValid: (d) => zt(s, d), onInput: (d) => O((b) => {
            b.promptPrefix = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ r(Ge, { value: s.promptSuffix, isReferenceValid: (d) => zt(s, d), onInput: (d) => O((b) => {
            b.promptSuffix = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r(jn, { language: l, projectName: s.project.name, runId: s.project.runId, onClearShots: () => {
          O((d) => {
            d.shots = Sn();
          }), _(0), T([]);
        }, onClearAssets: () => {
          O((d) => {
            const b = Kr(d);
            d.assets = b.assets, d.shots = b.shots;
          }), pe(""), R({});
        }, onProjectCleared: () => f((d) => d + 1) })
      ] }),
      p === "postprocess" && /* @__PURE__ */ r(vn, { plan: s, language: l, queueSecondPass: i })
    ] }),
    v && /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": l === "zh" ? "批量处理镜头" : "Batch edit shots", children: [
      /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("h2", { children: l === "zh" ? "批量处理镜头" : "Batch edit shots" }),
          /* @__PURE__ */ r("p", { children: l === "zh" ? `当前共 ${A.length} 个镜头` : `${A.length} shots` })
        ] }),
        /* @__PURE__ */ r("button", { "aria-label": l === "zh" ? "关闭" : "Close", onClick: () => L(!1), children: "×" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-tools", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            l === "zh" ? "所有镜头时长" : "Duration for all shots",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: C, onInput: (d) => B(d.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: l === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: Ve, children: l === "zh" ? "一键设置所有时长" : "Set all durations" })
        ] }),
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            l === "zh" ? "新增镜头数量" : "New shot count",
            /* @__PURE__ */ r("input", { type: "number", min: "1", max: "100", step: "1", value: re, onInput: (d) => Q(d.currentTarget.value) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            l === "zh" ? "每个镜头时长" : "Duration per shot",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: se, onInput: (d) => _e(d.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: l === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: cr, children: l === "zh" ? "批量新增镜头" : "Add shots" })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-global-actions", children: [
        /* @__PURE__ */ r("span", { children: l === "zh" ? `已启用 ${A.filter((d) => d.enabled).length}/${A.length} 个镜头` : `${A.filter((d) => d.enabled).length}/${A.length} shots enabled` }),
        /* @__PURE__ */ r("button", { class: X ? "active" : "", onClick: pr, children: X ? l === "zh" ? "全部禁用" : "Disable all" : l === "zh" ? "全部启用" : "Enable all" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-table", children: [
        /* @__PURE__ */ r("div", { class: "td-batch-row td-batch-table-head", children: [
          /* @__PURE__ */ r("span", { children: "#" }),
          /* @__PURE__ */ r("span", { children: l === "zh" ? "镜头名" : "Shot name" }),
          /* @__PURE__ */ r("span", { children: l === "zh" ? "启用" : "Enabled" }),
          /* @__PURE__ */ r("span", { children: l === "zh" ? "具体时长" : "Duration" }),
          /* @__PURE__ */ r("span", { children: [
            "latent ",
            l === "zh" ? "接力" : "relay"
          ] })
        ] }),
        A.map((d, b) => /* @__PURE__ */ r("div", { class: "td-batch-row", children: [
          /* @__PURE__ */ r("span", { children: b + 1 }),
          /* @__PURE__ */ r("input", { value: d.title, "aria-label": `${l === "zh" ? "镜头名" : "Shot name"} ${b + 1}`, onInput: (P) => T((U) => U.map((J, ie) => ie === b ? { ...J, title: P.currentTarget.value } : J)) }),
          /* @__PURE__ */ r("label", { class: "td-batch-enabled", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: d.enabled, onChange: (P) => T((U) => U.map((J, ie) => ie === b ? { ...J, enabled: P.currentTarget.checked } : J)) }),
            /* @__PURE__ */ r("span", { children: d.enabled ? l === "zh" ? "开" : "ON" : l === "zh" ? "关" : "OFF" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: d.durationSeconds, onInput: (P) => T((U) => U.map((J, ie) => ie === b ? { ...J, durationSeconds: Number(P.currentTarget.value) } : J)) }),
            /* @__PURE__ */ r("span", { children: l === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-relay", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: d.latentRelay, onChange: (P) => T((U) => U.map((J, ie) => ie === b ? { ...J, latentRelay: P.currentTarget.checked } : J)) }),
            /* @__PURE__ */ r("span", { children: d.latentRelay ? l === "zh" ? "开" : "ON" : l === "zh" ? "关" : "OFF" })
          ] })
        ] }, d.id))
      ] }),
      /* @__PURE__ */ r("footer", { children: [
        /* @__PURE__ */ r("button", { onClick: () => L(!1), children: l === "zh" ? "取消" : "Cancel" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: hr, children: l === "zh" ? "应用更改" : "Apply changes" })
      ] })
    ] }) }),
    D && /* @__PURE__ */ r(Fr, { language: l, assets: s.assets, projectName: s.project.name, uploadFile: Nt, onImported: (d) => O((b) => {
      b.assets.push(...d);
    }), onClose: () => m(!1) })
  ] });
}
function An(e, t, n = !1, o) {
  const i = document.getElementById("theodore-director-modal");
  if (i) {
    i.focus();
    return;
  }
  const s = document.createElement("div");
  s.id = "theodore-director-modal", s.className = "td-modal", s.tabIndex = -1, document.body.append(s);
  const a = (g) => {
    g.key === "Escape" && p();
  }, p = () => {
    document.removeEventListener("keydown", a), ut(null, s), s.remove();
  };
  document.addEventListener("keydown", a), ut(/* @__PURE__ */ r(En, { initial: e, onSave: (g) => {
    t(g), p();
  }, onClose: p, supportsSecondSampling: n, queueSecondPass: o }), s), s.focus();
}
const Mn = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-shot-media{position:relative}.td-form label.td-shot-media-display-toggle{position:absolute;top:-17px;right:10px;z-index:3;display:flex;flex-direction:row;align-items:center;gap:6px;padding:6px 9px;border:1px solid var(--td-line);border-radius:6px;background:var(--td-panel);color:var(--td-text);cursor:pointer;white-space:nowrap}.td-form label.td-shot-media-display-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-display-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-highlight-textarea{position:relative;display:block;width:100%;min-width:0}.td-highlight-backdrop,.td-form textarea.td-highlight-input{box-sizing:border-box;width:100%;margin:0;padding:7px 9px;font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,monospace;font-size:inherit;line-height:1.45;letter-spacing:normal;-moz-tab-size:8;tab-size:8;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.td-highlight-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border:1px solid transparent;border-radius:6px;background:#222a35;color:var(--td-text);pointer-events:none}.td-form textarea.td-highlight-input{position:relative;z-index:1;display:block;background:transparent;color:transparent;caret-color:var(--td-text);-webkit-text-fill-color:transparent}.td-highlight-input::selection{background:#5898d46b}.td-highlight-backdrop mark{padding:0;border-radius:3px;color:inherit}.td-highlight-backdrop mark.valid{background:#1d6b50;color:#bfffe6}.td-highlight-backdrop mark.invalid{background:#7a2931;color:#ffd1d5;text-decoration:underline;text-decoration-color:#ff9aa4;text-underline-offset:2px}.td-reference-mention-menu{position:fixed;z-index:80;display:flex;flex-direction:column;overflow:hidden;border:1px solid #526174;border-radius:9px;background:#161d26;color:var(--td-text);box-shadow:0 14px 42px #000b}.td-reference-mention-menu>header{display:flex;align-items:center;justify-content:space-between;flex:none;padding:8px 10px;border-bottom:1px solid var(--td-line);background:#202936}.td-reference-mention-menu>header strong{color:var(--td-text);font-size:13px}.td-reference-mention-menu>header span{padding:1px 7px;border-radius:999px;background:#2b3745;color:var(--td-muted);font-size:11px}.td-reference-mention-options{min-height:0;overflow:auto;padding:5px}.td-shell .td-reference-mention-options>button{display:grid;grid-template-columns:66px minmax(0,1fr) auto;gap:9px;align-items:center;width:100%;min-height:56px;padding:5px;border:1px solid transparent;background:transparent;text-align:left}.td-shell .td-reference-mention-options>button:hover,.td-shell .td-reference-mention-options>button.active{border-color:#527e6c;background:#1d302b}.td-reference-mention-thumb{display:flex;width:66px;height:46px;align-items:center;justify-content:center;overflow:hidden;border:1px solid var(--td-line);border-radius:5px;background:#0b0f14;color:var(--td-accent);font-size:20px}.td-reference-mention-thumb img{display:block;width:100%;height:100%;object-fit:cover}.td-reference-mention-copy{display:flex;min-width:0;flex-direction:column;gap:2px}.td-reference-mention-copy strong,.td-reference-mention-copy small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-reference-mention-copy strong{color:var(--td-text)}.td-reference-mention-copy small{color:var(--td-muted);font-size:11px}.td-reference-mention-options>button>em{padding:2px 7px;border-radius:999px;background:#293440;color:var(--td-muted);font-size:10px;font-style:normal;white-space:nowrap}.td-reference-mention-empty{margin:0;padding:22px 12px;color:var(--td-muted);text-align:center}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-generated-results{display:flex;flex-direction:column;gap:12px}.td-result-list{display:flex;flex-direction:column;gap:7px;max-height:280px;overflow:auto;padding-right:3px}.td-shell button.td-result-item{display:grid;grid-template-columns:112px minmax(0,1fr);gap:10px;align-items:center;width:100%;padding:6px;text-align:left;background:#151b23}.td-shell button.td-result-item.selected{border-color:var(--td-accent);background:#1c2a2a}.td-result-thumb{width:112px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:5px;background:#090c10;color:var(--td-muted)}.td-result-thumb img,.td-result-thumb video{display:block;width:100%;height:100%;object-fit:contain}.td-result-item-copy{display:flex;min-width:0;flex-direction:column;gap:3px}.td-result-item-copy>strong{display:flex;align-items:center;gap:7px;color:var(--td-text)}.td-result-item-copy>strong em{padding:1px 6px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-result-item-copy>span,.td-result-item-copy>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-result-item-copy>small{font-size:10px}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-project-cleanup{display:grid;gap:9px;margin-top:22px}.td-project-cleanup article{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:15px 16px;border:1px solid #713b42;border-radius:8px;background:#321d22}.td-project-cleanup strong{color:#ffd1d5}.td-project-cleanup p{margin:5px 0 0;color:#d7aeb2;line-height:1.5}.td-project-cleanup button{min-width:130px;flex:none}.td-project-cleanup button:disabled{opacity:.5;cursor:not-allowed}.td-asset-batch-entry{margin-left:auto;border-color:#527061!important;background:#1b2c28!important;color:var(--td-accent)!important}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}.td-bulk-processing{display:grid;gap:6px;margin-bottom:9px}.td-bulk-processing select{width:100%;min-width:0}.td-bulk-processing .td-bulk-toggle{margin:0}.td-processing-mode{display:flex;align-items:center;gap:8px;min-width:260px}.td-processing-mode>span{white-space:nowrap;color:var(--td-muted)}.td-processing-mode select{min-width:170px}.td-second-pass-mode{align-items:flex-end}.td-second-pass-mode label{display:grid;gap:4px;text-align:left}.td-second-pass-mode label span{font-size:12px;color:var(--td-muted)}.td-second-pass-mode select{min-width:210px}.td-shots>.td-shot-sidebar{display:flex;min-height:0;overflow:hidden;flex-direction:column}.td-bulk-processing{flex:none}.td-shot-list{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding-right:4px}.td-shot-sidebar-footer{flex:none;display:grid;gap:8px;padding-top:9px;border-top:1px solid var(--td-line);background:var(--td-panel)}.td-shot-batch-entry{display:flex;min-height:0;padding:0}.td-shot-batch-entry button{border-color:#527061;background:#1b2c28;color:var(--td-accent)}.td-batch-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:28px;background:#05080dbd;box-sizing:border-box}.td-batch-panel{display:flex;flex-direction:column;width:min(1040px,100%);max-height:min(820px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-batch-header h2{font-size:18px;margin:0}.td-batch-header p{margin:3px 0 0;color:var(--td-muted)}.td-batch-header>button{font-size:20px;line-height:1;padding:5px 9px}.td-batch-tools{display:grid;grid-template-columns:1fr 1.4fr;gap:12px;padding:14px 18px;border-bottom:1px solid var(--td-line);background:#151b23}.td-batch-tools>div{display:flex;align-items:end;gap:8px;padding:10px;border:1px solid var(--td-line);border-radius:7px}.td-batch-tools label{display:flex;flex:1;flex-direction:column;gap:4px;color:var(--td-muted);white-space:nowrap}.td-batch-tools label>span,.td-batch-duration{display:flex;align-items:center;gap:6px}.td-batch-tools input{width:100%}.td-batch-tools em{color:var(--td-muted);font-style:normal}.td-batch-tools button{white-space:nowrap}.td-batch-global-actions{display:flex;align-items:center;justify-content:flex-end;gap:12px;padding:9px 22px;border-bottom:1px solid var(--td-line);background:#171e27;color:var(--td-muted)}.td-batch-global-actions button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-batch-table{overflow:auto;padding:0 18px}.td-batch-row{display:grid;grid-template-columns:42px minmax(180px,1fr) 100px 150px 120px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-batch-table-head{position:sticky;top:0;z-index:1;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-batch-duration input{min-width:0;width:100%}.td-batch-duration>span{color:var(--td-muted)}.td-batch-enabled,.td-batch-relay{display:flex;align-items:center;gap:7px;justify-content:flex-start;color:var(--td-text)}.td-batch-enabled input,.td-batch-relay input{width:17px;height:17px;margin:0}.td-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-batch-panel{display:flex;flex-direction:column;width:min(1420px,100%);max-height:min(880px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-asset-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-asset-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-dropzone{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-height:92px;margin:14px 18px 10px;border:1px dashed #597084;border-radius:9px;background:#151b23;color:var(--td-text);cursor:pointer;transition:border-color .15s,background .15s}.td-asset-dropzone:hover,.td-asset-dropzone.dragging{border-color:var(--td-accent);background:#1b2c28}.td-asset-dropzone span{color:var(--td-muted);font-size:12px}.td-asset-dropzone input{display:none}.td-asset-batch-warning{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 18px 10px;padding:8px 10px;border:1px solid #836a32;border-radius:7px;background:#3a301c;color:#f4d991}.td-asset-batch-warning span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-warning button{padding:2px 7px}.td-asset-batch-summary{display:flex;align-items:center;justify-content:space-between;padding:8px 18px;border-top:1px solid var(--td-line);border-bottom:1px solid var(--td-line);background:#151b23;color:var(--td-muted)}.td-asset-batch-summary button{padding:5px 8px}.td-asset-batch-list{overflow:auto;padding:0 18px 10px}.td-asset-batch-row{display:grid;grid-template-columns:minmax(210px,1.4fr) minmax(150px,1fr) 115px 135px 105px 72px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-asset-batch-head{position:sticky;top:0;z-index:2;padding-top:10px;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-asset-batch-row.invalid{background:#3b202560}.td-asset-batch-row.imported{background:#17372d55}.td-asset-batch-file{display:flex;min-width:0;flex-direction:column;gap:2px}.td-asset-batch-file strong,.td-asset-batch-file small,.td-asset-batch-file em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-file small{color:var(--td-muted);font-weight:400}.td-asset-batch-file em{color:var(--td-danger);font-size:11px;font-style:normal}.td-asset-batch-duration,.td-asset-batch-audio{display:flex;align-items:center;gap:6px;color:var(--td-muted)}.td-asset-batch-duration input{min-width:0;width:100%}.td-asset-batch-audio input{width:17px;height:17px;margin:0}.td-asset-batch-empty{display:flex;min-height:130px;align-items:center;justify-content:center;color:var(--td-muted)}.td-asset-batch-panel button:disabled,.td-asset-batch-panel input:disabled,.td-asset-batch-panel select:disabled{opacity:.55;cursor:not-allowed}.td-postprocess{display:flex;flex-direction:column;gap:14px;max-width:1500px;margin:0 auto}.td-post-header,.td-post-summary,.td-post-merged{border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px}.td-post-header h2,.td-post-merged h2{margin:0;font-size:17px}.td-post-header p{margin:4px 0 0;color:var(--td-muted)}.td-post-actions{display:flex;gap:8px;flex:none}.td-post-summary{display:flex;align-items:center;gap:18px;padding:10px 14px;color:var(--td-muted)}.td-post-summary>button{margin-left:auto}.td-post-summary button:disabled{opacity:.5;cursor:not-allowed}.td-post-range{display:flex;align-items:center;gap:6px;margin-left:auto}.td-post-range input{width:64px;padding:6px 7px;text-align:center}.td-post-range button{white-space:nowrap}.td-post-summary>.td-post-range+button{margin-left:0}.td-post-error,.td-post-warning{padding:10px 13px;border-radius:7px}.td-post-error{border:1px solid #8b4149;background:#442228;color:#ffd1d5;white-space:pre-wrap}.td-post-warning{border:1px solid #836a32;background:#3a301c;color:#f4d991}.td-post-shot-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(390px,1fr));gap:12px;align-items:start}.td-post-shot{min-width:0;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel);overflow:hidden}.td-post-shot.selected{border-color:#527e6c}.td-post-shot.disabled{opacity:.72}.td-post-shot>header{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid var(--td-line);background:#1d2530}.td-post-shot>header>label{display:flex;align-items:center;gap:9px;min-width:0;cursor:pointer}.td-post-shot>header input{width:18px;height:18px;margin:0;flex:none}.td-post-shot>header label>span{display:flex;min-width:0;gap:8px;align-items:baseline}.td-post-shot>header strong{color:var(--td-text)}.td-post-shot>header em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted);font-style:normal}.td-post-shot>header>span{flex:none;padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted)}.td-post-shot-disabled-note{padding:7px 10px;border-bottom:1px solid var(--td-line);background:#332b1d;color:#e5c77d;font-size:11px}.td-post-shot-empty{min-height:96px;display:flex;align-items:center;justify-content:center;padding:12px;color:var(--td-muted);text-align:center}.td-post-result-list{display:flex;flex-direction:column;gap:7px;max-height:360px;overflow:auto;padding:9px}.td-post-result{display:grid;grid-template-columns:minmax(0,1fr) 35px;gap:6px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:5px}.td-post-result.selected{border-color:var(--td-accent);background:#1c2a2a}.td-shell button.td-post-result-choice{display:grid;grid-template-columns:112px minmax(0,1fr);gap:9px;align-items:center;min-width:0;padding:0;border:0;background:transparent;text-align:left}.td-post-result-choice>span{display:flex;min-width:0;flex-direction:column;gap:3px}.td-post-result-choice>span>strong{display:flex;align-items:center;gap:6px}.td-post-result-choice>span>strong em{padding:1px 5px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-post-result-choice>span>span,.td-post-result-choice>span>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-post-result-choice>span>small{font-size:10px}.td-post-result-play{width:35px;height:35px;padding:0!important}.td-post-result-play:disabled{opacity:.35;cursor:not-allowed}.td-post-merged{padding:12px}.td-post-merged>header>div{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px}.td-post-merged .td-generated-results{display:grid;grid-template-columns:minmax(360px,1.6fr) minmax(300px,1fr);align-items:start}.td-post-merged .td-result-list{max-height:420px}.td-post-preview-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:30;display:flex;align-items:center;justify-content:center;padding:26px;background:#030609d6}.td-post-preview-overlay>section{width:min(980px,100%);max-height:calc(100vh - 52px);overflow:auto;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 80px #000c}.td-post-preview-overlay header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--td-line)}.td-post-preview-overlay header button{font-size:20px;line-height:1;padding:5px 9px}.td-post-preview-overlay video{display:block;width:100%;max-height:calc(100vh - 170px);background:#070a0e}.td-post-preview-overlay p{margin:0;padding:9px 12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}.td-post-summary{flex-wrap:wrap}.td-post-range{margin-left:0}.td-post-summary>button{margin-left:auto}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:900px){.td-post-shot-list,.td-post-merged .td-generated-results{grid-template-columns:1fr}.td-post-header{align-items:flex-start;flex-direction:column}.td-post-actions{width:100%}.td-post-actions button{flex:1}.td-post-summary{align-items:stretch;flex-direction:column;gap:7px}.td-post-range{margin:3px 0;flex-wrap:wrap}.td-post-summary>button{margin:4px 0 0}.td-post-result-list{max-height:none}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}@media(max-width:1000px){.td-asset-batch-list{min-width:900px}.td-asset-batch-panel{overflow:auto}.td-asset-batch-panel>.td-batch-header,.td-asset-dropzone,.td-asset-batch-warning,.td-asset-batch-summary,.td-asset-batch-panel>footer{min-width:864px}}@media(max-width:720px){.td-asset-batch-entry{margin-left:0}}.td-asset-dropzone{min-height:112px;cursor:default}.td-asset-picker-actions{display:flex;gap:8px;margin-top:8px}.td-asset-picker-button{padding:7px 12px;border:1px solid var(--td-line);border-radius:6px;background:#222c39;color:var(--td-text);cursor:pointer}.td-asset-picker-button:hover{border-color:var(--td-accent);background:#263b38}.td-asset-picker-button:has(input:disabled){opacity:.55;cursor:not-allowed}.td-postprocess-shell{display:flex;flex-direction:column;gap:12px;max-width:1500px;margin:0 auto}.td-postprocess-shell>.td-postprocess{max-width:none;width:100%;margin:0}.td-post-mode-tabs{display:flex;gap:7px;padding:5px;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-mode-tabs button{min-width:130px}.td-post-mode-tabs button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-second-pass-panel .td-post-shot>header>span:first-child{display:flex;min-width:0;gap:8px;align-items:baseline;padding:0;background:transparent}.td-second-pass-result{display:grid;grid-template-columns:minmax(0,1fr) 154px;gap:8px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:6px}.td-second-pass-result:has(.td-second-pass-run:disabled){border-color:#34404d}.td-second-pass-actions{display:flex;min-width:0;flex-direction:column;gap:6px}.td-second-pass-actions select{width:100%;min-width:0;padding:6px}.td-second-pass-terminal{display:flex;min-height:32px;align-items:center;justify-content:center;border:1px solid var(--td-line);border-radius:6px;color:var(--td-muted);font-size:11px;text-align:center}.td-second-pass-run{width:100%;min-height:34px;padding:6px!important}.td-second-pass-run:disabled{opacity:.62;cursor:not-allowed}.td-second-pass-error{grid-column:1/-1;padding:6px 8px;border-radius:5px;background:#442228;color:#ffd1d5;font-size:11px;white-space:pre-wrap}@media(max-width:620px){.td-post-mode-tabs{flex-direction:column}.td-post-mode-tabs button{width:100%}.td-second-pass-result{grid-template-columns:1fr}.td-second-pass-run{width:100%}}.td-delete-panel .td-post-shot>header>span:first-child{display:flex;min-width:0;gap:8px;align-items:baseline;padding:0;background:transparent}.td-delete-result{display:grid;grid-template-columns:minmax(0,1fr) 118px;gap:8px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:6px}.td-delete-result.deleting{opacity:.58}.td-delete-video-button{min-height:40px;padding:6px!important}.td-delete-video-button:disabled{cursor:not-allowed}.td-delete-merged{padding:12px}.td-delete-merged-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(390px,1fr));gap:8px}.td-delete-merged .td-post-result-choice>span>strong{color:var(--td-text)}@media(max-width:620px){.td-delete-result{grid-template-columns:1fr}.td-delete-video-button{width:100%}.td-delete-merged-list{grid-template-columns:1fr}}.td-ai-settings{grid-template-columns:minmax(115px,.65fr) minmax(90px,.55fr) minmax(150px,1.4fr) auto auto!important}@media(max-width:1500px){.td-ai-settings{grid-template-columns:1fr 1fr!important}}.td-ai-body{display:flex;flex-direction:column;gap:12px}.td-ai-settings{display:grid;grid-template-columns:minmax(90px,.55fr) minmax(150px,1.4fr) auto auto;gap:8px;align-items:end}.td-ai-settings label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-ai-settings input,.td-ai-settings select{width:100%}.td-ai-model-state{display:flex;flex-wrap:wrap;gap:10px;color:var(--td-muted);font-size:12px}.td-ai-model-state .running{color:var(--td-accent)}.td-ai-actions,.td-ai-result-actions{display:flex;flex-wrap:wrap;gap:8px}.td-ai-candidate-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(135px,1fr));gap:6px;max-height:180px;overflow:auto}.td-ai-candidate-list button{display:flex;justify-content:space-between;align-items:center;gap:6px;text-align:left}.td-ai-candidate-list button.selected{border-color:var(--td-accent);background:#173028}.td-ai-candidate-list em{font-size:11px;font-style:normal;color:var(--td-muted)}.td-ai-candidate-list em.ready{color:var(--td-accent)}.td-ai-candidate-list em.failed,.td-ai-candidate-list em.stale{color:#ff7d87}.td-ai-candidate-list em.running{color:#8fc7ff}.td-ai-result{display:flex;flex-direction:column;gap:9px}.td-ai-result-head{display:flex;justify-content:space-between;gap:10px;color:var(--td-muted)}.td-ai-result-head strong{color:var(--td-text)}.td-ai-compare{display:grid;grid-template-columns:1fr 1fr;gap:8px}.td-ai-compare label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-ai-compare textarea{width:100%;min-height:220px;resize:vertical;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:12px}.td-ai-warnings{color:#f6c86a}.td-ai-notes{color:var(--td-muted)}@media(max-width:1500px){.td-ai-settings{grid-template-columns:1fr 1fr}.td-ai-compare{grid-template-columns:1fr}}", Dt = "theodore-director-styles";
function Rn() {
  if (document.getElementById(Dt)) return;
  const e = document.createElement("style");
  e.id = Dt, e.textContent = Mn, document.head.append(e);
}
Rn();
const Ln = "/scripts/app.js", Nn = "/scripts/api.js";
Promise.all([
  import(
    /* @vite-ignore */
    Ln
  ),
  import(
    /* @vite-ignore */
    Nn
  )
]).then(([{ app: e }, { api: t }]) => {
  const n = async (o) => {
    var R, S;
    const i = ((R = e.graph) == null ? void 0 : R._nodes) ?? [], s = i.find((j) => j.type === "TheodoreDirector_PostprocessSecondPassSource"), a = i.find((j) => j.type === "TheodoreDirector_SaveSecondPass"), p = (S = s == null ? void 0 : s.widgets) == null ? void 0 : S.find((j) => j.name === "request_json");
    if (!s || !a || !p || a.id === void 0)
      throw new Error("当前工作流缺少后处理单独二采支流，请重新载入仓库中的 V7 导播台示例工作流");
    const g = p.value, h = s.mode, _ = a.mode;
    let l;
    try {
      p.value = JSON.stringify(o), s.mode = 0, a.mode = 0, l = await e.graphToPrompt(e.rootGraph);
    } finally {
      p.value = g, s.mode = h, a.mode = _;
    }
    const w = (await t.queuePrompt(0, l, { partialExecutionTargets: [String(a.id)] })).prompt_id;
    if (!w) throw new Error("ComfyUI 没有返回二采任务 ID");
    await new Promise((j, M) => {
      const u = () => {
        t.removeEventListener("execution_success", f), t.removeEventListener("execution_error", $), t.removeEventListener("execution_interrupted", $);
      }, k = (z) => {
        var V;
        return String(((V = z.detail) == null ? void 0 : V.prompt_id) ?? "");
      }, f = (z) => {
        k(z) === w && (u(), j());
      }, $ = (z) => {
        if (k(z) !== w) return;
        const V = z.detail ?? {};
        u(), M(new Error(String(V.exception_message ?? V.error ?? "单独二采任务执行失败")));
      };
      t.addEventListener("execution_success", f), t.addEventListener("execution_error", $), t.addEventListener("execution_interrupted", $);
    });
  };
  e.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(o, i) {
      if (i.name === "TheodoreDirector_PostprocessSecondPassSource") {
        const a = o.prototype.onNodeCreated;
        o.prototype.onNodeCreated = function() {
          var g, h;
          a == null || a.apply(this);
          const p = (g = this.widgets) == null ? void 0 : g.find((_) => _.name === "request_json");
          p && (p.type = "hidden", p.computeSize = () => [0, -4]), this.size = [Math.max(((h = this.size) == null ? void 0 : h[0]) ?? 300, 380), 80];
        };
        return;
      }
      if (i.name !== "TheodoreDirector_Project") return;
      const s = o.prototype.onNodeCreated;
      o.prototype.onNodeCreated = function() {
        var p, g;
        s == null || s.apply(this);
        const a = (p = this.widgets) == null ? void 0 : p.find((h) => h.name === "plan_json");
        a && (a.type = "hidden", a.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          var h;
          try {
            const _ = JSON.parse(String(a.value)), l = ((h = e.graph) == null ? void 0 : h._nodes) ?? [], c = l.some((w) => w.type === "TheodoreDirector_PostprocessSecondPassSource") && l.some((w) => w.type === "TheodoreDirector_SaveSecondPass");
            An(_, (w) => {
              var R, S;
              a.value = JSON.stringify(w, null, 2), this.setDirtyCanvas(!0, !0), (S = (R = e.graph) == null ? void 0 : R.setDirtyCanvas) == null || S.call(R, !0, !0);
            }, !0, c ? n : void 0);
          } catch (_) {
            window.alert(`Theodore Director: ${_ instanceof Error ? _.message : String(_)}`);
          }
        }), this.size = [Math.max(((g = this.size) == null ? void 0 : g[0]) ?? 300, 360), 110]);
      };
    }
  });
});
