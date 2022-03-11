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
    accordion() {
      debug('accordion', 'build...');
      const $accordion = $('#accordion');
      const $header = fj.util.element('h3', 'header');
      const $content = fj.util.element('div', 'content');
      $.getJSON('./data.json', (data) => {
        $.each(data, (k, v) => {
          $accordion
            .append($header.clone().text(v.name))
            .append($content.clone().html(v.about));
        });
        const options = { active: 2, collapsible: false };
        $accordion.accordion(options);
      });
    },
    progressBar() {
      debug('progressbar', 'build...');
      const $progressbar = $('#progressbar');
      const options = {
        value: 65,
      };
      $progressbar.progressbar(options);
    },
    tabs() {
      debug('tabs', 'build...');
      const $tabs = $('#tabs');
      const options = {};
      $tabs.tabs(options);
    },
    buttons() {
      debug('buttons', 'build...');
      const $btn1 = $('#btn-1');
      // const $btn2 = $('#btn-2');
      const $link1 = $('#link-1');
      $btn1.button({
        label: 'Simple Button',
        icon: 'ui-icon-shuffle',
        iconPosition: 'end',
      });
      $link1.button();
    },
    slider() {
      const $slider = $('#slider-1');
      $slider.slider({
        animate: 'slow',
        create: _showSlider,
        range: true,
        slide: _showSlider,
        values: [20, 80],
      });

      function _showSlider() {
        $('#lower').text($slider.slider('values', 0));
        $('#upper').text($slider.slider('values', 1));
      }
    },
    tooltip() {
      const $tooltip = $('#tooltip-1');
      $tooltip.tooltip({
        content: '<b>Tooltip</b> central...',
      });
    },
    menu() {
      const $menu = $('#menu');
      $menu.menu();
    },
    dialog() {
      const $dialog = $('#dialog');
      const $opener = $('#opener');
      $dialog.dialog({
        autoOpen: false,
        buttons: [{
          icon: 'ui-icon-trash',
          click() {
            $(this).dialog('close');
          },
        }],
        show: 'slide',
        hide: 'fold',
      });
      $opener.on('click', () => {
        $dialog.dialog('open');
      });
    },
    spinner() {
      const $spinner = $('#spinner');
      $spinner.spinner({
        min: 6,
        max: 66,
        step: 3,
      });
    },
    search() {
      const suggestions = ['c++', 'java', 'php', 'coldfusion', 'javascript', 'asp', 'ruby'];
      const $search = $('#search');
      $search.autocomplete({
        source: suggestions,
      });
    },
    datePicker() {
      const $inlineDate = $('#inlineDate');
      const options = {
        showAnim: 'clip',
        showButtonPanel: true,
        showWeek: true,
        minDate: new Date(2001, 9 - 1, 11),
        maxDate: new Date(),
        changeMonth: true,
        changeYear: true,
      };
      $inlineDate.datepicker(options);
    },
  };

  fj.widget.accordion();
  fj.widget.progressBar();
  fj.widget.tabs();
  fj.widget.buttons();
  fj.widget.slider();
  fj.widget.tooltip();
  fj.widget.menu();
  fj.widget.dialog();
  fj.widget.spinner();
  fj.widget.search();
  fj.widget.datePicker();
})(window.fj || (window.fj = {}));
