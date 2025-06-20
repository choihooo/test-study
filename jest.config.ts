import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  transform: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.test.json",
    },
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: ["<rootDir>/**/?(*.)+(spec|test).[tj]s[x]"],
  clearMocks: true,
  collectCoverage: false,
  moduleNameMapper: {
    "^@public/(.*)$": "<rootDir>/public/$1",
  },
};

export default config;
