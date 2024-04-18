import { Outlet } from "react-router-dom"
import MenuAppBar from "../components/appBar"
import { Stack } from "@mui/material"

const RootLayout = () => {
  return (
    <>
      <MenuAppBar/>
      <Stack px={3}>
        <Outlet/>
      </Stack>
    </>
  )
}

export default RootLayout