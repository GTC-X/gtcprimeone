// Single source of truth for brand colours, typography and responsive headings.
export default {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.js'],
  theme: {
    extend: {
      colors: { primary: { DEFAULT: '#293b93', dark: '#1b296c', light: '#eef1fc' }, secondary: { DEFAULT: '#b68756', dark: '#805c35', light: '#faf5ef' }, ink: '#111111', muted: '#636978', surface: '#f6f7fb', line: '#e4e6ee' },
      fontFamily: { sans: ['Poppins', 'Arial', 'sans-serif'], arabic: ['Noto Sans Arabic', 'Poppins', 'sans-serif'] },
      fontSize: {
        display: ['clamp(2.8rem, 5.6vw, 5.25rem)', { lineHeight: '1.13', letterSpacing: '-0.055em', fontWeight: '500' }],
        h1: ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.15', letterSpacing: '-0.045em', fontWeight: '500' }],
        h2: ['clamp(2rem, 3.5vw, 3.35rem)', { lineHeight: '1.2', letterSpacing: '-0.04em', fontWeight: '500' }],
        h3: ['clamp(1.3rem, 2vw, 1.75rem)', { lineHeight: '1.4', letterSpacing: '-0.025em', fontWeight: '500' }],
        h4: ['1.125rem', { lineHeight: '1.5', fontWeight: '500' }],
        h5: ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
        h6: ['0.875rem', { lineHeight: '1.5', fontWeight: '600' }],
      },
      boxShadow: { soft: '0 20px 70px -25px rgb(26 41 95 / 16%)' },
    },
  },
  plugins: [],
};
