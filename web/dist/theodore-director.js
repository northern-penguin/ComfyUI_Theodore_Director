var ze, j, lt, te, Be, ct, pt, Te, me, ae, ht, Ee, Pe, Ne, ve = {}, ye = [], Ut = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, $e = Array.isArray;
function Z(t, e) {
  for (var o in e) t[o] = e[o];
  return t;
}
function De(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Lt(t, e, o) {
  var n, i, s, c = {};
  for (s in e) s == "key" ? n = e[s] : s == "ref" ? i = e[s] : c[s] = e[s];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? ze.call(arguments, 2) : o), typeof t == "function" && t.defaultProps != null) for (s in t.defaultProps) c[s] === void 0 && (c[s] = t.defaultProps[s]);
  return ge(t, c, n, i, null);
}
function ge(t, e, o, n, i) {
  var s = { type: t, props: e, key: o, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++lt, __i: -1, __u: 0 };
  return i == null && j.vnode != null && j.vnode(s), s;
}
function Ce(t) {
  return t.children;
}
function _e(t, e) {
  this.props = t, this.context = e;
}
function ne(t, e) {
  if (e == null) return t.__ ? ne(t.__, t.__i + 1) : null;
  for (var o; e < t.__k.length; e++) if ((o = t.__k[e]) != null && o.__e != null) return o.__e;
  return typeof t.type == "function" ? ne(t) : null;
}
function Ft(t) {
  if (t.__P && t.__d) {
    var e = t.__v, o = e.__e, n = [], i = [], s = Z({}, e);
    s.__v = e.__v + 1, j.vnode && j.vnode(s), Me(t.__P, s, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [o] : null, n, o ?? ne(e), !!(32 & e.__u), i), s.__v = e.__v, s.__.__k[s.__i] = s, _t(n, s, i), e.__e = e.__ = null, s.__e != o && ut(s);
  }
}
function ut(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), ut(t);
}
function Ve(t) {
  (!t.__d && (t.__d = !0) && te.push(t) && !we.__r++ || Be != j.debounceRendering) && ((Be = j.debounceRendering) || ct)(we);
}
function we() {
  try {
    for (var t, e = 1; te.length; ) te.length > e && te.sort(pt), t = te.shift(), e = te.length, Ft(t);
  } finally {
    te.length = we.__r = 0;
  }
}
function ft(t, e, o, n, i, s, c, h, f, p, a) {
  var w, l, b, C, E, A, T = n && n.__k || ye, S = e.length;
  for (f = Ot(o, e, T, f, S), w = 0; w < S; w++) (b = o.__k[w]) != null && (l = b.__i != -1 && T[b.__i] || ve, b.__i = w, A = Me(t, b, l, i, s, c, h, f, p, a), C = b.__e, b.ref && l.ref != b.ref && (l.ref && Ue(l.ref, null, b), a.push(b.ref, b.__c || C, b)), E == null && C != null && (E = C), 4 & b.__u ? (f = mt(b, f, t), l.__e && (l.__e = null)) : typeof b.type == "function" && A !== void 0 ? f = A : C && (f = C.nextSibling), b.__u &= -7);
  return o.__e = E, f;
}
function Ot(t, e, o, n, i) {
  var s, c, h, f, p, a = o.length, w = a, l = 0;
  for (t.__k = new Array(i), s = 0; s < i; s++) (c = e[s]) != null && typeof c != "boolean" && typeof c != "function" ? (typeof c == "string" || typeof c == "number" || typeof c == "bigint" || c.constructor == String ? c = t.__k[s] = ge(null, c, null, null, null) : $e(c) ? c = t.__k[s] = ge(Ce, { children: c }, null, null, null) : c.constructor === void 0 && c.__b > 0 ? c = t.__k[s] = ge(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : t.__k[s] = c, f = s + l, c.__ = t, c.__b = t.__b + 1, h = null, (p = c.__i = Ht(c, o, f, w)) != -1 && (w--, (h = o[p]) && (h.__u |= 2)), h == null || h.__v == null ? (p == -1 && (i > a ? l-- : i < a && l++), typeof c.type != "function" && (c.__u |= 4)) : p != f && (p == f - 1 ? l-- : p == f + 1 ? l++ : (p > f ? l-- : l++, c.__u |= 4))) : t.__k[s] = null;
  if (w) for (s = 0; s < a; s++) (h = o[s]) != null && (2 & h.__u) == 0 && (h.__e == n && (n = ne(h)), xt(h, h));
  return n;
}
function mt(t, e, o) {
  var n, i;
  if (typeof t.type == "function") {
    for (n = t.__k, i = 0; n && i < n.length; i++) n[i] && (n[i].__ = t, e = mt(n[i], e, o));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = ne(t)), e = o.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Ht(t, e, o, n) {
  var i, s, c, h = t.key, f = t.type, p = e[o], a = p != null && (2 & p.__u) == 0;
  if (p === null && h == null || a && h == p.key && f == p.type) return o;
  if (n > (a ? 1 : 0)) {
    for (i = o - 1, s = o + 1; i >= 0 || s < e.length; ) if ((p = e[c = i >= 0 ? i-- : s++]) != null && (2 & p.__u) == 0 && h == p.key && f == p.type) return c;
  }
  return -1;
}
function We(t, e, o) {
  e[0] == "-" ? t.setProperty(e, o ?? "") : t[e] = o == null ? "" : typeof o != "number" || Ut.test(e) ? o : o + "px";
}
function fe(t, e, o, n, i) {
  var s, c;
  e: if (e == "style") if (typeof o == "string") t.style.cssText = o;
  else {
    if (typeof n == "string" && (t.style.cssText = n = ""), n) for (e in n) o && e in o || We(t.style, e, "");
    if (o) for (e in o) n && o[e] == n[e] || We(t.style, e, o[e]);
  }
  else if (e[0] == "o" && e[1] == "n") s = e != (e = e.replace(ht, "$1")), c = e.toLowerCase(), e = c in t || e == "onFocusOut" || e == "onFocusIn" ? c.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + s] = o, o ? n ? o[ae] = n[ae] : (o[ae] = Ee, t.addEventListener(e, s ? Ne : Pe, s)) : t.removeEventListener(e, s ? Ne : Pe, s);
  else {
    if (i == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = o ?? "";
      break e;
    } catch {
    }
    typeof o == "function" || (o == null || o === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && o == 1 ? "" : o));
  }
}
function qe(t) {
  return function(e) {
    if (this.l) {
      var o = this.l[e.type + t];
      if (e[me] == null) e[me] = Ee++;
      else if (e[me] < o[ae]) return;
      return o(j.event ? j.event(e) : e);
    }
  };
}
function Me(t, e, o, n, i, s, c, h, f, p) {
  var a, w, l, b, C, E, A, T, S, L, m, k, H, q, Q, B, U = e.type;
  if (e.constructor !== void 0) return null;
  128 & o.__u && (f = !!(32 & o.__u), s = [h = e.__e = o.__e]), (a = j.__b) && a(e);
  e: if (typeof U == "function") {
    w = c.length;
    try {
      if (S = e.props, L = U.prototype && U.prototype.render, m = (a = U.contextType) && n[a.__c], k = a ? m ? m.props.value : a.__ : n, o.__c ? T = (l = e.__c = o.__c).__ = l.__E : (L ? e.__c = l = new U(S, k) : (e.__c = l = new _e(S, k), l.constructor = U, l.render = Vt), m && m.sub(l), l.state || (l.state = {}), l.__n = n, b = l.__d = !0, l.__h = [], l._sb = []), L && l.__s == null && (l.__s = l.state), L && U.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Z({}, l.__s)), Z(l.__s, U.getDerivedStateFromProps(S, l.__s))), C = l.props, E = l.state, l.__v = e, b) L && U.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), L && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (L && U.getDerivedStateFromProps == null && S !== C && l.componentWillReceiveProps != null && l.componentWillReceiveProps(S, k), e.__v == o.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(S, l.__s, k) === !1) {
          e.__v != o.__v && (l.props = S, l.state = l.__s, l.__d = !1), e.__e = o.__e, e.__k = o.__k, e.__k.some(function(K) {
            K && (K.__ = e);
          }), ye.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && c.push(l), h = ne(o);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(S, l.__s, k), L && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(C, E, A);
        });
      }
      if (l.context = k, l.props = S, l.__P = t, l.__e = !1, H = j.__r, q = 0, L) l.state = l.__s, l.__d = !1, H && H(e), a = l.render(l.props, l.state, l.context), ye.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, H && H(e), a = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++q < 25);
      l.state = l.__s, l.getChildContext != null && (n = Z(Z({}, n), l.getChildContext())), L && !b && l.getSnapshotBeforeUpdate != null && (A = l.getSnapshotBeforeUpdate(C, E)), Q = a != null && a.type === Ce && a.key == null ? bt(a.props.children) : a, h = ft(t, $e(Q) ? Q : [Q], e, o, n, i, s, c, h, f, p), l.base = e.__e, e.__u &= -161, l.__h.length && c.push(l), T && (l.__E = l.__ = null);
    } catch (K) {
      if (c.length = w, e.__v = null, f || s != null) {
        if (K.then) {
          for (e.__u |= f ? 160 : 128; h && h.nodeType == 8 && h.nextSibling; ) h = h.nextSibling;
          s != null && (s[s.indexOf(h)] = null), e.__e = h;
        } else if (s != null) for (B = s.length; B--; ) De(s[B]);
      } else e.__e = o.__e;
      e.__k == null && (e.__k = o.__k || []), K.then || gt(e), j.__e(K, e, o);
    }
  } else s == null && e.__v == o.__v ? (e.__k = o.__k, e.__e = o.__e) : h = e.__e = Bt(o.__e, e, o, n, i, s, c, f, p);
  return (a = j.diffed) && a(e), 128 & e.__u ? void 0 : h;
}
function gt(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(gt));
}
function _t(t, e, o) {
  for (var n = 0; n < o.length; n++) Ue(o[n], o[++n], o[++n]);
  j.__c && j.__c(e, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(s) {
        s.call(i);
      });
    } catch (s) {
      j.__e(s, i.__v);
    }
  });
}
function bt(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : $e(t) ? t.map(bt) : t.constructor !== void 0 ? null : Z({}, t);
}
function Bt(t, e, o, n, i, s, c, h, f) {
  var p, a, w, l, b, C, E, A = o.props || ve, T = e.props, S = e.type;
  if (S == "svg" ? i = "http://www.w3.org/2000/svg" : S == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), s != null) {
    for (p = 0; p < s.length; p++) if ((b = s[p]) && "setAttribute" in b == !!S && (S ? b.localName == S : b.nodeType == 3)) {
      t = b, s[p] = null;
      break;
    }
  }
  if (t == null) {
    if (S == null) return document.createTextNode(T);
    t = document.createElementNS(i, S, T.is && T), h && (j.__m && j.__m(e, s), h = !1), s = null;
  }
  if (S == null) A === T || h && t.data == T || (t.data = T);
  else {
    if (s = S == "textarea" && T.defaultValue != null ? null : s && ze.call(t.childNodes), !h && s != null) for (A = {}, p = 0; p < t.attributes.length; p++) A[(b = t.attributes[p]).name] = b.value;
    for (p in A) b = A[p], p == "dangerouslySetInnerHTML" ? w = b : p == "children" || p in T || p == "value" && "defaultValue" in T || p == "checked" && "defaultChecked" in T || fe(t, p, null, b, i);
    for (p in T) b = T[p], p == "children" ? l = b : p == "dangerouslySetInnerHTML" ? a = b : p == "value" ? C = b : p == "checked" ? E = b : h && typeof b != "function" || A[p] === b || fe(t, p, b, A[p], i);
    if (a) h || w && (a.__html == w.__html || a.__html == t.innerHTML) || (t.innerHTML = a.__html), e.__k = [];
    else if (w && (t.innerHTML = ""), ft(e.type == "template" ? t.content : t, $e(l) ? l : [l], e, o, n, S == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, s, c, s ? s[0] : o.__k && ne(o, 0), h, f), s != null) for (p = s.length; p--; ) De(s[p]);
    h && S != "textarea" || (p = "value", S == "progress" && C == null ? t.removeAttribute("value") : C != null && (C !== t[p] || S == "progress" && !C || S == "option" && C != A[p]) && fe(t, p, C, A[p], i), p = "checked", E != null && E != t[p] && fe(t, p, E, A[p], i));
  }
  return t;
}
function Ue(t, e, o) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (i) {
    j.__e(i, o);
  }
}
function xt(t, e, o) {
  var n, i;
  if (j.unmount && j.unmount(t), (n = t.ref) && (n.current && n.current != t.__e || Ue(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (s) {
      j.__e(s, e);
    }
    n.base = n.__P = n.__n = null;
  }
  if (n = t.__k) for (i = 0; i < n.length; i++) n[i] && xt(n[i], e, o || typeof t.type != "function");
  o || De(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Vt(t, e, o) {
  return this.constructor(t, o);
}
function Ge(t, e, o) {
  var n, i, s, c;
  e == document && (e = document.documentElement), j.__ && j.__(t, e), i = (n = !1) ? null : e.__k, s = [], c = [], Me(e, t = e.__k = Lt(Ce, null, [t]), i || ve, ve, e.namespaceURI, i ? null : e.firstChild ? ze.call(e.childNodes) : null, s, i ? i.__e : e.firstChild, n, c), _t(s, t, c), t.props.children = null;
}
ze = ye.slice, j = { __e: function(t, e, o, n) {
  for (var i, s, c; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(t)), c = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, n || {}), c = i.__d), c) return i.__E = i;
  } catch (h) {
    t = h;
  }
  throw t;
} }, lt = 0, _e.prototype.setState = function(t, e) {
  var o;
  o = this.__s != null && this.__s != this.state ? this.__s : this.__s = Z({}, this.state), typeof t == "function" && (t = t(Z({}, o), this.props)), t && Z(o, t), t != null && this.__v && (e && this._sb.push(e), Ve(this));
}, _e.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ve(this));
}, _e.prototype.render = Ce, te = [], ct = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, pt = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, we.__r = 0, Te = Math.random().toString(8), me = "__d" + Te, ae = "__a" + Te, ht = /(PointerCapture)$|Capture$/i, Ee = 0, Pe = qe(!1), Ne = qe(!0);
var Wt = 0;
function r(t, e, o, n, i, s) {
  e || (e = {});
  var c, h, f = e;
  if ("ref" in f) for (h in f = {}, e) h == "ref" ? c = e[h] : f[h] = e[h];
  var p = { type: t, props: f, key: o, ref: c, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Wt, __i: -1, __u: 0, __source: i, __self: s };
  if (typeof t == "function" && (c = t.defaultProps)) for (h in c) f[h] === void 0 && (f[h] = c[h]);
  return j.vnode && j.vnode(p), p;
}
var le, R, Ie, Je, ke = 0, vt = [], M = j, Ke = M.__b, Qe = M.__r, Ye = M.diffed, Xe = M.__c, Ze = M.unmount, et = M.__;
function Le(t, e) {
  M.__h && M.__h(R, t, ke || e), ke = 0;
  var o = R.__H || (R.__H = { __: [], __h: [] });
  return t >= o.__.length && o.__.push({}), o.__[t];
}
function I(t) {
  return ke = 1, qt(kt, t);
}
function qt(t, e, o) {
  var n = Le(le++, 2);
  if (n.t = t, !n.__c && (n.__ = [kt(void 0, e), function(h) {
    var f = n.__N ? n.__N[0] : n.__[0], p = n.t(f, h);
    f !== p && (n.__N = [p, n.__[1]], n.__c.setState({}));
  }], n.__c = R, !R.__f)) {
    var i = function(h, f, p) {
      if (!n.__c.__H) return !0;
      var a = !1, w = n.__c.props !== h;
      if (n.__c.__H.__.some(function(b) {
        if (b.__N) {
          a = !0;
          var C = b.__[0];
          b.__ = b.__N, b.__N = void 0, C !== b.__[0] && (w = !0);
        }
      }), s) {
        var l = s.call(this, h, f, p);
        return a ? l || w : l;
      }
      return !a || w;
    };
    R.__f = !0;
    var s = R.shouldComponentUpdate, c = R.componentWillUpdate;
    R.componentWillUpdate = function(h, f, p) {
      if (this.__e) {
        var a = s;
        s = void 0, i(h, f, p), s = a;
      }
      c && c.call(this, h, f, p);
    }, R.shouldComponentUpdate = i;
  }
  return n.__N || n.__;
}
function Se(t, e) {
  var o = Le(le++, 3);
  !M.__s && wt(o.__H, e) && (o.__ = t, o.u = e, R.__H.__h.push(o));
}
function yt(t) {
  return ke = 5, ce(function() {
    return { current: t };
  }, []);
}
function ce(t, e) {
  var o = Le(le++, 7);
  return wt(o.__H, e) && (o.__ = t(), o.__H = e, o.__h = t), o.__;
}
function Gt() {
  for (var t; t = vt.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(be), e.__h.some(Ae), e.__h = [];
    } catch (o) {
      e.__h = [], M.__e(o, t.__v);
    }
  }
}
M.__b = function(t) {
  R = null, Ke && Ke(t);
}, M.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), et && et(t, e);
}, M.__r = function(t) {
  Qe && Qe(t), le = 0;
  var e = (R = t.__c).__H;
  e && (Ie === R ? (e.__h = [], R.__h = [], e.__.some(function(o) {
    o.__N && (o.__ = o.__N), o.u = o.__N = void 0;
  })) : (e.__h.some(be), e.__h.some(Ae), e.__h = [], le = 0)), Ie = R;
}, M.diffed = function(t) {
  Ye && Ye(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (vt.push(e) !== 1 && Je === M.requestAnimationFrame || ((Je = M.requestAnimationFrame) || Jt)(Gt)), e.__H.__.some(function(o) {
    o.u && (o.__H = o.u, o.u = void 0);
  })), Ie = R = null;
}, M.__c = function(t, e) {
  e.some(function(o) {
    try {
      o.__h.some(be), o.__h = o.__h.filter(function(n) {
        return !n.__ || Ae(n);
      });
    } catch (n) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], M.__e(n, o.__v);
    }
  }), Xe && Xe(t, e);
}, M.unmount = function(t) {
  Ze && Ze(t);
  var e, o = t.__c;
  o && o.__H && (o.__H.__.some(function(n) {
    try {
      be(n);
    } catch (i) {
      e = i;
    }
  }), o.__H = void 0, e && M.__e(e, o.__v));
};
var tt = typeof requestAnimationFrame == "function";
function Jt(t) {
  var e, o = function() {
    clearTimeout(n), tt && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(o, 35);
  tt && (e = requestAnimationFrame(o));
}
function be(t) {
  var e = R, o = t.__c;
  typeof o == "function" && (t.__c = void 0, o()), R = e;
}
function Ae(t) {
  var e = R;
  t.__c = t.__(), R = e;
}
function wt(t, e) {
  return !t || t.length !== e.length || e.some(function(o, n) {
    return o !== t[n];
  });
}
function kt(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const St = String.raw`\{\{ref:([^{}]+)}}`;
function rt() {
  return new RegExp(St, "g");
}
function zt(t, e) {
  const o = /* @__PURE__ */ new Map();
  for (const n of t.assets)
    n.enabled && n.path.trim() && (!n.shotIds.length || n.shotIds.includes(e.id)) && !e.disabledAssetIds.includes(n.id) && o.set(n.alias, n);
  return o;
}
function $t(t, e, o) {
  const n = o.trim(), i = n.endsWith(".audio"), s = i ? n.slice(0, -6) : n, c = zt(t, e).get(s);
  return c ? !i || c.kind === "video" && c.includeVideoAudio : !1;
}
function ot(t, e) {
  const o = t.shots.filter((n) => n.enabled);
  return o.length > 0 && o.every((n) => $t(t, n, e));
}
function Ct(t, e) {
  const o = [], n = zt(t, e), i = [t.promptPrefix, e.prompt, t.promptSuffix].filter(Boolean).join(`
`), s = [...i.matchAll(rt())].map((m) => m[1].trim()), c = [], h = /* @__PURE__ */ new Set(), f = (m) => {
    h.has(m.id) || (h.add(m.id), c.push(m));
  };
  [...n.values()].filter((m) => m.fixed).sort((m, k) => m.fixedOrder - k.fixedOrder || m.alias.localeCompare(k.alias)).forEach(f);
  for (const m of s) {
    const k = m.endsWith(".audio") ? m.slice(0, -6) : m, H = n.get(k);
    if (!H) {
      o.push(`未找到或已禁用素材：${m}`);
      continue;
    }
    m.endsWith(".audio") && (H.kind !== "video" || !H.includeVideoAudio) && o.push(`视频伴音未启用：${m}`), f(H);
  }
  const p = c.filter((m) => m.kind === "image"), a = c.filter((m) => m.kind === "video"), w = a.filter((m) => m.includeVideoAudio), l = c.filter((m) => m.kind === "audio"), b = w.length + l.length, C = p.length + a.length + l.length;
  p.length > 9 && o.push(`参考图 ${p.length}/9，超出 H3 上限`), a.length > 3 && o.push(`参考视频 ${a.length}/3，超出 H3 上限`), b > 3 && o.push(`有效音频 ${b}/3，超出 H3 总上限`), C > 12 && o.push(`混合文件 ${C}/12，超出 H3 上限`), b && !p.length && !a.length && o.push("音频参考不能单独使用");
  const E = a.filter((m) => typeof m.durationSeconds == "number");
  for (const m of a) (m.durationSeconds == null || m.durationSeconds < 2 || m.durationSeconds > 15) && o.push(`视频 ${m.alias} 的时长必须为 2–15 秒`);
  E.reduce((m, k) => m + (k.durationSeconds ?? 0), 0) > 15 && o.push("参考视频总时长超过 15 秒");
  const A = [...w.map((m) => m.audioDurationSeconds ?? m.durationSeconds), ...l.map((m) => m.durationSeconds)];
  A.some((m) => m == null || m < 2 || m > 15) && o.push("每路有效音频时长必须为 2–15 秒"), A.reduce((m, k) => m + (k ?? 0), 0) > 15 && o.push("有效音频总时长超过 15 秒");
  const T = /* @__PURE__ */ new Map();
  p.forEach((m, k) => T.set(m.alias, `<Picture ${k + 1}>`)), a.forEach((m, k) => T.set(m.alias, `<Video ${k + 1}>`)), w.forEach((m, k) => T.set(`${m.alias}.audio`, `<Audio ${k + 1}>`)), l.forEach((m, k) => T.set(m.alias, `<Audio ${w.length + k + 1}>`));
  const S = i.replace(rt(), (m, k) => T.get(k.trim()) ?? m), L = [...T.entries()].map(([m, k]) => ({ label: k, alias: m, kind: k.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: S, errors: o, slots: L, mixedFiles: C, audioCount: b };
}
function Kt(t) {
  var i, s, c, h, f, p;
  const e = [];
  (s = (i = t.project) == null ? void 0 : i.name) != null && s.trim() || e.push("Project name 不能为空"), (h = (c = t.project) == null ? void 0 : c.runId) != null && h.trim() || e.push("Run ID 不能为空"), (!Array.isArray(t.shots) || !t.shots.some((a) => a.enabled)) && e.push("至少需要一个启用分镜");
  const o = /* @__PURE__ */ new Set();
  for (const a of t.shots ?? [])
    (!((f = a.id) != null && f.trim()) || o.has(a.id)) && e.push(`分镜 ID 为空或重复：${a.id || "(空)"}`), o.add(a.id), a.durationSeconds > 0 || e.push(`分镜 ${a.id} 的时长必须大于 0`);
  const n = /* @__PURE__ */ new Set();
  for (const a of t.assets ?? []) {
    const w = (p = a.alias) == null ? void 0 : p.toLocaleLowerCase();
    (!a.alias || /[\s{}]/.test(a.alias) || a.alias.endsWith(".audio") || n.has(w)) && e.push(`素材别名无效或重复：${a.alias || "(空)"}`), n.add(w), a.enabled && !a.path && e.push(`素材 ${a.alias} 尚未选择文件`);
  }
  for (const a of t.shots.filter((w) => w.enabled)) e.push(...Ct(t, a).errors.map((w) => `${a.title}: ${w}`));
  return [...new Set(e)];
}
function Qt(t, e) {
  const o = [], n = new RegExp(St, "g");
  let i = 0;
  for (const s of t.matchAll(n)) {
    const c = s.index ?? 0;
    c > i && o.push({ text: t.slice(i, c), reference: !1 }), o.push({ text: s[0], reference: !0, valid: e(s[1]) }), i = c + s[0].length;
  }
  return i < t.length && o.push({ text: t.slice(i), reference: !1 }), o;
}
function je({ value: t, rows: e, onInput: o, isReferenceValid: n }) {
  const i = yt(null), s = Qt(t, n), c = (h) => {
    i.current && (i.current.scrollTop = h.currentTarget.scrollTop, i.current.scrollLeft = h.currentTarget.scrollLeft);
  };
  return /* @__PURE__ */ r("span", { class: "td-highlight-textarea", children: [
    /* @__PURE__ */ r("pre", { ref: i, class: "td-highlight-backdrop", "aria-hidden": "true", children: [
      s.map((h, f) => h.reference ? /* @__PURE__ */ r("mark", { class: h.valid ? "valid" : "invalid", children: h.text }, f) : h.text),
      t.endsWith(`
`) && " "
    ] }),
    /* @__PURE__ */ r("textarea", { class: "td-highlight-input", rows: e, value: t, onInput: o, onScroll: c })
  ] });
}
const Yt = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", postprocess: "后处理", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", postprocess: "Post-process", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function oe(t, e) {
  return Yt[t][e];
}
function de(t) {
  return (Array.isArray(t.results) && t.results.length ? t.results : t.path ? [{ path: t.path, bytes: t.bytes, modifiedAt: t.modifiedAt }] : []).filter((o) => typeof o.path == "string" && o.path.trim().length > 0).sort((o, n) => (n.modifiedAt ?? 0) - (o.modifiedAt ?? 0));
}
function Tt(t, e) {
  const o = /_video_(\d+)/i.exec(t.replace(/\\/g, "/"));
  return o ? Number(o[1]) : e;
}
function Re({ src: t, alt: e }) {
  const o = yt(null), [n, i] = I(!1);
  return Se(() => {
    const s = o.current;
    if (!s) return;
    if (!("IntersectionObserver" in window)) {
      i(!0);
      return;
    }
    const c = new IntersectionObserver((h) => {
      i(h.some((f) => f.isIntersecting));
    }, { rootMargin: "160px" });
    return c.observe(s), () => c.disconnect();
  }, []), /* @__PURE__ */ r("div", { class: "td-result-thumb", ref: o, children: n ? /* @__PURE__ */ r("video", { src: t, "aria-label": e, muted: !0, playsInline: !0, preload: "metadata", onLoadedMetadata: (s) => {
    const c = s.currentTarget;
    Number.isFinite(c.duration) && c.duration > 0.02 && (c.currentTime = Math.min(0.25, Math.max(0, c.duration - 0.05)));
  } }) : /* @__PURE__ */ r("span", { children: "…" }) });
}
function re(t, e) {
  const o = t.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!o || o.startsWith("/") || /^[A-Za-z]:\//.test(o)) return null;
  const n = o.split("/").filter(Boolean), i = n.pop();
  if (!i || n.some((c) => c === "..")) return null;
  const s = new URLSearchParams({ filename: i, type: e });
  return n.length && s.set("subfolder", n.join("/")), `/view?${s.toString()}`;
}
function Xt(t) {
  return re(t, "input");
}
function se(t) {
  return t.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function nt({ asset: t, compact: e = !1 }) {
  const o = Xt(t.path), n = `td-media-preview ${e ? "compact" : ""}`;
  return o ? t.kind === "image" ? /* @__PURE__ */ r("div", { class: n, children: /* @__PURE__ */ r("img", { src: o, alt: t.alias, loading: "lazy" }) }) : t.kind === "video" ? /* @__PURE__ */ r("div", { class: n, children: /* @__PURE__ */ r("video", { src: o, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ r("div", { class: n, children: /* @__PURE__ */ r("audio", { src: o, controls: !0, preload: "metadata" }) }) : t.path ? /* @__PURE__ */ r("div", { class: `${n} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ r("div", { class: `${n} empty`, children: "尚未选择素材 / No media selected" });
}
function Zt(t) {
  let e = 0;
  return t.shots.map((o, n) => {
    const i = {
      key: `${n}:${o.id}`,
      shot: o,
      sourceIndex: n,
      activeIndex: o.enabled ? e : -1
    };
    return o.enabled && (e += 1), i;
  });
}
function er(t, e, o) {
  return t.filter((n) => n.shot.enabled && e[n.key]).map((n) => ({
    shotId: n.shot.id,
    activeIndex: n.activeIndex,
    path: o[n.key] ?? ""
  }));
}
async function it(t) {
  const e = await fetch(t), o = await e.json();
  if (!e.ok) throw new Error(o.error || `HTTP ${e.status}`);
  return o;
}
function tr(t, e, o) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({
    projectName: t.project.name,
    runId: t.project.runId,
    shotId: e,
    activeIndex: String(o)
  }).toString()}`;
}
function rr(t) {
  return `/theodore-director/v1/postprocess/merged-videos?${new URLSearchParams({ projectName: t.project.name, runId: t.project.runId }).toString()}`;
}
function or({ plan: t, language: e }) {
  const o = ce(() => Zt(t), [t]), [n, i] = I({}), [s, c] = I({}), [h, f] = I({}), [p, a] = I(null), [w, l] = I(!1), [b, C] = I(""), [E, A] = I({ found: !1, results: [] }), [T, S] = I(!1), [L, m] = I(""), [k, H] = I(0), q = o.filter((g) => g.shot.enabled), Q = q.length > 0 && q.every((g) => s[g.key]), B = er(o, s, h), U = B.filter((g) => !g.path), K = o.some((g) => {
    var z;
    return s[g.key] && ((z = n[g.key]) == null ? void 0 : z.loading);
  }), pe = o.reduce(
    (g, z) => g + (z.shot.enabled && s[z.key] ? z.shot.durationSeconds : 0),
    0
  ), V = ce(() => de(E), [E]), F = V.find((g) => g.path === L) ?? V[0];
  Se(() => {
    let g = !1;
    const z = {}, D = {};
    return o.forEach((P) => {
      z[P.key] = P.shot.enabled, D[P.key] = { loading: P.shot.enabled, response: { found: !1, results: [] } };
    }), c((P) => {
      const x = {};
      return o.forEach((y) => {
        x[y.key] = y.shot.enabled ? P[y.key] ?? z[y.key] : !1;
      }), x;
    }), i(D), C(""), o.filter((P) => P.shot.enabled).forEach((P) => {
      it(tr(t, P.shot.id, P.activeIndex)).then((x) => {
        if (g) return;
        const y = de(x);
        i((O) => ({ ...O, [P.key]: { loading: !1, response: x } })), f((O) => {
          var X;
          return {
            ...O,
            [P.key]: y.some((W) => W.path === O[P.key]) ? O[P.key] : ((X = y[0]) == null ? void 0 : X.path) ?? ""
          };
        });
      }).catch((x) => {
        g || i((y) => ({
          ...y,
          [P.key]: { loading: !1, response: { found: !1, results: [], error: String(x) } }
        }));
      });
    }), () => {
      g = !0;
    };
  }, [t.project.name, t.project.runId, t.shots.map((g) => `${g.id}:${g.enabled}`).join("|"), k]), Se(() => {
    let g = !1;
    return S(!0), it(rr(t)).then((z) => {
      if (g) return;
      const D = de(z);
      A(z), m((P) => {
        var x;
        return D.some((y) => y.path === P) ? P : ((x = D[0]) == null ? void 0 : x.path) ?? "";
      });
    }).catch((z) => {
      g || A({ found: !1, results: [], error: String(z) });
    }).finally(() => {
      g || S(!1);
    }), () => {
      g = !0;
    };
  }, [t.project.name, t.project.runId, k]);
  const ee = () => {
    const g = !Q;
    c((z) => {
      const D = { ...z };
      return q.forEach((P) => {
        D[P.key] = g;
      }), D;
    });
  }, he = async () => {
    if (!B.length) {
      window.alert(e === "zh" ? "请至少选择一个镜头" : "Select at least one shot.");
      return;
    }
    if (U.length) {
      window.alert(e === "zh" ? `以下已选镜头没有可用结果：${U.map((g) => g.shotId).join("、")}` : `Selected shots without a result: ${U.map((g) => g.shotId).join(", ")}`);
      return;
    }
    l(!0), C("");
    try {
      const g = await fetch("/theodore-director/v1/postprocess/merge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: t.project.name, runId: t.project.runId, selections: B })
      }), z = await g.json();
      if (!g.ok) throw new Error(z.error || `HTTP ${g.status}`);
      H((D) => D + 1);
    } catch (g) {
      C(String(g instanceof Error ? g.message : g));
    } finally {
      l(!1);
    }
  }, ue = F != null && F.path ? re(F.path, "output") : null;
  return /* @__PURE__ */ r("section", { class: "td-postprocess", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: e === "zh" ? "合并视频" : "Merge videos" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "从每个镜头选择一个结果，按当前分镜顺序进行无损合并。" : "Choose one result per shot and merge them losslessly in storyboard order." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: [
        /* @__PURE__ */ r("button", { onClick: () => H((g) => g + 1), children: [
          "↻ ",
          e === "zh" ? "刷新结果" : "Refresh"
        ] }),
        /* @__PURE__ */ r("button", { onClick: ee, children: Q ? e === "zh" ? "全部取消" : "Clear all" : e === "zh" ? "一键全选" : "Select all" })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { class: "td-post-summary", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `已选择 ${B.length}/${q.length} 个启用镜头` : `${B.length}/${q.length} enabled shots selected` }),
      /* @__PURE__ */ r("span", { children: e === "zh" ? `预计时长 ${pe.toFixed(1)} 秒` : `Estimated duration ${pe.toFixed(1)} sec` }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: w || K || !B.length || !!U.length, onClick: he, children: w ? e === "zh" ? "正在合并…" : "Merging…" : e === "zh" ? "合并所选视频" : "Merge selected videos" })
    ] }),
    b && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      e === "zh" ? "合并失败：" : "Merge failed: ",
      b
    ] }),
    U.length > 0 && /* @__PURE__ */ r("div", { class: "td-post-warning", children: e === "zh" ? "已选镜头中存在尚未生成视频的镜头。" : "Some selected shots do not have generated videos yet." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: o.map((g) => {
      const z = n[g.key], D = de((z == null ? void 0 : z.response) ?? { results: [] }), P = !!s[g.key];
      return /* @__PURE__ */ r("article", { class: `td-post-shot ${P ? "selected" : ""} ${g.shot.enabled ? "" : "disabled"}`, children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: P, disabled: !g.shot.enabled, onChange: (x) => c((y) => ({ ...y, [g.key]: x.currentTarget.checked })) }),
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("strong", { children: g.shot.id }),
              /* @__PURE__ */ r("em", { children: g.shot.title })
            ] })
          ] }),
          /* @__PURE__ */ r("span", { children: [
            g.shot.durationSeconds,
            "s"
          ] })
        ] }),
        g.shot.enabled ? z != null && z.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: e === "zh" ? "正在查询生成结果…" : "Loading generated results…" }) : z != null && z.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: e === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : D.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: D.map((x, y) => {
          const O = re(x.path, "output"), X = h[g.key] === x.path, W = Tt(x.path, D.length - y);
          return /* @__PURE__ */ r("div", { class: `td-post-result ${X ? "selected" : ""}`, children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", role: "radio", "aria-checked": X, onClick: () => f((G) => ({ ...G, [g.key]: x.path })), children: [
              O ? /* @__PURE__ */ r(Re, { src: O, alt: `${g.shot.title} ${e === "zh" ? "结果" : "result"} ${W}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  e === "zh" ? `结果 ${W}` : `Result ${W}`,
                  y === 0 && /* @__PURE__ */ r("em", { children: e === "zh" ? "最新" : "Latest" })
                ] }),
                /* @__PURE__ */ r("span", { title: x.path, children: se(x.path) }),
                /* @__PURE__ */ r("small", { children: x.bytes ? `${(x.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "td-post-result-play", disabled: !O, title: e === "zh" ? "播放预览" : "Play preview", onClick: () => O && a({ path: x.path, title: `${g.shot.id} · ${g.shot.title}` }), children: "▶" })
          ] }, x.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: e === "zh" ? "未找到这个镜头的生成结果" : "No generated result found for this shot" }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: e === "zh" ? "该镜头当前已禁用，不参加合并。" : "This shot is disabled and will not be merged." })
      ] }, g.key);
    }) }),
    /* @__PURE__ */ r("section", { class: "td-post-merged", children: [
      /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: e === "zh" ? "合并结果" : "Merged results" }),
        /* @__PURE__ */ r("span", { class: `td-result-state ${V.length ? "found" : ""}`, children: T ? e === "zh" ? "查询中" : "Checking" : e === "zh" ? `${V.length} 个结果` : `${V.length} results` })
      ] }) }),
      T ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: e === "zh" ? "正在查询合并结果…" : "Loading merged results…" }) : E.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: e === "zh" ? "无法查询合并结果" : "Unable to query merged results" }) : F && ue ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
        /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
          /* @__PURE__ */ r("video", { src: ue, controls: !0, preload: "metadata", playsInline: !0 }, F.path),
          /* @__PURE__ */ r("div", { class: "td-generated-meta", title: F.path, children: F.path })
        ] }),
        /* @__PURE__ */ r("div", { class: "td-result-list", children: V.map((g, z) => {
          const D = re(g.path, "output");
          return /* @__PURE__ */ r("button", { class: `td-result-item ${g.path === F.path ? "selected" : ""}`, onClick: () => m(g.path), children: [
            D ? /* @__PURE__ */ r(Re, { src: D, alt: `${e === "zh" ? "合并结果" : "Merged result"} ${V.length - z}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
            /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
              /* @__PURE__ */ r("strong", { children: [
                e === "zh" ? `合并结果 ${V.length - z}` : `Merged result ${V.length - z}`,
                z === 0 && /* @__PURE__ */ r("em", { children: e === "zh" ? "最新" : "Latest" })
              ] }),
              /* @__PURE__ */ r("span", { children: se(g.path) }),
              /* @__PURE__ */ r("small", { children: g.bytes ? `${(g.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
            ] })
          ] }, g.path);
        }) })
      ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: e === "zh" ? "还没有合并结果" : "No merged result yet" })
    ] }),
    p && re(p.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => a(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (g) => g.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: p.title }),
        /* @__PURE__ */ r("button", { "aria-label": e === "zh" ? "关闭预览" : "Close preview", onClick: () => a(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: re(p.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { title: p.path, children: se(p.path) })
    ] }) })
  ] });
}
function nr(t) {
  const e = t.reduce((o, n) => {
    const i = /^shot_(\d+)$/i.exec(n.id.trim());
    return i ? Math.max(o, Number(i[1])) : o;
  }, 0);
  return Math.max(e, t.length) + 1;
}
function ir(t, e = 5) {
  return {
    id: `shot_${String(t).padStart(3, "0")}`,
    title: `Shot ${t}`,
    prompt: "",
    negativePrompt: "",
    durationSeconds: e,
    enabled: !0,
    latentRelay: !0,
    secondSampling: !0,
    seed: null,
    disabledAssetIds: []
  };
}
function dt(t, e, o) {
  const n = nr(t), i = Array.from({ length: e }, (s, c) => ir(n + c, o));
  return [...t, ...i];
}
const It = (t) => `${t}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, xe = (t) => JSON.parse(JSON.stringify(t)), dr = { image: "图片", video: "视频", audio: "音频" };
function st(t) {
  var o;
  const e = xe(t);
  return e.schemaVersion = 4, (o = e.project.id) != null && o.trim() || (e.project.id = It("project")), e.shots = e.shots.map((n) => ({
    ...n,
    latentRelay: n.latentRelay ?? !0,
    secondSampling: n.secondSampling ?? !0
  })), e;
}
function sr(t) {
  return t.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function ar(t) {
  const e = It(t);
  return { id: e, alias: e, kind: t, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: t === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function lr(t, e, o) {
  const n = new FormData();
  n.append("projectName", t), n.append("kind", e), n.append("file", o);
  const i = await fetch("/theodore-director/v1/assets", { method: "POST", body: n }), s = await i.json();
  if (!i.ok || !s.path) throw new Error(s.error || `HTTP ${i.status}`);
  return s.path;
}
async function cr(t, e, o) {
  const n = new URLSearchParams({
    projectName: t.project.name,
    runId: t.project.runId,
    shotId: e.id,
    activeIndex: String(o)
  }), i = await fetch(`/theodore-director/v1/generated-video?${n.toString()}`), s = await i.json();
  if (!i.ok) throw new Error(s.error || `HTTP ${i.status}`);
  return s;
}
async function pr(t) {
  var n;
  if ((n = navigator.clipboard) != null && n.writeText)
    try {
      await navigator.clipboard.writeText(t);
      return;
    } catch {
    }
  const e = document.createElement("textarea");
  e.value = t, e.style.position = "fixed", e.style.opacity = "0", document.body.append(e), e.select();
  const o = document.execCommand("copy");
  if (e.remove(), !o) throw new Error("浏览器拒绝写入剪贴板");
}
function hr({ initial: t, onSave: e, onClose: o, supportsSecondSampling: n }) {
  const [i, s] = I(() => st(t)), [c, h] = I("shots"), [f, p] = I(0), [a, w] = I(() => navigator.language.startsWith("zh") ? "zh" : "en"), [l, b] = I({}), [C, E] = I(!1), [A, T] = I(!0), [S, L] = I(0), [m, k] = I({ found: !1, results: [] }), [H, q] = I(""), [Q, B] = I(!1), [U, K] = I(""), [pe, V] = I(!1), [F, ee] = I([]), [he, ue] = I("5"), [g, z] = I("1"), [D, P] = I("5"), x = i.shots[Math.min(f, i.shots.length - 1)], y = ce(() => x ? Ct(i, x) : null, [i, x]), O = x != null && x.enabled ? i.shots.slice(0, f).filter((d) => d.enabled).length : -1, X = i.shots.length > 0 && i.shots.every((d) => d.secondSampling), W = ce(() => de(m), [m]), G = W.find((d) => d.path === H) ?? W[0], Fe = G != null && G.path ? re(G.path, "output") : null, $ = (d) => s((u) => {
    const _ = xe(u);
    return d(_), _;
  }), Oe = (d, u) => $((_) => {
    const v = d + u;
    v < 0 || v >= _.shots.length || ([_.shots[d], _.shots[v]] = [_.shots[v], _.shots[d]], p(v));
  }), jt = (d) => $((u) => {
    u.shots.length <= 1 || (u.shots.splice(d, 1), p((_) => _ > d ? _ - 1 : _ === d ? Math.min(d, u.shots.length - 1) : _));
  }), Pt = () => {
    ee(xe(i.shots)), V(!0);
  }, Nt = () => {
    const d = Number(he);
    if (!Number.isFinite(d) || d <= 0) {
      window.alert(a === "zh" ? "统一时长必须大于 0 秒" : "The shared duration must be greater than 0 seconds.");
      return;
    }
    ee((u) => u.map((_) => ({ ..._, durationSeconds: d })));
  }, At = () => {
    const d = Number(g), u = Number(D);
    if (!Number.isInteger(d) || d < 1 || d > 100) {
      window.alert(a === "zh" ? "新增镜头数量必须是 1–100 的整数" : "The shot count must be an integer from 1 to 100.");
      return;
    }
    if (!Number.isFinite(u) || u <= 0) {
      window.alert(a === "zh" ? "新增镜头时长必须大于 0 秒" : "The new-shot duration must be greater than 0 seconds.");
      return;
    }
    ee((_) => dt(_, d, u));
  }, Rt = () => {
    if (F.some((d) => !Number.isFinite(d.durationSeconds) || d.durationSeconds <= 0)) {
      window.alert(a === "zh" ? "每个镜头的时长都必须大于 0 秒" : "Every shot duration must be greater than 0 seconds.");
      return;
    }
    $((d) => {
      d.shots = xe(F);
    }), p((d) => Math.min(d, F.length - 1)), V(!1);
  }, Et = () => {
    const d = URL.createObjectURL(new Blob([JSON.stringify(i, null, 2)], { type: "application/json" })), u = document.createElement("a");
    u.href = d, u.download = `${sr(i.project.name)}.director.json`, u.click(), URL.revokeObjectURL(d);
  }, Dt = () => {
    const d = Kt(i);
    if (d.length) {
      window.alert(`计划未通过校验：

