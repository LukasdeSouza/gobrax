import { Box, Modal, Typography } from "@mui/material"

const ModalEdit = ({openModal, handleCloseModal, title, children}) => {
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        {children}
      </Box>
    </Modal>
  )
}

export default ModalEdit