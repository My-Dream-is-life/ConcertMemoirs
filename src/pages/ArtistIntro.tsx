import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import jjImg from '@/assets/home/home-concert.jpg';
import BaseParticles from '@/components/atoms/BaseParticles';

const ArtistIntro: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a102a] via-[#2d1a4d] to-black">
      <BaseParticles />

      <div className="animate-pulse-slow absolute -top-32 left-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-primary/10 to-transparent opacity-60 blur-3xl" />
      <div className="animate-pulse-slow absolute bottom-0 right-0 z-0 h-96 w-96 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-300/20 via-primary/10 to-transparent opacity-40 blur-2xl" />

      <div className="relative z-10 mx-auto flex w-full flex-col-reverse gap-10 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="relative flex w-full items-center justify-center md:w-1/2">
          <div className="animate-blob -left-50 absolute -top-10 -z-10 hidden h-[600px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/40 via-amber-300/20 to-transparent opacity-80 blur-3xl md:block" />
          <div className="relative flex items-center justify-center">
            <img
              src={jjImg}
              alt="JJ Lin"
              className="h-[260px] w-[260px] rounded-[20px] object-cover shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-transform duration-700 hover:scale-105 md:h-[420px] md:w-[420px] md:rounded-[24px]"
            />
            <div className="pointer-events-none absolute -inset-3 rounded-[22px] border-2 border-primary/50 opacity-80 blur-sm md:-inset-4 md:rounded-[28px]" />
          </div>
        </div>

        <div className="flex w-full flex-col gap-6 md:w-1/2">
          <h1 className="bg-gradient-to-r from-primary via-amber-300 to-white bg-clip-text font-display text-4xl font-bold text-transparent drop-shadow-[0_6px_40px_hsl(var(--primary)/0.55)] md:text-7xl">
            {t('Artist.Info.Name')}
            <div className="mt-2 text-base font-medium text-foreground/80 md:text-2xl">
              {t('Artist.Info.Alias')} — {t('Artist.Info.Name.Description')}
            </div>
          </h1>

          <div className="prose prose-p:leading-relaxed prose-p:mb-4 prose-p:text-base md:prose-p:text-lg prose-headings:text-xl md:prose-headings:text-2xl max-w-none text-foreground/90">
            <p>
              <strong>{t('Artist.Info.PersonalGrowth.Title')}：</strong>{' '}
              {t('Artist.Info.PersonalGrowth.Content')}
            </p>
            <p>
              <strong>{t('Artist.Info.CreationJourney.Title')}：</strong>{' '}
              {t('Artist.Info.CreationJourney.Content')}
            </p>
            <p>
              <strong>{t('Artist.Info.Company.Title')}：</strong>{' '}
              {t('Artist.Info.Company.Content')}
            </p>
            <p>
              <strong>{t('Artist.Info.StageAndTour.Title')}：</strong>{' '}
              {t('Artist.Info.StageAndTour.Content')}
            </p>
            <p>
              <strong>{t('Artist.Info.SocialImpact.Title')}：</strong>{' '}
              {t('Artist.Info.SocialImpact.Content')}
            </p>
            <p>
              <strong>{t('Artist.Info.FutureOutlook.Title')}：</strong>{' '}
              {t('Artist.Info.FutureOutlook.Content')}
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <div className="flex gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-2 text-sm font-medium text-primary">
                {t('Artist.Info.Experience')}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-300/20 px-3 py-2 text-sm font-medium text-amber-300">
                {t('Artist.Info.Company')}
              </span>
            </div>

            <details className="mt-2 rounded-md bg-[rgba(255,255,255,0.02)] p-3">
              <summary className="cursor-pointer font-medium">
                {t('Artist.Info.CreationTimeline')}
              </summary>
              <ul className="mt-2 list-inside list-decimal space-y-2 pl-4 text-sm text-foreground/90">
                <li>
                  <strong>{t('Artist.Info.Creation.2003.Title')}：</strong>{' '}
                  {t('Artist.Info.Creation.2003.Content')}
                </li>
                <li>
                  <strong>{t('Artist.Info.Creation.2005.Title')}：</strong>{' '}
                  {t('Artist.Info.Creation.2005.Content')}
                </li>
                <li>
                  <strong>{t('Artist.Info.Creation.2011.Title')}：</strong>{' '}
                  {t('Artist.Info.Creation.2011.Content')}
                </li>
                <li>
                  <strong>{t('Artist.Info.Creation.2019.Title')}：</strong>{' '}
                  {t('Artist.Info.Creation.2019.Content')}
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 top-0 z-10 h-40 w-full bg-gradient-to-b from-black/90 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-40 w-full bg-gradient-to-t from-black/90 to-transparent" />
    </div>
  );
};

export default ArtistIntro;
