import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button, Result } from 'antd';
import { ROUTER_PATH } from '@/constants';

const NotFound = () => {
  const location = useLocation();

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
        title={<span className="text-foreground">404</span>}
        subTitle={<span className="text-muted-foreground">抱歉，您访问的页面不存在</span>}
        extra={
          <Link to={ROUTER_PATH.BASE}>
            <Button type="primary">返回首页</Button>
          </Link>
        }
      />
    </div>
  );
};

export default NotFound;
