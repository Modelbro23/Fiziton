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
  }

];