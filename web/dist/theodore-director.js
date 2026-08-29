var Ee, F, _t, ce, Ye, vt, yt, Me, we, be, wt, qe, He, Be, Ce = {}, Te = [], Gt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Pe = Array.isArray;
function ie(e, t) {
  for (var o in t) e[o] = t[o];
  return e;
}
function We(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Qt(e, t, o) {
  var n, d, i, a = {};
  for (i in t) i == "key" ? n = t[i] : i == "ref" ? d = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? Ee.call(arguments, 2) : o), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return ke(e, a, n, d, null);
}
function ke(e, t, o, n, d) {
  var i = { type: e, props: t, key: o, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: d ?? ++_t, __i: -1, __u: 0 };
  return d == null && F.vnode != null && F.vnode(i), i;
}
function Ne(e) {
  return e.children;
}
function ze(e, t) {
  this.props = e, this.context = t;
}
function ue(e, t) {
  if (t == null) return e.__ ? ue(e.__, e.__i + 1) : null;
  for (var o; t < e.__k.length; t++) if ((o = e.__k[t]) != null && o.__e != null) return o.__e;
  return typeof e.type == "function" ? ue(e) : null;
}
function Xt(e) {
  if (e.__P && e.__d) {
    var t = e.__v, o = t.__e, n = [], d = [], i = ie({}, t);
    i.__v = t.__v + 1, F.vnode && F.vnode(i), Je(e.__P, i, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [o] : null, n, o ?? ue(t), !!(32 & t.__u), d), i.__v = t.__v, i.__.__k[i.__i] = i, Ct(n, i, d), t.__e = t.__ = null, i.__e != o && kt(i);
  }
}
function kt(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), kt(e);
}
function Ze(e) {
  (!e.__d && (e.__d = !0) && ce.push(e) && !Ie.__r++ || Ye != F.debounceRendering) && ((Ye = F.debounceRendering) || vt)(Ie);
}
function Ie() {
  try {
    for (var e, t = 1; ce.length; ) ce.length > t && ce.sort(yt), e = ce.shift(), t = ce.length, Xt(e);
  } finally {
    ce.length = Ie.__r = 0;
  }
}
function zt(e, t, o, n, d, i, a, p, b, c, f) {
  var h, l, g, w, S, y, $ = n && n.__k || Te, k = t.length;
  for (b = Yt(o, t, $, b, k), h = 0; h < k; h++) (g = o.__k[h]) != null && (l = g.__i != -1 && $[g.__i] || Ce, g.__i = h, y = Je(e, g, l, d, i, a, p, b, c, f), w = g.__e, g.ref && l.ref != g.ref && (l.ref && Ke(l.ref, null, g), f.push(g.ref, g.__c || w, g)), S == null && w != null && (S = w), 4 & g.__u ? (b = St(g, b, e), l.__e && (l.__e = null)) : typeof g.type == "function" && y !== void 0 ? b = y : w && (b = w.nextSibling), g.__u &= -7);
  return o.__e = S, b;
}
function Yt(e, t, o, n, d) {
  var i, a, p, b, c, f = o.length, h = f, l = 0;
  for (e.__k = new Array(d), i = 0; i < d; i++) (a = t[i]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = e.__k[i] = ke(null, a, null, null, null) : Pe(a) ? a = e.__k[i] = ke(Ne, { children: a }, null, null, null) : a.constructor === void 0 && a.__b > 0 ? a = e.__k[i] = ke(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : e.__k[i] = a, b = i + l, a.__ = e, a.__b = e.__b + 1, p = null, (c = a.__i = Zt(a, o, b, h)) != -1 && (h--, (p = o[c]) && (p.__u |= 2)), p == null || p.__v == null ? (c == -1 && (d > f ? l-- : d < f && l++), typeof a.type != "function" && (a.__u |= 4)) : c != b && (c == b - 1 ? l-- : c == b + 1 ? l++ : (c > b ? l-- : l++, a.__u |= 4))) : e.__k[i] = null;
  if (h) for (i = 0; i < f; i++) (p = o[i]) != null && (2 & p.__u) == 0 && (p.__e == n && (n = ue(p)), It(p, p));
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
function Zt(e, t, o, n) {
  var d, i, a, p = e.key, b = e.type, c = t[o], f = c != null && (2 & c.__u) == 0;
  if (c === null && p == null || f && p == c.key && b == c.type) return o;
  if (n > (f ? 1 : 0)) {
    for (d = o - 1, i = o + 1; d >= 0 || i < t.length; ) if ((c = t[a = d >= 0 ? d-- : i++]) != null && (2 & c.__u) == 0 && p == c.key && b == c.type) return a;
  }
  return -1;
}
function et(e, t, o) {
  t[0] == "-" ? e.setProperty(t, o ?? "") : e[t] = o == null ? "" : typeof o != "number" || Gt.test(t) ? o : o + "px";
}
function ye(e, t, o, n, d) {
  var i, a;
  e: if (t == "style") if (typeof o == "string") e.style.cssText = o;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (t in n) o && t in o || et(e.style, t, "");
    if (o) for (t in o) n && o[t] == n[t] || et(e.style, t, o[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(wt, "$1")), a = t.toLowerCase(), t = a in e || t == "onFocusOut" || t == "onFocusIn" ? a.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = o, o ? n ? o[be] = n[be] : (o[be] = qe, e.addEventListener(t, i ? Be : He, i)) : e.removeEventListener(t, i ? Be : He, i);
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
      if (t[we] == null) t[we] = qe++;
      else if (t[we] < o[be]) return;
      return o(F.event ? F.event(t) : t);
    }
  };
}
function Je(e, t, o, n, d, i, a, p, b, c) {
  var f, h, l, g, w, S, y, $, k, O, _, T, R, W, K, x, A = t.type;
  if (t.constructor !== void 0) return null;
  128 & o.__u && (b = !!(32 & o.__u), i = [p = t.__e = o.__e]), (f = F.__b) && f(t);
  e: if (typeof A == "function") {
    h = a.length;
    try {
      if (k = t.props, O = A.prototype && A.prototype.render, _ = (f = A.contextType) && n[f.__c], T = f ? _ ? _.props.value : f.__ : n, o.__c ? $ = (l = t.__c = o.__c).__ = l.__E : (O ? t.__c = l = new A(k, T) : (t.__c = l = new ze(k, T), l.constructor = A, l.render = tr), _ && _.sub(l), l.state || (l.state = {}), l.__n = n, g = l.__d = !0, l.__h = [], l._sb = []), O && l.__s == null && (l.__s = l.state), O && A.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = ie({}, l.__s)), ie(l.__s, A.getDerivedStateFromProps(k, l.__s))), w = l.props, S = l.state, l.__v = t, g) O && A.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), O && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (O && A.getDerivedStateFromProps == null && k !== w && l.componentWillReceiveProps != null && l.componentWillReceiveProps(k, T), t.__v == o.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(k, l.__s, T) === !1) {
          t.__v != o.__v && (l.props = k, l.state = l.__s, l.__d = !1), t.__e = o.__e, t.__k = o.__k, t.__k.some(function(D) {
            D && (D.__ = t);
          }), Te.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && a.push(l), p = ue(o);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(k, l.__s, T), O && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(w, S, y);
        });
      }
      if (l.context = T, l.props = k, l.__P = e, l.__e = !1, R = F.__r, W = 0, O) l.state = l.__s, l.__d = !1, R && R(t), f = l.render(l.props, l.state, l.context), Te.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, R && R(t), f = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++W < 25);
      l.state = l.__s, l.getChildContext != null && (n = ie(ie({}, n), l.getChildContext())), O && !g && l.getSnapshotBeforeUpdate != null && (y = l.getSnapshotBeforeUpdate(w, S)), K = f != null && f.type === Ne && f.key == null ? Tt(f.props.children) : f, p = zt(e, Pe(K) ? K : [K], t, o, n, d, i, a, p, b, c), l.base = t.__e, t.__u &= -161, l.__h.length && a.push(l), $ && (l.__E = l.__ = null);
    } catch (D) {
      if (a.length = h, t.__v = null, b || i != null) {
        if (D.then) {
          for (t.__u |= b ? 160 : 128; p && p.nodeType == 8 && p.nextSibling; ) p = p.nextSibling;
          i != null && (i[i.indexOf(p)] = null), t.__e = p;
        } else if (i != null) for (x = i.length; x--; ) We(i[x]);
      } else t.__e = o.__e;
      t.__k == null && (t.__k = o.__k || []), D.then || $t(t), F.__e(D, t, o);
    }
  } else i == null && t.__v == o.__v ? (t.__k = o.__k, t.__e = o.__e) : p = t.__e = er(o.__e, t, o, n, d, i, a, b, c);
  return (f = F.diffed) && f(t), 128 & t.__u ? void 0 : p;
}
function $t(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some($t));
}
function Ct(e, t, o) {
  for (var n = 0; n < o.length; n++) Ke(o[n], o[++n], o[++n]);
  F.__c && F.__c(t, e), e.some(function(d) {
    try {
      e = d.__h, d.__h = [], e.some(function(i) {
        i.call(d);
      });
    } catch (i) {
      F.__e(i, d.__v);
    }
  });
}
function Tt(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : Pe(e) ? e.map(Tt) : e.constructor !== void 0 ? null : ie({}, e);
}
function er(e, t, o, n, d, i, a, p, b) {
  var c, f, h, l, g, w, S, y = o.props || Ce, $ = t.props, k = t.type;
  if (k == "svg" ? d = "http://www.w3.org/2000/svg" : k == "math" ? d = "http://www.w3.org/1998/Math/MathML" : d || (d = "http://www.w3.org/1999/xhtml"), i != null) {
    for (c = 0; c < i.length; c++) if ((g = i[c]) && "setAttribute" in g == !!k && (k ? g.localName == k : g.nodeType == 3)) {
      e = g, i[c] = null;
      break;
    }
  }
  if (e == null) {
    if (k == null) return document.createTextNode($);
    e = document.createElementNS(d, k, $.is && $), p && (F.__m && F.__m(t, i), p = !1), i = null;
  }
  if (k == null) y === $ || p && e.data == $ || (e.data = $);
  else {
    if (i = k == "textarea" && $.defaultValue != null ? null : i && Ee.call(e.childNodes), !p && i != null) for (y = {}, c = 0; c < e.attributes.length; c++) y[(g = e.attributes[c]).name] = g.value;
    for (c in y) g = y[c], c == "dangerouslySetInnerHTML" ? h = g : c == "children" || c in $ || c == "value" && "defaultValue" in $ || c == "checked" && "defaultChecked" in $ || ye(e, c, null, g, d);
    for (c in $) g = $[c], c == "children" ? l = g : c == "dangerouslySetInnerHTML" ? f = g : c == "value" ? w = g : c == "checked" ? S = g : p && typeof g != "function" || y[c] === g || ye(e, c, g, y[c], d);
    if (f) p || h && (f.__html == h.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (h && (e.innerHTML = ""), zt(t.type == "template" ? e.content : e, Pe(l) ? l : [l], t, o, n, k == "foreignObject" ? "http://www.w3.org/1999/xhtml" : d, i, a, i ? i[0] : o.__k && ue(o, 0), p, b), i != null) for (c = i.length; c--; ) We(i[c]);
    p && k != "textarea" || (c = "value", k == "progress" && w == null ? e.removeAttribute("value") : w != null && (w !== e[c] || k == "progress" && !w || k == "option" && w != y[c]) && ye(e, c, w, y[c], d), c = "checked", S != null && S != e[c] && ye(e, c, S, y[c], d));
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
    F.__e(d, o);
  }
}
function It(e, t, o) {
  var n, d;
  if (F.unmount && F.unmount(e), (n = e.ref) && (n.current && n.current != e.__e || Ke(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      F.__e(i, t);
    }
    n.base = n.__P = n.__n = null;
  }
  if (n = e.__k) for (d = 0; d < n.length; d++) n[d] && It(n[d], t, o || typeof e.type != "function");
  o || We(e.__e), e.__c = e.__ = e.__e = void 0;
}
function tr(e, t, o) {
  return this.constructor(e, o);
}
function rt(e, t, o) {
  var n, d, i, a;
  t == document && (t = document.documentElement), F.__ && F.__(e, t), d = (n = !1) ? null : t.__k, i = [], a = [], Je(t, e = t.__k = Qt(Ne, null, [e]), d || Ce, Ce, t.namespaceURI, d ? null : t.firstChild ? Ee.call(t.childNodes) : null, i, d ? d.__e : t.firstChild, n, a), Ct(i, e, a), e.props.children = null;
}
Ee = Te.slice, F = { __e: function(e, t, o, n) {
  for (var d, i, a; t = t.__; ) if ((d = t.__c) && !d.__) try {
    if ((i = d.constructor) && i.getDerivedStateFromError != null && (d.setState(i.getDerivedStateFromError(e)), a = d.__d), d.componentDidCatch != null && (d.componentDidCatch(e, n || {}), a = d.__d), a) return d.__E = d;
  } catch (p) {
    e = p;
  }
  throw e;
} }, _t = 0, ze.prototype.setState = function(e, t) {
  var o;
  o = this.__s != null && this.__s != this.state ? this.__s : this.__s = ie({}, this.state), typeof e == "function" && (e = e(ie({}, o), this.props)), e && ie(o, e), e != null && this.__v && (t && this._sb.push(t), Ze(this));
}, ze.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ze(this));
}, ze.prototype.render = Ne, ce = [], vt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, yt = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Ie.__r = 0, Me = Math.random().toString(8), we = "__d" + Me, be = "__a" + Me, wt = /(PointerCapture)$|Capture$/i, qe = 0, He = tt(!1), Be = tt(!0);
var rr = 0;
function r(e, t, o, n, d, i) {
  t || (t = {});
  var a, p, b = t;
  if ("ref" in b) for (p in b = {}, t) p == "ref" ? a = t[p] : b[p] = t[p];
  var c = { type: e, props: b, key: o, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --rr, __i: -1, __u: 0, __source: d, __self: i };
  if (typeof e == "function" && (a = e.defaultProps)) for (p in a) b[p] === void 0 && (b[p] = a[p]);
  return F.vnode && F.vnode(c), c;
}
var xe, B, Fe, ot, je = 0, jt = [], q = F, nt = q.__b, it = q.__r, st = q.diffed, dt = q.__c, at = q.unmount, lt = q.__;
function Ge(e, t) {
  q.__h && q.__h(B, e, je || t), je = 0;
  var o = B.__H || (B.__H = { __: [], __h: [] });
  return e >= o.__.length && o.__.push({}), o.__[e];
}
function I(e) {
  return je = 1, or(Et, e);
}
function or(e, t, o) {
  var n = Ge(xe++, 2);
  if (n.t = e, !n.__c && (n.__ = [Et(void 0, t), function(p) {
    var b = n.__N ? n.__N[0] : n.__[0], c = n.t(b, p);
    b !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = B, !B.__f)) {
    var d = function(p, b, c) {
      if (!n.__c.__H) return !0;
      var f = !1, h = n.__c.props !== p;
      if (n.__c.__H.__.some(function(g) {
        if (g.__N) {
          f = !0;
          var w = g.__[0];
          g.__ = g.__N, g.__N = void 0, w !== g.__[0] && (h = !0);
        }
      }), i) {
        var l = i.call(this, p, b, c);
        return f ? l || h : l;
      }
      return !f || h;
    };
    B.__f = !0;
    var i = B.shouldComponentUpdate, a = B.componentWillUpdate;
    B.componentWillUpdate = function(p, b, c) {
      if (this.__e) {
        var f = i;
        i = void 0, d(p, b, c), i = f;
      }
      a && a.call(this, p, b, c);
    }, B.shouldComponentUpdate = d;
  }
  return n.__N || n.__;
}
function fe(e, t) {
  var o = Ge(xe++, 3);
  !q.__s && At(o.__H, t) && (o.__ = e, o.u = t, B.__H.__h.push(o));
}
function Qe(e) {
  return je = 5, ge(function() {
    return { current: e };
  }, []);
}
function ge(e, t) {
  var o = Ge(xe++, 7);
  return At(o.__H, t) && (o.__ = e(), o.__H = t, o.__h = e), o.__;
}
function nr() {
  for (var e; e = jt.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(Se), t.__h.some(Ve), t.__h = [];
    } catch (o) {
      t.__h = [], q.__e(o, e.__v);
    }
  }
}
q.__b = function(e) {
  B = null, nt && nt(e);
}, q.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), lt && lt(e, t);
}, q.__r = function(e) {
  it && it(e), xe = 0;
  var t = (B = e.__c).__H;
  t && (Fe === B ? (t.__h = [], B.__h = [], t.__.some(function(o) {
    o.__N && (o.__ = o.__N), o.u = o.__N = void 0;
  })) : (t.__h.some(Se), t.__h.some(Ve), t.__h = [], xe = 0)), Fe = B;
}, q.diffed = function(e) {
  st && st(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (jt.push(t) !== 1 && ot === q.requestAnimationFrame || ((ot = q.requestAnimationFrame) || ir)(nr)), t.__H.__.some(function(o) {
    o.u && (o.__H = o.u, o.u = void 0);
  })), Fe = B = null;
}, q.__c = function(e, t) {
  t.some(function(o) {
    try {
      o.__h.some(Se), o.__h = o.__h.filter(function(n) {
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
      Se(n);
    } catch (d) {
      t = d;
    }
  }), o.__H = void 0, t && q.__e(t, o.__v));
};
var ct = typeof requestAnimationFrame == "function";
function ir(e) {
  var t, o = function() {
    clearTimeout(n), ct && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(o, 35);
  ct && (t = requestAnimationFrame(o));
}
function Se(e) {
  var t = B, o = e.__c;
  typeof o == "function" && (e.__c = void 0, o()), B = t;
}
function Ve(e) {
  var t = B;
  e.__c = e.__(), B = t;
}
function At(e, t) {
  return !e || e.length !== t.length || t.some(function(o, n) {
    return o !== e[n];
  });
}
function Et(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const sr = {
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
  var n;
  const t = ((n = e.name.split(".").pop()) == null ? void 0 : n.toLocaleLowerCase()) ?? "";
  if (e.name.includes(".")) return sr[t] ?? null;
  const o = e.type.split("/", 1)[0];
  return o === "image" || o === "video" || o === "audio" ? o : null;
}
function dr(e) {
  const d = e.replace(/\.[^.]+$/, "").replace(/^\s*\d+\s*[-_. ]+/, "").normalize("NFKC").replace(/[\s-]+/g, "_").replace(/[{}]/g, "").replace(/_+/g, "_").replace(/^[_\.]+|[_\.]+$/g, "").slice(0, 96) || "asset";
  return d.toLocaleLowerCase().endsWith(".audio") ? `${d}_asset` : d;
}
function ar(e, t) {
  const o = new Set(Array.from(t, (d) => d.toLocaleLowerCase()));
  if (!o.has(e.toLocaleLowerCase())) return e;
  let n = 2;
  for (; o.has(`${e}_${n}`.toLocaleLowerCase()); ) n += 1;
  return `${e}_${n}`;
}
function lr(e, t, o) {
  const n = e.trim().toLocaleLowerCase();
  return !e.trim() || /[\s{}]/.test(e) || n.endsWith(".audio") ? "invalid" : Array.from(t, (i) => i.toLocaleLowerCase()).includes(n) || Array.from(o, (i) => i.trim().toLocaleLowerCase()).filter((i) => i === n).length > 1 ? "duplicate" : null;
}
function cr(e, t, o) {
  const n = new Set(Array.from(t)), d = [], i = [];
  for (const a of e) {
    const p = Pt(a);
    if (!p) {
      i.push(a.name);
      continue;
    }
    const b = ar(dr(a.name), n);
    n.add(b), d.push({ id: o(), file: a, alias: b, kind: p, durationSeconds: p === "image" ? null : 2, includeVideoAudio: !1, status: "pending", error: "" });
  }
  return { drafts: d, rejected: i };
}
function pr(e, t, o) {
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
function hr(e, t) {
  return t === "image" ? Promise.resolve(null) : new Promise((o) => {
    const n = document.createElement(t === "video" ? "video" : "audio"), d = URL.createObjectURL(e);
    let i = !1;
    const a = (p) => {
      i || (i = !0, n.onloadedmetadata = null, n.onerror = null, n.removeAttribute("src"), n.load(), URL.revokeObjectURL(d), o(p));
    };
    n.preload = "metadata", n.onloadedmetadata = () => a(Number.isFinite(n.duration) && n.duration > 0 ? Math.round(n.duration * 10) / 10 : null), n.onerror = () => a(null), n.src = d;
  });
}
const ur = () => `asset_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`, Oe = (e, t) => t === "zh" ? { image: "图片", video: "视频", audio: "音频" }[e] : e;
function mr({ language: e, assets: t, projectName: o, onClose: n, onImported: d, uploadFile: i }) {
  const [a, p] = I([]), [b, c] = I([]), [f, h] = I(!1), [l, g] = I(!1), w = Qe([]);
  w.current = a;
  const S = t.map((x) => x.alias), y = (x, A) => p((D) => D.map((E) => E.id === x ? { ...E, ...A } : E)), $ = (x) => {
    if (!x.length || l) return;
    const A = [...S, ...w.current.map((E) => E.alias)], D = cr(x, A, ur);
    D.rejected.length && c((E) => [...E, ...D.rejected]), D.drafts.length && (p((E) => [...E, ...D.drafts]), D.drafts.forEach((E) => {
      hr(E.file, E.kind).then((J) => {
        J != null && p((X) => X.map((V) => V.id === E.id && V.kind === E.kind && V.durationSeconds === 2 ? { ...V, durationSeconds: J } : V));
      });
    }));
  }, O = a.filter((x) => x.status !== "imported").map((x) => x.alias), _ = (x) => {
    if (x.status === "imported") return null;
    const A = lr(x.alias, S, O);
    return A === "invalid" ? e === "zh" ? "别名为空、包含空白/花括号，或使用了保留后缀 .audio" : "Alias is empty, contains whitespace/braces, or uses reserved .audio" : A === "duplicate" ? e === "zh" ? "别名与素材库或本批次其他素材重复" : "Alias duplicates an existing or staged asset" : Pt(x.file) !== x.kind ? e === "zh" ? "文件扩展名与所选类型不匹配" : "The extension does not match the selected kind" : x.kind !== "image" && (x.durationSeconds == null || x.durationSeconds <= 0) ? e === "zh" ? "视频或音频时长必须大于 0" : "Video/audio duration must be greater than 0" : null;
  }, T = async () => {
    const A = w.current.filter((X) => X.status === "pending" || X.status === "error");
    if (!A.length) return;
    if (A.some(_)) {
      window.alert(e === "zh" ? "请先修正列表中标红的项目。" : "Fix the highlighted rows before importing.");
      return;
    }
    g(!0);
    const D = Math.max(0, ...t.map((X) => X.fixedOrder)) + 1;
    let E = 0;
    const J = async () => {
      for (; E < A.length; ) {
        const X = E++, V = A[X];
        y(V.id, { status: "uploading", error: "" });
        try {
          const ee = await i(o, V.kind, V.file);
          d([pr(V, ee, D + X)]), y(V.id, { status: "imported", error: "" });
        } catch (ee) {
          y(V.id, { status: "error", error: String(ee) });
        }
      }
    };
    await Promise.all(Array.from({ length: Math.min(2, A.length) }, J)), g(!1);
  }, R = a.filter((x) => x.status === "imported").length, W = a.filter((x) => x.status === "error").length, K = a.length - R;
  return /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-asset-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": e === "zh" ? "批量导入素材" : "Batch import assets", children: [
    /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: e === "zh" ? "批量导入素材" : "Batch import assets" }),
        /* @__PURE__ */ r("p", { children: e === "zh" ? "可混合选择图片、视频和音频；确认列表后再写入素材库。" : "Select images, videos, and audio together; review before uploading." })
      ] }),
      /* @__PURE__ */ r("button", { disabled: l, "aria-label": e === "zh" ? "关闭" : "Close", onClick: n, children: "×" })
    ] }),
    /* @__PURE__ */ r("label", { class: `td-asset-dropzone ${f ? "dragging" : ""}`, onDragEnter: (x) => {
      x.preventDefault(), h(!0);
    }, onDragOver: (x) => x.preventDefault(), onDragLeave: (x) => {
      x.currentTarget === x.target && h(!1);
    }, onDrop: (x) => {
      var A;
      x.preventDefault(), h(!1), $(Array.from(((A = x.dataTransfer) == null ? void 0 : A.files) ?? []));
    }, children: [
      /* @__PURE__ */ r("strong", { children: e === "zh" ? "拖拽素材到这里，或点击选择多个文件" : "Drop media here, or click to select multiple files" }),
      /* @__PURE__ */ r("span", { children: e === "zh" ? "支持图片、视频、音频混合导入" : "Mixed image, video, and audio selection is supported" }),
      /* @__PURE__ */ r("input", { type: "file", multiple: !0, accept: "image/*,video/*,audio/*", disabled: l, onChange: (x) => {
        $(Array.from(x.currentTarget.files ?? [])), x.currentTarget.value = "";
      } })
    ] }),
    b.length > 0 && /* @__PURE__ */ r("div", { class: "td-asset-batch-warning", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `已跳过 ${b.length} 个不支持的文件：${b.join("、")}` : `Skipped ${b.length} unsupported files: ${b.join(", ")}` }),
      /* @__PURE__ */ r("button", { onClick: () => c([]), children: "×" })
    ] }),
    /* @__PURE__ */ r("div", { class: "td-asset-batch-summary", children: [
      /* @__PURE__ */ r("span", { children: e === "zh" ? `共 ${a.length} 项 · 已导入 ${R} · 待处理 ${K}${W ? ` · 失败 ${W}` : ""}` : `${a.length} items · ${R} imported · ${K} pending${W ? ` · ${W} failed` : ""}` }),
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
      a.map((x) => {
        const A = _(x), D = l || x.status === "imported" || x.status === "uploading";
        return /* @__PURE__ */ r("div", { class: `td-asset-batch-row ${A || x.status === "error" ? "invalid" : ""} ${x.status === "imported" ? "imported" : ""}`, children: [
          /* @__PURE__ */ r("div", { class: "td-asset-batch-file", children: [
            /* @__PURE__ */ r("strong", { title: x.file.name, children: x.file.name }),
            /* @__PURE__ */ r("small", { children: [
              (x.file.size / 1024 / 1024).toFixed(1),
              " MB · ",
              x.status === "pending" ? e === "zh" ? "待导入" : "Pending" : x.status === "uploading" ? e === "zh" ? "上传中" : "Uploading" : x.status === "imported" ? e === "zh" ? "已完成" : "Imported" : e === "zh" ? "失败" : "Failed"
            ] }),
            (A || x.error) && /* @__PURE__ */ r("em", { title: A || x.error, children: A || x.error })
          ] }),
          /* @__PURE__ */ r("input", { disabled: D, value: x.alias, onInput: (E) => y(x.id, { alias: E.currentTarget.value, status: "pending", error: "" }) }),
          /* @__PURE__ */ r("select", { disabled: D, value: x.kind, onChange: (E) => {
            const J = E.currentTarget.value;
            y(x.id, { kind: J, durationSeconds: J === "image" ? null : x.durationSeconds ?? 2, includeVideoAudio: J === "video" && x.includeVideoAudio, status: "pending", error: "" });
          }, children: [
            /* @__PURE__ */ r("option", { value: "image", children: Oe("image", e) }),
            /* @__PURE__ */ r("option", { value: "video", children: Oe("video", e) }),
            /* @__PURE__ */ r("option", { value: "audio", children: Oe("audio", e) })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", disabled: D || x.kind === "image", value: x.durationSeconds ?? "", onInput: (E) => y(x.id, { durationSeconds: E.currentTarget.value ? Number(E.currentTarget.value) : null, status: "pending", error: "" }) }),
            /* @__PURE__ */ r("span", { children: x.kind === "image" ? "—" : e === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-asset-batch-audio", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", disabled: D || x.kind !== "video", checked: x.kind === "video" && x.includeVideoAudio, onChange: (E) => y(x.id, { includeVideoAudio: E.currentTarget.checked }) }),
            /* @__PURE__ */ r("span", { children: x.kind === "video" ? x.includeVideoAudio ? e === "zh" ? "开" : "ON" : e === "zh" ? "关" : "OFF" : "—" })
          ] }),
          /* @__PURE__ */ r("button", { class: "danger", disabled: D, onClick: () => p((E) => E.filter((J) => J.id !== x.id)), children: e === "zh" ? "移除" : "Remove" })
        ] }, x.id);
      })
    ] }),
    /* @__PURE__ */ r("footer", { children: [
      /* @__PURE__ */ r("button", { disabled: l, onClick: n, children: e === "zh" ? "关闭" : "Close" }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: l || !a.some((x) => x.status === "pending" || x.status === "error"), onClick: () => void T(), children: l ? e === "zh" ? "正在导入…" : "Importing…" : W ? e === "zh" ? "重试失败项" : "Retry failed" : e === "zh" ? "开始导入" : "Start import" })
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
`), i = [...d.matchAll(pt())].map((_) => _[1].trim()), a = [], p = /* @__PURE__ */ new Set(), b = (_) => {
    p.has(_.id) || (p.add(_.id), a.push(_));
  };
  [...n.values()].filter((_) => _.fixed).sort((_, T) => _.fixedOrder - T.fixedOrder || _.alias.localeCompare(T.alias)).forEach(b);
  for (const _ of i) {
    const T = _.endsWith(".audio") ? _.slice(0, -6) : _, R = n.get(T);
    if (!R) {
      o.push(`未找到或已禁用素材：${_}`);
      continue;
    }
    _.endsWith(".audio") && (R.kind !== "video" || !R.includeVideoAudio) && o.push(`视频伴音未启用：${_}`), b(R);
  }
  const c = a.filter((_) => _.kind === "image"), f = a.filter((_) => _.kind === "video"), h = f.filter((_) => _.includeVideoAudio), l = a.filter((_) => _.kind === "audio"), g = h.length + l.length, w = c.length + f.length + l.length;
  c.length > 9 && o.push(`参考图 ${c.length}/9，超出 H3 上限`), f.length > 3 && o.push(`参考视频 ${f.length}/3，超出 H3 上限`), g > 3 && o.push(`有效音频 ${g}/3，超出 H3 总上限`), w > 12 && o.push(`混合文件 ${w}/12，超出 H3 上限`), g && !c.length && !f.length && o.push("音频参考不能单独使用");
  const S = f.filter((_) => typeof _.durationSeconds == "number");
  for (const _ of f) (_.durationSeconds == null || _.durationSeconds < 2 || _.durationSeconds > 15) && o.push(`视频 ${_.alias} 的时长必须为 2–15 秒`);
  S.reduce((_, T) => _ + (T.durationSeconds ?? 0), 0) > 15 && o.push("参考视频总时长超过 15 秒");
  const y = [...h.map((_) => _.audioDurationSeconds ?? _.durationSeconds), ...l.map((_) => _.durationSeconds)];
  y.some((_) => _ == null || _ < 2 || _ > 15) && o.push("每路有效音频时长必须为 2–15 秒"), y.reduce((_, T) => _ + (T ?? 0), 0) > 15 && o.push("有效音频总时长超过 15 秒");
  const $ = /* @__PURE__ */ new Map();
  c.forEach((_, T) => $.set(_.alias, `<Picture ${T + 1}>`)), f.forEach((_, T) => $.set(_.alias, `<Video ${T + 1}>`)), h.forEach((_, T) => $.set(`${_.alias}.audio`, `<Audio ${T + 1}>`)), l.forEach((_, T) => $.set(_.alias, `<Audio ${h.length + T + 1}>`));
  const k = d.replace(pt(), (_, T) => $.get(T.trim()) ?? _), O = [...$.entries()].map(([_, T]) => ({ label: T, alias: _, kind: T.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt: k, errors: o, slots: O, mixedFiles: w, audioCount: g };
}
function fr(e) {
  var d, i, a, p, b, c;
  const t = [];
  (i = (d = e.project) == null ? void 0 : d.name) != null && i.trim() || t.push("Project name 不能为空"), (p = (a = e.project) == null ? void 0 : a.runId) != null && p.trim() || t.push("Run ID 不能为空"), (!Array.isArray(e.shots) || !e.shots.some((f) => f.enabled)) && t.push("至少需要一个启用分镜");
  const o = /* @__PURE__ */ new Set();
  for (const f of e.shots ?? [])
    (!((b = f.id) != null && b.trim()) || o.has(f.id)) && t.push(`分镜 ID 为空或重复：${f.id || "(空)"}`), o.add(f.id), f.durationSeconds > 0 || t.push(`分镜 ${f.id} 的时长必须大于 0`);
  const n = /* @__PURE__ */ new Set();
  for (const f of e.assets ?? []) {
    const h = (c = f.alias) == null ? void 0 : c.toLocaleLowerCase();
    (!f.alias || /[\s{}]/.test(f.alias) || f.alias.endsWith(".audio") || n.has(h)) && t.push(`素材别名无效或重复：${f.alias || "(空)"}`), n.add(h), f.enabled && !f.path && t.push(`素材 ${f.alias} 尚未选择文件`);
  }
  for (const f of e.shots.filter((h) => h.enabled)) t.push(...Lt(e, f).errors.map((h) => `${f.title}: ${h}`));
  return [...new Set(t)];
}
function gr(e, t) {
  const o = [], n = new RegExp(Nt, "g");
  let d = 0;
  for (const i of e.matchAll(n)) {
    const a = i.index ?? 0;
    a > d && o.push({ text: e.slice(d, a), reference: !1 }), o.push({ text: i[0], reference: !0, valid: t(i[1]) }), d = a + i[0].length;
  }
  return d < e.length && o.push({ text: e.slice(d), reference: !1 }), o;
}
function Ue({ value: e, rows: t, onInput: o, isReferenceValid: n }) {
  const d = Qe(null), i = gr(e, n), a = (p) => {
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
const br = {
  zh: { title: "Theodore 导播台", save: "保存到工作流", close: "关闭", shots: "分镜", assets: "素材库", settings: "项目设置", postprocess: "后处理", addShot: "添加分镜", addAsset: "添加素材", preview: "H3 编译预览", noErrors: "当前分镜通过预检" },
  en: { title: "Theodore Director", save: "Save to workflow", close: "Close", shots: "Shots", assets: "Media", settings: "Project", postprocess: "Post-process", addShot: "Add shot", addAsset: "Add asset", preview: "H3 compile preview", noErrors: "Current shot passes validation" }
};
function pe(e, t) {
  return br[e][t];
}
function he(e) {
  return (Array.isArray(e.results) && e.results.length ? e.results : e.path ? [{ path: e.path, bytes: e.bytes, modifiedAt: e.modifiedAt, stage: e.stage, sourcePath: e.sourcePath, completedAt: e.completedAt }] : []).filter((o) => typeof o.path == "string" && o.path.trim().length > 0).sort((o, n) => (n.modifiedAt ?? 0) - (o.modifiedAt ?? 0));
}
function Mt(e, t) {
  const o = /_video_(\d+)/i.exec(e.replace(/\\/g, "/"));
  return o ? Number(o[1]) : t;
}
function xr(e) {
  return e.stage !== "second_pass";
}
function Ae({ src: e, alt: t }) {
  const o = Qe(null), [n, d] = I(!1);
  return fe(() => {
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
function oe(e, t) {
  const o = e.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!o || o.startsWith("/") || /^[A-Za-z]:\//.test(o)) return null;
  const n = o.split("/").filter(Boolean), d = n.pop();
  if (!d || n.some((a) => a === "..")) return null;
  const i = new URLSearchParams({ filename: d, type: t });
  return n.length && i.set("subfolder", n.join("/")), `/view?${i.toString()}`;
}
function _r(e) {
  return oe(e, "input");
}
function se(e) {
  return e.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
}
function ut({ asset: e, compact: t = !1 }) {
  const o = _r(e.path), n = `td-media-preview ${t ? "compact" : ""}`;
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
function vr(e, t, o) {
  return e.filter((n) => n.shot.enabled && t[n.key]).map((n) => ({
    shotId: n.shot.id,
    activeIndex: n.activeIndex,
    path: o[n.key] ?? ""
  }));
}
function yr(e, t, o) {
  const n = {};
  return e.forEach((d) => {
    const i = d.sourceIndex + 1;
    n[d.key] = d.shot.enabled && i >= t && i <= o;
  }), n;
}
function wr(e, t, o) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId, shotId: t, activeIndex: String(o) }).toString()}`;
}
function kr(e, t) {
  return e === "second_pass" ? t === "zh" ? "二采" : "2nd pass" : e === "first_pass" ? t === "zh" ? "一采" : "1st pass" : t === "zh" ? "旧结果" : "Legacy";
}
function zr({ plan: e, language: t, queueSecondPass: o }) {
  const n = ge(() => Ft(e), [e]), [d, i] = I({}), [a, p] = I({}), [b, c] = I(null), [f, h] = I(0);
  fe(() => {
    let g = !1;
    const w = {};
    return n.forEach((S) => {
      w[S.key] = { loading: !0, response: { found: !1, results: [] } };
    }), i(w), n.forEach((S) => {
      fetch(wr(e, S.shot.id, S.activeIndex)).then(async (y) => {
        const $ = await y.json();
        if (!y.ok) throw new Error($.error || `HTTP ${y.status}`);
        g || i((k) => ({ ...k, [S.key]: { loading: !1, response: $ } }));
      }).catch((y) => {
        g || i(($) => ({ ...$, [S.key]: { loading: !1, response: { found: !1, results: [], error: String(y) } } }));
      });
    }), () => {
      g = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((g) => g.id).join("|"), f]);
  const l = async (g, w) => {
    if (o) {
      p((S) => ({ ...S, [w]: { state: "queued" } }));
      try {
        await o({
          plan: e,
          shotId: g,
          sourcePath: w,
          requestId: `td2_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`
        }), p((S) => ({ ...S, [w]: { state: "done" } })), h((S) => S + 1);
      } catch (S) {
        p((y) => ({ ...y, [w]: { state: "error", message: String(S instanceof Error ? S.message : S) } }));
      }
    }
  };
  return /* @__PURE__ */ r("section", { class: "td-postprocess td-second-pass-panel", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "单独二采" : "Standalone second pass" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "从满意的一采抽卡直接执行二采，不重跑一采，也不启动 Impact 循环。" : "Refine a selected first-pass result without rerunning the first pass or the Impact loop." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: /* @__PURE__ */ r("button", { onClick: () => h((g) => g + 1), children: [
        "↻ ",
        t === "zh" ? "刷新结果" : "Refresh"
      ] }) })
    ] }),
    !o && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "当前工作流缺少后处理二采支流，请重新载入仓库中的 V7 导播台示例工作流。" : "This workflow does not contain the standalone second-pass branch. Reload the V7 example workflow from the repository." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: n.map((g) => {
      const w = d[g.key], S = he((w == null ? void 0 : w.response) ?? { results: [] });
      return /* @__PURE__ */ r("article", { class: "td-post-shot", children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("span", { children: [
            /* @__PURE__ */ r("strong", { children: g.shot.id }),
            /* @__PURE__ */ r("em", { children: g.shot.title })
          ] }),
          /* @__PURE__ */ r("span", { children: [
            g.shot.durationSeconds,
            "s"
          ] })
        ] }),
        !g.shot.enabled && /* @__PURE__ */ r("div", { class: "td-post-shot-disabled-note", children: t === "zh" ? "镜头已禁用，但仍可对历史一采结果进行后处理。" : "This shot is disabled, but its historical first-pass results remain available." }),
        w != null && w.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading results…" }) : w != null && w.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : S.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: S.map((y) => {
          const $ = oe(y.path, "output"), k = a[y.path], O = xr(y);
          return /* @__PURE__ */ r("div", { class: "td-second-pass-result", children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", onClick: () => $ && c({ path: y.path, title: `${g.shot.id} · ${g.shot.title}` }), children: [
              $ ? /* @__PURE__ */ r(Ae, { src: $, alt: se(y.path) }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  kr(y.stage, t),
                  (y.stage === "legacy_unknown" || !y.stage) && /* @__PURE__ */ r("em", { children: t === "zh" ? "兼容" : "Compatible" })
                ] }),
                /* @__PURE__ */ r("span", { title: y.path, children: se(y.path) }),
                /* @__PURE__ */ r("small", { children: y.bytes ? `${(y.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "primary td-second-pass-run", disabled: !o || !O || (k == null ? void 0 : k.state) === "queued", onClick: () => void l(g.shot.id, y.path), children: O ? (k == null ? void 0 : k.state) === "queued" ? t === "zh" ? "排队/执行中…" : "Queued/running…" : (k == null ? void 0 : k.state) === "done" ? t === "zh" ? "二采完成" : "Completed" : t === "zh" ? "进行二采" : "Run second pass" : t === "zh" ? "已是二采" : "Already refined" }),
            (k == null ? void 0 : k.state) === "error" && /* @__PURE__ */ r("div", { class: "td-second-pass-error", children: k.message })
          ] }, y.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "没有可用的一采结果" : "No first-pass result available" })
      ] }, g.key);
    }) }),
    b && oe(b.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => c(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (g) => g.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: b.title }),
        /* @__PURE__ */ r("button", { onClick: () => c(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: oe(b.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { children: se(b.path) })
    ] }) })
  ] });
}
async function mt(e) {
  const t = await fetch(e), o = await t.json();
  if (!t.ok) throw new Error(o.error || `HTTP ${t.status}`);
  return o;
}
function Sr(e, t, o) {
  return `/theodore-director/v1/generated-video?${new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t,
    activeIndex: String(o)
  }).toString()}`;
}
function $r(e) {
  return `/theodore-director/v1/postprocess/merged-videos?${new URLSearchParams({ projectName: e.project.name, runId: e.project.runId }).toString()}`;
}
function Cr({ plan: e, language: t, queueSecondPass: o }) {
  const [n, d] = I("merge");
  return /* @__PURE__ */ r("section", { class: "td-postprocess-shell", children: [
    /* @__PURE__ */ r("div", { class: "td-post-mode-tabs", role: "tablist", children: [
      /* @__PURE__ */ r("button", { class: n === "merge" ? "active" : "", role: "tab", "aria-selected": n === "merge", onClick: () => d("merge"), children: t === "zh" ? "合并视频" : "Merge videos" }),
      /* @__PURE__ */ r("button", { class: n === "second-pass" ? "active" : "", role: "tab", "aria-selected": n === "second-pass", onClick: () => d("second-pass"), children: t === "zh" ? "单独二采" : "Standalone second pass" })
    ] }),
    n === "merge" ? /* @__PURE__ */ r(Tr, { plan: e, language: t }) : /* @__PURE__ */ r(zr, { plan: e, language: t, queueSecondPass: o })
  ] });
}
function Tr({ plan: e, language: t }) {
  const o = ge(() => Ft(e), [e]), [n, d] = I({}), [i, a] = I({}), [p, b] = I({}), [c, f] = I(null), [h, l] = I(!1), [g, w] = I(""), [S, y] = I(""), [$, k] = I({ found: !1, results: [] }), [O, _] = I(!1), [T, R] = I(!1), [W, K] = I(""), [x, A] = I(0), [D, E] = I("1"), [J, X] = I(String(o.length || 1)), V = o.filter((u) => u.shot.enabled), ee = V.length > 0 && V.every((u) => i[u.key]), de = vr(o, i, p), ae = de.filter((u) => !u.path), Q = o.some((u) => {
    var C;
    return i[u.key] && ((C = n[u.key]) == null ? void 0 : C.loading);
  }), te = o.reduce(
    (u, C) => u + (C.shot.enabled && i[C.key] ? C.shot.durationSeconds : 0),
    0
  ), Z = ge(() => he($), [$]), re = Z.find((u) => u.path === W) ?? Z[0];
  fe(() => {
    let u = !1;
    const C = {}, H = {};
    return o.forEach((U) => {
      C[U.key] = U.shot.enabled, H[U.key] = { loading: !0, response: { found: !1, results: [] } };
    }), a((U) => {
      const P = {};
      return o.forEach((M) => {
        P[M.key] = M.shot.enabled ? U[M.key] ?? C[M.key] : !1;
      }), P;
    }), d(H), w(""), o.forEach((U) => {
      mt(Sr(e, U.shot.id, U.activeIndex)).then((P) => {
        if (u) return;
        const M = he(P);
        d((Y) => ({ ...Y, [U.key]: { loading: !1, response: P } })), b((Y) => {
          var j;
          return {
            ...Y,
            [U.key]: M.some((le) => le.path === Y[U.key]) ? Y[U.key] : ((j = M[0]) == null ? void 0 : j.path) ?? ""
          };
        });
      }).catch((P) => {
        u || d((M) => ({
          ...M,
          [U.key]: { loading: !1, response: { found: !1, results: [], error: String(P) } }
        }));
      });
    }), () => {
      u = !0;
    };
  }, [e.project.name, e.project.runId, e.shots.map((u) => `${u.id}:${u.enabled}`).join("|"), x]), fe(() => {
    let u = !1;
    return _(!0), mt($r(e)).then((C) => {
      if (u) return;
      const H = he(C);
      k(C), K((U) => {
        var P;
        return H.some((M) => M.path === U) ? U : ((P = H[0]) == null ? void 0 : P.path) ?? "";
      });
    }).catch((C) => {
      u || k({ found: !1, results: [], error: String(C) });
    }).finally(() => {
      u || _(!1);
    }), () => {
      u = !0;
    };
  }, [e.project.name, e.project.runId, x]);
  const _e = () => {
    const u = !ee;
    a((C) => {
      const H = { ...C };
      return V.forEach((U) => {
        H[U.key] = u;
      }), H;
    });
  }, Re = () => {
    const u = Number(D), C = Number(J);
    if (!Number.isInteger(u) || !Number.isInteger(C) || u < 1 || C < u || C > o.length) {
      window.alert(t === "zh" ? `请输入有效范围：1 ≤ m ≤ n ≤ ${o.length}` : `Enter a valid range: 1 ≤ m ≤ n ≤ ${o.length}`);
      return;
    }
    a(yr(o, u, C));
  }, ve = async () => {
    if (!de.length) {
      window.alert(t === "zh" ? "请至少选择一个镜头" : "Select at least one shot.");
      return;
    }
    if (ae.length) {
      window.alert(t === "zh" ? `以下已选镜头没有可用结果：${ae.map((u) => u.shotId).join("、")}` : `Selected shots without a result: ${ae.map((u) => u.shotId).join(", ")}`);
      return;
    }
    l(!0), w("");
    try {
      const u = await fetch("/theodore-director/v1/postprocess/merge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId, selections: de })
      }), C = await u.json();
      if (!u.ok) throw new Error(C.error || `HTTP ${u.status}`);
      A((H) => H + 1);
    } catch (u) {
      w(String(u instanceof Error ? u.message : u));
    } finally {
      l(!1);
    }
  }, De = async () => {
    R(!0), y("");
    try {
      const u = await fetch("/theodore-director/v1/postprocess/open-folder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: e.project.name, runId: e.project.runId })
      }), C = await u.json();
      if (!u.ok) throw new Error(C.error || `HTTP ${u.status}`);
    } catch (u) {
      y(String(u instanceof Error ? u.message : u));
    } finally {
      R(!1);
    }
  }, L = re != null && re.path ? oe(re.path, "output") : null;
  return /* @__PURE__ */ r("section", { class: "td-postprocess", children: [
    /* @__PURE__ */ r("div", { class: "td-post-header", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并视频" : "Merge videos" }),
        /* @__PURE__ */ r("p", { children: t === "zh" ? "从每个镜头选择一个结果，按当前分镜顺序进行无损合并。" : "Choose one result per shot and merge them losslessly in storyboard order." })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-post-actions", children: [
        /* @__PURE__ */ r("button", { disabled: T, onClick: De, children: [
          "📁 ",
          T ? t === "zh" ? "正在打开…" : "Opening…" : t === "zh" ? "打开结果文件夹" : "Open results folder"
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => A((u) => u + 1), children: [
          "↻ ",
          t === "zh" ? "刷新结果" : "Refresh"
        ] }),
        /* @__PURE__ */ r("button", { onClick: _e, children: ee ? t === "zh" ? "全部取消" : "Clear all" : t === "zh" ? "一键全选" : "Select all" })
      ] })
    ] }),
    S && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "打开结果文件夹失败：" : "Unable to open results folder: ",
      S
    ] }),
    /* @__PURE__ */ r("div", { class: "td-post-summary", children: [
      /* @__PURE__ */ r("span", { children: t === "zh" ? `已选择 ${de.length}/${V.length} 个启用镜头` : `${de.length}/${V.length} enabled shots selected` }),
      /* @__PURE__ */ r("span", { children: t === "zh" ? `预计时长 ${te.toFixed(1)} 秒` : `Estimated duration ${te.toFixed(1)} sec` }),
      /* @__PURE__ */ r("div", { class: "td-post-range", role: "group", "aria-label": t === "zh" ? "合并视频范围" : "Merge video range", children: [
        /* @__PURE__ */ r("span", { children: t === "zh" ? "范围" : "Range" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: o.length, step: "1", value: D, "aria-label": t === "zh" ? "起始镜头 m" : "Start shot m", onInput: (u) => E(u.currentTarget.value) }),
        /* @__PURE__ */ r("span", { children: "—" }),
        /* @__PURE__ */ r("input", { type: "number", min: "1", max: o.length, step: "1", value: J, "aria-label": t === "zh" ? "结束镜头 n" : "End shot n", onInput: (u) => X(u.currentTarget.value) }),
        /* @__PURE__ */ r("button", { disabled: !o.length, onClick: Re, children: t === "zh" ? "确认范围" : "Apply range" })
      ] }),
      /* @__PURE__ */ r("button", { class: "primary", disabled: h || Q || !de.length || !!ae.length, onClick: ve, children: h ? t === "zh" ? "正在合并…" : "Merging…" : t === "zh" ? "合并所选视频" : "Merge selected videos" })
    ] }),
    g && /* @__PURE__ */ r("div", { class: "td-post-error", children: [
      t === "zh" ? "合并失败：" : "Merge failed: ",
      g
    ] }),
    ae.length > 0 && /* @__PURE__ */ r("div", { class: "td-post-warning", children: t === "zh" ? "已选镜头中存在尚未生成视频的镜头。" : "Some selected shots do not have generated videos yet." }),
    /* @__PURE__ */ r("div", { class: "td-post-shot-list", children: o.map((u) => {
      const C = n[u.key], H = he((C == null ? void 0 : C.response) ?? { results: [] }), U = !!i[u.key];
      return /* @__PURE__ */ r("article", { class: `td-post-shot ${U ? "selected" : ""} ${u.shot.enabled ? "" : "disabled"}`, children: [
        /* @__PURE__ */ r("header", { children: [
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: U, disabled: !u.shot.enabled, onChange: (P) => a((M) => ({ ...M, [u.key]: P.currentTarget.checked })) }),
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
        C != null && C.loading ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "正在查询生成结果…" : "Loading generated results…" }) : C != null && C.response.error ? /* @__PURE__ */ r("div", { class: "td-post-shot-empty errors", children: t === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry." }) : H.length ? /* @__PURE__ */ r("div", { class: "td-post-result-list", children: H.map((P, M) => {
          const Y = oe(P.path, "output"), j = p[u.key] === P.path, le = Mt(P.path, H.length - M);
          return /* @__PURE__ */ r("div", { class: `td-post-result ${j ? "selected" : ""}`, children: [
            /* @__PURE__ */ r("button", { class: "td-post-result-choice", role: "radio", "aria-checked": j, onClick: () => b((Le) => ({ ...Le, [u.key]: P.path })), children: [
              Y ? /* @__PURE__ */ r(Ae, { src: Y, alt: `${u.shot.title} ${t === "zh" ? "结果" : "result"} ${le}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
              /* @__PURE__ */ r("span", { children: [
                /* @__PURE__ */ r("strong", { children: [
                  t === "zh" ? `结果 ${le}` : `Result ${le}`,
                  M === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
                ] }),
                /* @__PURE__ */ r("span", { title: P.path, children: se(P.path) }),
                /* @__PURE__ */ r("small", { children: P.bytes ? `${(P.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
              ] })
            ] }),
            /* @__PURE__ */ r("button", { class: "td-post-result-play", disabled: !Y, title: t === "zh" ? "播放预览" : "Play preview", onClick: () => Y && f({ path: P.path, title: `${u.shot.id} · ${u.shot.title}` }), children: "▶" })
          ] }, P.path);
        }) }) : /* @__PURE__ */ r("div", { class: "td-post-shot-empty", children: t === "zh" ? "未找到这个镜头的生成结果" : "No generated result found for this shot" })
      ] }, u.key);
    }) }),
    /* @__PURE__ */ r("section", { class: "td-post-merged", children: [
      /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h2", { children: t === "zh" ? "合并结果" : "Merged results" }),
        /* @__PURE__ */ r("span", { class: `td-result-state ${Z.length ? "found" : ""}`, children: O ? t === "zh" ? "查询中" : "Checking" : t === "zh" ? `${Z.length} 个结果` : `${Z.length} results` })
      ] }) }),
      O ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "正在查询合并结果…" : "Loading merged results…" }) : $.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: t === "zh" ? "无法查询合并结果" : "Unable to query merged results" }) : re && L ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
        /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
          /* @__PURE__ */ r("video", { src: L, controls: !0, preload: "metadata", playsInline: !0 }, re.path),
          /* @__PURE__ */ r("div", { class: "td-generated-meta", title: re.path, children: re.path })
        ] }),
        /* @__PURE__ */ r("div", { class: "td-result-list", children: Z.map((u, C) => {
          const H = oe(u.path, "output");
          return /* @__PURE__ */ r("button", { class: `td-result-item ${u.path === re.path ? "selected" : ""}`, onClick: () => K(u.path), children: [
            H ? /* @__PURE__ */ r(Ae, { src: H, alt: `${t === "zh" ? "合并结果" : "Merged result"} ${Z.length - C}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: "×" }),
            /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
              /* @__PURE__ */ r("strong", { children: [
                t === "zh" ? `合并结果 ${Z.length - C}` : `Merged result ${Z.length - C}`,
                C === 0 && /* @__PURE__ */ r("em", { children: t === "zh" ? "最新" : "Latest" })
              ] }),
              /* @__PURE__ */ r("span", { children: se(u.path) }),
              /* @__PURE__ */ r("small", { children: u.bytes ? `${(u.bytes / 1024 / 1024).toFixed(1)} MB` : "" })
            ] })
          ] }, u.path);
        }) })
      ] }) : /* @__PURE__ */ r("div", { class: "td-result-empty", children: t === "zh" ? "还没有合并结果" : "No merged result yet" })
    ] }),
    c && oe(c.path, "output") && /* @__PURE__ */ r("div", { class: "td-post-preview-overlay", role: "presentation", onClick: () => f(null), children: /* @__PURE__ */ r("section", { role: "dialog", "aria-modal": "true", onClick: (u) => u.stopPropagation(), children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ r("strong", { children: c.title }),
        /* @__PURE__ */ r("button", { "aria-label": t === "zh" ? "关闭预览" : "Close preview", onClick: () => f(null), children: "×" })
      ] }),
      /* @__PURE__ */ r("video", { src: oe(c.path, "output") ?? "", controls: !0, autoPlay: !0, preload: "metadata", playsInline: !0 }),
      /* @__PURE__ */ r("p", { title: c.path, children: se(c.path) })
    ] }) })
  ] });
}
function Ir(e) {
  const t = e.reduce((o, n) => {
    const d = /^shot_(\d+)$/i.exec(n.id.trim());
    return d ? Math.max(o, Number(d[1])) : o;
  }, 0);
  return Math.max(t, e.length) + 1;
}
function jr(e, t = 5) {
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
  const n = Ir(e), d = Array.from({ length: t }, (i, a) => jr(n + a, o));
  return [...e, ...d];
}
const Ot = (e) => `${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`, $e = (e) => JSON.parse(JSON.stringify(e)), Ar = { image: "图片", video: "视频", audio: "音频" };
function gt(e) {
  var o;
  const t = $e(e);
  return t.schemaVersion = 4, (o = t.project.id) != null && o.trim() || (t.project.id = Ot("project")), t.shots = t.shots.map((n) => ({
    ...n,
    latentRelay: n.latentRelay ?? !0,
    secondSampling: n.secondSampling ?? !0
  })), t;
}
function Er(e) {
  return e.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}
