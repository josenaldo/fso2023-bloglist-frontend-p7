import WebIcon from '@mui/icons-material/Web'
import ApiIcon from '@mui/icons-material/Api'

const appConfig = {
  application: {
    name: 'Bloglist P7',
    version: '0.0.1',
    description:
      'This project is a feature-rich bloglist application developed as part of the Full Stack Open course, part 7. Developed by Josenaldo de Oliveira Matos Filho, it is licensed under the MIT License. ',
    createdBy: 'Josenaldo Matos',
    repositories: [
      {
        name: 'Frontend',
        icon: WebIcon,
        url: 'https://github.com/josenaldo/fso2023-bloglist-frontend-p7',
      },
      {
        name: 'Backend',
        icon: ApiIcon,
        url: 'https://github.com/josenaldo/fso2023-bloglist-backend-p7',
      },
    ],

    copyrigth: '2023',
    technologies: [
      {
        name: 'React.js',
        description: 'A JavaScript library for building user interfaces',
        url: 'https://reactjs.org/',
      },
      {
        name: 'Tanstack React Query',
        description:
          'React Query is a state management and data fetching library for React applications. It provides features for fetching, caching, synchronizing, and updating server state in your React application.',
        url: 'https://www.npmjs.com/package/@tanstack/react-query',
      },
      {
        name: 'Material UI (MUI)',
        //  prettier-ignore
        description:
          'Material-UI is a popular React component library for building user interfaces, following the design principles of Google\'s Material Design.',
        url: 'https://mui.com/',
      },

      {
        name: 'Node.js',
        description:
          'An open-source, cross-platform JavaScript runtime environment',
        url: 'https://nodejs.org/en/',
      },
      {
        name: 'Express.js',
        description:
          'Fast, unopinionated, minimalist web framework for Node.js',
        url: 'http://expressjs.com/',
      },
      {
        name: 'Vite',
        description:
          'Vite is a modern build tool that was created to provide a faster and more efficient development experience. It provides a fast development server with ES module support, hot module replacement (HMR), and efficient build for production.',
        url: 'https://vitejs.dev/',
      },
    ],
    LOGGED_USER_KEY: 'loggedBlogListAppUser',
    BACKEND: import.meta.env.VITE_BACKEND_URL,
  },
}

export default appConfig
