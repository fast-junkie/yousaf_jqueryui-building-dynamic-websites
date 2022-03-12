(() => {
  const $title = $('#title');
  $title.text('CSS Transitions');

  const $box = $('#box');
  const $btnAdd = $('#btn-add');
  const $btnRemove = $('#btn-remove');
  const $btnSwitch = $('#btn-switch');
  const $btnToggle = $('#btn-toggle');

  $btnAdd
    .button()
    .on('click', () => {
      $box
        .addClass('box-purple', 1e3)
        .html('<h5>This is still a box...</h5>');
    });
  $btnRemove
    .button()
    .on('click', () => {
      $box
        .removeClass('box-purple', 1e3, 'easeOutBack')
        .html('<h5>This is a box...</h5>');
    });
  $btnSwitch
    .button()
    .on('click', () => {
      $box
        .switchClass('box-purple', 'box-orange', 1e3)
        .html('<h5>This is still a box...</h5>');
    });
  $btnToggle
    .button()
    .on('click', () => {
      $box
        .toggleClass('box-purple', 1e3)
        .html('<h5>This is still a box...</h5>');
    });
})();
