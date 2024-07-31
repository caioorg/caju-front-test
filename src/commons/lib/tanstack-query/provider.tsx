import { ReactNode } from "react"
import { QueryClientProvider, queryClient } from "./"

export const TanStackQueryProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
