module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/src', '<rootDir>/tests'],
    testMatch: ['**/*.test.js'],
    moduleDirectories: ['node_modules', '<rootDir>/src'],
    transform: {
        '^.+\\.js$': 'babel-jest', // Usa Babel para transformar archivos .js
    },
};