${d.join(`
`)}`);
      return;
    }
    e(i);
  };
  return Se(() => {
    let d = !1;
    return !(x != null && x.enabled) || O < 0 ? (k({ found: !1, results: [] }), q(""), B(!1), () => {
      d = !0;
    }) : (B(!0), cr(i, x, O).then((u) => {
      if (d) return;
      const _ = de(u);
      k(u), q((v) => {
        var N;
        return _.some((J) => J.path === v) ? v : ((N = _[0]) == null ? void 0 : N.path) ?? "";
      });
    }).catch((u) => {
      d || (k({ found: !1, results: [], error: String(u) }), q(""));
    }).finally(() => {
      d || B(!1);
    }), () => {
      d = !0;
    });
  }, [i.project.name, i.project.runId, x == null ? void 0 : x.id, x == null ? void 0 : x.enabled, O, S]), /* @__PURE__ */ r("div", { class: "td-shell", children: [
    /* @__PURE__ */ r("header", { children: [
      /* @__PURE__ */ r("h1", { children: oe(a, "title") }),
      /* @__PURE__ */ r("div", { class: "td-actions", children: [
        /* @__PURE__ */ r("button", { onClick: Et, children: "导出 / Export" }),
        /* @__PURE__ */ r("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ r("input", { type: "file", accept: "application/json,.json", onChange: async (d) => {
            var _;
            const u = (_ = d.currentTarget.files) == null ? void 0 : _[0];
            if (u)
              try {
                const v = JSON.parse(await u.text());
                if (!v.project || !Array.isArray(v.shots) || !Array.isArray(v.assets)) throw new Error("不是有效的 Theodore Director Plan");
                s(st(v)), p(0);
              } catch (v) {
                window.alert(String(v));
              }
          } })
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => w(a === "zh" ? "en" : "zh"), children: a === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: Dt, children: oe(a, "save") }),
        /* @__PURE__ */ r("button", { onClick: o, children: oe(a, "close") })
      ] })
    ] }),
    /* @__PURE__ */ r("nav", { children: ["shots", "assets", "settings", "postprocess"].map((d) => /* @__PURE__ */ r("button", { class: c === d ? "active" : "", onClick: () => h(d), children: oe(a, d) })) }),
    /* @__PURE__ */ r("main", { children: [
      c === "shots" && /* @__PURE__ */ r("div", { class: "td-shots", children: [
        /* @__PURE__ */ r("aside", { class: "td-shot-sidebar", children: [
          n && /* @__PURE__ */ r("button", { class: `wide td-bulk-toggle ${X ? "active" : ""}`, onClick: () => $((d) => {
            const u = !d.shots.every((_) => _.secondSampling);
            d.shots.forEach((_) => {
              _.secondSampling = u;
            });
          }), children: a === "zh" ? `全部二次采样：${X ? "开" : "关"}` : `Second sampling for all: ${X ? "ON" : "OFF"}` }),
          /* @__PURE__ */ r("div", { class: "td-shot-list", children: i.shots.map((d, u) => /* @__PURE__ */ r("div", { class: `td-shot-card ${u === f ? "selected" : ""}`, onClick: () => p(u), children: [
            /* @__PURE__ */ r("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ r("button", { class: "td-shot-delete", disabled: i.shots.length <= 1, title: a === "zh" ? i.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : i.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": a === "zh" ? "删除镜头" : "Delete shot", onClick: (_) => {
              _.stopPropagation(), jt(u);
            }, children: "×" }) }),
            /* @__PURE__ */ r("strong", { children: [
              u + 1,
              ". ",
              d.title
            ] }),
            /* @__PURE__ */ r("span", { children: [
              d.durationSeconds,
              "s · ",
              d.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-move-actions", children: [
              /* @__PURE__ */ r("button", { title: a === "zh" ? "上移镜头" : "Move shot up", onClick: (_) => {
                _.stopPropagation(), Oe(u, -1);
              }, children: "↑" }),
              /* @__PURE__ */ r("button", { title: a === "zh" ? "下移镜头" : "Move shot down", onClick: (_) => {
                _.stopPropagation(), Oe(u, 1);
              }, children: "↓" })
            ] })
          ] }, d.id)) }),
          /* @__PURE__ */ r("button", { class: "wide", onClick: () => $((d) => {
            const u = d.shots.length;
            d.shots = dt(d.shots, 1, 5), p(u);
          }), children: [
            "＋ ",
            oe(a, "addShot")
          ] }),
          /* @__PURE__ */ r("div", { class: "td-shot-batch-entry", children: /* @__PURE__ */ r("button", { class: "wide", onClick: Pt, children: a === "zh" ? "批量处理镜头" : "Batch edit shots" }) })
        ] }),
        x && /* @__PURE__ */ r("section", { class: "td-form", children: [
          /* @__PURE__ */ r("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ r("label", { children: [
              "ID",
              /* @__PURE__ */ r("input", { value: x.id, onInput: (d) => $((u) => {
                u.shots[f].id = d.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ r("input", { value: x.title, onInput: (d) => $((u) => {
                u.shots[f].title = d.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: x.durationSeconds, onInput: (d) => $((u) => {
                u.shots[f].durationSeconds = Number(d.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: x.enabled, onChange: (d) => $((u) => {
                  u.shots[f].enabled = d.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: O === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: x.latentRelay, onChange: (d) => $((u) => {
                  u.shots[f].latentRelay = d.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: [
                  "latent接力 / Relay",
                  O === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              n && /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: "开启时执行 RTX 超分和第二次 H3 采样，关闭时直接使用第一采画面", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: x.secondSampling, onChange: (d) => $((u) => {
                  u.shots[f].secondSampling = d.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: "二次采样 / 2nd pass" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { class: "td-field-label", children: [
              "提示词（使用 ",
              /* @__PURE__ */ r("code", { children: "{{ref:别名}}" }),
              "）"
            ] }),
            /* @__PURE__ */ r(je, { rows: 10, value: x.prompt, isReferenceValid: (d) => $t(i, x, d), onInput: (d) => $((u) => {
              u.shots[f].prompt = d.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ r("textarea", { rows: 3, value: x.negativePrompt, onInput: (d) => $((u) => {
              u.shots[f].negativePrompt = d.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ r("legend", { children: "本镜头素材 / Shot media" }),
            i.assets.map((d) => {
              const u = !x.disabledAssetIds.includes(d.id), _ = se(d.path) || d.alias, v = `{{ref:${d.alias}}}`;
              return /* @__PURE__ */ r("div", { class: `td-shot-media-card ${u ? "" : "disabled"}`, children: [
                /* @__PURE__ */ r("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ r(nt, { asset: d, compact: !0 }),
                  /* @__PURE__ */ r("span", { class: "td-shot-media-kind", children: a === "zh" ? dr[d.kind] : d.kind }),
                  /* @__PURE__ */ r("label", { class: "td-shot-media-toggle", title: u ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ r("input", { type: "checkbox", checked: u, onChange: (N) => $((J) => {
                    const Y = J.shots[f].disabledAssetIds;
                    J.shots[f].disabledAssetIds = N.currentTarget.checked ? Y.filter((ie) => ie !== d.id) : [.../* @__PURE__ */ new Set([...Y, d.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ r("button", { class: `td-shot-media-name ${U === d.id ? "copied" : ""}`, title: `${_}
