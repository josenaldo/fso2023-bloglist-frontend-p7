import { Link } from '@/features/ui'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'

const BigButton = ({ to, text, Icon, linkProps = {} }) => {
  return (
    <Card>
      <Link
        to={to}
        sx={{
          textDecoration: 'none',
        }}
        {...linkProps}
      >
        <CardActionArea>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Icon
              sx={{
                fontSize: '6rem',
              }}
            />
            <Typography>{text}</Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default BigButton
