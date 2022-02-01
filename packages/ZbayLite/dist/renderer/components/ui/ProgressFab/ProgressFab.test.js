"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const renderComponent_1 = require("../../../testUtils/renderComponent");
const ProgressFab_1 = require("./ProgressFab");
describe('ProgressFab', () => {
    const Icon = () => react_1.default.createElement("div", null, "Icon");
    it('renders component', () => {
        const result = (0, renderComponent_1.renderComponent)(react_1.default.createElement(ProgressFab_1.ProgressFab, { onClick: jest.fn() },
            react_1.default.createElement(Icon, null)));
        expect(result.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            class="makeStyles-wrapper-3"
          >
            <button
              class="MuiButtonBase-root MuiFab-root makeStyles-root-1"
              tabindex="0"
              type="button"
            >
              <span
                class="MuiFab-label"
              >
                <div>
                  Icon
                </div>
              </span>
              <span
                class="MuiTouchRipple-root"
              />
            </button>
          </div>
        </div>
      </body>
    `);
    });
    it('renders success', () => {
        const result = (0, renderComponent_1.renderComponent)(react_1.default.createElement(ProgressFab_1.ProgressFab, { onClick: jest.fn(), success: true },
            react_1.default.createElement(Icon, null)));
        expect(result.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            class="makeStyles-wrapper-30"
          >
            <button
              class="MuiButtonBase-root MuiFab-root makeStyles-root-28 makeStyles-buttonSuccess-31"
              tabindex="0"
              type="button"
            >
              <span
                class="MuiFab-label"
              >
                <svg
                  aria-hidden="true"
                  class="MuiSvgIcon-root"
                  focusable="false"
                  role="presentation"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                  />
                </svg>
              </span>
              <span
                class="MuiTouchRipple-root"
              />
            </button>
          </div>
        </div>
      </body>
    `);
    });
    it('renders loading', () => {
        const result = (0, renderComponent_1.renderComponent)(react_1.default.createElement(ProgressFab_1.ProgressFab, { onClick: jest.fn(), loading: true },
            react_1.default.createElement(Icon, null)));
        expect(result.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            class="makeStyles-wrapper-66"
          >
            <button
              class="MuiButtonBase-root MuiFab-root makeStyles-root-64"
              tabindex="0"
              type="button"
            >
              <span
                class="MuiFab-label"
              >
                <div>
                  Icon
                </div>
              </span>
              <span
                class="MuiTouchRipple-root"
              />
            </button>
            <div
              class="MuiCircularProgress-root makeStyles-fabProgress-65 MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate"
              role="progressbar"
              style="width: 68px; height: 68px;"
            >
              <svg
                class="MuiCircularProgress-svg"
                viewBox="22 22 44 44"
              >
                <circle
                  class="MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate"
                  cx="44"
                  cy="44"
                  fill="none"
                  r="20.2"
                  stroke-width="3.6"
                />
              </svg>
            </div>
          </div>
        </div>
      </body>
    `);
    });
    it('renders disabled', () => {
        const result = (0, renderComponent_1.renderComponent)(react_1.default.createElement(ProgressFab_1.ProgressFab, { onClick: jest.fn(), success: true, disabled: true },
            react_1.default.createElement(Icon, null)));
        expect(result.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            class="makeStyles-wrapper-105"
          >
            <button
              class="MuiButtonBase-root MuiFab-root makeStyles-root-103 makeStyles-buttonSuccess-106 Mui-disabled Mui-disabled"
              disabled=""
              tabindex="-1"
              type="button"
            >
              <span
                class="MuiFab-label"
              >
                <svg
                  aria-hidden="true"
                  class="MuiSvgIcon-root"
                  focusable="false"
                  role="presentation"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </body>
    `);
    });
});
