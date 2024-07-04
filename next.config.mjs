/** @type {import('next').NextConfig} */
const nextConfig = {
    safelist: [{
        pattern: /^border-/,
        pattern: /^text-/,
        variants: ['sm','md','lg','xl','2xl','3xl']
    }]
};

export default nextConfig;
