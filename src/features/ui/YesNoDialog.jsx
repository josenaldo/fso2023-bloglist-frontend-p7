import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material'

const YesNoDialog = ({ open, title, message, onYes, onNo }) => {
  return (
    <Dialog open={open} onClose={onNo}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{message}</DialogContent>
      <DialogActions>
        <Button onClick={onNo}>No</Button>
        <Button onClick={onYes}>Yes</Button>
      </DialogActions>
    </Dialog>
  )
}

export default YesNoDialog
