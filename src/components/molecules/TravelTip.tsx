import { FC } from 'react';
import type { BaseItem } from '@/types';

const TravelTip: FC<BaseItem> = ({ icon: Icon, name, description }) => {
  return (
    <div className="flex gap-4 rounded-xl border border-border bg-secondary/30 p-4">
      <div className="h-fit rounded-lg bg-primary/10 p-2">
        {Icon && <Icon className="h-5 w-5 text-primary" />}
      </div>

      <div>
        <h4 className="mb-1 font-medium text-foreground">{name}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default TravelTip;
