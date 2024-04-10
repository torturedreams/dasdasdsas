import {S as ee, i as te, s as se, D as ae, k as i, r as x, a as E, l as n, m as f, u as v, h as r, c as g, p as s, b as z, E as t, F as le, G as re, H as oe, g as ce, d as ie} from "../chunks/index.e4dc0a05.js";
const H = "celexrblx";
function ne(C) {
    let a, c, p, $, w, y, I, N, A, O, d, m, R, j, h, q, F, P, u, b, G, Q = new Date().getFullYear() + "", L, T, _, Y, B, D;
    const J = C[1].default
      , o = ae(J, C, C[0], null);
    return {
        c() {
            a = i("header"),
            c = i("a"),
            p = i("span"),
            $ = x("Yawn's Cfgs"),
            w = E(),
            y = i("span"),
            I = x("v2.0"),
            N = E(),
            A = i("div"),
            O = E(),
            d = i("div"),
            m = i("a"),
            R = x("Purchase"),
            j = E(),
            h = i("a"),
            q = x("Visit Discord"),
            F = E(),
            o && o.c(),
            P = E(),
            u = i("footer"),
            b = i("p"),
            G = x("Celex © "),
            L = x(Q),
            T = E(),
            _ = i("a"),
            Y = x("discord.gg/"),
            B = x(H),
            this.h()
        },
        l(e) {
            a = n(e, "HEADER", {
                class: !0
            });
            var l = f(a);
            c = n(l, "A", {
                href: !0,
                class: !0
            });
            var k = f(c);
            p = n(k, "SPAN", {
                class: !0
            });
            var U = f(p);
            $ = v(U, "Celex"),
            U.forEach(r),
            w = g(k),
            y = n(k, "SPAN", {
                class: !0
            });
            var W = f(y);
            I = v(W, "v2.0"),
            W.forEach(r),
            k.forEach(r),
            N = g(l),
            A = n(l, "DIV", {
                class: !0
            }),
            f(A).forEach(r),
            O = g(l),
            d = n(l, "DIV", {
                class: !0
            });
            var S = f(d);
            m = n(S, "A", {
                href: !0,
                class: !0
            });
            var X = f(m);
            R = v(X, "Purchase"),
            X.forEach(r),
            j = g(S),
            h = n(S, "A", {
                href: !0,
                target: !0,
                class: !0
            });
            var Z = f(h);
            q = v(Z, "Visit Discord"),
            Z.forEach(r),
            S.forEach(r),
            l.forEach(r),
            F = g(e),
            o && o.l(e),
            P = g(e),
            u = n(e, "FOOTER", {
                id: !0,
                class: !0
            });
            var V = f(u);
            b = n(V, "P", {
                class: !0
            });
            var K = f(b);
            G = v(K, "Celex © "),
            L = v(K, Q),
            K.forEach(r),
            T = g(V),
            _ = n(V, "A", {
                href: !0,
                class: !0
            });
            var M = f(_);
            Y = v(M, "discord.gg/"),
            B = v(M, H),
            M.forEach(r),
            V.forEach(r),
            this.h()
        },
        h() {
            s(p, "class", "text-xl group-hover:text-[#CD2096] transition-colors"),
            s(y, "class", "text-xs text-[#C8C8C8] self-end mb-[3px]"),
            s(c, "href", "/"),
            s(c, "class", "flex w-fit font-bold items-center gap-2 cursor-pointer py-1 group"),
            s(A, "class", "flex flex-[1_1_auto]"),
            s(m, "href", "https://shop.celex.gg"),
            s(m, "class", "btn"),
            s(h, "href", `https://discord.com/invite/${H}`),
            s(h, "target", "_blank"),
            s(h, "class", "btn"),
            s(d, "class", "flex gap-2"),
            s(a, "class", "flex w-full items-center py-2 px-3 bg-[#151515] fixed backdrop-blur-xl bg-[#0F0F0F]/50 backdrop-saturate-150 border-b-[1px] border-[#C8C8C8]/10 z-10 whitespace-nowrap"),
            s(b, "class", "text-white/80 text-xs"),
            s(_, "href", `https://discord.com/invite/${H}`),
            s(_, "class", "text-white/80 text-xs underline"),
            s(u, "id", "website made by @someplace on dizzy"),
            s(u, "class", "flex p-2 gap-2 justify-between")
        },
        m(e, l) {
            z(e, a, l),
            t(a, c),
            t(c, p),
            t(p, $),
            t(c, w),
            t(c, y),
            t(y, I),
            t(a, N),
            t(a, A),
            t(a, O),
            t(a, d),
            t(d, m),
            t(m, R),
            t(d, j),
            t(d, h),
            t(h, q),
            z(e, F, l),
            o && o.m(e, l),
            z(e, P, l),
            z(e, u, l),
            t(u, b),
            t(b, G),
            t(b, L),
            t(u, T),
            t(u, _),
            t(_, Y),
            t(_, B),
            D = !0
        },
        p(e, [l]) {
            o && o.p && (!D || l & 1) && le(o, J, e, e[0], D ? oe(J, e[0], l, null) : re(e[0]), null)
        },
        i(e) {
            D || (ce(o, e),
            D = !0)
        },
        o(e) {
            ie(o, e),
            D = !1
        },
        d(e) {
            e && r(a),
            e && r(F),
            o && o.d(e),
            e && r(P),
            e && r(u)
        }
    }
}
function fe(C, a, c) {
    let {$$slots: p={}, $$scope: $} = a;
    return C.$$set = w=>{
        "$$scope"in w && c(0, $ = w.$$scope)
    }
    ,
    [$, p]
}
class pe extends ee {
    constructor(a) {
        super(),
        te(this, a, fe, ne, se, {})
    }
}
export {pe as component};
