// Load zone.js for the server.
require('zone.js/dist/zone-node');
require('reflect-metadata');
const path = require('path');
// Import renderModuleFactory from @angular/platform-server.
const renderModuleFactory = require('@angular/platform-server').renderModuleFactory;
// Import the AOT compiled factory for your AppServerModule.
// This import will change with the hash of your built server bundle.
const AppServerModuleNgFactory = require('./dist-server/main.fe4fc628de6bcf5f0a34.bundle.js').AppServerModuleNgFactory;
// Load the index.html file.
const index = require('fs').readFileSync('./src/index.html', 'utf8');
// Render to HTML and log it to the console.
renderModuleFactory(AppServerModuleNgFactory, { document: index, url: '/' }).then(function (html) { return console.log(html); });
