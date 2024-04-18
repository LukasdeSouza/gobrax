import { Outlet } from "react-router-dom"
import MenuAppBar from "../components/appBar"

const RootLayout = () => {
  return (
    <>
      <MenuAppBar/>
      <Outlet/>
    </>
  )
}

export default RootLayout