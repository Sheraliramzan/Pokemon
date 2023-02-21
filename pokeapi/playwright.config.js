const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    // Option shared for all projects.
    timeout: 30000,
    user: {
        ignoreHTTPSErrors: true,
    },

    //Options specific to each project browser size
    projects: [
        {
            name: 'Desktop Chromium',
            user: {
                browserName: 'chromium',
                viewport: {width: 1280, height: 720},
            },
        },
        {
            name: 'Desktop Safari',
            use: {
                browserName: 'webkit',
                viewport: { width: 1280, height: 720 },
            },
        },
        {
            name: 'Desktop Firefox',
            use: {
                browserName: 'firefox',
                viewport: { width: 1280, height: 720 },
            },
        },
        {
            name: 'Mobile Chrome',
            use: {
                browserName: 'chromium',
                ...devices['iPhone XR'],
                viewport: { width: 414, height: 896 },
            },
        },
        {
            name: 'Tablet Chrome',
            use: {
                browserName: 'chromium',
                ...devices['iPad Air'],
                viewport: { width: 820, height: 1180 },
            },
        },

    ]
}

module.exports = config