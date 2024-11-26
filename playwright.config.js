const { defineConfig } = require('@playwright/test')

const PORT = process.env.PORT || 5000
const BASE_URL = `http://localhost:${PORT}`

module.exports = defineConfig({
  testDir: './e2e',
  webServer: {
    command: 'npm run start-prod',
    port: PORT,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: BASE_URL,
    browserName: 'chromium',
    headless: true,
  },
})
