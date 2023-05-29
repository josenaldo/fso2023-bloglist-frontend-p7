const appConfig = {
  application: {
    name: 'Bloglist P7',
    version: '0.0.1',
    description:
      'This project is a bloglist app, for the Fullstack Open course, part 7. The project is licensed under the MIT License and was created by Josenaldo de Oliveira Matos Filho.',
    LOGGED_USER_KEY: 'loggedBlogListAppUser',
    BACKEND: import.meta.env.VITE_BACKEND_URL,
  },
  footer: {
    createdBy: 'Josenaldo Matos',
    repository: 'https://github.com/josenaldo/fso2023-bloglist-frontend-p7',
    copyrigth: '2023',
  },
}

export default appConfig
