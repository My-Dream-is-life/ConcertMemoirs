import { FC } from 'react';
import { Card, Avatar } from 'antd';
import type { BaseItem } from '@/types';

const FoodCard: FC<BaseItem> = ({ name, image, description }) => {
  return (
    <Card
      hoverable
      className="border-border bg-secondary/50 transition-all duration-300 hover:border-primary/30"
      styles={{ body: { padding: 16 } }}
    >
      <div className="flex gap-4">
        <Avatar
          src={image}
          alt={name}
          size={80}
          shape="square"
          className="flex-shrink-0 rounded-lg"
        />

        <div className="min-w-0 flex-1">
          <h4 className="mb-1 font-display font-semibold text-foreground">🍽️ {name}</h4>
          <p className="line-clamp-3 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default FoodCard;
