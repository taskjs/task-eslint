# task-eslint
> Validate files with ESLint.

## The "eslint" task

### Usage Examples

```js
var eslint = new (require('task-eslint'))
eslint.run(inputs, options, logger)
```

### Options

#### options.config
Type: `path`

Path to your [ESLint config file](https://github.com/nzakas/eslint/blob/master/docs/rules/README.md) (`eslint.json`).

#### options.rulesdir

Type: `directory`
Default: [built-in rules directory](https://github.com/nzakas/eslint/tree/master/lib/rules)

Paths to directories with custom rules. Your custom rules will be used in addition to the built-in ones.

Recommended read: [Working with Rules](https://github.com/nzakas/eslint/blob/master/docs/developer-guide/working-with-rules.md)

#### options.format

Type: `select`
Default: `'stylish'`
Options: `['stylish', 'compact', 'jslint-xml', 'junit', 'tap']`

Use a specific output format.

#### options.failOnError

Type: `boolean`
Default: `'true'`

Fail when eslint error is found.

## Release History
* 2014-10-11    0.1.2    Add failOnError option
* 2014-10-11    0.1.1    Upgrade eslint to 0.8.2
* 2014-06-27    0.1.0    Initial release.

## License
Copyright (c) 2014 Yuanyan Cao. Licensed under the MIT license.
