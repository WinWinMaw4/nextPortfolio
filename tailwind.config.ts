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
			        // Light Mode Colors

			richBlack:{
				300: '#1D3C5E',
				400: '#0D1B2A',
				500: '#0A141F',
				DEFAULT: '#0D1B2A',
			},
			oxfordBlue:{
				400: '#1B263B',
				DEFAULT: '#1B263B',
			},
			primary: {
				200: '#D9E0E7',
				300: '#8D9DAF',
				400: '#415A77',
				500: '#3A5069',
				600: '#2C3D4E',
				DEFAULT: '#415A77',
			  },
			  platinum:{
				300: '#F5F5F4',
				400: '#E0E1DD',
				500: '#CFCFC9',
				DEFAULT: '#E0E1DD',
			  },

			  // Dark Mode Colors
			  'dark-richBlack': {
				300: '#142536',
				400: '#0B151F',
				500: '#050B11',
				DEFAULT: '#0B151F',
			  },
			  'dark-oxfordBlue': {
				400: '#111827',
				DEFAULT: '#111827',
			  },
			  'dark-primary': {
				200: '#3B444F',
				300: '#2A3138',
				400: '#1F252C',
				500: '#181E24',
				600: '#101316',
				DEFAULT: '#1F252C',
			  },
			  'dark-platinum': {
				300: '#424242',
				400: '#313131',
				500: '#1F1F1F',
				DEFAULT: '#313131',
			  },
  		},
  		
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
