import { Link } from '@/features/ui'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material'

const HomeMenu = ({ pages, user }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
      }}
    >
      {pages.map((page) => (
        <>
          {!page.protected || user ? (
            <Card key={page.id}>
              <CardActionArea href={page.to} componente={Link}>
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
            </Card>
          ) : null}
        </>
      ))}
    </Box>
  )
}

export default HomeMenu
