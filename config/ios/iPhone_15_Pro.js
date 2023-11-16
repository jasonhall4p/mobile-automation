const path = require('path');
const { config } = require('../wdio.shared.conf');

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
  path.join(process.cwd(), './test/specs/split-tests/*.js')
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "ios",
    browserName: 'safari',
    maxInstances: 1,
    "appium:platformVersion": "17.0",
    "appium:deviceName": "iPhone 15 Pro Max",
    "appium:automationName": "XCUITest"
  }
]

config.baseUrl = "https://products.sb.4patriots.net/",



//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = [['appium', {
  args: {
    address: 'localhost',
    port: 4723,
    relaxedSecurity: true
  },
  logPath: './wdio-logs/appium/'
}]];

exports.config = config;
