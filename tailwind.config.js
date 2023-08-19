/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs: '480px'
      },
      fontFamily: {
        'Header': ['DM Serif Display'],
        'Subheader': ['DM Serif Text'],
        'content': ['Inria Serif']
      },
      colors: {
        'Tech-container-bg': 'rgba(175, 211, 226, 0.10)',
        'Footer-container-bg': 'rgba(25, 167, 206, 0.50)'
      },
      backgroundImage: {
        'Hero-img': "url('Assets/Hero-Profile-Pic.png'),linear-gradient(180deg, rgba(186, 207, 205, 0.00) 0%, #2AE5EB 28.96%, #61ACF1 69.06%)",
      },
      borderColor: {
        'Hero-border-color': 'rgba(171, 171, 171, 0.74)',
        'Portofolio-container-bg': 'rgba(25, 167, 206, 0.3)',
      }
      ,
      borderRadius: {
        'Mobile-nav-pil': '3.25rem',
        'Hero-profile-border': '16rem',
        'Tech-border': '1.25rem 0rem',
        'Porto-border': '1.25rem 0rem',
        'Porto-button-border': '0.5rem'
      },
      dropShadow: {
        'Tech-shadow': '5px 5px 10px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}

