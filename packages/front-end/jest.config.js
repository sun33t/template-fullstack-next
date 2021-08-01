module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    // '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
}
