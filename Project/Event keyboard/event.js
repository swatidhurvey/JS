let insert = document.querySelector('#insert');

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
    <div class="key">
      ${event.key === ' ' ? 'Space' : event.key}
    </div>

    <div class="key">
      ${event.keyCode}
    </div>

    <div class="key">
      ${event.code}
    </div>
  `;
});
