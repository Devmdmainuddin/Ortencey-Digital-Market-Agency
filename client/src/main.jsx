import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/Routes';
import { RouterProvider, } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { store } from './Featured/store/store';
import { Provider } from 'react-redux'


const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
     <Provider store={store}>
     <RouterProvider router={router} />
      </Provider>
    
    </QueryClientProvider>
    
  </StrictMode>,
)
