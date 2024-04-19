import { Outlet } from "react-router-dom"
import MenuAppBar from "../components/appBar"
import { Stack } from "@mui/material"
import SelectedData from "../components/selectedData"

const RootLayout = () => {
  return (
    <>
      <MenuAppBar/>
      <Stack px={3}>
        <SelectedData/>
        <Outlet/>
      </Stack>
    </>
  )
}

export default RootLayout