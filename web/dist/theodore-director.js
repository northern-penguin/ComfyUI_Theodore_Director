var De, F, zt, le, it, St, $t, Be, Ie, ye, Ct, Qe, We, Je, Pe = {}, je = [], dr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Fe = Array.isArray;
function ne(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Ye(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function ar(e, t, n) {
  var o, a, l, i = {};
  for (l in t) l == "key" ? o = t[l] : l == "ref" ? a = t[l] : i[l] = t[l];
  if (arguments.length > 2 && (i.children = arguments.length > 3 ? De.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (l in e.defaultProps) i[l] === void 0 && (i[l] = e.defaultProps[l]);
  return Te(e, i, o, a, null);
}
function Te(e, t, n, o, a) {
  var l = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++zt, __i: -1, __u: 0 };
  return a == null && F.vnode != null && F.vnode(l), l;
}
function Se(e) {
  return e.children;
}
function Ae(e, t) {
  this.props = e, this.context = t;
}
function fe(e, t) {
  if (t == null) return e.__ ? fe(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? fe(e) : null;
}
function lr(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, o = [], a = [], l = ne({}, t);
    l.__v = t.__v + 1, F.vnode && F.vnode(l), Xe(e.__P, l, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, o, n ?? fe(t), !!(32 & t.__u), a), l.__v = t.__v, l.__.__k[l.__i] = l, Rt(o, l, a), t.__e = t.__ = null, l.__e != n && It(l);
  }
}
function It(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), It(e);
}
function st(e) {
  (!e.__d && (e.__d = !0) && le.push(e) && !Ne.__r++ || it != F.debounceRendering) && ((it = F.debounceRendering) || St)(Ne);
}
function Ne() {
  try {
    for (var e, t = 1; le.length; ) le.length > t && le.sort($t), e = le.shift(), t = le.length, lr(e);
  } finally {
    le.length = Ne.__r = 0;
  }
}
function Tt(e, t, n, o, a, l, i, c, m, p, u) {
  var _, s, v, y, S, z, w = o && o.__k || je, C = t.length;
  for (m = cr(n, t, w, m, C), _ = 0; _ < C; _++) (v = n.__k[_]) != null && (s = v.__i != -1 && w[v.__i] || Pe, v.__i = _, z = Xe(e, v, s, a, l, i, c, m, p, u), y = v.__e, v.ref && s.ref != v.ref && (s.ref && Ze(s.ref, null, v), u.push(v.ref, v.__c || y, v)), S == null && y != null && (S = y), 4 & v.__u ? (m = At(v, m, e), s.__e && (s.__e = null)) : typeof v.type == "function" && z !== void 0 ? m = z : y && (m = y.nextSibling), v.__u &= -7);
  return n.__e = S, m;
}
function cr(e, t, n, o, a) {
  var l, i, c, m, p, u = n.length, _ = u, s = 0;
  for (e.__k = new Array(a), l = 0; l < a; l++) (i = t[l]) != null && typeof i != "boolean" && typeof i != "function" ? (typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? i = e.__k[l] = Te(null, i, null, null, null) : Fe(i) ? i = e.__k[l] = Te(Se, { children: i }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? i = e.__k[l] = Te(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : e.__k[l] = i, m = l + s, i.__ = e, i.__b = e.__b + 1, c = null, (p = i.__i = pr(i, n, m, _)) != -1 && (_--, (c = n[p]) && (c.__u |= 2)), c == null || c.__v == null ? (p == -1 && (a > u ? s-- : a < u && s++), typeof i.type != "function" && (i.__u |= 4)) : p != m && (p == m - 1 ? s-- : p == m + 1 ? s++ : (p > m ? s-- : s++, i.__u |= 4))) : e.__k[l] = null;
  if (_) for (l = 0; l < u; l++) (c = n[l]) != null && (2 & c.__u) == 0 && (c.__e == o && (o = fe(c)), jt(c, c));
  return o;
}
function At(e, t, n) {
  var o, a;
  if (typeof e.type == "function") {
    for (o = e.__k, a = 0; o && a < o.length; a++) o[a] && (o[a].__ = e, t = At(o[a], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = fe(e)), t = n.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function pr(e, t, n, o) {
  var a, l, i, c = e.key, m = e.type, p = t[n], u = p != null && (2 & p.__u) == 0;
  if (p === null && c == null || u && c == p.key && m == p.type) return n;
  if (o > (u ? 1 : 0)) {
    for (a = n - 1, l = n + 1; a >= 0 || l < t.length; ) if ((p = t[i = a >= 0 ? a-- : l++]) != null && (2 & p.__u) == 0 && c == p.key && m == p.type) return i;
  }
  return -1;
}
function dt(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || dr.test(t) ? n : n + "px";
}
function Ce(e, t, n, o, a) {
  var l, i;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof o == "string" && (e.style.cssText = o = ""), o) for (t in o) n && t in n || dt(e.style, t, "");
    if (n) for (t in n) o && n[t] == o[t] || dt(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") l = t != (t = t.replace(Ct, "$1")), i = t.toLowerCase(), t = i in e || t == "onFocusOut" || t == "onFocusIn" ? i.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + l] = n, n ? o ? n[ye] = o[ye] : (n[ye] = Qe, e.addEventListener(t, l ? Je : We, l)) : e.removeEventListener(t, l ? Je : We, l);
  else {
    if (a == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function at(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t[Ie] == null) t[Ie] = Qe++;
      else if (t[Ie] < n[ye]) return;
      return n(F.event ? F.event(t) : t);
    }
  };
}
function Xe(e, t, n, o, a, l, i, c, m, p) {
  var u, _, s, v, y, S, z, w, C, A, b, T, j, D, M, g, E = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (m = !!(32 & n.__u), l = [c = t.__e = n.__e]), (u = F.__b) && u(t);
  e: if (typeof E == "function") {
    _ = i.length;
    try {
      if (C = t.props, A = E.prototype && E.prototype.render, b = (u = E.contextType) && o[u.__c], T = u ? b ? b.props.value : u.__ : o, n.__c ? w = (s = t.__c = n.__c).__ = s.__E : (A ? t.__c = s = new E(C, T) : (t.__c = s = new Ae(C, T), s.constructor = E, s.render = ur), b && b.sub(s), s.state || (s.state = {}), s.__n = o, v = s.__d = !0, s.__h = [], s._sb = []), A && s.__s == null && (s.__s = s.state), A && E.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = ne({}, s.__s)), ne(s.__s, E.getDerivedStateFromProps(C, s.__s))), y = s.props, S = s.state, s.__v = t, v) A && E.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), A && s.componentDidMount != null && s.__h.push(s.componentDidMount);
      else {
        if (A && E.getDerivedStateFromProps == null && C !== y && s.componentWillReceiveProps != null && s.componentWillReceiveProps(C, T), t.__v == n.__v || !s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(C, s.__s, T) === !1) {
          t.__v != n.__v && (s.props = C, s.state = s.__s, s.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(N) {
            N && (N.__ = t);
          }), je.push.apply(s.__h, s._sb), s._sb = [], s.__h.length && i.push(s), c = fe(n);
          break e;
        }
        s.componentWillUpdate != null && s.componentWillUpdate(C, s.__s, T), A && s.componentDidUpdate != null && s.__h.push(function() {
          s.componentDidUpdate(y, S, z);
        });
      }
      if (s.context = T, s.props = C, s.__P = e, s.__e = !1, j = F.__r, D = 0, A) s.state = s.__s, s.__d = !1, j && j(t), u = s.render(s.props, s.state, s.context), je.push.apply(s.__h, s._sb), s._sb = [];
      else do
        s.__d = !1, j && j(t), u = s.render(s.props, s.state, s.context), s.state = s.__s;
      while (s.__d && ++D < 25);
      s.state = s.__s, s.getChildContext != null && (o = ne(ne({}, o), s.getChildContext())), A && !v && s.getSnapshotBeforeUpdate != null && (z = s.getSnapshotBeforeUpdate(y, S)), M = u != null && u.type === Se && u.key == null ? Pt(u.props.children) : u, c = Tt(e, Fe(M) ? M : [M], t, n, o, a, l, i, c, m, p), s.base = t.__e, t.__u &= -161, s.__h.length && i.push(s), w && (s.__E = s.__ = null);
    } catch (N) {
      if (i.length = _, t.__v = null, m || l != null) {
        if (N.then) {
          for (t.__u |= m ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
          l != null && (l[l.indexOf(c)] = null), t.__e = c;
        } else if (l != null) for (g = l.length; g--; ) Ye(l[g]);
      } else t.__e = n.__e;
      t.__k == null && (t.__k = n.__k || []), N.then || Et(t), F.__e(N, t, n);
    }
  } else l == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : c = t.__e = hr(n.__e, t, n, o, a, l, i, m, p);
  return (u = F.diffed) && u(t), 128 & t.__u ? void 0 : c;
}
function Et(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Et));
}
function Rt(e, t, n) {
  for (var o = 0; o < n.length; o++) Ze(n[o], n[++o], n[++o]);
  F.__c && F.__c(t, e), e.some(function(a) {
    try {
      e = a.__h, a.__h = [], e.some(function(l) {
        l.call(a);
      });
    } catch (l) {
      F.__e(l, a.__v);
    }
  });
}
function Pt(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : Fe(e) ? e.map(Pt) : e.constructor !== void 0 ? null : ne({}, e);
}
function hr(e, t, n, o, a, l, i, c, m) {
  var p, u, _, s, v, y, S, z = n.props || Pe, w = t.props, C = t.type;
  if (C == "svg" ? a = "http://www.w3.org/2000/svg" : C == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), l != null) {
    for (p = 0; p < l.length; p++) if ((v = l[p]) && "setAttribute" in v == !!C && (C ? v.localName == C : v.nodeType == 3)) {
      e = v, l[p] = null;
      break;
    }
  }
  if (e == null) {
    if (C == null) return document.createTextNode(w);
    e = document.createElementNS(a, C, w.is && w), c && (F.__m && F.__m(t, l), c = !1), l = null;
  }
  if (C == null) z === w || c && e.data == w || (e.data = w);
  else {
    if (l = C == "textarea" && w.defaultValue != null ? null : l && De.call(e.childNodes), !c && l != null) for (z = {}, p = 0; p < e.attributes.length; p++) z[(v = e.attributes[p]).name] = v.value;
    for (p in z) v = z[p], p == "dangerouslySetInnerHTML" ? _ = v : p == "children" || p in w || p == "value" && "defaultValue" in w || p == "checked" && "defaultChecked" in w || Ce(e, p, null, v, a);
    for (p in w) v = w[p], p == "children" ? s = v : p == "dangerouslySetInnerHTML" ? u = v : p == "value" ? y = v : p == "checked" ? S = v : c && typeof v != "function" || z[p] === v || Ce(e, p, v, z[p], a);
    if (u) c || _ && (u.__html == _.__html || u.__html == e.innerHTML) || (e.innerHTML = u.__html), t.__k = [];
    else if (_ && (e.innerHTML = ""), Tt(t.type == "template" ? e.content : e, Fe(s) ? s : [s], t, n, o, C == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, l, i, l ? l[0] : n.__k && fe(n, 0), c, m), l != null) for (p = l.length; p--; ) Ye(l[p]);
    c && C != "textarea" || (p = "value", C == "progress" && y == null ? e.removeAttribute("value") : y != null && (y !== e[p] || C == "progress" && !y || C == "option" && y != z[p]) && Ce(e, p, y, z[p], a), p = "checked", S != null && S != e[p] && Ce(e, p, S, z[p], a));
  }
  return e;
}
function Ze(e, t, n) {
  try {
    if (typeof e == "function") {
      var o = typeof e.__u == "function";
      o && e.__u(), o && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (a) {
    F.__e(a, n);
  }
}
function jt(e, t, n) {
  var o, a;
  if (F.unmount && F.unmount(e), (o = e.ref) && (o.current && o.current != e.__e || Ze(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (l) {
      F.__e(l, t);
    }
    o.base = o.__P = o.__n = null;
  }
  if (o = e.__k) for (a = 0; a < o.length; a++) o[a] && jt(o[a], t, n || typeof e.type != "function");
  n || Ye(e.__e), e.__c = e.__ = e.__e = void 0;
}
function ur(e, t, n) {
  return this.constructor(e, n);
}
function lt(e, t, n) {
  var o, a, l, i;
  t == document && (t = document.documentElement), F.__ && F.__(e, t), a = (o = !1) ? null : t.__k, l = [], i = [], Xe(t, e = t.__k = ar(Se, null, [e]), a || Pe, Pe, t.namespaceURI, a ? null : t.firstChild ? De.call(t.childNodes) : null, l, a ? a.__e : t.firstChild, o, i), Rt(l, e, i), e.props.children = null;
}
De = je.slice, F = { __e: function(e, t, n, o) {
  for (var a, l, i; t = t.__; ) if ((a = t.__c) && !a.__) try {
    if ((l = a.constructor) && l.getDerivedStateFromError != null && (a.setState(l.getDerivedStateFromError(e)), i = a.__d), a.componentDidCatch != null && (a.componentDidCatch(e, o || {}), i = a.__d), i) return a.__E = a;
  } catch (c) {
    e = c;
  }
  throw e;
} }, zt = 0, Ae.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = ne({}, this.state), typeof e == "function" && (e = e(ne({}, n), this.props)), e && ne(n, e), e != null && this.__v && (t && this._sb.push(t), st(this));
}, Ae.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), st(this));
}, Ae.prototype.render = Se, le = [], St = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $t = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Ne.__r = 0, Be = Math.random().toString(8), Ie = "__d" + Be, ye = "__a" + Be, Ct = /(PointerCapture)$|Capture$/i, Qe = 0, We = at(!1), Je = at(!0);
var mr = 0;
function r(e, t, n, o, a, l) {
  t || (t = {});
  var i, c, m = t;
  if ("ref" in m) for (c in m = {}, t) c == "ref" ? i = t[c] : m[c] = t[c];
  var p = { type: e, props: m, key: n, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --mr, __i: -1, __u: 0, __source: a, __self: l };
  if (typeof e == "function" && (i = e.defaultProps)) for (c in i) m[c] === void 0 && (m[c] = i[c]);
  return F.vnode && F.vnode(p), p;
}
var we, V, Ve, ct, Le = 0, Nt = [], W = F, pt = W.__b, ht = W.__r, ut = W.diffed, mt = W.__c, ft = W.unmount, gt = W.__;
function et(e, t) {
  W.__h && W.__h(V, e, Le || t), Le = 0;
  var n = V.__H || (V.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function I(e) {
  return Le = 1, fr(Mt, e);
}
function fr(e, t, n) {
  var o = et(we++, 2);
  if (o.t = e, !o.__c && (o.__ = [Mt(void 0, t), function(c) {
    var m = o.__N ? o.__N[0] : o.__[0], p = o.t(m, c);
    m !== p && (o.__N = [p, o.__[1]], o.__c.setState({}));
  }], o.__c = V, !V.__f)) {
    var a = function(c, m, p) {
      if (!o.__c.__H) return !0;
      var u = !1, _ = o.__c.props !== c;
      if (o.__c.__H.__.some(function(v) {
        if (v.__N) {
          u = !0;
          var y = v.__[0];
          v.__ = v.__N, v.__N = void 0, y !== v.__[0] && (_ = !0);
        }
      }), l) {
        var s = l.call(this, c, m, p);
        return u ? s || _ : s;
      }
      return !u || _;
    };
    V.__f = !0;
    var l = V.shouldComponentUpdate, i = V.componentWillUpdate;
    V.componentWillUpdate = function(c, m, p) {
      if (this.__e) {
        var u = l;
        l = void 0, a(c, m, p), l = u;
      }
      i && i.call(this, c, m, p);
    }, V.shouldComponentUpdate = a;
  }
  return o.__N || o.__;
}
function ke(e, t) {
  var n = et(we++, 3);
  !W.__s && Lt(n.__H, t) && (n.__ = e, n.u = t, V.__H.__h.push(n));
}
function tt(e) {
  return Le = 5, _e(function() {
    return { current: e };
  }, []);
}
function _e(e, t) {
  var n = et(we++, 7);
  return Lt(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function gr() {
  for (var e; e = Nt.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(Ee), t.__h.some(Ge), t.__h = [];
    } catch (n) {
      t.__h = [], W.__e(n, e.__v);
    }
  }
}
W.__b = function(e) {
  V = null, pt && pt(e);
}, W.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), gt && gt(e, t);
}, W.__r = function(e) {
  ht && ht(e), we = 0;
  var t = (V = e.__c).__H;
  t && (Ve === V ? (t.__h = [], V.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(Ee), t.__h.some(Ge), t.__h = [], we = 0)), Ve = V;
}, W.diffed = function(e) {
  ut && ut(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Nt.push(t) !== 1 && ct === W.requestAnimationFrame || ((ct = W.requestAnimationFrame) || br)(gr)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), Ve = V = null;
}, W.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(Ee), n.__h = n.__h.filter(function(o) {
        return !o.__ || Ge(o);
      });
    } catch (o) {
      t.some(function(a) {
        a.__h && (a.__h = []);
      }), t = [], W.__e(o, n.__v);
    }
  }), mt && mt(e, t);
}, W.unmount = function(e) {
  ft && ft(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(o) {
    try {
      Ee(o);
    } catch (a) {
      t = a;
    }
  }), n.__H = void 0, t && W.__e(t, n.__v));
};
var bt = typeof requestAnimationFrame == "function";
function br(e) {
  var t, n = function() {
    clearTimeout(o), bt && cancelAnimationFrame(t), setTimeout(e);
  }, o = setTimeout(n, 35);
  bt && (t = requestAnimationFrame(n));
}
function Ee(e) {
  var t = V, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), V = t;
}
function Ge(e) {
  var t = V;
  e.__c = e.__(), V = t;
}
function Lt(e, t) {
  return !e || e.length !== t.length || t.some(function(n, o) {
    return n !== e[o];
  });
}
function Mt(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const xr = {
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
function Dt(e) {
  var o;
  const t = ((o = e.name.split(".").pop()) == null ? void 0 : o.toLocaleLowerCase()) ?? "";
  if (e.name.includes(".")) return xr[t] ?? null;
  const n = e.type.split("/", 1)[0];
  return n === "image" || n === "video" || n === "audio" ? n : null;
}
function _r(e) {
  const a = e.replace(/\.[^.]+$/, "").replace(/^\s*\d+\s*[-_. ]+/, "").normalize("NFKC").replace(/[\s-]+/g, "_").replace(/[{}]/g, "").replace(/_+/g, "_").replace(/^[_\.]+|[_\.]+$/g, "").slice(0, 96) || "asset";
  return a.toLocaleLowerCase().endsWith(".audio") ? `${a}_asset` : a;
}
function vr(e, t) {
  const n = new Set(Array.from(t, (a) => a.toLocaleLowerCase()));
  if (!n.has(e.toLocaleLowerCase())) return e;
  let o = 2;
  for (; n.has(`${e}_${o}`.toLocaleLowerCase()); ) o += 1;
  return `${e}_${o}`;
}
function yr(e, t, n) {
  const o = e.trim().toLocaleLowerCase();
  return !e.trim() || /[\s{}]/.test(e) || o.endsWith(".audio") ? "invalid" : Array.from(t, (l) => l.toLocaleLowerCase()).includes(o) || Array.from(n, (l) => l.trim().toLocaleLowerCase()).filter((l) => l === o).length > 1 ? "duplicate" : null;
}
function wr(e, t, n) {
  const o = new Set(Array.from(t)), a = [], l = [];
  for (const i of e) {
    const c = Dt(i);
    if (!c) {
      l.push(i.name);
      continue;
    }
    const m = vr(_r(i.name), o);
    o.add(m), a.push({ id: n(), file: i, alias: m, kind: c, durationSeconds: c === "image" ? null : 2, includeVideoAudio: !1, status: "pending", error: "" });
  }
  return { drafts: a, rejected: l };
}
function kr(e, t, n) {
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
function zr(e, t) {
  return t === "image" ? Promise.resolve(null) : new Promise((n) => {
    const o = document.createElement(t === "video" ? "video" : "audio"), a = URL.createObjectURL(e);
    let l = !1;
    const i = (c) => {
      l || (l = !0, o.onloadedmetadata = null, o.onerror = null, o.removeAttribute("src"), o.load(), URL.revokeObjectURL(a), n(c));
    };
    o.preload = "metadata", o.onloadedmetadata = () => i(Number.isFinite(o.duration) && o.duration > 0 ? Math.round(o.duration * 10) / 10 : null), o.onerror = () => i(null), o.src = a;
  });
}
const Sr = () => `asset_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`, Ke = (e, t) => t === "zh" ? { image: "图片", video: "视频", audio: "音频" }[e] : e;
function $r({ language: e, assets: t, projectName: n, onClose: o, onImported: a, uploadFile: l }) {
  const [i, c] = I([]), [m, p] = I([]), [u, _] = I(!1), [s, v] = I(!1), y = tt([]);
  y.current = i;
  const S = t.map((g) => g.alias), z = (g, E) => c((N) => N.map((R) => R.id === g ? { ...R, ...E } : R)), w = (g) => {
    if (!g.length || s) return;
    const E = [...S, ...y.current.map((R) => R.alias)], N = wr(g, E, Sr);
    N.rejected.length && p((R) => [...R, ...N.rejected]), N.drafts.length && (c((R) => [...R, ...N.drafts]), N.drafts.forEach((R) => {
      zr(R.file, R.kind).then((J) => {
        J != null && c((X) => X.map((K) => K.id === R.id && K.kind === R.kind && K.durationSeconds === 2 ? { ...K, durationSeconds: J } : K));
      });
    }));
  }, A = i.filter((g) => g.status !== "imported").map((g) => g.alias), b = (g) => {
    if (g.status === "imported") return null;
    const E = yr(g.alias, S, A);
    return E === "invalid" ? e === "zh" ? "别名为空、包含空白/花括号，或使用了保留后缀 .audio" : "Alias is empty, contains whitespace/braces, or uses reserved .audio" : E === "duplicate" ? e === "zh" ? "别名与素材库或本批次其他素材重复" : "Alias duplicates an existing or staged asset" : Dt(g.file) !== g.kind ? e === "zh" ? "文件扩展名与所选类型不匹配" : "The extension does not match the selected kind" : g.kind !== "image" && (g.durationSeconds == null || g.durationSeconds <= 0) ? e === "zh" ? "视频或音频时长必须大于 0" : "Video/audio duration must be greater than 0" : null;
  }, T = async () => {
    const E = y.current.filter((X) => X.status === "pending" || X.status === "error");
    if (!E.length) return;
    if (E.some(b)) {
      window.alert(e === "zh" ? "请先修正列表中标红的项目。" : "Fix the highlighted rows before importing.");
      return;
    }
    v(!0);
    const N = Math.max(0, ...t.map((X) => X.fixedOrder)) + 1;
    let R = 0;
    const J = async () => {
      for (; R < E.length; ) {
        const X = R++, K = E[X];
        z(K.id, { status: "uploading", error: "" });
        try {
          const he = await l(n, K.kind, K.file);
          a([kr(K, he, N + X)]), z(K.id, { status: "imported", error: "" });
        } catch (he) {
          z(K.id, { status: "error", error: String(he) });
        }
      }
    };
    await Promise.all(Array.from({ length: Math.min(2, E.length) }, J)), v(!1);
  }, j = i.filter((g) => g.status === "imported").length, D = i.filter((g) => g.status === "error").length, M = i.length - j;
  return /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-asset-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": e === "zh" ? "批量导入素材" : "Batch import assets", children: [
    /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: e === "zh" ? "批量导入素材" : "Batch import assets" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "可混合选择图片、视频和音频；确认列表后再写入素材库。" : "Select images, videos, and audio together; review before uploading." })
      ] }),
      /* @__PURE__ */ r("button", { disabled: s, "aria-label": e === "zh" ? "关闭" : "Close", onClick: o, children: "×" })
    ] }),
    /* @__PURE__ */ r("label", { class: `td-asset-dropzone ${u ? "dragging" : ""}`, onDragEnter: (g) => {
      g.preventDefault(), _(!0);
    }, onDragOver: (g) => g.preventDefault(), onDragLeave: (g) => {
      g.currentTarget === g.target && _(!1);
    }, onDrop: (g) => {
      var E;
      g.preventDefault(), _(!1), w(Array.from(((E = g.dataTransfer) == null ? void 0 : E.files) ?? []));
    }, children: [
      /* @__PURE__ */ r("strong", { children: e === "zh" ? "拖拽素材到这里，或点击选择多个文件" : "Drop media here, or click to select multiple files" }),
      /* @__PURE__ */ r("span", { children: e === "zh" ? "支持图片、视频、音频混合导入" : "Mixed image, video, and audio selection is supported" }),
      /* @__PURE__ */ r("input", { type: "file", multiple: !0, accept: "image/*,video/*,audio/*", disabled: s, onChange: (g) => {
        w(Array.from(g.currentTarget.files ?? [])), g.currentTarget.value = "";
      } })
    ] }),
    m.length > 0 && /* @__PURE__ */ r("div", { class: "td-asset-batch-warning", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `已跳过 ${m.length} 个不支持的文件：${m.join("、")}` : `Skipped ${m.length} unsupported files: ${m.join(", ")}` }),
      /* @__PURE__ */ r("button", { onClick: () => p([]), children: "×" })
    ] }),
    /* @__PURE__ */ r("div", { class: "td-asset-batch-summary", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `共 ${i.length} 项 · 已导入 ${j} · 待处理 ${M}${D ? ` · 失败 ${D}` : ""}` : `${i.length} items · ${j} imported · ${M} pending${D ? ` · ${D} failed` : ""}` }),
      /* @__PURE__ */ r("button", { disabled: s || !i.length, onClick: () => c([]), children: e === "zh" ? "清空列表" : "Clear list" })
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
      !i.length && /* @__PURE__ */ r("div", { class: "td-asset-batch-empty", children: e === "zh" ? "尚未选择素材" : "No media selected" }),
      i.map((g) => {
        const E = b(g), N = s || g.status === "imported" || g.status === "uploading";
        return /* @__PURE__ */ r("div", { class: `td-asset-batch-row ${E || g.status === "error" ? "invalid" : ""} ${g.status === "imported" ? "imported" : ""}`, children: [
          /* @__PURE__ */ r("div", { class: "td-asset-batch-file", children: [
            /* @__PURE__ */ r("strong", { title: g.file.name, children: g.file.name }),
            /* @__PURE__ */ r("small", { children: [
              (g.file.size / 1024 / 1024).toFixed(1),
              " MB · ",
              g.status === "pending" ? e === "zh" ? "待导入" : "Pending" : g.status === "uploading" ? e === "zh" ? "上传中" : "Uploading" : g.status === "imported" ? e === "zh" ? "已完成" : "Imported" : e === "zh" ? "失败" : "Failed"
            ] }),
            (E || g.error) && /* @__PURE__ */ r("em", { title: E || g.error, children: E || g.error })
          ] }),
          /* @__PURE__ */ r("input", { disabled: N, value: g.alias, onInput: (R) => z(g.id, { alias: R.currentTarget.value, status: "pending", error: "" }) }),
          /* @__PURE__ */ r("select", { disabled: N, value: g.kind, onChange: (R) => {
            const J = R.currentTarget.value;
            z(g.id, { kind: J, durationSeconds: J === "image" ? null : g.durationSeconds ?? 2, includeVideoAudio: J === "video" && g.includeVideoAudio, status: "pending", error: "" });
          }, children: [
            /* @__PURE__ */ r("option", { value: "image", children: Ke("image", e) }),
            /* @__PURE__ */ r("option", { value: "video", children: Ke("video", e) }),
            /* @__PURE__ */ r("option", { value: "audio", children: Ke("audio", e) })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", disabled: N || g.kind === "image", value: g.durationSeconds ?? "", onInput: (R) => z(g.id, { durationSeconds: R.currentTarget.value ? Number(R.currentTarget.value) : null, status: "pending", error: "" }) }),
            /* @__PURE__ */ r("span", { children: g.kind === "image" ? "—" : e === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-audio", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", disabled: N || g.kind !== "video", checked: g.kind === "video" && g.includeVideoAudio, onChange: (R) => z(g.id, { includeVideoAudio: R.currentTarget.checked }) }),
            /* @__PURE__ */ r("span", { children: g.kind === "video" ? g.includeVideoAudio ? e === "zh" ? "开" : "ON" : e === "zh" ? "关" : "OFF" : "—" })
          ] }),
          /* @__PURE__ */ r("button", { class: "danger", disabled: N, onClick: () => c((R) => R.filter((J) => J.id !== g.id)), children: e === "zh" ? "移除" : "Remove" })
        ] }, g.id);
      })
    ] }),
    /* @__PURE__ */ r("footer", { children: [
      /* @__PURE__ */ r("button", { disabled: s, onClick: o, children: e === "zh" ? "关闭" : "Close" }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: s || !i.some((g) => g.status === "pending" || g.status === "error"), onClick: () => void T(), children: s ? e === "zh" ? "正在导入…" : "Importing…" : D ? e === "zh" ? "重试失败项" : "Retry failed" : e === "zh" ? "开始导入" : "Start import" })
    ] })
  ] }) });
}
const Ft = String.raw`\{\{ref:([^{}]+)}}`;
function xt() {
  return new RegExp(Ft, "g");
}
function Ot(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const o of e.assets)
    o.enabled && o.path.trim() && (!o.shotIds.length || o.shotIds.includes(t.id)) && !t.disabledAssetIds.includes(o.id) && n.set(o.alias, o);
  return n;
}
function Ut(e, t, n) {
  const o = n.trim(), a = o.endsWith(".audio"), l = a ? o.slice(0, -6) : o, i = Ot(e, t).get(l);
  return i ? !a || i.kind === "video" && i.includeVideoAudio : !1;
}
function _t(e, t) {
  const n = e.shots.filter((o) => o.enabled);
  return n.length > 0 && n.every((o) => Ut(e, o, t));
}
function Ht(e, t) {
  const n = [], o = Ot(e, t), a = [e.promptPrefix, t.prompt, e.promptSuffix].filter(Boolean).join(`
`), l = [...a.matchAll(xt())].map((b) => b[1].trim()), i = [], c = /* @__PURE__ */ new Set(), m = (b) => {
    c.has(b.id) || (c.add(b.id), i.push(b));
  };
  [...o.values()].filter((b) => b.fixed).sort((b, T) => b.fixedOrder - T.fixedOrder || b.alias.localeCompare(T.alias)).forEach(m);
  for (const b of l) {
    const T = b.endsWith(".audio") ? b.slice(0, -6) : b, j = o.get(T);
    if (!j) {
      n.push(`未找到或已禁用素材：${b}`);
      continue;
    }
    b.endsWith(".audio") && (j.kind !== "video" || !j.includeVideoAudio) && n.push(`视频伴音未启用：${b}`), m(j);
  }
  const p = i.filter((b) => b.kind === "image"), u = i.filter((b) => b.kind === "video"), _ = u.filter((b) => b.includeVideoAudio), s = i.filter((b) => b.kind === "audio"), v = _.length + s.length, y = p.length + u.length + s.length;
  p.length > 9 && n.push(`参考图 ${p.length}/9，超出 H3 上限`), u.length > 3 && n.push(`参考视频 ${u.length}/3，超出 H3 上限`), v > 3 && n.push(`有效音频 ${v}/3，超出 H3 总上限`), y > 12 && n.push(`混合文件 ${y}/12，超出 H3 上限`), v && !p.length && !u.length && n.push("音频参考不能单独使用");
  const S = u.filter((b) => typeof b.durationSeconds == "number");
  for (const b of u) (b.durationSeconds == null || b.durationSeconds < 2 || b.durationSeconds > 15) && n.push(`视频 ${b.alias} 的时长必须为 2–15 秒`);
  S.reduce((b, T) => b + (T.durationSeconds ?? 0), 0) > 15 && n.push("参考视频总时长超过 15 秒");
  const z = [..._.map((b) => b.audioDurationSeconds ?? b.durationSeconds), ...s.map((b) => b.durationSeconds)];
  z.some((b) => b == null || b < 2 || b > 15) && n.push("每路有效音频时长必须为 2–15 秒"), z.reduce((b, T) => b + (T ?? 0), 0) > 15 && n.push("有效音频总时长超过 15 秒");
  const w = /* @__PURE__ */ new Map();
  p.forEach((b, T) => w.set(b.alias, `<Picture ${T + 1}>`)), u.forEach((b, T) => w.set(b.alias, `<Video ${T + 1}>`)), _.forEach((b, T) => w.set(`${b.alias}.audio`, `<Audio ${T + 1}>`)), s.forEach((b, T) => w.set(b.alias, `<Audio ${_.length + T + 1}>`));
  const C = a.replace(xt(), (b, T) => w.get(T.trim()) ?? b), A = [...w.entries()].map(([b, T]) => ({ label: T, alias: b, kind: T.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: C, errors: n, slots: A, mixedFiles: y, audioCount: v };
}
function Cr(e) {
  var a, l, i, c, m, p;
  const t = [];
  (l = (a = e.project) == null ? void 0 : a.name) != null && l.trim() || t.push("Project name 不能为空"), (c = (i = e.project) == null ? void 0 : i.runId) != null && c.trim() || t.push("Run ID 不能为空"), (!Array.isArray(e.shots) || !e.shots.some((u) => u.enabled)) && t.push("至少需要一个启用分镜");
  const n = /* @__PURE__ */ new Set();
  for (const u of e.shots ?? [])
    (!((m = u.id) != null && m.trim()) || n.has(u.id)) && t.push(`分镜 ID 为空或重复：${u.id || "(空)"}`), n.add(u.id), u.durationSeconds > 0 || t.push(`分镜 ${u.id} 的时长必须大于 0`);
  const o = /* @__PURE__ */ new Set();
  for (const u of e.assets ?? []) {
    const _ = (p = u.alias) == null ? void 0 : p.toLocaleLowerCase();
    (!u.alias || /[\s{}]/.test(u.alias) || u.alias.endsWith(".audio") || o.has(_)) && t.push(`素材别名无效或重复：${u.alias || "(空)"}`), o.add(_), u.enabled && !u.path && t.push(`素材 ${u.alias} 尚未选择文件`);
  }
  for (const u of e.shots.filter((_) => _.enabled)) t.push(...Ht(e, u).errors.map((_) => `${u.title}: ${_}`));
  return [...new Set(t)];
}
function Ir(e, t) {
  const n = [], o = new RegExp(Ft, "g");
  let a = 0;
  for (const l of e.matchAll(o)) {
    const i = l.index ?? 0;
    i > a && n.push({ text: e.slice(a, i), reference: !1 }), n.push({ text: l[0], reference: !0, valid: t(l[1]) }), a = i + l[0].length;
  }
  return a < e.length && n.push({ text: e.slice(a), reference: !1 }), n;
}
function qe({ value: e, rows: t, onInput: n, isReferenceValid: o }) {
  const a = tt(null), l = Ir(e, o), i = (c) => {
    a.current && (a.current.scrollTop = c.currentTarget.scrollTop, a.current.scrollLeft = c.currentTarget.scrollLeft);
  };
  return /* @__PURE__ */ r("span", { class: "td-highlight-textarea", children: [
    /* @__PURE__ */ r("pre", { ref: a, class: "td-highlight-backdrop", "aria-hidden": "true", children: [
      l.map((c, m) => c.reference ? /* @__PURE__ */ r("mark", { class: c.valid ? "valid" : "invalid", children: c.text }, m) : c.text),
      e.endsWith(`
`) && " "
    ] }),
    /* @__PURE__ */ r("textarea", { class: "td-highlight-input", rows: t, value: e, onInput: n, onScroll: i })
  ] });
}
const Tr = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", postprocess: "后处理", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", postprocess: "Post-process", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function me(e, t) {
  return Tr[e][t];
}
function ce(e) {
  return (Array.isArray(e.results) && e.results.length ? e.results : e.path ? [{ path: e.path, bytes: e.bytes, modifiedAt: e.modifiedAt, stage: e.stage, sourcePath: e.sourcePath, completedAt: e.completedAt }] : []).filter((n) => typeof n.path == "string" && n.path.trim().length > 0).sort((n, o) => (o.modifiedAt ?? 0) - (n.modifiedAt ?? 0));
}
function Bt(e, t) {
  const n = /_video_(\d+)/i.exec(e.replace(/\\/g, "/"));
  return n ? Number(n[1]) : t;
}
function Ar(e) {
  return e.stage !== "second_pass";
}
function Me({ src: e, alt: t }) {
  const n = tt(null), [o, a] = I(!1);
  return ke(() => {
    const l = n.current;
    if (!l) return;
    if (!("IntersectionObserver" in window)) {
      a(!0);
      return;
    }
    const i = new IntersectionObserver((c) => {
      a(c.some((m) => m.isIntersecting));
    }, { rootMargin: "160px" });
    return i.observe(l), () => i.disconnect();
  }, []), /* @__PURE__ */ r("div", { class: "td-result-thumb", ref: n, children: o ? /* @__PURE__ */ r("video", { src: e, "aria-label": t, muted: !0, playsInline: !0, preload: "metadata", onLoadedMetadata: (l) => {
    const i = l.currentTarget;
    Number.isFinite(i.duration) && i.duration > 0.02 && (i.currentTime = Math.min(0.25, Math.max(0, i.duration - 0.05)));
  } }) : /* @__PURE__ */ r("span", { children: "…" }) });
}
function Vt(e, t) {
  const n = e.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!n || n.startsWith("/") || /^[A-Za-z]:\//.test(n)) return null;
  const o = n.split("/").filter(Boolean), a = o.pop();
  if (!a || o.some((i) => i === "..")) return null;
  const l = new URLSearchParams({ filename: a, type: t });
  return o.length && l.set("subfolder", o.join("/")), `/view?${l.toString()}`;
}
function Er(e) {
  return Vt(e, "input");
}
function xe(e) {
  return e ? e.url && /^https:\/\//i.test(e.url) ? e.url : Vt(e.path, "output") : null;
}
function oe(e) {
  return (e.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "").split(/[?#]/, 1)[0];
}
function vt({ asset: e, compact: t = !1 }) {
  const n = Er(e.path), o = `td-media-preview ${t ? "compact" : ""}`;
  return n ? e.kind === "image" ? /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("img", { src: n, alt: e.alias, loading: "lazy" }) }) : e.kind === "video" ? /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("video", { src: n, controls: !0, preload: "metadata", playsInline: !0 }) }) : /* @__PURE__ */ r("div", { class: o, children: /* @__PURE__ */ r("audio", { src: n, controls: !0, preload: "metadata" }) }) : e.path ? /* @__PURE__ */ r("div", { class: `${o} unavailable`, children: "该路径无法在浏览器中预览 / Preview unavailable" }) : /* @__PURE__ */ r("div", { class: `${o} empty`, children: "尚未选择素材 / No media selected" });
}
function Kt(e) {
  let t = 0;
  return e.shots.map((n, o) => {
    const a = {
      key: `${o}:${n.id}`,
      shot: n,
      sourceIndex: o,
      activeIndex: n.enabled ? t : -1
    };
    return n.enabled && (t += 1), a;
  });
}
function Rr(e, t, n) {
  return e.filter((o) => o.shot.enabled && t[o.key]).map((o) => ({
    shotId: o.shot.id,
    activeIndex: o.activeIndex,
    path: n[o.key] ?? ""
  }));
}
function Pr(e, t, n) {
  const o = {};
  return e.forEach((a) => {
    const l = a.sourceIndex + 1;
    o[a.key] = a.shot.enabled && l >= t && l <= n;
  }), o;
}
const jr = /* @__PURE__ */ new Set(["mp4", "mov", "mkv", "webm", "avi"]);
function pe(e, t = window.location.hostname) {
  if (e.mode !== "auto") return e.mode;
  const n = t.toLowerCase();
  return n === "runninghub.cn" || n.endsWith(".runninghub.cn") ? "runninghub" : "local";
}
function qt(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.split(/\r?\n|,/).map((o) => o.trim()).filter(Boolean).forEach((o) => {
    const a = o.indexOf("="), l = a >= 0 ? o.slice(0, a).trim() : "workflow", i = (a >= 0 ? o.slice(a + 1) : o).trim();
    if (!i || !/^[A-Za-z0-9_-]+$/.test(i)) return;
    const c = l.toLowerCase() === "merged" ? "merged" : l || "workflow", m = `${c}\0${i}`;
    n.has(m) || (n.add(m), t.push({ target: c, taskId: i }));
  }), t;
}
function Wt(e, t = window.location) {
  const n = t.hostname.toLowerCase(), o = n === "runninghub.cn" || n.endsWith(".runninghub.cn") ? t.origin : "https://www.runninghub.cn";
  return new URL(e, o).toString();
}
async function ze(e) {
  const t = await e.json();
  if (!e.ok) throw new Error(t.error || t.message || `HTTP ${e.status}`);
  return t;
}
async function Nr(e, t, n, o) {
  var m;
  if (pe(e) === "local") {
    const p = new FormData();
    p.append("projectName", t), p.append("kind", n), p.append("file", o);
    const u = await fetch("/theodore-director/v1/assets", { method: "POST", body: p }), _ = await ze(u);
    if (!_.path) throw new Error("上传响应缺少 path");
    return _.path;
  }
  const a = e.apiKey.trim();
  if (!a) throw new Error("请先在项目设置中填写 RunningHub API Key（密钥只保存在当前页面）");
  const l = new FormData();
  l.append("file", o);
  const i = await fetch(Wt("/openapi/v2/media/upload/binary"), {
    method: "POST",
    headers: { Authorization: `Bearer ${a}` },
    body: l
  }), c = await ze(i);
  if (c.code !== 0 || !((m = c.data) != null && m.fileName)) throw new Error(c.message || "RunningHub 上传响应缺少 fileName");
  return c.data.fileName;
}
async function Jt(e, t) {
  const n = await fetch(Wt("/openapi/v2/query"), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${e}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ taskId: t })
  });
  return ze(n);
}
function Gt(e, t) {
  return {
    path: t.url,
    url: t.url,
    provider: "runninghub",
    taskId: e,
    stage: "legacy_unknown"
  };
}
function Qt(e) {
  return (e.results ?? []).filter((t) => {
    const n = t.outputType.toLowerCase().replace(/^\./, "");
    return jr.has(n) && /^https:\/\//i.test(t.url);
  });
}
function Lr(e, t, n) {
  const o = t.shots.filter((i) => i.enabled), a = o.findIndex((i) => i.id === n.id);
  if (a < 0 || !o.length) return [];
  const l = e.filter((i) => decodeURIComponent(i.url).includes(n.id));
  return l.length ? l : o.length === 1 ? e : e.length >= o.length ? e.filter((i, c) => c % o.length === a) : [];
}
async function Mr(e, t, n) {
  const o = new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t.id,
    activeIndex: String(n)
  }), a = await fetch(`/theodore-director/v1/generated-video?${o.toString()}`);
  return ze(a);
}
async function rt(e, t, n, o) {
  if (pe(e) === "local") return Mr(t, n, o);
  const a = e.apiKey.trim();
  if (!a) return { found: !1, results: [], error: "请先填写 RunningHub API Key" };
  const l = qt(e.taskMappings).filter((p) => p.target === "workflow" || p.target === n.id);
  if (!l.length) return { found: !1, results: [], error: `请添加工作流 taskId，或填写 ${n.id}=taskId` };
  const i = [], c = [];
  for (const p of l) {
    const u = await Jt(a, p.taskId), _ = String(u.status ?? "").toUpperCase();
    if (_ && _ !== "SUCCESS") {
      ["FAILED", "ERROR", "CANCELED", "CANCELLED"].includes(_) && c.push(u.errorMessage || `${p.taskId}: ${_}`);
      continue;
    }
    const s = Qt(u), v = p.target === n.id ? s : Lr(s, t, n);
    i.push(...v.map((y) => Gt(p.taskId, y)));
  }
  const m = [...new Map(i.map((p) => [p.url || p.path, p])).values()];
  return { found: m.length > 0, count: m.length, results: m, error: m.length ? void 0 : c.join("；") || void 0 };
}
async function Dr(e, t) {
  if (pe(e) === "local") {
    const i = new URLSearchParams({ projectName: t.project.name, runId: t.project.runId }), c = await fetch(`/theodore-director/v1/postprocess/merged-videos?${i.toString()}`);
    return ze(c);
  }
  const n = e.apiKey.trim();
  if (!n) return { found: !1, results: [], error: "请先填写 RunningHub API Key" };
  const o = qt(e.taskMappings).filter((i) => i.target === "merged"), a = [];
  for (const i of o) {
    const c = await Jt(n, i.taskId);
    a.push(...Qt(c).map((m) => Gt(i.taskId, m)));
  }
  const l = [...new Map(a.map((i) => [i.url || i.path, i])).values()];
  return { found: l.length > 0, count: l.length, results: l };
}
function Fr(e, t) {
  return e === "second_pass" ? t === "zh" ? "二采" : "2nd pass" : e === "first_pass" ? t === "zh" ? "一采" : "1st pass" : t === "zh" ? "旧结果" : "Legacy";
}
function Or({ plan: e, language: t, runtime: n, queueSecondPass: o }) {
  const a = _e(() => Kt(e), [e]), [l, i] = I({}), [c, m] = I({}), [p, u] = I(null), [_, s] = I(0);
  ke(() => {
    let y = !1;
    const S = {};
    return a.forEach((z) => {
      S[z.key] = { loading: !0, response: { found: !1, results: [] } };
    }), i(S), a.forEach((z) => {
      rt(n, e, z.shot, z.activeIndex).then((w) => {
        y || i((C) => ({ ...C, [z.key]: { loading: !1, response: w } }));
      }).catch((w) => {
        y || i((C) => ({ ...C, [z.key]: { loading: !1, response: { found: !1, results: [], error: String(w) } } }));
      });
    }), () => {
      y = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((y) => y.id).join("|"), _, n.mode, n.apiKey, n.taskMappings]);
  const v = async (y, S) => {
    if (o) {
      m((z) => ({ ...z, [S]: { state: "queued" } }));
      try {
        await o({
          plan: e,
          shotId: y,
          sourcePath: S,
          requestId: `td2_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`
        }), m((z) => ({ ...z, [S]: { state: "done" } })), s((z) => z + 1);
      } catch (z) {
        m((w) => ({ ...w, [S]: { state: "error", message: String(z instanceof Error ? z.message : z) } }));
      }
    }
  };
  return /* @__PURE__ */ r("section", { class: "td-postprocess td-second-pass-panel", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "单独二采" : "Standalone second pass" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "从满意的一采抽卡直接执行二采，不重跑一采，也不启动 Impact 循环。" : "Refine a selected first-pass result without rerunning the first pass or the Impact loop." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: /* @__PURE__ */ r("button", { onClick: () => s((y) => y + 1), children: [
        "↻ ",
        t === "zh" ? "刷新结果" : "Refresh"
      ] }) })
    ] }),
    !o && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "当前工作流缺少后处理二采支流，请重新载入仓库中的 V7 导播台示例工作流。" : "This workflow does not contain the standalone second-pass branch. Reload the V7 example workflow from the repository." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: a.map((y) => {
      const S = l[y.key], z = ce((S == null ? void 0 : S.response) ?? { results: [] });
      return /* @__PURE__ */ r("article", { class: "td-post-shot", children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("span", { children: [
            /* @__PURE__ */ r("strong", { children: y.shot.id }),
            /* @__PURE__ */ r("em", { children: y.shot.title })
          ] }),
          /* @__PURE__ */ r("span", { children: [
            y.shot.durationSeconds,
            "s"
          ] })
        ] }),
        !y.shot.enabled && /* @__PURE__ */ r("div", { class: "td-post-shot-disabled-note", children: t === "zh" ? "镜头已禁用，但仍可对历史一采结果进行后处理。" : "This shot is disabled, but its historical first-pass results remain available." }),
        S != null && S.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading results…" }) : S != null && S.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : z.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: z.map((w) => {
          const C = xe(w), A = c[w.path], b = Ar(w);
          return /* @__PURE__ */ r("div", { class: "td-second-pass-result", children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", onClick: () => C && u({ path: C, title: `${y.shot.id} · ${y.shot.title}` }), children: [
              C ? /* @__PURE__ */ r(Me, { src: C, alt: oe(w.path) }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  Fr(w.stage, t),
                  (w.stage === "legacy_unknown" || !w.stage) && /* @__PURE__ */ r("em", { children: t === "zh" ? "兼容" : "Compatible" })
                ] }),
                /* @__PURE__ */ r("span", { title: w.path, children: oe(w.path) }),
                /* @__PURE__ */ r("small", { children: w.bytes ? `${(w.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "primary td-second-pass-run", disabled: !o || !b || (A == null ? void 0 : A.state) === "queued", onClick: () => void v(y.shot.id, w.path), children: b ? (A == null ? void 0 : A.state) === "queued" ? t === "zh" ? "排队/执行中…" : "Queued/running…" : (A == null ? void 0 : A.state) === "done" ? t === "zh" ? "二采完成" : "Completed" : t === "zh" ? "进行二采" : "Run second pass" : t === "zh" ? "已是二采" : "Already refined" }),
            (A == null ? void 0 : A.state) === "error" && /* @__PURE__ */ r("div", { class: "td-second-pass-error", children: A.message })
          ] }, w.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "没有可用的一采结果" : "No first-pass result available" })
      ] }, y.key);
    }) }),
    p && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => u(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (y) => y.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: p.title }),
        /* @__PURE__ */ r("button", { onClick: () => u(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: p.path, controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { children: oe(p.path) })
    ] }) })
  ] });
}
function Ur({ plan: e, language: t, runtime: n, queueSecondPass: o, queueMerge: a }) {
  const [l, i] = I("merge");
  return /* @__PURE__ */ r("section", { class: "td-postprocess-shell", children: [
    /* @__PURE__ */ r("div", { class: "td-post-mode-tabs", role: "tablist", children: [
      /* @__PURE__ */ r("button", { class: l === "merge" ? "active" : "", role: "tab", "aria-selected": l === "merge", onClick: () => i("merge"), children: t === "zh" ? "合并视频" : "Merge videos" }),
      /* @__PURE__ */ r("button", { class: l === "second-pass" ? "active" : "", role: "tab", "aria-selected": l === "second-pass", onClick: () => i("second-pass"), children: t === "zh" ? "单独二采" : "Standalone second pass" })
    ] }),
    l === "merge" ? /* @__PURE__ */ r(Hr, { plan: e, language: t, runtime: n, queueMerge: a }) : /* @__PURE__ */ r(Or, { plan: e, language: t, runtime: n, queueSecondPass: o })
  ] });
}
function Hr({ plan: e, language: t, runtime: n, queueMerge: o }) {
  const a = _e(() => Kt(e), [e]), [l, i] = I({}), [c, m] = I({}), [p, u] = I({}), [_, s] = I(null), [v, y] = I(!1), [S, z] = I(""), [w, C] = I(""), [A, b] = I({ found: !1, results: [] }), [T, j] = I(!1), [D, M] = I(!1), [g, E] = I(""), [N, R] = I(0), [J, X] = I("1"), [K, he] = I(String(a.length || 1)), ie = a.filter((h) => h.shot.enabled), Q = ie.length > 0 && ie.every((h) => c[h.key]), G = Rr(a, c, p), se = G.filter((h) => !h.path), Oe = a.some((h) => {
    var k;
    return c[h.key] && ((k = l[h.key]) == null ? void 0 : k.loading);
  }), ve = a.reduce(
    (h, k) => h + (k.shot.enabled && c[k.key] ? k.shot.durationSeconds : 0),
    0
  ), Z = _e(() => ce(A), [A]), re = Z.find((h) => h.path === g) ?? Z[0];
  ke(() => {
    let h = !1;
    const k = {}, B = {};
    return a.forEach((U) => {
      k[U.key] = U.shot.enabled, B[U.key] = { loading: !0, response: { found: !1, results: [] } };
    }), m((U) => {
      const O = {};
      return a.forEach((H) => {
        O[H.key] = H.shot.enabled ? U[H.key] ?? k[H.key] : !1;
      }), O;
    }), i(B), z(""), a.forEach((U) => {
      rt(n, e, U.shot, U.activeIndex).then((O) => {
        if (h) return;
        const H = ce(O);
        i((q) => ({ ...q, [U.key]: { loading: !1, response: O } })), u((q) => {
          var de;
          return {
            ...q,
            [U.key]: H.some((ae) => ae.path === q[U.key]) ? q[U.key] : ((de = H[0]) == null ? void 0 : de.path) ?? ""
          };
        });
      }).catch((O) => {
        h || i((H) => ({
          ...H,
          [U.key]: { loading: !1, response: { found: !1, results: [], error: String(O) } }
        }));
      });
    }), () => {
      h = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((h) => `${h.id}:${h.enabled}`).join("|"), N, n.mode, n.apiKey, n.taskMappings]), ke(() => {
    let h = !1;
    return j(!0), Dr(n, e).then((k) => {
      if (h) return;
      const B = ce(k);
      b(k), E((U) => {
        var O;
        return B.some((H) => H.path === U) ? U : ((O = B[0]) == null ? void 0 : O.path) ?? "";
      });
    }).catch((k) => {
      h || b({ found: !1, results: [], error: String(k) });
    }).finally(() => {
      h || j(!1);
    }), () => {
      h = !0;
    };
  }, [e.project.name, e.project.runId, N, n.mode, n.apiKey, n.taskMappings]);
  const Ue = () => {
    const h = !Q;
    m((k) => {
      const B = { ...k };
      return ie.forEach((U) => {
        B[U.key] = h;
      }), B;
    });
  }, ee = () => {
    const h = Number(J), k = Number(K);
    if (!Number.isInteger(h) || !Number.isInteger(k) || h < 1 || k < h || k > a.length) {
      window.alert(t === "zh" ? `请输入有效范围：1 ≤ m ≤ n ≤ ${a.length}` : `Enter a valid range: 1 ≤ m ≤ n ≤ ${a.length}`);
      return;
    }
    m(Pr(a, h, k));
  }, He = async () => {
    if (!G.length) {
      window.alert(t === "zh" ? "请至少选择一个镜头" : "Select at least one shot.");
      return;
    }
    if (se.length) {
      window.alert(t === "zh" ? `以下已选镜头没有可用结果：${se.map((h) => h.shotId).join("、")}` : `Selected shots without a result: ${se.map((h) => h.shotId).join(", ")}`);
      return;
    }
    y(!0), z("");
    try {
      if (o) {
        const h = await o({
          projectName: e.project.name,
          runId: e.project.runId,
          selections: G,
          requestId: `tdm_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`
        });
        h ? (b((k) => ({
          found: !0,
          results: [h, ...ce(k).filter((B) => B.path !== h.path)]
        })), E(h.path)) : R((k) => k + 1);
      } else if (pe(n) === "local") {
        const h = await fetch("/theodore-director/v1/postprocess/merge", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId, selections: G })
        }), k = await h.json();
        if (!h.ok) throw new Error(k.error || `HTTP ${h.status}`);
        R((B) => B + 1);
      } else
        throw new Error(t === "zh" ? "当前工作流缺少 RunningHub 合并支流" : "This workflow is missing the RunningHub merge branch");
    } catch (h) {
      z(String(h instanceof Error ? h.message : h));
    } finally {
      y(!1);
    }
  }, ue = async () => {
    if (pe(n) !== "runninghub") {
      M(!0), C("");
      try {
        const h = await fetch("/theodore-director/v1/postprocess/open-folder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId })
        }), k = await h.json();
        if (!h.ok) throw new Error(k.error || `HTTP ${h.status}`);
      } catch (h) {
        C(String(h instanceof Error ? h.message : h));
      } finally {
        M(!1);
      }
    }
  }, ge = xe(re);
  return /* @__PURE__ */ r("section", { class: "td-postprocess", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并视频" : "Merge videos" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "从每个镜头选择一个结果，按当前分镜顺序进行无损合并。" : "Choose one result per shot and merge them losslessly in storyboard order." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: [
        pe(n) === "local" && /* @__PURE__ */ r("button", { disabled: D, onClick: ue, children: [
          "📁 ",
          D ? t === "zh" ? "正在打开…" : "Opening…" : t === "zh" ? "打开结果文件夹" : "Open results folder"
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => R((h) => h + 1), children: [
          "↻ ",
          t === "zh" ? "刷新结果" : "Refresh"
        ] }),
        /* @__PURE__ */ r("button", { onClick: Ue, children: Q ? t === "zh" ? "全部取消" : "Clear all" : t === "zh" ? "一键全选" : "Select all" })
      ] })
    ] }),
    w && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "打开结果文件夹失败：" : "Unable to open results folder: ",
      w
    ] }),
    /* @__PURE__ */ r("div", { class: "td-post-summary", children: [
      /* @__PURE__ */ r("span", { children: t === "zh" ? `已选择 ${G.length}/${ie.length} 个启用镜头` : `${G.length}/${ie.length} enabled shots selected` }),
      /* @__PURE__ */ r("span", { children: t === "zh" ? `预计时长 ${ve.toFixed(1)} 秒` : `Estimated duration ${ve.toFixed(1)} sec` }),
      /* @__PURE__ */ r("div", { class: "td-post-range", role: "group", "aria-label": t === "zh" ? "合并视频范围" : "Merge video range", children: [
        /* @__PURE__ */ r("span", { children: t === "zh" ? "范围" : "Range" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: a.length, step: "1", value: J, "aria-label": t === "zh" ? "起始镜头 m" : "Start shot m", onInput: (h) => X(h.currentTarget.value) }),
        /* @__PURE__ */ r("span", { children: "—" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: a.length, step: "1", value: K, "aria-label": t === "zh" ? "结束镜头 n" : "End shot n", onInput: (h) => he(h.currentTarget.value) }),
        /* @__PURE__ */ r("button", { disabled: !a.length, onClick: ee, children: t === "zh" ? "确认范围" : "Apply range" })
      ] }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: v || Oe || !G.length || !!se.length, onClick: He, children: v ? t === "zh" ? "正在合并…" : "Merging…" : t === "zh" ? "合并所选视频" : "Merge selected videos" })
    ] }),
    S && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "合并失败：" : "Merge failed: ",
      S
    ] }),
    se.length > 0 && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "已选镜头中存在尚未生成视频的镜头。" : "Some selected shots do not have generated videos yet." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: a.map((h) => {
      const k = l[h.key], B = ce((k == null ? void 0 : k.response) ?? { results: [] }), U = !!c[h.key];
      return /* @__PURE__ */ r("article", { class: `td-post-shot ${U ? "selected" : ""} ${h.shot.enabled ? "" : "disabled"}`, children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: U, disabled: !h.shot.enabled, onChange: (O) => m((H) => ({ ...H, [h.key]: O.currentTarget.checked })) }),
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("strong", { children: h.shot.id }),
              /* @__PURE__ */ r("em", { children: h.shot.title })
            ] })
          ] }),
          /* @__PURE__ */ r("span", { children: [
            h.shot.durationSeconds,
            "s"
          ] })
        ] }),
        !h.shot.enabled && /* @__PURE__ */ r("div", { class: "td-post-shot-disabled-note", children: t === "zh" ? "该镜头当前已禁用：历史结果可以预览，但不能参加合并。" : "This shot is disabled: historical results can be previewed but cannot be merged." }),
        k != null && k.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading generated results…" }) : k != null && k.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : B.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: B.map((O, H) => {
          const q = xe(O), de = p[h.key] === O.path, ae = Bt(O.path, B.length - H);
          return /* @__PURE__ */ r("div", { class: `td-post-result ${de ? "selected" : ""}`, children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", role: "radio", "aria-checked": de, onClick: () => u(($e) => ({ ...$e, [h.key]: O.path })), children: [
              q ? /* @__PURE__ */ r(Me, { src: q, alt: `${h.shot.title} ${t === "zh" ? "结果" : "result"} ${ae}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  t === "zh" ? `结果 ${ae}` : `Result ${ae}`,
                  H === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
                ] }),
                /* @__PURE__ */ r("span", { title: O.path, children: oe(O.path) }),
                /* @__PURE__ */ r("small", { children: O.bytes ? `${(O.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "td-post-result-play", disabled: !q, title: t === "zh" ? "播放预览" : "Play preview", onClick: () => q && s({ path: q, title: `${h.shot.id} · ${h.shot.title}` }), children: "▶" })
          ] }, O.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "未找到这个镜头的生成结果" : "No generated result found for this shot" })
      ] }, h.key);
    }) }),
    /* @__PURE__ */ r("section", { class: "td-post-merged", children: [
      /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并结果" : "Merged results" }),
        /* @__PURE__ */ r("span", { class: `td-result-state ${Z.length ? "found" : ""}`, children: T ? t === "zh" ? "查询中" : "Checking" : t === "zh" ? `${Z.length} 个结果` : `${Z.length} results` })
      ] }) }),
      T ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "正在查询合并结果…" : "Loading merged results…" }) : A.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: t === "zh" ? "无法查询合并结果" : "Unable to query merged results" }) : re && ge ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
        /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
          /* @__PURE__ */ r("video", { src: ge, controls: !0, preload: "metadata", playsInline: !0 }, re.path),
          /* @__PURE__ */ r("div", { class: "td-generated-meta", title: re.path, children: re.path })
        ] }),
        /* @__PURE__ */ r("div", { class: "td-result-list", children: Z.map((h, k) => {
          const B = xe(h);
          return /* @__PURE__ */ r("button", { class: `td-result-item ${h.path === re.path ? "selected" : ""}`, onClick: () => E(h.path), children: [
            B ? /* @__PURE__ */ r(Me, { src: B, alt: `${t === "zh" ? "合并结果" : "Merged result"} ${Z.length - k}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
            /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
              /* @__PURE__ */ r("strong", { children: [
                t === "zh" ? `合并结果 ${Z.length - k}` : `Merged result ${Z.length - k}`,
                k === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
              ] }),
              /* @__PURE__ */ r("span", { children: oe(h.path) }),
              /* @__PURE__ */ r("small", { children: h.bytes ? `${(h.bytes / 1024 / 1024).toFixed(1)} MB` : h.taskId ? `task ${h.taskId}` : "" })
            ] })
          ] }, h.path);
        }) })
      ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "还没有合并结果" : "No merged result yet" })
    ] }),
    _ && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => s(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (h) => h.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: _.title }),
        /* @__PURE__ */ r("button", { "aria-label": t === "zh" ? "关闭预览" : "Close preview", onClick: () => s(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: _.path, controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { title: _.path, children: oe(_.path) })
    ] }) })
  ] });
}
function Br(e) {
  const t = e.reduce((n, o) => {
    const a = /^shot_(\d+)$/i.exec(o.id.trim());
    return a ? Math.max(n, Number(a[1])) : n;
  }, 0);
  return Math.max(t, e.length) + 1;
}
function Vr(e, t = 5) {
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
function yt(e, t, n) {
  const o = Br(e), a = Array.from({ length: t }, (l, i) => Vr(o + i, n));
  return [...e, ...a];
}
const Yt = (e) => `${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, Re = (e) => JSON.parse(JSON.stringify(e)), Kr = { image: "图片", video: "视频", audio: "音频" };
function wt(e) {
  var n;
  const t = Re(e);
  return t.schemaVersion = 4, (n = t.project.id) != null && n.trim() || (t.project.id = Yt("project")), t.shots = t.shots.map((o) => ({
    ...o,
    latentRelay: o.latentRelay ?? !0,
    secondSampling: o.secondSampling ?? !0
  })), t;
}
function qr(e) {
  return e.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function Wr(e) {
  const t = Yt(e);
  return { id: t, alias: t, kind: e, path: "", enabled: !0, fixed: !1, fixedOrder: 0, shotIds: [], includeVideoAudio: !1, durationSeconds: e === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}
async function Jr(e) {
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
function Gr({ initial: e, onSave: t, onClose: n, supportsSecondSampling: o, queueSecondPass: a, queueMerge: l }) {
  const [i, c] = I(() => wt(e)), [m, p] = I("shots"), [u, _] = I(0), [s, v] = I(() => navigator.language.startsWith("zh") ? "zh" : "en"), [y, S] = I({}), [z, w] = I(!1), [C, A] = I(!0), [b, T] = I(0), [j, D] = I({ found: !1, results: [] }), [M, g] = I(""), [E, N] = I(!1), [R, J] = I(""), [X, K] = I(!1), [he, ie] = I(!1), [Q, G] = I([]), [se, Oe] = I("5"), [ve, Z] = I("1"), [re, Ue] = I("5"), [ee, He] = I({ mode: "auto", apiKey: "", taskMappings: "" }), [ue, ge] = I({ mode: "auto", apiKey: "", taskMappings: "" }), h = i.shots[Math.min(u, i.shots.length - 1)], k = _e(() => h ? Ht(i, h) : null, [i, h]), B = h != null && h.enabled ? i.shots.slice(0, u).filter((d) => d.enabled).length : -1, U = i.shots.length > 0 && i.shots.every((d) => d.secondSampling), O = Q.length > 0 && Q.every((d) => d.enabled), H = _e(() => ce(j), [j]), q = H.find((d) => d.path === M) ?? H[0], de = xe(q), ae = pe(ee), $e = (d, f, x) => Nr(ee, d, f, x), P = (d) => c((f) => {
    const x = Re(f);
    return d(x), x;
  }), nt = (d, f) => P((x) => {
    const $ = d + f;
    $ < 0 || $ >= x.shots.length || ([x.shots[d], x.shots[$]] = [x.shots[$], x.shots[d]], _($));
  }), Xt = (d) => P((f) => {
    f.shots.length <= 1 || (f.shots.splice(d, 1), _((x) => x > d ? x - 1 : x === d ? Math.min(d, f.shots.length - 1) : x));
  }), Zt = () => {
    G(Re(i.shots)), K(!0);
  }, er = () => {
    const d = Number(se);
    if (!Number.isFinite(d) || d <= 0) {
      window.alert(s === "zh" ? "统一时长必须大于 0 秒" : "The shared duration must be greater than 0 seconds.");
      return;
    }
    G((f) => f.map((x) => ({ ...x, durationSeconds: d })));
  }, tr = () => {
    const d = Number(ve), f = Number(re);
    if (!Number.isInteger(d) || d < 1 || d > 100) {
      window.alert(s === "zh" ? "新增镜头数量必须是 1–100 的整数" : "The shot count must be an integer from 1 to 100.");
      return;
    }
    if (!Number.isFinite(f) || f <= 0) {
      window.alert(s === "zh" ? "新增镜头时长必须大于 0 秒" : "The new-shot duration must be greater than 0 seconds.");
      return;
    }
    G((x) => yt(x, d, f));
  }, rr = () => {
    const d = !O;
    G((f) => f.map((x) => ({ ...x, enabled: d })));
  }, nr = () => {
    if (Q.some((d) => !Number.isFinite(d.durationSeconds) || d.durationSeconds <= 0)) {
      window.alert(s === "zh" ? "每个镜头的时长都必须大于 0 秒" : "Every shot duration must be greater than 0 seconds.");
      return;
    }
    P((d) => {
      d.shots = Re(Q);
    }), _((d) => Math.min(d, Q.length - 1)), K(!1);
  }, or = () => {
    const d = URL.createObjectURL(new Blob([JSON.stringify(i, null, 2)], { type: "application/json" })), f = document.createElement("a");
    f.href = d, f.download = `${qr(i.project.name)}.director.json`, f.click(), URL.revokeObjectURL(d);
  }, ir = () => {
    const d = Cr(i);
    if (d.length) {
      window.alert(`计划未通过校验：

${d.join(`
`)}`);
      return;
    }
    t(i);
  };
  return ke(() => {
    let d = !1;
    return h ? (N(!0), rt(ee, i, h, B).then((f) => {
      if (d) return;
      const x = ce(f);
      D(f), g(($) => {
        var L;
        return x.some((Y) => Y.path === $) ? $ : ((L = x[0]) == null ? void 0 : L.path) ?? "";
      });
    }).catch((f) => {
      d || (D({ found: !1, results: [], error: String(f) }), g(""));
    }).finally(() => {
      d || N(!1);
    }), () => {
      d = !0;
    }) : (D({ found: !1, results: [] }), g(""), N(!1), () => {
      d = !0;
    });
  }, [i.project.name, i.project.runId, h == null ? void 0 : h.id, h == null ? void 0 : h.enabled, B, b, ee.mode, ee.apiKey, ee.taskMappings]), /* @__PURE__ */ r("div", { class: "td-shell", children: [
    /* @__PURE__ */ r("header", { children: [
      /* @__PURE__ */ r("h1", { children: me(s, "title") }),
      /* @__PURE__ */ r("div", { class: "td-actions", children: [
        /* @__PURE__ */ r("button", { onClick: or, children: "导出 / Export" }),
        /* @__PURE__ */ r("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ r("input", { type: "file", accept: "application/json,.json", onChange: async (d) => {
            var x;
            const f = (x = d.currentTarget.files) == null ? void 0 : x[0];
            if (f)
              try {
                const $ = JSON.parse(await f.text());
                if (!$.project || !Array.isArray($.shots) || !Array.isArray($.assets)) throw new Error("不是有效的 Theodore Director Plan");
                c(wt($)), _(0);
              } catch ($) {
                window.alert(String($));
              }
          } })
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => v(s === "zh" ? "en" : "zh"), children: s === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: ir, children: me(s, "save") }),
        /* @__PURE__ */ r("button", { onClick: n, children: me(s, "close") })
      ] })
    ] }),
    /* @__PURE__ */ r("nav", { children: ["shots", "assets", "settings", "postprocess"].map((d) => /* @__PURE__ */ r("button", { class: m === d ? "active" : "", onClick: () => p(d), children: me(s, d) })) }),
    /* @__PURE__ */ r("main", { children: [
      m === "shots" && /* @__PURE__ */ r("div", { class: "td-shots", children: [
        /* @__PURE__ */ r("aside", { class: "td-shot-sidebar", children: [
          o && /* @__PURE__ */ r("button", { class: `wide td-bulk-toggle ${U ? "active" : ""}`, onClick: () => P((d) => {
            const f = !d.shots.every((x) => x.secondSampling);
            d.shots.forEach((x) => {
              x.secondSampling = f;
            });
          }), children: s === "zh" ? `全部二次采样：${U ? "开" : "关"}` : `Second sampling for all: ${U ? "ON" : "OFF"}` }),
          /* @__PURE__ */ r("div", { class: "td-shot-list", children: i.shots.map((d, f) => /* @__PURE__ */ r("div", { class: `td-shot-card ${f === u ? "selected" : ""}`, onClick: () => _(f), children: [
            /* @__PURE__ */ r("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ r("button", { class: "td-shot-delete", disabled: i.shots.length <= 1, title: s === "zh" ? i.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : i.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": s === "zh" ? "删除镜头" : "Delete shot", onClick: (x) => {
              x.stopPropagation(), Xt(f);
            }, children: "×" }) }),
            /* @__PURE__ */ r("strong", { children: [
              f + 1,
              ". ",
              d.title
            ] }),
            /* @__PURE__ */ r("span", { children: [
              d.durationSeconds,
              "s · ",
              d.enabled ? "ON" : "OFF"
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-move-actions", children: [
              /* @__PURE__ */ r("button", { title: s === "zh" ? "上移镜头" : "Move shot up", onClick: (x) => {
                x.stopPropagation(), nt(f, -1);
              }, children: "↑" }),
              /* @__PURE__ */ r("button", { title: s === "zh" ? "下移镜头" : "Move shot down", onClick: (x) => {
                x.stopPropagation(), nt(f, 1);
              }, children: "↓" })
            ] })
          ] }, d.id)) }),
          /* @__PURE__ */ r("button", { class: "wide", onClick: () => P((d) => {
            const f = d.shots.length;
            d.shots = yt(d.shots, 1, 5), _(f);
          }), children: [
            "＋ ",
            me(s, "addShot")
          ] }),
          /* @__PURE__ */ r("div", { class: "td-shot-batch-entry", children: /* @__PURE__ */ r("button", { class: "wide", onClick: Zt, children: s === "zh" ? "批量处理镜头" : "Batch edit shots" }) })
        ] }),
        h && /* @__PURE__ */ r("section", { class: "td-form", children: [
          /* @__PURE__ */ r("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ r("label", { children: [
              "ID",
              /* @__PURE__ */ r("input", { value: h.id, onInput: (d) => P((f) => {
                f.shots[u].id = d.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ r("input", { value: h.title, onInput: (d) => P((f) => {
                f.shots[u].title = d.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: h.durationSeconds, onInput: (d) => P((f) => {
                f.shots[u].durationSeconds = Number(d.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: h.enabled, onChange: (d) => P((f) => {
                  f.shots[u].enabled = d.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: B === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: h.latentRelay, onChange: (d) => P((f) => {
                  f.shots[u].latentRelay = d.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: [
                  "latent接力 / Relay",
                  B === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              o && /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: "开启时执行 RTX 超分和第二次 H3 采样，关闭时直接使用第一采画面", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: h.secondSampling, onChange: (d) => P((f) => {
                  f.shots[u].secondSampling = d.currentTarget.checked;
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
            /* @__PURE__ */ r(qe, { rows: 10, value: h.prompt, isReferenceValid: (d) => Ut(i, h, d), onInput: (d) => P((f) => {
              f.shots[u].prompt = d.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ r("textarea", { rows: 3, value: h.negativePrompt, onInput: (d) => P((f) => {
              f.shots[u].negativePrompt = d.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ r("legend", { children: "本镜头素材 / Shot media" }),
            i.assets.map((d) => {
              const f = !h.disabledAssetIds.includes(d.id), x = oe(d.path) || d.alias, $ = `{{ref:${d.alias}}}`;
              return /* @__PURE__ */ r("div", { class: `td-shot-media-card ${f ? "" : "disabled"}`, children: [
                /* @__PURE__ */ r("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ r(vt, { asset: d, compact: !0 }),
                  /* @__PURE__ */ r("span", { class: "td-shot-media-kind", children: s === "zh" ? Kr[d.kind] : d.kind }),
                  /* @__PURE__ */ r("label", { class: "td-shot-media-toggle", title: f ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ r("input", { type: "checkbox", checked: f, onChange: (L) => P((Y) => {
                    const te = Y.shots[u].disabledAssetIds;
                    Y.shots[u].disabledAssetIds = L.currentTarget.checked ? te.filter((be) => be !== d.id) : [.../* @__PURE__ */ new Set([...te, d.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ r("button", { class: `td-shot-media-name ${R === d.id ? "copied" : ""}`, title: `${x}
${s === "zh" ? "点击复制" : "Click to copy"} ${$}`, onClick: async () => {
                  try {
                    await Jr($), J(d.id), window.setTimeout(() => J((L) => L === d.id ? "" : L), 1400);
                  } catch (L) {
                    window.alert(`${s === "zh" ? "复制失败" : "Copy failed"}: ${String(L)}`);
                  }
                }, children: [
                  /* @__PURE__ */ r("span", { children: x }),
                  R === d.id && /* @__PURE__ */ r("em", { children: s === "zh" ? "已复制" : "Copied" })
                ] })
              ] }, d.id);
            })
          ] })
        ] }),
        /* @__PURE__ */ r("aside", { class: "td-preview", children: [
          /* @__PURE__ */ r("details", { open: z, onToggle: (d) => w(d.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: me(s, "preview") }),
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
              k != null && k.errors.length ? /* @__PURE__ */ r("ul", { class: "errors", children: k.errors.map((d) => /* @__PURE__ */ r("li", { children: d })) }) : /* @__PURE__ */ r("p", { class: "ok", children: me(s, "noErrors") }),
              /* @__PURE__ */ r("ol", { children: k == null ? void 0 : k.slots.map((d) => /* @__PURE__ */ r("li", { children: [
                /* @__PURE__ */ r("code", { children: d.label }),
                " ← ",
                d.alias
              ] })) }),
              /* @__PURE__ */ r("pre", { children: k == null ? void 0 : k.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ r("details", { open: C, onToggle: (d) => A(d.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: s === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ r("span", { class: `td-result-state ${H.length ? "found" : ""}`, children: E ? s === "zh" ? "查询中" : "Checking" : H.length ? s === "zh" ? `${H.length} 个结果` : `${H.length} results` : s === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ r("div", { class: "td-result-actions", children: /* @__PURE__ */ r("button", { onClick: () => T((d) => d + 1), children: [
                "↻ ",
                s === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              E ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: s === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : j.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: j.error }) : q && de ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
                /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
                  /* @__PURE__ */ r("video", { src: de, controls: !0, preload: "metadata", playsInline: !0 }, q.path),
                  /* @__PURE__ */ r("div", { class: "td-generated-meta", title: q.path, children: [
                    q.path,
                    q.bytes ? ` · ${(q.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                  ] })
                ] }),
                /* @__PURE__ */ r("div", { class: "td-result-list", "aria-label": s === "zh" ? "全部生成结果" : "All generated results", children: H.map((d, f) => {
                  const x = xe(d), $ = Bt(d.path, H.length - f), L = d.modifiedAt ? new Date(d.modifiedAt * 1e3).toLocaleString(s === "zh" ? "zh-CN" : "en-US") : "";
                  return /* @__PURE__ */ r("button", { class: `td-result-item ${d.path === q.path ? "selected" : ""}`, onClick: () => g(d.path), children: [
                    x ? /* @__PURE__ */ r(Me, { src: x, alt: `${s === "zh" ? "结果" : "Result"} ${$}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: /* @__PURE__ */ r("span", { children: "×" }) }),
                    /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
                      /* @__PURE__ */ r("strong", { children: [
                        s === "zh" ? `结果 ${$}` : `Result ${$}`,
                        f === 0 && /* @__PURE__ */ r("em", { children: s === "zh" ? "最新" : "Latest" })
                      ] }),
                      /* @__PURE__ */ r("span", { title: d.path, children: oe(d.path) }),
                      /* @__PURE__ */ r("small", { children: [d.bytes ? `${(d.bytes / 1024 / 1024).toFixed(1)} MB` : "", L, d.taskId ? `task ${d.taskId}` : ""].filter(Boolean).join(" · ") })
                    ] })
                  ] }, d.path);
                }) })
              ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: s === "zh" ? "未找到本段视频" : "No video found for this shot" })
            ] })
          ] })
        ] })
      ] }),
      m === "assets" && /* @__PURE__ */ r("div", { class: "td-assets", children: [
        ae === "runninghub" && /* @__PURE__ */ r("div", { class: `td-runtime-banner ${ee.apiKey.trim() ? "ready" : ""}`, children: ee.apiKey.trim() ? s === "zh" ? "RunningHub 上传已启用；素材路径将保存官方 fileName。" : "RunningHub upload is ready; the official fileName will be stored." : s === "zh" ? "RunningHub 模式：请先在项目设置填写 API Key，再上传素材。" : "RunningHub mode: enter an API Key in Project settings before uploading." }),
        /* @__PURE__ */ r("div", { class: "td-toolbar", children: [
          ["image", "video", "audio"].map((d) => /* @__PURE__ */ r("button", { onClick: () => P((f) => f.assets.push(Wr(d))), children: [
            "＋ ",
            d
          ] })),
          /* @__PURE__ */ r("button", { class: "td-asset-batch-entry", onClick: () => ie(!0), children: [
            "⇧ ",
            s === "zh" ? "批量导入素材" : "Batch import assets"
          ] })
        ] }),
        i.assets.map((d, f) => /* @__PURE__ */ r("article", { children: /* @__PURE__ */ r("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ r("div", { class: "td-grid", children: [
              /* @__PURE__ */ r("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ r("input", { value: d.alias, onInput: (x) => P(($) => {
                  $.assets[f].alias = x.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ r("select", { value: d.kind, onChange: (x) => P(($) => {
                  $.assets[f].kind = x.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ r("option", { children: "image" }),
                  /* @__PURE__ */ r("option", { children: "video" }),
                  /* @__PURE__ */ r("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ r("input", { value: d.path, onInput: (x) => P(($) => {
                  $.assets[f].path = x.currentTarget.value;
                }) }),
                /* @__PURE__ */ r("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ r("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ r("input", { type: "file", accept: d.kind === "image" ? "image/*" : d.kind === "video" ? "video/*" : "audio/*", onChange: async (x) => {
                      var Y;
                      const $ = x.currentTarget, L = (Y = $.files) == null ? void 0 : Y[0];
                      if (L) {
                        S((te) => ({ ...te, [d.id]: L.name }));
                        try {
                          const te = await $e(i.project.name, d.kind, L);
                          P((be) => {
                            const ot = be.assets.find((sr) => sr.id === d.id);
                            ot && (ot.path = te);
                          });
                        } catch (te) {
                          window.alert(String(te));
                        } finally {
                          S((te) => {
                            const be = { ...te };
                            return delete be[d.id], be;
                          }), $.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ r("span", { class: "td-file-name", title: y[d.id] || d.path, children: y[d.id] ? `${s === "zh" ? "上传中" : "Uploading"}: ${y[d.id]}` : oe(d.path) || (s === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ r("input", { type: "number", min: "0", step: "0.1", value: d.durationSeconds ?? "", onInput: (x) => P(($) => {
                  $.assets[f].durationSeconds = x.currentTarget.value ? Number(x.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ r("input", { type: "number", value: d.fixedOrder, onInput: (x) => P(($) => {
                  $.assets[f].fixedOrder = Number(x.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ r("input", { value: d.shotIds.join(", "), onInput: (x) => P(($) => {
                  $.assets[f].shotIds = x.currentTarget.value.split(",").map((L) => L.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-flags", children: [
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: d.enabled, onChange: (x) => P(($) => {
                  $.assets[f].enabled = x.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: d.fixed, onChange: (x) => P(($) => {
                  $.assets[f].fixed = x.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              d.kind === "video" && /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: d.includeVideoAudio, onChange: (x) => P(($) => {
                  $.assets[f].includeVideoAudio = x.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ r("button", { class: "danger", onClick: () => P((x) => {
                x.assets.splice(f, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ r(vt, { asset: d })
        ] }) }, d.id))
      ] }),
      m === "settings" && /* @__PURE__ */ r("section", { class: "td-form settings", children: [
        /* @__PURE__ */ r("fieldset", { class: "td-runtime-settings", children: [
          /* @__PURE__ */ r("legend", { children: s === "zh" ? "运行环境" : "Runtime" }),
          /* @__PURE__ */ r("label", { children: [
            s === "zh" ? "适配器" : "Adapter",
            /* @__PURE__ */ r("select", { value: ue.mode, onChange: (d) => ge((f) => ({ ...f, mode: d.currentTarget.value })), children: [
              /* @__PURE__ */ r("option", { value: "auto", children: s === "zh" ? "自动检测" : "Auto detect" }),
              /* @__PURE__ */ r("option", { value: "local", children: s === "zh" ? "本地 ComfyUI" : "Local ComfyUI" }),
              /* @__PURE__ */ r("option", { value: "runninghub", children: "RunningHub" })
            ] })
          ] }),
          /* @__PURE__ */ r("div", { class: "td-runtime-status", children: [
            s === "zh" ? "当前：" : "Active: ",
            /* @__PURE__ */ r("strong", { children: ae === "runninghub" ? "RunningHub" : "Local ComfyUI" })
          ] }),
          pe(ue) === "runninghub" && /* @__PURE__ */ r(Se, { children: [
            /* @__PURE__ */ r("label", { children: [
              "RunningHub API Key",
              /* @__PURE__ */ r("input", { type: "password", autocomplete: "off", value: ue.apiKey, placeholder: s === "zh" ? "仅保存在当前页面内存" : "Kept only in this page memory", onInput: (d) => ge((f) => ({ ...f, apiKey: d.currentTarget.value })) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              s === "zh" ? "任务映射（每行一项）" : "Task mappings (one per line)",
              /* @__PURE__ */ r("textarea", { rows: 5, value: ue.taskMappings, placeholder: `完整工作流 taskId
shot_003=taskId
merged=taskId`, onInput: (d) => ge((f) => ({ ...f, taskMappings: d.currentTarget.value })) }),
              /* @__PURE__ */ r("small", { children: s === "zh" ? "单独 taskId 按启用镜头顺序归属；也可显式指定镜头或合并任务。API Key 和任务映射不会写入工作流。" : "A bare taskId follows enabled-shot order; shot and merged tasks can be explicit. Credentials and mappings are not written to the workflow." })
            ] })
          ] }),
          /* @__PURE__ */ r("div", { class: "td-runtime-apply", children: /* @__PURE__ */ r("button", { class: "primary", onClick: () => He({ ...ue }), children: s === "zh" ? "应用运行环境设置" : "Apply runtime settings" }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Project name",
          /* @__PURE__ */ r("input", { value: i.project.name, onInput: (d) => P((f) => {
            f.project.name = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Run ID",
          /* @__PURE__ */ r("input", { value: i.project.runId, onInput: (d) => P((f) => {
            f.project.runId = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "FPS",
          /* @__PURE__ */ r("input", { type: "number", value: i.defaults.fps, onInput: (d) => P((f) => {
            f.defaults.fps = Number(d.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Base seed",
          /* @__PURE__ */ r("input", { type: "number", value: i.defaults.baseSeed, onInput: (d) => P((f) => {
            f.defaults.baseSeed = Number(d.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ r(qe, { value: i.promptPrefix, isReferenceValid: (d) => _t(i, d), onInput: (d) => P((f) => {
            f.promptPrefix = d.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ r(qe, { value: i.promptSuffix, isReferenceValid: (d) => _t(i, d), onInput: (d) => P((f) => {
            f.promptSuffix = d.currentTarget.value;
          }) })
        ] })
      ] }),
      m === "postprocess" && /* @__PURE__ */ r(Ur, { plan: i, language: s, runtime: ee, queueSecondPass: a, queueMerge: l })
    ] }),
    X && /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": s === "zh" ? "批量处理镜头" : "Batch edit shots", children: [
      /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("h2", { children: s === "zh" ? "批量处理镜头" : "Batch edit shots" }),
          /* @__PURE__ */ r("p", { children: s === "zh" ? `当前共 ${Q.length} 个镜头` : `${Q.length} shots` })
        ] }),
        /* @__PURE__ */ r("button", { "aria-label": s === "zh" ? "关闭" : "Close", onClick: () => K(!1), children: "×" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-tools", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            s === "zh" ? "所有镜头时长" : "Duration for all shots",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: se, onInput: (d) => Oe(d.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: s === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: er, children: s === "zh" ? "一键设置所有时长" : "Set all durations" })
        ] }),
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            s === "zh" ? "新增镜头数量" : "New shot count",
            /* @__PURE__ */ r("input", { type: "number", min: "1", max: "100", step: "1", value: ve, onInput: (d) => Z(d.currentTarget.value) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            s === "zh" ? "每个镜头时长" : "Duration per shot",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: re, onInput: (d) => Ue(d.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: s === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: tr, children: s === "zh" ? "批量新增镜头" : "Add shots" })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-global-actions", children: [
        /* @__PURE__ */ r("span", { children: s === "zh" ? `已启用 ${Q.filter((d) => d.enabled).length}/${Q.length} 个镜头` : `${Q.filter((d) => d.enabled).length}/${Q.length} shots enabled` }),
        /* @__PURE__ */ r("button", { class: O ? "active" : "", onClick: rr, children: O ? s === "zh" ? "全部禁用" : "Disable all" : s === "zh" ? "全部启用" : "Enable all" })
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
        Q.map((d, f) => /* @__PURE__ */ r("div", { class: "td-batch-row", children: [
          /* @__PURE__ */ r("span", { children: f + 1 }),
          /* @__PURE__ */ r("input", { value: d.title, "aria-label": `${s === "zh" ? "镜头名" : "Shot name"} ${f + 1}`, onInput: (x) => G(($) => $.map((L, Y) => Y === f ? { ...L, title: x.currentTarget.value } : L)) }),
          /* @__PURE__ */ r("label", { class: "td-batch-enabled", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: d.enabled, onChange: (x) => G(($) => $.map((L, Y) => Y === f ? { ...L, enabled: x.currentTarget.checked } : L)) }),
            /* @__PURE__ */ r("span", { children: d.enabled ? s === "zh" ? "开" : "ON" : s === "zh" ? "关" : "OFF" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: d.durationSeconds, onInput: (x) => G(($) => $.map((L, Y) => Y === f ? { ...L, durationSeconds: Number(x.currentTarget.value) } : L)) }),
            /* @__PURE__ */ r("span", { children: s === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-relay", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: d.latentRelay, onChange: (x) => G(($) => $.map((L, Y) => Y === f ? { ...L, latentRelay: x.currentTarget.checked } : L)) }),
            /* @__PURE__ */ r("span", { children: d.latentRelay ? s === "zh" ? "开" : "ON" : s === "zh" ? "关" : "OFF" })
          ] })
        ] }, d.id))
      ] }),
      /* @__PURE__ */ r("footer", { children: [
        /* @__PURE__ */ r("button", { onClick: () => K(!1), children: s === "zh" ? "取消" : "Cancel" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: nr, children: s === "zh" ? "应用更改" : "Apply changes" })
      ] })
    ] }) }),
    he && /* @__PURE__ */ r($r, { language: s, assets: i.assets, projectName: i.project.name, uploadFile: $e, onImported: (d) => P((f) => {
      f.assets.push(...d);
    }), onClose: () => ie(!1) })
  ] });
}
function Qr(e, t, n = !1, o, a) {
  const l = document.getElementById("theodore-director-modal");
  if (l) {
    l.focus();
    return;
  }
  const i = document.createElement("div");
  i.id = "theodore-director-modal", i.className = "td-modal", i.tabIndex = -1, document.body.append(i);
  const c = (p) => {
    p.key === "Escape" && m();
  }, m = () => {
    document.removeEventListener("keydown", c), lt(null, i), i.remove();
  };
  document.addEventListener("keydown", c), lt(/* @__PURE__ */ r(Gr, { initial: e, onSave: (p) => {
    t(p), m();
  }, onClose: m, supportsSecondSampling: n, queueSecondPass: o, queueMerge: a }), i), i.focus();
}
const Yr = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-highlight-textarea{position:relative;display:block;width:100%;min-width:0}.td-highlight-backdrop,.td-form textarea.td-highlight-input{box-sizing:border-box;width:100%;margin:0;padding:7px 9px;font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,monospace;font-size:inherit;line-height:1.45;letter-spacing:normal;-moz-tab-size:8;tab-size:8;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.td-highlight-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border:1px solid transparent;border-radius:6px;background:#222a35;color:var(--td-text);pointer-events:none}.td-form textarea.td-highlight-input{position:relative;z-index:1;display:block;background:transparent;color:transparent;caret-color:var(--td-text);-webkit-text-fill-color:transparent}.td-highlight-input::selection{background:#5898d46b}.td-highlight-backdrop mark{padding:1px 2px;border-radius:3px;color:inherit}.td-highlight-backdrop mark.valid{background:#1d6b50;color:#bfffe6}.td-highlight-backdrop mark.invalid{background:#7a2931;color:#ffd1d5;text-decoration:underline;text-decoration-color:#ff9aa4;text-underline-offset:2px}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-generated-results{display:flex;flex-direction:column;gap:12px}.td-result-list{display:flex;flex-direction:column;gap:7px;max-height:280px;overflow:auto;padding-right:3px}.td-shell button.td-result-item{display:grid;grid-template-columns:112px minmax(0,1fr);gap:10px;align-items:center;width:100%;padding:6px;text-align:left;background:#151b23}.td-shell button.td-result-item.selected{border-color:var(--td-accent);background:#1c2a2a}.td-result-thumb{width:112px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:5px;background:#090c10;color:var(--td-muted)}.td-result-thumb img,.td-result-thumb video{display:block;width:100%;height:100%;object-fit:contain}.td-result-item-copy{display:flex;min-width:0;flex-direction:column;gap:3px}.td-result-item-copy>strong{display:flex;align-items:center;gap:7px;color:var(--td-text)}.td-result-item-copy>strong em{padding:1px 6px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-result-item-copy>span,.td-result-item-copy>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-result-item-copy>small{font-size:10px}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-asset-batch-entry{margin-left:auto;border-color:#527061!important;background:#1b2c28!important;color:var(--td-accent)!important}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}.td-shot-sidebar{display:flex;flex-direction:column}.td-shot-list{flex:none}.td-shot-batch-entry{display:flex;align-items:flex-end;flex:1;min-height:90px;padding-top:14px}.td-shot-batch-entry button{border-color:#527061;background:#1b2c28;color:var(--td-accent)}.td-batch-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:28px;background:#05080dbd;box-sizing:border-box}.td-batch-panel{display:flex;flex-direction:column;width:min(1040px,100%);max-height:min(820px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-batch-header h2{font-size:18px;margin:0}.td-batch-header p{margin:3px 0 0;color:var(--td-muted)}.td-batch-header>button{font-size:20px;line-height:1;padding:5px 9px}.td-batch-tools{display:grid;grid-template-columns:1fr 1.4fr;gap:12px;padding:14px 18px;border-bottom:1px solid var(--td-line);background:#151b23}.td-batch-tools>div{display:flex;align-items:end;gap:8px;padding:10px;border:1px solid var(--td-line);border-radius:7px}.td-batch-tools label{display:flex;flex:1;flex-direction:column;gap:4px;color:var(--td-muted);white-space:nowrap}.td-batch-tools label>span,.td-batch-duration{display:flex;align-items:center;gap:6px}.td-batch-tools input{width:100%}.td-batch-tools em{color:var(--td-muted);font-style:normal}.td-batch-tools button{white-space:nowrap}.td-batch-global-actions{display:flex;align-items:center;justify-content:flex-end;gap:12px;padding:9px 22px;border-bottom:1px solid var(--td-line);background:#171e27;color:var(--td-muted)}.td-batch-global-actions button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-batch-table{overflow:auto;padding:0 18px}.td-batch-row{display:grid;grid-template-columns:42px minmax(180px,1fr) 100px 150px 120px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-batch-table-head{position:sticky;top:0;z-index:1;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-batch-duration input{min-width:0;width:100%}.td-batch-duration>span{color:var(--td-muted)}.td-batch-enabled,.td-batch-relay{display:flex;align-items:center;gap:7px;justify-content:flex-start;color:var(--td-text)}.td-batch-enabled input,.td-batch-relay input{width:17px;height:17px;margin:0}.td-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-batch-panel{display:flex;flex-direction:column;width:min(1420px,100%);max-height:min(880px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-asset-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-asset-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-dropzone{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-height:92px;margin:14px 18px 10px;border:1px dashed #597084;border-radius:9px;background:#151b23;color:var(--td-text);cursor:pointer;transition:border-color .15s,background .15s}.td-asset-dropzone:hover,.td-asset-dropzone.dragging{border-color:var(--td-accent);background:#1b2c28}.td-asset-dropzone span{color:var(--td-muted);font-size:12px}.td-asset-dropzone input{display:none}.td-asset-batch-warning{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 18px 10px;padding:8px 10px;border:1px solid #836a32;border-radius:7px;background:#3a301c;color:#f4d991}.td-asset-batch-warning span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-warning button{padding:2px 7px}.td-asset-batch-summary{display:flex;align-items:center;justify-content:space-between;padding:8px 18px;border-top:1px solid var(--td-line);border-bottom:1px solid var(--td-line);background:#151b23;color:var(--td-muted)}.td-asset-batch-summary button{padding:5px 8px}.td-asset-batch-list{overflow:auto;padding:0 18px 10px}.td-asset-batch-row{display:grid;grid-template-columns:minmax(210px,1.4fr) minmax(150px,1fr) 115px 135px 105px 72px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-asset-batch-head{position:sticky;top:0;z-index:2;padding-top:10px;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-asset-batch-row.invalid{background:#3b202560}.td-asset-batch-row.imported{background:#17372d55}.td-asset-batch-file{display:flex;min-width:0;flex-direction:column;gap:2px}.td-asset-batch-file strong,.td-asset-batch-file small,.td-asset-batch-file em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-file small{color:var(--td-muted);font-weight:400}.td-asset-batch-file em{color:var(--td-danger);font-size:11px;font-style:normal}.td-asset-batch-duration,.td-asset-batch-audio{display:flex;align-items:center;gap:6px;color:var(--td-muted)}.td-asset-batch-duration input{min-width:0;width:100%}.td-asset-batch-audio input{width:17px;height:17px;margin:0}.td-asset-batch-empty{display:flex;min-height:130px;align-items:center;justify-content:center;color:var(--td-muted)}.td-asset-batch-panel button:disabled,.td-asset-batch-panel input:disabled,.td-asset-batch-panel select:disabled{opacity:.55;cursor:not-allowed}.td-postprocess{display:flex;flex-direction:column;gap:14px;max-width:1500px;margin:0 auto}.td-post-header,.td-post-summary,.td-post-merged{border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px}.td-post-header h2,.td-post-merged h2{margin:0;font-size:17px}.td-post-header p{margin:4px 0 0;color:var(--td-muted)}.td-post-actions{display:flex;gap:8px;flex:none}.td-post-summary{display:flex;align-items:center;gap:18px;padding:10px 14px;color:var(--td-muted)}.td-post-summary>button{margin-left:auto}.td-post-summary button:disabled{opacity:.5;cursor:not-allowed}.td-post-range{display:flex;align-items:center;gap:6px;margin-left:auto}.td-post-range input{width:64px;padding:6px 7px;text-align:center}.td-post-range button{white-space:nowrap}.td-post-summary>.td-post-range+button{margin-left:0}.td-post-error,.td-post-warning{padding:10px 13px;border-radius:7px}.td-post-error{border:1px solid #8b4149;background:#442228;color:#ffd1d5;white-space:pre-wrap}.td-post-warning{border:1px solid #836a32;background:#3a301c;color:#f4d991}.td-post-shot-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(390px,1fr));gap:12px;align-items:start}.td-post-shot{min-width:0;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel);overflow:hidden}.td-post-shot.selected{border-color:#527e6c}.td-post-shot.disabled{opacity:.72}.td-post-shot>header{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid var(--td-line);background:#1d2530}.td-post-shot>header>label{display:flex;align-items:center;gap:9px;min-width:0;cursor:pointer}.td-post-shot>header input{width:18px;height:18px;margin:0;flex:none}.td-post-shot>header label>span{display:flex;min-width:0;gap:8px;align-items:baseline}.td-post-shot>header strong{color:var(--td-text)}.td-post-shot>header em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted);font-style:normal}.td-post-shot>header>span{flex:none;padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted)}.td-post-shot-disabled-note{padding:7px 10px;border-bottom:1px solid var(--td-line);background:#332b1d;color:#e5c77d;font-size:11px}.td-post-shot-empty{min-height:96px;display:flex;align-items:center;justify-content:center;padding:12px;color:var(--td-muted);text-align:center}.td-post-result-list{display:flex;flex-direction:column;gap:7px;max-height:360px;overflow:auto;padding:9px}.td-post-result{display:grid;grid-template-columns:minmax(0,1fr) 35px;gap:6px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:5px}.td-post-result.selected{border-color:var(--td-accent);background:#1c2a2a}.td-shell button.td-post-result-choice{display:grid;grid-template-columns:112px minmax(0,1fr);gap:9px;align-items:center;min-width:0;padding:0;border:0;background:transparent;text-align:left}.td-post-result-choice>span{display:flex;min-width:0;flex-direction:column;gap:3px}.td-post-result-choice>span>strong{display:flex;align-items:center;gap:6px}.td-post-result-choice>span>strong em{padding:1px 5px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-post-result-choice>span>span,.td-post-result-choice>span>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-post-result-choice>span>small{font-size:10px}.td-post-result-play{width:35px;height:35px;padding:0!important}.td-post-result-play:disabled{opacity:.35;cursor:not-allowed}.td-post-merged{padding:12px}.td-post-merged>header>div{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px}.td-post-merged .td-generated-results{display:grid;grid-template-columns:minmax(360px,1.6fr) minmax(300px,1fr);align-items:start}.td-post-merged .td-result-list{max-height:420px}.td-post-preview-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:30;display:flex;align-items:center;justify-content:center;padding:26px;background:#030609d6}.td-post-preview-overlay>section{width:min(980px,100%);max-height:calc(100vh - 52px);overflow:auto;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 80px #000c}.td-post-preview-overlay header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--td-line)}.td-post-preview-overlay header button{font-size:20px;line-height:1;padding:5px 9px}.td-post-preview-overlay video{display:block;width:100%;max-height:calc(100vh - 170px);background:#070a0e}.td-post-preview-overlay p{margin:0;padding:9px 12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}.td-post-summary{flex-wrap:wrap}.td-post-range{margin-left:0}.td-post-summary>button{margin-left:auto}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:900px){.td-post-shot-list,.td-post-merged .td-generated-results{grid-template-columns:1fr}.td-post-header{align-items:flex-start;flex-direction:column}.td-post-actions{width:100%}.td-post-actions button{flex:1}.td-post-summary{align-items:stretch;flex-direction:column;gap:7px}.td-post-range{margin:3px 0;flex-wrap:wrap}.td-post-summary>button{margin:4px 0 0}.td-post-result-list{max-height:none}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}@media(max-width:1000px){.td-asset-batch-list{min-width:900px}.td-asset-batch-panel{overflow:auto}.td-asset-batch-panel>.td-batch-header,.td-asset-dropzone,.td-asset-batch-warning,.td-asset-batch-summary,.td-asset-batch-panel>footer{min-width:864px}}@media(max-width:720px){.td-asset-batch-entry{margin-left:0}}.td-postprocess-shell{display:flex;flex-direction:column;gap:12px;max-width:1500px;margin:0 auto}.td-postprocess-shell>.td-postprocess{max-width:none;width:100%;margin:0}.td-post-mode-tabs{display:flex;gap:7px;padding:5px;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-mode-tabs button{min-width:130px}.td-post-mode-tabs button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-second-pass-panel .td-post-shot>header>span:first-child{display:flex;min-width:0;gap:8px;align-items:baseline;padding:0;background:transparent}.td-second-pass-result{display:grid;grid-template-columns:minmax(0,1fr) 118px;gap:8px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:6px}.td-second-pass-result:has(.td-second-pass-run:disabled){border-color:#34404d}.td-second-pass-run{width:118px;min-height:38px;padding:6px!important}.td-second-pass-run:disabled{opacity:.62;cursor:not-allowed}.td-second-pass-error{grid-column:1/-1;padding:6px 8px;border-radius:5px;background:#442228;color:#ffd1d5;font-size:11px;white-space:pre-wrap}@media(max-width:620px){.td-post-mode-tabs{flex-direction:column}.td-post-mode-tabs button{width:100%}.td-second-pass-result{grid-template-columns:1fr}.td-second-pass-run{width:100%}}.td-runtime-settings{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:14px;margin:0 0 8px}.td-runtime-settings legend{padding:0 7px;color:var(--td-accent)}.td-runtime-settings label:has(textarea),.td-runtime-settings label:has(input[type=password]),.td-runtime-apply{grid-column:1/-1}.td-runtime-settings small{display:block;margin-top:5px;color:var(--td-muted);line-height:1.45}.td-runtime-status{display:flex;align-items:center;padding:8px 10px;border:1px solid var(--td-line);border-radius:6px;background:#161d25;color:var(--td-muted)}.td-runtime-status strong{margin-left:4px;color:var(--td-accent)}.td-runtime-apply{display:flex;justify-content:flex-end}.td-runtime-banner{padding:10px 13px;border:1px solid #836a32;border-radius:7px;background:#3a301c;color:#f4d991}.td-runtime-banner.ready{border-color:#356f59;background:#18372d;color:#8be1bd}@media(max-width:700px){.td-runtime-settings{grid-template-columns:1fr}.td-runtime-settings label:has(textarea),.td-runtime-settings label:has(input[type=password]),.td-runtime-apply{grid-column:auto}}", kt = "theodore-director-styles";
function Xr() {
  if (document.getElementById(kt)) return;
  const e = document.createElement("style");
  e.id = kt, e.textContent = Yr, document.head.append(e);
}
Xr();
function Zr(e) {
  const t = e.output ?? {}, n = [t.gifs, t.videos, t.images].find((i) => Array.isArray(i)), o = n == null ? void 0 : n[0], a = String((o == null ? void 0 : o.filename) ?? "").trim();
  return a ? {
    path: [String((o == null ? void 0 : o.subfolder) ?? "").trim().replace(/\\/g, "/").replace(/^\/+|\/+$/g, ""), a].filter(Boolean).join("/"),
    provider: "local",
    stage: "legacy_unknown"
  } : void 0;
}
const en = "/scripts/app.js", tn = "/scripts/api.js";
Promise.all([
  import(
    /* @vite-ignore */
    en
  ),
  import(
    /* @vite-ignore */
    tn
  )
]).then(([{ app: e }, { api: t }]) => {
  const n = async (a) => {
    var S, z;
    const l = ((S = e.graph) == null ? void 0 : S._nodes) ?? [], i = l.find((w) => w.type === "TheodoreDirector_PostprocessSecondPassSource"), c = l.find((w) => w.type === "TheodoreDirector_SaveSecondPass"), m = (z = i == null ? void 0 : i.widgets) == null ? void 0 : z.find((w) => w.name === "request_json");
    if (!i || !c || !m || c.id === void 0)
      throw new Error("当前工作流缺少后处理单独二采支流，请重新载入仓库中的 V7 导播台示例工作流");
    const p = m.value, u = i.mode, _ = c.mode;
    let s;
    try {
      m.value = JSON.stringify(a), i.mode = 0, c.mode = 0, s = await e.graphToPrompt(e.rootGraph);
    } finally {
      m.value = p, i.mode = u, c.mode = _;
    }
    const y = (await t.queuePrompt(0, s, { partialExecutionTargets: [String(c.id)] })).prompt_id;
    if (!y) throw new Error("ComfyUI 没有返回二采任务 ID");
    await new Promise((w, C) => {
      const A = () => {
        t.removeEventListener("execution_success", T), t.removeEventListener("execution_error", j), t.removeEventListener("execution_interrupted", j);
      }, b = (D) => {
        var M;
        return String(((M = D.detail) == null ? void 0 : M.prompt_id) ?? "");
      }, T = (D) => {
        b(D) === y && (A(), w());
      }, j = (D) => {
        if (b(D) !== y) return;
        const M = D.detail ?? {};
        A(), C(new Error(String(M.exception_message ?? M.error ?? "单独二采任务执行失败")));
      };
      t.addEventListener("execution_success", T), t.addEventListener("execution_error", j), t.addEventListener("execution_interrupted", j);
    });
  }, o = async (a) => {
    var v, y;
    const i = (((v = e.graph) == null ? void 0 : v._nodes) ?? []).find((S) => S.type === "TheodoreDirector_MergeVideos"), c = (y = i == null ? void 0 : i.widgets) == null ? void 0 : y.find((S) => S.name === "request_json");
    if (!i || !c || i.id === void 0)
      throw new Error("当前工作流缺少 Theodore 合并支流，请重新载入仓库中的 V7.2 示例工作流");
    const m = c.value, p = i.mode;
    let u;
    try {
      c.value = JSON.stringify(a), i.mode = 0, u = await e.graphToPrompt(e.rootGraph);
    } finally {
      c.value = m, i.mode = p;
    }
    const s = (await t.queuePrompt(0, u, { partialExecutionTargets: [String(i.id)] })).prompt_id;
    if (!s) throw new Error("ComfyUI 没有返回合并任务 ID");
    return new Promise((S, z) => {
      let w;
      const C = () => {
        t.removeEventListener("executed", T), t.removeEventListener("execution_success", j), t.removeEventListener("execution_error", D), t.removeEventListener("execution_interrupted", D);
      }, A = (M) => M.detail ?? {}, b = (M) => String(M.prompt_id ?? "") === s, T = (M) => {
        const g = A(M);
        !b(g) || String(g.node ?? "") !== String(i.id) || (w = Zr(g) ?? w);
      }, j = (M) => {
        const g = A(M);
        b(g) && (C(), S(w));
      }, D = (M) => {
        const g = A(M);
        b(g) && (C(), z(new Error(String(g.exception_message ?? g.error ?? "合并任务执行失败"))));
      };
      t.addEventListener("executed", T), t.addEventListener("execution_success", j), t.addEventListener("execution_error", D), t.addEventListener("execution_interrupted", D);
    });
  };
  e.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(a, l) {
      if (l.name === "TheodoreDirector_PostprocessSecondPassSource" || l.name === "TheodoreDirector_MergeVideos") {
        const c = a.prototype.onNodeCreated;
        a.prototype.onNodeCreated = function() {
          var p, u;
          c == null || c.apply(this);
          const m = (p = this.widgets) == null ? void 0 : p.find((_) => _.name === "request_json");
          m && (m.type = "hidden", m.computeSize = () => [0, -4]), this.size = [Math.max(((u = this.size) == null ? void 0 : u[0]) ?? 300, 380), 80];
        };
        return;
      }
      if (l.name !== "TheodoreDirector_Project") return;
      const i = a.prototype.onNodeCreated;
      a.prototype.onNodeCreated = function() {
        var m, p;
        i == null || i.apply(this);
        const c = (m = this.widgets) == null ? void 0 : m.find((u) => u.name === "plan_json");
        c && (c.type = "hidden", c.computeSize = () => [0, -4], this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          var u;
          try {
            const _ = JSON.parse(String(c.value)), s = ((u = e.graph) == null ? void 0 : u._nodes) ?? [], v = s.some((S) => S.type === "TheodoreDirector_PostprocessSecondPassSource") && s.some((S) => S.type === "TheodoreDirector_SaveSecondPass"), y = s.some((S) => S.type === "TheodoreDirector_MergeVideos");
            Qr(_, (S) => {
              var z, w;
              c.value = JSON.stringify(S, null, 2), this.setDirtyCanvas(!0, !0), (w = (z = e.graph) == null ? void 0 : z.setDirtyCanvas) == null || w.call(z, !0, !0);
            }, !0, v ? n : void 0, y ? o : void 0);
          } catch (_) {
            window.alert(`Theodore Director: ${_ instanceof Error ? _.message : String(_)}`);
          }
        }), this.size = [Math.max(((p = this.size) == null ? void 0 : p[0]) ?? 300, 360), 110]);
      };
    }
  });
});
