(() => {
  const $title = $('#title');
  $title.text('Droppable Interaction');

  const colors = randomize(['red', 'blue', 'orange', 'purple', 'gray', 'green']);

  let i = 0;
  for (; i < colors.length; i += 1) {
    $('<div>', { id: colors[i] })
      .css('background', colors[i])
      .appendTo('#colors')
      .draggable({ revert: 'invalid', zIndex: 2 });
  }

  randomize(colors);
  for (i = 0; i < colors.length; i += 1) {
    $('<div>', { text: colors[i] })
      .appendTo('#drop-area');
  }

  $('#drop-area > div')
    .droppable({
      accept(draggable) {
        return $(this).text() === draggable.attr('id');
      },
      drop(event, ui) {
        const color = ui.draggable.css('background-color');
        $(this)
          .css('background', color)
          .addClass('filled');

        ui.draggable.hide('puff');

        if ($('.filled').length === colors.length) {
          $('<div><p><b>Great,</b> You did it!</p></div>')
            .dialog({ modal: true });
          setTimeout(() => {
            window.location.reload();
          }, 3e3);
        }
      },
    });

  function randomize(array) {
    return array.sort(() => 0.5 - Math.random());
  }
})();
