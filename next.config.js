/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Add this line
  },
  output: "export", // Ensure this is present for static export
};

module.exports = nextConfig;
