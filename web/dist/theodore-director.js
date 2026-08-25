var Ce, D, ft, oe, Ge, gt, bt, Ne, be, he, _t, Oe, De, Le, we = {}, ke = [], Wt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Te = Array.isArray;
function re(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Ue(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function qt(e, t, n) {
  var o, i, a, l = {};
  for (a in t) a == "key" ? o = t[a] : a == "ref" ? i = t[a] : l[a] = t[a];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ce.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (a in e.defaultProps) l[a] === void 0 && (l[a] = e.defaultProps[a]);
  return _e(e, l, o, i, null);
}
function _e(e, t, n, o, i) {
  var a = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++ft, __i: -1, __u: 0 };
  return i == null && D.vnode != null && D.vnode(a), a;
}
function Ie(e) {
  return e.children;
}
function xe(e, t) {
  this.props = e, this.context = t;
}
function ae(e, t) {
  if (t == null) return e.__ ? ae(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? ae(e) : null;
}
function Kt(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, o = [], i = [], a = re({}, t);
    a.__v = t.__v + 1, D.vnode && D.vnode(a), Be(e.__P, a, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, o, n ?? ae(t), !!(32 & t.__u), i), a.__v = t.__v, a.__.__k[a.__i] = a, kt(o, a, i), t.__e = t.__ = null, a.__e != n && xt(a);
  }
}
function xt(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), xt(e);
}
function Je(e) {
  (!e.__d && (e.__d = !0) && oe.push(e) && !ze.__r++ || Ge != D.debounceRendering) && ((Ge = D.debounceRendering) || gt)(ze);
}
function ze() {
  try {
    for (var e, t = 1; oe.length; ) oe.length > t && oe.sort(bt), e = oe.shift(), t = oe.length, Kt(e);
  } finally {
    oe.length = ze.__r = 0;
  }
}
function vt(e, t, n, o, i, a, l, p, f, h, s) {
  var w, c, v, C, M, j, A = o && o.__k || ke, S = t.length;
  for (f = Gt(n, t, A, f, S), w = 0; w < S; w++) (v = n.__k[w]) != null && (c = v.__i != -1 && A[v.__i] || we, v.__i = w, j = Be(e, v, c, i, a, l, p, f, h, s), C = v.__e, v.ref && c.ref != v.ref && (c.ref && He(c.ref, null, v), s.push(v.ref, v.__c || C, v)), M == null && C != null && (M = C), 4 & v.__u ? (f = yt(v, f, e), c.__e && (c.__e = null)) : typeof v.type == "function" && j !== void 0 ? f = j : C && (f = C.nextSibling), v.__u &= -7);
  return n.__e = M, f;
}
function Gt(e, t, n, o, i) {
  var a, l, p, f, h, s = n.length, w = s, c = 0;
  for (e.__k = new Array(i), a = 0; a < i; a++) (l = t[a]) != null && typeof l != "boolean" && typeof l != "function" ? (typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? l = e.__k[a] = _e(null, l, null, null, null) : Te(l) ? l = e.__k[a] = _e(Ie, { children: l }, null, null, null) : l.constructor === void 0 && l.__b > 0 ? l = e.__k[a] = _e(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : e.__k[a] = l, f = a + c, l.__ = e, l.__b = e.__b + 1, p = null, (h = l.__i = Jt(l, n, f, w)) != -1 && (w--, (p = n[h]) && (p.__u |= 2)), p == null || p.__v == null ? (h == -1 && (i > s ? c-- : i < s && c++), typeof l.type != "function" && (l.__u |= 4)) : h != f && (h == f - 1 ? c-- : h == f + 1 ? c++ : (h > f ? c-- : c++, l.__u |= 4))) : e.__k[a] = null;
  if (w) for (a = 0; a < s; a++) (p = n[a]) != null && (2 & p.__u) == 0 && (p.__e == o && (o = ae(p)), St(p, p));
  return o;
}
function yt(e, t, n) {
  var o, i;
  if (typeof e.type == "function") {
    for (o = e.__k, i = 0; o && i < o.length; i++) o[i] && (o[i].__ = e, t = yt(o[i], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = ae(e)), t = n.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Jt(e, t, n, o) {
  var i, a, l, p = e.key, f = e.type, h = t[n], s = h != null && (2 & h.__u) == 0;
  if (h === null && p == null || s && p == h.key && f == h.type) return n;
  if (o > (s ? 1 : 0)) {
    for (i = n - 1, a = n + 1; i >= 0 || a < t.length; ) if ((h = t[l = i >= 0 ? i-- : a++]) != null && (2 & h.__u) == 0 && p == h.key && f == h.type) return l;
  }
  return -1;
}
function Qe(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Wt.test(t) ? n : n + "px";
}
function ge(e, t, n, o, i) {
  var a, l;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof o == "string" && (e.style.cssText = o = ""), o) for (t in o) n && t in n || Qe(e.style, t, "");
    if (n) for (t in n) o && n[t] == o[t] || Qe(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(_t, "$1")), l = t.toLowerCase(), t = l in e || t == "onFocusOut" || t == "onFocusIn" ? l.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = n, n ? o ? n[he] = o[he] : (n[he] = Oe, e.addEventListener(t, a ? Le : De, a)) : e.removeEventListener(t, a ? Le : De, a);
  else {
    if (i == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function Xe(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t[be] == null) t[be] = Oe++;
      else if (t[be] < n[he]) return;
      return n(D.event ? D.event(t) : t);
    }
  };
}
function Be(e, t, n, o, i, a, l, p, f, h) {
  var s, w, c, v, C, M, j, A, S, q, b, z, H, X, Z, m, $ = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (f = !!(32 & n.__u), a = [p = t.__e = n.__e]), (s = D.__b) && s(t);
  e: if (typeof $ == "function") {
    w = l.length;
    try {
      if (S = t.props, q = $.prototype && $.prototype.render, b = (s = $.contextType) && o[s.__c], z = s ? b ? b.props.value : s.__ : o, n.__c ? A = (c = t.__c = n.__c).__ = c.__E : (q ? t.__c = c = new $(S, z) : (t.__c = c = new xe(S, z), c.constructor = $, c.render = Xt), b && b.sub(c), c.state || (c.state = {}), c.__n = o, v = c.__d = !0, c.__h = [], c._sb = []), q && c.__s == null && (c.__s = c.state), q && $.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = re({}, c.__s)), re(c.__s, $.getDerivedStateFromProps(S, c.__s))), C = c.props, M = c.state, c.__v = t, v) q && $.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), q && c.componentDidMount != null && c.__h.push(c.componentDidMount);
      else {
        if (q && $.getDerivedStateFromProps == null && S !== C && c.componentWillReceiveProps != null && c.componentWillReceiveProps(S, z), t.__v == n.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(S, c.__s, z) === !1) {
          t.__v != n.__v && (c.props = S, c.state = c.__s, c.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(E) {
            E && (E.__ = t);
          }), ke.push.apply(c.__h, c._sb), c._sb = [], c.__h.length && l.push(c), p = ae(n);
          break e;
        }
        c.componentWillUpdate != null && c.componentWillUpdate(S, c.__s, z), q && c.componentDidUpdate != null && c.__h.push(function() {
          c.componentDidUpdate(C, M, j);
        });
      }
      if (c.context = z, c.props = S, c.__P = e, c.__e = !1, H = D.__r, X = 0, q) c.state = c.__s, c.__d = !1, H && H(t), s = c.render(c.props, c.state, c.context), ke.push.apply(c.__h, c._sb), c._sb = [];
      else do
        c.__d = !1, H && H(t), s = c.render(c.props, c.state, c.context), c.state = c.__s;
      while (c.__d && ++X < 25);
      c.state = c.__s, c.getChildContext != null && (o = re(re({}, o), c.getChildContext())), q && !v && c.getSnapshotBeforeUpdate != null && (j = c.getSnapshotBeforeUpdate(C, M)), Z = s != null && s.type === Ie && s.key == null ? zt(s.props.children) : s, p = vt(e, Te(Z) ? Z : [Z], t, n, o, i, a, l, p, f, h), c.base = t.__e, t.__u &= -161, c.__h.length && l.push(c), A && (c.__E = c.__ = null);
    } catch (E) {
      if (l.length = w, t.__v = null, f || a != null) {
        if (E.then) {
          for (t.__u |= f ? 160 : 128; p && p.nodeType == 8 && p.nextSibling; ) p = p.nextSibling;
          a != null && (a[a.indexOf(p)] = null), t.__e = p;
        } else if (a != null) for (m = a.length; m--; ) Ue(a[m]);
      } else t.__e = n.__e;
      t.__k == null && (t.__k = n.__k || []), E.then || wt(t), D.__e(E, t, n);
    }
  } else a == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : p = t.__e = Qt(n.__e, t, n, o, i, a, l, f, h);
  return (s = D.diffed) && s(t), 128 & t.__u ? void 0 : p;
}
function wt(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(wt));
}
function kt(e, t, n) {
  for (var o = 0; o < n.length; o++) He(n[o], n[++o], n[++o]);
  D.__c && D.__c(t, e), e.some(function(i) {
    try {
      e = i.__h, i.__h = [], e.some(function(a) {
        a.call(i);
      });
    } catch (a) {
      D.__e(a, i.__v);
    }
  });
}
function zt(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : Te(e) ? e.map(zt) : e.constructor !== void 0 ? null : re({}, e);
}
function Qt(e, t, n, o, i, a, l, p, f) {
  var h, s, w, c, v, C, M, j = n.props || we, A = t.props, S = t.type;
  if (S == "svg" ? i = "http://www.w3.org/2000/svg" : S == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), a != null) {
    for (h = 0; h < a.length; h++) if ((v = a[h]) && "setAttribute" in v == !!S && (S ? v.localName == S : v.nodeType == 3)) {
      e = v, a[h] = null;
      break;
    }
  }
  if (e == null) {
    if (S == null) return document.createTextNode(A);
    e = document.createElementNS(i, S, A.is && A), p && (D.__m && D.__m(t, a), p = !1), a = null;
  }
  if (S == null) j === A || p && e.data == A || (e.data = A);
  else {
    if (a = S == "textarea" && A.defaultValue != null ? null : a && Ce.call(e.childNodes), !p && a != null) for (j = {}, h = 0; h < e.attributes.length; h++) j[(v = e.attributes[h]).name] = v.value;
    for (h in j) v = j[h], h == "dangerouslySetInnerHTML" ? w = v : h == "children" || h in A || h == "value" && "defaultValue" in A || h == "checked" && "defaultChecked" in A || ge(e, h, null, v, i);
    for (h in A) v = A[h], h == "children" ? c = v : h == "dangerouslySetInnerHTML" ? s = v : h == "value" ? C = v : h == "checked" ? M = v : p && typeof v != "function" || j[h] === v || ge(e, h, v, j[h], i);
    if (s) p || w && (s.__html == w.__html || s.__html == e.innerHTML) || (e.innerHTML = s.__html), t.__k = [];
    else if (w && (e.innerHTML = ""), vt(t.type == "template" ? e.content : e, Te(c) ? c : [c], t, n, o, S == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, a, l, a ? a[0] : n.__k && ae(n, 0), p, f), a != null) for (h = a.length; h--; ) Ue(a[h]);
    p && S != "textarea" || (h = "value", S == "progress" && C == null ? e.removeAttribute("value") : C != null && (C !== e[h] || S == "progress" && !C || S == "option" && C != j[h]) && ge(e, h, C, j[h], i), h = "checked", M != null && M != e[h] && ge(e, h, M, j[h], i));
  }
  return e;
}
function He(e, t, n) {
  try {
    if (typeof e == "function") {
      var o = typeof e.__u == "function";
      o && e.__u(), o && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (i) {
    D.__e(i, n);
  }
}
function St(e, t, n) {
  var o, i;
  if (D.unmount && D.unmount(e), (o = e.ref) && (o.current && o.current != e.__e || He(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (a) {
      D.__e(a, t);
    }
    o.base = o.__P = o.__n = null;
  }
  if (o = e.__k) for (i = 0; i < o.length; i++) o[i] && St(o[i], t, n || typeof e.type != "function");
  n || Ue(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Xt(e, t, n) {
  return this.constructor(e, n);
}
function Ye(e, t, n) {
  var o, i, a, l;
  t == document && (t = document.documentElement), D.__ && D.__(e, t), i = (o = !1) ? null : t.__k, a = [], l = [], Be(t, e = t.__k = qt(Ie, null, [e]), i || we, we, t.namespaceURI, i ? null : t.firstChild ? Ce.call(t.childNodes) : null, a, i ? i.__e : t.firstChild, o, l), kt(a, e, l), e.props.children = null;
}
Ce = ke.slice, D = { __e: function(e, t, n, o) {
  for (var i, a, l; t = t.__; ) if ((i = t.__c) && !i.__) try {
    if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(e)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), l = i.__d), l) return i.__E = i;
  } catch (p) {
    e = p;
  }
  throw e;
} }, ft = 0, xe.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = re({}, this.state), typeof e == "function" && (e = e(re({}, n), this.props)), e && re(n, e), e != null && this.__v && (t && this._sb.push(t), Je(this));
}, xe.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Je(this));
}, xe.prototype.render = Ie, oe = [], gt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, bt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ze.__r = 0, Ne = Math.random().toString(8), be = "__d" + Ne, he = "__a" + Ne, _t = /(PointerCapture)$|Capture$/i, Oe = 0, De = Xe(!1), Le = Xe(!0);
var Yt = 0;
function r(e, t, n, o, i, a) {
  t || (t = {});
  var l, p, f = t;
  if ("ref" in f) for (p in f = {}, t) p == "ref" ? l = t[p] : f[p] = t[p];
  var h = { type: e, props: f, key: n, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Yt, __i: -1, __u: 0, __source: i, __self: a };
  if (typeof e == "function" && (l = e.defaultProps)) for (p in l) f[p] === void 0 && (f[p] = l[p]);
  return D.vnode && D.vnode(h), h;
}
var ue, O, Ee, Ze, Se = 0, $t = [], B = D, et = B.__b, tt = B.__r, rt = B.diffed, nt = B.__c, ot = B.unmount, it = B.__;
function Ve(e, t) {
  B.__h && B.__h(O, e, Se || t), Se = 0;
  var n = O.__H || (O.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function I(e) {
  return Se = 1, Zt(Tt, e);
}
function Zt(e, t, n) {
  var o = Ve(ue++, 2);
  if (o.t = e, !o.__c && (o.__ = [Tt(void 0, t), function(p) {
    var f = o.__N ? o.__N[0] : o.__[0], h = o.t(f, p);
    f !== h && (o.__N = [h, o.__[1]], o.__c.setState({}));
  }], o.__c = O, !O.__f)) {
    var i = function(p, f, h) {
      if (!o.__c.__H) return !0;
      var s = !1, w = o.__c.props !== p;
      if (o.__c.__H.__.some(function(v) {
        if (v.__N) {
          s = !0;
          var C = v.__[0];
          v.__ = v.__N, v.__N = void 0, C !== v.__[0] && (w = !0);
        }
      }), a) {
        var c = a.call(this, p, f, h);
        return s ? c || w : c;
      }
      return !s || w;
    };
    O.__f = !0;
    var a = O.shouldComponentUpdate, l = O.componentWillUpdate;
    O.componentWillUpdate = function(p, f, h) {
      if (this.__e) {
        var s = a;
        a = void 0, i(p, f, h), a = s;
      }
      l && l.call(this, p, f, h);
    }, O.shouldComponentUpdate = i;
  }
  return o.__N || o.__;
}
function $e(e, t) {
  var n = Ve(ue++, 3);
  !B.__s && Ct(n.__H, t) && (n.__ = e, n.u = t, O.__H.__h.push(n));
}
function We(e) {
  return Se = 5, me(function() {
    return { current: e };
  }, []);
}
function me(e, t) {
  var n = Ve(ue++, 7);
  return Ct(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function er() {
  for (var e; e = $t.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(ve), t.__h.some(Me), t.__h = [];
    } catch (n) {
      t.__h = [], B.__e(n, e.__v);
    }
  }
}
B.__b = function(e) {
  O = null, et && et(e);
}, B.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), it && it(e, t);
}, B.__r = function(e) {
  tt && tt(e), ue = 0;
  var t = (O = e.__c).__H;
  t && (Ee === O ? (t.__h = [], O.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(ve), t.__h.some(Me), t.__h = [], ue = 0)), Ee = O;
}, B.diffed = function(e) {
  rt && rt(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && ($t.push(t) !== 1 && Ze === B.requestAnimationFrame || ((Ze = B.requestAnimationFrame) || tr)(er)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), Ee = O = null;
}, B.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(ve), n.__h = n.__h.filter(function(o) {
        return !o.__ || Me(o);
      });
    } catch (o) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], B.__e(o, n.__v);
    }
  }), nt && nt(e, t);
}, B.unmount = function(e) {
  ot && ot(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(o) {
    try {
      ve(o);
    } catch (i) {
      t = i;
    }
  }), n.__H = void 0, t && B.__e(t, n.__v));
};
var dt = typeof requestAnimationFrame == "function";
function tr(e) {
  var t, n = function() {
    clearTimeout(o), dt && cancelAnimationFrame(t), setTimeout(e);
  }, o = setTimeout(n, 35);
  dt && (t = requestAnimationFrame(n));
}
function ve(e) {
  var t = O, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), O = t;
}
function Me(e) {
  var t = O;
  e.__c = e.__(), O = t;
}
function Ct(e, t) {
  return !e || e.length !== t.length || t.some(function(n, o) {
    return n !== e[o];
  });
}
function Tt(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const rr = {
  png: "image",
  jpg: "image",
  jpeg: "image",
  webp: "image",
  bmp: "image",
  mp4: "video",
  webm: "video",
  mov: "video",
  mkv: "video",
  wav: "audio",
  mp3: "audio",
  flac: "audio",
  ogg: "audio",
  m4a: "audio",
  aac: "audio"
};
function It(e) {
  var o;
  const t = ((o = e.name.split(".").pop()) == null ? void 0 : o.toLocaleLowerCase()) ?? "";
  if (e.name.includes(".")) return rr[t] ?? null;
  const n = e.type.split("/", 1)[0];
  return n === "image" || n === "video" || n === "audio" ? n : null;
}
function nr(e) {
  const i = e.replace(/\.[^.]+$/, "").replace(/^\s*\d+\s*[-_. ]+/, "").normalize("NFKC").replace(/[\s-]+/g, "_").replace(/[{}]/g, "").replace(/_+/g, "_").replace(/^[_\.]+|[_\.]+$/g, "").slice(0, 96) || "asset";
  return i.toLocaleLowerCase().endsWith(".audio") ? `${i}_asset` : i;
}
function or(e, t) {
  const n = new Set(Array.from(t, (i) => i.toLocaleLowerCase()));
  if (!n.has(e.toLocaleLowerCase())) return e;
  let o = 2;
  for (; n.has(`${e}_${o}`.toLocaleLowerCase()); ) o += 1;
  return `${e}_${o}`;
}
function ir(e, t, n) {
  const o = e.trim().toLocaleLowerCase();
  return !e.trim() || /[\s{}]/.test(e) || o.endsWith(".audio") ? "invalid" : Array.from(t, (a) => a.toLocaleLowerCase()).includes(o) || Array.from(n, (a) => a.trim().toLocaleLowerCase()).filter((a) => a === o).length > 1 ? "duplicate" : null;
}
function dr(e, t, n) {
  const o = new Set(Array.from(t)), i = [], a = [];
  for (const l of e) {
    const p = It(l);
    if (!p) {
      a.push(l.name);
      continue;
    }
    const f = or(nr(l.name), o);
    o.add(f), i.push({ id: n(), file: l, alias: f, kind: p, durationSeconds: p === "image" ? null : 2, includeVideoAudio: !1, status: "pending", error: "" });
  }
  return { drafts: i, rejected: a };
}
function ar(e, t, n) {
  return {
    id: e.id,
    alias: e.alias.trim(),
    kind: e.kind,
    path: t,
    enabled: !0,
    fixed: !1,
    fixedOrder: n,
    shotIds: [],
    includeVideoAudio: e.kind === "video" && e.includeVideoAudio,
    durationSeconds: e.kind === "image" ? null : e.durationSeconds,
    audioDurationSeconds: null,
    fingerprint: ""
  };
}
function sr(e, t) {
  return t === "image" ? Promise.resolve(null) : new Promise((n) => {
    const o = document.createElement(t === "video" ? "video" : "audio"), i = URL.createObjectURL(e);
    let a = !1;
    const l = (p) => {
      a || (a = !0, o.onloadedmetadata = null, o.onerror = null, o.removeAttribute("src"), o.load(), URL.revokeObjectURL(i), n(p));
    };
    o.preload = "metadata", o.onloadedmetadata = () => l(Number.isFinite(o.duration) && o.duration > 0 ? Math.round(o.duration * 10) / 10 : null), o.onerror = () => l(null), o.src = i;
  });
}
const lr = () => `asset_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`, Re = (e, t) => t === "zh" ? { image: "图片", video: "视频", audio: "音频" }[e] : e;
function cr({ language: e, assets: t, projectName: n, onClose: o, onImported: i, uploadFile: a }) {
  const [l, p] = I([]), [f, h] = I([]), [s, w] = I(!1), [c, v] = I(!1), C = We([]);
  C.current = l;
  const M = t.map((m) => m.alias), j = (m, $) => p((E) => E.map((N) => N.id === m ? { ...N, ...$ } : N)), A = (m) => {
    if (!m.length || c) return;
    const $ = [...M, ...C.current.map((N) => N.alias)], E = dr(m, $, lr);
    E.rejected.length && h((N) => [...N, ...E.rejected]), E.drafts.length && (p((N) => [...N, ...E.drafts]), E.drafts.forEach((N) => {
      sr(N.file, N.kind).then((F) => {
        F != null && p((G) => G.map((J) => J.id === N.id && J.kind === N.kind && J.durationSeconds === 2 ? { ...J, durationSeconds: F } : J));
      });
    }));
  }, q = l.filter((m) => m.status !== "imported").map((m) => m.alias), b = (m) => {
    if (m.status === "imported") return null;
    const $ = ir(m.alias, M, q);
    return $ === "invalid" ? e === "zh" ? "别名为空、包含空白/花括号，或使用了保留后缀 .audio" : "Alias is empty, contains whitespace/braces, or uses reserved .audio" : $ === "duplicate" ? e === "zh" ? "别名与素材库或本批次其他素材重复" : "Alias duplicates an existing or staged asset" : It(m.file) !== m.kind ? e === "zh" ? "文件扩展名与所选类型不匹配" : "The extension does not match the selected kind" : m.kind !== "image" && (m.durationSeconds == null || m.durationSeconds <= 0) ? e === "zh" ? "视频或音频时长必须大于 0" : "Video/audio duration must be greater than 0" : null;
  }, z = async () => {
    const $ = C.current.filter((G) => G.status === "pending" || G.status === "error");
    if (!$.length) return;
    if ($.some(b)) {
      window.alert(e === "zh" ? "请先修正列表中标红的项目。" : "Fix the highlighted rows before importing.");
      return;
    }
    v(!0);
    const E = Math.max(0, ...t.map((G) => G.fixedOrder)) + 1;
    let N = 0;
    const F = async () => {
      for (; N < $.length; ) {
        const G = N++, J = $[G];
        j(J.id, { status: "uploading", error: "" });
        try {
          const V = await a(n, J.kind, J.file);
          i([ar(J, V, E + G)]), j(J.id, { status: "imported", error: "" });
        } catch (V) {
          j(J.id, { status: "error", error: String(V) });
        }
      }
    };
    await Promise.all(Array.from({ length: Math.min(2, $.length) }, F)), v(!1);
  }, H = l.filter((m) => m.status === "imported").length, X = l.filter((m) => m.status === "error").length, Z = l.length - H;
  return /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-asset-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": e === "zh" ? "批量导入素材" : "Batch import assets", children: [
    /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: e === "zh" ? "批量导入素材" : "Batch import assets" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "可混合选择图片、视频和音频；确认列表后再写入素材库。" : "Select images, videos, and audio together; review before uploading." })
      ] }),
      /* @__PURE__ */ r("button", { disabled: c, "aria-label": e === "zh" ? "关闭" : "Close", onClick: o, children: "×" })
    ] }),
    /* @__PURE__ */ r("label", { class: `td-asset-dropzone ${s ? "dragging" : ""}`, onDragEnter: (m) => {
      m.preventDefault(), w(!0);
    }, onDragOver: (m) => m.preventDefault(), onDragLeave: (m) => {
      m.currentTarget === m.target && w(!1);
    }, onDrop: (m) => {
      var $;
      m.preventDefault(), w(!1), A(Array.from((($ = m.dataTransfer) == null ? void 0 : $.files) ?? []));
    }, children: [
      /* @__PURE__ */ r("strong", { children: e === "zh" ? "拖拽素材到这里，或点击选择多个文件" : "Drop media here, or click to select multiple files" }),
      /* @__PURE__ */ r("span", { children: e === "zh" ? "支持图片、视频、音频混合导入" : "Mixed image, video, and audio selection is supported" }),
      /* @__PURE__ */ r("input", { type: "file", multiple: !0, accept: "image/*,video/*,audio/*", disabled: c, onChange: (m) => {
        A(Array.from(m.currentTarget.files ?? [])), m.currentTarget.value = "";
      } })
    ] }),
    f.length > 0 && /* @__PURE__ */ r("div", { class: "td-asset-batch-warning", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `已跳过 ${f.length} 个不支持的文件：${f.join("、")}` : `Skipped ${f.length} unsupported files: ${f.join(", ")}` }),
      /* @__PURE__ */ r("button", { onClick: () => h([]), children: "×" })
    ] }),
    /* @__PURE__ */ r("div", { class: "td-asset-batch-summary", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `共 ${l.length} 项 · 已导入 ${H} · 待处理 ${Z}${X ? ` · 失败 ${X}` : ""}` : `${l.length} items · ${H} imported · ${Z} pending${X ? ` · ${X} failed` : ""}` }),
      /* @__PURE__ */ r("button", { disabled: c || !l.length, onClick: () => p([]), children: e === "zh" ? "清空列表" : "Clear list" })
    ] }),
    /* @__PURE__ */ r("div", { class: "td-asset-batch-list", children: [
      /* @__PURE__ */ r("div", { class: "td-asset-batch-row td-asset-batch-head", children: [
        /* @__PURE__ */ r("span", { children: e === "zh" ? "状态 / 文件" : "Status / File" }),
        /* @__PURE__ */ r("span", { children: e === "zh" ? "别名" : "Alias" }),
        /* @__PURE__ */ r("span", { children: e === "zh" ? "类型" : "Kind" }),
        /* @__PURE__ */ r("span", { children: e === "zh" ? "时长" : "Duration" }),
        /* @__PURE__ */ r("span", { children: e === "zh" ? "视频伴音" : "Video audio" }),
        /* @__PURE__ */ r("span", { children: e === "zh" ? "操作" : "Action" })
      ] }),
      !l.length && /* @__PURE__ */ r("div", { class: "td-asset-batch-empty", children: e === "zh" ? "尚未选择素材" : "No media selected" }),
      l.map((m) => {
        const $ = b(m), E = c || m.status === "imported" || m.status === "uploading";
        return /* @__PURE__ */ r("div", { class: `td-asset-batch-row ${$ || m.status === "error" ? "invalid" : ""} ${m.status === "imported" ? "imported" : ""}`, children: [
          /* @__PURE__ */ r("div", { class: "td-asset-batch-file", children: [
            /* @__PURE__ */ r("strong", { title: m.file.name, children: m.file.name }),
            /* @__PURE__ */ r("small", { children: [
              (m.file.size / 1024 / 1024).toFixed(1),
              " MB · ",
              m.status === "pending" ? e === "zh" ? "待导入" : "Pending" : m.status === "uploading" ? e === "zh" ? "上传中" : "Uploading" : m.status === "imported" ? e === "zh" ? "已完成" : "Imported" : e === "zh" ? "失败" : "Failed"
            ] }),
            ($ || m.error) && /* @__PURE__ */ r("em", { title: $ || m.error, children: $ || m.error })
          ] }),
          /* @__PURE__ */ r("input", { disabled: E, value: m.alias, onInput: (N) => j(m.id, { alias: N.currentTarget.value, status: "pending", error: "" }) }),
          /* @__PURE__ */ r("select", { disabled: E, value: m.kind, onChange: (N) => {
            const F = N.currentTarget.value;
            j(m.id, { kind: F, durationSeconds: F === "image" ? null : m.durationSeconds ?? 2, includeVideoAudio: F === "video" && m.includeVideoAudio, status: "pending", error: "" });
          }, children: [
            /* @__PURE__ */ r("option", { value: "image", children: Re("image", e) }),
            /* @__PURE__ */ r("option", { value: "video", children: Re("video", e) }),
            /* @__PURE__ */ r("option", { value: "audio", children: Re("audio", e) })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", disabled: E || m.kind === "image", value: m.durationSeconds ?? "", onInput: (N) => j(m.id, { durationSeconds: N.currentTarget.value ? Number(N.currentTarget.value) : null, status: "pending", error: "" }) }),
            /* @__PURE__ */ r("span", { children: m.kind === "image" ? "—" : e === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-audio", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", disabled: E || m.kind !== "video", checked: m.kind === "video" && m.includeVideoAudio, onChange: (N) => j(m.id, { includeVideoAudio: N.currentTarget.checked }) }),
            /* @__PURE__ */ r("span", { children: m.kind === "video" ? m.includeVideoAudio ? e === "zh" ? "开" : "ON" : e === "zh" ? "关" : "OFF" : "—" })
          ] }),
          /* @__PURE__ */ r("button", { class: "danger", disabled: E, onClick: () => p((N) => N.filter((F) => F.id !== m.id)), children: e === "zh" ? "移除" : "Remove" })
        ] }, m.id);
      })
    ] }),
    /* @__PURE__ */ r("footer", { children: [
      /* @__PURE__ */ r("button", { disabled: c, onClick: o, children: e === "zh" ? "关闭" : "Close" }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: c || !l.some((m) => m.status === "pending" || m.status === "error"), onClick: () => void z(), children: c ? e === "zh" ? "正在导入…" : "Importing…" : X ? e === "zh" ? "重试失败项" : "Retry failed" : e === "zh" ? "开始导入" : "Start import" })
    ] })
  ] }) });
}
const jt = String.raw`\{\{ref:([^{}]+)}}`;
function at() {
  return new RegExp(jt, "g");
}
function At(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const o of e.assets)
    o.enabled && o.path.trim() && (!o.shotIds.length || o.shotIds.includes(t.id)) && !t.disabledAssetIds.includes(o.id) && n.set(o.alias, o);
  return n;
}
function Nt(e, t, n) {
  const o = n.trim(), i = o.endsWith(".audio"), a = i ? o.slice(0, -6) : o, l = At(e, t).get(a);
  return l ? !i || l.kind === "video" && l.includeVideoAudio : !1;
}
function st(e, t) {
  const n = e.shots.filter((o) => o.enabled);
  return n.length > 0 && n.every((o) => Nt(e, o, t));
}
function Et(e, t) {
  const n = [], o = At(e, t), i = [e.promptPrefix, t.prompt, e.promptSuffix].filter(Boolean).join(`
`), a = [...i.matchAll(at())].map((b) => b[1].trim()), l = [], p = /* @__PURE__ */ new Set(), f = (b) => {
    p.has(b.id) || (p.add(b.id), l.push(b));
  };
  [...o.values()].filter((b) => b.fixed).sort((b, z) => b.fixedOrder - z.fixedOrder || b.alias.localeCompare(z.alias)).forEach(f);
  for (const b of a) {
    const z = b.endsWith(".audio") ? b.slice(0, -6) : b, H = o.get(z);
    if (!H) {
      n.push(`未找到或已禁用素材：${b}`);
      continue;
    }
    b.endsWith(".audio") && (H.kind !== "video" || !H.includeVideoAudio) && n.push(`视频伴音未启用：${b}`), f(H);
  }
  const h = l.filter((b) => b.kind === "image"), s = l.filter((b) => b.kind === "video"), w = s.filter((b) => b.includeVideoAudio), c = l.filter((b) => b.kind === "audio"), v = w.length + c.length, C = h.length + s.length + c.length;
  h.length > 9 && n.push(`参考图 ${h.length}/9，超出 H3 上限`), s.length > 3 && n.push(`参考视频 ${s.length}/3，超出 H3 上限`), v > 3 && n.push(`有效音频 ${v}/3，超出 H3 总上限`), C > 12 && n.push(`混合文件 ${C}/12，超出 H3 上限`), v && !h.length && !s.length && n.push("音频参考不能单独使用");
  const M = s.filter((b) => typeof b.durationSeconds == "number");
  for (const b of s) (b.durationSeconds == null || b.durationSeconds < 2 || b.durationSeconds > 15) && n.push(`视频 ${b.alias} 的时长必须为 2–15 秒`);
  M.reduce((b, z) => b + (z.durationSeconds ?? 0), 0) > 15 && n.push("参考视频总时长超过 15 秒");
  const j = [...w.map((b) => b.audioDurationSeconds ?? b.durationSeconds), ...c.map((b) => b.durationSeconds)];
  j.some((b) => b == null || b < 2 || b > 15) && n.push("每路有效音频时长必须为 2–15 秒"), j.reduce((b, z) => b + (z ?? 0), 0) > 15 && n.push("有效音频总时长超过 15 秒");
  const A = /* @__PURE__ */ new Map();
  h.forEach((b, z) => A.set(b.alias, `<Picture ${z + 1}>`)), s.forEach((b, z) => A.set(b.alias, `<Video ${z + 1}>`)), w.forEach((b, z) => A.set(`${b.alias}.audio`, `<Audio ${z + 1}>`)), c.forEach((b, z) => A.set(b.alias, `<Audio ${w.length + z + 1}>`));
  const S = i.replace(at(), (b, z) => A.get(z.trim()) ?? b), q = [...A.entries()].map(([b, z]) => ({ label: z, alias: b, kind: z.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: S, errors: n, slots: q, mixedFiles: C, audioCount: v };
}
function pr(e) {
  var i, a, l, p, f, h;
  const t = [];
  (a = (i = e.project) == null ? void 0 : i.name) != null && a.trim() || t.push("Project name 不能为空"), (p = (l = e.project) == null ? void 0 : l.runId) != null && p.trim() || t.push("Run ID 不能为空"), (!Array.isArray(e.shots) || !e.shots.some((s) => s.enabled)) && t.push("至少需要一个启用分镜");
  const n = /* @__PURE__ */ new Set();
  for (const s of e.shots ?? [])
    (!((f = s.id) != null && f.trim()) || n.has(s.id)) && t.push(`分镜 ID 为空或重复：${s.id || "(空)"}`), n.add(s.id), s.durationSeconds > 0 || t.push(`分镜 ${s.id} 的时长必须大于 0`);
  const o = /* @__PURE__ */ new Set();
  for (const s of e.assets ?? []) {
    const w = (h = s.alias) == null ? void 0 : h.toLocaleLowerCase();
    (!s.alias || /[\s{}]/.test(s.alias) || s.alias.endsWith(".audio") || o.has(w)) && t.push(`素材别名无效或重复：${s.alias || "(空)"}`), o.add(w), s.enabled && !s.path && t.push(`素材 ${s.alias} 尚未选择文件`);
  }
  for (const s of e.shots.filter((w) => w.enabled)) t.push(...Et(e, s).errors.map((w) => `${s.title}: ${w}`));
  return [...new Set(t)];
}
function hr(e, t) {
  const n = [], o = new RegExp(jt, "g");
  let i = 0;
  for (const a of e.matchAll(o)) {
    const l = a.index ?? 0;
    l > i && n.push({ text: e.slice(i, l), reference: !1 }), n.push({ text: a[0], reference: !0, valid: t(a[1]) }), i = l + a[0].length;
  }
  return i < e.length && n.push({ text: e.slice(i), reference: !1 }), n;
}
function Pe({ value: e, rows: t, onInput: n, isReferenceValid: o }) {
  const i = We(null), a = hr(e, o), l = (p) => {
    i.current && (i.current.scrollTop = p.currentTarget.scrollTop, i.current.scrollLeft = p.currentTarget.scrollLeft);
  };
  return /* @__PURE__ */ r("span", { class: "td-highlight-textarea", children: [
    /* @__PURE__ */ r("pre", { ref: i, class: "td-highlight-backdrop", "aria-hidden": "true", children: [
      a.map((p, f) => p.reference ? /* @__PURE__ */ r("mark", { class: p.valid ? "valid" : "invalid", children: p.text }, f) : p.text),
      e.endsWith(`
`) && " "
    ] }),
    /* @__PURE__ */ r("textarea", { class: "td-highlight-input", rows: t, value: e, onInput: n, onScroll: l })
  ] });
}
const ur = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", postprocess: "后处理", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", postprocess: "Post-process", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function de(e, t) {
  return ur[e][t];
}
function le(e) {
  return (Array.isArray(e.results) && e.results.length ? e.results : e.path ? [{ path: e.path, bytes: e.bytes, modifiedAt: e.modifiedAt }] : []).filter((n) => typeof n.path == "string" && n.path.trim().length > 0).sort((n, o) => (o.modifiedAt ?? 0) - (n.modifiedAt ?? 0));
}
function Rt(e, t) {
  const n = /_video_(\d+)/i.exec(e.replace(/\\/g, "/"));
  return n ? Number(n[1]) : t;
}
function Fe({ src: e, alt: t }) {
  const n = We(null), [o, i] = I(!1);
  return $e(() => {
    const a = n.current;
    if (!a) return;
    if (!("IntersectionObserver" in window)) {
      i(!0);
      return;
    }
    const l = new IntersectionObserver((p) => {
      i(p.some((f) => f.isIntersecting));
    }, { rootMargin: "160px" });
    return l.observe(a), () => l.disconnect();
  }, []), /* @__PURE__ */ r("div", { class: "td-result-thumb", ref: n, children: o ? /* @__PURE__ */ r("video", { src: e, "aria-label": t, muted: !0, playsInline: !0, preload: "metadata", onLoadedMetadata: (a) => {
    const l = a.currentTarget;
    Number.isFinite(l.duration) && l.duration > 0.02 && (l.currentTime = Math.min(0.25, Math.max(0, l.duration - 0.05)));
  } }) : /* @__PURE__ */ r("span", { children: "…" }) });
}
function ie(e, t) {
  const n = e.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!n || n.startsWith("/") || /^[A-Za-z]:\//.test(n)) return null;
  const o = n.split("/").filter(Boolean), i = o.pop();
  if (!i || o.some((l) => l === "..")) return null;
  const a = new URLSearchParams({ filename: i, type: t });
  return o.length && a.set("subfolder", o.join("/")), `/view?${a.toString()}`;
}
function mr(e) {
  return ie(e, "input");
}
function ce(e) {
  return e.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function lt({ asset: e, compact: t = !1 }) {
  const n = mr(e.path), o = `td-media-preview ${t ? "compact" : ""}`;
  return n ? e.kind === "image" ? /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("img", { src: n, alt: e.alias, loading: "lazy" }) }) : e.kind === "video" ? /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("video", { src: n, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("audio", { src: n, controls: !0, preload: "metadata" }) }) : e.path ? /* @__PURE__ */ r("div", { class: `${o} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ r("div", { class: `${o} empty`, children: "尚未选择素材 / No media selected" });
}
function fr(e) {
  let t = 0;
  return e.shots.map((n, o) => {
    const i = {
      key: `${o}:${n.id}`,
      shot: n,
      sourceIndex: o,
      activeIndex: n.enabled ? t : -1
    };
    return n.enabled && (t += 1), i;
  });
}
function gr(e, t, n) {
  return e.filter((o) => o.shot.enabled && t[o.key]).map((o) => ({
    shotId: o.shot.id,
    activeIndex: o.activeIndex,
    path: n[o.key] ?? ""
  }));
}
function br(e, t, n) {
  const o = {};
  return e.forEach((i) => {
    const a = i.sourceIndex + 1;
    o[i.key] = i.shot.enabled && a >= t && a <= n;
  }), o;
}
async function ct(e) {
  const t = await fetch(e), n = await t.json();
  if (!t.ok) throw new Error(n.error || `HTTP ${t.status}`);
  return n;
}
function _r(e, t, n) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t,
    activeIndex: String(n)
  }).toString()}`;
}
function xr(e) {
  return `/theodore-director/v1/postprocess/merged-videos?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId }).toString()}`;
}
function vr({ plan: e, language: t }) {
  const n = me(() => fr(e), [e]), [o, i] = I({}), [a, l] = I({}), [p, f] = I({}), [h, s] = I(null), [w, c] = I(!1), [v, C] = I(""), [M, j] = I({ found: !1, results: [] }), [A, S] = I(!1), [q, b] = I(""), [z, H] = I(0), [X, Z] = I("1"), [m, $] = I(String(n.length || 1)), E = n.filter((g) => g.shot.enabled), N = E.length > 0 && E.every((g) => a[g.key]), F = gr(n, a, p), G = F.filter((g) => !g.path), J = n.some((g) => {
    var x;
    return a[g.key] && ((x = o[g.key]) == null ? void 0 : x.loading);
  }), V = n.reduce(
    (g, x) => g + (x.shot.enabled && a[x.key] ? x.shot.durationSeconds : 0),
    0
  ), K = me(() => le(M), [M]), ee = K.find((g) => g.path === q) ?? K[0];
  $e(() => {
    let g = !1;
    const x = {}, k = {};
    return n.forEach((L) => {
      x[L.key] = L.shot.enabled, k[L.key] = { loading: !0, response: { found: !1, results: [] } };
    }), l((L) => {
      const P = {};
      return n.forEach((U) => {
        P[U.key] = U.shot.enabled ? L[U.key] ?? x[U.key] : !1;
      }), P;
    }), i(k), C(""), n.forEach((L) => {
      ct(_r(e, L.shot.id, L.activeIndex)).then((P) => {
        if (g) return;
        const U = le(P);
        i((W) => ({ ...W, [L.key]: { loading: !1, response: P } })), f((W) => {
          var Q;
          return {
            ...W,
            [L.key]: U.some((ne) => ne.path === W[L.key]) ? W[L.key] : ((Q = U[0]) == null ? void 0 : Q.path) ?? ""
          };
        });
      }).catch((P) => {
        g || i((U) => ({
          ...U,
          [L.key]: { loading: !1, response: { found: !1, results: [], error: String(P) } }
        }));
      });
    }), () => {
      g = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((g) => `${g.id}:${g.enabled}`).join("|"), z]), $e(() => {
    let g = !1;
    return S(!0), ct(xr(e)).then((x) => {
      if (g) return;
      const k = le(x);
      j(x), b((L) => {
        var P;
        return k.some((U) => U.path === L) ? L : ((P = k[0]) == null ? void 0 : P.path) ?? "";
      });
    }).catch((x) => {
      g || j({ found: !1, results: [], error: String(x) });
    }).finally(() => {
      g || S(!1);
    }), () => {
      g = !0;
    };
  }, [e.project.name, e.project.runId, z]);
  const je = () => {
    const g = !N;
    l((x) => {
      const k = { ...x };
      return E.forEach((L) => {
        k[L.key] = g;
      }), k;
    });
  }, fe = () => {
    const g = Number(X), x = Number(m);
    if (!Number.isInteger(g) || !Number.isInteger(x) || g < 1 || x < g || x > n.length) {
      window.alert(t === "zh" ? `请输入有效范围：1 ≤ m ≤ n ≤ ${n.length}` : `Enter a valid range: 1 ≤ m ≤ n ≤ ${n.length}`);
      return;
    }
    l(br(n, g, x));
  }, Ae = async () => {
    if (!F.length) {
      window.alert(t === "zh" ? "请至少选择一个镜头" : "Select at least one shot.");
      return;
    }
    if (G.length) {
      window.alert(t === "zh" ? `以下已选镜头没有可用结果：${G.map((g) => g.shotId).join("、")}` : `Selected shots without a result: ${G.map((g) => g.shotId).join(", ")}`);
      return;
    }
    c(!0), C("");
    try {
      const g = await fetch("/theodore-director/v1/postprocess/merge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId, selections: F })
      }), x = await g.json();
      if (!g.ok) throw new Error(x.error || `HTTP ${g.status}`);
      H((k) => k + 1);
    } catch (g) {
      C(String(g instanceof Error ? g.message : g));
    } finally {
      c(!1);
    }
  }, pe = ee != null && ee.path ? ie(ee.path, "output") : null;
  return /* @__PURE__ */ r("section", { class: "td-postprocess", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并视频" : "Merge videos" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "从每个镜头选择一个结果，按当前分镜顺序进行无损合并。" : "Choose one result per shot and merge them losslessly in storyboard order." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: [
        /* @__PURE__ */ r("button", { onClick: () => H((g) => g + 1), children: [
          "↻ ",
          t === "zh" ? "刷新结果" : "Refresh"
        ] }),
        /* @__PURE__ */ r("button", { onClick: je, children: N ? t === "zh" ? "全部取消" : "Clear all" : t === "zh" ? "一键全选" : "Select all" })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { class: "td-post-summary", children: [
      /* @__PURE__ */ r("span", { children: t === "zh" ? `已选择 ${F.length}/${E.length} 个启用镜头` : `${F.length}/${E.length} enabled shots selected` }),
      /* @__PURE__ */ r("span", { children: t === "zh" ? `预计时长 ${V.toFixed(1)} 秒` : `Estimated duration ${V.toFixed(1)} sec` }),
      /* @__PURE__ */ r("div", { class: "td-post-range", role: "group", "aria-label": t === "zh" ? "合并视频范围" : "Merge video range", children: [
        /* @__PURE__ */ r("span", { children: t === "zh" ? "范围" : "Range" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: n.length, step: "1", value: X, "aria-label": t === "zh" ? "起始镜头 m" : "Start shot m", onInput: (g) => Z(g.currentTarget.value) }),
        /* @__PURE__ */ r("span", { children: "—" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: n.length, step: "1", value: m, "aria-label": t === "zh" ? "结束镜头 n" : "End shot n", onInput: (g) => $(g.currentTarget.value) }),
        /* @__PURE__ */ r("button", { disabled: !n.length, onClick: fe, children: t === "zh" ? "确认范围" : "Apply range" })
      ] }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: w || J || !F.length || !!G.length, onClick: Ae, children: w ? t === "zh" ? "正在合并…" : "Merging…" : t === "zh" ? "合并所选视频" : "Merge selected videos" })
    ] }),
    v && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "合并失败：" : "Merge failed: ",
      v
    ] }),
    G.length > 0 && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "已选镜头中存在尚未生成视频的镜头。" : "Some selected shots do not have generated videos yet." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: n.map((g) => {
      const x = o[g.key], k = le((x == null ? void 0 : x.response) ?? { results: [] }), L = !!a[g.key];
      return /* @__PURE__ */ r("article", { class: `td-post-shot ${L ? "selected" : ""} ${g.shot.enabled ? "" : "disabled"}`, children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: L, disabled: !g.shot.enabled, onChange: (P) => l((U) => ({ ...U, [g.key]: P.currentTarget.checked })) }),
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
        !g.shot.enabled && /* @__PURE__ */ r("div", { class: "td-post-shot-disabled-note", children: t === "zh" ? "该镜头当前已禁用：历史结果可以预览，但不能参加合并。" : "This shot is disabled: historical results can be previewed but cannot be merged." }),
        x != null && x.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading generated results…" }) : x != null && x.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : k.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: k.map((P, U) => {
          const W = ie(P.path, "output"), Q = p[g.key] === P.path, ne = Rt(P.path, k.length - U);
          return /* @__PURE__ */ r("div", { class: `td-post-result ${Q ? "selected" : ""}`, children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", role: "radio", "aria-checked": Q, onClick: () => f((T) => ({ ...T, [g.key]: P.path })), children: [
              W ? /* @__PURE__ */ r(Fe, { src: W, alt: `${g.shot.title} ${t === "zh" ? "结果" : "result"} ${ne}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  t === "zh" ? `结果 ${ne}` : `Result ${ne}`,
                  U === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
                ] }),
                /* @__PURE__ */ r("span", { title: P.path, children: ce(P.path) }),
                /* @__PURE__ */ r("small", { children: P.bytes ? `${(P.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "td-post-result-play", disabled: !W, title: t === "zh" ? "播放预览" : "Play preview", onClick: () => W && s({ path: P.path, title: `${g.shot.id} · ${g.shot.title}` }), children: "▶" })
          ] }, P.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "未找到这个镜头的生成结果" : "No generated result found for this shot" })
      ] }, g.key);
    }) }),
    /* @__PURE__ */ r("section", { class: "td-post-merged", children: [
      /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并结果" : "Merged results" }),
        /* @__PURE__ */ r("span", { class: `td-result-state ${K.length ? "found" : ""}`, children: A ? t === "zh" ? "查询中" : "Checking" : t === "zh" ? `${K.length} 个结果` : `${K.length} results` })
      ] }) }),
      A ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "正在查询合并结果…" : "Loading merged results…" }) : M.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: t === "zh" ? "无法查询合并结果" : "Unable to query merged results" }) : ee && pe ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
        /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
          /* @__PURE__ */ r("video", { src: pe, controls: !0, preload: "metadata", playsInline: !0 }, ee.path),
          /* @__PURE__ */ r("div", { class: "td-generated-meta", title: ee.path, children: ee.path })
        ] }),
        /* @__PURE__ */ r("div", { class: "td-result-list", children: K.map((g, x) => {
          const k = ie(g.path, "output");
          return /* @__PURE__ */ r("button", { class: `td-result-item ${g.path === ee.path ? "selected" : ""}`, onClick: () => b(g.path), children: [
            k ? /* @__PURE__ */ r(Fe, { src: k, alt: `${t === "zh" ? "合并结果" : "Merged result"} ${K.length - x}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
            /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
              /* @__PURE__ */ r("strong", { children: [
                t === "zh" ? `合并结果 ${K.length - x}` : `Merged result ${K.length - x}`,
                x === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
              ] }),
              /* @__PURE__ */ r("span", { children: ce(g.path) }),
              /* @__PURE__ */ r("small", { children: g.bytes ? `${(g.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
            ] })
          ] }, g.path);
        }) })
      ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "还没有合并结果" : "No merged result yet" })
    ] }),
    h && ie(h.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => s(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (g) => g.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: h.title }),
        /* @__PURE__ */ r("button", { "aria-label": t === "zh" ? "关闭预览" : "Close preview", onClick: () => s(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: ie(h.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { title: h.path, children: ce(h.path) })
    ] }) })
  ] });
}
function yr(e) {
  const t = e.reduce((n, o) => {
    const i = /^shot_(\d+)$/i.exec(o.id.trim());
    return i ? Math.max(n, Number(i[1])) : n;
  }, 0);
  return Math.max(t, e.length) + 1;
}
function wr(e, t = 5) {
  return {
    id: `shot_${String(e).padStart(3, "0")}`,
    title: `Shot ${e}`,
    prompt: "",
    negativePrompt: "",
    durationSeconds: t,
    enabled: !0,
    latentRelay: !0,
    secondSampling: !0,
    seed: null,
    disabledAssetIds: []
  };
}
function pt(e, t, n) {
  const o = yr(e), i = Array.from({ length: t }, (a, l) => wr(o + l, n));
  return [...e, ...i];
}
const Pt = (e) => `${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, ye = (e) => JSON.parse(JSON.stringify(e)), kr = { image: "图片", video: "视频", audio: "音频" };
function ht(e) {
  var n;
  const t = ye(e);
  return t.schemaVersion = 4, (n = t.project.id) != null && n.trim() || (t.project.id = Pt("project")), t.shots = t.shots.map((o) => ({
    ...o,
    latentRelay: o.latentRelay ?? !0,
    secondSampling: o.secondSampling ?? !0
  })), t;
}
function zr(e) {
  return e.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function Sr(e) {
  const t = Pt(e);
  return { id: t, alias: t, kind: e, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: e === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function ut(e, t, n) {
  const o = new FormData();
  o.append("projectName", e), o.append("kind", t), o.append("file", n);
  const i = await fetch("/theodore-director/v1/assets", { method: "POST", body: o }), a = await i.json();
  if (!i.ok || !a.path) throw new Error(a.error || `HTTP ${i.status}`);
  return a.path;
}
async function $r(e, t, n) {
  const o = new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t.id,
    activeIndex: String(n)
  }), i = await fetch(`/theodore-director/v1/generated-video?${o.toString()}`), a = await i.json();
  if (!i.ok) throw new Error(a.error || `HTTP ${i.status}`);
  return a;
}
async function Cr(e) {
  var o;
  if ((o = navigator.clipboard) != null && o.writeText)
    try {
      await navigator.clipboard.writeText(e);
      return;
    } catch {
    }
  const t = document.createElement("textarea");
  t.value = e, t.style.position = "fixed", t.style.opacity = "0", document.body.append(t), t.select();
  const n = document.execCommand("copy");
  if (t.remove(), !n) throw new Error("浏览器拒绝写入剪贴板");
}
function Tr({ initial: e, onSave: t, onClose: n, supportsSecondSampling: o }) {
  const [i, a] = I(() => ht(e)), [l, p] = I("shots"), [f, h] = I(0), [s, w] = I(() => navigator.language.startsWith("zh") ? "zh" : "en"), [c, v] = I({}), [C, M] = I(!1), [j, A] = I(!0), [S, q] = I(0), [b, z] = I({ found: !1, results: [] }), [H, X] = I(""), [Z, m] = I(!1), [$, E] = I(""), [N, F] = I(!1), [G, J] = I(!1), [V, K] = I([]), [ee, je] = I("5"), [fe, Ae] = I("1"), [pe, g] = I("5"), x = i.shots[Math.min(f, i.shots.length - 1)], k = me(() => x ? Et(i, x) : null, [i, x]), L = x != null && x.enabled ? i.shots.slice(0, f).filter((d) => d.enabled).length : -1, P = i.shots.length > 0 && i.shots.every((d) => d.secondSampling), U = V.length > 0 && V.every((d) => d.enabled), W = me(() => le(b), [b]), Q = W.find((d) => d.path === H) ?? W[0], ne = Q != null && Q.path ? ie(Q.path, "output") : null, T = (d) => a((u) => {
    const _ = ye(u);
    return d(_), _;
  }), qe = (d, u) => T((_) => {
    const y = d + u;
    y < 0 || y >= _.shots.length || ([_.shots[d], _.shots[y]] = [_.shots[y], _.shots[d]], h(y));
  }), Dt = (d) => T((u) => {
    u.shots.length <= 1 || (u.shots.splice(d, 1), h((_) => _ > d ? _ - 1 : _ === d ? Math.min(d, u.shots.length - 1) : _));
  }), Lt = () => {
    K(ye(i.shots)), F(!0);
  }, Mt = () => {
    const d = Number(ee);
    if (!Number.isFinite(d) || d <= 0) {
      window.alert(s === "zh" ? "统一时长必须大于 0 秒" : "The shared duration must be greater than 0 seconds.");
      return;
    }
    K((u) => u.map((_) => ({ ..._, durationSeconds: d })));
  }, Ft = () => {
    const d = Number(fe), u = Number(pe);
    if (!Number.isInteger(d) || d < 1 || d > 100) {
      window.alert(s === "zh" ? "新增镜头数量必须是 1–100 的整数" : "The shot count must be an integer from 1 to 100.");
      return;
    }
    if (!Number.isFinite(u) || u <= 0) {
      window.alert(s === "zh" ? "新增镜头时长必须大于 0 秒" : "The new-shot duration must be greater than 0 seconds.");
      return;
    }
    K((_) => pt(_, d, u));
  }, Ot = () => {
    const d = !U;
    K((u) => u.map((_) => ({ ..._, enabled: d })));
  }, Ut = () => {
    if (V.some((d) => !Number.isFinite(d.durationSeconds) || d.durationSeconds <= 0)) {
      window.alert(s === "zh" ? "每个镜头的时长都必须大于 0 秒" : "Every shot duration must be greater than 0 seconds.");
      return;
    }
    T((d) => {
      d.shots = ye(V);
    }), h((d) => Math.min(d, V.length - 1)), F(!1);
  }, Bt = () => {
    const d = URL.createObjectURL(new Blob([JSON.stringify(i, null, 2)], { type: "application/json" })), u = document.createElement("a");
    u.href = d, u.download = `${zr(i.project.name)}.director.json`, u.click(), URL.revokeObjectURL(d);
  }, Ht = () => {
    const d = pr(i);
    if (d.length) {
      window.alert(`计划未通过校验：

