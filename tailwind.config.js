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
            maxWidth: '100ch'
          }
        }
      })
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

