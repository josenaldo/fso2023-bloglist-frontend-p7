import { BigButton, BigButtonBox } from '@/features/ui'

const HomeMenu = ({ pages, user }) => {
  const pagesToDisplay = pages
    .filter((page) => page.to !== '/')
    .filter((page) => !page.protected || user)

  return (
    <BigButtonBox
      sx={{
        justifyContent: 'center',
      }}
    >
      {pagesToDisplay.map((page) => (
        <BigButton
          key={page.to}
          to={page.to}
          text={page.text}
          Icon={page.icon}
        />
      ))}
    </BigButtonBox>
  )
}

export default HomeMenu
