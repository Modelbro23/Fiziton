// ============ ДВИЖОК ФОРМУЛЯРА ============
// Карточки + поиск + фильтр по классу + избранное + автосчётчики

// ============ ИЗБРАННОЕ ============
function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem('fiziton-favorites') || '[]');
  } catch (e) {
    return [];
  }
}

function saveFavorites(list) {
  localStorage.setItem('fiziton-favorites', JSON.stringify(list));
}

function isFavorite(id) {
  return getFavorites().includes(id);
}

function toggleFavorite(id, btn) {
  const list = getFavorites();
  const index = list.indexOf(id);

  if (index === -1) {
    list.push(id);
    btn.classList.add('active');
    btn.textContent = '★';
  } else {
    list.splice(index, 1);
    btn.classList.remove('active');
    btn.textContent = '☆';
  }

  saveFavorites(list);
}

// ============ СКЛОНЕНИЕ СЛОВ ============
function pluralFormulas(n) {
  const mod10 = n % 10;
  const mod100 = n % 100;

  if (mod10 === 1 && mod100 !== 11) return 'формула';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'формулы';
  return 'формул';
}

// ============ АВТОСЧЁТЧИКИ ============
function updateSectionCount(sectionName) {
  const count = formulas.filter(f => f.section === sectionName).length;
  const el = document.getElementById('section-count');
  if (el) {
    el.textContent = `${count} ${pluralFormulas(count)}`;
  }
}

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

// ============ РЕНДЕР КАРТОЧКИ ============
function makeCardHtml(f) {
  const inputsHtml = f.inputs.map(inp => `
    <label>${inp.label}${inp.unit ? ' (' + inp.unit + ')' : ''}:
      <input type="number" id="in-${f.id}-${inp.key}" placeholder="0" step="any">
    </label>
  `).join('');

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

// ============ РЕНДЕР РАЗДЕЛА ============
function renderSection(sectionName, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const list = formulas.filter(f => f.section === sectionName);

  if (list.length === 0) {
    container.innerHTML = '<p style="color:var(--muted); padding: 40px;">Формул пока нет</p>';
    return;
  }

  const classes = [...new Set(list.map(f => f.class))].sort((a, b) => a - b);

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

  const cardsHtml = list.map(makeCardHtml).join('');

  container.innerHTML = panelHtml + `<div class="calcs" id="calc-grid">${cardsHtml}</div>`;

  const input = document.getElementById('search-input');
  const count = document.getElementById('search-count');
  const grid = document.getElementById('calc-grid');
  const filterBtns = document.querySelectorAll('.class-btn');
  let activeClass = 'all';

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

    if (q === '' && activeClass === 'all') {
      count.textContent = `Всего: ${cards.length}`;
    } else {
      count.textContent = `Найдено: ${visible} из ${cards.length}`;
    }

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

  // Горячие клавиши
    // Горячие клавиши — перехватываем на уровне захвата
  // Сохраняем функцию один раз, чтобы не дублировать
  if (!window._fizitonKeyHandler) {
    window._fizitonKeyHandler = function(e) {
      const searchInput = document.getElementById('search-input');
      if (!searchInput) return;

    // Функция: фокус + плавная прокрутка к поиску
      function focusAndScrollToSearch() {
      // Прокрутка к поисковой строке
        const searchWrap = document.querySelector('.search-wrap');
        if (searchWrap) {
          searchWrap.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      // Фокус и выделение текста
        searchInput.focus({ preventScroll: true });
        searchInput.select();
      }

    // Кнопка Esc — очистить поиск
      if (e.key === 'Escape' && document.activeElement === searchInput) {
        e.preventDefault();
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
        searchInput.blur();
        return false;
      }

    // Не срабатываем, если пользователь уже что-то печатает в поле
      const tag = document.activeElement ? document.activeElement.tagName : '';
      const isTyping = (tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement.isContentEditable);

    // Слэш / — фокус на поиск (если не в поле ввода)
      if (e.key === '/' && !isTyping) {
        e.preventDefault();
        e.stopPropagation();
        focusAndScrollToSearch();
        return false;
      }

    // Ctrl+K — тоже фокус + прокрутка
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K' || e.keyCode === 75)) {
        e.preventDefault();
        e.stopPropagation();
        e.cancelBubble = true;
        focusAndScrollToSearch();

      // Firefox: повторный фокус через setTimeout
        setTimeout(() => {
          if (document.activeElement !== searchInput) {
            searchInput.focus({ preventScroll: true });
            searchInput.select();
          }
        }, 0);

      return false;
    }
  };

    // ВАЖНО: capture: true — перехватываем ДО Firefox
    document.addEventListener('keydown', window._fizitonKeyHandler, true);
    // Также на window — на случай, если фокус не в документе
    window.addEventListener('keydown', window._fizitonKeyHandler, true);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeClass = btn.getAttribute('data-class');
      applyFilters();
    });
  });

  applyFilters();
  updateSectionCount(sectionName);
}

// ============ СТРАНИЦА ИЗБРАННОГО ============
function renderFavorites(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const favIds = getFavorites();
  const list = formulas.filter(f => favIds.includes(f.id));

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

// ============ РАСЧЁТ ============
function calcFormula(formulaId) {
  const f = formulas.find(x => x.id === formulaId);
  if (!f) return;

  const values = {};

  for (const inp of f.inputs) {
    const el = document.getElementById(`in-${f.id}-${inp.key}`);
    const val = parseFloat(el.value);

    if (isNaN(val)) {
      document.getElementById(`out-${f.id}`).textContent =
        `⚠️ Заполни поле «${inp.label}»`;
      return;
    }

    values[inp.key] = val;
  }

  let result;
  try {
    result = f.calc(values);
  } catch (e) {
    document.getElementById(`out-${f.id}`).textContent =
      `⚠️ Ошибка: ${e.message}`;
    return;
  }

  const out = document.getElementById(`out-${f.id}`);
  out.textContent = `${f.resultLabel} = ${result.toFixed(2)} ${f.resultUnit}`;
}