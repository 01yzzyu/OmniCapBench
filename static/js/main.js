// ===== Theme toggle (persisted, respects OS default) =====
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  var stored = null;
  try { stored = localStorage.getItem('ocb-theme'); } catch (e) {}
  if (stored === 'dark' || stored === 'light') root.setAttribute('data-theme', stored);

  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function paintIcon() {
    if (!btn) return;
    btn.innerHTML = isDark() ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  }
  paintIcon();
  if (btn) {
    btn.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('ocb-theme', next); } catch (e) {}
      paintIcon();
    });
  }
})();

// ===== Leaderboard tabs =====
(function () {
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.getAttribute('data-tab');
      tabs.forEach(function (t) { t.classList.toggle('active', t === tab); });
      document.querySelectorAll('.tab-panel').forEach(function (p) {
        p.classList.toggle('active', p.id === 'tab-' + target);
      });
    });
  });
})();

// ===== Copy BibTeX =====
(function () {
  var btn = document.getElementById('copyBib');
  var pre = document.getElementById('bibtex-content');
  if (!btn || !pre) return;
  btn.addEventListener('click', function () {
    var text = pre.innerText;
    var done = function () {
      btn.innerHTML = '<i class="fas fa-check"></i> Copied';
      setTimeout(function () { btn.innerHTML = '<i class="fas fa-copy"></i> Copy'; }, 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else { fallback(); }
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (e) {}
      document.body.removeChild(ta);
    }
  });
})();

// ===== Active nav link on scroll =====
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-links a'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);
  if (!sections.length || !('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach(function (s) { observer.observe(s); });
})();
