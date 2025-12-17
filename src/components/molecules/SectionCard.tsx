import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { Card } from 'antd';

interface SectionCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: ReactNode;
  className?: string;
}

const SectionCard: FC<SectionCardProps> = ({
  icon: Icon,
  title,
  children,
  className,
}) => {
  return (
    <Card
      className={clsx('border-border bg-card', className)}
      styles={{ body: { padding: 24 } }}
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-2">
          <Icon className="h-5 w-5 text-primary" />
        </div>

        <h2 className="font-display text-xl font-bold text-foreground">{title}</h2>
      </div>

      {children}
    </Card>
  );
};

export default SectionCard;
