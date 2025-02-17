module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.{md,html}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#22c55e',
          DEFAULT: '#16a34a',
          dark: '#14532d'
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            color: theme('colors.primary_text.DEFAULT'),
            h1: {
              color: theme('colors.primary_text.DEFAULT'),
            },
            h2: {
              color: theme('colors.primary_text.DEFAULT'),
            },
            h3: {
              color: theme('colors.primary_text.DEFAULT'),
            },
            h4: {
              color: theme('colors.primary_text.DEFAULT'),
            }

          }
        }
      })
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

