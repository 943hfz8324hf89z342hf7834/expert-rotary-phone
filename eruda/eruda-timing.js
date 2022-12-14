/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*! eruda-timing v2.0.0 https://github.com/liriliri/eruda-timing#readme */
! function(e, t) {
    e.erudaTiming = t()
}(window, (function() {
    return function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) n.d(r, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "/assets/", n(n.s = 12)
    }([function(e, t, n) {
        "use strict";
        t.__esModule = !0, t.extend = u, t.indexOf = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
            return -1
        }, t.escapeExpression = function(e) {
            if ("string" != typeof e) {
                if (e && e.toHTML) return e.toHTML();
                if (null == e) return "";
                if (!e) return e + "";
                e = "" + e
            }
            if (!a.test(e)) return e;
            return e.replace(o, i)
        }, t.isEmpty = function(e) {
            return !e && 0 !== e || !(!c(e) || 0 !== e.length)
        }, t.createFrame = function(e) {
            var t = u({}, e);
            return t._parent = e, t
        }, t.blockParams = function(e, t) {
            return e.path = t, e
        }, t.appendContextPath = function(e, t) {
            return (e ? e + "." : "") + t
        };
        var r = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;",
                "=": "&#x3D;"
            },
            o = /[&<>"'`=]/g,
            a = /[&<>"'`=]/;

        function i(e) {
            return r[e]
        }

        function u(e) {
            for (var t = 1; t < arguments.length; t++)
                for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
            return e
        }
        var l = Object.prototype.toString;
        t.toString = l;
        var s = function(e) {
            return "function" == typeof e
        };
        s(/x/) && (t.isFunction = s = function(e) {
            return "function" == typeof e && "[object Function]" === l.call(e)
        }), t.isFunction = s;
        var c = Array.isArray || function(e) {
            return !(!e || "object" != typeof e) && "[object Array]" === l.call(e)
        };
        t.isArray = c
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];

        function o(e, t) {
            var n = t && t.loc,
                a = void 0,
                i = void 0,
                u = void 0,
                l = void 0;
            n && (a = n.start.line, i = n.end.line, u = n.start.column, l = n.end.column, e += " - " + a + ":" + u);
            for (var s = Error.prototype.constructor.call(this, e), c = 0; c < r.length; c++) this[r[c]] = s[r[c]];
            Error.captureStackTrace && Error.captureStackTrace(this, o);
            try {
                n && (this.lineNumber = a, this.endLineNumber = i, Object.defineProperty ? (Object.defineProperty(this, "column", {
                    value: u,
                    enumerable: !0
                }), Object.defineProperty(this, "endColumn", {
                    value: l,
                    enumerable: !0
                })) : (this.column = u, this.endColumn = l))
            } catch (e) {}
        }
        o.prototype = new Error, t.default = o, e.exports = t.default
    }, function(e, t) {
        function n(t) {
            return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, n(t)
        }
        e.exports = n
    }, function(e, t, n) {
        var r = n(16);

        function o(t, n, a) {
            return "undefined" != typeof Reflect && Reflect.get ? e.exports = o = Reflect.get : e.exports = o = function(e, t, n) {
                var o = r(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            }, o(t, n, a || t)
        }
        e.exports = o
    }, function(e, t) {
        e.exports = function() {
            "use strict";
            var e, t, n, r, o, a, i, u, l = {},
                s = l.has = (e = Object.prototype.hasOwnProperty, function(t, n) {
                    return e.call(t, n)
                }),
                c = l.objToStr = (t = Object.prototype.toString, function(e) {
                    return t.call(e)
                }),
                d = l.isArgs = function(e) {
                    return "[object Arguments]" === c(e)
                },
                f = l.isArr = Array.isArray || function(e) {
                    return "[object Array]" === c(e)
                },
                p = l.isNum = function(e) {
                    return "[object Number]" === c(e)
                },
                m = l.isFn = function(e) {
                    var t = c(e);
                    return "[object Function]" === t || "[object GeneratorFunction]" === t
                },
                h = l.isArrLike = (n = Math.pow(2, 53) - 1, function(e) {
                    if (!e) return !1;
                    var t = e.length;
                    return p(t) && t >= 0 && t <= n && !m(e)
                }),
                v = l.isStr = function(e) {
                    return "[object String]" === c(e)
                },
                g = l.keys = Object.keys || function(e) {
                    var t, n = [];
                    for (t in e) s(e, t) && n.push(t);
                    return n
                };
            return l.isEmpty = function(e) {
                return null == e || (h(e) && (f(e) || v(e) || d(e)) ? 0 === e.length : 0 === g(e).length)
            }, l.ready = (o = [], a = document, i = a.documentElement.doScroll, (u = (i ? /^loaded|^c/ : /^loaded|^i|^c/).test(a.readyState)) || a.addEventListener("DOMContentLoaded", r = function() {
                for (a.removeEventListener("DOMContentLoaded", r), u = 1; r = o.shift();) r()
            }), function(e) {
                u ? setTimeout(e, 0) : o.push(e)
            }), l
        }()
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.__esModule = !0, t.HandlebarsEnvironment = s;
        var o = n(0),
            a = r(n(1)),
            i = n(6),
            u = n(30),
            l = r(n(32));
        t.VERSION = "4.5.3";
        t.COMPILER_REVISION = 8;
        t.LAST_COMPATIBLE_COMPILER_REVISION = 7;
        t.REVISION_CHANGES = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: "== 1.x.x",
            5: "== 2.0.0-alpha.x",
            6: ">= 2.0.0-beta.1",
            7: ">= 4.0.0 <4.3.0",
            8: ">= 4.3.0"
        };

        function s(e, t, n) {
            this.helpers = e || {}, this.partials = t || {}, this.decorators = n || {}, i.registerDefaultHelpers(this), u.registerDefaultDecorators(this)
        }
        s.prototype = {
            constructor: s,
            logger: l.default,
            log: l.default.log,
            registerHelper: function(e, t) {
                if ("[object Object]" === o.toString.call(e)) {
                    if (t) throw new a.default("Arg not supported with multiple helpers");
                    o.extend(this.helpers, e)
                } else this.helpers[e] = t
            },
            unregisterHelper: function(e) {
                delete this.helpers[e]
            },
            registerPartial: function(e, t) {
                if ("[object Object]" === o.toString.call(e)) o.extend(this.partials, e);
                else {
                    if (void 0 === t) throw new a.default('Attempting to register a partial called "' + e + '" as undefined');
                    this.partials[e] = t
                }
            },
            unregisterPartial: function(e) {
                delete this.partials[e]
            },
            registerDecorator: function(e, t) {
                if ("[object Object]" === o.toString.call(e)) {
                    if (t) throw new a.default("Arg not supported with multiple decorators");
                    o.extend(this.decorators, e)
                } else this.decorators[e] = t
            },
            unregisterDecorator: function(e) {
                delete this.decorators[e]
            }
        };
        var c = l.default.log;
        t.log = c, t.createFrame = o.createFrame, t.logger = l.default
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.__esModule = !0, t.registerDefaultHelpers = function(e) {
            o.default(e), a.default(e), i.default(e), u.default(e), l.default(e), s.default(e), c.default(e)
        }, t.moveHelperToHooks = function(e, t, n) {
            e.helpers[t] && (e.hooks[t] = e.helpers[t], n || delete e.helpers[t])
        };
        var o = r(n(23)),
            a = r(n(24)),
            i = r(n(25)),
            u = r(n(26)),
            l = r(n(27)),
            s = r(n(28)),
            c = r(n(29))
    }, function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function(e, t) {
        e.exports = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
    }, function(e, t) {
        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        e.exports = function(e, t, r) {
            return t && n(e.prototype, t), r && n(e, r), e
        }
    }, function(e, t, n) {
        var r = n(14),
            o = n(15);
        e.exports = function(e, t) {
            return !t || "object" !== r(t) && "function" != typeof t ? o(e) : t
        }
    }, function(e, t, n) {
        var r = n(17);
        e.exports = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && r(e, t)
        }
    }, function(e, t, n) {
        e.exports = n(13).default
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(8),
            o = n.n(r),
            a = n(9),
            i = n.n(a),
            u = n(10),
            l = n.n(u),
            s = n(2),
            c = n.n(s),
            d = n(3),
            f = n.n(d),
            p = n(11),
            m = n.n(p),
            h = n(4),
            v = n.n(h);
        t.default = function(e) {
            var t = e.util,
                r = t.evalCss,
                a = t.getFileName,
                u = t.$;
            return new(function(e) {
                function t() {
                    var e;
                    o()(this, t), (e = l()(this, c()(t).call(this))).name = "timing", e._style = r(n(18)), e._performanceTimingData = [], e._performanceTiming = {}, e._showPerformanceDetail = !1, e._resourceTimingData = [], e._tpl = n(20);
                    var a = e._performance = window.webkitPerformance || window.performance;
                    return e._hasResourceTiming = a && v.a.isFn(a.getEntries), e
                }
                return m()(t, e), i()(t, [{
                    key: "init",
                    value: function(e, n) {
                        f()(c()(t.prototype), "init", this).call(this, e, n), this._container = n, this._bindEvent()
                    }
                }, {
                    key: "show",
                    value: function() {
                        f()(c()(t.prototype), "show", this).call(this), this._render()
                    }
                }, {
                    key: "hide",
                    value: function() {
                        f()(c()(t.prototype), "hide", this).call(this)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        f()(c()(t.prototype), "destroy", this).call(this), r.remove(this._style)
                    }
                }, {
                    key: "_bindEvent",
                    value: function() {
                        var e = this,
                            t = this._$el,
                            n = this._container,
                            r = this;
                        t.on("click", ".eruda-performance-timing", (function() {
                            r._showPerformanceDetail = !r._showPerformanceDetail, r._render()
                        })).on("click", ".eruda-entry", (function() {
                            var e = u(this).data("idx"),
                                t = r._resourceTimingData[Number(e)];
                            "img" === t.initiatorType && function(e, t) {
                                var r = n.get("sources");
                                if (!r) return;
                                r.set(e, t), n.showTool("sources")
                            }("img", t.url)
                        })).on("click", ".eruda-refresh-resource-timing", (function() {
                            e._render()
                        }))
                    }
                }, {
                    key: "_getPerformanceTimingData",
                    value: function() {
                        var e = this._performance;
                        if (e) {
                            var t = e.timing;
                            if (t) {
                                var n = [],
                                    r = t.navigationStart,
                                    o = t.unloadEventStart,
                                    a = t.unloadEventEnd,
                                    i = (t.redirectStart, t.redirectEnd, t.fetchStart),
                                    u = t.domainLookupStart,
                                    l = t.domainLookupEnd,
                                    s = t.connectStart,
                                    c = t.connectEnd,
                                    d = (t.secureConnectionStart, t.requestStart),
                                    f = t.responseStart,
                                    p = t.responseEnd,
                                    m = t.domLoading,
                                    h = t.domInteractive,
                                    v = (t.domContentLoadedEventStart, t.domContentLoadedEventEnd, t.domComplete),
                                    g = (t.loadEventStart, t.loadEventEnd),
                                    b = r,
                                    y = !0,
                                    _ = g - b;
                                if (n.push(w("Total", r, g)), n.push(w("Network/Server", r, f)), n.push(w("App Cache", i, u)), n.push(w("DNS", u, l)), n.push(w("TCP", s, c)), n.push(w("Time to First Byte", d, f)), n.push(w("Response", f, p)), n.push(w("Unload", o, a)), n.push(w("DOM Processing", m, v)), n.push(w("DOM Construction", m, h)), y) {
                                    this._performanceTimingData = n;
                                    var x = {};
                                    ["navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"].forEach((function(e) {
                                        x[e] = 0 === t[e] ? 0 : t[e] - b
                                    })), this._performanceTiming = x
                                }
                            }
                        }

                        function w(e, t, n) {
                            var r = n - t;
                            return r < 0 && (y = !1), {
                                name: e,
                                start: (t - b) / _ * 100,
                                duration: r,
                                len: r / _ * 100
                            }
                        }
                    }
                }, {
                    key: "_getResourceTimingData",
                    value: function() {
                        if (this._hasResourceTiming) {
                            var e = this._performance.getEntries(),
                                t = [],
                                n = 0;
                            e.forEach((function(e) {
                                "resource" === e.entryType && e.responseEnd > n && (n = e.responseEnd)
                            })), e.forEach((function(e) {
                                if ("resource" === e.entryType) {
                                    var r = {
                                        left: e.startTime / n * 100,
                                        connection: (e.requestStart - e.startTime) / n * 100,
                                        ttfb: (e.responseStart - e.requestStart) / n * 100,
                                        response: (e.responseEnd - e.responseStart) / n * 100
                                    };
                                    t.push({
                                        name: a(e.name),
                                        displayTime: Math.round(e.duration) + "ms",
                                        url: e.name,
                                        timeline: r,
                                        initiatorType: e.initiatorType
                                    })
                                }
                            })), this._resourceTimingData = t
                        }
                    }
                }, {
                    key: "_render",
                    value: function() {
                        var e = this;
                        if (this.active) {
                            this._getResourceTimingData();
                            var t = {
                                entries: this._resourceTimingData
                            };
                            0 === this._performanceTimingData.length ? v.a.ready((function() {
                                e._getPerformanceTimingData(), e._render()
                            })) : this._getPerformanceTimingData(), t.data = this._performanceTimingData, t.timing = this._performanceTiming, t.showPerformanceDetail = this._showPerformanceDetail, t.timing || t.entries || (t.notSupported = !0), this._renderHtml(this._tpl(t))
                        }
                    }
                }, {
                    key: "_renderHtml",
                    value: function(e) {
                        e !== this._lastHtml && (this._lastHtml = e, this._$el.html(e))
                    }
                }]), t
            }(e.Tool))
        }
    }, function(e, t) {
        function n(t) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function(e) {
                return typeof e
            } : e.exports = n = function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, n(t)
        }
        e.exports = n
    }, function(e, t) {
        e.exports = function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
    }, function(e, t, n) {
        var r = n(2);
        e.exports = function(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = r(e)););
            return e
        }
    }, function(e, t) {
        function n(t, r) {
            return e.exports = n = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            }, n(t, r)
        }
        e.exports = n
    }, function(e, t, n) {
        (t = n(19)(!1)).push([e.i, ".eruda-dev-tools .eruda-tools .eruda-timing{overflow-y:auto;-webkit-overflow-scrolling:touch}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing{padding:10px 0}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing .eruda-inner-wrapper{background:var(--darker-background)}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing .eruda-inner-wrapper .eruda-bar{overflow-x:auto;-webkit-overflow-scrolling:touch;border-bottom:1px solid var(--border)}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing .eruda-inner-wrapper .eruda-bar span{font-size:12px;white-space:nowrap;padding:5px 0;background:var(--highlight);display:inline-block}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing .eruda-inner-wrapper .eruda-bar:last-child{border-bottom:none}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing-data{padding-bottom:10px;text-align:center}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing-data table{width:100%;border-collapse:collapse;text-align:left}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing-data table th{background:var(--darker-background);text-align:left;font-size:14px}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing-data table td{font-size:12px}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing-data table th,.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing-data table td{padding:10px;border:1px solid var(--border)}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing-data table tr:nth-child(even){background:var(--contrast)}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-title{border-top:1px solid var(--border);background:var(--darker-background);padding:10px}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-title .eruda-btn{display:-webkit-box;display:flex;margin-left:5px;float:right;width:18px;height:18px;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;font-size:16px;cursor:pointer;-webkit-transition:color .3s;transition:color .3s}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-title .eruda-btn:active{color:var(--select-foreground)}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-entries{border-bottom:1px solid var(--border);margin-bottom:10px;overflow-x:auto;-webkit-overflow-scrolling:touch}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-entries table{min-width:100%;cursor:pointer}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-entries table tr:nth-child(4n-1){background:var(--contrast)}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-entries table td.eruda-timeline{padding:0;height:4px;font-size:0}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-entries table td.eruda-timeline span{display:inline-block;height:100%}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-entries table td{border:1px solid var(--border);padding:10px;white-space:nowrap}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-entries table .eruda-right{text-align:right}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-not-supported{background:var(--console-error-background);border:1px solid var(--console-error-border);color:var(--console-error-foreground);margin:10px;padding:10px;text-align:center}\n", ""]), e.exports = t
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map((function(t) {
                    var n = function(e, t) {
                        var n = e[1] || "",
                            r = e[3];
                        if (!r) return n;
                        if (t && "function" == typeof btoa) {
                            var o = (i = r, u = btoa(unescape(encodeURIComponent(JSON.stringify(i)))), l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u), "/*# ".concat(l, " */")),
                                a = r.sources.map((function(e) {
                                    return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */")
                                }));
                            return [n].concat(a).concat([o]).join("\n")
                        }
                        var i, u, l;
                        return [n].join("\n")
                    }(t, e);
                    return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                })).join("")
            }, t.i = function(e, n) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var r = 0; r < e.length; r++) {
                    var o = [].concat(e[r]);
                    n && (o[2] ? o[2] = "".concat(n, " and ").concat(o[2]) : o[2] = n), t.push(o)
                }
            }, t
        }
    }, function(e, t, n) {
        var r = n(21);
        e.exports = (r.default || r).template({
            1: function(e, t, n, r, o) {
                var a, i = null != t ? t : e.nullContext || {};
                return '    <div class="eruda-performance-timing">\n        <div class="eruda-inner-wrapper">\n' + (null != (a = n.each.call(i, null != t ? t.data : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(2, o, 0),
                    inverse: e.noop,
                    data: o,
                    loc: {
                        start: {
                            line: 4,
                            column: 12
                        },
                        end: {
                            line: 8,
                            column: 21
                        }
                    }
                })) ? a : "") + "        </div>\n    </div>\n\n" + (null != (a = n.if.call(i, null != t ? t.showPerformanceDetail : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, o, 0),
                    inverse: e.noop,
                    data: o,
                    loc: {
                        start: {
                            line: 12,
                            column: 4
                        },
                        end: {
                            line: 31,
                            column: 11
                        }
                    }
                })) ? a : "")
            },
            2: function(e, t, n, r, o) {
                var a = e.lambda,
                    i = e.escapeExpression;
                return '                <div class="eruda-bar">\n                    <span style="position:relative;left:' + i(a(null != t ? t.start : t, t)) + "%;width:" + i(a(null != t ? t.len : t, t)) + '%">' + i(a(null != t ? t.name : t, t)) + "(" + i(a(null != t ? t.duration : t, t)) + "ms)</span>\n                </div>\n"
            },
            4: function(e, t, n, r, o) {
                var a;
                return '        <div class="eruda-performance-timing-data">\n            <table>\n                <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Time(ms)</th>\n                    </tr>\n                </thead>\n                <tbody>\n' + (null != (a = n.each.call(null != t ? t : e.nullContext || {}, null != t ? t.timing : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(5, o, 0),
                    inverse: e.noop,
                    data: o,
                    loc: {
                        start: {
                            line: 22,
                            column: 20
                        },
                        end: {
                            line: 27,
                            column: 29
                        }
                    }
                })) ? a : "") + "                </tbody>\n            </table>\n        </div>\n"
            },
            5: function(e, t, n, r, o) {
                var a = e.lambda,
                    i = e.escapeExpression;
                return "                        <tr>\n                            <td>" + i(a(o && o.key, t)) + "</td>\n                            <td>" + i(a(t, t)) + "</td>\n                        </tr>\n"
            },
            7: function(e, t, n, r, o) {
                var a;
                return '    <div class="eruda-title">\n        ResourceTiming\n        <div class="eruda-btn eruda-refresh-resource-timing">\n            <span class="eruda-icon-refresh"></span>\n        </div>\n    </div>\n    <div class="eruda-entries">\n        <table>\n            <tbody>\n' + (null != (a = n.each.call(null != t ? t : e.nullContext || {}, null != t ? t.entries : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(8, o, 0),
                    inverse: e.noop,
                    data: o,
                    loc: {
                        start: {
                            line: 44,
                            column: 16
                        },
                        end: {
                            line: 58,
                            column: 25
                        }
                    }
                })) ? a : "") + "            </tbody>\n        </table>\n    </div>\n"
            },
            8: function(e, t, n, r, o) {
                var a, i = e.lambda,
                    u = e.escapeExpression;
                return '                    <tr class="eruda-entry" data-idx="' + u(i(o && o.key, t)) + '">\n                        <td>' + u(i(null != t ? t.name : t, t)) + "</td>\n                        <td>" + (null != (a = n.if.call(null != t ? t : e.nullContext || {}, null != t ? t.initiatorType : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, o, 0),
                    inverse: e.noop,
                    data: o,
                    loc: {
                        start: {
                            line: 47,
                            column: 28
                        },
                        end: {
                            line: 47,
                            column: 86
                        }
                    }
                })) ? a : "") + '</td>\n                        <td class="eruda-right">' + u(i(null != t ? t.displayTime : t, t)) + '</td>\n                        <td class="eruda-blue">' + u(i(null != t ? t.url : t, t)) + '</td>\n                    </tr>\n                    <tr>\n                        <td class="eruda-timeline" colspan="4">\n                            <span style="border-left: 1px solid #707d8b; background: #707d8b; margin-left: ' + u(i(null != (a = null != t ? t.timeline : t) ? a.left : a, t)) + "%; width: " + u(i(null != (a = null != t ? t.timeline : t) ? a.connection : a, t)) + '%;"></span>\n                            <span style="background: #009688; width: ' + u(i(null != (a = null != t ? t.timeline : t) ? a.ttfb : a, t)) + '%"></span>\n                            <span style="background: #2196f3; width: ' + u(i(null != (a = null != t ? t.timeline : t) ? a.response : a, t)) + '%"></span>\n                        </td>\n                    </tr>\n'
            },
            9: function(e, t, n, r, o) {
                return "<span>" + e.escapeExpression(e.lambda(null != t ? t.initiatorType : t, t)) + "</span>"
            },
            11: function(e, t, n, r, o) {
                return '    <div class="eruda-not-supported">\n        Not supported for this browser!\n    </div>\n'
            },
            compiler: [8, ">= 4.3.0"],
            main: function(e, t, n, r, o) {
                var a, i = null != t ? t : e.nullContext || {};
                return (null != (a = n.if.call(i, null != t ? t.timing : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 32,
                            column: 7
                        }
                    }
                })) ? a : "") + "\n" + (null != (a = n.if.call(i, null != t ? t.entries : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, o, 0),
                    inverse: e.noop,
                    data: o,
                    loc: {
                        start: {
                            line: 34,
                            column: 0
                        },
                        end: {
                            line: 62,
                            column: 7
                        }
                    }
                })) ? a : "") + "\n" + (null != (a = n.if.call(i, null != t ? t.notSupported : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, o, 0),
                    inverse: e.noop,
                    data: o,
                    loc: {
                        start: {
                            line: 64,
                            column: 0
                        },
                        end: {
                            line: 68,
                            column: 7
                        }
                    }
                })) ? a : "")
            },
            useData: !0
        })
    }, function(e, t, n) {
        e.exports = n(22).default
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }
        t.__esModule = !0;
        var a = o(n(5)),
            i = r(n(33)),
            u = r(n(1)),
            l = o(n(0)),
            s = o(n(34)),
            c = r(n(35));

        function d() {
            var e = new a.HandlebarsEnvironment;
            return l.extend(e, a), e.SafeString = i.default, e.Exception = u.default, e.Utils = l, e.escapeExpression = l.escapeExpression, e.VM = s, e.template = function(t) {
                return s.template(t, e)
            }, e
        }
        var f = d();
        f.create = d, c.default(f), f.default = f, t.default = f, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(0);
        t.default = function(e) {
            e.registerHelper("blockHelperMissing", (function(t, n) {
                var o = n.inverse,
                    a = n.fn;
                if (!0 === t) return a(this);
                if (!1 === t || null == t) return o(this);
                if (r.isArray(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : o(this);
                if (n.data && n.ids) {
                    var i = r.createFrame(n.data);
                    i.contextPath = r.appendContextPath(n.data.contextPath, n.name), n = {
                        data: i
                    }
                }
                return a(t, n)
            }))
        }, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        (function(r) {
            t.__esModule = !0;
            var o, a = n(0),
                i = n(1),
                u = (o = i) && o.__esModule ? o : {
                    default: o
                };
            t.default = function(e) {
                e.registerHelper("each", (function(e, t) {
                    if (!t) throw new u.default("Must pass iterator to #each");
                    var n, o = t.fn,
                        i = t.inverse,
                        l = 0,
                        s = "",
                        c = void 0,
                        d = void 0;

                    function f(t, n, r) {
                        c && (c.key = t, c.index = n, c.first = 0 === n, c.last = !!r, d && (c.contextPath = d + t)), s += o(e[t], {
                            data: c,
                            blockParams: a.blockParams([e[t], t], [d + t, null])
                        })
                    }
                    if (t.data && t.ids && (d = a.appendContextPath(t.data.contextPath, t.ids[0]) + "."), a.isFunction(e) && (e = e.call(this)), t.data && (c = a.createFrame(t.data)), e && "object" == typeof e)
                        if (a.isArray(e))
                            for (var p = e.length; l < p; l++) l in e && f(l, l, l === e.length - 1);
                        else if (r.Symbol && e[r.Symbol.iterator]) {
                        for (var m = [], h = e[r.Symbol.iterator](), v = h.next(); !v.done; v = h.next()) m.push(v.value);
                        for (p = (e = m).length; l < p; l++) f(l, l, l === e.length - 1)
                    } else n = void 0, Object.keys(e).forEach((function(e) {
                        void 0 !== n && f(n, l - 1), n = e, l++
                    })), void 0 !== n && f(n, l - 1, !0);
                    return 0 === l && (s = i(this)), s
                }))
            }, e.exports = t.default
        }).call(this, n(7))
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r, o = n(1),
            a = (r = o) && r.__esModule ? r : {
                default: r
            };
        t.default = function(e) {
            e.registerHelper("helperMissing", (function() {
                if (1 !== arguments.length) throw new a.default('Missing helper: "' + arguments[arguments.length - 1].name + '"')
            }))
        }, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r, o = n(0),
            a = n(1),
            i = (r = a) && r.__esModule ? r : {
                default: r
            };
        t.default = function(e) {
            e.registerHelper("if", (function(e, t) {
                if (2 != arguments.length) throw new i.default("#if requires exactly one argument");
                return o.isFunction(e) && (e = e.call(this)), !t.hash.includeZero && !e || o.isEmpty(e) ? t.inverse(this) : t.fn(this)
            })), e.registerHelper("unless", (function(t, n) {
                if (2 != arguments.length) throw new i.default("#unless requires exactly one argument");
                return e.helpers.if.call(this, t, {
                    fn: n.inverse,
                    inverse: n.fn,
                    hash: n.hash
                })
            }))
        }, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0, t.default = function(e) {
            e.registerHelper("log", (function() {
                for (var t = [void 0], n = arguments[arguments.length - 1], r = 0; r < arguments.length - 1; r++) t.push(arguments[r]);
                var o = 1;
                null != n.hash.level ? o = n.hash.level : n.data && null != n.data.level && (o = n.data.level), t[0] = o, e.log.apply(e, t)
            }))
        }, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = /^(constructor|__defineGetter__|__defineSetter__|__lookupGetter__|__proto__)$/;
        t.dangerousPropertyRegex = r, t.default = function(e) {
            e.registerHelper("lookup", (function(e, t) {
                return e ? !r.test(String(t)) || Object.prototype.propertyIsEnumerable.call(e, t) ? e[t] : void 0 : e
            }))
        }
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r, o = n(0),
            a = n(1),
            i = (r = a) && r.__esModule ? r : {
                default: r
            };
        t.default = function(e) {
            e.registerHelper("with", (function(e, t) {
                if (2 != arguments.length) throw new i.default("#with requires exactly one argument");
                o.isFunction(e) && (e = e.call(this));
                var n = t.fn;
                if (o.isEmpty(e)) return t.inverse(this);
                var r = t.data;
                return t.data && t.ids && ((r = o.createFrame(t.data)).contextPath = o.appendContextPath(t.data.contextPath, t.ids[0])), n(e, {
                    data: r,
                    blockParams: o.blockParams([e], [r && r.contextPath])
                })
            }))
        }, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0, t.registerDefaultDecorators = function(e) {
            a.default(e)
        };
        var r, o = n(31),
            a = (r = o) && r.__esModule ? r : {
                default: r
            }
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(0);
        t.default = function(e) {
            e.registerDecorator("inline", (function(e, t, n, o) {
                var a = e;
                return t.partials || (t.partials = {}, a = function(o, a) {
                    var i = n.partials;
                    n.partials = r.extend({}, i, t.partials);
                    var u = e(o, a);
                    return n.partials = i, u
                }), t.partials[o.args[0]] = o.fn, a
            }))
        }, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(0),
            o = {
                methodMap: ["debug", "info", "warn", "error"],
                level: "info",
                lookupLevel: function(e) {
                    if ("string" == typeof e) {
                        var t = r.indexOf(o.methodMap, e.toLowerCase());
                        e = t >= 0 ? t : parseInt(e, 10)
                    }
                    return e
                },
                log: function(e) {
                    if (e = o.lookupLevel(e), "undefined" != typeof console && o.lookupLevel(o.level) <= e) {
                        var t = o.methodMap[e];
                        console[t] || (t = "log");
                        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                        console[t].apply(console, r)
                    }
                }
            };
        t.default = o, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            this.string = e
        }
        t.__esModule = !0, r.prototype.toString = r.prototype.toHTML = function() {
            return "" + this.string
        }, t.default = r, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0, t.checkRevision = function(e) {
            var t = e && e[0] || 1,
                n = u.COMPILER_REVISION;
            if (t >= u.LAST_COMPATIBLE_COMPILER_REVISION && t <= u.COMPILER_REVISION) return;
            if (t < u.LAST_COMPATIBLE_COMPILER_REVISION) {
                var r = u.REVISION_CHANGES[n],
                    o = u.REVISION_CHANGES[t];
                throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + o + ").")
            }
            throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
        }, t.template = function(e, t) {
            if (!t) throw new i.default("No environment passed to template");
            if (!e || !e.main) throw new i.default("Unknown template object: " + typeof e);
            e.main.decorator = e.main_d, t.VM.checkRevision(e.compiler);
            var n = e.compiler && 7 === e.compiler[0];
            var r = {
                strict: function(e, t, n) {
                    if (!(e && t in e)) throw new i.default('"' + t + '" not defined in ' + e, {
                        loc: n
                    });
                    return e[t]
                },
                lookup: function(e, t) {
                    for (var n = e.length, r = 0; r < n; r++)
                        if (e[r] && null != e[r][t]) return e[r][t]
                },
                lambda: function(e, t) {
                    return "function" == typeof e ? e.call(t) : e
                },
                escapeExpression: o.escapeExpression,
                invokePartial: function(n, r, a) {
                    a.hash && (r = o.extend({}, r, a.hash), a.ids && (a.ids[0] = !0)), n = t.VM.resolvePartial.call(this, n, r, a);
                    var u = o.extend({}, a, {
                            hooks: this.hooks
                        }),
                        l = t.VM.invokePartial.call(this, n, r, u);
                    if (null == l && t.compile && (a.partials[a.name] = t.compile(n, e.compilerOptions, t), l = a.partials[a.name](r, u)), null != l) {
                        if (a.indent) {
                            for (var s = l.split("\n"), c = 0, d = s.length; c < d && (s[c] || c + 1 !== d); c++) s[c] = a.indent + s[c];
                            l = s.join("\n")
                        }
                        return l
                    }
                    throw new i.default("The partial " + a.name + " could not be compiled when running in runtime-only mode")
                },
                fn: function(t) {
                    var n = e[t];
                    return n.decorator = e[t + "_d"], n
                },
                programs: [],
                program: function(e, t, n, r, o) {
                    var a = this.programs[e],
                        i = this.fn(e);
                    return t || o || r || n ? a = s(this, e, i, t, n, r, o) : a || (a = this.programs[e] = s(this, e, i)), a
                },
                data: function(e, t) {
                    for (; e && t--;) e = e._parent;
                    return e
                },
                nullContext: Object.seal({}),
                noop: t.VM.noop,
                compilerInfo: e.compiler
            };

            function a(t) {
                var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    o = n.data;
                a._setup(n), !n.partial && e.useData && (o = d(t, o));
                var i = void 0,
                    u = e.useBlockParams ? [] : void 0;

                function l(t) {
                    return "" + e.main(r, t, r.helpers, r.partials, o, u, i)
                }
                return e.useDepths && (i = n.depths ? t != n.depths[0] ? [t].concat(n.depths) : n.depths : [t]), (l = f(e.main, l, r, n.depths || [], o, u))(t, n)
            }
            return a.isTop = !0, a._setup = function(a) {
                if (a.partial) r.helpers = a.helpers, r.partials = a.partials, r.decorators = a.decorators, r.hooks = a.hooks;
                else {
                    r.helpers = o.extend({}, t.helpers, a.helpers), e.usePartial && (r.partials = o.extend({}, t.partials, a.partials)), (e.usePartial || e.useDecorators) && (r.decorators = o.extend({}, t.decorators, a.decorators)), r.hooks = {};
                    var i = a.allowCallsToHelperMissing || n;
                    l.moveHelperToHooks(r, "helperMissing", i), l.moveHelperToHooks(r, "blockHelperMissing", i)
                }
            }, a._child = function(t, n, o, a) {
                if (e.useBlockParams && !o) throw new i.default("must pass block params");
                if (e.useDepths && !a) throw new i.default("must pass parent depths");
                return s(r, t, e[t], n, 0, o, a)
            }, a
        }, t.wrapProgram = s, t.resolvePartial = function(e, t, n) {
            e ? e.call || n.name || (n.name = e, e = n.partials[e]) : e = "@partial-block" === n.name ? n.data["partial-block"] : n.partials[n.name];
            return e
        }, t.invokePartial = function(e, t, n) {
            var r = n.data && n.data["partial-block"];
            n.partial = !0, n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
            var a = void 0;
            n.fn && n.fn !== c && function() {
                n.data = u.createFrame(n.data);
                var e = n.fn;
                a = n.data["partial-block"] = function(t) {
                    var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    return n.data = u.createFrame(n.data), n.data["partial-block"] = r, e(t, n)
                }, e.partials && (n.partials = o.extend({}, n.partials, e.partials))
            }();
            void 0 === e && a && (e = a);
            if (void 0 === e) throw new i.default("The partial " + n.name + " could not be found");
            if (e instanceof Function) return e(t, n)
        }, t.noop = c;
        var r, o = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(n(0)),
            a = n(1),
            i = (r = a) && r.__esModule ? r : {
                default: r
            },
            u = n(5),
            l = n(6);

        function s(e, t, n, r, o, a, i) {
            function u(t) {
                var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    u = i;
                return !i || t == i[0] || t === e.nullContext && null === i[0] || (u = [t].concat(i)), n(e, t, e.helpers, e.partials, o.data || r, a && [o.blockParams].concat(a), u)
            }
            return (u = f(n, u, e, i, r, a)).program = t, u.depth = i ? i.length : 0, u.blockParams = o || 0, u
        }

        function c() {
            return ""
        }

        function d(e, t) {
            return t && "root" in t || ((t = t ? u.createFrame(t) : {}).root = e), t
        }

        function f(e, t, n, r, a, i) {
            if (e.decorator) {
                var u = {};
                t = e.decorator(t, u, n, r && r[0], a, i, r), o.extend(t, u)
            }
            return t
        }
    }, function(e, t, n) {
        "use strict";
        (function(n) {
            t.__esModule = !0, t.default = function(e) {
                var t = void 0 !== n ? n : window,
                    r = t.Handlebars;
                e.noConflict = function() {
                    return t.Handlebars === e && (t.Handlebars = r), e
                }
            }, e.exports = t.default
        }).call(this, n(7))
    }])
}));
//# sourceMappingURL=eruda-timing.js.map
