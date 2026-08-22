var q, w, Se, j, le, $e, Te, Q, F, U, Ie, re, Z, X, R = {}, B = [], Oe = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, K = Array.isArray;
function D(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function ne(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Me(t, e, r) {
  var n, s, i, _ = {};
  for (i in e) i == "key" ? n = e[i] : i == "ref" ? s = e[i] : _[i] = e[i];
  if (arguments.length > 2 && (_.children = arguments.length > 3 ? q.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (i in t.defaultProps) _[i] === void 0 && (_[i] = t.defaultProps[i]);
  return O(t, _, n, s, null);
}
function O(t, e, r, n, s) {
  var i = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: s ?? ++Se, __i: -1, __u: 0 };
  return s == null && w.vnode != null && w.vnode(i), i;
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
function We(t) {
  if (t.__P && t.__d) {
    var e = t.__v, r = e.__e, n = [], s = [], i = D({}, e);
    i.__v = e.__v + 1, w.vnode && w.vnode(i), oe(t.__P, i, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [r] : null, n, r ?? H(e), !!(32 & e.__u), s), i.__v = e.__v, i.__.__k[i.__i] = i, De(n, i, s), e.__e = e.__ = null, i.__e != r && Ce(i);
  }
}
function Ce(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), Ce(t);
}
function de(t) {
  (!t.__d && (t.__d = !0) && j.push(t) && !V.__r++ || le != w.debounceRendering) && ((le = w.debounceRendering) || $e)(V);
}
function V() {
  try {
    for (var t, e = 1; j.length; ) j.length > e && j.sort(Te), t = j.shift(), e = j.length, We(t);
  } finally {
    j.length = V.__r = 0;
  }
}
function Pe(t, e, r, n, s, i, _, u, p, c, m) {
  var y, l, f, g, b, S, k = n && n.__k || B, x = e.length;
  for (p = Re(r, e, k, p, x), y = 0; y < x; y++) (f = r.__k[y]) != null && (l = f.__i != -1 && k[f.__i] || R, f.__i = y, S = oe(t, f, l, s, i, _, u, p, c, m), g = f.__e, f.ref && l.ref != f.ref && (l.ref && ie(l.ref, null, f), m.push(f.ref, f.__c || g, f)), b == null && g != null && (b = g), 4 & f.__u ? (p = Ne(f, p, t), l.__e && (l.__e = null)) : typeof f.type == "function" && S !== void 0 ? p = S : g && (p = g.nextSibling), f.__u &= -7);
  return r.__e = b, p;
}
function Re(t, e, r, n, s) {
  var i, _, u, p, c, m = r.length, y = m, l = 0;
  for (t.__k = new Array(s), i = 0; i < s; i++) (_ = e[i]) != null && typeof _ != "boolean" && typeof _ != "function" ? (typeof _ == "string" || typeof _ == "number" || typeof _ == "bigint" || _.constructor == String ? _ = t.__k[i] = O(null, _, null, null, null) : K(_) ? _ = t.__k[i] = O(G, { children: _ }, null, null, null) : _.constructor === void 0 && _.__b > 0 ? _ = t.__k[i] = O(_.type, _.props, _.key, _.ref ? _.ref : null, _.__v) : t.__k[i] = _, p = i + l, _.__ = t, _.__b = t.__b + 1, u = null, (c = _.__i = Be(_, r, p, y)) != -1 && (y--, (u = r[c]) && (u.__u |= 2)), u == null || u.__v == null ? (c == -1 && (s > m ? l-- : s < m && l++), typeof _.type != "function" && (_.__u |= 4)) : c != p && (c == p - 1 ? l-- : c == p + 1 ? l++ : (c > p ? l-- : l++, _.__u |= 4))) : t.__k[i] = null;
  if (y) for (i = 0; i < m; i++) (u = r[i]) != null && (2 & u.__u) == 0 && (u.__e == n && (n = H(u)), Ee(u, u));
  return n;
}
function Ne(t, e, r) {
  var n, s;
  if (typeof t.type == "function") {
    for (n = t.__k, s = 0; n && s < n.length; s++) n[s] && (n[s].__ = t, e = Ne(n[s], e, r));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = H(t)), e = r.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Be(t, e, r, n) {
  var s, i, _, u = t.key, p = t.type, c = e[r], m = c != null && (2 & c.__u) == 0;
  if (c === null && u == null || m && u == c.key && p == c.type) return r;
  if (n > (m ? 1 : 0)) {
    for (s = r - 1, i = r + 1; s >= 0 || i < e.length; ) if ((c = e[_ = s >= 0 ? s-- : i++]) != null && (2 & c.__u) == 0 && u == c.key && p == c.type) return _;
  }
  return -1;
}
function ae(t, e, r) {
  e[0] == "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || Oe.test(e) ? r : r + "px";
}
function L(t, e, r, n, s) {
  var i, _;
  e: if (e == "style") if (typeof r == "string") t.style.cssText = r;
  else {
    if (typeof n == "string" && (t.style.cssText = n = ""), n) for (e in n) r && e in r || ae(t.style, e, "");
    if (r) for (e in r) n && r[e] == n[e] || ae(t.style, e, r[e]);
  }
  else if (e[0] == "o" && e[1] == "n") i = e != (e = e.replace(Ie, "$1")), _ = e.toLowerCase(), e = _ in t || e == "onFocusOut" || e == "onFocusIn" ? _.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = r, r ? n ? r[U] = n[U] : (r[U] = re, t.addEventListener(e, i ? X : Z, i)) : t.removeEventListener(e, i ? X : Z, i);
  else {
    if (s == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
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
      if (e[F] == null) e[F] = re++;
      else if (e[F] < r[U]) return;
      return r(w.event ? w.event(e) : e);
    }
  };
}
function oe(t, e, r, n, s, i, _, u, p, c) {
  var m, y, l, f, g, b, S, k, x, a, o, h, v, P, N, C, I = e.type;
  if (e.constructor !== void 0) return null;
  128 & r.__u && (p = !!(32 & r.__u), i = [u = e.__e = r.__e]), (m = w.__b) && m(e);
  e: if (typeof I == "function") {
    y = _.length;
    try {
      if (x = e.props, a = I.prototype && I.prototype.render, o = (m = I.contextType) && n[m.__c], h = m ? o ? o.props.value : m.__ : n, r.__c ? k = (l = e.__c = r.__c).__ = l.__E : (a ? e.__c = l = new I(x, h) : (e.__c = l = new M(x, h), l.constructor = I, l.render = Je), o && o.sub(l), l.state || (l.state = {}), l.__n = n, f = l.__d = !0, l.__h = [], l._sb = []), a && l.__s == null && (l.__s = l.state), a && I.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = D({}, l.__s)), D(l.__s, I.getDerivedStateFromProps(x, l.__s))), g = l.props, b = l.state, l.__v = e, f) a && I.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), a && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (a && I.getDerivedStateFromProps == null && x !== g && l.componentWillReceiveProps != null && l.componentWillReceiveProps(x, h), e.__v == r.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(x, l.__s, h) === !1) {
          e.__v != r.__v && (l.props = x, l.state = l.__s, l.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.some(function(A) {
            A && (A.__ = e);
          }), B.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && _.push(l), u = H(r);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(x, l.__s, h), a && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(g, b, S);
        });
      }
      if (l.context = h, l.props = x, l.__P = t, l.__e = !1, v = w.__r, P = 0, a) l.state = l.__s, l.__d = !1, v && v(e), m = l.render(l.props, l.state, l.context), B.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, v && v(e), m = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++P < 25);
      l.state = l.__s, l.getChildContext != null && (n = D(D({}, n), l.getChildContext())), a && !f && l.getSnapshotBeforeUpdate != null && (S = l.getSnapshotBeforeUpdate(g, b)), N = m != null && m.type === G && m.key == null ? je(m.props.children) : m, u = Pe(t, K(N) ? N : [N], e, r, n, s, i, _, u, p, c), l.base = e.__e, e.__u &= -161, l.__h.length && _.push(l), k && (l.__E = l.__ = null);
    } catch (A) {
      if (_.length = y, e.__v = null, p || i != null) {
        if (A.then) {
          for (e.__u |= p ? 160 : 128; u && u.nodeType == 8 && u.nextSibling; ) u = u.nextSibling;
          i != null && (i[i.indexOf(u)] = null), e.__e = u;
        } else if (i != null) for (C = i.length; C--; ) ne(i[C]);
      } else e.__e = r.__e;
      e.__k == null && (e.__k = r.__k || []), A.then || Ae(e), w.__e(A, e, r);
    }
  } else i == null && e.__v == r.__v ? (e.__k = r.__k, e.__e = r.__e) : u = e.__e = Ve(r.__e, e, r, n, s, i, _, p, c);
  return (m = w.diffed) && m(e), 128 & e.__u ? void 0 : u;
}
function Ae(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(Ae));
}
function De(t, e, r) {
  for (var n = 0; n < r.length; n++) ie(r[n], r[++n], r[++n]);
  w.__c && w.__c(e, t), t.some(function(s) {
    try {
      t = s.__h, s.__h = [], t.some(function(i) {
        i.call(s);
      });
    } catch (i) {
      w.__e(i, s.__v);
    }
  });
}
function je(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : K(t) ? t.map(je) : t.constructor !== void 0 ? null : D({}, t);
}
function Ve(t, e, r, n, s, i, _, u, p) {
  var c, m, y, l, f, g, b, S = r.props || R, k = e.props, x = e.type;
  if (x == "svg" ? s = "http://www.w3.org/2000/svg" : x == "math" ? s = "http://www.w3.org/1998/Math/MathML" : s || (s = "http://www.w3.org/1999/xhtml"), i != null) {
    for (c = 0; c < i.length; c++) if ((f = i[c]) && "setAttribute" in f == !!x && (x ? f.localName == x : f.nodeType == 3)) {
      t = f, i[c] = null;
      break;
    }
  }
  if (t == null) {
    if (x == null) return document.createTextNode(k);
    t = document.createElementNS(s, x, k.is && k), u && (w.__m && w.__m(e, i), u = !1), i = null;
  }
  if (x == null) S === k || u && t.data == k || (t.data = k);
  else {
    if (i = x == "textarea" && k.defaultValue != null ? null : i && q.call(t.childNodes), !u && i != null) for (S = {}, c = 0; c < t.attributes.length; c++) S[(f = t.attributes[c]).name] = f.value;
    for (c in S) f = S[c], c == "dangerouslySetInnerHTML" ? y = f : c == "children" || c in k || c == "value" && "defaultValue" in k || c == "checked" && "defaultChecked" in k || L(t, c, null, f, s);
    for (c in k) f = k[c], c == "children" ? l = f : c == "dangerouslySetInnerHTML" ? m = f : c == "value" ? g = f : c == "checked" ? b = f : u && typeof f != "function" || S[c] === f || L(t, c, f, S[c], s);
    if (m) u || y && (m.__html == y.__html || m.__html == t.innerHTML) || (t.innerHTML = m.__html), e.__k = [];
    else if (y && (t.innerHTML = ""), Pe(e.type == "template" ? t.content : t, K(l) ? l : [l], e, r, n, x == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s, i, _, i ? i[0] : r.__k && H(r, 0), u, p), i != null) for (c = i.length; c--; ) ne(i[c]);
    u && x != "textarea" || (c = "value", x == "progress" && g == null ? t.removeAttribute("value") : g != null && (g !== t[c] || x == "progress" && !g || x == "option" && g != S[c]) && L(t, c, g, S[c], s), c = "checked", b != null && b != t[c] && L(t, c, b, S[c], s));
  }
  return t;
}
function ie(t, e, r) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (s) {
    w.__e(s, r);
  }
}
function Ee(t, e, r) {
  var n, s;
  if (w.unmount && w.unmount(t), (n = t.ref) && (n.current && n.current != t.__e || ie(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      w.__e(i, e);
    }
    n.base = n.__P = n.__n = null;
  }
  if (n = t.__k) for (s = 0; s < n.length; s++) n[s] && Ee(n[s], e, r || typeof t.type != "function");
  r || ne(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Je(t, e, r) {
  return this.constructor(t, r);
}
function ce(t, e, r) {
  var n, s, i, _;
  e == document && (e = document.documentElement), w.__ && w.__(t, e), s = (n = !1) ? null : e.__k, i = [], _ = [], oe(e, t = e.__k = Me(G, null, [t]), s || R, R, e.namespaceURI, s ? null : e.firstChild ? q.call(e.childNodes) : null, i, s ? s.__e : e.firstChild, n, _), De(i, t, _), t.props.children = null;
}
q = B.slice, w = { __e: function(t, e, r, n) {
  for (var s, i, _; e = e.__; ) if ((s = e.__c) && !s.__) try {
    if ((i = s.constructor) && i.getDerivedStateFromError != null && (s.setState(i.getDerivedStateFromError(t)), _ = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, n || {}), _ = s.__d), _) return s.__E = s;
  } catch (u) {
    t = u;
  }
  throw t;
} }, Se = 0, M.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = D({}, this.state), typeof t == "function" && (t = t(D({}, r), this.props)), t && D(r, t), t != null && this.__v && (e && this._sb.push(e), de(this));
}, M.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), de(this));
}, M.prototype.render = G, j = [], $e = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Te = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, V.__r = 0, Q = Math.random().toString(8), F = "__d" + Q, U = "__a" + Q, Ie = /(PointerCapture)$|Capture$/i, re = 0, Z = se(!1), X = se(!0);
var qe = 0;
function d(t, e, r, n, s, i) {
  e || (e = {});
  var _, u, p = e;
  if ("ref" in p) for (u in p = {}, e) u == "ref" ? _ = e[u] : p[u] = e[u];
  var c = { type: t, props: p, key: r, ref: _, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --qe, __i: -1, __u: 0, __source: s, __self: i };
  if (typeof t == "function" && (_ = t.defaultProps)) for (u in _) p[u] === void 0 && (p[u] = _[u]);
  return w.vnode && w.vnode(c), c;
}
var J, $, Y, _e, ee = 0, He = [], T = w, ue = T.__b, pe = T.__r, he = T.diffed, fe = T.__c, me = T.unmount, ge = T.__;
function ze(t, e) {
  T.__h && T.__h($, t, ee || e), ee = 0;
  var r = $.__H || ($.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function z(t) {
  return ee = 1, Ke(Ue, t);
}
function Ke(t, e, r) {
  var n = ze(J++, 2);
  if (n.t = t, !n.__c && (n.__ = [Ue(void 0, e), function(u) {
    var p = n.__N ? n.__N[0] : n.__[0], c = n.t(p, u);
    p !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = $, !$.__f)) {
    var s = function(u, p, c) {
      if (!n.__c.__H) return !0;
      var m = !1, y = n.__c.props !== u;
      if (n.__c.__H.__.some(function(f) {
        if (f.__N) {
          m = !0;
          var g = f.__[0];
          f.__ = f.__N, f.__N = void 0, g !== f.__[0] && (y = !0);
        }
      }), i) {
        var l = i.call(this, u, p, c);
        return m ? l || y : l;
      }
      return !m || y;
    };
    $.__f = !0;
    var i = $.shouldComponentUpdate, _ = $.componentWillUpdate;
    $.componentWillUpdate = function(u, p, c) {
      if (this.__e) {
        var m = i;
        i = void 0, s(u, p, c), i = m;
      }
      _ && _.call(this, u, p, c);
    }, $.shouldComponentUpdate = s;
  }
  return n.__N || n.__;
}
function Ge(t, e) {
  var r = ze(J++, 7);
  return Ze(r.__H, e) && (r.__ = t(), r.__H = e, r.__h = t), r.__;
}
function Qe() {
  for (var t; t = He.shift(); ) {
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
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), ge && ge(t, e);
}, T.__r = function(t) {
  pe && pe(t), J = 0;
  var e = ($ = t.__c).__H;
  e && (Y === $ ? (e.__h = [], $.__h = [], e.__.some(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (e.__h.some(W), e.__h.some(te), e.__h = [], J = 0)), Y = $;
}, T.diffed = function(t) {
  he && he(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (He.push(e) !== 1 && _e === T.requestAnimationFrame || ((_e = T.requestAnimationFrame) || Ye)(Qe)), e.__H.__.some(function(r) {
    r.u && (r.__H = r.u, r.u = void 0);
  })), Y = $ = null;
}, T.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.some(W), r.__h = r.__h.filter(function(n) {
        return !n.__ || te(n);
      });
    } catch (n) {
      e.some(function(s) {
        s.__h && (s.__h = []);
      }), e = [], T.__e(n, r.__v);
    }
  }), fe && fe(t, e);
}, T.unmount = function(t) {
  me && me(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.some(function(n) {
    try {
      W(n);
    } catch (s) {
      e = s;
    }
  }), r.__H = void 0, e && T.__e(e, r.__v));
};
var ve = typeof requestAnimationFrame == "function";
function Ye(t) {
  var e, r = function() {
    clearTimeout(n), ve && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(r, 35);
  ve && (e = requestAnimationFrame(r));
}
function W(t) {
  var e = $, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), $ = e;
}
function te(t) {
  var e = $;
  t.__c = t.__(), $ = e;
}
function Ze(t, e) {
  return !t || t.length !== e.length || e.some(function(r, n) {
    return r !== t[n];
  });
}
function Ue(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const Xe = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function E(t, e) {
  return Xe[t][e];
}
function et(t) {
  const e = t.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!e || e.startsWith("/") || /^[A-Za-z]:\//.test(e)) return null;
  const r = e.split("/").filter(Boolean), n = r.pop();
  if (!n || r.some((i) => i === "..")) return null;
  const s = new URLSearchParams({ filename: n, type: "input" });
  return r.length && s.set("subfolder", r.join("/")), `/view?${s.toString()}`;
}
function be(t) {
  return t.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function xe({ asset: t, compact: e = !1 }) {
  const r = et(t.path), n = `td-media-preview ${e ? "compact" : ""}`;
  return r ? t.kind === "image" ? /* @__PURE__ */ d("div", { class: n, children: /* @__PURE__ */ d("img", { src: r, alt: t.alias, loading: "lazy" }) }) : t.kind === "video" ? /* @__PURE__ */ d("div", { class: n, children: /* @__PURE__ */ d("video", { src: r, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ d("div", { class: n, children: /* @__PURE__ */ d("audio", { src: r, controls: !0, preload: "metadata" }) }) : t.path ? /* @__PURE__ */ d("div", { class: `${n} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ d("div", { class: `${n} empty`, children: "尚未选择素材 / No media selected" });
}
const ye = /\{\{ref:([^{}]+)}}/g;
function Le(t, e) {
  const r = [], n = /* @__PURE__ */ new Map();
  for (const o of t.assets)
    o.enabled && (!o.shotIds.length || o.shotIds.includes(e.id)) && !e.disabledAssetIds.includes(o.id) && n.set(o.alias, o);
  const s = [t.promptPrefix, e.prompt, t.promptSuffix].filter(Boolean).join(`
`), i = [...s.matchAll(ye)].map((o) => o[1].trim()), _ = [], u = /* @__PURE__ */ new Set(), p = (o) => {
    u.has(o.id) || (u.add(o.id), _.push(o));
  };
  [...n.values()].filter((o) => o.fixed).sort((o, h) => o.fixedOrder - h.fixedOrder || o.alias.localeCompare(h.alias)).forEach(p);
  for (const o of i) {
    const h = o.endsWith(".audio") ? o.slice(0, -6) : o, v = n.get(h);
    if (!v) {
      r.push(`未找到或已禁用素材：${o}`);
      continue;
    }
    o.endsWith(".audio") && (v.kind !== "video" || !v.includeVideoAudio) && r.push(`视频伴音未启用：${o}`), p(v);
  }
  const c = _.filter((o) => o.kind === "image"), m = _.filter((o) => o.kind === "video"), y = m.filter((o) => o.includeVideoAudio), l = _.filter((o) => o.kind === "audio"), f = y.length + l.length, g = c.length + m.length + l.length;
  c.length > 9 && r.push(`参考图 ${c.length}/9，超出 H3 上限`), m.length > 3 && r.push(`参考视频 ${m.length}/3，超出 H3 上限`), f > 3 && r.push(`有效音频 ${f}/3，超出 H3 总上限`), g > 12 && r.push(`混合文件 ${g}/12，超出 H3 上限`), f && !c.length && !m.length && r.push("音频参考不能单独使用");
  const b = m.filter((o) => typeof o.durationSeconds == "number");
  for (const o of m) (o.durationSeconds == null || o.durationSeconds < 2 || o.durationSeconds > 15) && r.push(`视频 ${o.alias} 的时长必须为 2–15 秒`);
  b.reduce((o, h) => o + (h.durationSeconds ?? 0), 0) > 15 && r.push("参考视频总时长超过 15 秒");
  const S = [...y.map((o) => o.audioDurationSeconds ?? o.durationSeconds), ...l.map((o) => o.durationSeconds)];
  S.some((o) => o == null || o < 2 || o > 15) && r.push("每路有效音频时长必须为 2–15 秒"), S.reduce((o, h) => o + (h ?? 0), 0) > 15 && r.push("有效音频总时长超过 15 秒");
  const k = /* @__PURE__ */ new Map();
  c.forEach((o, h) => k.set(o.alias, `<Picture ${h + 1}>`)), m.forEach((o, h) => k.set(o.alias, `<Video ${h + 1}>`)), y.forEach((o, h) => k.set(`${o.alias}.audio`, `<Audio ${h + 1}>`)), l.forEach((o, h) => k.set(o.alias, `<Audio ${y.length + h + 1}>`));
  const x = s.replace(ye, (o, h) => k.get(h.trim()) ?? o), a = [...k.entries()].map(([o, h]) => ({ label: h, alias: o, kind: h.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: x, errors: r, slots: a, mixedFiles: g, audioCount: f };
}
function tt(t) {
  var s, i, _, u;
  const e = [];
  (i = (s = t.project) == null ? void 0 : s.id) != null && i.trim() || e.push("Project ID 不能为空"), (!Array.isArray(t.shots) || !t.shots.some((p) => p.enabled)) && e.push("至少需要一个启用分镜");
  const r = /* @__PURE__ */ new Set();
  for (const p of t.shots ?? [])
    (!((_ = p.id) != null && _.trim()) || r.has(p.id)) && e.push(`分镜 ID 为空或重复：${p.id || "(空)"}`), r.add(p.id), p.durationSeconds > 0 || e.push(`分镜 ${p.id} 的时长必须大于 0`);
  const n = /* @__PURE__ */ new Set();
  for (const p of t.assets ?? []) {
    const c = (u = p.alias) == null ? void 0 : u.toLocaleLowerCase();
    (!p.alias || /[\s{}]/.test(p.alias) || p.alias.endsWith(".audio") || n.has(c)) && e.push(`素材别名无效或重复：${p.alias || "(空)"}`), n.add(c), p.enabled && !p.path && e.push(`素材 ${p.alias} 尚未选择文件`);
  }
  for (const p of t.shots.filter((c) => c.enabled)) e.push(...Le(t, p).errors.map((c) => `${p.title}: ${c}`));
  return [...new Set(e)];
}
const rt = (t) => `${t}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, ke = (t) => JSON.parse(JSON.stringify(t)), nt = { image: "图片", video: "视频", audio: "音频" };
function ot(t) {
  return { id: `shot_${String(t + 1).padStart(3, "0")}`, title: `Shot ${t + 1}`, prompt: "", negativePrompt: "", durationSeconds: 5, enabled: !0, seed: null, disabledAssetIds: [] };
}
function it(t) {
  const e = rt(t);
  return { id: e, alias: e, kind: t, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: t === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function lt(t, e, r) {
  const n = new FormData();
  n.append("projectId", t), n.append("kind", e), n.append("file", r);
  const s = await fetch("/theodore-director/v1/assets", { method: "POST", body: n }), i = await s.json();
  if (!s.ok || !i.path) throw new Error(i.error || `HTTP ${s.status}`);
  return i.path;
}
function dt({ initial: t, onSave: e, onClose: r }) {
  const [n, s] = z(() => ke(t)), [i, _] = z("shots"), [u, p] = z(0), [c, m] = z(() => navigator.language.startsWith("zh") ? "zh" : "en"), [y, l] = z({}), f = n.shots[Math.min(u, n.shots.length - 1)], g = Ge(() => f ? Le(n, f) : null, [n, f]), b = (a) => s((o) => {
    const h = ke(o);
    return a(h), h;
  }), S = (a, o) => b((h) => {
    const v = a + o;
    v < 0 || v >= h.shots.length || ([h.shots[a], h.shots[v]] = [h.shots[v], h.shots[a]], p(v));
  }), k = () => {
    const a = URL.createObjectURL(new Blob([JSON.stringify(n, null, 2)], { type: "application/json" })), o = document.createElement("a");
    o.href = a, o.download = `${n.project.id || "theodore_project"}.director.json`, o.click(), URL.revokeObjectURL(a);
  }, x = () => {
    const a = tt(n);
    if (a.length) {
      window.alert(`计划未通过校验：

${a.join(`
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
          /* @__PURE__ */ d("input", { type: "file", accept: "application/json,.json", onChange: async (a) => {
            var h;
            const o = (h = a.currentTarget.files) == null ? void 0 : h[0];
            if (o)
              try {
                const v = JSON.parse(await o.text());
                if (!v.project || !Array.isArray(v.shots) || !Array.isArray(v.assets)) throw new Error("不是有效的 Theodore Director Plan");
                s(v), p(0);
              } catch (v) {
                window.alert(String(v));
              }
          } })
        ] }),
        /* @__PURE__ */ d("button", { onClick: () => m(c === "zh" ? "en" : "zh"), children: c === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ d("button", { class: "primary", onClick: x, children: E(c, "save") }),
        /* @__PURE__ */ d("button", { onClick: r, children: E(c, "close") })
      ] })
    ] }),
    /* @__PURE__ */ d("nav", { children: ["shots", "assets", "settings"].map((a) => /* @__PURE__ */ d("button", { class: i === a ? "active" : "", onClick: () => _(a), children: E(c, a) })) }),
    /* @__PURE__ */ d("main", { children: [
      i === "shots" && /* @__PURE__ */ d("div", { class: "td-shots", children: [
        /* @__PURE__ */ d("aside", { children: [
          n.shots.map((a, o) => /* @__PURE__ */ d("div", { class: `td-shot-card ${o === u ? "selected" : ""}`, onClick: () => p(o), children: [
            /* @__PURE__ */ d("strong", { children: [
              o + 1,
              ". ",
              a.title
            ] }),
            /* @__PURE__ */ d("span", { children: [
              a.durationSeconds,
              "s · ",
              a.enabled ? "ON" : "OFF"
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
          /* @__PURE__ */ d("button", { class: "wide", onClick: () => b((a) => {
            a.shots.push(ot(a.shots.length)), p(a.shots.length - 1);
          }), children: [
            "＋ ",
            E(c, "addShot")
          ] })
        ] }),
        f && /* @__PURE__ */ d("section", { class: "td-form", children: [
          /* @__PURE__ */ d("label", { children: [
            "ID",
            /* @__PURE__ */ d("input", { value: f.id, onInput: (a) => b((o) => {
              o.shots[u].id = a.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ d("label", { children: [
            "标题 / Title",
            /* @__PURE__ */ d("input", { value: f.title, onInput: (a) => b((o) => {
              o.shots[u].title = a.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ d("label", { children: [
            "时长 / Duration",
            /* @__PURE__ */ d("input", { type: "number", min: "0.1", step: "0.1", value: f.durationSeconds, onInput: (a) => b((o) => {
              o.shots[u].durationSeconds = Number(a.currentTarget.value);
            }) })
          ] }),
          /* @__PURE__ */ d("label", { class: "check", children: [
            /* @__PURE__ */ d("input", { type: "checkbox", checked: f.enabled, onChange: (a) => b((o) => {
              o.shots[u].enabled = a.currentTarget.checked;
            }) }),
            "启用 / Enabled"
          ] }),
          /* @__PURE__ */ d("label", { children: [
            "提示词（使用 ",
            /* @__PURE__ */ d("code", { children: "{{ref:别名}}" }),
            "）",
            /* @__PURE__ */ d("textarea", { rows: 10, value: f.prompt, onInput: (a) => b((o) => {
              o.shots[u].prompt = a.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ d("label", { children: [
            "负面提示词",
            /* @__PURE__ */ d("textarea", { rows: 3, value: f.negativePrompt, onInput: (a) => b((o) => {
              o.shots[u].negativePrompt = a.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ d("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ d("legend", { children: "本镜头素材 / Shot media" }),
            n.assets.map((a) => {
              const o = !f.disabledAssetIds.includes(a.id), h = be(a.path) || a.alias;
              return /* @__PURE__ */ d("div", { class: `td-shot-media-card ${o ? "" : "disabled"}`, children: [
                /* @__PURE__ */ d("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ d(xe, { asset: a, compact: !0 }),
                  /* @__PURE__ */ d("span", { class: "td-shot-media-kind", children: c === "zh" ? nt[a.kind] : a.kind }),
                  /* @__PURE__ */ d("label", { class: "td-shot-media-toggle", title: o ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ d("input", { type: "checkbox", checked: o, onChange: (v) => b((P) => {
                    const N = P.shots[u].disabledAssetIds;
                    P.shots[u].disabledAssetIds = v.currentTarget.checked ? N.filter((C) => C !== a.id) : [.../* @__PURE__ */ new Set([...N, a.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ d("div", { class: "td-shot-media-name", title: a.path || a.alias, children: h })
              ] }, a.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ d("aside", { class: "td-preview", children: [
          /* @__PURE__ */ d("h2", { children: E(c, "preview") }),
          /* @__PURE__ */ d("div", { class: "td-counters", children: [
            "Picture ",
            (g == null ? void 0 : g.slots.filter((a) => a.kind === "picture").length) ?? 0,
            "/9 · Video ",
            (g == null ? void 0 : g.slots.filter((a) => a.kind === "video").length) ?? 0,
            "/3 · Audio ",
            (g == null ? void 0 : g.audioCount) ?? 0,
            "/3 · Files ",
            (g == null ? void 0 : g.mixedFiles) ?? 0,
            "/12"
          ] }),
          g != null && g.errors.length ? /* @__PURE__ */ d("ul", { class: "errors", children: g.errors.map((a) => /* @__PURE__ */ d("li", { children: a })) }) : /* @__PURE__ */ d("p", { class: "ok", children: E(c, "noErrors") }),
          /* @__PURE__ */ d("ol", { children: g == null ? void 0 : g.slots.map((a) => /* @__PURE__ */ d("li", { children: [
            /* @__PURE__ */ d("code", { children: a.label }),
            " ← ",
            a.alias
          ] })) }),
          /* @__PURE__ */ d("pre", { children: g == null ? void 0 : g.compiledPrompt })
        ] })
      ] }),
      i === "assets" && /* @__PURE__ */ d("div", { class: "td-assets", children: [
        /* @__PURE__ */ d("div", { class: "td-toolbar", children: ["image", "video", "audio"].map((a) => /* @__PURE__ */ d("button", { onClick: () => b((o) => o.assets.push(it(a))), children: [
          "＋ ",
          a
        ] })) }),
        n.assets.map((a, o) => /* @__PURE__ */ d("article", { children: /* @__PURE__ */ d("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ d("div", { class: "td-grid", children: [
              /* @__PURE__ */ d("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ d("input", { value: a.alias, onInput: (h) => b((v) => {
                  v.assets[o].alias = h.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ d("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ d("select", { value: a.kind, onChange: (h) => b((v) => {
                  v.assets[o].kind = h.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ d("option", { children: "image" }),
                  /* @__PURE__ */ d("option", { children: "video" }),
                  /* @__PURE__ */ d("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ d("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ d("input", { value: a.path, onInput: (h) => b((v) => {
                  v.assets[o].path = h.currentTarget.value;
                }) }),
                /* @__PURE__ */ d("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ d("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ d("input", { type: "file", accept: a.kind === "image" ? "image/*" : a.kind === "video" ? "video/*" : "audio/*", onChange: async (h) => {
                      var N;
                      const v = h.currentTarget, P = (N = v.files) == null ? void 0 : N[0];
                      if (P) {
                        l((C) => ({ ...C, [a.id]: P.name }));
                        try {
                          const C = await lt(n.project.id, a.kind, P);
                          b((I) => {
                            const A = I.assets.find((Fe) => Fe.id === a.id);
                            A && (A.path = C);
                          });
                        } catch (C) {
                          window.alert(String(C));
                        } finally {
                          l((C) => {
                            const I = { ...C };
                            return delete I[a.id], I;
                          }), v.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ d("span", { class: "td-file-name", title: y[a.id] || a.path, children: y[a.id] ? `${c === "zh" ? "上传中" : "Uploading"}: ${y[a.id]}` : be(a.path) || (c === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ d("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ d("input", { type: "number", min: "0", step: "0.1", value: a.durationSeconds ?? "", onInput: (h) => b((v) => {
                  v.assets[o].durationSeconds = h.currentTarget.value ? Number(h.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ d("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ d("input", { type: "number", value: a.fixedOrder, onInput: (h) => b((v) => {
                  v.assets[o].fixedOrder = Number(h.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ d("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ d("input", { value: a.shotIds.join(", "), onInput: (h) => b((v) => {
                  v.assets[o].shotIds = h.currentTarget.value.split(",").map((P) => P.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ d("div", { class: "td-flags", children: [
              /* @__PURE__ */ d("label", { children: [
                /* @__PURE__ */ d("input", { type: "checkbox", checked: a.enabled, onChange: (h) => b((v) => {
                  v.assets[o].enabled = h.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ d("label", { children: [
                /* @__PURE__ */ d("input", { type: "checkbox", checked: a.fixed, onChange: (h) => b((v) => {
                  v.assets[o].fixed = h.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              a.kind === "video" && /* @__PURE__ */ d("label", { children: [
                /* @__PURE__ */ d("input", { type: "checkbox", checked: a.includeVideoAudio, onChange: (h) => b((v) => {
                  v.assets[o].includeVideoAudio = h.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ d("button", { class: "danger", onClick: () => b((h) => {
                h.assets.splice(o, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ d(xe, { asset: a })
        ] }) }, a.id))
      ] }),
      i === "settings" && /* @__PURE__ */ d("section", { class: "td-form settings", children: [
        /* @__PURE__ */ d("label", { children: [
          "Project ID",
          /* @__PURE__ */ d("input", { value: n.project.id, onInput: (a) => b((o) => {
            o.project.id = a.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ d("label", { children: [
          "Project name",
          /* @__PURE__ */ d("input", { value: n.project.name, onInput: (a) => b((o) => {
            o.project.name = a.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ d("label", { children: [
          "Run ID",
          /* @__PURE__ */ d("input", { value: n.project.runId, onInput: (a) => b((o) => {
            o.project.runId = a.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ d("label", { children: [
          "FPS",
          /* @__PURE__ */ d("input", { type: "number", value: n.defaults.fps, onInput: (a) => b((o) => {
            o.defaults.fps = Number(a.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ d("label", { children: [
          "Base seed",
          /* @__PURE__ */ d("input", { type: "number", value: n.defaults.baseSeed, onInput: (a) => b((o) => {
            o.defaults.baseSeed = Number(a.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ d("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ d("textarea", { value: n.promptPrefix, onInput: (a) => b((o) => {
            o.promptPrefix = a.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ d("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ d("textarea", { value: n.promptSuffix, onInput: (a) => b((o) => {
            o.promptSuffix = a.currentTarget.value;
          }) })
        ] })
      ] })
    ] })
  ] });
}
function at(t, e) {
  const r = document.getElementById("theodore-director-modal");
  if (r) {
    r.focus();
    return;
  }
  const n = document.createElement("div");
  n.id = "theodore-director-modal", n.className = "td-modal", n.tabIndex = -1, document.body.append(n);
  const s = (_) => {
    _.key === "Escape" && i();
  }, i = () => {
    document.removeEventListener("keydown", s), ce(null, n), n.remove();
  };
  document.addEventListener("keydown", s), ce(/* @__PURE__ */ d(dt, { initial: t, onSave: (_) => {
    e(_), i();
  }, onClose: i }), n), n.focus();
}
const st = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:1fr auto;gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-card div{grid-column:2;grid-row:1/3}.td-shot-card button{padding:3px 6px}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form textarea{resize:vertical}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shot-media-name{padding:8px 10px;color:var(--td-text);font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:left}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}", we = "theodore-director-styles";
function ct() {
  if (document.getElementById(we)) return;
  const t = document.createElement("style");
  t.id = we, t.textContent = st, document.head.append(t);
}
ct();
const _t = "/scripts/app.js";
import(
  /* @vite-ignore */
  _t
).then(({ app: t }) => {
  t.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(e, r) {
      if (r.name !== "TheodoreDirector_Project") return;
      const n = e.prototype.onNodeCreated;
      e.prototype.onNodeCreated = function() {
        var i, _;
        n == null || n.apply(this);
        const s = (i = this.widgets) == null ? void 0 : i.find((u) => u.name === "plan_json");
        s && (s.type = "hidden", s.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          try {
            const u = JSON.parse(String(s.value));
            at(u, (p) => {
              var c, m;
              s.value = JSON.stringify(p, null, 2), this.setDirtyCanvas(!0, !0), (m = (c = t.graph) == null ? void 0 : c.setDirtyCanvas) == null || m.call(c, !0, !0);
            });
          } catch (u) {
            window.alert(`Theodore Director: ${u instanceof Error ? u.message : String(u)}`);
          }
        }), this.size = [Math.max(((_ = this.size) == null ? void 0 : _[0]) ?? 300, 360), 110]);
      };
    }
  });
});
