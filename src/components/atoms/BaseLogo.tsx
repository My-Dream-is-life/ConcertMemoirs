import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CustomerServiceOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { ROUTER_PATH } from '@/constants';

const BaseLogo: FC = () => {
  const { t } = useTranslation('common');

  return (
    <Link to={ROUTER_PATH.BASE} className="group flex items-center gap-2">
      <CustomerServiceOutlined className="text-xl text-primary transition-transform group-hover:scale-110" />
      <span className="bg-gradient-to-r from-primary to-purple-300 bg-clip-text font-display text-xl font-bold text-transparent">
        {t('Common.Logo.Title')}
      </span>
    </Link>
  );
};

export default BaseLogo;
