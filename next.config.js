/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            // Basic redirect
            {
                source: "/confirm-fxfj-subscription",
                destination: "/confirm-waitlist",
                permanent: true,
            },
            // Wildcard path matching
            // {
            //     source: "/blog/:slug",
            //     destination: "/news/:slug",
            //     permanent: true,
            // },
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
        ],
    },
}

module.exports = nextConfig
