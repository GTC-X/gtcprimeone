// Single source of truth for brand colours, typography and responsive headings.
export default {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.js'],
  theme: {
    extend: {
      colors: { primary: { DEFAULT: '#293b93', dark: '#1b296c', light: '#eef1fc' }, secondary: { DEFAULT: '#b68756', dark: '#805c35', light: '#faf5ef' }, ink: '#111111', muted: '#636978', surface: '#f6f7fb', line: '#e4e6ee' },
      fontFamily: { sans: ['Poppins', 'Arial', 'sans-serif'], arabic: ['Noto Sans Arabic', 'Poppins', 'sans-serif'] },
      fontSize: {
        display: ['clamp(2.9125rem, 5.85vw, 4.7625rem)', { lineHeight: '1.13', letterSpacing: '-0.055em', fontWeight: '500' }],
        h1: ['clamp(1.75rem, 2.4vw, 2.25rem)', { lineHeight: '1.25', letterSpacing: '-0.035em', fontWeight: '500' }],
        h2: ['clamp(1.6125rem, 2.15vw, 2.0625rem)', { lineHeight: '1.3', letterSpacing: '-0.03em', fontWeight: '500' }],
        h3: ['clamp(1.375rem, 1.75vw, 1.5rem)', { lineHeight: '1.4', letterSpacing: '-0.02em', fontWeight: '500' }],
        h4: ['1.4375rem', { lineHeight: '1.45', fontWeight: '500' }],
        h5: ['1.3125rem', { lineHeight: '1.5', fontWeight: '600' }],
        h6: ['1.1875rem', { lineHeight: '1.5', fontWeight: '600' }],
      },
      boxShadow: { soft: '0 20px 70px -25px rgb(26 41 95 / 16%)' },
    },
  },
  plugins: [],
};
