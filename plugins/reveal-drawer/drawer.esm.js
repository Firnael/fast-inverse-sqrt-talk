function e(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
    return r;
}
function n(n, t) {
    var r;
    if ('undefined' == typeof Symbol || null == n[Symbol.iterator]) {
        if (
            Array.isArray(n) ||
            (r = (function (n, t) {
                if (n) {
                    if ('string' == typeof n) return e(n, t);
                    var r = Object.prototype.toString.call(n).slice(8, -1);
                    return (
                        'Object' === r && n.constructor && (r = n.constructor.name),
                        'Map' === r || 'Set' === r
                            ? Array.from(n)
                            : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? e(n, t)
                            : void 0
                    );
                }
            })(n)) ||
            (t && n && 'number' == typeof n.length)
        ) {
            r && (n = r);
            var o = 0,
                l = function () {};
            return {
                s: l,
                n: function () {
                    return o >= n.length ? { done: !0 } : { done: !1, value: n[o++] };
                },
                e: function (e) {
                    throw e;
                },
                f: l
            };
        }
        throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
    }
    var a,
        i = !0,
        c = !1;
    return {
        s: function () {
            r = n[Symbol.iterator]();
        },
        n: function () {
            var e = r.next();
            return (i = e.done), e;
        },
        e: function (e) {
            (c = !0), (a = e);
        },
        f: function () {
            try {
                i || null == r.return || r.return();
            } finally {
                if (c) throw a;
            }
        }
    };
}
var t = {
        backspace: 8,
        tab: 9,
        enter: 13,
        shift: 16,
        ctrl: 17,
        alt: 18,
        pausebreak: 19,
        capslock: 20,
        esc: 27,
        space: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
        leftarrow: 37,
        uparrow: 38,
        rightarrow: 39,
        downarrow: 40,
        insert: 45,
        delete: 46,
        0: 48,
        1: 49,
        2: 50,
        3: 51,
        4: 52,
        5: 53,
        6: 54,
        7: 55,
        8: 56,
        9: 57,
        a: 65,
        b: 66,
        c: 67,
        d: 68,
        e: 69,
        f: 70,
        g: 71,
        h: 72,
        i: 73,
        j: 74,
        k: 75,
        l: 76,
        m: 77,
        n: 78,
        o: 79,
        p: 80,
        q: 81,
        r: 82,
        s: 83,
        t: 84,
        u: 85,
        v: 86,
        w: 87,
        x: 88,
        y: 89,
        z: 90,
        leftwindowkey: 91,
        rightwindowkey: 92,
        selectkey: 93,
        numpad0: 96,
        numpad1: 97,
        numpad2: 98,
        numpad3: 99,
        numpad4: 100,
        numpad5: 101,
        numpad6: 102,
        numpad7: 103,
        numpad8: 104,
        numpad9: 105,
        multiply: 106,
        add: 107,
        subtract: 109,
        decimalpoint: 110,
        divide: 111,
        f1: 112,
        f2: 113,
        f3: 114,
        f4: 115,
        f5: 116,
        f6: 117,
        f7: 118,
        f8: 119,
        f9: 120,
        f10: 121,
        f11: 122,
        f12: 123,
        numlock: 144,
        scrolllock: 145,
        semicolon: 186,
        equalsign: 187,
        comma: 188,
        dash: 189,
        period: 190,
        forwardslash: 191,
        graveaccent: 192,
        openbracket: 219,
        backslash: 220,
        closebracket: 221,
        singlequote: 222
    },
    r = { parentElement: null, color: 'red', selected: !1, onClick: null },
    o = { parentElement: null, colors: ['red', 'blue', 'green', 'yellow'], onColorChange: null },
    l = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
            n = e.parentElement,
            t = e.color,
            o = e.selected,
            l = e.onClick,
            a = { color: t, selected: o };
        null == n && console.error('Please provide parent element for color selector');
        var i = function () {
                null != l && l(a.color), (a.selected = !0);
            },
            c = function () {
                o.settings = !1;
            };
        return (
            (a.element = document.createElement('div')),
            (a.element.className = 'revealjs-drawer-color_picker'),
            (a.element.style.backgroundColor = t),
            a.element.addEventListener('click', i),
            n.append(a.element),
            { unSelect: c, select: i }
        );
    },
    a = function (e) {
        var n = e.parentElement,
            t = void 0 === n ? null : n;
        null == t && console.error('Please provide parent element for color container');
        var r = document.createElement('div');
        (r.className = 'revealjs-drawer-pen_icon'), t.append(r);
        return {
            changeColor: function (e) {
                r.style.backgroundColor = e;
            },
            disable: function () {
                r.classList.add('disabled');
            },
            enable: function () {
                r.classList.remove('disabled');
            }
        };
    };