${a === "zh" ? "点击复制" : "Click to copy"} ${v}`, onClick: async () => {
                  try {
                    await pr(v), K(d.id), window.setTimeout(() => K((N) => N === d.id ? "" : N), 1400);
                  } catch (N) {
                    window.alert(`${a === "zh" ? "复制失败" : "Copy failed"}: ${String(N)}`);
                  }
                }, children: [
                  /* @__PURE__ */ r("span", { children: _ }),
                  U === d.id && /* @__PURE__ */ r("em", { children: a === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, d.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ r("aside", { class: "td-preview", children: [
          /* @__PURE__ */ r("details", { open: C, onToggle: (d) => E(d.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: oe(a, "preview") }),
              /* @__PURE__ */ r("span", { class: "td-summary-counts", children: [
                "Picture ",
                (y == null ? void 0 : y.slots.filter((d) => d.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (y == null ? void 0 : y.slots.filter((d) => d.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (y == null ? void 0 : y.audioCount) ?? 0,
                "/3 · Files ",
                (y == null ? void 0 : y.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body", children: [
              y != null && y.errors.length ? /* @__PURE__ */ r("ul", { class: "errors", children: y.errors.map((d) => /* @__PURE__ */ r("li", { children: d })) }) : /* @__PURE__ */ r("p", { class: "ok", children: oe(a, "noErrors") }),
              /* @__PURE__ */ r("ol", { children: y == null ? void 0 : y.slots.map((d) => /* @__PURE__ */ r("li", { children: [
                /* @__PURE__ */ r("code", { children: d.label }),
                " ← ",
                d.alias
              ] })) }),
              /* @__PURE__ */ r("pre", { children: y == null ? void 0 : y.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ r("details", { open: A, onToggle: (d) => T(d.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: a === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ r("span", { class: `td-result-state ${W.length ? "found" : ""}`, children: Q ? a === "zh" ? "查询中" : "Checking" : W.length ? a === "zh" ? `${W.length} 个结果` : `${W.length} results` : a === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ r("div", { class: "td-result-actions", children: /* @__PURE__ */ r("button", { onClick: () => L((d) => d + 1), children: [
                "↻ ",
                a === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              Q ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: a === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : m.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: a === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again." }) : G && Fe ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
                /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
                  /* @__PURE__ */ r("video", { src: Fe, controls: !0, preload: "metadata", playsInline: !0 }, G.path),
                  /* @__PURE__ */ r("div", { class: "td-generated-meta", title: G.path, children: [
                    G.path,
                    G.bytes ? ` · ${(G.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                  ] })
                ] }),
                /* @__PURE__ */ r("div", { class: "td-result-list", "aria-label": a === "zh" ? "全部生成结果" : "All generated results", children: W.map((d, u) => {
                  const _ = re(d.path, "output"), v = Tt(d.path, W.length - u), N = d.modifiedAt ? new Date(d.modifiedAt * 1e3).toLocaleString(a === "zh" ? "zh-CN" : "en-US") : "";
                  return /* @__PURE__ */ r("button", { class: `td-result-item ${d.path === G.path ? "selected" : ""}`, onClick: () => q(d.path), children: [
                    _ ? /* @__PURE__ */ r(Re, { src: _, alt: `${a === "zh" ? "结果" : "Result"} ${v}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: /* @__PURE__ */ r("span", { children: "×" }) }),
                    /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
                      /* @__PURE__ */ r("strong", { children: [
                        a === "zh" ? `结果 ${v}` : `Result ${v}`,
                        u === 0 && /* @__PURE__ */ r("em", { children: a === "zh" ? "最新" : "Latest" })
                      ] }),
                      /* @__PURE__ */ r("span", { title: d.path, children: se(d.path) }),
                      /* @__PURE__ */ r("small", { children: [d.bytes ? `${(d.bytes / 1024 / 1024).toFixed(1)} MB` : "", N].filter(Boolean).join(" · ") })
                    ] })
                  ] }, d.path);
                }) })
              ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: a === "zh" ? "未在预期路径找到本段视频" : "No video found at the expected path" })
            ] })
          ] })
        ] })
      ] }),
      c === "assets" && /* @__PURE__ */ r("div", { class: "td-assets", children: [
        /* @__PURE__ */ r("div", { class: "td-toolbar", children: ["image", "video", "audio"].map((d) => /* @__PURE__ */ r("button", { onClick: () => $((u) => u.assets.push(ar(d))), children: [
          "＋ ",
          d
        ] })) }),
        i.assets.map((d, u) => /* @__PURE__ */ r("article", { children: /* @__PURE__ */ r("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ r("div", { class: "td-grid", children: [
              /* @__PURE__ */ r("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ r("input", { value: d.alias, onInput: (_) => $((v) => {
                  v.assets[u].alias = _.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ r("select", { value: d.kind, onChange: (_) => $((v) => {
                  v.assets[u].kind = _.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ r("option", { children: "image" }),
                  /* @__PURE__ */ r("option", { children: "video" }),
                  /* @__PURE__ */ r("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ r("input", { value: d.path, onInput: (_) => $((v) => {
                  v.assets[u].path = _.currentTarget.value;
                }) }),
                /* @__PURE__ */ r("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ r("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ r("input", { type: "file", accept: d.kind === "image" ? "image/*" : d.kind === "video" ? "video/*" : "audio/*", onChange: async (_) => {
                      var J;
                      const v = _.currentTarget, N = (J = v.files) == null ? void 0 : J[0];
                      if (N) {
                        b((Y) => ({ ...Y, [d.id]: N.name }));
                        try {
                          const Y = await lr(i.project.name, d.kind, N);
                          $((ie) => {
                            const He = ie.assets.find((Mt) => Mt.id === d.id);
                            He && (He.path = Y);
                          });
                        } catch (Y) {
                          window.alert(String(Y));
                        } finally {
                          b((Y) => {
                            const ie = { ...Y };
                            return delete ie[d.id], ie;
                          }), v.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ r("span", { class: "td-file-name", title: l[d.id] || d.path, children: l[d.id] ? `${a === "zh" ? "上传中" : "Uploading"}: ${l[d.id]}` : se(d.path) || (a === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ r("input", { type: "number", min: "0", step: "0.1", value: d.durationSeconds ?? "", onInput: (_) => $((v) => {
                  v.assets[u].durationSeconds = _.currentTarget.value ? Number(_.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ r("input", { type: "number", value: d.fixedOrder, onInput: (_) => $((v) => {
                  v.assets[u].fixedOrder = Number(_.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ r("input", { value: d.shotIds.join(", "), onInput: (_) => $((v) => {
                  v.assets[u].shotIds = _.currentTarget.value.split(",").map((N) => N.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-flags", children: [
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: d.enabled, onChange: (_) => $((v) => {
                  v.assets[u].enabled = _.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: d.fixed, onChange: (_) => $((v) => {
                  v.assets[u].fixed = _.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              d.kind === "video" && /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: d.includeVideoAudio, onChange: (_) => $((v) => {
                  v.assets[u].includeVideoAudio = _.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ r("button", { class: "danger", onClick: () => $((_) => {
                _.assets.splice(u, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ r(nt, { asset: d })
        ] }) }, d.id))
      ] }),
      c === "settings" && /* @__PURE__ */ r("section", { class: "td-form settings", children: [
        /* @__PURE__ */ r("label", { children: [
          "Project name",
          /* @__PURE__ */ r("input", { value: i.project.name, onInput: (d) => $((u) => {
            u.project.name = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Run ID",
          /* @__PURE__ */ r("input", { value: i.project.runId, onInput: (d) => $((u) => {
            u.project.runId = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "FPS",
          /* @__PURE__ */ r("input", { type: "number", value: i.defaults.fps, onInput: (d) => $((u) => {
            u.defaults.fps = Number(d.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Base seed",
          /* @__PURE__ */ r("input", { type: "number", value: i.defaults.baseSeed, onInput: (d) => $((u) => {
            u.defaults.baseSeed = Number(d.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ r(je, { value: i.promptPrefix, isReferenceValid: (d) => ot(i, d), onInput: (d) => $((u) => {
            u.promptPrefix = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ r(je, { value: i.promptSuffix, isReferenceValid: (d) => ot(i, d), onInput: (d) => $((u) => {
            u.promptSuffix = d.currentTarget.value;
          }) })
        ] })
      ] }),
      c === "postprocess" && /* @__PURE__ */ r(or, { plan: i, language: a })
    ] }),
    pe && /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": a === "zh" ? "批量处理镜头" : "Batch edit shots", children: [
      /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("h2", { children: a === "zh" ? "批量处理镜头" : "Batch edit shots" }),
          /* @__PURE__ */ r("p", { children: a === "zh" ? `当前共 ${F.length} 个镜头` : `${F.length} shots` })
        ] }),
        /* @__PURE__ */ r("button", { "aria-label": a === "zh" ? "关闭" : "Close", onClick: () => V(!1), children: "×" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-tools", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            a === "zh" ? "所有镜头时长" : "Duration for all shots",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: he, onInput: (d) => ue(d.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: a === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: Nt, children: a === "zh" ? "一键设置所有时长" : "Set all durations" })
        ] }),
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            a === "zh" ? "新增镜头数量" : "New shot count",
            /* @__PURE__ */ r("input", { type: "number", min: "1", max: "100", step: "1", value: g, onInput: (d) => z(d.currentTarget.value) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            a === "zh" ? "每个镜头时长" : "Duration per shot",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: D, onInput: (d) => P(d.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: a === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: At, children: a === "zh" ? "批量新增镜头" : "Add shots" })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-table", children: [
        /* @__PURE__ */ r("div", { class: "td-batch-row td-batch-table-head", children: [
          /* @__PURE__ */ r("span", { children: "#" }),
          /* @__PURE__ */ r("span", { children: a === "zh" ? "镜头名" : "Shot name" }),
          /* @__PURE__ */ r("span", { children: a === "zh" ? "具体时长" : "Duration" }),
          /* @__PURE__ */ r("span", { children: [
            "latent ",
            a === "zh" ? "接力" : "relay"
          ] })
        ] }),
        F.map((d, u) => /* @__PURE__ */ r("div", { class: "td-batch-row", children: [
          /* @__PURE__ */ r("span", { children: u + 1 }),
          /* @__PURE__ */ r("input", { value: d.title, "aria-label": `${a === "zh" ? "镜头名" : "Shot name"} ${u + 1}`, onInput: (_) => ee((v) => v.map((N, J) => J === u ? { ...N, title: _.currentTarget.value } : N)) }),
          /* @__PURE__ */ r("label", { class: "td-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: d.durationSeconds, onInput: (_) => ee((v) => v.map((N, J) => J === u ? { ...N, durationSeconds: Number(_.currentTarget.value) } : N)) }),
            /* @__PURE__ */ r("span", { children: a === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-relay", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: d.latentRelay, onChange: (_) => ee((v) => v.map((N, J) => J === u ? { ...N, latentRelay: _.currentTarget.checked } : N)) }),
            /* @__PURE__ */ r("span", { children: d.latentRelay ? a === "zh" ? "开" : "ON" : a === "zh" ? "关" : "OFF" })
          ] })
        ] }, d.id))
      ] }),
      /* @__PURE__ */ r("footer", { children: [
        /* @__PURE__ */ r("button", { onClick: () => V(!1), children: a === "zh" ? "取消" : "Cancel" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: Rt, children: a === "zh" ? "应用更改" : "Apply changes" })
      ] })
    ] }) })
  ] });
}
function ur(t, e, o = !1) {
  const n = document.getElementById("theodore-director-modal");
  if (n) {
    n.focus();
    return;
  }
  const i = document.createElement("div");
  i.id = "theodore-director-modal", i.className = "td-modal", i.tabIndex = -1, document.body.append(i);
  const s = (h) => {
    h.key === "Escape" && c();
  }, c = () => {
    document.removeEventListener("keydown", s), Ge(null, i), i.remove();
  };
  document.addEventListener("keydown", s), Ge(/* @__PURE__ */ r(hr, { initial: t, onSave: (h) => {
    e(h), c();
  }, onClose: c, supportsSecondSampling: o }), i), i.focus();
}
const fr = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-highlight-textarea{position:relative;display:block;width:100%;min-width:0}.td-highlight-backdrop,.td-form textarea.td-highlight-input{box-sizing:border-box;width:100%;margin:0;padding:7px 9px;font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,monospace;font-size:inherit;line-height:1.45;letter-spacing:normal;-moz-tab-size:8;tab-size:8;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.td-highlight-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border:1px solid transparent;border-radius:6px;background:#222a35;color:var(--td-text);pointer-events:none}.td-form textarea.td-highlight-input{position:relative;z-index:1;display:block;background:transparent;color:transparent;caret-color:var(--td-text);-webkit-text-fill-color:transparent}.td-highlight-input::selection{background:#5898d46b}.td-highlight-backdrop mark{padding:1px 2px;border-radius:3px;color:inherit}.td-highlight-backdrop mark.valid{background:#1d6b50;color:#bfffe6}.td-highlight-backdrop mark.invalid{background:#7a2931;color:#ffd1d5;text-decoration:underline;text-decoration-color:#ff9aa4;text-underline-offset:2px}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-generated-results{display:flex;flex-direction:column;gap:12px}.td-result-list{display:flex;flex-direction:column;gap:7px;max-height:280px;overflow:auto;padding-right:3px}.td-shell button.td-result-item{display:grid;grid-template-columns:112px minmax(0,1fr);gap:10px;align-items:center;width:100%;padding:6px;text-align:left;background:#151b23}.td-shell button.td-result-item.selected{border-color:var(--td-accent);background:#1c2a2a}.td-result-thumb{width:112px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:5px;background:#090c10;color:var(--td-muted)}.td-result-thumb img,.td-result-thumb video{display:block;width:100%;height:100%;object-fit:contain}.td-result-item-copy{display:flex;min-width:0;flex-direction:column;gap:3px}.td-result-item-copy>strong{display:flex;align-items:center;gap:7px;color:var(--td-text)}.td-result-item-copy>strong em{padding:1px 6px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-result-item-copy>span,.td-result-item-copy>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-result-item-copy>small{font-size:10px}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}.td-shot-sidebar{display:flex;flex-direction:column}.td-shot-list{flex:none}.td-shot-batch-entry{display:flex;align-items:flex-end;flex:1;min-height:90px;padding-top:14px}.td-shot-batch-entry button{border-color:#527061;background:#1b2c28;color:var(--td-accent)}.td-batch-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:28px;background:#05080dbd;box-sizing:border-box}.td-batch-panel{display:flex;flex-direction:column;width:min(920px,100%);max-height:min(820px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-batch-header h2{font-size:18px;margin:0}.td-batch-header p{margin:3px 0 0;color:var(--td-muted)}.td-batch-header>button{font-size:20px;line-height:1;padding:5px 9px}.td-batch-tools{display:grid;grid-template-columns:1fr 1.4fr;gap:12px;padding:14px 18px;border-bottom:1px solid var(--td-line);background:#151b23}.td-batch-tools>div{display:flex;align-items:end;gap:8px;padding:10px;border:1px solid var(--td-line);border-radius:7px}.td-batch-tools label{display:flex;flex:1;flex-direction:column;gap:4px;color:var(--td-muted);white-space:nowrap}.td-batch-tools label>span,.td-batch-duration{display:flex;align-items:center;gap:6px}.td-batch-tools input{width:100%}.td-batch-tools em{color:var(--td-muted);font-style:normal}.td-batch-tools button{white-space:nowrap}.td-batch-table{overflow:auto;padding:0 18px}.td-batch-row{display:grid;grid-template-columns:42px minmax(180px,1fr) 150px 120px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-batch-table-head{position:sticky;top:0;z-index:1;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-batch-duration input{min-width:0;width:100%}.td-batch-duration>span{color:var(--td-muted)}.td-batch-relay{display:flex;align-items:center;gap:7px;justify-content:flex-start;color:var(--td-text)}.td-batch-relay input{width:17px;height:17px;margin:0}.td-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-postprocess{display:flex;flex-direction:column;gap:14px;max-width:1500px;margin:0 auto}.td-post-header,.td-post-summary,.td-post-merged{border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px}.td-post-header h2,.td-post-merged h2{margin:0;font-size:17px}.td-post-header p{margin:4px 0 0;color:var(--td-muted)}.td-post-actions{display:flex;gap:8px;flex:none}.td-post-summary{display:flex;align-items:center;gap:18px;padding:10px 14px;color:var(--td-muted)}.td-post-summary button{margin-left:auto}.td-post-summary button:disabled{opacity:.5;cursor:not-allowed}.td-post-error,.td-post-warning{padding:10px 13px;border-radius:7px}.td-post-error{border:1px solid #8b4149;background:#442228;color:#ffd1d5;white-space:pre-wrap}.td-post-warning{border:1px solid #836a32;background:#3a301c;color:#f4d991}.td-post-shot-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(390px,1fr));gap:12px;align-items:start}.td-post-shot{min-width:0;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel);overflow:hidden}.td-post-shot.selected{border-color:#527e6c}.td-post-shot.disabled{opacity:.62}.td-post-shot>header{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid var(--td-line);background:#1d2530}.td-post-shot>header>label{display:flex;align-items:center;gap:9px;min-width:0;cursor:pointer}.td-post-shot>header input{width:18px;height:18px;margin:0;flex:none}.td-post-shot>header label>span{display:flex;min-width:0;gap:8px;align-items:baseline}.td-post-shot>header strong{color:var(--td-text)}.td-post-shot>header em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted);font-style:normal}.td-post-shot>header>span{flex:none;padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted)}.td-post-shot-empty{min-height:96px;display:flex;align-items:center;justify-content:center;padding:12px;color:var(--td-muted);text-align:center}.td-post-result-list{display:flex;flex-direction:column;gap:7px;max-height:360px;overflow:auto;padding:9px}.td-post-result{display:grid;grid-template-columns:minmax(0,1fr) 35px;gap:6px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:5px}.td-post-result.selected{border-color:var(--td-accent);background:#1c2a2a}.td-shell button.td-post-result-choice{display:grid;grid-template-columns:112px minmax(0,1fr);gap:9px;align-items:center;min-width:0;padding:0;border:0;background:transparent;text-align:left}.td-post-result-choice>span{display:flex;min-width:0;flex-direction:column;gap:3px}.td-post-result-choice>span>strong{display:flex;align-items:center;gap:6px}.td-post-result-choice>span>strong em{padding:1px 5px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-post-result-choice>span>span,.td-post-result-choice>span>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-post-result-choice>span>small{font-size:10px}.td-post-result-play{width:35px;height:35px;padding:0!important}.td-post-result-play:disabled{opacity:.35;cursor:not-allowed}.td-post-merged{padding:12px}.td-post-merged>header>div{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px}.td-post-merged .td-generated-results{display:grid;grid-template-columns:minmax(360px,1.6fr) minmax(300px,1fr);align-items:start}.td-post-merged .td-result-list{max-height:420px}.td-post-preview-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:30;display:flex;align-items:center;justify-content:center;padding:26px;background:#030609d6}.td-post-preview-overlay>section{width:min(980px,100%);max-height:calc(100vh - 52px);overflow:auto;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 80px #000c}.td-post-preview-overlay header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--td-line)}.td-post-preview-overlay header button{font-size:20px;line-height:1;padding:5px 9px}.td-post-preview-overlay video{display:block;width:100%;max-height:calc(100vh - 170px);background:#070a0e}.td-post-preview-overlay p{margin:0;padding:9px 12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:900px){.td-post-shot-list,.td-post-merged .td-generated-results{grid-template-columns:1fr}.td-post-header{align-items:flex-start;flex-direction:column}.td-post-actions{width:100%}.td-post-actions button{flex:1}.td-post-summary{align-items:stretch;flex-direction:column;gap:7px}.td-post-summary button{margin:4px 0 0}.td-post-result-list{max-height:none}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}", at = "theodore-director-styles";
function mr() {
  if (document.getElementById(at)) return;
  const t = document.createElement("style");
  t.id = at, t.textContent = fr, document.head.append(t);
}
mr();
const gr = "/scripts/app.js";
import(
  /* @vite-ignore */
  gr
).then(({ app: t }) => {
  t.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(e, o) {
      if (o.name !== "TheodoreDirector_Project") return;
      const n = e.prototype.onNodeCreated;
      e.prototype.onNodeCreated = function() {
        var s, c;
        n == null || n.apply(this);
        const i = (s = this.widgets) == null ? void 0 : s.find((h) => h.name === "plan_json");
        i && (i.type = "hidden", i.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          try {
            const h = JSON.parse(String(i.value));
            ur(h, (f) => {
              var p, a;
              i.value = JSON.stringify(f, null, 2), this.setDirtyCanvas(!0, !0), (a = (p = t.graph) == null ? void 0 : p.setDirtyCanvas) == null || a.call(p, !0, !0);
            }, !0);
          } catch (h) {
            window.alert(`Theodore Director: ${h instanceof Error ? h.message : String(h)}`);
          }
        }), this.size = [Math.max(((c = this.size) == null ? void 0 : c[0]) ?? 300, 360), 110]);
      };
    }
  });
});
