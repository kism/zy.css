// ponytail: python's http.server is enough, no need for a node static server dep
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./test",
  use: { baseURL: "http://127.0.0.1:8000" },
  webServer: {
    command: "python3 -m http.server 8000 --bind 127.0.0.1",
    url: "http://127.0.0.1:8000/static/zy.css",
    reuseExistingServer: !process.env.CI,
  },
});