export default function (revealInstance) {
    const Reveal = revealInstance;
    var e = {},
        r = !1,
        i = {},
        c = null,
        d = null,
        s = null,
        u = null,
        m = null,
        p = { drawerElement: null, drawerElementContext: null, paths: [] },
        f = !1,
        y = { x: 0, y: 0, prevX: 0, prevY: 0, isVisible: !1 };
    function v(e) {
        return t[e];
    }
    function g() {
        if (((y.dirty = !1), (y.prevX = y.x), (y.prevY = y.y), 0 === p.paths.length)) return !1;
        var e = p.paths[p.paths.length - 1];
        (p.drawerElementContext.fillStyle = e.color),
            (p.drawerElementContext.strokeStyle = e.color),
            (p.drawerElementContext.lineWidth = e.pathSize),
            p.drawerElementContext.stroke(e);
    }
    function h() {
        p.drawerElementContext.clearRect(0, 0, p.drawerElement.width, p.drawerElement.height);
        var e,
            t = n(p.paths);
        try {
            for (t.s(); !(e = t.n()).done; ) {
                var r = e.value;
                (p.drawerElementContext.fillStyle = r.color),
                    (p.drawerElementContext.strokeStyle = r.color),
                    (p.drawerElementContext.lineWidth = r.pathSize),
                    p.drawerElementContext.stroke(r);
            }
        } catch (e) {
            t.e(e);
        } finally {
            t.f();
        }
    }
    function w(e) {
        if (1 === e.buttons) {
            var n = p.drawerElement.getBoundingClientRect();
            p.paths[p.paths.length - 1].lineTo(e.clientX - n.left, e.clientY - n.top);
        }
        (y.x = e.pageX),
            (y.y = e.pageY),
            !y.dirty && f && 1 === e.buttons && ((y.dirty = !0), requestAnimationFrame(g));
    }
    function C(n) {
        g(),
            p.paths.push(new Path2D()),
            (p.paths[p.paths.length - 1].color = e.color),
            (p.paths[p.paths.length - 1].pathSize = e.pathSize);
    }
    function b() {
        document.addEventListener('mousemove', w),
            document.addEventListener('mouseup', C),
            (y.isVisible = !0),
            u.enablePen(),
            s.classList.remove('disabled');
    }
    function E() {
        document.removeEventListener('mousemove', w),
            document.removeEventListener('mouseup', C),
            (y.isVisible = !1),
            u.disablePen(),
            s.classList.add('disabled'),
            requestAnimationFrame(g);
    }
    function k(e) {
        var n;
        ((n = document.createElement('canvas')).className = 'revealjs-drawer_canvas'),
            document.querySelector('.revealjs-drawer').appendChild(n),
            ((d = (c = n).getContext('2d')).canvas.width = window.innerWidth),
            (d.canvas.height = window.innerHeight),
            (d.imageSmoothingEnabled = !0),
            (i[e] = { drawerElement: c, drawerElementContext: d, paths: [] }),
            p.drawerElement && (p.drawerElement.style.display = 'none'),
            (p = i[e]),
            C();
    }
    var x = function (n) {
        (e.color = n), null != m && m({ type: 'pointerColorChange', data: { color: n } }), C();
    };
    function S(n) {
        (m = n.dispatchEvent),
            (s = (function () {
                var n = document.createElement('div');
                (n.className = 'revealjs-drawer'), (n.style.display = 'none');
                var t = document.createElement('div');
                (t.className = 'revealjs-drawer-menu'),
                    (u = (function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
                            n = e.parentElement,
                            t = e.colors,
                            r = e.onColorChange;
                        null == n && console.error('Please provide parent element for color container');
                        var i = a({ parentElement: n }),
                            c = document.createElement('div');
                        (c.className = 'revealjs-drawer-color_container'), n.append(c);
                        var d = function (e) {
                                (s.selectColor = e), null != r && r(e), i.changeColor(e);
                            },
                            s = {
                                selectedColor: t[0],
                                colors: t.reduce(function (e, n) {
                                    return (
                                        (e[n] = l({ parentElement: c, color: n, selected: n === t[0], onClick: d })), e
                                    );
                                }, {})
                            };
                        return (
                            i.changeColor(s.selectedColor),
                            {
                                selectColor: function (e) {
                                    s.colors[e].select();
                                },
                                disablePen: function () {
                                    i.disable();
                                },
                                enablePen: function () {
                                    i.enable();
                                }
                            }
                        );
                    })({ parentElement: t, colors: e.colors, onColorChange: x })),
                    n.append(t);
                var r,
                    i,
                    c = document.querySelector('.slides');
                return (r = n), (i = c).parentNode.insertBefore(r, i.nextSibling), n;
            })());
    }
    function K(e) {
        if (e.ctrlKey && 'z' === e.key) {
            var n = p.paths.pop();
            p.paths.pop(), p.paths.push(n), requestAnimationFrame(h);
        }
    }
    function L(n) {
        e.colors
            .map(function (e, n) {
                return String(n + 1);
            })
            .includes(n.key) && u.selectColor(e.colors[Number(n.key) - 1]);
    }
    function j() {
        (s.style.display = 'none' === s.style.display ? 'block' : 'none'),
            (r = 'none' !== s.style.display)
                ? (document.addEventListener('keydown', K),
                  document.addEventListener('keydown', L),
                  b(),
                  (f = !0),
                  null != m && m({ type: 'pointerColorChange', data: { color: e.color } }))
                : (document.removeEventListener('keydown', K),
                  document.removeEventListener('keydown', L),
                  E(),
                  (f = !1),
                  null != m && m({ type: 'pointerColorChange', data: { color: null } }));
    }
    function A(e) {
        B(), ((p = i[e]).drawerElement.style.display = 'block');
    }
    function B() {
        p.drawerElement && (p.drawerElement.style.display = 'none');
    }
    return {
        id: 'drawer',
        init: function (n) {
            var t;
            (t = n.getConfig()),
                null == (e = t.drawer || {}).toggleDrawKey
                    ? (e.toggleDrawKey = 'd')
                    : (e.toggleDrawKey = e.toggleDrawKey.toLowerCase()),
                null == e.toggleBoardKey
                    ? (e.toggleBoardKey = 't')
                    : (e.toggleBoardKey = e.toggleBoardKey.toLowerCase()),
                (null != e.pathSize && 'number' == typeof e.pathSize) || (e.pathSize = 12),
                (Array.isArray(e.colors) && 0 !== e.colors.length) ||
                    (e.colors = ['#fa1e0e', '#8ac926', '#1982c4', '#ffca3a']),
                (null != e.color && 'string' == typeof e.color) || (e.color = e.colors[0]),
                (e.drawKeyCode = v(e.toggleDrawKey)),
                (e.boradKeyCode = v(e.toggleBoardKey)),
                S(n),
                Reveal.on('slidetransitionend', function (e) {
                    var n = 'slide-'.concat(e.indexh, '-').concat(e.indexv);
                    i[n] ? A(n) : k(n);
                }),
                Reveal.on('slidechanged', function (e) {
                    B();
                }),
                Reveal.on('ready', function (e) {
                    var n = 'slide-'.concat(e.indexh, '-').concat(e.indexv);
                    i[n] ? A(n) : k(n);
                }),
                n.addKeyBinding({ keyCode: e.drawKeyCode, key: e.toggleDrawKey }, function () {
                    (r = !r) ? b() : E();
                }),
                n.addKeyBinding({ keyCode: e.boradKeyCode, key: e.toggleBoardKey }, function () {
                    j();
                });
        }
    };
}
