
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'nunito': ['Nunito', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Colores personalizados para el portafolio - paleta pastel suave
				'pastel-pink': {
					50: 'hsl(348, 100%, 97%)',
					100: 'hsl(348, 100%, 94%)',
					200: 'hsl(348, 86%, 86%)',
					300: 'hsl(348, 86%, 76%)',
					400: 'hsl(348, 86%, 66%)',
					500: 'hsl(348, 86%, 56%)',
					DEFAULT: 'hsl(348, 100%, 94%)',
				},
				'pastel-purple': {
					50: 'hsl(270, 100%, 98%)',
					100: 'hsl(270, 100%, 95%)',
					200: 'hsl(270, 100%, 88%)',
					300: 'hsl(270, 100%, 80%)',
					400: 'hsl(270, 100%, 72%)',
					500: 'hsl(270, 100%, 64%)',
					DEFAULT: 'hsl(270, 100%, 95%)',
				},
				'pastel-green': {
					50: 'hsl(155, 100%, 96%)',
					100: 'hsl(155, 100%, 90%)',
					200: 'hsl(155, 73%, 84%)',
					300: 'hsl(155, 73%, 74%)',
					400: 'hsl(155, 73%, 64%)',
					500: 'hsl(155, 73%, 54%)',
					DEFAULT: 'hsl(155, 100%, 90%)',
				},
				'pastel-beige': {
					50: 'hsl(32, 50%, 98%)',
					100: 'hsl(32, 50%, 94%)',
					200: 'hsl(32, 50%, 88%)',
					300: 'hsl(32, 50%, 80%)',
					400: 'hsl(32, 50%, 70%)',
					500: 'hsl(32, 50%, 60%)',
					DEFAULT: 'hsl(32, 50%, 94%)',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'glow': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.5'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
