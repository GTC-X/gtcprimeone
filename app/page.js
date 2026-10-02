import Website from '../components/Website';
import { getPageMetadata } from '../lib/seo';

export function generateMetadata() {
  return getPageMetadata('en', 'home');
}

export default function Page() {
  return <Website language="en" page="home" />;
}
