import { Box, Card, CardContent, Typography } from '@mui/material'

import { appConfig } from '@/data'
import { PageTitle } from '@/features/ui'

const AboutPage = () => {
  return (
    <Box>
      <PageTitle>{`About ${appConfig.application.name}`}</PageTitle>
      <Card>
        <CardContent>
          <Typography>{appConfig.application.description}</Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default AboutPage
