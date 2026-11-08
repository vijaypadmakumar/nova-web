// Sends any form marked data-nn-form to the PHP handler (public/api/contact.php).
// In local development there is no PHP, so the form says so instead of pretending.
export function wireForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-nn-form]').forEach((form) => {
    const status = form.querySelector<HTMLElement>('.form-status');
    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const show = (state: 'ok' | 'info' | 'error', text: string) => {
      if (!status) return;
      status.hidden = false;
      status.dataset.state = state;
      status.textContent = text;
      status.focus();
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const label = button?.textContent;
      if (button) { button.disabled = true; button.textContent = 'Sending…'; }
      try {
        const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        const type = res.headers.get('content-type') || '';
        if (!type.includes('application/json')) {
          show('info', 'Test mode: the form works once the site is on Hostinger. Nothing was sent from this local copy.');
          return;
        }
        const data = await res.json();
        if (res.ok && data.ok) {
          form.reset();
          show('ok', form.dataset.success || 'Thanks, your message is on its way. We reply within 24 hours.');
        } else {
          show('error', data.error || 'The message didn’t send. Check the highlighted fields, or email us directly.');
        }
      } catch {
        show('error', 'The message didn’t send because the connection dropped. Try again, or email us directly.');
      } finally {
        if (button) { button.disabled = false; button.textContent = label || 'Send'; }
      }
    });
  });
}
