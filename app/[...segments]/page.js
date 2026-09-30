import Website from '../../components/Website';
import { content } from '../../lib/content';
const pages = ['contact-us', 'about', 'liquidity', 'connectivity', 'risk-management', 'contact'];
export const dynamicParams = false;
export function generateStaticParams() { return [...pages.map(page => ({segments: [page]})), {segments: ['ar']}, ...pages.map(page => ({segments: ['ar', page]}))]; }
export async function generateMetadata({ params }) { const { segments } = await params; const lang = segments[0] === 'ar' ? 'ar' : 'en'; const raw = segments.at(-1) === 'ar' ? 'home' : segments.at(-1); const page = raw === 'contact-us' ? 'contact' : raw; return { title: `${content[lang].nav[page] || content[lang].nav.home} | GTC Prime`, description: content[lang].hero.description }; }
export default async function Page({ params }) { const {segments} = await params; const language = segments[0] === 'ar' ? 'ar' : 'en'; const raw = segments.at(-1) === 'ar' ? 'home' : segments.at(-1); const page = raw === 'contact-us' ? 'contact' : raw; return <Website language={language} page={page} />; }
