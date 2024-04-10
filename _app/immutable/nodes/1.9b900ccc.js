import {S as b, i as E, s as P, k as p, r as _, a as S, l as u, m as d, u as g, h as r, c as y, p as f, b as A, E as l, n as h} from "../chunks/index.e4dc0a05.js";
function N(v) {
    let t, e, o, c, a, i;
    return {
        c() {
            t = p("div"),
            e = p("span"),
            o = _("404"),
            c = S(),
            a = p("span"),
            i = _("Page not found"),
            this.h()
        },
        l(n) {
            t = u(n, "DIV", {
                class: !0
            });
            var s = d(t);
            e = u(s, "SPAN", {
                class: !0
            });
            var m = d(e);
            o = g(m, "404"),
            m.forEach(r),
            c = y(s),
            a = u(s, "SPAN", {
                class: !0
            });
            var x = d(a);
            i = g(x, "Page not found"),
            x.forEach(r),
            s.forEach(r),
            this.h()
        },
        h() {
            f(e, "class", "text-transparent text-9xl font-bold"),
            f(a, "class", "text-neutral-300 font-bold text-lg"),
            f(t, "class", "flex flex-col w-fit h-full mx-auto items-center justify-center gap-3 bg-[url('/purple_anim.gif')] hue-rotate-[40deg] bg-cover bg-clip-text bg-center")
        },
        m(n, s) {
            A(n, t, s),
            l(t, e),
            l(e, o),
            l(t, c),
            l(t, a),
            l(a, i)
        },
        p: h,
        i: h,
        o: h,
        d(n) {
            n && r(t)
        }
    }
}
class k extends b {
    constructor(t) {
        super(),
        E(this, t, null, N, P, {})
    }
}
export {k as component};
