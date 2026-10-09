// ============================================================
// ДВИЖОК ФОРМУЛЯРА
// ============================================================
// Отвечает за:
//   • Рендер карточек формул (по разделам)
//   • Поиск внутри раздела + фильтр по классу
//   • Избранное (сохранение в localStorage)
//   • Подстановку материалов (вода, медь, алюминий и т.д.)
//   • Автосчётчики формул в заголовках
//   • Глобальный поиск по всем разделам (для calculator.html)
//   • Горячие клавиши (/, Ctrl+K, Esc)
//
// Зависимости:
//   • formulas.js  — массив формул (загружается до)
//   • materials.js — справочник материалов (загружается до)
// ============================================================


// ============================================================
// ИЗБРАННОЕ
// ============================================================
// Хранится в localStorage под ключом 'fiziton-favorites'.
// Формат: массив id формул, например ['speed', 'ohm-law'].

// Возвращает список id избранных формул.
// При ошибке парсинга (битые данные) возвращает пустой массив.
function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem('fiziton-favorites') || '[]');
  } catch (e) {
    return [];
  }
}

// Сохраняет список id в localStorage.
function saveFavorites(list) {
  localStorage.setItem('fiziton-favorites', JSON.stringify(list));
}

// Проверяет, находится ли формула в избранном.
function isFavorite(id) {
  return getFavorites().includes(id);
}

// Добавляет / удаляет формулу из избранного и меняет иконку кнопки.
function toggleFavorite(id, btn) {
  const list = getFavorites();
  const index = list.indexOf(id);

  if (index === -1) {
    // Не в избранном → добавляем
    list.push(id);
    btn.classList.add('active');
    btn.textContent = '★';
  } else {
    // Уже в избранном → убираем
    list.splice(index, 1);
    btn.classList.remove('active');
    btn.textContent = '☆';
  }

  saveFavorites(list);
}


// ============================================================
// СКЛОНЕНИЕ СЛОВ
// ============================================================

// Возвращает правильную форму слова «формула» для числа n.
// 1 → «формула», 2–4 → «формулы», остальное → «формул».
function pluralFormulas(n) {
  const mod10 = n % 10;
  const mod100 = n % 100;

  if (mod10 === 1 && mod100 !== 11) return 'формула';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'формулы';
  return 'формул';
}


// ============================================================
// АВТОСЧЁТЧИКИ ФОРМУЛ
// ============================================================

// Обновляет <p id="section-count"> в шапке раздела.
// Например, «119 формул».
function updateSectionCount(sectionName) {
  const count = formulas.filter(f => f.section === sectionName).length;
  const el = document.getElementById('section-count');
  if (el) {
    el.textContent = `${count} ${pluralFormulas(count)}`;
  }
}

// Обновляет счётчики на странице calculator.html
// (по одному <p id="count-XXX"> на каждый раздел).
function updateCalculatorCounts() {
  const sections = ['mehanika', 'termo', 'electro', 'optika', 'atom', 'astro'];

  sections.forEach(s => {
    const count = formulas.filter(f => f.section === s).length;
    const el = document.getElementById(`count-${s}`);
    if (el) {
      el.textContent = `${count} ${pluralFormulas(count)}`;
    }
  });
}


// ============================================================
// РЕНДЕР КАРТОЧКИ ФОРМУЛЫ
// ============================================================

