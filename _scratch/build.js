var Metalsmith = require('metalsmith');
var markdown   = require('metalsmith-markdown');
var templates  = require('metalsmith-templates');
var moment       = require('moment');
var baseUrl      = 'http://monkeycycle.ca';

Metalsmith(__dirname)
    .use(markdown())
    .use(templates({
            engine: 'handlebars',
            partials: {
                header: 'partials/header',
                footer: 'partials/footer'
            }
        }))
    .destination('./build')
    .build(function (err) { if(err) console.log(err) })
