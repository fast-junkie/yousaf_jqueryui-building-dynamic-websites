(() => {
  const $title = $('#title');
  $title.text('Selectable Interaction');

  const selectable = $('#selectable').selectable();
  $('#add')
    .button()
    .on('click', () => {
      selectable.append('<li>server.log</li>');
    });
  $('#remove')
    .button()
    .on('click', () => {
      $('.ui-selected').remove();
    });
})();
