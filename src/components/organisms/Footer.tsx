import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import LanguagesDropdown from '../molecules/LanguagesDropdown';

const Footer: FC = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="border-t border-border py-8">
      <div className="px-4 text-center">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="w-full text-center text-sm text-muted-foreground">
            {t('Common.Footer.Content')}
            <span className="mt-3 block">{t('Common.Footer.Copyright')}</span>
          </p>

          <LanguagesDropdown />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
