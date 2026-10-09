
// ============================================================
// ПЕРЕКЛЮЧАТЕЛЬ ТЕМ
// ============================================================
// Управляет выбором темы оформления сайта.
// Выбранная тема:
//   • Сохраняется в localStorage под ключом 'fiziton-theme'
//   • Применяется к <html> через атрибут data-theme="..."
//   • Работает на всех страницах (одна тема на весь сайт)
//
// Как это работает:
//   1. В :root определены переменные для темы «космос» (по умолчанию)
//   2. В theme.css есть блоки [data-theme="ice"], [data-theme="fire"] и т.д.,
//      которые переопределяют эти переменные
//   3. При выборе темы мы меняем data-theme на <html> — цвета переключаются
// ============================================================


// Список доступных тем.
// id      — техническое имя (используется в data-theme и localStorage)
// name    — название для пользователя
// icon    — эмодзи на кнопке
const THEMES = [
  { id: 'cosmos', name: 'Космос',  icon: '🌌' },
  { id: 'ice',    name: 'Лёд',     icon: '❄️' },
  { id: 'sakura', name: 'Сакура',  icon: '🌸' },
  { id: 'fire',   name: 'Огонь',   icon: '🔥' },
  { id: 'forest', name: 'Лес',     icon: '🌿' },
  { id: 'light',  name: 'Светлая', icon: '☀️' },
];

const DEFAULT_THEME = 'cosmos';            // если ничего не выбрано
const THEME_KEY = 'fiziton-theme';         // ключ в localStorage


// ============================================================
// ПРИМЕНЕНИЕ ТЕМЫ
// ============================================================

// Ставит data-theme="..." на <html> и сохраняет выбор.
// Если передать несуществующий id — сработает тема по умолчанию.
function applyTheme(themeId) {
  const theme = THEMES.find(t => t.id === themeId) ? themeId : DEFAULT_THEME;

  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
}

// Возвращает сохранённую тему (или тему по умолчанию).
function getSavedTheme() {
  return localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
}


// ============================================================
// СОЗДАНИЕ ПЕРЕКЛЮЧАТЕЛЯ
// ============================================================
// Добавляет в body кнопку с иконкой и всплывающую панель выбора.

function initThemeSwitcher() {
  // Сразу применяем сохранённую тему — до отрисовки,
  // чтобы не было «мигания» цветов при загрузке
  applyTheme(getSavedTheme());

  // Текущая тема (для иконки на кнопке)
  const currentTheme = THEMES.find(t => t.id === getSavedTheme()) || THEMES[0];

  // Создаём контейнер переключателя
  const switcher = document.createElement('div');
  switcher.className = 'theme-switcher';

  switcher.innerHTML = `
    <button class="theme-toggle-btn" id="theme-toggle" title="Сменить тему">
      ${currentTheme.icon}
    </button>

    <div class="theme-panel hidden" id="theme-panel">
      ${THEMES.map(t => `
        <button class="theme-option ${t.id === getSavedTheme() ? 'active' : ''}"
                data-theme-name="${t.id}">
          <span class="dot"></span>
          <span>${t.icon} ${t.name}</span>
        </button>
      `).join('')}
    </div>
  `;

  document.body.appendChild(switcher);

  const btn = document.getElementById('theme-toggle');
  const panel = document.getElementById('theme-panel');


  // ----------------------------------------------------------
  // Открыть / закрыть панель по клику на кнопку
  // ----------------------------------------------------------
  btn.addEventListener('click', (e) => {
    e.stopPropagation();  // чтобы клик не дошёл до document
    panel.classList.toggle('hidden');
  });


  // ----------------------------------------------------------
  // Выбор темы из списка
  // ----------------------------------------------------------
  panel.querySelectorAll('.theme-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const themeId = opt.getAttribute('data-theme-name');
      applyTheme(themeId);

      // Обновляем интерфейс: иконка кнопки и активный пункт
      const theme = THEMES.find(t => t.id === themeId);
      btn.textContent = theme.icon;

      panel.querySelectorAll('.theme-option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');

      // Скрываем панель после выбора
      panel.classList.add('hidden');
    });
  });


  // ----------------------------------------------------------
  // Клик вне панели — закрыть её
  // ----------------------------------------------------------
  document.addEventListener('click', (e) => {
    if (!switcher.contains(e.target)) {
      panel.classList.add('hidden');
    }
  });
}


// ============================================================
// ЗАПУСК
// ============================================================
// Инициализируем сразу после загрузки DOM.
// Если DOM уже загружен (например, скрипт подключён в конце body) —
// запускаем сразу.

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThemeSwitcher);
} else {
  initThemeSwitcher();
}