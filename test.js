// Автотест: подставляем тестовые значения и сверяем с ожидаемым результатом
const fs = require('fs');
const code = fs.readFileSync('./formulas.js', 'utf8');
const formulas = eval(code + '; formulas');
// Тесты: id формулы → входные значения + ожидаемый результат
const tests = {
  // Кинематика
  'speed':                    { in: { s: 100, t: 20 },         expected: 5,        tol: 0.01 },
  'path':                     { in: { v: 10, t: 5 },           expected: 50,       tol: 0.01 },
  'time':                     { in: { s: 100, v: 5 },          expected: 20,       tol: 0.01 },

  // Динамика
  'force-newton':             { in: { m: 5, a: 2 },            expected: 10,       tol: 0.01 },
  'mass-from-force':          { in: { f: 10, a: 2 },           expected: 5,        tol: 0.01 },
  'acceleration-from-force':  { in: { f: 10, m: 5 },           expected: 2,        tol: 0.01 },
  'gravity-force':            { in: { m: 10 },                 expected: 98,       tol: 0.1  },
  'mass-from-gravity':        { in: { f: 98 },                 expected: 10,       tol: 0.01 },

  // Работа и мощность
  'work-force-path':          { in: { f: 10, s: 5 },           expected: 50,       tol: 0.01 },
  'force-from-work':          { in: { a: 50, s: 5 },           expected: 10,       tol: 0.01 },
  'path-from-work':           { in: { a: 50, f: 10 },          expected: 5,        tol: 0.01 },
  'power-work-time':          { in: { a: 100, t: 10 },         expected: 10,       tol: 0.01 },
  'work-from-power':          { in: { n: 10, t: 10 },          expected: 100,      tol: 0.01 },
  'time-from-power':          { in: { a: 100, n: 10 },         expected: 10,       tol: 0.01 },

  // Энергия
  'kinetic-energy':           { in: { m: 2, v: 10 },           expected: 100,      tol: 0.01 },
  'mass-from-kinetic':        { in: { ek: 100, v: 10 },        expected: 2,        tol: 0.01 },
  'speed-from-kinetic':       { in: { ek: 100, m: 2 },         expected: 10,       tol: 0.01 },
  'potential-energy':         { in: { m: 2, h: 10 },           expected: 196,      tol: 0.1  },
  'height-from-potential':    { in: { ep: 196, m: 2 },         expected: 10,       tol: 0.01 },

  // Плотность
  'density':                  { in: { m: 10, v: 2 },           expected: 5,        tol: 0.01 },
  'mass-from-density':        { in: { p: 5, v: 2 },            expected: 10,       tol: 0.01 },
  'volume-from-density':      { in: { m: 10, p: 5 },           expected: 2,        tol: 0.01 },

  // Равноускоренное движение
  'acceleration':             { in: { v: 20, v0: 0, t: 4 },    expected: 5,        tol: 0.01 },
  'final-speed':              { in: { v0: 0, a: 5, t: 4 },     expected: 20,       tol: 0.01 },
  'path-accelerated':         { in: { v0: 0, a: 5, t: 4 },     expected: 40,       tol: 0.01 },
  'path-no-time':             { in: { v: 20, v0: 0, a: 5 },    expected: 40,       tol: 0.01 },

  // Свободное падение
  'fall-time':                { in: { h: 20 },                 expected: 2.02,     tol: 0.05 },
  'fall-speed':               { in: { h: 20 },                 expected: 19.8,     tol: 0.1  },
  'fall-height':              { in: { t: 2 },                  expected: 19.6,     tol: 0.1  },

  // Окружность
  'centripetal-accel':        { in: { v: 10, r: 5 },           expected: 20,       tol: 0.01 },
  'linear-speed-circle':      { in: { r: 5, t: 10 },           expected: 3.14,     tol: 0.05 },
  'centripetal-force':        { in: { m: 2, v: 10, r: 5 },     expected: 40,       tol: 0.01 },

  // Импульс
  'impulse':                  { in: { m: 2, v: 10 },           expected: 20,       tol: 0.01 },
  'impulse-of-force':         { in: { f: 10, t: 2 },           expected: 20,       tol: 0.01 },
  'mass-from-impulse':        { in: { p: 20, v: 10 },          expected: 2,        tol: 0.01 },
  'speed-from-impulse':       { in: { p: 20, m: 2 },           expected: 10,       tol: 0.01 },

  // Силы
  'friction-force':           { in: { mu: 0.3, n: 100 },       expected: 30,       tol: 0.01 },
  'hooke-law':                { in: { k: 100, x: 0.1 },        expected: 10,       tol: 0.01 },
  'stiffness':                { in: { f: 10, x: 0.1 },         expected: 100,      tol: 0.01 },

  // Давление
  'pressure-force-area':      { in: { f: 100, s: 2 },          expected: 50,       tol: 0.01 },
  'force-from-pressure':      { in: { p: 50, s: 2 },           expected: 100,      tol: 0.01 },
  'area-from-pressure':       { in: { f: 100, p: 50 },         expected: 2,        tol: 0.01 },
  'liquid-pressure':          { in: { rho: 1000, h: 10 },      expected: 98000,    tol: 1    },

  // Архимед
  'archimedes':               { in: { rho: 1000, v: 0.01 },    expected: 98,       tol: 0.1  },
  'volume-from-archimedes':   { in: { fa: 98, rho: 1000 },     expected: 0.01,     tol: 0.001},

  // Механизмы
  'lever':                    { in: { f1: 10, l1: 2, l2: 1 },  expected: 20,       tol: 0.01 },
  'efficiency':               { in: { ap: 80, az: 100 },       expected: 80,       tol: 0.01 },
  'ke-of-spring':             { in: { k: 100, x: 0.2 },        expected: 2,        tol: 0.01 },

    // ===> Новые тесты для порции 1
  'period-pendulum':          { in: { l: 1 },                    expected: 2.007,   tol: 0.05 },
  'period-spring':            { in: { m: 1, k: 100 },            expected: 0.628,   tol: 0.01 },
  'frequency-from-period':    { in: { t: 2 },                    expected: 0.5,     tol: 0.01 },
  'period-from-frequency':    { in: { nu: 2 },                   expected: 0.5,     tol: 0.01 },
  'wave-speed':               { in: { lambda: 2, nu: 5 },        expected: 10,      tol: 0.01 },
  'wavelength':               { in: { v: 10, nu: 5 },            expected: 2,       tol: 0.01 },
  'moment-of-force':          { in: { f: 10, l: 2 },             expected: 20,      tol: 0.01 },
  'force-from-moment':        { in: { m: 20, l: 2 },             expected: 10,      tol: 0.01 },
  'shoulder-from-moment':     { in: { m: 20, f: 10 },            expected: 2,       tol: 0.01 },
  'work-with-angle':          { in: { f: 10, s: 5, a: 0 },       expected: 50,      tol: 0.1  },
  'gravity-universal':        { in: { m1: 1e10, m2: 1e10, r: 1e5 }, expected: 0.667,  tol: 0.01    },
  'free-fall-accel':          { in: { m: 6e24, r: 6.4e6 },       expected: 9.77,    tol: 0.1  },
  'acceleration-to-speed':    { in: { v: 10, s: 10 },            expected: 5,       tol: 0.01 },
  'speed-from-acceleration':  { in: { a: 5, s: 10 },             expected: 10,      tol: 0.01 },

    // ===> Тесты порции 2
  'projectile-range':         { in: { v: 20, a: 45 },          expected: 40.8,   tol: 0.5  },
  'projectile-height':        { in: { v: 20, a: 45 },          expected: 10.2,   tol: 0.5  },
  'projectile-time':          { in: { v: 20, a: 45 },          expected: 2.89,   tol: 0.05 },
  'reactive-speed':           { in: { vg: 100, mt: 10, m: 100 }, expected: 10,   tol: 0.01 },
  'reactive-force':           { in: { ms: 5, vg: 100 },         expected: 500,   tol: 0.01 },
  'weight-on-support':        { in: { m: 10 },                  expected: 98,    tol: 0.1  },
  'weight-in-lift-up':        { in: { m: 10, a: 2 },            expected: 118,   tol: 0.1  },
  'weight-in-lift-down':      { in: { m: 10, a: 2 },            expected: 78,    tol: 0.1  },
  'weightless':               { in: { m: 10, g: 9.8 },          expected: 0,     tol: 0.01 },
  'inclined-force':           { in: { m: 10, a: 30 },           expected: 49,    tol: 0.5  },
  'inclined-normal':          { in: { m: 10, a: 30 },           expected: 84.87, tol: 0.5  },
  'inclined-friction':        { in: { mu: 0.2, m: 10, a: 30 },  expected: 16.97, tol: 0.5  },
  'inclined-work':            { in: { m: 10, h: 2 },            expected: 196,   tol: 0.5  },
  'inclined-efficiency':      { in: { m: 10, h: 2, f: 30, l: 8 }, expected: 81.67, tol: 0.5 },
  'power-force-speed':        { in: { f: 100, v: 5 },           expected: 500,   tol: 0.01 },
  'force-from-power-speed':   { in: { n: 500, v: 5 },           expected: 100,   tol: 0.01 },
  'speed-from-power-force':   { in: { n: 500, f: 100 },         expected: 5,     tol: 0.01 },
  'torque':                   { in: { f: 10, r: 2 },            expected: 20,    tol: 0.01 },
  'moment-of-inertia':        { in: { m: 5, r: 2 },             expected: 20,    tol: 0.01 },
  'rotational-kinetic':       { in: { i: 2, w: 10 },            expected: 100,   tol: 0.01 },
  'angular-momentum':         { in: { i: 2, w: 10 },            expected: 20,    tol: 0.01 },
  'angular-speed-period':     { in: { t: 2 },                   expected: 3.14,  tol: 0.01 },
  'hydrostatic-force':        { in: { rho: 1000, h: 10, s: 2 }, expected: 196000, tol: 10 },
  'mass-of-liquid':           { in: { rho: 1000, v: 2 },        expected: 2000,  tol: 0.5  },
  'volume-flow-rate':         { in: { s: 0.5, v: 4 },           expected: 2,     tol: 0.01 },
  'buoyant-condition':        { in: { m: 10, rho: 1000, v: 0.01 }, expected: 0, tol: 0.1  },
  'body-acceleration':        { in: { f: 100, ftr: 20, m: 10 }, expected: 8,     tol: 0.01 },

    // === Термодинамика ===
  'heat-heating':          { in: { c: 4200, m: 2, dt: 10 },     expected: 84000,  tol: 10 },
  'heat-mass':             { in: { q: 84000, c: 4200, dt: 10 }, expected: 2,      tol: 0.01 },
  'heat-temp-change':      { in: { q: 84000, c: 4200, m: 2 },   expected: 10,     tol: 0.01 },
  'heat-specific':         { in: { q: 84000, m: 2, dt: 10 },    expected: 4200,   tol: 0.5  },
  'heat-melting':          { in: { lambda: 330000, m: 2 },      expected: 660000, tol: 10 },
  'mass-from-melting':     { in: { q: 660000, lambda: 330000 }, expected: 2,      tol: 0.01 },
  'heat-vaporization':     { in: { l: 2260000, m: 1 },          expected: 2260000, tol: 10 },
  'mass-from-vaporization':{ in: { q: 2260000, l: 2260000 },    expected: 1,      tol: 0.01 },
  'heat-combustion':       { in: { q: 30000000, m: 2 },         expected: 60000000, tol: 100 },
  'fuel-mass':             { in: { q: 60000000, qspec: 30000000 }, expected: 2,   tol: 0.01 },
  'efficiency-heat-engine':{ in: { q1: 1000, q2: 700 },         expected: 30,     tol: 0.01 },
  'useful-work-heat':      { in: { q1: 1000, q2: 700 },         expected: 300,    tol: 0.01 },
  'efficiency-carnot':     { in: { t1: 500, t2: 300 },          expected: 40,     tol: 0.01 },
  'internal-energy-ideal': { in: { nu: 1, t: 300 },             expected: 3739.5, tol: 5    },
  'first-law-thermo':      { in: { q: 1000, a: 400 },           expected: 600,    tol: 0.01 },
  'gas-work':              { in: { p: 100000, dv: 0.01 },       expected: 1000,   tol: 0.5  },
  'heat-gas-work':         { in: { du: 600, a: 400 },           expected: 1000,   tol: 0.01 },
  'gas-pressure-main':     { in: { nu: 1, t: 273, v: 0.0224 },  expected: 101286, tol: 100  },
  'gas-temperature':       { in: { p: 101325, v: 0.0224, nu: 1 }, expected: 273.1, tol: 0.5 },
  'gas-volume':            { in: { nu: 1, t: 273, p: 101325 },  expected: 0.0224, tol: 0.001 },
  'boyle-mariotte':        { in: { p1: 100000, v1: 0.02, v2: 0.04 }, expected: 50000, tol: 1 },
  'gay-lussac':            { in: { v1: 1, t1: 273, t2: 546 },   expected: 2,      tol: 0.01 },
  'charles':               { in: { p1: 100000, t1: 273, t2: 546 }, expected: 200000, tol: 1 },
  'combined-gas-law':      { in: { p1: 100000, v1: 1, t1: 273, t2: 546, v2: 1 }, expected: 200000, tol: 1 },
  'humidity':              { in: { rho: 0.01, rho0: 0.02 },     expected: 50,     tol: 0.01 },
  'absolute-humidity':     { in: { m: 0.02, v: 2 },             expected: 0.01,   tol: 0.001 },
  'kelvin-from-celsius':   { in: { t: 27 },                     expected: 300,    tol: 0.01 },
  'celsius-from-kelvin':   { in: { t: 300 },                    expected: 27,     tol: 0.01 },

    // ===>Электричество
  'ohm-law':              { in: { u: 12, r: 4 },              expected: 3,        tol: 0.01 },
  'voltage-ohm':          { in: { i: 2, r: 6 },               expected: 12,       tol: 0.01 },
  'resistance-ohm':       { in: { u: 12, i: 2 },              expected: 6,        tol: 0.01 },
  'power-current':        { in: { u: 12, i: 2 },              expected: 24,       tol: 0.01 },
  'power-resistance':     { in: { i: 2, r: 6 },               expected: 24,       tol: 0.01 },
  'power-voltage-resistance': { in: { u: 12, r: 6 },          expected: 24,       tol: 0.01 },
  'joule-lenz':           { in: { i: 2, r: 6, t: 10 },        expected: 240,      tol: 0.01 },
  'charge-current':       { in: { i: 2, t: 10 },              expected: 20,       tol: 0.01 },
  'current-charge':       { in: { q: 20, t: 10 },             expected: 2,        tol: 0.01 },
  'time-charge':          { in: { q: 20, i: 2 },              expected: 10,       tol: 0.01 },
  'resistance-wire':      { in: { rho: 0.017, l: 100, s: 1 }, expected: 1.7,      tol: 0.01 },
  'series-resistance':    { in: { r1: 3, r2: 5 },             expected: 8,        tol: 0.01 },
  'parallel-resistance':  { in: { r1: 6, r2: 3 },             expected: 2,        tol: 0.01 },
  'coulomb-law':          { in: { q1: 1e-6, q2: 1e-6, r: 0.1 }, expected: 0.9,    tol: 0.01 },
  'field-strength':       { in: { f: 10, q: 2 },              expected: 5,        tol: 0.01 },
  'voltage-field':        { in: { e: 100, d: 0.1 },           expected: 10,       tol: 0.01 },
  'capacitor-charge':     { in: { c: 1e-6, u: 100 },          expected: 0.0001,   tol: 1e-6 },
  'capacitor-energy':     { in: { c: 1e-6, u: 100 },          expected: 0.005,    tol: 1e-6 },
  'emf-ohm-full':         { in: { eps: 12, r: 5, rint: 1 },   expected: 2,        tol: 0.01 },
  'emf-value':            { in: { i: 2, r: 5, rint: 1 },      expected: 12,       tol: 0.01 },
  'current-power-time':   { in: { p: 100, t: 10 },            expected: 1000,     tol: 0.01 },

    // === Оптика ===
  'reflection-angle':        { in: { a: 45 },                    expected: 45,         tol: 0.01 },
  'refraction-snell':        { in: { a: 30, n1: 1, n2: 1.5 },    expected: 19.47,      tol: 0.1  },
  'refractive-index':        { in: { v: 2e8 },                   expected: 1.5,        tol: 0.01 },
  'speed-in-medium':         { in: { n: 1.5 },                   expected: 2e8,        tol: 1e6  },
  'critical-angle':          { in: { n: 1.5 },                   expected: 41.81,      tol: 0.1  },
  'thin-lens':               { in: { d: 0.3, f: 0.15 },          expected: 0.1,        tol: 0.01 },
  'lens-distance':           { in: { f: 0.1, d: 0.3 },           expected: 0.15,       tol: 0.01 },
  'lens-magnification':      { in: { f: 0.15, d: 0.3 },          expected: 0.5,        tol: 0.01 },
  'optical-power':           { in: { f: 0.5 },                   expected: 2,          tol: 0.01 },
  'focal-length':            { in: { d: 2 },                     expected: 0.5,        tol: 0.01 },
  'photon-energy':           { in: { nu: 5e14 },                 expected: 3.315e-19,  tol: 1e-20 },
  'photon-energy-wavelength':{ in: { lambda: 5e-7 },             expected: 3.978e-19,  tol: 1e-20 },
  'photon-momentum':         { in: { lambda: 5e-7 },             expected: 1.326e-27,  tol: 1e-29 },
  'photon-frequency':        { in: { e: 3.315e-19 },             expected: 5e14,       tol: 1e12 },
  'wavelength-frequency':    { in: { nu: 5e14 },                 expected: 6e-7,       tol: 1e-8 },
  'einstein-photoeffect':    { in: { nu: 1e15, a: 3e-19 },       expected: 3.63e-19,   tol: 1e-20 },
  'red-border':              { in: { a: 3e-19 },                 expected: 4.52e14,    tol: 1e12 },
  'diffraction-grating':     { in: { d: 1e-5, k: 1, lambda: 5e-7 }, expected: 2.87,    tol: 0.1  },
  'grating-period':          { in: { n: 1e5 },                   expected: 1e-5,       tol: 1e-9 },
  'interference-max':        { in: { k: 2, lambda: 5e-7 },       expected: 1e-6,       tol: 1e-8 },
  'interference-min':        { in: { k: 1, lambda: 5e-7 },       expected: 7.5e-7,     tol: 1e-8 },
  'light-pressure':          { in: { i: 1000 },                  expected: 3.33e-6,    tol: 1e-7 },
  'magnifier-magnification': { in: { f: 0.05 },                  expected: 5,          tol: 0.01 },

    // === Атомная физика ===
  'mass-defect':              { in: { z: 1, n: 1, m: 2.014 },   expected: 0.00194,  tol: 0.001 },
  'binding-energy':           { in: { dm: 0.00194 },            expected: 1.81,     tol: 0.1   },
  'binding-energy-joule':     { in: { dm: 1e-30 },              expected: 9e-14,    tol: 1e-15 },
  'nuclear-reaction-energy':  { in: { m1: 2.014, m2: 2.013 },   expected: 0.93,     tol: 0.1   },
  'radioactive-decay-law':    { in: { n0: 1000, t: 10, T: 5 },  expected: 250,      tol: 1     },
  'half-life':                { in: { lambda: 0.1 },            expected: 6.93,     tol: 0.1   },
  'decay-constant':           { in: { t: 10 },                  expected: 0.0693,   tol: 0.001 },
  'activity':                 { in: { lambda: 0.1, n: 1000 },   expected: 100,      tol: 0.01  },
  'activity-decay':           { in: { a0: 1000, t: 10, T: 5 },  expected: 250,      tol: 1     },
  'bohr-frequency':           { in: { e2: 1e-18, e1: 5e-19 },   expected: 7.54e14,  tol: 1e12  },
  'bohr-wavelength':          { in: { e2: 1e-18, e1: 5e-19 },   expected: 3.98e-7,  tol: 1e-8  },
  'hydrogen-energy':          { in: { n: 2 },                   expected: -3.4,     tol: 0.01  },
  'ionization-energy':        { in: { n1: 1, n2: 2 },           expected: 10.2,     tol: 0.1   },
  'rydberg':                  { in: { n1: 2, n2: 3 },           expected: 6.56e-7,  tol: 1e-8  },
  'de-broglie-wavelength':    { in: { m: 9.1e-31, v: 1e6 },     expected: 7.28e-10, tol: 1e-11 },
  'de-broglie-momentum':      { in: { p: 1e-24 },               expected: 6.63e-10, tol: 1e-11 },
  'photon-mass':              { in: { nu: 5e14 },               expected: 3.68e-36, tol: 1e-37 },
  'nuclear-radius':           { in: { a: 27 },                  expected: 3.6e-15,  tol: 1e-16 },
  'gamma-energy':             { in: { lambda: 1e-12 },          expected: 1.989e-13, tol: 1e-14 },
  'nuclear-binding-per-nucleon': { in: { esv: 28, a: 4 },       expected: 7,        tol: 0.01  },

    // === Магнетизм ===
  'ampere-force':             { in: { b: 1, i: 2, l: 0.5, a: 90 }, expected: 1,        tol: 0.01 },
  'lorentz-force':            { in: { q: 1e-6, v: 1000, b: 0.5, a: 90 }, expected: 5e-4, tol: 1e-5 },
  'lorentz-radius':           { in: { m: 1e-27, v: 1e6, q: 1e-19, b: 1 }, expected: 1e-2, tol: 1e-4 },
  'magnetic-flux':            { in: { b: 1, s: 0.5, a: 0 },      expected: 0.5,       tol: 0.01 },
  'flux-from-induction':      { in: { f: 0.5, s: 0.5, a: 0 },    expected: 1,         tol: 0.01 },
  'faraday-law':              { in: { df: 0.5, dt: 0.1 },        expected: -5,        tol: 0.01 },
  'emf-induction':            { in: { b: 1, l: 0.5, v: 10, a: 90 }, expected: 5,      tol: 0.01 },
  'self-induction-emf':       { in: { l: 1, di: 2, dt: 0.1 },    expected: -20,       tol: 0.01 },
  'inductance':               { in: { f: 2, i: 4 },              expected: 0.5,       tol: 0.01 },
  'inductor-energy':          { in: { l: 1, i: 2 },              expected: 2,         tol: 0.01 },
  'magnetic-permeability':    { in: { mu: 1, h: 1000 },          expected: 0.00126,   tol: 0.0001 },
  'magnetic-field-wire':      { in: { i: 10, r: 0.1 },           expected: 2e-5,      tol: 1e-6 },
  'magnetic-field-solenoid':  { in: { mu: 1, n: 1000, i: 2 },    expected: 0.00251,   tol: 0.0001 },
  'charge-in-magnetic-field': { in: { m: 1e-30, q: 1e-19, b: 1 }, expected: 6.28e-11, tol: 1e-12 },
  'transformer-ratio':        { in: { u1: 220, u2: 22 },         expected: 10,        tol: 0.01 },
  'transformer-voltage':      { in: { u1: 220, n1: 1000, n2: 100 }, expected: 22,     tol: 0.01 },
  'transformer-power':        { in: { u: 220, i: 2 },            expected: 440,       tol: 0.01 },
  'induction-current':        { in: { eps: 10, r: 5 },           expected: 2,         tol: 0.01 },
  'magnetic-energy-density':  { in: { b: 1 },                    expected: 397887,    tol: 1000 },
  'lenz-rule-direction':      { in: { df: 0.5, dt: 0.1 },        expected: -5,        tol: 0.01 }, 

    // === Расширение Механики ===
  'momentum-conservation':    { in: { m1: 2, v1: 5, m2: 3, v2: 0, u1: 2 }, expected: 2,      tol: 0.01 },
  'elastic-collision':        { in: { m1: 2, m2: 3, v1: 5 },   expected: -1,        tol: 0.01 },
  'elastic-collision-second': { in: { m1: 2, m2: 3, v1: 5 },   expected: 4,         tol: 0.01 },
  'inelastic-collision':      { in: { m1: 2, v1: 5, m2: 3, v2: 0 }, expected: 2,    tol: 0.01 },
  'work-gravity':             { in: { m: 2, h1: 10, h2: 4 },   expected: 117.6,     tol: 0.1  },
  'work-friction':            { in: { mu: 0.2, m: 5, s: 10 },  expected: -98,       tol: 0.1  },
  'full-mechanical-energy':   { in: { ek: 100, ep: 50 },       expected: 150,       tol: 0.01 },
  'energy-conservation':      { in: { h: 5 },                  expected: 9.9,       tol: 0.1  },
  'potential-spring':         { in: { k: 100, x: 0.2 },        expected: 2,         tol: 0.01 },
  'pascal-law':               { in: { f1: 10, s1: 0.01, s2: 0.1 }, expected: 100,    tol: 0.01 },
  'atmospheric-pressure':     { in: { rho: 1000, h: 10 },      expected: 98000,     tol: 1    },
  'communicating-vessels':    { in: { h1: 0.1, rho1: 1000, rho2: 800 }, expected: 0.125, tol: 0.001 },
  'hydraulic-press-force':    { in: { f1: 100, s1: 0.01, s2: 0.5 }, expected: 5000,   tol: 0.5  },
  'body-in-liquid-weight':    { in: { m: 2, rho: 1000, v: 0.001 }, expected: 9.8,    tol: 0.1  },
  'harmonic-oscillation':     { in: { a: 0.1, w: 2, t: 0 },    expected: 0.1,       tol: 0.001 },
  'harmonic-velocity':        { in: { a: 0.1, w: 2 },          expected: 0.2,       tol: 0.001 },
  'harmonic-acceleration':    { in: { a: 0.1, w: 2 },          expected: 0.4,       tol: 0.001 },
  'angular-frequency':        { in: { nu: 5 },                 expected: 31.42,     tol: 0.01 },
  'wave-number':              { in: { lambda: 2 },             expected: 3.14,      tol: 0.01 },
  'moment-equilibrium':       { in: { f1: 10, l1: 2, l2: 1 },  expected: 20,        tol: 0.01 },
  'center-of-mass':           { in: { m1: 1, x1: 0, m2: 3, x2: 4 }, expected: 3,    tol: 0.01 },
  'block-pulley':             { in: { m1: 3, m2: 1 },          expected: 4.9,       tol: 0.1  },
  'tension-thread':           { in: { m: 2, a: 2 },            expected: 15.6,      tol: 0.1  },
  'angular-acceleration':     { in: { w: 10, w0: 2, t: 4 },    expected: 2,         tol: 0.01 },
  'angular-path':             { in: { w0: 2, eps: 2, t: 4 },   expected: 24,        tol: 0.01 },
  'linear-from-angular':      { in: { w: 5, r: 2 },            expected: 10,        tol: 0.01 },
  'centripetal-from-angular': { in: { w: 5, r: 2 },            expected: 50,        tol: 0.01 },
  'relative-velocity':        { in: { v1: 5, v2: 3 },          expected: 8,         tol: 0.01 },
  'relative-velocity-opposite': { in: { v1: 5, v2: 3 },        expected: 2,         tol: 0.01 },
  'river-crossing':           { in: { v1: 3, v2: 4 },          expected: 5,         tol: 0.01 },

    // === Расширение Термодинамики ===
  'heat-balance-equation':     { in: { c1: 4200, m1: 1, t1: 80, c2: 4200, m2: 1, t2: 20 }, expected: 50, tol: 0.1 },
  'heat-total-melting':        { in: { c: 2100, m: 1, dt: 10, lambda: 330000 }, expected: 351000, tol: 100 },
  'heat-total-vaporization':   { in: { c: 4200, m: 1, dt: 10, l: 2260000 }, expected: 2302000, tol: 100 },
  'efficiency-real-engine':    { in: { ap: 300, qz: 1000 },    expected: 30,        tol: 0.01 },
  'power-engine':              { in: { eta: 30, q: 1000, t: 10 }, expected: 30,      tol: 0.1 },
  'fuel-consumption':          { in: { q: 1000, qspec: 30000000, eta: 30 }, expected: 0.000111, tol: 1e-5 },
  'entropy-change':            { in: { q: 1000, t: 300 },      expected: 3.33,      tol: 0.01 },
  'thermal-conductivity':      { in: { lambda: 0.5, s: 1, dt: 10, t: 10, d: 0.1 }, expected: 500, tol: 0.5 },
  'heat-transfer-coefficient': { in: { alpha: 10, s: 1, dt: 10, t: 10 }, expected: 1000, tol: 0.5 },
  'radiation-energy':          { in: { s: 1, t: 300 },         expected: 459.27,    tol: 0.5 },
  'wien-law':                  { in: { t: 300 },               expected: 9.67e-6,   tol: 1e-7 },
  'relative-humidity-temp':    { in: { rho: 0.01, rho0: 0.02 }, expected: 50,       tol: 0.01 },
  'dew-point':                 { in: { t: 20, phi: 50 },       expected: 10,        tol: 0.01 },
  'saturated-vapor-pressure':  { in: { phi: 50, p0: 2000 },    expected: 1000,      tol: 0.5 },
  'van-der-waals':             { in: { t: 300, v: 0.02, a: 0.1, b: 0.001 }, expected: 130960, tol: 100 },
  'mean-free-path':            { in: { d: 3e-10, n: 1e25 },    expected: 2.5e-7,    tol: 1e-8 },
  'ideal-gas-concentration':   { in: { n: 1e24, v: 0.001 },    expected: 1e27,      tol: 1e25 },
  'average-kinetic-energy':    { in: { t: 300 },               expected: 6.21e-21,  tol: 1e-22 },
  'rms-speed':                 { in: { t: 300, m: 5e-26 },     expected: 500,       tol: 5 },
  'internal-energy-mono':      { in: { nu: 1, t: 300 },        expected: 3739.5,    tol: 1 },
  'internal-energy-di':        { in: { nu: 1, t: 300 },        expected: 6232.5,    tol: 1 },
  'adiabatic-work':            { in: { du: 500 },              expected: -500,      tol: 0.01 },
  'heat-engine-work':          { in: { eta: 30, q: 1000 },     expected: 300,       tol: 0.01 }
};

