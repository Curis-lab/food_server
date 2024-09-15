import type {Config} from 'jest';

const config: Config = {
  preset:'ts-jest',
  clearMocks: true,
  verbose:true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns:["/node_modules","/dashboard","/frontend"],
  moduleDirectories:["node_modules","src"],
  coverageProvider: "v8",
};

export default config;
