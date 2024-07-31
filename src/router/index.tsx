import { NAVIGATION_ROUTES } from "@caju/commons/constants"
import { Layout } from "@caju/components/Layout"
import DashboardPage from "@caju/pages/Dashboard"
import NewUserPage from "@caju/pages/NewUser"
import { BrowserRouter, Redirect, Route } from "react-router-dom"

const WrapperRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Route
          exact
          path={NAVIGATION_ROUTES.dashboard}
          component={DashboardPage}
        />
        <Route exact path={NAVIGATION_ROUTES.newUser} component={NewUserPage} />
        <Route
          exact
          path={NAVIGATION_ROUTES.history}
          component={() => <div>History</div>}
        />

        <Route exact path="*">
          <Redirect to={NAVIGATION_ROUTES.dashboard} />
        </Route>
      </Layout>
    </BrowserRouter>
  )
}

export default WrapperRouter
