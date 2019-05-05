/**
 * Git describe generator
 *
 * @param  {Object} api - Vue CLI GeneratorAPI instance
 * @param  {Object} options - An object containing generator options.
 * @return {}
 */
module.exports = (api, options) => {
  // Add git-describe as a dependency
  api.extendPackage({
    devDependencies: {
      'git-describe': '^4.0.4'
    }
  });
};
