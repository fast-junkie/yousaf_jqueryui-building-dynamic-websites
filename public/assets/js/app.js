((fj) => {
  fj.app = {
    debug(...args) {
      const [key, obj] = args;
      const _ = '\n--- - --- - --- - --- - ---\n';
      const msg = `DEBUG => [${key}]${_}`;
      window.console.debug(msg, obj);
    },
  };

  const interval = setInterval(_init, 1e2);
  function _init() {
    if (document.readyState === 'complete') {
      clearInterval(interval);
      _setBackButton();
      fj.app.debug('document.readyState', document.readyState);
    }
  }

  function _setBackButton() {
    const $main = $('main');
    const $div = $('<div/>');
    const $button = $('<button/>');
    $button
      .addClass('btn btn-sm btn-secondary back')
      .html('&laquo; Back')
      .on('click', () => {
        window.history.back();
      });
    $main.append($div.append($button));
  }
})(window.fj || (window.fj = {}));
