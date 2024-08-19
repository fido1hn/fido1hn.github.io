export const useProjects = () =>
  useState('projects', () => [
    {
      slug: 'finance-tracker',
      imageUrl: 'finance-tracker-square_rcpfao.png',
      title: 'Finance Tracker',
      description:
        'An application for POS Agents to quickly keep track of POS transactions on the go, get financial reports and chat with A.I about their finances.',
      technologies: ['Nuxt', 'TailwindCSS', 'Supabase'],
    },
    {
      slug: 'natours-travels',
      imageUrl: 'natours-app-square_afuovq.png',
      title: 'Natours Travels',
      description:
        'An application for tourist to book tours to scenic nature spots around the world, with geolocation tagging.',
      technologies: ['Node.js', 'Express.js', 'MongoDB'],
    },
    {
      slug: 'omnifood-website',
      imageUrl: 'omnifood-square_gyujxk.png',
      title: 'Omnifood Website',
      description:
        'A landing page for an A.I meal planning and delivery company, with modern UI/UX branding and responsive design.',
      technologies: ['HTML', 'SCSS'],
    },
    {
      slug: 'natours-website',
      imageUrl: 'natours-webpage-square_elwfhz.png',
      title: 'Natours Website',
      description:
        'A landing page for Natours travels web application, advanced animation, responsive design, and modern UI.',
      technologies: ['HTML', 'SCSS'],
    },
  ]);
