module.exports = [
  {
    type: 'input',
    name: 'variableName',
    message: 'What variable name should be used?',
    default: 'GIT_DESCRIBE'
  },
  {
    type: 'confirm',
    name: 'installSemver',
    message: 'Install optional semver package? (defaults to No)',
    default: false
  }
];
