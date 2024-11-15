import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			primary: {
				50: '#E9ECF7',
				100: '#7D97C6',
				200: '#476DAD',
				300: '#2C58A1',
				400: '#104294',
				500: '#0F3C87',
				600: '#0E377B',
				700: '#0D3270',
				800: '#0C2D66',
				900: '#0B295D',
				DEFAULT: '#104294',
			  },
			  // Dark Mode Variants (using dark class)
			  'dark-primary': {
				50: '#232E57', // Darker light mode version
				100: '#1C254B', 
				200: '#172146', 
				300: '#111C42',
				400: '#0A173D', 
				500: '#051234',
				600: '#040E30', 
				700: '#030B2C',
				800: '#020828',
				900: '#010527',
				DEFAULT: '#010527',
			  },
  		},
  		
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
