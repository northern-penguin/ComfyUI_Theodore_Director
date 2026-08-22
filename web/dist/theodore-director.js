var te, T, Ee, O, ge, Ue, He, oe, G, V, Le, ce, de, ae, Z = {}, X = [], et = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, re = Array.isArray;
function H(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function pe(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function tt(e, t, r) {
  var n, a, i, c = {};
  for (i in t) i == "key" ? n = t[i] : i == "ref" ? a = t[i] : c[i] = t[i];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? te.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) c[i] === void 0 && (c[i] = e.defaultProps[i]);
  return K(e, c, n, a, null);
}
function K(e, t, r, n, a) {
  var i = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++Ee, __i: -1, __u: 0 };
  return a == null && T.vnode != null && T.vnode(i), i;
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
function rt(e) {
  if (e.__P && e.__d) {
    var t = e.__v, r = t.__e, n = [], a = [], i = H({}, t);
    i.__v = t.__v + 1, T.vnode && T.vnode(i), ue(e.__P, i, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [r] : null, n, r ?? R(t), !!(32 & t.__u), a), i.__v = t.__v, i.__.__k[i.__i] = i, We(n, i, a), t.__e = t.__ = null, i.__e != r && Oe(i);
  }
}
function Oe(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), Oe(e);
}
function ve(e) {
  (!e.__d && (e.__d = !0) && O.push(e) && !ee.__r++ || ge != T.debounceRendering) && ((ge = T.debounceRendering) || Ue)(ee);
}
function ee() {
  try {
    for (var e, t = 1; O.length; ) O.length > t && O.sort(He), e = O.shift(), t = O.length, rt(e);
  } finally {
    O.length = ee.__r = 0;
  }
}
function Fe(e, t, r, n, a, i, c, p, _, s, m) {
  var w, d, f, k, A, P, S = n && n.__k || X, x = t.length;
  for (_ = nt(r, t, S, _, x), w = 0; w < x; w++) (f = r.__k[w]) != null && (d = f.__i != -1 && S[f.__i] || Z, f.__i = w, P = ue(e, f, d, a, i, c, p, _, s, m), k = f.__e, f.ref && d.ref != f.ref && (d.ref && _e(d.ref, null, f), m.push(f.ref, f.__c || k, f)), A == null && k != null && (A = k), 4 & f.__u ? (_ = Me(f, _, e), d.__e && (d.__e = null)) : typeof f.type == "function" && P !== void 0 ? _ = P : k && (_ = k.nextSibling), f.__u &= -7);
  return r.__e = A, _;
}
function nt(e, t, r, n, a) {
  var i, c, p, _, s, m = r.length, w = m, d = 0;
  for (e.__k = new Array(a), i = 0; i < a; i++) (c = t[i]) != null && typeof c != "boolean" && typeof c != "function" ? (typeof c == "string" || typeof c == "number" || typeof c == "bigint" || c.constructor == String ? c = e.__k[i] = K(null, c, null, null, null) : re(c) ? c = e.__k[i] = K(ne, { children: c }, null, null, null) : c.constructor === void 0 && c.__b > 0 ? c = e.__k[i] = K(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : e.__k[i] = c, _ = i + d, c.__ = e, c.__b = e.__b + 1, p = null, (s = c.__i = ot(c, r, _, w)) != -1 && (w--, (p = r[s]) && (p.__u |= 2)), p == null || p.__v == null ? (s == -1 && (a > m ? d-- : a < m && d++), typeof c.type != "function" && (c.__u |= 4)) : s != _ && (s == _ - 1 ? d-- : s == _ + 1 ? d++ : (s > _ ? d-- : d++, c.__u |= 4))) : e.__k[i] = null;
  if (w) for (i = 0; i < m; i++) (p = r[i]) != null && (2 & p.__u) == 0 && (p.__e == n && (n = R(p)), Be(p, p));
  return n;
}
function Me(e, t, r) {
  var n, a;
  if (typeof e.type == "function") {
    for (n = e.__k, a = 0; n && a < n.length; a++) n[a] && (n[a].__ = e, t = Me(n[a], t, r));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = R(e)), t = r.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function ot(e, t, r, n) {
  var a, i, c, p = e.key, _ = e.type, s = t[r], m = s != null && (2 & s.__u) == 0;
  if (s === null && p == null || m && p == s.key && _ == s.type) return r;
  if (n > (m ? 1 : 0)) {
    for (a = r - 1, i = r + 1; a >= 0 || i < t.length; ) if ((s = t[c = a >= 0 ? a-- : i++]) != null && (2 & s.__u) == 0 && p == s.key && _ == s.type) return c;
  }
  return -1;
}
function be(e, t, r) {
  t[0] == "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || et.test(t) ? r : r + "px";
}
function J(e, t, r, n, a) {
  var i, c;
  e: if (t == "style") if (typeof r == "string") e.style.cssText = r;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (t in n) r && t in r || be(e.style, t, "");
    if (r) for (t in r) n && r[t] == n[t] || be(e.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(Le, "$1")), c = t.toLowerCase(), t = c in e || t == "onFocusOut" || t == "onFocusIn" ? c.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = r, r ? n ? r[V] = n[V] : (r[V] = ce, e.addEventListener(t, i ? ae : de, i)) : e.removeEventListener(t, i ? ae : de, i);
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
function xe(e) {
  return function(t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t[G] == null) t[G] = ce++;
      else if (t[G] < r[V]) return;
      return r(T.event ? T.event(t) : t);
    }
  };
}
function ue(e, t, r, n, a, i, c, p, _, s) {
  var m, w, d, f, k, A, P, S, x, C, u, y, z, $, I, F, D = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && (_ = !!(32 & r.__u), i = [p = t.__e = r.__e]), (m = T.__b) && m(t);
  e: if (typeof D == "function") {
    w = c.length;
    try {
      if (x = t.props, C = D.prototype && D.prototype.render, u = (m = D.contextType) && n[m.__c], y = m ? u ? u.props.value : m.__ : n, r.__c ? S = (d = t.__c = r.__c).__ = d.__E : (C ? t.__c = d = new D(x, y) : (t.__c = d = new Q(x, y), d.constructor = D, d.render = dt), u && u.sub(d), d.state || (d.state = {}), d.__n = n, f = d.__d = !0, d.__h = [], d._sb = []), C && d.__s == null && (d.__s = d.state), C && D.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = H({}, d.__s)), H(d.__s, D.getDerivedStateFromProps(x, d.__s))), k = d.props, A = d.state, d.__v = t, f) C && D.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), C && d.componentDidMount != null && d.__h.push(d.componentDidMount);
      else {
        if (C && D.getDerivedStateFromProps == null && x !== k && d.componentWillReceiveProps != null && d.componentWillReceiveProps(x, y), t.__v == r.__v || !d.__e && d.shouldComponentUpdate != null && d.shouldComponentUpdate(x, d.__s, y) === !1) {
          t.__v != r.__v && (d.props = x, d.state = d.__s, d.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(v) {
            v && (v.__ = t);
          }), X.push.apply(d.__h, d._sb), d._sb = [], d.__h.length && c.push(d), p = R(r);
          break e;
        }
        d.componentWillUpdate != null && d.componentWillUpdate(x, d.__s, y), C && d.componentDidUpdate != null && d.__h.push(function() {
          d.componentDidUpdate(k, A, P);
        });
      }
      if (d.context = y, d.props = x, d.__P = e, d.__e = !1, z = T.__r, $ = 0, C) d.state = d.__s, d.__d = !1, z && z(t), m = d.render(d.props, d.state, d.context), X.push.apply(d.__h, d._sb), d._sb = [];
      else do
        d.__d = !1, z && z(t), m = d.render(d.props, d.state, d.context), d.state = d.__s;
      while (d.__d && ++$ < 25);
      d.state = d.__s, d.getChildContext != null && (n = H(H({}, n), d.getChildContext())), C && !f && d.getSnapshotBeforeUpdate != null && (P = d.getSnapshotBeforeUpdate(k, A)), I = m != null && m.type === ne && m.key == null ? Ve(m.props.children) : m, p = Fe(e, re(I) ? I : [I], t, r, n, a, i, c, p, _, s), d.base = t.__e, t.__u &= -161, d.__h.length && c.push(d), S && (d.__E = d.__ = null);
    } catch (v) {
      if (c.length = w, t.__v = null, _ || i != null) {
        if (v.then) {
          for (t.__u |= _ ? 160 : 128; p && p.nodeType == 8 && p.nextSibling; ) p = p.nextSibling;
          i != null && (i[i.indexOf(p)] = null), t.__e = p;
        } else if (i != null) for (F = i.length; F--; ) pe(i[F]);
      } else t.__e = r.__e;
      t.__k == null && (t.__k = r.__k || []), v.then || Re(t), T.__e(v, t, r);
    }
  } else i == null && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : p = t.__e = it(r.__e, t, r, n, a, i, c, _, s);
  return (m = T.diffed) && m(t), 128 & t.__u ? void 0 : p;
}
function Re(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Re));
}
function We(e, t, r) {
  for (var n = 0; n < r.length; n++) _e(r[n], r[++n], r[++n]);
  T.__c && T.__c(t, e), e.some(function(a) {
    try {
      e = a.__h, a.__h = [], e.some(function(i) {
        i.call(a);
      });
    } catch (i) {
      T.__e(i, a.__v);
    }
  });
}
function Ve(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : re(e) ? e.map(Ve) : e.constructor !== void 0 ? null : H({}, e);
}
function it(e, t, r, n, a, i, c, p, _) {
  var s, m, w, d, f, k, A, P = r.props || Z, S = t.props, x = t.type;
  if (x == "svg" ? a = "http://www.w3.org/2000/svg" : x == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), i != null) {
    for (s = 0; s < i.length; s++) if ((f = i[s]) && "setAttribute" in f == !!x && (x ? f.localName == x : f.nodeType == 3)) {
      e = f, i[s] = null;
      break;
    }
  }
  if (e == null) {
    if (x == null) return document.createTextNode(S);
    e = document.createElementNS(a, x, S.is && S), p && (T.__m && T.__m(t, i), p = !1), i = null;
  }
  if (x == null) P === S || p && e.data == S || (e.data = S);
  else {
    if (i = x == "textarea" && S.defaultValue != null ? null : i && te.call(e.childNodes), !p && i != null) for (P = {}, s = 0; s < e.attributes.length; s++) P[(f = e.attributes[s]).name] = f.value;
    for (s in P) f = P[s], s == "dangerouslySetInnerHTML" ? w = f : s == "children" || s in S || s == "value" && "defaultValue" in S || s == "checked" && "defaultChecked" in S || J(e, s, null, f, a);
    for (s in S) f = S[s], s == "children" ? d = f : s == "dangerouslySetInnerHTML" ? m = f : s == "value" ? k = f : s == "checked" ? A = f : p && typeof f != "function" || P[s] === f || J(e, s, f, P[s], a);
    if (m) p || w && (m.__html == w.__html || m.__html == e.innerHTML) || (e.innerHTML = m.__html), t.__k = [];
    else if (w && (e.innerHTML = ""), Fe(t.type == "template" ? e.content : e, re(d) ? d : [d], t, r, n, x == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, i, c, i ? i[0] : r.__k && R(r, 0), p, _), i != null) for (s = i.length; s--; ) pe(i[s]);
    p && x != "textarea" || (s = "value", x == "progress" && k == null ? e.removeAttribute("value") : k != null && (k !== e[s] || x == "progress" && !k || x == "option" && k != P[s]) && J(e, s, k, P[s], a), s = "checked", A != null && A != e[s] && J(e, s, A, P[s], a));
  }
  return e;
}
function _e(e, t, r) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), n && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (a) {
    T.__e(a, r);
  }
}
function Be(e, t, r) {
  var n, a;
  if (T.unmount && T.unmount(e), (n = e.ref) && (n.current && n.current != e.__e || _e(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      T.__e(i, t);
    }
    n.base = n.__P = n.__n = null;
  }
  if (n = e.__k) for (a = 0; a < n.length; a++) n[a] && Be(n[a], t, r || typeof e.type != "function");
  r || pe(e.__e), e.__c = e.__ = e.__e = void 0;
}
function dt(e, t, r) {
  return this.constructor(e, r);
}
function ye(e, t, r) {
  var n, a, i, c;
  t == document && (t = document.documentElement), T.__ && T.__(e, t), a = (n = !1) ? null : t.__k, i = [], c = [], ue(t, e = t.__k = tt(ne, null, [e]), a || Z, Z, t.namespaceURI, a ? null : t.firstChild ? te.call(t.childNodes) : null, i, a ? a.__e : t.firstChild, n, c), We(i, e, c), e.props.children = null;
}
te = X.slice, T = { __e: function(e, t, r, n) {
  for (var a, i, c; t = t.__; ) if ((a = t.__c) && !a.__) try {
    if ((i = a.constructor) && i.getDerivedStateFromError != null && (a.setState(i.getDerivedStateFromError(e)), c = a.__d), a.componentDidCatch != null && (a.componentDidCatch(e, n || {}), c = a.__d), c) return a.__E = a;
  } catch (p) {
    e = p;
  }
  throw e;
} }, Ee = 0, Q.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = H({}, this.state), typeof e == "function" && (e = e(H({}, r), this.props)), e && H(r, e), e != null && this.__v && (t && this._sb.push(t), ve(this));
}, Q.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ve(this));
}, Q.prototype.render = ne, O = [], Ue = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, He = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ee.__r = 0, oe = Math.random().toString(8), G = "__d" + oe, V = "__a" + oe, Le = /(PointerCapture)$|Capture$/i, ce = 0, de = xe(!1), ae = xe(!0);
var at = 0;
function o(e, t, r, n, a, i) {
  t || (t = {});
  var c, p, _ = t;
  if ("ref" in _) for (p in _ = {}, t) p == "ref" ? c = t[p] : _[p] = t[p];
  var s = { type: e, props: _, key: r, ref: c, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --at, __i: -1, __u: 0, __source: a, __self: i };
  if (typeof e == "function" && (c = e.defaultProps)) for (p in c) _[p] === void 0 && (_[p] = c[p]);
  return T.vnode && T.vnode(s), s;
}
var B, j, ie, we, le = 0, qe = [], N = T, ke = N.__b, Se = N.__r, $e = N.diffed, Ie = N.__c, Te = N.unmount, Ce = N.__;
function he(e, t) {
  N.__h && N.__h(j, e, le || t), le = 0;
  var r = j.__H || (j.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function E(e) {
  return le = 1, lt(Ge, e);
}
function lt(e, t, r) {
  var n = he(B++, 2);
  if (n.t = e, !n.__c && (n.__ = [Ge(void 0, t), function(p) {
    var _ = n.__N ? n.__N[0] : n.__[0], s = n.t(_, p);
    _ !== s && (n.__N = [s, n.__[1]], n.__c.setState({}));
  }], n.__c = j, !j.__f)) {
    var a = function(p, _, s) {
      if (!n.__c.__H) return !0;
      var m = !1, w = n.__c.props !== p;
      if (n.__c.__H.__.some(function(f) {
        if (f.__N) {
          m = !0;
          var k = f.__[0];
          f.__ = f.__N, f.__N = void 0, k !== f.__[0] && (w = !0);
        }
      }), i) {
        var d = i.call(this, p, _, s);
        return m ? d || w : d;
      }
      return !m || w;
    };
    j.__f = !0;
    var i = j.shouldComponentUpdate, c = j.componentWillUpdate;
    j.componentWillUpdate = function(p, _, s) {
      if (this.__e) {
        var m = i;
        i = void 0, a(p, _, s), i = m;
      }
      c && c.call(this, p, _, s);
    }, j.shouldComponentUpdate = a;
  }
  return n.__N || n.__;
}
function st(e, t) {
  var r = he(B++, 3);
  !N.__s && Je(r.__H, t) && (r.__ = e, r.u = t, j.__H.__h.push(r));
}
function ct(e, t) {
  var r = he(B++, 7);
  return Je(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__;
}
function pt() {
  for (var e; e = qe.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(Y), t.__h.some(se), t.__h = [];
    } catch (r) {
      t.__h = [], N.__e(r, e.__v);
    }
  }
}
N.__b = function(e) {
  j = null, ke && ke(e);
}, N.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ce && Ce(e, t);
}, N.__r = function(e) {
  Se && Se(e), B = 0;
  var t = (j = e.__c).__H;
  t && (ie === j ? (t.__h = [], j.__h = [], t.__.some(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.some(Y), t.__h.some(se), t.__h = [], B = 0)), ie = j;
}, N.diffed = function(e) {
  $e && $e(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (qe.push(t) !== 1 && we === N.requestAnimationFrame || ((we = N.requestAnimationFrame) || ut)(pt)), t.__H.__.some(function(r) {
    r.u && (r.__H = r.u, r.u = void 0);
  })), ie = j = null;
}, N.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.some(Y), r.__h = r.__h.filter(function(n) {
        return !n.__ || se(n);
      });
    } catch (n) {
      t.some(function(a) {
        a.__h && (a.__h = []);
      }), t = [], N.__e(n, r.__v);
    }
  }), Ie && Ie(e, t);
}, N.unmount = function(e) {
  Te && Te(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.some(function(n) {
    try {
      Y(n);
    } catch (a) {
      t = a;
    }
  }), r.__H = void 0, t && N.__e(t, r.__v));
};
var Pe = typeof requestAnimationFrame == "function";
function ut(e) {
  var t, r = function() {
    clearTimeout(n), Pe && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 35);
  Pe && (t = requestAnimationFrame(r));
}
function Y(e) {
  var t = j, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), j = t;
}
function se(e) {
  var t = j;
  e.__c = e.__(), j = t;
}
function Je(e, t) {
  return !e || e.length !== t.length || t.some(function(r, n) {
    return r !== e[n];
  });
}
function Ge(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const _t = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function M(e, t) {
  return _t[e][t];
}
function Ke(e, t) {
  const r = e.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!r || r.startsWith("/") || /^[A-Za-z]:\//.test(r)) return null;
  const n = r.split("/").filter(Boolean), a = n.pop();
  if (!a || n.some((c) => c === "..")) return null;
  const i = new URLSearchParams({ filename: a, type: t });
  return n.length && i.set("subfolder", n.join("/")), `/view?${i.toString()}`;
}
function ht(e) {
  return Ke(e, "input");
}
function je(e) {
  return e.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function Ne({ asset: e, compact: t = !1 }) {
  const r = ht(e.path), n = `td-media-preview ${t ? "compact" : ""}`;
  return r ? e.kind === "image" ? /* @__PURE__ */ o("div", { class: n, children: /* @__PURE__ */ o("img", { src: r, alt: e.alias, loading: "lazy" }) }) : e.kind === "video" ? /* @__PURE__ */ o("div", { class: n, children: /* @__PURE__ */ o("video", { src: r, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ o("div", { class: n, children: /* @__PURE__ */ o("audio", { src: r, controls: !0, preload: "metadata" }) }) : e.path ? /* @__PURE__ */ o("div", { class: `${n} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ o("div", { class: `${n} empty`, children: "尚未选择素材 / No media selected" });
}
const Ae = /\{\{ref:([^{}]+)}}/g;
function Qe(e, t) {
  const r = [], n = /* @__PURE__ */ new Map();
  for (const u of e.assets)
    u.enabled && (!u.shotIds.length || u.shotIds.includes(t.id)) && !t.disabledAssetIds.includes(u.id) && n.set(u.alias, u);
  const a = [e.promptPrefix, t.prompt, e.promptSuffix].filter(Boolean).join(`
`), i = [...a.matchAll(Ae)].map((u) => u[1].trim()), c = [], p = /* @__PURE__ */ new Set(), _ = (u) => {
    p.has(u.id) || (p.add(u.id), c.push(u));
  };
  [...n.values()].filter((u) => u.fixed).sort((u, y) => u.fixedOrder - y.fixedOrder || u.alias.localeCompare(y.alias)).forEach(_);
  for (const u of i) {
    const y = u.endsWith(".audio") ? u.slice(0, -6) : u, z = n.get(y);
    if (!z) {
      r.push(`未找到或已禁用素材：${u}`);
      continue;
    }
    u.endsWith(".audio") && (z.kind !== "video" || !z.includeVideoAudio) && r.push(`视频伴音未启用：${u}`), _(z);
  }
  const s = c.filter((u) => u.kind === "image"), m = c.filter((u) => u.kind === "video"), w = m.filter((u) => u.includeVideoAudio), d = c.filter((u) => u.kind === "audio"), f = w.length + d.length, k = s.length + m.length + d.length;
  s.length > 9 && r.push(`参考图 ${s.length}/9，超出 H3 上限`), m.length > 3 && r.push(`参考视频 ${m.length}/3，超出 H3 上限`), f > 3 && r.push(`有效音频 ${f}/3，超出 H3 总上限`), k > 12 && r.push(`混合文件 ${k}/12，超出 H3 上限`), f && !s.length && !m.length && r.push("音频参考不能单独使用");
  const A = m.filter((u) => typeof u.durationSeconds == "number");
  for (const u of m) (u.durationSeconds == null || u.durationSeconds < 2 || u.durationSeconds > 15) && r.push(`视频 ${u.alias} 的时长必须为 2–15 秒`);
  A.reduce((u, y) => u + (y.durationSeconds ?? 0), 0) > 15 && r.push("参考视频总时长超过 15 秒");
  const P = [...w.map((u) => u.audioDurationSeconds ?? u.durationSeconds), ...d.map((u) => u.durationSeconds)];
  P.some((u) => u == null || u < 2 || u > 15) && r.push("每路有效音频时长必须为 2–15 秒"), P.reduce((u, y) => u + (y ?? 0), 0) > 15 && r.push("有效音频总时长超过 15 秒");
  const S = /* @__PURE__ */ new Map();
  s.forEach((u, y) => S.set(u.alias, `<Picture ${y + 1}>`)), m.forEach((u, y) => S.set(u.alias, `<Video ${y + 1}>`)), w.forEach((u, y) => S.set(`${u.alias}.audio`, `<Audio ${y + 1}>`)), d.forEach((u, y) => S.set(u.alias, `<Audio ${w.length + y + 1}>`));
  const x = a.replace(Ae, (u, y) => S.get(y.trim()) ?? u), C = [...S.entries()].map(([u, y]) => ({ label: y, alias: u, kind: y.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: x, errors: r, slots: C, mixedFiles: k, audioCount: f };
}
function ft(e) {
  var a, i, c, p;
  const t = [];
  (i = (a = e.project) == null ? void 0 : a.id) != null && i.trim() || t.push("Project ID 不能为空"), (!Array.isArray(e.shots) || !e.shots.some((_) => _.enabled)) && t.push("至少需要一个启用分镜");
  const r = /* @__PURE__ */ new Set();
  for (const _ of e.shots ?? [])
    (!((c = _.id) != null && c.trim()) || r.has(_.id)) && t.push(`分镜 ID 为空或重复：${_.id || "(空)"}`), r.add(_.id), _.durationSeconds > 0 || t.push(`分镜 ${_.id} 的时长必须大于 0`);
  const n = /* @__PURE__ */ new Set();
  for (const _ of e.assets ?? []) {
    const s = (p = _.alias) == null ? void 0 : p.toLocaleLowerCase();
    (!_.alias || /[\s{}]/.test(_.alias) || _.alias.endsWith(".audio") || n.has(s)) && t.push(`素材别名无效或重复：${_.alias || "(空)"}`), n.add(s), _.enabled && !_.path && t.push(`素材 ${_.alias} 尚未选择文件`);
  }
  for (const _ of e.shots.filter((s) => s.enabled)) t.push(...Qe(e, _).errors.map((s) => `${_.title}: ${s}`));
  return [...new Set(t)];
}
const mt = (e) => `${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, ze = (e) => JSON.parse(JSON.stringify(e)), gt = { image: "图片", video: "视频", audio: "音频" };
function vt(e) {
  return { id: `shot_${String(e + 1).padStart(3, "0")}`, title: `Shot ${e + 1}`, prompt: "", negativePrompt: "", durationSeconds: 5, enabled: !0, seed: null, disabledAssetIds: [] };
}
function bt(e) {
  const t = mt(e);
  return { id: t, alias: t, kind: e, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: e === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function xt(e, t, r) {
  const n = new FormData();
  n.append("projectId", e), n.append("kind", t), n.append("file", r);
  const a = await fetch("/theodore-director/v1/assets", { method: "POST", body: n }), i = await a.json();
  if (!a.ok || !i.path) throw new Error(i.error || `HTTP ${a.status}`);
  return i.path;
}
async function yt(e, t, r) {
  const n = new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t.id,
    activeIndex: String(r)
  }), a = await fetch(`/theodore-director/v1/generated-video?${n.toString()}`), i = await a.json();
  if (!a.ok) throw new Error(i.error || `HTTP ${a.status}`);
  return i;
}
function wt({ initial: e, onSave: t, onClose: r }) {
  const [n, a] = E(() => ze(e)), [i, c] = E("shots"), [p, _] = E(0), [s, m] = E(() => navigator.language.startsWith("zh") ? "zh" : "en"), [w, d] = E({}), [f, k] = E(!1), [A, P] = E(!0), [S, x] = E(0), [C, u] = E({ found: !1 }), [y, z] = E(!1), $ = n.shots[Math.min(p, n.shots.length - 1)], I = ct(() => $ ? Qe(n, $) : null, [n, $]), F = $ != null && $.enabled ? n.shots.slice(0, p).filter((l) => l.enabled).length : -1, D = C.path ? Ke(C.path, "output") : null, v = (l) => a((h) => {
    const g = ze(h);
    return l(g), g;
  }), fe = (l, h) => v((g) => {
    const b = l + h;
    b < 0 || b >= g.shots.length || ([g.shots[l], g.shots[b]] = [g.shots[b], g.shots[l]], _(b));
  }), Ye = () => {
    const l = URL.createObjectURL(new Blob([JSON.stringify(n, null, 2)], { type: "application/json" })), h = document.createElement("a");
    h.href = l, h.download = `${n.project.id || "theodore_project"}.director.json`, h.click(), URL.revokeObjectURL(l);
  }, Ze = () => {
    const l = ft(n);
    if (l.length) {
      window.alert(`计划未通过校验：

${l.join(`
`)}`);
      return;
    }
    t(n);
  };
  return st(() => {
    let l = !1;
    return !($ != null && $.enabled) || F < 0 ? (u({ found: !1 }), z(!1), () => {
      l = !0;
    }) : (z(!0), yt(n, $, F).then((h) => {
      l || u(h);
    }).catch((h) => {
      l || u({ found: !1, error: String(h) });
    }).finally(() => {
      l || z(!1);
    }), () => {
      l = !0;
    });
  }, [n.project.name, n.project.runId, $ == null ? void 0 : $.id, $ == null ? void 0 : $.enabled, F, S]), /* @__PURE__ */ o("div", { class: "td-shell", children: [
    /* @__PURE__ */ o("header", { children: [
      /* @__PURE__ */ o("h1", { children: M(s, "title") }),
      /* @__PURE__ */ o("div", { class: "td-actions", children: [
        /* @__PURE__ */ o("button", { onClick: Ye, children: "导出 / Export" }),
        /* @__PURE__ */ o("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ o("input", { type: "file", accept: "application/json,.json", onChange: async (l) => {
            var g;
            const h = (g = l.currentTarget.files) == null ? void 0 : g[0];
            if (h)
              try {
                const b = JSON.parse(await h.text());
                if (!b.project || !Array.isArray(b.shots) || !Array.isArray(b.assets)) throw new Error("不是有效的 Theodore Director Plan");
                a(b), _(0);
              } catch (b) {
                window.alert(String(b));
              }
          } })
        ] }),
        /* @__PURE__ */ o("button", { onClick: () => m(s === "zh" ? "en" : "zh"), children: s === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ o("button", { class: "primary", onClick: Ze, children: M(s, "save") }),
        /* @__PURE__ */ o("button", { onClick: r, children: M(s, "close") })
      ] })
    ] }),
    /* @__PURE__ */ o("nav", { children: ["shots", "assets", "settings"].map((l) => /* @__PURE__ */ o("button", { class: i === l ? "active" : "", onClick: () => c(l), children: M(s, l) })) }),
    /* @__PURE__ */ o("main", { children: [
      i === "shots" && /* @__PURE__ */ o("div", { class: "td-shots", children: [
        /* @__PURE__ */ o("aside", { children: [
          n.shots.map((l, h) => /* @__PURE__ */ o("div", { class: `td-shot-card ${h === p ? "selected" : ""}`, onClick: () => _(h), children: [
            /* @__PURE__ */ o("strong", { children: [
              h + 1,
              ". ",
              l.title
            ] }),
            /* @__PURE__ */ o("span", { children: [
              l.durationSeconds,
              "s · ",
              l.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ o("div", { children: [
              /* @__PURE__ */ o("button", { onClick: (g) => {
                g.stopPropagation(), fe(h, -1);
              }, children: "↑" }),
              /* @__PURE__ */ o("button", { onClick: (g) => {
                g.stopPropagation(), fe(h, 1);
              }, children: "↓" })
            ] })
          ] })),
          /* @__PURE__ */ o("button", { class: "wide", onClick: () => v((l) => {
            l.shots.push(vt(l.shots.length)), _(l.shots.length - 1);
          }), children: [
            "＋ ",
            M(s, "addShot")
          ] })
        ] }),
        $ && /* @__PURE__ */ o("section", { class: "td-form", children: [
          /* @__PURE__ */ o("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ o("label", { children: [
              "ID",
              /* @__PURE__ */ o("input", { value: $.id, onInput: (l) => v((h) => {
                h.shots[p].id = l.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ o("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ o("input", { value: $.title, onInput: (l) => v((h) => {
                h.shots[p].title = l.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ o("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ o("input", { type: "number", min: "0.1", step: "0.1", value: $.durationSeconds, onInput: (l) => v((h) => {
                h.shots[p].durationSeconds = Number(l.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ o("label", { class: "td-shot-enabled", children: [
              /* @__PURE__ */ o("input", { type: "checkbox", checked: $.enabled, onChange: (l) => v((h) => {
                h.shots[p].enabled = l.currentTarget.checked;
              }) }),
              /* @__PURE__ */ o("span", { children: "启用 / Enabled" })
            ] })
          ] }),
          /* @__PURE__ */ o("label", { children: [
            /* @__PURE__ */ o("span", { class: "td-field-label", children: [
              "提示词（使用 ",
              /* @__PURE__ */ o("code", { children: "{{ref:别名}}" }),
              "）"
            ] }),
            /* @__PURE__ */ o("textarea", { rows: 10, value: $.prompt, onInput: (l) => v((h) => {
              h.shots[p].prompt = l.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ o("label", { children: [
            /* @__PURE__ */ o("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ o("textarea", { rows: 3, value: $.negativePrompt, onInput: (l) => v((h) => {
              h.shots[p].negativePrompt = l.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ o("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ o("legend", { children: "本镜头素材 / Shot media" }),
            n.assets.map((l) => {
              const h = !$.disabledAssetIds.includes(l.id), g = je(l.path) || l.alias;
              return /* @__PURE__ */ o("div", { class: `td-shot-media-card ${h ? "" : "disabled"}`, children: [
                /* @__PURE__ */ o("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ o(Ne, { asset: l, compact: !0 }),
                  /* @__PURE__ */ o("span", { class: "td-shot-media-kind", children: s === "zh" ? gt[l.kind] : l.kind }),
                  /* @__PURE__ */ o("label", { class: "td-shot-media-toggle", title: h ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ o("input", { type: "checkbox", checked: h, onChange: (b) => v((L) => {
                    const W = L.shots[p].disabledAssetIds;
                    L.shots[p].disabledAssetIds = b.currentTarget.checked ? W.filter((U) => U !== l.id) : [.../* @__PURE__ */ new Set([...W, l.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ o("div", { class: "td-shot-media-name", title: l.path || l.alias, children: g })
              ] }, l.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ o("aside", { class: "td-preview", children: [
          /* @__PURE__ */ o("details", { open: f, onToggle: (l) => k(l.currentTarget.open), children: [
            /* @__PURE__ */ o("summary", { children: [
              /* @__PURE__ */ o("strong", { children: M(s, "preview") }),
              /* @__PURE__ */ o("span", { class: "td-summary-counts", children: [
                "Picture ",
                (I == null ? void 0 : I.slots.filter((l) => l.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (I == null ? void 0 : I.slots.filter((l) => l.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (I == null ? void 0 : I.audioCount) ?? 0,
                "/3 · Files ",
                (I == null ? void 0 : I.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ o("div", { class: "td-preview-body", children: [
              I != null && I.errors.length ? /* @__PURE__ */ o("ul", { class: "errors", children: I.errors.map((l) => /* @__PURE__ */ o("li", { children: l })) }) : /* @__PURE__ */ o("p", { class: "ok", children: M(s, "noErrors") }),
              /* @__PURE__ */ o("ol", { children: I == null ? void 0 : I.slots.map((l) => /* @__PURE__ */ o("li", { children: [
                /* @__PURE__ */ o("code", { children: l.label }),
                " ← ",
                l.alias
              ] })) }),
              /* @__PURE__ */ o("pre", { children: I == null ? void 0 : I.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ o("details", { open: A, onToggle: (l) => P(l.currentTarget.open), children: [
            /* @__PURE__ */ o("summary", { children: [
              /* @__PURE__ */ o("strong", { children: s === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ o("span", { class: `td-result-state ${C.found ? "found" : ""}`, children: y ? s === "zh" ? "查询中" : "Checking" : C.found ? s === "zh" ? "已生成" : "Found" : s === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ o("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ o("div", { class: "td-result-actions", children: /* @__PURE__ */ o("button", { onClick: () => x((l) => l + 1), children: [
                "↻ ",
                s === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              y ? /* @__PURE__ */ o("div", { class: "td-result-empty", children: s === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : C.error ? /* @__PURE__ */ o("div", { class: "td-result-empty errors", children: s === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again." }) : C.found && D ? /* @__PURE__ */ o("div", { class: "td-generated-video", children: [
                /* @__PURE__ */ o("video", { src: D, controls: !0, preload: "metadata", playsInline: !0 }, C.path),
                /* @__PURE__ */ o("div", { class: "td-generated-meta", title: C.path, children: [
                  C.path,
                  C.bytes ? ` · ${(C.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                ] })
              ] }) : /* @__PURE__ */ o("div", { class: "td-result-empty", children: s === "zh" ? "未在预期路径找到本段视频" : "No video found at the expected path" })
            ] })
          ] })
        ] })
      ] }),
      i === "assets" && /* @__PURE__ */ o("div", { class: "td-assets", children: [
        /* @__PURE__ */ o("div", { class: "td-toolbar", children: ["image", "video", "audio"].map((l) => /* @__PURE__ */ o("button", { onClick: () => v((h) => h.assets.push(bt(l))), children: [
          "＋ ",
          l
        ] })) }),
        n.assets.map((l, h) => /* @__PURE__ */ o("article", { children: /* @__PURE__ */ o("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ o("div", { children: [
            /* @__PURE__ */ o("div", { class: "td-grid", children: [
              /* @__PURE__ */ o("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ o("input", { value: l.alias, onInput: (g) => v((b) => {
                  b.assets[h].alias = g.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ o("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ o("select", { value: l.kind, onChange: (g) => v((b) => {
                  b.assets[h].kind = g.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ o("option", { children: "image" }),
                  /* @__PURE__ */ o("option", { children: "video" }),
                  /* @__PURE__ */ o("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ o("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ o("input", { value: l.path, onInput: (g) => v((b) => {
                  b.assets[h].path = g.currentTarget.value;
                }) }),
                /* @__PURE__ */ o("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ o("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ o("input", { type: "file", accept: l.kind === "image" ? "image/*" : l.kind === "video" ? "video/*" : "audio/*", onChange: async (g) => {
                      var W;
                      const b = g.currentTarget, L = (W = b.files) == null ? void 0 : W[0];
                      if (L) {
                        d((U) => ({ ...U, [l.id]: L.name }));
                        try {
                          const U = await xt(n.project.id, l.kind, L);
                          v((q) => {
                            const me = q.assets.find((Xe) => Xe.id === l.id);
                            me && (me.path = U);
                          });
                        } catch (U) {
                          window.alert(String(U));
                        } finally {
                          d((U) => {
                            const q = { ...U };
                            return delete q[l.id], q;
                          }), b.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ o("span", { class: "td-file-name", title: w[l.id] || l.path, children: w[l.id] ? `${s === "zh" ? "上传中" : "Uploading"}: ${w[l.id]}` : je(l.path) || (s === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ o("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ o("input", { type: "number", min: "0", step: "0.1", value: l.durationSeconds ?? "", onInput: (g) => v((b) => {
                  b.assets[h].durationSeconds = g.currentTarget.value ? Number(g.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ o("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ o("input", { type: "number", value: l.fixedOrder, onInput: (g) => v((b) => {
                  b.assets[h].fixedOrder = Number(g.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ o("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ o("input", { value: l.shotIds.join(", "), onInput: (g) => v((b) => {
                  b.assets[h].shotIds = g.currentTarget.value.split(",").map((L) => L.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ o("div", { class: "td-flags", children: [
              /* @__PURE__ */ o("label", { children: [
                /* @__PURE__ */ o("input", { type: "checkbox", checked: l.enabled, onChange: (g) => v((b) => {
                  b.assets[h].enabled = g.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ o("label", { children: [
                /* @__PURE__ */ o("input", { type: "checkbox", checked: l.fixed, onChange: (g) => v((b) => {
                  b.assets[h].fixed = g.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              l.kind === "video" && /* @__PURE__ */ o("label", { children: [
                /* @__PURE__ */ o("input", { type: "checkbox", checked: l.includeVideoAudio, onChange: (g) => v((b) => {
                  b.assets[h].includeVideoAudio = g.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ o("button", { class: "danger", onClick: () => v((g) => {
                g.assets.splice(h, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ o(Ne, { asset: l })
        ] }) }, l.id))
      ] }),
      i === "settings" && /* @__PURE__ */ o("section", { class: "td-form settings", children: [
        /* @__PURE__ */ o("label", { children: [
          "Project ID",
          /* @__PURE__ */ o("input", { value: n.project.id, onInput: (l) => v((h) => {
            h.project.id = l.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ o("label", { children: [
          "Project name",
          /* @__PURE__ */ o("input", { value: n.project.name, onInput: (l) => v((h) => {
            h.project.name = l.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ o("label", { children: [
          "Run ID",
          /* @__PURE__ */ o("input", { value: n.project.runId, onInput: (l) => v((h) => {
            h.project.runId = l.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ o("label", { children: [
          "FPS",
          /* @__PURE__ */ o("input", { type: "number", value: n.defaults.fps, onInput: (l) => v((h) => {
            h.defaults.fps = Number(l.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ o("label", { children: [
          "Base seed",
          /* @__PURE__ */ o("input", { type: "number", value: n.defaults.baseSeed, onInput: (l) => v((h) => {
            h.defaults.baseSeed = Number(l.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ o("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ o("textarea", { value: n.promptPrefix, onInput: (l) => v((h) => {
            h.promptPrefix = l.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ o("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ o("textarea", { value: n.promptSuffix, onInput: (l) => v((h) => {
            h.promptSuffix = l.currentTarget.value;
          }) })
        ] })
      ] })
    ] })
  ] });
}
function kt(e, t) {
  const r = document.getElementById("theodore-director-modal");
  if (r) {
    r.focus();
    return;
  }
  const n = document.createElement("div");
  n.id = "theodore-director-modal", n.className = "td-modal", n.tabIndex = -1, document.body.append(n);
  const a = (c) => {
    c.key === "Escape" && i();
  }, i = () => {
    document.removeEventListener("keydown", a), ye(null, n), n.remove();
  };
  document.addEventListener("keydown", a), ye(/* @__PURE__ */ o(wt, { initial: e, onSave: (c) => {
    t(c), i();
  }, onClose: i }), n), n.focus();
}
const St = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:1fr auto;gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-card div{grid-column:2;grid-row:1/3}.td-shot-card button{padding:3px 6px}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shot-media-name{padding:8px 10px;color:var(--td-text);font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:left}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}", De = "theodore-director-styles";
function $t() {
  if (document.getElementById(De)) return;
  const e = document.createElement("style");
  e.id = De, e.textContent = St, document.head.append(e);
}
$t();
const It = "/scripts/app.js";
import(
  /* @vite-ignore */
  It
).then(({ app: e }) => {
  e.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(t, r) {
      if (r.name !== "TheodoreDirector_Project") return;
      const n = t.prototype.onNodeCreated;
      t.prototype.onNodeCreated = function() {
        var i, c;
        n == null || n.apply(this);
        const a = (i = this.widgets) == null ? void 0 : i.find((p) => p.name === "plan_json");
        a && (a.type = "hidden", a.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          try {
            const p = JSON.parse(String(a.value));
            kt(p, (_) => {
              var s, m;
              a.value = JSON.stringify(_, null, 2), this.setDirtyCanvas(!0, !0), (m = (s = e.graph) == null ? void 0 : s.setDirtyCanvas) == null || m.call(s, !0, !0);
            });
          } catch (p) {
            window.alert(`Theodore Director: ${p instanceof Error ? p.message : String(p)}`);
          }
        }), this.size = [Math.max(((c = this.size) == null ? void 0 : c[0]) ?? 300, 360), 110]);
      };
    }
  });
});
