/*! For license information please see app@798ab416.315dec1fe4cd953c2386.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
        [4],
    {
        10: function (e, t, n) {
            "use strict";
            n(20),
            n(26);
            function i(e) {
                return "function" == typeof e
            }
            function s(e) {
                return "string" == typeof e
            }
            function o(e) {
                return "number" == typeof e
            }
            function r(e) {
                return "boolean" == typeof e
            }
            function a(e) {
                return void 0 === e
            }
            function l(e) {
                return null === e
            }
            function c(e) {
                return e instanceof Window
            }
            function d(e) {
                return e instanceof Document
            }
            function u(e) {
                return e instanceof Element
            }
            function h(e) {
                return ! i(e) && ! c(e) && o(e.length)
            }
            function m(e) {
                return "object" == typeof e && null !== e
            }
            function p(e) {
                return d(e) ? e.documentElement : e
            }
            function g(e) {
                return e.replace(/^-ms-/, "ms-").replace(/-([a-z])/g, ((e, t) => t.toUpperCase()))
            }
            function f(e) {
                return e.replace(/[A-Z]/g, (e => "-" + e.toLowerCase()))
            }
            function v(e, t) {
                return window.getComputedStyle(e).getPropertyValue(f(t))
            }
            function b(e) {
                return "border-box" === v(e, "box-sizing")
            }
            function x(e, t, n) {
                const i = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"];
                return [0, 1].reduce(((t, s, o) => {
                    let r = n + i[o];
                    return "border" === n && (r += "Width"),
                    t + parseFloat(v(e, r) || "0")
                }), 0)
            }
            function w(e, t) {
                if ("width" === t || "height" === t) {
                    const n = e.getBoundingClientRect()[t];
                    return b(e) ? `${n}px` : n - x(e, t, "border") - x(e, t, "padding") + "px"
                }
                return v(e, t)
            }
            function $(e, t) {
                const n = document.createElement(t);
                return n.innerHTML = e,
                [].slice.call(n.childNodes)
            }
            function y() {
                return !1
            }
            const C = [
                "animationIterationCount",
                "columnCount",
                "fillOpacity",
                "flexGrow",
                "flexShrink",
                "fontWeight",
                "gridArea",
                "gridColumn",
                "gridColumnEnd",
                "gridColumnStart",
                "gridRow",
                "gridRowEnd",
                "gridRowStart",
                "lineHeight",
                "opacity",
                "order",
                "orphans",
                "widows",
                "zIndex",
                "zoom"
            ];
            function E(e, t) {
                if (h(e)) {
                    for (let n = 0; n < e.length; n += 1) 
                        if (!1 === t.call(e[n], n, e[n])) 
                            return e


                        
                    


                } else {
                    const n = Object.keys(e);
                    for (let i = 0; i < n.length; i += 1) 
                        if (!1 === t.call(e[n[i]], n[i], e[n[i]])) 
                            return e


                        
                    


                }
                return e
            }
            class k {
                constructor(e) {
                    return this.length = 0,
                    e ? (E(e, ((e, t) => {
                        this[e] = t
                    })), this.length = e.length, this) : this
                }
            }
            const _ = function () {
                const e = function (t) {
                    if (! t) 
                        return new k;
                    

                    if (t instanceof k) 
                        return t;
                    

                    if (i(t)) 
                        return /complete|loaded|interactive/.test(document.readyState) && document.body ? t.call(document, e) : document.addEventListener("DOMContentLoaded", (() => t.call(document, e)), !1),
                        new k([document]);
                    

                    if (s(t)) {
                        const e = t.trim();
                        if ("<" === e[0] && ">" === e[e.length - 1]) {
                            let t = "div";
                            return E({
                                li: "ul",
                                tr: "tbody",
                                td: "tr",
                                th: "tr",
                                tbody: "table",
                                option: "select"
                            }, ((n, i) => {
                                if (0 === e.indexOf(`<${n}`)) 
                                    return t = i,
                                    !1

                                

                            })),
                            new k($(e, t))
                        }
                        if ("#" !== t[0] || t.match(/[ .<>:~]/)) 
                            return new k(document.querySelectorAll(t));
                        

                        const n = document.getElementById(t.slice(1));
                        return n ? new k([n]) : new k
                    }
                    return h(t) && !function (e) {
                        return e instanceof Node
                    }(t) ? new k(t) : new k([t])
                };
                return e.fn = k.prototype,
                e
            }();
            setTimeout((() => _("body").addClass("mdui-loaded")));
            const L = {
                $: _
            };
            function O(e, t) {
                return e !== t && p(e).contains(t)
            }
            function T(e, t) {
                return E(t, ((t, n) => {
                    e.push(n)
                })),
                e
            }
            _.fn.each = function (e) {
                return E(this, e)
            },
            _.fn.get = function (e) {
                return void 0 === e ? [].slice.call(this) : this[e >= 0 ? e : e + this.length]
            },
            _.fn.find = function (e) {
                const t = [];
                return this.each(((n, i) => {
                    T(t, _(i.querySelectorAll(e)).get())
                })),
                new k(t)
            };
            const S = {};
            let I = 1;
            function M(e) {
                const t = "_mduiEventId";
                return e[t] || (e[t] =++ I),
                e[t]
            }
            function R(e) {
                const t = e.split(".");
                return {type: t[0], ns: t.slice(1).sort().join(" ")}
            }
            function D(e) {
                return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
            }
            function P(e, t, n, i) {
                const s = S[M(e)] || [],
                    o = t => {
                        delete s[t.id],
                        e.removeEventListener(t.type, t.proxy, !1)
                    };
                t ? t.split(" ").forEach((t => {
                    t && function (e, t, n, i) {
                        const s = R(t);
                        return(S[M(e)] || []).filter((e => e && (! s.type || e.type === s.type) && (! s.ns || D(s.ns).test(e.ns)) && (! n || M(e.func) === M(n)) && (! i || e.selector === i)))
                    }(e, t, n, i).forEach((e => o(e)))
                })) : s.forEach((e => o(e)))
            }
            function j(e, t, ... n) {
                return n.unshift(t),
                E(n, ((t, n) => {
                    E(n, ((t, n) => {
                        a(n) || (e[t] = n)
                    }))
                })),
                e
            }
            function A(e) {
                if (! m(e) && !Array.isArray(e)) 
                    return "";
                

                const t = [];
                function n(e, i) {
                    let s;
                    m(i) ? E(i, ((t, o) => {
                        s = Array.isArray(i) && ! m(o) ? "" : t,
                        n(`${e}[${s}]`, o)
                    })) : (s = null == i || "" === i ? "=" : `=${
                        encodeURIComponent(i)
                    }`,
                    t.push(encodeURIComponent(e) + s))
                }
                return Array.isArray(e) ? E(e, (function () {
                    n(this.name, this.value)
                })) : E(e, n),
                t.join("&")
            }
            _.fn.trigger = function (e, t) {
                const n = R(e);
                let i;
                const s = {
                    bubbles: !0,
                    cancelable: !0
                };
                return ["click", "mousedown", "mouseup", "mousemove"].indexOf(n.type) > -1 ? i = new MouseEvent(n.type, s) : (s.detail = t, i = new CustomEvent(n.type, s)),
                i._detail = t,
                i._ns = n.ns,
                this.each((function () {
                    this.dispatchEvent(i)
                }))
            };
            const U = {},
                q = {
                    ajaxStart: "start.mdui.ajax",
                    ajaxSuccess: "success.mdui.ajax",
                    ajaxError: "error.mdui.ajax",
                    ajaxComplete: "complete.mdui.ajax"
                };
            function B(e) {
                return ["GET", "HEAD"].indexOf(e) >= 0
            }
            function H(e, t) {
                return `${e}&${t}`.replace(/[&?]{1,2}/, "?")
            }
            _.ajax = function (e) {
                let t = !1;
                    const n = {},
                i = function (e) {
                            const t = {
                                url: "",
                                method: "GET",
                                data: "",
                                processData: !0,
                                async: !0,
                                cache: !0,
                                username: "",
                                password: "",
                                headers: {},
                                xhrFields: {},
                                statusCode: {},
                                dataType: "text",
                                contentType: "application/x-www-form-urlencoded",
                                timeout: 0,
                                global: !0
                            };
                            return E(U, ((e, n) => {
                                [
                                    "beforeSend",
                                    "success",
                                    "error",
                                    "complete",
                                    "statusCode"
                                ].indexOf(e) < 0 && ! a(n) && (t[e] = n)
                            })),
                            j({}, t, e)
                        }(e);
                    let o = i.url || window.location.toString();
                    const r = i.method.toUpperCase();
                    let l = i.data;
                    const c = i.processData,
                d = i.async,
                u = i.cache,
                h = i.username,
                m = i.password,
                p = i.headers,
                g = i.xhrFields,
                f = i.statusCode,
                v = i.dataType,
                b = i.contentType,
                x = i.timeout,
                w = i.global;
                    function $(e, n, s, ... o) {
                        let r,
                            a;
                        w && _(document).trigger(e, n),
                        s && (s in U && (r = U[s](... o)), i[s] && (a = i[s](... o)), "beforeSend" === s && (!1 === r || !1 === a) && (t =! 0))
                    }
                    return l && (B(r) || c) && ! s(l) && !(l instanceof ArrayBuffer) && !(l instanceof Blob) && !(l instanceof Document) && !(l instanceof FormData) && (l = A(l)),
                l && B(r) && (o = H(o, l), l = null),
                function () {
                    let e;
                            return new Promise(((s, c) => {
                                B(r) && ! u && (o = H(o, `_=${
                                    Date.now()
                                }`));
                                const w = new XMLHttpRequest;
                                let y;
                                w.open(r, o, d, h, m),
                                (b || l && ! B(r) && !1 !== b) && w.setRequestHeader("Content-Type", b),
                                "json" === v && w.setRequestHeader("Accept", "application/json, text/javascript"),
                                p && E(p, ((e, t) => {
                                    a(t) || w.setRequestHeader(e, t + "")
                                })),
                                /^([\w-]+:)?\/\/([^/]+)/.test(o) && RegExp.$2 !== window.location.host || w.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                                g && E(g, ((e, t) => {
                                    w[e] = t
                                })),
                                n.xhr = w,
                                n.options = i,
                                w.onload = function () {
                                    y && clearTimeout(y);
                                    const t = w.status >= 200 && w.status < 300 || 304 === w.status || 0 === w.status;
                                    let i;
                                    if (t) 
                                        if (e = 204 === w.status || "HEAD" === r ? "nocontent" : 304 === w.status ? "notmodified" : "success", "json" === v) {
                                            try {
                                                i = "HEAD" === r ? void 0 : JSON.parse(w.responseText),
                                                n.data = i
                                            } catch (t) {
                                                e = "parsererror",
                                                $(q.ajaxError, n, "error", w, e),
                                                c(new Error(e))
                                            }
                                            "parsererror" !== e && ($(q.ajaxSuccess, n, "success", i, e, w), s(i))
                                        }
                                     else 
                                        i = "HEAD" === r ? void 0 : "text" === w.responseType || "" === w.responseType ? w.responseText : w.response,
                                        n.data = i,
                                        $(q.ajaxSuccess, n, "success", i, e, w),
                                        s(i);
                                    
                                
                             else 
                                e = "error",
                                $(q.ajaxError, n, "error", w, e),
                                c(new Error(e));
                             E([
                                U.statusCode, f
                            ], ((n, s) => {
                                s && s[w.status] && (t ? s[w.status](i, e, w) : s[w.status](w, e))
                            })), $(q.ajaxComplete, n, "complete", w, e)
                        }, w.onerror = function () {
                            y && clearTimeout(y),
                            $(q.ajaxError, n, "error", w, w.statusText),
                            $(q.ajaxComplete, n, "complete", w, "error"),
                            c(new Error(w.statusText))
                        }, w.onabort = function () {
                            let e = "abort";
                            y && (e = "timeout", clearTimeout(y)),
                            $(q.ajaxError, n, "error", w, e),
                            $(q.ajaxComplete, n, "complete", w, e),
                            c(new Error(e))
                        }, $(q.ajaxStart, n, "beforeSend", w), t ? c(new Error("cancel")) : (x > 0 && (y = setTimeout((() => {
                            w.abort()
                        }), x)), w.send(l))
                    }
                )
            )
        }()
    },
    _.ajaxSetup = function (e) {
        return j(U, e)
    },
    _.contains = O;
    const N = "_mduiElementDataStorage";
    function z(e, t) {
        e[N] || (e[N] =
            {}),
        E(t, ((t, n) => {
            e[N][g(t)] = n
        }))
    }
    function W(e, t, n) {
        return m(t) ? (z(e, t), t) : a(n) ? a(t) ? e[N] ? e[N] : {} : (t = g(t), e[N] && t in e[N] ? e[N][t] : void 0) : (z(e, {[t]: n}), n)
    }
    function F(e, t) {
        let n;
        const i = [];
        return E(e, ((e, s) => {
            n = t.call(window, s, e),
            null != n && i.push(n)
        })),
        [].concat(... i)
    }
    function X(e, t) {
        if (! e[N]) 
            return;
        

        const n = t => {
            t = g(t),
            e[N][t] && (e[N][t] = null,
            delete e[N][t])
        };
        a(t) ? (e[N] = null, delete e[N]) : s(t) ? t.split(" ").filter((e => e)).forEach((e => n(e))) : E(t, ((e, t) => n(t)))
    }
    function Y(e) {
        const t = [];
        return E(e, ((e, n) => {
            -1 === t.indexOf(n) && t.push(n)
        })),
        t
    }
    function K(e, t, n, i, s) {
        const o = [];
        let r;
        return e.each(((e, a) => {
            for (r = a[n]; r && u(r);) {
                if (2 === t) {
                    if (i && _(r).is(i)) 
                        break;
                    

                    (! s || _(r).is(s)) && o.push(r)
                } else {
                    if (0 === t) {
                        (! i || _(r).is(i)) && o.push(r);
                        break
                    }
                    (! i || _(r).is(i)) && o.push(r)
                } r = r[n]
            }
        })),
        new k(Y(o))
    }
    _.data = W,
    _.each = E,
    _.extend = function (... e) {
        return 1 === e.length ? (E(e[0], ((e, t) => {
            this[e] = t
        })), this) : j(e.shift(), e.shift(), ... e)
    },
    _.map = F,
    _.merge = T,
    _.param = A,
    _.removeData = X,
    _.unique = Y,
    _.fn.add = function (e) {
        return new k(Y(T(this.get(), _(e).get())))
    },
    E(
        [
            "add", "remove", "toggle"
        ],
        ((e, t) => {
            _.fn[`${t}Class`] = function (e) {
                return "remove" !== t || arguments.length ? this.each(((n, s) => {
                    if (! u(s)) 
                        return;
                    

                    E((i(e) ? e.call(s, n, s.getAttribute("class") || "") : e).split(" ").filter((e => e)), ((e, n) => {
                        s.classList[t](n)
                    }))
                })) : this.each(((e, t) => {
                    t.setAttribute("class", "")
                }))
            }
        })
    ),
    E(
        [
            "insertBefore", "insertAfter"
        ],
        ((e, t) => {
            _.fn[t] = function (t) {
                const n = e ? _(this.get().reverse()) : this,
                    i = _(t),
                    s = [];
                return i.each(((t, i) => {
                    ! i.parentNode || n.each(((n, o) => {
                        const r = t ? o.cloneNode(!0) : o,
                            a = e ? i.nextSibling : i;
                        s.push(r),
                        i.parentNode.insertBefore(r, a)
                    }))
                })),
                _(e ? s.reverse() : s)
            }
        })
    ),
    E(
        [
            "before", "after"
        ],
        ((e, t) => {
            _.fn[t] = function (... t) {
                return 1 === e && (t = t.reverse()),
                this.each(((n, o) => {
                    E(i(t[0]) ? [t[0].call(o, n, o.innerHTML)] : t, ((t, i) => {
                        let r;
                        r = function (e) {
                            return s(e) && ("<" !== e[0] || ">" !== e[e.length - 1])
                        }(i) ? _($(i, "div")) : n && u(i) ? _(i.cloneNode(!0)) : _(i),
                        r[e ? "insertAfter" : "insertBefore"](o)
                    }))
                }))
            }
        })
    ),
    _.fn.off = function (e, t, n) {
        return m(e) ? (E(e, ((e, n) => {
            this.off(e, t, n)
        })), this) : ((!1 === t || i(t)) && (n = t, t = void 0), !1 === n && (n = y), this.each((function () {
            P(this, e, n, t)
        })))
    },
    _.fn.on = function (e, t, n, i, o) {
        if (m(e)) 
            return s(t) || (n = n || t, t = void 0),
            E(e, ((e, i) => {
                this.on(e, t, n, i, o)
            })),
            this;
        

        if (null == n && null == i ? (i = t, n = t = void 0) : null == i && (s(t) ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) 
            i = y;
         else if (! i) 
            return this;
        

        if (o) {
            const e = this,
                n = i;
            i = function (s) {
                return e.off(s.type, t, i),
                n.apply(this, arguments)
            }
        }
        return this.each((function () {
            !function (e, t, n, i, s) {
                const o = M(e);
                S[o] || (S[o] =[]);
                let r = !1;
                m(i) && i.useCapture && (r =! 0),
                t.split(" ").forEach((t => {
                    if (! t) 
                        return;
                    

                    const a = R(t);
                    function l(e, t) {
                        !1 === n.apply(t, void 0 === e._detail ? [e] : [e].concat(e._detail)) && (e.preventDefault(), e.stopPropagation())
                    }
                    function c(t) {
                        t._ns && ! D(t._ns).test(a.ns) || (t._data = i, s ? _(e).find(s).get().reverse().forEach((e => {
                            (e === t.target || O(e, t.target)) && l(t, e)
                        })) : l(t, e))
                    }
                    const d = {
                        type: a.type,
                        ns: a.ns,
                        func: n,
                        selector: s,
                        id: S[o].length,
                        proxy: c
                    };
                    S[o].push(d),
                    e.addEventListener(d.type, c, r)
                }))
            }(this, e, i, n, t)
        }))
    },
    E(q, ((e, t) => {
        _.fn[e] = function (e) {
            return this.on(t, ((t, n) => {
                e(t, n.xhr, n.options, n.data)
            }))
        }
    })),
    _.fn.map = function (e) {
        return new k(F(this, ((t, n) => e.call(t, n, t))))
    },
    _.fn.clone = function () {
        return this.map((function () {
            return this.cloneNode(!0)
        }))
    },
    _.fn.is = function (e) {
        let t = !1;
        if (i(e)) 
            return this.each(((n, i) => {
                e.call(i, n, i) && (t =! 0)
            })),
            t;
        

        if (s(e)) 
            return this.each(((n, i) => {
                d(i) || c(i) || (i.matches || i.msMatchesSelector).call(i, e) && (t =! 0)
            })),
            t;
        

        const n = _(e);
        return this.each(((e, i) => {
            n.each(((e, n) => {
                i === n && (t =! 0)
            }))
        })),
        t
    },
    _.fn.remove = function (e) {
        return this.each(((t, n) => {
            n.parentNode && (! e || _(n).is(e)) && n.parentNode.removeChild(n)
        }))
    },
    E(
        [
            "prepend", "append"
        ],
        ((e, t) => {
            _.fn[t] = function (... t) {
                return this.each(((n, o) => {
                    const r = o.childNodes,
                        a = r.length,
                        l = a ? r[e ? a - 1 : 0] : document.createElement("div");
                    a || o.appendChild(l);
                    let c = i(t[0]) ? [t[0].call(o, n, o.innerHTML)] : t;
                    n && (c = c.map((e => s(e) ? e : _(e).clone()))),
                    _(l)[e ? "after" : "before"](... c),
                    a || o.removeChild(l)
                }))
            }
        })
    ),
    E(
        [
            "appendTo", "prependTo"
        ],
        ((e, t) => {
            _.fn[t] = function (t) {
                const n = [],
                    i = _(t).map(((t, i) => {
                        const s = i.childNodes,
                            o = s.length;
                        if (o) 
                            return s[e ? 0 : o - 1];
                        

                        const r = document.createElement("div");
                        return i.appendChild(r),
                        n.push(r),
                        r
                    })),
                    s = this[e ? "insertBefore" : "insertAfter"](i);
                return _(n).remove(),
                s
            }
        })
    ),
    E(
        [
            "attr", "prop", "css"
        ],
        ((e, t) => {
            function n(t, n, i) {
                if (! a(i)) 
                    switch (e) {
                        case 0: l(i) ? t.removeAttribute(n) : t.setAttribute(n, i);
                            break;
                        case 1: t[n] = i;
                            break;
                        default: n = g(n),
                            t.style[n] = o(i) ? `${i}${
                                C.indexOf(n) > -1 ? "" : "px"
                            }` : i
                    }
                

            }
            function s(t, n) {
                switch (e) {
                    case 0:
                        const e = t.getAttribute(n);
                        return l(e) ? void 0 : e;
                    case 1:
                        return t[n];
                    default:
                        return w(t, n)
                }
            }
            _.fn[t] = function (e, o) {
                if (m(e)) 
                    return E(e, ((e, n) => {
                        this[t](e, n)
                    })),
                    this;
                

                if (1 === arguments.length) {
                    const t = this[0];
                    return u(t) ? s(t, e) : void 0
                }
                return this.each(((t, r) => {
                    n(r, e, i(o) ? o.call(r, t, s(r, e)) : o)
                }))
            }
        })
    ),
    _.fn.children = function (e) {
        const t = [];
        return this.each(((n, i) => {
            E(i.childNodes, ((n, i) => {
                ! u(i) || (! e || _(i).is(e)) && t.push(i)
            }))
        })),
        new k(Y(t))
    },
    _.fn.slice = function (... e) {
        return new k([].slice.apply(this, e))
    },
    _.fn.eq = function (e) {
        const t = -1 === e ? this.slice(e) : this.slice(e, + e + 1);
        return new k(t)
    },
    E(
        [
            "", "s", "sUntil"
        ],
        ((e, t) => {
            _.fn[`parent${t}`] = function (t, n) {
                return K(e ? _(this.get().reverse()) : this, e, "parentNode", t, n)
            }
        })
    ),
    _.fn.closest = function (e) {
        if (this.is(e)) 
            return this;
        

        const t = [];
        return this.parents().each(((n, i) => {
            if (_(i).is(e)) 
                return t.push(i),
                !1

            

        })),
        new k(t)
    };
    const G = /^(?:{[\w\W]*\}|\[[\w\W]*\])$/;
    function J(e, t, n) {
        if (a(n) && 1 === e.nodeType) {
            const i = "data-" + f(t);
            if (s(n = e.getAttribute(i))) 
                try {
                    n = function (e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e ===+ e + "" ? + e : G.test(e) ? JSON.parse(e) : e)
                    }(n)
                }
             catch (e) {} else 
                n = void 0

            

        }
        return n
    }
    function V(e, t, n, i, s, o) {
        const r = n => x(e, t.toLowerCase(), n) * o;
        return 2 === i && s && (n += r("margin")),
        b(e) ? (!!window.document.documentMode && 1 === o && (n += r("border"), n += r("padding")), 0 === i && (n -= r("border")), 1 === i && (n -= r("border"), n -= r("padding"))) : (0 === i && (n += r("padding")), 2 === i && (n += r("border"), n += r("padding"))),
        n
    }
    function Q(e, t, n, i) {
        const s = `client${t}`,
            o = `scroll${t}`,
            r = `offset${t}`,
            a = `inner${t}`;
        if (c(e)) 
            return 2 === n ? e[a] : p(document)[s];
        

        if (d(e)) {
            const t = p(e);
            return Math.max(e.body[o], t[o], e.body[r], t[r], t[s])
        }
        const l = parseFloat(v(e, t.toLowerCase()) || "0");
        return V(e, t, l, n, i, 1)
    }
    function Z(e, t, n, s, o, r) {
        let a = i(r) ? r.call(e, t, Q(e, n, s, o)) : r;
        if (null == a) 
            return;
        

        const l = _(e),
            c = n.toLowerCase();
        if (["auto", "inherit", ""].indexOf(a) > -1) 
            return void l.css(c, a);
        

        const d = a.toString().replace(/\b[0-9.]*/, "");
        a = V(e, n, parseFloat(a), s, o, -1) + (d || "px"),
        l.css(c, a)
    }
    function ee(e, t) {
        return parseFloat(e.css(t))
    }
    function te(e) {
        if (! e.getClientRects().length) 
            return {top: 0, left: 0};
        

        const t = e.getBoundingClientRect(),
            n = e.ownerDocument.defaultView;
        return {
            top: t.top + n.pageYOffset,
            left: t.left + n.pageXOffset
        }
    }
    function ne(e, t, n) {
        const s = _(e),
            o = s.css("position");
        "static" === o && s.css("position", "relative");
        const r = te(e),
            a = s.css("top"),
            l = s.css("left");
        let c,
            d;
        if (("absolute" === o || "fixed" === o) && (a + l).indexOf("auto") > -1) {
            const e = s.position();
            c = e.top,
            d = e.left
        } else 
            c = parseFloat(a),
            d = parseFloat(l);
        

        const u = i(t) ? t.call(e, n, j({}, r)) : t;
        s.css({
            top: null != u.top ? u.top - r.top + c : void 0,
            left: null != u.left ? u.left - r.left + d : void 0
        })
    }
    _.fn.data = function (e, t) {
        if (a(e)) {
            if (!this.length) 
                return;
            

            const e = this[0],
                t = W(e);
            if (1 !== e.nodeType) 
                return t;
            

            const n = e.attributes;
            let i = n.length;
            for (; i--;) 
                if (n[i]) {
                    let s = n[i].name;
                    0 === s.indexOf("data-") && (s = g(s.slice(5)), t[s] = J(e, s, t[s]))
                }
            

            return t
        }
        return m(e) ? this.each((function () {
            W(this, e)
        })) : 2 === arguments.length && a(t) ? this : a(t) ? this.length ? J(this[0], e, W(this[0], e)) : void 0 : this.each((function () {
            W(this, e, t)
        }))
    },
    _.fn.empty = function () {
        return this.each((function () {
            this.innerHTML = ""
        }))
    },
    _.fn.extend = function (e) {
        return E(e, ((e, t) => {
            _.fn[e] = t
        })),
        this
    },
    _.fn.filter = function (e) {
        if (i(e)) 
            return this.map(((t, n) => e.call(n, t, n) ? n : void 0));
        

        if (s(e)) 
            return this.map(((t, n) => _(n).is(e) ? n : void 0));
        

        const t = _(e);
        return this.map(((e, n) => t.get().indexOf(n) > -1 ? n : void 0))
    },
    _.fn.first = function () {
        return this.eq(0)
    },
    _.fn.has = function (e) {
        const t = s(e) ? this.find(e) : _(e), {length: n} = t;
        return this.map((function () {
            for (let e = 0; e < n; e += 1) 
                if (O(this, t[e])) 
                    return this


                
            


        }))
    },
    _.fn.hasClass = function (e) {
        return this[0].classList.contains(e)
    },
    E(
        [
            "Width", "Height"
        ],
        ((e, t) => {
            E([
                `inner${t}`, t.toLowerCase(), `outer${t}`
            ], ((e, n) => {
                _.fn[n] = function (n, i) {
                    const s = arguments.length && (e < 2 || ! r(n)),
                        o = !0 === n || !0 === i;
                    return s ? this.each(((i, s) => Z(s, i, t, e, o, n))) : this.length ? Q(this[0], t, e, o) : void 0
                }
            }))
        })
    ),
    _.fn.hide = function () {
        return this.each((function () {
            this.style.display = "none"
        }))
    },
    E(
        [
            "val", "html", "text"
        ],
        ((e, t) => {
            const n = {
                0: "value",
                1: "innerHTML",
                2: "textContent"
            }[e];
            function s(t) {
                if (2 === e) 
                    return F(t, (e => p(e)[n])).join("");
                

                if (! t.length) 
                    return;
                

                const i = t[0];
                return 0 === e && _(i).is("select[multiple]") ? F(_(i).find("option:checked"), (e => e.value)) : i[n]
            }
            function o(t, i) {
                if (a(i)) {
                    if (0 !== e) 
                        return;
                    

                    i = ""
                }
                1 === e && u(i) && (i = i.outerHTML),
                t[n] = i
            }
            _.fn[t] = function (t) {
                return arguments.length ? this.each(((n, r) => {
                    const a = i(t) ? t.call(r, n, s(_(r))) : t;
                    0 === e && Array.isArray(a) ? _(r).is("select[multiple]") ? F(_(r).find("option"), (e => e.selected = a.indexOf(e.value) > -1)) : r.checked = a.indexOf(r.value) > -1 : o(r, a)
                })) : s(this)
            }
        })
    ),
    _.fn.index = function (e) {
        return arguments.length ? s(e) ? _(e).get().indexOf(this[0]) : this.get().indexOf(_(e)[0]) : this.eq(0).parent().children().get().indexOf(this[0])
    },
    _.fn.last = function () {
        return this.eq(-1)
    },
    E(
        [
            "", "All", "Until"
        ],
        ((e, t) => {
            _.fn[`next${t}`] = function (t, n) {
                return K(this, e, "nextElementSibling", t, n)
            }
        })
    ),
    _.fn.not = function (e) {
        const t = this.filter(e);
        return this.map(((e, n) => t.index(n) > -1 ? void 0 : n))
    },
    _.fn.offsetParent = function () {
        return this.map((function () {
            let e = this.offsetParent;
            for (; e && "static" === _(e).css("position");) 
                e = e.offsetParent;
            

            return e || document.documentElement
        }))
    },
    _.fn.position = function () {
        if (!this.length) 
            return;
        

        const e = this.eq(0);
        let t,
            n = {
                left: 0,
                top: 0
            };
        if ("fixed" === e.css("position")) 
            t = e[0].getBoundingClientRect();
         else {
            t = e.offset();
            const i = e.offsetParent();
            n = i.offset(),
            n.top += ee(i, "border-top-width"),
            n.left += ee(i, "border-left-width")
        }
        return {
            top: t.top - n.top - ee(e, "margin-top"),
            left: t.left - n.left - ee(e, "margin-left")
        }
    },
    _.fn.offset = function (e) {
        return arguments.length ? this.each((function (t) {
            ne(this, e, t)
        })) : this.length ? te(this[0]) : void 0
    },
    _.fn.one = function (e, t, n, i) {
        return this.on(e, t, n, i, !0)
    },
    E(
        [
            "", "All", "Until"
        ],
        ((e, t) => {
            _.fn[`prev${t}`] = function (t, n) {
                return K(e ? _(this.get().reverse()) : this, e, "previousElementSibling", t, n)
            }
        })
    ),
    _.fn.removeAttr = function (e) {
        const t = e.split(" ").filter((e => e));
        return this.each((function () {
            E(t, ((e, t) => {
                this.removeAttribute(t)
            }))
        }))
    },
    _.fn.removeData = function (e) {
        return this.each((function () {
            X(this, e)
        }))
    },
    _.fn.removeProp = function (e) {
        return this.each((function () {
            try {
                delete this[e]
            } catch (e) {}
        }))
    },
    _.fn.replaceWith = function (e) {
        return this.each(((t, n) => {
            let o = e;
            i(o) ? o = o.call(n, t, n.innerHTML) : t && ! s(o) && (o = _(o).clone()),
            _(n).before(o)
        })),
        this.remove()
    },
    _.fn.replaceAll = function (e) {
        return _(e).map(((e, t) => (_(t).replaceWith(e ? this.clone() : this), this.get())))
    },
    _.fn.serializeArray = function () {
        const e = [];
        return this.each(((t, n) => {
            const i = n instanceof HTMLFormElement ? n.elements : [n];
            _(i).each(((t, n) => {
                const i = _(n),
                    s = n.type,
                    o = n.nodeName.toLowerCase();
                if ("fieldset" !== o && n.name && ! n.disabled && ["input", "select", "textarea", "keygen"].indexOf(o) > -1 && -1 === [
                    "submit",
                    "button",
                    "image",
                    "reset",
                    "file"
                ].indexOf(s) && (-1 === ["radio", "checkbox"].indexOf(s) || n.checked)) {
                    const t = i.val();
                    (Array.isArray(t) ? t : [t]).forEach((t => {
                        e.push({name: n.name, value: t})
                    }))
                }
            }))
        })),
        e
    },
    _.fn.serialize = function () {
        return A(this.serializeArray())
    };
    const ie = {};
    _.fn.show = function () {
        return this.each((function () {
            "none" === this.style.display && (this.style.display = ""),
            "none" === w(this, "display") && (this.style.display = function (e) {
                let t,
                    n;
                return ie[e] || (t = document.createElement(e), document.body.appendChild(t), n = w(t, "display"), t.parentNode.removeChild(t), "none" === n && (n = "block"), ie[e] = n),
                ie[e]
            }(this.nodeName))
        }))
    },
    _.fn.siblings = function (e) {
        return this.prevAll(e).add(this.nextAll(e))
    },
    _.fn.toggle = function () {
        return this.each((function () {
            "none" === w(this, "display") ? _(this).show() : _(this).hide()
        }))
    },
    _.fn.reflow = function () {
        return this.each((function () {
            return this.clientLeft
        }))
    },
    _.fn.transition = function (e) {
        return o(e) && (e =
            `${e}ms`),
        this.each((function () {
            this.style.webkitTransitionDuration = e,
            this.style.transitionDuration = e
        }))
    },
    _.fn.transitionEnd = function (e) {
        const t = this,
            n = ["webkitTransitionEnd", "transitionend"];
        function i(s) {
            s.target === this && (e.call(this, s), E(n, ((e, n) => {
                t.off(n, i)
            })))
        }
        return E(n, ((e, n) => {
            t.on(n, i)
        })),
        this
    },
    _.fn.transformOrigin = function (e) {
        return this.each((function () {
            this.style.webkitTransformOrigin = e,
            this.style.transformOrigin = e
        }))
    },
    _.fn.transform = function (e) {
        return this.each((function () {
            this.style.webkitTransform = e,
            this.style.transform = e
        }))
    };
    const se = {};
    function oe(e, t, n, i) {
        let s = W(i, "_mdui_mutation");
        s || (s =[], W(i, "_mdui_mutation", s)),
        -1 === s.indexOf(e) && (s.push(e), t.call(i, n, i))
    }
    _.fn.mutation = function () {
        return this.each(((e, t) => {
            const n = _(t);
            E(se, ((i, s) => {
                n.is(i) && oe(i, s, e, t),
                n.find(i).each(((e, t) => {
                    oe(i, s, e, t)
                }))
            }))
        }))
    },
    _.showOverlay = function (e) {
        let t = _(".mdui-overlay");
        t.length ? (t.data("_overlay_is_deleted", !1), a(e) || t.css("z-index", e)) : (a(e) && (e = 2e3), t = _('<div class="mdui-overlay">').appendTo(document.body).reflow().css("z-index", e));
        let n = t.data("_overlay_level") || 0;
        return t.data("_overlay_level", ++ n).addClass("mdui-overlay-show")
    },
    _.hideOverlay = function (e =! 1) {
        const t = _(".mdui-overlay");
        if (! t.length) 
            return;
        

        let n = e ? 1 : t.data("_overlay_level");
        n > 1 ? t.data("_overlay_level", -- n) : t.data("_overlay_level", 0).removeClass("mdui-overlay-show").data("_overlay_is_deleted", !0).transitionEnd((() => {
            t.data("_overlay_is_deleted") && t.remove()
        }))
    },
    _.lockScreen = function () {
        const e = _("body"),
            t = e.width();
        let n = e.data("_lockscreen_level") || 0;
        e.addClass("mdui-locked").width(t).data("_lockscreen_level", ++ n)
    },
    _.unlockScreen = function (e =! 1) {
        const t = _("body");
        let n = e ? 1 : t.data("_lockscreen_level");
        n > 1 ? t.data("_lockscreen_level", -- n) : t.data("_lockscreen_level", 0).removeClass("mdui-locked").width("")
    },
    _.throttle = function (e, t = 16) {
        let n = null;
        return function (... i) {
            l(n) && (n = setTimeout((() => {
                e.apply(this, i),
                n = null
            }), t))
        }
    };
    const re = {};
    function ae(e, t, n, i, s) {
        s || (s =
            {}),
        s.inst = i;
        const o = `${e}.mdui.${t}`;
        "undefined" != typeof jQuery && jQuery(n).trigger(o, s);
        const r = _(n);
        r.trigger(o, s);
        const a = new CustomEvent(o, {
            bubbles: !0,
            cancelable: !0,
            detail: s
        });
        a._detail = s,
        r[0].dispatchEvent(a)
    }
    _.guid = function (e) {
        if (! a(e) && ! a(re[e])) 
            return re[e];
        

        function t() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        const n = "_" + t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
        return a(e) || (re[e] = n),
        n
    },
    L.mutation = function (e, t) {
        a(e) || a(t) ? _(document).mutation() : (se[e] = t, _(e).each(((n, i) => oe(e, t, n, i))))
    };
    const le = _(document),
        ce = _(window);
    _("body");
    const de = {
        tolerance: 5,
        offset: 0,
        initialClass: "mdui-headroom",
        pinnedClass: "mdui-headroom-pinned-top",
        unpinnedClass: "mdui-headroom-unpinned-top"
    };
    function ue(e, t) {
        const n = _(e).attr(t);
        return n ? new Function("", `var json = ${n}; return JSON.parse(JSON.stringify(json));`)() : {}
    }
    L.Headroom = class {
        constructor(e, t = {}) {
            this.options = j({}, de),
            this.state = "pinned",
            this.isEnable = !1,
            this.lastScrollY = 0,
            this.rafId = 0,
            this.$element = _(e).first(),
            j(this.options, t);
            const n = this.options.tolerance;
            o(n) && (this.options.tolerance =
                { down: n,
                up: n
            }),
            this.enable()
        }
        onScroll() {
            this.rafId = window.requestAnimationFrame((() => {
                const e = window.pageYOffset,
                    t = e > this.lastScrollY ? "down" : "up",
                    n = this.options.tolerance[t],
                    i = Math.abs(e - this.lastScrollY) >= n;
                e > this.lastScrollY && e >= this.options.offset && i ? this.unpin() : (e < this.lastScrollY && i || e <= this.options.offset) && this.pin(),
                this.lastScrollY = e
            }))
        }
        triggerEvent(e) {
            ae(e, "headroom", this.$element, this)
        }
        transitionEnd() {
            "pinning" === this.state && (this.state = "pinned", this.triggerEvent("pinned")),
            "unpinning" === this.state && (this.state = "unpinned", this.triggerEvent("unpinned"))
        }
        pin() {
            "pinning" === this.state || "pinned" === this.state || !this.$element.hasClass(this.options.initialClass) || (this.triggerEvent("pin"), this.state = "pinning", this.$element.removeClass(this.options.unpinnedClass).addClass(this.options.pinnedClass).transitionEnd((() => this.transitionEnd())))
        }
        unpin() {
            "unpinning" === this.state || "unpinned" === this.state || !this.$element.hasClass(this.options.initialClass) || (this.triggerEvent("unpin"), this.state = "unpinning", this.$element.removeClass(this.options.pinnedClass).addClass(this.options.unpinnedClass).transitionEnd((() => this.transitionEnd())))
        }
        enable() {
            this.isEnable || (this.isEnable =! 0, this.state = "pinned", this.$element.addClass(this.options.initialClass).removeClass(this.options.pinnedClass).removeClass(this.options.unpinnedClass), this.lastScrollY = window.pageYOffset, ce.on("scroll", (() => this.onScroll())))
        }
        disable() {
            !this.isEnable || (this.isEnable =! 1, this.$element.removeClass(this.options.initialClass).removeClass(this.options.pinnedClass).removeClass(this.options.unpinnedClass), ce.off("scroll", (() => this.onScroll())), window.cancelAnimationFrame(this.rafId))
        }
        getState() {
            return this.state
        }
    };
    const he = "mdui-headroom";
    _((() => {
        L.mutation(`[${he}]`, (function () {
            new L.Headroom(this, ue(this, he))
        }))
    }));
    const me = {
        accordion: !1
    };
    class pe {
        constructor(e, t = {}) {
            this.options = j({}, me);
            const n = `mdui-${
                this.getNamespace()
            }-item`;
            this.classItem = n,
            this.classItemOpen = `${n}-open`,
            this.classHeader = `${n}-header`,
            this.classBody = `${n}-body`,
            this.$element = _(e).first(),
            j(this.options, t),
            this.bindEvent()
        }
        bindEvent() {
            const e = this;
            this.$element.on("click", `.${
                this.classHeader
            }`, (function () {
                const t = _(this).parent();
                e.getItems().each(((n, i) => {
                    t.is(i) && e.toggle(i)
                }))
            })),
            this.$element.on("click", `[mdui-${
                this.getNamespace()
            }-item-close]`, (function () {
                const t = _(this).parents(`.${
                    e.classItem
                }`).first();
                e.close(t)
            }))
        }
        isOpen(e) {
            return e.hasClass(this.classItemOpen)
        }
        getItems() {
            return this.$element.children(`.${
                this.classItem
            }`)
        }
        getItem(e) {
            return o(e) ? this.getItems().eq(e) : _(e).first()
        }
        triggerEvent(e, t) {
            ae(e, this.getNamespace(), t, this)
        }
        transitionEnd(e, t) {
            this.isOpen(t) ? (e.transition(0).height("auto").reflow().transition(""), this.triggerEvent("opened", t)) : (e.height(""), this.triggerEvent("closed", t))
        }
        open(e) {
            const t = this.getItem(e);
            if (this.isOpen(t)) 
                return;
            

            this.options.accordion && this.$element.children(`.${
                this.classItemOpen
            }`).each(((e, n) => {
                const i = _(n);
                i.is(t) || this.close(i)
            }));
            const n = t.children(`.${
                this.classBody
            }`);
            n.height(n[0].scrollHeight).transitionEnd((() => this.transitionEnd(n, t))),
            this.triggerEvent("open", t),
            t.addClass(this.classItemOpen)
        }
        close(e) {
            const t = this.getItem(e);
            if (!this.isOpen(t)) 
                return;
            

            const n = t.children(`.${
                this.classBody
            }`);
            this.triggerEvent("close", t),
            t.removeClass(this.classItemOpen),
            n.transition(0).height(n[0].scrollHeight).reflow().transition("").height("").transitionEnd((() => this.transitionEnd(n, t)))
        }
        toggle(e) {
            const t = this.getItem(e);
            this.isOpen(t) ? this.close(t) : this.open(t)
        }
        openAll() {
            this.getItems().each(((e, t) => this.open(t)))
        }
        closeAll() {
            this.getItems().each(((e, t) => this.close(t)))
        }
    } L.Collapse = class extends pe {
        getNamespace() {
            return "collapse"
        }
    };
    const ge = "mdui-collapse";
    _((() => {
        L.mutation(`[${ge}]`, (function () {
            new L.Collapse(this, ue(this, ge))
        }))
    }));
    L.Panel = class extends pe {
        getNamespace() {
            return "panel"
        }
    };
    const fe = "mdui-panel";
    _((() => {
        L.mutation(`[${fe}]`, (function () {
            new L.Panel(this, ue(this, fe))
        }))
    }));
    class ve {
        constructor(e) {
            this.$thRow = _(),
            this.$tdRows = _(),
            this.$thCheckbox = _(),
            this.$tdCheckboxs = _(),
            this.selectable = !1,
            this.selectedRow = 0,
            this.$element = _(e).first(),
            this.init()
        }
        init() {
            this.$thRow = this.$element.find("thead tr"),
            this.$tdRows = this.$element.find("tbody tr"),
            this.selectable = this.$element.hasClass("mdui-table-selectable"),
            this.updateThCheckbox(),
            this.updateTdCheckbox(),
            this.updateNumericCol()
        }
        createCheckboxHTML(e) {
            return `<${e} class="mdui-table-cell-checkbox"><label class="mdui-checkbox"><input type="checkbox"/><i class="mdui-checkbox-icon"></i></label></${e}>`
        }
        updateThCheckboxStatus() {
            const e = this.$thCheckbox[0],
                t = this.selectedRow,
                n = this.$tdRows.length;
            e.checked = t === n,
            e.indeterminate = !! t && t !== n
        }
        updateTdCheckbox() {
            const e = "mdui-table-row-selected";
            this.$tdRows.each(((t, n) => {
                const i = _(n);
                if (i.find(".mdui-table-cell-checkbox").remove(), !this.selectable) 
                    return;
                

                const s = _(this.createCheckboxHTML("td")).prependTo(i).find('input[type="checkbox"]');
                i.hasClass(e) && (s[0].checked =! 0, this.selectedRow ++),
                this.updateThCheckboxStatus(),
                s.on("change", (() => {
                    s[0].checked ? (i.addClass(e), this.selectedRow ++) : (i.removeClass(e), this.selectedRow --),
                    this.updateThCheckboxStatus()
                })),
                this.$tdCheckboxs = this.$tdCheckboxs.add(s)
            }))
        }
        updateThCheckbox() {
            this.$thRow.find(".mdui-table-cell-checkbox").remove(),
            this.selectable && (this.$thCheckbox = _(this.createCheckboxHTML("th")).prependTo(this.$thRow).find('input[type="checkbox"]').on("change", (() => {
                const e = this.$thCheckbox[0].checked;
                this.selectedRow = e ? this.$tdRows.length : 0,
                this.$tdCheckboxs.each(((t, n) => {
                    n.checked = e
                })),
                this.$tdRows.each(((t, n) => {
                    e ? _(n).addClass("mdui-table-row-selected") : _(n).removeClass("mdui-table-row-selected")
                }))
            })))
        }
        updateNumericCol() {
            const e = "mdui-table-col-numeric";
            this.$thRow.find("th").each(((t, n) => {
                const i = _(n).hasClass(e);
                this.$tdRows.each(((n, s) => {
                    const o = _(s).find("td").eq(t);
                    i ? o.addClass(e) : o.removeClass(e)
                }))
            }))
        }
    }
    const be = "_mdui_table";
    _((() => {
        L.mutation(".mdui-table", (function () {
            const e = _(this);
            e.data(be) || e.data(be, new ve(e))
        }))
    })),
    L.updateTables = function (e) {
        (a(e) ? _(".mdui-table") : _(e)).each(((e, t) => {
            const n = _(t),
                i = n.data(be);
            i ? i.init() : n.data(be, new ve(n))
        }))
    };
    const xe = "touchstart mousedown",
        we = "touchmove mousemove",
        $e = "touchend mouseup",
        ye = "touchcancel mouseleave",
        Ce = "touchend touchmove touchcancel";
    let Ee = 0;
    function ke(e) {
        return !(Ee && [
            "mousedown",
            "mouseup",
            "mousemove",
            "click",
            "mouseover",
            "mouseout",
            "mouseenter",
            "mouseleave"
        ].indexOf(e.type) > -1)
    }
    function _e(e) {
        "touchstart" === e.type ? Ee += 1 : ["touchmove", "touchend", "touchcancel"].indexOf(e.type) > -1 && setTimeout((function () {
            Ee && (Ee -= 1)
        }), 500)
    }
    function Le(e, t) {
        if (e instanceof MouseEvent && 2 === e.button) 
            return;
        

        const n = "undefined" != typeof TouchEvent && e instanceof TouchEvent && e.touches.length ? e.touches[0] : e,
            i = n.pageX,
            s = n.pageY,
            o = t.offset(),
            r = t.innerHeight(),
            a = t.innerWidth(),
            l = i - o.left,
            c = s - o.top,
            d = Math.max(Math.pow(Math.pow(r, 2) + Math.pow(a, 2), .5), 48),
            u = `translate3d(${
                a / 2 - l
            }px,${
                r / 2 - c
            }px, 0) scale(1)`;
            _(`<div class="mdui-ripple-wave" style="width:${d}px;height:${d}px;margin-top:-${
                d / 2
            }px;margin-left:-${
                d / 2
            }px;left:${l}px;top:${c}px;"></div>`).data("_ripple_wave_translate", u).prependTo(t).reflow().transform(u)
        }
        function Oe() {
            const e = _(this);
            e.children(".mdui-ripple-wave").each(((e, t) => {
                !function (e) {
                    if (! e.length || e.data("_ripple_wave_removed")) 
                        return;
                    

                    e.data("_ripple_wave_removed", !0);
                    let t = setTimeout((() => e.remove()), 400);
                    const n = e.data("_ripple_wave_translate");
                    e.addClass("mdui-ripple-wave-fill").transform(n.replace("scale(1)", "scale(1.01)")).transitionEnd((() => {
                        clearTimeout(t),
                        e.addClass("mdui-ripple-wave-out").transform(n.replace("scale(1)", "scale(1.01)")),
                        t = setTimeout((() => e.remove()), 700),
                        setTimeout((() => {
                            e.transitionEnd((() => {
                                clearTimeout(t),
                                e.remove()
                            }))
                        }), 0)
                    }))
                }(_(t))
            })),
            e.off(`${we} ${$e} ${ye}`, Oe)
        }
        function Te(e) {
            if (! ke(e) || (_e(e), e.target === document)) 
                return;
            

            const t = _(e.target),
                n = t.hasClass("mdui-ripple") ? t : t.parents(".mdui-ripple").first();
            if (n.length && ! n.prop("disabled") && a(n.attr("disabled"))) 
                if ("touchstart" === e.type) {
                    let t = !1,
                        i = setTimeout((() => {
                            i = 0,
                            Le(e, n)
                        }), 200);
                    const s = () => {
                            i && (clearTimeout(i), i = 0, Le(e, n)),
                            t || (t =! 0, Oe.call(n))
                        },
                        o = () => {
                            i && (clearTimeout(i), i = 0),
                            s()
                        };
                    n.on("touchmove", o).on("touchend touchcancel", s)
                }
             else 
                Le(e, n),
                n.on(`${we} ${$e} ${ye}`, Oe)


            
        


    } _((() => {
        le.on(xe, Te).on(Ce, _e)
    }));
    const Se = {
        reInit: !1,
        domLoadedEvent: !1
    };
    function Ie(e, t = {}) {
        t = j({}, Se, t);
        const n = e.target,
            i = _(n),
            s = e.type,
            o = i.val(),
            r = i.attr("type") || "";
        if ([
            "checkbox",
            "button",
            "submit",
            "range",
            "radio",
            "image"
        ].indexOf(r) > -1) 
            return;
        

        const a = i.parent(".mdui-textfield");
        if ("focus" === s && a.addClass("mdui-textfield-focus"), "blur" === s && a.removeClass("mdui-textfield-focus"), ("blur" === s || "input" === s) && (o ? a.addClass("mdui-textfield-not-empty") : a.removeClass("mdui-textfield-not-empty")), n.disabled ? a.addClass("mdui-textfield-disabled") : a.removeClass("mdui-textfield-disabled"), ("input" === s || "blur" === s) && ! t.domLoadedEvent && n.validity && (n.validity.valid ? a.removeClass("mdui-textfield-invalid-html5") : a.addClass("mdui-textfield-invalid-html5")), i.is("textarea")) {
            const e = o;
            let t = !1;
            "" === e.replace(/[\r\n]/g, "") && (i.val(" " + e), t =! 0),
            i.outerHeight("");
            const s = i.outerHeight(),
                r = n.scrollHeight;
            r > s && i.outerHeight(r),
            t && i.val(e)
        }
        t.reInit && a.find(".mdui-textfield-counter").remove();
        const l = i.attr("maxlength");
        l && ((t.reInit || t.domLoadedEvent) && _(`<div class="mdui-textfield-counter"><span class="mdui-textfield-counter-inputed"></span> / ${l}</div>`).appendTo(a), a.find(".mdui-textfield-counter-inputed").text(o.length.toString())),
        (a.find(".mdui-textfield-helper").length || a.find(".mdui-textfield-error").length || l) && a.addClass("mdui-textfield-has-bottom")
    }
    function Me(e) {
        const t = e.data(),
            n = t._slider_$track,
            i = t._slider_$fill,
            s = t._slider_$thumb,
            o = t._slider_$input,
            r = t._slider_min,
            a = t._slider_max,
            l = t._slider_disabled,
            c = t._slider_discrete,
            d = t._slider_$thumbText,
            u = o.val(),
            h = (u - r) / (a - r) * 100;
        i.width(`${h}%`),
        n.width(100 - h + "%"),
        l && (i.css("padding-right", "6px"), n.css("padding-left", "6px")),
        s.css("left", `${h}%`),
        c && d.text(u),
        0 === h ? e.addClass("mdui-slider-zero") : e.removeClass("mdui-slider-zero")
    }
    function Re(e) {
        const t = _('<div class="mdui-slider-track"></div>'),
            n = _('<div class="mdui-slider-fill"></div>'),
            i = _('<div class="mdui-slider-thumb"></div>'),
            s = e.find('input[type="range"]'),
            o = s[0].disabled,
            r = e.hasClass("mdui-slider-discrete");
        o ? e.addClass("mdui-slider-disabled") : e.removeClass("mdui-slider-disabled"),
        e.find(".mdui-slider-track").remove(),
        e.find(".mdui-slider-fill").remove(),
        e.find(".mdui-slider-thumb").remove(),
        e.append(t).append(n).append(i);
        let a = _();
        r && (a = _("<span></span>"), i.empty().append(a)),
        e.data("_slider_$track", t),
        e.data("_slider_$fill", n),
        e.data("_slider_$thumb", i),
        e.data("_slider_$input", s),
        e.data("_slider_min", s.attr("min")),
        e.data("_slider_max", s.attr("max")),
        e.data("_slider_disabled", o),
        e.data("_slider_discrete", r),
        e.data("_slider_$thumbText", a),
        Me(e)
    }
    _((() => {
        le.on("input focus blur", ".mdui-textfield-input", {
            useCapture: !0
        }, Ie),
        le.on("click", ".mdui-textfield-expandable .mdui-textfield-icon", (function () {
            _(this).parents(".mdui-textfield").addClass("mdui-textfield-expanded").find(".mdui-textfield-input")[0].focus()
        })),
        le.on("click", ".mdui-textfield-expanded .mdui-textfield-close", (function () {
            _(this).parents(".mdui-textfield").removeClass("mdui-textfield-expanded").find(".mdui-textfield-input").val("")
        })),
        L.mutation(".mdui-textfield", (function () {
            _(this).find(".mdui-textfield-input").trigger("input", {
                domLoadedEvent: !0
            })
        }))
    })), L.updateTextFields = function (e) {
        (a(e) ? _(".mdui-textfield") : _(e)).each(((e, t) => {
            _(t).find(".mdui-textfield-input").trigger("input", {
                reInit: !0
            })
        }))
    };
    const De = '.mdui-slider input[type="range"]';
    _((() => {
        le.on("input change", De, (function () {
            Me(_(this).parent())
        })),
        le.on(xe, De, (function (e) {
            ke(e) && (_e(e), !this.disabled) && _(this).parent().addClass("mdui-slider-focus")
        })),
        le.on($e, De, (function (e) {
            ke(e) && !this.disabled && _(this).parent().removeClass("mdui-slider-focus")
        })),
        le.on(Ce, De, _e),
        L.mutation(".mdui-slider", (function () {
            Re(_(this))
        }))
    })), L.updateSliders = function (e) {
        (a(e) ? _(".mdui-slider") : _(e)).each(((e, t) => {
            Re(_(t))
        }))
    };
    const Pe = {
        trigger: "hover"
    };
    L.Fab = class {
        constructor(e, t = {}) {
            this.options = j({}, Pe),
            this.state = "closed",
            this.$element = _(e).first(),
            j(this.options, t),
            this.$btn = this.$element.find(".mdui-fab"),
            this.$dial = this.$element.find(".mdui-fab-dial"),
            this.$dialBtns = this.$dial.find(".mdui-fab"),
            "hover" === this.options.trigger && (this.$btn.on("touchstart mouseenter", (() => this.open())), this.$element.on("mouseleave", (() => this.close()))),
            "click" === this.options.trigger && this.$btn.on(xe, (() => this.open())),
            le.on(xe, (e => {
                _(e.target).parents(".mdui-fab-wrapper").length || this.close()
            }))
        }
        triggerEvent(e) {
            ae(e, "fab", this.$element, this)
        }
        isOpen() {
            return "opening" === this.state || "opened" === this.state
        }
        open() {
            this.isOpen() || (this.$dialBtns.each(((e, t) => {
                const n = 15 * (this.$dialBtns.length - e) + "ms";
                t.style.transitionDelay = n,
                t.style.webkitTransitionDelay = n
            })), this.$dial.css("height", "auto").addClass("mdui-fab-dial-show"), this.$btn.find(".mdui-fab-opened").length && this.$btn.addClass("mdui-fab-opened"), this.state = "opening", this.triggerEvent("open"), this.$dialBtns.first().transitionEnd((() => {
                this.$btn.hasClass("mdui-fab-opened") && (this.state = "opened", this.triggerEvent("opened"))
            })))
        }
        close() {
            !this.isOpen() || (this.$dialBtns.each(((e, t) => {
                const n = 15 * e + "ms";
                t.style.transitionDelay = n,
                t.style.webkitTransitionDelay = n
            })), this.$dial.removeClass("mdui-fab-dial-show"), this.$btn.removeClass("mdui-fab-opened"), this.state = "closing", this.triggerEvent("close"), this.$dialBtns.last().transitionEnd((() => {
                this.$btn.hasClass("mdui-fab-opened") || (this.state = "closed", this.triggerEvent("closed"), this.$dial.css("height", 0))
            })))
        }
        toggle() {
            this.isOpen() ? this.close() : this.open()
        }
        show() {
            this.$element.removeClass("mdui-fab-hide")
        }
        hide() {
            this.$element.addClass("mdui-fab-hide")
        }
        getState() {
            return this.state
        }
    };
    const je = "mdui-fab";
    _((() => {
        le.on("touchstart mousedown mouseover", `[${je}]`, (function () {
            new L.Fab(this, ue(this, je))
        }))
    }));
    const Ae = {
        position: "auto",
        gutter: 16
    };
    L.Select = class {
        constructor(e, t = {}) {
            this.$element = _(),
            this.options = j({}, Ae),
            this.size = 0,
            this.$selected = _(),
            this.$menu = _(),
            this.$items = _(),
            this.selectedIndex = 0,
            this.selectedText = "",
            this.selectedValue = "",
            this.state = "closed",
            this.$native = _(e).first(),
            this.$native.hide(),
            j(this.options, t),
            this.uniqueID = _.guid(),
            this.handleUpdate(),
            le.on("click touchstart", (e => {
                const t = _(e.target);
                this.isOpen() && ! t.is(this.$element) && ! O(this.$element[0], t[0]) && this.close()
            }))
        }
        readjustMenu() {
            const e = ce.height(),
                t = this.$element.height(),
                n = this.$items.first(),
                i = n.height(),
                s = parseInt(n.css("margin-top")),
                o = this.$element.innerWidth() + .01;
            let r = i * this.size + 2 * s;
            const a = this.$element[0].getBoundingClientRect().top;
            let l,
                c;
            if ("bottom" === this.options.position) 
                c = t,
                l = "0px";
             else if ("top" === this.options.position) 
                c = - r - 1,
                l = "100%";
             else {
                const n = e - 2 * this.options.gutter;
                r > n && (r = n),
                c = -(s + this.selectedIndex * i + (i - t) / 2);
                const o = -(s + (this.size - 1) * i + (i - t) / 2);
                c < o && (c = o);
                const d = a + c;
                d < this.options.gutter ? c = -(a - this.options.gutter) : d + r + this.options.gutter > e && (c = -(a + r + this.options.gutter - e)),
                l = `${
                    this.selectedIndex * i + i / 2 + s
                }px`
            }
            this.$element.innerWidth(o),
            this.$menu.innerWidth(o).height(r).css({
                "margin-top": c + "px",
                "transform-origin": "center " + l + " 0"
            })
        }
        isOpen() {
            return "opening" === this.state || "opened" === this.state
        }
        handleUpdate() {
            this.isOpen() && this.close(),
            this.selectedValue = this.$native.val();
            const e = [];
            this.$items = _(),
            this.$native.find("option").each(((t, n) => {
                const i = n.textContent || "",
                    s = n.value,
                    o = n.disabled,
                    r = this.selectedValue === s;
                e.push({
                    value: s,
                    text: i,
                    disabled: o,
                    selected: r,
                    index: t
                }),
                r && (this.selectedText = i, this.selectedIndex = t),
                this.$items = this.$items.add('<div class="mdui-select-menu-item mdui-ripple"' + (
                o ? " disabled" : ""
            ) + (r ? " selected" : "") + `>${i}</div>`)
            })),
            this.$selected = _(`<span class="mdui-select-selected">${
                this.selectedText
            }</span>`),
            this.$element = _(`<div class="mdui-select mdui-select-position-${
                this.options.position
            }" style="${
                this.$native.attr("style")
            }" id="${
                this.uniqueID
            }"></div>`).show().append(this.$selected),
            this.$menu = _('<div class="mdui-select-menu"></div>').appendTo(this.$element).append(this.$items),
            _(`#${
                this.uniqueID
            }`).remove(),
            this.$native.after(this.$element),
            this.size = parseInt(this.$native.attr("size") || "0"),
            this.size <= 0 && (this.size = this.$items.length, this.size > 8 && (this.size = 8));
            const t = this;
            this.$items.on("click", (function () {
                if ("closing" === t.state) 
                    return;
                

                const n = _(this),
                    i = n.index(),
                    s = e[i];
                s.disabled || (t.$selected.text(s.text), t.$native.val(s.value), t.$items.removeAttr("selected"), n.attr("selected", ""), t.selectedIndex = s.index, t.selectedValue = s.value, t.selectedText = s.text, t.$native.trigger("change"), t.close())
            })),
            this.$element.on("click", (e => {
                const t = _(e.target);
                t.is(".mdui-select-menu") || t.is(".mdui-select-menu-item") || this.toggle()
            }))
        }
        transitionEnd() {
            this.$element.removeClass("mdui-select-closing"),
            "opening" === this.state && (this.state = "opened", this.triggerEvent("opened"), this.$menu.css("overflow-y", "auto")),
            "closing" === this.state && (this.state = "closed", this.triggerEvent("closed"), this.$element.innerWidth(""), this.$menu.css({"margin-top": "", height: "", width: ""}))
        }
        triggerEvent(e) {
            ae(e, "select", this.$native, this)
        }
        toggle() {
            this.isOpen() ? this.close() : this.open()
        }
        open() {
            this.isOpen() || (this.state = "opening", this.triggerEvent("open"), this.readjustMenu(), this.$element.addClass("mdui-select-open"), this.$menu.transitionEnd((() => this.transitionEnd())))
        }
        close() {
            !this.isOpen() || (this.state = "closing", this.triggerEvent("close"), this.$menu.css("overflow-y", ""), this.$element.removeClass("mdui-select-open").addClass("mdui-select-closing"), this.$menu.transitionEnd((() => this.transitionEnd())))
        }
        getState() {
            return this.state
        }
    };
    const Ue = "mdui-select";
    _((() => {
        L.mutation(`[${Ue}]`, (function () {
            new L.Select(this, ue(this, Ue))
        }))
    })), _((() => {
        L.mutation(".mdui-appbar-scroll-hide", (function () {
            new L.Headroom(this)
        })),
        L.mutation(".mdui-appbar-scroll-toolbar-hide", (function () {
            new L.Headroom(this, {
                pinnedClass: "mdui-headroom-pinned-toolbar",
                unpinnedClass: "mdui-headroom-unpinned-toolbar"
            })
        }))
    }));
    const qe = {
        trigger: "click",
        loop: !1
    };
    L.Tab = class {
        constructor(e, t = {}) {
            this.options = j({}, qe),
            this.activeIndex = -1,
            this.$element = _(e).first(),
            j(this.options, t),
            this.$tabs = this.$element.children("a"),
            this.$indicator = _('<div class="mdui-tab-indicator"></div>').appendTo(this.$element);
            const n = window.location.hash;
            n && this.$tabs.each(((e, t) => _(t).attr("href") !== n || (this.activeIndex = e, !1))),
            -1 === this.activeIndex && this.$tabs.each(((e, t) => ! _(t).hasClass("mdui-tab-active") || (this.activeIndex = e, !1))),
            this.$tabs.length && -1 === this.activeIndex && (this.activeIndex = 0),
            this.setActive(),
            ce.on("resize", _.throttle((() => this.setIndicatorPosition()), 100)),
            this.$tabs.each(((e, t) => {
                this.bindTabEvent(t)
            }))
        }
        isDisabled(e) {
            return void 0 !== e.attr("disabled")
        }
        bindTabEvent(e) {
            const t = _(e),
                n = () => {
                    if (this.isDisabled(t)) 
                        return !1;
                    

                    this.activeIndex = this.$tabs.index(e),
                    this.setActive()
                };
            t.on("click", n),
            "hover" === this.options.trigger && t.on("mouseenter", n),
            t.on("click", (() => {
                if (0 === (t.attr("href") || "").indexOf("#")) 
                    return !1

                

            }))
        }
        triggerEvent(e, t, n = {}) {
            ae(e, "tab", t, this, n)
        }
        setActive() {
            this.$tabs.each(((e, t) => {
                const n = _(t),
                    i = n.attr("href") || "";
                e !== this.activeIndex || this.isDisabled(n) ? (n.removeClass("mdui-tab-active"), _(i).hide()) : (n.hasClass("mdui-tab-active") || (this.triggerEvent("change", this.$element, {
                    index: this.activeIndex,
                    id: i.substr(1)
                }), this.triggerEvent("show", n), n.addClass("mdui-tab-active")), _(i).show(), this.setIndicatorPosition())
            }))
        }
        setIndicatorPosition() {
            if (-1 === this.activeIndex) 
                return void this.$indicator.css({left: 0, width: 0});
            

            const e = this.$tabs.eq(this.activeIndex);
            if (this.isDisabled(e)) 
                return;
            

            const t = e.offset();
            this.$indicator.css({
                left: t.left + this.$element[0].scrollLeft - this.$element[0].getBoundingClientRect().left + "px",
                width: `${
                    e.innerWidth()
                }px`
            })
        }
        next() {
            -1 !== this.activeIndex && (this.$tabs.length > this.activeIndex + 1 ? this.activeIndex ++ : this.options.loop && (this.activeIndex = 0), this.setActive())
        }
        prev() {
            -1 !== this.activeIndex && (this.activeIndex > 0 ? this.activeIndex -- : this.options.loop && (this.activeIndex = this.$tabs.length - 1), this.setActive())
        }
        show(e) {
            -1 !== this.activeIndex && (o(e) ? this.activeIndex = e : this.$tabs.each(((t, n) => {
                if (n.id === e) 
                    return this.activeIndex,
                    !1

                

            })), this.setActive())
        }
        handleUpdate() {
            const e = this.$tabs,
                t = this.$element.children("a"),
                n = e.get(),
                i = t.get();
            if (! t.length) 
                return this.activeIndex = -1,
                this.$tabs = t,
                void this.setIndicatorPosition();
            

            t.each(((e, t) => {
                n.indexOf(t) < 0 && (this.bindTabEvent(t), -1 === this.activeIndex ? this.activeIndex = 0 : e <= this.activeIndex && this.activeIndex ++)
            })),
            e.each(((e, t) => {
                i.indexOf(t) < 0 && (e < this.activeIndex ? this.activeIndex -- : e === this.activeIndex && (this.activeIndex = 0))
            })),
            this.$tabs = t,
            this.setActive()
        }
    };
    const Be = "mdui-tab";
    _((() => {
        L.mutation(`[${Be}]`, (function () {
            new L.Tab(this, ue(this, Be))
        }))
    }));
    const He = {
        overlay: !1,
        swipe: !1
    };
    L.Drawer = class {
        constructor(e, t = {}) {
            this.options = j({}, He),
            this.overlay = !1,
            this.$element = _(e).first(),
            j(this.options, t),
            this.position = this.$element.hasClass("mdui-drawer-right") ? "right" : "left",
            this.$element.hasClass("mdui-drawer-close") ? this.state = "closed" : this.$element.hasClass("mdui-drawer-open") || this.isDesktop() ? this.state = "opened" : this.state = "closed",
            ce.on("resize", _.throttle((() => {
                this.isDesktop() ? (this.overlay && !this.options.overlay && (_.hideOverlay(), this.overlay =! 1, _.unlockScreen()), this.$element.hasClass("mdui-drawer-close") || (this.state = "opened")) : !this.overlay && "opened" === this.state && (this.$element.hasClass("mdui-drawer-open") ? (_.showOverlay(), this.overlay =! 0, _.lockScreen(), _(".mdui-overlay").one("click", (() => this.close()))) : this.state = "closed")
            }), 100)),
            this.$element.find("[mdui-drawer-close]").each(((e, t) => {
                _(t).on("click", (() => this.close()))
            })),
            this.swipeSupport()
        }
        isDesktop() {
            return ce.width() >= 1024
        }
        swipeSupport() {
            const e = this;
            let t,
                n,
                i,
                s,
                o = null,
                r = !1;
            const a = _("body");
            function l(t) {
                const n = `translate(${
                    -1 * ("right" === e.position ? -1 : 1) * t
                }px, 0) !important;`;
                e.$element.css("cssText", `transform: ${n}; transition: initial !important;;`)
            }
            function c() {
                e.$element[0].style.transform = "",
                e.$element[0].style.webkitTransform = "",
                e.$element[0].style.transition = "",
                e.$element[0].style.webkitTransition = ""
            }
            function d() {
                return e.$element.width() + 10
            }
            function u(e) {
                return Math.min(Math.max("closing" === o ? s - e : d() + s - e, 0), d())
            }
            function h(t) {
                if (o) {
                    let n = t.changedTouches[0].pageX;
                    "right" === e.position && (n = a.width() - n);
                    const i = u(n) / d();
                    r = !1;
                    const s = o;
                    o = null,
                    "opening" === s ? i < .92 ? (c(), e.open()) : c() : i > .08 ? (c(), e.close()) : c(),
                    _.unlockScreen()
                } else 
                    r = !1;
                 a.off({touchmove: m, touchend: h, touchcancel: m})
            }
            function m(t) {
                let c = t.touches[0].pageX;
                "right" === e.position && (c = a.width() - c);
                const d = t.touches[0].pageY;
                if (o) 
                    l(u(c));
                 else if (r) {
                    const t = Math.abs(c - n),
                        r = Math.abs(d - i),
                        a = 8;
                    t > a && r <= a ? (s = c, o = "opened" === e.state ? "closing" : "opening", _.lockScreen(), l(u(c))) : t <= a && r > a && h()
                }
            }
            function p(s) {
                n = s.touches[0].pageX,
                "right" === e.position && (n = a.width() - n),
                i = s.touches[0].pageY,
                ("opened" === e.state || !(n > 24 || t !== p)) && (r =! 0, a.on({touchmove: m, touchend: h, touchcancel: m}))
            }
            this.options.swipe && (t || (a.on("touchstart", p), t = p))
        }
        triggerEvent(e) {
            ae(e, "drawer", this.$element, this)
        }
        transitionEnd() {
            this.$element.hasClass("mdui-drawer-open") ? (this.state = "opened", this.triggerEvent("opened")) : (this.state = "closed", this.triggerEvent("closed"))
        }
        isOpen() {
            return "opening" === this.state || "opened" === this.state
        }
        open() {
            this.isOpen() || (this.state = "opening", this.triggerEvent("open"), this.options.overlay || _("body").addClass(`mdui-drawer-body-${
                this.position
            }`), this.$element.removeClass("mdui-drawer-close").addClass("mdui-drawer-open").transitionEnd((() => this.transitionEnd())), (!this.isDesktop() || this.options.overlay) && (this.overlay =! 0, _.showOverlay().one("click", (() => this.close())), _.lockScreen()))
        }
        close() {
            !this.isOpen() || (this.state = "closing", this.triggerEvent("close"), this.options.overlay || _("body").removeClass(`mdui-drawer-body-${
                this.position
            }`), this.$element.addClass("mdui-drawer-close").removeClass("mdui-drawer-open").transitionEnd((() => this.transitionEnd())), this.overlay && (_.hideOverlay(), this.overlay =! 1, _.unlockScreen()))
        }
        toggle() {
            this.isOpen() ? this.close() : this.open()
        }
        getState() {
            return this.state
        }
    };
    const Ne = "mdui-drawer";
    _((() => {
        L.mutation(`[${Ne}]`, (function () {
            const e = _(this),
                t = ue(this, Ne),
                n = t.target;
            delete t.target;
            const i = _(n).first(),
                s = new L.Drawer(i, t);
            e.on("click", (() => s.toggle()))
        }))
    }));
    const ze = {};
    function We(e, t) {
        if (a(ze[e]) && (ze[e] =[]), a(t)) 
            return ze[e];
        

        ze[e].push(t)
    }
    function Fe(e) {
        ! a(ze[e]) && ze[e].length && ze[e].shift()()
    }
    const Xe = {
        history: !0,
        overlay: !0,
        modal: !1,
        closeOnEsc: !0,
        closeOnCancel: !0,
        closeOnConfirm: !0,
        destroyOnClosed: !1
    };
    let Ye = null;
    const Ke = "_mdui_dialog";
    let Ge, Je = !1;
    le.on("keydown", (e => {
        Ye && Ye.options.closeOnEsc && "opened" === Ye.state && 27 === e.keyCode && Ye.close()
    })), L.Dialog = class {
        constructor(e, t = {}) {
            this.options = j({}, Xe),
            this.state = "closed",
            this.append = !1,
            this.$element = _(e).first(),
            O(document.body, this.$element[0]) || (this.append =! 0, _("body").append(this.$element)),
            j(this.options, t),
            this.$element.find("[mdui-dialog-cancel]").each(((e, t) => {
                _(t).on("click", (() => {
                    this.triggerEvent("cancel"),
                    this.options.closeOnCancel && this.close()
                }))
            })),
            this.$element.find("[mdui-dialog-confirm]").each(((e, t) => {
                _(t).on("click", (() => {
                    this.triggerEvent("confirm"),
                    this.options.closeOnConfirm && this.close()
                }))
            })),
            this.$element.find("[mdui-dialog-close]").each(((e, t) => {
                _(t).on("click", (() => this.close()))
            }))
        }
        triggerEvent(e) {
            ae(e, "dialog", this.$element, this)
        }
        readjust() {
            if (! Ye) 
                return;
            

            const e = Ye.$element,
                t = e.children(".mdui-dialog-title"),
                n = e.children(".mdui-dialog-content"),
                i = e.children(".mdui-dialog-actions");
            e.height(""),
            n.height("");
            const s = e.height();
            e.css({
                top: (ce.height() - s) / 2 + "px",
                height: `${s}px`
            }),
            n.innerHeight(s - (t.innerHeight() || 0) - (i.innerHeight() || 0))
        }
        hashchangeEvent() {
            window.location.hash.substring(1).indexOf("mdui-dialog") < 0 && Ye.close(!0)
        }
        overlayClick(e) {
            _(e.target).hasClass("mdui-overlay") && Ye && Ye.close()
        }
        transitionEnd() {
            this.$element.hasClass("mdui-dialog-open") ? (this.state = "opened", this.triggerEvent("opened")) : (this.state = "closed", this.triggerEvent("closed"), this.$element.hide(), ! We(Ke).length && ! Ye && Je && (_.unlockScreen(), Je =! 1), ce.off("resize", _.throttle(this.readjust, 100)), this.options.destroyOnClosed && this.destroy())
        }
        doOpen() {
            if (Ye = this, Je || (_.lockScreen(), Je =! 0), this.$element.show(), this.readjust(), ce.on("resize", _.throttle(this.readjust, 100)), this.state = "opening", this.triggerEvent("open"), this.$element.addClass("mdui-dialog-open").transitionEnd((() => this.transitionEnd())), Ge || (Ge = _.showOverlay(5100)), this.options.modal ? Ge.off("click", this.overlayClick) : Ge.on("click", this.overlayClick), Ge.css("opacity", this.options.overlay ? "" : 0), this.options.history) {
                let e = window.location.hash.substring(1);
                e.indexOf("mdui-dialog") > -1 && (e = e.replace(/[&?]?mdui-dialog/g, "")),
                window.location.hash = e ? `${e}${
                    e.indexOf("?") > -1 ? "&" : "?"
                }mdui-dialog` : "mdui-dialog",
                ce.on("hashchange", this.hashchangeEvent)
            }
        }
        isOpen() {
            return "opening" === this.state || "opened" === this.state
        }
        open() {
            if (!this.isOpen()) {
                if (Ye && ("opening" === Ye.state || "opened" === Ye.state) || We(Ke).length) 
                    return void We(Ke, (() => this.doOpen()));
                

                this.doOpen()
            }
        }
        close(e = !1) {
            setTimeout((() => {
                !this.isOpen() || (Ye = null, this.state = "closing", this.triggerEvent("close"), ! We(Ke).length && Ge && (_.hideOverlay(), Ge = null, _(".mdui-overlay").css("z-index", 2e3)), this.$element.removeClass("mdui-dialog-open").transitionEnd((() => this.transitionEnd())), this.options.history && ! We(Ke).length && (e || window.history.back(), ce.off("hashchange", this.hashchangeEvent)), setTimeout((() => {
                    Fe(Ke)
                }), 100))
            }))
        }
        toggle() {
            this.isOpen() ? this.close() : this.open()
        }
        getState() {
            return this.state
        }
        destroy() {
            this.append && this.$element.remove(),
            ! We(Ke).length && ! Ye && (Ge && (_.hideOverlay(), Ge = null), Je && (_.unlockScreen(), Je =! 1))
        }
        handleUpdate() {
            this.readjust()
        }
    };
    const Ve = "mdui-dialog", Qe = "_mdui_dialog";
    _((() => {
        le.on("click", `[${Ve}]`, (function () {
            const e = ue(this, Ve),
                t = e.target;
            delete e.target;
            const n = _(t).first();
            let i = n.data(Qe);
            i || (i = new L.Dialog(n, e), n.data(Qe, i)),
            i.open()
        }))
    }));
    const Ze = {
            text: "",
            bold: !1,
            close: !0,
            onClick: () => {}
        }, et = {
            title: "",
            content: "",
            buttons: [],
            stackedButtons: !1,
            cssClass: "",
            history: !0,
            overlay: !0,
            modal: !1,
            closeOnEsc: !0,
            destroyOnClosed: !0,
            onOpen: () => {},
            onOpened: () => {},
            onClose: () => {},
            onClosed: () => {}
        };
    L.dialog = function (e) {
        var t,
            n;
        E((e = j({}, et, e)).buttons, ((t, n) => {
            e.buttons[t] = j({}, Ze, n)
        }));
        let i = "";
        (null === (t = e.buttons) || void 0 === t ? void 0 : t.length) && (
            i =
            `<div class="mdui-dialog-actions${ e.stackedButtons ? " mdui-dialog-actions-stacked" : ""
            }">`,
            E(e.buttons, ((e, t) => {
                i += `<a href="javascript:void(0)" class="mdui-btn mdui-ripple mdui-text-color-primary ${
                    t.bold ? "mdui-btn-bold" : ""
                }">${
                    t.text
                }</a>`
            })),
            i += "</div>"
        );
        const s = `<div class="mdui-dialog ${
                e.cssClass
            }">` + (e.title ? `<div class="mdui-dialog-title">${
                e.title
            }</div>` : "") + (e.content ? `<div class="mdui-dialog-content">${
                e.content
            }</div>` : "") + i + "</div>",
            o = new L.Dialog(s, {
                history: e.history,
                overlay: e.overlay,
                modal: e.modal,
                closeOnEsc: e.closeOnEsc,
                destroyOnClosed: e.destroyOnClosed
            });
            return(null === (n = e.buttons) || void 0 === n ? void 0 : n.length) && o.$element.find(".mdui-dialog-actions .mdui-btn").each(((t, n) => {
                _(n).on("click", (() => {
                    e.buttons[t].onClick(o),
                    e.buttons[t].close && o.close()
                }))
            })),
            o.$element.on("open.mdui.dialog", (() => {
                e.onOpen(o)
            })).on("opened.mdui.dialog", (() => {
                e.onOpened(o)
            })).on("close.mdui.dialog", (() => {
                e.onClose(o)
            })).on("closed.mdui.dialog", (() => {
                e.onClosed(o)
            })),
            o.open(),
            o
        };
        const tt = {
            confirmText: "ok",
            history: !0,
            modal: !1,
            closeOnEsc: !0,
            closeOnConfirm: !0
        };
        L.alert = function (e, t, n, s) {
            return i(t) && (s = n, n = t, t = ""),
            a(n) && (n =() => {}),
            a(s) && (s =
                {}),
            s = j({}, tt, s),
            L.dialog({
                title: t,
                content: e,
                buttons: [
                    {
                        text: s.confirmText,
                        bold: !1,
                        close: s.closeOnConfirm,
                        onClick: n
                    }
                ],
                cssClass: "mdui-dialog-alert",
                history: s.history,
                modal: s.modal,
                closeOnEsc: s.closeOnEsc
            })
        };
        const nt = {
            confirmText: "ok",
            cancelText: "cancel",
            history: !0,
            modal: !1,
            closeOnEsc: !0,
            closeOnCancel: !0,
            closeOnConfirm: !0
        };
        L.confirm = function (e, t, n, s, o) {
            return i(t) && (o = s, s = n, n = t, t = ""),
            a(n) && (n =() => {}),
            a(s) && (s =() => {}),
            a(o) && (o =
                {}),
            o = j({}, nt, o),
            L.dialog({
                title: t,
                content: e,
                buttons: [
                    {
                        text: o.cancelText,
                        bold: !1,
                        close: o.closeOnCancel,
                        onClick: s
                    }, {
                        text: o.confirmText,
                        bold: !1,
                        close: o.closeOnConfirm,
                        onClick: n
                    }
                ],
                cssClass: "mdui-dialog-confirm",
                history: o.history,
                modal: o.modal,
                closeOnEsc: o.closeOnEsc
            })
        };
        const it = {
            confirmText: "ok",
            cancelText: "cancel",
            history: !0,
            modal: !1,
            closeOnEsc: !0,
            closeOnCancel: !0,
            closeOnConfirm: !0,
            type: "text",
            maxlength: 0,
            defaultValue: "",
            confirmOnEnter: !1
        };
        L.prompt = function (e, t, n, s, o) {
            i(t) && (o = s, s = n, n = t, t = ""),
            a(n) && (n =() => {}),
            a(s) && (s =() => {}),
            a(o) && (o =
                {});
            const r = '<div class="mdui-textfield">' + (
            e ? `<label class="mdui-textfield-label">${e}</label>` : ""
        ) + ("text" === (o = j({}, it, o)).type ? `<input class="mdui-textfield-input" type="text" value="${
                o.defaultValue
            }" ${
                o.maxlength ? 'maxlength="' + o.maxlength + '"' : ""
            }/>` : "") + ("textarea" === o.type ? `<textarea class="mdui-textfield-input" ${
                o.maxlength ? 'maxlength="' + o.maxlength + '"' : ""
            }>${
                o.defaultValue
            }</textarea>` : "") + "</div>";
            return L.dialog({
                title: t,
                content: r,
                buttons: [
                    {
                        text: o.cancelText,
                        bold: !1,
                        close: o.closeOnCancel,
                        onClick: e => {
                            const t = e.$element.find(".mdui-textfield-input").val();
                            s(t, e)
                        }
                    }, {
                        text: o.confirmText,
                        bold: !1,
                        close: o.closeOnConfirm,
                        onClick: e => {
                            const t = e.$element.find(".mdui-textfield-input").val();
                            n(t, e)
                        }
                    }
                ],
                cssClass: "mdui-dialog-prompt",
                history: o.history,
                modal: o.modal,
                closeOnEsc: o.closeOnEsc,
                onOpen: e => {
                    const t = e.$element.find(".mdui-textfield-input");
                    L.updateTextFields(t),
                    t[0].focus(),
                    "textarea" !== o.type && !0 === o.confirmOnEnter && t.on("keydown", (t => {
                        if (13 === t.keyCode) {
                            const t = e.$element.find(".mdui-textfield-input").val();
                            return n(t, e),
                            o.closeOnConfirm && e.close(),
                            !1
                        }
                    })),
                    "textarea" === o.type && t.on("input", (() => e.handleUpdate())),
                    o.maxlength && e.handleUpdate()
                }
            })
        };
        const st = {
            position: "auto",
            delay: 0,
            content: ""
        };
        L.Tooltip = class {
            constructor(e, t = {}) {
                this.options = j({}, st),
                this.state = "closed",
                this.timeoutId = null,
                this.$target = _(e).first(),
                j(this.options, t),
                this.$element = _(`<div class="mdui-tooltip" id="${
                    _.guid()
                }">${
                    this.options.content
                }</div>`).appendTo(document.body);
                const n = this;
                this.$target.on("touchstart mouseenter", (function (e) {
                    n.isDisabled(this) || ! ke(e) || (_e(e), n.open())
                })).on("touchend mouseleave", (function (e) {
                    n.isDisabled(this) || ! ke(e) || n.close()
                })).on(Ce, (function (e) {
                    n.isDisabled(this) || _e(e)
                }))
            }
            isDisabled(e) {
                return e.disabled || void 0 !== _(e).attr("disabled")
            }
            isDesktop() {
                return ce.width() > 1024
            }
            setPosition() {
                let e,
                    t;
                const n = this.$target[0].getBoundingClientRect(),
                    i = this.isDesktop() ? 14 : 24,
                    s = this.$element[0].offsetWidth,
                    o = this.$element[0].offsetHeight;
                let r = this.options.position;
                switch ("auto" === r && (r = n.top + n.height + i + o + 2 < ce.height() ? "bottom" : i + o + 2 < n.top ? "top" : i + s + 2 < n.left ? "left" : n.width + i + s + 2 < ce.width() - n.left ? "right" : "bottom"), r) {
                    case "bottom": e = s / 2 * -1,
                        t = n.height / 2 + i,
                        this.$element.transformOrigin("top center");
                        break;
                    case "top": e = s / 2 * -1,
                        t = -1 * (o + n.height / 2 + i),
                        this.$element.transformOrigin("bottom center");
                        break;
                    case "left": e = -1 * (s + n.width / 2 + i),
                        t = o / 2 * -1,
                        this.$element.transformOrigin("center right");
                        break;
                    case "right": e = n.width / 2 + i,
                        t = o / 2 * -1,
                        this.$element.transformOrigin("center left")
                }
                const a = this.$target.offset();
                this.$element.css({
                        top: `${
                        a.top + n.height / 2
                    }px`,
                    left: `${
                        a.left + n.width / 2
                    }px`,
                    "margin-left": `${e}px`,
                    "margin-top": `${t}px`
                })
            }
            triggerEvent(e) {
                ae(e, "tooltip", this.$target, this)
            }
            transitionEnd() {
                this.$element.hasClass("mdui-tooltip-open") ? (this.state = "opened", this.triggerEvent("opened")) : (this.state = "closed", this.triggerEvent("closed"))
            }
            isOpen() {
                return "opening" === this.state || "opened" === this.state
            }
            doOpen() {
                this.state = "opening",
                this.triggerEvent("open"),
                this.$element.addClass("mdui-tooltip-open").transitionEnd((() => this.transitionEnd()))
            }
            open(e) {
                if (this.isOpen()) 
                    return;
                

                const t = j({}, this.options);
                e && j(this.options, e),
                t.content !== this.options.content && this.$element.html(this.options.content),
                this.setPosition(),
                this.options.delay ? this.timeoutId = setTimeout((() => this.doOpen()), this.options.delay) : (this.timeoutId = null, this.doOpen())
            }
            close() {
                this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = null),
                this.isOpen() && (this.state = "closing", this.triggerEvent("close"), this.$element.removeClass("mdui-tooltip-open").transitionEnd((() => this.transitionEnd())))
            }
            toggle() {
                this.isOpen() ? this.close() : this.open()
            }
            getState() {
                return this.state
            }
        };
        const ot = "mdui-tooltip", rt = "_mdui_tooltip";
        _((() => {
            le.on("touchstart mouseover", `[${ot}]`, (function () {
                const e = _(this);
                let t = e.data(rt);
                t || (t = new L.Tooltip(this, ue(this, ot)), e.data(rt, t))
            }))
        }));
        const at = {
            message: "",
            timeout: 4e3,
            position: "bottom",
            buttonText: "",
            buttonColor: "",
            closeOnButtonClick: !0,
            closeOnOutsideClick: !0,
            onClick: () => {},
            onButtonClick: () => {},
            onOpen: () => {},
            onOpened: () => {},
            onClose: () => {},
            onClosed: () => {}
        };
        let lt = null;
        const ct = "_mdui_snackbar";
        class dt {
            constructor(e) {
                this.options = j({}, at),
                this.state = "closed",
                this.timeoutId = null,
                j(this.options, e);
                let t = "",
                    n = "";
                0 === this.options.buttonColor.indexOf("#") || 0 === this.options.buttonColor.indexOf("rgb") ? t = `style="color:${
                    this.options.buttonColor
                }"` : "" !== this.options.buttonColor && (n =
                    `mdui-text-color-${ this.options.buttonColor
                }`),
                this.$element = _(`<div class="mdui-snackbar"><div class="mdui-snackbar-text">${
                    this.options.message
                }</div>` + (this.options.buttonText ? `<a href="javascript:void(0)" class="mdui-snackbar-action mdui-btn mdui-ripple mdui-ripple-white ${n}" ${t}>${
                    this.options.buttonText
                }</a>` : "") + "</div>").appendTo(document.body),
                this.setPosition("close"),
                this.$element.reflow().addClass(`mdui-snackbar-${
                    this.options.position
                }`)
            }
            closeOnOutsideClick(e) {
                const t = _(e.target);
                ! t.hasClass("mdui-snackbar") && ! t.parents(".mdui-snackbar").length && lt.close()
            }
            setPosition(e) {
                const t = this.$element[0].clientHeight,
                    n = this.options.position;
                let i,
                    s;
                i = "bottom" === n || "top" === n ? "-50%" : "0",
                "open" === e ? s = "0" : ("bottom" === n && (s = t), "top" === n && (s = - t), ("left-top" === n || "right-top" === n) && (s = - t - 24), ("left-bottom" === n || "right-bottom" === n) && (s = t + 24)),
                this.$element.transform(`translate(${i},${s}px`)
            }
            open() {
                if ("opening" !== this.state && "opened" !== this.state) {
                    if (lt) 
                        return void We(ct, (() => this.open()));
                    

                    lt = this,
                    this.state = "opening",
                    this.options.onOpen(this),
                    this.setPosition("open"),
                    this.$element.transitionEnd((() => {
                        "opening" === this.state && (this.state = "opened", this.options.onOpened(this), this.options.buttonText && this.$element.find(".mdui-snackbar-action").on("click", (() => {
                            this.options.onButtonClick(this),
                            this.options.closeOnButtonClick && this.close()
                        })), this.$element.on("click", (e => {
                            _(e.target).hasClass("mdui-snackbar-action") || this.options.onClick(this)
                        })), this.options.closeOnOutsideClick && le.on(xe, this.closeOnOutsideClick), this.options.timeout && (this.timeoutId = setTimeout((() => this.close()), this.options.timeout)))
                    }))
                }
            }
            close() {
                "closing" === this.state || "closed" === this.state || (this.timeoutId && clearTimeout(this.timeoutId), this.options.closeOnOutsideClick && le.off(xe, this.closeOnOutsideClick), this.state = "closing", this.options.onClose(this), this.setPosition("close"), this.$element.transitionEnd((() => {
                    "closing" === this.state && (lt = null, this.state = "closed", this.options.onClosed(this), this.$element.remove(), Fe(ct))
                })))
            }
        }
        function ut(e =! 1) {
            return `<div class="mdui-spinner-layer ${
                e ? `mdui-spinner-layer-${e}` : ""
            }"><div class="mdui-spinner-circle-clipper mdui-spinner-left"><div class="mdui-spinner-circle"></div></div><div class="mdui-spinner-gap-patch"><div class="mdui-spinner-circle"></div></div><div class="mdui-spinner-circle-clipper mdui-spinner-right"><div class="mdui-spinner-circle"></div></div></div>`
        }
        function ht(e) {
            const t = _(e),
                n = t.hasClass("mdui-spinner-colorful") ? ut(1) + ut(2) + ut(3) + ut(4) : ut();
            t.html(n)
        }
        L.snackbar = function (e, t = {}) {
            s(e) ? t.message = e : t = e;
            const n = new dt(t);
            return n.open(),
            n
        }, _((() => {
            le.on("click", ".mdui-bottom-nav>a", (function () {
                const e = _(this),
                    t = e.parent();
                t.children("a").each(((n, i) => {
                    const s = e.is(i);
                    s && ae("change", "bottomNav", t[0], void 0, {index: n}),
                    s ? _(i).addClass("mdui-bottom-nav-active") : _(i).removeClass("mdui-bottom-nav-active")
                }))
            })),
            L.mutation(".mdui-bottom-nav-scroll-hide", (function () {
                new L.Headroom(this, {
                    pinnedClass: "mdui-headroom-pinned-down",
                    unpinnedClass: "mdui-headroom-unpinned-down"
                })
            }))
        })), _((() => {
            L.mutation(".mdui-spinner", (function () {
                ht(this)
            }))
        })), L.updateSpinners = function (e) {
            (a(e) ? _(".mdui-spinner") : _(e)).each((function () {
                ht(this)
            }))
        };
        const mt = {
            position: "auto",
            align: "auto",
            gutter: 16,
            fixed: !1,
            covered: "auto",
            subMenuTrigger: "hover",
            subMenuDelay: 200
        };
        L.Menu = class {
            constructor(e, t, n = {}) {
                if (this.options = j({}, mt), this.state = "closed", this.$anchor = _(e).first(), this.$element = _(t).first(), !this.$anchor.parent().is(this.$element.parent())) 
                    throw new Error("anchorSelector and menuSelector must be siblings");
                

                j(this.options, n),
                this.isCascade = this.$element.hasClass("mdui-menu-cascade"),
                this.isCovered = "auto" === this.options.covered ? !this.isCascade : this.options.covered,
                this.$anchor.on("click", (() => this.toggle())),
                le.on("click touchstart", (e => {
                    const t = _(e.target);
                    this.isOpen() && ! t.is(this.$element) && ! O(this.$element[0], t[0]) && ! t.is(this.$anchor) && ! O(this.$anchor[0], t[0]) && this.close()
                }));
                const i = this;
                le.on("click", ".mdui-menu-item", (function () {
                    const e = _(this);
                    ! e.find(".mdui-menu").length && void 0 === e.attr("disabled") && i.close()
                })),
                this.bindSubMenuEvent(),
                ce.on("resize", _.throttle((() => this.readjust()), 100))
            }
            isOpen() {
                return "opening" === this.state || "opened" === this.state
            }
            triggerEvent(e) {
                ae(e, "menu", this.$element, this)
            }
            readjust() {
                let e,
                    t,
                    n,
                    i;
                const s = ce.height(),
                    o = ce.width(),
                    r = this.options.gutter,
                    a = this.isCovered,
                    l = this.options.fixed;
                let c,
                    d;
                const u = this.$element.width(),
                    h = this.$element.height(),
                    m = this.$anchor[0].getBoundingClientRect(),
                    p = m.top,
                    g = m.left,
                    f = m.height,
                    v = m.width,
                    b = s - p - f,
                    x = o - g - v,
                    w = this.$anchor[0].offsetTop,
                    $ = this.$anchor[0].offsetLeft;
                if (n = "auto" === this.options.position ? b + (a ? f : 0) > h + r ? "bottom" : p + (a ? f : 0) > h + r ? "top" : "center" : this.options.position, i = "auto" === this.options.align ? x + v > u + r ? "left" : g + v > u + r ? "right" : "center" : this.options.align, "bottom" === n) 
                    d = "0",
                    t = (a ? 0 : f) + (l ? p : w);
                 else if ("top" === n) 
                    d = "100%",
                    t = (a ? f : 0) + (l ? p - h : w - h);
                 else {
                    d = "50%";
                    let e = h;
                    this.isCascade || h + 2 * r > s && (e = s - 2 * r, this.$element.height(e)),
                    t = (s - e) / 2 + (l ? 0 : w - p)
                }
                if (this.$element.css("top", `${t}px`), "left" === i) 
                    c = "0",
                    e = l ? g : $;
                 else if ("right" === i) 
                    c = "100%",
                    e = l ? g + v - u : $ + v - u;
                 else {
                    c = "50%";
                    let t = u;
                    u + 2 * r > o && (t = o - 2 * r, this.$element.width(t)),
                    e = (o - t) / 2 + (l ? 0 : $ - g)
                }
                this.$element.css("left", `${e}px`),
                this.$element.transformOrigin(`${c} ${d}`)
            }
            readjustSubmenu(e) {
                const t = e.parent(".mdui-menu-item");
                let n,
                    i,
                    s,
                    o;
                const r = ce.height(),
                    a = ce.width();
                let l,
                    c;
                const d = e.width(),
                    u = e.height(),
                    h = t[0].getBoundingClientRect(),
                    m = h.width,
                    p = h.height,
                    g = h.left,
                    f = h.top;
                s = r - f > u ? "bottom" : f + p > u ? "top" : "bottom",
                o = a - g - m > d ? "left" : g > d ? "right" : "left",
                "bottom" === s ? (c = "0", n = "0") : "top" === s && (c = "100%", n = - u + p),
                e.css("top", `${n}px`),
                "left" === o ? (l = "0", i = m) : "right" === o && (l = "100%", i = - d),
                e.css("left", `${i}px`),
                e.transformOrigin(`${l} ${c}`)
            }
            openSubMenu(e) {
                this.readjustSubmenu(e),
                e.addClass("mdui-menu-open").parent(".mdui-menu-item").addClass("mdui-menu-item-active")
            }
            closeSubMenu(e) {
                e.removeClass("mdui-menu-open").addClass("mdui-menu-closing").transitionEnd((() => e.removeClass("mdui-menu-closing"))).parent(".mdui-menu-item").removeClass("mdui-menu-item-active"),
                e.find(".mdui-menu").each(((e, t) => {
                    const n = _(t);
                    n.removeClass("mdui-menu-open").addClass("mdui-menu-closing").transitionEnd((() => n.removeClass("mdui-menu-closing"))).parent(".mdui-menu-item").removeClass("mdui-menu-item-active")
                }))
            }
            toggleSubMenu(e) {
                e.hasClass("mdui-menu-open") ? this.closeSubMenu(e) : this.openSubMenu(e)
            }
            bindSubMenuEvent() {
                const e = this;
                if (this.$element.on("click", ".mdui-menu-item", (function (t) {
                    const n = _(this),
                        i = _(t.target);
                    if (void 0 !== n.attr("disabled") || i.is(".mdui-menu") || i.is(".mdui-divider") || ! i.parents(".mdui-menu-item").first().is(n)) 
                        return;
                    

                    const s = n.children(".mdui-menu");
                    n.parent(".mdui-menu").children(".mdui-menu-item").each(((t, n) => {
                        const i = _(n).children(".mdui-menu");
                        i.length && (! s.length || ! i.is(s)) && e.closeSubMenu(i)
                    })),
                    s.length && e.toggleSubMenu(s)
                })), "hover" === this.options.subMenuTrigger) {
                    let t = null,
                        n = null;
                    this.$element.on("mouseover mouseout", ".mdui-menu-item", (function (i) {
                        const s = _(this),
                            o = i.type,
                            r = _(i.relatedTarget);
                        if (void 0 !== s.attr("disabled")) 
                            return;
                        

                        if ("mouseover" === o) {
                            if (! s.is(r) && O(s[0], r[0])) 
                                return

                            

                        } else if ("mouseout" === o && (s.is(r) || O(s[0], r[0]))) 
                            return;
                        

                        const a = s.children(".mdui-menu");
                        if ("mouseover" === o) {
                            if (a.length) {
                                const i = a.data("timeoutClose.mdui.menu");
                                if (i && clearTimeout(i), a.hasClass("mdui-menu-open")) 
                                    return;
                                

                                clearTimeout(n),
                                t = n = setTimeout((() => e.openSubMenu(a)), e.options.subMenuDelay),
                                a.data("timeoutOpen.mdui.menu", t)
                            }
                        } else if ("mouseout" === o && a.length) {
                            const n = a.data("timeoutOpen.mdui.menu");
                            n && clearTimeout(n),
                            t = setTimeout((() => e.closeSubMenu(a)), e.options.subMenuDelay),
                            a.data("timeoutClose.mdui.menu", t)
                        }
                    }))
                }
            }
            transitionEnd() {
                this.$element.removeClass("mdui-menu-closing"),
                "opening" === this.state && (this.state = "opened", this.triggerEvent("opened")),
                "closing" === this.state && (this.state = "closed", this.triggerEvent("closed"), this.$element.css({top: "", left: "", width: "", position: "fixed"}))
            }
            toggle() {
                this.isOpen() ? this.close() : this.open()
            }
            open() {
                this.isOpen() || (this.state = "opening", this.triggerEvent("open"), this.readjust(), this.$element.css("position", this.options.fixed ? "fixed" : "absolute").addClass("mdui-menu-open").transitionEnd((() => this.transitionEnd())))
            }
            close() {
                !this.isOpen() || (this.state = "closing", this.triggerEvent("close"), this.$element.find(".mdui-menu").each(((e, t) => {
                    this.closeSubMenu(_(t))
                })), this.$element.removeClass("mdui-menu-open").addClass("mdui-menu-closing").transitionEnd((() => this.transitionEnd())))
            }
        };
        const pt = "mdui-menu", gt = "_mdui_menu";
        _((() => {
            le.on("click", `[${pt}]`, (function () {
                const e = _(this);
                let t = e.data(gt);
                if (! t) {
                    const n = ue(this, pt),
                        i = n.target;
                    delete n.target,
                    t = new L.Menu(e, i, n),
                    e.data(gt, t),
                    t.toggle()
                }
            }))
        })), t.a = L
    },
    261 : function (e, t, n) {
        var i = n(262);
        e.exports = function (e, t, n) {
            var s,
                o = (t = t || {}).requestOptions || {},
                r = (o.requestMethod || "GET").toUpperCase(),
                a = o.requestParams || null,
                l = o.formData || null,
                c = null,
                d = new XMLHttpRequest,
                u = t.timeout || 0;
            if (d.onreadystatechange = function () {
                4 === d.readyState && (200 === d.status ? n(d.responseText, d, e, t) : 0 !== d.status && n(null, d, e, t))
            },
            d.onerror = function (i) {
                console.log(i),
                n(null, d, e, t)
            },
            d.ontimeout = function () {
                n(null, d, e, t)
            },
            a && a.length) 
                switch (s = a.map((function (e) {
                    return e.name + "=" + e.value
                })).join("&"), r) {
                    case "GET": e = e.split("?")[0],
                        e += "?" + s;
                        break;
                    case "POST": c = s
                }
             else 
                l && (c = l);
            

            return t.cacheBust && (e = i(e, "t", Date.now())),
            d.open(r, e, !0),
            d.timeout = u,
            d.setRequestHeader("X-Requested-With", "PJAX_MODIFY"),
            d.setRequestHeader("X-PJAX", "true"),
            d.setRequestHeader("X-PJAX-Selectors", JSON.stringify(t.selectors)),
            c && "POST" === r && ! l && d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
            d.send(c),
            d
        }
    },
    265 : function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(10),
            s = i.a,
            o = n(249),
            r = n(13),
            a = n(251),
            l = n(44),
            c = n(75),
            d = n(28),
            u = n(76),
            h = n(29),
            m = n(252),
            p = n(253),
            g = (n(77), function (e) {
                this.state = {
                    numPendingSwitches: 0,
                    href: null,
                    options: null
                },
                this.options = a(e),
                this.log("Pjax options", this.options),
                this.options.scrollRestoration && "scrollRestoration" in history && (history.scrollRestoration = "manual"),
                this.maxUid = this.lastUid = c(),
                this.parseDOM(document),
                d(window, "popstate", function (e) {
                    if (e.state) {
                        var t = h(this.options);
                        t.url = e.state.url,
                        t.title = e.state.title,
                        t.history = !1,
                        t.scrollPos = e.state.scrollPos,
                        e.state.uid < this.lastUid ? t.backward = !0 : t.forward = !0,
                        this.lastUid = e.state.uid,
                        this.loadUrl(e.state.url, t)
                    }
                }.bind(this))
            });
        g.switches = l,
        g.prototype = {
            log: n(254),
            getElements: function (e) {
                return e.querySelectorAll(this.options.elements)
            },
            parseDOM: function (e) {
                var t = n(255);
                r(this.getElements(e), t, this)
            },
            refresh: function (e) {
                this.parseDOM(e || document)
            },
            reload: function () {
                window.location.reload()
            },
            attachLink: n(256),
            attachForm: n(257),
            forEachSelectors: function (e, t, i) {
                return n(258).bind(this)(this.options.selectors, e, t, i)
            },
            switchSelectors: function (e, t, i, s) {
                return n(259).bind(this)(this.options.switches, this.options.switchesOptions, e, t, i, s)
            },
            latestChance: function (e) {
                window.location = e
            },
            onSwitch: function () {
                u(window, "resize scroll"),
                this.state.numPendingSwitches --,
                0 === this.state.numPendingSwitches && this.afterAllSwitches()
            },
            loadContent: function (e, t) {
                if ("string" == typeof e) {
                    var n = document.implementation.createHTMLDocument("pjax"),
                        i = e.match(/<html[^>]+>/gi);
                    if (i && i.length && ((i = i[0].match(/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi)).length && (i.shift(), i.forEach((function (e) {
                        var t = e.trim().split("=");
                        1 === t.length ? n.documentElement.setAttribute(t[0], !0) : n.documentElement.setAttribute(t[0], t[1].slice(1, -1))
                    })))), n.documentElement.innerHTML = e, this.log("load content", n.documentElement.attributes, n.documentElement.innerHTML.length), document.activeElement && m(document, this.options.selectors, document.activeElement)) 
                        try {
                            document.activeElement.blur()
                        }
                     catch (e) {}
                    this.switchSelectors(this.options.selectors, n, document, t)
                } else 
                    u(document, "pjax:complete pjax:error", t)

                

            },
            abortRequest: n(260),
            doRequest: n(261),
            handleResponse: n(263),
            loadUrl: function (e, t) {
                t = "object" == typeof t ? p({}, this.options, t) : h(this.options),
                this.log("load href", e, t),
                this.abortRequest(this.request),
                u(document, "pjax:send", t),
                this.request = this.doRequest(e, t, this.handleResponse.bind(this))
            },
            afterAllSwitches: function () {
                var e = Array.prototype.slice.call(document.querySelectorAll("[autofocus]")).pop();
                e && document.activeElement !== e && e.focus(),
                this.options.selectors.forEach((function (e) {
                    r(document.querySelectorAll(e), (function (e) {
                        o(e)
                    }))
                }));
                var t = this.state;
                if (t.options.history && (window.history.state || (this.lastUid = this.maxUid = c(), window.history.replaceState({
                    url: window.location.href,
                    title: document.title,
                    uid: this.maxUid,
                    scrollPos: [0, 0]
                }, document.title)), this.lastUid = this.maxUid = c(), window.history.pushState({
                    url: t.href,
                    title: t.options.title,
                    uid: this.maxUid,
                    scrollPos: [0, 0]
                }, t.options.title, t.href)), this.forEachSelectors((function (e) {
                    this.parseDOM(e)
                }), this), u(document, "pjax:complete pjax:success", t.options), "function" == typeof t.options.analytics && t.options.analytics(), t.options.history) {
                    var n = document.createElement("a");
                    if (n.href = this.state.href, n.hash) {
                        var i = n.hash.slice(1);
                        i = decodeURIComponent(i);
                        var s = 0,
                            a = document.getElementById(i) || document.getElementsByName(i)[0];
                        if (a && a.offsetParent) 
                            do {
                                s += a.offsetTop,
                                a = a.offsetParent
                            } while (a);
                        

                        window.scrollTo(0, s)
                    } else 
                        !1 !== t.options.scrollTo && (t.options.scrollTo.length > 1 ? window.scrollTo(t.options.scrollTo[0], t.options.scrollTo[1]) : window.scrollTo(0, t.options.scrollTo))

                    

                } else 
                    t.options.scrollRestoration && t.options.scrollPos && window.scrollTo(t.options.scrollPos[0], t.options.scrollPos[1]);
                

                this.state = {
                    numPendingSwitches: 0,
                    href: null,
                    options: null
                }
            }
        },
        g.isSupported = n(264);
        var f = g,
            v = n(47);
        const b = () => {
                v.a.inc()
            },
            x = () => {
                v.a.done()
            };
        var w = n(45),
            $ = (n(20), n(26), n(41), n(5));
        i.a.$;
        async function y() {
            let e = [];
            const t = document.querySelectorAll(".disk_name");
            for (let n of t) 
                e.push({displayName: n.innerHTML, path: n.getAttribute("href"), DOM: n});
            

            return e
        }
        var C = {
            version: "v1.1.6",
            builder: "build-186526"
        };
        async function E() {
            let e = new mdui.dialog({
                title: "Loading...",
                content: '<div class="mdui-spinner mdui-theme-pink"></div>',
                buttons: [],
                closeOnEsc: !1
            });
            mdui.mutation();
            const t = await async function () {
                let e = new URL("https://public.186526.xyz/renexmoe/checkupdate");
                return e.search = `?version=${
                    C.version
                }`,
                (await fetch(e.href)).json()
            }();
            e.close();
            try {
                new mdui.alert(`\n          <div class="mdui-typo">\n          本版本日志: ${
                    t.log
                }\n              <h5>主线版本</h5>\n              <ul>\n                  <li>版本: ${
                    t.version.main.ver
                }</li>\n                  <li>主题链接: <a href="${
                    t.version.main.url
                }">This</a></li>\n                  <li>LOG: ${
                    t.version.main.log
                }</li>\n              </ul>\n              <h5>LTS版本</h5>\n              <ul>\n                  <li>版本: ${
                    t.version.lts.ver
                }</li>\n                  <li>主题链接: <a href="${
                    t.version.lts.url
                }">This</a></li>\n                  <li>LOG: ${
                    t.version.lts.log
                }</li>\n              </ul>\n          </div>\n          `, `当前版本是 ${
                    C.version
                }-production-${
                    C.builder
                },${
                    t.status
                }`)
            } catch (e) {
                new mdui.alert(`<div class="mdui-typo">Error: ${e}</div>`, "检查更新遇到未知错误")
            }
        }
        globalThis.listenerStatus = !1;
        var k = _;
        async function _() {
            document.onmousemove = function (e) {
                let t = event || window.event,
                    n = document.documentElement.scrollLeft || document.body.scrollLeft,
                    i = document.documentElement.scrollTop || document.body.scrollTop,
                    s = t.pageX || t.clientX + n,
                    o = t.pageY || t.clientY + i,
                    r = document.getElementById("mouseplace");
                r.style.left = s + "px",
                r.style.top = o + "px"
            },
            document.body.oncontextmenu = function (e) {
                (e || window.event).preventDefault(),
                (() => {
                    let e = new s.Menu("#mouseplace", "#admin-menu"),
                        t = document.getElementById("admin-menu"),
                        n = document.getElementById("mouseplace");
                    t.style.left = n.style.left,
                    t.style.top = n.style.top,
                    e.open()
                })()
            },
            listenerStatus = !0
        }
        async function L() {
            return listenerStatus ? async function () {
                document.onmousemove = void 0,
                document.body.oncontextmenu = void 0,
                listenerStatus = !1
            }() : _()
        }
        globalThis.ToggleListener = L;
        const O = s.$;
        var T = () => {
            O("#toggle-drawer").on("click", (() => {
                new s.Drawer("#main-drawer", {
                    swipe: !0
                }).toggle()
            })),
            O(".downloadurl").each(((e, t) => {
                t.addEventListener("click", (() => {
                    L(),
                    new s.dialog({
                            content: `<div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-not-empty mdui-textfield-disabled"><label class="mdui-textfield-label">URL</label><input class="mdui-textfield-input" type="email" value="${
                            location.href.replace("?preview", "")
                        }" id="url-input" disabled=""></div>`,
                        title: "File URL",
                        buttons: [
                            {
                                text: "确定",
                                onClick: () => {
                                    L()
                                }
                            }
                        ]
                    }),
                    s.mutation()
                }))
            })),
            O(".back").each(((e, t) => {
                t.addEventListener("click", (() => {
                    window.history.back()
                }))
            })),
            O(".back-page").each(((e, t) => {
                t.addEventListener("click", (() => {
                    globalThis.renexmoe.pjax.loadUrl("../")
                }))
            })),
            O(".refresh").each(((e, t) => {
                t.addEventListener("click", (() => {
                    s.snackbar("刷新缓存中……"),
                    async function (e) {
                        const t = new URL(e);
                        t.search = "?RefreshCache";
                        const n = await fetch(t.href);
                        return 302 === n.status || 202 === n.status
                    }(location.href).then((e => {
                        if (! e) 
                            throw s.snackbar("刷新缓存遇到未知错误，请检查是否在盘符目录页面"),
                            response;
                        

                        s.snackbar("已成功刷新缓存"),
                        window.renexmoe.pjax.loadUrl(location.href)
                    }))
                }))
            })),
            O("#logout").on("click", (() => {
                s.snackbar("尝试退出登陆……"),
                async function () {
                    $.a.removeItem("admin", "/"),
                    location.reload()
                }()
            }))
        };
        const S = s.$;
        var I = () => {
            S.fn.extend({
                sortElements: function (e, t) {
                    t = t || function () {
                        return this
                    };
                    var n = this.map((function () {
                        var e = t.call(this),
                            n = e.parentNode,
                            i = n.insertBefore(document.createTextNode(""), e.nextSibling);
                        return function () {
                            n.insertBefore(this, i),
                            n.removeChild(i)
                        }
                    }));
                    return [].sort.call(this, e).each((function (e) {
                        n[e].call(t.call(this))
                    }))
                }
            }),
            S((() => {
                S(".icon-sort").on("click", (function () {
                    let e = S(this).attr("data-sort"),
                        t = S(this).attr("data-order"),
                        n = "less" === t ? "more" : "less";
                    S("li[data-sort]").sortElements((function (n, i) {
                        let s = S(n).attr("data-sort-" + e),
                            o = S(i).attr("data-sort-" + e),
                            r = s.localeCompare(o, void 0, {
                                numeric: !0
                            });
                        return "more" === t ? 0 - r : r
                    })),
                    S(this).attr("data-order", n).text("expand_" + n)
                }))
            }))
        };
        var M = n(112);
        const R = s.$;
        n(244);
        function D() {
            const e = new Set,
                t = new Set,
                n = document.createElement("link"),
                i = n.relList && n.relList.supports && n.relList.supports("prefetch") && window.IntersectionObserver && "isIntersecting" in IntersectionObserverEntry.prototype;
            if (navigator.connection && (navigator.connection.saveData || (navigator.connection.effectiveType || "").includes("2g")) || ! i) 
                return;
            

            const s = e => new Promise(((t, n) => {
                    const i = document.createElement("link");
                    i.rel = "prefetch",
                    i.href = function (e) {
                        try {
                            new URL(e)
                        } catch (e) {
                            return
                        }
                        if (new URL(e).host !== window.location.host) 
                            return;
                        

                        let t = window.location.protocol + "//" + window.location.host;
                        if ("?preview" === new URL(e).search) 
                            return t + new URL(e).pathname + "?preview";
                        

                        let n = "/";
                        for (let t of new URL(e).pathname.split("/").slice(1, -1)) 
                            n = n + t + "/";
                        

                        return t + n
                    }(e),
                    i.onload = t,
                    i.onerror = n,
                    console.log(`renexmoe::FlyingPages::Preload ${
                        i.href
                    }`),
                    document.head.appendChild(i)
                })),
                o = e => {
                    const t = setTimeout((() => m()), 5e3);
                    s(e).catch((() => m())). finally((() => clearTimeout(t)))
                },
                r = (n, i = !1) => {
                    if (t.has(n) || e.has(n)) 
                        return;
                    

                    const s = window.location.origin;
                    if (n.substring(0, s.length) === s && window.location.href !== n) {
                        for (let e = 0; e < window.FPConfig.ignoreKeywords.length; e++) 
                            if (n.includes(window.FPConfig.ignoreKeywords[e])) 
                                return;
                            
                        


                        i ? (o(n), t.add(n)) : e.add(n)
                    }
                },
                a = new IntersectionObserver((e => {
                    e.forEach((e => {
                        if (e.isIntersecting) {
                            const t = e.target.href;
                            r(t, !window.FPConfig.maxRPS)
                        }
                    }))
                }));
            let l = null;
            const c = e => {
                    const n = e.target.closest("a");
                    n && n.href && ! t.has(n.href) && (l = setTimeout((() => {
                        r(n.href, !0)
                    }), window.FPConfig.hoverDelay))
                },
                d = e => {
                    const n = e.target.closest("a");
                    n && n.href && ! t.has(n.href) && r(n.href, !0)
                },
                u = e => {
                    const n = e.target.closest("a");
                    n && n.href && ! t.has(n.href) && clearTimeout(l)
                },
                h = window.requestIdleCallback || function (e) {
                    const t = Date.now();
                    return setTimeout((function () {
                        e({
                            didTimeout: !1,
                            timeRemaining: function () {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }), 1)
                },
                m = () => {
                    document.querySelectorAll("a").forEach((e => a.unobserve(e))),
                    e.clear(),
                    document.removeEventListener("mouseover", c, !0),
                    document.removeEventListener("mouseout", u, !0),
                    document.removeEventListener("touchstart", d, !0)
                };
            window.FPConfig = Object.assign({
                delay: 0,
                ignoreKeywords: [],
                maxRPS: 3,
                hoverDelay: 50
            }, window.FPConfig),
            setInterval((() => {
                Array.from(e).slice(0, window.FPConfig.maxRPS).forEach((n => {
                    o(n),
                    t.add(n),
                    e.delete(n)
                }))
            }), 1e3),
            h((() => setTimeout((() => document.querySelectorAll("a").forEach((e => a.observe(e)))), 1e3 * window.FPConfig.delay)));
            const p = {
                capture: !0,
                passive: !0
            };
            document.addEventListener("mouseover", c, p),
            document.addEventListener("mouseout", u, p),
            document.addEventListener("touchstart", d, p)
        }
        var P = n(46);
        let j,
            A = !1;
        const U = () => {
            console.log("renexmoe::Markdown::Start Markdown Render"),
            s.snackbar("解析为Markdown中……");
            try {
                j = document.getElementById("code").innerText,
                M.setOptions({
                    renderer: new M.Renderer,
                    mangle: !1,
                    highlight: function (e, t) {
                        const n = P.default.getLanguage(t) ? t : "plaintext";
                        return P.default.highlight(n, e).value
                    },
                    pedantic: !1,
                    gfm: !0,
                    breaks: !1,
                    sanitize: !1,
                    smartLists: !0,
                    smartypants: !1,
                    xhtml: !1
                });
                const e = M(j);
                document.getElementById("code").innerHTML = `<div class="mdui-typo">${e}</div>`,
                A = !0,
                console.log("renexmoe::Markdown::Render Fininsh")
            } catch (e) {
                console.log("Not Markdown"),
                A = !1
            }
        };
        var q = () => Promise.resolve().then(n.bind(null, 46)).then((({default: e}) => {
            document.getElementById("code") && (console.log("renexmoe::Markdown::Start EventLister"), "md" === location.pathname.split("/")[location.pathname.split("/").length - 1].split(".")[location.pathname.split("/")[location.pathname.split("/").length - 1].split(".").length - 1] && U(),
            s.$(".highlight").each(((e, t) => {
                t.addEventListener("click", (() => {
                    A ? (document.getElementById("code").innerHTML = j, A =! 1) : U()
                }))
            })))
        }));
        var B = async () => {
            const e = await async function (e = globalThis.location.pathname) {
                let t = {
                    diskList: await y()
                };
                for (let n of t.diskList) 
                    if (e.indexOf(n.path) > -1) {
                        t.this = n;
                        break
                    }
                

                return t.this || (t.this =
                    { displayName: "Home",
                    path: "/",
                    DOM: document.querySelector("#home")
                }),
                t.diskList.push({displayName: "Home", path: "/", DOM: document.querySelector("#home")}),
                t
            }();
            e.diskList.forEach((e => {
                e.DOM.parentNode.classList.remove("mdui-list-item-active")
            })),
            e.this.DOM.parentNode.classList.add("mdui-list-item-active")
        };
        globalThis.mdui = s,
        globalThis.renexmoe = {
            toggle_theme: w.a.toggle,
            mutation: () => {
                B(),
                console.log("renexmoe::pjax::Page Load Success"),
                console.log("renexmoe::marked::Update Marked"),
                (async () => {
                    Promise.resolve().then(n.bind(null, 46)).then((({default: e}) => {
                        document.getElementById("head") && (M.setOptions({
                            renderer: new M.Renderer,
                            mangle: !1,
                            highlight: function (t, n) {
                                const i = e.getLanguage(n) ? n : "plaintext";
                                return e.highlight(i, t).value
                            },
                            pedantic: !1,
                            gfm: !0,
                            breaks: !1,
                            sanitize: !1,
                            smartLists: !0,
                            smartypants: !1,
                            xhtml: !1
                        }), R("#head").html(M(document.querySelector("#head-md").innerText))),
                        document.getElementById("readme") && (M.setOptions({
                            renderer: new M.Renderer,
                            mangle: !1,
                            highlight: function (t, n) {
                                const i = e.getLanguage(n) ? n : "plaintext";
                                return e.highlight(i, t).value
                            },
                            pedantic: !1,
                            gfm: !0,
                            breaks: !1,
                            sanitize: !1,
                            smartLists: !0,
                            smartypants: !1,
                            xhtml: !1
                        }), R("#readme").html(M(document.querySelector("#readme-md").innerText)))
                    }))
                })(),
                console.log("renexmoe::mdui::Init Theme"),
                w.a.mutation(),
                console.log("renexmoe::sort::Init Sort"),
                I(),
                s.mutation(),
                console.log("renexmoe::init::Start EventLister"),
                T(),
                q(),
                console.log("renexmoe::init::FlyingPages Preload"),
                D()
            },
            pjax: (() => {
                let e = new f({
                    elements: "a:not([target=_blank])",
                    selectors: [
                        ".main-drawer",
                        ".mdui-container",
                        "title",
                        ".pjax",
                        ".mdui-toolbar"
                    ],
                    cacheBust: !1
                });
                return e._handleResponse = e.handleResponse,
                e.handleResponse = function (t, n, i, s) {
                    200 !== n.status ? location.href = i : e._handleResponse(t, n, i, s)
                },
                document.addEventListener("pjax:send", b),
                document.addEventListener("pjax:success", x),
                e
            })(),
            renexmoe: C,
            version: C
        },
        s.$((() => {
            console.log("\n %c OneManager-theme-renexmoe | Powered by OneManager-php && Webpack | 186526 \n", "color: #fff; background: #444; padding:5px 0;"),
            console.log("renexmoe::init::Start Load"),
            console.log("renexmoe::init::Start EventLister"),
            k(),
            O("#about").on("click", (() => {
                new s.alert('<div class="mdui-typo"><h3>个人信息</h3><p>Email: <a href="mailto:admin@share4nothing.ml">admin@share4nothing.ml</a></p><hr></hr><h3>小小说明</h3><p>所有能放出来的东西我都放出来了，不能公开的东西有密码，当然你也不用去猜了，因为你真的猜不到<span title="你知道的太多了" class="heimu">（猜到了的可以邮件告诉我诶嘿）</span></p><p>关于Ecchi目录下的东西，有些打了“未测试”标签的是因为我手上有这个补丁，但是我没有这个游戏，所以就测试不了。如果你测试通过了可以邮件告诉我XD；当然最简单粗暴的方式是点击上面的Steam链接，加我为好友，送我一份这个游戏（在想Peach）</p><p>求求各位大佬给我的评测点个赞吧，要是您点数多的话打赏一下也是不可以撒（手头点数吃紧）</p><hr></hr><h3>关于本站</h3><p>基于<a href="https://github.com/qkqpttgf/OneManager-php">OneManager</a>的文件共享<br>基于<a href ="https://github.com/186526/onemanager-theme-renexmoe" >Onemanager-theme-renexmoe</a>主题并进行修改<br>部署于<a href="https://heroku.com">Heroku</a> <a href="https://heroku.com/deploy?template=https://github.com/qkqpttgf/OneManager-php" rel="nofollow" one-link-mark="yes"><img src="https://camo.githubusercontent.com/6979881d5a96b7b18a057083bb8aeb87ba35fc279452e29034c1e1c49ade0636/68747470733a2f2f7777772e6865726f6b7563646e2e636f6d2f6465706c6f792f627574746f6e2e737667" alt="Deploy" data-canonical-src="https://www.herokucdn.com/deploy/button.svg" style="max-width:100%;"></a><br>使用<a href="https://cloudflare.com">Cloudflare</a>家的CDN和Serverless服务</p></div>',"关于"),s.mutation()})),O("#checkupdate").on("click",(()=>{E()})),console.log("renexmoe::init::Start FlyingPages"),console.log("renexmoe::init::Init MDUI"),window.renexmoe.mutation(),document.addEventListener("pjax:success",window.renexmoe.mutation)}));t.default=globalThis.renexmoe},45:function(module,__webpack_exports__,__webpack_require__){"use strict";var _snowpack_pkg_mdui_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),_lib_cookies_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const $=_snowpack_pkg_mdui_js__WEBPACK_IMPORTED_MODULE_0__.a.$,func={mutation:()=>{if($("body").removeClass("mdui-theme-layout-auto"),window.disableddarkmode)return _snowpack_pkg_mdui_js__WEBPACK_IMPORTED_MODULE_0__.a.$("li[onclick^=renexmoe]").remove(),void _lib_cookies_js__WEBPACK_IMPORTED_MODULE_1__.a.setItem("darkmode",!1,1200,"/");_lib_cookies_js__WEBPACK_IMPORTED_MODULE_1__.a.getItem("darkmode")||(window.matchMedia("(prefers-color-scheme: dark)").matches?(_lib_cookies_js__WEBPACK_IMPORTED_MODULE_1__.a.setItem("darkmode",!0,1200,"/"),$("body").addClass("mdui-theme-layout-dark")):(_lib_cookies_js__WEBPACK_IMPORTED_MODULE_1__.a.setItem("darkmode",!1,1200,"/"),$("body").removeClass("mdui-theme-layout-dark"))),eval(_lib_cookies_js__WEBPACK_IMPORTED_MODULE_1__.a.getItem("darkmode"))?$("body").addClass("mdui-theme-layout-dark"):$("body").removeClass("mdui-theme-layout-dark")},toggle:()=>{eval(_lib_cookies_js__WEBPACK_IMPORTED_MODULE_1__.a.getItem("darkmode"))?($("body").removeClass("mdui-theme-layout-dark"),_lib_cookies_js__WEBPACK_IMPORTED_MODULE_1__.a.setItem("darkmode",!1,1200,"/")):($("body").addClass("mdui-theme-layout-dark","/"),_lib_cookies_js__WEBPACK_IMPORTED_MODULE_1__.a.setItem("darkmode",!0,1200,"/"))}};__webpack_exports__.a=func},46:function(e,t,n){"use strict";n.r(t);var i=n(116);i.registerLanguage("accesslog",n(117)),i.registerLanguage("actionscript",n(118)),i.registerLanguage("angelscript",n(119)),i.registerLanguage("apache",n(120)),i.registerLanguage("arcade",n(121)),i.registerLanguage("arduino",n(122)),i.registerLanguage("armasm",n(123)),i.registerLanguage("xml",n(124)),i.registerLanguage("asciidoc",n(125)),i.registerLanguage("autohotkey",n(126)),i.registerLanguage("autoit",n(127)),i.registerLanguage("avrasm",n(128)),i.registerLanguage("awk",n(129)),i.registerLanguage("bash",n(130)),i.registerLanguage("c",n(131)),i.registerLanguage("cmake",n(132)),i.registerLanguage("coffeescript",n(133)),i.registerLanguage("cos",n(134)),i.registerLanguage("cpp",n(135)),i.registerLanguage("csharp",n(136)),i.registerLanguage("csp",n(137)),i.registerLanguage("css",n(138)),i.registerLanguage("d",n(139)),i.registerLanguage("markdown",n(140)),i.registerLanguage("dart",n(141)),i.registerLanguage("delphi",n(142)),i.registerLanguage("diff",n(143)),i.registerLanguage("django",n(144)),i.registerLanguage("dns",n(145)),i.registerLanguage("dockerfile",n(146)),i.registerLanguage("dos",n(147)),i.registerLanguage("dsconfig",n(148)),i.registerLanguage("dust",n(149)),i.registerLanguage("ruby",n(150)),i.registerLanguage("erb",n(151)),i.registerLanguage("erlang-repl",n(152)),i.registerLanguage("erlang",n(153)),i.registerLanguage("excel",n(154)),i.registerLanguage("fix",n(155)),i.registerLanguage("flix",n(156)),i.registerLanguage("fortran",n(157)),i.registerLanguage("fsharp",n(158)),i.registerLanguage("glsl",n(159)),i.registerLanguage("gml",n(160)),i.registerLanguage("go",n(161)),i.registerLanguage("golo",n(162)),i.registerLanguage("gradle",n(163)),i.registerLanguage("haml",n(164)),i.registerLanguage("handlebars",n(165)),i.registerLanguage("haskell",n(166)),i.registerLanguage("haxe",n(167)),i.registerLanguage("http",n(168)),i.registerLanguage("hy",n(169)),i.registerLanguage("ini",n(170)),i.registerLanguage("irpf90",n(171)),i.registerLanguage("java",n(172)),i.registerLanguage("javascript",n(173)),i.registerLanguage("jboss-cli",n(174)),i.registerLanguage("json",n(175)),i.registerLanguage("julia",n(176)),i.registerLanguage("julia-repl",n(177)),i.registerLanguage("kotlin",n(178)),i.registerLanguage("lasso",n(179)),i.registerLanguage("latex",n(180)),i.registerLanguage("leaf",n(181)),i.registerLanguage("less",n(182)),i.registerLanguage("livecodeserver",n(183)),i.registerLanguage("livescript",n(184)),i.registerLanguage("llvm",n(185)),i.registerLanguage("lsl",n(186)),i.registerLanguage("lua",n(187)),i.registerLanguage("makefile",n(188)),i.registerLanguage("matlab",n(189)),i.registerLanguage("perl",n(190)),i.registerLanguage("mojolicious",n(191)),i.registerLanguage("monkey",n(192)),i.registerLanguage("moonscript",n(193)),i.registerLanguage("nginx",n(194)),i.registerLanguage("node-repl",n(195)),i.registerLanguage("nsis",n(196)),i.registerLanguage("objectivec",n(197)),i.registerLanguage("ocaml",n(198)),i.registerLanguage("openscad",n(199)),i.registerLanguage("oxygene",n(200)),i.registerLanguage("parser3",n(201)),i.registerLanguage("pf",n(202)),i.registerLanguage("pgsql",n(203)),i.registerLanguage("php",n(204)),i.registerLanguage("php-template",n(205)),i.registerLanguage("plaintext",n(206)),i.registerLanguage("pony",n(207)),i.registerLanguage("powershell",n(208)),i.registerLanguage("processing",n(209)),i.registerLanguage("profile",n(210)),i.registerLanguage("prolog",n(211)),i.registerLanguage("properties",n(212)),i.registerLanguage("python",n(213)),i.registerLanguage("r",n(214)),i.registerLanguage("roboconf",n(215)),i.registerLanguage("rsl",n(216)),i.registerLanguage("ruleslanguage",n(217)),i.registerLanguage("rust",n(218)),i.registerLanguage("sas",n(219)),i.registerLanguage("scala",n(220)),i.registerLanguage("scheme",n(221)),i.registerLanguage("scilab",n(222)),i.registerLanguage("scss",n(223)),i.registerLanguage("shell",n(224)),i.registerLanguage("sml",n(225)),i.registerLanguage("sqf",n(226)),i.registerLanguage("sql_more",n(227)),i.registerLanguage("sql",n(228)),i.registerLanguage("stylus",n(229)),i.registerLanguage("subunit",n(230)),i.registerLanguage("swift",n(231)),i.registerLanguage("taggerscript",n(232)),i.registerLanguage("yaml",n(233)),i.registerLanguage("twig",n(234)),i.registerLanguage("typescript",n(235)),i.registerLanguage("vbnet",n(236)),i.registerLanguage("vbscript",n(237)),i.registerLanguage("vbscript-html",n(238)),i.registerLanguage("vim",n(239)),i.registerLanguage("x86asm",n(240)),i.registerLanguage("xl",n(241)),i.registerLanguage("xquery",n(242)),i.registerLanguage("zephir",n(243)),t.default=i},47:function(e,t,n){"use strict";(function(e){n(20),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;var i,s,o=(function(e,t){e.exports=function(){var e,t,n={version:"0.2.0"},i=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:' [role = "bar"]',spinnerSelector:' [role = "spinner"]',parent:"body",template:' < div class = "bar" role = "bar" > <div class="peg"></div></div></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function s(e,t,n){return e<t?t:e>n?n:e}function o(e){return 100*(-1+e)}function r(e,t,n){var s;return(s="translate3d"===i.positionUsing?{transform:"translate3d("+o(e)+"%,0,0)"}:"translate"===i.positionUsing?{transform:"translate("+o(e)+"%,0)"}:{"margin-left":o(e)+"%"}).transition="all "+t+"ms "+n,s}n.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(i[t]=n);return this},n.status=null,n.set=function(e){var t=n.isStarted();e=s(e,i.minimum,1),n.status=1===e?null:e;var o=n.render(!t),c=o.querySelector(i.barSelector),d=i.speed,u=i.easing;return o.offsetWidth,a((function(t){""===i.positionUsing&&(i.positionUsing=n.getPositioningCSS()),l(c,r(e,d,u)),1===e?(l(o,{transition:"none",opacity:1}),o.offsetWidth,setTimeout((function(){l(o,{transition:"all "+d+"ms linear",opacity:0}),setTimeout((function(){n.remove(),t()}),d)}),d)):setTimeout(t,d)})),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var e=function(){setTimeout((function(){!n.status||(n.trickle(),e())}),i.trickleSpeed)};return i.trickle&&e(),this},n.done=function(e){return e||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(e){var t=n.status;return t?("number"!=typeof e&&(e=(1-t)*s(Math.random()*t,.1,.95)),t=s(t+e,0,.994),n.set(t)):n.start()},n.trickle=function(){return n.inc(Math.random()*i.trickleRate)},e=0,t=0,n.promise=function(i){return i&&"resolved"!==i.state()?(0===t&&n.start(),e++,t++,i.always((function(){0==--t?(e=0,n.done()):n.set((e-t)/e)})),this):this},n.render=function(e){if(n.isRendered())return document.getElementById("nprogress");d(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=i.template;var s,r=t.querySelector(i.barSelector),a=e?"-100":o(n.status||0),c=document.querySelector(i.parent);return l(r,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),i.showSpinner||(s=t.querySelector(i.spinnerSelector))&&m(s),c!=document.body&&d(c,"nprogress-custom-parent"),c.appendChild(t),t},n.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(i.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&m(e)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var a=function(){var e=[];function t(){var n=e.shift();n&&n(t)}return function(n){e.push(n),1==e.length&&t()}}(),l=function(){var e=["Webkit","O","Moz","ms"],t={};function n(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(e,t){return t.toUpperCase()}))}function i(t){var n=document.body.style;if(t in n)return t;for(var i,s=e.length,o=t.charAt(0).toUpperCase()+t.slice(1);s--;)if((i=e[s]+o)in n)return i;return t}function s(e){return e=n(e),t[e]||(t[e]=i(e))}function o(e,t,n){t=s(t),e.style[t]=n}return function(e,t){var n,i,s=arguments;if(2==s.length)for(n in t)void 0!==(i=t[n])&&t.hasOwnProperty(n)&&o(e,n,i);else o(e,s[1],s[2])}}();function c(e,t){return("string"==typeof e?e:h(e)).indexOf(" "+t+" ")>=0}function d(e,t){var n=h(e),i=n+t;c(n,t)||(e.className=i.substring(1))}function u(e,t){var n,i=h(e);!c(e,t)||(n=i.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function h(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function m(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return n}()}(s={path:i,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null!=t||s.path)}},s.exports),s.exports);t.a=o}).call(this,n(48))},5:function(e,t,n){"use strict";n(20);t.a={getItem:function(e){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[-.+*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,t,n,i,s,o){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var r="";if(n)switch(n.constructor){case Number:r=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:r="; expires="+n;break;case Date:r="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+r+(s?"; domain="+s:"")+(i?"; path="+i:"")+(o?"; secure":""),!0},removeItem:function(e,t,n){return!(!e||!this.hasItem(e))&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(t?"; path="+t:""),!0)},hasItem:function(e){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[-.+*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=0;t<e.length;t++)e[t]=decodeURIComponent(e[t]);return e}}}},[[265,8,0,1,7,5,2,6,3]]]);
 // # sourceMappingURL=app@798ab416.315dec1fe4cd953c2386.js.map
