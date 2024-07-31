import { NAVIGATION_ROUTES } from "@caju/commons/constants"
import { Layout } from "@caju/components/Layout"
import DashboardPage from "@caju/pages/Dashboard"
import NewUserPage from "@caju/pages/NewUser"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

const WrapperRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path={NAVIGATION_ROUTES.dashboard}
            element={<DashboardPage />}
          />
          <Route path={NAVIGATION_ROUTES.newUser} element={<NewUserPage />} />
          <Route
            path="*"
            element={<Navigate to={NAVIGATION_ROUTES.dashboard} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default WrapperRouter
