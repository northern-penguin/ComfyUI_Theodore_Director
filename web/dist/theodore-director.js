var ne, C, Fe, R, ye, Oe, Le, ae, Y, J, Me, _e, se, ce, ee = {}, te = [], dt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, oe = Array.isArray;
function U(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function he(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function at(t, e, r) {
  var n, i, d, c = {};
  for (d in e) d == "key" ? n = e[d] : d == "ref" ? i = e[d] : c[d] = e[d];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? ne.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (d in t.defaultProps) c[d] === void 0 && (c[d] = t.defaultProps[d]);
  return Q(t, c, n, i, null);
}
function Q(t, e, r, n, i) {
  var d = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++Fe, __i: -1, __u: 0 };
  return i == null && C.vnode != null && C.vnode(d), d;
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
function lt(t) {
  if (t.__P && t.__d) {
    var e = t.__v, r = e.__e, n = [], i = [], d = U({}, e);
    d.__v = e.__v + 1, C.vnode && C.vnode(d), fe(t.__P, d, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [r] : null, n, r ?? L(e), !!(32 & e.__u), i), d.__v = e.__v, d.__.__k[d.__i] = d, Je(n, d, i), e.__e = e.__ = null, d.__e != r && Ve(d);
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
    for (var t, e = 1; R.length; ) R.length > e && R.sort(Le), t = R.shift(), e = R.length, lt(t);
  } finally {
    R.length = re.__r = 0;
  }
}
function We(t, e, r, n, i, d, c, _, f, p, s) {
  var v, l, m, $, N, I, T = n && n.__k || te, w = e.length;
  for (f = st(r, e, T, f, w), v = 0; v < w; v++) (m = r.__k[v]) != null && (l = m.__i != -1 && T[m.__i] || ee, m.__i = v, I = fe(t, m, l, i, d, c, _, f, p, s), $ = m.__e, m.ref && l.ref != m.ref && (l.ref && me(l.ref, null, m), s.push(m.ref, m.__c || $, m)), N == null && $ != null && (N = $), 4 & m.__u ? (f = Be(m, f, t), l.__e && (l.__e = null)) : typeof m.type == "function" && I !== void 0 ? f = I : $ && (f = $.nextSibling), m.__u &= -7);
  return r.__e = N, f;
}
function st(t, e, r, n, i) {
  var d, c, _, f, p, s = r.length, v = s, l = 0;
  for (t.__k = new Array(i), d = 0; d < i; d++) (c = e[d]) != null && typeof c != "boolean" && typeof c != "function" ? (typeof c == "string" || typeof c == "number" || typeof c == "bigint" || c.constructor == String ? c = t.__k[d] = Q(null, c, null, null, null) : oe(c) ? c = t.__k[d] = Q(ie, { children: c }, null, null, null) : c.constructor === void 0 && c.__b > 0 ? c = t.__k[d] = Q(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : t.__k[d] = c, f = d + l, c.__ = t, c.__b = t.__b + 1, _ = null, (p = c.__i = ct(c, r, f, v)) != -1 && (v--, (_ = r[p]) && (_.__u |= 2)), _ == null || _.__v == null ? (p == -1 && (i > s ? l-- : i < s && l++), typeof c.type != "function" && (c.__u |= 4)) : p != f && (p == f - 1 ? l-- : p == f + 1 ? l++ : (p > f ? l-- : l++, c.__u |= 4))) : t.__k[d] = null;
  if (v) for (d = 0; d < s; d++) (_ = r[d]) != null && (2 & _.__u) == 0 && (_.__e == n && (n = L(_)), Ke(_, _));
  return n;
}
function Be(t, e, r) {
  var n, i;
  if (typeof t.type == "function") {
    for (n = t.__k, i = 0; n && i < n.length; i++) n[i] && (n[i].__ = t, e = Be(n[i], e, r));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = L(t)), e = r.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function ct(t, e, r, n) {
  var i, d, c, _ = t.key, f = t.type, p = e[r], s = p != null && (2 & p.__u) == 0;
  if (p === null && _ == null || s && _ == p.key && f == p.type) return r;
  if (n > (s ? 1 : 0)) {
    for (i = r - 1, d = r + 1; i >= 0 || d < e.length; ) if ((p = e[c = i >= 0 ? i-- : d++]) != null && (2 & p.__u) == 0 && _ == p.key && f == p.type) return c;
  }
  return -1;
}
function ke(t, e, r) {
  e[0] == "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || dt.test(e) ? r : r + "px";
}
function K(t, e, r, n, i) {
  var d, c;
  e: if (e == "style") if (typeof r == "string") t.style.cssText = r;
  else {
    if (typeof n == "string" && (t.style.cssText = n = ""), n) for (e in n) r && e in r || ke(t.style, e, "");
    if (r) for (e in r) n && r[e] == n[e] || ke(t.style, e, r[e]);
  }
  else if (e[0] == "o" && e[1] == "n") d = e != (e = e.replace(Me, "$1")), c = e.toLowerCase(), e = c in t || e == "onFocusOut" || e == "onFocusIn" ? c.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + d] = r, r ? n ? r[J] = n[J] : (r[J] = _e, t.addEventListener(e, d ? ce : se, d)) : t.removeEventListener(e, d ? ce : se, d);
  else {
    if (i == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
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
      if (e[Y] == null) e[Y] = _e++;
      else if (e[Y] < r[J]) return;
      return r(C.event ? C.event(e) : e);
    }
  };
}
function fe(t, e, r, n, i, d, c, _, f, p) {
  var s, v, l, m, $, N, I, T, w, z, u, y, A, M, F, V, b = e.type;
  if (e.constructor !== void 0) return null;
  128 & r.__u && (f = !!(32 & r.__u), d = [_ = e.__e = r.__e]), (s = C.__b) && s(e);
  e: if (typeof b == "function") {
    v = c.length;
    try {
      if (w = e.props, z = b.prototype && b.prototype.render, u = (s = b.contextType) && n[s.__c], y = s ? u ? u.props.value : s.__ : n, r.__c ? T = (l = e.__c = r.__c).__ = l.__E : (z ? e.__c = l = new b(w, y) : (e.__c = l = new X(w, y), l.constructor = b, l.render = ut), u && u.sub(l), l.state || (l.state = {}), l.__n = n, m = l.__d = !0, l.__h = [], l._sb = []), z && l.__s == null && (l.__s = l.state), z && b.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = U({}, l.__s)), U(l.__s, b.getDerivedStateFromProps(w, l.__s))), $ = l.props, N = l.state, l.__v = e, m) z && b.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), z && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (z && b.getDerivedStateFromProps == null && w !== $ && l.componentWillReceiveProps != null && l.componentWillReceiveProps(w, y), e.__v == r.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(w, l.__s, y) === !1) {
          e.__v != r.__v && (l.props = w, l.state = l.__s, l.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.some(function(S) {
            S && (S.__ = e);
          }), te.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && c.push(l), _ = L(r);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(w, l.__s, y), z && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate($, N, I);
        });
      }
      if (l.context = y, l.props = w, l.__P = t, l.__e = !1, A = C.__r, M = 0, z) l.state = l.__s, l.__d = !1, A && A(e), s = l.render(l.props, l.state, l.context), te.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, A && A(e), s = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++M < 25);
      l.state = l.__s, l.getChildContext != null && (n = U(U({}, n), l.getChildContext())), z && !m && l.getSnapshotBeforeUpdate != null && (I = l.getSnapshotBeforeUpdate($, N)), F = s != null && s.type === ie && s.key == null ? Ge(s.props.children) : s, _ = We(t, oe(F) ? F : [F], e, r, n, i, d, c, _, f, p), l.base = e.__e, e.__u &= -161, l.__h.length && c.push(l), T && (l.__E = l.__ = null);
    } catch (S) {
      if (c.length = v, e.__v = null, f || d != null) {
        if (S.then) {
          for (e.__u |= f ? 160 : 128; _ && _.nodeType == 8 && _.nextSibling; ) _ = _.nextSibling;
          d != null && (d[d.indexOf(_)] = null), e.__e = _;
        } else if (d != null) for (V = d.length; V--; ) he(d[V]);
      } else e.__e = r.__e;
      e.__k == null && (e.__k = r.__k || []), S.then || qe(e), C.__e(S, e, r);
    }
  } else d == null && e.__v == r.__v ? (e.__k = r.__k, e.__e = r.__e) : _ = e.__e = pt(r.__e, e, r, n, i, d, c, f, p);
  return (s = C.diffed) && s(e), 128 & e.__u ? void 0 : _;
}
function qe(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(qe));
}
function Je(t, e, r) {
  for (var n = 0; n < r.length; n++) me(r[n], r[++n], r[++n]);
  C.__c && C.__c(e, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(d) {
        d.call(i);
      });
    } catch (d) {
      C.__e(d, i.__v);
    }
  });
}
function Ge(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : oe(t) ? t.map(Ge) : t.constructor !== void 0 ? null : U({}, t);
}
function pt(t, e, r, n, i, d, c, _, f) {
  var p, s, v, l, m, $, N, I = r.props || ee, T = e.props, w = e.type;
  if (w == "svg" ? i = "http://www.w3.org/2000/svg" : w == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), d != null) {
    for (p = 0; p < d.length; p++) if ((m = d[p]) && "setAttribute" in m == !!w && (w ? m.localName == w : m.nodeType == 3)) {
      t = m, d[p] = null;
      break;
    }
  }
  if (t == null) {
    if (w == null) return document.createTextNode(T);
    t = document.createElementNS(i, w, T.is && T), _ && (C.__m && C.__m(e, d), _ = !1), d = null;
  }
  if (w == null) I === T || _ && t.data == T || (t.data = T);
  else {
    if (d = w == "textarea" && T.defaultValue != null ? null : d && ne.call(t.childNodes), !_ && d != null) for (I = {}, p = 0; p < t.attributes.length; p++) I[(m = t.attributes[p]).name] = m.value;
    for (p in I) m = I[p], p == "dangerouslySetInnerHTML" ? v = m : p == "children" || p in T || p == "value" && "defaultValue" in T || p == "checked" && "defaultChecked" in T || K(t, p, null, m, i);
    for (p in T) m = T[p], p == "children" ? l = m : p == "dangerouslySetInnerHTML" ? s = m : p == "value" ? $ = m : p == "checked" ? N = m : _ && typeof m != "function" || I[p] === m || K(t, p, m, I[p], i);
    if (s) _ || v && (s.__html == v.__html || s.__html == t.innerHTML) || (t.innerHTML = s.__html), e.__k = [];
    else if (v && (t.innerHTML = ""), We(e.type == "template" ? t.content : t, oe(l) ? l : [l], e, r, n, w == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, d, c, d ? d[0] : r.__k && L(r, 0), _, f), d != null) for (p = d.length; p--; ) he(d[p]);
    _ && w != "textarea" || (p = "value", w == "progress" && $ == null ? t.removeAttribute("value") : $ != null && ($ !== t[p] || w == "progress" && !$ || w == "option" && $ != I[p]) && K(t, p, $, I[p], i), p = "checked", N != null && N != t[p] && K(t, p, N, I[p], i));
  }
  return t;
}
function me(t, e, r) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (i) {
    C.__e(i, r);
  }
}
function Ke(t, e, r) {
  var n, i;
  if (C.unmount && C.unmount(t), (n = t.ref) && (n.current && n.current != t.__e || me(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (d) {
      C.__e(d, e);
    }
    n.base = n.__P = n.__n = null;
  }
  if (n = t.__k) for (i = 0; i < n.length; i++) n[i] && Ke(n[i], e, r || typeof t.type != "function");
  r || he(t.__e), t.__c = t.__ = t.__e = void 0;
}
function ut(t, e, r) {
  return this.constructor(t, r);
}
function $e(t, e, r) {
  var n, i, d, c;
  e == document && (e = document.documentElement), C.__ && C.__(t, e), i = (n = !1) ? null : e.__k, d = [], c = [], fe(e, t = e.__k = at(ie, null, [t]), i || ee, ee, e.namespaceURI, i ? null : e.firstChild ? ne.call(e.childNodes) : null, d, i ? i.__e : e.firstChild, n, c), Je(d, t, c), t.props.children = null;
}
ne = te.slice, C = { __e: function(t, e, r, n) {
  for (var i, d, c; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((d = i.constructor) && d.getDerivedStateFromError != null && (i.setState(d.getDerivedStateFromError(t)), c = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, n || {}), c = i.__d), c) return i.__E = i;
  } catch (_) {
    t = _;
  }
  throw t;
} }, Fe = 0, X.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = U({}, this.state), typeof t == "function" && (t = t(U({}, r), this.props)), t && U(r, t), t != null && this.__v && (e && this._sb.push(e), we(this));
}, X.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), we(this));
}, X.prototype.render = ie, R = [], Oe = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Le = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, re.__r = 0, ae = Math.random().toString(8), Y = "__d" + ae, J = "__a" + ae, Me = /(PointerCapture)$|Capture$/i, _e = 0, se = Se(!1), ce = Se(!0);
var _t = 0;
function o(t, e, r, n, i, d) {
  e || (e = {});
  var c, _, f = e;
  if ("ref" in f) for (_ in f = {}, e) _ == "ref" ? c = e[_] : f[_] = e[_];
  var p = { type: t, props: f, key: r, ref: c, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --_t, __i: -1, __u: 0, __source: i, __self: d };
  if (typeof t == "function" && (c = t.defaultProps)) for (_ in c) f[_] === void 0 && (f[_] = c[_]);
  return C.vnode && C.vnode(p), p;
}
var G, P, le, Te, pe = 0, Ye = [], j = C, Ce = j.__b, Ie = j.__r, Pe = j.diffed, je = j.__c, Ne = j.unmount, ze = j.__;
function ge(t, e) {
  j.__h && j.__h(P, t, pe || e), pe = 0;
  var r = P.__H || (P.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function D(t) {
  return pe = 1, ht(Xe, t);
}
function ht(t, e, r) {
  var n = ge(G++, 2);
  if (n.t = t, !n.__c && (n.__ = [Xe(void 0, e), function(_) {
    var f = n.__N ? n.__N[0] : n.__[0], p = n.t(f, _);
    f !== p && (n.__N = [p, n.__[1]], n.__c.setState({}));
  }], n.__c = P, !P.__f)) {
    var i = function(_, f, p) {
      if (!n.__c.__H) return !0;
      var s = !1, v = n.__c.props !== _;
      if (n.__c.__H.__.some(function(m) {
        if (m.__N) {
          s = !0;
          var $ = m.__[0];
          m.__ = m.__N, m.__N = void 0, $ !== m.__[0] && (v = !0);
        }
      }), d) {
        var l = d.call(this, _, f, p);
        return s ? l || v : l;
      }
      return !s || v;
    };
    P.__f = !0;
    var d = P.shouldComponentUpdate, c = P.componentWillUpdate;
    P.componentWillUpdate = function(_, f, p) {
      if (this.__e) {
        var s = d;
        d = void 0, i(_, f, p), d = s;
      }
      c && c.call(this, _, f, p);
    }, P.shouldComponentUpdate = i;
  }
  return n.__N || n.__;
}
function ft(t, e) {
  var r = ge(G++, 3);
  !j.__s && Qe(r.__H, e) && (r.__ = t, r.u = e, P.__H.__h.push(r));
}
function mt(t, e) {
  var r = ge(G++, 7);
  return Qe(r.__H, e) && (r.__ = t(), r.__H = e, r.__h = t), r.__;
}
function gt() {
  for (var t; t = Ye.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(Z), e.__h.some(ue), e.__h = [];
    } catch (r) {
      e.__h = [], j.__e(r, t.__v);
    }
  }
}
j.__b = function(t) {
  P = null, Ce && Ce(t);
}, j.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), ze && ze(t, e);
}, j.__r = function(t) {
  Ie && Ie(t), G = 0;
  var e = (P = t.__c).__H;
  e && (le === P ? (e.__h = [], P.__h = [], e.__.some(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (e.__h.some(Z), e.__h.some(ue), e.__h = [], G = 0)), le = P;
}, j.diffed = function(t) {
  Pe && Pe(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Ye.push(e) !== 1 && Te === j.requestAnimationFrame || ((Te = j.requestAnimationFrame) || vt)(gt)), e.__H.__.some(function(r) {
    r.u && (r.__H = r.u, r.u = void 0);
  })), le = P = null;
}, j.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.some(Z), r.__h = r.__h.filter(function(n) {
        return !n.__ || ue(n);
      });
    } catch (n) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], j.__e(n, r.__v);
    }
  }), je && je(t, e);
}, j.unmount = function(t) {
  Ne && Ne(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.some(function(n) {
    try {
      Z(n);
    } catch (i) {
      e = i;
    }
  }), r.__H = void 0, e && j.__e(e, r.__v));
};
var Ae = typeof requestAnimationFrame == "function";
function vt(t) {
  var e, r = function() {
    clearTimeout(n), Ae && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(r, 35);
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
  return !t || t.length !== e.length || e.some(function(r, n) {
    return r !== t[n];
  });
}
function Xe(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const bt = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function O(t, e) {
  return bt[t][e];
}
function Ze(t, e) {
  const r = t.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!r || r.startsWith("/") || /^[A-Za-z]:\//.test(r)) return null;
  const n = r.split("/").filter(Boolean), i = n.pop();
  if (!i || n.some((c) => c === "..")) return null;
  const d = new URLSearchParams({ filename: i, type: e });
  return n.length && d.set("subfolder", n.join("/")), `/view?${d.toString()}`;
}
function xt(t) {
  return Ze(t, "input");
}
function Ee(t) {
  return t.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function De({ asset: t, compact: e = !1 }) {
  const r = xt(t.path), n = `td-media-preview ${e ? "compact" : ""}`;
  return r ? t.kind === "image" ? /* @__PURE__ */ o("div", { class: n, children: /* @__PURE__ */ o("img", { src: r, alt: t.alias, loading: "lazy" }) }) : t.kind === "video" ? /* @__PURE__ */ o("div", { class: n, children: /* @__PURE__ */ o("video", { src: r, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ o("div", { class: n, children: /* @__PURE__ */ o("audio", { src: r, controls: !0, preload: "metadata" }) }) : t.path ? /* @__PURE__ */ o("div", { class: `${n} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ o("div", { class: `${n} empty`, children: "尚未选择素材 / No media selected" });
}
const He = /\{\{ref:([^{}]+)}}/g;
function et(t, e) {
  const r = [], n = /* @__PURE__ */ new Map();
  for (const u of t.assets)
    u.enabled && (!u.shotIds.length || u.shotIds.includes(e.id)) && !e.disabledAssetIds.includes(u.id) && n.set(u.alias, u);
  const i = [t.promptPrefix, e.prompt, t.promptSuffix].filter(Boolean).join(`
`), d = [...i.matchAll(He)].map((u) => u[1].trim()), c = [], _ = /* @__PURE__ */ new Set(), f = (u) => {
    _.has(u.id) || (_.add(u.id), c.push(u));
  };
  [...n.values()].filter((u) => u.fixed).sort((u, y) => u.fixedOrder - y.fixedOrder || u.alias.localeCompare(y.alias)).forEach(f);
  for (const u of d) {
    const y = u.endsWith(".audio") ? u.slice(0, -6) : u, A = n.get(y);
    if (!A) {
      r.push(`未找到或已禁用素材：${u}`);
      continue;
    }
    u.endsWith(".audio") && (A.kind !== "video" || !A.includeVideoAudio) && r.push(`视频伴音未启用：${u}`), f(A);
  }
  const p = c.filter((u) => u.kind === "image"), s = c.filter((u) => u.kind === "video"), v = s.filter((u) => u.includeVideoAudio), l = c.filter((u) => u.kind === "audio"), m = v.length + l.length, $ = p.length + s.length + l.length;
  p.length > 9 && r.push(`参考图 ${p.length}/9，超出 H3 上限`), s.length > 3 && r.push(`参考视频 ${s.length}/3，超出 H3 上限`), m > 3 && r.push(`有效音频 ${m}/3，超出 H3 总上限`), $ > 12 && r.push(`混合文件 ${$}/12，超出 H3 上限`), m && !p.length && !s.length && r.push("音频参考不能单独使用");
  const N = s.filter((u) => typeof u.durationSeconds == "number");
  for (const u of s) (u.durationSeconds == null || u.durationSeconds < 2 || u.durationSeconds > 15) && r.push(`视频 ${u.alias} 的时长必须为 2–15 秒`);
  N.reduce((u, y) => u + (y.durationSeconds ?? 0), 0) > 15 && r.push("参考视频总时长超过 15 秒");
  const I = [...v.map((u) => u.audioDurationSeconds ?? u.durationSeconds), ...l.map((u) => u.durationSeconds)];
  I.some((u) => u == null || u < 2 || u > 15) && r.push("每路有效音频时长必须为 2–15 秒"), I.reduce((u, y) => u + (y ?? 0), 0) > 15 && r.push("有效音频总时长超过 15 秒");
  const T = /* @__PURE__ */ new Map();
  p.forEach((u, y) => T.set(u.alias, `<Picture ${y + 1}>`)), s.forEach((u, y) => T.set(u.alias, `<Video ${y + 1}>`)), v.forEach((u, y) => T.set(`${u.alias}.audio`, `<Audio ${y + 1}>`)), l.forEach((u, y) => T.set(u.alias, `<Audio ${v.length + y + 1}>`));
  const w = i.replace(He, (u, y) => T.get(y.trim()) ?? u), z = [...T.entries()].map(([u, y]) => ({ label: y, alias: u, kind: y.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: w, errors: r, slots: z, mixedFiles: $, audioCount: m };
}
function yt(t) {
  var i, d, c, _, f, p;
  const e = [];
  (d = (i = t.project) == null ? void 0 : i.name) != null && d.trim() || e.push("Project name 不能为空"), (_ = (c = t.project) == null ? void 0 : c.runId) != null && _.trim() || e.push("Run ID 不能为空"), (!Array.isArray(t.shots) || !t.shots.some((s) => s.enabled)) && e.push("至少需要一个启用分镜");
  const r = /* @__PURE__ */ new Set();
  for (const s of t.shots ?? [])
    (!((f = s.id) != null && f.trim()) || r.has(s.id)) && e.push(`分镜 ID 为空或重复：${s.id || "(空)"}`), r.add(s.id), s.durationSeconds > 0 || e.push(`分镜 ${s.id} 的时长必须大于 0`);
  const n = /* @__PURE__ */ new Set();
  for (const s of t.assets ?? []) {
    const v = (p = s.alias) == null ? void 0 : p.toLocaleLowerCase();
    (!s.alias || /[\s{}]/.test(s.alias) || s.alias.endsWith(".audio") || n.has(v)) && e.push(`素材别名无效或重复：${s.alias || "(空)"}`), n.add(v), s.enabled && !s.path && e.push(`素材 ${s.alias} 尚未选择文件`);
  }
  for (const s of t.shots.filter((v) => v.enabled)) e.push(...et(t, s).errors.map((v) => `${s.title}: ${v}`));
  return [...new Set(e)];
}
const tt = (t) => `${t}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, rt = (t) => JSON.parse(JSON.stringify(t)), wt = { image: "图片", video: "视频", audio: "音频" };
function Ue(t) {
  var r;
  const e = rt(t);
  return e.schemaVersion = 4, (r = e.project.id) != null && r.trim() || (e.project.id = tt("project")), e.shots = e.shots.map((n) => ({
    ...n,
    latentRelay: n.latentRelay ?? !0,
    secondSampling: n.secondSampling ?? !0
  })), e;
}
function kt(t) {
  return t.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function St(t) {
  return { id: `shot_${String(t + 1).padStart(3, "0")}`, title: `Shot ${t + 1}`, prompt: "", negativePrompt: "", durationSeconds: 5, enabled: !0, latentRelay: !0, secondSampling: !0, seed: null, disabledAssetIds: [] };
}
function $t(t) {
  const e = tt(t);
  return { id: e, alias: e, kind: t, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: t === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function Tt(t, e, r) {
  const n = new FormData();
  n.append("projectName", t), n.append("kind", e), n.append("file", r);
  const i = await fetch("/theodore-director/v1/assets", { method: "POST", body: n }), d = await i.json();
  if (!i.ok || !d.path) throw new Error(d.error || `HTTP ${i.status}`);
  return d.path;
}
async function Ct(t, e, r) {
  const n = new URLSearchParams({
    projectName: t.project.name,
    runId: t.project.runId,
    shotId: e.id,
    activeIndex: String(r)
  }), i = await fetch(`/theodore-director/v1/generated-video?${n.toString()}`), d = await i.json();
  if (!i.ok) throw new Error(d.error || `HTTP ${i.status}`);
  return d;
}
async function It(t) {
  var n;
  if ((n = navigator.clipboard) != null && n.writeText)
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
function Pt({ initial: t, onSave: e, onClose: r, supportsSecondSampling: n }) {
  const [i, d] = D(() => Ue(t)), [c, _] = D("shots"), [f, p] = D(0), [s, v] = D(() => navigator.language.startsWith("zh") ? "zh" : "en"), [l, m] = D({}), [$, N] = D(!1), [I, T] = D(!0), [w, z] = D(0), [u, y] = D({ found: !1 }), [A, M] = D(!1), [F, V] = D(""), b = i.shots[Math.min(f, i.shots.length - 1)], S = mt(() => b ? et(i, b) : null, [i, b]), B = b != null && b.enabled ? i.shots.slice(0, f).filter((a) => a.enabled).length : -1, de = i.shots.length > 0 && i.shots.every((a) => a.secondSampling), ve = u.path ? Ze(u.path, "output") : null, k = (a) => d((h) => {
    const g = rt(h);
    return a(g), g;
  }), be = (a, h) => k((g) => {
    const x = a + h;
    x < 0 || x >= g.shots.length || ([g.shots[a], g.shots[x]] = [g.shots[x], g.shots[a]], p(x));
  }), nt = () => {
    const a = URL.createObjectURL(new Blob([JSON.stringify(i, null, 2)], { type: "application/json" })), h = document.createElement("a");
    h.href = a, h.download = `${kt(i.project.name)}.director.json`, h.click(), URL.revokeObjectURL(a);
  }, ot = () => {
    const a = yt(i);
    if (a.length) {
      window.alert(`计划未通过校验：

${a.join(`
`)}`);
      return;
    }
    e(i);
  };
  return ft(() => {
    let a = !1;
    return !(b != null && b.enabled) || B < 0 ? (y({ found: !1 }), M(!1), () => {
      a = !0;
    }) : (M(!0), Ct(i, b, B).then((h) => {
      a || y(h);
    }).catch((h) => {
      a || y({ found: !1, error: String(h) });
    }).finally(() => {
      a || M(!1);
    }), () => {
      a = !0;
    });
  }, [i.project.name, i.project.runId, b == null ? void 0 : b.id, b == null ? void 0 : b.enabled, B, w]), /* @__PURE__ */ o("div", { class: "td-shell", children: [
    /* @__PURE__ */ o("header", { children: [
      /* @__PURE__ */ o("h1", { children: O(s, "title") }),
      /* @__PURE__ */ o("div", { class: "td-actions", children: [
        /* @__PURE__ */ o("button", { onClick: nt, children: "导出 / Export" }),
        /* @__PURE__ */ o("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ o("input", { type: "file", accept: "application/json,.json", onChange: async (a) => {
            var g;
            const h = (g = a.currentTarget.files) == null ? void 0 : g[0];
            if (h)
              try {
                const x = JSON.parse(await h.text());
                if (!x.project || !Array.isArray(x.shots) || !Array.isArray(x.assets)) throw new Error("不是有效的 Theodore Director Plan");
                d(Ue(x)), p(0);
              } catch (x) {
                window.alert(String(x));
              }
          } })
        ] }),
        /* @__PURE__ */ o("button", { onClick: () => v(s === "zh" ? "en" : "zh"), children: s === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ o("button", { class: "primary", onClick: ot, children: O(s, "save") }),
        /* @__PURE__ */ o("button", { onClick: r, children: O(s, "close") })
      ] })
    ] }),
    /* @__PURE__ */ o("nav", { children: ["shots", "assets", "settings"].map((a) => /* @__PURE__ */ o("button", { class: c === a ? "active" : "", onClick: () => _(a), children: O(s, a) })) }),
    /* @__PURE__ */ o("main", { children: [
      c === "shots" && /* @__PURE__ */ o("div", { class: "td-shots", children: [
        /* @__PURE__ */ o("aside", { children: [
          n && /* @__PURE__ */ o("button", { class: `wide td-bulk-toggle ${de ? "active" : ""}`, onClick: () => k((a) => {
            const h = !a.shots.every((g) => g.secondSampling);
            a.shots.forEach((g) => {
              g.secondSampling = h;
            });
          }), children: s === "zh" ? `全部二次采样：${de ? "开" : "关"}` : `Second sampling for all: ${de ? "ON" : "OFF"}` }),
          i.shots.map((a, h) => /* @__PURE__ */ o("div", { class: `td-shot-card ${h === f ? "selected" : ""}`, onClick: () => p(h), children: [
            /* @__PURE__ */ o("strong", { children: [
              h + 1,
              ". ",
              a.title
            ] }),
            /* @__PURE__ */ o("span", { children: [
              a.durationSeconds,
              "s · ",
              a.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ o("div", { children: [
              /* @__PURE__ */ o("button", { onClick: (g) => {
                g.stopPropagation(), be(h, -1);
              }, children: "↑" }),
              /* @__PURE__ */ o("button", { onClick: (g) => {
                g.stopPropagation(), be(h, 1);
              }, children: "↓" })
            ] })
          ] })),
          /* @__PURE__ */ o("button", { class: "wide", onClick: () => k((a) => {
            a.shots.push(St(a.shots.length)), p(a.shots.length - 1);
          }), children: [
            "＋ ",
            O(s, "addShot")
          ] })
        ] }),
        b && /* @__PURE__ */ o("section", { class: "td-form", children: [
          /* @__PURE__ */ o("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ o("label", { children: [
              "ID",
              /* @__PURE__ */ o("input", { value: b.id, onInput: (a) => k((h) => {
                h.shots[f].id = a.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ o("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ o("input", { value: b.title, onInput: (a) => k((h) => {
                h.shots[f].title = a.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ o("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ o("input", { type: "number", min: "0.1", step: "0.1", value: b.durationSeconds, onInput: (a) => k((h) => {
                h.shots[f].durationSeconds = Number(a.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ o("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ o("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ o("input", { type: "checkbox", checked: b.enabled, onChange: (a) => k((h) => {
                  h.shots[f].enabled = a.currentTarget.checked;
                }) }),
                /* @__PURE__ */ o("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ o("label", { class: "td-shot-enabled", title: B === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ o("input", { type: "checkbox", checked: b.latentRelay, onChange: (a) => k((h) => {
                  h.shots[f].latentRelay = a.currentTarget.checked;
                }) }),
                /* @__PURE__ */ o("span", { children: [
                  "latent接力 / Relay",
                  B === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              n && /* @__PURE__ */ o("label", { class: "td-shot-enabled", title: "开启时执行 RTX 超分和第二次 H3 采样，关闭时直接使用第一采画面", children: [
                /* @__PURE__ */ o("input", { type: "checkbox", checked: b.secondSampling, onChange: (a) => k((h) => {
                  h.shots[f].secondSampling = a.currentTarget.checked;
                }) }),
                /* @__PURE__ */ o("span", { children: "二次采样 / 2nd pass" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ o("label", { children: [
            /* @__PURE__ */ o("span", { class: "td-field-label", children: [
              "提示词（使用 ",
              /* @__PURE__ */ o("code", { children: "{{ref:别名}}" }),
              "）"
            ] }),
            /* @__PURE__ */ o("textarea", { rows: 10, value: b.prompt, onInput: (a) => k((h) => {
              h.shots[f].prompt = a.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ o("label", { children: [
            /* @__PURE__ */ o("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ o("textarea", { rows: 3, value: b.negativePrompt, onInput: (a) => k((h) => {
              h.shots[f].negativePrompt = a.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ o("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ o("legend", { children: "本镜头素材 / Shot media" }),
            i.assets.map((a) => {
              const h = !b.disabledAssetIds.includes(a.id), g = Ee(a.path) || a.alias, x = `{{ref:${a.alias}}}`;
              return /* @__PURE__ */ o("div", { class: `td-shot-media-card ${h ? "" : "disabled"}`, children: [
                /* @__PURE__ */ o("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ o(De, { asset: a, compact: !0 }),
                  /* @__PURE__ */ o("span", { class: "td-shot-media-kind", children: s === "zh" ? wt[a.kind] : a.kind }),
                  /* @__PURE__ */ o("label", { class: "td-shot-media-toggle", title: h ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ o("input", { type: "checkbox", checked: h, onChange: (E) => k((q) => {
                    const H = q.shots[f].disabledAssetIds;
                    q.shots[f].disabledAssetIds = E.currentTarget.checked ? H.filter((W) => W !== a.id) : [.../* @__PURE__ */ new Set([...H, a.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ o("button", { class: `td-shot-media-name ${F === a.id ? "copied" : ""}`, title: `${g}
${s === "zh" ? "点击复制" : "Click to copy"} ${x}`, onClick: async () => {
                  try {
                    await It(x), V(a.id), window.setTimeout(() => V((E) => E === a.id ? "" : E), 1400);
                  } catch (E) {
                    window.alert(`${s === "zh" ? "复制失败" : "Copy failed"}: ${String(E)}`);
                  }
                }, children: [
                  /* @__PURE__ */ o("span", { children: g }),
                  F === a.id && /* @__PURE__ */ o("em", { children: s === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, a.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ o("aside", { class: "td-preview", children: [
          /* @__PURE__ */ o("details", { open: $, onToggle: (a) => N(a.currentTarget.open), children: [
            /* @__PURE__ */ o("summary", { children: [
              /* @__PURE__ */ o("strong", { children: O(s, "preview") }),
              /* @__PURE__ */ o("span", { class: "td-summary-counts", children: [
                "Picture ",
                (S == null ? void 0 : S.slots.filter((a) => a.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (S == null ? void 0 : S.slots.filter((a) => a.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (S == null ? void 0 : S.audioCount) ?? 0,
                "/3 · Files ",
                (S == null ? void 0 : S.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ o("div", { class: "td-preview-body", children: [
              S != null && S.errors.length ? /* @__PURE__ */ o("ul", { class: "errors", children: S.errors.map((a) => /* @__PURE__ */ o("li", { children: a })) }) : /* @__PURE__ */ o("p", { class: "ok", children: O(s, "noErrors") }),
              /* @__PURE__ */ o("ol", { children: S == null ? void 0 : S.slots.map((a) => /* @__PURE__ */ o("li", { children: [
                /* @__PURE__ */ o("code", { children: a.label }),
                " ← ",
                a.alias
              ] })) }),
              /* @__PURE__ */ o("pre", { children: S == null ? void 0 : S.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ o("details", { open: I, onToggle: (a) => T(a.currentTarget.open), children: [
            /* @__PURE__ */ o("summary", { children: [
              /* @__PURE__ */ o("strong", { children: s === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ o("span", { class: `td-result-state ${u.found ? "found" : ""}`, children: A ? s === "zh" ? "查询中" : "Checking" : u.found ? s === "zh" ? "已生成" : "Found" : s === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ o("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ o("div", { class: "td-result-actions", children: /* @__PURE__ */ o("button", { onClick: () => z((a) => a + 1), children: [
                "↻ ",
                s === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              A ? /* @__PURE__ */ o("div", { class: "td-result-empty", children: s === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : u.error ? /* @__PURE__ */ o("div", { class: "td-result-empty errors", children: s === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again." }) : u.found && ve ? /* @__PURE__ */ o("div", { class: "td-generated-video", children: [
                /* @__PURE__ */ o("video", { src: ve, controls: !0, preload: "metadata", playsInline: !0 }, u.path),
                /* @__PURE__ */ o("div", { class: "td-generated-meta", title: u.path, children: [
                  u.path,
                  u.bytes ? ` · ${(u.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                ] })
              ] }) : /* @__PURE__ */ o("div", { class: "td-result-empty", children: s === "zh" ? "未在预期路径找到本段视频" : "No video found at the expected path" })
            ] })
          ] })
        ] })
      ] }),
      c === "assets" && /* @__PURE__ */ o("div", { class: "td-assets", children: [
        /* @__PURE__ */ o("div", { class: "td-toolbar", children: ["image", "video", "audio"].map((a) => /* @__PURE__ */ o("button", { onClick: () => k((h) => h.assets.push($t(a))), children: [
          "＋ ",
          a
        ] })) }),
        i.assets.map((a, h) => /* @__PURE__ */ o("article", { children: /* @__PURE__ */ o("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ o("div", { children: [
            /* @__PURE__ */ o("div", { class: "td-grid", children: [
              /* @__PURE__ */ o("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ o("input", { value: a.alias, onInput: (g) => k((x) => {
                  x.assets[h].alias = g.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ o("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ o("select", { value: a.kind, onChange: (g) => k((x) => {
                  x.assets[h].kind = g.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ o("option", { children: "image" }),
                  /* @__PURE__ */ o("option", { children: "video" }),
                  /* @__PURE__ */ o("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ o("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ o("input", { value: a.path, onInput: (g) => k((x) => {
                  x.assets[h].path = g.currentTarget.value;
                }) }),
                /* @__PURE__ */ o("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ o("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ o("input", { type: "file", accept: a.kind === "image" ? "image/*" : a.kind === "video" ? "video/*" : "audio/*", onChange: async (g) => {
                      var q;
                      const x = g.currentTarget, E = (q = x.files) == null ? void 0 : q[0];
                      if (E) {
                        m((H) => ({ ...H, [a.id]: E.name }));
                        try {
                          const H = await Tt(i.project.name, a.kind, E);
                          k((W) => {
                            const xe = W.assets.find((it) => it.id === a.id);
                            xe && (xe.path = H);
                          });
                        } catch (H) {
                          window.alert(String(H));
                        } finally {
                          m((H) => {
                            const W = { ...H };
                            return delete W[a.id], W;
                          }), x.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ o("span", { class: "td-file-name", title: l[a.id] || a.path, children: l[a.id] ? `${s === "zh" ? "上传中" : "Uploading"}: ${l[a.id]}` : Ee(a.path) || (s === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ o("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ o("input", { type: "number", min: "0", step: "0.1", value: a.durationSeconds ?? "", onInput: (g) => k((x) => {
                  x.assets[h].durationSeconds = g.currentTarget.value ? Number(g.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ o("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ o("input", { type: "number", value: a.fixedOrder, onInput: (g) => k((x) => {
                  x.assets[h].fixedOrder = Number(g.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ o("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ o("input", { value: a.shotIds.join(", "), onInput: (g) => k((x) => {
                  x.assets[h].shotIds = g.currentTarget.value.split(",").map((E) => E.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ o("div", { class: "td-flags", children: [
              /* @__PURE__ */ o("label", { children: [
                /* @__PURE__ */ o("input", { type: "checkbox", checked: a.enabled, onChange: (g) => k((x) => {
                  x.assets[h].enabled = g.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ o("label", { children: [
                /* @__PURE__ */ o("input", { type: "checkbox", checked: a.fixed, onChange: (g) => k((x) => {
                  x.assets[h].fixed = g.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              a.kind === "video" && /* @__PURE__ */ o("label", { children: [
                /* @__PURE__ */ o("input", { type: "checkbox", checked: a.includeVideoAudio, onChange: (g) => k((x) => {
                  x.assets[h].includeVideoAudio = g.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ o("button", { class: "danger", onClick: () => k((g) => {
                g.assets.splice(h, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ o(De, { asset: a })
        ] }) }, a.id))
      ] }),
      c === "settings" && /* @__PURE__ */ o("section", { class: "td-form settings", children: [
        /* @__PURE__ */ o("label", { children: [
          "Project name",
          /* @__PURE__ */ o("input", { value: i.project.name, onInput: (a) => k((h) => {
            h.project.name = a.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ o("label", { children: [
          "Run ID",
          /* @__PURE__ */ o("input", { value: i.project.runId, onInput: (a) => k((h) => {
            h.project.runId = a.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ o("label", { children: [
          "FPS",
          /* @__PURE__ */ o("input", { type: "number", value: i.defaults.fps, onInput: (a) => k((h) => {
            h.defaults.fps = Number(a.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ o("label", { children: [
          "Base seed",
          /* @__PURE__ */ o("input", { type: "number", value: i.defaults.baseSeed, onInput: (a) => k((h) => {
            h.defaults.baseSeed = Number(a.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ o("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ o("textarea", { value: i.promptPrefix, onInput: (a) => k((h) => {
            h.promptPrefix = a.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ o("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ o("textarea", { value: i.promptSuffix, onInput: (a) => k((h) => {
            h.promptSuffix = a.currentTarget.value;
          }) })
        ] })
      ] })
    ] })
  ] });
}
function jt(t, e, r = !1) {
  const n = document.getElementById("theodore-director-modal");
  if (n) {
    n.focus();
    return;
  }
  const i = document.createElement("div");
  i.id = "theodore-director-modal", i.className = "td-modal", i.tabIndex = -1, document.body.append(i);
  const d = (_) => {
    _.key === "Escape" && c();
  }, c = () => {
    document.removeEventListener("keydown", d), $e(null, i), i.remove();
  };
  document.addEventListener("keydown", d), $e(/* @__PURE__ */ o(Pt, { initial: t, onSave: (_) => {
    e(_), c();
  }, onClose: c, supportsSecondSampling: r }), i), i.focus();
}
const Nt = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:1fr auto;gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-card div{grid-column:2;grid-row:1/3}.td-shot-card button{padding:3px 6px}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}", Re = "theodore-director-styles";
function zt() {
  if (document.getElementById(Re)) return;
  const t = document.createElement("style");
  t.id = Re, t.textContent = Nt, document.head.append(t);
}
zt();
const At = "/scripts/app.js";
import(
  /* @vite-ignore */
  At
).then(({ app: t }) => {
  t.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(e, r) {
      if (r.name !== "TheodoreDirector_Project") return;
      const n = e.prototype.onNodeCreated;
      e.prototype.onNodeCreated = function() {
        var d, c;
        n == null || n.apply(this);
        const i = (d = this.widgets) == null ? void 0 : d.find((_) => _.name === "plan_json");
        i && (i.type = "hidden", i.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          var _, f;
          try {
            const p = JSON.parse(String(i.value)), s = !!((f = (_ = t.graph) == null ? void 0 : _._nodes) != null && f.some((v) => v.type === "ImpactConditionalBranch" && v.title === "Theodore 二次采样选择"));
            jt(p, (v) => {
              var l, m;
              i.value = JSON.stringify(v, null, 2), this.setDirtyCanvas(!0, !0), (m = (l = t.graph) == null ? void 0 : l.setDirtyCanvas) == null || m.call(l, !0, !0);
            }, s);
          } catch (p) {
            window.alert(`Theodore Director: ${p instanceof Error ? p.message : String(p)}`);
          }
        }), this.size = [Math.max(((c = this.size) == null ? void 0 : c[0]) ?? 300, 360), 110]);
      };
    }
  });
});