// Прогон
let passed = 0;
let failed = 0;
const errors = [];
const missing = [];

for (const f of formulas) {

  // Проверка: все ли формулы на месте
  console.log('Всего формул:', formulas.length);

  const ids = formulas.map(f => f.id);
  const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (duplicates.length) console.log('🔁 Дубликаты:', duplicates.join(', '));

  const missingIds = ids.filter(id => !tests[id]);
  if (missingIds.length) console.log('⚠️ Без теста:', missingIds.join(', '));
  const test = tests[f.id];

  if (!test) {
    missing.push(f.id);
    continue;
  }

  let result;
  try {
    result = f.calc(test.in);
  } catch (e) {
    console.log(`❌ ${f.id.padEnd(28)} ошибка: ${e.message}`);
    failed++;
    errors.push(f.id);
    continue;
  }

  const diff = Math.abs(result - test.expected);
  if (diff <= test.tol) {
    console.log(`✅ ${f.id.padEnd(28)} ${result.toFixed(3)}`);
    passed++;
  } else {
    console.log(`❌ ${f.id.padEnd(28)} получили ${result}, ожидали ${test.expected}`);
    failed++;
    errors.push(f.id);
  }
}

console.log('\n─────────────────────');
console.log(`✅ Прошло:     ${passed}`);
console.log(`❌ Провалилось: ${failed}`);
if (missing.length) console.log(`⚠️  Без теста:  ${missing.length} — ${missing.join(', ')}`);
if (errors.length)  console.log(`Проблемные:   ${errors.join(', ')}`);