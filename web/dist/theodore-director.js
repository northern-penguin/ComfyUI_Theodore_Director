var Fe, H, At, ce, pt, Et, Rt, Ke, Ae, ye, jt, Qe, Ge, Je, Ne = {}, Me = [], gr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, He = Array.isArray;
function se(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Xe(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function br(e, t, n) {
  var o, d, a, i = {};
  for (a in t) a == "key" ? o = t[a] : a == "ref" ? d = t[a] : i[a] = t[a];
  if (arguments.length > 2 && (i.children = arguments.length > 3 ? Fe.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (a in e.defaultProps) i[a] === void 0 && (i[a] = e.defaultProps[a]);
  return Ee(e, i, o, d, null);
}
function Ee(e, t, n, o, d) {
  var a = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: d ?? ++At, __i: -1, __u: 0 };
  return d == null && H.vnode != null && H.vnode(a), a;
}
function Se(e) {
  return e.children;
}
function Re(e, t) {
  this.props = e, this.context = t;
}
function fe(e, t) {
  if (t == null) return e.__ ? fe(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? fe(e) : null;
}
function xr(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, o = [], d = [], a = se({}, t);
    a.__v = t.__v + 1, H.vnode && H.vnode(a), Ze(e.__P, a, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, o, n ?? fe(t), !!(32 & t.__u), d), a.__v = t.__v, a.__.__k[a.__i] = a, Dt(o, a, d), t.__e = t.__ = null, a.__e != n && Pt(a);
  }
}
function Pt(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), Pt(e);
}
function ut(e) {
  (!e.__d && (e.__d = !0) && ce.push(e) && !Le.__r++ || pt != H.debounceRendering) && ((pt = H.debounceRendering) || Et)(Le);
}
function Le() {
  try {
    for (var e, t = 1; ce.length; ) ce.length > t && ce.sort(Rt), e = ce.shift(), t = ce.length, xr(e);
  } finally {
    ce.length = Le.__r = 0;
  }
}
function Nt(e, t, n, o, d, a, i, p, m, u, f) {
  var _, l, c, w, z, k, y = o && o.__k || Me, $ = t.length;
  for (m = vr(n, t, y, m, $), _ = 0; _ < $; _++) (c = n.__k[_]) != null && (l = c.__i != -1 && y[c.__i] || Ne, c.__i = _, k = Ze(e, c, l, d, a, i, p, m, u, f), w = c.__e, c.ref && l.ref != c.ref && (l.ref && et(l.ref, null, c), f.push(c.ref, c.__c || w, c)), z == null && w != null && (z = w), 4 & c.__u ? (m = Mt(c, m, e), l.__e && (l.__e = null)) : typeof c.type == "function" && k !== void 0 ? m = k : w && (m = w.nextSibling), c.__u &= -7);
  return n.__e = z, m;
}
function vr(e, t, n, o, d) {
  var a, i, p, m, u, f = n.length, _ = f, l = 0;
  for (e.__k = new Array(d), a = 0; a < d; a++) (i = t[a]) != null && typeof i != "boolean" && typeof i != "function" ? (typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? i = e.__k[a] = Ee(null, i, null, null, null) : He(i) ? i = e.__k[a] = Ee(Se, { children: i }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? i = e.__k[a] = Ee(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : e.__k[a] = i, m = a + l, i.__ = e, i.__b = e.__b + 1, p = null, (u = i.__i = _r(i, n, m, _)) != -1 && (_--, (p = n[u]) && (p.__u |= 2)), p == null || p.__v == null ? (u == -1 && (d > f ? l-- : d < f && l++), typeof i.type != "function" && (i.__u |= 4)) : u != m && (u == m - 1 ? l-- : u == m + 1 ? l++ : (u > m ? l-- : l++, i.__u |= 4))) : e.__k[a] = null;
  if (_) for (a = 0; a < f; a++) (p = n[a]) != null && (2 & p.__u) == 0 && (p.__e == o && (o = fe(p)), Ft(p, p));
  return o;
}
function Mt(e, t, n) {
  var o, d;
  if (typeof e.type == "function") {
    for (o = e.__k, d = 0; o && d < o.length; d++) o[d] && (o[d].__ = e, t = Mt(o[d], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = fe(e)), t = n.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function _r(e, t, n, o) {
  var d, a, i, p = e.key, m = e.type, u = t[n], f = u != null && (2 & u.__u) == 0;
  if (u === null && p == null || f && p == u.key && m == u.type) return n;
  if (o > (f ? 1 : 0)) {
    for (d = n - 1, a = n + 1; d >= 0 || a < t.length; ) if ((u = t[i = d >= 0 ? d-- : a++]) != null && (2 & u.__u) == 0 && p == u.key && m == u.type) return i;
  }
  return -1;
}
function ht(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || gr.test(t) ? n : n + "px";
}
function Te(e, t, n, o, d) {
  var a, i;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof o == "string" && (e.style.cssText = o = ""), o) for (t in o) n && t in n || ht(e.style, t, "");
    if (n) for (t in n) o && n[t] == o[t] || ht(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(jt, "$1")), i = t.toLowerCase(), t = i in e || t == "onFocusOut" || t == "onFocusIn" ? i.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = n, n ? o ? n[ye] = o[ye] : (n[ye] = Qe, e.addEventListener(t, a ? Je : Ge, a)) : e.removeEventListener(t, a ? Je : Ge, a);
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
function mt(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t[Ae] == null) t[Ae] = Qe++;
      else if (t[Ae] < n[ye]) return;
      return n(H.event ? H.event(t) : t);
    }
  };
}
function Ze(e, t, n, o, d, a, i, p, m, u) {
  var f, _, l, c, w, z, k, y, $, R, x, E, F, D, M, b, j = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (m = !!(32 & n.__u), a = [p = t.__e = n.__e]), (f = H.__b) && f(t);
  e: if (typeof j == "function") {
    _ = i.length;
    try {
      if ($ = t.props, R = j.prototype && j.prototype.render, x = (f = j.contextType) && o[f.__c], E = f ? x ? x.props.value : f.__ : o, n.__c ? y = (l = t.__c = n.__c).__ = l.__E : (R ? t.__c = l = new j($, E) : (t.__c = l = new Re($, E), l.constructor = j, l.render = wr), x && x.sub(l), l.state || (l.state = {}), l.__n = o, c = l.__d = !0, l.__h = [], l._sb = []), R && l.__s == null && (l.__s = l.state), R && j.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = se({}, l.__s)), se(l.__s, j.getDerivedStateFromProps($, l.__s))), w = l.props, z = l.state, l.__v = t, c) R && j.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), R && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (R && j.getDerivedStateFromProps == null && $ !== w && l.componentWillReceiveProps != null && l.componentWillReceiveProps($, E), t.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate($, l.__s, E) === !1) {
          t.__v != n.__v && (l.props = $, l.state = l.__s, l.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(O) {
            O && (O.__ = t);
          }), Me.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && i.push(l), p = fe(n);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate($, l.__s, E), R && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(w, z, k);
        });
      }
      if (l.context = E, l.props = $, l.__P = e, l.__e = !1, F = H.__r, D = 0, R) l.state = l.__s, l.__d = !1, F && F(t), f = l.render(l.props, l.state, l.context), Me.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, F && F(t), f = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++D < 25);
      l.state = l.__s, l.getChildContext != null && (o = se(se({}, o), l.getChildContext())), R && !c && l.getSnapshotBeforeUpdate != null && (k = l.getSnapshotBeforeUpdate(w, z)), M = f != null && f.type === Se && f.key == null ? Ot(f.props.children) : f, p = Nt(e, He(M) ? M : [M], t, n, o, d, a, i, p, m, u), l.base = t.__e, t.__u &= -161, l.__h.length && i.push(l), y && (l.__E = l.__ = null);
    } catch (O) {
      if (i.length = _, t.__v = null, m || a != null) {
        if (O.then) {
          for (t.__u |= m ? 160 : 128; p && p.nodeType == 8 && p.nextSibling; ) p = p.nextSibling;
          a != null && (a[a.indexOf(p)] = null), t.__e = p;
        } else if (a != null) for (b = a.length; b--; ) Xe(a[b]);
      } else t.__e = n.__e;
      t.__k == null && (t.__k = n.__k || []), O.then || Lt(t), H.__e(O, t, n);
    }
  } else a == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : p = t.__e = yr(n.__e, t, n, o, d, a, i, m, u);
  return (f = H.diffed) && f(t), 128 & t.__u ? void 0 : p;
}
function Lt(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Lt));
}
function Dt(e, t, n) {
  for (var o = 0; o < n.length; o++) et(n[o], n[++o], n[++o]);
  H.__c && H.__c(t, e), e.some(function(d) {
    try {
      e = d.__h, d.__h = [], e.some(function(a) {
        a.call(d);
      });
    } catch (a) {
      H.__e(a, d.__v);
    }
  });
}
function Ot(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : He(e) ? e.map(Ot) : e.constructor !== void 0 ? null : se({}, e);
}
function yr(e, t, n, o, d, a, i, p, m) {
  var u, f, _, l, c, w, z, k = n.props || Ne, y = t.props, $ = t.type;
  if ($ == "svg" ? d = "http://www.w3.org/2000/svg" : $ == "math" ? d = "http://www.w3.org/1998/Math/MathML" : d || (d = "http://www.w3.org/1999/xhtml"), a != null) {
    for (u = 0; u < a.length; u++) if ((c = a[u]) && "setAttribute" in c == !!$ && ($ ? c.localName == $ : c.nodeType == 3)) {
      e = c, a[u] = null;
      break;
    }
  }
  if (e == null) {
    if ($ == null) return document.createTextNode(y);
    e = document.createElementNS(d, $, y.is && y), p && (H.__m && H.__m(t, a), p = !1), a = null;
  }
  if ($ == null) k === y || p && e.data == y || (e.data = y);
  else {
    if (a = $ == "textarea" && y.defaultValue != null ? null : a && Fe.call(e.childNodes), !p && a != null) for (k = {}, u = 0; u < e.attributes.length; u++) k[(c = e.attributes[u]).name] = c.value;
    for (u in k) c = k[u], u == "dangerouslySetInnerHTML" ? _ = c : u == "children" || u in y || u == "value" && "defaultValue" in y || u == "checked" && "defaultChecked" in y || Te(e, u, null, c, d);
    for (u in y) c = y[u], u == "children" ? l = c : u == "dangerouslySetInnerHTML" ? f = c : u == "value" ? w = c : u == "checked" ? z = c : p && typeof c != "function" || k[u] === c || Te(e, u, c, k[u], d);
    if (f) p || _ && (f.__html == _.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (_ && (e.innerHTML = ""), Nt(t.type == "template" ? e.content : e, He(l) ? l : [l], t, n, o, $ == "foreignObject" ? "http://www.w3.org/1999/xhtml" : d, a, i, a ? a[0] : n.__k && fe(n, 0), p, m), a != null) for (u = a.length; u--; ) Xe(a[u]);
    p && $ != "textarea" || (u = "value", $ == "progress" && w == null ? e.removeAttribute("value") : w != null && (w !== e[u] || $ == "progress" && !w || $ == "option" && w != k[u]) && Te(e, u, w, k[u], d), u = "checked", z != null && z != e[u] && Te(e, u, z, k[u], d));
  }
  return e;
}
function et(e, t, n) {
  try {
    if (typeof e == "function") {
      var o = typeof e.__u == "function";
      o && e.__u(), o && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (d) {
    H.__e(d, n);
  }
}
function Ft(e, t, n) {
  var o, d;
  if (H.unmount && H.unmount(e), (o = e.ref) && (o.current && o.current != e.__e || et(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (a) {
      H.__e(a, t);
    }
    o.base = o.__P = o.__n = null;
  }
  if (o = e.__k) for (d = 0; d < o.length; d++) o[d] && Ft(o[d], t, n || typeof e.type != "function");
  n || Xe(e.__e), e.__c = e.__ = e.__e = void 0;
}
function wr(e, t, n) {
  return this.constructor(e, n);
}
function ft(e, t, n) {
  var o, d, a, i;
  t == document && (t = document.documentElement), H.__ && H.__(e, t), d = (o = !1) ? null : t.__k, a = [], i = [], Ze(t, e = t.__k = br(Se, null, [e]), d || Ne, Ne, t.namespaceURI, d ? null : t.firstChild ? Fe.call(t.childNodes) : null, a, d ? d.__e : t.firstChild, o, i), Dt(a, e, i), e.props.children = null;
}
Fe = Me.slice, H = { __e: function(e, t, n, o) {
  for (var d, a, i; t = t.__; ) if ((d = t.__c) && !d.__) try {
    if ((a = d.constructor) && a.getDerivedStateFromError != null && (d.setState(a.getDerivedStateFromError(e)), i = d.__d), d.componentDidCatch != null && (d.componentDidCatch(e, o || {}), i = d.__d), i) return d.__E = d;
  } catch (p) {
    e = p;
  }
  throw e;
} }, At = 0, Re.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = se({}, this.state), typeof e == "function" && (e = e(se({}, n), this.props)), e && se(n, e), e != null && this.__v && (t && this._sb.push(t), ut(this));
}, Re.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ut(this));
}, Re.prototype.render = Se, ce = [], Et = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Rt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Le.__r = 0, Ke = Math.random().toString(8), Ae = "__d" + Ke, ye = "__a" + Ke, jt = /(PointerCapture)$|Capture$/i, Qe = 0, Ge = mt(!1), Je = mt(!0);
var kr = 0;
function r(e, t, n, o, d, a) {
  t || (t = {});
  var i, p, m = t;
  if ("ref" in m) for (p in m = {}, t) p == "ref" ? i = t[p] : m[p] = t[p];
  var u = { type: e, props: m, key: n, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --kr, __i: -1, __u: 0, __source: d, __self: a };
  if (typeof e == "function" && (i = e.defaultProps)) for (p in i) m[p] === void 0 && (m[p] = i[p]);
  return H.vnode && H.vnode(u), u;
}
var we, B, Be, gt, De = 0, Ht = [], q = H, bt = q.__b, xt = q.__r, vt = q.diffed, _t = q.__c, yt = q.unmount, wt = q.__;
function tt(e, t) {
  q.__h && q.__h(B, e, De || t), De = 0;
  var n = B.__H || (B.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function T(e) {
  return De = 1, zr(Kt, e);
}
function zr(e, t, n) {
  var o = tt(we++, 2);
  if (o.t = e, !o.__c && (o.__ = [Kt(void 0, t), function(p) {
    var m = o.__N ? o.__N[0] : o.__[0], u = o.t(m, p);
    m !== u && (o.__N = [u, o.__[1]], o.__c.setState({}));
  }], o.__c = B, !B.__f)) {
    var d = function(p, m, u) {
      if (!o.__c.__H) return !0;
      var f = !1, _ = o.__c.props !== p;
      if (o.__c.__H.__.some(function(c) {
        if (c.__N) {
          f = !0;
          var w = c.__[0];
          c.__ = c.__N, c.__N = void 0, w !== c.__[0] && (_ = !0);
        }
      }), a) {
        var l = a.call(this, p, m, u);
        return f ? l || _ : l;
      }
      return !f || _;
    };
    B.__f = !0;
    var a = B.shouldComponentUpdate, i = B.componentWillUpdate;
    B.componentWillUpdate = function(p, m, u) {
      if (this.__e) {
        var f = a;
        a = void 0, d(p, m, u), a = f;
      }
      i && i.call(this, p, m, u);
    }, B.shouldComponentUpdate = d;
  }
  return o.__N || o.__;
}
function ke(e, t) {
  var n = tt(we++, 3);
  !q.__s && Ut(n.__H, t) && (n.__ = e, n.u = t, B.__H.__h.push(n));
}
function rt(e) {
  return De = 5, xe(function() {
    return { current: e };
  }, []);
}
function xe(e, t) {
  var n = tt(we++, 7);
  return Ut(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function Sr() {
  for (var e; e = Ht.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(je), t.__h.some(Ye), t.__h = [];
    } catch (n) {
      t.__h = [], q.__e(n, e.__v);
    }
  }
}
q.__b = function(e) {
  B = null, bt && bt(e);
}, q.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), wt && wt(e, t);
}, q.__r = function(e) {
  xt && xt(e), we = 0;
  var t = (B = e.__c).__H;
  t && (Be === B ? (t.__h = [], B.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(je), t.__h.some(Ye), t.__h = [], we = 0)), Be = B;
}, q.diffed = function(e) {
  vt && vt(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Ht.push(t) !== 1 && gt === q.requestAnimationFrame || ((gt = q.requestAnimationFrame) || $r)(Sr)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), Be = B = null;
}, q.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(je), n.__h = n.__h.filter(function(o) {
        return !o.__ || Ye(o);
      });
    } catch (o) {
      t.some(function(d) {
        d.__h && (d.__h = []);
      }), t = [], q.__e(o, n.__v);
    }
  }), _t && _t(e, t);
}, q.unmount = function(e) {
  yt && yt(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(o) {
    try {
      je(o);
    } catch (d) {
      t = d;
    }
  }), n.__H = void 0, t && q.__e(t, n.__v));
};
var kt = typeof requestAnimationFrame == "function";
function $r(e) {
  var t, n = function() {
    clearTimeout(o), kt && cancelAnimationFrame(t), setTimeout(e);
  }, o = setTimeout(n, 35);
  kt && (t = requestAnimationFrame(n));
}
function je(e) {
  var t = B, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), B = t;
}
function Ye(e) {
  var t = B;
  e.__c = e.__(), B = t;
}
function Ut(e, t) {
  return !e || e.length !== t.length || t.some(function(n, o) {
    return n !== e[o];
  });
}
function Kt(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const Ir = {
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
function Bt(e) {
  var o;
  const t = ((o = e.name.split(".").pop()) == null ? void 0 : o.toLocaleLowerCase()) ?? "";
  if (e.name.includes(".")) return Ir[t] ?? null;
  const n = e.type.split("/", 1)[0];
  return n === "image" || n === "video" || n === "audio" ? n : null;
}
function Cr(e) {
  const d = e.replace(/\.[^.]+$/, "").replace(/^\s*\d+\s*[-_. ]+/, "").normalize("NFKC").replace(/[\s-]+/g, "_").replace(/[{}]/g, "").replace(/_+/g, "_").replace(/^[_\.]+|[_\.]+$/g, "").slice(0, 96) || "asset";
  return d.toLocaleLowerCase().endsWith(".audio") ? `${d}_asset` : d;
}
function Tr(e, t) {
  const n = new Set(Array.from(t, (d) => d.toLocaleLowerCase()));
  if (!n.has(e.toLocaleLowerCase())) return e;
  let o = 2;
  for (; n.has(`${e}_${o}`.toLocaleLowerCase()); ) o += 1;
  return `${e}_${o}`;
}
function Ar(e, t, n) {
  const o = e.trim().toLocaleLowerCase();
  return !e.trim() || /[\s{}]/.test(e) || o.endsWith(".audio") ? "invalid" : Array.from(t, (a) => a.toLocaleLowerCase()).includes(o) || Array.from(n, (a) => a.trim().toLocaleLowerCase()).filter((a) => a === o).length > 1 ? "duplicate" : null;
}
function Er(e, t, n) {
  const o = new Set(Array.from(t)), d = [], a = [];
  for (const i of e) {
    const p = Bt(i);
    if (!p) {
      a.push(i.name);
      continue;
    }
    const m = Tr(Cr(i.name), o);
    o.add(m), d.push({ id: n(), file: i, alias: m, kind: p, durationSeconds: p === "image" ? null : 2, includeVideoAudio: !1, status: "pending", error: "" });
  }
  return { drafts: d, rejected: a };
}
function Rr(e, t, n) {
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
function jr(e, t) {
  return t === "image" ? Promise.resolve(null) : new Promise((n) => {
    const o = document.createElement(t === "video" ? "video" : "audio"), d = URL.createObjectURL(e);
    let a = !1;
    const i = (p) => {
      a || (a = !0, o.onloadedmetadata = null, o.onerror = null, o.removeAttribute("src"), o.load(), URL.revokeObjectURL(d), n(p));
    };
    o.preload = "metadata", o.onloadedmetadata = () => i(Number.isFinite(o.duration) && o.duration > 0 ? Math.round(o.duration * 10) / 10 : null), o.onerror = () => i(null), o.src = d;
  });
}
const Pr = () => `asset_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`, Ve = (e, t) => t === "zh" ? { image: "图片", video: "视频", audio: "音频" }[e] : e;
function Nr({ language: e, assets: t, projectName: n, onClose: o, onImported: d, uploadFile: a }) {
  const [i, p] = T([]), [m, u] = T([]), [f, _] = T(!1), [l, c] = T(!1), w = rt([]);
  w.current = i;
  const z = t.map((b) => b.alias), k = (b, j) => p((O) => O.map((P) => P.id === b ? { ...P, ...j } : P)), y = (b) => {
    if (!b.length || l) return;
    const j = [...z, ...w.current.map((P) => P.alias)], O = Er(b, j, Pr);
    O.rejected.length && u((P) => [...P, ...O.rejected]), O.drafts.length && (p((P) => [...P, ...O.drafts]), O.drafts.forEach((P) => {
      jr(P.file, P.kind).then((G) => {
        G != null && p((Q) => Q.map((W) => W.id === P.id && W.kind === P.kind && W.durationSeconds === 2 ? { ...W, durationSeconds: G } : W));
      });
    }));
  }, R = i.filter((b) => b.status !== "imported").map((b) => b.alias), x = (b) => {
    if (b.status === "imported") return null;
    const j = Ar(b.alias, z, R);
    return j === "invalid" ? e === "zh" ? "别名为空、包含空白/花括号，或使用了保留后缀 .audio" : "Alias is empty, contains whitespace/braces, or uses reserved .audio" : j === "duplicate" ? e === "zh" ? "别名与素材库或本批次其他素材重复" : "Alias duplicates an existing or staged asset" : Bt(b.file) !== b.kind ? e === "zh" ? "文件扩展名与所选类型不匹配" : "The extension does not match the selected kind" : b.kind !== "image" && (b.durationSeconds == null || b.durationSeconds <= 0) ? e === "zh" ? "视频或音频时长必须大于 0" : "Video/audio duration must be greater than 0" : null;
  }, E = async () => {
    const j = w.current.filter((Q) => Q.status === "pending" || Q.status === "error");
    if (!j.length) return;
    if (j.some(x)) {
      window.alert(e === "zh" ? "请先修正列表中标红的项目。" : "Fix the highlighted rows before importing.");
      return;
    }
    c(!0);
    const O = Math.max(0, ...t.map((Q) => Q.fixedOrder)) + 1;
    let P = 0;
    const G = async () => {
      for (; P < j.length; ) {
        const Q = P++, W = j[Q];
        k(W.id, { status: "uploading", error: "" });
        try {
          const re = await a(n, W.kind, W.file);
          d([Rr(W, re, O + Q)]), k(W.id, { status: "imported", error: "" });
        } catch (re) {
          k(W.id, { status: "error", error: String(re) });
        }
      }
    };
    await Promise.all(Array.from({ length: Math.min(2, j.length) }, G)), c(!1);
  }, F = i.filter((b) => b.status === "imported").length, D = i.filter((b) => b.status === "error").length, M = i.length - F;
  return /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-asset-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": e === "zh" ? "批量导入素材" : "Batch import assets", children: [
    /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: e === "zh" ? "批量导入素材" : "Batch import assets" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "可混合选择图片、视频和音频；确认列表后再写入素材库。" : "Select images, videos, and audio together; review before uploading." })
      ] }),
      /* @__PURE__ */ r("button", { disabled: l, "aria-label": e === "zh" ? "关闭" : "Close", onClick: o, children: "×" })
    ] }),
    /* @__PURE__ */ r("label", { class: `td-asset-dropzone ${f ? "dragging" : ""}`, onDragEnter: (b) => {
      b.preventDefault(), _(!0);
    }, onDragOver: (b) => b.preventDefault(), onDragLeave: (b) => {
      b.currentTarget === b.target && _(!1);
    }, onDrop: (b) => {
      var j;
      b.preventDefault(), _(!1), y(Array.from(((j = b.dataTransfer) == null ? void 0 : j.files) ?? []));
    }, children: [
      /* @__PURE__ */ r("strong", { children: e === "zh" ? "拖拽素材到这里，或点击选择多个文件" : "Drop media here, or click to select multiple files" }),
      /* @__PURE__ */ r("span", { children: e === "zh" ? "支持图片、视频、音频混合导入" : "Mixed image, video, and audio selection is supported" }),
      /* @__PURE__ */ r("input", { type: "file", multiple: !0, accept: "image/*,video/*,audio/*", disabled: l, onChange: (b) => {
        y(Array.from(b.currentTarget.files ?? [])), b.currentTarget.value = "";
      } })
    ] }),
    m.length > 0 && /* @__PURE__ */ r("div", { class: "td-asset-batch-warning", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `已跳过 ${m.length} 个不支持的文件：${m.join("、")}` : `Skipped ${m.length} unsupported files: ${m.join(", ")}` }),
      /* @__PURE__ */ r("button", { onClick: () => u([]), children: "×" })
    ] }),
    /* @__PURE__ */ r("div", { class: "td-asset-batch-summary", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `共 ${i.length} 项 · 已导入 ${F} · 待处理 ${M}${D ? ` · 失败 ${D}` : ""}` : `${i.length} items · ${F} imported · ${M} pending${D ? ` · ${D} failed` : ""}` }),
      /* @__PURE__ */ r("button", { disabled: l || !i.length, onClick: () => p([]), children: e === "zh" ? "清空列表" : "Clear list" })
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
      !i.length && /* @__PURE__ */ r("div", { class: "td-asset-batch-empty", children: e === "zh" ? "尚未选择素材" : "No media selected" }),
      i.map((b) => {
        const j = x(b), O = l || b.status === "imported" || b.status === "uploading";
        return /* @__PURE__ */ r("div", { class: `td-asset-batch-row ${j || b.status === "error" ? "invalid" : ""} ${b.status === "imported" ? "imported" : ""}`, children: [
          /* @__PURE__ */ r("div", { class: "td-asset-batch-file", children: [
            /* @__PURE__ */ r("strong", { title: b.file.name, children: b.file.name }),
            /* @__PURE__ */ r("small", { children: [
              (b.file.size / 1024 / 1024).toFixed(1),
              " MB · ",
              b.status === "pending" ? e === "zh" ? "待导入" : "Pending" : b.status === "uploading" ? e === "zh" ? "上传中" : "Uploading" : b.status === "imported" ? e === "zh" ? "已完成" : "Imported" : e === "zh" ? "失败" : "Failed"
            ] }),
            (j || b.error) && /* @__PURE__ */ r("em", { title: j || b.error, children: j || b.error })
          ] }),
          /* @__PURE__ */ r("input", { disabled: O, value: b.alias, onInput: (P) => k(b.id, { alias: P.currentTarget.value, status: "pending", error: "" }) }),
          /* @__PURE__ */ r("select", { disabled: O, value: b.kind, onChange: (P) => {
            const G = P.currentTarget.value;
            k(b.id, { kind: G, durationSeconds: G === "image" ? null : b.durationSeconds ?? 2, includeVideoAudio: G === "video" && b.includeVideoAudio, status: "pending", error: "" });
          }, children: [
            /* @__PURE__ */ r("option", { value: "image", children: Ve("image", e) }),
            /* @__PURE__ */ r("option", { value: "video", children: Ve("video", e) }),
            /* @__PURE__ */ r("option", { value: "audio", children: Ve("audio", e) })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", disabled: O || b.kind === "image", value: b.durationSeconds ?? "", onInput: (P) => k(b.id, { durationSeconds: P.currentTarget.value ? Number(P.currentTarget.value) : null, status: "pending", error: "" }) }),
            /* @__PURE__ */ r("span", { children: b.kind === "image" ? "—" : e === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-audio", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", disabled: O || b.kind !== "video", checked: b.kind === "video" && b.includeVideoAudio, onChange: (P) => k(b.id, { includeVideoAudio: P.currentTarget.checked }) }),
            /* @__PURE__ */ r("span", { children: b.kind === "video" ? b.includeVideoAudio ? e === "zh" ? "开" : "ON" : e === "zh" ? "关" : "OFF" : "—" })
          ] }),
          /* @__PURE__ */ r("button", { class: "danger", disabled: O, onClick: () => p((P) => P.filter((G) => G.id !== b.id)), children: e === "zh" ? "移除" : "Remove" })
        ] }, b.id);
      })
    ] }),
    /* @__PURE__ */ r("footer", { children: [
      /* @__PURE__ */ r("button", { disabled: l, onClick: o, children: e === "zh" ? "关闭" : "Close" }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: l || !i.some((b) => b.status === "pending" || b.status === "error"), onClick: () => void E(), children: l ? e === "zh" ? "正在导入…" : "Importing…" : D ? e === "zh" ? "重试失败项" : "Retry failed" : e === "zh" ? "开始导入" : "Start import" })
    ] })
  ] }) });
}
const Vt = String.raw`\{\{ref:([^{}]+)}}`;
function zt() {
  return new RegExp(Vt, "g");
}
function qt(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const o of e.assets)
    o.enabled && o.path.trim() && (!o.shotIds.length || o.shotIds.includes(t.id)) && !t.disabledAssetIds.includes(o.id) && n.set(o.alias, o);
  return n;
}
function Wt(e, t, n) {
  const o = n.trim(), d = o.endsWith(".audio"), a = d ? o.slice(0, -6) : o, i = qt(e, t).get(a);
  return i ? !d || i.kind === "video" && i.includeVideoAudio : !1;
}
function St(e, t) {
  const n = e.shots.filter((o) => o.enabled);
  return n.length > 0 && n.every((o) => Wt(e, o, t));
}
function Gt(e, t) {
  const n = [], o = qt(e, t), d = [e.promptPrefix, t.prompt, e.promptSuffix].filter(Boolean).join(`
`), a = [...d.matchAll(zt())].map((x) => x[1].trim()), i = [], p = /* @__PURE__ */ new Set(), m = (x) => {
    p.has(x.id) || (p.add(x.id), i.push(x));
  };
  [...o.values()].filter((x) => x.fixed).sort((x, E) => x.fixedOrder - E.fixedOrder || x.alias.localeCompare(E.alias)).forEach(m);
  for (const x of a) {
    const E = x.endsWith(".audio") ? x.slice(0, -6) : x, F = o.get(E);
    if (!F) {
      n.push(`未找到或已禁用素材：${x}`);
      continue;
    }
    x.endsWith(".audio") && (F.kind !== "video" || !F.includeVideoAudio) && n.push(`视频伴音未启用：${x}`), m(F);
  }
  const u = i.filter((x) => x.kind === "image"), f = i.filter((x) => x.kind === "video"), _ = f.filter((x) => x.includeVideoAudio), l = i.filter((x) => x.kind === "audio"), c = _.length + l.length, w = u.length + f.length + l.length;
  u.length > 9 && n.push(`参考图 ${u.length}/9，超出 H3 上限`), f.length > 3 && n.push(`参考视频 ${f.length}/3，超出 H3 上限`), c > 3 && n.push(`有效音频 ${c}/3，超出 H3 总上限`), w > 12 && n.push(`混合文件 ${w}/12，超出 H3 上限`), c && !u.length && !f.length && n.push("音频参考不能单独使用");
  const z = f.filter((x) => typeof x.durationSeconds == "number");
  for (const x of f) (x.durationSeconds == null || x.durationSeconds < 2 || x.durationSeconds > 15) && n.push(`视频 ${x.alias} 的时长必须为 2–15 秒`);
  z.reduce((x, E) => x + (E.durationSeconds ?? 0), 0) > 15 && n.push("参考视频总时长超过 15 秒");
  const k = [..._.map((x) => x.audioDurationSeconds ?? x.durationSeconds), ...l.map((x) => x.durationSeconds)];
  k.some((x) => x == null || x < 2 || x > 15) && n.push("每路有效音频时长必须为 2–15 秒"), k.reduce((x, E) => x + (E ?? 0), 0) > 15 && n.push("有效音频总时长超过 15 秒");
  const y = /* @__PURE__ */ new Map();
  u.forEach((x, E) => y.set(x.alias, `<Picture ${E + 1}>`)), f.forEach((x, E) => y.set(x.alias, `<Video ${E + 1}>`)), _.forEach((x, E) => y.set(`${x.alias}.audio`, `<Audio ${E + 1}>`)), l.forEach((x, E) => y.set(x.alias, `<Audio ${_.length + E + 1}>`));
  const $ = d.replace(zt(), (x, E) => y.get(E.trim()) ?? x), R = [...y.entries()].map(([x, E]) => ({ label: E, alias: x, kind: E.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: $, errors: n, slots: R, mixedFiles: w, audioCount: c };
}
function Mr(e) {
  var d, a, i, p, m, u;
  const t = [];
  (a = (d = e.project) == null ? void 0 : d.name) != null && a.trim() || t.push("Project name 不能为空"), (p = (i = e.project) == null ? void 0 : i.runId) != null && p.trim() || t.push("Run ID 不能为空"), (!Array.isArray(e.shots) || !e.shots.some((f) => f.enabled)) && t.push("至少需要一个启用分镜");
  const n = /* @__PURE__ */ new Set();
  for (const f of e.shots ?? [])
    (!((m = f.id) != null && m.trim()) || n.has(f.id)) && t.push(`分镜 ID 为空或重复：${f.id || "(空)"}`), n.add(f.id), f.durationSeconds > 0 || t.push(`分镜 ${f.id} 的时长必须大于 0`);
  const o = /* @__PURE__ */ new Set();
  for (const f of e.assets ?? []) {
    const _ = (u = f.alias) == null ? void 0 : u.toLocaleLowerCase();
    (!f.alias || /[\s{}]/.test(f.alias) || f.alias.endsWith(".audio") || o.has(_)) && t.push(`素材别名无效或重复：${f.alias || "(空)"}`), o.add(_), f.enabled && !f.path && t.push(`素材 ${f.alias} 尚未选择文件`);
  }
  for (const f of e.shots.filter((_) => _.enabled)) t.push(...Gt(e, f).errors.map((_) => `${f.title}: ${_}`));
  return [...new Set(t)];
}
function Lr(e, t) {
  const n = [], o = new RegExp(Vt, "g");
  let d = 0;
  for (const a of e.matchAll(o)) {
    const i = a.index ?? 0;
    i > d && n.push({ text: e.slice(d, i), reference: !1 }), n.push({ text: a[0], reference: !0, valid: t(a[1]) }), d = i + a[0].length;
  }
  return d < e.length && n.push({ text: e.slice(d), reference: !1 }), n;
}
function qe({ value: e, rows: t, onInput: n, isReferenceValid: o }) {
  const d = rt(null), a = Lr(e, o), i = (p) => {
    d.current && (d.current.scrollTop = p.currentTarget.scrollTop, d.current.scrollLeft = p.currentTarget.scrollLeft);
  };
  return /* @__PURE__ */ r("span", { class: "td-highlight-textarea", children: [
    /* @__PURE__ */ r("pre", { ref: d, class: "td-highlight-backdrop", "aria-hidden": "true", children: [
      a.map((p, m) => p.reference ? /* @__PURE__ */ r("mark", { class: p.valid ? "valid" : "invalid", children: p.text }, m) : p.text),
      e.endsWith(`
`) && " "
    ] }),
    /* @__PURE__ */ r("textarea", { class: "td-highlight-input", rows: t, value: e, onInput: n, onScroll: i })
  ] });
}
const Dr = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", postprocess: "后处理", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", postprocess: "Post-process", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function me(e, t) {
  return Dr[e][t];
}
function pe(e) {
  return (Array.isArray(e.results) && e.results.length ? e.results : e.path ? [{ path: e.path, bytes: e.bytes, modifiedAt: e.modifiedAt, stage: e.stage, sourcePath: e.sourcePath, completedAt: e.completedAt }] : []).filter((n) => typeof n.path == "string" && n.path.trim().length > 0).sort((n, o) => (o.modifiedAt ?? 0) - (n.modifiedAt ?? 0));
}
function Jt(e, t) {
  const n = /_video_(\d+)/i.exec(e.replace(/\\/g, "/"));
  return n ? Number(n[1]) : t;
}
function Or(e) {
  return e.stage !== "second_pass";
}
function Oe({ src: e, alt: t }) {
  const n = rt(null), [o, d] = T(!1);
  return ke(() => {
    const a = n.current;
    if (!a) return;
    if (!("IntersectionObserver" in window)) {
      d(!0);
      return;
    }
    const i = new IntersectionObserver((p) => {
      d(p.some((m) => m.isIntersecting));
    }, { rootMargin: "160px" });
    return i.observe(a), () => i.disconnect();
  }, []), /* @__PURE__ */ r("div", { class: "td-result-thumb", ref: n, children: o ? /* @__PURE__ */ r("video", { src: e, "aria-label": t, muted: !0, playsInline: !0, preload: "metadata", onLoadedMetadata: (a) => {
    const i = a.currentTarget;
    Number.isFinite(i.duration) && i.duration > 0.02 && (i.currentTime = Math.min(0.25, Math.max(0, i.duration - 0.05)));
  } }) : /* @__PURE__ */ r("span", { children: "…" }) });
}
function Yt(e, t) {
  const n = e.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!n || n.startsWith("/") || /^[A-Za-z]:\//.test(n)) return null;
  const o = n.split("/").filter(Boolean), d = o.pop();
  if (!d || o.some((i) => i === "..")) return null;
  const a = new URLSearchParams({ filename: d, type: t });
  return o.length && a.set("subfolder", o.join("/")), `/view?${a.toString()}`;
}
function Fr(e) {
  return Yt(e, "input");
}
function be(e) {
  return e ? e.url && /^https:\/\//i.test(e.url) ? e.url : Yt(e.path, "output") : null;
}
function de(e) {
  return (e.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "").split(/[?#]/, 1)[0];
}
function $t({ asset: e, compact: t = !1 }) {
  const n = Fr(e.path), o = `td-media-preview ${t ? "compact" : ""}`;
  return n ? e.kind === "image" ? /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("img", { src: n, alt: e.alias, loading: "lazy" }) }) : e.kind === "video" ? /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("video", { src: n, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("audio", { src: n, controls: !0, preload: "metadata" }) }) : e.path ? /* @__PURE__ */ r("div", { class: `${o} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ r("div", { class: `${o} empty`, children: "尚未选择素材 / No media selected" });
}
function Qt(e) {
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
function Hr(e, t, n) {
  return e.filter((o) => o.shot.enabled && t[o.key]).map((o) => ({
    shotId: o.shot.id,
    activeIndex: o.activeIndex,
    path: n[o.key] ?? ""
  }));
}
function Ur(e, t, n) {
  const o = {};
  return e.forEach((d) => {
    const a = d.sourceIndex + 1;
    o[d.key] = d.shot.enabled && a >= t && a <= n;
  }), o;
}
const Kr = /* @__PURE__ */ new Set(["mp4", "mov", "mkv", "webm", "avi"]);
function ue(e, t = window.location.hostname) {
  if (e.mode !== "auto") return e.mode;
  const n = t.toLowerCase();
  return n === "runninghub.cn" || n.endsWith(".runninghub.cn") ? "runninghub" : "local";
}
function Xt(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.split(/\r?\n|,/).map((o) => o.trim()).filter(Boolean).forEach((o) => {
    const d = o.indexOf("="), a = d >= 0 ? o.slice(0, d).trim() : "workflow", i = (d >= 0 ? o.slice(d + 1) : o).trim();
    if (!i || !/^[A-Za-z0-9_-]+$/.test(i)) return;
    const p = a.toLowerCase() === "merged" ? "merged" : a || "workflow", m = `${p}\0${i}`;
    n.has(m) || (n.add(m), t.push({ target: p, taskId: i }));
  }), t;
}
function Zt(e, t = window.location) {
  const n = t.hostname.toLowerCase(), o = n === "runninghub.cn" || n.endsWith(".runninghub.cn") ? t.origin : "https://www.runninghub.cn";
  return new URL(e, o).toString();
}
async function ze(e) {
  const t = await e.json();
  if (!e.ok) throw new Error(t.error || t.message || `HTTP ${e.status}`);
  return t;
}
async function Br(e, t, n, o) {
  var m;
  if (ue(e) === "local") {
    const u = new FormData();
    u.append("projectName", t), u.append("kind", n), u.append("file", o);
    const f = await fetch("/theodore-director/v1/assets", { method: "POST", body: u }), _ = await ze(f);
    if (!_.path) throw new Error("上传响应缺少 path");
    return _.path;
  }
  const d = e.apiKey.trim();
  if (!d) throw new Error("请先在项目设置中填写 RunningHub API Key（密钥只保存在当前页面）");
  const a = new FormData();
  a.append("file", o);
  const i = await fetch(Zt("/openapi/v2/media/upload/binary"), {
    method: "POST",
    headers: { Authorization: `Bearer ${d}` },
    body: a
  }), p = await ze(i);
  if (p.code !== 0 || !((m = p.data) != null && m.fileName)) throw new Error(p.message || "RunningHub 上传响应缺少 fileName");
  return p.data.fileName;
}
async function er(e, t) {
  const n = await fetch(Zt("/openapi/v2/query"), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${e}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ taskId: t })
  });
  return ze(n);
}
function tr(e, t) {
  return {
    path: t.url,
    url: t.url,
    provider: "runninghub",
    taskId: e,
    stage: "legacy_unknown"
  };
}
function rr(e) {
  return (e.results ?? []).filter((t) => {
    const n = t.outputType.toLowerCase().replace(/^\./, "");
    return Kr.has(n) && /^https:\/\//i.test(t.url);
  });
}
function Vr(e, t, n) {
  const o = t.shots.filter((i) => i.enabled), d = o.findIndex((i) => i.id === n.id);
  if (d < 0 || !o.length) return [];
  const a = e.filter((i) => decodeURIComponent(i.url).includes(n.id));
  return a.length ? a : o.length === 1 ? e : e.length >= o.length ? e.filter((i, p) => p % o.length === d) : [];
}
async function qr(e, t, n) {
  const o = new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t.id,
    activeIndex: String(n)
  }), d = await fetch(`/theodore-director/v1/generated-video?${o.toString()}`);
  return ze(d);
}
async function nt(e, t, n, o) {
  if (ue(e) === "local") return qr(t, n, o);
  const d = e.apiKey.trim();
  if (!d) return { found: !1, results: [], error: "请先填写 RunningHub API Key" };
  const a = Xt(e.taskMappings).filter((u) => u.target === "workflow" || u.target === n.id);
  if (!a.length) return { found: !1, results: [], error: `请添加工作流 taskId，或填写 ${n.id}=taskId` };
  const i = [], p = [];
  for (const u of a) {
    const f = await er(d, u.taskId), _ = String(f.status ?? "").toUpperCase();
    if (_ && _ !== "SUCCESS") {
      ["FAILED", "ERROR", "CANCELED", "CANCELLED"].includes(_) && p.push(f.errorMessage || `${u.taskId}: ${_}`);
      continue;
    }
    const l = rr(f), c = u.target === n.id ? l : Vr(l, t, n);
    i.push(...c.map((w) => tr(u.taskId, w)));
  }
  const m = [...new Map(i.map((u) => [u.url || u.path, u])).values()];
  return { found: m.length > 0, count: m.length, results: m, error: m.length ? void 0 : p.join("；") || void 0 };
}
async function Wr(e, t) {
  if (ue(e) === "local") {
    const i = new URLSearchParams({ projectName: t.project.name, runId: t.project.runId }), p = await fetch(`/theodore-director/v1/postprocess/merged-videos?${i.toString()}`);
    return ze(p);
  }
  const n = e.apiKey.trim();
  if (!n) return { found: !1, results: [], error: "请先填写 RunningHub API Key" };
  const o = Xt(e.taskMappings).filter((i) => i.target === "merged"), d = [];
  for (const i of o) {
    const p = await er(n, i.taskId);
    d.push(...rr(p).map((m) => tr(i.taskId, m)));
  }
  const a = [...new Map(d.map((i) => [i.url || i.path, i])).values()];
  return { found: a.length > 0, count: a.length, results: a };
}
function Gr(e, t) {
  return e === "second_pass" ? t === "zh" ? "二采" : "2nd pass" : e === "first_pass" ? t === "zh" ? "一采" : "1st pass" : t === "zh" ? "旧结果" : "Legacy";
}
function Jr({ plan: e, language: t, runtime: n, queueSecondPass: o }) {
  const d = xe(() => Qt(e), [e]), [a, i] = T({}), [p, m] = T({}), [u, f] = T(null), [_, l] = T(0);
  ke(() => {
    let w = !1;
    const z = {};
    return d.forEach((k) => {
      z[k.key] = { loading: !0, response: { found: !1, results: [] } };
    }), i(z), d.forEach((k) => {
      nt(n, e, k.shot, k.activeIndex).then((y) => {
        w || i(($) => ({ ...$, [k.key]: { loading: !1, response: y } }));
      }).catch((y) => {
        w || i(($) => ({ ...$, [k.key]: { loading: !1, response: { found: !1, results: [], error: String(y) } } }));
      });
    }), () => {
      w = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((w) => w.id).join("|"), _, n.mode, n.apiKey, n.taskMappings]);
  const c = async (w, z) => {
    if (o) {
      m((k) => ({ ...k, [z]: { state: "queued" } }));
      try {
        await o({
          plan: e,
          shotId: w,
          sourcePath: z,
          requestId: `td2_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`
        }), m((k) => ({ ...k, [z]: { state: "done" } })), l((k) => k + 1);
      } catch (k) {
        m((y) => ({ ...y, [z]: { state: "error", message: String(k instanceof Error ? k.message : k) } }));
      }
    }
  };
  return /* @__PURE__ */ r("section", { class: "td-postprocess td-second-pass-panel", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "单独二采" : "Standalone second pass" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "从满意的一采抽卡直接执行二采，不重跑一采，也不启动 Impact 循环。" : "Refine a selected first-pass result without rerunning the first pass or the Impact loop." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: /* @__PURE__ */ r("button", { onClick: () => l((w) => w + 1), children: [
        "↻ ",
        t === "zh" ? "刷新结果" : "Refresh"
      ] }) })
    ] }),
    !o && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "当前工作流缺少后处理二采支流，请重新载入仓库中的 V7 导播台示例工作流。" : "This workflow does not contain the standalone second-pass branch. Reload the V7 example workflow from the repository." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: d.map((w) => {
      const z = a[w.key], k = pe((z == null ? void 0 : z.response) ?? { results: [] });
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
        z != null && z.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading results…" }) : z != null && z.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : k.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: k.map((y) => {
          const $ = be(y), R = p[y.path], x = Or(y);
          return /* @__PURE__ */ r("div", { class: "td-second-pass-result", children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", onClick: () => $ && f({ path: $, title: `${w.shot.id} · ${w.shot.title}` }), children: [
              $ ? /* @__PURE__ */ r(Oe, { src: $, alt: de(y.path) }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  Gr(y.stage, t),
                  (y.stage === "legacy_unknown" || !y.stage) && /* @__PURE__ */ r("em", { children: t === "zh" ? "兼容" : "Compatible" })
                ] }),
                /* @__PURE__ */ r("span", { title: y.path, children: de(y.path) }),
                /* @__PURE__ */ r("small", { children: y.bytes ? `${(y.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "primary td-second-pass-run", disabled: !o || !x || (R == null ? void 0 : R.state) === "queued", onClick: () => void c(w.shot.id, y.path), children: x ? (R == null ? void 0 : R.state) === "queued" ? t === "zh" ? "排队/执行中…" : "Queued/running…" : (R == null ? void 0 : R.state) === "done" ? t === "zh" ? "二采完成" : "Completed" : t === "zh" ? "进行二采" : "Run second pass" : t === "zh" ? "已是二采" : "Already refined" }),
            (R == null ? void 0 : R.state) === "error" && /* @__PURE__ */ r("div", { class: "td-second-pass-error", children: R.message })
          ] }, y.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "没有可用的一采结果" : "No first-pass result available" })
      ] }, w.key);
    }) }),
    u && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => f(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (w) => w.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: u.title }),
        /* @__PURE__ */ r("button", { onClick: () => f(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: u.path, controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { children: de(u.path) })
    ] }) })
  ] });
}
function Yr({ plan: e, language: t, runtime: n, queueSecondPass: o, queueMerge: d }) {
  const [a, i] = T("merge");
  return /* @__PURE__ */ r("section", { class: "td-postprocess-shell", children: [
    /* @__PURE__ */ r("div", { class: "td-post-mode-tabs", role: "tablist", children: [
      /* @__PURE__ */ r("button", { class: a === "merge" ? "active" : "", role: "tab", "aria-selected": a === "merge", onClick: () => i("merge"), children: t === "zh" ? "合并视频" : "Merge videos" }),
      /* @__PURE__ */ r("button", { class: a === "second-pass" ? "active" : "", role: "tab", "aria-selected": a === "second-pass", onClick: () => i("second-pass"), children: t === "zh" ? "单独二采" : "Standalone second pass" })
    ] }),
    a === "merge" ? /* @__PURE__ */ r(Qr, { plan: e, language: t, runtime: n, queueMerge: d }) : /* @__PURE__ */ r(Jr, { plan: e, language: t, runtime: n, queueSecondPass: o })
  ] });
}
function Qr({ plan: e, language: t, runtime: n, queueMerge: o }) {
  const d = xe(() => Qt(e), [e]), [a, i] = T({}), [p, m] = T({}), [u, f] = T({}), [_, l] = T(null), [c, w] = T(!1), [z, k] = T(""), [y, $] = T(""), [R, x] = T({ found: !1, results: [] }), [E, F] = T(!1), [D, M] = T(!1), [b, j] = T(""), [O, P] = T(0), [G, Q] = T("1"), [W, re] = T(String(d.length || 1)), he = d.filter((g) => g.shot.enabled), ve = he.length > 0 && he.every((g) => p[g.key]), V = Hr(d, p, u), X = V.filter((g) => !g.path), $e = d.some((g) => {
    var I;
    return p[g.key] && ((I = a[g.key]) == null ? void 0 : I.loading);
  }), Ie = d.reduce(
    (g, I) => g + (I.shot.enabled && p[I.key] ? I.shot.durationSeconds : 0),
    0
  ), ee = xe(() => pe(R), [R]), ae = ee.find((g) => g.path === b) ?? ee[0];
  ke(() => {
    let g = !1;
    const I = {}, U = {};
    return d.forEach((C) => {
      I[C.key] = C.shot.enabled, U[C.key] = { loading: !0, response: { found: !1, results: [] } };
    }), m((C) => {
      const A = {};
      return d.forEach((K) => {
        A[K.key] = K.shot.enabled ? C[K.key] ?? I[K.key] : !1;
      }), A;
    }), i(U), k(""), d.forEach((C) => {
      nt(n, e, C.shot, C.activeIndex).then((A) => {
        if (g) return;
        const K = pe(A);
        i((J) => ({ ...J, [C.key]: { loading: !1, response: A } })), f((J) => {
          var ie;
          return {
            ...J,
            [C.key]: K.some((Z) => Z.path === J[C.key]) ? J[C.key] : ((ie = K[0]) == null ? void 0 : ie.path) ?? ""
          };
        });
      }).catch((A) => {
        g || i((K) => ({
          ...K,
          [C.key]: { loading: !1, response: { found: !1, results: [], error: String(A) } }
        }));
      });
    }), () => {
      g = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((g) => `${g.id}:${g.enabled}`).join("|"), O, n.mode, n.apiKey, n.taskMappings]), ke(() => {
    let g = !1;
    return F(!0), Wr(n, e).then((I) => {
      if (g) return;
      const U = pe(I);
      x(I), j((C) => {
        var A;
        return U.some((K) => K.path === C) ? C : ((A = U[0]) == null ? void 0 : A.path) ?? "";
      });
    }).catch((I) => {
      g || x({ found: !1, results: [], error: String(I) });
    }).finally(() => {
      g || F(!1);
    }), () => {
      g = !0;
    };
  }, [e.project.name, e.project.runId, O, n.mode, n.apiKey, n.taskMappings]);
  const Ce = () => {
    const g = !ve;
    m((I) => {
      const U = { ...I };
      return he.forEach((C) => {
        U[C.key] = g;
      }), U;
    });
  }, Ue = () => {
    const g = Number(G), I = Number(W);
    if (!Number.isInteger(g) || !Number.isInteger(I) || g < 1 || I < g || I > d.length) {
      window.alert(t === "zh" ? `请输入有效范围：1 ≤ m ≤ n ≤ ${d.length}` : `Enter a valid range: 1 ≤ m ≤ n ≤ ${d.length}`);
      return;
    }
    m(Ur(d, g, I));
  }, te = async () => {
    if (!V.length) {
      window.alert(t === "zh" ? "请至少选择一个镜头" : "Select at least one shot.");
      return;
    }
    if (X.length) {
      window.alert(t === "zh" ? `以下已选镜头没有可用结果：${X.map((g) => g.shotId).join("、")}` : `Selected shots without a result: ${X.map((g) => g.shotId).join(", ")}`);
      return;
    }
    w(!0), k("");
    try {
      if (o) {
        const g = await o({
          projectName: e.project.name,
          runId: e.project.runId,
          selections: V,
          requestId: `tdm_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`
        });
        g ? (x((I) => ({
          found: !0,
          results: [g, ...pe(I).filter((U) => U.path !== g.path)]
        })), j(g.path)) : P((I) => I + 1);
      } else if (ue(n) === "local") {
        const g = await fetch("/theodore-director/v1/postprocess/merge", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId, selections: V })
        }), I = await g.json();
        if (!g.ok) throw new Error(I.error || `HTTP ${g.status}`);
        P((U) => U + 1);
      } else
        throw new Error(t === "zh" ? "当前工作流缺少 RunningHub 合并支流" : "This workflow is missing the RunningHub merge branch");
    } catch (g) {
      k(String(g instanceof Error ? g.message : g));
    } finally {
      w(!1);
    }
  }, _e = async () => {
    if (ue(n) !== "runninghub") {
      M(!0), $("");
      try {
        const g = await fetch("/theodore-director/v1/postprocess/open-folder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId })
        }), I = await g.json();
        if (!g.ok) throw new Error(I.error || `HTTP ${g.status}`);
      } catch (g) {
        $(String(g instanceof Error ? g.message : g));
      } finally {
        M(!1);
      }
    }
  }, le = be(ae);
  return /* @__PURE__ */ r("section", { class: "td-postprocess", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并视频" : "Merge videos" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "从每个镜头选择一个结果，按当前分镜顺序进行无损合并。" : "Choose one result per shot and merge them losslessly in storyboard order." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: [
        ue(n) === "local" && /* @__PURE__ */ r("button", { disabled: D, onClick: _e, children: [
          "📁 ",
          D ? t === "zh" ? "正在打开…" : "Opening…" : t === "zh" ? "打开结果文件夹" : "Open results folder"
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => P((g) => g + 1), children: [
          "↻ ",
          t === "zh" ? "刷新结果" : "Refresh"
        ] }),
        /* @__PURE__ */ r("button", { onClick: Ce, children: ve ? t === "zh" ? "全部取消" : "Clear all" : t === "zh" ? "一键全选" : "Select all" })
      ] })
    ] }),
    y && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "打开结果文件夹失败：" : "Unable to open results folder: ",
      y
    ] }),
    /* @__PURE__ */ r("div", { class: "td-post-summary", children: [
      /* @__PURE__ */ r("span", { children: t === "zh" ? `已选择 ${V.length}/${he.length} 个启用镜头` : `${V.length}/${he.length} enabled shots selected` }),
      /* @__PURE__ */ r("span", { children: t === "zh" ? `预计时长 ${Ie.toFixed(1)} 秒` : `Estimated duration ${Ie.toFixed(1)} sec` }),
      /* @__PURE__ */ r("div", { class: "td-post-range", role: "group", "aria-label": t === "zh" ? "合并视频范围" : "Merge video range", children: [
        /* @__PURE__ */ r("span", { children: t === "zh" ? "范围" : "Range" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: d.length, step: "1", value: G, "aria-label": t === "zh" ? "起始镜头 m" : "Start shot m", onInput: (g) => Q(g.currentTarget.value) }),
        /* @__PURE__ */ r("span", { children: "—" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: d.length, step: "1", value: W, "aria-label": t === "zh" ? "结束镜头 n" : "End shot n", onInput: (g) => re(g.currentTarget.value) }),
        /* @__PURE__ */ r("button", { disabled: !d.length, onClick: Ue, children: t === "zh" ? "确认范围" : "Apply range" })
      ] }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: c || $e || !V.length || !!X.length, onClick: te, children: c ? t === "zh" ? "正在合并…" : "Merging…" : t === "zh" ? "合并所选视频" : "Merge selected videos" })
    ] }),
    z && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "合并失败：" : "Merge failed: ",
      z
    ] }),
    X.length > 0 && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "已选镜头中存在尚未生成视频的镜头。" : "Some selected shots do not have generated videos yet." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: d.map((g) => {
      const I = a[g.key], U = pe((I == null ? void 0 : I.response) ?? { results: [] }), C = !!p[g.key];
      return /* @__PURE__ */ r("article", { class: `td-post-shot ${C ? "selected" : ""} ${g.shot.enabled ? "" : "disabled"}`, children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: C, disabled: !g.shot.enabled, onChange: (A) => m((K) => ({ ...K, [g.key]: A.currentTarget.checked })) }),
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("strong", { children: g.shot.id }),
              /* @__PURE__ */ r("em", { children: g.shot.title })
            ] })
          ] }),
          /* @__PURE__ */ r("span", { children: [
            g.shot.durationSeconds,
            "s"
          ] })
        ] }),
        !g.shot.enabled && /* @__PURE__ */ r("div", { class: "td-post-shot-disabled-note", children: t === "zh" ? "该镜头当前已禁用：历史结果可以预览，但不能参加合并。" : "This shot is disabled: historical results can be previewed but cannot be merged." }),
        I != null && I.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading generated results…" }) : I != null && I.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : U.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: U.map((A, K) => {
          const J = be(A), ie = u[g.key] === A.path, Z = Jt(A.path, U.length - K);
          return /* @__PURE__ */ r("div", { class: `td-post-result ${ie ? "selected" : ""}`, children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", role: "radio", "aria-checked": ie, onClick: () => f((ne) => ({ ...ne, [g.key]: A.path })), children: [
              J ? /* @__PURE__ */ r(Oe, { src: J, alt: `${g.shot.title} ${t === "zh" ? "结果" : "result"} ${Z}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  t === "zh" ? `结果 ${Z}` : `Result ${Z}`,
                  K === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
                ] }),
                /* @__PURE__ */ r("span", { title: A.path, children: de(A.path) }),
                /* @__PURE__ */ r("small", { children: A.bytes ? `${(A.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "td-post-result-play", disabled: !J, title: t === "zh" ? "播放预览" : "Play preview", onClick: () => J && l({ path: J, title: `${g.shot.id} · ${g.shot.title}` }), children: "▶" })
          ] }, A.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "未找到这个镜头的生成结果" : "No generated result found for this shot" })
      ] }, g.key);
    }) }),
    /* @__PURE__ */ r("section", { class: "td-post-merged", children: [
      /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并结果" : "Merged results" }),
        /* @__PURE__ */ r("span", { class: `td-result-state ${ee.length ? "found" : ""}`, children: E ? t === "zh" ? "查询中" : "Checking" : t === "zh" ? `${ee.length} 个结果` : `${ee.length} results` })
      ] }) }),
      E ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "正在查询合并结果…" : "Loading merged results…" }) : R.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: t === "zh" ? "无法查询合并结果" : "Unable to query merged results" }) : ae && le ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
        /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
          /* @__PURE__ */ r("video", { src: le, controls: !0, preload: "metadata", playsInline: !0 }, ae.path),
          /* @__PURE__ */ r("div", { class: "td-generated-meta", title: ae.path, children: ae.path })
        ] }),
        /* @__PURE__ */ r("div", { class: "td-result-list", children: ee.map((g, I) => {
          const U = be(g);
          return /* @__PURE__ */ r("button", { class: `td-result-item ${g.path === ae.path ? "selected" : ""}`, onClick: () => j(g.path), children: [
            U ? /* @__PURE__ */ r(Oe, { src: U, alt: `${t === "zh" ? "合并结果" : "Merged result"} ${ee.length - I}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
            /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
              /* @__PURE__ */ r("strong", { children: [
                t === "zh" ? `合并结果 ${ee.length - I}` : `Merged result ${ee.length - I}`,
                I === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
              ] }),
              /* @__PURE__ */ r("span", { children: de(g.path) }),
              /* @__PURE__ */ r("small", { children: g.bytes ? `${(g.bytes / 1024 / 1024).toFixed(1)} MB` : g.taskId ? `task ${g.taskId}` : "" })
            ] })
          ] }, g.path);
        }) })
      ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "还没有合并结果" : "No merged result yet" })
    ] }),
    _ && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => l(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (g) => g.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: _.title }),
        /* @__PURE__ */ r("button", { "aria-label": t === "zh" ? "关闭预览" : "Close preview", onClick: () => l(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: _.path, controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { title: _.path, children: de(_.path) })
    ] }) })
  ] });
}
function Xr(e) {
  const t = e.reduce((n, o) => {
    const d = /^shot_(\d+)$/i.exec(o.id.trim());
    return d ? Math.max(n, Number(d[1])) : n;
  }, 0);
  return Math.max(t, e.length) + 1;
}
function Zr(e, t = 5) {
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
function It(e, t, n) {
  const o = Xr(e), d = Array.from({ length: t }, (a, i) => Zr(o + i, n));
  return [...e, ...d];
}
const ot = "theodore-director.runninghub-api-key";
function it() {
  try {
    return typeof window > "u" ? null : window.localStorage;
  } catch {
    return null;
  }
}
function en(e = it()) {
  var t;
  try {
    return ((t = e == null ? void 0 : e.getItem(ot)) == null ? void 0 : t.trim()) || null;
  } catch {
    return null;
  }
}
function tn(e, t = it()) {
  const n = e.trim();
  if (!n || !t) return !1;
  try {
    return t.setItem(ot, n), !0;
  } catch {
    return !1;
  }
}
function We(e = it()) {
  if (!e) return !1;
  try {
    return e.removeItem(ot), !0;
  } catch {
    return !1;
  }
}
const nr = (e) => `${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, Pe = (e) => JSON.parse(JSON.stringify(e)), rn = { image: "图片", video: "视频", audio: "音频" };
function Ct(e) {
  var n, o;
  const t = Pe(e);
  return t.schemaVersion = 4, (n = t.project.id) != null && n.trim() || (t.project.id = nr("project")), (o = t.project).runningHubTaskMappings ?? (o.runningHubTaskMappings = ""), t.shots = t.shots.map((d) => ({
    ...d,
    latentRelay: d.latentRelay ?? !0,
    secondSampling: d.secondSampling ?? !0
  })), t;
}
function nn(e) {
  return e.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function on(e) {
  const t = nr(e);
  return { id: t, alias: t, kind: e, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: e === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function sn(e) {
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
function dn({ initial: e, onSave: t, onClose: n, supportsSecondSampling: o, queueSecondPass: d, queueMerge: a }) {
  const [i, p] = T(() => Ct(e)), [m] = T(() => en()), [u, f] = T("shots"), [_, l] = T(0), [c, w] = T(() => navigator.language.startsWith("zh") ? "zh" : "en"), [z, k] = T({}), [y, $] = T(!1), [R, x] = T(!0), [E, F] = T(0), [D, M] = T({ found: !1, results: [] }), [b, j] = T(""), [O, P] = T(!1), [G, Q] = T(""), [W, re] = T(!1), [he, ve] = T(!1), [V, X] = T([]), [$e, Ie] = T("5"), [ee, ae] = T("1"), [Ce, Ue] = T("5"), [te, _e] = T(() => ({ mode: "auto", apiKey: m ?? "", taskMappings: e.project.runningHubTaskMappings ?? "" })), [le, g] = T(() => ({ mode: "auto", apiKey: m ?? "", taskMappings: e.project.runningHubTaskMappings ?? "" })), [I, U] = T(m !== null), C = i.shots[Math.min(_, i.shots.length - 1)], A = xe(() => C ? Gt(i, C) : null, [i, C]), K = C != null && C.enabled ? i.shots.slice(0, _).filter((s) => s.enabled).length : -1, J = i.shots.length > 0 && i.shots.every((s) => s.secondSampling), ie = V.length > 0 && V.every((s) => s.enabled), Z = xe(() => pe(D), [D]), ne = Z.find((s) => s.path === b) ?? Z[0], st = be(ne), dt = ue(te), at = (s, h, v) => Br(te, s, h, v), N = (s) => p((h) => {
    const v = Pe(h);
    return s(v), v;
  }), lt = (s, h) => N((v) => {
    const S = s + h;
    S < 0 || S >= v.shots.length || ([v.shots[s], v.shots[S]] = [v.shots[S], v.shots[s]], l(S));
  }), or = (s) => N((h) => {
    h.shots.length <= 1 || (h.shots.splice(s, 1), l((v) => v > s ? v - 1 : v === s ? Math.min(s, h.shots.length - 1) : v));
  }), ir = () => {
    X(Pe(i.shots)), re(!0);
  }, sr = () => {
    const s = Number($e);
    if (!Number.isFinite(s) || s <= 0) {
      window.alert(c === "zh" ? "统一时长必须大于 0 秒" : "The shared duration must be greater than 0 seconds.");
      return;
    }
    X((h) => h.map((v) => ({ ...v, durationSeconds: s })));
  }, dr = () => {
    const s = Number(ee), h = Number(Ce);
    if (!Number.isInteger(s) || s < 1 || s > 100) {
      window.alert(c === "zh" ? "新增镜头数量必须是 1–100 的整数" : "The shot count must be an integer from 1 to 100.");
      return;
    }
    if (!Number.isFinite(h) || h <= 0) {
      window.alert(c === "zh" ? "新增镜头时长必须大于 0 秒" : "The new-shot duration must be greater than 0 seconds.");
      return;
    }
    X((v) => It(v, s, h));
  }, ar = () => {
    const s = !ie;
    X((h) => h.map((v) => ({ ...v, enabled: s })));
  }, lr = () => {
    if (V.some((s) => !Number.isFinite(s.durationSeconds) || s.durationSeconds <= 0)) {
      window.alert(c === "zh" ? "每个镜头的时长都必须大于 0 秒" : "Every shot duration must be greater than 0 seconds.");
      return;
    }
    N((s) => {
      s.shots = Pe(V);
    }), l((s) => Math.min(s, V.length - 1)), re(!1);
  }, cr = () => {
    const s = URL.createObjectURL(new Blob([JSON.stringify(i, null, 2)], { type: "application/json" })), h = document.createElement("a");
    h.href = s, h.download = `${nn(i.project.name)}.director.json`, h.click(), URL.revokeObjectURL(s);
  }, pr = () => {
    const s = Mr(i);
    if (s.length) {
      window.alert(`计划未通过校验：

${s.join(`
`)}`);
      return;
    }
    t(i);
  }, ur = () => {
    const s = { ...le };
    N((h) => {
      h.project.runningHubTaskMappings = s.taskMappings;
    }), _e(s), I && s.apiKey.trim() ? tn(s.apiKey) || window.alert(c === "zh" ? "浏览器拒绝本地保存 API Key；本次会话仍可继续使用。" : "The browser blocked local API Key storage; it remains available for this session.") : We();
  }, hr = () => {
    We(), U(!1), _e((s) => ({ ...s, apiKey: "" })), g((s) => ({ ...s, apiKey: "" }));
  }, mr = (s) => {
    const h = Ct(s);
    p(h), _e((v) => ({ ...v, taskMappings: h.project.runningHubTaskMappings ?? "" })), g((v) => ({ ...v, taskMappings: h.project.runningHubTaskMappings ?? "" })), l(0);
  };
  return ke(() => {
    let s = !1;
    return C ? (P(!0), nt(te, i, C, K).then((h) => {
      if (s) return;
      const v = pe(h);
      M(h), j((S) => {
        var L;
        return v.some((Y) => Y.path === S) ? S : ((L = v[0]) == null ? void 0 : L.path) ?? "";
      });
    }).catch((h) => {
      s || (M({ found: !1, results: [], error: String(h) }), j(""));
    }).finally(() => {
      s || P(!1);
    }), () => {
      s = !0;
    }) : (M({ found: !1, results: [] }), j(""), P(!1), () => {
      s = !0;
    });
  }, [i.project.name, i.project.runId, C == null ? void 0 : C.id, C == null ? void 0 : C.enabled, K, E, te.mode, te.apiKey, te.taskMappings]), /* @__PURE__ */ r("div", { class: "td-shell", children: [
    /* @__PURE__ */ r("header", { children: [
      /* @__PURE__ */ r("h1", { children: me(c, "title") }),
      /* @__PURE__ */ r("div", { class: "td-actions", children: [
        /* @__PURE__ */ r("button", { onClick: cr, children: "导出 / Export" }),
        /* @__PURE__ */ r("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ r("input", { type: "file", accept: "application/json,.json", onChange: async (s) => {
            var v;
            const h = (v = s.currentTarget.files) == null ? void 0 : v[0];
            if (h)
              try {
                const S = JSON.parse(await h.text());
                if (!S.project || !Array.isArray(S.shots) || !Array.isArray(S.assets)) throw new Error("不是有效的 Theodore Director Plan");
                mr(S);
              } catch (S) {
                window.alert(String(S));
              }
          } })
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => w(c === "zh" ? "en" : "zh"), children: c === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: pr, children: me(c, "save") }),
        /* @__PURE__ */ r("button", { onClick: n, children: me(c, "close") })
      ] })
    ] }),
    /* @__PURE__ */ r("nav", { children: ["shots", "assets", "settings", "postprocess"].map((s) => /* @__PURE__ */ r("button", { class: u === s ? "active" : "", onClick: () => f(s), children: me(c, s) })) }),
    /* @__PURE__ */ r("main", { children: [
      u === "shots" && /* @__PURE__ */ r("div", { class: "td-shots", children: [
        /* @__PURE__ */ r("aside", { class: "td-shot-sidebar", children: [
          o && /* @__PURE__ */ r("button", { class: `wide td-bulk-toggle ${J ? "active" : ""}`, onClick: () => N((s) => {
            const h = !s.shots.every((v) => v.secondSampling);
            s.shots.forEach((v) => {
              v.secondSampling = h;
            });
          }), children: c === "zh" ? `全部二次采样：${J ? "开" : "关"}` : `Second sampling for all: ${J ? "ON" : "OFF"}` }),
          /* @__PURE__ */ r("div", { class: "td-shot-list", children: i.shots.map((s, h) => /* @__PURE__ */ r("div", { class: `td-shot-card ${h === _ ? "selected" : ""}`, onClick: () => l(h), children: [
            /* @__PURE__ */ r("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ r("button", { class: "td-shot-delete", disabled: i.shots.length <= 1, title: c === "zh" ? i.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : i.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": c === "zh" ? "删除镜头" : "Delete shot", onClick: (v) => {
              v.stopPropagation(), or(h);
            }, children: "×" }) }),
            /* @__PURE__ */ r("strong", { children: [
              h + 1,
              ". ",
              s.title
            ] }),
            /* @__PURE__ */ r("span", { children: [
              s.durationSeconds,
              "s · ",
              s.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-move-actions", children: [
              /* @__PURE__ */ r("button", { title: c === "zh" ? "上移镜头" : "Move shot up", onClick: (v) => {
                v.stopPropagation(), lt(h, -1);
              }, children: "↑" }),
              /* @__PURE__ */ r("button", { title: c === "zh" ? "下移镜头" : "Move shot down", onClick: (v) => {
                v.stopPropagation(), lt(h, 1);
              }, children: "↓" })
            ] })
          ] }, s.id)) }),
          /* @__PURE__ */ r("button", { class: "wide", onClick: () => N((s) => {
            const h = s.shots.length;
            s.shots = It(s.shots, 1, 5), l(h);
          }), children: [
            "＋ ",
            me(c, "addShot")
          ] }),
          /* @__PURE__ */ r("div", { class: "td-shot-batch-entry", children: /* @__PURE__ */ r("button", { class: "wide", onClick: ir, children: c === "zh" ? "批量处理镜头" : "Batch edit shots" }) })
        ] }),
        C && /* @__PURE__ */ r("section", { class: "td-form", children: [
          /* @__PURE__ */ r("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ r("label", { children: [
              "ID",
              /* @__PURE__ */ r("input", { value: C.id, onInput: (s) => N((h) => {
                h.shots[_].id = s.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ r("input", { value: C.title, onInput: (s) => N((h) => {
                h.shots[_].title = s.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: C.durationSeconds, onInput: (s) => N((h) => {
                h.shots[_].durationSeconds = Number(s.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: C.enabled, onChange: (s) => N((h) => {
                  h.shots[_].enabled = s.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: K === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: C.latentRelay, onChange: (s) => N((h) => {
                  h.shots[_].latentRelay = s.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: [
                  "latent接力 / Relay",
                  K === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              o && /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: "开启时执行 RTX 超分和第二次 H3 采样，关闭时直接使用第一采画面", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: C.secondSampling, onChange: (s) => N((h) => {
                  h.shots[_].secondSampling = s.currentTarget.checked;
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
            /* @__PURE__ */ r(qe, { rows: 10, value: C.prompt, isReferenceValid: (s) => Wt(i, C, s), onInput: (s) => N((h) => {
              h.shots[_].prompt = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ r("textarea", { rows: 3, value: C.negativePrompt, onInput: (s) => N((h) => {
              h.shots[_].negativePrompt = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ r("legend", { children: "本镜头素材 / Shot media" }),
            i.assets.map((s) => {
              const h = !C.disabledAssetIds.includes(s.id), v = de(s.path) || s.alias, S = `{{ref:${s.alias}}}`;
              return /* @__PURE__ */ r("div", { class: `td-shot-media-card ${h ? "" : "disabled"}`, children: [
                /* @__PURE__ */ r("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ r($t, { asset: s, compact: !0 }),
                  /* @__PURE__ */ r("span", { class: "td-shot-media-kind", children: c === "zh" ? rn[s.kind] : s.kind }),
                  /* @__PURE__ */ r("label", { class: "td-shot-media-toggle", title: h ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ r("input", { type: "checkbox", checked: h, onChange: (L) => N((Y) => {
                    const oe = Y.shots[_].disabledAssetIds;
                    Y.shots[_].disabledAssetIds = L.currentTarget.checked ? oe.filter((ge) => ge !== s.id) : [.../* @__PURE__ */ new Set([...oe, s.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ r("button", { class: `td-shot-media-name ${G === s.id ? "copied" : ""}`, title: `${v}
${c === "zh" ? "点击复制" : "Click to copy"} ${S}`, onClick: async () => {
                  try {
                    await sn(S), Q(s.id), window.setTimeout(() => Q((L) => L === s.id ? "" : L), 1400);
                  } catch (L) {
                    window.alert(`${c === "zh" ? "复制失败" : "Copy failed"}: ${String(L)}`);
                  }
                }, children: [
                  /* @__PURE__ */ r("span", { children: v }),
                  G === s.id && /* @__PURE__ */ r("em", { children: c === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, s.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ r("aside", { class: "td-preview", children: [
          /* @__PURE__ */ r("details", { open: y, onToggle: (s) => $(s.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: me(c, "preview") }),
              /* @__PURE__ */ r("span", { class: "td-summary-counts", children: [
                "Picture ",
                (A == null ? void 0 : A.slots.filter((s) => s.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (A == null ? void 0 : A.slots.filter((s) => s.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (A == null ? void 0 : A.audioCount) ?? 0,
                "/3 · Files ",
                (A == null ? void 0 : A.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body", children: [
              A != null && A.errors.length ? /* @__PURE__ */ r("ul", { class: "errors", children: A.errors.map((s) => /* @__PURE__ */ r("li", { children: s })) }) : /* @__PURE__ */ r("p", { class: "ok", children: me(c, "noErrors") }),
              /* @__PURE__ */ r("ol", { children: A == null ? void 0 : A.slots.map((s) => /* @__PURE__ */ r("li", { children: [
                /* @__PURE__ */ r("code", { children: s.label }),
                " ← ",
                s.alias
              ] })) }),
              /* @__PURE__ */ r("pre", { children: A == null ? void 0 : A.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ r("details", { open: R, onToggle: (s) => x(s.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: c === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ r("span", { class: `td-result-state ${Z.length ? "found" : ""}`, children: O ? c === "zh" ? "查询中" : "Checking" : Z.length ? c === "zh" ? `${Z.length} 个结果` : `${Z.length} results` : c === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ r("div", { class: "td-result-actions", children: /* @__PURE__ */ r("button", { onClick: () => F((s) => s + 1), children: [
                "↻ ",
                c === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              O ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: c === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : D.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: D.error }) : ne && st ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
                /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
                  /* @__PURE__ */ r("video", { src: st, controls: !0, preload: "metadata", playsInline: !0 }, ne.path),
                  /* @__PURE__ */ r("div", { class: "td-generated-meta", title: ne.path, children: [
                    ne.path,
                    ne.bytes ? ` · ${(ne.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                  ] })
                ] }),
                /* @__PURE__ */ r("div", { class: "td-result-list", "aria-label": c === "zh" ? "全部生成结果" : "All generated results", children: Z.map((s, h) => {
                  const v = be(s), S = Jt(s.path, Z.length - h), L = s.modifiedAt ? new Date(s.modifiedAt * 1e3).toLocaleString(c === "zh" ? "zh-CN" : "en-US") : "";
                  return /* @__PURE__ */ r("button", { class: `td-result-item ${s.path === ne.path ? "selected" : ""}`, onClick: () => j(s.path), children: [
                    v ? /* @__PURE__ */ r(Oe, { src: v, alt: `${c === "zh" ? "结果" : "Result"} ${S}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: /* @__PURE__ */ r("span", { children: "×" }) }),
                    /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
                      /* @__PURE__ */ r("strong", { children: [
                        c === "zh" ? `结果 ${S}` : `Result ${S}`,
                        h === 0 && /* @__PURE__ */ r("em", { children: c === "zh" ? "最新" : "Latest" })
                      ] }),
                      /* @__PURE__ */ r("span", { title: s.path, children: de(s.path) }),
                      /* @__PURE__ */ r("small", { children: [s.bytes ? `${(s.bytes / 1024 / 1024).toFixed(1)} MB` : "", L, s.taskId ? `task ${s.taskId}` : ""].filter(Boolean).join(" · ") })
                    ] })
                  ] }, s.path);
                }) })
              ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: c === "zh" ? "未找到本段视频" : "No video found for this shot" })
            ] })
          ] })
        ] })
      ] }),
      u === "assets" && /* @__PURE__ */ r("div", { class: "td-assets", children: [
        dt === "runninghub" && /* @__PURE__ */ r("div", { class: `td-runtime-banner ${te.apiKey.trim() ? "ready" : ""}`, children: te.apiKey.trim() ? c === "zh" ? "RunningHub 上传已启用；素材路径将保存官方 fileName。" : "RunningHub upload is ready; the official fileName will be stored." : c === "zh" ? "RunningHub 模式：请先在项目设置填写 API Key，再上传素材。" : "RunningHub mode: enter an API Key in Project settings before uploading." }),
        /* @__PURE__ */ r("div", { class: "td-toolbar", children: [
          ["image", "video", "audio"].map((s) => /* @__PURE__ */ r("button", { onClick: () => N((h) => h.assets.push(on(s))), children: [
            "＋ ",
            s
          ] })),
          /* @__PURE__ */ r("button", { class: "td-asset-batch-entry", onClick: () => ve(!0), children: [
            "⇧ ",
            c === "zh" ? "批量导入素材" : "Batch import assets"
          ] })
        ] }),
        i.assets.map((s, h) => /* @__PURE__ */ r("article", { children: /* @__PURE__ */ r("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ r("div", { class: "td-grid", children: [
              /* @__PURE__ */ r("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ r("input", { value: s.alias, onInput: (v) => N((S) => {
                  S.assets[h].alias = v.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ r("select", { value: s.kind, onChange: (v) => N((S) => {
                  S.assets[h].kind = v.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ r("option", { children: "image" }),
                  /* @__PURE__ */ r("option", { children: "video" }),
                  /* @__PURE__ */ r("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ r("input", { value: s.path, onInput: (v) => N((S) => {
                  S.assets[h].path = v.currentTarget.value;
                }) }),
                /* @__PURE__ */ r("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ r("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ r("input", { type: "file", accept: s.kind === "image" ? "image/*" : s.kind === "video" ? "video/*" : "audio/*", onChange: async (v) => {
                      var Y;
                      const S = v.currentTarget, L = (Y = S.files) == null ? void 0 : Y[0];
                      if (L) {
                        k((oe) => ({ ...oe, [s.id]: L.name }));
                        try {
                          const oe = await at(i.project.name, s.kind, L);
                          N((ge) => {
                            const ct = ge.assets.find((fr) => fr.id === s.id);
                            ct && (ct.path = oe);
                          });
                        } catch (oe) {
                          window.alert(String(oe));
                        } finally {
                          k((oe) => {
                            const ge = { ...oe };
                            return delete ge[s.id], ge;
                          }), S.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ r("span", { class: "td-file-name", title: z[s.id] || s.path, children: z[s.id] ? `${c === "zh" ? "上传中" : "Uploading"}: ${z[s.id]}` : de(s.path) || (c === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ r("input", { type: "number", min: "0", step: "0.1", value: s.durationSeconds ?? "", onInput: (v) => N((S) => {
                  S.assets[h].durationSeconds = v.currentTarget.value ? Number(v.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ r("input", { type: "number", value: s.fixedOrder, onInput: (v) => N((S) => {
                  S.assets[h].fixedOrder = Number(v.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ r("input", { value: s.shotIds.join(", "), onInput: (v) => N((S) => {
                  S.assets[h].shotIds = v.currentTarget.value.split(",").map((L) => L.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-flags", children: [
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: s.enabled, onChange: (v) => N((S) => {
                  S.assets[h].enabled = v.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: s.fixed, onChange: (v) => N((S) => {
                  S.assets[h].fixed = v.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              s.kind === "video" && /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: s.includeVideoAudio, onChange: (v) => N((S) => {
                  S.assets[h].includeVideoAudio = v.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ r("button", { class: "danger", onClick: () => N((v) => {
                v.assets.splice(h, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ r($t, { asset: s })
        ] }) }, s.id))
      ] }),
      u === "settings" && /* @__PURE__ */ r("section", { class: "td-form settings", children: [
        /* @__PURE__ */ r("fieldset", { class: "td-runtime-settings", children: [
          /* @__PURE__ */ r("legend", { children: c === "zh" ? "运行环境" : "Runtime" }),
          /* @__PURE__ */ r("label", { children: [
            c === "zh" ? "适配器" : "Adapter",
            /* @__PURE__ */ r("select", { value: le.mode, onChange: (s) => g((h) => ({ ...h, mode: s.currentTarget.value })), children: [
              /* @__PURE__ */ r("option", { value: "auto", children: c === "zh" ? "自动检测" : "Auto detect" }),
              /* @__PURE__ */ r("option", { value: "local", children: c === "zh" ? "本地 ComfyUI" : "Local ComfyUI" }),
              /* @__PURE__ */ r("option", { value: "runninghub", children: "RunningHub" })
            ] })
          ] }),
          /* @__PURE__ */ r("div", { class: "td-runtime-status", children: [
            c === "zh" ? "当前：" : "Active: ",
            /* @__PURE__ */ r("strong", { children: dt === "runninghub" ? "RunningHub" : "Local ComfyUI" })
          ] }),
          ue(le) === "runninghub" && /* @__PURE__ */ r(Se, { children: [
            /* @__PURE__ */ r("label", { children: [
              "RunningHub API Key",
              /* @__PURE__ */ r("input", { type: "password", autocomplete: "off", value: le.apiKey, placeholder: c === "zh" ? "默认仅保存在当前页面内存" : "Kept only in page memory by default", onInput: (s) => g((h) => ({ ...h, apiKey: s.currentTarget.value })) })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-runtime-key-controls", children: [
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: I, onChange: (s) => U(s.currentTarget.checked) }),
                /* @__PURE__ */ r("span", { children: c === "zh" ? "在此设备记住 API Key" : "Remember API Key on this device" })
              ] }),
              /* @__PURE__ */ r("button", { type: "button", onClick: hr, children: c === "zh" ? "清除已保存 Key" : "Clear saved Key" }),
              /* @__PURE__ */ r("small", { children: c === "zh" ? "默认不保存；公共电脑不建议启用。Key 仅写入当前浏览器站点存储，不进入工作流或导出文件。" : "Off by default; avoid on shared computers. The key is stored only in this browser and never enters the workflow or exports." })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              c === "zh" ? "任务映射（每行一项）" : "Task mappings (one per line)",
              /* @__PURE__ */ r("textarea", { rows: 5, value: le.taskMappings, placeholder: `完整工作流 taskId
shot_003=taskId
merged=taskId`, onInput: (s) => {
                const h = s.currentTarget.value;
                g((v) => ({ ...v, taskMappings: h })), N((v) => {
                  v.project.runningHubTaskMappings = h;
                });
              } }),
              /* @__PURE__ */ r("small", { children: c === "zh" ? "单独 taskId 按启用镜头顺序归属；也可显式指定镜头或合并任务。任务映射属于项目数据，会随工作流保存、导入和导出。" : "A bare taskId follows enabled-shot order; shot and merged tasks can be explicit. Task mappings are project data and follow workflow save, import, and export." })
            ] })
          ] }),
          /* @__PURE__ */ r("div", { class: "td-runtime-apply", children: /* @__PURE__ */ r("button", { class: "primary", onClick: ur, children: c === "zh" ? "应用运行环境设置" : "Apply runtime settings" }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Project name",
          /* @__PURE__ */ r("input", { value: i.project.name, onInput: (s) => N((h) => {
            h.project.name = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Run ID",
          /* @__PURE__ */ r("input", { value: i.project.runId, onInput: (s) => N((h) => {
            h.project.runId = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "FPS",
          /* @__PURE__ */ r("input", { type: "number", value: i.defaults.fps, onInput: (s) => N((h) => {
            h.defaults.fps = Number(s.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Base seed",
          /* @__PURE__ */ r("input", { type: "number", value: i.defaults.baseSeed, onInput: (s) => N((h) => {
            h.defaults.baseSeed = Number(s.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ r(qe, { value: i.promptPrefix, isReferenceValid: (s) => St(i, s), onInput: (s) => N((h) => {
            h.promptPrefix = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ r(qe, { value: i.promptSuffix, isReferenceValid: (s) => St(i, s), onInput: (s) => N((h) => {
            h.promptSuffix = s.currentTarget.value;
          }) })
        ] })
      ] }),
      u === "postprocess" && /* @__PURE__ */ r(Yr, { plan: i, language: c, runtime: te, queueSecondPass: d, queueMerge: a })
    ] }),
    W && /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": c === "zh" ? "批量处理镜头" : "Batch edit shots", children: [
      /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("h2", { children: c === "zh" ? "批量处理镜头" : "Batch edit shots" }),
          /* @__PURE__ */ r("p", { children: c === "zh" ? `当前共 ${V.length} 个镜头` : `${V.length} shots` })
        ] }),
        /* @__PURE__ */ r("button", { "aria-label": c === "zh" ? "关闭" : "Close", onClick: () => re(!1), children: "×" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-tools", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            c === "zh" ? "所有镜头时长" : "Duration for all shots",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: $e, onInput: (s) => Ie(s.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: c === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: sr, children: c === "zh" ? "一键设置所有时长" : "Set all durations" })
        ] }),
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            c === "zh" ? "新增镜头数量" : "New shot count",
            /* @__PURE__ */ r("input", { type: "number", min: "1", max: "100", step: "1", value: ee, onInput: (s) => ae(s.currentTarget.value) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            c === "zh" ? "每个镜头时长" : "Duration per shot",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: Ce, onInput: (s) => Ue(s.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: c === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: dr, children: c === "zh" ? "批量新增镜头" : "Add shots" })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-global-actions", children: [
        /* @__PURE__ */ r("span", { children: c === "zh" ? `已启用 ${V.filter((s) => s.enabled).length}/${V.length} 个镜头` : `${V.filter((s) => s.enabled).length}/${V.length} shots enabled` }),
        /* @__PURE__ */ r("button", { class: ie ? "active" : "", onClick: ar, children: ie ? c === "zh" ? "全部禁用" : "Disable all" : c === "zh" ? "全部启用" : "Enable all" })
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
        V.map((s, h) => /* @__PURE__ */ r("div", { class: "td-batch-row", children: [
          /* @__PURE__ */ r("span", { children: h + 1 }),
          /* @__PURE__ */ r("input", { value: s.title, "aria-label": `${c === "zh" ? "镜头名" : "Shot name"} ${h + 1}`, onInput: (v) => X((S) => S.map((L, Y) => Y === h ? { ...L, title: v.currentTarget.value } : L)) }),
          /* @__PURE__ */ r("label", { class: "td-batch-enabled", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: s.enabled, onChange: (v) => X((S) => S.map((L, Y) => Y === h ? { ...L, enabled: v.currentTarget.checked } : L)) }),
            /* @__PURE__ */ r("span", { children: s.enabled ? c === "zh" ? "开" : "ON" : c === "zh" ? "关" : "OFF" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: s.durationSeconds, onInput: (v) => X((S) => S.map((L, Y) => Y === h ? { ...L, durationSeconds: Number(v.currentTarget.value) } : L)) }),
            /* @__PURE__ */ r("span", { children: c === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-relay", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: s.latentRelay, onChange: (v) => X((S) => S.map((L, Y) => Y === h ? { ...L, latentRelay: v.currentTarget.checked } : L)) }),
            /* @__PURE__ */ r("span", { children: s.latentRelay ? c === "zh" ? "开" : "ON" : c === "zh" ? "关" : "OFF" })
          ] })
        ] }, s.id))
      ] }),
      /* @__PURE__ */ r("footer", { children: [
        /* @__PURE__ */ r("button", { onClick: () => re(!1), children: c === "zh" ? "取消" : "Cancel" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: lr, children: c === "zh" ? "应用更改" : "Apply changes" })
      ] })
    ] }) }),
    he && /* @__PURE__ */ r(Nr, { language: c, assets: i.assets, projectName: i.project.name, uploadFile: at, onImported: (s) => N((h) => {
      h.assets.push(...s);
    }), onClose: () => ve(!1) })
  ] });
}
function an(e, t, n = !1, o, d) {
  const a = document.getElementById("theodore-director-modal");
  if (a) {
    a.focus();
    return;
  }
  const i = document.createElement("div");
  i.id = "theodore-director-modal", i.className = "td-modal", i.tabIndex = -1, document.body.append(i);
  const p = (u) => {
    u.key === "Escape" && m();
  }, m = () => {
    document.removeEventListener("keydown", p), ft(null, i), i.remove();
  };
  document.addEventListener("keydown", p), ft(/* @__PURE__ */ r(dn, { initial: e, onSave: (u) => {
    t(u), m();
  }, onClose: m, supportsSecondSampling: n, queueSecondPass: o, queueMerge: d }), i), i.focus();
}
const ln = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-highlight-textarea{position:relative;display:block;width:100%;min-width:0}.td-highlight-backdrop,.td-form textarea.td-highlight-input{box-sizing:border-box;width:100%;margin:0;padding:7px 9px;font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,monospace;font-size:inherit;line-height:1.45;letter-spacing:normal;-moz-tab-size:8;tab-size:8;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.td-highlight-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border:1px solid transparent;border-radius:6px;background:#222a35;color:var(--td-text);pointer-events:none}.td-form textarea.td-highlight-input{position:relative;z-index:1;display:block;background:transparent;color:transparent;caret-color:var(--td-text);-webkit-text-fill-color:transparent}.td-highlight-input::selection{background:#5898d46b}.td-highlight-backdrop mark{padding:1px 2px;border-radius:3px;color:inherit}.td-highlight-backdrop mark.valid{background:#1d6b50;color:#bfffe6}.td-highlight-backdrop mark.invalid{background:#7a2931;color:#ffd1d5;text-decoration:underline;text-decoration-color:#ff9aa4;text-underline-offset:2px}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-generated-results{display:flex;flex-direction:column;gap:12px}.td-result-list{display:flex;flex-direction:column;gap:7px;max-height:280px;overflow:auto;padding-right:3px}.td-shell button.td-result-item{display:grid;grid-template-columns:112px minmax(0,1fr);gap:10px;align-items:center;width:100%;padding:6px;text-align:left;background:#151b23}.td-shell button.td-result-item.selected{border-color:var(--td-accent);background:#1c2a2a}.td-result-thumb{width:112px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:5px;background:#090c10;color:var(--td-muted)}.td-result-thumb img,.td-result-thumb video{display:block;width:100%;height:100%;object-fit:contain}.td-result-item-copy{display:flex;min-width:0;flex-direction:column;gap:3px}.td-result-item-copy>strong{display:flex;align-items:center;gap:7px;color:var(--td-text)}.td-result-item-copy>strong em{padding:1px 6px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-result-item-copy>span,.td-result-item-copy>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-result-item-copy>small{font-size:10px}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-asset-batch-entry{margin-left:auto;border-color:#527061!important;background:#1b2c28!important;color:var(--td-accent)!important}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}.td-shot-sidebar{display:flex;flex-direction:column}.td-shot-list{flex:none}.td-shot-batch-entry{display:flex;align-items:flex-end;flex:1;min-height:90px;padding-top:14px}.td-shot-batch-entry button{border-color:#527061;background:#1b2c28;color:var(--td-accent)}.td-batch-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:28px;background:#05080dbd;box-sizing:border-box}.td-batch-panel{display:flex;flex-direction:column;width:min(1040px,100%);max-height:min(820px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-batch-header h2{font-size:18px;margin:0}.td-batch-header p{margin:3px 0 0;color:var(--td-muted)}.td-batch-header>button{font-size:20px;line-height:1;padding:5px 9px}.td-batch-tools{display:grid;grid-template-columns:1fr 1.4fr;gap:12px;padding:14px 18px;border-bottom:1px solid var(--td-line);background:#151b23}.td-batch-tools>div{display:flex;align-items:end;gap:8px;padding:10px;border:1px solid var(--td-line);border-radius:7px}.td-batch-tools label{display:flex;flex:1;flex-direction:column;gap:4px;color:var(--td-muted);white-space:nowrap}.td-batch-tools label>span,.td-batch-duration{display:flex;align-items:center;gap:6px}.td-batch-tools input{width:100%}.td-batch-tools em{color:var(--td-muted);font-style:normal}.td-batch-tools button{white-space:nowrap}.td-batch-global-actions{display:flex;align-items:center;justify-content:flex-end;gap:12px;padding:9px 22px;border-bottom:1px solid var(--td-line);background:#171e27;color:var(--td-muted)}.td-batch-global-actions button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-batch-table{overflow:auto;padding:0 18px}.td-batch-row{display:grid;grid-template-columns:42px minmax(180px,1fr) 100px 150px 120px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-batch-table-head{position:sticky;top:0;z-index:1;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-batch-duration input{min-width:0;width:100%}.td-batch-duration>span{color:var(--td-muted)}.td-batch-enabled,.td-batch-relay{display:flex;align-items:center;gap:7px;justify-content:flex-start;color:var(--td-text)}.td-batch-enabled input,.td-batch-relay input{width:17px;height:17px;margin:0}.td-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-batch-panel{display:flex;flex-direction:column;width:min(1420px,100%);max-height:min(880px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-asset-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-asset-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-dropzone{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-height:92px;margin:14px 18px 10px;border:1px dashed #597084;border-radius:9px;background:#151b23;color:var(--td-text);cursor:pointer;transition:border-color .15s,background .15s}.td-asset-dropzone:hover,.td-asset-dropzone.dragging{border-color:var(--td-accent);background:#1b2c28}.td-asset-dropzone span{color:var(--td-muted);font-size:12px}.td-asset-dropzone input{display:none}.td-asset-batch-warning{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 18px 10px;padding:8px 10px;border:1px solid #836a32;border-radius:7px;background:#3a301c;color:#f4d991}.td-asset-batch-warning span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-warning button{padding:2px 7px}.td-asset-batch-summary{display:flex;align-items:center;justify-content:space-between;padding:8px 18px;border-top:1px solid var(--td-line);border-bottom:1px solid var(--td-line);background:#151b23;color:var(--td-muted)}.td-asset-batch-summary button{padding:5px 8px}.td-asset-batch-list{overflow:auto;padding:0 18px 10px}.td-asset-batch-row{display:grid;grid-template-columns:minmax(210px,1.4fr) minmax(150px,1fr) 115px 135px 105px 72px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-asset-batch-head{position:sticky;top:0;z-index:2;padding-top:10px;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-asset-batch-row.invalid{background:#3b202560}.td-asset-batch-row.imported{background:#17372d55}.td-asset-batch-file{display:flex;min-width:0;flex-direction:column;gap:2px}.td-asset-batch-file strong,.td-asset-batch-file small,.td-asset-batch-file em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-file small{color:var(--td-muted);font-weight:400}.td-asset-batch-file em{color:var(--td-danger);font-size:11px;font-style:normal}.td-asset-batch-duration,.td-asset-batch-audio{display:flex;align-items:center;gap:6px;color:var(--td-muted)}.td-asset-batch-duration input{min-width:0;width:100%}.td-asset-batch-audio input{width:17px;height:17px;margin:0}.td-asset-batch-empty{display:flex;min-height:130px;align-items:center;justify-content:center;color:var(--td-muted)}.td-asset-batch-panel button:disabled,.td-asset-batch-panel input:disabled,.td-asset-batch-panel select:disabled{opacity:.55;cursor:not-allowed}.td-postprocess{display:flex;flex-direction:column;gap:14px;max-width:1500px;margin:0 auto}.td-post-header,.td-post-summary,.td-post-merged{border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px}.td-post-header h2,.td-post-merged h2{margin:0;font-size:17px}.td-post-header p{margin:4px 0 0;color:var(--td-muted)}.td-post-actions{display:flex;gap:8px;flex:none}.td-post-summary{display:flex;align-items:center;gap:18px;padding:10px 14px;color:var(--td-muted)}.td-post-summary>button{margin-left:auto}.td-post-summary button:disabled{opacity:.5;cursor:not-allowed}.td-post-range{display:flex;align-items:center;gap:6px;margin-left:auto}.td-post-range input{width:64px;padding:6px 7px;text-align:center}.td-post-range button{white-space:nowrap}.td-post-summary>.td-post-range+button{margin-left:0}.td-post-error,.td-post-warning{padding:10px 13px;border-radius:7px}.td-post-error{border:1px solid #8b4149;background:#442228;color:#ffd1d5;white-space:pre-wrap}.td-post-warning{border:1px solid #836a32;background:#3a301c;color:#f4d991}.td-post-shot-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(390px,1fr));gap:12px;align-items:start}.td-post-shot{min-width:0;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel);overflow:hidden}.td-post-shot.selected{border-color:#527e6c}.td-post-shot.disabled{opacity:.72}.td-post-shot>header{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid var(--td-line);background:#1d2530}.td-post-shot>header>label{display:flex;align-items:center;gap:9px;min-width:0;cursor:pointer}.td-post-shot>header input{width:18px;height:18px;margin:0;flex:none}.td-post-shot>header label>span{display:flex;min-width:0;gap:8px;align-items:baseline}.td-post-shot>header strong{color:var(--td-text)}.td-post-shot>header em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted);font-style:normal}.td-post-shot>header>span{flex:none;padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted)}.td-post-shot-disabled-note{padding:7px 10px;border-bottom:1px solid var(--td-line);background:#332b1d;color:#e5c77d;font-size:11px}.td-post-shot-empty{min-height:96px;display:flex;align-items:center;justify-content:center;padding:12px;color:var(--td-muted);text-align:center}.td-post-result-list{display:flex;flex-direction:column;gap:7px;max-height:360px;overflow:auto;padding:9px}.td-post-result{display:grid;grid-template-columns:minmax(0,1fr) 35px;gap:6px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:5px}.td-post-result.selected{border-color:var(--td-accent);background:#1c2a2a}.td-shell button.td-post-result-choice{display:grid;grid-template-columns:112px minmax(0,1fr);gap:9px;align-items:center;min-width:0;padding:0;border:0;background:transparent;text-align:left}.td-post-result-choice>span{display:flex;min-width:0;flex-direction:column;gap:3px}.td-post-result-choice>span>strong{display:flex;align-items:center;gap:6px}.td-post-result-choice>span>strong em{padding:1px 5px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-post-result-choice>span>span,.td-post-result-choice>span>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-post-result-choice>span>small{font-size:10px}.td-post-result-play{width:35px;height:35px;padding:0!important}.td-post-result-play:disabled{opacity:.35;cursor:not-allowed}.td-post-merged{padding:12px}.td-post-merged>header>div{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px}.td-post-merged .td-generated-results{display:grid;grid-template-columns:minmax(360px,1.6fr) minmax(300px,1fr);align-items:start}.td-post-merged .td-result-list{max-height:420px}.td-post-preview-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:30;display:flex;align-items:center;justify-content:center;padding:26px;background:#030609d6}.td-post-preview-overlay>section{width:min(980px,100%);max-height:calc(100vh - 52px);overflow:auto;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 80px #000c}.td-post-preview-overlay header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--td-line)}.td-post-preview-overlay header button{font-size:20px;line-height:1;padding:5px 9px}.td-post-preview-overlay video{display:block;width:100%;max-height:calc(100vh - 170px);background:#070a0e}.td-post-preview-overlay p{margin:0;padding:9px 12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}.td-post-summary{flex-wrap:wrap}.td-post-range{margin-left:0}.td-post-summary>button{margin-left:auto}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:900px){.td-post-shot-list,.td-post-merged .td-generated-results{grid-template-columns:1fr}.td-post-header{align-items:flex-start;flex-direction:column}.td-post-actions{width:100%}.td-post-actions button{flex:1}.td-post-summary{align-items:stretch;flex-direction:column;gap:7px}.td-post-range{margin:3px 0;flex-wrap:wrap}.td-post-summary>button{margin:4px 0 0}.td-post-result-list{max-height:none}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}@media(max-width:1000px){.td-asset-batch-list{min-width:900px}.td-asset-batch-panel{overflow:auto}.td-asset-batch-panel>.td-batch-header,.td-asset-dropzone,.td-asset-batch-warning,.td-asset-batch-summary,.td-asset-batch-panel>footer{min-width:864px}}@media(max-width:720px){.td-asset-batch-entry{margin-left:0}}.td-postprocess-shell{display:flex;flex-direction:column;gap:12px;max-width:1500px;margin:0 auto}.td-postprocess-shell>.td-postprocess{max-width:none;width:100%;margin:0}.td-post-mode-tabs{display:flex;gap:7px;padding:5px;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-mode-tabs button{min-width:130px}.td-post-mode-tabs button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-second-pass-panel .td-post-shot>header>span:first-child{display:flex;min-width:0;gap:8px;align-items:baseline;padding:0;background:transparent}.td-second-pass-result{display:grid;grid-template-columns:minmax(0,1fr) 118px;gap:8px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:6px}.td-second-pass-result:has(.td-second-pass-run:disabled){border-color:#34404d}.td-second-pass-run{width:118px;min-height:38px;padding:6px!important}.td-second-pass-run:disabled{opacity:.62;cursor:not-allowed}.td-second-pass-error{grid-column:1/-1;padding:6px 8px;border-radius:5px;background:#442228;color:#ffd1d5;font-size:11px;white-space:pre-wrap}@media(max-width:620px){.td-post-mode-tabs{flex-direction:column}.td-post-mode-tabs button{width:100%}.td-second-pass-result{grid-template-columns:1fr}.td-second-pass-run{width:100%}}.td-runtime-settings{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:14px;margin:0 0 8px}.td-runtime-settings legend{padding:0 7px;color:var(--td-accent)}.td-runtime-settings label:has(textarea),.td-runtime-settings label:has(input[type=password]),.td-runtime-key-controls,.td-runtime-apply{grid-column:1/-1}.td-runtime-settings small{display:block;margin-top:5px;color:var(--td-muted);line-height:1.45}.td-runtime-status{display:flex;align-items:center;padding:8px 10px;border:1px solid var(--td-line);border-radius:6px;background:#161d25;color:var(--td-muted)}.td-runtime-status strong{margin-left:4px;color:var(--td-accent)}.td-runtime-key-controls{display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:9px 10px;border:1px solid var(--td-line);border-radius:6px;background:#161d25}.td-runtime-key-controls>label{display:flex;flex-direction:row;align-items:center;gap:7px}.td-runtime-key-controls>label input{width:auto}.td-runtime-key-controls small{flex-basis:100%;margin:0}.td-runtime-apply{display:flex;justify-content:flex-end}.td-runtime-banner{padding:10px 13px;border:1px solid #836a32;border-radius:7px;background:#3a301c;color:#f4d991}.td-runtime-banner.ready{border-color:#356f59;background:#18372d;color:#8be1bd}@media(max-width:700px){.td-runtime-settings{grid-template-columns:1fr}.td-runtime-settings label:has(textarea),.td-runtime-settings label:has(input[type=password]),.td-runtime-key-controls,.td-runtime-apply{grid-column:auto}}", Tt = "theodore-director-styles";
function cn() {
  if (document.getElementById(Tt)) return;
  const e = document.createElement("style");
  e.id = Tt, e.textContent = ln, document.head.append(e);
}
cn();
function pn(e) {
  const t = e.output ?? {}, n = [t.gifs, t.videos, t.images].find((i) => Array.isArray(i)), o = n == null ? void 0 : n[0], d = String((o == null ? void 0 : o.filename) ?? "").trim();
  return d ? {
    path: [String((o == null ? void 0 : o.subfolder) ?? "").trim().replace(/\\/g, "/").replace(/^\/+|\/+$/g, ""), d].filter(Boolean).join("/"),
    provider: "local",
    stage: "legacy_unknown"
  } : void 0;
}
const un = "/scripts/app.js", hn = "/scripts/api.js";
Promise.all([
  import(
    /* @vite-ignore */
    un
  ),
  import(
    /* @vite-ignore */
    hn
  )
]).then(([{ app: e }, { api: t }]) => {
  const n = async (d) => {
    var z, k;
    const a = ((z = e.graph) == null ? void 0 : z._nodes) ?? [], i = a.find((y) => y.type === "TheodoreDirector_PostprocessSecondPassSource"), p = a.find((y) => y.type === "TheodoreDirector_SaveSecondPass"), m = (k = i == null ? void 0 : i.widgets) == null ? void 0 : k.find((y) => y.name === "request_json");
    if (!i || !p || !m || p.id === void 0)
      throw new Error("当前工作流缺少后处理单独二采支流，请重新载入仓库中的 V7 导播台示例工作流");
    const u = m.value, f = i.mode, _ = p.mode;
    let l;
    try {
      m.value = JSON.stringify(d), i.mode = 0, p.mode = 0, l = await e.graphToPrompt(e.rootGraph);
    } finally {
      m.value = u, i.mode = f, p.mode = _;
    }
    const w = (await t.queuePrompt(0, l, { partialExecutionTargets: [String(p.id)] })).prompt_id;
    if (!w) throw new Error("ComfyUI 没有返回二采任务 ID");
    await new Promise((y, $) => {
      const R = () => {
        t.removeEventListener("execution_success", E), t.removeEventListener("execution_error", F), t.removeEventListener("execution_interrupted", F);
      }, x = (D) => {
        var M;
        return String(((M = D.detail) == null ? void 0 : M.prompt_id) ?? "");
      }, E = (D) => {
        x(D) === w && (R(), y());
      }, F = (D) => {
        if (x(D) !== w) return;
        const M = D.detail ?? {};
        R(), $(new Error(String(M.exception_message ?? M.error ?? "单独二采任务执行失败")));
      };
      t.addEventListener("execution_success", E), t.addEventListener("execution_error", F), t.addEventListener("execution_interrupted", F);
    });
  }, o = async (d) => {
    var c, w;
    const i = (((c = e.graph) == null ? void 0 : c._nodes) ?? []).find((z) => z.type === "TheodoreDirector_MergeVideos"), p = (w = i == null ? void 0 : i.widgets) == null ? void 0 : w.find((z) => z.name === "request_json");
    if (!i || !p || i.id === void 0)
      throw new Error("当前工作流缺少 Theodore 合并支流，请重新载入仓库中的 V7.2 示例工作流");
    const m = p.value, u = i.mode;
    let f;
    try {
      p.value = JSON.stringify(d), i.mode = 0, f = await e.graphToPrompt(e.rootGraph);
    } finally {
      p.value = m, i.mode = u;
    }
    const l = (await t.queuePrompt(0, f, { partialExecutionTargets: [String(i.id)] })).prompt_id;
    if (!l) throw new Error("ComfyUI 没有返回合并任务 ID");
    return new Promise((z, k) => {
      let y;
      const $ = () => {
        t.removeEventListener("executed", E), t.removeEventListener("execution_success", F), t.removeEventListener("execution_error", D), t.removeEventListener("execution_interrupted", D);
      }, R = (M) => M.detail ?? {}, x = (M) => String(M.prompt_id ?? "") === l, E = (M) => {
        const b = R(M);
        !x(b) || String(b.node ?? "") !== String(i.id) || (y = pn(b) ?? y);
      }, F = (M) => {
        const b = R(M);
        x(b) && ($(), z(y));
      }, D = (M) => {
        const b = R(M);
        x(b) && ($(), k(new Error(String(b.exception_message ?? b.error ?? "合并任务执行失败"))));
      };
      t.addEventListener("executed", E), t.addEventListener("execution_success", F), t.addEventListener("execution_error", D), t.addEventListener("execution_interrupted", D);
    });
  };
  e.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(d, a) {
      if (a.name === "TheodoreDirector_PostprocessSecondPassSource" || a.name === "TheodoreDirector_MergeVideos") {
        const p = d.prototype.onNodeCreated;
        d.prototype.onNodeCreated = function() {
          var u, f;
          p == null || p.apply(this);
          const m = (u = this.widgets) == null ? void 0 : u.find((_) => _.name === "request_json");
          m && (m.type = "hidden", m.computeSize = () => [0, -4]), this.size = [Math.max(((f = this.size) == null ? void 0 : f[0]) ?? 300, 380), 80];
        };
        return;
      }
      if (a.name !== "TheodoreDirector_Project") return;
      const i = d.prototype.onNodeCreated;
      d.prototype.onNodeCreated = function() {
        var m, u;
        i == null || i.apply(this);
        const p = (m = this.widgets) == null ? void 0 : m.find((f) => f.name === "plan_json");
        p && (p.type = "hidden", p.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          var f;
          try {
            const _ = JSON.parse(String(p.value)), l = ((f = e.graph) == null ? void 0 : f._nodes) ?? [], c = l.some((z) => z.type === "TheodoreDirector_PostprocessSecondPassSource") && l.some((z) => z.type === "TheodoreDirector_SaveSecondPass"), w = l.some((z) => z.type === "TheodoreDirector_MergeVideos");
            an(_, (z) => {
              var k, y;
              p.value = JSON.stringify(z, null, 2), this.setDirtyCanvas(!0, !0), (y = (k = e.graph) == null ? void 0 : k.setDirtyCanvas) == null || y.call(k, !0, !0);
            }, !0, c ? n : void 0, w ? o : void 0);
          } catch (_) {
            window.alert(`Theodore Director: ${_ instanceof Error ? _.message : String(_)}`);
          }
        }), this.size = [Math.max(((u = this.size) == null ? void 0 : u[0]) ?? 300, 360), 110]);
      };
    }
  });
});
