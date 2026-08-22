var re, I, He, O, be, Le, Oe, ie, K, q, Fe, pe, ae, le, X = {}, ee = [], rt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, oe = Array.isArray;
function L(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function ue(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function ot(e, t, r) {
  var o, s, i, c = {};
  for (i in t) i == "key" ? o = t[i] : i == "ref" ? s = t[i] : c[i] = t[i];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? re.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) c[i] === void 0 && (c[i] = e.defaultProps[i]);
  return Y(e, c, o, s, null);
}
function Y(e, t, r, o, s) {
  var i = { type: e, props: t, key: r, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: s ?? ++He, __i: -1, __u: 0 };
  return s == null && I.vnode != null && I.vnode(i), i;
}
function ne(e) {
  return e.children;
}
function Q(e, t) {
  this.props = e, this.context = t;
}
function R(e, t) {
  if (t == null) return e.__ ? R(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? R(e) : null;
}
function nt(e) {
  if (e.__P && e.__d) {
    var t = e.__v, r = t.__e, o = [], s = [], i = L({}, t);
    i.__v = t.__v + 1, I.vnode && I.vnode(i), _e(e.__P, i, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [r] : null, o, r ?? R(t), !!(32 & t.__u), s), i.__v = t.__v, i.__.__k[i.__i] = i, Be(o, i, s), t.__e = t.__ = null, i.__e != r && Me(i);
  }
}
function Me(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), Me(e);
}
function xe(e) {
  (!e.__d && (e.__d = !0) && O.push(e) && !te.__r++ || be != I.debounceRendering) && ((be = I.debounceRendering) || Le)(te);
}
function te() {
  try {
    for (var e, t = 1; O.length; ) O.length > t && O.sort(Oe), e = O.shift(), t = O.length, nt(e);
  } finally {
    O.length = te.__r = 0;
  }
}
function Re(e, t, r, o, s, i, c, p, _, l, m) {
  var w, d, f, $, z, P, T = o && o.__k || ee, x = t.length;
  for (_ = it(r, t, T, _, x), w = 0; w < x; w++) (f = r.__k[w]) != null && (d = f.__i != -1 && T[f.__i] || X, f.__i = w, P = _e(e, f, d, s, i, c, p, _, l, m), $ = f.__e, f.ref && d.ref != f.ref && (d.ref && he(d.ref, null, f), m.push(f.ref, f.__c || $, f)), z == null && $ != null && (z = $), 4 & f.__u ? (_ = We(f, _, e), d.__e && (d.__e = null)) : typeof f.type == "function" && P !== void 0 ? _ = P : $ && (_ = $.nextSibling), f.__u &= -7);
  return r.__e = z, _;
}
function it(e, t, r, o, s) {
  var i, c, p, _, l, m = r.length, w = m, d = 0;
  for (e.__k = new Array(s), i = 0; i < s; i++) (c = t[i]) != null && typeof c != "boolean" && typeof c != "function" ? (typeof c == "string" || typeof c == "number" || typeof c == "bigint" || c.constructor == String ? c = e.__k[i] = Y(null, c, null, null, null) : oe(c) ? c = e.__k[i] = Y(ne, { children: c }, null, null, null) : c.constructor === void 0 && c.__b > 0 ? c = e.__k[i] = Y(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : e.__k[i] = c, _ = i + d, c.__ = e, c.__b = e.__b + 1, p = null, (l = c.__i = dt(c, r, _, w)) != -1 && (w--, (p = r[l]) && (p.__u |= 2)), p == null || p.__v == null ? (l == -1 && (s > m ? d-- : s < m && d++), typeof c.type != "function" && (c.__u |= 4)) : l != _ && (l == _ - 1 ? d-- : l == _ + 1 ? d++ : (l > _ ? d-- : d++, c.__u |= 4))) : e.__k[i] = null;
  if (w) for (i = 0; i < m; i++) (p = r[i]) != null && (2 & p.__u) == 0 && (p.__e == o && (o = R(p)), Je(p, p));
  return o;
}
function We(e, t, r) {
  var o, s;
  if (typeof e.type == "function") {
    for (o = e.__k, s = 0; o && s < o.length; s++) o[s] && (o[s].__ = e, t = We(o[s], t, r));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = R(e)), t = r.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function dt(e, t, r, o) {
  var s, i, c, p = e.key, _ = e.type, l = t[r], m = l != null && (2 & l.__u) == 0;
  if (l === null && p == null || m && p == l.key && _ == l.type) return r;
  if (o > (m ? 1 : 0)) {
    for (s = r - 1, i = r + 1; s >= 0 || i < t.length; ) if ((l = t[c = s >= 0 ? s-- : i++]) != null && (2 & l.__u) == 0 && p == l.key && _ == l.type) return c;
  }
  return -1;
}
function ye(e, t, r) {
  t[0] == "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || rt.test(t) ? r : r + "px";
}
function G(e, t, r, o, s) {
  var i, c;
  e: if (t == "style") if (typeof r == "string") e.style.cssText = r;
  else {
    if (typeof o == "string" && (e.style.cssText = o = ""), o) for (t in o) r && t in r || ye(e.style, t, "");
    if (r) for (t in r) o && r[t] == o[t] || ye(e.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(Fe, "$1")), c = t.toLowerCase(), t = c in e || t == "onFocusOut" || t == "onFocusIn" ? c.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = r, r ? o ? r[q] = o[q] : (r[q] = pe, e.addEventListener(t, i ? le : ae, i)) : e.removeEventListener(t, i ? le : ae, i);
  else {
    if (s == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && r == 1 ? "" : r));
  }
}
function we(e) {
  return function(t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t[K] == null) t[K] = pe++;
      else if (t[K] < r[q]) return;
      return r(I.event ? I.event(t) : t);
    }
  };
}
function _e(e, t, r, o, s, i, c, p, _, l) {
  var m, w, d, f, $, z, P, T, x, C, u, y, A, V, F, k, b = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && (_ = !!(32 & r.__u), i = [p = t.__e = r.__e]), (m = I.__b) && m(t);
  e: if (typeof b == "function") {
    w = c.length;
    try {
      if (x = t.props, C = b.prototype && b.prototype.render, u = (m = b.contextType) && o[m.__c], y = m ? u ? u.props.value : m.__ : o, r.__c ? T = (d = t.__c = r.__c).__ = d.__E : (C ? t.__c = d = new b(x, y) : (t.__c = d = new Q(x, y), d.constructor = b, d.render = lt), u && u.sub(d), d.state || (d.state = {}), d.__n = o, f = d.__d = !0, d.__h = [], d._sb = []), C && d.__s == null && (d.__s = d.state), C && b.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = L({}, d.__s)), L(d.__s, b.getDerivedStateFromProps(x, d.__s))), $ = d.props, z = d.state, d.__v = t, f) C && b.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), C && d.componentDidMount != null && d.__h.push(d.componentDidMount);
      else {
        if (C && b.getDerivedStateFromProps == null && x !== $ && d.componentWillReceiveProps != null && d.componentWillReceiveProps(x, y), t.__v == r.__v || !d.__e && d.shouldComponentUpdate != null && d.shouldComponentUpdate(x, d.__s, y) === !1) {
          t.__v != r.__v && (d.props = x, d.state = d.__s, d.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(U) {
            U && (U.__ = t);
          }), ee.push.apply(d.__h, d._sb), d._sb = [], d.__h.length && c.push(d), p = R(r);
          break e;
        }
        d.componentWillUpdate != null && d.componentWillUpdate(x, d.__s, y), C && d.componentDidUpdate != null && d.__h.push(function() {
          d.componentDidUpdate($, z, P);
        });
      }
      if (d.context = y, d.props = x, d.__P = e, d.__e = !1, A = I.__r, V = 0, C) d.state = d.__s, d.__d = !1, A && A(t), m = d.render(d.props, d.state, d.context), ee.push.apply(d.__h, d._sb), d._sb = [];
      else do
        d.__d = !1, A && A(t), m = d.render(d.props, d.state, d.context), d.state = d.__s;
      while (d.__d && ++V < 25);
      d.state = d.__s, d.getChildContext != null && (o = L(L({}, o), d.getChildContext())), C && !f && d.getSnapshotBeforeUpdate != null && (P = d.getSnapshotBeforeUpdate($, z)), F = m != null && m.type === ne && m.key == null ? qe(m.props.children) : m, p = Re(e, oe(F) ? F : [F], t, r, o, s, i, c, p, _, l), d.base = t.__e, t.__u &= -161, d.__h.length && c.push(d), T && (d.__E = d.__ = null);
    } catch (U) {
      if (c.length = w, t.__v = null, _ || i != null) {
        if (U.then) {
          for (t.__u |= _ ? 160 : 128; p && p.nodeType == 8 && p.nextSibling; ) p = p.nextSibling;
          i != null && (i[i.indexOf(p)] = null), t.__e = p;
        } else if (i != null) for (k = i.length; k--; ) ue(i[k]);
      } else t.__e = r.__e;
      t.__k == null && (t.__k = r.__k || []), U.then || Ve(t), I.__e(U, t, r);
    }
  } else i == null && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : p = t.__e = at(r.__e, t, r, o, s, i, c, _, l);
  return (m = I.diffed) && m(t), 128 & t.__u ? void 0 : p;
}
function Ve(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Ve));
}
function Be(e, t, r) {
  for (var o = 0; o < r.length; o++) he(r[o], r[++o], r[++o]);
  I.__c && I.__c(t, e), e.some(function(s) {
    try {
      e = s.__h, s.__h = [], e.some(function(i) {
        i.call(s);
      });
    } catch (i) {
      I.__e(i, s.__v);
    }
  });
}
function qe(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : oe(e) ? e.map(qe) : e.constructor !== void 0 ? null : L({}, e);
}
function at(e, t, r, o, s, i, c, p, _) {
  var l, m, w, d, f, $, z, P = r.props || X, T = t.props, x = t.type;
  if (x == "svg" ? s = "http://www.w3.org/2000/svg" : x == "math" ? s = "http://www.w3.org/1998/Math/MathML" : s || (s = "http://www.w3.org/1999/xhtml"), i != null) {
    for (l = 0; l < i.length; l++) if ((f = i[l]) && "setAttribute" in f == !!x && (x ? f.localName == x : f.nodeType == 3)) {
      e = f, i[l] = null;
      break;
    }
  }
  if (e == null) {
    if (x == null) return document.createTextNode(T);
    e = document.createElementNS(s, x, T.is && T), p && (I.__m && I.__m(t, i), p = !1), i = null;
  }
  if (x == null) P === T || p && e.data == T || (e.data = T);
  else {
    if (i = x == "textarea" && T.defaultValue != null ? null : i && re.call(e.childNodes), !p && i != null) for (P = {}, l = 0; l < e.attributes.length; l++) P[(f = e.attributes[l]).name] = f.value;
    for (l in P) f = P[l], l == "dangerouslySetInnerHTML" ? w = f : l == "children" || l in T || l == "value" && "defaultValue" in T || l == "checked" && "defaultChecked" in T || G(e, l, null, f, s);
    for (l in T) f = T[l], l == "children" ? d = f : l == "dangerouslySetInnerHTML" ? m = f : l == "value" ? $ = f : l == "checked" ? z = f : p && typeof f != "function" || P[l] === f || G(e, l, f, P[l], s);
    if (m) p || w && (m.__html == w.__html || m.__html == e.innerHTML) || (e.innerHTML = m.__html), t.__k = [];
    else if (w && (e.innerHTML = ""), Re(t.type == "template" ? e.content : e, oe(d) ? d : [d], t, r, o, x == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s, i, c, i ? i[0] : r.__k && R(r, 0), p, _), i != null) for (l = i.length; l--; ) ue(i[l]);
    p && x != "textarea" || (l = "value", x == "progress" && $ == null ? e.removeAttribute("value") : $ != null && ($ !== e[l] || x == "progress" && !$ || x == "option" && $ != P[l]) && G(e, l, $, P[l], s), l = "checked", z != null && z != e[l] && G(e, l, z, P[l], s));
  }
  return e;
}
function he(e, t, r) {
  try {
    if (typeof e == "function") {
      var o = typeof e.__u == "function";
      o && e.__u(), o && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (s) {
    I.__e(s, r);
  }
}
function Je(e, t, r) {
  var o, s;
  if (I.unmount && I.unmount(e), (o = e.ref) && (o.current && o.current != e.__e || he(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (i) {
      I.__e(i, t);
    }
    o.base = o.__P = o.__n = null;
  }
  if (o = e.__k) for (s = 0; s < o.length; s++) o[s] && Je(o[s], t, r || typeof e.type != "function");
  r || ue(e.__e), e.__c = e.__ = e.__e = void 0;
}
function lt(e, t, r) {
  return this.constructor(e, r);
}
function ke(e, t, r) {
  var o, s, i, c;
  t == document && (t = document.documentElement), I.__ && I.__(e, t), s = (o = !1) ? null : t.__k, i = [], c = [], _e(t, e = t.__k = ot(ne, null, [e]), s || X, X, t.namespaceURI, s ? null : t.firstChild ? re.call(t.childNodes) : null, i, s ? s.__e : t.firstChild, o, c), Be(i, e, c), e.props.children = null;
}
re = ee.slice, I = { __e: function(e, t, r, o) {
  for (var s, i, c; t = t.__; ) if ((s = t.__c) && !s.__) try {
    if ((i = s.constructor) && i.getDerivedStateFromError != null && (s.setState(i.getDerivedStateFromError(e)), c = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), c = s.__d), c) return s.__E = s;
  } catch (p) {
    e = p;
  }
  throw e;
} }, He = 0, Q.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = L({}, this.state), typeof e == "function" && (e = e(L({}, r), this.props)), e && L(r, e), e != null && this.__v && (t && this._sb.push(t), xe(this));
}, Q.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), xe(this));
}, Q.prototype.render = ne, O = [], Le = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Oe = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, te.__r = 0, ie = Math.random().toString(8), K = "__d" + ie, q = "__a" + ie, Fe = /(PointerCapture)$|Capture$/i, pe = 0, ae = we(!1), le = we(!0);
var st = 0;
function n(e, t, r, o, s, i) {
  t || (t = {});
  var c, p, _ = t;
  if ("ref" in _) for (p in _ = {}, t) p == "ref" ? c = t[p] : _[p] = t[p];
  var l = { type: e, props: _, key: r, ref: c, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --st, __i: -1, __u: 0, __source: s, __self: i };
  if (typeof e == "function" && (c = e.defaultProps)) for (p in c) _[p] === void 0 && (_[p] = c[p]);
  return I.vnode && I.vnode(l), l;
}
var J, j, de, Se, se = 0, Ge = [], N = I, $e = N.__b, Te = N.__r, Ie = N.diffed, Ce = N.__c, Pe = N.unmount, je = N.__;
function fe(e, t) {
  N.__h && N.__h(j, e, se || t), se = 0;
  var r = j.__H || (j.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function D(e) {
  return se = 1, ct(Ye, e);
}
function ct(e, t, r) {
  var o = fe(J++, 2);
  if (o.t = e, !o.__c && (o.__ = [Ye(void 0, t), function(p) {
    var _ = o.__N ? o.__N[0] : o.__[0], l = o.t(_, p);
    _ !== l && (o.__N = [l, o.__[1]], o.__c.setState({}));
  }], o.__c = j, !j.__f)) {
    var s = function(p, _, l) {
      if (!o.__c.__H) return !0;
      var m = !1, w = o.__c.props !== p;
      if (o.__c.__H.__.some(function(f) {
        if (f.__N) {
          m = !0;
          var $ = f.__[0];
          f.__ = f.__N, f.__N = void 0, $ !== f.__[0] && (w = !0);
        }
      }), i) {
        var d = i.call(this, p, _, l);
        return m ? d || w : d;
      }
      return !m || w;
    };
    j.__f = !0;
    var i = j.shouldComponentUpdate, c = j.componentWillUpdate;
    j.componentWillUpdate = function(p, _, l) {
      if (this.__e) {
        var m = i;
        i = void 0, s(p, _, l), i = m;
      }
      c && c.call(this, p, _, l);
    }, j.shouldComponentUpdate = s;
  }
  return o.__N || o.__;
}
function pt(e, t) {
  var r = fe(J++, 3);
  !N.__s && Ke(r.__H, t) && (r.__ = e, r.u = t, j.__H.__h.push(r));
}
function ut(e, t) {
  var r = fe(J++, 7);
  return Ke(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__;
}
function _t() {
  for (var e; e = Ge.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(Z), t.__h.some(ce), t.__h = [];
    } catch (r) {
      t.__h = [], N.__e(r, e.__v);
    }
  }
}
N.__b = function(e) {
  j = null, $e && $e(e);
}, N.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), je && je(e, t);
}, N.__r = function(e) {
  Te && Te(e), J = 0;
  var t = (j = e.__c).__H;
  t && (de === j ? (t.__h = [], j.__h = [], t.__.some(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.some(Z), t.__h.some(ce), t.__h = [], J = 0)), de = j;
}, N.diffed = function(e) {
  Ie && Ie(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Ge.push(t) !== 1 && Se === N.requestAnimationFrame || ((Se = N.requestAnimationFrame) || ht)(_t)), t.__H.__.some(function(r) {
    r.u && (r.__H = r.u, r.u = void 0);
  })), de = j = null;
}, N.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.some(Z), r.__h = r.__h.filter(function(o) {
        return !o.__ || ce(o);
      });
    } catch (o) {
      t.some(function(s) {
        s.__h && (s.__h = []);
      }), t = [], N.__e(o, r.__v);
    }
  }), Ce && Ce(e, t);
}, N.unmount = function(e) {
  Pe && Pe(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.some(function(o) {
    try {
      Z(o);
    } catch (s) {
      t = s;
    }
  }), r.__H = void 0, t && N.__e(t, r.__v));
};
var Ne = typeof requestAnimationFrame == "function";
function ht(e) {
  var t, r = function() {
    clearTimeout(o), Ne && cancelAnimationFrame(t), setTimeout(e);
  }, o = setTimeout(r, 35);
  Ne && (t = requestAnimationFrame(r));
}
function Z(e) {
  var t = j, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), j = t;
}
function ce(e) {
  var t = j;
  e.__c = e.__(), j = t;
}
function Ke(e, t) {
  return !e || e.length !== t.length || t.some(function(r, o) {
    return r !== e[o];
  });
}
function Ye(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const ft = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function M(e, t) {
  return ft[e][t];
}
function Qe(e, t) {
  const r = e.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!r || r.startsWith("/") || /^[A-Za-z]:\//.test(r)) return null;
  const o = r.split("/").filter(Boolean), s = o.pop();
  if (!s || o.some((c) => c === "..")) return null;
  const i = new URLSearchParams({ filename: s, type: t });
  return o.length && i.set("subfolder", o.join("/")), `/view?${i.toString()}`;
}
function mt(e) {
  return Qe(e, "input");
}
function ze(e) {
  return e.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function Ae({ asset: e, compact: t = !1 }) {
  const r = mt(e.path), o = `td-media-preview ${t ? "compact" : ""}`;
  return r ? e.kind === "image" ? /* @__PURE__ */ n("div", { class: o, children: /* @__PURE__ */ n("img", { src: r, alt: e.alias, loading: "lazy" }) }) : e.kind === "video" ? /* @__PURE__ */ n("div", { class: o, children: /* @__PURE__ */ n("video", { src: r, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ n("div", { class: o, children: /* @__PURE__ */ n("audio", { src: r, controls: !0, preload: "metadata" }) }) : e.path ? /* @__PURE__ */ n("div", { class: `${o} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ n("div", { class: `${o} empty`, children: "尚未选择素材 / No media selected" });
}
const Ee = /\{\{ref:([^{}]+)}}/g;
function Ze(e, t) {
  const r = [], o = /* @__PURE__ */ new Map();
  for (const u of e.assets)
    u.enabled && (!u.shotIds.length || u.shotIds.includes(t.id)) && !t.disabledAssetIds.includes(u.id) && o.set(u.alias, u);
  const s = [e.promptPrefix, t.prompt, e.promptSuffix].filter(Boolean).join(`
`), i = [...s.matchAll(Ee)].map((u) => u[1].trim()), c = [], p = /* @__PURE__ */ new Set(), _ = (u) => {
    p.has(u.id) || (p.add(u.id), c.push(u));
  };
  [...o.values()].filter((u) => u.fixed).sort((u, y) => u.fixedOrder - y.fixedOrder || u.alias.localeCompare(y.alias)).forEach(_);
  for (const u of i) {
    const y = u.endsWith(".audio") ? u.slice(0, -6) : u, A = o.get(y);
    if (!A) {
      r.push(`未找到或已禁用素材：${u}`);
      continue;
    }
    u.endsWith(".audio") && (A.kind !== "video" || !A.includeVideoAudio) && r.push(`视频伴音未启用：${u}`), _(A);
  }
  const l = c.filter((u) => u.kind === "image"), m = c.filter((u) => u.kind === "video"), w = m.filter((u) => u.includeVideoAudio), d = c.filter((u) => u.kind === "audio"), f = w.length + d.length, $ = l.length + m.length + d.length;
  l.length > 9 && r.push(`参考图 ${l.length}/9，超出 H3 上限`), m.length > 3 && r.push(`参考视频 ${m.length}/3，超出 H3 上限`), f > 3 && r.push(`有效音频 ${f}/3，超出 H3 总上限`), $ > 12 && r.push(`混合文件 ${$}/12，超出 H3 上限`), f && !l.length && !m.length && r.push("音频参考不能单独使用");
  const z = m.filter((u) => typeof u.durationSeconds == "number");
  for (const u of m) (u.durationSeconds == null || u.durationSeconds < 2 || u.durationSeconds > 15) && r.push(`视频 ${u.alias} 的时长必须为 2–15 秒`);
  z.reduce((u, y) => u + (y.durationSeconds ?? 0), 0) > 15 && r.push("参考视频总时长超过 15 秒");
  const P = [...w.map((u) => u.audioDurationSeconds ?? u.durationSeconds), ...d.map((u) => u.durationSeconds)];
  P.some((u) => u == null || u < 2 || u > 15) && r.push("每路有效音频时长必须为 2–15 秒"), P.reduce((u, y) => u + (y ?? 0), 0) > 15 && r.push("有效音频总时长超过 15 秒");
  const T = /* @__PURE__ */ new Map();
  l.forEach((u, y) => T.set(u.alias, `<Picture ${y + 1}>`)), m.forEach((u, y) => T.set(u.alias, `<Video ${y + 1}>`)), w.forEach((u, y) => T.set(`${u.alias}.audio`, `<Audio ${y + 1}>`)), d.forEach((u, y) => T.set(u.alias, `<Audio ${w.length + y + 1}>`));
  const x = s.replace(Ee, (u, y) => T.get(y.trim()) ?? u), C = [...T.entries()].map(([u, y]) => ({ label: y, alias: u, kind: y.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: x, errors: r, slots: C, mixedFiles: $, audioCount: f };
}
function gt(e) {
  var s, i, c, p;
  const t = [];
  (i = (s = e.project) == null ? void 0 : s.id) != null && i.trim() || t.push("Project ID 不能为空"), (!Array.isArray(e.shots) || !e.shots.some((_) => _.enabled)) && t.push("至少需要一个启用分镜");
  const r = /* @__PURE__ */ new Set();
  for (const _ of e.shots ?? [])
    (!((c = _.id) != null && c.trim()) || r.has(_.id)) && t.push(`分镜 ID 为空或重复：${_.id || "(空)"}`), r.add(_.id), _.durationSeconds > 0 || t.push(`分镜 ${_.id} 的时长必须大于 0`);
  const o = /* @__PURE__ */ new Set();
  for (const _ of e.assets ?? []) {
    const l = (p = _.alias) == null ? void 0 : p.toLocaleLowerCase();
    (!_.alias || /[\s{}]/.test(_.alias) || _.alias.endsWith(".audio") || o.has(l)) && t.push(`素材别名无效或重复：${_.alias || "(空)"}`), o.add(l), _.enabled && !_.path && t.push(`素材 ${_.alias} 尚未选择文件`);
  }
  for (const _ of e.shots.filter((l) => l.enabled)) t.push(...Ze(e, _).errors.map((l) => `${_.title}: ${l}`));
  return [...new Set(t)];
}
const vt = (e) => `${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, De = (e) => JSON.parse(JSON.stringify(e)), bt = { image: "图片", video: "视频", audio: "音频" };
function xt(e) {
  return { id: `shot_${String(e + 1).padStart(3, "0")}`, title: `Shot ${e + 1}`, prompt: "", negativePrompt: "", durationSeconds: 5, enabled: !0, seed: null, disabledAssetIds: [] };
}
function yt(e) {
  const t = vt(e);
  return { id: t, alias: t, kind: e, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: e === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function wt(e, t, r) {
  const o = new FormData();
  o.append("projectId", e), o.append("kind", t), o.append("file", r);
  const s = await fetch("/theodore-director/v1/assets", { method: "POST", body: o }), i = await s.json();
  if (!s.ok || !i.path) throw new Error(i.error || `HTTP ${s.status}`);
  return i.path;
}
async function kt(e, t, r) {
  const o = new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t.id,
    activeIndex: String(r)
  }), s = await fetch(`/theodore-director/v1/generated-video?${o.toString()}`), i = await s.json();
  if (!s.ok) throw new Error(i.error || `HTTP ${s.status}`);
  return i;
}
async function St(e) {
  var o;
  if ((o = navigator.clipboard) != null && o.writeText)
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
function $t({ initial: e, onSave: t, onClose: r }) {
  const [o, s] = D(() => De(e)), [i, c] = D("shots"), [p, _] = D(0), [l, m] = D(() => navigator.language.startsWith("zh") ? "zh" : "en"), [w, d] = D({}), [f, $] = D(!1), [z, P] = D(!0), [T, x] = D(0), [C, u] = D({ found: !1 }), [y, A] = D(!1), [V, F] = D(""), k = o.shots[Math.min(p, o.shots.length - 1)], b = ut(() => k ? Ze(o, k) : null, [o, k]), U = k != null && k.enabled ? o.shots.slice(0, p).filter((a) => a.enabled).length : -1, me = C.path ? Qe(C.path, "output") : null, S = (a) => s((h) => {
    const g = De(h);
    return a(g), g;
  }), ge = (a, h) => S((g) => {
    const v = a + h;
    v < 0 || v >= g.shots.length || ([g.shots[a], g.shots[v]] = [g.shots[v], g.shots[a]], _(v));
  }), Xe = () => {
    const a = URL.createObjectURL(new Blob([JSON.stringify(o, null, 2)], { type: "application/json" })), h = document.createElement("a");
    h.href = a, h.download = `${o.project.id || "theodore_project"}.director.json`, h.click(), URL.revokeObjectURL(a);
  }, et = () => {
    const a = gt(o);
    if (a.length) {
      window.alert(`计划未通过校验：

${a.join(`
`)}`);
      return;
    }
    t(o);
  };
  return pt(() => {
    let a = !1;
    return !(k != null && k.enabled) || U < 0 ? (u({ found: !1 }), A(!1), () => {
      a = !0;
    }) : (A(!0), kt(o, k, U).then((h) => {
      a || u(h);
    }).catch((h) => {
      a || u({ found: !1, error: String(h) });
    }).finally(() => {
      a || A(!1);
    }), () => {
      a = !0;
    });
  }, [o.project.name, o.project.runId, k == null ? void 0 : k.id, k == null ? void 0 : k.enabled, U, T]), /* @__PURE__ */ n("div", { class: "td-shell", children: [
    /* @__PURE__ */ n("header", { children: [
      /* @__PURE__ */ n("h1", { children: M(l, "title") }),
      /* @__PURE__ */ n("div", { class: "td-actions", children: [
        /* @__PURE__ */ n("button", { onClick: Xe, children: "导出 / Export" }),
        /* @__PURE__ */ n("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ n("input", { type: "file", accept: "application/json,.json", onChange: async (a) => {
            var g;
            const h = (g = a.currentTarget.files) == null ? void 0 : g[0];
            if (h)
              try {
                const v = JSON.parse(await h.text());
                if (!v.project || !Array.isArray(v.shots) || !Array.isArray(v.assets)) throw new Error("不是有效的 Theodore Director Plan");
                s(v), _(0);
              } catch (v) {
                window.alert(String(v));
              }
          } })
        ] }),
        /* @__PURE__ */ n("button", { onClick: () => m(l === "zh" ? "en" : "zh"), children: l === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ n("button", { class: "primary", onClick: et, children: M(l, "save") }),
        /* @__PURE__ */ n("button", { onClick: r, children: M(l, "close") })
      ] })
    ] }),
    /* @__PURE__ */ n("nav", { children: ["shots", "assets", "settings"].map((a) => /* @__PURE__ */ n("button", { class: i === a ? "active" : "", onClick: () => c(a), children: M(l, a) })) }),
    /* @__PURE__ */ n("main", { children: [
      i === "shots" && /* @__PURE__ */ n("div", { class: "td-shots", children: [
        /* @__PURE__ */ n("aside", { children: [
          o.shots.map((a, h) => /* @__PURE__ */ n("div", { class: `td-shot-card ${h === p ? "selected" : ""}`, onClick: () => _(h), children: [
            /* @__PURE__ */ n("strong", { children: [
              h + 1,
              ". ",
              a.title
            ] }),
            /* @__PURE__ */ n("span", { children: [
              a.durationSeconds,
              "s · ",
              a.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ n("div", { children: [
              /* @__PURE__ */ n("button", { onClick: (g) => {
                g.stopPropagation(), ge(h, -1);
              }, children: "↑" }),
              /* @__PURE__ */ n("button", { onClick: (g) => {
                g.stopPropagation(), ge(h, 1);
              }, children: "↓" })
            ] })
          ] })),
          /* @__PURE__ */ n("button", { class: "wide", onClick: () => S((a) => {
            a.shots.push(xt(a.shots.length)), _(a.shots.length - 1);
          }), children: [
            "＋ ",
            M(l, "addShot")
          ] })
        ] }),
        k && /* @__PURE__ */ n("section", { class: "td-form", children: [
          /* @__PURE__ */ n("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ n("label", { children: [
              "ID",
              /* @__PURE__ */ n("input", { value: k.id, onInput: (a) => S((h) => {
                h.shots[p].id = a.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ n("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ n("input", { value: k.title, onInput: (a) => S((h) => {
                h.shots[p].title = a.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ n("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ n("input", { type: "number", min: "0.1", step: "0.1", value: k.durationSeconds, onInput: (a) => S((h) => {
                h.shots[p].durationSeconds = Number(a.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ n("label", { class: "td-shot-enabled", children: [
              /* @__PURE__ */ n("input", { type: "checkbox", checked: k.enabled, onChange: (a) => S((h) => {
                h.shots[p].enabled = a.currentTarget.checked;
              }) }),
              /* @__PURE__ */ n("span", { children: "启用 / Enabled" })
            ] })
          ] }),
          /* @__PURE__ */ n("label", { children: [
            /* @__PURE__ */ n("span", { class: "td-field-label", children: [
              "提示词（使用 ",
              /* @__PURE__ */ n("code", { children: "{{ref:别名}}" }),
              "）"
            ] }),
            /* @__PURE__ */ n("textarea", { rows: 10, value: k.prompt, onInput: (a) => S((h) => {
              h.shots[p].prompt = a.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ n("label", { children: [
            /* @__PURE__ */ n("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ n("textarea", { rows: 3, value: k.negativePrompt, onInput: (a) => S((h) => {
              h.shots[p].negativePrompt = a.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ n("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ n("legend", { children: "本镜头素材 / Shot media" }),
            o.assets.map((a) => {
              const h = !k.disabledAssetIds.includes(a.id), g = ze(a.path) || a.alias, v = `{{ref:${a.alias}}}`;
              return /* @__PURE__ */ n("div", { class: `td-shot-media-card ${h ? "" : "disabled"}`, children: [
                /* @__PURE__ */ n("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ n(Ae, { asset: a, compact: !0 }),
                  /* @__PURE__ */ n("span", { class: "td-shot-media-kind", children: l === "zh" ? bt[a.kind] : a.kind }),
                  /* @__PURE__ */ n("label", { class: "td-shot-media-toggle", title: h ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ n("input", { type: "checkbox", checked: h, onChange: (E) => S((B) => {
                    const H = B.shots[p].disabledAssetIds;
                    B.shots[p].disabledAssetIds = E.currentTarget.checked ? H.filter((W) => W !== a.id) : [.../* @__PURE__ */ new Set([...H, a.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ n("button", { class: `td-shot-media-name ${V === a.id ? "copied" : ""}`, title: `${g}
${l === "zh" ? "点击复制" : "Click to copy"} ${v}`, onClick: async () => {
                  try {
                    await St(v), F(a.id), window.setTimeout(() => F((E) => E === a.id ? "" : E), 1400);
                  } catch (E) {
                    window.alert(`${l === "zh" ? "复制失败" : "Copy failed"}: ${String(E)}`);
                  }
                }, children: [
                  /* @__PURE__ */ n("span", { children: g }),
                  V === a.id && /* @__PURE__ */ n("em", { children: l === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, a.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ n("aside", { class: "td-preview", children: [
          /* @__PURE__ */ n("details", { open: f, onToggle: (a) => $(a.currentTarget.open), children: [
            /* @__PURE__ */ n("summary", { children: [
              /* @__PURE__ */ n("strong", { children: M(l, "preview") }),
              /* @__PURE__ */ n("span", { class: "td-summary-counts", children: [
                "Picture ",
                (b == null ? void 0 : b.slots.filter((a) => a.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (b == null ? void 0 : b.slots.filter((a) => a.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (b == null ? void 0 : b.audioCount) ?? 0,
                "/3 · Files ",
                (b == null ? void 0 : b.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ n("div", { class: "td-preview-body", children: [
              b != null && b.errors.length ? /* @__PURE__ */ n("ul", { class: "errors", children: b.errors.map((a) => /* @__PURE__ */ n("li", { children: a })) }) : /* @__PURE__ */ n("p", { class: "ok", children: M(l, "noErrors") }),
              /* @__PURE__ */ n("ol", { children: b == null ? void 0 : b.slots.map((a) => /* @__PURE__ */ n("li", { children: [
                /* @__PURE__ */ n("code", { children: a.label }),
                " ← ",
                a.alias
              ] })) }),
              /* @__PURE__ */ n("pre", { children: b == null ? void 0 : b.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ n("details", { open: z, onToggle: (a) => P(a.currentTarget.open), children: [
            /* @__PURE__ */ n("summary", { children: [
              /* @__PURE__ */ n("strong", { children: l === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ n("span", { class: `td-result-state ${C.found ? "found" : ""}`, children: y ? l === "zh" ? "查询中" : "Checking" : C.found ? l === "zh" ? "已生成" : "Found" : l === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ n("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ n("div", { class: "td-result-actions", children: /* @__PURE__ */ n("button", { onClick: () => x((a) => a + 1), children: [
                "↻ ",
                l === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              y ? /* @__PURE__ */ n("div", { class: "td-result-empty", children: l === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : C.error ? /* @__PURE__ */ n("div", { class: "td-result-empty errors", children: l === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again." }) : C.found && me ? /* @__PURE__ */ n("div", { class: "td-generated-video", children: [
                /* @__PURE__ */ n("video", { src: me, controls: !0, preload: "metadata", playsInline: !0 }, C.path),
                /* @__PURE__ */ n("div", { class: "td-generated-meta", title: C.path, children: [
                  C.path,
                  C.bytes ? ` · ${(C.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                ] })
              ] }) : /* @__PURE__ */ n("div", { class: "td-result-empty", children: l === "zh" ? "未在预期路径找到本段视频" : "No video found at the expected path" })
            ] })
          ] })
        ] })
      ] }),
      i === "assets" && /* @__PURE__ */ n("div", { class: "td-assets", children: [
        /* @__PURE__ */ n("div", { class: "td-toolbar", children: ["image", "video", "audio"].map((a) => /* @__PURE__ */ n("button", { onClick: () => S((h) => h.assets.push(yt(a))), children: [
          "＋ ",
          a
        ] })) }),
        o.assets.map((a, h) => /* @__PURE__ */ n("article", { children: /* @__PURE__ */ n("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ n("div", { class: "td-grid", children: [
              /* @__PURE__ */ n("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ n("input", { value: a.alias, onInput: (g) => S((v) => {
                  v.assets[h].alias = g.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ n("select", { value: a.kind, onChange: (g) => S((v) => {
                  v.assets[h].kind = g.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ n("option", { children: "image" }),
                  /* @__PURE__ */ n("option", { children: "video" }),
                  /* @__PURE__ */ n("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ n("input", { value: a.path, onInput: (g) => S((v) => {
                  v.assets[h].path = g.currentTarget.value;
                }) }),
                /* @__PURE__ */ n("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ n("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ n("input", { type: "file", accept: a.kind === "image" ? "image/*" : a.kind === "video" ? "video/*" : "audio/*", onChange: async (g) => {
                      var B;
                      const v = g.currentTarget, E = (B = v.files) == null ? void 0 : B[0];
                      if (E) {
                        d((H) => ({ ...H, [a.id]: E.name }));
                        try {
                          const H = await wt(o.project.id, a.kind, E);
                          S((W) => {
                            const ve = W.assets.find((tt) => tt.id === a.id);
                            ve && (ve.path = H);
                          });
                        } catch (H) {
                          window.alert(String(H));
                        } finally {
                          d((H) => {
                            const W = { ...H };
                            return delete W[a.id], W;
                          }), v.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ n("span", { class: "td-file-name", title: w[a.id] || a.path, children: w[a.id] ? `${l === "zh" ? "上传中" : "Uploading"}: ${w[a.id]}` : ze(a.path) || (l === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ n("input", { type: "number", min: "0", step: "0.1", value: a.durationSeconds ?? "", onInput: (g) => S((v) => {
                  v.assets[h].durationSeconds = g.currentTarget.value ? Number(g.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ n("input", { type: "number", value: a.fixedOrder, onInput: (g) => S((v) => {
                  v.assets[h].fixedOrder = Number(g.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ n("input", { value: a.shotIds.join(", "), onInput: (g) => S((v) => {
                  v.assets[h].shotIds = g.currentTarget.value.split(",").map((E) => E.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ n("div", { class: "td-flags", children: [
              /* @__PURE__ */ n("label", { children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: a.enabled, onChange: (g) => S((v) => {
                  v.assets[h].enabled = g.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ n("label", { children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: a.fixed, onChange: (g) => S((v) => {
                  v.assets[h].fixed = g.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              a.kind === "video" && /* @__PURE__ */ n("label", { children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: a.includeVideoAudio, onChange: (g) => S((v) => {
                  v.assets[h].includeVideoAudio = g.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ n("button", { class: "danger", onClick: () => S((g) => {
                g.assets.splice(h, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ n(Ae, { asset: a })
        ] }) }, a.id))
      ] }),
      i === "settings" && /* @__PURE__ */ n("section", { class: "td-form settings", children: [
        /* @__PURE__ */ n("label", { children: [
          "Project ID",
          /* @__PURE__ */ n("input", { value: o.project.id, onInput: (a) => S((h) => {
            h.project.id = a.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "Project name",
          /* @__PURE__ */ n("input", { value: o.project.name, onInput: (a) => S((h) => {
            h.project.name = a.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "Run ID",
          /* @__PURE__ */ n("input", { value: o.project.runId, onInput: (a) => S((h) => {
            h.project.runId = a.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "FPS",
          /* @__PURE__ */ n("input", { type: "number", value: o.defaults.fps, onInput: (a) => S((h) => {
            h.defaults.fps = Number(a.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "Base seed",
          /* @__PURE__ */ n("input", { type: "number", value: o.defaults.baseSeed, onInput: (a) => S((h) => {
            h.defaults.baseSeed = Number(a.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ n("textarea", { value: o.promptPrefix, onInput: (a) => S((h) => {
            h.promptPrefix = a.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ n("textarea", { value: o.promptSuffix, onInput: (a) => S((h) => {
            h.promptSuffix = a.currentTarget.value;
          }) })
        ] })
      ] })
    ] })
  ] });
}
function Tt(e, t) {
  const r = document.getElementById("theodore-director-modal");
  if (r) {
    r.focus();
    return;
  }
  const o = document.createElement("div");
  o.id = "theodore-director-modal", o.className = "td-modal", o.tabIndex = -1, document.body.append(o);
  const s = (c) => {
    c.key === "Escape" && i();
  }, i = () => {
    document.removeEventListener("keydown", s), ke(null, o), o.remove();
  };
  document.addEventListener("keydown", s), ke(/* @__PURE__ */ n($t, { initial: e, onSave: (c) => {
    t(c), i();
  }, onClose: i }), o), o.focus();
}
const It = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:1fr auto;gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-card div{grid-column:2;grid-row:1/3}.td-shot-card button{padding:3px 6px}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}", Ue = "theodore-director-styles";
function Ct() {
  if (document.getElementById(Ue)) return;
  const e = document.createElement("style");
  e.id = Ue, e.textContent = It, document.head.append(e);
}
Ct();
const Pt = "/scripts/app.js";
import(
  /* @vite-ignore */
  Pt
).then(({ app: e }) => {
  e.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(t, r) {
      if (r.name !== "TheodoreDirector_Project") return;
      const o = t.prototype.onNodeCreated;
      t.prototype.onNodeCreated = function() {
        var i, c;
        o == null || o.apply(this);
        const s = (i = this.widgets) == null ? void 0 : i.find((p) => p.name === "plan_json");
        s && (s.type = "hidden", s.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          try {
            const p = JSON.parse(String(s.value));
            Tt(p, (_) => {
              var l, m;
              s.value = JSON.stringify(_, null, 2), this.setDirtyCanvas(!0, !0), (m = (l = e.graph) == null ? void 0 : l.setDirtyCanvas) == null || m.call(l, !0, !0);
            });
          } catch (p) {
            window.alert(`Theodore Director: ${p instanceof Error ? p.message : String(p)}`);
          }
        }), this.size = [Math.max(((c = this.size) == null ? void 0 : c[0]) ?? 300, 360), 110]);
      };
    }
  });
});
