// All 47 JavaScript Deep Learning Topics
const topics = [
    { id: 1, title: 'Closures (Замыкания)', description: 'Понимание замыканий, области видимости и лексического окружения' },
    { id: 2, title: 'Prototypes (Прототипы)', description: 'Прототипное наследование и цепочка прототипов' },
    { id: 3, title: 'This Context', description: 'Контекст выполнения this в разных ситуациях' },
    { id: 4, title: 'Event Loop', description: 'Как работает event loop в JavaScript' },
    { id: 5, title: 'Promises', description: 'Промисы и обработка асинхронных операций' },
    { id: 6, title: 'Async/Await', description: 'Синтаксис async/await для асинхронного кода' },
    { id: 7, title: 'Callbacks', description: 'Обратные вызовы и callback hell' },
    { id: 8, title: 'Hoisting', description: 'Поднятие переменных и функций в JavaScript' },
    { id: 9, title: 'Scope Chain', description: 'Цепочка областей видимости' },
    { id: 10, title: 'Destructuring', description: 'Деструктуризация массивов и объектов' },
    { id: 11, title: 'Spread Operator', description: 'Оператор распространения (...) и его применение' },
    { id: 12, title: 'Arrow Functions', description: 'Стрелочные функции и их особенности' },
    { id: 13, title: 'Template Literals', description: 'Шаблонные строки с интерполяцией' },
    { id: 14, title: 'Classes', description: 'Классы ES6 и синтаксис классов' },
    { id: 15, title: 'Inheritance', description: 'Наследование в JavaScript' },
    { id: 16, title: 'Getters/Setters', description: 'Получатели и установщики свойств' },
    { id: 17, title: 'Static Methods', description: 'Статические методы класса' },
    { id: 18, title: 'Generators', description: 'Генераторы и функции yield' },
    { id: 19, title: 'Iterators', description: 'Итераторы и протокол итерируемости' },
    { id: 20, title: 'Symbols', description: 'Символы и их использование' },
    { id: 21, title: 'Map/Set', description: 'Коллекции Map и Set' },
    { id: 22, title: 'WeakMap/WeakSet', description: 'Слабые ссылки WeakMap и WeakSet' },
    { id: 23, title: 'Proxy', description: 'Прокси-объекты для перехвата операций' },
    { id: 24, title: 'Reflect API', description: 'Reflect API для рефлексии' },
    { id: 25, title: 'Regular Expressions', description: 'Регулярные выражения в JavaScript' },
    { id: 26, title: 'JSON Processing', description: 'Обработка JSON данных' },
    { id: 27, title: 'Error Handling', description: 'Обработка ошибок try/catch/finally' },
    { id: 28, title: 'Debugging', description: 'Отладка кода и инструменты разработчика' },
    { id: 29, title: 'Performance', description: 'Оптимизация производительности' },
    { id: 30, title: 'Memory Management', description: 'Управление памятью и garbage collection' },
    { id: 31, title: 'Memoization', description: 'Кэширование результатов функций' },
    { id: 32, title: 'Currying', description: 'Каррирование функций' },
    { id: 33, title: 'Function Composition', description: 'Композиция функций' },
    { id: 34, title: 'Higher Order Functions', description: 'Функции высшего порядка' },
    { id: 35, title: 'Functional Programming', description: 'Функциональное программирование в JS' },
    { id: 36, title: 'Array Methods', description: 'Методы массивов и работа с ними' },
    { id: 37, title: 'String Methods', description: 'Методы строк и манипуляция текстом' },
    { id: 38, title: 'Object Methods', description: 'Методы объектов Object.keys/values/entries' },
    { id: 39, title: 'Nullish Coalescing', description: 'Оператор ?? для работы с null/undefined' },
    { id: 40, title: 'Optional Chaining', description: 'Опциональная цепочка ?. оператор' },
    { id: 41, title: 'Module System', description: 'ES6 модули import/export' },
    { id: 42, title: 'Fetch API', description: 'Fetch API для HTTP запросов' },
    { id: 43, title: 'Web Workers', description: 'Многопоточность с Web Workers' },
    { id: 44, title: 'Local Storage', description: 'Local Storage и Session Storage' },
    { id: 45, title: 'DOM Manipulation', description: 'Манипуляция DOM элементами' },
    { id: 46, title: 'Event Handling', description: 'Обработка событий и делегирование' },
    { id: 47, title: 'Best Practices', description: 'Лучшие практики в JavaScript' }
];

// Generate topic cards on homepage
function generateTopicCards() {
    const topicsGrid = document.querySelector('.topics-grid');
    if (!topicsGrid) return;

    topicsGrid.innerHTML = topics.map(topic => `
        <div class="topic-card">
            <div class="topic-card-number">Тема #${topic.id}</div>
            <div class="topic-card-content">
                <h3 class="topic-card-title">${topic.title}</h3>
                <p class="topic-card-description">${topic.description}</p>
                <a href="pages/lesson-${topic.id}.html" class="topic-card-link">Читать урок →</a>
            </div>
        </div>
    `).join('');
}

// Get topic data by ID
function getTopicById(id) {
    return topics.find(topic => topic.id === parseInt(id));
}

// Get next and previous topics
function getNavigation(currentId) {
    const prevTopic = currentId > 1 ? topics[currentId - 2] : null;
    const nextTopic = currentId < topics.length ? topics[currentId] : null;
    return { prevTopic, nextTopic };
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateTopicCards);
} else {
    generateTopicCards();
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});