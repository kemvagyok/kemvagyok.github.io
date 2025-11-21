// Portfolio – script.js
// --------------------------------------------------
// Small interactive helpers: year, CV download, contact form

// Update footer year automatically
document.getElementById('year').textContent = new Date().getFullYear();


// Contact form handler
function onContact(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();

  if (!name || !email || !msg) {
    alert('Kérlek tölts ki minden mezőt.');
    return;
  }

  const subject = encodeURIComponent('Kapcsolatfelvétel: ' + name);
  const body = encodeURIComponent(`${msg}\n\n--\n${name}\n${email}`);

  window.location.href = `mailto:0322sagibenedek@gmail.com?subject=${subject}&body=${body}`;
}
