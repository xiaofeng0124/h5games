(function() {
  'use strict';

  var currentLang = localStorage.getItem('i18n_lang') || 'en';
  var translations = null;
  var languages = null;

  function loadTranslations(callback) {
    if (translations) { callback(); return; }
    fetch('/i18n/translations.json?' + Date.now())
      .then(function(r) { return r.json(); })
      .then(function(data) {
        translations = data.translations;
        languages = data.languages;
        callback();
      })
      .catch(function() { callback(); });
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('i18n_lang', lang);

    if (!translations) return;

    // Update all data-i18n elements
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute('data-i18n');
      if (!key || !translations[key]) continue;
      var text = translations[key][lang] || translations[key]['en'] || key;
      // Handle placeholder attribute
      if (el.getAttribute('data-i18n-attr') === 'placeholder') {
        el.placeholder = text;
      } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = text;
      } else {
        el.textContent = text;
      }
    }

    // Update HTML lang and dir
    var html = document.documentElement;
    html.lang = lang;
    var langData = null;
    if (languages) {
      for (var j = 0; j < languages.length; j++) {
        if (languages[j].code === lang) { langData = languages[j]; break; }
      }
    }
    if (langData && langData.dir) {
      html.dir = langData.dir;
    } else {
      html.dir = 'ltr';
    }

    // Update language selector button
    var btn = document.getElementById('lang-selector-btn');
    if (btn && langData) {
      btn.style.background = 'url(/flags/' + (langData.country || 'us') + '.svg) center / cover no-repeat';
      btn.innerHTML = '<span class="lang-current-name" style="text-shadow:0 1px 4px rgba(0,0,0,0.7)">' + langData.nativeName + '</span>';
    }

    // Close dropdown
    var menu = document.getElementById('lang-selector-menu');
    if (menu) {
      menu.classList.add('hidden');
      menu.classList.remove('grid');
    }

    // Highlight active language
    var items = document.querySelectorAll('[data-lang-code]');
    for (var k = 0; k < items.length; k++) {
      var code = items[k].getAttribute('data-lang-code');
      if (code === lang) {
        items[k].classList.add('ring-2', 'ring-indigo-500', 'bg-indigo-50', 'dark:bg-indigo-900/30');
      } else {
        items[k].classList.remove('ring-2', 'ring-indigo-500', 'bg-indigo-50', 'dark:bg-indigo-900/30');
      }
    }
  }

  function initSelector() {
    var btn = document.getElementById('lang-selector-btn');
    var menu = document.getElementById('lang-selector-menu');
    if (!btn || !menu || !languages) return;

    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var isHidden = menu.classList.contains('hidden');
      menu.classList.toggle('hidden');
      menu.classList.toggle('grid');
    });

    // Click on language item
    menu.addEventListener('click', function(e) {
      var item = e.target.closest('[data-lang-code]');
      if (item) {
        applyLanguage(item.getAttribute('data-lang-code'));
      }
    });

    // Close on outside click
    document.addEventListener('click', function() {
      menu.classList.add('hidden');
      menu.classList.remove('grid');
    });

    // Set initial active state
    var items = document.querySelectorAll('[data-lang-code]');
    for (var i = 0; i < items.length; i++) {
      if (items[i].getAttribute('data-lang-code') === currentLang) {
        items[i].classList.add('ring-2', 'ring-indigo-500', 'bg-indigo-50', 'dark:bg-indigo-900/30');
      }
    }
  }

  window.__ = function(key) {
    if (!translations || !translations[key]) return key;
    return translations[key][currentLang] || translations[key]['en'] || key;
  };

  loadTranslations(function() {
    applyLanguage(currentLang);
    initSelector();
  });
})();
