var oe, C, Fe, R, ye, Oe, Le, ae, Y, J, Me, he, se, ce, ee = {}, te = [], at = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ne = Array.isArray;
function U(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function _e(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function lt(t, e, r) {
  var i, o, a, c = {};
  for (a in e) a == "key" ? i = e[a] : a == "ref" ? o = e[a] : c[a] = e[a];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? oe.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (a in t.defaultProps) c[a] === void 0 && (c[a] = t.defaultProps[a]);
  return Q(t, c, i, o, null);
}
function Q(t, e, r, i, o) {
  var a = { type: t, props: e, key: r, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Fe, __i: -1, __u: 0 };
  return o == null && C.vnode != null && C.vnode(a), a;
}
function ie(t) {
  return t.children;
}
function X(t, e) {
  this.props = t, this.context = e;
}
function L(t, e) {
  if (e == null) return t.__ ? L(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) return r.__e;
  return typeof t.type == "function" ? L(t) : null;
}
function st(t) {
  if (t.__P && t.__d) {
    var e = t.__v, r = e.__e, i = [], o = [], a = U({}, e);
    a.__v = e.__v + 1, C.vnode && C.vnode(a), fe(t.__P, a, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [r] : null, i, r ?? L(e), !!(32 & e.__u), o), a.__v = e.__v, a.__.__k[a.__i] = a, Je(i, a, o), e.__e = e.__ = null, a.__e != r && Ve(a);
  }
}
function Ve(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), Ve(t);
}
function we(t) {
  (!t.__d && (t.__d = !0) && R.push(t) && !re.__r++ || ye != C.debounceRendering) && ((ye = C.debounceRendering) || Oe)(re);
}
function re() {
  try {
    for (var t, e = 1; R.length; ) R.length > e && R.sort(Le), t = R.shift(), e = R.length, st(t);
  } finally {
    R.length = re.__r = 0;
  }
}
function We(t, e, r, i, o, a, c, h, f, p, s) {
  var x, l, m, $, j, I, T = i && i.__k || te, w = e.length;
  for (f = ct(r, e, T, f, w), x = 0; x < w; x++) (m = r.__k[x]) != null && (l = m.__i != -1 && T[m.__i] || ee, m.__i = x, I = fe(t, m, l, o, a, c, h, f, p, s), $ = m.__e, m.ref && l.ref != m.ref && (l.ref && me(l.ref, null, m), s.push(m.ref, m.__c || $, m)), j == null && $ != null && (j = $), 4 & m.__u ? (f = Be(m, f, t), l.__e && (l.__e = null)) : typeof m.type == "function" && I !== void 0 ? f = I : $ && (f = $.nextSibling), m.__u &= -7);
  return r.__e = j, f;
}
function ct(t, e, r, i, o) {
  var a, c, h, f, p, s = r.length, x = s, l = 0;
  for (t.__k = new Array(o), a = 0; a < o; a++) (c = e[a]) != null && typeof c != "boolean" && typeof c != "function" ? (typeof c == "string" || typeof c == "number" || typeof c == "bigint" || c.constructor == String ? c = t.__k[a] = Q(null, c, null, null, null) : ne(c) ? c = t.__k[a] = Q(ie, { children: c }, null, null, null) : c.constructor === void 0 && c.__b > 0 ? c = t.__k[a] = Q(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : t.__k[a] = c, f = a + l, c.__ = t, c.__b = t.__b + 1, h = null, (p = c.__i = pt(c, r, f, x)) != -1 && (x--, (h = r[p]) && (h.__u |= 2)), h == null || h.__v == null ? (p == -1 && (o > s ? l-- : o < s && l++), typeof c.type != "function" && (c.__u |= 4)) : p != f && (p == f - 1 ? l-- : p == f + 1 ? l++ : (p > f ? l-- : l++, c.__u |= 4))) : t.__k[a] = null;
  if (x) for (a = 0; a < s; a++) (h = r[a]) != null && (2 & h.__u) == 0 && (h.__e == i && (i = L(h)), Ge(h, h));
  return i;
}
function Be(t, e, r) {
  var i, o;
  if (typeof t.type == "function") {
    for (i = t.__k, o = 0; i && o < i.length; o++) i[o] && (i[o].__ = t, e = Be(i[o], e, r));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = L(t)), e = r.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function pt(t, e, r, i) {
  var o, a, c, h = t.key, f = t.type, p = e[r], s = p != null && (2 & p.__u) == 0;
  if (p === null && h == null || s && h == p.key && f == p.type) return r;
  if (i > (s ? 1 : 0)) {
    for (o = r - 1, a = r + 1; o >= 0 || a < e.length; ) if ((p = e[c = o >= 0 ? o-- : a++]) != null && (2 & p.__u) == 0 && h == p.key && f == p.type) return c;
  }
  return -1;
}
function ke(t, e, r) {
  e[0] == "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || at.test(e) ? r : r + "px";
}
function G(t, e, r, i, o) {
  var a, c;
  e: if (e == "style") if (typeof r == "string") t.style.cssText = r;
  else {
    if (typeof i == "string" && (t.style.cssText = i = ""), i) for (e in i) r && e in r || ke(t.style, e, "");
    if (r) for (e in r) i && r[e] == i[e] || ke(t.style, e, r[e]);
  }
  else if (e[0] == "o" && e[1] == "n") a = e != (e = e.replace(Me, "$1")), c = e.toLowerCase(), e = c in t || e == "onFocusOut" || e == "onFocusIn" ? c.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + a] = r, r ? i ? r[J] = i[J] : (r[J] = he, t.addEventListener(e, a ? ce : se, a)) : t.removeEventListener(e, a ? ce : se, a);
  else {
    if (o == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && r == 1 ? "" : r));
  }
}
function Se(t) {
  return function(e) {
    if (this.l) {
      var r = this.l[e.type + t];
      if (e[Y] == null) e[Y] = he++;
      else if (e[Y] < r[J]) return;
      return r(C.event ? C.event(e) : e);
    }
  };
}
function fe(t, e, r, i, o, a, c, h, f, p) {
  var s, x, l, m, $, j, I, T, w, N, u, y, A, M, F, V, v = e.type;
  if (e.constructor !== void 0) return null;
  128 & r.__u && (f = !!(32 & r.__u), a = [h = e.__e = r.__e]), (s = C.__b) && s(e);
  e: if (typeof v == "function") {
    x = c.length;
    try {
      if (w = e.props, N = v.prototype && v.prototype.render, u = (s = v.contextType) && i[s.__c], y = s ? u ? u.props.value : s.__ : i, r.__c ? T = (l = e.__c = r.__c).__ = l.__E : (N ? e.__c = l = new v(w, y) : (e.__c = l = new X(w, y), l.constructor = v, l.render = ht), u && u.sub(l), l.state || (l.state = {}), l.__n = i, m = l.__d = !0, l.__h = [], l._sb = []), N && l.__s == null && (l.__s = l.state), N && v.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = U({}, l.__s)), U(l.__s, v.getDerivedStateFromProps(w, l.__s))), $ = l.props, j = l.state, l.__v = e, m) N && v.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), N && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (N && v.getDerivedStateFromProps == null && w !== $ && l.componentWillReceiveProps != null && l.componentWillReceiveProps(w, y), e.__v == r.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(w, l.__s, y) === !1) {
          e.__v != r.__v && (l.props = w, l.state = l.__s, l.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.some(function(S) {
            S && (S.__ = e);
          }), te.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && c.push(l), h = L(r);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(w, l.__s, y), N && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate($, j, I);
        });
      }
      if (l.context = y, l.props = w, l.__P = t, l.__e = !1, A = C.__r, M = 0, N) l.state = l.__s, l.__d = !1, A && A(e), s = l.render(l.props, l.state, l.context), te.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, A && A(e), s = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++M < 25);
      l.state = l.__s, l.getChildContext != null && (i = U(U({}, i), l.getChildContext())), N && !m && l.getSnapshotBeforeUpdate != null && (I = l.getSnapshotBeforeUpdate($, j)), F = s != null && s.type === ie && s.key == null ? Ke(s.props.children) : s, h = We(t, ne(F) ? F : [F], e, r, i, o, a, c, h, f, p), l.base = e.__e, e.__u &= -161, l.__h.length && c.push(l), T && (l.__E = l.__ = null);
    } catch (S) {
      if (c.length = x, e.__v = null, f || a != null) {
        if (S.then) {
          for (e.__u |= f ? 160 : 128; h && h.nodeType == 8 && h.nextSibling; ) h = h.nextSibling;
          a != null && (a[a.indexOf(h)] = null), e.__e = h;
        } else if (a != null) for (V = a.length; V--; ) _e(a[V]);
      } else e.__e = r.__e;
      e.__k == null && (e.__k = r.__k || []), S.then || qe(e), C.__e(S, e, r);
    }
  } else a == null && e.__v == r.__v ? (e.__k = r.__k, e.__e = r.__e) : h = e.__e = ut(r.__e, e, r, i, o, a, c, f, p);
  return (s = C.diffed) && s(e), 128 & e.__u ? void 0 : h;
}
function qe(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(qe));
}
function Je(t, e, r) {
  for (var i = 0; i < r.length; i++) me(r[i], r[++i], r[++i]);
  C.__c && C.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(a) {
        a.call(o);
      });
    } catch (a) {
      C.__e(a, o.__v);
    }
  });
}
function Ke(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : ne(t) ? t.map(Ke) : t.constructor !== void 0 ? null : U({}, t);
}
function ut(t, e, r, i, o, a, c, h, f) {
  var p, s, x, l, m, $, j, I = r.props || ee, T = e.props, w = e.type;
  if (w == "svg" ? o = "http://www.w3.org/2000/svg" : w == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), a != null) {
    for (p = 0; p < a.length; p++) if ((m = a[p]) && "setAttribute" in m == !!w && (w ? m.localName == w : m.nodeType == 3)) {
      t = m, a[p] = null;
      break;
    }
  }
  if (t == null) {
    if (w == null) return document.createTextNode(T);
    t = document.createElementNS(o, w, T.is && T), h && (C.__m && C.__m(e, a), h = !1), a = null;
  }
  if (w == null) I === T || h && t.data == T || (t.data = T);
  else {
    if (a = w == "textarea" && T.defaultValue != null ? null : a && oe.call(t.childNodes), !h && a != null) for (I = {}, p = 0; p < t.attributes.length; p++) I[(m = t.attributes[p]).name] = m.value;
    for (p in I) m = I[p], p == "dangerouslySetInnerHTML" ? x = m : p == "children" || p in T || p == "value" && "defaultValue" in T || p == "checked" && "defaultChecked" in T || G(t, p, null, m, o);
    for (p in T) m = T[p], p == "children" ? l = m : p == "dangerouslySetInnerHTML" ? s = m : p == "value" ? $ = m : p == "checked" ? j = m : h && typeof m != "function" || I[p] === m || G(t, p, m, I[p], o);
    if (s) h || x && (s.__html == x.__html || s.__html == t.innerHTML) || (t.innerHTML = s.__html), e.__k = [];
    else if (x && (t.innerHTML = ""), We(e.type == "template" ? t.content : t, ne(l) ? l : [l], e, r, i, w == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, a, c, a ? a[0] : r.__k && L(r, 0), h, f), a != null) for (p = a.length; p--; ) _e(a[p]);
    h && w != "textarea" || (p = "value", w == "progress" && $ == null ? t.removeAttribute("value") : $ != null && ($ !== t[p] || w == "progress" && !$ || w == "option" && $ != I[p]) && G(t, p, $, I[p], o), p = "checked", j != null && j != t[p] && G(t, p, j, I[p], o));
  }
  return t;
}
function me(t, e, r) {
  try {
    if (typeof t == "function") {
      var i = typeof t.__u == "function";
      i && t.__u(), i && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (o) {
    C.__e(o, r);
  }
}
function Ge(t, e, r) {
  var i, o;
  if (C.unmount && C.unmount(t), (i = t.ref) && (i.current && i.current != t.__e || me(i, null, e)), (i = t.__c) != null) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (a) {
      C.__e(a, e);
    }
    i.base = i.__P = i.__n = null;
  }
  if (i = t.__k) for (o = 0; o < i.length; o++) i[o] && Ge(i[o], e, r || typeof t.type != "function");
  r || _e(t.__e), t.__c = t.__ = t.__e = void 0;
}
function ht(t, e, r) {
  return this.constructor(t, r);
}
function $e(t, e, r) {
  var i, o, a, c;
  e == document && (e = document.documentElement), C.__ && C.__(t, e), o = (i = !1) ? null : e.__k, a = [], c = [], fe(e, t = e.__k = lt(ie, null, [t]), o || ee, ee, e.namespaceURI, o ? null : e.firstChild ? oe.call(e.childNodes) : null, a, o ? o.__e : e.firstChild, i, c), Je(a, t, c), t.props.children = null;
}
oe = te.slice, C = { __e: function(t, e, r, i) {
  for (var o, a, c; e = e.__; ) if ((o = e.__c) && !o.__) try {
    if ((a = o.constructor) && a.getDerivedStateFromError != null && (o.setState(a.getDerivedStateFromError(t)), c = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, i || {}), c = o.__d), c) return o.__E = o;
  } catch (h) {
    t = h;
  }
  throw t;
} }, Fe = 0, X.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = U({}, this.state), typeof t == "function" && (t = t(U({}, r), this.props)), t && U(r, t), t != null && this.__v && (e && this._sb.push(e), we(this));
}, X.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), we(this));
}, X.prototype.render = ie, R = [], Oe = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Le = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, re.__r = 0, ae = Math.random().toString(8), Y = "__d" + ae, J = "__a" + ae, Me = /(PointerCapture)$|Capture$/i, he = 0, se = Se(!1), ce = Se(!0);
var _t = 0;
function n(t, e, r, i, o, a) {
  e || (e = {});
  var c, h, f = e;
  if ("ref" in f) for (h in f = {}, e) h == "ref" ? c = e[h] : f[h] = e[h];
  var p = { type: t, props: f, key: r, ref: c, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --_t, __i: -1, __u: 0, __source: o, __self: a };
  if (typeof t == "function" && (c = t.defaultProps)) for (h in c) f[h] === void 0 && (f[h] = c[h]);
  return C.vnode && C.vnode(p), p;
}
var K, P, le, Te, pe = 0, Ye = [], z = C, Ce = z.__b, Ie = z.__r, Pe = z.diffed, ze = z.__c, je = z.unmount, Ne = z.__;
function ge(t, e) {
  z.__h && z.__h(P, t, pe || e), pe = 0;
  var r = P.__H || (P.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function D(t) {
  return pe = 1, ft(Xe, t);
}
function ft(t, e, r) {
  var i = ge(K++, 2);
  if (i.t = t, !i.__c && (i.__ = [Xe(void 0, e), function(h) {
    var f = i.__N ? i.__N[0] : i.__[0], p = i.t(f, h);
    f !== p && (i.__N = [p, i.__[1]], i.__c.setState({}));
  }], i.__c = P, !P.__f)) {
    var o = function(h, f, p) {
      if (!i.__c.__H) return !0;
      var s = !1, x = i.__c.props !== h;
      if (i.__c.__H.__.some(function(m) {
        if (m.__N) {
          s = !0;
          var $ = m.__[0];
          m.__ = m.__N, m.__N = void 0, $ !== m.__[0] && (x = !0);
        }
      }), a) {
        var l = a.call(this, h, f, p);
        return s ? l || x : l;
      }
      return !s || x;
    };
    P.__f = !0;
    var a = P.shouldComponentUpdate, c = P.componentWillUpdate;
    P.componentWillUpdate = function(h, f, p) {
      if (this.__e) {
        var s = a;
        a = void 0, o(h, f, p), a = s;
      }
      c && c.call(this, h, f, p);
    }, P.shouldComponentUpdate = o;
  }
  return i.__N || i.__;
}
function mt(t, e) {
  var r = ge(K++, 3);
  !z.__s && Qe(r.__H, e) && (r.__ = t, r.u = e, P.__H.__h.push(r));
}
function gt(t, e) {
  var r = ge(K++, 7);
  return Qe(r.__H, e) && (r.__ = t(), r.__H = e, r.__h = t), r.__;
}
function vt() {
  for (var t; t = Ye.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(Z), e.__h.some(ue), e.__h = [];
    } catch (r) {
      e.__h = [], z.__e(r, t.__v);
    }
  }
}
z.__b = function(t) {
  P = null, Ce && Ce(t);
}, z.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Ne && Ne(t, e);
}, z.__r = function(t) {
  Ie && Ie(t), K = 0;
  var e = (P = t.__c).__H;
  e && (le === P ? (e.__h = [], P.__h = [], e.__.some(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (e.__h.some(Z), e.__h.some(ue), e.__h = [], K = 0)), le = P;
}, z.diffed = function(t) {
  Pe && Pe(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Ye.push(e) !== 1 && Te === z.requestAnimationFrame || ((Te = z.requestAnimationFrame) || bt)(vt)), e.__H.__.some(function(r) {
    r.u && (r.__H = r.u, r.u = void 0);
  })), le = P = null;
}, z.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.some(Z), r.__h = r.__h.filter(function(i) {
        return !i.__ || ue(i);
      });
    } catch (i) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], z.__e(i, r.__v);
    }
  }), ze && ze(t, e);
}, z.unmount = function(t) {
  je && je(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.some(function(i) {
    try {
      Z(i);
    } catch (o) {
      e = o;
    }
  }), r.__H = void 0, e && z.__e(e, r.__v));
};
var Ae = typeof requestAnimationFrame == "function";
function bt(t) {
  var e, r = function() {
    clearTimeout(i), Ae && cancelAnimationFrame(e), setTimeout(t);
  }, i = setTimeout(r, 35);
  Ae && (e = requestAnimationFrame(r));
}
function Z(t) {
  var e = P, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), P = e;
}
function ue(t) {
  var e = P;
  t.__c = t.__(), P = e;
}
function Qe(t, e) {
  return !t || t.length !== e.length || e.some(function(r, i) {
    return r !== t[i];
  });
}
function Xe(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const xt = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function O(t, e) {
  return xt[t][e];
}
function Ze(t, e) {
  const r = t.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!r || r.startsWith("/") || /^[A-Za-z]:\//.test(r)) return null;
  const i = r.split("/").filter(Boolean), o = i.pop();
  if (!o || i.some((c) => c === "..")) return null;
  const a = new URLSearchParams({ filename: o, type: e });
  return i.length && a.set("subfolder", i.join("/")), `/view?${a.toString()}`;
}
function yt(t) {
  return Ze(t, "input");
}
function Ee(t) {
  return t.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function De({ asset: t, compact: e = !1 }) {
  const r = yt(t.path), i = `td-media-preview ${e ? "compact" : ""}`;
  return r ? t.kind === "image" ? /* @__PURE__ */ n("div", { class: i, children: /* @__PURE__ */ n("img", { src: r, alt: t.alias, loading: "lazy" }) }) : t.kind === "video" ? /* @__PURE__ */ n("div", { class: i, children: /* @__PURE__ */ n("video", { src: r, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ n("div", { class: i, children: /* @__PURE__ */ n("audio", { src: r, controls: !0, preload: "metadata" }) }) : t.path ? /* @__PURE__ */ n("div", { class: `${i} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ n("div", { class: `${i} empty`, children: "尚未选择素材 / No media selected" });
}
const He = /\{\{ref:([^{}]+)}}/g;
function et(t, e) {
  const r = [], i = /* @__PURE__ */ new Map();
  for (const u of t.assets)
    u.enabled && (!u.shotIds.length || u.shotIds.includes(e.id)) && !e.disabledAssetIds.includes(u.id) && i.set(u.alias, u);
  const o = [t.promptPrefix, e.prompt, t.promptSuffix].filter(Boolean).join(`
`), a = [...o.matchAll(He)].map((u) => u[1].trim()), c = [], h = /* @__PURE__ */ new Set(), f = (u) => {
    h.has(u.id) || (h.add(u.id), c.push(u));
  };
  [...i.values()].filter((u) => u.fixed).sort((u, y) => u.fixedOrder - y.fixedOrder || u.alias.localeCompare(y.alias)).forEach(f);
  for (const u of a) {
    const y = u.endsWith(".audio") ? u.slice(0, -6) : u, A = i.get(y);
    if (!A) {
      r.push(`未找到或已禁用素材：${u}`);
      continue;
    }
    u.endsWith(".audio") && (A.kind !== "video" || !A.includeVideoAudio) && r.push(`视频伴音未启用：${u}`), f(A);
  }
  const p = c.filter((u) => u.kind === "image"), s = c.filter((u) => u.kind === "video"), x = s.filter((u) => u.includeVideoAudio), l = c.filter((u) => u.kind === "audio"), m = x.length + l.length, $ = p.length + s.length + l.length;
  p.length > 9 && r.push(`参考图 ${p.length}/9，超出 H3 上限`), s.length > 3 && r.push(`参考视频 ${s.length}/3，超出 H3 上限`), m > 3 && r.push(`有效音频 ${m}/3，超出 H3 总上限`), $ > 12 && r.push(`混合文件 ${$}/12，超出 H3 上限`), m && !p.length && !s.length && r.push("音频参考不能单独使用");
  const j = s.filter((u) => typeof u.durationSeconds == "number");
  for (const u of s) (u.durationSeconds == null || u.durationSeconds < 2 || u.durationSeconds > 15) && r.push(`视频 ${u.alias} 的时长必须为 2–15 秒`);
  j.reduce((u, y) => u + (y.durationSeconds ?? 0), 0) > 15 && r.push("参考视频总时长超过 15 秒");
  const I = [...x.map((u) => u.audioDurationSeconds ?? u.durationSeconds), ...l.map((u) => u.durationSeconds)];
  I.some((u) => u == null || u < 2 || u > 15) && r.push("每路有效音频时长必须为 2–15 秒"), I.reduce((u, y) => u + (y ?? 0), 0) > 15 && r.push("有效音频总时长超过 15 秒");
  const T = /* @__PURE__ */ new Map();
  p.forEach((u, y) => T.set(u.alias, `<Picture ${y + 1}>`)), s.forEach((u, y) => T.set(u.alias, `<Video ${y + 1}>`)), x.forEach((u, y) => T.set(`${u.alias}.audio`, `<Audio ${y + 1}>`)), l.forEach((u, y) => T.set(u.alias, `<Audio ${x.length + y + 1}>`));
  const w = o.replace(He, (u, y) => T.get(y.trim()) ?? u), N = [...T.entries()].map(([u, y]) => ({ label: y, alias: u, kind: y.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: w, errors: r, slots: N, mixedFiles: $, audioCount: m };
}
function wt(t) {
  var o, a, c, h, f, p;
  const e = [];
  (a = (o = t.project) == null ? void 0 : o.name) != null && a.trim() || e.push("Project name 不能为空"), (h = (c = t.project) == null ? void 0 : c.runId) != null && h.trim() || e.push("Run ID 不能为空"), (!Array.isArray(t.shots) || !t.shots.some((s) => s.enabled)) && e.push("至少需要一个启用分镜");
  const r = /* @__PURE__ */ new Set();
  for (const s of t.shots ?? [])
    (!((f = s.id) != null && f.trim()) || r.has(s.id)) && e.push(`分镜 ID 为空或重复：${s.id || "(空)"}`), r.add(s.id), s.durationSeconds > 0 || e.push(`分镜 ${s.id} 的时长必须大于 0`);
  const i = /* @__PURE__ */ new Set();
  for (const s of t.assets ?? []) {
    const x = (p = s.alias) == null ? void 0 : p.toLocaleLowerCase();
    (!s.alias || /[\s{}]/.test(s.alias) || s.alias.endsWith(".audio") || i.has(x)) && e.push(`素材别名无效或重复：${s.alias || "(空)"}`), i.add(x), s.enabled && !s.path && e.push(`素材 ${s.alias} 尚未选择文件`);
  }
  for (const s of t.shots.filter((x) => x.enabled)) e.push(...et(t, s).errors.map((x) => `${s.title}: ${x}`));
  return [...new Set(e)];
}
const tt = (t) => `${t}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, rt = (t) => JSON.parse(JSON.stringify(t)), kt = { image: "图片", video: "视频", audio: "音频" };
function Ue(t) {
  var r;
  const e = rt(t);
  return e.schemaVersion = 4, (r = e.project.id) != null && r.trim() || (e.project.id = tt("project")), e.shots = e.shots.map((i) => ({
    ...i,
    latentRelay: i.latentRelay ?? !0,
    secondSampling: i.secondSampling ?? !0
  })), e;
}
function St(t) {
  return t.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function $t(t) {
  return { id: `shot_${String(t + 1).padStart(3, "0")}`, title: `Shot ${t + 1}`, prompt: "", negativePrompt: "", durationSeconds: 5, enabled: !0, latentRelay: !0, secondSampling: !0, seed: null, disabledAssetIds: [] };
}
function Tt(t) {
  const e = tt(t);
  return { id: e, alias: e, kind: t, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: t === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function Ct(t, e, r) {
  const i = new FormData();
  i.append("projectName", t), i.append("kind", e), i.append("file", r);
  const o = await fetch("/theodore-director/v1/assets", { method: "POST", body: i }), a = await o.json();
  if (!o.ok || !a.path) throw new Error(a.error || `HTTP ${o.status}`);
  return a.path;
}
async function It(t, e, r) {
  const i = new URLSearchParams({
    projectName: t.project.name,
    runId: t.project.runId,
    shotId: e.id,
    activeIndex: String(r)
  }), o = await fetch(`/theodore-director/v1/generated-video?${i.toString()}`), a = await o.json();
  if (!o.ok) throw new Error(a.error || `HTTP ${o.status}`);
  return a;
}
async function Pt(t) {
  var i;
  if ((i = navigator.clipboard) != null && i.writeText)
    try {
      await navigator.clipboard.writeText(t);
      return;
    } catch {
    }
  const e = document.createElement("textarea");
  e.value = t, e.style.position = "fixed", e.style.opacity = "0", document.body.append(e), e.select();
  const r = document.execCommand("copy");
  if (e.remove(), !r) throw new Error("浏览器拒绝写入剪贴板");
}
function zt({ initial: t, onSave: e, onClose: r, supportsSecondSampling: i }) {
  const [o, a] = D(() => Ue(t)), [c, h] = D("shots"), [f, p] = D(0), [s, x] = D(() => navigator.language.startsWith("zh") ? "zh" : "en"), [l, m] = D({}), [$, j] = D(!1), [I, T] = D(!0), [w, N] = D(0), [u, y] = D({ found: !1 }), [A, M] = D(!1), [F, V] = D(""), v = o.shots[Math.min(f, o.shots.length - 1)], S = gt(() => v ? et(o, v) : null, [o, v]), B = v != null && v.enabled ? o.shots.slice(0, f).filter((d) => d.enabled).length : -1, de = o.shots.length > 0 && o.shots.every((d) => d.secondSampling), ve = u.path ? Ze(u.path, "output") : null, k = (d) => a((_) => {
    const g = rt(_);
    return d(g), g;
  }), be = (d, _) => k((g) => {
    const b = d + _;
    b < 0 || b >= g.shots.length || ([g.shots[d], g.shots[b]] = [g.shots[b], g.shots[d]], p(b));
  }), ot = (d) => k((_) => {
    _.shots.length <= 1 || (_.shots.splice(d, 1), p((g) => g > d ? g - 1 : g === d ? Math.min(d, _.shots.length - 1) : g));
  }), nt = () => {
    const d = URL.createObjectURL(new Blob([JSON.stringify(o, null, 2)], { type: "application/json" })), _ = document.createElement("a");
    _.href = d, _.download = `${St(o.project.name)}.director.json`, _.click(), URL.revokeObjectURL(d);
  }, it = () => {
    const d = wt(o);
    if (d.length) {
      window.alert(`计划未通过校验：

${d.join(`
`)}`);
      return;
    }
    e(o);
  };
  return mt(() => {
    let d = !1;
    return !(v != null && v.enabled) || B < 0 ? (y({ found: !1 }), M(!1), () => {
      d = !0;
    }) : (M(!0), It(o, v, B).then((_) => {
      d || y(_);
    }).catch((_) => {
      d || y({ found: !1, error: String(_) });
    }).finally(() => {
      d || M(!1);
    }), () => {
      d = !0;
    });
  }, [o.project.name, o.project.runId, v == null ? void 0 : v.id, v == null ? void 0 : v.enabled, B, w]), /* @__PURE__ */ n("div", { class: "td-shell", children: [
    /* @__PURE__ */ n("header", { children: [
      /* @__PURE__ */ n("h1", { children: O(s, "title") }),
      /* @__PURE__ */ n("div", { class: "td-actions", children: [
        /* @__PURE__ */ n("button", { onClick: nt, children: "导出 / Export" }),
        /* @__PURE__ */ n("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ n("input", { type: "file", accept: "application/json,.json", onChange: async (d) => {
            var g;
            const _ = (g = d.currentTarget.files) == null ? void 0 : g[0];
            if (_)
              try {
                const b = JSON.parse(await _.text());
                if (!b.project || !Array.isArray(b.shots) || !Array.isArray(b.assets)) throw new Error("不是有效的 Theodore Director Plan");
                a(Ue(b)), p(0);
              } catch (b) {
                window.alert(String(b));
              }
          } })
        ] }),
        /* @__PURE__ */ n("button", { onClick: () => x(s === "zh" ? "en" : "zh"), children: s === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ n("button", { class: "primary", onClick: it, children: O(s, "save") }),
        /* @__PURE__ */ n("button", { onClick: r, children: O(s, "close") })
      ] })
    ] }),
    /* @__PURE__ */ n("nav", { children: ["shots", "assets", "settings"].map((d) => /* @__PURE__ */ n("button", { class: c === d ? "active" : "", onClick: () => h(d), children: O(s, d) })) }),
    /* @__PURE__ */ n("main", { children: [
      c === "shots" && /* @__PURE__ */ n("div", { class: "td-shots", children: [
        /* @__PURE__ */ n("aside", { children: [
          i && /* @__PURE__ */ n("button", { class: `wide td-bulk-toggle ${de ? "active" : ""}`, onClick: () => k((d) => {
            const _ = !d.shots.every((g) => g.secondSampling);
            d.shots.forEach((g) => {
              g.secondSampling = _;
            });
          }), children: s === "zh" ? `全部二次采样：${de ? "开" : "关"}` : `Second sampling for all: ${de ? "ON" : "OFF"}` }),
          o.shots.map((d, _) => /* @__PURE__ */ n("div", { class: `td-shot-card ${_ === f ? "selected" : ""}`, onClick: () => p(_), children: [
            /* @__PURE__ */ n("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ n("button", { class: "td-shot-delete", disabled: o.shots.length <= 1, title: s === "zh" ? o.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : o.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": s === "zh" ? "删除镜头" : "Delete shot", onClick: (g) => {
              g.stopPropagation(), ot(_);
            }, children: "×" }) }),
            /* @__PURE__ */ n("strong", { children: [
              _ + 1,
              ". ",
              d.title
            ] }),
            /* @__PURE__ */ n("span", { children: [
              d.durationSeconds,
              "s · ",
              d.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ n("div", { class: "td-shot-move-actions", children: [
              /* @__PURE__ */ n("button", { title: s === "zh" ? "上移镜头" : "Move shot up", onClick: (g) => {
                g.stopPropagation(), be(_, -1);
              }, children: "↑" }),
              /* @__PURE__ */ n("button", { title: s === "zh" ? "下移镜头" : "Move shot down", onClick: (g) => {
                g.stopPropagation(), be(_, 1);
              }, children: "↓" })
            ] })
          ] }, d.id)),
          /* @__PURE__ */ n("button", { class: "wide", onClick: () => k((d) => {
            d.shots.push($t(d.shots.length)), p(d.shots.length - 1);
          }), children: [
            "＋ ",
            O(s, "addShot")
          ] })
        ] }),
        v && /* @__PURE__ */ n("section", { class: "td-form", children: [
          /* @__PURE__ */ n("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ n("label", { children: [
              "ID",
              /* @__PURE__ */ n("input", { value: v.id, onInput: (d) => k((_) => {
                _.shots[f].id = d.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ n("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ n("input", { value: v.title, onInput: (d) => k((_) => {
                _.shots[f].title = d.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ n("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ n("input", { type: "number", min: "0.1", step: "0.1", value: v.durationSeconds, onInput: (d) => k((_) => {
                _.shots[f].durationSeconds = Number(d.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ n("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ n("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: v.enabled, onChange: (d) => k((_) => {
                  _.shots[f].enabled = d.currentTarget.checked;
                }) }),
                /* @__PURE__ */ n("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ n("label", { class: "td-shot-enabled", title: B === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: v.latentRelay, onChange: (d) => k((_) => {
                  _.shots[f].latentRelay = d.currentTarget.checked;
                }) }),
                /* @__PURE__ */ n("span", { children: [
                  "latent接力 / Relay",
                  B === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              i && /* @__PURE__ */ n("label", { class: "td-shot-enabled", title: "开启时执行 RTX 超分和第二次 H3 采样，关闭时直接使用第一采画面", children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: v.secondSampling, onChange: (d) => k((_) => {
                  _.shots[f].secondSampling = d.currentTarget.checked;
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
            /* @__PURE__ */ n("textarea", { rows: 10, value: v.prompt, onInput: (d) => k((_) => {
              _.shots[f].prompt = d.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ n("label", { children: [
            /* @__PURE__ */ n("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ n("textarea", { rows: 3, value: v.negativePrompt, onInput: (d) => k((_) => {
              _.shots[f].negativePrompt = d.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ n("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ n("legend", { children: "本镜头素材 / Shot media" }),
            o.assets.map((d) => {
              const _ = !v.disabledAssetIds.includes(d.id), g = Ee(d.path) || d.alias, b = `{{ref:${d.alias}}}`;
              return /* @__PURE__ */ n("div", { class: `td-shot-media-card ${_ ? "" : "disabled"}`, children: [
                /* @__PURE__ */ n("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ n(De, { asset: d, compact: !0 }),
                  /* @__PURE__ */ n("span", { class: "td-shot-media-kind", children: s === "zh" ? kt[d.kind] : d.kind }),
                  /* @__PURE__ */ n("label", { class: "td-shot-media-toggle", title: _ ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ n("input", { type: "checkbox", checked: _, onChange: (E) => k((q) => {
                    const H = q.shots[f].disabledAssetIds;
                    q.shots[f].disabledAssetIds = E.currentTarget.checked ? H.filter((W) => W !== d.id) : [.../* @__PURE__ */ new Set([...H, d.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ n("button", { class: `td-shot-media-name ${F === d.id ? "copied" : ""}`, title: `${g}
${s === "zh" ? "点击复制" : "Click to copy"} ${b}`, onClick: async () => {
                  try {
                    await Pt(b), V(d.id), window.setTimeout(() => V((E) => E === d.id ? "" : E), 1400);
                  } catch (E) {
                    window.alert(`${s === "zh" ? "复制失败" : "Copy failed"}: ${String(E)}`);
                  }
                }, children: [
                  /* @__PURE__ */ n("span", { children: g }),
                  F === d.id && /* @__PURE__ */ n("em", { children: s === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, d.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ n("aside", { class: "td-preview", children: [
          /* @__PURE__ */ n("details", { open: $, onToggle: (d) => j(d.currentTarget.open), children: [
            /* @__PURE__ */ n("summary", { children: [
              /* @__PURE__ */ n("strong", { children: O(s, "preview") }),
              /* @__PURE__ */ n("span", { class: "td-summary-counts", children: [
                "Picture ",
                (S == null ? void 0 : S.slots.filter((d) => d.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (S == null ? void 0 : S.slots.filter((d) => d.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (S == null ? void 0 : S.audioCount) ?? 0,
                "/3 · Files ",
                (S == null ? void 0 : S.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ n("div", { class: "td-preview-body", children: [
              S != null && S.errors.length ? /* @__PURE__ */ n("ul", { class: "errors", children: S.errors.map((d) => /* @__PURE__ */ n("li", { children: d })) }) : /* @__PURE__ */ n("p", { class: "ok", children: O(s, "noErrors") }),
              /* @__PURE__ */ n("ol", { children: S == null ? void 0 : S.slots.map((d) => /* @__PURE__ */ n("li", { children: [
                /* @__PURE__ */ n("code", { children: d.label }),
                " ← ",
                d.alias
              ] })) }),
              /* @__PURE__ */ n("pre", { children: S == null ? void 0 : S.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ n("details", { open: I, onToggle: (d) => T(d.currentTarget.open), children: [
            /* @__PURE__ */ n("summary", { children: [
              /* @__PURE__ */ n("strong", { children: s === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ n("span", { class: `td-result-state ${u.found ? "found" : ""}`, children: A ? s === "zh" ? "查询中" : "Checking" : u.found ? s === "zh" ? "已生成" : "Found" : s === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ n("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ n("div", { class: "td-result-actions", children: /* @__PURE__ */ n("button", { onClick: () => N((d) => d + 1), children: [
                "↻ ",
                s === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              A ? /* @__PURE__ */ n("div", { class: "td-result-empty", children: s === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : u.error ? /* @__PURE__ */ n("div", { class: "td-result-empty errors", children: s === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again." }) : u.found && ve ? /* @__PURE__ */ n("div", { class: "td-generated-video", children: [
                /* @__PURE__ */ n("video", { src: ve, controls: !0, preload: "metadata", playsInline: !0 }, u.path),
                /* @__PURE__ */ n("div", { class: "td-generated-meta", title: u.path, children: [
                  u.path,
                  u.bytes ? ` · ${(u.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                ] })
              ] }) : /* @__PURE__ */ n("div", { class: "td-result-empty", children: s === "zh" ? "未在预期路径找到本段视频" : "No video found at the expected path" })
            ] })
          ] })
        ] })
      ] }),
      c === "assets" && /* @__PURE__ */ n("div", { class: "td-assets", children: [
        /* @__PURE__ */ n("div", { class: "td-toolbar", children: ["image", "video", "audio"].map((d) => /* @__PURE__ */ n("button", { onClick: () => k((_) => _.assets.push(Tt(d))), children: [
          "＋ ",
          d
        ] })) }),
        o.assets.map((d, _) => /* @__PURE__ */ n("article", { children: /* @__PURE__ */ n("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ n("div", { class: "td-grid", children: [
              /* @__PURE__ */ n("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ n("input", { value: d.alias, onInput: (g) => k((b) => {
                  b.assets[_].alias = g.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ n("select", { value: d.kind, onChange: (g) => k((b) => {
                  b.assets[_].kind = g.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ n("option", { children: "image" }),
                  /* @__PURE__ */ n("option", { children: "video" }),
                  /* @__PURE__ */ n("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ n("input", { value: d.path, onInput: (g) => k((b) => {
                  b.assets[_].path = g.currentTarget.value;
                }) }),
                /* @__PURE__ */ n("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ n("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ n("input", { type: "file", accept: d.kind === "image" ? "image/*" : d.kind === "video" ? "video/*" : "audio/*", onChange: async (g) => {
                      var q;
                      const b = g.currentTarget, E = (q = b.files) == null ? void 0 : q[0];
                      if (E) {
                        m((H) => ({ ...H, [d.id]: E.name }));
                        try {
                          const H = await Ct(o.project.name, d.kind, E);
                          k((W) => {
                            const xe = W.assets.find((dt) => dt.id === d.id);
                            xe && (xe.path = H);
                          });
                        } catch (H) {
                          window.alert(String(H));
                        } finally {
                          m((H) => {
                            const W = { ...H };
                            return delete W[d.id], W;
                          }), b.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ n("span", { class: "td-file-name", title: l[d.id] || d.path, children: l[d.id] ? `${s === "zh" ? "上传中" : "Uploading"}: ${l[d.id]}` : Ee(d.path) || (s === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ n("input", { type: "number", min: "0", step: "0.1", value: d.durationSeconds ?? "", onInput: (g) => k((b) => {
                  b.assets[_].durationSeconds = g.currentTarget.value ? Number(g.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ n("input", { type: "number", value: d.fixedOrder, onInput: (g) => k((b) => {
                  b.assets[_].fixedOrder = Number(g.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ n("input", { value: d.shotIds.join(", "), onInput: (g) => k((b) => {
                  b.assets[_].shotIds = g.currentTarget.value.split(",").map((E) => E.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ n("div", { class: "td-flags", children: [
              /* @__PURE__ */ n("label", { children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: d.enabled, onChange: (g) => k((b) => {
                  b.assets[_].enabled = g.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ n("label", { children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: d.fixed, onChange: (g) => k((b) => {
                  b.assets[_].fixed = g.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              d.kind === "video" && /* @__PURE__ */ n("label", { children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: d.includeVideoAudio, onChange: (g) => k((b) => {
                  b.assets[_].includeVideoAudio = g.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ n("button", { class: "danger", onClick: () => k((g) => {
                g.assets.splice(_, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ n(De, { asset: d })
        ] }) }, d.id))
      ] }),
      c === "settings" && /* @__PURE__ */ n("section", { class: "td-form settings", children: [
        /* @__PURE__ */ n("label", { children: [
          "Project name",
          /* @__PURE__ */ n("input", { value: o.project.name, onInput: (d) => k((_) => {
            _.project.name = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "Run ID",
          /* @__PURE__ */ n("input", { value: o.project.runId, onInput: (d) => k((_) => {
            _.project.runId = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "FPS",
          /* @__PURE__ */ n("input", { type: "number", value: o.defaults.fps, onInput: (d) => k((_) => {
            _.defaults.fps = Number(d.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "Base seed",
          /* @__PURE__ */ n("input", { type: "number", value: o.defaults.baseSeed, onInput: (d) => k((_) => {
            _.defaults.baseSeed = Number(d.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ n("textarea", { value: o.promptPrefix, onInput: (d) => k((_) => {
            _.promptPrefix = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ n("textarea", { value: o.promptSuffix, onInput: (d) => k((_) => {
            _.promptSuffix = d.currentTarget.value;
          }) })
        ] })
      ] })
    ] })
  ] });
}
function jt(t, e, r = !1) {
  const i = document.getElementById("theodore-director-modal");
  if (i) {
    i.focus();
    return;
  }
  const o = document.createElement("div");
  o.id = "theodore-director-modal", o.className = "td-modal", o.tabIndex = -1, document.body.append(o);
  const a = (h) => {
    h.key === "Escape" && c();
  }, c = () => {
    document.removeEventListener("keydown", a), $e(null, o), o.remove();
  };
  document.addEventListener("keydown", a), $e(/* @__PURE__ */ n(zt, { initial: t, onSave: (h) => {
    e(h), c();
  }, onClose: c, supportsSecondSampling: r }), o), o.focus();
}
const Nt = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}", Re = "theodore-director-styles";
function At() {
  if (document.getElementById(Re)) return;
  const t = document.createElement("style");
  t.id = Re, t.textContent = Nt, document.head.append(t);
}
At();
const Et = "/scripts/app.js";
import(
  /* @vite-ignore */
  Et
).then(({ app: t }) => {
  t.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(e, r) {
      if (r.name !== "TheodoreDirector_Project") return;
      const i = e.prototype.onNodeCreated;
      e.prototype.onNodeCreated = function() {
        var a, c;
        i == null || i.apply(this);
        const o = (a = this.widgets) == null ? void 0 : a.find((h) => h.name === "plan_json");
        o && (o.type = "hidden", o.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          try {
            const h = JSON.parse(String(o.value));
            jt(h, (f) => {
              var p, s;
              o.value = JSON.stringify(f, null, 2), this.setDirtyCanvas(!0, !0), (s = (p = t.graph) == null ? void 0 : p.setDirtyCanvas) == null || s.call(p, !0, !0);
            }, !0);
          } catch (h) {
            window.alert(`Theodore Director: ${h instanceof Error ? h.message : String(h)}`);
          }
        }), this.size = [Math.max(((c = this.size) == null ? void 0 : c[0]) ?? 300, 360), 110]);
      };
    }
  });
});
