export default {
    content: [ // Reemplaza "purge" por "content"
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'media', // Puedes usar 'media', 'class' o false
    theme: {
      extend: {}, // Aquí puedes personalizar colores, fuentes, espaciado, etc.
    },
    plugins: [], // Aquí puedes agregar plugins de Tailwind
  };