import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { TanStackQueryProvider } from "./commons/lib/tanstack-query/provider"
import "./index.css"
import Router from "./router"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanStackQueryProvider>
      <Router />
      <ToastContainer />
    </TanStackQueryProvider>
  </StrictMode>
)
