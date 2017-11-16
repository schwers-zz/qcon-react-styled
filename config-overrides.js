/* config-overrides.js */

// Enable nicer class names in the browser for debugging
const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env, {
    displayName: true,
  });

  return config;
}