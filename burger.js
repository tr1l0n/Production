// burger.js (type="module" ОК)

// Допоміжна функція відкриття/закриття
function setMenu(open) {
  const btn      = document.getElementById('hamburgerBtn');
  const overlay  = document.getElementById('menuOverlay');
  const mainPage = document.getElementById('mainPage');

  btn?.classList.toggle('active', open);
  overlay?.classList.toggle('active', open);
  if (mainPage) mainPage.style.filter = open ? 'blur(2px)' : 'none';
}

// 1) Делегування кліків — працює навіть якщо хедер підвантажився пізніше
document.addEventListener('click', (e) => {
  const clickedBtn = e.target.closest('#hamburgerBtn');

  // Клік по бургеру — тумблер
  if (clickedBtn) {
    const overlay = document.getElementById('menuOverlay');
    const willOpen = !(overlay && overlay.classList.contains('active'));
    setMenu(willOpen);
    return;
  }

  // Клік поза оверлеєм — закрити (якщо відкрито)
  const overlay = document.getElementById('menuOverlay');
  if (
    overlay?.classList.contains('active') &&
    !e.target.closest('.menu-overlay')
  ) {
    setMenu(false);
  }
});

// 2) Якщо хедер вставляється асинхронно через script.js,
//    дочекатися появи елементів і повісити ще й прямий слухач (не обов'язково, але зручно)
const mo = new MutationObserver(() => {
  const btn = document.getElementById('hamburgerBtn');
  if (btn && !btn.dataset.bound) {
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const overlay = document.getElementById('menuOverlay');
        setMenu(!(overlay && overlay.classList.contains('active')));
      }
    });
    btn.dataset.bound = '1';
  }
});
mo.observe(document.documentElement, { childList: true, subtree: true });
