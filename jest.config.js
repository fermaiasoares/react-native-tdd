module.exports = {
    preset: 'jest-expo',
    testPathIgnorePatterns: [
        '/node_modules',
        '/android',
        '/ios'
    ],
    setupFilesAfterEnv: [
        '@testing-library/jest-native/extend-expect',
        'jest-styled-components'
    ],
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