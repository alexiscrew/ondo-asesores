(function () {
  'use strict';

  // Menu movil: boton .menu-boton + lista #menu (.menu)
  var boton = document.querySelector('.menu-boton');
  var menu = document.getElementById('menu');

  function setMenu(abierto) {
    if (!boton || !menu) return;
    menu.classList.toggle('abierto', abierto);
    boton.setAttribute('aria-expanded', String(abierto));
    boton.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
  }

  if (boton && menu) {
    boton.addEventListener('click', function () {
      setMenu(!menu.classList.contains('abierto'));
    });
    menu.querySelectorAll('a').forEach(function (enlace) {
      enlace.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('abierto')) {
        setMenu(false);
        boton.focus();
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024) setMenu(false);
    });
  }

  // Formulario #consulta -> confirmacion #confirmacion (aria-live)
  var form = document.getElementById('consulta');
  var estado = document.getElementById('confirmacion');
  var campos = ['nombre', 'telefono', 'correo', 'privacidad'];

  function errorEl(campo) { return document.getElementById('error-' + campo); }

  function mostrarError(campo, mensaje) {
    var input = document.getElementById(campo);
    var error = errorEl(campo);
    if (input) input.setAttribute('aria-invalid', 'true');
    if (error) { error.textContent = mensaje; error.hidden = false; }
  }

  function limpiarError(campo) {
    var input = document.getElementById(campo);
    var error = errorEl(campo);
    if (input) input.removeAttribute('aria-invalid');
    if (error) { error.textContent = ''; error.hidden = true; }
  }

  if (form) {
    campos.forEach(function (campo) {
      var input = document.getElementById(campo);
      if (!input) return;
      input.addEventListener('input', function () { limpiarError(campo); });
      input.addEventListener('change', function () { limpiarError(campo); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      campos.forEach(limpiarError);
      var valido = true;

      var nombre = document.getElementById('nombre');
      var telefono = document.getElementById('telefono');
      var correo = document.getElementById('correo');
      var privacidad = document.getElementById('privacidad');

      if (!nombre || !nombre.value.trim()) {
        mostrarError('nombre', 'Escribe tu nombre, por favor.');
        valido = false;
      }
      var tel = telefono ? telefono.value.trim() : '';
      if (!tel) {
        mostrarError('telefono', 'Indica tu teléfono, por favor.');
        valido = false;
      } else if (!/^[0-9+ ]{9,15}$/.test(tel)) {
        mostrarError('telefono', 'Revisa el número: 9 a 15 dígitos.');
        valido = false;
      }
      var mail = correo ? correo.value.trim() : '';
      if (!mail) {
        mostrarError('correo', 'Escribe tu correo, por favor.');
        valido = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
        mostrarError('correo', 'Revisa el correo: le falta algo.');
        valido = false;
      }
      if (!privacidad || !privacidad.checked) {
        mostrarError('privacidad', 'Marca la casilla de privacidad para seguir.');
        valido = false;
      }

      if (!valido) {
        if (estado) estado.hidden = true;
        var primero = form.querySelector('[aria-invalid="true"]');
        if (primero) primero.focus();
        return;
      }

      var quien = nombre.value.trim().split(' ')[0];
      if (estado) {
        estado.hidden = false;
        estado.textContent = 'Gracias, ' + quien + '. Lo hemos recibido: te llamamos en menos de 24 horas hábiles.';
      }
      form.reset();
      window.setTimeout(function () { if (estado) estado.hidden = true; }, 9000);
    });
  }
})();
