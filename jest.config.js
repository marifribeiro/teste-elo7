module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "src/**/{!(index),}.ts",
    "src/**/*.{!(types),}.ts"
  ],
  moduleDirectories: ["node_modules", "src"]
};
