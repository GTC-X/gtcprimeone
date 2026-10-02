import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/noto-sans-arabic/400.css';
import '@fontsource/noto-sans-arabic/500.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';
import { getPageMetadata } from '../lib/seo';

const homeMeta = getPageMetadata('en', 'home');

export const metadata = {
  metadataBase: new URL('https://gtcprime.com'),
  title: homeMeta.title,
  description: homeMeta.description,
  openGraph: homeMeta.openGraph,
  twitter: homeMeta.twitter,
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }) { return <html lang="en" suppressHydrationWarning><body>{children}</body></html>; }
