import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next';
import { ROUTER_PATH } from '@/constants';

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Result
        status="404"
        title={<span className="text-foreground">{t('NotFound.Status')}</span>}
        subTitle={<span className="text-muted-foreground">{t('NotFound.Title')}</span>}
        extra={
          <Link to={ROUTER_PATH.BASE}>
            <Button type="primary">{t('NotFound.Action')}</Button>
          </Link>
        }
      />
    </div>
  );
};

export default NotFound;