// Создаёт HTML одной карточки-калькулятора.
// Включает: заголовок, формулу, поля ввода, кнопки материалов,
// кнопку «Рассчитать», звёздочку избранного.
function makeCardHtml(f) {
  // Собираем HTML для всех полей ввода
  const inputsHtml = f.inputs.map(inp => {
    // Ищем материалы для этого поля.
    // Сначала по ключу «формула.поле», потом по общему ключу.
    // Пример: 'rms-speed.m' или 'rho'.
    const mats = (typeof MATERIALS !== 'undefined')
      ? (MATERIALS[f.id + '.' + inp.key] || MATERIALS[inp.key] || null)
      : null;

    // Кнопки материалов (если есть)
    const materialButtons = mats
      ? `<div class="materials">
           ${mats.map(m => `
             <button
               type="button"
               class="material-btn"
               onclick="applyMaterial('${f.id}', '${inp.key}', ${m.value})"
             >${m.name}</button>
           `).join('')}
         </div>`
      : '';

    return `
      <label>${inp.label}${inp.unit ? ' (' + inp.unit + ')' : ''}:
        ${materialButtons}
        <input type="number" id="in-${f.id}-${inp.key}" placeholder="0" step="any">
      </label>
    `;
  }).join('');

  // Состояние избранного
  const fav = isFavorite(f.id) ? 'active' : '';
  const star = isFavorite(f.id) ? '★' : '☆';

  return `
    <section class="calc" data-search="${(f.title + ' ' + f.formula + ' ' + f.id).toLowerCase()}" data-class="${f.class}">
      <h2>${f.title}</h2>
      <div class="formula-wrap">
        <p class="formula">${f.formula}</p>
        <button class="fav-btn-inline ${fav}" onclick="toggleFavorite('${f.id}', this)" title="В избранное">${star}</button>
      </div>
      ${inputsHtml}
      <button class="calc-btn" onclick="calcFormula('${f.id}')">Рассчитать</button>
      <p class="result" id="out-${f.id}">Ответ тут</p>
    </section>
  `;
}


// ============================================================
// РЕНДЕР РАЗДЕЛА
// ============================================================
// Строит всю страницу раздела: поиск, фильтр по классу, карточки.
// Также навешивает обработчики поиска и горячих клавиш.

function renderSection(sectionName, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Формулы этого раздела
  const list = formulas.filter(f => f.section === sectionName);

  if (list.length === 0) {
    container.innerHTML = '<p style="color:var(--muted); padding: 40px;">Формул пока нет</p>';
    return;
  }

  // Уникальные классы (7, 8, 9, 10, 11) — для фильтра
  const classes = [...new Set(list.map(f => f.class))].sort((a, b) => a - b);

  // Панель: поиск + фильтр по классу
  const panelHtml = `
    <div class="search-wrap">
      <input
        type="text"
        id="search-input"
        class="search-input"
        placeholder="Поиск по названию или формуле... (Ctrl+K)"
        autocomplete="off"
      >
      <span class="search-count" id="search-count"></span>
    </div>
    <div class="class-filter" id="class-filter">
      <button class="class-btn active" data-class="all">Все</button>
      ${classes.map(c => `<button class="class-btn" data-class="${c}">${c} класс</button>`).join('')}
    </div>
  `;

  // Карточки формул
  const cardsHtml = list.map(makeCardHtml).join('');

  // Вставляем всё в контейнер
  container.innerHTML = panelHtml + `<div class="calcs" id="calc-grid">${cardsHtml}</div>`;

  // Ссылки на ключевые элементы
  const input = document.getElementById('search-input');
  const count = document.getElementById('search-count');
  const grid = document.getElementById('calc-grid');
  const filterBtns = document.querySelectorAll('.class-btn');
  let activeClass = 'all';


  // ----------------------------------------------------------
  // ФИЛЬТРАЦИЯ (поиск + класс)
  // ----------------------------------------------------------
  function applyFilters() {
    const q = input.value.trim().toLowerCase();
    const cards = grid.querySelectorAll('.calc');
    let visible = 0;

    cards.forEach(card => {
      const key = card.getAttribute('data-search');
      const cls = card.getAttribute('data-class');

      const matchSearch = key.includes(q);
      const matchClass = (activeClass === 'all') || (cls === activeClass);
      const match = matchSearch && matchClass;

      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });

    // Обновляем счётчик
    if (q === '' && activeClass === 'all') {
      count.textContent = `Всего: ${cards.length}`;
    } else {
      count.textContent = `Найдено: ${visible} из ${cards.length}`;
    }

    // Показываем сообщение «ничего не найдено»
    const empty = document.getElementById('search-empty');
    if (visible === 0) {
      if (!empty) {
        const p = document.createElement('p');
        p.id = 'search-empty';
        p.style.cssText = 'color: var(--muted); padding: 40px; text-align: center; grid-column: 1 / -1; font-family: JetBrains Mono, monospace; font-size: 14px;';
        p.textContent = 'Ничего не найдено. Попробуй другой запрос.';
        grid.appendChild(p);
      }
    } else if (empty) {
      empty.remove();
    }
  }

  input.addEventListener('input', applyFilters);


  // ----------------------------------------------------------
  // ГОРЯЧИЕ КЛАВИШИ (/, Ctrl+K, Esc)
  // ----------------------------------------------------------
  // Перехватываем на уровне capture, чтобы поймать событие
  // раньше Firefox (он открывает свой поиск на Ctrl+K).
  // Обработчик сохраняется один раз в window._fizitonKeyHandler,
  // чтобы не дублироваться при повторных вызовах renderSection.
  if (!window._fizitonKeyHandler) {
    window._fizitonKeyHandler = function(e) {
      const searchInput = document.getElementById('search-input');
      if (!searchInput) return;

      // Фокус + плавная прокрутка к поиску
      function focusAndScrollToSearch() {
        const searchWrap = document.querySelector('.search-wrap');
        if (searchWrap) {
          searchWrap.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
        searchInput.focus({ preventScroll: true });
        searchInput.select();
      }

      // Esc — очистить и снять фокус
      if (e.key === 'Escape' && document.activeElement === searchInput) {
        e.preventDefault();
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
        searchInput.blur();
        return false;
      }

      // Проверяем, не пишет ли пользователь в какое-то поле
      const tag = document.activeElement ? document.activeElement.tagName : '';
      const isTyping = (tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement.isContentEditable);

      // Слэш / — фокус на поиск
      if (e.key === '/' && !isTyping) {
        e.preventDefault();
        e.stopPropagation();
        focusAndScrollToSearch();
        return false;
      }

      // Ctrl+K (или Cmd+K) — тоже фокус
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K' || e.keyCode === 75)) {
        e.preventDefault();
        e.stopPropagation();
        e.cancelBubble = true;
        focusAndScrollToSearch();

        // Firefox: повторный фокус через 0 мс (на случай, если он всё равно
        // успел открыть свой поиск)
        setTimeout(() => {
          if (document.activeElement !== searchInput) {
            searchInput.focus({ preventScroll: true });
            searchInput.select();
          }
        }, 0);

        return false;
      }
    };

    // capture: true — перехват до обработчиков Firefox
    document.addEventListener('keydown', window._fizitonKeyHandler, true);
    window.addEventListener('keydown', window._fizitonKeyHandler, true);
  }


  // ----------------------------------------------------------
  // ФИЛЬТР ПО КЛАССУ (кнопки)
  // ----------------------------------------------------------
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeClass = btn.getAttribute('data-class');
      applyFilters();
    });
  });

  // Первичный прогон — чтобы счётчик сразу показал «Всего: N»
  applyFilters();
  updateSectionCount(sectionName);
}


