(() => {
  const $title = $('#title');
  $title.text('Resizable Interaction');

  $('#resizable').resizable({
    minWidth: 100,
    minHeight: 100,
  });
})();
