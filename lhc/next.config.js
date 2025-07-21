/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs');
const withMDX = require('@next/mdx')();

const nextConfig = withMDX({
  experimental: {
    mdxRs: true,
  },
  env: {
    NEXT_PUBLIC_VERCEL_ENV: process.env.VERCEL_ENV
  }
})

module.exports = withSentryConfig(
  nextConfig,
  {
    // For all available options, see: https://github.com/getsentry/sentry-webpack-plugin#options
    silent: true, // Suppresses source map uploading logs during build
    org: 'linear-hill-charts',
    project: 'linear-hill-charts',
  },
  {
    // For all available options, see: https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
    widenClientFileUpload: true, // Upload a larger set of source maps for prettier stack traces (increases build time)
    transpileClientSDK: true, // Transpiles SDK to be compatible with IE11 (increases bundle size)
    tunnelRoute: '/monitoring', // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    hideSourceMaps: true, // Hides source maps from generated client bundles
    disableLogger: true, // Automatically tree-shake Sentry logger statements to reduce bundle size
  }
);
