import ConnectivityHero from './ConnectivityHero';
import ConnectivityIntro from './ConnectivityIntro';
import ConnectivityPositionKeeper from './ConnectivityPositionKeeper';
import ConnectivityAnalytics from './ConnectivityAnalytics';

export default function ConnectivityPage({ t, href }) {
  const page = t.connectivityPage;

  return (
    <>
      <ConnectivityHero
        page={page}
        talk={t.talk}
        explore={t.explore}
        contactHref={href('contact')}
      />
      <ConnectivityIntro paragraphs={page.intro} />
      <ConnectivityPositionKeeper section={page.positionKeeper} />
      <ConnectivityAnalytics section={page.analytics} />
    </>
  );
}
