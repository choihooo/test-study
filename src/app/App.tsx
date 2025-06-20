import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MainLayout from "@src/Layout/MainLayout";
import TransactionList from "@src/pages/TransactionListPage";
import TransactionDetail from "@src/pages/TransactionDetailPage";

import "./App.css";


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/transactions",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <TransactionList />,
      },
    ],
  },
  {
    path: "/transactions/:id",
    element: <TransactionDetail />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
