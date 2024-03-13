
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TodoContainer } from './components/TodoContainer';

function App() {
  
const router = createBrowserRouter([
  {
    path: '/',
    element: <TodoContainer />
  },
  {
    path: '/about',
    element: <p>I am about page</p>
  }
])
const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient} >
      <RouterProvider router={router} />

    </QueryClientProvider>
      
   
  )
}

export default App
