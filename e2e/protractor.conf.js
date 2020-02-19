// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 4000,
  specs: [
    './src/*.e2e-spec.ts',
    './src/page-object.js',
    './src/pages/register.spec.ts',
    './src/**/*.spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',
    //  user: 'tester@perfectomobile.com',
    // password: 'password',
    // platformName: 'Android'
  },
    // seleniumAddress: 'https://cloudName.perfectomobile.com/nexperience/perfectomobile/wd/hub', 
  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine', 
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 20000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};