(($) => {
  $.widget('ui.searchable', {
    options: {
      characterLength: 3,
      searchLabel: 'Enter characters:',
    },
    _create() {
      if (!this.element.is('table')) {
        console.warn('Widget is not a table...');
        return;
      }
      const colspan = (this.element).find('tbody tr:first').children().length;

      this.element.addClass('searchable-table');
      this.searchInput = $('<input />')
        .attr('type', 'text')
        .addClass('ui-corner-all ui-state-highlight')
        .insertBefore(this.element.find('tbody tr:first'))
        .wrap(`<tr class="search-box-container"><td colspan="${colspan}"></td></tr>`);

      $('<label/>')
        .addClass('label-search')
        .text(this.options.searchLabel)
        .insertBefore(this.searchInput);

      this._on(this.searchInput, {
        keyup: '_filterTable',
      });
    },
    _destroy() {
      this.element.find('tbody tr').show();
      this.element.removeClass('searchable-table');
      $('.search-box-container').remove();
    },
    _setOption(key, value) {
      switch (key) {
        case 'searchLabel':
          this.searchInput.prev('label').text(value);
          break;
        default:
          break;
      }
      this.options[key] = value;
      this._super('_setOption', key, value);
    },
    _filterTable() {
      const inputVal = this.searchInput.val().trim();
      if (inputVal.length < this.options.characterLength) {
        this.element.find('tbody tr').show();
        return;
      }
      this.element
        .find('tbody tr:gt(0)')
        .each((i, row) => {
          let found = false;
          $(row)
            .find('td')
            .each((j, td) => {
              const regExp = new RegExp(inputVal, 'i');
              if (regExp.test($(td).text())) {
                found = true;
              }
            });
          if (found) {
            $(row).show();
          } else {
            $(row).hide();
          }
        });
    },
  });
})(jQuery);
