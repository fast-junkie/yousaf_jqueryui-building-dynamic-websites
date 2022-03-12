(() => {
  const $title = $('#title');
  $title.text('Color Animations');

  const $btn = $('#btn-animate');
  const $box = $('#animate-me');

  $btn
    .button()
    .on('click', () => {
      const opts = {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'rgba(255, 255, 255, 0.8)',
      };
      $box.animate(opts);
    });
})();
