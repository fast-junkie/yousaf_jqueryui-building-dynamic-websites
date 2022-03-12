(() => {
  const $title = $('#title');
  $title.text('jQuery Easing Function');

  $('#effect-easing')
    .effect('explode', {
      pieces: 4,
      duration: 4000,
      easing: 'easeInExpo',
    });
})();
