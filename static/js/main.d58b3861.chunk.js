(this.webpackJsonphashlips_nft_minting_dapp = this.webpackJsonphashlips_nft_minting_dapp || []).push([
    [0], {
        452: function (n, t) {},
        459: function (n, t) {},
        476: function (n, t) {},
        478: function (n, t) {},
        497: function (n, t) {},
        557: function (n, t) {},
        559: function (n, t) {},
        592: function (n, t) {},
        594: function (n, t) {},
        595: function (n, t) {},
        600: function (n, t) {},
        602: function (n, t) {},
        609: function (n, t) {},
        622: function (n, t) {},
        634: function (n, t) {},
        637: function (n, t) {},
        642: function (n, t) {},
        650: function (n, t) {},
        657: function (n, t) {},
        659: function (n, t) {},
        727: function (n, t) {},
        759: function (n, t) {},
        828: function (n, t) {},
        834: function (n, t) {},
        847: function (n, t) {},
        899: function (n, t, e) {},
        901: function (n, t, e) {},
        902: function (n, t, e) {
            "use strict";
            e.r(t);
            var c, a, o, r, i, s, l, d, u, p, C, h, j, b, x, f, O = e(6),
                g = e(187),
                m = e.n(g),
                v = e(1),
                w = e.n(v),
                A = e(7),
                N = e(163),
                y = e(41),
                T = e(136),
                E = e(155),
                S = e.n(E),
                _ = e(418),
                k = e.n(_),
                M = e(433),
                L = e(427),
                I = e.n(L),
                z = e(428),
                D = e.n(z),
                F = e(164),
                U = e(429),
                R = e(48),
                P = {
                    loading: !1,
                    account: null,
                    smartContract: null,
                    web3: null,
                    errorMsg: ""
                },
                K = function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "CONNECTION_REQUEST":
                            return Object(R.a)(Object(R.a)({}, P), {}, {
                                loading: !0
                            });
                        case "CONNECTION_SUCCESS":
                            return Object(R.a)(Object(R.a)({}, n), {}, {
                                loading: !1,
                                account: t.payload.account,
                                smartContract: t.payload.smartContract,
                                web3: t.payload.web3
                            });
                        case "CONNECTION_FAILED":
                            return Object(R.a)(Object(R.a)({}, P), {}, {
                                loading: !1,
                                errorMsg: t.payload
                            });
                        case "UPDATE_ACCOUNT":
                            return Object(R.a)(Object(R.a)({}, n), {}, {
                                account: t.payload.account
                            });
                        default:
                            return n
                    }
                },
                W = {
                    loading: !1,
                    totalSupply: 0,
                    cost: 0,
                    error: !1,
                    errorMsg: ""
                },
                H = function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "CHECK_DATA_REQUEST":
                            return Object(R.a)(Object(R.a)({}, n), {}, {
                                loading: !0,
                                error: !1,
                                errorMsg: ""
                            });
                        case "CHECK_DATA_SUCCESS":
                            return Object(R.a)(Object(R.a)({}, n), {}, {
                                loading: !1,
                                totalSupply: t.payload.totalSupply,
                                error: !1,
                                errorMsg: ""
                            });
                        case "CHECK_DATA_FAILED":
                            return Object(R.a)(Object(R.a)({}, W), {}, {
                                loading: !1,
                                error: !0,
                                errorMsg: t.payload
                            });
                        default:
                            return n
                    }
                },
                B = Object(F.b)({
                    blockchain: K,
                    data: H
                }),
                Y = [U.a],
                G = Object(F.c)(F.a.apply(void 0, Y)),
                q = Object(F.d)(B, G),
                Q = function (n) {
                    return {
                        type: "CHECK_DATA_FAILED",
                        payload: n
                    }
                },
                J = function () {
                    return function () {
                        var n = Object(A.a)(w.a.mark((function n(t) {
                            var e;
                            return w.a.wrap((function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return t({
                                            type: "CHECK_DATA_REQUEST"
                                        }), n.prev = 1, n.next = 4, q.getState().blockchain.smartContract.methods.totalSupply().call();
                                    case 4:
                                        e = n.sent, t({
                                            type: "CHECK_DATA_SUCCESS",
                                            payload: {
                                                totalSupply: e
                                            }
                                        }), n.next = 12;
                                        break;
                                    case 8:
                                        n.prev = 8, n.t0 = n.catch(1), console.log(n.t0), t(Q("Could not load data from contract."));
                                    case 12:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [1, 8]
                            ])
                        })));
                        return function (t) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                X = {
                    walletconnect: {
                        package: M.a,
                        options: {
                            infuraId: "8f287b37cc8e461f8b8123e8c9d54ae7"
                        }
                    },
                    walletlink: {
                        package: I.a,
                        options: {
                            appName: "Proof Of Paper Hands NFT",
                            infuraId: "8f287b37cc8e461f8b8123e8c9d54ae7",
                            rpc: "https://mainnet.infura.io/v3/",
                            chainId: 1,
                            appLogoUrl: null,
                            darkMode: !0
                        }
                    }
                },
                V = new D.a({
                    providerOptions: X
                }),
                Z = function (n) {
                    return {
                        type: "CONNECTION_FAILED",
                        payload: n
                    }
                },
                $ = function (n) {
                    return function () {
                        var t = Object(A.a)(w.a.mark((function t(e) {
                            return w.a.wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        e({
                                            type: "UPDATE_ACCOUNT",
                                            payload: {
                                                account: n
                                            }
                                        }), e(J());
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function (n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                nn = e(42),
                tn = (nn.a.div(c || (c = Object(y.a)(["\n  background-color: var(--primary);\n  background-image: ", ";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])), (function (n) {
                    var t = n.image;
                    return t ? "url(".concat(t, ")") : "none"
                })), nn.a.div(a || (a = Object(y.a)(["\n  height: 8px;\n  width: 8px;\n"]))), nn.a.div(o || (o = Object(y.a)(["\n  height: 16px;\n  width: 16px;\n"])))),
                en = nn.a.div(r || (r = Object(y.a)(["\n  height: 24px;\n  width: 24px;\n"]))),
                cn = (nn.a.div(i || (i = Object(y.a)(["\n  height: 32px;\n  width: 32px;\n"]))), nn.a.div(s || (s = Object(y.a)(["\n  display: flex;\n  flex: ", ";\n  flex-direction: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  background-color: ", ";\n  width: 100%;\n  background-image: ", ";\n  background-size: cover;\n  background-position: center;\n"])), (function (n) {
                    var t = n.flex;
                    return t || 0
                }), (function (n) {
                    var t = n.fd;
                    return t || "column"
                }), (function (n) {
                    var t = n.jc;
                    return t || "flex-start"
                }), (function (n) {
                    var t = n.ai;
                    return t || "flex-start"
                }), (function (n) {
                    return n.test ? "pink" : "none"
                }), (function (n) {
                    var t = n.image;
                    return t ? "url(".concat(t, ")") : "none"
                }))),
                an = (nn.a.p(l || (l = Object(y.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))), nn.a.p(d || (d = Object(y.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))), nn.a.p(u || (u = Object(y.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),
                on = (nn.a.div(p || (p = Object(y.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))), e(891), e.p + "static/media/opensea.9db955c6.png"),
                rn = e.p + "static/media/etherscan.55c19a2e.png",
                sn = (e(899), e.p + "static/media/dog5.9ed6c261.png"),
                ln = e.p + "static/media/tosa.49021b95.png",
                dn = (e.p, e(10)),
                un = (nn.a.button(C || (C = Object(y.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  \n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))), nn.a.button(h || (h = Object(y.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))));
            nn.a.div(j || (j = Object(y.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))), nn.a.img(b || (b = Object(y.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))), nn.a.img(x || (x = Object(y.a)(["\n  box-shadow: 0px 50px 101px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dotted var(--secondary);\n  background-color: var(--accent);\n  border-radius: 20%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))), nn.a.a(f || (f = Object(y.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));
            var pn = function () {
                    var n = Object(T.b)(),
                        t = Object(T.c)((function (n) {
                            return n.blockchain
                        })),
                        e = Object(T.c)((function (n) {
                            return n.data
                        })),
                        c = Object(O.useState)(!1),
                        a = Object(N.a)(c, 2),
                        o = a[0],
                        r = a[1],
                        i = Object(O.useState)("Click buy to mint your NFT."),
                        s = Object(N.a)(i, 2),
                        l = s[0],
                        d = s[1],
                        u = Object(O.useState)(1),
                        p = Object(N.a)(u, 2),
                        C = p[0],
                        h = p[1],
                        j = Object(O.useState)({
                            CONTRACT_ADDRESS: "",
                            SCAN_LINK: "",
                            NETWORK: {
                                NAME: "",
                                SYMBOL: "",
                                ID: 0
                            },
                            NFT_NAME: "",
                            SYMBOL: "",
                            MAX_SUPPLY: 1,
                            WEI_COST: 0,
                            DISPLAY_COST: 0,
                            GAS_LIMIT: 0,
                            MARKETPLACE: "",
                            MARKETPLACE_LINK: "",
                            SHOW_BACKGROUND: !1
                        }),
                        b = Object(N.a)(j, 2),
                        x = b[0],
                        f = b[1],
                        g = function () {
                            "" !== t.account && null !== t.smartContract && n(J(t.account))
                        },
                        m = function () {
                            var n = Object(A.a)(w.a.mark((function n() {
                                var t, e;
                                return w.a.wrap((function (n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, fetch("/config/config.json", {
                                                headers: {
                                                    "Content-Type": "application/json",
                                                    Accept: "application/json"
                                                }
                                            });
                                        case 2:
                                            return t = n.sent, n.next = 5, t.json();
                                        case 5:
                                            e = n.sent, f(e);
                                        case 7:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function () {
                                return n.apply(this, arguments)
                            }
                        }();
                    return Object(O.useEffect)((function () {
                        m()
                    }), []), Object(O.useEffect)((function () {
                        g()
                    }), [t.account]), Object(dn.jsxs)(dn.Fragment, {
                        children: [Object(dn.jsx)("div", {
                            className: "firework"
                        }), Object(dn.jsx)("div", {
                            className: "firework"
                        }), Object(dn.jsx)("div", {
                            className: "firework"
                        }), Object(dn.jsxs)("div", {
                            className: "hero",
                            children: [Object(dn.jsxs)("div", {
                                className: "banner",
                                children: [Object(dn.jsx)("h1", {
                                    children: "TOSA INU NFT MINT"
                                }), Object(dn.jsx)("p", {
                                    children: "The limited supply of 100 unique \u201cTOSA INU NFT\u2019s offer two special utilities for our early investors"
                                }), Object(dn.jsxs)("div", {
                                    className: "socialnet",
                                    children: [Object(dn.jsx)("l1", {
                                        children: Object(dn.jsx)("a", {
                                            href: "https://t.me/TosaInu_erc20",
                                            target: "_blank",
                                            children: Object(dn.jsx)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                x: "0px",
                                                y: "0px",
                                                width: "40",
                                                height: "40",
                                                viewBox: "0 0 64 64",
                                                children: Object(dn.jsx)("path", {
                                                    d: "M 32 3 C 16.01 3 3 16.009 3 32 C 3 47.991 16.01 61 32 61 C 47.99 61 61 47.991 61 32 C 61 16.009 47.99 3 32 3 z M 32 5 C 46.888 5 59 17.112 59 32 C 59 46.888 46.888 59 32 59 C 17.112 59 5 46.888 5 32 C 5 17.112 17.112 5 32 5 z M 32 9 C 19.317 9 9 19.318 9 32 C 9 32.552 9.447 33 10 33 C 10.553 33 11 32.552 11 32 C 11 20.42 20.421 11 32 11 C 43.579 11 53 20.42 53 32 C 53 43.58 43.579 53 32 53 C 31.447 53 31 53.448 31 54 C 31 54.552 31.447 55 32 55 C 44.683 55 55 44.682 55 32 C 55 19.318 44.683 9 32 9 z M 41.367188 20.025391 C 40.982813 19.987891 40.561266 20.05125 40.134766 20.21875 C 39.398766 20.50975 19.395375 28.943344 18.609375 29.277344 C 17.787375 29.557344 16.877719 30.263078 17.011719 31.330078 C 17.163719 32.542078 18.429891 33.024078 18.587891 33.080078 L 23.462891 34.722656 C 23.871891 36.063656 24.992906 39.735641 25.253906 40.556641 C 25.383906 40.969641 25.713609 42.008187 26.474609 42.242188 C 27.056609 42.453188 27.633484 42.252172 28.021484 41.951172 L 30.869141 39.355469 L 35.605469 42.986328 L 35.814453 43.109375 C 36.245453 43.297375 36.630938 43.365234 36.960938 43.365234 C 37.312938 43.365234 37.602312 43.288219 37.820312 43.199219 C 38.729312 42.826219 39.093812 41.972953 39.132812 41.876953 L 42.900391 22.658203 C 43.176391 21.430203 42.767 20.7725 42.375 20.4375 C 42.099 20.202 41.751562 20.062891 41.367188 20.025391 z M 40.982422 22.039062 C 40.975422 22.096063 40.964312 22.165047 40.945312 22.248047 L 37.251953 41.173828 C 37.214953 41.226828 37.146453 41.315609 37.064453 41.349609 C 36.965453 41.388609 36.823891 41.356406 36.712891 41.316406 L 30.757812 36.748047 L 27.185547 40.011719 L 27.939453 35.214844 C 27.939453 35.214844 37.19575 26.586844 37.59375 26.214844 C 37.99175 25.843844 37.859375 25.763672 37.859375 25.763672 C 37.886375 25.312672 37.257812 25.634766 37.257812 25.634766 L 25.080078 33.175781 L 25.074219 33.154297 L 19.253906 31.195312 C 19.244906 31.191312 19.234609 31.187594 19.224609 31.183594 C 19.256609 31.169594 19.289266 31.156531 19.322266 31.144531 C 26.517266 28.110531 40.270187 22.314125 40.867188 22.078125 C 40.908187 22.061125 40.947422 22.049063 40.982422 22.039062 z M 12.003906 37.035156 C 11.874734 37.021094 11.739672 37.031766 11.607422 37.072266 L 9.6914062 37.646484 C 9.1624063 37.805484 8.8634844 38.361625 9.0214844 38.890625 C 9.1514844 39.324625 9.5475156 39.605469 9.9785156 39.605469 C 10.072516 39.605469 10.169625 39.5915 10.265625 39.5625 L 12.181641 38.988281 C 12.710641 38.829281 13.011516 38.270187 12.853516 37.742188 C 12.735016 37.346188 12.391422 37.077344 12.003906 37.035156 z M 13.828125 41.761719 C 13.699656 41.779719 13.573078 41.823531 13.455078 41.894531 L 11.738281 42.921875 C 11.263281 43.205875 11.109578 43.818969 11.392578 44.292969 C 11.579578 44.605969 11.910953 44.779297 12.251953 44.779297 C 12.426953 44.779297 12.603672 44.735672 12.763672 44.638672 L 14.480469 43.611328 C 14.955469 43.327328 15.109172 42.714234 14.826172 42.240234 C 14.613172 41.884734 14.213531 41.707719 13.828125 41.761719 z M 17.134766 45.832031 C 16.879016 45.831531 16.623234 45.927547 16.427734 46.123047 L 15.011719 47.537109 C 14.619719 47.927109 14.619766 48.560172 15.009766 48.951172 C 15.204766 49.147172 15.46175 49.244141 15.71875 49.244141 C 15.97475 49.244141 16.228828 49.147125 16.423828 48.953125 L 17.839844 47.539062 C 18.231844 47.149063 18.231797 46.517953 17.841797 46.126953 C 17.646297 45.931453 17.390516 45.832531 17.134766 45.832031 z M 21.34375 49.017578 C 20.957781 48.962594 20.558703 49.136688 20.345703 49.492188 L 19.316406 51.207031 C 19.032406 51.681031 19.184203 52.294125 19.658203 52.578125 C 19.819203 52.675125 19.997828 52.722656 20.173828 52.722656 C 20.513828 52.722656 20.84425 52.548328 21.03125 52.236328 L 22.060547 50.523438 C 22.344547 50.049437 22.19275 49.434391 21.71875 49.150391 C 21.60025 49.079141 21.472406 49.035906 21.34375 49.017578 z M 25.816406 51.097656 C 25.428703 51.139422 25.086047 51.406734 24.966797 51.802734 L 24.388672 53.716797 C 24.228672 54.245797 24.528641 54.804844 25.056641 54.964844 C 25.153641 54.993844 25.249703 55.007812 25.345703 55.007812 C 25.774703 55.007813 26.172734 54.728875 26.302734 54.296875 L 26.880859 52.380859 C 27.040859 51.851859 26.740891 51.294766 26.212891 51.134766 C 26.080391 51.095016 25.945641 51.083734 25.816406 51.097656 z"
                                                })
                                            })
                                        })
                                    }), Object(dn.jsx)("l1", {
                                        children: Object(dn.jsx)("a", {
                                            href: "https://twitter.com/TosaInu_Erc20",
                                            target: "_blank",
                                            children: Object(dn.jsx)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                x: "0px",
                                                y: "0px",
                                                width: "40",
                                                height: "40",
                                                viewBox: "0 0 100 100",
                                                children: Object(dn.jsx)("path", {
                                                    d: "M 64.5 16 C 54.8466 16 47 23.8466 47 33.5 C 47 34.612975 47.239051 35.649481 47.441406 36.697266 C 25.881358 34.793239 15.450335 21.403751 14.001953 19.412109 A 1.0001 1.0001 0 0 0 12.326172 19.5 C 10.830125 22.096365 10 25.327371 10 28.5 C 10 33.68572 12.466385 38.537405 16.300781 41.707031 C 15.200572 41.527267 14.28279 41.289576 13.566406 41.050781 C 12.161275 40.582404 11.554687 40.167969 11.554688 40.167969 A 1.0001 1.0001 0 0 0 10 41 C 10 48.238221 14.566882 54.385889 20.953125 56.841797 C 20.622271 56.859584 20.337443 57 20 57 C 19.147392 57 17.845018 56.92449 17.0625 56.808594 A 1.0001 1.0001 0 0 0 15.992188 58.179688 L 16.076172 58.382812 A 1.0001 1.0001 0 0 0 16.078125 58.388672 C 18.616781 64.391466 24.800144 68.552058 31.517578 69.582031 C 26.297103 73.538616 19.508644 76 12.5 76 L 11 76 A 1.0001 1.0001 0 0 0 10.445312 77.832031 C 16.663396 81.97742 24.952062 84 33.5 84 C 60.274418 84 82 62.274418 82 35.5 A 1.0001 1.0001 0 0 0 82 35.490234 C 82 35.490234 81.993998 34.87894 81.986328 34.240234 C 81.981728 33.851303 81.976826 33.639764 81.972656 33.361328 C 86.86431 30.439635 89.800781 26.599609 89.800781 26.599609 A 1.0001 1.0001 0 0 0 88.71875 25.041016 C 88.71875 25.041016 85.486778 25.821369 82.072266 26.207031 C 86.054307 22.877916 87.449219 19.316406 87.449219 19.316406 A 1.0001 1.0001 0 0 0 86.021484 18.121094 C 86.021484 18.121094 81.075033 20.716475 76.613281 20.943359 C 73.467486 17.908115 69.21376 16 64.5 16 z M 64.5 18 C 68.856381 18 72.776277 19.797639 75.59375 22.6875 A 1.0001 1.0001 0 0 0 76.332031 22.988281 C 79.465469 22.913051 82.20469 21.973629 84.257812 21.107422 C 83.286248 22.546273 81.678701 24.397531 79.082031 26.076172 A 1.0001 1.0001 0 0 0 78.708984 27.314453 C 78.761294 27.434385 78.819031 27.620382 78.912109 27.857422 A 1.0001 1.0001 0 0 0 79.865234 28.490234 C 82.084306 28.441124 84.331582 28.072004 86.091797 27.712891 C 84.765988 29.00661 82.862586 30.620803 80.474609 31.966797 A 1.0001 1.0001 0 0 0 79.966797 32.878906 C 79.966799 32.878961 79.978718 33.626627 79.986328 34.263672 C 79.993944 34.900716 80 35.509766 80 35.509766 C 79.994637 61.198775 59.19027 82 33.5 82 C 26.599599 82 19.989658 80.52774 14.599609 77.806641 C 22.152358 77.330627 29.387787 74.464381 34.666016 69.746094 A 1.0001 1.0001 0 0 0 34.027344 68 C 27.717528 67.823398 21.64961 64.083733 18.755859 58.917969 C 19.189528 58.939162 19.629741 59 20 59 C 22.215848 59 24.339214 58.651386 26.333984 57.943359 A 1.0001 1.0001 0 0 0 26.060547 56.001953 C 18.746713 55.552973 12.927418 49.829862 12.154297 42.599609 C 12.510284 42.756951 12.434169 42.782744 12.933594 42.949219 C 14.528462 43.480842 16.888889 44 20 44 A 1.0001 1.0001 0 0 0 20.427734 42.095703 C 15.467541 39.75499 12 34.266873 12 28.5 C 12 26.20086 12.611205 23.910494 13.501953 21.892578 C 16.60185 25.774302 27.420269 37.485392 48.537109 38.863281 A 1.0001 1.0001 0 0 0 49.566406 37.599609 C 49.20555 36.284657 49 34.916686 49 33.5 C 49 24.9274 55.9274 18 64.5 18 z M 64.5 21 C 60.811943 21 57.496914 22.617858 55.208984 25.166016 A 0.50005 0.50005 0 1 0 55.953125 25.833984 C 58.061196 23.486142 61.104057 22 64.5 22 C 67.36354 22 70.04768 23.047904 72.166016 24.955078 A 0.50005 0.50005 0 1 0 72.833984 24.212891 C 70.53832 22.146065 67.60846 21 64.5 21 z M 53.617188 27.994141 A 0.50005 0.50005 0 0 0 53.150391 28.291016 C 52.698066 29.272789 52.372841 30.319587 52.1875 31.416016 A 0.50026397 0.50026397 0 1 0 53.173828 31.583984 C 53.344487 30.574413 53.642918 29.611211 54.058594 28.708984 A 0.50005 0.50005 0 0 0 53.617188 27.994141 z M 52.492188 32.992188 A 0.50005 0.50005 0 0 0 52 33.5 C 52 33.87054 52.044266 34.220554 52.072266 34.542969 A 0.50005 0.50005 0 1 0 53.068359 34.457031 C 53.03835 34.111448 53 33.78746 53 33.5 A 0.50005 0.50005 0 0 0 52.492188 32.992188 z M 72.548828 52.994141 A 0.50005 0.50005 0 0 0 72.083984 53.289062 C 67.250061 63.728797 58.30392 71.885733 47.335938 75.673828 A 0.5003204 0.5003204 0 1 0 47.664062 76.619141 C 58.89208 72.741235 68.042158 64.397204 72.990234 53.710938 A 0.50005 0.50005 0 0 0 72.548828 52.994141 z M 41.490234 77.240234 A 0.50005 0.50005 0 0 0 41.40625 77.25 C 39.79001 77.556256 38.140748 77.768095 36.464844 77.884766 A 0.50025983 0.50025983 0 1 0 36.535156 78.882812 C 38.249252 78.763484 39.93799 78.546166 41.59375 78.232422 A 0.50005 0.50005 0 0 0 41.490234 77.240234 z M 32.509766 77.970703 A 0.50009537 0.50009537 0 1 0 32.490234 78.970703 C 32.810171 78.977388 33.141239 79 33.5 79 A 0.50005 0.50005 0 1 0 33.5 78 C 33.184761 78 32.859827 77.978023 32.509766 77.970703 z"
                                                })
                                            })
                                        })
                                    })]
                                })]
                            }), Object(dn.jsxs)("div", {
                                className: "home",
                                children: [Object(dn.jsx)("div", {
                                    className: "homebanner",
                                    children: Object(dn.jsx)("div", {
                                        className: "mintsect",
                                        children: Object(dn.jsxs)("div", {
                                            className: "mints",
                                            children: [Object(dn.jsxs)("div", {
                                                className: "mint-image",
                                                children: [Object(dn.jsx)("img", {
                                                    src: ln
                                                }), Object(dn.jsxs)("h2", {
                                                    className: "totalsup",
                                                    children: [e.totalSupply, " / ", x.MAX_SUPPLY]
                                                })]
                                            }), Object(dn.jsxs)("div", {
                                                className: "mint-top",
                                                children: [Object(dn.jsx)("h1", {
                                                    children: "TOSA INU NFT"
                                                }), Object(dn.jsx)("h3", {
                                                    children: "Price per NFT"
                                                }), Object(dn.jsx)("h2", {
                                                    children: "0.2 ETH + Gas"
                                                }), "" === t.account || null === t.smartContract ? Object(dn.jsxs)(cn, {
                                                    ai: "center",
                                                    jc: "center",
                                                    children: [Object(dn.jsxs)(an, {
                                                        style: {
                                                            textAlign: "center",
                                                            color: "var(--accent-text)"
                                                        },
                                                        children: ["Connect to the ", x.NETWORK.NAME, " network"]
                                                    }), Object(dn.jsx)(tn, {}), Object(dn.jsx)("button", {
                                                        onClick: function (t) {
                                                            t.preventDefault(), n(function () {
                                                                var n = Object(A.a)(w.a.mark((function n(t) {
                                                                    var e, c, a, o, r, i, s, l;
                                                                    return w.a.wrap((function (n) {
                                                                        for (;;) switch (n.prev = n.next) {
                                                                            case 0:
                                                                                return t({
                                                                                    type: "CONNECTION_REQUEST"
                                                                                }), n.next = 3, V.connect();
                                                                            case 3:
                                                                                return e = n.sent, n.next = 6, fetch("/config/abi.json", {
                                                                                    headers: {
                                                                                        "Content-Type": "application/json",
                                                                                        Accept: "application/json"
                                                                                    }
                                                                                });
                                                                            case 6:
                                                                                return c = n.sent, n.next = 9, c.json();
                                                                            case 9:
                                                                                return a = n.sent, n.next = 12, fetch("/config/config.json", {
                                                                                    headers: {
                                                                                        "Content-Type": "application/json",
                                                                                        Accept: "application/json"
                                                                                    }
                                                                                });
                                                                            case 12:
                                                                                return o = n.sent, n.next = 15, o.json();
                                                                            case 15:
                                                                                return r = n.sent, S.a.setProvider(e), i = new k.a(e), n.prev = 18, n.next = 21, e.request({
                                                                                    method: "eth_requestAccounts"
                                                                                });
                                                                            case 21:
                                                                                return s = n.sent, n.next = 24, e.request({
                                                                                    method: "net_version"
                                                                                });
                                                                            case 24:
                                                                                n.sent == r.NETWORK.ID ? (l = new S.a(a, r.CONTRACT_ADDRESS), t({
                                                                                    type: "CONNECTION_SUCCESS",
                                                                                    payload: {
                                                                                        account: s[0],
                                                                                        smartContract: l,
                                                                                        web3: i
                                                                                    }
                                                                                }), e.on("accountsChanged", (function (n) {
                                                                                    t($(n[0]))
                                                                                })), e.on("chainChanged", (function () {
                                                                                    window.location.reload()
                                                                                }))) : t(Z("Change network to ".concat(r.NETWORK.NAME, "."))), n.next = 31;
                                                                                break;
                                                                            case 28:
                                                                                n.prev = 28, n.t0 = n.catch(18), t(Z("Something went wrong."));
                                                                            case 31:
                                                                            case "end":
                                                                                return n.stop()
                                                                        }
                                                                    }), n, null, [
                                                                        [18, 28]
                                                                    ])
                                                                })));
                                                                return function (t) {
                                                                    return n.apply(this, arguments)
                                                                }
                                                            }()), g()
                                                        },
                                                        children: "CONNECT"
                                                    }), "" !== t.errorMsg ? Object(dn.jsxs)(dn.Fragment, {
                                                        children: [Object(dn.jsx)(tn, {}), Object(dn.jsx)(an, {
                                                            style: {
                                                                textAlign: "center",
                                                                color: "var(--accent-text)"
                                                            },
                                                            children: t.errorMsg
                                                        })]
                                                    }) : null]
                                                }) : Object(dn.jsxs)(dn.Fragment, {
                                                    children: [Object(dn.jsx)(an, {
                                                        style: {
                                                            textAlign: "center",
                                                            color: "var(--accent-text)"
                                                        },
                                                        children: l
                                                    }), Object(dn.jsx)(en, {}), Object(dn.jsxs)(cn, {
                                                        ai: "center",
                                                        jc: "center",
                                                        fd: "row",
                                                        children: [Object(dn.jsx)(un, {
                                                            style: {
                                                                lineHeight: .4
                                                            },
                                                            disabled: o ? 1 : 0,
                                                            onClick: function (n) {
                                                                n.preventDefault(),
                                                                    function () {
                                                                        var n = C - 1;
                                                                        n < 1 && (n = 1), h(n)
                                                                    }()
                                                            },
                                                            children: "-"
                                                        }), Object(dn.jsx)(en, {}), Object(dn.jsx)(an, {
                                                            style: {
                                                                textAlign: "center",
                                                                color: "var(--accent-text)"
                                                            },
                                                            children: C
                                                        }), Object(dn.jsx)(en, {}), Object(dn.jsx)(un, {
                                                            disabled: o ? 1 : 0,
                                                            onClick: function (n) {
                                                                n.preventDefault(),
                                                                    function () {
                                                                        var n = C + 1;
                                                                        n > 5 && (n = 5), h(n)
                                                                    }()
                                                            },
                                                            children: "+"
                                                        })]
                                                    }), Object(dn.jsx)(tn, {}), Object(dn.jsx)(cn, {
                                                        ai: "center",
                                                        jc: "center",
                                                        fd: "row",
                                                        children: Object(dn.jsx)("button", {
                                                            disabled: o ? 1 : 0,
                                                            onClick: function (e) {
                                                                e.preventDefault(),
                                                                    function () {
                                                                        var e = x.WEI_COST,
                                                                            c = x.GAS_LIMIT,
                                                                            a = String(e * C),
                                                                            o = String(c * C);
                                                                        console.log("Cost: ", a), console.log("Gas limit: ", o), d("Minting your ".concat(x.NFT_NAME, "...")), r(!0), t.smartContract.methods.mint(C).send({
                                                                            gasLimit: String(o),
                                                                            to: x.CONTRACT_ADDRESS,
                                                                            from: t.account,
                                                                            value: a
                                                                        }).once("error", (function (n) {
                                                                            console.log(n), d("Sorry, something went wrong please try again later."), r(!1)
                                                                        })).then((function (e) {
                                                                            console.log(e), d("WOW, the ".concat(x.NFT_NAME, " is yours! go visit Opensea.io to view it.")), r(!1), n(J(t.account))
                                                                        }))
                                                                    }(), g()
                                                            },
                                                            children: o ? "BUSY" : "BUY"
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                }), Object(dn.jsx)("div", {
                                    className: "nftbanner",
                                    children: Object(dn.jsx)("img", {
                                        src: sn
                                    })
                                })]
                            }), Object(dn.jsx)("div", {
                                className: "opentext",
                                children: Object(dn.jsx)("h1", {
                                    children: "View Collection on"
                                })
                            }), Object(dn.jsxs)("div", {
                                className: "opensea",
                                children: [Object(dn.jsx)("a", {
                                    href: "https://opensea.io/collection/tosainugold",
                                    target: "blank",
                                    children: Object(dn.jsx)("img", {
                                        className: "openlogo",
                                        src: on
                                    })
                                }), Object(dn.jsx)("a", {
                                    href: "https://etherscan.io/address/0xDDa02A9fcA2ef994F7ebe523995dE0a20Ab0C846",
                                    target: "blank",
                                    children: Object(dn.jsx)("img", {
                                        className: "openlogo2",
                                        src: rn
                                    })
                                })]
                            }), Object(dn.jsxs)("div", {
                                className: "title2",
                                children: ["Please make sure you are connected to the right network (", x.NETWORK.NAME, " Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]
                            }), Object(dn.jsxs)("div", {
                                className: "title2",
                                children: ["We have set the gas limit to ", x.GAS_LIMIT, " for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]
                            })]
                        })]
                    })
                },
                Cn = function (n) {
                    n && n instanceof Function && e.e(3).then(e.bind(null, 908)).then((function (t) {
                        var e = t.getCLS,
                            c = t.getFID,
                            a = t.getFCP,
                            o = t.getLCP,
                            r = t.getTTFB;
                        e(n), c(n), a(n), o(n), r(n)
                    }))
                };
            e(901);
            m.a.render(Object(dn.jsx)(T.a, {
                store: q,
                children: Object(dn.jsx)(pn, {})
            }), document.getElementById("root")), Cn()
        }
    },
    [
        [902, 1, 2]
    ]
]);
//# sourceMappingURL=main.d58b3861.chunk.js.map