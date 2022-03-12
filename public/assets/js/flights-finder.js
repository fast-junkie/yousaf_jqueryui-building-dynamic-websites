((fj) => {
  const { debug } = fj.app;
  const elem = {
    airport: {
      from: $('#airport-from'),
      to: $('#airport-to'),
    },
    date: $('#date'),
    processingDialog: $('<div/>')
      .dialog({
        autoOpen: false,
        modal: true,
        title: 'Searching for available flights...',
      }),
    progressbar: $('<div/>')
      .progressbar({ value: false }),
    title: $('#title'),
  };
  const meta = {
    title: 'Flights Finder',
  };

  fj.util = {
    isTypeSupported(type) {
      const input = document.createElement('input');
      input.setAttribute('type', type);
      return input.type === type;
    },
    setPageTitle() {
      elem.title.text(meta.title);
    },
  };

  fj.service = {

    lookupAirports() {
      return $.getJSON('/assets/data/airports.json');
    },
    searchFlights() {
      debug('searchFlights', 'Inside lookup flights...');
      const baseUrl = 'https://google-flights-search.p.rapidapi.com/search?';
      const from = `departure_airport_code=${elem.airport.from.val()}&`;
      const to = `arrival_airport_code=${elem.airport.to.val()}&`;
      const departDate = `departure_date=${elem.date.val()}`;
      const url = baseUrl + from + to + departDate;

      const settings = {
        async: true,
        crossDomain: true,
        url,
        method: 'GET',
        headers: {
          'x-rapidapi-key': '6a8489a615msh780044398d27559p186972jsn7d0ac6021974',
          'x-rapidapi-host': 'google-flights-search.p.rapidapi.com',
        },
      };
      return $.ajax(settings);
    },
    setupEvents() {
      $('form')
        .on('submit', (event) => {
          event.preventDefault();
          event.stopImmediatePropagation();
          if (fj.service.validateForm()) {
            elem.processingDialog.dialog('open');

            fj.service.searchFlights()
              .then((data) => {
                debug('data', data);

                elem.processingDialog.dialog('close');
              });
          }
        });
    },
    setupValidation() {
      elem.date
        .on('change', () => {
          let value;
          try {
            value = $.datepicker.parseDate('yy-mm-dd', elem.date.val());
          } catch (error) {
            debug('setupValidation error', error);
          }
          if (value) {
            elem.date[0].setCustomValidity('');
          } else {
            elem.date[0].setCustomValidity('Please provide a valid date.');
          }
        });
    },

    validateForm() {
      const form = $('form');

      form
        .find('.ui-state-error-text')
        .removeClass('ui-state-error-text');
      form
        .find('[aria-invalid]')
        .attr('aria-invalid', false);
      form
        .find(':ui-tooltip')
        .tooltip('destroy');

      const invalidFields = form
        .find(':invalid')
        .each(function _iterator() {
          form
            .find(`label[for=${this.id}]`)
            .addClass('ui-state-error-text');
          $(this)
            .attr('aria-invalid', true)
            .attr('title', this.validationMessage)
            .tooltip({ tooltipClass: 'ui-state-error' });
        })
        .first()
        .trigger('focus');

      return invalidFields.length === 0;
    },
  };

  fj.ff = {

  };

  const interval = setInterval(_init, 1e2);
  function _init() {
    if (document.readyState === 'complete') {
      clearInterval(interval);
      debug(meta.title, 'loaded...');
      fj.util.setPageTitle();
      elem.processingDialog.append(elem.progressbar);
      if (!fj.util.isTypeSupported('date')) {
        elem.date.datepicker({ dateFormat: 'yy-mm-dd' });
      }
      fj.service
        .lookupAirports()
        .then((data) => {
          elem
            .airport
            .from
            .add(elem.airport.to)
            .autocomplete({
              source: data.airports,
              minLength: 2,
            });
        });
      fj.service.setupValidation();
      fj.service.setupEvents();
    }
  }
})(window.fj || (window.fj = {}));
