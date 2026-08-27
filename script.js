const shareButton = document.querySelector('#share-button');
const toast = document.querySelector('#toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2800);
}

shareButton?.addEventListener('click', async () => {
  const shareData = {
    title: 'Diego Artow — links',
    text: 'Lives, Overwatch, reacts e todas as redes do Diegow.',
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
    showToast('Link copiado. Partiu chamar o bonde!');
  } catch (error) {
    if (error?.name !== 'AbortError') showToast('Não deu para copiar agora.');
  }
});
