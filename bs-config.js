
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 */
module.exports = {
  server: ['server', 'dist'],
  files: ['server/**', 'dist/**'],
  proxy: false,
  port: 3000,
  middleware: false,
  serveStatic: [],
  ghostMode: false,
  logPrefix: 'Browsersync',
  rewriteRules: [],
  open: false,
  browser: 'default',
  notify: true
}