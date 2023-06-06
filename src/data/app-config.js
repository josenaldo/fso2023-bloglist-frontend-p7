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
        name: 'Redux',
        //  prettier-ignore
        description:
          'Redux is a predictable state container for JavaScript applications. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. Redux provides a single source of truth for your state, making it easier to reason about your application\'s behavior and to debug problems.',
        url: 'https://redux.js.org/',
      },
      {
        name: 'Redux Toolkit',
        description:
          'Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It is intended to be the standard way to write Redux logic. It includes utilities to simplify several common Redux use cases, including store setup, defining reducers, immutable update logic, and even creating entire slices of state at once.',
        url: 'https://redux-toolkit.js.org/',
      },
      {
        name: 'Redux Toolkit Query',
        description:
          'Redux Toolkit Query (RTK Query) is a powerful data fetching and caching tool. It provides a set of API middleware utilities designed to simplify data fetching and caching in a Redux application. RTK Query is part of Redux Toolkit and provides automatic caching, background updates, and more.',
        url: 'https://redux-toolkit.js.org/rtk-query/overview',
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
