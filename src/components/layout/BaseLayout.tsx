import { FC } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const { Content } = Layout;

const BaseLayout: FC = () => {
  return (
    <Layout id="website-content" className="min-h-screen bg-background">
      <Header />

      <Content>
        <Outlet />
      </Content>

      <Footer />
    </Layout>
  );
};

export default BaseLayout;
