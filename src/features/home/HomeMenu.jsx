import { Link } from '@/features/ui'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material'

const HomeMenu = ({ pages, user }) => {
  const pagesToDisplay = pages
    .filter((page) => page.to !== '/')
    .filter((page) => !page.protected || user)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 5,
      }}
    >
      {pagesToDisplay.map((page) => (
        <Card key={page.id}>
          <Link
            to={page.to}
            sx={{
              textDecoration: 'none',
            }}
          >
            <CardActionArea to={page.to}>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <page.icon
                  sx={{
                    fontSize: '6rem',
                  }}
                />
                <Typography>{page.text}</Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      ))}
    </Box>
  )
}

export default HomeMenu
