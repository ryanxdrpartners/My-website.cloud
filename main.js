(function () {
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open);
  });

  /* contact form: opens the visitor's email app with their details filled in.
     To receive submissions directly, point the form at a form service (e.g. Formspree) when you deploy. */
  var form = document.getElementById('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = e.target, s = document.getElementById('status');
      if (!f.name.value.trim() || !/^\S+@\S+\.\S+$/.test(f.email.value)) {
        s.textContent = 'Enter your name and a valid email address.';
        return;
      }
      var body = 'Name: ' + f.name.value + '\nEmail: ' + f.email.value + '\nNeed: ' + f.type.value + '\n\n' + f.msg.value;
      window.location.href = 'mailto:hello@my-website.cloud?subject=' +
        encodeURIComponent('Website enquiry from ' + f.name.value) + '&body=' + encodeURIComponent(body);
      s.textContent = 'Your email app should now open with your enquiry ready to send.';
    });
  }
})();
