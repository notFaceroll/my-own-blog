/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  env: {
    mongo_username: 'naegling',
    mongo_pass: 'jCV1Cu5nzZNDWLNN',
    mongo_cluster: 'cluster0',
    mongo_database: 'my-site',
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
