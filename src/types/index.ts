import { LucideIcon } from 'lucide-react';

export interface GalleryItem {
  id: number;
  name: string;
  date: string;
  image: string;
  memory: string;
  color: string;
}

export interface BaseItem {
  name: string;
  image?: string;
  description?: string;
  icon?: LucideIcon;
}

export interface BaseCityItem extends BaseItem {
  id: string;
  address: string;
  date: string;
  memory?: string;
  attractions?: BaseItem[];
  foods?: BaseItem[];
  travels?: BaseItem[];
}
