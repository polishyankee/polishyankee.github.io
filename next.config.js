// next.config.js
// PAGES_BASE_PATH comes from actions/configure-pages in CI:
//   - project site (polishyankee.github.io/devops-portfolio) -> "/devops-portfolio"
//   - custom domain or user site (example.com, polishyankee.github.io) -> ""
// Locally it is unset, so the site is served from the root.
const basePath = process.env.PAGES_BASE_PATH || ''

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
}
