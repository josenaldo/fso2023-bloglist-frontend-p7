import { Header, Menu, Footer } from '@/features/layout'
import { Alert } from '@/features/alert'
import styles from './Template.module.css'
import { Container } from '@mui/material'

const Template = ({ children }) => {
  return (
    <div className={styles.mainWindow}>
      <Header />
      <Menu />
      <Alert />
      {/* <Notification /> */}

      <Container>
        <main>{children}</main>
      </Container>

      <Footer />
    </div>
  )
}

export default Template
