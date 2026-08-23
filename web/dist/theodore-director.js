var oe, C, Oe, U, we, Me, Ve, le, Y, J, We, _e, pe, ue, ee = {}, te = [], ht = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ie = Array.isArray;
function H(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function fe(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function _t(e, t, r) {
  var n, o, d, s = {};
  for (d in t) d == "key" ? n = t[d] : d == "ref" ? o = t[d] : s[d] = t[d];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? oe.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null) for (d in e.defaultProps) s[d] === void 0 && (s[d] = e.defaultProps[d]);
  return Q(e, s, n, o, null);
}
function Q(e, t, r, n, o) {
  var d = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Oe, __i: -1, __u: 0 };
  return o == null && C.vnode != null && C.vnode(d), d;
}
function de(e) {
  return e.children;
}
function X(e, t) {
  this.props = e, this.context = t;
}
function O(e, t) {
  if (t == null) return e.__ ? O(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? O(e) : null;
}
function ft(e) {
  if (e.__P && e.__d) {
    var t = e.__v, r = t.__e, n = [], o = [], d = H({}, t);
    d.__v = t.__v + 1, C.vnode && C.vnode(d), me(e.__P, d, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [r] : null, n, r ?? O(t), !!(32 & t.__u), o), d.__v = t.__v, d.__.__k[d.__i] = d, Ke(n, d, o), t.__e = t.__ = null, d.__e != r && Be(d);
  }
}
function Be(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), Be(e);
}
function ke(e) {
  (!e.__d && (e.__d = !0) && U.push(e) && !re.__r++ || we != C.debounceRendering) && ((we = C.debounceRendering) || Me)(re);
}
function re() {
  try {
    for (var e, t = 1; U.length; ) U.length > t && U.sort(Ve), e = U.shift(), t = U.length, ft(e);
  } finally {
    U.length = re.__r = 0;
  }
}
function qe(e, t, r, n, o, d, s, u, f, p, c) {
  var x, l, m, $, A, I, T = n && n.__k || te, w = t.length;
  for (f = mt(r, t, T, f, w), x = 0; x < w; x++) (m = r.__k[x]) != null && (l = m.__i != -1 && T[m.__i] || ee, m.__i = x, I = me(e, m, l, o, d, s, u, f, p, c), $ = m.__e, m.ref && l.ref != m.ref && (l.ref && ge(l.ref, null, m), c.push(m.ref, m.__c || $, m)), A == null && $ != null && (A = $), 4 & m.__u ? (f = Je(m, f, e), l.__e && (l.__e = null)) : typeof m.type == "function" && I !== void 0 ? f = I : $ && (f = $.nextSibling), m.__u &= -7);
  return r.__e = A, f;
}
function mt(e, t, r, n, o) {
  var d, s, u, f, p, c = r.length, x = c, l = 0;
  for (e.__k = new Array(o), d = 0; d < o; d++) (s = t[d]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = e.__k[d] = Q(null, s, null, null, null) : ie(s) ? s = e.__k[d] = Q(de, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = e.__k[d] = Q(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : e.__k[d] = s, f = d + l, s.__ = e, s.__b = e.__b + 1, u = null, (p = s.__i = gt(s, r, f, x)) != -1 && (x--, (u = r[p]) && (u.__u |= 2)), u == null || u.__v == null ? (p == -1 && (o > c ? l-- : o < c && l++), typeof s.type != "function" && (s.__u |= 4)) : p != f && (p == f - 1 ? l-- : p == f + 1 ? l++ : (p > f ? l-- : l++, s.__u |= 4))) : e.__k[d] = null;
  if (x) for (d = 0; d < c; d++) (u = r[d]) != null && (2 & u.__u) == 0 && (u.__e == n && (n = O(u)), Qe(u, u));
  return n;
}
function Je(e, t, r) {
  var n, o;
  if (typeof e.type == "function") {
    for (n = e.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = e, t = Je(n[o], t, r));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = O(e)), t = r.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function gt(e, t, r, n) {
  var o, d, s, u = e.key, f = e.type, p = t[r], c = p != null && (2 & p.__u) == 0;
  if (p === null && u == null || c && u == p.key && f == p.type) return r;
  if (n > (c ? 1 : 0)) {
    for (o = r - 1, d = r + 1; o >= 0 || d < t.length; ) if ((p = t[s = o >= 0 ? o-- : d++]) != null && (2 & p.__u) == 0 && u == p.key && f == p.type) return s;
  }
  return -1;
}
function Se(e, t, r) {
  t[0] == "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || ht.test(t) ? r : r + "px";
}
function K(e, t, r, n, o) {
  var d, s;
  e: if (t == "style") if (typeof r == "string") e.style.cssText = r;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (t in n) r && t in r || Se(e.style, t, "");
    if (r) for (t in r) n && r[t] == n[t] || Se(e.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") d = t != (t = t.replace(We, "$1")), s = t.toLowerCase(), t = s in e || t == "onFocusOut" || t == "onFocusIn" ? s.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + d] = r, r ? n ? r[J] = n[J] : (r[J] = _e, e.addEventListener(t, d ? ue : pe, d)) : e.removeEventListener(t, d ? ue : pe, d);
  else {
    if (o == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && r == 1 ? "" : r));
  }
}
function $e(e) {
  return function(t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t[Y] == null) t[Y] = _e++;
      else if (t[Y] < r[J]) return;
      return r(C.event ? C.event(t) : t);
    }
  };
}
function me(e, t, r, n, o, d, s, u, f, p) {
  var c, x, l, m, $, A, I, T, w, j, h, y, E, M, F, V, v = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && (f = !!(32 & r.__u), d = [u = t.__e = r.__e]), (c = C.__b) && c(t);
  e: if (typeof v == "function") {
    x = s.length;
    try {
      if (w = t.props, j = v.prototype && v.prototype.render, h = (c = v.contextType) && n[c.__c], y = c ? h ? h.props.value : c.__ : n, r.__c ? T = (l = t.__c = r.__c).__ = l.__E : (j ? t.__c = l = new v(w, y) : (t.__c = l = new X(w, y), l.constructor = v, l.render = bt), h && h.sub(l), l.state || (l.state = {}), l.__n = n, m = l.__d = !0, l.__h = [], l._sb = []), j && l.__s == null && (l.__s = l.state), j && v.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = H({}, l.__s)), H(l.__s, v.getDerivedStateFromProps(w, l.__s))), $ = l.props, A = l.state, l.__v = t, m) j && v.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), j && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (j && v.getDerivedStateFromProps == null && w !== $ && l.componentWillReceiveProps != null && l.componentWillReceiveProps(w, y), t.__v == r.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(w, l.__s, y) === !1) {
          t.__v != r.__v && (l.props = w, l.state = l.__s, l.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(S) {
            S && (S.__ = t);
          }), te.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && s.push(l), u = O(r);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(w, l.__s, y), j && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate($, A, I);
        });
      }
      if (l.context = y, l.props = w, l.__P = e, l.__e = !1, E = C.__r, M = 0, j) l.state = l.__s, l.__d = !1, E && E(t), c = l.render(l.props, l.state, l.context), te.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, E && E(t), c = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++M < 25);
      l.state = l.__s, l.getChildContext != null && (n = H(H({}, n), l.getChildContext())), j && !m && l.getSnapshotBeforeUpdate != null && (I = l.getSnapshotBeforeUpdate($, A)), F = c != null && c.type === de && c.key == null ? Ye(c.props.children) : c, u = qe(e, ie(F) ? F : [F], t, r, n, o, d, s, u, f, p), l.base = t.__e, t.__u &= -161, l.__h.length && s.push(l), T && (l.__E = l.__ = null);
    } catch (S) {
      if (s.length = x, t.__v = null, f || d != null) {
        if (S.then) {
          for (t.__u |= f ? 160 : 128; u && u.nodeType == 8 && u.nextSibling; ) u = u.nextSibling;
          d != null && (d[d.indexOf(u)] = null), t.__e = u;
        } else if (d != null) for (V = d.length; V--; ) fe(d[V]);
      } else t.__e = r.__e;
      t.__k == null && (t.__k = r.__k || []), S.then || Ge(t), C.__e(S, t, r);
    }
  } else d == null && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : u = t.__e = vt(r.__e, t, r, n, o, d, s, f, p);
  return (c = C.diffed) && c(t), 128 & t.__u ? void 0 : u;
}
function Ge(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Ge));
}
function Ke(e, t, r) {
  for (var n = 0; n < r.length; n++) ge(r[n], r[++n], r[++n]);
  C.__c && C.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(d) {
        d.call(o);
      });
    } catch (d) {
      C.__e(d, o.__v);
    }
  });
}
function Ye(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : ie(e) ? e.map(Ye) : e.constructor !== void 0 ? null : H({}, e);
}
function vt(e, t, r, n, o, d, s, u, f) {
  var p, c, x, l, m, $, A, I = r.props || ee, T = t.props, w = t.type;
  if (w == "svg" ? o = "http://www.w3.org/2000/svg" : w == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), d != null) {
    for (p = 0; p < d.length; p++) if ((m = d[p]) && "setAttribute" in m == !!w && (w ? m.localName == w : m.nodeType == 3)) {
      e = m, d[p] = null;
      break;
    }
  }
  if (e == null) {
    if (w == null) return document.createTextNode(T);
    e = document.createElementNS(o, w, T.is && T), u && (C.__m && C.__m(t, d), u = !1), d = null;
  }
  if (w == null) I === T || u && e.data == T || (e.data = T);
  else {
    if (d = w == "textarea" && T.defaultValue != null ? null : d && oe.call(e.childNodes), !u && d != null) for (I = {}, p = 0; p < e.attributes.length; p++) I[(m = e.attributes[p]).name] = m.value;
    for (p in I) m = I[p], p == "dangerouslySetInnerHTML" ? x = m : p == "children" || p in T || p == "value" && "defaultValue" in T || p == "checked" && "defaultChecked" in T || K(e, p, null, m, o);
    for (p in T) m = T[p], p == "children" ? l = m : p == "dangerouslySetInnerHTML" ? c = m : p == "value" ? $ = m : p == "checked" ? A = m : u && typeof m != "function" || I[p] === m || K(e, p, m, I[p], o);
    if (c) u || x && (c.__html == x.__html || c.__html == e.innerHTML) || (e.innerHTML = c.__html), t.__k = [];
    else if (x && (e.innerHTML = ""), qe(t.type == "template" ? e.content : e, ie(l) ? l : [l], t, r, n, w == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, d, s, d ? d[0] : r.__k && O(r, 0), u, f), d != null) for (p = d.length; p--; ) fe(d[p]);
    u && w != "textarea" || (p = "value", w == "progress" && $ == null ? e.removeAttribute("value") : $ != null && ($ !== e[p] || w == "progress" && !$ || w == "option" && $ != I[p]) && K(e, p, $, I[p], o), p = "checked", A != null && A != e[p] && K(e, p, A, I[p], o));
  }
  return e;
}
function ge(e, t, r) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), n && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    C.__e(o, r);
  }
}
function Qe(e, t, r) {
  var n, o;
  if (C.unmount && C.unmount(e), (n = e.ref) && (n.current && n.current != e.__e || ge(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (d) {
      C.__e(d, t);
    }
    n.base = n.__P = n.__n = null;
  }
  if (n = e.__k) for (o = 0; o < n.length; o++) n[o] && Qe(n[o], t, r || typeof e.type != "function");
  r || fe(e.__e), e.__c = e.__ = e.__e = void 0;
}
function bt(e, t, r) {
  return this.constructor(e, r);
}
function Te(e, t, r) {
  var n, o, d, s;
  t == document && (t = document.documentElement), C.__ && C.__(e, t), o = (n = !1) ? null : t.__k, d = [], s = [], me(t, e = t.__k = _t(de, null, [e]), o || ee, ee, t.namespaceURI, o ? null : t.firstChild ? oe.call(t.childNodes) : null, d, o ? o.__e : t.firstChild, n, s), Ke(d, e, s), e.props.children = null;
}
oe = te.slice, C = { __e: function(e, t, r, n) {
  for (var o, d, s; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((d = o.constructor) && d.getDerivedStateFromError != null && (o.setState(d.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), s = o.__d), s) return o.__E = o;
  } catch (u) {
    e = u;
  }
  throw e;
} }, Oe = 0, X.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = H({}, this.state), typeof e == "function" && (e = e(H({}, r), this.props)), e && H(r, e), e != null && this.__v && (t && this._sb.push(t), ke(this));
}, X.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ke(this));
}, X.prototype.render = de, U = [], Me = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ve = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, re.__r = 0, le = Math.random().toString(8), Y = "__d" + le, J = "__a" + le, We = /(PointerCapture)$|Capture$/i, _e = 0, pe = $e(!1), ue = $e(!0);
var xt = 0;
function i(e, t, r, n, o, d) {
  t || (t = {});
  var s, u, f = t;
  if ("ref" in f) for (u in f = {}, t) u == "ref" ? s = t[u] : f[u] = t[u];
  var p = { type: e, props: f, key: r, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --xt, __i: -1, __u: 0, __source: o, __self: d };
  if (typeof e == "function" && (s = e.defaultProps)) for (u in s) f[u] === void 0 && (f[u] = s[u]);
  return C.vnode && C.vnode(p), p;
}
var G, z, se, Ce, ne = 0, Xe = [], P = C, Ie = P.__b, ze = P.__r, Pe = P.diffed, Ae = P.__c, je = P.unmount, Ee = P.__;
function ve(e, t) {
  P.__h && P.__h(z, e, ne || t), ne = 0;
  var r = z.__H || (z.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function D(e) {
  return ne = 1, yt(tt, e);
}
function yt(e, t, r) {
  var n = ve(G++, 2);
  if (n.t = e, !n.__c && (n.__ = [tt(void 0, t), function(u) {
    var f = n.__N ? n.__N[0] : n.__[0], p = n.t(f, u);
    f !== p && (n.__N = [p, n.__[1]], n.__c.setState({}));
  }], n.__c = z, !z.__f)) {
    var o = function(u, f, p) {
      if (!n.__c.__H) return !0;
      var c = !1, x = n.__c.props !== u;
      if (n.__c.__H.__.some(function(m) {
        if (m.__N) {
          c = !0;
          var $ = m.__[0];
          m.__ = m.__N, m.__N = void 0, $ !== m.__[0] && (x = !0);
        }
      }), d) {
        var l = d.call(this, u, f, p);
        return c ? l || x : l;
      }
      return !c || x;
    };
    z.__f = !0;
    var d = z.shouldComponentUpdate, s = z.componentWillUpdate;
    z.componentWillUpdate = function(u, f, p) {
      if (this.__e) {
        var c = d;
        d = void 0, o(u, f, p), d = c;
      }
      s && s.call(this, u, f, p);
    }, z.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function wt(e, t) {
  var r = ve(G++, 3);
  !P.__s && et(r.__H, t) && (r.__ = e, r.u = t, z.__H.__h.push(r));
}
function kt(e) {
  return ne = 5, Ze(function() {
    return { current: e };
  }, []);
}
function Ze(e, t) {
  var r = ve(G++, 7);
  return et(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__;
}
function St() {
  for (var e; e = Xe.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(Z), t.__h.some(he), t.__h = [];
    } catch (r) {
      t.__h = [], P.__e(r, e.__v);
    }
  }
}
P.__b = function(e) {
  z = null, Ie && Ie(e);
}, P.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ee && Ee(e, t);
}, P.__r = function(e) {
  ze && ze(e), G = 0;
  var t = (z = e.__c).__H;
  t && (se === z ? (t.__h = [], z.__h = [], t.__.some(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.some(Z), t.__h.some(he), t.__h = [], G = 0)), se = z;
}, P.diffed = function(e) {
  Pe && Pe(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Xe.push(t) !== 1 && Ce === P.requestAnimationFrame || ((Ce = P.requestAnimationFrame) || $t)(St)), t.__H.__.some(function(r) {
    r.u && (r.__H = r.u, r.u = void 0);
  })), se = z = null;
}, P.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.some(Z), r.__h = r.__h.filter(function(n) {
        return !n.__ || he(n);
      });
    } catch (n) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], P.__e(n, r.__v);
    }
  }), Ae && Ae(e, t);
}, P.unmount = function(e) {
  je && je(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.some(function(n) {
    try {
      Z(n);
    } catch (o) {
      t = o;
    }
  }), r.__H = void 0, t && P.__e(t, r.__v));
};
var Ne = typeof requestAnimationFrame == "function";
function $t(e) {
  var t, r = function() {
    clearTimeout(n), Ne && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 35);
  Ne && (t = requestAnimationFrame(r));
}
function Z(e) {
  var t = z, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), z = t;
}
function he(e) {
  var t = z;
  e.__c = e.__(), z = t;
}
function et(e, t) {
  return !e || e.length !== t.length || t.some(function(r, n) {
    return r !== e[n];
  });
}
function tt(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const rt = String.raw`\{\{ref:([^{}]+)}}`;
function De() {
  return new RegExp(rt, "g");
}
function nt(e, t) {
  const r = /* @__PURE__ */ new Map();
  for (const n of e.assets)
    n.enabled && n.path.trim() && (!n.shotIds.length || n.shotIds.includes(t.id)) && !t.disabledAssetIds.includes(n.id) && r.set(n.alias, n);
  return r;
}
function ot(e, t, r) {
  const n = r.trim(), o = n.endsWith(".audio"), d = o ? n.slice(0, -6) : n, s = nt(e, t).get(d);
  return s ? !o || s.kind === "video" && s.includeVideoAudio : !1;
}
function Re(e, t) {
  const r = e.shots.filter((n) => n.enabled);
  return r.length > 0 && r.every((n) => ot(e, n, t));
}
function it(e, t) {
  const r = [], n = nt(e, t), o = [e.promptPrefix, t.prompt, e.promptSuffix].filter(Boolean).join(`
`), d = [...o.matchAll(De())].map((h) => h[1].trim()), s = [], u = /* @__PURE__ */ new Set(), f = (h) => {
    u.has(h.id) || (u.add(h.id), s.push(h));
  };
  [...n.values()].filter((h) => h.fixed).sort((h, y) => h.fixedOrder - y.fixedOrder || h.alias.localeCompare(y.alias)).forEach(f);
  for (const h of d) {
    const y = h.endsWith(".audio") ? h.slice(0, -6) : h, E = n.get(y);
    if (!E) {
      r.push(`未找到或已禁用素材：${h}`);
      continue;
    }
    h.endsWith(".audio") && (E.kind !== "video" || !E.includeVideoAudio) && r.push(`视频伴音未启用：${h}`), f(E);
  }
  const p = s.filter((h) => h.kind === "image"), c = s.filter((h) => h.kind === "video"), x = c.filter((h) => h.includeVideoAudio), l = s.filter((h) => h.kind === "audio"), m = x.length + l.length, $ = p.length + c.length + l.length;
  p.length > 9 && r.push(`参考图 ${p.length}/9，超出 H3 上限`), c.length > 3 && r.push(`参考视频 ${c.length}/3，超出 H3 上限`), m > 3 && r.push(`有效音频 ${m}/3，超出 H3 总上限`), $ > 12 && r.push(`混合文件 ${$}/12，超出 H3 上限`), m && !p.length && !c.length && r.push("音频参考不能单独使用");
  const A = c.filter((h) => typeof h.durationSeconds == "number");
  for (const h of c) (h.durationSeconds == null || h.durationSeconds < 2 || h.durationSeconds > 15) && r.push(`视频 ${h.alias} 的时长必须为 2–15 秒`);
  A.reduce((h, y) => h + (y.durationSeconds ?? 0), 0) > 15 && r.push("参考视频总时长超过 15 秒");
  const I = [...x.map((h) => h.audioDurationSeconds ?? h.durationSeconds), ...l.map((h) => h.durationSeconds)];
  I.some((h) => h == null || h < 2 || h > 15) && r.push("每路有效音频时长必须为 2–15 秒"), I.reduce((h, y) => h + (y ?? 0), 0) > 15 && r.push("有效音频总时长超过 15 秒");
  const T = /* @__PURE__ */ new Map();
  p.forEach((h, y) => T.set(h.alias, `<Picture ${y + 1}>`)), c.forEach((h, y) => T.set(h.alias, `<Video ${y + 1}>`)), x.forEach((h, y) => T.set(`${h.alias}.audio`, `<Audio ${y + 1}>`)), l.forEach((h, y) => T.set(h.alias, `<Audio ${x.length + y + 1}>`));
  const w = o.replace(De(), (h, y) => T.get(y.trim()) ?? h), j = [...T.entries()].map(([h, y]) => ({ label: y, alias: h, kind: y.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: w, errors: r, slots: j, mixedFiles: $, audioCount: m };
}
function Tt(e) {
  var o, d, s, u, f, p;
  const t = [];
  (d = (o = e.project) == null ? void 0 : o.name) != null && d.trim() || t.push("Project name 不能为空"), (u = (s = e.project) == null ? void 0 : s.runId) != null && u.trim() || t.push("Run ID 不能为空"), (!Array.isArray(e.shots) || !e.shots.some((c) => c.enabled)) && t.push("至少需要一个启用分镜");
  const r = /* @__PURE__ */ new Set();
  for (const c of e.shots ?? [])
    (!((f = c.id) != null && f.trim()) || r.has(c.id)) && t.push(`分镜 ID 为空或重复：${c.id || "(空)"}`), r.add(c.id), c.durationSeconds > 0 || t.push(`分镜 ${c.id} 的时长必须大于 0`);
  const n = /* @__PURE__ */ new Set();
  for (const c of e.assets ?? []) {
    const x = (p = c.alias) == null ? void 0 : p.toLocaleLowerCase();
    (!c.alias || /[\s{}]/.test(c.alias) || c.alias.endsWith(".audio") || n.has(x)) && t.push(`素材别名无效或重复：${c.alias || "(空)"}`), n.add(x), c.enabled && !c.path && t.push(`素材 ${c.alias} 尚未选择文件`);
  }
  for (const c of e.shots.filter((x) => x.enabled)) t.push(...it(e, c).errors.map((x) => `${c.title}: ${x}`));
  return [...new Set(t)];
}
function Ct(e, t) {
  const r = [], n = new RegExp(rt, "g");
  let o = 0;
  for (const d of e.matchAll(n)) {
    const s = d.index ?? 0;
    s > o && r.push({ text: e.slice(o, s), reference: !1 }), r.push({ text: d[0], reference: !0, valid: t(d[1]) }), o = s + d[0].length;
  }
  return o < e.length && r.push({ text: e.slice(o), reference: !1 }), r;
}
function ce({ value: e, rows: t, onInput: r, isReferenceValid: n }) {
  const o = kt(null), d = Ct(e, n), s = (u) => {
    o.current && (o.current.scrollTop = u.currentTarget.scrollTop, o.current.scrollLeft = u.currentTarget.scrollLeft);
  };
  return /* @__PURE__ */ i("span", { class: "td-highlight-textarea", children: [
    /* @__PURE__ */ i("pre", { ref: o, class: "td-highlight-backdrop", "aria-hidden": "true", children: [
      d.map((u, f) => u.reference ? /* @__PURE__ */ i("mark", { class: u.valid ? "valid" : "invalid", children: u.text }, f) : u.text),
      e.endsWith(`
`) && " "
    ] }),
    /* @__PURE__ */ i("textarea", { class: "td-highlight-input", rows: t, value: e, onInput: r, onScroll: s })
  ] });
}
const It = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function L(e, t) {
  return It[e][t];
}
function dt(e, t) {
  const r = e.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!r || r.startsWith("/") || /^[A-Za-z]:\//.test(r)) return null;
  const n = r.split("/").filter(Boolean), o = n.pop();
  if (!o || n.some((s) => s === "..")) return null;
  const d = new URLSearchParams({ filename: o, type: t });
  return n.length && d.set("subfolder", n.join("/")), `/view?${d.toString()}`;
}
function zt(e) {
  return dt(e, "input");
}
function He(e) {
  return e.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function Ue({ asset: e, compact: t = !1 }) {
  const r = zt(e.path), n = `td-media-preview ${t ? "compact" : ""}`;
  return r ? e.kind === "image" ? /* @__PURE__ */ i("div", { class: n, children: /* @__PURE__ */ i("img", { src: r, alt: e.alias, loading: "lazy" }) }) : e.kind === "video" ? /* @__PURE__ */ i("div", { class: n, children: /* @__PURE__ */ i("video", { src: r, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ i("div", { class: n, children: /* @__PURE__ */ i("audio", { src: r, controls: !0, preload: "metadata" }) }) : e.path ? /* @__PURE__ */ i("div", { class: `${n} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ i("div", { class: `${n} empty`, children: "尚未选择素材 / No media selected" });
}
const at = (e) => `${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, lt = (e) => JSON.parse(JSON.stringify(e)), Pt = { image: "图片", video: "视频", audio: "音频" };
function Fe(e) {
  var r;
  const t = lt(e);
  return t.schemaVersion = 4, (r = t.project.id) != null && r.trim() || (t.project.id = at("project")), t.shots = t.shots.map((n) => ({
    ...n,
    latentRelay: n.latentRelay ?? !0,
    secondSampling: n.secondSampling ?? !0
  })), t;
}
function At(e) {
  return e.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function jt(e) {
  return { id: `shot_${String(e + 1).padStart(3, "0")}`, title: `Shot ${e + 1}`, prompt: "", negativePrompt: "", durationSeconds: 5, enabled: !0, latentRelay: !0, secondSampling: !0, seed: null, disabledAssetIds: [] };
}
function Et(e) {
  const t = at(e);
  return { id: t, alias: t, kind: e, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: e === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function Nt(e, t, r) {
  const n = new FormData();
  n.append("projectName", e), n.append("kind", t), n.append("file", r);
  const o = await fetch("/theodore-director/v1/assets", { method: "POST", body: n }), d = await o.json();
  if (!o.ok || !d.path) throw new Error(d.error || `HTTP ${o.status}`);
  return d.path;
}
async function Dt(e, t, r) {
  const n = new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t.id,
    activeIndex: String(r)
  }), o = await fetch(`/theodore-director/v1/generated-video?${n.toString()}`), d = await o.json();
  if (!o.ok) throw new Error(d.error || `HTTP ${o.status}`);
  return d;
}
async function Rt(e) {
  var n;
  if ((n = navigator.clipboard) != null && n.writeText)
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
function Ht({ initial: e, onSave: t, onClose: r, supportsSecondSampling: n }) {
  const [o, d] = D(() => Fe(e)), [s, u] = D("shots"), [f, p] = D(0), [c, x] = D(() => navigator.language.startsWith("zh") ? "zh" : "en"), [l, m] = D({}), [$, A] = D(!1), [I, T] = D(!0), [w, j] = D(0), [h, y] = D({ found: !1 }), [E, M] = D(!1), [F, V] = D(""), v = o.shots[Math.min(f, o.shots.length - 1)], S = Ze(() => v ? it(o, v) : null, [o, v]), B = v != null && v.enabled ? o.shots.slice(0, f).filter((a) => a.enabled).length : -1, ae = o.shots.length > 0 && o.shots.every((a) => a.secondSampling), be = h.path ? dt(h.path, "output") : null, k = (a) => d((_) => {
    const g = lt(_);
    return a(g), g;
  }), xe = (a, _) => k((g) => {
    const b = a + _;
    b < 0 || b >= g.shots.length || ([g.shots[a], g.shots[b]] = [g.shots[b], g.shots[a]], p(b));
  }), st = (a) => k((_) => {
    _.shots.length <= 1 || (_.shots.splice(a, 1), p((g) => g > a ? g - 1 : g === a ? Math.min(a, _.shots.length - 1) : g));
  }), ct = () => {
    const a = URL.createObjectURL(new Blob([JSON.stringify(o, null, 2)], { type: "application/json" })), _ = document.createElement("a");
    _.href = a, _.download = `${At(o.project.name)}.director.json`, _.click(), URL.revokeObjectURL(a);
  }, pt = () => {
    const a = Tt(o);
    if (a.length) {
      window.alert(`计划未通过校验：

${a.join(`
`)}`);
      return;
    }
    t(o);
  };
  return wt(() => {
    let a = !1;
    return !(v != null && v.enabled) || B < 0 ? (y({ found: !1 }), M(!1), () => {
      a = !0;
    }) : (M(!0), Dt(o, v, B).then((_) => {
      a || y(_);
    }).catch((_) => {
      a || y({ found: !1, error: String(_) });
    }).finally(() => {
      a || M(!1);
    }), () => {
      a = !0;
    });
  }, [o.project.name, o.project.runId, v == null ? void 0 : v.id, v == null ? void 0 : v.enabled, B, w]), /* @__PURE__ */ i("div", { class: "td-shell", children: [
    /* @__PURE__ */ i("header", { children: [
      /* @__PURE__ */ i("h1", { children: L(c, "title") }),
      /* @__PURE__ */ i("div", { class: "td-actions", children: [
        /* @__PURE__ */ i("button", { onClick: ct, children: "导出 / Export" }),
        /* @__PURE__ */ i("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ i("input", { type: "file", accept: "application/json,.json", onChange: async (a) => {
            var g;
            const _ = (g = a.currentTarget.files) == null ? void 0 : g[0];
            if (_)
              try {
                const b = JSON.parse(await _.text());
                if (!b.project || !Array.isArray(b.shots) || !Array.isArray(b.assets)) throw new Error("不是有效的 Theodore Director Plan");
                d(Fe(b)), p(0);
              } catch (b) {
                window.alert(String(b));
              }
          } })
        ] }),
        /* @__PURE__ */ i("button", { onClick: () => x(c === "zh" ? "en" : "zh"), children: c === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ i("button", { class: "primary", onClick: pt, children: L(c, "save") }),
        /* @__PURE__ */ i("button", { onClick: r, children: L(c, "close") })
      ] })
    ] }),
    /* @__PURE__ */ i("nav", { children: ["shots", "assets", "settings"].map((a) => /* @__PURE__ */ i("button", { class: s === a ? "active" : "", onClick: () => u(a), children: L(c, a) })) }),
    /* @__PURE__ */ i("main", { children: [
      s === "shots" && /* @__PURE__ */ i("div", { class: "td-shots", children: [
        /* @__PURE__ */ i("aside", { children: [
          n && /* @__PURE__ */ i("button", { class: `wide td-bulk-toggle ${ae ? "active" : ""}`, onClick: () => k((a) => {
            const _ = !a.shots.every((g) => g.secondSampling);
            a.shots.forEach((g) => {
              g.secondSampling = _;
            });
          }), children: c === "zh" ? `全部二次采样：${ae ? "开" : "关"}` : `Second sampling for all: ${ae ? "ON" : "OFF"}` }),
          o.shots.map((a, _) => /* @__PURE__ */ i("div", { class: `td-shot-card ${_ === f ? "selected" : ""}`, onClick: () => p(_), children: [
            /* @__PURE__ */ i("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ i("button", { class: "td-shot-delete", disabled: o.shots.length <= 1, title: c === "zh" ? o.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : o.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": c === "zh" ? "删除镜头" : "Delete shot", onClick: (g) => {
              g.stopPropagation(), st(_);
            }, children: "×" }) }),
            /* @__PURE__ */ i("strong", { children: [
              _ + 1,
              ". ",
              a.title
            ] }),
            /* @__PURE__ */ i("span", { children: [
              a.durationSeconds,
              "s · ",
              a.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ i("div", { class: "td-shot-move-actions", children: [
              /* @__PURE__ */ i("button", { title: c === "zh" ? "上移镜头" : "Move shot up", onClick: (g) => {
                g.stopPropagation(), xe(_, -1);
              }, children: "↑" }),
              /* @__PURE__ */ i("button", { title: c === "zh" ? "下移镜头" : "Move shot down", onClick: (g) => {
                g.stopPropagation(), xe(_, 1);
              }, children: "↓" })
            ] })
          ] }, a.id)),
          /* @__PURE__ */ i("button", { class: "wide", onClick: () => k((a) => {
            a.shots.push(jt(a.shots.length)), p(a.shots.length - 1);
          }), children: [
            "＋ ",
            L(c, "addShot")
          ] })
        ] }),
        v && /* @__PURE__ */ i("section", { class: "td-form", children: [
          /* @__PURE__ */ i("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ i("label", { children: [
              "ID",
              /* @__PURE__ */ i("input", { value: v.id, onInput: (a) => k((_) => {
                _.shots[f].id = a.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ i("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ i("input", { value: v.title, onInput: (a) => k((_) => {
                _.shots[f].title = a.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ i("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ i("input", { type: "number", min: "0.1", step: "0.1", value: v.durationSeconds, onInput: (a) => k((_) => {
                _.shots[f].durationSeconds = Number(a.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ i("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ i("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ i("input", { type: "checkbox", checked: v.enabled, onChange: (a) => k((_) => {
                  _.shots[f].enabled = a.currentTarget.checked;
                }) }),
                /* @__PURE__ */ i("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ i("label", { class: "td-shot-enabled", title: B === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ i("input", { type: "checkbox", checked: v.latentRelay, onChange: (a) => k((_) => {
                  _.shots[f].latentRelay = a.currentTarget.checked;
                }) }),
                /* @__PURE__ */ i("span", { children: [
                  "latent接力 / Relay",
                  B === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              n && /* @__PURE__ */ i("label", { class: "td-shot-enabled", title: "开启时执行 RTX 超分和第二次 H3 采样，关闭时直接使用第一采画面", children: [
                /* @__PURE__ */ i("input", { type: "checkbox", checked: v.secondSampling, onChange: (a) => k((_) => {
                  _.shots[f].secondSampling = a.currentTarget.checked;
                }) }),
                /* @__PURE__ */ i("span", { children: "二次采样 / 2nd pass" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ i("label", { children: [
            /* @__PURE__ */ i("span", { class: "td-field-label", children: [
              "提示词（使用 ",
              /* @__PURE__ */ i("code", { children: "{{ref:别名}}" }),
              "）"
            ] }),
            /* @__PURE__ */ i(ce, { rows: 10, value: v.prompt, isReferenceValid: (a) => ot(o, v, a), onInput: (a) => k((_) => {
              _.shots[f].prompt = a.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ i("label", { children: [
            /* @__PURE__ */ i("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ i("textarea", { rows: 3, value: v.negativePrompt, onInput: (a) => k((_) => {
              _.shots[f].negativePrompt = a.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ i("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ i("legend", { children: "本镜头素材 / Shot media" }),
            o.assets.map((a) => {
              const _ = !v.disabledAssetIds.includes(a.id), g = He(a.path) || a.alias, b = `{{ref:${a.alias}}}`;
              return /* @__PURE__ */ i("div", { class: `td-shot-media-card ${_ ? "" : "disabled"}`, children: [
                /* @__PURE__ */ i("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ i(Ue, { asset: a, compact: !0 }),
                  /* @__PURE__ */ i("span", { class: "td-shot-media-kind", children: c === "zh" ? Pt[a.kind] : a.kind }),
                  /* @__PURE__ */ i("label", { class: "td-shot-media-toggle", title: _ ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ i("input", { type: "checkbox", checked: _, onChange: (N) => k((q) => {
                    const R = q.shots[f].disabledAssetIds;
                    q.shots[f].disabledAssetIds = N.currentTarget.checked ? R.filter((W) => W !== a.id) : [.../* @__PURE__ */ new Set([...R, a.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ i("button", { class: `td-shot-media-name ${F === a.id ? "copied" : ""}`, title: `${g}
${c === "zh" ? "点击复制" : "Click to copy"} ${b}`, onClick: async () => {
                  try {
                    await Rt(b), V(a.id), window.setTimeout(() => V((N) => N === a.id ? "" : N), 1400);
                  } catch (N) {
                    window.alert(`${c === "zh" ? "复制失败" : "Copy failed"}: ${String(N)}`);
                  }
                }, children: [
                  /* @__PURE__ */ i("span", { children: g }),
                  F === a.id && /* @__PURE__ */ i("em", { children: c === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, a.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ i("aside", { class: "td-preview", children: [
          /* @__PURE__ */ i("details", { open: $, onToggle: (a) => A(a.currentTarget.open), children: [
            /* @__PURE__ */ i("summary", { children: [
              /* @__PURE__ */ i("strong", { children: L(c, "preview") }),
              /* @__PURE__ */ i("span", { class: "td-summary-counts", children: [
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
            /* @__PURE__ */ i("div", { class: "td-preview-body", children: [
              S != null && S.errors.length ? /* @__PURE__ */ i("ul", { class: "errors", children: S.errors.map((a) => /* @__PURE__ */ i("li", { children: a })) }) : /* @__PURE__ */ i("p", { class: "ok", children: L(c, "noErrors") }),
              /* @__PURE__ */ i("ol", { children: S == null ? void 0 : S.slots.map((a) => /* @__PURE__ */ i("li", { children: [
                /* @__PURE__ */ i("code", { children: a.label }),
                " ← ",
                a.alias
              ] })) }),
              /* @__PURE__ */ i("pre", { children: S == null ? void 0 : S.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ i("details", { open: I, onToggle: (a) => T(a.currentTarget.open), children: [
            /* @__PURE__ */ i("summary", { children: [
              /* @__PURE__ */ i("strong", { children: c === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ i("span", { class: `td-result-state ${h.found ? "found" : ""}`, children: E ? c === "zh" ? "查询中" : "Checking" : h.found ? c === "zh" ? "已生成" : "Found" : c === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ i("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ i("div", { class: "td-result-actions", children: /* @__PURE__ */ i("button", { onClick: () => j((a) => a + 1), children: [
                "↻ ",
                c === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              E ? /* @__PURE__ */ i("div", { class: "td-result-empty", children: c === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : h.error ? /* @__PURE__ */ i("div", { class: "td-result-empty errors", children: c === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again." }) : h.found && be ? /* @__PURE__ */ i("div", { class: "td-generated-video", children: [
                /* @__PURE__ */ i("video", { src: be, controls: !0, preload: "metadata", playsInline: !0 }, h.path),
                /* @__PURE__ */ i("div", { class: "td-generated-meta", title: h.path, children: [
                  h.path,
                  h.bytes ? ` · ${(h.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                ] })
              ] }) : /* @__PURE__ */ i("div", { class: "td-result-empty", children: c === "zh" ? "未在预期路径找到本段视频" : "No video found at the expected path" })
            ] })
          ] })
        ] })
      ] }),
      s === "assets" && /* @__PURE__ */ i("div", { class: "td-assets", children: [
        /* @__PURE__ */ i("div", { class: "td-toolbar", children: ["image", "video", "audio"].map((a) => /* @__PURE__ */ i("button", { onClick: () => k((_) => _.assets.push(Et(a))), children: [
          "＋ ",
          a
        ] })) }),
        o.assets.map((a, _) => /* @__PURE__ */ i("article", { children: /* @__PURE__ */ i("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ i("div", { class: "td-grid", children: [
              /* @__PURE__ */ i("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ i("input", { value: a.alias, onInput: (g) => k((b) => {
                  b.assets[_].alias = g.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ i("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ i("select", { value: a.kind, onChange: (g) => k((b) => {
                  b.assets[_].kind = g.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ i("option", { children: "image" }),
                  /* @__PURE__ */ i("option", { children: "video" }),
                  /* @__PURE__ */ i("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ i("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ i("input", { value: a.path, onInput: (g) => k((b) => {
                  b.assets[_].path = g.currentTarget.value;
                }) }),
                /* @__PURE__ */ i("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ i("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ i("input", { type: "file", accept: a.kind === "image" ? "image/*" : a.kind === "video" ? "video/*" : "audio/*", onChange: async (g) => {
                      var q;
                      const b = g.currentTarget, N = (q = b.files) == null ? void 0 : q[0];
                      if (N) {
                        m((R) => ({ ...R, [a.id]: N.name }));
                        try {
                          const R = await Nt(o.project.name, a.kind, N);
                          k((W) => {
                            const ye = W.assets.find((ut) => ut.id === a.id);
                            ye && (ye.path = R);
                          });
                        } catch (R) {
                          window.alert(String(R));
                        } finally {
                          m((R) => {
                            const W = { ...R };
                            return delete W[a.id], W;
                          }), b.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ i("span", { class: "td-file-name", title: l[a.id] || a.path, children: l[a.id] ? `${c === "zh" ? "上传中" : "Uploading"}: ${l[a.id]}` : He(a.path) || (c === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ i("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ i("input", { type: "number", min: "0", step: "0.1", value: a.durationSeconds ?? "", onInput: (g) => k((b) => {
                  b.assets[_].durationSeconds = g.currentTarget.value ? Number(g.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ i("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ i("input", { type: "number", value: a.fixedOrder, onInput: (g) => k((b) => {
                  b.assets[_].fixedOrder = Number(g.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ i("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ i("input", { value: a.shotIds.join(", "), onInput: (g) => k((b) => {
                  b.assets[_].shotIds = g.currentTarget.value.split(",").map((N) => N.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ i("div", { class: "td-flags", children: [
              /* @__PURE__ */ i("label", { children: [
                /* @__PURE__ */ i("input", { type: "checkbox", checked: a.enabled, onChange: (g) => k((b) => {
                  b.assets[_].enabled = g.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ i("label", { children: [
                /* @__PURE__ */ i("input", { type: "checkbox", checked: a.fixed, onChange: (g) => k((b) => {
                  b.assets[_].fixed = g.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              a.kind === "video" && /* @__PURE__ */ i("label", { children: [
                /* @__PURE__ */ i("input", { type: "checkbox", checked: a.includeVideoAudio, onChange: (g) => k((b) => {
                  b.assets[_].includeVideoAudio = g.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ i("button", { class: "danger", onClick: () => k((g) => {
                g.assets.splice(_, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ i(Ue, { asset: a })
        ] }) }, a.id))
      ] }),
      s === "settings" && /* @__PURE__ */ i("section", { class: "td-form settings", children: [
        /* @__PURE__ */ i("label", { children: [
          "Project name",
          /* @__PURE__ */ i("input", { value: o.project.name, onInput: (a) => k((_) => {
            _.project.name = a.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ i("label", { children: [
          "Run ID",
          /* @__PURE__ */ i("input", { value: o.project.runId, onInput: (a) => k((_) => {
            _.project.runId = a.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ i("label", { children: [
          "FPS",
          /* @__PURE__ */ i("input", { type: "number", value: o.defaults.fps, onInput: (a) => k((_) => {
            _.defaults.fps = Number(a.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ i("label", { children: [
          "Base seed",
          /* @__PURE__ */ i("input", { type: "number", value: o.defaults.baseSeed, onInput: (a) => k((_) => {
            _.defaults.baseSeed = Number(a.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ i("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ i(ce, { value: o.promptPrefix, isReferenceValid: (a) => Re(o, a), onInput: (a) => k((_) => {
            _.promptPrefix = a.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ i("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ i(ce, { value: o.promptSuffix, isReferenceValid: (a) => Re(o, a), onInput: (a) => k((_) => {
            _.promptSuffix = a.currentTarget.value;
          }) })
        ] })
      ] })
    ] })
  ] });
}
function Ut(e, t, r = !1) {
  const n = document.getElementById("theodore-director-modal");
  if (n) {
    n.focus();
    return;
  }
  const o = document.createElement("div");
  o.id = "theodore-director-modal", o.className = "td-modal", o.tabIndex = -1, document.body.append(o);
  const d = (u) => {
    u.key === "Escape" && s();
  }, s = () => {
    document.removeEventListener("keydown", d), Te(null, o), o.remove();
  };
  document.addEventListener("keydown", d), Te(/* @__PURE__ */ i(Ht, { initial: e, onSave: (u) => {
    t(u), s();
  }, onClose: s, supportsSecondSampling: r }), o), o.focus();
}
const Ft = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-highlight-textarea{position:relative;display:block;width:100%;min-width:0}.td-highlight-backdrop,.td-form textarea.td-highlight-input{box-sizing:border-box;width:100%;margin:0;padding:7px 9px;font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,monospace;font-size:inherit;line-height:1.45;letter-spacing:normal;-moz-tab-size:8;tab-size:8;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.td-highlight-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border:1px solid transparent;border-radius:6px;background:#222a35;color:var(--td-text);pointer-events:none}.td-form textarea.td-highlight-input{position:relative;z-index:1;display:block;background:transparent;color:transparent;caret-color:var(--td-text);-webkit-text-fill-color:transparent}.td-highlight-input::selection{background:#5898d46b}.td-highlight-backdrop mark{padding:1px 2px;border-radius:3px;color:inherit}.td-highlight-backdrop mark.valid{background:#1d6b50;color:#bfffe6}.td-highlight-backdrop mark.invalid{background:#7a2931;color:#ffd1d5;text-decoration:underline;text-decoration-color:#ff9aa4;text-underline-offset:2px}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}", Le = "theodore-director-styles";
function Lt() {
  if (document.getElementById(Le)) return;
  const e = document.createElement("style");
  e.id = Le, e.textContent = Ft, document.head.append(e);
}
Lt();
const Ot = "/scripts/app.js";
import(
  /* @vite-ignore */
  Ot
).then(({ app: e }) => {
  e.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(t, r) {
      if (r.name !== "TheodoreDirector_Project") return;
      const n = t.prototype.onNodeCreated;
      t.prototype.onNodeCreated = function() {
        var d, s;
        n == null || n.apply(this);
        const o = (d = this.widgets) == null ? void 0 : d.find((u) => u.name === "plan_json");
        o && (o.type = "hidden", o.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          try {
            const u = JSON.parse(String(o.value));
            Ut(u, (f) => {
              var p, c;
              o.value = JSON.stringify(f, null, 2), this.setDirtyCanvas(!0, !0), (c = (p = e.graph) == null ? void 0 : p.setDirtyCanvas) == null || c.call(p, !0, !0);
            }, !0);
          } catch (u) {
            window.alert(`Theodore Director: ${u instanceof Error ? u.message : String(u)}`);
          }
        }), this.size = [Math.max(((s = this.size) == null ? void 0 : s[0]) ?? 300, 360), 110]);
      };
    }
  });
});
