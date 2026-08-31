import { app as Tn } from "../../scripts/app.js";
import { api as An } from "../../scripts/api.js";
var Be, H, Bt, le, xt, Vt, qt, Ge, Pe, Se, Kt, nt, Ze, et, De = {}, Oe = [], En = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ve = Array.isArray;
function oe(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function rt(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Pn(e, t, r) {
  var o, s, a, l = {};
  for (a in t) a == "key" ? o = t[a] : a == "ref" ? s = t[a] : l[a] = t[a];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Be.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null) for (a in e.defaultProps) l[a] === void 0 && (l[a] = e.defaultProps[a]);
  return Me(e, l, o, s, null);
}
function Me(e, t, r, o, s) {
  var a = { type: e, props: t, key: r, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: s ?? ++Bt, __i: -1, __u: 0 };
  return s == null && H.vnode != null && H.vnode(a), a;
}
function $e(e) {
  return e.children;
}
function je(e, t) {
  this.props = e, this.context = t;
}
function ge(e, t) {
  if (t == null) return e.__ ? ge(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? ge(e) : null;
}
function Mn(e) {
  if (e.__P && e.__d) {
    var t = e.__v, r = t.__e, o = [], s = [], a = oe({}, t);
    a.__v = t.__v + 1, H.vnode && H.vnode(a), ot(e.__P, a, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [r] : null, o, r ?? ge(t), !!(32 & t.__u), s), a.__v = t.__v, a.__.__k[a.__i] = a, Qt(o, a, s), t.__e = t.__ = null, a.__e != r && Wt(a);
  }
}
function Wt(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), Wt(e);
}
function _t(e) {
  (!e.__d && (e.__d = !0) && le.push(e) && !He.__r++ || xt != H.debounceRendering) && ((xt = H.debounceRendering) || Vt)(He);
}
function He() {
  try {
    for (var e, t = 1; le.length; ) le.length > t && le.sort(qt), e = le.shift(), t = le.length, Mn(e);
  } finally {
    le.length = He.__r = 0;
  }
}
function Gt(e, t, r, o, s, a, l, d, m, u, f) {
  var k, c, _, p, S, w, y = o && o.__k || Oe, z = t.length;
  for (m = jn(r, t, y, m, z), k = 0; k < z; k++) (_ = r.__k[k]) != null && (c = _.__i != -1 && y[_.__i] || De, _.__i = k, w = ot(e, _, c, s, a, l, d, m, u, f), p = _.__e, _.ref && c.ref != _.ref && (c.ref && it(c.ref, null, _), f.push(_.ref, _.__c || p, _)), S == null && p != null && (S = p), 4 & _.__u ? (m = Jt(_, m, e), c.__e && (c.__e = null)) : typeof _.type == "function" && w !== void 0 ? m = w : p && (m = p.nextSibling), _.__u &= -7);
  return r.__e = S, m;
}
function jn(e, t, r, o, s) {
  var a, l, d, m, u, f = r.length, k = f, c = 0;
  for (e.__k = new Array(s), a = 0; a < s; a++) (l = t[a]) != null && typeof l != "boolean" && typeof l != "function" ? (typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? l = e.__k[a] = Me(null, l, null, null, null) : Ve(l) ? l = e.__k[a] = Me($e, { children: l }, null, null, null) : l.constructor === void 0 && l.__b > 0 ? l = e.__k[a] = Me(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : e.__k[a] = l, m = a + c, l.__ = e, l.__b = e.__b + 1, d = null, (u = l.__i = Nn(l, r, m, k)) != -1 && (k--, (d = r[u]) && (d.__u |= 2)), d == null || d.__v == null ? (u == -1 && (s > f ? c-- : s < f && c++), typeof l.type != "function" && (l.__u |= 4)) : u != m && (u == m - 1 ? c-- : u == m + 1 ? c++ : (u > m ? c-- : c++, l.__u |= 4))) : e.__k[a] = null;
  if (k) for (a = 0; a < f; a++) (d = r[a]) != null && (2 & d.__u) == 0 && (d.__e == o && (o = ge(d)), Zt(d, d));
  return o;
}
function Jt(e, t, r) {
  var o, s;
  if (typeof e.type == "function") {
    for (o = e.__k, s = 0; o && s < o.length; s++) o[s] && (o[s].__ = e, t = Jt(o[s], t, r));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = ge(e)), t = r.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Nn(e, t, r, o) {
  var s, a, l, d = e.key, m = e.type, u = t[r], f = u != null && (2 & u.__u) == 0;
  if (u === null && d == null || f && d == u.key && m == u.type) return r;
  if (o > (f ? 1 : 0)) {
    for (s = r - 1, a = r + 1; s >= 0 || a < t.length; ) if ((u = t[l = s >= 0 ? s-- : a++]) != null && (2 & u.__u) == 0 && d == u.key && m == u.type) return l;
  }
  return -1;
}
function yt(e, t, r) {
  t[0] == "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || En.test(t) ? r : r + "px";
}
function Ee(e, t, r, o, s) {
  var a, l;
  e: if (t == "style") if (typeof r == "string") e.style.cssText = r;
  else {
    if (typeof o == "string" && (e.style.cssText = o = ""), o) for (t in o) r && t in r || yt(e.style, t, "");
    if (r) for (t in r) o && r[t] == o[t] || yt(e.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(Kt, "$1")), l = t.toLowerCase(), t = l in e || t == "onFocusOut" || t == "onFocusIn" ? l.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = r, r ? o ? r[Se] = o[Se] : (r[Se] = nt, e.addEventListener(t, a ? et : Ze, a)) : e.removeEventListener(t, a ? et : Ze, a);
  else {
    if (s == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && r == 1 ? "" : r));
  }
}
function wt(e) {
  return function(t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t[Pe] == null) t[Pe] = nt++;
      else if (t[Pe] < r[Se]) return;
      return r(H.event ? H.event(t) : t);
    }
  };
}
function ot(e, t, r, o, s, a, l, d, m, u) {
  var f, k, c, _, p, S, w, y, z, E, g, I, O, F, N, b, A = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && (m = !!(32 & r.__u), a = [d = t.__e = r.__e]), (f = H.__b) && f(t);
  e: if (typeof A == "function") {
    k = l.length;
    try {
      if (z = t.props, E = A.prototype && A.prototype.render, g = (f = A.contextType) && o[f.__c], I = f ? g ? g.props.value : f.__ : o, r.__c ? y = (c = t.__c = r.__c).__ = c.__E : (E ? t.__c = c = new A(z, I) : (t.__c = c = new je(z, I), c.constructor = A, c.render = Dn), g && g.sub(c), c.state || (c.state = {}), c.__n = o, _ = c.__d = !0, c.__h = [], c._sb = []), E && c.__s == null && (c.__s = c.state), E && A.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = oe({}, c.__s)), oe(c.__s, A.getDerivedStateFromProps(z, c.__s))), p = c.props, S = c.state, c.__v = t, _) E && A.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), E && c.componentDidMount != null && c.__h.push(c.componentDidMount);
      else {
        if (E && A.getDerivedStateFromProps == null && z !== p && c.componentWillReceiveProps != null && c.componentWillReceiveProps(z, I), t.__v == r.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(z, c.__s, I) === !1) {
          t.__v != r.__v && (c.props = z, c.state = c.__s, c.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(L) {
            L && (L.__ = t);
          }), Oe.push.apply(c.__h, c._sb), c._sb = [], c.__h.length && l.push(c), d = ge(r);
          break e;
        }
        c.componentWillUpdate != null && c.componentWillUpdate(z, c.__s, I), E && c.componentDidUpdate != null && c.__h.push(function() {
          c.componentDidUpdate(p, S, w);
        });
      }
      if (c.context = I, c.props = z, c.__P = e, c.__e = !1, O = H.__r, F = 0, E) c.state = c.__s, c.__d = !1, O && O(t), f = c.render(c.props, c.state, c.context), Oe.push.apply(c.__h, c._sb), c._sb = [];
      else do
        c.__d = !1, O && O(t), f = c.render(c.props, c.state, c.context), c.state = c.__s;
      while (c.__d && ++F < 25);
      c.state = c.__s, c.getChildContext != null && (o = oe(oe({}, o), c.getChildContext())), E && !_ && c.getSnapshotBeforeUpdate != null && (w = c.getSnapshotBeforeUpdate(p, S)), N = f != null && f.type === $e && f.key == null ? Xt(f.props.children) : f, d = Gt(e, Ve(N) ? N : [N], t, r, o, s, a, l, d, m, u), c.base = t.__e, t.__u &= -161, c.__h.length && l.push(c), y && (c.__E = c.__ = null);
    } catch (L) {
      if (l.length = k, t.__v = null, m || a != null) {
        if (L.then) {
          for (t.__u |= m ? 160 : 128; d && d.nodeType == 8 && d.nextSibling; ) d = d.nextSibling;
          a != null && (a[a.indexOf(d)] = null), t.__e = d;
        } else if (a != null) for (b = a.length; b--; ) rt(a[b]);
      } else t.__e = r.__e;
      t.__k == null && (t.__k = r.__k || []), L.then || Yt(t), H.__e(L, t, r);
    }
  } else a == null && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : d = t.__e = Ln(r.__e, t, r, o, s, a, l, m, u);
  return (f = H.diffed) && f(t), 128 & t.__u ? void 0 : d;
}
function Yt(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Yt));
}
function Qt(e, t, r) {
  for (var o = 0; o < r.length; o++) it(r[o], r[++o], r[++o]);
  H.__c && H.__c(t, e), e.some(function(s) {
    try {
      e = s.__h, s.__h = [], e.some(function(a) {
        a.call(s);
      });
    } catch (a) {
      H.__e(a, s.__v);
    }
  });
}
function Xt(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : Ve(e) ? e.map(Xt) : e.constructor !== void 0 ? null : oe({}, e);
}
function Ln(e, t, r, o, s, a, l, d, m) {
  var u, f, k, c, _, p, S, w = r.props || De, y = t.props, z = t.type;
  if (z == "svg" ? s = "http://www.w3.org/2000/svg" : z == "math" ? s = "http://www.w3.org/1998/Math/MathML" : s || (s = "http://www.w3.org/1999/xhtml"), a != null) {
    for (u = 0; u < a.length; u++) if ((_ = a[u]) && "setAttribute" in _ == !!z && (z ? _.localName == z : _.nodeType == 3)) {
      e = _, a[u] = null;
      break;
    }
  }
  if (e == null) {
    if (z == null) return document.createTextNode(y);
    e = document.createElementNS(s, z, y.is && y), d && (H.__m && H.__m(t, a), d = !1), a = null;
  }
  if (z == null) w === y || d && e.data == y || (e.data = y);
  else {
    if (a = z == "textarea" && y.defaultValue != null ? null : a && Be.call(e.childNodes), !d && a != null) for (w = {}, u = 0; u < e.attributes.length; u++) w[(_ = e.attributes[u]).name] = _.value;
    for (u in w) _ = w[u], u == "dangerouslySetInnerHTML" ? k = _ : u == "children" || u in y || u == "value" && "defaultValue" in y || u == "checked" && "defaultChecked" in y || Ee(e, u, null, _, s);
    for (u in y) _ = y[u], u == "children" ? c = _ : u == "dangerouslySetInnerHTML" ? f = _ : u == "value" ? p = _ : u == "checked" ? S = _ : d && typeof _ != "function" || w[u] === _ || Ee(e, u, _, w[u], s);
    if (f) d || k && (f.__html == k.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (k && (e.innerHTML = ""), Gt(t.type == "template" ? e.content : e, Ve(c) ? c : [c], t, r, o, z == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s, a, l, a ? a[0] : r.__k && ge(r, 0), d, m), a != null) for (u = a.length; u--; ) rt(a[u]);
    d && z != "textarea" || (u = "value", z == "progress" && p == null ? e.removeAttribute("value") : p != null && (p !== e[u] || z == "progress" && !p || z == "option" && p != w[u]) && Ee(e, u, p, w[u], s), u = "checked", S != null && S != e[u] && Ee(e, u, S, w[u], s));
  }
  return e;
}
function it(e, t, r) {
  try {
    if (typeof e == "function") {
      var o = typeof e.__u == "function";
      o && e.__u(), o && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (s) {
    H.__e(s, r);
  }
}
function Zt(e, t, r) {
  var o, s;
  if (H.unmount && H.unmount(e), (o = e.ref) && (o.current && o.current != e.__e || it(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (a) {
      H.__e(a, t);
    }
    o.base = o.__P = o.__n = null;
  }
  if (o = e.__k) for (s = 0; s < o.length; s++) o[s] && Zt(o[s], t, r || typeof e.type != "function");
  r || rt(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Dn(e, t, r) {
  return this.constructor(e, r);
}
function kt(e, t, r) {
  var o, s, a, l;
  t == document && (t = document.documentElement), H.__ && H.__(e, t), s = (o = !1) ? null : t.__k, a = [], l = [], ot(t, e = t.__k = Pn($e, null, [e]), s || De, De, t.namespaceURI, s ? null : t.firstChild ? Be.call(t.childNodes) : null, a, s ? s.__e : t.firstChild, o, l), Qt(a, e, l), e.props.children = null;
}
Be = Oe.slice, H = { __e: function(e, t, r, o) {
  for (var s, a, l; t = t.__; ) if ((s = t.__c) && !s.__) try {
    if ((a = s.constructor) && a.getDerivedStateFromError != null && (s.setState(a.getDerivedStateFromError(e)), l = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, o || {}), l = s.__d), l) return s.__E = s;
  } catch (d) {
    e = d;
  }
  throw e;
} }, Bt = 0, je.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = oe({}, this.state), typeof e == "function" && (e = e(oe({}, r), this.props)), e && oe(r, e), e != null && this.__v && (t && this._sb.push(t), _t(this));
}, je.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), _t(this));
}, je.prototype.render = $e, le = [], Vt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, qt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, He.__r = 0, Ge = Math.random().toString(8), Pe = "__d" + Ge, Se = "__a" + Ge, Kt = /(PointerCapture)$|Capture$/i, nt = 0, Ze = wt(!1), et = wt(!0);
var On = 0;
function n(e, t, r, o, s, a) {
  t || (t = {});
  var l, d, m = t;
  if ("ref" in m) for (d in m = {}, t) d == "ref" ? l = t[d] : m[d] = t[d];
  var u = { type: e, props: m, key: r, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --On, __i: -1, __u: 0, __source: s, __self: a };
  if (typeof e == "function" && (l = e.defaultProps)) for (d in l) m[d] === void 0 && (m[d] = l[d]);
  return H.vnode && H.vnode(u), u;
}
var ze, q, Je, St, Fe = 0, en = [], K = H, zt = K.__b, $t = K.__r, Ct = K.diffed, It = K.__c, Rt = K.unmount, Tt = K.__;
function st(e, t) {
  K.__h && K.__h(q, e, Fe || t), Fe = 0;
  var r = q.__H || (q.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function C(e) {
  return Fe = 1, Hn(nn, e);
}
function Hn(e, t, r) {
  var o = st(ze++, 2);
  if (o.t = e, !o.__c && (o.__ = [nn(void 0, t), function(d) {
    var m = o.__N ? o.__N[0] : o.__[0], u = o.t(m, d);
    m !== u && (o.__N = [u, o.__[1]], o.__c.setState({}));
  }], o.__c = q, !q.__f)) {
    var s = function(d, m, u) {
      if (!o.__c.__H) return !0;
      var f = !1, k = o.__c.props !== d;
      if (o.__c.__H.__.some(function(_) {
        if (_.__N) {
          f = !0;
          var p = _.__[0];
          _.__ = _.__N, _.__N = void 0, p !== _.__[0] && (k = !0);
        }
      }), a) {
        var c = a.call(this, d, m, u);
        return f ? c || k : c;
      }
      return !f || k;
    };
    q.__f = !0;
    var a = q.shouldComponentUpdate, l = q.componentWillUpdate;
    q.componentWillUpdate = function(d, m, u) {
      if (this.__e) {
        var f = a;
        a = void 0, s(d, m, u), a = f;
      }
      l && l.call(this, d, m, u);
    }, q.shouldComponentUpdate = s;
  }
  return o.__N || o.__;
}
function ye(e, t) {
  var r = st(ze++, 3);
  !K.__s && tn(r.__H, t) && (r.__ = e, r.u = t, q.__H.__h.push(r));
}
function at(e) {
  return Fe = 5, we(function() {
    return { current: e };
  }, []);
}
function we(e, t) {
  var r = st(ze++, 7);
  return tn(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__;
}
function Fn() {
  for (var e; e = en.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(Ne), t.__h.some(tt), t.__h = [];
    } catch (r) {
      t.__h = [], K.__e(r, e.__v);
    }
  }
}
K.__b = function(e) {
  q = null, zt && zt(e);
}, K.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Tt && Tt(e, t);
}, K.__r = function(e) {
  $t && $t(e), ze = 0;
  var t = (q = e.__c).__H;
  t && (Je === q ? (t.__h = [], q.__h = [], t.__.some(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.some(Ne), t.__h.some(tt), t.__h = [], ze = 0)), Je = q;
}, K.diffed = function(e) {
  Ct && Ct(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (en.push(t) !== 1 && St === K.requestAnimationFrame || ((St = K.requestAnimationFrame) || Un)(Fn)), t.__H.__.some(function(r) {
    r.u && (r.__H = r.u, r.u = void 0);
  })), Je = q = null;
}, K.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.some(Ne), r.__h = r.__h.filter(function(o) {
        return !o.__ || tt(o);
      });
    } catch (o) {
      t.some(function(s) {
        s.__h && (s.__h = []);
      }), t = [], K.__e(o, r.__v);
    }
  }), It && It(e, t);
}, K.unmount = function(e) {
  Rt && Rt(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.some(function(o) {
    try {
      Ne(o);
    } catch (s) {
      t = s;
    }
  }), r.__H = void 0, t && K.__e(t, r.__v));
};
var At = typeof requestAnimationFrame == "function";
function Un(e) {
  var t, r = function() {
    clearTimeout(o), At && cancelAnimationFrame(t), setTimeout(e);
  }, o = setTimeout(r, 35);
  At && (t = requestAnimationFrame(r));
}
function Ne(e) {
  var t = q, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), q = t;
}
function tt(e) {
  var t = q;
  e.__c = e.__(), q = t;
}
function tn(e, t) {
  return !e || e.length !== t.length || t.some(function(r, o) {
    return r !== e[o];
  });
}
function nn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const Bn = {
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
function rn(e) {
  var o;
  const t = ((o = e.name.split(".").pop()) == null ? void 0 : o.toLocaleLowerCase()) ?? "";
  if (e.name.includes(".")) return Bn[t] ?? null;
  const r = e.type.split("/", 1)[0];
  return r === "image" || r === "video" || r === "audio" ? r : null;
}
function Vn(e) {
  const s = e.replace(/\.[^.]+$/, "").replace(/^\s*\d+\s*[-_. ]+/, "").normalize("NFKC").replace(/[\s-]+/g, "_").replace(/[{}]/g, "").replace(/_+/g, "_").replace(/^[_\.]+|[_\.]+$/g, "").slice(0, 96) || "asset";
  return s.toLocaleLowerCase().endsWith(".audio") ? `${s}_asset` : s;
}
function qn(e, t) {
  const r = new Set(Array.from(t, (s) => s.toLocaleLowerCase()));
  if (!r.has(e.toLocaleLowerCase())) return e;
  let o = 2;
  for (; r.has(`${e}_${o}`.toLocaleLowerCase()); ) o += 1;
  return `${e}_${o}`;
}
function Kn(e, t, r) {
  const o = e.trim().toLocaleLowerCase();
  return !e.trim() || /[\s{}]/.test(e) || o.endsWith(".audio") ? "invalid" : Array.from(t, (a) => a.toLocaleLowerCase()).includes(o) || Array.from(r, (a) => a.trim().toLocaleLowerCase()).filter((a) => a === o).length > 1 ? "duplicate" : null;
}
function Wn(e, t, r) {
  const o = new Set(Array.from(t)), s = [], a = [];
  for (const l of e) {
    const d = rn(l);
    if (!d) {
      a.push(l.name);
      continue;
    }
    const m = qn(Vn(l.name), o);
    o.add(m), s.push({ id: r(), file: l, alias: m, kind: d, durationSeconds: d === "image" ? null : 2, includeVideoAudio: !1, status: "pending", error: "" });
  }
  return { drafts: s, rejected: a };
}
function Gn(e, t, r) {
  return {
    id: e.id,
    alias: e.alias.trim(),
    kind: e.kind,
    path: t,
    enabled: !0,
    fixed: !1,
    fixedOrder: r,
    shotIds: [],
    includeVideoAudio: e.kind === "video" && e.includeVideoAudio,
    durationSeconds: e.kind === "image" ? null : e.durationSeconds,
    audioDurationSeconds: null,
    fingerprint: ""
  };
}
function Jn(e, t) {
  return t === "image" ? Promise.resolve(null) : new Promise((r) => {
    const o = document.createElement(t === "video" ? "video" : "audio"), s = URL.createObjectURL(e);
    let a = !1;
    const l = (d) => {
      a || (a = !0, o.onloadedmetadata = null, o.onerror = null, o.removeAttribute("src"), o.load(), URL.revokeObjectURL(s), r(d));
    };
    o.preload = "metadata", o.onloadedmetadata = () => l(Number.isFinite(o.duration) && o.duration > 0 ? Math.round(o.duration * 10) / 10 : null), o.onerror = () => l(null), o.src = s;
  });
}
const Yn = () => `asset_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`, Ye = (e, t) => t === "zh" ? { image: "图片", video: "视频", audio: "音频" }[e] : e;
function Qn({ language: e, assets: t, projectName: r, onClose: o, onImported: s, uploadFile: a }) {
  const [l, d] = C([]), [m, u] = C([]), [f, k] = C(!1), [c, _] = C(!1), p = at([]);
  p.current = l;
  const S = t.map((b) => b.alias), w = (b, A) => d((L) => L.map((M) => M.id === b ? { ...M, ...A } : M)), y = (b) => {
    if (!b.length || c) return;
    const A = [...S, ...p.current.map((M) => M.alias)], L = Wn(b, A, Yn);
    L.rejected.length && u((M) => [...M, ...L.rejected]), L.drafts.length && (d((M) => [...M, ...L.drafts]), L.drafts.forEach((M) => {
      Jn(M.file, M.kind).then((J) => {
        J != null && d((X) => X.map((W) => W.id === M.id && W.kind === M.kind && W.durationSeconds === 2 ? { ...W, durationSeconds: J } : W));
      });
    }));
  }, E = l.filter((b) => b.status !== "imported").map((b) => b.alias), g = (b) => {
    if (b.status === "imported") return null;
    const A = Kn(b.alias, S, E);
    return A === "invalid" ? e === "zh" ? "别名为空、包含空白/花括号，或使用了保留后缀 .audio" : "Alias is empty, contains whitespace/braces, or uses reserved .audio" : A === "duplicate" ? e === "zh" ? "别名与素材库或本批次其他素材重复" : "Alias duplicates an existing or staged asset" : rn(b.file) !== b.kind ? e === "zh" ? "文件扩展名与所选类型不匹配" : "The extension does not match the selected kind" : b.kind !== "image" && (b.durationSeconds == null || b.durationSeconds <= 0) ? e === "zh" ? "视频或音频时长必须大于 0" : "Video/audio duration must be greater than 0" : null;
  }, I = async () => {
    const A = p.current.filter((X) => X.status === "pending" || X.status === "error");
    if (!A.length) return;
    if (A.some(g)) {
      window.alert(e === "zh" ? "请先修正列表中标红的项目。" : "Fix the highlighted rows before importing.");
      return;
    }
    _(!0);
    const L = Math.max(0, ...t.map((X) => X.fixedOrder)) + 1;
    let M = 0;
    const J = async () => {
      for (; M < A.length; ) {
        const X = M++, W = A[X];
        w(W.id, { status: "uploading", error: "" });
        try {
          const se = await a(r, W.kind, W.file);
          s([Gn(W, se, L + X)]), w(W.id, { status: "imported", error: "" });
        } catch (se) {
          w(W.id, { status: "error", error: String(se) });
        }
      }
    };
    await Promise.all(Array.from({ length: Math.min(2, A.length) }, J)), _(!1);
  }, O = l.filter((b) => b.status === "imported").length, F = l.filter((b) => b.status === "error").length, N = l.length - O;
  return /* @__PURE__ */ n("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ n("section", { class: "td-asset-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": e === "zh" ? "批量导入素材" : "Batch import assets", children: [
    /* @__PURE__ */ n("header", { class: "td-batch-header", children: [
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ n("h2", { children: e === "zh" ? "批量导入素材" : "Batch import assets" }),
        /* @__PURE__ */ n("p", { children: e === "zh" ? "可混合选择图片、视频和音频；确认列表后再写入素材库。" : "Select images, videos, and audio together; review before uploading." })
      ] }),
      /* @__PURE__ */ n("button", { disabled: c, "aria-label": e === "zh" ? "关闭" : "Close", onClick: o, children: "×" })
    ] }),
    /* @__PURE__ */ n("label", { class: `td-asset-dropzone ${f ? "dragging" : ""}`, onDragEnter: (b) => {
      b.preventDefault(), k(!0);
    }, onDragOver: (b) => b.preventDefault(), onDragLeave: (b) => {
      b.currentTarget === b.target && k(!1);
    }, onDrop: (b) => {
      var A;
      b.preventDefault(), k(!1), y(Array.from(((A = b.dataTransfer) == null ? void 0 : A.files) ?? []));
    }, children: [
      /* @__PURE__ */ n("strong", { children: e === "zh" ? "拖拽素材到这里，或点击选择多个文件" : "Drop media here, or click to select multiple files" }),
      /* @__PURE__ */ n("span", { children: e === "zh" ? "支持图片、视频、音频混合导入" : "Mixed image, video, and audio selection is supported" }),
      /* @__PURE__ */ n("input", { type: "file", multiple: !0, accept: "image/*,video/*,audio/*", disabled: c, onChange: (b) => {
        y(Array.from(b.currentTarget.files ?? [])), b.currentTarget.value = "";
      } })
    ] }),
    m.length > 0 && /* @__PURE__ */ n("div", { class: "td-asset-batch-warning", children: [
      /* @__PURE__ */ n("span", { children: e === "zh" ? `已跳过 ${m.length} 个不支持的文件：${m.join("、")}` : `Skipped ${m.length} unsupported files: ${m.join(", ")}` }),
      /* @__PURE__ */ n("button", { onClick: () => u([]), children: "×" })
    ] }),
    /* @__PURE__ */ n("div", { class: "td-asset-batch-summary", children: [
      /* @__PURE__ */ n("span", { children: e === "zh" ? `共 ${l.length} 项 · 已导入 ${O} · 待处理 ${N}${F ? ` · 失败 ${F}` : ""}` : `${l.length} items · ${O} imported · ${N} pending${F ? ` · ${F} failed` : ""}` }),
      /* @__PURE__ */ n("button", { disabled: c || !l.length, onClick: () => d([]), children: e === "zh" ? "清空列表" : "Clear list" })
    ] }),
    /* @__PURE__ */ n("div", { class: "td-asset-batch-list", children: [
      /* @__PURE__ */ n("div", { class: "td-asset-batch-row td-asset-batch-head", children: [
        /* @__PURE__ */ n("span", { children: e === "zh" ? "状态 / 文件" : "Status / File" }),
        /* @__PURE__ */ n("span", { children: e === "zh" ? "别名" : "Alias" }),
        /* @__PURE__ */ n("span", { children: e === "zh" ? "类型" : "Kind" }),
        /* @__PURE__ */ n("span", { children: e === "zh" ? "时长" : "Duration" }),
        /* @__PURE__ */ n("span", { children: e === "zh" ? "视频伴音" : "Video audio" }),
        /* @__PURE__ */ n("span", { children: e === "zh" ? "操作" : "Action" })
      ] }),
      !l.length && /* @__PURE__ */ n("div", { class: "td-asset-batch-empty", children: e === "zh" ? "尚未选择素材" : "No media selected" }),
      l.map((b) => {
        const A = g(b), L = c || b.status === "imported" || b.status === "uploading";
        return /* @__PURE__ */ n("div", { class: `td-asset-batch-row ${A || b.status === "error" ? "invalid" : ""} ${b.status === "imported" ? "imported" : ""}`, children: [
          /* @__PURE__ */ n("div", { class: "td-asset-batch-file", children: [
            /* @__PURE__ */ n("strong", { title: b.file.name, children: b.file.name }),
            /* @__PURE__ */ n("small", { children: [
              (b.file.size / 1024 / 1024).toFixed(1),
              " MB · ",
              b.status === "pending" ? e === "zh" ? "待导入" : "Pending" : b.status === "uploading" ? e === "zh" ? "上传中" : "Uploading" : b.status === "imported" ? e === "zh" ? "已完成" : "Imported" : e === "zh" ? "失败" : "Failed"
            ] }),
            (A || b.error) && /* @__PURE__ */ n("em", { title: A || b.error, children: A || b.error })
          ] }),
          /* @__PURE__ */ n("input", { disabled: L, value: b.alias, onInput: (M) => w(b.id, { alias: M.currentTarget.value, status: "pending", error: "" }) }),
          /* @__PURE__ */ n("select", { disabled: L, value: b.kind, onChange: (M) => {
            const J = M.currentTarget.value;
            w(b.id, { kind: J, durationSeconds: J === "image" ? null : b.durationSeconds ?? 2, includeVideoAudio: J === "video" && b.includeVideoAudio, status: "pending", error: "" });
          }, children: [
            /* @__PURE__ */ n("option", { value: "image", children: Ye("image", e) }),
            /* @__PURE__ */ n("option", { value: "video", children: Ye("video", e) }),
            /* @__PURE__ */ n("option", { value: "audio", children: Ye("audio", e) })
          ] }),
          /* @__PURE__ */ n("label", { class: "td-asset-batch-duration", children: [
            /* @__PURE__ */ n("input", { type: "number", min: "0.1", step: "0.1", disabled: L || b.kind === "image", value: b.durationSeconds ?? "", onInput: (M) => w(b.id, { durationSeconds: M.currentTarget.value ? Number(M.currentTarget.value) : null, status: "pending", error: "" }) }),
            /* @__PURE__ */ n("span", { children: b.kind === "image" ? "—" : e === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ n("label", { class: "td-asset-batch-audio", children: [
            /* @__PURE__ */ n("input", { type: "checkbox", disabled: L || b.kind !== "video", checked: b.kind === "video" && b.includeVideoAudio, onChange: (M) => w(b.id, { includeVideoAudio: M.currentTarget.checked }) }),
            /* @__PURE__ */ n("span", { children: b.kind === "video" ? b.includeVideoAudio ? e === "zh" ? "开" : "ON" : e === "zh" ? "关" : "OFF" : "—" })
          ] }),
          /* @__PURE__ */ n("button", { class: "danger", disabled: L, onClick: () => d((M) => M.filter((J) => J.id !== b.id)), children: e === "zh" ? "移除" : "Remove" })
        ] }, b.id);
      })
    ] }),
    /* @__PURE__ */ n("footer", { children: [
      /* @__PURE__ */ n("button", { disabled: c, onClick: o, children: e === "zh" ? "关闭" : "Close" }),
      /* @__PURE__ */ n("button", { class: "primary", disabled: c || !l.some((b) => b.status === "pending" || b.status === "error"), onClick: () => void I(), children: c ? e === "zh" ? "正在导入…" : "Importing…" : F ? e === "zh" ? "重试失败项" : "Retry failed" : e === "zh" ? "开始导入" : "Start import" })
    ] })
  ] }) });
}
const on = String.raw`\{\{ref:([^{}]+)}}`;
function Et() {
  return new RegExp(on, "g");
}
function sn(e, t) {
  const r = /* @__PURE__ */ new Map();
  for (const o of e.assets)
    o.enabled && o.path.trim() && (!o.shotIds.length || o.shotIds.includes(t.id)) && !t.disabledAssetIds.includes(o.id) && r.set(o.alias, o);
  return r;
}
function an(e, t, r) {
  const o = r.trim(), s = o.endsWith(".audio"), a = s ? o.slice(0, -6) : o, l = sn(e, t).get(a);
  return l ? !s || l.kind === "video" && l.includeVideoAudio : !1;
}
function Pt(e, t) {
  const r = e.shots.filter((o) => o.enabled);
  return r.length > 0 && r.every((o) => an(e, o, t));
}
function dn(e, t) {
  const r = [], o = sn(e, t), s = [e.promptPrefix, t.prompt, e.promptSuffix].filter(Boolean).join(`
`), a = [...s.matchAll(Et())].map((g) => g[1].trim()), l = [], d = /* @__PURE__ */ new Set(), m = (g) => {
    d.has(g.id) || (d.add(g.id), l.push(g));
  };
  [...o.values()].filter((g) => g.fixed).sort((g, I) => g.fixedOrder - I.fixedOrder || g.alias.localeCompare(I.alias)).forEach(m);
  for (const g of a) {
    const I = g.endsWith(".audio") ? g.slice(0, -6) : g, O = o.get(I);
    if (!O) {
      r.push(`未找到或已禁用素材：${g}`);
      continue;
    }
    g.endsWith(".audio") && (O.kind !== "video" || !O.includeVideoAudio) && r.push(`视频伴音未启用：${g}`), m(O);
  }
  const u = l.filter((g) => g.kind === "image"), f = l.filter((g) => g.kind === "video"), k = f.filter((g) => g.includeVideoAudio), c = l.filter((g) => g.kind === "audio"), _ = k.length + c.length, p = u.length + f.length + c.length;
  u.length > 9 && r.push(`参考图 ${u.length}/9，超出 H3 上限`), f.length > 3 && r.push(`参考视频 ${f.length}/3，超出 H3 上限`), _ > 3 && r.push(`有效音频 ${_}/3，超出 H3 总上限`), p > 12 && r.push(`混合文件 ${p}/12，超出 H3 上限`), _ && !u.length && !f.length && r.push("音频参考不能单独使用");
  const S = f.filter((g) => typeof g.durationSeconds == "number");
  for (const g of f) (g.durationSeconds == null || g.durationSeconds < 2 || g.durationSeconds > 15) && r.push(`视频 ${g.alias} 的时长必须为 2–15 秒`);
  S.reduce((g, I) => g + (I.durationSeconds ?? 0), 0) > 15 && r.push("参考视频总时长超过 15 秒");
  const w = [...k.map((g) => g.audioDurationSeconds ?? g.durationSeconds), ...c.map((g) => g.durationSeconds)];
  w.some((g) => g == null || g < 2 || g > 15) && r.push("每路有效音频时长必须为 2–15 秒"), w.reduce((g, I) => g + (I ?? 0), 0) > 15 && r.push("有效音频总时长超过 15 秒");
  const y = /* @__PURE__ */ new Map();
  u.forEach((g, I) => y.set(g.alias, `<Picture ${I + 1}>`)), f.forEach((g, I) => y.set(g.alias, `<Video ${I + 1}>`)), k.forEach((g, I) => y.set(`${g.alias}.audio`, `<Audio ${I + 1}>`)), c.forEach((g, I) => y.set(g.alias, `<Audio ${k.length + I + 1}>`));
  const z = s.replace(Et(), (g, I) => y.get(I.trim()) ?? g), E = [...y.entries()].map(([g, I]) => ({ label: I, alias: g, kind: I.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: z, errors: r, slots: E, mixedFiles: p, audioCount: _ };
}
function Xn(e) {
  var s, a, l, d, m, u;
  const t = [];
  (a = (s = e.project) == null ? void 0 : s.name) != null && a.trim() || t.push("Project name 不能为空"), (d = (l = e.project) == null ? void 0 : l.runId) != null && d.trim() || t.push("Run ID 不能为空"), (!Array.isArray(e.shots) || !e.shots.some((f) => f.enabled)) && t.push("至少需要一个启用分镜");
  const r = /* @__PURE__ */ new Set();
  for (const f of e.shots ?? [])
    (!((m = f.id) != null && m.trim()) || r.has(f.id)) && t.push(`分镜 ID 为空或重复：${f.id || "(空)"}`), r.add(f.id), f.durationSeconds > 0 || t.push(`分镜 ${f.id} 的时长必须大于 0`);
  const o = /* @__PURE__ */ new Set();
  for (const f of e.assets ?? []) {
    const k = (u = f.alias) == null ? void 0 : u.toLocaleLowerCase();
    (!f.alias || /[\s{}]/.test(f.alias) || f.alias.endsWith(".audio") || o.has(k)) && t.push(`素材别名无效或重复：${f.alias || "(空)"}`), o.add(k), f.enabled && !f.path && t.push(`素材 ${f.alias} 尚未选择文件`);
  }
  for (const f of e.shots.filter((k) => k.enabled)) t.push(...dn(e, f).errors.map((k) => `${f.title}: ${k}`));
  return [...new Set(t)];
}
function Zn(e, t) {
  const r = [], o = new RegExp(on, "g");
  let s = 0;
  for (const a of e.matchAll(o)) {
    const l = a.index ?? 0;
    l > s && r.push({ text: e.slice(s, l), reference: !1 }), r.push({ text: a[0], reference: !0, valid: t(a[1]) }), s = l + a[0].length;
  }
  return s < e.length && r.push({ text: e.slice(s), reference: !1 }), r;
}
function Qe({ value: e, rows: t, onInput: r, isReferenceValid: o }) {
  const s = at(null), a = Zn(e, o), l = (d) => {
    s.current && (s.current.scrollTop = d.currentTarget.scrollTop, s.current.scrollLeft = d.currentTarget.scrollLeft);
  };
  return /* @__PURE__ */ n("span", { class: "td-highlight-textarea", children: [
    /* @__PURE__ */ n("pre", { ref: s, class: "td-highlight-backdrop", "aria-hidden": "true", children: [
      a.map((d, m) => d.reference ? /* @__PURE__ */ n("mark", { class: d.valid ? "valid" : "invalid", children: d.text }, m) : d.text),
      e.endsWith(`
`) && " "
    ] }),
    /* @__PURE__ */ n("textarea", { class: "td-highlight-input", rows: t, value: e, onInput: r, onScroll: l })
  ] });
}
const er = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", postprocess: "后处理", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", postprocess: "Post-process", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function me(e, t) {
  return er[e][t];
}
function ce(e) {
  return (Array.isArray(e.results) && e.results.length ? e.results : e.path ? [{ path: e.path, bytes: e.bytes, modifiedAt: e.modifiedAt, stage: e.stage, sourcePath: e.sourcePath, completedAt: e.completedAt }] : []).filter((r) => typeof r.path == "string" && r.path.trim().length > 0).sort((r, o) => (o.modifiedAt ?? 0) - (r.modifiedAt ?? 0));
}
function ln(e, t) {
  const r = /_video_(\d+)/i.exec(e.replace(/\\/g, "/"));
  return r ? Number(r[1]) : t;
}
function tr(e) {
  return e.stage !== "second_pass";
}
function Ue({ src: e, alt: t }) {
  const r = at(null), [o, s] = C(!1);
  return ye(() => {
    const a = r.current;
    if (!a) return;
    if (!("IntersectionObserver" in window)) {
      s(!0);
      return;
    }
    const l = new IntersectionObserver((d) => {
      s(d.some((m) => m.isIntersecting));
    }, { rootMargin: "160px" });
    return l.observe(a), () => l.disconnect();
  }, []), /* @__PURE__ */ n("div", { class: "td-result-thumb", ref: r, children: o ? /* @__PURE__ */ n("video", { src: e, "aria-label": t, muted: !0, playsInline: !0, preload: "metadata", onLoadedMetadata: (a) => {
    const l = a.currentTarget;
    Number.isFinite(l.duration) && l.duration > 0.02 && (l.currentTime = Math.min(0.25, Math.max(0, l.duration - 0.05)));
  } }) : /* @__PURE__ */ n("span", { children: "…" }) });
}
function cn(e, t) {
  const r = e.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!r || r.startsWith("/") || /^[A-Za-z]:\//.test(r)) return null;
  const o = r.split("/").filter(Boolean), s = o.pop();
  if (!s || o.some((l) => l === "..")) return null;
  const a = new URLSearchParams({ filename: s, type: t });
  return o.length && a.set("subfolder", o.join("/")), `/view?${a.toString()}`;
}
function nr(e) {
  return cn(e, "input");
}
function _e(e) {
  return e ? e.url && /^https:\/\//i.test(e.url) ? e.url : cn(e.path, "output") : null;
}
function ie(e) {
  return (e.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "").split(/[?#]/, 1)[0];
}
function Mt({ asset: e, compact: t = !1 }) {
  const r = nr(e.path), o = `td-media-preview ${t ? "compact" : ""}`;
  return r ? e.kind === "image" ? /* @__PURE__ */ n("div", { class: o, children: /* @__PURE__ */ n("img", { src: r, alt: e.alias, loading: "lazy" }) }) : e.kind === "video" ? /* @__PURE__ */ n("div", { class: o, children: /* @__PURE__ */ n("video", { src: r, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ n("div", { class: o, children: /* @__PURE__ */ n("audio", { src: r, controls: !0, preload: "metadata" }) }) : e.path ? /* @__PURE__ */ n("div", { class: `${o} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ n("div", { class: `${o} empty`, children: "尚未选择素材 / No media selected" });
}
function pn(e) {
  let t = 0;
  return e.shots.map((r, o) => {
    const s = {
      key: `${o}:${r.id}`,
      shot: r,
      sourceIndex: o,
      activeIndex: r.enabled ? t : -1
    };
    return r.enabled && (t += 1), s;
  });
}
function rr(e, t, r) {
  return e.filter((o) => o.shot.enabled && t[o.key]).map((o) => ({
    shotId: o.shot.id,
    activeIndex: o.activeIndex,
    path: r[o.key] ?? ""
  }));
}
function or(e, t, r) {
  const o = {};
  return e.forEach((s) => {
    const a = s.sourceIndex + 1;
    o[s.key] = s.shot.enabled && a >= t && a <= r;
  }), o;
}
function ir(e, t) {
  return e === "second_pass" ? t === "zh" ? "二采" : "2nd pass" : e === "first_pass" ? t === "zh" ? "一采" : "1st pass" : t === "zh" ? "旧结果" : "Legacy";
}
function sr({ plan: e, language: t, adapter: r, context: o }) {
  const s = we(() => pn(e), [e]), [a, l] = C({}), [d, m] = C({}), [u, f] = C(null), [k, c] = C(0), _ = r.unavailableReason("secondPass", o);
  ye(() => {
    let S = !1;
    const w = {};
    return s.forEach((y) => {
      w[y.key] = { loading: !0, response: { found: !1, results: [] } };
    }), l(w), s.forEach((y) => {
      r.fetchShotResults(o, e, y.shot, y.activeIndex).then((z) => {
        S || l((E) => ({ ...E, [y.key]: { loading: !1, response: z } }));
      }).catch((z) => {
        S || l((E) => ({ ...E, [y.key]: { loading: !1, response: { found: !1, results: [], error: String(z) } } }));
      });
    }), () => {
      S = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((S) => S.id).join("|"), k, r.id, o.settings.apiKey, o.settings.taskMappings]);
  const p = async (S, w) => {
    if (!_) {
      m((y) => ({ ...y, [w]: { state: "queued" } }));
      try {
        await r.runSecondPass(o, {
          plan: e,
          shotId: S,
          sourcePath: w,
          requestId: `td2_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`
        }), m((y) => ({ ...y, [w]: { state: "done" } })), c((y) => y + 1);
      } catch (y) {
        m((z) => ({ ...z, [w]: { state: "error", message: String(y instanceof Error ? y.message : y) } }));
      }
    }
  };
  return /* @__PURE__ */ n("section", { class: "td-postprocess td-second-pass-panel", children: [
    /* @__PURE__ */ n("div", { class: "td-post-header", children: [
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ n("h2", { children: t === "zh" ? "单独二采" : "Standalone second pass" }),
        /* @__PURE__ */ n("p", { children: t === "zh" ? "从满意的一采抽卡直接执行二采，不重跑一采，也不启动 Impact 循环。" : "Refine a selected first-pass result without rerunning the first pass or the Impact loop." })
      ] }),
      /* @__PURE__ */ n("div", { class: "td-post-actions", children: /* @__PURE__ */ n("button", { onClick: () => c((S) => S + 1), children: [
        "↻ ",
        t === "zh" ? "刷新结果" : "Refresh"
      ] }) })
    ] }),
    _ && /* @__PURE__ */ n("div", { class: "td-post-warning", children: _ }),
    /* @__PURE__ */ n("div", { class: "td-post-shot-list", children: s.map((S) => {
      const w = a[S.key], y = ce((w == null ? void 0 : w.response) ?? { results: [] });
      return /* @__PURE__ */ n("article", { class: "td-post-shot", children: [
        /* @__PURE__ */ n("header", { children: [
          /* @__PURE__ */ n("span", { children: [
            /* @__PURE__ */ n("strong", { children: S.shot.id }),
            /* @__PURE__ */ n("em", { children: S.shot.title })
          ] }),
          /* @__PURE__ */ n("span", { children: [
            S.shot.durationSeconds,
            "s"
          ] })
        ] }),
        !S.shot.enabled && /* @__PURE__ */ n("div", { class: "td-post-shot-disabled-note", children: t === "zh" ? "镜头已禁用，但仍可对历史一采结果进行后处理。" : "This shot is disabled, but its historical first-pass results remain available." }),
        w != null && w.loading ? /* @__PURE__ */ n("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading results…" }) : w != null && w.response.error ? /* @__PURE__ */ n("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : y.length ? /* @__PURE__ */ n("div", { class: "td-post-result-list", children: y.map((z) => {
          const E = _e(z), g = d[z.path], I = tr(z);
          return /* @__PURE__ */ n("div", { class: "td-second-pass-result", children: [
            /* @__PURE__ */ n("button", { class: "td-post-result-choice", onClick: () => E && f({ path: E, title: `${S.shot.id} · ${S.shot.title}` }), children: [
              E ? /* @__PURE__ */ n(Ue, { src: E, alt: ie(z.path) }) : /* @__PURE__ */ n("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ n("span", { children: [
                /* @__PURE__ */ n("strong", { children: [
                  ir(z.stage, t),
                  (z.stage === "legacy_unknown" || !z.stage) && /* @__PURE__ */ n("em", { children: t === "zh" ? "兼容" : "Compatible" })
                ] }),
                /* @__PURE__ */ n("span", { title: z.path, children: ie(z.path) }),
                /* @__PURE__ */ n("small", { children: z.bytes ? `${(z.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ n("button", { class: "primary td-second-pass-run", disabled: !!_ || !I || (g == null ? void 0 : g.state) === "queued", title: _ ?? "", onClick: () => void p(S.shot.id, z.path), children: I ? (g == null ? void 0 : g.state) === "queued" ? t === "zh" ? "排队/执行中…" : "Queued/running…" : (g == null ? void 0 : g.state) === "done" ? t === "zh" ? "二采完成" : "Completed" : t === "zh" ? "进行二采" : "Run second pass" : t === "zh" ? "已是二采" : "Already refined" }),
            (g == null ? void 0 : g.state) === "error" && /* @__PURE__ */ n("div", { class: "td-second-pass-error", children: g.message })
          ] }, z.path);
        }) }) : /* @__PURE__ */ n("div", { class: "td-post-shot-empty", children: t === "zh" ? "没有可用的一采结果" : "No first-pass result available" })
      ] }, S.key);
    }) }),
    u && /* @__PURE__ */ n("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => f(null), children: /* @__PURE__ */ n("section", { role: "dialog", "aria-modal": "true", onClick: (S) => S.stopPropagation(), children: [
      /* @__PURE__ */ n("header", { children: [
        /* @__PURE__ */ n("strong", { children: u.title }),
        /* @__PURE__ */ n("button", { onClick: () => f(null), children: "×" })
      ] }),
      /* @__PURE__ */ n("video", { src: u.path, controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ n("p", { children: ie(u.path) })
    ] }) })
  ] });
}
function ar({ plan: e, language: t, adapter: r, context: o }) {
  const [s, a] = C("merge");
  return /* @__PURE__ */ n("section", { class: "td-postprocess-shell", children: [
    /* @__PURE__ */ n("div", { class: "td-post-mode-tabs", role: "tablist", children: [
      /* @__PURE__ */ n("button", { class: s === "merge" ? "active" : "", role: "tab", "aria-selected": s === "merge", onClick: () => a("merge"), children: t === "zh" ? "合并视频" : "Merge videos" }),
      /* @__PURE__ */ n("button", { class: s === "second-pass" ? "active" : "", role: "tab", "aria-selected": s === "second-pass", onClick: () => a("second-pass"), children: t === "zh" ? "单独二采" : "Standalone second pass" })
    ] }),
    s === "merge" ? /* @__PURE__ */ n(dr, { plan: e, language: t, adapter: r, context: o }) : /* @__PURE__ */ n(sr, { plan: e, language: t, adapter: r, context: o })
  ] });
}
function dr({ plan: e, language: t, adapter: r, context: o }) {
  const s = we(() => pn(e), [e]), [a, l] = C({}), [d, m] = C({}), [u, f] = C({}), [k, c] = C(null), [_, p] = C(!1), [S, w] = C(""), [y, z] = C(""), [E, g] = C({ found: !1, results: [] }), [I, O] = C(!1), [F, N] = C(!1), [b, A] = C(""), [L, M] = C(0), [J, X] = C("1"), [W, se] = C(String(s.length || 1)), pe = s.filter((v) => v.shot.enabled), Ce = pe.length > 0 && pe.every((v) => d[v.key]), Z = rr(s, d, u), ue = Z.filter((v) => !v.path), Ie = s.some((v) => {
    var R;
    return d[v.key] && ((R = a[v.key]) == null ? void 0 : R.loading);
  }), Y = s.reduce(
    (v, R) => v + (R.shot.enabled && d[R.key] ? R.shot.durationSeconds : 0),
    0
  ), G = we(() => ce(E), [E]), ne = G.find((v) => v.path === b) ?? G[0], be = r.unavailableReason("mergeVideos", o);
  ye(() => {
    let v = !1;
    const R = {}, V = {};
    return s.forEach((B) => {
      R[B.key] = B.shot.enabled, V[B.key] = { loading: !0, response: { found: !1, results: [] } };
    }), m((B) => {
      const U = {};
      return s.forEach((T) => {
        U[T.key] = T.shot.enabled ? B[T.key] ?? R[T.key] : !1;
      }), U;
    }), l(V), w(""), s.forEach((B) => {
      r.fetchShotResults(o, e, B.shot, B.activeIndex).then((U) => {
        if (v) return;
        const T = ce(U);
        l((j) => ({ ...j, [B.key]: { loading: !1, response: U } })), f((j) => {
          var ee;
          return {
            ...j,
            [B.key]: T.some((re) => re.path === j[B.key]) ? j[B.key] : ((ee = T[0]) == null ? void 0 : ee.path) ?? ""
          };
        });
      }).catch((U) => {
        v || l((T) => ({
          ...T,
          [B.key]: { loading: !1, response: { found: !1, results: [], error: String(U) } }
        }));
      });
    }), () => {
      v = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((v) => `${v.id}:${v.enabled}`).join("|"), L, r.id, o.settings.apiKey, o.settings.taskMappings]), ye(() => {
    let v = !1;
    return O(!0), r.fetchMergedResults(o, e).then((R) => {
      if (v) return;
      const V = ce(R);
      g(R), A((B) => {
        var U;
        return V.some((T) => T.path === B) ? B : ((U = V[0]) == null ? void 0 : U.path) ?? "";
      });
    }).catch((R) => {
      v || g({ found: !1, results: [], error: String(R) });
    }).finally(() => {
      v || O(!1);
    }), () => {
      v = !0;
    };
  }, [e.project.name, e.project.runId, L, r.id, o.settings.apiKey, o.settings.taskMappings]);
  const Re = () => {
    const v = !Ce;
    m((R) => {
      const V = { ...R };
      return pe.forEach((B) => {
        V[B.key] = v;
      }), V;
    });
  }, qe = () => {
    const v = Number(J), R = Number(W);
    if (!Number.isInteger(v) || !Number.isInteger(R) || v < 1 || R < v || R > s.length) {
      window.alert(t === "zh" ? `请输入有效范围：1 ≤ m ≤ n ≤ ${s.length}` : `Enter a valid range: 1 ≤ m ≤ n ≤ ${s.length}`);
      return;
    }
    m(or(s, v, R));
  }, Te = async () => {
    if (!Z.length) {
      window.alert(t === "zh" ? "请至少选择一个镜头" : "Select at least one shot.");
      return;
    }
    if (ue.length) {
      window.alert(t === "zh" ? `以下已选镜头没有可用结果：${ue.map((v) => v.shotId).join("、")}` : `Selected shots without a result: ${ue.map((v) => v.shotId).join(", ")}`);
      return;
    }
    p(!0), w("");
    try {
      const v = await r.mergeVideos(o, {
        projectName: e.project.name,
        runId: e.project.runId,
        selections: Z,
        requestId: `tdm_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`
      });
      v ? (g((R) => ({ found: !0, results: [v, ...ce(R).filter((V) => V.path !== v.path)] })), A(v.path)) : M((R) => R + 1);
    } catch (v) {
      w(String(v instanceof Error ? v.message : v));
    } finally {
      p(!1);
    }
  }, Ke = async () => {
    N(!0), z("");
    try {
      await r.openResultFolder(o, e);
    } catch (v) {
      z(String(v instanceof Error ? v.message : v));
    } finally {
      N(!1);
    }
  }, he = _e(ne);
  return /* @__PURE__ */ n("section", { class: "td-postprocess", children: [
    /* @__PURE__ */ n("div", { class: "td-post-header", children: [
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ n("h2", { children: t === "zh" ? "合并视频" : "Merge videos" }),
        /* @__PURE__ */ n("p", { children: t === "zh" ? "从每个镜头选择一个结果，按当前分镜顺序进行无损合并。" : "Choose one result per shot and merge them losslessly in storyboard order." })
      ] }),
      /* @__PURE__ */ n("div", { class: "td-post-actions", children: [
        r.capabilities.openResultFolder && /* @__PURE__ */ n("button", { disabled: F, onClick: Ke, children: [
          "📁 ",
          F ? t === "zh" ? "正在打开…" : "Opening…" : t === "zh" ? "打开结果文件夹" : "Open results folder"
        ] }),
        /* @__PURE__ */ n("button", { onClick: () => M((v) => v + 1), children: [
          "↻ ",
          t === "zh" ? "刷新结果" : "Refresh"
        ] }),
        /* @__PURE__ */ n("button", { onClick: Re, children: Ce ? t === "zh" ? "全部取消" : "Clear all" : t === "zh" ? "一键全选" : "Select all" })
      ] })
    ] }),
    y && /* @__PURE__ */ n("div", { class: "td-post-error", children: [
      t === "zh" ? "打开结果文件夹失败：" : "Unable to open results folder: ",
      y
    ] }),
    /* @__PURE__ */ n("div", { class: "td-post-summary", children: [
      /* @__PURE__ */ n("span", { children: t === "zh" ? `已选择 ${Z.length}/${pe.length} 个启用镜头` : `${Z.length}/${pe.length} enabled shots selected` }),
      /* @__PURE__ */ n("span", { children: t === "zh" ? `预计时长 ${Y.toFixed(1)} 秒` : `Estimated duration ${Y.toFixed(1)} sec` }),
      /* @__PURE__ */ n("div", { class: "td-post-range", role: "group", "aria-label": t === "zh" ? "合并视频范围" : "Merge video range", children: [
        /* @__PURE__ */ n("span", { children: t === "zh" ? "范围" : "Range" }),
        /* @__PURE__ */ n("input", { type: "number", min: "1", max: s.length, step: "1", value: J, "aria-label": t === "zh" ? "起始镜头 m" : "Start shot m", onInput: (v) => X(v.currentTarget.value) }),
        /* @__PURE__ */ n("span", { children: "—" }),
        /* @__PURE__ */ n("input", { type: "number", min: "1", max: s.length, step: "1", value: W, "aria-label": t === "zh" ? "结束镜头 n" : "End shot n", onInput: (v) => se(v.currentTarget.value) }),
        /* @__PURE__ */ n("button", { disabled: !s.length, onClick: qe, children: t === "zh" ? "确认范围" : "Apply range" })
      ] }),
      /* @__PURE__ */ n("button", { class: "primary", disabled: _ || Ie || !Z.length || !!ue.length || !!be, title: be ?? "", onClick: Te, children: _ ? t === "zh" ? "正在合并…" : "Merging…" : t === "zh" ? "合并所选视频" : "Merge selected videos" })
    ] }),
    be && /* @__PURE__ */ n("div", { class: "td-post-warning", children: be }),
    S && /* @__PURE__ */ n("div", { class: "td-post-error", children: [
      t === "zh" ? "合并失败：" : "Merge failed: ",
      S
    ] }),
    ue.length > 0 && /* @__PURE__ */ n("div", { class: "td-post-warning", children: t === "zh" ? "已选镜头中存在尚未生成视频的镜头。" : "Some selected shots do not have generated videos yet." }),
    /* @__PURE__ */ n("div", { class: "td-post-shot-list", children: s.map((v) => {
      const R = a[v.key], V = ce((R == null ? void 0 : R.response) ?? { results: [] }), B = !!d[v.key];
      return /* @__PURE__ */ n("article", { class: `td-post-shot ${B ? "selected" : ""} ${v.shot.enabled ? "" : "disabled"}`, children: [
        /* @__PURE__ */ n("header", { children: [
          /* @__PURE__ */ n("label", { children: [
            /* @__PURE__ */ n("input", { type: "checkbox", checked: B, disabled: !v.shot.enabled, onChange: (U) => m((T) => ({ ...T, [v.key]: U.currentTarget.checked })) }),
            /* @__PURE__ */ n("span", { children: [
              /* @__PURE__ */ n("strong", { children: v.shot.id }),
              /* @__PURE__ */ n("em", { children: v.shot.title })
            ] })
          ] }),
          /* @__PURE__ */ n("span", { children: [
            v.shot.durationSeconds,
            "s"
          ] })
        ] }),
        !v.shot.enabled && /* @__PURE__ */ n("div", { class: "td-post-shot-disabled-note", children: t === "zh" ? "该镜头当前已禁用：历史结果可以预览，但不能参加合并。" : "This shot is disabled: historical results can be previewed but cannot be merged." }),
        R != null && R.loading ? /* @__PURE__ */ n("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading generated results…" }) : R != null && R.response.error ? /* @__PURE__ */ n("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : V.length ? /* @__PURE__ */ n("div", { class: "td-post-result-list", children: V.map((U, T) => {
          const j = _e(U), ee = u[v.key] === U.path, re = ln(U.path, V.length - T);
          return /* @__PURE__ */ n("div", { class: `td-post-result ${ee ? "selected" : ""}`, children: [
            /* @__PURE__ */ n("button", { class: "td-post-result-choice", role: "radio", "aria-checked": ee, onClick: () => f((ke) => ({ ...ke, [v.key]: U.path })), children: [
              j ? /* @__PURE__ */ n(Ue, { src: j, alt: `${v.shot.title} ${t === "zh" ? "结果" : "result"} ${re}` }) : /* @__PURE__ */ n("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ n("span", { children: [
                /* @__PURE__ */ n("strong", { children: [
                  t === "zh" ? `结果 ${re}` : `Result ${re}`,
                  T === 0 && /* @__PURE__ */ n("em", { children: t === "zh" ? "最新" : "Latest" })
                ] }),
                /* @__PURE__ */ n("span", { title: U.path, children: ie(U.path) }),
                /* @__PURE__ */ n("small", { children: U.bytes ? `${(U.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ n("button", { class: "td-post-result-play", disabled: !j, title: t === "zh" ? "播放预览" : "Play preview", onClick: () => j && c({ path: j, title: `${v.shot.id} · ${v.shot.title}` }), children: "▶" })
          ] }, U.path);
        }) }) : /* @__PURE__ */ n("div", { class: "td-post-shot-empty", children: t === "zh" ? "未找到这个镜头的生成结果" : "No generated result found for this shot" })
      ] }, v.key);
    }) }),
    /* @__PURE__ */ n("section", { class: "td-post-merged", children: [
      /* @__PURE__ */ n("header", { children: /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ n("h2", { children: t === "zh" ? "合并结果" : "Merged results" }),
        /* @__PURE__ */ n("span", { class: `td-result-state ${G.length ? "found" : ""}`, children: I ? t === "zh" ? "查询中" : "Checking" : t === "zh" ? `${G.length} 个结果` : `${G.length} results` })
      ] }) }),
      I ? /* @__PURE__ */ n("div", { class: "td-result-empty", children: t === "zh" ? "正在查询合并结果…" : "Loading merged results…" }) : E.error ? /* @__PURE__ */ n("div", { class: "td-result-empty errors", children: t === "zh" ? "无法查询合并结果" : "Unable to query merged results" }) : ne && he ? /* @__PURE__ */ n("div", { class: "td-generated-results", children: [
        /* @__PURE__ */ n("div", { class: "td-generated-video", children: [
          /* @__PURE__ */ n("video", { src: he, controls: !0, preload: "metadata", playsInline: !0 }, ne.path),
          /* @__PURE__ */ n("div", { class: "td-generated-meta", title: ne.path, children: ne.path })
        ] }),
        /* @__PURE__ */ n("div", { class: "td-result-list", children: G.map((v, R) => {
          const V = _e(v);
          return /* @__PURE__ */ n("button", { class: `td-result-item ${v.path === ne.path ? "selected" : ""}`, onClick: () => A(v.path), children: [
            V ? /* @__PURE__ */ n(Ue, { src: V, alt: `${t === "zh" ? "合并结果" : "Merged result"} ${G.length - R}` }) : /* @__PURE__ */ n("div", { class: "td-result-thumb", children: "×" }),
            /* @__PURE__ */ n("span", { class: "td-result-item-copy", children: [
              /* @__PURE__ */ n("strong", { children: [
                t === "zh" ? `合并结果 ${G.length - R}` : `Merged result ${G.length - R}`,
                R === 0 && /* @__PURE__ */ n("em", { children: t === "zh" ? "最新" : "Latest" })
              ] }),
              /* @__PURE__ */ n("span", { children: ie(v.path) }),
              /* @__PURE__ */ n("small", { children: v.bytes ? `${(v.bytes / 1024 / 1024).toFixed(1)} MB` : v.taskId ? `task ${v.taskId}` : "" })
            ] })
          ] }, v.path);
        }) })
      ] }) : /* @__PURE__ */ n("div", { class: "td-result-empty", children: t === "zh" ? "还没有合并结果" : "No merged result yet" })
    ] }),
    k && /* @__PURE__ */ n("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => c(null), children: /* @__PURE__ */ n("section", { role: "dialog", "aria-modal": "true", onClick: (v) => v.stopPropagation(), children: [
      /* @__PURE__ */ n("header", { children: [
        /* @__PURE__ */ n("strong", { children: k.title }),
        /* @__PURE__ */ n("button", { "aria-label": t === "zh" ? "关闭预览" : "Close preview", onClick: () => c(null), children: "×" })
      ] }),
      /* @__PURE__ */ n("video", { src: k.path, controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ n("p", { title: k.path, children: ie(k.path) })
    ] }) })
  ] });
}
function lr(e) {
  const t = e.reduce((r, o) => {
    const s = /^shot_(\d+)$/i.exec(o.id.trim());
    return s ? Math.max(r, Number(s[1])) : r;
  }, 0);
  return Math.max(t, e.length) + 1;
}
function cr(e, t = 5) {
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
function jt(e, t, r) {
  const o = lr(e), s = Array.from({ length: t }, (a, l) => cr(o + l, r));
  return [...e, ...s];
}
async function fe(e) {
  const t = await e.json();
  if (!e.ok) throw new Error(t.error || t.message || `HTTP ${e.status}`);
  return t;
}
function pr(e, t) {
  return new Error(`${e} adapter does not support ${t}`);
}
const dt = {
  id: "local",
  label: "Local ComfyUI",
  displayLabel: (e) => e === "zh" ? "本地 ComfyUI" : "Local ComfyUI",
  matchesHostname: () => !1,
  assetBanner: () => null,
  capabilities: {
    uploadAsset: !0,
    queryShotResults: !0,
    queryMergedResults: !0,
    mergeVideos: !0,
    secondPass: !0,
    openResultFolder: !0
  },
  unavailableReason(e, t) {
    return this.capabilities[e] ? e === "secondPass" && !t.queueSecondPass ? "当前工作流缺少后处理单独二采支流" : null : `Local ComfyUI 不支持 ${e}`;
  },
  async uploadAsset(e, t, r, o) {
    const s = new FormData();
    s.append("projectName", t), s.append("kind", r), s.append("file", o);
    const a = await fetch("/theodore-director/v1/assets", { method: "POST", body: s }), l = await fe(a);
    if (!l.path) throw new Error("上传响应缺少 path");
    return l.path;
  },
  async fetchShotResults(e, t, r, o) {
    const s = new URLSearchParams({
      projectName: t.project.name,
      runId: t.project.runId,
      shotId: r.id,
      activeIndex: String(o)
    });
    return fe(await fetch(`/theodore-director/v1/generated-video?${s.toString()}`));
  },
  async fetchMergedResults(e, t) {
    const r = new URLSearchParams({ projectName: t.project.name, runId: t.project.runId });
    return fe(await fetch(`/theodore-director/v1/postprocess/merged-videos?${r.toString()}`));
  },
  async mergeVideos(e, t) {
    const r = await fetch("/theodore-director/v1/postprocess/merge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t)
    });
    await fe(r);
  },
  async runSecondPass(e, t) {
    if (!e.queueSecondPass) throw new Error(this.unavailableReason("secondPass", e) ?? "单独二采不可用");
    await e.queueSecondPass(t);
  },
  async openResultFolder(e, t) {
    const r = await fetch("/theodore-director/v1/postprocess/open-folder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectName: t.project.name, runId: t.project.runId })
    });
    await fe(r);
  }
};
function ur({ language: e, settings: t, onChange: r, rememberSecret: o, onRememberSecretChange: s, onClearSavedSecret: a, onProjectSettingChange: l }) {
  return /* @__PURE__ */ n($e, { children: [
    /* @__PURE__ */ n("label", { children: [
      "RunningHub API Key",
      /* @__PURE__ */ n("input", { type: "password", autocomplete: "off", value: t.apiKey, placeholder: e === "zh" ? "默认仅保存在当前页面内存" : "Kept only in page memory by default", onInput: (d) => r({ ...t, apiKey: d.currentTarget.value }) })
    ] }),
    /* @__PURE__ */ n("div", { class: "td-runtime-key-controls", children: [
      /* @__PURE__ */ n("label", { children: [
        /* @__PURE__ */ n("input", { type: "checkbox", checked: o, onChange: (d) => s(d.currentTarget.checked) }),
        /* @__PURE__ */ n("span", { children: e === "zh" ? "在此设备记住 API Key" : "Remember API Key on this device" })
      ] }),
      /* @__PURE__ */ n("button", { type: "button", onClick: a, children: e === "zh" ? "清除已保存 Key" : "Clear saved Key" }),
      /* @__PURE__ */ n("small", { children: e === "zh" ? "默认不保存；公共电脑不建议启用。Key 仅写入当前浏览器站点存储，不进入工作流或导出文件。" : "Off by default; avoid on shared computers. The key is stored only in this browser and never enters the workflow or exports." })
    ] }),
    /* @__PURE__ */ n("label", { children: [
      e === "zh" ? "任务映射（每行一项）" : "Task mappings (one per line)",
      /* @__PURE__ */ n("textarea", { rows: 5, value: t.taskMappings, placeholder: `完整工作流 taskId
shot_003=taskId
merged=taskId`, onInput: (d) => {
        const m = d.currentTarget.value;
        r({ ...t, taskMappings: m }), l("runningHubTaskMappings", m);
      } }),
      /* @__PURE__ */ n("small", { children: e === "zh" ? "单独 taskId 按启用镜头顺序归属；也可显式指定镜头或合并任务。任务映射属于项目数据，会随工作流保存、导入和导出。" : "A bare taskId follows enabled-shot order; shot and merged tasks can be explicit. Task mappings are project data and follow workflow save, import, and export." })
    ] })
  ] });
}
const hr = /* @__PURE__ */ new Set(["mp4", "mov", "mkv", "webm", "avi"]);
function un(e) {
  const t = e.toLowerCase();
  return t === "runninghub.cn" || t.endsWith(".runninghub.cn");
}
function Nt(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.split(/\r?\n|,/).map((o) => o.trim()).filter(Boolean).forEach((o) => {
    const s = o.indexOf("="), a = s >= 0 ? o.slice(0, s).trim() : "workflow", l = (s >= 0 ? o.slice(s + 1) : o).trim();
    if (!l || !/^[A-Za-z0-9_-]+$/.test(l)) return;
    const d = a.toLowerCase() === "merged" ? "merged" : a || "workflow", m = `${d}\0${l}`;
    r.has(m) || (r.add(m), t.push({ target: d, taskId: l }));
  }), t;
}
function hn(e, t = window.location) {
  const r = un(t.hostname) ? t.origin : "https://www.runninghub.cn";
  return new URL(e, r).toString();
}
async function Lt(e, t) {
  const r = await fetch(hn("/openapi/v2/query"), {
    method: "POST",
    headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" },
    body: JSON.stringify({ taskId: t })
  });
  return fe(r);
}
function Dt(e, t) {
  return { path: t.url, url: t.url, provider: "runninghub", taskId: e, stage: "legacy_unknown" };
}
function Ot(e) {
  return (e.results ?? []).filter((t) => {
    const r = t.outputType.toLowerCase().replace(/^\./, "");
    return hr.has(r) && /^https:\/\//i.test(t.url);
  });
}
function mr(e, t, r) {
  const o = t.shots.filter((l) => l.enabled), s = o.findIndex((l) => l.id === r.id);
  if (s < 0 || !o.length) return [];
  const a = e.filter((l) => decodeURIComponent(l.url).includes(r.id));
  return a.length ? a : o.length === 1 ? e : e.length >= o.length ? e.filter((l, d) => d % o.length === s) : [];
}
const fr = {
  id: "runninghub",
  label: "RunningHub",
  displayLabel: () => "RunningHub",
  matchesHostname: un,
  SettingsPanel: ur,
  assetBanner(e, t) {
    const r = this.unavailableReason("uploadAsset", e);
    return {
      ready: !r,
      message: r ?? (t === "zh" ? "RunningHub 上传已启用；素材路径将保存官方 fileName。" : "RunningHub upload is ready; the official fileName will be stored.")
    };
  },
  capabilities: { uploadAsset: !0, queryShotResults: !0, queryMergedResults: !0, mergeVideos: !0, secondPass: !0, openResultFolder: !1 },
  unavailableReason(e, t) {
    return this.capabilities[e] ? ["uploadAsset", "queryShotResults", "queryMergedResults"].includes(e) && !t.settings.apiKey.trim() ? "请先填写 RunningHub API Key" : e === "mergeVideos" && !t.queueMerge ? "当前工作流缺少 RunningHub 合并支流" : e === "secondPass" && !t.queueSecondPass ? "当前工作流缺少后处理单独二采支流" : null : e === "openResultFolder" ? "RunningHub 无法打开本地结果文件夹" : `RunningHub 不支持 ${e}`;
  },
  async uploadAsset(e, t, r, o) {
    var m;
    const s = this.unavailableReason("uploadAsset", e);
    if (s) throw new Error(s);
    const a = new FormData();
    a.append("file", o);
    const l = await fetch(hn("/openapi/v2/media/upload/binary"), { method: "POST", headers: { Authorization: `Bearer ${e.settings.apiKey.trim()}` }, body: a }), d = await fe(l);
    if (d.code !== 0 || !((m = d.data) != null && m.fileName)) throw new Error(d.message || "RunningHub 上传响应缺少 fileName");
    return d.data.fileName;
  },
  async fetchShotResults(e, t, r) {
    const o = e.settings.apiKey.trim();
    if (!o) return { found: !1, results: [], error: this.unavailableReason("queryShotResults", e) ?? void 0 };
    const s = Nt(e.settings.taskMappings).filter((m) => m.target === "workflow" || m.target === r.id);
    if (!s.length) return { found: !1, results: [], error: `请添加工作流 taskId，或填写 ${r.id}=taskId` };
    const a = [], l = [];
    for (const m of s) {
      const u = await Lt(o, m.taskId), f = String(u.status ?? "").toUpperCase();
      if (f && f !== "SUCCESS") {
        ["FAILED", "ERROR", "CANCELED", "CANCELLED"].includes(f) && l.push(u.errorMessage || `${m.taskId}: ${f}`);
        continue;
      }
      const k = Ot(u), c = m.target === r.id ? k : mr(k, t, r);
      a.push(...c.map((_) => Dt(m.taskId, _)));
    }
    const d = [...new Map(a.map((m) => [m.url || m.path, m])).values()];
    return { found: d.length > 0, count: d.length, results: d, error: d.length ? void 0 : l.join("；") || void 0 };
  },
  async fetchMergedResults(e) {
    const t = e.settings.apiKey.trim();
    if (!t) return { found: !1, results: [], error: this.unavailableReason("queryMergedResults", e) ?? void 0 };
    const r = Nt(e.settings.taskMappings).filter((a) => a.target === "merged");
    if (!r.length) return { found: !1, results: [], error: "请添加 merged=taskId 合并任务映射" };
    const o = [];
    for (const a of r) {
      const l = await Lt(t, a.taskId);
      o.push(...Ot(l).map((d) => Dt(a.taskId, d)));
    }
    const s = [...new Map(o.map((a) => [a.url || a.path, a])).values()];
    return { found: s.length > 0, count: s.length, results: s };
  },
  async mergeVideos(e, t) {
    const r = this.unavailableReason("mergeVideos", e);
    if (r) throw new Error(r);
    return e.queueMerge(t);
  },
  async runSecondPass(e, t) {
    const r = this.unavailableReason("secondPass", e);
    if (r) throw new Error(r);
    await e.queueSecondPass(t);
  },
  async openResultFolder() {
    throw pr("runninghub", "openResultFolder");
  }
}, lt = [fr, dt];
function Ht(e, t = typeof window > "u" ? "localhost" : window.location.hostname) {
  return e.mode !== "auto" ? gr(e.mode) : lt.find((r) => r.id !== "local" && r.matchesHostname(t)) ?? dt;
}
function gr(e) {
  return lt.find((t) => t.id === e) ?? dt;
}
function br(e, t = {}) {
  return { settings: e, ...t };
}
const ct = "theodore-director.runninghub-api-key";
function pt() {
  try {
    return typeof window > "u" ? null : window.localStorage;
  } catch {
    return null;
  }
}
function vr(e = pt()) {
  var t;
  try {
    return ((t = e == null ? void 0 : e.getItem(ct)) == null ? void 0 : t.trim()) || null;
  } catch {
    return null;
  }
}
function xr(e, t = pt()) {
  const r = e.trim();
  if (!r || !t) return !1;
  try {
    return t.setItem(ct, r), !0;
  } catch {
    return !1;
  }
}
function Xe(e = pt()) {
  if (!e) return !1;
  try {
    return e.removeItem(ct), !0;
  } catch {
    return !1;
  }
}
const _r = "0.2.0", yr = "20260831.1", mn = {
  version: _r,
  build: yr
}, fn = String(mn.version), gn = String(mn.build), ut = `v${fn} · ${gn}`, bn = (e) => `${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, Le = (e) => JSON.parse(JSON.stringify(e)), wr = { image: "图片", video: "视频", audio: "音频" };
function Ft(e) {
  var r, o;
  const t = Le(e);
  return t.schemaVersion = 4, (r = t.project.id) != null && r.trim() || (t.project.id = bn("project")), (o = t.project).runningHubTaskMappings ?? (o.runningHubTaskMappings = ""), t.shots = t.shots.map((s) => ({
    ...s,
    latentRelay: s.latentRelay ?? !0,
    secondSampling: s.secondSampling ?? !0
  })), t;
}
function kr(e) {
  return e.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function Sr(e) {
  const t = bn(e);
  return { id: t, alias: t, kind: e, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: e === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function zr(e) {
  var a;
  if ((a = navigator.clipboard) != null && a.writeText)
    try {
      await navigator.clipboard.writeText(e);
      return;
    } catch {
    }
  const t = document.activeElement, r = t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement ? { start: t.selectionStart, end: t.selectionEnd, direction: t.selectionDirection } : null, o = document.createElement("textarea");
  o.value = e, o.style.position = "fixed", o.style.opacity = "0", document.body.append(o), o.select();
  const s = document.execCommand("copy");
  if (o.remove(), t instanceof HTMLElement && t.focus({ preventScroll: !0 }), r && (t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement) && t.setSelectionRange(r.start, r.end, r.direction ?? void 0), !s) throw new Error("浏览器拒绝写入剪贴板");
}
function $r({ initial: e, onSave: t, onClose: r, supportsSecondSampling: o, queueSecondPass: s, queueMerge: a, backendDisplayName: l }) {
  const [d, m] = C(() => Ft(e)), [u] = C(() => vr()), [f, k] = C("shots"), [c, _] = C(0), [p, S] = C(() => navigator.language.startsWith("zh") ? "zh" : "en"), [w, y] = C({}), [z, E] = C(!0), [g, I] = C(!1), [O, F] = C(0), [N, b] = C({ found: !1, results: [] }), [A, L] = C(""), [M, J] = C(!1), [X, W] = C(""), [se, pe] = C(!0), [Ce, Z] = C(!1), [ue, Ie] = C(!1), [Y, G] = C([]), [ne, be] = C("5"), [Re, qe] = C("1"), [Te, Ke] = C("5");
  ye(() => {
    const i = (h) => {
      h.target instanceof Element && h.target.closest(".td-shot-media-name") && h.preventDefault();
    };
    return document.addEventListener("mousedown", i), () => document.removeEventListener("mousedown", i);
  }, []);
  const [he, v] = C(() => ({ mode: "auto", apiKey: u ?? "", taskMappings: e.project.runningHubTaskMappings ?? "" })), [R, V] = C(() => ({ mode: "auto", apiKey: u ?? "", taskMappings: e.project.runningHubTaskMappings ?? "" })), [B, U] = C(u !== null), T = d.shots[Math.min(c, d.shots.length - 1)], j = we(() => T ? dn(d, T) : null, [d, T]), ee = T != null && T.enabled ? d.shots.slice(0, c).filter((i) => i.enabled).length : -1, re = d.shots.length > 0 && d.shots.every((i) => i.secondSampling), ke = Y.length > 0 && Y.every((i) => i.enabled), ae = we(() => ce(N), [N]), de = ae.find((i) => i.path === A) ?? ae[0], ht = _e(de), ve = Ht(he), mt = Ht(R), Ae = br(he, { queueMerge: a, queueSecondPass: s }), ft = mt.SettingsPanel, We = ve.assetBanner(Ae, p), gt = (i, h, x) => ve.uploadAsset(Ae, i, h, x), P = (i) => m((h) => {
    const x = Le(h);
    return i(x), x;
  }), bt = (i, h) => P((x) => {
    const $ = i + h;
    $ < 0 || $ >= x.shots.length || ([x.shots[i], x.shots[$]] = [x.shots[$], x.shots[i]], _($));
  }), vn = (i) => P((h) => {
    h.shots.length <= 1 || (h.shots.splice(i, 1), _((x) => x > i ? x - 1 : x === i ? Math.min(i, h.shots.length - 1) : x));
  }), xn = () => {
    G(Le(d.shots)), Z(!0);
  }, _n = () => {
    const i = Number(ne);
    if (!Number.isFinite(i) || i <= 0) {
      window.alert(p === "zh" ? "统一时长必须大于 0 秒" : "The shared duration must be greater than 0 seconds.");
      return;
    }
    G((h) => h.map((x) => ({ ...x, durationSeconds: i })));
  }, yn = () => {
    const i = Number(Re), h = Number(Te);
    if (!Number.isInteger(i) || i < 1 || i > 100) {
      window.alert(p === "zh" ? "新增镜头数量必须是 1–100 的整数" : "The shot count must be an integer from 1 to 100.");
      return;
    }
    if (!Number.isFinite(h) || h <= 0) {
      window.alert(p === "zh" ? "新增镜头时长必须大于 0 秒" : "The new-shot duration must be greater than 0 seconds.");
      return;
    }
    G((x) => jt(x, i, h));
  }, wn = () => {
    const i = !ke;
    G((h) => h.map((x) => ({ ...x, enabled: i })));
  }, kn = () => {
    if (Y.some((i) => !Number.isFinite(i.durationSeconds) || i.durationSeconds <= 0)) {
      window.alert(p === "zh" ? "每个镜头的时长都必须大于 0 秒" : "Every shot duration must be greater than 0 seconds.");
      return;
    }
    P((i) => {
      i.shots = Le(Y);
    }), _((i) => Math.min(i, Y.length - 1)), Z(!1);
  }, Sn = () => {
    const i = URL.createObjectURL(new Blob([JSON.stringify(d, null, 2)], { type: "application/json" })), h = document.createElement("a");
    h.href = i, h.download = `${kr(d.project.name)}.director.json`, h.click(), URL.revokeObjectURL(i);
  }, zn = () => {
    const i = Xn(d);
    if (i.length) {
      window.alert(`计划未通过校验：

${i.join(`
`)}`);
      return;
    }
    t(d);
  }, $n = () => {
    const i = { ...R };
    P((h) => {
      h.project.runningHubTaskMappings = i.taskMappings;
    }), v(i), B && i.apiKey.trim() ? xr(i.apiKey) || window.alert(p === "zh" ? "浏览器拒绝本地保存 API Key；本次会话仍可继续使用。" : "The browser blocked local API Key storage; it remains available for this session.") : Xe();
  }, Cn = () => {
    Xe(), U(!1), v((i) => ({ ...i, apiKey: "" })), V((i) => ({ ...i, apiKey: "" }));
  }, In = (i) => {
    const h = Ft(i);
    m(h), v((x) => ({ ...x, taskMappings: h.project.runningHubTaskMappings ?? "" })), V((x) => ({ ...x, taskMappings: h.project.runningHubTaskMappings ?? "" })), _(0);
  };
  return ye(() => {
    let i = !1;
    return T ? (J(!0), ve.fetchShotResults(Ae, d, T, ee).then((h) => {
      if (i) return;
      const x = ce(h);
      b(h), L(($) => {
        var D;
        return x.some((Q) => Q.path === $) ? $ : ((D = x[0]) == null ? void 0 : D.path) ?? "";
      });
    }).catch((h) => {
      i || (b({ found: !1, results: [], error: String(h) }), L(""));
    }).finally(() => {
      i || J(!1);
    }), () => {
      i = !0;
    }) : (b({ found: !1, results: [] }), L(""), J(!1), () => {
      i = !0;
    });
  }, [d.project.name, d.project.runId, T == null ? void 0 : T.id, T == null ? void 0 : T.enabled, ee, O, ve.id, he.apiKey, he.taskMappings]), /* @__PURE__ */ n("div", { class: "td-shell", children: [
    /* @__PURE__ */ n("header", { children: [
      /* @__PURE__ */ n("div", { class: "td-brand", children: [
        /* @__PURE__ */ n("h1", { children: me(p, "title") }),
        /* @__PURE__ */ n("span", { class: "td-version-badge", title: p === "zh" ? "前端版本与构建号" : "Frontend version and build ID", children: ut })
      ] }),
      /* @__PURE__ */ n("div", { class: "td-actions", children: [
        /* @__PURE__ */ n("button", { onClick: Sn, children: "导出 / Export" }),
        /* @__PURE__ */ n("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ n("input", { type: "file", accept: "application/json,.json", onChange: async (i) => {
            var x;
            const h = (x = i.currentTarget.files) == null ? void 0 : x[0];
            if (h)
              try {
                const $ = JSON.parse(await h.text());
                if (!$.project || !Array.isArray($.shots) || !Array.isArray($.assets)) throw new Error("不是有效的 Theodore Director Plan");
                In($);
              } catch ($) {
                window.alert(String($));
              }
          } })
        ] }),
        /* @__PURE__ */ n("button", { onClick: () => S(p === "zh" ? "en" : "zh"), children: p === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ n("button", { class: "primary", onClick: zn, children: me(p, "save") }),
        /* @__PURE__ */ n("button", { onClick: r, children: me(p, "close") })
      ] })
    ] }),
    /* @__PURE__ */ n("nav", { children: ["shots", "assets", "settings", "postprocess"].map((i) => /* @__PURE__ */ n("button", { class: f === i ? "active" : "", onClick: () => k(i), children: me(p, i) })) }),
    /* @__PURE__ */ n("main", { children: [
      f === "shots" && /* @__PURE__ */ n("div", { class: "td-shots", children: [
        /* @__PURE__ */ n("aside", { class: "td-shot-sidebar", children: [
          o && /* @__PURE__ */ n("button", { class: `wide td-bulk-toggle ${re ? "active" : ""}`, onClick: () => P((i) => {
            const h = !i.shots.every((x) => x.secondSampling);
            i.shots.forEach((x) => {
              x.secondSampling = h;
            });
          }), children: p === "zh" ? `全部二次采样：${re ? "开" : "关"}` : `Second sampling for all: ${re ? "ON" : "OFF"}` }),
          /* @__PURE__ */ n("div", { class: "td-shot-list", children: d.shots.map((i, h) => /* @__PURE__ */ n("div", { class: `td-shot-card ${h === c ? "selected" : ""}`, onClick: () => _(h), children: [
            /* @__PURE__ */ n("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ n("button", { class: "td-shot-delete", disabled: d.shots.length <= 1, title: p === "zh" ? d.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : d.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": p === "zh" ? "删除镜头" : "Delete shot", onClick: (x) => {
              x.stopPropagation(), vn(h);
            }, children: "×" }) }),
            /* @__PURE__ */ n("strong", { children: [
              h + 1,
              ". ",
              i.title
            ] }),
            /* @__PURE__ */ n("span", { children: [
              i.durationSeconds,
              "s · ",
              i.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ n("div", { class: "td-shot-move-actions", children: [
              /* @__PURE__ */ n("button", { title: p === "zh" ? "上移镜头" : "Move shot up", onClick: (x) => {
                x.stopPropagation(), bt(h, -1);
              }, children: "↑" }),
              /* @__PURE__ */ n("button", { title: p === "zh" ? "下移镜头" : "Move shot down", onClick: (x) => {
                x.stopPropagation(), bt(h, 1);
              }, children: "↓" })
            ] })
          ] }, i.id)) }),
          /* @__PURE__ */ n("button", { class: "wide", onClick: () => P((i) => {
            const h = i.shots.length;
            i.shots = jt(i.shots, 1, 5), _(h);
          }), children: [
            "＋ ",
            me(p, "addShot")
          ] }),
          /* @__PURE__ */ n("div", { class: "td-shot-batch-entry", children: /* @__PURE__ */ n("button", { class: "wide", onClick: xn, children: p === "zh" ? "批量处理镜头" : "Batch edit shots" }) })
        ] }),
        T && /* @__PURE__ */ n("section", { class: "td-form", children: [
          /* @__PURE__ */ n("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ n("label", { children: [
              "ID",
              /* @__PURE__ */ n("input", { value: T.id, onInput: (i) => P((h) => {
                h.shots[c].id = i.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ n("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ n("input", { value: T.title, onInput: (i) => P((h) => {
                h.shots[c].title = i.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ n("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ n("input", { type: "number", min: "0.1", step: "0.1", value: T.durationSeconds, onInput: (i) => P((h) => {
                h.shots[c].durationSeconds = Number(i.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ n("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ n("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: T.enabled, onChange: (i) => P((h) => {
                  h.shots[c].enabled = i.currentTarget.checked;
                }) }),
                /* @__PURE__ */ n("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ n("label", { class: "td-shot-enabled", title: ee === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: T.latentRelay, onChange: (i) => P((h) => {
                  h.shots[c].latentRelay = i.currentTarget.checked;
                }) }),
                /* @__PURE__ */ n("span", { children: [
                  "latent接力 / Relay",
                  ee === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              o && /* @__PURE__ */ n("label", { class: "td-shot-enabled", title: "开启时执行 RTX 超分和第二次 H3 采样，关闭时直接使用第一采画面", children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: T.secondSampling, onChange: (i) => P((h) => {
                  h.shots[c].secondSampling = i.currentTarget.checked;
                }) }),
                /* @__PURE__ */ n("span", { children: "二次采样 / 2nd pass" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ n("label", { children: [
            /* @__PURE__ */ n("span", { class: "td-field-label", children: [
              "提示词（使用 ",
              /* @__PURE__ */ n("code", { children: "{{ref:别名}}" }),
              "）"
            ] }),
            /* @__PURE__ */ n(Qe, { rows: 10, value: T.prompt, isReferenceValid: (i) => an(d, T, i), onInput: (i) => P((h) => {
              h.shots[c].prompt = i.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ n("label", { children: [
            /* @__PURE__ */ n("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ n("textarea", { rows: 3, value: T.negativePrompt, onInput: (i) => P((h) => {
              h.shots[c].negativePrompt = i.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ n("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ n("legend", { children: "本镜头素材 / Shot media" }),
            /* @__PURE__ */ n("label", { class: "td-shot-media-display-toggle", children: [
              /* @__PURE__ */ n("input", { type: "checkbox", checked: se, onChange: (i) => pe(i.currentTarget.checked) }),
              /* @__PURE__ */ n("span", { children: p === "zh" ? "显示别名" : "Show aliases" })
            ] }),
            d.assets.map((i) => {
              const h = !T.disabledAssetIds.includes(i.id), x = se ? i.alias : ie(i.path) || i.alias, $ = `{{ref:${i.alias}}}`;
              return /* @__PURE__ */ n("div", { class: `td-shot-media-card ${h ? "" : "disabled"}`, children: [
                /* @__PURE__ */ n("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ n(Mt, { asset: i, compact: !0 }),
                  /* @__PURE__ */ n("span", { class: "td-shot-media-kind", children: p === "zh" ? wr[i.kind] : i.kind }),
                  /* @__PURE__ */ n("label", { class: "td-shot-media-toggle", title: h ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ n("input", { type: "checkbox", checked: h, onChange: (D) => P((Q) => {
                    const te = Q.shots[c].disabledAssetIds;
                    Q.shots[c].disabledAssetIds = D.currentTarget.checked ? te.filter((xe) => xe !== i.id) : [.../* @__PURE__ */ new Set([...te, i.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ n("button", { class: `td-shot-media-name ${X === i.id ? "copied" : ""}`, title: `${x}
${p === "zh" ? "点击复制" : "Click to copy"} ${$}`, onClick: async () => {
                  try {
                    await zr($), W(i.id), window.setTimeout(() => W((D) => D === i.id ? "" : D), 1400);
                  } catch (D) {
                    window.alert(`${p === "zh" ? "复制失败" : "Copy failed"}: ${String(D)}`);
                  }
                }, children: [
                  /* @__PURE__ */ n("span", { children: x }),
                  X === i.id && /* @__PURE__ */ n("em", { children: p === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, i.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ n("aside", { class: "td-preview", children: [
          /* @__PURE__ */ n("details", { open: z, onToggle: (i) => E(i.currentTarget.open), children: [
            /* @__PURE__ */ n("summary", { children: [
              /* @__PURE__ */ n("strong", { children: me(p, "preview") }),
              /* @__PURE__ */ n("span", { class: "td-summary-counts", children: [
                "Picture ",
                (j == null ? void 0 : j.slots.filter((i) => i.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (j == null ? void 0 : j.slots.filter((i) => i.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (j == null ? void 0 : j.audioCount) ?? 0,
                "/3 · Files ",
                (j == null ? void 0 : j.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ n("div", { class: "td-preview-body", children: [
              j != null && j.errors.length ? /* @__PURE__ */ n("ul", { class: "errors", children: j.errors.map((i) => /* @__PURE__ */ n("li", { children: i })) }) : /* @__PURE__ */ n("p", { class: "ok", children: me(p, "noErrors") }),
              /* @__PURE__ */ n("ol", { children: j == null ? void 0 : j.slots.map((i) => /* @__PURE__ */ n("li", { children: [
                /* @__PURE__ */ n("code", { children: i.label }),
                " ← ",
                i.alias
              ] })) }),
              /* @__PURE__ */ n("pre", { children: j == null ? void 0 : j.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ n("details", { open: g, onToggle: (i) => I(i.currentTarget.open), children: [
            /* @__PURE__ */ n("summary", { children: [
              /* @__PURE__ */ n("strong", { children: p === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ n("span", { class: `td-result-state ${ae.length ? "found" : ""}`, children: M ? p === "zh" ? "查询中" : "Checking" : ae.length ? p === "zh" ? `${ae.length} 个结果` : `${ae.length} results` : p === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ n("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ n("div", { class: "td-result-actions", children: /* @__PURE__ */ n("button", { onClick: () => F((i) => i + 1), children: [
                "↻ ",
                p === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              M ? /* @__PURE__ */ n("div", { class: "td-result-empty", children: p === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : N.error ? /* @__PURE__ */ n("div", { class: "td-result-empty errors", children: N.error }) : de && ht ? /* @__PURE__ */ n("div", { class: "td-generated-results", children: [
                /* @__PURE__ */ n("div", { class: "td-generated-video", children: [
                  /* @__PURE__ */ n("video", { src: ht, controls: !0, preload: "metadata", playsInline: !0 }, de.path),
                  /* @__PURE__ */ n("div", { class: "td-generated-meta", title: de.path, children: [
                    de.path,
                    de.bytes ? ` · ${(de.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                  ] })
                ] }),
                /* @__PURE__ */ n("div", { class: "td-result-list", "aria-label": p === "zh" ? "全部生成结果" : "All generated results", children: ae.map((i, h) => {
                  const x = _e(i), $ = ln(i.path, ae.length - h), D = i.modifiedAt ? new Date(i.modifiedAt * 1e3).toLocaleString(p === "zh" ? "zh-CN" : "en-US") : "";
                  return /* @__PURE__ */ n("button", { class: `td-result-item ${i.path === de.path ? "selected" : ""}`, onClick: () => L(i.path), children: [
                    x ? /* @__PURE__ */ n(Ue, { src: x, alt: `${p === "zh" ? "结果" : "Result"} ${$}` }) : /* @__PURE__ */ n("div", { class: "td-result-thumb", children: /* @__PURE__ */ n("span", { children: "×" }) }),
                    /* @__PURE__ */ n("span", { class: "td-result-item-copy", children: [
                      /* @__PURE__ */ n("strong", { children: [
                        p === "zh" ? `结果 ${$}` : `Result ${$}`,
                        h === 0 && /* @__PURE__ */ n("em", { children: p === "zh" ? "最新" : "Latest" })
                      ] }),
                      /* @__PURE__ */ n("span", { title: i.path, children: ie(i.path) }),
                      /* @__PURE__ */ n("small", { children: [i.bytes ? `${(i.bytes / 1024 / 1024).toFixed(1)} MB` : "", D, i.taskId ? `task ${i.taskId}` : ""].filter(Boolean).join(" · ") })
                    ] })
                  ] }, i.path);
                }) })
              ] }) : /* @__PURE__ */ n("div", { class: "td-result-empty", children: p === "zh" ? "未找到本段视频" : "No video found for this shot" })
            ] })
          ] })
        ] })
      ] }),
      f === "assets" && /* @__PURE__ */ n("div", { class: "td-assets", children: [
        We && /* @__PURE__ */ n("div", { class: `td-runtime-banner ${We.ready ? "ready" : ""}`, children: We.message }),
        /* @__PURE__ */ n("div", { class: "td-toolbar", children: [
          ["image", "video", "audio"].map((i) => /* @__PURE__ */ n("button", { onClick: () => P((h) => h.assets.push(Sr(i))), children: [
            "＋ ",
            i
          ] })),
          /* @__PURE__ */ n("button", { class: "td-asset-batch-entry", onClick: () => Ie(!0), children: [
            "⇧ ",
            p === "zh" ? "批量导入素材" : "Batch import assets"
          ] })
        ] }),
        d.assets.map((i, h) => /* @__PURE__ */ n("article", { children: /* @__PURE__ */ n("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ n("div", { class: "td-grid", children: [
              /* @__PURE__ */ n("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ n("input", { value: i.alias, onInput: (x) => P(($) => {
                  $.assets[h].alias = x.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ n("select", { value: i.kind, onChange: (x) => P(($) => {
                  $.assets[h].kind = x.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ n("option", { children: "image" }),
                  /* @__PURE__ */ n("option", { children: "video" }),
                  /* @__PURE__ */ n("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ n("input", { value: i.path, onInput: (x) => P(($) => {
                  $.assets[h].path = x.currentTarget.value;
                }) }),
                /* @__PURE__ */ n("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ n("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ n("input", { type: "file", accept: i.kind === "image" ? "image/*" : i.kind === "video" ? "video/*" : "audio/*", onChange: async (x) => {
                      var Q;
                      const $ = x.currentTarget, D = (Q = $.files) == null ? void 0 : Q[0];
                      if (D) {
                        y((te) => ({ ...te, [i.id]: D.name }));
                        try {
                          const te = await gt(d.project.name, i.kind, D);
                          P((xe) => {
                            const vt = xe.assets.find((Rn) => Rn.id === i.id);
                            vt && (vt.path = te);
                          });
                        } catch (te) {
                          window.alert(String(te));
                        } finally {
                          y((te) => {
                            const xe = { ...te };
                            return delete xe[i.id], xe;
                          }), $.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ n("span", { class: "td-file-name", title: w[i.id] || i.path, children: w[i.id] ? `${p === "zh" ? "上传中" : "Uploading"}: ${w[i.id]}` : ie(i.path) || (p === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ n("input", { type: "number", min: "0", step: "0.1", value: i.durationSeconds ?? "", onInput: (x) => P(($) => {
                  $.assets[h].durationSeconds = x.currentTarget.value ? Number(x.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ n("input", { type: "number", value: i.fixedOrder, onInput: (x) => P(($) => {
                  $.assets[h].fixedOrder = Number(x.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ n("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ n("input", { value: i.shotIds.join(", "), onInput: (x) => P(($) => {
                  $.assets[h].shotIds = x.currentTarget.value.split(",").map((D) => D.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ n("div", { class: "td-flags", children: [
              /* @__PURE__ */ n("label", { children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: i.enabled, onChange: (x) => P(($) => {
                  $.assets[h].enabled = x.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ n("label", { children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: i.fixed, onChange: (x) => P(($) => {
                  $.assets[h].fixed = x.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              i.kind === "video" && /* @__PURE__ */ n("label", { children: [
                /* @__PURE__ */ n("input", { type: "checkbox", checked: i.includeVideoAudio, onChange: (x) => P(($) => {
                  $.assets[h].includeVideoAudio = x.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ n("button", { class: "danger", onClick: () => P((x) => {
                x.assets.splice(h, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ n(Mt, { asset: i })
        ] }) }, i.id))
      ] }),
      f === "settings" && /* @__PURE__ */ n("section", { class: "td-form settings", children: [
        /* @__PURE__ */ n("fieldset", { class: "td-version-info", children: [
          /* @__PURE__ */ n("legend", { children: p === "zh" ? "版本诊断" : "Version diagnostics" }),
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ n("span", { children: p === "zh" ? "前端" : "Frontend" }),
            /* @__PURE__ */ n("strong", { children: [
              "v",
              fn
            ] }),
            /* @__PURE__ */ n("small", { children: gn })
          ] }),
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ n("span", { children: p === "zh" ? "后端节点" : "Backend node" }),
            /* @__PURE__ */ n("strong", { children: l || (p === "zh" ? "未报告" : "Not reported") })
          ] }),
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ n("span", { children: p === "zh" ? "当前适配器" : "Active adapter" }),
            /* @__PURE__ */ n("strong", { children: ve.displayLabel(p) })
          ] })
        ] }),
        /* @__PURE__ */ n("fieldset", { class: "td-runtime-settings", children: [
          /* @__PURE__ */ n("legend", { children: p === "zh" ? "运行环境" : "Runtime" }),
          /* @__PURE__ */ n("label", { children: [
            p === "zh" ? "适配器" : "Adapter",
            /* @__PURE__ */ n("select", { value: R.mode, onChange: (i) => V((h) => ({ ...h, mode: i.currentTarget.value })), children: [
              /* @__PURE__ */ n("option", { value: "auto", children: p === "zh" ? "自动检测" : "Auto detect" }),
              lt.map((i) => /* @__PURE__ */ n("option", { value: i.id, children: i.displayLabel(p) }, i.id))
            ] })
          ] }),
          /* @__PURE__ */ n("div", { class: "td-runtime-status", children: [
            p === "zh" ? "当前：" : "Active: ",
            /* @__PURE__ */ n("strong", { children: mt.displayLabel(p) })
          ] }),
          ft && /* @__PURE__ */ n(
            ft,
            {
              language: p,
              settings: R,
              onChange: V,
              rememberSecret: B,
              onRememberSecretChange: U,
              onClearSavedSecret: Cn,
              onProjectSettingChange: (i, h) => {
                i === "runningHubTaskMappings" && P((x) => {
                  x.project.runningHubTaskMappings = h;
                });
              }
            }
          ),
          /* @__PURE__ */ n("div", { class: "td-runtime-apply", children: /* @__PURE__ */ n("button", { class: "primary", onClick: $n, children: p === "zh" ? "应用运行环境设置" : "Apply runtime settings" }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "Project name",
          /* @__PURE__ */ n("input", { value: d.project.name, onInput: (i) => P((h) => {
            h.project.name = i.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "Run ID",
          /* @__PURE__ */ n("input", { value: d.project.runId, onInput: (i) => P((h) => {
            h.project.runId = i.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "FPS",
          /* @__PURE__ */ n("input", { type: "number", value: d.defaults.fps, onInput: (i) => P((h) => {
            h.defaults.fps = Number(i.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "Base seed",
          /* @__PURE__ */ n("input", { type: "number", value: d.defaults.baseSeed, onInput: (i) => P((h) => {
            h.defaults.baseSeed = Number(i.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ n(Qe, { value: d.promptPrefix, isReferenceValid: (i) => Pt(d, i), onInput: (i) => P((h) => {
            h.promptPrefix = i.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ n("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ n(Qe, { value: d.promptSuffix, isReferenceValid: (i) => Pt(d, i), onInput: (i) => P((h) => {
            h.promptSuffix = i.currentTarget.value;
          }) })
        ] })
      ] }),
      f === "postprocess" && /* @__PURE__ */ n(ar, { plan: d, language: p, adapter: ve, context: Ae })
    ] }),
    Ce && /* @__PURE__ */ n("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ n("section", { class: "td-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": p === "zh" ? "批量处理镜头" : "Batch edit shots", children: [
      /* @__PURE__ */ n("header", { class: "td-batch-header", children: [
        /* @__PURE__ */ n("div", { children: [
          /* @__PURE__ */ n("h2", { children: p === "zh" ? "批量处理镜头" : "Batch edit shots" }),
          /* @__PURE__ */ n("p", { children: p === "zh" ? `当前共 ${Y.length} 个镜头` : `${Y.length} shots` })
        ] }),
        /* @__PURE__ */ n("button", { "aria-label": p === "zh" ? "关闭" : "Close", onClick: () => Z(!1), children: "×" })
      ] }),
      /* @__PURE__ */ n("div", { class: "td-batch-tools", children: [
        /* @__PURE__ */ n("div", { children: [
          /* @__PURE__ */ n("label", { children: [
            p === "zh" ? "所有镜头时长" : "Duration for all shots",
            /* @__PURE__ */ n("span", { children: [
              /* @__PURE__ */ n("input", { type: "number", min: "0.1", step: "0.1", value: ne, onInput: (i) => be(i.currentTarget.value) }),
              /* @__PURE__ */ n("em", { children: p === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ n("button", { onClick: _n, children: p === "zh" ? "一键设置所有时长" : "Set all durations" })
        ] }),
        /* @__PURE__ */ n("div", { children: [
          /* @__PURE__ */ n("label", { children: [
            p === "zh" ? "新增镜头数量" : "New shot count",
            /* @__PURE__ */ n("input", { type: "number", min: "1", max: "100", step: "1", value: Re, onInput: (i) => qe(i.currentTarget.value) })
          ] }),
          /* @__PURE__ */ n("label", { children: [
            p === "zh" ? "每个镜头时长" : "Duration per shot",
            /* @__PURE__ */ n("span", { children: [
              /* @__PURE__ */ n("input", { type: "number", min: "0.1", step: "0.1", value: Te, onInput: (i) => Ke(i.currentTarget.value) }),
              /* @__PURE__ */ n("em", { children: p === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ n("button", { onClick: yn, children: p === "zh" ? "批量新增镜头" : "Add shots" })
        ] })
      ] }),
      /* @__PURE__ */ n("div", { class: "td-batch-global-actions", children: [
        /* @__PURE__ */ n("span", { children: p === "zh" ? `已启用 ${Y.filter((i) => i.enabled).length}/${Y.length} 个镜头` : `${Y.filter((i) => i.enabled).length}/${Y.length} shots enabled` }),
        /* @__PURE__ */ n("button", { class: ke ? "active" : "", onClick: wn, children: ke ? p === "zh" ? "全部禁用" : "Disable all" : p === "zh" ? "全部启用" : "Enable all" })
      ] }),
      /* @__PURE__ */ n("div", { class: "td-batch-table", children: [
        /* @__PURE__ */ n("div", { class: "td-batch-row td-batch-table-head", children: [
          /* @__PURE__ */ n("span", { children: "#" }),
          /* @__PURE__ */ n("span", { children: p === "zh" ? "镜头名" : "Shot name" }),
          /* @__PURE__ */ n("span", { children: p === "zh" ? "启用" : "Enabled" }),
          /* @__PURE__ */ n("span", { children: p === "zh" ? "具体时长" : "Duration" }),
          /* @__PURE__ */ n("span", { children: [
            "latent ",
            p === "zh" ? "接力" : "relay"
          ] })
        ] }),
        Y.map((i, h) => /* @__PURE__ */ n("div", { class: "td-batch-row", children: [
          /* @__PURE__ */ n("span", { children: h + 1 }),
          /* @__PURE__ */ n("input", { value: i.title, "aria-label": `${p === "zh" ? "镜头名" : "Shot name"} ${h + 1}`, onInput: (x) => G(($) => $.map((D, Q) => Q === h ? { ...D, title: x.currentTarget.value } : D)) }),
          /* @__PURE__ */ n("label", { class: "td-batch-enabled", children: [
            /* @__PURE__ */ n("input", { type: "checkbox", checked: i.enabled, onChange: (x) => G(($) => $.map((D, Q) => Q === h ? { ...D, enabled: x.currentTarget.checked } : D)) }),
            /* @__PURE__ */ n("span", { children: i.enabled ? p === "zh" ? "开" : "ON" : p === "zh" ? "关" : "OFF" })
          ] }),
          /* @__PURE__ */ n("label", { class: "td-batch-duration", children: [
            /* @__PURE__ */ n("input", { type: "number", min: "0.1", step: "0.1", value: i.durationSeconds, onInput: (x) => G(($) => $.map((D, Q) => Q === h ? { ...D, durationSeconds: Number(x.currentTarget.value) } : D)) }),
            /* @__PURE__ */ n("span", { children: p === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ n("label", { class: "td-batch-relay", children: [
            /* @__PURE__ */ n("input", { type: "checkbox", checked: i.latentRelay, onChange: (x) => G(($) => $.map((D, Q) => Q === h ? { ...D, latentRelay: x.currentTarget.checked } : D)) }),
            /* @__PURE__ */ n("span", { children: i.latentRelay ? p === "zh" ? "开" : "ON" : p === "zh" ? "关" : "OFF" })
          ] })
        ] }, i.id))
      ] }),
      /* @__PURE__ */ n("footer", { children: [
        /* @__PURE__ */ n("button", { onClick: () => Z(!1), children: p === "zh" ? "取消" : "Cancel" }),
        /* @__PURE__ */ n("button", { class: "primary", onClick: kn, children: p === "zh" ? "应用更改" : "Apply changes" })
      ] })
    ] }) }),
    ue && /* @__PURE__ */ n(Qn, { language: p, assets: d.assets, projectName: d.project.name, uploadFile: gt, onImported: (i) => P((h) => {
      h.assets.push(...i);
    }), onClose: () => Ie(!1) })
  ] });
}
function Cr(e, t, r = !1, o, s, a) {
  const l = document.getElementById("theodore-director-modal");
  if (l) {
    l.focus();
    return;
  }
  const d = document.createElement("div");
  d.id = "theodore-director-modal", d.className = "td-modal", d.tabIndex = -1, document.body.append(d);
  const m = (f) => {
    f.key === "Escape" && u();
  }, u = () => {
    document.removeEventListener("keydown", m), kt(null, d), d.remove();
  };
  document.addEventListener("keydown", m), kt(/* @__PURE__ */ n($r, { initial: e, onSave: (f) => {
    t(f), u();
  }, onClose: u, supportsSecondSampling: r, queueSecondPass: o, queueMerge: s, backendDisplayName: a }), d), d.focus();
}
const Ir = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-shot-media{position:relative}.td-form label.td-shot-media-display-toggle{position:absolute;top:-17px;right:10px;z-index:3;display:flex;flex-direction:row;align-items:center;gap:6px;padding:6px 9px;border:1px solid var(--td-line);border-radius:6px;background:var(--td-panel);color:var(--td-text);cursor:pointer;white-space:nowrap}.td-form label.td-shot-media-display-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-display-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-brand{display:flex;align-items:center;gap:10px;min-width:0}.td-brand h1{margin:0}.td-version-badge{flex:none;padding:3px 8px;border:1px solid #527061;border-radius:999px;background:#17372d;color:var(--td-accent);font-size:11px;font-weight:600;letter-spacing:.02em}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-highlight-textarea{position:relative;display:block;width:100%;min-width:0}.td-highlight-backdrop,.td-form textarea.td-highlight-input{box-sizing:border-box;width:100%;margin:0;padding:7px 9px;font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,monospace;font-size:inherit;line-height:1.45;letter-spacing:normal;-moz-tab-size:8;tab-size:8;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.td-highlight-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border:1px solid transparent;border-radius:6px;background:#222a35;color:var(--td-text);pointer-events:none}.td-form textarea.td-highlight-input{position:relative;z-index:1;display:block;background:transparent;color:transparent;caret-color:var(--td-text);-webkit-text-fill-color:transparent}.td-highlight-input::selection{background:#5898d46b}.td-highlight-backdrop mark{padding:0;border-radius:3px;color:inherit}.td-highlight-backdrop mark.valid{background:#1d6b50;color:#bfffe6}.td-highlight-backdrop mark.invalid{background:#7a2931;color:#ffd1d5;text-decoration:underline;text-decoration-color:#ff9aa4;text-underline-offset:2px}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-generated-results{display:flex;flex-direction:column;gap:12px}.td-result-list{display:flex;flex-direction:column;gap:7px;max-height:280px;overflow:auto;padding-right:3px}.td-shell button.td-result-item{display:grid;grid-template-columns:112px minmax(0,1fr);gap:10px;align-items:center;width:100%;padding:6px;text-align:left;background:#151b23}.td-shell button.td-result-item.selected{border-color:var(--td-accent);background:#1c2a2a}.td-result-thumb{width:112px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:5px;background:#090c10;color:var(--td-muted)}.td-result-thumb img,.td-result-thumb video{display:block;width:100%;height:100%;object-fit:contain}.td-result-item-copy{display:flex;min-width:0;flex-direction:column;gap:3px}.td-result-item-copy>strong{display:flex;align-items:center;gap:7px;color:var(--td-text)}.td-result-item-copy>strong em{padding:1px 6px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-result-item-copy>span,.td-result-item-copy>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-result-item-copy>small{font-size:10px}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-asset-batch-entry{margin-left:auto;border-color:#527061!important;background:#1b2c28!important;color:var(--td-accent)!important}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}.td-shot-sidebar{display:flex;flex-direction:column}.td-shot-list{flex:none}.td-shot-batch-entry{display:flex;align-items:flex-end;flex:1;min-height:90px;padding-top:14px}.td-shot-batch-entry button{border-color:#527061;background:#1b2c28;color:var(--td-accent)}.td-batch-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:28px;background:#05080dbd;box-sizing:border-box}.td-batch-panel{display:flex;flex-direction:column;width:min(1040px,100%);max-height:min(820px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-batch-header h2{font-size:18px;margin:0}.td-batch-header p{margin:3px 0 0;color:var(--td-muted)}.td-batch-header>button{font-size:20px;line-height:1;padding:5px 9px}.td-batch-tools{display:grid;grid-template-columns:1fr 1.4fr;gap:12px;padding:14px 18px;border-bottom:1px solid var(--td-line);background:#151b23}.td-batch-tools>div{display:flex;align-items:end;gap:8px;padding:10px;border:1px solid var(--td-line);border-radius:7px}.td-batch-tools label{display:flex;flex:1;flex-direction:column;gap:4px;color:var(--td-muted);white-space:nowrap}.td-batch-tools label>span,.td-batch-duration{display:flex;align-items:center;gap:6px}.td-batch-tools input{width:100%}.td-batch-tools em{color:var(--td-muted);font-style:normal}.td-batch-tools button{white-space:nowrap}.td-batch-global-actions{display:flex;align-items:center;justify-content:flex-end;gap:12px;padding:9px 22px;border-bottom:1px solid var(--td-line);background:#171e27;color:var(--td-muted)}.td-batch-global-actions button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-batch-table{overflow:auto;padding:0 18px}.td-batch-row{display:grid;grid-template-columns:42px minmax(180px,1fr) 100px 150px 120px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-batch-table-head{position:sticky;top:0;z-index:1;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-batch-duration input{min-width:0;width:100%}.td-batch-duration>span{color:var(--td-muted)}.td-batch-enabled,.td-batch-relay{display:flex;align-items:center;gap:7px;justify-content:flex-start;color:var(--td-text)}.td-batch-enabled input,.td-batch-relay input{width:17px;height:17px;margin:0}.td-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-batch-panel{display:flex;flex-direction:column;width:min(1420px,100%);max-height:min(880px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-asset-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-asset-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-dropzone{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-height:92px;margin:14px 18px 10px;border:1px dashed #597084;border-radius:9px;background:#151b23;color:var(--td-text);cursor:pointer;transition:border-color .15s,background .15s}.td-asset-dropzone:hover,.td-asset-dropzone.dragging{border-color:var(--td-accent);background:#1b2c28}.td-asset-dropzone span{color:var(--td-muted);font-size:12px}.td-asset-dropzone input{display:none}.td-asset-batch-warning{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 18px 10px;padding:8px 10px;border:1px solid #836a32;border-radius:7px;background:#3a301c;color:#f4d991}.td-asset-batch-warning span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-warning button{padding:2px 7px}.td-asset-batch-summary{display:flex;align-items:center;justify-content:space-between;padding:8px 18px;border-top:1px solid var(--td-line);border-bottom:1px solid var(--td-line);background:#151b23;color:var(--td-muted)}.td-asset-batch-summary button{padding:5px 8px}.td-asset-batch-list{overflow:auto;padding:0 18px 10px}.td-asset-batch-row{display:grid;grid-template-columns:minmax(210px,1.4fr) minmax(150px,1fr) 115px 135px 105px 72px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-asset-batch-head{position:sticky;top:0;z-index:2;padding-top:10px;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-asset-batch-row.invalid{background:#3b202560}.td-asset-batch-row.imported{background:#17372d55}.td-asset-batch-file{display:flex;min-width:0;flex-direction:column;gap:2px}.td-asset-batch-file strong,.td-asset-batch-file small,.td-asset-batch-file em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-file small{color:var(--td-muted);font-weight:400}.td-asset-batch-file em{color:var(--td-danger);font-size:11px;font-style:normal}.td-asset-batch-duration,.td-asset-batch-audio{display:flex;align-items:center;gap:6px;color:var(--td-muted)}.td-asset-batch-duration input{min-width:0;width:100%}.td-asset-batch-audio input{width:17px;height:17px;margin:0}.td-asset-batch-empty{display:flex;min-height:130px;align-items:center;justify-content:center;color:var(--td-muted)}.td-asset-batch-panel button:disabled,.td-asset-batch-panel input:disabled,.td-asset-batch-panel select:disabled{opacity:.55;cursor:not-allowed}.td-postprocess{display:flex;flex-direction:column;gap:14px;max-width:1500px;margin:0 auto}.td-post-header,.td-post-summary,.td-post-merged{border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px}.td-post-header h2,.td-post-merged h2{margin:0;font-size:17px}.td-post-header p{margin:4px 0 0;color:var(--td-muted)}.td-post-actions{display:flex;gap:8px;flex:none}.td-post-summary{display:flex;align-items:center;gap:18px;padding:10px 14px;color:var(--td-muted)}.td-post-summary>button{margin-left:auto}.td-post-summary button:disabled{opacity:.5;cursor:not-allowed}.td-post-range{display:flex;align-items:center;gap:6px;margin-left:auto}.td-post-range input{width:64px;padding:6px 7px;text-align:center}.td-post-range button{white-space:nowrap}.td-post-summary>.td-post-range+button{margin-left:0}.td-post-error,.td-post-warning{padding:10px 13px;border-radius:7px}.td-post-error{border:1px solid #8b4149;background:#442228;color:#ffd1d5;white-space:pre-wrap}.td-post-warning{border:1px solid #836a32;background:#3a301c;color:#f4d991}.td-post-shot-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(390px,1fr));gap:12px;align-items:start}.td-post-shot{min-width:0;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel);overflow:hidden}.td-post-shot.selected{border-color:#527e6c}.td-post-shot.disabled{opacity:.72}.td-post-shot>header{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid var(--td-line);background:#1d2530}.td-post-shot>header>label{display:flex;align-items:center;gap:9px;min-width:0;cursor:pointer}.td-post-shot>header input{width:18px;height:18px;margin:0;flex:none}.td-post-shot>header label>span{display:flex;min-width:0;gap:8px;align-items:baseline}.td-post-shot>header strong{color:var(--td-text)}.td-post-shot>header em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted);font-style:normal}.td-post-shot>header>span{flex:none;padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted)}.td-post-shot-disabled-note{padding:7px 10px;border-bottom:1px solid var(--td-line);background:#332b1d;color:#e5c77d;font-size:11px}.td-post-shot-empty{min-height:96px;display:flex;align-items:center;justify-content:center;padding:12px;color:var(--td-muted);text-align:center}.td-post-result-list{display:flex;flex-direction:column;gap:7px;max-height:360px;overflow:auto;padding:9px}.td-post-result{display:grid;grid-template-columns:minmax(0,1fr) 35px;gap:6px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:5px}.td-post-result.selected{border-color:var(--td-accent);background:#1c2a2a}.td-shell button.td-post-result-choice{display:grid;grid-template-columns:112px minmax(0,1fr);gap:9px;align-items:center;min-width:0;padding:0;border:0;background:transparent;text-align:left}.td-post-result-choice>span{display:flex;min-width:0;flex-direction:column;gap:3px}.td-post-result-choice>span>strong{display:flex;align-items:center;gap:6px}.td-post-result-choice>span>strong em{padding:1px 5px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-post-result-choice>span>span,.td-post-result-choice>span>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-post-result-choice>span>small{font-size:10px}.td-post-result-play{width:35px;height:35px;padding:0!important}.td-post-result-play:disabled{opacity:.35;cursor:not-allowed}.td-post-merged{padding:12px}.td-post-merged>header>div{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px}.td-post-merged .td-generated-results{display:grid;grid-template-columns:minmax(360px,1.6fr) minmax(300px,1fr);align-items:start}.td-post-merged .td-result-list{max-height:420px}.td-post-preview-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:30;display:flex;align-items:center;justify-content:center;padding:26px;background:#030609d6}.td-post-preview-overlay>section{width:min(980px,100%);max-height:calc(100vh - 52px);overflow:auto;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 80px #000c}.td-post-preview-overlay header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--td-line)}.td-post-preview-overlay header button{font-size:20px;line-height:1;padding:5px 9px}.td-post-preview-overlay video{display:block;width:100%;max-height:calc(100vh - 170px);background:#070a0e}.td-post-preview-overlay p{margin:0;padding:9px 12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}.td-post-summary{flex-wrap:wrap}.td-post-range{margin-left:0}.td-post-summary>button{margin-left:auto}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:900px){.td-post-shot-list,.td-post-merged .td-generated-results{grid-template-columns:1fr}.td-post-header{align-items:flex-start;flex-direction:column}.td-post-actions{width:100%}.td-post-actions button{flex:1}.td-post-summary{align-items:stretch;flex-direction:column;gap:7px}.td-post-range{margin:3px 0;flex-wrap:wrap}.td-post-summary>button{margin:4px 0 0}.td-post-result-list{max-height:none}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}@media(max-width:1000px){.td-asset-batch-list{min-width:900px}.td-asset-batch-panel{overflow:auto}.td-asset-batch-panel>.td-batch-header,.td-asset-dropzone,.td-asset-batch-warning,.td-asset-batch-summary,.td-asset-batch-panel>footer{min-width:864px}}@media(max-width:720px){.td-asset-batch-entry{margin-left:0}}.td-postprocess-shell{display:flex;flex-direction:column;gap:12px;max-width:1500px;margin:0 auto}.td-postprocess-shell>.td-postprocess{max-width:none;width:100%;margin:0}.td-post-mode-tabs{display:flex;gap:7px;padding:5px;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-mode-tabs button{min-width:130px}.td-post-mode-tabs button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-second-pass-panel .td-post-shot>header>span:first-child{display:flex;min-width:0;gap:8px;align-items:baseline;padding:0;background:transparent}.td-second-pass-result{display:grid;grid-template-columns:minmax(0,1fr) 118px;gap:8px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:6px}.td-second-pass-result:has(.td-second-pass-run:disabled){border-color:#34404d}.td-second-pass-run{width:118px;min-height:38px;padding:6px!important}.td-second-pass-run:disabled{opacity:.62;cursor:not-allowed}.td-second-pass-error{grid-column:1/-1;padding:6px 8px;border-radius:5px;background:#442228;color:#ffd1d5;font-size:11px;white-space:pre-wrap}@media(max-width:620px){.td-post-mode-tabs{flex-direction:column}.td-post-mode-tabs button{width:100%}.td-second-pass-result{grid-template-columns:1fr}.td-second-pass-run{width:100%}}.td-runtime-settings{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:14px;margin:0 0 8px}.td-runtime-settings legend{padding:0 7px;color:var(--td-accent)}.td-runtime-settings label:has(textarea),.td-runtime-settings label:has(input[type=password]),.td-runtime-key-controls,.td-runtime-apply{grid-column:1/-1}.td-runtime-settings small{display:block;margin-top:5px;color:var(--td-muted);line-height:1.45}.td-runtime-status{display:flex;align-items:center;padding:8px 10px;border:1px solid var(--td-line);border-radius:6px;background:#161d25;color:var(--td-muted)}.td-runtime-status strong{margin-left:4px;color:var(--td-accent)}.td-runtime-key-controls{display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:9px 10px;border:1px solid var(--td-line);border-radius:6px;background:#161d25}.td-runtime-key-controls>label{display:flex;flex-direction:row;align-items:center;gap:7px}.td-runtime-key-controls>label input{width:auto}.td-runtime-key-controls small{flex-basis:100%;margin:0}.td-runtime-apply{display:flex;justify-content:flex-end}.td-runtime-banner{padding:10px 13px;border:1px solid #836a32;border-radius:7px;background:#3a301c;color:#f4d991}.td-runtime-banner.ready{border-color:#356f59;background:#18372d;color:#8be1bd}@media(max-width:700px){.td-runtime-settings{grid-template-columns:1fr}.td-runtime-settings label:has(textarea),.td-runtime-settings label:has(input[type=password]),.td-runtime-key-controls,.td-runtime-apply{grid-column:auto}}.td-version-info{display:grid;grid-template-columns:1fr 1.5fr 1fr;gap:9px;padding:12px 14px;margin:0 0 10px}.td-version-info legend{padding:0 7px;color:var(--td-accent)}.td-version-info>div{display:flex;min-width:0;flex-direction:column;gap:3px;padding:9px 10px;border:1px solid var(--td-line);border-radius:6px;background:#161d25}.td-version-info span,.td-version-info small{color:var(--td-muted);font-size:11px}.td-version-info strong{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text)}@media(max-width:700px){.td-version-info{grid-template-columns:1fr}.td-brand{align-items:flex-start;flex-direction:column;gap:4px}}", Ut = "theodore-director-styles";
function Rr() {
  if (document.getElementById(Ut)) return;
  const e = document.createElement("style");
  e.id = Ut, e.textContent = Ir, document.head.append(e);
}
Rr();
console.info(`[Theodore Director] frontend ${ut}`);
function Tr(e) {
  const t = e.output ?? {}, r = [t.gifs, t.videos, t.images].find((l) => Array.isArray(l)), o = r == null ? void 0 : r[0], s = String((o == null ? void 0 : o.filename) ?? "").trim();
  return s ? {
    path: [String((o == null ? void 0 : o.subfolder) ?? "").trim().replace(/\\/g, "/").replace(/^\/+|\/+$/g, ""), s].filter(Boolean).join("/"),
    provider: "local",
    stage: "legacy_unknown"
  } : void 0;
}
function Ar() {
  const e = Tn, t = An, r = async (s) => {
    var S, w;
    const a = ((S = e.graph) == null ? void 0 : S._nodes) ?? [], l = a.find((y) => y.type === "TheodoreDirector_PostprocessSecondPassSource"), d = a.find((y) => y.type === "TheodoreDirector_SaveSecondPass"), m = (w = l == null ? void 0 : l.widgets) == null ? void 0 : w.find((y) => y.name === "request_json");
    if (!l || !d || !m || d.id === void 0)
      throw new Error("当前工作流缺少后处理单独二采支流，请重新载入仓库中的 V7 导播台示例工作流");
    const u = m.value, f = l.mode, k = d.mode;
    let c;
    try {
      m.value = JSON.stringify(s), l.mode = 0, d.mode = 0, c = await e.graphToPrompt(e.rootGraph);
    } finally {
      m.value = u, l.mode = f, d.mode = k;
    }
    const p = (await t.queuePrompt(0, c, { partialExecutionTargets: [String(d.id)] })).prompt_id;
    if (!p) throw new Error("ComfyUI 没有返回二采任务 ID");
    await new Promise((y, z) => {
      const E = () => {
        t.removeEventListener("execution_success", I), t.removeEventListener("execution_error", O), t.removeEventListener("execution_interrupted", O);
      }, g = (F) => {
        var N;
        return String(((N = F.detail) == null ? void 0 : N.prompt_id) ?? "");
      }, I = (F) => {
        g(F) === p && (E(), y());
      }, O = (F) => {
        if (g(F) !== p) return;
        const N = F.detail ?? {};
        E(), z(new Error(String(N.exception_message ?? N.error ?? "单独二采任务执行失败")));
      };
      t.addEventListener("execution_success", I), t.addEventListener("execution_error", O), t.addEventListener("execution_interrupted", O);
    });
  }, o = async (s) => {
    var _, p;
    const l = (((_ = e.graph) == null ? void 0 : _._nodes) ?? []).find((S) => S.type === "TheodoreDirector_MergeVideos"), d = (p = l == null ? void 0 : l.widgets) == null ? void 0 : p.find((S) => S.name === "request_json");
    if (!l || !d || l.id === void 0)
      throw new Error("当前工作流缺少 Theodore 合并支流，请重新载入仓库中的 V7.2 示例工作流");
    const m = d.value, u = l.mode;
    let f;
    try {
      d.value = JSON.stringify(s), l.mode = 0, f = await e.graphToPrompt(e.rootGraph);
    } finally {
      d.value = m, l.mode = u;
    }
    const c = (await t.queuePrompt(0, f, { partialExecutionTargets: [String(l.id)] })).prompt_id;
    if (!c) throw new Error("ComfyUI 没有返回合并任务 ID");
    return new Promise((S, w) => {
      let y;
      const z = () => {
        t.removeEventListener("executed", I), t.removeEventListener("execution_success", O), t.removeEventListener("execution_error", F), t.removeEventListener("execution_interrupted", F);
      }, E = (N) => N.detail ?? {}, g = (N) => String(N.prompt_id ?? "") === c, I = (N) => {
        const b = E(N);
        !g(b) || String(b.node ?? "") !== String(l.id) || (y = Tr(b) ?? y);
      }, O = (N) => {
        const b = E(N);
        g(b) && (z(), S(y));
      }, F = (N) => {
        const b = E(N);
        g(b) && (z(), w(new Error(String(b.exception_message ?? b.error ?? "合并任务执行失败"))));
      };
      t.addEventListener("executed", I), t.addEventListener("execution_success", O), t.addEventListener("execution_error", F), t.addEventListener("execution_interrupted", F);
    });
  };
  e.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(s, a) {
      if (a.name === "TheodoreDirector_PostprocessSecondPassSource" || a.name === "TheodoreDirector_MergeVideos") {
        const d = s.prototype.onNodeCreated;
        s.prototype.onNodeCreated = function() {
          var u, f;
          d == null || d.apply(this);
          const m = (u = this.widgets) == null ? void 0 : u.find((k) => k.name === "request_json");
          m && (m.type = "hidden", m.computeSize = () => [0, -4]), this.size = [Math.max(((f = this.size) == null ? void 0 : f[0]) ?? 300, 380), 80];
        };
        return;
      }
      if (a.name !== "TheodoreDirector_Project") return;
      const l = s.prototype.onNodeCreated;
      s.prototype.onNodeCreated = function() {
        var m, u;
        l == null || l.apply(this);
        const d = (m = this.widgets) == null ? void 0 : m.find((f) => f.name === "plan_json");
        d && (d.type = "hidden", d.computeSize = () => [0, -4], this.addWidget("button", `打开 Theodore 导播台 / Open Director · ${ut}`, null, () => {
          var f;
          try {
            const k = JSON.parse(String(d.value)), c = ((f = e.graph) == null ? void 0 : f._nodes) ?? [], _ = c.some((S) => S.type === "TheodoreDirector_PostprocessSecondPassSource") && c.some((S) => S.type === "TheodoreDirector_SaveSecondPass"), p = c.some((S) => S.type === "TheodoreDirector_MergeVideos");
            Cr(k, (S) => {
              var w, y;
              d.value = JSON.stringify(S, null, 2), this.setDirtyCanvas(!0, !0), (y = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || y.call(w, !0, !0);
            }, !0, _ ? r : void 0, p ? o : void 0, a.display_name);
          } catch (k) {
            window.alert(`Theodore Director: ${k instanceof Error ? k.message : String(k)}`);
          }
        }), this.size = [Math.max(((u = this.size) == null ? void 0 : u[0]) ?? 300, 360), 110]);
      };
    }
  });
}
Ar();
