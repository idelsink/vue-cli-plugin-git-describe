/**
 * Git describe generator
 *
 * @param  {Object} api - Vue CLI GeneratorAPI instance
 * @param  {Object} options - An object containing generator options.
 * @return {}
 */
module.exports = (api, options) => {
  // Set the variableName to use
  api.extendPackage({
    vue: {
      pluginOptions: {
        gitDescribe: {
          variableName: options.variableName || 'GIT_DESCRIBE'
        }
      }
    }
  });

  // Add git-describe as a dependency
  api.extendPackage({
    devDependencies: {
      'git-describe': '^4.0.4'
    }
  });

  if (options.installSemver || false) {
    // Install semver package
    api.extendPackage({
      devDependencies: {
        'semver': '^6.0.0'
      }
    });
  }
};
