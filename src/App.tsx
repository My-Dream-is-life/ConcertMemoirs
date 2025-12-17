import { ConfigProvider, theme } from 'antd';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const App = () => (
  <ConfigProvider
    prefixCls="concertmemoirs"
    iconPrefixCls="concertmemoirsicon"
    theme={{
      algorithm: theme.darkAlgorithm,
      token: {
        colorPrimary: '#a855f7',
        colorBgContainer: 'hsl(270 15% 10%)',
        colorBgElevated: 'hsl(270 15% 12%)',
        colorBorder: 'hsl(270 10% 20%)',
        colorText: 'hsl(270 20% 96%)',
        colorTextSecondary: 'hsl(270 10% 60%)',
        borderRadius: 12,
        fontFamily: "'Noto Sans SC', sans-serif",
      },
      components: {
        Card: {
          colorBgContainer: 'transparent',
        },
        Menu: {
          colorBgContainer: 'transparent',
        },
        Drawer: {
          colorBgElevated: 'hsl(270 20% 6%)',
        },
      },
    }}
  >
    <RouterProvider router={router} />
  </ConfigProvider>
);

export default App;
