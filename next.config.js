const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    // disable: process.env.NODE_ENV === 'development',
    buildExcludes: [/middleware-manifest.json$/]
});

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    }
};

module.exports = withPWA(nextConfig);