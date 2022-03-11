(() => {
  const $title = $('#title');
  $title.text('Draggable Interaction');

  setTimeout(() => {
    $('#draggable')
      .draggable({
      // axis: 'x',
        containment: '#parent',
      });
  }, 5e3);
})();
