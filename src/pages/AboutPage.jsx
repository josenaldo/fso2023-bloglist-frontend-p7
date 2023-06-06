import { Box, Card, CardContent, Typography } from '@mui/material'

import { appConfig } from '@/data'
import {
  PageTitle,
  BigButton,
  SectionTitle,
  BigButtonBox,
  Link,
} from '@/features/ui'

const AboutPage = () => {
  const repositories = appConfig.application.repositories
  const technologies = appConfig.application.technologies

  return (
    <Box>
      <PageTitle>{`About ${appConfig.application.name}`}</PageTitle>
      <Card component="section">
        <CardContent>
          <Typography>{appConfig.application.description}</Typography>
        </CardContent>
      </Card>

      <Box component="section">
        <SectionTitle>Repositories</SectionTitle>
        <BigButtonBox>
          {repositories.map((repo) => (
            <BigButton
              key={repo.url}
              to={repo.url}
              text={repo.name}
              Icon={repo.icon}
              linkProps={{
                target: '_blank',
                rel: 'noopener noreferer',
              }}
            />
          ))}
        </BigButtonBox>
      </Box>

      <Box component="section">
        <SectionTitle>Technologies</SectionTitle>
        <Typography>Key technologies used in this project include:</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            mt: '2rem',
          }}
        >
          {technologies.map((tech) => (
            <Card key={tech.url} sx={{ width: '100%' }}>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <Typography variant="h5">{tech.name}</Typography>
                <Typography variant="body2">{tech.description}</Typography>
                <Typography variant="body2">
                  <Link
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferer"
                  >
                    {tech.url}
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default AboutPage
