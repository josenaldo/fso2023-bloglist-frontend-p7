import { CardMedia } from '@mui/material'

const BlogImage = ({ blog, image }) => {
  return (
    <CardMedia
      component="img"
      title={blog.title}
      image={image}
      sx={{
        aspectRatio: '4/1',
      }}
    />
  )
}

export default BlogImage
