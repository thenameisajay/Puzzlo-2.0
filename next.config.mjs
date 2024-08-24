/** @type {import('next').NextConfig} */
const nextConfig = {
  // This check ensures that the compiler configuration is only included in production
  ...(process.env.NODE_ENV === 'production' && {
    compiler: {
      // This line of code removes the console logs from the production build of the application so users cannot see them and developers can still see them in the development build.
      removeConsole: { exclude: ['error'] },
    },
  }),
};

export default nextConfig;
