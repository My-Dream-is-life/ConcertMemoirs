import { FC, ReactNode } from 'react';
import {
  CalendarOutlined,
  EnvironmentOutlined,
  CustomerServiceOutlined,
} from '@ant-design/icons';
import type { BaseCityItem } from '@/types';

interface DetailLayoutProps extends BaseCityItem {
  children: ReactNode;
}

const DetailLayout: FC<DetailLayoutProps> = ({
  name,
  address,
  image,
  date,
  memory,
  children,
}) => {
  return (
    <div>
      <div className="relative h-[60vh] min-h-[400px]">
        <img src={image} alt={name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12">
          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-primary">
            <span className="flex items-center gap-2">
              <CalendarOutlined />
              {date}
            </span>
            <span className="flex items-center gap-2">
              <EnvironmentOutlined />
              {address}
            </span>
          </div>

          <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-6xl">
            JJ20 {name}站
          </h1>

          <div className="flex max-w-2xl items-start gap-3">
            <CustomerServiceOutlined className="mt-1 flex-shrink-0 text-lg text-primary" />
            <p className="italic text-muted-foreground">{`"${memory}"`}</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-12 sm:px-12">{children}</div>
    </div>
  );
};

export default DetailLayout;
