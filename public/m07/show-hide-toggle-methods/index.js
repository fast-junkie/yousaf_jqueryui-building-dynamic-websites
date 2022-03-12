(() => {
  const $title = $('#title');
  $title.text('Show, Hide and Toggle Methods');

  const $box = $('#box');

  $('#btn-show')
    .button()
    .on('click', () => {
      $box.show('shake', { times: 10, distance: 200 }, 3e3);
    });
  $('#btn-hide')
    .button()
    .on('click', () => {
      $box.hide('explode', { distance: 200 }, 3e3);
    });
  $('#btn-toggle')
    .button()
    .on('click', () => {
      $box.toggle('fold', 3e3);
    });
})();
