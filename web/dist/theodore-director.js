var J, x, ke, P, se, we, Se, Q, O, E, $e, ne, X, Z, W = {}, R = [], Fe = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, q = Array.isArray;
function C(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function re(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Oe(t, e, n) {
  var r, a, i, u = {};
  for (i in e) i == "key" ? r = e[i] : i == "ref" ? a = e[i] : u[i] = e[i];
  if (arguments.length > 2 && (u.children = arguments.length > 3 ? J.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (i in t.defaultProps) u[i] === void 0 && (u[i] = t.defaultProps[i]);
  return L(t, u, r, a, null);
}
function L(t, e, n, r, a) {
  var i = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++ke, __i: -1, __u: 0 };
  return a == null && x.vnode != null && x.vnode(i), i;
}
function K(t) {
  return t.children;
}
function M(t, e) {
  this.props = t, this.context = e;
}
function D(t, e) {
  if (e == null) return t.__ ? D(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? D(t) : null;
}
function Le(t) {
  if (t.__P && t.__d) {
    var e = t.__v, n = e.__e, r = [], a = [], i = C({}, e);
    i.__v = e.__v + 1, x.vnode && x.vnode(i), oe(t.__P, i, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, r, n ?? D(e), !!(32 & e.__u), a), i.__v = e.__v, i.__.__k[i.__i] = i, Ae(r, i, a), e.__e = e.__ = null, i.__e != n && Te(i);
  }
}
function Te(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), Te(t);
}
function le(t) {
  (!t.__d && (t.__d = !0) && P.push(t) && !B.__r++ || se != x.debounceRendering) && ((se = x.debounceRendering) || we)(B);
}
function B() {
  try {
    for (var t, e = 1; P.length; ) P.length > e && P.sort(Se), t = P.shift(), e = P.length, Le(t);
  } finally {
    P.length = B.__r = 0;
  }
}
function Ie(t, e, n, r, a, i, u, p, f, d, g) {
  var v, o, h, y, $, k, s = r && r.__k || R, _ = e.length;
  for (f = Me(n, e, s, f, _), v = 0; v < _; v++) (h = n.__k[v]) != null && (o = h.__i != -1 && s[h.__i] || W, h.__i = v, k = oe(t, h, o, a, i, u, p, f, d, g), y = h.__e, h.ref && o.ref != h.ref && (o.ref && ie(o.ref, null, h), g.push(h.ref, h.__c || y, h)), $ == null && y != null && ($ = y), 4 & h.__u ? (f = Ce(h, f, t), o.__e && (o.__e = null)) : typeof h.type == "function" && k !== void 0 ? f = k : y && (f = y.nextSibling), h.__u &= -7);
  return n.__e = $, f;
}
function Me(t, e, n, r, a) {
  var i, u, p, f, d, g = n.length, v = g, o = 0;
  for (t.__k = new Array(a), i = 0; i < a; i++) (u = e[i]) != null && typeof u != "boolean" && typeof u != "function" ? (typeof u == "string" || typeof u == "number" || typeof u == "bigint" || u.constructor == String ? u = t.__k[i] = L(null, u, null, null, null) : q(u) ? u = t.__k[i] = L(K, { children: u }, null, null, null) : u.constructor === void 0 && u.__b > 0 ? u = t.__k[i] = L(u.type, u.props, u.key, u.ref ? u.ref : null, u.__v) : t.__k[i] = u, f = i + o, u.__ = t, u.__b = t.__b + 1, p = null, (d = u.__i = ze(u, n, f, v)) != -1 && (v--, (p = n[d]) && (p.__u |= 2)), p == null || p.__v == null ? (d == -1 && (a > g ? o-- : a < g && o++), typeof u.type != "function" && (u.__u |= 4)) : d != f && (d == f - 1 ? o-- : d == f + 1 ? o++ : (d > f ? o-- : o++, u.__u |= 4))) : t.__k[i] = null;
  if (v) for (i = 0; i < g; i++) (p = n[i]) != null && (2 & p.__u) == 0 && (p.__e == r && (r = D(p)), Ne(p, p));
  return r;
}
function Ce(t, e, n) {
  var r, a;
  if (typeof t.type == "function") {
    for (r = t.__k, a = 0; r && a < r.length; a++) r[a] && (r[a].__ = t, e = Ce(r[a], e, n));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = D(t)), e = n.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function ze(t, e, n, r) {
  var a, i, u, p = t.key, f = t.type, d = e[n], g = d != null && (2 & d.__u) == 0;
  if (d === null && p == null || g && p == d.key && f == d.type) return n;
  if (r > (g ? 1 : 0)) {
    for (a = n - 1, i = n + 1; a >= 0 || i < e.length; ) if ((d = e[u = a >= 0 ? a-- : i++]) != null && (2 & d.__u) == 0 && p == d.key && f == d.type) return u;
  }
  return -1;
}
function ae(t, e, n) {
  e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || Fe.test(e) ? n : n + "px";
}
function U(t, e, n, r, a) {
  var i, u;
  e: if (e == "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof r == "string" && (t.style.cssText = r = ""), r) for (e in r) n && e in n || ae(t.style, e, "");
    if (n) for (e in n) r && n[e] == r[e] || ae(t.style, e, n[e]);
  }
  else if (e[0] == "o" && e[1] == "n") i = e != (e = e.replace($e, "$1")), u = e.toLowerCase(), e = u in t || e == "onFocusOut" || e == "onFocusIn" ? u.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? r ? n[E] = r[E] : (n[E] = ne, t.addEventListener(e, i ? Z : X, i)) : t.removeEventListener(e, i ? Z : X, i);
  else {
    if (a == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && n == 1 ? "" : n));
  }
}
function de(t) {
  return function(e) {
    if (this.l) {
      var n = this.l[e.type + t];
      if (e[O] == null) e[O] = ne++;
      else if (e[O] < n[E]) return;
      return n(x.event ? x.event(e) : e);
    }
  };
}
function oe(t, e, n, r, a, i, u, p, f, d) {
  var g, v, o, h, y, $, k, s, _, m, l, b, T, j, H, G, I = e.type;
  if (e.constructor !== void 0) return null;
  128 & n.__u && (f = !!(32 & n.__u), i = [p = e.__e = n.__e]), (g = x.__b) && g(e);
  e: if (typeof I == "function") {
    v = u.length;
    try {
      if (_ = e.props, m = I.prototype && I.prototype.render, l = (g = I.contextType) && r[g.__c], b = g ? l ? l.props.value : g.__ : r, n.__c ? s = (o = e.__c = n.__c).__ = o.__E : (m ? e.__c = o = new I(_, b) : (e.__c = o = new M(_, b), o.constructor = I, o.render = Re), l && l.sub(o), o.state || (o.state = {}), o.__n = r, h = o.__d = !0, o.__h = [], o._sb = []), m && o.__s == null && (o.__s = o.state), m && I.getDerivedStateFromProps != null && (o.__s == o.state && (o.__s = C({}, o.__s)), C(o.__s, I.getDerivedStateFromProps(_, o.__s))), y = o.props, $ = o.state, o.__v = e, h) m && I.getDerivedStateFromProps == null && o.componentWillMount != null && o.componentWillMount(), m && o.componentDidMount != null && o.__h.push(o.componentDidMount);
      else {
        if (m && I.getDerivedStateFromProps == null && _ !== y && o.componentWillReceiveProps != null && o.componentWillReceiveProps(_, b), e.__v == n.__v || !o.__e && o.shouldComponentUpdate != null && o.shouldComponentUpdate(_, o.__s, b) === !1) {
          e.__v != n.__v && (o.props = _, o.state = o.__s, o.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(N) {
            N && (N.__ = e);
          }), R.push.apply(o.__h, o._sb), o._sb = [], o.__h.length && u.push(o), p = D(n);
          break e;
        }
        o.componentWillUpdate != null && o.componentWillUpdate(_, o.__s, b), m && o.componentDidUpdate != null && o.__h.push(function() {
          o.componentDidUpdate(y, $, k);
        });
      }
      if (o.context = b, o.props = _, o.__P = t, o.__e = !1, T = x.__r, j = 0, m) o.state = o.__s, o.__d = !1, T && T(e), g = o.render(o.props, o.state, o.context), R.push.apply(o.__h, o._sb), o._sb = [];
      else do
        o.__d = !1, T && T(e), g = o.render(o.props, o.state, o.context), o.state = o.__s;
      while (o.__d && ++j < 25);
      o.state = o.__s, o.getChildContext != null && (r = C(C({}, r), o.getChildContext())), m && !h && o.getSnapshotBeforeUpdate != null && (k = o.getSnapshotBeforeUpdate(y, $)), H = g != null && g.type === K && g.key == null ? De(g.props.children) : g, p = Ie(t, q(H) ? H : [H], e, n, r, a, i, u, p, f, d), o.base = e.__e, e.__u &= -161, o.__h.length && u.push(o), s && (o.__E = o.__ = null);
    } catch (N) {
      if (u.length = v, e.__v = null, f || i != null) {
        if (N.then) {
          for (e.__u |= f ? 160 : 128; p && p.nodeType == 8 && p.nextSibling; ) p = p.nextSibling;
          i != null && (i[i.indexOf(p)] = null), e.__e = p;
        } else if (i != null) for (G = i.length; G--; ) re(i[G]);
      } else e.__e = n.__e;
      e.__k == null && (e.__k = n.__k || []), N.then || Pe(e), x.__e(N, e, n);
    }
  } else i == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : p = e.__e = We(n.__e, e, n, r, a, i, u, f, d);
  return (g = x.diffed) && g(e), 128 & e.__u ? void 0 : p;
}
function Pe(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(Pe));
}
function Ae(t, e, n) {
  for (var r = 0; r < n.length; r++) ie(n[r], n[++r], n[++r]);
  x.__c && x.__c(e, t), t.some(function(a) {
    try {
      t = a.__h, a.__h = [], t.some(function(i) {
        i.call(a);
      });
    } catch (i) {
      x.__e(i, a.__v);
    }
  });
}
function De(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : q(t) ? t.map(De) : t.constructor !== void 0 ? null : C({}, t);
}
function We(t, e, n, r, a, i, u, p, f) {
  var d, g, v, o, h, y, $, k = n.props || W, s = e.props, _ = e.type;
  if (_ == "svg" ? a = "http://www.w3.org/2000/svg" : _ == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), i != null) {
    for (d = 0; d < i.length; d++) if ((h = i[d]) && "setAttribute" in h == !!_ && (_ ? h.localName == _ : h.nodeType == 3)) {
      t = h, i[d] = null;
      break;
    }
  }
  if (t == null) {
    if (_ == null) return document.createTextNode(s);
    t = document.createElementNS(a, _, s.is && s), p && (x.__m && x.__m(e, i), p = !1), i = null;
  }
  if (_ == null) k === s || p && t.data == s || (t.data = s);
  else {
    if (i = _ == "textarea" && s.defaultValue != null ? null : i && J.call(t.childNodes), !p && i != null) for (k = {}, d = 0; d < t.attributes.length; d++) k[(h = t.attributes[d]).name] = h.value;
    for (d in k) h = k[d], d == "dangerouslySetInnerHTML" ? v = h : d == "children" || d in s || d == "value" && "defaultValue" in s || d == "checked" && "defaultChecked" in s || U(t, d, null, h, a);
    for (d in s) h = s[d], d == "children" ? o = h : d == "dangerouslySetInnerHTML" ? g = h : d == "value" ? y = h : d == "checked" ? $ = h : p && typeof h != "function" || k[d] === h || U(t, d, h, k[d], a);
    if (g) p || v && (g.__html == v.__html || g.__html == t.innerHTML) || (t.innerHTML = g.__html), e.__k = [];
    else if (v && (t.innerHTML = ""), Ie(e.type == "template" ? t.content : t, q(o) ? o : [o], e, n, r, _ == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, i, u, i ? i[0] : n.__k && D(n, 0), p, f), i != null) for (d = i.length; d--; ) re(i[d]);
    p && _ != "textarea" || (d = "value", _ == "progress" && y == null ? t.removeAttribute("value") : y != null && (y !== t[d] || _ == "progress" && !y || _ == "option" && y != k[d]) && U(t, d, y, k[d], a), d = "checked", $ != null && $ != t[d] && U(t, d, $, k[d], a));
  }
  return t;
}
function ie(t, e, n) {
  try {
    if (typeof t == "function") {
      var r = typeof t.__u == "function";
      r && t.__u(), r && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (a) {
    x.__e(a, n);
  }
}
function Ne(t, e, n) {
  var r, a;
  if (x.unmount && x.unmount(t), (r = t.ref) && (r.current && r.current != t.__e || ie(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      x.__e(i, e);
    }
    r.base = r.__P = r.__n = null;
  }
  if (r = t.__k) for (a = 0; a < r.length; a++) r[a] && Ne(r[a], e, n || typeof t.type != "function");
  n || re(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Re(t, e, n) {
  return this.constructor(t, n);
}
function ce(t, e, n) {
  var r, a, i, u;
  e == document && (e = document.documentElement), x.__ && x.__(t, e), a = (r = !1) ? null : e.__k, i = [], u = [], oe(e, t = e.__k = Oe(K, null, [t]), a || W, W, e.namespaceURI, a ? null : e.firstChild ? J.call(e.childNodes) : null, i, a ? a.__e : e.firstChild, r, u), Ae(i, t, u), t.props.children = null;
}
J = R.slice, x = { __e: function(t, e, n, r) {
  for (var a, i, u; e = e.__; ) if ((a = e.__c) && !a.__) try {
    if ((i = a.constructor) && i.getDerivedStateFromError != null && (a.setState(i.getDerivedStateFromError(t)), u = a.__d), a.componentDidCatch != null && (a.componentDidCatch(t, r || {}), u = a.__d), u) return a.__E = a;
  } catch (p) {
    t = p;
  }
  throw t;
} }, ke = 0, M.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = C({}, this.state), typeof t == "function" && (t = t(C({}, n), this.props)), t && C(n, t), t != null && this.__v && (e && this._sb.push(e), le(this));
}, M.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), le(this));
}, M.prototype.render = K, P = [], we = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Se = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, B.__r = 0, Q = Math.random().toString(8), O = "__d" + Q, E = "__a" + Q, $e = /(PointerCapture)$|Capture$/i, ne = 0, X = de(!1), Z = de(!0);
var Be = 0;
function c(t, e, n, r, a, i) {
  e || (e = {});
  var u, p, f = e;
  if ("ref" in f) for (p in f = {}, e) p == "ref" ? u = e[p] : f[p] = e[p];
  var d = { type: t, props: f, key: n, ref: u, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Be, __i: -1, __u: 0, __source: a, __self: i };
  if (typeof t == "function" && (u = t.defaultProps)) for (p in u) f[p] === void 0 && (f[p] = u[p]);
  return x.vnode && x.vnode(d), d;
}
var V, w, Y, _e, ee = 0, Ee = [], S = x, ue = S.__b, pe = S.__r, he = S.diffed, fe = S.__c, me = S.unmount, ge = S.__;
function je(t, e) {
  S.__h && S.__h(w, t, ee || e), ee = 0;
  var n = w.__H || (w.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function F(t) {
  return ee = 1, Ve(He, t);
}
function Ve(t, e, n) {
  var r = je(V++, 2);
  if (r.t = t, !r.__c && (r.__ = [He(void 0, e), function(p) {
    var f = r.__N ? r.__N[0] : r.__[0], d = r.t(f, p);
    f !== d && (r.__N = [d, r.__[1]], r.__c.setState({}));
  }], r.__c = w, !w.__f)) {
    var a = function(p, f, d) {
      if (!r.__c.__H) return !0;
      var g = !1, v = r.__c.props !== p;
      if (r.__c.__H.__.some(function(h) {
        if (h.__N) {
          g = !0;
          var y = h.__[0];
          h.__ = h.__N, h.__N = void 0, y !== h.__[0] && (v = !0);
        }
      }), i) {
        var o = i.call(this, p, f, d);
        return g ? o || v : o;
      }
      return !g || v;
    };
    w.__f = !0;
    var i = w.shouldComponentUpdate, u = w.componentWillUpdate;
    w.componentWillUpdate = function(p, f, d) {
      if (this.__e) {
        var g = i;
        i = void 0, a(p, f, d), i = g;
      }
      u && u.call(this, p, f, d);
    }, w.shouldComponentUpdate = a;
  }
  return r.__N || r.__;
}
function Je(t, e) {
  var n = je(V++, 7);
  return Ge(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__;
}
function qe() {
  for (var t; t = Ee.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(z), e.__h.some(te), e.__h = [];
    } catch (n) {
      e.__h = [], S.__e(n, t.__v);
    }
  }
}
S.__b = function(t) {
  w = null, ue && ue(t);
}, S.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), ge && ge(t, e);
}, S.__r = function(t) {
  pe && pe(t), V = 0;
  var e = (w = t.__c).__H;
  e && (Y === w ? (e.__h = [], w.__h = [], e.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (e.__h.some(z), e.__h.some(te), e.__h = [], V = 0)), Y = w;
}, S.diffed = function(t) {
  he && he(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Ee.push(e) !== 1 && _e === S.requestAnimationFrame || ((_e = S.requestAnimationFrame) || Ke)(qe)), e.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), Y = w = null;
}, S.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.some(z), n.__h = n.__h.filter(function(r) {
        return !r.__ || te(r);
      });
    } catch (r) {
      e.some(function(a) {
        a.__h && (a.__h = []);
      }), e = [], S.__e(r, n.__v);
    }
  }), fe && fe(t, e);
}, S.unmount = function(t) {
  me && me(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.some(function(r) {
    try {
      z(r);
    } catch (a) {
      e = a;
    }
  }), n.__H = void 0, e && S.__e(e, n.__v));
};
var ve = typeof requestAnimationFrame == "function";
function Ke(t) {
  var e, n = function() {
    clearTimeout(r), ve && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 35);
  ve && (e = requestAnimationFrame(n));
}
function z(t) {
  var e = w, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), w = e;
}
function te(t) {
  var e = w;
  t.__c = t.__(), w = e;
}
function Ge(t, e) {
  return !t || t.length !== e.length || e.some(function(n, r) {
    return n !== t[r];
  });
}
function He(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const Qe = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function A(t, e) {
  return Qe[t][e];
}
const be = /\{\{ref:([^{}]+)}}/g;
function Ue(t, e) {
  const n = [], r = /* @__PURE__ */ new Map();
  for (const l of t.assets)
    l.enabled && (!l.shotIds.length || l.shotIds.includes(e.id)) && !e.disabledAssetIds.includes(l.id) && r.set(l.alias, l);
  const a = [t.promptPrefix, e.prompt, t.promptSuffix].filter(Boolean).join(`
`), i = [...a.matchAll(be)].map((l) => l[1].trim()), u = [], p = /* @__PURE__ */ new Set(), f = (l) => {
    p.has(l.id) || (p.add(l.id), u.push(l));
  };
  [...r.values()].filter((l) => l.fixed).sort((l, b) => l.fixedOrder - b.fixedOrder || l.alias.localeCompare(b.alias)).forEach(f);
  for (const l of i) {
    const b = l.endsWith(".audio") ? l.slice(0, -6) : l, T = r.get(b);
    if (!T) {
      n.push(`未找到或已禁用素材：${l}`);
      continue;
    }
    l.endsWith(".audio") && (T.kind !== "video" || !T.includeVideoAudio) && n.push(`视频伴音未启用：${l}`), f(T);
  }
  const d = u.filter((l) => l.kind === "image"), g = u.filter((l) => l.kind === "video"), v = g.filter((l) => l.includeVideoAudio), o = u.filter((l) => l.kind === "audio"), h = v.length + o.length, y = d.length + g.length + o.length;
  d.length > 9 && n.push(`参考图 ${d.length}/9，超出 H3 上限`), g.length > 3 && n.push(`参考视频 ${g.length}/3，超出 H3 上限`), h > 3 && n.push(`有效音频 ${h}/3，超出 H3 总上限`), y > 12 && n.push(`混合文件 ${y}/12，超出 H3 上限`), h && !d.length && !g.length && n.push("音频参考不能单独使用");
  const $ = g.filter((l) => typeof l.durationSeconds == "number");
  for (const l of g) (l.durationSeconds == null || l.durationSeconds < 2 || l.durationSeconds > 15) && n.push(`视频 ${l.alias} 的时长必须为 2–15 秒`);
  $.reduce((l, b) => l + (b.durationSeconds ?? 0), 0) > 15 && n.push("参考视频总时长超过 15 秒");
  const k = [...v.map((l) => l.audioDurationSeconds ?? l.durationSeconds), ...o.map((l) => l.durationSeconds)];
  k.some((l) => l == null || l < 2 || l > 15) && n.push("每路有效音频时长必须为 2–15 秒"), k.reduce((l, b) => l + (b ?? 0), 0) > 15 && n.push("有效音频总时长超过 15 秒");
  const s = /* @__PURE__ */ new Map();
  d.forEach((l, b) => s.set(l.alias, `<Picture ${b + 1}>`)), g.forEach((l, b) => s.set(l.alias, `<Video ${b + 1}>`)), v.forEach((l, b) => s.set(`${l.alias}.audio`, `<Audio ${b + 1}>`)), o.forEach((l, b) => s.set(l.alias, `<Audio ${v.length + b + 1}>`));
  const _ = a.replace(be, (l, b) => s.get(b.trim()) ?? l), m = [...s.entries()].map(([l, b]) => ({ label: b, alias: l, kind: b.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: _, errors: n, slots: m, mixedFiles: y, audioCount: h };
}
function Ye(t) {
  var a, i, u, p;
  const e = [];
  (i = (a = t.project) == null ? void 0 : a.id) != null && i.trim() || e.push("Project ID 不能为空"), (!Array.isArray(t.shots) || !t.shots.some((f) => f.enabled)) && e.push("至少需要一个启用分镜");
  const n = /* @__PURE__ */ new Set();
  for (const f of t.shots ?? [])
    (!((u = f.id) != null && u.trim()) || n.has(f.id)) && e.push(`分镜 ID 为空或重复：${f.id || "(空)"}`), n.add(f.id), f.durationSeconds > 0 || e.push(`分镜 ${f.id} 的时长必须大于 0`);
  const r = /* @__PURE__ */ new Set();
  for (const f of t.assets ?? []) {
    const d = (p = f.alias) == null ? void 0 : p.toLocaleLowerCase();
    (!f.alias || /[\s{}]/.test(f.alias) || f.alias.endsWith(".audio") || r.has(d)) && e.push(`素材别名无效或重复：${f.alias || "(空)"}`), r.add(d), f.enabled && !f.path && e.push(`素材 ${f.alias} 尚未选择文件`);
  }
  for (const f of t.shots.filter((d) => d.enabled)) e.push(...Ue(t, f).errors.map((d) => `${f.title}: ${d}`));
  return [...new Set(e)];
}
const Xe = (t) => `${t}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, ye = (t) => JSON.parse(JSON.stringify(t));
function Ze(t) {
  return { id: `shot_${String(t + 1).padStart(3, "0")}`, title: `Shot ${t + 1}`, prompt: "", negativePrompt: "", durationSeconds: 5, enabled: !0, seed: null, disabledAssetIds: [] };
}
function et(t) {
  const e = Xe(t);
  return { id: e, alias: e, kind: t, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: t === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function tt(t, e, n) {
  const r = new FormData();
  r.append("projectId", t), r.append("kind", e), r.append("file", n);
  const a = await fetch("/theodore-director/v1/assets", { method: "POST", body: r }), i = await a.json();
  if (!a.ok || !i.path) throw new Error(i.error || `HTTP ${a.status}`);
  return i.path;
}
function nt({ initial: t, onSave: e, onClose: n }) {
  const [r, a] = F(() => ye(t)), [i, u] = F("shots"), [p, f] = F(0), [d, g] = F(() => navigator.language.startsWith("zh") ? "zh" : "en"), v = r.shots[Math.min(p, r.shots.length - 1)], o = Je(() => v ? Ue(r, v) : null, [r, v]), h = (s) => a((_) => {
    const m = ye(_);
    return s(m), m;
  }), y = (s, _) => h((m) => {
    const l = s + _;
    l < 0 || l >= m.shots.length || ([m.shots[s], m.shots[l]] = [m.shots[l], m.shots[s]], f(l));
  }), $ = () => {
    const s = URL.createObjectURL(new Blob([JSON.stringify(r, null, 2)], { type: "application/json" })), _ = document.createElement("a");
    _.href = s, _.download = `${r.project.id || "theodore_project"}.director.json`, _.click(), URL.revokeObjectURL(s);
  }, k = () => {
    const s = Ye(r);
    if (s.length) {
      window.alert(`计划未通过校验：

${s.join(`
`)}`);
      return;
    }
    e(r);
  };
  return /* @__PURE__ */ c("div", { class: "td-shell", children: [
    /* @__PURE__ */ c("header", { children: [
      /* @__PURE__ */ c("h1", { children: A(d, "title") }),
      /* @__PURE__ */ c("div", { class: "td-actions", children: [
        /* @__PURE__ */ c("button", { onClick: $, children: "导出 / Export" }),
        /* @__PURE__ */ c("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ c("input", { type: "file", accept: "application/json,.json", onChange: async (s) => {
            var m;
            const _ = (m = s.currentTarget.files) == null ? void 0 : m[0];
            if (_)
              try {
                const l = JSON.parse(await _.text());
                if (!l.project || !Array.isArray(l.shots) || !Array.isArray(l.assets)) throw new Error("不是有效的 Theodore Director Plan");
                a(l), f(0);
              } catch (l) {
                window.alert(String(l));
              }
          } })
        ] }),
        /* @__PURE__ */ c("button", { onClick: () => g(d === "zh" ? "en" : "zh"), children: d === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ c("button", { class: "primary", onClick: k, children: A(d, "save") }),
        /* @__PURE__ */ c("button", { onClick: n, children: A(d, "close") })
      ] })
    ] }),
    /* @__PURE__ */ c("nav", { children: ["shots", "assets", "settings"].map((s) => /* @__PURE__ */ c("button", { class: i === s ? "active" : "", onClick: () => u(s), children: A(d, s) })) }),
    /* @__PURE__ */ c("main", { children: [
      i === "shots" && /* @__PURE__ */ c("div", { class: "td-shots", children: [
        /* @__PURE__ */ c("aside", { children: [
          r.shots.map((s, _) => /* @__PURE__ */ c("div", { class: `td-shot-card ${_ === p ? "selected" : ""}`, onClick: () => f(_), children: [
            /* @__PURE__ */ c("strong", { children: [
              _ + 1,
              ". ",
              s.title
            ] }),
            /* @__PURE__ */ c("span", { children: [
              s.durationSeconds,
              "s · ",
              s.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ c("div", { children: [
              /* @__PURE__ */ c("button", { onClick: (m) => {
                m.stopPropagation(), y(_, -1);
              }, children: "↑" }),
              /* @__PURE__ */ c("button", { onClick: (m) => {
                m.stopPropagation(), y(_, 1);
              }, children: "↓" })
            ] })
          ] })),
          /* @__PURE__ */ c("button", { class: "wide", onClick: () => h((s) => {
            s.shots.push(Ze(s.shots.length)), f(s.shots.length - 1);
          }), children: [
            "＋ ",
            A(d, "addShot")
          ] })
        ] }),
        v && /* @__PURE__ */ c("section", { class: "td-form", children: [
          /* @__PURE__ */ c("label", { children: [
            "ID",
            /* @__PURE__ */ c("input", { value: v.id, onInput: (s) => h((_) => {
              _.shots[p].id = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ c("label", { children: [
            "标题 / Title",
            /* @__PURE__ */ c("input", { value: v.title, onInput: (s) => h((_) => {
              _.shots[p].title = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ c("label", { children: [
            "时长 / Duration",
            /* @__PURE__ */ c("input", { type: "number", min: "0.1", step: "0.1", value: v.durationSeconds, onInput: (s) => h((_) => {
              _.shots[p].durationSeconds = Number(s.currentTarget.value);
            }) })
          ] }),
          /* @__PURE__ */ c("label", { class: "check", children: [
            /* @__PURE__ */ c("input", { type: "checkbox", checked: v.enabled, onChange: (s) => h((_) => {
              _.shots[p].enabled = s.currentTarget.checked;
            }) }),
            "启用 / Enabled"
          ] }),
          /* @__PURE__ */ c("label", { children: [
            "提示词（使用 ",
            /* @__PURE__ */ c("code", { children: "{{ref:别名}}" }),
            "）",
            /* @__PURE__ */ c("textarea", { rows: 10, value: v.prompt, onInput: (s) => h((_) => {
              _.shots[p].prompt = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ c("label", { children: [
            "负面提示词",
            /* @__PURE__ */ c("textarea", { rows: 3, value: v.negativePrompt, onInput: (s) => h((_) => {
              _.shots[p].negativePrompt = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ c("fieldset", { children: [
            /* @__PURE__ */ c("legend", { children: "本镜头素材 / Shot media" }),
            r.assets.map((s) => /* @__PURE__ */ c("label", { class: "check", children: [
              /* @__PURE__ */ c("input", { type: "checkbox", checked: !v.disabledAssetIds.includes(s.id), onChange: (_) => h((m) => {
                const l = m.shots[p].disabledAssetIds;
                m.shots[p].disabledAssetIds = _.currentTarget.checked ? l.filter((b) => b !== s.id) : [.../* @__PURE__ */ new Set([...l, s.id])];
              }) }),
              s.alias,
              " (",
              s.kind,
              ")"
            ] }))
          ] })
        ] }),
        /* @__PURE__ */ c("aside", { class: "td-preview", children: [
          /* @__PURE__ */ c("h2", { children: A(d, "preview") }),
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
          o != null && o.errors.length ? /* @__PURE__ */ c("ul", { class: "errors", children: o.errors.map((s) => /* @__PURE__ */ c("li", { children: s })) }) : /* @__PURE__ */ c("p", { class: "ok", children: A(d, "noErrors") }),
          /* @__PURE__ */ c("ol", { children: o == null ? void 0 : o.slots.map((s) => /* @__PURE__ */ c("li", { children: [
            /* @__PURE__ */ c("code", { children: s.label }),
            " ← ",
            s.alias
          ] })) }),
          /* @__PURE__ */ c("pre", { children: o == null ? void 0 : o.compiledPrompt })
        ] })
      ] }),
      i === "assets" && /* @__PURE__ */ c("div", { class: "td-assets", children: [
        /* @__PURE__ */ c("div", { class: "td-toolbar", children: ["image", "video", "audio"].map((s) => /* @__PURE__ */ c("button", { onClick: () => h((_) => _.assets.push(et(s))), children: [
          "＋ ",
          s
        ] })) }),
        r.assets.map((s, _) => /* @__PURE__ */ c("article", { children: [
          /* @__PURE__ */ c("div", { class: "td-grid", children: [
            /* @__PURE__ */ c("label", { children: [
              "别名 / Alias",
              /* @__PURE__ */ c("input", { value: s.alias, onInput: (m) => h((l) => {
                l.assets[_].alias = m.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ c("label", { children: [
              "类型 / Kind",
              /* @__PURE__ */ c("select", { value: s.kind, onChange: (m) => h((l) => {
                l.assets[_].kind = m.currentTarget.value;
              }), children: [
                /* @__PURE__ */ c("option", { children: "image" }),
                /* @__PURE__ */ c("option", { children: "video" }),
                /* @__PURE__ */ c("option", { children: "audio" })
              ] })
            ] }),
            /* @__PURE__ */ c("label", { children: [
              "输入目录相对路径 / Path",
              /* @__PURE__ */ c("input", { value: s.path, onInput: (m) => h((l) => {
                l.assets[_].path = m.currentTarget.value;
              }) }),
              /* @__PURE__ */ c("input", { type: "file", accept: s.kind === "image" ? "image/*" : s.kind === "video" ? "video/*" : "audio/*", onChange: async (m) => {
                var b;
                const l = (b = m.currentTarget.files) == null ? void 0 : b[0];
                if (l)
                  try {
                    const T = await tt(r.project.id, s.kind, l);
                    h((j) => {
                      j.assets[_].path = T;
                    });
                  } catch (T) {
                    window.alert(String(T));
                  }
              } })
            ] }),
            /* @__PURE__ */ c("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ c("input", { type: "number", min: "0", step: "0.1", value: s.durationSeconds ?? "", onInput: (m) => h((l) => {
                l.assets[_].durationSeconds = m.currentTarget.value ? Number(m.currentTarget.value) : null;
              }) })
            ] }),
            /* @__PURE__ */ c("label", { children: [
              "固定顺序 / Fixed order",
              /* @__PURE__ */ c("input", { type: "number", value: s.fixedOrder, onInput: (m) => h((l) => {
                l.assets[_].fixedOrder = Number(m.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ c("label", { children: [
              "限定分镜 ID（逗号分隔）",
              /* @__PURE__ */ c("input", { value: s.shotIds.join(", "), onInput: (m) => h((l) => {
                l.assets[_].shotIds = m.currentTarget.value.split(",").map((b) => b.trim()).filter(Boolean);
              }) })
            ] })
          ] }),
          /* @__PURE__ */ c("div", { class: "td-flags", children: [
            /* @__PURE__ */ c("label", { children: [
              /* @__PURE__ */ c("input", { type: "checkbox", checked: s.enabled, onChange: (m) => h((l) => {
                l.assets[_].enabled = m.currentTarget.checked;
              }) }),
              "启用"
            ] }),
            /* @__PURE__ */ c("label", { children: [
              /* @__PURE__ */ c("input", { type: "checkbox", checked: s.fixed, onChange: (m) => h((l) => {
                l.assets[_].fixed = m.currentTarget.checked;
              }) }),
              "固定引用"
            ] }),
            s.kind === "video" && /* @__PURE__ */ c("label", { children: [
              /* @__PURE__ */ c("input", { type: "checkbox", checked: s.includeVideoAudio, onChange: (m) => h((l) => {
                l.assets[_].includeVideoAudio = m.currentTarget.checked;
              }) }),
              "启用视频伴音"
            ] }),
            /* @__PURE__ */ c("button", { class: "danger", onClick: () => h((m) => {
              m.assets.splice(_, 1);
            }), children: "删除" })
          ] })
        ] }))
      ] }),
      i === "settings" && /* @__PURE__ */ c("section", { class: "td-form settings", children: [
        /* @__PURE__ */ c("label", { children: [
          "Project ID",
          /* @__PURE__ */ c("input", { value: r.project.id, onInput: (s) => h((_) => {
            _.project.id = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ c("label", { children: [
          "Project name",
          /* @__PURE__ */ c("input", { value: r.project.name, onInput: (s) => h((_) => {
            _.project.name = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ c("label", { children: [
          "Run ID",
          /* @__PURE__ */ c("input", { value: r.project.runId, onInput: (s) => h((_) => {
            _.project.runId = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ c("label", { children: [
          "FPS",
          /* @__PURE__ */ c("input", { type: "number", value: r.defaults.fps, onInput: (s) => h((_) => {
            _.defaults.fps = Number(s.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ c("label", { children: [
          "Base seed",
          /* @__PURE__ */ c("input", { type: "number", value: r.defaults.baseSeed, onInput: (s) => h((_) => {
            _.defaults.baseSeed = Number(s.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ c("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ c("textarea", { value: r.promptPrefix, onInput: (s) => h((_) => {
            _.promptPrefix = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ c("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ c("textarea", { value: r.promptSuffix, onInput: (s) => h((_) => {
            _.promptSuffix = s.currentTarget.value;
          }) })
        ] })
      ] })
    ] })
  ] });
}
function rt(t, e) {
  const n = document.getElementById("theodore-director-modal");
  if (n) {
    n.focus();
    return;
  }
  const r = document.createElement("div");
  r.id = "theodore-director-modal", r.className = "td-modal", r.tabIndex = -1, document.body.append(r);
  const a = (u) => {
    u.key === "Escape" && i();
  }, i = () => {
    document.removeEventListener("keydown", a), ce(null, r), r.remove();
  };
  document.addEventListener("keydown", a), ce(/* @__PURE__ */ c(nt, { initial: t, onSave: (u) => {
    e(u), i();
  }, onClose: i }), r), r.focus();
}
const ot = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:1fr auto;gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-card div{grid-column:2;grid-row:1/3}.td-shot-card button{padding:3px 6px}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form textarea{resize:vertical}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px;display:grid;grid-template-columns:1fr 1fr;gap:5px}.settings{max-width:780px;margin:auto}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}", xe = "theodore-director-styles";
function it() {
  if (document.getElementById(xe)) return;
  const t = document.createElement("style");
  t.id = xe, t.textContent = ot, document.head.append(t);
}
it();
const st = "/scripts/app.js";
import(
  /* @vite-ignore */
  st
).then(({ app: t }) => {
  t.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(e, n) {
      if (n.name !== "TheodoreDirector_Project") return;
      const r = e.prototype.onNodeCreated;
      e.prototype.onNodeCreated = function() {
        var i, u;
        r == null || r.apply(this);
        const a = (i = this.widgets) == null ? void 0 : i.find((p) => p.name === "plan_json");
        a && (a.type = "hidden", a.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          try {
            const p = JSON.parse(String(a.value));
            rt(p, (f) => {
              var d, g;
              a.value = JSON.stringify(f, null, 2), this.setDirtyCanvas(!0, !0), (g = (d = t.graph) == null ? void 0 : d.setDirtyCanvas) == null || g.call(d, !0, !0);
            });
          } catch (p) {
            window.alert(`Theodore Director: ${p instanceof Error ? p.message : String(p)}`);
          }
        }), this.size = [Math.max(((u = this.size) == null ? void 0 : u[0]) ?? 300, 360), 110]);
      };
    }
  });
});
