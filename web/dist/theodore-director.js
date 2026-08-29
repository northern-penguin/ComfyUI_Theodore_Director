var Ue, U, Ft, ae, ft, Ot, Ht, Ve, Pe, ke, Ut, et, Qe, Xe, Le = {}, De = [], wr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Be = Array.isArray;
function oe(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function tt(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function kr(e, t, n) {
  var o, a, d, s = {};
  for (d in t) d == "key" ? o = t[d] : d == "ref" ? a = t[d] : s[d] = t[d];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Ue.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (d in e.defaultProps) s[d] === void 0 && (s[d] = e.defaultProps[d]);
  return Ee(e, s, o, a, null);
}
function Ee(e, t, n, o, a) {
  var d = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++Ft, __i: -1, __u: 0 };
  return a == null && U.vnode != null && U.vnode(d), d;
}
function $e(e) {
  return e.children;
}
function je(e, t) {
  this.props = e, this.context = t;
}
function me(e, t) {
  if (t == null) return e.__ ? me(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? me(e) : null;
}
function Sr(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, o = [], a = [], d = oe({}, t);
    d.__v = t.__v + 1, U.vnode && U.vnode(d), rt(e.__P, d, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, o, n ?? me(t), !!(32 & t.__u), a), d.__v = t.__v, d.__.__k[d.__i] = d, Wt(o, d, a), t.__e = t.__ = null, d.__e != n && Bt(d);
  }
}
function Bt(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), Bt(e);
}
function gt(e) {
  (!e.__d && (e.__d = !0) && ae.push(e) && !Fe.__r++ || ft != U.debounceRendering) && ((ft = U.debounceRendering) || Ot)(Fe);
}
function Fe() {
  try {
    for (var e, t = 1; ae.length; ) ae.length > t && ae.sort(Ht), e = ae.shift(), t = ae.length, Sr(e);
  } finally {
    ae.length = Fe.__r = 0;
  }
}
function qt(e, t, n, o, a, d, s, l, h, u, f) {
  var x, c, p, C, w, k, y = o && o.__k || De, S = t.length;
  for (h = zr(n, t, y, h, S), x = 0; x < S; x++) (p = n.__k[x]) != null && (c = p.__i != -1 && y[p.__i] || Le, p.__i = x, k = rt(e, p, c, a, d, s, l, h, u, f), C = p.__e, p.ref && c.ref != p.ref && (c.ref && nt(c.ref, null, p), f.push(p.ref, p.__c || C, p)), w == null && C != null && (w = C), 4 & p.__u ? (h = Kt(p, h, e), c.__e && (c.__e = null)) : typeof p.type == "function" && k !== void 0 ? h = k : C && (h = C.nextSibling), p.__u &= -7);
  return n.__e = w, h;
}
function zr(e, t, n, o, a) {
  var d, s, l, h, u, f = n.length, x = f, c = 0;
  for (e.__k = new Array(a), d = 0; d < a; d++) (s = t[d]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = e.__k[d] = Ee(null, s, null, null, null) : Be(s) ? s = e.__k[d] = Ee($e, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = e.__k[d] = Ee(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : e.__k[d] = s, h = d + c, s.__ = e, s.__b = e.__b + 1, l = null, (u = s.__i = $r(s, n, h, x)) != -1 && (x--, (l = n[u]) && (l.__u |= 2)), l == null || l.__v == null ? (u == -1 && (a > f ? c-- : a < f && c++), typeof s.type != "function" && (s.__u |= 4)) : u != h && (u == h - 1 ? c-- : u == h + 1 ? c++ : (u > h ? c-- : c++, s.__u |= 4))) : e.__k[d] = null;
  if (x) for (d = 0; d < f; d++) (l = n[d]) != null && (2 & l.__u) == 0 && (l.__e == o && (o = me(l)), Jt(l, l));
  return o;
}
function Kt(e, t, n) {
  var o, a;
  if (typeof e.type == "function") {
    for (o = e.__k, a = 0; o && a < o.length; a++) o[a] && (o[a].__ = e, t = Kt(o[a], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = me(e)), t = n.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function $r(e, t, n, o) {
  var a, d, s, l = e.key, h = e.type, u = t[n], f = u != null && (2 & u.__u) == 0;
  if (u === null && l == null || f && l == u.key && h == u.type) return n;
  if (o > (f ? 1 : 0)) {
    for (a = n - 1, d = n + 1; a >= 0 || d < t.length; ) if ((u = t[s = a >= 0 ? a-- : d++]) != null && (2 & u.__u) == 0 && l == u.key && h == u.type) return s;
  }
  return -1;
}
function bt(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || wr.test(t) ? n : n + "px";
}
function Te(e, t, n, o, a) {
  var d, s;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof o == "string" && (e.style.cssText = o = ""), o) for (t in o) n && t in n || bt(e.style, t, "");
    if (n) for (t in n) o && n[t] == o[t] || bt(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") d = t != (t = t.replace(Ut, "$1")), s = t.toLowerCase(), t = s in e || t == "onFocusOut" || t == "onFocusIn" ? s.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + d] = n, n ? o ? n[ke] = o[ke] : (n[ke] = et, e.addEventListener(t, d ? Xe : Qe, d)) : e.removeEventListener(t, d ? Xe : Qe, d);
  else {
    if (a == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function vt(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t[Pe] == null) t[Pe] = et++;
      else if (t[Pe] < n[ke]) return;
      return n(U.event ? U.event(t) : t);
    }
  };
}
function rt(e, t, n, o, a, d, s, l, h, u) {
  var f, x, c, p, C, w, k, y, S, E, g, I, O, D, N, b, P = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (h = !!(32 & n.__u), d = [l = t.__e = n.__e]), (f = U.__b) && f(t);
  e: if (typeof P == "function") {
    x = s.length;
    try {
      if (S = t.props, E = P.prototype && P.prototype.render, g = (f = P.contextType) && o[f.__c], I = f ? g ? g.props.value : f.__ : o, n.__c ? y = (c = t.__c = n.__c).__ = c.__E : (E ? t.__c = c = new P(S, I) : (t.__c = c = new je(S, I), c.constructor = P, c.render = Ir), g && g.sub(c), c.state || (c.state = {}), c.__n = o, p = c.__d = !0, c.__h = [], c._sb = []), E && c.__s == null && (c.__s = c.state), E && P.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = oe({}, c.__s)), oe(c.__s, P.getDerivedStateFromProps(S, c.__s))), C = c.props, w = c.state, c.__v = t, p) E && P.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), E && c.componentDidMount != null && c.__h.push(c.componentDidMount);
      else {
        if (E && P.getDerivedStateFromProps == null && S !== C && c.componentWillReceiveProps != null && c.componentWillReceiveProps(S, I), t.__v == n.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(S, c.__s, I) === !1) {
          t.__v != n.__v && (c.props = S, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(F) {
            F && (F.__ = t);
          }), De.push.apply(c.__h, c._sb), c._sb = [], c.__h.length && s.push(c), l = me(n);
          break e;
        }
        c.componentWillUpdate != null && c.componentWillUpdate(S, c.__s, I), E && c.componentDidUpdate != null && c.__h.push(function() {
          c.componentDidUpdate(C, w, k);
        });
      }
      if (c.context = I, c.props = S, c.__P = e, c.__e = !1, O = U.__r, D = 0, E) c.state = c.__s, c.__d = !1, O && O(t), f = c.render(c.props, c.state, c.context), De.push.apply(c.__h, c._sb), c._sb = [];
      else do
        c.__d = !1, O && O(t), f = c.render(c.props, c.state, c.context), c.state = c.__s;
      while (c.__d && ++D < 25);
      c.state = c.__s, c.getChildContext != null && (o = oe(oe({}, o), c.getChildContext())), E && !p && c.getSnapshotBeforeUpdate != null && (k = c.getSnapshotBeforeUpdate(C, w)), N = f != null && f.type === $e && f.key == null ? Gt(f.props.children) : f, l = qt(e, Be(N) ? N : [N], t, n, o, a, d, s, l, h, u), c.base = t.__e, t.__u &= -161, c.__h.length && s.push(c), y && (c.__E = c.__ = null);
    } catch (F) {
      if (s.length = x, t.__v = null, h || d != null) {
        if (F.then) {
          for (t.__u |= h ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
          d != null && (d[d.indexOf(l)] = null), t.__e = l;
        } else if (d != null) for (b = d.length; b--; ) tt(d[b]);
      } else t.__e = n.__e;
      t.__k == null && (t.__k = n.__k || []), F.then || Vt(t), U.__e(F, t, n);
    }
  } else d == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : l = t.__e = Cr(n.__e, t, n, o, a, d, s, h, u);
  return (f = U.diffed) && f(t), 128 & t.__u ? void 0 : l;
}
function Vt(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Vt));
}
function Wt(e, t, n) {
  for (var o = 0; o < n.length; o++) nt(n[o], n[++o], n[++o]);
  U.__c && U.__c(t, e), e.some(function(a) {
    try {
      e = a.__h, a.__h = [], e.some(function(d) {
        d.call(a);
      });
    } catch (d) {
      U.__e(d, a.__v);
    }
  });
}
function Gt(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : Be(e) ? e.map(Gt) : e.constructor !== void 0 ? null : oe({}, e);
}
function Cr(e, t, n, o, a, d, s, l, h) {
  var u, f, x, c, p, C, w, k = n.props || Le, y = t.props, S = t.type;
  if (S == "svg" ? a = "http://www.w3.org/2000/svg" : S == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), d != null) {
    for (u = 0; u < d.length; u++) if ((p = d[u]) && "setAttribute" in p == !!S && (S ? p.localName == S : p.nodeType == 3)) {
      e = p, d[u] = null;
      break;
    }
  }
  if (e == null) {
    if (S == null) return document.createTextNode(y);
    e = document.createElementNS(a, S, y.is && y), l && (U.__m && U.__m(t, d), l = !1), d = null;
  }
  if (S == null) k === y || l && e.data == y || (e.data = y);
  else {
    if (d = S == "textarea" && y.defaultValue != null ? null : d && Ue.call(e.childNodes), !l && d != null) for (k = {}, u = 0; u < e.attributes.length; u++) k[(p = e.attributes[u]).name] = p.value;
    for (u in k) p = k[u], u == "dangerouslySetInnerHTML" ? x = p : u == "children" || u in y || u == "value" && "defaultValue" in y || u == "checked" && "defaultChecked" in y || Te(e, u, null, p, a);
    for (u in y) p = y[u], u == "children" ? c = p : u == "dangerouslySetInnerHTML" ? f = p : u == "value" ? C = p : u == "checked" ? w = p : l && typeof p != "function" || k[u] === p || Te(e, u, p, k[u], a);
    if (f) l || x && (f.__html == x.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (x && (e.innerHTML = ""), qt(t.type == "template" ? e.content : e, Be(c) ? c : [c], t, n, o, S == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, d, s, d ? d[0] : n.__k && me(n, 0), l, h), d != null) for (u = d.length; u--; ) tt(d[u]);
    l && S != "textarea" || (u = "value", S == "progress" && C == null ? e.removeAttribute("value") : C != null && (C !== e[u] || S == "progress" && !C || S == "option" && C != k[u]) && Te(e, u, C, k[u], a), u = "checked", w != null && w != e[u] && Te(e, u, w, k[u], a));
  }
  return e;
}
function nt(e, t, n) {
  try {
    if (typeof e == "function") {
      var o = typeof e.__u == "function";
      o && e.__u(), o && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (a) {
    U.__e(a, n);
  }
}
function Jt(e, t, n) {
  var o, a;
  if (U.unmount && U.unmount(e), (o = e.ref) && (o.current && o.current != e.__e || nt(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (d) {
      U.__e(d, t);
    }
    o.base = o.__P = o.__n = null;
  }
  if (o = e.__k) for (a = 0; a < o.length; a++) o[a] && Jt(o[a], t, n || typeof e.type != "function");
  n || tt(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Ir(e, t, n) {
  return this.constructor(e, n);
}
function _t(e, t, n) {
  var o, a, d, s;
  t == document && (t = document.documentElement), U.__ && U.__(e, t), a = (o = !1) ? null : t.__k, d = [], s = [], rt(t, e = t.__k = kr($e, null, [e]), a || Le, Le, t.namespaceURI, a ? null : t.firstChild ? Ue.call(t.childNodes) : null, d, a ? a.__e : t.firstChild, o, s), Wt(d, e, s), e.props.children = null;
}
Ue = De.slice, U = { __e: function(e, t, n, o) {
  for (var a, d, s; t = t.__; ) if ((a = t.__c) && !a.__) try {
    if ((d = a.constructor) && d.getDerivedStateFromError != null && (a.setState(d.getDerivedStateFromError(e)), s = a.__d), a.componentDidCatch != null && (a.componentDidCatch(e, o || {}), s = a.__d), s) return a.__E = a;
  } catch (l) {
    e = l;
  }
  throw e;
} }, Ft = 0, je.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = oe({}, this.state), typeof e == "function" && (e = e(oe({}, n), this.props)), e && oe(n, e), e != null && this.__v && (t && this._sb.push(t), gt(this));
}, je.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), gt(this));
}, je.prototype.render = $e, ae = [], Ot = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ht = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Fe.__r = 0, Ve = Math.random().toString(8), Pe = "__d" + Ve, ke = "__a" + Ve, Ut = /(PointerCapture)$|Capture$/i, et = 0, Qe = vt(!1), Xe = vt(!0);
var Rr = 0;
function r(e, t, n, o, a, d) {
  t || (t = {});
  var s, l, h = t;
  if ("ref" in h) for (l in h = {}, t) l == "ref" ? s = t[l] : h[l] = t[l];
  var u = { type: e, props: h, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Rr, __i: -1, __u: 0, __source: a, __self: d };
  if (typeof e == "function" && (s = e.defaultProps)) for (l in s) h[l] === void 0 && (h[l] = s[l]);
  return U.vnode && U.vnode(u), u;
}
var Se, B, We, xt, Oe = 0, Yt = [], K = U, yt = K.__b, wt = K.__r, kt = K.diffed, St = K.__c, zt = K.unmount, $t = K.__;
function ot(e, t) {
  K.__h && K.__h(B, e, Oe || t), Oe = 0;
  var n = B.__H || (B.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function $(e) {
  return Oe = 1, Ar(Xt, e);
}
function Ar(e, t, n) {
  var o = ot(Se++, 2);
  if (o.t = e, !o.__c && (o.__ = [Xt(void 0, t), function(l) {
    var h = o.__N ? o.__N[0] : o.__[0], u = o.t(h, l);
    h !== u && (o.__N = [u, o.__[1]], o.__c.setState({}));
  }], o.__c = B, !B.__f)) {
    var a = function(l, h, u) {
      if (!o.__c.__H) return !0;
      var f = !1, x = o.__c.props !== l;
      if (o.__c.__H.__.some(function(p) {
        if (p.__N) {
          f = !0;
          var C = p.__[0];
          p.__ = p.__N, p.__N = void 0, C !== p.__[0] && (x = !0);
        }
      }), d) {
        var c = d.call(this, l, h, u);
        return f ? c || x : c;
      }
      return !f || x;
    };
    B.__f = !0;
    var d = B.shouldComponentUpdate, s = B.componentWillUpdate;
    B.componentWillUpdate = function(l, h, u) {
      if (this.__e) {
        var f = d;
        d = void 0, a(l, h, u), d = f;
      }
      s && s.call(this, l, h, u);
    }, B.shouldComponentUpdate = a;
  }
  return o.__N || o.__;
}
function ze(e, t) {
  var n = ot(Se++, 3);
  !K.__s && Qt(n.__H, t) && (n.__ = e, n.u = t, B.__H.__h.push(n));
}
function st(e) {
  return Oe = 5, _e(function() {
    return { current: e };
  }, []);
}
function _e(e, t) {
  var n = ot(Se++, 7);
  return Qt(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function Tr() {
  for (var e; e = Yt.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(Me), t.__h.some(Ze), t.__h = [];
    } catch (n) {
      t.__h = [], K.__e(n, e.__v);
    }
  }
}
K.__b = function(e) {
  B = null, yt && yt(e);
}, K.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), $t && $t(e, t);
}, K.__r = function(e) {
  wt && wt(e), Se = 0;
  var t = (B = e.__c).__H;
  t && (We === B ? (t.__h = [], B.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(Me), t.__h.some(Ze), t.__h = [], Se = 0)), We = B;
}, K.diffed = function(e) {
  kt && kt(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Yt.push(t) !== 1 && xt === K.requestAnimationFrame || ((xt = K.requestAnimationFrame) || Pr)(Tr)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), We = B = null;
}, K.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(Me), n.__h = n.__h.filter(function(o) {
        return !o.__ || Ze(o);
      });
    } catch (o) {
      t.some(function(a) {
        a.__h && (a.__h = []);
      }), t = [], K.__e(o, n.__v);
    }
  }), St && St(e, t);
}, K.unmount = function(e) {
  zt && zt(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(o) {
    try {
      Me(o);
    } catch (a) {
      t = a;
    }
  }), n.__H = void 0, t && K.__e(t, n.__v));
};
var Ct = typeof requestAnimationFrame == "function";
function Pr(e) {
  var t, n = function() {
    clearTimeout(o), Ct && cancelAnimationFrame(t), setTimeout(e);
  }, o = setTimeout(n, 35);
  Ct && (t = requestAnimationFrame(n));
}
function Me(e) {
  var t = B, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), B = t;
}
function Ze(e) {
  var t = B;
  e.__c = e.__(), B = t;
}
function Qt(e, t) {
  return !e || e.length !== t.length || t.some(function(n, o) {
    return n !== e[o];
  });
}
function Xt(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const Er = {
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
  if (e.name.includes(".")) return Er[t] ?? null;
  const n = e.type.split("/", 1)[0];
  return n === "image" || n === "video" || n === "audio" ? n : null;
}
function jr(e) {
  const a = e.replace(/\.[^.]+$/, "").replace(/^\s*\d+\s*[-_. ]+/, "").normalize("NFKC").replace(/[\s-]+/g, "_").replace(/[{}]/g, "").replace(/_+/g, "_").replace(/^[_\.]+|[_\.]+$/g, "").slice(0, 96) || "asset";
  return a.toLocaleLowerCase().endsWith(".audio") ? `${a}_asset` : a;
}
function Mr(e, t) {
  const n = new Set(Array.from(t, (a) => a.toLocaleLowerCase()));
  if (!n.has(e.toLocaleLowerCase())) return e;
  let o = 2;
  for (; n.has(`${e}_${o}`.toLocaleLowerCase()); ) o += 1;
  return `${e}_${o}`;
}
function Nr(e, t, n) {
  const o = e.trim().toLocaleLowerCase();
  return !e.trim() || /[\s{}]/.test(e) || o.endsWith(".audio") ? "invalid" : Array.from(t, (d) => d.toLocaleLowerCase()).includes(o) || Array.from(n, (d) => d.trim().toLocaleLowerCase()).filter((d) => d === o).length > 1 ? "duplicate" : null;
}
function Lr(e, t, n) {
  const o = new Set(Array.from(t)), a = [], d = [];
  for (const s of e) {
    const l = Zt(s);
    if (!l) {
      d.push(s.name);
      continue;
    }
    const h = Mr(jr(s.name), o);
    o.add(h), a.push({ id: n(), file: s, alias: h, kind: l, durationSeconds: l === "image" ? null : 2, includeVideoAudio: !1, status: "pending", error: "" });
  }
  return { drafts: a, rejected: d };
}
function Dr(e, t, n) {
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
function Fr(e, t) {
  return t === "image" ? Promise.resolve(null) : new Promise((n) => {
    const o = document.createElement(t === "video" ? "video" : "audio"), a = URL.createObjectURL(e);
    let d = !1;
    const s = (l) => {
      d || (d = !0, o.onloadedmetadata = null, o.onerror = null, o.removeAttribute("src"), o.load(), URL.revokeObjectURL(a), n(l));
    };
    o.preload = "metadata", o.onloadedmetadata = () => s(Number.isFinite(o.duration) && o.duration > 0 ? Math.round(o.duration * 10) / 10 : null), o.onerror = () => s(null), o.src = a;
  });
}
const Or = () => `asset_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`, Ge = (e, t) => t === "zh" ? { image: "图片", video: "视频", audio: "音频" }[e] : e;
function Hr({ language: e, assets: t, projectName: n, onClose: o, onImported: a, uploadFile: d }) {
  const [s, l] = $([]), [h, u] = $([]), [f, x] = $(!1), [c, p] = $(!1), C = st([]);
  C.current = s;
  const w = t.map((b) => b.alias), k = (b, P) => l((F) => F.map((j) => j.id === b ? { ...j, ...P } : j)), y = (b) => {
    if (!b.length || c) return;
    const P = [...w, ...C.current.map((j) => j.alias)], F = Lr(b, P, Or);
    F.rejected.length && u((j) => [...j, ...F.rejected]), F.drafts.length && (l((j) => [...j, ...F.drafts]), F.drafts.forEach((j) => {
      Fr(j.file, j.kind).then((G) => {
        G != null && l((Q) => Q.map((W) => W.id === j.id && W.kind === j.kind && W.durationSeconds === 2 ? { ...W, durationSeconds: G } : W));
      });
    }));
  }, E = s.filter((b) => b.status !== "imported").map((b) => b.alias), g = (b) => {
    if (b.status === "imported") return null;
    const P = Nr(b.alias, w, E);
    return P === "invalid" ? e === "zh" ? "别名为空、包含空白/花括号，或使用了保留后缀 .audio" : "Alias is empty, contains whitespace/braces, or uses reserved .audio" : P === "duplicate" ? e === "zh" ? "别名与素材库或本批次其他素材重复" : "Alias duplicates an existing or staged asset" : Zt(b.file) !== b.kind ? e === "zh" ? "文件扩展名与所选类型不匹配" : "The extension does not match the selected kind" : b.kind !== "image" && (b.durationSeconds == null || b.durationSeconds <= 0) ? e === "zh" ? "视频或音频时长必须大于 0" : "Video/audio duration must be greater than 0" : null;
  }, I = async () => {
    const P = C.current.filter((Q) => Q.status === "pending" || Q.status === "error");
    if (!P.length) return;
    if (P.some(g)) {
      window.alert(e === "zh" ? "请先修正列表中标红的项目。" : "Fix the highlighted rows before importing.");
      return;
    }
    p(!0);
    const F = Math.max(0, ...t.map((Q) => Q.fixedOrder)) + 1;
    let j = 0;
    const G = async () => {
      for (; j < P.length; ) {
        const Q = j++, W = P[Q];
        k(W.id, { status: "uploading", error: "" });
        try {
          const re = await d(n, W.kind, W.file);
          a([Dr(W, re, F + Q)]), k(W.id, { status: "imported", error: "" });
        } catch (re) {
          k(W.id, { status: "error", error: String(re) });
        }
      }
    };
    await Promise.all(Array.from({ length: Math.min(2, P.length) }, G)), p(!1);
  }, O = s.filter((b) => b.status === "imported").length, D = s.filter((b) => b.status === "error").length, N = s.length - O;
  return /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-asset-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": e === "zh" ? "批量导入素材" : "Batch import assets", children: [
    /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: e === "zh" ? "批量导入素材" : "Batch import assets" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "可混合选择图片、视频和音频；确认列表后再写入素材库。" : "Select images, videos, and audio together; review before uploading." })
      ] }),
      /* @__PURE__ */ r("button", { disabled: c, "aria-label": e === "zh" ? "关闭" : "Close", onClick: o, children: "×" })
    ] }),
    /* @__PURE__ */ r("label", { class: `td-asset-dropzone ${f ? "dragging" : ""}`, onDragEnter: (b) => {
      b.preventDefault(), x(!0);
    }, onDragOver: (b) => b.preventDefault(), onDragLeave: (b) => {
      b.currentTarget === b.target && x(!1);
    }, onDrop: (b) => {
      var P;
      b.preventDefault(), x(!1), y(Array.from(((P = b.dataTransfer) == null ? void 0 : P.files) ?? []));
    }, children: [
      /* @__PURE__ */ r("strong", { children: e === "zh" ? "拖拽素材到这里，或点击选择多个文件" : "Drop media here, or click to select multiple files" }),
      /* @__PURE__ */ r("span", { children: e === "zh" ? "支持图片、视频、音频混合导入" : "Mixed image, video, and audio selection is supported" }),
      /* @__PURE__ */ r("input", { type: "file", multiple: !0, accept: "image/*,video/*,audio/*", disabled: c, onChange: (b) => {
        y(Array.from(b.currentTarget.files ?? [])), b.currentTarget.value = "";
      } })
    ] }),
    h.length > 0 && /* @__PURE__ */ r("div", { class: "td-asset-batch-warning", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `已跳过 ${h.length} 个不支持的文件：${h.join("、")}` : `Skipped ${h.length} unsupported files: ${h.join(", ")}` }),
      /* @__PURE__ */ r("button", { onClick: () => u([]), children: "×" })
    ] }),
    /* @__PURE__ */ r("div", { class: "td-asset-batch-summary", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `共 ${s.length} 项 · 已导入 ${O} · 待处理 ${N}${D ? ` · 失败 ${D}` : ""}` : `${s.length} items · ${O} imported · ${N} pending${D ? ` · ${D} failed` : ""}` }),
      /* @__PURE__ */ r("button", { disabled: c || !s.length, onClick: () => l([]), children: e === "zh" ? "清空列表" : "Clear list" })
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
      !s.length && /* @__PURE__ */ r("div", { class: "td-asset-batch-empty", children: e === "zh" ? "尚未选择素材" : "No media selected" }),
      s.map((b) => {
        const P = g(b), F = c || b.status === "imported" || b.status === "uploading";
        return /* @__PURE__ */ r("div", { class: `td-asset-batch-row ${P || b.status === "error" ? "invalid" : ""} ${b.status === "imported" ? "imported" : ""}`, children: [
          /* @__PURE__ */ r("div", { class: "td-asset-batch-file", children: [
            /* @__PURE__ */ r("strong", { title: b.file.name, children: b.file.name }),
            /* @__PURE__ */ r("small", { children: [
              (b.file.size / 1024 / 1024).toFixed(1),
              " MB · ",
              b.status === "pending" ? e === "zh" ? "待导入" : "Pending" : b.status === "uploading" ? e === "zh" ? "上传中" : "Uploading" : b.status === "imported" ? e === "zh" ? "已完成" : "Imported" : e === "zh" ? "失败" : "Failed"
            ] }),
            (P || b.error) && /* @__PURE__ */ r("em", { title: P || b.error, children: P || b.error })
          ] }),
          /* @__PURE__ */ r("input", { disabled: F, value: b.alias, onInput: (j) => k(b.id, { alias: j.currentTarget.value, status: "pending", error: "" }) }),
          /* @__PURE__ */ r("select", { disabled: F, value: b.kind, onChange: (j) => {
            const G = j.currentTarget.value;
            k(b.id, { kind: G, durationSeconds: G === "image" ? null : b.durationSeconds ?? 2, includeVideoAudio: G === "video" && b.includeVideoAudio, status: "pending", error: "" });
          }, children: [
            /* @__PURE__ */ r("option", { value: "image", children: Ge("image", e) }),
            /* @__PURE__ */ r("option", { value: "video", children: Ge("video", e) }),
            /* @__PURE__ */ r("option", { value: "audio", children: Ge("audio", e) })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", disabled: F || b.kind === "image", value: b.durationSeconds ?? "", onInput: (j) => k(b.id, { durationSeconds: j.currentTarget.value ? Number(j.currentTarget.value) : null, status: "pending", error: "" }) }),
            /* @__PURE__ */ r("span", { children: b.kind === "image" ? "—" : e === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-audio", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", disabled: F || b.kind !== "video", checked: b.kind === "video" && b.includeVideoAudio, onChange: (j) => k(b.id, { includeVideoAudio: j.currentTarget.checked }) }),
            /* @__PURE__ */ r("span", { children: b.kind === "video" ? b.includeVideoAudio ? e === "zh" ? "开" : "ON" : e === "zh" ? "关" : "OFF" : "—" })
          ] }),
          /* @__PURE__ */ r("button", { class: "danger", disabled: F, onClick: () => l((j) => j.filter((G) => G.id !== b.id)), children: e === "zh" ? "移除" : "Remove" })
        ] }, b.id);
      })
    ] }),
    /* @__PURE__ */ r("footer", { children: [
      /* @__PURE__ */ r("button", { disabled: c, onClick: o, children: e === "zh" ? "关闭" : "Close" }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: c || !s.some((b) => b.status === "pending" || b.status === "error"), onClick: () => void I(), children: c ? e === "zh" ? "正在导入…" : "Importing…" : D ? e === "zh" ? "重试失败项" : "Retry failed" : e === "zh" ? "开始导入" : "Start import" })
    ] })
  ] }) });
}
const er = String.raw`\{\{ref:([^{}]+)}}`;
function It() {
  return new RegExp(er, "g");
}
function tr(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const o of e.assets)
    o.enabled && o.path.trim() && (!o.shotIds.length || o.shotIds.includes(t.id)) && !t.disabledAssetIds.includes(o.id) && n.set(o.alias, o);
  return n;
}
function rr(e, t, n) {
  const o = n.trim(), a = o.endsWith(".audio"), d = a ? o.slice(0, -6) : o, s = tr(e, t).get(d);
  return s ? !a || s.kind === "video" && s.includeVideoAudio : !1;
}
function Rt(e, t) {
  const n = e.shots.filter((o) => o.enabled);
  return n.length > 0 && n.every((o) => rr(e, o, t));
}
function nr(e, t) {
  const n = [], o = tr(e, t), a = [e.promptPrefix, t.prompt, e.promptSuffix].filter(Boolean).join(`
`), d = [...a.matchAll(It())].map((g) => g[1].trim()), s = [], l = /* @__PURE__ */ new Set(), h = (g) => {
    l.has(g.id) || (l.add(g.id), s.push(g));
  };
  [...o.values()].filter((g) => g.fixed).sort((g, I) => g.fixedOrder - I.fixedOrder || g.alias.localeCompare(I.alias)).forEach(h);
  for (const g of d) {
    const I = g.endsWith(".audio") ? g.slice(0, -6) : g, O = o.get(I);
    if (!O) {
      n.push(`未找到或已禁用素材：${g}`);
      continue;
    }
    g.endsWith(".audio") && (O.kind !== "video" || !O.includeVideoAudio) && n.push(`视频伴音未启用：${g}`), h(O);
  }
  const u = s.filter((g) => g.kind === "image"), f = s.filter((g) => g.kind === "video"), x = f.filter((g) => g.includeVideoAudio), c = s.filter((g) => g.kind === "audio"), p = x.length + c.length, C = u.length + f.length + c.length;
  u.length > 9 && n.push(`参考图 ${u.length}/9，超出 H3 上限`), f.length > 3 && n.push(`参考视频 ${f.length}/3，超出 H3 上限`), p > 3 && n.push(`有效音频 ${p}/3，超出 H3 总上限`), C > 12 && n.push(`混合文件 ${C}/12，超出 H3 上限`), p && !u.length && !f.length && n.push("音频参考不能单独使用");
  const w = f.filter((g) => typeof g.durationSeconds == "number");
  for (const g of f) (g.durationSeconds == null || g.durationSeconds < 2 || g.durationSeconds > 15) && n.push(`视频 ${g.alias} 的时长必须为 2–15 秒`);
  w.reduce((g, I) => g + (I.durationSeconds ?? 0), 0) > 15 && n.push("参考视频总时长超过 15 秒");
  const k = [...x.map((g) => g.audioDurationSeconds ?? g.durationSeconds), ...c.map((g) => g.durationSeconds)];
  k.some((g) => g == null || g < 2 || g > 15) && n.push("每路有效音频时长必须为 2–15 秒"), k.reduce((g, I) => g + (I ?? 0), 0) > 15 && n.push("有效音频总时长超过 15 秒");
  const y = /* @__PURE__ */ new Map();
  u.forEach((g, I) => y.set(g.alias, `<Picture ${I + 1}>`)), f.forEach((g, I) => y.set(g.alias, `<Video ${I + 1}>`)), x.forEach((g, I) => y.set(`${g.alias}.audio`, `<Audio ${I + 1}>`)), c.forEach((g, I) => y.set(g.alias, `<Audio ${x.length + I + 1}>`));
  const S = a.replace(It(), (g, I) => y.get(I.trim()) ?? g), E = [...y.entries()].map(([g, I]) => ({ label: I, alias: g, kind: I.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: S, errors: n, slots: E, mixedFiles: C, audioCount: p };
}
function Ur(e) {
  var a, d, s, l, h, u;
  const t = [];
  (d = (a = e.project) == null ? void 0 : a.name) != null && d.trim() || t.push("Project name 不能为空"), (l = (s = e.project) == null ? void 0 : s.runId) != null && l.trim() || t.push("Run ID 不能为空"), (!Array.isArray(e.shots) || !e.shots.some((f) => f.enabled)) && t.push("至少需要一个启用分镜");
  const n = /* @__PURE__ */ new Set();
  for (const f of e.shots ?? [])
    (!((h = f.id) != null && h.trim()) || n.has(f.id)) && t.push(`分镜 ID 为空或重复：${f.id || "(空)"}`), n.add(f.id), f.durationSeconds > 0 || t.push(`分镜 ${f.id} 的时长必须大于 0`);
  const o = /* @__PURE__ */ new Set();
  for (const f of e.assets ?? []) {
    const x = (u = f.alias) == null ? void 0 : u.toLocaleLowerCase();
    (!f.alias || /[\s{}]/.test(f.alias) || f.alias.endsWith(".audio") || o.has(x)) && t.push(`素材别名无效或重复：${f.alias || "(空)"}`), o.add(x), f.enabled && !f.path && t.push(`素材 ${f.alias} 尚未选择文件`);
  }
  for (const f of e.shots.filter((x) => x.enabled)) t.push(...nr(e, f).errors.map((x) => `${f.title}: ${x}`));
  return [...new Set(t)];
}
function Br(e, t) {
  const n = [], o = new RegExp(er, "g");
  let a = 0;
  for (const d of e.matchAll(o)) {
    const s = d.index ?? 0;
    s > a && n.push({ text: e.slice(a, s), reference: !1 }), n.push({ text: d[0], reference: !0, valid: t(d[1]) }), a = s + d[0].length;
  }
  return a < e.length && n.push({ text: e.slice(a), reference: !1 }), n;
}
function Je({ value: e, rows: t, onInput: n, isReferenceValid: o }) {
  const a = st(null), d = Br(e, o), s = (l) => {
    a.current && (a.current.scrollTop = l.currentTarget.scrollTop, a.current.scrollLeft = l.currentTarget.scrollLeft);
  };
  return /* @__PURE__ */ r("span", { class: "td-highlight-textarea", children: [
    /* @__PURE__ */ r("pre", { ref: a, class: "td-highlight-backdrop", "aria-hidden": "true", children: [
      d.map((l, h) => l.reference ? /* @__PURE__ */ r("mark", { class: l.valid ? "valid" : "invalid", children: l.text }, h) : l.text),
      e.endsWith(`
`) && " "
    ] }),
    /* @__PURE__ */ r("textarea", { class: "td-highlight-input", rows: t, value: e, onInput: n, onScroll: s })
  ] });
}
const qr = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", postprocess: "后处理", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", postprocess: "Post-process", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function ue(e, t) {
  return qr[e][t];
}
function de(e) {
  return (Array.isArray(e.results) && e.results.length ? e.results : e.path ? [{ path: e.path, bytes: e.bytes, modifiedAt: e.modifiedAt, stage: e.stage, sourcePath: e.sourcePath, completedAt: e.completedAt }] : []).filter((n) => typeof n.path == "string" && n.path.trim().length > 0).sort((n, o) => (o.modifiedAt ?? 0) - (n.modifiedAt ?? 0));
}
function or(e, t) {
  const n = /_video_(\d+)/i.exec(e.replace(/\\/g, "/"));
  return n ? Number(n[1]) : t;
}
function Kr(e) {
  return e.stage !== "second_pass";
}
function He({ src: e, alt: t }) {
  const n = st(null), [o, a] = $(!1);
  return ze(() => {
    const d = n.current;
    if (!d) return;
    if (!("IntersectionObserver" in window)) {
      a(!0);
      return;
    }
    const s = new IntersectionObserver((l) => {
      a(l.some((h) => h.isIntersecting));
    }, { rootMargin: "160px" });
    return s.observe(d), () => s.disconnect();
  }, []), /* @__PURE__ */ r("div", { class: "td-result-thumb", ref: n, children: o ? /* @__PURE__ */ r("video", { src: e, "aria-label": t, muted: !0, playsInline: !0, preload: "metadata", onLoadedMetadata: (d) => {
    const s = d.currentTarget;
    Number.isFinite(s.duration) && s.duration > 0.02 && (s.currentTime = Math.min(0.25, Math.max(0, s.duration - 0.05)));
  } }) : /* @__PURE__ */ r("span", { children: "…" }) });
}
function sr(e, t) {
  const n = e.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!n || n.startsWith("/") || /^[A-Za-z]:\//.test(n)) return null;
  const o = n.split("/").filter(Boolean), a = o.pop();
  if (!a || o.some((s) => s === "..")) return null;
  const d = new URLSearchParams({ filename: a, type: t });
  return o.length && d.set("subfolder", o.join("/")), `/view?${d.toString()}`;
}
function Vr(e) {
  return sr(e, "input");
}
function ve(e) {
  return e ? e.url && /^https:\/\//i.test(e.url) ? e.url : sr(e.path, "output") : null;
}
function se(e) {
  return (e.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "").split(/[?#]/, 1)[0];
}
function At({ asset: e, compact: t = !1 }) {
  const n = Vr(e.path), o = `td-media-preview ${t ? "compact" : ""}`;
  return n ? e.kind === "image" ? /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("img", { src: n, alt: e.alias, loading: "lazy" }) }) : e.kind === "video" ? /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("video", { src: n, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("audio", { src: n, controls: !0, preload: "metadata" }) }) : e.path ? /* @__PURE__ */ r("div", { class: `${o} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ r("div", { class: `${o} empty`, children: "尚未选择素材 / No media selected" });
}
function ir(e) {
  let t = 0;
  return e.shots.map((n, o) => {
    const a = {
      key: `${o}:${n.id}`,
      shot: n,
      sourceIndex: o,
      activeIndex: n.enabled ? t : -1
    };
    return n.enabled && (t += 1), a;
  });
}
function Wr(e, t, n) {
  return e.filter((o) => o.shot.enabled && t[o.key]).map((o) => ({
    shotId: o.shot.id,
    activeIndex: o.activeIndex,
    path: n[o.key] ?? ""
  }));
}
function Gr(e, t, n) {
  const o = {};
  return e.forEach((a) => {
    const d = a.sourceIndex + 1;
    o[a.key] = a.shot.enabled && d >= t && d <= n;
  }), o;
}
function Jr(e, t) {
  return e === "second_pass" ? t === "zh" ? "二采" : "2nd pass" : e === "first_pass" ? t === "zh" ? "一采" : "1st pass" : t === "zh" ? "旧结果" : "Legacy";
}
function Yr({ plan: e, language: t, adapter: n, context: o }) {
  const a = _e(() => ir(e), [e]), [d, s] = $({}), [l, h] = $({}), [u, f] = $(null), [x, c] = $(0), p = n.unavailableReason("secondPass", o);
  ze(() => {
    let w = !1;
    const k = {};
    return a.forEach((y) => {
      k[y.key] = { loading: !0, response: { found: !1, results: [] } };
    }), s(k), a.forEach((y) => {
      n.fetchShotResults(o, e, y.shot, y.activeIndex).then((S) => {
        w || s((E) => ({ ...E, [y.key]: { loading: !1, response: S } }));
      }).catch((S) => {
        w || s((E) => ({ ...E, [y.key]: { loading: !1, response: { found: !1, results: [], error: String(S) } } }));
      });
    }), () => {
      w = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((w) => w.id).join("|"), x, n.id, o.settings.apiKey, o.settings.taskMappings]);
  const C = async (w, k) => {
    if (!p) {
      h((y) => ({ ...y, [k]: { state: "queued" } }));
      try {
        await n.runSecondPass(o, {
          plan: e,
          shotId: w,
          sourcePath: k,
          requestId: `td2_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`
        }), h((y) => ({ ...y, [k]: { state: "done" } })), c((y) => y + 1);
      } catch (y) {
        h((S) => ({ ...S, [k]: { state: "error", message: String(y instanceof Error ? y.message : y) } }));
      }
    }
  };
  return /* @__PURE__ */ r("section", { class: "td-postprocess td-second-pass-panel", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "单独二采" : "Standalone second pass" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "从满意的一采抽卡直接执行二采，不重跑一采，也不启动 Impact 循环。" : "Refine a selected first-pass result without rerunning the first pass or the Impact loop." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: /* @__PURE__ */ r("button", { onClick: () => c((w) => w + 1), children: [
        "↻ ",
        t === "zh" ? "刷新结果" : "Refresh"
      ] }) })
    ] }),
    p && /* @__PURE__ */ r("div", { class: "td-post-warning", children: p }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: a.map((w) => {
      const k = d[w.key], y = de((k == null ? void 0 : k.response) ?? { results: [] });
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
        k != null && k.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading results…" }) : k != null && k.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : y.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: y.map((S) => {
          const E = ve(S), g = l[S.path], I = Kr(S);
          return /* @__PURE__ */ r("div", { class: "td-second-pass-result", children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", onClick: () => E && f({ path: E, title: `${w.shot.id} · ${w.shot.title}` }), children: [
              E ? /* @__PURE__ */ r(He, { src: E, alt: se(S.path) }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  Jr(S.stage, t),
                  (S.stage === "legacy_unknown" || !S.stage) && /* @__PURE__ */ r("em", { children: t === "zh" ? "兼容" : "Compatible" })
                ] }),
                /* @__PURE__ */ r("span", { title: S.path, children: se(S.path) }),
                /* @__PURE__ */ r("small", { children: S.bytes ? `${(S.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "primary td-second-pass-run", disabled: !!p || !I || (g == null ? void 0 : g.state) === "queued", title: p ?? "", onClick: () => void C(w.shot.id, S.path), children: I ? (g == null ? void 0 : g.state) === "queued" ? t === "zh" ? "排队/执行中…" : "Queued/running…" : (g == null ? void 0 : g.state) === "done" ? t === "zh" ? "二采完成" : "Completed" : t === "zh" ? "进行二采" : "Run second pass" : t === "zh" ? "已是二采" : "Already refined" }),
            (g == null ? void 0 : g.state) === "error" && /* @__PURE__ */ r("div", { class: "td-second-pass-error", children: g.message })
          ] }, S.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "没有可用的一采结果" : "No first-pass result available" })
      ] }, w.key);
    }) }),
    u && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => f(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (w) => w.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: u.title }),
        /* @__PURE__ */ r("button", { onClick: () => f(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: u.path, controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { children: se(u.path) })
    ] }) })
  ] });
}
function Qr({ plan: e, language: t, adapter: n, context: o }) {
  const [a, d] = $("merge");
  return /* @__PURE__ */ r("section", { class: "td-postprocess-shell", children: [
    /* @__PURE__ */ r("div", { class: "td-post-mode-tabs", role: "tablist", children: [
      /* @__PURE__ */ r("button", { class: a === "merge" ? "active" : "", role: "tab", "aria-selected": a === "merge", onClick: () => d("merge"), children: t === "zh" ? "合并视频" : "Merge videos" }),
      /* @__PURE__ */ r("button", { class: a === "second-pass" ? "active" : "", role: "tab", "aria-selected": a === "second-pass", onClick: () => d("second-pass"), children: t === "zh" ? "单独二采" : "Standalone second pass" })
    ] }),
    a === "merge" ? /* @__PURE__ */ r(Xr, { plan: e, language: t, adapter: n, context: o }) : /* @__PURE__ */ r(Yr, { plan: e, language: t, adapter: n, context: o })
  ] });
}
function Xr({ plan: e, language: t, adapter: n, context: o }) {
  const a = _e(() => ir(e), [e]), [d, s] = $({}), [l, h] = $({}), [u, f] = $({}), [x, c] = $(null), [p, C] = $(!1), [w, k] = $(""), [y, S] = $(""), [E, g] = $({ found: !1, results: [] }), [I, O] = $(!1), [D, N] = $(!1), [b, P] = $(""), [F, j] = $(0), [G, Q] = $("1"), [W, re] = $(String(a.length || 1)), le = a.filter((v) => v.shot.enabled), xe = le.length > 0 && le.every((v) => l[v.key]), V = Wr(a, l, u), X = V.filter((v) => !v.path), Ce = a.some((v) => {
    var A;
    return l[v.key] && ((A = d[v.key]) == null ? void 0 : A.loading);
  }), Ie = a.reduce(
    (v, A) => v + (A.shot.enabled && l[A.key] ? A.shot.durationSeconds : 0),
    0
  ), te = _e(() => de(E), [E]), ie = te.find((v) => v.path === b) ?? te[0], ce = n.unavailableReason("mergeVideos", o);
  ze(() => {
    let v = !1;
    const A = {}, T = {};
    return a.forEach((R) => {
      A[R.key] = R.shot.enabled, T[R.key] = { loading: !0, response: { found: !1, results: [] } };
    }), h((R) => {
      const H = {};
      return a.forEach((q) => {
        H[q.key] = q.shot.enabled ? R[q.key] ?? A[q.key] : !1;
      }), H;
    }), s(T), k(""), a.forEach((R) => {
      n.fetchShotResults(o, e, R.shot, R.activeIndex).then((H) => {
        if (v) return;
        const q = de(H);
        s((J) => ({ ...J, [R.key]: { loading: !1, response: H } })), f((J) => {
          var Z;
          return {
            ...J,
            [R.key]: q.some((ee) => ee.path === J[R.key]) ? J[R.key] : ((Z = q[0]) == null ? void 0 : Z.path) ?? ""
          };
        });
      }).catch((H) => {
        v || s((q) => ({
          ...q,
          [R.key]: { loading: !1, response: { found: !1, results: [], error: String(H) } }
        }));
      });
    }), () => {
      v = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((v) => `${v.id}:${v.enabled}`).join("|"), F, n.id, o.settings.apiKey, o.settings.taskMappings]), ze(() => {
    let v = !1;
    return O(!0), n.fetchMergedResults(o, e).then((A) => {
      if (v) return;
      const T = de(A);
      g(A), P((R) => {
        var H;
        return T.some((q) => q.path === R) ? R : ((H = T[0]) == null ? void 0 : H.path) ?? "";
      });
    }).catch((A) => {
      v || g({ found: !1, results: [], error: String(A) });
    }).finally(() => {
      v || O(!1);
    }), () => {
      v = !0;
    };
  }, [e.project.name, e.project.runId, F, n.id, o.settings.apiKey, o.settings.taskMappings]);
  const qe = () => {
    const v = !xe;
    h((A) => {
      const T = { ...A };
      return le.forEach((R) => {
        T[R.key] = v;
      }), T;
    });
  }, fe = () => {
    const v = Number(G), A = Number(W);
    if (!Number.isInteger(v) || !Number.isInteger(A) || v < 1 || A < v || A > a.length) {
      window.alert(t === "zh" ? `请输入有效范围：1 ≤ m ≤ n ≤ ${a.length}` : `Enter a valid range: 1 ≤ m ≤ n ≤ ${a.length}`);
      return;
    }
    h(Gr(a, v, A));
  }, ye = async () => {
    if (!V.length) {
      window.alert(t === "zh" ? "请至少选择一个镜头" : "Select at least one shot.");
      return;
    }
    if (X.length) {
      window.alert(t === "zh" ? `以下已选镜头没有可用结果：${X.map((v) => v.shotId).join("、")}` : `Selected shots without a result: ${X.map((v) => v.shotId).join(", ")}`);
      return;
    }
    C(!0), k("");
    try {
      const v = await n.mergeVideos(o, {
        projectName: e.project.name,
        runId: e.project.runId,
        selections: V,
        requestId: `tdm_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`
      });
      v ? (g((A) => ({ found: !0, results: [v, ...de(A).filter((T) => T.path !== v.path)] })), P(v.path)) : j((A) => A + 1);
    } catch (v) {
      k(String(v instanceof Error ? v.message : v));
    } finally {
      C(!1);
    }
  }, ge = async () => {
    N(!0), S("");
    try {
      await n.openResultFolder(o, e);
    } catch (v) {
      S(String(v instanceof Error ? v.message : v));
    } finally {
      N(!1);
    }
  }, pe = ve(ie);
  return /* @__PURE__ */ r("section", { class: "td-postprocess", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并视频" : "Merge videos" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "从每个镜头选择一个结果，按当前分镜顺序进行无损合并。" : "Choose one result per shot and merge them losslessly in storyboard order." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: [
        n.capabilities.openResultFolder && /* @__PURE__ */ r("button", { disabled: D, onClick: ge, children: [
          "📁 ",
          D ? t === "zh" ? "正在打开…" : "Opening…" : t === "zh" ? "打开结果文件夹" : "Open results folder"
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => j((v) => v + 1), children: [
          "↻ ",
          t === "zh" ? "刷新结果" : "Refresh"
        ] }),
        /* @__PURE__ */ r("button", { onClick: qe, children: xe ? t === "zh" ? "全部取消" : "Clear all" : t === "zh" ? "一键全选" : "Select all" })
      ] })
    ] }),
    y && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "打开结果文件夹失败：" : "Unable to open results folder: ",
      y
    ] }),
    /* @__PURE__ */ r("div", { class: "td-post-summary", children: [
      /* @__PURE__ */ r("span", { children: t === "zh" ? `已选择 ${V.length}/${le.length} 个启用镜头` : `${V.length}/${le.length} enabled shots selected` }),
      /* @__PURE__ */ r("span", { children: t === "zh" ? `预计时长 ${Ie.toFixed(1)} 秒` : `Estimated duration ${Ie.toFixed(1)} sec` }),
      /* @__PURE__ */ r("div", { class: "td-post-range", role: "group", "aria-label": t === "zh" ? "合并视频范围" : "Merge video range", children: [
        /* @__PURE__ */ r("span", { children: t === "zh" ? "范围" : "Range" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: a.length, step: "1", value: G, "aria-label": t === "zh" ? "起始镜头 m" : "Start shot m", onInput: (v) => Q(v.currentTarget.value) }),
        /* @__PURE__ */ r("span", { children: "—" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: a.length, step: "1", value: W, "aria-label": t === "zh" ? "结束镜头 n" : "End shot n", onInput: (v) => re(v.currentTarget.value) }),
        /* @__PURE__ */ r("button", { disabled: !a.length, onClick: fe, children: t === "zh" ? "确认范围" : "Apply range" })
      ] }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: p || Ce || !V.length || !!X.length || !!ce, title: ce ?? "", onClick: ye, children: p ? t === "zh" ? "正在合并…" : "Merging…" : t === "zh" ? "合并所选视频" : "Merge selected videos" })
    ] }),
    ce && /* @__PURE__ */ r("div", { class: "td-post-warning", children: ce }),
    w && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "合并失败：" : "Merge failed: ",
      w
    ] }),
    X.length > 0 && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "已选镜头中存在尚未生成视频的镜头。" : "Some selected shots do not have generated videos yet." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: a.map((v) => {
      const A = d[v.key], T = de((A == null ? void 0 : A.response) ?? { results: [] }), R = !!l[v.key];
      return /* @__PURE__ */ r("article", { class: `td-post-shot ${R ? "selected" : ""} ${v.shot.enabled ? "" : "disabled"}`, children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: R, disabled: !v.shot.enabled, onChange: (H) => h((q) => ({ ...q, [v.key]: H.currentTarget.checked })) }),
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("strong", { children: v.shot.id }),
              /* @__PURE__ */ r("em", { children: v.shot.title })
            ] })
          ] }),
          /* @__PURE__ */ r("span", { children: [
            v.shot.durationSeconds,
            "s"
          ] })
        ] }),
        !v.shot.enabled && /* @__PURE__ */ r("div", { class: "td-post-shot-disabled-note", children: t === "zh" ? "该镜头当前已禁用：历史结果可以预览，但不能参加合并。" : "This shot is disabled: historical results can be previewed but cannot be merged." }),
        A != null && A.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading generated results…" }) : A != null && A.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : T.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: T.map((H, q) => {
          const J = ve(H), Z = u[v.key] === H.path, ee = or(H.path, T.length - q);
          return /* @__PURE__ */ r("div", { class: `td-post-result ${Z ? "selected" : ""}`, children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", role: "radio", "aria-checked": Z, onClick: () => f((Re) => ({ ...Re, [v.key]: H.path })), children: [
              J ? /* @__PURE__ */ r(He, { src: J, alt: `${v.shot.title} ${t === "zh" ? "结果" : "result"} ${ee}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  t === "zh" ? `结果 ${ee}` : `Result ${ee}`,
                  q === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
                ] }),
                /* @__PURE__ */ r("span", { title: H.path, children: se(H.path) }),
                /* @__PURE__ */ r("small", { children: H.bytes ? `${(H.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "td-post-result-play", disabled: !J, title: t === "zh" ? "播放预览" : "Play preview", onClick: () => J && c({ path: J, title: `${v.shot.id} · ${v.shot.title}` }), children: "▶" })
          ] }, H.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "未找到这个镜头的生成结果" : "No generated result found for this shot" })
      ] }, v.key);
    }) }),
    /* @__PURE__ */ r("section", { class: "td-post-merged", children: [
      /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并结果" : "Merged results" }),
        /* @__PURE__ */ r("span", { class: `td-result-state ${te.length ? "found" : ""}`, children: I ? t === "zh" ? "查询中" : "Checking" : t === "zh" ? `${te.length} 个结果` : `${te.length} results` })
      ] }) }),
      I ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "正在查询合并结果…" : "Loading merged results…" }) : E.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: t === "zh" ? "无法查询合并结果" : "Unable to query merged results" }) : ie && pe ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
        /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
          /* @__PURE__ */ r("video", { src: pe, controls: !0, preload: "metadata", playsInline: !0 }, ie.path),
          /* @__PURE__ */ r("div", { class: "td-generated-meta", title: ie.path, children: ie.path })
        ] }),
        /* @__PURE__ */ r("div", { class: "td-result-list", children: te.map((v, A) => {
          const T = ve(v);
          return /* @__PURE__ */ r("button", { class: `td-result-item ${v.path === ie.path ? "selected" : ""}`, onClick: () => P(v.path), children: [
            T ? /* @__PURE__ */ r(He, { src: T, alt: `${t === "zh" ? "合并结果" : "Merged result"} ${te.length - A}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
            /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
              /* @__PURE__ */ r("strong", { children: [
                t === "zh" ? `合并结果 ${te.length - A}` : `Merged result ${te.length - A}`,
                A === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
              ] }),
              /* @__PURE__ */ r("span", { children: se(v.path) }),
              /* @__PURE__ */ r("small", { children: v.bytes ? `${(v.bytes / 1024 / 1024).toFixed(1)} MB` : v.taskId ? `task ${v.taskId}` : "" })
            ] })
          ] }, v.path);
        }) })
      ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "还没有合并结果" : "No merged result yet" })
    ] }),
    x && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => c(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (v) => v.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: x.title }),
        /* @__PURE__ */ r("button", { "aria-label": t === "zh" ? "关闭预览" : "Close preview", onClick: () => c(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: x.path, controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { title: x.path, children: se(x.path) })
    ] }) })
  ] });
}
function Zr(e) {
  const t = e.reduce((n, o) => {
    const a = /^shot_(\d+)$/i.exec(o.id.trim());
    return a ? Math.max(n, Number(a[1])) : n;
  }, 0);
  return Math.max(t, e.length) + 1;
}
function en(e, t = 5) {
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
function Tt(e, t, n) {
  const o = Zr(e), a = Array.from({ length: t }, (d, s) => en(o + s, n));
  return [...e, ...a];
}
async function he(e) {
  const t = await e.json();
  if (!e.ok) throw new Error(t.error || t.message || `HTTP ${e.status}`);
  return t;
}
function tn(e, t) {
  return new Error(`${e} adapter does not support ${t}`);
}
const it = {
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
  async uploadAsset(e, t, n, o) {
    const a = new FormData();
    a.append("projectName", t), a.append("kind", n), a.append("file", o);
    const d = await fetch("/theodore-director/v1/assets", { method: "POST", body: a }), s = await he(d);
    if (!s.path) throw new Error("上传响应缺少 path");
    return s.path;
  },
  async fetchShotResults(e, t, n, o) {
    const a = new URLSearchParams({
      projectName: t.project.name,
      runId: t.project.runId,
      shotId: n.id,
      activeIndex: String(o)
    });
    return he(await fetch(`/theodore-director/v1/generated-video?${a.toString()}`));
  },
  async fetchMergedResults(e, t) {
    const n = new URLSearchParams({ projectName: t.project.name, runId: t.project.runId });
    return he(await fetch(`/theodore-director/v1/postprocess/merged-videos?${n.toString()}`));
  },
  async mergeVideos(e, t) {
    const n = await fetch("/theodore-director/v1/postprocess/merge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t)
    });
    await he(n);
  },
  async runSecondPass(e, t) {
    if (!e.queueSecondPass) throw new Error(this.unavailableReason("secondPass", e) ?? "单独二采不可用");
    await e.queueSecondPass(t);
  },
  async openResultFolder(e, t) {
    const n = await fetch("/theodore-director/v1/postprocess/open-folder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectName: t.project.name, runId: t.project.runId })
    });
    await he(n);
  }
};
function rn({ language: e, settings: t, onChange: n, rememberSecret: o, onRememberSecretChange: a, onClearSavedSecret: d, onProjectSettingChange: s }) {
  return /* @__PURE__ */ r($e, { children: [
    /* @__PURE__ */ r("label", { children: [
      "RunningHub API Key",
      /* @__PURE__ */ r("input", { type: "password", autocomplete: "off", value: t.apiKey, placeholder: e === "zh" ? "默认仅保存在当前页面内存" : "Kept only in page memory by default", onInput: (l) => n({ ...t, apiKey: l.currentTarget.value }) })
    ] }),
    /* @__PURE__ */ r("div", { class: "td-runtime-key-controls", children: [
      /* @__PURE__ */ r("label", { children: [
        /* @__PURE__ */ r("input", { type: "checkbox", checked: o, onChange: (l) => a(l.currentTarget.checked) }),
        /* @__PURE__ */ r("span", { children: e === "zh" ? "在此设备记住 API Key" : "Remember API Key on this device" })
      ] }),
      /* @__PURE__ */ r("button", { type: "button", onClick: d, children: e === "zh" ? "清除已保存 Key" : "Clear saved Key" }),
      /* @__PURE__ */ r("small", { children: e === "zh" ? "默认不保存；公共电脑不建议启用。Key 仅写入当前浏览器站点存储，不进入工作流或导出文件。" : "Off by default; avoid on shared computers. The key is stored only in this browser and never enters the workflow or exports." })
    ] }),
    /* @__PURE__ */ r("label", { children: [
      e === "zh" ? "任务映射（每行一项）" : "Task mappings (one per line)",
      /* @__PURE__ */ r("textarea", { rows: 5, value: t.taskMappings, placeholder: `完整工作流 taskId
shot_003=taskId
merged=taskId`, onInput: (l) => {
        const h = l.currentTarget.value;
        n({ ...t, taskMappings: h }), s("runningHubTaskMappings", h);
      } }),
      /* @__PURE__ */ r("small", { children: e === "zh" ? "单独 taskId 按启用镜头顺序归属；也可显式指定镜头或合并任务。任务映射属于项目数据，会随工作流保存、导入和导出。" : "A bare taskId follows enabled-shot order; shot and merged tasks can be explicit. Task mappings are project data and follow workflow save, import, and export." })
    ] })
  ] });
}
const nn = /* @__PURE__ */ new Set(["mp4", "mov", "mkv", "webm", "avi"]);
function ar(e) {
  const t = e.toLowerCase();
  return t === "runninghub.cn" || t.endsWith(".runninghub.cn");
}
function Pt(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.split(/\r?\n|,/).map((o) => o.trim()).filter(Boolean).forEach((o) => {
    const a = o.indexOf("="), d = a >= 0 ? o.slice(0, a).trim() : "workflow", s = (a >= 0 ? o.slice(a + 1) : o).trim();
    if (!s || !/^[A-Za-z0-9_-]+$/.test(s)) return;
    const l = d.toLowerCase() === "merged" ? "merged" : d || "workflow", h = `${l}\0${s}`;
    n.has(h) || (n.add(h), t.push({ target: l, taskId: s }));
  }), t;
}
function dr(e, t = window.location) {
  const n = ar(t.hostname) ? t.origin : "https://www.runninghub.cn";
  return new URL(e, n).toString();
}
async function Et(e, t) {
  const n = await fetch(dr("/openapi/v2/query"), {
    method: "POST",
    headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" },
    body: JSON.stringify({ taskId: t })
  });
  return he(n);
}
function jt(e, t) {
  return { path: t.url, url: t.url, provider: "runninghub", taskId: e, stage: "legacy_unknown" };
}
function Mt(e) {
  return (e.results ?? []).filter((t) => {
    const n = t.outputType.toLowerCase().replace(/^\./, "");
    return nn.has(n) && /^https:\/\//i.test(t.url);
  });
}
function on(e, t, n) {
  const o = t.shots.filter((s) => s.enabled), a = o.findIndex((s) => s.id === n.id);
  if (a < 0 || !o.length) return [];
  const d = e.filter((s) => decodeURIComponent(s.url).includes(n.id));
  return d.length ? d : o.length === 1 ? e : e.length >= o.length ? e.filter((s, l) => l % o.length === a) : [];
}
const sn = {
  id: "runninghub",
  label: "RunningHub",
  displayLabel: () => "RunningHub",
  matchesHostname: ar,
  SettingsPanel: rn,
  assetBanner(e, t) {
    const n = this.unavailableReason("uploadAsset", e);
    return {
      ready: !n,
      message: n ?? (t === "zh" ? "RunningHub 上传已启用；素材路径将保存官方 fileName。" : "RunningHub upload is ready; the official fileName will be stored.")
    };
  },
  capabilities: { uploadAsset: !0, queryShotResults: !0, queryMergedResults: !0, mergeVideos: !0, secondPass: !0, openResultFolder: !1 },
  unavailableReason(e, t) {
    return this.capabilities[e] ? ["uploadAsset", "queryShotResults", "queryMergedResults"].includes(e) && !t.settings.apiKey.trim() ? "请先填写 RunningHub API Key" : e === "mergeVideos" && !t.queueMerge ? "当前工作流缺少 RunningHub 合并支流" : e === "secondPass" && !t.queueSecondPass ? "当前工作流缺少后处理单独二采支流" : null : e === "openResultFolder" ? "RunningHub 无法打开本地结果文件夹" : `RunningHub 不支持 ${e}`;
  },
  async uploadAsset(e, t, n, o) {
    var h;
    const a = this.unavailableReason("uploadAsset", e);
    if (a) throw new Error(a);
    const d = new FormData();
    d.append("file", o);
    const s = await fetch(dr("/openapi/v2/media/upload/binary"), { method: "POST", headers: { Authorization: `Bearer ${e.settings.apiKey.trim()}` }, body: d }), l = await he(s);
    if (l.code !== 0 || !((h = l.data) != null && h.fileName)) throw new Error(l.message || "RunningHub 上传响应缺少 fileName");
    return l.data.fileName;
  },
  async fetchShotResults(e, t, n) {
    const o = e.settings.apiKey.trim();
    if (!o) return { found: !1, results: [], error: this.unavailableReason("queryShotResults", e) ?? void 0 };
    const a = Pt(e.settings.taskMappings).filter((h) => h.target === "workflow" || h.target === n.id);
    if (!a.length) return { found: !1, results: [], error: `请添加工作流 taskId，或填写 ${n.id}=taskId` };
    const d = [], s = [];
    for (const h of a) {
      const u = await Et(o, h.taskId), f = String(u.status ?? "").toUpperCase();
      if (f && f !== "SUCCESS") {
        ["FAILED", "ERROR", "CANCELED", "CANCELLED"].includes(f) && s.push(u.errorMessage || `${h.taskId}: ${f}`);
        continue;
      }
      const x = Mt(u), c = h.target === n.id ? x : on(x, t, n);
      d.push(...c.map((p) => jt(h.taskId, p)));
    }
    const l = [...new Map(d.map((h) => [h.url || h.path, h])).values()];
    return { found: l.length > 0, count: l.length, results: l, error: l.length ? void 0 : s.join("；") || void 0 };
  },
  async fetchMergedResults(e) {
    const t = e.settings.apiKey.trim();
    if (!t) return { found: !1, results: [], error: this.unavailableReason("queryMergedResults", e) ?? void 0 };
    const n = Pt(e.settings.taskMappings).filter((d) => d.target === "merged");
    if (!n.length) return { found: !1, results: [], error: "请添加 merged=taskId 合并任务映射" };
    const o = [];
    for (const d of n) {
      const s = await Et(t, d.taskId);
      o.push(...Mt(s).map((l) => jt(d.taskId, l)));
    }
    const a = [...new Map(o.map((d) => [d.url || d.path, d])).values()];
    return { found: a.length > 0, count: a.length, results: a };
  },
  async mergeVideos(e, t) {
    const n = this.unavailableReason("mergeVideos", e);
    if (n) throw new Error(n);
    return e.queueMerge(t);
  },
  async runSecondPass(e, t) {
    const n = this.unavailableReason("secondPass", e);
    if (n) throw new Error(n);
    await e.queueSecondPass(t);
  },
  async openResultFolder() {
    throw tn("runninghub", "openResultFolder");
  }
}, at = [sn, it];
function Nt(e, t = typeof window > "u" ? "localhost" : window.location.hostname) {
  return e.mode !== "auto" ? an(e.mode) : at.find((n) => n.id !== "local" && n.matchesHostname(t)) ?? it;
}
function an(e) {
  return at.find((t) => t.id === e) ?? it;
}
function dn(e, t = {}) {
  return { settings: e, ...t };
}
const dt = "theodore-director.runninghub-api-key";
function lt() {
  try {
    return typeof window > "u" ? null : window.localStorage;
  } catch {
    return null;
  }
}
function ln(e = lt()) {
  var t;
  try {
    return ((t = e == null ? void 0 : e.getItem(dt)) == null ? void 0 : t.trim()) || null;
  } catch {
    return null;
  }
}
function cn(e, t = lt()) {
  const n = e.trim();
  if (!n || !t) return !1;
  try {
    return t.setItem(dt, n), !0;
  } catch {
    return !1;
  }
}
function Ye(e = lt()) {
  if (!e) return !1;
  try {
    return e.removeItem(dt), !0;
  } catch {
    return !1;
  }
}
const lr = (e) => `${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, Ne = (e) => JSON.parse(JSON.stringify(e)), pn = { image: "图片", video: "视频", audio: "音频" };
function Lt(e) {
  var n, o;
  const t = Ne(e);
  return t.schemaVersion = 4, (n = t.project.id) != null && n.trim() || (t.project.id = lr("project")), (o = t.project).runningHubTaskMappings ?? (o.runningHubTaskMappings = ""), t.shots = t.shots.map((a) => ({
    ...a,
    latentRelay: a.latentRelay ?? !0,
    secondSampling: a.secondSampling ?? !0
  })), t;
}
function un(e) {
  return e.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function hn(e) {
  const t = lr(e);
  return { id: t, alias: t, kind: e, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: e === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function mn(e) {
  var o;
  if ((o = navigator.clipboard) != null && o.writeText)
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
function fn({ initial: e, onSave: t, onClose: n, supportsSecondSampling: o, queueSecondPass: a, queueMerge: d }) {
  const [s, l] = $(() => Lt(e)), [h] = $(() => ln()), [u, f] = $("shots"), [x, c] = $(0), [p, C] = $(() => navigator.language.startsWith("zh") ? "zh" : "en"), [w, k] = $({}), [y, S] = $(!1), [E, g] = $(!0), [I, O] = $(0), [D, N] = $({ found: !1, results: [] }), [b, P] = $(""), [F, j] = $(!1), [G, Q] = $(""), [W, re] = $(!1), [le, xe] = $(!1), [V, X] = $([]), [Ce, Ie] = $("5"), [te, ie] = $("1"), [ce, qe] = $("5"), [fe, ye] = $(() => ({ mode: "auto", apiKey: h ?? "", taskMappings: e.project.runningHubTaskMappings ?? "" })), [ge, pe] = $(() => ({ mode: "auto", apiKey: h ?? "", taskMappings: e.project.runningHubTaskMappings ?? "" })), [v, A] = $(h !== null), T = s.shots[Math.min(x, s.shots.length - 1)], R = _e(() => T ? nr(s, T) : null, [s, T]), H = T != null && T.enabled ? s.shots.slice(0, x).filter((i) => i.enabled).length : -1, q = s.shots.length > 0 && s.shots.every((i) => i.secondSampling), J = V.length > 0 && V.every((i) => i.enabled), Z = _e(() => de(D), [D]), ee = Z.find((i) => i.path === b) ?? Z[0], Re = ve(ee), we = Nt(fe), ct = Nt(ge), Ae = dn(fe, { queueMerge: d, queueSecondPass: a }), pt = ct.SettingsPanel, Ke = we.assetBanner(Ae, p), ut = (i, m, _) => we.uploadAsset(Ae, i, m, _), M = (i) => l((m) => {
    const _ = Ne(m);
    return i(_), _;
  }), ht = (i, m) => M((_) => {
    const z = i + m;
    z < 0 || z >= _.shots.length || ([_.shots[i], _.shots[z]] = [_.shots[z], _.shots[i]], c(z));
  }), cr = (i) => M((m) => {
    m.shots.length <= 1 || (m.shots.splice(i, 1), c((_) => _ > i ? _ - 1 : _ === i ? Math.min(i, m.shots.length - 1) : _));
  }), pr = () => {
    X(Ne(s.shots)), re(!0);
  }, ur = () => {
    const i = Number(Ce);
    if (!Number.isFinite(i) || i <= 0) {
      window.alert(p === "zh" ? "统一时长必须大于 0 秒" : "The shared duration must be greater than 0 seconds.");
      return;
    }
    X((m) => m.map((_) => ({ ..._, durationSeconds: i })));
  }, hr = () => {
    const i = Number(te), m = Number(ce);
    if (!Number.isInteger(i) || i < 1 || i > 100) {
      window.alert(p === "zh" ? "新增镜头数量必须是 1–100 的整数" : "The shot count must be an integer from 1 to 100.");
      return;
    }
    if (!Number.isFinite(m) || m <= 0) {
      window.alert(p === "zh" ? "新增镜头时长必须大于 0 秒" : "The new-shot duration must be greater than 0 seconds.");
      return;
    }
    X((_) => Tt(_, i, m));
  }, mr = () => {
    const i = !J;
    X((m) => m.map((_) => ({ ..._, enabled: i })));
  }, fr = () => {
    if (V.some((i) => !Number.isFinite(i.durationSeconds) || i.durationSeconds <= 0)) {
      window.alert(p === "zh" ? "每个镜头的时长都必须大于 0 秒" : "Every shot duration must be greater than 0 seconds.");
      return;
    }
    M((i) => {
      i.shots = Ne(V);
    }), c((i) => Math.min(i, V.length - 1)), re(!1);
  }, gr = () => {
    const i = URL.createObjectURL(new Blob([JSON.stringify(s, null, 2)], { type: "application/json" })), m = document.createElement("a");
    m.href = i, m.download = `${un(s.project.name)}.director.json`, m.click(), URL.revokeObjectURL(i);
  }, br = () => {
    const i = Ur(s);
    if (i.length) {
      window.alert(`计划未通过校验：

${i.join(`
`)}`);
      return;
    }
    t(s);
  }, vr = () => {
    const i = { ...ge };
    M((m) => {
      m.project.runningHubTaskMappings = i.taskMappings;
    }), ye(i), v && i.apiKey.trim() ? cn(i.apiKey) || window.alert(p === "zh" ? "浏览器拒绝本地保存 API Key；本次会话仍可继续使用。" : "The browser blocked local API Key storage; it remains available for this session.") : Ye();
  }, _r = () => {
    Ye(), A(!1), ye((i) => ({ ...i, apiKey: "" })), pe((i) => ({ ...i, apiKey: "" }));
  }, xr = (i) => {
    const m = Lt(i);
    l(m), ye((_) => ({ ..._, taskMappings: m.project.runningHubTaskMappings ?? "" })), pe((_) => ({ ..._, taskMappings: m.project.runningHubTaskMappings ?? "" })), c(0);
  };
  return ze(() => {
    let i = !1;
    return T ? (j(!0), we.fetchShotResults(Ae, s, T, H).then((m) => {
      if (i) return;
      const _ = de(m);
      N(m), P((z) => {
        var L;
        return _.some((Y) => Y.path === z) ? z : ((L = _[0]) == null ? void 0 : L.path) ?? "";
      });
    }).catch((m) => {
      i || (N({ found: !1, results: [], error: String(m) }), P(""));
    }).finally(() => {
      i || j(!1);
    }), () => {
      i = !0;
    }) : (N({ found: !1, results: [] }), P(""), j(!1), () => {
      i = !0;
    });
  }, [s.project.name, s.project.runId, T == null ? void 0 : T.id, T == null ? void 0 : T.enabled, H, I, we.id, fe.apiKey, fe.taskMappings]), /* @__PURE__ */ r("div", { class: "td-shell", children: [
    /* @__PURE__ */ r("header", { children: [
      /* @__PURE__ */ r("h1", { children: ue(p, "title") }),
      /* @__PURE__ */ r("div", { class: "td-actions", children: [
        /* @__PURE__ */ r("button", { onClick: gr, children: "导出 / Export" }),
        /* @__PURE__ */ r("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ r("input", { type: "file", accept: "application/json,.json", onChange: async (i) => {
            var _;
            const m = (_ = i.currentTarget.files) == null ? void 0 : _[0];
            if (m)
              try {
                const z = JSON.parse(await m.text());
                if (!z.project || !Array.isArray(z.shots) || !Array.isArray(z.assets)) throw new Error("不是有效的 Theodore Director Plan");
                xr(z);
              } catch (z) {
                window.alert(String(z));
              }
          } })
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => C(p === "zh" ? "en" : "zh"), children: p === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: br, children: ue(p, "save") }),
        /* @__PURE__ */ r("button", { onClick: n, children: ue(p, "close") })
      ] })
    ] }),
    /* @__PURE__ */ r("nav", { children: ["shots", "assets", "settings", "postprocess"].map((i) => /* @__PURE__ */ r("button", { class: u === i ? "active" : "", onClick: () => f(i), children: ue(p, i) })) }),
    /* @__PURE__ */ r("main", { children: [
      u === "shots" && /* @__PURE__ */ r("div", { class: "td-shots", children: [
        /* @__PURE__ */ r("aside", { class: "td-shot-sidebar", children: [
          o && /* @__PURE__ */ r("button", { class: `wide td-bulk-toggle ${q ? "active" : ""}`, onClick: () => M((i) => {
            const m = !i.shots.every((_) => _.secondSampling);
            i.shots.forEach((_) => {
              _.secondSampling = m;
            });
          }), children: p === "zh" ? `全部二次采样：${q ? "开" : "关"}` : `Second sampling for all: ${q ? "ON" : "OFF"}` }),
          /* @__PURE__ */ r("div", { class: "td-shot-list", children: s.shots.map((i, m) => /* @__PURE__ */ r("div", { class: `td-shot-card ${m === x ? "selected" : ""}`, onClick: () => c(m), children: [
            /* @__PURE__ */ r("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ r("button", { class: "td-shot-delete", disabled: s.shots.length <= 1, title: p === "zh" ? s.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : s.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": p === "zh" ? "删除镜头" : "Delete shot", onClick: (_) => {
              _.stopPropagation(), cr(m);
            }, children: "×" }) }),
            /* @__PURE__ */ r("strong", { children: [
              m + 1,
              ". ",
              i.title
            ] }),
            /* @__PURE__ */ r("span", { children: [
              i.durationSeconds,
              "s · ",
              i.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-move-actions", children: [
              /* @__PURE__ */ r("button", { title: p === "zh" ? "上移镜头" : "Move shot up", onClick: (_) => {
                _.stopPropagation(), ht(m, -1);
              }, children: "↑" }),
              /* @__PURE__ */ r("button", { title: p === "zh" ? "下移镜头" : "Move shot down", onClick: (_) => {
                _.stopPropagation(), ht(m, 1);
              }, children: "↓" })
            ] })
          ] }, i.id)) }),
          /* @__PURE__ */ r("button", { class: "wide", onClick: () => M((i) => {
            const m = i.shots.length;
            i.shots = Tt(i.shots, 1, 5), c(m);
          }), children: [
            "＋ ",
            ue(p, "addShot")
          ] }),
          /* @__PURE__ */ r("div", { class: "td-shot-batch-entry", children: /* @__PURE__ */ r("button", { class: "wide", onClick: pr, children: p === "zh" ? "批量处理镜头" : "Batch edit shots" }) })
        ] }),
        T && /* @__PURE__ */ r("section", { class: "td-form", children: [
          /* @__PURE__ */ r("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ r("label", { children: [
              "ID",
              /* @__PURE__ */ r("input", { value: T.id, onInput: (i) => M((m) => {
                m.shots[x].id = i.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ r("input", { value: T.title, onInput: (i) => M((m) => {
                m.shots[x].title = i.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: T.durationSeconds, onInput: (i) => M((m) => {
                m.shots[x].durationSeconds = Number(i.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: T.enabled, onChange: (i) => M((m) => {
                  m.shots[x].enabled = i.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: H === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: T.latentRelay, onChange: (i) => M((m) => {
                  m.shots[x].latentRelay = i.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: [
                  "latent接力 / Relay",
                  H === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              o && /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: "开启时执行 RTX 超分和第二次 H3 采样，关闭时直接使用第一采画面", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: T.secondSampling, onChange: (i) => M((m) => {
                  m.shots[x].secondSampling = i.currentTarget.checked;
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
            /* @__PURE__ */ r(Je, { rows: 10, value: T.prompt, isReferenceValid: (i) => rr(s, T, i), onInput: (i) => M((m) => {
              m.shots[x].prompt = i.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ r("textarea", { rows: 3, value: T.negativePrompt, onInput: (i) => M((m) => {
              m.shots[x].negativePrompt = i.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ r("legend", { children: "本镜头素材 / Shot media" }),
            s.assets.map((i) => {
              const m = !T.disabledAssetIds.includes(i.id), _ = se(i.path) || i.alias, z = `{{ref:${i.alias}}}`;
              return /* @__PURE__ */ r("div", { class: `td-shot-media-card ${m ? "" : "disabled"}`, children: [
                /* @__PURE__ */ r("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ r(At, { asset: i, compact: !0 }),
                  /* @__PURE__ */ r("span", { class: "td-shot-media-kind", children: p === "zh" ? pn[i.kind] : i.kind }),
                  /* @__PURE__ */ r("label", { class: "td-shot-media-toggle", title: m ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ r("input", { type: "checkbox", checked: m, onChange: (L) => M((Y) => {
                    const ne = Y.shots[x].disabledAssetIds;
                    Y.shots[x].disabledAssetIds = L.currentTarget.checked ? ne.filter((be) => be !== i.id) : [.../* @__PURE__ */ new Set([...ne, i.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ r("button", { class: `td-shot-media-name ${G === i.id ? "copied" : ""}`, title: `${_}
${p === "zh" ? "点击复制" : "Click to copy"} ${z}`, onClick: async () => {
                  try {
                    await mn(z), Q(i.id), window.setTimeout(() => Q((L) => L === i.id ? "" : L), 1400);
                  } catch (L) {
                    window.alert(`${p === "zh" ? "复制失败" : "Copy failed"}: ${String(L)}`);
                  }
                }, children: [
                  /* @__PURE__ */ r("span", { children: _ }),
                  G === i.id && /* @__PURE__ */ r("em", { children: p === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, i.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ r("aside", { class: "td-preview", children: [
          /* @__PURE__ */ r("details", { open: y, onToggle: (i) => S(i.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: ue(p, "preview") }),
              /* @__PURE__ */ r("span", { class: "td-summary-counts", children: [
                "Picture ",
                (R == null ? void 0 : R.slots.filter((i) => i.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (R == null ? void 0 : R.slots.filter((i) => i.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (R == null ? void 0 : R.audioCount) ?? 0,
                "/3 · Files ",
                (R == null ? void 0 : R.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body", children: [
              R != null && R.errors.length ? /* @__PURE__ */ r("ul", { class: "errors", children: R.errors.map((i) => /* @__PURE__ */ r("li", { children: i })) }) : /* @__PURE__ */ r("p", { class: "ok", children: ue(p, "noErrors") }),
              /* @__PURE__ */ r("ol", { children: R == null ? void 0 : R.slots.map((i) => /* @__PURE__ */ r("li", { children: [
                /* @__PURE__ */ r("code", { children: i.label }),
                " ← ",
                i.alias
              ] })) }),
              /* @__PURE__ */ r("pre", { children: R == null ? void 0 : R.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ r("details", { open: E, onToggle: (i) => g(i.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: p === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ r("span", { class: `td-result-state ${Z.length ? "found" : ""}`, children: F ? p === "zh" ? "查询中" : "Checking" : Z.length ? p === "zh" ? `${Z.length} 个结果` : `${Z.length} results` : p === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ r("div", { class: "td-result-actions", children: /* @__PURE__ */ r("button", { onClick: () => O((i) => i + 1), children: [
                "↻ ",
                p === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              F ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: p === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : D.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: D.error }) : ee && Re ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
                /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
                  /* @__PURE__ */ r("video", { src: Re, controls: !0, preload: "metadata", playsInline: !0 }, ee.path),
                  /* @__PURE__ */ r("div", { class: "td-generated-meta", title: ee.path, children: [
                    ee.path,
                    ee.bytes ? ` · ${(ee.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                  ] })
                ] }),
                /* @__PURE__ */ r("div", { class: "td-result-list", "aria-label": p === "zh" ? "全部生成结果" : "All generated results", children: Z.map((i, m) => {
                  const _ = ve(i), z = or(i.path, Z.length - m), L = i.modifiedAt ? new Date(i.modifiedAt * 1e3).toLocaleString(p === "zh" ? "zh-CN" : "en-US") : "";
                  return /* @__PURE__ */ r("button", { class: `td-result-item ${i.path === ee.path ? "selected" : ""}`, onClick: () => P(i.path), children: [
                    _ ? /* @__PURE__ */ r(He, { src: _, alt: `${p === "zh" ? "结果" : "Result"} ${z}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: /* @__PURE__ */ r("span", { children: "×" }) }),
                    /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
                      /* @__PURE__ */ r("strong", { children: [
                        p === "zh" ? `结果 ${z}` : `Result ${z}`,
                        m === 0 && /* @__PURE__ */ r("em", { children: p === "zh" ? "最新" : "Latest" })
                      ] }),
                      /* @__PURE__ */ r("span", { title: i.path, children: se(i.path) }),
                      /* @__PURE__ */ r("small", { children: [i.bytes ? `${(i.bytes / 1024 / 1024).toFixed(1)} MB` : "", L, i.taskId ? `task ${i.taskId}` : ""].filter(Boolean).join(" · ") })
                    ] })
                  ] }, i.path);
                }) })
              ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: p === "zh" ? "未找到本段视频" : "No video found for this shot" })
            ] })
          ] })
        ] })
      ] }),
      u === "assets" && /* @__PURE__ */ r("div", { class: "td-assets", children: [
        Ke && /* @__PURE__ */ r("div", { class: `td-runtime-banner ${Ke.ready ? "ready" : ""}`, children: Ke.message }),
        /* @__PURE__ */ r("div", { class: "td-toolbar", children: [
          ["image", "video", "audio"].map((i) => /* @__PURE__ */ r("button", { onClick: () => M((m) => m.assets.push(hn(i))), children: [
            "＋ ",
            i
          ] })),
          /* @__PURE__ */ r("button", { class: "td-asset-batch-entry", onClick: () => xe(!0), children: [
            "⇧ ",
            p === "zh" ? "批量导入素材" : "Batch import assets"
          ] })
        ] }),
        s.assets.map((i, m) => /* @__PURE__ */ r("article", { children: /* @__PURE__ */ r("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ r("div", { class: "td-grid", children: [
              /* @__PURE__ */ r("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ r("input", { value: i.alias, onInput: (_) => M((z) => {
                  z.assets[m].alias = _.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ r("select", { value: i.kind, onChange: (_) => M((z) => {
                  z.assets[m].kind = _.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ r("option", { children: "image" }),
                  /* @__PURE__ */ r("option", { children: "video" }),
                  /* @__PURE__ */ r("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ r("input", { value: i.path, onInput: (_) => M((z) => {
                  z.assets[m].path = _.currentTarget.value;
                }) }),
                /* @__PURE__ */ r("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ r("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ r("input", { type: "file", accept: i.kind === "image" ? "image/*" : i.kind === "video" ? "video/*" : "audio/*", onChange: async (_) => {
                      var Y;
                      const z = _.currentTarget, L = (Y = z.files) == null ? void 0 : Y[0];
                      if (L) {
                        k((ne) => ({ ...ne, [i.id]: L.name }));
                        try {
                          const ne = await ut(s.project.name, i.kind, L);
                          M((be) => {
                            const mt = be.assets.find((yr) => yr.id === i.id);
                            mt && (mt.path = ne);
                          });
                        } catch (ne) {
                          window.alert(String(ne));
                        } finally {
                          k((ne) => {
                            const be = { ...ne };
                            return delete be[i.id], be;
                          }), z.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ r("span", { class: "td-file-name", title: w[i.id] || i.path, children: w[i.id] ? `${p === "zh" ? "上传中" : "Uploading"}: ${w[i.id]}` : se(i.path) || (p === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ r("input", { type: "number", min: "0", step: "0.1", value: i.durationSeconds ?? "", onInput: (_) => M((z) => {
                  z.assets[m].durationSeconds = _.currentTarget.value ? Number(_.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ r("input", { type: "number", value: i.fixedOrder, onInput: (_) => M((z) => {
                  z.assets[m].fixedOrder = Number(_.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ r("input", { value: i.shotIds.join(", "), onInput: (_) => M((z) => {
                  z.assets[m].shotIds = _.currentTarget.value.split(",").map((L) => L.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-flags", children: [
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: i.enabled, onChange: (_) => M((z) => {
                  z.assets[m].enabled = _.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: i.fixed, onChange: (_) => M((z) => {
                  z.assets[m].fixed = _.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              i.kind === "video" && /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: i.includeVideoAudio, onChange: (_) => M((z) => {
                  z.assets[m].includeVideoAudio = _.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ r("button", { class: "danger", onClick: () => M((_) => {
                _.assets.splice(m, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ r(At, { asset: i })
        ] }) }, i.id))
      ] }),
      u === "settings" && /* @__PURE__ */ r("section", { class: "td-form settings", children: [
        /* @__PURE__ */ r("fieldset", { class: "td-runtime-settings", children: [
          /* @__PURE__ */ r("legend", { children: p === "zh" ? "运行环境" : "Runtime" }),
          /* @__PURE__ */ r("label", { children: [
            p === "zh" ? "适配器" : "Adapter",
            /* @__PURE__ */ r("select", { value: ge.mode, onChange: (i) => pe((m) => ({ ...m, mode: i.currentTarget.value })), children: [
              /* @__PURE__ */ r("option", { value: "auto", children: p === "zh" ? "自动检测" : "Auto detect" }),
              at.map((i) => /* @__PURE__ */ r("option", { value: i.id, children: i.displayLabel(p) }, i.id))
            ] })
          ] }),
          /* @__PURE__ */ r("div", { class: "td-runtime-status", children: [
            p === "zh" ? "当前：" : "Active: ",
            /* @__PURE__ */ r("strong", { children: ct.displayLabel(p) })
          ] }),
          pt && /* @__PURE__ */ r(
            pt,
            {
              language: p,
              settings: ge,
              onChange: pe,
              rememberSecret: v,
              onRememberSecretChange: A,
              onClearSavedSecret: _r,
              onProjectSettingChange: (i, m) => {
                i === "runningHubTaskMappings" && M((_) => {
                  _.project.runningHubTaskMappings = m;
                });
              }
            }
          ),
          /* @__PURE__ */ r("div", { class: "td-runtime-apply", children: /* @__PURE__ */ r("button", { class: "primary", onClick: vr, children: p === "zh" ? "应用运行环境设置" : "Apply runtime settings" }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Project name",
          /* @__PURE__ */ r("input", { value: s.project.name, onInput: (i) => M((m) => {
            m.project.name = i.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Run ID",
          /* @__PURE__ */ r("input", { value: s.project.runId, onInput: (i) => M((m) => {
            m.project.runId = i.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "FPS",
          /* @__PURE__ */ r("input", { type: "number", value: s.defaults.fps, onInput: (i) => M((m) => {
            m.defaults.fps = Number(i.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Base seed",
          /* @__PURE__ */ r("input", { type: "number", value: s.defaults.baseSeed, onInput: (i) => M((m) => {
            m.defaults.baseSeed = Number(i.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ r(Je, { value: s.promptPrefix, isReferenceValid: (i) => Rt(s, i), onInput: (i) => M((m) => {
            m.promptPrefix = i.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ r(Je, { value: s.promptSuffix, isReferenceValid: (i) => Rt(s, i), onInput: (i) => M((m) => {
            m.promptSuffix = i.currentTarget.value;
          }) })
        ] })
      ] }),
      u === "postprocess" && /* @__PURE__ */ r(Qr, { plan: s, language: p, adapter: we, context: Ae })
    ] }),
    W && /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": p === "zh" ? "批量处理镜头" : "Batch edit shots", children: [
      /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("h2", { children: p === "zh" ? "批量处理镜头" : "Batch edit shots" }),
          /* @__PURE__ */ r("p", { children: p === "zh" ? `当前共 ${V.length} 个镜头` : `${V.length} shots` })
        ] }),
        /* @__PURE__ */ r("button", { "aria-label": p === "zh" ? "关闭" : "Close", onClick: () => re(!1), children: "×" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-tools", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            p === "zh" ? "所有镜头时长" : "Duration for all shots",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: Ce, onInput: (i) => Ie(i.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: p === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: ur, children: p === "zh" ? "一键设置所有时长" : "Set all durations" })
        ] }),
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            p === "zh" ? "新增镜头数量" : "New shot count",
            /* @__PURE__ */ r("input", { type: "number", min: "1", max: "100", step: "1", value: te, onInput: (i) => ie(i.currentTarget.value) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            p === "zh" ? "每个镜头时长" : "Duration per shot",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: ce, onInput: (i) => qe(i.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: p === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: hr, children: p === "zh" ? "批量新增镜头" : "Add shots" })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-global-actions", children: [
        /* @__PURE__ */ r("span", { children: p === "zh" ? `已启用 ${V.filter((i) => i.enabled).length}/${V.length} 个镜头` : `${V.filter((i) => i.enabled).length}/${V.length} shots enabled` }),
        /* @__PURE__ */ r("button", { class: J ? "active" : "", onClick: mr, children: J ? p === "zh" ? "全部禁用" : "Disable all" : p === "zh" ? "全部启用" : "Enable all" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-table", children: [
        /* @__PURE__ */ r("div", { class: "td-batch-row td-batch-table-head", children: [
          /* @__PURE__ */ r("span", { children: "#" }),
          /* @__PURE__ */ r("span", { children: p === "zh" ? "镜头名" : "Shot name" }),
          /* @__PURE__ */ r("span", { children: p === "zh" ? "启用" : "Enabled" }),
          /* @__PURE__ */ r("span", { children: p === "zh" ? "具体时长" : "Duration" }),
          /* @__PURE__ */ r("span", { children: [
            "latent ",
            p === "zh" ? "接力" : "relay"
          ] })
        ] }),
        V.map((i, m) => /* @__PURE__ */ r("div", { class: "td-batch-row", children: [
          /* @__PURE__ */ r("span", { children: m + 1 }),
          /* @__PURE__ */ r("input", { value: i.title, "aria-label": `${p === "zh" ? "镜头名" : "Shot name"} ${m + 1}`, onInput: (_) => X((z) => z.map((L, Y) => Y === m ? { ...L, title: _.currentTarget.value } : L)) }),
          /* @__PURE__ */ r("label", { class: "td-batch-enabled", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: i.enabled, onChange: (_) => X((z) => z.map((L, Y) => Y === m ? { ...L, enabled: _.currentTarget.checked } : L)) }),
            /* @__PURE__ */ r("span", { children: i.enabled ? p === "zh" ? "开" : "ON" : p === "zh" ? "关" : "OFF" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: i.durationSeconds, onInput: (_) => X((z) => z.map((L, Y) => Y === m ? { ...L, durationSeconds: Number(_.currentTarget.value) } : L)) }),
            /* @__PURE__ */ r("span", { children: p === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-relay", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: i.latentRelay, onChange: (_) => X((z) => z.map((L, Y) => Y === m ? { ...L, latentRelay: _.currentTarget.checked } : L)) }),
            /* @__PURE__ */ r("span", { children: i.latentRelay ? p === "zh" ? "开" : "ON" : p === "zh" ? "关" : "OFF" })
          ] })
        ] }, i.id))
      ] }),
      /* @__PURE__ */ r("footer", { children: [
        /* @__PURE__ */ r("button", { onClick: () => re(!1), children: p === "zh" ? "取消" : "Cancel" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: fr, children: p === "zh" ? "应用更改" : "Apply changes" })
      ] })
    ] }) }),
    le && /* @__PURE__ */ r(Hr, { language: p, assets: s.assets, projectName: s.project.name, uploadFile: ut, onImported: (i) => M((m) => {
      m.assets.push(...i);
    }), onClose: () => xe(!1) })
  ] });
}
function gn(e, t, n = !1, o, a) {
  const d = document.getElementById("theodore-director-modal");
  if (d) {
    d.focus();
    return;
  }
  const s = document.createElement("div");
  s.id = "theodore-director-modal", s.className = "td-modal", s.tabIndex = -1, document.body.append(s);
  const l = (u) => {
    u.key === "Escape" && h();
  }, h = () => {
    document.removeEventListener("keydown", l), _t(null, s), s.remove();
  };
  document.addEventListener("keydown", l), _t(/* @__PURE__ */ r(fn, { initial: e, onSave: (u) => {
    t(u), h();
  }, onClose: h, supportsSecondSampling: n, queueSecondPass: o, queueMerge: a }), s), s.focus();
}
const bn = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-highlight-textarea{position:relative;display:block;width:100%;min-width:0}.td-highlight-backdrop,.td-form textarea.td-highlight-input{box-sizing:border-box;width:100%;margin:0;padding:7px 9px;font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,monospace;font-size:inherit;line-height:1.45;letter-spacing:normal;-moz-tab-size:8;tab-size:8;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.td-highlight-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border:1px solid transparent;border-radius:6px;background:#222a35;color:var(--td-text);pointer-events:none}.td-form textarea.td-highlight-input{position:relative;z-index:1;display:block;background:transparent;color:transparent;caret-color:var(--td-text);-webkit-text-fill-color:transparent}.td-highlight-input::selection{background:#5898d46b}.td-highlight-backdrop mark{padding:1px 2px;border-radius:3px;color:inherit}.td-highlight-backdrop mark.valid{background:#1d6b50;color:#bfffe6}.td-highlight-backdrop mark.invalid{background:#7a2931;color:#ffd1d5;text-decoration:underline;text-decoration-color:#ff9aa4;text-underline-offset:2px}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-generated-results{display:flex;flex-direction:column;gap:12px}.td-result-list{display:flex;flex-direction:column;gap:7px;max-height:280px;overflow:auto;padding-right:3px}.td-shell button.td-result-item{display:grid;grid-template-columns:112px minmax(0,1fr);gap:10px;align-items:center;width:100%;padding:6px;text-align:left;background:#151b23}.td-shell button.td-result-item.selected{border-color:var(--td-accent);background:#1c2a2a}.td-result-thumb{width:112px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:5px;background:#090c10;color:var(--td-muted)}.td-result-thumb img,.td-result-thumb video{display:block;width:100%;height:100%;object-fit:contain}.td-result-item-copy{display:flex;min-width:0;flex-direction:column;gap:3px}.td-result-item-copy>strong{display:flex;align-items:center;gap:7px;color:var(--td-text)}.td-result-item-copy>strong em{padding:1px 6px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-result-item-copy>span,.td-result-item-copy>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-result-item-copy>small{font-size:10px}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-asset-batch-entry{margin-left:auto;border-color:#527061!important;background:#1b2c28!important;color:var(--td-accent)!important}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}.td-shot-sidebar{display:flex;flex-direction:column}.td-shot-list{flex:none}.td-shot-batch-entry{display:flex;align-items:flex-end;flex:1;min-height:90px;padding-top:14px}.td-shot-batch-entry button{border-color:#527061;background:#1b2c28;color:var(--td-accent)}.td-batch-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:28px;background:#05080dbd;box-sizing:border-box}.td-batch-panel{display:flex;flex-direction:column;width:min(1040px,100%);max-height:min(820px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-batch-header h2{font-size:18px;margin:0}.td-batch-header p{margin:3px 0 0;color:var(--td-muted)}.td-batch-header>button{font-size:20px;line-height:1;padding:5px 9px}.td-batch-tools{display:grid;grid-template-columns:1fr 1.4fr;gap:12px;padding:14px 18px;border-bottom:1px solid var(--td-line);background:#151b23}.td-batch-tools>div{display:flex;align-items:end;gap:8px;padding:10px;border:1px solid var(--td-line);border-radius:7px}.td-batch-tools label{display:flex;flex:1;flex-direction:column;gap:4px;color:var(--td-muted);white-space:nowrap}.td-batch-tools label>span,.td-batch-duration{display:flex;align-items:center;gap:6px}.td-batch-tools input{width:100%}.td-batch-tools em{color:var(--td-muted);font-style:normal}.td-batch-tools button{white-space:nowrap}.td-batch-global-actions{display:flex;align-items:center;justify-content:flex-end;gap:12px;padding:9px 22px;border-bottom:1px solid var(--td-line);background:#171e27;color:var(--td-muted)}.td-batch-global-actions button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-batch-table{overflow:auto;padding:0 18px}.td-batch-row{display:grid;grid-template-columns:42px minmax(180px,1fr) 100px 150px 120px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-batch-table-head{position:sticky;top:0;z-index:1;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-batch-duration input{min-width:0;width:100%}.td-batch-duration>span{color:var(--td-muted)}.td-batch-enabled,.td-batch-relay{display:flex;align-items:center;gap:7px;justify-content:flex-start;color:var(--td-text)}.td-batch-enabled input,.td-batch-relay input{width:17px;height:17px;margin:0}.td-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-batch-panel{display:flex;flex-direction:column;width:min(1420px,100%);max-height:min(880px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-asset-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-asset-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-dropzone{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-height:92px;margin:14px 18px 10px;border:1px dashed #597084;border-radius:9px;background:#151b23;color:var(--td-text);cursor:pointer;transition:border-color .15s,background .15s}.td-asset-dropzone:hover,.td-asset-dropzone.dragging{border-color:var(--td-accent);background:#1b2c28}.td-asset-dropzone span{color:var(--td-muted);font-size:12px}.td-asset-dropzone input{display:none}.td-asset-batch-warning{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 18px 10px;padding:8px 10px;border:1px solid #836a32;border-radius:7px;background:#3a301c;color:#f4d991}.td-asset-batch-warning span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-warning button{padding:2px 7px}.td-asset-batch-summary{display:flex;align-items:center;justify-content:space-between;padding:8px 18px;border-top:1px solid var(--td-line);border-bottom:1px solid var(--td-line);background:#151b23;color:var(--td-muted)}.td-asset-batch-summary button{padding:5px 8px}.td-asset-batch-list{overflow:auto;padding:0 18px 10px}.td-asset-batch-row{display:grid;grid-template-columns:minmax(210px,1.4fr) minmax(150px,1fr) 115px 135px 105px 72px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-asset-batch-head{position:sticky;top:0;z-index:2;padding-top:10px;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-asset-batch-row.invalid{background:#3b202560}.td-asset-batch-row.imported{background:#17372d55}.td-asset-batch-file{display:flex;min-width:0;flex-direction:column;gap:2px}.td-asset-batch-file strong,.td-asset-batch-file small,.td-asset-batch-file em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-file small{color:var(--td-muted);font-weight:400}.td-asset-batch-file em{color:var(--td-danger);font-size:11px;font-style:normal}.td-asset-batch-duration,.td-asset-batch-audio{display:flex;align-items:center;gap:6px;color:var(--td-muted)}.td-asset-batch-duration input{min-width:0;width:100%}.td-asset-batch-audio input{width:17px;height:17px;margin:0}.td-asset-batch-empty{display:flex;min-height:130px;align-items:center;justify-content:center;color:var(--td-muted)}.td-asset-batch-panel button:disabled,.td-asset-batch-panel input:disabled,.td-asset-batch-panel select:disabled{opacity:.55;cursor:not-allowed}.td-postprocess{display:flex;flex-direction:column;gap:14px;max-width:1500px;margin:0 auto}.td-post-header,.td-post-summary,.td-post-merged{border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px}.td-post-header h2,.td-post-merged h2{margin:0;font-size:17px}.td-post-header p{margin:4px 0 0;color:var(--td-muted)}.td-post-actions{display:flex;gap:8px;flex:none}.td-post-summary{display:flex;align-items:center;gap:18px;padding:10px 14px;color:var(--td-muted)}.td-post-summary>button{margin-left:auto}.td-post-summary button:disabled{opacity:.5;cursor:not-allowed}.td-post-range{display:flex;align-items:center;gap:6px;margin-left:auto}.td-post-range input{width:64px;padding:6px 7px;text-align:center}.td-post-range button{white-space:nowrap}.td-post-summary>.td-post-range+button{margin-left:0}.td-post-error,.td-post-warning{padding:10px 13px;border-radius:7px}.td-post-error{border:1px solid #8b4149;background:#442228;color:#ffd1d5;white-space:pre-wrap}.td-post-warning{border:1px solid #836a32;background:#3a301c;color:#f4d991}.td-post-shot-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(390px,1fr));gap:12px;align-items:start}.td-post-shot{min-width:0;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel);overflow:hidden}.td-post-shot.selected{border-color:#527e6c}.td-post-shot.disabled{opacity:.72}.td-post-shot>header{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid var(--td-line);background:#1d2530}.td-post-shot>header>label{display:flex;align-items:center;gap:9px;min-width:0;cursor:pointer}.td-post-shot>header input{width:18px;height:18px;margin:0;flex:none}.td-post-shot>header label>span{display:flex;min-width:0;gap:8px;align-items:baseline}.td-post-shot>header strong{color:var(--td-text)}.td-post-shot>header em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted);font-style:normal}.td-post-shot>header>span{flex:none;padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted)}.td-post-shot-disabled-note{padding:7px 10px;border-bottom:1px solid var(--td-line);background:#332b1d;color:#e5c77d;font-size:11px}.td-post-shot-empty{min-height:96px;display:flex;align-items:center;justify-content:center;padding:12px;color:var(--td-muted);text-align:center}.td-post-result-list{display:flex;flex-direction:column;gap:7px;max-height:360px;overflow:auto;padding:9px}.td-post-result{display:grid;grid-template-columns:minmax(0,1fr) 35px;gap:6px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:5px}.td-post-result.selected{border-color:var(--td-accent);background:#1c2a2a}.td-shell button.td-post-result-choice{display:grid;grid-template-columns:112px minmax(0,1fr);gap:9px;align-items:center;min-width:0;padding:0;border:0;background:transparent;text-align:left}.td-post-result-choice>span{display:flex;min-width:0;flex-direction:column;gap:3px}.td-post-result-choice>span>strong{display:flex;align-items:center;gap:6px}.td-post-result-choice>span>strong em{padding:1px 5px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-post-result-choice>span>span,.td-post-result-choice>span>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-post-result-choice>span>small{font-size:10px}.td-post-result-play{width:35px;height:35px;padding:0!important}.td-post-result-play:disabled{opacity:.35;cursor:not-allowed}.td-post-merged{padding:12px}.td-post-merged>header>div{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px}.td-post-merged .td-generated-results{display:grid;grid-template-columns:minmax(360px,1.6fr) minmax(300px,1fr);align-items:start}.td-post-merged .td-result-list{max-height:420px}.td-post-preview-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:30;display:flex;align-items:center;justify-content:center;padding:26px;background:#030609d6}.td-post-preview-overlay>section{width:min(980px,100%);max-height:calc(100vh - 52px);overflow:auto;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 80px #000c}.td-post-preview-overlay header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--td-line)}.td-post-preview-overlay header button{font-size:20px;line-height:1;padding:5px 9px}.td-post-preview-overlay video{display:block;width:100%;max-height:calc(100vh - 170px);background:#070a0e}.td-post-preview-overlay p{margin:0;padding:9px 12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}.td-post-summary{flex-wrap:wrap}.td-post-range{margin-left:0}.td-post-summary>button{margin-left:auto}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:900px){.td-post-shot-list,.td-post-merged .td-generated-results{grid-template-columns:1fr}.td-post-header{align-items:flex-start;flex-direction:column}.td-post-actions{width:100%}.td-post-actions button{flex:1}.td-post-summary{align-items:stretch;flex-direction:column;gap:7px}.td-post-range{margin:3px 0;flex-wrap:wrap}.td-post-summary>button{margin:4px 0 0}.td-post-result-list{max-height:none}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}@media(max-width:1000px){.td-asset-batch-list{min-width:900px}.td-asset-batch-panel{overflow:auto}.td-asset-batch-panel>.td-batch-header,.td-asset-dropzone,.td-asset-batch-warning,.td-asset-batch-summary,.td-asset-batch-panel>footer{min-width:864px}}@media(max-width:720px){.td-asset-batch-entry{margin-left:0}}.td-postprocess-shell{display:flex;flex-direction:column;gap:12px;max-width:1500px;margin:0 auto}.td-postprocess-shell>.td-postprocess{max-width:none;width:100%;margin:0}.td-post-mode-tabs{display:flex;gap:7px;padding:5px;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-mode-tabs button{min-width:130px}.td-post-mode-tabs button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-second-pass-panel .td-post-shot>header>span:first-child{display:flex;min-width:0;gap:8px;align-items:baseline;padding:0;background:transparent}.td-second-pass-result{display:grid;grid-template-columns:minmax(0,1fr) 118px;gap:8px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:6px}.td-second-pass-result:has(.td-second-pass-run:disabled){border-color:#34404d}.td-second-pass-run{width:118px;min-height:38px;padding:6px!important}.td-second-pass-run:disabled{opacity:.62;cursor:not-allowed}.td-second-pass-error{grid-column:1/-1;padding:6px 8px;border-radius:5px;background:#442228;color:#ffd1d5;font-size:11px;white-space:pre-wrap}@media(max-width:620px){.td-post-mode-tabs{flex-direction:column}.td-post-mode-tabs button{width:100%}.td-second-pass-result{grid-template-columns:1fr}.td-second-pass-run{width:100%}}.td-runtime-settings{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:14px;margin:0 0 8px}.td-runtime-settings legend{padding:0 7px;color:var(--td-accent)}.td-runtime-settings label:has(textarea),.td-runtime-settings label:has(input[type=password]),.td-runtime-key-controls,.td-runtime-apply{grid-column:1/-1}.td-runtime-settings small{display:block;margin-top:5px;color:var(--td-muted);line-height:1.45}.td-runtime-status{display:flex;align-items:center;padding:8px 10px;border:1px solid var(--td-line);border-radius:6px;background:#161d25;color:var(--td-muted)}.td-runtime-status strong{margin-left:4px;color:var(--td-accent)}.td-runtime-key-controls{display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:9px 10px;border:1px solid var(--td-line);border-radius:6px;background:#161d25}.td-runtime-key-controls>label{display:flex;flex-direction:row;align-items:center;gap:7px}.td-runtime-key-controls>label input{width:auto}.td-runtime-key-controls small{flex-basis:100%;margin:0}.td-runtime-apply{display:flex;justify-content:flex-end}.td-runtime-banner{padding:10px 13px;border:1px solid #836a32;border-radius:7px;background:#3a301c;color:#f4d991}.td-runtime-banner.ready{border-color:#356f59;background:#18372d;color:#8be1bd}@media(max-width:700px){.td-runtime-settings{grid-template-columns:1fr}.td-runtime-settings label:has(textarea),.td-runtime-settings label:has(input[type=password]),.td-runtime-key-controls,.td-runtime-apply{grid-column:auto}}", Dt = "theodore-director-styles";
function vn() {
  if (document.getElementById(Dt)) return;
  const e = document.createElement("style");
  e.id = Dt, e.textContent = bn, document.head.append(e);
}
vn();
function _n(e) {
  const t = e.output ?? {}, n = [t.gifs, t.videos, t.images].find((s) => Array.isArray(s)), o = n == null ? void 0 : n[0], a = String((o == null ? void 0 : o.filename) ?? "").trim();
  return a ? {
    path: [String((o == null ? void 0 : o.subfolder) ?? "").trim().replace(/\\/g, "/").replace(/^\/+|\/+$/g, ""), a].filter(Boolean).join("/"),
    provider: "local",
    stage: "legacy_unknown"
  } : void 0;
}
const xn = "/scripts/app.js", yn = "/scripts/api.js";
Promise.all([
  import(
    /* @vite-ignore */
    xn
  ),
  import(
    /* @vite-ignore */
    yn
  )
]).then(([{ app: e }, { api: t }]) => {
  const n = async (a) => {
    var w, k;
    const d = ((w = e.graph) == null ? void 0 : w._nodes) ?? [], s = d.find((y) => y.type === "TheodoreDirector_PostprocessSecondPassSource"), l = d.find((y) => y.type === "TheodoreDirector_SaveSecondPass"), h = (k = s == null ? void 0 : s.widgets) == null ? void 0 : k.find((y) => y.name === "request_json");
    if (!s || !l || !h || l.id === void 0)
      throw new Error("当前工作流缺少后处理单独二采支流，请重新载入仓库中的 V7 导播台示例工作流");
    const u = h.value, f = s.mode, x = l.mode;
    let c;
    try {
      h.value = JSON.stringify(a), s.mode = 0, l.mode = 0, c = await e.graphToPrompt(e.rootGraph);
    } finally {
      h.value = u, s.mode = f, l.mode = x;
    }
    const C = (await t.queuePrompt(0, c, { partialExecutionTargets: [String(l.id)] })).prompt_id;
    if (!C) throw new Error("ComfyUI 没有返回二采任务 ID");
    await new Promise((y, S) => {
      const E = () => {
        t.removeEventListener("execution_success", I), t.removeEventListener("execution_error", O), t.removeEventListener("execution_interrupted", O);
      }, g = (D) => {
        var N;
        return String(((N = D.detail) == null ? void 0 : N.prompt_id) ?? "");
      }, I = (D) => {
        g(D) === C && (E(), y());
      }, O = (D) => {
        if (g(D) !== C) return;
        const N = D.detail ?? {};
        E(), S(new Error(String(N.exception_message ?? N.error ?? "单独二采任务执行失败")));
      };
      t.addEventListener("execution_success", I), t.addEventListener("execution_error", O), t.addEventListener("execution_interrupted", O);
    });
  }, o = async (a) => {
    var p, C;
    const s = (((p = e.graph) == null ? void 0 : p._nodes) ?? []).find((w) => w.type === "TheodoreDirector_MergeVideos"), l = (C = s == null ? void 0 : s.widgets) == null ? void 0 : C.find((w) => w.name === "request_json");
    if (!s || !l || s.id === void 0)
      throw new Error("当前工作流缺少 Theodore 合并支流，请重新载入仓库中的 V7.2 示例工作流");
    const h = l.value, u = s.mode;
    let f;
    try {
      l.value = JSON.stringify(a), s.mode = 0, f = await e.graphToPrompt(e.rootGraph);
    } finally {
      l.value = h, s.mode = u;
    }
    const c = (await t.queuePrompt(0, f, { partialExecutionTargets: [String(s.id)] })).prompt_id;
    if (!c) throw new Error("ComfyUI 没有返回合并任务 ID");
    return new Promise((w, k) => {
      let y;
      const S = () => {
        t.removeEventListener("executed", I), t.removeEventListener("execution_success", O), t.removeEventListener("execution_error", D), t.removeEventListener("execution_interrupted", D);
      }, E = (N) => N.detail ?? {}, g = (N) => String(N.prompt_id ?? "") === c, I = (N) => {
        const b = E(N);
        !g(b) || String(b.node ?? "") !== String(s.id) || (y = _n(b) ?? y);
      }, O = (N) => {
        const b = E(N);
        g(b) && (S(), w(y));
      }, D = (N) => {
        const b = E(N);
        g(b) && (S(), k(new Error(String(b.exception_message ?? b.error ?? "合并任务执行失败"))));
      };
      t.addEventListener("executed", I), t.addEventListener("execution_success", O), t.addEventListener("execution_error", D), t.addEventListener("execution_interrupted", D);
    });
  };
  e.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(a, d) {
      if (d.name === "TheodoreDirector_PostprocessSecondPassSource" || d.name === "TheodoreDirector_MergeVideos") {
        const l = a.prototype.onNodeCreated;
        a.prototype.onNodeCreated = function() {
          var u, f;
          l == null || l.apply(this);
          const h = (u = this.widgets) == null ? void 0 : u.find((x) => x.name === "request_json");
          h && (h.type = "hidden", h.computeSize = () => [0, -4]), this.size = [Math.max(((f = this.size) == null ? void 0 : f[0]) ?? 300, 380), 80];
        };
        return;
      }
      if (d.name !== "TheodoreDirector_Project") return;
      const s = a.prototype.onNodeCreated;
      a.prototype.onNodeCreated = function() {
        var h, u;
        s == null || s.apply(this);
        const l = (h = this.widgets) == null ? void 0 : h.find((f) => f.name === "plan_json");
        l && (l.type = "hidden", l.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          var f;
          try {
            const x = JSON.parse(String(l.value)), c = ((f = e.graph) == null ? void 0 : f._nodes) ?? [], p = c.some((w) => w.type === "TheodoreDirector_PostprocessSecondPassSource") && c.some((w) => w.type === "TheodoreDirector_SaveSecondPass"), C = c.some((w) => w.type === "TheodoreDirector_MergeVideos");
            gn(x, (w) => {
              var k, y;
              l.value = JSON.stringify(w, null, 2), this.setDirtyCanvas(!0, !0), (y = (k = e.graph) == null ? void 0 : k.setDirtyCanvas) == null || y.call(k, !0, !0);
            }, !0, p ? n : void 0, C ? o : void 0);
          } catch (x) {
            window.alert(`Theodore Director: ${x instanceof Error ? x.message : String(x)}`);
          }
        }), this.size = [Math.max(((u = this.size) == null ? void 0 : u[0]) ?? 300, 360), 110]);
      };
    }
  });
});
