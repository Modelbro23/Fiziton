const formulas = [
  // =======>Кинематика
  {
    id: 'speed',
    section: 'mehanika',
    class: 7,
    title: 'Скорость',
    formula: 'v = S / t',
    inputs: [
      { key: 's', label: 'Путь S', unit: 'м'},
      { key: 't', label: 'Время t', unit: 'с'},
    ],
    calc: (x) => x.s / x.t,
    resultLabel: 'v',
    resultUnit: 'м/с'
  },

  {
    id: 'path',
    section: 'mehanika',
    class: 7,
    title: 'Путь',
    formula: 'S = v ⋅ t',
    inputs: [
      { key: 'v', label: 'Скорость v', unit: 'м/с'},
      { key: 't', label: 'Время t', unit: 'с'},
    ],
    calc: (x) => x.v * x.t,
    resultLabel: 'S',
    resultUnit: 'м'
  },

  {
    id: 'time',
    section: 'mehanika',
    class: 7,
    title: 'Время',
    formula: 't = S / v',
    inputs: [
      { key: 's', label: 'Путь S', unit: 'м'},
      { key: 'v', label: 'Скорость v', unit: 'м/с'},
    ],
    calc: (x) => x.s / x.v,
    resultLabel: 't',
    resultUnit: 'с'
  },

  // =========>ДИНАМИКА

  // 2 Закон ньютона
  {
    id: 'force-newton',
    section: 'mehanika',
    class: 7,
    title: 'Сила (2-ой Закон Ньютона',
    formula: 'F = m ⋅ a',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'a', label: 'Ускорение a', unit: 'м/c²' },
    ],
    calc: (x) => x.m * x.a,
    resultLabel: 'F',
    resuqltUnit: 'H'
  },

  {
    id: 'mass-from-force',
    section: 'mehanika',
    class: 7,
    title: 'Масса через силу',
    formula: 'm = F / a',
    inputs: [
      { key: 'f', label: 'Сила F', unit: 'Н' },
      { key: 'a', label: 'Ускорение a', unit: 'м/с²' }
    ],
    calc: (x) => x.f / x.a,
    resultLabel: 'm',
    resultUnit: 'кг'
  },

  {
    id: 'acceleration-from-force',
    section: 'mehanika',
    class: 7,
    title: 'Ускорение через силу',
    formula: 'a = F / m',
    inputs: [
      { key: 'f', label: 'Сила F', unit: 'Н' },
      { key: 'm', label: 'Масса m', unit: 'кг' }
    ],
    calc: (x) => x.f / x.m,
    resultLabel: 'a',
    resultUnit: 'м/с²'
  },

  {
    id: 'gravity-force',
    section: 'mehanika',
    class: 7,
    title: 'Сила тяжести',
    formula: 'F = m · g',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' }
    ],
    calc: (x) => x.m * 9.8,
    resultLabel: 'F',
    resultUnit: 'Н'
  },

  {
    id: 'mass-from-gravity',
    section: 'mehanika',
    class: 7,
    title: 'Масса через силу тяжести',
    formula: 'm = F / g',
    inputs: [
      { key: 'f', label: 'Сила тяжести F', unit: 'Н' }
    ],
    calc: (x) => x.f / 9.8,
    resultLabel: 'm',
    resultUnit: 'кг'
  },

  // =====================> РАБОТА И МОЩНОСТЬ
  {
    id: 'work-force-path',
    section: 'mehanika',
    class: 7,
    title: 'Работа через силу и путь',
    formula: 'A = F · S',
    inputs: [
      { key: 'f', label: 'Сила F', unit: 'Н' },
      { key: 's', label: 'Путь S', unit: 'м' }
    ],
    calc: (x) => x.f * x.s,
    resultLabel: 'A',
    resultUnit: 'Дж'
  },

  {
    id: 'force-from-work',
    section: 'mehanika',
    class: 7,
    title: 'Сила через работу',
    formula: 'F = A / S',
    inputs: [
      { key: 'a', label: 'Работа A', unit: 'Дж' },
      { key: 's', label: 'Путь S', unit: 'м' }
    ],
    calc: (x) => x.a / x.s,
    resultLabel: 'F',
    resultUnit: 'Н'
  },

  {
    id: 'path-from-work',
    section: 'mehanika',
    class: 7,
    title: 'Путь через работу',
    formula: 'S = A / F',
    inputs: [
      { key: 'a', label: 'Работа A', unit: 'Дж' },
      { key: 'f', label: 'Сила F', unit: 'Н' }
    ],
    calc: (x) => x.a / x.f,
    resultLabel: 'S',
    resultUnit: 'м'
  },

  {
    id: 'power-work-time',
    section: 'mehanika',
    class: 7,
    title: 'Мощность через работу',
    formula: 'N = A / t',
    inputs: [
      { key: 'a', label: 'Работа A', unit: 'Дж' },
      { key: 't', label: 'Время t', unit: 'с' }
    ],
    calc: (x) => x.a / x.t,
    resultLabel: 'N',
    resultUnit: 'Вт'
  },

  {
    id: 'work-from-power',
    section: 'mehanika',
    class: 7,
    title: 'Работа через мощность',
    formula: 'A = N · t',
    inputs: [
      { key: 'n', label: 'Мощность N', unit: 'Вт' },
      { key: 't', label: 'Время t', unit: 'с' }
    ],
    calc: (x) => x.n * x.t,
    resultLabel: 'A',
    resultUnit: 'Дж'
  },

  {
    id: 'time-from-power',
    section: 'mehanika',
    class: 7,
    title: 'Время через мощность',
    formula: 't = A / N',
    inputs: [
      { key: 'a', label: 'Работа A', unit: 'Дж' },
      { key: 'n', label: 'Мощность N', unit: 'Вт' }
    ],
    calc: (x) => x.a / x.n,
    resultLabel: 't',
    resultUnit: 'с'
  },

  // =====================> ЭНЕРГИЯ
  {
    id: 'kinetic-energy',
    section: 'mehanika',
    class: 9,
    title: 'Кинетическая энергия',
    formula: 'Ek = m·v² / 2',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'v', label: 'Скорость v', unit: 'м/с' }
    ],
    calc: (x) => x.m * x.v * x.v / 2,
    resultLabel: 'Ek',
    resultUnit: 'Дж'
  },

  {
    id: 'mass-from-kinetic',
    section: 'mehanika',
    class: 9,
    title: 'Масса через кинетическую энергию',
    formula: 'm = 2·Ek / v²',
    inputs: [
      { key: 'ek', label: 'Энергия Ek', unit: 'Дж' },
      { key: 'v', label: 'Скорость v', unit: 'м/с' }
    ],
    calc: (x) => 2 * x.ek / (x.v * x.v),
    resultLabel: 'm',
    resultUnit: 'кг'
  },

  {
    id: 'speed-from-kinetic',
    section: 'mehanika',
    class: 9,
    title: 'Скорость через кинетическую энергию',
    formula: 'v = √(2·Ek / m)',
    inputs: [
      { key: 'ek', label: 'Энергия Ek', unit: 'Дж' },
      { key: 'm', label: 'Масса m', unit: 'кг' }
    ],
    calc: (x) => Math.sqrt(2 * x.ek / x.m),
    resultLabel: 'v',
    resultUnit: 'м/с'
  },

  {
    id: 'potential-energy',
    section: 'mehanika',
    class: 9,
    title: 'Потенциальная энергия',
    formula: 'Ep = m·g·h',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'h', label: 'Высота h', unit: 'м' }
    ],
    calc: (x) => x.m * 9.8 * x.h,
    resultLabel: 'Ep',
    resultUnit: 'Дж'
  },

  {
    id: 'height-from-potential',
    section: 'mehanika',
    class: 9,
    title: 'Высота через потенциальную энергию',
    formula: 'h = Ep / (m·g)',
    inputs: [
      { key: 'ep', label: 'Энергия Ep', unit: 'Дж' },
      { key: 'm', label: 'Масса m', unit: 'кг' }
    ],
    calc: (x) => x.ep / (x.m * 9.8),
    resultLabel: 'h',
    resultUnit: 'м'
  },

  // =====================> ПЛОТНОСТЬ
  {
    id: 'density',
    section: 'mehanika',
    class: 7,
    title: 'Плотность',
    formula: 'ρ = m / V',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'v', label: 'Объём V', unit: 'м³' }
    ],
    calc: (x) => x.m / x.v,
    resultLabel: 'ρ',
    resultUnit: 'кг/м³'
  },

  {
    id: 'mass-from-density',
    section: 'mehanika',
    class: 7,
    title: 'Масса через плотность',
    formula: 'm = ρ · V',
    inputs: [
      { key: 'p', label: 'Плотность ρ', unit: 'кг/м³' },
      { key: 'v', label: 'Объём V', unit: 'м³' }
    ],
    calc: (x) => x.p * x.v,
    resultLabel: 'm',
    resultUnit: 'кг'
  },

  {
    id: 'volume-from-density',
    section: 'mehanika',
    class: 7,
    title: 'Объём через плотность',
    formula: 'V = m / ρ',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'p', label: 'Плотность ρ', unit: 'кг/м³' }
    ],
    calc: (x) => x.m / x.p,
    resultLabel: 'V',
    resultUnit: 'м³'
  },

    // =====================> РАВНОУСКОРЕННОЕ ДВИЖЕНИЕ
  {
    id: 'acceleration',
    section: 'mehanika',
    class: 9,
    title: 'Ускорение',
    formula: 'a = (v − v₀) / t',
    inputs: [
      { key: 'v', label: 'Конечная скорость v', unit: 'м/с' },
      { key: 'v0', label: 'Начальная скорость v₀', unit: 'м/с' },
      { key: 't', label: 'Время t', unit: 'с' }
    ],
    calc: (x) => (x.v - x.v0) / x.t,
    resultLabel: 'a',
    resultUnit: 'м/с²'
  },

  {
    id: 'final-speed',
    section: 'mehanika',
    class: 9,
    title: 'Конечная скорость',
    formula: 'v = v₀ + a·t',
    inputs: [
      { key: 'v0', label: 'Начальная скорость v₀', unit: 'м/с' },
      { key: 'a', label: 'Ускорение a', unit: 'м/с²' },
      { key: 't', label: 'Время t', unit: 'с' }
    ],
    calc: (x) => x.v0 + x.a * x.t,
    resultLabel: 'v',
    resultUnit: 'м/с'
  },

  {
    id: 'path-accelerated',
    section: 'mehanika',
    class: 9,
    title: 'Путь при равноускоренном движении',
    formula: 'S = v₀·t + a·t² / 2',
    inputs: [
      { key: 'v0', label: 'Начальная скорость v₀', unit: 'м/с' },
      { key: 'a', label: 'Ускорение a', unit: 'м/с²' },
      { key: 't', label: 'Время t', unit: 'с' }
    ],
    calc: (x) => x.v0 * x.t + x.a * x.t * x.t / 2,
    resultLabel: 'S',
    resultUnit: 'м'
  },

  {
    id: 'path-no-time',
    section: 'mehanika',
    class: 9,
    title: 'Путь без времени',
    formula: 'S = (v² − v₀²) / (2a)',
    inputs: [
      { key: 'v', label: 'Конечная скорость v', unit: 'м/с' },
      { key: 'v0', label: 'Начальная скорость v₀', unit: 'м/с' },
      { key: 'a', label: 'Ускорение a', unit: 'м/с²' }
    ],
    calc: (x) => (x.v * x.v - x.v0 * x.v0) / (2 * x.a),
    resultLabel: 'S',
    resultUnit: 'м'
  },

  // =====================> СВОБОДНОЕ ПАДЕНИЕ
  {
    id: 'fall-time',
    section: 'mehanika',
    class: 9,
    title: 'Время свободного падения',
    formula: 't = √(2h / g)',
    inputs: [
      { key: 'h', label: 'Высота h', unit: 'м' }
    ],
    calc: (x) => Math.sqrt(2 * x.h / 9.8),
    resultLabel: 't',
    resultUnit: 'с'
  },

  {
    id: 'fall-speed',
    section: 'mehanika',
    class: 9,
    title: 'Скорость при падении',
    formula: 'v = √(2gh)',
    inputs: [
      { key: 'h', label: 'Высота h', unit: 'м' }
    ],
    calc: (x) => Math.sqrt(2 * 9.8 * x.h),
    resultLabel: 'v',
    resultUnit: 'м/с'
  },

  {
    id: 'fall-height',
    section: 'mehanika',
    class: 9,
    title: 'Высота по времени падения',
    formula: 'h = g·t² / 2',
    inputs: [
      { key: 't', label: 'Время t', unit: 'с' }
    ],
    calc: (x) => 9.8 * x.t * x.t / 2,
    resultLabel: 'h',
    resultUnit: 'м'
  },

  // =====================> ДВИЖЕНИЕ ПО ОКРУЖНОСТИ
  {
    id: 'centripetal-accel',
    section: 'mehanika',
    class: 9,
    title: 'Центростремительное ускорение',
    formula: 'a = v² / R',
    inputs: [
      { key: 'v', label: 'Скорость v', unit: 'м/с' },
      { key: 'r', label: 'Радиус R', unit: 'м' }
    ],
    calc: (x) => x.v * x.v / x.r,
    resultLabel: 'a',
    resultUnit: 'м/с²'
  },

  {
    id: 'linear-speed-circle',
    section: 'mehanika',
    class: 9,
    title: 'Линейная скорость',
    formula: 'v = 2πR / T',
    inputs: [
      { key: 'r', label: 'Радиус R', unit: 'м' },
      { key: 't', label: 'Период T', unit: 'с' }
    ],
    calc: (x) => 2 * Math.PI * x.r / x.t,
    resultLabel: 'v',
    resultUnit: 'м/с'
  },

  {
    id: 'centripetal-force',
    section: 'mehanika',
    class: 9,
    title: 'Центростремительная сила',
    formula: 'F = m·v² / R',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'v', label: 'Скорость v', unit: 'м/с' },
      { key: 'r', label: 'Радиус R', unit: 'м' }
    ],
    calc: (x) => x.m * x.v * x.v / x.r,
    resultLabel: 'F',
    resultUnit: 'Н'
  },

  // =====================> ИМПУЛЬС И УДАР
  {
    id: 'impulse',
    section: 'mehanika',
    class: 9,
    title: 'Импульс тела',
    formula: 'p = m·v',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'v', label: 'Скорость v', unit: 'м/с' }
    ],
    calc: (x) => x.m * x.v,
    resultLabel: 'p',
    resultUnit: 'кг·м/с'
  },

  {
    id: 'impulse-of-force',
    section: 'mehanika',
    class: 9,
    title: 'Импульс силы',
    formula: 'p = F·t',
    inputs: [
      { key: 'f', label: 'Сила F', unit: 'Н' },
      { key: 't', label: 'Время t', unit: 'с' }
    ],
    calc: (x) => x.f * x.t,
    resultLabel: 'p',
    resultUnit: 'кг·м/с'
  },

  {
    id: 'mass-from-impulse',
    section: 'mehanika',
    class: 9,
    title: 'Масса через импульс',
    formula: 'm = p / v',
    inputs: [
      { key: 'p', label: 'Импульс p', unit: 'кг·м/с' },
      { key: 'v', label: 'Скорость v', unit: 'м/с' }
    ],
    calc: (x) => x.p / x.v,
    resultLabel: 'm',
    resultUnit: 'кг'
  },

  {
    id: 'speed-from-impulse',
    section: 'mehanika',
    class: 9,
    title: 'Скорость через импульс',
    formula: 'v = p / m',
    inputs: [
      { key: 'p', label: 'Импульс p', unit: 'кг·м/с' },
      { key: 'm', label: 'Масса m', unit: 'кг' }
    ],
    calc: (x) => x.p / x.m,
    resultLabel: 'v',
    resultUnit: 'м/с'
  },

  // =====================> СИЛЫ
  {
    id: 'friction-force',
    section: 'mehanika',
    class: 9,
    title: 'Сила трения',
    formula: 'Fтр = μ·N',
    inputs: [
      { key: 'mu', label: 'Коэффициент трения μ', unit: '' },
      { key: 'n', label: 'Сила реакции N', unit: 'Н' }
    ],
    calc: (x) => x.mu * x.n,
    resultLabel: 'Fтр',
    resultUnit: 'Н'
  },

  {
    id: 'hooke-law',
    section: 'mehanika',
    class: 9,
    title: 'Сила упругости (закон Гука)',
    formula: 'Fупр = k·Δx',
    inputs: [
      { key: 'k', label: 'Жёсткость k', unit: 'Н/м' },
      { key: 'x', label: 'Растяжение Δx', unit: 'м' }
    ],
    calc: (x) => x.k * x.x,
    resultLabel: 'Fупр',
    resultUnit: 'Н'
  },

  {
    id: 'stiffness',
    section: 'mehanika',
    class: 9,
    title: 'Жёсткость через силу',
    formula: 'k = F / Δx',
    inputs: [
      { key: 'f', label: 'Сила F', unit: 'Н' },
      { key: 'x', label: 'Растяжение Δx', unit: 'м' }
    ],
    calc: (x) => x.f / x.x,
    resultLabel: 'k',
    resultUnit: 'Н/м'
  },

  // =====================> ДАВЛЕНИЕ
  {
    id: 'pressure-force-area',
    section: 'mehanika',
    class: 7,
    title: 'Давление через силу и площадь',
    formula: 'P = F / S',
    inputs: [
      { key: 'f', label: 'Сила F', unit: 'Н' },
      { key: 's', label: 'Площадь S', unit: 'м²' }
    ],
    calc: (x) => x.f / x.s,
    resultLabel: 'P',
    resultUnit: 'Па'
  },

  {
    id: 'force-from-pressure',
    section: 'mehanika',
    class: 7,
    title: 'Сила через давление',
    formula: 'F = P · S',
    inputs: [
      { key: 'p', label: 'Давление P', unit: 'Па' },
      { key: 's', label: 'Площадь S', unit: 'м²' }
    ],
    calc: (x) => x.p * x.s,
    resultLabel: 'F',
    resultUnit: 'Н'
  },

  {
    id: 'area-from-pressure',
    section: 'mehanika',
    class: 7,
    title: 'Площадь через давление',
    formula: 'S = F / P',
    inputs: [
      { key: 'f', label: 'Сила F', unit: 'Н' },
      { key: 'p', label: 'Давление P', unit: 'Па' }
    ],
    calc: (x) => x.f / x.p,
    resultLabel: 'S',
    resultUnit: 'м²'
  },

  {
    id: 'liquid-pressure',
    section: 'mehanika',
    class: 7,
    title: 'Давление жидкости',
    formula: 'P = ρ·g·h',
    inputs: [
      { key: 'rho', label: 'Плотность ρ', unit: 'кг/м³' },
      { key: 'h', label: 'Глубина h', unit: 'м' }
    ],
    calc: (x) => x.rho * 9.8 * x.h,
    resultLabel: 'P',
    resultUnit: 'Па'
  },

  // =====================> СИЛА АРХИМЕДА
    {
    id: 'archimedes',
    section: 'mehanika',
    class: 7,
    title: 'Сила Архимеда',
    formula: 'Fa = ρ·g·V',
    inputs: [
      { key: 'rho', label: 'Плотность жидкости ρ', unit: 'кг/м³' },
      { key: 'v', label: 'Объём V', unit: 'м³' }
    ],
    calc: (x) => x.rho * 9.8 * x.v,
    resultLabel: 'Fa',
    resultUnit: 'Н'
  },

  {
    id: 'volume-from-archimedes',
    section: 'mehanika',
    class: 7,
    title: 'Объём через силу Архимеда',
    formula: 'V = Fa / (ρ·g)',
    inputs: [
      { key: 'fa', label: 'Сила Архимеда Fa', unit: 'Н' },
      { key: 'rho', label: 'Плотность ρ', unit: 'кг/м³' }
    ],
    calc: (x) => x.fa / (x.rho * 9.8),
    resultLabel: 'V',
    resultUnit: 'м³'
  },

  // =====================> ПРОСТЫЕ МЕХАНИЗМЫ
  {
    id: 'lever',
    section: 'mehanika',
    class: 7,
    title: 'Правило рычага',
    formula: 'F₁·l₁ = F₂·l₂',
    inputs: [
      { key: 'f1', label: 'Сила F₁', unit: 'Н' },
      { key: 'l1', label: 'Плечо l₁', unit: 'м' },
      { key: 'l2', label: 'Плечо l₂', unit: 'м' }
    ],
    calc: (x) => x.f1 * x.l1 / x.l2,
    resultLabel: 'F₂',
    resultUnit: 'Н'
  },

  {
    id: 'efficiency',
    section: 'mehanika',
    class: 7,
    title: 'КПД механизма',
    formula: 'η = Aполез / Aзатр · 100%',
    inputs: [
      { key: 'ap', label: 'Полезная работа Aп', unit: 'Дж' },
      { key: 'az', label: 'Затраченная работа Aз', unit: 'Дж' }
    ],
    calc: (x) => x.ap / x.az * 100,
    resultLabel: 'η',
    resultUnit: '%'
  },

  {
    id: 'ke-of-spring',
    section: 'mehanika',
    class: 9,
    title: 'Энергия сжатой пружины',
    formula: 'E = k·Δx² / 2',
    inputs: [
      { key: 'k', label: 'Жёсткость k', unit: 'Н/м' },
      { key: 'x', label: 'Растяжение Δx', unit: 'м' }
    ],
    calc: (x) => x.k * x.x * x.x / 2,
    resultLabel: 'E',
    resultUnit: 'Дж'
  },

  // ====================> КОЛЕБАНИЯ И ВОЛНЫ
  {
    id: 'period-pendulum',
    section: 'mehanika',
    class: 9,
    title: 'Период математического маятника',
    formula: 'T = 2π·√(l / g)',
    inputs: [
      { key: 'l', label: 'Длина l', unit: 'м' }
    ],
    calc: (x) => 2 * Math.PI * Math.sqrt(x.l / 9.8),
    resultLabel: 'T',
    resultUnit: 'с'
  },

  {
    id: 'period-spring',
    section: 'mehanika',
    class: 9,
    title: 'Период пружинного маятника',
    formula: 'T = 2π·√(m / k)',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'k', label: 'Жёсткость k', unit: 'Н/м' }
    ],
    calc: (x) => 2 * Math.PI * Math.sqrt(x.m / x.k),
    resultLabel: 'T',
    resultUnit: 'с'
  },

  {
    id: 'frequency-from-period',
    section: 'mehanika',
    class: 9,
    title: 'Частота через период',
    formula: 'ν = 1 / T',
    inputs: [
      { key: 't', label: 'Период T', unit: 'с' }
    ],
    calc: (x) => 1 / x.t,
    resultLabel: 'ν',
    resultUnit: 'Гц'
  },

  {
    id: 'period-from-frequency',
    section: 'mehanika',
    class: 9,
    title: 'Период через частоту',
    formula: 'T = 1 / ν',
    inputs: [
      { key: 'nu', label: 'Частота ν', unit: 'Гц' }
    ],
    calc: (x) => 1 / x.nu,
    resultLabel: 'T',
    resultUnit: 'с'
  },

  {
    id: 'wave-speed',
    section: 'mehanika',
    class: 9,
    title: 'Скорость волны',
    formula: 'v = λ · ν',
    inputs: [
      { key: 'lambda', label: 'Длина волны λ', unit: 'м' },
      { key: 'nu', label: 'Частота ν', unit: 'Гц' }
    ],
    calc: (x) => x.lambda * x.nu,
    resultLabel: 'v',
    resultUnit: 'м/с'
  },

  {
    id: 'wavelength',
    section: 'mehanika',
    class: 9,
    title: 'Длина волны',
    formula: 'λ = v / ν',
    inputs: [
      { key: 'v', label: 'Скорость v', unit: 'м/с' },
      { key: 'nu', label: 'Частота ν', unit: 'Гц' }
    ],
    calc: (x) => x.v / x.nu,
    resultLabel: 'λ',
    resultUnit: 'м'
  },


  // ===================== МОМЕНТ И БЛОКИ
  {
    id: 'moment-of-force',
    section: 'mehanika',
    class: 7,
    title: 'Момент силы',
    formula: 'M = F · l',
    inputs: [
      { key: 'f', label: 'Сила F', unit: 'Н' },
      { key: 'l', label: 'Плечо l', unit: 'м' }
    ],
    calc: (x) => x.f * x.l,
    resultLabel: 'M',
    resultUnit: 'Н·м'
  },

  {
    id: 'force-from-moment',
    section: 'mehanika',
    class: 7,
    title: 'Сила через момент',
    formula: 'F = M / l',
    inputs: [
      { key: 'm', label: 'Момент M', unit: 'Н·м' },
      { key: 'l', label: 'Плечо l', unit: 'м' }
    ],
    calc: (x) => x.m / x.l,
    resultLabel: 'F',
    resultUnit: 'Н'
  },

  {
    id: 'shoulder-from-moment',
    section: 'mehanika',
    class: 7,
    title: 'Плечо через момент',
    formula: 'l = M / F',
    inputs: [
      { key: 'm', label: 'Момент M', unit: 'Н·м' },
      { key: 'f', label: 'Сила F', unit: 'Н' }
    ],
    calc: (x) => x.m / x.f,
    resultLabel: 'l',
    resultUnit: 'м'
  },

  // =====================> РАБОТА С УГЛОМ
  {
    id: 'work-with-angle',
    section: 'mehanika',
    class: 9,
    title: 'Работа под углом',
    formula: 'A = F · S · cos α',
    inputs: [
      { key: 'f', label: 'Сила F', unit: 'Н' },
      { key: 's', label: 'Путь S', unit: 'м' },
      { key: 'a', label: 'Угол α', unit: '°' }
    ],
    calc: (x) => x.f * x.s * Math.cos(x.a * Math.PI / 180),
    resultLabel: 'A',
    resultUnit: 'Дж'
  },

  // =====================> СИЛА ПРИТЯЖЕНИЯ
  {
    id: 'gravity-universal',
    section: 'mehanika',
    class: 9,
    title: 'Закон всемирного тяготения',
    formula: 'F = G·m₁·m₂ / R²',
    inputs: [
      { key: 'm1', label: 'Масса m₁', unit: 'кг' },
      { key: 'm2', label: 'Масса m₂', unit: 'кг' },
      { key: 'r', label: 'Расстояние R', unit: 'м' }
    ],
    calc: (x) => 6.67e-11 * x.m1 * x.m2 / (x.r * x.r),
    resultLabel: 'F',
    resultUnit: 'Н'
  },

  {
    id: 'free-fall-accel',
    section: 'mehanika',
    class: 9,
    title: 'Ускорение свободного падения',
    formula: 'g = G·M / R²',
    inputs: [
      { key: 'm', label: 'Масса планеты M', unit: 'кг' },
      { key: 'r', label: 'Радиус R', unit: 'м' }
    ],
    calc: (x) => 6.67e-11 * x.m / (x.r * x.r),
    resultLabel: 'g',
    resultUnit: 'м/с²'
  },

  // =====================> СКОРОСТЬ И УСКОРЕНИЕ
  {
    id: 'acceleration-to-speed',
    section: 'mehanika',
    class: 9,
    title: 'Ускорение через скорость и путь',
    formula: 'a = v² / (2·S)',
    inputs: [
      { key: 'v', label: 'Скорость v', unit: 'м/с' },
      { key: 's', label: 'Путь S', unit: 'м' }
    ],
    calc: (x) => x.v * x.v / (2 * x.s),
    resultLabel: 'a',
    resultUnit: 'м/с²'
  },

  {
    id: 'speed-from-acceleration',
    section: 'mehanika',
    class: 9,
    title: 'Скорость через ускорение и путь',
    formula: 'v = √(2·a·S)',
    inputs: [
      { key: 'a', label: 'Ускорение a', unit: 'м/с²' },
      { key: 's', label: 'Путь S', unit: 'м' }
    ],
    calc: (x) => Math.sqrt(2 * x.a * x.s),
    resultLabel: 'v',
    resultUnit: 'м/с'
  },

  // =====================> ДВИЖЕНИЕ ПОД УГЛОМ
  {
    id: 'projectile-range',
    section: 'mehanika',
    class: 10,
    title: 'Дальность полёта под углом',
    formula: 'L = v²·sin(2α) / g',
    inputs: [
      { key: 'v', label: 'Скорость v', unit: 'м/с' },
      { key: 'a', label: 'Угол α', unit: '°' }
    ],
    calc: (x) => x.v * x.v * Math.sin(2 * x.a * Math.PI / 180) / 9.8,
    resultLabel: 'L',
    resultUnit: 'м'
  },

  {
    id: 'projectile-height',
    section: 'mehanika',
    class: 10,
    title: 'Максимальная высота полёта',
    formula: 'h = v²·sin²α / (2g)',
    inputs: [
      { key: 'v', label: 'Скорость v', unit: 'м/с' },
      { key: 'a', label: 'Угол α', unit: '°' }
    ],
    calc: (x) => {
      const sinA = Math.sin(x.a * Math.PI / 180);
      return x.v * x.v * sinA * sinA / (2 * 9.8);
    },
    resultLabel: 'h',
    resultUnit: 'м'
  },

  {
    id: 'projectile-time',
    section: 'mehanika',
    class: 10,
    title: 'Время полёта под углом',
    formula: 't = 2·v·sinα / g',
    inputs: [
      { key: 'v', label: 'Скорость v', unit: 'м/с' },
      { key: 'a', label: 'Угол α', unit: '°' }
    ],
    calc: (x) => 2 * x.v * Math.sin(x.a * Math.PI / 180) / 9.8,
    resultLabel: 't',
    resultUnit: 'с'
  },


  // ====================> РЕАКТИВНОЕ ДВИЖЕНИЕ
  {
    id: 'reactive-speed',
    section: 'mehanika',
    class: 9,
    title: 'Скорость ракеты',
    formula: 'v = v_газ·(m_топ / m)',
    inputs: [
      { key: 'vg', label: 'Скорость газов v_газ', unit: 'м/с' },
      { key: 'mt', label: 'Масса топлива', unit: 'кг' },
      { key: 'm', label: 'Масса ракеты', unit: 'кг' }
    ],
    calc: (x) => x.vg * x.mt / x.m,
    resultLabel: 'v',
    resultUnit: 'м/с'
  },

  {
    id: 'reactive-force',
    section: 'mehanika',
    class: 9,
    title: 'Реактивная сила тяги',
    formula: 'F = m_сек · v_газ',
    inputs: [
      { key: 'ms', label: 'Секундный расход m_сек', unit: 'кг/с' },
      { key: 'vg', label: 'Скорость газов v_газ', unit: 'м/с' }
    ],
    calc: (x) => x.ms * x.vg,
    resultLabel: 'F',
    resultUnit: 'Н'
  },

  // =====================> ВЕС И НАТЯЖЕНИЕ
  {
    id: 'weight-on-support',
    section: 'mehanika',
    class: 7,
    title: 'Вес тела на горизонтальной опоре',
    formula: 'P = m·g',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' }
    ],
    calc: (x) => x.m * 9.8,
    resultLabel: 'P',
    resultUnit: 'Н'
  },

  {
    id: 'weight-in-lift-up',
    section: 'mehanika',
    class: 9,
    title: 'Вес в лифте при разгоне вверх',
    formula: 'P = m·(g + a)',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'a', label: 'Ускорение лифта a', unit: 'м/с²' }
    ],
    calc: (x) => x.m * (9.8 + x.a),
    resultLabel: 'P',
    resultUnit: 'Н'
  },

  {
    id: 'weight-in-lift-down',
    section: 'mehanika',
    class: 9,
    title: 'Вес в лифте при разгоне вниз',
    formula: 'P = m·(g − a)',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'a', label: 'Ускорение лифта a', unit: 'м/с²' }
    ],
    calc: (x) => x.m * (9.8 - x.a),
    resultLabel: 'P',
    resultUnit: 'Н'
  },

  {
    id: 'weightless',
    section: 'mehanika',
    class: 9,
    title: 'Условие невесомости',
    formula: 'P = 0 при a = g',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'g', label: 'Ускорение g', unit: 'м/с²' }
    ],
    calc: (x) => x.m * (x.g - x.g),
    resultLabel: 'P',
    resultUnit: 'Н'
  },

  // =====================> НАКЛОННАЯ ПЛОСКОСТЬ
  {
    id: 'inclined-force',
    section: 'mehanika',
    class: 7,
    title: 'Сила, скатывающая с наклонной плоскости',
    formula: 'F = m·g·sin α',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'a', label: 'Угол α', unit: '°' }
    ],
    calc: (x) => x.m * 9.8 * Math.sin(x.a * Math.PI / 180),
    resultLabel: 'F',
    resultUnit: 'Н'
  },

  {
    id: 'inclined-normal',
    section: 'mehanika',
    class: 7,
    title: 'Сила нормального давления',
    formula: 'N = m·g·cos α',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'a', label: 'Угол α', unit: '°' }
    ],
    calc: (x) => x.m * 9.8 * Math.cos(x.a * Math.PI / 180),
    resultLabel: 'N',
    resultUnit: 'Н'
  },

  {
    id: 'inclined-friction',
    section: 'mehanika',
    class: 7,
    title: 'Сила трения на наклонной',
    formula: 'Fтр = μ·m·g·cos α',
    inputs: [
      { key: 'mu', label: 'Коэффициент μ', unit: '' },
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'a', label: 'Угол α', unit: '°' }
    ],
    calc: (x) => x.mu * x.m * 9.8 * Math.cos(x.a * Math.PI / 180),
    resultLabel: 'Fтр',
    resultUnit: 'Н'
  },

  {
    id: 'inclined-work',
    section: 'mehanika',
    class: 7,
    title: 'Работа при подъёме по наклонной',
    formula: 'A = m·g·h',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'h', label: 'Высота h', unit: 'м' }
    ],
    calc: (x) => x.m * 9.8 * x.h,
    resultLabel: 'A',
    resultUnit: 'Дж'
  },

  {
    id: 'inclined-efficiency',
    section: 'mehanika',
    class: 7,
    title: 'КПД наклонной плоскости',
    formula: 'η = m·g·h / (F·l) · 100%',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'h', label: 'Высота h', unit: 'м' },
      { key: 'f', label: 'Приложенная сила F', unit: 'Н' },
      { key: 'l', label: 'Длина l', unit: 'м' }
    ],
    calc: (x) => x.m * 9.8 * x.h / (x.f * x.l) * 100,
    resultLabel: 'η',
    resultUnit: '%'
  },


  // =====================> МОЩНОСТЬ ЧЕРЕЗ СИЛУ И СКОРОСТЬ
  {
    id: 'power-force-speed',
    section: 'mehanika',
    class: 7,
    title: 'Мощность через силу и скорость',
    formula: 'N = F · v',
    inputs: [
      { key: 'f', label: 'Сила F', unit: 'Н' },
      { key: 'v', label: 'Скорость v', unit: 'м/с' }
    ],
    calc: (x) => x.f * x.v,
    resultLabel: 'N',
    resultUnit: 'Вт'
  },

  {
    id: 'force-from-power-speed',
    section: 'mehanika',
    class: 7,
    title: 'Сила через мощность и скорость',
    formula: 'F = N / v',
    inputs: [
      { key: 'n', label: 'Мощность N', unit: 'Вт' },
      { key: 'v', label: 'Скорость v', unit: 'м/с' }
    ],
    calc: (x) => x.n / x.v,
    resultLabel: 'F',
    resultUnit: 'Н'
  },

  {
    id: 'speed-from-power-force',
    section: 'mehanika',
    class: 7,
    title: 'Скорость через мощность и силу',
    formula: 'v = N / F',
    inputs: [
      { key: 'n', label: 'Мощность N', unit: 'Вт' },
      { key: 'f', label: 'Сила F', unit: 'Н' }
    ],
    calc: (x) => x.n / x.f,
    resultLabel: 'v',
    resultUnit: 'м/с'
  },

  // =====================> ВРАЩАТЕЛЬНОЕ ДВИЖЕНИЕ
  {
    id: 'torque',
    section: 'mehanika',
    class: 10,
    title: 'Момент силы (крутящий)',
    formula: 'M = F · r',
    inputs: [
      { key: 'f', label: 'Сила F', unit: 'Н' },
      { key: 'r', label: 'Радиус r', unit: 'м' }
    ],
    calc: (x) => x.f * x.r,
    resultLabel: 'M',
    resultUnit: 'Н·м'
  },

  {
    id: 'moment-of-inertia',
    section: 'mehanika',
    class: 10,
    title: 'Момент инерции материальной точки',
    formula: 'I = m·r²',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'r', label: 'Радиус r', unit: 'м' }
    ],
    calc: (x) => x.m * x.r * x.r,
    resultLabel: 'I',
    resultUnit: 'кг·м²'
  },

  {
    id: 'rotational-kinetic',
    section: 'mehanika',
    class: 10,
    title: 'Кинетическая энергия вращения',
    formula: 'Ek = I·ω² / 2',
    inputs: [
      { key: 'i', label: 'Момент инерции I', unit: 'кг·м²' },
      { key: 'w', label: 'Угловая скорость ω', unit: 'рад/с' }
    ],
    calc: (x) => x.i * x.w * x.w / 2,
    resultLabel: 'Ek',
    resultUnit: 'Дж'
  },

  {
    id: 'angular-momentum',
    section: 'mehanika',
    class: 10,
    title: 'Момент импульса',
    formula: 'L = I·ω',
    inputs: [
      { key: 'i', label: 'Момент инерции I', unit: 'кг·м²' },
      { key: 'w', label: 'Угловая скорость ω', unit: 'рад/с' }
    ],
    calc: (x) => x.i * x.w,
    resultLabel: 'L',
    resultUnit: 'кг·м²/с'
  },

  {
    id: 'angular-speed-period',
    section: 'mehanika',
    class: 9,
    title: 'Угловая скорость через период',
    formula: 'ω = 2π / T',
    inputs: [
      { key: 't', label: 'Период T', unit: 'с' }
    ],
    calc: (x) => 2 * Math.PI / x.t,
    resultLabel: 'ω',
    resultUnit: 'рад/с'
  },

  // =====================> ГИДРОСТАТИКА (доп)
  {
    id: 'hydrostatic-force',
    section: 'mehanika',
    class: 7,
    title: 'Сила давления жидкости на дно',
    formula: 'F = ρ·g·h·S',
    inputs: [
      { key: 'rho', label: 'Плотность ρ', unit: 'кг/м³' },
      { key: 'h', label: 'Глубина h', unit: 'м' },
      { key: 's', label: 'Площадь дна S', unit: 'м²' }
    ],
    calc: (x) => x.rho * 9.8 * x.h * x.s,
    resultLabel: 'F',
    resultUnit: 'Н'
  },

  {
    id: 'mass-of-liquid',
    section: 'mehanika',
    class: 7,
    title: 'Масса жидкости',
    formula: 'm = ρ·V',
    inputs: [
      { key: 'rho', label: 'Плотность ρ', unit: 'кг/м³' },
      { key: 'v', label: 'Объём V', unit: 'м³' }
    ],
    calc: (x) => x.rho * x.v,
    resultLabel: 'm',
    resultUnit: 'кг'
  },

  {
    id: 'volume-flow-rate',
    section: 'mehanika',
    class: 8,
    title: 'Объёмный расход жидкости',
    formula: 'Q = S·v',
    inputs: [
      { key: 's', label: 'Площадь S', unit: 'м²' },
      { key: 'v', label: 'Скорость v', unit: 'м/с' }
    ],
    calc: (x) => x.s * x.v,
    resultLabel: 'Q',
    resultUnit: 'м³/с'
  },

  // =====================> РАВНОВЕСИЕ
  {
    id: 'buoyant-condition',
    section: 'mehanika',
    class: 7,
    title: 'Условие плавания тела',
    formula: 'Fт = Fa при равновесии',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'rho', label: 'Плотность жидкости ρ', unit: 'кг/м³' },
      { key: 'v', label: 'Объём погружённой части V', unit: 'м³' }
    ],
    calc: (x) => x.m * 9.8 - x.rho * 9.8 * x.v,
    resultLabel: 'Разница сил',
    resultUnit: 'Н'
  },

  {
    id: 'body-acceleration',
    section: 'mehanika',
    class: 9,
    title: 'Ускорение тела под действием силы',
    formula: 'a = (F − Fтр) / m',
    inputs: [
      { key: 'f', label: 'Сила F', unit: 'Н' },
      { key: 'ftr', label: 'Сила трения Fтр', unit: 'Н' },
      { key: 'm', label: 'Масса m', unit: 'кг' }
    ],
    calc: (x) => (x.f - x.ftr) / x.m,
    resultLabel: 'a',
    resultUnit: 'м/с²'
  },

    // =====================> ТЕРМОДИНАМИКА
  {
    id: 'heat-heating',
    section: 'termo',
    class: 8,
    title: 'Количество теплоты при нагревании',
    formula: 'Q = c·m·Δt',
    inputs: [
      { key: 'c', label: 'Удельная теплоёмкость c', unit: 'Дж/(кг·°C)' },
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'dt', label: 'Изменение температуры Δt', unit: '°C' }
    ],
    calc: (x) => x.c * x.m * x.dt,
    resultLabel: 'Q',
    resultUnit: 'Дж'
  },

  {
    id: 'heat-mass',
    section: 'termo',
    class: 8,
    title: 'Масса через теплоту',
    formula: 'm = Q / (c·Δt)',
    inputs: [
      { key: 'q', label: 'Теплота Q', unit: 'Дж' },
      { key: 'c', label: 'Теплоёмкость c', unit: 'Дж/(кг·°C)' },
      { key: 'dt', label: 'ΔТемпература Δt', unit: '°C' }
    ],
    calc: (x) => x.q / (x.c * x.dt),
    resultLabel: 'm',
    resultUnit: 'кг'
  },

  {
    id: 'heat-temp-change',
    section: 'termo',
    class: 8,
    title: 'Изменение температуры',
    formula: 'Δt = Q / (c·m)',
    inputs: [
      { key: 'q', label: 'Теплота Q', unit: 'Дж' },
      { key: 'c', label: 'Теплоёмкость c', unit: 'Дж/(кг·°C)' },
      { key: 'm', label: 'Масса m', unit: 'кг' }
    ],
    calc: (x) => x.q / (x.c * x.m),
    resultLabel: 'Δt',
    resultUnit: '°C'
  },

  {
    id: 'heat-specific',
    section: 'termo',
    class: 8,
    title: 'Удельная теплоёмкость',
    formula: 'c = Q / (m·Δt)',
    inputs: [
      { key: 'q', label: 'Теплота Q', unit: 'Дж' },
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'dt', label: 'ΔТемпература Δt', unit: '°C' }
    ],
    calc: (x) => x.q / (x.m * x.dt),
    resultLabel: 'c',
    resultUnit: 'Дж/(кг·°C)'
  },

  {
    id: 'heat-melting',
    section: 'termo',
    class: 8,
    title: 'Теплота плавления',
    formula: 'Q = λ·m',
    inputs: [
      { key: 'lambda', label: 'Удельная теплота λ', unit: 'Дж/кг' },
      { key: 'm', label: 'Масса m', unit: 'кг' }
    ],
    calc: (x) => x.lambda * x.m,
    resultLabel: 'Q',
    resultUnit: 'Дж'
  },

  {
    id: 'mass-from-melting',
    section: 'termo',
    class: 8,
    title: 'Масса через теплоту плавления',
    formula: 'm = Q / λ',
    inputs: [
      { key: 'q', label: 'Теплота Q', unit: 'Дж' },
      { key: 'lambda', label: 'Удельная теплота λ', unit: 'Дж/кг' }
    ],
    calc: (x) => x.q / x.lambda,
    resultLabel: 'm',
    resultUnit: 'кг'
  },

  {
    id: 'heat-vaporization',
    section: 'termo',
    class: 8,
    title: 'Теплота парообразования',
    formula: 'Q = L·m',
    inputs: [
      { key: 'l', label: 'Удельная теплота L', unit: 'Дж/кг' },
      { key: 'm', label: 'Масса m', unit: 'кг' }
    ],
    calc: (x) => x.l * x.m,
    resultLabel: 'Q',
    resultUnit: 'Дж'
  },

  {
    id: 'mass-from-vaporization',
    section: 'termo',
    class: 8,
    title: 'Масса через теплоту парообразования',
    formula: 'm = Q / L',
    inputs: [
      { key: 'q', label: 'Теплота Q', unit: 'Дж' },
      { key: 'l', label: 'Удельная теплота L', unit: 'Дж/кг' }
    ],
    calc: (x) => x.q / x.l,
    resultLabel: 'm',
    resultUnit: 'кг'
  },

  {
    id: 'heat-combustion',
    section: 'termo',
    class: 8,
    title: 'Теплота сгорания топлива',
    formula: 'Q = q·m',
    inputs: [
      { key: 'q', label: 'Удельная теплота q', unit: 'Дж/кг' },
      { key: 'm', label: 'Масса m', unit: 'кг' }
    ],
    calc: (x) => x.q * x.m,
    resultLabel: 'Q',
    resultUnit: 'Дж'
  },

  {
    id: 'fuel-mass',
    section: 'termo',
    class: 8,
    title: 'Масса топлива',
    formula: 'm = Q / q',
    inputs: [
      { key: 'q', label: 'Теплота Q', unit: 'Дж' },
      { key: 'qspec', label: 'Удельная q', unit: 'Дж/кг' }
    ],
    calc: (x) => x.q / x.qspec,
    resultLabel: 'm',
    resultUnit: 'кг'
  },

  {
    id: 'efficiency-heat-engine',
    section: 'termo',
    class: 10,
    title: 'КПД теплового двигателя',
    formula: 'η = (Q₁ − Q₂) / Q₁ · 100%',
    inputs: [
      { key: 'q1', label: 'Теплота нагревателя Q₁', unit: 'Дж' },
      { key: 'q2', label: 'Теплота холодильника Q₂', unit: 'Дж' }
    ],
    calc: (x) => (x.q1 - x.q2) / x.q1 * 100,
    resultLabel: 'η',
    resultUnit: '%'
  },

  {
    id: 'useful-work-heat',
    section: 'termo',
    class: 10,
    title: 'Полезная работа двигателя',
    formula: 'A = Q₁ − Q₂',
    inputs: [
      { key: 'q1', label: 'Теплота Q₁', unit: 'Дж' },
      { key: 'q2', label: 'Теплота Q₂', unit: 'Дж' }
    ],
    calc: (x) => x.q1 - x.q2,
    resultLabel: 'A',
    resultUnit: 'Дж'
  },

  {
    id: 'efficiency-carnot',
    section: 'termo',
    class: 10,
    title: 'КПД цикла Карно',
    formula: 'η = (T₁ − T₂) / T₁ · 100%',
    inputs: [
      { key: 't1', label: 'Температура нагревателя T₁', unit: 'К' },
      { key: 't2', label: 'Температура холодильника T₂', unit: 'К' }
    ],
    calc: (x) => (x.t1 - x.t2) / x.t1 * 100,
    resultLabel: 'η',
    resultUnit: '%'
  },

  {
    id: 'internal-energy-ideal',
    section: 'termo',
    class: 10,
    title: 'Внутренняя энергия идеального газа',
    formula: 'U = (3/2)·ν·R·T',
    inputs: [
      { key: 'nu', label: 'Количество вещества ν', unit: 'моль' },
      { key: 't', label: 'Температура T', unit: 'К' }
    ],
    calc: (x) => 1.5 * x.nu * 8.31 * x.t,
    resultLabel: 'U',
    resultUnit: 'Дж'
  },

  {
    id: 'first-law-thermo',
    section: 'termo',
    class: 10,
    title: 'Первый закон термодинамики',
    formula: 'ΔU = Q − A',
    inputs: [
      { key: 'q', label: 'Теплота Q', unit: 'Дж' },
      { key: 'a', label: 'Работа A', unit: 'Дж' }
    ],
    calc: (x) => x.q - x.a,
    resultLabel: 'ΔU',
    resultUnit: 'Дж'
  },

  {
    id: 'gas-work',
    section: 'termo',
    class: 10,
    title: 'Работа газа при расширении',
    formula: 'A = p·ΔV',
    inputs: [
      { key: 'p', label: 'Давление p', unit: 'Па' },
      { key: 'dv', label: 'Изменение объёма ΔV', unit: 'м³' }
    ],
    calc: (x) => x.p * x.dv,
    resultLabel: 'A',
    resultUnit: 'Дж'
  },

  {
    id: 'heat-gas-work',
    section: 'termo',
    class: 10,
    title: 'Теплота через работу газа',
    formula: 'Q = ΔU + A',
    inputs: [
      { key: 'du', label: 'Изменение ΔU', unit: 'Дж' },
      { key: 'a', label: 'Работа A', unit: 'Дж' }
    ],
    calc: (x) => x.du + x.a,
    resultLabel: 'Q',
    resultUnit: 'Дж'
  },

  {
    id: 'gas-pressure-main',
    section: 'termo',
    class: 10,
    title: 'Давление газа (Менделеев-Клапейрон)',
    formula: 'p = ν·R·T / V',
    inputs: [
      { key: 'nu', label: 'Количество вещества ν', unit: 'моль' },
      { key: 't', label: 'Температура T', unit: 'К' },
      { key: 'v', label: 'Объём V', unit: 'м³' }
    ],
    calc: (x) => x.nu * 8.31 * x.t / x.v,
    resultLabel: 'p',
    resultUnit: 'Па'
  },

  {
    id: 'gas-temperature',
    section: 'termo',
    class: 10,
    title: 'Температура газа',
    formula: 'T = p·V / (ν·R)',
    inputs: [
      { key: 'p', label: 'Давление p', unit: 'Па' },
      { key: 'v', label: 'Объём V', unit: 'м³' },
      { key: 'nu', label: 'ν', unit: 'моль' }
    ],
    calc: (x) => x.p * x.v / (x.nu * 8.31),
    resultLabel: 'T',
    resultUnit: 'К'
  },

  {
    id: 'gas-volume',
    section: 'termo',
    class: 10,
    title: 'Объём газа',
    formula: 'V = ν·R·T / p',
    inputs: [
      { key: 'nu', label: 'ν', unit: 'моль' },
      { key: 't', label: 'T', unit: 'К' },
      { key: 'p', label: 'p', unit: 'Па' }
    ],
    calc: (x) => x.nu * 8.31 * x.t / x.p,
    resultLabel: 'V',
    resultUnit: 'м³'
  },

  {
    id: 'boyle-mariotte',
    section: 'termo',
    class: 10,
    title: 'Закон Бойля-Мариотта',
    formula: 'p₁·V₁ = p₂·V₂',
    inputs: [
      { key: 'p1', label: 'Давление p₁', unit: 'Па' },
      { key: 'v1', label: 'Объём V₁', unit: 'м³' },
      { key: 'v2', label: 'Объём V₂', unit: 'м³' }
    ],
    calc: (x) => x.p1 * x.v1 / x.v2,
    resultLabel: 'p₂',
    resultUnit: 'Па'
  },

  {
    id: 'gay-lussac',
    section: 'termo',
    class: 10,
    title: 'Закон Гей-Люссака',
    formula: 'V₁ / T₁ = V₂ / T₂',
    inputs: [
      { key: 'v1', label: 'Объём V₁', unit: 'м³' },
      { key: 't1', label: 'Температура T₁', unit: 'К' },
      { key: 't2', label: 'Температура T₂', unit: 'К' }
    ],
    calc: (x) => x.v1 * x.t2 / x.t1,
    resultLabel: 'V₂',
    resultUnit: 'м³'
  },

  {
    id: 'charles',
    section: 'termo',
    class: 10,
    title: 'Закон Шарля',
    formula: 'p₁ / T₁ = p₂ / T₂',
    inputs: [
      { key: 'p1', label: 'Давление p₁', unit: 'Па' },
      { key: 't1', label: 'Температура T₁', unit: 'К' },
      { key: 't2', label: 'Температура T₂', unit: 'К' }
    ],
    calc: (x) => x.p1 * x.t2 / x.t1,
    resultLabel: 'p₂',
    resultUnit: 'Па'
  },

  {
    id: 'combined-gas-law',
    section: 'termo',
    class: 10,
    title: 'Объединённый газовый закон',
    formula: 'p₁·V₁ / T₁ = p₂·V₂ / T₂',
    inputs: [
      { key: 'p1', label: 'p₁', unit: 'Па' },
      { key: 'v1', label: 'V₁', unit: 'м³' },
      { key: 't1', label: 'T₁', unit: 'К' },
      { key: 't2', label: 'T₂', unit: 'К' },
      { key: 'v2', label: 'V₂', unit: 'м³' }
    ],
    calc: (x) => x.p1 * x.v1 * x.t2 / (x.t1 * x.v2),
    resultLabel: 'p₂',
    resultUnit: 'Па'
  },

  {
    id: 'humidity',
    section: 'termo',
    class: 10,
    title: 'Относительная влажность',
    formula: 'φ = ρ / ρ₀ · 100%',
    inputs: [
      { key: 'rho', label: 'Плотность пара ρ', unit: 'кг/м³' },
      { key: 'rho0', label: 'Плотность насыщ. ρ₀', unit: 'кг/м³' }
    ],
    calc: (x) => x.rho / x.rho0 * 100,
    resultLabel: 'φ',
    resultUnit: '%'
  },

  {
    id: 'absolute-humidity',
    section: 'termo',
    class: 10,
    title: 'Абсолютная влажность',
    formula: 'ρ = m / V',
    inputs: [
      { key: 'm', label: 'Масса пара m', unit: 'кг' },
      { key: 'v', label: 'Объём V', unit: 'м³' }
    ],
    calc: (x) => x.m / x.v,
    resultLabel: 'ρ',
    resultUnit: 'кг/м³'
  },

  {
    id: 'kelvin-from-celsius',
    section: 'termo',
    class: 8,
    title: 'Температура в Кельвинах',
    formula: 'T = t + 273',
    inputs: [
      { key: 't', label: 'Температура t', unit: '°C' }
    ],
    calc: (x) => x.t + 273,
    resultLabel: 'T',
    resultUnit: 'К'
  },

  {
    id: 'celsius-from-kelvin',
    section: 'termo',
    class: 8,
    title: 'Температура в Цельсиях',
    formula: 't = T − 273',
    inputs: [
      { key: 't', label: 'Температура T', unit: 'К' }
    ],
    calc: (x) => x.t - 273,
    resultLabel: 't',
    resultUnit: '°C'
  },

    // =====================> ЭЛЕКТРИЧЕСТВО
  {
    id: 'ohm-law',
    section: 'electro',
    class: 8,
    title: 'Закон Ома',
    formula: 'I = U / R',
    inputs: [
      { key: 'u', label: 'Напряжение U', unit: 'В' },
      { key: 'r', label: 'Сопротивление R', unit: 'Ом' }
    ],
    calc: (x) => x.u / x.r,
    resultLabel: 'I',
    resultUnit: 'А'
  },

  {
    id: 'voltage-ohm',
    section: 'electro',
    class: 8,
    title: 'Напряжение через закон Ома',
    formula: 'U = I · R',
    inputs: [
      { key: 'i', label: 'Сила тока I', unit: 'А' },
      { key: 'r', label: 'Сопротивление R', unit: 'Ом' }
    ],
    calc: (x) => x.i * x.r,
    resultLabel: 'U',
    resultUnit: 'В'
  },

  {
    id: 'resistance-ohm',
    section: 'electro',
    class: 8,
    title: 'Сопротивление через закон Ома',
    formula: 'R = U / I',
    inputs: [
      { key: 'u', label: 'Напряжение U', unit: 'В' },
      { key: 'i', label: 'Сила тока I', unit: 'А' }
    ],
    calc: (x) => x.u / x.i,
    resultLabel: 'R',
    resultUnit: 'Ом'
  },

  {
    id: 'power-current',
    section: 'electro',
    class: 8,
    title: 'Мощность тока',
    formula: 'P = U · I',
    inputs: [
      { key: 'u', label: 'Напряжение U', unit: 'В' },
      { key: 'i', label: 'Сила тока I', unit: 'А' }
    ],
    calc: (x) => x.u * x.i,
    resultLabel: 'P',
    resultUnit: 'Вт'
  },

  {
    id: 'power-resistance',
    section: 'electro',
    class: 8,
    title: 'Мощность через сопротивление',
    formula: 'P = I² · R',
    inputs: [
      { key: 'i', label: 'Сила тока I', unit: 'А' },
      { key: 'r', label: 'Сопротивление R', unit: 'Ом' }
    ],
    calc: (x) => x.i * x.i * x.r,
    resultLabel: 'P',
    resultUnit: 'Вт'
  },

  {
    id: 'power-voltage-resistance',
    section: 'electro',
    class: 8,
    title: 'Мощность через напряжение и R',
    formula: 'P = U² / R',
    inputs: [
      { key: 'u', label: 'Напряжение U', unit: 'В' },
      { key: 'r', label: 'Сопротивление R', unit: 'Ом' }
    ],
    calc: (x) => x.u * x.u / x.r,
    resultLabel: 'P',
    resultUnit: 'Вт'
  },

  {
    id: 'joule-lenz',
    section: 'electro',
    class: 8,
    title: 'Закон Джоуля-Ленца',
    formula: 'Q = I² · R · t',
    inputs: [
      { key: 'i', label: 'Сила тока I', unit: 'А' },
      { key: 'r', label: 'Сопротивление R', unit: 'Ом' },
      { key: 't', label: 'Время t', unit: 'с' }
    ],
    calc: (x) => x.i * x.i * x.r * x.t,
    resultLabel: 'Q',
    resultUnit: 'Дж'
  },

  {
    id: 'charge-current',
    section: 'electro',
    class: 8,
    title: 'Заряд через силу тока',
    formula: 'q = I · t',
    inputs: [
      { key: 'i', label: 'Сила тока I', unit: 'А' },
      { key: 't', label: 'Время t', unit: 'с' }
    ],
    calc: (x) => x.i * x.t,
    resultLabel: 'q',
    resultUnit: 'Кл'
  },

  {
    id: 'current-charge',
    section: 'electro',
    class: 8,
    title: 'Сила тока через заряд',
    formula: 'I = q / t',
    inputs: [
      { key: 'q', label: 'Заряд q', unit: 'Кл' },
      { key: 't', label: 'Время t', unit: 'с' }
    ],
    calc: (x) => x.q / x.t,
    resultLabel: 'I',
    resultUnit: 'А'
  },

  {
    id: 'time-charge',
    section: 'electro',
    class: 8,
    title: 'Время через заряд и ток',
    formula: 't = q / I',
    inputs: [
      { key: 'q', label: 'Заряд q', unit: 'Кл' },
      { key: 'i', label: 'Сила тока I', unit: 'А' }
    ],
    calc: (x) => x.q / x.i,
    resultLabel: 't',
    resultUnit: 'с'
  },

  {
    id: 'resistance-wire',
    section: 'electro',
    class: 8,
    title: 'Сопротивление проводника',
    formula: 'R = ρ·l / S',
    inputs: [
      { key: 'rho', label: 'Удельное ρ', unit: 'Ом·мм²/м' },
      { key: 'l', label: 'Длина l', unit: 'м' },
      { key: 's', label: 'Площадь S', unit: 'мм²' }
    ],
    calc: (x) => x.rho * x.l / x.s,
    resultLabel: 'R',
    resultUnit: 'Ом'
  },

  {
    id: 'series-resistance',
    section: 'electro',
    class: 8,
    title: 'Последовательное соединение R',
    formula: 'R = R₁ + R₂',
    inputs: [
      { key: 'r1', label: 'R₁', unit: 'Ом' },
      { key: 'r2', label: 'R₂', unit: 'Ом' }
    ],
    calc: (x) => x.r1 + x.r2,
    resultLabel: 'R',
    resultUnit: 'Ом'
  },

  {
    id: 'parallel-resistance',
    section: 'electro',
    class: 8,
    title: 'Параллельное соединение R',
    formula: 'R = R₁·R₂ / (R₁ + R₂)',
    inputs: [
      { key: 'r1', label: 'R₁', unit: 'Ом' },
      { key: 'r2', label: 'R₂', unit: 'Ом' }
    ],
    calc: (x) => x.r1 * x.r2 / (x.r1 + x.r2),
    resultLabel: 'R',
    resultUnit: 'Ом'
  },

  {
    id: 'coulomb-law',
    section: 'electro',
    class: 10,
    title: 'Закон Кулона',
    formula: 'F = k·q₁·q₂ / r²',
    inputs: [
      { key: 'q1', label: 'Заряд q₁', unit: 'Кл' },
      { key: 'q2', label: 'Заряд q₂', unit: 'Кл' },
      { key: 'r', label: 'Расстояние r', unit: 'м' }
    ],
    calc: (x) => 9e9 * x.q1 * x.q2 / (x.r * x.r),
    resultLabel: 'F',
    resultUnit: 'Н'
  },

  {
    id: 'field-strength',
    section: 'electro',
    class: 10,
    title: 'Напряжённость электрического поля',
    formula: 'E = F / q',
    inputs: [
      { key: 'f', label: 'Сила F', unit: 'Н' },
      { key: 'q', label: 'Заряд q', unit: 'Кл' }
    ],
    calc: (x) => x.f / x.q,
    resultLabel: 'E',
    resultUnit: 'В/м'
  },

  {
    id: 'voltage-field',
    section: 'electro',
    class: 10,
    title: 'Напряжение через напряжённость',
    formula: 'U = E · d',
    inputs: [
      { key: 'e', label: 'Напряжённость E', unit: 'В/м' },
      { key: 'd', label: 'Расстояние d', unit: 'м' }
    ],
    calc: (x) => x.e * x.d,
    resultLabel: 'U',
    resultUnit: 'В'
  },

  {
    id: 'capacitor-charge',
    section: 'electro',
    class: 10,
    title: 'Заряд конденсатора',
    formula: 'q = C · U',
    inputs: [
      { key: 'c', label: 'Ёмкость C', unit: 'Ф' },
      { key: 'u', label: 'Напряжение U', unit: 'В' }
    ],
    calc: (x) => x.c * x.u,
    resultLabel: 'q',
    resultUnit: 'Кл'
  },

  {
    id: 'capacitor-energy',
    section: 'electro',
    class: 10,
    title: 'Энергия конденсатора',
    formula: 'W = C·U² / 2',
    inputs: [
      { key: 'c', label: 'Ёмкость C', unit: 'Ф' },
      { key: 'u', label: 'Напряжение U', unit: 'В' }
    ],
    calc: (x) => x.c * x.u * x.u / 2,
    resultLabel: 'W',
    resultUnit: 'Дж'
  },

  {
    id: 'emf-ohm-full',
    section: 'electro',
    class: 10,
    title: 'Закон Ома для полной цепи',
    formula: 'I = ε / (R + r)',
    inputs: [
      { key: 'eps', label: 'ЭДС ε', unit: 'В' },
      { key: 'r', label: 'Внешнее R', unit: 'Ом' },
      { key: 'rint', label: 'Внутреннее r', unit: 'Ом' }
    ],
    calc: (x) => x.eps / (x.r + x.rint),
    resultLabel: 'I',
    resultUnit: 'А'
  },

  {
    id: 'emf-value',
    section: 'electro',
    class: 10,
    title: 'ЭДС источника',
    formula: 'ε = I·(R + r)',
    inputs: [
      { key: 'i', label: 'Сила тока I', unit: 'А' },
      { key: 'r', label: 'Внешнее R', unit: 'Ом' },
      { key: 'rint', label: 'Внутреннее r', unit: 'Ом' }
    ],
    calc: (x) => x.i * (x.r + x.rint),
    resultLabel: 'ε',
    resultUnit: 'В'
  },
  
  {
    id: 'current-power-time',
    section: 'electro',
    class: 8,
    title: 'Работа тока',
    formula: 'A = P · t',
    inputs: [
      { key: 'p', label: 'Мощность P', unit: 'Вт' },
      { key: 't', label: 'Время t', unit: 'с' }
    ],
    calc: (x) => x.p * x.t,
    resultLabel: 'A',
    resultUnit: 'Дж'
  },

    // =====================> ОПТИКА
  {
    id: 'reflection-angle',
    section: 'optika',
    class: 8,
    title: 'Закон отражения',
    formula: 'α = γ',
    inputs: [
      { key: 'a', label: 'Угол падения α', unit: '°' }
    ],
    calc: (x) => x.a,
    resultLabel: 'γ',
    resultUnit: '°'
  },
  {
    id: 'refraction-snell',
    section: 'optika',
    class: 11,
    title: 'Закон преломления (Снеллиус)',
    formula: 'sin α / sin β = n₂ / n₁',
    inputs: [
      { key: 'a', label: 'Угол падения α', unit: '°' },
      { key: 'n1', label: 'Показатель n₁', unit: '' },
      { key: 'n2', label: 'Показатель n₂', unit: '' }
    ],
    calc: (x) => {
      const sinA = Math.sin(x.a * Math.PI / 180);
      const sinB = sinA * x.n1 / x.n2;
      return Math.asin(sinB) * 180 / Math.PI;
    },
    resultLabel: 'β',
    resultUnit: '°'
  },
  {
    id: 'refractive-index',
    section: 'optika',
    class: 11,
    title: 'Показатель преломления',
    formula: 'n = c / v',
    inputs: [
      { key: 'v', label: 'Скорость света в среде v', unit: 'м/с' }
    ],
    calc: (x) => 3e8 / x.v,
    resultLabel: 'n',
    resultUnit: ''
  },
  {
    id: 'speed-in-medium',
    section: 'optika',
    class: 11,
    title: 'Скорость света в среде',
    formula: 'v = c / n',
    inputs: [
      { key: 'n', label: 'Показатель n', unit: '' }
    ],
    calc: (x) => 3e8 / x.n,
    resultLabel: 'v',
    resultUnit: 'м/с'
  },
  {
    id: 'critical-angle',
    section: 'optika',
    class: 11,
    title: 'Предельный угол полного отражения',
    formula: 'sin α₀ = 1 / n',
    inputs: [
      { key: 'n', label: 'Показатель n', unit: '' }
    ],
    calc: (x) => Math.asin(1 / x.n) * 180 / Math.PI,
    resultLabel: 'α₀',
    resultUnit: '°'
  },
  {
    id: 'thin-lens',
    section: 'optika',
    class: 11,
    title: 'Формула тонкой линзы',
    formula: '1/F = 1/d + 1/f',
    inputs: [
      { key: 'd', label: 'Расстояние до предмета d', unit: 'м' },
      { key: 'f', label: 'Расстояние до изображения f', unit: 'м' }
    ],
    calc: (x) => 1 / (1 / x.d + 1 / x.f),
    resultLabel: 'F',
    resultUnit: 'м'
  },
  {
    id: 'lens-distance',
    section: 'optika',
    class: 11,
    title: 'Расстояние до изображения',
    formula: 'f = F·d / (d − F)',
    inputs: [
      { key: 'f', label: 'Фокусное расстояние F', unit: 'м' },
      { key: 'd', label: 'Расстояние до предмета d', unit: 'м' }
    ],
    calc: (x) => x.f * x.d / (x.d - x.f),
    resultLabel: 'f',
    resultUnit: 'м'
  },
  {
    id: 'lens-magnification',
    section: 'optika',
    class: 11,
    title: 'Увеличение линзы',
    formula: 'Γ = f / d',
    inputs: [
      { key: 'f', label: 'Расстояние до изображения f', unit: 'м' },
      { key: 'd', label: 'Расстояние до предмета d', unit: 'м' }
    ],
    calc: (x) => x.f / x.d,
    resultLabel: 'Γ',
    resultUnit: ''
  },
  {
    id: 'optical-power',
    section: 'optika',
    class: 11,
    title: 'Оптическая сила линзы',
    formula: 'D = 1 / F',
    inputs: [
      { key: 'f', label: 'Фокусное расстояние F', unit: 'м' }
    ],
    calc: (x) => 1 / x.f,
    resultLabel: 'D',
    resultUnit: 'дптр'
  },
  {
    id: 'focal-length',
    section: 'optika',
    class: 11,
    title: 'Фокусное расстояние через D',
    formula: 'F = 1 / D',
    inputs: [
      { key: 'd', label: 'Оптическая сила D', unit: 'дптр' }
    ],
    calc: (x) => 1 / x.d,
    resultLabel: 'F',
    resultUnit: 'м'
  },
  {
    id: 'photon-energy',
    section: 'optika',
    class: 11,
    title: 'Энергия фотона',
    formula: 'E = h·ν',
    inputs: [
      { key: 'nu', label: 'Частота ν', unit: 'Гц' }
    ],
    calc: (x) => 6.63e-34 * x.nu,
    resultLabel: 'E',
    resultUnit: 'Дж'
  },
  {
    id: 'photon-energy-wavelength',
    section: 'optika',
    class: 11,
    title: 'Энергия фотона через длину волны',
    formula: 'E = h·c / λ',
    inputs: [
      { key: 'lambda', label: 'Длина волны λ', unit: 'м' }
    ],
    calc: (x) => 6.63e-34 * 3e8 / x.lambda,
    resultLabel: 'E',
    resultUnit: 'Дж'
  },
  {
    id: 'photon-momentum',
    section: 'optika',
    class: 11,
    title: 'Импульс фотона',
    formula: 'p = h / λ',
    inputs: [
      { key: 'lambda', label: 'Длина волны λ', unit: 'м' }
    ],
    calc: (x) => 6.63e-34 / x.lambda,
    resultLabel: 'p',
    resultUnit: 'кг·м/с'
  },
  {
    id: 'photon-frequency',
    section: 'optika',
    class: 11,
    title: 'Частота фотона через энергию',
    formula: 'ν = E / h',
    inputs: [
      { key: 'e', label: 'Энергия E', unit: 'Дж' }
    ],
    calc: (x) => x.e / 6.63e-34,
    resultLabel: 'ν',
    resultUnit: 'Гц'
  },
  {
    id: 'wavelength-frequency',
    section: 'optika',
    class: 11,
    title: 'Длина волны через частоту',
    formula: 'λ = c / ν',
    inputs: [
      { key: 'nu', label: 'Частота ν', unit: 'Гц' }
    ],
    calc: (x) => 3e8 / x.nu,
    resultLabel: 'λ',
    resultUnit: 'м'
  },
  {
    id: 'einstein-photoeffect',
    section: 'optika',
    class: 11,
    title: 'Уравнение Эйнштейна для фотоэффекта',
    formula: 'h·ν = A + Ek',
    inputs: [
      { key: 'nu', label: 'Частота ν', unit: 'Гц' },
      { key: 'a', label: 'Работа выхода A', unit: 'Дж' }
    ],
    calc: (x) => 6.63e-34 * x.nu - x.a,
    resultLabel: 'Ek',
    resultUnit: 'Дж'
  },
  {
    id: 'red-border',
    section: 'optika',
    class: 11,
    title: 'Красная граница фотоэффекта',
    formula: 'ν₀ = A / h',
    inputs: [
      { key: 'a', label: 'Работа выхода A', unit: 'Дж' }
    ],
    calc: (x) => x.a / 6.63e-34,
    resultLabel: 'ν₀',
    resultUnit: 'Гц'
  },
  {
    id: 'diffraction-grating',
    section: 'optika',
    class: 11,
    title: 'Формула дифракционной решётки',
    formula: 'd·sin φ = k·λ',
    inputs: [
      { key: 'd', label: 'Период решётки d', unit: 'м' },
      { key: 'k', label: 'Порядок максимума k', unit: '' },
      { key: 'lambda', label: 'Длина волны λ', unit: 'м' }
    ],
    calc: (x) => Math.asin(x.k * x.lambda / x.d) * 180 / Math.PI,
    resultLabel: 'φ',
    resultUnit: '°'
  },
  {
    id: 'grating-period',
    section: 'optika',
    class: 11,
    title: 'Период дифракционной решётки',
    formula: 'd = 1 / N',
    inputs: [
      { key: 'n', label: 'Число штрихов на 1 м N', unit: '1/м' }
    ],
    calc: (x) => 1 / x.n,
    resultLabel: 'd',
    resultUnit: 'м'
  },
  {
    id: 'interference-max',
    section: 'optika',
    class: 11,
    title: 'Условие максимума интерференции',
    formula: 'Δd = k·λ',
    inputs: [
      { key: 'k', label: 'Порядок k', unit: '' },
      { key: 'lambda', label: 'Длина волны λ', unit: 'м' }
    ],
    calc: (x) => x.k * x.lambda,
    resultLabel: 'Δd',
    resultUnit: 'м'
  },
  {
    id: 'interference-min',
    section: 'optika',
    class: 11,
    title: 'Условие минимума интерференции',
    formula: 'Δd = (2k+1)·λ / 2',
    inputs: [
      { key: 'k', label: 'Порядок k', unit: '' },
      { key: 'lambda', label: 'Длина волны λ', unit: 'м' }
    ],
    calc: (x) => (2 * x.k + 1) * x.lambda / 2,
    resultLabel: 'Δd',
    resultUnit: 'м'
  },
  {
    id: 'light-pressure',
    section: 'optika',
    class: 11,
    title: 'Давление света',
    formula: 'P = I / c',
    inputs: [
      { key: 'i', label: 'Интенсивность I', unit: 'Вт/м²' }
    ],
    calc: (x) => x.i / 3e8,
    resultLabel: 'P',
    resultUnit: 'Па'
  },
  {
    id: 'magnifier-magnification',
    section: 'optika',
    class: 11,
    title: 'Увеличение лупы',
    formula: 'Γ = 0.25 / F',
    inputs: [
      { key: 'f', label: 'Фокусное расстояние F', unit: 'м' }
    ],
    calc: (x) => 0.25 / x.f,
    resultLabel: 'Γ',
    resultUnit: ''
  },
  
    // =====================> АТОМНАЯ И ЯДЕРНАЯ ФИЗИКА
  {
    id: 'mass-defect',
    section: 'atom',
    class: 11,
    title: 'Дефект массы ядра',
    formula: 'Δm = Z·mₚ + N·mₙ − M',
    inputs: [
      { key: 'z', label: 'Число протонов Z', unit: '' },
      { key: 'n', label: 'Число нейтронов N', unit: '' },
      { key: 'm', label: 'Масса ядра M', unit: 'а.е.м.' }
    ],
    calc: (x) => x.z * 1.00728 + x.n * 1.00866 - x.m,
    resultLabel: 'Δm',
    resultUnit: 'а.е.м.'
  },
  {
    id: 'binding-energy',
    section: 'atom',
    class: 11,
    title: 'Энергия связи ядра',
    formula: 'Eсв = Δm · c²',
    inputs: [
      { key: 'dm', label: 'Дефект массы Δm', unit: 'а.е.м.' }
    ],
    calc: (x) => x.dm * 931.5,
    resultLabel: 'Eсв',
    resultUnit: 'МэВ'
  },
  {
    id: 'binding-energy-joule',
    section: 'atom',
    class: 11,
    title: 'Энергия связи в Джоулях',
    formula: 'E = Δm · c²',
    inputs: [
      { key: 'dm', label: 'Дефект массы Δm', unit: 'кг' }
    ],
    calc: (x) => x.dm * 9e16,
    resultLabel: 'E',
    resultUnit: 'Дж'
  },
  {
    id: 'nuclear-reaction-energy',
    section: 'atom',
    class: 11,
    title: 'Энергетический выход реакции',
    formula: 'Q = (m₁ − m₂) · c²',
    inputs: [
      { key: 'm1', label: 'Масса до m₁', unit: 'а.е.м.' },
      { key: 'm2', label: 'Масса после m₂', unit: 'а.е.м.' }
    ],
    calc: (x) => (x.m1 - x.m2) * 931.5,
    resultLabel: 'Q',
    resultUnit: 'МэВ'
  },
  {
    id: 'radioactive-decay-law',
    section: 'atom',
    class: 11,
    title: 'Закон радиоактивного распада',
    formula: 'N = N₀ · 2^(−t/T)',
    inputs: [
      { key: 'n0', label: 'Начальное число N₀', unit: '' },
      { key: 't', label: 'Время t', unit: 'с' },
      { key: 'T', label: 'Период полураспада T', unit: 'с' }
    ],
    calc: (x) => x.n0 * Math.pow(2, -x.t / x.T),
    resultLabel: 'N',
    resultUnit: ''
  },
  {
    id: 'half-life',
    section: 'atom',
    class: 11,
    title: 'Период полураспада',
    formula: 'T = ln2 / λ',
    inputs: [
      { key: 'lambda', label: 'Постоянная распада λ', unit: '1/с' }
    ],
    calc: (x) => 0.693 / x.lambda,
    resultLabel: 'T',
    resultUnit: 'с'
  },
  {
    id: 'decay-constant',
    section: 'atom',
    class: 11,
    title: 'Постоянная распада',
    formula: 'λ = ln2 / T',
    inputs: [
      { key: 't', label: 'Период полураспада T', unit: 'с' }
    ],
    calc: (x) => 0.693 / x.t,
    resultLabel: 'λ',
    resultUnit: '1/с'
  },
  {
    id: 'activity',
    section: 'atom',
    class: 11,
    title: 'Активность радиоактивного вещества',
    formula: 'A = λ · N',
    inputs: [
      { key: 'lambda', label: 'Постоянная λ', unit: '1/с' },
      { key: 'n', label: 'Число ядер N', unit: '' }
    ],
    calc: (x) => x.lambda * x.n,
    resultLabel: 'A',
    resultUnit: 'Бк'
  },
  {
    id: 'activity-decay',
    section: 'atom',
    class: 11,
    title: 'Активность через время',
    formula: 'A = A₀ · 2^(−t/T)',
    inputs: [
      { key: 'a0', label: 'Начальная активность A₀', unit: 'Бк' },
      { key: 't', label: 'Время t', unit: 'с' },
      { key: 'T', label: 'Период T', unit: 'с' }
    ],
    calc: (x) => x.a0 * Math.pow(2, -x.t / x.T),
    resultLabel: 'A',
    resultUnit: 'Бк'
  },
  {
    id: 'bohr-frequency',
    section: 'atom',
    class: 11,
    title: 'Частота излучения (формула Бора)',
    formula: 'h·ν = E₂ − E₁',
    inputs: [
      { key: 'e2', label: 'Энергия E₂', unit: 'Дж' },
      { key: 'e1', label: 'Энергия E₁', unit: 'Дж' }
    ],
    calc: (x) => (x.e2 - x.e1) / 6.63e-34,
    resultLabel: 'ν',
    resultUnit: 'Гц'
  },
  {
    id: 'bohr-wavelength',
    section: 'atom',
    class: 11,
    title: 'Длина волны излучения',
    formula: 'λ = h·c / (E₂ − E₁)',
    inputs: [
      { key: 'e2', label: 'Энергия E₂', unit: 'Дж' },
      { key: 'e1', label: 'Энергия E₁', unit: 'Дж' }
    ],
    calc: (x) => 6.63e-34 * 3e8 / (x.e2 - x.e1),
    resultLabel: 'λ',
    resultUnit: 'м'
  },
  {
    id: 'hydrogen-energy',
    section: 'atom',
    class: 11,
    title: 'Энергия уровня водорода',
    formula: 'En = −13.6 / n²',
    inputs: [
      { key: 'n', label: 'Номер уровня n', unit: '' }
    ],
    calc: (x) => -13.6 / (x.n * x.n),
    resultLabel: 'En',
    resultUnit: 'эВ'
  },
  {
    id: 'ionization-energy',
    section: 'atom',
    class: 11,
    title: 'Энергия ионизации водорода',
    formula: 'E = 13.6 · (1/n₁² − 1/n₂²)',
    inputs: [
      { key: 'n1', label: 'Уровень n₁', unit: '' },
      { key: 'n2', label: 'Уровень n₂', unit: '' }
    ],
    calc: (x) => 13.6 * (1 / (x.n1 * x.n1) - 1 / (x.n2 * x.n2)),
    resultLabel: 'E',
    resultUnit: 'эВ'
  },
  {
    id: 'rydberg',
    section: 'atom',
    class: 11,
    title: 'Формула Ридберга',
    formula: '1/λ = R·(1/n₁² − 1/n₂²)',
    inputs: [
      { key: 'n1', label: 'Уровень n₁', unit: '' },
      { key: 'n2', label: 'Уровень n₂', unit: '' }
    ],
    calc: (x) => 1 / (1.097e7 * (1 / (x.n1 * x.n1) - 1 / (x.n2 * x.n2))),
    resultLabel: 'λ',
    resultUnit: 'м'
  },
  {
    id: 'de-broglie-wavelength',
    section: 'atom',
    class: 11,
    title: 'Длина волны де Бройля',
    formula: 'λ = h / (m·v)',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'v', label: 'Скорость v', unit: 'м/с' }
    ],
    calc: (x) => 6.63e-34 / (x.m * x.v),
    resultLabel: 'λ',
    resultUnit: 'м'
  },
  {
    id: 'de-broglie-momentum',
    section: 'atom',
    class: 11,
    title: 'Длина волны через импульс',
    formula: 'λ = h / p',
    inputs: [
      { key: 'p', label: 'Импульс p', unit: 'кг·м/с' }
    ],
    calc: (x) => 6.63e-34 / x.p,
    resultLabel: 'λ',
    resultUnit: 'м'
  },
  {
    id: 'photon-mass',
    section: 'atom',
    class: 11,
    title: 'Масса фотона',
    formula: 'm = h·ν / c²',
    inputs: [
      { key: 'nu', label: 'Частота ν', unit: 'Гц' }
    ],
    calc: (x) => 6.63e-34 * x.nu / 9e16,
    resultLabel: 'm',
    resultUnit: 'кг'
  },
  {
    id: 'nuclear-radius',
    section: 'atom',
    class: 11,
    title: 'Радиус ядра',
    formula: 'R = 1.2e-15 · A^(1/3)',
    inputs: [
      { key: 'a', label: 'Массовое число A', unit: '' }
    ],
    calc: (x) => 1.2e-15 * Math.pow(x.a, 1 / 3),
    resultLabel: 'R',
    resultUnit: 'м'
  },
  {
    id: 'gamma-energy',
    section: 'atom',
    class: 11,
    title: 'Энергия гамма-кванта',
    formula: 'E = h·c / λ',
    inputs: [
      { key: 'lambda', label: 'Длина волны λ', unit: 'м' }
    ],
    calc: (x) => 6.63e-34 * 3e8 / x.lambda,
    resultLabel: 'E',
    resultUnit: 'Дж'
  },
  {
    id: 'nuclear-binding-per-nucleon',
    section: 'atom',
    class: 11,
    title: 'Удельная энергия связи',
    formula: 'Eуд = Eсв / A',
    inputs: [
      { key: 'esv', label: 'Энергия связи Eсв', unit: 'МэВ' },
      { key: 'a', label: 'Массовое число A', unit: '' }
    ],
    calc: (x) => x.esv / x.a,
    resultLabel: 'Eуд',
    resultUnit: 'МэВ'
  },

  // =====================> МАГНЕТИЗМ
  {
    id: 'ampere-force',
    section: 'electro',
    class: 11,
    title: 'Сила Ампера',
    formula: 'F = B·I·L·sin α',
    inputs: [
      { key: 'b', label: 'Индукция B', unit: 'Тл' },
      { key: 'i', label: 'Сила тока I', unit: 'А' },
      { key: 'l', label: 'Длина L', unit: 'м' },
      { key: 'a', label: 'Угол α', unit: '°' }
    ],
    calc: (x) => x.b * x.i * x.l * Math.sin(x.a * Math.PI / 180),
    resultLabel: 'F',
    resultUnit: 'Н'
  },
  {
    id: 'lorentz-force',
    section: 'electro',
    class: 11,
    title: 'Сила Лоренца',
    formula: 'F = q·v·B·sin α',
    inputs: [
      { key: 'q', label: 'Заряд q', unit: 'Кл' },
      { key: 'v', label: 'Скорость v', unit: 'м/с' },
      { key: 'b', label: 'Индукция B', unit: 'Тл' },
      { key: 'a', label: 'Угол α', unit: '°' }
    ],
    calc: (x) => x.q * x.v * x.b * Math.sin(x.a * Math.PI / 180),
    resultLabel: 'F',
    resultUnit: 'Н'
  },
  {
    id: 'lorentz-radius',
    section: 'electro',
    class: 11,
    title: 'Радиус траектории в магнитном поле',
    formula: 'R = m·v / (q·B)',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'v', label: 'Скорость v', unit: 'м/с' },
      { key: 'q', label: 'Заряд q', unit: 'Кл' },
      { key: 'b', label: 'Индукция B', unit: 'Тл' }
    ],
    calc: (x) => x.m * x.v / (x.q * x.b),
    resultLabel: 'R',
    resultUnit: 'м'
  },
  {
    id: 'magnetic-flux',
    section: 'electro',
    class: 11,
    title: 'Магнитный поток',
    formula: 'Φ = B·S·cos α',
    inputs: [
      { key: 'b', label: 'Индукция B', unit: 'Тл' },
      { key: 's', label: 'Площадь S', unit: 'м²' },
      { key: 'a', label: 'Угол α', unit: '°' }
    ],
    calc: (x) => x.b * x.s * Math.cos(x.a * Math.PI / 180),
    resultLabel: 'Φ',
    resultUnit: 'Вб'
  },
  {
    id: 'flux-from-induction',
    section: 'electro',
    class: 11,
    title: 'Индукция через поток',
    formula: 'B = Φ / (S·cos α)',
    inputs: [
      { key: 'f', label: 'Магнитный поток Φ', unit: 'Вб' },
      { key: 's', label: 'Площадь S', unit: 'м²' },
      { key: 'a', label: 'Угол α', unit: '°' }
    ],
    calc: (x) => x.f / (x.s * Math.cos(x.a * Math.PI / 180)),
    resultLabel: 'B',
    resultUnit: 'Тл'
  },
  {
    id: 'faraday-law',
    section: 'electro',
    class: 11,
    title: 'Закон электромагнитной индукции',
    formula: 'ε = −ΔΦ / Δt',
    inputs: [
      { key: 'df', label: 'Изменение потока ΔΦ', unit: 'Вб' },
      { key: 'dt', label: 'Время Δt', unit: 'с' }
    ],
    calc: (x) => -x.df / x.dt,
    resultLabel: 'ε',
    resultUnit: 'В'
  },
  {
    id: 'emf-induction',
    section: 'electro',
    class: 11,
    title: 'ЭДС индукции в движущемся проводнике',
    formula: 'ε = B·L·v·sin α',
    inputs: [
      { key: 'b', label: 'Индукция B', unit: 'Тл' },
      { key: 'l', label: 'Длина L', unit: 'м' },
      { key: 'v', label: 'Скорость v', unit: 'м/с' },
      { key: 'a', label: 'Угол α', unit: '°' }
    ],
    calc: (x) => x.b * x.l * x.v * Math.sin(x.a * Math.PI / 180),
    resultLabel: 'ε',
    resultUnit: 'В'
  },
  {
    id: 'self-induction-emf',
    section: 'electro',
    class: 11,
    title: 'ЭДС самоиндукции',
    formula: 'ε = −L·ΔI / Δt',
    inputs: [
      { key: 'l', label: 'Индуктивность L', unit: 'Гн' },
      { key: 'di', label: 'Изменение тока ΔI', unit: 'А' },
      { key: 'dt', label: 'Время Δt', unit: 'с' }
    ],
    calc: (x) => -x.l * x.di / x.dt,
    resultLabel: 'ε',
    resultUnit: 'В'
  },
  {
    id: 'inductance',
    section: 'electro',
    class: 11,
    title: 'Индуктивность через поток',
    formula: 'L = Φ / I',
    inputs: [
      { key: 'f', label: 'Магнитный поток Φ', unit: 'Вб' },
      { key: 'i', label: 'Сила тока I', unit: 'А' }
    ],
    calc: (x) => x.f / x.i,
    resultLabel: 'L',
    resultUnit: 'Гн'
  },
  {
    id: 'inductor-energy',
    section: 'electro',
    class: 11,
    title: 'Энергия магнитного поля катушки',
    formula: 'W = L·I² / 2',
    inputs: [
      { key: 'l', label: 'Индуктивность L', unit: 'Гн' },
      { key: 'i', label: 'Сила тока I', unit: 'А' }
    ],
    calc: (x) => x.l * x.i * x.i / 2,
    resultLabel: 'W',
    resultUnit: 'Дж'
  },
  {
    id: 'magnetic-permeability',
    section: 'electro',
    class: 11,
    title: 'Магнитная индукция в среде',
    formula: 'B = μ₀·μ·H',
    inputs: [
      { key: 'mu', label: 'Магнитная проницаемость μ', unit: '' },
      { key: 'h', label: 'Напряжённость H', unit: 'А/м' }
    ],
    calc: (x) => 4 * Math.PI * 1e-7 * x.mu * x.h,
    resultLabel: 'B',
    resultUnit: 'Тл'
  },
  {
    id: 'magnetic-field-wire',
    section: 'electro',
    class: 11,
    title: 'Индукция поля прямого провода',
    formula: 'B = μ₀·I / (2π·r)',
    inputs: [
      { key: 'i', label: 'Сила тока I', unit: 'А' },
      { key: 'r', label: 'Расстояние r', unit: 'м' }
    ],
    calc: (x) => 4 * Math.PI * 1e-7 * x.i / (2 * Math.PI * x.r),
    resultLabel: 'B',
    resultUnit: 'Тл'
  },
  {
    id: 'magnetic-field-solenoid',
    section: 'electro',
    class: 11,
    title: 'Индукция поля внутри соленоида',
    formula: 'B = μ₀·μ·n·I',
    inputs: [
      { key: 'mu', label: 'Проницаемость μ', unit: '' },
      { key: 'n', label: 'Плотность витков n', unit: '1/м' },
      { key: 'i', label: 'Сила тока I', unit: 'А' }
    ],
    calc: (x) => 4 * Math.PI * 1e-7 * x.mu * x.n * x.i,
    resultLabel: 'B',
    resultUnit: 'Тл'
  },
  {
    id: 'charge-in-magnetic-field',
    section: 'electro',
    class: 11,
    title: 'Период обращения частицы',
    formula: 'T = 2π·m / (q·B)',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'q', label: 'Заряд q', unit: 'Кл' },
      { key: 'b', label: 'Индукция B', unit: 'Тл' }
    ],
    calc: (x) => 2 * Math.PI * x.m / (x.q * x.b),
    resultLabel: 'T',
    resultUnit: 'с'
  },
  {
    id: 'transformer-ratio',
    section: 'electro',
    class: 11,
    title: 'Коэффициент трансформации',
    formula: 'k = U₁ / U₂ = N₁ / N₂',
    inputs: [
      { key: 'u1', label: 'Напряжение U₁', unit: 'В' },
      { key: 'u2', label: 'Напряжение U₂', unit: 'В' }
    ],
    calc: (x) => x.u1 / x.u2,
    resultLabel: 'k',
    resultUnit: ''
  },
  {
    id: 'transformer-voltage',
    section: 'electro',
    class: 11,
    title: 'Напряжение на вторичной обмотке',
    formula: 'U₂ = U₁·N₂ / N₁',
    inputs: [
      { key: 'u1', label: 'Напряжение U₁', unit: 'В' },
      { key: 'n1', label: 'Витки N₁', unit: '' },
      { key: 'n2', label: 'Витки N₂', unit: '' }
    ],
    calc: (x) => x.u1 * x.n2 / x.n1,
    resultLabel: 'U₂',
    resultUnit: 'В'
  },
  {
    id: 'transformer-power',
    section: 'electro',
    class: 11,
    title: 'Мощность трансформатора',
    formula: 'P = U·I',
    inputs: [
      { key: 'u', label: 'Напряжение U', unit: 'В' },
      { key: 'i', label: 'Сила тока I', unit: 'А' }
    ],
    calc: (x) => x.u * x.i,
    resultLabel: 'P',
    resultUnit: 'Вт'
  },
  {
    id: 'induction-current',
    section: 'electro',
    class: 11,
    title: 'Индукционный ток',
    formula: 'I = ε / R',
    inputs: [
      { key: 'eps', label: 'ЭДС ε', unit: 'В' },
      { key: 'r', label: 'Сопротивление R', unit: 'Ом' }
    ],
    calc: (x) => x.eps / x.r,
    resultLabel: 'I',
    resultUnit: 'А'
  },
  {
    id: 'magnetic-energy-density',
    section: 'electro',
    class: 11,
    title: 'Плотность энергии магнитного поля',
    formula: 'w = B² / (2·μ₀)',
    inputs: [
      { key: 'b', label: 'Индукция B', unit: 'Тл' }
    ],
    calc: (x) => x.b * x.b / (2 * 4 * Math.PI * 1e-7),
    resultLabel: 'w',
    resultUnit: 'Дж/м³'
  },
  {
    id: 'lenz-rule-direction',
    section: 'electro',
    class: 11,
    title: 'Направление индукционного тока (правило Ленца)',
    formula: 'ε = −ΔΦ/Δt',
    inputs: [
      { key: 'df', label: 'ΔΦ', unit: 'Вб' },
      { key: 'dt', label: 'Δt', unit: 'с' }
    ],
    calc: (x) => -x.df / x.dt,
    resultLabel: 'ε',
    resultUnit: 'В'
  },

    // =====================> ЗАКОНЫ СОХРАНЕНИЯ
  {
    id: 'momentum-conservation',
    section: 'mehanika',
    class: 9,
    title: 'Закон сохранения импульса',
    formula: 'm₁·v₁ + m₂·v₂ = m₁·u₁ + m₂·u₂',
    inputs: [
      { key: 'm1', label: 'Масса m₁', unit: 'кг' },
      { key: 'v1', label: 'Скорость v₁ (до)', unit: 'м/с' },
      { key: 'm2', label: 'Масса m₂', unit: 'кг' },
      { key: 'v2', label: 'Скорость v₂ (до)', unit: 'м/с' },
      { key: 'u1', label: 'Скорость u₁ (после)', unit: 'м/с' }
    ],
    calc: (x) => (x.m1 * x.v1 + x.m2 * x.v2 - x.m1 * x.u1) / x.m2,
    resultLabel: 'u₂',
    resultUnit: 'м/с'
  },
  {
    id: 'elastic-collision',
    section: 'mehanika',
    class: 10,
    title: 'Скорость после упругого удара (1-е тело)',
    formula: 'u₁ = (m₁−m₂)·v₁ / (m₁+m₂)',
    inputs: [
      { key: 'm1', label: 'Масса m₁', unit: 'кг' },
      { key: 'm2', label: 'Масса m₂', unit: 'кг' },
      { key: 'v1', label: 'Скорость v₁', unit: 'м/с' }
    ],
    calc: (x) => (x.m1 - x.m2) * x.v1 / (x.m1 + x.m2),
    resultLabel: 'u₁',
    resultUnit: 'м/с'
  },
  {
    id: 'elastic-collision-second',
    section: 'mehanika',
    class: 10,
    title: 'Скорость после упругого удара (2-е тело)',
    formula: 'u₂ = 2·m₁·v₁ / (m₁+m₂)',
    inputs: [
      { key: 'm1', label: 'Масса m₁', unit: 'кг' },
      { key: 'm2', label: 'Масса m₂', unit: 'кг' },
      { key: 'v1', label: 'Скорость v₁', unit: 'м/с' }
    ],
    calc: (x) => 2 * x.m1 * x.v1 / (x.m1 + x.m2),
    resultLabel: 'u₂',
    resultUnit: 'м/с'
  },
  {
    id: 'inelastic-collision',
    section: 'mehanika',
    class: 10,
    title: 'Скорость после неупругого удара',
    formula: 'u = (m₁·v₁ + m₂·v₂) / (m₁+m₂)',
    inputs: [
      { key: 'm1', label: 'Масса m₁', unit: 'кг' },
      { key: 'v1', label: 'Скорость v₁', unit: 'м/с' },
      { key: 'm2', label: 'Масса m₂', unit: 'кг' },
      { key: 'v2', label: 'Скорость v₂', unit: 'м/с' }
    ],
    calc: (x) => (x.m1 * x.v1 + x.m2 * x.v2) / (x.m1 + x.m2),
    resultLabel: 'u',
    resultUnit: 'м/с'
  },

  // =====================> РАБОТА И ЭНЕРГИЯ (расширение)
  {
    id: 'work-gravity',
    section: 'mehanika',
    class: 7,
    title: 'Работа силы тяжести',
    formula: 'A = m·g·(h₁ − h₂)',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'h1', label: 'Высота h₁', unit: 'м' },
      { key: 'h2', label: 'Высота h₂', unit: 'м' }
    ],
    calc: (x) => x.m * 9.8 * (x.h1 - x.h2),
    resultLabel: 'A',
    resultUnit: 'Дж'
  },
  {
    id: 'work-friction',
    section: 'mehanika',
    class: 7,
    title: 'Работа силы трения',
    formula: 'A = −μ·m·g·S',
    inputs: [
      { key: 'mu', label: 'Коэффициент μ', unit: '' },
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 's', label: 'Путь S', unit: 'м' }
    ],
    calc: (x) => -x.mu * x.m * 9.8 * x.s,
    resultLabel: 'A',
    resultUnit: 'Дж'
  },
  {
    id: 'full-mechanical-energy',
    section: 'mehanika',
    class: 9,
    title: 'Полная механическая энергия',
    formula: 'E = Ek + Ep',
    inputs: [
      { key: 'ek', label: 'Кинетическая Ek', unit: 'Дж' },
      { key: 'ep', label: 'Потенциальная Ep', unit: 'Дж' }
    ],
    calc: (x) => x.ek + x.ep,
    resultLabel: 'E',
    resultUnit: 'Дж'
  },
  {
    id: 'energy-conservation',
    section: 'mehanika',
    class: 9,
    title: 'Закон сохранения энергии (маятник)',
    formula: 'm·g·h = m·v² / 2',
    inputs: [
      { key: 'h', label: 'Высота падения h', unit: 'м' }
    ],
    calc: (x) => Math.sqrt(2 * 9.8 * x.h),
    resultLabel: 'v',
    resultUnit: 'м/с'
  },
  {
    id: 'potential-spring',
    section: 'mehanika',
    class: 9,
    title: 'Потенциальная энергия пружины',
    formula: 'Ep = k·Δx² / 2',
    inputs: [
      { key: 'k', label: 'Жёсткость k', unit: 'Н/м' },
      { key: 'x', label: 'Растяжение Δx', unit: 'м' }
    ],
    calc: (x) => x.k * x.x * x.x / 2,
    resultLabel: 'Ep',
    resultUnit: 'Дж'
  },

  // =====================> ГИДРОСТАТИКА
  {
    id: 'pascal-law',
    section: 'mehanika',
    class: 7,
    title: 'Закон Паскаля (сила на поршне)',
    formula: 'F₂ = F₁ · S₂ / S₁',
    inputs: [
      { key: 'f1', label: 'Сила F₁', unit: 'Н' },
      { key: 's1', label: 'Площадь S₁', unit: 'м²' },
      { key: 's2', label: 'Площадь S₂', unit: 'м²' }
    ],
    calc: (x) => x.f1 * x.s2 / x.s1,
    resultLabel: 'F₂',
    resultUnit: 'Н'
  },
  {
    id: 'atmospheric-pressure',
    section: 'mehanika',
    class: 7,
    title: 'Атмосферное давление',
    formula: 'P = ρ·g·h',
    inputs: [
      { key: 'rho', label: 'Плотность ρ', unit: 'кг/м³' },
      { key: 'h', label: 'Высота столба h', unit: 'м' }
    ],
    calc: (x) => x.rho * 9.8 * x.h,
    resultLabel: 'P',
    resultUnit: 'Па'
  },
  {
    id: 'communicating-vessels',
    section: 'mehanika',
    class: 7,
    title: 'Сообщающиеся сосуды',
    formula: 'h₁ / h₂ = ρ₂ / ρ₁',
    inputs: [
      { key: 'h1', label: 'Высота h₁', unit: 'м' },
      { key: 'rho1', label: 'Плотность ρ₁', unit: 'кг/м³' },
      { key: 'rho2', label: 'Плотность ρ₂', unit: 'кг/м³' }
    ],
    calc: (x) => x.h1 * x.rho1 / x.rho2,
    resultLabel: 'h₂',
    resultUnit: 'м'
  },
  {
    id: 'hydraulic-press-force',
    section: 'mehanika',
    class: 7,
    title: 'Сила гидравлического пресса',
    formula: 'F₂ / F₁ = S₂ / S₁',
    inputs: [
      { key: 'f1', label: 'Сила F₁', unit: 'Н' },
      { key: 's1', label: 'Площадь S₁', unit: 'м²' },
      { key: 's2', label: 'Площадь S₂', unit: 'м²' }
    ],
    calc: (x) => x.f1 * x.s2 / x.s1,
    resultLabel: 'F₂',
    resultUnit: 'Н'
  },
  {
    id: 'body-in-liquid-weight',
    section: 'mehanika',
    class: 7,
    title: 'Вес тела в жидкости',
    formula: 'P = m·g − ρ_ж·g·V',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'rho', label: 'Плотность жидкости ρ', unit: 'кг/м³' },
      { key: 'v', label: 'Объём V', unit: 'м³' }
    ],
    calc: (x) => x.m * 9.8 - x.rho * 9.8 * x.v,
    resultLabel: 'P',
    resultUnit: 'Н'
  },

  // =====================> КОЛЕБАНИЯ И ВОЛНЫ (расширение)
  {
    id: 'harmonic-oscillation',
    section: 'mehanika',
    class: 9,
    title: 'Уравнение гармонических колебаний',
    formula: 'x = A·cos(ω·t)',
    inputs: [
      { key: 'a', label: 'Амплитуда A', unit: 'м' },
      { key: 'w', label: 'Частота ω', unit: 'рад/с' },
      { key: 't', label: 'Время t', unit: 'с' }
    ],
    calc: (x) => x.a * Math.cos(x.w * x.t),
    resultLabel: 'x',
    resultUnit: 'м'
  },
  {
    id: 'harmonic-velocity',
    section: 'mehanika',
    class: 9,
    title: 'Скорость при гармонических колебаниях',
    formula: 'v = A·ω',
    inputs: [
      { key: 'a', label: 'Амплитуда A', unit: 'м' },
      { key: 'w', label: 'Частота ω', unit: 'рад/с' }
    ],
    calc: (x) => x.a * x.w,
    resultLabel: 'v',
    resultUnit: 'м/с'
  },
  {
    id: 'harmonic-acceleration',
    section: 'mehanika',
    class: 9,
    title: 'Ускорение при гармонических колебаниях',
    formula: 'a = A·ω²',
    inputs: [
      { key: 'a', label: 'Амплитуда A', unit: 'м' },
      { key: 'w', label: 'Частота ω', unit: 'рад/с' }
    ],
    calc: (x) => x.a * x.w * x.w,
    resultLabel: 'a',
    resultUnit: 'м/с²'
  },
  {
    id: 'angular-frequency',
    section: 'mehanika',
    class: 9,
    title: 'Циклическая частота',
    formula: 'ω = 2π·ν',
    inputs: [
      { key: 'nu', label: 'Частота ν', unit: 'Гц' }
    ],
    calc: (x) => 2 * Math.PI * x.nu,
    resultLabel: 'ω',
    resultUnit: 'рад/с'
  },
  {
    id: 'wave-number',
    section: 'mehanika',
    class: 9,
    title: 'Волновое число',
    formula: 'k = 2π / λ',
    inputs: [
      { key: 'lambda', label: 'Длина волны λ', unit: 'м' }
    ],
    calc: (x) => 2 * Math.PI / x.lambda,
    resultLabel: 'k',
    resultUnit: 'рад/м'
  },

  // =====================> РАВНОВЕСИЕ
  {
    id: 'moment-equilibrium',
    section: 'mehanika',
    class: 7,
    title: 'Условие равновесия рычага',
    formula: 'M₁ = M₂',
    inputs: [
      { key: 'f1', label: 'Сила F₁', unit: 'Н' },
      { key: 'l1', label: 'Плечо l₁', unit: 'м' },
      { key: 'l2', label: 'Плечо l₂', unit: 'м' }
    ],
    calc: (x) => x.f1 * x.l1 / x.l2,
    resultLabel: 'F₂',
    resultUnit: 'Н'
  },
  {
    id: 'center-of-mass',
    section: 'mehanika',
    class: 10,
    title: 'Центр масс двух тел',
    formula: 'x = (m₁·x₁ + m₂·x₂) / (m₁ + m₂)',
    inputs: [
      { key: 'm1', label: 'Масса m₁', unit: 'кг' },
      { key: 'x1', label: 'Координата x₁', unit: 'м' },
      { key: 'm2', label: 'Масса m₂', unit: 'кг' },
      { key: 'x2', label: 'Координата x₂', unit: 'м' }
    ],
    calc: (x) => (x.m1 * x.x1 + x.m2 * x.x2) / (x.m1 + x.m2),
    resultLabel: 'x',
    resultUnit: 'м'
  },
  {
    id: 'block-pulley',
    section: 'mehanika',
    class: 9,
    title: 'Система через неподвижный блок',
    formula: 'a = (m₁ − m₂)·g / (m₁ + m₂)',
    inputs: [
      { key: 'm1', label: 'Масса m₁', unit: 'кг' },
      { key: 'm2', label: 'Масса m₂', unit: 'кг' }
    ],
    calc: (x) => (x.m1 - x.m2) * 9.8 / (x.m1 + x.m2),
    resultLabel: 'a',
    resultUnit: 'м/с²'
  },
  {
    id: 'tension-thread',
    section: 'mehanika',
    class: 9,
    title: 'Сила натяжения нити',
    formula: 'T = m·(g − a)',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'a', label: 'Ускорение a', unit: 'м/с²' }
    ],
    calc: (x) => x.m * (9.8 - x.a),
    resultLabel: 'T',
    resultUnit: 'Н'
  },

  // =====================> ДВИЖЕНИЕ ПО ОКРУЖНОСТИ (расширение)
  {
    id: 'angular-acceleration',
    section: 'mehanika',
    class: 10,
    title: 'Угловое ускорение',
    formula: 'ε = (ω − ω₀) / t',
    inputs: [
      { key: 'w', label: 'Конечная ω', unit: 'рад/с' },
      { key: 'w0', label: 'Начальная ω₀', unit: 'рад/с' },
      { key: 't', label: 'Время t', unit: 'с' }
    ],
    calc: (x) => (x.w - x.w0) / x.t,
    resultLabel: 'ε',
    resultUnit: 'рад/с²'
  },
  {
    id: 'angular-path',
    section: 'mehanika',
    class: 10,
    title: 'Угловой путь',
    formula: 'φ = ω₀·t + ε·t² / 2',
    inputs: [
      { key: 'w0', label: 'Начальная ω₀', unit: 'рад/с' },
      { key: 'eps', label: 'Ускорение ε', unit: 'рад/с²' },
      { key: 't', label: 'Время t', unit: 'с' }
    ],
    calc: (x) => x.w0 * x.t + x.eps * x.t * x.t / 2,
    resultLabel: 'φ',
    resultUnit: 'рад'
  },
  {
    id: 'linear-from-angular',
    section: 'mehanika',
    class: 9,
    title: 'Линейная скорость через угловую',
    formula: 'v = ω·R',
    inputs: [
      { key: 'w', label: 'Угловая ω', unit: 'рад/с' },
      { key: 'r', label: 'Радиус R', unit: 'м' }
    ],
    calc: (x) => x.w * x.r,
    resultLabel: 'v',
    resultUnit: 'м/с'
  },
  {
    id: 'centripetal-from-angular',
    section: 'mehanika',
    class: 9,
    title: 'Центростремительное через ω',
    formula: 'a = ω²·R',
    inputs: [
      { key: 'w', label: 'Угловая ω', unit: 'рад/с' },
      { key: 'r', label: 'Радиус R', unit: 'м' }
    ],
    calc: (x) => x.w * x.w * x.r,
    resultLabel: 'a',
    resultUnit: 'м/с²'
  },

  // =====================> СЛОЖНОЕ ДВИЖЕНИЕ
  {
    id: 'relative-velocity',
    section: 'mehanika',
    class: 10,
    title: 'Относительная скорость',
    formula: 'v = v₁ + v₂',
    inputs: [
      { key: 'v1', label: 'Скорость v₁', unit: 'м/с' },
      { key: 'v2', label: 'Скорость v₂', unit: 'м/с' }
    ],
    calc: (x) => x.v1 + x.v2,
    resultLabel: 'v',
    resultUnit: 'м/с'
  },
  {
    id: 'relative-velocity-opposite',
    section: 'mehanika',
    class: 10,
    title: 'Относительная скорость (навстречу)',
    formula: 'v = v₁ − v₂',
    inputs: [
      { key: 'v1', label: 'Скорость v₁', unit: 'м/с' },
      { key: 'v2', label: 'Скорость v₂', unit: 'м/с' }
    ],
    calc: (x) => x.v1 - x.v2,
    resultLabel: 'v',
    resultUnit: 'м/с'
  },
  {
    id: 'river-crossing',
    section: 'mehanika',
    class: 10,
    title: 'Переправа через реку',
    formula: 'v = √(v₁² + v₂²)',
    inputs: [
      { key: 'v1', label: 'Скорость лодки v₁', unit: 'м/с' },
      { key: 'v2', label: 'Скорость течения v₂', unit: 'м/с' }
    ],
    calc: (x) => Math.sqrt(x.v1 * x.v1 + x.v2 * x.v2),
    resultLabel: 'v',
    resultUnit: 'м/с'
  },

    // =====================> ТЕРМОДИНАМИКА (расширение)
  {
    id: 'heat-balance-equation',
    section: 'termo',
    class: 8,
    title: 'Уравнение теплового баланса',
    formula: 'Qотд = Qпогл',
    inputs: [
      { key: 'c1', label: 'Теплоёмкость c₁', unit: 'Дж/(кг·°C)' },
      { key: 'm1', label: 'Масса m₁', unit: 'кг' },
      { key: 't1', label: 'Начальная t₁', unit: '°C' },
      { key: 'c2', label: 'Теплоёмкость c₂', unit: 'Дж/(кг·°C)' },
      { key: 'm2', label: 'Масса m₂', unit: 'кг' },
      { key: 't2', label: 'Начальная t₂', unit: '°C' }
    ],
    calc: (x) => (x.c1 * x.m1 * x.t1 + x.c2 * x.m2 * x.t2) / (x.c1 * x.m1 + x.c2 * x.m2),
    resultLabel: 't',
    resultUnit: '°C'
  },
  {
    id: 'heat-total-melting',
    section: 'termo',
    class: 8,
    title: 'Теплота при нагреве и плавлении',
    formula: 'Q = c·m·Δt + λ·m',
    inputs: [
      { key: 'c', label: 'Теплоёмкость c', unit: 'Дж/(кг·°C)' },
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'dt', label: 'ΔТемпература Δt', unit: '°C' },
      { key: 'lambda', label: 'λ (плавление)', unit: 'Дж/кг' }
    ],
    calc: (x) => x.c * x.m * x.dt + x.lambda * x.m,
    resultLabel: 'Q',
    resultUnit: 'Дж'
  },
  {
    id: 'heat-total-vaporization',
    section: 'termo',
    class: 8,
    title: 'Теплота при нагреве и кипении',
    formula: 'Q = c·m·Δt + L·m',
    inputs: [
      { key: 'c', label: 'Теплоёмкость c', unit: 'Дж/(кг·°C)' },
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'dt', label: 'ΔТемпература Δt', unit: '°C' },
      { key: 'l', label: 'L (парообраз.)', unit: 'Дж/кг' }
    ],
    calc: (x) => x.c * x.m * x.dt + x.l * x.m,
    resultLabel: 'Q',
    resultUnit: 'Дж'
  },
  {
    id: 'efficiency-real-engine',
    section: 'termo',
    class: 10,
    title: 'КПД реального двигателя',
    formula: 'η = Aполез / Qзатр · 100%',
    inputs: [
      { key: 'ap', label: 'Полезная работа Aп', unit: 'Дж' },
      { key: 'qz', label: 'Затраченная теплота Qз', unit: 'Дж' }
    ],
    calc: (x) => x.ap / x.qz * 100,
    resultLabel: 'η',
    resultUnit: '%'
  },
  {
    id: 'power-engine',
    section: 'termo',
    class: 10,
    title: 'Мощность двигателя через КПД',
    formula: 'N = η·Q / (100·t)',
    inputs: [
      { key: 'eta', label: 'КПД η', unit: '%' },
      { key: 'q', label: 'Теплота Q', unit: 'Дж' },
      { key: 't', label: 'Время t', unit: 'с' }
    ],
    calc: (x) => x.eta * x.q / (100 * x.t),
    resultLabel: 'N',
    resultUnit: 'Вт'
  },
  {
    id: 'fuel-consumption',
    section: 'termo',
    class: 10,
    title: 'Расход топлива',
    formula: 'm = Q / (q·η/100)',
    inputs: [
      { key: 'q', label: 'Теплота Q', unit: 'Дж' },
      { key: 'qspec', label: 'Удельная q', unit: 'Дж/кг' },
      { key: 'eta', label: 'КПД η', unit: '%' }
    ],
    calc: (x) => x.q / (x.qspec * x.eta / 100),
    resultLabel: 'm',
    resultUnit: 'кг'
  },
  {
    id: 'entropy-change',
    section: 'termo',
    class: 10,
    title: 'Изменение энтропии',
    formula: 'ΔS = Q / T',
    inputs: [
      { key: 'q', label: 'Теплота Q', unit: 'Дж' },
      { key: 't', label: 'Температура T', unit: 'К' }
    ],
    calc: (x) => x.q / x.t,
    resultLabel: 'ΔS',
    resultUnit: 'Дж/К'
  },
  {
    id: 'thermal-conductivity',
    section: 'termo',
    class: 10,
    title: 'Теплопроводность (закон Фурье)',
    formula: 'Q = λ·S·Δt·t / d',
    inputs: [
      { key: 'lambda', label: 'Коэф. λ', unit: 'Вт/(м·К)' },
      { key: 's', label: 'Площадь S', unit: 'м²' },
      { key: 'dt', label: 'Разность ΔT', unit: 'К' },
      { key: 't', label: 'Время t', unit: 'с' },
      { key: 'd', label: 'Толщина d', unit: 'м' }
    ],
    calc: (x) => x.lambda * x.s * x.dt * x.t / x.d,
    resultLabel: 'Q',
    resultUnit: 'Дж'
  },
  {
    id: 'heat-transfer-coefficient',
    section: 'termo',
    class: 10,
    title: 'Количество теплоты (Ньютон-Рихман)',
    formula: 'Q = α·S·ΔT·t',
    inputs: [
      { key: 'alpha', label: 'Коэф. α', unit: 'Вт/(м²·К)' },
      { key: 's', label: 'Площадь S', unit: 'м²' },
      { key: 'dt', label: 'Разность ΔT', unit: 'К' },
      { key: 't', label: 'Время t', unit: 'с' }
    ],
    calc: (x) => x.alpha * x.s * x.dt * x.t,
    resultLabel: 'Q',
    resultUnit: 'Дж'
  },
  {
    id: 'radiation-energy',
    section: 'termo',
    class: 11,
    title: 'Энергия теплового излучения (Стефан-Больцман)',
    formula: 'P = σ·S·T⁴',
    inputs: [
      { key: 's', label: 'Площадь S', unit: 'м²' },
      { key: 't', label: 'Температура T', unit: 'К' }
    ],
    calc: (x) => 5.67e-8 * x.s * x.t * x.t * x.t * x.t,
    resultLabel: 'P',
    resultUnit: 'Вт'
  },
  {
    id: 'wien-law',
    section: 'termo',
    class: 11,
    title: 'Закон смещения Вина',
    formula: 'λmax = b / T',
    inputs: [
      { key: 't', label: 'Температура T', unit: 'К' }
    ],
    calc: (x) => 2.9e-3 / x.t,
    resultLabel: 'λmax',
    resultUnit: 'м'
  },
  {
    id: 'relative-humidity-temp',
    section: 'termo',
    class: 10,
    title: 'Относительная влажность через плотность',
    formula: 'φ = ρ / ρнас · 100%',
    inputs: [
      { key: 'rho', label: 'Плотность ρ', unit: 'кг/м³' },
      { key: 'rho0', label: 'Плотность насыщ. ρ₀', unit: 'кг/м³' }
    ],
    calc: (x) => x.rho / x.rho0 * 100,
    resultLabel: 'φ',
    resultUnit: '%'
  },
  {
    id: 'dew-point',
    section: 'termo',
    class: 10,
    title: 'Точка росы (приблизительно)',
    formula: 'tр = t − (100 − φ) / 5',
    inputs: [
      { key: 't', label: 'Температура t', unit: '°C' },
      { key: 'phi', label: 'Влажность φ', unit: '%' }
    ],
    calc: (x) => x.t - (100 - x.phi) / 5,
    resultLabel: 'tр',
    resultUnit: '°C'
  },
  {
    id: 'saturated-vapor-pressure',
    section: 'termo',
    class: 10,
    title: 'Парциальное давление пара',
    formula: 'p = φ·pнас / 100',
    inputs: [
      { key: 'phi', label: 'Влажность φ', unit: '%' },
      { key: 'p0', label: 'Давление насыщ. p₀', unit: 'Па' }
    ],
    calc: (x) => x.phi * x.p0 / 100,
    resultLabel: 'p',
    resultUnit: 'Па'
  },
  {
    id: 'van-der-waals',
    section: 'termo',
    class: 10,
    title: 'Уравнение Ван-дер-Ваальса',
    formula: '(p + a/V²)(V − b) = RT',
    inputs: [
      { key: 't', label: 'Температура T', unit: 'К' },
      { key: 'v', label: 'Объём V', unit: 'м³' },
      { key: 'a', label: 'Постоянная a', unit: 'Па·м⁶' },
      { key: 'b', label: 'Постоянная b', unit: 'м³' }
    ],
    calc: (x) => 8.31 * x.t / (x.v - x.b) - x.a / (x.v * x.v),
    resultLabel: 'p',
    resultUnit: 'Па'
  },
  {
    id: 'mean-free-path',
    section: 'termo',
    class: 10,
    title: 'Средняя длина свободного пробега',
    formula: 'λ = 1 / (√2·π·d²·n)',
    inputs: [
      { key: 'd', label: 'Диаметр d', unit: 'м' },
      { key: 'n', label: 'Концентрация n', unit: '1/м³' }
    ],
    calc: (x) => 1 / (Math.sqrt(2) * Math.PI * x.d * x.d * x.n),
    resultLabel: 'λ',
    resultUnit: 'м'
  },
  {
    id: 'ideal-gas-concentration',
    section: 'termo',
    class: 10,
    title: 'Концентрация молекул газа',
    formula: 'n = N / V',
    inputs: [
      { key: 'n', label: 'Число молекул N', unit: '' },
      { key: 'v', label: 'Объём V', unit: 'м³' }
    ],
    calc: (x) => x.n / x.v,
    resultLabel: 'n',
    resultUnit: '1/м³'
  },
  {
    id: 'average-kinetic-energy',
    section: 'termo',
    class: 10,
    title: 'Средняя кинетическая энергия молекулы',
    formula: 'Ek = (3/2)·k·T',
    inputs: [
      { key: 't', label: 'Температура T', unit: 'К' }
    ],
    calc: (x) => 1.5 * 1.38e-23 * x.t,
    resultLabel: 'Ek',
    resultUnit: 'Дж'
  },
  {
    id: 'rms-speed',
    section: 'termo',
    class: 10,
    title: 'Средняя квадратичная скорость',
    formula: 'v = √(3·k·T / m)',
    inputs: [
      { key: 't', label: 'Температура T', unit: 'К' },
      { key: 'm', label: 'Масса молекулы m', unit: 'кг' }
    ],
    calc: (x) => Math.sqrt(3 * 1.38e-23 * x.t / x.m),
    resultLabel: 'v',
    resultUnit: 'м/с'
  },
  {
    id: 'internal-energy-mono',
    section: 'termo',
    class: 10,
    title: 'Внутренняя энергия одноатомного газа',
    formula: 'U = (3/2)·ν·R·T',
    inputs: [
      { key: 'nu', label: 'Количество ν', unit: 'моль' },
      { key: 't', label: 'Температура T', unit: 'К' }
    ],
    calc: (x) => 1.5 * x.nu * 8.31 * x.t,
    resultLabel: 'U',
    resultUnit: 'Дж'
  },
  {
    id: 'internal-energy-di',
    section: 'termo',
    class: 10,
    title: 'Внутренняя энергия двухатомного газа',
    formula: 'U = (5/2)·ν·R·T',
    inputs: [
      { key: 'nu', label: 'Количество ν', unit: 'моль' },
      { key: 't', label: 'Температура T', unit: 'К' }
    ],
    calc: (x) => 2.5 * x.nu * 8.31 * x.t,
    resultLabel: 'U',
    resultUnit: 'Дж'
  },
  {
    id: 'adiabatic-work',
    section: 'termo',
    class: 10,
    title: 'Работа при адиабатном процессе',
    formula: 'A = −ΔU',
    inputs: [
      { key: 'du', label: 'Изменение ΔU', unit: 'Дж' }
    ],
    calc: (x) => -x.du,
    resultLabel: 'A',
    resultUnit: 'Дж'
  },
  {
    id: 'heat-engine-work',
    section: 'termo',
    class: 10,
    title: 'Работа теплового двигателя через КПД',
    formula: 'A = η·Q / 100',
    inputs: [
      { key: 'eta', label: 'КПД η', unit: '%' },
      { key: 'q', label: 'Теплота Q', unit: 'Дж' }
    ],
    calc: (x) => x.eta * x.q / 100,
    resultLabel: 'A',
    resultUnit: 'Дж'
  },

    // =====================> ЭЛЕКТРИЧЕСТВО (расширение)
  {
    id: 'ac-effective-voltage',
    section: 'electro',
    class: 11,
    title: 'Действующее значение напряжения',
    formula: 'Uд = U₀ / √2',
    inputs: [
      { key: 'u0', label: 'Амплитуда U₀', unit: 'В' }
    ],
    calc: (x) => x.u0 / Math.sqrt(2),
    resultLabel: 'Uд',
    resultUnit: 'В'
  },
  {
    id: 'ac-effective-current',
    section: 'electro',
    class: 11,
    title: 'Действующее значение тока',
    formula: 'Iд = I₀ / √2',
    inputs: [
      { key: 'i0', label: 'Амплитуда I₀', unit: 'А' }
    ],
    calc: (x) => x.i0 / Math.sqrt(2),
    resultLabel: 'Iд',
    resultUnit: 'А'
  },
  {
    id: 'ac-amplitude-from-effective',
    section: 'electro',
    class: 11,
    title: 'Амплитуда через действующее значение',
    formula: 'U₀ = Uд · √2',
    inputs: [
      { key: 'ud', label: 'Действующее Uд', unit: 'В' }
    ],
    calc: (x) => x.ud * Math.sqrt(2),
    resultLabel: 'U₀',
    resultUnit: 'В'
  },
  {
    id: 'capacitive-reactance',
    section: 'electro',
    class: 11,
    title: 'Ёмкостное сопротивление',
    formula: 'Xc = 1 / (ω·C)',
    inputs: [
      { key: 'w', label: 'Частота ω', unit: 'рад/с' },
      { key: 'c', label: 'Ёмкость C', unit: 'Ф' }
    ],
    calc: (x) => 1 / (x.w * x.c),
    resultLabel: 'Xc',
    resultUnit: 'Ом'
  },
  {
    id: 'inductive-reactance',
    section: 'electro',
    class: 11,
    title: 'Индуктивное сопротивление',
    formula: 'Xl = ω·L',
    inputs: [
      { key: 'w', label: 'Частота ω', unit: 'рад/с' },
      { key: 'l', label: 'Индуктивность L', unit: 'Гн' }
    ],
    calc: (x) => x.w * x.l,
    resultLabel: 'Xl',
    resultUnit: 'Ом'
  },
  {
    id: 'impedance-rc',
    section: 'electro',
    class: 11,
    title: 'Полное сопротивление (RC)',
    formula: 'Z = √(R² + Xc²)',
    inputs: [
      { key: 'r', label: 'Сопротивление R', unit: 'Ом' },
      { key: 'xc', label: 'Ёмкостное Xc', unit: 'Ом' }
    ],
    calc: (x) => Math.sqrt(x.r * x.r + x.xc * x.xc),
    resultLabel: 'Z',
    resultUnit: 'Ом'
  },
  {
    id: 'impedance-rl',
    section: 'electro',
    class: 11,
    title: 'Полное сопротивление (RL)',
    formula: 'Z = √(R² + Xl²)',
    inputs: [
      { key: 'r', label: 'Сопротивление R', unit: 'Ом' },
      { key: 'xl', label: 'Индуктивное Xl', unit: 'Ом' }
    ],
    calc: (x) => Math.sqrt(x.r * x.r + x.xl * x.xl),
    resultLabel: 'Z',
    resultUnit: 'Ом'
  },
  {
    id: 'impedance-rlc',
    section: 'electro',
    class: 11,
    title: 'Полное сопротивление (RLC)',
    formula: 'Z = √(R² + (Xl − Xc)²)',
    inputs: [
      { key: 'r', label: 'Сопротивление R', unit: 'Ом' },
      { key: 'xl', label: 'Индуктивное Xl', unit: 'Ом' },
      { key: 'xc', label: 'Ёмкостное Xc', unit: 'Ом' }
    ],
    calc: (x) => Math.sqrt(x.r * x.r + (x.xl - x.xc) * (x.xl - x.xc)),
    resultLabel: 'Z',
    resultUnit: 'Ом'
  },
  {
    id: 'ac-ohm-law',
    section: 'electro',
    class: 11,
    title: 'Закон Ома для переменного тока',
    formula: 'Iд = Uд / Z',
    inputs: [
      { key: 'ud', label: 'Напряжение Uд', unit: 'В' },
      { key: 'z', label: 'Сопротивление Z', unit: 'Ом' }
    ],
    calc: (x) => x.ud / x.z,
    resultLabel: 'Iд',
    resultUnit: 'А'
  },
  {
    id: 'ac-power',
    section: 'electro',
    class: 11,
    title: 'Мощность переменного тока',
    formula: 'P = Uд·Iд·cos φ',
    inputs: [
      { key: 'ud', label: 'Напряжение Uд', unit: 'В' },
      { key: 'id', label: 'Ток Iд', unit: 'А' },
      { key: 'phi', label: 'Сдвиг φ', unit: '°' }
    ],
    calc: (x) => x.ud * x.id * Math.cos(x.phi * Math.PI / 180),
    resultLabel: 'P',
    resultUnit: 'Вт'
  },
  {
    id: 'thomson-formula',
    section: 'electro',
    class: 11,
    title: 'Формула Томсона (период LC)',
    formula: 'T = 2π·√(L·C)',
    inputs: [
      { key: 'l', label: 'Индуктивность L', unit: 'Гн' },
      { key: 'c', label: 'Ёмкость C', unit: 'Ф' }
    ],
    calc: (x) => 2 * Math.PI * Math.sqrt(x.l * x.c),
    resultLabel: 'T',
    resultUnit: 'с'
  },
  {
    id: 'lc-frequency',
    section: 'electro',
    class: 11,
    title: 'Частота колебательного контура',
    formula: 'ν = 1 / (2π·√(L·C))',
    inputs: [
      { key: 'l', label: 'Индуктивность L', unit: 'Гн' },
      { key: 'c', label: 'Ёмкость C', unit: 'Ф' }
    ],
    calc: (x) => 1 / (2 * Math.PI * Math.sqrt(x.l * x.c)),
    resultLabel: 'ν',
    resultUnit: 'Гц'
  },
  {
    id: 'resonance-frequency',
    section: 'electro',
    class: 11,
    title: 'Резонансная частота',
    formula: 'ω₀ = 1 / √(L·C)',
    inputs: [
      { key: 'l', label: 'Индуктивность L', unit: 'Гн' },
      { key: 'c', label: 'Ёмкость C', unit: 'Ф' }
    ],
    calc: (x) => 1 / Math.sqrt(x.l * x.c),
    resultLabel: 'ω₀',
    resultUnit: 'рад/с'
  },
  {
    id: 'faraday-electrolysis',
    section: 'electro',
    class: 10,
    title: 'Первый закон Фарадея (электролиз)',
    formula: 'm = k · I · t',
    inputs: [
      { key: 'k', label: 'Электрохим. эквивалент k', unit: 'кг/Кл' },
      { key: 'i', label: 'Сила тока I', unit: 'А' },
      { key: 't', label: 'Время t', unit: 'с' }
    ],
    calc: (x) => x.k * x.i * x.t,
    resultLabel: 'm',
    resultUnit: 'кг'
  },
  {
    id: 'electrochemical-equivalent',
    section: 'electro',
    class: 10,
    title: 'Электрохимический эквивалент',
    formula: 'k = M / (n·F)',
    inputs: [
      { key: 'm', label: 'Молярная масса M', unit: 'кг/моль' },
      { key: 'n', label: 'Валентность n', unit: '' }
    ],
    calc: (x) => x.m / (x.n * 96500),
    resultLabel: 'k',
    resultUnit: 'кг/Кл'
  },
  {
    id: 'charge-through-electrolysis',
    section: 'electro',
    class: 10,
    title: 'Заряд при электролизе',
    formula: 'q = I · t',
    inputs: [
      { key: 'i', label: 'Сила тока I', unit: 'А' },
      { key: 't', label: 'Время t', unit: 'с' }
    ],
    calc: (x) => x.i * x.t,
    resultLabel: 'q',
    resultUnit: 'Кл'
  },
  {
    id: 'semiconductor-resistance-temp',
    section: 'electro',
    class: 11,
    title: 'Сопротивление полупроводника (зависимость от T)',
    formula: 'R = R₀·e^(B/T)',
    inputs: [
      { key: 'r0', label: 'Сопротивление R₀', unit: 'Ом' },
      { key: 'b', label: 'Константа B', unit: 'К' },
      { key: 't', label: 'Температура T', unit: 'К' }
    ],
    calc: (x) => x.r0 * Math.exp(x.b / x.t),
    resultLabel: 'R',
    resultUnit: 'Ом'
  },
  {
    id: 'metal-resistance-temp',
    section: 'electro',
    class: 11,
    title: 'Сопротивление металла (зависимость от T)',
    formula: 'R = R₀·(1 + α·ΔT)',
    inputs: [
      { key: 'r0', label: 'Сопротивление R₀', unit: 'Ом' },
      { key: 'alpha', label: 'Коэф. α', unit: '1/К' },
      { key: 'dt', label: 'Изменение ΔT', unit: 'К' }
    ],
    calc: (x) => x.r0 * (1 + x.alpha * x.dt),
    resultLabel: 'R',
    resultUnit: 'Ом'
  },
  {
    id: 'ionization-energy-ev',
    section: 'electro',
    class: 11,
    title: 'Энергия ионизации (эВ)',
    formula: 'W = q·U',
    inputs: [
      { key: 'u', label: 'Напряжение U', unit: 'В' }
    ],
    calc: (x) => 1.6e-19 * x.u,
    resultLabel: 'W',
    resultUnit: 'Дж'
  },
  {
    id: 'current-density',
    section: 'electro',
    class: 11,
    title: 'Плотность тока',
    formula: 'j = I / S',
    inputs: [
      { key: 'i', label: 'Сила тока I', unit: 'А' },
      { key: 's', label: 'Площадь S', unit: 'м²' }
    ],
    calc: (x) => x.i / x.s,
    resultLabel: 'j',
    resultUnit: 'А/м²'
  },
  {
    id: 'electron-drift-speed',
    section: 'electro',
    class: 11,
    title: 'Скорость дрейфа электронов',
    formula: 'v = I / (n·e·S)',
    inputs: [
      { key: 'i', label: 'Сила тока I', unit: 'А' },
      { key: 'n', label: 'Концентрация n', unit: '1/м³' },
      { key: 's', label: 'Площадь S', unit: 'м²' }
    ],
    calc: (x) => x.i / (x.n * 1.6e-19 * x.s),
    resultLabel: 'v',
    resultUnit: 'м/с'
  },

    // =====================> АСТРОНОМИЯ
  {
    id: 'kepler-third-law',
    section: 'astro',
    class: 11,
    title: 'Третий закон Кеплера',
    formula: 'T₁² / T₂² = a₁³ / a₂³',
    inputs: [
      { key: 't1', label: 'Период T₁', unit: 'лет' },
      { key: 'a1', label: 'Большая полуось a₁', unit: 'а.е.' },
      { key: 'a2', label: 'Большая полуось a₂', unit: 'а.е.' }
    ],
    calc: (x) => x.t1 * Math.sqrt(Math.pow(x.a2 / x.a1, 3)),
    resultLabel: 'T₂',
    resultUnit: 'лет'
  },
  {
    id: 'first-cosmic-speed',
    section: 'astro',
    class: 11,
    title: 'Первая космическая скорость',
    formula: 'v₁ = √(g·R)',
    inputs: [
      { key: 'g', label: 'Ускорение g', unit: 'м/с²' },
      { key: 'r', label: 'Радиус планеты R', unit: 'м' }
    ],
    calc: (x) => Math.sqrt(x.g * x.r),
    resultLabel: 'v₁',
    resultUnit: 'м/с'
  },
  {
    id: 'second-cosmic-speed',
    section: 'astro',
    class: 11,
    title: 'Вторая космическая скорость',
    formula: 'v₂ = √(2·g·R)',
    inputs: [
      { key: 'g', label: 'Ускорение g', unit: 'м/с²' },
      { key: 'r', label: 'Радиус планеты R', unit: 'м' }
    ],
    calc: (x) => Math.sqrt(2 * x.g * x.r),
    resultLabel: 'v₂',
    resultUnit: 'м/с'
  },
  {
    id: 'orbital-period',
    section: 'astro',
    class: 11,
    title: 'Период обращения спутника',
    formula: 'T = 2π·√(R³ / (G·M))',
    inputs: [
      { key: 'r', label: 'Радиус орбиты R', unit: 'м' },
      { key: 'm', label: 'Масса планеты M', unit: 'кг' }
    ],
    calc: (x) => 2 * Math.PI * Math.sqrt(Math.pow(x.r, 3) / (6.67e-11 * x.m)),
    resultLabel: 'T',
    resultUnit: 'с'
  },
  {
    id: 'parsec',
    section: 'astro',
    class: 11,
    title: 'Парсек (расстояние)',
    formula: '1 пк = 3.26 св. лет',
    inputs: [
      { key: 'ly', label: 'Световых лет', unit: 'св.лет' }
    ],
    calc: (x) => x.ly / 3.26,
    resultLabel: 'Парсек',
    resultUnit: 'пк'
  },
  {
    id: 'light-year',
    section: 'astro',
    class: 11,
    title: 'Световой год',
    formula: '1 св. год = c · t',
    inputs: [
      { key: 'years', label: 'Лет', unit: 'лет' }
    ],
    calc: (x) => x.years * 9.461e15,
    resultLabel: 'Расстояние',
    resultUnit: 'м'
  },
  {
    id: 'hubble-law',
    section: 'astro',
    class: 11,
    title: 'Закон Хаббла',
    formula: 'v = H·r (H = 70)',
    inputs: [
      { key: 'r', label: 'Расстояние r', unit: 'Мпк' }
    ],
    calc: (x) => 70 * x.r,
    resultLabel: 'v',
    resultUnit: 'км/с'
  },
  
  {
    id: 'luminosity',
    section: 'astro',
    class: 11,
    title: 'Светимость звезды',
    formula: 'L = 4π·R²·σ·T⁴',
    inputs: [
      { key: 'r', label: 'Радиус R', unit: 'м' },
      { key: 't', label: 'Температура T', unit: 'К' }
    ],
    calc: (x) => 4 * Math.PI * x.r * x.r * 5.67e-8 * Math.pow(x.t, 4),
    resultLabel: 'L',
    resultUnit: 'Вт'
  },
  {
    id: 'solar-mass-loss',
    section: 'astro',
    class: 11,
    title: 'Потеря массы Солнца',
    formula: 'Δm = E / c²',
    inputs: [
      { key: 'e', label: 'Энергия E', unit: 'Дж' }
    ],
    calc: (x) => x.e / 9e16,
    resultLabel: 'Δm',
    resultUnit: 'кг'
  },
  {
    id: 'escape-velocity-from-sun',
    section: 'astro',
    class: 11,
    title: 'Скорость ухода с орбиты',
    formula: 'v = √(G·M / R)',
    inputs: [
      { key: 'm', label: 'Масса M', unit: 'кг' },
      { key: 'r', label: 'Радиус R', unit: 'м' }
    ],
    calc: (x) => Math.sqrt(6.67e-11 * x.m / x.r),
    resultLabel: 'v',
    resultUnit: 'м/с'
  },

    // =====================> ОПТИКА (расширение)
  {
    id: 'polarization-malus',
    section: 'optika',
    class: 11,
    title: 'Закон Малюса (поляризация)',
    formula: 'I = I₀·cos² α',
    inputs: [
      { key: 'i0', label: 'Интенсивность I₀', unit: 'Вт/м²' },
      { key: 'a', label: 'Угол α', unit: '°' }
    ],
    calc: (x) => x.i0 * Math.pow(Math.cos(x.a * Math.PI / 180), 2),
    resultLabel: 'I',
    resultUnit: 'Вт/м²'
  },
  {
    id: 'brewster-angle',
    section: 'optika',
    class: 11,
    title: 'Угол Брюстера',
    formula: 'tg θ = n₂ / n₁',
    inputs: [
      { key: 'n1', label: 'n₁', unit: '' },
      { key: 'n2', label: 'n₂', unit: '' }
    ],
    calc: (x) => Math.atan(x.n2 / x.n1) * 180 / Math.PI,
    resultLabel: 'θ',
    resultUnit: '°'
  },
  {
    id: 'path-difference',
    section: 'optika',
    class: 11,
    title: 'Оптическая разность хода',
    formula: 'Δ = n·d',
    inputs: [
      { key: 'n', label: 'Показатель n', unit: '' },
      { key: 'd', label: 'Толщина d', unit: 'м' }
    ],
    calc: (x) => x.n * x.d,
    resultLabel: 'Δ',
    resultUnit: 'м'
  },
  {
    id: 'thin-film-max',
    section: 'optika',
    class: 11,
    title: 'Максимум в тонкой плёнке',
    formula: '2·n·d = k·λ',
    inputs: [
      { key: 'n', label: 'Показатель n', unit: '' },
      { key: 'k', label: 'Порядок k', unit: '' },
      { key: 'lambda', label: 'Длина волны λ', unit: 'м' }
    ],
    calc: (x) => x.k * x.lambda / (2 * x.n),
    resultLabel: 'd',
    resultUnit: 'м'
  },
  {
    id: 'thin-film-min',
    section: 'optika',
    class: 11,
    title: 'Минимум в тонкой плёнке',
    formula: '2·n·d = (2k+1)·λ / 2',
    inputs: [
      { key: 'n', label: 'Показатель n', unit: '' },
      { key: 'k', label: 'Порядок k', unit: '' },
      { key: 'lambda', label: 'Длина волны λ', unit: 'м' }
    ],
    calc: (x) => (2 * x.k + 1) * x.lambda / (4 * x.n),
    resultLabel: 'd',
    resultUnit: 'м'
  },
  {
    id: 'grating-resolution',
    section: 'optika',
    class: 11,
    title: 'Разрешающая способность решётки',
    formula: 'R = k·N',
    inputs: [
      { key: 'k', label: 'Порядок k', unit: '' },
      { key: 'n', label: 'Число штрихов N', unit: '' }
    ],
    calc: (x) => x.k * x.n,
    resultLabel: 'R',
    resultUnit: ''
  },
  {
    id: 'microscope-magnification',
    section: 'optika',
    class: 11,
    title: 'Увеличение микроскопа',
    formula: 'Γ = Γоб · Γок',
    inputs: [
      { key: 'gob', label: 'Увеличение объектива', unit: '' },
      { key: 'gok', label: 'Увеличение окуляра', unit: '' }
    ],
    calc: (x) => x.gob * x.gok,
    resultLabel: 'Γ',
    resultUnit: ''
  },
  {
    id: 'telescope-magnification',
    section: 'optika',
    class: 11,
    title: 'Увеличение телескопа',
    formula: 'Γ = Fоб / Fок',
    inputs: [
      { key: 'fob', label: 'Фокус объектива', unit: 'м' },
      { key: 'fok', label: 'Фокус окуляра', unit: 'м' }
    ],
    calc: (x) => x.fob / x.fok,
    resultLabel: 'Γ',
    resultUnit: ''
  },
  {
    id: 'energy-illumination',
    section: 'optika',
    class: 11,
    title: 'Освещённость',
    formula: 'E = I / R²',
    inputs: [
      { key: 'i', label: 'Сила света I', unit: 'кд' },
      { key: 'r', label: 'Расстояние R', unit: 'м' }
    ],
    calc: (x) => x.i / (x.r * x.r),
    resultLabel: 'E',
    resultUnit: 'лк'
  },
  {
    id: 'diffraction-condition',
    section: 'optika',
    class: 11,
    title: 'Условие дифракции',
    formula: 'd·sin φ = k·λ',
    inputs: [
      { key: 'd', label: 'Период d', unit: 'м' },
      { key: 'k', label: 'Порядок k', unit: '' },
      { key: 'lambda', label: 'Длина λ', unit: 'м' }
    ],
    calc: (x) => Math.asin(x.k * x.lambda / x.d) * 180 / Math.PI,
    resultLabel: 'φ',
    resultUnit: '°'
  },

    // =====================> АТОМНАЯ (расширение)
  {
    id: 'nuclear-fission-energy',
    section: 'atom',
    class: 11,
    title: 'Энергия деления ядра',
    formula: 'E = Δm · c²',
    inputs: [
      { key: 'dm', label: 'Дефект массы Δm', unit: 'а.е.м.' }
    ],
    calc: (x) => x.dm * 931.5,
    resultLabel: 'E',
    resultUnit: 'МэВ'
  },
  {
    id: 'nuclear-fusion-energy',
    section: 'atom',
    class: 11,
    title: 'Энергия термоядерного синтеза',
    formula: 'Q = (Σmнач − Σmкон) · c²',
    inputs: [
      { key: 'm1', label: 'Масса до', unit: 'а.е.м.' },
      { key: 'm2', label: 'Масса после', unit: 'а.е.м.' }
    ],
    calc: (x) => (x.m1 - x.m2) * 931.5,
    resultLabel: 'Q',
    resultUnit: 'МэВ'
  },
  {
    id: 'mass-number',
    section: 'atom',
    class: 11,
    title: 'Массовое число',
    formula: 'A = Z + N',
    inputs: [
      { key: 'z', label: 'Протоны Z', unit: '' },
      { key: 'n', label: 'Нейтроны N', unit: '' }
    ],
    calc: (x) => x.z + x.n,
    resultLabel: 'A',
    resultUnit: ''
  },
  {
    id: 'neutron-number',
    section: 'atom',
    class: 11,
    title: 'Число нейтронов',
    formula: 'N = A − Z',
    inputs: [
      { key: 'a', label: 'Массовое число A', unit: '' },
      { key: 'z', label: 'Протоны Z', unit: '' }
    ],
    calc: (x) => x.a - x.z,
    resultLabel: 'N',
    resultUnit: ''
  },
  {
    id: 'specific-activity',
    section: 'atom',
    class: 11,
    title: 'Удельная активность',
    formula: 'a = A / m',
    inputs: [
      { key: 'a', label: 'Активность A', unit: 'Бк' },
      { key: 'm', label: 'Масса m', unit: 'кг' }
    ],
    calc: (x) => x.a / x.m,
    resultLabel: 'a',
    resultUnit: 'Бк/кг'
  },
  {
    id: 'absorbed-dose',
    section: 'atom',
    class: 11,
    title: 'Поглощённая доза излучения',
    formula: 'D = E / m',
    inputs: [
      { key: 'e', label: 'Энергия E', unit: 'Дж' },
      { key: 'm', label: 'Масса m', unit: 'кг' }
    ],
    calc: (x) => x.e / x.m,
    resultLabel: 'D',
    resultUnit: 'Гр'
  },
  {
    id: 'equivalent-dose',
    section: 'atom',
    class: 11,
    title: 'Эквивалентная доза',
    formula: 'H = D · k',
    inputs: [
      { key: 'd', label: 'Поглощённая D', unit: 'Гр' },
      { key: 'k', label: 'Коэф. k', unit: '' }
    ],
    calc: (x) => x.d * x.k,
    resultLabel: 'H',
    resultUnit: 'Зв'
  },
  {
    id: 'activity-mass',
    section: 'atom',
    class: 11,
    title: 'Активность через массу',
    formula: 'A = λ·N = λ·m·Nа / M',
    inputs: [
      { key: 'lambda', label: 'Постоянная λ', unit: '1/с' },
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'M', label: 'Молярная масса', unit: 'кг/моль' }
    ],
    calc: (x) => x.lambda * x.m * 6.02e23 / x.M,
    resultLabel: 'A',
    resultUnit: 'Бк'
  },
  {
    id: 'number-of-atoms',
    section: 'atom',
    class: 11,
    title: 'Число атомов через массу',
    formula: 'N = m·Nа / M',
    inputs: [
      { key: 'm', label: 'Масса m', unit: 'кг' },
      { key: 'M', label: 'Молярная масса', unit: 'кг/моль' }
    ],
    calc: (x) => x.m * 6.02e23 / x.M,
    resultLabel: 'N',
    resultUnit: ''
  },
  {
    id: 'decay-time',
    section: 'atom',
    class: 11,
    title: 'Время распада через N',
    formula: 't = T·log₂(N₀ / N)',
    inputs: [
      { key: 't', label: 'Период T', unit: 'с' },
      { key: 'n0', label: 'Начальное N₀', unit: '' },
      { key: 'n', label: 'Конечное N', unit: '' }
    ],
    calc: (x) => x.t * Math.log2(x.n0 / x.n),
    resultLabel: 't',
    resultUnit: 'с'
  }

];