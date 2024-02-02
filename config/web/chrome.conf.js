const path = require('path');
const { config } = require('../wdio.shared.conf');

// ============
// Specs
// ============
config.specs = [
  path.join(process.cwd(), './test/specs/**/*.js')
];
//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    browserName: "Chrome",
    "goog:chromeOptions": {
      args: ["--incognito","start-maximized"],
    },
  },
]
//config.baseUrl = "https://products.4patriots.com/",

exports.config = config;