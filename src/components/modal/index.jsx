import { Close } from "@mui/icons-material"
import { Box, Divider, IconButton, Modal, Slide, Stack, Typography } from "@mui/material"

const ModalEdit = ({isModalOpen, handleCloseModal, title, children}) => {
  return (
    <Modal
      open={isModalOpen}
      onClose={handleCloseModal}
    >
    <Slide in={isModalOpen} direction='up'>
      <Box
        padding={2}
        borderRadius={2}
        width={300}
        style={{
          position: 'absolute', 
          top: '20%',
          left: '40%',
          backgroundColor: '#FFF'
        }}>
          <Stack direction='row' justifyContent={'space-between'} mb={1}>
            <Typography fontWeight={600}>
              Detalhes do {title}
            </Typography>
            <IconButton size="small" onClick={handleCloseModal}>
              <Close style={{fontSize: 18}}/>
            </IconButton>
          </Stack>
          <Divider flexItem/>
          <Stack mt={3}>
            {children}
          </Stack>
      </Box>
    </Slide>
  </Modal>
  )
}

export default ModalEdit