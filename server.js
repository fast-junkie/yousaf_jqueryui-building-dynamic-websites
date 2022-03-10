const debug = require('debug')('jqueryui');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();
const appName = 'yousaf_jqueryui-building-dynamic-websites';
const port = process.env.PORT || 2112;

debug('Booting... %o', appName);
app.use(logger('dev'));

// Base...
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Assets routed from node_modules...
/**
app.use('/assets/vendor/angular',
      express.static(path.join(__dirname, 'node_modules', 'angular')));
app.use('/assets/vendor/jquery',
      express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));
*/

// Routes

// Export
if (require.main === module) {
  app.listen(port, () => {
    console.info(`Express started on port:${port}.`);
  });
} else {
  module.exports = app;
}
