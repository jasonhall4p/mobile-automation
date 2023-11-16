const user = "jasonhall_RaA3EC";
const key = "cM3K6hsDgzg2HrcEoR4v";
const path = require("path");
require("dotenv").config();
const { config } = require("../wdio.shared.conf");

//
// ============
// BrowserStack Credentials
// ============
config.user = user;
config.key = key;

//
// ============
// Specs
// ============
config.specs = [
  path.join(process.cwd(), "./test/specs/**/*.js"),
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  
  {
    browserName: 'chrome',
    'bstack:options': {
      deviceName: 'Google Pixel 8 Pro',
      osVersion: '14.0',
      deviceOrientation: 'portrait'
    }
  },

  // {
  //   browserName: 'samsung',
  //   'bstack:options': {
  //     deviceName: 'Samsung Galaxy S23 Ultra',
  //     osVersion: '13.0',
  //     deviceOrientation: 'portrait'
  //   }
  // },
];

(config.maxInstances = 10),
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  (config.services = ['browserstack']);

exports.config = config;