function Pr(e) {
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
async function Nr(e, t, o) {
  const n = new URLSearchParams({
    projectName: e.project.name,
    runId: e.project.runId,
    shotId: t.id,
    activeIndex: String(o)
  }), d = await fetch(`/theodore-director/v1/generated-video?${n.toString()}`), i = await d.json();
  if (!d.ok) throw new Error(i.error || `HTTP ${d.status}`);
  return i;
}
async function Rr(e) {
  var i;
  if ((i = navigator.clipboard) != null && i.writeText)
    try {
      await navigator.clipboard.writeText(e);
      return;
    } catch {
    }
  const t = document.activeElement, o = t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement ? { start: t.selectionStart, end: t.selectionEnd, direction: t.selectionDirection } : null, n = document.createElement("textarea");
  n.value = e, n.style.position = "fixed", n.style.opacity = "0", document.body.append(n), n.select();
  const d = document.execCommand("copy");
  if (n.remove(), t instanceof HTMLElement && t.focus({ preventScroll: !0 }), o && (t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement) && t.setSelectionRange(o.start, o.end, o.direction ?? void 0), !d) throw new Error("浏览器拒绝写入剪贴板");
}
function Dr({ initial: e, onSave: t, onClose: o, supportsSecondSampling: n, queueSecondPass: d }) {
  const [i, a] = I(() => gt(e)), [p, b] = I("shots"), [c, f] = I(0), [h, l] = I(() => navigator.language.startsWith("zh") ? "zh" : "en"), [g, w] = I({}), [S, y] = I(!0), [$, k] = I(!1), [O, _] = I(0), [T, R] = I({ found: !1, results: [] }), [W, K] = I(""), [x, A] = I(!1), [D, E] = I(""), [J, X] = I(!0), [V, ee] = I(!1), [de, ae] = I(!1), [Q, te] = I([]), [Z, re] = I("5"), [_e, Re] = I("1"), [ve, De] = I("5");
  fe(() => {
    const s = (m) => {
      m.target instanceof Element && m.target.closest(".td-shot-media-name") && m.preventDefault();
    };
    return document.addEventListener("mousedown", s), () => document.removeEventListener("mousedown", s);
  }, []);
  const L = i.shots[Math.min(c, i.shots.length - 1)], u = ge(() => L ? Lt(i, L) : null, [i, L]), C = L != null && L.enabled ? i.shots.slice(0, c).filter((s) => s.enabled).length : -1, H = i.shots.length > 0 && i.shots.every((s) => s.secondSampling), U = Q.length > 0 && Q.every((s) => s.enabled), P = ge(() => he(T), [T]), M = P.find((s) => s.path === W) ?? P[0], Y = M != null && M.path ? oe(M.path, "output") : null, j = (s) => a((m) => {
    const v = $e(m);
    return s(v), v;
  }), le = (s, m) => j((v) => {
    const z = s + m;
    z < 0 || z >= v.shots.length || ([v.shots[s], v.shots[z]] = [v.shots[z], v.shots[s]], f(z));
  }), Le = (s) => j((m) => {
    m.shots.length <= 1 || (m.shots.splice(s, 1), f((v) => v > s ? v - 1 : v === s ? Math.min(s, m.shots.length - 1) : v));
  }), Ut = () => {
    te($e(i.shots)), ee(!0);
  }, Ht = () => {
    const s = Number(Z);
    if (!Number.isFinite(s) || s <= 0) {
      window.alert(h === "zh" ? "统一时长必须大于 0 秒" : "The shared duration must be greater than 0 seconds.");
      return;
    }
    te((m) => m.map((v) => ({ ...v, durationSeconds: s })));
  }, Bt = () => {
    const s = Number(_e), m = Number(ve);
    if (!Number.isInteger(s) || s < 1 || s > 100) {
      window.alert(h === "zh" ? "新增镜头数量必须是 1–100 的整数" : "The shot count must be an integer from 1 to 100.");
      return;
    }
    if (!Number.isFinite(m) || m <= 0) {
      window.alert(h === "zh" ? "新增镜头时长必须大于 0 秒" : "The new-shot duration must be greater than 0 seconds.");
      return;
    }
    te((v) => ft(v, s, m));
  }, Vt = () => {
    const s = !U;
    te((m) => m.map((v) => ({ ...v, enabled: s })));
  }, qt = () => {
    if (Q.some((s) => !Number.isFinite(s.durationSeconds) || s.durationSeconds <= 0)) {
      window.alert(h === "zh" ? "每个镜头的时长都必须大于 0 秒" : "Every shot duration must be greater than 0 seconds.");
      return;
    }
    j((s) => {
      s.shots = $e(Q);
    }), f((s) => Math.min(s, Q.length - 1)), ee(!1);
  }, Wt = () => {
    const s = URL.createObjectURL(new Blob([JSON.stringify(i, null, 2)], { type: "application/json" })), m = document.createElement("a");
    m.href = s, m.download = `${Er(i.project.name)}.director.json`, m.click(), URL.revokeObjectURL(s);
  }, Jt = () => {
    const s = fr(i);
    if (s.length) {
      window.alert(`计划未通过校验：

${s.join(`
`)}`);
      return;
    }
    t(i);
  };
  return fe(() => {
    let s = !1;
    return L ? (A(!0), Nr(i, L, C).then((m) => {
      if (s) return;
      const v = he(m);
      R(m), K((z) => {
        var N;
        return v.some((G) => G.path === z) ? z : ((N = v[0]) == null ? void 0 : N.path) ?? "";
      });
    }).catch((m) => {
      s || (R({ found: !1, results: [], error: String(m) }), K(""));
    }).finally(() => {
      s || A(!1);
    }), () => {
      s = !0;
    }) : (R({ found: !1, results: [] }), K(""), A(!1), () => {
      s = !0;
    });
  }, [i.project.name, i.project.runId, L == null ? void 0 : L.id, L == null ? void 0 : L.enabled, C, O]), /* @__PURE__ */ r("div", { class: "td-shell", children: [
    /* @__PURE__ */ r("header", { children: [
      /* @__PURE__ */ r("h1", { children: pe(h, "title") }),
      /* @__PURE__ */ r("div", { class: "td-actions", children: [
        /* @__PURE__ */ r("button", { onClick: Wt, children: "导出 / Export" }),
        /* @__PURE__ */ r("label", { class: "td-import", children: [
          "导入 / Import",
          /* @__PURE__ */ r("input", { type: "file", accept: "application/json,.json", onChange: async (s) => {
            var v;
            const m = (v = s.currentTarget.files) == null ? void 0 : v[0];
            if (m)
              try {
                const z = JSON.parse(await m.text());
                if (!z.project || !Array.isArray(z.shots) || !Array.isArray(z.assets)) throw new Error("不是有效的 Theodore Director Plan");
                a(gt(z)), f(0);
              } catch (z) {
                window.alert(String(z));
              }
          } })
        ] }),
        /* @__PURE__ */ r("button", { onClick: () => l(h === "zh" ? "en" : "zh"), children: h === "zh" ? "EN" : "中文" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: Jt, children: pe(h, "save") }),
        /* @__PURE__ */ r("button", { onClick: o, children: pe(h, "close") })
      ] })
    ] }),
    /* @__PURE__ */ r("nav", { children: ["shots", "assets", "settings", "postprocess"].map((s) => /* @__PURE__ */ r("button", { class: p === s ? "active" : "", onClick: () => b(s), children: pe(h, s) })) }),
    /* @__PURE__ */ r("main", { children: [
      p === "shots" && /* @__PURE__ */ r("div", { class: "td-shots", children: [
        /* @__PURE__ */ r("aside", { class: "td-shot-sidebar", children: [
          n && /* @__PURE__ */ r("button", { class: `wide td-bulk-toggle ${H ? "active" : ""}`, onClick: () => j((s) => {
            const m = !s.shots.every((v) => v.secondSampling);
            s.shots.forEach((v) => {
              v.secondSampling = m;
            });
          }), children: h === "zh" ? `全部二次采样：${H ? "开" : "关"}` : `Second sampling for all: ${H ? "ON" : "OFF"}` }),
          /* @__PURE__ */ r("div", { class: "td-shot-list", children: i.shots.map((s, m) => /* @__PURE__ */ r("div", { class: `td-shot-card ${m === c ? "selected" : ""}`, onClick: () => f(m), children: [
            /* @__PURE__ */ r("div", { class: "td-shot-delete-action", children: /* @__PURE__ */ r("button", { class: "td-shot-delete", disabled: i.shots.length <= 1, title: h === "zh" ? i.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头" : i.shots.length <= 1 ? "Keep at least one shot" : "Delete shot", "aria-label": h === "zh" ? "删除镜头" : "Delete shot", onClick: (v) => {
              v.stopPropagation(), Le(m);
            }, children: "×" }) }),
            /* @__PURE__ */ r("strong", { children: [
              m + 1,
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
                v.stopPropagation(), le(m, -1);
              }, children: "↑" }),
              /* @__PURE__ */ r("button", { title: h === "zh" ? "下移镜头" : "Move shot down", onClick: (v) => {
                v.stopPropagation(), le(m, 1);
              }, children: "↓" })
            ] })
          ] }, s.id)) }),
          /* @__PURE__ */ r("button", { class: "wide", onClick: () => j((s) => {
            const m = s.shots.length;
            s.shots = ft(s.shots, 1, 5), f(m);
          }), children: [
            "＋ ",
            pe(h, "addShot")
          ] }),
          /* @__PURE__ */ r("div", { class: "td-shot-batch-entry", children: /* @__PURE__ */ r("button", { class: "wide", onClick: Ut, children: h === "zh" ? "批量处理镜头" : "Batch edit shots" }) })
        ] }),
        L && /* @__PURE__ */ r("section", { class: "td-form", children: [
          /* @__PURE__ */ r("div", { class: "td-shot-meta", children: [
            /* @__PURE__ */ r("label", { children: [
              "ID",
              /* @__PURE__ */ r("input", { value: L.id, onInput: (s) => j((m) => {
                m.shots[c].id = s.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "标题 / Title",
              /* @__PURE__ */ r("input", { value: L.title, onInput: (s) => j((m) => {
                m.shots[c].title = s.currentTarget.value;
              }) })
            ] }),
            /* @__PURE__ */ r("label", { children: [
              "时长 / Duration",
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: L.durationSeconds, onInput: (s) => j((m) => {
                m.shots[c].durationSeconds = Number(s.currentTarget.value);
              }) })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-shot-switches", children: [
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: L.enabled, onChange: (s) => j((m) => {
                  m.shots[c].enabled = s.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: "启用 / Enabled" })
              ] }),
              /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: C === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: L.latentRelay, onChange: (s) => j((m) => {
                  m.shots[c].latentRelay = s.currentTarget.checked;
                }) }),
                /* @__PURE__ */ r("span", { children: [
                  "latent接力 / Relay",
                  C === 0 ? "（首段忽略）" : ""
                ] })
              ] }),
              n && /* @__PURE__ */ r("label", { class: "td-shot-enabled", title: "开启时执行 RTX 超分和第二次 H3 采样，关闭时直接使用第一采画面", children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: L.secondSampling, onChange: (s) => j((m) => {
                  m.shots[c].secondSampling = s.currentTarget.checked;
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
            /* @__PURE__ */ r(Ue, { rows: 10, value: L.prompt, isReferenceValid: (s) => Dt(i, L, s), onInput: (s) => j((m) => {
              m.shots[c].prompt = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ r("span", { class: "td-field-label", children: "负面提示词 / Negative prompt" }),
            /* @__PURE__ */ r("textarea", { rows: 3, value: L.negativePrompt, onInput: (s) => j((m) => {
              m.shots[c].negativePrompt = s.currentTarget.value;
            }) })
          ] }),
          /* @__PURE__ */ r("fieldset", { class: "td-shot-media", children: [
            /* @__PURE__ */ r("legend", { children: "本镜头素材 / Shot media" }),
            /* @__PURE__ */ r("label", { class: "td-shot-media-display-toggle", children: [
              /* @__PURE__ */ r("input", { type: "checkbox", checked: J, onChange: (s) => X(s.currentTarget.checked) }),
              /* @__PURE__ */ r("span", { children: h === "zh" ? "显示别名" : "Show aliases" })
            ] }),
            i.assets.map((s) => {
              const m = !L.disabledAssetIds.includes(s.id), v = J ? s.alias : se(s.path) || s.alias, z = `{{ref:${s.alias}}}`;
              return /* @__PURE__ */ r("div", { class: `td-shot-media-card ${m ? "" : "disabled"}`, children: [
                /* @__PURE__ */ r("div", { class: "td-shot-media-frame", children: [
                  /* @__PURE__ */ r(ut, { asset: s, compact: !0 }),
                  /* @__PURE__ */ r("span", { class: "td-shot-media-kind", children: h === "zh" ? Ar[s.kind] : s.kind }),
                  /* @__PURE__ */ r("label", { class: "td-shot-media-toggle", title: m ? "禁用此素材 / Disable" : "启用此素材 / Enable", children: /* @__PURE__ */ r("input", { type: "checkbox", checked: m, onChange: (N) => j((G) => {
                    const ne = G.shots[c].disabledAssetIds;
                    G.shots[c].disabledAssetIds = N.currentTarget.checked ? ne.filter((me) => me !== s.id) : [.../* @__PURE__ */ new Set([...ne, s.id])];
                  }) }) })
                ] }),
                /* @__PURE__ */ r("button", { class: `td-shot-media-name ${D === s.id ? "copied" : ""}`, title: `${v}
${h === "zh" ? "点击复制" : "Click to copy"} ${z}`, onClick: async () => {
                  try {
                    await Rr(z), E(s.id), window.setTimeout(() => E((N) => N === s.id ? "" : N), 1400);
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
          /* @__PURE__ */ r("details", { open: S, onToggle: (s) => y(s.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: pe(h, "preview") }),
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
              u != null && u.errors.length ? /* @__PURE__ */ r("ul", { class: "errors", children: u.errors.map((s) => /* @__PURE__ */ r("li", { children: s })) }) : /* @__PURE__ */ r("p", { class: "ok", children: pe(h, "noErrors") }),
              /* @__PURE__ */ r("ol", { children: u == null ? void 0 : u.slots.map((s) => /* @__PURE__ */ r("li", { children: [
                /* @__PURE__ */ r("code", { children: s.label }),
                " ← ",
                s.alias
              ] })) }),
              /* @__PURE__ */ r("pre", { children: u == null ? void 0 : u.compiledPrompt })
            ] })
          ] }),
          /* @__PURE__ */ r("details", { open: $, onToggle: (s) => k(s.currentTarget.open), children: [
            /* @__PURE__ */ r("summary", { children: [
              /* @__PURE__ */ r("strong", { children: h === "zh" ? "生成结果" : "Generated result" }),
              /* @__PURE__ */ r("span", { class: `td-result-state ${P.length ? "found" : ""}`, children: x ? h === "zh" ? "查询中" : "Checking" : P.length ? h === "zh" ? `${P.length} 个结果` : `${P.length} results` : h === "zh" ? "空" : "Empty" })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-preview-body td-result-body", children: [
              /* @__PURE__ */ r("div", { class: "td-result-actions", children: /* @__PURE__ */ r("button", { onClick: () => _((s) => s + 1), children: [
                "↻ ",
                h === "zh" ? "刷新结果" : "Refresh"
              ] }) }),
              x ? /* @__PURE__ */ r("div", { class: "td-result-empty", children: h === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…" }) : T.error ? /* @__PURE__ */ r("div", { class: "td-result-empty errors", children: h === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again." }) : M && Y ? /* @__PURE__ */ r("div", { class: "td-generated-results", children: [
                /* @__PURE__ */ r("div", { class: "td-generated-video", children: [
                  /* @__PURE__ */ r("video", { src: Y, controls: !0, preload: "metadata", playsInline: !0 }, M.path),
                  /* @__PURE__ */ r("div", { class: "td-generated-meta", title: M.path, children: [
                    M.path,
                    M.bytes ? ` · ${(M.bytes / 1024 / 1024).toFixed(1)} MB` : ""
                  ] })
                ] }),
                /* @__PURE__ */ r("div", { class: "td-result-list", "aria-label": h === "zh" ? "全部生成结果" : "All generated results", children: P.map((s, m) => {
                  const v = oe(s.path, "output"), z = Mt(s.path, P.length - m), N = s.modifiedAt ? new Date(s.modifiedAt * 1e3).toLocaleString(h === "zh" ? "zh-CN" : "en-US") : "";
                  return /* @__PURE__ */ r("button", { class: `td-result-item ${s.path === M.path ? "selected" : ""}`, onClick: () => K(s.path), children: [
                    v ? /* @__PURE__ */ r(Ae, { src: v, alt: `${h === "zh" ? "结果" : "Result"} ${z}` }) : /* @__PURE__ */ r("div", { class: "td-result-thumb", children: /* @__PURE__ */ r("span", { children: "×" }) }),
                    /* @__PURE__ */ r("span", { class: "td-result-item-copy", children: [
                      /* @__PURE__ */ r("strong", { children: [
                        h === "zh" ? `结果 ${z}` : `Result ${z}`,
                        m === 0 && /* @__PURE__ */ r("em", { children: h === "zh" ? "最新" : "Latest" })
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
          ["image", "video", "audio"].map((s) => /* @__PURE__ */ r("button", { onClick: () => j((m) => m.assets.push(Pr(s))), children: [
            "＋ ",
            s
          ] })),
          /* @__PURE__ */ r("button", { class: "td-asset-batch-entry", onClick: () => ae(!0), children: [
            "⇧ ",
            h === "zh" ? "批量导入素材" : "Batch import assets"
          ] })
        ] }),
        i.assets.map((s, m) => /* @__PURE__ */ r("article", { children: /* @__PURE__ */ r("div", { class: "td-asset-layout", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ r("div", { class: "td-grid", children: [
              /* @__PURE__ */ r("label", { children: [
                "别名 / Alias",
                /* @__PURE__ */ r("input", { value: s.alias, onInput: (v) => j((z) => {
                  z.assets[m].alias = v.currentTarget.value;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "类型 / Kind",
                /* @__PURE__ */ r("select", { value: s.kind, onChange: (v) => j((z) => {
                  z.assets[m].kind = v.currentTarget.value;
                }), children: [
                  /* @__PURE__ */ r("option", { children: "image" }),
                  /* @__PURE__ */ r("option", { children: "video" }),
                  /* @__PURE__ */ r("option", { children: "audio" })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "输入目录相对路径 / Path",
                /* @__PURE__ */ r("input", { value: s.path, onInput: (v) => j((z) => {
                  z.assets[m].path = v.currentTarget.value;
                }) }),
                /* @__PURE__ */ r("span", { class: "td-file-picker", children: [
                  /* @__PURE__ */ r("label", { class: "td-file-button", children: [
                    "选择文件 / Choose file",
                    /* @__PURE__ */ r("input", { type: "file", accept: s.kind === "image" ? "image/*" : s.kind === "video" ? "video/*" : "audio/*", onChange: async (v) => {
                      var G;
                      const z = v.currentTarget, N = (G = z.files) == null ? void 0 : G[0];
                      if (N) {
                        w((ne) => ({ ...ne, [s.id]: N.name }));
                        try {
                          const ne = await bt(i.project.name, s.kind, N);
                          j((me) => {
                            const Xe = me.assets.find((Kt) => Kt.id === s.id);
                            Xe && (Xe.path = ne);
                          });
                        } catch (ne) {
                          window.alert(String(ne));
                        } finally {
                          w((ne) => {
                            const me = { ...ne };
                            return delete me[s.id], me;
                          }), z.value = "";
                        }
                      }
                    } })
                  ] }),
                  /* @__PURE__ */ r("span", { class: "td-file-name", title: g[s.id] || s.path, children: g[s.id] ? `${h === "zh" ? "上传中" : "Uploading"}: ${g[s.id]}` : se(s.path) || (h === "zh" ? "未选择文件" : "No file selected") })
                ] })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "时长 / Duration",
                /* @__PURE__ */ r("input", { type: "number", min: "0", step: "0.1", value: s.durationSeconds ?? "", onInput: (v) => j((z) => {
                  z.assets[m].durationSeconds = v.currentTarget.value ? Number(v.currentTarget.value) : null;
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "固定顺序 / Fixed order",
                /* @__PURE__ */ r("input", { type: "number", value: s.fixedOrder, onInput: (v) => j((z) => {
                  z.assets[m].fixedOrder = Number(v.currentTarget.value);
                }) })
              ] }),
              /* @__PURE__ */ r("label", { children: [
                "限定分镜 ID（逗号分隔）",
                /* @__PURE__ */ r("input", { value: s.shotIds.join(", "), onInput: (v) => j((z) => {
                  z.assets[m].shotIds = v.currentTarget.value.split(",").map((N) => N.trim()).filter(Boolean);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { class: "td-flags", children: [
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: s.enabled, onChange: (v) => j((z) => {
                  z.assets[m].enabled = v.currentTarget.checked;
                }) }),
                "启用"
              ] }),
              /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: s.fixed, onChange: (v) => j((z) => {
                  z.assets[m].fixed = v.currentTarget.checked;
                }) }),
                "固定引用"
              ] }),
              s.kind === "video" && /* @__PURE__ */ r("label", { children: [
                /* @__PURE__ */ r("input", { type: "checkbox", checked: s.includeVideoAudio, onChange: (v) => j((z) => {
                  z.assets[m].includeVideoAudio = v.currentTarget.checked;
                }) }),
                "启用视频伴音"
              ] }),
              /* @__PURE__ */ r("button", { class: "danger", onClick: () => j((v) => {
                v.assets.splice(m, 1);
              }), children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ r(ut, { asset: s })
        ] }) }, s.id))
      ] }),
      p === "settings" && /* @__PURE__ */ r("section", { class: "td-form settings", children: [
        /* @__PURE__ */ r("label", { children: [
          "Project name",
          /* @__PURE__ */ r("input", { value: i.project.name, onInput: (s) => j((m) => {
            m.project.name = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Run ID",
          /* @__PURE__ */ r("input", { value: i.project.runId, onInput: (s) => j((m) => {
            m.project.runId = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "FPS",
          /* @__PURE__ */ r("input", { type: "number", value: i.defaults.fps, onInput: (s) => j((m) => {
            m.defaults.fps = Number(s.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "Base seed",
          /* @__PURE__ */ r("input", { type: "number", value: i.defaults.baseSeed, onInput: (s) => j((m) => {
            m.defaults.baseSeed = Number(s.currentTarget.value);
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词前缀",
          /* @__PURE__ */ r(Ue, { value: i.promptPrefix, isReferenceValid: (s) => ht(i, s), onInput: (s) => j((m) => {
            m.promptPrefix = s.currentTarget.value;
          }) })
        ] }),
        /* @__PURE__ */ r("label", { children: [
          "提示词后缀",
          /* @__PURE__ */ r(Ue, { value: i.promptSuffix, isReferenceValid: (s) => ht(i, s), onInput: (s) => j((m) => {
            m.promptSuffix = s.currentTarget.value;
          }) })
        ] })
      ] }),
      p === "postprocess" && /* @__PURE__ */ r(Cr, { plan: i, language: h, queueSecondPass: d })
    ] }),
    V && /* @__PURE__ */ r("div", { class: "td-batch-overlay", role: "presentation", children: /* @__PURE__ */ r("section", { class: "td-batch-panel", role: "dialog", "aria-modal": "true", "aria-label": h === "zh" ? "批量处理镜头" : "Batch edit shots", children: [
      /* @__PURE__ */ r("header", { class: "td-batch-header", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("h2", { children: h === "zh" ? "批量处理镜头" : "Batch edit shots" }),
          /* @__PURE__ */ r("p", { children: h === "zh" ? `当前共 ${Q.length} 个镜头` : `${Q.length} shots` })
        ] }),
        /* @__PURE__ */ r("button", { "aria-label": h === "zh" ? "关闭" : "Close", onClick: () => ee(!1), children: "×" })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-tools", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            h === "zh" ? "所有镜头时长" : "Duration for all shots",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: Z, onInput: (s) => re(s.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: h === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: Ht, children: h === "zh" ? "一键设置所有时长" : "Set all durations" })
        ] }),
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ r("label", { children: [
            h === "zh" ? "新增镜头数量" : "New shot count",
            /* @__PURE__ */ r("input", { type: "number", min: "1", max: "100", step: "1", value: _e, onInput: (s) => Re(s.currentTarget.value) })
          ] }),
          /* @__PURE__ */ r("label", { children: [
            h === "zh" ? "每个镜头时长" : "Duration per shot",
            /* @__PURE__ */ r("span", { children: [
              /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: ve, onInput: (s) => De(s.currentTarget.value) }),
              /* @__PURE__ */ r("em", { children: h === "zh" ? "秒" : "sec" })
            ] })
          ] }),
          /* @__PURE__ */ r("button", { onClick: Bt, children: h === "zh" ? "批量新增镜头" : "Add shots" })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { class: "td-batch-global-actions", children: [
        /* @__PURE__ */ r("span", { children: h === "zh" ? `已启用 ${Q.filter((s) => s.enabled).length}/${Q.length} 个镜头` : `${Q.filter((s) => s.enabled).length}/${Q.length} shots enabled` }),
        /* @__PURE__ */ r("button", { class: U ? "active" : "", onClick: Vt, children: U ? h === "zh" ? "全部禁用" : "Disable all" : h === "zh" ? "全部启用" : "Enable all" })
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
        Q.map((s, m) => /* @__PURE__ */ r("div", { class: "td-batch-row", children: [
          /* @__PURE__ */ r("span", { children: m + 1 }),
          /* @__PURE__ */ r("input", { value: s.title, "aria-label": `${h === "zh" ? "镜头名" : "Shot name"} ${m + 1}`, onInput: (v) => te((z) => z.map((N, G) => G === m ? { ...N, title: v.currentTarget.value } : N)) }),
          /* @__PURE__ */ r("label", { class: "td-batch-enabled", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: s.enabled, onChange: (v) => te((z) => z.map((N, G) => G === m ? { ...N, enabled: v.currentTarget.checked } : N)) }),
            /* @__PURE__ */ r("span", { children: s.enabled ? h === "zh" ? "开" : "ON" : h === "zh" ? "关" : "OFF" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-duration", children: [
            /* @__PURE__ */ r("input", { type: "number", min: "0.1", step: "0.1", value: s.durationSeconds, onInput: (v) => te((z) => z.map((N, G) => G === m ? { ...N, durationSeconds: Number(v.currentTarget.value) } : N)) }),
            /* @__PURE__ */ r("span", { children: h === "zh" ? "秒" : "sec" })
          ] }),
          /* @__PURE__ */ r("label", { class: "td-batch-relay", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: s.latentRelay, onChange: (v) => te((z) => z.map((N, G) => G === m ? { ...N, latentRelay: v.currentTarget.checked } : N)) }),
            /* @__PURE__ */ r("span", { children: s.latentRelay ? h === "zh" ? "开" : "ON" : h === "zh" ? "关" : "OFF" })
          ] })
        ] }, s.id))
      ] }),
      /* @__PURE__ */ r("footer", { children: [
        /* @__PURE__ */ r("button", { onClick: () => ee(!1), children: h === "zh" ? "取消" : "Cancel" }),
        /* @__PURE__ */ r("button", { class: "primary", onClick: qt, children: h === "zh" ? "应用更改" : "Apply changes" })
      ] })
    ] }) }),
    de && /* @__PURE__ */ r(mr, { language: h, assets: i.assets, projectName: i.project.name, uploadFile: bt, onImported: (s) => j((m) => {
      m.assets.push(...s);
    }), onClose: () => ae(!1) })
  ] });
}
function Lr(e, t, o = !1, n) {
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
  document.addEventListener("keydown", a), rt(/* @__PURE__ */ r(Dr, { initial: e, onSave: (b) => {
    t(b), p();
  }, onClose: p, supportsSecondSampling: o, queueSecondPass: n }), i), i.focus();
}
const Mr = ":root{--td-bg:#11151b;--td-panel:#1a2029;--td-line:#354052;--td-text:#edf2f8;--td-muted:#9daabd;--td-accent:#74c7a5;--td-danger:#ff7d7d}.td-shot-media{position:relative}.td-form label.td-shot-media-display-toggle{position:absolute;top:-17px;right:10px;z-index:3;display:flex;flex-direction:row;align-items:center;gap:6px;padding:6px 9px;border:1px solid var(--td-line);border-radius:6px;background:var(--td-panel);color:var(--td-text);cursor:pointer;white-space:nowrap}.td-form label.td-shot-media-display-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-display-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;display:block;overflow:hidden;pointer-events:auto;background:#04070bf5;color:var(--td-text);font:14px/1.45 Inter,Segoe UI,sans-serif;isolation:isolate}.td-shell{height:100vh;display:grid;grid-template-rows:auto auto 1fr;background:var(--td-bg)}.td-shell header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid var(--td-line)}.td-shell h1,.td-shell h2{margin:0;font-weight:650}.td-shell h1{font-size:20px}.td-shell h2{font-size:15px;margin-bottom:10px}.td-shell button,.td-shell input,.td-shell textarea,.td-shell select{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;box-sizing:border-box}.td-import{color:var(--td-text);background:#222a35;border:1px solid var(--td-line);border-radius:6px;padding:7px 9px;cursor:pointer}.td-import input{display:none}.td-shell button{cursor:pointer}.td-shell button:hover,.td-shell button.active{border-color:var(--td-accent)}.td-shell button.primary{background:var(--td-accent);color:#0a1913}.td-shell button.danger{color:var(--td-danger)}.td-actions,.td-toolbar,.td-flags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.td-shell nav{display:flex;gap:8px;padding:9px 20px;border-bottom:1px solid var(--td-line)}.td-shell main{overflow:auto;padding:16px 20px}.td-shots{display:grid;grid-template-columns:230px minmax(360px,1fr) minmax(300px,.8fr);gap:16px;height:100%}.td-shots>aside,.td-form,.td-assets article{background:var(--td-panel);border:1px solid var(--td-line);border-radius:9px;padding:12px;overflow:auto}.td-shot-card{padding:9px;border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;column-gap:8px;row-gap:4px}.td-shot-card.selected{border-color:var(--td-accent);background:#202b31}.td-shot-card>strong,.td-shot-card>span{grid-column:2}.td-shot-card span{color:var(--td-muted);font-size:12px}.td-shot-delete-action{grid-column:1;grid-row:1/3;display:flex;align-items:center}.td-shot-move-actions{grid-column:3;grid-row:1/3;display:flex;align-items:start;gap:3px}.td-shot-card button{padding:3px 6px}.td-shot-card .td-shot-delete{color:var(--td-danger);font-weight:700}.td-shot-card .td-shot-delete:disabled{opacity:.35;cursor:not-allowed}.wide{width:100%}.td-form{display:flex;flex-direction:column;gap:10px}.td-form label,.td-grid label{display:flex;flex-direction:column;gap:4px;color:var(--td-muted)}.td-form label.check{flex-direction:row}.td-form input,.td-form textarea,.td-grid input,.td-grid select{width:100%}.td-form label.check input{width:auto}.td-form textarea{resize:vertical}.td-field-label{display:block;white-space:nowrap}.td-shot-meta{display:grid;grid-template-columns:minmax(100px,.75fr) minmax(120px,1.5fr) 105px 110px;gap:10px;align-items:end}.td-shot-meta>label{white-space:nowrap}.td-shot-enabled{height:35px;box-sizing:border-box;display:flex!important;flex-direction:row!important;align-items:center;justify-content:center;gap:7px!important;padding:0 8px;border:1px solid var(--td-line);border-radius:6px;background:#222a35;color:var(--td-text)!important;white-space:nowrap;cursor:pointer}.td-shot-enabled:hover{border-color:var(--td-accent)}.td-form .td-shot-enabled input{width:17px;height:17px;margin:0;cursor:pointer}.td-preview pre{white-space:pre-wrap;background:#0d1117;padding:10px;border-radius:6px}.td-preview code{color:#9ee6c7}.td-counters{color:var(--td-muted);margin-bottom:10px}.errors{color:var(--td-danger)}.ok{color:var(--td-accent)}.td-highlight-textarea{position:relative;display:block;width:100%;min-width:0}.td-highlight-backdrop,.td-form textarea.td-highlight-input{box-sizing:border-box;width:100%;margin:0;padding:7px 9px;font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,monospace;font-size:inherit;line-height:1.45;letter-spacing:normal;-moz-tab-size:8;tab-size:8;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.td-highlight-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border:1px solid transparent;border-radius:6px;background:#222a35;color:var(--td-text);pointer-events:none}.td-form textarea.td-highlight-input{position:relative;z-index:1;display:block;background:transparent;color:transparent;caret-color:var(--td-text);-webkit-text-fill-color:transparent}.td-highlight-input::selection{background:#5898d46b}.td-highlight-backdrop mark{padding:0;border-radius:3px;color:inherit}.td-highlight-backdrop mark.valid{background:#1d6b50;color:#bfffe6}.td-highlight-backdrop mark.invalid{background:#7a2931;color:#ffd1d5;text-decoration:underline;text-decoration-color:#ff9aa4;text-underline-offset:2px}.td-preview{display:flex;flex-direction:column;gap:10px}.td-preview details{flex:none;border:1px solid var(--td-line);border-radius:8px;overflow:hidden;background:#151b23}.td-preview summary{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;padding:11px 12px;cursor:pointer;background:#1d2530;list-style-position:inside}.td-preview summary:hover{background:#222c38}.td-preview details[open]>summary{border-bottom:1px solid var(--td-line)}.td-preview summary strong{color:var(--td-text);font-size:15px}.td-summary-counts{color:var(--td-muted);font-size:11px;white-space:nowrap}.td-preview-body{padding:12px;max-height:calc(100vh - 310px);overflow:auto}.td-preview-body>p:first-child{margin-top:0}.td-preview-body>pre:last-child{margin-bottom:0}.td-result-state{padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted);font-size:11px}.td-result-state.found{background:#183a2e;color:var(--td-accent)}.td-result-actions{display:flex;justify-content:flex-end;margin-bottom:9px}.td-result-actions button{padding:5px 8px}.td-result-empty{min-height:130px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--td-line);border-radius:7px;color:var(--td-muted);text-align:center;padding:12px;box-sizing:border-box}.td-generated-video video{display:block;width:100%;max-height:420px;background:#080b0f;border-radius:7px}.td-generated-meta{margin-top:7px;color:var(--td-muted);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-generated-results{display:flex;flex-direction:column;gap:12px}.td-result-list{display:flex;flex-direction:column;gap:7px;max-height:280px;overflow:auto;padding-right:3px}.td-shell button.td-result-item{display:grid;grid-template-columns:112px minmax(0,1fr);gap:10px;align-items:center;width:100%;padding:6px;text-align:left;background:#151b23}.td-shell button.td-result-item.selected{border-color:var(--td-accent);background:#1c2a2a}.td-result-thumb{width:112px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:5px;background:#090c10;color:var(--td-muted)}.td-result-thumb img,.td-result-thumb video{display:block;width:100%;height:100%;object-fit:contain}.td-result-item-copy{display:flex;min-width:0;flex-direction:column;gap:3px}.td-result-item-copy>strong{display:flex;align-items:center;gap:7px;color:var(--td-text)}.td-result-item-copy>strong em{padding:1px 6px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-result-item-copy>span,.td-result-item-copy>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-result-item-copy>small{font-size:10px}.td-assets{display:flex;flex-direction:column;gap:10px}.td-assets article{overflow:visible}.td-asset-layout{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:14px;align-items:start}.td-grid{display:grid;grid-template-columns:1fr 130px 2fr 120px;gap:10px;margin-bottom:10px}.td-form fieldset{border:1px solid var(--td-line);border-radius:6px}.settings{max-width:780px;margin:auto}.td-asset-batch-entry{margin-left:auto;border-color:#527061!important;background:#1b2c28!important;color:var(--td-accent)!important}.td-file-picker{display:flex;align-items:center;min-width:0;margin-top:2px}.td-file-button{display:block!important;flex:none;color:var(--td-text)!important;background:#3b4655;border:1px solid var(--td-line);border-radius:5px 0 0 5px;padding:6px 9px;cursor:pointer}.td-file-button:hover{border-color:var(--td-accent)}.td-file-button input{display:none}.td-file-name{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-text);background:#181e26;border:1px solid var(--td-line);border-left:0;border-radius:0 5px 5px 0;padding:6px 9px}.td-media-preview{min-height:150px;background:#0d1117;border:1px solid var(--td-line);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--td-muted);text-align:center}.td-media-preview img,.td-media-preview video{display:block;width:100%;height:220px;object-fit:contain;background:#090c10}.td-media-preview audio{display:block;width:calc(100% - 16px)}.td-media-preview.empty,.td-media-preview.unavailable{padding:12px;box-sizing:border-box}.td-shot-media{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:10px}.td-shot-media legend{padding:0 5px}.td-shot-media-card{min-width:0;border:1px solid var(--td-line);border-radius:7px;overflow:hidden;background:#151b23;transition:opacity .15s,border-color .15s}.td-shot-media-card:hover{border-color:var(--td-accent)}.td-shot-media-card.disabled{opacity:.48}.td-shot-media-frame{position:relative}.td-shot-media-card .td-media-preview.compact{min-height:96px;border:0;border-bottom:1px solid var(--td-line);border-radius:0}.td-shot-media-card .td-media-preview.compact img,.td-shot-media-card .td-media-preview.compact video{height:112px}.td-shot-media-card .td-media-preview.compact audio{width:calc(100% - 10px)}.td-shot-media-kind{position:absolute;top:7px;left:7px;z-index:2;padding:2px 7px;border-radius:999px;background:#090d12d9;border:1px solid #ffffff2b;color:var(--td-text);font-size:12px;line-height:1.5;pointer-events:none}.td-form label.td-shot-media-toggle{position:absolute;top:7px;right:7px;z-index:2;display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-radius:6px;background:#090d12d9;border:1px solid #ffffff38;cursor:pointer}.td-form label.td-shot-media-toggle:hover{border-color:var(--td-accent)}.td-form label.td-shot-media-toggle input{width:17px;height:17px;margin:0;cursor:pointer}.td-shell button.td-shot-media-name{position:relative;display:block;width:100%;border:0;border-radius:0;padding:8px 10px;color:var(--td-text);background:#151b23;font-weight:600;overflow:hidden;white-space:nowrap;text-align:left}.td-shot-media-name>span{display:block;overflow:hidden;text-overflow:ellipsis}.td-shell button.td-shot-media-name:hover,.td-shell button.td-shot-media-name:focus-visible{background:#202a35;color:var(--td-accent)}.td-shell button.td-shot-media-name.copied{background:#17372d;color:var(--td-accent)}.td-shot-media-name em{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:2px 6px;border-radius:999px;background:#0d1c17;color:var(--td-accent);font-size:11px;font-style:normal;box-shadow:0 0 0 1px #74c7a566}.td-shot-meta{grid-template-columns:minmax(100px,.75fr) minmax(140px,1.5fr) 105px}.td-shot-switches{grid-column:1/-1;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.td-shot-switches .td-shot-enabled{min-width:135px}.td-bulk-toggle{margin-bottom:9px}.td-bulk-toggle.active{background:#17372d;color:var(--td-accent)}.td-shot-sidebar{display:flex;flex-direction:column}.td-shot-list{flex:none}.td-shot-batch-entry{display:flex;align-items:flex-end;flex:1;min-height:90px;padding-top:14px}.td-shot-batch-entry button{border-color:#527061;background:#1b2c28;color:var(--td-accent)}.td-batch-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:20;display:flex;align-items:center;justify-content:center;padding:28px;background:#05080dbd;box-sizing:border-box}.td-batch-panel{display:flex;flex-direction:column;width:min(1040px,100%);max-height:min(820px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-batch-header h2{font-size:18px;margin:0}.td-batch-header p{margin:3px 0 0;color:var(--td-muted)}.td-batch-header>button{font-size:20px;line-height:1;padding:5px 9px}.td-batch-tools{display:grid;grid-template-columns:1fr 1.4fr;gap:12px;padding:14px 18px;border-bottom:1px solid var(--td-line);background:#151b23}.td-batch-tools>div{display:flex;align-items:end;gap:8px;padding:10px;border:1px solid var(--td-line);border-radius:7px}.td-batch-tools label{display:flex;flex:1;flex-direction:column;gap:4px;color:var(--td-muted);white-space:nowrap}.td-batch-tools label>span,.td-batch-duration{display:flex;align-items:center;gap:6px}.td-batch-tools input{width:100%}.td-batch-tools em{color:var(--td-muted);font-style:normal}.td-batch-tools button{white-space:nowrap}.td-batch-global-actions{display:flex;align-items:center;justify-content:flex-end;gap:12px;padding:9px 22px;border-bottom:1px solid var(--td-line);background:#171e27;color:var(--td-muted)}.td-batch-global-actions button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-batch-table{overflow:auto;padding:0 18px}.td-batch-row{display:grid;grid-template-columns:42px minmax(180px,1fr) 100px 150px 120px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-batch-table-head{position:sticky;top:0;z-index:1;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-batch-duration input{min-width:0;width:100%}.td-batch-duration>span{color:var(--td-muted)}.td-batch-enabled,.td-batch-relay{display:flex;align-items:center;gap:7px;justify-content:flex-start;color:var(--td-text)}.td-batch-enabled input,.td-batch-relay input{width:17px;height:17px;margin:0}.td-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-batch-panel{display:flex;flex-direction:column;width:min(1420px,100%);max-height:min(880px,calc(100vh - 56px));overflow:hidden;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 70px #000b}.td-asset-batch-panel>.td-batch-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--td-line)}.td-asset-batch-panel>footer{display:flex;justify-content:flex-end;gap:8px;padding:13px 18px;border-top:1px solid var(--td-line)}.td-asset-dropzone{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-height:92px;margin:14px 18px 10px;border:1px dashed #597084;border-radius:9px;background:#151b23;color:var(--td-text);cursor:pointer;transition:border-color .15s,background .15s}.td-asset-dropzone:hover,.td-asset-dropzone.dragging{border-color:var(--td-accent);background:#1b2c28}.td-asset-dropzone span{color:var(--td-muted);font-size:12px}.td-asset-dropzone input{display:none}.td-asset-batch-warning{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 18px 10px;padding:8px 10px;border:1px solid #836a32;border-radius:7px;background:#3a301c;color:#f4d991}.td-asset-batch-warning span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-warning button{padding:2px 7px}.td-asset-batch-summary{display:flex;align-items:center;justify-content:space-between;padding:8px 18px;border-top:1px solid var(--td-line);border-bottom:1px solid var(--td-line);background:#151b23;color:var(--td-muted)}.td-asset-batch-summary button{padding:5px 8px}.td-asset-batch-list{overflow:auto;padding:0 18px 10px}.td-asset-batch-row{display:grid;grid-template-columns:minmax(210px,1.4fr) minmax(150px,1fr) 115px 135px 105px 72px;gap:10px;align-items:center;padding:8px 4px;border-bottom:1px solid #2a3442}.td-asset-batch-head{position:sticky;top:0;z-index:2;padding-top:10px;background:var(--td-panel);color:var(--td-muted);font-weight:600}.td-asset-batch-row.invalid{background:#3b202560}.td-asset-batch-row.imported{background:#17372d55}.td-asset-batch-file{display:flex;min-width:0;flex-direction:column;gap:2px}.td-asset-batch-file strong,.td-asset-batch-file small,.td-asset-batch-file em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.td-asset-batch-file small{color:var(--td-muted);font-weight:400}.td-asset-batch-file em{color:var(--td-danger);font-size:11px;font-style:normal}.td-asset-batch-duration,.td-asset-batch-audio{display:flex;align-items:center;gap:6px;color:var(--td-muted)}.td-asset-batch-duration input{min-width:0;width:100%}.td-asset-batch-audio input{width:17px;height:17px;margin:0}.td-asset-batch-empty{display:flex;min-height:130px;align-items:center;justify-content:center;color:var(--td-muted)}.td-asset-batch-panel button:disabled,.td-asset-batch-panel input:disabled,.td-asset-batch-panel select:disabled{opacity:.55;cursor:not-allowed}.td-postprocess{display:flex;flex-direction:column;gap:14px;max-width:1500px;margin:0 auto}.td-post-header,.td-post-summary,.td-post-merged{border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px}.td-post-header h2,.td-post-merged h2{margin:0;font-size:17px}.td-post-header p{margin:4px 0 0;color:var(--td-muted)}.td-post-actions{display:flex;gap:8px;flex:none}.td-post-summary{display:flex;align-items:center;gap:18px;padding:10px 14px;color:var(--td-muted)}.td-post-summary>button{margin-left:auto}.td-post-summary button:disabled{opacity:.5;cursor:not-allowed}.td-post-range{display:flex;align-items:center;gap:6px;margin-left:auto}.td-post-range input{width:64px;padding:6px 7px;text-align:center}.td-post-range button{white-space:nowrap}.td-post-summary>.td-post-range+button{margin-left:0}.td-post-error,.td-post-warning{padding:10px 13px;border-radius:7px}.td-post-error{border:1px solid #8b4149;background:#442228;color:#ffd1d5;white-space:pre-wrap}.td-post-warning{border:1px solid #836a32;background:#3a301c;color:#f4d991}.td-post-shot-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(390px,1fr));gap:12px;align-items:start}.td-post-shot{min-width:0;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel);overflow:hidden}.td-post-shot.selected{border-color:#527e6c}.td-post-shot.disabled{opacity:.72}.td-post-shot>header{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid var(--td-line);background:#1d2530}.td-post-shot>header>label{display:flex;align-items:center;gap:9px;min-width:0;cursor:pointer}.td-post-shot>header input{width:18px;height:18px;margin:0;flex:none}.td-post-shot>header label>span{display:flex;min-width:0;gap:8px;align-items:baseline}.td-post-shot>header strong{color:var(--td-text)}.td-post-shot>header em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted);font-style:normal}.td-post-shot>header>span{flex:none;padding:2px 7px;border-radius:999px;background:#29313d;color:var(--td-muted)}.td-post-shot-disabled-note{padding:7px 10px;border-bottom:1px solid var(--td-line);background:#332b1d;color:#e5c77d;font-size:11px}.td-post-shot-empty{min-height:96px;display:flex;align-items:center;justify-content:center;padding:12px;color:var(--td-muted);text-align:center}.td-post-result-list{display:flex;flex-direction:column;gap:7px;max-height:360px;overflow:auto;padding:9px}.td-post-result{display:grid;grid-template-columns:minmax(0,1fr) 35px;gap:6px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:5px}.td-post-result.selected{border-color:var(--td-accent);background:#1c2a2a}.td-shell button.td-post-result-choice{display:grid;grid-template-columns:112px minmax(0,1fr);gap:9px;align-items:center;min-width:0;padding:0;border:0;background:transparent;text-align:left}.td-post-result-choice>span{display:flex;min-width:0;flex-direction:column;gap:3px}.td-post-result-choice>span>strong{display:flex;align-items:center;gap:6px}.td-post-result-choice>span>strong em{padding:1px 5px;border-radius:999px;background:#183a2e;color:var(--td-accent);font-size:10px;font-style:normal}.td-post-result-choice>span>span,.td-post-result-choice>span>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}.td-post-result-choice>span>small{font-size:10px}.td-post-result-play{width:35px;height:35px;padding:0!important}.td-post-result-play:disabled{opacity:.35;cursor:not-allowed}.td-post-merged{padding:12px}.td-post-merged>header>div{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px}.td-post-merged .td-generated-results{display:grid;grid-template-columns:minmax(360px,1.6fr) minmax(300px,1fr);align-items:start}.td-post-merged .td-result-list{max-height:420px}.td-post-preview-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:30;display:flex;align-items:center;justify-content:center;padding:26px;background:#030609d6}.td-post-preview-overlay>section{width:min(980px,100%);max-height:calc(100vh - 52px);overflow:auto;border:1px solid var(--td-line);border-radius:10px;background:var(--td-panel);box-shadow:0 20px 80px #000c}.td-post-preview-overlay header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--td-line)}.td-post-preview-overlay header button{font-size:20px;line-height:1;padding:5px 9px}.td-post-preview-overlay video{display:block;width:100%;max-height:calc(100vh - 170px);background:#070a0e}.td-post-preview-overlay p{margin:0;padding:9px 12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--td-muted)}@media(max-width:1200px){.td-asset-layout{grid-template-columns:1fr}.td-asset-layout>.td-media-preview{min-height:120px}.td-asset-layout>.td-media-preview img,.td-asset-layout>.td-media-preview video{height:200px}.td-shot-meta{grid-template-columns:1fr 1.4fr 110px}.td-shot-enabled{grid-column:1/-1;justify-self:start}.td-post-summary{flex-wrap:wrap}.td-post-range{margin-left:0}.td-post-summary>button{margin-left:auto}}@media(max-width:1000px){.td-shots{grid-template-columns:190px 1fr}.td-preview{grid-column:1/-1}.td-grid{grid-template-columns:1fr 1fr}}@media(max-width:900px){.td-post-shot-list,.td-post-merged .td-generated-results{grid-template-columns:1fr}.td-post-header{align-items:flex-start;flex-direction:column}.td-post-actions{width:100%}.td-post-actions button{flex:1}.td-post-summary{align-items:stretch;flex-direction:column;gap:7px}.td-post-range{margin:3px 0;flex-wrap:wrap}.td-post-summary>button{margin:4px 0 0}.td-post-result-list{max-height:none}}@media(max-width:720px){.td-shot-meta{grid-template-columns:1fr 1fr}.td-shot-enabled{grid-column:auto;justify-self:stretch}}@media(max-width:1000px){.td-asset-batch-list{min-width:900px}.td-asset-batch-panel{overflow:auto}.td-asset-batch-panel>.td-batch-header,.td-asset-dropzone,.td-asset-batch-warning,.td-asset-batch-summary,.td-asset-batch-panel>footer{min-width:864px}}@media(max-width:720px){.td-asset-batch-entry{margin-left:0}}.td-postprocess-shell{display:flex;flex-direction:column;gap:12px;max-width:1500px;margin:0 auto}.td-postprocess-shell>.td-postprocess{max-width:none;width:100%;margin:0}.td-post-mode-tabs{display:flex;gap:7px;padding:5px;border:1px solid var(--td-line);border-radius:9px;background:var(--td-panel)}.td-post-mode-tabs button{min-width:130px}.td-post-mode-tabs button.active{border-color:#527e6c;background:#1b302a;color:var(--td-accent)}.td-second-pass-panel .td-post-shot>header>span:first-child{display:flex;min-width:0;gap:8px;align-items:baseline;padding:0;background:transparent}.td-second-pass-result{display:grid;grid-template-columns:minmax(0,1fr) 118px;gap:8px;align-items:center;border:1px solid var(--td-line);border-radius:7px;background:#151b23;padding:6px}.td-second-pass-result:has(.td-second-pass-run:disabled){border-color:#34404d}.td-second-pass-run{width:118px;min-height:38px;padding:6px!important}.td-second-pass-run:disabled{opacity:.62;cursor:not-allowed}.td-second-pass-error{grid-column:1/-1;padding:6px 8px;border-radius:5px;background:#442228;color:#ffd1d5;font-size:11px;white-space:pre-wrap}@media(max-width:620px){.td-post-mode-tabs{flex-direction:column}.td-post-mode-tabs button{width:100%}.td-second-pass-result{grid-template-columns:1fr}.td-second-pass-run{width:100%}}", xt = "theodore-director-styles";
function Fr() {
  if (document.getElementById(xt)) return;
  const e = document.createElement("style");
  e.id = xt, e.textContent = Mr, document.head.append(e);
}
Fr();
const Or = "/scripts/app.js", Ur = "/scripts/api.js";
Promise.all([
  import(
    /* @vite-ignore */
    Or
  ),
  import(
    /* @vite-ignore */
    Ur
  )
]).then(([{ app: e }, { api: t }]) => {
  const o = async (n) => {
    var w, S;
    const d = ((w = e.graph) == null ? void 0 : w._nodes) ?? [], i = d.find((y) => y.type === "TheodoreDirector_PostprocessSecondPassSource"), a = d.find((y) => y.type === "TheodoreDirector_SaveSecondPass"), p = (S = i == null ? void 0 : i.widgets) == null ? void 0 : S.find((y) => y.name === "request_json");
    if (!i || !a || !p || a.id === void 0)
      throw new Error("当前工作流缺少后处理单独二采支流，请重新载入仓库中的 V7 导播台示例工作流");
    const b = p.value, c = i.mode, f = a.mode;
    let h;
    try {
      p.value = JSON.stringify(n), i.mode = 0, a.mode = 0, h = await e.graphToPrompt(e.rootGraph);
    } finally {
      p.value = b, i.mode = c, a.mode = f;
    }
    const g = (await t.queuePrompt(0, h, { partialExecutionTargets: [String(a.id)] })).prompt_id;
    if (!g) throw new Error("ComfyUI 没有返回二采任务 ID");
    await new Promise((y, $) => {
      const k = () => {
        t.removeEventListener("execution_success", _), t.removeEventListener("execution_error", T), t.removeEventListener("execution_interrupted", T);
      }, O = (R) => {
        var W;
        return String(((W = R.detail) == null ? void 0 : W.prompt_id) ?? "");
      }, _ = (R) => {
        O(R) === g && (k(), y());
      }, T = (R) => {
        if (O(R) !== g) return;
        const W = R.detail ?? {};
        k(), $(new Error(String(W.exception_message ?? W.error ?? "单独二采任务执行失败")));
      };
      t.addEventListener("execution_success", _), t.addEventListener("execution_error", T), t.addEventListener("execution_interrupted", T);
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
          const p = (b = this.widgets) == null ? void 0 : b.find((f) => f.name === "request_json");
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
            const f = JSON.parse(String(a.value)), h = ((c = e.graph) == null ? void 0 : c._nodes) ?? [], l = h.some((g) => g.type === "TheodoreDirector_PostprocessSecondPassSource") && h.some((g) => g.type === "TheodoreDirector_SaveSecondPass");
            Lr(f, (g) => {
              var w, S;
              a.value = JSON.stringify(g, null, 2), this.setDirtyCanvas(!0, !0), (S = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || S.call(w, !0, !0);
            }, !0, l ? o : void 0);
          } catch (f) {
            window.alert(`Theodore Director: ${f instanceof Error ? f.message : String(f)}`);
          }
        }), this.size = [Math.max(((b = this.size) == null ? void 0 : b[0]) ?? 300, 360), 110]);
      };
    }
  });
});
