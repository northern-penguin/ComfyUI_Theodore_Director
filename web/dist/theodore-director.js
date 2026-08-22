var q, w, we, j, le, Se, $e, Q, L, z, Te, re, Z, X, R = {}, B = [], Le = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, K = Array.isArray;
function D(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function ne(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Oe(t, e, r) {
  var n, a, i, _ = {};
  for (i in e) i == "key" ? n = e[i] : i == "ref" ? a = e[i] : _[i] = e[i];
  if (arguments.length > 2 && (_.children = arguments.length > 3 ? q.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (i in t.defaultProps) _[i] === void 0 && (_[i] = t.defaultProps[i]);
  return O(t, _, n, a, null);
}
function O(t, e, r, n, a) {
  var i = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++we, __i: -1, __u: 0 };
  return a == null && w.vnode != null && w.vnode(i), i;
}
function G(t) {
  return t.children;
}
function M(t, e) {
  this.props = t, this.context = e;
}
function H(t, e) {
  if (e == null) return t.__ ? H(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) return r.__e;
  return typeof t.type == "function" ? H(t) : null;
}
function Me(t) {
  if (t.__P && t.__d) {
    var e = t.__v, r = e.__e, n = [], a = [], i = D({}, e);
    i.__v = e.__v + 1, w.vnode && w.vnode(i), oe(t.__P, i, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [r] : null, n, r ?? H(e), !!(32 & e.__u), a), i.__v = e.__v, i.__.__k[i.__i] = i, Ae(n, i, a), e.__e = e.__ = null, i.__e != r && Ie(i);
  }
}
function Ie(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), Ie(t);
}
function de(t) {
  (!t.__d && (t.__d = !0) && j.push(t) && !V.__r++ || le != w.debounceRendering) && ((le = w.debounceRendering) || Se)(V);
}
function V() {
  try {
    for (var t, e = 1; j.length; ) j.length > e && j.sort($e), t = j.shift(), e = j.length, Me(t);
  } finally {
    j.length = V.__r = 0;
  }
}
function Ce(t, e, r, n, a, i, _, u, p, c, m) {
  var x, l, f, v, b, S, k = n && n.__k || B, y = e.length;
  for (p = We(r, e, k, p, y), x = 0; x < y; x++) (f = r.__k[x]) != null && (l = f.__i != -1 && k[f.__i] || R, f.__i = x, S = oe(t, f, l, a, i, _, u, p, c, m), v = f.__e, f.ref && l.ref != f.ref && (l.ref && ie(l.ref, null, f), m.push(f.ref, f.__c || v, f)), b == null && v != null && (b = v), 4 & f.__u ? (p = Pe(f, p, t), l.__e && (l.__e = null)) : typeof f.type == "function" && S !== void 0 ? p = S : v && (p = v.nextSibling), f.__u &= -7);
  return r.__e = b, p;
}
function We(t, e, r, n, a) {
  var i, _, u, p, c, m = r.length, x = m, l = 0;
  for (t.__k = new Array(a), i = 0; i < a; i++) (_ = e[i]) != null && typeof _ != "boolean" && typeof _ != "function" ? (typeof _ == "string" || typeof _ == "number" || typeof _ == "bigint" || _.constructor == String ? _ = t.__k[i] = O(null, _, null, null, null) : K(_) ? _ = t.__k[i] = O(G, { children: _ }, null, null, null) : _.constructor === void 0 && _.__b > 0 ? _ = t.__k[i] = O(_.type, _.props, _.key, _.ref ? _.ref : null, _.__v) : t.__k[i] = _, p = i + l, _.__ = t, _.__b = t.__b + 1, u = null, (c = _.__i = Re(_, r, p, x)) != -1 && (x--, (u = r[c]) && (u.__u |= 2)), u == null || u.__v == null ? (c == -1 && (a > m ? l-- : a < m && l++), typeof _.type != "function" && (_.__u |= 4)) : c != p && (c == p - 1 ? l-- : c == p + 1 ? l++ : (c > p ? l-- : l++, _.__u |= 4))) : t.__k[i] = null;
  if (x) for (i = 0; i < m; i++) (u = r[i]) != null && (2 & u.__u) == 0 && (u.__e == n && (n = H(u)), je(u, u));
  return n;
}
function Pe(t, e, r) {
  var n, a;
  if (typeof t.type == "function") {
    for (n = t.__k, a = 0; n && a < n.length; a++) n[a] && (n[a].__ = t, e = Pe(n[a], e, r));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = H(t)), e = r.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Re(t, e, r, n) {
  var a, i, _, u = t.key, p = t.type, c = e[r], m = c != null && (2 & c.__u) == 0;
  if (c === null && u == null || m && u == c.key && p == c.type) return r;
  if (n > (m ? 1 : 0)) {
    for (a = r - 1, i = r + 1; a >= 0 || i < e.length; ) if ((c = e[_ = a >= 0 ? a-- : i++]) != null && (2 & c.__u) == 0 && u == c.key && p == c.type) return _;
  }
  return -1;
}
function ae(t, e, r) {
  e[0] == "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || Le.test(e) ? r : r + "px";
}
function F(t, e, r, n, a) {
  var i, _;
  e: if (e == "style") if (typeof r == "string") t.style.cssText = r;
  else {
    if (typeof n == "string" && (t.style.cssText = n = ""), n) for (e in n) r && e in r || ae(t.style, e, "");
    if (r) for (e in r) n && r[e] == n[e] || ae(t.style, e, r[e]);
  }
  else if (e[0] == "o" && e[1] == "n") i = e != (e = e.replace(Te, "$1")), _ = e.toLowerCase(), e = _ in t || e == "onFocusOut" || e == "onFocusIn" ? _.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = r, r ? n ? r[z] = n[z] : (r[z] = re, t.addEventListener(e, i ? X : Z, i)) : t.removeEventListener(e, i ? X : Z, i);
  else {
    if (a == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && r == 1 ? "" : r));
  }
}
function se(t) {
  return function(e) {
    if (this.l) {
      var r = this.l[e.type + t];
      if (e[L] == null) e[L] = re++;
      else if (e[L] < r[z]) return;
      return r(w.event ? w.event(e) : e);
    }
  };
}
function oe(t, e, r, n, a, i, _, u, p, c) {
  var m, x, l, f, v, b, S, k, y, s, o, h, g, C, N, P, I = e.type;
  if (e.constructor !== void 0) return null;
  128 & r.__u && (p = !!(32 & r.__u), i = [u = e.__e = r.__e]), (m = w.__b) && m(e);
  e: if (typeof I == "function") {
    x = _.length;
    try {
      if (y = e.props, s = I.prototype && I.prototype.render, o = (m = I.contextType) && n[m.__c], h = m ? o ? o.props.value : m.__ : n, r.__c ? k = (l = e.__c = r.__c).__ = l.__E : (s ? e.__c = l = new I(y, h) : (e.__c = l = new M(y, h), l.constructor = I, l.render = Ve), o && o.sub(l), l.state || (l.state = {}), l.__n = n, f = l.__d = !0, l.__h = [], l._sb = []), s && l.__s == null && (l.__s = l.state), s && I.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = D({}, l.__s)), D(l.__s, I.getDerivedStateFromProps(y, l.__s))), v = l.props, b = l.state, l.__v = e, f) s && I.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), s && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (s && I.getDerivedStateFromProps == null && y !== v && l.componentWillReceiveProps != null && l.componentWillReceiveProps(y, h), e.__v == r.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(y, l.__s, h) === !1) {
          e.__v != r.__v && (l.props = y, l.state = l.__s, l.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.some(function(A) {
            A && (A.__ = e);
          }), B.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && _.push(l), u = H(r);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(y, l.__s, h), s && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(v, b, S);
        });
      }
      if (l.context = h, l.props = y, l.__P = t, l.__e = !1, g = w.__r, C = 0, s) l.state = l.__s, l.__d = !1, g && g(e), m = l.render(l.props, l.state, l.context), B.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, g && g(e), m = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++C < 25);
      l.state = l.__s, l.getChildContext != null && (n = D(D({}, n), l.getChildContext())), s && !f && l.getSnapshotBeforeUpdate != null && (S = l.getSnapshotBeforeUpdate(v, b)), N = m != null && m.type === G && m.key == null ? De(m.props.children) : m, u = Ce(t, K(N) ? N : [N], e, r, n, a, i, _, u, p, c), l.base = e.__e, e.__u &= -161, l.__h.length && _.push(l), k && (l.__E = l.__ = null);
    } catch (A) {
      if (_.length = x, e.__v = null, p || i != null) {
        if (A.then) {
          for (e.__u |= p ? 160 : 128; u && u.nodeType == 8 && u.nextSibling; ) u = u.nextSibling;
          i != null && (i[i.indexOf(u)] = null), e.__e = u;
        } else if (i != null) for (P = i.length; P--; ) ne(i[P]);
      } else e.__e = r.__e;
      e.__k == null && (e.__k = r.__k || []), A.then || Ne(e), w.__e(A, e, r);
    }
  } else i == null && e.__v == r.__v ? (e.__k = r.__k, e.__e = r.__e) : u = e.__e = Be(r.__e, e, r, n, a, i, _, p, c);
  return (m = w.diffed) && m(e), 128 & e.__u ? void 0 : u;
}
function Ne(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(Ne));
}
function Ae(t, e, r) {
  for (var n = 0; n < r.length; n++) ie(r[n], r[++n], r[++n]);
  w.__c && w.__c(e, t), t.some(function(a) {
    try {
      t = a.__h, a.__h = [], t.some(function(i) {
        i.call(a);
      });
    } catch (i) {
      w.__e(i, a.__v);
    }
  });
}
function De(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : K(t) ? t.map(De) : t.constructor !== void 0 ? null : D({}, t);
}
function Be(t, e, r, n, a, i, _, u, p) {
  var c, m, x, l, f, v, b, S = r.props || R, k = e.props, y = e.type;
  if (y == "svg" ? a = "http://www.w3.org/2000/svg" : y == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), i != null) {
    for (c = 0; c < i.length; c++) if ((f = i[c]) && "setAttribute" in f == !!y && (y ? f.localName == y : f.nodeType == 3)) {
      t = f, i[c] = null;
      break;
    }
  }
  if (t == null) {
    if (y == null) return document.createTextNode(k);
    t = document.createElementNS(a, y, k.is && k), u && (w.__m && w.__m(e, i), u = !1), i = null;
  }
  if (y == null) S === k || u && t.data == k || (t.data = k);
  else {
    if (i = y == "textarea" && k.defaultValue != null ? null : i && q.call(t.childNodes), !u && i != null) for (S = {}, c = 0; c < t.attributes.length; c++) S[(f = t.attributes[c]).name] = f.value;
    for (c in S) f = S[c], c == "dangerouslySetInnerHTML" ? x = f : c == "children" || c in k || c == "value" && "defaultValue" in k || c == "checked" && "defaultChecked" in k || F(t, c, null, f, a);
    for (c in k) f = k[c], c == "children" ? l = f : c == "dangerouslySetInnerHTML" ? m = f : c == "value" ? v = f : c == "checked" ? b = f : u && typeof f != "function" || S[c] === f || F(t, c, f, S[c], a);
    if (m) u || x && (m.__html == x.__html || m.__html == t.innerHTML) || (t.innerHTML = m.__html), e.__k = [];
    else if (x && (t.innerHTML = ""), Ce(e.type == "template" ? t.content : t, K(l) ? l : [l], e, r, n, y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, i, _, i ? i[0] : r.__k && H(r, 0), u, p), i != null) for (c = i.length; c--; ) ne(i[c]);
    u && y != "textarea" || (c = "value", y == "progress" && v == null ? t.removeAttribute("value") : v != null && (v !== t[c] || y == "progress" && !v || y == "option" && v != S[c]) && F(t, c, v, S[c], a), c = "checked", b != null && b != t[c] && F(t, c, b, S[c], a));
  }
  return t;
}
function ie(t, e, r) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (a) {
    w.__e(a, r);
  }
}
function je(t, e, r) {
  var n, a;
  if (w.unmount && w.unmount(t), (n = t.ref) && (n.current && n.current != t.__e || ie(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      w.__e(i, e);
    }
    n.base = n.__P = n.__n = null;
  }
  if (n = t.__k) for (a = 0; a < n.length; a++) n[a] && je(n[a], e, r || typeof t.type != "function");
  r || ne(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Ve(t, e, r) {
  return this.constructor(t, r);
}
function ce(t, e, r) {
  var n, a, i, _;
  e == document && (e = document.documentElement), w.__ && w.__(t, e), a = (n = !1) ? null : e.__k, i = [], _ = [], oe(e, t = e.__k = Oe(G, null, [t]), a || R, R, e.namespaceURI, a ? null : e.firstChild ? q.call(e.childNodes) : null, i, a ? a.__e : e.firstChild, n, _), Ae(i, t, _), t.props.children = null;
}
q = B.slice, w = { __e: function(t, e, r, n) {
  for (var a, i, _; e = e.__; ) if ((a = e.__c) && !a.__) try {
    if ((i = a.constructor) && i.getDerivedStateFromError != null && (a.setState(i.getDerivedStateFromError(t)), _ = a.__d), a.componentDidCatch != null && (a.componentDidCatch(t, n || {}), _ = a.__d), _) return a.__E = a;
  } catch (u) {
    t = u;
  }
  throw t;
} }, we = 0, M.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = D({}, this.state), typeof t == "function" && (t = t(D({}, r), this.props)), t && D(r, t), t != null && this.__v && (e && this._sb.push(e), de(this));
}, M.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), de(this));
}, M.prototype.render = G, j = [], Se = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $e = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, V.__r = 0, Q = Math.random().toString(8), L = "__d" + Q, z = "__a" + Q, Te = /(PointerCapture)$|Capture$/i, re = 0, Z = se(!1), X = se(!0);
var Je = 0;
function d(t, e, r, n, a, i) {
  e || (e = {});
  var _, u, p = e;
  if ("ref" in p) for (u in p = {}, e) u == "ref" ? _ = e[u] : p[u] = e[u];
  var c = { type: t, props: p, key: r, ref: _, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Je, __i: -1, __u: 0, __source: a, __self: i };
  if (typeof t == "function" && (_ = t.defaultProps)) for (u in _) p[u] === void 0 && (p[u] = _[u]);
  return w.vnode && w.vnode(c), c;
}
var J, $, Y, _e, ee = 0, Ee = [], T = w, ue = T.__b, pe = T.__r, he = T.diffed, fe = T.__c, me = T.unmount, ve = T.__;
function He(t, e) {
  T.__h && T.__h($, t, ee || e), ee = 0;
  var r = $.__H || ($.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function U(t) {
  return ee = 1, qe(Ue, t);
}
function qe(t, e, r) {
  var n = He(J++, 2);
  if (n.t = t, !n.__c && (n.__ = [Ue(void 0, e), function(u) {
    var p = n.__N ? n.__N[0] : n.__[0], c = n.t(p, u);
    p !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = $, !$.__f)) {
    var a = function(u, p, c) {
      if (!n.__c.__H) return !0;
      var m = !1, x = n.__c.props !== u;
      if (n.__c.__H.__.some(function(f) {
        if (f.__N) {
          m = !0;
          var v = f.__[0];
          f.__ = f.__N, f.__N = void 0, v !== f.__[0] && (x = !0);
        }
      }), i) {
        var l = i.call(this, u, p, c);
        return m ? l || x : l;
      }
      return !m || x;
    };
    $.__f = !0;
    var i = $.shouldComponentUpdate, _ = $.componentWillUpdate;
    $.componentWillUpdate = function(u, p, c) {
      if (this.__e) {
        var m = i;
        i = void 0, a(u, p, c), i = m;
      }
      _ && _.call(this, u, p, c);
    }, $.shouldComponentUpdate = a;
  }
  return n.__N || n.__;
}
function Ke(t, e) {
  var r = He(J++, 7);
  return Ye(r.__H, e) && (r.__ = t(), r.__H = e, r.__h = t), r.__;
}
function Ge() {
  for (var t; t = Ee.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(W), e.__h.some(te), e.__h = [];
    } catch (r) {
      e.__h = [], T.__e(r, t.__v);
    }
  }
}
T.__b = function(t) {
  $ = null, ue && ue(t);
}, T.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), ve && ve(t, e);
}, T.__r = function(t) {
  pe && pe(t), J = 0;
  var e = ($ = t.__c).__H;
  e && (Y === $ ? (e.__h = [], $.__h = [], e.__.some(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (e.__h.some(W), e.__h.some(te), e.__h = [], J = 0)), Y = $;
}, T.diffed = function(t) {
  he && he(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Ee.push(e) !== 1 && _e === T.requestAnimationFrame || ((_e = T.requestAnimationFrame) || Qe)(Ge)), e.__H.__.some(function(r) {
    r.u && (r.__H = r.u, r.u = void 0);
  })), Y = $ = null;
}, T.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.some(W), r.__h = r.__h.filter(function(n) {
        return !n.__ || te(n);
      });
    } catch (n) {
      e.some(function(a) {
        a.__h && (a.__h = []);
      }), e = [], T.__e(n, r.__v);
    }
  }), fe && fe(t, e);
}, T.unmount = function(t) {
  me && me(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.some(function(n) {
    try {
      W(n);
    } catch (a) {
      e = a;
    }
  }), r.__H = void 0, e && T.__e(e, r.__v));
};
var ge = typeof requestAnimationFrame == "function";
function Qe(t) {
  var e, r = function() {
    clearTimeout(n), ge && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(r, 35);
  ge && (e = requestAnimationFrame(r));
}
function W(t) {
  var e = $, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), $ = e;
}
function te(t) {
  var e = $;
  t.__c = t.__(), $ = e;
}
function Ye(t, e) {
  return !t || t.length !== e.length || e.some(function(r, n) {
    return r !== t[n];
  });
}
function Ue(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const Ze = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function E(t, e) {
  return Ze[t][e];
}
function Xe(t) {
  const e = t.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!e || e.startsWith("/") || /^[A-Za-z]:\//.test(e)) return null;
  const r = e.split("/").filter(Boolean), n = r.pop();
  if (!n || r.some((i) => i === "..")) return null;
  const a = new URLSearchParams({ filename: n, type: "input" });
  return r.length && a.set("subfolder", r.join("/")), `/view?${a.toString()}`;
}
function et(t) {
  return t.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function be({ asset: t, compact: e = !1 }) {
  const r = Xe(t.path), n = `td-media-preview ${e ? "compact" : ""}`;
  return r ? t.kind === "image" ? /* @__PURE__ */ d("div", { class: n, children: /* @__PURE__ */ d("img", { src: r, alt: t.alias, loading: "lazy" }) }) : t.kind === "video" ? /* @__PURE__ */ d("div", { class: n, children: /* @__PURE__ */ d("video", { src: r, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ d("div", { class: n, children: /* @__PURE__ */ d("audio", { src: r, controls: !0, preload: "metadata" }) }) : t.path ? /* @__PURE__ */ d("div", { class: `${n} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ d("div", { class: `${n} empty`, children: "尚未选择素材 / No media selected" });
}
const ye = /\{\{ref:([^{}]+)}}/g;
function ze(t, e) {
  const r = [], n = /* @__PURE__ */ new Map();
  for (const o of t.assets)
    o.enabled && (!o.shotIds.length || o.shotIds.includes(e.id)) && !e.disabledAssetIds.includes(o.id) && n.set(o.alias, o);
  const a = [t.promptPrefix, e.prompt, t.promptSuffix].filter(Boolean).join(`
`), i = [...a.matchAll(ye)].map((o) => o[1].trim()), _ = [], u = /* @__PURE__ */ new Set(), p = (o) => {
    u.has(o.id) || (u.add(o.id), _.push(o));
  };
  [...n.values()].filter((o) => o.fixed).sort((o, h) => o.fixedOrder - h.fixedOrder || o.alias.localeCompare(h.alias)).forEach(p);
  for (const o of i) {
    const h = o.endsWith(".audio") ? o.slice(0, -6) : o, g = n.get(h);
    if (!g) {
      r.push(`未找到或已禁用素材：${o}`);
      continue;
    }
    o.endsWith(".audio") && (g.kind !== "video" || !g.includeVideoAudio) && r.push(`视频伴音未启用：${o}`), p(g);
  }
  const c = _.filter((o) => o.kind === "image"), m = _.filter((o) => o.kind === "video"), x = m.filter((o) => o.includeVideoAudio), l = _.filter((o) => o.kind === "audio"), f = x.length + l.length, v = c.length + m.length + l.length;
  c.length > 9 && r.push(`参考图 ${c.length}/9，超出 H3 上限`), m.length > 3 && r.push(`参考视频 ${m.length}/3，超出 H3 上限`), f > 3 && r.push(`有效音频 ${f}/3，超出 H3 总上限`), v > 12 && r.push(`混合文件 ${v}/12，超出 H3 上限`), f && !c.length && !m.length && r.push("音频参考不能单独使用");
  const b = m.filter((o) => typeof o.durationSeconds == "number");
  for (const o of m) (o.durationSeconds == null || o.durationSeconds < 2 || o.durationSeconds > 15) && r.push(`视频 ${o.alias} 的时长必须为 2–15 秒`);
  b.reduce((o, h) => o + (h.durationSeconds ?? 0), 0) > 15 && r.push("参考视频总时长超过 15 秒");
  const S = [...x.map((o) => o.audioDurationSeconds ?? o.durationSeconds), ...l.map((o) => o.durationSeconds)];
  S.some((o) => o == null || o < 2 || o > 15) && r.push("每路有效音频时长必须为 2–15 秒"), S.reduce((o, h) => o + (h ?? 0), 0) > 15 && r.push("有效音频总时长超过 15 秒");
  const k = /* @__PURE__ */ new Map();
  c.forEach((o, h) => k.set(o.alias, `<Picture ${h + 1}>`)), m.forEach((o, h) => k.set(o.alias, `<Video ${h + 1}>`)), x.forEach((o, h) => k.set(`${o.alias}.audio`, `<Audio ${h + 1}>`)), l.forEach((o, h) => k.set(o.alias, `<Audio ${x.length + h + 1}>`));
  const y = a.replace(ye, (o, h) => k.get(h.trim()) ?? o), s = [...k.entries()].map(([o, h]) => ({ label: h, alias: o, kind: h.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: y, errors: r, slots: s, mixedFiles: v, audioCount: f };
}
function tt(t) {
  var a, i, _, u;
  const e = [];
  (i = (a = t.project) == null ? void 0 : a.id) != null && i.trim() || e.push("Project ID 不能为空"), (!Array.isArray(t.shots) || !t.shots.some((p) => p.enabled)) && e.push("至少需要一个启用分镜");
  const r = /* @__PURE__ */ new Set();
  for (const p of t.shots ?? [])
    (!((_ = p.id) != null && _.trim()) || r.has(p.id)) && e.push(`分镜 ID 为空或重复：${p.id || "(空)"}`), r.add(p.id), p.durationSeconds > 0 || e.push(`分镜 ${p.id} 的时长必须大于 0`);
  const n = /* @__PURE__ */ new Set();
  for (const p of t.assets ?? []) {
    const c = (u = p.alias) == null ? void 0 : u.toLocaleLowerCase();
    (!p.alias || /[\s{}]/.test(p.alias) || p.alias.endsWith(".audio") || n.has(c)) && e.push(`素材别名无效或重复：${p.alias || "(空)"}`), n.add(c), p.enabled && !p.path && e.push(`素材 ${p.alias} 尚未选择文件`);
  }
  for (const p of t.shots.filter((c) => c.enabled)) e.push(...ze(t, p).errors.map((c) => `${p.title}: ${c}`));
  return [...new Set(e)];
}
const rt = (t) => `${t}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, xe = (t) => JSON.parse(JSON.stringify(t));
function nt(t) {
  return { id: `shot_${String(t + 1).padStart(3, "0")}`, title: `Shot ${t + 1}`, prompt: "", negativePrompt: "", durationSeconds: 5, enabled: !0, seed: null, disabledAssetIds: [] };
}
function ot(t) {
  const e = rt(t);
  return { id: e, alias: e, kind: t, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: t === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function it(t, e, r) {
  const n = new FormData();
  n.append("projectId", t), n.append("kind", e), n.append("file", r);
  const a = await fetch("/theodore-director/v1/assets", { method: "POST", body: n }), i = await a.json();
  if (!a.ok || !i.path) throw new Error(i.error || `HTTP ${a.status}`);
  return i.path;
}
function lt({ initial: t, onSave: e, onClose: r }) {
  const [n, a] = U(() => xe(t)), [i, _] = U("shots"), [u, p] = U(0), [c, m] = U(() => navigator.language.startsWith("zh") ? "zh" : "en"), [x, l] = U({}), f = n.shots[Math.min(u, n.shots.length - 1)], v = Ke(() => f ? ze(n, f) : null, [n, f]), b = (s) => a((o) => {
    const h = xe(o);
    return s(h), h;
  }), S = (s, o) => b((h) => {
    const g = s + o;
    g < 0 || g >= h.shots.length || ([h.shots[s], h.shots[g]] = [h.shots[g], h.shots[s]], p(g));
  }), k = () => {
    const s = URL.createObjectURL(new Blob([JSON.stringify(n, null, 2)], { type: "application/json" })), o = document.createElement("a");
    o.href = s, o.download = `${n.project.id || "theodore_project"}.director.json`, o.click(), URL.revokeObjectURL(s);
  }, y = () => {
    const s = tt(n);
    if (s.length) {
      window.alert(`计划未通过校验：

${s.join(`
`)}`);
      return;
    }
    e(n);
  };
  return /* @__PURE__ */ d("div", { class: "td-shell", children: [
    /* @__PURE__ */ d("header", { children: [
      /* @__PURE__ */ d("h1", { children: E(c, "title") }),
      /* @__PURE__ */ d("div", { class: "td-actions", children: [
        /* @__PURE__ */ d("button", { onClick: k, children: "导出 / Export" }),
        /* @__PURE__ */ d("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ d("input", { type: "file", accept: "application/json,.json", onChange: async (s) => {
            var h;
            const o = (h = s.currentTarget.files) == null ? void 0 : h[0];
            if (o)
              try {
                const g = JSON.parse(await o.text());
                if (!g.project || !Array.isArray(g.shots) || !Array.isArray(g.assets)) throw new Error("不是有效的 Theodore Director Plan");
                a(g), p(0);
              } catch (g) {
                window.alert(String(g));
              }
          } })
        ] }),
        /* @__PURE__ */ d("button", { onClick: () => m(c === "zh" ? "en" : "zh"), children: c === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ d("button", { class: "primary", onClick: y, children: E(c, "save") }),
        /* @__PURE__ */ d("button", { onClick: r, children: E(c, "close") })
      ] })
    ] }),
    /* @__PURE__ */ d("nav", { children: ["shots", "assets", "settings"].map((s) => /* @__PURE__ */ d("button", { class: i === s ? "active" : "", onClick: () => _(s), children: E(c, s) })) }),
    /* @__PURE__ */ d("main", { children: [
      i === "shots" && /* @__PURE__ */ d("div", { class: "td-shots", children: [
        /* @__PURE__ */ d("aside", { children: [
          n.shots.map((s, o) => /* @__PURE__ */ d("div", { class: `td-shot-card ${o === u ? "selected" : ""}`, onClick: () => p(o), children: [
            /* @__PURE__ */ d("strong", { children: [
              o + 1,
              ". ",
              s.title
            ] }),
            /* @__PURE__ */ d("span", { children: [
              s.durationSeconds,
              "s · ",
              s.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ d("div", { children: [
              /* @__PURE__ */ d("button", { onClick: (h) => {
                h.stopPropagation(), S(o, -1);
              }, children: "↑" }),
              /* @__PURE__ */ d("button", { onClick: (h) => {
                h.stopPropagation(), S(o, 1);
              }, children: "↓" })
            ] })
          ] })),
          /* @__PURE__ */ d("button", { class: "wide", onClick: () => b((s) => {
            s.shots.push(nt(s.shots.length)), p(s.shots.length - 1);
          }), children: [
            "＋ ",
            E(c, "addShot")
          ] })
        ] }),
        f && /* @__PURE__ */ d("section", { class: "td-form", children: [
          /* @__PURE__ */ d("label", { children: [
            "ID",
            /* @__PURE__ */ d("input", { value: f.id, onInput: (s) => b((o) => {
              o.shots[u].id = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ d("label", { children: [
            "标题 / Title",
            /* @__PURE__ */ d("input", { value: f.title, onInput: (s) => b((o) => {
              o.shots[u].title = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ d("label", { children: [
            "时长 / Duration",
            /* @__PURE__ */ d("input", { type: "number", min: "0.1", step: "0.1", value: f.durationSeconds, onInput: (s) => b((o) => {
              o.shots[u].durationSeconds = Number(s.currentTarget.value);
            }) })
          ] }),
          /* @__PURE__ */ d("label", { class: "check", children: [
            /* @__PURE__ */ d("input", { type: "checkbox", checked: f.enabled, onChange: (s) => b((o) => {
              o.shots[u].enabled = s.currentTarget.checked;
            }) }),
            "启用 / Enabled"
          ] }),
          /* @__PURE__ */ d("label", { children: [
            "提示词（使用 ",
            /* @__PURE__ */ d("code", { children: "{{ref:别名}}" }),
            "）",
            /* @__PURE__ */ d("textarea", { rows: 10, value: f.prompt, onInput: (s) => b((o) => {
              o.shots[u].prompt = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ d("label", { children: [
            "负面提示词",
            /* @__PURE__ */ d("textarea", { rows: 3, value: f.negativePrompt, onInput: (s) => b((o) => {
              o.shots[u].negativePrompt = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ d("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ d("legend", { children: "本镜头素材 / Shot media" }),
            n.assets.map((s) => {
              const o = !f.disabledAssetIds.includes(s.id);
              return /* @__PURE__ */ d("div", { class: `td-shot-media-card ${o ? "" : "disabled"}`, children: [
                /* @__PURE__ */ d(be, { asset: s, compact: !0 }),
                /* @__PURE__ */ d("label", { class: "check", children: [
                  /* @__PURE__ */ d("input", { type: "checkbox", checked: o, onChange: (h) => b((g) => {
                    const C = g.shots[u].disabledAssetIds;
                    g.shots[u].disabledAssetIds = h.currentTarget.checked ? C.filter((N) => N !== s.id) : [.../* @__PURE__ */ new Set([...C, s.id])];
                  }) }),
                  /* @__PURE__ */ d("span", { title: s.alias, children: [
                    /* @__PURE__ */ d("strong", { children: s.alias }),
                    /* @__PURE__ */ d("small", { children: s.kind })
                  ] })
                ] })
              ] }, s.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ d("aside", { class: "td-preview", children: [
          /* @__PURE__ */ d("h2", { children: E(c, "preview") }),
          /* @__PURE__ */ d("div", { class: "td-counters", children: [
            "Picture ",
            (v == null ? void 0 : v.slots.filter((s) => s.kind === "picture").length) ?? 0,
            "/9 · Video ",
            (v == null ? void 0 : v.slots.filter((s) => s.kind === "video").length) ?? 0,
            "/3 · Audio ",
            (v == null ? void 0 : v.audioCount) ?? 0,
            "/3 · Files ",
            (v == null ? void 0 : v.mixedFiles) ?? 0,
            "/12"
          ] }),
          v != null && v.errors.length ? /* @__PURE__ */ d("ul", { class: "errors", children: v.errors.map((s) => /* @__PURE__ */ d("li", { children: s })) }) : /* @__PURE__ */ d("p", { class: "ok", children: E(c, "noErrors") }),
          /* @__PURE__ */ d("ol", { children: v == null ? void 0 : v.slots.map((s) => /* @__PURE__ */ d("li", { children: [
            /* @__PURE__ */ d("code", { children: s.label }),
            " ← ",
            s.alias
          ] })) }),
          /* @__PURE__ */ d("pre", { children: v == null ? void 0 : v.compiledPrompt })
        ] })
      ] }),
      i === "assets" && /* @__PURE__ */ d("div", { class: "td-assets", children: [
        /* @__PURE__ */ d("div", { class: "td-toolbar", children: ["image", "video", "audio"].map((s) => /* @__PURE__ */ d("button", { onClick: () => b((o) => o.assets.push(ot(s))), children: [
          "＋ ",
          s
        ] })) }),
        n.assets.map((s, o) => /* @__PURE__ */ d("article", { children: /* @__PURE__ */ d("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ d("div", { class: "td-grid", children: [
              /* @__PURE__ */ d("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ d("input", { value: s.alias, onInput: (h) => b((g) => {
                  g.assets[o].alias = h.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ d("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ d("select", { value: s.kind, onChange: (h) => b((g) => {
                  g.assets[o].kind = h.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ d("option", { children: "image" }),
                  /* @__PURE__ */ d("option", { children: "video" }),
                  /* @__PURE__ */ d("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ d("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ d("input", { value: s.path, onInput: (h) => b((g) => {
                  g.assets[o].path = h.currentTarget.value;
                }) }),
                /* @__PURE__ */ d("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ d("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ d("input", { type: "file", accept: s.kind === "image" ? "image/*" : s.kind === "video" ? "video/*" : "audio/*", onChange: async (h) => {
                      var N;
                      const g = h.currentTarget, C = (N = g.files) == null ? void 0 : N[0];
                      if (C) {
                        l((P) => ({ ...P, [s.id]: C.name }));
                        try {
                          const P = await it(n.project.id, s.kind, C);
                          b((I) => {
                            const A = I.assets.find((Fe) => Fe.id === s.id);
                            A && (A.path = P);
                          });
                        } catch (P) {
                          window.alert(String(P));
                        } finally {
                          l((P) => {
                            const I = { ...P };
                            return delete I[s.id], I;
                          }), g.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ d("span", { class: "td-file-name", title: x[s.id] || s.path, children: x[s.id] ? `${c === "zh" ? "上传中" : "Uploading"}: ${x[s.id]}` : et(s.path) || (c === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ d("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ d("input", { type: "number", min: "0", step: "0.1", value: s.durationSeconds ?? "", onInput: (h) => b((g) => {
                  g.assets[o].durationSeconds = h.currentTarget.value ? Number(h.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ d("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ d("input", { type: "number", value: s.fixedOrder, onInput: (h) => b((g) => {
                  g.assets[o].fixedOrder = Number(h.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ d("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ d("input", { value: s.shotIds.join(", "), onInput: (h) => b((g) => {
                  g.assets[o].shotIds = h.currentTarget.value.split(",").map((C) => C.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ d("div", { class: "td-flags", children: [
              /* @__PURE__ */ d("label", { children: [
                /* @__PURE__ */ d("input", { type: "checkbox", checked: s.enabled, onChange: (h) => b((g) => {
                  g.assets[o].enabled = h.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ d("label", { children: [
                /* @__PURE__ */ d("input", { type: "checkbox", checked: s.fixed, onChange: (h) => b((g) => {
                  g.assets[o].fixed = h.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              s.kind === "video" && /* @__PURE__ */ d("label", { children: [
                /* @__PURE__ */ d("input", { type: "checkbox", checked: s.includeVideoAudio, onChange: (h) => b((g) => {
                  g.assets[o].includeVideoAudio = h.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ d("button", { class: "danger", onClick: () => b((h) => {
                h.assets.splice(o, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ d(be, { asset: s })
        ] }) }, s.id))
      ] }),
      i === "settings" && /* @__PURE__ */ d("section", { class: "td-form settings", children: [
        /* @__PURE__ */ d("label", { children: [
          "Project ID",
          /* @__PURE__ */ d("input", { value: n.project.id, onInput: (s) => b((o) => {
            o.project.id = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ d("label", { children: [
          "Project name",
          /* @__PURE__ */ d("input", { value: n.project.name, onInput: (s) => b((o) => {
            o.project.name = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ d("label", { children: [
          "Run ID",
          /* @__PURE__ */ d("input", { value: n.project.runId, onInput: (s) => b((o) => {
            o.project.runId = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ d("label", { children: [
          "FPS",
          /* @__PURE__ */ d("input", { type: "number", value: n.defaults.fps, onInput: (s) => b((o) => {
            o.defaults.fps = Number(s.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ d("label", { children: [
          "Base seed",
          /* @__PURE__ */ d("input", { type: "number", value: n.defaults.baseSeed, onInput: (s) => b((o) => {
            o.defaults.baseSeed = Number(s.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ d("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ d("textarea", { value: n.promptPrefix, onInput: (s) => b((o) => {
            o.promptPrefix = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ d("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ d("textarea", { value: n.promptSuffix, onInput: (s) => b((o) => {
            o.promptSuffix = s.currentTarget.value;
          }) })
        ] })
      ] })
    ] })
  ] });
}
function dt(t, e) {
  const r = document.getElementById("theodore-director-modal");
  if (r) {
    r.focus();
    return;
  }
  const n = document.createElement("div");
  n.id = "theodore-director-modal", n.className = "td-modal", n.tabIndex = -1, document.body.append(n);
  const a = (_) => {
    _.key === "Escape" && i();
  }, i = () => {
    document.removeEventListener("keydown", a), ce(null, n), n.remove();
  };
  document.addEventListener("keydown", a), ce(/* @__PURE__ */ d(lt, { initial: t, onSave: (_) => {
    e(_), i();
  }, onClose: i }), n), n.focus();
}
const at = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:1fr auto;gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-card div{grid-column:2;grid-row:1/3}.td-shot-card button{padding:3px 6px}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form textarea{resize:vertical}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-card>label.check{padding:7px;align-items:center;min-width:0;color:var(--td-text)}.td-shot-media-card>label.check>span{min-width:0;display:flex;flex-direction:column;overflow:hidden}.td-shot-media-card strong{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-shot-media-card small{color:var(--td-muted)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}", ke = "theodore-director-styles";
function st() {
  if (document.getElementById(ke)) return;
  const t = document.createElement("style");
  t.id = ke, t.textContent = at, document.head.append(t);
}
st();
const ct = "/scripts/app.js";
import(
  /* @vite-ignore */
  ct
).then(({ app: t }) => {
  t.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(e, r) {
      if (r.name !== "TheodoreDirector_Project") return;
      const n = e.prototype.onNodeCreated;
      e.prototype.onNodeCreated = function() {
        var i, _;
        n == null || n.apply(this);
        const a = (i = this.widgets) == null ? void 0 : i.find((u) => u.name === "plan_json");
        a && (a.type = "hidden", a.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          try {
            const u = JSON.parse(String(a.value));
            dt(u, (p) => {
              var c, m;
              a.value = JSON.stringify(p, null, 2), this.setDirtyCanvas(!0, !0), (m = (c = t.graph) == null ? void 0 : c.setDirtyCanvas) == null || m.call(c, !0, !0);
            });
          } catch (u) {
            window.alert(`Theodore Director: ${u instanceof Error ? u.message : String(u)}`);
          }
        }), this.size = [Math.max(((_ = this.size) == null ? void 0 : _[0]) ?? 300, 360), 110]);
      };
    }
  });
});
