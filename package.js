Package.describe({
  name: 'wadehra:jquery-scrollbar',
  version: '0.2.10',
  // Brief, one-line summary of the package.
  summary: 'jQuery Scrollbar\n Cross-browser CSS customizable scrollbar by gromo https://github.com/gromo/jquery.scrollbar',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/wadehrarshpreet/wadehra-jquery-scrollbar',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('jquery', 'client');
  api.addFiles('jquery-scrollbar.css','client');
  api.addFiles('jquery-scrollbar.min.js','client');
});
