var Ne, V, _t, ue, Ze, yt, wt, Ue, Se, ye, kt, Ke, Ve, qe, Ee = {}, Ae = [], Xt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Le = Array.isArray;
function pe(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Je(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Zt(e, t, n) {
  var o, d, i, a = {};
  for (i in t) i == "key" ? o = t[i] : i == "ref" ? d = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ne.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return $e(e, a, o, d, null);
}
function $e(e, t, n, o, d) {
  var i = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: d ?? ++_t, __i: -1, __u: 0 };
  return d == null && V.vnode != null && V.vnode(i), i;
}
function Me(e) {
  return e.children;
}
function Ce(e, t) {
  this.props = e, this.context = t;
}
function xe(e, t) {
  if (t == null) return e.__ ? xe(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? xe(e) : null;
}
function er(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, o = [], d = [], i = pe({}, t);
    i.__v = t.__v + 1, V.vnode && V.vnode(i), Ge(e.__P, i, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, o, n ?? xe(t), !!(32 & t.__u), d), i.__v = t.__v, i.__.__k[i.__i] = i, Tt(o, i, d), t.__e = t.__ = null, i.__e != n && zt(i);
  }
}
function zt(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), zt(e);
}
function et(e) {
  (!e.__d && (e.__d = !0) && ue.push(e) && !je.__r++ || Ze != V.debounceRendering) && ((Ze = V.debounceRendering) || yt)(je);
}
function je() {
  try {
    for (var e, t = 1; ue.length; ) ue.length > t && ue.sort(wt), e = ue.shift(), t = ue.length, er(e);
  } finally {
    ue.length = je.__r = 0;
  }
}
function St(e, t, n, o, d, i, a, h, x, c, f) {
  var p, l, b, k, w, z, C = o && o.__k || Ae, S = t.length;
  for (x = tr(n, t, C, x, S), p = 0; p < S; p++) (b = n.__k[p]) != null && (l = b.__i != -1 && C[b.__i] || Ee, b.__i = p, z = Ge(e, b, l, d, i, a, h, x, c, f), k = b.__e, b.ref && l.ref != b.ref && (l.ref && Qe(l.ref, null, b), f.push(b.ref, b.__c || k, b)), w == null && k != null && (w = k), 4 & b.__u ? (x = $t(b, x, e), l.__e && (l.__e = null)) : typeof b.type == "function" && z !== void 0 ? x = z : k && (x = k.nextSibling), b.__u &= -7);
  return n.__e = w, x;
}
function tr(e, t, n, o, d) {
  var i, a, h, x, c, f = n.length, p = f, l = 0;
  for (e.__k = new Array(d), i = 0; i < d; i++) (a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = e.__k[i] = $e(null, a, null, null, null) : Le(a) ? a = e.__k[i] = $e(Me, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? a = e.__k[i] = $e(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : e.__k[i] = a, x = i + l, a.__ = e, a.__b = e.__b + 1, h = null, (c = a.__i = rr(a, n, x, p)) != -1 && (p--, (h = n[c]) && (h.__u |= 2)), h == null || h.__v == null ? (c == -1 && (d > f ? l-- : d < f && l++), typeof a.type != "function" && (a.__u |= 4)) : c != x && (c == x - 1 ? l-- : c == x + 1 ? l++ : (c > x ? l-- : l++, a.__u |= 4))) : e.__k[i] = null;
  if (p) for (i = 0; i < f; i++) (h = n[i]) != null && (2 & h.__u) == 0 && (h.__e == o && (o = xe(h)), Et(h, h));
  return o;
}
function $t(e, t, n) {
  var o, d;
  if (typeof e.type == "function") {
    for (o = e.__k, d = 0; o && d < o.length; d++) o[d] && (o[d].__ = e, t = $t(o[d], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = xe(e)), t = n.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function rr(e, t, n, o) {
  var d, i, a, h = e.key, x = e.type, c = t[n], f = c != null && (2 & c.__u) == 0;
  if (c === null && h == null || f && h == c.key && x == c.type) return n;
  if (o > (f ? 1 : 0)) {
    for (d = n - 1, i = n + 1; d >= 0 || i < t.length; ) if ((c = t[a = d >= 0 ? d-- : i++]) != null && (2 & c.__u) == 0 && h == c.key && x == c.type) return a;
  }
  return -1;
}
function tt(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Xt.test(t) ? n : n + "px";
}
function ze(e, t, n, o, d) {
  var i, a;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof o == "string" && (e.style.cssText = o = ""), o) for (t in o) n && t in n || tt(e.style, t, "");
    if (n) for (t in n) o && n[t] == o[t] || tt(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(kt, "$1")), a = t.toLowerCase(), t = a in e || t == "onFocusOut" || t == "onFocusIn" ? a.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? o ? n[ye] = o[ye] : (n[ye] = Ke, e.addEventListener(t, i ? qe : Ve, i)) : e.removeEventListener(t, i ? qe : Ve, i);
  else {
    if (d == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function rt(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t[Se] == null) t[Se] = Ke++;
      else if (t[Se] < n[ye]) return;
      return n(V.event ? V.event(t) : t);
    }
  };
}
function Ge(e, t, n, o, d, i, a, h, x, c) {
  var f, p, l, b, k, w, z, C, S, M, _, A, j, q, Y, v, R = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (x = !!(32 & n.__u), i = [h = t.__e = n.__e]), (f = V.__b) && f(t);
  e: if (typeof R == "function") {
    p = a.length;
    try {
      if (S = t.props, M = R.prototype && R.prototype.render, _ = (f = R.contextType) && o[f.__c], A = f ? _ ? _.props.value : f.__ : o, n.__c ? C = (l = t.__c = n.__c).__ = l.__E : (M ? t.__c = l = new R(S, A) : (t.__c = l = new Ce(S, A), l.constructor = R, l.render = or), _ && _.sub(l), l.state || (l.state = {}), l.__n = o, b = l.__d = !0, l.__h = [], l._sb = []), M && l.__s == null && (l.__s = l.state), M && R.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = pe({}, l.__s)), pe(l.__s, R.getDerivedStateFromProps(S, l.__s))), k = l.props, w = l.state, l.__v = t, b) M && R.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), M && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (M && R.getDerivedStateFromProps == null && S !== k && l.componentWillReceiveProps != null && l.componentWillReceiveProps(S, A), t.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(S, l.__s, A) === !1) {
          t.__v != n.__v && (l.props = S, l.state = l.__s, l.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(F) {
            F && (F.__ = t);
          }), Ae.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && a.push(l), h = xe(n);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(S, l.__s, A), M && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(k, w, z);
        });
      }
      if (l.context = A, l.props = S, l.__P = e, l.__e = !1, j = V.__r, q = 0, M) l.state = l.__s, l.__d = !1, j && j(t), f = l.render(l.props, l.state, l.context), Ae.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, j && j(t), f = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++q < 25);
      l.state = l.__s, l.getChildContext != null && (o = pe(pe({}, o), l.getChildContext())), M && !b && l.getSnapshotBeforeUpdate != null && (z = l.getSnapshotBeforeUpdate(k, w)), Y = f != null && f.type === Me && f.key == null ? It(f.props.children) : f, h = St(e, Le(Y) ? Y : [Y], t, n, o, d, i, a, h, x, c), l.base = t.__e, t.__u &= -161, l.__h.length && a.push(l), C && (l.__E = l.__ = null);
    } catch (F) {
      if (a.length = p, t.__v = null, x || i != null) {
        if (F.then) {
          for (t.__u |= x ? 160 : 128; h && h.nodeType == 8 && h.nextSibling; ) h = h.nextSibling;
          i != null && (i[i.indexOf(h)] = null), t.__e = h;
        } else if (i != null) for (v = i.length; v--; ) Je(i[v]);
      } else t.__e = n.__e;
      t.__k == null && (t.__k = n.__k || []), F.then || Ct(t), V.__e(F, t, n);
    }
  } else i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : h = t.__e = nr(n.__e, t, n, o, d, i, a, x, c);
  return (f = V.diffed) && f(t), 128 & t.__u ? void 0 : h;
}
function Ct(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Ct));
}
function Tt(e, t, n) {
  for (var o = 0; o < n.length; o++) Qe(n[o], n[++o], n[++o]);
  V.__c && V.__c(t, e), e.some(function(d) {
    try {
      e = d.__h, d.__h = [], e.some(function(i) {
        i.call(d);
      });
    } catch (i) {
      V.__e(i, d.__v);
    }
  });
}
function It(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : Le(e) ? e.map(It) : e.constructor !== void 0 ? null : pe({}, e);
}
function nr(e, t, n, o, d, i, a, h, x) {
  var c, f, p, l, b, k, w, z = n.props || Ee, C = t.props, S = t.type;
  if (S == "svg" ? d = "http://www.w3.org/2000/svg" : S == "math" ? d = "http://www.w3.org/1998/Math/MathML" : d || (d = "http://www.w3.org/1999/xhtml"), i != null) {
    for (c = 0; c < i.length; c++) if ((b = i[c]) && "setAttribute" in b == !!S && (S ? b.localName == S : b.nodeType == 3)) {
      e = b, i[c] = null;
      break;
    }
  }
  if (e == null) {
    if (S == null) return document.createTextNode(C);
    e = document.createElementNS(d, S, C.is && C), h && (V.__m && V.__m(t, i), h = !1), i = null;
  }
  if (S == null) z === C || h && e.data == C || (e.data = C);
  else {
    if (i = S == "textarea" && C.defaultValue != null ? null : i && Ne.call(e.childNodes), !h && i != null) for (z = {}, c = 0; c < e.attributes.length; c++) z[(b = e.attributes[c]).name] = b.value;
    for (c in z) b = z[c], c == "dangerouslySetInnerHTML" ? p = b : c == "children" || c in C || c == "value" && "defaultValue" in C || c == "checked" && "defaultChecked" in C || ze(e, c, null, b, d);
    for (c in C) b = C[c], c == "children" ? l = b : c == "dangerouslySetInnerHTML" ? f = b : c == "value" ? k = b : c == "checked" ? w = b : h && typeof b != "function" || z[c] === b || ze(e, c, b, z[c], d);
    if (f) h || p && (f.__html == p.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (p && (e.innerHTML = ""), St(t.type == "template" ? e.content : e, Le(l) ? l : [l], t, n, o, S == "foreignObject" ? "http://www.w3.org/1999/xhtml" : d, i, a, i ? i[0] : n.__k && xe(n, 0), h, x), i != null) for (c = i.length; c--; ) Je(i[c]);
    h && S != "textarea" || (c = "value", S == "progress" && k == null ? e.removeAttribute("value") : k != null && (k !== e[c] || S == "progress" && !k || S == "option" && k != z[c]) && ze(e, c, k, z[c], d), c = "checked", w != null && w != e[c] && ze(e, c, w, z[c], d));
  }
  return e;
}
function Qe(e, t, n) {
  try {
    if (typeof e == "function") {
      var o = typeof e.__u == "function";
      o && e.__u(), o && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (d) {
    V.__e(d, n);
  }
}
function Et(e, t, n) {
  var o, d;
  if (V.unmount && V.unmount(e), (o = e.ref) && (o.current && o.current != e.__e || Qe(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (i) {
      V.__e(i, t);
    }
    o.base = o.__P = o.__n = null;
  }
  if (o = e.__k) for (d = 0; d < o.length; d++) o[d] && Et(o[d], t, n || typeof e.type != "function");
  n || Je(e.__e), e.__c = e.__ = e.__e = void 0;
}
function or(e, t, n) {
  return this.constructor(e, n);
}
function nt(e, t, n) {
  var o, d, i, a;
  t == document && (t = document.documentElement), V.__ && V.__(e, t), d = (o = !1) ? null : t.__k, i = [], a = [], Ge(t, e = t.__k = Zt(Me, null, [e]), d || Ee, Ee, t.namespaceURI, d ? null : t.firstChild ? Ne.call(t.childNodes) : null, i, d ? d.__e : t.firstChild, o, a), Tt(i, e, a), e.props.children = null;
}
Ne = Ae.slice, V = { __e: function(e, t, n, o) {
  for (var d, i, a; t = t.__; ) if ((d = t.__c) && !d.__) try {
    if ((i = d.constructor) && i.getDerivedStateFromError != null && (d.setState(i.getDerivedStateFromError(e)), a = d.__d), d.componentDidCatch != null && (d.componentDidCatch(e, o || {}), a = d.__d), a) return d.__E = d;
  } catch (h) {
    e = h;
  }
  throw e;
} }, _t = 0, Ce.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = pe({}, this.state), typeof e == "function" && (e = e(pe({}, n), this.props)), e && pe(n, e), e != null && this.__v && (t && this._sb.push(t), et(this));
}, Ce.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), et(this));
}, Ce.prototype.render = Me, ue = [], yt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, wt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, je.__r = 0, Ue = Math.random().toString(8), Se = "__d" + Ue, ye = "__a" + Ue, kt = /(PointerCapture)$|Capture$/i, Ke = 0, Ve = rt(!1), qe = rt(!0);
var ir = 0;
function r(e, t, n, o, d, i) {
  t || (t = {});
  var a, h, x = t;
  if ("ref" in x) for (h in x = {}, t) h == "ref" ? a = t[h] : x[h] = t[h];
  var c = { type: e, props: x, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --ir, __i: -1, __u: 0, __source: d, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (h in a) x[h] === void 0 && (x[h] = a[h]);
  return V.vnode && V.vnode(c), c;
}
var _e, Q, He, ot, Pe = 0, At = [], Z = V, it = Z.__b, st = Z.__r, dt = Z.diffed, at = Z.__c, lt = Z.unmount, ct = Z.__;
function De(e, t) {
  Z.__h && Z.__h(Q, e, Pe || t), Pe = 0;
  var n = Q.__H || (Q.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function E(e) {
  return Pe = 1, sr(jt, e);
}
function sr(e, t, n) {
  var o = De(_e++, 2);
  if (o.t = e, !o.__c && (o.__ = [jt(void 0, t), function(h) {
    var x = o.__N ? o.__N[0] : o.__[0], c = o.t(x, h);
    x !== c && (o.__N = [c, o.__[1]], o.__c.setState({}));
  }], o.__c = Q, !Q.__f)) {
    var d = function(h, x, c) {
      if (!o.__c.__H) return !0;
      var f = !1, p = o.__c.props !== h;
      if (o.__c.__H.__.some(function(b) {
        if (b.__N) {
          f = !0;
          var k = b.__[0];
          b.__ = b.__N, b.__N = void 0, k !== b.__[0] && (p = !0);
        }
      }), i) {
        var l = i.call(this, h, x, c);
        return f ? l || p : l;
      }
      return !f || p;
    };
    Q.__f = !0;
    var i = Q.shouldComponentUpdate, a = Q.componentWillUpdate;
    Q.componentWillUpdate = function(h, x, c) {
      if (this.__e) {
        var f = i;
        i = void 0, d(h, x, c), i = f;
      }
      a && a.call(this, h, x, c);
    }, Q.shouldComponentUpdate = d;
  }
  return o.__N || o.__;
}
function ce(e, t) {
  var n = De(_e++, 3);
  !Z.__s && Ye(n.__H, t) && (n.__ = e, n.u = t, Q.__H.__h.push(n));
}
function dr(e, t) {
  var n = De(_e++, 4);
  !Z.__s && Ye(n.__H, t) && (n.__ = e, n.u = t, Q.__h.push(n));
}
function ie(e) {
  return Pe = 5, me(function() {
    return { current: e };
  }, []);
}
function me(e, t) {
  var n = De(_e++, 7);
  return Ye(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ar() {
  for (var e; e = At.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(Te), t.__h.some(We), t.__h = [];
    } catch (n) {
      t.__h = [], Z.__e(n, e.__v);
    }
  }
}
Z.__b = function(e) {
  Q = null, it && it(e);
}, Z.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), ct && ct(e, t);
}, Z.__r = function(e) {
  st && st(e), _e = 0;
  var t = (Q = e.__c).__H;
  t && (He === Q ? (t.__h = [], Q.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(Te), t.__h.some(We), t.__h = [], _e = 0)), He = Q;
}, Z.diffed = function(e) {
  dt && dt(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (At.push(t) !== 1 && ot === Z.requestAnimationFrame || ((ot = Z.requestAnimationFrame) || lr)(ar)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), He = Q = null;
}, Z.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(Te), n.__h = n.__h.filter(function(o) {
        return !o.__ || We(o);
      });
    } catch (o) {
      t.some(function(d) {
        d.__h && (d.__h = []);
      }), t = [], Z.__e(o, n.__v);
    }
  }), at && at(e, t);
}, Z.unmount = function(e) {
  lt && lt(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(o) {
    try {
      Te(o);
    } catch (d) {
      t = d;
    }
  }), n.__H = void 0, t && Z.__e(t, n.__v));
};
var pt = typeof requestAnimationFrame == "function";
function lr(e) {
  var t, n = function() {
    clearTimeout(o), pt && cancelAnimationFrame(t), setTimeout(e);
  }, o = setTimeout(n, 35);
  pt && (t = requestAnimationFrame(n));
}
function Te(e) {
  var t = Q, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), Q = t;
}
function We(e) {
  var t = Q;
  e.__c = e.__(), Q = t;
}
function Ye(e, t) {
  return !e || e.length !== t.length || t.some(function(n, o) {
    return n !== e[o];
  });
}
function jt(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const cr = {
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
function Pt(e) {
  var o;
  const t = ((o = e.name.split(".").pop()) == null ? void 0 : o.toLocaleLowerCase()) ?? "";
  if (e.name.includes(".")) return cr[t] ?? null;
  const n = e.type.split("/", 1)[0];
  return n === "image" || n === "video" || n === "audio" ? n : null;
}
function pr(e) {
  const d = e.replace(/\.[^.]+$/, "").replace(/^\s*\d+\s*[-_. ]+/, "").normalize("NFKC").replace(/[\s-]+/g, "_").replace(/[{}]/g, "").replace(/_+/g, "_").replace(/^[_\.]+|[_\.]+$/g, "").slice(0, 96) || "asset";
  return d.toLocaleLowerCase().endsWith(".audio") ? `${d}_asset` : d;
}
function hr(e, t) {
  const n = new Set(Array.from(t, (d) => d.toLocaleLowerCase()));
  if (!n.has(e.toLocaleLowerCase())) return e;
  let o = 2;
  for (; n.has(`${e}_${o}`.toLocaleLowerCase()); ) o += 1;
  return `${e}_${o}`;
}
function ur(e, t, n) {
  const o = e.trim().toLocaleLowerCase();
  return !e.trim() || /[\s{}]/.test(e) || o.endsWith(".audio") ? "invalid" : Array.from(t, (i) => i.toLocaleLowerCase()).includes(o) || Array.from(n, (i) => i.trim().toLocaleLowerCase()).filter((i) => i === o).length > 1 ? "duplicate" : null;
}
function mr(e, t, n) {
  const o = new Set(Array.from(t)), d = [], i = [];
  for (const a of e) {
    const h = Pt(a);
    if (!h) {
      i.push(a.name);
      continue;
    }
    const x = hr(pr(a.name), o);
    o.add(x), d.push({ id: n(), file: a, alias: x, kind: h, durationSeconds: h === "image" ? null : 2, includeVideoAudio: !1, status: "pending", error: "" });
  }
  return { drafts: d, rejected: i };
}
function fr(e, t, n) {
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
function gr(e, t) {
  return t === "image" ? Promise.resolve(null) : new Promise((n) => {
    const o = document.createElement(t === "video" ? "video" : "audio"), d = URL.createObjectURL(e);
    let i = !1;
    const a = (h) => {
      i || (i = !0, o.onloadedmetadata = null, o.onerror = null, o.removeAttribute("src"), o.load(), URL.revokeObjectURL(d), n(h));
    };
    o.preload = "metadata", o.onloadedmetadata = () => a(Number.isFinite(o.duration) && o.duration > 0 ? Math.round(o.duration * 10) / 10 : null), o.onerror = () => a(null), o.src = d;
  });
}
const br = () => `asset_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`, Oe = (e, t) => t === "zh" ? { image: "图片", video: "视频", audio: "音频" }[e] : e;
function xr({ language: e, assets: t, projectName: n, onClose: o, onImported: d, uploadFile: i }) {
  const [a, h] = E([]), [x, c] = E([]), [f, p] = E(!1), [l, b] = E(!1), k = ie([]);
  k.current = a;
  const w = t.map((v) => v.alias), z = (v, R) => h((F) => F.map((L) => L.id === v ? { ...L, ...R } : L)), C = (v) => {
    if (!v.length || l) return;
    const R = [...w, ...k.current.map((L) => L.alias)], F = mr(v, R, br);
    F.rejected.length && c((L) => [...L, ...F.rejected]), F.drafts.length && (h((L) => [...L, ...F.drafts]), F.drafts.forEach((L) => {
      gr(L.file, L.kind).then((ee) => {
        ee != null && h((ne) => ne.map((m) => m.id === L.id && m.kind === L.kind && m.durationSeconds === 2 ? { ...m, durationSeconds: ee } : m));
      });
    }));
  }, M = a.filter((v) => v.status !== "imported").map((v) => v.alias), _ = (v) => {
    if (v.status === "imported") return null;
    const R = ur(v.alias, w, M);
    return R === "invalid" ? e === "zh" ? "别名为空、包含空白/花括号，或使用了保留后缀 .audio" : "Alias is empty, contains whitespace/braces, or uses reserved .audio" : R === "duplicate" ? e === "zh" ? "别名与素材库或本批次其他素材重复" : "Alias duplicates an existing or staged asset" : Pt(v.file) !== v.kind ? e === "zh" ? "文件扩展名与所选类型不匹配" : "The extension does not match the selected kind" : v.kind !== "image" && (v.durationSeconds == null || v.durationSeconds <= 0) ? e === "zh" ? "视频或音频时长必须大于 0" : "Video/audio duration must be greater than 0" : null;
  }, A = async () => {
    const R = k.current.filter((ne) => ne.status === "pending" || ne.status === "error");
    if (!R.length) return;
    if (R.some(_)) {
      window.alert(e === "zh" ? "请先修正列表中标红的项目。" : "Fix the highlighted rows before importing.");
      return;
    }
    b(!0);
    const F = Math.max(0, ...t.map((ne) => ne.fixedOrder)) + 1;
    let L = 0;
    const ee = async () => {
      for (; L < R.length; ) {
        const ne = L++, m = R[ne];
        z(m.id, { status: "uploading", error: "" });
        try {
          const $ = await i(n, m.kind, m.file);
          d([fr(m, $, F + ne)]), z(m.id, { status: "imported", error: "" });
        } catch ($) {
          z(m.id, { status: "error", error: String($) });
        }
      }
    };
    await Promise.all(Array.from({ length: Math.min(2, R.length) }, ee)), b(!1);
  }, j = a.filter((v) => v.status === "imported").length, q = a.filter((v) => v.status === "error").length, Y = a.length - j;
  return /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-asset-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": e === "zh" ? "批量导入素材" : "Batch import assets", children: [
    /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: e === "zh" ? "批量导入素材" : "Batch import assets" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "可混合选择图片、视频和音频；确认列表后再写入素材库。" : "Select images, videos, and audio together; review before uploading." })
      ] }),
      /* @__PURE__ */ r("button", { disabled: l, "aria-label": e === "zh" ? "关闭" : "Close", onClick: o, children: "×" })
    ] }),
    /* @__PURE__ */ r("label", { class: `td-asset-dropzone ${f ? "dragging" : ""}`, onDragEnter: (v) => {
      v.preventDefault(), p(!0);
    }, onDragOver: (v) => v.preventDefault(), onDragLeave: (v) => {
      v.currentTarget === v.target && p(!1);
    }, onDrop: (v) => {
      var R;
      v.preventDefault(), p(!1), C(Array.from(((R = v.dataTransfer) == null ? void 0 : R.files) ?? []));
    }, children: [
      /* @__PURE__ */ r("strong", { children: e === "zh" ? "拖拽素材到这里，或点击选择多个文件" : "Drop media here, or click to select multiple files" }),
      /* @__PURE__ */ r("span", { children: e === "zh" ? "支持图片、视频、音频混合导入" : "Mixed image, video, and audio selection is supported" }),
      /* @__PURE__ */ r("input", { type: "file", multiple: !0, accept: "image/*,video/*,audio/*", disabled: l, onChange: (v) => {
        C(Array.from(v.currentTarget.files ?? [])), v.currentTarget.value = "";
      } })
    ] }),
    x.length > 0 && /* @__PURE__ */ r("div", { class: "td-asset-batch-warning", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `已跳过 ${x.length} 个不支持的文件：${x.join("、")}` : `Skipped ${x.length} unsupported files: ${x.join(", ")}` }),
      /* @__PURE__ */ r("button", { onClick: () => c([]), children: "×" })
    ] }),
    /* @__PURE__ */ r("div", { class: "td-asset-batch-summary", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `共 ${a.length} 项 · 已导入 ${j} · 待处理 ${Y}${q ? ` · 失败 ${q}` : ""}` : `${a.length} items · ${j} imported · ${Y} pending${q ? ` · ${q} failed` : ""}` }),
      /* @__PURE__ */ r("button", { disabled: l || !a.length, onClick: () => h([]), children: e === "zh" ? "清空列表" : "Clear list" })
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
      !a.length && /* @__PURE__ */ r("div", { class: "td-asset-batch-empty", children: e === "zh" ? "尚未选择素材" : "No media selected" }),
      a.map((v) => {
        const R = _(v), F = l || v.status === "imported" || v.status === "uploading";
        return /* @__PURE__ */ r("div", { class: `td-asset-batch-row ${R || v.status === "error" ? "invalid" : ""} ${v.status === "imported" ? "imported" : ""}`, children: [
          /* @__PURE__ */ r("div", { class: "td-asset-batch-file", children: [
            /* @__PURE__ */ r("strong", { title: v.file.name, children: v.file.name }),
            /* @__PURE__ */ r("small", { children: [
              (v.file.size / 1024 / 1024).toFixed(1),
              " MB · ",
              v.status === "pending" ? e === "zh" ? "待导入" : "Pending" : v.status === "uploading" ? e === "zh" ? "上传中" : "Uploading" : v.status === "imported" ? e === "zh" ? "已完成" : "Imported" : e === "zh" ? "失败" : "Failed"
            ] }),
            (R || v.error) && /* @__PURE__ */ r("em", { title: R || v.error, children: R || v.error })
          ] }),
          /* @__PURE__ */ r("input", { disabled: F, value: v.alias, onInput: (L) => z(v.id, { alias: L.currentTarget.value, status: "pending", error: "" }) }),
          /* @__PURE__ */ r("select", { disabled: F, value: v.kind, onChange: (L) => {
            const ee = L.currentTarget.value;
            z(v.id, { kind: ee, durationSeconds: ee === "image" ? null : v.durationSeconds ?? 2, includeVideoAudio: ee === "video" && v.includeVideoAudio, status: "pending", error: "" });
          }, children: [
            /* @__PURE__ */ r("option", { value: "image", children: Oe("image", e) }),
            /* @__PURE__ */ r("option", { value: "video", children: Oe("video", e) }),
            /* @__PURE__ */ r("option", { value: "audio", children: Oe("audio", e) })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", disabled: F || v.kind === "image", value: v.durationSeconds ?? "", onInput: (L) => z(v.id, { durationSeconds: L.currentTarget.value ? Number(L.currentTarget.value) : null, status: "pending", error: "" }) }),
            /* @__PURE__ */ r("span", { children: v.kind === "image" ? "—" : e === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-audio", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", disabled: F || v.kind !== "video", checked: v.kind === "video" && v.includeVideoAudio, onChange: (L) => z(v.id, { includeVideoAudio: L.currentTarget.checked }) }),
            /* @__PURE__ */ r("span", { children: v.kind === "video" ? v.includeVideoAudio ? e === "zh" ? "开" : "ON" : e === "zh" ? "关" : "OFF" : "—" })
          ] }),
          /* @__PURE__ */ r("button", { class: "danger", disabled: F, onClick: () => h((L) => L.filter((ee) => ee.id !== v.id)), children: e === "zh" ? "移除" : "Remove" })
        ] }, v.id);
      })
    ] }),
    /* @__PURE__ */ r("footer", { children: [
      /* @__PURE__ */ r("button", { disabled: l, onClick: o, children: e === "zh" ? "关闭" : "Close" }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: l || !a.some((v) => v.status === "pending" || v.status === "error"), onClick: () => void A(), children: l ? e === "zh" ? "正在导入…" : "Importing…" : q ? e === "zh" ? "重试失败项" : "Retry failed" : e === "zh" ? "开始导入" : "Start import" })
    ] })
  ] }) });
}
function se(e, t) {
  const n = e.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!n || n.startsWith("/") || /^[A-Za-z]:\//.test(n)) return null;
  const o = n.split("/").filter(Boolean), d = o.pop();
  if (!d || o.some((a) => a === "..")) return null;
  const i = new URLSearchParams({ filename: d, type: t });
  return o.length && i.set("subfolder", o.join("/")), `/view?${i.toString()}`;
}
function Rt(e) {
  return se(e, "input");
}
function de(e) {
  return e.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function ht({ asset: e, compact: t = !1 }) {
  const n = Rt(e.path), o = `td-media-preview ${t ? "compact" : ""}`;
  return n ? e.kind === "image" ? /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("img", { src: n, alt: e.alias, loading: "lazy" }) }) : e.kind === "video" ? /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("video", { src: n, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("audio", { src: n, controls: !0, preload: "metadata" }) }) : e.path ? /* @__PURE__ */ r("div", { class: `${o} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ r("div", { class: `${o} empty`, children: "尚未选择素材 / No media selected" });
}
function vr(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > e.length) return null;
  const o = e.slice(0, t).lastIndexOf("@");
  if (o < 0) return null;
  const d = o > 0 ? e[o - 1] : "";
  if (d && /[A-Za-z0-9_.+-]/.test(d)) return null;
  const i = e.slice(o + 1, t);
  return /[\s{}@]/u.test(i) ? null : { start: o, end: t, query: i };
}
function _r(e, t) {
  const n = t.trim().toLocaleLowerCase();
  if (!n) return e;
  const o = [], d = [];
  for (const i of e)
    i.alias.toLocaleLowerCase().includes(n) ? o.push(i) : de(i.path).toLocaleLowerCase().includes(n) && d.push(i);
  return [...o, ...d];
}
function yr(e, t, n) {
  const o = `{{ref:${n}}}`;
  return {
    value: `${e.slice(0, t.start)}${o}${e.slice(t.end)}`,
    caret: t.start + o.length
  };
}
const Nt = String.raw`\{\{ref:([^{}]+)}}`;
function ut() {
  return new RegExp(Nt, "g");
}
function Lt(e, t) {
  return e.assets.filter((n) => n.enabled && n.path.trim() && (!(n.shotIds ?? []).length || (n.shotIds ?? []).includes(t.id)) && !(t.disabledAssetIds ?? []).includes(n.id));
}
function Mt(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const o of Lt(e, t)) n.set(o.alias, o);
  return n;
}
function Dt(e, t, n) {
  const o = n.trim(), d = o.endsWith(".audio"), i = d ? o.slice(0, -6) : o, a = Mt(e, t).get(i);
  return a ? !d || a.kind === "video" && a.includeVideoAudio : !1;
}
function mt(e, t) {
  const n = e.shots.filter((o) => o.enabled);
  return n.length > 0 && n.every((o) => Dt(e, o, t));
}
function Ft(e, t) {
  const n = [], o = Mt(e, t), d = [e.promptPrefix, t.prompt, e.promptSuffix].filter(Boolean).join(`
`), i = [...d.matchAll(ut())].map((_) => _[1].trim()), a = [], h = /* @__PURE__ */ new Set(), x = (_) => {
    h.has(_.id) || (h.add(_.id), a.push(_));
  };
  [...o.values()].filter((_) => _.fixed).sort((_, A) => _.fixedOrder - A.fixedOrder || _.alias.localeCompare(A.alias)).forEach(x);
  for (const _ of i) {
    const A = _.endsWith(".audio") ? _.slice(0, -6) : _, j = o.get(A);
    if (!j) {
      n.push(`未找到或已禁用素材：${_}`);
      continue;
    }
    _.endsWith(".audio") && (j.kind !== "video" || !j.includeVideoAudio) && n.push(`视频伴音未启用：${_}`), x(j);
  }
  const c = a.filter((_) => _.kind === "image"), f = a.filter((_) => _.kind === "video"), p = f.filter((_) => _.includeVideoAudio), l = a.filter((_) => _.kind === "audio"), b = p.length + l.length, k = c.length + f.length + l.length;
  c.length > 9 && n.push(`参考图 ${c.length}/9，超出 H3 上限`), f.length > 3 && n.push(`参考视频 ${f.length}/3，超出 H3 上限`), b > 3 && n.push(`有效音频 ${b}/3，超出 H3 总上限`), k > 12 && n.push(`混合文件 ${k}/12，超出 H3 上限`), b && !c.length && !f.length && n.push("音频参考不能单独使用");
  const w = f.filter((_) => typeof _.durationSeconds == "number");
  for (const _ of f) (_.durationSeconds == null || _.durationSeconds < 2 || _.durationSeconds > 15) && n.push(`视频 ${_.alias} 的时长必须为 2–15 秒`);
  w.reduce((_, A) => _ + (A.durationSeconds ?? 0), 0) > 15 && n.push("参考视频总时长超过 15 秒");
  const z = [...p.map((_) => _.audioDurationSeconds ?? _.durationSeconds), ...l.map((_) => _.durationSeconds)];
  z.some((_) => _ == null || _ < 2 || _ > 15) && n.push("每路有效音频时长必须为 2–15 秒"), z.reduce((_, A) => _ + (A ?? 0), 0) > 15 && n.push("有效音频总时长超过 15 秒");
  const C = /* @__PURE__ */ new Map();
  c.forEach((_, A) => C.set(_.alias, `<Picture ${A + 1}>`)), f.forEach((_, A) => C.set(_.alias, `<Video ${A + 1}>`)), p.forEach((_, A) => C.set(`${_.alias}.audio`, `<Audio ${A + 1}>`)), l.forEach((_, A) => C.set(_.alias, `<Audio ${p.length + A + 1}>`));
  const S = d.replace(ut(), (_, A) => C.get(A.trim()) ?? _), M = [...C.entries()].map(([_, A]) => ({ label: A, alias: _, kind: A.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: S, errors: n, slots: M, mixedFiles: k, audioCount: b };
}
function wr(e) {
  var d, i, a, h, x, c;
  const t = [];
  (i = (d = e.project) == null ? void 0 : d.name) != null && i.trim() || t.push("Project name 不能为空"), (h = (a = e.project) == null ? void 0 : a.runId) != null && h.trim() || t.push("Run ID 不能为空"), (!Array.isArray(e.shots) || !e.shots.some((f) => f.enabled)) && t.push("至少需要一个启用分镜");
  const n = /* @__PURE__ */ new Set();
  for (const f of e.shots ?? [])
    (!((x = f.id) != null && x.trim()) || n.has(f.id)) && t.push(`分镜 ID 为空或重复：${f.id || "(空)"}`), n.add(f.id), f.durationSeconds > 0 || t.push(`分镜 ${f.id} 的时长必须大于 0`);
  const o = /* @__PURE__ */ new Set();
  for (const f of e.assets ?? []) {
    const p = (c = f.alias) == null ? void 0 : c.toLocaleLowerCase();
    (!f.alias || /[\s{}]/.test(f.alias) || f.alias.endsWith(".audio") || o.has(p)) && t.push(`素材别名无效或重复：${f.alias || "(空)"}`), o.add(p), f.enabled && !f.path && t.push(`素材 ${f.alias} 尚未选择文件`);
  }
  for (const f of e.shots.filter((p) => p.enabled)) t.push(...Ft(e, f).errors.map((p) => `${f.title}: ${p}`));
  return [...new Set(t)];
}
function kr(e, t) {
  const n = [], o = new RegExp(Nt, "g");
  let d = 0;
  for (const i of e.matchAll(o)) {
    const a = i.index ?? 0;
    a > d && n.push({ text: e.slice(d, a), reference: !1 }), n.push({ text: i[0], reference: !0, valid: t(i[1]) }), d = a + i[0].length;
  }
  return d < e.length && n.push({ text: e.slice(d), reference: !1 }), n;
}
const zr = [
  "boxSizing",
  "borderTopWidth",
  "borderRightWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "fontStretch",
  "lineHeight",
  "letterSpacing",
  "textAlign",
  "textIndent",
  "textTransform",
  "tabSize",
  "wordSpacing",
  "overflowWrap",
  "wordBreak"
];
function Sr(e, t) {
  const n = window.getComputedStyle(e), o = e.getBoundingClientRect(), d = document.createElement("div");
  d.setAttribute("aria-hidden", "true"), d.style.position = "fixed", d.style.visibility = "hidden", d.style.pointerEvents = "none", d.style.left = `${o.left}px`, d.style.top = `${o.top}px`, d.style.width = `${e.offsetWidth}px`, d.style.height = `${e.offsetHeight}px`, d.style.overflow = "hidden", d.style.whiteSpace = "pre-wrap";
  for (const x of zr) d.style[x] = n[x];
  d.append(document.createTextNode(e.value.slice(0, t)));
  const i = document.createElement("span");
  i.textContent = "​", d.append(i), document.body.append(d), d.scrollTop = e.scrollTop, d.scrollLeft = e.scrollLeft;
  const a = i.getBoundingClientRect(), h = Number.parseFloat(n.lineHeight) || Number.parseFloat(n.fontSize) * 1.45 || 20;
  return d.remove(), { left: a.left, top: a.top, bottom: a.top + h };
}
const $r = {
  zh: { image: "图片", video: "视频", audio: "音频" },
  en: { image: "Image", video: "Video", audio: "Audio" }
};
function Be({ value: e, rows: t, onInput: n, isReferenceValid: o, mentionAssets: d, mentionLanguage: i = "zh" }) {
  const a = ie(null), h = ie(null), x = ie(null), c = ie(null), f = ie(!1), p = ie(!1), l = ie([]), b = ie([]), k = ie(`td-reference-mention-${Math.random().toString(36).slice(2)}`).current, [w, z] = E(null), [C, S] = E(0), [M, _] = E(null), A = kr(e, o), j = me(
    () => w && d ? _r(d, w.query) : [],
    [w, d]
  ), q = () => {
    z(null), _(null), S(0);
  }, Y = (m) => {
    if (!d || m.selectionStart !== m.selectionEnd) {
      q();
      return;
    }
    const $ = vr(m.value, m.selectionStart);
    if (!$) {
      q();
      return;
    }
    z((I) => I && I.start === $.start && I.end === $.end && I.query === $.query ? I : $);
  }, v = () => {
    var fe;
    if (!w || !x.current) return;
    const m = Sr(x.current, w.end), $ = 8, I = Math.min(390, Math.max(240, window.innerWidth - $ * 2)), X = Math.min(320, Math.max(150, window.innerHeight - $ * 2)), O = Math.min(((fe = c.current) == null ? void 0 : fe.offsetHeight) || X, X), U = Math.min(Math.max(m.left, $), window.innerWidth - I - $), re = m.bottom + 6 + O > window.innerHeight - $ && m.top - O - 6 >= $ ? m.top - O - 6 : Math.min(m.bottom + 6, window.innerHeight - O - $);
    _((ae) => ae && ae.left === U && ae.top === re && ae.width === I && ae.maxHeight === X ? ae : { left: U, top: re, width: I, maxHeight: X });
  };
  dr(v, [w, j.length, !!M]), ce(() => {
    if (!w) return;
    const m = () => v(), $ = (I) => {
      var X, O;
      I.target instanceof Node && ((X = a.current) != null && X.contains(I.target) || (O = c.current) != null && O.contains(I.target)) || q();
    };
    return window.addEventListener("resize", m), document.addEventListener("scroll", m, !0), document.addEventListener("mousedown", $), () => {
      window.removeEventListener("resize", m), document.removeEventListener("scroll", m, !0), document.removeEventListener("mousedown", $);
    };
  }, [w]), ce(() => S(0), [w == null ? void 0 : w.query]), ce(() => {
    C >= j.length && S(Math.max(0, j.length - 1));
  }, [C, j.length]), ce(() => {
    var m, $;
    ($ = (m = c.current) == null ? void 0 : m.querySelector('[aria-selected="true"]')) == null || $.scrollIntoView({ block: "nearest" });
  }, [C, j.length]);
  const R = (m) => {
    h.current && (h.current.scrollTop = m.currentTarget.scrollTop, h.current.scrollLeft = m.currentTarget.scrollLeft), w && v();
  }, F = (m, $) => {
    if (!x.current) return;
    const I = x.current;
    p.current = !0, I.value = m, I.dispatchEvent(new Event("input", { bubbles: !0 })), p.current = !1, q(), window.requestAnimationFrame(() => {
      I.focus({ preventScroll: !0 }), I.setSelectionRange($, $);
    });
  }, L = (m) => {
    if (!(m.ctrlKey || m.metaKey) || m.altKey) return !1;
    const $ = m.key.toLocaleLowerCase(), I = $ === "y" || $ === "z" && m.shiftKey;
    if (!($ === "z" && !m.shiftKey) && !I) return !1;
    const O = I ? b.current : l.current, U = O[O.length - 1], te = I ? U == null ? void 0 : U.beforeValue : U == null ? void 0 : U.afterValue;
    return !U || m.currentTarget.value !== te ? !1 : (m.preventDefault(), O.pop(), (I ? l.current : b.current).push(U), F(I ? U.afterValue : U.beforeValue, I ? U.afterCaret : U.beforeCaret), !0);
  }, ee = (m) => {
    if (!w || !x.current) return;
    const $ = x.current, I = yr($.value, w, m.alias), X = `{{ref:${m.alias}}}`, O = {
      beforeValue: $.value,
      afterValue: I.value,
      beforeCaret: w.end,
      afterCaret: I.caret
    };
    $.focus({ preventScroll: !0 }), $.setSelectionRange(w.start, w.end);
    let U = !1;
    try {
      document.execCommand("insertText", !1, X), U = $.value === I.value;
    } catch {
    }
    U || ($.value = I.value, $.dispatchEvent(new Event("input", { bubbles: !0 }))), l.current.push(O), l.current.length > 100 && l.current.shift(), b.current = [], q(), window.requestAnimationFrame(() => {
      var te, re;
      (te = x.current) == null || te.focus({ preventScroll: !0 }), (re = x.current) == null || re.setSelectionRange(I.caret, I.caret);
    });
  }, ne = (m) => {
    if (!(m.isComposing || f.current) && !L(m) && w) {
      if (m.key === "Escape") {
        m.preventDefault(), q();
        return;
      }
      if (j.length) {
        if (m.key === "ArrowDown" || m.key === "ArrowUp") {
          m.preventDefault();
          const $ = m.key === "ArrowDown" ? 1 : -1;
          S((I) => (I + $ + j.length) % j.length);
          return;
        }
        (m.key === "Enter" || m.key === "Tab") && (m.preventDefault(), ee(j[C] ?? j[0]));
      }
    }
  };
  return /* @__PURE__ */ r("span", { ref: a, class: "td-highlight-textarea", children: [
    /* @__PURE__ */ r("pre", { ref: h, class: "td-highlight-backdrop", "aria-hidden": "true", children: [
      A.map((m, $) => m.reference ? /* @__PURE__ */ r("mark", { class: m.valid ? "valid" : "invalid", children: m.text }, $) : m.text),
      e.endsWith(`
`) && " "
    ] }),
    /* @__PURE__ */ r(
      "textarea",
      {
        ref: x,
        class: "td-highlight-input",
        rows: t,
        value: e,
        "aria-autocomplete": d ? "list" : void 0,
        "aria-controls": w ? k : void 0,
        "aria-expanded": d ? !!w : void 0,
        "aria-activedescendant": w && j[C] ? `${k}-${j[C].id}` : void 0,
        onInput: (m) => {
          n(m);
          const $ = m instanceof InputEvent ? m.inputType : "";
          !p.current && $ !== "historyUndo" && $ !== "historyRedo" && (b.current = []), f.current || Y(m.currentTarget);
        },
        onClick: (m) => Y(m.currentTarget),
        onSelect: (m) => {
          f.current || Y(m.currentTarget);
        },
        onKeyDown: ne,
        onKeyUp: (m) => {
          !f.current && !["ArrowDown", "ArrowUp", "Enter", "Tab", "Escape"].includes(m.key) && Y(m.currentTarget);
        },
        onCompositionStart: () => {
          f.current = !0;
        },
        onCompositionEnd: (m) => {
          f.current = !1, Y(m.currentTarget);
        },
        onBlur: () => window.setTimeout(() => {
          document.activeElement !== x.current && q();
        }, 0),
        onScroll: R
      }
    ),
    w && M && /* @__PURE__ */ r(
      "div",
      {
        ref: c,
        id: k,
        class: "td-reference-mention-menu",
        role: "listbox",
        "aria-label": i === "zh" ? "选择参考素材" : "Choose reference media",
        style: { left: M.left, top: M.top, width: M.width, maxHeight: M.maxHeight },
        onMouseDown: (m) => m.preventDefault(),
        children: [
          /* @__PURE__ */ r("header", { children: [
            /* @__PURE__ */ r("strong", { children: i === "zh" ? "@ 参考素材" : "@ Reference media" }),
            /* @__PURE__ */ r("span", { children: j.length })
          ] }),
          j.length ? /* @__PURE__ */ r("div", { class: "td-reference-mention-options", children: j.map((m, $) => {
            const I = m.kind === "image" ? Rt(m.path) : null, X = de(m.path);
            return /* @__PURE__ */ r(
              "button",
              {
                id: `${k}-${m.id}`,
                type: "button",
                role: "option",
                "aria-selected": $ === C,
                class: $ === C ? "active" : "",
                onMouseEnter: () => S($),
                onClick: () => ee(m),
                children: [
                  /* @__PURE__ */ r("span", { class: `td-reference-mention-thumb ${m.kind}`, children: I ? /* @__PURE__ */ r("img", { src: I, alt: "", loading: "lazy" }) : /* @__PURE__ */ r("span", { children: m.kind === "image" ? "▧" : m.kind === "video" ? "▶" : "♫" }) }),
                  /* @__PURE__ */ r("span", { class: "td-reference-mention-copy", children: [
                    /* @__PURE__ */ r("strong", { children: m.alias }),
                    /* @__PURE__ */ r("small", { children: X || m.path })
                  ] }),
                  /* @__PURE__ */ r("em", { children: $r[i][m.kind] })
                ]
              },
              m.id
            );
          }) }) : /* @__PURE__ */ r("p", { class: "td-reference-mention-empty", children: i === "zh" ? "没有匹配的可用素材" : "No available media matches" })
        ]
      }
    )
  ] });
}
const Cr = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", postprocess: "后处理", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", postprocess: "Post-process", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function ge(e, t) {
  return Cr[e][t];
}
function be(e) {
  return (Array.isArray(e.results) && e.results.length ? e.results : e.path ? [{ path: e.path, bytes: e.bytes, modifiedAt: e.modifiedAt, stage: e.stage, sourcePath: e.sourcePath, completedAt: e.completedAt }] : []).filter((n) => typeof n.path == "string" && n.path.trim().length > 0).sort((n, o) => (o.modifiedAt ?? 0) - (n.modifiedAt ?? 0));
}
function Ut(e, t) {
  const n = /_video_(\d+)/i.exec(e.replace(/\\/g, "/"));
  return n ? Number(n[1]) : t;
}
function Tr(e) {
  return e.stage !== "second_pass";
}
function Re({ src: e, alt: t }) {
  const n = ie(null), [o, d] = E(!1);
  return ce(() => {
    const i = n.current;
    if (!i) return;
    if (!("IntersectionObserver" in window)) {
      d(!0);
      return;
    }
    const a = new IntersectionObserver((h) => {
      d(h.some((x) => x.isIntersecting));
    }, { rootMargin: "160px" });
    return a.observe(i), () => a.disconnect();
  }, []), /* @__PURE__ */ r("div", { class: "td-result-thumb", ref: n, children: o ? /* @__PURE__ */ r("video", { src: e, "aria-label": t, muted: !0, playsInline: !0, preload: "metadata", onLoadedMetadata: (i) => {
    const a = i.currentTarget;
    Number.isFinite(a.duration) && a.duration > 0.02 && (a.currentTime = Math.min(0.25, Math.max(0, a.duration - 0.05)));
  } }) : /* @__PURE__ */ r("span", { children: "…" }) });
}
function Ht(e) {
  let t = 0;
  return e.shots.map((n, o) => {
    const d = {
      key: `${o}:${n.id}`,
      shot: n,
      sourceIndex: o,
      activeIndex: n.enabled ? t : -1
    };
    return n.enabled && (t += 1), d;
  });
}
function Ir(e, t, n) {
  return e.filter((o) => o.shot.enabled && t[o.key]).map((o) => ({
    shotId: o.shot.id,
    activeIndex: o.activeIndex,
    path: n[o.key] ?? ""
  }));
}
function Er(e, t, n) {
  const o = {};
  return e.forEach((d) => {
    const i = d.sourceIndex + 1;
    o[d.key] = d.shot.enabled && i >= t && i <= n;
  }), o;
}
function Ar(e, t, n) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId, shotId: t, activeIndex: String(n) }).toString()}`;
}
function jr(e, t) {
  return e === "second_pass" ? t === "zh" ? "二采" : "2nd pass" : e === "first_pass" ? t === "zh" ? "一采" : "1st pass" : t === "zh" ? "旧结果" : "Legacy";
}
function Pr({ plan: e, language: t, queueSecondPass: n }) {
  const o = me(() => Ht(e), [e]), [d, i] = E({}), [a, h] = E({}), [x, c] = E(null), [f, p] = E(0);
  ce(() => {
    let b = !1;
    const k = {};
    return o.forEach((w) => {
      k[w.key] = { loading: !0, response: { found: !1, results: [] } };
    }), i(k), o.forEach((w) => {
      fetch(Ar(e, w.shot.id, w.activeIndex)).then(async (z) => {
        const C = await z.json();
        if (!z.ok) throw new Error(C.error || `HTTP ${z.status}`);
        b || i((S) => ({ ...S, [w.key]: { loading: !1, response: C } }));
      }).catch((z) => {
        b || i((C) => ({ ...C, [w.key]: { loading: !1, response: { found: !1, results: [], error: String(z) } } }));
      });
    }), () => {
      b = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((b) => b.id).join("|"), f]);
  const l = async (b, k) => {
    if (n) {
      h((w) => ({ ...w, [k]: { state: "queued" } }));
      try {
        await n({
          plan: e,
          shotId: b,
          sourcePath: k,
          requestId: `td2_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`
        }), h((w) => ({ ...w, [k]: { state: "done" } })), p((w) => w + 1);
      } catch (w) {
        h((z) => ({ ...z, [k]: { state: "error", message: String(w instanceof Error ? w.message : w) } }));
      }
    }
  };
  return /* @__PURE__ */ r("section", { class: "td-postprocess td-second-pass-panel", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "单独二采" : "Standalone second pass" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "从满意的一采抽卡直接执行二采，不重跑一采，也不启动 Impact 循环。" : "Refine a selected first-pass result without rerunning the first pass or the Impact loop." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: /* @__PURE__ */ r("button", { onClick: () => p((b) => b + 1), children: [
        "↻ ",
        t === "zh" ? "刷新结果" : "Refresh"
      ] }) })
    ] }),
    !n && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "当前工作流缺少后处理二采支流，请重新载入仓库中的 V7 导播台示例工作流。" : "This workflow does not contain the standalone second-pass branch. Reload the V7 example workflow from the repository." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: o.map((b) => {
      const k = d[b.key], w = be((k == null ? void 0 : k.response) ?? { results: [] });
      return /* @__PURE__ */ r("article", { class: "td-post-shot", children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("span", { children: [
            /* @__PURE__ */ r("strong", { children: b.shot.id }),
            /* @__PURE__ */ r("em", { children: b.shot.title })
          ] }),
          /* @__PURE__ */ r("span", { children: [
            b.shot.durationSeconds,
            "s"
          ] })
        ] }),
        !b.shot.enabled && /* @__PURE__ */ r("div", { class: "td-post-shot-disabled-note", children: t === "zh" ? "镜头已禁用，但仍可对历史一采结果进行后处理。" : "This shot is disabled, but its historical first-pass results remain available." }),
        k != null && k.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading results…" }) : k != null && k.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : w.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: w.map((z) => {
          const C = se(z.path, "output"), S = a[z.path], M = Tr(z);
          return /* @__PURE__ */ r("div", { class: "td-second-pass-result", children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", onClick: () => C && c({ path: z.path, title: `${b.shot.id} · ${b.shot.title}` }), children: [
              C ? /* @__PURE__ */ r(Re, { src: C, alt: de(z.path) }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  jr(z.stage, t),
                  (z.stage === "legacy_unknown" || !z.stage) && /* @__PURE__ */ r("em", { children: t === "zh" ? "兼容" : "Compatible" })
                ] }),
                /* @__PURE__ */ r("span", { title: z.path, children: de(z.path) }),
                /* @__PURE__ */ r("small", { children: z.bytes ? `${(z.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "primary td-second-pass-run", disabled: !n || !M || (S == null ? void 0 : S.state) === "queued", onClick: () => void l(b.shot.id, z.path), children: M ? (S == null ? void 0 : S.state) === "queued" ? t === "zh" ? "排队/执行中…" : "Queued/running…" : (S == null ? void 0 : S.state) === "done" ? t === "zh" ? "二采完成" : "Completed" : t === "zh" ? "进行二采" : "Run second pass" : t === "zh" ? "已是二采" : "Already refined" }),
            (S == null ? void 0 : S.state) === "error" && /* @__PURE__ */ r("div", { class: "td-second-pass-error", children: S.message })
          ] }, z.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "没有可用的一采结果" : "No first-pass result available" })
      ] }, b.key);
    }) }),
    x && se(x.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => c(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (b) => b.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: x.title }),
        /* @__PURE__ */ r("button", { onClick: () => c(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: se(x.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { children: de(x.path) })
    ] }) })
  ] });
}
async function ft(e) {
  const t = await fetch(e), n = await t.json();
  if (!t.ok) throw new Error(n.error || `HTTP ${t.status}`);
  return n;
}
function Rr(e, t, n) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t,
    activeIndex: String(n)
  }).toString()}`;
}
function Nr(e) {
  return `/theodore-director/v1/postprocess/merged-videos?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId }).toString()}`;
}
function Lr({ plan: e, language: t, queueSecondPass: n }) {
  const [o, d] = E("merge");
  return /* @__PURE__ */ r("section", { class: "td-postprocess-shell", children: [
    /* @__PURE__ */ r("div", { class: "td-post-mode-tabs", role: "tablist", children: [
      /* @__PURE__ */ r("button", { class: o === "merge" ? "active" : "", role: "tab", "aria-selected": o === "merge", onClick: () => d("merge"), children: t === "zh" ? "合并视频" : "Merge videos" }),
      /* @__PURE__ */ r("button", { class: o === "second-pass" ? "active" : "", role: "tab", "aria-selected": o === "second-pass", onClick: () => d("second-pass"), children: t === "zh" ? "单独二采" : "Standalone second pass" })
    ] }),
    o === "merge" ? /* @__PURE__ */ r(Mr, { plan: e, language: t }) : /* @__PURE__ */ r(Pr, { plan: e, language: t, queueSecondPass: n })
  ] });
}
function Mr({ plan: e, language: t }) {
  const n = me(() => Ht(e), [e]), [o, d] = E({}), [i, a] = E({}), [h, x] = E({}), [c, f] = E(null), [p, l] = E(!1), [b, k] = E(""), [w, z] = E(""), [C, S] = E({ found: !1, results: [] }), [M, _] = E(!1), [A, j] = E(!1), [q, Y] = E(""), [v, R] = E(0), [F, L] = E("1"), [ee, ne] = E(String(n.length || 1)), m = n.filter((u) => u.shot.enabled), $ = m.length > 0 && m.every((u) => i[u.key]), I = Ir(n, i, h), X = I.filter((u) => !u.path), O = n.some((u) => {
    var P;
    return i[u.key] && ((P = o[u.key]) == null ? void 0 : P.loading);
  }), U = n.reduce(
    (u, P) => u + (P.shot.enabled && i[P.key] ? P.shot.durationSeconds : 0),
    0
  ), te = me(() => be(C), [C]), re = te.find((u) => u.path === q) ?? te[0];
  ce(() => {
    let u = !1;
    const P = {}, J = {};
    return n.forEach((W) => {
      P[W.key] = W.shot.enabled, J[W.key] = { loading: !0, response: { found: !1, results: [] } };
    }), a((W) => {
      const B = {};
      return n.forEach((K) => {
        B[K.key] = K.shot.enabled ? W[K.key] ?? P[K.key] : !1;
      }), B;
    }), d(J), k(""), n.forEach((W) => {
      ft(Rr(e, W.shot.id, W.activeIndex)).then((B) => {
        if (u) return;
        const K = be(B);
        d((G) => ({ ...G, [W.key]: { loading: !1, response: B } })), x((G) => {
          var he;
          return {
            ...G,
            [W.key]: K.some((N) => N.path === G[W.key]) ? G[W.key] : ((he = K[0]) == null ? void 0 : he.path) ?? ""
          };
        });
      }).catch((B) => {
        u || d((K) => ({
          ...K,
          [W.key]: { loading: !1, response: { found: !1, results: [], error: String(B) } }
        }));
      });
    }), () => {
      u = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((u) => `${u.id}:${u.enabled}`).join("|"), v]), ce(() => {
    let u = !1;
    return _(!0), ft(Nr(e)).then((P) => {
      if (u) return;
      const J = be(P);
      S(P), Y((W) => {
        var B;
        return J.some((K) => K.path === W) ? W : ((B = J[0]) == null ? void 0 : B.path) ?? "";
      });
    }).catch((P) => {
      u || S({ found: !1, results: [], error: String(P) });
    }).finally(() => {
      u || _(!1);
    }), () => {
      u = !0;
    };
  }, [e.project.name, e.project.runId, v]);
  const fe = () => {
    const u = !$;
    a((P) => {
      const J = { ...P };
      return m.forEach((W) => {
        J[W.key] = u;
      }), J;
    });
  }, ae = () => {
    const u = Number(F), P = Number(ee);
    if (!Number.isInteger(u) || !Number.isInteger(P) || u < 1 || P < u || P > n.length) {
      window.alert(t === "zh" ? `请输入有效范围：1 ≤ m ≤ n ≤ ${n.length}` : `Enter a valid range: 1 ≤ m ≤ n ≤ ${n.length}`);
      return;
    }
    a(Er(n, u, P));
  }, we = async () => {
    if (!I.length) {
      window.alert(t === "zh" ? "请至少选择一个镜头" : "Select at least one shot.");
      return;
    }
    if (X.length) {
      window.alert(t === "zh" ? `以下已选镜头没有可用结果：${X.map((u) => u.shotId).join("、")}` : `Selected shots without a result: ${X.map((u) => u.shotId).join(", ")}`);
      return;
    }
    l(!0), k("");
    try {
      const u = await fetch("/theodore-director/v1/postprocess/merge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId, selections: I })
      }), P = await u.json();
      if (!u.ok) throw new Error(P.error || `HTTP ${u.status}`);
      R((J) => J + 1);
    } catch (u) {
      k(String(u instanceof Error ? u.message : u));
    } finally {
      l(!1);
    }
  }, Fe = async () => {
    j(!0), z("");
    try {
      const u = await fetch("/theodore-director/v1/postprocess/open-folder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId })
      }), P = await u.json();
      if (!u.ok) throw new Error(P.error || `HTTP ${u.status}`);
    } catch (u) {
      z(String(u instanceof Error ? u.message : u));
    } finally {
      j(!1);
    }
  }, D = re != null && re.path ? se(re.path, "output") : null;
  return /* @__PURE__ */ r("section", { class: "td-postprocess", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并视频" : "Merge videos" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "从每个镜头选择一个结果，按当前分镜顺序进行无损合并。" : "Choose one result per shot and merge them losslessly in storyboard order." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: [
        /* @__PURE__ */ r("button", { disabled: A, onClick: Fe, children: [
          "📁 ",
          A ? t === "zh" ? "正在打开…" : "Opening…" : t === "zh" ? "打开结果文件夹" : "Open results folder"
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => R((u) => u + 1), children: [
          "↻ ",
          t === "zh" ? "刷新结果" : "Refresh"
        ] }),
        /* @__PURE__ */ r("button", { onClick: fe, children: $ ? t === "zh" ? "全部取消" : "Clear all" : t === "zh" ? "一键全选" : "Select all" })
      ] })
    ] }),
    w && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "打开结果文件夹失败：" : "Unable to open results folder: ",
      w
    ] }),
    /* @__PURE__ */ r("div", { class: "td-post-summary", children: [
      /* @__PURE__ */ r("span", { children: t === "zh" ? `已选择 ${I.length}/${m.length} 个启用镜头` : `${I.length}/${m.length} enabled shots selected` }),
      /* @__PURE__ */ r("span", { children: t === "zh" ? `预计时长 ${U.toFixed(1)} 秒` : `Estimated duration ${U.toFixed(1)} sec` }),
      /* @__PURE__ */ r("div", { class: "td-post-range", role: "group", "aria-label": t === "zh" ? "合并视频范围" : "Merge video range", children: [
        /* @__PURE__ */ r("span", { children: t === "zh" ? "范围" : "Range" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: n.length, step: "1", value: F, "aria-label": t === "zh" ? "起始镜头 m" : "Start shot m", onInput: (u) => L(u.currentTarget.value) }),
        /* @__PURE__ */ r("span", { children: "—" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: n.length, step: "1", value: ee, "aria-label": t === "zh" ? "结束镜头 n" : "End shot n", onInput: (u) => ne(u.currentTarget.value) }),
        /* @__PURE__ */ r("button", { disabled: !n.length, onClick: ae, children: t === "zh" ? "确认范围" : "Apply range" })
      ] }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: p || O || !I.length || !!X.length, onClick: we, children: p ? t === "zh" ? "正在合并…" : "Merging…" : t === "zh" ? "合并所选视频" : "Merge selected videos" })
    ] }),
    b && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "合并失败：" : "Merge failed: ",
      b
    ] }),
    X.length > 0 && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "已选镜头中存在尚未生成视频的镜头。" : "Some selected shots do not have generated videos yet." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: n.map((u) => {
      const P = o[u.key], J = be((P == null ? void 0 : P.response) ?? { results: [] }), W = !!i[u.key];
      return /* @__PURE__ */ r("article", { class: `td-post-shot ${W ? "selected" : ""} ${u.shot.enabled ? "" : "disabled"}`, children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: W, disabled: !u.shot.enabled, onChange: (B) => a((K) => ({ ...K, [u.key]: B.currentTarget.checked })) }),
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("strong", { children: u.shot.id }),
              /* @__PURE__ */ r("em", { children: u.shot.title })
            ] })
          ] }),
          /* @__PURE__ */ r("span", { children: [
            u.shot.durationSeconds,
            "s"
          ] })
        ] }),
        !u.shot.enabled && /* @__PURE__ */ r("div", { class: "td-post-shot-disabled-note", children: t === "zh" ? "该镜头当前已禁用：历史结果可以预览，但不能参加合并。" : "This shot is disabled: historical results can be previewed but cannot be merged." }),
        P != null && P.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading generated results…" }) : P != null && P.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : J.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: J.map((B, K) => {
          const G = se(B.path, "output"), he = h[u.key] === B.path, N = Ut(B.path, J.length - K);
          return /* @__PURE__ */ r("div", { class: `td-post-result ${he ? "selected" : ""}`, children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", role: "radio", "aria-checked": he, onClick: () => x((ke) => ({ ...ke, [u.key]: B.path })), children: [
              G ? /* @__PURE__ */ r(Re, { src: G, alt: `${u.shot.title} ${t === "zh" ? "结果" : "result"} ${N}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  t === "zh" ? `结果 ${N}` : `Result ${N}`,
                  K === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
                ] }),
                /* @__PURE__ */ r("span", { title: B.path, children: de(B.path) }),
                /* @__PURE__ */ r("small", { children: B.bytes ? `${(B.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "td-post-result-play", disabled: !G, title: t === "zh" ? "播放预览" : "Play preview", onClick: () => G && f({ path: B.path, title: `${u.shot.id} · ${u.shot.title}` }), children: "▶" })
          ] }, B.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "未找到这个镜头的生成结果" : "No generated result found for this shot" })
      ] }, u.key);
    }) }),
    /* @__PURE__ */ r("section", { class: "td-post-merged", children: [
      /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并结果" : "Merged results" }),
        /* @__PURE__ */ r("span", { class: `td-result-state ${te.length ? "found" : ""}`, children: M ? t === "zh" ? "查询中" : "Checking" : t === "zh" ? `${te.length} 个结果` : `${te.length} results` })
      ] }) }),
      M ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "正在查询合并结果…" : "Loading merged results…" }) : C.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: t === "zh" ? "无法查询合并结果" : "Unable to query merged results" }) : re && D ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
        /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
          /* @__PURE__ */ r("video", { src: D, controls: !0, preload: "metadata", playsInline: !0 }, re.path),
          /* @__PURE__ */ r("div", { class: "td-generated-meta", title: re.path, children: re.path })
        ] }),
        /* @__PURE__ */ r("div", { class: "td-result-list", children: te.map((u, P) => {
          const J = se(u.path, "output");
          return /* @__PURE__ */ r("button", { class: `td-result-item ${u.path === re.path ? "selected" : ""}`, onClick: () => Y(u.path), children: [
            J ? /* @__PURE__ */ r(Re, { src: J, alt: `${t === "zh" ? "合并结果" : "Merged result"} ${te.length - P}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
            /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
              /* @__PURE__ */ r("strong", { children: [
                t === "zh" ? `合并结果 ${te.length - P}` : `Merged result ${te.length - P}`,
                P === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
              ] }),
              /* @__PURE__ */ r("span", { children: de(u.path) }),
              /* @__PURE__ */ r("small", { children: u.bytes ? `${(u.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
            ] })
          ] }, u.path);
        }) })
      ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "还没有合并结果" : "No merged result yet" })
    ] }),
    c && se(c.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => f(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (u) => u.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: c.title }),
        /* @__PURE__ */ r("button", { "aria-label": t === "zh" ? "关闭预览" : "Close preview", onClick: () => f(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: se(c.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { title: c.path, children: de(c.path) })
    ] }) })
  ] });
}
function Dr(e) {
  const t = e.reduce((n, o) => {
    const d = /^shot_(\d+)$/i.exec(o.id.trim());
    return d ? Math.max(n, Number(d[1])) : n;
  }, 0);
  return Math.max(t, e.length) + 1;
}
function Fr(e, t = 5) {
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
function gt(e, t, n) {
  const o = Dr(e), d = Array.from({ length: t }, (i, a) => Fr(o + a, n));
  return [...e, ...d];
}
const Ot = (e) => `${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, Ie = (e) => JSON.parse(JSON.stringify(e)), Ur = { image: "图片", video: "视频", audio: "音频" };
function bt(e) {
  var n;
  const t = Ie(e);
  return t.schemaVersion = 4, (n = t.project.id) != null && n.trim() || (t.project.id = Ot("project")), t.shots = t.shots.map((o) => ({
    ...o,
    latentRelay: o.latentRelay ?? !0,
    secondSampling: o.secondSampling ?? !0,
    disabledAssetIds: o.disabledAssetIds ?? []
  })), t.assets = t.assets.map((o) => ({ ...o, shotIds: o.shotIds ?? [] })), t;
}
function Hr(e) {
  return e.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function Or(e) {
  const t = Ot(e);
  return { id: t, alias: t, kind: e, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: e === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function xt(e, t, n) {
  const o = new FormData();
  o.append("projectName", e), o.append("kind", t), o.append("file", n);
  const d = await fetch("/theodore-director/v1/assets", { method: "POST", body: o }), i = await d.json();
  if (!d.ok || !i.path) throw new Error(i.error || `HTTP ${d.status}`);
  return i.path;
}
async function Br(e, t, n) {
  const o = new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t.id,
    activeIndex: String(n)
  }), d = await fetch(`/theodore-director/v1/generated-video?${o.toString()}`), i = await d.json();
  if (!d.ok) throw new Error(i.error || `HTTP ${d.status}`);
  return i;
}
async function Vr(e) {
  var i;
  if ((i = navigator.clipboard) != null && i.writeText)
    try {
      await navigator.clipboard.writeText(e);
      return;
    } catch {
    }
  const t = document.activeElement, n = t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement ? { start: t.selectionStart, end: t.selectionEnd, direction: t.selectionDirection } : null, o = document.createElement("textarea");
  o.value = e, o.style.position = "fixed", o.style.opacity = "0", document.body.append(o), o.select();
  const d = document.execCommand("copy");
  if (o.remove(), t instanceof HTMLElement && t.focus({ preventScroll: !0 }), n && (t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement) && t.setSelectionRange(n.start, n.end, n.direction ?? void 0), !d) throw new Error("浏览器拒绝写入剪贴板");
}
function qr({ initial: e, onSave: t, onClose: n, supportsSecondSampling: o, queueSecondPass: d }) {
  const [i, a] = E(() => bt(e)), [h, x] = E("shots"), [c, f] = E(0), [p, l] = E(() => navigator.language.startsWith("zh") ? "zh" : "en"), [b, k] = E({}), [w, z] = E(!0), [C, S] = E(!1), [M, _] = E(0), [A, j] = E({ found: !1, results: [] }), [q, Y] = E(""), [v, R] = E(!1), [F, L] = E(""), [ee, ne] = E(!0), [m, $] = E(!1), [I, X] = E(!1), [O, U] = E([]), [te, re] = E("5"), [fe, ae] = E("1"), [we, Fe] = E("5");
  ce(() => {
    const s = (g) => {
      g.target instanceof Element && g.target.closest(".td-shot-media-name") && g.preventDefault();
    };
    return document.addEventListener("mousedown", s), () => document.removeEventListener("mousedown", s);
  }, []);
  const D = i.shots[Math.min(c, i.shots.length - 1)], u = me(() => D ? Ft(i, D) : null, [i, D]), P = me(() => D ? Lt(i, D) : [], [i, D]), J = D != null && D.enabled ? i.shots.slice(0, c).filter((s) => s.enabled).length : -1, W = i.shots.length > 0 && i.shots.every((s) => s.secondSampling), B = O.length > 0 && O.every((s) => s.enabled), K = me(() => be(A), [A]), G = K.find((s) => s.path === q) ?? K[0], he = G != null && G.path ? se(G.path, "output") : null, N = (s) => a((g) => {
    const y = Ie(g);
    return s(y), y;
  }), ke = (s, g) => N((y) => {
    const T = s + g;
    T < 0 || T >= y.shots.length || ([y.shots[s], y.shots[T]] = [y.shots[T], y.shots[s]], f(T));
  }), Bt = (s) => N((g) => {
    g.shots.length <= 1 || (g.shots.splice(s, 1), f((y) => y > s ? y - 1 : y === s ? Math.min(s, g.shots.length - 1) : y));
  }), Vt = () => {
    U(Ie(i.shots)), $(!0);
  }, qt = () => {
    const s = Number(te);
    if (!Number.isFinite(s) || s <= 0) {
      window.alert(p === "zh" ? "统一时长必须大于 0 秒" : "The shared duration must be greater than 0 seconds.");
      return;
    }
    U((g) => g.map((y) => ({ ...y, durationSeconds: s })));
  }, Wt = () => {
    const s = Number(fe), g = Number(we);
    if (!Number.isInteger(s) || s < 1 || s > 100) {
      window.alert(p === "zh" ? "新增镜头数量必须是 1–100 的整数" : "The shot count must be an integer from 1 to 100.");
      return;
    }
    if (!Number.isFinite(g) || g <= 0) {
      window.alert(p === "zh" ? "新增镜头时长必须大于 0 秒" : "The new-shot duration must be greater than 0 seconds.");
      return;
    }
    U((y) => gt(y, s, g));
  }, Kt = () => {
    const s = !B;
    U((g) => g.map((y) => ({ ...y, enabled: s })));
  }, Jt = () => {
    if (O.some((s) => !Number.isFinite(s.durationSeconds) || s.durationSeconds <= 0)) {
      window.alert(p === "zh" ? "每个镜头的时长都必须大于 0 秒" : "Every shot duration must be greater than 0 seconds.");
      return;
    }
    N((s) => {
      s.shots = Ie(O);
    }), f((s) => Math.min(s, O.length - 1)), $(!1);
  }, Gt = () => {
    const s = URL.createObjectURL(new Blob([JSON.stringify(i, null, 2)], { type: "application/json" })), g = document.createElement("a");
    g.href = s, g.download = `${Hr(i.project.name)}.director.json`, g.click(), URL.revokeObjectURL(s);
  }, Qt = () => {
    const s = wr(i);
    if (s.length) {
      window.alert(`计划未通过校验：

${s.join(`
`)}`);
      return;
    }
    t(i);
  };
  return ce(() => {
    let s = !1;
    return D ? (R(!0), Br(i, D, J).then((g) => {
      if (s) return;
      const y = be(g);
      j(g), Y((T) => {
        var H;
        return y.some((oe) => oe.path === T) ? T : ((H = y[0]) == null ? void 0 : H.path) ?? "";
      });
    }).catch((g) => {
      s || (j({ found: !1, results: [], error: String(g) }), Y(""));
    }).finally(() => {
      s || R(!1);
    }), () => {
      s = !0;
    }) : (j({ found: !1, results: [] }), Y(""), R(!1), () => {
      s = !0;
    });
  }, [i.project.name, i.project.runId, D == null ? void 0 : D.id, D == null ? void 0 : D.enabled, J, M]), /* @__PURE__ */ r("div", { class: "td-shell", children: [
    /* @__PURE__ */ r("header", { children: [
      /* @__PURE__ */ r("h1", { children: ge(p, "title") }),
      /* @__PURE__ */ r("div", { class: "td-actions", children: [
        /* @__PURE__ */ r("button", { onClick: Gt, children: "导出 / Export" }),
        /* @__PURE__ */ r("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ r("input", { type: "file", accept: "application/json,.json", onChange: async (s) => {
            var y;
            const g = (y = s.currentTarget.files) == null ? void 0 : y[0];
            if (g)
              try {
                const T = JSON.parse(await g.text());
                if (!T.project || !Array.isArray(T.shots) || !Array.isArray(T.assets)) throw new Error("不是有效的 Theodore Director Plan");
                a(bt(T)), f(0);
              } catch (T) {
                window.alert(String(T));
              }
          } })
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => l(p === "zh" ? "en" : "zh"), children: p === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: Qt, children: ge(p, "save") }),
        /* @__PURE__ */ r("button", { onClick: n, children: ge(p, "close") })
      ] })
    ] }),
    /* @__PURE__ */ r("nav", { children: ["shots", "assets", "settings", "postprocess"].map((s) => /* @__PURE__ */ r("button", { class: h === s ? "active" : "", onClick: () => x(s), children: ge(p, s) })) }),
    /* @__PURE__ */ r("main", { children: [
      h === "shots" && /* @__PURE__ */ r("div", { class: "td-shots", children: [
        /* @__PURE__ */ r("aside", { class: "td-shot-sidebar", children: [
          o && /* @__PURE__ */ r("button", { class: `wide td-bulk-toggle ${W ? "active" : ""}`, onClick: () => N((s) => {
            const g = !s.shots.every((y) => y.secondSampling);
            s.shots.forEach((y) => {
              y.secondSampling = g;
            });
          }), children: p === "zh" ? `全部二次采样：${W ? "开" : "关"}` : `Second sampling for all: ${W ? "ON" : "OFF"}` }),
          /* @__PURE__ */ r("div", { class: "td-shot-list", children: i.shots.map((s, g) => /* @__PURE__ */ r("div", { class: `td-shot-card ${g === c ? "selected" : ""}`, onClick: () => f(g), children: [
            /* @__PURE__ */ r("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ r("button", { class: "td-shot-delete", disabled: i.shots.length <= 1, title: p === "zh" ? i.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : i.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": p === "zh" ? "删除镜头" : "Delete shot", onClick: (y) => {
              y.stopPropagation(), Bt(g);
            }, children: "×" }) }),
            /* @__PURE__ */ r("strong", { children: [
              g + 1,
              ". ",
              s.title
            ] }),
            /* @__PURE__ */ r("span", { children: [
              s.durationSeconds,
              "s · ",
              s.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-move-actions", children: [
              /* @__PURE__ */ r("button", { title: p === "zh" ? "上移镜头" : "Move shot up", onClick: (y) => {
                y.stopPropagation(), ke(g, -1);
              }, children: "↑" }),
              /* @__PURE__ */ r("button", { title: p === "zh" ? "下移镜头" : "Move shot down", onClick: (y) => {
                y.stopPropagation(), ke(g, 1);
              }, children: "↓" })
            ] })
          ] }, s.id)) }),
          /* @__PURE__ */ r("button", { class: "wide", onClick: () => N((s) => {
            const g = s.shots.length;
            s.shots = gt(s.shots, 1, 5), f(g);
          }), children: [
            "＋ ",
            ge(p, "addShot")
          ] }),
          /* @__PURE__ */ r("div", { class: "td-shot-batch-entry", children: /* @__PURE__ */ r("button", { class: "wide", onClick: Vt, children: p === "zh" ? "批量处理镜头" : "Batch edit shots" }) })
        ] }),
        D && /* @__PURE__ */ r("section", { class: "td-form", children: [
          /* @__PURE__ */ r("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ r("label", { children: [
              "ID",
              /* @__PURE__ */ r("input", { value: D.id, onInput: (s) => N((g) => {
                g.shots[c].id = s.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ r("input", { value: D.title, onInput: (s) => N((g) => {
                g.shots[c].title = s.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: D.durationSeconds, onInput: (s) => N((g) => {
                g.shots[c].durationSeconds = Number(s.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: D.enabled, onChange: (s) => N((g) => {
                  g.shots[c].enabled = s.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: J === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: D.latentRelay, onChange: (s) => N((g) => {
                  g.shots[c].latentRelay = s.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: [
                  "latent接力 / Relay",
                  J === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              o && /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: "开启时执行 RTX 超分和第二次 H3 采样，关闭时直接使用第一采画面", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: D.secondSampling, onChange: (s) => N((g) => {
                  g.shots[c].secondSampling = s.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: "二次采样 / 2nd pass" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { class: "td-field-label", children: [
              "提示词（使用 ",
              /* @__PURE__ */ r("code", { children: "{{ref:别名}}" }),
              "，输入 ",
              /* @__PURE__ */ r("code", { children: "@" }),
              " 快速选择）"
            ] }),
            /* @__PURE__ */ r(Be, { rows: 10, value: D.prompt, mentionAssets: P, mentionLanguage: p, isReferenceValid: (s) => Dt(i, D, s), onInput: (s) => N((g) => {
              g.shots[c].prompt = s.currentTarget.value;
            }) }, D.id)
          ] }),
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ r("textarea", { rows: 3, value: D.negativePrompt, onInput: (s) => N((g) => {
              g.shots[c].negativePrompt = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ r("legend", { children: "本镜头素材 / Shot media" }),
            /* @__PURE__ */ r("label", { class: "td-shot-media-display-toggle", children: [
              /* @__PURE__ */ r("input", { type: "checkbox", checked: ee, onChange: (s) => ne(s.currentTarget.checked) }),
              /* @__PURE__ */ r("span", { children: p === "zh" ? "显示别名" : "Show aliases" })
            ] }),
            i.assets.map((s) => {
              const g = !D.disabledAssetIds.includes(s.id), y = ee ? s.alias : de(s.path) || s.alias, T = `{{ref:${s.alias}}}`;
              return /* @__PURE__ */ r("div", { class: `td-shot-media-card ${g ? "" : "disabled"}`, children: [
                /* @__PURE__ */ r("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ r(ht, { asset: s, compact: !0 }),
                  /* @__PURE__ */ r("span", { class: "td-shot-media-kind", children: p === "zh" ? Ur[s.kind] : s.kind }),
                  /* @__PURE__ */ r("label", { class: "td-shot-media-toggle", title: g ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ r("input", { type: "checkbox", checked: g, onChange: (H) => N((oe) => {
                    const le = oe.shots[c].disabledAssetIds;
                    oe.shots[c].disabledAssetIds = H.currentTarget.checked ? le.filter((ve) => ve !== s.id) : [.../* @__PURE__ */ new Set([...le, s.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ r("button", { class: `td-shot-media-name ${F === s.id ? "copied" : ""}`, title: `${y}
${p === "zh" ? "点击复制" : "Click to copy"} ${T}`, onClick: async () => {
                  try {
                    await Vr(T), L(s.id), window.setTimeout(() => L((H) => H === s.id ? "" : H), 1400);
                  } catch (H) {
                    window.alert(`${p === "zh" ? "复制失败" : "Copy failed"}: ${String(H)}`);
                  }
                }, children: [
                  /* @__PURE__ */ r("span", { children: y }),
                  F === s.id && /* @__PURE__ */ r("em", { children: p === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, s.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ r("aside", { class: "td-preview", children: [
          /* @__PURE__ */ r("details", { open: w, onToggle: (s) => z(s.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: ge(p, "preview") }),
              /* @__PURE__ */ r("span", { class: "td-summary-counts", children: [
                "Picture ",
                (u == null ? void 0 : u.slots.filter((s) => s.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (u == null ? void 0 : u.slots.filter((s) => s.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (u == null ? void 0 : u.audioCount) ?? 0,
                "/3 · Files ",
                (u == null ? void 0 : u.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body", children: [
              u != null && u.errors.length ? /* @__PURE__ */ r("ul", { class: "errors", children: u.errors.map((s) => /* @__PURE__ */ r("li", { children: s })) }) : /* @__PURE__ */ r("p", { class: "ok", children: ge(p, "noErrors") }),
              /* @__PURE__ */ r("ol", { children: u == null ? void 0 : u.slots.map((s) => /* @__PURE__ */ r("li", { children: [
                /* @__PURE__ */ r("code", { children: s.label }),
                " ← ",
                s.alias
              ] })) }),
              /* @__PURE__ */ r("pre", { children: u == null ? void 0 : u.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ r("details", { open: C, onToggle: (s) => S(s.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: p === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ r("span", { class: `td-result-state ${K.length ? "found" : ""}`, children: v ? p === "zh" ? "查询中" : "Checking" : K.length ? p === "zh" ? `${K.length} 个结果` : `${K.length} results` : p === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ r("div", { class: "td-result-actions", children: /* @__PURE__ */ r("button", { onClick: () => _((s) => s + 1), children: [
                "↻ ",
                p === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              v ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: p === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : A.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: p === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again." }) : G && he ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
                /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
                  /* @__PURE__ */ r("video", { src: he, controls: !0, preload: "metadata", playsInline: !0 }, G.path),
                  /* @__PURE__ */ r("div", { class: "td-generated-meta", title: G.path, children: [
                    G.path,
                    G.bytes ? ` · ${(G.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                  ] })
                ] }),
                /* @__PURE__ */ r("div", { class: "td-result-list", "aria-label": p === "zh" ? "全部生成结果" : "All generated results", children: K.map((s, g) => {
                  const y = se(s.path, "output"), T = Ut(s.path, K.length - g), H = s.modifiedAt ? new Date(s.modifiedAt * 1e3).toLocaleString(p === "zh" ? "zh-CN" : "en-US") : "";
                  return /* @__PURE__ */ r("button", { class: `td-result-item ${s.path === G.path ? "selected" : ""}`, onClick: () => Y(s.path), children: [
                    y ? /* @__PURE__ */ r(Re, { src: y, alt: `${p === "zh" ? "结果" : "Result"} ${T}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: /* @__PURE__ */ r("span", { children: "×" }) }),
                    /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
                      /* @__PURE__ */ r("strong", { children: [
                        p === "zh" ? `结果 ${T}` : `Result ${T}`,
                        g === 0 && /* @__PURE__ */ r("em", { children: p === "zh" ? "最新" : "Latest" })
                      ] }),
                      /* @__PURE__ */ r("span", { title: s.path, children: de(s.path) }),
                      /* @__PURE__ */ r("small", { children: [s.bytes ? `${(s.bytes / 1024 / 1024).toFixed(1)} MB` : "", H].filter(Boolean).join(" · ") })
                    ] })
                  ] }, s.path);
                }) })
              ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: p === "zh" ? "未在预期路径找到本段视频" : "No video found at the expected path" })
            ] })
          ] })
        ] })
      ] }),
      h === "assets" && /* @__PURE__ */ r("div", { class: "td-assets", children: [
        /* @__PURE__ */ r("div", { class: "td-toolbar", children: [
          ["image", "video", "audio"].map((s) => /* @__PURE__ */ r("button", { onClick: () => N((g) => g.assets.push(Or(s))), children: [
            "＋ ",
            s
          ] })),
          /* @__PURE__ */ r("button", { class: "td-asset-batch-entry", onClick: () => X(!0), children: [
            "⇧ ",
            p === "zh" ? "批量导入素材" : "Batch import assets"
          ] })
        ] }),
        i.assets.map((s, g) => /* @__PURE__ */ r("article", { children: /* @__PURE__ */ r("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ r("div", { class: "td-grid", children: [
              /* @__PURE__ */ r("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ r("input", { value: s.alias, onInput: (y) => N((T) => {
                  T.assets[g].alias = y.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ r("select", { value: s.kind, onChange: (y) => N((T) => {
                  T.assets[g].kind = y.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ r("option", { children: "image" }),
                  /* @__PURE__ */ r("option", { children: "video" }),
                  /* @__PURE__ */ r("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ r("input", { value: s.path, onInput: (y) => N((T) => {
                  T.assets[g].path = y.currentTarget.value;
                }) }),
                /* @__PURE__ */ r("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ r("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ r("input", { type: "file", accept: s.kind === "image" ? "image/*" : s.kind === "video" ? "video/*" : "audio/*", onChange: async (y) => {
                      var oe;
                      const T = y.currentTarget, H = (oe = T.files) == null ? void 0 : oe[0];
                      if (H) {
                        k((le) => ({ ...le, [s.id]: H.name }));
                        try {
                          const le = await xt(i.project.name, s.kind, H);
                          N((ve) => {
                            const Xe = ve.assets.find((Yt) => Yt.id === s.id);
                            Xe && (Xe.path = le);
                          });
                        } catch (le) {
                          window.alert(String(le));
                        } finally {
                          k((le) => {
                            const ve = { ...le };
                            return delete ve[s.id], ve;
                          }), T.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ r("span", { class: "td-file-name", title: b[s.id] || s.path, children: b[s.id] ? `${p === "zh" ? "上传中" : "Uploading"}: ${b[s.id]}` : de(s.path) || (p === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ r("input", { type: "number", min: "0", step: "0.1", value: s.durationSeconds ?? "", onInput: (y) => N((T) => {
                  T.assets[g].durationSeconds = y.currentTarget.value ? Number(y.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ r("input", { type: "number", value: s.fixedOrder, onInput: (y) => N((T) => {
                  T.assets[g].fixedOrder = Number(y.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ r("input", { value: s.shotIds.join(", "), onInput: (y) => N((T) => {
                  T.assets[g].shotIds = y.currentTarget.value.split(",").map((H) => H.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-flags", children: [
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: s.enabled, onChange: (y) => N((T) => {
                  T.assets[g].enabled = y.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: s.fixed, onChange: (y) => N((T) => {
                  T.assets[g].fixed = y.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              s.kind === "video" && /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: s.includeVideoAudio, onChange: (y) => N((T) => {
                  T.assets[g].includeVideoAudio = y.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ r("button", { class: "danger", onClick: () => N((y) => {
                y.assets.splice(g, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ r(ht, { asset: s })
        ] }) }, s.id))
      ] }),
      h === "settings" && /* @__PURE__ */ r("section", { class: "td-form settings", children: [
        /* @__PURE__ */ r("label", { children: [
          "Project name",
          /* @__PURE__ */ r("input", { value: i.project.name, onInput: (s) => N((g) => {
            g.project.name = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Run ID",
          /* @__PURE__ */ r("input", { value: i.project.runId, onInput: (s) => N((g) => {
            g.project.runId = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "FPS",
          /* @__PURE__ */ r("input", { type: "number", value: i.defaults.fps, onInput: (s) => N((g) => {
            g.defaults.fps = Number(s.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Base seed",
          /* @__PURE__ */ r("input", { type: "number", value: i.defaults.baseSeed, onInput: (s) => N((g) => {
            g.defaults.baseSeed = Number(s.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ r(Be, { value: i.promptPrefix, isReferenceValid: (s) => mt(i, s), onInput: (s) => N((g) => {
            g.promptPrefix = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ r(Be, { value: i.promptSuffix, isReferenceValid: (s) => mt(i, s), onInput: (s) => N((g) => {
            g.promptSuffix = s.currentTarget.value;
          }) })
        ] })
      ] }),
      h === "postprocess" && /* @__PURE__ */ r(Lr, { plan: i, language: p, queueSecondPass: d })
    ] }),
    m && /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": p === "zh" ? "批量处理镜头" : "Batch edit shots", children: [
      /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("h2", { children: p === "zh" ? "批量处理镜头" : "Batch edit shots" }),
          /* @__PURE__ */ r("p", { children: p === "zh" ? `当前共 ${O.length} 个镜头` : `${O.length} shots` })
        ] }),
        /* @__PURE__ */ r("button", { "aria-label": p === "zh" ? "关闭" : "Close", onClick: () => $(!1), children: "×" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-tools", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            p === "zh" ? "所有镜头时长" : "Duration for all shots",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: te, onInput: (s) => re(s.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: p === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: qt, children: p === "zh" ? "一键设置所有时长" : "Set all durations" })
        ] }),
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            p === "zh" ? "新增镜头数量" : "New shot count",
            /* @__PURE__ */ r("input", { type: "number", min: "1", max: "100", step: "1", value: fe, onInput: (s) => ae(s.currentTarget.value) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            p === "zh" ? "每个镜头时长" : "Duration per shot",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: we, onInput: (s) => Fe(s.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: p === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: Wt, children: p === "zh" ? "批量新增镜头" : "Add shots" })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-global-actions", children: [
        /* @__PURE__ */ r("span", { children: p === "zh" ? `已启用 ${O.filter((s) => s.enabled).length}/${O.length} 个镜头` : `${O.filter((s) => s.enabled).length}/${O.length} shots enabled` }),
        /* @__PURE__ */ r("button", { class: B ? "active" : "", onClick: Kt, children: B ? p === "zh" ? "全部禁用" : "Disable all" : p === "zh" ? "全部启用" : "Enable all" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-table", children: [
        /* @__PURE__ */ r("div", { class: "td-batch-row td-batch-table-head", children: [
          /* @__PURE__ */ r("span", { children: "#" }),
          /* @__PURE__ */ r("span", { children: p === "zh" ? "镜头名" : "Shot name" }),
          /* @__PURE__ */ r("span", { children: p === "zh" ? "启用" : "Enabled" }),
          /* @__PURE__ */ r("span", { children: p === "zh" ? "具体时长" : "Duration" }),
          /* @__PURE__ */ r("span", { children: [
            "latent ",
            p === "zh" ? "接力" : "relay"
          ] })
        ] }),
        O.map((s, g) => /* @__PURE__ */ r("div", { class: "td-batch-row", children: [
          /* @__PURE__ */ r("span", { children: g + 1 }),
          /* @__PURE__ */ r("input", { value: s.title, "aria-label": `${p === "zh" ? "镜头名" : "Shot name"} ${g + 1}`, onInput: (y) => U((T) => T.map((H, oe) => oe === g ? { ...H, title: y.currentTarget.value } : H)) }),
          /* @__PURE__ */ r("label", { class: "td-batch-enabled", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: s.enabled, onChange: (y) => U((T) => T.map((H, oe) => oe === g ? { ...H, enabled: y.currentTarget.checked } : H)) }),
            /* @__PURE__ */ r("span", { children: s.enabled ? p === "zh" ? "开" : "ON" : p === "zh" ? "关" : "OFF" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: s.durationSeconds, onInput: (y) => U((T) => T.map((H, oe) => oe === g ? { ...H, durationSeconds: Number(y.currentTarget.value) } : H)) }),
            /* @__PURE__ */ r("span", { children: p === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-relay", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: s.latentRelay, onChange: (y) => U((T) => T.map((H, oe) => oe === g ? { ...H, latentRelay: y.currentTarget.checked } : H)) }),
            /* @__PURE__ */ r("span", { children: s.latentRelay ? p === "zh" ? "开" : "ON" : p === "zh" ? "关" : "OFF" })
          ] })
        ] }, s.id))
      ] }),
      /* @__PURE__ */ r("footer", { children: [
        /* @__PURE__ */ r("button", { onClick: () => $(!1), children: p === "zh" ? "取消" : "Cancel" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: Jt, children: p === "zh" ? "应用更改" : "Apply changes" })
      ] })
    ] }) }),
    I && /* @__PURE__ */ r(xr, { language: p, assets: i.assets, projectName: i.project.name, uploadFile: xt, onImported: (s) => N((g) => {
      g.assets.push(...s);
    }), onClose: () => X(!1) })
  ] });
}
function Wr(e, t, n = !1, o) {
  const d = document.getElementById("theodore-director-modal");
  if (d) {
    d.focus();
    return;
  }
  const i = document.createElement("div");
  i.id = "theodore-director-modal", i.className = "td-modal", i.tabIndex = -1, document.body.append(i);
  const a = (x) => {
    x.key === "Escape" && h();
  }, h = () => {
    document.removeEventListener("keydown", a), nt(null, i), i.remove();
  };
  document.addEventListener("keydown", a), nt(/* @__PURE__ */ r(qr, { initial: e, onSave: (x) => {
    t(x), h();
  }, onClose: h, supportsSecondSampling: n, queueSecondPass: o }), i), i.focus();
}
const Kr = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-shot-media{position:relative}.td-form label.td-shot-media-display-toggle{position:absolute;top:-17px;right:10px;z-index:3;display:flex;flex-direction:row;align-items:center;gap:6px;padding:6px 9px;border:1px solid var(--td-line);border-radius:6px;background:var(--td-panel);color:var(--td-text);cursor:pointer;white-space:nowrap}.td-form label.td-shot-media-display-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-display-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-highlight-textarea{position:relative;display:block;width:100%;min-width:0}.td-highlight-backdrop,.td-form textarea.td-highlight-input{box-sizing:border-box;width:100%;margin:0;padding:7px 9px;font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,monospace;font-size:inherit;line-height:1.45;letter-spacing:normal;-moz-tab-size:8;tab-size:8;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.td-highlight-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border:1px solid transparent;border-radius:6px;background:#222a35;color:var(--td-text);pointer-events:none}.td-form textarea.td-highlight-input{position:relative;z-index:1;display:block;background:transparent;color:transparent;caret-color:var(--td-text);-webkit-text-fill-color:transparent}.td-highlight-input::selection{background:#5898d46b}.td-highlight-backdrop mark{padding:0;border-radius:3px;color:inherit}.td-highlight-backdrop mark.valid{background:#1d6b50;color:#bfffe6}.td-highlight-backdrop mark.invalid{background:#7a2931;color:#ffd1d5;text-decoration:underline;text-decoration-color:#ff9aa4;text-underline-offset:2px}.td-reference-mention-menu{position:fixed;z-index:80;display:flex;flex-direction:column;overflow:hidden;border:1px solid #526174;border-radius:9px;background:#161d26;color:var(--td-text);box-shadow:0 14px 42px #000b}.td-reference-mention-menu>header{display:flex;align-items:center;justify-content:space-between;flex:none;padding:8px 10px;border-bottom:1px solid var(--td-line);background:#202936}.td-reference-mention-menu>header strong{color:var(--td-text);font-size:13px}.td-reference-mention-menu>header span{padding:1px 7px;border-radius:999px;background:#2b3745;color:var(--td-muted);font-size:11px}.td-reference-mention-options{min-height:0;overflow:auto;padding:5px}.td-shell .td-reference-mention-options>button{display:grid;grid-template-columns:66px minmax(0,1fr) auto;gap:9px;align-items:center;width:100%;min-height:56px;padding:5px;border:1px solid transparent;background:transparent;text-align:left}.td-shell .td-reference-mention-options>button:hover,.td-shell .td-reference-mention-options>button.active{border-color:#527e6c;background:#1d302b}.td-reference-mention-thumb{display:flex;width:66px;height:46px;align-items:center;justify-content:center;overflow:hidden;border:1px solid var(--td-line);border-radius:5px;background:#0b0f14;color:var(--td-accent);font-size:20px}.td-reference-mention-thumb img{display:block;width:100%;height:100%;object-fit:cover}.td-reference-mention-copy{display:flex;min-width:0;flex-direction:column;gap:2px}.td-reference-mention-copy strong,.td-reference-mention-copy small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-reference-mention-copy strong{color:var(--td-text)}.td-reference-mention-copy small{color:var(--td-muted);font-size:11px}.td-reference-mention-options>button>em{padding:2px 7px;border-radius:999px;background:#293440;color:var(--td-muted);font-size:10px;font-style:normal;white-space:nowrap}.td-reference-mention-empty{margin:0;padding:22px 12px;color:var(--td-muted);text-align:center}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-generated-results{display:flex;flex-direction:column;gap:12px}.td-result-list{display:flex;flex-direction:column;gap:7px;max-height:280px;overflow:auto;padding-right:3px}.td-shell button.td-result-item{display:grid;grid-template-columns:112px minmax(0,1fr);gap:10px;align-items:center;width:100%;padding:6px;text-align:left;background:#151b23}.td-shell button.td-result-item.selected{border-color:var(--td-accent);background:#1c2a2a}.td-result-thumb{width:112px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:5px;background:#090c10;color:var(--td-muted)}.td-result-thumb img,.td-result-thumb video{display:block;width:100%;height:100%;object-fit:contain}.td-result-item-copy{display:flex;min-width:0;flex-direction:column;gap:3px}.td-result-item-copy>strong{display:flex;align-items:center;gap:7px;color:var(--td-text)}.td-result-item-copy>strong em{padding:1px 6px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-result-item-copy>span,.td-result-item-copy>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-result-item-copy>small{font-size:10px}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-asset-batch-entry{margin-left:auto;border-color:#527061!important;background:#1b2c28!important;color:var(--td-accent)!important}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}.td-shot-sidebar{display:flex;flex-direction:column}.td-shot-list{flex:none}.td-shot-batch-entry{display:flex;align-items:flex-end;flex:1;min-height:90px;padding-top:14px}.td-shot-batch-entry button{border-color:#527061;background:#1b2c28;color:var(--td-accent)}.td-batch-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:28px;background:#05080dbd;box-sizing:border-box}.td-batch-panel{display:flex;flex-direction:column;width:min(1040px,100%);max-height:min(820px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-batch-header h2{font-size:18px;margin:0}.td-batch-header p{margin:3px 0 0;color:var(--td-muted)}.td-batch-header>button{font-size:20px;line-height:1;padding:5px 9px}.td-batch-tools{display:grid;grid-template-columns:1fr 1.4fr;gap:12px;padding:14px 18px;border-bottom:1px solid var(--td-line);background:#151b23}.td-batch-tools>div{display:flex;align-items:end;gap:8px;padding:10px;border:1px solid var(--td-line);border-radius:7px}.td-batch-tools label{display:flex;flex:1;flex-direction:column;gap:4px;color:var(--td-muted);white-space:nowrap}.td-batch-tools label>span,.td-batch-duration{display:flex;align-items:center;gap:6px}.td-batch-tools input{width:100%}.td-batch-tools em{color:var(--td-muted);font-style:normal}.td-batch-tools button{white-space:nowrap}.td-batch-global-actions{display:flex;align-items:center;justify-content:flex-end;gap:12px;padding:9px 22px;border-bottom:1px solid var(--td-line);background:#171e27;color:var(--td-muted)}.td-batch-global-actions button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-batch-table{overflow:auto;padding:0 18px}.td-batch-row{display:grid;grid-template-columns:42px minmax(180px,1fr) 100px 150px 120px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-batch-table-head{position:sticky;top:0;z-index:1;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-batch-duration input{min-width:0;width:100%}.td-batch-duration>span{color:var(--td-muted)}.td-batch-enabled,.td-batch-relay{display:flex;align-items:center;gap:7px;justify-content:flex-start;color:var(--td-text)}.td-batch-enabled input,.td-batch-relay input{width:17px;height:17px;margin:0}.td-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-batch-panel{display:flex;flex-direction:column;width:min(1420px,100%);max-height:min(880px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-asset-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-asset-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-dropzone{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-height:92px;margin:14px 18px 10px;border:1px dashed #597084;border-radius:9px;background:#151b23;color:var(--td-text);cursor:pointer;transition:border-color .15s,background .15s}.td-asset-dropzone:hover,.td-asset-dropzone.dragging{border-color:var(--td-accent);background:#1b2c28}.td-asset-dropzone span{color:var(--td-muted);font-size:12px}.td-asset-dropzone input{display:none}.td-asset-batch-warning{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 18px 10px;padding:8px 10px;border:1px solid #836a32;border-radius:7px;background:#3a301c;color:#f4d991}.td-asset-batch-warning span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-warning button{padding:2px 7px}.td-asset-batch-summary{display:flex;align-items:center;justify-content:space-between;padding:8px 18px;border-top:1px solid var(--td-line);border-bottom:1px solid var(--td-line);background:#151b23;color:var(--td-muted)}.td-asset-batch-summary button{padding:5px 8px}.td-asset-batch-list{overflow:auto;padding:0 18px 10px}.td-asset-batch-row{display:grid;grid-template-columns:minmax(210px,1.4fr) minmax(150px,1fr) 115px 135px 105px 72px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-asset-batch-head{position:sticky;top:0;z-index:2;padding-top:10px;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-asset-batch-row.invalid{background:#3b202560}.td-asset-batch-row.imported{background:#17372d55}.td-asset-batch-file{display:flex;min-width:0;flex-direction:column;gap:2px}.td-asset-batch-file strong,.td-asset-batch-file small,.td-asset-batch-file em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-file small{color:var(--td-muted);font-weight:400}.td-asset-batch-file em{color:var(--td-danger);font-size:11px;font-style:normal}.td-asset-batch-duration,.td-asset-batch-audio{display:flex;align-items:center;gap:6px;color:var(--td-muted)}.td-asset-batch-duration input{min-width:0;width:100%}.td-asset-batch-audio input{width:17px;height:17px;margin:0}.td-asset-batch-empty{display:flex;min-height:130px;align-items:center;justify-content:center;color:var(--td-muted)}.td-asset-batch-panel button:disabled,.td-asset-batch-panel input:disabled,.td-asset-batch-panel select:disabled{opacity:.55;cursor:not-allowed}.td-postprocess{display:flex;flex-direction:column;gap:14px;max-width:1500px;margin:0 auto}.td-post-header,.td-post-summary,.td-post-merged{border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px}.td-post-header h2,.td-post-merged h2{margin:0;font-size:17px}.td-post-header p{margin:4px 0 0;color:var(--td-muted)}.td-post-actions{display:flex;gap:8px;flex:none}.td-post-summary{display:flex;align-items:center;gap:18px;padding:10px 14px;color:var(--td-muted)}.td-post-summary>button{margin-left:auto}.td-post-summary button:disabled{opacity:.5;cursor:not-allowed}.td-post-range{display:flex;align-items:center;gap:6px;margin-left:auto}.td-post-range input{width:64px;padding:6px 7px;text-align:center}.td-post-range button{white-space:nowrap}.td-post-summary>.td-post-range+button{margin-left:0}.td-post-error,.td-post-warning{padding:10px 13px;border-radius:7px}.td-post-error{border:1px solid #8b4149;background:#442228;color:#ffd1d5;white-space:pre-wrap}.td-post-warning{border:1px solid #836a32;background:#3a301c;color:#f4d991}.td-post-shot-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(390px,1fr));gap:12px;align-items:start}.td-post-shot{min-width:0;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel);overflow:hidden}.td-post-shot.selected{border-color:#527e6c}.td-post-shot.disabled{opacity:.72}.td-post-shot>header{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid var(--td-line);background:#1d2530}.td-post-shot>header>label{display:flex;align-items:center;gap:9px;min-width:0;cursor:pointer}.td-post-shot>header input{width:18px;height:18px;margin:0;flex:none}.td-post-shot>header label>span{display:flex;min-width:0;gap:8px;align-items:baseline}.td-post-shot>header strong{color:var(--td-text)}.td-post-shot>header em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted);font-style:normal}.td-post-shot>header>span{flex:none;padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted)}.td-post-shot-disabled-note{padding:7px 10px;border-bottom:1px solid var(--td-line);background:#332b1d;color:#e5c77d;font-size:11px}.td-post-shot-empty{min-height:96px;display:flex;align-items:center;justify-content:center;padding:12px;color:var(--td-muted);text-align:center}.td-post-result-list{display:flex;flex-direction:column;gap:7px;max-height:360px;overflow:auto;padding:9px}.td-post-result{display:grid;grid-template-columns:minmax(0,1fr) 35px;gap:6px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:5px}.td-post-result.selected{border-color:var(--td-accent);background:#1c2a2a}.td-shell button.td-post-result-choice{display:grid;grid-template-columns:112px minmax(0,1fr);gap:9px;align-items:center;min-width:0;padding:0;border:0;background:transparent;text-align:left}.td-post-result-choice>span{display:flex;min-width:0;flex-direction:column;gap:3px}.td-post-result-choice>span>strong{display:flex;align-items:center;gap:6px}.td-post-result-choice>span>strong em{padding:1px 5px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-post-result-choice>span>span,.td-post-result-choice>span>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-post-result-choice>span>small{font-size:10px}.td-post-result-play{width:35px;height:35px;padding:0!important}.td-post-result-play:disabled{opacity:.35;cursor:not-allowed}.td-post-merged{padding:12px}.td-post-merged>header>div{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px}.td-post-merged .td-generated-results{display:grid;grid-template-columns:minmax(360px,1.6fr) minmax(300px,1fr);align-items:start}.td-post-merged .td-result-list{max-height:420px}.td-post-preview-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:30;display:flex;align-items:center;justify-content:center;padding:26px;background:#030609d6}.td-post-preview-overlay>section{width:min(980px,100%);max-height:calc(100vh - 52px);overflow:auto;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 80px #000c}.td-post-preview-overlay header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--td-line)}.td-post-preview-overlay header button{font-size:20px;line-height:1;padding:5px 9px}.td-post-preview-overlay video{display:block;width:100%;max-height:calc(100vh - 170px);background:#070a0e}.td-post-preview-overlay p{margin:0;padding:9px 12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}.td-post-summary{flex-wrap:wrap}.td-post-range{margin-left:0}.td-post-summary>button{margin-left:auto}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:900px){.td-post-shot-list,.td-post-merged .td-generated-results{grid-template-columns:1fr}.td-post-header{align-items:flex-start;flex-direction:column}.td-post-actions{width:100%}.td-post-actions button{flex:1}.td-post-summary{align-items:stretch;flex-direction:column;gap:7px}.td-post-range{margin:3px 0;flex-wrap:wrap}.td-post-summary>button{margin:4px 0 0}.td-post-result-list{max-height:none}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}@media(max-width:1000px){.td-asset-batch-list{min-width:900px}.td-asset-batch-panel{overflow:auto}.td-asset-batch-panel>.td-batch-header,.td-asset-dropzone,.td-asset-batch-warning,.td-asset-batch-summary,.td-asset-batch-panel>footer{min-width:864px}}@media(max-width:720px){.td-asset-batch-entry{margin-left:0}}.td-postprocess-shell{display:flex;flex-direction:column;gap:12px;max-width:1500px;margin:0 auto}.td-postprocess-shell>.td-postprocess{max-width:none;width:100%;margin:0}.td-post-mode-tabs{display:flex;gap:7px;padding:5px;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-mode-tabs button{min-width:130px}.td-post-mode-tabs button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-second-pass-panel .td-post-shot>header>span:first-child{display:flex;min-width:0;gap:8px;align-items:baseline;padding:0;background:transparent}.td-second-pass-result{display:grid;grid-template-columns:minmax(0,1fr) 118px;gap:8px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:6px}.td-second-pass-result:has(.td-second-pass-run:disabled){border-color:#34404d}.td-second-pass-run{width:118px;min-height:38px;padding:6px!important}.td-second-pass-run:disabled{opacity:.62;cursor:not-allowed}.td-second-pass-error{grid-column:1/-1;padding:6px 8px;border-radius:5px;background:#442228;color:#ffd1d5;font-size:11px;white-space:pre-wrap}@media(max-width:620px){.td-post-mode-tabs{flex-direction:column}.td-post-mode-tabs button{width:100%}.td-second-pass-result{grid-template-columns:1fr}.td-second-pass-run{width:100%}}", vt = "theodore-director-styles";
function Jr() {
  if (document.getElementById(vt)) return;
  const e = document.createElement("style");
  e.id = vt, e.textContent = Kr, document.head.append(e);
}
Jr();
const Gr = "/scripts/app.js", Qr = "/scripts/api.js";
Promise.all([
  import(
    /* @vite-ignore */
    Gr
  ),
  import(
    /* @vite-ignore */
    Qr
  )
]).then(([{ app: e }, { api: t }]) => {
  const n = async (o) => {
    var k, w;
    const d = ((k = e.graph) == null ? void 0 : k._nodes) ?? [], i = d.find((z) => z.type === "TheodoreDirector_PostprocessSecondPassSource"), a = d.find((z) => z.type === "TheodoreDirector_SaveSecondPass"), h = (w = i == null ? void 0 : i.widgets) == null ? void 0 : w.find((z) => z.name === "request_json");
    if (!i || !a || !h || a.id === void 0)
      throw new Error("当前工作流缺少后处理单独二采支流，请重新载入仓库中的 V7 导播台示例工作流");
    const x = h.value, c = i.mode, f = a.mode;
    let p;
    try {
      h.value = JSON.stringify(o), i.mode = 0, a.mode = 0, p = await e.graphToPrompt(e.rootGraph);
    } finally {
      h.value = x, i.mode = c, a.mode = f;
    }
    const b = (await t.queuePrompt(0, p, { partialExecutionTargets: [String(a.id)] })).prompt_id;
    if (!b) throw new Error("ComfyUI 没有返回二采任务 ID");
    await new Promise((z, C) => {
      const S = () => {
        t.removeEventListener("execution_success", _), t.removeEventListener("execution_error", A), t.removeEventListener("execution_interrupted", A);
      }, M = (j) => {
        var q;
        return String(((q = j.detail) == null ? void 0 : q.prompt_id) ?? "");
      }, _ = (j) => {
        M(j) === b && (S(), z());
      }, A = (j) => {
        if (M(j) !== b) return;
        const q = j.detail ?? {};
        S(), C(new Error(String(q.exception_message ?? q.error ?? "单独二采任务执行失败")));
      };
      t.addEventListener("execution_success", _), t.addEventListener("execution_error", A), t.addEventListener("execution_interrupted", A);
    });
  };
  e.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(o, d) {
      if (d.name === "TheodoreDirector_PostprocessSecondPassSource") {
        const a = o.prototype.onNodeCreated;
        o.prototype.onNodeCreated = function() {
          var x, c;
          a == null || a.apply(this);
          const h = (x = this.widgets) == null ? void 0 : x.find((f) => f.name === "request_json");
          h && (h.type = "hidden", h.computeSize = () => [0, -4]), this.size = [Math.max(((c = this.size) == null ? void 0 : c[0]) ?? 300, 380), 80];
        };
        return;
      }
      if (d.name !== "TheodoreDirector_Project") return;
      const i = o.prototype.onNodeCreated;
      o.prototype.onNodeCreated = function() {
        var h, x;
        i == null || i.apply(this);
        const a = (h = this.widgets) == null ? void 0 : h.find((c) => c.name === "plan_json");
        a && (a.type = "hidden", a.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          var c;
          try {
            const f = JSON.parse(String(a.value)), p = ((c = e.graph) == null ? void 0 : c._nodes) ?? [], l = p.some((b) => b.type === "TheodoreDirector_PostprocessSecondPassSource") && p.some((b) => b.type === "TheodoreDirector_SaveSecondPass");
            Wr(f, (b) => {
              var k, w;
              a.value = JSON.stringify(b, null, 2), this.setDirtyCanvas(!0, !0), (w = (k = e.graph) == null ? void 0 : k.setDirtyCanvas) == null || w.call(k, !0, !0);
            }, !0, l ? n : void 0);
          } catch (f) {
            window.alert(`Theodore Director: ${f instanceof Error ? f.message : String(f)}`);
          }
        }), this.size = [Math.max(((x = this.size) == null ? void 0 : x[0]) ?? 300, 360), 110]);
      };
    }
  });
});
