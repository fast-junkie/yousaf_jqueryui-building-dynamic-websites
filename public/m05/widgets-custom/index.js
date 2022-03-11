((fj) => {
  const { debug } = fj.app;
  const $title = $('#title');
  $title.text('Understanding jQuery UI Widgets in Detail');

  fj.util = {
    element(...args) {
      const [tag, cls] = args;
      return jQuery(`<${tag} />`).addClass(cls);
    },
  };

  fj.widget = {
    searchable() {
      debug('searchable', 'loaded...');
      const $tableData = $('#table-data');
      const $tbody = $tableData.find('tbody');
      const $tr = fj.util.element('tr', 'table-data-tr');
      const $td = fj.util.element('td', 'table-data-td');
      $.getJSON('./data.json', (data) => {
        $.each(data, (k, v) => {
          $tbody
            .append(
              $tr.clone()
                .append($td.clone().text(v.id))
                .append($td.clone().text(v.name))
                .append($td.clone().text(v.tags)),
            );
        });
      });

      const $button = $('button');
      const $btnEnable = $('#btnEnable');
      const $btnDestroy = $('#btnDestroy');
      $btnEnable.on('click', () => {
        debug('button enable', 'clicked...');
        $tableData.searchable({});
      });
      $btnDestroy.on('click', () => {
        debug('button destroy', 'clicked...');
        $tableData.searchable('destroy');
      });
      $button.button();
    },
  };

  fj.widget.searchable();
})(window.fj || (window.fj = {}));
