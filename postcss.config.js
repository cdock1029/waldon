module.exports = {
  plugins: [
    'tailwindcss',
    ...(process.env.NODE_ENV === 'production'
      ? [
          [
            '@fullhuman/postcss-purgecss',
            {
              content: [
                './src/pages/**/*.{js,jsx,ts,tsx}',
                './src/components/**/*.{js,jsx,ts,tsx}',
              ],
              defaultExtractor: (content) =>
                content.match(/[\w-/:]+(?<!:)/g) || [],
              whitelistPatterns: [/data-reach/],
              whitelistPatternsChildren: [/data-reach/],
            },
          ],
        ]
      : []),
    'postcss-preset-env',
  ],
}
