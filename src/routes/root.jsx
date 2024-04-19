import { Outlet } from "react-router-dom"
import MenuAppBar from "../components/appBar"
import { Box, Stack } from "@mui/material"
import SelectedData from "../components/selectedData"

const RootLayout = () => {
  return (
    <Box>
      <MenuAppBar/>
      <Stack px={3}>
        <SelectedData/>
        <Outlet/>
      </Stack>
    </Box>
  )
}

export default RootLayout