module.exports = {
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
      },
      borderColor: {
        default: 'var(--color-ui-divider)',
      },
      colors: {
        primary: 'var(--color-primary)',
        fg: 'var(--color-fg)',
        muted: 'var(--color-muted)',
        inverse: 'var(--color-inverse)',
        ui: {
          overlay: 'var(--color-ui-overlay)',
          divider: 'var(--color-ui-divider)',
          surface: 'var(--color-ui-surface)',
          base: 'var(--color-ui-base)',
        },
      },
    },
  },
}
