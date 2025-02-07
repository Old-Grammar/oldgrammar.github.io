import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js"

const config = (phase) => {
  /** @type {import('next').NextConfig} */
  const baseConfig = {
    eslint: {
      // dirs: ["actions", "app", "components", "hooks", "lib", "screens", "state"]
      // ignoreDuringBuilds: true
    },
    transpilePackages: [],
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io"
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com"
        }
      ]
    }
  }

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    /** @type {import('next').NextConfig} */
    const devConfig = {
      reactStrictMode: true,
      logging: {
        fetches: {
          fullUrl: true
        }
      },
      ...baseConfig
    }

    return devConfig
  }

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: "export",
    compiler: {
      reactRemoveProperties: {
          properties: ["data-testid"],
        },
      removeConsole: {
          exclude: ["info", "error"],
        }
    },
    typescript: {
      // tsconfigPath: "./tsconfig.build.json"
    },
    ...baseConfig,
  }

  return nextConfig
}

export default config
