/* eslint-disable quotes */
/* eslint-disable no-undef */
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1550e5",
              "@link-color": "#000000",
              "@success-color": "#5c5c5c",
              "@warning-color": "#faad14",
              "@error-color": "#f5222d",
              "@font-size-base": "14px",
              "@heading-color": "rgba(0, 0, 0, 0.85)",
              "@text-color": "rgba(0, 0, 0, 0.65)",
              "@text-color-secondary": "rgba(0, 0, 0, 0.45)",
              "@disabled-color": "rgba(0, 0, 0, 0.25)",
              "@border-radius-base": "4px",
              "@border-color-base": "none",
              "@box-shadow-base": ` 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
              "font-family": "'Biryani', 'sans-serif'",
              // '@icon-url': '"/fonts/Gramatika-Black"'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
