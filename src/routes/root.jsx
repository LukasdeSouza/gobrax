import { Outlet } from "react-router-dom"
import MenuAppBar from "../components/appBar"
import { Box, Stack } from "@mui/material"

const RootLayout = () => {
  return (
    <Box>
      <MenuAppBar/>
      <Stack px={3}>
        <Outlet/>
      </Stack>
    </Box>
  )
}

export default RootLayout