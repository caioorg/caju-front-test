import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query"

const queryClient = new QueryClient()

export {
  queryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
}
