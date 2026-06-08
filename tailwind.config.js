// import defaultTheme from 'tailwindcss/defaultTheme';
// import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
// export default {
//     // content: [
//     //     './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
//     //     './storage/framework/views/*.php',
//     //     './resources/views/**/*.blade.php',
//     // ],
    
//       content: [
//     "./resources/**/*.blade.php",
//     "./resources/**/*.js",
//     "./resources/**/*.vue",
//   ],

//     theme: {
//         extend: {
//             fontFamily: {
//                 sans: ['Figtree', ...defaultTheme.fontFamily.sans],
//             },
//         },
//     },

//     plugins: [forms],
// };


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
 theme: {
        extend: {
            colors: {
                primary:     { DEFAULT: '#1a4731', foreground: '#ffffff' },
                accent:      { DEFAULT: '#d4a843', foreground: '#1a4731' },
                background:  '#ffffff',
                foreground:  '#1a1a1a',
                muted:       { DEFAULT: '#f4f1ec', foreground: '#6b6258' },
                sidebar:     '#f9f7f4',
                border:      '#e4ddd2',
                destructive: { DEFAULT: '#dc2626', foreground: '#ffffff' },
                card:        '#ffffff',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'Georgia', 'serif'],
                sans:  ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
  plugins: [],
}