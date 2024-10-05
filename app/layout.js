
'use client'

import { Provider } from 'react-redux';
import store from '../store/store';import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from 'react-toastify';

export default function RootLayout({ children }) {
  const toastOptions = {
    style: { 
      fontSize: '2rem', 
      padding: '20px',
      transform: 'scale(1)',
      transformOrigin: 'center',
      position:"bottom-center"
    },
    autoClose: 2000,
    hideProgressBar: true,
  };
  return (
    <html lang="fr">
      <body>
        <Header />

        <Provider store={store}>
          {children}
        </Provider>
<ToastContainer {...toastOptions}/>
        <Footer />
      </body>
    </html>
  );
}
