
'use client'

import { Provider } from 'react-redux';
import store from '../store/store';import Header from "../components/Header";
import Footer from "../components/Footer";
import { FormatQuoteRounded } from "@mui/icons-material";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />

        <Provider store={store}>
          {children}
        </Provider>

        <Footer />
      </body>
    </html>
  );
}
