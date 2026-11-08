// JK Minerals & Metals – kleine Helfer, die Seite funktioniert auch ohne JavaScript.
(function () {
  // Mobiles Menü schließen, sobald ein Link gewählt wird
  document.querySelectorAll('details.mob a').forEach(function (a) {
    a.addEventListener('click', function () { a.closest('details').removeAttribute('open'); });
  });

  var form = document.getElementById('anfrage-form');
  if (!form) return;

  // Element aus der URL vorauswählen, z. B. kontakt.html?material=Tantal#anfrage
  var params = new URLSearchParams(window.location.search);
  var mat = params.get('material');
  if (mat) {
    var sel = form.querySelector('#f-element');
    Array.prototype.forEach.call(sel.options, function (o) {
      if (o.value.toLowerCase() === mat.toLowerCase()) sel.value = o.value;
    });
  }

  // Bis ein Formular-Dienst eingerichtet ist: Anfrage als vorausgefüllte E-Mail öffnen
  form.addEventListener('submit', function (e) {
    if (form.getAttribute('action')) return; // echter Versand konfiguriert
    e.preventDefault();
    if (!form.reportValidity()) return;
    var v = function (id) { var el = form.querySelector('#' + id); return el ? el.value.trim() : ''; };
    var subject = 'Anfrage: ' + (v('f-element') || 'Material') + (v('f-form') ? ' (' + v('f-form') + ')' : '');
    var body = [
      'Element: ' + v('f-element'),
      'Form: ' + v('f-form'),
      'Menge: ' + v('f-menge'),
      '',
      'Name: ' + v('f-name'),
      'Firma: ' + v('f-firma'),
      'E-Mail: ' + v('f-email'),
      'Telefon: ' + v('f-tel'),
      '',
      v('f-msg')
    ].join('\n');
    window.location.href = 'mailto:info@jkminerals.de?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    var s = document.getElementById('form-status');
    if (s) s.textContent = 'Ihr E-Mail-Programm öffnet sich mit der vorbereiteten Anfrage. Falls nicht, schreiben Sie bitte an info@jkminerals.de.';
  });
})();
