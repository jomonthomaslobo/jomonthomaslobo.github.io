// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jomonthomaslobo', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Aidsys Latest News',
          description:
            'Latest News is a simple plugin that allows you to display the latest news articles on your WordPress website. You can easily customize the appearance and behavior of the news ticker to suit your needs',
          imageUrl:
            'https://s.w.org/plugins/geopattern-icon/aidsys-latest-news.svg',
          link: 'https://wordpress.org/plugins/aidsys-latest-news/',
        }
      ],
    },
  },
  seo: {
    title: 'Jomon Thomas Lobo - Product Manager & Cybersecurity Professional',
    description: 'Experienced Product Manager with expertise in PHP, Laravel, and WordPress security. Contributor to WordPress core and open-source projects. Cybersecurity enthusiast with multiple certifications.',
    imageURL: 'https://avatars.githubusercontent.com/u/16968704?v=4',
  },
  social: {
    linkedin: '/jomonthomaslobo',
    twitter: '@jomonthomaslobo',
    mastodon: '',
    researchGate: '',
    facebook: '/jomonthomaslobo',
    instagram: '/jomonlobo',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'jomonthomaslobo',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'jomonlobo.online',
    phone: '',
    email: 'jomonthomaslobo@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1mF8cyEN65LhtckIvxWRyUREdpfO0B-9F/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Laravel',
    'PHP',    
    'WordPress',
    'Flutter',
    'Project Management',
    'JavaScript',
    'React',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'AWS',
    'Cyber Security'
   
  ],
  experiences: [
    {
      company: 'Freelancer',
      position: 'WordPresss Developer,WordPress Security Expert,Laravel Projects, Secuirty Audit',
      from: 'May 2023',
      to: 'May 2024',
      companyLink: 'https://webdevcompany.in',
    },
    {
      company: 'Awsm Digital Innovations Pvt Ltd',
      position: 'Associate Product Manager',
      from: 'May 2023',
      to: 'May 2024',
      companyLink: 'https://awsm.in',
    },
    {
      company: 'Alignminds Technologies',
      position: 'Senior Software Engineer',
      from: 'April 2022',
      to: 'May  2023',
      companyLink: 'https://alignminds.com',
    },
    {
      company: 'Akira Software Solutions',
      position: 'Team Lead',
      from: 'Jan 2022',
      to: 'April  2023',
      companyLink: 'https://akiraplc.com',
    },
    {
      company: 'KITE- Kerala Infrastructure and Technology for Education',
      position: 'Software Engineer',
      from: 'Dec 2018',
      to: 'Jan  2022',
      companyLink: 'https://kite.kerala.gov.in',
    },
    {
      company: 'Filanza Infosec Pvt Ltd',
      position: 'TL Web Development',
      from: 'May 2017',
      to: 'Dec  2018',
      companyLink: 'https://filanza.org',
    },
    {
      company: 'Probuk Solutions LLP',
      position: 'TL ',
      from: 'Jan 2015',
      to: 'May  2017',
      companyLink: 'https://filanza.org',
    },
  ],
  certifications: [
    {
      name: 'Cyber Security Certification',
      body: 'Google via Coursera',
      year: 'March 2024',
      link: 'https://www.credly.com/badges/d663e7d9-b26f-452c-81ba-4aca472a9889/linked_in?t=s9vifl',
    },
    {
      name: 'Project Management Proffessional Certification',
      body: 'Google via Coursera',
      year: 'March 2024',
      link: 'https://www.credly.com/badges/a3d2f237-c7f0-4306-a580-9c3273859c5d',
    },
  ],
  educations: [
    {
      institution: 'MCA',
      degree: 'Post Graduation',
      from: '2012',
      to: '2015',
    },
    {
      institution: 'Bsc CS',
      degree: 'Degree',
      from: '2009',
      to: '2012',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Credits to  <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
