module.exports = {
  coverageReporters: ['text', 'text-summary'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/*.types.ts',
    '!<rootDir>/src/**/index.ts',
  ],
  detectOpenHandles: true,
  forceExit: true,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  preset: 'ts-jest',
  roots: ['src'],
  testEnvironment: 'jsdom',
};
