var J, k, ke, x, se, Se, we, Q, O, j, $e, ne, Y, Z, R = {}, z = [], Ue = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, q = Array.isArray;
function I(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function re(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Fe(t, e, n) {
  var r, _, i, h = {};
  for (i in e) i == "key" ? r = e[i] : i == "ref" ? _ = e[i] : h[i] = e[i];
  if (arguments.length > 2 && (h.children = arguments.length > 3 ? J.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (i in t.defaultProps) h[i] === void 0 && (h[i] = t.defaultProps[i]);
  return M(t, h, r, _, null);
}
function M(t, e, n, r, _) {
  var i = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: _ ?? ++ke, __i: -1, __u: 0 };
  return _ == null && k.vnode != null && k.vnode(i), i;
}
function K(t) {
  return t.children;
}
function L(t, e) {
  this.props = t, this.context = e;
}
function N(t, e) {
  if (e == null) return t.__ ? N(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? N(t) : null;
}
function Oe(t) {
  if (t.__P && t.__d) {
    var e = t.__v, n = e.__e, r = [], _ = [], i = I({}, e);
    i.__v = e.__v + 1, k.vnode && k.vnode(i), oe(t.__P, i, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, r, n ?? N(e), !!(32 & e.__u), _), i.__v = e.__v, i.__.__k[i.__i] = i, xe(r, i, _), e.__e = e.__ = null, i.__e != n && Te(i);
  }
}
function Te(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), Te(t);
}
function le(t) {
  (!t.__d && (t.__d = !0) && x.push(t) && !V.__r++ || se != k.debounceRendering) && ((se = k.debounceRendering) || Se)(V);
}
function V() {
  try {
    for (var t, e = 1; x.length; ) x.length > e && x.sort(we), t = x.shift(), e = x.length, Oe(t);
  } finally {
    x.length = V.__r = 0;
  }
}
function Ce(t, e, n, r, _, i, h, d, f, a, v) {
  var g, o, p, y, T, S, s = r && r.__k || z, u = e.length;
  for (f = Me(n, e, s, f, u), g = 0; g < u; g++) (p = n.__k[g]) != null && (o = p.__i != -1 && s[p.__i] || R, p.__i = g, S = oe(t, p, o, _, i, h, d, f, a, v), y = p.__e, p.ref && o.ref != p.ref && (o.ref && ie(o.ref, null, p), v.push(p.ref, p.__c || y, p)), T == null && y != null && (T = y), 4 & p.__u ? (f = Pe(p, f, t), o.__e && (o.__e = null)) : typeof p.type == "function" && S !== void 0 ? f = S : y && (f = y.nextSibling), p.__u &= -7);
  return n.__e = T, f;
}
function Me(t, e, n, r, _) {
  var i, h, d, f, a, v = n.length, g = v, o = 0;
  for (t.__k = new Array(_), i = 0; i < _; i++) (h = e[i]) != null && typeof h != "boolean" && typeof h != "function" ? (typeof h == "string" || typeof h == "number" || typeof h == "bigint" || h.constructor == String ? h = t.__k[i] = M(null, h, null, null, null) : q(h) ? h = t.__k[i] = M(K, { children: h }, null, null, null) : h.constructor === void 0 && h.__b > 0 ? h = t.__k[i] = M(h.type, h.props, h.key, h.ref ? h.ref : null, h.__v) : t.__k[i] = h, f = i + o, h.__ = t, h.__b = t.__b + 1, d = null, (a = h.__i = Le(h, n, f, g)) != -1 && (g--, (d = n[a]) && (d.__u |= 2)), d == null || d.__v == null ? (a == -1 && (_ > v ? o-- : _ < v && o++), typeof h.type != "function" && (h.__u |= 4)) : a != f && (a == f - 1 ? o-- : a == f + 1 ? o++ : (a > f ? o-- : o++, h.__u |= 4))) : t.__k[i] = null;
  if (g) for (i = 0; i < v; i++) (d = n[i]) != null && (2 & d.__u) == 0 && (d.__e == r && (r = N(d)), Ne(d, d));
  return r;
}
function Pe(t, e, n) {
  var r, _;
  if (typeof t.type == "function") {
    for (r = t.__k, _ = 0; r && _ < r.length; _++) r[_] && (r[_].__ = t, e = Pe(r[_], e, n));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = N(t)), e = n.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Le(t, e, n, r) {
  var _, i, h, d = t.key, f = t.type, a = e[n], v = a != null && (2 & a.__u) == 0;
  if (a === null && d == null || v && d == a.key && f == a.type) return n;
  if (r > (v ? 1 : 0)) {
    for (_ = n - 1, i = n + 1; _ >= 0 || i < e.length; ) if ((a = e[h = _ >= 0 ? _-- : i++]) != null && (2 & a.__u) == 0 && d == a.key && f == a.type) return h;
  }
  return -1;
}
function _e(t, e, n) {
  e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || Ue.test(e) ? n : n + "px";
}
function U(t, e, n, r, _) {
  var i, h;
  e: if (e == "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof r == "string" && (t.style.cssText = r = ""), r) for (e in r) n && e in n || _e(t.style, e, "");
    if (n) for (e in n) r && n[e] == r[e] || _e(t.style, e, n[e]);
  }
  else if (e[0] == "o" && e[1] == "n") i = e != (e = e.replace($e, "$1")), h = e.toLowerCase(), e = h in t || e == "onFocusOut" || e == "onFocusIn" ? h.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? r ? n[j] = r[j] : (n[j] = ne, t.addEventListener(e, i ? Z : Y, i)) : t.removeEventListener(e, i ? Z : Y, i);
  else {
    if (_ == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && n == 1 ? "" : n));
  }
}
function ae(t) {
  return function(e) {
    if (this.l) {
      var n = this.l[e.type + t];
      if (e[O] == null) e[O] = ne++;
      else if (e[O] < n[j]) return;
      return n(k.event ? k.event(e) : e);
    }
  };
}
function oe(t, e, n, r, _, i, h, d, f, a) {
  var v, g, o, p, y, T, S, s, u, m, l, b, C, E, H, G, P = e.type;
  if (e.constructor !== void 0) return null;
  128 & n.__u && (f = !!(32 & n.__u), i = [d = e.__e = n.__e]), (v = k.__b) && v(e);
  e: if (typeof P == "function") {
    g = h.length;
    try {
      if (u = e.props, m = P.prototype && P.prototype.render, l = (v = P.contextType) && r[v.__c], b = v ? l ? l.props.value : v.__ : r, n.__c ? s = (o = e.__c = n.__c).__ = o.__E : (m ? e.__c = o = new P(u, b) : (e.__c = o = new L(u, b), o.constructor = P, o.render = Re), l && l.sub(o), o.state || (o.state = {}), o.__n = r, p = o.__d = !0, o.__h = [], o._sb = []), m && o.__s == null && (o.__s = o.state), m && P.getDerivedStateFromProps != null && (o.__s == o.state && (o.__s = I({}, o.__s)), I(o.__s, P.getDerivedStateFromProps(u, o.__s))), y = o.props, T = o.state, o.__v = e, p) m && P.getDerivedStateFromProps == null && o.componentWillMount != null && o.componentWillMount(), m && o.componentDidMount != null && o.__h.push(o.componentDidMount);
      else {
        if (m && P.getDerivedStateFromProps == null && u !== y && o.componentWillReceiveProps != null && o.componentWillReceiveProps(u, b), e.__v == n.__v || !o.__e && o.shouldComponentUpdate != null && o.shouldComponentUpdate(u, o.__s, b) === !1) {
          e.__v != n.__v && (o.props = u, o.state = o.__s, o.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(D) {
            D && (D.__ = e);
          }), z.push.apply(o.__h, o._sb), o._sb = [], o.__h.length && h.push(o), d = N(n);
          break e;
        }
        o.componentWillUpdate != null && o.componentWillUpdate(u, o.__s, b), m && o.componentDidUpdate != null && o.__h.push(function() {
          o.componentDidUpdate(y, T, S);
        });
      }
      if (o.context = b, o.props = u, o.__P = t, o.__e = !1, C = k.__r, E = 0, m) o.state = o.__s, o.__d = !1, C && C(e), v = o.render(o.props, o.state, o.context), z.push.apply(o.__h, o._sb), o._sb = [];
      else do
        o.__d = !1, C && C(e), v = o.render(o.props, o.state, o.context), o.state = o.__s;
      while (o.__d && ++E < 25);
      o.state = o.__s, o.getChildContext != null && (r = I(I({}, r), o.getChildContext())), m && !p && o.getSnapshotBeforeUpdate != null && (S = o.getSnapshotBeforeUpdate(y, T)), H = v != null && v.type === K && v.key == null ? Ae(v.props.children) : v, d = Ce(t, q(H) ? H : [H], e, n, r, _, i, h, d, f, a), o.base = e.__e, e.__u &= -161, o.__h.length && h.push(o), s && (o.__E = o.__ = null);
    } catch (D) {
      if (h.length = g, e.__v = null, f || i != null) {
        if (D.then) {
          for (e.__u |= f ? 160 : 128; d && d.nodeType == 8 && d.nextSibling; ) d = d.nextSibling;
          i != null && (i[i.indexOf(d)] = null), e.__e = d;
        } else if (i != null) for (G = i.length; G--; ) re(i[G]);
      } else e.__e = n.__e;
      e.__k == null && (e.__k = n.__k || []), D.then || Ie(e), k.__e(D, e, n);
    }
  } else i == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : d = e.__e = We(n.__e, e, n, r, _, i, h, f, a);
  return (v = k.diffed) && v(e), 128 & e.__u ? void 0 : d;
}
function Ie(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(Ie));
}
function xe(t, e, n) {
  for (var r = 0; r < n.length; r++) ie(n[r], n[++r], n[++r]);
  k.__c && k.__c(e, t), t.some(function(_) {
    try {
      t = _.__h, _.__h = [], t.some(function(i) {
        i.call(_);
      });
    } catch (i) {
      k.__e(i, _.__v);
    }
  });
}
function Ae(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : q(t) ? t.map(Ae) : t.constructor !== void 0 ? null : I({}, t);
}
function We(t, e, n, r, _, i, h, d, f) {
  var a, v, g, o, p, y, T, S = n.props || R, s = e.props, u = e.type;
  if (u == "svg" ? _ = "http://www.w3.org/2000/svg" : u == "math" ? _ = "http://www.w3.org/1998/Math/MathML" : _ || (_ = "http://www.w3.org/1999/xhtml"), i != null) {
    for (a = 0; a < i.length; a++) if ((p = i[a]) && "setAttribute" in p == !!u && (u ? p.localName == u : p.nodeType == 3)) {
      t = p, i[a] = null;
      break;
    }
  }
  if (t == null) {
    if (u == null) return document.createTextNode(s);
    t = document.createElementNS(_, u, s.is && s), d && (k.__m && k.__m(e, i), d = !1), i = null;
  }
  if (u == null) S === s || d && t.data == s || (t.data = s);
  else {
    if (i = u == "textarea" && s.defaultValue != null ? null : i && J.call(t.childNodes), !d && i != null) for (S = {}, a = 0; a < t.attributes.length; a++) S[(p = t.attributes[a]).name] = p.value;
    for (a in S) p = S[a], a == "dangerouslySetInnerHTML" ? g = p : a == "children" || a in s || a == "value" && "defaultValue" in s || a == "checked" && "defaultChecked" in s || U(t, a, null, p, _);
    for (a in s) p = s[a], a == "children" ? o = p : a == "dangerouslySetInnerHTML" ? v = p : a == "value" ? y = p : a == "checked" ? T = p : d && typeof p != "function" || S[a] === p || U(t, a, p, S[a], _);
    if (v) d || g && (v.__html == g.__html || v.__html == t.innerHTML) || (t.innerHTML = v.__html), e.__k = [];
    else if (g && (t.innerHTML = ""), Ce(e.type == "template" ? t.content : t, q(o) ? o : [o], e, n, r, u == "foreignObject" ? "http://www.w3.org/1999/xhtml" : _, i, h, i ? i[0] : n.__k && N(n, 0), d, f), i != null) for (a = i.length; a--; ) re(i[a]);
    d && u != "textarea" || (a = "value", u == "progress" && y == null ? t.removeAttribute("value") : y != null && (y !== t[a] || u == "progress" && !y || u == "option" && y != S[a]) && U(t, a, y, S[a], _), a = "checked", T != null && T != t[a] && U(t, a, T, S[a], _));
  }
  return t;
}
function ie(t, e, n) {
  try {
    if (typeof t == "function") {
      var r = typeof t.__u == "function";
      r && t.__u(), r && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (_) {
    k.__e(_, n);
  }
}
function Ne(t, e, n) {
  var r, _;
  if (k.unmount && k.unmount(t), (r = t.ref) && (r.current && r.current != t.__e || ie(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      k.__e(i, e);
    }
    r.base = r.__P = r.__n = null;
  }
  if (r = t.__k) for (_ = 0; _ < r.length; _++) r[_] && Ne(r[_], e, n || typeof t.type != "function");
  n || re(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Re(t, e, n) {
  return this.constructor(t, n);
}
function ce(t, e, n) {
  var r, _, i, h;
  e == document && (e = document.documentElement), k.__ && k.__(t, e), _ = (r = !1) ? null : e.__k, i = [], h = [], oe(e, t = e.__k = Fe(K, null, [t]), _ || R, R, e.namespaceURI, _ ? null : e.firstChild ? J.call(e.childNodes) : null, i, _ ? _.__e : e.firstChild, r, h), xe(i, t, h), t.props.children = null;
}
J = z.slice, k = { __e: function(t, e, n, r) {
  for (var _, i, h; e = e.__; ) if ((_ = e.__c) && !_.__) try {
    if ((i = _.constructor) && i.getDerivedStateFromError != null && (_.setState(i.getDerivedStateFromError(t)), h = _.__d), _.componentDidCatch != null && (_.componentDidCatch(t, r || {}), h = _.__d), h) return _.__E = _;
  } catch (d) {
    t = d;
  }
  throw t;
} }, ke = 0, L.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = I({}, this.state), typeof t == "function" && (t = t(I({}, n), this.props)), t && I(n, t), t != null && this.__v && (e && this._sb.push(e), le(this));
}, L.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), le(this));
}, L.prototype.render = K, x = [], Se = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, we = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, V.__r = 0, Q = Math.random().toString(8), O = "__d" + Q, j = "__a" + Q, $e = /(PointerCapture)$|Capture$/i, ne = 0, Y = ae(!1), Z = ae(!0);
var ze = 0;
function c(t, e, n, r, _, i) {
  e || (e = {});
  var h, d, f = e;
  if ("ref" in f) for (d in f = {}, e) d == "ref" ? h = e[d] : f[d] = e[d];
  var a = { type: t, props: f, key: n, ref: h, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --ze, __i: -1, __u: 0, __source: _, __self: i };
  if (typeof t == "function" && (h = t.defaultProps)) for (d in h) f[d] === void 0 && (f[d] = h[d]);
  return k.vnode && k.vnode(a), a;
}
var B, w, X, ue, ee = 0, De = [], $ = k, de = $.__b, he = $.__r, pe = $.diffed, fe = $.__c, me = $.unmount, ve = $.__;
function je(t, e) {
  $.__h && $.__h(w, t, ee || e), ee = 0;
  var n = w.__H || (w.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function F(t) {
  return ee = 1, Ve(Ee, t);
}
function Ve(t, e, n) {
  var r = je(B++, 2);
  if (r.t = t, !r.__c && (r.__ = [Ee(void 0, e), function(d) {
    var f = r.__N ? r.__N[0] : r.__[0], a = r.t(f, d);
    f !== a && (r.__N = [a, r.__[1]], r.__c.setState({}));
  }], r.__c = w, !w.__f)) {
    var _ = function(d, f, a) {
      if (!r.__c.__H) return !0;
      var v = !1, g = r.__c.props !== d;
      if (r.__c.__H.__.some(function(p) {
        if (p.__N) {
          v = !0;
          var y = p.__[0];
          p.__ = p.__N, p.__N = void 0, y !== p.__[0] && (g = !0);
        }
      }), i) {
        var o = i.call(this, d, f, a);
        return v ? o || g : o;
      }
      return !v || g;
    };
    w.__f = !0;
    var i = w.shouldComponentUpdate, h = w.componentWillUpdate;
    w.componentWillUpdate = function(d, f, a) {
      if (this.__e) {
        var v = i;
        i = void 0, _(d, f, a), i = v;
      }
      h && h.call(this, d, f, a);
    }, w.shouldComponentUpdate = _;
  }
  return r.__N || r.__;
}
function Be(t, e) {
  var n = je(B++, 7);
  return Ke(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__;
}
function Je() {
  for (var t; t = De.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(W), e.__h.some(te), e.__h = [];
    } catch (n) {
      e.__h = [], $.__e(n, t.__v);
    }
  }
}
$.__b = function(t) {
  w = null, de && de(t);
}, $.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), ve && ve(t, e);
}, $.__r = function(t) {
  he && he(t), B = 0;
  var e = (w = t.__c).__H;
  e && (X === w ? (e.__h = [], w.__h = [], e.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (e.__h.some(W), e.__h.some(te), e.__h = [], B = 0)), X = w;
}, $.diffed = function(t) {
  pe && pe(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (De.push(e) !== 1 && ue === $.requestAnimationFrame || ((ue = $.requestAnimationFrame) || qe)(Je)), e.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), X = w = null;
}, $.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.some(W), n.__h = n.__h.filter(function(r) {
        return !r.__ || te(r);
      });
    } catch (r) {
      e.some(function(_) {
        _.__h && (_.__h = []);
      }), e = [], $.__e(r, n.__v);
    }
  }), fe && fe(t, e);
}, $.unmount = function(t) {
  me && me(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.some(function(r) {
    try {
      W(r);
    } catch (_) {
      e = _;
    }
  }), n.__H = void 0, e && $.__e(e, n.__v));
};
var ge = typeof requestAnimationFrame == "function";
function qe(t) {
  var e, n = function() {
    clearTimeout(r), ge && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 35);
  ge && (e = requestAnimationFrame(n));
}
function W(t) {
  var e = w, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), w = e;
}
function te(t) {
  var e = w;
  t.__c = t.__(), w = e;
}
function Ke(t, e) {
  return !t || t.length !== e.length || e.some(function(n, r) {
    return n !== t[r];
  });
}
function Ee(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const Ge = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function A(t, e) {
  return Ge[t][e];
}
const be = /\{\{ref:([^{}]+)}}/g;
function He(t, e) {
  const n = [], r = /* @__PURE__ */ new Map();
  for (const l of t.assets)
    l.enabled && (!l.shotIds.length || l.shotIds.includes(e.id)) && !e.disabledAssetIds.includes(l.id) && r.set(l.alias, l);
  const _ = [t.promptPrefix, e.prompt, t.promptSuffix].filter(Boolean).join(`
`), i = [..._.matchAll(be)].map((l) => l[1].trim()), h = [], d = /* @__PURE__ */ new Set(), f = (l) => {
    d.has(l.id) || (d.add(l.id), h.push(l));
  };
  [...r.values()].filter((l) => l.fixed).sort((l, b) => l.fixedOrder - b.fixedOrder || l.alias.localeCompare(b.alias)).forEach(f);
  for (const l of i) {
    const b = l.endsWith(".audio") ? l.slice(0, -6) : l, C = r.get(b);
    if (!C) {
      n.push(`未找到或已禁用素材：${l}`);
      continue;
    }
    l.endsWith(".audio") && (C.kind !== "video" || !C.includeVideoAudio) && n.push(`视频伴音未启用：${l}`), f(C);
  }
  const a = h.filter((l) => l.kind === "image"), v = h.filter((l) => l.kind === "video"), g = v.filter((l) => l.includeVideoAudio), o = h.filter((l) => l.kind === "audio"), p = g.length + o.length, y = a.length + v.length + o.length;
  a.length > 9 && n.push(`参考图 ${a.length}/9，超出 H3 上限`), v.length > 3 && n.push(`参考视频 ${v.length}/3，超出 H3 上限`), p > 3 && n.push(`有效音频 ${p}/3，超出 H3 总上限`), y > 12 && n.push(`混合文件 ${y}/12，超出 H3 上限`), p && !a.length && !v.length && n.push("音频参考不能单独使用");
  const T = v.filter((l) => typeof l.durationSeconds == "number");
  for (const l of v) (l.durationSeconds == null || l.durationSeconds < 2 || l.durationSeconds > 15) && n.push(`视频 ${l.alias} 的时长必须为 2–15 秒`);
  T.reduce((l, b) => l + (b.durationSeconds ?? 0), 0) > 15 && n.push("参考视频总时长超过 15 秒");
  const S = [...g.map((l) => l.audioDurationSeconds ?? l.durationSeconds), ...o.map((l) => l.durationSeconds)];
  S.some((l) => l == null || l < 2 || l > 15) && n.push("每路有效音频时长必须为 2–15 秒"), S.reduce((l, b) => l + (b ?? 0), 0) > 15 && n.push("有效音频总时长超过 15 秒");
  const s = /* @__PURE__ */ new Map();
  a.forEach((l, b) => s.set(l.alias, `<Picture ${b + 1}>`)), v.forEach((l, b) => s.set(l.alias, `<Video ${b + 1}>`)), g.forEach((l, b) => s.set(`${l.alias}.audio`, `<Audio ${b + 1}>`)), o.forEach((l, b) => s.set(l.alias, `<Audio ${g.length + b + 1}>`));
  const u = _.replace(be, (l, b) => s.get(b.trim()) ?? l), m = [...s.entries()].map(([l, b]) => ({ label: b, alias: l, kind: b.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: u, errors: n, slots: m, mixedFiles: y, audioCount: p };
}
function Qe(t) {
  var _, i, h, d;
  const e = [];
  (i = (_ = t.project) == null ? void 0 : _.id) != null && i.trim() || e.push("Project ID 不能为空"), (!Array.isArray(t.shots) || !t.shots.some((f) => f.enabled)) && e.push("至少需要一个启用分镜");
  const n = /* @__PURE__ */ new Set();
  for (const f of t.shots ?? [])
    (!((h = f.id) != null && h.trim()) || n.has(f.id)) && e.push(`分镜 ID 为空或重复：${f.id || "(空)"}`), n.add(f.id), f.durationSeconds > 0 || e.push(`分镜 ${f.id} 的时长必须大于 0`);
  const r = /* @__PURE__ */ new Set();
  for (const f of t.assets ?? []) {
    const a = (d = f.alias) == null ? void 0 : d.toLocaleLowerCase();
    (!f.alias || /[\s{}]/.test(f.alias) || f.alias.endsWith(".audio") || r.has(a)) && e.push(`素材别名无效或重复：${f.alias || "(空)"}`), r.add(a), f.enabled && !f.path && e.push(`素材 ${f.alias} 尚未选择文件`);
  }
  for (const f of t.shots.filter((a) => a.enabled)) e.push(...He(t, f).errors.map((a) => `${f.title}: ${a}`));
  return [...new Set(e)];
}
const Xe = (t) => `${t}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, ye = (t) => JSON.parse(JSON.stringify(t));
function Ye(t) {
  return { id: `shot_${String(t + 1).padStart(3, "0")}`, title: `Shot ${t + 1}`, prompt: "", negativePrompt: "", durationSeconds: 5, enabled: !0, seed: null, disabledAssetIds: [] };
}
function Ze(t) {
  const e = Xe(t);
  return { id: e, alias: e, kind: t, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: t === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function et(t, e, n) {
  const r = new FormData();
  r.append("projectId", t), r.append("kind", e), r.append("file", n);
  const _ = await fetch("/theodore-director/v1/assets", { method: "POST", body: r }), i = await _.json();
  if (!_.ok || !i.path) throw new Error(i.error || `HTTP ${_.status}`);
  return i.path;
}
function tt({ initial: t, onSave: e, onClose: n }) {
  const [r, _] = F(() => ye(t)), [i, h] = F("shots"), [d, f] = F(0), [a, v] = F(() => navigator.language.startsWith("zh") ? "zh" : "en"), g = r.shots[Math.min(d, r.shots.length - 1)], o = Be(() => g ? He(r, g) : null, [r, g]), p = (s) => _((u) => {
    const m = ye(u);
    return s(m), m;
  }), y = (s, u) => p((m) => {
    const l = s + u;
    l < 0 || l >= m.shots.length || ([m.shots[s], m.shots[l]] = [m.shots[l], m.shots[s]], f(l));
  }), T = () => {
    const s = URL.createObjectURL(new Blob([JSON.stringify(r, null, 2)], { type: "application/json" })), u = document.createElement("a");
    u.href = s, u.download = `${r.project.id || "theodore_project"}.director.json`, u.click(), URL.revokeObjectURL(s);
  }, S = () => {
    const s = Qe(r);
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
      /* @__PURE__ */ c("h1", { children: A(a, "title") }),
      /* @__PURE__ */ c("div", { class: "td-actions", children: [
        /* @__PURE__ */ c("button", { onClick: T, children: "导出 / Export" }),
        /* @__PURE__ */ c("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ c("input", { type: "file", accept: "application/json,.json", onChange: async (s) => {
            var m;
            const u = (m = s.currentTarget.files) == null ? void 0 : m[0];
            if (u)
              try {
                const l = JSON.parse(await u.text());
                if (!l.project || !Array.isArray(l.shots) || !Array.isArray(l.assets)) throw new Error("不是有效的 Theodore Director Plan");
                _(l), f(0);
              } catch (l) {
                window.alert(String(l));
              }
          } })
        ] }),
        /* @__PURE__ */ c("button", { onClick: () => v(a === "zh" ? "en" : "zh"), children: a === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ c("button", { class: "primary", onClick: S, children: A(a, "save") }),
        /* @__PURE__ */ c("button", { onClick: n, children: A(a, "close") })
      ] })
    ] }),
    /* @__PURE__ */ c("nav", { children: ["shots", "assets", "settings"].map((s) => /* @__PURE__ */ c("button", { class: i === s ? "active" : "", onClick: () => h(s), children: A(a, s) })) }),
    /* @__PURE__ */ c("main", { children: [
      i === "shots" && /* @__PURE__ */ c("div", { class: "td-shots", children: [
        /* @__PURE__ */ c("aside", { children: [
          r.shots.map((s, u) => /* @__PURE__ */ c("div", { class: `td-shot-card ${u === d ? "selected" : ""}`, onClick: () => f(u), children: [
            /* @__PURE__ */ c("strong", { children: [
              u + 1,
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
                m.stopPropagation(), y(u, -1);
              }, children: "↑" }),
              /* @__PURE__ */ c("button", { onClick: (m) => {
                m.stopPropagation(), y(u, 1);
              }, children: "↓" })
            ] })
          ] })),
          /* @__PURE__ */ c("button", { class: "wide", onClick: () => p((s) => {
            s.shots.push(Ye(s.shots.length)), f(s.shots.length - 1);
          }), children: [
            "＋ ",
            A(a, "addShot")
          ] })
        ] }),
        g && /* @__PURE__ */ c("section", { class: "td-form", children: [
          /* @__PURE__ */ c("label", { children: [
            "ID",
            /* @__PURE__ */ c("input", { value: g.id, onInput: (s) => p((u) => {
              u.shots[d].id = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ c("label", { children: [
            "标题 / Title",
            /* @__PURE__ */ c("input", { value: g.title, onInput: (s) => p((u) => {
              u.shots[d].title = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ c("label", { children: [
            "时长 / Duration",
            /* @__PURE__ */ c("input", { type: "number", min: "0.1", step: "0.1", value: g.durationSeconds, onInput: (s) => p((u) => {
              u.shots[d].durationSeconds = Number(s.currentTarget.value);
            }) })
          ] }),
          /* @__PURE__ */ c("label", { class: "check", children: [
            /* @__PURE__ */ c("input", { type: "checkbox", checked: g.enabled, onChange: (s) => p((u) => {
              u.shots[d].enabled = s.currentTarget.checked;
            }) }),
            "启用 / Enabled"
          ] }),
          /* @__PURE__ */ c("label", { children: [
            "提示词（使用 ",
            /* @__PURE__ */ c("code", { children: "{{ref:别名}}" }),
            "）",
            /* @__PURE__ */ c("textarea", { rows: 10, value: g.prompt, onInput: (s) => p((u) => {
              u.shots[d].prompt = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ c("label", { children: [
            "负面提示词",
            /* @__PURE__ */ c("textarea", { rows: 3, value: g.negativePrompt, onInput: (s) => p((u) => {
              u.shots[d].negativePrompt = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ c("fieldset", { children: [
            /* @__PURE__ */ c("legend", { children: "本镜头素材 / Shot media" }),
            r.assets.map((s) => /* @__PURE__ */ c("label", { class: "check", children: [
              /* @__PURE__ */ c("input", { type: "checkbox", checked: !g.disabledAssetIds.includes(s.id), onChange: (u) => p((m) => {
                const l = m.shots[d].disabledAssetIds;
                m.shots[d].disabledAssetIds = u.currentTarget.checked ? l.filter((b) => b !== s.id) : [.../* @__PURE__ */ new Set([...l, s.id])];
              }) }),
              s.alias,
              " (",
              s.kind,
              ")"
            ] }))
          ] })
        ] }),
        /* @__PURE__ */ c("aside", { class: "td-preview", children: [
          /* @__PURE__ */ c("h2", { children: A(a, "preview") }),
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
          o != null && o.errors.length ? /* @__PURE__ */ c("ul", { class: "errors", children: o.errors.map((s) => /* @__PURE__ */ c("li", { children: s })) }) : /* @__PURE__ */ c("p", { class: "ok", children: A(a, "noErrors") }),
          /* @__PURE__ */ c("ol", { children: o == null ? void 0 : o.slots.map((s) => /* @__PURE__ */ c("li", { children: [
            /* @__PURE__ */ c("code", { children: s.label }),
            " ← ",
            s.alias
          ] })) }),
          /* @__PURE__ */ c("pre", { children: o == null ? void 0 : o.compiledPrompt })
        ] })
      ] }),
      i === "assets" && /* @__PURE__ */ c("div", { class: "td-assets", children: [
        /* @__PURE__ */ c("div", { class: "td-toolbar", children: ["image", "video", "audio"].map((s) => /* @__PURE__ */ c("button", { onClick: () => p((u) => u.assets.push(Ze(s))), children: [
          "＋ ",
          s
        ] })) }),
        r.assets.map((s, u) => /* @__PURE__ */ c("article", { children: [
          /* @__PURE__ */ c("div", { class: "td-grid", children: [
            /* @__PURE__ */ c("label", { children: [
              "别名 / Alias",
              /* @__PURE__ */ c("input", { value: s.alias, onInput: (m) => p((l) => {
                l.assets[u].alias = m.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ c("label", { children: [
              "类型 / Kind",
              /* @__PURE__ */ c("select", { value: s.kind, onChange: (m) => p((l) => {
                l.assets[u].kind = m.currentTarget.value;
              }), children: [
                /* @__PURE__ */ c("option", { children: "image" }),
                /* @__PURE__ */ c("option", { children: "video" }),
                /* @__PURE__ */ c("option", { children: "audio" })
              ] })
            ] }),
            /* @__PURE__ */ c("label", { children: [
              "输入目录相对路径 / Path",
              /* @__PURE__ */ c("input", { value: s.path, onInput: (m) => p((l) => {
                l.assets[u].path = m.currentTarget.value;
              }) }),
              /* @__PURE__ */ c("input", { type: "file", accept: s.kind === "image" ? "image/*" : s.kind === "video" ? "video/*" : "audio/*", onChange: async (m) => {
                var b;
                const l = (b = m.currentTarget.files) == null ? void 0 : b[0];
                if (l)
                  try {
                    const C = await et(r.project.id, s.kind, l);
                    p((E) => {
                      E.assets[u].path = C;
                    });
                  } catch (C) {
                    window.alert(String(C));
                  }
              } })
            ] }),
            /* @__PURE__ */ c("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ c("input", { type: "number", min: "0", step: "0.1", value: s.durationSeconds ?? "", onInput: (m) => p((l) => {
                l.assets[u].durationSeconds = m.currentTarget.value ? Number(m.currentTarget.value) : null;
              }) })
            ] }),
            /* @__PURE__ */ c("label", { children: [
              "固定顺序 / Fixed order",
              /* @__PURE__ */ c("input", { type: "number", value: s.fixedOrder, onInput: (m) => p((l) => {
                l.assets[u].fixedOrder = Number(m.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ c("label", { children: [
              "限定分镜 ID（逗号分隔）",
              /* @__PURE__ */ c("input", { value: s.shotIds.join(", "), onInput: (m) => p((l) => {
                l.assets[u].shotIds = m.currentTarget.value.split(",").map((b) => b.trim()).filter(Boolean);
              }) })
            ] })
          ] }),
          /* @__PURE__ */ c("div", { class: "td-flags", children: [
            /* @__PURE__ */ c("label", { children: [
              /* @__PURE__ */ c("input", { type: "checkbox", checked: s.enabled, onChange: (m) => p((l) => {
                l.assets[u].enabled = m.currentTarget.checked;
              }) }),
              "启用"
            ] }),
            /* @__PURE__ */ c("label", { children: [
              /* @__PURE__ */ c("input", { type: "checkbox", checked: s.fixed, onChange: (m) => p((l) => {
                l.assets[u].fixed = m.currentTarget.checked;
              }) }),
              "固定引用"
            ] }),
            s.kind === "video" && /* @__PURE__ */ c("label", { children: [
              /* @__PURE__ */ c("input", { type: "checkbox", checked: s.includeVideoAudio, onChange: (m) => p((l) => {
                l.assets[u].includeVideoAudio = m.currentTarget.checked;
              }) }),
              "启用视频伴音"
            ] }),
            /* @__PURE__ */ c("button", { class: "danger", onClick: () => p((m) => {
              m.assets.splice(u, 1);
            }), children: "删除" })
          ] })
        ] }))
      ] }),
      i === "settings" && /* @__PURE__ */ c("section", { class: "td-form settings", children: [
        /* @__PURE__ */ c("label", { children: [
          "Project ID",
          /* @__PURE__ */ c("input", { value: r.project.id, onInput: (s) => p((u) => {
            u.project.id = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ c("label", { children: [
          "Project name",
          /* @__PURE__ */ c("input", { value: r.project.name, onInput: (s) => p((u) => {
            u.project.name = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ c("label", { children: [
          "Run ID",
          /* @__PURE__ */ c("input", { value: r.project.runId, onInput: (s) => p((u) => {
            u.project.runId = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ c("label", { children: [
          "FPS",
          /* @__PURE__ */ c("input", { type: "number", value: r.defaults.fps, onInput: (s) => p((u) => {
            u.defaults.fps = Number(s.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ c("label", { children: [
          "Base seed",
          /* @__PURE__ */ c("input", { type: "number", value: r.defaults.baseSeed, onInput: (s) => p((u) => {
            u.defaults.baseSeed = Number(s.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ c("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ c("textarea", { value: r.promptPrefix, onInput: (s) => p((u) => {
            u.promptPrefix = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ c("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ c("textarea", { value: r.promptSuffix, onInput: (s) => p((u) => {
            u.promptSuffix = s.currentTarget.value;
          }) })
        ] })
      ] })
    ] })
  ] });
}
function nt(t, e) {
  const n = document.createElement("div");
  n.className = "td-modal", document.body.append(n);
  const r = () => {
    ce(null, n), n.remove();
  };
  ce(/* @__PURE__ */ c(tt, { initial: t, onSave: (_) => {
    e(_), r();
  }, onClose: r }), n);
}
const rt = "/scripts/app.js";
import(
  /* @vite-ignore */
  rt
).then(({ app: t }) => {
  t.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(e, n) {
      if (n.name !== "TheodoreDirector_Project") return;
      const r = e.prototype.onNodeCreated;
      e.prototype.onNodeCreated = function() {
        var i, h;
        r == null || r.apply(this);
        const _ = (i = this.widgets) == null ? void 0 : i.find((d) => d.name === "plan_json");
        _ && (_.type = "hidden", _.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          try {
            const d = JSON.parse(String(_.value));
            nt(d, (f) => {
              var a, v;
              _.value = JSON.stringify(f, null, 2), this.setDirtyCanvas(!0, !0), (v = (a = t.graph) == null ? void 0 : a.setDirtyCanvas) == null || v.call(a, !0, !0);
            });
          } catch (d) {
            window.alert(`Theodore Director: ${d instanceof Error ? d.message : String(d)}`);
          }
        }), this.size = [Math.max(((h = this.size) == null ? void 0 : h[0]) ?? 300, 360), 110]);
      };
    }
  });
});
