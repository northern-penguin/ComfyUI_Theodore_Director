var Ee, M, xt, de, Ye, vt, yt, Me, ke, ge, wt, qe, Be, He, Te = {}, Ie = [], Jt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ne = Array.isArray;
function ie(e, t) {
  for (var o in t) e[o] = t[o];
  return e;
}
function We(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Kt(e, t, o) {
  var n, d, i, a = {};
  for (i in t) i == "key" ? n = t[i] : i == "ref" ? d = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ee.call(arguments, 2) : o), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return ze(e, a, n, d, null);
}
function ze(e, t, o, n, d) {
  var i = { type: e, props: t, key: o, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: d ?? ++xt, __i: -1, __u: 0 };
  return d == null && M.vnode != null && M.vnode(i), i;
}
function Re(e) {
  return e.children;
}
function Se(e, t) {
  this.props = e, this.context = t;
}
function ue(e, t) {
  if (t == null) return e.__ ? ue(e.__, e.__i + 1) : null;
  for (var o; t < e.__k.length; t++) if ((o = e.__k[t]) != null && o.__e != null) return o.__e;
  return typeof e.type == "function" ? ue(e) : null;
}
function Gt(e) {
  if (e.__P && e.__d) {
    var t = e.__v, o = t.__e, n = [], d = [], i = ie({}, t);
    i.__v = t.__v + 1, M.vnode && M.vnode(i), Je(e.__P, i, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [o] : null, n, o ?? ue(t), !!(32 & t.__u), d), i.__v = t.__v, i.__.__k[i.__i] = i, Ct(n, i, d), t.__e = t.__ = null, i.__e != o && kt(i);
  }
}
function kt(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), kt(e);
}
function Ze(e) {
  (!e.__d && (e.__d = !0) && de.push(e) && !je.__r++ || Ye != M.debounceRendering) && ((Ye = M.debounceRendering) || vt)(je);
}
function je() {
  try {
    for (var e, t = 1; de.length; ) de.length > t && de.sort(yt), e = de.shift(), t = de.length, Gt(e);
  } finally {
    de.length = je.__r = 0;
  }
}
function zt(e, t, o, n, d, i, a, p, b, c, m) {
  var h, l, f, w, $, y, C = n && n.__k || Ie, k = t.length;
  for (b = Qt(o, t, C, b, k), h = 0; h < k; h++) (f = o.__k[h]) != null && (l = f.__i != -1 && C[f.__i] || Te, f.__i = h, y = Je(e, f, l, d, i, a, p, b, c, m), w = f.__e, f.ref && l.ref != f.ref && (l.ref && Ke(l.ref, null, f), m.push(f.ref, f.__c || w, f)), $ == null && w != null && ($ = w), 4 & f.__u ? (b = St(f, b, e), l.__e && (l.__e = null)) : typeof f.type == "function" && y !== void 0 ? b = y : w && (b = w.nextSibling), f.__u &= -7);
  return o.__e = $, b;
}
function Qt(e, t, o, n, d) {
  var i, a, p, b, c, m = o.length, h = m, l = 0;
  for (e.__k = new Array(d), i = 0; i < d; i++) (a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = e.__k[i] = ze(null, a, null, null, null) : Ne(a) ? a = e.__k[i] = ze(Re, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? a = e.__k[i] = ze(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : e.__k[i] = a, b = i + l, a.__ = e, a.__b = e.__b + 1, p = null, (c = a.__i = Xt(a, o, b, h)) != -1 && (h--, (p = o[c]) && (p.__u |= 2)), p == null || p.__v == null ? (c == -1 && (d > m ? l-- : d < m && l++), typeof a.type != "function" && (a.__u |= 4)) : c != b && (c == b - 1 ? l-- : c == b + 1 ? l++ : (c > b ? l-- : l++, a.__u |= 4))) : e.__k[i] = null;
  if (h) for (i = 0; i < m; i++) (p = o[i]) != null && (2 & p.__u) == 0 && (p.__e == n && (n = ue(p)), It(p, p));
  return n;
}
function St(e, t, o) {
  var n, d;
  if (typeof e.type == "function") {
    for (n = e.__k, d = 0; n && d < n.length; d++) n[d] && (n[d].__ = e, t = St(n[d], t, o));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = ue(e)), t = o.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Xt(e, t, o, n) {
  var d, i, a, p = e.key, b = e.type, c = t[o], m = c != null && (2 & c.__u) == 0;
  if (c === null && p == null || m && p == c.key && b == c.type) return o;
  if (n > (m ? 1 : 0)) {
    for (d = o - 1, i = o + 1; d >= 0 || i < t.length; ) if ((c = t[a = d >= 0 ? d-- : i++]) != null && (2 & c.__u) == 0 && p == c.key && b == c.type) return a;
  }
  return -1;
}
function et(e, t, o) {
  t[0] == "-" ? e.setProperty(t, o ?? "") : e[t] = o == null ? "" : typeof o != "number" || Jt.test(t) ? o : o + "px";
}
function we(e, t, o, n, d) {
  var i, a;
  e: if (t == "style") if (typeof o == "string") e.style.cssText = o;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (t in n) o && t in o || et(e.style, t, "");
    if (o) for (t in o) n && o[t] == n[t] || et(e.style, t, o[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(wt, "$1")), a = t.toLowerCase(), t = a in e || t == "onFocusOut" || t == "onFocusIn" ? a.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = o, o ? n ? o[ge] = n[ge] : (o[ge] = qe, e.addEventListener(t, i ? He : Be, i)) : e.removeEventListener(t, i ? He : Be, i);
  else {
    if (d == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = o ?? "";
      break e;
    } catch {
    }
    typeof o == "function" || (o == null || o === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && o == 1 ? "" : o));
  }
}
function tt(e) {
  return function(t) {
    if (this.l) {
      var o = this.l[t.type + e];
      if (t[ke] == null) t[ke] = qe++;
      else if (t[ke] < o[ge]) return;
      return o(M.event ? M.event(t) : t);
    }
  };
}
function Je(e, t, o, n, d, i, a, p, b, c) {
  var m, h, l, f, w, $, y, C, k, U, x, I, R, J, G, _, A = t.type;
  if (t.constructor !== void 0) return null;
  128 & o.__u && (b = !!(32 & o.__u), i = [p = t.__e = o.__e]), (m = M.__b) && m(t);
  e: if (typeof A == "function") {
    h = a.length;
    try {
      if (k = t.props, U = A.prototype && A.prototype.render, x = (m = A.contextType) && n[m.__c], I = m ? x ? x.props.value : m.__ : n, o.__c ? C = (l = t.__c = o.__c).__ = l.__E : (U ? t.__c = l = new A(k, I) : (t.__c = l = new Se(k, I), l.constructor = A, l.render = Zt), x && x.sub(l), l.state || (l.state = {}), l.__n = n, f = l.__d = !0, l.__h = [], l._sb = []), U && l.__s == null && (l.__s = l.state), U && A.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = ie({}, l.__s)), ie(l.__s, A.getDerivedStateFromProps(k, l.__s))), w = l.props, $ = l.state, l.__v = t, f) U && A.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), U && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (U && A.getDerivedStateFromProps == null && k !== w && l.componentWillReceiveProps != null && l.componentWillReceiveProps(k, I), t.__v == o.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(k, l.__s, I) === !1) {
          t.__v != o.__v && (l.props = k, l.state = l.__s, l.__d = !1), t.__e = o.__e, t.__k = o.__k, t.__k.some(function(D) {
            D && (D.__ = t);
          }), Ie.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && a.push(l), p = ue(o);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(k, l.__s, I), U && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(w, $, y);
        });
      }
      if (l.context = I, l.props = k, l.__P = e, l.__e = !1, R = M.__r, J = 0, U) l.state = l.__s, l.__d = !1, R && R(t), m = l.render(l.props, l.state, l.context), Ie.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, R && R(t), m = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++J < 25);
      l.state = l.__s, l.getChildContext != null && (n = ie(ie({}, n), l.getChildContext())), U && !f && l.getSnapshotBeforeUpdate != null && (y = l.getSnapshotBeforeUpdate(w, $)), G = m != null && m.type === Re && m.key == null ? Tt(m.props.children) : m, p = zt(e, Ne(G) ? G : [G], t, o, n, d, i, a, p, b, c), l.base = t.__e, t.__u &= -161, l.__h.length && a.push(l), C && (l.__E = l.__ = null);
    } catch (D) {
      if (a.length = h, t.__v = null, b || i != null) {
        if (D.then) {
          for (t.__u |= b ? 160 : 128; p && p.nodeType == 8 && p.nextSibling; ) p = p.nextSibling;
          i != null && (i[i.indexOf(p)] = null), t.__e = p;
        } else if (i != null) for (_ = i.length; _--; ) We(i[_]);
      } else t.__e = o.__e;
      t.__k == null && (t.__k = o.__k || []), D.then || $t(t), M.__e(D, t, o);
    }
  } else i == null && t.__v == o.__v ? (t.__k = o.__k, t.__e = o.__e) : p = t.__e = Yt(o.__e, t, o, n, d, i, a, b, c);
  return (m = M.diffed) && m(t), 128 & t.__u ? void 0 : p;
}
function $t(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some($t));
}
function Ct(e, t, o) {
  for (var n = 0; n < o.length; n++) Ke(o[n], o[++n], o[++n]);
  M.__c && M.__c(t, e), e.some(function(d) {
    try {
      e = d.__h, d.__h = [], e.some(function(i) {
        i.call(d);
      });
    } catch (i) {
      M.__e(i, d.__v);
    }
  });
}
function Tt(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : Ne(e) ? e.map(Tt) : e.constructor !== void 0 ? null : ie({}, e);
}
function Yt(e, t, o, n, d, i, a, p, b) {
  var c, m, h, l, f, w, $, y = o.props || Te, C = t.props, k = t.type;
  if (k == "svg" ? d = "http://www.w3.org/2000/svg" : k == "math" ? d = "http://www.w3.org/1998/Math/MathML" : d || (d = "http://www.w3.org/1999/xhtml"), i != null) {
    for (c = 0; c < i.length; c++) if ((f = i[c]) && "setAttribute" in f == !!k && (k ? f.localName == k : f.nodeType == 3)) {
      e = f, i[c] = null;
      break;
    }
  }
  if (e == null) {
    if (k == null) return document.createTextNode(C);
    e = document.createElementNS(d, k, C.is && C), p && (M.__m && M.__m(t, i), p = !1), i = null;
  }
  if (k == null) y === C || p && e.data == C || (e.data = C);
  else {
    if (i = k == "textarea" && C.defaultValue != null ? null : i && Ee.call(e.childNodes), !p && i != null) for (y = {}, c = 0; c < e.attributes.length; c++) y[(f = e.attributes[c]).name] = f.value;
    for (c in y) f = y[c], c == "dangerouslySetInnerHTML" ? h = f : c == "children" || c in C || c == "value" && "defaultValue" in C || c == "checked" && "defaultChecked" in C || we(e, c, null, f, d);
    for (c in C) f = C[c], c == "children" ? l = f : c == "dangerouslySetInnerHTML" ? m = f : c == "value" ? w = f : c == "checked" ? $ = f : p && typeof f != "function" || y[c] === f || we(e, c, f, y[c], d);
    if (m) p || h && (m.__html == h.__html || m.__html == e.innerHTML) || (e.innerHTML = m.__html), t.__k = [];
    else if (h && (e.innerHTML = ""), zt(t.type == "template" ? e.content : e, Ne(l) ? l : [l], t, o, n, k == "foreignObject" ? "http://www.w3.org/1999/xhtml" : d, i, a, i ? i[0] : o.__k && ue(o, 0), p, b), i != null) for (c = i.length; c--; ) We(i[c]);
    p && k != "textarea" || (c = "value", k == "progress" && w == null ? e.removeAttribute("value") : w != null && (w !== e[c] || k == "progress" && !w || k == "option" && w != y[c]) && we(e, c, w, y[c], d), c = "checked", $ != null && $ != e[c] && we(e, c, $, y[c], d));
  }
  return e;
}
function Ke(e, t, o) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), n && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (d) {
    M.__e(d, o);
  }
}
function It(e, t, o) {
  var n, d;
  if (M.unmount && M.unmount(e), (n = e.ref) && (n.current && n.current != e.__e || Ke(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      M.__e(i, t);
    }
    n.base = n.__P = n.__n = null;
  }
  if (n = e.__k) for (d = 0; d < n.length; d++) n[d] && It(n[d], t, o || typeof e.type != "function");
  o || We(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Zt(e, t, o) {
  return this.constructor(e, o);
}
function rt(e, t, o) {
  var n, d, i, a;
  t == document && (t = document.documentElement), M.__ && M.__(e, t), d = (n = !1) ? null : t.__k, i = [], a = [], Je(t, e = t.__k = Kt(Re, null, [e]), d || Te, Te, t.namespaceURI, d ? null : t.firstChild ? Ee.call(t.childNodes) : null, i, d ? d.__e : t.firstChild, n, a), Ct(i, e, a), e.props.children = null;
}
Ee = Ie.slice, M = { __e: function(e, t, o, n) {
  for (var d, i, a; t = t.__; ) if ((d = t.__c) && !d.__) try {
    if ((i = d.constructor) && i.getDerivedStateFromError != null && (d.setState(i.getDerivedStateFromError(e)), a = d.__d), d.componentDidCatch != null && (d.componentDidCatch(e, n || {}), a = d.__d), a) return d.__E = d;
  } catch (p) {
    e = p;
  }
  throw e;
} }, xt = 0, Se.prototype.setState = function(e, t) {
  var o;
  o = this.__s != null && this.__s != this.state ? this.__s : this.__s = ie({}, this.state), typeof e == "function" && (e = e(ie({}, o), this.props)), e && ie(o, e), e != null && this.__v && (t && this._sb.push(t), Ze(this));
}, Se.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ze(this));
}, Se.prototype.render = Re, de = [], vt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, yt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, je.__r = 0, Me = Math.random().toString(8), ke = "__d" + Me, ge = "__a" + Me, wt = /(PointerCapture)$|Capture$/i, qe = 0, Be = tt(!1), He = tt(!0);
var er = 0;
function r(e, t, o, n, d, i) {
  t || (t = {});
  var a, p, b = t;
  if ("ref" in b) for (p in b = {}, t) p == "ref" ? a = t[p] : b[p] = t[p];
  var c = { type: e, props: b, key: o, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --er, __i: -1, __u: 0, __source: d, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (p in a) b[p] === void 0 && (b[p] = a[p]);
  return M.vnode && M.vnode(c), c;
}
var be, H, Fe, ot, Ae = 0, jt = [], q = M, nt = q.__b, it = q.__r, st = q.diffed, dt = q.__c, at = q.unmount, lt = q.__;
function Ge(e, t) {
  q.__h && q.__h(H, e, Ae || t), Ae = 0;
  var o = H.__H || (H.__H = { __: [], __h: [] });
  return e >= o.__.length && o.__.push({}), o.__[e];
}
function j(e) {
  return Ae = 1, tr(Pt, e);
}
function tr(e, t, o) {
  var n = Ge(be++, 2);
  if (n.t = e, !n.__c && (n.__ = [Pt(void 0, t), function(p) {
    var b = n.__N ? n.__N[0] : n.__[0], c = n.t(b, p);
    b !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = H, !H.__f)) {
    var d = function(p, b, c) {
      if (!n.__c.__H) return !0;
      var m = !1, h = n.__c.props !== p;
      if (n.__c.__H.__.some(function(f) {
        if (f.__N) {
          m = !0;
          var w = f.__[0];
          f.__ = f.__N, f.__N = void 0, w !== f.__[0] && (h = !0);
        }
      }), i) {
        var l = i.call(this, p, b, c);
        return m ? l || h : l;
      }
      return !m || h;
    };
    H.__f = !0;
    var i = H.shouldComponentUpdate, a = H.componentWillUpdate;
    H.componentWillUpdate = function(p, b, c) {
      if (this.__e) {
        var m = i;
        i = void 0, d(p, b, c), i = m;
      }
      a && a.call(this, p, b, c);
    }, H.shouldComponentUpdate = d;
  }
  return n.__N || n.__;
}
function _e(e, t) {
  var o = Ge(be++, 3);
  !q.__s && At(o.__H, t) && (o.__ = e, o.u = t, H.__H.__h.push(o));
}
function Qe(e) {
  return Ae = 5, fe(function() {
    return { current: e };
  }, []);
}
function fe(e, t) {
  var o = Ge(be++, 7);
  return At(o.__H, t) && (o.__ = e(), o.__H = t, o.__h = e), o.__;
}
function rr() {
  for (var e; e = jt.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some($e), t.__h.some(Ve), t.__h = [];
    } catch (o) {
      t.__h = [], q.__e(o, e.__v);
    }
  }
}
q.__b = function(e) {
  H = null, nt && nt(e);
}, q.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), lt && lt(e, t);
}, q.__r = function(e) {
  it && it(e), be = 0;
  var t = (H = e.__c).__H;
  t && (Fe === H ? (t.__h = [], H.__h = [], t.__.some(function(o) {
    o.__N && (o.__ = o.__N), o.u = o.__N = void 0;
  })) : (t.__h.some($e), t.__h.some(Ve), t.__h = [], be = 0)), Fe = H;
}, q.diffed = function(e) {
  st && st(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (jt.push(t) !== 1 && ot === q.requestAnimationFrame || ((ot = q.requestAnimationFrame) || or)(rr)), t.__H.__.some(function(o) {
    o.u && (o.__H = o.u, o.u = void 0);
  })), Fe = H = null;
}, q.__c = function(e, t) {
  t.some(function(o) {
    try {
      o.__h.some($e), o.__h = o.__h.filter(function(n) {
        return !n.__ || Ve(n);
      });
    } catch (n) {
      t.some(function(d) {
        d.__h && (d.__h = []);
      }), t = [], q.__e(n, o.__v);
    }
  }), dt && dt(e, t);
}, q.unmount = function(e) {
  at && at(e);
  var t, o = e.__c;
  o && o.__H && (o.__H.__.some(function(n) {
    try {
      $e(n);
    } catch (d) {
      t = d;
    }
  }), o.__H = void 0, t && q.__e(t, o.__v));
};
var ct = typeof requestAnimationFrame == "function";
function or(e) {
  var t, o = function() {
    clearTimeout(n), ct && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(o, 35);
  ct && (t = requestAnimationFrame(o));
}
function $e(e) {
  var t = H, o = e.__c;
  typeof o == "function" && (e.__c = void 0, o()), H = t;
}
function Ve(e) {
  var t = H;
  e.__c = e.__(), H = t;
}
function At(e, t) {
  return !e || e.length !== t.length || t.some(function(o, n) {
    return o !== e[n];
  });
}
function Pt(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const nr = {
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
function Et(e) {
  var n;
  const t = ((n = e.name.split(".").pop()) == null ? void 0 : n.toLocaleLowerCase()) ?? "";
  if (e.name.includes(".")) return nr[t] ?? null;
  const o = e.type.split("/", 1)[0];
  return o === "image" || o === "video" || o === "audio" ? o : null;
}
function ir(e) {
  const d = e.replace(/\.[^.]+$/, "").replace(/^\s*\d+\s*[-_. ]+/, "").normalize("NFKC").replace(/[\s-]+/g, "_").replace(/[{}]/g, "").replace(/_+/g, "_").replace(/^[_\.]+|[_\.]+$/g, "").slice(0, 96) || "asset";
  return d.toLocaleLowerCase().endsWith(".audio") ? `${d}_asset` : d;
}
function sr(e, t) {
  const o = new Set(Array.from(t, (d) => d.toLocaleLowerCase()));
  if (!o.has(e.toLocaleLowerCase())) return e;
  let n = 2;
  for (; o.has(`${e}_${n}`.toLocaleLowerCase()); ) n += 1;
  return `${e}_${n}`;
}
function dr(e, t, o) {
  const n = e.trim().toLocaleLowerCase();
  return !e.trim() || /[\s{}]/.test(e) || n.endsWith(".audio") ? "invalid" : Array.from(t, (i) => i.toLocaleLowerCase()).includes(n) || Array.from(o, (i) => i.trim().toLocaleLowerCase()).filter((i) => i === n).length > 1 ? "duplicate" : null;
}
function ar(e, t, o) {
  const n = new Set(Array.from(t)), d = [], i = [];
  for (const a of e) {
    const p = Et(a);
    if (!p) {
      i.push(a.name);
      continue;
    }
    const b = sr(ir(a.name), n);
    n.add(b), d.push({ id: o(), file: a, alias: b, kind: p, durationSeconds: p === "image" ? null : 2, includeVideoAudio: !1, status: "pending", error: "" });
  }
  return { drafts: d, rejected: i };
}
function lr(e, t, o) {
  return {
    id: e.id,
    alias: e.alias.trim(),
    kind: e.kind,
    path: t,
    enabled: !0,
    fixed: !1,
    fixedOrder: o,
    shotIds: [],
    includeVideoAudio: e.kind === "video" && e.includeVideoAudio,
    durationSeconds: e.kind === "image" ? null : e.durationSeconds,
    audioDurationSeconds: null,
    fingerprint: ""
  };
}
function cr(e, t) {
  return t === "image" ? Promise.resolve(null) : new Promise((o) => {
    const n = document.createElement(t === "video" ? "video" : "audio"), d = URL.createObjectURL(e);
    let i = !1;
    const a = (p) => {
      i || (i = !0, n.onloadedmetadata = null, n.onerror = null, n.removeAttribute("src"), n.load(), URL.revokeObjectURL(d), o(p));
    };
    n.preload = "metadata", n.onloadedmetadata = () => a(Number.isFinite(n.duration) && n.duration > 0 ? Math.round(n.duration * 10) / 10 : null), n.onerror = () => a(null), n.src = d;
  });
}
const pr = () => `asset_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`, Oe = (e, t) => t === "zh" ? { image: "图片", video: "视频", audio: "音频" }[e] : e;
function hr({ language: e, assets: t, projectName: o, onClose: n, onImported: d, uploadFile: i }) {
  const [a, p] = j([]), [b, c] = j([]), [m, h] = j(!1), [l, f] = j(!1), w = Qe([]);
  w.current = a;
  const $ = t.map((_) => _.alias), y = (_, A) => p((D) => D.map((P) => P.id === _ ? { ...P, ...A } : P)), C = (_) => {
    if (!_.length || l) return;
    const A = [...$, ...w.current.map((P) => P.alias)], D = ar(_, A, pr);
    D.rejected.length && c((P) => [...P, ...D.rejected]), D.drafts.length && (p((P) => [...P, ...D.drafts]), D.drafts.forEach((P) => {
      cr(P.file, P.kind).then((Q) => {
        Q != null && p((K) => K.map((V) => V.id === P.id && V.kind === P.kind && V.durationSeconds === 2 ? { ...V, durationSeconds: Q } : V));
      });
    }));
  }, U = a.filter((_) => _.status !== "imported").map((_) => _.alias), x = (_) => {
    if (_.status === "imported") return null;
    const A = dr(_.alias, $, U);
    return A === "invalid" ? e === "zh" ? "别名为空、包含空白/花括号，或使用了保留后缀 .audio" : "Alias is empty, contains whitespace/braces, or uses reserved .audio" : A === "duplicate" ? e === "zh" ? "别名与素材库或本批次其他素材重复" : "Alias duplicates an existing or staged asset" : Et(_.file) !== _.kind ? e === "zh" ? "文件扩展名与所选类型不匹配" : "The extension does not match the selected kind" : _.kind !== "image" && (_.durationSeconds == null || _.durationSeconds <= 0) ? e === "zh" ? "视频或音频时长必须大于 0" : "Video/audio duration must be greater than 0" : null;
  }, I = async () => {
    const A = w.current.filter((K) => K.status === "pending" || K.status === "error");
    if (!A.length) return;
    if (A.some(x)) {
      window.alert(e === "zh" ? "请先修正列表中标红的项目。" : "Fix the highlighted rows before importing.");
      return;
    }
    f(!0);
    const D = Math.max(0, ...t.map((K) => K.fixedOrder)) + 1;
    let P = 0;
    const Q = async () => {
      for (; P < A.length; ) {
        const K = P++, V = A[K];
        y(V.id, { status: "uploading", error: "" });
        try {
          const ne = await i(o, V.kind, V.file);
          d([lr(V, ne, D + K)]), y(V.id, { status: "imported", error: "" });
        } catch (ne) {
          y(V.id, { status: "error", error: String(ne) });
        }
      }
    };
    await Promise.all(Array.from({ length: Math.min(2, A.length) }, Q)), f(!1);
  }, R = a.filter((_) => _.status === "imported").length, J = a.filter((_) => _.status === "error").length, G = a.length - R;
  return /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-asset-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": e === "zh" ? "批量导入素材" : "Batch import assets", children: [
    /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: e === "zh" ? "批量导入素材" : "Batch import assets" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "可混合选择图片、视频和音频；确认列表后再写入素材库。" : "Select images, videos, and audio together; review before uploading." })
      ] }),
      /* @__PURE__ */ r("button", { disabled: l, "aria-label": e === "zh" ? "关闭" : "Close", onClick: n, children: "×" })
    ] }),
    /* @__PURE__ */ r("label", { class: `td-asset-dropzone ${m ? "dragging" : ""}`, onDragEnter: (_) => {
      _.preventDefault(), h(!0);
    }, onDragOver: (_) => _.preventDefault(), onDragLeave: (_) => {
      _.currentTarget === _.target && h(!1);
    }, onDrop: (_) => {
      var A;
      _.preventDefault(), h(!1), C(Array.from(((A = _.dataTransfer) == null ? void 0 : A.files) ?? []));
    }, children: [
      /* @__PURE__ */ r("strong", { children: e === "zh" ? "拖拽素材到这里，或点击选择多个文件" : "Drop media here, or click to select multiple files" }),
      /* @__PURE__ */ r("span", { children: e === "zh" ? "支持图片、视频、音频混合导入" : "Mixed image, video, and audio selection is supported" }),
      /* @__PURE__ */ r("input", { type: "file", multiple: !0, accept: "image/*,video/*,audio/*", disabled: l, onChange: (_) => {
        C(Array.from(_.currentTarget.files ?? [])), _.currentTarget.value = "";
      } })
    ] }),
    b.length > 0 && /* @__PURE__ */ r("div", { class: "td-asset-batch-warning", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `已跳过 ${b.length} 个不支持的文件：${b.join("、")}` : `Skipped ${b.length} unsupported files: ${b.join(", ")}` }),
      /* @__PURE__ */ r("button", { onClick: () => c([]), children: "×" })
    ] }),
    /* @__PURE__ */ r("div", { class: "td-asset-batch-summary", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `共 ${a.length} 项 · 已导入 ${R} · 待处理 ${G}${J ? ` · 失败 ${J}` : ""}` : `${a.length} items · ${R} imported · ${G} pending${J ? ` · ${J} failed` : ""}` }),
      /* @__PURE__ */ r("button", { disabled: l || !a.length, onClick: () => p([]), children: e === "zh" ? "清空列表" : "Clear list" })
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
      a.map((_) => {
        const A = x(_), D = l || _.status === "imported" || _.status === "uploading";
        return /* @__PURE__ */ r("div", { class: `td-asset-batch-row ${A || _.status === "error" ? "invalid" : ""} ${_.status === "imported" ? "imported" : ""}`, children: [
          /* @__PURE__ */ r("div", { class: "td-asset-batch-file", children: [
            /* @__PURE__ */ r("strong", { title: _.file.name, children: _.file.name }),
            /* @__PURE__ */ r("small", { children: [
              (_.file.size / 1024 / 1024).toFixed(1),
              " MB · ",
              _.status === "pending" ? e === "zh" ? "待导入" : "Pending" : _.status === "uploading" ? e === "zh" ? "上传中" : "Uploading" : _.status === "imported" ? e === "zh" ? "已完成" : "Imported" : e === "zh" ? "失败" : "Failed"
            ] }),
            (A || _.error) && /* @__PURE__ */ r("em", { title: A || _.error, children: A || _.error })
          ] }),
          /* @__PURE__ */ r("input", { disabled: D, value: _.alias, onInput: (P) => y(_.id, { alias: P.currentTarget.value, status: "pending", error: "" }) }),
          /* @__PURE__ */ r("select", { disabled: D, value: _.kind, onChange: (P) => {
            const Q = P.currentTarget.value;
            y(_.id, { kind: Q, durationSeconds: Q === "image" ? null : _.durationSeconds ?? 2, includeVideoAudio: Q === "video" && _.includeVideoAudio, status: "pending", error: "" });
          }, children: [
            /* @__PURE__ */ r("option", { value: "image", children: Oe("image", e) }),
            /* @__PURE__ */ r("option", { value: "video", children: Oe("video", e) }),
            /* @__PURE__ */ r("option", { value: "audio", children: Oe("audio", e) })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", disabled: D || _.kind === "image", value: _.durationSeconds ?? "", onInput: (P) => y(_.id, { durationSeconds: P.currentTarget.value ? Number(P.currentTarget.value) : null, status: "pending", error: "" }) }),
            /* @__PURE__ */ r("span", { children: _.kind === "image" ? "—" : e === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-audio", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", disabled: D || _.kind !== "video", checked: _.kind === "video" && _.includeVideoAudio, onChange: (P) => y(_.id, { includeVideoAudio: P.currentTarget.checked }) }),
            /* @__PURE__ */ r("span", { children: _.kind === "video" ? _.includeVideoAudio ? e === "zh" ? "开" : "ON" : e === "zh" ? "关" : "OFF" : "—" })
          ] }),
          /* @__PURE__ */ r("button", { class: "danger", disabled: D, onClick: () => p((P) => P.filter((Q) => Q.id !== _.id)), children: e === "zh" ? "移除" : "Remove" })
        ] }, _.id);
      })
    ] }),
    /* @__PURE__ */ r("footer", { children: [
      /* @__PURE__ */ r("button", { disabled: l, onClick: n, children: e === "zh" ? "关闭" : "Close" }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: l || !a.some((_) => _.status === "pending" || _.status === "error"), onClick: () => void I(), children: l ? e === "zh" ? "正在导入…" : "Importing…" : J ? e === "zh" ? "重试失败项" : "Retry failed" : e === "zh" ? "开始导入" : "Start import" })
    ] })
  ] }) });
}
const Nt = String.raw`\{\{ref:([^{}]+)}}`;
function pt() {
  return new RegExp(Nt, "g");
}
function Rt(e, t) {
  const o = /* @__PURE__ */ new Map();
  for (const n of e.assets)
    n.enabled && n.path.trim() && (!n.shotIds.length || n.shotIds.includes(t.id)) && !t.disabledAssetIds.includes(n.id) && o.set(n.alias, n);
  return o;
}
function Dt(e, t, o) {
  const n = o.trim(), d = n.endsWith(".audio"), i = d ? n.slice(0, -6) : n, a = Rt(e, t).get(i);
  return a ? !d || a.kind === "video" && a.includeVideoAudio : !1;
}
function ht(e, t) {
  const o = e.shots.filter((n) => n.enabled);
  return o.length > 0 && o.every((n) => Dt(e, n, t));
}
function Lt(e, t) {
  const o = [], n = Rt(e, t), d = [e.promptPrefix, t.prompt, e.promptSuffix].filter(Boolean).join(`
`), i = [...d.matchAll(pt())].map((x) => x[1].trim()), a = [], p = /* @__PURE__ */ new Set(), b = (x) => {
    p.has(x.id) || (p.add(x.id), a.push(x));
  };
  [...n.values()].filter((x) => x.fixed).sort((x, I) => x.fixedOrder - I.fixedOrder || x.alias.localeCompare(I.alias)).forEach(b);
  for (const x of i) {
    const I = x.endsWith(".audio") ? x.slice(0, -6) : x, R = n.get(I);
    if (!R) {
      o.push(`未找到或已禁用素材：${x}`);
      continue;
    }
    x.endsWith(".audio") && (R.kind !== "video" || !R.includeVideoAudio) && o.push(`视频伴音未启用：${x}`), b(R);
  }
  const c = a.filter((x) => x.kind === "image"), m = a.filter((x) => x.kind === "video"), h = m.filter((x) => x.includeVideoAudio), l = a.filter((x) => x.kind === "audio"), f = h.length + l.length, w = c.length + m.length + l.length;
  c.length > 9 && o.push(`参考图 ${c.length}/9，超出 H3 上限`), m.length > 3 && o.push(`参考视频 ${m.length}/3，超出 H3 上限`), f > 3 && o.push(`有效音频 ${f}/3，超出 H3 总上限`), w > 12 && o.push(`混合文件 ${w}/12，超出 H3 上限`), f && !c.length && !m.length && o.push("音频参考不能单独使用");
  const $ = m.filter((x) => typeof x.durationSeconds == "number");
  for (const x of m) (x.durationSeconds == null || x.durationSeconds < 2 || x.durationSeconds > 15) && o.push(`视频 ${x.alias} 的时长必须为 2–15 秒`);
  $.reduce((x, I) => x + (I.durationSeconds ?? 0), 0) > 15 && o.push("参考视频总时长超过 15 秒");
  const y = [...h.map((x) => x.audioDurationSeconds ?? x.durationSeconds), ...l.map((x) => x.durationSeconds)];
  y.some((x) => x == null || x < 2 || x > 15) && o.push("每路有效音频时长必须为 2–15 秒"), y.reduce((x, I) => x + (I ?? 0), 0) > 15 && o.push("有效音频总时长超过 15 秒");
  const C = /* @__PURE__ */ new Map();
  c.forEach((x, I) => C.set(x.alias, `<Picture ${I + 1}>`)), m.forEach((x, I) => C.set(x.alias, `<Video ${I + 1}>`)), h.forEach((x, I) => C.set(`${x.alias}.audio`, `<Audio ${I + 1}>`)), l.forEach((x, I) => C.set(x.alias, `<Audio ${h.length + I + 1}>`));
  const k = d.replace(pt(), (x, I) => C.get(I.trim()) ?? x), U = [...C.entries()].map(([x, I]) => ({ label: I, alias: x, kind: I.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: k, errors: o, slots: U, mixedFiles: w, audioCount: f };
}
function ur(e) {
  var d, i, a, p, b, c;
  const t = [];
  (i = (d = e.project) == null ? void 0 : d.name) != null && i.trim() || t.push("Project name 不能为空"), (p = (a = e.project) == null ? void 0 : a.runId) != null && p.trim() || t.push("Run ID 不能为空"), (!Array.isArray(e.shots) || !e.shots.some((m) => m.enabled)) && t.push("至少需要一个启用分镜");
  const o = /* @__PURE__ */ new Set();
  for (const m of e.shots ?? [])
    (!((b = m.id) != null && b.trim()) || o.has(m.id)) && t.push(`分镜 ID 为空或重复：${m.id || "(空)"}`), o.add(m.id), m.durationSeconds > 0 || t.push(`分镜 ${m.id} 的时长必须大于 0`);
  const n = /* @__PURE__ */ new Set();
  for (const m of e.assets ?? []) {
    const h = (c = m.alias) == null ? void 0 : c.toLocaleLowerCase();
    (!m.alias || /[\s{}]/.test(m.alias) || m.alias.endsWith(".audio") || n.has(h)) && t.push(`素材别名无效或重复：${m.alias || "(空)"}`), n.add(h), m.enabled && !m.path && t.push(`素材 ${m.alias} 尚未选择文件`);
  }
  for (const m of e.shots.filter((h) => h.enabled)) t.push(...Lt(e, m).errors.map((h) => `${m.title}: ${h}`));
  return [...new Set(t)];
}
function mr(e, t) {
  const o = [], n = new RegExp(Nt, "g");
  let d = 0;
  for (const i of e.matchAll(n)) {
    const a = i.index ?? 0;
    a > d && o.push({ text: e.slice(d, a), reference: !1 }), o.push({ text: i[0], reference: !0, valid: t(i[1]) }), d = a + i[0].length;
  }
  return d < e.length && o.push({ text: e.slice(d), reference: !1 }), o;
}
function Ue({ value: e, rows: t, onInput: o, isReferenceValid: n }) {
  const d = Qe(null), i = mr(e, n), a = (p) => {
    d.current && (d.current.scrollTop = p.currentTarget.scrollTop, d.current.scrollLeft = p.currentTarget.scrollLeft);
  };
  return /* @__PURE__ */ r("span", { class: "td-highlight-textarea", children: [
    /* @__PURE__ */ r("pre", { ref: d, class: "td-highlight-backdrop", "aria-hidden": "true", children: [
      i.map((p, b) => p.reference ? /* @__PURE__ */ r("mark", { class: p.valid ? "valid" : "invalid", children: p.text }, b) : p.text),
      e.endsWith(`
`) && " "
    ] }),
    /* @__PURE__ */ r("textarea", { class: "td-highlight-input", rows: t, value: e, onInput: o, onScroll: a })
  ] });
}
const fr = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", postprocess: "后处理", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", postprocess: "Post-process", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function pe(e, t) {
  return fr[e][t];
}
function he(e) {
  return (Array.isArray(e.results) && e.results.length ? e.results : e.path ? [{ path: e.path, bytes: e.bytes, modifiedAt: e.modifiedAt, stage: e.stage, sourcePath: e.sourcePath, completedAt: e.completedAt }] : []).filter((o) => typeof o.path == "string" && o.path.trim().length > 0).sort((o, n) => (n.modifiedAt ?? 0) - (o.modifiedAt ?? 0));
}
function Mt(e, t) {
  const o = /_video_(\d+)/i.exec(e.replace(/\\/g, "/"));
  return o ? Number(o[1]) : t;
}
function gr(e) {
  return e.stage !== "second_pass";
}
function Pe({ src: e, alt: t }) {
  const o = Qe(null), [n, d] = j(!1);
  return _e(() => {
    const i = o.current;
    if (!i) return;
    if (!("IntersectionObserver" in window)) {
      d(!0);
      return;
    }
    const a = new IntersectionObserver((p) => {
      d(p.some((b) => b.isIntersecting));
    }, { rootMargin: "160px" });
    return a.observe(i), () => a.disconnect();
  }, []), /* @__PURE__ */ r("div", { class: "td-result-thumb", ref: o, children: n ? /* @__PURE__ */ r("video", { src: e, "aria-label": t, muted: !0, playsInline: !0, preload: "metadata", onLoadedMetadata: (i) => {
    const a = i.currentTarget;
    Number.isFinite(a.duration) && a.duration > 0.02 && (a.currentTime = Math.min(0.25, Math.max(0, a.duration - 0.05)));
  } }) : /* @__PURE__ */ r("span", { children: "…" }) });
}
function re(e, t) {
  const o = e.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!o || o.startsWith("/") || /^[A-Za-z]:\//.test(o)) return null;
  const n = o.split("/").filter(Boolean), d = n.pop();
  if (!d || n.some((a) => a === "..")) return null;
  const i = new URLSearchParams({ filename: d, type: t });
  return n.length && i.set("subfolder", n.join("/")), `/view?${i.toString()}`;
}
function br(e) {
  return re(e, "input");
}
function se(e) {
  return e.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function ut({ asset: e, compact: t = !1 }) {
  const o = br(e.path), n = `td-media-preview ${t ? "compact" : ""}`;
  return o ? e.kind === "image" ? /* @__PURE__ */ r("div", { class: n, children: /* @__PURE__ */ r("img", { src: o, alt: e.alias, loading: "lazy" }) }) : e.kind === "video" ? /* @__PURE__ */ r("div", { class: n, children: /* @__PURE__ */ r("video", { src: o, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ r("div", { class: n, children: /* @__PURE__ */ r("audio", { src: o, controls: !0, preload: "metadata" }) }) : e.path ? /* @__PURE__ */ r("div", { class: `${n} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ r("div", { class: `${n} empty`, children: "尚未选择素材 / No media selected" });
}
function Ft(e) {
  let t = 0;
  return e.shots.map((o, n) => {
    const d = {
      key: `${n}:${o.id}`,
      shot: o,
      sourceIndex: n,
      activeIndex: o.enabled ? t : -1
    };
    return o.enabled && (t += 1), d;
  });
}
function _r(e, t, o) {
  return e.filter((n) => n.shot.enabled && t[n.key]).map((n) => ({
    shotId: n.shot.id,
    activeIndex: n.activeIndex,
    path: o[n.key] ?? ""
  }));
}
function xr(e, t, o) {
  const n = {};
  return e.forEach((d) => {
    const i = d.sourceIndex + 1;
    n[d.key] = d.shot.enabled && i >= t && i <= o;
  }), n;
}
function vr(e, t, o) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId, shotId: t, activeIndex: String(o) }).toString()}`;
}
function yr(e, t) {
  return e === "second_pass" ? t === "zh" ? "二采" : "2nd pass" : e === "first_pass" ? t === "zh" ? "一采" : "1st pass" : t === "zh" ? "旧结果" : "Legacy";
}
function wr({ plan: e, language: t, queueSecondPass: o }) {
  const n = fe(() => Ft(e), [e]), [d, i] = j({}), [a, p] = j({}), [b, c] = j(null), [m, h] = j(0);
  _e(() => {
    let f = !1;
    const w = {};
    return n.forEach(($) => {
      w[$.key] = { loading: !0, response: { found: !1, results: [] } };
    }), i(w), n.forEach(($) => {
      fetch(vr(e, $.shot.id, $.activeIndex)).then(async (y) => {
        const C = await y.json();
        if (!y.ok) throw new Error(C.error || `HTTP ${y.status}`);
        f || i((k) => ({ ...k, [$.key]: { loading: !1, response: C } }));
      }).catch((y) => {
        f || i((C) => ({ ...C, [$.key]: { loading: !1, response: { found: !1, results: [], error: String(y) } } }));
      });
    }), () => {
      f = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((f) => f.id).join("|"), m]);
  const l = async (f, w) => {
    if (o) {
      p(($) => ({ ...$, [w]: { state: "queued" } }));
      try {
        await o({
          plan: e,
          shotId: f,
          sourcePath: w,
          requestId: `td2_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`
        }), p(($) => ({ ...$, [w]: { state: "done" } })), h(($) => $ + 1);
      } catch ($) {
        p((y) => ({ ...y, [w]: { state: "error", message: String($ instanceof Error ? $.message : $) } }));
      }
    }
  };
  return /* @__PURE__ */ r("section", { class: "td-postprocess td-second-pass-panel", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "单独二采" : "Standalone second pass" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "从满意的一采抽卡直接执行二采，不重跑一采，也不启动 Impact 循环。" : "Refine a selected first-pass result without rerunning the first pass or the Impact loop." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: /* @__PURE__ */ r("button", { onClick: () => h((f) => f + 1), children: [
        "↻ ",
        t === "zh" ? "刷新结果" : "Refresh"
      ] }) })
    ] }),
    !o && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "当前工作流缺少后处理二采支流，请重新载入仓库中的 V7 导播台示例工作流。" : "This workflow does not contain the standalone second-pass branch. Reload the V7 example workflow from the repository." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: n.map((f) => {
      const w = d[f.key], $ = he((w == null ? void 0 : w.response) ?? { results: [] });
      return /* @__PURE__ */ r("article", { class: "td-post-shot", children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("span", { children: [
            /* @__PURE__ */ r("strong", { children: f.shot.id }),
            /* @__PURE__ */ r("em", { children: f.shot.title })
          ] }),
          /* @__PURE__ */ r("span", { children: [
            f.shot.durationSeconds,
            "s"
          ] })
        ] }),
        !f.shot.enabled && /* @__PURE__ */ r("div", { class: "td-post-shot-disabled-note", children: t === "zh" ? "镜头已禁用，但仍可对历史一采结果进行后处理。" : "This shot is disabled, but its historical first-pass results remain available." }),
        w != null && w.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading results…" }) : w != null && w.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : $.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: $.map((y) => {
          const C = re(y.path, "output"), k = a[y.path], U = gr(y);
          return /* @__PURE__ */ r("div", { class: "td-second-pass-result", children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", onClick: () => C && c({ path: y.path, title: `${f.shot.id} · ${f.shot.title}` }), children: [
              C ? /* @__PURE__ */ r(Pe, { src: C, alt: se(y.path) }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  yr(y.stage, t),
                  (y.stage === "legacy_unknown" || !y.stage) && /* @__PURE__ */ r("em", { children: t === "zh" ? "兼容" : "Compatible" })
                ] }),
                /* @__PURE__ */ r("span", { title: y.path, children: se(y.path) }),
                /* @__PURE__ */ r("small", { children: y.bytes ? `${(y.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "primary td-second-pass-run", disabled: !o || !U || (k == null ? void 0 : k.state) === "queued", onClick: () => void l(f.shot.id, y.path), children: U ? (k == null ? void 0 : k.state) === "queued" ? t === "zh" ? "排队/执行中…" : "Queued/running…" : (k == null ? void 0 : k.state) === "done" ? t === "zh" ? "二采完成" : "Completed" : t === "zh" ? "进行二采" : "Run second pass" : t === "zh" ? "已是二采" : "Already refined" }),
            (k == null ? void 0 : k.state) === "error" && /* @__PURE__ */ r("div", { class: "td-second-pass-error", children: k.message })
          ] }, y.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "没有可用的一采结果" : "No first-pass result available" })
      ] }, f.key);
    }) }),
    b && re(b.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => c(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (f) => f.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: b.title }),
        /* @__PURE__ */ r("button", { onClick: () => c(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: re(b.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { children: se(b.path) })
    ] }) })
  ] });
}
async function mt(e) {
  const t = await fetch(e), o = await t.json();
  if (!t.ok) throw new Error(o.error || `HTTP ${t.status}`);
  return o;
}
function kr(e, t, o) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t,
    activeIndex: String(o)
  }).toString()}`;
}
function zr(e) {
  return `/theodore-director/v1/postprocess/merged-videos?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId }).toString()}`;
}
function Sr({ plan: e, language: t, queueSecondPass: o }) {
  const [n, d] = j("merge");
  return /* @__PURE__ */ r("section", { class: "td-postprocess-shell", children: [
    /* @__PURE__ */ r("div", { class: "td-post-mode-tabs", role: "tablist", children: [
      /* @__PURE__ */ r("button", { class: n === "merge" ? "active" : "", role: "tab", "aria-selected": n === "merge", onClick: () => d("merge"), children: t === "zh" ? "合并视频" : "Merge videos" }),
      /* @__PURE__ */ r("button", { class: n === "second-pass" ? "active" : "", role: "tab", "aria-selected": n === "second-pass", onClick: () => d("second-pass"), children: t === "zh" ? "单独二采" : "Standalone second pass" })
    ] }),
    n === "merge" ? /* @__PURE__ */ r($r, { plan: e, language: t }) : /* @__PURE__ */ r(wr, { plan: e, language: t, queueSecondPass: o })
  ] });
}
function $r({ plan: e, language: t }) {
  const o = fe(() => Ft(e), [e]), [n, d] = j({}), [i, a] = j({}), [p, b] = j({}), [c, m] = j(null), [h, l] = j(!1), [f, w] = j(""), [$, y] = j(""), [C, k] = j({ found: !1, results: [] }), [U, x] = j(!1), [I, R] = j(!1), [J, G] = j(""), [_, A] = j(0), [D, P] = j("1"), [Q, K] = j(String(o.length || 1)), V = o.filter((g) => g.shot.enabled), ne = V.length > 0 && V.every((g) => i[g.key]), W = _r(o, i, p), Y = W.filter((g) => !g.path), xe = o.some((g) => {
    var T;
    return i[g.key] && ((T = n[g.key]) == null ? void 0 : T.loading);
  }), ve = o.reduce(
    (g, T) => g + (T.shot.enabled && i[T.key] ? T.shot.durationSeconds : 0),
    0
  ), ee = fe(() => he(C), [C]), te = ee.find((g) => g.path === J) ?? ee[0];
  _e(() => {
    let g = !1;
    const T = {}, F = {};
    return o.forEach((E) => {
      T[E.key] = E.shot.enabled, F[E.key] = { loading: !0, response: { found: !1, results: [] } };
    }), a((E) => {
      const O = {};
      return o.forEach((S) => {
        O[S.key] = S.shot.enabled ? E[S.key] ?? T[S.key] : !1;
      }), O;
    }), d(F), w(""), o.forEach((E) => {
      mt(kr(e, E.shot.id, E.activeIndex)).then((O) => {
        if (g) return;
        const S = he(O);
        d((Z) => ({ ...Z, [E.key]: { loading: !1, response: O } })), b((Z) => {
          var le;
          return {
            ...Z,
            [E.key]: S.some((ce) => ce.path === Z[E.key]) ? Z[E.key] : ((le = S[0]) == null ? void 0 : le.path) ?? ""
          };
        });
      }).catch((O) => {
        g || d((S) => ({
          ...S,
          [E.key]: { loading: !1, response: { found: !1, results: [], error: String(O) } }
        }));
      });
    }), () => {
      g = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((g) => `${g.id}:${g.enabled}`).join("|"), _]), _e(() => {
    let g = !1;
    return x(!0), mt(zr(e)).then((T) => {
      if (g) return;
      const F = he(T);
      k(T), G((E) => {
        var O;
        return F.some((S) => S.path === E) ? E : ((O = F[0]) == null ? void 0 : O.path) ?? "";
      });
    }).catch((T) => {
      g || k({ found: !1, results: [], error: String(T) });
    }).finally(() => {
      g || x(!1);
    }), () => {
      g = !0;
    };
  }, [e.project.name, e.project.runId, _]);
  const ye = () => {
    const g = !ne;
    a((T) => {
      const F = { ...T };
      return V.forEach((E) => {
        F[E.key] = g;
      }), F;
    });
  }, De = () => {
    const g = Number(D), T = Number(Q);
    if (!Number.isInteger(g) || !Number.isInteger(T) || g < 1 || T < g || T > o.length) {
      window.alert(t === "zh" ? `请输入有效范围：1 ≤ m ≤ n ≤ ${o.length}` : `Enter a valid range: 1 ≤ m ≤ n ≤ ${o.length}`);
      return;
    }
    a(xr(o, g, T));
  }, L = async () => {
    if (!W.length) {
      window.alert(t === "zh" ? "请至少选择一个镜头" : "Select at least one shot.");
      return;
    }
    if (Y.length) {
      window.alert(t === "zh" ? `以下已选镜头没有可用结果：${Y.map((g) => g.shotId).join("、")}` : `Selected shots without a result: ${Y.map((g) => g.shotId).join(", ")}`);
      return;
    }
    l(!0), w("");
    try {
      const g = await fetch("/theodore-director/v1/postprocess/merge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId, selections: W })
      }), T = await g.json();
      if (!g.ok) throw new Error(T.error || `HTTP ${g.status}`);
      A((F) => F + 1);
    } catch (g) {
      w(String(g instanceof Error ? g.message : g));
    } finally {
      l(!1);
    }
  }, B = async () => {
    R(!0), y("");
    try {
      const g = await fetch("/theodore-director/v1/postprocess/open-folder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId })
      }), T = await g.json();
      if (!g.ok) throw new Error(T.error || `HTTP ${g.status}`);
    } catch (g) {
      y(String(g instanceof Error ? g.message : g));
    } finally {
      R(!1);
    }
  }, ae = te != null && te.path ? re(te.path, "output") : null;
  return /* @__PURE__ */ r("section", { class: "td-postprocess", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并视频" : "Merge videos" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "从每个镜头选择一个结果，按当前分镜顺序进行无损合并。" : "Choose one result per shot and merge them losslessly in storyboard order." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: [
        /* @__PURE__ */ r("button", { disabled: I, onClick: B, children: [
          "📁 ",
          I ? t === "zh" ? "正在打开…" : "Opening…" : t === "zh" ? "打开结果文件夹" : "Open results folder"
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => A((g) => g + 1), children: [
          "↻ ",
          t === "zh" ? "刷新结果" : "Refresh"
        ] }),
        /* @__PURE__ */ r("button", { onClick: ye, children: ne ? t === "zh" ? "全部取消" : "Clear all" : t === "zh" ? "一键全选" : "Select all" })
      ] })
    ] }),
    $ && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "打开结果文件夹失败：" : "Unable to open results folder: ",
      $
    ] }),
    /* @__PURE__ */ r("div", { class: "td-post-summary", children: [
      /* @__PURE__ */ r("span", { children: t === "zh" ? `已选择 ${W.length}/${V.length} 个启用镜头` : `${W.length}/${V.length} enabled shots selected` }),
      /* @__PURE__ */ r("span", { children: t === "zh" ? `预计时长 ${ve.toFixed(1)} 秒` : `Estimated duration ${ve.toFixed(1)} sec` }),
      /* @__PURE__ */ r("div", { class: "td-post-range", role: "group", "aria-label": t === "zh" ? "合并视频范围" : "Merge video range", children: [
        /* @__PURE__ */ r("span", { children: t === "zh" ? "范围" : "Range" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: o.length, step: "1", value: D, "aria-label": t === "zh" ? "起始镜头 m" : "Start shot m", onInput: (g) => P(g.currentTarget.value) }),
        /* @__PURE__ */ r("span", { children: "—" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: o.length, step: "1", value: Q, "aria-label": t === "zh" ? "结束镜头 n" : "End shot n", onInput: (g) => K(g.currentTarget.value) }),
        /* @__PURE__ */ r("button", { disabled: !o.length, onClick: De, children: t === "zh" ? "确认范围" : "Apply range" })
      ] }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: h || xe || !W.length || !!Y.length, onClick: L, children: h ? t === "zh" ? "正在合并…" : "Merging…" : t === "zh" ? "合并所选视频" : "Merge selected videos" })
    ] }),
    f && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "合并失败：" : "Merge failed: ",
      f
    ] }),
    Y.length > 0 && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "已选镜头中存在尚未生成视频的镜头。" : "Some selected shots do not have generated videos yet." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: o.map((g) => {
      const T = n[g.key], F = he((T == null ? void 0 : T.response) ?? { results: [] }), E = !!i[g.key];
      return /* @__PURE__ */ r("article", { class: `td-post-shot ${E ? "selected" : ""} ${g.shot.enabled ? "" : "disabled"}`, children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: E, disabled: !g.shot.enabled, onChange: (O) => a((S) => ({ ...S, [g.key]: O.currentTarget.checked })) }),
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
        T != null && T.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading generated results…" }) : T != null && T.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : F.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: F.map((O, S) => {
          const Z = re(O.path, "output"), le = p[g.key] === O.path, ce = Mt(O.path, F.length - S);
          return /* @__PURE__ */ r("div", { class: `td-post-result ${le ? "selected" : ""}`, children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", role: "radio", "aria-checked": le, onClick: () => b((Le) => ({ ...Le, [g.key]: O.path })), children: [
              Z ? /* @__PURE__ */ r(Pe, { src: Z, alt: `${g.shot.title} ${t === "zh" ? "结果" : "result"} ${ce}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  t === "zh" ? `结果 ${ce}` : `Result ${ce}`,
                  S === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
                ] }),
                /* @__PURE__ */ r("span", { title: O.path, children: se(O.path) }),
                /* @__PURE__ */ r("small", { children: O.bytes ? `${(O.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "td-post-result-play", disabled: !Z, title: t === "zh" ? "播放预览" : "Play preview", onClick: () => Z && m({ path: O.path, title: `${g.shot.id} · ${g.shot.title}` }), children: "▶" })
          ] }, O.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "未找到这个镜头的生成结果" : "No generated result found for this shot" })
      ] }, g.key);
    }) }),
    /* @__PURE__ */ r("section", { class: "td-post-merged", children: [
      /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并结果" : "Merged results" }),
        /* @__PURE__ */ r("span", { class: `td-result-state ${ee.length ? "found" : ""}`, children: U ? t === "zh" ? "查询中" : "Checking" : t === "zh" ? `${ee.length} 个结果` : `${ee.length} results` })
      ] }) }),
      U ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "正在查询合并结果…" : "Loading merged results…" }) : C.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: t === "zh" ? "无法查询合并结果" : "Unable to query merged results" }) : te && ae ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
        /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
          /* @__PURE__ */ r("video", { src: ae, controls: !0, preload: "metadata", playsInline: !0 }, te.path),
          /* @__PURE__ */ r("div", { class: "td-generated-meta", title: te.path, children: te.path })
        ] }),
        /* @__PURE__ */ r("div", { class: "td-result-list", children: ee.map((g, T) => {
          const F = re(g.path, "output");
          return /* @__PURE__ */ r("button", { class: `td-result-item ${g.path === te.path ? "selected" : ""}`, onClick: () => G(g.path), children: [
            F ? /* @__PURE__ */ r(Pe, { src: F, alt: `${t === "zh" ? "合并结果" : "Merged result"} ${ee.length - T}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
            /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
              /* @__PURE__ */ r("strong", { children: [
                t === "zh" ? `合并结果 ${ee.length - T}` : `Merged result ${ee.length - T}`,
                T === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
              ] }),
              /* @__PURE__ */ r("span", { children: se(g.path) }),
              /* @__PURE__ */ r("small", { children: g.bytes ? `${(g.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
            ] })
          ] }, g.path);
        }) })
      ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "还没有合并结果" : "No merged result yet" })
    ] }),
    c && re(c.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => m(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (g) => g.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: c.title }),
        /* @__PURE__ */ r("button", { "aria-label": t === "zh" ? "关闭预览" : "Close preview", onClick: () => m(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: re(c.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { title: c.path, children: se(c.path) })
    ] }) })
  ] });
}
function Cr(e) {
  const t = e.reduce((o, n) => {
    const d = /^shot_(\d+)$/i.exec(n.id.trim());
    return d ? Math.max(o, Number(d[1])) : o;
  }, 0);
  return Math.max(t, e.length) + 1;
}
function Tr(e, t = 5) {
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
function ft(e, t, o) {
  const n = Cr(e), d = Array.from({ length: t }, (i, a) => Tr(n + a, o));
  return [...e, ...d];
}
const Ot = (e) => `${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, Ce = (e) => JSON.parse(JSON.stringify(e)), Ir = { image: "图片", video: "视频", audio: "音频" };
function gt(e) {
  var o;
  const t = Ce(e);
  return t.schemaVersion = 4, (o = t.project.id) != null && o.trim() || (t.project.id = Ot("project")), t.shots = t.shots.map((n) => ({
    ...n,
    latentRelay: n.latentRelay ?? !0,
    secondSampling: n.secondSampling ?? !0
  })), t;
}
function jr(e) {
  return e.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function Ar(e) {
  const t = Ot(e);
  return { id: t, alias: t, kind: e, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: e === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function bt(e, t, o) {
  const n = new FormData();
  n.append("projectName", e), n.append("kind", t), n.append("file", o);
  const d = await fetch("/theodore-director/v1/assets", { method: "POST", body: n }), i = await d.json();
  if (!d.ok || !i.path) throw new Error(i.error || `HTTP ${d.status}`);
  return i.path;
}
async function Pr(e, t, o) {
  const n = new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t.id,
    activeIndex: String(o)
  }), d = await fetch(`/theodore-director/v1/generated-video?${n.toString()}`), i = await d.json();
  if (!d.ok) throw new Error(i.error || `HTTP ${d.status}`);
  return i;
}
async function Er(e) {
  var n;
  if ((n = navigator.clipboard) != null && n.writeText)
    try {
      await navigator.clipboard.writeText(e);
      return;
    } catch {
    }
  const t = document.createElement("textarea");
  t.value = e, t.style.position = "fixed", t.style.opacity = "0", document.body.append(t), t.select();
  const o = document.execCommand("copy");
  if (t.remove(), !o) throw new Error("浏览器拒绝写入剪贴板");
}
function Nr({ initial: e, onSave: t, onClose: o, supportsSecondSampling: n, queueSecondPass: d }) {
  const [i, a] = j(() => gt(e)), [p, b] = j("shots"), [c, m] = j(0), [h, l] = j(() => navigator.language.startsWith("zh") ? "zh" : "en"), [f, w] = j({}), [$, y] = j(!1), [C, k] = j(!0), [U, x] = j(0), [I, R] = j({ found: !1, results: [] }), [J, G] = j(""), [_, A] = j(!1), [D, P] = j(""), [Q, K] = j(!1), [V, ne] = j(!1), [W, Y] = j([]), [xe, ve] = j("5"), [ee, te] = j("1"), [ye, De] = j("5"), L = i.shots[Math.min(c, i.shots.length - 1)], B = fe(() => L ? Lt(i, L) : null, [i, L]), ae = L != null && L.enabled ? i.shots.slice(0, c).filter((s) => s.enabled).length : -1, g = i.shots.length > 0 && i.shots.every((s) => s.secondSampling), T = W.length > 0 && W.every((s) => s.enabled), F = fe(() => he(I), [I]), E = F.find((s) => s.path === J) ?? F[0], O = E != null && E.path ? re(E.path, "output") : null, S = (s) => a((u) => {
    const v = Ce(u);
    return s(v), v;
  }), Z = (s, u) => S((v) => {
    const z = s + u;
    z < 0 || z >= v.shots.length || ([v.shots[s], v.shots[z]] = [v.shots[z], v.shots[s]], m(z));
  }), le = (s) => S((u) => {
    u.shots.length <= 1 || (u.shots.splice(s, 1), m((v) => v > s ? v - 1 : v === s ? Math.min(s, u.shots.length - 1) : v));
  }), ce = () => {
    Y(Ce(i.shots)), K(!0);
  }, Le = () => {
    const s = Number(xe);
    if (!Number.isFinite(s) || s <= 0) {
      window.alert(h === "zh" ? "统一时长必须大于 0 秒" : "The shared duration must be greater than 0 seconds.");
      return;
    }
    Y((u) => u.map((v) => ({ ...v, durationSeconds: s })));
  }, Ut = () => {
    const s = Number(ee), u = Number(ye);
    if (!Number.isInteger(s) || s < 1 || s > 100) {
      window.alert(h === "zh" ? "新增镜头数量必须是 1–100 的整数" : "The shot count must be an integer from 1 to 100.");
      return;
    }
    if (!Number.isFinite(u) || u <= 0) {
      window.alert(h === "zh" ? "新增镜头时长必须大于 0 秒" : "The new-shot duration must be greater than 0 seconds.");
      return;
    }
    Y((v) => ft(v, s, u));
  }, Bt = () => {
    const s = !T;
    Y((u) => u.map((v) => ({ ...v, enabled: s })));
  }, Ht = () => {
    if (W.some((s) => !Number.isFinite(s.durationSeconds) || s.durationSeconds <= 0)) {
      window.alert(h === "zh" ? "每个镜头的时长都必须大于 0 秒" : "Every shot duration must be greater than 0 seconds.");
      return;
    }
    S((s) => {
      s.shots = Ce(W);
    }), m((s) => Math.min(s, W.length - 1)), K(!1);
  }, Vt = () => {
    const s = URL.createObjectURL(new Blob([JSON.stringify(i, null, 2)], { type: "application/json" })), u = document.createElement("a");
    u.href = s, u.download = `${jr(i.project.name)}.director.json`, u.click(), URL.revokeObjectURL(s);
  }, qt = () => {
    const s = ur(i);
    if (s.length) {
      window.alert(`计划未通过校验：

${s.join(`
`)}`);
      return;
    }
    t(i);
  };
  return _e(() => {
    let s = !1;
    return L ? (A(!0), Pr(i, L, ae).then((u) => {
      if (s) return;
      const v = he(u);
      R(u), G((z) => {
        var N;
        return v.some((X) => X.path === z) ? z : ((N = v[0]) == null ? void 0 : N.path) ?? "";
      });
    }).catch((u) => {
      s || (R({ found: !1, results: [], error: String(u) }), G(""));
    }).finally(() => {
      s || A(!1);
    }), () => {
      s = !0;
    }) : (R({ found: !1, results: [] }), G(""), A(!1), () => {
      s = !0;
    });
  }, [i.project.name, i.project.runId, L == null ? void 0 : L.id, L == null ? void 0 : L.enabled, ae, U]), /* @__PURE__ */ r("div", { class: "td-shell", children: [
    /* @__PURE__ */ r("header", { children: [
      /* @__PURE__ */ r("h1", { children: pe(h, "title") }),
      /* @__PURE__ */ r("div", { class: "td-actions", children: [
        /* @__PURE__ */ r("button", { onClick: Vt, children: "导出 / Export" }),
        /* @__PURE__ */ r("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ r("input", { type: "file", accept: "application/json,.json", onChange: async (s) => {
            var v;
            const u = (v = s.currentTarget.files) == null ? void 0 : v[0];
            if (u)
              try {
                const z = JSON.parse(await u.text());
                if (!z.project || !Array.isArray(z.shots) || !Array.isArray(z.assets)) throw new Error("不是有效的 Theodore Director Plan");
                a(gt(z)), m(0);
              } catch (z) {
                window.alert(String(z));
              }
          } })
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => l(h === "zh" ? "en" : "zh"), children: h === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: qt, children: pe(h, "save") }),
        /* @__PURE__ */ r("button", { onClick: o, children: pe(h, "close") })
      ] })
    ] }),
    /* @__PURE__ */ r("nav", { children: ["shots", "assets", "settings", "postprocess"].map((s) => /* @__PURE__ */ r("button", { class: p === s ? "active" : "", onClick: () => b(s), children: pe(h, s) })) }),
    /* @__PURE__ */ r("main", { children: [
      p === "shots" && /* @__PURE__ */ r("div", { class: "td-shots", children: [
        /* @__PURE__ */ r("aside", { class: "td-shot-sidebar", children: [
          n && /* @__PURE__ */ r("button", { class: `wide td-bulk-toggle ${g ? "active" : ""}`, onClick: () => S((s) => {
            const u = !s.shots.every((v) => v.secondSampling);
            s.shots.forEach((v) => {
              v.secondSampling = u;
            });
          }), children: h === "zh" ? `全部二次采样：${g ? "开" : "关"}` : `Second sampling for all: ${g ? "ON" : "OFF"}` }),
          /* @__PURE__ */ r("div", { class: "td-shot-list", children: i.shots.map((s, u) => /* @__PURE__ */ r("div", { class: `td-shot-card ${u === c ? "selected" : ""}`, onClick: () => m(u), children: [
            /* @__PURE__ */ r("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ r("button", { class: "td-shot-delete", disabled: i.shots.length <= 1, title: h === "zh" ? i.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : i.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": h === "zh" ? "删除镜头" : "Delete shot", onClick: (v) => {
              v.stopPropagation(), le(u);
            }, children: "×" }) }),
            /* @__PURE__ */ r("strong", { children: [
              u + 1,
              ". ",
              s.title
            ] }),
            /* @__PURE__ */ r("span", { children: [
              s.durationSeconds,
              "s · ",
              s.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-move-actions", children: [
              /* @__PURE__ */ r("button", { title: h === "zh" ? "上移镜头" : "Move shot up", onClick: (v) => {
                v.stopPropagation(), Z(u, -1);
              }, children: "↑" }),
              /* @__PURE__ */ r("button", { title: h === "zh" ? "下移镜头" : "Move shot down", onClick: (v) => {
                v.stopPropagation(), Z(u, 1);
              }, children: "↓" })
            ] })
          ] }, s.id)) }),
          /* @__PURE__ */ r("button", { class: "wide", onClick: () => S((s) => {
            const u = s.shots.length;
            s.shots = ft(s.shots, 1, 5), m(u);
          }), children: [
            "＋ ",
            pe(h, "addShot")
          ] }),
          /* @__PURE__ */ r("div", { class: "td-shot-batch-entry", children: /* @__PURE__ */ r("button", { class: "wide", onClick: ce, children: h === "zh" ? "批量处理镜头" : "Batch edit shots" }) })
        ] }),
        L && /* @__PURE__ */ r("section", { class: "td-form", children: [
          /* @__PURE__ */ r("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ r("label", { children: [
              "ID",
              /* @__PURE__ */ r("input", { value: L.id, onInput: (s) => S((u) => {
                u.shots[c].id = s.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ r("input", { value: L.title, onInput: (s) => S((u) => {
                u.shots[c].title = s.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: L.durationSeconds, onInput: (s) => S((u) => {
                u.shots[c].durationSeconds = Number(s.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: L.enabled, onChange: (s) => S((u) => {
                  u.shots[c].enabled = s.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: ae === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: L.latentRelay, onChange: (s) => S((u) => {
                  u.shots[c].latentRelay = s.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: [
                  "latent接力 / Relay",
                  ae === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              n && /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: "开启时执行 RTX 超分和第二次 H3 采样，关闭时直接使用第一采画面", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: L.secondSampling, onChange: (s) => S((u) => {
                  u.shots[c].secondSampling = s.currentTarget.checked;
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
            /* @__PURE__ */ r(Ue, { rows: 10, value: L.prompt, isReferenceValid: (s) => Dt(i, L, s), onInput: (s) => S((u) => {
              u.shots[c].prompt = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ r("textarea", { rows: 3, value: L.negativePrompt, onInput: (s) => S((u) => {
              u.shots[c].negativePrompt = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ r("legend", { children: "本镜头素材 / Shot media" }),
            i.assets.map((s) => {
              const u = !L.disabledAssetIds.includes(s.id), v = se(s.path) || s.alias, z = `{{ref:${s.alias}}}`;
              return /* @__PURE__ */ r("div", { class: `td-shot-media-card ${u ? "" : "disabled"}`, children: [
                /* @__PURE__ */ r("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ r(ut, { asset: s, compact: !0 }),
                  /* @__PURE__ */ r("span", { class: "td-shot-media-kind", children: h === "zh" ? Ir[s.kind] : s.kind }),
                  /* @__PURE__ */ r("label", { class: "td-shot-media-toggle", title: u ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ r("input", { type: "checkbox", checked: u, onChange: (N) => S((X) => {
                    const oe = X.shots[c].disabledAssetIds;
                    X.shots[c].disabledAssetIds = N.currentTarget.checked ? oe.filter((me) => me !== s.id) : [.../* @__PURE__ */ new Set([...oe, s.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ r("button", { class: `td-shot-media-name ${D === s.id ? "copied" : ""}`, title: `${v}
${h === "zh" ? "点击复制" : "Click to copy"} ${z}`, onClick: async () => {
                  try {
                    await Er(z), P(s.id), window.setTimeout(() => P((N) => N === s.id ? "" : N), 1400);
                  } catch (N) {
                    window.alert(`${h === "zh" ? "复制失败" : "Copy failed"}: ${String(N)}`);
                  }
                }, children: [
                  /* @__PURE__ */ r("span", { children: v }),
                  D === s.id && /* @__PURE__ */ r("em", { children: h === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, s.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ r("aside", { class: "td-preview", children: [
          /* @__PURE__ */ r("details", { open: $, onToggle: (s) => y(s.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: pe(h, "preview") }),
              /* @__PURE__ */ r("span", { class: "td-summary-counts", children: [
                "Picture ",
                (B == null ? void 0 : B.slots.filter((s) => s.kind === "picture").length) ?? 0,
                "/9 · Video ",
                (B == null ? void 0 : B.slots.filter((s) => s.kind === "video").length) ?? 0,
                "/3 · Audio ",
                (B == null ? void 0 : B.audioCount) ?? 0,
                "/3 · Files ",
                (B == null ? void 0 : B.mixedFiles) ?? 0,
                "/12"
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body", children: [
              B != null && B.errors.length ? /* @__PURE__ */ r("ul", { class: "errors", children: B.errors.map((s) => /* @__PURE__ */ r("li", { children: s })) }) : /* @__PURE__ */ r("p", { class: "ok", children: pe(h, "noErrors") }),
              /* @__PURE__ */ r("ol", { children: B == null ? void 0 : B.slots.map((s) => /* @__PURE__ */ r("li", { children: [
                /* @__PURE__ */ r("code", { children: s.label }),
                " ← ",
                s.alias
              ] })) }),
              /* @__PURE__ */ r("pre", { children: B == null ? void 0 : B.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ r("details", { open: C, onToggle: (s) => k(s.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: h === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ r("span", { class: `td-result-state ${F.length ? "found" : ""}`, children: _ ? h === "zh" ? "查询中" : "Checking" : F.length ? h === "zh" ? `${F.length} 个结果` : `${F.length} results` : h === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ r("div", { class: "td-result-actions", children: /* @__PURE__ */ r("button", { onClick: () => x((s) => s + 1), children: [
                "↻ ",
                h === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              _ ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: h === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : I.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: h === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again." }) : E && O ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
                /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
                  /* @__PURE__ */ r("video", { src: O, controls: !0, preload: "metadata", playsInline: !0 }, E.path),
                  /* @__PURE__ */ r("div", { class: "td-generated-meta", title: E.path, children: [
                    E.path,
                    E.bytes ? ` · ${(E.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                  ] })
                ] }),
                /* @__PURE__ */ r("div", { class: "td-result-list", "aria-label": h === "zh" ? "全部生成结果" : "All generated results", children: F.map((s, u) => {
                  const v = re(s.path, "output"), z = Mt(s.path, F.length - u), N = s.modifiedAt ? new Date(s.modifiedAt * 1e3).toLocaleString(h === "zh" ? "zh-CN" : "en-US") : "";
                  return /* @__PURE__ */ r("button", { class: `td-result-item ${s.path === E.path ? "selected" : ""}`, onClick: () => G(s.path), children: [
                    v ? /* @__PURE__ */ r(Pe, { src: v, alt: `${h === "zh" ? "结果" : "Result"} ${z}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: /* @__PURE__ */ r("span", { children: "×" }) }),
                    /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
                      /* @__PURE__ */ r("strong", { children: [
                        h === "zh" ? `结果 ${z}` : `Result ${z}`,
                        u === 0 && /* @__PURE__ */ r("em", { children: h === "zh" ? "最新" : "Latest" })
                      ] }),
                      /* @__PURE__ */ r("span", { title: s.path, children: se(s.path) }),
                      /* @__PURE__ */ r("small", { children: [s.bytes ? `${(s.bytes / 1024 / 1024).toFixed(1)} MB` : "", N].filter(Boolean).join(" · ") })
                    ] })
                  ] }, s.path);
                }) })
              ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: h === "zh" ? "未在预期路径找到本段视频" : "No video found at the expected path" })
            ] })
          ] })
        ] })
      ] }),
      p === "assets" && /* @__PURE__ */ r("div", { class: "td-assets", children: [
        /* @__PURE__ */ r("div", { class: "td-toolbar", children: [
          ["image", "video", "audio"].map((s) => /* @__PURE__ */ r("button", { onClick: () => S((u) => u.assets.push(Ar(s))), children: [
            "＋ ",
            s
          ] })),
          /* @__PURE__ */ r("button", { class: "td-asset-batch-entry", onClick: () => ne(!0), children: [
            "⇧ ",
            h === "zh" ? "批量导入素材" : "Batch import assets"
          ] })
        ] }),
        i.assets.map((s, u) => /* @__PURE__ */ r("article", { children: /* @__PURE__ */ r("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ r("div", { class: "td-grid", children: [
              /* @__PURE__ */ r("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ r("input", { value: s.alias, onInput: (v) => S((z) => {
                  z.assets[u].alias = v.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ r("select", { value: s.kind, onChange: (v) => S((z) => {
                  z.assets[u].kind = v.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ r("option", { children: "image" }),
                  /* @__PURE__ */ r("option", { children: "video" }),
                  /* @__PURE__ */ r("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ r("input", { value: s.path, onInput: (v) => S((z) => {
                  z.assets[u].path = v.currentTarget.value;
                }) }),
                /* @__PURE__ */ r("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ r("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ r("input", { type: "file", accept: s.kind === "image" ? "image/*" : s.kind === "video" ? "video/*" : "audio/*", onChange: async (v) => {
                      var X;
                      const z = v.currentTarget, N = (X = z.files) == null ? void 0 : X[0];
                      if (N) {
                        w((oe) => ({ ...oe, [s.id]: N.name }));
                        try {
                          const oe = await bt(i.project.name, s.kind, N);
                          S((me) => {
                            const Xe = me.assets.find((Wt) => Wt.id === s.id);
                            Xe && (Xe.path = oe);
                          });
                        } catch (oe) {
                          window.alert(String(oe));
                        } finally {
                          w((oe) => {
                            const me = { ...oe };
                            return delete me[s.id], me;
                          }), z.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ r("span", { class: "td-file-name", title: f[s.id] || s.path, children: f[s.id] ? `${h === "zh" ? "上传中" : "Uploading"}: ${f[s.id]}` : se(s.path) || (h === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ r("input", { type: "number", min: "0", step: "0.1", value: s.durationSeconds ?? "", onInput: (v) => S((z) => {
                  z.assets[u].durationSeconds = v.currentTarget.value ? Number(v.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ r("input", { type: "number", value: s.fixedOrder, onInput: (v) => S((z) => {
                  z.assets[u].fixedOrder = Number(v.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ r("input", { value: s.shotIds.join(", "), onInput: (v) => S((z) => {
                  z.assets[u].shotIds = v.currentTarget.value.split(",").map((N) => N.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-flags", children: [
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: s.enabled, onChange: (v) => S((z) => {
                  z.assets[u].enabled = v.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: s.fixed, onChange: (v) => S((z) => {
                  z.assets[u].fixed = v.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              s.kind === "video" && /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: s.includeVideoAudio, onChange: (v) => S((z) => {
                  z.assets[u].includeVideoAudio = v.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ r("button", { class: "danger", onClick: () => S((v) => {
                v.assets.splice(u, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ r(ut, { asset: s })
        ] }) }, s.id))
      ] }),
      p === "settings" && /* @__PURE__ */ r("section", { class: "td-form settings", children: [
        /* @__PURE__ */ r("label", { children: [
          "Project name",
          /* @__PURE__ */ r("input", { value: i.project.name, onInput: (s) => S((u) => {
            u.project.name = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Run ID",
          /* @__PURE__ */ r("input", { value: i.project.runId, onInput: (s) => S((u) => {
            u.project.runId = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "FPS",
          /* @__PURE__ */ r("input", { type: "number", value: i.defaults.fps, onInput: (s) => S((u) => {
            u.defaults.fps = Number(s.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Base seed",
          /* @__PURE__ */ r("input", { type: "number", value: i.defaults.baseSeed, onInput: (s) => S((u) => {
            u.defaults.baseSeed = Number(s.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ r(Ue, { value: i.promptPrefix, isReferenceValid: (s) => ht(i, s), onInput: (s) => S((u) => {
            u.promptPrefix = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ r(Ue, { value: i.promptSuffix, isReferenceValid: (s) => ht(i, s), onInput: (s) => S((u) => {
            u.promptSuffix = s.currentTarget.value;
          }) })
        ] })
      ] }),
      p === "postprocess" && /* @__PURE__ */ r(Sr, { plan: i, language: h, queueSecondPass: d })
    ] }),
    Q && /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": h === "zh" ? "批量处理镜头" : "Batch edit shots", children: [
      /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("h2", { children: h === "zh" ? "批量处理镜头" : "Batch edit shots" }),
          /* @__PURE__ */ r("p", { children: h === "zh" ? `当前共 ${W.length} 个镜头` : `${W.length} shots` })
        ] }),
        /* @__PURE__ */ r("button", { "aria-label": h === "zh" ? "关闭" : "Close", onClick: () => K(!1), children: "×" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-tools", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            h === "zh" ? "所有镜头时长" : "Duration for all shots",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: xe, onInput: (s) => ve(s.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: h === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: Le, children: h === "zh" ? "一键设置所有时长" : "Set all durations" })
        ] }),
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            h === "zh" ? "新增镜头数量" : "New shot count",
            /* @__PURE__ */ r("input", { type: "number", min: "1", max: "100", step: "1", value: ee, onInput: (s) => te(s.currentTarget.value) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            h === "zh" ? "每个镜头时长" : "Duration per shot",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: ye, onInput: (s) => De(s.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: h === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: Ut, children: h === "zh" ? "批量新增镜头" : "Add shots" })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-global-actions", children: [
        /* @__PURE__ */ r("span", { children: h === "zh" ? `已启用 ${W.filter((s) => s.enabled).length}/${W.length} 个镜头` : `${W.filter((s) => s.enabled).length}/${W.length} shots enabled` }),
        /* @__PURE__ */ r("button", { class: T ? "active" : "", onClick: Bt, children: T ? h === "zh" ? "全部禁用" : "Disable all" : h === "zh" ? "全部启用" : "Enable all" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-table", children: [
        /* @__PURE__ */ r("div", { class: "td-batch-row td-batch-table-head", children: [
          /* @__PURE__ */ r("span", { children: "#" }),
          /* @__PURE__ */ r("span", { children: h === "zh" ? "镜头名" : "Shot name" }),
          /* @__PURE__ */ r("span", { children: h === "zh" ? "启用" : "Enabled" }),
          /* @__PURE__ */ r("span", { children: h === "zh" ? "具体时长" : "Duration" }),
          /* @__PURE__ */ r("span", { children: [
            "latent ",
            h === "zh" ? "接力" : "relay"
          ] })
        ] }),
        W.map((s, u) => /* @__PURE__ */ r("div", { class: "td-batch-row", children: [
          /* @__PURE__ */ r("span", { children: u + 1 }),
          /* @__PURE__ */ r("input", { value: s.title, "aria-label": `${h === "zh" ? "镜头名" : "Shot name"} ${u + 1}`, onInput: (v) => Y((z) => z.map((N, X) => X === u ? { ...N, title: v.currentTarget.value } : N)) }),
          /* @__PURE__ */ r("label", { class: "td-batch-enabled", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: s.enabled, onChange: (v) => Y((z) => z.map((N, X) => X === u ? { ...N, enabled: v.currentTarget.checked } : N)) }),
            /* @__PURE__ */ r("span", { children: s.enabled ? h === "zh" ? "开" : "ON" : h === "zh" ? "关" : "OFF" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: s.durationSeconds, onInput: (v) => Y((z) => z.map((N, X) => X === u ? { ...N, durationSeconds: Number(v.currentTarget.value) } : N)) }),
            /* @__PURE__ */ r("span", { children: h === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-relay", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: s.latentRelay, onChange: (v) => Y((z) => z.map((N, X) => X === u ? { ...N, latentRelay: v.currentTarget.checked } : N)) }),
            /* @__PURE__ */ r("span", { children: s.latentRelay ? h === "zh" ? "开" : "ON" : h === "zh" ? "关" : "OFF" })
          ] })
        ] }, s.id))
      ] }),
      /* @__PURE__ */ r("footer", { children: [
        /* @__PURE__ */ r("button", { onClick: () => K(!1), children: h === "zh" ? "取消" : "Cancel" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: Ht, children: h === "zh" ? "应用更改" : "Apply changes" })
      ] })
    ] }) }),
    V && /* @__PURE__ */ r(hr, { language: h, assets: i.assets, projectName: i.project.name, uploadFile: bt, onImported: (s) => S((u) => {
      u.assets.push(...s);
    }), onClose: () => ne(!1) })
  ] });
}
function Rr(e, t, o = !1, n) {
  const d = document.getElementById("theodore-director-modal");
  if (d) {
    d.focus();
    return;
  }
  const i = document.createElement("div");
  i.id = "theodore-director-modal", i.className = "td-modal", i.tabIndex = -1, document.body.append(i);
  const a = (b) => {
    b.key === "Escape" && p();
  }, p = () => {
    document.removeEventListener("keydown", a), rt(null, i), i.remove();
  };
  document.addEventListener("keydown", a), rt(/* @__PURE__ */ r(Nr, { initial: e, onSave: (b) => {
    t(b), p();
  }, onClose: p, supportsSecondSampling: o, queueSecondPass: n }), i), i.focus();
}
const Dr = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-highlight-textarea{position:relative;display:block;width:100%;min-width:0}.td-highlight-backdrop,.td-form textarea.td-highlight-input{box-sizing:border-box;width:100%;margin:0;padding:7px 9px;font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,monospace;font-size:inherit;line-height:1.45;letter-spacing:normal;-moz-tab-size:8;tab-size:8;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.td-highlight-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border:1px solid transparent;border-radius:6px;background:#222a35;color:var(--td-text);pointer-events:none}.td-form textarea.td-highlight-input{position:relative;z-index:1;display:block;background:transparent;color:transparent;caret-color:var(--td-text);-webkit-text-fill-color:transparent}.td-highlight-input::selection{background:#5898d46b}.td-highlight-backdrop mark{padding:1px 2px;border-radius:3px;color:inherit}.td-highlight-backdrop mark.valid{background:#1d6b50;color:#bfffe6}.td-highlight-backdrop mark.invalid{background:#7a2931;color:#ffd1d5;text-decoration:underline;text-decoration-color:#ff9aa4;text-underline-offset:2px}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-generated-results{display:flex;flex-direction:column;gap:12px}.td-result-list{display:flex;flex-direction:column;gap:7px;max-height:280px;overflow:auto;padding-right:3px}.td-shell button.td-result-item{display:grid;grid-template-columns:112px minmax(0,1fr);gap:10px;align-items:center;width:100%;padding:6px;text-align:left;background:#151b23}.td-shell button.td-result-item.selected{border-color:var(--td-accent);background:#1c2a2a}.td-result-thumb{width:112px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:5px;background:#090c10;color:var(--td-muted)}.td-result-thumb img,.td-result-thumb video{display:block;width:100%;height:100%;object-fit:contain}.td-result-item-copy{display:flex;min-width:0;flex-direction:column;gap:3px}.td-result-item-copy>strong{display:flex;align-items:center;gap:7px;color:var(--td-text)}.td-result-item-copy>strong em{padding:1px 6px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-result-item-copy>span,.td-result-item-copy>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-result-item-copy>small{font-size:10px}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-asset-batch-entry{margin-left:auto;border-color:#527061!important;background:#1b2c28!important;color:var(--td-accent)!important}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}.td-shot-sidebar{display:flex;flex-direction:column}.td-shot-list{flex:none}.td-shot-batch-entry{display:flex;align-items:flex-end;flex:1;min-height:90px;padding-top:14px}.td-shot-batch-entry button{border-color:#527061;background:#1b2c28;color:var(--td-accent)}.td-batch-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:28px;background:#05080dbd;box-sizing:border-box}.td-batch-panel{display:flex;flex-direction:column;width:min(1040px,100%);max-height:min(820px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-batch-header h2{font-size:18px;margin:0}.td-batch-header p{margin:3px 0 0;color:var(--td-muted)}.td-batch-header>button{font-size:20px;line-height:1;padding:5px 9px}.td-batch-tools{display:grid;grid-template-columns:1fr 1.4fr;gap:12px;padding:14px 18px;border-bottom:1px solid var(--td-line);background:#151b23}.td-batch-tools>div{display:flex;align-items:end;gap:8px;padding:10px;border:1px solid var(--td-line);border-radius:7px}.td-batch-tools label{display:flex;flex:1;flex-direction:column;gap:4px;color:var(--td-muted);white-space:nowrap}.td-batch-tools label>span,.td-batch-duration{display:flex;align-items:center;gap:6px}.td-batch-tools input{width:100%}.td-batch-tools em{color:var(--td-muted);font-style:normal}.td-batch-tools button{white-space:nowrap}.td-batch-global-actions{display:flex;align-items:center;justify-content:flex-end;gap:12px;padding:9px 22px;border-bottom:1px solid var(--td-line);background:#171e27;color:var(--td-muted)}.td-batch-global-actions button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-batch-table{overflow:auto;padding:0 18px}.td-batch-row{display:grid;grid-template-columns:42px minmax(180px,1fr) 100px 150px 120px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-batch-table-head{position:sticky;top:0;z-index:1;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-batch-duration input{min-width:0;width:100%}.td-batch-duration>span{color:var(--td-muted)}.td-batch-enabled,.td-batch-relay{display:flex;align-items:center;gap:7px;justify-content:flex-start;color:var(--td-text)}.td-batch-enabled input,.td-batch-relay input{width:17px;height:17px;margin:0}.td-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-batch-panel{display:flex;flex-direction:column;width:min(1420px,100%);max-height:min(880px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-asset-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-asset-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-dropzone{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-height:92px;margin:14px 18px 10px;border:1px dashed #597084;border-radius:9px;background:#151b23;color:var(--td-text);cursor:pointer;transition:border-color .15s,background .15s}.td-asset-dropzone:hover,.td-asset-dropzone.dragging{border-color:var(--td-accent);background:#1b2c28}.td-asset-dropzone span{color:var(--td-muted);font-size:12px}.td-asset-dropzone input{display:none}.td-asset-batch-warning{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 18px 10px;padding:8px 10px;border:1px solid #836a32;border-radius:7px;background:#3a301c;color:#f4d991}.td-asset-batch-warning span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-warning button{padding:2px 7px}.td-asset-batch-summary{display:flex;align-items:center;justify-content:space-between;padding:8px 18px;border-top:1px solid var(--td-line);border-bottom:1px solid var(--td-line);background:#151b23;color:var(--td-muted)}.td-asset-batch-summary button{padding:5px 8px}.td-asset-batch-list{overflow:auto;padding:0 18px 10px}.td-asset-batch-row{display:grid;grid-template-columns:minmax(210px,1.4fr) minmax(150px,1fr) 115px 135px 105px 72px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-asset-batch-head{position:sticky;top:0;z-index:2;padding-top:10px;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-asset-batch-row.invalid{background:#3b202560}.td-asset-batch-row.imported{background:#17372d55}.td-asset-batch-file{display:flex;min-width:0;flex-direction:column;gap:2px}.td-asset-batch-file strong,.td-asset-batch-file small,.td-asset-batch-file em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-file small{color:var(--td-muted);font-weight:400}.td-asset-batch-file em{color:var(--td-danger);font-size:11px;font-style:normal}.td-asset-batch-duration,.td-asset-batch-audio{display:flex;align-items:center;gap:6px;color:var(--td-muted)}.td-asset-batch-duration input{min-width:0;width:100%}.td-asset-batch-audio input{width:17px;height:17px;margin:0}.td-asset-batch-empty{display:flex;min-height:130px;align-items:center;justify-content:center;color:var(--td-muted)}.td-asset-batch-panel button:disabled,.td-asset-batch-panel input:disabled,.td-asset-batch-panel select:disabled{opacity:.55;cursor:not-allowed}.td-postprocess{display:flex;flex-direction:column;gap:14px;max-width:1500px;margin:0 auto}.td-post-header,.td-post-summary,.td-post-merged{border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px}.td-post-header h2,.td-post-merged h2{margin:0;font-size:17px}.td-post-header p{margin:4px 0 0;color:var(--td-muted)}.td-post-actions{display:flex;gap:8px;flex:none}.td-post-summary{display:flex;align-items:center;gap:18px;padding:10px 14px;color:var(--td-muted)}.td-post-summary>button{margin-left:auto}.td-post-summary button:disabled{opacity:.5;cursor:not-allowed}.td-post-range{display:flex;align-items:center;gap:6px;margin-left:auto}.td-post-range input{width:64px;padding:6px 7px;text-align:center}.td-post-range button{white-space:nowrap}.td-post-summary>.td-post-range+button{margin-left:0}.td-post-error,.td-post-warning{padding:10px 13px;border-radius:7px}.td-post-error{border:1px solid #8b4149;background:#442228;color:#ffd1d5;white-space:pre-wrap}.td-post-warning{border:1px solid #836a32;background:#3a301c;color:#f4d991}.td-post-shot-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(390px,1fr));gap:12px;align-items:start}.td-post-shot{min-width:0;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel);overflow:hidden}.td-post-shot.selected{border-color:#527e6c}.td-post-shot.disabled{opacity:.72}.td-post-shot>header{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid var(--td-line);background:#1d2530}.td-post-shot>header>label{display:flex;align-items:center;gap:9px;min-width:0;cursor:pointer}.td-post-shot>header input{width:18px;height:18px;margin:0;flex:none}.td-post-shot>header label>span{display:flex;min-width:0;gap:8px;align-items:baseline}.td-post-shot>header strong{color:var(--td-text)}.td-post-shot>header em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted);font-style:normal}.td-post-shot>header>span{flex:none;padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted)}.td-post-shot-disabled-note{padding:7px 10px;border-bottom:1px solid var(--td-line);background:#332b1d;color:#e5c77d;font-size:11px}.td-post-shot-empty{min-height:96px;display:flex;align-items:center;justify-content:center;padding:12px;color:var(--td-muted);text-align:center}.td-post-result-list{display:flex;flex-direction:column;gap:7px;max-height:360px;overflow:auto;padding:9px}.td-post-result{display:grid;grid-template-columns:minmax(0,1fr) 35px;gap:6px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:5px}.td-post-result.selected{border-color:var(--td-accent);background:#1c2a2a}.td-shell button.td-post-result-choice{display:grid;grid-template-columns:112px minmax(0,1fr);gap:9px;align-items:center;min-width:0;padding:0;border:0;background:transparent;text-align:left}.td-post-result-choice>span{display:flex;min-width:0;flex-direction:column;gap:3px}.td-post-result-choice>span>strong{display:flex;align-items:center;gap:6px}.td-post-result-choice>span>strong em{padding:1px 5px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-post-result-choice>span>span,.td-post-result-choice>span>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-post-result-choice>span>small{font-size:10px}.td-post-result-play{width:35px;height:35px;padding:0!important}.td-post-result-play:disabled{opacity:.35;cursor:not-allowed}.td-post-merged{padding:12px}.td-post-merged>header>div{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px}.td-post-merged .td-generated-results{display:grid;grid-template-columns:minmax(360px,1.6fr) minmax(300px,1fr);align-items:start}.td-post-merged .td-result-list{max-height:420px}.td-post-preview-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:30;display:flex;align-items:center;justify-content:center;padding:26px;background:#030609d6}.td-post-preview-overlay>section{width:min(980px,100%);max-height:calc(100vh - 52px);overflow:auto;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 80px #000c}.td-post-preview-overlay header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--td-line)}.td-post-preview-overlay header button{font-size:20px;line-height:1;padding:5px 9px}.td-post-preview-overlay video{display:block;width:100%;max-height:calc(100vh - 170px);background:#070a0e}.td-post-preview-overlay p{margin:0;padding:9px 12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}.td-post-summary{flex-wrap:wrap}.td-post-range{margin-left:0}.td-post-summary>button{margin-left:auto}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:900px){.td-post-shot-list,.td-post-merged .td-generated-results{grid-template-columns:1fr}.td-post-header{align-items:flex-start;flex-direction:column}.td-post-actions{width:100%}.td-post-actions button{flex:1}.td-post-summary{align-items:stretch;flex-direction:column;gap:7px}.td-post-range{margin:3px 0;flex-wrap:wrap}.td-post-summary>button{margin:4px 0 0}.td-post-result-list{max-height:none}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}@media(max-width:1000px){.td-asset-batch-list{min-width:900px}.td-asset-batch-panel{overflow:auto}.td-asset-batch-panel>.td-batch-header,.td-asset-dropzone,.td-asset-batch-warning,.td-asset-batch-summary,.td-asset-batch-panel>footer{min-width:864px}}@media(max-width:720px){.td-asset-batch-entry{margin-left:0}}.td-postprocess-shell{display:flex;flex-direction:column;gap:12px;max-width:1500px;margin:0 auto}.td-postprocess-shell>.td-postprocess{max-width:none;width:100%;margin:0}.td-post-mode-tabs{display:flex;gap:7px;padding:5px;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-mode-tabs button{min-width:130px}.td-post-mode-tabs button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-second-pass-panel .td-post-shot>header>span:first-child{display:flex;min-width:0;gap:8px;align-items:baseline;padding:0;background:transparent}.td-second-pass-result{display:grid;grid-template-columns:minmax(0,1fr) 118px;gap:8px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:6px}.td-second-pass-result:has(.td-second-pass-run:disabled){border-color:#34404d}.td-second-pass-run{width:118px;min-height:38px;padding:6px!important}.td-second-pass-run:disabled{opacity:.62;cursor:not-allowed}.td-second-pass-error{grid-column:1/-1;padding:6px 8px;border-radius:5px;background:#442228;color:#ffd1d5;font-size:11px;white-space:pre-wrap}@media(max-width:620px){.td-post-mode-tabs{flex-direction:column}.td-post-mode-tabs button{width:100%}.td-second-pass-result{grid-template-columns:1fr}.td-second-pass-run{width:100%}}", _t = "theodore-director-styles";
function Lr() {
  if (document.getElementById(_t)) return;
  const e = document.createElement("style");
  e.id = _t, e.textContent = Dr, document.head.append(e);
}
Lr();
const Mr = "/scripts/app.js", Fr = "/scripts/api.js";
Promise.all([
  import(
    /* @vite-ignore */
    Mr
  ),
  import(
    /* @vite-ignore */
    Fr
  )
]).then(([{ app: e }, { api: t }]) => {
  const o = async (n) => {
    var w, $;
    const d = ((w = e.graph) == null ? void 0 : w._nodes) ?? [], i = d.find((y) => y.type === "TheodoreDirector_PostprocessSecondPassSource"), a = d.find((y) => y.type === "TheodoreDirector_SaveSecondPass"), p = ($ = i == null ? void 0 : i.widgets) == null ? void 0 : $.find((y) => y.name === "request_json");
    if (!i || !a || !p || a.id === void 0)
      throw new Error("当前工作流缺少后处理单独二采支流，请重新载入仓库中的 V7 导播台示例工作流");
    const b = p.value, c = i.mode, m = a.mode;
    let h;
    try {
      p.value = JSON.stringify(n), i.mode = 0, a.mode = 0, h = await e.graphToPrompt(e.rootGraph);
    } finally {
      p.value = b, i.mode = c, a.mode = m;
    }
    const f = (await t.queuePrompt(0, h, { partialExecutionTargets: [String(a.id)] })).prompt_id;
    if (!f) throw new Error("ComfyUI 没有返回二采任务 ID");
    await new Promise((y, C) => {
      const k = () => {
        t.removeEventListener("execution_success", x), t.removeEventListener("execution_error", I), t.removeEventListener("execution_interrupted", I);
      }, U = (R) => {
        var J;
        return String(((J = R.detail) == null ? void 0 : J.prompt_id) ?? "");
      }, x = (R) => {
        U(R) === f && (k(), y());
      }, I = (R) => {
        if (U(R) !== f) return;
        const J = R.detail ?? {};
        k(), C(new Error(String(J.exception_message ?? J.error ?? "单独二采任务执行失败")));
      };
      t.addEventListener("execution_success", x), t.addEventListener("execution_error", I), t.addEventListener("execution_interrupted", I);
    });
  };
  e.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(n, d) {
      if (d.name === "TheodoreDirector_PostprocessSecondPassSource") {
        const a = n.prototype.onNodeCreated;
        n.prototype.onNodeCreated = function() {
          var b, c;
          a == null || a.apply(this);
          const p = (b = this.widgets) == null ? void 0 : b.find((m) => m.name === "request_json");
          p && (p.type = "hidden", p.computeSize = () => [0, -4]), this.size = [Math.max(((c = this.size) == null ? void 0 : c[0]) ?? 300, 380), 80];
        };
        return;
      }
      if (d.name !== "TheodoreDirector_Project") return;
      const i = n.prototype.onNodeCreated;
      n.prototype.onNodeCreated = function() {
        var p, b;
        i == null || i.apply(this);
        const a = (p = this.widgets) == null ? void 0 : p.find((c) => c.name === "plan_json");
        a && (a.type = "hidden", a.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          var c;
          try {
            const m = JSON.parse(String(a.value)), h = ((c = e.graph) == null ? void 0 : c._nodes) ?? [], l = h.some((f) => f.type === "TheodoreDirector_PostprocessSecondPassSource") && h.some((f) => f.type === "TheodoreDirector_SaveSecondPass");
            Rr(m, (f) => {
              var w, $;
              a.value = JSON.stringify(f, null, 2), this.setDirtyCanvas(!0, !0), ($ = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || $.call(w, !0, !0);
            }, !0, l ? o : void 0);
          } catch (m) {
            window.alert(`Theodore Director: ${m instanceof Error ? m.message : String(m)}`);
          }
        }), this.size = [Math.max(((b = this.size) == null ? void 0 : b[0]) ?? 300, 360), 110]);
      };
    }
  });
});
