/* Theme initializer — must run before CSS renders to prevent FOWT */
(function () {
  var saved = localStorage.getItem('portfolio-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
})();