${d.join(`
`)}`);
      return;
    }
    t(i);
  };
  return $e(() => {
    let d = !1;
    return x ? (m(!0), $r(i, x, L).then((u) => {
      if (d) return;
      const _ = le(u);
      z(u), X((y) => {
        var R;
        return _.some((Y) => Y.path === y) ? y : ((R = _[0]) == null ? void 0 : R.path) ?? "";
      });
    }).catch((u) => {
      d || (z({ found: !1, results: [], error: String(u) }), X(""));
    }).finally(() => {
      d || m(!1);
    }), () => {
      d = !0;
    }) : (z({ found: !1, results: [] }), X(""), m(!1), () => {
      d = !0;
    });
  }, [i.project.name, i.project.runId, x == null ? void 0 : x.id, x == null ? void 0 : x.enabled, L, S]), /* @__PURE__ */ r("div", { class: "td-shell", children: [
    /* @__PURE__ */ r("header", { children: [
      /* @__PURE__ */ r("h1", { children: de(s, "title") }),
      /* @__PURE__ */ r("div", { class: "td-actions", children: [
        /* @__PURE__ */ r("button", { onClick: Bt, children: "导出 / Export" }),
        /* @__PURE__ */ r("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ r("input", { type: "file", accept: "application/json,.json", onChange: async (d) => {
            var _;
            const u = (_ = d.currentTarget.files) == null ? void 0 : _[0];
            if (u)
              try {
                const y = JSON.parse(await u.text());
                if (!y.project || !Array.isArray(y.shots) || !Array.isArray(y.assets)) throw new Error("不是有效的 Theodore Director Plan");
                a(ht(y)), h(0);
              } catch (y) {
                window.alert(String(y));
              }
          } })
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => w(s === "zh" ? "en" : "zh"), children: s === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: Ht, children: de(s, "save") }),
        /* @__PURE__ */ r("button", { onClick: n, children: de(s, "close") })
      ] })
    ] }),
    /* @__PURE__ */ r("nav", { children: ["shots", "assets", "settings", "postprocess"].map((d) => /* @__PURE__ */ r("button", { class: l === d ? "active" : "", onClick: () => p(d), children: de(s, d) })) }),
    /* @__PURE__ */ r("main", { children: [
      l === "shots" && /* @__PURE__ */ r("div", { class: "td-shots", children: [
        /* @__PURE__ */ r("aside", { class: "td-shot-sidebar", children: [
          o && /* @__PURE__ */ r("button", { class: `wide td-bulk-toggle ${P ? "active" : ""}`, onClick: () => T((d) => {
            const u = !d.shots.every((_) => _.secondSampling);
            d.shots.forEach((_) => {
              _.secondSampling = u;
            });
          }), children: s === "zh" ? `全部二次采样：${P ? "开" : "关"}` : `Second sampling for all: ${P ? "ON" : "OFF"}` }),
          /* @__PURE__ */ r("div", { class: "td-shot-list", children: i.shots.map((d, u) => /* @__PURE__ */ r("div", { class: `td-shot-card ${u === f ? "selected" : ""}`, onClick: () => h(u), children: [
            /* @__PURE__ */ r("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ r("button", { class: "td-shot-delete", disabled: i.shots.length <= 1, title: s === "zh" ? i.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : i.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": s === "zh" ? "删除镜头" : "Delete shot", onClick: (_) => {
              _.stopPropagation(), Dt(u);
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
              /* @__PURE__ */ r("button", { title: s === "zh" ? "上移镜头" : "Move shot up", onClick: (_) => {
                _.stopPropagation(), qe(u, -1);
              }, children: "↑" }),
              /* @__PURE__ */ r("button", { title: s === "zh" ? "下移镜头" : "Move shot down", onClick: (_) => {
                _.stopPropagation(), qe(u, 1);
              }, children: "↓" })
            ] })
          ] }, d.id)) }),
          /* @__PURE__ */ r("button", { class: "wide", onClick: () => T((d) => {
            const u = d.shots.length;
            d.shots = pt(d.shots, 1, 5), h(u);
          }), children: [
            "＋ ",
            de(s, "addShot")
          ] }),
          /* @__PURE__ */ r("div", { class: "td-shot-batch-entry", children: /* @__PURE__ */ r("button", { class: "wide", onClick: Lt, children: s === "zh" ? "批量处理镜头" : "Batch edit shots" }) })
        ] }),
        x && /* @__PURE__ */ r("section", { class: "td-form", children: [
          /* @__PURE__ */ r("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ r("label", { children: [
              "ID",
              /* @__PURE__ */ r("input", { value: x.id, onInput: (d) => T((u) => {
                u.shots[f].id = d.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ r("input", { value: x.title, onInput: (d) => T((u) => {
                u.shots[f].title = d.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: x.durationSeconds, onInput: (d) => T((u) => {
                u.shots[f].durationSeconds = Number(d.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: x.enabled, onChange: (d) => T((u) => {
                  u.shots[f].enabled = d.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: L === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: x.latentRelay, onChange: (d) => T((u) => {
                  u.shots[f].latentRelay = d.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: [
                  "latent接力 / Relay",
                  L === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              o && /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: "开启时执行 RTX 超分和第二次 H3 采样，关闭时直接使用第一采画面", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: x.secondSampling, onChange: (d) => T((u) => {
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
            /* @__PURE__ */ r(Pe, { rows: 10, value: x.prompt, isReferenceValid: (d) => Nt(i, x, d), onInput: (d) => T((u) => {
              u.shots[f].prompt = d.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ r("textarea", { rows: 3, value: x.negativePrompt, onInput: (d) => T((u) => {
              u.shots[f].negativePrompt = d.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ r("legend", { children: "本镜头素材 / Shot media" }),
            i.assets.map((d) => {
              const u = !x.disabledAssetIds.includes(d.id), _ = ce(d.path) || d.alias, y = `{{ref:${d.alias}}}`;
              return /* @__PURE__ */ r("div", { class: `td-shot-media-card ${u ? "" : "disabled"}`, children: [
                /* @__PURE__ */ r("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ r(lt, { asset: d, compact: !0 }),
                  /* @__PURE__ */ r("span", { class: "td-shot-media-kind", children: s === "zh" ? kr[d.kind] : d.kind }),
                  /* @__PURE__ */ r("label", { class: "td-shot-media-toggle", title: u ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ r("input", { type: "checkbox", checked: u, onChange: (R) => T((Y) => {
                    const te = Y.shots[f].disabledAssetIds;
                    Y.shots[f].disabledAssetIds = R.currentTarget.checked ? te.filter((se) => se !== d.id) : [.../* @__PURE__ */ new Set([...te, d.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ r("button", { class: `td-shot-media-name ${$ === d.id ? "copied" : ""}`, title: `${_}
