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
  // {
  //   browserName: 'chrome',
  //   'bstack:options': {
  //     deviceName: 'Samsung Galaxy Tab S8',
  //     osVersion: '12.0',
  //     deviceOrientation: 'portrait',
  //     buildName: "Android",
  //     projectName: "4P MOBILE AUTOMATION",
  //   }
  // },
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
  (config.maxInstances = 3),
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
          user: user,
          key: key,
          projectName: "4P MOBILE AUTOMATION",
          buildName: "Android",
          buildTag: "latest",
        },
      },
    ],
  ]);

exports.config = config;
