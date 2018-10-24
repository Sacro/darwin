module.exports = function(config) {
  config.set({
    coverageAnalysis: 'off',
    files: ['src/**/*.ts', 'test/**/*.ts', 'package.json'],
    jest: {
      config: require('./jest.config'),
    },
    // logLevel: "trace",
    maxConcurrentTestRunners: 4,
    mutate: ['src/**/*.ts', '!src/**/*.spec.ts'],
    mutator: 'typescript',
    packageManager: 'npm',
    reporters: ['html', 'clear-text', 'progress'],
    testRunner: 'jest',
    transpilers: [],
    tsconfigFile: 'tsconfig.json',
  });
};
