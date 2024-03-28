// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`
import "jest-canvas-mock";

import "@testing-library/jest-dom";

import failOnConsole from "jest-fail-on-console";
import "whatwg-fetch";
import ResizeObserver from "resize-observer-polyfill";
global.ResizeObserver = ResizeObserver;

failOnConsole();

import { server } from "./mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
