(function () {
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open);
  });

  /* contact form: posts to Web3Forms (access key is public by design; the destination inbox is set in the Web3Forms account). */
  var form = document.getElementById('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = e.target, s = document.getElementById('status'), btn = f.querySelector('button[type=submit]');
      if (!f.name.value.trim() || !f.phone.value.trim() || !/^\S+@\S+\.\S+$/.test(f.email.value)) {
        s.textContent = 'Please enter your name, contact number and a valid email address.';
        return;
      }
      if (/^YOUR_/.test(f.access_key.value)) {
        s.textContent = 'The form is not switched on yet. Please check back soon.';
        return;
      }
      btn.disabled = true; s.textContent = 'Sending…';
      var data = {};
      new FormData(f).forEach(function (v, k) { data[k] = v; });
      fetch(f.action, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) })
        .then(function (r) { return r.json(); })
        .then(function (r) {
          if (r.success) { f.reset(); s.textContent = 'Thank you. Your enquiry has been sent and we will reply with a written quote.'; }
          else { s.textContent = 'Something went wrong. Please try again in a moment.'; }
        })
        .catch(function () { s.textContent = 'Something went wrong. Please check your connection and try again.'; })
        .then(function () { btn.disabled = false; });
    });
  }
})();
