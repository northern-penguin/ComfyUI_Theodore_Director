var re, C, He, L, be, Re, Le, ie, K, q, Fe, pe, ae, le, X = {}, ee = [], ot = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ne = Array.isArray;
function R(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function ue(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function it(t, e, r) {
  var n, l, i, c = {};
  for (i in e) i == "key" ? n = e[i] : i == "ref" ? l = e[i] : c[i] = e[i];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? re.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (i in t.defaultProps) c[i] === void 0 && (c[i] = t.defaultProps[i]);
  return Y(t, c, n, l, null);
}
function Y(t, e, r, n, l) {
  var i = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: l ?? ++He, __i: -1, __u: 0 };
  return l == null && C.vnode != null && C.vnode(i), i;
}
function oe(t) {
  return t.children;
}
function Q(t, e) {
  this.props = t, this.context = e;
}
function M(t, e) {
  if (e == null) return t.__ ? M(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) return r.__e;
  return typeof t.type == "function" ? M(t) : null;
}
function dt(t) {
  if (t.__P && t.__d) {
    var e = t.__v, r = e.__e, n = [], l = [], i = R({}, e);
    i.__v = e.__v + 1, C.vnode && C.vnode(i), _e(t.__P, i, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [r] : null, n, r ?? M(e), !!(32 & e.__u), l), i.__v = e.__v, i.__.__k[i.__i] = i, Be(n, i, l), e.__e = e.__ = null, i.__e != r && Oe(i);
  }
}
function Oe(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), Oe(t);
}
function xe(t) {
  (!t.__d && (t.__d = !0) && L.push(t) && !te.__r++ || be != C.debounceRendering) && ((be = C.debounceRendering) || Re)(te);
}
function te() {
  try {
    for (var t, e = 1; L.length; ) L.length > e && L.sort(Le), t = L.shift(), e = L.length, dt(t);
  } finally {
    L.length = te.__r = 0;
  }
}
function Me(t, e, r, n, l, i, c, p, f, s, _) {
  var v, d, m, $, z, P, T = n && n.__k || ee, y = e.length;
  for (f = at(r, e, T, f, y), v = 0; v < y; v++) (m = r.__k[v]) != null && (d = m.__i != -1 && T[m.__i] || X, m.__i = v, P = _e(t, m, d, l, i, c, p, f, s, _), $ = m.__e, m.ref && d.ref != m.ref && (d.ref && he(d.ref, null, m), _.push(m.ref, m.__c || $, m)), z == null && $ != null && (z = $), 4 & m.__u ? (f = Ve(m, f, t), d.__e && (d.__e = null)) : typeof m.type == "function" && P !== void 0 ? f = P : $ && (f = $.nextSibling), m.__u &= -7);
  return r.__e = z, f;
}
function at(t, e, r, n, l) {
  var i, c, p, f, s, _ = r.length, v = _, d = 0;
  for (t.__k = new Array(l), i = 0; i < l; i++) (c = e[i]) != null && typeof c != "boolean" && typeof c != "function" ? (typeof c == "string" || typeof c == "number" || typeof c == "bigint" || c.constructor == String ? c = t.__k[i] = Y(null, c, null, null, null) : ne(c) ? c = t.__k[i] = Y(oe, { children: c }, null, null, null) : c.constructor === void 0 && c.__b > 0 ? c = t.__k[i] = Y(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : t.__k[i] = c, f = i + d, c.__ = t, c.__b = t.__b + 1, p = null, (s = c.__i = lt(c, r, f, v)) != -1 && (v--, (p = r[s]) && (p.__u |= 2)), p == null || p.__v == null ? (s == -1 && (l > _ ? d-- : l < _ && d++), typeof c.type != "function" && (c.__u |= 4)) : s != f && (s == f - 1 ? d-- : s == f + 1 ? d++ : (s > f ? d-- : d++, c.__u |= 4))) : t.__k[i] = null;
  if (v) for (i = 0; i < _; i++) (p = r[i]) != null && (2 & p.__u) == 0 && (p.__e == n && (n = M(p)), Je(p, p));
  return n;
}
function Ve(t, e, r) {
  var n, l;
  if (typeof t.type == "function") {
    for (n = t.__k, l = 0; n && l < n.length; l++) n[l] && (n[l].__ = t, e = Ve(n[l], e, r));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = M(t)), e = r.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function lt(t, e, r, n) {
  var l, i, c, p = t.key, f = t.type, s = e[r], _ = s != null && (2 & s.__u) == 0;
  if (s === null && p == null || _ && p == s.key && f == s.type) return r;
  if (n > (_ ? 1 : 0)) {
    for (l = r - 1, i = r + 1; l >= 0 || i < e.length; ) if ((s = e[c = l >= 0 ? l-- : i++]) != null && (2 & s.__u) == 0 && p == s.key && f == s.type) return c;
  }
  return -1;
}
function ye(t, e, r) {
  e[0] == "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || ot.test(e) ? r : r + "px";
}
function G(t, e, r, n, l) {
  var i, c;
  e: if (e == "style") if (typeof r == "string") t.style.cssText = r;
  else {
    if (typeof n == "string" && (t.style.cssText = n = ""), n) for (e in n) r && e in r || ye(t.style, e, "");
    if (r) for (e in r) n && r[e] == n[e] || ye(t.style, e, r[e]);
  }
  else if (e[0] == "o" && e[1] == "n") i = e != (e = e.replace(Fe, "$1")), c = e.toLowerCase(), e = c in t || e == "onFocusOut" || e == "onFocusIn" ? c.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = r, r ? n ? r[q] = n[q] : (r[q] = pe, t.addEventListener(e, i ? le : ae, i)) : t.removeEventListener(e, i ? le : ae, i);
  else {
    if (l == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && r == 1 ? "" : r));
  }
}
function we(t) {
  return function(e) {
    if (this.l) {
      var r = this.l[e.type + t];
      if (e[K] == null) e[K] = pe++;
      else if (e[K] < r[q]) return;
      return r(C.event ? C.event(e) : e);
    }
  };
}
function _e(t, e, r, n, l, i, c, p, f, s) {
  var _, v, d, m, $, z, P, T, y, I, u, w, A, W, F, k, x = e.type;
  if (e.constructor !== void 0) return null;
  128 & r.__u && (f = !!(32 & r.__u), i = [p = e.__e = r.__e]), (_ = C.__b) && _(e);
  e: if (typeof x == "function") {
    v = c.length;
    try {
      if (y = e.props, I = x.prototype && x.prototype.render, u = (_ = x.contextType) && n[_.__c], w = _ ? u ? u.props.value : _.__ : n, r.__c ? T = (d = e.__c = r.__c).__ = d.__E : (I ? e.__c = d = new x(y, w) : (e.__c = d = new Q(y, w), d.constructor = x, d.render = ct), u && u.sub(d), d.state || (d.state = {}), d.__n = n, m = d.__d = !0, d.__h = [], d._sb = []), I && d.__s == null && (d.__s = d.state), I && x.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = R({}, d.__s)), R(d.__s, x.getDerivedStateFromProps(y, d.__s))), $ = d.props, z = d.state, d.__v = e, m) I && x.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), I && d.componentDidMount != null && d.__h.push(d.componentDidMount);
      else {
        if (I && x.getDerivedStateFromProps == null && y !== $ && d.componentWillReceiveProps != null && d.componentWillReceiveProps(y, w), e.__v == r.__v || !d.__e && d.shouldComponentUpdate != null && d.shouldComponentUpdate(y, d.__s, w) === !1) {
          e.__v != r.__v && (d.props = y, d.state = d.__s, d.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.some(function(E) {
            E && (E.__ = e);
          }), ee.push.apply(d.__h, d._sb), d._sb = [], d.__h.length && c.push(d), p = M(r);
          break e;
        }
        d.componentWillUpdate != null && d.componentWillUpdate(y, d.__s, w), I && d.componentDidUpdate != null && d.__h.push(function() {
          d.componentDidUpdate($, z, P);
        });
      }
      if (d.context = w, d.props = y, d.__P = t, d.__e = !1, A = C.__r, W = 0, I) d.state = d.__s, d.__d = !1, A && A(e), _ = d.render(d.props, d.state, d.context), ee.push.apply(d.__h, d._sb), d._sb = [];
      else do
        d.__d = !1, A && A(e), _ = d.render(d.props, d.state, d.context), d.state = d.__s;
      while (d.__d && ++W < 25);
      d.state = d.__s, d.getChildContext != null && (n = R(R({}, n), d.getChildContext())), I && !m && d.getSnapshotBeforeUpdate != null && (P = d.getSnapshotBeforeUpdate($, z)), F = _ != null && _.type === oe && _.key == null ? qe(_.props.children) : _, p = Me(t, ne(F) ? F : [F], e, r, n, l, i, c, p, f, s), d.base = e.__e, e.__u &= -161, d.__h.length && c.push(d), T && (d.__E = d.__ = null);
    } catch (E) {
      if (c.length = v, e.__v = null, f || i != null) {
        if (E.then) {
          for (e.__u |= f ? 160 : 128; p && p.nodeType == 8 && p.nextSibling; ) p = p.nextSibling;
          i != null && (i[i.indexOf(p)] = null), e.__e = p;
        } else if (i != null) for (k = i.length; k--; ) ue(i[k]);
      } else e.__e = r.__e;
      e.__k == null && (e.__k = r.__k || []), E.then || We(e), C.__e(E, e, r);
    }
  } else i == null && e.__v == r.__v ? (e.__k = r.__k, e.__e = r.__e) : p = e.__e = st(r.__e, e, r, n, l, i, c, f, s);
  return (_ = C.diffed) && _(e), 128 & e.__u ? void 0 : p;
}
function We(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(We));
}
function Be(t, e, r) {
  for (var n = 0; n < r.length; n++) he(r[n], r[++n], r[++n]);
  C.__c && C.__c(e, t), t.some(function(l) {
    try {
      t = l.__h, l.__h = [], t.some(function(i) {
        i.call(l);
      });
    } catch (i) {
      C.__e(i, l.__v);
    }
  });
}
function qe(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : ne(t) ? t.map(qe) : t.constructor !== void 0 ? null : R({}, t);
}
function st(t, e, r, n, l, i, c, p, f) {
  var s, _, v, d, m, $, z, P = r.props || X, T = e.props, y = e.type;
  if (y == "svg" ? l = "http://www.w3.org/2000/svg" : y == "math" ? l = "http://www.w3.org/1998/Math/MathML" : l || (l = "http://www.w3.org/1999/xhtml"), i != null) {
    for (s = 0; s < i.length; s++) if ((m = i[s]) && "setAttribute" in m == !!y && (y ? m.localName == y : m.nodeType == 3)) {
      t = m, i[s] = null;
      break;
    }
  }
  if (t == null) {
    if (y == null) return document.createTextNode(T);
    t = document.createElementNS(l, y, T.is && T), p && (C.__m && C.__m(e, i), p = !1), i = null;
  }
  if (y == null) P === T || p && t.data == T || (t.data = T);
  else {
    if (i = y == "textarea" && T.defaultValue != null ? null : i && re.call(t.childNodes), !p && i != null) for (P = {}, s = 0; s < t.attributes.length; s++) P[(m = t.attributes[s]).name] = m.value;
    for (s in P) m = P[s], s == "dangerouslySetInnerHTML" ? v = m : s == "children" || s in T || s == "value" && "defaultValue" in T || s == "checked" && "defaultChecked" in T || G(t, s, null, m, l);
    for (s in T) m = T[s], s == "children" ? d = m : s == "dangerouslySetInnerHTML" ? _ = m : s == "value" ? $ = m : s == "checked" ? z = m : p && typeof m != "function" || P[s] === m || G(t, s, m, P[s], l);
    if (_) p || v && (_.__html == v.__html || _.__html == t.innerHTML) || (t.innerHTML = _.__html), e.__k = [];
    else if (v && (t.innerHTML = ""), Me(e.type == "template" ? t.content : t, ne(d) ? d : [d], e, r, n, y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : l, i, c, i ? i[0] : r.__k && M(r, 0), p, f), i != null) for (s = i.length; s--; ) ue(i[s]);
    p && y != "textarea" || (s = "value", y == "progress" && $ == null ? t.removeAttribute("value") : $ != null && ($ !== t[s] || y == "progress" && !$ || y == "option" && $ != P[s]) && G(t, s, $, P[s], l), s = "checked", z != null && z != t[s] && G(t, s, z, P[s], l));
  }
  return t;
}
function he(t, e, r) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (l) {
    C.__e(l, r);
  }
}
function Je(t, e, r) {
  var n, l;
  if (C.unmount && C.unmount(t), (n = t.ref) && (n.current && n.current != t.__e || he(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      C.__e(i, e);
    }
    n.base = n.__P = n.__n = null;
  }
  if (n = t.__k) for (l = 0; l < n.length; l++) n[l] && Je(n[l], e, r || typeof t.type != "function");
  r || ue(t.__e), t.__c = t.__ = t.__e = void 0;
}
function ct(t, e, r) {
  return this.constructor(t, r);
}
function ke(t, e, r) {
  var n, l, i, c;
  e == document && (e = document.documentElement), C.__ && C.__(t, e), l = (n = !1) ? null : e.__k, i = [], c = [], _e(e, t = e.__k = it(oe, null, [t]), l || X, X, e.namespaceURI, l ? null : e.firstChild ? re.call(e.childNodes) : null, i, l ? l.__e : e.firstChild, n, c), Be(i, t, c), t.props.children = null;
}
re = ee.slice, C = { __e: function(t, e, r, n) {
  for (var l, i, c; e = e.__; ) if ((l = e.__c) && !l.__) try {
    if ((i = l.constructor) && i.getDerivedStateFromError != null && (l.setState(i.getDerivedStateFromError(t)), c = l.__d), l.componentDidCatch != null && (l.componentDidCatch(t, n || {}), c = l.__d), c) return l.__E = l;
  } catch (p) {
    t = p;
  }
  throw t;
} }, He = 0, Q.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = R({}, this.state), typeof t == "function" && (t = t(R({}, r), this.props)), t && R(r, t), t != null && this.__v && (e && this._sb.push(e), xe(this));
}, Q.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), xe(this));
}, Q.prototype.render = oe, L = [], Re = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Le = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, te.__r = 0, ie = Math.random().toString(8), K = "__d" + ie, q = "__a" + ie, Fe = /(PointerCapture)$|Capture$/i, pe = 0, ae = we(!1), le = we(!0);
var pt = 0;
function o(t, e, r, n, l, i) {
  e || (e = {});
  var c, p, f = e;
  if ("ref" in f) for (p in f = {}, e) p == "ref" ? c = e[p] : f[p] = e[p];
  var s = { type: t, props: f, key: r, ref: c, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --pt, __i: -1, __u: 0, __source: l, __self: i };
  if (typeof t == "function" && (c = t.defaultProps)) for (p in c) f[p] === void 0 && (f[p] = c[p]);
  return C.vnode && C.vnode(s), s;
}
var J, j, de, Se, se = 0, Ge = [], N = C, $e = N.__b, Te = N.__r, Ce = N.diffed, Ie = N.__c, Pe = N.unmount, je = N.__;
function fe(t, e) {
  N.__h && N.__h(j, t, se || e), se = 0;
  var r = j.__H || (j.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function U(t) {
  return se = 1, ut(Ye, t);
}
function ut(t, e, r) {
  var n = fe(J++, 2);
  if (n.t = t, !n.__c && (n.__ = [Ye(void 0, e), function(p) {
    var f = n.__N ? n.__N[0] : n.__[0], s = n.t(f, p);
    f !== s && (n.__N = [s, n.__[1]], n.__c.setState({}));
  }], n.__c = j, !j.__f)) {
    var l = function(p, f, s) {
      if (!n.__c.__H) return !0;
      var _ = !1, v = n.__c.props !== p;
      if (n.__c.__H.__.some(function(m) {
        if (m.__N) {
          _ = !0;
          var $ = m.__[0];
          m.__ = m.__N, m.__N = void 0, $ !== m.__[0] && (v = !0);
        }
      }), i) {
        var d = i.call(this, p, f, s);
        return _ ? d || v : d;
      }
      return !_ || v;
    };
    j.__f = !0;
    var i = j.shouldComponentUpdate, c = j.componentWillUpdate;
    j.componentWillUpdate = function(p, f, s) {
      if (this.__e) {
        var _ = i;
        i = void 0, l(p, f, s), i = _;
      }
      c && c.call(this, p, f, s);
    }, j.shouldComponentUpdate = l;
  }
  return n.__N || n.__;
}
function _t(t, e) {
  var r = fe(J++, 3);
  !N.__s && Ke(r.__H, e) && (r.__ = t, r.u = e, j.__H.__h.push(r));
}
function ht(t, e) {
  var r = fe(J++, 7);
  return Ke(r.__H, e) && (r.__ = t(), r.__H = e, r.__h = t), r.__;
}
function ft() {
  for (var t; t = Ge.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(Z), e.__h.some(ce), e.__h = [];
    } catch (r) {
      e.__h = [], N.__e(r, t.__v);
    }
  }
}
N.__b = function(t) {
  j = null, $e && $e(t);
}, N.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), je && je(t, e);
}, N.__r = function(t) {
  Te && Te(t), J = 0;
  var e = (j = t.__c).__H;
  e && (de === j ? (e.__h = [], j.__h = [], e.__.some(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (e.__h.some(Z), e.__h.some(ce), e.__h = [], J = 0)), de = j;
}, N.diffed = function(t) {
  Ce && Ce(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Ge.push(e) !== 1 && Se === N.requestAnimationFrame || ((Se = N.requestAnimationFrame) || mt)(ft)), e.__H.__.some(function(r) {
    r.u && (r.__H = r.u, r.u = void 0);
  })), de = j = null;
}, N.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.some(Z), r.__h = r.__h.filter(function(n) {
        return !n.__ || ce(n);
      });
    } catch (n) {
      e.some(function(l) {
        l.__h && (l.__h = []);
      }), e = [], N.__e(n, r.__v);
    }
  }), Ie && Ie(t, e);
}, N.unmount = function(t) {
  Pe && Pe(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.some(function(n) {
    try {
      Z(n);
    } catch (l) {
      e = l;
    }
  }), r.__H = void 0, e && N.__e(e, r.__v));
};
var Ne = typeof requestAnimationFrame == "function";
function mt(t) {
  var e, r = function() {
    clearTimeout(n), Ne && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(r, 35);
  Ne && (e = requestAnimationFrame(r));
}
function Z(t) {
  var e = j, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), j = e;
}
function ce(t) {
  var e = j;
  t.__c = t.__(), j = e;
}
function Ke(t, e) {
  return !t || t.length !== e.length || e.some(function(r, n) {
    return r !== t[n];
  });
}
function Ye(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const gt = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function O(t, e) {
  return gt[t][e];
}
function Qe(t, e) {
  const r = t.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!r || r.startsWith("/") || /^[A-Za-z]:\//.test(r)) return null;
  const n = r.split("/").filter(Boolean), l = n.pop();
  if (!l || n.some((c) => c === "..")) return null;
  const i = new URLSearchParams({ filename: l, type: e });
  return n.length && i.set("subfolder", n.join("/")), `/view?${i.toString()}`;
}
function vt(t) {
  return Qe(t, "input");
}
function ze(t) {
  return t.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function Ae({ asset: t, compact: e = !1 }) {
  const r = vt(t.path), n = `td-media-preview ${e ? "compact" : ""}`;
  return r ? t.kind === "image" ? /* @__PURE__ */ o("div", { class: n, children: /* @__PURE__ */ o("img", { src: r, alt: t.alias, loading: "lazy" }) }) : t.kind === "video" ? /* @__PURE__ */ o("div", { class: n, children: /* @__PURE__ */ o("video", { src: r, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ o("div", { class: n, children: /* @__PURE__ */ o("audio", { src: r, controls: !0, preload: "metadata" }) }) : t.path ? /* @__PURE__ */ o("div", { class: `${n} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ o("div", { class: `${n} empty`, children: "尚未选择素材 / No media selected" });
}
const Ee = /\{\{ref:([^{}]+)}}/g;
function Ze(t, e) {
  const r = [], n = /* @__PURE__ */ new Map();
  for (const u of t.assets)
    u.enabled && (!u.shotIds.length || u.shotIds.includes(e.id)) && !e.disabledAssetIds.includes(u.id) && n.set(u.alias, u);
  const l = [t.promptPrefix, e.prompt, t.promptSuffix].filter(Boolean).join(`
`), i = [...l.matchAll(Ee)].map((u) => u[1].trim()), c = [], p = /* @__PURE__ */ new Set(), f = (u) => {
    p.has(u.id) || (p.add(u.id), c.push(u));
  };
  [...n.values()].filter((u) => u.fixed).sort((u, w) => u.fixedOrder - w.fixedOrder || u.alias.localeCompare(w.alias)).forEach(f);
  for (const u of i) {
    const w = u.endsWith(".audio") ? u.slice(0, -6) : u, A = n.get(w);
    if (!A) {
      r.push(`未找到或已禁用素材：${u}`);
      continue;
    }
    u.endsWith(".audio") && (A.kind !== "video" || !A.includeVideoAudio) && r.push(`视频伴音未启用：${u}`), f(A);
  }
  const s = c.filter((u) => u.kind === "image"), _ = c.filter((u) => u.kind === "video"), v = _.filter((u) => u.includeVideoAudio), d = c.filter((u) => u.kind === "audio"), m = v.length + d.length, $ = s.length + _.length + d.length;
  s.length > 9 && r.push(`参考图 ${s.length}/9，超出 H3 上限`), _.length > 3 && r.push(`参考视频 ${_.length}/3，超出 H3 上限`), m > 3 && r.push(`有效音频 ${m}/3，超出 H3 总上限`), $ > 12 && r.push(`混合文件 ${$}/12，超出 H3 上限`), m && !s.length && !_.length && r.push("音频参考不能单独使用");
  const z = _.filter((u) => typeof u.durationSeconds == "number");
  for (const u of _) (u.durationSeconds == null || u.durationSeconds < 2 || u.durationSeconds > 15) && r.push(`视频 ${u.alias} 的时长必须为 2–15 秒`);
  z.reduce((u, w) => u + (w.durationSeconds ?? 0), 0) > 15 && r.push("参考视频总时长超过 15 秒");
  const P = [...v.map((u) => u.audioDurationSeconds ?? u.durationSeconds), ...d.map((u) => u.durationSeconds)];
  P.some((u) => u == null || u < 2 || u > 15) && r.push("每路有效音频时长必须为 2–15 秒"), P.reduce((u, w) => u + (w ?? 0), 0) > 15 && r.push("有效音频总时长超过 15 秒");
  const T = /* @__PURE__ */ new Map();
  s.forEach((u, w) => T.set(u.alias, `<Picture ${w + 1}>`)), _.forEach((u, w) => T.set(u.alias, `<Video ${w + 1}>`)), v.forEach((u, w) => T.set(`${u.alias}.audio`, `<Audio ${w + 1}>`)), d.forEach((u, w) => T.set(u.alias, `<Audio ${v.length + w + 1}>`));
  const y = l.replace(Ee, (u, w) => T.get(w.trim()) ?? u), I = [...T.entries()].map(([u, w]) => ({ label: w, alias: u, kind: w.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: y, errors: r, slots: I, mixedFiles: $, audioCount: m };
}
function bt(t) {
  var l, i, c, p, f, s;
  const e = [];
  (i = (l = t.project) == null ? void 0 : l.name) != null && i.trim() || e.push("Project name 不能为空"), (p = (c = t.project) == null ? void 0 : c.runId) != null && p.trim() || e.push("Run ID 不能为空"), (!Array.isArray(t.shots) || !t.shots.some((_) => _.enabled)) && e.push("至少需要一个启用分镜");
  const r = /* @__PURE__ */ new Set();
  for (const _ of t.shots ?? [])
    (!((f = _.id) != null && f.trim()) || r.has(_.id)) && e.push(`分镜 ID 为空或重复：${_.id || "(空)"}`), r.add(_.id), _.durationSeconds > 0 || e.push(`分镜 ${_.id} 的时长必须大于 0`);
  const n = /* @__PURE__ */ new Set();
  for (const _ of t.assets ?? []) {
    const v = (s = _.alias) == null ? void 0 : s.toLocaleLowerCase();
    (!_.alias || /[\s{}]/.test(_.alias) || _.alias.endsWith(".audio") || n.has(v)) && e.push(`素材别名无效或重复：${_.alias || "(空)"}`), n.add(v), _.enabled && !_.path && e.push(`素材 ${_.alias} 尚未选择文件`);
  }
  for (const _ of t.shots.filter((v) => v.enabled)) e.push(...Ze(t, _).errors.map((v) => `${_.title}: ${v}`));
  return [...new Set(e)];
}
const Xe = (t) => `${t}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, et = (t) => JSON.parse(JSON.stringify(t)), xt = { image: "图片", video: "视频", audio: "音频" };
function De(t) {
  var r;
  const e = et(t);
  return e.schemaVersion = 3, (r = e.project.id) != null && r.trim() || (e.project.id = Xe("project")), e.shots = e.shots.map((n) => ({ ...n, latentRelay: n.latentRelay ?? !0 })), e;
}
function yt(t) {
  return t.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function wt(t) {
  return { id: `shot_${String(t + 1).padStart(3, "0")}`, title: `Shot ${t + 1}`, prompt: "", negativePrompt: "", durationSeconds: 5, enabled: !0, latentRelay: !0, seed: null, disabledAssetIds: [] };
}
function kt(t) {
  const e = Xe(t);
  return { id: e, alias: e, kind: t, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: t === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function St(t, e, r) {
  const n = new FormData();
  n.append("projectName", t), n.append("kind", e), n.append("file", r);
  const l = await fetch("/theodore-director/v1/assets", { method: "POST", body: n }), i = await l.json();
  if (!l.ok || !i.path) throw new Error(i.error || `HTTP ${l.status}`);
  return i.path;
}
async function $t(t, e, r) {
  const n = new URLSearchParams({
    projectName: t.project.name,
    runId: t.project.runId,
    shotId: e.id,
    activeIndex: String(r)
  }), l = await fetch(`/theodore-director/v1/generated-video?${n.toString()}`), i = await l.json();
  if (!l.ok) throw new Error(i.error || `HTTP ${l.status}`);
  return i;
}
async function Tt(t) {
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
function Ct({ initial: t, onSave: e, onClose: r }) {
  const [n, l] = U(() => De(t)), [i, c] = U("shots"), [p, f] = U(0), [s, _] = U(() => navigator.language.startsWith("zh") ? "zh" : "en"), [v, d] = U({}), [m, $] = U(!1), [z, P] = U(!0), [T, y] = U(0), [I, u] = U({ found: !1 }), [w, A] = U(!1), [W, F] = U(""), k = n.shots[Math.min(p, n.shots.length - 1)], x = ht(() => k ? Ze(n, k) : null, [n, k]), E = k != null && k.enabled ? n.shots.slice(0, p).filter((a) => a.enabled).length : -1, me = I.path ? Qe(I.path, "output") : null, S = (a) => l((h) => {
    const g = et(h);
    return a(g), g;
  }), ge = (a, h) => S((g) => {
    const b = a + h;
    b < 0 || b >= g.shots.length || ([g.shots[a], g.shots[b]] = [g.shots[b], g.shots[a]], f(b));
  }), tt = () => {
    const a = URL.createObjectURL(new Blob([JSON.stringify(n, null, 2)], { type: "application/json" })), h = document.createElement("a");
    h.href = a, h.download = `${yt(n.project.name)}.director.json`, h.click(), URL.revokeObjectURL(a);
  }, rt = () => {
    const a = bt(n);
    if (a.length) {
      window.alert(`计划未通过校验：

${a.join(`
`)}`);
      return;
    }
    e(n);
  };
  return _t(() => {
    let a = !1;
    return !(k != null && k.enabled) || E < 0 ? (u({ found: !1 }), A(!1), () => {
      a = !0;
    }) : (A(!0), $t(n, k, E).then((h) => {
      a || u(h);
    }).catch((h) => {
      a || u({ found: !1, error: String(h) });
    }).finally(() => {
      a || A(!1);
    }), () => {
      a = !0;
    });
  }, [n.project.name, n.project.runId, k == null ? void 0 : k.id, k == null ? void 0 : k.enabled, E, T]), /* @__PURE__ */ o("div", { class: "td-shell", children: [
    /* @__PURE__ */ o("header", { children: [
      /* @__PURE__ */ o("h1", { children: O(s, "title") }),
      /* @__PURE__ */ o("div", { class: "td-actions", children: [
        /* @__PURE__ */ o("button", { onClick: tt, children: "导出 / Export" }),
        /* @__PURE__ */ o("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ o("input", { type: "file", accept: "application/json,.json", onChange: async (a) => {
            var g;
            const h = (g = a.currentTarget.files) == null ? void 0 : g[0];
            if (h)
              try {
                const b = JSON.parse(await h.text());
                if (!b.project || !Array.isArray(b.shots) || !Array.isArray(b.assets)) throw new Error("不是有效的 Theodore Director Plan");
                l(De(b)), f(0);
              } catch (b) {
                window.alert(String(b));
              }
          } })
        ] }),
        /* @__PURE__ */ o("button", { onClick: () => _(s === "zh" ? "en" : "zh"), children: s === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ o("button", { class: "primary", onClick: rt, children: O(s, "save") }),
        /* @__PURE__ */ o("button", { onClick: r, children: O(s, "close") })
      ] })
    ] }),
    /* @__PURE__ */ o("nav", { children: ["shots", "assets", "settings"].map((a) => /* @__PURE__ */ o("button", { class: i === a ? "active" : "", onClick: () => c(a), children: O(s, a) })) }),
    /* @__PURE__ */ o("main", { children: [
      i === "shots" && /* @__PURE__ */ o("div", { class: "td-shots", children: [
        /* @__PURE__ */ o("aside", { children: [
          n.shots.map((a, h) => /* @__PURE__ */ o("div", { class: `td-shot-card ${h === p ? "selected" : ""}`, onClick: () => f(h), children: [
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
                g.stopPropagation(), ge(h, -1);
              }, children: "↑" }),
              /* @__PURE__ */ o("button", { onClick: (g) => {
                g.stopPropagation(), ge(h, 1);
              }, children: "↓" })
            ] })
          ] })),
          /* @__PURE__ */ o("button", { class: "wide", onClick: () => S((a) => {
            a.shots.push(wt(a.shots.length)), f(a.shots.length - 1);
          }), children: [
            "＋ ",
            O(s, "addShot")
          ] })
        ] }),
        k && /* @__PURE__ */ o("section", { class: "td-form", children: [
          /* @__PURE__ */ o("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ o("label", { children: [
              "ID",
              /* @__PURE__ */ o("input", { value: k.id, onInput: (a) => S((h) => {
                h.shots[p].id = a.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ o("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ o("input", { value: k.title, onInput: (a) => S((h) => {
                h.shots[p].title = a.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ o("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ o("input", { type: "number", min: "0.1", step: "0.1", value: k.durationSeconds, onInput: (a) => S((h) => {
                h.shots[p].durationSeconds = Number(a.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ o("label", { class: "td-shot-enabled", children: [
              /* @__PURE__ */ o("input", { type: "checkbox", checked: k.enabled, onChange: (a) => S((h) => {
                h.shots[p].enabled = a.currentTarget.checked;
              }) }),
              /* @__PURE__ */ o("span", { children: "启用 / Enabled" })
            ] }),
            /* @__PURE__ */ o("label", { class: "td-shot-enabled", title: E === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
              /* @__PURE__ */ o("input", { type: "checkbox", checked: k.latentRelay, onChange: (a) => S((h) => {
                h.shots[p].latentRelay = a.currentTarget.checked;
              }) }),
              /* @__PURE__ */ o("span", { children: [
                "latent接力 / Relay",
                E === 0 ? "（首段忽略）" : ""
              ] })
            ] })
          ] }),
          /* @__PURE__ */ o("label", { children: [
            /* @__PURE__ */ o("span", { class: "td-field-label", children: [
              "提示词（使用 ",
              /* @__PURE__ */ o("code", { children: "{{ref:别名}}" }),
              "）"
            ] }),
            /* @__PURE__ */ o("textarea", { rows: 10, value: k.prompt, onInput: (a) => S((h) => {
              h.shots[p].prompt = a.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ o("label", { children: [
            /* @__PURE__ */ o("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ o("textarea", { rows: 3, value: k.negativePrompt, onInput: (a) => S((h) => {
              h.shots[p].negativePrompt = a.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ o("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ o("legend", { children: "本镜头素材 / Shot media" }),
            n.assets.map((a) => {
              const h = !k.disabledAssetIds.includes(a.id), g = ze(a.path) || a.alias, b = `{{ref:${a.alias}}}`;
              return /* @__PURE__ */ o("div", { class: `td-shot-media-card ${h ? "" : "disabled"}`, children: [
                /* @__PURE__ */ o("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ o(Ae, { asset: a, compact: !0 }),
                  /* @__PURE__ */ o("span", { class: "td-shot-media-kind", children: s === "zh" ? xt[a.kind] : a.kind }),
                  /* @__PURE__ */ o("label", { class: "td-shot-media-toggle", title: h ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ o("input", { type: "checkbox", checked: h, onChange: (D) => S((B) => {
                    const H = B.shots[p].disabledAssetIds;
                    B.shots[p].disabledAssetIds = D.currentTarget.checked ? H.filter((V) => V !== a.id) : [.../* @__PURE__ */ new Set([...H, a.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ o("button", { class: `td-shot-media-name ${W === a.id ? "copied" : ""}`, title: `${g}
${s === "zh" ? "点击复制" : "Click to copy"} ${b}`, onClick: async () => {
                  try {
                    await Tt(b), F(a.id), window.setTimeout(() => F((D) => D === a.id ? "" : D), 1400);
                  } catch (D) {
                    window.alert(`${s === "zh" ? "复制失败" : "Copy failed"}: ${String(D)}`);
                  }
                }, children: [
                  /* @__PURE__ */ o("span", { children: g }),
                  W === a.id && /* @__PURE__ */ o("em", { children: s === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, a.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ o("aside", { class: "td-preview", children: [
          /* @__PURE__ */ o("details", { open: m, onToggle: (a) => $(a.currentTarget.open), children: [
            /* @__PURE__ */ o("summary", { children: [
              /* @__PURE__ */ o("strong", { children: O(s, "preview") }),
              /* @__PURE__ */ o("span", { class: "td-summary-counts", children: [
                "Picture ",
                (x == null ? void 0 : x.slots.filter((a) => a.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (x == null ? void 0 : x.slots.filter((a) => a.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (x == null ? void 0 : x.audioCount) ?? 0,
                "/3 · Files ",
                (x == null ? void 0 : x.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ o("div", { class: "td-preview-body", children: [
              x != null && x.errors.length ? /* @__PURE__ */ o("ul", { class: "errors", children: x.errors.map((a) => /* @__PURE__ */ o("li", { children: a })) }) : /* @__PURE__ */ o("p", { class: "ok", children: O(s, "noErrors") }),
              /* @__PURE__ */ o("ol", { children: x == null ? void 0 : x.slots.map((a) => /* @__PURE__ */ o("li", { children: [
                /* @__PURE__ */ o("code", { children: a.label }),
                " ← ",
                a.alias
              ] })) }),
              /* @__PURE__ */ o("pre", { children: x == null ? void 0 : x.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ o("details", { open: z, onToggle: (a) => P(a.currentTarget.open), children: [
            /* @__PURE__ */ o("summary", { children: [
              /* @__PURE__ */ o("strong", { children: s === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ o("span", { class: `td-result-state ${I.found ? "found" : ""}`, children: w ? s === "zh" ? "查询中" : "Checking" : I.found ? s === "zh" ? "已生成" : "Found" : s === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ o("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ o("div", { class: "td-result-actions", children: /* @__PURE__ */ o("button", { onClick: () => y((a) => a + 1), children: [
                "↻ ",
                s === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              w ? /* @__PURE__ */ o("div", { class: "td-result-empty", children: s === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : I.error ? /* @__PURE__ */ o("div", { class: "td-result-empty errors", children: s === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again." }) : I.found && me ? /* @__PURE__ */ o("div", { class: "td-generated-video", children: [
                /* @__PURE__ */ o("video", { src: me, controls: !0, preload: "metadata", playsInline: !0 }, I.path),
                /* @__PURE__ */ o("div", { class: "td-generated-meta", title: I.path, children: [
                  I.path,
                  I.bytes ? ` · ${(I.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                ] })
              ] }) : /* @__PURE__ */ o("div", { class: "td-result-empty", children: s === "zh" ? "未在预期路径找到本段视频" : "No video found at the expected path" })
            ] })
          ] })
        ] })
      ] }),
      i === "assets" && /* @__PURE__ */ o("div", { class: "td-assets", children: [
        /* @__PURE__ */ o("div", { class: "td-toolbar", children: ["image", "video", "audio"].map((a) => /* @__PURE__ */ o("button", { onClick: () => S((h) => h.assets.push(kt(a))), children: [
          "＋ ",
          a
        ] })) }),
        n.assets.map((a, h) => /* @__PURE__ */ o("article", { children: /* @__PURE__ */ o("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ o("div", { children: [
            /* @__PURE__ */ o("div", { class: "td-grid", children: [
              /* @__PURE__ */ o("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ o("input", { value: a.alias, onInput: (g) => S((b) => {
                  b.assets[h].alias = g.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ o("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ o("select", { value: a.kind, onChange: (g) => S((b) => {
                  b.assets[h].kind = g.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ o("option", { children: "image" }),
                  /* @__PURE__ */ o("option", { children: "video" }),
                  /* @__PURE__ */ o("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ o("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ o("input", { value: a.path, onInput: (g) => S((b) => {
                  b.assets[h].path = g.currentTarget.value;
                }) }),
                /* @__PURE__ */ o("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ o("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ o("input", { type: "file", accept: a.kind === "image" ? "image/*" : a.kind === "video" ? "video/*" : "audio/*", onChange: async (g) => {
                      var B;
                      const b = g.currentTarget, D = (B = b.files) == null ? void 0 : B[0];
                      if (D) {
                        d((H) => ({ ...H, [a.id]: D.name }));
                        try {
                          const H = await St(n.project.name, a.kind, D);
                          S((V) => {
                            const ve = V.assets.find((nt) => nt.id === a.id);
                            ve && (ve.path = H);
                          });
                        } catch (H) {
                          window.alert(String(H));
                        } finally {
                          d((H) => {
                            const V = { ...H };
                            return delete V[a.id], V;
                          }), b.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ o("span", { class: "td-file-name", title: v[a.id] || a.path, children: v[a.id] ? `${s === "zh" ? "上传中" : "Uploading"}: ${v[a.id]}` : ze(a.path) || (s === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ o("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ o("input", { type: "number", min: "0", step: "0.1", value: a.durationSeconds ?? "", onInput: (g) => S((b) => {
                  b.assets[h].durationSeconds = g.currentTarget.value ? Number(g.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ o("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ o("input", { type: "number", value: a.fixedOrder, onInput: (g) => S((b) => {
                  b.assets[h].fixedOrder = Number(g.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ o("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ o("input", { value: a.shotIds.join(", "), onInput: (g) => S((b) => {
                  b.assets[h].shotIds = g.currentTarget.value.split(",").map((D) => D.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ o("div", { class: "td-flags", children: [
              /* @__PURE__ */ o("label", { children: [
                /* @__PURE__ */ o("input", { type: "checkbox", checked: a.enabled, onChange: (g) => S((b) => {
                  b.assets[h].enabled = g.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ o("label", { children: [
                /* @__PURE__ */ o("input", { type: "checkbox", checked: a.fixed, onChange: (g) => S((b) => {
                  b.assets[h].fixed = g.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              a.kind === "video" && /* @__PURE__ */ o("label", { children: [
                /* @__PURE__ */ o("input", { type: "checkbox", checked: a.includeVideoAudio, onChange: (g) => S((b) => {
                  b.assets[h].includeVideoAudio = g.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ o("button", { class: "danger", onClick: () => S((g) => {
                g.assets.splice(h, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ o(Ae, { asset: a })
        ] }) }, a.id))
      ] }),
      i === "settings" && /* @__PURE__ */ o("section", { class: "td-form settings", children: [
        /* @__PURE__ */ o("label", { children: [
          "Project name",
          /* @__PURE__ */ o("input", { value: n.project.name, onInput: (a) => S((h) => {
            h.project.name = a.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ o("label", { children: [
          "Run ID",
          /* @__PURE__ */ o("input", { value: n.project.runId, onInput: (a) => S((h) => {
            h.project.runId = a.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ o("label", { children: [
          "FPS",
          /* @__PURE__ */ o("input", { type: "number", value: n.defaults.fps, onInput: (a) => S((h) => {
            h.defaults.fps = Number(a.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ o("label", { children: [
          "Base seed",
          /* @__PURE__ */ o("input", { type: "number", value: n.defaults.baseSeed, onInput: (a) => S((h) => {
            h.defaults.baseSeed = Number(a.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ o("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ o("textarea", { value: n.promptPrefix, onInput: (a) => S((h) => {
            h.promptPrefix = a.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ o("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ o("textarea", { value: n.promptSuffix, onInput: (a) => S((h) => {
            h.promptSuffix = a.currentTarget.value;
          }) })
        ] })
      ] })
    ] })
  ] });
}
function It(t, e) {
  const r = document.getElementById("theodore-director-modal");
  if (r) {
    r.focus();
    return;
  }
  const n = document.createElement("div");
  n.id = "theodore-director-modal", n.className = "td-modal", n.tabIndex = -1, document.body.append(n);
  const l = (c) => {
    c.key === "Escape" && i();
  }, i = () => {
    document.removeEventListener("keydown", l), ke(null, n), n.remove();
  };
  document.addEventListener("keydown", l), ke(/* @__PURE__ */ o(Ct, { initial: t, onSave: (c) => {
    e(c), i();
  }, onClose: i }), n), n.focus();
}
const Pt = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:1fr auto;gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-card div{grid-column:2;grid-row:1/3}.td-shot-card button{padding:3px 6px}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.7fr) minmax(120px,1.35fr) 95px 105px minmax(155px,auto)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}", Ue = "theodore-director-styles";
function jt() {
  if (document.getElementById(Ue)) return;
  const t = document.createElement("style");
  t.id = Ue, t.textContent = Pt, document.head.append(t);
}
jt();
const Nt = "/scripts/app.js";
import(
  /* @vite-ignore */
  Nt
).then(({ app: t }) => {
  t.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(e, r) {
      if (r.name !== "TheodoreDirector_Project") return;
      const n = e.prototype.onNodeCreated;
      e.prototype.onNodeCreated = function() {
        var i, c;
        n == null || n.apply(this);
        const l = (i = this.widgets) == null ? void 0 : i.find((p) => p.name === "plan_json");
        l && (l.type = "hidden", l.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          try {
            const p = JSON.parse(String(l.value));
            It(p, (f) => {
              var s, _;
              l.value = JSON.stringify(f, null, 2), this.setDirtyCanvas(!0, !0), (_ = (s = t.graph) == null ? void 0 : s.setDirtyCanvas) == null || _.call(s, !0, !0);
            });
          } catch (p) {
            window.alert(`Theodore Director: ${p instanceof Error ? p.message : String(p)}`);
          }
        }), this.size = [Math.max(((c = this.size) == null ? void 0 : c[0]) ?? 300, 360), 110]);
      };
    }
  });
});
