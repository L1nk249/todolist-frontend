
'use client'

import { Provider } from 'react-redux';
import store from '../store/store';import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme'

export default function RootLayout({ children }) {
  const toastOptions = {
    style: { 
      fontSize: '2rem', 
      padding: '20px',
      transform: 'scale(1)',
      transformOrigin: 'center',
    },
    autoClose: 2000,
    hideProgressBar: true,
  };
  return (
    <html lang="fr">
      <body>
        <Provider store={store}>
          <ThemeProvider theme={theme}>  {/* Wrap components with ThemeProvider */}
            <Header />
            {children}
            <ToastContainer
              position="bottom-center" {...toastOptions} />  // spread operator pour rajouter toutes les toastOptions à ToastContainer
            <Footer />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}