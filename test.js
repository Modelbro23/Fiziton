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
  'current-power-time':   { in: { p: 100, t: 10 },            expected: 1000,     tol: 0.01 }
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