import { LoadingButton } from '@mui/lab'
import { Box, Button } from '@mui/material'

const BlogActions = ({
  blog,
  isBlogOwner,
  onRemove,
  onLike,
  isLikeLoading,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <LoadingButton
        variant="outlined"
        color="primary"
        loading={isLikeLoading}
        onClick={() => {
          onLike(blog)
        }}
      >
        Like
      </LoadingButton>
      {isBlogOwner && (
        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            onRemove(true)
          }}
        >
          Remove
        </Button>
      )}
    </Box>
  )
}

export default BlogActions
