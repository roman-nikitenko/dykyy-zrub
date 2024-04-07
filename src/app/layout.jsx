import { Roboto } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

import './globals.css';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: {
    template: '%s | Дикий зруб',
    default: 'Дикий зруб',
  },
  // TODO: create description
  description:
    'Будівництво будинків, бань, альтанок зі зрубу в Києві, Львові, Луцьку, Франківську, Ужгороді',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='uk'>
      <body className={`${roboto.className} flex min-h-[100vh] flex-col`}>
        <Header />
        <main className={'flex-auto'}>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
