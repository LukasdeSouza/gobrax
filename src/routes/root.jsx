import { Outlet } from "react-router-dom"
import MenuAppBar from "../components/appBar"
import { Box, Stack } from "@mui/material"
import ToastMain from '../components/toast/toastMain'

const RootLayout = () => {
  return (
    <Box>
      <MenuAppBar/>
      <Stack px={3}>
        <Outlet/>
      </Stack>
      <ToastMain/> 
    </Box>
  )
}

export default RootLayout