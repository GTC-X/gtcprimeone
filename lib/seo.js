/** SEO titles and meta descriptions (EN / AR). Titles are full browser titles. */

const SITE = 'GTC Prime';

export const seo = {
  en: {
    home: {
      title: `Institutional Liquidity, Connectivity & Risk Management | ${SITE}`,
      description:
        'GTC Prime delivers institutional liquidity, low-latency connectivity and risk management for brokers, funds and professional trading desks. Explore MT4/MT5 solutions and multi-asset market access.',
    },
    about: {
      title: `About GTC Prime | Institutional Trading Partner | ${SITE}`,
      description:
        'Learn how GTC Prime combines liquidity, technology and dedicated support for brokers, hedge funds, asset managers and trading desks worldwide.',
    },
    liquidity: {
      title: `Institutional Liquidity Solutions | FX, CFDs & Multi-Asset | ${SITE}`,
      description:
        'Access deep FX and CFD liquidity, 2,000+ instruments and MT4/MT5 white label connectivity. Flexible pricing and support tailored to your brokerage or trading business.',
    },
    connectivity: {
      title: `Trading Connectivity & MT4/MT5 Integration | ${SITE}`,
      description:
        'Connect to global markets with fast, reliable infrastructure, GTC Position Keeper and trading analytics. Low-latency MT4/MT5 liquidity connectivity for institutional clients.',
    },
    'risk-management': {
      title: `Institutional Risk Management Solutions | ${SITE}`,
      description:
        'Monitor exposure, track positions and manage market, credit and liquidity risk with tools and expert support designed for brokers, funds and professional trading desks.',
    },
    contact: {
      title: `Contact GTC Prime | Liquidity & Support Enquiries | ${SITE}`,
      description:
        'Reach the GTC Prime team for liquidity, connectivity or risk management enquiries. Live chat, email and callback options for institutional and professional clients.',
    },
  },
  ar: {
    home: {
      title: `السيولة المؤسسية والربط التقني وإدارة المخاطر | ${SITE}`,
      description:
        'تقدّم GTC Prime سيولة مؤسسية وربطاً منخفض زمن الاستجابة وإدارة مخاطر للوسطاء والصناديق ومكاتب التداول. استكشف حلول MT4/MT5 والوصول إلى أسواق متعددة الأصول.',
    },
    about: {
      title: `عن GTC Prime | شريك التداول المؤسسي | ${SITE}`,
      description:
        'تعرّف على كيف تجمع GTC Prime بين السيولة والتكنولوجيا والدعم المخصص للوسطاء وصناديق التحوط ومديري الأصول ومكاتب التداول حول العالم.',
    },
    liquidity: {
      title: `حلول السيولة المؤسسية | فوركس وعقود فروقات | ${SITE}`,
      description:
        'احصل على سيولة عميقة في الفوركس وعقود الفروقات، وأكثر من 2000 أداة، وربط MT4/MT5 white label. تسعير مرن ودعم يناسب أعمال الوساطة والتداول لديك.',
    },
    connectivity: {
      title: `ربط التداول وتكامل MT4/MT5 | ${SITE}`,
      description:
        'اتصل بالأسواق العالمية عبر بنية تحتية سريعة وموثوقة وGTC Position Keeper وتحليلات التداول. ربط سيولة MT4/MT5 منخفض زمن الاستجابة للعملاء المؤسسيين.',
    },
    'risk-management': {
      title: `حلول إدارة المخاطر المؤسسية | ${SITE}`,
      description:
        'راقب التعرض وتتبع المراكز وأدر مخاطر السوق والائتمان والسيولة بأدوات ودعم خبراء مصمم للوسطاء والصناديق ومكاتب التداول المحترفة.',
    },
    contact: {
      title: `تواصل مع GTC Prime | استفسارات السيولة والدعم | ${SITE}`,
      description:
        'تواصل مع فريق GTC Prime لاستفسارات السيولة أو الربط التقني أو إدارة المخاطر. دردشة مباشرة وبريد إلكتروني وطلب اتصال للعملاء المؤسسيين والمحترفين.',
    },
  },
};

export function resolvePageKey(raw) {
  if (!raw || raw === 'home') return 'home';
  return raw === 'contact-us' ? 'contact' : raw;
}

function pagePath(key, lang) {
  const prefix = lang === 'ar' ? '/ar' : '';
  if (key === 'home') return prefix || '/';
  const slug = key === 'contact' ? 'contact-us' : key;
  return `${prefix}/${slug}`;
}

export function getPageMetadata(lang, pageKey) {
  const key = resolvePageKey(pageKey);
  const locale = lang === 'ar' ? 'ar' : 'en';
  const entry = seo[locale][key] ?? seo.en.home;

  return {
    title: entry.title,
    description: entry.description,
    openGraph: {
      title: entry.title,
      description: entry.description,
      siteName: SITE,
      locale: locale === 'ar' ? 'ar_AE' : 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: entry.title,
      description: entry.description,
    },
    alternates: {
      canonical: pagePath(key, locale),
      languages: {
        en: pagePath(key, 'en'),
        ar: pagePath(key, 'ar'),
      },
    },
  };
}
