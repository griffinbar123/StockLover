module.exports = {
  variants: {
    // display: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      '9xl': ['10rem'],
      '8.7xl': ['9.5rem'],
      '8.5xl': ['9rem'],
      '8xl': ['6.8rem'],
      '8.5xl': ['6.4rem'],
      '7xl': ['4.45rem'],
      '7.5xl': ['4.5rem'],
      '6xl': ['3.75rem', 1],
      '5.5xl': ['3.25rem'],
      '5xl': ['3rem', '1'],
      '4.5xl': ['2.6rem', '1'],
      '4xl': ['2.25rem', '2.5rem'],
      '3.5xl': ['2.0rem', '3rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '2xl': ['1.5rem', '2rem'],
      '1.5xl': ['1.25rem', '1.75rem'],
    },
  
    extend: {
      backgroundOpacity: {
        '1': '.1',
        '20': '0.02',
        '95': '0.95',
       }
  },
  plugins: [
     ]
}
}
