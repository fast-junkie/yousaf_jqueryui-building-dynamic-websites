(() => {
  const $title = $('#title');
  $title.text('jQuery Effect Method');

  $('#effect')
    .effect('shake', {
      times: 10,
      distance: 10,
      duration: 4000,
    }, function _complete() {
      $(this).css('background-color', 'skyblue');
    });
})();
