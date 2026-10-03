// ============ ДВИЖОК ФОРМУЛЯРА ============
// Строит карточки + поиск

function renderSection(sectionName, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Контейнер для поиска (вставляется перед карточками)
  const searchHtml = `
    <div class="search-wrap">
      <input
        type="text"
        id="search-input"
        class="search-input"
        placeholder="Поиск по названию или формуле..."
        autocomplete="off"
      >
      <span class="search-count" id="search-count"></span>
    </div>
  `;

  // Все формулы раздела
  const list = formulas.filter(f => f.section === sectionName);

  if (list.length === 0) {
    container.innerHTML = '<p style="color:var(--muted); padding: 40px;">Формул пока нет</p>';
    return;
  }

  // Карточки
  const cardsHtml = list.map(f => {
    const inputsHtml = f.inputs.map(inp => `
      <label>${inp.label}${inp.unit ? ' (' + inp.unit + ')' : ''}:
        <input type="number" id="in-${f.id}-${inp.key}" placeholder="0" step="any">
      </label>
    `).join('');

    // Что индексировать поиском — название + формула + id
    const searchKey = `${f.title} ${f.formula} ${f.id}`.toLowerCase();

    return `
      <section class="calc" data-search="${searchKey}">
        <h2>${f.title}</h2>
        <p class="formula">${f.formula}</p>
        ${inputsHtml}
        <button onclick="calcFormula('${f.id}')">Рассчитать</button>
        <p class="result" id="out-${f.id}">Ответ тут</p>
      </section>
    `;
  }).join('');

  // Вставляем всё
  container.innerHTML = searchHtml + `<div class="calcs" id="calc-grid">${cardsHtml}</div>`;

  // Слушаем ввод в поиске
  const input = document.getElementById('search-input');
  const count = document.getElementById('search-count');
  const grid = document.getElementById('calc-grid');

  function filterCards() {
    const q = input.value.trim().toLowerCase();
    const cards = grid.querySelectorAll('.calc');
    let visible = 0;

    cards.forEach(card => {
      const key = card.getAttribute('data-search');
      const match = key.includes(q);
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });

    // Счётчик
    if (q === '') {
      count.textContent = '';
    } else {
      count.textContent = `Найдено: ${visible} из ${cards.length}`;
    }

    // Если ничего не найдено
    const empty = document.getElementById('search-empty');
    if (visible === 0) {
      if (!empty) {
        const p = document.createElement('p');
        p.id = 'search-empty';
        p.style.cssText = 'color: var(--muted); padding: 40px; text-align: center; grid-column: 1 / -1; font-family: JetBrains Mono, monospace; font-size: 14px;';
        p.textContent = 'Ничего не найдено. Попробуй другой запрос.';
        grid.appendChild(p);
      }
    } else {
      if (empty) empty.remove();
    }
  }

  input.addEventListener('input', filterCards);
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