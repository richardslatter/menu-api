module.exports = {
  preset: "ts-jest",
  collectCoverage: true,
  verbose: false,
  testPathIgnorePatterns: ["build"],
  rootDir: "src",
  coveragePathIgnorePatterns: ["generated", "dependency-container.ts"],
  coverageDirectory: "<rootDir>/../coverage",
};
