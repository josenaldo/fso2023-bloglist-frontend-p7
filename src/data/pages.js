import HomeIcon from '@mui/icons-material/Home'
import ArticleIcon from '@mui/icons-material/Article'
import PeopleIcon from '@mui/icons-material/People'
import InfoIcon from '@mui/icons-material/Info'

const pages = [
  {
    text: 'Home',
    to: '/',
    icon: HomeIcon,
    protected: false,
  },
  {
    text: 'Blogs',
    to: '/blogs',
    icon: ArticleIcon,
    protected: false,
  },

  {
    text: 'Users',
    to: '/users',
    icon: PeopleIcon,
    protected: true,
  },
  {
    text: 'About',
    to: '/about',
    icon: InfoIcon,
    protected: false,
  },
]

export default pages
