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
    browserName: "safari",
    "bstack:options": {
      deviceName: "iPhone 13 Pro Max",
      osVersion: "15",
      deviceOrientation: "portrait",
      buildName: "ios",
      projectName: "4P MOBILE AUTOMATION",
    },
  },
  {
    browserName: "safari",
    "bstack:options": {
      deviceName: "iPad 9th",
      osVersion: "15",
      deviceOrientation: "portrait",
      buildName: "ios",
      projectName: "4P MOBILE AUTOMATION",
    },
  },
  {
    browserName: "Safari",
    "bstack:options": {
      os: "OS X",
      osVersion: "Ventura",
      browserVersion: "16.5",
      buildName: "ios",
      projectName: "4P MOBILE AUTOMATION",
    },
  },
];
(config.baseUrl = "https://products.sb.4patriots.net/"),
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
          buildName: "ios",
          buildTag: "latest",
        },
      },
    ],
  ]);

exports.config = config;
