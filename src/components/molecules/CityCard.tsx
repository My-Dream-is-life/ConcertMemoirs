import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, Tag } from 'antd';
import {
  EnvironmentOutlined,
  CalendarOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { ROUTER_PATH } from '@/constants';
import type { BaseCityItem } from '@/types';

const CityCard: FC<BaseCityItem> = ({ id, name, image, date, description }) => {
  const { t } = useTranslation('common');

  return (
    <Link to={ROUTER_PATH.CITY_DETAIL.replace(':id', id)} className="group block">
      <Card
        hoverable
        className="overflow-hidden border-border bg-card transition-all duration-500 hover:border-primary/50"
        styles={{
          body: { padding: 0 },
        }}
        cover={
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <Tag color="purple" icon={<CalendarOutlined />} className="mb-2">
                {date}
              </Tag>
              <h3 className="mb-2 flex items-center gap-2 font-display text-2xl font-bold text-foreground">
                <EnvironmentOutlined className="text-primary" />
                {name}
              </h3>
              <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                {description}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-4">
                <span>{t('Common.Action.ViewDetail')}</span>
                <ArrowRightOutlined />
              </div>
            </div>
          </div>
        }
      />
    </Link>
  );
};

export default CityCard;
