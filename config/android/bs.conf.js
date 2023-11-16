// const user = "jasonhall_RaA3EC";
// const key = "cM3K6hsDgzg2HrcEoR4v";
require('dotenv').config()
const path = require("path");
const { config } = require("../wdio.shared.conf");

//
// ============
// BrowserStack Credentials
// ============
// config.user = process.env.BROWSERSTACK_USERNAME;
// config.key = process.env.BROWSERSTACK_ACCESS_KEY;
(config.hostname = "hub.browserstack.com"),
  //
  // ============
  // Specs
  // ============
  (config.specs = [path.join(process.cwd(), "./test/specs/**/*.js")]);

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    browserName: 'chrome',
    'bstack:options': {
      deviceName: 'Google Pixel 7',
      osVersion: '13.0',
      deviceOrientation: 'portrait',
      buildName: "Android",
      projectName: "4P MOBILE AUTOMATION",
    }
  },
  {
    browserName: 'chrome',
    'bstack:options': {
      deviceName: 'Samsung Galaxy Tab S8',
      osVersion: '12.0',
      deviceOrientation: 'portrait',
      buildName: "Android",
      projectName: "4P MOBILE AUTOMATION",
    }
  },
  {
    browserName: "Chrome",
    "bstack:options": {
      os: 'Windows',
      osVersion: '11',
      browserVersion: '117.0',
      buildName: "Android",
      projectName: "4P MOBILE AUTOMATION",
    },
  },
];
(config.baseUrl = "https://products.sb.4patriots.net/"),
  (config.maxInstances = 1),
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  (config.services = [
    [
      "browserstack",
      {
        testObservability: true,
        testObservabilityOptions: {

          user: process.env.BROWSERSTACK_USERNAME,
          key: process.env.BROWSERSTACK_ACCESS_KEY,
          projectName: "4P MOBILE AUTOMATION",
          buildName: "Android",
          buildTag: "latest",
        },
      },
    ],
  ]);

exports.config = config;
