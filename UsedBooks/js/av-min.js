! function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AV = t() : e.AV = t()
}(this, function() {
	return function(e) {
		function t(r) {
			if(n[r]) return n[r].exports;
			var i = n[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
		}
		var n = {};
		return t.m = e, t.c = n, t.i = function(e) {
			return e
		}, t.d = function(e, n, r) {
			t.o(e, n) || Object.defineProperty(e, n, {
				configurable: !1,
				enumerable: !0,
				get: r
			})
		}, t.n = function(e) {
			var n = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return t.d(n, "a", n), n
		}, t.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, t.p = "", t(t.s = 50)
	}([function(e, t, n) {
		var r, i;
		(function() {
			function n(e) {
				function t(t, n, r, i, s, o) {
					for(; s >= 0 && s < o; s += e) {
						var a = i ? i[s] : s;
						r = n(r, t[a], a, t)
					}
					return r
				}
				return function(n, r, i, s) {
					r = A(r, s, 4);
					var o = !x(n) && O.keys(n),
						a = (o || n).length,
						u = e > 0 ? 0 : a - 1;
					return arguments.length < 3 && (i = n[o ? o[u] : u], u += e), t(n, r, i, o, u, a)
				}
			}

			function s(e) {
				return function(t, n, r) {
					n = S(n, r);
					for(var i = C(t), s = e > 0 ? 0 : i - 1; s >= 0 && s < i; s += e)
						if(n(t[s], s, t)) return s;
					return -1
				}
			}

			function o(e, t, n) {
				return function(r, i, s) {
					var o = 0,
						a = C(r);
					if("number" == typeof s) e > 0 ? o = s >= 0 ? s : Math.max(s + a, o) : a = s >= 0 ? Math.min(s + 1, a) : s + a + 1;
					else if(n && s && a) return s = n(r, i), r[s] === i ? s : -1;
					if(i !== i) return s = t(p.call(r, o, a), O.isNaN), s >= 0 ? s + o : -1;
					for(s = e > 0 ? o : a - 1; s >= 0 && s < a; s += e)
						if(r[s] === i) return s;
					return -1
				}
			}

			function a(e, t) {
				var n = R.length,
					r = e.constructor,
					i = O.isFunction(r) && r.prototype || h,
					s = "constructor";
				for(O.has(e, s) && !O.contains(t, s) && t.push(s); n--;) s = R[n], s in e && e[s] !== i[s] && !O.contains(t, s) && t.push(s)
			}
			var u = this,
				c = u._,
				l = Array.prototype,
				h = Object.prototype,
				f = Function.prototype,
				d = l.push,
				p = l.slice,
				_ = h.toString,
				v = h.hasOwnProperty,
				y = Array.isArray,
				m = Object.keys,
				g = f.bind,
				b = Object.create,
				w = function() {},
				O = function(e) {
					return e instanceof O ? e : this instanceof O ? void(this._wrapped = e) : new O(e)
				};
			"undefined" != typeof e && e.exports && (t = e.exports = O), t._ = O, O.VERSION = "1.8.3";
			var A = function(e, t, n) {
					if(void 0 === t) return e;
					switch(null == n ? 3 : n) {
						case 1:
							return function(n) {
								return e.call(t, n)
							};
						case 2:
							return function(n, r) {
								return e.call(t, n, r)
							};
						case 3:
							return function(n, r, i) {
								return e.call(t, n, r, i)
							};
						case 4:
							return function(n, r, i, s) {
								return e.call(t, n, r, i, s)
							}
					}
					return function() {
						return e.apply(t, arguments)
					}
				},
				S = function(e, t, n) {
					return null == e ? O.identity : O.isFunction(e) ? A(e, t, n) : O.isObject(e) ? O.matcher(e) : O.property(e)
				};
			O.iteratee = function(e, t) {
				return S(e, t, 1 / 0)
			};
			var E = function(e, t) {
					return function(n) {
						var r = arguments.length;
						if(r < 2 || null == n) return n;
						for(var i = 1; i < r; i++)
							for(var s = arguments[i], o = e(s), a = o.length, u = 0; u < a; u++) {
								var c = o[u];
								t && void 0 !== n[c] || (n[c] = s[c])
							}
						return n
					}
				},
				N = function(e) {
					if(!O.isObject(e)) return {};
					if(b) return b(e);
					w.prototype = e;
					var t = new w;
					return w.prototype = null, t
				},
				T = function(e) {
					return function(t) {
						return null == t ? void 0 : t[e]
					}
				},
				j = Math.pow(2, 53) - 1,
				C = T("length"),
				x = function(e) {
					var t = C(e);
					return "number" == typeof t && t >= 0 && t <= j
				};
			O.each = O.forEach = function(e, t, n) {
				t = A(t, n);
				var r, i;
				if(x(e))
					for(r = 0, i = e.length; r < i; r++) t(e[r], r, e);
				else {
					var s = O.keys(e);
					for(r = 0, i = s.length; r < i; r++) t(e[s[r]], s[r], e)
				}
				return e
			}, O.map = O.collect = function(e, t, n) {
				t = S(t, n);
				for(var r = !x(e) && O.keys(e), i = (r || e).length, s = Array(i), o = 0; o < i; o++) {
					var a = r ? r[o] : o;
					s[o] = t(e[a], a, e)
				}
				return s
			}, O.reduce = O.foldl = O.inject = n(1), O.reduceRight = O.foldr = n(-1), O.find = O.detect = function(e, t, n) {
				var r;
				if(r = x(e) ? O.findIndex(e, t, n) : O.findKey(e, t, n), void 0 !== r && r !== -1) return e[r]
			}, O.filter = O.select = function(e, t, n) {
				var r = [];
				return t = S(t, n), O.each(e, function(e, n, i) {
					t(e, n, i) && r.push(e)
				}), r
			}, O.reject = function(e, t, n) {
				return O.filter(e, O.negate(S(t)), n)
			}, O.every = O.all = function(e, t, n) {
				t = S(t, n);
				for(var r = !x(e) && O.keys(e), i = (r || e).length, s = 0; s < i; s++) {
					var o = r ? r[s] : s;
					if(!t(e[o], o, e)) return !1
				}
				return !0
			}, O.some = O.any = function(e, t, n) {
				t = S(t, n);
				for(var r = !x(e) && O.keys(e), i = (r || e).length, s = 0; s < i; s++) {
					var o = r ? r[s] : s;
					if(t(e[o], o, e)) return !0
				}
				return !1
			}, O.contains = O.includes = O.include = function(e, t, n, r) {
				return x(e) || (e = O.values(e)), ("number" != typeof n || r) && (n = 0), O.indexOf(e, t, n) >= 0
			}, O.invoke = function(e, t) {
				var n = p.call(arguments, 2),
					r = O.isFunction(t);
				return O.map(e, function(e) {
					var i = r ? t : e[t];
					return null == i ? i : i.apply(e, n)
				})
			}, O.pluck = function(e, t) {
				return O.map(e, O.property(t))
			}, O.where = function(e, t) {
				return O.filter(e, O.matcher(t))
			}, O.findWhere = function(e, t) {
				return O.find(e, O.matcher(t))
			}, O.max = function(e, t, n) {
				var r, i, s = -(1 / 0),
					o = -(1 / 0);
				if(null == t && null != e) {
					e = x(e) ? e : O.values(e);
					for(var a = 0, u = e.length; a < u; a++) r = e[a], r > s && (s = r)
				} else t = S(t, n), O.each(e, function(e, n, r) {
					i = t(e, n, r), (i > o || i === -(1 / 0) && s === -(1 / 0)) && (s = e, o = i)
				});
				return s
			}, O.min = function(e, t, n) {
				var r, i, s = 1 / 0,
					o = 1 / 0;
				if(null == t && null != e) {
					e = x(e) ? e : O.values(e);
					for(var a = 0, u = e.length; a < u; a++) r = e[a], r < s && (s = r)
				} else t = S(t, n), O.each(e, function(e, n, r) {
					i = t(e, n, r), (i < o || i === 1 / 0 && s === 1 / 0) && (s = e, o = i)
				});
				return s
			}, O.shuffle = function(e) {
				for(var t, n = x(e) ? e : O.values(e), r = n.length, i = Array(r), s = 0; s < r; s++) t = O.random(0, s), t !== s && (i[s] = i[t]), i[t] = n[s];
				return i
			}, O.sample = function(e, t, n) {
				return null == t || n ? (x(e) || (e = O.values(e)), e[O.random(e.length - 1)]) : O.shuffle(e).slice(0, Math.max(0, t))
			}, O.sortBy = function(e, t, n) {
				return t = S(t, n), O.pluck(O.map(e, function(e, n, r) {
					return {
						value: e,
						index: n,
						criteria: t(e, n, r)
					}
				}).sort(function(e, t) {
					var n = e.criteria,
						r = t.criteria;
					if(n !== r) {
						if(n > r || void 0 === n) return 1;
						if(n < r || void 0 === r) return -1
					}
					return e.index - t.index
				}), "value")
			};
			var U = function(e) {
				return function(t, n, r) {
					var i = {};
					return n = S(n, r), O.each(t, function(r, s) {
						var o = n(r, s, t);
						e(i, r, o)
					}), i
				}
			};
			O.groupBy = U(function(e, t, n) {
				O.has(e, n) ? e[n].push(t) : e[n] = [t]
			}), O.indexBy = U(function(e, t, n) {
				e[n] = t
			}), O.countBy = U(function(e, t, n) {
				O.has(e, n) ? e[n]++ : e[n] = 1
			}), O.toArray = function(e) {
				return e ? O.isArray(e) ? p.call(e) : x(e) ? O.map(e, O.identity) : O.values(e) : []
			}, O.size = function(e) {
				return null == e ? 0 : x(e) ? e.length : O.keys(e).length
			}, O.partition = function(e, t, n) {
				t = S(t, n);
				var r = [],
					i = [];
				return O.each(e, function(e, n, s) {
					(t(e, n, s) ? r : i).push(e)
				}), [r, i]
			}, O.first = O.head = O.take = function(e, t, n) {
				if(null != e) return null == t || n ? e[0] : O.initial(e, e.length - t)
			}, O.initial = function(e, t, n) {
				return p.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
			}, O.last = function(e, t, n) {
				if(null != e) return null == t || n ? e[e.length - 1] : O.rest(e, Math.max(0, e.length - t))
			}, O.rest = O.tail = O.drop = function(e, t, n) {
				return p.call(e, null == t || n ? 1 : t)
			}, O.compact = function(e) {
				return O.filter(e, O.identity)
			};
			var I = function(e, t, n, r) {
				for(var i = [], s = 0, o = r || 0, a = C(e); o < a; o++) {
					var u = e[o];
					if(x(u) && (O.isArray(u) || O.isArguments(u))) {
						t || (u = I(u, t, n));
						var c = 0,
							l = u.length;
						for(i.length += l; c < l;) i[s++] = u[c++]
					} else n || (i[s++] = u)
				}
				return i
			};
			O.flatten = function(e, t) {
				return I(e, t, !1)
			}, O.without = function(e) {
				return O.difference(e, p.call(arguments, 1))
			}, O.uniq = O.unique = function(e, t, n, r) {
				O.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = S(n, r));
				for(var i = [], s = [], o = 0, a = C(e); o < a; o++) {
					var u = e[o],
						c = n ? n(u, o, e) : u;
					t ? (o && s === c || i.push(u), s = c) : n ? O.contains(s, c) || (s.push(c), i.push(u)) : O.contains(i, u) || i.push(u)
				}
				return i
			}, O.union = function() {
				return O.uniq(I(arguments, !0, !0))
			}, O.intersection = function(e) {
				for(var t = [], n = arguments.length, r = 0, i = C(e); r < i; r++) {
					var s = e[r];
					if(!O.contains(t, s)) {
						for(var o = 1; o < n && O.contains(arguments[o], s); o++);
						o === n && t.push(s)
					}
				}
				return t
			}, O.difference = function(e) {
				var t = I(arguments, !0, !0, 1);
				return O.filter(e, function(e) {
					return !O.contains(t, e)
				})
			}, O.zip = function() {
				return O.unzip(arguments)
			}, O.unzip = function(e) {
				for(var t = e && O.max(e, C).length || 0, n = Array(t), r = 0; r < t; r++) n[r] = O.pluck(e, r);
				return n
			}, O.object = function(e, t) {
				for(var n = {}, r = 0, i = C(e); r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
				return n
			}, O.findIndex = s(1), O.findLastIndex = s(-1), O.sortedIndex = function(e, t, n, r) {
				n = S(n, r, 1);
				for(var i = n(t), s = 0, o = C(e); s < o;) {
					var a = Math.floor((s + o) / 2);
					n(e[a]) < i ? s = a + 1 : o = a
				}
				return s
			}, O.indexOf = o(1, O.findIndex, O.sortedIndex), O.lastIndexOf = o(-1, O.findLastIndex), O.range = function(e, t, n) {
				null == t && (t = e || 0, e = 0), n = n || 1;
				for(var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), s = 0; s < r; s++, e += n) i[s] = e;
				return i
			};
			var k = function(e, t, n, r, i) {
				if(!(r instanceof t)) return e.apply(n, i);
				var s = N(e.prototype),
					o = e.apply(s, i);
				return O.isObject(o) ? o : s
			};
			O.bind = function(e, t) {
				if(g && e.bind === g) return g.apply(e, p.call(arguments, 1));
				if(!O.isFunction(e)) throw new TypeError("Bind must be called on a function");
				var n = p.call(arguments, 2),
					r = function() {
						return k(e, r, t, this, n.concat(p.call(arguments)))
					};
				return r
			}, O.partial = function(e) {
				var t = p.call(arguments, 1),
					n = function() {
						for(var r = 0, i = t.length, s = Array(i), o = 0; o < i; o++) s[o] = t[o] === O ? arguments[r++] : t[o];
						for(; r < arguments.length;) s.push(arguments[r++]);
						return k(e, n, this, this, s)
					};
				return n
			}, O.bindAll = function(e) {
				var t, n, r = arguments.length;
				if(r <= 1) throw new Error("bindAll must be passed function names");
				for(t = 1; t < r; t++) n = arguments[t], e[n] = O.bind(e[n], e);
				return e
			}, O.memoize = function(e, t) {
				var n = function(r) {
					var i = n.cache,
						s = "" + (t ? t.apply(this, arguments) : r);
					return O.has(i, s) || (i[s] = e.apply(this, arguments)), i[s]
				};
				return n.cache = {}, n
			}, O.delay = function(e, t) {
				var n = p.call(arguments, 2);
				return setTimeout(function() {
					return e.apply(null, n)
				}, t)
			}, O.defer = O.partial(O.delay, O, 1), O.throttle = function(e, t, n) {
				var r, i, s, o = null,
					a = 0;
				n || (n = {});
				var u = function() {
					a = n.leading === !1 ? 0 : O.now(), o = null, s = e.apply(r, i), o || (r = i = null)
				};
				return function() {
					var c = O.now();
					a || n.leading !== !1 || (a = c);
					var l = t - (c - a);
					return r = this, i = arguments, l <= 0 || l > t ? (o && (clearTimeout(o), o = null), a = c, s = e.apply(r, i), o || (r = i = null)) : o || n.trailing === !1 || (o = setTimeout(u, l)), s
				}
			}, O.debounce = function(e, t, n) {
				var r, i, s, o, a, u = function() {
					var c = O.now() - o;
					c < t && c >= 0 ? r = setTimeout(u, t - c) : (r = null, n || (a = e.apply(s, i), r || (s = i = null)))
				};
				return function() {
					s = this, i = arguments, o = O.now();
					var c = n && !r;
					return r || (r = setTimeout(u, t)), c && (a = e.apply(s, i), s = i = null), a
				}
			}, O.wrap = function(e, t) {
				return O.partial(t, e)
			}, O.negate = function(e) {
				return function() {
					return !e.apply(this, arguments)
				}
			}, O.compose = function() {
				var e = arguments,
					t = e.length - 1;
				return function() {
					for(var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
					return r
				}
			}, O.after = function(e, t) {
				return function() {
					if(--e < 1) return t.apply(this, arguments)
				}
			}, O.before = function(e, t) {
				var n;
				return function() {
					return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
				}
			}, O.once = O.partial(O.before, 2);
			var P = !{
					toString: null
				}.propertyIsEnumerable("toString"),
				R = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
			O.keys = function(e) {
				if(!O.isObject(e)) return [];
				if(m) return m(e);
				var t = [];
				for(var n in e) O.has(e, n) && t.push(n);
				return P && a(e, t), t
			}, O.allKeys = function(e) {
				if(!O.isObject(e)) return [];
				var t = [];
				for(var n in e) t.push(n);
				return P && a(e, t), t
			}, O.values = function(e) {
				for(var t = O.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
				return r
			}, O.mapObject = function(e, t, n) {
				t = S(t, n);
				for(var r, i = O.keys(e), s = i.length, o = {}, a = 0; a < s; a++) r = i[a], o[r] = t(e[r], r, e);
				return o
			}, O.pairs = function(e) {
				for(var t = O.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
				return r
			}, O.invert = function(e) {
				for(var t = {}, n = O.keys(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
				return t
			}, O.functions = O.methods = function(e) {
				var t = [];
				for(var n in e) O.isFunction(e[n]) && t.push(n);
				return t.sort()
			}, O.extend = E(O.allKeys), O.extendOwn = O.assign = E(O.keys), O.findKey = function(e, t, n) {
				t = S(t, n);
				for(var r, i = O.keys(e), s = 0, o = i.length; s < o; s++)
					if(r = i[s], t(e[r], r, e)) return r
			}, O.pick = function(e, t, n) {
				var r, i, s = {},
					o = e;
				if(null == o) return s;
				O.isFunction(t) ? (i = O.allKeys(o), r = A(t, n)) : (i = I(arguments, !1, !1, 1), r = function(e, t, n) {
					return t in n
				}, o = Object(o));
				for(var a = 0, u = i.length; a < u; a++) {
					var c = i[a],
						l = o[c];
					r(l, c, o) && (s[c] = l)
				}
				return s
			}, O.omit = function(e, t, n) {
				if(O.isFunction(t)) t = O.negate(t);
				else {
					var r = O.map(I(arguments, !1, !1, 1), String);
					t = function(e, t) {
						return !O.contains(r, t)
					}
				}
				return O.pick(e, t, n)
			}, O.defaults = E(O.allKeys, !0), O.create = function(e, t) {
				var n = N(e);
				return t && O.extendOwn(n, t), n
			}, O.clone = function(e) {
				return O.isObject(e) ? O.isArray(e) ? e.slice() : O.extend({}, e) : e
			}, O.tap = function(e, t) {
				return t(e), e
			}, O.isMatch = function(e, t) {
				var n = O.keys(t),
					r = n.length;
				if(null == e) return !r;
				for(var i = Object(e), s = 0; s < r; s++) {
					var o = n[s];
					if(t[o] !== i[o] || !(o in i)) return !1
				}
				return !0
			};
			var D = function(e, t, n, r) {
				if(e === t) return 0 !== e || 1 / e === 1 / t;
				if(null == e || null == t) return e === t;
				e instanceof O && (e = e._wrapped), t instanceof O && (t = t._wrapped);
				var i = _.call(e);
				if(i !== _.call(t)) return !1;
				switch(i) {
					case "[object RegExp]":
					case "[object String]":
						return "" + e == "" + t;
					case "[object Number]":
						return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
					case "[object Date]":
					case "[object Boolean]":
						return +e === +t
				}
				var s = "[object Array]" === i;
				if(!s) {
					if("object" != typeof e || "object" != typeof t) return !1;
					var o = e.constructor,
						a = t.constructor;
					if(o !== a && !(O.isFunction(o) && o instanceof o && O.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1
				}
				n = n || [], r = r || [];
				for(var u = n.length; u--;)
					if(n[u] === e) return r[u] === t;
				if(n.push(e), r.push(t), s) {
					if(u = e.length, u !== t.length) return !1;
					for(; u--;)
						if(!D(e[u], t[u], n, r)) return !1
				} else {
					var c, l = O.keys(e);
					if(u = l.length, O.keys(t).length !== u) return !1;
					for(; u--;)
						if(c = l[u], !O.has(t, c) || !D(e[c], t[c], n, r)) return !1
				}
				return n.pop(), r.pop(), !0
			};
			O.isEqual = function(e, t) {
				return D(e, t)
			}, O.isEmpty = function(e) {
				return null == e || (x(e) && (O.isArray(e) || O.isString(e) || O.isArguments(e)) ? 0 === e.length : 0 === O.keys(e).length)
			}, O.isElement = function(e) {
				return !(!e || 1 !== e.nodeType)
			}, O.isArray = y || function(e) {
				return "[object Array]" === _.call(e)
			}, O.isObject = function(e) {
				var t = typeof e;
				return "function" === t || "object" === t && !!e
			}, O.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
				O["is" + e] = function(t) {
					return _.call(t) === "[object " + e + "]"
				}
			}), O.isArguments(arguments) || (O.isArguments = function(e) {
				return O.has(e, "callee")
			}), "function" != typeof /./ && "object" != typeof Int8Array && (O.isFunction = function(e) {
				return "function" == typeof e || !1
			}), O.isFinite = function(e) {
				return isFinite(e) && !isNaN(parseFloat(e))
			}, O.isNaN = function(e) {
				return O.isNumber(e) && e !== +e
			}, O.isBoolean = function(e) {
				return e === !0 || e === !1 || "[object Boolean]" === _.call(e)
			}, O.isNull = function(e) {
				return null === e
			}, O.isUndefined = function(e) {
				return void 0 === e
			}, O.has = function(e, t) {
				return null != e && v.call(e, t)
			}, O.noConflict = function() {
				return u._ = c, this
			}, O.identity = function(e) {
				return e
			}, O.constant = function(e) {
				return function() {
					return e
				}
			}, O.noop = function() {}, O.property = T, O.propertyOf = function(e) {
				return null == e ? function() {} : function(t) {
					return e[t]
				}
			}, O.matcher = O.matches = function(e) {
				return e = O.extendOwn({}, e),
					function(t) {
						return O.isMatch(t, e)
					}
			}, O.times = function(e, t, n) {
				var r = Array(Math.max(0, e));
				t = A(t, n, 1);
				for(var i = 0; i < e; i++) r[i] = t(i);
				return r
			}, O.random = function(e, t) {
				return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
			}, O.now = Date.now || function() {
				return(new Date).getTime()
			};
			var L = {
					"&": "&amp;",
					"<": "&lt;",
					">": "&gt;",
					'"': "&quot;",
					"'": "&#x27;",
					"`": "&#x60;"
				},
				q = O.invert(L),
				F = function(e) {
					var t = function(t) {
							return e[t]
						},
						n = "(?:" + O.keys(e).join("|") + ")",
						r = RegExp(n),
						i = RegExp(n, "g");
					return function(e) {
						return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
					}
				};
			O.escape = F(L), O.unescape = F(q), O.result = function(e, t, n) {
				var r = null == e ? void 0 : e[t];
				return void 0 === r && (r = n), O.isFunction(r) ? r.call(e) : r
			};
			var M = 0;
			O.uniqueId = function(e) {
				var t = ++M + "";
				return e ? e + t : t
			}, O.templateSettings = {
				evaluate: /<%([\s\S]+?)%>/g,
				interpolate: /<%=([\s\S]+?)%>/g,
				escape: /<%-([\s\S]+?)%>/g
			};
			var J = /(.)^/,
				B = {
					"'": "'",
					"\\": "\\",
					"\r": "r",
					"\n": "n",
					"\u2028": "u2028",
					"\u2029": "u2029"
				},
				V = /\\|'|\r|\n|\u2028|\u2029/g,
				Q = function(e) {
					return "\\" + B[e]
				};
			O.template = function(e, t, n) {
				!t && n && (t = n), t = O.defaults({}, t, O.templateSettings);
				var r = RegExp([(t.escape || J).source, (t.interpolate || J).source, (t.evaluate || J).source].join("|") + "|$", "g"),
					i = 0,
					s = "__p+='";
				e.replace(r, function(t, n, r, o, a) {
					return s += e.slice(i, a).replace(V, Q), i = a + t.length, n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"), t
				}), s += "';\n", t.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
				try {
					var o = new Function(t.variable || "obj", "_", s)
				} catch(e) {
					throw e.source = s, e
				}
				var a = function(e) {
						return o.call(this, e, O)
					},
					u = t.variable || "obj";
				return a.source = "function(" + u + "){\n" + s + "}", a
			}, O.chain = function(e) {
				var t = O(e);
				return t._chain = !0, t
			};
			var W = function(e, t) {
				return e._chain ? O(t).chain() : t
			};
			O.mixin = function(e) {
				O.each(O.functions(e), function(t) {
					var n = O[t] = e[t];
					O.prototype[t] = function() {
						var e = [this._wrapped];
						return d.apply(e, arguments), W(this, n.apply(O, e))
					}
				})
			}, O.mixin(O), O.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
				var t = l[e];
				O.prototype[e] = function() {
					var n = this._wrapped;
					return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], W(this, n)
				}
			}), O.each(["concat", "join", "slice"], function(e) {
				var t = l[e];
				O.prototype[e] = function() {
					return W(this, t.apply(this._wrapped, arguments))
				}
			}), O.prototype.value = function() {
				return this._wrapped
			}, O.prototype.valueOf = O.prototype.toJSON = O.prototype.value, O.prototype.toString = function() {
				return "" + this._wrapped
			}, r = [], i = function() {
				return O
			}.apply(t, r), !(void 0 !== i && (e.exports = i))
		}).call(this)
	}, function(e, t, n) {
		"use strict";
		var r = (n(0), n(41).Promise);
		r._continueWhile = function(e, t) {
			return e() ? t().then(function() {
				return r._continueWhile(e, t)
			}) : r.resolve()
		}, e.exports = r
	}, function(e, t, n) {
		"use strict";
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
			},
			i = n(7),
			s = n(5)("leancloud:request"),
			o = n(44),
			a = n(1),
			u = n(10),
			c = n(3),
			l = n(6),
			h = n(0),
			f = n(4),
			d = f.getSessionToken,
			p = void 0,
			_ = {
				cn: "https://api.leancloud.cn",
				us: "https://us-api.leancloud.cn"
			},
			v = function(e, t) {
				var n = (new Date).getTime(),
					r = o(n + e);
				return t ? r + "," + n + ",master" : r + "," + n
			},
			y = 0,
			m = function(e, t, n) {
				var r = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3],
					o = arguments[4],
					u = y++;
				return s("request(" + u + ")", e, t, n, r), new a(function(a, c) {
					var l = i(e, t).set(r).send(n);
					o && l.on("progress", o), l.end(function(e, t) {
						return t && s("response(" + u + ")", t.status, t.body || t.text, t.header), e ? (t && (e.statusCode = t.status, e.responseText = t.text, e.response = t.body), c(e)) : a(t.body)
					})
				})
			},
			g = function(e, t) {
				t ? e["X-LC-Sign"] = v(l.applicationKey) : e["X-LC-Key"] = l.applicationKey
			},
			b = function() {
				var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
					t = arguments[1],
					n = {
						"X-LC-Id": l.applicationId,
						"Content-Type": "application/json;charset=UTF-8"
					},
					r = !1;
				return "boolean" == typeof e.useMasterKey ? r = e.useMasterKey : "boolean" == typeof l._useMasterKey && (r = l._useMasterKey), r ? l.masterKey ? t ? n["X-LC-Sign"] = v(l.masterKey, !0) : n["X-LC-Key"] = l.masterKey + ",master" : (console.warn("masterKey is not set, fall back to use appKey"), g(n, t)) : g(n, t), l.hookKey && (n["X-LC-Hook-Key"] = l.hookKey), null !== l._config.applicationProduction && (n["X-LC-Prod"] = String(l._config.applicationProduction)), n["X-LC-UA"] = l._config.userAgent, a.resolve().then(function() {
					var t = d(e);
					if(t) n["X-LC-Session"] = t;
					else if(!l._config.disableCurrentUser) return l.User.currentAsync().then(function(e) {
						return e && e._sessionToken && (n["X-LC-Session"] = e._sessionToken), n
					});
					return n
				})
			},
			w = function(e, t, n, i, s) {
				l.serverURL && (l._config.APIServerURL = l.serverURL, console.warn("Please use AV._config.APIServerURL to replace AV.serverURL, and it is an internal interface."));
				var o = l._config.APIServerURL || _.cn;
				if("/" !== o.charAt(o.length - 1) && (o += "/"), o += "1.1/" + e, t && (o += "/" + t), n && (o += "/" + n), "users" !== e && "classes" !== e || !s || (o += "?", s._fetchWhenSave && (delete s._fetchWhenSave, o += "&new=true"), s._where && (o += "&where=" + encodeURIComponent(JSON.stringify(s._where)), delete s._where)), "get" === i.toLowerCase()) {
					o.indexOf("?") === -1 && (o += "?");
					for(var a in s) "object" === r(s[a]) && (s[a] = JSON.stringify(s[a])), o += "&" + a + "=" + encodeURIComponent(s[a])
				}
				return o
			},
			O = function(e, t) {
				return "number" != typeof t && (t = 3600), u.setAsync("APIServerURL", e, 1e3 * t)
			},
			A = function(e) {
				return new a(function(t, n) {
					if(410 === e.statusCode) O(e.response.api_server, e.response.ttl).then(function() {
						t(e.response.location)
					}).catch(n);
					else {
						var r = {
							code: e.code || -1,
							error: e.message || e.responseText
						};
						if(e.response && e.response.code) r = e.response;
						else if(e.responseText) try {
							r = JSON.parse(e.responseText)
						} catch(e) {}
						n(new c(r.code, r.error))
					}
				})
			},
			S = function(e) {
				l._config.APIServerURL = "https://" + e;
				var t = h.findKey(_, function(e) {
					return e === l._config.APIServerURL
				});
				t && (l._config.region = t)
			},
			E = function() {
				var e = "https://app-router.leancloud.cn/1/route?appId=" + l.applicationId;
				return m("get", e).then(function(e) {
					if(e.api_server) return S(e.api_server), O(e.api_server, e.ttl)
				}, function(e) {
					if(e.statusCode >= 400 && e.statusCode < 500) throw e
				})
			},
			N = function() {
				var e = arguments.length <= 0 || void 0 === arguments[0] ? "cn" : arguments[0];
				p = new a(function(t, n) {
					return l._config.APIServerURL ? void t() : "cn" === e ? u.getAsync("APIServerURL").then(function(e) {
						return e ? void S(e) : E()
					}).then(function() {
						t()
					}).catch(function(e) {
						n(e)
					}) : (l._config.region = e, l._config.APIServerURL = _[e], t(), void 0)
				})
			},
			T = function(e, t, n, r) {
				var i = arguments.length <= 4 || void 0 === arguments[4] ? {} : arguments[4],
					s = arguments[5];
				if(!l.applicationId) throw new Error("You must specify your applicationId using AV.init()");
				if(!l.applicationKey && !l.masterKey) throw new Error("You must specify a AppKey using AV.init()");
				return p ? p.then(function() {
					var o = w(e, t, n, r, i);
					return b(s).then(function(e) {
						return m(r, o, i, e).then(null, function(t) {
							return A(t).then(function(t) {
								return m(r, t, i, e)
							})
						})
					})
				}) : a.reject(new Error("Not initialized"))
			};
		e.exports = {
			ajax: m,
			request: T,
			setServerUrlByRegion: N
		}
	}, function(e, t, n) {
		"use strict";

		function r(e, t) {
			var n = new Error(t);
			return n.code = e, n
		}
		var i = n(0);
		i.extend(r, {
			OTHER_CAUSE: -1,
			INTERNAL_SERVER_ERROR: 1,
			CONNECTION_FAILED: 100,
			OBJECT_NOT_FOUND: 101,
			INVALID_QUERY: 102,
			INVALID_CLASS_NAME: 103,
			MISSING_OBJECT_ID: 104,
			INVALID_KEY_NAME: 105,
			INVALID_POINTER: 106,
			INVALID_JSON: 107,
			COMMAND_UNAVAILABLE: 108,
			NOT_INITIALIZED: 109,
			INCORRECT_TYPE: 111,
			INVALID_CHANNEL_NAME: 112,
			PUSH_MISCONFIGURED: 115,
			OBJECT_TOO_LARGE: 116,
			OPERATION_FORBIDDEN: 119,
			CACHE_MISS: 120,
			INVALID_NESTED_KEY: 121,
			INVALID_FILE_NAME: 122,
			INVALID_ACL: 123,
			TIMEOUT: 124,
			INVALID_EMAIL_ADDRESS: 125,
			MISSING_CONTENT_TYPE: 126,
			MISSING_CONTENT_LENGTH: 127,
			INVALID_CONTENT_LENGTH: 128,
			FILE_TOO_LARGE: 129,
			FILE_SAVE_ERROR: 130,
			FILE_DELETE_ERROR: 153,
			DUPLICATE_VALUE: 137,
			INVALID_ROLE_NAME: 139,
			EXCEEDED_QUOTA: 140,
			SCRIPT_FAILED: 141,
			VALIDATION_ERROR: 142,
			INVALID_IMAGE_DATA: 150,
			UNSAVED_FILE_ERROR: 151,
			INVALID_PUSH_TIME_ERROR: 152,
			USERNAME_MISSING: 200,
			PASSWORD_MISSING: 201,
			USERNAME_TAKEN: 202,
			EMAIL_TAKEN: 203,
			EMAIL_MISSING: 204,
			EMAIL_NOT_FOUND: 205,
			SESSION_MISSING: 206,
			MUST_CREATE_USER_THROUGH_SIGNUP: 207,
			ACCOUNT_ALREADY_LINKED: 208,
			LINKED_ID_MISSING: 250,
			INVALID_LINKED_SESSION: 251,
			UNSUPPORTED_SERVICE: 252,
			X_DOMAIN_REQUEST: 602
		}), e.exports = r
	}, function(e, t, n) {
		"use strict";
		var r = n(0),
			i = function(e) {
				return r.isNull(e) || r.isUndefined(e)
			},
			s = function(e) {
				return r.isArray(e) ? e : void 0 === e || null === e ? [] : [e]
			},
			o = function(e) {
				return e.sessionToken ? e.sessionToken : e.user && "function" == typeof e.user.getSessionToken ? e.user.getSessionToken() : void 0
			},
			a = function(e) {
				return function(t) {
					return e(t), t
				}
			};
		e.exports = {
			isNullOrUndefined: i,
			ensureArray: s,
			getSessionToken: o,
			tap: a
		}
	}, function(e, t, n) {
		function r() {
			return !("undefined" == typeof window || !window || "undefined" == typeof window.process || "renderer" !== window.process.type) || ("undefined" != typeof document && document && "WebkitAppearance" in document.documentElement.style || "undefined" != typeof window && window && window.console && (console.firebug || console.exception && console.table) || "undefined" != typeof navigator && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
		}

		function i(e) {
			var n = this.useColors;
			if(e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), n) {
				var r = "color: " + this.color;
				e.splice(1, 0, r, "color: inherit");
				var i = 0,
					s = 0;
				e[0].replace(/%[a-zA-Z%]/g, function(e) {
					"%%" !== e && (i++, "%c" === e && (s = i))
				}), e.splice(s, 0, r)
			}
		}

		function s() {
			return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
		}

		function o(e) {
			try {
				null == e ? t.storage.removeItem("debug") : t.storage.debug = e
			} catch(e) {}
		}

		function a() {
			try {
				return t.storage.debug
			} catch(e) {}
			if("undefined" != typeof process && "env" in process) return process.env.DEBUG
		}

		function u() {
			try {
				return window.localStorage
			} catch(e) {}
		}
		t = e.exports = n(40), t.log = s, t.formatArgs = i, t.save = o, t.load = a, t.useColors = r, t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : u(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function(e) {
			try {
				return JSON.stringify(e)
			} catch(e) {
				return "[UnexpectedJSONParseError]: " + e.message
			}
		}, t.enable(a())
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(0),
				i = n(31),
				s = n(4),
				o = s.isNullOrUndefined,
				a = t.AV || {};
			a._config = a._config || {};
			var u = a._config;
			r.extend(u, {
				region: "cn",
				APIServerURL: u.APIServerURL || "",
				disableCurrentUser: !1,
				userAgent: i,
				applicationProduction: null
			});
			var c = function() {},
				l = function(e, t, n) {
					var i;
					return i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
						e.apply(this, arguments)
					}, r.extend(i, e), c.prototype = e.prototype, i.prototype = new c, t && r.extend(i.prototype, t), n && r.extend(i, n), i.prototype.constructor = i, i.__super__ = e.prototype, i
				};
			a.setProduction = function(e) {
				o(e) ? u.applicationProduction = null : u.applicationProduction = e ? 1 : 0
			}, a._getAVPath = function(e) {
				if(!a.applicationId) throw new Error("You need to call AV.initialize before using AV.");
				if(e || (e = ""), !r.isString(e)) throw new Error("Tried to get a localStorage path that wasn't a String.");
				return "/" === e[0] && (e = e.substring(1)), "AV/" + a.applicationId + "/" + e
			}, a._installationId = null, a._getInstallationId = function() {
				if(a._installationId) return a.Promise.resolve(a._installationId);
				var e = a._getAVPath("installationId");
				return a.localStorage.getItemAsync(e).then(function(t) {
					if(a._installationId = t, a._installationId) return t;
					var n = function() {
						return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
					};
					return a._installationId = n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n(), a.localStorage.setItemAsync(e, a._installationId)
				})
			}, a._parseDate = function(e) {
				var t = new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$"),
					n = t.exec(e);
				if(!n) return null;
				var r = n[1] || 0,
					i = (n[2] || 1) - 1,
					s = n[3] || 0,
					o = n[4] || 0,
					a = n[5] || 0,
					u = n[6] || 0,
					c = n[8] || 0;
				return new Date(Date.UTC(r, i, s, o, a, u, c))
			}, a._extend = function(e, t) {
				var n = l(this, e, t);
				return n.extend = this.extend, n
			}, a._getValue = function(e, t) {
				return e && e[t] ? r.isFunction(e[t]) ? e[t]() : e[t] : null
			}, a._encode = function(e, t, n) {
				var i = arguments.length <= 3 || void 0 === arguments[3] || arguments[3];
				if(e instanceof a.Object) {
					if(n) throw new Error("AV.Objects not allowed here");
					return t && !r.include(t, e) && e._hasData ? e._toFullJSON(t.concat(e), i) : e._toPointer()
				}
				if(e instanceof a.ACL) return e.toJSON();
				if(r.isDate(e)) return i ? {
					__type: "Date",
					iso: e.toJSON()
				} : e.toJSON();
				if(e instanceof a.GeoPoint) return e.toJSON();
				if(r.isArray(e)) return r.map(e, function(e) {
					return a._encode(e, t, n, i)
				});
				if(r.isRegExp(e)) return e.source;
				if(e instanceof a.Relation) return e.toJSON();
				if(e instanceof a.Op) return e.toJSON();
				if(e instanceof a.File) {
					if(!e.url() && !e.id) throw new Error("Tried to save an object containing an unsaved file.");
					return e._toFullJSON(t, i)
				}
				return r.isObject(e) ? r.mapObject(e, function(e, r) {
					return a._encode(e, t, n, i)
				}) : e
			}, a._decode = function(e, t) {
				if(!r.isObject(e) || r.isDate(e)) return e;
				if(r.isArray(e)) return r.map(e, function(e) {
					return a._decode(e)
				});
				if(e instanceof a.Object) return e;
				if(e instanceof a.File) return e;
				if(e instanceof a.Op) return e;
				if(e instanceof a.GeoPoint) return e;
				if(e instanceof a.ACL) return e;
				if("ACL" === t) return new a.ACL(e);
				if(e.__op) return a.Op._decode(e);
				var n;
				if("Pointer" === e.__type) {
					n = e.className;
					var i = a.Object._create(n);
					if(Object.keys(e).length > 3) {
						var s = r.clone(e);
						delete s.__type, delete s.className, i._finishFetch(s, !0)
					} else i._finishFetch({
						objectId: e.objectId
					}, !1);
					return i
				}
				if("Object" === e.__type) {
					n = e.className;
					var o = r.clone(e);
					delete o.__type, delete o.className;
					var u = a.Object._create(n);
					return u._finishFetch(o, !0), u
				}
				if("Date" === e.__type) return a._parseDate(e.iso);
				if("GeoPoint" === e.__type) return new a.GeoPoint({
					latitude: e.latitude,
					longitude: e.longitude
				});
				if("Relation" === e.__type) {
					if(!t) throw new Error("key missing decoding a Relation");
					var c = new a.Relation(null, t);
					return c.targetClassName = e.className, c
				}
				if("File" === e.__type) {
					var l = new a.File(e.name),
						h = r.clone(e);
					return delete h.__type, l._finishFetch(h), l
				}
				return r.mapObject(e, a._decode)
			}, a.parseJSON = a._decode, a._encodeObjectOrArray = function(e) {
				var t = function(e) {
					return e && e._toFullJSON && (e = e._toFullJSON([])), r.mapObject(e, function(e) {
						return a._encode(e, [])
					})
				};
				return r.isArray(e) ? e.map(function(e) {
					return t(e)
				}) : t(e)
			}, a._arrayEach = r.each, a._traverse = function(e, t, n) {
				if(e instanceof a.Object) {
					if(n = n || [], r.indexOf(n, e) >= 0) return;
					return n.push(e), a._traverse(e.attributes, t, n), t(e)
				}
				return e instanceof a.Relation || e instanceof a.File ? t(e) : r.isArray(e) ? (r.each(e, function(r, i) {
					var s = a._traverse(r, t, n);
					s && (e[i] = s)
				}), t(e)) : r.isObject(e) ? (a._each(e, function(r, i) {
					var s = a._traverse(r, t, n);
					s && (e[i] = s)
				}), t(e)) : t(e)
			}, a._objectEach = a._each = function(e, t) {
				r.isObject(e) ? r.each(r.keys(e), function(n) {
					t(e[n], n)
				}) : r.each(e, t)
			}, e.exports = a
		}).call(t, n(9))
	}, function(e, t, n) {
		function r() {}

		function i(e) {
			if(!_(e)) return e;
			var t = [];
			for(var n in e) s(t, n, e[n]);
			return t.join("&")
		}

		function s(e, t, n) {
			if(null != n)
				if(Array.isArray(n)) n.forEach(function(n) {
					s(e, t, n)
				});
				else if(_(n))
				for(var r in n) s(e, t + "[" + r + "]", n[r]);
			else e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n));
			else null === n && e.push(encodeURIComponent(t))
		}

		function o(e) {
			for(var t, n, r = {}, i = e.split("&"), s = 0, o = i.length; s < o; ++s) t = i[s], n = t.indexOf("="), n == -1 ? r[decodeURIComponent(t)] = "" : r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1));
			return r
		}

		function a(e) {
			var t, n, r, i, s = e.split(/\r?\n/),
				o = {};
			s.pop();
			for(var a = 0, u = s.length; a < u; ++a) n = s[a], t = n.indexOf(":"), r = n.slice(0, t).toLowerCase(), i = g(n.slice(t + 1)), o[r] = i;
			return o
		}

		function u(e) {
			return /[\/+]json\b/.test(e)
		}

		function c(e, t) {
			t = t || {}, this.req = e, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || "undefined" == typeof this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
			var n = this.xhr.status;
			1223 === n && (n = 204), this._setStatusProperties(n), this.header = this.headers = a(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && e._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null
		}

		function l(e, t) {
			var n = this;
			this._query = this._query || [], this.method = e, this.url = t, this.header = {}, this._header = {}, this.on("end", function() {
				var e = null,
					t = null;
				try {
					t = new c(n)
				} catch(t) {
					return e = new Error("Parser is unable to parse the response"), e.parse = !0, e.original = t, n.xhr ? (e.rawResponse = "undefined" == typeof n.xhr.responseType ? n.xhr.responseText : n.xhr.response, e.status = n.xhr.status ? n.xhr.status : null, e.statusCode = e.status) : (e.rawResponse = null, e.status = null), n.callback(e)
				}
				n.emit("response", t);
				var r;
				try {
					n._isResponseOK(t) || (r = new Error(t.statusText || "Unsuccessful HTTP response"), r.original = e, r.response = t, r.status = t.status)
				} catch(e) {
					r = e
				}
				r ? n.callback(r, t) : n.callback(null, t)
			})
		}

		function h(e, t) {
			var n = m("DELETE", e);
			return t && n.end(t), n
		}
		var f;
		"undefined" != typeof window ? f = window : "undefined" != typeof self ? f = self : (console.warn("Using browser-only version of superagent in non-browser environment"), f = this);
		var d = n(37),
			p = n(46),
			_ = n(8),
			v = n(45),
			y = n(47),
			m = t = e.exports = function(e, n) {
				return "function" == typeof n ? new t.Request("GET", e).end(n) : 1 == arguments.length ? new t.Request("GET", e) : new t.Request(e, n)
			};
		t.Request = l, m.getXHR = function() {
			if(!(!f.XMLHttpRequest || f.location && "file:" == f.location.protocol && f.ActiveXObject)) return new XMLHttpRequest;
			try {
				return new ActiveXObject("Microsoft.XMLHTTP")
			} catch(e) {}
			try {
				return new ActiveXObject("Msxml2.XMLHTTP.6.0")
			} catch(e) {}
			try {
				return new ActiveXObject("Msxml2.XMLHTTP.3.0")
			} catch(e) {}
			try {
				return new ActiveXObject("Msxml2.XMLHTTP")
			} catch(e) {}
			throw Error("Browser-only verison of superagent could not find XHR")
		};
		var g = "".trim ? function(e) {
			return e.trim()
		} : function(e) {
			return e.replace(/(^\s*|\s*$)/g, "")
		};
		m.serializeObject = i, m.parseString = o, m.types = {
			html: "text/html",
			json: "application/json",
			xml: "application/xml",
			urlencoded: "application/x-www-form-urlencoded",
			form: "application/x-www-form-urlencoded",
			"form-data": "application/x-www-form-urlencoded"
		}, m.serialize = {
			"application/x-www-form-urlencoded": i,
			"application/json": JSON.stringify
		}, m.parse = {
			"application/x-www-form-urlencoded": o,
			"application/json": JSON.parse
		}, y(c.prototype), c.prototype._parseBody = function(e) {
			var t = m.parse[this.type];
			return this.req._parser ? this.req._parser(this, e) : (!t && u(this.type) && (t = m.parse["application/json"]), t && e && (e.length || e instanceof Object) ? t(e) : null)
		}, c.prototype.toError = function() {
			var e = this.req,
				t = e.method,
				n = e.url,
				r = "cannot " + t + " " + n + " (" + this.status + ")",
				i = new Error(r);
			return i.status = this.status, i.method = t, i.url = n, i
		}, m.Response = c, d(l.prototype), p(l.prototype), l.prototype.type = function(e) {
			return this.set("Content-Type", m.types[e] || e), this
		}, l.prototype.accept = function(e) {
			return this.set("Accept", m.types[e] || e), this
		}, l.prototype.auth = function(e, t, n) {
			switch(n || (n = {
				type: "function" == typeof btoa ? "basic" : "auto"
			}), n.type) {
				case "basic":
					this.set("Authorization", "Basic " + btoa(e + ":" + t));
					break;
				case "auto":
					this.username = e, this.password = t
			}
			return this
		}, l.prototype.query = function(e) {
			return "string" != typeof e && (e = i(e)), e && this._query.push(e), this
		}, l.prototype.attach = function(e, t, n) {
			if(this._data) throw Error("superagent can't mix .send() and .attach()");
			return this._getFormData().append(e, t, n || t.name), this
		}, l.prototype._getFormData = function() {
			return this._formData || (this._formData = new f.FormData), this._formData
		}, l.prototype.callback = function(e, t) {
			var n = this._callback;
			this.clearTimeout(), e && this.emit("error", e), n(e, t)
		}, l.prototype.crossDomainError = function() {
			var e = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
			e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, this.callback(e)
		}, l.prototype.buffer = l.prototype.ca = l.prototype.agent = function() {
			return console.warn("This is not supported in browser version of superagent"), this
		}, l.prototype.pipe = l.prototype.write = function() {
			throw Error("Streaming is not supported in browser version of superagent")
		}, l.prototype._appendQueryString = function() {
			var e = this._query.join("&");
			if(e && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + e), this._sort) {
				var t = this.url.indexOf("?");
				if(t >= 0) {
					var n = this.url.substring(t + 1).split("&");
					v(this._sort) ? n.sort(this._sort) : n.sort(), this.url = this.url.substring(0, t) + "?" + n.join("&")
				}
			}
		}, l.prototype._isHost = function(e) {
			return e && "object" == typeof e && !Array.isArray(e) && "[object Object]" !== Object.prototype.toString.call(e)
		}, l.prototype.end = function(e) {
			var t = this,
				n = this.xhr = m.getXHR(),
				i = this._formData || this._data;
			this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = e || r, n.onreadystatechange = function() {
				var e = n.readyState;
				if(e >= 2 && t._responseTimeoutTimer && clearTimeout(t._responseTimeoutTimer), 4 == e) {
					var r;
					try {
						r = n.status
					} catch(e) {
						r = 0
					}
					if(!r) {
						if(t.timedout || t._aborted) return;
						return t.crossDomainError()
					}
					t.emit("end")
				}
			};
			var s = function(e, n) {
				n.total > 0 && (n.percent = n.loaded / n.total * 100), n.direction = e, t.emit("progress", n)
			};
			if(this.hasListeners("progress")) try {
				n.onprogress = s.bind(null, "download"), n.upload && (n.upload.onprogress = s.bind(null, "upload"))
			} catch(e) {}
			this._appendQueryString(), this._setTimeouts();
			try {
				this.username && this.password ? n.open(this.method, this.url, !0, this.username, this.password) : n.open(this.method, this.url, !0)
			} catch(e) {
				return this.callback(e)
			}
			if(this._withCredentials && (n.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof i && !this._isHost(i)) {
				var o = this._header["content-type"],
					a = this._serializer || m.serialize[o ? o.split(";")[0] : ""];
				!a && u(o) && (a = m.serialize["application/json"]), a && (i = a(i))
			}
			for(var c in this.header) null != this.header[c] && n.setRequestHeader(c, this.header[c]);
			return this._responseType && (n.responseType = this._responseType), this.emit("request", this), n.send("undefined" != typeof i ? i : null), this
		}, m.get = function(e, t, n) {
			var r = m("GET", e);
			return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r
		}, m.head = function(e, t, n) {
			var r = m("HEAD", e);
			return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
		}, m.options = function(e, t, n) {
			var r = m("OPTIONS", e);
			return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
		}, m.del = h, m.delete = h, m.patch = function(e, t, n) {
			var r = m("PATCH", e);
			return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
		}, m.post = function(e, t, n) {
			var r = m("POST", e);
			return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
		}, m.put = function(e, t, n) {
			var r = m("PUT", e);
			return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
		}
	}, function(e, t) {
		function n(e) {
			return null !== e && "object" == typeof e
		}
		e.exports = n
	}, function(e, t) {
		var n;
		n = function() {
			return this
		}();
		try {
			n = n || Function("return this")() || (0, eval)("this")
		} catch(e) {
			"object" == typeof window && (n = window)
		}
		e.exports = n
	}, function(e, t, n) {
		"use strict";
		var r = n(11),
			i = n(6),
			s = t.removeAsync = r.removeItemAsync.bind(r),
			o = function(e, t) {
				try {
					e = JSON.parse(e)
				} catch(e) {
					return null
				}
				if(e) {
					var n = e.expiredAt && e.expiredAt < Date.now();
					return n ? s(t).then(function() {
						return null
					}) : e.value
				}
				return null
			};
		t.getAsync = function(e) {
			return e = i.applicationId + "/" + e, r.getItemAsync(e).then(function(t) {
				return o(t, e)
			})
		}, t.setAsync = function(e, t, n) {
			var s = {
				value: t
			};
			return "number" == typeof n && (s.expiredAt = Date.now() + n), r.setItemAsync(i.applicationId + "/" + e, JSON.stringify(s))
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(0),
			i = n(1),
			s = n(35),
			o = ["getItem", "setItem", "removeItem", "clear"];
		s.async ? r(o).each(function(e) {
			"function" != typeof s[e] && (s[e] = function() {
				var t = new Error("Synchronous API [" + e + "] is not available in this runtime.");
				throw t.code = "SYNC_API_NOT_AVAILABLE", t
			})
		}) : r(o).each(function(e) {
			"function" == typeof s[e] && (s[e + "Async"] = function() {
				return i.resolve(s[e].apply(s, arguments))
			})
		}), e.exports = s
	}, function(e, t, n) {
		"use strict";
		e.exports = "3.0.0-beta.1"
	}, function(e, t) {
		var n = {
			utf8: {
				stringToBytes: function(e) {
					return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
				},
				bytesToString: function(e) {
					return decodeURIComponent(escape(n.bin.bytesToString(e)))
				}
			},
			bin: {
				stringToBytes: function(e) {
					for(var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
					return t
				},
				bytesToString: function(e) {
					for(var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
					return t.join("")
				}
			}
		};
		e.exports = n
	}, function(e, t, n) {
		"use strict";
		var r = n(0);
		e.exports = function(e) {
			var t = "*";
			e.ACL = function(t) {
				var n = this;
				if(n.permissionsById = {}, r.isObject(t))
					if(t instanceof e.User) n.setReadAccess(t, !0), n.setWriteAccess(t, !0);
					else {
						if(r.isFunction(t)) throw new Error("AV.ACL() called with a function.  Did you forget ()?");
						e._objectEach(t, function(t, i) {
							if(!r.isString(i)) throw new Error("Tried to create an ACL with an invalid userId.");
							n.permissionsById[i] = {}, e._objectEach(t, function(e, t) {
								if("read" !== t && "write" !== t) throw new Error("Tried to create an ACL with an invalid permission type.");
								if(!r.isBoolean(e)) throw new Error("Tried to create an ACL with an invalid permission value.");
								n.permissionsById[i][t] = e
							})
						})
					}
			}, e.ACL.prototype.toJSON = function() {
				return r.clone(this.permissionsById)
			}, e.ACL.prototype._setAccess = function(t, n, i) {
				if(n instanceof e.User ? n = n.id : n instanceof e.Role && (n = "role:" + n.getName()), !r.isString(n)) throw new Error("userId must be a string.");
				if(!r.isBoolean(i)) throw new Error("allowed must be either true or false.");
				var s = this.permissionsById[n];
				if(!s) {
					if(!i) return;
					s = {}, this.permissionsById[n] = s
				}
				i ? this.permissionsById[n][t] = !0 : (delete s[t], r.isEmpty(s) && delete this.permissionsById[n])
			}, e.ACL.prototype._getAccess = function(t, n) {
				n instanceof e.User ? n = n.id : n instanceof e.Role && (n = "role:" + n.getName());
				var r = this.permissionsById[n];
				return !!r && !!r[t]
			}, e.ACL.prototype.setReadAccess = function(e, t) {
				this._setAccess("read", e, t)
			}, e.ACL.prototype.getReadAccess = function(e) {
				return this._getAccess("read", e)
			}, e.ACL.prototype.setWriteAccess = function(e, t) {
				this._setAccess("write", e, t)
			}, e.ACL.prototype.getWriteAccess = function(e) {
				return this._getAccess("write", e)
			}, e.ACL.prototype.setPublicReadAccess = function(e) {
				this.setReadAccess(t, e)
			}, e.ACL.prototype.getPublicReadAccess = function() {
				return this.getReadAccess(t)
			}, e.ACL.prototype.setPublicWriteAccess = function(e) {
				this.setWriteAccess(t, e)
			}, e.ACL.prototype.getPublicWriteAccess = function() {
				return this.getWriteAccess(t)
			}, e.ACL.prototype.getRoleReadAccess = function(t) {
				if(t instanceof e.Role && (t = t.getName()), r.isString(t)) return this.getReadAccess("role:" + t);
				throw new Error("role must be a AV.Role or a String")
			}, e.ACL.prototype.getRoleWriteAccess = function(t) {
				if(t instanceof e.Role && (t = t.getName()), r.isString(t)) return this.getWriteAccess("role:" + t);
				throw new Error("role must be a AV.Role or a String")
			}, e.ACL.prototype.setRoleReadAccess = function(t, n) {
				if(t instanceof e.Role && (t = t.getName()), r.isString(t)) return void this.setReadAccess("role:" + t, n);
				throw new Error("role must be a AV.Role or a String")
			}, e.ACL.prototype.setRoleWriteAccess = function(t, n) {
				if(t instanceof e.Role && (t = t.getName()), r.isString(t)) return void this.setWriteAccess("role:" + t, n);
				throw new Error("role must be a AV.Role or a String")
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(0),
			i = n(2).request;
		e.exports = function(e) {
			e.Cloud = e.Cloud || {}, r.extend(e.Cloud, {
				run: function(t, n, r) {
					var s = i("functions", t, null, "POST", e._encode(n, null, !0), r);
					return s.then(function(t) {
						return e._decode(t).result
					})
				},
				rpc: function(t, n, s) {
					return r.isArray(n) ? Promise.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK.")) : i("call", t, null, "POST", e._encodeObjectOrArray(n), s).then(function(t) {
						return e._decode(t).result
					})
				},
				getServerDate: function() {
					var t = i("date", null, null, "GET");
					return t.then(function(t) {
						return e._decode(t)
					})
				},
				requestSmsCode: function(e) {
					if(r.isString(e) && (e = {
							mobilePhoneNumber: e
						}), !e.mobilePhoneNumber) throw new Error("Missing mobilePhoneNumber.");
					var t = i("requestSmsCode", null, null, "POST", e);
					return t
				},
				verifySmsCode: function(e, t) {
					if(!e) throw new Error("Missing sms code.");
					var n = {};
					r.isString(t) && (n.mobilePhoneNumber = t);
					var s = i("verifySmsCode", e, null, "POST", n);
					return s
				}
			})
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(0);
		e.exports = function(e) {
			var t = /\s+/,
				n = Array.prototype.slice;
			e.Events = {
				on: function(e, n, r) {
					var i, s, o, a, u;
					if(!n) return this;
					for(e = e.split(t), i = this._callbacks || (this._callbacks = {}), s = e.shift(); s;) u = i[s], o = u ? u.tail : {}, o.next = a = {}, o.context = r, o.callback = n, i[s] = {
						tail: a,
						next: u ? u.next : o
					}, s = e.shift();
					return this
				},
				off: function(e, n, i) {
					var s, o, a, u, c, l;
					if(o = this._callbacks) {
						if(!(e || n || i)) return delete this._callbacks, this;
						for(e = e ? e.split(t) : r.keys(o), s = e.shift(); s;)
							if(a = o[s], delete o[s], a && (n || i)) {
								for(u = a.tail, a = a.next; a !== u;) c = a.callback, l = a.context, (n && c !== n || i && l !== i) && this.on(s, c, l), a = a.next;
								s = e.shift()
							}
						return this
					}
				},
				trigger: function(e) {
					var r, i, s, o, a, u, c;
					if(!(s = this._callbacks)) return this;
					for(u = s.all, e = e.split(t), c = n.call(arguments, 1), r = e.shift(); r;) {
						if(i = s[r])
							for(o = i.tail;
								(i = i.next) !== o;) i.callback.apply(i.context || this, c);
						if(i = u)
							for(o = i.tail, a = [r].concat(c);
								(i = i.next) !== o;) i.callback.apply(i.context || this, a);
						r = e.shift()
					}
					return this
				}
			}, e.Events.bind = e.Events.on, e.Events.unbind = e.Events.off
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(0),
			i = n(32),
			s = n(33),
			o = n(34),
			a = n(3),
			u = n(2).request,
			c = n(1),
			l = n(4),
			h = l.tap,
			f = n(5)("leancloud:file");
		e.exports = function(e) {
			var t = (e._config, function() {
					return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
				}),
				l = function(e) {
					return e.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4]
				},
				d = function(e) {
					if(e < 26) return String.fromCharCode(65 + e);
					if(e < 52) return String.fromCharCode(97 + (e - 26));
					if(e < 62) return String.fromCharCode(48 + (e - 52));
					if(62 === e) return "+";
					if(63 === e) return "/";
					throw new Error("Tried to encode large digit " + e + " in base64.")
				},
				p = function(e) {
					var t = [];
					return t.length = Math.ceil(e.length / 3), r.times(t.length, function(n) {
						var r = e[3 * n],
							i = e[3 * n + 1] || 0,
							s = e[3 * n + 2] || 0,
							o = 3 * n + 1 < e.length,
							a = 3 * n + 2 < e.length;
						t[n] = [d(r >> 2 & 63), d(r << 4 & 48 | i >> 4 & 15), o ? d(i << 2 & 60 | s >> 6 & 3) : "=", a ? d(63 & s) : "="].join("")
					}), t.join("")
				};
			e.File = function(t, i, s) {
				this.attributes = {
					name: t,
					url: "",
					metaData: {},
					base64: ""
				}, this._extName = "";
				var o = void 0;
				if(i && i.owner) o = i.owner;
				else if(!e._config.disableCurrentUser) try {
					o = e.User.current()
				} catch(e) {
					if("SYNC_API_NOT_AVAILABLE" !== e.code) throw e;
					console.warn("Get current user failed. It seems this runtime use an async storage system, please create AV.File in the callback of AV.User.currentAsync().")
				}
				if(this.attributes.metaData = {
						owner: o ? o.id : "unknown"
					}, this.set("mime_type", s), r.isArray(i) && (this.attributes.metaData.size = i.length, i = {
						base64: p(i)
					}), i && i.base64) {
					var a = n(36),
						u = a(i.base64, s);
					this._source = c.resolve({
						data: u,
						type: s
					})
				} else if(i && i.blob) !i.blob.type && s && (i.blob.type = s), i.blob.name || (i.blob.name = t), this._source = c.resolve({
					data: i.blob,
					type: s
				});
				else if("undefined" != typeof File && i instanceof File) i.size && (this.attributes.metaData.size = i.size), i.name && (this._extName = l(i.name)), this._source = c.resolve({
					data: i,
					type: s
				});
				else if("undefined" != typeof Buffer && Buffer.isBuffer(i)) this.attributes.metaData.size = i.length, this._source = c.resolve({
					data: i,
					type: s
				});
				else if(r.isString(i)) throw new Error("Creating a AV.File from a String is not yet supported.")
			}, e.File.withURL = function(t, n, r, i) {
				if(!t || !n) throw new Error("Please provide file name and url");
				var s = new e.File(t, null, i);
				if(r)
					for(var o in r) s.attributes.metaData[o] || (s.attributes.metaData[o] = r[o]);
				return s.attributes.url = n, s.attributes.metaData.__source = "external", s
			}, e.File.createWithoutData = function(t) {
				var n = new e.File;
				return n.id = t, n
			}, r.extend(e.File.prototype, {
				className: "_File",
				_toFullJSON: function(t) {
					var n = this,
						i = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
						s = r.clone(this.attributes);
					return e._objectEach(s, function(n, r) {
						s[r] = e._encode(n, t, void 0, i)
					}), e._objectEach(this._operations, function(e, t) {
						s[t] = e
					}), r.has(this, "id") && (s.objectId = this.id), r(["createdAt", "updatedAt"]).each(function(e) {
						if(r.has(n, e)) {
							var t = n[e];
							s[e] = r.isDate(t) ? t.toJSON() : t
						}
					}), i && (s.__type = "File"), s
				},
				toFullJSON: function() {
					var e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
					return this._toFullJSON(e)
				},
				toJSON: function(e, t) {
					var n = arguments.length <= 2 || void 0 === arguments[2] ? [this] : arguments[2];
					return this._toFullJSON(n, !1)
				},
				getACL: function() {
					return this._acl
				},
				setACL: function(t) {
					return t instanceof e.ACL ? void(this._acl = t) : new a(a.OTHER_CAUSE, "ACL must be a AV.ACL.")
				},
				name: function() {
					return this.get("name")
				},
				url: function() {
					return this.get("url")
				},
				get: function(e) {
					switch(e) {
						case "objectId":
							return this.id;
						case "url":
						case "name":
						case "mime_type":
						case "metaData":
						case "createdAt":
						case "updatedAt":
							return this.attributes[e];
						default:
							return this.attributes.metaData[e]
					}
				},
				set: function e() {
					for(var t = this, e = function(e, n) {
							switch(e) {
								case "name":
								case "url":
								case "mime_type":
								case "base64":
								case "metaData":
									t.attributes[e] = n;
									break;
								default:
									t.attributes.metaData[e] = n
							}
						}, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
					switch(r.length) {
						case 1:
							for(var s in r[0]) e(s, r[0][s]);
							break;
						case 2:
							e(r[0], r[1])
					}
				},
				metaData: function(e, t) {
					return e && t ? (this.attributes.metaData[e] = t, this) : e && !t ? this.attributes.metaData[e] : this.attributes.metaData
				},
				thumbnailURL: function(e, t, n, r, i) {
					var s = this.attributes.url;
					if(!s) throw new Error("Invalid url.");
					if(!e || !t || e <= 0 || t <= 0) throw new Error("Invalid width or height value.");
					if(n = n || 100, r = !r || r, n <= 0 || n > 100) throw new Error("Invalid quality value.");
					i = i || "png";
					var o = r ? 2 : 1;
					return s + "?imageView/" + o + "/w/" + e + "/h/" + t + "/q/" + n + "/format/" + i
				},
				size: function() {
					return this.metaData().size
				},
				ownerId: function() {
					return this.metaData().owner
				},
				destroy: function(e) {
					if(!this.id) return c.reject(new Error("The file id is not eixsts."));
					var t = u("files", null, this.id, "DELETE", null, e);
					return t
				},
				_fileToken: function(e) {
					var n = arguments.length <= 1 || void 0 === arguments[1] ? "fileTokens" : arguments[1],
						r = this.attributes.name,
						i = l(r);
					!i && this._extName && (r += this._extName, i = this._extName);
					var s = t() + t() + t() + t() + t() + i,
						o = {
							key: s,
							name: r,
							ACL: this._acl,
							mime_type: e,
							metaData: this.attributes.metaData
						};
					return this._qiniu_key = s, u(n, null, null, "POST", o)
				},
				save: function(e) {
					var t = this;
					if(this.id) throw new Error("File already saved. If you want to manipulate a file, use AV.Query to get it.");
					if(!this._previousSave)
						if(this._source) this._previousSave = this._source.then(function(n) {
							var r = n.data,
								a = n.type;
							return t._fileToken(a).then(function(n) {
								n.mime_type && t.set("mime_type", n.mime_type), t._token = n.token;
								var a = void 0;
								switch(n.provider) {
									case "s3":
										a = o(n, r, t, e);
										break;
									case "qcloud":
										a = i(n, r, t, e);
										break;
									case "qiniu":
									default:
										a = s(n, r, t, e)
								}
								return a.then(h(function() {
									return t._callback(!0)
								}), function(e) {
									throw t._callback(!1), e
								})
							})
						});
						else if(this.attributes.url && "external" === this.attributes.metaData.__source) {
						var n = {
							name: this.attributes.name,
							ACL: this._acl,
							metaData: this.attributes.metaData,
							mime_type: this.mimeType,
							url: this.attributes.url
						};
						this._previousSave = u("files", this.attributes.name, null, "post", n).then(function(e) {
							return t.attributes.name = e.name, t.attributes.url = e.url, t.id = e.objectId, e.size && (t.attributes.metaData.size = e.size), t
						})
					}
					return this._previousSave
				},
				_callback: function(e) {
					u("fileCallback", null, null, "post", {
						token: this._token,
						result: e
					}).catch(f), delete this._token
				},
				fetch: function(e) {
					var e = null,
						t = u("files", null, this.id, "GET", e);
					return t.then(this._finishFetch.bind(this))
				},
				_finishFetch: function(t) {
					var n = e.Object.prototype.parse(t);
					return n.attributes = {
						name: n.name,
						url: n.url,
						mime_type: n.mime_type,
						bucket: n.bucket
					}, n.attributes.metaData = n.metaData || {}, n.id = n.objectId, delete n.objectId, delete n.metaData, delete n.url, delete n.name, delete n.mime_type, delete n.bucket, r.extend(this, n), this
				}
			})
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(0);
		e.exports = function(e) {
			e.GeoPoint = function(t, n) {
				r.isArray(t) ? (e.GeoPoint._validate(t[0], t[1]), this.latitude = t[0], this.longitude = t[1]) : r.isObject(t) ? (e.GeoPoint._validate(t.latitude, t.longitude), this.latitude = t.latitude, this.longitude = t.longitude) : r.isNumber(t) && r.isNumber(n) ? (e.GeoPoint._validate(t, n), this.latitude = t, this.longitude = n) : (this.latitude = 0, this.longitude = 0);
				var i = this;
				this.__defineGetter__ && this.__defineSetter__ && (this._latitude = this.latitude, this._longitude = this.longitude, this.__defineGetter__("latitude", function() {
					return i._latitude
				}), this.__defineGetter__("longitude", function() {
					return i._longitude
				}), this.__defineSetter__("latitude", function(t) {
					e.GeoPoint._validate(t, i.longitude), i._latitude = t
				}), this.__defineSetter__("longitude", function(t) {
					e.GeoPoint._validate(i.latitude, t), i._longitude = t
				}))
			}, e.GeoPoint._validate = function(e, t) {
				if(e < -90) throw new Error("AV.GeoPoint latitude " + e + " < -90.0.");
				if(e > 90) throw new Error("AV.GeoPoint latitude " + e + " > 90.0.");
				if(t < -180) throw new Error("AV.GeoPoint longitude " + t + " < -180.0.");
				if(t > 180) throw new Error("AV.GeoPoint longitude " + t + " > 180.0.")
			}, e.GeoPoint.current = function() {
				return new e.Promise(function(t, n) {
					navigator.geolocation.getCurrentPosition(function(n) {
						t(new e.GeoPoint({
							latitude: n.coords.latitude,
							longitude: n.coords.longitude
						}))
					}, n)
				})
			}, r.extend(e.GeoPoint.prototype, {
				toJSON: function() {
					return e.GeoPoint._validate(this.latitude, this.longitude), {
						__type: "GeoPoint",
						latitude: this.latitude,
						longitude: this.longitude
					}
				},
				radiansTo: function(e) {
					var t = Math.PI / 180,
						n = this.latitude * t,
						r = this.longitude * t,
						i = e.latitude * t,
						s = e.longitude * t,
						o = n - i,
						a = r - s,
						u = Math.sin(o / 2),
						c = Math.sin(a / 2),
						l = u * u + Math.cos(n) * Math.cos(i) * c * c;
					return l = Math.min(1, l), 2 * Math.asin(Math.sqrt(l))
				},
				kilometersTo: function(e) {
					return 6371 * this.radiansTo(e)
				},
				milesTo: function(e) {
					return 3958.8 * this.radiansTo(e)
				}
			})
		}
	}, function(e, t, n) {
		"use strict";
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
			},
			i = n(6),
			s = n(2),
			o = function(e, t, n, r) {
				i.applicationId && e !== i.applicationId && t !== i.applicationKey && n !== i.masterKey && console.warn("LeanCloud SDK is already initialized, please do not reinitialize it."), i.applicationId = e, i.applicationKey = t, i.masterKey = n, i._useMasterKey = !1
			},
			a = function() {
				console.warn("MasterKey is not supposed to be used in browser.")
			};
		i.init = function() {
			switch(arguments.length) {
				case 1:
					var e = arguments.length <= 0 ? void 0 : arguments[0];
					if("object" !== ("undefined" == typeof e ? "undefined" : r(e))) throw new Error("AV.init(): Parameter is not correct.");
					e.masterKey && a(), o(e.appId, e.appKey, e.masterKey, e.hookKey), s.setServerUrlByRegion(e.region), i._config.disableCurrentUser = e.disableCurrentUser;
					break;
				case 2:
				case 3:
					console.warn("Please use AV.init() to replace AV.initialize(), AV.init() need an Object param, like { appId: 'YOUR_APP_ID', appKey: 'YOUR_APP_KEY' } . Docs: https://leancloud.cn/docs/sdk_setup-js.html"), 3 === arguments.length && a(), o.apply(void 0, arguments), s.setServerUrlByRegion("cn")
			}
		}, i.initialize = i.init
	}, function(e, t, n) {
		"use strict";
		var r = n(0),
			i = n(3),
			s = n(2).request;
		e.exports = function(e) {
			e.Insight = e.Insight || {}, r.extend(e.Insight, {
				startJob: function(t, n) {
					if(!t || !t.sql) throw new Error("Please provide the sql to run the job.");
					var r = {
							jobConfig: t,
							appId: e.applicationId
						},
						i = s("bigquery", "jobs", null, "POST", e._encode(r, null, !0), n);
					return i.then(function(t) {
						return e._decode(t).id
					})
				},
				on: function(e, t) {}
			}), e.Insight.JobQuery = function(e, t) {
				if(!e) throw new Error("Please provide the job id.");
				this.id = e, this.className = t, this._skip = 0, this._limit = 100
			}, r.extend(e.Insight.JobQuery.prototype, {
				skip: function(e) {
					return this._skip = e, this
				},
				limit: function(e) {
					return this._limit = e, this
				},
				find: function(t) {
					var n = {
							skip: this._skip,
							limit: this._limit
						},
						r = s("bigquery", "jobs", this.id, "GET", n, t);
					return r.then(function(t) {
						return t.error ? e.Promise.reject(new i(t.code, t.error)) : e.Promise.resolve(t)
					})
				}
			})
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(0),
			i = n(3),
			s = n(2).request,
			o = n(4),
			a = ["objectId", "createdAt", "updatedAt"],
			u = function(e) {
				if(a.indexOf(e) !== -1) throw new Error("key[" + e + "] is reserved")
			};
		e.exports = function(e) {
			e.Object = function(t, n) {
				if(r.isString(t)) return e.Object._create.apply(this, arguments);
				t = t || {}, n && n.parse && (t = this.parse(t), t = this._mergeMagicFields(t));
				var i = e._getValue(this, "defaults");
				i && (t = r.extend({}, i, t)), n && n.collection && (this.collection = n.collection), this._serverData = {}, this._opSetQueue = [{}], this._flags = {}, this.attributes = {}, this._hashedJSON = {}, this._escapedAttributes = {}, this.cid = r.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(t, {
					silent: !0
				}), this.changed = {}, this._silent = {}, this._pending = {}, this._hasData = !0, this._previousAttributes = r.clone(this.attributes), this.initialize.apply(this, arguments)
			}, e.Object.saveAll = function(t, n) {
				return e.Object._deepSaveAsync(t, null, n)
			}, e.Object.fetchAll = function(t, n) {
				return e.Promise.resolve().then(function() {
					return s("batch", null, null, "POST", {
						requests: r.map(t, function(e) {
							if(!e.className) throw new Error("object must have className to fetch");
							if(!e.id) throw new Error("object must have id to fetch");
							if(e.dirty()) throw new Error("object is modified but not saved");
							return {
								method: "GET",
								path: "/1.1/classes/" + e.className + "/" + e.id
							}
						})
					}, n)
				}).then(function(e) {
					return r.forEach(t, function(t, n) {
						if(!e[n].success) {
							var r = new Error(e[n].error.error);
							throw r.code = e[n].error.code, r
						}
						t._finishFetch(t.parse(e[n].success))
					}), t
				})
			}, r.extend(e.Object.prototype, e.Events, {
				_fetchWhenSave: !1,
				initialize: function() {},
				fetchWhenSave: function(e) {
					if(console.warn("AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead."), !r.isBoolean(e)) throw new Error("Expect boolean value for fetchWhenSave");
					this._fetchWhenSave = e
				},
				getObjectId: function() {
					return this.id
				},
				getCreatedAt: function() {
					return this.createdAt || this.get("createdAt")
				},
				getUpdatedAt: function() {
					return this.updatedAt || this.get("updatedAt")
				},
				toJSON: function(e, t) {
					var n = arguments.length <= 2 || void 0 === arguments[2] ? [] : arguments[2];
					return this._toFullJSON(n, !1)
				},
				toFullJSON: function() {
					var e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
					return this._toFullJSON(e)
				},
				_toFullJSON: function(t) {
					var n = this,
						i = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
						s = r.clone(this.attributes);
					if(r.isArray(t)) var o = t.concat(this);
					return e._objectEach(s, function(t, n) {
						s[n] = e._encode(t, o, void 0, i)
					}), e._objectEach(this._operations, function(e, t) {
						s[t] = e
					}), r.has(this, "id") && (s.objectId = this.id), r(["createdAt", "updatedAt"]).each(function(e) {
						if(r.has(n, e)) {
							var t = n[e];
							s[e] = r.isDate(t) ? t.toJSON() : t
						}
					}), i && (s.__type = "Object", r.isArray(t) && t.length && (s.__type = "Pointer"), s.className = this.className), s
				},
				_refreshCache: function() {
					var t = this;
					t._refreshingCache || (t._refreshingCache = !0, e._objectEach(this.attributes, function(n, i) {
						n instanceof e.Object ? n._refreshCache() : r.isObject(n) && t._resetCacheForKey(i) && t.set(i, new e.Op.Set(n), {
							silent: !0
						})
					}), delete t._refreshingCache)
				},
				dirty: function(e) {
					this._refreshCache();
					var t = r.last(this._opSetQueue);
					return e ? !!t[e] : !this.id || r.keys(t).length > 0
				},
				_toPointer: function() {
					return {
						__type: "Pointer",
						className: this.className,
						objectId: this.id
					}
				},
				get: function(e) {
					switch(e) {
						case "objectId":
							return this.id;
						case "createdAt":
						case "updatedAt":
							return this[e];
						default:
							return this.attributes[e]
					}
				},
				relation: function(t) {
					var n = this.get(t);
					if(n) {
						if(!(n instanceof e.Relation)) throw new Error("Called relation() on non-relation field " + t);
						return n._ensureParentAndKey(this, t), n
					}
					return new e.Relation(this, t)
				},
				escape: function(e) {
					var t = this._escapedAttributes[e];
					if(t) return t;
					var n, i = this.attributes[e];
					return n = o.isNullOrUndefined(i) ? "" : r.escape(i.toString()), this._escapedAttributes[e] = n, n
				},
				has: function(e) {
					return !o.isNullOrUndefined(this.attributes[e])
				},
				_mergeMagicFields: function(t) {
					var n = this,
						i = ["objectId", "createdAt", "updatedAt"];
					return e._arrayEach(i, function(i) {
						t[i] && ("objectId" === i ? n.id = t[i] : "createdAt" !== i && "updatedAt" !== i || r.isDate(t[i]) ? n[i] = t[i] : n[i] = e._parseDate(t[i]), delete t[i])
					}), t
				},
				_startSave: function() {
					this._opSetQueue.push({})
				},
				_cancelSave: function() {
					var t = r.first(this._opSetQueue);
					this._opSetQueue = r.rest(this._opSetQueue);
					var n = r.first(this._opSetQueue);
					e._objectEach(t, function(e, r) {
						var i = t[r],
							s = n[r];
						i && s ? n[r] = s._mergeWithPrevious(i) : i && (n[r] = i)
					}), this._saving = this._saving - 1
				},
				_finishSave: function(t) {
					var n = {};
					e._traverse(this.attributes, function(t) {
						t instanceof e.Object && t.id && t._hasData && (n[t.id] = t)
					});
					var i = r.first(this._opSetQueue);
					this._opSetQueue = r.rest(this._opSetQueue), this._applyOpSet(i, this._serverData), this._mergeMagicFields(t);
					var s = this;
					e._objectEach(t, function(t, r) {
						s._serverData[r] = e._decode(t, r);
						var i = e._traverse(s._serverData[r], function(t) {
							if(t instanceof e.Object && n[t.id]) return n[t.id]
						});
						i && (s._serverData[r] = i)
					}), this._rebuildAllEstimatedData(), this._saving = this._saving - 1
				},
				_finishFetch: function(t, n) {
					this._opSetQueue = [{}], this._mergeMagicFields(t);
					var r = this;
					e._objectEach(t, function(t, n) {
						r._serverData[n] = e._decode(t, n)
					}), this._rebuildAllEstimatedData(), this._refreshCache(), this._opSetQueue = [{}], this._hasData = n
				},
				_applyOpSet: function(t, n) {
					var r = this;
					e._objectEach(t, function(t, i) {
						n[i] = t._estimate(n[i], r, i), n[i] === e.Op._UNSET && delete n[i]
					})
				},
				_resetCacheForKey: function(t) {
					var n = this.attributes[t];
					if(r.isObject(n) && !(n instanceof e.Object) && !(n instanceof e.File)) {
						n = n.toJSON ? n.toJSON() : n;
						var i = JSON.stringify(n);
						if(this._hashedJSON[t] !== i) {
							var s = !!this._hashedJSON[t];
							return this._hashedJSON[t] = i, s
						}
					}
					return !1
				},
				_rebuildEstimatedDataForKey: function(t) {
					var n = this;
					delete this.attributes[t], this._serverData[t] && (this.attributes[t] = this._serverData[t]), e._arrayEach(this._opSetQueue, function(r) {
						var i = r[t];
						i && (n.attributes[t] = i._estimate(n.attributes[t], n, t), n.attributes[t] === e.Op._UNSET ? delete n.attributes[t] : n._resetCacheForKey(t))
					})
				},
				_rebuildAllEstimatedData: function() {
					var t = this,
						n = r.clone(this.attributes);
					this.attributes = r.clone(this._serverData), e._arrayEach(this._opSetQueue, function(n) {
						t._applyOpSet(n, t.attributes), e._objectEach(n, function(e, n) {
							t._resetCacheForKey(n)
						})
					}), e._objectEach(n, function(e, n) {
						t.attributes[n] !== e && t.trigger("change:" + n, t, t.attributes[n], {})
					}), e._objectEach(this.attributes, function(e, i) {
						r.has(n, i) || t.trigger("change:" + i, t, e, {})
					})
				},
				set: function(t, n, i) {
					var s;
					if(r.isObject(t) || o.isNullOrUndefined(t) ? (s = r.mapObject(t, function(t, n) {
							return u(n), e._decode(t, n)
						}), i = n) : (s = {}, u(t), s[t] = e._decode(n, t)), i = i || {}, !s) return this;
					s instanceof e.Object && (s = s.attributes), i.unset && e._objectEach(s, function(t, n) {
						s[n] = new e.Op.Unset
					});
					var a = r.clone(s),
						c = this;
					e._objectEach(a, function(t, n) {
						t instanceof e.Op && (a[n] = t._estimate(c.attributes[n], c, n), a[n] === e.Op._UNSET && delete a[n])
					}), this._validate(s, i), i.changes = {};
					var l = this._escapedAttributes;
					this._previousAttributes || {};
					return e._arrayEach(r.keys(s), function(t) {
						var n = s[t];
						n instanceof e.Relation && (n.parent = c), n instanceof e.Op || (n = new e.Op.Set(n));
						var o = !0;
						n instanceof e.Op.Set && r.isEqual(c.attributes[t], n.value) && (o = !1), o && (delete l[t], i.silent ? c._silent[t] = !0 : i.changes[t] = !0);
						var a = r.last(c._opSetQueue);
						a[t] = n._mergeWithPrevious(a[t]), c._rebuildEstimatedDataForKey(t), o ? (c.changed[t] = c.attributes[t], i.silent || (c._pending[t] = !0)) : (delete c.changed[t], delete c._pending[t])
					}), i.silent || this.change(i), this
				},
				unset: function(e, t) {
					return t = t || {}, t.unset = !0, this.set(e, null, t)
				},
				increment: function(t, n) {
					return(r.isUndefined(n) || r.isNull(n)) && (n = 1), this.set(t, new e.Op.Increment(n))
				},
				add: function(t, n) {
					return this.set(t, new e.Op.Add(o.ensureArray(n)))
				},
				addUnique: function(t, n) {
					return this.set(t, new e.Op.AddUnique(o.ensureArray(n)))
				},
				remove: function(t, n) {
					return this.set(t, new e.Op.Remove(o.ensureArray(n)))
				},
				op: function(e) {
					return r.last(this._opSetQueue)[e]
				},
				clear: function(e) {
					e = e || {}, e.unset = !0;
					var t = r.extend(this.attributes, this._operations);
					return this.set(t, e)
				},
				_getSaveJSON: function() {
					var t = r.clone(r.first(this._opSetQueue));
					return e._objectEach(t, function(e, n) {
						t[n] = e.toJSON()
					}), t
				},
				_canBeSerialized: function() {
					return e.Object._canBeSerializedAsValue(this.attributes)
				},
				fetch: function() {
					var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
						t = arguments[1];
					r.isArray(e.keys) && (e.keys = e.keys.join(",")), r.isArray(e.include) && (e.include = e.include.join(","));
					var n = this,
						i = s("classes", this.className, this.id, "GET", e, t);
					return i.then(function(e) {
						return n._finishFetch(n.parse(e), !0), n
					})
				},
				save: function(t, n, i) {
					var a, u, c;
					r.isObject(t) || o.isNullOrUndefined(t) ? (a = t, c = n) : (a = {}, a[t] = n, c = i), c = r.clone(c) || {}, c.wait && (u = r.clone(this.attributes));
					var l = r.clone(c) || {};
					l.wait && (l.silent = !0), a && this.set(a, l);
					var h = this;
					h._refreshCache();
					var f = [],
						d = [];
					return e.Object._findUnsavedChildren(h.attributes, f, d), f.length + d.length > 0 ? e.Object._deepSaveAsync(this.attributes, h, c).then(function() {
						return h.save(null, c)
					}) : (this._startSave(), this._saving = (this._saving || 0) + 1, this._allPreviousSaves = this._allPreviousSaves || e.Promise.resolve(), this._allPreviousSaves = this._allPreviousSaves.catch(function(e) {}).then(function() {
						var e = h.id ? "PUT" : "POST",
							t = h._getSaveJSON();
						if(h._fetchWhenSave && (t._fetchWhenSave = !0), c.fetchWhenSave && (t._fetchWhenSave = !0), c.query) {
							var n;
							if("function" == typeof c.query.toJSON && (n = c.query.toJSON(), n && (t._where = n.where)), !t._where) {
								var i = new Error("options.query is not an AV.Query");
								throw i
							}
						}
						r.extend(t, h._flags);
						var o = "classes",
							f = h.className;
						"_User" !== h.className || h.id || (o = "users", f = null);
						var d = c._makeRequest || s,
							p = d(o, f, h.id, e, t, c);
						return p = p.then(function(e) {
							var t = h.parse(e);
							return c.wait && (t = r.extend(a || {}, t)), h._finishSave(t), c.wait && h.set(u, l), h
						}, function(e) {
							throw h._cancelSave(), e
						})
					}), this._allPreviousSaves)
				},
				destroy: function(e) {
					e = e || {};
					var t = this,
						n = function() {
							t.trigger("destroy", t, t.collection, e)
						};
					if(!this.id) return n();
					e.wait || n();
					var r = s("classes", this.className, this.id, "DELETE", this._flags, e);
					return r.then(function() {
						return e.wait && n(), t
					})
				},
				parse: function(t) {
					var n = r.clone(t);
					return r(["createdAt", "updatedAt"]).each(function(t) {
						n[t] && (n[t] = e._parseDate(n[t]))
					}), n.updatedAt || (n.updatedAt = n.createdAt), n
				},
				clone: function() {
					return new this.constructor(this.attributes)
				},
				isNew: function() {
					return !this.id
				},
				change: function(t) {
					t = t || {};
					var n = this._changing;
					this._changing = !0;
					var i = this;
					e._objectEach(this._silent, function(e) {
						i._pending[e] = !0
					});
					var s = r.extend({}, t.changes, this._silent);
					if(this._silent = {}, e._objectEach(s, function(e, n) {
							i.trigger("change:" + n, i, i.get(n), t)
						}), n) return this;
					for(var o = function(e, t) {
							i._pending[t] || i._silent[t] || delete i.changed[t]
						}; !r.isEmpty(this._pending);) this._pending = {}, this.trigger("change", this, t), e._objectEach(this.changed, o), i._previousAttributes = r.clone(this.attributes);
					return this._changing = !1, this
				},
				hasChanged: function(e) {
					return arguments.length ? this.changed && r.has(this.changed, e) : !r.isEmpty(this.changed)
				},
				changedAttributes: function(t) {
					if(!t) return !!this.hasChanged() && r.clone(this.changed);
					var n = {},
						i = this._previousAttributes;
					return e._objectEach(t, function(e, t) {
						r.isEqual(i[t], e) || (n[t] = e)
					}), n
				},
				previous: function(e) {
					return arguments.length && this._previousAttributes ? this._previousAttributes[e] : null
				},
				previousAttributes: function() {
					return r.clone(this._previousAttributes)
				},
				isValid: function() {
					try {
						this.validate(this.attributes)
					} catch(e) {
						return !1
					}
					return !0
				},
				validate: function(t) {
					if(r.has(t, "ACL") && !(t.ACL instanceof e.ACL)) throw new i(i.OTHER_CAUSE, "ACL must be a AV.ACL.")
				},
				_validate: function(e, t) {
					!t.silent && this.validate && (e = r.extend({}, this.attributes, e), this.validate(e))
				},
				getACL: function() {
					return this.get("ACL")
				},
				setACL: function(e, t) {
					return this.set("ACL", e, t)
				},
				disableBeforeHook: function() {
					this.ignoreHook("beforeSave"), this.ignoreHook("beforeUpdate"), this.ignoreHook("beforeDelete")
				},
				disableAfterHook: function() {
					this.ignoreHook("afterSave"), this.ignoreHook("afterUpdate"), this.ignoreHook("afterDelete")
				},
				ignoreHook: function(t) {
					r.contains(["beforeSave", "afterSave", "beforeUpdate", "afterUpdate", "beforeDelete", "afterDelete"], t) || console.trace("Unsupported hookName: " + t), e.hookKey || console.trace("ignoreHook required hookKey"), this._flags.__ignore_hooks || (this._flags.__ignore_hooks = []), this._flags.__ignore_hooks.push(t)
				}
			}), e.Object.createWithoutData = function(t, n, r) {
				var i = new e.Object(t);
				return i.id = n, i._hasData = r, i
			}, e.Object.destroyAll = function(t) {
				var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
				if(!t || 0 === t.length) return e.Promise.resolve();
				var i = r.groupBy(t, function(e) {
						return JSON.stringify({
							className: e.className,
							flags: e._flags
						})
					}),
					o = {
						requests: r.map(i, function(e) {
							var t = r.map(e, "id").join(",");
							return {
								method: "DELETE",
								path: "/1.1/classes/" + e[0].className + "/" + t,
								body: e[0]._flags
							}
						})
					};
				return s("batch", null, null, "POST", o, n)
			}, e.Object._getSubclass = function(t) {
				if(!r.isString(t)) throw new Error("AV.Object._getSubclass requires a string argument.");
				var n = e.Object._classMap[t];
				return n || (n = e.Object.extend(t), e.Object._classMap[t] = n), n
			}, e.Object._create = function(t, n, r) {
				var i = e.Object._getSubclass(t);
				return new i(n, r)
			}, e.Object._classMap = {}, e.Object._extend = e._extend, e.Object.new = function(t, n) {
				return new e.Object(t, n)
			}, e.Object.extend = function(t, n, i) {
				if(!r.isString(t)) {
					if(t && r.has(t, "className")) return e.Object.extend(t.className, t, n);
					throw new Error("AV.Object.extend's first argument should be the className.")
				}
				"User" === t && (t = "_User");
				var s = null;
				if(r.has(e.Object._classMap, t)) {
					var o = e.Object._classMap[t];
					if(!n && !i) return o;
					s = o._extend(n, i)
				} else n = n || {}, n._className = t, s = this._extend(n, i);
				return s.extend = function(n) {
					if(r.isString(n) || n && r.has(n, "className")) return e.Object.extend.apply(s, arguments);
					var i = [t].concat(r.toArray(arguments));
					return e.Object.extend.apply(s, i)
				}, s.new = function(e, t) {
					return new s(e, t)
				}, e.Object._classMap[t] = s, s
			}, Object.defineProperty(e.Object.prototype, "className", {
				get: function() {
					var e = this._className || this.constructor._LCClassName || this.constructor.name;
					return "User" === e ? "_User" : e
				}
			}), e.Object.register = function(t, n) {
				if(!(t.prototype instanceof e.Object)) throw new Error("registered class is not a subclass of AV.Object");
				var r = n || t.name;
				if(!r.length) throw new Error("registered class must be named");
				n && (t._LCClassName = n), e.Object._classMap[r] = t
			}, e.Object._findUnsavedChildren = function(t, n, r) {
				e._traverse(t, function(t) {
					return t instanceof e.Object ? (t._refreshCache(), void(t.dirty() && n.push(t))) : t instanceof e.File ? void(t.url() || t.id || r.push(t)) : void 0
				})
			}, e.Object._canBeSerializedAsValue = function(t) {
				var n = !0;
				return t instanceof e.Object || t instanceof e.File ? n = !!t.id : r.isArray(t) ? e._arrayEach(t, function(t) {
					e.Object._canBeSerializedAsValue(t) || (n = !1)
				}) : r.isObject(t) && e._objectEach(t, function(t) {
					e.Object._canBeSerializedAsValue(t) || (n = !1)
				}), n
			}, e.Object._deepSaveAsync = function(t, n, o) {
				var a = [],
					u = [];
				e.Object._findUnsavedChildren(t, a, u), n && (a = r.filter(a, function(e) {
					return e != n
				}));
				var c = e.Promise.resolve();
				r.each(u, function(e) {
					c = c.then(function() {
						return e.save()
					})
				});
				var l = r.uniq(a),
					h = r.uniq(l);
				return c.then(function() {
					return e.Promise._continueWhile(function() {
						return h.length > 0
					}, function() {
						var t = [],
							n = [];
						if(e._arrayEach(h, function(e) {
								return t.length > 20 ? void n.push(e) : void(e._canBeSerialized() ? t.push(e) : n.push(e))
							}), h = n, 0 === t.length) return e.Promise.reject(new i(i.OTHER_CAUSE, "Tried to save a batch with a cycle."));
						var a = e.Promise.resolve(r.map(t, function(t) {
								return t._allPreviousSaves || e.Promise.resolve()
							})),
							u = a.then(function() {
								return s("batch", null, null, "POST", {
									requests: r.map(t, function(e) {
										var t = e._getSaveJSON();
										r.extend(t, e._flags);
										var n = "POST",
											i = "/1.1/classes/" + e.className;
										return e.id && (i = i + "/" + e.id, n = "PUT"), e._startSave(), {
											method: n,
											path: i,
											body: t
										}
									})
								}, o).then(function(n) {
									var r;
									if(e._arrayEach(t, function(e, t) {
											n[t].success ? e._finishSave(e.parse(n[t].success)) : (r = r || n[t].error, e._cancelSave())
										}), r) return e.Promise.reject(new i(r.code, r.error))
								})
							});
						return e._arrayEach(t, function(e) {
							e._allPreviousSaves = u
						}), u
					})
				}).then(function() {
					return t
				})
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(0);
		e.exports = function(e) {
			e.Op = function() {
				this._initialize.apply(this, arguments)
			}, r.extend(e.Op.prototype, {
				_initialize: function() {}
			}), r.extend(e.Op, {
				_extend: e._extend,
				_opDecoderMap: {},
				_registerDecoder: function(t, n) {
					e.Op._opDecoderMap[t] = n
				},
				_decode: function(t) {
					var n = e.Op._opDecoderMap[t.__op];
					return n ? n(t) : void 0
				}
			}), e.Op._registerDecoder("Batch", function(t) {
				var n = null;
				return e._arrayEach(t.ops, function(t) {
					t = e.Op._decode(t), n = t._mergeWithPrevious(n)
				}), n
			}), e.Op.Set = e.Op._extend({
				_initialize: function(e) {
					this._value = e
				},
				value: function() {
					return this._value
				},
				toJSON: function() {
					return e._encode(this.value())
				},
				_mergeWithPrevious: function(e) {
					return this
				},
				_estimate: function(e) {
					return this.value()
				}
			}), e.Op._UNSET = {}, e.Op.Unset = e.Op._extend({
				toJSON: function() {
					return {
						__op: "Delete"
					}
				},
				_mergeWithPrevious: function(e) {
					return this
				},
				_estimate: function(t) {
					return e.Op._UNSET
				}
			}), e.Op._registerDecoder("Delete", function(t) {
				return new e.Op.Unset
			}), e.Op.Increment = e.Op._extend({
				_initialize: function(e) {
					this._amount = e
				},
				amount: function() {
					return this._amount
				},
				toJSON: function() {
					return {
						__op: "Increment",
						amount: this._amount
					}
				},
				_mergeWithPrevious: function(t) {
					if(t) {
						if(t instanceof e.Op.Unset) return new e.Op.Set(this.amount());
						if(t instanceof e.Op.Set) return new e.Op.Set(t.value() + this.amount());
						if(t instanceof e.Op.Increment) return new e.Op.Increment(this.amount() + t.amount());
						throw new Error("Op is invalid after previous op.")
					}
					return this
				},
				_estimate: function(e) {
					return e ? e + this.amount() : this.amount()
				}
			}), e.Op._registerDecoder("Increment", function(t) {
				return new e.Op.Increment(t.amount)
			}), e.Op.Add = e.Op._extend({
				_initialize: function(e) {
					this._objects = e
				},
				objects: function() {
					return this._objects
				},
				toJSON: function() {
					return {
						__op: "Add",
						objects: e._encode(this.objects())
					}
				},
				_mergeWithPrevious: function(t) {
					if(t) {
						if(t instanceof e.Op.Unset) return new e.Op.Set(this.objects());
						if(t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
						if(t instanceof e.Op.Add) return new e.Op.Add(t.objects().concat(this.objects()));
						throw new Error("Op is invalid after previous op.")
					}
					return this
				},
				_estimate: function(e) {
					return e ? e.concat(this.objects()) : r.clone(this.objects())
				}
			}), e.Op._registerDecoder("Add", function(t) {
				return new e.Op.Add(e._decode(t.objects))
			}), e.Op.AddUnique = e.Op._extend({
				_initialize: function(e) {
					this._objects = r.uniq(e)
				},
				objects: function() {
					return this._objects
				},
				toJSON: function() {
					return {
						__op: "AddUnique",
						objects: e._encode(this.objects())
					}
				},
				_mergeWithPrevious: function(t) {
					if(t) {
						if(t instanceof e.Op.Unset) return new e.Op.Set(this.objects());
						if(t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
						if(t instanceof e.Op.AddUnique) return new e.Op.AddUnique(this._estimate(t.objects()));
						throw new Error("Op is invalid after previous op.")
					}
					return this
				},
				_estimate: function(t) {
					if(t) {
						var n = r.clone(t);
						return e._arrayEach(this.objects(), function(t) {
							if(t instanceof e.Object && t.id) {
								var i = r.find(n, function(n) {
									return n instanceof e.Object && n.id === t.id
								});
								if(i) {
									var s = r.indexOf(n, i);
									n[s] = t
								} else n.push(t)
							} else r.contains(n, t) || n.push(t)
						}), n
					}
					return r.clone(this.objects())
				}
			}), e.Op._registerDecoder("AddUnique", function(t) {
				return new e.Op.AddUnique(e._decode(t.objects))
			}), e.Op.Remove = e.Op._extend({
				_initialize: function(e) {
					this._objects = r.uniq(e)
				},
				objects: function() {
					return this._objects
				},
				toJSON: function() {
					return {
						__op: "Remove",
						objects: e._encode(this.objects())
					}
				},
				_mergeWithPrevious: function(t) {
					if(t) {
						if(t instanceof e.Op.Unset) return t;
						if(t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
						if(t instanceof e.Op.Remove) return new e.Op.Remove(r.union(t.objects(), this.objects()));
						throw new Error("Op is invalid after previous op.")
					}
					return this
				},
				_estimate: function(t) {
					if(t) {
						var n = r.difference(t, this.objects());
						return e._arrayEach(this.objects(), function(t) {
							t instanceof e.Object && t.id && (n = r.reject(n, function(n) {
								return n instanceof e.Object && n.id === t.id
							}))
						}), n
					}
					return []
				}
			}), e.Op._registerDecoder("Remove", function(t) {
				return new e.Op.Remove(e._decode(t.objects))
			}), e.Op.Relation = e.Op._extend({
				_initialize: function(t, n) {
					this._targetClassName = null;
					var i = this,
						s = function(t) {
							if(t instanceof e.Object) {
								if(!t.id) throw new Error("You can't add an unsaved AV.Object to a relation.");
								if(i._targetClassName || (i._targetClassName = t.className), i._targetClassName !== t.className) throw new Error("Tried to create a AV.Relation with 2 different types: " + i._targetClassName + " and " + t.className + ".");
								return t.id
							}
							return t
						};
					this.relationsToAdd = r.uniq(r.map(t, s)), this.relationsToRemove = r.uniq(r.map(n, s))
				},
				added: function() {
					var t = this;
					return r.map(this.relationsToAdd, function(n) {
						var r = e.Object._create(t._targetClassName);
						return r.id = n, r
					})
				},
				removed: function() {
					var t = this;
					return r.map(this.relationsToRemove, function(n) {
						var r = e.Object._create(t._targetClassName);
						return r.id = n, r
					})
				},
				toJSON: function() {
					var e = null,
						t = null,
						n = this,
						i = function(e) {
							return {
								__type: "Pointer",
								className: n._targetClassName,
								objectId: e
							}
						},
						s = null;
					return this.relationsToAdd.length > 0 && (s = r.map(this.relationsToAdd, i), e = {
						__op: "AddRelation",
						objects: s
					}), this.relationsToRemove.length > 0 && (s = r.map(this.relationsToRemove, i), t = {
						__op: "RemoveRelation",
						objects: s
					}), e && t ? {
						__op: "Batch",
						ops: [e, t]
					} : e || t || {}
				},
				_mergeWithPrevious: function(t) {
					if(t) {
						if(t instanceof e.Op.Unset) throw new Error("You can't modify a relation after deleting it.");
						if(t instanceof e.Op.Relation) {
							if(t._targetClassName && t._targetClassName !== this._targetClassName) throw new Error("Related object must be of class " + t._targetClassName + ", but " + this._targetClassName + " was passed in.");
							var n = r.union(r.difference(t.relationsToAdd, this.relationsToRemove), this.relationsToAdd),
								i = r.union(r.difference(t.relationsToRemove, this.relationsToAdd), this.relationsToRemove),
								s = new e.Op.Relation(n, i);
							return s._targetClassName = this._targetClassName, s
						}
						throw new Error("Op is invalid after previous op.")
					}
					return this
				},
				_estimate: function(t, n, r) {
					if(t) {
						if(t instanceof e.Relation) {
							if(this._targetClassName)
								if(t.targetClassName) {
									if(t.targetClassName !== this._targetClassName) throw new Error("Related object must be a " + t.targetClassName + ", but a " + this._targetClassName + " was passed in.")
								} else t.targetClassName = this._targetClassName;
							return t
						}
						throw new Error("Op is invalid after previous op.")
					}
					var i = new e.Relation(n, r);
					i.targetClassName = this._targetClassName
				}
			}), e.Op._registerDecoder("AddRelation", function(t) {
				return new e.Op.Relation(e._decode(t.objects), [])
			}), e.Op._registerDecoder("RemoveRelation", function(t) {
				return new e.Op.Relation([], e._decode(t.objects))
			})
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(2).request;
		e.exports = function(e) {
			e.Installation = e.Object.extend("_Installation"), e.Push = e.Push || {}, e.Push.send = function(e, t) {
				if(e.where && (e.where = e.where.toJSON().where), e.where && e.cql) throw new Error("Both where and cql can't be set");
				if(e.push_time && (e.push_time = e.push_time.toJSON()), e.expiration_time && (e.expiration_time = e.expiration_time.toJSON()), e.expiration_time && e.expiration_time_interval) throw new Error("Both expiration_time and expiration_time_interval can't be set");
				var n = r("push", null, null, "POST", e, t);
				return n
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(0),
			i = n(5)("leancloud:query"),
			s = n(1),
			o = n(3),
			a = n(2).request,
			u = n(4),
			c = u.ensureArray,
			l = function(e, t) {
				if(void 0 === e) throw new Error(t)
			};
		e.exports = function(e) {
			e.Query = function(t) {
				r.isString(t) && (t = e.Object._getSubclass(t)), this.objectClass = t, this.className = t.prototype.className, this._where = {}, this._include = [], this._select = [], this._limit = -1, this._skip = 0, this._extraOptions = {}
			}, e.Query.or = function() {
				var t = r.toArray(arguments),
					n = null;
				e._arrayEach(t, function(e) {
					if(r.isNull(n) && (n = e.className), n !== e.className) throw new Error("All queries must be for the same class")
				});
				var i = new e.Query(n);
				return i._orQuery(t), i
			}, e.Query.and = function() {
				var t = r.toArray(arguments),
					n = null;
				e._arrayEach(t, function(e) {
					if(r.isNull(n) && (n = e.className), n !== e.className) throw new Error("All queries must be for the same class")
				});
				var i = new e.Query(n);
				return i._andQuery(t), i
			}, e.Query.doCloudQuery = function(t, n, i) {
				var s = {
					cql: t
				};
				r.isArray(n) ? s.pvalues = n : i = n;
				var o = a("cloudQuery", null, null, "GET", s, i);
				return o.then(function(t) {
					var n = new e.Query(t.className),
						i = r.map(t.results, function(e) {
							var r = n._newObject(t);
							return r._finishFetch && r._finishFetch(n._processResult(e), !0), r
						});
					return {
						results: i,
						count: t.count,
						className: t.className
					}
				})
			}, e.Query._extend = e._extend, r.extend(e.Query.prototype, {
				_processResult: function(e) {
					return e
				},
				get: function(e, t) {
					if(!e) {
						var n = new o(o.OBJECT_NOT_FOUND, "Object not found.");
						throw n
					}
					var r = this,
						i = r._newObject();
					i.id = e;
					var s = r.toJSON(),
						a = {};
					return s.keys && (a.keys = s.keys), s.include && (a.include = s.include), i.fetch(a, t)
				},
				toJSON: function() {
					var t = {
						where: this._where
					};
					return this._include.length > 0 && (t.include = this._include.join(",")), this._select.length > 0 && (t.keys = this._select.join(",")), this._limit >= 0 && (t.limit = this._limit), this._skip > 0 && (t.skip = this._skip), void 0 !== this._order && (t.order = this._order), e._objectEach(this._extraOptions, function(e, n) {
						t[n] = e
					}), t
				},
				_newObject: function(t) {
					var n;
					return n = t && t.className ? new e.Object(t.className) : new this.objectClass
				},
				_createRequest: function() {
					var e = arguments.length <= 0 || void 0 === arguments[0] ? this.toJSON() : arguments[0],
						t = arguments[1];
					if(JSON.stringify(e).length > 2e3) {
						var n = {
							requests: [{
								method: "GET",
								path: "/1.1/classes/" + this.className,
								params: e
							}]
						};
						return a("batch", null, null, "POST", n, t).then(function(e) {
							var t = e[0];
							if(t.success) return t.success;
							var n = new Error(t.error.error || "Unknown batch error");
							throw n.code = t.error.code, n
						})
					}
					return a("classes", this.className, null, "GET", e, t)
				},
				_parseResponse: function(e) {
					var t = this;
					return r.map(e.results, function(n) {
						var r = t._newObject(e);
						return r._finishFetch && r._finishFetch(t._processResult(n), !0), r
					})
				},
				find: function(e) {
					var t = this._createRequest(void 0, e);
					return t.then(this._parseResponse.bind(this))
				},
				scan: function() {
					var e = this,
						t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
						n = t.orderedBy,
						o = t.batchSize,
						u = arguments[1],
						c = this.toJSON();
					i("scan %O", c), c.order && (console.warn("The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan."), delete c.order), c.skip && (console.warn("The skip option of the query is ignored for Query#scan."), delete c.skip), c.limit && (console.warn("The limit option of the query is ignored for Query#scan."), delete c.limit), n && (c.scan_key = n), o && (c.limit = o);
					var l = s.resolve([]),
						h = void 0,
						f = !1;
					return {
						next: function() {
							return l = l.then(function(t) {
								return f ? [] : t.length > 1 ? t : h || 0 === t.length ? a("scan/classes", e.className, null, "GET", h ? r.extend({}, c, {
									cursor: h
								}) : c, u).then(function(t) {
									return h = t.cursor, e._parseResponse(t)
								}).then(function(e) {
									return e.length || (f = !0), t.concat(e)
								}) : (f = !0, t)
							}), l.then(function(e) {
								return e.shift()
							}).then(function(e) {
								return {
									value: e,
									done: f
								}
							})
						}
					}
				},
				destroyAll: function(t) {
					var n = this;
					return n.find(t).then(function(t) {
						return e.Object.destroyAll(t)
					})
				},
				count: function(e) {
					var t = this.toJSON();
					t.limit = 0, t.count = 1;
					var n = this._createRequest(t, e);
					return n.then(function(e) {
						return e.count
					})
				},
				first: function(e) {
					var t = this,
						n = this.toJSON();
					n.limit = 1;
					var i = this._createRequest(n, e);
					return i.then(function(e) {
						return r.map(e.results, function(e) {
							var n = t._newObject();
							return n._finishFetch && n._finishFetch(t._processResult(e), !0), n
						})[0]
					})
				},
				skip: function(e) {
					return l(e, "undefined is not a valid skip value"), this._skip = e, this
				},
				limit: function(e) {
					return l(e, "undefined is not a valid limit value"), this._limit = e, this
				},
				equalTo: function(t, n) {
					return l(t, "undefined is not a valid key"), l(n, "undefined is not a valid value"), this._where[t] = e._encode(n), this
				},
				_addCondition: function(t, n, r) {
					return l(t, "undefined is not a valid condition key"), l(n, "undefined is not a valid condition"), l(r, "undefined is not a valid condition value"), this._where[t] || (this._where[t] = {}), this._where[t][n] = e._encode(r), this
				},
				sizeEqualTo: function(e, t) {
					this._addCondition(e, "$size", t)
				},
				notEqualTo: function(e, t) {
					return this._addCondition(e, "$ne", t), this
				},
				lessThan: function(e, t) {
					return this._addCondition(e, "$lt", t), this
				},
				greaterThan: function(e, t) {
					return this._addCondition(e, "$gt", t), this
				},
				lessThanOrEqualTo: function(e, t) {
					return this._addCondition(e, "$lte", t), this
				},
				greaterThanOrEqualTo: function(e, t) {
					return this._addCondition(e, "$gte", t), this
				},
				containedIn: function(e, t) {
					return this._addCondition(e, "$in", t), this
				},
				notContainedIn: function(e, t) {
					return this._addCondition(e, "$nin", t), this
				},
				containsAll: function(e, t) {
					return this._addCondition(e, "$all", t), this
				},
				exists: function(e) {
					return this._addCondition(e, "$exists", !0), this
				},
				doesNotExist: function(e) {
					return this._addCondition(e, "$exists", !1), this
				},
				matches: function(e, t, n) {
					return this._addCondition(e, "$regex", t), n || (n = ""), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), n && n.length && this._addCondition(e, "$options", n), this
				},
				matchesQuery: function(e, t) {
					var n = t.toJSON();
					return n.className = t.className, this._addCondition(e, "$inQuery", n), this
				},
				doesNotMatchQuery: function(e, t) {
					var n = t.toJSON();
					return n.className = t.className, this._addCondition(e, "$notInQuery", n), this
				},
				matchesKeyInQuery: function(e, t, n) {
					var r = n.toJSON();
					return r.className = n.className, this._addCondition(e, "$select", {
						key: t,
						query: r
					}), this
				},
				doesNotMatchKeyInQuery: function(e, t, n) {
					var r = n.toJSON();
					return r.className = n.className, this._addCondition(e, "$dontSelect", {
						key: t,
						query: r
					}), this
				},
				_orQuery: function(e) {
					var t = r.map(e, function(e) {
						return e.toJSON().where
					});
					return this._where.$or = t, this
				},
				_andQuery: function(e) {
					var t = r.map(e, function(e) {
						return e.toJSON().where
					});
					return this._where.$and = t, this
				},
				_quote: function(e) {
					return "\\Q" + e.replace("\\E", "\\E\\\\E\\Q") + "\\E"
				},
				contains: function(e, t) {
					return this._addCondition(e, "$regex", this._quote(t)), this
				},
				startsWith: function(e, t) {
					return this._addCondition(e, "$regex", "^" + this._quote(t)), this
				},
				endsWith: function(e, t) {
					return this._addCondition(e, "$regex", this._quote(t) + "$"), this
				},
				ascending: function(e) {
					return l(e, "undefined is not a valid key"), this._order = e, this
				},
				addAscending: function(e) {
					return l(e, "undefined is not a valid key"), this._order ? this._order += "," + e : this._order = e, this
				},
				descending: function(e) {
					return l(e, "undefined is not a valid key"), this._order = "-" + e, this
				},
				addDescending: function(e) {
					return l(e, "undefined is not a valid key"), this._order ? this._order += ",-" + e : this._order = "-" + e, this
				},
				near: function(t, n) {
					return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), this._addCondition(t, "$nearSphere", n), this
				},
				withinRadians: function(e, t, n) {
					return this.near(e, t), this._addCondition(e, "$maxDistance", n), this
				},
				withinMiles: function(e, t, n) {
					return this.withinRadians(e, t, n / 3958.8)
				},
				withinKilometers: function(e, t, n) {
					return this.withinRadians(e, t, n / 6371)
				},
				withinGeoBox: function(t, n, r) {
					return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), r instanceof e.GeoPoint || (r = new e.GeoPoint(r)), this._addCondition(t, "$within", {
						$box: [n, r]
					}), this
				},
				include: function(e) {
					var t = this;
					return l(e, "undefined is not a valid key"), r(arguments).forEach(function(e) {
						t._include = t._include.concat(c(e))
					}), this
				},
				select: function(e) {
					var t = this;
					return l(e, "undefined is not a valid key"), r(arguments).forEach(function(e) {
						t._select = t._select.concat(c(e))
					}), this
				},
				each: function(t) {
					var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
					if(this._order || this._skip || this._limit >= 0) {
						var i = new Error("Cannot iterate on a query with sort, skip, or limit.");
						return e.Promise.reject(i)
					}
					var s = new e.Query(this.objectClass);
					s._limit = n.batchSize || 100, s._where = r.clone(this._where), s._include = r.clone(this._include), s.ascending("objectId");
					var o = !1;
					return e.Promise._continueWhile(function() {
						return !o
					}, function() {
						return s.find(n).then(function(n) {
							var i = e.Promise.resolve();
							return r.each(n, function(e) {
								i = i.then(function() {
									return t(e)
								})
							}), i.then(function() {
								n.length >= s._limit ? s.greaterThan("objectId", n[n.length - 1].id) : o = !0
							})
						})
					})
				}
			}), e.FriendShipQuery = e.Query._extend({
				_objectClass: e.User,
				_newObject: function() {
					return new e.User
				},
				_processResult: function(e) {
					if(e && e[this._friendshipTag]) {
						var t = e[this._friendshipTag];
						return "Pointer" === t.__type && "_User" === t.className && (delete t.__type, delete t.className), t
					}
					return null
				}
			})
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(0);
		e.exports = function(e) {
			e.Relation = function(e, t) {
				if(!r.isString(t)) throw new TypeError("key must be a string");
				this.parent = e, this.key = t, this.targetClassName = null
			}, e.Relation.reverseQuery = function(t, n, r) {
				var i = new e.Query(t);
				return i.equalTo(n, r._toPointer()), i
			}, r.extend(e.Relation.prototype, {
				_ensureParentAndKey: function(e, t) {
					if(this.parent = this.parent || e, this.key = this.key || t, this.parent !== e) throw new Error("Internal Error. Relation retrieved from two different Objects.");
					if(this.key !== t) throw new Error("Internal Error. Relation retrieved from two different keys.")
				},
				add: function(t) {
					r.isArray(t) || (t = [t]);
					var n = new e.Op.Relation(t, []);
					this.parent.set(this.key, n), this.targetClassName = n._targetClassName
				},
				remove: function(t) {
					r.isArray(t) || (t = [t]);
					var n = new e.Op.Relation([], t);
					this.parent.set(this.key, n), this.targetClassName = n._targetClassName
				},
				toJSON: function() {
					return {
						__type: "Relation",
						className: this.targetClassName
					}
				},
				query: function t() {
					var n, t;
					return this.targetClassName ? (n = e.Object._getSubclass(this.targetClassName), t = new e.Query(n)) : (n = e.Object._getSubclass(this.parent.className), t = new e.Query(n), t._extraOptions.redirectClassNameForKey = this.key), t._addCondition("$relatedTo", "object", this.parent._toPointer()), t._addCondition("$relatedTo", "key", this.key), t
				}
			})
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(0),
			i = n(3);
		e.exports = function(e) {
			e.Role = e.Object.extend("_Role", {
				constructor: function(t, n) {
					if(r.isString(t) ? (e.Object.prototype.constructor.call(this, null, null), this.setName(t)) : e.Object.prototype.constructor.call(this, t, n), void 0 === n) {
						var i = new e.ACL;
						i.setPublicReadAccess(!0), this.getACL() || this.setACL(i)
					} else {
						if(!(n instanceof e.ACL)) throw new TypeError("acl must be an instance of AV.ACL");
						this.setACL(n)
					}
				},
				getName: function() {
					return this.get("name")
				},
				setName: function(e, t) {
					return this.set("name", e, t)
				},
				getUsers: function() {
					return this.relation("users")
				},
				getRoles: function() {
					return this.relation("roles")
				},
				validate: function(t, n) {
					if("name" in t && t.name !== this.getName()) {
						var s = t.name;
						if(this.id && this.id !== t.objectId) return new i(i.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
						if(!r.isString(s)) return new i(i.OTHER_CAUSE, "A role's name must be a String.");
						if(!/^[0-9a-zA-Z\-_ ]+$/.test(s)) return new i(i.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.")
					}
					return !!e.Object.prototype.validate && e.Object.prototype.validate.call(this, t, n)
				}
			})
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(0),
			i = n(2).request;
		e.exports = function(e) {
			e.SearchSortBuilder = function() {
				this._sortFields = []
			}, r.extend(e.SearchSortBuilder.prototype, {
				_addField: function(e, t, n, r) {
					var i = {};
					return i[e] = {
						order: t || "asc",
						mode: n || "avg",
						missing: "_" + (r || "last")
					}, this._sortFields.push(i), this
				},
				ascending: function(e, t, n) {
					return this._addField(e, "asc", t, n)
				},
				descending: function(e, t, n) {
					return this._addField(e, "desc", t, n)
				},
				whereNear: function(e, t, n) {
					n = n || {};
					var r = {},
						i = {
							lat: t.latitude,
							lon: t.longitude
						},
						s = {
							order: n.order || "asc",
							mode: n.mode || "avg",
							unit: n.unit || "km"
						};
					return s[e] = i, r._geo_distance = s, this._sortFields.push(r), this
				},
				build: function() {
					return JSON.stringify(e._encode(this._sortFields))
				}
			}), e.SearchQuery = e.Query._extend({
				_sid: null,
				_hits: 0,
				_queryString: null,
				_highlights: null,
				_sortBuilder: null,
				_createRequest: function(e, t) {
					return i("search/select", null, null, "GET", e || this.toJSON(), t)
				},
				sid: function(e) {
					return this._sid = e, this
				},
				queryString: function(e) {
					return this._queryString = e, this
				},
				highlights: function(e) {
					var t;
					return t = e && r.isString(e) ? arguments : e, this._highlights = t, this
				},
				sortBy: function(e) {
					return this._sortBuilder = e, this
				},
				hits: function() {
					return this._hits || (this._hits = 0), this._hits
				},
				_processResult: function(e) {
					return delete e.className, delete e._app_url, delete e._deeplink, e
				},
				hasMore: function() {
					return !this._hitEnd
				},
				reset: function() {
					this._hitEnd = !1, this._sid = null, this._hits = 0
				},
				find: function() {
					var e = this,
						t = this._createRequest();
					return t.then(function(t) {
						return t.sid ? (e._oldSid = e._sid, e._sid = t.sid) : (e._sid = null, e._hitEnd = !0), e._hits = t.hits || 0, r.map(t.results, function(n) {
							n.className && (t.className = n.className);
							var r = e._newObject(t);
							return r.appURL = n._app_url, r._finishFetch(e._processResult(n), !0), r
						})
					})
				},
				toJSON: function() {
					var t = e.SearchQuery.__super__.toJSON.call(this);
					if(delete t.where, this.className && (t.clazz = this.className), this._sid && (t.sid = this._sid), !this._queryString) throw new Error("Please set query string.");
					if(t.q = this._queryString, this._highlights && (t.highlights = this._highlights.join(",")), this._sortBuilder && t.order) throw new Error("sort and order can not be set at same time.");
					return this._sortBuilder && (t.sort = this._sortBuilder.build()), t
				}
			})
		}
	}, function(e, t, n) {
		"use strict";
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
			},
			i = n(0),
			s = n(2).request;
		e.exports = function(e) {
			var t = function() {
					var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
					return e.User.currentAsync().then(function(n) {
						return n || e.User._fetchUserBySessionToken(t.sessionToken)
					})
				},
				n = function(n) {
					return t(n).then(function(t) {
						return e.Object.createWithoutData("_User", t.id)._toPointer()
					})
				};
			e.Status = function(e, t) {
				return this.data = {}, this.inboxType = "default", this.query = null, e && "object" === ("undefined" == typeof e ? "undefined" : r(e)) ? this.data = e : (e && (this.data.image = e), t && (this.data.message = t)), this
			}, i.extend(e.Status.prototype, {
				get: function(e) {
					return this.data[e]
				},
				set: function(e, t) {
					return this.data[e] = t, this
				},
				destroy: function(t) {
					if(!this.id) return e.Promise.reject(new Error("The status id is not exists."));
					var n = s("statuses", null, this.id, "DELETE", t);
					return n
				},
				toObject: function() {
					return this.id ? e.Object.createWithoutData("_Status", this.id) : null
				},
				_getDataJSON: function() {
					var t = i.clone(this.data);
					return e._encode(t)
				},
				send: function() {
					var t = this,
						r = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
					if(!r.sessionToken && !e.User.current()) throw new Error("Please signin an user.");
					return this.query ? n(r).then(function(e) {
						var n = t.query.toJSON();
						n.className = t.query.className;
						var i = {};
						return i.query = n, t.data = t.data || {}, t.data.source = t.data.source || e, i.data = t._getDataJSON(), i.inboxType = t.inboxType || "default", s("statuses", null, null, "POST", i, r)
					}).then(function(n) {
						return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t
					}) : e.Status.sendStatusToFollowers(this, r)
				},
				_finishFetch: function(t) {
					this.id = t.objectId, this.createdAt = e._parseDate(t.createdAt), this.updatedAt = e._parseDate(t.updatedAt), this.messageId = t.messageId, delete t.messageId, delete t.objectId, delete t.createdAt, delete t.updatedAt, this.data = e._decode(t)
				}
			}), e.Status.sendStatusToFollowers = function(t) {
				var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
				if(!r.sessionToken && !e.User.current()) throw new Error("Please signin an user.");
				return n(r).then(function(n) {
					var i = {};
					i.className = "_Follower", i.keys = "follower", i.where = {
						user: n
					};
					var o = {};
					o.query = i, t.data = t.data || {}, t.data.source = t.data.source || n, o.data = t._getDataJSON(), o.inboxType = t.inboxType || "default";
					var a = s("statuses", null, null, "POST", o, r);
					return a.then(function(n) {
						return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t
					})
				})
			}, e.Status.sendPrivateStatus = function(t, r) {
				var o = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
				if(!o.sessionToken && !e.User.current()) throw new Error("Please signin an user.");
				if(!r) throw new Error("Invalid target user.");
				var a = i.isString(r) ? r : r.id;
				if(!a) throw new Error("Invalid target user.");
				return n(o).then(function(n) {
					var r = {};
					r.className = "_User", r.where = {
						objectId: a
					};
					var i = {};
					i.query = r, t.data = t.data || {}, t.data.source = t.data.source || n, i.data = t._getDataJSON(), i.inboxType = "private", t.inboxType = "private";
					var u = s("statuses", null, null, "POST", i, o);
					return u.then(function(n) {
						return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t
					})
				})
			}, e.Status.countUnreadStatuses = function(n) {
				var r = arguments.length <= 1 || void 0 === arguments[1] ? "default" : arguments[1],
					o = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
				if(i.isString(r) || (o = r), !o.sessionToken && null == n && !e.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
				return t(o).then(function(t) {
					var n = {};
					return n.inboxType = e._encode(r), n.owner = e._encode(t), s("subscribe/statuses/count", null, null, "GET", n, o)
				})
			}, e.Status.resetUnreadCount = function(n) {
				var r = arguments.length <= 1 || void 0 === arguments[1] ? "default" : arguments[1],
					o = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
				if(i.isString(r) || (o = r), !o.sessionToken && null == n && !e.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
				return t(o).then(function(t) {
					var n = {};
					return n.inboxType = e._encode(r), n.owner = e._encode(t), s("subscribe/statuses/resetUnreadCount", null, null, "POST", n, o)
				})
			}, e.Status.statusQuery = function(t) {
				var n = new e.Query("_Status");
				return t && n.equalTo("source", t), n
			}, e.InboxQuery = e.Query._extend({
				_objectClass: e.Status,
				_sinceId: 0,
				_maxId: 0,
				_inboxType: "default",
				_owner: null,
				_newObject: function() {
					return new e.Status
				},
				_createRequest: function(e, t) {
					return s("subscribe/statuses", null, null, "GET", e || this.toJSON(), t)
				},
				sinceId: function(e) {
					return this._sinceId = e, this
				},
				maxId: function(e) {
					return this._maxId = e, this
				},
				owner: function(e) {
					return this._owner = e, this
				},
				inboxType: function(e) {
					return this._inboxType = e, this
				},
				toJSON: function() {
					var t = e.InboxQuery.__super__.toJSON.call(this);
					return t.owner = e._encode(this._owner), t.inboxType = e._encode(this._inboxType), t.sinceId = e._encode(this._sinceId), t.maxId = e._encode(this._maxId), t
				}
			}), e.Status.inboxQuery = function(t, n) {
				var r = new e.InboxQuery(e.Status);
				return t && (r._owner = t), n && (r._inboxType = n), r
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(0),
			i = n(3),
			s = n(2).request,
			o = n(1),
			a = function() {
				if("undefined" == typeof wx || "function" != typeof wx.login) throw new Error("Weapp Login is only available in Weapp");
				return new o(function(e, t) {
					wx.login({
						success: function(n) {
							var r = n.code,
								i = n.errMsg;
							r ? e(r) : t(new Error(i))
						}
					})
				})
			};
		e.exports = function(e) {
			e.User = e.Object.extend("_User", {
				_isCurrentUser: !1,
				_mergeMagicFields: function(t) {
					t.sessionToken && (this._sessionToken = t.sessionToken, delete t.sessionToken), e.User.__super__._mergeMagicFields.call(this, t)
				},
				_cleanupAuthData: function() {
					if(this.isCurrent()) {
						var t = this.get("authData");
						t && e._objectEach(this.get("authData"), function(e, n) {
							t[n] || delete t[n]
						})
					}
				},
				_synchronizeAllAuthData: function() {
					var t = this.get("authData");
					if(t) {
						var n = this;
						e._objectEach(this.get("authData"), function(e, t) {
							n._synchronizeAuthData(t)
						})
					}
				},
				_synchronizeAuthData: function(t) {
					if(this.isCurrent()) {
						var n;
						r.isString(t) ? (n = t, t = e.User._authProviders[n]) : n = t.getAuthType();
						var i = this.get("authData");
						if(i && t) {
							var s = t.restoreAuthentication(i[n]);
							s || this._unlinkFrom(t)
						}
					}
				},
				_handleSaveResult: function(t) {
					return t && !e._config.disableCurrentUser && (this._isCurrentUser = !0), this._cleanupAuthData(), this._synchronizeAllAuthData(), delete this._serverData.password, this._rebuildEstimatedDataForKey("password"), this._refreshCache(), !t && !this.isCurrent() || e._config.disableCurrentUser ? o.resolve() : o.resolve(e.User._saveCurrentUser(this))
				},
				_linkWith: function(t, n) {
					var i, s = this;
					if(r.isString(t) ? (i = t, t = e.User._authProviders[t]) : i = t.getAuthType(), n) {
						var o = this.get("authData") || {};
						return o[i] = n, this.save({
							authData: o
						}).then(function(e) {
							return e._handleSaveResult(!0).then(function() {
								return e
							})
						})
					}
					return t.authenticate().then(function(e) {
						return s._linkWith(t, e)
					})
				},
				linkWithWeapp: function() {
					var e = this;
					return a().then(function(t) {
						return e._linkWith("lc_weapp", {
							code: t
						})
					})
				},
				_unlinkFrom: function(t) {
					var n = this;
					return r.isString(t) && (t = e.User._authProviders[t]), this._linkWith(t, null).then(function(e) {
						return n._synchronizeAuthData(t), e
					})
				},
				_isLinked: function(e) {
					var t;
					t = r.isString(e) ? e : e.getAuthType();
					var n = this.get("authData") || {};
					return !!n[t]
				},
				logOut: function() {
					this._logOutWithAll(), this._isCurrentUser = !1
				},
				_logOutWithAll: function() {
					var t = this.get("authData");
					if(t) {
						var n = this;
						e._objectEach(this.get("authData"), function(e, t) {
							n._logOutWith(t)
						})
					}
				},
				_logOutWith: function(t) {
					this.isCurrent() && (r.isString(t) && (t = e.User._authProviders[t]), t && t.deauthenticate && t.deauthenticate())
				},
				signUp: function(e, t) {
					var n, r = e && e.username || this.get("username");
					if(!r || "" === r) throw n = new i(i.OTHER_CAUSE, "Cannot sign up user with an empty name.");
					var s = e && e.password || this.get("password");
					if(!s || "" === s) throw n = new i(i.OTHER_CAUSE, "Cannot sign up user with an empty password.");
					return this.save(e, t).then(function(e) {
						return e._handleSaveResult(!0).then(function() {
							return e
						})
					})
				},
				signUpOrlogInWithMobilePhone: function(e) {
					var t, n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
						r = e && e.mobilePhoneNumber || this.get("mobilePhoneNumber");
					if(!r || "" === r) throw t = new i(i.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber.");
					var o = e && e.smsCode || this.get("smsCode");
					if(!o || "" === o) throw t = new i(i.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode.");
					return n._makeRequest = function(e, t, n, r, i) {
						return s("usersByMobilePhone", null, null, "POST", i)
					}, this.save(e, n).then(function(e) {
						return delete e.attributes.smsCode, delete e._serverData.smsCode, e._handleSaveResult(!0).then(function() {
							return e
						})
					})
				},
				logIn: function() {
					var e = this,
						t = s("login", null, null, "POST", this.toJSON());
					return t.then(function(t) {
						var n = e.parse(t);
						return e._finishFetch(n), e._handleSaveResult(!0).then(function() {
							return n.smsCode || delete e.attributes.smsCode, e
						})
					})
				},
				save: function(t, n, i) {
					var s, o;
					return r.isObject(t) || r.isNull(t) || r.isUndefined(t) ? (s = t, o = n) : (s = {}, s[t] = n, o = i), o = o || {}, e.Object.prototype.save.call(this, s, o).then(function(e) {
						return e._handleSaveResult(!1).then(function() {
							return e
						})
					})
				},
				follow: function(e, t) {
					if(!this.id) throw new Error("Please signin.");
					if(!e) throw new Error("Invalid target user.");
					var n = r.isString(e) ? e : e.id;
					if(!n) throw new Error("Invalid target user.");
					var i = "users/" + this.id + "/friendship/" + n,
						o = s(i, null, null, "POST", null, t);
					return o
				},
				unfollow: function(e, t) {
					if(!this.id) throw new Error("Please signin.");
					if(!e) throw new Error("Invalid target user.");
					var n = r.isString(e) ? e : e.id;
					if(!n) throw new Error("Invalid target user.");
					var i = "users/" + this.id + "/friendship/" + n,
						o = s(i, null, null, "DELETE", null, t);
					return o
				},
				followerQuery: function() {
					return e.User.followerQuery(this.id)
				},
				followeeQuery: function() {
					return e.User.followeeQuery(this.id)
				},
				fetch: function(t, n) {
					return e.Object.prototype.fetch.call(this, t, n).then(function(e) {
						return e._handleSaveResult(!1).then(function() {
							return e
						})
					})
				},
				updatePassword: function(e, t, n) {
					var r = "users/" + this.id + "/updatePassword",
						i = {
							old_password: e,
							new_password: t
						},
						o = s(r, null, null, "PUT", i, n);
					return o
				},
				isCurrent: function() {
					return this._isCurrentUser
				},
				getUsername: function() {
					return this.get("username")
				},
				getMobilePhoneNumber: function() {
					return this.get("mobilePhoneNumber")
				},
				setMobilePhoneNumber: function(e, t) {
					return this.set("mobilePhoneNumber", e, t)
				},
				setUsername: function(e, t) {
					return this.set("username", e, t)
				},
				setPassword: function(e, t) {
					return this.set("password", e, t)
				},
				getEmail: function() {
					return this.get("email")
				},
				setEmail: function(e, t) {
					return this.set("email", e, t)
				},
				authenticated: function() {
					return console.warn("DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。"), !!this._sessionToken && !e._config.disableCurrentUser && e.User.current() && e.User.current().id === this.id
				},
				isAuthenticated: function() {
					var t = this;
					return o.resolve().then(function() {
						return !!t._sessionToken && e.User._fetchUserBySessionToken(t._sessionToken).then(function() {
							return !0
						}, function(e) {
							if(211 === e.code) return !1;
							throw e
						})
					})
				},
				getSessionToken: function() {
					return this._sessionToken
				},
				refreshSessionToken: function(e) {
					var t = this;
					return s("users/" + this.id + "/refreshSessionToken", null, null, "PUT", null, e).then(function(e) {
						return t._finishFetch(e), t
					})
				},
				getRoles: function(t) {
					return e.Relation.reverseQuery("_Role", "users", this).find(t)
				}
			}, {
				_currentUser: null,
				_currentUserMatchesDisk: !1,
				_CURRENT_USER_KEY: "currentUser",
				_authProviders: {},
				signUp: function(t, n, r, i) {
					r = r || {}, r.username = t, r.password = n;
					var s = e.Object._create("_User");
					return s.signUp(r, i)
				},
				logIn: function(t, n, r) {
					var i = e.Object._create("_User");
					return i._finishFetch({
						username: t,
						password: n
					}), i.logIn(r)
				},
				become: function(e) {
					return this._fetchUserBySessionToken(e).then(function(e) {
						return e._handleSaveResult(!0).then(function() {
							return e
						})
					})
				},
				_fetchUserBySessionToken: function(t) {
					var n = e.Object._create("_User");
					return s("users", "me", null, "GET", {
						session_token: t
					}).then(function(e) {
						var t = n.parse(e);
						return n._finishFetch(t), n
					})
				},
				logInWithMobilePhoneSmsCode: function(t, n, r) {
					var i = e.Object._create("_User");
					return i._finishFetch({
						mobilePhoneNumber: t,
						smsCode: n
					}), i.logIn(r)
				},
				signUpOrlogInWithMobilePhone: function(t, n, r, i) {
					r = r || {}, r.mobilePhoneNumber = t, r.smsCode = n;
					var s = e.Object._create("_User");
					return s.signUpOrlogInWithMobilePhone(r, i)
				},
				logInWithMobilePhone: function(t, n, r) {
					var i = e.Object._create("_User");
					return i._finishFetch({
						mobilePhoneNumber: t,
						password: n
					}), i.logIn(r)
				},
				signUpOrlogInWithAuthData: function(t, n) {
					return e.User._logInWith(n, t)
				},
				loginWithWeapp: function() {
					var e = this;
					return a().then(function(t) {
						return e.signUpOrlogInWithAuthData({
							code: t
						}, "lc_weapp")
					})
				},
				associateWithAuthData: function(e, t, n) {
					return e._linkWith(t, n)
				},
				logOut: function() {
					return e._config.disableCurrentUser ? (console.warn("AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), o.resolve(null)) : (null !== e.User._currentUser && (e.User._currentUser._logOutWithAll(), e.User._currentUser._isCurrentUser = !1), e.User._currentUserMatchesDisk = !0, e.User._currentUser = null, e.localStorage.removeItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY)))
				},
				followerQuery: function(t) {
					if(!t || !r.isString(t)) throw new Error("Invalid user object id.");
					var n = new e.FriendShipQuery("_Follower");
					return n._friendshipTag = "follower", n.equalTo("user", e.Object.createWithoutData("_User", t)), n
				},
				followeeQuery: function(t) {
					if(!t || !r.isString(t)) throw new Error("Invalid user object id.");
					var n = new e.FriendShipQuery("_Followee");
					return n._friendshipTag = "followee", n.equalTo("user", e.Object.createWithoutData("_User", t)), n
				},
				requestPasswordReset: function(e) {
					var t = {
							email: e
						},
						n = s("requestPasswordReset", null, null, "POST", t);
					return n
				},
				requestEmailVerify: function(e) {
					var t = {
							email: e
						},
						n = s("requestEmailVerify", null, null, "POST", t);
					return n
				},
				requestMobilePhoneVerify: function(e) {
					var t = {
							mobilePhoneNumber: e
						},
						n = s("requestMobilePhoneVerify", null, null, "POST", t);
					return n
				},
				requestPasswordResetBySmsCode: function(e) {
					var t = {
							mobilePhoneNumber: e
						},
						n = s("requestPasswordResetBySmsCode", null, null, "POST", t);
					return n
				},
				resetPasswordBySmsCode: function(e, t) {
					var n = {
							password: t
						},
						r = s("resetPasswordBySmsCode", null, e, "PUT", n);
					return r
				},
				verifyMobilePhone: function(e) {
					var t = s("verifyMobilePhone", null, e, "POST", null);
					return t
				},
				requestLoginSmsCode: function(e) {
					var t = {
							mobilePhoneNumber: e
						},
						n = s("requestLoginSmsCode", null, null, "POST", t);
					return n
				},
				currentAsync: function() {
					return e._config.disableCurrentUser ? (console.warn("AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), o.resolve(null)) : e.User._currentUser ? o.resolve(e.User._currentUser) : e.User._currentUserMatchesDisk ? o.resolve(e.User._currentUser) : e.localStorage.getItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY)).then(function(t) {
						if(!t) return null;
						e.User._currentUserMatchesDisk = !0, e.User._currentUser = e.Object._create("_User"), e.User._currentUser._isCurrentUser = !0;
						var n = JSON.parse(t);
						return e.User._currentUser.id = n._id, delete n._id, e.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, e.User._currentUser._finishFetch(n), e.User._currentUser._synchronizeAllAuthData(), e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [{}], e.User._currentUser
					})
				},
				current: function() {
					if(e._config.disableCurrentUser) return console.warn("AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), null;
					if(e.User._currentUser) return e.User._currentUser;
					if(e.User._currentUserMatchesDisk) return e.User._currentUser;
					e.User._currentUserMatchesDisk = !0;
					var t = e.localStorage.getItem(e._getAVPath(e.User._CURRENT_USER_KEY));
					if(!t) return null;
					e.User._currentUser = e.Object._create("_User"), e.User._currentUser._isCurrentUser = !0;
					var n = JSON.parse(t);
					return e.User._currentUser.id = n._id, delete n._id, e.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, e.User._currentUser._finishFetch(n), e.User._currentUser._synchronizeAllAuthData(), e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [{}], e.User._currentUser
				},
				_saveCurrentUser: function(t) {
					var n;
					return n = e.User._currentUser !== t ? e.User.logOut() : o.resolve(), n.then(function() {
						t._isCurrentUser = !0, e.User._currentUser = t;
						var n = t.toJSON();
						return n._id = t.id, n._sessionToken = t._sessionToken, e.localStorage.setItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY), JSON.stringify(n)).then(function() {
							e.User._currentUserMatchesDisk = !0
						})
					})
				},
				_registerAuthenticationProvider: function(t) {
					e.User._authProviders[t.getAuthType()] = t, !e._config.disableCurrentUser && e.User.current() && e.User.current()._synchronizeAuthData(t.getAuthType())
				},
				_logInWith: function(t, n) {
					var r = e.Object._create("_User");
					return r._linkWith(t, n)
				}
			})
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = []
	}, function(e, t, n) {
		"use strict";
		var r = n(12),
			i = ["Browser"].concat(n(30));
		e.exports = "LeanCloud-JS-SDK/" + r + " (" + i.join("; ") + ")"
	}, function(e, t, n) {
		"use strict";
		var r = n(7),
			i = n(5)("cos"),
			s = n(1);
		e.exports = function(e, t, n) {
			var o = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
			n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId;
			var a = e.upload_url + "?sign=" + encodeURIComponent(e.token);
			return new s(function(e, s) {
				var u = r("POST", a).field("fileContent", t).field("op", "upload");
				o.onprogress && u.on("progress", o.onprogress), u.end(function(t, r) {
					return r && i(r.status, r.body, r.text), t ? (r && (t.statusCode = r.status, t.responseText = r.text, t.response = r.body), s(t)) : void e(n)
				})
			})
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(7),
			i = n(1),
			s = n(5)("qiniu");
		e.exports = function(e, t, n) {
			var o = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
			n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId;
			var a = e.token;
			return new i(function(e, i) {
				var u = r("POST", "https://up.qbox.me").field("file", t).field("name", n.attributes.name).field("key", n._qiniu_key).field("token", a);
				o.onprogress && u.on("progress", o.onprogress), u.end(function(t, r) {
					return r && s(r.status, r.body, r.text), t ? (r && (t.statusCode = r.status, t.responseText = r.text, t.response = r.body), i(t)) : void e(n)
				})
			})
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(7);
		n(1);
		e.exports = function(e, t, n) {
			var i = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
			return n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId, new Promise(function(s, o) {
				var a = r("PUT", e.upload_url).set("Content-Type", n.get("mime_type")).send(t);
				i.onprogress && a.on("progress", i.onprogress), a.end(function(e, t) {
					return e ? (t && (e.statusCode = t.status, e.responseText = t.text, e.response = t.body), o(e)) : void s(n)
				})
			})
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var r = n(0),
				i = (n(1), {}),
				s = ["getItem", "setItem", "removeItem", "clear"],
				o = t.localStorage;
			try {
				var a = "__storejs__";
				if(o.setItem(a, a), o.getItem(a) != a) throw new Error;
				o.removeItem(a)
			} catch(e) {
				o = n(43)
			}
			r(s).each(function(e) {
				i[e] = function() {
					return t.localStorage[e].apply(t.localStorage, arguments)
				}
			}), i.async = !1, e.exports = i
		}).call(t, n(9))
	}, function(e, t, n) {
		"use strict";
		var r = function(e, t) {
			var n;
			e.indexOf("base64") < 0 ? n = atob(e) : e.split(",")[0].indexOf("base64") >= 0 ? (t = t || e.split(",")[0].split(":")[1].split(";")[0], n = atob(e.split(",")[1])) : n = unescape(e.split(",")[1]);
			for(var r = new Uint8Array(n.length), i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
			return new Blob([r], {
				type: t
			})
		};
		e.exports = r
	}, function(e, t, n) {
		function r(e) {
			if(e) return i(e)
		}

		function i(e) {
			for(var t in r.prototype) e[t] = r.prototype[t];
			return e
		}
		e.exports = r, r.prototype.on = r.prototype.addEventListener = function(e, t) {
			return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
		}, r.prototype.once = function(e, t) {
			function n() {
				this.off(e, n), t.apply(this, arguments)
			}
			return n.fn = t, this.on(e, n), this
		}, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
			if(this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
			var n = this._callbacks["$" + e];
			if(!n) return this;
			if(1 == arguments.length) return delete this._callbacks["$" + e], this;
			for(var r, i = 0; i < n.length; i++)
				if(r = n[i], r === t || r.fn === t) {
					n.splice(i, 1);
					break
				}
			return this
		}, r.prototype.emit = function(e) {
			this._callbacks = this._callbacks || {};
			var t = [].slice.call(arguments, 1),
				n = this._callbacks["$" + e];
			if(n) {
				n = n.slice(0);
				for(var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t)
			}
			return this
		}, r.prototype.listeners = function(e) {
			return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
		}, r.prototype.hasListeners = function(e) {
			return !!this.listeners(e).length
		}
	}, function(e, t) {
		! function() {
			var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
				n = {
					rotl: function(e, t) {
						return e << t | e >>> 32 - t
					},
					rotr: function(e, t) {
						return e << 32 - t | e >>> t
					},
					endian: function(e) {
						if(e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
						for(var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
						return e
					},
					randomBytes: function(e) {
						for(var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
						return t
					},
					bytesToWords: function(e) {
						for(var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
						return t
					},
					wordsToBytes: function(e) {
						for(var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
						return t
					},
					bytesToHex: function(e) {
						for(var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
						return t.join("")
					},
					hexToBytes: function(e) {
						for(var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
						return t
					},
					bytesToBase64: function(e) {
						for(var n = [], r = 0; r < e.length; r += 3)
							for(var i = e[r] << 16 | e[r + 1] << 8 | e[r + 2], s = 0; s < 4; s++) 8 * r + 6 * s <= 8 * e.length ? n.push(t.charAt(i >>> 6 * (3 - s) & 63)) : n.push("=");
						return n.join("")
					},
					base64ToBytes: function(e) {
						e = e.replace(/[^A-Z0-9+\/]/gi, "");
						for(var n = [], r = 0, i = 0; r < e.length; i = ++r % 4) 0 != i && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | t.indexOf(e.charAt(r)) >>> 6 - 2 * i);
						return n
					}
				};
			e.exports = n
		}()
	}, function(e, t) {
		function n(e) {
			if(e = String(e), !(e.length > 1e4)) {
				var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
				if(t) {
					var n = parseFloat(t[1]),
						r = (t[2] || "ms").toLowerCase();
					switch(r) {
						case "years":
						case "year":
						case "yrs":
						case "yr":
						case "y":
							return n * l;
						case "days":
						case "day":
						case "d":
							return n * c;
						case "hours":
						case "hour":
						case "hrs":
						case "hr":
						case "h":
							return n * u;
						case "minutes":
						case "minute":
						case "mins":
						case "min":
						case "m":
							return n * a;
						case "seconds":
						case "second":
						case "secs":
						case "sec":
						case "s":
							return n * o;
						case "milliseconds":
						case "millisecond":
						case "msecs":
						case "msec":
						case "ms":
							return n;
						default:
							return
					}
				}
			}
		}

		function r(e) {
			return e >= c ? Math.round(e / c) + "d" : e >= u ? Math.round(e / u) + "h" : e >= a ? Math.round(e / a) + "m" : e >= o ? Math.round(e / o) + "s" : e + "ms"
		}

		function i(e) {
			return s(e, c, "day") || s(e, u, "hour") || s(e, a, "minute") || s(e, o, "second") || e + " ms"
		}

		function s(e, t, n) {
			if(!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
		}
		var o = 1e3,
			a = 60 * o,
			u = 60 * a,
			c = 24 * u,
			l = 365.25 * c;
		e.exports = function(e, t) {
			t = t || {};
			var s = typeof e;
			if("string" === s && e.length > 0) return n(e);
			if("number" === s && isNaN(e) === !1) return t.long ? i(e) : r(e);
			throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
		}
	}, function(e, t, n) {
		function r(e) {
			var n, r = 0;
			for(n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
			return t.colors[Math.abs(r) % t.colors.length]
		}

		function i(e) {
			function n() {
				if(n.enabled) {
					var e = n,
						r = +new Date,
						i = r - (c || r);
					e.diff = i, e.prev = c, e.curr = r, c = r;
					for(var s = new Array(arguments.length), o = 0; o < s.length; o++) s[o] = arguments[o];
					s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
					var a = 0;
					s[0] = s[0].replace(/%([a-zA-Z%])/g, function(n, r) {
						if("%%" === n) return n;
						a++;
						var i = t.formatters[r];
						if("function" == typeof i) {
							var o = s[a];
							n = i.call(e, o), s.splice(a, 1), a--
						}
						return n
					}), t.formatArgs.call(e, s);
					var u = n.log || t.log || console.log.bind(console);
					u.apply(e, s)
				}
			}
			return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = r(e), "function" == typeof t.init && t.init(n), n
		}

		function s(e) {
			t.save(e);
			for(var n = (e || "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) n[i] && (e = n[i].replace(/\*/g, ".*?"), "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
		}

		function o() {
			t.enable("")
		}

		function a(e) {
			var n, r;
			for(n = 0, r = t.skips.length; n < r; n++)
				if(t.skips[n].test(e)) return !1;
			for(n = 0, r = t.names.length; n < r; n++)
				if(t.names[n].test(e)) return !0;
			return !1
		}

		function u(e) {
			return e instanceof Error ? e.stack || e.message : e
		}
		t = e.exports = i.debug = i.default = i, t.coerce = u, t.disable = o, t.enable = s, t.enabled = a, t.humanize = n(39), t.names = [], t.skips = [], t.formatters = {};
		var c
	}, function(e, t, n) {
		(function(t) {
			! function(t, n) {
				e.exports = n()
			}(this, function() {
				"use strict";

				function e(e) {
					return "function" == typeof e || "object" == typeof e && null !== e
				}

				function r(e) {
					return "function" == typeof e
				}

				function i(e) {
					G = e
				}

				function s(e) {
					H = e
				}

				function o() {
					return function() {
						return process.nextTick(h)
					}
				}

				function a() {
					return "undefined" != typeof z ? function() {
						z(h)
					} : l()
				}

				function u() {
					var e = 0,
						t = new Y(h),
						n = document.createTextNode("");
					return t.observe(n, {
							characterData: !0
						}),
						function() {
							n.data = e = ++e % 2
						}
				}

				function c() {
					var e = new MessageChannel;
					return e.port1.onmessage = h,
						function() {
							return e.port2.postMessage(0)
						}
				}

				function l() {
					var e = setTimeout;
					return function() {
						return e(h, 1)
					}
				}

				function h() {
					for(var e = 0; e < K; e += 2) {
						var t = te[e],
							n = te[e + 1];
						t(n), te[e] = void 0, te[e + 1] = void 0
					}
					K = 0
				}

				function f() {
					try {
						var e = n(49);
						return z = e.runOnLoop || e.runOnContext, a()
					} catch(e) {
						return l()
					}
				}

				function d(e, t) {
					var n = arguments,
						r = this,
						i = new this.constructor(_);
					void 0 === i[re] && P(i);
					var s = r._state;
					return s ? ! function() {
						var e = n[s - 1];
						H(function() {
							return U(s, i, e, r._result)
						})
					}() : T(r, i, e, t), i
				}

				function p(e) {
					var t = this;
					if(e && "object" == typeof e && e.constructor === t) return e;
					var n = new t(_);
					return A(n, e), n
				}

				function _() {}

				function v() {
					return new TypeError("You cannot resolve a promise with itself")
				}

				function y() {
					return new TypeError("A promises callback cannot return that same promise.")
				}

				function m(e) {
					try {
						return e.then
					} catch(e) {
						return ae.error = e, ae
					}
				}

				function g(e, t, n, r) {
					try {
						e.call(t, n, r)
					} catch(e) {
						return e
					}
				}

				function b(e, t, n) {
					H(function(e) {
						var r = !1,
							i = g(n, t, function(n) {
								r || (r = !0, t !== n ? A(e, n) : E(e, n))
							}, function(t) {
								r || (r = !0, N(e, t))
							}, "Settle: " + (e._label || " unknown promise"));
						!r && i && (r = !0, N(e, i))
					}, e)
				}

				function w(e, t) {
					t._state === se ? E(e, t._result) : t._state === oe ? N(e, t._result) : T(t, void 0, function(t) {
						return A(e, t)
					}, function(t) {
						return N(e, t)
					})
				}

				function O(e, t, n) {
					t.constructor === e.constructor && n === d && t.constructor.resolve === p ? w(e, t) : n === ae ? N(e, ae.error) : void 0 === n ? E(e, t) : r(n) ? b(e, t, n) : E(e, t)
				}

				function A(t, n) {
					t === n ? N(t, v()) : e(n) ? O(t, n, m(n)) : E(t, n)
				}

				function S(e) {
					e._onerror && e._onerror(e._result), j(e)
				}

				function E(e, t) {
					e._state === ie && (e._result = t, e._state = se, 0 !== e._subscribers.length && H(j, e))
				}

				function N(e, t) {
					e._state === ie && (e._state = oe, e._result = t, H(S, e))
				}

				function T(e, t, n, r) {
					var i = e._subscribers,
						s = i.length;
					e._onerror = null, i[s] = t, i[s + se] = n, i[s + oe] = r, 0 === s && e._state && H(j, e)
				}

				function j(e) {
					var t = e._subscribers,
						n = e._state;
					if(0 !== t.length) {
						for(var r = void 0, i = void 0, s = e._result, o = 0; o < t.length; o += 3) r = t[o], i = t[o + n], r ? U(n, r, i, s) : i(s);
						e._subscribers.length = 0
					}
				}

				function C() {
					this.error = null
				}

				function x(e, t) {
					try {
						return e(t)
					} catch(e) {
						return ue.error = e, ue
					}
				}

				function U(e, t, n, i) {
					var s = r(n),
						o = void 0,
						a = void 0,
						u = void 0,
						c = void 0;
					if(s) {
						if(o = x(n, i), o === ue ? (c = !0, a = o.error, o = null) : u = !0, t === o) return void N(t, y())
					} else o = i, u = !0;
					t._state !== ie || (s && u ? A(t, o) : c ? N(t, a) : e === se ? E(t, o) : e === oe && N(t, o))
				}

				function I(e, t) {
					try {
						t(function(t) {
							A(e, t)
						}, function(t) {
							N(e, t)
						})
					} catch(t) {
						N(e, t)
					}
				}

				function k() {
					return ce++
				}

				function P(e) {
					e[re] = ce++, e._state = void 0, e._result = void 0, e._subscribers = []
				}

				function R(e, t) {
					this._instanceConstructor = e, this.promise = new e(_), this.promise[re] || P(this.promise), W(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? E(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && E(this.promise, this._result))) : N(this.promise, D())
				}

				function D() {
					return new Error("Array Methods must be provided an Array")
				}

				function L(e) {
					return new R(this, e).promise
				}

				function q(e) {
					var t = this;
					return new t(W(e) ? function(n, r) {
						for(var i = e.length, s = 0; s < i; s++) t.resolve(e[s]).then(n, r)
					} : function(e, t) {
						return t(new TypeError("You must pass an array to race."))
					})
				}

				function F(e) {
					var t = this,
						n = new t(_);
					return N(n, e), n
				}

				function M() {
					throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
				}

				function J() {
					throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
				}

				function B(e) {
					this[re] = k(), this._result = this._state = void 0, this._subscribers = [], _ !== e && ("function" != typeof e && M(), this instanceof B ? I(this, e) : J())
				}

				function V() {
					var e = void 0;
					if("undefined" != typeof t) e = t;
					else if("undefined" != typeof self) e = self;
					else try {
						e = Function("return this")()
					} catch(e) {
						throw new Error("polyfill failed because global object is unavailable in this environment")
					}
					var n = e.Promise;
					if(n) {
						var r = null;
						try {
							r = Object.prototype.toString.call(n.resolve())
						} catch(e) {}
						if("[object Promise]" === r && !n.cast) return
					}
					e.Promise = B
				}
				var Q = void 0;
				Q = Array.isArray ? Array.isArray : function(e) {
					return "[object Array]" === Object.prototype.toString.call(e)
				};
				var W = Q,
					K = 0,
					z = void 0,
					G = void 0,
					H = function(e, t) {
						te[K] = e, te[K + 1] = t, K += 2, 2 === K && (G ? G(h) : ne())
					},
					$ = "undefined" != typeof window ? window : void 0,
					X = $ || {},
					Y = X.MutationObserver || X.WebKitMutationObserver,
					Z = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
					ee = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
					te = new Array(1e3),
					ne = void 0;
				ne = Z ? o() : Y ? u() : ee ? c() : void 0 === $ ? f() : l();
				var re = Math.random().toString(36).substring(16),
					ie = void 0,
					se = 1,
					oe = 2,
					ae = new C,
					ue = new C,
					ce = 0;
				return R.prototype._enumerate = function() {
					for(var e = this.length, t = this._input, n = 0; this._state === ie && n < e; n++) this._eachEntry(t[n], n)
				}, R.prototype._eachEntry = function(e, t) {
					var n = this._instanceConstructor,
						r = n.resolve;
					if(r === p) {
						var i = m(e);
						if(i === d && e._state !== ie) this._settledAt(e._state, t, e._result);
						else if("function" != typeof i) this._remaining--, this._result[t] = e;
						else if(n === B) {
							var s = new n(_);
							O(s, e, i), this._willSettleAt(s, t)
						} else this._willSettleAt(new n(function(t) {
							return t(e)
						}), t)
					} else this._willSettleAt(r(e), t)
				}, R.prototype._settledAt = function(e, t, n) {
					var r = this.promise;
					r._state === ie && (this._remaining--, e === oe ? N(r, n) : this._result[t] = n), 0 === this._remaining && E(r, this._result)
				}, R.prototype._willSettleAt = function(e, t) {
					var n = this;
					T(e, void 0, function(e) {
						return n._settledAt(se, t, e)
					}, function(e) {
						return n._settledAt(oe, t, e)
					})
				}, B.all = L, B.race = q, B.resolve = p, B.reject = F, B._setScheduler = i, B._setAsap = s, B._asap = H, B.prototype = {
					constructor: B,
					then: d,
					catch: function(e) {
						return this.then(null, e)
					}
				}, B.polyfill = V, B.Promise = B, B
			})
		}).call(t, n(9))
	}, function(e, t) {
		function n(e) {
			return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
		}

		function r(e) {
			return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
		}
		e.exports = function(e) {
			return null != e && (n(e) || r(e) || !!e._isBuffer)
		}
	}, function(e, t, n) {
		! function(t) {
			var n = {},
				r = {};
			n.length = 0, n.getItem = function(e) {
				return r[e] || null
			}, n.setItem = function(e, t) {
				"undefined" == typeof t ? n.removeItem(e) : (r.hasOwnProperty(e) || n.length++, r[e] = "" + t)
			}, n.removeItem = function(e) {
				r.hasOwnProperty(e) && (delete r[e], n.length--)
			}, n.key = function(e) {
				return Object.keys(r)[e] || null
			}, n.clear = function() {
				r = {}, n.length = 0
			}, e.exports = n
		}(this)
	}, function(e, t, n) {
		! function() {
			var t = n(38),
				r = n(13).utf8,
				i = n(42),
				s = n(13).bin,
				o = function(e, n) {
					e.constructor == String ? e = n && "binary" === n.encoding ? s.stringToBytes(e) : r.stringToBytes(e) : i(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
					for(var a = t.bytesToWords(e), u = 8 * e.length, c = 1732584193, l = -271733879, h = -1732584194, f = 271733878, d = 0; d < a.length; d++) a[d] = 16711935 & (a[d] << 8 | a[d] >>> 24) | 4278255360 & (a[d] << 24 | a[d] >>> 8);
					a[u >>> 5] |= 128 << u % 32, a[(u + 64 >>> 9 << 4) + 14] = u;
					for(var p = o._ff, _ = o._gg, v = o._hh, y = o._ii, d = 0; d < a.length; d += 16) {
						var m = c,
							g = l,
							b = h,
							w = f;
						c = p(c, l, h, f, a[d + 0], 7, -680876936), f = p(f, c, l, h, a[d + 1], 12, -389564586), h = p(h, f, c, l, a[d + 2], 17, 606105819), l = p(l, h, f, c, a[d + 3], 22, -1044525330), c = p(c, l, h, f, a[d + 4], 7, -176418897), f = p(f, c, l, h, a[d + 5], 12, 1200080426), h = p(h, f, c, l, a[d + 6], 17, -1473231341), l = p(l, h, f, c, a[d + 7], 22, -45705983), c = p(c, l, h, f, a[d + 8], 7, 1770035416), f = p(f, c, l, h, a[d + 9], 12, -1958414417), h = p(h, f, c, l, a[d + 10], 17, -42063), l = p(l, h, f, c, a[d + 11], 22, -1990404162), c = p(c, l, h, f, a[d + 12], 7, 1804603682), f = p(f, c, l, h, a[d + 13], 12, -40341101), h = p(h, f, c, l, a[d + 14], 17, -1502002290), l = p(l, h, f, c, a[d + 15], 22, 1236535329), c = _(c, l, h, f, a[d + 1], 5, -165796510), f = _(f, c, l, h, a[d + 6], 9, -1069501632), h = _(h, f, c, l, a[d + 11], 14, 643717713), l = _(l, h, f, c, a[d + 0], 20, -373897302), c = _(c, l, h, f, a[d + 5], 5, -701558691), f = _(f, c, l, h, a[d + 10], 9, 38016083), h = _(h, f, c, l, a[d + 15], 14, -660478335), l = _(l, h, f, c, a[d + 4], 20, -405537848), c = _(c, l, h, f, a[d + 9], 5, 568446438), f = _(f, c, l, h, a[d + 14], 9, -1019803690), h = _(h, f, c, l, a[d + 3], 14, -187363961), l = _(l, h, f, c, a[d + 8], 20, 1163531501), c = _(c, l, h, f, a[d + 13], 5, -1444681467), f = _(f, c, l, h, a[d + 2], 9, -51403784), h = _(h, f, c, l, a[d + 7], 14, 1735328473), l = _(l, h, f, c, a[d + 12], 20, -1926607734), c = v(c, l, h, f, a[d + 5], 4, -378558), f = v(f, c, l, h, a[d + 8], 11, -2022574463), h = v(h, f, c, l, a[d + 11], 16, 1839030562), l = v(l, h, f, c, a[d + 14], 23, -35309556), c = v(c, l, h, f, a[d + 1], 4, -1530992060), f = v(f, c, l, h, a[d + 4], 11, 1272893353), h = v(h, f, c, l, a[d + 7], 16, -155497632), l = v(l, h, f, c, a[d + 10], 23, -1094730640), c = v(c, l, h, f, a[d + 13], 4, 681279174), f = v(f, c, l, h, a[d + 0], 11, -358537222), h = v(h, f, c, l, a[d + 3], 16, -722521979), l = v(l, h, f, c, a[d + 6], 23, 76029189), c = v(c, l, h, f, a[d + 9], 4, -640364487), f = v(f, c, l, h, a[d + 12], 11, -421815835), h = v(h, f, c, l, a[d + 15], 16, 530742520), l = v(l, h, f, c, a[d + 2], 23, -995338651), c = y(c, l, h, f, a[d + 0], 6, -198630844), f = y(f, c, l, h, a[d + 7], 10, 1126891415), h = y(h, f, c, l, a[d + 14], 15, -1416354905), l = y(l, h, f, c, a[d + 5], 21, -57434055), c = y(c, l, h, f, a[d + 12], 6, 1700485571), f = y(f, c, l, h, a[d + 3], 10, -1894986606), h = y(h, f, c, l, a[d + 10], 15, -1051523), l = y(l, h, f, c, a[d + 1], 21, -2054922799), c = y(c, l, h, f, a[d + 8], 6, 1873313359), f = y(f, c, l, h, a[d + 15], 10, -30611744), h = y(h, f, c, l, a[d + 6], 15, -1560198380), l = y(l, h, f, c, a[d + 13], 21, 1309151649), c = y(c, l, h, f, a[d + 4], 6, -145523070), f = y(f, c, l, h, a[d + 11], 10, -1120210379), h = y(h, f, c, l, a[d + 2], 15, 718787259), l = y(l, h, f, c, a[d + 9], 21, -343485551), c = c + m >>> 0, l = l + g >>> 0, h = h + b >>> 0, f = f + w >>> 0
					}
					return t.endian([c, l, h, f])
				};
			o._ff = function(e, t, n, r, i, s, o) {
				var a = e + (t & n | ~t & r) + (i >>> 0) + o;
				return(a << s | a >>> 32 - s) + t
			}, o._gg = function(e, t, n, r, i, s, o) {
				var a = e + (t & r | n & ~r) + (i >>> 0) + o;
				return(a << s | a >>> 32 - s) + t
			}, o._hh = function(e, t, n, r, i, s, o) {
				var a = e + (t ^ n ^ r) + (i >>> 0) + o;
				return(a << s | a >>> 32 - s) + t
			}, o._ii = function(e, t, n, r, i, s, o) {
				var a = e + (n ^ (t | ~r)) + (i >>> 0) + o;
				return(a << s | a >>> 32 - s) + t
			}, o._blocksize = 16, o._digestsize = 16, e.exports = function(e, n) {
				if(void 0 === e || null === e) throw new Error("Illegal argument " + e);
				var r = t.wordsToBytes(o(e, n));
				return n && n.asBytes ? r : n && n.asString ? s.bytesToString(r) : t.bytesToHex(r)
			}
		}()
	}, function(e, t, n) {
		function r(e) {
			var t = i(e) ? Object.prototype.toString.call(e) : "";
			return "[object Function]" === t
		}
		var i = n(8);
		e.exports = r
	}, function(e, t, n) {
		function r(e) {
			if(e) return i(e)
		}

		function i(e) {
			for(var t in r.prototype) e[t] = r.prototype[t];
			return e
		}
		var s = n(8);
		e.exports = r, r.prototype.clearTimeout = function() {
			return this._timeout = 0, this._responseTimeout = 0, clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), this
		}, r.prototype.parse = function(e) {
			return this._parser = e, this
		}, r.prototype.responseType = function(e) {
			return this._responseType = e, this
		}, r.prototype.serialize = function(e) {
			return this._serializer = e, this
		}, r.prototype.timeout = function(e) {
			return e && "object" == typeof e ? ("undefined" != typeof e.deadline && (this._timeout = e.deadline), "undefined" != typeof e.response && (this._responseTimeout = e.response), this) : (this._timeout = e, this._responseTimeout = 0, this)
		}, r.prototype.then = function(e, t) {
			if(!this._fullfilledPromise) {
				var n = this;
				this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function(e, t) {
					n.end(function(n, r) {
						n ? t(n) : e(r)
					})
				})
			}
			return this._fullfilledPromise.then(e, t)
		}, r.prototype.catch = function(e) {
			return this.then(void 0, e)
		}, r.prototype.use = function(e) {
			return e(this), this
		}, r.prototype.ok = function(e) {
			if("function" != typeof e) throw Error("Callback required");
			return this._okCallback = e, this
		}, r.prototype._isResponseOK = function(e) {
			return !!e && (this._okCallback ? this._okCallback(e) : e.status >= 200 && e.status < 300)
		}, r.prototype.get = function(e) {
			return this._header[e.toLowerCase()]
		}, r.prototype.getHeader = r.prototype.get, r.prototype.set = function(e, t) {
			if(s(e)) {
				for(var n in e) this.set(n, e[n]);
				return this
			}
			return this._header[e.toLowerCase()] = t, this.header[e] = t, this
		}, r.prototype.unset = function(e) {
			return delete this._header[e.toLowerCase()], delete this.header[e], this
		}, r.prototype.field = function(e, t) {
			if(null === e || void 0 === e) throw new Error(".field(name, val) name can not be empty");
			if(this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"), s(e)) {
				for(var n in e) this.field(n, e[n]);
				return this
			}
			if(Array.isArray(t)) {
				for(var r in t) this.field(e, t[r]);
				return this
			}
			if(null === t || void 0 === t) throw new Error(".field(name, val) val can not be empty");
			return "boolean" == typeof t && (t = "" + t), this._getFormData().append(e, t), this
		}, r.prototype.abort = function() {
			return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this)
		}, r.prototype.withCredentials = function() {
			return this._withCredentials = !0, this
		}, r.prototype.redirects = function(e) {
			return this._maxRedirects = e, this
		}, r.prototype.toJSON = function() {
			return {
				method: this.method,
				url: this.url,
				data: this._data,
				headers: this._header
			}
		}, r.prototype.send = function(e) {
			var t = s(e),
				n = this._header["content-type"];
			if(this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"), t && !this._data) Array.isArray(e) ? this._data = [] : this._isHost(e) || (this._data = {});
			else if(e && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
			if(t && s(this._data))
				for(var r in e) this._data[r] = e[r];
			else "string" == typeof e ? (n || this.type("form"), n = this._header["content-type"], "application/x-www-form-urlencoded" == n ? this._data = this._data ? this._data + "&" + e : e : this._data = (this._data || "") + e) : this._data = e;
			return !t || this._isHost(e) ? this : (n || this.type("json"),
				this)
		}, r.prototype.sortQuery = function(e) {
			return this._sort = "undefined" == typeof e || e, this
		}, r.prototype._timeoutError = function(e, t) {
			if(!this._aborted) {
				var n = new Error(e + t + "ms exceeded");
				n.timeout = t, n.code = "ECONNABORTED", this.timedout = !0, this.abort(), this.callback(n)
			}
		}, r.prototype._setTimeouts = function() {
			var e = this;
			this._timeout && !this._timer && (this._timer = setTimeout(function() {
				e._timeoutError("Timeout of ", e._timeout)
			}, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function() {
				e._timeoutError("Response timeout of ", e._responseTimeout)
			}, this._responseTimeout))
		}
	}, function(e, t, n) {
		function r(e) {
			if(e) return i(e)
		}

		function i(e) {
			for(var t in r.prototype) e[t] = r.prototype[t];
			return e
		}
		var s = n(48);
		e.exports = r, r.prototype.get = function(e) {
			return this.header[e.toLowerCase()]
		}, r.prototype._setHeaderProperties = function(e) {
			var t = e["content-type"] || "";
			this.type = s.type(t);
			var n = s.params(t);
			for(var r in n) this[r] = n[r];
			this.links = {};
			try {
				e.link && (this.links = s.parseLinks(e.link))
			} catch(e) {}
		}, r.prototype._setStatusProperties = function(e) {
			var t = e / 100 | 0;
			this.status = this.statusCode = e, this.statusType = t, this.info = 1 == t, this.ok = 2 == t, this.redirect = 3 == t, this.clientError = 4 == t, this.serverError = 5 == t, this.error = (4 == t || 5 == t) && this.toError(), this.accepted = 202 == e, this.noContent = 204 == e, this.badRequest = 400 == e, this.unauthorized = 401 == e, this.notAcceptable = 406 == e, this.forbidden = 403 == e, this.notFound = 404 == e
		}
	}, function(e, t) {
		t.type = function(e) {
			return e.split(/ *; */).shift()
		}, t.params = function(e) {
			return e.split(/ *; */).reduce(function(e, t) {
				var n = t.split(/ *= */),
					r = n.shift(),
					i = n.shift();
				return r && i && (e[r] = i), e
			}, {})
		}, t.parseLinks = function(e) {
			return e.split(/ *, */).reduce(function(e, t) {
				var n = t.split(/ *; */),
					r = n[0].slice(1, -1),
					i = n[1].split(/ *= */)[1].slice(1, -1);
				return e[i] = r, e
			}, {})
		}, t.cleanHeader = function(e, t) {
			return delete e["content-type"], delete e["content-length"], delete e["transfer-encoding"], delete e.host, t && delete e.cookie, e
		}
	}, function(e, t) {}, function(e, t, n) {
		"use strict";
		var r = n(6);
		r._ = n(0), r.version = n(12), r.Promise = n(1), r.localStorage = n(11), r.Cache = n(10), r.Error = n(3), n(19), n(16)(r), n(18)(r), n(14)(r), n(22)(r), n(25)(r), n(17)(r), n(21)(r), n(26)(r), n(29)(r), n(24)(r), n(15)(r), n(23)(r), n(28)(r), n(27)(r), n(20)(r), e.exports = r
	}])
});
//# sourceMappingURL=av-min.js.map