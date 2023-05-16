module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
      tsconfig: 'tsconfig.json',
    },
  },
  testMatch: ['<rootDir>/test/**/*.test.ts'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'reports/jest-unit-junit',
      },
    ],
  ],
  testTimeout: 5 * 1000, // 5 seconds
  collectCoverage: true,
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageReporters: ['html', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
  },
  collectCoverageFrom: ['./src/**/*.ts'],
  coverageDirectory: './reports/jest-unit-coverage',
};
