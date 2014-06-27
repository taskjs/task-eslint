var Execution = require('execution');
var path = require('path');

module.exports = Execution.extend({
    // The type of option could be HTML5 input types: file, directory, number, range, select,
    // url, email, tel, color, date, time, month, time, week, datetime(datetime-local),
    // string(text), boolean(checkbox), array, regexp, function and object.
    options: {
        config: {
            label: 'Config path',
            type: 'file',
            placeholder: 'Path to your ESLint config file'
        },
        rulesdir: {
            label: 'Rules dir',
            type: 'directory'
        },
        format: {
            label: 'Output format',
            type: 'select',
            options: ['stylish', 'compact', 'jslint-xml', 'junit', 'tap']
        }
    },
    run: function (inputs, options, logger, settings) {
        return this._run(inputs, options, logger, settings);
    },
    execute: function (resolve, reject) {
        var options = this.options;
        var inputs = this.inputs;
        var logger = this.logger;

        var eslint = require('eslint').cli;

        var paths = inputs.map(function(record){
            return record.path;
        });

        if(paths.length === 0){
            logger.warn('Couldn\'t find any inputs to validate with ESLint.');
        }else{
            options._ = paths;
            options.config = options.config ? path.resolve(options.config) : '';
            eslint.execute(options);
        }

        resolve(inputs);
    }
})
