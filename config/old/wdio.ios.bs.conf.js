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
    browserName: 'safari',
    'bstack:options': {
      deviceName: 'iPhone 15 Pro Max',
      osVersion: '17',
      deviceOrientation: 'portrait'
    }
  },
  {
    browserName: 'safari',
    'bstack:options': {
      deviceName: 'iPhone 11',
      osVersion: '13',
      deviceOrientation: 'portrait'
    }
  },
  {
    browserName: 'safari',
    'bstack:options': {
      deviceName: 'iPhone 13 Pro Max',
      osVersion: '15',
      deviceOrientation: 'portrait'
    }
  }
];

(config.maxInstances = 10),
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  (config.services = ['browserstack']);

exports.config = config;
