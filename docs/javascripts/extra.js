// JavaScript adicional para xls2sage50 documentation

(function() {
  'use strict';

  // Marcar enlaces externos
  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="http"]');
    links.forEach(function(link) {
      if (!link.href.includes(window.location.hostname)) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.classList.add('external-link');
      }
    });
  });

  // Mejorar accesibilidad de tablas
  function makeTablesResponsive() {
    var tables = document.querySelectorAll('table');
    tables.forEach(function(table) {
      var wrapper = document.createElement('div');
      wrapper.className = 'table-responsive';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  }

  // Añadir indicador de estado de conexión (si aplica)
  function showOnlineStatus() {
    var statusElement = document.createElement('div');
    statusElement.className = 'online-status';
    statusElement.setAttribute('aria-live', 'polite');

    function updateStatus() {
      if (navigator.onLine) {
        statusElement.textContent = '';
        statusElement.classList.remove('offline');
      } else {
        statusElement.textContent = 'Sin conexión a internet';
        statusElement.classList.add('offline');
      }
    }

    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
    updateStatus();
  }

  // Scroll suave para anclas internas
  function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Copiar código al portapapeles
  function addCopyButtons() {
    var codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(function(block) {
      var button = document.createElement('button');
      button.className = 'copy-button';
      button.textContent = 'Copiar';
      button.setAttribute('aria-label', 'Copiar código al portapapeles');

      button.addEventListener('click', function() {
        var code = block.textContent;
        navigator.clipboard.writeText(code).then(function() {
          button.textContent = '¡Copiado!';
          setTimeout(function() {
            button.textContent = 'Copiar';
          }, 2000);
        });
      });

      block.parentNode.style.position = 'relative';
      block.parentNode.appendChild(button);
    });
  }

  // Inicializar
  makeTablesResponsive();
  showOnlineStatus();
  enableSmoothScroll();

  // Añadir botones de copiar solo si el navegador lo soporta
  if (navigator.clipboard) {
    addCopyButtons();
  }

})();
