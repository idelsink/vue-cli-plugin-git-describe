const Webpack = require('webpack');
const {gitDescribeSync} = require('git-describe');

/**
 * Git describe plugin
 *
 * @param  {Object} api - Vue CLI PluginAPI instance
 * @param  {Object} options - An object containing project local options specified in vue.config.js, or in the "vue" field in package.json.
 * @param  {Object} options.pluginOptions - Options for plugins. See: https://cli.vuejs.org/config/#pluginoptions
 * @param  {Object} options.pluginOptions.gitDescribe - gitDescribe plugin options. This object will be provided to the git describe module.
 * @param  {String} [options.pluginOptions.gitDescribe.variableName='GIT_DESCRIBE'] - The compile-time global constant name
 * @return {}
 */
module.exports = (api, options) => {
  // The options passed to this plugin using the Short-circuit evaluation technique
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-circuit_evaluation
  const gitDescribeOps = (((options || {}).pluginOptions || {}).gitDescribe || {});
  const variableName = gitDescribeOps.variableName || 'GIT_DESCRIBE';

  api.chainWebpack(webpackConfig => {
    /**
     * Get the git info from the git describe module
     * @return {Object} Returns the git info object from git describe
     */
    const gitInfo = () => {
      try {
        return gitDescribeSync.apply(this, gitDescribeOps);
      } catch (err) {
        console.error('Failed to retrieve git info:', err);
      }
      return null;
    }
    // Webpack's DefinePlugin is used to inject the 'global variable' on compile time
    // The variable used can be set via the options
    const definePluginOps = {};
    definePluginOps[variableName] = JSON.stringify(gitInfo());
    webpackConfig
      .plugin('gitDescribe')
      .use(Webpack.DefinePlugin, [definePluginOps]);
  })
}
