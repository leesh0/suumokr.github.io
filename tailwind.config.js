module.exports = {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    // ...
  ],
  purge: ['.vuepress/**/*.html', '.vuepress/**/*.vue', '.vuepress/**/*.jsx'],
  variants: {
    extend: { typography: ['dark'] },
  },
  theme: {
    extend: {
      typography(theme) {
        return {
          dark: {
            css: {
              color: theme('colors.gray.200'),
              '[class~="lead"]': { color: theme('colors.gray.400') },
              a: { color: theme('colors.gray.100') },
              strong: { color: theme('colors.gray.100') },
              'ul > li::before': { backgroundColor: theme('colors.gray.700') },
              hr: { borderColor: theme('colors.gray.800') },
              blockquote: {
                color: theme('colors.gray.100'),
                borderLeftColor: theme('colors.gray.800'),
              },
              h1: { color: theme('colors.gray.100') },
              h2: { color: theme('colors.gray.100') },
              h3: { color: theme('colors.gray.100') },
              h4: { color: theme('colors.gray.100') },
              code: { color: theme('colors.gray.100') },
              'a code': { color: theme('colors.gray.100') },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.black'),
              },
              thead: {
                color: theme('colors.gray.100'),
                borderBottomColor: theme('colors.gray.700'),
              },
              'tbody tr': { borderBottomColor: theme('colors.gray.800') },
            },
          },
        }
      },
      colors: {
        dark: {
          '50': '#4a4a4a',
          '100': '#3c3c3c',
          '200': '#323232',
          '300': '#2d2d2d',
          '400': '#222222',
          '500': '#1f1f1f',
          '600': '#1c1c1e',
          '700': '#1b1b1b',
          '800': '#181818',
          '900': '#0f0f0f',
        },
      },
    },
  },
}
