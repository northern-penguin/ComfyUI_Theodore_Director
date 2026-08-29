var Ue, O, Ot, ce, bt, Ut, Bt, We, Ee, $e, qt, tt, Xe, Ze, Le = {}, De = [], zn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Be = Array.isArray;
function oe(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function nt(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function $n(e, t, r) {
  var o, a, d, s = {};
  for (d in t) d == "key" ? o = t[d] : d == "ref" ? a = t[d] : s[d] = t[d];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Ue.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null) for (d in e.defaultProps) s[d] === void 0 && (s[d] = e.defaultProps[d]);
  return Pe(e, s, o, a, null);
}
function Pe(e, t, r, o, a) {
  var d = { type: e, props: t, key: r, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++Ot, __i: -1, __u: 0 };
  return a == null && O.vnode != null && O.vnode(d), d;
}
function Ie(e) {
  return e.children;
}
function Me(e, t) {
  this.props = e, this.context = t;
}
function ve(e, t) {
  if (t == null) return e.__ ? ve(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? ve(e) : null;
}
function Cn(e) {
  if (e.__P && e.__d) {
    var t = e.__v, r = t.__e, o = [], a = [], d = oe({}, t);
    d.__v = t.__v + 1, O.vnode && O.vnode(d), rt(e.__P, d, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [r] : null, o, r ?? ve(t), !!(32 & t.__u), a), d.__v = t.__v, d.__.__k[d.__i] = d, Jt(o, d, a), t.__e = t.__ = null, d.__e != r && Kt(d);
  }
}
function Kt(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), Kt(e);
}
function vt(e) {
  (!e.__d && (e.__d = !0) && ce.push(e) && !Fe.__r++ || bt != O.debounceRendering) && ((bt = O.debounceRendering) || Ut)(Fe);
}
function Fe() {
  try {
    for (var e, t = 1; ce.length; ) ce.length > t && ce.sort(Bt), e = ce.shift(), t = ce.length, Cn(e);
  } finally {
    ce.length = Fe.__r = 0;
  }
}
function Vt(e, t, r, o, a, d, s, c, h, u, f) {
  var _, p, l, I, w, k, y = o && o.__k || De, S = t.length;
  for (h = In(r, t, y, h, S), _ = 0; _ < S; _++) (l = r.__k[_]) != null && (p = l.__i != -1 && y[l.__i] || Le, l.__i = _, k = rt(e, l, p, a, d, s, c, h, u, f), I = l.__e, l.ref && p.ref != l.ref && (p.ref && ot(p.ref, null, l), f.push(l.ref, l.__c || I, l)), w == null && I != null && (w = I), 4 & l.__u ? (h = Wt(l, h, e), p.__e && (p.__e = null)) : typeof l.type == "function" && k !== void 0 ? h = k : I && (h = I.nextSibling), l.__u &= -7);
  return r.__e = w, h;
}
function In(e, t, r, o, a) {
  var d, s, c, h, u, f = r.length, _ = f, p = 0;
  for (e.__k = new Array(a), d = 0; d < a; d++) (s = t[d]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = e.__k[d] = Pe(null, s, null, null, null) : Be(s) ? s = e.__k[d] = Pe(Ie, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = e.__k[d] = Pe(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : e.__k[d] = s, h = d + p, s.__ = e, s.__b = e.__b + 1, c = null, (u = s.__i = An(s, r, h, _)) != -1 && (_--, (c = r[u]) && (c.__u |= 2)), c == null || c.__v == null ? (u == -1 && (a > f ? p-- : a < f && p++), typeof s.type != "function" && (s.__u |= 4)) : u != h && (u == h - 1 ? p-- : u == h + 1 ? p++ : (u > h ? p-- : p++, s.__u |= 4))) : e.__k[d] = null;
  if (_) for (d = 0; d < f; d++) (c = r[d]) != null && (2 & c.__u) == 0 && (c.__e == o && (o = ve(c)), Qt(c, c));
  return o;
}
function Wt(e, t, r) {
  var o, a;
  if (typeof e.type == "function") {
    for (o = e.__k, a = 0; o && a < o.length; a++) o[a] && (o[a].__ = e, t = Wt(o[a], t, r));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = ve(e)), t = r.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function An(e, t, r, o) {
  var a, d, s, c = e.key, h = e.type, u = t[r], f = u != null && (2 & u.__u) == 0;
  if (u === null && c == null || f && c == u.key && h == u.type) return r;
  if (o > (f ? 1 : 0)) {
    for (a = r - 1, d = r + 1; a >= 0 || d < t.length; ) if ((u = t[s = a >= 0 ? a-- : d++]) != null && (2 & u.__u) == 0 && c == u.key && h == u.type) return s;
  }
  return -1;
}
function xt(e, t, r) {
  t[0] == "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || zn.test(t) ? r : r + "px";
}
function Te(e, t, r, o, a) {
  var d, s;
  e: if (t == "style") if (typeof r == "string") e.style.cssText = r;
  else {
    if (typeof o == "string" && (e.style.cssText = o = ""), o) for (t in o) r && t in r || xt(e.style, t, "");
    if (r) for (t in r) o && r[t] == o[t] || xt(e.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") d = t != (t = t.replace(qt, "$1")), s = t.toLowerCase(), t = s in e || t == "onFocusOut" || t == "onFocusIn" ? s.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + d] = r, r ? o ? r[$e] = o[$e] : (r[$e] = tt, e.addEventListener(t, d ? Ze : Xe, d)) : e.removeEventListener(t, d ? Ze : Xe, d);
  else {
    if (a == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && r == 1 ? "" : r));
  }
}
function _t(e) {
  return function(t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t[Ee] == null) t[Ee] = tt++;
      else if (t[Ee] < r[$e]) return;
      return r(O.event ? O.event(t) : t);
    }
  };
}
function rt(e, t, r, o, a, d, s, c, h, u) {
  var f, _, p, l, I, w, k, y, S, P, g, A, H, D, N, b, T = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && (h = !!(32 & r.__u), d = [c = t.__e = r.__e]), (f = O.__b) && f(t);
  e: if (typeof T == "function") {
    _ = s.length;
    try {
      if (S = t.props, P = T.prototype && T.prototype.render, g = (f = T.contextType) && o[f.__c], A = f ? g ? g.props.value : f.__ : o, r.__c ? y = (p = t.__c = r.__c).__ = p.__E : (P ? t.__c = p = new T(S, A) : (t.__c = p = new Me(S, A), p.constructor = T, p.render = Tn), g && g.sub(p), p.state || (p.state = {}), p.__n = o, l = p.__d = !0, p.__h = [], p._sb = []), P && p.__s == null && (p.__s = p.state), P && T.getDerivedStateFromProps != null && (p.__s == p.state && (p.__s = oe({}, p.__s)), oe(p.__s, T.getDerivedStateFromProps(S, p.__s))), I = p.props, w = p.state, p.__v = t, l) P && T.getDerivedStateFromProps == null && p.componentWillMount != null && p.componentWillMount(), P && p.componentDidMount != null && p.__h.push(p.componentDidMount);
      else {
        if (P && T.getDerivedStateFromProps == null && S !== I && p.componentWillReceiveProps != null && p.componentWillReceiveProps(S, A), t.__v == r.__v || !p.__e && p.shouldComponentUpdate != null && p.shouldComponentUpdate(S, p.__s, A) === !1) {
          t.__v != r.__v && (p.props = S, p.state = p.__s, p.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(F) {
            F && (F.__ = t);
          }), De.push.apply(p.__h, p._sb), p._sb = [], p.__h.length && s.push(p), c = ve(r);
          break e;
        }
        p.componentWillUpdate != null && p.componentWillUpdate(S, p.__s, A), P && p.componentDidUpdate != null && p.__h.push(function() {
          p.componentDidUpdate(I, w, k);
        });
      }
      if (p.context = A, p.props = S, p.__P = e, p.__e = !1, H = O.__r, D = 0, P) p.state = p.__s, p.__d = !1, H && H(t), f = p.render(p.props, p.state, p.context), De.push.apply(p.__h, p._sb), p._sb = [];
      else do
        p.__d = !1, H && H(t), f = p.render(p.props, p.state, p.context), p.state = p.__s;
      while (p.__d && ++D < 25);
      p.state = p.__s, p.getChildContext != null && (o = oe(oe({}, o), p.getChildContext())), P && !l && p.getSnapshotBeforeUpdate != null && (k = p.getSnapshotBeforeUpdate(I, w)), N = f != null && f.type === Ie && f.key == null ? Yt(f.props.children) : f, c = Vt(e, Be(N) ? N : [N], t, r, o, a, d, s, c, h, u), p.base = t.__e, t.__u &= -161, p.__h.length && s.push(p), y && (p.__E = p.__ = null);
    } catch (F) {
      if (s.length = _, t.__v = null, h || d != null) {
        if (F.then) {
          for (t.__u |= h ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
          d != null && (d[d.indexOf(c)] = null), t.__e = c;
        } else if (d != null) for (b = d.length; b--; ) nt(d[b]);
      } else t.__e = r.__e;
      t.__k == null && (t.__k = r.__k || []), F.then || Gt(t), O.__e(F, t, r);
    }
  } else d == null && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : c = t.__e = Rn(r.__e, t, r, o, a, d, s, h, u);
  return (f = O.diffed) && f(t), 128 & t.__u ? void 0 : c;
}
function Gt(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Gt));
}
function Jt(e, t, r) {
  for (var o = 0; o < r.length; o++) ot(r[o], r[++o], r[++o]);
  O.__c && O.__c(t, e), e.some(function(a) {
    try {
      e = a.__h, a.__h = [], e.some(function(d) {
        d.call(a);
      });
    } catch (d) {
      O.__e(d, a.__v);
    }
  });
}
function Yt(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : Be(e) ? e.map(Yt) : e.constructor !== void 0 ? null : oe({}, e);
}
function Rn(e, t, r, o, a, d, s, c, h) {
  var u, f, _, p, l, I, w, k = r.props || Le, y = t.props, S = t.type;
  if (S == "svg" ? a = "http://www.w3.org/2000/svg" : S == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), d != null) {
    for (u = 0; u < d.length; u++) if ((l = d[u]) && "setAttribute" in l == !!S && (S ? l.localName == S : l.nodeType == 3)) {
      e = l, d[u] = null;
      break;
    }
  }
  if (e == null) {
    if (S == null) return document.createTextNode(y);
    e = document.createElementNS(a, S, y.is && y), c && (O.__m && O.__m(t, d), c = !1), d = null;
  }
  if (S == null) k === y || c && e.data == y || (e.data = y);
  else {
    if (d = S == "textarea" && y.defaultValue != null ? null : d && Ue.call(e.childNodes), !c && d != null) for (k = {}, u = 0; u < e.attributes.length; u++) k[(l = e.attributes[u]).name] = l.value;
    for (u in k) l = k[u], u == "dangerouslySetInnerHTML" ? _ = l : u == "children" || u in y || u == "value" && "defaultValue" in y || u == "checked" && "defaultChecked" in y || Te(e, u, null, l, a);
    for (u in y) l = y[u], u == "children" ? p = l : u == "dangerouslySetInnerHTML" ? f = l : u == "value" ? I = l : u == "checked" ? w = l : c && typeof l != "function" || k[u] === l || Te(e, u, l, k[u], a);
    if (f) c || _ && (f.__html == _.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (_ && (e.innerHTML = ""), Vt(t.type == "template" ? e.content : e, Be(p) ? p : [p], t, r, o, S == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, d, s, d ? d[0] : r.__k && ve(r, 0), c, h), d != null) for (u = d.length; u--; ) nt(d[u]);
    c && S != "textarea" || (u = "value", S == "progress" && I == null ? e.removeAttribute("value") : I != null && (I !== e[u] || S == "progress" && !I || S == "option" && I != k[u]) && Te(e, u, I, k[u], a), u = "checked", w != null && w != e[u] && Te(e, u, w, k[u], a));
  }
  return e;
}
function ot(e, t, r) {
  try {
    if (typeof e == "function") {
      var o = typeof e.__u == "function";
      o && e.__u(), o && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (a) {
    O.__e(a, r);
  }
}
function Qt(e, t, r) {
  var o, a;
  if (O.unmount && O.unmount(e), (o = e.ref) && (o.current && o.current != e.__e || ot(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (d) {
      O.__e(d, t);
    }
    o.base = o.__P = o.__n = null;
  }
  if (o = e.__k) for (a = 0; a < o.length; a++) o[a] && Qt(o[a], t, r || typeof e.type != "function");
  r || nt(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Tn(e, t, r) {
  return this.constructor(e, r);
}
function yt(e, t, r) {
  var o, a, d, s;
  t == document && (t = document.documentElement), O.__ && O.__(e, t), a = (o = !1) ? null : t.__k, d = [], s = [], rt(t, e = t.__k = $n(Ie, null, [e]), a || Le, Le, t.namespaceURI, a ? null : t.firstChild ? Ue.call(t.childNodes) : null, d, a ? a.__e : t.firstChild, o, s), Jt(d, e, s), e.props.children = null;
}
Ue = De.slice, O = { __e: function(e, t, r, o) {
  for (var a, d, s; t = t.__; ) if ((a = t.__c) && !a.__) try {
    if ((d = a.constructor) && d.getDerivedStateFromError != null && (a.setState(d.getDerivedStateFromError(e)), s = a.__d), a.componentDidCatch != null && (a.componentDidCatch(e, o || {}), s = a.__d), s) return a.__E = a;
  } catch (c) {
    e = c;
  }
  throw e;
} }, Ot = 0, Me.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = oe({}, this.state), typeof e == "function" && (e = e(oe({}, r), this.props)), e && oe(r, e), e != null && this.__v && (t && this._sb.push(t), vt(this));
}, Me.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), vt(this));
}, Me.prototype.render = Ie, ce = [], Ut = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Bt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Fe.__r = 0, We = Math.random().toString(8), Ee = "__d" + We, $e = "__a" + We, qt = /(PointerCapture)$|Capture$/i, tt = 0, Xe = _t(!1), Ze = _t(!0);
var En = 0;
function n(e, t, r, o, a, d) {
  t || (t = {});
  var s, c, h = t;
  if ("ref" in h) for (c in h = {}, t) c == "ref" ? s = t[c] : h[c] = t[c];
  var u = { type: e, props: h, key: r, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --En, __i: -1, __u: 0, __source: a, __self: d };
  if (typeof e == "function" && (s = e.defaultProps)) for (c in s) h[c] === void 0 && (h[c] = s[c]);
  return O.vnode && O.vnode(u), u;
}
var Ce, B, Ge, wt, He = 0, Xt = [], K = O, kt = K.__b, St = K.__r, zt = K.diffed, $t = K.__c, Ct = K.unmount, It = K.__;
function st(e, t) {
  K.__h && K.__h(B, e, He || t), He = 0;
  var r = B.__H || (B.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function C(e) {
  return He = 1, Pn(en, e);
}
function Pn(e, t, r) {
  var o = st(Ce++, 2);
  if (o.t = e, !o.__c && (o.__ = [en(void 0, t), function(c) {
    var h = o.__N ? o.__N[0] : o.__[0], u = o.t(h, c);
    h !== u && (o.__N = [u, o.__[1]], o.__c.setState({}));
  }], o.__c = B, !B.__f)) {
    var a = function(c, h, u) {
      if (!o.__c.__H) return !0;
      var f = !1, _ = o.__c.props !== c;
      if (o.__c.__H.__.some(function(l) {
        if (l.__N) {
          f = !0;
          var I = l.__[0];
          l.__ = l.__N, l.__N = void 0, I !== l.__[0] && (_ = !0);
        }
      }), d) {
        var p = d.call(this, c, h, u);
        return f ? p || _ : p;
      }
      return !f || _;
    };
    B.__f = !0;
    var d = B.shouldComponentUpdate, s = B.componentWillUpdate;
    B.componentWillUpdate = function(c, h, u) {
      if (this.__e) {
        var f = d;
        d = void 0, a(c, h, u), d = f;
      }
      s && s.call(this, c, h, u);
    }, B.shouldComponentUpdate = a;
  }
  return o.__N || o.__;
}
function ke(e, t) {
  var r = st(Ce++, 3);
  !K.__s && Zt(r.__H, t) && (r.__ = e, r.u = t, B.__H.__h.push(r));
}
function it(e) {
  return He = 5, Se(function() {
    return { current: e };
  }, []);
}
function Se(e, t) {
  var r = st(Ce++, 7);
  return Zt(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__;
}
function Mn() {
  for (var e; e = Xt.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(je), t.__h.some(et), t.__h = [];
    } catch (r) {
      t.__h = [], K.__e(r, e.__v);
    }
  }
}
K.__b = function(e) {
  B = null, kt && kt(e);
}, K.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), It && It(e, t);
}, K.__r = function(e) {
  St && St(e), Ce = 0;
  var t = (B = e.__c).__H;
  t && (Ge === B ? (t.__h = [], B.__h = [], t.__.some(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.some(je), t.__h.some(et), t.__h = [], Ce = 0)), Ge = B;
}, K.diffed = function(e) {
  zt && zt(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Xt.push(t) !== 1 && wt === K.requestAnimationFrame || ((wt = K.requestAnimationFrame) || jn)(Mn)), t.__H.__.some(function(r) {
    r.u && (r.__H = r.u, r.u = void 0);
  })), Ge = B = null;
}, K.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.some(je), r.__h = r.__h.filter(function(o) {
        return !o.__ || et(o);
      });
    } catch (o) {
      t.some(function(a) {
        a.__h && (a.__h = []);
      }), t = [], K.__e(o, r.__v);
    }
  }), $t && $t(e, t);
}, K.unmount = function(e) {
  Ct && Ct(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.some(function(o) {
    try {
      je(o);
    } catch (a) {
      t = a;
    }
  }), r.__H = void 0, t && K.__e(t, r.__v));
};
var At = typeof requestAnimationFrame == "function";
function jn(e) {
  var t, r = function() {
    clearTimeout(o), At && cancelAnimationFrame(t), setTimeout(e);
  }, o = setTimeout(r, 35);
  At && (t = requestAnimationFrame(r));
}
function je(e) {
  var t = B, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), B = t;
}
function et(e) {
  var t = B;
  e.__c = e.__(), B = t;
}
function Zt(e, t) {
  return !e || e.length !== t.length || t.some(function(r, o) {
    return r !== e[o];
  });
}
function en(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const Nn = {
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
function tn(e) {
  var o;
  const t = ((o = e.name.split(".").pop()) == null ? void 0 : o.toLocaleLowerCase()) ?? "";
  if (e.name.includes(".")) return Nn[t] ?? null;
  const r = e.type.split("/", 1)[0];
  return r === "image" || r === "video" || r === "audio" ? r : null;
}
function Ln(e) {
  const a = e.replace(/\.[^.]+$/, "").replace(/^\s*\d+\s*[-_. ]+/, "").normalize("NFKC").replace(/[\s-]+/g, "_").replace(/[{}]/g, "").replace(/_+/g, "_").replace(/^[_\.]+|[_\.]+$/g, "").slice(0, 96) || "asset";
  return a.toLocaleLowerCase().endsWith(".audio") ? `${a}_asset` : a;
}
function Dn(e, t) {
  const r = new Set(Array.from(t, (a) => a.toLocaleLowerCase()));
  if (!r.has(e.toLocaleLowerCase())) return e;
  let o = 2;
  for (; r.has(`${e}_${o}`.toLocaleLowerCase()); ) o += 1;
  return `${e}_${o}`;
}
function Fn(e, t, r) {
  const o = e.trim().toLocaleLowerCase();
  return !e.trim() || /[\s{}]/.test(e) || o.endsWith(".audio") ? "invalid" : Array.from(t, (d) => d.toLocaleLowerCase()).includes(o) || Array.from(r, (d) => d.trim().toLocaleLowerCase()).filter((d) => d === o).length > 1 ? "duplicate" : null;
}
function Hn(e, t, r) {
  const o = new Set(Array.from(t)), a = [], d = [];
  for (const s of e) {
    const c = tn(s);
    if (!c) {
      d.push(s.name);
      continue;
    }
    const h = Dn(Ln(s.name), o);
    o.add(h), a.push({ id: r(), file: s, alias: h, kind: c, durationSeconds: c === "image" ? null : 2, includeVideoAudio: !1, status: "pending", error: "" });
  }
  return { drafts: a, rejected: d };
}
function On(e, t, r) {
  return {
    id: e.id,
    alias: e.alias.trim(),
    kind: e.kind,
    path: t,
    enabled: !0,
    fixed: !1,
    fixedOrder: r,
    shotIds: [],
    includeVideoAudio: e.kind === "video" && e.includeVideoAudio,
    durationSeconds: e.kind === "image" ? null : e.durationSeconds,
    audioDurationSeconds: null,
    fingerprint: ""
  };
}
function Un(e, t) {
  return t === "image" ? Promise.resolve(null) : new Promise((r) => {
    const o = document.createElement(t === "video" ? "video" : "audio"), a = URL.createObjectURL(e);
    let d = !1;
    const s = (c) => {
      d || (d = !0, o.onloadedmetadata = null, o.onerror = null, o.removeAttribute("src"), o.load(), URL.revokeObjectURL(a), r(c));
    };
    o.preload = "metadata", o.onloadedmetadata = () => s(Number.isFinite(o.duration) && o.duration > 0 ? Math.round(o.duration * 10) / 10 : null), o.onerror = () => s(null), o.src = a;
  });
}
const Bn = () => `asset_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`, Je = (e, t) => t === "zh" ? { image: "图片", video: "视频", audio: "音频" }[e] : e;
function qn({ language: e, assets: t, projectName: r, onClose: o, onImported: a, uploadFile: d }) {
  const [s, c] = C([]), [h, u] = C([]), [f, _] = C(!1), [p, l] = C(!1), I = it([]);
  I.current = s;
  const w = t.map((b) => b.alias), k = (b, T) => c((F) => F.map((M) => M.id === b ? { ...M, ...T } : M)), y = (b) => {
    if (!b.length || p) return;
    const T = [...w, ...I.current.map((M) => M.alias)], F = Hn(b, T, Bn);
    F.rejected.length && u((M) => [...M, ...F.rejected]), F.drafts.length && (c((M) => [...M, ...F.drafts]), F.drafts.forEach((M) => {
      Un(M.file, M.kind).then((W) => {
        W != null && c((Y) => Y.map((V) => V.id === M.id && V.kind === M.kind && V.durationSeconds === 2 ? { ...V, durationSeconds: W } : V));
      });
    }));
  }, P = s.filter((b) => b.status !== "imported").map((b) => b.alias), g = (b) => {
    if (b.status === "imported") return null;
    const T = Fn(b.alias, w, P);
    return T === "invalid" ? e === "zh" ? "别名为空、包含空白/花括号，或使用了保留后缀 .audio" : "Alias is empty, contains whitespace/braces, or uses reserved .audio" : T === "duplicate" ? e === "zh" ? "别名与素材库或本批次其他素材重复" : "Alias duplicates an existing or staged asset" : tn(b.file) !== b.kind ? e === "zh" ? "文件扩展名与所选类型不匹配" : "The extension does not match the selected kind" : b.kind !== "image" && (b.durationSeconds == null || b.durationSeconds <= 0) ? e === "zh" ? "视频或音频时长必须大于 0" : "Video/audio duration must be greater than 0" : null;
  }, A = async () => {
    const T = I.current.filter((Y) => Y.status === "pending" || Y.status === "error");
    if (!T.length) return;
    if (T.some(g)) {
      window.alert(e === "zh" ? "请先修正列表中标红的项目。" : "Fix the highlighted rows before importing.");
      return;
    }
    l(!0);
    const F = Math.max(0, ...t.map((Y) => Y.fixedOrder)) + 1;
    let M = 0;
    const W = async () => {
      for (; M < T.length; ) {
        const Y = M++, V = T[Y];
        k(V.id, { status: "uploading", error: "" });
        try {
          const ue = await d(r, V.kind, V.file);
          a([On(V, ue, F + Y)]), k(V.id, { status: "imported", error: "" });
        } catch (ue) {
          k(V.id, { status: "error", error: String(ue) });
        }
      }
    };
    await Promise.all(Array.from({ length: Math.min(2, T.length) }, W)), l(!1);
  }, H = s.filter((b) => b.status === "imported").length, D = s.filter((b) => b.status === "error").length, N = s.length - H;
  return /* @__PURE__ */ n("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ n("section", { class: "td-asset-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": e === "zh" ? "批量导入素材" : "Batch import assets", children: [
    /* @__PURE__ */ n("header", { class: "td-batch-header", children: [
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ n("h2", { children: e === "zh" ? "批量导入素材" : "Batch import assets" }),
        /* @__PURE__ */ n("p", { children: e === "zh" ? "可混合选择图片、视频和音频；确认列表后再写入素材库。" : "Select images, videos, and audio together; review before uploading." })
      ] }),
      /* @__PURE__ */ n("button", { disabled: p, "aria-label": e === "zh" ? "关闭" : "Close", onClick: o, children: "×" })
    ] }),
    /* @__PURE__ */ n("label", { class: `td-asset-dropzone ${f ? "dragging" : ""}`, onDragEnter: (b) => {
      b.preventDefault(), _(!0);
    }, onDragOver: (b) => b.preventDefault(), onDragLeave: (b) => {
      b.currentTarget === b.target && _(!1);
    }, onDrop: (b) => {
      var T;
      b.preventDefault(), _(!1), y(Array.from(((T = b.dataTransfer) == null ? void 0 : T.files) ?? []));
    }, children: [
      /* @__PURE__ */ n("strong", { children: e === "zh" ? "拖拽素材到这里，或点击选择多个文件" : "Drop media here, or click to select multiple files" }),
      /* @__PURE__ */ n("span", { children: e === "zh" ? "支持图片、视频、音频混合导入" : "Mixed image, video, and audio selection is supported" }),
      /* @__PURE__ */ n("input", { type: "file", multiple: !0, accept: "image/*,video/*,audio/*", disabled: p, onChange: (b) => {
        y(Array.from(b.currentTarget.files ?? [])), b.currentTarget.value = "";
      } })
    ] }),
    h.length > 0 && /* @__PURE__ */ n("div", { class: "td-asset-batch-warning", children: [
      /* @__PURE__ */ n("span", { children: e === "zh" ? `已跳过 ${h.length} 个不支持的文件：${h.join("、")}` : `Skipped ${h.length} unsupported files: ${h.join(", ")}` }),
      /* @__PURE__ */ n("button", { onClick: () => u([]), children: "×" })
    ] }),
    /* @__PURE__ */ n("div", { class: "td-asset-batch-summary", children: [
      /* @__PURE__ */ n("span", { children: e === "zh" ? `共 ${s.length} 项 · 已导入 ${H} · 待处理 ${N}${D ? ` · 失败 ${D}` : ""}` : `${s.length} items · ${H} imported · ${N} pending${D ? ` · ${D} failed` : ""}` }),
      /* @__PURE__ */ n("button", { disabled: p || !s.length, onClick: () => c([]), children: e === "zh" ? "清空列表" : "Clear list" })
    ] }),
    /* @__PURE__ */ n("div", { class: "td-asset-batch-list", children: [
      /* @__PURE__ */ n("div", { class: "td-asset-batch-row td-asset-batch-head", children: [
        /* @__PURE__ */ n("span", { children: e === "zh" ? "状态 / 文件" : "Status / File" }),
        /* @__PURE__ */ n("span", { children: e === "zh" ? "别名" : "Alias" }),
        /* @__PURE__ */ n("span", { children: e === "zh" ? "类型" : "Kind" }),
        /* @__PURE__ */ n("span", { children: e === "zh" ? "时长" : "Duration" }),
        /* @__PURE__ */ n("span", { children: e === "zh" ? "视频伴音" : "Video audio" }),
        /* @__PURE__ */ n("span", { children: e === "zh" ? "操作" : "Action" })
      ] }),
      !s.length && /* @__PURE__ */ n("div", { class: "td-asset-batch-empty", children: e === "zh" ? "尚未选择素材" : "No media selected" }),
      s.map((b) => {
        const T = g(b), F = p || b.status === "imported" || b.status === "uploading";
        return /* @__PURE__ */ n("div", { class: `td-asset-batch-row ${T || b.status === "error" ? "invalid" : ""} ${b.status === "imported" ? "imported" : ""}`, children: [
          /* @__PURE__ */ n("div", { class: "td-asset-batch-file", children: [
            /* @__PURE__ */ n("strong", { title: b.file.name, children: b.file.name }),
            /* @__PURE__ */ n("small", { children: [
              (b.file.size / 1024 / 1024).toFixed(1),
              " MB · ",
              b.status === "pending" ? e === "zh" ? "待导入" : "Pending" : b.status === "uploading" ? e === "zh" ? "上传中" : "Uploading" : b.status === "imported" ? e === "zh" ? "已完成" : "Imported" : e === "zh" ? "失败" : "Failed"
            ] }),
            (T || b.error) && /* @__PURE__ */ n("em", { title: T || b.error, children: T || b.error })
          ] }),
          /* @__PURE__ */ n("input", { disabled: F, value: b.alias, onInput: (M) => k(b.id, { alias: M.currentTarget.value, status: "pending", error: "" }) }),
          /* @__PURE__ */ n("select", { disabled: F, value: b.kind, onChange: (M) => {
            const W = M.currentTarget.value;
            k(b.id, { kind: W, durationSeconds: W === "image" ? null : b.durationSeconds ?? 2, includeVideoAudio: W === "video" && b.includeVideoAudio, status: "pending", error: "" });
          }, children: [
            /* @__PURE__ */ n("option", { value: "image", children: Je("image", e) }),
            /* @__PURE__ */ n("option", { value: "video", children: Je("video", e) }),
            /* @__PURE__ */ n("option", { value: "audio", children: Je("audio", e) })
          ] }),
          /* @__PURE__ */ n("label", { class: "td-asset-batch-duration", children: [
            /* @__PURE__ */ n("input", { type: "number", min: "0.1", step: "0.1", disabled: F || b.kind === "image", value: b.durationSeconds ?? "", onInput: (M) => k(b.id, { durationSeconds: M.currentTarget.value ? Number(M.currentTarget.value) : null, status: "pending", error: "" }) }),
            /* @__PURE__ */ n("span", { children: b.kind === "image" ? "—" : e === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ n("label", { class: "td-asset-batch-audio", children: [
            /* @__PURE__ */ n("input", { type: "checkbox", disabled: F || b.kind !== "video", checked: b.kind === "video" && b.includeVideoAudio, onChange: (M) => k(b.id, { includeVideoAudio: M.currentTarget.checked }) }),
            /* @__PURE__ */ n("span", { children: b.kind === "video" ? b.includeVideoAudio ? e === "zh" ? "开" : "ON" : e === "zh" ? "关" : "OFF" : "—" })
          ] }),
          /* @__PURE__ */ n("button", { class: "danger", disabled: F, onClick: () => c((M) => M.filter((W) => W.id !== b.id)), children: e === "zh" ? "移除" : "Remove" })
        ] }, b.id);
      })
    ] }),
    /* @__PURE__ */ n("footer", { children: [
      /* @__PURE__ */ n("button", { disabled: p, onClick: o, children: e === "zh" ? "关闭" : "Close" }),
      /* @__PURE__ */ n("button", { class: "primary", disabled: p || !s.some((b) => b.status === "pending" || b.status === "error"), onClick: () => void A(), children: p ? e === "zh" ? "正在导入…" : "Importing…" : D ? e === "zh" ? "重试失败项" : "Retry failed" : e === "zh" ? "开始导入" : "Start import" })
    ] })
  ] }) });
}
const nn = String.raw`\{\{ref:([^{}]+)}}`;
function Rt() {
  return new RegExp(nn, "g");
}
function rn(e, t) {
  const r = /* @__PURE__ */ new Map();
  for (const o of e.assets)
    o.enabled && o.path.trim() && (!o.shotIds.length || o.shotIds.includes(t.id)) && !t.disabledAssetIds.includes(o.id) && r.set(o.alias, o);
  return r;
}
function on(e, t, r) {
  const o = r.trim(), a = o.endsWith(".audio"), d = a ? o.slice(0, -6) : o, s = rn(e, t).get(d);
  return s ? !a || s.kind === "video" && s.includeVideoAudio : !1;
}
function Tt(e, t) {
  const r = e.shots.filter((o) => o.enabled);
  return r.length > 0 && r.every((o) => on(e, o, t));
}
function sn(e, t) {
  const r = [], o = rn(e, t), a = [e.promptPrefix, t.prompt, e.promptSuffix].filter(Boolean).join(`
`), d = [...a.matchAll(Rt())].map((g) => g[1].trim()), s = [], c = /* @__PURE__ */ new Set(), h = (g) => {
    c.has(g.id) || (c.add(g.id), s.push(g));
  };
  [...o.values()].filter((g) => g.fixed).sort((g, A) => g.fixedOrder - A.fixedOrder || g.alias.localeCompare(A.alias)).forEach(h);
  for (const g of d) {
    const A = g.endsWith(".audio") ? g.slice(0, -6) : g, H = o.get(A);
    if (!H) {
      r.push(`未找到或已禁用素材：${g}`);
      continue;
    }
    g.endsWith(".audio") && (H.kind !== "video" || !H.includeVideoAudio) && r.push(`视频伴音未启用：${g}`), h(H);
  }
  const u = s.filter((g) => g.kind === "image"), f = s.filter((g) => g.kind === "video"), _ = f.filter((g) => g.includeVideoAudio), p = s.filter((g) => g.kind === "audio"), l = _.length + p.length, I = u.length + f.length + p.length;
  u.length > 9 && r.push(`参考图 ${u.length}/9，超出 H3 上限`), f.length > 3 && r.push(`参考视频 ${f.length}/3，超出 H3 上限`), l > 3 && r.push(`有效音频 ${l}/3，超出 H3 总上限`), I > 12 && r.push(`混合文件 ${I}/12，超出 H3 上限`), l && !u.length && !f.length && r.push("音频参考不能单独使用");
  const w = f.filter((g) => typeof g.durationSeconds == "number");
  for (const g of f) (g.durationSeconds == null || g.durationSeconds < 2 || g.durationSeconds > 15) && r.push(`视频 ${g.alias} 的时长必须为 2–15 秒`);
  w.reduce((g, A) => g + (A.durationSeconds ?? 0), 0) > 15 && r.push("参考视频总时长超过 15 秒");
  const k = [..._.map((g) => g.audioDurationSeconds ?? g.durationSeconds), ...p.map((g) => g.durationSeconds)];
  k.some((g) => g == null || g < 2 || g > 15) && r.push("每路有效音频时长必须为 2–15 秒"), k.reduce((g, A) => g + (A ?? 0), 0) > 15 && r.push("有效音频总时长超过 15 秒");
  const y = /* @__PURE__ */ new Map();
  u.forEach((g, A) => y.set(g.alias, `<Picture ${A + 1}>`)), f.forEach((g, A) => y.set(g.alias, `<Video ${A + 1}>`)), _.forEach((g, A) => y.set(`${g.alias}.audio`, `<Audio ${A + 1}>`)), p.forEach((g, A) => y.set(g.alias, `<Audio ${_.length + A + 1}>`));
  const S = a.replace(Rt(), (g, A) => y.get(A.trim()) ?? g), P = [...y.entries()].map(([g, A]) => ({ label: A, alias: g, kind: A.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: S, errors: r, slots: P, mixedFiles: I, audioCount: l };
}
function Kn(e) {
  var a, d, s, c, h, u;
  const t = [];
  (d = (a = e.project) == null ? void 0 : a.name) != null && d.trim() || t.push("Project name 不能为空"), (c = (s = e.project) == null ? void 0 : s.runId) != null && c.trim() || t.push("Run ID 不能为空"), (!Array.isArray(e.shots) || !e.shots.some((f) => f.enabled)) && t.push("至少需要一个启用分镜");
  const r = /* @__PURE__ */ new Set();
  for (const f of e.shots ?? [])
    (!((h = f.id) != null && h.trim()) || r.has(f.id)) && t.push(`分镜 ID 为空或重复：${f.id || "(空)"}`), r.add(f.id), f.durationSeconds > 0 || t.push(`分镜 ${f.id} 的时长必须大于 0`);
  const o = /* @__PURE__ */ new Set();
  for (const f of e.assets ?? []) {
    const _ = (u = f.alias) == null ? void 0 : u.toLocaleLowerCase();
    (!f.alias || /[\s{}]/.test(f.alias) || f.alias.endsWith(".audio") || o.has(_)) && t.push(`素材别名无效或重复：${f.alias || "(空)"}`), o.add(_), f.enabled && !f.path && t.push(`素材 ${f.alias} 尚未选择文件`);
  }
  for (const f of e.shots.filter((_) => _.enabled)) t.push(...sn(e, f).errors.map((_) => `${f.title}: ${_}`));
  return [...new Set(t)];
}
function Vn(e, t) {
  const r = [], o = new RegExp(nn, "g");
  let a = 0;
  for (const d of e.matchAll(o)) {
    const s = d.index ?? 0;
    s > a && r.push({ text: e.slice(a, s), reference: !1 }), r.push({ text: d[0], reference: !0, valid: t(d[1]) }), a = s + d[0].length;
  }
  return a < e.length && r.push({ text: e.slice(a), reference: !1 }), r;
}
function Ye({ value: e, rows: t, onInput: r, isReferenceValid: o }) {
  const a = it(null), d = Vn(e, o), s = (c) => {
    a.current && (a.current.scrollTop = c.currentTarget.scrollTop, a.current.scrollLeft = c.currentTarget.scrollLeft);
  };
  return /* @__PURE__ */ n("span", { class: "td-highlight-textarea", children: [
    /* @__PURE__ */ n("pre", { ref: a, class: "td-highlight-backdrop", "aria-hidden": "true", children: [
      d.map((c, h) => c.reference ? /* @__PURE__ */ n("mark", { class: c.valid ? "valid" : "invalid", children: c.text }, h) : c.text),
      e.endsWith(`
`) && " "
    ] }),
    /* @__PURE__ */ n("textarea", { class: "td-highlight-input", rows: t, value: e, onInput: r, onScroll: s })
  ] });
}
const Wn = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", postprocess: "后处理", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", postprocess: "Post-process", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function ge(e, t) {
  return Wn[e][t];
}
function pe(e) {
  return (Array.isArray(e.results) && e.results.length ? e.results : e.path ? [{ path: e.path, bytes: e.bytes, modifiedAt: e.modifiedAt, stage: e.stage, sourcePath: e.sourcePath, completedAt: e.completedAt }] : []).filter((r) => typeof r.path == "string" && r.path.trim().length > 0).sort((r, o) => (o.modifiedAt ?? 0) - (r.modifiedAt ?? 0));
}
function an(e, t) {
  const r = /_video_(\d+)/i.exec(e.replace(/\\/g, "/"));
  return r ? Number(r[1]) : t;
}
function Gn(e) {
  return e.stage !== "second_pass";
}
function Oe({ src: e, alt: t }) {
  const r = it(null), [o, a] = C(!1);
  return ke(() => {
    const d = r.current;
    if (!d) return;
    if (!("IntersectionObserver" in window)) {
      a(!0);
      return;
    }
    const s = new IntersectionObserver((c) => {
      a(c.some((h) => h.isIntersecting));
    }, { rootMargin: "160px" });
    return s.observe(d), () => s.disconnect();
  }, []), /* @__PURE__ */ n("div", { class: "td-result-thumb", ref: r, children: o ? /* @__PURE__ */ n("video", { src: e, "aria-label": t, muted: !0, playsInline: !0, preload: "metadata", onLoadedMetadata: (d) => {
    const s = d.currentTarget;
    Number.isFinite(s.duration) && s.duration > 0.02 && (s.currentTime = Math.min(0.25, Math.max(0, s.duration - 0.05)));
  } }) : /* @__PURE__ */ n("span", { children: "…" }) });
}
function dn(e, t) {
  const r = e.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!r || r.startsWith("/") || /^[A-Za-z]:\//.test(r)) return null;
  const o = r.split("/").filter(Boolean), a = o.pop();
  if (!a || o.some((s) => s === "..")) return null;
  const d = new URLSearchParams({ filename: a, type: t });
  return o.length && d.set("subfolder", o.join("/")), `/view?${d.toString()}`;
}
function Jn(e) {
  return dn(e, "input");
}
function we(e) {
  return e ? e.url && /^https:\/\//i.test(e.url) ? e.url : dn(e.path, "output") : null;
}
function se(e) {
  return (e.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "").split(/[?#]/, 1)[0];
}
function Et({ asset: e, compact: t = !1 }) {
  const r = Jn(e.path), o = `td-media-preview ${t ? "compact" : ""}`;
  return r ? e.kind === "image" ? /* @__PURE__ */ n("div", { class: o, children: /* @__PURE__ */ n("img", { src: r, alt: e.alias, loading: "lazy" }) }) : e.kind === "video" ? /* @__PURE__ */ n("div", { class: o, children: /* @__PURE__ */ n("video", { src: r, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ n("div", { class: o, children: /* @__PURE__ */ n("audio", { src: r, controls: !0, preload: "metadata" }) }) : e.path ? /* @__PURE__ */ n("div", { class: `${o} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ n("div", { class: `${o} empty`, children: "尚未选择素材 / No media selected" });
}
function ln(e) {
  let t = 0;
  return e.shots.map((r, o) => {
    const a = {
      key: `${o}:${r.id}`,
      shot: r,
      sourceIndex: o,
      activeIndex: r.enabled ? t : -1
    };
    return r.enabled && (t += 1), a;
  });
}
function Yn(e, t, r) {
  return e.filter((o) => o.shot.enabled && t[o.key]).map((o) => ({
    shotId: o.shot.id,
    activeIndex: o.activeIndex,
    path: r[o.key] ?? ""
  }));
}
function Qn(e, t, r) {
  const o = {};
  return e.forEach((a) => {
    const d = a.sourceIndex + 1;
    o[a.key] = a.shot.enabled && d >= t && d <= r;
  }), o;
}
function Xn(e, t) {
  return e === "second_pass" ? t === "zh" ? "二采" : "2nd pass" : e === "first_pass" ? t === "zh" ? "一采" : "1st pass" : t === "zh" ? "旧结果" : "Legacy";
}
function Zn({ plan: e, language: t, adapter: r, context: o }) {
  const a = Se(() => ln(e), [e]), [d, s] = C({}), [c, h] = C({}), [u, f] = C(null), [_, p] = C(0), l = r.unavailableReason("secondPass", o);
  ke(() => {
    let w = !1;
    const k = {};
    return a.forEach((y) => {
      k[y.key] = { loading: !0, response: { found: !1, results: [] } };
    }), s(k), a.forEach((y) => {
      r.fetchShotResults(o, e, y.shot, y.activeIndex).then((S) => {
        w || s((P) => ({ ...P, [y.key]: { loading: !1, response: S } }));
      }).catch((S) => {
        w || s((P) => ({ ...P, [y.key]: { loading: !1, response: { found: !1, results: [], error: String(S) } } }));
      });
    }), () => {
      w = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((w) => w.id).join("|"), _, r.id, o.settings.apiKey, o.settings.taskMappings]);
  const I = async (w, k) => {
    if (!l) {
      h((y) => ({ ...y, [k]: { state: "queued" } }));
      try {
        await r.runSecondPass(o, {
          plan: e,
          shotId: w,
          sourcePath: k,
          requestId: `td2_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`
        }), h((y) => ({ ...y, [k]: { state: "done" } })), p((y) => y + 1);
      } catch (y) {
        h((S) => ({ ...S, [k]: { state: "error", message: String(y instanceof Error ? y.message : y) } }));
      }
    }
  };
  return /* @__PURE__ */ n("section", { class: "td-postprocess td-second-pass-panel", children: [
    /* @__PURE__ */ n("div", { class: "td-post-header", children: [
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ n("h2", { children: t === "zh" ? "单独二采" : "Standalone second pass" }),
        /* @__PURE__ */ n("p", { children: t === "zh" ? "从满意的一采抽卡直接执行二采，不重跑一采，也不启动 Impact 循环。" : "Refine a selected first-pass result without rerunning the first pass or the Impact loop." })
      ] }),
      /* @__PURE__ */ n("div", { class: "td-post-actions", children: /* @__PURE__ */ n("button", { onClick: () => p((w) => w + 1), children: [
        "↻ ",
        t === "zh" ? "刷新结果" : "Refresh"
      ] }) })
    ] }),
    l && /* @__PURE__ */ n("div", { class: "td-post-warning", children: l }),
    /* @__PURE__ */ n("div", { class: "td-post-shot-list", children: a.map((w) => {
      const k = d[w.key], y = pe((k == null ? void 0 : k.response) ?? { results: [] });
      return /* @__PURE__ */ n("article", { class: "td-post-shot", children: [
        /* @__PURE__ */ n("header", { children: [
          /* @__PURE__ */ n("span", { children: [
            /* @__PURE__ */ n("strong", { children: w.shot.id }),
            /* @__PURE__ */ n("em", { children: w.shot.title })
          ] }),
          /* @__PURE__ */ n("span", { children: [
            w.shot.durationSeconds,
            "s"
          ] })
        ] }),
        !w.shot.enabled && /* @__PURE__ */ n("div", { class: "td-post-shot-disabled-note", children: t === "zh" ? "镜头已禁用，但仍可对历史一采结果进行后处理。" : "This shot is disabled, but its historical first-pass results remain available." }),
        k != null && k.loading ? /* @__PURE__ */ n("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading results…" }) : k != null && k.response.error ? /* @__PURE__ */ n("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : y.length ? /* @__PURE__ */ n("div", { class: "td-post-result-list", children: y.map((S) => {
          const P = we(S), g = c[S.path], A = Gn(S);
          return /* @__PURE__ */ n("div", { class: "td-second-pass-result", children: [
            /* @__PURE__ */ n("button", { class: "td-post-result-choice", onClick: () => P && f({ path: P, title: `${w.shot.id} · ${w.shot.title}` }), children: [
              P ? /* @__PURE__ */ n(Oe, { src: P, alt: se(S.path) }) : /* @__PURE__ */ n("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ n("span", { children: [
                /* @__PURE__ */ n("strong", { children: [
                  Xn(S.stage, t),
                  (S.stage === "legacy_unknown" || !S.stage) && /* @__PURE__ */ n("em", { children: t === "zh" ? "兼容" : "Compatible" })
                ] }),
                /* @__PURE__ */ n("span", { title: S.path, children: se(S.path) }),
                /* @__PURE__ */ n("small", { children: S.bytes ? `${(S.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ n("button", { class: "primary td-second-pass-run", disabled: !!l || !A || (g == null ? void 0 : g.state) === "queued", title: l ?? "", onClick: () => void I(w.shot.id, S.path), children: A ? (g == null ? void 0 : g.state) === "queued" ? t === "zh" ? "排队/执行中…" : "Queued/running…" : (g == null ? void 0 : g.state) === "done" ? t === "zh" ? "二采完成" : "Completed" : t === "zh" ? "进行二采" : "Run second pass" : t === "zh" ? "已是二采" : "Already refined" }),
            (g == null ? void 0 : g.state) === "error" && /* @__PURE__ */ n("div", { class: "td-second-pass-error", children: g.message })
          ] }, S.path);
        }) }) : /* @__PURE__ */ n("div", { class: "td-post-shot-empty", children: t === "zh" ? "没有可用的一采结果" : "No first-pass result available" })
      ] }, w.key);
    }) }),
    u && /* @__PURE__ */ n("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => f(null), children: /* @__PURE__ */ n("section", { role: "dialog", "aria-modal": "true", onClick: (w) => w.stopPropagation(), children: [
      /* @__PURE__ */ n("header", { children: [
        /* @__PURE__ */ n("strong", { children: u.title }),
        /* @__PURE__ */ n("button", { onClick: () => f(null), children: "×" })
      ] }),
      /* @__PURE__ */ n("video", { src: u.path, controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ n("p", { children: se(u.path) })
    ] }) })
  ] });
}
function er({ plan: e, language: t, adapter: r, context: o }) {
  const [a, d] = C("merge");
  return /* @__PURE__ */ n("section", { class: "td-postprocess-shell", children: [
    /* @__PURE__ */ n("div", { class: "td-post-mode-tabs", role: "tablist", children: [
      /* @__PURE__ */ n("button", { class: a === "merge" ? "active" : "", role: "tab", "aria-selected": a === "merge", onClick: () => d("merge"), children: t === "zh" ? "合并视频" : "Merge videos" }),
      /* @__PURE__ */ n("button", { class: a === "second-pass" ? "active" : "", role: "tab", "aria-selected": a === "second-pass", onClick: () => d("second-pass"), children: t === "zh" ? "单独二采" : "Standalone second pass" })
    ] }),
    a === "merge" ? /* @__PURE__ */ n(tr, { plan: e, language: t, adapter: r, context: o }) : /* @__PURE__ */ n(Zn, { plan: e, language: t, adapter: r, context: o })
  ] });
}
function tr({ plan: e, language: t, adapter: r, context: o }) {
  const a = Se(() => ln(e), [e]), [d, s] = C({}), [c, h] = C({}), [u, f] = C({}), [_, p] = C(null), [l, I] = C(!1), [w, k] = C(""), [y, S] = C(""), [P, g] = C({ found: !1, results: [] }), [A, H] = C(!1), [D, N] = C(!1), [b, T] = C(""), [F, M] = C(0), [W, Y] = C("1"), [V, ue] = C(String(a.length || 1)), he = a.filter((v) => v.shot.enabled), me = he.length > 0 && he.every((v) => c[v.key]), ie = Yn(a, c, u), ae = ie.filter((v) => !v.path), Q = a.some((v) => {
    var R;
    return c[v.key] && ((R = d[v.key]) == null ? void 0 : R.loading);
  }), Z = a.reduce(
    (v, R) => v + (R.shot.enabled && c[R.key] ? R.shot.durationSeconds : 0),
    0
  ), X = Se(() => pe(P), [P]), de = X.find((v) => v.path === b) ?? X[0], fe = r.unavailableReason("mergeVideos", o);
  ke(() => {
    let v = !1;
    const R = {}, q = {};
    return a.forEach((U) => {
      R[U.key] = U.shot.enabled, q[U.key] = { loading: !0, response: { found: !1, results: [] } };
    }), h((U) => {
      const $ = {};
      return a.forEach((E) => {
        $[E.key] = E.shot.enabled ? U[E.key] ?? R[E.key] : !1;
      }), $;
    }), s(q), k(""), a.forEach((U) => {
      r.fetchShotResults(o, e, U.shot, U.activeIndex).then(($) => {
        if (v) return;
        const E = pe($);
        s((G) => ({ ...G, [U.key]: { loading: !1, response: $ } })), f((G) => {
          var ne;
          return {
            ...G,
            [U.key]: E.some((re) => re.path === G[U.key]) ? G[U.key] : ((ne = E[0]) == null ? void 0 : ne.path) ?? ""
          };
        });
      }).catch(($) => {
        v || s((E) => ({
          ...E,
          [U.key]: { loading: !1, response: { found: !1, results: [], error: String($) } }
        }));
      });
    }), () => {
      v = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((v) => `${v.id}:${v.enabled}`).join("|"), F, r.id, o.settings.apiKey, o.settings.taskMappings]), ke(() => {
    let v = !1;
    return H(!0), r.fetchMergedResults(o, e).then((R) => {
      if (v) return;
      const q = pe(R);
      g(R), T((U) => {
        var $;
        return q.some((E) => E.path === U) ? U : (($ = q[0]) == null ? void 0 : $.path) ?? "";
      });
    }).catch((R) => {
      v || g({ found: !1, results: [], error: String(R) });
    }).finally(() => {
      v || H(!1);
    }), () => {
      v = !0;
    };
  }, [e.project.name, e.project.runId, F, r.id, o.settings.apiKey, o.settings.taskMappings]);
  const qe = () => {
    const v = !me;
    h((R) => {
      const q = { ...R };
      return he.forEach((U) => {
        q[U.key] = v;
      }), q;
    });
  }, Ae = () => {
    const v = Number(W), R = Number(V);
    if (!Number.isInteger(v) || !Number.isInteger(R) || v < 1 || R < v || R > a.length) {
      window.alert(t === "zh" ? `请输入有效范围：1 ≤ m ≤ n ≤ ${a.length}` : `Enter a valid range: 1 ≤ m ≤ n ≤ ${a.length}`);
      return;
    }
    h(Qn(a, v, R));
  }, Ke = async () => {
    if (!ie.length) {
      window.alert(t === "zh" ? "请至少选择一个镜头" : "Select at least one shot.");
      return;
    }
    if (ae.length) {
      window.alert(t === "zh" ? `以下已选镜头没有可用结果：${ae.map((v) => v.shotId).join("、")}` : `Selected shots without a result: ${ae.map((v) => v.shotId).join(", ")}`);
      return;
    }
    I(!0), k("");
    try {
      const v = await r.mergeVideos(o, {
        projectName: e.project.name,
        runId: e.project.runId,
        selections: ie,
        requestId: `tdm_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`
      });
      v ? (g((R) => ({ found: !0, results: [v, ...pe(R).filter((q) => q.path !== v.path)] })), T(v.path)) : M((R) => R + 1);
    } catch (v) {
      k(String(v instanceof Error ? v.message : v));
    } finally {
      I(!1);
    }
  }, xe = async () => {
    N(!0), S("");
    try {
      await r.openResultFolder(o, e);
    } catch (v) {
      S(String(v instanceof Error ? v.message : v));
    } finally {
      N(!1);
    }
  }, _e = we(de);
  return /* @__PURE__ */ n("section", { class: "td-postprocess", children: [
    /* @__PURE__ */ n("div", { class: "td-post-header", children: [
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ n("h2", { children: t === "zh" ? "合并视频" : "Merge videos" }),
        /* @__PURE__ */ n("p", { children: t === "zh" ? "从每个镜头选择一个结果，按当前分镜顺序进行无损合并。" : "Choose one result per shot and merge them losslessly in storyboard order." })
      ] }),
      /* @__PURE__ */ n("div", { class: "td-post-actions", children: [
        r.capabilities.openResultFolder && /* @__PURE__ */ n("button", { disabled: D, onClick: xe, children: [
          "📁 ",
          D ? t === "zh" ? "正在打开…" : "Opening…" : t === "zh" ? "打开结果文件夹" : "Open results folder"
        ] }),
        /* @__PURE__ */ n("button", { onClick: () => M((v) => v + 1), children: [
          "↻ ",
          t === "zh" ? "刷新结果" : "Refresh"
        ] }),
        /* @__PURE__ */ n("button", { onClick: qe, children: me ? t === "zh" ? "全部取消" : "Clear all" : t === "zh" ? "一键全选" : "Select all" })
      ] })
    ] }),
    y && /* @__PURE__ */ n("div", { class: "td-post-error", children: [
      t === "zh" ? "打开结果文件夹失败：" : "Unable to open results folder: ",
      y
    ] }),
    /* @__PURE__ */ n("div", { class: "td-post-summary", children: [
      /* @__PURE__ */ n("span", { children: t === "zh" ? `已选择 ${ie.length}/${he.length} 个启用镜头` : `${ie.length}/${he.length} enabled shots selected` }),
      /* @__PURE__ */ n("span", { children: t === "zh" ? `预计时长 ${Z.toFixed(1)} 秒` : `Estimated duration ${Z.toFixed(1)} sec` }),
      /* @__PURE__ */ n("div", { class: "td-post-range", role: "group", "aria-label": t === "zh" ? "合并视频范围" : "Merge video range", children: [
        /* @__PURE__ */ n("span", { children: t === "zh" ? "范围" : "Range" }),
        /* @__PURE__ */ n("input", { type: "number", min: "1", max: a.length, step: "1", value: W, "aria-label": t === "zh" ? "起始镜头 m" : "Start shot m", onInput: (v) => Y(v.currentTarget.value) }),
        /* @__PURE__ */ n("span", { children: "—" }),
        /* @__PURE__ */ n("input", { type: "number", min: "1", max: a.length, step: "1", value: V, "aria-label": t === "zh" ? "结束镜头 n" : "End shot n", onInput: (v) => ue(v.currentTarget.value) }),
        /* @__PURE__ */ n("button", { disabled: !a.length, onClick: Ae, children: t === "zh" ? "确认范围" : "Apply range" })
      ] }),
      /* @__PURE__ */ n("button", { class: "primary", disabled: l || Q || !ie.length || !!ae.length || !!fe, title: fe ?? "", onClick: Ke, children: l ? t === "zh" ? "正在合并…" : "Merging…" : t === "zh" ? "合并所选视频" : "Merge selected videos" })
    ] }),
    fe && /* @__PURE__ */ n("div", { class: "td-post-warning", children: fe }),
    w && /* @__PURE__ */ n("div", { class: "td-post-error", children: [
      t === "zh" ? "合并失败：" : "Merge failed: ",
      w
    ] }),
    ae.length > 0 && /* @__PURE__ */ n("div", { class: "td-post-warning", children: t === "zh" ? "已选镜头中存在尚未生成视频的镜头。" : "Some selected shots do not have generated videos yet." }),
    /* @__PURE__ */ n("div", { class: "td-post-shot-list", children: a.map((v) => {
      const R = d[v.key], q = pe((R == null ? void 0 : R.response) ?? { results: [] }), U = !!c[v.key];
      return /* @__PURE__ */ n("article", { class: `td-post-shot ${U ? "selected" : ""} ${v.shot.enabled ? "" : "disabled"}`, children: [
        /* @__PURE__ */ n("header", { children: [
          /* @__PURE__ */ n("label", { children: [
            /* @__PURE__ */ n("input", { type: "checkbox", checked: U, disabled: !v.shot.enabled, onChange: ($) => h((E) => ({ ...E, [v.key]: $.currentTarget.checked })) }),
            /* @__PURE__ */ n("span", { children: [
              /* @__PURE__ */ n("strong", { children: v.shot.id }),
              /* @__PURE__ */ n("em", { children: v.shot.title })
            ] })
          ] }),
          /* @__PURE__ */ n("span", { children: [
            v.shot.durationSeconds,
            "s"
          ] })
        ] }),
        !v.shot.enabled && /* @__PURE__ */ n("div", { class: "td-post-shot-disabled-note", children: t === "zh" ? "该镜头当前已禁用：历史结果可以预览，但不能参加合并。" : "This shot is disabled: historical results can be previewed but cannot be merged." }),
        R != null && R.loading ? /* @__PURE__ */ n("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading generated results…" }) : R != null && R.response.error ? /* @__PURE__ */ n("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : q.length ? /* @__PURE__ */ n("div", { class: "td-post-result-list", children: q.map(($, E) => {
          const G = we($), ne = u[v.key] === $.path, re = an($.path, q.length - E);
          return /* @__PURE__ */ n("div", { class: `td-post-result ${ne ? "selected" : ""}`, children: [
            /* @__PURE__ */ n("button", { class: "td-post-result-choice", role: "radio", "aria-checked": ne, onClick: () => f((ee) => ({ ...ee, [v.key]: $.path })), children: [
              G ? /* @__PURE__ */ n(Oe, { src: G, alt: `${v.shot.title} ${t === "zh" ? "结果" : "result"} ${re}` }) : /* @__PURE__ */ n("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ n("span", { children: [
                /* @__PURE__ */ n("strong", { children: [
                  t === "zh" ? `结果 ${re}` : `Result ${re}`,
                  E === 0 && /* @__PURE__ */ n("em", { children: t === "zh" ? "最新" : "Latest" })
                ] }),
                /* @__PURE__ */ n("span", { title: $.path, children: se($.path) }),
                /* @__PURE__ */ n("small", { children: $.bytes ? `${($.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ n("button", { class: "td-post-result-play", disabled: !G, title: t === "zh" ? "播放预览" : "Play preview", onClick: () => G && p({ path: G, title: `${v.shot.id} · ${v.shot.title}` }), children: "▶" })
          ] }, $.path);
        }) }) : /* @__PURE__ */ n("div", { class: "td-post-shot-empty", children: t === "zh" ? "未找到这个镜头的生成结果" : "No generated result found for this shot" })
      ] }, v.key);
    }) }),
    /* @__PURE__ */ n("section", { class: "td-post-merged", children: [
      /* @__PURE__ */ n("header", { children: /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ n("h2", { children: t === "zh" ? "合并结果" : "Merged results" }),
        /* @__PURE__ */ n("span", { class: `td-result-state ${X.length ? "found" : ""}`, children: A ? t === "zh" ? "查询中" : "Checking" : t === "zh" ? `${X.length} 个结果` : `${X.length} results` })
      ] }) }),
      A ? /* @__PURE__ */ n("div", { class: "td-result-empty", children: t === "zh" ? "正在查询合并结果…" : "Loading merged results…" }) : P.error ? /* @__PURE__ */ n("div", { class: "td-result-empty errors", children: t === "zh" ? "无法查询合并结果" : "Unable to query merged results" }) : de && _e ? /* @__PURE__ */ n("div", { class: "td-generated-results", children: [
        /* @__PURE__ */ n("div", { class: "td-generated-video", children: [
          /* @__PURE__ */ n("video", { src: _e, controls: !0, preload: "metadata", playsInline: !0 }, de.path),
          /* @__PURE__ */ n("div", { class: "td-generated-meta", title: de.path, children: de.path })
        ] }),
        /* @__PURE__ */ n("div", { class: "td-result-list", children: X.map((v, R) => {
          const q = we(v);
          return /* @__PURE__ */ n("button", { class: `td-result-item ${v.path === de.path ? "selected" : ""}`, onClick: () => T(v.path), children: [
            q ? /* @__PURE__ */ n(Oe, { src: q, alt: `${t === "zh" ? "合并结果" : "Merged result"} ${X.length - R}` }) : /* @__PURE__ */ n("div", { class: "td-result-thumb", children: "×" }),
            /* @__PURE__ */ n("span", { class: "td-result-item-copy", children: [
              /* @__PURE__ */ n("strong", { children: [
                t === "zh" ? `合并结果 ${X.length - R}` : `Merged result ${X.length - R}`,
                R === 0 && /* @__PURE__ */ n("em", { children: t === "zh" ? "最新" : "Latest" })
              ] }),
              /* @__PURE__ */ n("span", { children: se(v.path) }),
              /* @__PURE__ */ n("small", { children: v.bytes ? `${(v.bytes / 1024 / 1024).toFixed(1)} MB` : v.taskId ? `task ${v.taskId}` : "" })
            ] })
          ] }, v.path);
        }) })
      ] }) : /* @__PURE__ */ n("div", { class: "td-result-empty", children: t === "zh" ? "还没有合并结果" : "No merged result yet" })
    ] }),
    _ && /* @__PURE__ */ n("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => p(null), children: /* @__PURE__ */ n("section", { role: "dialog", "aria-modal": "true", onClick: (v) => v.stopPropagation(), children: [
      /* @__PURE__ */ n("header", { children: [
        /* @__PURE__ */ n("strong", { children: _.title }),
        /* @__PURE__ */ n("button", { "aria-label": t === "zh" ? "关闭预览" : "Close preview", onClick: () => p(null), children: "×" })
      ] }),
      /* @__PURE__ */ n("video", { src: _.path, controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ n("p", { title: _.path, children: se(_.path) })
    ] }) })
  ] });
}
function nr(e) {
  const t = e.reduce((r, o) => {
    const a = /^shot_(\d+)$/i.exec(o.id.trim());
    return a ? Math.max(r, Number(a[1])) : r;
  }, 0);
  return Math.max(t, e.length) + 1;
}
function rr(e, t = 5) {
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
function Pt(e, t, r) {
  const o = nr(e), a = Array.from({ length: t }, (d, s) => rr(o + s, r));
  return [...e, ...a];
}
async function be(e) {
  const t = await e.json();
  if (!e.ok) throw new Error(t.error || t.message || `HTTP ${e.status}`);
  return t;
}
function or(e, t) {
  return new Error(`${e} adapter does not support ${t}`);
}
const at = {
  id: "local",
  label: "Local ComfyUI",
  displayLabel: (e) => e === "zh" ? "本地 ComfyUI" : "Local ComfyUI",
  matchesHostname: () => !1,
  assetBanner: () => null,
  capabilities: {
    uploadAsset: !0,
    queryShotResults: !0,
    queryMergedResults: !0,
    mergeVideos: !0,
    secondPass: !0,
    openResultFolder: !0
  },
  unavailableReason(e, t) {
    return this.capabilities[e] ? e === "secondPass" && !t.queueSecondPass ? "当前工作流缺少后处理单独二采支流" : null : `Local ComfyUI 不支持 ${e}`;
  },
  async uploadAsset(e, t, r, o) {
    const a = new FormData();
    a.append("projectName", t), a.append("kind", r), a.append("file", o);
    const d = await fetch("/theodore-director/v1/assets", { method: "POST", body: a }), s = await be(d);
    if (!s.path) throw new Error("上传响应缺少 path");
    return s.path;
  },
  async fetchShotResults(e, t, r, o) {
    const a = new URLSearchParams({
      projectName: t.project.name,
      runId: t.project.runId,
      shotId: r.id,
      activeIndex: String(o)
    });
    return be(await fetch(`/theodore-director/v1/generated-video?${a.toString()}`));
  },
  async fetchMergedResults(e, t) {
    const r = new URLSearchParams({ projectName: t.project.name, runId: t.project.runId });
    return be(await fetch(`/theodore-director/v1/postprocess/merged-videos?${r.toString()}`));
  },
  async mergeVideos(e, t) {
    const r = await fetch("/theodore-director/v1/postprocess/merge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t)
    });
    await be(r);
  },
  async runSecondPass(e, t) {
    if (!e.queueSecondPass) throw new Error(this.unavailableReason("secondPass", e) ?? "单独二采不可用");
    await e.queueSecondPass(t);
  },
  async openResultFolder(e, t) {
    const r = await fetch("/theodore-director/v1/postprocess/open-folder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectName: t.project.name, runId: t.project.runId })
    });
    await be(r);
  }
};
function sr({ language: e, settings: t, onChange: r, rememberSecret: o, onRememberSecretChange: a, onClearSavedSecret: d, onProjectSettingChange: s }) {
  return /* @__PURE__ */ n(Ie, { children: [
    /* @__PURE__ */ n("label", { children: [
      "RunningHub API Key",
      /* @__PURE__ */ n("input", { type: "password", autocomplete: "off", value: t.apiKey, placeholder: e === "zh" ? "默认仅保存在当前页面内存" : "Kept only in page memory by default", onInput: (c) => r({ ...t, apiKey: c.currentTarget.value }) })
    ] }),
    /* @__PURE__ */ n("div", { class: "td-runtime-key-controls", children: [
      /* @__PURE__ */ n("label", { children: [
        /* @__PURE__ */ n("input", { type: "checkbox", checked: o, onChange: (c) => a(c.currentTarget.checked) }),
        /* @__PURE__ */ n("span", { children: e === "zh" ? "在此设备记住 API Key" : "Remember API Key on this device" })
      ] }),
      /* @__PURE__ */ n("button", { type: "button", onClick: d, children: e === "zh" ? "清除已保存 Key" : "Clear saved Key" }),
      /* @__PURE__ */ n("small", { children: e === "zh" ? "默认不保存；公共电脑不建议启用。Key 仅写入当前浏览器站点存储，不进入工作流或导出文件。" : "Off by default; avoid on shared computers. The key is stored only in this browser and never enters the workflow or exports." })
    ] }),
    /* @__PURE__ */ n("label", { children: [
      e === "zh" ? "任务映射（每行一项）" : "Task mappings (one per line)",
      /* @__PURE__ */ n("textarea", { rows: 5, value: t.taskMappings, placeholder: `完整工作流 taskId
shot_003=taskId
merged=taskId`, onInput: (c) => {
        const h = c.currentTarget.value;
        r({ ...t, taskMappings: h }), s("runningHubTaskMappings", h);
      } }),
      /* @__PURE__ */ n("small", { children: e === "zh" ? "单独 taskId 按启用镜头顺序归属；也可显式指定镜头或合并任务。任务映射属于项目数据，会随工作流保存、导入和导出。" : "A bare taskId follows enabled-shot order; shot and merged tasks can be explicit. Task mappings are project data and follow workflow save, import, and export." })
    ] })
  ] });
}
const ir = /* @__PURE__ */ new Set(["mp4", "mov", "mkv", "webm", "avi"]);
function cn(e) {
  const t = e.toLowerCase();
  return t === "runninghub.cn" || t.endsWith(".runninghub.cn");
}
function Mt(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.split(/\r?\n|,/).map((o) => o.trim()).filter(Boolean).forEach((o) => {
    const a = o.indexOf("="), d = a >= 0 ? o.slice(0, a).trim() : "workflow", s = (a >= 0 ? o.slice(a + 1) : o).trim();
    if (!s || !/^[A-Za-z0-9_-]+$/.test(s)) return;
    const c = d.toLowerCase() === "merged" ? "merged" : d || "workflow", h = `${c}\0${s}`;
    r.has(h) || (r.add(h), t.push({ target: c, taskId: s }));
  }), t;
}
function pn(e, t = window.location) {
  const r = cn(t.hostname) ? t.origin : "https://www.runninghub.cn";
  return new URL(e, r).toString();
}
async function jt(e, t) {
  const r = await fetch(pn("/openapi/v2/query"), {
    method: "POST",
    headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" },
    body: JSON.stringify({ taskId: t })
  });
  return be(r);
}
function Nt(e, t) {
  return { path: t.url, url: t.url, provider: "runninghub", taskId: e, stage: "legacy_unknown" };
}
function Lt(e) {
  return (e.results ?? []).filter((t) => {
    const r = t.outputType.toLowerCase().replace(/^\./, "");
    return ir.has(r) && /^https:\/\//i.test(t.url);
  });
}
function ar(e, t, r) {
  const o = t.shots.filter((s) => s.enabled), a = o.findIndex((s) => s.id === r.id);
  if (a < 0 || !o.length) return [];
  const d = e.filter((s) => decodeURIComponent(s.url).includes(r.id));
  return d.length ? d : o.length === 1 ? e : e.length >= o.length ? e.filter((s, c) => c % o.length === a) : [];
}
const dr = {
  id: "runninghub",
  label: "RunningHub",
  displayLabel: () => "RunningHub",
  matchesHostname: cn,
  SettingsPanel: sr,
  assetBanner(e, t) {
    const r = this.unavailableReason("uploadAsset", e);
    return {
      ready: !r,
      message: r ?? (t === "zh" ? "RunningHub 上传已启用；素材路径将保存官方 fileName。" : "RunningHub upload is ready; the official fileName will be stored.")
    };
  },
  capabilities: { uploadAsset: !0, queryShotResults: !0, queryMergedResults: !0, mergeVideos: !0, secondPass: !0, openResultFolder: !1 },
  unavailableReason(e, t) {
    return this.capabilities[e] ? ["uploadAsset", "queryShotResults", "queryMergedResults"].includes(e) && !t.settings.apiKey.trim() ? "请先填写 RunningHub API Key" : e === "mergeVideos" && !t.queueMerge ? "当前工作流缺少 RunningHub 合并支流" : e === "secondPass" && !t.queueSecondPass ? "当前工作流缺少后处理单独二采支流" : null : e === "openResultFolder" ? "RunningHub 无法打开本地结果文件夹" : `RunningHub 不支持 ${e}`;
  },
  async uploadAsset(e, t, r, o) {
    var h;
    const a = this.unavailableReason("uploadAsset", e);
    if (a) throw new Error(a);
    const d = new FormData();
    d.append("file", o);
    const s = await fetch(pn("/openapi/v2/media/upload/binary"), { method: "POST", headers: { Authorization: `Bearer ${e.settings.apiKey.trim()}` }, body: d }), c = await be(s);
    if (c.code !== 0 || !((h = c.data) != null && h.fileName)) throw new Error(c.message || "RunningHub 上传响应缺少 fileName");
    return c.data.fileName;
  },
  async fetchShotResults(e, t, r) {
    const o = e.settings.apiKey.trim();
    if (!o) return { found: !1, results: [], error: this.unavailableReason("queryShotResults", e) ?? void 0 };
    const a = Mt(e.settings.taskMappings).filter((h) => h.target === "workflow" || h.target === r.id);
    if (!a.length) return { found: !1, results: [], error: `请添加工作流 taskId，或填写 ${r.id}=taskId` };
    const d = [], s = [];
    for (const h of a) {
      const u = await jt(o, h.taskId), f = String(u.status ?? "").toUpperCase();
      if (f && f !== "SUCCESS") {
        ["FAILED", "ERROR", "CANCELED", "CANCELLED"].includes(f) && s.push(u.errorMessage || `${h.taskId}: ${f}`);
        continue;
      }
      const _ = Lt(u), p = h.target === r.id ? _ : ar(_, t, r);
      d.push(...p.map((l) => Nt(h.taskId, l)));
    }
    const c = [...new Map(d.map((h) => [h.url || h.path, h])).values()];
    return { found: c.length > 0, count: c.length, results: c, error: c.length ? void 0 : s.join("；") || void 0 };
  },
  async fetchMergedResults(e) {
    const t = e.settings.apiKey.trim();
    if (!t) return { found: !1, results: [], error: this.unavailableReason("queryMergedResults", e) ?? void 0 };
    const r = Mt(e.settings.taskMappings).filter((d) => d.target === "merged");
    if (!r.length) return { found: !1, results: [], error: "请添加 merged=taskId 合并任务映射" };
    const o = [];
    for (const d of r) {
      const s = await jt(t, d.taskId);
      o.push(...Lt(s).map((c) => Nt(d.taskId, c)));
    }
    const a = [...new Map(o.map((d) => [d.url || d.path, d])).values()];
    return { found: a.length > 0, count: a.length, results: a };
  },
  async mergeVideos(e, t) {
    const r = this.unavailableReason("mergeVideos", e);
    if (r) throw new Error(r);
    return e.queueMerge(t);
  },
  async runSecondPass(e, t) {
    const r = this.unavailableReason("secondPass", e);
    if (r) throw new Error(r);
    await e.queueSecondPass(t);
  },
  async openResultFolder() {
    throw or("runninghub", "openResultFolder");
  }
}, dt = [dr, at];
function Dt(e, t = typeof window > "u" ? "localhost" : window.location.hostname) {
  return e.mode !== "auto" ? lr(e.mode) : dt.find((r) => r.id !== "local" && r.matchesHostname(t)) ?? at;
}
function lr(e) {
  return dt.find((t) => t.id === e) ?? at;
}
function cr(e, t = {}) {
  return { settings: e, ...t };
}
const lt = "theodore-director.runninghub-api-key";
function ct() {
  try {
    return typeof window > "u" ? null : window.localStorage;
  } catch {
    return null;
  }
}
function pr(e = ct()) {
  var t;
  try {
    return ((t = e == null ? void 0 : e.getItem(lt)) == null ? void 0 : t.trim()) || null;
  } catch {
    return null;
  }
}
function ur(e, t = ct()) {
  const r = e.trim();
  if (!r || !t) return !1;
  try {
    return t.setItem(lt, r), !0;
  } catch {
    return !1;
  }
}
function Qe(e = ct()) {
  if (!e) return !1;
  try {
    return e.removeItem(lt), !0;
  } catch {
    return !1;
  }
}
const un = (e) => `${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, Ne = (e) => JSON.parse(JSON.stringify(e)), hr = { image: "图片", video: "视频", audio: "音频" };
function Ft(e) {
  var r, o;
  const t = Ne(e);
  return t.schemaVersion = 4, (r = t.project.id) != null && r.trim() || (t.project.id = un("project")), (o = t.project).runningHubTaskMappings ?? (o.runningHubTaskMappings = ""), t.shots = t.shots.map((a) => ({
    ...a,
    latentRelay: a.latentRelay ?? !0,
    secondSampling: a.secondSampling ?? !0
  })), t;
}
function mr(e) {
  return e.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function fr(e) {
  const t = un(e);
  return { id: t, alias: t, kind: e, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: e === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function gr(e) {
  var d;
  if ((d = navigator.clipboard) != null && d.writeText)
    try {
      await navigator.clipboard.writeText(e);
      return;
    } catch {
    }
  const t = document.activeElement, r = t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement ? { start: t.selectionStart, end: t.selectionEnd, direction: t.selectionDirection } : null, o = document.createElement("textarea");
  o.value = e, o.style.position = "fixed", o.style.opacity = "0", document.body.append(o), o.select();
  const a = document.execCommand("copy");
  if (o.remove(), t instanceof HTMLElement && t.focus({ preventScroll: !0 }), r && (t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement) && t.setSelectionRange(r.start, r.end, r.direction ?? void 0), !a) throw new Error("浏览器拒绝写入剪贴板");
}
function br({ initial: e, onSave: t, onClose: r, supportsSecondSampling: o, queueSecondPass: a, queueMerge: d }) {
  const [s, c] = C(() => Ft(e)), [h] = C(() => pr()), [u, f] = C("shots"), [_, p] = C(0), [l, I] = C(() => navigator.language.startsWith("zh") ? "zh" : "en"), [w, k] = C({}), [y, S] = C(!0), [P, g] = C(!1), [A, H] = C(0), [D, N] = C({ found: !1, results: [] }), [b, T] = C(""), [F, M] = C(!1), [W, Y] = C(""), [V, ue] = C(!0), [he, me] = C(!1), [ie, ae] = C(!1), [Q, Z] = C([]), [X, de] = C("5"), [fe, qe] = C("1"), [Ae, Ke] = C("5");
  ke(() => {
    const i = (m) => {
      m.target instanceof Element && m.target.closest(".td-shot-media-name") && m.preventDefault();
    };
    return document.addEventListener("mousedown", i), () => document.removeEventListener("mousedown", i);
  }, []);
  const [xe, _e] = C(() => ({ mode: "auto", apiKey: h ?? "", taskMappings: e.project.runningHubTaskMappings ?? "" })), [v, R] = C(() => ({ mode: "auto", apiKey: h ?? "", taskMappings: e.project.runningHubTaskMappings ?? "" })), [q, U] = C(h !== null), $ = s.shots[Math.min(_, s.shots.length - 1)], E = Se(() => $ ? sn(s, $) : null, [s, $]), G = $ != null && $.enabled ? s.shots.slice(0, _).filter((i) => i.enabled).length : -1, ne = s.shots.length > 0 && s.shots.every((i) => i.secondSampling), re = Q.length > 0 && Q.every((i) => i.enabled), ee = Se(() => pe(D), [D]), le = ee.find((i) => i.path === b) ?? ee[0], pt = we(le), ze = Dt(xe), ut = Dt(v), Re = cr(xe, { queueMerge: d, queueSecondPass: a }), ht = ut.SettingsPanel, Ve = ze.assetBanner(Re, l), mt = (i, m, x) => ze.uploadAsset(Re, i, m, x), j = (i) => c((m) => {
    const x = Ne(m);
    return i(x), x;
  }), ft = (i, m) => j((x) => {
    const z = i + m;
    z < 0 || z >= x.shots.length || ([x.shots[i], x.shots[z]] = [x.shots[z], x.shots[i]], p(z));
  }), hn = (i) => j((m) => {
    m.shots.length <= 1 || (m.shots.splice(i, 1), p((x) => x > i ? x - 1 : x === i ? Math.min(i, m.shots.length - 1) : x));
  }), mn = () => {
    Z(Ne(s.shots)), me(!0);
  }, fn = () => {
    const i = Number(X);
    if (!Number.isFinite(i) || i <= 0) {
      window.alert(l === "zh" ? "统一时长必须大于 0 秒" : "The shared duration must be greater than 0 seconds.");
      return;
    }
    Z((m) => m.map((x) => ({ ...x, durationSeconds: i })));
  }, gn = () => {
    const i = Number(fe), m = Number(Ae);
    if (!Number.isInteger(i) || i < 1 || i > 100) {
      window.alert(l === "zh" ? "新增镜头数量必须是 1–100 的整数" : "The shot count must be an integer from 1 to 100.");
      return;
    }
    if (!Number.isFinite(m) || m <= 0) {
      window.alert(l === "zh" ? "新增镜头时长必须大于 0 秒" : "The new-shot duration must be greater than 0 seconds.");
      return;
    }
    Z((x) => Pt(x, i, m));
  }, bn = () => {
    const i = !re;
    Z((m) => m.map((x) => ({ ...x, enabled: i })));
  }, vn = () => {
    if (Q.some((i) => !Number.isFinite(i.durationSeconds) || i.durationSeconds <= 0)) {
      window.alert(l === "zh" ? "每个镜头的时长都必须大于 0 秒" : "Every shot duration must be greater than 0 seconds.");
      return;
    }
    j((i) => {
      i.shots = Ne(Q);
    }), p((i) => Math.min(i, Q.length - 1)), me(!1);
  }, xn = () => {
    const i = URL.createObjectURL(new Blob([JSON.stringify(s, null, 2)], { type: "application/json" })), m = document.createElement("a");
    m.href = i, m.download = `${mr(s.project.name)}.director.json`, m.click(), URL.revokeObjectURL(i);
  }, _n = () => {
    const i = Kn(s);
    if (i.length) {
      window.alert(`计划未通过校验：

${i.join(`
`)}`);
      return;
    }
    t(s);
  }, yn = () => {
    const i = { ...v };
    j((m) => {
      m.project.runningHubTaskMappings = i.taskMappings;
    }), _e(i), q && i.apiKey.trim() ? ur(i.apiKey) || window.alert(l === "zh" ? "浏览器拒绝本地保存 API Key；本次会话仍可继续使用。" : "The browser blocked local API Key storage; it remains available for this session.") : Qe();
  }, wn = () => {
    Qe(), U(!1), _e((i) => ({ ...i, apiKey: "" })), R((i) => ({ ...i, apiKey: "" }));
  }, kn = (i) => {
    const m = Ft(i);
    c(m), _e((x) => ({ ...x, taskMappings: m.project.runningHubTaskMappings ?? "" })), R((x) => ({ ...x, taskMappings: m.project.runningHubTaskMappings ?? "" })), p(0);
  };
  return ke(() => {
    let i = !1;
    return $ ? (M(!0), ze.fetchShotResults(Re, s, $, G).then((m) => {
      if (i) return;
      const x = pe(m);
      N(m), T((z) => {
        var L;
        return x.some((J) => J.path === z) ? z : ((L = x[0]) == null ? void 0 : L.path) ?? "";
      });
    }).catch((m) => {
      i || (N({ found: !1, results: [], error: String(m) }), T(""));
    }).finally(() => {
      i || M(!1);
    }), () => {
      i = !0;
    }) : (N({ found: !1, results: [] }), T(""), M(!1), () => {
      i = !0;
    });
  }, [s.project.name, s.project.runId, $ == null ? void 0 : $.id, $ == null ? void 0 : $.enabled, G, A, ze.id, xe.apiKey, xe.taskMappings]), /* @__PURE__ */ n("div", { class: "td-shell", children: [
    /* @__PURE__ */ n("header", { children: [
      /* @__PURE__ */ n("h1", { children: ge(l, "title") }),
      /* @__PURE__ */ n("div", { class: "td-actions", children: [
        /* @__PURE__ */ n("button", { onClick: xn, children: "导出 / Export" }),
        /* @__PURE__ */ n("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ n("input", { type: "file", accept: "application/json,.json", onChange: async (i) => {
            var x;
            const m = (x = i.currentTarget.files) == null ? void 0 : x[0];
            if (m)
              try {
                const z = JSON.parse(await m.text());
                if (!z.project || !Array.isArray(z.shots) || !Array.isArray(z.assets)) throw new Error("不是有效的 Theodore Director Plan");
                kn(z);
              } catch (z) {
                window.alert(String(z));
              }
          } })
        ] }),
        /* @__PURE__ */ n("button", { onClick: () => I(l === "zh" ? "en" : "zh"), children: l === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ n("button", { class: "primary", onClick: _n, children: ge(l, "save") }),
        /* @__PURE__ */ n("button", { onClick: r, children: ge(l, "close") })
      ] })
    ] }),
    /* @__PURE__ */ n("nav", { children: ["shots", "assets", "settings", "postprocess"].map((i) => /* @__PURE__ */ n("button", { class: u === i ? "active" : "", onClick: () => f(i), children: ge(l, i) })) }),
    /* @__PURE__ */ n("main", { children: [
      u === "shots" && /* @__PURE__ */ n("div", { class: "td-shots", children: [
        /* @__PURE__ */ n("aside", { class: "td-shot-sidebar", children: [
          o && /* @__PURE__ */ n("button", { class: `wide td-bulk-toggle ${ne ? "active" : ""}`, onClick: () => j((i) => {
            const m = !i.shots.every((x) => x.secondSampling);
            i.shots.forEach((x) => {
              x.secondSampling = m;
            });
          }), children: l === "zh" ? `全部二次采样：${ne ? "开" : "关"}` : `Second sampling for all: ${ne ? "ON" : "OFF"}` }),
          /* @__PURE__ */ n("div", { class: "td-shot-list", children: s.shots.map((i, m) => /* @__PURE__ */ n("div", { class: `td-shot-card ${m === _ ? "selected" : ""}`, onClick: () => p(m), children: [
            /* @__PURE__ */ n("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ n("button", { class: "td-shot-delete", disabled: s.shots.length <= 1, title: l === "zh" ? s.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : s.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": l === "zh" ? "删除镜头" : "Delete shot", onClick: (x) => {
              x.stopPropagation(), hn(m);
            }, children: "×" }) }),
            /* @__PURE__ */ n("strong", { children: [
              m + 1,
              ". ",
              i.title
            ] }),
            /* @__PURE__ */ n("span", { children: [
              i.durationSeconds,
              "s · ",
              i.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ n("div", { class: "td-shot-move-actions", children: [
              /* @__PURE__ */ n("button", { title: l === "zh" ? "上移镜头" : "Move shot up", onClick: (x) => {
                x.stopPropagation(), ft(m, -1);
              }, children: "↑" }),
              /* @__PURE__ */ n("button", { title: l === "zh" ? "下移镜头" : "Move shot down", onClick: (x) => {
                x.stopPropagation(), ft(m, 1);
              }, children: "↓" })
            ] })
          ] }, i.id)) }),
          /* @__PURE__ */ n("button", { class: "wide", onClick: () => j((i) => {
            const m = i.shots.length;
            i.shots = Pt(i.shots, 1, 5), p(m);
          }), children: [
            "＋ ",
            ge(l, "addShot")
          ] }),
          /* @__PURE__ */ n("div", { class: "td-shot-batch-entry", children: /* @__PURE__ */ n("button", { class: "wide", onClick: mn, children: l === "zh" ? "批量处理镜头" : "Batch edit shots" }) })
        ] }),
        $ && /* @__PURE__ */ n("section", { class: "td-form", children: [
          /* @__PURE__ */ n("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ n("label", { children: [
              "ID",
              /* @__PURE__ */ n("input", { value: $.id, onInput: (i) => j((m) => {
                m.shots[_].id = i.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ n("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ n("input", { value: $.title, onInput: (i) => j((m) => {
                m.shots[_].title = i.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ n("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ n("input", { type: "number", min: "0.1", step: "0.1", value: $.durationSeconds, onInput: (i) => j((m) => {
                m.shots[_].durationSeconds = Number(i.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ n("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ n("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: $.enabled, onChange: (i) => j((m) => {
                  m.shots[_].enabled = i.currentTarget.checked;
                }) }),
                /* @__PURE__ */ n("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ n("label", { class: "td-shot-enabled", title: G === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: $.latentRelay, onChange: (i) => j((m) => {
                  m.shots[_].latentRelay = i.currentTarget.checked;
                }) }),
                /* @__PURE__ */ n("span", { children: [
                  "latent接力 / Relay",
                  G === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              o && /* @__PURE__ */ n("label", { class: "td-shot-enabled", title: "开启时执行 RTX 超分和第二次 H3 采样，关闭时直接使用第一采画面", children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: $.secondSampling, onChange: (i) => j((m) => {
                  m.shots[_].secondSampling = i.currentTarget.checked;
                }) }),
                /* @__PURE__ */ n("span", { children: "二次采样 / 2nd pass" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ n("label", { children: [
            /* @__PURE__ */ n("span", { class: "td-field-label", children: [
              "提示词（使用 ",
              /* @__PURE__ */ n("code", { children: "{{ref:别名}}" }),
              "）"
            ] }),
            /* @__PURE__ */ n(Ye, { rows: 10, value: $.prompt, isReferenceValid: (i) => on(s, $, i), onInput: (i) => j((m) => {
              m.shots[_].prompt = i.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ n("label", { children: [
            /* @__PURE__ */ n("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ n("textarea", { rows: 3, value: $.negativePrompt, onInput: (i) => j((m) => {
              m.shots[_].negativePrompt = i.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ n("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ n("legend", { children: "本镜头素材 / Shot media" }),
            /* @__PURE__ */ n("label", { class: "td-shot-media-display-toggle", children: [
              /* @__PURE__ */ n("input", { type: "checkbox", checked: V, onChange: (i) => ue(i.currentTarget.checked) }),
              /* @__PURE__ */ n("span", { children: l === "zh" ? "显示别名" : "Show aliases" })
            ] }),
            s.assets.map((i) => {
              const m = !$.disabledAssetIds.includes(i.id), x = V ? i.alias : se(i.path) || i.alias, z = `{{ref:${i.alias}}}`;
              return /* @__PURE__ */ n("div", { class: `td-shot-media-card ${m ? "" : "disabled"}`, children: [
                /* @__PURE__ */ n("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ n(Et, { asset: i, compact: !0 }),
                  /* @__PURE__ */ n("span", { class: "td-shot-media-kind", children: l === "zh" ? hr[i.kind] : i.kind }),
                  /* @__PURE__ */ n("label", { class: "td-shot-media-toggle", title: m ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ n("input", { type: "checkbox", checked: m, onChange: (L) => j((J) => {
                    const te = J.shots[_].disabledAssetIds;
                    J.shots[_].disabledAssetIds = L.currentTarget.checked ? te.filter((ye) => ye !== i.id) : [.../* @__PURE__ */ new Set([...te, i.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ n("button", { class: `td-shot-media-name ${W === i.id ? "copied" : ""}`, title: `${x}
${l === "zh" ? "点击复制" : "Click to copy"} ${z}`, onClick: async () => {
                  try {
                    await gr(z), Y(i.id), window.setTimeout(() => Y((L) => L === i.id ? "" : L), 1400);
                  } catch (L) {
                    window.alert(`${l === "zh" ? "复制失败" : "Copy failed"}: ${String(L)}`);
                  }
                }, children: [
                  /* @__PURE__ */ n("span", { children: x }),
                  W === i.id && /* @__PURE__ */ n("em", { children: l === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, i.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ n("aside", { class: "td-preview", children: [
          /* @__PURE__ */ n("details", { open: y, onToggle: (i) => S(i.currentTarget.open), children: [
            /* @__PURE__ */ n("summary", { children: [
              /* @__PURE__ */ n("strong", { children: ge(l, "preview") }),
              /* @__PURE__ */ n("span", { class: "td-summary-counts", children: [
                "Picture ",
                (E == null ? void 0 : E.slots.filter((i) => i.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (E == null ? void 0 : E.slots.filter((i) => i.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (E == null ? void 0 : E.audioCount) ?? 0,
                "/3 · Files ",
                (E == null ? void 0 : E.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ n("div", { class: "td-preview-body", children: [
              E != null && E.errors.length ? /* @__PURE__ */ n("ul", { class: "errors", children: E.errors.map((i) => /* @__PURE__ */ n("li", { children: i })) }) : /* @__PURE__ */ n("p", { class: "ok", children: ge(l, "noErrors") }),
              /* @__PURE__ */ n("ol", { children: E == null ? void 0 : E.slots.map((i) => /* @__PURE__ */ n("li", { children: [
                /* @__PURE__ */ n("code", { children: i.label }),
                " ← ",
                i.alias
              ] })) }),
              /* @__PURE__ */ n("pre", { children: E == null ? void 0 : E.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ n("details", { open: P, onToggle: (i) => g(i.currentTarget.open), children: [
            /* @__PURE__ */ n("summary", { children: [
              /* @__PURE__ */ n("strong", { children: l === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ n("span", { class: `td-result-state ${ee.length ? "found" : ""}`, children: F ? l === "zh" ? "查询中" : "Checking" : ee.length ? l === "zh" ? `${ee.length} 个结果` : `${ee.length} results` : l === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ n("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ n("div", { class: "td-result-actions", children: /* @__PURE__ */ n("button", { onClick: () => H((i) => i + 1), children: [
                "↻ ",
                l === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              F ? /* @__PURE__ */ n("div", { class: "td-result-empty", children: l === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : D.error ? /* @__PURE__ */ n("div", { class: "td-result-empty errors", children: D.error }) : le && pt ? /* @__PURE__ */ n("div", { class: "td-generated-results", children: [
                /* @__PURE__ */ n("div", { class: "td-generated-video", children: [
                  /* @__PURE__ */ n("video", { src: pt, controls: !0, preload: "metadata", playsInline: !0 }, le.path),
                  /* @__PURE__ */ n("div", { class: "td-generated-meta", title: le.path, children: [
                    le.path,
                    le.bytes ? ` · ${(le.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                  ] })
                ] }),
                /* @__PURE__ */ n("div", { class: "td-result-list", "aria-label": l === "zh" ? "全部生成结果" : "All generated results", children: ee.map((i, m) => {
                  const x = we(i), z = an(i.path, ee.length - m), L = i.modifiedAt ? new Date(i.modifiedAt * 1e3).toLocaleString(l === "zh" ? "zh-CN" : "en-US") : "";
                  return /* @__PURE__ */ n("button", { class: `td-result-item ${i.path === le.path ? "selected" : ""}`, onClick: () => T(i.path), children: [
                    x ? /* @__PURE__ */ n(Oe, { src: x, alt: `${l === "zh" ? "结果" : "Result"} ${z}` }) : /* @__PURE__ */ n("div", { class: "td-result-thumb", children: /* @__PURE__ */ n("span", { children: "×" }) }),
                    /* @__PURE__ */ n("span", { class: "td-result-item-copy", children: [
                      /* @__PURE__ */ n("strong", { children: [
                        l === "zh" ? `结果 ${z}` : `Result ${z}`,
                        m === 0 && /* @__PURE__ */ n("em", { children: l === "zh" ? "最新" : "Latest" })
                      ] }),
                      /* @__PURE__ */ n("span", { title: i.path, children: se(i.path) }),
                      /* @__PURE__ */ n("small", { children: [i.bytes ? `${(i.bytes / 1024 / 1024).toFixed(1)} MB` : "", L, i.taskId ? `task ${i.taskId}` : ""].filter(Boolean).join(" · ") })
                    ] })
                  ] }, i.path);
                }) })
              ] }) : /* @__PURE__ */ n("div", { class: "td-result-empty", children: l === "zh" ? "未找到本段视频" : "No video found for this shot" })
            ] })
          ] })
        ] })
      ] }),
      u === "assets" && /* @__PURE__ */ n("div", { class: "td-assets", children: [
        Ve && /* @__PURE__ */ n("div", { class: `td-runtime-banner ${Ve.ready ? "ready" : ""}`, children: Ve.message }),
        /* @__PURE__ */ n("div", { class: "td-toolbar", children: [
          ["image", "video", "audio"].map((i) => /* @__PURE__ */ n("button", { onClick: () => j((m) => m.assets.push(fr(i))), children: [
            "＋ ",
            i
          ] })),
          /* @__PURE__ */ n("button", { class: "td-asset-batch-entry", onClick: () => ae(!0), children: [
            "⇧ ",
            l === "zh" ? "批量导入素材" : "Batch import assets"
          ] })
        ] }),
        s.assets.map((i, m) => /* @__PURE__ */ n("article", { children: /* @__PURE__ */ n("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ n("div", { class: "td-grid", children: [
              /* @__PURE__ */ n("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ n("input", { value: i.alias, onInput: (x) => j((z) => {
                  z.assets[m].alias = x.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ n("select", { value: i.kind, onChange: (x) => j((z) => {
                  z.assets[m].kind = x.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ n("option", { children: "image" }),
                  /* @__PURE__ */ n("option", { children: "video" }),
                  /* @__PURE__ */ n("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ n("input", { value: i.path, onInput: (x) => j((z) => {
                  z.assets[m].path = x.currentTarget.value;
                }) }),
                /* @__PURE__ */ n("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ n("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ n("input", { type: "file", accept: i.kind === "image" ? "image/*" : i.kind === "video" ? "video/*" : "audio/*", onChange: async (x) => {
                      var J;
                      const z = x.currentTarget, L = (J = z.files) == null ? void 0 : J[0];
                      if (L) {
                        k((te) => ({ ...te, [i.id]: L.name }));
                        try {
                          const te = await mt(s.project.name, i.kind, L);
                          j((ye) => {
                            const gt = ye.assets.find((Sn) => Sn.id === i.id);
                            gt && (gt.path = te);
                          });
                        } catch (te) {
                          window.alert(String(te));
                        } finally {
                          k((te) => {
                            const ye = { ...te };
                            return delete ye[i.id], ye;
                          }), z.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ n("span", { class: "td-file-name", title: w[i.id] || i.path, children: w[i.id] ? `${l === "zh" ? "上传中" : "Uploading"}: ${w[i.id]}` : se(i.path) || (l === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ n("input", { type: "number", min: "0", step: "0.1", value: i.durationSeconds ?? "", onInput: (x) => j((z) => {
                  z.assets[m].durationSeconds = x.currentTarget.value ? Number(x.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ n("input", { type: "number", value: i.fixedOrder, onInput: (x) => j((z) => {
                  z.assets[m].fixedOrder = Number(x.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ n("input", { value: i.shotIds.join(", "), onInput: (x) => j((z) => {
                  z.assets[m].shotIds = x.currentTarget.value.split(",").map((L) => L.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ n("div", { class: "td-flags", children: [
              /* @__PURE__ */ n("label", { children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: i.enabled, onChange: (x) => j((z) => {
                  z.assets[m].enabled = x.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ n("label", { children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: i.fixed, onChange: (x) => j((z) => {
                  z.assets[m].fixed = x.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              i.kind === "video" && /* @__PURE__ */ n("label", { children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: i.includeVideoAudio, onChange: (x) => j((z) => {
                  z.assets[m].includeVideoAudio = x.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ n("button", { class: "danger", onClick: () => j((x) => {
                x.assets.splice(m, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ n(Et, { asset: i })
        ] }) }, i.id))
      ] }),
      u === "settings" && /* @__PURE__ */ n("section", { class: "td-form settings", children: [
        /* @__PURE__ */ n("fieldset", { class: "td-runtime-settings", children: [
          /* @__PURE__ */ n("legend", { children: l === "zh" ? "运行环境" : "Runtime" }),
          /* @__PURE__ */ n("label", { children: [
            l === "zh" ? "适配器" : "Adapter",
            /* @__PURE__ */ n("select", { value: v.mode, onChange: (i) => R((m) => ({ ...m, mode: i.currentTarget.value })), children: [
              /* @__PURE__ */ n("option", { value: "auto", children: l === "zh" ? "自动检测" : "Auto detect" }),
              dt.map((i) => /* @__PURE__ */ n("option", { value: i.id, children: i.displayLabel(l) }, i.id))
            ] })
          ] }),
          /* @__PURE__ */ n("div", { class: "td-runtime-status", children: [
            l === "zh" ? "当前：" : "Active: ",
            /* @__PURE__ */ n("strong", { children: ut.displayLabel(l) })
          ] }),
          ht && /* @__PURE__ */ n(
            ht,
            {
              language: l,
              settings: v,
              onChange: R,
              rememberSecret: q,
              onRememberSecretChange: U,
              onClearSavedSecret: wn,
              onProjectSettingChange: (i, m) => {
                i === "runningHubTaskMappings" && j((x) => {
                  x.project.runningHubTaskMappings = m;
                });
              }
            }
          ),
          /* @__PURE__ */ n("div", { class: "td-runtime-apply", children: /* @__PURE__ */ n("button", { class: "primary", onClick: yn, children: l === "zh" ? "应用运行环境设置" : "Apply runtime settings" }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "Project name",
          /* @__PURE__ */ n("input", { value: s.project.name, onInput: (i) => j((m) => {
            m.project.name = i.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "Run ID",
          /* @__PURE__ */ n("input", { value: s.project.runId, onInput: (i) => j((m) => {
            m.project.runId = i.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "FPS",
          /* @__PURE__ */ n("input", { type: "number", value: s.defaults.fps, onInput: (i) => j((m) => {
            m.defaults.fps = Number(i.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "Base seed",
          /* @__PURE__ */ n("input", { type: "number", value: s.defaults.baseSeed, onInput: (i) => j((m) => {
            m.defaults.baseSeed = Number(i.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ n(Ye, { value: s.promptPrefix, isReferenceValid: (i) => Tt(s, i), onInput: (i) => j((m) => {
            m.promptPrefix = i.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ n(Ye, { value: s.promptSuffix, isReferenceValid: (i) => Tt(s, i), onInput: (i) => j((m) => {
            m.promptSuffix = i.currentTarget.value;
          }) })
        ] })
      ] }),
      u === "postprocess" && /* @__PURE__ */ n(er, { plan: s, language: l, adapter: ze, context: Re })
    ] }),
    he && /* @__PURE__ */ n("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ n("section", { class: "td-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": l === "zh" ? "批量处理镜头" : "Batch edit shots", children: [
      /* @__PURE__ */ n("header", { class: "td-batch-header", children: [
        /* @__PURE__ */ n("div", { children: [
          /* @__PURE__ */ n("h2", { children: l === "zh" ? "批量处理镜头" : "Batch edit shots" }),
          /* @__PURE__ */ n("p", { children: l === "zh" ? `当前共 ${Q.length} 个镜头` : `${Q.length} shots` })
        ] }),
        /* @__PURE__ */ n("button", { "aria-label": l === "zh" ? "关闭" : "Close", onClick: () => me(!1), children: "×" })
      ] }),
      /* @__PURE__ */ n("div", { class: "td-batch-tools", children: [
        /* @__PURE__ */ n("div", { children: [
          /* @__PURE__ */ n("label", { children: [
            l === "zh" ? "所有镜头时长" : "Duration for all shots",
            /* @__PURE__ */ n("span", { children: [
              /* @__PURE__ */ n("input", { type: "number", min: "0.1", step: "0.1", value: X, onInput: (i) => de(i.currentTarget.value) }),
              /* @__PURE__ */ n("em", { children: l === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ n("button", { onClick: fn, children: l === "zh" ? "一键设置所有时长" : "Set all durations" })
        ] }),
        /* @__PURE__ */ n("div", { children: [
          /* @__PURE__ */ n("label", { children: [
            l === "zh" ? "新增镜头数量" : "New shot count",
            /* @__PURE__ */ n("input", { type: "number", min: "1", max: "100", step: "1", value: fe, onInput: (i) => qe(i.currentTarget.value) })
          ] }),
          /* @__PURE__ */ n("label", { children: [
            l === "zh" ? "每个镜头时长" : "Duration per shot",
            /* @__PURE__ */ n("span", { children: [
              /* @__PURE__ */ n("input", { type: "number", min: "0.1", step: "0.1", value: Ae, onInput: (i) => Ke(i.currentTarget.value) }),
              /* @__PURE__ */ n("em", { children: l === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ n("button", { onClick: gn, children: l === "zh" ? "批量新增镜头" : "Add shots" })
        ] })
      ] }),
      /* @__PURE__ */ n("div", { class: "td-batch-global-actions", children: [
        /* @__PURE__ */ n("span", { children: l === "zh" ? `已启用 ${Q.filter((i) => i.enabled).length}/${Q.length} 个镜头` : `${Q.filter((i) => i.enabled).length}/${Q.length} shots enabled` }),
        /* @__PURE__ */ n("button", { class: re ? "active" : "", onClick: bn, children: re ? l === "zh" ? "全部禁用" : "Disable all" : l === "zh" ? "全部启用" : "Enable all" })
      ] }),
      /* @__PURE__ */ n("div", { class: "td-batch-table", children: [
        /* @__PURE__ */ n("div", { class: "td-batch-row td-batch-table-head", children: [
          /* @__PURE__ */ n("span", { children: "#" }),
          /* @__PURE__ */ n("span", { children: l === "zh" ? "镜头名" : "Shot name" }),
          /* @__PURE__ */ n("span", { children: l === "zh" ? "启用" : "Enabled" }),
          /* @__PURE__ */ n("span", { children: l === "zh" ? "具体时长" : "Duration" }),
          /* @__PURE__ */ n("span", { children: [
            "latent ",
            l === "zh" ? "接力" : "relay"
          ] })
        ] }),
        Q.map((i, m) => /* @__PURE__ */ n("div", { class: "td-batch-row", children: [
          /* @__PURE__ */ n("span", { children: m + 1 }),
          /* @__PURE__ */ n("input", { value: i.title, "aria-label": `${l === "zh" ? "镜头名" : "Shot name"} ${m + 1}`, onInput: (x) => Z((z) => z.map((L, J) => J === m ? { ...L, title: x.currentTarget.value } : L)) }),
          /* @__PURE__ */ n("label", { class: "td-batch-enabled", children: [
            /* @__PURE__ */ n("input", { type: "checkbox", checked: i.enabled, onChange: (x) => Z((z) => z.map((L, J) => J === m ? { ...L, enabled: x.currentTarget.checked } : L)) }),
            /* @__PURE__ */ n("span", { children: i.enabled ? l === "zh" ? "开" : "ON" : l === "zh" ? "关" : "OFF" })
          ] }),
          /* @__PURE__ */ n("label", { class: "td-batch-duration", children: [
            /* @__PURE__ */ n("input", { type: "number", min: "0.1", step: "0.1", value: i.durationSeconds, onInput: (x) => Z((z) => z.map((L, J) => J === m ? { ...L, durationSeconds: Number(x.currentTarget.value) } : L)) }),
            /* @__PURE__ */ n("span", { children: l === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ n("label", { class: "td-batch-relay", children: [
            /* @__PURE__ */ n("input", { type: "checkbox", checked: i.latentRelay, onChange: (x) => Z((z) => z.map((L, J) => J === m ? { ...L, latentRelay: x.currentTarget.checked } : L)) }),
            /* @__PURE__ */ n("span", { children: i.latentRelay ? l === "zh" ? "开" : "ON" : l === "zh" ? "关" : "OFF" })
          ] })
        ] }, i.id))
      ] }),
      /* @__PURE__ */ n("footer", { children: [
        /* @__PURE__ */ n("button", { onClick: () => me(!1), children: l === "zh" ? "取消" : "Cancel" }),
        /* @__PURE__ */ n("button", { class: "primary", onClick: vn, children: l === "zh" ? "应用更改" : "Apply changes" })
      ] })
    ] }) }),
    ie && /* @__PURE__ */ n(qn, { language: l, assets: s.assets, projectName: s.project.name, uploadFile: mt, onImported: (i) => j((m) => {
      m.assets.push(...i);
    }), onClose: () => ae(!1) })
  ] });
}
function vr(e, t, r = !1, o, a) {
  const d = document.getElementById("theodore-director-modal");
  if (d) {
    d.focus();
    return;
  }
  const s = document.createElement("div");
  s.id = "theodore-director-modal", s.className = "td-modal", s.tabIndex = -1, document.body.append(s);
  const c = (u) => {
    u.key === "Escape" && h();
  }, h = () => {
    document.removeEventListener("keydown", c), yt(null, s), s.remove();
  };
  document.addEventListener("keydown", c), yt(/* @__PURE__ */ n(br, { initial: e, onSave: (u) => {
    t(u), h();
  }, onClose: h, supportsSecondSampling: r, queueSecondPass: o, queueMerge: a }), s), s.focus();
}
const xr = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-shot-media{position:relative}.td-form label.td-shot-media-display-toggle{position:absolute;top:-17px;right:10px;z-index:3;display:flex;flex-direction:row;align-items:center;gap:6px;padding:6px 9px;border:1px solid var(--td-line);border-radius:6px;background:var(--td-panel);color:var(--td-text);cursor:pointer;white-space:nowrap}.td-form label.td-shot-media-display-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-display-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-highlight-textarea{position:relative;display:block;width:100%;min-width:0}.td-highlight-backdrop,.td-form textarea.td-highlight-input{box-sizing:border-box;width:100%;margin:0;padding:7px 9px;font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,monospace;font-size:inherit;line-height:1.45;letter-spacing:normal;-moz-tab-size:8;tab-size:8;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.td-highlight-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border:1px solid transparent;border-radius:6px;background:#222a35;color:var(--td-text);pointer-events:none}.td-form textarea.td-highlight-input{position:relative;z-index:1;display:block;background:transparent;color:transparent;caret-color:var(--td-text);-webkit-text-fill-color:transparent}.td-highlight-input::selection{background:#5898d46b}.td-highlight-backdrop mark{padding:0;border-radius:3px;color:inherit}.td-highlight-backdrop mark.valid{background:#1d6b50;color:#bfffe6}.td-highlight-backdrop mark.invalid{background:#7a2931;color:#ffd1d5;text-decoration:underline;text-decoration-color:#ff9aa4;text-underline-offset:2px}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-generated-results{display:flex;flex-direction:column;gap:12px}.td-result-list{display:flex;flex-direction:column;gap:7px;max-height:280px;overflow:auto;padding-right:3px}.td-shell button.td-result-item{display:grid;grid-template-columns:112px minmax(0,1fr);gap:10px;align-items:center;width:100%;padding:6px;text-align:left;background:#151b23}.td-shell button.td-result-item.selected{border-color:var(--td-accent);background:#1c2a2a}.td-result-thumb{width:112px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:5px;background:#090c10;color:var(--td-muted)}.td-result-thumb img,.td-result-thumb video{display:block;width:100%;height:100%;object-fit:contain}.td-result-item-copy{display:flex;min-width:0;flex-direction:column;gap:3px}.td-result-item-copy>strong{display:flex;align-items:center;gap:7px;color:var(--td-text)}.td-result-item-copy>strong em{padding:1px 6px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-result-item-copy>span,.td-result-item-copy>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-result-item-copy>small{font-size:10px}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-asset-batch-entry{margin-left:auto;border-color:#527061!important;background:#1b2c28!important;color:var(--td-accent)!important}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}.td-shot-sidebar{display:flex;flex-direction:column}.td-shot-list{flex:none}.td-shot-batch-entry{display:flex;align-items:flex-end;flex:1;min-height:90px;padding-top:14px}.td-shot-batch-entry button{border-color:#527061;background:#1b2c28;color:var(--td-accent)}.td-batch-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:28px;background:#05080dbd;box-sizing:border-box}.td-batch-panel{display:flex;flex-direction:column;width:min(1040px,100%);max-height:min(820px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-batch-header h2{font-size:18px;margin:0}.td-batch-header p{margin:3px 0 0;color:var(--td-muted)}.td-batch-header>button{font-size:20px;line-height:1;padding:5px 9px}.td-batch-tools{display:grid;grid-template-columns:1fr 1.4fr;gap:12px;padding:14px 18px;border-bottom:1px solid var(--td-line);background:#151b23}.td-batch-tools>div{display:flex;align-items:end;gap:8px;padding:10px;border:1px solid var(--td-line);border-radius:7px}.td-batch-tools label{display:flex;flex:1;flex-direction:column;gap:4px;color:var(--td-muted);white-space:nowrap}.td-batch-tools label>span,.td-batch-duration{display:flex;align-items:center;gap:6px}.td-batch-tools input{width:100%}.td-batch-tools em{color:var(--td-muted);font-style:normal}.td-batch-tools button{white-space:nowrap}.td-batch-global-actions{display:flex;align-items:center;justify-content:flex-end;gap:12px;padding:9px 22px;border-bottom:1px solid var(--td-line);background:#171e27;color:var(--td-muted)}.td-batch-global-actions button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-batch-table{overflow:auto;padding:0 18px}.td-batch-row{display:grid;grid-template-columns:42px minmax(180px,1fr) 100px 150px 120px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-batch-table-head{position:sticky;top:0;z-index:1;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-batch-duration input{min-width:0;width:100%}.td-batch-duration>span{color:var(--td-muted)}.td-batch-enabled,.td-batch-relay{display:flex;align-items:center;gap:7px;justify-content:flex-start;color:var(--td-text)}.td-batch-enabled input,.td-batch-relay input{width:17px;height:17px;margin:0}.td-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-batch-panel{display:flex;flex-direction:column;width:min(1420px,100%);max-height:min(880px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-asset-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-asset-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-dropzone{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-height:92px;margin:14px 18px 10px;border:1px dashed #597084;border-radius:9px;background:#151b23;color:var(--td-text);cursor:pointer;transition:border-color .15s,background .15s}.td-asset-dropzone:hover,.td-asset-dropzone.dragging{border-color:var(--td-accent);background:#1b2c28}.td-asset-dropzone span{color:var(--td-muted);font-size:12px}.td-asset-dropzone input{display:none}.td-asset-batch-warning{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 18px 10px;padding:8px 10px;border:1px solid #836a32;border-radius:7px;background:#3a301c;color:#f4d991}.td-asset-batch-warning span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-warning button{padding:2px 7px}.td-asset-batch-summary{display:flex;align-items:center;justify-content:space-between;padding:8px 18px;border-top:1px solid var(--td-line);border-bottom:1px solid var(--td-line);background:#151b23;color:var(--td-muted)}.td-asset-batch-summary button{padding:5px 8px}.td-asset-batch-list{overflow:auto;padding:0 18px 10px}.td-asset-batch-row{display:grid;grid-template-columns:minmax(210px,1.4fr) minmax(150px,1fr) 115px 135px 105px 72px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-asset-batch-head{position:sticky;top:0;z-index:2;padding-top:10px;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-asset-batch-row.invalid{background:#3b202560}.td-asset-batch-row.imported{background:#17372d55}.td-asset-batch-file{display:flex;min-width:0;flex-direction:column;gap:2px}.td-asset-batch-file strong,.td-asset-batch-file small,.td-asset-batch-file em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-file small{color:var(--td-muted);font-weight:400}.td-asset-batch-file em{color:var(--td-danger);font-size:11px;font-style:normal}.td-asset-batch-duration,.td-asset-batch-audio{display:flex;align-items:center;gap:6px;color:var(--td-muted)}.td-asset-batch-duration input{min-width:0;width:100%}.td-asset-batch-audio input{width:17px;height:17px;margin:0}.td-asset-batch-empty{display:flex;min-height:130px;align-items:center;justify-content:center;color:var(--td-muted)}.td-asset-batch-panel button:disabled,.td-asset-batch-panel input:disabled,.td-asset-batch-panel select:disabled{opacity:.55;cursor:not-allowed}.td-postprocess{display:flex;flex-direction:column;gap:14px;max-width:1500px;margin:0 auto}.td-post-header,.td-post-summary,.td-post-merged{border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px}.td-post-header h2,.td-post-merged h2{margin:0;font-size:17px}.td-post-header p{margin:4px 0 0;color:var(--td-muted)}.td-post-actions{display:flex;gap:8px;flex:none}.td-post-summary{display:flex;align-items:center;gap:18px;padding:10px 14px;color:var(--td-muted)}.td-post-summary>button{margin-left:auto}.td-post-summary button:disabled{opacity:.5;cursor:not-allowed}.td-post-range{display:flex;align-items:center;gap:6px;margin-left:auto}.td-post-range input{width:64px;padding:6px 7px;text-align:center}.td-post-range button{white-space:nowrap}.td-post-summary>.td-post-range+button{margin-left:0}.td-post-error,.td-post-warning{padding:10px 13px;border-radius:7px}.td-post-error{border:1px solid #8b4149;background:#442228;color:#ffd1d5;white-space:pre-wrap}.td-post-warning{border:1px solid #836a32;background:#3a301c;color:#f4d991}.td-post-shot-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(390px,1fr));gap:12px;align-items:start}.td-post-shot{min-width:0;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel);overflow:hidden}.td-post-shot.selected{border-color:#527e6c}.td-post-shot.disabled{opacity:.72}.td-post-shot>header{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid var(--td-line);background:#1d2530}.td-post-shot>header>label{display:flex;align-items:center;gap:9px;min-width:0;cursor:pointer}.td-post-shot>header input{width:18px;height:18px;margin:0;flex:none}.td-post-shot>header label>span{display:flex;min-width:0;gap:8px;align-items:baseline}.td-post-shot>header strong{color:var(--td-text)}.td-post-shot>header em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted);font-style:normal}.td-post-shot>header>span{flex:none;padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted)}.td-post-shot-disabled-note{padding:7px 10px;border-bottom:1px solid var(--td-line);background:#332b1d;color:#e5c77d;font-size:11px}.td-post-shot-empty{min-height:96px;display:flex;align-items:center;justify-content:center;padding:12px;color:var(--td-muted);text-align:center}.td-post-result-list{display:flex;flex-direction:column;gap:7px;max-height:360px;overflow:auto;padding:9px}.td-post-result{display:grid;grid-template-columns:minmax(0,1fr) 35px;gap:6px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:5px}.td-post-result.selected{border-color:var(--td-accent);background:#1c2a2a}.td-shell button.td-post-result-choice{display:grid;grid-template-columns:112px minmax(0,1fr);gap:9px;align-items:center;min-width:0;padding:0;border:0;background:transparent;text-align:left}.td-post-result-choice>span{display:flex;min-width:0;flex-direction:column;gap:3px}.td-post-result-choice>span>strong{display:flex;align-items:center;gap:6px}.td-post-result-choice>span>strong em{padding:1px 5px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-post-result-choice>span>span,.td-post-result-choice>span>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-post-result-choice>span>small{font-size:10px}.td-post-result-play{width:35px;height:35px;padding:0!important}.td-post-result-play:disabled{opacity:.35;cursor:not-allowed}.td-post-merged{padding:12px}.td-post-merged>header>div{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px}.td-post-merged .td-generated-results{display:grid;grid-template-columns:minmax(360px,1.6fr) minmax(300px,1fr);align-items:start}.td-post-merged .td-result-list{max-height:420px}.td-post-preview-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:30;display:flex;align-items:center;justify-content:center;padding:26px;background:#030609d6}.td-post-preview-overlay>section{width:min(980px,100%);max-height:calc(100vh - 52px);overflow:auto;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 80px #000c}.td-post-preview-overlay header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--td-line)}.td-post-preview-overlay header button{font-size:20px;line-height:1;padding:5px 9px}.td-post-preview-overlay video{display:block;width:100%;max-height:calc(100vh - 170px);background:#070a0e}.td-post-preview-overlay p{margin:0;padding:9px 12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}.td-post-summary{flex-wrap:wrap}.td-post-range{margin-left:0}.td-post-summary>button{margin-left:auto}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:900px){.td-post-shot-list,.td-post-merged .td-generated-results{grid-template-columns:1fr}.td-post-header{align-items:flex-start;flex-direction:column}.td-post-actions{width:100%}.td-post-actions button{flex:1}.td-post-summary{align-items:stretch;flex-direction:column;gap:7px}.td-post-range{margin:3px 0;flex-wrap:wrap}.td-post-summary>button{margin:4px 0 0}.td-post-result-list{max-height:none}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}@media(max-width:1000px){.td-asset-batch-list{min-width:900px}.td-asset-batch-panel{overflow:auto}.td-asset-batch-panel>.td-batch-header,.td-asset-dropzone,.td-asset-batch-warning,.td-asset-batch-summary,.td-asset-batch-panel>footer{min-width:864px}}@media(max-width:720px){.td-asset-batch-entry{margin-left:0}}.td-postprocess-shell{display:flex;flex-direction:column;gap:12px;max-width:1500px;margin:0 auto}.td-postprocess-shell>.td-postprocess{max-width:none;width:100%;margin:0}.td-post-mode-tabs{display:flex;gap:7px;padding:5px;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-mode-tabs button{min-width:130px}.td-post-mode-tabs button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-second-pass-panel .td-post-shot>header>span:first-child{display:flex;min-width:0;gap:8px;align-items:baseline;padding:0;background:transparent}.td-second-pass-result{display:grid;grid-template-columns:minmax(0,1fr) 118px;gap:8px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:6px}.td-second-pass-result:has(.td-second-pass-run:disabled){border-color:#34404d}.td-second-pass-run{width:118px;min-height:38px;padding:6px!important}.td-second-pass-run:disabled{opacity:.62;cursor:not-allowed}.td-second-pass-error{grid-column:1/-1;padding:6px 8px;border-radius:5px;background:#442228;color:#ffd1d5;font-size:11px;white-space:pre-wrap}@media(max-width:620px){.td-post-mode-tabs{flex-direction:column}.td-post-mode-tabs button{width:100%}.td-second-pass-result{grid-template-columns:1fr}.td-second-pass-run{width:100%}}.td-runtime-settings{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:14px;margin:0 0 8px}.td-runtime-settings legend{padding:0 7px;color:var(--td-accent)}.td-runtime-settings label:has(textarea),.td-runtime-settings label:has(input[type=password]),.td-runtime-key-controls,.td-runtime-apply{grid-column:1/-1}.td-runtime-settings small{display:block;margin-top:5px;color:var(--td-muted);line-height:1.45}.td-runtime-status{display:flex;align-items:center;padding:8px 10px;border:1px solid var(--td-line);border-radius:6px;background:#161d25;color:var(--td-muted)}.td-runtime-status strong{margin-left:4px;color:var(--td-accent)}.td-runtime-key-controls{display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:9px 10px;border:1px solid var(--td-line);border-radius:6px;background:#161d25}.td-runtime-key-controls>label{display:flex;flex-direction:row;align-items:center;gap:7px}.td-runtime-key-controls>label input{width:auto}.td-runtime-key-controls small{flex-basis:100%;margin:0}.td-runtime-apply{display:flex;justify-content:flex-end}.td-runtime-banner{padding:10px 13px;border:1px solid #836a32;border-radius:7px;background:#3a301c;color:#f4d991}.td-runtime-banner.ready{border-color:#356f59;background:#18372d;color:#8be1bd}@media(max-width:700px){.td-runtime-settings{grid-template-columns:1fr}.td-runtime-settings label:has(textarea),.td-runtime-settings label:has(input[type=password]),.td-runtime-key-controls,.td-runtime-apply{grid-column:auto}}", Ht = "theodore-director-styles";
function _r() {
  if (document.getElementById(Ht)) return;
  const e = document.createElement("style");
  e.id = Ht, e.textContent = xr, document.head.append(e);
}
_r();
function yr(e) {
  const t = e.output ?? {}, r = [t.gifs, t.videos, t.images].find((s) => Array.isArray(s)), o = r == null ? void 0 : r[0], a = String((o == null ? void 0 : o.filename) ?? "").trim();
  return a ? {
    path: [String((o == null ? void 0 : o.subfolder) ?? "").trim().replace(/\\/g, "/").replace(/^\/+|\/+$/g, ""), a].filter(Boolean).join("/"),
    provider: "local",
    stage: "legacy_unknown"
  } : void 0;
}
const wr = "/scripts/app.js", kr = "/scripts/api.js";
Promise.all([
  import(
    /* @vite-ignore */
    wr
  ),
  import(
    /* @vite-ignore */
    kr
  )
]).then(([{ app: e }, { api: t }]) => {
  const r = async (a) => {
    var w, k;
    const d = ((w = e.graph) == null ? void 0 : w._nodes) ?? [], s = d.find((y) => y.type === "TheodoreDirector_PostprocessSecondPassSource"), c = d.find((y) => y.type === "TheodoreDirector_SaveSecondPass"), h = (k = s == null ? void 0 : s.widgets) == null ? void 0 : k.find((y) => y.name === "request_json");
    if (!s || !c || !h || c.id === void 0)
      throw new Error("当前工作流缺少后处理单独二采支流，请重新载入仓库中的 V7 导播台示例工作流");
    const u = h.value, f = s.mode, _ = c.mode;
    let p;
    try {
      h.value = JSON.stringify(a), s.mode = 0, c.mode = 0, p = await e.graphToPrompt(e.rootGraph);
    } finally {
      h.value = u, s.mode = f, c.mode = _;
    }
    const I = (await t.queuePrompt(0, p, { partialExecutionTargets: [String(c.id)] })).prompt_id;
    if (!I) throw new Error("ComfyUI 没有返回二采任务 ID");
    await new Promise((y, S) => {
      const P = () => {
        t.removeEventListener("execution_success", A), t.removeEventListener("execution_error", H), t.removeEventListener("execution_interrupted", H);
      }, g = (D) => {
        var N;
        return String(((N = D.detail) == null ? void 0 : N.prompt_id) ?? "");
      }, A = (D) => {
        g(D) === I && (P(), y());
      }, H = (D) => {
        if (g(D) !== I) return;
        const N = D.detail ?? {};
        P(), S(new Error(String(N.exception_message ?? N.error ?? "单独二采任务执行失败")));
      };
      t.addEventListener("execution_success", A), t.addEventListener("execution_error", H), t.addEventListener("execution_interrupted", H);
    });
  }, o = async (a) => {
    var l, I;
    const s = (((l = e.graph) == null ? void 0 : l._nodes) ?? []).find((w) => w.type === "TheodoreDirector_MergeVideos"), c = (I = s == null ? void 0 : s.widgets) == null ? void 0 : I.find((w) => w.name === "request_json");
    if (!s || !c || s.id === void 0)
      throw new Error("当前工作流缺少 Theodore 合并支流，请重新载入仓库中的 V7.2 示例工作流");
    const h = c.value, u = s.mode;
    let f;
    try {
      c.value = JSON.stringify(a), s.mode = 0, f = await e.graphToPrompt(e.rootGraph);
    } finally {
      c.value = h, s.mode = u;
    }
    const p = (await t.queuePrompt(0, f, { partialExecutionTargets: [String(s.id)] })).prompt_id;
    if (!p) throw new Error("ComfyUI 没有返回合并任务 ID");
    return new Promise((w, k) => {
      let y;
      const S = () => {
        t.removeEventListener("executed", A), t.removeEventListener("execution_success", H), t.removeEventListener("execution_error", D), t.removeEventListener("execution_interrupted", D);
      }, P = (N) => N.detail ?? {}, g = (N) => String(N.prompt_id ?? "") === p, A = (N) => {
        const b = P(N);
        !g(b) || String(b.node ?? "") !== String(s.id) || (y = yr(b) ?? y);
      }, H = (N) => {
        const b = P(N);
        g(b) && (S(), w(y));
      }, D = (N) => {
        const b = P(N);
        g(b) && (S(), k(new Error(String(b.exception_message ?? b.error ?? "合并任务执行失败"))));
      };
      t.addEventListener("executed", A), t.addEventListener("execution_success", H), t.addEventListener("execution_error", D), t.addEventListener("execution_interrupted", D);
    });
  };
  e.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(a, d) {
      if (d.name === "TheodoreDirector_PostprocessSecondPassSource" || d.name === "TheodoreDirector_MergeVideos") {
        const c = a.prototype.onNodeCreated;
        a.prototype.onNodeCreated = function() {
          var u, f;
          c == null || c.apply(this);
          const h = (u = this.widgets) == null ? void 0 : u.find((_) => _.name === "request_json");
          h && (h.type = "hidden", h.computeSize = () => [0, -4]), this.size = [Math.max(((f = this.size) == null ? void 0 : f[0]) ?? 300, 380), 80];
        };
        return;
      }
      if (d.name !== "TheodoreDirector_Project") return;
      const s = a.prototype.onNodeCreated;
      a.prototype.onNodeCreated = function() {
        var h, u;
        s == null || s.apply(this);
        const c = (h = this.widgets) == null ? void 0 : h.find((f) => f.name === "plan_json");
        c && (c.type = "hidden", c.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          var f;
          try {
            const _ = JSON.parse(String(c.value)), p = ((f = e.graph) == null ? void 0 : f._nodes) ?? [], l = p.some((w) => w.type === "TheodoreDirector_PostprocessSecondPassSource") && p.some((w) => w.type === "TheodoreDirector_SaveSecondPass"), I = p.some((w) => w.type === "TheodoreDirector_MergeVideos");
            vr(_, (w) => {
              var k, y;
              c.value = JSON.stringify(w, null, 2), this.setDirtyCanvas(!0, !0), (y = (k = e.graph) == null ? void 0 : k.setDirtyCanvas) == null || y.call(k, !0, !0);
            }, !0, l ? r : void 0, I ? o : void 0);
          } catch (_) {
            window.alert(`Theodore Director: ${_ instanceof Error ? _.message : String(_)}`);
          }
        }), this.size = [Math.max(((u = this.size) == null ? void 0 : u[0]) ?? 300, 360), 110]);
      };
    }
  });
});
