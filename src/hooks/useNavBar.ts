import { useTranslation } from 'react-i18next';
import { ROUTER_PATH } from '@/constants';

interface NavItem {
  path: string;
  label: string;
}

export const useNavBar = () => {
  const { t } = useTranslation('common');

  const navItems: NavItem[] = [
    { path: ROUTER_PATH.TIME_LINE, label: t('Common.Header.NavBar.Timeline') },
    { path: ROUTER_PATH.CITY_LIST, label: t('Common.Header.NavBar.City.List') },
    { path: ROUTER_PATH.TICKETS, label: t('Common.Header.NavBar.Tickets') },
    { path: ROUTER_PATH.COLLECTION, label: t('Common.Header.NavBar.Collection') },
    { path: ROUTER_PATH.MUSIC_LIST, label: t('Common.Header.NavBar.Music.List') },
  ];

  return { navItems };
};
