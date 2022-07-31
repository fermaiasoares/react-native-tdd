module.exports = {
    preset: 'jest-expo',
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/node_modules/**',
        '!**/coverage/**',
        '!**/babel.config.js',
        '!**/jest.setup.js',
        '!**/metro.config.js'
    ]
}