// ============================================================
// СТРАНИЦА ИЗБРАННОГО
// ============================================================

// Рисует список всех избранных формул.
// Если избранного нет — показывает заглушку.
function renderFavorites(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const favIds = getFavorites();
  const list = formulas.filter(f => favIds.includes(f.id));

  // Пусто — показываем заглушку
  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-fav">
        <p>У тебя пока нет избранных формул.</p>
        <p>Открой любой раздел и нажми <span style="color:var(--gold)">☆</span> на карточке.</p>
        <a href="calculator.html" class="back" style="margin-top: 24px;">→ в формуляр</a>
      </div>
    `;
    return;
  }

  // Строим карточки (упрощённые — без материалов и фильтра)
  const cardsHtml = list.map(f => {
    const inputsHtml = f.inputs.map(inp => `
      <label>${inp.label}${inp.unit ? ' (' + inp.unit + ')' : ''}:
        <input type="number" id="in-${f.id}-${inp.key}" placeholder="0" step="any">
      </label>
    `).join('');

    return `
      <section class="calc">
        <h2>${f.title}</h2>
        <div class="formula-wrap">
          <p class="formula">${f.formula}</p>
          <button class="fav-btn-inline active" onclick="toggleFavorite('${f.id}', this); setTimeout(() => renderFavorites('${containerId}'), 100);" title="Убрать из избранного">★</button>
        </div>
        ${inputsHtml}
        <button class="calc-btn" onclick="calcFormula('${f.id}')">Рассчитать</button>
        <p class="result" id="out-${f.id}">Ответ тут</p>
      </section>
    `;
  }).join('');

  container.innerHTML = `<div class="calcs">${cardsHtml}</div>`;
}


// ============================================================
// РАСЧЁТ ФОРМУЛЫ
// ============================================================
// Читает значения из полей, вызывает f.calc(values)
// и выводит результат в <p id="out-XXX">.

function calcFormula(formulaId) {
  const f = formulas.find(x => x.id === formulaId);
  if (!f) return;

  const values = {};

  // Собираем значения всех полей
  for (const inp of f.inputs) {
    const el = document.getElementById(`in-${f.id}-${inp.key}`);
    const val = parseFloat(el.value);

    // Пустое или не число — предупреждаем и выходим
    if (isNaN(val)) {
      document.getElementById(`out-${f.id}`).textContent =
        `⚠️ Заполни поле «${inp.label}»`;
      return;
    }

    values[inp.key] = val;
  }

  // Считаем
  let result;
  try {
    result = f.calc(values);
  } catch (e) {
    document.getElementById(`out-${f.id}`).textContent =
      `⚠️ Ошибка: ${e.message}`;
    return;
  }

  // Выводим результат
  const out = document.getElementById(`out-${f.id}`);
  out.textContent = `${f.resultLabel} = ${result.toFixed(2)} ${f.resultUnit}`;
}


// ============================================================
// ПОДСТАНОВКА МАТЕРИАЛА
// ============================================================
// Вызывается при клике на кнопку материала.
// Вставляет value в поле и коротко подсвечивает его.

function applyMaterial(formulaId, key, value) {
  const input = document.getElementById(`in-${formulaId}-${key}`);
  if (!input) return;

  input.value = value;

  // Короткая вспышка — чтобы пользователь заметил подстановку
  input.classList.add('material-applied');
  setTimeout(() => input.classList.remove('material-applied'), 600);
}


// ============================================================
// ГЛОБАЛЬНЫЙ ПОИСК (только для calculator.html)
// ============================================================
// Ищет формулу сразу по всем разделам. Показывает результаты
// списком, при клике открывает нужный раздел.

// Русские названия разделов (для показа в результатах).
const SECTION_NAMES = {
  mehanika: 'Механика',
  termo: 'Термодинамика',
  electro: 'Электричество',
  optika: 'Оптика',
  atom: 'Атомная физика',
  astro: 'Астрономия',
};

// Файлы разделов (для ссылок).
const SECTION_FILES = {
  mehanika: 'mehanika.html',
  termo: 'termo.html',
  electro: 'electro.html',
  optika: 'optika.html',
  atom: 'atom.html',
  astro: 'astro.html',
};


function initGlobalSearch() {
  const input = document.getElementById('global-search');
  const results = document.getElementById('global-search-results');
  const menu = document.getElementById('sections-menu');
  const count = document.getElementById('global-search-count');

  if (!input || !results) return;

  function search() {
    const q = input.value.trim().toLowerCase();

    // Пустой запрос — показываем карточки разделов
    if (q === '') {
      results.innerHTML = '';
      menu.style.display = '';
      count.textContent = '';
      return;
    }

    // Есть запрос — скрываем карточки разделов
    menu.style.display = 'none';

    // Ищем по названию, формуле и id
    const found = formulas.filter(f => {
      const key = `${f.title} ${f.formula} ${f.id}`.toLowerCase();
      return key.includes(q);
    });

    // Счётчик
    count.textContent = `Найдено: ${found.length}`;

    // Ничего не нашли
    if (found.length === 0) {
      results.innerHTML = `
        <div class="global-empty">
          Ничего не найдено по запросу «${input.value}»
        </div>
      `;
      return;
    }

    // Строим список результатов
    results.innerHTML = found.map(f => `
      <a href="${SECTION_FILES[f.section]}" class="global-result">
        <div class="global-result-left">
          <p class="global-result-formula">${f.formula}</p>
          <p class="global-result-title">${f.title}</p>
        </div>
        <div class="global-result-right">
          <span class="global-result-section">${SECTION_NAMES[f.section] || f.section}</span>
          <span class="global-result-arrow">→</span>
        </div>
      </a>
    `).join('');
  }

  input.addEventListener('input', search);

  // Горячие клавиши: / — фокус, Esc — очистить
  document.addEventListener('keydown', function(e) {
    const tag = document.activeElement ? document.activeElement.tagName : '';
    const isTyping = (tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement.isContentEditable);

    if (e.key === '/' && !isTyping) {
      e.preventDefault();
      input.focus();
      input.select();
    }
    if (e.key === 'Escape' && document.activeElement === input) {
      input.value = '';
      search();
      input.blur();
    }
  });
}