(() => {
  const $title = $('#title');
  $title.text('Sortable Interaction');

  const langs = ['Python', 'PHP', 'JavaScript', 'Java', 'C++', 'C'].sort(() => 0.5 - Math.random());
  const list = $('#langs')
    .sortable({
      placeholder: 'placeholder',
    });

  let i = 0;
  for (; i < langs.length; i += 1) {
    list.append(`<li>${langs[i]}</li>`);
  }

  $('button')
    .button()
    .on('click', () => {
      const tmp = [];
      $('#langs li')
        .each(function _iterator() {
          tmp.push(this.innerHTML);
        });
      $('#output')
        .empty()
        .text(`Selection: ${tmp.join(', ')}`);
    });
})();
