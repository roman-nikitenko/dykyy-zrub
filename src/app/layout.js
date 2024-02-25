import { Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='uk'>
      <body className={`${roboto.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