${s === "zh" ? "点击复制" : "Click to copy"} ${y}`, onClick: async () => {
                  try {
                    await Cr(y), E(d.id), window.setTimeout(() => E((R) => R === d.id ? "" : R), 1400);
                  } catch (R) {
                    window.alert(`${s === "zh" ? "复制失败" : "Copy failed"}: ${String(R)}`);
                  }
                }, children: [
                  /* @__PURE__ */ r("span", { children: _ }),
                  $ === d.id && /* @__PURE__ */ r("em", { children: s === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, d.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ r("aside", { class: "td-preview", children: [
          /* @__PURE__ */ r("details", { open: C, onToggle: (d) => M(d.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: de(s, "preview") }),
              /* @__PURE__ */ r("span", { class: "td-summary-counts", children: [
                "Picture ",
                (k == null ? void 0 : k.slots.filter((d) => d.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (k == null ? void 0 : k.slots.filter((d) => d.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (k == null ? void 0 : k.audioCount) ?? 0,
                "/3 · Files ",
                (k == null ? void 0 : k.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body", children: [
              k != null && k.errors.length ? /* @__PURE__ */ r("ul", { class: "errors", children: k.errors.map((d) => /* @__PURE__ */ r("li", { children: d })) }) : /* @__PURE__ */ r("p", { class: "ok", children: de(s, "noErrors") }),
              /* @__PURE__ */ r("ol", { children: k == null ? void 0 : k.slots.map((d) => /* @__PURE__ */ r("li", { children: [
                /* @__PURE__ */ r("code", { children: d.label }),
                " ← ",
                d.alias
              ] })) }),
              /* @__PURE__ */ r("pre", { children: k == null ? void 0 : k.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ r("details", { open: j, onToggle: (d) => A(d.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: s === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ r("span", { class: `td-result-state ${W.length ? "found" : ""}`, children: Z ? s === "zh" ? "查询中" : "Checking" : W.length ? s === "zh" ? `${W.length} 个结果` : `${W.length} results` : s === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ r("div", { class: "td-result-actions", children: /* @__PURE__ */ r("button", { onClick: () => q((d) => d + 1), children: [
                "↻ ",
                s === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              Z ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: s === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : b.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: s === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again." }) : Q && ne ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
                /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
                  /* @__PURE__ */ r("video", { src: ne, controls: !0, preload: "metadata", playsInline: !0 }, Q.path),
                  /* @__PURE__ */ r("div", { class: "td-generated-meta", title: Q.path, children: [
                    Q.path,
                    Q.bytes ? ` · ${(Q.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                  ] })
                ] }),
                /* @__PURE__ */ r("div", { class: "td-result-list", "aria-label": s === "zh" ? "全部生成结果" : "All generated results", children: W.map((d, u) => {
                  const _ = ie(d.path, "output"), y = Rt(d.path, W.length - u), R = d.modifiedAt ? new Date(d.modifiedAt * 1e3).toLocaleString(s === "zh" ? "zh-CN" : "en-US") : "";
                  return /* @__PURE__ */ r("button", { class: `td-result-item ${d.path === Q.path ? "selected" : ""}`, onClick: () => X(d.path), children: [
                    _ ? /* @__PURE__ */ r(Fe, { src: _, alt: `${s === "zh" ? "结果" : "Result"} ${y}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: /* @__PURE__ */ r("span", { children: "×" }) }),
                    /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
                      /* @__PURE__ */ r("strong", { children: [
                        s === "zh" ? `结果 ${y}` : `Result ${y}`,
                        u === 0 && /* @__PURE__ */ r("em", { children: s === "zh" ? "最新" : "Latest" })
                      ] }),
                      /* @__PURE__ */ r("span", { title: d.path, children: ce(d.path) }),
                      /* @__PURE__ */ r("small", { children: [d.bytes ? `${(d.bytes / 1024 / 1024).toFixed(1)} MB` : "", R].filter(Boolean).join(" · ") })
                    ] })
                  ] }, d.path);
                }) })
              ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: s === "zh" ? "未在预期路径找到本段视频" : "No video found at the expected path" })
            ] })
          ] })
        ] })
      ] }),
      l === "assets" && /* @__PURE__ */ r("div", { class: "td-assets", children: [
        /* @__PURE__ */ r("div", { class: "td-toolbar", children: [
          ["image", "video", "audio"].map((d) => /* @__PURE__ */ r("button", { onClick: () => T((u) => u.assets.push(Sr(d))), children: [
            "＋ ",
            d
          ] })),
          /* @__PURE__ */ r("button", { class: "td-asset-batch-entry", onClick: () => J(!0), children: [
            "⇧ ",
            s === "zh" ? "批量导入素材" : "Batch import assets"
          ] })
        ] }),
        i.assets.map((d, u) => /* @__PURE__ */ r("article", { children: /* @__PURE__ */ r("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ r("div", { class: "td-grid", children: [
              /* @__PURE__ */ r("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ r("input", { value: d.alias, onInput: (_) => T((y) => {
                  y.assets[u].alias = _.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ r("select", { value: d.kind, onChange: (_) => T((y) => {
                  y.assets[u].kind = _.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ r("option", { children: "image" }),
                  /* @__PURE__ */ r("option", { children: "video" }),
                  /* @__PURE__ */ r("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ r("input", { value: d.path, onInput: (_) => T((y) => {
                  y.assets[u].path = _.currentTarget.value;
                }) }),
                /* @__PURE__ */ r("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ r("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ r("input", { type: "file", accept: d.kind === "image" ? "image/*" : d.kind === "video" ? "video/*" : "audio/*", onChange: async (_) => {
                      var Y;
                      const y = _.currentTarget, R = (Y = y.files) == null ? void 0 : Y[0];
                      if (R) {
                        v((te) => ({ ...te, [d.id]: R.name }));
                        try {
                          const te = await ut(i.project.name, d.kind, R);
                          T((se) => {
                            const Ke = se.assets.find((Vt) => Vt.id === d.id);
                            Ke && (Ke.path = te);
                          });
                        } catch (te) {
                          window.alert(String(te));
                        } finally {
                          v((te) => {
                            const se = { ...te };
                            return delete se[d.id], se;
                          }), y.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ r("span", { class: "td-file-name", title: c[d.id] || d.path, children: c[d.id] ? `${s === "zh" ? "上传中" : "Uploading"}: ${c[d.id]}` : ce(d.path) || (s === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ r("input", { type: "number", min: "0", step: "0.1", value: d.durationSeconds ?? "", onInput: (_) => T((y) => {
                  y.assets[u].durationSeconds = _.currentTarget.value ? Number(_.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ r("input", { type: "number", value: d.fixedOrder, onInput: (_) => T((y) => {
                  y.assets[u].fixedOrder = Number(_.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ r("input", { value: d.shotIds.join(", "), onInput: (_) => T((y) => {
                  y.assets[u].shotIds = _.currentTarget.value.split(",").map((R) => R.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-flags", children: [
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: d.enabled, onChange: (_) => T((y) => {
                  y.assets[u].enabled = _.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: d.fixed, onChange: (_) => T((y) => {
                  y.assets[u].fixed = _.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              d.kind === "video" && /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: d.includeVideoAudio, onChange: (_) => T((y) => {
                  y.assets[u].includeVideoAudio = _.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ r("button", { class: "danger", onClick: () => T((_) => {
                _.assets.splice(u, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ r(lt, { asset: d })
        ] }) }, d.id))
      ] }),
      l === "settings" && /* @__PURE__ */ r("section", { class: "td-form settings", children: [
        /* @__PURE__ */ r("label", { children: [
          "Project name",
          /* @__PURE__ */ r("input", { value: i.project.name, onInput: (d) => T((u) => {
            u.project.name = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Run ID",
          /* @__PURE__ */ r("input", { value: i.project.runId, onInput: (d) => T((u) => {
            u.project.runId = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "FPS",
          /* @__PURE__ */ r("input", { type: "number", value: i.defaults.fps, onInput: (d) => T((u) => {
            u.defaults.fps = Number(d.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Base seed",
          /* @__PURE__ */ r("input", { type: "number", value: i.defaults.baseSeed, onInput: (d) => T((u) => {
            u.defaults.baseSeed = Number(d.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ r(Pe, { value: i.promptPrefix, isReferenceValid: (d) => st(i, d), onInput: (d) => T((u) => {
            u.promptPrefix = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ r(Pe, { value: i.promptSuffix, isReferenceValid: (d) => st(i, d), onInput: (d) => T((u) => {
            u.promptSuffix = d.currentTarget.value;
          }) })
        ] })
      ] }),
      l === "postprocess" && /* @__PURE__ */ r(vr, { plan: i, language: s })
    ] }),
    N && /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": s === "zh" ? "批量处理镜头" : "Batch edit shots", children: [
      /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("h2", { children: s === "zh" ? "批量处理镜头" : "Batch edit shots" }),
          /* @__PURE__ */ r("p", { children: s === "zh" ? `当前共 ${V.length} 个镜头` : `${V.length} shots` })
        ] }),
        /* @__PURE__ */ r("button", { "aria-label": s === "zh" ? "关闭" : "Close", onClick: () => F(!1), children: "×" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-tools", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            s === "zh" ? "所有镜头时长" : "Duration for all shots",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: ee, onInput: (d) => je(d.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: s === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: Mt, children: s === "zh" ? "一键设置所有时长" : "Set all durations" })
        ] }),
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            s === "zh" ? "新增镜头数量" : "New shot count",
            /* @__PURE__ */ r("input", { type: "number", min: "1", max: "100", step: "1", value: fe, onInput: (d) => Ae(d.currentTarget.value) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            s === "zh" ? "每个镜头时长" : "Duration per shot",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: pe, onInput: (d) => g(d.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: s === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: Ft, children: s === "zh" ? "批量新增镜头" : "Add shots" })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-global-actions", children: [
        /* @__PURE__ */ r("span", { children: s === "zh" ? `已启用 ${V.filter((d) => d.enabled).length}/${V.length} 个镜头` : `${V.filter((d) => d.enabled).length}/${V.length} shots enabled` }),
        /* @__PURE__ */ r("button", { class: U ? "active" : "", onClick: Ot, children: U ? s === "zh" ? "全部禁用" : "Disable all" : s === "zh" ? "全部启用" : "Enable all" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-table", children: [
        /* @__PURE__ */ r("div", { class: "td-batch-row td-batch-table-head", children: [
          /* @__PURE__ */ r("span", { children: "#" }),
          /* @__PURE__ */ r("span", { children: s === "zh" ? "镜头名" : "Shot name" }),
          /* @__PURE__ */ r("span", { children: s === "zh" ? "启用" : "Enabled" }),
          /* @__PURE__ */ r("span", { children: s === "zh" ? "具体时长" : "Duration" }),
          /* @__PURE__ */ r("span", { children: [
            "latent ",
            s === "zh" ? "接力" : "relay"
          ] })
        ] }),
        V.map((d, u) => /* @__PURE__ */ r("div", { class: "td-batch-row", children: [
          /* @__PURE__ */ r("span", { children: u + 1 }),
          /* @__PURE__ */ r("input", { value: d.title, "aria-label": `${s === "zh" ? "镜头名" : "Shot name"} ${u + 1}`, onInput: (_) => K((y) => y.map((R, Y) => Y === u ? { ...R, title: _.currentTarget.value } : R)) }),
          /* @__PURE__ */ r("label", { class: "td-batch-enabled", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: d.enabled, onChange: (_) => K((y) => y.map((R, Y) => Y === u ? { ...R, enabled: _.currentTarget.checked } : R)) }),
            /* @__PURE__ */ r("span", { children: d.enabled ? s === "zh" ? "开" : "ON" : s === "zh" ? "关" : "OFF" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: d.durationSeconds, onInput: (_) => K((y) => y.map((R, Y) => Y === u ? { ...R, durationSeconds: Number(_.currentTarget.value) } : R)) }),
            /* @__PURE__ */ r("span", { children: s === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-relay", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: d.latentRelay, onChange: (_) => K((y) => y.map((R, Y) => Y === u ? { ...R, latentRelay: _.currentTarget.checked } : R)) }),
            /* @__PURE__ */ r("span", { children: d.latentRelay ? s === "zh" ? "开" : "ON" : s === "zh" ? "关" : "OFF" })
          ] })
        ] }, d.id))
      ] }),
      /* @__PURE__ */ r("footer", { children: [
        /* @__PURE__ */ r("button", { onClick: () => F(!1), children: s === "zh" ? "取消" : "Cancel" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: Ut, children: s === "zh" ? "应用更改" : "Apply changes" })
      ] })
    ] }) }),
    G && /* @__PURE__ */ r(cr, { language: s, assets: i.assets, projectName: i.project.name, uploadFile: ut, onImported: (d) => T((u) => {
      u.assets.push(...d);
    }), onClose: () => J(!1) })
  ] });
}
function Ir(e, t, n = !1) {
  const o = document.getElementById("theodore-director-modal");
  if (o) {
    o.focus();
    return;
  }
  const i = document.createElement("div");
  i.id = "theodore-director-modal", i.className = "td-modal", i.tabIndex = -1, document.body.append(i);
  const a = (p) => {
    p.key === "Escape" && l();
  }, l = () => {
    document.removeEventListener("keydown", a), Ye(null, i), i.remove();
  };
  document.addEventListener("keydown", a), Ye(/* @__PURE__ */ r(Tr, { initial: e, onSave: (p) => {
    t(p), l();
  }, onClose: l, supportsSecondSampling: n }), i), i.focus();
}
const jr = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-highlight-textarea{position:relative;display:block;width:100%;min-width:0}.td-highlight-backdrop,.td-form textarea.td-highlight-input{box-sizing:border-box;width:100%;margin:0;padding:7px 9px;font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,monospace;font-size:inherit;line-height:1.45;letter-spacing:normal;-moz-tab-size:8;tab-size:8;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.td-highlight-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border:1px solid transparent;border-radius:6px;background:#222a35;color:var(--td-text);pointer-events:none}.td-form textarea.td-highlight-input{position:relative;z-index:1;display:block;background:transparent;color:transparent;caret-color:var(--td-text);-webkit-text-fill-color:transparent}.td-highlight-input::selection{background:#5898d46b}.td-highlight-backdrop mark{padding:1px 2px;border-radius:3px;color:inherit}.td-highlight-backdrop mark.valid{background:#1d6b50;color:#bfffe6}.td-highlight-backdrop mark.invalid{background:#7a2931;color:#ffd1d5;text-decoration:underline;text-decoration-color:#ff9aa4;text-underline-offset:2px}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-generated-results{display:flex;flex-direction:column;gap:12px}.td-result-list{display:flex;flex-direction:column;gap:7px;max-height:280px;overflow:auto;padding-right:3px}.td-shell button.td-result-item{display:grid;grid-template-columns:112px minmax(0,1fr);gap:10px;align-items:center;width:100%;padding:6px;text-align:left;background:#151b23}.td-shell button.td-result-item.selected{border-color:var(--td-accent);background:#1c2a2a}.td-result-thumb{width:112px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:5px;background:#090c10;color:var(--td-muted)}.td-result-thumb img,.td-result-thumb video{display:block;width:100%;height:100%;object-fit:contain}.td-result-item-copy{display:flex;min-width:0;flex-direction:column;gap:3px}.td-result-item-copy>strong{display:flex;align-items:center;gap:7px;color:var(--td-text)}.td-result-item-copy>strong em{padding:1px 6px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-result-item-copy>span,.td-result-item-copy>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-result-item-copy>small{font-size:10px}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-asset-batch-entry{margin-left:auto;border-color:#527061!important;background:#1b2c28!important;color:var(--td-accent)!important}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}.td-shot-sidebar{display:flex;flex-direction:column}.td-shot-list{flex:none}.td-shot-batch-entry{display:flex;align-items:flex-end;flex:1;min-height:90px;padding-top:14px}.td-shot-batch-entry button{border-color:#527061;background:#1b2c28;color:var(--td-accent)}.td-batch-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:28px;background:#05080dbd;box-sizing:border-box}.td-batch-panel{display:flex;flex-direction:column;width:min(1040px,100%);max-height:min(820px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-batch-header h2{font-size:18px;margin:0}.td-batch-header p{margin:3px 0 0;color:var(--td-muted)}.td-batch-header>button{font-size:20px;line-height:1;padding:5px 9px}.td-batch-tools{display:grid;grid-template-columns:1fr 1.4fr;gap:12px;padding:14px 18px;border-bottom:1px solid var(--td-line);background:#151b23}.td-batch-tools>div{display:flex;align-items:end;gap:8px;padding:10px;border:1px solid var(--td-line);border-radius:7px}.td-batch-tools label{display:flex;flex:1;flex-direction:column;gap:4px;color:var(--td-muted);white-space:nowrap}.td-batch-tools label>span,.td-batch-duration{display:flex;align-items:center;gap:6px}.td-batch-tools input{width:100%}.td-batch-tools em{color:var(--td-muted);font-style:normal}.td-batch-tools button{white-space:nowrap}.td-batch-global-actions{display:flex;align-items:center;justify-content:flex-end;gap:12px;padding:9px 22px;border-bottom:1px solid var(--td-line);background:#171e27;color:var(--td-muted)}.td-batch-global-actions button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-batch-table{overflow:auto;padding:0 18px}.td-batch-row{display:grid;grid-template-columns:42px minmax(180px,1fr) 100px 150px 120px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-batch-table-head{position:sticky;top:0;z-index:1;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-batch-duration input{min-width:0;width:100%}.td-batch-duration>span{color:var(--td-muted)}.td-batch-enabled,.td-batch-relay{display:flex;align-items:center;gap:7px;justify-content:flex-start;color:var(--td-text)}.td-batch-enabled input,.td-batch-relay input{width:17px;height:17px;margin:0}.td-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-batch-panel{display:flex;flex-direction:column;width:min(1420px,100%);max-height:min(880px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-asset-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-asset-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-dropzone{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-height:92px;margin:14px 18px 10px;border:1px dashed #597084;border-radius:9px;background:#151b23;color:var(--td-text);cursor:pointer;transition:border-color .15s,background .15s}.td-asset-dropzone:hover,.td-asset-dropzone.dragging{border-color:var(--td-accent);background:#1b2c28}.td-asset-dropzone span{color:var(--td-muted);font-size:12px}.td-asset-dropzone input{display:none}.td-asset-batch-warning{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 18px 10px;padding:8px 10px;border:1px solid #836a32;border-radius:7px;background:#3a301c;color:#f4d991}.td-asset-batch-warning span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-warning button{padding:2px 7px}.td-asset-batch-summary{display:flex;align-items:center;justify-content:space-between;padding:8px 18px;border-top:1px solid var(--td-line);border-bottom:1px solid var(--td-line);background:#151b23;color:var(--td-muted)}.td-asset-batch-summary button{padding:5px 8px}.td-asset-batch-list{overflow:auto;padding:0 18px 10px}.td-asset-batch-row{display:grid;grid-template-columns:minmax(210px,1.4fr) minmax(150px,1fr) 115px 135px 105px 72px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-asset-batch-head{position:sticky;top:0;z-index:2;padding-top:10px;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-asset-batch-row.invalid{background:#3b202560}.td-asset-batch-row.imported{background:#17372d55}.td-asset-batch-file{display:flex;min-width:0;flex-direction:column;gap:2px}.td-asset-batch-file strong,.td-asset-batch-file small,.td-asset-batch-file em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-file small{color:var(--td-muted);font-weight:400}.td-asset-batch-file em{color:var(--td-danger);font-size:11px;font-style:normal}.td-asset-batch-duration,.td-asset-batch-audio{display:flex;align-items:center;gap:6px;color:var(--td-muted)}.td-asset-batch-duration input{min-width:0;width:100%}.td-asset-batch-audio input{width:17px;height:17px;margin:0}.td-asset-batch-empty{display:flex;min-height:130px;align-items:center;justify-content:center;color:var(--td-muted)}.td-asset-batch-panel button:disabled,.td-asset-batch-panel input:disabled,.td-asset-batch-panel select:disabled{opacity:.55;cursor:not-allowed}.td-postprocess{display:flex;flex-direction:column;gap:14px;max-width:1500px;margin:0 auto}.td-post-header,.td-post-summary,.td-post-merged{border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px}.td-post-header h2,.td-post-merged h2{margin:0;font-size:17px}.td-post-header p{margin:4px 0 0;color:var(--td-muted)}.td-post-actions{display:flex;gap:8px;flex:none}.td-post-summary{display:flex;align-items:center;gap:18px;padding:10px 14px;color:var(--td-muted)}.td-post-summary>button{margin-left:auto}.td-post-summary button:disabled{opacity:.5;cursor:not-allowed}.td-post-range{display:flex;align-items:center;gap:6px;margin-left:auto}.td-post-range input{width:64px;padding:6px 7px;text-align:center}.td-post-range button{white-space:nowrap}.td-post-summary>.td-post-range+button{margin-left:0}.td-post-error,.td-post-warning{padding:10px 13px;border-radius:7px}.td-post-error{border:1px solid #8b4149;background:#442228;color:#ffd1d5;white-space:pre-wrap}.td-post-warning{border:1px solid #836a32;background:#3a301c;color:#f4d991}.td-post-shot-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(390px,1fr));gap:12px;align-items:start}.td-post-shot{min-width:0;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel);overflow:hidden}.td-post-shot.selected{border-color:#527e6c}.td-post-shot.disabled{opacity:.72}.td-post-shot>header{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid var(--td-line);background:#1d2530}.td-post-shot>header>label{display:flex;align-items:center;gap:9px;min-width:0;cursor:pointer}.td-post-shot>header input{width:18px;height:18px;margin:0;flex:none}.td-post-shot>header label>span{display:flex;min-width:0;gap:8px;align-items:baseline}.td-post-shot>header strong{color:var(--td-text)}.td-post-shot>header em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted);font-style:normal}.td-post-shot>header>span{flex:none;padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted)}.td-post-shot-disabled-note{padding:7px 10px;border-bottom:1px solid var(--td-line);background:#332b1d;color:#e5c77d;font-size:11px}.td-post-shot-empty{min-height:96px;display:flex;align-items:center;justify-content:center;padding:12px;color:var(--td-muted);text-align:center}.td-post-result-list{display:flex;flex-direction:column;gap:7px;max-height:360px;overflow:auto;padding:9px}.td-post-result{display:grid;grid-template-columns:minmax(0,1fr) 35px;gap:6px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:5px}.td-post-result.selected{border-color:var(--td-accent);background:#1c2a2a}.td-shell button.td-post-result-choice{display:grid;grid-template-columns:112px minmax(0,1fr);gap:9px;align-items:center;min-width:0;padding:0;border:0;background:transparent;text-align:left}.td-post-result-choice>span{display:flex;min-width:0;flex-direction:column;gap:3px}.td-post-result-choice>span>strong{display:flex;align-items:center;gap:6px}.td-post-result-choice>span>strong em{padding:1px 5px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-post-result-choice>span>span,.td-post-result-choice>span>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-post-result-choice>span>small{font-size:10px}.td-post-result-play{width:35px;height:35px;padding:0!important}.td-post-result-play:disabled{opacity:.35;cursor:not-allowed}.td-post-merged{padding:12px}.td-post-merged>header>div{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px}.td-post-merged .td-generated-results{display:grid;grid-template-columns:minmax(360px,1.6fr) minmax(300px,1fr);align-items:start}.td-post-merged .td-result-list{max-height:420px}.td-post-preview-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:30;display:flex;align-items:center;justify-content:center;padding:26px;background:#030609d6}.td-post-preview-overlay>section{width:min(980px,100%);max-height:calc(100vh - 52px);overflow:auto;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 80px #000c}.td-post-preview-overlay header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--td-line)}.td-post-preview-overlay header button{font-size:20px;line-height:1;padding:5px 9px}.td-post-preview-overlay video{display:block;width:100%;max-height:calc(100vh - 170px);background:#070a0e}.td-post-preview-overlay p{margin:0;padding:9px 12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}.td-post-summary{flex-wrap:wrap}.td-post-range{margin-left:0}.td-post-summary>button{margin-left:auto}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:900px){.td-post-shot-list,.td-post-merged .td-generated-results{grid-template-columns:1fr}.td-post-header{align-items:flex-start;flex-direction:column}.td-post-actions{width:100%}.td-post-actions button{flex:1}.td-post-summary{align-items:stretch;flex-direction:column;gap:7px}.td-post-range{margin:3px 0;flex-wrap:wrap}.td-post-summary>button{margin:4px 0 0}.td-post-result-list{max-height:none}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}@media(max-width:1000px){.td-asset-batch-list{min-width:900px}.td-asset-batch-panel{overflow:auto}.td-asset-batch-panel>.td-batch-header,.td-asset-dropzone,.td-asset-batch-warning,.td-asset-batch-summary,.td-asset-batch-panel>footer{min-width:864px}}@media(max-width:720px){.td-asset-batch-entry{margin-left:0}}", mt = "theodore-director-styles";
function Ar() {
  if (document.getElementById(mt)) return;
  const e = document.createElement("style");
  e.id = mt, e.textContent = jr, document.head.append(e);
}
Ar();
const Nr = "/scripts/app.js";
import(
  /* @vite-ignore */
  Nr
).then(({ app: e }) => {
  e.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(t, n) {
      if (n.name !== "TheodoreDirector_Project") return;
      const o = t.prototype.onNodeCreated;
      t.prototype.onNodeCreated = function() {
        var a, l;
        o == null || o.apply(this);
        const i = (a = this.widgets) == null ? void 0 : a.find((p) => p.name === "plan_json");
        i && (i.type = "hidden", i.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          try {
            const p = JSON.parse(String(i.value));
            Ir(p, (f) => {
              var h, s;
              i.value = JSON.stringify(f, null, 2), this.setDirtyCanvas(!0, !0), (s = (h = e.graph) == null ? void 0 : h.setDirtyCanvas) == null || s.call(h, !0, !0);
            }, !0);
          } catch (p) {
            window.alert(`Theodore Director: ${p instanceof Error ? p.message : String(p)}`);
          }
        }), this.size = [Math.max(((l = this.size) == null ? void 0 : l[0]) ?? 300, 360), 110]);
      };
    }
  });
});
