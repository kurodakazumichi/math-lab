module.exports = {
  moduleFileExtensions: [
    "ts",
    "js",
  ],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  globals: {
    'ts-jest': {
      "tsConfig": "tsconfig.json"
    }
  },

  testRegex: "\\.spec\\.ts$",
  moduleNameMapper: {
    "^~/(.+)": "<rootDir>/src/$1"
  }
}