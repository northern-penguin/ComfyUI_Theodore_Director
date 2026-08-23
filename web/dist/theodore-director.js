var ue, $, rt, B, Re, nt, ot, me, ne, Z, it, ze, xe, ye, le = {}, se = [], Dt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, he = Array.isArray;
function M(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function $e(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Rt(e, t, r) {
  var a, i, d, c = {};
  for (d in t) d == "key" ? a = t[d] : d == "ref" ? i = t[d] : c[d] = t[d];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? ue.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null) for (d in e.defaultProps) c[d] === void 0 && (c[d] = e.defaultProps[d]);
  return oe(e, c, a, i, null);
}
function oe(e, t, r, a, i) {
  var d = { type: e, props: t, key: r, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++rt, __i: -1, __u: 0 };
  return i == null && $.vnode != null && $.vnode(d), d;
}
function _e(e) {
  return e.children;
}
function ie(e, t) {
  this.props = e, this.context = t;
}
function J(e, t) {
  if (t == null) return e.__ ? J(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? J(e) : null;
}
function Ot(e) {
  if (e.__P && e.__d) {
    var t = e.__v, r = t.__e, a = [], i = [], d = M({}, t);
    d.__v = t.__v + 1, $.vnode && $.vnode(d), Te(e.__P, d, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [r] : null, a, r ?? J(t), !!(32 & t.__u), i), d.__v = t.__v, d.__.__k[d.__i] = d, ct(a, d, i), t.__e = t.__ = null, d.__e != r && at(d);
  }
}
function at(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), at(e);
}
function Oe(e) {
  (!e.__d && (e.__d = !0) && B.push(e) && !ce.__r++ || Re != $.debounceRendering) && ((Re = $.debounceRendering) || nt)(ce);
}
function ce() {
  try {
    for (var e, t = 1; B.length; ) B.length > t && B.sort(ot), e = B.shift(), t = B.length, Ot(e);
  } finally {
    B.length = ce.__r = 0;
  }
}
function dt(e, t, r, a, i, d, c, u, f, p, l) {
  var v, s, g, k, P, C, S = a && a.__k || se, y = t.length;
  for (f = Ut(r, t, S, f, y), v = 0; v < y; v++) (g = r.__k[v]) != null && (s = g.__i != -1 && S[g.__i] || le, g.__i = v, C = Te(e, g, s, i, d, c, u, f, p, l), k = g.__e, g.ref && s.ref != g.ref && (s.ref && Ce(s.ref, null, g), l.push(g.ref, g.__c || k, g)), P == null && k != null && (P = k), 4 & g.__u ? (f = lt(g, f, e), s.__e && (s.__e = null)) : typeof g.type == "function" && C !== void 0 ? f = C : k && (f = k.nextSibling), g.__u &= -7);
  return r.__e = P, f;
}
function Ut(e, t, r, a, i) {
  var d, c, u, f, p, l = r.length, v = l, s = 0;
  for (e.__k = new Array(i), d = 0; d < i; d++) (c = t[d]) != null && typeof c != "boolean" && typeof c != "function" ? (typeof c == "string" || typeof c == "number" || typeof c == "bigint" || c.constructor == String ? c = e.__k[d] = oe(null, c, null, null, null) : he(c) ? c = e.__k[d] = oe(_e, { children: c }, null, null, null) : c.constructor === void 0 && c.__b > 0 ? c = e.__k[d] = oe(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : e.__k[d] = c, f = d + s, c.__ = e, c.__b = e.__b + 1, u = null, (p = c.__i = Ft(c, r, f, v)) != -1 && (v--, (u = r[p]) && (u.__u |= 2)), u == null || u.__v == null ? (p == -1 && (i > l ? s-- : i < l && s++), typeof c.type != "function" && (c.__u |= 4)) : p != f && (p == f - 1 ? s-- : p == f + 1 ? s++ : (p > f ? s-- : s++, c.__u |= 4))) : e.__k[d] = null;
  if (v) for (d = 0; d < l; d++) (u = r[d]) != null && (2 & u.__u) == 0 && (u.__e == a && (a = J(u)), ut(u, u));
  return a;
}
function lt(e, t, r) {
  var a, i;
  if (typeof e.type == "function") {
    for (a = e.__k, i = 0; a && i < a.length; i++) a[i] && (a[i].__ = e, t = lt(a[i], t, r));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = J(e)), t = r.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Ft(e, t, r, a) {
  var i, d, c, u = e.key, f = e.type, p = t[r], l = p != null && (2 & p.__u) == 0;
  if (p === null && u == null || l && u == p.key && f == p.type) return r;
  if (a > (l ? 1 : 0)) {
    for (i = r - 1, d = r + 1; i >= 0 || d < t.length; ) if ((p = t[c = i >= 0 ? i-- : d++]) != null && (2 & p.__u) == 0 && u == p.key && f == p.type) return c;
  }
  return -1;
}
function Ue(e, t, r) {
  t[0] == "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || Dt.test(t) ? r : r + "px";
}
function re(e, t, r, a, i) {
  var d, c;
  e: if (t == "style") if (typeof r == "string") e.style.cssText = r;
  else {
    if (typeof a == "string" && (e.style.cssText = a = ""), a) for (t in a) r && t in r || Ue(e.style, t, "");
    if (r) for (t in r) a && r[t] == a[t] || Ue(e.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") d = t != (t = t.replace(it, "$1")), c = t.toLowerCase(), t = c in e || t == "onFocusOut" || t == "onFocusIn" ? c.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + d] = r, r ? a ? r[Z] = a[Z] : (r[Z] = ze, e.addEventListener(t, d ? ye : xe, d)) : e.removeEventListener(t, d ? ye : xe, d);
  else {
    if (i == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && r == 1 ? "" : r));
  }
}
function Fe(e) {
  return function(t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t[ne] == null) t[ne] = ze++;
      else if (t[ne] < r[Z]) return;
      return r($.event ? $.event(t) : t);
    }
  };
}
function Te(e, t, r, a, i, d, c, u, f, p) {
  var l, v, s, g, k, P, C, S, y, E, m, x, O, V, W, q, D = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && (f = !!(32 & r.__u), d = [u = t.__e = r.__e]), (l = $.__b) && l(t);
  e: if (typeof D == "function") {
    v = c.length;
    try {
      if (y = t.props, E = D.prototype && D.prototype.render, m = (l = D.contextType) && a[l.__c], x = l ? m ? m.props.value : l.__ : a, r.__c ? S = (s = t.__c = r.__c).__ = s.__E : (E ? t.__c = s = new D(y, x) : (t.__c = s = new ie(y, x), s.constructor = D, s.render = Mt), m && m.sub(s), s.state || (s.state = {}), s.__n = a, g = s.__d = !0, s.__h = [], s._sb = []), E && s.__s == null && (s.__s = s.state), E && D.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = M({}, s.__s)), M(s.__s, D.getDerivedStateFromProps(y, s.__s))), k = s.props, P = s.state, s.__v = t, g) E && D.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), E && s.componentDidMount != null && s.__h.push(s.componentDidMount);
      else {
        if (E && D.getDerivedStateFromProps == null && y !== k && s.componentWillReceiveProps != null && s.componentWillReceiveProps(y, x), t.__v == r.__v || !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(y, s.__s, x) === !1) {
          t.__v != r.__v && (s.props = y, s.state = s.__s, s.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(H) {
            H && (H.__ = t);
          }), se.push.apply(s.__h, s._sb), s._sb = [], s.__h.length && c.push(s), u = J(r);
          break e;
        }
        s.componentWillUpdate != null && s.componentWillUpdate(y, s.__s, x), E && s.componentDidUpdate != null && s.__h.push(function() {
          s.componentDidUpdate(k, P, C);
        });
      }
      if (s.context = x, s.props = y, s.__P = e, s.__e = !1, O = $.__r, V = 0, E) s.state = s.__s, s.__d = !1, O && O(t), l = s.render(s.props, s.state, s.context), se.push.apply(s.__h, s._sb), s._sb = [];
      else do
        s.__d = !1, O && O(t), l = s.render(s.props, s.state, s.context), s.state = s.__s;
      while (s.__d && ++V < 25);
      s.state = s.__s, s.getChildContext != null && (a = M(M({}, a), s.getChildContext())), E && !g && s.getSnapshotBeforeUpdate != null && (C = s.getSnapshotBeforeUpdate(k, P)), W = l != null && l.type === _e && l.key == null ? pt(l.props.children) : l, u = dt(e, he(W) ? W : [W], t, r, a, i, d, c, u, f, p), s.base = t.__e, t.__u &= -161, s.__h.length && c.push(s), S && (s.__E = s.__ = null);
    } catch (H) {
      if (c.length = v, t.__v = null, f || d != null) {
        if (H.then) {
          for (t.__u |= f ? 160 : 128; u && u.nodeType == 8 && u.nextSibling; ) u = u.nextSibling;
          d != null && (d[d.indexOf(u)] = null), t.__e = u;
        } else if (d != null) for (q = d.length; q--; ) $e(d[q]);
      } else t.__e = r.__e;
      t.__k == null && (t.__k = r.__k || []), H.then || st(t), $.__e(H, t, r);
    }
  } else d == null && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : u = t.__e = Ht(r.__e, t, r, a, i, d, c, f, p);
  return (l = $.diffed) && l(t), 128 & t.__u ? void 0 : u;
}
function st(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(st));
}
function ct(e, t, r) {
  for (var a = 0; a < r.length; a++) Ce(r[a], r[++a], r[++a]);
  $.__c && $.__c(t, e), e.some(function(i) {
    try {
      e = i.__h, i.__h = [], e.some(function(d) {
        d.call(i);
      });
    } catch (d) {
      $.__e(d, i.__v);
    }
  });
}
function pt(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : he(e) ? e.map(pt) : e.constructor !== void 0 ? null : M({}, e);
}
function Ht(e, t, r, a, i, d, c, u, f) {
  var p, l, v, s, g, k, P, C = r.props || le, S = t.props, y = t.type;
  if (y == "svg" ? i = "http://www.w3.org/2000/svg" : y == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), d != null) {
    for (p = 0; p < d.length; p++) if ((g = d[p]) && "setAttribute" in g == !!y && (y ? g.localName == y : g.nodeType == 3)) {
      e = g, d[p] = null;
      break;
    }
  }
  if (e == null) {
    if (y == null) return document.createTextNode(S);
    e = document.createElementNS(i, y, S.is && S), u && ($.__m && $.__m(t, d), u = !1), d = null;
  }
  if (y == null) C === S || u && e.data == S || (e.data = S);
  else {
    if (d = y == "textarea" && S.defaultValue != null ? null : d && ue.call(e.childNodes), !u && d != null) for (C = {}, p = 0; p < e.attributes.length; p++) C[(g = e.attributes[p]).name] = g.value;
    for (p in C) g = C[p], p == "dangerouslySetInnerHTML" ? v = g : p == "children" || p in S || p == "value" && "defaultValue" in S || p == "checked" && "defaultChecked" in S || re(e, p, null, g, i);
    for (p in S) g = S[p], p == "children" ? s = g : p == "dangerouslySetInnerHTML" ? l = g : p == "value" ? k = g : p == "checked" ? P = g : u && typeof g != "function" || C[p] === g || re(e, p, g, C[p], i);
    if (l) u || v && (l.__html == v.__html || l.__html == e.innerHTML) || (e.innerHTML = l.__html), t.__k = [];
    else if (v && (e.innerHTML = ""), dt(t.type == "template" ? e.content : e, he(s) ? s : [s], t, r, a, y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, d, c, d ? d[0] : r.__k && J(r, 0), u, f), d != null) for (p = d.length; p--; ) $e(d[p]);
    u && y != "textarea" || (p = "value", y == "progress" && k == null ? e.removeAttribute("value") : k != null && (k !== e[p] || y == "progress" && !k || y == "option" && k != C[p]) && re(e, p, k, C[p], i), p = "checked", P != null && P != e[p] && re(e, p, P, C[p], i));
  }
  return e;
}
function Ce(e, t, r) {
  try {
    if (typeof e == "function") {
      var a = typeof e.__u == "function";
      a && e.__u(), a && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (i) {
    $.__e(i, r);
  }
}
function ut(e, t, r) {
  var a, i;
  if ($.unmount && $.unmount(e), (a = e.ref) && (a.current && a.current != e.__e || Ce(a, null, t)), (a = e.__c) != null) {
    if (a.componentWillUnmount) try {
      a.componentWillUnmount();
    } catch (d) {
      $.__e(d, t);
    }
    a.base = a.__P = a.__n = null;
  }
  if (a = e.__k) for (i = 0; i < a.length; i++) a[i] && ut(a[i], t, r || typeof e.type != "function");
  r || $e(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Mt(e, t, r) {
  return this.constructor(e, r);
}
function He(e, t, r) {
  var a, i, d, c;
  t == document && (t = document.documentElement), $.__ && $.__(e, t), i = (a = !1) ? null : t.__k, d = [], c = [], Te(t, e = t.__k = Rt(_e, null, [e]), i || le, le, t.namespaceURI, i ? null : t.firstChild ? ue.call(t.childNodes) : null, d, i ? i.__e : t.firstChild, a, c), ct(d, e, c), e.props.children = null;
}
ue = se.slice, $ = { __e: function(e, t, r, a) {
  for (var i, d, c; t = t.__; ) if ((i = t.__c) && !i.__) try {
    if ((d = i.constructor) && d.getDerivedStateFromError != null && (i.setState(d.getDerivedStateFromError(e)), c = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, a || {}), c = i.__d), c) return i.__E = i;
  } catch (u) {
    e = u;
  }
  throw e;
} }, rt = 0, ie.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = M({}, this.state), typeof e == "function" && (e = e(M({}, r), this.props)), e && M(r, e), e != null && this.__v && (t && this._sb.push(t), Oe(this));
}, ie.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Oe(this));
}, ie.prototype.render = _e, B = [], nt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ot = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ce.__r = 0, me = Math.random().toString(8), ne = "__d" + me, Z = "__a" + me, it = /(PointerCapture)$|Capture$/i, ze = 0, xe = Fe(!1), ye = Fe(!0);
var Lt = 0;
function n(e, t, r, a, i, d) {
  t || (t = {});
  var c, u, f = t;
  if ("ref" in f) for (u in f = {}, t) u == "ref" ? c = t[u] : f[u] = t[u];
  var p = { type: e, props: f, key: r, ref: c, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Lt, __i: -1, __u: 0, __source: i, __self: d };
  if (typeof e == "function" && (c = e.defaultProps)) for (u in c) f[u] === void 0 && (f[u] = c[u]);
  return $.vnode && $.vnode(p), p;
}
var ee, A, ge, Me, pe = 0, ht = [], N = $, Le = N.__b, Be = N.__r, Ve = N.diffed, We = N.__c, qe = N.unmount, Ge = N.__;
function Ie(e, t) {
  N.__h && N.__h(A, e, pe || t), pe = 0;
  var r = A.__H || (A.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function j(e) {
  return pe = 1, Bt(gt, e);
}
function Bt(e, t, r) {
  var a = Ie(ee++, 2);
  if (a.t = e, !a.__c && (a.__ = [gt(void 0, t), function(u) {
    var f = a.__N ? a.__N[0] : a.__[0], p = a.t(f, u);
    f !== p && (a.__N = [p, a.__[1]], a.__c.setState({}));
  }], a.__c = A, !A.__f)) {
    var i = function(u, f, p) {
      if (!a.__c.__H) return !0;
      var l = !1, v = a.__c.props !== u;
      if (a.__c.__H.__.some(function(g) {
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
    A.__f = !0;
    var d = A.shouldComponentUpdate, c = A.componentWillUpdate;
    A.componentWillUpdate = function(u, f, p) {
      if (this.__e) {
        var l = d;
        d = void 0, i(u, f, p), d = l;
      }
      c && c.call(this, u, f, p);
    }, A.shouldComponentUpdate = i;
  }
  return a.__N || a.__;
}
function _t(e, t) {
  var r = Ie(ee++, 3);
  !N.__s && mt(r.__H, t) && (r.__ = e, r.u = t, A.__H.__h.push(r));
}
function ft(e) {
  return pe = 5, we(function() {
    return { current: e };
  }, []);
}
function we(e, t) {
  var r = Ie(ee++, 7);
  return mt(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__;
}
function Vt() {
  for (var e; e = ht.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(ae), t.__h.some(ke), t.__h = [];
    } catch (r) {
      t.__h = [], N.__e(r, e.__v);
    }
  }
}
N.__b = function(e) {
  A = null, Le && Le(e);
}, N.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ge && Ge(e, t);
}, N.__r = function(e) {
  Be && Be(e), ee = 0;
  var t = (A = e.__c).__H;
  t && (ge === A ? (t.__h = [], A.__h = [], t.__.some(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.some(ae), t.__h.some(ke), t.__h = [], ee = 0)), ge = A;
}, N.diffed = function(e) {
  Ve && Ve(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (ht.push(t) !== 1 && Me === N.requestAnimationFrame || ((Me = N.requestAnimationFrame) || Wt)(Vt)), t.__H.__.some(function(r) {
    r.u && (r.__H = r.u, r.u = void 0);
  })), ge = A = null;
}, N.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.some(ae), r.__h = r.__h.filter(function(a) {
        return !a.__ || ke(a);
      });
    } catch (a) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], N.__e(a, r.__v);
    }
  }), We && We(e, t);
}, N.unmount = function(e) {
  qe && qe(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.some(function(a) {
    try {
      ae(a);
    } catch (i) {
      t = i;
    }
  }), r.__H = void 0, t && N.__e(t, r.__v));
};
var Je = typeof requestAnimationFrame == "function";
function Wt(e) {
  var t, r = function() {
    clearTimeout(a), Je && cancelAnimationFrame(t), setTimeout(e);
  }, a = setTimeout(r, 35);
  Je && (t = requestAnimationFrame(r));
}
function ae(e) {
  var t = A, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), A = t;
}
function ke(e) {
  var t = A;
  e.__c = e.__(), A = t;
}
function mt(e, t) {
  return !e || e.length !== t.length || t.some(function(r, a) {
    return r !== e[a];
  });
}
function gt(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const bt = String.raw`\{\{ref:([^{}]+)}}`;
function Ke() {
  return new RegExp(bt, "g");
}
function vt(e, t) {
  const r = /* @__PURE__ */ new Map();
  for (const a of e.assets)
    a.enabled && a.path.trim() && (!a.shotIds.length || a.shotIds.includes(t.id)) && !t.disabledAssetIds.includes(a.id) && r.set(a.alias, a);
  return r;
}
function xt(e, t, r) {
  const a = r.trim(), i = a.endsWith(".audio"), d = i ? a.slice(0, -6) : a, c = vt(e, t).get(d);
  return c ? !i || c.kind === "video" && c.includeVideoAudio : !1;
}
function Ye(e, t) {
  const r = e.shots.filter((a) => a.enabled);
  return r.length > 0 && r.every((a) => xt(e, a, t));
}
function yt(e, t) {
  const r = [], a = vt(e, t), i = [e.promptPrefix, t.prompt, e.promptSuffix].filter(Boolean).join(`
`), d = [...i.matchAll(Ke())].map((m) => m[1].trim()), c = [], u = /* @__PURE__ */ new Set(), f = (m) => {
    u.has(m.id) || (u.add(m.id), c.push(m));
  };
  [...a.values()].filter((m) => m.fixed).sort((m, x) => m.fixedOrder - x.fixedOrder || m.alias.localeCompare(x.alias)).forEach(f);
  for (const m of d) {
    const x = m.endsWith(".audio") ? m.slice(0, -6) : m, O = a.get(x);
    if (!O) {
      r.push(`未找到或已禁用素材：${m}`);
      continue;
    }
    m.endsWith(".audio") && (O.kind !== "video" || !O.includeVideoAudio) && r.push(`视频伴音未启用：${m}`), f(O);
  }
  const p = c.filter((m) => m.kind === "image"), l = c.filter((m) => m.kind === "video"), v = l.filter((m) => m.includeVideoAudio), s = c.filter((m) => m.kind === "audio"), g = v.length + s.length, k = p.length + l.length + s.length;
  p.length > 9 && r.push(`参考图 ${p.length}/9，超出 H3 上限`), l.length > 3 && r.push(`参考视频 ${l.length}/3，超出 H3 上限`), g > 3 && r.push(`有效音频 ${g}/3，超出 H3 总上限`), k > 12 && r.push(`混合文件 ${k}/12，超出 H3 上限`), g && !p.length && !l.length && r.push("音频参考不能单独使用");
  const P = l.filter((m) => typeof m.durationSeconds == "number");
  for (const m of l) (m.durationSeconds == null || m.durationSeconds < 2 || m.durationSeconds > 15) && r.push(`视频 ${m.alias} 的时长必须为 2–15 秒`);
  P.reduce((m, x) => m + (x.durationSeconds ?? 0), 0) > 15 && r.push("参考视频总时长超过 15 秒");
  const C = [...v.map((m) => m.audioDurationSeconds ?? m.durationSeconds), ...s.map((m) => m.durationSeconds)];
  C.some((m) => m == null || m < 2 || m > 15) && r.push("每路有效音频时长必须为 2–15 秒"), C.reduce((m, x) => m + (x ?? 0), 0) > 15 && r.push("有效音频总时长超过 15 秒");
  const S = /* @__PURE__ */ new Map();
  p.forEach((m, x) => S.set(m.alias, `<Picture ${x + 1}>`)), l.forEach((m, x) => S.set(m.alias, `<Video ${x + 1}>`)), v.forEach((m, x) => S.set(`${m.alias}.audio`, `<Audio ${x + 1}>`)), s.forEach((m, x) => S.set(m.alias, `<Audio ${v.length + x + 1}>`));
  const y = i.replace(Ke(), (m, x) => S.get(x.trim()) ?? m), E = [...S.entries()].map(([m, x]) => ({ label: x, alias: m, kind: x.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: y, errors: r, slots: E, mixedFiles: k, audioCount: g };
}
function qt(e) {
  var i, d, c, u, f, p;
  const t = [];
  (d = (i = e.project) == null ? void 0 : i.name) != null && d.trim() || t.push("Project name 不能为空"), (u = (c = e.project) == null ? void 0 : c.runId) != null && u.trim() || t.push("Run ID 不能为空"), (!Array.isArray(e.shots) || !e.shots.some((l) => l.enabled)) && t.push("至少需要一个启用分镜");
  const r = /* @__PURE__ */ new Set();
  for (const l of e.shots ?? [])
    (!((f = l.id) != null && f.trim()) || r.has(l.id)) && t.push(`分镜 ID 为空或重复：${l.id || "(空)"}`), r.add(l.id), l.durationSeconds > 0 || t.push(`分镜 ${l.id} 的时长必须大于 0`);
  const a = /* @__PURE__ */ new Set();
  for (const l of e.assets ?? []) {
    const v = (p = l.alias) == null ? void 0 : p.toLocaleLowerCase();
    (!l.alias || /[\s{}]/.test(l.alias) || l.alias.endsWith(".audio") || a.has(v)) && t.push(`素材别名无效或重复：${l.alias || "(空)"}`), a.add(v), l.enabled && !l.path && t.push(`素材 ${l.alias} 尚未选择文件`);
  }
  for (const l of e.shots.filter((v) => v.enabled)) t.push(...yt(e, l).errors.map((v) => `${l.title}: ${v}`));
  return [...new Set(t)];
}
function Gt(e, t) {
  const r = [], a = new RegExp(bt, "g");
  let i = 0;
  for (const d of e.matchAll(a)) {
    const c = d.index ?? 0;
    c > i && r.push({ text: e.slice(i, c), reference: !1 }), r.push({ text: d[0], reference: !0, valid: t(d[1]) }), i = c + d[0].length;
  }
  return i < e.length && r.push({ text: e.slice(i), reference: !1 }), r;
}
function be({ value: e, rows: t, onInput: r, isReferenceValid: a }) {
  const i = ft(null), d = Gt(e, a), c = (u) => {
    i.current && (i.current.scrollTop = u.currentTarget.scrollTop, i.current.scrollLeft = u.currentTarget.scrollLeft);
  };
  return /* @__PURE__ */ n("span", { class: "td-highlight-textarea", children: [
    /* @__PURE__ */ n("pre", { ref: i, class: "td-highlight-backdrop", "aria-hidden": "true", children: [
      d.map((u, f) => u.reference ? /* @__PURE__ */ n("mark", { class: u.valid ? "valid" : "invalid", children: u.text }, f) : u.text),
      e.endsWith(`
`) && " "
    ] }),
    /* @__PURE__ */ n("textarea", { class: "td-highlight-input", rows: t, value: e, onInput: r, onScroll: c })
  ] });
}
const Jt = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function G(e, t) {
  return Jt[e][t];
}
function Qe(e) {
  return (Array.isArray(e.results) && e.results.length ? e.results : e.path ? [{ path: e.path, bytes: e.bytes, modifiedAt: e.modifiedAt }] : []).filter((r) => typeof r.path == "string" && r.path.trim().length > 0).sort((r, a) => (a.modifiedAt ?? 0) - (r.modifiedAt ?? 0));
}
function Kt(e, t) {
  const r = /_video_(\d+)/i.exec(e.replace(/\\/g, "/"));
  return r ? Number(r[1]) : t;
}
function Yt({ src: e, alt: t }) {
  const r = ft(null), [a, i] = j(!1);
  return _t(() => {
    const d = r.current;
    if (!d) return;
    if (!("IntersectionObserver" in window)) {
      i(!0);
      return;
    }
    const c = new IntersectionObserver((u) => {
      i(u.some((f) => f.isIntersecting));
    }, { rootMargin: "160px" });
    return c.observe(d), () => c.disconnect();
  }, []), /* @__PURE__ */ n("div", { class: "td-result-thumb", ref: r, children: a ? /* @__PURE__ */ n("video", { src: e, "aria-label": t, muted: !0, playsInline: !0, preload: "metadata", onLoadedMetadata: (d) => {
    const c = d.currentTarget;
    Number.isFinite(c.duration) && c.duration > 0.02 && (c.currentTime = Math.min(0.25, Math.max(0, c.duration - 0.05)));
  } }) : /* @__PURE__ */ n("span", { children: "…" }) });
}
function Se(e, t) {
  const r = e.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!r || r.startsWith("/") || /^[A-Za-z]:\//.test(r)) return null;
  const a = r.split("/").filter(Boolean), i = a.pop();
  if (!i || a.some((c) => c === "..")) return null;
  const d = new URLSearchParams({ filename: i, type: t });
  return a.length && d.set("subfolder", a.join("/")), `/view?${d.toString()}`;
}
function Qt(e) {
  return Se(e, "input");
}
function ve(e) {
  return e.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function Xe({ asset: e, compact: t = !1 }) {
  const r = Qt(e.path), a = `td-media-preview ${t ? "compact" : ""}`;
  return r ? e.kind === "image" ? /* @__PURE__ */ n("div", { class: a, children: /* @__PURE__ */ n("img", { src: r, alt: e.alias, loading: "lazy" }) }) : e.kind === "video" ? /* @__PURE__ */ n("div", { class: a, children: /* @__PURE__ */ n("video", { src: r, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ n("div", { class: a, children: /* @__PURE__ */ n("audio", { src: r, controls: !0, preload: "metadata" }) }) : e.path ? /* @__PURE__ */ n("div", { class: `${a} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ n("div", { class: `${a} empty`, children: "尚未选择素材 / No media selected" });
}
function Xt(e) {
  const t = e.reduce((r, a) => {
    const i = /^shot_(\d+)$/i.exec(a.id.trim());
    return i ? Math.max(r, Number(i[1])) : r;
  }, 0);
  return Math.max(t, e.length) + 1;
}
function Zt(e, t = 5) {
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
function Ze(e, t, r) {
  const a = Xt(e), i = Array.from({ length: t }, (d, c) => Zt(a + c, r));
  return [...e, ...i];
}
const wt = (e) => `${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, de = (e) => JSON.parse(JSON.stringify(e)), er = { image: "图片", video: "视频", audio: "音频" };
function et(e) {
  var r;
  const t = de(e);
  return t.schemaVersion = 4, (r = t.project.id) != null && r.trim() || (t.project.id = wt("project")), t.shots = t.shots.map((a) => ({
    ...a,
    latentRelay: a.latentRelay ?? !0,
    secondSampling: a.secondSampling ?? !0
  })), t;
}
function tr(e) {
  return e.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function rr(e) {
  const t = wt(e);
  return { id: t, alias: t, kind: e, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: e === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function nr(e, t, r) {
  const a = new FormData();
  a.append("projectName", e), a.append("kind", t), a.append("file", r);
  const i = await fetch("/theodore-director/v1/assets", { method: "POST", body: a }), d = await i.json();
  if (!i.ok || !d.path) throw new Error(d.error || `HTTP ${i.status}`);
  return d.path;
}
async function or(e, t, r) {
  const a = new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t.id,
    activeIndex: String(r)
  }), i = await fetch(`/theodore-director/v1/generated-video?${a.toString()}`), d = await i.json();
  if (!i.ok) throw new Error(d.error || `HTTP ${i.status}`);
  return d;
}
async function ir(e) {
  var a;
  if ((a = navigator.clipboard) != null && a.writeText)
    try {
      await navigator.clipboard.writeText(e);
      return;
    } catch {
    }
  const t = document.createElement("textarea");
  t.value = e, t.style.position = "fixed", t.style.opacity = "0", document.body.append(t), t.select();
  const r = document.execCommand("copy");
  if (t.remove(), !r) throw new Error("浏览器拒绝写入剪贴板");
}
function ar({ initial: e, onSave: t, onClose: r, supportsSecondSampling: a }) {
  const [i, d] = j(() => et(e)), [c, u] = j("shots"), [f, p] = j(0), [l, v] = j(() => navigator.language.startsWith("zh") ? "zh" : "en"), [s, g] = j({}), [k, P] = j(!1), [C, S] = j(!0), [y, E] = j(0), [m, x] = j({ found: !1, results: [] }), [O, V] = j(""), [W, q] = j(!1), [D, H] = j(""), [kt, te] = j(!1), [K, Y] = j([]), [Ae, St] = j("5"), [Ne, zt] = j("1"), [je, $t] = j("5"), z = i.shots[Math.min(f, i.shots.length - 1)], I = we(() => z ? yt(i, z) : null, [i, z]), X = z != null && z.enabled ? i.shots.slice(0, f).filter((o) => o.enabled).length : -1, fe = i.shots.length > 0 && i.shots.every((o) => o.secondSampling), L = we(() => Qe(m), [m]), U = L.find((o) => o.path === O) ?? L[0], Pe = U != null && U.path ? Se(U.path, "output") : null, w = (o) => d((h) => {
    const _ = de(h);
    return o(_), _;
  }), Ee = (o, h) => w((_) => {
    const b = o + h;
    b < 0 || b >= _.shots.length || ([_.shots[o], _.shots[b]] = [_.shots[b], _.shots[o]], p(b));
  }), Tt = (o) => w((h) => {
    h.shots.length <= 1 || (h.shots.splice(o, 1), p((_) => _ > o ? _ - 1 : _ === o ? Math.min(o, h.shots.length - 1) : _));
  }), Ct = () => {
    Y(de(i.shots)), te(!0);
  }, It = () => {
    const o = Number(Ae);
    if (!Number.isFinite(o) || o <= 0) {
      window.alert(l === "zh" ? "统一时长必须大于 0 秒" : "The shared duration must be greater than 0 seconds.");
      return;
    }
    Y((h) => h.map((_) => ({ ..._, durationSeconds: o })));
  }, At = () => {
    const o = Number(Ne), h = Number(je);
    if (!Number.isInteger(o) || o < 1 || o > 100) {
      window.alert(l === "zh" ? "新增镜头数量必须是 1–100 的整数" : "The shot count must be an integer from 1 to 100.");
      return;
    }
    if (!Number.isFinite(h) || h <= 0) {
      window.alert(l === "zh" ? "新增镜头时长必须大于 0 秒" : "The new-shot duration must be greater than 0 seconds.");
      return;
    }
    Y((_) => Ze(_, o, h));
  }, Nt = () => {
    if (K.some((o) => !Number.isFinite(o.durationSeconds) || o.durationSeconds <= 0)) {
      window.alert(l === "zh" ? "每个镜头的时长都必须大于 0 秒" : "Every shot duration must be greater than 0 seconds.");
      return;
    }
    w((o) => {
      o.shots = de(K);
    }), p((o) => Math.min(o, K.length - 1)), te(!1);
  }, jt = () => {
    const o = URL.createObjectURL(new Blob([JSON.stringify(i, null, 2)], { type: "application/json" })), h = document.createElement("a");
    h.href = o, h.download = `${tr(i.project.name)}.director.json`, h.click(), URL.revokeObjectURL(o);
  }, Pt = () => {
    const o = qt(i);
    if (o.length) {
      window.alert(`计划未通过校验：

${o.join(`
`)}`);
      return;
    }
    t(i);
  };
  return _t(() => {
    let o = !1;
    return !(z != null && z.enabled) || X < 0 ? (x({ found: !1, results: [] }), V(""), q(!1), () => {
      o = !0;
    }) : (q(!0), or(i, z, X).then((h) => {
      if (o) return;
      const _ = Qe(h);
      x(h), V((b) => {
        var T;
        return _.some((R) => R.path === b) ? b : ((T = _[0]) == null ? void 0 : T.path) ?? "";
      });
    }).catch((h) => {
      o || (x({ found: !1, results: [], error: String(h) }), V(""));
    }).finally(() => {
      o || q(!1);
    }), () => {
      o = !0;
    });
  }, [i.project.name, i.project.runId, z == null ? void 0 : z.id, z == null ? void 0 : z.enabled, X, y]), /* @__PURE__ */ n("div", { class: "td-shell", children: [
    /* @__PURE__ */ n("header", { children: [
      /* @__PURE__ */ n("h1", { children: G(l, "title") }),
      /* @__PURE__ */ n("div", { class: "td-actions", children: [
        /* @__PURE__ */ n("button", { onClick: jt, children: "导出 / Export" }),
        /* @__PURE__ */ n("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ n("input", { type: "file", accept: "application/json,.json", onChange: async (o) => {
            var _;
            const h = (_ = o.currentTarget.files) == null ? void 0 : _[0];
            if (h)
              try {
                const b = JSON.parse(await h.text());
                if (!b.project || !Array.isArray(b.shots) || !Array.isArray(b.assets)) throw new Error("不是有效的 Theodore Director Plan");
                d(et(b)), p(0);
              } catch (b) {
                window.alert(String(b));
              }
          } })
        ] }),
        /* @__PURE__ */ n("button", { onClick: () => v(l === "zh" ? "en" : "zh"), children: l === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ n("button", { class: "primary", onClick: Pt, children: G(l, "save") }),
        /* @__PURE__ */ n("button", { onClick: r, children: G(l, "close") })
      ] })
    ] }),
    /* @__PURE__ */ n("nav", { children: ["shots", "assets", "settings"].map((o) => /* @__PURE__ */ n("button", { class: c === o ? "active" : "", onClick: () => u(o), children: G(l, o) })) }),
    /* @__PURE__ */ n("main", { children: [
      c === "shots" && /* @__PURE__ */ n("div", { class: "td-shots", children: [
        /* @__PURE__ */ n("aside", { class: "td-shot-sidebar", children: [
          a && /* @__PURE__ */ n("button", { class: `wide td-bulk-toggle ${fe ? "active" : ""}`, onClick: () => w((o) => {
            const h = !o.shots.every((_) => _.secondSampling);
            o.shots.forEach((_) => {
              _.secondSampling = h;
            });
          }), children: l === "zh" ? `全部二次采样：${fe ? "开" : "关"}` : `Second sampling for all: ${fe ? "ON" : "OFF"}` }),
          /* @__PURE__ */ n("div", { class: "td-shot-list", children: i.shots.map((o, h) => /* @__PURE__ */ n("div", { class: `td-shot-card ${h === f ? "selected" : ""}`, onClick: () => p(h), children: [
            /* @__PURE__ */ n("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ n("button", { class: "td-shot-delete", disabled: i.shots.length <= 1, title: l === "zh" ? i.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : i.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": l === "zh" ? "删除镜头" : "Delete shot", onClick: (_) => {
              _.stopPropagation(), Tt(h);
            }, children: "×" }) }),
            /* @__PURE__ */ n("strong", { children: [
              h + 1,
              ". ",
              o.title
            ] }),
            /* @__PURE__ */ n("span", { children: [
              o.durationSeconds,
              "s · ",
              o.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ n("div", { class: "td-shot-move-actions", children: [
              /* @__PURE__ */ n("button", { title: l === "zh" ? "上移镜头" : "Move shot up", onClick: (_) => {
                _.stopPropagation(), Ee(h, -1);
              }, children: "↑" }),
              /* @__PURE__ */ n("button", { title: l === "zh" ? "下移镜头" : "Move shot down", onClick: (_) => {
                _.stopPropagation(), Ee(h, 1);
              }, children: "↓" })
            ] })
          ] }, o.id)) }),
          /* @__PURE__ */ n("button", { class: "wide", onClick: () => w((o) => {
            const h = o.shots.length;
            o.shots = Ze(o.shots, 1, 5), p(h);
          }), children: [
            "＋ ",
            G(l, "addShot")
          ] }),
          /* @__PURE__ */ n("div", { class: "td-shot-batch-entry", children: /* @__PURE__ */ n("button", { class: "wide", onClick: Ct, children: l === "zh" ? "批量处理镜头" : "Batch edit shots" }) })
        ] }),
        z && /* @__PURE__ */ n("section", { class: "td-form", children: [
          /* @__PURE__ */ n("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ n("label", { children: [
              "ID",
              /* @__PURE__ */ n("input", { value: z.id, onInput: (o) => w((h) => {
                h.shots[f].id = o.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ n("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ n("input", { value: z.title, onInput: (o) => w((h) => {
                h.shots[f].title = o.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ n("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ n("input", { type: "number", min: "0.1", step: "0.1", value: z.durationSeconds, onInput: (o) => w((h) => {
                h.shots[f].durationSeconds = Number(o.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ n("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ n("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: z.enabled, onChange: (o) => w((h) => {
                  h.shots[f].enabled = o.currentTarget.checked;
                }) }),
                /* @__PURE__ */ n("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ n("label", { class: "td-shot-enabled", title: X === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: z.latentRelay, onChange: (o) => w((h) => {
                  h.shots[f].latentRelay = o.currentTarget.checked;
                }) }),
                /* @__PURE__ */ n("span", { children: [
                  "latent接力 / Relay",
                  X === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              a && /* @__PURE__ */ n("label", { class: "td-shot-enabled", title: "开启时执行 RTX 超分和第二次 H3 采样，关闭时直接使用第一采画面", children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: z.secondSampling, onChange: (o) => w((h) => {
                  h.shots[f].secondSampling = o.currentTarget.checked;
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
            /* @__PURE__ */ n(be, { rows: 10, value: z.prompt, isReferenceValid: (o) => xt(i, z, o), onInput: (o) => w((h) => {
              h.shots[f].prompt = o.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ n("label", { children: [
            /* @__PURE__ */ n("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ n("textarea", { rows: 3, value: z.negativePrompt, onInput: (o) => w((h) => {
              h.shots[f].negativePrompt = o.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ n("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ n("legend", { children: "本镜头素材 / Shot media" }),
            i.assets.map((o) => {
              const h = !z.disabledAssetIds.includes(o.id), _ = ve(o.path) || o.alias, b = `{{ref:${o.alias}}}`;
              return /* @__PURE__ */ n("div", { class: `td-shot-media-card ${h ? "" : "disabled"}`, children: [
                /* @__PURE__ */ n("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ n(Xe, { asset: o, compact: !0 }),
                  /* @__PURE__ */ n("span", { class: "td-shot-media-kind", children: l === "zh" ? er[o.kind] : o.kind }),
                  /* @__PURE__ */ n("label", { class: "td-shot-media-toggle", title: h ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ n("input", { type: "checkbox", checked: h, onChange: (T) => w((R) => {
                    const F = R.shots[f].disabledAssetIds;
                    R.shots[f].disabledAssetIds = T.currentTarget.checked ? F.filter((Q) => Q !== o.id) : [.../* @__PURE__ */ new Set([...F, o.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ n("button", { class: `td-shot-media-name ${D === o.id ? "copied" : ""}`, title: `${_}
${l === "zh" ? "点击复制" : "Click to copy"} ${b}`, onClick: async () => {
                  try {
                    await ir(b), H(o.id), window.setTimeout(() => H((T) => T === o.id ? "" : T), 1400);
                  } catch (T) {
                    window.alert(`${l === "zh" ? "复制失败" : "Copy failed"}: ${String(T)}`);
                  }
                }, children: [
                  /* @__PURE__ */ n("span", { children: _ }),
                  D === o.id && /* @__PURE__ */ n("em", { children: l === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, o.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ n("aside", { class: "td-preview", children: [
          /* @__PURE__ */ n("details", { open: k, onToggle: (o) => P(o.currentTarget.open), children: [
            /* @__PURE__ */ n("summary", { children: [
              /* @__PURE__ */ n("strong", { children: G(l, "preview") }),
              /* @__PURE__ */ n("span", { class: "td-summary-counts", children: [
                "Picture ",
                (I == null ? void 0 : I.slots.filter((o) => o.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (I == null ? void 0 : I.slots.filter((o) => o.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (I == null ? void 0 : I.audioCount) ?? 0,
                "/3 · Files ",
                (I == null ? void 0 : I.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ n("div", { class: "td-preview-body", children: [
              I != null && I.errors.length ? /* @__PURE__ */ n("ul", { class: "errors", children: I.errors.map((o) => /* @__PURE__ */ n("li", { children: o })) }) : /* @__PURE__ */ n("p", { class: "ok", children: G(l, "noErrors") }),
              /* @__PURE__ */ n("ol", { children: I == null ? void 0 : I.slots.map((o) => /* @__PURE__ */ n("li", { children: [
                /* @__PURE__ */ n("code", { children: o.label }),
                " ← ",
                o.alias
              ] })) }),
              /* @__PURE__ */ n("pre", { children: I == null ? void 0 : I.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ n("details", { open: C, onToggle: (o) => S(o.currentTarget.open), children: [
            /* @__PURE__ */ n("summary", { children: [
              /* @__PURE__ */ n("strong", { children: l === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ n("span", { class: `td-result-state ${L.length ? "found" : ""}`, children: W ? l === "zh" ? "查询中" : "Checking" : L.length ? l === "zh" ? `${L.length} 个结果` : `${L.length} results` : l === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ n("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ n("div", { class: "td-result-actions", children: /* @__PURE__ */ n("button", { onClick: () => E((o) => o + 1), children: [
                "↻ ",
                l === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              W ? /* @__PURE__ */ n("div", { class: "td-result-empty", children: l === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : m.error ? /* @__PURE__ */ n("div", { class: "td-result-empty errors", children: l === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again." }) : U && Pe ? /* @__PURE__ */ n("div", { class: "td-generated-results", children: [
                /* @__PURE__ */ n("div", { class: "td-generated-video", children: [
                  /* @__PURE__ */ n("video", { src: Pe, controls: !0, preload: "metadata", playsInline: !0 }, U.path),
                  /* @__PURE__ */ n("div", { class: "td-generated-meta", title: U.path, children: [
                    U.path,
                    U.bytes ? ` · ${(U.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                  ] })
                ] }),
                /* @__PURE__ */ n("div", { class: "td-result-list", "aria-label": l === "zh" ? "全部生成结果" : "All generated results", children: L.map((o, h) => {
                  const _ = Se(o.path, "output"), b = Kt(o.path, L.length - h), T = o.modifiedAt ? new Date(o.modifiedAt * 1e3).toLocaleString(l === "zh" ? "zh-CN" : "en-US") : "";
                  return /* @__PURE__ */ n("button", { class: `td-result-item ${o.path === U.path ? "selected" : ""}`, onClick: () => V(o.path), children: [
                    _ ? /* @__PURE__ */ n(Yt, { src: _, alt: `${l === "zh" ? "结果" : "Result"} ${b}` }) : /* @__PURE__ */ n("div", { class: "td-result-thumb", children: /* @__PURE__ */ n("span", { children: "×" }) }),
                    /* @__PURE__ */ n("span", { class: "td-result-item-copy", children: [
                      /* @__PURE__ */ n("strong", { children: [
                        l === "zh" ? `结果 ${b}` : `Result ${b}`,
                        h === 0 && /* @__PURE__ */ n("em", { children: l === "zh" ? "最新" : "Latest" })
                      ] }),
                      /* @__PURE__ */ n("span", { title: o.path, children: ve(o.path) }),
                      /* @__PURE__ */ n("small", { children: [o.bytes ? `${(o.bytes / 1024 / 1024).toFixed(1)} MB` : "", T].filter(Boolean).join(" · ") })
                    ] })
                  ] }, o.path);
                }) })
              ] }) : /* @__PURE__ */ n("div", { class: "td-result-empty", children: l === "zh" ? "未在预期路径找到本段视频" : "No video found at the expected path" })
            ] })
          ] })
        ] })
      ] }),
      c === "assets" && /* @__PURE__ */ n("div", { class: "td-assets", children: [
        /* @__PURE__ */ n("div", { class: "td-toolbar", children: ["image", "video", "audio"].map((o) => /* @__PURE__ */ n("button", { onClick: () => w((h) => h.assets.push(rr(o))), children: [
          "＋ ",
          o
        ] })) }),
        i.assets.map((o, h) => /* @__PURE__ */ n("article", { children: /* @__PURE__ */ n("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ n("div", { class: "td-grid", children: [
              /* @__PURE__ */ n("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ n("input", { value: o.alias, onInput: (_) => w((b) => {
                  b.assets[h].alias = _.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ n("select", { value: o.kind, onChange: (_) => w((b) => {
                  b.assets[h].kind = _.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ n("option", { children: "image" }),
                  /* @__PURE__ */ n("option", { children: "video" }),
                  /* @__PURE__ */ n("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ n("input", { value: o.path, onInput: (_) => w((b) => {
                  b.assets[h].path = _.currentTarget.value;
                }) }),
                /* @__PURE__ */ n("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ n("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ n("input", { type: "file", accept: o.kind === "image" ? "image/*" : o.kind === "video" ? "video/*" : "audio/*", onChange: async (_) => {
                      var R;
                      const b = _.currentTarget, T = (R = b.files) == null ? void 0 : R[0];
                      if (T) {
                        g((F) => ({ ...F, [o.id]: T.name }));
                        try {
                          const F = await nr(i.project.name, o.kind, T);
                          w((Q) => {
                            const De = Q.assets.find((Et) => Et.id === o.id);
                            De && (De.path = F);
                          });
                        } catch (F) {
                          window.alert(String(F));
                        } finally {
                          g((F) => {
                            const Q = { ...F };
                            return delete Q[o.id], Q;
                          }), b.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ n("span", { class: "td-file-name", title: s[o.id] || o.path, children: s[o.id] ? `${l === "zh" ? "上传中" : "Uploading"}: ${s[o.id]}` : ve(o.path) || (l === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ n("input", { type: "number", min: "0", step: "0.1", value: o.durationSeconds ?? "", onInput: (_) => w((b) => {
                  b.assets[h].durationSeconds = _.currentTarget.value ? Number(_.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ n("input", { type: "number", value: o.fixedOrder, onInput: (_) => w((b) => {
                  b.assets[h].fixedOrder = Number(_.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ n("input", { value: o.shotIds.join(", "), onInput: (_) => w((b) => {
                  b.assets[h].shotIds = _.currentTarget.value.split(",").map((T) => T.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ n("div", { class: "td-flags", children: [
              /* @__PURE__ */ n("label", { children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: o.enabled, onChange: (_) => w((b) => {
                  b.assets[h].enabled = _.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ n("label", { children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: o.fixed, onChange: (_) => w((b) => {
                  b.assets[h].fixed = _.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              o.kind === "video" && /* @__PURE__ */ n("label", { children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: o.includeVideoAudio, onChange: (_) => w((b) => {
                  b.assets[h].includeVideoAudio = _.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ n("button", { class: "danger", onClick: () => w((_) => {
                _.assets.splice(h, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ n(Xe, { asset: o })
        ] }) }, o.id))
      ] }),
      c === "settings" && /* @__PURE__ */ n("section", { class: "td-form settings", children: [
        /* @__PURE__ */ n("label", { children: [
          "Project name",
          /* @__PURE__ */ n("input", { value: i.project.name, onInput: (o) => w((h) => {
            h.project.name = o.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "Run ID",
          /* @__PURE__ */ n("input", { value: i.project.runId, onInput: (o) => w((h) => {
            h.project.runId = o.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "FPS",
          /* @__PURE__ */ n("input", { type: "number", value: i.defaults.fps, onInput: (o) => w((h) => {
            h.defaults.fps = Number(o.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "Base seed",
          /* @__PURE__ */ n("input", { type: "number", value: i.defaults.baseSeed, onInput: (o) => w((h) => {
            h.defaults.baseSeed = Number(o.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ n(be, { value: i.promptPrefix, isReferenceValid: (o) => Ye(i, o), onInput: (o) => w((h) => {
            h.promptPrefix = o.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ n(be, { value: i.promptSuffix, isReferenceValid: (o) => Ye(i, o), onInput: (o) => w((h) => {
            h.promptSuffix = o.currentTarget.value;
          }) })
        ] })
      ] })
    ] }),
    kt && /* @__PURE__ */ n("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ n("section", { class: "td-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": l === "zh" ? "批量处理镜头" : "Batch edit shots", children: [
      /* @__PURE__ */ n("header", { class: "td-batch-header", children: [
        /* @__PURE__ */ n("div", { children: [
          /* @__PURE__ */ n("h2", { children: l === "zh" ? "批量处理镜头" : "Batch edit shots" }),
          /* @__PURE__ */ n("p", { children: l === "zh" ? `当前共 ${K.length} 个镜头` : `${K.length} shots` })
        ] }),
        /* @__PURE__ */ n("button", { "aria-label": l === "zh" ? "关闭" : "Close", onClick: () => te(!1), children: "×" })
      ] }),
      /* @__PURE__ */ n("div", { class: "td-batch-tools", children: [
        /* @__PURE__ */ n("div", { children: [
          /* @__PURE__ */ n("label", { children: [
            l === "zh" ? "所有镜头时长" : "Duration for all shots",
            /* @__PURE__ */ n("span", { children: [
              /* @__PURE__ */ n("input", { type: "number", min: "0.1", step: "0.1", value: Ae, onInput: (o) => St(o.currentTarget.value) }),
              /* @__PURE__ */ n("em", { children: l === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ n("button", { onClick: It, children: l === "zh" ? "一键设置所有时长" : "Set all durations" })
        ] }),
        /* @__PURE__ */ n("div", { children: [
          /* @__PURE__ */ n("label", { children: [
            l === "zh" ? "新增镜头数量" : "New shot count",
            /* @__PURE__ */ n("input", { type: "number", min: "1", max: "100", step: "1", value: Ne, onInput: (o) => zt(o.currentTarget.value) })
          ] }),
          /* @__PURE__ */ n("label", { children: [
            l === "zh" ? "每个镜头时长" : "Duration per shot",
            /* @__PURE__ */ n("span", { children: [
              /* @__PURE__ */ n("input", { type: "number", min: "0.1", step: "0.1", value: je, onInput: (o) => $t(o.currentTarget.value) }),
              /* @__PURE__ */ n("em", { children: l === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ n("button", { onClick: At, children: l === "zh" ? "批量新增镜头" : "Add shots" })
        ] })
      ] }),
      /* @__PURE__ */ n("div", { class: "td-batch-table", children: [
        /* @__PURE__ */ n("div", { class: "td-batch-row td-batch-table-head", children: [
          /* @__PURE__ */ n("span", { children: "#" }),
          /* @__PURE__ */ n("span", { children: l === "zh" ? "镜头名" : "Shot name" }),
          /* @__PURE__ */ n("span", { children: l === "zh" ? "具体时长" : "Duration" }),
          /* @__PURE__ */ n("span", { children: [
            "latent ",
            l === "zh" ? "接力" : "relay"
          ] })
        ] }),
        K.map((o, h) => /* @__PURE__ */ n("div", { class: "td-batch-row", children: [
          /* @__PURE__ */ n("span", { children: h + 1 }),
          /* @__PURE__ */ n("input", { value: o.title, "aria-label": `${l === "zh" ? "镜头名" : "Shot name"} ${h + 1}`, onInput: (_) => Y((b) => b.map((T, R) => R === h ? { ...T, title: _.currentTarget.value } : T)) }),
          /* @__PURE__ */ n("label", { class: "td-batch-duration", children: [
            /* @__PURE__ */ n("input", { type: "number", min: "0.1", step: "0.1", value: o.durationSeconds, onInput: (_) => Y((b) => b.map((T, R) => R === h ? { ...T, durationSeconds: Number(_.currentTarget.value) } : T)) }),
            /* @__PURE__ */ n("span", { children: l === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ n("label", { class: "td-batch-relay", children: [
            /* @__PURE__ */ n("input", { type: "checkbox", checked: o.latentRelay, onChange: (_) => Y((b) => b.map((T, R) => R === h ? { ...T, latentRelay: _.currentTarget.checked } : T)) }),
            /* @__PURE__ */ n("span", { children: o.latentRelay ? l === "zh" ? "开" : "ON" : l === "zh" ? "关" : "OFF" })
          ] })
        ] }, o.id))
      ] }),
      /* @__PURE__ */ n("footer", { children: [
        /* @__PURE__ */ n("button", { onClick: () => te(!1), children: l === "zh" ? "取消" : "Cancel" }),
        /* @__PURE__ */ n("button", { class: "primary", onClick: Nt, children: l === "zh" ? "应用更改" : "Apply changes" })
      ] })
    ] }) })
  ] });
}
function dr(e, t, r = !1) {
  const a = document.getElementById("theodore-director-modal");
  if (a) {
    a.focus();
    return;
  }
  const i = document.createElement("div");
  i.id = "theodore-director-modal", i.className = "td-modal", i.tabIndex = -1, document.body.append(i);
  const d = (u) => {
    u.key === "Escape" && c();
  }, c = () => {
    document.removeEventListener("keydown", d), He(null, i), i.remove();
  };
  document.addEventListener("keydown", d), He(/* @__PURE__ */ n(ar, { initial: e, onSave: (u) => {
    t(u), c();
  }, onClose: c, supportsSecondSampling: r }), i), i.focus();
}
const lr = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-highlight-textarea{position:relative;display:block;width:100%;min-width:0}.td-highlight-backdrop,.td-form textarea.td-highlight-input{box-sizing:border-box;width:100%;margin:0;padding:7px 9px;font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,monospace;font-size:inherit;line-height:1.45;letter-spacing:normal;-moz-tab-size:8;tab-size:8;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.td-highlight-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border:1px solid transparent;border-radius:6px;background:#222a35;color:var(--td-text);pointer-events:none}.td-form textarea.td-highlight-input{position:relative;z-index:1;display:block;background:transparent;color:transparent;caret-color:var(--td-text);-webkit-text-fill-color:transparent}.td-highlight-input::selection{background:#5898d46b}.td-highlight-backdrop mark{padding:1px 2px;border-radius:3px;color:inherit}.td-highlight-backdrop mark.valid{background:#1d6b50;color:#bfffe6}.td-highlight-backdrop mark.invalid{background:#7a2931;color:#ffd1d5;text-decoration:underline;text-decoration-color:#ff9aa4;text-underline-offset:2px}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-generated-results{display:flex;flex-direction:column;gap:12px}.td-result-list{display:flex;flex-direction:column;gap:7px;max-height:280px;overflow:auto;padding-right:3px}.td-shell button.td-result-item{display:grid;grid-template-columns:112px minmax(0,1fr);gap:10px;align-items:center;width:100%;padding:6px;text-align:left;background:#151b23}.td-shell button.td-result-item.selected{border-color:var(--td-accent);background:#1c2a2a}.td-result-thumb{width:112px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:5px;background:#090c10;color:var(--td-muted)}.td-result-thumb img,.td-result-thumb video{display:block;width:100%;height:100%;object-fit:contain}.td-result-item-copy{display:flex;min-width:0;flex-direction:column;gap:3px}.td-result-item-copy>strong{display:flex;align-items:center;gap:7px;color:var(--td-text)}.td-result-item-copy>strong em{padding:1px 6px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-result-item-copy>span,.td-result-item-copy>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-result-item-copy>small{font-size:10px}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}.td-shot-sidebar{display:flex;flex-direction:column}.td-shot-list{flex:none}.td-shot-batch-entry{display:flex;align-items:flex-end;flex:1;min-height:90px;padding-top:14px}.td-shot-batch-entry button{border-color:#527061;background:#1b2c28;color:var(--td-accent)}.td-batch-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:28px;background:#05080dbd;box-sizing:border-box}.td-batch-panel{display:flex;flex-direction:column;width:min(920px,100%);max-height:min(820px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-batch-header h2{font-size:18px;margin:0}.td-batch-header p{margin:3px 0 0;color:var(--td-muted)}.td-batch-header>button{font-size:20px;line-height:1;padding:5px 9px}.td-batch-tools{display:grid;grid-template-columns:1fr 1.4fr;gap:12px;padding:14px 18px;border-bottom:1px solid var(--td-line);background:#151b23}.td-batch-tools>div{display:flex;align-items:end;gap:8px;padding:10px;border:1px solid var(--td-line);border-radius:7px}.td-batch-tools label{display:flex;flex:1;flex-direction:column;gap:4px;color:var(--td-muted);white-space:nowrap}.td-batch-tools label>span,.td-batch-duration{display:flex;align-items:center;gap:6px}.td-batch-tools input{width:100%}.td-batch-tools em{color:var(--td-muted);font-style:normal}.td-batch-tools button{white-space:nowrap}.td-batch-table{overflow:auto;padding:0 18px}.td-batch-row{display:grid;grid-template-columns:42px minmax(180px,1fr) 150px 120px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-batch-table-head{position:sticky;top:0;z-index:1;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-batch-duration input{min-width:0;width:100%}.td-batch-duration>span{color:var(--td-muted)}.td-batch-relay{display:flex;align-items:center;gap:7px;justify-content:flex-start;color:var(--td-text)}.td-batch-relay input{width:17px;height:17px;margin:0}.td-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}", tt = "theodore-director-styles";
function sr() {
  if (document.getElementById(tt)) return;
  const e = document.createElement("style");
  e.id = tt, e.textContent = lr, document.head.append(e);
}
sr();
const cr = "/scripts/app.js";
import(
  /* @vite-ignore */
  cr
).then(({ app: e }) => {
  e.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(t, r) {
      if (r.name !== "TheodoreDirector_Project") return;
      const a = t.prototype.onNodeCreated;
      t.prototype.onNodeCreated = function() {
        var d, c;
        a == null || a.apply(this);
        const i = (d = this.widgets) == null ? void 0 : d.find((u) => u.name === "plan_json");
        i && (i.type = "hidden", i.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          try {
            const u = JSON.parse(String(i.value));
            dr(u, (f) => {
              var p, l;
              i.value = JSON.stringify(f, null, 2), this.setDirtyCanvas(!0, !0), (l = (p = e.graph) == null ? void 0 : p.setDirtyCanvas) == null || l.call(p, !0, !0);
            }, !0);
          } catch (u) {
            window.alert(`Theodore Director: ${u instanceof Error ? u.message : String(u)}`);
          }
        }), this.size = [Math.max(((c = this.size) == null ? void 0 : c[0]) ?? 300, 360), 110]);
      };
    }
  });
});
