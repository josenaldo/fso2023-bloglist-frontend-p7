import HomeIcon from '@mui/icons-material/Home'

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
    text: 'About',
    to: '/about',
    icon: InfoIcon,
    protected: false,
  },
  {
    text: 'Users',
    to: '/users',
    icon: PeopleIcon,
    protected: true,
  },
]

export default pages
