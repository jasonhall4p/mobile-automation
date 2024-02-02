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
    browserName: 'safari technology preview'
}
]
config.baseUrl = "https://products.uat.4patriots.net/",

exports.config = config;