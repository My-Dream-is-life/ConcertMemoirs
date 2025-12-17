import { FC } from 'react';
import { Card } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import type { BaseItem } from '@/types';

const AttractionCard: FC<BaseItem> = ({ name, image, description }) => {
  return (
    <Card
      hoverable
      className="overflow-hidden border-border bg-secondary/50 transition-all duration-300 hover:border-primary/30"
      styles={{ body: { padding: 16 } }}
      cover={
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      }
    >
      <h4 className="mb-2 flex items-center gap-2 font-display font-semibold text-foreground">
        <EnvironmentOutlined className="text-primary" />
        {name}
      </h4>

      <p className="line-clamp-3 text-sm text-muted-foreground">{description}</p>
    </Card>
  );
};

export default AttractionCard;
