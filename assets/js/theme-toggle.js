(function () {
  'use strict';
  var key = 'joseph-fatoye-theme';
  var system = window.matchMedia('(prefers-color-scheme: dark)');
  var button = document.getElementById('theme-toggle');
  var preference = null;
  try { preference = localStorage.getItem(key); } catch (error) {}
  if (preference !== 'light' && preference !== 'dark') preference = null;

  function apply(theme) {
    document.documentElement.dataset.theme = theme;
    button.setAttribute('aria-pressed', String(theme === 'dark'));
    button.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }

  if (!button) return;
  apply(preference || (system.matches ? 'dark' : 'light'));
  button.hidden = false;
  button.addEventListener('click', function () {
    preference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    apply(preference);
    try { localStorage.setItem(key, preference); } catch (error) {}
  });
  system.addEventListener('change', function (event) {
    if (!preference) apply(event.matches ? 'dark' : 'light');
  });
}());
