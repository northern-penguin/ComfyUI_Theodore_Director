var B, y, ke, I, _e, Se, we, G, F, j, Te, te, X, Y, W = {}, R = [], Ee = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, J = Array.isArray;
function P(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function ne(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Ue(t, e, n) {
  var r, l, i, d = {};
  for (i in e) i == "key" ? r = e[i] : i == "ref" ? l = e[i] : d[i] = e[i];
  if (arguments.length > 2 && (d.children = arguments.length > 3 ? B.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (i in t.defaultProps) d[i] === void 0 && (d[i] = t.defaultProps[i]);
  return O(t, d, r, l, null);
}
function O(t, e, n, r, l) {
  var i = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: l ?? ++ke, __i: -1, __u: 0 };
  return l == null && y.vnode != null && y.vnode(i), i;
}
function q(t) {
  return t.children;
}
function M(t, e) {
  this.props = t, this.context = e;
}
function A(t, e) {
  if (e == null) return t.__ ? A(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? A(t) : null;
}
function Fe(t) {
  if (t.__P && t.__d) {
    var e = t.__v, n = e.__e, r = [], l = [], i = P({}, e);
    i.__v = e.__v + 1, y.vnode && y.vnode(i), re(t.__P, i, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, r, n ?? A(e), !!(32 & e.__u), l), i.__v = e.__v, i.__.__k[i.__i] = i, xe(r, i, l), e.__e = e.__ = null, i.__e != n && $e(i);
  }
}
function $e(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), $e(t);
}
function le(t) {
  (!t.__d && (t.__d = !0) && I.push(t) && !z.__r++ || _e != y.debounceRendering) && ((_e = y.debounceRendering) || Se)(z);
}
function z() {
  try {
    for (var t, e = 1; I.length; ) I.length > e && I.sort(we), t = I.shift(), e = I.length, Fe(t);
  } finally {
    I.length = z.__r = 0;
  }
}
function Ce(t, e, n, r, l, i, d, u, v, a, m) {
  var g, o, h, b, k, s, p = r && r.__k || R, _ = e.length;
  for (v = Oe(n, e, p, v, _), g = 0; g < _; g++) (h = n.__k[g]) != null && (o = h.__i != -1 && p[h.__i] || W, h.__i = g, s = re(t, h, o, l, i, d, u, v, a, m), b = h.__e, h.ref && o.ref != h.ref && (o.ref && oe(o.ref, null, h), m.push(h.ref, h.__c || b, h)), k == null && b != null && (k = b), 4 & h.__u ? (v = Pe(h, v, t), o.__e && (o.__e = null)) : typeof h.type == "function" && s !== void 0 ? v = s : b && (v = b.nextSibling), h.__u &= -7);
  return n.__e = k, v;
}
function Oe(t, e, n, r, l) {
  var i, d, u, v, a, m = n.length, g = m, o = 0;
  for (t.__k = new Array(l), i = 0; i < l; i++) (d = e[i]) != null && typeof d != "boolean" && typeof d != "function" ? (typeof d == "string" || typeof d == "number" || typeof d == "bigint" || d.constructor == String ? d = t.__k[i] = O(null, d, null, null, null) : J(d) ? d = t.__k[i] = O(q, { children: d }, null, null, null) : d.constructor === void 0 && d.__b > 0 ? d = t.__k[i] = O(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : t.__k[i] = d, v = i + o, d.__ = t, d.__b = t.__b + 1, u = null, (a = d.__i = Me(d, n, v, g)) != -1 && (g--, (u = n[a]) && (u.__u |= 2)), u == null || u.__v == null ? (a == -1 && (l > m ? o-- : l < m && o++), typeof d.type != "function" && (d.__u |= 4)) : a != v && (a == v - 1 ? o-- : a == v + 1 ? o++ : (a > v ? o-- : o++, d.__u |= 4))) : t.__k[i] = null;
  if (g) for (i = 0; i < m; i++) (u = n[i]) != null && (2 & u.__u) == 0 && (u.__e == r && (r = A(u)), Ae(u, u));
  return r;
}
function Pe(t, e, n) {
  var r, l;
  if (typeof t.type == "function") {
    for (r = t.__k, l = 0; r && l < r.length; l++) r[l] && (r[l].__ = t, e = Pe(r[l], e, n));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = A(t)), e = n.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Me(t, e, n, r) {
  var l, i, d, u = t.key, v = t.type, a = e[n], m = a != null && (2 & a.__u) == 0;
  if (a === null && u == null || m && u == a.key && v == a.type) return n;
  if (r > (m ? 1 : 0)) {
    for (l = n - 1, i = n + 1; l >= 0 || i < e.length; ) if ((a = e[d = l >= 0 ? l-- : i++]) != null && (2 & a.__u) == 0 && u == a.key && v == a.type) return d;
  }
  return -1;
}
function se(t, e, n) {
  e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || Ee.test(e) ? n : n + "px";
}
function E(t, e, n, r, l) {
  var i, d;
  e: if (e == "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof r == "string" && (t.style.cssText = r = ""), r) for (e in r) n && e in n || se(t.style, e, "");
    if (n) for (e in n) r && n[e] == r[e] || se(t.style, e, n[e]);
  }
  else if (e[0] == "o" && e[1] == "n") i = e != (e = e.replace(Te, "$1")), d = e.toLowerCase(), e = d in t || e == "onFocusOut" || e == "onFocusIn" ? d.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? r ? n[j] = r[j] : (n[j] = te, t.addEventListener(e, i ? Y : X, i)) : t.removeEventListener(e, i ? Y : X, i);
  else {
    if (l == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && n == 1 ? "" : n));
  }
}
function ce(t) {
  return function(e) {
    if (this.l) {
      var n = this.l[e.type + t];
      if (e[F] == null) e[F] = te++;
      else if (e[F] < n[j]) return;
      return n(y.event ? y.event(e) : e);
    }
  };
}
function re(t, e, n, r, l, i, d, u, v, a) {
  var m, g, o, h, b, k, s, p, _, f, T, $, x, ie, H, K, C = e.type;
  if (e.constructor !== void 0) return null;
  128 & n.__u && (v = !!(32 & n.__u), i = [u = e.__e = n.__e]), (m = y.__b) && m(e);
  e: if (typeof C == "function") {
    g = d.length;
    try {
      if (_ = e.props, f = C.prototype && C.prototype.render, T = (m = C.contextType) && r[m.__c], $ = m ? T ? T.props.value : m.__ : r, n.__c ? p = (o = e.__c = n.__c).__ = o.__E : (f ? e.__c = o = new C(_, $) : (e.__c = o = new M(_, $), o.constructor = C, o.render = We), T && T.sub(o), o.state || (o.state = {}), o.__n = r, h = o.__d = !0, o.__h = [], o._sb = []), f && o.__s == null && (o.__s = o.state), f && C.getDerivedStateFromProps != null && (o.__s == o.state && (o.__s = P({}, o.__s)), P(o.__s, C.getDerivedStateFromProps(_, o.__s))), b = o.props, k = o.state, o.__v = e, h) f && C.getDerivedStateFromProps == null && o.componentWillMount != null && o.componentWillMount(), f && o.componentDidMount != null && o.__h.push(o.componentDidMount);
      else {
        if (f && C.getDerivedStateFromProps == null && _ !== b && o.componentWillReceiveProps != null && o.componentWillReceiveProps(_, $), e.__v == n.__v || !o.__e && o.shouldComponentUpdate != null && o.shouldComponentUpdate(_, o.__s, $) === !1) {
          e.__v != n.__v && (o.props = _, o.state = o.__s, o.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(D) {
            D && (D.__ = e);
          }), R.push.apply(o.__h, o._sb), o._sb = [], o.__h.length && d.push(o), u = A(n);
          break e;
        }
        o.componentWillUpdate != null && o.componentWillUpdate(_, o.__s, $), f && o.componentDidUpdate != null && o.__h.push(function() {
          o.componentDidUpdate(b, k, s);
        });
      }
      if (o.context = $, o.props = _, o.__P = t, o.__e = !1, x = y.__r, ie = 0, f) o.state = o.__s, o.__d = !1, x && x(e), m = o.render(o.props, o.state, o.context), R.push.apply(o.__h, o._sb), o._sb = [];
      else do
        o.__d = !1, x && x(e), m = o.render(o.props, o.state, o.context), o.state = o.__s;
      while (o.__d && ++ie < 25);
      o.state = o.__s, o.getChildContext != null && (r = P(P({}, r), o.getChildContext())), f && !h && o.getSnapshotBeforeUpdate != null && (s = o.getSnapshotBeforeUpdate(b, k)), H = m != null && m.type === q && m.key == null ? Ne(m.props.children) : m, u = Ce(t, J(H) ? H : [H], e, n, r, l, i, d, u, v, a), o.base = e.__e, e.__u &= -161, o.__h.length && d.push(o), p && (o.__E = o.__ = null);
    } catch (D) {
      if (d.length = g, e.__v = null, v || i != null) {
        if (D.then) {
          for (e.__u |= v ? 160 : 128; u && u.nodeType == 8 && u.nextSibling; ) u = u.nextSibling;
          i != null && (i[i.indexOf(u)] = null), e.__e = u;
        } else if (i != null) for (K = i.length; K--; ) ne(i[K]);
      } else e.__e = n.__e;
      e.__k == null && (e.__k = n.__k || []), D.then || Ie(e), y.__e(D, e, n);
    }
  } else i == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : u = e.__e = Le(n.__e, e, n, r, l, i, d, v, a);
  return (m = y.diffed) && m(e), 128 & e.__u ? void 0 : u;
}
function Ie(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(Ie));
}
function xe(t, e, n) {
  for (var r = 0; r < n.length; r++) oe(n[r], n[++r], n[++r]);
  y.__c && y.__c(e, t), t.some(function(l) {
    try {
      t = l.__h, l.__h = [], t.some(function(i) {
        i.call(l);
      });
    } catch (i) {
      y.__e(i, l.__v);
    }
  });
}
function Ne(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : J(t) ? t.map(Ne) : t.constructor !== void 0 ? null : P({}, t);
}
function Le(t, e, n, r, l, i, d, u, v) {
  var a, m, g, o, h, b, k, s = n.props || W, p = e.props, _ = e.type;
  if (_ == "svg" ? l = "http://www.w3.org/2000/svg" : _ == "math" ? l = "http://www.w3.org/1998/Math/MathML" : l || (l = "http://www.w3.org/1999/xhtml"), i != null) {
    for (a = 0; a < i.length; a++) if ((h = i[a]) && "setAttribute" in h == !!_ && (_ ? h.localName == _ : h.nodeType == 3)) {
      t = h, i[a] = null;
      break;
    }
  }
  if (t == null) {
    if (_ == null) return document.createTextNode(p);
    t = document.createElementNS(l, _, p.is && p), u && (y.__m && y.__m(e, i), u = !1), i = null;
  }
  if (_ == null) s === p || u && t.data == p || (t.data = p);
  else {
    if (i = _ == "textarea" && p.defaultValue != null ? null : i && B.call(t.childNodes), !u && i != null) for (s = {}, a = 0; a < t.attributes.length; a++) s[(h = t.attributes[a]).name] = h.value;
    for (a in s) h = s[a], a == "dangerouslySetInnerHTML" ? g = h : a == "children" || a in p || a == "value" && "defaultValue" in p || a == "checked" && "defaultChecked" in p || E(t, a, null, h, l);
    for (a in p) h = p[a], a == "children" ? o = h : a == "dangerouslySetInnerHTML" ? m = h : a == "value" ? b = h : a == "checked" ? k = h : u && typeof h != "function" || s[a] === h || E(t, a, h, s[a], l);
    if (m) u || g && (m.__html == g.__html || m.__html == t.innerHTML) || (t.innerHTML = m.__html), e.__k = [];
    else if (g && (t.innerHTML = ""), Ce(e.type == "template" ? t.content : t, J(o) ? o : [o], e, n, r, _ == "foreignObject" ? "http://www.w3.org/1999/xhtml" : l, i, d, i ? i[0] : n.__k && A(n, 0), u, v), i != null) for (a = i.length; a--; ) ne(i[a]);
    u && _ != "textarea" || (a = "value", _ == "progress" && b == null ? t.removeAttribute("value") : b != null && (b !== t[a] || _ == "progress" && !b || _ == "option" && b != s[a]) && E(t, a, b, s[a], l), a = "checked", k != null && k != t[a] && E(t, a, k, s[a], l));
  }
  return t;
}
function oe(t, e, n) {
  try {
    if (typeof t == "function") {
      var r = typeof t.__u == "function";
      r && t.__u(), r && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (l) {
    y.__e(l, n);
  }
}
function Ae(t, e, n) {
  var r, l;
  if (y.unmount && y.unmount(t), (r = t.ref) && (r.current && r.current != t.__e || oe(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      y.__e(i, e);
    }
    r.base = r.__P = r.__n = null;
  }
  if (r = t.__k) for (l = 0; l < r.length; l++) r[l] && Ae(r[l], e, n || typeof t.type != "function");
  n || ne(t.__e), t.__c = t.__ = t.__e = void 0;
}
function We(t, e, n) {
  return this.constructor(t, n);
}
function ae(t, e, n) {
  var r, l, i, d;
  e == document && (e = document.documentElement), y.__ && y.__(t, e), l = (r = !1) ? null : e.__k, i = [], d = [], re(e, t = e.__k = Ue(q, null, [t]), l || W, W, e.namespaceURI, l ? null : e.firstChild ? B.call(e.childNodes) : null, i, l ? l.__e : e.firstChild, r, d), xe(i, t, d), t.props.children = null;
}
B = R.slice, y = { __e: function(t, e, n, r) {
  for (var l, i, d; e = e.__; ) if ((l = e.__c) && !l.__) try {
    if ((i = l.constructor) && i.getDerivedStateFromError != null && (l.setState(i.getDerivedStateFromError(t)), d = l.__d), l.componentDidCatch != null && (l.componentDidCatch(t, r || {}), d = l.__d), d) return l.__E = l;
  } catch (u) {
    t = u;
  }
  throw t;
} }, ke = 0, M.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = P({}, this.state), typeof t == "function" && (t = t(P({}, n), this.props)), t && P(n, t), t != null && this.__v && (e && this._sb.push(e), le(this));
}, M.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), le(this));
}, M.prototype.render = q, I = [], Se = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, we = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, z.__r = 0, G = Math.random().toString(8), F = "__d" + G, j = "__a" + G, Te = /(PointerCapture)$|Capture$/i, te = 0, X = ce(!1), Y = ce(!0);
var Re = 0;
function c(t, e, n, r, l, i) {
  e || (e = {});
  var d, u, v = e;
  if ("ref" in v) for (u in v = {}, e) u == "ref" ? d = e[u] : v[u] = e[u];
  var a = { type: t, props: v, key: n, ref: d, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Re, __i: -1, __u: 0, __source: l, __self: i };
  if (typeof t == "function" && (d = t.defaultProps)) for (u in d) v[u] === void 0 && (v[u] = d[u]);
  return y.vnode && y.vnode(a), a;
}
var V, S, Q, ue, Z = 0, De = [], w = y, de = w.__b, he = w.__r, pe = w.diffed, fe = w.__c, ve = w.unmount, me = w.__;
function je(t, e) {
  w.__h && w.__h(S, t, Z || e), Z = 0;
  var n = S.__H || (S.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function U(t) {
  return Z = 1, ze(He, t);
}
function ze(t, e, n) {
  var r = je(V++, 2);
  if (r.t = t, !r.__c && (r.__ = [He(void 0, e), function(u) {
    var v = r.__N ? r.__N[0] : r.__[0], a = r.t(v, u);
    v !== a && (r.__N = [a, r.__[1]], r.__c.setState({}));
  }], r.__c = S, !S.__f)) {
    var l = function(u, v, a) {
      if (!r.__c.__H) return !0;
      var m = !1, g = r.__c.props !== u;
      if (r.__c.__H.__.some(function(h) {
        if (h.__N) {
          m = !0;
          var b = h.__[0];
          h.__ = h.__N, h.__N = void 0, b !== h.__[0] && (g = !0);
        }
      }), i) {
        var o = i.call(this, u, v, a);
        return m ? o || g : o;
      }
      return !m || g;
    };
    S.__f = !0;
    var i = S.shouldComponentUpdate, d = S.componentWillUpdate;
    S.componentWillUpdate = function(u, v, a) {
      if (this.__e) {
        var m = i;
        i = void 0, l(u, v, a), i = m;
      }
      d && d.call(this, u, v, a);
    }, S.shouldComponentUpdate = l;
  }
  return r.__N || r.__;
}
function Ve(t, e) {
  var n = je(V++, 7);
  return qe(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__;
}
function Be() {
  for (var t; t = De.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(L), e.__h.some(ee), e.__h = [];
    } catch (n) {
      e.__h = [], w.__e(n, t.__v);
    }
  }
}
w.__b = function(t) {
  S = null, de && de(t);
}, w.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), me && me(t, e);
}, w.__r = function(t) {
  he && he(t), V = 0;
  var e = (S = t.__c).__H;
  e && (Q === S ? (e.__h = [], S.__h = [], e.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (e.__h.some(L), e.__h.some(ee), e.__h = [], V = 0)), Q = S;
}, w.diffed = function(t) {
  pe && pe(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (De.push(e) !== 1 && ue === w.requestAnimationFrame || ((ue = w.requestAnimationFrame) || Je)(Be)), e.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), Q = S = null;
}, w.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.some(L), n.__h = n.__h.filter(function(r) {
        return !r.__ || ee(r);
      });
    } catch (r) {
      e.some(function(l) {
        l.__h && (l.__h = []);
      }), e = [], w.__e(r, n.__v);
    }
  }), fe && fe(t, e);
}, w.unmount = function(t) {
  ve && ve(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.some(function(r) {
    try {
      L(r);
    } catch (l) {
      e = l;
    }
  }), n.__H = void 0, e && w.__e(e, n.__v));
};
var ge = typeof requestAnimationFrame == "function";
function Je(t) {
  var e, n = function() {
    clearTimeout(r), ge && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 35);
  ge && (e = requestAnimationFrame(n));
}
function L(t) {
  var e = S, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), S = e;
}
function ee(t) {
  var e = S;
  t.__c = t.__(), S = e;
}
function qe(t, e) {
  return !t || t.length !== e.length || e.some(function(n, r) {
    return n !== t[r];
  });
}
function He(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const Ke = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function N(t, e) {
  return Ke[t][e];
}
const be = /\{\{ref:([^{}]+)}}/g;
function Ge(t, e) {
  const n = [], r = /* @__PURE__ */ new Map();
  for (const _ of t.assets)
    _.enabled && (!_.shotIds.length || _.shotIds.includes(e.id)) && !e.disabledAssetIds.includes(_.id) && r.set(_.alias, _);
  const l = [t.promptPrefix, e.prompt, t.promptSuffix].filter(Boolean).join(`
`), i = [...l.matchAll(be)].map((_) => _[1].trim()), d = [], u = /* @__PURE__ */ new Set(), v = (_) => {
    u.has(_.id) || (u.add(_.id), d.push(_));
  };
  [...r.values()].filter((_) => _.fixed).sort((_, f) => _.fixedOrder - f.fixedOrder || _.alias.localeCompare(f.alias)).forEach(v);
  for (const _ of i) {
    const f = _.endsWith(".audio") ? _.slice(0, -6) : _, T = r.get(f);
    if (!T) {
      n.push(`未找到或已禁用素材：${_}`);
      continue;
    }
    _.endsWith(".audio") && (T.kind !== "video" || !T.includeVideoAudio) && n.push(`视频伴音未启用：${_}`), v(T);
  }
  const a = d.filter((_) => _.kind === "image"), m = d.filter((_) => _.kind === "video"), g = m.filter((_) => _.includeVideoAudio), o = d.filter((_) => _.kind === "audio"), h = g.length + o.length, b = a.length + m.length + o.length;
  a.length > 9 && n.push(`参考图 ${a.length}/9，超出 H3 上限`), m.length > 3 && n.push(`参考视频 ${m.length}/3，超出 H3 上限`), h > 3 && n.push(`有效音频 ${h}/3，超出 H3 总上限`), b > 12 && n.push(`混合文件 ${b}/12，超出 H3 上限`), h && !a.length && !m.length && n.push("音频参考不能单独使用");
  const k = /* @__PURE__ */ new Map();
  a.forEach((_, f) => k.set(_.alias, `<Picture ${f + 1}>`)), m.forEach((_, f) => k.set(_.alias, `<Video ${f + 1}>`)), g.forEach((_, f) => k.set(`${_.alias}.audio`, `<Audio ${f + 1}>`)), o.forEach((_, f) => k.set(_.alias, `<Audio ${g.length + f + 1}>`));
  const s = l.replace(be, (_, f) => k.get(f.trim()) ?? _), p = [...k.entries()].map(([_, f]) => ({ label: f, alias: _, kind: f.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: s, errors: n, slots: p, mixedFiles: b, audioCount: h };
}
const Qe = (t) => `${t}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, ye = (t) => JSON.parse(JSON.stringify(t));
function Xe(t) {
  return { id: `shot_${String(t + 1).padStart(3, "0")}`, title: `Shot ${t + 1}`, prompt: "", negativePrompt: "", durationSeconds: 5, enabled: !0, seed: null, disabledAssetIds: [] };
}
function Ye(t) {
  const e = Qe(t);
  return { id: e, alias: e, kind: t, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: t === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function Ze(t, e, n) {
  const r = new FormData();
  r.append("projectId", t), r.append("kind", e), r.append("file", n);
  const l = await fetch("/theodore-director/v1/assets", { method: "POST", body: r }), i = await l.json();
  if (!l.ok || !i.path) throw new Error(i.error || `HTTP ${l.status}`);
  return i.path;
}
function et({ initial: t, onSave: e, onClose: n }) {
  const [r, l] = U(() => ye(t)), [i, d] = U("shots"), [u, v] = U(0), [a, m] = U(() => navigator.language.startsWith("zh") ? "zh" : "en"), g = r.shots[Math.min(u, r.shots.length - 1)], o = Ve(() => g ? Ge(r, g) : null, [r, g]), h = (s) => l((p) => {
    const _ = ye(p);
    return s(_), _;
  }), b = (s, p) => h((_) => {
    const f = s + p;
    f < 0 || f >= _.shots.length || ([_.shots[s], _.shots[f]] = [_.shots[f], _.shots[s]], v(f));
  }), k = () => {
    const s = URL.createObjectURL(new Blob([JSON.stringify(r, null, 2)], { type: "application/json" })), p = document.createElement("a");
    p.href = s, p.download = `${r.project.id || "theodore_project"}.director.json`, p.click(), URL.revokeObjectURL(s);
  };
  return /* @__PURE__ */ c("div", { class: "td-shell", children: [
    /* @__PURE__ */ c("header", { children: [
      /* @__PURE__ */ c("h1", { children: N(a, "title") }),
      /* @__PURE__ */ c("div", { class: "td-actions", children: [
        /* @__PURE__ */ c("button", { onClick: k, children: "导出 / Export" }),
        /* @__PURE__ */ c("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ c("input", { type: "file", accept: "application/json,.json", onChange: async (s) => {
            var _;
            const p = (_ = s.currentTarget.files) == null ? void 0 : _[0];
            if (p)
              try {
                l(JSON.parse(await p.text())), v(0);
              } catch (f) {
                window.alert(String(f));
              }
          } })
        ] }),
        /* @__PURE__ */ c("button", { onClick: () => m(a === "zh" ? "en" : "zh"), children: a === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ c("button", { class: "primary", onClick: () => e(r), children: N(a, "save") }),
        /* @__PURE__ */ c("button", { onClick: n, children: N(a, "close") })
      ] })
    ] }),
    /* @__PURE__ */ c("nav", { children: ["shots", "assets", "settings"].map((s) => /* @__PURE__ */ c("button", { class: i === s ? "active" : "", onClick: () => d(s), children: N(a, s) })) }),
    /* @__PURE__ */ c("main", { children: [
      i === "shots" && /* @__PURE__ */ c("div", { class: "td-shots", children: [
        /* @__PURE__ */ c("aside", { children: [
          r.shots.map((s, p) => /* @__PURE__ */ c("div", { class: `td-shot-card ${p === u ? "selected" : ""}`, onClick: () => v(p), children: [
            /* @__PURE__ */ c("strong", { children: [
              p + 1,
              ". ",
              s.title
            ] }),
            /* @__PURE__ */ c("span", { children: [
              s.durationSeconds,
              "s · ",
              s.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ c("div", { children: [
              /* @__PURE__ */ c("button", { onClick: (_) => {
                _.stopPropagation(), b(p, -1);
              }, children: "↑" }),
              /* @__PURE__ */ c("button", { onClick: (_) => {
                _.stopPropagation(), b(p, 1);
              }, children: "↓" })
            ] })
          ] })),
          /* @__PURE__ */ c("button", { class: "wide", onClick: () => h((s) => {
            s.shots.push(Xe(s.shots.length)), v(s.shots.length - 1);
          }), children: [
            "＋ ",
            N(a, "addShot")
          ] })
        ] }),
        g && /* @__PURE__ */ c("section", { class: "td-form", children: [
          /* @__PURE__ */ c("label", { children: [
            "ID",
            /* @__PURE__ */ c("input", { value: g.id, onInput: (s) => h((p) => {
              p.shots[u].id = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ c("label", { children: [
            "标题 / Title",
            /* @__PURE__ */ c("input", { value: g.title, onInput: (s) => h((p) => {
              p.shots[u].title = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ c("label", { children: [
            "时长 / Duration",
            /* @__PURE__ */ c("input", { type: "number", min: "0.1", step: "0.1", value: g.durationSeconds, onInput: (s) => h((p) => {
              p.shots[u].durationSeconds = Number(s.currentTarget.value);
            }) })
          ] }),
          /* @__PURE__ */ c("label", { class: "check", children: [
            /* @__PURE__ */ c("input", { type: "checkbox", checked: g.enabled, onChange: (s) => h((p) => {
              p.shots[u].enabled = s.currentTarget.checked;
            }) }),
            "启用 / Enabled"
          ] }),
          /* @__PURE__ */ c("label", { children: [
            "提示词（使用 ",
            /* @__PURE__ */ c("code", { children: "{{ref:别名}}" }),
            "）",
            /* @__PURE__ */ c("textarea", { rows: 10, value: g.prompt, onInput: (s) => h((p) => {
              p.shots[u].prompt = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ c("label", { children: [
            "负面提示词",
            /* @__PURE__ */ c("textarea", { rows: 3, value: g.negativePrompt, onInput: (s) => h((p) => {
              p.shots[u].negativePrompt = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ c("fieldset", { children: [
            /* @__PURE__ */ c("legend", { children: "本镜头素材 / Shot media" }),
            r.assets.map((s) => /* @__PURE__ */ c("label", { class: "check", children: [
              /* @__PURE__ */ c("input", { type: "checkbox", checked: !g.disabledAssetIds.includes(s.id), onChange: (p) => h((_) => {
                const f = _.shots[u].disabledAssetIds;
                _.shots[u].disabledAssetIds = p.currentTarget.checked ? f.filter((T) => T !== s.id) : [.../* @__PURE__ */ new Set([...f, s.id])];
              }) }),
              s.alias,
              " (",
              s.kind,
              ")"
            ] }))
          ] })
        ] }),
        /* @__PURE__ */ c("aside", { class: "td-preview", children: [
          /* @__PURE__ */ c("h2", { children: N(a, "preview") }),
          /* @__PURE__ */ c("div", { class: "td-counters", children: [
            "Picture ",
            (o == null ? void 0 : o.slots.filter((s) => s.kind === "picture").length) ?? 0,
            "/9 · Video ",
            (o == null ? void 0 : o.slots.filter((s) => s.kind === "video").length) ?? 0,
            "/3 · Audio ",
            (o == null ? void 0 : o.audioCount) ?? 0,
            "/3 · Files ",
            (o == null ? void 0 : o.mixedFiles) ?? 0,
            "/12"
          ] }),
          o != null && o.errors.length ? /* @__PURE__ */ c("ul", { class: "errors", children: o.errors.map((s) => /* @__PURE__ */ c("li", { children: s })) }) : /* @__PURE__ */ c("p", { class: "ok", children: N(a, "noErrors") }),
          /* @__PURE__ */ c("ol", { children: o == null ? void 0 : o.slots.map((s) => /* @__PURE__ */ c("li", { children: [
            /* @__PURE__ */ c("code", { children: s.label }),
            " ← ",
            s.alias
          ] })) }),
          /* @__PURE__ */ c("pre", { children: o == null ? void 0 : o.compiledPrompt })
        ] })
      ] }),
      i === "assets" && /* @__PURE__ */ c("div", { class: "td-assets", children: [
        /* @__PURE__ */ c("div", { class: "td-toolbar", children: ["image", "video", "audio"].map((s) => /* @__PURE__ */ c("button", { onClick: () => h((p) => p.assets.push(Ye(s))), children: [
          "＋ ",
          s
        ] })) }),
        r.assets.map((s, p) => /* @__PURE__ */ c("article", { children: [
          /* @__PURE__ */ c("div", { class: "td-grid", children: [
            /* @__PURE__ */ c("label", { children: [
              "别名 / Alias",
              /* @__PURE__ */ c("input", { value: s.alias, onInput: (_) => h((f) => {
                f.assets[p].alias = _.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ c("label", { children: [
              "类型 / Kind",
              /* @__PURE__ */ c("select", { value: s.kind, onChange: (_) => h((f) => {
                f.assets[p].kind = _.currentTarget.value;
              }), children: [
                /* @__PURE__ */ c("option", { children: "image" }),
                /* @__PURE__ */ c("option", { children: "video" }),
                /* @__PURE__ */ c("option", { children: "audio" })
              ] })
            ] }),
            /* @__PURE__ */ c("label", { children: [
              "输入目录相对路径 / Path",
              /* @__PURE__ */ c("input", { value: s.path, onInput: (_) => h((f) => {
                f.assets[p].path = _.currentTarget.value;
              }) }),
              /* @__PURE__ */ c("input", { type: "file", accept: s.kind === "image" ? "image/*" : s.kind === "video" ? "video/*" : "audio/*", onChange: async (_) => {
                var T;
                const f = (T = _.currentTarget.files) == null ? void 0 : T[0];
                if (f)
                  try {
                    const $ = await Ze(r.project.id, s.kind, f);
                    h((x) => {
                      x.assets[p].path = $;
                    });
                  } catch ($) {
                    window.alert(String($));
                  }
              } })
            ] }),
            /* @__PURE__ */ c("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ c("input", { type: "number", min: "0", step: "0.1", value: s.durationSeconds ?? "", onInput: (_) => h((f) => {
                f.assets[p].durationSeconds = _.currentTarget.value ? Number(_.currentTarget.value) : null;
              }) })
            ] }),
            /* @__PURE__ */ c("label", { children: [
              "固定顺序 / Fixed order",
              /* @__PURE__ */ c("input", { type: "number", value: s.fixedOrder, onInput: (_) => h((f) => {
                f.assets[p].fixedOrder = Number(_.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ c("label", { children: [
              "限定分镜 ID（逗号分隔）",
              /* @__PURE__ */ c("input", { value: s.shotIds.join(", "), onInput: (_) => h((f) => {
                f.assets[p].shotIds = _.currentTarget.value.split(",").map((T) => T.trim()).filter(Boolean);
              }) })
            ] })
          ] }),
          /* @__PURE__ */ c("div", { class: "td-flags", children: [
            /* @__PURE__ */ c("label", { children: [
              /* @__PURE__ */ c("input", { type: "checkbox", checked: s.enabled, onChange: (_) => h((f) => {
                f.assets[p].enabled = _.currentTarget.checked;
              }) }),
              "启用"
            ] }),
            /* @__PURE__ */ c("label", { children: [
              /* @__PURE__ */ c("input", { type: "checkbox", checked: s.fixed, onChange: (_) => h((f) => {
                f.assets[p].fixed = _.currentTarget.checked;
              }) }),
              "固定引用"
            ] }),
            s.kind === "video" && /* @__PURE__ */ c("label", { children: [
              /* @__PURE__ */ c("input", { type: "checkbox", checked: s.includeVideoAudio, onChange: (_) => h((f) => {
                f.assets[p].includeVideoAudio = _.currentTarget.checked;
              }) }),
              "启用视频伴音"
            ] }),
            /* @__PURE__ */ c("button", { class: "danger", onClick: () => h((_) => {
              _.assets.splice(p, 1);
            }), children: "删除" })
          ] })
        ] }))
      ] }),
      i === "settings" && /* @__PURE__ */ c("section", { class: "td-form settings", children: [
        /* @__PURE__ */ c("label", { children: [
          "Project ID",
          /* @__PURE__ */ c("input", { value: r.project.id, onInput: (s) => h((p) => {
            p.project.id = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ c("label", { children: [
          "Project name",
          /* @__PURE__ */ c("input", { value: r.project.name, onInput: (s) => h((p) => {
            p.project.name = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ c("label", { children: [
          "Run ID",
          /* @__PURE__ */ c("input", { value: r.project.runId, onInput: (s) => h((p) => {
            p.project.runId = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ c("label", { children: [
          "FPS",
          /* @__PURE__ */ c("input", { type: "number", value: r.defaults.fps, onInput: (s) => h((p) => {
            p.defaults.fps = Number(s.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ c("label", { children: [
          "Base seed",
          /* @__PURE__ */ c("input", { type: "number", value: r.defaults.baseSeed, onInput: (s) => h((p) => {
            p.defaults.baseSeed = Number(s.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ c("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ c("textarea", { value: r.promptPrefix, onInput: (s) => h((p) => {
            p.promptPrefix = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ c("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ c("textarea", { value: r.promptSuffix, onInput: (s) => h((p) => {
            p.promptSuffix = s.currentTarget.value;
          }) })
        ] })
      ] })
    ] })
  ] });
}
function tt(t, e) {
  const n = document.createElement("div");
  n.className = "td-modal", document.body.append(n);
  const r = () => {
    ae(null, n), n.remove();
  };
  ae(/* @__PURE__ */ c(et, { initial: t, onSave: (l) => {
    e(l), r();
  }, onClose: r }), n);
}
const nt = "/scripts/app.js";
import(
  /* @vite-ignore */
  nt
).then(({ app: t }) => {
  t.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(e, n) {
      if (n.name !== "TheodoreDirector_Project") return;
      const r = e.prototype.onNodeCreated;
      e.prototype.onNodeCreated = function() {
        var i, d;
        r == null || r.apply(this);
        const l = (i = this.widgets) == null ? void 0 : i.find((u) => u.name === "plan_json");
        l && (l.type = "hidden", l.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          try {
            const u = JSON.parse(String(l.value));
            tt(u, (v) => {
              var a, m;
              l.value = JSON.stringify(v, null, 2), this.setDirtyCanvas(!0, !0), (m = (a = t.graph) == null ? void 0 : a.setDirtyCanvas) == null || m.call(a, !0, !0);
            });
          } catch (u) {
            window.alert(`Theodore Director: ${u instanceof Error ? u.message : String(u)}`);
          }
        }), this.size = [Math.max(((d = this.size) == null ? void 0 : d[0]) ?? 300, 360), 110]);
      };
    }
  });
});
